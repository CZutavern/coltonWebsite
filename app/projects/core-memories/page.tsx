import type { Metadata } from "next";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Core Memories",
  description: "Ferrite core memory inspired by the Apollo Guidance Computer, built with Aggies Create.",
};

const projectStages = [
  {
    number: "01",
    title: "Research",
    text: "Study the operating principles behind magnetic core memory and how early computer systems used it to store digital information.",
  },
  {
    number: "02",
    title: "Design",
    text: "Develop a small-scale core-memory architecture that can demonstrate the same fundamental method of storing information magnetically.",
  },
  {
    number: "03",
    title: "Build",
    text: "Construct the physical core array, wiring, drive circuitry, and supporting electronics required to read and write the memory.",
  },
  {
    number: "04",
    title: "Test",
    text: "Verify that individual magnetic cores can reliably represent binary states and that information can be written, read, and retained.",
  },
];

const concepts = [
  {
    title: "Magnetic Hysteresis",
    text: "The project relies on the magnetic properties of ferrite cores. Each core can retain a magnetic state after the driving current is removed.",
  },
  {
    title: "Binary Storage",
    text: "Different magnetic states are used to represent digital information, allowing physical magnetic components to function as memory.",
  },
  {
    title: "Word Lines",
    text: "A matrix of wires is used to select and interact with individual cores, providing the addressing mechanism needed to access stored information.",
  },
  {
    title: "Read / Write Operation",
    text: "The electronics must control current through the core array precisely enough to write a desired state and detect the magnetic response when reading it.",
  },
];

