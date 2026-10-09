window.ARITH = window.ARITH || {};

ARITH["real-numbers"] = {
  title: "The Real Number System",
  short: "Naturals, integers, rationals, irrationals, reals",
  grade: "Grade 8; formalised in college",
  hours: 6,
  voice: "plain",
  eyebrow: "Number systems · the real line",
  hero: `<span class="m"><span class="c1">ℕ</span> ⊂ <span class="c5">𝕎</span> ⊂ <span class="c2">ℤ</span> ⊂ <span class="c3">ℚ</span> ⊂ ℝ</span>`,
  lede: `Each number system contains the one before it. The real numbers fill every point on the number line, including <span class="m c4">irrational</span> numbers like √2 and π that no fraction can equal.`,
  plain: `<p>You already use several kinds of number. Counting a crowd uses the <b>natural numbers</b> 1, 2, 3, …. Add 0 and you have the <b>whole numbers</b>. An overdrawn account of −$40 needs the <b>integers</b>, which include the negatives. Splitting a $10 bill three ways gives <span class="m">10/3 = 3.333…</span> dollars each. That is a <b>rational number</b>: a fraction of two integers. Its decimal either ends or repeats.</p>
<p>Some lengths are not fractions at all. A square tile 1 m on a side has a diagonal of <span class="m">√2 ≈ 1.41421</span> m, and no fraction equals √2 exactly. Numbers like this are <b>irrational</b>. Their decimals go on forever without repeating. π is another one.</p>
<p>The rationals and irrationals together make the <b>real numbers</b>, every point on the number line. Each set sits inside the next: <span class="m">ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ</span>. Real numbers are what you use for anything that varies smoothly, like length, time or temperature.</p>`,
  formal: `<div class="display"><span class="c1">ℕ</span> = {1, 2, 3, …} &nbsp; <span class="c5">𝕎</span> = {0, 1, 2, …} &nbsp; <span class="c2">ℤ</span> = {…, −2, −1, 0, 1, 2, …}<br><span class="c3">ℚ</span> = { <span class="fr"><span><i>p</i></span><span><i>q</i></span></span> : <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0 } &nbsp;&nbsp; <span class="c4">irrationals</span> = ℝ ∖ ℚ</div>
<p>A real number is rational if and only if its decimal expansion terminates or eventually repeats. √2 is irrational: if <span class="m">√2 = <i>p</i>/<i>q</i></span> in lowest terms, then <span class="m"><i>p</i><sup>2</sup> = 2<i>q</i><sup>2</sup></span>, so <span class="m"><i>p</i></span> is even, which forces <span class="m"><i>q</i></span> to be even too, a contradiction. More generally, <span class="m">√<i>n</i></span> for a positive integer <span class="m"><i>n</i></span> is rational only when <span class="m"><i>n</i></span> is a perfect square.</p>
<p>ℝ is a <b>complete ordered field</b>: it obeys the field axioms and an order, and every nonempty set of reals that is bounded above has a least upper bound. ℚ fails completeness. Both ℚ and the irrationals are <b>dense</b> in ℝ, but ℚ is countable while ℝ is uncountable (Cantor, 1874). (Some texts include 0 in ℕ; this page uses ℕ = {1, 2, 3, …}.)</p>`,
  legend: [
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The counting numbers 1, 2, 3, and on forever. They sit in the innermost box." },
    { c: "c5", sym: `𝕎`, name: "Whole numbers", desc: "The counting numbers plus 0. Zero is the one number in this box but not in ℕ." },
    { c: "c2", sym: `ℤ`, name: "Integers", desc: "Whole numbers and their negatives, like −3 and −12. You can always subtract and stay here." },
    { c: "c3", sym: `ℚ`, name: "Rational numbers", desc: "Any fraction p/q of two integers, with q not 0. Their decimals end or repeat." },
    { c: "c4", sym: `ℝ ∖ ℚ`, name: "Irrational numbers", desc: "Real numbers that are not fractions, such as √2, π and e. Their decimals never end and never repeat." }
  ],
  steps: { title: "How to classify a real number", items: [
    `Simplify first. For example, <span class="m">√49 = 7</span> and <span class="m">12/4 = 3</span>.`,
    `If it is a positive whole number, it is natural, whole, integer, rational and real.`,
    `If it is 0 or a negative whole number, it is an integer (and whole if 0), rational and real.`,
    `If it can be written as a fraction of integers, or its decimal ends or repeats, it is rational.`,
    `If it is the square root of a positive integer that is not a perfect square, or a known constant like π, it is irrational.`,
    `Every number on this list is real. Name every set it belongs to, not only the smallest.`
  ] },
  example: {
    prompt: `You want a square garden with an area of exactly 50 m². Is the side length a rational number? About how long is each side, and how much fencing goes around it?`,
    lines: [
      { math: `<span class="m"><i>s</i><sup>2</sup> = 50</span>`, note: "Area of a square is side squared." },
      { math: `<span class="m"><i>s</i> = √50 = 5√2</span>`, note: "50 = 25 × 2, and √25 = 5." },
      { math: `<span class="m">7<sup>2</sup> = 49 &lt; 50 &lt; 64 = 8<sup>2</sup></span>`, note: "50 is not a perfect square, so √50 is irrational. It lies between 7 and 8." },
      { math: `<span class="m">7.07<sup>2</sup> = 49.9849, &nbsp;7.08<sup>2</sup> = 50.1264</span>`, note: "So √50 is between 7.07 and 7.08, closer to 7.07." },
      { math: `<span class="m c4"><i>s</i> ≈ 7.071</span>`, note: "A calculator gives 7.0710678…, which never repeats." },
      { math: `<span class="m">4<i>s</i> = 20√2 ≈ 28.28</span>`, note: "Perimeter for the fence." }
    ],
    answer: `The side is <span class="m">√50 = 5√2</span> m, an irrational number about <span class="m">7.07</span> m. You need about <span class="m">28.3</span> m of fencing.`
  },
  why: `<p>Knowing which kind of number you have tells you what you can do with it and how far to trust its decimal. A count of people must be a natural number, so a forecast of 12.4 guests means about 12. Temperatures and bank balances can be negative. Money is rational, to the cent. Lengths like a square's diagonal or a circle's circumference are often irrational, so every decimal you write for them is an approximation, and you choose how many digits the job needs.</p>
<p>Mixing these up causes real errors. Computers store most decimals in binary and can only approximate them, so careful software keeps money as whole numbers of cents. A builder who rounds π to 3 on a circular job comes up short by about 4.5% of every circumference.</p>
<p>The real numbers are also the setting for the rest of math. Algebra solves equations in ℝ, graphs plot functions along the real line, and calculus depends on ℝ having no gaps: every value you can approach ever more closely is itself a real number.</p>`,
  careers: [
    { role: "Software engineer", use: "Chooses integer types for counts and floating-point types for measurements, knowing floats only approximate most real numbers." },
    { role: "Carpenter", use: "Cuts diagonal braces whose lengths, like 12√2 in, are irrational and must be rounded to the nearest sixteenth." },
    { role: "Surveyor", use: "Works with distances computed from square roots that are irrational and rounded to a stated precision." },
    { role: "Machinist", use: "Uses π, an irrational number, to compute circumferences and cutting speeds, rounding to the tolerance required." },
    { role: "Mathematics teacher", use: "Teaches students to classify numbers and to explain why √2 cannot be a fraction." }
  ],
  life: [
    "Measuring the diagonal of a TV or a room",
    "Rounding π or √2 on a calculator to a sensible number of places",
    "Splitting a bill evenly between friends",
    "Knowing a count of people or buses must be a whole number",
    "Understanding why a temperature can be negative but a length cannot"
  ],
  fields: [
    { name: "Computer science", use: "Integer, rational and floating-point data types mirror the number sets and their limits." },
    { name: "Physics", use: "Physical quantities are modelled as real numbers so that calculus can be applied." },
    { name: "Engineering", use: "Tolerances decide how many digits of an irrational value are needed." },
    { name: "Finance", use: "Money is rational to the cent, so accounting software stores amounts as whole numbers of cents and rounds by stated rules." }
  ],
  layers: {
    nudge: "Not yet. Simplify first, then test the smallest family up.",
    concept: {
      heading: "What are the real numbers?",
      lede: `Which kinds of number are there? Can every length be written as a fraction? The real numbers sort every number into families, one inside the next. Some lengths, like √2, are never fractions.`,
      question: { text: "Which kind of number?", sub: `Every number belongs to a family, and each family sits inside a bigger one. Click any number in the model above and watch which boxes hold it.`,
        figure: { sym: `#`, value: "0", cap: "example picked in the model", echo: "pick" } },
      ideasTitle: "Four families, all in the model",
      objects: ["side", "sides", "garden", "fence", "metre", "metres", "tile", "tiles", "balance", "brace", "gate", "shaft", "inch", "inches", "lot", "cent", "cents", "dollar", "dollars", "price", "prices", "tablet", "tablets", "screen", "digit", "digits"],
      walk: { title: "Sort it together: a square garden",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You want a square garden with an area of exactly 50 square metres. How long is each side? Is that length a fraction, or something else?`,
        demo: { kind: "line", from: 6, to: 9, tick: 1, points: [{ v: 7, c: "c1", label: "7 × 7 = 49" }, { v: 8, c: "c1", label: "8 × 8 = 64" }, { v: 7.0710678, c: "c4", label: "√50", below: true }], alt: "A number line from 6 to 9. A point at 7 is marked 7 × 7 = 49, a point at 8 is marked 8 × 8 = 64, and then the side, √50, appears a little past 7." },
        lines: [
          { math: `<i>s</i> × <i>s</i> = 50`, note: `The garden is a square. Its side times its side must make 50 square metres.`, frame: 0 },
          { math: `7 × 7 = 49, &nbsp;8 × 8 = 64`, note: `Try whole numbers. A 7 m side gives 49. An 8 m side gives 64.`, frame: 2 },
          { math: `49 &lt; 50 &lt; 64`, note: `50 sits between 49 and 64. So the side sits between 7 m and 8 m. No whole number works.`, frame: 3 },
          { math: `7.07 × 7.07 = 49.9849`, note: `Try 7.07. It gives a hair under 50. And 7.08 × 7.08 = 50.1264, a hair over.`, frame: 3 },
          { math: `√50 = 7.0710678 ?`, note: `A calculator shows 7.0710678. It looks like a decimal that ends. It isn't. The screen ran out of room and rounded: 7.0710678 × 7.0710678 is 49.99999983, not 50.`, frame: 3 },
          { math: `<span class="c4">√50</span> ≈ 7.07, &nbsp;4 × 7.07 ≈ 28.3`, note: `50 is not a whole number times itself, so √50 is irrational. No fraction equals it. Round it for the job: about 7.07 m a side, about 28.3 m of fence.`, frame: 3 }
        ],
        predict: [null,
          { ask: `A 7 m side gives 7 × 7 = 49. Now try an 8 m side. What is 8 × 8?`, parts: [{ label: "8 × 8", ans: 64 }], hint: `8 × 8 is 8 added up 8 times.` },
          { ask: `So between which two whole numbers is the side?`, choices: [
            { t: "Between 7 m and 8 m", ok: true },
            { t: "Between 25 m and 26 m", why: "That is half of 50. A 25 m side gives 25 × 25 = 625, far too big." },
            { t: "Between 6 m and 7 m", why: "A 7 m side gives only 49, which is under 50. The side must be longer than 7 m." }
          ], hint: `Where does 50 fall: before 49, between 49 and 64, or after 64?` },
          { ask: `7.07 × 7.07 = 49.9849. Is a 7.07 m side a bit short or a bit long?`, choices: [
            { t: "A bit short", ok: true },
            { t: "A bit long", why: "49.9849 is less than 50, so the garden comes out a little small." },
            { t: "Exactly right", why: "49.9849 is close to 50, but it is not 50." }
          ], hint: `Compare 49.9849 with 50.` },
          { ask: `The calculator shows 7.0710678. Is √50 a decimal that ends?`, choices: [
            { t: "No. The screen rounded it.", ok: true },
            { t: "Yes. The digits stop after 7 places.", why: "The screen stops. The number doesn't. Square 7.0710678 and you get a hair under 50." },
            { t: "Yes. Anything a calculator shows is exact.", why: "A calculator keeps about 10 digits and rounds the rest away." }
          ], hint: `If 7.0710678 were the exact side, 7.0710678 × 7.0710678 would be exactly 50.` },
          { ask: `The fence goes around 4 sides: 4 × 7.07 = 28.28. Round that to one decimal place.`, parts: [{ label: "metres of fence", ans: 28.3 }], hint: `Look at the second digit after the point. 8 is 5 or more, so round up.` }],
        answer: `Each side is <span class="m c4">√50</span> m, an irrational number. That is about 7.07 m, so you need about 28.3 m of fence.` },
      ideas: [
        { c: "c1", title: "Counting numbers start it all", term: "natural numbers", text: `1, 2, 3 and on forever. Add 0 and you have the whole numbers. They sit in the middle box.`,
          demo: { kind: "dots", slots: 6, lit: 5, sweep: true, alt: "Five dots light up one at a time and are numbered 1 to 5, the counting numbers." }, try: { label: "Pick 42", lab: "pick:2" } },
        { c: "c2", title: "Below zero needs new numbers", term: "integers", text: `A −$40 balance or −12 °C needs negatives. Whole numbers and their negatives make the integers.`,
          demo: { kind: "line", from: -5, to: 5, points: [{ v: 3, c: "c2", label: "3" }, { v: -3, c: "c2", label: "−3" }], alt: "A number line from −5 to 5. A point appears at 3, then its negative, −3, appears the same distance on the other side of 0." }, try: { label: "Pick −3", lab: "pick:5" } },
        { c: "c3", title: "Fractions end or repeat", term: "rational numbers", text: `3/4 = 0.75 ends. 1/3 = 0.333… repeats. Any fraction of two integers is rational.`,
          demo: { kind: "fraction", n: 3, d: 4, alt: "A bar is cut into 4 equal parts and 3 of them are shaded, one at a time: three quarters." }, try: { label: "Pick 3/4", lab: "pick:7" } },
        { c: "c4", title: "Some lengths are never fractions", term: "irrational numbers", text: `A tile 1 m wide has a diagonal of √2 m. Its digits never end or repeat. No fraction equals it.`,
          demo: { kind: "line", from: 1, to: 2, points: [{ v: 1.41421356, c: "c4", label: "√2" }], alt: "A number line from 1 to 2 with a point at √2, a little less than halfway, near 1.414." }, try: { label: "Pick √2", lab: "pick:11" } }
      ],
      timelineTitle: "People have measured √2 for nearly 4,000 years",
      timelineLead: `Builders and scribes needed the diagonal of a square long before anyone knew it was never a fraction. Each step put another number in the model's boxes.`,
      timeline: [
        { when: "About 1800 to 1600 BCE", what: `A school tablet from Mesopotamia, now called YBC 7289, shows a square with its diagonals. It gives √2 as about 1.414213, very close to the true value.` },
        { when: "5th century BCE", what: `Greek thinkers of the Pythagorean school, possibly Hippasus, show that the side and diagonal of a square share no common measure. √2 is not a fraction: the violet box in the model.` },
        { when: "1585", what: `Simon Stevin, a bookkeeper and engineer from Bruges, publishes <i>De Thiende</i> ("The Tenth"), teaching decimals to surveyors, wine-gaugers and merchants. The same year he argues that roots and irrationals are numbers like any other.` },
        { when: "1761", what: `Johann Heinrich Lambert proves that π cannot be a fraction. π sits in the model's irrational box.` },
        { when: "1872", what: `Richard Dedekind and Georg Cantor each publish an exact definition of the real numbers. The number line has no gaps: the outer box ℝ.` }
      ],
      history: `<p><b>The problem.</b> Builders, surveyors and scribes needed lengths such as the diagonal of a square. In Mesopotamia, a small clay school tablet now called YBC 7289, made around 1800 to 1600 BCE, shows a square with its diagonals. It gives √2 in base 60 as 1;24,51,10, about 1.414213. That is off by less than one part in two million. The scribes could get very close. Whether an exact fraction existed was a separate question.</p>
<p><b>The solution.</b> Greek thinkers of the Pythagorean school, in the 5th century BCE, showed that no exact fraction exists. The side and diagonal of a square have no common measure. Later accounts credit Hippasus with the first proof, but the details are uncertain. Everyday work with such lengths came much later. In 1585 Simon Stevin, a bookkeeper and engineer from Bruges, published <i>De Thiende</i> ("The Tenth"). He wrote it for stargazers, surveyors, carpet-makers, wine-gaugers, mint-masters and merchants, and it taught them to compute with decimals. That same year he argued that roots and irrational numbers are numbers like any other. In 1761 Johann Heinrich Lambert proved that π is not a fraction either. In 1872 Richard Dedekind and Georg Cantor each published an exact definition of the real numbers. Dedekind had worked his out in 1858.</p>
<p><b>What it changed.</b> Decimals gave everyone one way to write any length to the precision a job needs. The proofs showed that some lengths can only ever be rounded. That is why a calculator shows √2 as 1.414213562 and stops. Dedekind's and Cantor's definitions made the number line complete, with no gaps. Calculus, physics and engineering rely on that when they treat time, length and temperature as smooth.</p>`,
      sources: [
        { title: "YBC 7289 (Wikipedia)", url: "https://en.wikipedia.org/wiki/YBC_7289" },
        { title: "Irrational number: history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Irrational_number" },
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" },
        { title: "The real numbers: Stevin to Hilbert (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Real_numbers_2/" }
      ],
      matters: { title: "Why the kind of number matters", text: `<p>Knowing what kind of number you have tells you <b>what you can do with it</b>, and how far to trust its digits.</p><ul class="why-chips"><li>A <b>count</b> of people is a counting number</li><li>A <b>temperature</b> can drop below zero</li><li>A <b>diagonal</b> is often never a fraction</li></ul><p>When a length is irrational, every decimal you write for it is <b>rounded</b>. You choose how many digits the job needs.</p>` },
      stakes: { title: "Where sorting numbers goes wrong", lead: `Most slips come from judging a number by how it looks.`, items: [
        { role: "Calculator screen", text: `√50 shows as 7.0710678. The screen rounded. The real digits go on forever.` },
        { role: "Root sign", text: `Calling √9 irrational because of the root sign. √9 = 3, a counting number.` },
        { role: "Long decimal", text: `Calling 0.333… irrational because it never ends. It repeats, so it equals 1/3.` },
        { role: "Money in software", text: `A program adds 0.1 and 0.2 and gets 0.30000000000000004. Careful code counts whole cents instead.` }
      ], try: { label: "Pick 0.333…", lab: "pick:9" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Software engineer", figure: "$0.30", scene: `A program adds prices of $0.10 and $0.20 stored as binary floating-point numbers and gets 0.30000000000000004. Stored as whole cents, <span class="m">10 + 20 = 30</span> cents is exact.`, takeaway: "0.1 is rational but has no finite binary form, so money is kept as integers." },
        { role: "Carpenter", figure: "50 15/16 in", try: { label: "Pick √2", lab: "pick:11" }, scene: `A brace runs corner to corner across a square gate 36 in wide. Its length is <span class="m">36√2 ≈ 50.91</span> in, so it is cut at 50 15/16 in, the nearest sixteenth.`, takeaway: "An irrational length must be rounded to what the tape measure can show." },
        { role: "Surveyor", figure: "130 ft", scene: `A lot is 120 ft by 50 ft. Its diagonal is <span class="m">√(120² + 50²) = √16,900 = 130</span> ft, a whole number. A square lot 100 ft on a side has a diagonal of <span class="m">100√2 ≈ 141.42</span> ft, which is irrational.`, takeaway: "Simplify before deciding: a square root can come out exact." },
        { role: "Machinist", figure: "6.2832 in", try: { label: "Pick π", lab: "pick:12" }, scene: `A shaft is 2 in across, so its circumference is <span class="m">2π ≈ 6.2832</span> in. Using 3.14 for π gives 6.28 in. That is off by about 0.003 in, more than three times a ±0.001 in tolerance.`, takeaway: "How many digits of π you need depends on the tolerance." },
        { role: "Mathematics teacher", figure: "22/7", scene: `A class compares 22/7 with π. Long division gives <span class="m">22/7 = 3.142857 142857…</span>, repeating every six digits. But <span class="m">π = 3.14159…</span> never repeats. 22/7 is larger than π by about 0.0013.`, takeaway: "A repeating decimal is a fraction in disguise; π is not." }
      ]
    },
    build: {
      lede: `To classify a number, simplify it, then test it against each family from the smallest up: natural, whole, integer, rational, and otherwise irrational.`,
      task: { text: "Name every family a number belongs to.", sub: `The same six steps sort any number, from a garden side to a bus count. Try each one in the model above as you go.`,
        figure: { sym: `#`, value: "0", cap: "example picked in the model", echo: "pick" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model draws ℝ as the outer box. Inside it, <span class="c3">ℚ</span> holds <span class="c2">ℤ</span>, which holds <span class="c5">𝕎</span>, which holds <span class="c1">ℕ</span>. The <span class="c4">irrationals</span> sit in their own box beside ℚ. Click any number, or type one and press <b>Place it</b>. The panel ticks every family the number belongs to. It also says whether its decimal ends, repeats or does neither.</p>`,
      keyTry: [{ label: "Pick 1", lab: "pick:1" }, { label: "Pick 0", lab: "pick:4" }, { label: "Pick −12", lab: "pick:6" }, { label: "Pick −2.5", lab: "pick:8" }, { label: "Pick e", lab: "pick:13" }],
      objects: ["foot", "feet", "metre", "metres", "room", "tabletop", "dollar", "dollars", "cent", "cents", "share", "shares", "bill", "bus", "buses", "people", "seat", "seats", "degree", "degrees"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Click the number, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `A number's form can hide its type. √49 looks like a root but equals 7. 12/4 looks like a fraction but equals 3. You sort the value, not the look.`,
        `The counting numbers are the innermost box. Each box sits inside the next, so a counting number is in all five.`,
        `This is where the boxes first differ. 0 is whole but not natural. Negatives first show up with the integers.`,
        `A fraction of integers is what rational means. Long division by <i>q</i> has only <i>q</i> possible remainders, so the digits must stop or start repeating.`,
        `These are the irrationals you meet most. If √<i>n</i> were a fraction, <i>n</i> would have to be a perfect square.`,
        `The boxes are nested, so a number in a small box is in every bigger one. Listing them all tells you what you can do: integers subtract freely, and rationals divide by anything but 0.`
      ],
      stepTry: [null, { label: "Pick 7", lab: "pick:0" }, { label: "Pick 0", lab: "pick:4" }, null, null, { label: "Pick −12", lab: "pick:6" }],
      stepGoal: [
        { key: "pick", eq: 3, text: `Click the number in the model that has a root sign but is really a counting number.`, after: `<span class="m">√9 = 3</span>. Simplified, it sits with the counting numbers.`, notYet: `Not yet. Look in the ℕ box for a root sign.` },
        null, null,
        { key: "pick", eq: 10, text: `Click the positive decimal in the model that ends.`, after: `<span class="m">0.125 = 125/1000 = 1/8</span>. It ends, so it is rational.`, notYet: `Not yet. 0.333… never ends. Look for a decimal that stops.` },
        { key: "pick", eq: 14, text: `Click the negative number in the model that is irrational.`, after: `<span class="m">−√5</span>: 5 is not a perfect square, so √5 is irrational, and so is its negative.`, notYet: `Not yet. −3 and −2.5 are rational. Look in the irrational box.` },
        null],
      matters: { title: "Why a Method Beats the Look of a Number", text: `<p>Numbers can look like one thing and be another. A guess based on looks gets the family wrong.</p><ul class="why-chips"><li><b>Root signs</b> that hide whole numbers</li><li><b>Long decimals</b> that hide fractions</li><li><b>Calculator screens</b> that round</li></ul><p>The method checks <b>the value</b>, not the look. Simplify first, then test each family from the smallest up.</p>` },
      bridge: `<p>The garden followed a pattern you meet whenever a length comes from a square root or a share comes from dividing: find the exact value, decide what family it is in, then round to what the job needs. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Measuring the diagonal of a TV or a room", check: { q: `A room is 9 ft by 12 ft. Its diagonal is <span class="m">√(9 × 9 + 12 × 12)</span> ft. How long is the diagonal?`, parts: [{ label: "feet", ans: 15 }], hint: `Work out what is under the root sign first. Then ask which number times itself makes it.` }, figure: "15 ft",
          demo: { kind: "bar", parts: [81, 144], labels: ["9 × 9", "12 × 12"], cap: "under the root sign", alt: "A bar model: a part of 81 for 9 × 9 and a part of 144 for 12 × 12 join to make 225." },
          lines: [{ math: `9 × 9 = 81, &nbsp;12 × 12 = 144`, note: "Square each side." }, { math: `81 + 144 = 225`, note: "Add the two squares." }, { math: `15 × 15 = 225`, note: "225 is a perfect square, so √225 = 15 exactly." }, { math: `diagonal = 15 ft`, note: "The root sign hid a whole number." }],
          predict: [null, { ask: `What is 81 + 144?`, parts: [{ label: "81 + 144", ans: 225 }], hint: `80 + 140 = 220, then add 1 and 4.` }], link: `Simplify first (step 1). A root sign does not make a number irrational: √225 is 15, the way √9 in the model is 3.` },
        { task: "Rounding π or √2 on a calculator", check: { q: `A square tabletop is 1 m on each side. Its diagonal is √2 m, and a calculator shows 1.414213562. Round it to the nearest hundredth of a metre.`, parts: [{ label: "metres", ans: 1.41 }], hint: `Look at the third digit after the point. Less than 5 rounds down.` }, figure: "1.41 m",
          demo: { kind: "line", from: 1.4, to: 1.43, tick: 0.01, points: [{ v: 1.41421356, c: "c4", label: "√2" }], alt: "A number line from 1.40 to 1.43 marked every hundredth. √2 sits a little past 1.41, much closer to 1.41 than to 1.42." },
          lines: [{ math: `√2 = 1.414213562…`, note: "The screen shows 10 digits. The real digits never stop." }, { math: `1.41 &lt; √2 &lt; 1.42`, note: "√2 sits between these two hundredths." }, { math: `1.414… is closer to 1.41`, note: "The next digit is 4, less than 5, so round down." }, { math: `√2 ≈ 1.41 m`, note: "141 cm is close enough to cut a tablecloth." }],
          predict: [null, null, { ask: `Which hundredth is closer to √2?`, choices: [{ t: "1.41", ok: true }, { t: "1.42", why: "√2 is about 0.006 below 1.42 but only about 0.004 above 1.41." }], hint: `The digit after 1.41 is 4.` }], link: `Like the garden side in the Concept walk, √2 is irrational, so any decimal you write is rounded. Keep the digits the job needs.` },
        { task: "Splitting a bill evenly between friends", check: { q: `Three friends split a $10 bill evenly. Each share is 10 ÷ 3 dollars. Rounded to the cent, what does each pay, and how many cents are left over?`, parts: [{ label: "each pays ($)", ans: 3.33 }, { label: "cents left over", ans: 1 }], hint: `10 ÷ 3 = 3.333…. Round to the cent, then multiply by 3.` }, figure: "$3.33",
          demo: { kind: "fraction", n: 10, d: 3, mixed: true, cap: "dollars each", alt: "Bars cut into thirds fill one third at a time. Ten thirds make three whole bars and one third more: 3 1/3." },
          lines: [{ math: `10 ÷ 3 = 3.333…`, note: "The 3s repeat forever." }, { math: `3.333… = 10/3`, note: "A repeating decimal is a fraction, so the share is rational." }, { math: `3 × 3.33 = 9.99`, note: "Round each share to the cent." }, { math: `10.00 − 9.99 = 0.01`, note: "One cent is left over. One friend pays $3.34." }],
          predict: [null, null, { ask: `Each friend pays $3.33. What is 3 × 3.33?`, parts: [{ label: "3 × 3.33", ans: 9.99 }], hint: `3 × 3 = 9 and 3 × 0.33 = 0.99.` }], link: `Step 4: a decimal that repeats is rational. Here it is the fraction 10/3, like 0.333… = 1/3 in the model.` },
        { task: "Knowing a count of buses must be a whole number", check: { q: `130 people go on a trip. Each bus holds 48 people. How many buses do you book?`, parts: [{ label: "buses", ans: 3 }], hint: `A count of buses is a counting number. Two buses are not enough.` }, figure: "3 buses",
          demo: { kind: "bar", parts: [48, 48, 34], labels: ["bus 1", "bus 2", "bus 3"], cap: "people", alt: "A bar model: 48 people on bus 1, 48 on bus 2 and 34 on bus 3 make 130 people." },
          lines: [{ math: `130 ÷ 48 = 2.708…`, note: "The division does not come out even." }, { math: `2 × 48 = 96`, note: "Two buses seat only 96 people." }, { math: `3 × 48 = 144`, note: "Three buses seat everyone, with 14 seats spare." }, { math: `buses = 3`, note: "A count of buses is a counting number. Round up, not to the nearest." }],
          predict: [null, { ask: `How many people fit on 2 buses?`, parts: [{ label: "2 × 48", ans: 96 }], hint: `48 + 48.` }], link: `Step 2: counts live in the ℕ box. A real-number answer like 2.708 must become a counting number before you book.` },
        { task: "Reading a below-zero temperature", check: { q: `At dusk it is 4 °C. By midnight it drops 9 degrees. What is the temperature at midnight?`, parts: [{ label: "°C", ans: -5 }], hint: `Count down 4 degrees to reach 0, then 5 more.` }, figure: "−5 °C",
          demo: { kind: "line", from: -6, to: 6, start: 4, jumps: [-9], unit: "degree", alt: "A number line from −6 to 6. A dot starts at 4 and hops 9 to the left, landing on −5." },
          lines: [{ math: `4 − 9 = −5`, note: "Drop 9 degrees from 4." }, { math: `−5 is not a counting number`, note: "So it is not natural and not whole." }, { math: `−5 is in ℤ, ℚ and ℝ`, note: "It is an integer, so it is also rational and real." }],
          predict: [null, { ask: `What is the smallest family that holds −5?`, choices: [{ t: "ℤ, the integers", ok: true }, { t: "ℕ, the counting numbers", why: "Counting numbers start at 1. Nothing below 0 is in ℕ." }, { t: "The irrationals", why: "−5 = −5/1, a fraction of integers, so it is rational." }], hint: `Which box first lets numbers go below zero?` }],
          try: { label: "Pick −3", lab: "pick:5" }, link: `Steps 3 and 6: a negative whole number is an integer, and so also rational and real, like −3 and −12 in the model.` }
      ]
    },
    formal: {
      question: { text: "What makes a number rational, or real?", sub: `You can sort numbers by family and say why. Here are the words a textbook uses for the same ideas, and how to write a real-number problem out in full.`,
        figure: { sym: `#`, value: "0", cap: "example picked in the model", echo: "pick" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `ℕ`, term: "Natural numbers", def: `The set <span class="m">{1, 2, 3, …}</span>. Some texts, especially in set theory and computer science, include 0.`, was: "the counting numbers" },
        { c: "c5", sym: `𝕎`, term: "Whole numbers", def: `The set <span class="m">{0, 1, 2, …}</span>: the natural numbers together with 0.`, was: "counting numbers plus zero" },
        { c: "c2", sym: `ℤ`, term: "Integers", def: `The set <span class="m">{…, −2, −1, 0, 1, 2, …}</span>. It is closed under addition, subtraction and multiplication.`, was: "whole numbers and their negatives" },
        { c: "c3", sym: `ℚ`, term: "Rational numbers", def: `The set <span class="m">{<i>p</i>/<i>q</i> : <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0}</span>. A real number is rational if and only if its decimal expansion terminates or eventually repeats.`, was: "fractions, and decimals that end or repeat" },
        { c: "c4", sym: `ℝ ∖ ℚ`, term: "Irrational numbers", def: `Real numbers that are not rational. Their decimal expansions neither terminate nor repeat; examples are √2, π and e.`, was: "lengths that are never fractions" },
        { sym: `ℝ`, term: "Real numbers", def: `The union of the rationals and the irrationals: a complete ordered field, in one-to-one correspondence with the points of a line.`, was: "every point on the number line" },
        { sym: `<i>n</i> = <i>m</i><sup>2</sup>`, term: "Perfect square", def: `An integer that is the square of an integer. For a positive integer <i>n</i>, √<i>n</i> is rational if and only if <i>n</i> is a perfect square.`, was: "a whole number times itself, like 49" },
        { sym: `<i>A</i> ⊂ <i>B</i>`, term: "Subset", def: `Every element of <i>A</i> is an element of <i>B</i>. The chain <span class="m">ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ</span> says each set lies inside the next.`, was: "each box sits inside the next" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>The set you solve in can change the answer. Ask for the <b>rational</b> solutions of <span class="m"><i>x</i><sup>2</sup> = 2</span> and the answer is none. Ask for the <b>real</b> solutions and there are two.</p><ul class="why-chips"><li>In ℚ: <b>no solution</b></li><li>In ℝ: <b>√2 and −√2</b></li><li>For a length: <b>√2</b> only</li></ul><p>Naming the set exactly tells a reader <b>which answers count</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong classifications judge the written form instead of the value, or stop at the smallest set.`,
      setupIntro: `<p>The square garden from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a real-number problem", items: [
        { say: `<b>Name the unknown.</b> Give it a letter, its units and the values it can take. A length is positive.`, math: `<span class="m"><i>s</i></span> = side of the garden in metres, &nbsp;<span class="m"><i>s</i> &gt; 0</span>` },
        { say: `<b>Write the equation.</b> Translate the condition into symbols.`, math: `<span class="m"><i>s</i><sup>2</sup> = 50</span>` },
        { say: `<b>Solve exactly and classify.</b> Take the positive root and simplify. Since 50 is not a perfect square, the theorem on √<i>n</i> says the root is irrational.`, math: `<span class="m"><i>s</i> = √50 = √(25 · 2) = 5√2 ∈ ℝ ∖ ℚ</span>` },
        { say: `<b>Bound it.</b> Squaring nearby decimals traps the value, which justifies each digit you keep.`, math: `<span class="m">7.07<sup>2</sup> = 49.9849 &lt; 50 &lt; 50.1264 = 7.08<sup>2</sup></span>` },
        { say: `<b>Compute and answer.</b> Carry the exact form as far as possible, round once at the end, and state the result with units.`, math: `<span class="m"><i>P</i> = 4<i>s</i> = 20√2 ≈ 28.28</span> &nbsp;→ You need about 28.3 m of fencing.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: simplify, test each set from ℕ up, and name every set the number belongs to. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can classify real numbers the formal way.",
      checks: [
        { hint: `−12 is not in ℕ or 𝕎. Count the sets from ℤ outward.`, parts: [{ label: "sets", ans: 3 }] },
        { hint: `Find the perfect squares on either side of 45.`, parts: [{ label: "between", ans: 6 }, { label: "and", ans: 7 }] },
        { hint: `Two digits repeat, so subtract <i>x</i> from 100<i>x</i>.`, parts: [{ label: "numerator", ans: 4 }, { label: "denominator", ans: 11 }] },
        { hint: `Shift so the repeating block lines up: subtract 10<i>x</i> from 1000<i>x</i>.`, parts: [{ label: "numerator", ans: 118 }, { label: "denominator", ans: 55 }] },
        { hint: `Bracket √2 between 1.41 and 1.42 by squaring them.`, parts: [{ label: "s (m)", ans: 1.41 }] }
      ]
    }
  },
  prereqWhy: {
    "integers": "The integers ℤ are one layer of the system, and you need negatives to see how ℤ extends the whole numbers.",
    "fraction-ops": "The rationals ℚ are exactly the fractions, and their closure under the four operations defines their place in the system.",
    "roots": "Square roots of non-perfect squares, like √2, are the first irrational numbers most people meet.",
    "decimals": "Classifying numbers by whether their decimals terminate, repeat or do neither depends on reading decimal expansions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Solutions of equations are stated as real numbers, and the domain of a function is a subset of ℝ." },
    { field: "Calculus", why: "Limits and continuity rely on the completeness of ℝ." },
    { field: "Real analysis", why: "The course constructs ℝ rigorously and proves its completeness, density and uncountability." },
    { field: "Number theory", why: "Irrationality proofs and rational approximation of irrationals are central topics." }
  ],
  mistakes: [
    { wrong: `Calling <span class="m">√49</span> irrational because it has a root sign.`, fix: `Simplify first: <span class="m">√49 = 7</span>, a natural number.` },
    { wrong: `Reading a calculator's <span class="m">√2 = 1.414213562</span> as a terminating decimal, so rational.`, fix: `The display rounds. <span class="m">1.414213562<sup>2</sup> = 1.99999999894…</span>, not 2. √2 is irrational and its expansion never ends.` },
    { wrong: `Treating 3.14 or 22/7 as equal to π.`, fix: `Both are rational approximations. π is irrational: <span class="m">22/7 = 3.142857…</span> while <span class="m">π = 3.141592…</span>.` },
    { wrong: `Thinking a long decimal like 0.142857142857… is irrational.`, fix: `It repeats, so it is rational. In fact it equals <span class="m"><span class="fr"><span>1</span><span>7</span></span></span>.` },
    { wrong: `Naming only one set: "−12 is an integer."`, fix: `It belongs to every set containing ℤ: −12 is an integer, a rational number and a real number.` }
  ],
  practice: [
    { ctx: "Weather", q: `A freezer thermometer reads <span class="m">−12</span> °C. Name every set of numbers that −12 belongs to. How many of the five sets ℕ, 𝕎, ℤ, ℚ, ℝ is that?`, a: `Integers ℤ, rationals ℚ and reals ℝ: <b>3</b> sets. It is not natural or whole.` },
    { ctx: "Home", q: `A square patio has an area of 45 ft². Is its side length <span class="m">√45</span> ft rational? Between which two whole numbers of feet does it lie?`, a: `45 is not a perfect square, so <span class="m">√45 = 3√5</span> is irrational. Since <span class="m">36 &lt; 45 &lt; 49</span>, the side is between <b>6</b> and <b>7</b> ft (≈ 6.708 ft).` },
    { ctx: "Spreadsheets", q: `A spreadsheet shows a share of <span class="m">0.<span style="text-decoration:overline">36</span> = 0.3636…</span>. Write it as a fraction in lowest terms.`, a: `Let <span class="m"><i>x</i> = 0.3636…</span>. Then <span class="m">100<i>x</i> − <i>x</i> = 36</span>, so <span class="m"><i>x</i> = 36/99 = <b>4/11</b></span>.` },
    { ctx: "Machining", q: `A gearbox display shows a gear ratio of <span class="m">2.1<span style="text-decoration:overline">45</span> = 2.14545…</span>. Write it as a fraction in lowest terms.`, a: `<span class="m">1000<i>x</i> = 2145.45…</span> and <span class="m">10<i>x</i> = 21.45…</span>, so <span class="m">990<i>x</i> = 2124</span> and <span class="m"><i>x</i> = 2124/990 = <b>118/55</b></span>. Gear ratios come from whole tooth counts, so they are always rational: here, for example, 118 teeth on one gear and 55 on the other.` },
    { ctx: "Home", q: `Write an equation with a letter for the unknown, then solve: a square tablecloth must cover exactly 2 m². How long is each side <i>s</i>, and is it rational?`, a: `<span class="m"><i>s</i><sup>2</sup> = 2</span>, so <span class="m"><i>s</i> = √2</span> m (a length is positive). 2 is not a perfect square, so <i>s</i> is irrational. Since <span class="m">1.41<sup>2</sup> = 1.9881</span> and <span class="m">1.42<sup>2</sup> = 2.0164</span>, <b><i>s</i> ≈ 1.41 m</b>.` }
  ],
  origin: `Greek mathematicians of the Pythagorean school discovered, in the 5th century BCE, that the diagonal of a square has no common measure with its side, which in modern terms shows √2 is irrational. Rigorous constructions of the real numbers came in 1872 from Richard Dedekind and Georg Cantor.`
};
