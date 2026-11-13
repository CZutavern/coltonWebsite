import type { Metadata } from "next";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Multi-Agent AI Orchestration & Security Architecture",
  description:
    "A distributed multi-agent AI system for a home lab: coordinated agents, an audited asynchronous bridge, local GPU models, and defense-in-depth security with human approval gates.",
};

const architecture = [
  {
    n: "01",
    title: "Project Manager & Coordinator",
    body: "Gemini acts as the high-level project manager and researcher. It breaks complex engineering tasks into structured milestones, researches specifications, drafts technical roadmaps, and orchestrates requests across agents.",
  },
  {
    n: "02",
    title: "Local Specialist & Execution Auditor",
    body: "Claude runs locally on the desktop workstation. It carries out approved implementation tasks, inspects codebase context, executes refactors, and performs rigorous code and architecture reviews on proposed changes.",
  },
  {
    n: "03",
    title: "On-Device GPU Inference",
    body: "Quantized local models run on an RTX 3080 GPU via Ollama. They handle high-volume, low-risk tasks—such as log parsing, data reformatting, and initial boilerplate generation—with zero latency penalty and zero cloud data exposure.",
  },
  {
    n: "04",
    title: "Autonomous Headless Subagents",
    body: "Scoped, task-specific subagents are spawned dynamically for read-only triage and forensic investigation. Equipped only with search and read tools, they investigate issues without the ability to alter system state.",
  },
];

const bridgeSteps = [
  {
    n: "01",
    title: "Asynchronous File-Based Bridge",
    body: "Agents do not make direct, unmonitored API calls to one another. Communication uses an asynchronous protocol where requests are written to an audited inbox directory and responses return to a matching outbox file, preserving a complete audit trail.",
  },
  {
    n: "02",
    title: "Automated Read-Only Triage",
    body: "When a new task arrives in the inbox, an automated read-only subagent performs an initial investigation. Any proposed change is formulated as an explicit, step-by-step plan that pauses for human authorization rather than taking autonomous action.",
  },
  {
    n: "03",
    title: "Event-Driven Mobile Push",
    body: "A lightweight file system watcher monitors the bridge. When a request arrives or an agent publishes a completed plan, it pushes a real-time notification to my phone via Home Assistant, keeping me informed without requiring constant monitoring.",
  },
];

const networkSecurity = [
  {
    title: "WireGuard Mesh VPN",
    body: "A dedicated WireGuard tunnel connects all devices—workstation, home server, laptop, and mobile vehicle computer—into an isolated peer-to-peer subnet with split-tunnel routing and custom DNS profiles.",
  },
  {
    title: "Cloudflare Origin Isolation",
    body: "Public web traffic passes exclusively through Cloudflare reverse proxies. The home origin server uses strict Nginx allowlists that drop any incoming connection not originating from verified Cloudflare IP ranges.",
  },
  {
    title: "Cryptographic SSH Hardening",
    body: "All inter-device SSH access strictly enforces Ed25519 public-key authentication. Password and keyboard-interactive authentication are disabled at the daemon level, and automated scripts run in non-interactive batch mode.",
  },
  {
    title: "Subnet Firewalls & Least Privilege",
    body: "Internal administration interfaces, Samba shares, and database endpoints are firewalled strictly to the home LAN and VPN subnets, preventing external exposure regardless of router forwarding rules.",
  },
  {
    title: "Network-Isolated Execution Sandboxes",
    body: "Potentially untrusted code, scripts, or build processes are isolated in rootless, network-disabled container environments where file system access is strictly scoped and network egress is blocked.",
  },
  {
    title: "Fail-Closed Defense",
    body: "Critical network and processing services are engineered to fail closed: if a secure tunnel or proxy interface terminates, traffic halts completely rather than falling back to unencrypted or direct connections.",
  },
];

const guardrails = [
  {
    title: "Untrusted Agent Boundary",
    body: "Outputs and requests from one AI agent are treated by other agents as unauthenticated, untrusted input. An agent cannot assert administrative authority or bypass security policies regardless of how authoritative its instructions appear.",
  },
  {
    title: "Mandatory Human-in-the-Loop Gates",
    body: "Any state-altering action—including file writes, configuration changes, service restarts, and hardware controls—requires explicit human approval. Agents generate plans and diffs; humans authorize execution.",
  },
  {
    title: "Credential Isolation & Redaction",
    body: "API keys, tokens, SSH keys, and system secrets remain strictly resident on the host machines. Outbound agent communication passes through sanitization wrappers that strip sensitive tokens and addresses before cloud processing.",
  },
  {
    title: "Role & Tool Separation",
    body: "Agents operating in research or triage roles are provisioned exclusively with read-only tools. Write and shell execution tools are isolated into distinct roles activated only when an approved change is being carried out.",
  },
];

