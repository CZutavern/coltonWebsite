import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "1975 Jeep Cherokee Restoration",
  description: "Multi-summer restoration of a 1975 Jeep Cherokee: mechanical, structural, electrical, and interior work.",
};

const photos = [
  {
    src: "/images/projects/jeep/beforePaint.JPG",
    title: "Bodywork Before Paint",
    description:
      "The body after extensive restoration and preparation work, ready for the next stage of the build.",
  },
  {
    src: "/images/projects/jeep/beforePaint2.JPG",
    title: "Paint Preparation",
    description:
      "Additional preparation and bodywork completed before painting the Jeep.",
  },
  {
    src: "/images/projects/jeep/afterPaint.jpg",
    title: "After Paint",
    description:
      "The Jeep after the exterior restoration and paint work was completed.",
  },
  {
    src: "/images/projects/jeep/weldedQuarterPanels.JPG",
    title: "Quarter Panel Repair",
    description:
      "The rear quarter panels were repaired by carefully measuring, cutting, welding, and grinding replacement sections.",
  },
  {
    src: "/images/projects/jeep/sandblasting.JPG",
    title: "Sandblasting",
    description:
      "Components were stripped and prepared through sandblasting before being restored and refinished.",
  },
  {
    src: "/images/projects/jeep/transmissionInternals.JPG",
    title: "Transmission Internals",
    description:
      "Inspection and rebuilding work on the TH400 automatic transmission.",
  },
  {
    src: "/images/projects/jeep/flushingCoolant.JPG",
    title: "Cooling System",
    description:
      "The cooling system was flushed and serviced as part of bringing the drivetrain back into reliable operation.",
  },
  {
    src: "/images/projects/jeep/withGrill.JPG",
    title: "Grille Installed",
    description:
      "The restored front end coming together with the original-style grille installed.",
  },
  {
    src: "/images/projects/jeep/maskedGrill.JPG",
    title: "Grille Preparation",
    description:
      "The grille during the preparation and refinishing process.",
  },
  {
    src: "/images/projects/jeep/instrumentCluster.JPG",
    title: "Instrument Cluster",
    description:
      "The original instrument cluster was removed, restored, and integrated back into the Jeep's electrical system.",
  },
  {
    src: "/images/projects/jeep/steeringWheel.JPG",
    title: "Steering Wheel",
    description:
      "Restored interior components coming back together during the build.",
  },
  {
    src: "/images/projects/jeep/seats.JPG",
    title: "Custom Seats",
    description:
      "2020 Dodge Challenger seats installed using custom fabricated mounting brackets.",
  },
  {
    src: "/images/projects/jeep/soundproofing2.JPG",
    title: "Soundproofing",
    description:
      "Additional soundproofing installed throughout the interior to improve the cabin environment and support the custom audio system.",
  },
  {
    src: "/images/projects/jeep/soundProofing.JPG",
    title: "Interior Soundproofing",
    description:
      "Soundproofing work as part of the Jeep's larger custom audio and electrical system.",
  },
  {
    src: "/images/projects/jeep/CustomBatteryTray.JPG",
    title: "Custom Battery Tray",
    description:
      "A custom battery mounting solution fabricated for the Jeep's dual-battery electrical system.",
  },
  {
    src: "/images/projects/jeep/batteries.JPG",
    title: "Dual Battery System",
    description:
      "Two 100Ah AGM batteries installed through a battery isolator to provide additional electrical capacity for the vehicle and audio system.",
  },
  {
    src: "/images/projects/jeep/electronicsBox.JPG",
    title: "Electronics Box",
    description:
      "The custom electronics area that houses components for the Jeep's modern electrical and embedded systems.",
  },
];

const sections = [
  {
    number: "01",
    title: "The Beginning",
    text: "I started working on this 1975 Jeep Cherokee during my sophomore year of high school. When I got it, the vehicle was not driveable, the engine was not running, and the brakes were not functioning.",
  },
  {
    number: "02",
    title: "Mechanical Restoration",
    text: "The restoration involved rebuilding major mechanical systems, repairing the frame, rebuilding the axles, servicing the drivetrain, and bringing the engine back to reliable operation.",
  },
  {
    number: "03",
    title: "Frame & Body",
    text: "The body was separated from the frame so the structural components could be inspected and repaired. Damaged areas of the frame were reinforced using thicker steel salvaged from an F-350 chassis. The rear quarter panels were also carefully measured, cut, welded, and ground smooth.",
  },
  {
    number: "04",
    title: "Electrical System",
    text: "A large portion of the original wiring was replaced. I used the factory service manual to understand the original electrical system and rebuilt much of the Jeep's wiring while adding new circuits for modern equipment.",
  },
  {
    number: "05",
    title: "Interior",
    text: "The interior was modernized while retaining the character of the original Jeep. The instrument cluster was restored, soundproofing was added, and 2020 Dodge Challenger seats were installed using custom fabricated brackets.",
  },
  {
    number: "06",
    title: "Electrical & Audio",
    text: "The Jeep now incorporates a substantially upgraded electrical system, including dual 100Ah AGM batteries, a battery isolator, a large inverter, custom audio equipment, and electronics for the onboard computer.",
  },
  {
    number: "07",
    title: "Embedded Systems",
    text: "The project has expanded beyond restoration into embedded engineering. A Raspberry Pi-based onboard computer is being developed to monitor vehicle systems, read sensors, provide a touchscreen interface, support CarPlay, and control a custom digital audio system.",
  },
];

