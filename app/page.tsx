
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/mobile-menu";

const projects = [
  {
    title: "1975 Jeep Cherokee",
    category: "Automotive / Electrical / Embedded",
    description:
      "A long-term restoration and modernization project combining fabrication, mechanical restoration, automotive electrical work, embedded computing, and custom audio.",
    href: "/projects/jeep",
    image: "/images/projects/jeep/afterPaint.jpg",
    imageAlt:
      "Restored 1975 Jeep Cherokee after bodywork, painting, and mechanical restoration",
  },
  {
    title: "Jeep Computer",
    category: "Embedded Systems / Software",
    description:
      "A Raspberry Pi-based onboard computer for vehicle monitoring, sensors, CarPlay, custom controls, and digital signal processing.",
    href: "/projects/jeep-computer",
    image: "/images/projects/jeep-computer/JeepComputer.jpg",
    imageAlt:
      "Jeep Computer Raspberry Pi-based onboard computer installation",
  },
  {
    title: "Automotive Audio & DSP",
    category: "Audio / DSP / Electronics",
    description:
      "A custom multi-channel automotive audio system using Raspberry Pi-based digital signal processing and dedicated amplification.",
    href: "/projects/audio-dsp",
    image: "/images/projects/audio-dsp/camillaDSP.jpg",
    imageAlt:
      "CamillaDSP interface used for the Jeep's custom automotive audio system",
  },
  {
    title: "Modular Wooden Shelving System",
    category: "Mechanical Design / Provisional Patent",
    description:
      "An independently designed modular shelving system using magnetic alignment and removable dowels for tool-free assembly, disassembly, and reconfiguration.",
    href: "/projects/provisional-patent",
    image: "/images/projects/provisional-patent/full-isometric.png",
    imageAlt:
      "Isometric technical drawing of the modular wooden shelving system",
  },
  {
    title: "Aggies Create: Core Memories",
    category:
      "Electromagnetics / Digital Logic / Computer Architecture",
    description:
      "An in-progress team project recreating the fundamental principles of magnetic core memory used in early computers and Apollo-era spacecraft.",
    href: "/projects/core-memories",
    image: null,
    imageAlt: "",
  },
  {
    title: "Home Linux Server",
    category: "Linux / Networking / Web Infrastructure",
    description:
      "A continuously running Linux server used to host this portfolio and other personal services, providing hands-on experience with Linux administration, networking, web hosting, and self-hosted infrastructure.",
    href: "/projects/linux-server",
    image: "/images/projects/linux-server/linuxServer.jpg",
    imageAlt:
      "Linux server used to host Colton Zutavern's portfolio and personal services",
  },
  {
    title: "Multi-Agent AI & Security Architecture",
    category: "AI Orchestration / Security / Networking",
    description:
      "A distributed ecosystem of specialized AI models, local GPU inference, and autonomous subagents collaborating across a self-hosted homelab with defense-in-depth security.",
    href: "/projects/multi-agent-orchestration",
    image: null,
    imageAlt: "",
  },
];

