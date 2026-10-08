window.ARITH = window.ARITH || {};

ARITH["gcf-lcm"] = {
  title: "GCF, LCM & the Euclidean Algorithm",
  short: "The largest shared factor and smallest shared multiple",
  grade: "Grade 6 (Euclidean algorithm: college prep)",
  hours: 5,
  voice: "plain",
  eyebrow: "Number theory · common divisors and multiples",
  hero: `<span class="m"><span class="c1">gcd(<i>a</i>, <i>b</i>)</span> × <span class="c4">lcm(<i>a</i>, <i>b</i>)</span> = <span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span></span>`,
  lede: `The GCF is the biggest number that divides both. The LCM is the smallest number both divide. For positive integers, their product is a × b.`,
  plain: `<p>The <b>greatest common factor</b> (GCF, also called the greatest common divisor, gcd) of two numbers is the largest number that divides both exactly. Say you have 12 apples and 18 oranges and want identical fruit baskets with nothing left over. The factors of 12 are 1, 2, 3, 4, 6, 12 and the factors of 18 are 1, 2, 3, 6, 9, 18. The largest one on both lists is 6, so you can make 6 baskets, each with 2 apples and 3 oranges.</p>
<p>The <b>least common multiple</b> (LCM) is the smallest number that is a multiple of both. If hot dogs come in packs of 6 and buns in packs of 8, counting by 6s gives 6, 12, 18, 24 and counting by 8s gives 8, 16, 24. The first match is 24: buy 4 packs of hot dogs and 3 packs of buns.</p>
<p>Listing gets slow for big numbers. The <b>Euclidean algorithm</b> finds the GCF quickly: divide the larger number by the smaller, keep the remainder, and repeat with the divisor and the remainder until the remainder is 0. The last nonzero remainder is the GCF. In pictures, you cut the largest squares you can from an <i>a</i> by <i>b</i> rectangle, then repeat on the leftover strip.</p>`,
  formal: `<p>For integers <i>a</i>, <i>b</i> not both zero, <span class="m">gcd(<i>a</i>, <i>b</i>)</span> is the largest integer dividing both. For nonzero <i>a</i>, <i>b</i>, <span class="m">lcm(<i>a</i>, <i>b</i>)</span> is the smallest positive integer that both divide. For positive integers, <span class="m">gcd(<i>a</i>, <i>b</i>) · lcm(<i>a</i>, <i>b</i>) = <i>ab</i></span>.</p>
<div class="display"><b>Euclidean algorithm.</b> If <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> with <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>, then <span class="m">gcd(<i>a</i>, <i>b</i>) = gcd(<i>b</i>, <i>r</i>)</span>, and <span class="m">gcd(<i>a</i>, 0) = |<i>a</i>|</span>.<br>From prime factorizations <span class="m"><i>a</i> = ∏ <i>p</i><sup><i>α</i><sub><i>p</i></sub></sup></span>, <span class="m"><i>b</i> = ∏ <i>p</i><sup><i>β</i><sub><i>p</i></sub></sup></span>:<br><span class="m">gcd = ∏ <i>p</i><sup>min(<i>α</i><sub><i>p</i></sub>, <i>β</i><sub><i>p</i></sub>)</sup></span>,  <span class="m">lcm = ∏ <i>p</i><sup>max(<i>α</i><sub><i>p</i></sub>, <i>β</i><sub><i>p</i></sub>)</sup></span></div>
<p><b>Bézout's identity:</b> there are integers <i>x</i>, <i>y</i> with <span class="m"><i>ax</i> + <i>by</i> = gcd(<i>a</i>, <i>b</i>)</span>. The extended Euclidean algorithm finds them. Numbers with gcd 1 are called <b>relatively prime</b> (coprime).</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "The long side of the rectangle in the lab." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The short side of the rectangle." },
    { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>)`, name: "Greatest common factor", desc: "The largest square that tiles the whole rectangle exactly." },
    { c: "c4", sym: `lcm(<i>a</i>, <i>b</i>)`, name: "Least common multiple", desc: "The smallest number both a and b divide. It equals a × b ÷ gcd." }
  ],
  steps: { title: "How to run the Euclidean algorithm", items: [
    `Divide the larger number <i>a</i> by the smaller <i>b</i> and find the remainder <i>r</i>, so <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>.`,
    `If <span class="m"><i>r</i> = 0</span>, then <i>b</i> is the GCF. Stop.`,
    `Otherwise replace <span class="m">(<i>a</i>, <i>b</i>)</span> with <span class="m">(<i>b</i>, <i>r</i>)</span> and repeat.`,
    `The last nonzero remainder is the GCF.`,
    `For the LCM, compute <span class="m"><i>a</i> × <i>b</i> ÷ gcd(<i>a</i>, <i>b</i>)</span>. Dividing one number by the GCF first keeps the numbers small.`
  ] },
  example: {
    prompt: `A room is 1,071 cm by 462 cm. What is the largest square tile, in whole centimetres, that covers the floor exactly with no cutting, and how many tiles are needed?`,
    lines: [
      { math: `<span class="m"><span class="c2">1071</span> = <span class="c3">462</span> × 2 + 147</span>`, note: "Two 462 cm squares fit along the long side, leaving a 147 cm strip." },
      { math: `<span class="m"><span class="c3">462</span> = 147 × 3 + 21</span>`, note: "Three 147 cm squares fit in the strip, leaving 21 cm." },
      { math: `<span class="m">147 = <span class="c1">21</span> × 7 + 0</span>`, note: "Remainder 0, so the last divisor is the GCF." },
      { math: `<span class="m">gcd(<span class="c2">1071</span>, <span class="c3">462</span>) = <span class="c1">21</span></span>`, note: "Check: 1071 = 21 × 51 and 462 = 21 × 22." },
      { math: `<span class="m">51 × 22 = 1,122</span>`, note: "Tiles along each side, multiplied." }
    ],
    answer: `The largest tile is <span class="m">21</span> cm by 21 cm, and <span class="m">1,122</span> tiles are needed.`
  },
  why: `<p>The GCF answers "what is the largest equal piece or group?" and the LCM answers "when do these cycles line up again?" Without them you cut boards and leave waste, buy packs that do not match, or miss when two schedules coincide. With them a fraction like 462/1071 simplifies in one step to 22/51, by dividing top and bottom by 21.</p>
<p>They are the tools of fraction arithmetic. The LCM of the denominators is the least common denominator for adding fractions, and the GCF puts the answer in lowest terms.</p>
<p>Later math builds on the Euclidean algorithm. Its extended form solves equations in whole numbers and computes the modular inverses that RSA encryption needs to build its private key. In algebra the same algorithm finds the common factors of polynomials.</p>`,
  careers: [
    { role: "Tile setter", use: "Chooses tile sizes that divide both room dimensions so rows finish without cut pieces." },
    { role: "Transit planner", use: "Finds when routes with different headways, such as 18 and 24 minutes, depart together again using the LCM." },
    { role: "Cryptographer", use: "Uses the extended Euclidean algorithm to compute the RSA private exponent as a modular inverse." },
    { role: "Production planner", use: "Uses the LCM of package sizes, such as 10 hot dogs and 8 buns, to order matching quantities with none left over." },
    { role: "Musician", use: "Lines up polyrhythms such as 3 against 4, which repeat every 12 beats, the LCM." },
    { role: "Mechanical engineer", use: "Checks that gear tooth counts are coprime so the same teeth do not always mesh." }
  ],
  life: [
    "Simplifying fractions in one step",
    "Working out when two repeating events happen on the same day",
    "Cutting ribbon or boards into equal pieces with no waste",
    "Buying packs of two items so the counts match"
  ],
  fields: [
    { name: "Computer science", use: "The Euclidean algorithm is a textbook example of an efficient algorithm and is used in rational arithmetic libraries." },
    { name: "Cryptography", use: "Key generation for RSA relies on the extended Euclidean algorithm." },
    { name: "Music", use: "Polyrhythms and pattern cycles repeat after the LCM of their lengths." },
    { name: "Engineering", use: "Gear trains and scheduling problems use gcd and lcm." }
  ],
  layers: {
    concept: {
      heading: "What are the GCF and the LCM?",
      lede: `What is the largest piece that divides two amounts evenly, and when do two repeating cycles line up again? The GCF and the LCM answer those questions.`,
      history: `<p><b>The problem.</b> Dividing land, goods and taxes into equal shares means simplifying fractions, and that needs the largest number dividing both parts. Calendar keepers faced the matching question for cycles. The Maya ran a 260-day count alongside a 365-day year, and the same pairing of dates returns only every 18,980 days, 52 of those years: the least common multiple of 260 and 365.</p>
<p><b>The solution.</b> Euclid's <i>Elements</i> (around 300 BCE) gives the method in Book VII, Propositions 1 and 2: take the smaller number from the larger again and again until what is left measures the number before it. Euclid probably recorded a method that was already known. The Chinese <i>Nine Chapters on the Mathematical Art</i>, a handbook of problems in surveying, trade and taxation usually dated between about 200 BCE and the 1st century CE, also gives the method for the greatest common divisor. In India, Aryabhata described the algorithm in the late 5th century and called it the "pulverizer".</p>
<p><b>What it changed.</b> In 1844 Gabriel Lamé proved that the algorithm never needs more than five times as many steps as the smaller number has digits, one of the first results on how fast an algorithm runs. Donald Knuth later called it "the oldest nontrivial algorithm that has survived to the present day". Computers still use it to reduce fractions and, in its extended form, to compute the modular inverses RSA encryption needs.</p>`,
      sources: [
        { title: "Euclidean algorithm (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclidean_algorithm" },
        { title: "Nine Chapters on the Mathematical Art (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Nine_chapters/" },
        { title: "Calendar round (Wikipedia)", url: "https://en.wikipedia.org/wiki/Calendar_round" }
      ],
      examples: [
        { role: "Tile setter", scene: `A wall is 120 cm by 84 cm. <span class="m">gcd(120, 84) = 12</span>, so 12 cm tiles fit with no cuts: 10 across and 7 up, <span class="m">10 × 7 = 70</span> tiles.`, takeaway: "The GCF is the largest tile that needs no cutting." },
        { role: "Transit planner", scene: `Route A leaves every 12 minutes and route B every 20 minutes, both at 6:00 a.m. <span class="m">lcm(12, 20) = 60</span>, so they leave together again at 7:00 a.m.`, takeaway: "The LCM tells riders when a timed transfer works." },
        { role: "Cryptographer", scene: `In a classroom-size RSA example with <span class="m"><i>e</i> = 17</span> and <span class="m">(<i>p</i> − 1)(<i>q</i> − 1) = 3,120</span>, the extended Euclidean algorithm finds the private exponent <span class="m"><i>d</i> = 2,753</span>, because <span class="m">17 × 2,753 = 46,801 = 15 × 3,120 + 1</span>.`, takeaway: "The private key comes straight out of the Euclidean algorithm." },
        { role: "Production planner", scene: `Hot dogs come 10 to a pack and buns 8 to a pack. <span class="m">lcm(10, 8) = 40</span>, so 4 packs of hot dogs and 5 packs of buns match with none left over.`, takeaway: "Ordering by the LCM avoids leftovers." },
        { role: "Musician", scene: `In a 3-against-4 polyrhythm one part divides the bar into 3 and the other into 4. Both fit a grid of <span class="m">lcm(3, 4) = 12</span> pulses: one part plays every 4th pulse, the other every 3rd.`, takeaway: "Counting the shared grid makes the rhythm playable." },
        { role: "Mechanical engineer", scene: `A 15-tooth gear meshes with a 40-tooth gear. <span class="m">gcd(15, 40) = 5</span>, so each tooth on the small gear only ever meets <span class="m">40 ÷ 5 = 8</span> of the 40 teeth. With 41 teeth the counts are coprime and every tooth meets every tooth.`, takeaway: "Coprime tooth counts spread wear evenly." }
      ]
    },
    build: {
      lede: `Divide the larger number by the smaller, replace the pair with the divisor and the remainder, and repeat until the remainder is 0. The last nonzero remainder is the GCF.`,
      intro: `<p>The model draws an <i>a</i> by <i>b</i> rectangle, cuts off the largest squares that fit, then repeats on the leftover strip. Each size of square is one division step, listed beside it as <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>. The last square size, outlined in amber, tiles what is left exactly: it is the GCF. The panel then gives the LCM as <span class="m"><i>a</i> × <i>b</i> ÷ gcd</span> and lists the first six multiples of each number, with the LCM in violet when it appears.</p>`,
      stepWhy: [
        `Division removes as many copies of <i>b</i> as possible at once. It does the same work as subtracting <i>b</i> again and again, only faster.`,
        `A remainder of 0 means <i>b</i> divides <i>a</i>. It also divides itself, and nothing larger than <i>b</i> divides <i>b</i>, so <i>b</i> is the greatest common factor.`,
        `Any number that divides <i>a</i> and <i>b</i> also divides <span class="m"><i>r</i> = <i>a</i> − <i>bq</i></span>, and any number that divides <i>b</i> and <i>r</i> also divides <i>a</i>. The common factors stay the same while the numbers shrink.`,
        `The remainders get smaller every time, so they must reach 0. The divisor at that moment is the last nonzero remainder, and step 2 says it is the GCF.`,
        `Because <span class="m">gcd × lcm = <i>a</i> × <i>b</i></span>, the LCM is the product divided by the GCF. Dividing first, as in <span class="m">18 ÷ 6 × 24 = 72</span>, keeps the numbers small.`
      ],
      bridge: `<p>The floor problem is the pattern behind most GCF questions: two measurements, the largest piece that fits both exactly, then a count. LCM questions turn it around: two cycles, and the first time they meet.</p>`,
      tasks: [
        { task: "Simplifying fractions in one step", link: `Divide top and bottom by the GCF. With the numbers of the worked example, 462/1071 becomes 22/51 after dividing by 21.` },
        { task: "Working out when two repeating events happen on the same day", link: `Find the LCM as in practice 3: the buses meet every <span class="m">lcm(18, 24) = 72</span> minutes.` },
        { task: "Cutting ribbon or boards into equal pieces with no waste", link: `Run the Euclidean algorithm on the two lengths, as on 1,071 and 462 in the worked example. The GCF is the longest piece.` },
        { task: "Buying packs of two items so the counts match", link: `Use step 5: <span class="m">lcm(6, 8) = 48 ÷ 2 = 24</span>, as in practice 2, so buy 4 packs of 6 and 3 packs of 8.` }
      ]
    },
    formal: {
      setup: { title: "Writing a GCF and LCM problem", items: [
        { say: `<b>Name the quantities.</b> Give each length a letter and its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 1071</span> cm, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 462</span> cm, &nbsp;tile side <span class="m"><i>s</i></span>` },
        { say: `<b>Translate the condition.</b> The tile side must divide both lengths and be as large as possible.`, math: `<span class="m"><i>s</i> = <span class="c1">gcd(<i>a</i>, <i>b</i>)</span></span>` },
        { say: `<b>Justify the method.</b> Each division step keeps the same common divisors, because <span class="m">gcd(<i>a</i>, <i>b</i>) = gcd(<i>b</i>, <i>r</i>)</span>.`, math: `<span class="m">gcd(1071, 462) = gcd(462, 147) = gcd(147, 21) = gcd(21, 0) = <span class="c1">21</span></span>` },
        { say: `<b>Compute the count.</b> Multiply the number of tiles along each side.`, math: `<span class="m"><i>N</i> = (1071 ÷ 21)(462 ÷ 21) = 51 × 22 = 1,122</span>` },
        { say: `<b>Related quantity.</b> The LCM follows from the GCF.`, math: `<span class="m"><span class="c4">lcm(1071, 462)</span> = 1071 × 462 ÷ 21 = 51 × 462 = 23,562</span>` },
        { say: `<b>Answer in a sentence</b> with units.`, math: `The largest tile is 21 cm by 21 cm, and 1,122 of them cover the floor.` }
      ] }
    }
  },
  prereqWhy: {
    "primes": "One method reads the GCF and LCM from prime factorizations by comparing exponents."
  },
  unlocksWhy: {
    "fraction-ops": "Adding fractions uses the LCM of the denominators as the least common denominator, and the GCF simplifies the result."
  },
  beyond: [
    { field: "Number theory", why: "Bézout's identity and the Euclidean algorithm underlie solving linear Diophantine equations and congruences." },
    { field: "Abstract algebra", why: "The Euclidean algorithm generalizes to polynomials and defines Euclidean domains." },
    { field: "Cryptography", why: "Modular inverses computed by the extended Euclidean algorithm are required in RSA." }
  ],
  mistakes: [
    { wrong: `"The LCM of 6 and 8 is 48"`, fix: `6 × 8 is a common multiple, but not always the least. <span class="m">lcm(6, 8) = 48 ÷ gcd(6, 8) = 48 ÷ 2 = 24</span>.` },
    { wrong: `Mixing up GCF and LCM: answering 24 for the GCF of 6 and 8`, fix: `The GCF is never larger than the smaller number. The LCM is never smaller than the larger number.` },
    { wrong: `Using the larger exponents for the GCF`, fix: `The GCF takes the smaller exponent of each shared prime. The LCM takes the larger exponent of every prime present.` },
    { wrong: `Reporting the last quotient as the GCF: reading <span class="m">147 = 21 × 7 + 0</span> and answering 7`, fix: `The GCF is the last nonzero remainder, which is the divisor in the line ending in + 0. Here it is 21.` }
  ],
  practice: [
    { ctx: "Gifts", q: `You have 12 pens and 18 notebooks and want identical gift bags with nothing left over. What is the largest number of bags, <span class="m">gcd(12, 18)</span>?`, a: `<span class="m">6</span> bags. The common factors are 1, 2, 3, 6, and each bag gets 2 pens and 3 notebooks.` },
    { ctx: "Party", q: `Plates come in packs of 6 and cups in packs of 8. What is the smallest equal number of plates and cups you can buy, <span class="m">lcm(6, 8)</span>?`, a: `<span class="m">24</span>. 6 × 8 ÷ gcd(6, 8) = 48 ÷ 2 = 24: 4 packs of plates and 3 packs of cups.` },
    { ctx: "Transit", q: `Two buses leave a station together at 7:00 a.m. One returns every 18 minutes and the other every 24 minutes. When do they next leave together?`, a: `8:12 a.m. lcm(18, 24) = 18 × 24 ÷ 6 = 72 minutes after 7:00.` },
    { ctx: "Woodworking", q: `Two boards are 252 cm and 198 cm long. Use the Euclidean algorithm to find the longest equal pieces that cut both with no waste, <span class="m">gcd(252, 198)</span>, then find <span class="m">lcm(252, 198)</span>.`, a: `gcd = 18 cm: 252 = 198 × 1 + 54, 198 = 54 × 3 + 36, 54 = 36 × 1 + 18, 36 = 18 × 2 + 0. lcm = 252 × 198 ÷ 18 = 2,772.` },
    { ctx: "Safety lights", q: `Write an equation with a letter for the unknown, then solve: two warning lights flash together, then one flashes every 15 seconds and the other every 25 seconds. Let <i>t</i> be the number of seconds until they next flash together.`, a: `<span class="m"><i>t</i> = lcm(15, 25) = 15 × 25 ÷ gcd(15, 25) = 375 ÷ 5 = 75</span>. They flash together again after <b>75 seconds</b>.` }
  ],
  origin: `The Euclidean algorithm appears in Euclid's <i>Elements</i>, Book VII, Propositions 1 and 2 (around 300 BCE), described as repeatedly subtracting the smaller number from the larger.`
};
