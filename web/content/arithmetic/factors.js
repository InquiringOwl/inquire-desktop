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
<p>A <b>multiple</b> goes the other way: the multiples of 6 are 6, 12, 18, 24 and so on. Because 24 is on that list, 24 is a multiple of 6 and 6 is a factor of 24. Factors come in <b>factor pairs</b> that multiply to the number. For 24 the pairs are 1 × 24, 2 × 12, 3 × 8 and 4 × 6.</p>
<p><b>Divisibility rules</b> let you test a large number without dividing. A number is divisible by 2 if its last digit is even, and by 3 if its digits add to a multiple of 3. So 1,236 splits into 3 equal parts, because <span class="m">1 + 2 + 3 + 6 = 12</span>.</p>`,
  formal: `<p>For integers <i>a</i> and <i>n</i> with <span class="m"><i>a</i> ≠ 0</span>, we say <b><i>a</i> divides <i>n</i></b>, written <span class="m"><i>a</i> | <i>n</i></span>, if there is an integer <i>k</i> with <span class="m"><i>n</i> = <i>ak</i></span>. Then <i>a</i> is a <b>factor</b> (divisor) of <i>n</i> and <i>n</i> is a <b>multiple</b> of <i>a</i>. Equivalently, the division algorithm gives remainder <span class="m"><i>r</i> = 0</span>.</p>
