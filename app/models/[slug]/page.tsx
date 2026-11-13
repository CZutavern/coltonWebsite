import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import ModelViewer, { ModelMeta } from "./ModelViewer";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const metaPath = path.join(process.cwd(), "..", "portfolio-models", slug, "meta.json");
  
  try {
    const metaStr = await fs.readFile(metaPath, "utf-8");
    const meta: ModelMeta = JSON.parse(metaStr);
    return <ModelViewer slug={slug} meta={meta} />;
  } catch (err) {
    notFound();
  }
}
