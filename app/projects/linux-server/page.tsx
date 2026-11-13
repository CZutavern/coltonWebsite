import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Linux Home Server",
  description: "An Ubuntu home server running Home Assistant, this website, and self-hosted services.",
};

export default function LinuxServerPage() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
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

            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <Link
                href="/"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Home
              </Link>

              <Link
                href="/resume"
                className="rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]"
              >
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        aria-labelledby="server-heading"
        className="relative overflow-hidden px-6 pb-20 pt-36"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="font-mono text-sm text-zinc-500 outline-none transition hover:text-cyan-400 focus-visible:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            ← Back to projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
                Linux / Networking / Infrastructure
              </p>

              <h1
                id="server-heading"
                className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl"
              >
                Home Linux
                <br />
                <span className="text-zinc-500">Server</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                A continuously running Linux server that provides the
                infrastructure behind this portfolio and other personal
                services.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <Image
                src="/images/projects/linux-server/linuxServer.jpg"
                alt="Linux server used to host Colton Zutavern's portfolio and personal services"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        aria-labelledby="overview-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            01 / OVERVIEW
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="overview-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Building the infrastructure behind the projects.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Instead of relying entirely on hosted platforms, I run my own
                Linux server continuously at home. It gives me a place to host
                applications, experiment with networking, and learn how the
                infrastructure behind modern web services actually works.
              </p>

              <p>
                This portfolio is one of the services running on that
                infrastructure. The server provides a practical environment
                where software, networking, security, and system administration
                all come together.
              </p>

              <p>
                Maintaining the server also gives me hands-on experience beyond
                writing code: configuring services, managing processes,
                troubleshooting Linux systems, and preparing applications to be
                accessible over a network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Hosting */}
      <section
        aria-labelledby="hosting-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            02 / WEB HOSTING
          </p>

          <h2
            id="hosting-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Hosting this portfolio
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="font-mono text-sm text-cyan-400">01</p>
              <h3 className="mt-4 text-xl font-semibold">Linux</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                The server runs Linux and provides the operating environment
                for the applications and services hosted on the machine.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="font-mono text-sm text-cyan-400">02</p>
              <h3 className="mt-4 text-xl font-semibold">Next.js</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                This portfolio is built with Next.js and runs as a production
                web application on the server.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="font-mono text-sm text-cyan-400">03</p>
              <h3 className="mt-4 text-xl font-semibold">Networking</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                The server is connected to my home network and is being
                configured to make selected services accessible remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Administration */}
      <section
        aria-labelledby="administration-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            03 / SYSTEM ADMINISTRATION
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="administration-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Learning by running real services.
              </h2>
            </div>

            <ul className="space-y-4 text-lg text-zinc-400">
              <li className="border-l border-cyan-400/40 pl-5">
                Linux system administration
              </li>
              <li className="border-l border-cyan-400/40 pl-5">
                Process and service management
              </li>
              <li className="border-l border-cyan-400/40 pl-5">
                Local network configuration
              </li>
              <li className="border-l border-cyan-400/40 pl-5">
                Web application deployment
              </li>
              <li className="border-l border-cyan-400/40 pl-5">
                Remote access and networking
              </li>
              <li className="border-l border-cyan-400/40 pl-5">
                Troubleshooting and maintenance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engineering Connection */}
      <section
        aria-labelledby="engineering-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            04 / ENGINEERING
          </p>

          <div className="mt-8 max-w-3xl">
            <h2
              id="engineering-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              More than a website.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Running the infrastructure myself turns the portfolio into
                another engineering project. I am responsible for the
                environment the application runs in rather than treating
                hosting as something completely separate from development.
              </p>

              <p>
                It also provides a practical way to explore networking, Linux,
                web infrastructure, security, and automation alongside my
                electrical and embedded systems work.
              </p>

              <p>
                As I add more services to the server, the project will continue
                to evolve into a small personal computing and networking
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section
        aria-labelledby="future-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            05 / FUTURE DEVELOPMENT
          </p>

          <h2
            id="future-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Continuing to expand the platform.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Public portfolio hosting",
              "Additional self-hosted services",
              "Automated deployments",
              "Improved monitoring",
              "Network security",
              "Remote administration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album: every photo from the project */}
      <ProjectAlbum slug="linux-server" title="Linux Server" />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Colton Zutavern</p>

          <Link
            href="/"
            className="font-mono outline-none transition hover:text-cyan-400 focus-visible:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Back to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
