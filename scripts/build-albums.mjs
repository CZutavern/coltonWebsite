// Builds the web copies for each project's album section.
//
// Sources, per project slug:
//   ~/portfolio-albums/<slug>/            drop folder (the Jeep one is mirrored from the desktop)
//   public/images/projects/<slug>/        images already used on the project page
// Output (served by nginx at /albums/):
//   /srv/portfolio-web/albums/<slug>/full/*.webp    max 2000px
//   /srv/portfolio-web/albums/<slug>/thumb/*.webp   max 640px
//   /srv/portfolio-web/albums/<slug>/manifest.json  read by app/components/project-album.tsx
//
// sharp drops all metadata (EXIF, GPS) unless asked to keep it, so no locations get published.
// Runs from cron every few minutes; only new or changed photos are processed.

import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const SLUGS = [
  "jeep",
  "jeep-computer",
  "audio-dsp",
  "linux-server",
  "core-memories",
  "provisional-patent",
];
const DROP = path.join(os.homedir(), "portfolio-albums");
const PUBLIC = fileURLToPath(new URL("../public/images/projects/", import.meta.url));
const OUT = "/srv/portfolio-web/albums";
const IMAGE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true, recursive: true }).catch(() => []);
  return entries
    .filter((e) => e.isFile() && IMAGE.test(e.name))
    .map((e) => path.join(e.parentPath, e.name));
}

// "2023:06:14 13:05:22" is how EXIF stores dates; the first one found is close enough for sorting.
function exifDate(exif) {
  const m = exif?.toString("latin1").match(/(\d{4}):(\d\d):(\d\d) (\d\d):(\d\d):(\d\d)/);
  return m ? `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}` : null;
}

async function buildAlbum(slug) {
  const out = path.join(OUT, slug);
  await fs.mkdir(path.join(out, "full"), { recursive: true });
  await fs.mkdir(path.join(out, "thumb"), { recursive: true });

  const previous = JSON.parse(await fs.readFile(path.join(out, "manifest.json"), "utf8").catch(() => "{}"));
  const known = new Map((previous.photos ?? []).map((p) => [p.full, p]));

  const sources = [
    ...(await listImages(path.join(DROP, slug))),
    ...(await listImages(path.join(PUBLIC, slug))),
  ];

  const photos = [];
  const seen = new Set();
  for (const src of sources) {
    const stat = await fs.stat(src);
    const key = createHash("sha1").update(`${src}|${stat.size}|${stat.mtimeMs}`).digest("hex").slice(0, 10);
    const base = path.parse(src).name.replace(/[^A-Za-z0-9_-]+/g, "-");
    const name = `${base}-${key}.webp`;
    const full = `/albums/${slug}/full/${name}`;
    if (seen.has(full)) continue;
    seen.add(full);

    let photo = known.get(full);
    if (!photo) {
      try {
        const meta = await sharp(src, { failOn: "none" }).metadata();
        const info = await sharp(src, { failOn: "none" })
          .rotate()
          .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(path.join(out, "full", name));
        await sharp(src, { failOn: "none" })
          .rotate()
          .resize({ width: 640, height: 640, fit: "inside", withoutEnlargement: true })
          .webp({ quality: 72 })
          .toFile(path.join(out, "thumb", name));
        photo = {
          full,
          thumb: `/albums/${slug}/thumb/${name}`,
          w: info.width,
          h: info.height,
          date: exifDate(meta.exif) ?? new Date(stat.mtimeMs).toISOString().slice(0, 19),
        };
        console.log(`${slug}: added ${path.basename(src)}`);
      } catch (err) {
        console.error(`${slug}: skipped ${src}: ${err.message}`);
        continue;
      }
    }
    photos.push(photo);
  }

  // Remove web copies whose source photo is gone.
  const keep = new Set(photos.map((p) => path.basename(p.full)));
  for (const size of ["full", "thumb"]) {
    for (const file of await fs.readdir(path.join(out, size))) {
      if (!keep.has(file)) {
        await fs.rm(path.join(out, size, file));
        if (size === "full") console.log(`${slug}: removed ${file}`);
      }
    }
  }

  photos.sort((a, b) => a.date.localeCompare(b.date) || a.full.localeCompare(b.full));
  const tmp = path.join(out, "manifest.json.tmp");
  await fs.writeFile(tmp, JSON.stringify({ photos }));
  await fs.rename(tmp, path.join(out, "manifest.json"));
}

for (const slug of SLUGS) {
  await fs.mkdir(path.join(DROP, slug), { recursive: true });
  await buildAlbum(slug);
}
