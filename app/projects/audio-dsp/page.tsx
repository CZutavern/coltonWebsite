import type { Metadata } from "next";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Audio DSP",
  description: "A custom car audio system built around CamillaDSP digital signal processing.",
};

const signalChain = [
  {
    number: "01",
    title: "CarPlay / Audio Source",
    text: "Audio enters the Jeep through the modern digital source system.",
  },
  {
    number: "02",
    title: "Raspberry Pi",
    text: "The Pi provides the computing platform for audio control and DSP integration.",
  },
  {
    number: "03",
    title: "CamillaDSP",
    text: "Digital processing provides volume control, filtering, channel management, and crossover functionality.",
  },
  {
    number: "04",
    title: "Amplifiers",
    text: "Multiple amplifiers provide the power required by the different speaker groups.",
  },
  {
    number: "05",
    title: "Speaker System",
    text: "Dedicated midrange, tweeter, midbass, and subwoofer drivers create a multi-channel system.",
  },
];

const components = [
  {
    title: "CamillaDSP",
    description:
      "Open-source digital signal processing software provides the core processing layer for the system.",
  },
  {
    title: "Raspberry Pi",
    description:
      "The Pi replaces the role normally handled by a conventional aftermarket DSP/head unit and provides a programmable platform for the entire system.",
  },
  {
    title: "Multi-Channel Amplification",
    description:
      "AudioControl and DS18 amplifiers provide separate amplification for the various sections of the speaker system.",
  },
  {
    title: "Custom Speakers",
    description:
      "The system combines DS18 midrange and tweeter drivers, dedicated midbass drivers, and Sundown Audio subwoofers.",
  },
];

const engineering = [
  {
    title: "Crossover Design",
    text: "Different speaker types require different frequency ranges. Digital filtering allows the system to control which frequencies are sent to each amplifier channel.",
  },
  {
    title: "Gain Structure",
    text: "The amplifier and DSP levels have to be coordinated so the system can achieve useful output without unnecessarily increasing noise or clipping.",
  },
  {
    title: "Electrical Noise",
    text: "The Jeep's electrical environment introduces challenges that are very different from a modern vehicle. Grounding, power distribution, shielding, and signal routing all affect the final result.",
  },
  {
    title: "System Control",
    text: "The Raspberry Pi provides a programmable interface for volume control and amplifier control, allowing the audio system to become part of the larger Jeep Computer project.",
  },
];

