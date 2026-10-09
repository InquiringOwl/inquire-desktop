window.ARITH = window.ARITH || {};

ARITH["factors"] = {
  title: "Factors, Multiples & Divisibility",
  short: "Which numbers divide evenly into which",
  grade: "Grade 4",
  hours: 5,
  voice: "plain",
  eyebrow: "Number theory · divisibility",
  hero: `<span class="m"><span class="c1"><i>n</i></span> = <span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span></span>`,
  lede: `A factor of a number divides it with no remainder. Each way to write n as a product is one rectangle of n tiles.`,
  plain: `<p>A <b>factor</b> of a number divides it with nothing left over. Say you have 24 cookies to pack in boxes of one size, with none left out. Boxes of 1, 2, 3, 4, 6, 8, 12 or 24 all work, so those are the factors of 24. Boxes of 5 leave 4 cookies over, so 5 is not a factor.</p>
<p>A <b>multiple</b> goes the other way. The multiples of 6 are 6, 12, 18, 24 and so on. Because 24 is on that list, 24 is a multiple of 6 and 6 is a factor of 24. Factors come in <b>factor pairs</b> that multiply to the number. For 24 the pairs are 1 × 24, 2 × 12, 3 × 8 and 4 × 6.</p>
<p><b>Divisibility rules</b> let you test a large number without dividing. A number is divisible by 2 if its last digit is even, and by 3 if its digits add to a multiple of 3. So 1,236 splits into 3 equal parts, because <span class="m">1 + 2 + 3 + 6 = 12</span>.</p>`,
  formal: `<p>For integers <i>a</i> and <i>n</i> with <span class="m"><i>a</i> ≠ 0</span>, we say <b><i>a</i> divides <i>n</i></b>, written <span class="m"><i>a</i> | <i>n</i></span>, if there is an integer <i>k</i> with <span class="m"><i>n</i> = <i>ak</i></span>. Then <i>a</i> is a <b>factor</b> (divisor) of <i>n</i> and <i>n</i> is a <b>multiple</b> of <i>a</i>. Equivalently, the division algorithm gives remainder <span class="m"><i>r</i> = 0</span>.</p>
<div class="display">Divisibility tests for a positive integer <i>n</i> in base ten:<br>2: last digit is even · 5: last digit is 0 or 5 · 10: last digit is 0<br>4: the number formed by the last two digits is divisible by 4<br>3 (or 9): the digit sum is divisible by 3 (or 9)<br>6: divisible by both 2 and 3</div>
<p>Divisibility is transitive: if <span class="m"><i>a</i> | <i>b</i></span> and <span class="m"><i>b</i> | <i>c</i></span> then <span class="m"><i>a</i> | <i>c</i></span>. If <span class="m"><i>a</i> | <i>m</i></span> and <span class="m"><i>a</i> | <i>n</i></span> then <span class="m"><i>a</i> | (<i>m</i> + <i>n</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "The number", desc: "The whole number you split. In the model it is the number of tiles in every rectangle." },
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "One side of a rectangle, shown under it. It divides n with nothing left over." },
    { c: "c3", sym: `<i>b</i>`, name: "Partner factor", desc: "The other side, shown above as ×b. It equals n ÷ a. Together a and b are a factor pair." },
    { c: "c4", sym: `<i>a</i> | <i>n</i>`, name: "Divides", desc: "Read \"a divides n\". It means n is a multiple of a. The checks beside the model test it for small numbers." }
  ],
  steps: { title: "How to list every factor of a number", items: [
    `Start with the pair <span class="m">1 × <i>n</i></span>.`,
    `Try each whole number 2, 3, 4, … in turn. Use divisibility rules to skip quickly.`,
    `Each time a number <i>a</i> divides <i>n</i>, record the pair <span class="m"><i>a</i> × (<i>n</i> ÷ <i>a</i>)</span>.`,
    `Stop once <span class="m"><i>a</i> × <i>a</i></span> is larger than <i>n</i>. Every pair has been found by then.`,
    `List all the numbers from the pairs in order.`
  ] },
  example: {
    prompt: `An event planner has 84 chairs to set out in equal rows. Each row must hold at least 6 and at most 15 chairs. What row sizes work, and how many rows does each give?`,
    lines: [
      { math: `<span class="m"><span class="c1">84</span> = <span class="c2">1</span> × <span class="c3">84</span> = <span class="c2">2</span> × <span class="c3">42</span> = <span class="c2">3</span> × <span class="c3">28</span></span>`, note: "Test 1, 2 and 3. 84 is even, and its digits add to 12, so 2 and 3 both work." },
      { math: `<span class="m"><span class="c1">84</span> = <span class="c2">4</span> × <span class="c3">21</span> = <span class="c2">6</span> × <span class="c3">14</span> = <span class="c2">7</span> × <span class="c3">12</span></span>`, note: "5 fails because 84 does not end in 0 or 5. 4, 6 and 7 work." },
      { math: `<span class="m">8 × 8 = 64, 9 × 9 = 81, 10 × 10 = 100 &gt; 84</span>`, note: "8 and 9 do not divide 84. Since 10 × 10 passes 84, all pairs are found." },
      { math: `<span class="m">1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84</span>`, note: "The 12 factors of 84." },
      { math: `<span class="m">6, 7, 12, 14</span>`, note: "The factors between 6 and 15." }
    ],
    answer: `Rows of 6, 7, 12 or 14 chairs work, giving 14, 12, 7 or 6 rows.`
  },
  why: `<p>Many everyday problems ask for equal groups with nothing left over: teams from a class, chairs in rows, tiles across a floor, products in cases. The factors of the total list every option at once, so you can choose the one that fits before you start. Divisibility rules let you check in your head whether a split will come out even.</p>
<p>Without factors, these problems turn into trial and error, and the leftover shows up at the end: the last row half empty, the last box half full. With them, you see in advance which sizes work and how many groups each gives.</p>
<p>Later math uses factors constantly. Simplifying a fraction means dividing the top and bottom by a common factor, and adding fractions needs a common multiple of the denominators. Primes, the greatest common factor, the least common multiple and factoring in algebra all build on this lesson.</p>`,
  careers: [
    { role: "Warehouse manager", use: "Picks case and pallet counts that divide a shipment evenly, such as 144 units as 12 cases of 12." },
    { role: "Teacher", use: "Uses the factors of a class size to form equal-sized groups for activities." },
    { role: "Event planner", use: "Chooses table and row layouts whose sizes divide the guest count." },
    { role: "Software developer", use: "Tests divisibility with the modulo operator to paginate lists, stripe table rows, or batch jobs." },
    { role: "Graphic designer", use: "Picks column counts for a layout grid that divide the page width in pixels evenly." }
  ],
  life: [
    "Splitting a bill or a bag of snacks evenly among friends",
    "Arranging photos in a grid with no gaps",
    "Checking whether a year is a leap year",
    "Buying packs so there are no leftovers",
    "Planning equal teams for a game"
  ],
  fields: [
    { name: "Computer science", use: "Divisibility tests drive hashing, scheduling and memory alignment." },
    { name: "Music", use: "Time signatures divide a measure into equal beats, such as 12/8 into four groups of 3." },
    { name: "Manufacturing", use: "Batch and packaging sizes are chosen to divide production runs evenly." }
  ],
  layers: {
    nudge: "Not yet. Check for a remainder, and for the partner in each pair.",
    concept: {
      heading: "What are factors, multiples and divisibility?",
      lede: `Factors answer one question: in which ways can a whole number split into equal groups with nothing left over? You use them to share, pack and arrange things evenly.`,
      question: { text: "Does it split evenly?", sub: `Each full rectangle in the model above is one way to split the tiles into equal rows. Watch the three ideas below happen there, then try them yourself.`,
        figure: { sym: `<i>n</i>`, value: "36", cap: "tiles in every rectangle", echo: "n" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["chair", "chairs", "row", "rows", "tile", "tiles", "six", "sixes", "unit", "units", "case", "cases", "student", "students", "group", "groups", "guest", "guests", "table", "tables", "result", "results", "page", "pages", "pixel", "pixels", "column", "columns", "tablet", "tablets"],
      walk: { title: "Factor it together: 84 chairs in equal rows",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You are setting out 84 chairs in equal rows for a talk. Each row must hold 6 to 15 chairs. Which row sizes leave no chair over?`,
        demo: { kind: "array", rows: 7, cols: 12, unit: "chair", alt: "Rows of 12 chairs fill one at a time, with running totals 12, 24, 36 and on to 84, which is 7 full rows of 12." },
        lines: [
          { math: `84 chairs, 6 to 15 a row`, note: `Each row size you try is a test. It passes when every row is full.`, frame: 0 },
          { math: `12, 24, 36, 48, …`, note: `Try rows of 12. Count by 12s as each row fills.`, frame: 4 },
          { math: `12 × 7 = 84`, note: `The count lands on 84 after 7 rows. Nothing is left over, so 12 is a factor of 84.`, frame: 8 },
          { math: `7 × 12 = 84`, note: `Turn the picture on its side. Rows of 7 chairs also work, in 12 rows. One test gave you two factors: a factor pair.`, frame: 8 },
          { math: `8 × 10 = 80, 4 left over`, note: `84 splits by 2 and by 4, so 8 looks safe. It fails. Ten rows of 8 leave 4 chairs with no row.`, frame: 8 },
          { math: `6, 7, 12, 14`, note: `Test every size from 6 to 15 the same way. These four pass, giving 14, 12, 7 or 6 full rows.`, frame: 8 }
        ],
        predict: [null,
          { ask: `Rows of 12 make 12, 24, 36 chairs after three rows. How many chairs after four rows?`, parts: [{ label: "after 4 rows", ans: 48 }], hint: `Add one more row of 12 to 36.` },
          { ask: `Keep counting by 12s. How many full rows use all 84 chairs?`, parts: [{ label: "full rows", ans: 7 }], hint: `48, 60, 72, 84. Count every row from the start.` },
          { ask: `Rows of 12 work. Which other row size do you get with no extra test?`, choices: [
            { t: "7, the number of rows", ok: true },
            { t: "6, half of 12", why: "6 does work, but this test does not show it. You need to test 6 on its own." },
            { t: "24, double 12", why: "Rows of 24 fill 3 rows and leave 12 chairs over. Double a factor is not always a factor." }
          ], hint: `7 rows of 12 is the same chairs as 12 rows of 7.` },
          { ask: `84 splits into rows of 2 and into rows of 4. A friend says rows of 8 must work too. Do they?`, choices: [
            { t: "No. 10 rows use 80 chairs and 4 are left", ok: true },
            { t: "Yes, because 2 × 4 = 8", why: "Every row of 4 already holds two rows of 2, so the tests overlap. Count it: 10 rows of 8 is 80, and 84 − 80 = 4 chairs over." },
            { t: "Yes, because 8 and 84 are both even", why: "Being even only proves rows of 2 work. Rows of 8 still leave 4 chairs over." }
          ], hint: `Count by 8s: 8, 16, 24, … 80, 88. Does the count land on 84?` },
          { ask: `Rows of 6 and 7 pass, and so do their partners. How many row sizes from 6 to 15 work in all?`, parts: [{ label: "row sizes", ans: 4 }], hint: `6 pairs with 14, and 7 pairs with 12. Are 12 and 14 between 6 and 15?` }],
        answer: `Rows of <span class="m">6, 7, 12</span> or <span class="m">14</span> chairs work, giving 14, 12, 7 or 6 full rows.` },
      ideas: [
        { c: "c2", title: "A factor leaves nothing over", term: "factor", text: `12 tiles make 3 full rows of 4, so 4 is a factor of 12. Rows of 5 leave 2 tiles over.`,
          demo: { kind: "array", rows: 3, cols: 4, unit: "tile", alt: "Twelve tiles fill three rows of four, with running totals 4, 8 and 12." }, try: { label: "Show 12 tiles", lab: "n:12" } },
        { c: "c3", title: "Factors come in pairs", term: "factor pair", text: `3 rows of 8 is also 8 rows of 3. Find one factor of 24 and its partner comes with it.`,
          demo: { kind: "array", rows: 3, cols: 8, unit: "tile", alt: "Twenty-four tiles fill three rows of eight, with running totals 8, 16 and 24." }, try: { label: "Step through the pairs of 24", lab: "n:24,nextpair" } },
        { c: "c1", title: "Multiples count up by it", term: "multiple", text: `Count by 6s: 6, 12, 18, 24. Each is a multiple of 6, and 6 is a factor of each one.`,
          demo: { kind: "range", from: 6, to: 24, step: 6, unit: "six", alt: "The numbers 6, 12, 18 and 24 each get a counting number, 1 to 4: four sixes." }, try: { label: "Show 6 and its multiples", lab: "n:6" } }
      ],
      timelineTitle: "People have split things evenly for thousands of years",
      timelineLead: `Traders and officials had to share goods and payments in equal parts. They asked the same question each rectangle in the model answers.`,
      timeline: [
        { when: "3rd millennium BCE", what: `The Sumerians count in base 60, and pass it to the Babylonians. 60 has twelve factors, so it splits many ways. Set the model to 60 and count them.` },
        { when: "About 300 BCE", what: `Euclid's <i>Elements</i>, Book VII, says one number “measures” another when it divides it exactly. A prime is “measured by a unit alone”: one rectangle in the model.` },
        { when: "About 950", what: `The Indian astronomer Aryabhata II writes the earliest surviving work that checks sums by casting out nines, a digit-sum test. The model runs the same digit-sum test for 9.` },
        { when: "About 1020", what: `The Persian scholar Ibn Sina (Avicenna) sets out the full “Hindu method” of checking calculations this way.` }
      ],
      history: `<p><b>The problem.</b> Traders and officials had to split goods, land and payments into equal shares, and a unit that splits many ways makes that easier. From the 3rd millennium BCE the Sumerians, and after them the Babylonians, counted in base 60, a number with twelve factors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 and 60.</p>
<p><b>The solution.</b> Around 300 BCE, Book VII of Euclid's <i>Elements</i> set out the basic theory of whole numbers. It defines even, odd and prime numbers, says one number “measures” another when it divides it exactly, gives the method still taught for the greatest common divisor (the Euclidean algorithm), and treats least common multiples. Quick tests based on digit sums came later. A form of casting out nines was described by the Roman bishop Hippolytus (170–235). Around 950 the Indian astronomer Aryabhata II wrote the earliest surviving work that uses it to check arithmetic, about 1020 Ibn Sina gave the full method, and Fibonacci described it in his <i>Liber Abaci</i>.</p>
<p><b>What it changed.</b> Factors turned “can this be shared evenly?” into a question you can answer before you start. Base 60 still gives us 60 minutes in an hour and 360 degrees in a circle, and the same divisibility ideas now pack shipments, lay out web pages and check numbers in software.</p>`,
      sources: [
        { title: "Sexagesimal (Wikipedia)", url: "https://en.wikipedia.org/wiki/Sexagesimal" },
        { title: "Euclid's Elements (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclid%27s_Elements" },
        { title: "Euclid's Elements, Book VII (David E. Joyce, Clark University)", url: "https://mathcs.clarku.edu/~djoyce/elements/bookVII/bookVII.html" },
        { title: "Casting out nines (Wikipedia)", url: "https://en.wikipedia.org/wiki/Casting_out_nines" }
      ],
      matters: { title: "Why factors come up so often", text: `<p>Any time you share, pack or line things up, you ask the same question: <b>will it come out even?</b> Factors answer it before you start.</p><ul class="why-chips"><li><b>Sharing</b> a bill or a bag</li><li><b>Packing</b> boxes and cases</li><li><b>Arranging</b> rows, teams and grids</li></ul><p>Later math leans on them too. You <b>simplify fractions</b> with a common factor and add them with a <b>common multiple</b>.</p>` },
      stakes: { title: "Where factors go wrong", lead: `Most slips come from mixing up the two words, or from trusting a test that does not fit.`, items: [
        { role: "Rows of 8", text: `84 splits by 2 and by 4, but rows of 8 leave 4 chairs over. Tests for 2 and 4 do not add up to a test for 8.` },
        { role: "Factor or multiple", text: `The factors of 6 are 1, 2, 3 and 6. The list 6, 12, 18 is its multiples.` },
        { role: "Missing partners", text: `Stop at 7 when you list the factors of 84 and you lose 12, 14, 21, 28, 42 and 84.` },
        { role: "The wrong test", text: `Digit sums test 3 and 9. 128 has digit sum 11, but it ends in 8, so 2 divides it.` }
      ], try: { label: "Run the tests on 84", lab: "n:84" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Warehouse manager", figure: "12 cases of 12", scene: `A shipment of 144 units must go in full cases. Cases of 12 give <span class="m">144 ÷ 12 = 12</span> cases, and cases of 16 give 9. Cases of 10 leave 4 units over, since <span class="m">144 = 14 × 10 + 4</span>.`, takeaway: "A case size that is a factor means no broken cases." },
        { role: "Teacher", figure: "7 groups of 4", try: { label: "Show a class of 28", lab: "n:28" }, scene: `A class of 28 makes <span class="m">28 = 4 × 7</span>, so 7 groups of 4 work. Groups of 5 leave 3 students out, since <span class="m">5 × 5 = 25</span>.`, takeaway: "Knowing the factors avoids a group that is left short." },
        { role: "Event planner", figure: "15 tables of 10", scene: `150 guests: 150 ends in 0, so tables of 10 work, giving 15 tables. Tables of 8 give 18 full tables and 6 guests left over, since <span class="m">18 × 8 = 144</span>.`, takeaway: "A quick divisibility test decides the table order." },
        { role: "Software developer", figure: "5 on the last page", try: { label: "Test 95 in the model", lab: "n:95" }, scene: `95 search results shown 10 per page: <span class="m">95 = 9 × 10 + 5</span>, so 9 full pages and a 10th page with 5 results.`, takeaway: "When the page size is not a factor, the last page is short, and the code must handle it." },
        { role: "Graphic designer", figure: "12 columns of 80 px", scene: `A 960-pixel layout splits into 12 columns of 80 pixels, or 16 columns of 60. Seven columns would be 137.14… pixels each, because 7 does not divide 960.`, takeaway: "Grid sizes that are factors of the width give clean, whole-pixel columns." }
      ]
    },
    build: {
      lede: `To list every factor, test divisors in order from 1, record each one with its partner, and stop when the divisor times itself passes the number.`,
      task: { text: "List every factor, in pairs.", sub: `The same five moves work for any whole number, from 12 tiles to 84 chairs. Try each one in the model above as you go.`,
        figure: { sym: `factors`, value: "9", cap: "in the model", echo: "count" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above lays out <span class="c1"><i>n</i></span> tiles in every full rectangle it can. Each rectangle's sides are a factor pair: the <span class="c2">first factor</span> is written under it, the <span class="c3">partner</span> above it. A side that would leave a ragged last row is not a factor, so it never gets a rectangle. Beside the model, each check shows whether a small number <span class="c4">divides</span> <i>n</i>.</p>`,
      keyTry: [{ label: "Set n to 60", lab: "n:60" }, { label: "Press Next pair", lab: "nextpair" }, null, { label: "Run the tests on 72", lab: "n:72" }],
      objects: ["tile", "tiles", "rectangle", "rectangles", "dollar", "dollars", "friend", "friends", "photo", "photos", "grid", "grids", "year", "years", "pack", "packs", "bag", "bags", "hot dog", "hot dogs", "bun", "buns", "player", "players", "team", "teams", "chair", "chairs", "row", "rows"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Every number is 1 times itself, so 1 and <i>n</i> are always factors. Starting there means the smallest and largest are never forgotten.`,
        `Testing in order means no size gets skipped. Divisibility rules are shortcuts: 84 does not end in 0 or 5, so 5 is out without dividing.`,
        `Factors come in pairs. If <i>a</i> divides <i>n</i>, then <span class="m"><i>n</i> ÷ <i>a</i></span> does too, so one test that works gives two factors: 4 divides 84, and so does 21.`,
        `In each pair, one factor is the small side. Once <span class="m"><i>a</i> × <i>a</i></span> passes <i>n</i>, a new pair would need two sides both bigger than <i>a</i>, and their product would be too big. For 84 the search ends after 9, since <span class="m">10 × 10 = 100</span>.`,
        `Writing the small factors in order and their partners in reverse gives a sorted list. With a sorted list you can count the factors and see at once whether a number is prime.`
      ],
      stepTry: [{ label: "Set n to 30", lab: "n:30" }, null, { label: "Pair up 48", lab: "n:48,nextpair" }, null, null],
      stepGoal: [null,
        { key: "n", eq: 45, text: `Set <i>n</i> to 45 yourself. Test 2, 3, 4 and 5 in order, and read which checks the model ticks.`, after: `45 is odd, so 2 and 4 fail. Its digits add to 9, so 3 works: <span class="m">45 = 3 × 15</span>. It ends in 5, so 5 works: <span class="m">45 = 5 × 9</span>.`, notYet: `Not yet. Move the slider to 45.` },
        null,
        { key: "n", eq: 100, text: `Make the model show 100 tiles. Find the square rectangle, where the search can stop.`, after: `<span class="m">10 × 10 = 100</span>. Any pair after it is a pair you already have, turned around.`, notYet: `Not yet. Move the slider all the way to 100.` },
        { key: "n", eq: 97, text: `Find the largest number in the model that makes only one rectangle.`, after: `<span class="m">97 = 1 × 97</span>. Two factors, one rectangle: 97 is a prime number.`, notYet: `Not yet. Look near the top of the slider. 99 = 9 × 11 and 98 = 2 × 49 make more than one rectangle.` }],
      matters: { title: "Why a Method Beats Guessing", text: `<p>Guessing finds some factors. It rarely finds <b>all of them</b>, and you never know when to stop looking.</p><ul class="why-chips"><li><b>Test in order</b>, so none is skipped</li><li><b>Pair them</b>, so each test counts twice</li><li><b>Stop at the square</b>, so you know you are done</li></ul><p>With the method, a list of factors is <b>complete</b>, and anyone can check it.</p>` },
      bridge: `<p>The 84 chairs show the pattern behind most equal-sharing tasks: find the factor pairs of the total, then keep the pairs that meet your limits. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Splitting a bill evenly among friends", check: { q: `A $96 dinner bill is split evenly among 8 friends, in whole dollars. How much does each friend pay?`, parts: [{ label: "dollars each", ans: 12 }], hint: `Give everyone $10 first, then share what is left.` }, figure: "8 friends",
          demo: { kind: "array", rows: 8, cols: 12, unit: "dollar", alt: "Eight rows of 12 dollars fill one at a time, with running totals 12, 24 and on to 96." },
          lines: [{ math: `8 × 10 = 80`, note: "Ten dollars each covers $80." }, { math: `96 − 80 = 16`, note: "That leaves $16 to share." }, { math: `16 ÷ 8 = 2`, note: "Each friend adds $2 more." }, { math: `10 + 2 = 12`, note: "Each pays $12. Check: 8 × 12 = 96." }],
          predict: [null, { ask: `After $10 each, how much of the $96 is still unpaid?`, parts: [{ label: "dollars left", ans: 16 }], hint: `Take 80 from 96.` }],
          try: { label: "Show the factors of 96", lab: "n:96" }, link: `8 is a factor of 96, so the bill splits with no cents left over. It is the same test as rows of 12 for the 84 chairs on the Concept tab.` },
        { task: "Arranging photos in a grid with no gaps", check: { q: `You have 24 photos for a wall grid with no gaps. How many different grids can you make? Count 4 × 6 and 6 × 4 as one grid.`, parts: [{ label: "grids", ans: 4 }], hint: `List the factor pairs of 24, starting from 1 × 24.` }, figure: "4 grids",
          demo: { kind: "array", rows: 4, cols: 6, unit: "photo", alt: "Four rows of 6 photos fill one at a time, with running totals 6, 12, 18 and 24." },
          lines: [{ math: `1 × 24, 2 × 12`, note: "Start with 1 × 24, then test 2." }, { math: `3 × 8, 4 × 6`, note: "3 and 4 work too." }, { math: `5 × 5 = 25`, note: "25 passes 24, so the search stops here." }, { math: `4 grids`, note: "Four pairs make four grids." }],
          predict: [null, { ask: `After 1 × 24 and 2 × 12, which row size works next?`, parts: [{ label: "next size", ans: 3 }], hint: `Does 3 divide 24? Its digits add to 6.` }],
          try: { label: "Show 24 photos", lab: "n:24" }, link: `The model shows the same 4 rectangles for 24. Step 4 tells you when to stop looking.` },
        { task: "Checking whether a year is a leap year", check: { q: `A year is a leap year when 4 divides it. (Century years such as 2100 have an extra rule.) Which is the first leap year after 2026?`, parts: [{ label: "year", ans: 2028 }], hint: `Test the last two digits of 2027, then 2028.` }, figure: "every 4 years",
          demo: { kind: "line", from: 2020, to: 2032, start: 2020, jumps: [4, 4], unit: "year", alt: "A dot starts at 2020 and hops 4 years to 2024, then 4 more to 2028." },
          lines: [{ math: `100 = 4 × 25`, note: "4 divides every hundred, so only the last two digits matter." }, { math: `27 = 4 × 6 + 3`, note: "2027 leaves 3 over. It is not a leap year." }, { math: `28 = 4 × 7`, note: "2028 leaves nothing over." }, { math: `2028`, note: "The first leap year after 2026 is 2028." }],
          predict: [null, { ask: `What is left over when you divide 27 by 4?`, parts: [{ label: "left over", ans: 3 }], hint: `4 × 6 = 24.` }],
          try: { label: "Test 28 in the model", lab: "n:28" }, link: `The last-two-digits test for 4 is a divisibility rule from step 2. It turns a four-digit question into a two-digit one.` },
        { task: "Buying packs so there are no leftovers", check: { q: `Hot dogs come 8 to a pack and buns 10 to a bag. What is the fewest packs and bags so every hot dog gets a bun, with none left over?`, parts: [{ label: "packs", ans: 5 }, { label: "bags", ans: 4 }], hint: `List multiples of 8 and of 10. Find the first number on both lists.` }, figure: "40 of each",
          demo: { kind: "range", from: 8, to: 40, step: 8, unit: "pack", alt: "The hot dog counts 8, 16, 24, 32 and 40 each get a counting number, 1 to 5: five packs." },
          lines: [{ math: `8, 16, 24, 32, 40`, note: "Multiples of 8: hot dogs after 1, 2, 3 … packs." }, { math: `10, 20, 30, 40`, note: "Multiples of 10: buns after 1, 2, 3 … bags." }, { math: `40 = 5 × 8 = 4 × 10`, note: "40 is the first number on both lists: 5 packs and 4 bags." }],
          predict: [null, { ask: `Count by 10s. Which is the first count that is also on the list of 8s?`, parts: [{ label: "first match", ans: 40 }], hint: `10, 20, 30, 40. Which of these is 8, 16, 24, 32 or 40?` }],
          try: { label: "Show 8 and its multiples", lab: "n:8" }, link: `This time you count up by multiples, the way the 84 chairs filled by 12s on the Concept tab.` },
        { task: "Planning equal teams for a game", check: { q: `42 players split into equal teams of 5 to 8 players. Which two team sizes work?`, parts: [{ label: "smaller size", ans: 6 }, { label: "larger size", ans: 7 }], hint: `Test 5, 6, 7 and 8 one at a time.` }, figure: "teams of 5 to 8",
          demo: { kind: "array", rows: 7, cols: 6, unit: "player", alt: "Seven teams of 6 players fill one at a time, with running totals 6, 12 and on to 42." },
          lines: [{ math: `42 ÷ 5 = 8 R 2`, note: "42 does not end in 0 or 5, so teams of 5 fail." }, { math: `42 = 6 × 7`, note: "42 is even and its digits add to 6, so 6 works: 7 teams of 6." }, { math: `42 = 7 × 6`, note: "The partner, 7, is also in range: 6 teams of 7." }, { math: `42 ÷ 8 = 5 R 2`, note: "Teams of 8 leave 2 players out." }],
          predict: [null, { ask: `42 is even and its digits add to 6. How many teams of 6 is that?`, parts: [{ label: "teams", ans: 7 }], hint: `6 × 7 = ?` }],
          try: { label: "Show 42 players", lab: "n:42" }, link: `It is the 84 chairs again: test each size in range, and read the number of groups from the partner (step 3).` }
      ]
    },
    formal: {
      question: { text: "When does one integer divide another?", sub: `You can split a number into equal groups and list every way to do it. Here are the words a textbook uses for the same ideas, and how to write a divisibility problem out in full.`,
        figure: { sym: `<i>d</i>(<i>n</i>)`, value: "9", cap: "the number of positive divisors", echo: "count" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>`, term: "Factor (divisor)", def: `A nonzero integer <i>a</i> is a factor of <i>n</i> when <span class="m"><i>n</i> = <i>ak</i></span> for some integer <i>k</i>.`, was: "a row size that leaves nothing over" },
        { c: "c1", sym: `<i>n</i> = <i>ak</i>`, term: "Multiple", def: `<i>n</i> is a multiple of <i>a</i> when <span class="m"><i>n</i> = <i>ak</i></span> for some integer <i>k</i>. The positive multiples of <i>a</i> are <span class="m"><i>a</i>, 2<i>a</i>, 3<i>a</i>, …</span>`, was: "counting up by a number" },
        { c: "c4", sym: `<i>a</i> | <i>n</i>`, term: "Divides", def: `The statement “<i>a</i> divides <i>n</i>”. It is true or false, never a number: <span class="m">3 | 12</span> is true and <span class="m">5 | 12</span> is false.`, was: "splits evenly, a tick beside the model" },
        { c: "c3", sym: `(<i>a</i>, <i>n</i>/<i>a</i>)`, term: "Factor pair", def: `Two positive integers whose product is <i>n</i>. In every pair the smaller one is at most <span class="m">√<i>n</i></span>, which is why the search can stop there.`, was: "the two sides of a rectangle" },
        { c: "c4", sym: `3 | <i>n</i> ⇔ 3 | <i>s</i>(<i>n</i>)`, term: "Divisibility test", def: `A rule decided from the digits alone. Tests for 2, 5 and 10 read the last digit. Tests for 3 and 9 use the digit sum <i>s</i>(<i>n</i>), because 10 leaves remainder 1 when divided by 3 or by 9.`, was: "the quick checks beside the model" },
        { c: "c1", sym: `<i>d</i>(<i>n</i>)`, term: "Number of divisors", def: `The count of positive divisors of <i>n</i>. For example <span class="m"><i>d</i>(36) = 9</span>. <i>d</i>(<i>n</i>) is odd exactly when <i>n</i> is a perfect square.`, was: "how many factors the model lists" },
        { c: "c2", sym: `<i>p</i>`, term: "Prime and composite", def: `An integer <span class="m"><i>p</i> &gt; 1</span> is prime when its only positive divisors are 1 and <i>p</i>. An integer greater than 1 that is not prime is composite. 1 is neither.`, was: "a number with only one rectangle" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>Two symbols that look alike say very different things. <b><span class="m">3 | 12</span> is a statement</b>: “3 divides 12”, which is true. <b><span class="m">3/12</span> is a number</b>: one quarter.</p><ul class="why-chips"><li><b>12 is divisible by 3</b>: true</li><li><b>12 divides 3</b>: false</li><li><b>3 divides 12</b>: true</li></ul><p>Swap the order of the words and a true sentence becomes false. Exact words let you write an answer <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here mix up factors and multiples, combine tests that overlap, or stop the search too early.`,
      setupIntro: `<p>The 84 chairs from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a divisibility problem", items: [
        { say: `<b>Name the quantities.</b> Give the total, the group size and the number of groups each a letter.`, math: `<span class="m"><span class="c1"><i>n</i></span> = 84</span> chairs, &nbsp;<span class="c2"><i>a</i></span> = chairs per row, &nbsp;<span class="c3"><i>b</i></span> = number of rows` },
        { say: `<b>Write the condition.</b> Every row is full exactly when <i>a</i> divides <i>n</i>.`, math: `<span class="m"><span class="c2"><i>a</i></span> | <span class="c1"><i>n</i></span> ⇔ <span class="c1"><i>n</i></span> = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span></span> for some whole number <span class="m"><span class="c3"><i>b</i></span></span>` },
        { say: `<b>Add the constraints.</b> Write the limits on the group size next to the condition.`, math: `<span class="m">6 ≤ <i>a</i> ≤ 15</span> &nbsp;and&nbsp; <span class="m"><i>a</i> | 84</span>` },
        { say: `<b>Justify the test.</b> Since 10 = 9 + 1, a number differs from its digit sum by a multiple of 9, so 3 and 9 can be tested on the digit sum.`, math: `<span class="m">84 = 8 · 10 + 4 = 8 · 9 + (8 + 4)</span>, and <span class="m">3 | 12</span>, so <span class="m">3 | 84</span>` },
        { say: `<b>Compute and answer.</b> Keep the factors inside the limits, and state the result as a sentence with units.`, math: `<span class="m">{<i>a</i> : <i>a</i> | 84, 6 ≤ <i>a</i> ≤ 15} = {6, 7, 12, 14}</span> &nbsp;→ Rows of 6, 7, 12 or 14 chairs, giving 14, 12, 7 or 6 rows.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the number, test divisors in order, and pair each one with its partner. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can test divisibility the formal way.",
      checks: [
        { hint: `Test 1, 2, 3, 4 … and stop once <span class="m"><i>a</i> × <i>a</i></span> passes 18. Each success gives a pair.`, parts: [{ label: "team sizes", ans: 6 }] },
        { hint: `The doses fall on multiples of 7: <span class="m">7 × 1, 7 × 2, …</span>`, parts: [{ label: "fifth dose, day", ans: 35 }] },
        { hint: `The digit sum is <span class="m">2 + 3 + 4 = 9</span>. Then divide 234 by 3 and by 9.`, parts: [{ label: "bags of 3", ans: 78 }, { label: "bags of 9", ans: 26 }] },
        { hint: `For 4, test the last two digits. For 6, test 2 and 3. For 9, use the digit sum. Then divide 7,416 by 9.`, parts: [{ label: "cases of 9", ans: 824 }] },
        { hint: `Rows times chairs per row is the total: <span class="m">12<i>r</i> = 96</span>.`, parts: [{ label: "rows r", ans: 8 }] }
      ]
    }
  },
  prereqWhy: {
    "division": "A factor is a divisor that leaves remainder 0, so you must be able to divide and read the remainder."
  },
  unlocksWhy: {
    "primes": "A prime is defined by having exactly two factors, so listing factors is how you recognize one.",
    "fractions": "Simplifying and building equivalent fractions means dividing or multiplying top and bottom by a common factor."
  },
  beyond: [
    { field: "Number theory", why: "Divisibility is the central relation that the whole subject studies." },
    { field: "Algebra I", why: "Factoring polynomials follows the same idea of writing something as a product." },
    { field: "Discrete mathematics", why: "Divisibility is a standard example of a partial order and appears in counting problems." }
  ],
  mistakes: [
    { wrong: `"84 is divisible by 2 and by 4, so it is divisible by 8."`, fix: `Tests combine only for factors with no common factor, like 2 and 3 for 6. Here <span class="m">8 × 10 = 80</span> leaves 4 over, so 8 is not a factor of 84.` },
    { wrong: `Confusing factors and multiples: "the factors of 6 are 6, 12, 18"`, fix: `Factors of a positive number are at most the number: 1, 2, 3, 6. The list 6, 12, 18 is multiples.` },
    { wrong: `Stopping at the small factors: "the factors of 36 are 1, 2, 3, 4, 6"`, fix: `Each small factor brings its partner: <span class="m">36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6</span>. The full list is 1, 2, 3, 4, 6, 9, 12, 18, 36.` },
    { wrong: `Forgetting 1 and the number itself as factors`, fix: `Every whole number <span class="m"><i>n</i> &gt; 1</span> has at least the factors 1 and <i>n</i>.` },
    { wrong: `"The digits of 128 add to 11, so 128 is not divisible by 2"`, fix: `The digit-sum test is for 3 and 9. For 2, check the last digit. 128 ends in 8, so it is even.` }
  ],
  practice: [
    { ctx: "Coaching", q: `A coach has 18 players and wants equal teams with nobody left out. List all the factors of 18. How many team sizes are possible?`, a: `1, 2, 3, 6, 9, 18: <b>6</b> team sizes. Pairs: 1 × 18, 2 × 9, 3 × 6.` },
    { ctx: "Health care", q: `A patient takes a weekly medication on day 7 of a treatment plan and every 7 days after. On which days are the first five doses taken?`, a: `The first five multiples of 7: days 7, 14, 21, 28 and <b>35</b>.` },
    { ctx: "Bakery", q: `A bakery has 234 rolls. Can they all go into bags of 3 with none left over? Into bags of 9? How many bags would each take?`, a: `Yes to both. The digit sum is 2 + 3 + 4 = 9. 234 ÷ 3 = <b>78</b> bags of 3, and 234 ÷ 9 = <b>26</b> bags of 9.` },
    { ctx: "Warehouse", q: `Without dividing, decide whether 7,416 items can be shipped in full cases of 4, of 6 and of 9. Then find how many cases of 9 that takes.`, a: `All three. The last two digits, 16, are divisible by 4. It is even with digit sum 18, so it is divisible by 6 and by 9. 7,416 ÷ 9 = <b>824</b> cases.` },
    { ctx: "Events", q: `Write an equation with a letter for the unknown, then solve: 96 chairs are set out in <i>r</i> full rows of 12. How many rows are there?`, a: `<span class="m">12<i>r</i> = 96</span>, so <span class="m"><i>r</i> = 96 ÷ 12 = </span><b>8</b> rows. 12 is a factor of 96, so every row is full.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) treats divisibility in Book VII, where one number "measures" another if it divides it exactly.`
};