export default function JeepPage() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-sm tracking-wider">
            CZ<span className="text-cyan-400">.</span>
          </Link>

          <div className="flex gap-6 text-sm text-zinc-400">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/resume"
              className="transition hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="font-mono text-sm text-zinc-500 transition hover:text-cyan-400"
          >
            ← Back to projects
          </Link>

          <p className="mt-12 font-mono text-sm tracking-[0.25em] text-cyan-400">
            PROJECT / 001
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            1975 Jeep
            <br />
            <span className="text-zinc-500">Cherokee</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            A long-term restoration and engineering project combining
            mechanical restoration, fabrication, automotive electrical work,
            embedded computing, and custom audio.
          </p>

          {/* Hero Image */}
          <div className="relative mt-14 h-[400px] overflow-hidden rounded-2xl border border-white/10 sm:h-[550px]">
            <Image
              src="/images/projects/jeep/afterPaint.jpg"
              alt="1975 Jeep Cherokee after restoration"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs uppercase tracking-widest text-white/70">
                Restoration & modernization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-3">
          <div>
            <p className="font-mono text-sm tracking-widest text-cyan-400">
              OVERVIEW
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Six years of building.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400 lg:col-span-2">
            <p>
              This Jeep has been one of my longest-running projects. I began
              working on it during high school and have continued developing
              it through college.
            </p>

            <p>
              What started as a non-running 1975 Jeep Cherokee eventually
              became a complete restoration and modernization project. Almost
              every major system has required some combination of
              troubleshooting, fabrication, rebuilding, or redesign.
            </p>

            <p>
              The project has also become a way to apply concepts from
              electrical engineering to a real vehicle. The newer systems
              include embedded computing, sensors, digital signal processing,
              custom electronics, and methods for reducing electrical noise in
              an older automotive electrical environment.
            </p>
          </div>
        </div>
      </section>

      {/* Restoration Timeline */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="font-mono text-sm tracking-widest text-cyan-400">
              RESTORATION
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              From project vehicle to engineering platform.
            </h2>
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <div
                key={section.number}
                className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[120px_1fr]"
              >
                <div className="font-mono text-sm text-cyan-400">
                  {section.number}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="font-mono text-sm tracking-widest text-cyan-400">
              08 / GALLERY
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              The build.
            </h2>

            <p className="mt-5 max-w-2xl text-zinc-400">
              Photos documenting the restoration, fabrication, mechanical
              work, electrical systems, and interior modifications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-zinc-900 ${
                    index === 0
                      ? "h-80 sm:h-[420px]"
                      : "h-64"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {photo.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm tracking-widest text-cyan-400">
            ENGINEERING
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="font-mono text-xs text-cyan-400">
                MECHANICAL
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Restoration
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Engine, drivetrain, axles, brakes, frame, bodywork, and
                suspension restoration.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="font-mono text-xs text-cyan-400">
                ELECTRICAL
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Vehicle Systems
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Custom wiring, power distribution, battery systems,
                protection circuitry, and electrical troubleshooting.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="font-mono text-xs text-cyan-400">
                EMBEDDED
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Jeep Computer
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Raspberry Pi computing, sensors, touchscreen controls,
                vehicle monitoring, and custom software.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="font-mono text-xs text-cyan-400">
                AUDIO
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                DSP System
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Multi-channel amplification, digital signal processing,
                filtering, noise reduction, and custom audio integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.025] p-8 sm:p-12">
            <p className="font-mono text-sm tracking-widest text-cyan-400">
              CURRENT STATE
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Still being built.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              The restoration is not finished. The Jeep continues to evolve
              as I add new electronics, sensors, embedded systems, audio
              equipment, and other improvements. The project has effectively
              become a test platform for applying electrical engineering to a
              real-world system.
            </p>

            <div className="mt-8">
              <Link
                href="/projects/jeep-computer"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                Explore the Jeep Computer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Album: every photo from the project */}
      <ProjectAlbum slug="jeep" title="1975 Jeep Cherokee" />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Colton Zutavern</p>

          <Link
            href="/"
            className="font-mono transition hover:text-zinc-300"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
