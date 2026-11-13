/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./jeep-guide.css";

export default function JeepGuide() {
  return (
    <div className="jc">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/85 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Colton Zutavern portfolio home" className="font-mono text-sm tracking-wider text-white">
            CZ<span className="text-cyan-400">.</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/#projects" className="hidden transition hover:text-white sm:inline">Projects</Link>
            <Link href="/models" className="transition hover:text-white">Models &amp; Circuits</Link>
          </div>
        </nav>
      </header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" />
      <main className="jc-main">
<header style={{display:"grid",gap:"10px"}}>
  <span className="eyebrow">Jeep computer · Raspberry Pi 5 · built from parts on hand</span>
  <h1>Jeep Circuits Build Guide</h1>
  <p className="lede">Six small boards that give the Pi engine RPM, a "key is on" signal, the starting-battery voltage, a UPS feed from the house bank, the amp remote turn-on, the isolator solenoid driver, and an exhaust flame thrower spark controller. Every part comes from the parts inventory except the ignition IGBT, 555 timer, and safety fuses.</p>
  <nav className="toc"><a href="#offboard">Not on a board</a><a href="#order">Build order</a><a href="#basics">How to read the layouts</a><a href="#boardA">Board A</a><a href="#boardB">Board B</a><a href="#feedC">Board C</a><a href="#boardD">Board D</a><a href="#boardE">Board E</a><a href="#boardF">Board F</a><a href="#pi">Pi wiring</a><a href="#check">Gemini check</a></nav>
</header>

<section id="offboard">
  <h2>Not on any board: fuses only</h2>
  <div className="box"><strong>Every resistor is on a board now</strong><span>R1a–d and R5 are on Board A, R10 is on Board B, and R1 is on Board E. The only parts that stay off the boards are the fuses below, which belong near the battery or tap end of each wire.</span></div>
  <div className="tbl"><table>
    <thead><tr><th>Part</th><th>Where it goes</th><th>Board</th></tr></thead>
    <tbody>
      <tr><td>Fuse, 1 A or less</td><td>In the battery + wire, near the battery post</td><td>Board B</td></tr>
      <tr><td>Fuse, 7.5 A inline holder</td><td>House bank + wire, near the battery</td><td>Board C</td></tr>
      <tr><td>Fuse, 1 A inline</td><td>+12 V wire to J9</td><td>Board D</td></tr>
      <tr><td>Fuse, 3 A or larger (sized to the coil)</td><td>Solenoid coil + wire, within 18 cm of the battery post</td><td>Board E</td></tr>
      <tr><td>Fuse, 7.5 A inline blade holder</td><td>Switched ACC +12 V feed to J1, within 18 cm of tap</td><td>Board F</td></tr>
      <tr><td>Cockpit switches</td><td>Two-stage: flip-cover toggle (ARM) and momentary button (FIRE)</td><td>Board F</td></tr>
    </tbody>
  </table></div>
  <div className="box warn"><strong>The tach and ACC wires are no longer limited at the far end</strong><span>With the resistors on the boards, the tach wire and the ACC wire are bare copper all the way to the Jeep. Keep them short, route them away from sharp edges, and tap ACC only from an already fused circuit. The tach wire has no fuse: a short on it just grounds the coil's negative side, but protect it with split loom and keep it off hot or moving parts.</span></div>
</section>

<section id="order">
  <h2>Build order</h2>
  <p>Go from easiest to hardest. Each build is tested on its own before the next one.</p>
  <div className="order">
    <div><span className="tag">1 · 20 min</span><b>Board B</b><span>Starting-battery divider: 4 parts, including the 100 kΩ R10. Good warm-up for the soldering style.</span></div>
    <div><span className="tag">2 · 45 min</span><b>Board A, bottom</b><span>ACC sense. Tells the Pi the key is on.</span></div>
    <div><span className="tag">3 · 45 min</span><b>Board A, top</b><span>Tach input. Gives the Pi engine RPM. Fit the R1 resistor string first and measure it.</span></div>
    <div><span className="tag buy">4 · after the fuse</span><b>Board C</b><span>UPS feed: house bank to the X1209. Carries up to 4 A, so it has heavy rails, and it needs the 7.5 A fuse holder.</span></div>
    <div><span className="tag">5 · 45 min</span><b>Board D v2</b><span>Amp remote turn-on from Pi GPIO 17, through an optocoupler. Replaces the first Board D. Read the MOSFET's print first.</span></div>
    <div><span className="tag">6 · 30 min</span><b>Board E</b><span>Isolator solenoid driver: ACC on closes the battery isolator.</span></div>
    <div><span className="tag buy">7 · 45 min</span><b>Board F</b><span>Exhaust flame controller: 555 hardware dwell timer, optocoupled cockpit trigger, and 400 V ignition IGBT driver.</span></div>
  </div>
  <div className="tbl"><table>
    <thead><tr><th>Still to buy</th><th>For</th><th>Needed?</th></tr></thead>
    <tbody>
      <tr><td>Inline blade fuse holder + 7.5 A fuse (16 AWG leads), ring terminal for the battery post</td><td>Board C</td><td><span className="tag buy">Required</span> The only fuse left in the design. Nothing on hand can replace it.</td></tr>
      <tr><td>¼" insulated female spade</td><td>Tach wire onto the HEI cap's TACH terminal</td><td><span className="tag buy">Required for the tach</span></td></tr>
      <tr><td>P6KE18A TVS (unidirectional)</td><td>Surge clamp at the X1209 input</td><td><span className="tag">Optional</span> Add it later. Run without it for now (see the Gemini check).</td></tr>
      <tr><td>2-core shielded cable, ~3 m</td><td>Distributor to Board A</td><td><span className="tag">Optional</span> Two wires twisted together (about 1 twist per inch) work fine here.</td></tr>
      <tr><td>ISL9V3040P3 or BIP373 ignition IGBT (TO-220) + heatsink</td><td>Board F</td><td><span className="tag buy">Required</span> 400 V clamped primary coil switch. Never use an IRLZ44N (55 V) here.</td></tr>
      <tr><td>NE555 timer IC (DIP-8) + 8-pin socket</td><td>Board F</td><td><span className="tag buy">Required</span> Generates hardware dwell (3.5 ms ON, 28 Hz rep rate).</td></tr>
      <tr><td>Standard 12 V canister ignition coil</td><td>Board F</td><td><span className="tag buy">Required</span> Dedicated exhaust spark coil (e.g. Bosch blue or standard canister).</td></tr>
      <tr><td>Spark plug + M14×1.25 weld bung, 8 mm silicone wire</td><td>Tailpipe</td><td><span className="tag buy">Required</span> Welded 4–6 in from exhaust tip. High-temp silicone lead.</td></tr>
      <tr><td>Two-stage cockpit switches (toggle + momentary push button)</td><td>Cab</td><td><span className="tag buy">Required</span> Safety arming and firing controls.</td></tr>
      <tr><td>Inline blade fuse holder + 7.5 A fuse</td><td>Board F</td><td><span className="tag buy">Required</span> Protects the +12 V coil supply feed.</td></tr>
    </tbody>
  </table></div>
  <p className="cap">The ACC wire is tapped from an already fused circuit. The starting-battery wire needs a small fuse (1 A or less) near the battery post (see the fuse table).</p>
</section>

<section id="basics">
  <h2>How to read the layouts</h2>
  <ul>
    <li>The green drawings are the board <b>seen from the parts side</b>. Each gold ring is a hole. Columns are numbered across the top (0, 1, 2…) and rows down the side, so <code>(15,2)</code> means column 15, row 2.</li>
    <li>The <b>thick coloured lines are the copper on the back</b>: join those holes underneath with a bare wire or a solder bridge. One colour is one connection. Different colours must <b>never</b> touch.</li>
    <li>The clipped-off resistor and diode legs are perfect for the back-side wires. Lay one along the holes, solder it at every hole it crosses.</li>
    <li>Each part's legs go in exactly the holes shown. Bend them flat on the back toward their trace before soldering.</li>
    <li>The blue boxes are the screw terminals. They sit on the board edge with their screws facing outward.</li>
    <li><b>Diodes have a band.</b> In the drawing the white band is at the cathode end. Match it. The P6KE12CA TVS diodes are bidirectional, so they go in either way.</li>
    <li><b>PC817 dot = pin 1.</b> Pin 1 is top-left, pin 2 under it, pin 3 bottom-right, pin 4 top-right. The drawing marks the pin numbers in yellow.</li>
  </ul>
  <div className="box"><strong>Checked automatically</strong><span><code>board_layout.py</code> holds these layouts as data and checks that every connection matches the schematic, that no two connections share a hole, and that nothing on the vehicle side crosses to the Pi side. From Board D v2 on, it also checks that no two different connections sit in side-by-side holes, except the legs of one part. Deliberate mistakes (a reversed diode, swapped PC817 pins, a bridged trace) were all caught.</span></div>
</section>

<section id="boardA">
  <h2>Board A: tach input + ACC sense</h2>
  <div className="box warn"><strong>The R1 string is on this board: build and measure it first</strong><span>The tach terminal on the ignition module is the <b>coil's negative side</b>. It sits at battery voltage and every spark sends 200 to 400 V into the wire. <b>R1a to R1d are four 1 kΩ resistors in a row (4 kΩ)</b> between J1 and the rest of the circuit, so they take that surge instead of TVS1. Without them TVS1 would conduct constantly and short the coil, and the engine can fail to start. Never connect the tach wire to J1 until the string is soldered and measures 4.0 kΩ. <b>The raw tach run (from J1 up and across row 0 to R1a) must be insulated hookup wire laid above the board, not a bare back-side wire</b>: it carries the full spike, and a bare wire touching the circuit after the string would bypass it.</span></div>
  <p><b>What it does.</b> Each half has a PC817 optocoupler: a tiny LED and light sensor in one chip. The Jeep side lights the LED, and the Pi side only sees the light. Spikes from the ignition can't travel through light, so they can't reach the Pi. The yellow dashed line on the board is that barrier. Nothing crosses it except the chips.</p>
  <ul>
    <li><b>Tach (top half):</b> every spark makes one pulse. A V8 sparks 4 times per turn of the crank, so RPM = pulses per second × 15. Idle is about 45 pulses a second.</li>
    <li><b>ACC (bottom half):</b> key in Accessory or On lights the LED, and GPIO 10 reads LOW.</li>
  </ul>
  <div className="sheet"><img src="/circuits/jeep-circuits/board-a-tach-acc.svg" alt="Board A layout: tach circuit on the top half, ACC circuit on the bottom half, vehicle side on the left and Pi side on the right of a dashed isolation line" /></div>
  <p className="cap">ELEGOO 5 × 7 cm board (24 × 18 holes). Left = vehicle side, right = Pi side.</p>

  <h3>Parts for Board A</h3>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>U1, U2</td><td>PC817</td><td className="n">pin 1 at (15,2) / (15,11)</td><td>Dot top-left</td></tr>
      <tr><td>TVS1, TVS2</td><td>P6KE12CA</td><td className="n">(2,1)–(2,7) / (2,10)–(2,16)</td><td>Either way round</td></tr>
      <tr><td>D1</td><td>1N4001</td><td className="n">(5,1)–(9,1)</td><td>Band at (9,1)</td></tr>
      <tr><td>D2, D3</td><td>BAT43 (small glass)</td><td className="n">(13,2)–(13,7) / (13,11)–(13,16)</td><td>Band at the <b>top</b>: (13,2) / (13,11)</td></tr>
      <tr><td>R1a–d</td><td>4 × 1 kΩ in series (brown-black-red)</td><td className="n">R1a (11,2)–(11,6) · R1b (9,6)–(9,2) · R1c (7,2)–(7,6) · R1d (5,6)–(5,2)</td><td><b>Required.</b> Four upright resistors in a zig-zag, standing in columns 11, 9, 7 and 5. Together they measure 4.0 kΩ from (11,2) to (5,2). The spike limiter for the tach wire.</td></tr>
      <tr><td>R2</td><td>470 Ω (yellow-violet-brown)</td><td className="n">(10,1)–(14,1)</td><td></td></tr>
      <tr><td>R5</td><td>2.2 kΩ (red-red-red)</td><td className="n">(4,9)–(8,9)</td><td>Current limiter for the ACC wire. Same value as R6.</td></tr>
      <tr><td>R6</td><td>2.2 kΩ (red-red-red)</td><td className="n">(10,10)–(14,10)</td><td></td></tr>
      <tr><td>R3, R7</td><td>1 kΩ (brown-black-red)</td><td className="n">(19,2)–(19,6) / (19,11)–(19,15)</td><td></td></tr>
      <tr><td>R4, R8</td><td>10 kΩ (brown-black-orange)</td><td className="n">(21,2)–(21,6) / (21,11)–(21,15)</td><td></td></tr>
      <tr><td>C1</td><td>0.1 µF ceramic (marked 104)</td><td className="n">(4,5)–(4,7)</td><td></td></tr>
      <tr><td>C2</td><td>0.1 µF ceramic</td><td className="n">(22,16)–(22,17)</td><td>Bend the legs to fit</td></tr>
      <tr><td>J1, J3</td><td>2-pin screw terminal</td><td className="n">(0,1)–(0,2) / (0,10)–(0,11)</td><td>Vehicle side</td></tr>
      <tr><td>J2, J4</td><td>3-pin screw terminal</td><td className="n">(23,6)–(23,8) / (23,15)–(23,17)</td><td>To the Pi</td></tr>
    </tbody>
  </table></div>

  <h3>Steps</h3>
  <ol className="steps">
    <li><b>Fit R1a–d first</b> (standing in columns 11, 9, 7 and 5), link them top and bottom as drawn, and measure from (11,2) to (5,2): about 4.0 kΩ. J1 TACH goes to the ignition module's TACH terminal (through the ¼" spade).</li>
    <li>Solder the two PC817s first while the board is empty. Check the dot is top-left before soldering more than one leg.</li>
    <li>Fit the low parts: D1, D2, D3 (check every band), then the resistors, then C1 and C2.</li>
    <li>Fit TVS1 and TVS2, then the four screw terminals.</li>
    <li>Wire the back, one colour at a time, ticking each run off against the list below.</li>
    <li>Look at the back under a light. Check no solder joins two different colours, especially columns 18/19 near the terminals and rows 6/7/8 on the right.</li>
    <li>Meter test (continuity mode), before anything is connected:
      <ul>
        <li>Each terminal to its parts: J1 TACH beeps to TVS1's top leg; J4 GPIO10 beeps to C2.</li>
        <li><b>No beep</b> between any left terminal (J1, J3) and any right terminal (J2, J4). That is the isolation.</li>
        <li><b>No beep</b> between J2 3.3V and J2 GND, and between J4 3.3V and J4 GND.</li>
      </ul></li>
  </ol>
  <div className="tbl"><table>
    <thead><tr><th>Back-side run</th><th>Holes (corners)</th></tr></thead>
    <tbody>
      <tr><td>Tach in, raw (insulated wire)</td><td className="mono">(0,1)→(0,0)→(11,0)→(11,2)</td></tr>
      <tr><td>R1 string links</td><td className="mono">(11,6)→(9,6); (9,2)→(7,2); (7,6)→(5,6)</td></tr>
      <tr><td>Tach in (A), after R1</td><td className="mono">(5,2)→(5,1)→(2,1); (4,1)→(4,5)</td></tr>
      <tr><td>D1 to R2</td><td className="mono">(9,1)→(10,1)</td></tr>
      <tr><td>LED + (tach)</td><td className="mono">(14,1)→(14,2)→(15,2); (13,2)→(14,2)</td></tr>
      <tr><td>Vehicle GND (tach)</td><td className="mono">(0,2)→(0,7)→(15,7); (15,3)→(15,7)</td></tr>
      <tr><td>Collector (tach)</td><td className="mono">(18,2)→(21,2)</td></tr>
      <tr><td>GPIO 12</td><td className="mono">(19,6)→(19,7)→(23,7)</td></tr>
      <tr><td>3.3 V (tach)</td><td className="mono">(21,6)→(23,6)</td></tr>
      <tr><td>Pi GND (tach)</td><td className="mono">(18,3)→(18,8)→(23,8)</td></tr>
      <tr><td>ACC in, raw</td><td className="mono">(0,10)→(0,9)→(4,9)</td></tr>
      <tr><td>ACC in (B), after R5</td><td className="mono">(8,9)→(8,10)→(10,10); (2,10)→(8,10)</td></tr>
      <tr><td>LED + (ACC)</td><td className="mono">(14,10)→(14,11)→(15,11); (13,11)→(14,11)</td></tr>
      <tr><td>Vehicle GND (ACC)</td><td className="mono">(0,11)→(0,16)→(15,16); (15,12)→(15,16)</td></tr>
      <tr><td>Collector (ACC)</td><td className="mono">(18,11)→(21,11)</td></tr>
      <tr><td>GPIO 10</td><td className="mono">(19,15)→(19,16)→(23,16)</td></tr>
      <tr><td>3.3 V (ACC)</td><td className="mono">(21,15)→(23,15)</td></tr>
      <tr><td>Pi GND (ACC)</td><td className="mono">(18,12)→(18,17)→(23,17)</td></tr>
    </tbody>
  </table></div>

  <h3>Bench test (before the Jeep)</h3>
  <ol className="steps">
    <li>Connect J4 to the Pi (see <a href="#pi" style={{color:"var(--accent)"}}>Pi wiring</a>) with the Pi powered. The meter on J4 GPIO10 to J4 GND should read about 3.3 V.</li>
    <li>Touch a 12 V source (the house bank, or any 9-12 V battery) to J3 ACC (R5 is on the board), and its negative to J3 GND. GPIO10 should drop to under 0.4 V. Take the 12 V away: back to 3.3 V.</li>
    <li>Do the same on J1 (the R1 string is on the board). GPIO12 should drop the same way.</li>
  </ol>
  <div className="sheet"><img src="/circuits/jeep-circuits/tach-input.png" alt="Tach input schematic" /></div>
  <div className="sheet"><img src="/circuits/jeep-circuits/acc-sense.png" alt="ACC sense schematic" /></div>
</section>

<section id="boardB">
  <h2>Board B: starting-battery voltage</h2>
  <p><b>What it does.</b> The ADS1115 can only read up to 3.3 V. The divider scales the battery to 18 %: 12.6 V reads 2.27 V, 14.7 V reads 2.65 V. This replaces the INA238 reading, which moves to the house bank in build C.</p>
  <div className="sheet"><img src="/circuits/jeep-circuits/board-b-start-battery.svg" alt="Board B layout: sense terminal on the left, R11 to ground, R12 to the A3 output, C5 to ground" /></div>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th></tr></thead>
    <tbody>
      <tr><td>R10</td><td>100 kΩ (brown-black-yellow): top of the divider, <b>on this board</b></td><td className="n">(2,1)–(6,1)</td></tr>
      <tr><td>R11</td><td>22 kΩ (red-red-orange)</td><td className="n">(7,1)–(7,5)</td></tr>
      <tr><td>R12</td><td>1 kΩ</td><td className="n">(8,1)–(12,1)</td></tr>
      <tr><td>C5</td><td>0.1 µF</td><td className="n">(14,1)–(14,3)</td></tr>
      <tr><td>J5, J6</td><td>2-pin terminals</td><td className="n">(0,1)–(0,2), (17,1)–(17,2)</td></tr>
    </tbody>
  </table></div>
  <p>Back-side runs: <span className="mono">(0,1)→(2,1)</span> · <span className="mono">(6,1)→(8,1)</span> · <span className="mono">(12,1)→(17,1)</span> · <span className="mono">(7,5)→(17,5)→(17,2); (14,3)→(14,5)</span>. J5's second pin isn't used. Keep the wire from the battery to J5 short, and fuse it near the battery (1 A or less): R10 now sits on the board, so a short in that wire is no longer limited to 0.15 mA.</p>
  <ol className="steps">
    <li>Test on the bench: put 12 V into J5 (BAT +), with the 12 V negative on J6 GND. J6 A3 should read 12 × 0.18 ≈ 2.16 V.</li>
    <li>In the Jeep: J6 A3 to the ADS1115's A3, J6 GND to the ADS1115's GND. Then add the reading to the software and calibrate it once against a multimeter.</li>
  </ol>
  <div className="box"><strong>Ground first, or every gauge reads 3.48 V</strong><span>J6 GND must be a solid wire to the ADS1115 GND (and the Pi ground), and the battery negative at the sense end must be the same chassis ground. With the 22 kΩ leg floating, R10 (100 kΩ) feeds the battery through the ADS1115 protection diodes and every input saturates. Before connecting A3, check about 22 kΩ from the divider tap to the ADS1115 GND (power off), then 2.4 to 2.7 V at the tap (power on), then 0.00 V between battery negative and ADS1115 GND. Optional clamp: raise R12 to 3.3 kΩ and add a BAT54S from A3 to GND and 3.3 V.</span></div>
  <div className="sheet"><img src="/circuits/jeep-circuits/start-battery.png" alt="Starting battery divider schematic" /></div>
</section>

<section id="feedC">
  <h2>Board C: UPS feed (house bank to the X1209)</h2>
  <p><b>What it does.</b> Powers the X1209 UPS from the AGM house bank all the time, so its cells stay full and the Pi can stay on while parked. The INA238 sits in this wire to read the bank's voltage and how much power the Pi uses. This is the only build carrying real current (up to 4 A), so it has two heavy rails and screw terminals, plus a fuse near the battery.</p>
  <div className="sheet"><img src="/circuits/jeep-circuits/agm-power.png" alt="House bank to X1209 schematic: 7.5 A fuse, INA238 shunt, 15SQ045 diode, then 2200 µF and 0.1 µF capacitors at the X1209 input" /></div>
  <div className="sheet"><img src="/circuits/jeep-circuits/board-c-ups-feed.svg" alt="Board C layout: input terminal J7 on the left, D4 diode on the top rail, C3, C4 and the optional TVS3 across the rails, output terminal J8 on the right" /></div>
  <p className="cap">ELEGOO 3 × 7 cm board (only 20 × 9 holes used). Left = from the INA238 and house bank, right = to the X1209's DC plug.</p>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>D4</td><td>15SQ045 (the big axial diode)</td><td className="n">(3,2)–(7,2)</td><td>Band at (7,2), toward the X1209. Its legs are thicker than the holes: open those two holes with a 1.3 mm (1/16") drill bit by hand. Keep the body off the board surface for air.</td></tr>
      <tr><td>C3</td><td>2200 µF 35 V electrolytic</td><td className="n">(9,4) +, (9,7) −</td><td>The stripe on the can is <b>negative</b>. Lay it on its side if it won't stand.</td></tr>
      <tr><td>C4</td><td>0.1 µF ceramic</td><td className="n">(12,5)–(12,7)</td><td></td></tr>
      <tr><td>TVS3</td><td>P6KE18A (optional, buy later)</td><td className="n">(15,3)–(15,7)</td><td>Band at (15,3), the + side. Leave the holes empty for now.</td></tr>
      <tr><td>J7</td><td>2-pin terminal</td><td className="n">(0,2) and (0,3)</td><td>+ from the INA238 IN−, and house bank −</td></tr>
      <tr><td>J8</td><td>2-pin terminal</td><td className="n">(19,2) and (19,3)</td><td>To the X1209 plug lead: + and −</td></tr>
    </tbody>
  </table></div>
  <div className="tbl"><table>
    <thead><tr><th>Back-side run</th><th>Holes (corners)</th><th>Heavy?</th></tr></thead>
    <tbody>
      <tr><td>In +</td><td className="mono">(0,2)→(3,2)</td><td>Yes</td></tr>
      <tr><td>+12 V out</td><td className="mono">(7,2)→(19,2); (9,2)→(9,4); (12,2)→(12,5); (15,2)→(15,3)</td><td>Yes: the row-2 run</td></tr>
      <tr><td>Ground</td><td className="mono">(0,3)→(0,7)→(19,7)→(19,3)</td><td>Yes</td></tr>
    </tbody>
  </table></div>
  <div className="box warn"><strong>The copper on the board can't carry 4 A</strong><span>Every "heavy" run gets a bare wire (18 AWG or a clipped component leg) laid along it and soldered at every hole it crosses, with plenty of solder. The screw terminals are rated 6 A and take wire up to 18 AWG, so use 18 AWG pigtails to J7 and J8. Only the long run from the fuse to the INA238 is 16 AWG.</span></div>
  <ol className="steps">
    <li><b>Fuse first:</b> the 7.5 A fuse holder goes within 18 cm (7 in) of the house bank + post. Leave the fuse out until the end.</li>
    <li>16 AWG from the fuse to the INA238 <b>IN+</b> terminal. From the INA238's <b>IN−</b>, an 18 AWG pigtail to <b>J7 +</b>. Run the house bank − to <b>J7 −</b> (the chassis works if the bank's − is grounded to it).</li>
    <li>Build Board C as drawn: D4 first (band toward the right), then C3 and C4, then the terminals, then the heavy back-side runs.</li>
    <li>From <b>J8</b>, an 18 AWG pair to the X1209's DC plug (5.5 × 2.1 mm): J8 + to the centre pin, J8 − to the sleeve. Check the polarity with the meter before plugging in.</li>
    <li>Before the fuse goes in: meter between J8 + and J8 − with no power should read open. Insert the fuse and J8 should read about +12 V (and under 14.8 V when the alternator charges the bank), not −12 V. Then plug it into the X1209.</li>
    <li>Set the INA238 to its ±10 A range in software. The ±2.75 A range would clip at 3-4 A.</li>
  </ol>
  <div className="box"><strong>Surge diode (TVS3)</strong><span>The X1209 accepts 6-18 V, and the house bank charges at up to 14.7 V. A P6KE18A across the input would be extra protection. You don't have one, and the two P6KE12CA you do have in series wouldn't start clamping until about 23 V, which is too late. Because the AGMs sit behind the isolator and soak up spikes themselves, it's fine to run without it now and add a P6KE18A later (band to +).</span></div>
</section>

<section id="boardD">
  <h2>Board D v2: amp remote turn-on (Pi GPIO 17)</h2>
  <p className="cap">Version 2, 14 Oct 2026. Replaces the first Board D (BC337 driver). Build it on a new board; don't modify the old one.</p>
  <p><b>What it does.</b> The Pi's amp controller (the <code>jeep-startup</code> service) drives <b>GPIO 17, header pin 11</b>: high turns the amps on, low turns them off. It switches on while music is playing, and turns off after 30 seconds of silence and when the Jeep is parked. This board puts +12 V on the amps' <b>remote turn-on wire</b> when the pin goes high, and 0 V when it is low or the Pi is off.</p>
  <div className="box warn"><strong>Read the print on Q1 before it goes in</strong><span>Q1 must say <b>IRF4905</b>. The IRLZ44N from Board E looks identical (black TO-220, same G-D-S legs) and the parts kit has ten of each. An IRLZ44N in Q1's place feeds +12 V to REMOTE through its built-in diode, so the amps stay on whatever the Pi does: about 12 V on a meter, with the gate still reading 12.6 V. That is exactly what the first Board D did. The mirror mistake on Board E (an IRF4905 there) keeps the isolator coil on all the time and makes the MOSFET hot, which is what Board E did on 12 Oct. Both were reproduced in LTspice. Check the print on Board E's MOSFET as well.</span></div>
  <h3>What changed from the first version</h3>
  <ul>
    <li><b>Optocoupler drive.</b> A PC817 (the same chip as Board A) replaces the BC337. The Pi side and the Jeep side share no wire on this board, so nothing on the 12 V side can reach GPIO 17.</li>
    <li><b>Bleeder on REMOTE.</b> R4 (10 kΩ) holds REMOTE at 0.00 V when the board is off. The first version left REMOTE floating, so a meter could show stray voltages that meant nothing.</li>
    <li><b>Gate clamp.</b> TVS1 keeps Q1's gate within about 12 V of its source, even in a 40 V load dump (Q1's limit is 20 V).</li>
    <li><b>Spaced layout.</b> No two different connections sit in side-by-side holes, except the legs of one part. <code>board_layout.py</code> now checks this. The first layout had 13 such spots, two of them between the REMOTE wire and +12 V or the gate.</li>
  </ul>
  <div className="sheet"><img src="/circuits/jeep-circuits/amp-remote.png" alt="Board D v2 schematic: GPIO 17 through R1 470 ohm to the PC817 LED; the PC817 transistor pulls the gate of the IRF4905 down through R2 10k; R3 10k and TVS1 run from the gate to +12 V; the IRF4905 switches +12 V to REMOTE OUT, with R4 10k and D1 1N4001 from REMOTE to ground" /></div>
  <div className="sheet"><img src="/circuits/jeep-circuits/board-d-amp-remote.svg" alt="Board D v2 layout: Pi terminal J11 and R1 on the left, PC817 U1 across the dashed isolation line, R2, TVS1, R3 and the IRF4905 Q1 along row 4, +12 V terminal J9 at the top right, REMOTE and ground terminal J10 at the right, D1 and R4 below Q1" /></div>
  <p className="cap">ELEGOO 5 × 7 cm board (24 × 18 holes; only the top 11 rows are used, so the rest can stay empty or be cut off). Left of the dashed line = Pi side, right = Jeep side.</p>
  <ul>
    <li><b>GPIO 17 high (3.3 V):</b> R1 lets about 4.5 mA through the PC817's LED. Its transistor pulls Q1's gate down through R2 to about a third of the supply: 8 V below the source at 12.6 V, and still 5.8 V below while cranking at 9 V. Q1 connects +12 V to REMOTE.</li>
    <li><b>GPIO 17 low, Pi off or J11 unplugged:</b> no light, so R3 holds the gate at +12 V. Q1 is off and R4 pulls REMOTE to 0.00 V.</li>
    <li><b>D1</b> catches the voltage kick if an amp's remote input is a relay coil.</li>
  </ul>

  <h3>Parts for Board D v2</h3>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>U1</td><td>PC817</td><td className="n">pin 1 at (7,4)</td><td>Dot top-left, the same way as on Board A.</td></tr>
      <tr><td>R1</td><td>470 Ω (yellow-violet-brown)</td><td className="n">(2,4)–(6,4)</td><td>LED current</td></tr>
      <tr><td>R2</td><td>5.6 kΩ (green-blue-red)</td><td className="n">(11,4)–(15,4)</td><td>Pulls the gate down when U1 is on</td></tr>
      <tr><td>R3</td><td>10 kΩ (brown-black-orange)</td><td className="n">(18,0)–(18,4)</td><td>Holds Q1 off</td></tr>
      <tr><td>R4</td><td>10 kΩ (brown-black-orange)</td><td className="n">(21,6)–(21,10)</td><td>Bleeder: REMOTE to ground</td></tr>
      <tr><td>TVS1</td><td>P6KE12CA</td><td className="n">(16,0)–(16,4)</td><td>Either way round. It sits gate-to-source and sees at most about 9.4 V in normal use (at 14.7 V charging), under its 10.2 V standoff, so it doesn't conduct there.</td></tr>
      <tr><td>Q1</td><td><b>IRF4905</b> (P-channel MOSFET, TO-220)</td><td className="n">G (20,4), D (21,4), S (22,4)</td><td>Metal tab toward the top edge, printed face toward the bottom edge. Read from the printed face with the legs down, they are G, D, S left to right. Leave about 3 mm of leg above the board.</td></tr>
      <tr><td>D1</td><td>1N4007</td><td className="n">K (19,6), A (19,10)</td><td>Band at the top, (19,6). A 1N4001 also works, but the 1N4007 is rated 1000 V instead of 50 V.</td></tr>
      <tr><td>J9</td><td>2-pin terminal</td><td className="n">(23,0), (23,1)</td><td>+12 V in through a 1 A inline fuse. The second pin is not connected.</td></tr>
      <tr><td>J10</td><td>2-pin terminal</td><td className="n">(23,6), (23,7)</td><td>REMOTE out to the amps, and chassis ground. This is the board's only ground connection.</td></tr>
      <tr><td>J11</td><td>2-pin terminal</td><td className="n">(0,4), (0,5)</td><td>GPIO 17 (header pin 11) and Pi ground (header pin 9)</td></tr>
    </tbody>
  </table></div>
  <div className="tbl"><table>
    <thead><tr><th>Back-side run</th><th>Holes (corners)</th></tr></thead>
    <tbody>
      <tr><td>GPIO 17</td><td className="mono">(0,4)→(2,4)</td></tr>
      <tr><td>LED +</td><td className="mono">(6,4)→(7,4)</td></tr>
      <tr><td>Pi GND</td><td className="mono">(0,5)→(0,7)→(7,7)→(7,5)</td></tr>
      <tr><td>Collector</td><td className="mono">(10,4)→(11,4)</td></tr>
      <tr><td>Gate</td><td className="mono">(15,4)→(20,4)</td></tr>
      <tr><td>+12 V</td><td className="mono">(23,0)→(16,0); (22,4)→(22,0)</td></tr>
      <tr><td>REMOTE</td><td className="mono">(21,4)→(21,6); (19,6)→(23,6)</td></tr>
      <tr><td>Vehicle GND</td><td className="mono">(23,7)→(23,10)→(10,10)→(10,5)</td></tr>
    </tbody>
  </table></div>

  <h3>Build</h3>
  <ol className="steps">
    <li><b>Read Q1's print: IRF4905.</b> Set it aside from the IRLZ44Ns.</li>
    <li>Solder U1 first while the board is empty, dot top-left.</li>
    <li>Fit R1 to R4, then D1 (band at the top), then TVS1.</li>
    <li>Fit Q1 with the tab toward the top edge. Solder each leg separately, so no solder joins two legs.</li>
    <li>Fit the three terminals.</li>
    <li>Wire the back one run at a time, ticking each off against the list. Nothing here carries more than about half an amp, so clipped component legs are fine.</li>
    <li>Look at the back under a light, especially around Q1's three legs and the REMOTE run below them. No solder may join two different colours.</li>
  </ol>

  <h3>Meter checks before power</h3>
  <p>Board unpowered, nothing connected to any terminal.</p>
  <div className="tbl"><table>
    <thead><tr><th>Check</th><th>Meter mode</th><th>Red lead</th><th>Black lead</th><th>Good reading</th><th>If not</th></tr></thead>
    <tbody>
      <tr><td>1. Isolation</td><td>Continuity</td><td>Each J11 pin</td><td>Each J9 and J10 pin</td><td>No beep</td><td>Solder or a wire crosses the dashed line</td></tr>
      <tr><td>2. Q1 is the right part</td><td>Diode</td><td>J10 REMOTE</td><td>J9 +12 V</td><td className="n">0.4–0.6 V</td><td>OL: Q1 is in backwards or a leg isn't soldered</td></tr>
      <tr><td>3. Q1 is the right part</td><td>Diode</td><td>J9 +12 V</td><td>J10 REMOTE</td><td>OL</td><td>0.4–0.6 V: Q1 is an N-channel part (IRLZ44N). Swap in an IRF4905.</td></tr>
      <tr><td>4. Gate pull-up</td><td>Ohms</td><td>Q1 source leg</td><td>Q1 gate leg</td><td className="n">9.5–10.5 kΩ</td><td>Near 0: gate bridged to +12 V. Open: R3 not connected.</td></tr>
      <tr><td>5. Bleeder</td><td>Ohms</td><td>J10 REMOTE</td><td>J10 GND</td><td className="n">9.5–10.5 kΩ</td><td>Much lower: a bridge to ground. Open: R4 not connected.</td></tr>
      <tr><td>6. LED</td><td>Diode</td><td>J11 GPIO</td><td>J11 GND</td><td className="n">about 1.0–1.8 V, OL reversed</td><td>OL both ways: U1 turned round, or R1 open</td></tr>
    </tbody>
  </table></div>

  <h3>Bench test with power</h3>
  <p>12 V through the 1 A fuse to J9 +12 V, its negative to J10 GND. Nothing on REMOTE except the meter.</p>
  <ol className="steps">
    <li><b>Off.</b> J10 REMOTE to J10 GND: <b>0.00 V</b> (under 0.05 V). Red on Q1's source leg, black on its gate leg: <b>0.0 V</b>.</li>
    <li><b>On.</b> Put 3 to 3.3 V on J11: the Pi's pin 1 to J11 GPIO and pin 9 to J11 GND, or two AA cells, + to GPIO. REMOTE should read within 0.1 V of the supply (12.5 V or more at 12.6 V). Source to gate should read about 8 V.</li>
    <li><b>Under load.</b> Add a 1 kΩ resistor or a small 12 V bulb from REMOTE to J10 GND. With 3.3 V on J11, REMOTE stays within 0.1 V of the supply. With it removed, REMOTE falls to 0.00 V within a second.</li>
  </ol>

  <h3>In the Jeep</h3>
  <ol className="steps">
    <li>Shut the Pi down. J11 to header <b>pin 11</b> (GPIO 17) and <b>pin 9</b> (GND).</li>
    <li>J9 +12 V through the 1 A inline fuse. J10 GND to chassis. J10 REMOTE to the amps' remote wire, after taking that wire off whatever fed it before.</li>
    <li>Boot the Pi: the amps stay off. Play music: they turn on. Stop: they turn off about 30 seconds later.</li>
  </ol>

  <h3>If it misbehaves</h3>
  <div className="tbl"><table>
    <thead><tr><th>Symptom</th><th>Measure</th><th>Cause</th></tr></thead>
    <tbody>
      <tr><td rowSpan={2}>REMOTE has 12 V with GPIO 17 low or J11 unplugged</td><td>Source to gate about 0 V</td><td>Q1 is the wrong part (meter check 3), or solder joins +12 V to the REMOTE run near Q1's legs</td></tr>
      <tr><td>Source to gate about 8 V</td><td>U1 is switched on: U1 turned round, or the collector run (10,4)–(11,4) touches ground</td></tr>
      <tr><td rowSpan={3}>REMOTE stays at 0 V with 3.3 V on J11</td><td>U1 pin 4 to J10 GND stays near +12 V</td><td>The LED isn't lit: check R1 and U1's orientation (meter check 6)</td></tr>
      <tr><td>U1 pin 4 near 0 V, but source to gate under 2 V</td><td>R2 open, or the gate run doesn't reach Q1</td></tr>
      <tr><td>Source to gate about 8 V</td><td>Q1 in backwards, or its drain leg isn't soldered</td></tr>
      <tr><td>REMOTE drops below 11 V once the amps are connected</td><td>J9 +12 V to J10 GND under load</td><td>A weak +12 V feed (fuse holder or wire), not the board</td></tr>
    </tbody>
  </table></div>

  <div className="box ok"><strong>Simulated in LTspice</strong><span>With datasheet models for the IRF4905 and the PC817 at its worst-case 50 % gain, at 9 V, 12.6 V and 14.7 V supply: REMOTE reads 0.000 V when off and within 13 mV of the supply when on, at loads from a meter up to 0.5 A. With a worst-case IRF4905 (threshold −4 V) at 9 V and 0.5 A, it drops 17 mV. In a 40 V load dump the gate stays within 12.3 V of the source, and a 24 V jump start is fine. One limit remains: with the board off, the PC817 sees the full supply voltage and is rated 35 V. A spike above that can push only a few milliamps through R2 and R3, which a PC817 survives. The files are in <code>ltspice\boardD_v2.cir</code>, <code>boardD_v2_surge.cir</code>, <code>r2_compare.cir</code> and <code>swap_check.cir</code>.</span></div>
  <div className="box"><strong>Gemini review (14 Oct)</strong><span>Gemini 3.8 Flash reviewed v2 on its own and agreed that a swapped MOSFET is the most likely cause of the first board's fault. Two of its points are in the design now: <b>R2 went from 10 kΩ to 5.6 kΩ</b>, so a high-threshold IRF4905 still turns fully on while cranking, and <b>D1 is a 1N4007</b>. Its suggested R2 of 2.2 kΩ was not used: it would need about 6.7 mA from the PC817, roughly three times what a weak PC817 can guarantee. It also flagged the PC817's 35 V rating (covered above) and the lack of reverse-polarity protection. A reversed hookup only blows the 1 A fuse, through D1 and Q1's built-in diode, and both survive that.</span></div>
