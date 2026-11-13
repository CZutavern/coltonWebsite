"use client";

import React from "react";
import Link from "next/link";
import MobileMenu from "../../components/mobile-menu";

export type CircuitMeta = {
  title: string;
  description?: string;
  files?: string[];
};

export default function CircuitViewer({ slug, meta }: { slug: string; meta: CircuitMeta }) {
  const base = `/circuits/${slug}/`;
  const htmlFile = meta.files?.find((f) => f.endsWith(".html"));

  if (htmlFile) {
    return (
      <div className="min-h-screen bg-[#08090b] text-white flex flex-col">
        {/* Navigation */}
        <header className="shrink-0 relative z-50">
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
              </div>
            </div>
          </nav>
        </header>

        {/* Embedded Guide */}
        <div className="pt-[61px] flex-grow w-full h-[calc(100vh-61px)]">
          <iframe
            src={base + htmlFile}
            title={meta.title}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    );
  }

  const images = meta.files?.filter((f) => f.endsWith(".png") || f.endsWith(".svg")) || [];
  const others = meta.files?.filter((f) => !f.endsWith(".png") && !f.endsWith(".svg")) || [];

  return (
    <div className="min-h-screen bg-[#08090b] text-white flex flex-col">
      {/* Navigation */}
      <header className="shrink-0 relative z-50">
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
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-20 px-6 flex-grow">
        <div className="mx-auto max-w-4xl">
          <Link href="/models" className="inline-block mb-8 text-sm font-medium text-zinc-400 hover:text-white transition">
            &larr; Back to Models &amp; Circuits
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">{meta.title}</h1>
          {meta.description && <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{meta.description}</p>}

          {images.length > 0 && (
            <div className="mt-16">
              <h2 className="font-mono text-sm tracking-widest text-cyan-400 mb-6">DIAGRAMS</h2>
              <div className="flex flex-col gap-12">
                {images.map((img) => (
                  <div key={img} className="rounded-lg border border-white/10 bg-white/[0.02] p-2 md:p-6">
                    <h3 className="mb-4 text-sm font-medium text-zinc-300 px-2">{img}</h3>
                    <div className="rounded bg-white p-2">
                      <img src={base + img} alt={img} className="w-full h-auto block rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div className="mt-16">
              <h2 className="font-mono text-sm tracking-widest text-cyan-400 mb-6">DOWNLOADS</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {others.map((f) => (
                  <li key={f}>
                    <a
                      href={base + f}
                      download
                      className="block rounded-lg border border-white/10 bg-white/[0.02] px-6 py-4 transition hover:bg-white/[0.05] hover:border-white/20"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span className="font-medium text-zinc-200">{f}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Colton Zutavern</p>
          <Link href="/projects/linux-server" className="font-mono transition hover:text-cyan-400">
            Self-hosted on my home server
          </Link>
        </div>
      </footer>
    </div>
  );
}
