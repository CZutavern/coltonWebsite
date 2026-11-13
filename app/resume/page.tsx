import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "../components/mobile-menu";

export const metadata: Metadata = {
  title: "Resume",
  description: "Academic background, technical projects, and engineering experience of Colton Zutavern, Electrical Engineering student at Texas A&M University.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-mono text-xl font-bold tracking-tight"
          >
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
            <Link href="/resume" className="text-white">
              Resume
            </Link>
            <Link href="/certifications" className="transition hover:text-white">
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

      {/* Resume Content */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-36">
        <div className="mb-14">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
            Curriculum Vitae &amp; Background
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Colton S. Zutavern
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <a
              href="mailto:czutav@gmail.com"
              className="transition hover:text-white"
            >
              czutav@gmail.com
            </a>
            <span>(972) 251-0890</span>
            <span>College Station, TX &amp; Richardson, TX</span>
            <Link href="/certifications" className="text-cyan-400 transition hover:underline">
              View Verified Certifications →
            </Link>
          </div>
        </div>

        {/* Education */}
        <ResumeSection title="Education">
          <ResumeItem
            title="Texas A&M University"
            location="College Station, TX"
            date="Expected May 2028"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="text-base font-medium text-white">
                B.S. Electrical Engineering — Junior
              </span>
              <span className="rounded border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                Cumulative GPA: 3.053
              </span>
              <span className="font-mono text-xs text-zinc-400">
                83 Earned Credit Hours
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>
                <strong className="text-white">Relevant Completed Coursework:</strong>{" "}
                Introduction to Digital Systems Design (ECEN 248 · Grade: A), Electrical Circuit Theory (ECEN 214 · Grade: B), Program Design &amp; Concepts (CSCE 120 · Grade: B), Differential Equations (MATH 308), Topics in Applied Math / Linear Algebra (MATH 311), Newtonian Mechanics (PHYS 206 · Grade: A), Experimental Physics Labs (ENGR 216 / ENGR 217).
              </p>
              <p>
                <strong className="text-white">In Progress (Fall 2026):</strong>{" "}
                Signals and Systems (ECEN 314), Random Signals &amp; Systems (ECEN 303), Electric &amp; Magnetic Fields (ECEN 322), Modern Physics for Engineers (PHYS 222).
              </p>
            </div>
          </ResumeItem>

          <ResumeItem
            title="Richardson High School"
            location="Richardson, TX"
            date="Completed 2024"
          >
            <p className="font-medium text-white">High School Diploma — GPA: 99.26</p>
            <p className="mt-1 text-sm">
              Relevant Coursework: AP Computer Science Principles, Computer Science 1 Advanced, AP Computer Science, Computer Science 3.
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Honors &amp; Organizations: National Honor Society, Mu Alpha Theta, Front Ensemble Musician (4 Years).
            </p>
          </ResumeItem>
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            <SkillGroup
              title="Languages &amp; Core Tools"
              skills="Java (Advanced), Python (Advanced), C / C++ (Foundational), Linux / Shell scripting, Git, Parametric 3D CAD."
            />
            <SkillGroup
              title="Electrical &amp; Digital Design"
              skills="Digital logic design, circuit analysis &amp; simulation (ECEN 214), sensor interfacing, automotive 12V power distribution, ADC calibration."
            />
            <SkillGroup
              title="Embedded Systems"
              skills="Raspberry Pi Pico 2 (RP2040), Raspberry Pi 5, SPI, I2C, UART, motor &amp; driver ICs (DRV8876 half-bridges, shift registers)."
            />
            <SkillGroup
              title="Mechanical &amp; Prototyping"
              skills="Full vehicle ground-up restoration, precision mechanical assembly, prototype breadboarding, soldering, tolerance engineering."
            />
          </div>
        </ResumeSection>

        {/* Engineering Projects */}
        <ResumeSection title="Engineering Projects">
          <ResumeItem
            title="Aggies Create: Core Memories"
            location="Texas A&amp;M University"
            date="2026 – Present"
          >
            <p className="text-sm font-medium text-cyan-400">Co-Team Lead</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>
                Leading development of a coincident-current magnetic core memory system using Taylor MCORE-1K cores, inspired by Apollo NASA guidance computer memory.
              </li>
              <li>
                Engineered multi-line transistor driver architecture utilizing DRV8876 half-bridge drivers, source/sink driver arrays, and 74HCT595 shift register latches.
              </li>
              <li>
                Analyzed B-H hysteresis loop dynamics to generate precise 210 mA half-select pulses with microsecond timing windows controlled via an RP2040 Pico 2.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="1975 Jeep Cherokee Embedded Pi Dashboard &amp; Restoration"
            date="Multi-Year Ongoing"
          >
            <p className="text-sm font-medium text-cyan-400">Sole Builder &amp; Restorer</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>
                Engineered custom automotive wiring harness, power distribution, and sensor instrumentation (coolant temp, oil pressure, battery voltage monitoring).
              </li>
              <li>
                Developed embedded Linux system on Raspberry Pi 5 with custom Python gauge cluster, automated power-on/halt state machine, and CamillaDSP audio routing.
              </li>
              <li>
                Executed full mechanical, structural, and interior restoration from the ground up to modern road reliability standards.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Modular Wooden Shelving System with Magnetic &amp; Dowel Alignment"
            date="Provisional Patent Drafted"
          >
            <p className="text-sm font-medium text-cyan-400">Sole Inventor</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>
                Independently designed a tool-free rapid-assembly modular shelving system utilizing magnetic locating and removable dowel locking mechanisms.
              </li>
              <li>
                Created full parametric 3D CAD models, structural tolerance analyses, and authored complete written provisional patent specifications and claims.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Better Without Wheat Bakery"
            location="College Station, TX"
            date="Nov 2025 – Present"
          >
            <p className="text-sm font-medium text-cyan-400">Founder &amp; Owner</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>
                Founded and operated an independent small business providing certified gluten-free goods catering to individuals with celiac disease.
              </li>
              <li>
                Built and maintained company e-commerce website; managed ingredient procurement, commercial recipe scaling, and customer outreach.
              </li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        {/* Work Experience */}
        <ResumeSection title="Work Experience">
          <ResumeItem
            title="FCTR Sports"
            location="Addison, TX"
            date="06/01/2026 – 08/07/2026"
          >
            <p className="text-sm font-medium text-zinc-300">Order Fulfillment &amp; Operations Assistant</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>Picked high-volume inventory orders and trained incoming warehouse employees on standard fulfillment protocols.</li>
              <li>
                Consulted directly with the CEO to evaluate warehouse routing bottlenecks, implementing workflow updates that enhanced picking throughput.
              </li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Residential Remodeling Assistant"
            location="College Station, TX"
            date="Summer 2025"
          >
            <p className="text-sm font-medium text-zinc-300">Assistant Contractor</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>Assisted with structural renovation, electrical fixture installations, and interior finishing on residential properties.</li>
              <li>Collaborated in trade teams to ensure consistent execution on strict client project deadlines.</li>
            </ul>
          </ResumeItem>

          <ResumeItem
            title="Royal Nation"
            location="Addison, TX"
            date="06/10/2024 – 08/02/2024"
          >
            <p className="text-sm font-medium text-zinc-300">Production &amp; Fulfillment Assistant</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-300">
              <li>Operated commercial thermal press machinery for logo application and maintained quality assurance standards.</li>
              <li>Fulfilled client orders, tracked dispatch inventory, and executed merchandise deliveries using company fleet vehicles.</li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        {/* Certifications & Awards */}
        <ResumeSection title="Certifications &amp; Honors">
          <div className="space-y-3 text-sm text-zinc-300">
            <p>
              <strong className="text-white">Technical Certifications:</strong>{" "}
              IT Specialist: Java (Score: 880/1000 · Certiport), Unity Certified User: Programmer (Score: 800/1000 · Certiport), Visual Design using Adobe Photoshop (Score: 846/1000 · Certiport), Texas Food Handler License.{" "}
              <Link href="/certifications" className="text-cyan-400 hover:underline">
                [View Credentials Page →]
              </Link>
            </p>
            <p>
              <strong className="text-white">Leadership &amp; Extracurriculars:</strong>{" "}
              Front Ensemble Musician (Richardson High School Marching Band, 4 Years, marimba/percussion discipline); National Honor Society volunteer; Mu Alpha Theta; FTC Robotics Tournament Semi-Finalist (middle school competing against high school teams).
            </p>
          </div>
        </ResumeSection>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="font-mono text-sm text-zinc-500 transition hover:text-cyan-400"
          >
            ← Back to portfolio home
          </Link>
        </div>
      </section>
    </main>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-10">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
        {title}
      </h2>

      <div className="space-y-10 text-zinc-300">{children}</div>
    </section>
  );
}

function ResumeItem({
  title,
  location,
  date,
  children,
}: {
  title: string;
  location?: string;
  date?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <div className="font-mono text-sm text-zinc-500">
          {location && <span>{location}</span>}
          {location && date && <span> · </span>}
          {date && <span>{date}</span>}
        </div>
      </div>

      <div className="mt-3 max-w-3xl leading-7 text-zinc-400">{children}</div>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {
  return (
    <div>
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="leading-7 text-zinc-400">{skills}</p>
    </div>
  );
}
