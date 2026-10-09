window.ARITH = window.ARITH || {};

ARITH["exponents"] = {
  title: "Exponents & Powers",
  short: "Repeated multiplication written compactly",
  grade: "Grades 6–8",
  hours: 6,
  voice: "plain",
  eyebrow: "Operations · powers",
  hero: `<span class="m"><span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup> = <span class="c2"><i>b</i></span> × <span class="c2"><i>b</i></span> × ⋯ × <span class="c2"><i>b</i></span></span>`,
  lede: `For a positive integer <i>n</i>, the power <span class="m"><i>b</i><sup><i>n</i></sup></span> is the product of <i>n</i> factors of the base <i>b</i>. Zero and negative exponents are defined so that the laws of exponents hold for every integer exponent.`,
  plain: `<p>An <b>exponent</b> is shorthand for multiplying a number by itself. Instead of writing 2 × 2 × 2 × 2 × 2, you write <span class="m">2<sup>5</sup></span>, which is 32. The 2 is the <b>base</b>, the small raised 5 is the exponent, and the result, 32, is a <b>power</b> of 2.</p>
<p>Powers grow faster than most people expect. Suppose each person who hears some news passes it to 3 new people the next day. On day 1, 3 people hear it. On day 2, 9 do, and on day 3, 27. By day 6, <span class="m">3<sup>6</sup> = 729</span> new people hear it in a single day.</p>
<p>A few rules save a lot of work. Multiplying powers of the same base adds the exponents, because you are counting all the factors: <span class="m">2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></span>. Any nonzero number to the power 0 is 1, and a negative exponent means one over the power: <span class="m">2<sup>−3</sup> = 1/8</span>.</p>`,
  formal: `<p>For a real number <i>b</i> and a positive integer <i>n</i>, the <b>power</b> <span class="m"><i>b</i><sup><i>n</i></sup></span> is the product of <i>n</i> factors of <i>b</i>. For <span class="m"><i>b</i> ≠ 0</span> define <span class="m"><i>b</i><sup>0</sup> = 1</span> and <span class="m"><i>b</i><sup>−<i>n</i></sup> = 1/<i>b</i><sup><i>n</i></sup></span>. These definitions are the ones that keep the laws below true for all integer exponents. The expression <span class="m">0<sup>0</sup></span> is left undefined in basic arithmetic, although algebra and combinatorics texts often set <span class="m">0<sup>0</sup> = 1</span> by convention.</p>
<div class="display"><span class="m"><i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup></span><br><span class="m"><i>b</i><sup><i>m</i></sup> ÷ <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>−<i>n</i></sup></span> <span class="dim">(b ≠ 0)</span><br><span class="m">(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup></span><br><span class="m">(<i>ab</i>)<sup><i>n</i></sup> = <i>a</i><sup><i>n</i></sup><i>b</i><sup><i>n</i></sup></span></div>
<p>Exponentiation is neither commutative nor associative: <span class="m">2<sup>3</sup> ≠ 3<sup>2</sup></span>, and a tower <span class="m"><i>a</i><sup><i>b</i><sup><i>c</i></sup></sup></span> is read top-down as <span class="m"><i>a</i><sup>(<i>b</i><sup><i>c</i></sup>)</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>b</i>`, name: "Base", desc: "The number you multiply by, again and again. In the model it is the number in each box of the top row." },
    { c: "c3", sym: `<i>n</i>`, name: "Exponent", desc: "How many copies of the base are multiplied. The model counts them under the boxes. Below 0, it divides instead." },
    { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, name: "Power", desc: "The value of the repeated product. In the model it is the lit bar. Each bar to its left is one factor fewer." }
  ],
  steps: { title: "How to simplify an expression with exponents", items: [
    `Work out anything inside parentheses first, including a power of a product like <span class="m">(2 × 5)<sup>3</sup></span>.`,
    `Check what the exponent applies to. In <span class="m">−3<sup>2</sup></span> it applies to 3 only. In <span class="m">(−3)<sup>2</sup></span> it applies to −3.`,
    `Combine powers of the same base. Add exponents when multiplying, subtract when dividing, multiply when raising a power to a power.`,
    `Rewrite any zero exponent as 1 and any negative exponent as one over the power.`,
    `Compute the final power by repeated multiplication.`
  ] },
  example: {
    prompt: `A lab dish starts with 50 bacteria, and the count doubles every 30 minutes. How many bacteria are there after 3 hours, if none die?`,
    lines: [
      { math: `<span class="m">180 ÷ 30 = <span class="c3">6</span></span>`, note: "3 hours is 180 minutes, which holds 6 doubling periods." },
      { math: `<span class="m">50 × <span class="c2">2</span><sup class="c3">6</sup></span>`, note: "Each period multiplies by 2, so 6 periods multiply by 2 six times." },
      { math: `<span class="m"><span class="c2">2</span><sup class="c3">6</sup> = <span class="c1">64</span></span>`, note: "2, 4, 8, 16, 32, 64." },
      { math: `<span class="m">50 × 2<sup>3</sup> = 400</span>`, note: "Using the 3 hours as the exponent is the classic slip. 400 is the count after only an hour and a half." },
      { math: `<span class="m">50 × 64 = 3,200</span>`, note: "Multiply the starting count by the growth factor." }
    ],
    answer: `After 3 hours there are <span class="m">3,200</span> bacteria.`
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
    nudge: "Not yet. Count the factors: the exponent says how many times the base is multiplied.",
    concept: {
      lede: `Exponents answer one question: what happens when an amount is multiplied by the same number again and again? They describe savings that compound, outbreaks that spread and storage that doubles.`,
      heading: "What are exponents and powers?",
      question: { text: "How many factors?", sub: `An exponent counts how many times one number is multiplied by itself. Watch the factors line up in the model above, then try each idea yourself.`,
        figure: { sym: `<i>b</i><sup><i>n</i></sup>`, value: "32", cap: "the power", echo: "power" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["bacteria", "bacterium", "doubling", "doublings", "factor", "factors", "row", "rows", "hop", "hops", "zeros", "cases", "case", "locations", "cells", "colonies", "grains", "dollars", "half-lives", "copies", "slice", "slices"],
      walk: { title: "Double it together: bacteria in a dish",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A lab dish starts with 50 bacteria. The count doubles every 30 minutes. How many bacteria are there after 3 hours?`,
        demo: { kind: "line", from: 0, to: 3200, start: 50, jumps: [50, 100, 200, 400, 800, 1600], cap: "bacteria after 3 hours", alt: "A dot starts at 50 on a line from 0 to 3,200. Each hop doubles the count: 100, 200, 400, 800, 1,600, then 3,200, and every hop is longer than all the hops before it." },
        lines: [
          { math: `50`, note: `The dish starts with 50 bacteria. Every 30 minutes, the count doubles.`, frame: 0 },
          { math: `50 × 2 = 100`, note: `After 30 minutes, the 50 bacteria have doubled to 100.`, frame: 1 },
          { math: `50 × 2 × 2 = 200`, note: `After one hour, they double again. Each doubling adds one more factor of 2.`, frame: 2 },
          { math: `180 ÷ 30 = <span class="c3">6</span>`, note: `3 hours is 180 minutes. That holds 6 doublings, so you need 6 factors of 2.`, frame: 6 },
          { math: `<span class="c2">2</span><sup class="c3">6</sup> = 2 × 2 × 2 × 2 × 2 × 2 = <span class="c1">64</span>`, note: `Six factors of 2 is written 2⁶, said "2 to the 6th." The 2 is the base. The 6 is the exponent.`, frame: 6 },
          { math: `50 × 2³ = 400`, note: `A shortcut uses the 3 hours as the exponent. It gives 400, the count after only an hour and a half.`, frame: 3 },
          { math: `50 × <span class="c1">64</span> = 3,200`, note: `Multiply the start by 2⁶. After 3 hours, the dish holds 3,200 bacteria.`, frame: 7 }
        ],
        predict: [null,
          { ask: `The 50 bacteria double once. How many are there after 30 minutes?`, parts: [{ label: "after 30 min", ans: 100 }], hint: `Doubling means times 2.` },
          null,
          { ask: `3 hours is 180 minutes. How many 30-minute doublings fit in 3 hours?`, parts: [{ label: "doublings", ans: 6 }], hint: `Two doublings each hour, for 3 hours. Or work out 180 ÷ 30.` },
          { ask: `Six doublings means six factors of 2. What is 2⁶?`, choices: [
            { t: "64", ok: true },
            { t: "12", why: "That is 2 × 6. The 6 counts how many 2s you multiply. It is not a number to multiply by." },
            { t: "36", why: "That is 6 × 6. The base is 2, the number that doubles. The 6 only counts." }
          ], hint: `Double six times: 2, 4, 8, …` },
          { ask: `A friend says: "It's 3 hours, so 50 × 2³ = 400." What went wrong?`, choices: [
            { t: "The exponent counts doublings, not hours", ok: true },
            { t: "2³ should be 6", why: "2³ = 2 × 2 × 2 = 8. The power is right. The count of doublings is wrong." },
            { t: "Nothing, 400 is right", why: "400 is the count after an hour and a half, three doublings in. Three more doublings follow." }
          ], hint: `How many times does the count double in 3 hours?` },
          { ask: `The dish started with 50. What is 50 × 64?`, parts: [{ label: "bacteria", ans: 3200 }], hint: `50 × 64 is half of 100 × 64.` }],
        answer: `After 3 hours, the dish holds <span class="m">3,200</span> bacteria: <span class="m">50 × 2⁶</span>.` },
      ideas: [
        { c: "c2", title: "The number you multiply by", term: "base", text: `The base is the factor you use again and again. In 3², the base is 3. Three rows of 3 make 9.`,
          demo: { kind: "array", rows: 3, cols: 3, cap: "3² = 3 × 3", alt: "Three rows of 3 dots light up one row at a time, 3, 6, 9, then the product 9 lifts out." }, try: { label: "Show 3 squared", lab: "b:3,n:2" } },
        { c: "c3", title: "Count the factors", term: "exponent", text: `The small raised number counts the factors. 2⁴ means 2 × 2 × 2 × 2. Four doublings from 1 reach 16, not 8.`,
          demo: { kind: "line", from: 0, to: 16, start: 1, jumps: [1, 2, 4, 8], cap: "2⁴, four doublings", alt: "A dot starts at 1 and hops four times, each hop doubling it: 2, 4, 8, then 16." }, try: { label: "Double 4 times", lab: "b:2,n:4" } },
        { c: "c1", title: "Powers grow fast", term: "power", text: `The answer is the power. Each step up multiplies by the base once more. Six factors of 10 put six zeros after the 1.`,
          demo: { kind: "columns", n: 1000000, alt: "Place-value columns fill from the left: a 1 in the millions place, then six zeros, making 1,000,000, which is 10 to the 6th." }, try: { label: "Show 10 to the 6th", lab: "b:10,n:6" } },
        { c: "c3", title: "Step down to divide", term: "negative exponent", text: `Each step down divides by the base. 2⁰ is 1. Three steps below that, 2⁻³ is 1/8, one slice of eight.`,
          demo: { kind: "fraction", n: 1, d: 8, cap: "2⁻³ = 1 ÷ 2³", alt: "A bar is cut into 8 equal parts and one part is shaded, showing one eighth." }, try: { label: "Show 2 to the −3", lab: "b:2,n:-3" } }
      ],
      timelineTitle: "People have written repeated multiplication for 2,000 years",
      timelineLead: `Each step made huge and tiny numbers easier to name. The rules they found are the ones listed beside the model.`,
      timeline: [
        { when: "3rd century BCE", what: `Archimedes, in <i>The Sand Reckoner</i>, names numbers far beyond a myriad, 10,000. He proves that multiplying powers of 10 adds their exponents, the first rule beside the model.` },
        { when: "1484", what: `In Lyon, Nicolas Chuquet writes small numbers for powers. He uses an exponent of 0 and, for the first time, negative exponents: the bars left of <span class="m"><i>b</i><sup>0</sup></span> in the model.` },
        { when: "1544", what: `Michael Stifel coins the word "exponent."` },
        { when: "1637", what: `René Descartes's <i>La Géométrie</i> writes <span class="m"><i>a</i><sup>3</sup></span> for <span class="m"><i>a</i> × <i>a</i> × <i>a</i></span>, the raised notation used today.` }
      ],
      history: `<p><b>The problem.</b> Ancient astronomers and calculators had no handy way to name or work with huge numbers. The Greek number system of the time could express numbers up to a myriad, 10,000. In <i>The Sand Reckoner</i> (3rd century BCE), Archimedes set out to show that even the number of grains of sand needed to fill the universe, as it was then pictured, could be named and bounded.</p>
<p><b>The solution.</b> Archimedes built larger units from powers of a myriad and proved the rule that multiplying powers of ten adds their exponents. With it he showed the sand would need no more than about <span class="m">10<sup>63</sup></span> grains, in modern notation. In 1484 Nicolas Chuquet, a former copyist and writing master working in Lyon as an arithmetic expert, wrote small numbers for powers of an unknown. He used an exponent of zero and was the first known to use negative exponents, though his manuscript stayed unprinted until 1880. Michael Stifel coined the word "exponent" in 1544, and René Descartes's <i>La Géométrie</i> (1637) introduced the raised notation we use, such as <span class="m"><i>a</i><sup>3</sup></span>.</p>
<p><b>What it changed.</b> A compact way to write repeated multiplication made growth and scale quick to state and compare. The same notation now runs through the interest on a loan, half-lives in medicine and the powers of 2 that size the memory in your phone.</p>`,
      sources: [
        { title: "The Sand Reckoner (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Sand_Reckoner" },
        { title: "Nicolas Chuquet (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Chuquet/" },
        { title: "Exponentiation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Exponentiation" },
        { title: "La Géométrie (Wikipedia)", url: "https://en.wikipedia.org/wiki/La_G%C3%A9om%C3%A9trie" }
      ],
      matters: { title: "Why powers matter", text: `<p>Some things grow by the <b>same factor</b> each step, not by the same amount. Exponents are how you see where that leads.</p><ul class="why-chips"><li><b>Savings</b> earn interest on interest</li><li><b>Germs</b> double again and again</li><li><b>Storage</b> doubles with each bit</li></ul><p>People guess low when things multiply. A power shows the <b>real size</b> before it surprises you, in a bank account or in a hospital.</p>` },
      stakes: { title: "Where powers go wrong", lead: `Most slips mix up what the exponent counts.`, items: [
        { role: "Counting the wrong thing", text: `Reading 3 hours as 2³ gives 400 bacteria, not 3,200. The exponent counts doublings, not hours.` },
        { role: "Times instead of power", text: `2³ is 8, not 6. The 3 counts factors of 2. It does not multiply.` },
        { role: "The minus sign", text: `−3² is −9, because only the 3 is squared. Write (−3)² to get 9.` },
        { role: "Savings", text: `7% a year for 10 years is not 70% more. Interest on interest makes it about 97% more.` }
      ], try: { label: "Show 2³, three doublings", lab: "b:2,n:3" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Financial advisor", figure: "$5,955.08", scene: `A client invests $5,000 at 6% a year, compounded yearly. After 3 years: <span class="m">5,000 × 1.06<sup>3</sup> = 5,000 × 1.191016 = 5,955.08</span>. Simple interest would give only $5,900.`, takeaway: "Interest on interest is a power, and the gap widens every year." },
        { role: "Epidemiologist", figure: "80 new cases", scene: `An outbreak starts with 5 cases, and each case infects 2 others in the next generation. New cases in generation 4: <span class="m">5 × 2<sup>4</sup> = 80</span>.`, takeaway: "Early, small numbers hide how fast a power will grow.", try: { label: "Show 2⁴", lab: "b:2,n:4" } },
        { role: "Software engineer", figure: "4.3 billion", scene: `A 32-bit address can point to <span class="m">2<sup>32</sup> = 4,294,967,296</span> locations, about 4.3 billion. A 64-bit address squares that count: <span class="m">2<sup>64</sup> = (2<sup>32</sup>)<sup>2</sup></span>.`, takeaway: "Each extra bit doubles what a system can address." },
        { role: "Sound engineer", figure: "1,000 times", scene: `A 30 dB rise is three steps of 10 dB, so the sound power grows by <span class="m">10<sup>3</sup> = 1,000</span> times.`, takeaway: "Adding decibels multiplies power, so small readings hide big changes.", try: { label: "Show 10³", lab: "b:10,n:3" } },
        { role: "Microbiologist", figure: "45 million cells", scene: `A sample is diluted 1 to 10 six times, a factor of <span class="m">10<sup>−6</sup></span>. One mL of the last dilution grows 45 colonies, so the original held <span class="m">45 × 10<sup>6</sup> = 45,000,000</span> cells per mL.`, takeaway: "Powers of 10 turn a countable plate into a count of millions.", try: { label: "Show 10⁶", lab: "b:10,n:6" } },
        { role: "Radiologic technologist", figure: "50 MBq", scene: `A technetium-99m dose of 800 MBq has a half-life of about 6 hours. After 24 hours, 4 half-lives: <span class="m">800 × (1/2)<sup>4</sup> = 50</span> MBq.`, takeaway: "Timing a scan depends on how much activity remains." }
      ]
    },
    build: {
      lede: `To simplify a power expression, clear the grouping, see what each exponent applies to, combine powers of the same base, then multiply out what is left.`,
      task: { text: "Count the factors, then multiply.", sub: `The same five moves work for any power, from 2⁶ bacteria doublings to a 256 GB phone. Try each one in the model above as you go.`,
        figure: { sym: `<i>b</i><sup><i>n</i></sup>`, value: "32", cap: "in the model", echo: "power" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The top row of the model writes the power out as boxes, one box for each copy of the <span class="c2">base</span>. The line under the boxes counts them: that count is the <span class="c3">exponent</span>. The bars below show every power from the 0th up, and the lit bar is the <span class="c1">power</span> you set.</p>`,
      keyTry: [{ label: "Base 6, exponent 2", lab: "b:6,n:2" }, { label: "Raise 3 to the 6th", lab: "b:3,n:6" }, { label: "See 4⁴ on a log scale", lab: "b:4,n:4,log:1" }],
      objects: ["bacteria", "factor", "factors", "box", "boxes", "bar", "bars", "dollars", "year", "years", "GB", "doubling", "doublings", "cube", "cubes", "layer", "layers", "people", "round", "rounds", "shares"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Parentheses mark what belongs together. In <span class="m">(2 × 5)<sup>3</sup></span> the exponent applies to the whole product, 10, so the result is 1,000. Working out the inside first keeps the exponent from landing on part of it.`,
        `An exponent applies only to the number or bracket right under it. In <span class="m">−3<sup>2</sup></span> the minus sign comes after squaring, giving −9. Brackets make −3 the base and give 9.`,
        `The laws only count factors. <span class="m">2<sup>3</sup> × 2<sup>4</sup></span> is three 2s and four more, seven in all. Dividing cancels factors, so exponents subtract. A power of a power repeats a whole group, so exponents multiply.`,
        `These meanings keep the laws working. <span class="m">2<sup>3</sup> ÷ 2<sup>3</sup></span> is 1, and the subtraction law gives <span class="m">2<sup>0</sup></span>, so <span class="m">2<sup>0</sup> = 1</span>. In the same way <span class="m">2<sup>0</sup> ÷ 2<sup>3</sup> = 2<sup>−3</sup> = 1/8</span>.`,
        `Combining first leaves one small power to compute instead of several large ones. Multiplying step by step (3, 9, 27, …) shows every factor, so none is lost.`
      ],
      stepTry: [{ label: "Show (2 × 5)³ = 10³", lab: "b:10,n:3" }, { label: "Show 3²", lab: "b:3,n:2" }, null, null, null],
      stepGoal: [null, null,
        { key: "power", eq: 128, text: `<span class="m">2<sup>3</sup> × 2<sup>4</sup></span> has 3 + 4 factors of 2. Make the model show that one power.`, after: `Seven factors of 2: <span class="m">2<sup>7</sup> = 128</span>. The exponents added.`, notYet: `Not yet. Keep the base at 2 and set the exponent to 3 + 4.` },
        { key: "power", eq: 0.25, text: `<span class="m">2<sup>0</sup> ÷ 2<sup>2</sup></span> leaves 0 − 2 as the exponent. Make the model show that power of 2.`, after: `<span class="m">2<sup>−2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25</span>. Each bar to the left divides by 2.`, notYet: `Not yet. Keep the base at 2 and move the exponent below 0: 0 − 2.` },
        { key: "power", eq: 243, text: `Make the model show five factors of 3, then multiply them out yourself.`, after: `<span class="m">3, 9, 27, 81, 243</span>: <span class="m">3<sup>5</sup> = 243</span>.`, notYet: `Not yet. Set the base to 3 and the exponent to 5.` }],
      matters: { title: "Why the Order of Moves Matters", text: `<p>Power problems go wrong when a move happens too early or lands on the wrong number. A fixed order catches both.</p><ul class="why-chips"><li><b>Brackets</b> first</li><li><b>Same base</b>, then combine</li><li><b>Multiply</b> out last</li></ul><p>Combining before you multiply keeps the numbers <b>small</b> until the very end, so there is less to get wrong.</p>` },
      bridge: `<p>The bacteria walk had a pattern that shows up wherever something repeats: count the periods, raise the growth factor to that number, then multiply by the start. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Seeing how fast savings grow with compound interest", check: { q: `You deposit $1,000 at 10% a year, compounded yearly. How many dollars are in the account after 3 years?`, parts: [{ label: "dollars", ans: 1331 }], hint: `Each year multiplies the balance by 1.1. Do it three times.` }, figure: "3 years at 10%",
          demo: { kind: "bar", parts: [1000, 331], labels: ["deposit", "interest"], unit: "dollar", alt: "A bar for the $1,000 deposit, then a bar for $331 of interest, then the brace and the total, $1,331." },
          lines: [{ math: `1,000 × 1.1 = 1,100`, note: "Year 1: the deposit plus 10%." }, { math: `1,100 × 1.1 = 1,210`, note: "Year 2: interest is paid on the interest too." }, { math: `1,210 × 1.1 = 1,331`, note: "Year 3." }, { math: `1,000 × 1.1³ = 1,331`, note: "Three years, three factors of 1.1." }],
          predict: [null, { ask: `After year 1 there is $1,100. What is it after year 2?`, parts: [{ label: "dollars", ans: 1210 }], hint: `1,100 × 1.1 is 1,100 plus a tenth of 1,100.` }], link: `Count the years the way the walk counted doublings. The growth factor is 1.1 instead of 2.` },
        { task: "Understanding storage sizes like 256 GB", check: { q: `Memory sizes double: 1, 2, 4, 8 GB and so on. How many doublings take you from 1 GB to 256 GB?`, parts: [{ label: "doublings", ans: 8 }], hint: `Keep doubling from 1 and count the hops to 256.` }, figure: "1 GB to 256 GB",
          demo: { kind: "line", from: 0, to: 256, start: 1, jumps: [1, 2, 4, 8, 16, 32, 64, 128], cap: "GB", alt: "A dot starts at 1 and doubles eight times: 2, 4, 8, 16, 32, 64, 128, then 256." },
          lines: [{ math: `1, 2, 4, 8, 16, 32, 64, 128, 256`, note: "List the sizes, doubling each time." }, { math: `2⁴ = 16`, note: "After 4 doublings: 16 GB." }, { math: `2⁸ = 256`, note: "256 is eight factors of 2: 8 doublings." }],
          predict: [null, { ask: `After 4 doublings from 1 GB, what size do you reach?`, parts: [{ label: "GB", ans: 16 }], hint: `1, 2, 4, 8, …` }], try: { label: "Show 2⁸", lab: "b:2,n:8" }, link: `The same chain as the walk, starting at 1 instead of 50. The exponent counts the doublings (step 5).` },
        { task: "Reading area and volume units such as m² and cm³", check: { q: `A cube-shaped box is 10 cm on each side. How many 1 cm cubes fill it?`, parts: [{ label: "cubes", ans: 1000 }], hint: `One layer is 10 rows of 10. Then stack 10 layers.` }, figure: "10 cm a side",
          demo: { kind: "array", rows: 10, cols: 10, unit: "cube", cap: "cubes in one layer", alt: "Ten rows of 10 cubes light up one row at a time, 10, 20, up to 100 cubes in one layer of the box." },
          lines: [{ math: `10 cm × 10 cm × 10 cm`, note: "Three lengths are multiplied, so the unit is cm³." }, { math: `10 × 10 = 100`, note: "One layer holds 10 rows of 10 cubes." }, { math: `10³ = 100 × 10 = 1,000`, note: "Ten layers make 1,000 cm³, exactly one liter." }],
          predict: [null, { ask: `How many cubes fit in one layer of the box?`, parts: [{ label: "cubes", ans: 100 }], hint: `10 rows of 10.` }], try: { label: "Show 10³", lab: "b:10,n:3" }, link: `The small 3 in cm³ is an exponent. It counts the lengths multiplied, as 2⁶ counted the doublings in the walk.` },
        { task: "Following how a post spreads through shares", check: { q: `Each person who sees a post shares it with 5 new people. Round 1 reaches 5 people. How many new people see it in round 3?`, parts: [{ label: "people", ans: 125 }], hint: `Each round multiplies by 5.` }, figure: "5 shares each",
          demo: { kind: "bar", parts: [25, 25, 25, 25, 25], cap: "new people in round 3", alt: "Five equal bars of 25 people appear one at a time, then the brace and the total, 125." },
          lines: [{ math: `5`, note: "Round 1: 5 people." }, { math: `5 × 5 = 25`, note: "Round 2: each of the 5 shares with 5 more." }, { math: `25 × 5 = 125 = 5³`, note: "Round 3: three factors of 5." }],
          predict: [null, { ask: `How many new people see it in round 2?`, parts: [{ label: "people", ans: 25 }], hint: `5 people each share with 5.` }], try: { label: "Show 5³", lab: "b:5,n:3" }, link: `Round 3 is 5³, built like the walk's 2⁶ with a different base.` }
      ]
    },
    formal: {
      question: { text: "What does bⁿ mean, exactly?", sub: `You can count factors and multiply them out. Here are the words a textbook uses for the same ideas, and how to write a growth problem out in full.`,
        figure: { sym: `<i>b</i><sup><i>n</i></sup>`, value: "32", cap: "the power", echo: "power" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>b</i>`, term: "Base", def: `In <span class="m"><i>b</i><sup><i>n</i></sup></span>, the number used as a repeated factor.`, was: "the number you multiply by" },
        { c: "c3", sym: `<i>n</i>`, term: "Exponent", def: `For a positive integer <i>n</i>, the number of factors of <i>b</i> in <span class="m"><i>b</i><sup><i>n</i></sup></span>. Zero and negative integer exponents are defined separately, below.`, was: "count the factors" },
        { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, term: "Power", def: `The expression <span class="m"><i>b</i><sup><i>n</i></sup></span>, read "<i>b</i> to the <i>n</i>th power," or its value. <span class="m"><i>b</i><sup>2</sup></span> is the square and <span class="m"><i>b</i><sup>3</sup></span> the cube of <i>b</i>.`, was: "the answer, the lit bar" },
        { c: "c3", sym: `<i>b</i><sup>0</sup> = 1`, term: "Zero exponent", def: `For <span class="m"><i>b</i> ≠ 0</span>, <span class="m"><i>b</i><sup>0</sup> = 1</span>, the empty product. It keeps <span class="m"><i>b</i><sup><i>m</i></sup> ÷ <i>b</i><sup><i>m</i></sup> = <i>b</i><sup>0</sup></span> true.`, was: "no factors at all" },
        { c: "c3", sym: `<i>b</i><sup>−<i>n</i></sup>`, term: "Negative exponent", def: `For <span class="m"><i>b</i> ≠ 0</span>, <span class="m"><i>b</i><sup>−<i>n</i></sup> = 1/<i>b</i><sup><i>n</i></sup></span>, the reciprocal of the positive power.`, was: "step down to divide" },
        { c: "c1", sym: `<i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup>`, term: "Product of powers", def: `Multiplying powers of the same base adds the exponents, since the factors are counted together. The quotient rule subtracts them.`, was: "three 2s and four more" },
        { c: "c1", sym: `(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup>`, term: "Power of a power", def: `Raising a power to a power multiplies the exponents: <i>n</i> groups of <i>m</i> factors each.`, was: "a whole group repeated" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>Spoken aloud, "negative three squared" can mean two things. Written down, <b>the bracket decides the base</b>, and the answers differ in sign.</p><ul class="why-chips"><li><span class="m">(−3)<sup>2</sup> = 9</span>: the base is −3</li><li><span class="m">−3<sup>2</sup> = −9</span>: the base is 3</li></ul><p>Naming the base and the exponent exactly is what lets someone else <b>check your answer</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here treat the exponent as an ordinary number to multiply by, or put it on the wrong base.`,
      setupIntro: `<p>The bacteria dish from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a growth problem with powers", items: [
        { say: `<b>Name the quantities.</b> Give the starting amount, the growth factor per period and the number of periods each a letter, with units.`, math: `<span class="m"><i>P</i> = 50</span> bacteria, &nbsp;<span class="m"><span class="c2"><i>b</i></span> = 2</span> per period, &nbsp;<span class="m"><span class="c3"><i>n</i></span> = 180 ÷ 30 = 6</span> periods` },
        { say: `<b>Write the model.</b> Each period multiplies the amount by <i>b</i>, so after <i>n</i> periods the amount is <i>P</i> times <i>b</i> to the <i>n</i>.`, math: `<span class="m"><i>A</i> = <i>P</i> · <span class="c2"><i>b</i></span><sup class="c3"><i>n</i></sup></span>` },
        { say: `<b>Justify the power.</b> The associative law lets the <i>n</i> factors of <i>b</i> be grouped into one power, and any split of the periods adds exponents.`, math: `<span class="m"><i>P</i> · <i>b</i> · <i>b</i> ⋯ <i>b</i> = <i>P</i> · <i>b</i><sup><i>n</i></sup></span>, &nbsp;<span class="m"><i>b</i><sup>6</sup> = <i>b</i><sup>3</sup> · <i>b</i><sup>3</sup></span>` },
        { say: `<b>Compute the power.</b> Split it into powers you know.`, math: `<span class="m">2<sup>6</sup> = 2<sup>3</sup> · 2<sup>3</sup> = 8 · 8 = <span class="c1">64</span></span>` },
        { say: `<b>Substitute and answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>A</i> = 50 · 64 = 3,200</span> &nbsp;→ After 3 hours there are 3,200 bacteria.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the base and the exponent, combine with the laws, then compute. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can work with powers the formal way.",
      checks: [
        { hint: `Four rounds, each multiplying by 3: <span class="m">3 × 3 × 3 × 3</span>.`, parts: [{ label: "people", ans: 81 }] },
        { hint: `Same base, so add the exponents: <span class="m">2<sup>5 + 3</sup></span>.`, parts: [{ label: "GB", ans: 256 }] },
        { hint: `In <span class="m">(−2)<sup>4</sup></span> the base is −2. Four negative factors make a positive product.`, parts: [{ label: "(−2)⁴", ans: 16 }] },
        { hint: `A power of a power multiplies the exponents. Then add −4.`, parts: [{ label: "times the width", ans: 4 }] },
        { hint: `Count the half-lives: <span class="m">18 ÷ 6</span>. Then multiply 640 by 1/2 that many times.`, parts: [{ label: "MBq", ans: 80 }] }
      ]
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
    { wrong: `<span class="m">2<sup>3</sup> = 6</span>`, fix: `The exponent counts factors. It is not a multiplier: <span class="m">2<sup>3</sup> = 2 × 2 × 2 = 8</span>.` },
    { wrong: `<span class="m">−3<sup>2</sup> = 9</span>`, fix: `The exponent applies only to 3: <span class="m">−3<sup>2</sup> = −9</span>. Write <span class="m">(−3)<sup>2</sup> = 9</span> to square −3.` },
    { wrong: `<span class="m">2<sup>3</sup> · 2<sup>4</sup> = 4<sup>7</sup></span>`, fix: `Keep the base and add exponents: <span class="m">2<sup>7</sup> = 128</span>.` },
    { wrong: `<span class="m">(3 + 4)<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup></span>`, fix: `Powers do not distribute over addition: <span class="m">7<sup>2</sup> = 49</span>, but <span class="m">9 + 16 = 25</span>.` },
    { wrong: `Reading "doubles every 30 minutes for 3 hours" as <span class="m">2<sup>3</sup></span> because of the 3 hours.`, fix: `The exponent counts periods, not hours. 3 hours is <span class="m">180 ÷ 30 = 6</span> periods, so the factor is <span class="m">2<sup>6</sup> = 64</span>.` }
  ],
  practice: [
    { ctx: "Workplace", q: `In a phone tree, each person calls 3 people. Round 1 reaches 3 people, and each of them calls 3 more in round 2, and so on. How many people get a call in round 4? Evaluate <span class="m">3<sup>4</sup></span>.`, a: `<span class="m">3 × 3 × 3 × 3 = </span><b>81</b> people.` },
    { ctx: "Computing", q: `A server rack holds <span class="m">2<sup>3</sup></span> servers, and each server has <span class="m">2<sup>5</sup></span> GB of memory. How much memory is in the rack? Evaluate <span class="m">2<sup>5</sup> × 2<sup>3</sup></span>.`, a: `Add exponents: 5 + 3 = 8. <span class="m">2<sup>8</sup> = </span><b>256 GB</b>.` },
    { ctx: "Reports", q: `A report writes <span class="m">−2<sup>4</sup></span> where the author meant negative two to the fourth power. Compare <span class="m">(−2)<sup>4</sup></span> and <span class="m">−2<sup>4</sup></span>. What should the report say?`, a: `<span class="m">(−2)<sup>4</sup> = 16</span>, while <span class="m">−2<sup>4</sup> = −(2<sup>4</sup>) = −16</span>. The report needs the parentheses: <b>(−2)<sup>4</sup> = 16</b>.` },
    { ctx: "Printing", q: `A photo is enlarged to <span class="m">2<sup>3</sup></span> times its width, and the print is enlarged again by the same factor. Then it is shrunk to <span class="m">2<sup>−4</sup></span> of that width. How does the final width compare with the original? Evaluate <span class="m">(2<sup>3</sup>)<sup>2</sup> × 2<sup>−4</sup></span>.`, a: `<span class="m">(2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup></span>, then <span class="m">2<sup>6</sup> × 2<sup>−4</sup> = 2<sup>2</sup></span> = <b>4</b> times the original width.` },
    { ctx: "Health care", q: `Write an equation with a letter for the unknown, then solve: a dose of a medical isotope starts at 640 MBq and loses half its activity every 6 hours. What activity <i>A</i> is left after 18 hours?`, a: `<span class="m"><i>n</i> = 18 ÷ 6 = 3</span> half-lives, so <span class="m"><i>A</i> = 640 × (1/2)<sup>3</sup> = 640 ÷ 8 = </span><b>80 MBq</b>.` }
  ],
  origin: `Archimedes, in <i>The Sand Reckoner</i> (3rd century BCE), worked with powers of a myriad (10,000) to name very large numbers. The raised-number notation such as <span class="m"><i>a</i><sup>3</sup></span> was introduced by René Descartes in <i>La Géométrie</i> (1637).`
};
