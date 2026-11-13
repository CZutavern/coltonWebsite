import type { Metadata } from "next";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Jeep Computer",
  description: "A Raspberry Pi 5 in-car computer for the Jeep: custom dashboard, CarPlay, sensors, and power system.",
};

const hardware = [
  {
    title: "Raspberry Pi 5",
    description:
      "The central computing platform running the dashboard, sensor software, web interface, and audio-processing control system.",
  },
  {
    title: "14-inch Touchscreen",
    description:
      "A dedicated in-vehicle touchscreen provides the primary interface for vehicle information, diagnostics, navigation, and system controls.",
  },
  {
    title: "Vehicle Sensors",
    description:
      "The system is designed around multiple I²C sensors and analog inputs for monitoring cabin and outside temperature, pressure, light, orientation, electrical conditions, and factory vehicle gauges.",
  },
  {
    title: "Power System",
    description:
      "A dedicated regulated power system supplies the computer and peripherals from the Jeep's electrical system while allowing the vehicle's electrical conditions to be monitored.",
  },
];

const software = [
  "PySide6 touchscreen dashboard",
  "Python sensor-management software",
  "CamillaDSP integration",
  "CarPlay integration",
  "Local web interface",
  "GPIO-controlled amplifier system",
  "Vehicle electrical monitoring",
  "Off-road pitch and roll monitoring",
];

const challenges = [
  {
    title: "Automotive Power",
    text: "Unlike a desktop computer, the system has to operate from an old vehicle electrical system with voltage fluctuations, electrical noise, and large transient loads.",
  },
  {
    title: "Multiple Systems",
    text: "The computer combines vehicle instrumentation, sensors, audio processing, networking, CarPlay, and a touchscreen into one system without allowing one subsystem to interfere with another.",
  },
  {
    title: "Physical Integration",
    text: "The electronics have to fit inside a vehicle that was never designed to contain a modern computer, touchscreen, networking equipment, and custom audio electronics.",
  },
  {
    title: "Reliable Startup and Shutdown",
    text: "The system is designed around vehicle ignition state rather than a conventional computer power button, requiring controlled startup behavior and protection against improper shutdowns.",
  },
];

export default function JeepComputerPage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      <style>{`
        .jc-page * {
          box-sizing: border-box;
        }

        .jc-page a {
          transition: color 180ms ease, border-color 180ms ease,
                      background-color 180ms ease, transform 180ms ease;
        }

        .jc-page a:focus-visible,
        .jc-page button:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .jc-page .card {
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.72),
            rgba(7, 10, 15, 0.9)
          );
        }

        @media (prefers-reduced-motion: no-preference) {
          .jc-page .image-hover {
            transition: transform 500ms ease;
          }

          .jc-page .image-wrap:hover .image-hover {
            transform: scale(1.025);
          }
        }
      `}</style>

      <div className="jc-page">
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
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Project / Embedded Systems
                </p>

                <h1
                  id="hero-title"
                  className="text-5xl font-bold tracking-tight sm:text-6xl"
                >
                  Jeep Computer
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  A custom Raspberry Pi-based onboard computer designed to
                  integrate vehicle monitoring, sensors, audio processing,
                  CarPlay, and a touchscreen interface into my 1975 Jeep
                  Cherokee.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Raspberry Pi", "Python", "PySide6", "I²C", "GPIO", "CarPlay"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="image-wrap overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/20">
                <img
                  src="/images/projects/jeep-computer/JeepComputer.jpg"
                  alt="Jeep Computer installation"
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
              <div className="max-w-3xl">
                <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                  01 / Overview
                </p>
                <h2
                  id="overview-title"
                  className="mt-3 text-3xl font-bold sm:text-4xl"
                >
                  Turning the Jeep into a connected vehicle
                </h2>
                <p className="mt-6 leading-8 text-slate-300">
                  The Jeep Computer is an extension of the electrical and
                  mechanical work already performed on the Cherokee. Instead
                  of adding isolated aftermarket gauges and controls, the goal
                  is to create one central system capable of collecting
                  information from the vehicle and presenting it through a
                  modern interface.
                </p>
                <p className="mt-4 leading-8 text-slate-300">
                  The project combines embedded Linux, Python, electronics,
                  automotive electrical engineering, networking, audio DSP,
                  and custom mechanical installation.
                </p>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section
            aria-labelledby="architecture-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              02 / System Architecture
            </p>
            <h2
              id="architecture-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              One computer, multiple vehicle systems
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Vehicle Inputs", "Analog senders, I²C sensors, ignition state, and electrical measurements."],
                ["02", "Processing", "Python services collect, process, and interpret incoming vehicle data."],
                ["03", "Interface", "A PySide6 dashboard presents vehicle information through the touchscreen."],
                ["04", "Outputs", "GPIO controls, audio processing, CarPlay, and other vehicle systems respond to the computer."],
              ].map(([number, title, text]) => (
                <div key={number} className="card rounded-xl p-6">
                  <span className="font-mono text-xs text-cyan-400">{number}</span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
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
              <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                <div className="image-wrap overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/images/projects/jeep-computer/customBatteryBox.jpg"
                    alt="Custom battery and electrical box for the Jeep"
                    className="image-hover h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                    03 / Hardware
                  </p>
                  <h2
                    id="hardware-title"
                    className="mt-3 text-3xl font-bold sm:text-4xl"
                  >
                    Built for an automotive environment
                  </h2>

                  <div className="mt-8 space-y-5">
                    {hardware.map((item) => (
                      <div key={item.title} className="border-l border-cyan-400/40 pl-5">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Software */}
          <section
            aria-labelledby="software-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              04 / Software
            </p>
            <h2
              id="software-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              A modular software stack
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              The software is being developed as separate components so the
              dashboard can remain responsive while sensor collection, audio
              processing, networking, and vehicle control operate in the
              background.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {software.map((item) => (
                <li
                  key={item}
                  className="card rounded-lg px-5 py-4 font-mono text-sm text-slate-300"
                >
                  <span className="mr-3 text-cyan-400">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Engineering Challenges */}
          <section
            aria-labelledby="challenges-title"
            className="border-y border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                05 / Engineering Challenges
              </p>
              <h2
                id="challenges-title"
                className="mt-3 text-3xl font-bold sm:text-4xl"
              >
                Designing around real-world constraints
              </h2>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {challenges.map((challenge) => (
                  <article key={challenge.title} className="card rounded-xl p-7">
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">
                      {challenge.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Current / Future */}
          <section
            aria-labelledby="future-title"
            className="mx-auto max-w-6xl px-6 py-20"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              06 / Development
            </p>
            <h2
              id="future-title"
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              An evolving platform
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              The Jeep Computer is an ongoing project rather than a fixed
              product. The hardware and software architecture are being
              developed together as new capabilities are added to the Jeep.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Vehicle Data", "More sensors and digital versions of the original vehicle gauges."],
                ["Audio", "Deeper integration with the Jeep's custom multi-channel DSP system."],
                ["Interface", "A more complete touchscreen interface for vehicle status and control."],
              ].map(([title, text]) => (
                <div key={title} className="card rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Related Project
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Automotive Audio & DSP
                </h2>
              </div>

              <Link
                href="/projects/audio-dsp"
                className="inline-flex w-fit border border-cyan-400/40 px-5 py-3 font-mono text-sm text-cyan-300 hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                View Audio Project →
              </Link>
            </div>
          </section>

          {/* Album: every photo from the project */}
          <ProjectAlbum slug="jeep-computer" title="Jeep Computer" />

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