const skills = [
  "Electrical Engineering",
  "Embedded Systems",
  "Raspberry Pi",
  "Python",
  "Linux",
  "Digital Signal Processing",
  "Automotive Electronics",
  "Sensors & Instrumentation",
  "Circuit Design",
  "Fabrication",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-white px-4 py-2 font-medium text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

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

            <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
              <a
                href="#projects"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Projects
              </a>

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
                href="/certifications"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Certifications
              </Link>

              <a
                href="#about"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                About
              </a>

              <a
                href="#contact"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Contact
              </a>
            </div>

            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div id="main-content">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_380px] lg:gap-20">
              {/* Hero Text */}
              <div>
                <p className="mb-5 font-mono text-sm tracking-[0.25em] text-cyan-400">
                  ELECTRICAL ENGINEERING • EMBEDDED SYSTEMS
                </p>

                <h1
                  id="hero-heading"
                  className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl"
                >
                  Colton
                  <br />
                  <span className="text-zinc-500">Zutavern</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  Electrical engineering student building real-world systems
                  across embedded computing, electromagnetics, automotive
                  electronics, audio DSP, sensors, and software.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-lg bg-white px-6 py-3 font-medium text-black outline-none transition hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
                  >
                    Explore Projects
                  </a>

                  <a
                    href="#about"
                    className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white outline-none transition hover:border-white/30 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
                  >
                    About Me
                  </a>

                  <Link
                    href="/resume"
                    className="rounded-lg border border-cyan-400/30 px-6 py-3 font-medium text-cyan-400 outline-none transition hover:border-cyan-400/60 hover:bg-cyan-400/5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
                  >
                    View Resume
                  </Link>
                </div>
              </div>

              {/* Headshot */}
              <div className="relative mx-auto w-full max-w-[380px]">
                {/* Cyan glow behind image */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-3xl bg-cyan-400/10 blur-3xl"
                />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
                    <Image
                      src="/headshot.jpg"
                      alt="Colton Zutavern"
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 380px"
                      className="object-cover"
                    />

                    {/* Subtle image overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                    />
                  </div>
                </div>

                {/* Decorative engineering label */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-white/10 bg-[#08090b]/90 px-4 py-3 backdrop-blur-md sm:block">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    Electrical Engineering
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Texas A&amp;M University
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-2xl border-r border-t border-cyan-400/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-20 border-t border-white/10 px-6 py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p
                aria-hidden="true"
                className="font-mono text-sm tracking-widest text-cyan-400"
              >
                01 / PROJECTS
              </p>

              <h2
                id="projects-heading"
                className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Things I&apos;ve built
              </h2>

              <p className="mt-5 max-w-2xl text-zinc-400">
                A collection of engineering projects spanning mechanical,
                electrical, embedded, software, and computer engineering.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.href}
                  aria-label={`View project: ${project.title}`}
                  className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] outline-none transition hover:-translate-y-1 hover:border-cyan-400/30 focus-visible:border-cyan-400/50 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative overflow-hidden border-b border-white/10 bg-zinc-900 ${
                      index === 0 ? "h-80" : "h-56"
                    }`}
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          priority={index === 0}
                          sizes={
                            index === 0
                              ? "(max-width: 1024px) 100vw, 1152px"
                              : "(max-width: 1024px) 100vw, 576px"
                          }
                          className="object-cover transition duration-500 motion-reduce:transition-none group-hover:scale-105"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        />
                      </>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="relative flex h-full items-center justify-center overflow-hidden bg-[#070b0f]"
                      >
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                          }}
                        />

                        <div className="relative grid grid-cols-8 gap-3 opacity-70">
                          {Array.from({ length: 32 }).map((_, i) => (
                            <span
                              key={i}
                              className="h-4 w-4 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.08)]"
                            />
                          ))}
                        </div>

                        <div className="absolute bottom-5 left-6">
                          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/70">
                            Documentation in progress
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Information */}
                  <div className="p-7">
                    <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-6 block text-sm font-medium text-white transition group-hover:text-cyan-400"
                    >
                      View project →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          aria-labelledby="skills-heading"
          className="border-t border-white/10 px-6 py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p
              aria-hidden="true"
              className="font-mono text-sm tracking-widest text-cyan-400"
            >
              02 / SKILLS
            </p>

            <h2 id="skills-heading" className="sr-only">
              Technical skills
            </h2>

            <ul className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-20 border-t border-white/10 px-6 py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
            <div>
              <p
                aria-hidden="true"
                className="font-mono text-sm tracking-widest text-cyan-400"
              >
                03 / ABOUT
              </p>

              <h2
                id="about-heading"
                className="mt-3 text-4xl font-bold tracking-tight"
              >
                Engineering through building.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                I&apos;m an Electrical Engineering student at Texas A&amp;M
                University with a strong interest in electronics, embedded
                systems, electromagnetics, and practical engineering.
              </p>

              <p>
                A lot of my experience comes from projects where I have had to
                design, troubleshoot, fabricate, and integrate systems rather
                than simply study them in a classroom.
              </p>

              <p>
                My projects range from restoring and modernizing a 1975 Jeep
                Cherokee to developing embedded computer systems and exploring
                the fundamentals of magnetic memory through Aggies Create.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-20 border-t border-white/10 px-6 py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p
              aria-hidden="true"
              className="font-mono text-sm tracking-widest text-cyan-400"
            >
              04 / CONTACT
            </p>

            <h2
              id="contact-heading"
              className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Let&apos;s build something interesting.
            </h2>

            <p className="mt-6 max-w-xl text-zinc-400">
              I&apos;m always interested in engineering projects, electronics,
              embedded systems, and opportunities to learn something new.
            </p>

            <div className="mt-8">
              <a
                href="mailto:czutav@gmail.com"
                aria-label="Send an email to Colton Zutavern"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-black outline-none transition hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090b]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
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


