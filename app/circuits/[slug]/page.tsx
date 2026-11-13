import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import CircuitViewer from "./CircuitViewer";
import JeepGuide from "./JeepGuide";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "jeep-circuits") return <JeepGuide />;
  const metaPath = path.join(process.cwd(), "..", "portfolio-circuits", slug, "meta.json");
  
  try {
    const metaStr = await fs.readFile(metaPath, "utf-8");
    const meta = JSON.parse(metaStr);
    return <CircuitViewer slug={slug} meta={meta} />;
  } catch (err) {
    notFound();
  }
}