</section>

<section id="boardE">
  <h2>Board E: battery isolator solenoid driver</h2>
  <div className="box warn"><strong>Read the print on Q3: it must say IRLZ44N</strong><span>An IRF4905 (the P-channel part from Board D) fits the same holes but conducts through its built-in diode: the coil stays on whatever ACC does, and the MOSFET drops about 0.8 V at the full coil current. In LTspice, with a 2.5 Ω coil, that is 4.7 A all the time and 3.7 W in a TO-220 with no heatsink, so it gets very hot and the isolator never opens. If Board E is wired in and its MOSFET reads IRF4905, take the coil − wire off J13 until it's swapped.</span></div>
  <div className="box"><strong>If Q3 gets hot</strong><span>A fully on IRLZ44N at 1 A dissipates about 0.02 W and stays cold. Heat means a voltage across it. With the coil energised measure gate to source (7 to 9 V expected), drain to source (0.02 to 0.1 V expected) and source to battery negative (near 0 V). Gate under 5 V: check R1 (5.6 kΩ is green-blue-red), R2, the TVS and the part number. Drain to source about 0.7 V: drain and source swapped. Coil buzzing: loose ground or missing C1. A 10 A coil needs a heatsink or a second IRLZ44N in parallel.</span></div>

  <p><b>What it does.</b> The isolator solenoid joins the starting battery to the house bank while the Jeep is running, and splits them when it isn't. This small board closes that switch whenever the <b>accessory wire is live</b>: ACC on lights a MOSFET (a transistor used as a switch) that connects the solenoid coil's negative side to ground. The coil's positive side goes straight to a fused +12 V, not through the board.</p>
  <div className="box"><strong>The solenoid already protects itself</strong><span>The solenoid used here has its own flyback diode and surge suppressor across the coil, so this board has neither. The built-in diode has a direction: the coil's <b>+</b> terminal must go to +12 V and its <b>−</b> terminal to the board.</span></div>
  <div className="sheet"><img src="/circuits/jeep-circuits/board-e-isolator.svg" alt="Board E layout: ACC and ground terminal on the left, gate network R2, C1 and TVS in the middle, MOSFET Q3 on top, coil minus and ground terminal on the right" /></div>
  <p className="cap">ELEGOO 3 × 7 cm board (16 × 9 holes used). Left = ACC in, right = the solenoid's coil −.</p>
  <ul>
    <li><b>How it works:</b> ACC (9 to 14.7 V) reaches the gate through <b>R1 5.6 kΩ</b>, which sits on this board (it limits current into the gate and the TVS), then R2 10 kΩ. R1 and R2 divide the voltage to about 64 % of ACC, so the gate sees about 9.4 V at 14.7 V and 5.8 V at 9 V while cranking. The IRLZ44N is fully on from about 5 V. ACC off or the wire disconnected: R2 holds the gate at 0 V and the MOSFET is off.</li>
    <li><b>TVS</b> (P6KE12CA, gate to ground) stays off in normal use (the gate never exceeds about 9.5 V, under its 10.2 V standoff) and clamps spikes so the MOSFET gate (limit ±20 V) is safe. <b>C1</b> smooths noise.</li>
    <li><b>Current:</b> the coil current passes through Q3, the ground rail and the J13/J12 ground terminals. Measure the isolator's coil resistance before trusting any figure: the plain (non-smart) Recoil may draw 3 to 6 A, and the MOSFET then dissipates 0.2 to 0.8 W. Bolt a small TO-220 heatsink to Q3 (or add a second IRLZ44N in parallel) if it gets too hot to touch. Over 10 A, switch to a relay or a bigger MOSFET. The big 500 A current flows between the battery posts, never through this board.</li>
  </ul>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>Q3</td><td>IRLZ44N (N-MOSFET, TO-220)</td><td className="n">G (7,3), D (8,3), S (9,3)</td><td>Metal tab toward the top edge, printed face toward you. G, D, S read left to right.</td></tr>
      <tr><td>R2</td><td>10 kΩ (brown-black-orange)</td><td className="n">(2,3)–(2,7)</td><td></td></tr>
      <tr><td>C1</td><td>0.1 µF ceramic</td><td className="n">(3,5)–(3,7)</td><td></td></tr>
      <tr><td>R3</td><td>100 kΩ (brown-black-yellow)</td><td className="n">(4,3)–(4,7)</td><td>A backup pull-down: if R2 ever opens, this still holds the gate off.</td></tr>
      <tr><td>TVS</td><td>P6KE12CA</td><td className="n">(6,3)–(6,7)</td><td>Either way round (bidirectional).</td></tr>
      <tr><td>R1</td><td>5.6 kΩ (green-blue-red)</td><td className="n">(1,0)–(5,0)</td><td>Current limiter for the ACC wire, in the top row.</td></tr>
      <tr><td>J12</td><td>2-pin terminal</td><td className="n">(0,1), (0,2)</td><td>ACC in and chassis ground</td></tr>
      <tr><td>J13</td><td>2-pin terminal</td><td className="n">(15,1), (15,2)</td><td>COIL − from the solenoid, and a second chassis ground (the heavy one)</td></tr>
    </tbody>
  </table></div>
  <div className="tbl"><table>
    <thead><tr><th>Back-side run</th><th>Holes (corners)</th><th>Heavy?</th></tr></thead>
    <tbody>
      <tr><td>ACC in, raw</td><td className="mono">(0,1)→(0,0)→(1,0)</td><td>No</td></tr>
      <tr><td>Gate (after R1)</td><td className="mono">(5,0)→(5,1)→(6,1)→(6,3)→(7,3); (5,1)→(2,1)→(2,3); (3,1)→(3,5); (4,1)→(4,3)</td><td>No</td></tr>
      <tr><td>Coil −</td><td className="mono">(15,1)→(8,1)→(8,3)</td><td>Yes</td></tr>
      <tr><td>Ground</td><td className="mono">(0,2)→(0,7)→(15,7)→(15,2); (9,3)→(9,7)</td><td>Yes: the part from (9,7) to (15,7) and up to J13</td></tr>
    </tbody>
  </table></div>
  <ol className="steps">
    <li>Fit R1, R2, C1, the TVS, then Q3 (tab to the top edge), then the two terminals. Wire the back as listed. Lay a bare 18 AWG wire along the heavy runs and solder it at every hole, the same as Board C.</li>
    <li><b>Solenoid wiring:</b> coil + stays wired to the battery as it is now. A 3 A inline fuse within 18 cm of the battery post is worth adding if it has none, sized for the coil current you measure (3 A is only enough if it is under 2 A; use 7.5 A for a 5 A coil). Coil − goes to J13 pin 1. Use 18 AWG for the coil wires (the terminals take 18 AWG at most and are rated 6 A).</li>
    <li><b>ACC wire:</b> tap an accessory circuit that is already fused. Run the wire to J12 pin 1 (R1 is on the board). J12 pin 2 goes to chassis ground.</li>
    <li><b>Bench test with the solenoid unplugged:</b> put a 12 V source on ACC through R1 and measure the gate at (7,3) with a meter to ground: about 7.7 V from 12 V, and 0 V with ACC off. Then connect a small 12 V lamp or relay coil between +12 V and J13 pin 1: it should light when ACC is on and go dark when ACC is off.</li>
    <li>Connect the solenoid, then turn the key to ACC: you should hear it click closed. Key off: it opens.</li>
  </ol>
  <div className="box"><strong>Things Gemini flagged (design review)</strong><span>
    <b>Accessory mode:</b> with the key in ACC and the engine off, the isolator is closed, so the house bank and the starting battery are joined, and a load on the house bank can draw the starting battery down. That is the intended behaviour. Watch the voltage (the Pi reads both batteries), and don't sit in ACC for long. A stricter version would close the isolator only while the alternator is charging (above about 13.4 V).<br />
    <b>Cranking:</b> many vehicles drop the ACC wire while the starter turns, so the isolator opens for a second or two and closes again when the key returns to RUN. That is one open and one close per start, not chatter.<br />
    <b>Reverse polarity:</b> the solenoid's built-in diode would short a reversed battery connection, so keep a small fuse (3 A) in the coil's positive wire, near the battery. If it isn't fused today, add one.</span></div>
  <div className="box warn"><strong>Failure behaviour</strong><span>If this MOSFET ever fails short, the solenoid stays closed, so the two batteries stay joined with the engine off, and the house bank can slowly run the starting battery down. It's the same state as a stuck solenoid, so a quick look at the battery voltage with the key off now and then catches it.</span></div>
