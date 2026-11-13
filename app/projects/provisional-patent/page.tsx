import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectAlbum from "@/app/components/project-album";

export const metadata: Metadata = {
  title: "Modular Shelving Provisional Patent",
  description: "A modular wooden shelving system with magnetic and dowel-based alignment, documented for a provisional patent.",
};

export default function ProvisionalPatentPage() {
  return (
    <main className="min-h-screen bg-[#05080d] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-cyan-400/10 bg-[#05080d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-wide text-cyan-400"
          >
            CZ
          </Link>

          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/resume"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-cyan-400/10 px-6 pb-20 pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            Mechanical Design • Provisional Patent
          </div>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Modular Wooden Shelving System with{" "}
            <span className="text-cyan-400">
              Magnetic and Dowel-Based Alignment
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            An independently designed modular shelving system that combines
            magnetic alignment with removable dowel reinforcement to create a
            tool-free, configurable shelving system.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-md border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-300">
              Provisional Patent
            </span>
            <span className="rounded-md border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-300">
              Mechanical Design
            </span>
            <span className="rounded-md border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-300">
              Modular Systems
            </span>
            <span className="rounded-md border border-gray-700 bg-gray-900/60 px-3 py-2 text-sm text-gray-300">
              CAD / Technical Drawings
            </span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Overview
              </p>

              <h2 className="text-3xl font-bold">The Concept</h2>

              <p className="mt-6 leading-8 text-gray-400">
                The invention is a modular wooden shelving system designed for
                easy assembly, disassembly, and reconfiguration. Instead of
                relying on conventional fasteners or tools, the system uses a
                combination of embedded magnets, metal washers, and removable
                dowels to align and reinforce individual shelving units.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                The modular design allows individual units to be stacked,
                rearranged, expanded, or removed without permanently altering
                the shelving system. This makes the system adaptable to
                different spaces and storage requirements.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                I independently developed the concept, designs, technical
                drawings, and written description for the provisional patent.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">
                Design Specifications
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-gray-500">Small Unit</p>
                  <p className="mt-1 text-lg font-medium text-cyan-300">
                    1 ft × 1 ft × 1 ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Default Unit</p>
                  <p className="mt-1 text-lg font-medium text-cyan-300">
                    1 ft × 2 ft × 1 ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Large Unit</p>
                  <p className="mt-1 text-lg font-medium text-cyan-300">
                    1 ft × 3 ft × 1 ft
                  </p>
                </div>

                <div className="border-t border-gray-800 pt-5">
                  <p className="text-sm text-gray-500">Primary Materials</p>
                  <p className="mt-1 text-gray-300">
                    Wood, permanent magnets, metal washers, and removable
                    dowels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Drawings */}
      <section className="border-y border-cyan-400/10 bg-[#080c12] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technical Drawings
          </p>

          <h2 className="text-3xl font-bold">Patent Drawings</h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            The following isometric drawings illustrate the overall modular
            shelving concept and the construction of an individual shelving
            unit.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Full System Isometric */}
            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#05080d]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/projects/provisional-patent/full-isometric.png"
                  alt="Full isometric view of the modular wooden shelving system"
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="border-t border-gray-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Drawing 1
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Full System Isometric
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Isometric view showing multiple modular shelving units
                  assembled into a larger configuration. The individual units
                  can be arranged into different layouts while maintaining
                  alignment through the magnetic and dowel-based connection
                  system.
                </p>
              </div>
            </div>

            {/* Single Unit Isometric */}
            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#05080d]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/projects/provisional-patent/single-unit-isometric.png"
                  alt="Single modular shelving unit shown in isometric view"
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="border-t border-gray-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Drawing 2
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Single Unit Isometric
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Isometric view of an individual shelving unit illustrating
                  the modular construction and the locations used for the
                  magnetic, washer, and dowel-based connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field of Invention */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            01
          </p>

          <h2 className="text-3xl font-bold">Field of Invention</h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-400">
            The present invention relates generally to modular furniture and,
            more specifically, to a modular wooden shelving system utilizing
            magnetic alignment and dowel reinforcement to allow tool-free
            assembly, disassembly, and reconfiguration.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            The system is intended for residential, office, and commercial
            applications where adaptable storage and easy reconfiguration are
            desirable.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="border-y border-gray-800 bg-[#080c12] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            02
          </p>

          <h2 className="text-3xl font-bold">Background</h2>

          <div className="mt-8 max-w-4xl space-y-5 leading-8 text-gray-400">
            <p>
              Traditional shelving systems commonly require tools and
              mechanical fasteners during assembly. These systems can be
              difficult to disassemble and often provide limited flexibility
              after their initial configuration has been established.
            </p>

            <p>
              Other modular shelving systems may rely on cumbersome mechanical
              connection systems that make frequent reconfiguration
              inconvenient.
            </p>

            <p>
              The present design addresses these limitations by providing a
              secure connection system that allows individual shelving units
              to be assembled, separated, and rearranged without requiring
              conventional tools.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            03
          </p>

          <h2 className="text-3xl font-bold">Summary of the Invention</h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-400">
            The modular shelving system consists of multiple wooden shelving
            units that can be stacked or arranged in various configurations.
            Each unit incorporates strategically positioned magnets and metal
            washers that automatically guide adjacent units into alignment.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Removable dowels provide additional structural reinforcement and
            help prevent lateral movement between connected units. The
            combination of magnetic alignment and dowel reinforcement allows
            the shelving system to remain stable while still permitting
            individual units to be repositioned.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Additional units can be added to expand the shelving system, while
            existing units can be rearranged to accommodate different spaces
            and storage requirements.
          </p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="border-y border-cyan-400/10 bg-[#080c12] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            04
          </p>

          <h2 className="text-3xl font-bold">Detailed Description</h2>

          <div className="mt-12 space-y-12">
            {/* 1 */}
            <div className="grid gap-6 md:grid-cols-[80px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-lg font-bold text-cyan-400">
                1
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Shelving Units
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  The shelving system is composed of wooden units available in
                  three primary sizes. The units maintain a consistent width
                  and depth so that different sizes remain compatible with one
                  another.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-gray-800 bg-[#05080d] p-5">
                    <p className="text-sm text-gray-500">Small</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      1 × 1 × 1 ft
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800 bg-[#05080d] p-5">
                    <p className="text-sm text-gray-500">Default</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      1 × 2 × 1 ft
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800 bg-[#05080d] p-5">
                    <p className="text-sm text-gray-500">Large</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      1 × 3 × 1 ft
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="grid gap-6 md:grid-cols-[80px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-lg font-bold text-cyan-400">
                2
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Magnetic and Washer Alignment
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  Magnets are positioned on the left side and bottom surfaces
                  of each shelving unit, while corresponding metal washers are
                  positioned on the right side and top surfaces.
                </p>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  When units are brought together, the magnetic forces attract
                  the corresponding washers and help automatically guide the
                  units into alignment. This provides a quick, precise, and
                  repeatable connection between modular components.
                </p>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  The magnetic connections are intended to hold the units
                  together under normal loads while still allowing the user to
                  reposition the units when desired.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="grid gap-6 md:grid-cols-[80px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-lg font-bold text-cyan-400">
                3
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Dowel Reinforcement
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  Pre-drilled holes are incorporated into the shelving units to
                  receive removable wooden dowels. The dowels provide
                  additional structural integrity and help prevent lateral
                  movement between connected units.
                </p>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  The dowels work together with the magnetic connections to
                  create a stable modular assembly while maintaining the
                  ability to disassemble and reconfigure the system.
                </p>

                <div className="mt-6 rounded-xl border border-gray-800 bg-[#05080d] p-6">
                  <p className="text-sm uppercase tracking-wider text-cyan-400">
                    Dowel Placement
                  </p>

                  <p className="mt-3 leading-7 text-gray-400">
                    The design specifies approximately two pegs per square
                    foot of surface area, excluding the back of the shelving
                    unit. The pegs are removable and inserted into designated
                    slots.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="grid gap-6 md:grid-cols-[80px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-lg font-bold text-cyan-400">
                4
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Assembly and Reconfiguration
                </h3>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  Individual units can be assembled into a variety of
                  configurations ranging from simple stacked arrangements to
                  larger multi-tier shelving systems.
                </p>

                <p className="mt-4 max-w-4xl leading-8 text-gray-400">
                  No conventional tools are required for assembly or
                  reconfiguration. Users can expand the system by adding
                  additional units or modify an existing configuration by
                  separating and rearranging individual units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            05
          </p>

          <h2 className="text-3xl font-bold">Advantages</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Customizable & Scalable",
                text: "Individual units can be combined into configurations of different sizes and layouts.",
              },
              {
                title: "Easy Assembly & Disassembly",
                text: "The system is designed to be assembled and separated without conventional tools.",
              },
              {
                title: "Stable & Secure",
                text: "Magnets and removable dowels work together to provide alignment and structural stability.",
              },
              {
                title: "Aesthetic & Functional",
                text: "The modular wooden construction provides a practical storage system while maintaining a clean appearance.",
              },
              {
                title: "Durable & Reusable",
                text: "Individual components can be reused in new configurations rather than requiring an entirely new shelving system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 transition hover:border-cyan-400/30"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims */}
      <section className="border-y border-gray-800 bg-[#080c12] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            06
          </p>

          <h2 className="text-3xl font-bold">Claims</h2>

          <div className="mt-10 max-w-5xl space-y-5">
            {[
              "A modular wooden shelving system comprising shelving units having magnets positioned on left and bottom surfaces, washers positioned on right and top surfaces, and pre-drilled holes configured to receive removable dowels.",
              "The modular shelving system of claim 1, wherein the magnets and washers provide automatic alignment between adjacent shelving units.",
              "The modular shelving system of claim 1, wherein the removable dowels reinforce the connected units, prevent lateral movement, and increase structural stability and load-bearing capability.",
              "The modular shelving system of claim 1, wherein multiple shelving units may be assembled into multiple arrangements without the use of conventional tools.",
              "The modular shelving system of claim 1, wherein the shelving units are constructed from wood and are configured to provide modular adaptability.",
              "The modular shelving system of claim 1, wherein the magnetic connections provide a secure connection while allowing the shelving units to be repositioned without damaging the components.",
            ].map((claim, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-[#05080d] p-6"
              >
                <div className="flex gap-5">
                  <span className="shrink-0 text-sm font-bold text-cyan-400">
                    {index + 1}.
                  </span>

                  <p className="leading-7 text-gray-400">{claim}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                07
              </p>

              <h2 className="text-3xl font-bold">
                Patent Classification
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                The invention falls within classifications covering sectional
                furniture, modular furniture arrangements, and combinations of
                furniture units.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5">
                <p className="font-mono text-sm text-cyan-300">
                  A47B83/00
                </p>
                <p className="mt-2 text-gray-400">
                  Combinations comprising two or more pieces of furniture of
                  different kinds.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5">
                <p className="font-mono text-sm text-cyan-300">
                  A47B47/0091
                </p>
                <p className="mt-2 text-gray-400">
                  Modular arrangements of similar assemblies of elements.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5">
                <p className="font-mono text-sm text-cyan-300">
                  A47B87/00
                </p>
                <p className="mt-2 text-gray-400">
                  Sectional furniture and combinations of complete furniture
                  units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="border-t border-cyan-400/10 bg-[#080c12] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Conclusion
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            A modular approach to furniture design
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            The proposed shelving system combines magnetic alignment with
            dowel-based reinforcement to create a flexible, stable, and
            tool-free storage solution. Its modular architecture allows users
            to adapt the shelving system to changing spatial and storage
            requirements while retaining the ability to reuse individual
            components.
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            The project demonstrates the process of taking an original
            mechanical concept from initial design through technical
            documentation and provisional patent preparation.
          </p>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Album: every photo from the project */}
      <ProjectAlbum slug="provisional-patent" title="Provisional Patent" />

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Colton Zutavern</p>

          <p>Electrical Engineering • Mechanical Design • Embedded Systems</p>
        </div>
      </footer>
    </main>
  );
}