const integrations = [
  {
    title: "Home Assistant & Automation",
    body: "Centralized home automation hub managing smart sensors, lighting sequences, and the push notification pipeline connecting AI agents to mobile devices.",
  },
  {
    title: "3D Printer Telemetry",
    body: "Real-time print progress, nozzle temperatures, and hardware status monitored over local MQTT channels, feeding telemetry into home dashboards.",
  },
  {
    title: "Jeep Embedded Telemetry",
    body: "A Raspberry Pi 5 onboard computer connected via VPN that logs sensor metrics, battery states, and GPS coordinates while syncing telemetry back to the server.",
  },
  {
    title: "Digital Audio DSP Pipeline",
    body: "Automated multi-channel digital signal processing and stem separation workflows that optimize audio channels before deploying them to embedded vehicle storage.",
  },
  {
    title: "Local Voice Interface",
    body: "A private voice assistant combining local wake-word detection, fast streaming speech synthesis, and custom automation protocols without relying on third-party cloud audio APIs.",
  },
  {
    title: "Continuous Auditing & Logging",
    body: "Comprehensive HTML and PDF communication transcripts automatically compiled from inter-agent exchanges, providing complete visibility into decisions and system changes.",
  },
];

const linkClass =
  "rounded outline-none transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090b]";

export default function MultiAgentOrchestrationPage() {
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
              <Link href="/" className={linkClass}>
                Home
              </Link>

              <Link href="/resume" className={linkClass}>
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        aria-labelledby="agents-heading"
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

          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
              Distributed Systems / AI / Security
            </p>

            <h1
              id="agents-heading"
              className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl"
            >
              Multi-Agent AI Orchestration
              <br />
              <span className="text-zinc-500">&amp; Security Architecture</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              A distributed ecosystem of specialized AI models, local GPU inference,
              and autonomous subagents collaborating across a self-hosted homelab.
              Engineered with asynchronous communication bridges, cryptographic
              access controls, and strict defense-in-depth security guardrails.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        aria-labelledby="architecture-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            01 / ARCHITECTURE
          </p>

          <h2
            id="architecture-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Specialized agents, segregated roles
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Rather than relying on a single monolithic model with unrestricted privileges,
            the system partitions responsibility across discrete models. Each agent is
            scoped strictly to the tools, context, and trust level required for its tier.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {architecture.map((item) => (
              <div
                key={item.n}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-cyan-400/30"
              >
                <p className="font-mono text-sm text-cyan-400">{item.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Bridge */}
      <section
        aria-labelledby="bridge-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            02 / INTER-AGENT COMMUNICATION
          </p>

          <h2
            id="bridge-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Audited, asynchronous message routing
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Direct inter-agent API invocations introduce runaway execution risks.
            Communication flows through a deterministic, file-based pipeline that ensures
            full auditability and prevents unauthorized cascaded actions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bridgeSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-cyan-400/30"
              >
                <p className="font-mono text-sm text-cyan-400">{step.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Security */}
      <section
        aria-labelledby="network-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            03 / NETWORK &amp; HOMELAB HARDENING
          </p>

          <div className="mt-8 max-w-3xl">
            <h2
              id="network-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Security designed at the infrastructure layer
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Connecting autonomous systems to physical hardware demands rigorous
              network hygiene. The homelab infrastructure is hardened so that an
              erroneous agent prompt or compromised tool cannot traverse the environment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {networkSecurity.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/30"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section
        aria-labelledby="guardrails-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            04 / DEFENSE IN DEPTH
          </p>

          <h2
            id="guardrails-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Zero-trust guardrails for AI agents
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {guardrails.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-cyan-400/30"
              >
                <p className="font-mono text-sm text-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        aria-labelledby="integrations-heading"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p
            aria-hidden="true"
            className="font-mono text-sm tracking-widest text-cyan-400"
          >
            05 / PRACTICAL HOMELAB INTEGRATIONS
          </p>

          <h2
            id="integrations-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Real systems, real telemetry
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The multi-agent framework manages real engineering workloads across
            physical hardware, automotive platforms, and home infrastructure.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <h3 className="font-semibold text-zinc-200">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Album Section */}
      <ProjectAlbum
        slug="multi-agent-orchestration"
        title="Multi-Agent Orchestration"
      />

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