</section>

<section id="boardF">
  <h2>Board F: exhaust flame thrower spark controller</h2>
  <div className="box warn"><strong>Ignition flyback exceeds 350 V: Never use an IRLZ44N</strong><span>When the ignition coil primary current is cut, the collapsing magnetic field generates a <b>300 to 400 V primary flyback spike</b> that induces 25 to 40 kV on the secondary to fire the spark plug. An IRLZ44N is rated for only 55 V: it will avalanche immediately, absorb the spark energy as destructive heat, produce no exhaust spark, and burn out in seconds. Q1 <b>must</b> be an automotive ignition-rated IGBT like the <b>ISL9V3040P3</b> or <b>BIP373</b> (internally clamped at 400 V), or a minimum 500 V power MOSFET like the <b>IRF840</b>, mounted to a small TO-220 heatsink.</span></div>
  <div className="box"><strong>Hardware dwell control (NE555): Protects the coil from burning</strong><span>Standard automotive ignition coils have a primary resistance of only 0.5 to 1.5 Ω. Leaving the coil grounded for more than 4 to 5 milliseconds draws 8 to 15 A continuously and will melt the primary windings or pop the fuse. Board F uses a hardware NE555 timer configured as an asymmetrical astable multivibrator: RA (4.7 kΩ) and D2 charge timing capacitor C3 in <b>3.5 ms</b> (the coil ON / dwell time), while RB (47 kΩ) discharges C3 in <b>32 ms</b> (the OFF / spark repetition rate). The coil only fires at ~28 Hz with a safe 9.8 % duty cycle while the FIRE button is held down. When released, the coil is completely OFF.</span></div>
  <div className="box warn"><strong>Cockpit safety: Two-stage arming toggle + momentary FIRE button</strong><span>Never run continuous spark in the exhaust pipe without unburned fuel, and never allow the circuit to fire accidentally. Wire the cockpit controls in series: a flip-cover toggle switch provides power to J1 ACC (ARMED), and a spring-loaded momentary push button completes the FIRE trigger to J1 Pin 2. As soon as you let go of the push button, spark stops instantly.</span></div>

  <p><b>What it does.</b> Provides a high-energy repeating spark at a tailpipe spark plug to ignite unburned exhaust fuel on command. Pressing the momentary FIRE button triggers an isolated 555 dwell generator that pulses an ignition IGBT at 28 sparks per second with exactly 3.5 ms dwell per spark, creating reliable combustion without overheating the coil.</p>
  <ul>
    <li><b>Optocoupler trigger:</b> U1 (PC817) isolates cockpit switch wiring and transient 12 V spikes from the 555 timing circuitry.</li>
    <li><b>Asymmetrical 555 timer:</b> U2 runs only while U1 emitter pulls Pin 4 (RESET) high. When released, R2 (10 kΩ) pulls Pin 4 low, instantly disabling the timer.</li>
    <li><b>Gate drive network:</b> RG (100 Ω) damps gate ringing during 300 V transitions; R3 (10 kΩ) bleeds gate charge; TVS1 (P6KE12CA) clamps ESD and voltage spikes within ±12 V.</li>
    <li><b>Supply filtering:</b> D1 (15SQ045) Schottky diode prevents reverse-polarity damage, and C1 (2200 µF) stiffens the +12 V coil rail against transient battery sag.</li>
  </ul>

  <div className="sheet"><img src="/circuits/jeep-circuits/board-f-flame-driver.svg" alt="Board F layout: Cab input terminal on left, optocoupler trigger, NE555 dwell timer in centre, ignition IGBT and heavy coil terminal on right" /></div>
  <p className="cap">ELEGOO 5 × 7 cm board (24 × 18 holes). Left = cab controls (ACC, FIRE, GND), right = ignition coil (+12V and COIL−).</p>

  <h3>Parts for Board F</h3>
  <div className="tbl"><table>
    <thead><tr><th>Ref</th><th>Part</th><th>Holes</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>U1</td><td>PC817 optocoupler</td><td className="n">pin 1 at (6,2)</td><td>Standard DIP-4 footprint. Dot top-left. Pin 1 (6,2), Pin 2 (6,3), Pin 3 (9,3), Pin 4 (9,2).</td></tr>
      <tr><td>U2</td><td>NE555 precision timer (DIP-8 socket)</td><td className="n">pin 1 at (12,6)</td><td>Standard DIP-8 footprint: 0.1″ hole pitch, 0.3″ DIP row spacing. Notch facing left. Pin 1 (12,6), Pin 2 (12,7), Pin 3 (12,8), Pin 4 (12,9), Pin 5 (15,9), Pin 6 (15,8), Pin 7 (15,7), Pin 8 (15,6).</td></tr>
      <tr><td>Q1</td><td><b>ISL9V3040P3</b> or BIP373 (Ignition IGBT, TO-220)</td><td className="n">G (21,14), C (21,15), E (21,16)</td><td>Metal tab facing left, printed face toward right edge. Bolt a small TO-220 aluminum heatsink to tab.</td></tr>
      <tr><td>D1</td><td>15SQ045 (Schottky diode)</td><td className="n">A (2,1), K (2,0)</td><td>Band at (2,0), toward +12 V rail. Open holes with 1.3 mm bit by hand.</td></tr>
      <tr><td>D2</td><td>1N4148 (Fast switching diode)</td><td className="n">A (18,7), K (18,9)</td><td>Band at bottom (18,9), bypassing RB during charging.</td></tr>
      <tr><td>TVS1</td><td>P6KE12CA (Bidirectional TVS)</td><td className="n">(20,14)–(20,17)</td><td>Either way round. Clamps Q1 gate to ground.</td></tr>
      <tr><td>C1</td><td>2200 µF 35 V electrolytic</td><td className="n">(3,0) +, (3,17) −</td><td>Stripe on can is negative. Buffer for coil primary pulses.</td></tr>
      <tr><td>C2</td><td>0.1 µF ceramic (marked 104)</td><td className="n">(4,0)–(4,17)</td><td>High-frequency decoupling across +12 V bus and GND.</td></tr>
      <tr><td>C3</td><td>1.0 µF metallized polyester or ceramic (marked 105)</td><td className="n">(16,9)–(16,17)</td><td>Timing capacitor. Sets 3.5 ms dwell and 28 Hz rate.</td></tr>
      <tr><td>C4</td><td>0.1 µF ceramic (marked 104)</td><td className="n">(15,11)–(15,15)</td><td>Control voltage (CV) noise bypass on Pin 5.</td></tr>
      <tr><td>R1</td><td>1 kΩ (brown-black-red)</td><td className="n">(1,2)–(5,2)</td><td>Limits current into U1 LED to ~10 mA. Solid straight horizontal run from J1.2.</td></tr>
      <tr><td>R2</td><td>10 kΩ (brown-black-orange)</td><td className="n">(9,9)–(9,17)</td><td>Pull-down resistor on NE555 RESET pin.</td></tr>
      <tr><td>RA</td><td>4.7 kΩ (yellow-violet-red)</td><td className="n">(17,0)–(17,4)</td><td>Dwell resistor: sets 3.5 ms coil charge time.</td></tr>
      <tr><td>RB</td><td>47 kΩ (yellow-violet-orange)</td><td className="n">(19,4)–(19,9)</td><td>Off-time resistor: sets 32 ms coil rest interval.</td></tr>
      <tr><td>RG</td><td>100 Ω (brown-black-brown)</td><td className="n">(13,14)–(16,14)</td><td>Gate damping resistor: strictly horizontal, zero diagonal wire.</td></tr>
      <tr><td>R3</td><td>10 kΩ (brown-black-orange)</td><td className="n">(19,14)–(19,17)</td><td>Bleeder resistor: keeps Q1 gate pulled low when idle.</td></tr>
      <tr><td>J1</td><td>3-pin screw terminal (5.08 mm pitch)</td><td className="n">(0,1), (0,2), (0,3)</td><td>One contiguous 3-pin block. Pin 1: ACC +12 V (fused), Pin 2: FIRE trigger, Pin 3: Chassis GND.</td></tr>
      <tr><td>J2</td><td>2-pin screw terminal (5.08 mm pitch)</td><td className="n">(23,0), (23,15)</td><td>Pin 1: COIL + (+12 V heavy rail), Pin 2: COIL − (collector switch).</td></tr>
    </tbody>
  </table></div>

  <div className="tbl"><table>
    <thead><tr><th>Back-side run</th><th>Holes (corners)</th><th>Heavy?</th></tr></thead>
    <tbody>
      <tr><td>ACC in (fused)</td><td className="mono">(0,1)→(2,1)</td><td>Yes</td></tr>
      <tr><td>FIRE in</td><td className="mono">(0,2)→(1,2)</td><td>No (straight into R1)</td></tr>
      <tr><td>R1 to U1</td><td className="mono">(5,2)→(6,2)</td><td>No (straight into U1.1)</td></tr>
      <tr><td>+12 V rail</td><td className="mono">(2,0)→(23,0); (9,2)→(9,0); (15,6)→(15,0)</td><td>Yes (16 AWG bus along Row 0)</td></tr>
      <tr><td>Vehicle GND</td><td className="mono">(0,3)→(0,17); (0,17)→(23,17); (6,3)→(6,17); (15,15)→(15,17); (16,17); (19,17); (20,17); (21,16)→(21,17); (12,6)→(6,6)</td><td>Yes (16 AWG bus along Row 17)</td></tr>
      <tr><td>RESET net</td><td className="mono">(9,3)→(13,3)→(13,9)→(12,9); (9,9)→(12,9)</td><td>No</td></tr>
      <tr><td>DISCH net</td><td className="mono">(15,7)→(18,7); (17,4)→(17,7); (17,4)→(19,4)</td><td>No</td></tr>
      <tr><td>TIMING net</td><td className="mono">(19,9)→(18,9)→(16,9)→(16,8)→(15,8); (12,7)→(7,7)→(7,15)→(14,15)→(14,8)→(15,8)</td><td>No</td></tr>
      <tr><td>CV net</td><td className="mono">(15,9)→(15,11)</td><td>No</td></tr>
      <tr><td>OUT net</td><td className="mono">(12,8)→(8,8)→(8,14)→(13,14)</td><td>No</td></tr>
      <tr><td>GATE net</td><td className="mono">(16,14)→(21,14)</td><td>No</td></tr>
      <tr><td>COIL − net</td><td className="mono">(21,15)→(23,15)</td><td>Yes (16 AWG bus to J2.2)</td></tr>
    </tbody>
  </table></div>

  <h3>Build</h3>
  <ol className="steps">
    <li><b>Solder the DIP-8 socket for U2 first.</b> Place at cols 12 & 15, rows 6 to 9 with notch facing left (toward col 11). Do not insert the NE555 chip until all soldering and meter checks are done.</li>
    <li>Solder U1 (PC817) with its dot at (6,2) (top-left pin 1).</li>
    <li>Fit all fixed resistors: R1, R2, RA, RB, RG, and R3. Note RG is strictly horizontal at (13,14)–(16,14). Double-check values with a meter before soldering.</li>
    <li>Fit small diodes: D2 (1N4148, band facing down) and TVS1 (P6KE12CA).</li>
    <li>Enlarge holes at (2,1) and (2,0) with a 1.3 mm drill bit. Fit D1 (15SQ045) with cathode band at (2,0). Stand body 2 mm above board for airflow.</li>
    <li>Fit ceramic capacitors C2 and C4, timing capacitor C3, then large electrolytic C1 (positive lead to row 0, negative lead to row 17).</li>
    <li>Fit Q1 (ISL9V3040P3 or BIP373): bolt the small TO-220 heatsink to its tab, then insert G, C, E into (21,14), (21,15), (21,16). Solder securely.</li>
    <li>Fit contiguous 3-pin screw terminal J1 at (0,1)–(0,3) on the left edge and J2 at (23,0)/(23,15) on the right edge with wire entries facing outward.</li>
    <li>Wire the back runs. <b>Reinforce heavy runs:</b> lay bare 16 AWG solid copper wire along the +12 V rail (Row 0), Ground rail (Row 17), and COIL− run (21,15 to 23,15), flooding each with solder. Complete remaining runs with component lead cut-offs.</li>
    <li>Inspect under magnification. Verify that no solder bridge touches between adjacent rows, particularly along Q1 legs and U2 socket pins.</li>
  </ol>

  <h3>Meter checks before power</h3>
  <p>Board unpowered, NE555 removed from socket, nothing connected to screw terminals.</p>
  <div className="tbl"><table>
    <thead><tr><th>Check</th><th>Meter mode</th><th>Red lead</th><th>Black lead</th><th>Good reading</th><th>If not</th></tr></thead>
    <tbody>
      <tr><td>1. Supply rail isolation</td><td>Continuity</td><td>Row 0 (+12 V rail)</td><td>Row 17 (GND rail)</td><td>No beep (Open)</td><td>Solder bridge between Row 0 and Row 17; check C1, C2, and D1 pads.</td></tr>
      <tr><td>2. Q1 Clamp Diode</td><td>Diode</td><td>Q1 Collector (21,15)</td><td>Q1 Emitter (21,16)</td><td className="n">0.45–0.55 V</td><td>OL: Q1 collector or emitter open. 0.00 V: Q1 shorted or bridged.</td></tr>
      <tr><td>3. Q1 Gate Isolation</td><td>Ohms</td><td>Q1 Gate (21,14)</td><td>Q1 Emitter (21,16)</td><td className="n">9.8–10.2 kΩ</td><td>Near 0: TVS1 shorted or gate bridged. Open: R3 not connected.</td></tr>
      <tr><td>4. U1 Input Diode</td><td>Diode</td><td>J1 Pin 2 (FIRE at 0,2)</td><td>J1 Pin 3 (GND at 0,3)</td><td className="n">1.05–1.15 V</td><td>OL: U1 backwards or R1 open. Reverse leads must read OL.</td></tr>
      <tr><td>5. NE555 Reset Pull-Down</td><td>Ohms</td><td>U2 Socket Pin 4 (12,9)</td><td>Row 17 (GND)</td><td className="n">9.8–10.2 kΩ</td><td>R2 open or trace not reaching Pin 4.</td></tr>
      <tr><td>6. Heavy Rail Continuity</td><td>Ohms</td><td>J1 Pin 1 (ACC at 0,1)</td><td>J2 Pin 1 (COIL + at 23,0)</td><td className="n">&lt; 0.05 Ω</td><td>D1 not conducting or Row 0 bus has cold solder joint.</td></tr>
    </tbody>
  </table></div>

  <h3>Bench test with power</h3>
  <p>Insert the NE555 into its socket (notch toward col 11). Connect a bench 12 V supply (7.5 A fused) to J1 Pin 1 (+12V) and Pin 3 (GND). Do NOT connect the actual ignition coil yet; connect a 12 V automotive bulb or relay coil between J2 Pin 1 (COIL+) and J2 Pin 2 (COIL−).</p>
  <ol className="steps">
    <li><b>Idle check:</b> With J1 Pin 2 (FIRE) disconnected, bulb remains completely dark. Voltage from Q1 Gate to GND measures 0.00 V. Current draw is &lt; 15 mA.</li>
    <li><b>Fire check:</b> Touch a jumper wire from J1 Pin 1 (+12V) to J1 Pin 2 (FIRE). The test bulb should buzz and glow dimly (pulsing at 28 Hz). A multimeter on frequency mode at U2 Pin 3 should read 27 to 29 Hz.</li>
    <li><b>Release check:</b> Remove the jumper from Pin 2. The bulb must extinguish instantly with zero residual glow or buzzing.</li>
  </ol>

  <h3>In the Jeep</h3>
  <ol className="steps">
    <li><b>Tailpipe spark plug mounting:</b> Drill and weld an M14×1.25 steel spark plug bung into the exhaust tailpipe 4 to 6 inches before the tailpipe tip. Thread a standard automotive spark plug (gapped to 0.035″) into the bung. Ensure the tailpipe is solidly grounded to the vehicle frame.</li>
    <li><b>Coil mounting:</b> Mount a dedicated 12 V canister ignition coil to the rear frame rail in a dry location sheltered from road spray.</li>
    <li><b>High tension lead:</b> Run an 8 mm silicone high-temperature spark plug wire from the coil center tower directly to the tailpipe spark plug. Keep it clear of moving suspension parts.</li>
    <li><b>Cockpit controls:</b> Mount a guarded flip-cover toggle switch (ARM) on the dash. Feed it from a fused +12 V accessory circuit. From the toggle switch output, run to J1 Pin 1 (ACC) and to one side of a momentary push button (FIRE). Run the return wire from the push button to J1 Pin 2 (FIRE).</li>
    <li><b>Wiring J2:</b> Run 16 AWG automotive primary wire from J2 Pin 1 to Coil (+) and J2 Pin 2 to Coil (−). Run 16 AWG from J1 Pin 3 to a clean frame ground.</li>
  </ol>

  <h3>If it misbehaves</h3>
  <div className="tbl"><table>
    <thead><tr><th>Symptom</th><th>Measure</th><th>Cause</th></tr></thead>
    <tbody>
      <tr><td>Spark fires constantly as soon as ARM toggle is flipped</td><td>Voltage at U2 Pin 4 to GND is &gt; 2 V with FIRE button released</td><td>U1 optocoupler shorted or inserted backwards; R2 pull-down resistor disconnected.</td></tr>
      <tr><td>No spark when FIRE button is pressed</td><td>Voltage at J1 Pin 2 (FIRE) when pressed</td><td>Cockpit switch not delivering +12 V, or R1 (1 kΩ) open, or U1 LED not turning on.</td></tr>
      <tr><td>FIRE triggers but bulb stays steadily ON instead of pulsing</td><td>Voltage at U2 Pin 3 (OUT)</td><td>C3 timing capacitor shorted, or D2 diode in backwards, or NE555 defective.</td></tr>
      <tr><td>Weak yellow spark at tailpipe</td><td>Voltage between J1 Pin 1 and Frame GND under load</td><td>Poor frame ground connection at rear frame rail, or excessively long primary wire drop.</td></tr>
      <tr><td>Q1 gets very hot during short bursts</td><td>Collector-to-Emitter saturation voltage during pulse</td><td>Q1 is not an ignition-rated IGBT; inadequate heatsinking; or dwell exceeds 5 ms.</td></tr>
    </tbody>
  </table></div>

  <div className="sheet"><img src="/circuits/jeep-circuits/flame-driver.png" alt="Exhaust flame thrower spark driver schematic" /></div>
