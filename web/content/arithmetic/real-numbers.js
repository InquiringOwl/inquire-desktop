window.ARITH = window.ARITH || {};

ARITH["real-numbers"] = {
  title: "The Real Number System",
  short: "Naturals, integers, rationals, irrationals, reals",
  grade: "Grade 8; formalised in college",
  hours: 6,
  voice: "plain",
  eyebrow: "Number systems · the real line",
  hero: `<span class="m"><span class="c1">ℕ</span> ⊂ 𝕎 ⊂ <span class="c2">ℤ</span> ⊂ <span class="c3">ℚ</span> ⊂ ℝ</span>`,
  lede: `Each number system contains the one before it. The real numbers fill every point on the number line, including <span class="m c4">irrational</span> numbers like √2 and π that no fraction can equal.`,
  plain: `<p>You already use several kinds of number. Counting a crowd uses the <b>natural numbers</b> 1, 2, 3, …; add 0 and you have the <b>whole numbers</b>. An overdrawn account of −$40 needs the <b>integers</b>, which include the negatives. Splitting a $10 bill three ways gives <span class="m">10/3 = 3.333…</span> dollars each, a <b>rational number</b>: a fraction of two integers, whose decimal either ends or repeats.</p>
<p>Some lengths are not fractions at all. A square tile 1 m on a side has a diagonal of <span class="m">√2 ≈ 1.41421</span> m, and no fraction equals √2 exactly. Numbers like this are <b>irrational</b>: their decimals go on forever without repeating. π is another one.</p>
<p>The rationals and irrationals together make the <b>real numbers</b>, every point on the number line. Each set sits inside the next: <span class="m">ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ</span>. Real numbers are what you use for anything that varies smoothly, like length, time or temperature.</p>`,
  formal: `<div class="display"><span class="c1">ℕ</span> = {1, 2, 3, …} &nbsp; 𝕎 = {0, 1, 2, …} &nbsp; <span class="c2">ℤ</span> = {…, −2, −1, 0, 1, 2, …}<br><span class="c3">ℚ</span> = { <span class="fr"><span><i>p</i></span><span><i>q</i></span></span> : <i>p</i>, <i>q</i> ∈ ℤ, <i>q</i> ≠ 0 } &nbsp;&nbsp; <span class="c4">irrationals</span> = ℝ ∖ ℚ</div>
<p>A real number is rational if and only if its decimal expansion terminates or eventually repeats. √2 is irrational: if <span class="m">√2 = <i>p</i>/<i>q</i></span> in lowest terms, then <span class="m"><i>p</i><sup>2</sup> = 2<i>q</i><sup>2</sup></span>, so <span class="m"><i>p</i></span> is even, which forces <span class="m"><i>q</i></span> to be even too, a contradiction. More generally, <span class="m">√<i>n</i></span> for a positive integer <span class="m"><i>n</i></span> is rational only when <span class="m"><i>n</i></span> is a perfect square.</p>
<p>ℝ is a <b>complete ordered field</b>: it obeys the field axioms and an order, and every nonempty set of reals that is bounded above has a least upper bound. ℚ fails completeness. Both ℚ and the irrationals are <b>dense</b> in ℝ, but ℚ is countable while ℝ is uncountable (Cantor, 1874). (Some texts include 0 in ℕ; this page uses ℕ = {1, 2, 3, …}.)</p>`,
  legend: [
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The counting numbers 1, 2, 3, …. Adding 0 gives the whole numbers 𝕎." },
    { c: "c2", sym: `ℤ`, name: "Integers", desc: "Whole numbers and their negatives. Closed under subtraction." },
    { c: "c3", sym: `ℚ`, name: "Rational numbers", desc: "Quotients p/q of integers with q ≠ 0. Their decimals terminate or repeat." },
    { c: "c4", sym: `ℝ ∖ ℚ`, name: "Irrational numbers", desc: "Real numbers that are not rational, such as √2, π and e. Their decimals never terminate or repeat." }
  ],
  steps: { title: "How to classify a real number", items: [
    `Simplify first. For example, <span class="m">√49 = 7</span> and <span class="m">12/4 = 3</span>.`,
    `If it is a positive whole number, it is natural, whole, integer, rational and real.`,
    `If it is 0 or a negative whole number, it is an integer (and whole if 0), rational and real.`,
    `If it can be written as a fraction of integers, or its decimal terminates or repeats, it is rational.`,
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
    "Rounding π or √2 on a calculator to a sensible number of places",
    "Knowing a count of people must be a whole number",
    "Understanding why a temperature can be negative but a length cannot",
    "Measuring the diagonal of a TV or a room"
  ],
  fields: [
    { name: "Computer science", use: "Integer, rational and floating-point data types mirror the number sets and their limits." },
    { name: "Physics", use: "Physical quantities are modelled as real numbers so that calculus can be applied." },
    { name: "Engineering", use: "Tolerances decide how many digits of an irrational value are needed." },
    { name: "Finance", use: "Money is rational to the cent, so accounting software stores amounts as whole numbers of cents and rounds by stated rules." }
  ],
  layers: {
    concept: {
      heading: "What are the real numbers?",
      lede: `Which kinds of number are there, and can every length be written as a fraction? The real number system sorts numbers into nested families and shows that some lengths, like √2, are never fractions.`,
      history: `<p><b>The problem.</b> Builders, surveyors and scribes needed lengths such as the diagonal of a square. In Mesopotamia, a small clay school tablet now called YBC 7289, made around 1800 to 1600 BCE, shows a square with its diagonals and gives √2 in base 60 as 1;24,51,10, about 1.414213. That is within about one part in two million of the true value. The scribes could approximate the diagonal very closely, but whether an exact fraction existed was a separate question.</p>
<p><b>The solution.</b> Greek mathematicians of the Pythagorean tradition proved that no exact fraction exists: the diagonal and the side of a square have no common measure. Later accounts credit Hippasus with the first proof, though the details are uncertain. Everyday calculation with such lengths came much later. In 1585 the Flemish bookkeeper and engineer Simon Stevin published <i>De Thiende</i> ("The Tenth"), teaching astronomers, surveyors, wine-gaugers, mint-masters and merchants to compute with decimal fractions, and in another book that year he argued that irrational numbers are numbers like any other. In 1872 Richard Dedekind and Georg Cantor each published an exact definition of the real numbers; Dedekind had worked his out in 1858.</p>
<p><b>What it changed.</b> Decimals gave everyone one way to write any length to whatever precision a job needs, and the proofs showed that some lengths can only ever be approximated. That is why a calculator shows √2 as 1.414213562 and stops: it has rounded. Dedekind's and Cantor's definitions made the number line complete, with no gaps, which is what calculus, physics and engineering rely on when they treat time, length and temperature as smooth.</p>`,
      sources: [
        { title: "YBC 7289 (Wikipedia)", url: "https://en.wikipedia.org/wiki/YBC_7289" },
        { title: "The real numbers: Pythagoras to Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Real_numbers_1/" },
        { title: "The real numbers: Stevin to Hilbert (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Real_numbers_2/" },
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" }
      ],
      examples: [
        { role: "Software engineer", scene: `A program adds prices of $0.10 and $0.20 stored as binary floating-point numbers and gets 0.30000000000000004. Stored as whole cents, <span class="m">10 + 20 = 30</span> cents is exact.`, takeaway: "0.1 is rational but has no finite binary form, so money is kept as integers." },
        { role: "Carpenter", scene: `A brace runs corner to corner across a square gate 36 in wide. Its length is <span class="m">36√2 ≈ 50.91</span> in, so it is cut at 50 15/16 in, the nearest sixteenth.`, takeaway: "An irrational length must be rounded to what the tape measure can show." },
        { role: "Surveyor", scene: `A rectangular lot is 120 ft by 50 ft. Its diagonal is <span class="m">√(120² + 50²) = √16,900 = 130</span> ft, a whole number. A square lot 100 ft on a side has a diagonal of <span class="m">100√2 ≈ 141.42</span> ft, which is irrational.`, takeaway: "Simplify before deciding: a square root can come out exact." },
        { role: "Machinist", scene: `A shaft is 2 in across, so its circumference is <span class="m">2π ≈ 6.2832</span> in. Using 3.14 for π gives 6.28 in, off by about 0.003 in, more than three times a ±0.001 in tolerance.`, takeaway: "How many digits of π you need depends on the tolerance." },
        { role: "Mathematics teacher", scene: `A class compares 22/7 with π. Long division gives <span class="m">22/7 = 3.142857 142857…</span>, repeating every six digits, while <span class="m">π = 3.14159…</span> never repeats. 22/7 is larger than π by about 0.0013.`, takeaway: "A repeating decimal is a fraction in disguise; π is not." }
      ]
    },
    build: {
      lede: `To classify a number, simplify it, then test it against each set from the smallest up: natural, whole, integer, rational, and otherwise irrational.`,
      intro: `<p>The model above draws ℝ as the outer box. Inside it, ℚ contains ℤ, which contains 𝕎, which contains ℕ, and the irrationals sit in their own box beside ℚ. Click any number, or type one (an integer, a decimal, a fraction such as 2/3, a root such as √10, π or e) and press Place it. The panel ticks every set the number belongs to and says whether its decimal ends, repeats or does neither.</p>`,
      stepWhy: [
        `A number's form can hide its type. √49 looks like a root but equals 7, and 12/4 looks like a fraction but equals 3. You classify the value, not the way it is written.`,
        `The counting numbers are the innermost set, and each set contains the one before it, so a natural number belongs to all five.`,
        `Zero and the negatives are where the sets first differ: 0 is whole but not natural (on this page's convention), and negatives first appear with the integers.`,
        `A fraction of integers is the definition of rational. The decimal test says the same thing: long division by <i>q</i> has only <i>q</i> possible remainders, so the digits must either stop or start repeating.`,
        `These are the irrationals you will meet most. If √<i>n</i> equalled a fraction, squaring would make <i>n</i> a perfect square, as the formal proof for √2 shows.`,
        `The sets are nested, so belonging to a small set means belonging to every larger one. Listing them all tells you which operations are safe: integers can be subtracted freely, and rationals divided by anything except zero.`
      ],
      bridge: `<p>The garden problem follows a pattern you meet whenever a length comes from a square root or from π: find the exact value, decide whether it is rational, then round to the precision the job needs. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Measuring the diagonal of a TV or a room", link: `The diagonal is a square root. Bracket it between perfect squares, as the worked example did with <span class="m">7² = 49 &lt; 50 &lt; 64 = 8²</span>.` },
        { task: "Rounding π or √2 on a calculator", link: `Keep as many digits as the job needs, the way the garden side was rounded to 7.07 m and the fence to 28.3 m.` },
        { task: "Splitting a bill evenly", link: `$10 shared three ways is 3.333…, rational but repeating. Practice 2 turns a repeating decimal back into a fraction.` },
        { task: "Counting people or items", link: `A count must be a natural number (step 2), so a computed 12.4 guests means planning for 12 or 13.` },
        { task: "Reading a below-zero temperature", link: `−12 °C is an integer, a rational and a real number, exactly as in practice 1.` }
      ]
    },
    formal: {
      setup: { title: "Writing a real-number problem", items: [
        { say: `<b>Name the unknown.</b> Give it a letter, its units and the values it can take. A length is positive.`, math: `<span class="m"><i>s</i></span> = side of the garden in metres, &nbsp;<span class="m"><i>s</i> &gt; 0</span>` },
        { say: `<b>Write the equation.</b> Translate the condition into symbols.`, math: `<span class="m"><i>s</i><sup>2</sup> = 50</span>` },
        { say: `<b>Solve exactly and classify.</b> Take the positive root and simplify. Since 50 is not a perfect square, the theorem on √<i>n</i> says the root is irrational.`, math: `<span class="m"><i>s</i> = √50 = √(25 · 2) = 5√2 ∈ ℝ ∖ ℚ</span>` },
        { say: `<b>Bound it.</b> Squaring nearby decimals traps the value, which justifies each digit you keep.`, math: `<span class="m">7.07<sup>2</sup> = 49.9849 &lt; 50 &lt; 50.1264 = 7.08<sup>2</sup></span>` },
        { say: `<b>Compute and answer.</b> Carry the exact form as far as possible, round once at the end, and state the result with units.`, math: `<span class="m"><i>P</i> = 4<i>s</i> = 20√2 ≈ 28.28</span> &nbsp;→ You need about 28.3 m of fencing.` }
      ] }
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
    { wrong: `Treating 3.14 or 22/7 as equal to π.`, fix: `Both are rational approximations. π is irrational: <span class="m">22/7 = 3.142857…</span> while <span class="m">π = 3.141592…</span>.` },
    { wrong: `Thinking a long decimal like 0.142857142857… is irrational.`, fix: `It repeats, so it is rational. In fact it equals <span class="m"><span class="fr"><span>1</span><span>7</span></span></span>.` },
    { wrong: `Naming only one set: "−12 is an integer."`, fix: `It belongs to every set containing ℤ: −12 is an integer, a rational number and a real number.` }
  ],
  practice: [
    { ctx: "Weather", q: `A freezer thermometer reads <span class="m">−12</span> °C. Name every set of numbers that −12 belongs to.`, a: `Integers ℤ, rationals ℚ and reals ℝ. It is not natural or whole.` },
    { ctx: "Spreadsheets", q: `A spreadsheet shows a share of <span class="m">0.<span style="text-decoration:overline">36</span> = 0.3636…</span>. Write it as a fraction in lowest terms.`, a: `Let <span class="m"><i>x</i> = 0.3636…</span>. Then <span class="m">100<i>x</i> − <i>x</i> = 36</span>, so <span class="m"><i>x</i> = 36/99 = 4/11</span>.` },
    { ctx: "Home", q: `A square patio has an area of 45 ft². Is its side length <span class="m">√45</span> ft rational? Between which two whole numbers of feet does it lie?`, a: `45 is not a perfect square, so <span class="m">√45 = 3√5</span> is irrational. Since <span class="m">36 &lt; 45 &lt; 49</span>, the side is between 6 and 7 ft (≈ 6.708 ft).` },
    { ctx: "Machining", q: `A gearbox display shows a gear ratio of <span class="m">2.1<span style="text-decoration:overline">45</span> = 2.14545…</span>. Write it as a fraction in lowest terms.`, a: `<span class="m">1000<i>x</i> = 2145.45…</span> and <span class="m">10<i>x</i> = 21.45…</span>, so <span class="m">990<i>x</i> = 2124</span> and <span class="m"><i>x</i> = 2124/990 = 118/55</span>. Gear ratios come from whole tooth counts, so they are always rational: here, for example, 118 teeth on one gear and 55 on the other.` },
    { ctx: "Home", q: `Write an equation with a letter for the unknown, then solve: a square tablecloth must cover exactly 2 m². How long is each side <i>s</i>, and is it rational?`, a: `<span class="m"><i>s</i><sup>2</sup> = 2</span>, so <span class="m"><i>s</i> = √2</span> m (a length is positive). 2 is not a perfect square, so <i>s</i> is irrational. Since <span class="m">1.41<sup>2</sup> = 1.9881</span> and <span class="m">1.42<sup>2</sup> = 2.0164</span>, <b><i>s</i> ≈ 1.41 m</b>.` }
  ],
  origin: `Greek mathematicians of the Pythagorean school discovered, around the 5th century BCE, that the diagonal of a square has no common measure with its side, which in modern terms shows √2 is irrational. Rigorous constructions of the real numbers came in 1872 from Richard Dedekind and Georg Cantor.`
};