<div class="display">Divisibility tests for a positive integer <i>n</i> in base ten:<br>2: last digit is even · 5: last digit is 0 or 5 · 10: last digit is 0<br>4: the number formed by the last two digits is divisible by 4<br>3 (or 9): the digit sum is divisible by 3 (or 9)<br>6: divisible by both 2 and 3</div>
<p>Divisibility is transitive: if <span class="m"><i>a</i> | <i>b</i></span> and <span class="m"><i>b</i> | <i>c</i></span> then <span class="m"><i>a</i> | <i>c</i></span>. If <span class="m"><i>a</i> | <i>m</i></span> and <span class="m"><i>a</i> | <i>n</i></span> then <span class="m"><i>a</i> | (<i>m</i> + <i>n</i>)</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "The number", desc: "The whole number being factored. In the lab it is the area of every rectangle." },
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "One side of the rectangle. It divides n with no remainder." },
    { c: "c3", sym: `<i>b</i>`, name: "Partner factor", desc: "The other side, equal to n ÷ a. Together a and b form a factor pair." },
    { c: "c4", sym: `<i>a</i> | <i>n</i>`, name: "Divides", desc: "Read \"a divides n\". It means n is a multiple of a." }
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
    concept: {
      heading: "What are factors, multiples and divisibility?",
      lede: `Factors answer one question: in which ways can a whole number be split into equal groups with nothing left over? You use them to share, pack and arrange things evenly.`,
      history: `<p><b>The problem.</b> Early traders and officials constantly had to split goods, land and payments into equal shares, and a unit that splits many ways makes that easier. From the 3rd millennium BCE, Sumerian and then Babylonian scribes counted in base 60, a number with twelve factors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 and 60.</p>
<p><b>The solution.</b> Around 300 BCE, Book VII of Euclid's <i>Elements</i> organized what Greek mathematicians knew about whole numbers. It starts from definitions of even, odd and prime numbers, gives the method still taught for finding the greatest common divisor of two numbers (the Euclidean algorithm), and treats least common multiples. Quick tests based on digit sums were recorded later: the Indian astronomer Aryabhata II, around 950 CE, wrote the earliest surviving account of "casting out nines" to check arithmetic, and Fibonacci's <i>Liber Abaci</i> passed the method on to European merchants.</p>
<p><b>What it changed.</b> Factors turned "can this be shared evenly?" into a question you can answer before you start. Base 60 still gives us 60 minutes in an hour and 360 degrees in a circle, and the same divisibility ideas now pack shipments, lay out web pages and check numbers in software.</p>`,
      sources: [
        { title: "Sexagesimal (Wikipedia)", url: "https://en.wikipedia.org/wiki/Sexagesimal" },
        { title: "Euclid's Elements (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclid%27s_Elements" },
        { title: "Casting out nines (Wikipedia)", url: "https://en.wikipedia.org/wiki/Casting_out_nines" }
      ],
      examples: [
        { role: "Warehouse manager", scene: `A shipment of 144 units must go in full cases. Cases of 12 give <span class="m">144 ÷ 12 = 12</span> cases, and cases of 16 give 9. Cases of 10 would leave 4 units over, since <span class="m">144 = 14 × 10 + 4</span>.`, takeaway: "Choosing a case size that is a factor means no broken cases." },
        { role: "Teacher", scene: `A class of 28 makes <span class="m">28 = 4 × 7</span>, so 7 groups of 4 work. Groups of 5 leave 3 students out, since <span class="m">5 × 5 = 25</span>.`, takeaway: "Knowing the factors avoids a group that is left short." },
        { role: "Event planner", scene: `150 guests: 150 ends in 0, so tables of 10 work, giving 15 tables. Tables of 8 give 18 full tables and 6 guests left over, since <span class="m">18 × 8 = 144</span>.`, takeaway: "A quick divisibility test decides the table order." },
        { role: "Software developer", scene: `95 search results shown 10 per page: <span class="m">95 = 9 × 10 + 5</span>, so 9 full pages and a 10th page with 5 results.`, takeaway: "When the page size is not a factor, the last page is short, and the code must handle it." },
        { role: "Graphic designer", scene: `A 960-pixel layout splits into 12 columns of 80 pixels, or 16 columns of 60. Seven columns would be 137.14… pixels each, because 7 does not divide 960.`, takeaway: "Grid sizes that are factors of the width give clean, whole-pixel columns." }
      ]
    },
    build: {
      lede: `To list every factor, test divisors in order from 1, record each one with its partner, and stop when the divisor times itself passes the number.`,
      intro: `<p>The model above arranges <i>n</i> tiles into every full rectangle it can. Each rectangle's two sides are a factor pair, and its area is always <i>n</i>. A side length that leaves a ragged last row is not a factor.</p>`,
      stepWhy: [
        `Every number is 1 times itself, so 1 and <i>n</i> are always factors. Starting there means the smallest and largest are never forgotten.`,
        `Testing in order guarantees no candidate is skipped. Divisibility rules are shortcuts: 84 does not end in 0 or 5, so 5 is ruled out without dividing.`,
        `Factors come in pairs. If <i>a</i> divides <i>n</i>, then <span class="m"><i>n</i> ÷ <i>a</i></span> does too, so one successful test gives two factors: 4 divides 84, and so does 21.`,
        `In each pair, one factor is at most the square root of <i>n</i>. Once <span class="m"><i>a</i> × <i>a</i></span> passes <i>n</i>, a new pair would need both factors larger than that, and their product would be too big. For 84 the search ends after 9, since <span class="m">10 × 10 = 100</span>.`,
        `Writing the small factors in order and their partners in reverse gives a sorted list. That makes it easy to count the factors and to see whether a number is prime.`
      ],
      bridge: `<p>The chair problem is the pattern behind most equal-sharing tasks: find the factor pairs of the total, then keep the pairs that meet your limits. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Splitting a bill evenly among friends", link: `A $96 bill splits into whole dollars among 2, 3, 4, 6, 8 or 12 people. Test each group size against the total, as the example tested 2 to 9 against 84.` },
        { task: "Arranging photos in a grid with no gaps", link: `Each grid is a factor pair, just as each row size of chairs was. 24 photos fit 4 × 6 or 3 × 8.` },
        { task: "Checking whether a year is a leap year", link: `A year is usually a leap year when 4 divides it. Use the last-two-digits test from the 7,416 practice problem: 2028 ends in 28, and 4 divides 28.` },
        { task: "Buying packs so there are no leftovers", link: `Hot dogs come 8 to a pack and buns 10 to a bag. List multiples, as in the days-of-medication practice problem: 40 is the first on both lists, so buy 5 packs and 4 bags.` },
        { task: "Planning equal teams for a game", link: `Pick a team size from the factors of the player count, then read the number of teams from its partner, as rows of 12 chairs gave 7 rows.` }
      ]
    },
    formal: {
      setup: { title: "Writing a divisibility problem", items: [
        { say: `<b>Name the quantities.</b> Give the total, the group size and the number of groups each a letter.`, math: `<span class="m"><span class="c1"><i>n</i></span> = 84</span> chairs, &nbsp;<span class="c2"><i>a</i></span> = chairs per row, &nbsp;<span class="c3"><i>b</i></span> = number of rows` },
        { say: `<b>Write the condition.</b> Every row is full exactly when <i>a</i> divides <i>n</i>.`, math: `<span class="m"><span class="c2"><i>a</i></span> | <span class="c1"><i>n</i></span> ⇔ <span class="c1"><i>n</i></span> = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span></span> for some whole number <span class="m"><span class="c3"><i>b</i></span></span>` },
        { say: `<b>Add the constraints.</b> Write the limits on the group size next to the condition.`, math: `<span class="m">6 ≤ <i>a</i> ≤ 15</span> &nbsp;and&nbsp; <span class="m"><i>a</i> | 84</span>` },
        { say: `<b>Justify the test.</b> Since 10 = 9 + 1, a number differs from its digit sum by a multiple of 9, so 3 and 9 can be tested on the digit sum.`, math: `<span class="m">84 = 8 · 10 + 4 = 8 · 9 + (8 + 4)</span>, and <span class="m">3 | 12</span>, so <span class="m">3 | 84</span>` },
        { say: `<b>Compute and answer.</b> Keep the factors inside the limits, and state the result as a sentence with units.`, math: `<span class="m">{<i>a</i> : <i>a</i> | 84, 6 ≤ <i>a</i> ≤ 15} = {6, 7, 12, 14}</span> &nbsp;→ Rows of 6, 7, 12 or 14 chairs, giving 14, 12, 7 or 6 rows.` }
      ] }
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
    { wrong: `Confusing factors and multiples: "the factors of 6 are 6, 12, 18"`, fix: `Factors are at most the number: 1, 2, 3, 6. The list 6, 12, 18 is multiples.` },
    { wrong: `Forgetting 1 and the number itself as factors`, fix: `Every whole number <span class="m"><i>n</i> &gt; 1</span> has at least the factors 1 and <i>n</i>.` },
    { wrong: `"The digits of 128 add to 11, so 128 is not divisible by 2"`, fix: `The digit-sum test is for 3 and 9. For 2, check the last digit. 128 ends in 8, so it is even.` },
    { wrong: `"12 is divisible by 2 and by 4, so it is divisible by 8."`, fix: `Tests combine only for factors with no common factor, like 2 and 3 for 6. Here <span class="m">12 ÷ 8 = 1.5</span>, so 8 is not a factor of 12.` }
  ],
  practice: [
    { ctx: "Coaching", q: `A coach has 18 players and wants equal teams with nobody left out. Which team sizes work? List all the factors of 18.`, a: `1, 2, 3, 6, 9, 18. Pairs: 1 × 18, 2 × 9, 3 × 6.` },
    { ctx: "Health care", q: `A patient takes a weekly medication on day 7 of a treatment plan and every 7 days after. On which days are the first five doses taken?`, a: `The first five multiples of 7: days 7, 14, 21, 28, 35.` },
    { ctx: "Bakery", q: `A bakery has 234 rolls. Can they all go into bags of 3 with none left over? Into bags of 9?`, a: `Yes to both. The digit sum is 2 + 3 + 4 = 9. 234 ÷ 3 = 78 bags of 3, and 234 ÷ 9 = 26 bags of 9.` },
    { ctx: "Warehouse", q: `Without dividing, decide whether 7,416 items can be shipped in full cases of 4, of 6 and of 9.`, a: `All three. Last two digits 16 are divisible by 4. It is even with digit sum 18, so divisible by 6 and by 9. (7,416 ÷ 9 = 824 cases.)` },
    { ctx: "Events", q: `Write an equation with a letter for the unknown, then solve: 96 chairs are set out in <i>r</i> full rows of 12. How many rows are there?`, a: `<span class="m">12<i>r</i> = 96</span>, so <span class="m"><i>r</i> = 96 ÷ 12 = </span><b>8 rows</b>. 12 is a factor of 96, so every row is full.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) treats divisibility in Book VII, where one number "measures" another if it divides it exactly.`
};