export default function AudioDSPPage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      <style>{`
        .audio-page * {
          box-sizing: border-box;
        }

        .audio-page a {
          transition: color 180ms ease, border-color 180ms ease,
                      background-color 180ms ease, transform 180ms ease;
        }

        .audio-page a:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .audio-page .card {
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.72),
            rgba(7, 10, 15, 0.9)
          );
        }

        @media (prefers-reduced-motion: no-preference) {
          .audio-page .image-hover {
            transition: transform 500ms ease;
          }

          .audio-page .image-wrap:hover .image-hover {
            transform: scale(1.025);
          }
        }
      `}</style>

      <div className="audio-page">
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
          <section
            aria-labelledby="hero-title"
            className="mx-auto max-w-6xl px-6 pb-20 pt-36"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Project / Automotive Audio
                </p>

                <h1
                  id="hero-title"
                  className="text-5xl font-bold tracking-tight sm:text-6xl"
                >
                  Automotive Audio & DSP
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  A custom multi-channel automotive audio system built around
                  Raspberry Pi and CamillaDSP, combining digital signal
                  processing, custom amplification, and a large speaker
                  system.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "CamillaDSP",
                    "Raspberry Pi",
                    "8 Channels",
                    "CarPlay",
                    "DSP",
                    "Audio Engineering",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="image-wrap overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/20">
                <img
                  src="/images/projects/audio-dsp/camillaDSP.jpg"
                  alt="CamillaDSP interface used in the Jeep audio system"
                  className="image-hover h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Overview */}
          <section
            aria-labelledby="overview-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                01 / Overview
              </p>

              <h2
                id="overview-title"
                className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl"
              >
                Replacing a conventional car audio system with a programmable
                platform
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <p className="leading-8 text-slate-300">
                  The goal of this project is to build a high-output,
                  multi-channel audio system where the Raspberry Pi handles
                  the digital processing instead of relying entirely on a
                  conventional aftermarket DSP.
                </p>

                <p className="leading-8 text-slate-300">
                  Using CamillaDSP allows the audio system to be treated as an
                  engineering problem. Signal levels, filters, channel
                  routing, volume, and crossover behavior can all be controlled
                  digitally and modified through software.
                </p>
              </div>
            </div>
          </section>

          {/* Signal Chain */}
          <section
            aria-labelledby="signal-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              02 / Signal Chain
            </p>

            <h2
              id="signal-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              From digital source to speaker
            </h2>

            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {signalChain.map((stage) => (
                <div key={stage.number} className="card relative rounded-xl p-6">
                  <span className="font-mono text-xs text-cyan-400">
                    {stage.number}
                  </span>

                  <h3 className="mt-4 font-semibold">{stage.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {stage.text}
                  </p>

                  {stage.number !== "05" && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 hidden text-xl text-cyan-400 md:block"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Hardware */}
          <section
            aria-labelledby="hardware-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-center">
                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                    03 / Hardware
                  </p>

                  <h2
                    id="hardware-title"
                    className="mt-3 text-3xl font-bold sm:text-4xl"
                  >
                    A large custom speaker system
                  </h2>

                  <div className="mt-8 space-y-5">
                    {components.map((component) => (
                      <div
                        key={component.title}
                        className="border-l border-cyan-400/40 pl-5"
                      >
                        <h3 className="font-semibold">{component.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {component.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="image-wrap overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/images/projects/audio-dsp/midBassMount.png"
                    alt="Custom midbass speaker mounting in the Jeep"
                    className="image-hover h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Speaker System */}
          <section
            aria-labelledby="speaker-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              04 / Speaker System
            </p>

            <h2
              id="speaker-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              Separate drivers for separate jobs
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Rather than asking a single speaker to reproduce the entire
              audible range, the system uses dedicated drivers for different
              parts of the spectrum. This gives the DSP more control over the
              signal delivered to each amplifier and speaker.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Midrange", "DS18 PRO-X6.4BM", "Four speakers"],
                ["Tweeters", "DS18 PRO-TW1X/BK", "Four speakers"],
                ["Midbass", "8-inch DS18", "Two speakers"],
                ["Subwoofers", "Sundown SA Classic", "Two 12-inch speakers"],
              ].map(([type, model, quantity]) => (
                <div key={type} className="card rounded-xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    {type}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold">{model}</h3>
                  <p className="mt-2 text-sm text-slate-500">{quantity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DSP */}
          <section
            aria-labelledby="dsp-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
                <div className="image-wrap overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/images/projects/audio-dsp/camillaDSP.jpg"
                    alt="CamillaDSP software interface"
                    className="image-hover h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                    05 / Digital Signal Processing
                  </p>

                  <h2
                    id="dsp-title"
                    className="mt-3 text-3xl font-bold sm:text-4xl"
                  >
                    Audio processing as an engineering system
                  </h2>

                  <p className="mt-6 leading-8 text-slate-300">
                    CamillaDSP gives the project a software-defined signal
                    processing layer. Instead of permanently committing the
                    system to one configuration, the processing chain can be
                    changed and tested through software.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Channel routing",
                      "Volume control",
                      "High-pass filtering",
                      "Low-pass filtering",
                      "Crossover processing",
                      "Gain management",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 font-mono text-sm text-slate-300"
                      >
                        <span className="mr-2 text-cyan-400">+</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Engineering */}
          <section
            aria-labelledby="engineering-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              06 / Engineering
            </p>

            <h2
              id="engineering-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              More than installing speakers
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {engineering.map((item) => (
                <article key={item.title} className="card rounded-xl p-7">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Integration */}
          <section
            aria-labelledby="integration-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                07 / Vehicle Integration
              </p>

              <h2
                id="integration-title"
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Audio and computing become one system
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                The audio system is not being developed independently from the
                Jeep Computer. The Raspberry Pi provides a common computing
                platform, allowing the audio controls, CarPlay interface,
                amplifier control, and vehicle monitoring system to work
                together.
              </p>

              <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                      Input
                    </p>
                    <p className="mt-3 font-semibold">CarPlay / Audio Source</p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                      Processing
                    </p>
                    <p className="mt-3 font-semibold">
                      Raspberry Pi + CamillaDSP
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                      Output
                    </p>
                    <p className="mt-3 font-semibold">
                      Amplifiers + Multi-Driver System
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future */}
          <section
            aria-labelledby="future-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              08 / Development
            </p>

            <h2
              id="future-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              An ongoing audio engineering project
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              The system continues to evolve alongside the Jeep Computer.
              Future work includes refining the DSP configuration, improving
              electrical noise performance, tuning the system, and integrating
              additional controls into the vehicle&apos;s central computer.
            </p>
          </section>

          {/* Related */}
          <section className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Related Project
                </p>
                <h2 className="mt-2 text-2xl font-bold">Jeep Computer</h2>
              </div>

              <Link
                href="/projects/jeep-computer"
                className="inline-flex w-fit border border-cyan-400/40 px-5 py-3 font-mono text-sm text-cyan-300 hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                View Jeep Computer →
              </Link>
            </div>
          </section>

          {/* Album: every photo from the project */}
          <ProjectAlbum slug="audio-dsp" title="Automotive Audio & DSP" />

          {/* Footer */}
          <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span>Colton Zutavern</span>
              <span>Electrical Engineering · Texas A&M University</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