</section>

<section id="pi">
  <h2>Pi wiring</h2>
  <p>Use female jumper (Dupont) leads from the screw terminals to the Pi's 40-pin header. Each half of Board A has its own 3.3 V and GND pin, so no wires need to be shared.</p>
  <div className="tbl"><table>
    <thead><tr><th>Terminal</th><th>Pi header pin</th><th>Signal</th></tr></thead>
    <tbody>
      <tr><td>J2 3.3V</td><td className="n">pin 1</td><td>3.3 V</td></tr>
      <tr><td>J2 GPIO12</td><td className="n">pin 32</td><td>GPIO 12 (tach)</td></tr>
      <tr><td>J2 GND</td><td className="n">pin 34</td><td>Ground</td></tr>
      <tr><td>J4 3.3V</td><td className="n">pin 17</td><td>3.3 V</td></tr>
      <tr><td>J4 GPIO10</td><td className="n">pin 19</td><td>GPIO 10 (ACC)</td></tr>
      <tr><td>J4 GND</td><td className="n">pin 20</td><td>Ground</td></tr>
      <tr><td>J6 A3 / GND</td><td className="n">ADS1115 A3 / GND</td><td>Starting battery</td></tr>
      <tr><td>J11 GPIO17</td><td className="n">pin 11</td><td>Amp remote (already used by the amp controller)</td></tr>
      <tr><td>J11 GND</td><td className="n">pin 9</td><td>Ground</td></tr>
    </tbody>
  </table></div>
  <div className="box warn"><strong>Never put 5 V or 12 V on these pins</strong><span>Pi GPIO pins take 3.3 V only. Pins 2 and 4 are 5 V: don't use them. Shut the Pi down before plugging or unplugging header wires.</span></div>