export default function CoreMemoriesPage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      <style>{`
        .core-page * {
          box-sizing: border-box;
        }

        .core-page a {
          transition:
            color 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            transform 180ms ease;
        }

        .core-page a:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .core-page .card {
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.72),
            rgba(7, 10, 15, 0.9)
          );
        }

        .core-page .grid-pattern {
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.055) 1px, transparent 1px);
          background-size: 42px 42px;
        }
      `}</style>

      <div className="core-page">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-50 bg-cyan-400 px-4 py-2 font-semibold text-black"
        >
          Skip to content
        </a>

        {/* Navigation */}
        <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#05070a]/90 backdrop-blur-xl">
          <nav
            aria-label="Primary navigation"
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          >
            <Link
              href="/"
              className="font-mono text-sm font-bold tracking-widest text-cyan-400"
            >
              CZ
            </Link>

            <div className="flex gap-6 text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
              <Link href="/resume" className="hover:text-cyan-400">
                Resume
              </Link>
            </div>
          </nav>
        </header>

        <div id="main-content">
          {/* Hero */}
          <section className="grid-pattern border-b border-white/10">
            <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
              <div className="max-w-4xl">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="border border-cyan-400/30 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-300">
                    Aggies Create
                  </span>

                  <span className="border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-amber-300">
                    In Progress
                  </span>
                </div>

                <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Project / Computer Engineering
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Core Memories
                </h1>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                  Building a working magnetic core-memory system inspired by
                  the technology used in early spacecraft and computers,
                  including the Apollo missions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Magnetic Memory",
                    "Ferrite Cores",
                    "Digital Logic",
                    "Electronics",
                    "Embedded Systems",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16 grid gap-5 sm:grid-cols-3">
                <div className="card rounded-xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    Organization
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Aggies Create
                  </p>
                </div>

                <div className="card rounded-xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    Project Status
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    In Development
                  </p>
                </div>

                <div className="card rounded-xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    Core Technology
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Magnetic Core Memory
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section
            aria-labelledby="overview-title"
            className="border-b border-white/10"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                01 / Overview
              </p>

              <h2
                id="overview-title"
                className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl"
              >
                Recreating an important piece of early computing technology
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <p className="leading-8 text-slate-300">
                  As part of Aggies Create, I am working with a teammate to
                  develop a physical magnetic core-memory system. The project
                  is based on the same fundamental technology used in early
                  computers and spacecraft, including systems associated with
                  the Apollo missions.
                </p>

                <p className="leading-8 text-slate-300">
                  Rather than treating memory as something that only exists
                  inside a modern integrated circuit, the project explores how
                  binary information can be physically stored using the
                  magnetic state of individual ferrite cores.
                </p>
              </div>
            </div>
          </section>

          {/* Why */}
          <section
            aria-labelledby="why-title"
            className="bg-white/[0.02] border-b border-white/10"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-[1fr_.8fr]">
                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                    02 / Motivation
                  </p>

                  <h2
                    id="why-title"
                    className="mt-3 text-3xl font-bold sm:text-4xl"
                  >
                    Understanding computing from the hardware up
                  </h2>

                  <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                    Modern computers hide enormous amounts of complexity inside
                    integrated circuits. This project takes the opposite
                    approach: build a memory system where the physical
                    mechanism behind storing a bit can actually be seen and
                    understood.
                  </p>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                    Working on the project provides an opportunity to connect
                    concepts from electrical engineering, electromagnetics,
                    digital logic, and computer architecture in one physical
                    system.
                  </p>
                </div>

                <div className="card rounded-2xl p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    Historical Connection
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    Apollo-era computing
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    Magnetic core memory was an important memory technology
                    during the early era of electronic computing. Apollo
                    guidance computers used core memory technology to retain
                    program information in a form that was well suited to the
                    reliability requirements of the mission.
                  </p>

                  <div className="mt-6 border-l border-cyan-400/40 pl-5">
                    <p className="font-mono text-sm text-cyan-300">
                      Our goal
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Recreate the fundamental concept at a small,
                      understandable scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section
            aria-labelledby="concepts-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              03 / How It Works
            </p>

            <h2
              id="concepts-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              Storing information with magnetism
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              The core of the project is a matrix of small ferrite magnetic
              cores. Electrical currents through wires surrounding the cores
              can change their magnetic states, creating a physical mechanism
              for storing binary information.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {concepts.map((concept) => (
                <article key={concept.title} className="card rounded-xl p-7">
                  <h3 className="text-xl font-semibold">
                    {concept.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {concept.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Development */}
          <section
            aria-labelledby="development-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                04 / Development
              </p>

              <h2
                id="development-title"
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                From magnetic cores to a working memory
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {projectStages.map((stage) => (
                  <article
                    key={stage.number}
                    className="card rounded-xl p-6"
                  >
                    <span className="font-mono text-xs text-cyan-400">
                      {stage.number}
                    </span>

                    <h3 className="mt-4 text-lg font-semibold">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {stage.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering */}
          <section
            aria-labelledby="engineering-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              05 / Engineering
            </p>

            <h2
              id="engineering-title"
              className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl"
            >
              Where electrical engineering meets computer architecture
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Electromagnetics",
                  text: "Understanding magnetic fields, current, inductance, hysteresis, and how the geometry of the system affects the stored state.",
                },
                {
                  title: "Digital Logic",
                  text: "Converting binary information into the electrical signals required to address and control the physical memory.",
                },
                {
                  title: "Circuit Design",
                  text: "Developing the circuitry needed to drive the memory array and detect its response without damaging the magnetic cores.",
                },
                {
                  title: "Timing",
                  text: "Coordinating addressing, current pulses, and read/write operations so the memory behaves predictably.",
                },
                {
                  title: "Reliability",
                  text: "Testing the system repeatedly to determine whether information can be stored and retrieved consistently.",
                },
                {
                  title: "Computer Architecture",
                  text: "Connecting the physical memory array to the larger concept of how computers store and retrieve information.",
                },
              ].map((item) => (
                <article key={item.title} className="card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-cyan-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Team */}
          <section
            aria-labelledby="team-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                06 / Collaboration
              </p>

              <h2
                id="team-title"
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Building it as a team
              </h2>

              <div className="mt-8 max-w-3xl">
                <p className="leading-8 text-slate-300">
                  I am working as a team lead with one other student on this
                  project through Aggies Create. The project requires dividing
                  the work between research, electrical design, physical
                  construction, testing, and documentation while keeping the
                  entire memory system working as one coherent design.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                  Current Status
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Research & Development
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  This project is currently in development. As the design
                  progresses, this page will be updated with photographs,
                  circuit designs, testing results, and documentation of the
                  completed memory system.
                </p>
              </div>
            </div>
          </section>

          {/* Build guide: interactive perfboard layouts and LTspice results */}
          <section
            aria-labelledby="build-guide-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              06 / Build Guide
            </p>

            <h2
              id="build-guide-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              Interactive perfboard build guide
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              All twelve textbook circuits laid out on two perfboards, a driver
              board and a sense board, with every part on a hole, the solder
              bridges and jumper wires shown separately, and the cables between
              the boards. Click any net to light it up across the whole machine,
              step through a write and a read, and see the LTspice results for
              the full design. It is checked on paper and in simulation; the
              hardware is not built yet.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/circuits/core-memory/guide.html"
                className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Open the full guide
              </a>
              <a
                href="/circuits/core-memory/core_memory.cir"
                download
                className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-slate-200 hover:border-cyan-400"
              >
                Download the LTspice netlist
              </a>
            </div>

            <iframe
              src="/circuits/core-memory/guide.html"
              title="Core memory interactive build guide"
              loading="lazy"
              className="mt-8 h-[80vh] w-full rounded-xl border border-white/10 bg-white"
            />
          </section>

          {/* Future Updates */}
          <section
            aria-labelledby="future-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              07 / Future Updates
            </p>

            <h2
              id="future-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              This page will grow with the project
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Once construction begins, the project documentation will include
              photographs of the core array, electronics, wiring, prototypes,
              and testing process. The goal is to document not just the final
              product, but the engineering process used to get there.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Photos", "Build photos and documentation of the physical memory array."],
                ["Schematics", "Circuit diagrams and explanations of the read/write electronics."],
                ["Testing", "Results showing how reliably the system can store and retrieve information."],
              ].map(([title, text]) => (
                <div key={title} className="card rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Album: every photo from the project */}
          <ProjectAlbum slug="core-memories" title="Core Memory" />

          {/* Footer */}
          <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span>Colton Zutavern</span>
              <span>
                Electrical Engineering · Texas A&M University
              </span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
