import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "../components/mobile-menu";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional technical certifications and credentials of Colton Zutavern.",
};

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  score?: string;
  scorePercent?: string;
  passingScore?: string;
  status: string;
  skills: string[];
  description: string;
}

const certifications: Certification[] = [
  {
    title: "IT Specialist: Java",
    issuer: "Certiport (NCS Pearson)",
    issueDate: "May 10, 2023",
    category: "Software Development",
    score: "880 / 1000",
    scorePercent: "88%",
    passingScore: "700",
    status: "Verified / Passed",
    skills: ["Java Fundamentals", "Object-Oriented Programming", "Data Structures", "Flow Control", "Code Debugging"],
    description: "Demonstrated mastery in core Java programming, object-oriented software architecture, flow control implementation, data structure design, and error debugging.",
  },
  {
    title: "Unity Certified User: Programmer",
    issuer: "Certiport / Unity Technologies",
    issueDate: "April 10, 2023",
    category: "Software Development",
    score: "800 / 1000",
    scorePercent: "80%",
    passingScore: "700",
    status: "Verified / Passed",
    skills: ["C# Programming", "Unity Engine API", "Game Physics", "Runtime Debugging", "Asset Pipeline"],
    description: "Certified competency in C# programming within the Unity ecosystem, runtime mechanics, physics integration, API debugging, and real-time graphics interactivity.",
  },
  {
    title: "Visual Design using Adobe Photoshop 2021",
    issuer: "Certiport / Adobe",
    issueDate: "March 3, 2023",
    category: "Design & Creative",
    score: "846 / 1000",
    scorePercent: "85%",
    passingScore: "700",
    status: "Verified / Passed",
    skills: ["Digital Image Processing", "Visual Composition", "Asset Preparation", "Color Management", "UI Graphics"],
    description: "Validated industry-standard graphic design proficiency, visual element manipulation, digital asset preparation for technical publications, and interface styling.",
  },
  {
    title: "Texas Food Handler Certification",
    issuer: "State of Texas / 360training",
    issueDate: "May 29, 2024",
    category: "Operations",
    status: "Active / Certified",
    skills: ["Commercial Safety Standards", "HACCP Principles", "Sanitation Compliance", "Cross-Contamination Prevention"],
    description: "Official state certification in food safety protocols and regulatory hygiene standards, applied directly to the founding and operation of Better Without Wheat Bakery.",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-mono text-xl font-bold tracking-tight">
            CZ<span className="text-cyan-400">.</span>
          </Link>

          <MobileMenu />
            <div className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
            <Link href="/#projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="/models" className="transition hover:text-white">
              Models &amp; Circuits
            </Link>
            <Link href="/resume" className="transition hover:text-white">
              Resume
            </Link>
            <Link href="/certifications" className="text-white">
              Certifications
            </Link>
            <Link href="/#about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-36">
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
            Credentials &amp; Certifications
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technical Certifications
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Official industry certifications and professional credentials in software engineering, 
            applied programming, visual design, and operational compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                    {cert.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {cert.issueDate}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-white">
                  {cert.title}
                </h2>
                <p className="text-sm text-zinc-400">{cert.issuer}</p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {cert.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    {cert.score ? (
                      <span className="text-zinc-400">
                        Score: <strong className="text-white">{cert.score}</strong>
                        {cert.scorePercent && (
                          <span className="text-cyan-400 font-mono ml-1.5">({cert.scorePercent})</span>
                        )}
                      </span>
                    ) : (
                      <span className="text-zinc-400">Standard: <strong className="text-white">State Certified</strong></span>
                    )}
                  </div>
                  <span className="font-mono text-emerald-400 font-medium">
                    ● {cert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/resume"
            className="font-mono text-sm text-zinc-400 transition hover:text-cyan-400"
          >
            ← View Full Academic &amp; Project Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
