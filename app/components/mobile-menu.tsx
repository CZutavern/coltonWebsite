"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/models", label: "Models & Circuits" },
  { href: "/resume", label: "Resume" },
  { href: "/certifications", label: "Certifications" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>
      {open && (
        <div
          id="mobile-menu-panel"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#08090b] px-6 py-3"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-zinc-200 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