</section>

<section id="check">
  <h2>Gemini check</h2>
  <p>Gemini 3.1 Pro reviewed all four circuits on its own, without seeing the designer's answers, and looked up the X1209's specs online.</p>
  <div className="tbl"><table>
    <thead><tr><th>Circuit</th><th>Gemini</th><th>What it confirmed or changed</th></tr></thead>
    <tbody>
      <tr><td>Tach</td><td><span className="tag">OK</span></td><td>Same LED currents, and the filter is fast enough at 6000 rpm. Count the <b>falling edge</b> of GPIO 12 (the spark moment). The PC817 switches in about 20 µs against a 2500 µs period at top RPM.</td></tr>
      <tr><td>ACC</td><td><span className="tag">OK</span></td><td>A resistor at the tap instead of a fuse is standard practice for sense wires. In an extreme 100 V surge R5 could burn open, which is a safe way to fail.</td></tr>
      <tr><td>UPS feed</td><td><span className="tag buy">Changed</span></td><td>Don't use two P6KE12CA in series; leave the TVS out until a P6KE18A is bought. Show the negative return wire (added). The 15SQ045 is fine at 1.8 W in free air.</td></tr>
      <tr><td>Start battery</td><td><span className="tag">OK</span></td><td>About 0.1-0.3 % reading error from the ADS1115's input, which calibration removes. A 40 V surge pushes only 0.19 mA into the ADS1115 (its limit is 10 mA), and it's harmless with the Pi off.</td></tr>
    </tbody>
  </table></div>
  <p className="cap">Gemini's X1209 facts were checked against Geekworm's own listing (6-18 V on a 5.5 × 2.1 mm jack, 12 V 3 A recommended). Its one claim that couldn't be confirmed, about what the Geekworm wiki says on input protection, was left out.</p>
</section>

      </main>
    </div>
  );
}
