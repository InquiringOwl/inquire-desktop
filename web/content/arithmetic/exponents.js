window.ARITH = window.ARITH || {};

ARITH["exponents"] = {
  title: "Exponents & Powers",
  short: "Repeated multiplication written compactly",
  grade: "Grades 6–8",
  hours: 6,
  voice: "plain",
  eyebrow: "Operations · powers",
  hero: `<span class="m"><span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup> = <span class="c2"><i>b</i></span> × <span class="c2"><i>b</i></span> × ⋯ × <span class="c2"><i>b</i></span></span>`,
  lede: `An exponent counts how many times the base is used as a factor. Powers grow very fast.`,
  plain: `<p>An <b>exponent</b> is shorthand for multiplying a number by itself. Instead of writing 2 × 2 × 2 × 2 × 2, you write <span class="m">2<sup>5</sup></span>, which is 32. The 2 is the <b>base</b>, the small raised 5 is the exponent, and the result, 32, is a <b>power</b> of 2.</p>
<p>Powers grow faster than most people expect. Suppose each person who hears some news passes it to 3 new people the next day. On day 1, 3 people hear it. On day 2, 9 do, and on day 3, 27. By day 6, <span class="m">3<sup>6</sup> = 729</span> new people hear it in a single day.</p>
<p>A few rules save a lot of work. Multiplying powers of the same base adds the exponents, because you are counting all the factors: <span class="m">2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></span>. Any nonzero number to the power 0 is 1, and a negative exponent means one over the power: <span class="m">2<sup>−3</sup> = 1/8</span>.</p>`,
  formal: `<p>For a real number <i>b</i> and a positive integer <i>n</i>, the <b>power</b> <span class="m"><i>b</i><sup><i>n</i></sup></span> is the product of <i>n</i> factors of <i>b</i>. For <span class="m"><i>b</i> ≠ 0</span> define <span class="m"><i>b</i><sup>0</sup> = 1</span> and <span class="m"><i>b</i><sup>−<i>n</i></sup> = 1/<i>b</i><sup><i>n</i></sup></span>. These definitions are the ones that keep the laws below true for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in basic arithmetic, although algebra and combinatorics texts often set <span class="m">0<sup>0</sup> = 1</span> by convention.</p>
<div class="display"><span class="m"><i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup></span><br><span class="m"><i>b</i><sup><i>m</i></sup> ÷ <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>−<i>n</i></sup></span> <span class="dim">(b ≠ 0)</span><br><span class="m">(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup></span><br><span class="m">(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup></span></div>
<p>Exponentiation is neither commutative nor associative: <span class="m">2<sup>3</sup> ≠ 3<sup>2</sup></span>, and a tower <span class="m"><i>a</i><sup><i>b</i><sup><i>c</i></sup></sup></span> is read top-down as <span class="m"><i>a</i><sup>(<i>b</i><sup><i>c</i></sup>)</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>b</i>`, name: "Base", desc: "The number being multiplied by itself." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "How many copies of the base are multiplied. Also called the power or index." },
    { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, name: "Power", desc: "The value of the repeated product. In the lab it is the height of each growth bar." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Evaluate anything inside parentheses first, including a power of a product like <span class="m">(2 × 5)<sup>3</sup></span>.`,
    `Check what the exponent applies to. In <span class="m">−3<sup>2</sup></span> it applies to 3 only; in <span class="m">(−3)<sup>2</sup></span> it applies to −3.`,
    `Combine powers of the same base: add exponents when multiplying, subtract when dividing, multiply when raising a power to a power.`,
    `Rewrite any zero exponent as 1 and any negative exponent as a reciprocal.`,
    `Compute the final power by repeated multiplication.`
  ] },
  example: {
    prompt: `A lab culture starts with 50 bacteria, and the population doubles every 20 minutes. How many bacteria are there after 3 hours, assuming none die?`,
    lines: [
      { math: `<span class="m">180 ÷ 20 = <span class="c3">9</span></span>`, note: "3 hours is 180 minutes, which is 9 doubling periods." },
      { math: `<span class="m">50 × <span class="c2">2</span><sup class="c3">9</sup></span>`, note: "Each period multiplies by 2, so 9 periods multiply by 2 nine times." },
      { math: `<span class="m"><span class="c2">2</span><sup class="c3">9</sup> = <span class="c1">512</span></span>`, note: "2, 4, 8, 16, 32, 64, 128, 256, 512." },
      { math: `<span class="m">50 × 512 = 25,600</span>`, note: "Multiply the starting count by the growth factor." }
    ],
    answer: `After 3 hours there are <span class="m">25,600</span> bacteria.`
  },
  why: `<p>Many things change by the same factor each step rather than by the same amount: money earning compound interest, a colony of cells, the activity of a medical isotope. Exponents are the language for that kind of change, and without them people badly underestimate it. A deposit earning 7% a year almost doubles in 10 years, because <span class="m">1.07<sup>10</sup> ≈ 1.97</span>.</p>
<p>Exponents also give short names to very large and very small numbers. A billion is <span class="m">10<sup>9</sup></span>, a nanometer is <span class="m">10<sup>−9</sup></span> meters, and computer memory comes in sizes like 8 GB and 16 GB that follow powers of 2. That makes it possible to compare quantities that differ by thousands or millions of times.</p>
<p>Later math builds directly on these rules. A square root undoes squaring, scientific notation is a number times a power of 10, and exponential functions and logarithms extend the same laws to any real exponent.</p>`,
  careers: [
    { role: "Financial advisor", use: "Projects savings with compound growth, where $P becomes P(1 + r)^t after t years at rate r." },
    { role: "Epidemiologist", use: "Models early outbreak growth as cases multiplying by a fixed factor each generation of infection." },
    { role: "Software engineer", use: "Sizes memory and address spaces in powers of 2, such as 2^32 addresses for a 32-bit system." },
    { role: "Sound engineer", use: "Uses the decibel scale, where every 10 dB increase is a factor of 10 in sound power." },
    { role: "Microbiologist", use: "Estimates cell counts from doubling times and dilution factors written as powers of 10." },
    { role: "Radiologic technologist", use: "Applies half-life decay, where the remaining activity is the initial amount times (1/2)^n after n half-lives." }
  ],
  life: [
    "Seeing how fast savings grow with compound interest",
    "Understanding storage sizes like 256 GB",
    "Reading area and volume units such as m² and cm³",
    "Following how a viral post spreads through shares",
    "Understanding why the Richter and decibel scales jump so quickly"
  ],
  fields: [
    { name: "Biology", use: "Cell division and population growth follow exponential patterns." },
    { name: "Computer science", use: "Binary representation and algorithm running times are measured in powers." },
    { name: "Physics", use: "Inverse-square laws and unit prefixes use exponents throughout." },
    { name: "Finance", use: "Compound interest and present-value formulas are built on powers." }
  ],
  layers: {
    concept: {
      heading: "What are exponents and powers?",
      lede: `Exponents answer one question: what happens when an amount is multiplied by the same factor again and again? They describe savings that compound, outbreaks that spread and storage that doubles.`,
      history: `<p><b>The problem.</b> Ancient astronomers and calculators had no easy way to name or work with huge numbers. Greek numerals stopped at a myriad, 10,000. In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes set out to show that even the number of grains of sand needed to fill the universe, as it was then pictured, could be named and bounded.</p>
<p><b>The solution.</b> Archimedes built larger units from powers of a myriad and proved the rule that multiplying powers of ten adds their exponents. With it he showed the sand would need no more than about <span class="m">10<sup>63</sup></span> grains, in modern notation. In 1484 Nicolas Chuquet, a copyist and arithmetic expert in Lyon, wrote small raised numbers for powers of an unknown and was the first known to use zero and negative exponents, though his manuscript stayed unprinted until 1880. Michael Stifel coined the word "exponent" in 1544, and René Descartes's <i>La Géométrie</i> (1637) introduced the raised notation we use, such as <span class="m"><i>a</i><sup>3</sup></span>.</p>
<p><b>What it changed.</b> A compact way to write repeated multiplication made growth and scale easy to state and compare. The same notation now runs through the interest on a loan, half-lives in medicine and the powers of 2 that size the memory in your phone.</p>`,
      sources: [
        { title: "The Sand Reckoner (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Sand_Reckoner" },
        { title: "Nicolas Chuquet (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Chuquet/" },
        { title: "Exponentiation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Exponentiation" },
        { title: "La Géométrie (Wikipedia)", url: "https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie" }
      ],
      examples: [
        { role: "Financial advisor", scene: `A client invests $5,000 at 6% a year, compounded yearly. After 3 years: <span class="m">5,000 × 1.06<sup>3</sup> = 5,000 × 1.191016 = 5,955.08</span>. Simple interest would give only $5,900.`, takeaway: "Interest on interest is a power, and the gap widens every year." },
        { role: "Epidemiologist", scene: `An outbreak starts with 5 cases, and each case infects 2 others in the next generation. New cases in generation 4: <span class="m">5 × 2<sup>4</sup> = 80</span>.`, takeaway: "Early, small numbers hide how fast a power will grow." },
        { role: "Software engineer", scene: `A 32-bit address can point to <span class="m">2<sup>32</sup> = 4,294,967,296</span> locations, about 4.3 billion. A 64-bit address squares that count: <span class="m">2<sup>64</sup> = (2<sup>32</sup>)<sup>2</sup></span>.`, takeaway: "Each extra bit doubles what a system can address." },
        { role: "Sound engineer", scene: `A 30 dB rise is three steps of 10 dB, so the sound power grows by <span class="m">10<sup>3</sup> = 1,000</span> times.`, takeaway: "Adding decibels multiplies power, so small readings hide big changes." },
        { role: "Microbiologist", scene: `A sample is diluted 1 to 10 six times, a factor of <span class="m">10<sup>−6</sup></span>. One mL of the last dilution grows 45 colonies, so the original held <span class="m">45 × 10<sup>6</sup> = 45,000,000</span> cells per mL.`, takeaway: "Powers of 10 turn a countable plate into a count of millions." },
        { role: "Radiologic technologist", scene: `A technetium-99m dose of 800 MBq has a half-life of about 6 hours. After 24 hours, 4 half-lives: <span class="m">800 × (1/2)<sup>4</sup> = 50</span> MBq.`, takeaway: "Timing a scan depends on how much activity remains." }
      ]
    },
    build: {
      lede: `To simplify a power expression, clear the grouping, see what each exponent applies to, combine powers of the same base with the exponent laws, then multiply out what is left.`,
      intro: `<p>The model above shows powers as growth bars. The base is the factor each step multiplies by, the exponent counts the steps, and the height of the bar is the power. Each colour plays the same role in every problem.</p>`,
      stepWhy: [
        `Parentheses mark what belongs together. In <span class="m">(2 × 5)<sup>3</sup></span> the exponent applies to the whole product, 10, so the result is 1,000. Working out the inside first keeps the exponent from landing on only part of it.`,
        `An exponent applies only to the number or bracket directly under it. In <span class="m">−3<sup>2</sup></span> the minus sign is applied after squaring, giving −9. Brackets make −3 the base and give 9.`,
        `The laws only count factors. <span class="m">2<sup>3</sup> × 2<sup>4</sup></span> is three 2s and four more, seven in all. Dividing cancels factors, so exponents subtract. A power of a power repeats a whole group of factors, so exponents multiply.`,
        `These meanings keep the laws working. <span class="m">2<sup>3</sup> ÷ 2<sup>3</sup></span> is 1, and the subtraction law gives <span class="m">2<sup>0</sup></span>, so <span class="m">2<sup>0</sup> = 1</span>. In the same way <span class="m">2<sup>0</sup> ÷ 2<sup>3</sup> = 2<sup>−3</sup> = 1/8</span>.`,
        `Combining first leaves one small power to compute instead of several large ones. Doubling step by step (2, 4, 8, 16, …) shows every factor, so none is lost.`
      ],
      bridge: `<p>The bacteria problem has a pattern that shows up wherever something repeats: count the periods, raise the growth factor to that number, then multiply by the starting amount. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Seeing how fast savings grow with compound interest", link: `Count the years as the example counted 20-minute periods, raise (1 + rate) to that power, then multiply by the deposit, just as 50 was multiplied by <span class="m">2<sup>9</sup></span>.` },
        { task: "Understanding storage sizes like 256 GB", link: `256 is <span class="m">2<sup>8</sup></span>: eight doublings along the same chain 2, 4, 8, … listed in the example.` },
        { task: "Reading area and volume units such as m² and cm³", link: `A cube 10 cm on a side holds <span class="m">10<sup>3</sup> = 1,000</span> cm³, one liter. The exponent counts how many lengths are multiplied.` },
        { task: "Following how a post spreads through shares", link: `If each share leads to 3 more, the reach after <i>n</i> rounds is a power of 3, worked like <span class="m">2<sup>9</sup></span> in the example with a different base.` },
        { task: "Understanding why the decibel scale jumps so quickly", link: `Each 10 dB is another factor of 10 in power, so 20 dB is <span class="m">10<sup>1</sup> × 10<sup>1</sup> = 10<sup>2</sup> = 100</span> times. Exponents add, as in step 3.` }
      ]
    },
    formal: {
      setup: { title: "Writing a growth problem with powers", items: [
        { say: `<b>Name the quantities.</b> Give the starting amount, the growth factor per period and the number of periods each a letter, with units.`, math: `<span class="m"><i>P</i> = 50</span> bacteria, &nbsp;<span class="m"><span class="c2"><i>b</i></span> = 2</span> per period, &nbsp;<span class="m"><span class="c3"><i>n</i></span> = 180 ÷ 20 = 9</span> periods` },
        { say: `<b>Write the model.</b> Each period multiplies the amount by <i>b</i>, so after <i>n</i> periods the amount is <i>P</i> times <i>b</i> to the <i>n</i>.`, math: `<span class="m"><i>A</i> = <i>P</i> · <span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup></span>` },
        { say: `<b>Justify the power.</b> The associative law lets the <i>n</i> factors of <i>b</i> be grouped into one power, and any split of the periods adds exponents.`, math: `<span class="m"><i>P</i> · <i>b</i> · <i>b</i> ⋯ <i>b</i> = <i>P</i> · <i>b</i><sup><i>n</i></sup></span>, &nbsp;<span class="m"><i>b</i><sup>9</sup> = <i>b</i><sup>4</sup> · <i>b</i><sup>5</sup></span>` },
        { say: `<b>Compute the power.</b> Split it into powers you know.`, math: `<span class="m">2<sup>9</sup> = 2<sup>4</sup> · 2<sup>5</sup> = 16 · 32 = <span class="c1">512</span></span>` },
        { say: `<b>Substitute and answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>A</i> = 50 · 512 = 25,600</span> &nbsp;→ After 3 hours there are 25,600 bacteria.` }
      ] }
    }
  },
  prereqWhy: {
    "multiplication": "A power is defined as repeated multiplication, so fluent multiplication is required.",
    "properties": "The exponent laws follow from the associative and commutative laws of multiplication."
  },
  unlocksWhy: {
    "roots": "A square root undoes squaring, the power with exponent 2.",
    "sci-notation": "Scientific notation writes numbers as a coefficient times a power of 10.",
    "percent-apps": "Compound interest multiplies by (1 + r) once per period, which is a power."
  },
  beyond: [
    { field: "Algebra I", why: "Polynomials are sums of terms with whole-number exponents, and simplifying them uses the exponent laws." },
    { field: "Precalculus", why: "Exponential and logarithmic functions extend exponents to all real numbers." },
    { field: "Calculus", why: "The power rule for derivatives and many series are written in terms of powers." }
  ],
  mistakes: [
    { wrong: `<span class="m">2<sup>3</sup> = 6</span>`, fix: `The exponent counts factors, not a multiplier: <span class="m">2<sup>3</sup> = 2 × 2 × 2 = 8</span>.` },
    { wrong: `<span class="m">−3<sup>2</sup> = 9</span>`, fix: `The exponent applies only to 3: <span class="m">−3<sup>2</sup> = −9</span>. Write <span class="m">(−3)<sup>2</sup> = 9</span> to square −3.` },
    { wrong: `<span class="m">2<sup>3</sup> · 2<sup>4</sup> = 4<sup>7</sup></span>`, fix: `Keep the base and add exponents: <span class="m">2<sup>7</sup> = 128</span>.` },
    { wrong: `<span class="m">(3 + 4)<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup></span>`, fix: `Powers do not distribute over addition: <span class="m">7<sup>2</sup> = 49</span>, but <span class="m">9 + 16 = 25</span>.` },
    { wrong: `Reading "doubles every 20 minutes for 3 hours" as <span class="m">2<sup>3</sup></span> because of the 3 hours.`, fix: `The exponent counts periods, not hours. 3 hours is <span class="m">180 ÷ 20 = 9</span> periods, so the factor is <span class="m">2<sup>9</sup> = 512</span>.` }
  ],
  practice: [
    { ctx: "Workplace", q: `In a phone tree, each person calls 3 people. Round 1 reaches 3 people, and each of them calls 3 more in round 2, and so on. How many people get a call in round 4? Evaluate <span class="m">3<sup>4</sup></span>.`, a: `<span class="m">3 × 3 × 3 × 3 = </span><b>81</b> people.` },
    { ctx: "Computing", q: `A server rack holds <span class="m">2<sup>3</sup></span> servers, and each server has <span class="m">2<sup>5</sup></span> GB of memory. How much memory is in the rack? Evaluate <span class="m">2<sup>5</sup> × 2<sup>3</sup></span>.`, a: `Add exponents: 5 + 3 = 8. <span class="m">2<sup>8</sup> = </span><b>256 GB</b>.` },
    { ctx: "Reports", q: `A report writes <span class="m">−2<sup>4</sup></span> where the author meant negative two to the fourth power. Compare <span class="m">(−2)<sup>4</sup></span> and <span class="m">−2<sup>4</sup></span>. What should the report say?`, a: `<span class="m">(−2)<sup>4</sup> = 16</span>, while <span class="m">−2<sup>4</sup> = −(2<sup>4</sup>) = −16</span>. The report needs the parentheses: <b>(−2)<sup>4</sup> = 16</b>.` },
    { ctx: "Printing", q: `A photo is enlarged to <span class="m">2<sup>3</sup></span> times its width, and the print is enlarged again by the same factor. Then it is shrunk to <span class="m">2<sup>−4</sup></span> of that width. How does the final width compare with the original? Evaluate <span class="m">(2<sup>3</sup>)<sup>2</sup> × 2<sup>−4</sup></span>.`, a: `(2³)² = 2⁶, then 2⁶ × 2⁻⁴ = 2² = <b>4</b> times the original width.` },
    { ctx: "Health care", q: `Write an equation with a letter for the unknown, then solve: a dose of a medical isotope starts at 640 MBq and loses half its activity every 6 hours. What activity <i>A</i> is left after 18 hours?`, a: `<span class="m"><i>n</i> = 18 ÷ 6 = 3</span> half-lives, so <span class="m"><i>A</i> = 640 × (1/2)<sup>3</sup> = 640 ÷ 8 = </span><b>80 MBq</b>.` }
  ],
  origin: `Archimedes, in <i>The Sand Reckoner</i> (3rd century BCE), worked with powers of a myriad (10,000) to name very large numbers. The raised-number notation such as <span class="m"><i>a</i><sup>3</sup></span> was popularized by René Descartes in <i>La Géométrie</i> (1637).`
};
