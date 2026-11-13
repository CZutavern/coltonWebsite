import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import MobileMenu from "../components/mobile-menu";

export default async function ModelsIndex() {
  const modelsDir = path.join(process.cwd(), "..", "portfolio-models");
  const circuitsDir = path.join(process.cwd(), "..", "portfolio-circuits");
  let items: any[] = [];
  
  const readMeta = async (dir: string, kind: string) => {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          try {
            const metaStr = await fs.readFile(path.join(dir, entry.name, "meta.json"), "utf-8");
            const meta = JSON.parse(metaStr);
            meta.kind = kind;
            items.push(meta);
          } catch (e) {}
        }
      }
    } catch (err) {}
  };

  await readMeta(modelsDir, "model");
  await readMeta(circuitsDir, "circuit");

  return (
    <main className="min-h-screen bg-[#08090b] text-white flex flex-col">
      {/* Navigation */}
      <header>
        <nav
          aria-label="Main navigation"
          className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/85 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              aria-label="Colton Zutavern portfolio home"
              className="rounded font-mono text-sm tracking-wider outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
            >
              CZ<span className="text-cyan-400">.</span>
            </Link>
            <MobileMenu />
            <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
              <Link
                href="/#projects"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Projects
              </Link>
              <Link
                href="/models"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Models &amp; Circuits
              </Link>
              <Link
                href="/resume"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Resume
              </Link>
              <Link
                href="/#about"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-20 px-6 flex-grow">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight">3D Models &amp; Circuits</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">Explore interactive 3D models and circuit diagrams from my projects.</p>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(m => (
              <Link key={m.slug} href={`/${m.kind}s/${m.slug}`} className="group block h-full rounded-lg border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]">
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">{m.kind}</p>
                <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">{m.title}</h2>
                {m.description && <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">{m.description}</p>}
                <div className="mt-6 flex items-center text-sm font-medium text-white group-hover:text-cyan-400 transition">
                  View {m.kind} &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-auto">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Colton Zutavern</p>
          <Link
            href="/projects/linux-server"
            className="font-mono transition hover:text-cyan-400"
          >
            Self-hosted on my home server
          </Link>
        </div>
      </footer>
    </main>
  );
}
