import type { MetadataRoute } from "next";

const SITE = "https://coltonzutavern.com";
const ROUTES = [
  "",
  "/resume",
  "/certifications",
  "/models",
  "/projects/audio-dsp",
  "/projects/core-memories",
  "/projects/jeep",
  "/projects/jeep-computer",
  "/projects/linux-server",
  "/projects/multi-agent-orchestration",
  "/projects/provisional-patent",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
