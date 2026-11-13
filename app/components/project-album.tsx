"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Photos come from /albums/<slug>/manifest.json, which scripts/build-albums.mjs
// rebuilds on the server, so adding photos never needs a site rebuild.
type Photo = {
  full: string;
  thumb: string;
  w: number;
  h: number;
  date: string;
};

function formatDate(date: string) {
  return new Date(`${date}Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function ProjectAlbum({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    fetch(`/albums/${slug}/manifest.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((manifest) => setPhotos(manifest?.photos ?? []))
      .catch(() => setPhotos([]));
  }, [slug]);

  const step = useCallback(
    (delta: number) =>
      setOpen((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, step]);

  if (photos.length === 0) return null;

  const current = open === null ? null : photos[open];

  return (
    <section
      aria-labelledby={`${slug}-album-title`}
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
          Album
        </p>

        <h2
          id={`${slug}-album-title`}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Every photo from the project.
        </h2>

        <p className="mt-4 text-zinc-400">
          {photos.length} {photos.length === 1 ? "photo" : "photos"}. Click any
          photo to view it full size.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              key={photo.full}
              type="button"
              onClick={() => setOpen(index)}
              aria-label={`Open ${title} photo ${index + 1} of ${photos.length}`}
              className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-zinc-900"
            >
              <img
                src={photo.thumb}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo ${open + 1} of ${photos.length}`}
          className="fixed inset-0 z-[60] flex flex-col bg-black/95"
          onClick={() => setOpen(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 font-mono text-sm text-zinc-400 sm:px-6">
            <span>
              {open + 1} / {photos.length} · {formatDate(current.date)}
            </span>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="rounded px-3 py-1 text-white hover:bg-white/10"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-16">
            <img
              src={current.full}
              alt={`${title} photo ${open + 1}`}
              width={current.w}
              height={current.h}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded object-contain"
            />

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-xl text-white hover:bg-white/20 sm:block"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-xl text-white hover:bg-white/20 sm:block"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
