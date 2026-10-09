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
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "The width of the rectangle in the model, written along the top." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The height of the rectangle, written down the left side." },
    { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>)`, name: "Greatest common factor", desc: "The largest square that tiles the whole rectangle exactly. The model outlines it in amber." },
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
    prompt: `Two buses leave a station together at 7:00 a.m. Bus A leaves every 24 minutes and bus B every 18 minutes. When do they next leave together?`,
    lines: [
      { math: `<span class="m"><span class="c2">24</span> = <span class="c3">18</span> × 1 + 6</span>`, note: "Divide the larger number by the smaller. The remainder is 6." },
      { math: `<span class="m"><span class="c3">18</span> = <span class="c1">6</span> × 3 + 0</span>`, note: "Remainder 0, so the last divisor, 6, is the GCF." },
      { math: `<span class="m"><span class="c2">24</span> × <span class="c3">18</span> = 432</span>`, note: "432 minutes is a common multiple, but not the least one." },
      { math: `<span class="m">lcm = 432 ÷ <span class="c1">6</span> = <span class="c4">72</span></span>`, note: "Divide the product by the GCF." },
      { math: `<span class="m">7:00 + 72 min = 8:12</span>`, note: "72 minutes is 1 hour and 12 minutes." }
    ],
    answer: `The buses next leave together <span class="m c4">72</span> minutes later, at 8:12 a.m.`
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
    nudge: "Not yet. Check whether you need the biggest shared factor or the first shared multiple.",
    concept: {
      heading: "What are the GCF and the LCM?",
      lede: `What is the largest piece that divides two amounts evenly, and when do two repeating cycles line up again? The GCF and the LCM answer those questions.`,
      question: { text: "What do they share?", sub: `Two numbers can share a piece, and they can meet at a multiple. Watch both happen in the model above, then try it yourself.`,
        figure: { sym: `gcd(<i>a</i>, <i>b</i>)`, value: "6", cap: "the GCF", echo: "gcf" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["bus", "buses", "minute", "minutes", "square", "squares", "strip", "tile", "tiles", "piece", "pieces", "pack", "packs", "hot dogs", "buns", "plates", "cups", "pulses", "teeth", "sixes", "days", "years"],
      walk: { title: "Line it up together: two bus routes",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Two buses leave a station together at 7:00 a.m. Bus A leaves every 24 minutes. Bus B leaves every 18 minutes. When do they next leave together?`,
        demo: { kind: "line", from: 0, to: 72, tick: 12, points: [
            { v: 24, c: "c2", label: "24" }, { v: 48, c: "c2", label: "48" }, { v: 72, c: "c2", label: "72" },
            { v: 18, c: "c3", label: "18", below: true }, { v: 36, c: "c3", label: "36", below: true }, { v: 54, c: "c3", label: "54", below: true }, { v: 72, c: "c3", label: "72", below: true }],
          alt: "A number line of minutes from 0 to 72. Bus A's times 24, 48 and 72 appear above it, then bus B's times 18, 36, 54 and 72 below it. Both lists reach 72." },
        lines: [
          { math: `<span class="c2">24</span>, 48, 72, 96, …`, note: `Bus A leaves every 24 minutes. Count up by 24.`, frame: 3 },
          { math: `<span class="c3">18</span>, 36, 54, 72, …`, note: `Bus B leaves every 18 minutes. Count up by 18.`, frame: 7 },
          { math: `lcm(24, 18) = <span class="c4">72</span>`, note: `72 is the first number on both lists. It is the least common multiple. 72 minutes after 7:00 is 8:12.`, frame: 7 },
          { math: `24 × 18 = 432`, note: `A shortcut multiplies and gets 432 minutes. Both buses do leave then, over 7 hours later. It is a shared time, but not the first one.`, frame: 7 },
          { math: `24 = 18 × 1 + 6, &nbsp; 18 = 6 × 3 + 0`, note: `Find what 24 and 18 share. Take 18 out of 24, and 6 is left. 6 fits into 18 exactly. So the GCF is <span class="c1">6</span>.`, frame: 7 },
          { math: `432 ÷ <span class="c1">6</span> = <span class="c4">72</span>`, note: `24 is 4 sixes and 18 is 3 sixes. Multiplying counts their shared 6 twice. Divide by the GCF once, and the shortcut agrees: 72.`, frame: 7 }
        ],
        predict: [null,
          { ask: `Bus B leaves at 18, 36 and 54 minutes. When does it leave next?`, parts: [{ label: "minutes", ans: 72 }], hint: `Add 18 to 54.` },
          { ask: `When do both buses first leave together again?`, choices: [
            { t: "After 72 minutes, at 8:12", ok: true },
            { t: "After 48 minutes", why: "48 is on bus A's list only. Bus B leaves at 36 and then 54, so it skips 48." },
            { t: "After 6 minutes", why: "6 divides both numbers, but no bus leaves at 6 minutes. The first bus leaves at 18." }
          ], hint: `Look for the first number that is on both lists.` },
          { ask: `A friend says: "Multiply. 24 × 18 = 432 minutes." What is wrong with that?`, choices: [
            { t: "432 is a shared time, but not the first", ok: true },
            { t: "Neither bus leaves at 432", why: "432 is 18 trips of bus A and 24 trips of bus B. Both buses do leave then." },
            { t: "You should add: 24 + 18 = 42", why: "42 is on neither list. Bus A leaves at 24 and then 48, so it skips 42." }
          ], hint: `72 and 432 are both on both lists. Which comes first?` },
          { ask: `Take 18 out of 24. What is left over?`, parts: [{ label: "left over", ans: 6 }], hint: `Count up from 18 to 24.` },
          { ask: `Now fix the shortcut. What is 432 ÷ 6?`, parts: [{ label: "432 ÷ 6", ans: 72 }], hint: `420 ÷ 6 = 70, and 12 ÷ 6 = 2.` }],
        answer: `The buses next leave together after <span class="m c4">72</span> minutes, at 8:12 a.m.` },
      ideas: [
        { c: "c1", title: "The biggest piece that fits both", term: "greatest common factor (GCF)", text: `The GCF is the largest number that divides both numbers exactly. 24 and 18 both split into sixes, with nothing left over.`,
          demo: { kind: "bar", parts: [6, 6, 6, 6], cap: "split into four sixes", alt: "A bar of 24 splits into four equal parts of 6, with nothing left over." }, try: { label: "Try a 36 by 24 rectangle", lab: "a:36,b:24" } },
        { c: "c4", title: "The first number both reach", term: "least common multiple (LCM)", text: `Count up by each number. The first number on both lists is the LCM. Counting by 6 and by 8, you meet at 24.`,
          demo: { kind: "line", from: 0, to: 24, tick: 6, points: [
              { v: 6, c: "c2", label: "6" }, { v: 12, c: "c2", label: "12" }, { v: 18, c: "c2", label: "18" }, { v: 24, c: "c2", label: "24" },
              { v: 8, c: "c3", label: "8", below: true }, { v: 16, c: "c3", label: "16", below: true }, { v: 24, c: "c3", label: "24", below: true }],
            alt: "Counting by 6 marks 6, 12, 18 and 24 above a number line. Counting by 8 marks 8, 16 and 24 below it. The two lists first meet at 24." },
          try: { label: "Try 8 and 6", lab: "a:8,b:6" } },
        { c: "c2", title: "Cut squares, keep the leftover", term: "Euclidean algorithm", text: `Cut the biggest squares you can. Repeat on the strip that is left. The last square size that fits exactly is the GCF.`,
          demo: { kind: "bar", parts: [18, 18, 12], labels: ["square", "square", "strip left"], cap: "the long side", alt: "A long side of 48 holds two squares of 18, with a strip of 12 left over." }, try: { label: "Watch the cuts again", lab: "replay" } }
      ],
      timelineTitle: "One method, more than 2,000 years old",
      timelineLead: `Take the smaller number out of the larger, again and again. Surveyors, merchants and tax clerks used this long before computers. It is the square cutting you watch in the model.`,
      timeline: [
        { when: "About 300 BCE", what: `Euclid's <i>Elements</i>, Book VII: take the smaller number from the larger, again and again. The square cuts in the model do the same.` },
        { when: "About 200 BCE", what: `The Chinese <i>Nine Chapters</i>, a handbook for surveying, trade and taxes, uses the method in its chapter on fractions. Some historians date it as late as 50 CE.` },
        { when: "Late 5th century", what: `Aryabhata in India describes the method and calls it the "pulverizer".` },
        { when: "1844", what: `Gabriel Lamé proves it is fast: it never takes more than five steps for each digit of the smaller number.` }
      ],
      history: `<p><b>The problem.</b> Sharing land, grain and taxes fairly means splitting amounts into equal parts and simplifying fractions. That needs the largest number that divides both parts. Calendar keepers had the matching question. The Maya ran a 260-day count alongside a 365-day year. The same pair of dates comes back only every 18,980 days, 52 of those years. That is the least common multiple of 260 and 365.</p>
<p><b>The solution.</b> Euclid's <i>Elements</i> (about 300 BCE) gives the method in Book VII, Propositions 1 and 2: take the smaller number from the larger again and again, until what is left measures the number before it. Euclid probably recorded a method that was already known. The Chinese <i>Nine Chapters on the Mathematical Art</i>, a handbook of problems in surveying, trade and taxation, uses the same method in its chapter on fractions. Most historians date it to about 200 BCE; others place it as late as 50 CE. In India, Aryabhata described the algorithm in the late 5th century and called it the "pulverizer".</p>
<p><b>What it changed.</b> In 1844 Gabriel Lamé proved that the algorithm never needs more than five times as many steps as the smaller number has digits. It was one of the first results on how fast an algorithm runs. Donald Knuth later called it "the oldest nontrivial algorithm that has survived to the present day". Computers still use it to reduce fractions and, in its extended form, to find the modular inverses that RSA encryption needs.</p>`,
      sources: [
        { title: "Euclidean algorithm (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclidean_algorithm" },
        { title: "Euclid's Elements, Book VII, Proposition 2 (D. E. Joyce, Clark University)", url: "https://mathcs.clarku.edu/~djoyce/java/elements/bookVII/propVII2.html" },
        { title: "Nine Chapters on the Mathematical Art (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Nine_chapters/" },
        { title: "Calendar round (Wikipedia)", url: "https://en.wikipedia.org/wiki/Calendar_round" }
      ],
      matters: { title: "Why the GCF and LCM matter", text: `<p>Two questions come up all the time: what is the <b>biggest equal piece</b>, and when do two <b>repeating things line up</b>?</p><ul class="why-chips"><li><b>Fractions</b> in lowest terms</li><li><b>Packs</b> that match</li><li><b>Schedules</b> that meet</li></ul><p>The GCF answers the first question and the LCM answers the second. Get them right and you <b>waste nothing</b>: no cut-up boards, no extra buns, no missed bus.</p>` },
      stakes: { title: "Where GCF and LCM go wrong", lead: `Most slips use a shared number that is not the best one, or mix the two ideas up.`, items: [
        { role: "Party shopping", text: `Plates come in 6s and cups in 8s. Buying 48 of each, 6 × 8, wastes money. 24 is the first match.` },
        { role: "Stopping too soon", text: `Calling 3 the GCF of 24 and 18. 3 fits both, but 6 is bigger.` },
        { role: "Mixing them up", text: `Calling 24 the GCF of 6 and 8. The GCF is never bigger than the smaller number.` },
        { role: "Reading the last line", text: `In 18 = 6 × 3 + 0, the GCF is 6, the number you divide by. It is not 3.` }
      ], try: { label: "See 8 and 6 in the model", lab: "a:8,b:6" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Tile setter", figure: "1,122 tiles", scene: `A floor is 1,071 cm by 462 cm. The Euclidean algorithm gives <span class="m">gcd(1071, 462) = 21</span>, so 21 cm tiles fit with no cuts: <span class="m">51 × 22 = 1,122</span> tiles.`, takeaway: "The GCF is the largest tile that needs no cutting." },
        { role: "Transit planner", figure: "60 minutes", try: { label: "Show 20 and 12", lab: "a:20,b:12" }, scene: `Route A leaves every 12 minutes and route B every 20 minutes, both at 6:00 a.m. <span class="m">lcm(12, 20) = 60</span>, so they leave together again at 7:00 a.m.`, takeaway: "The LCM tells riders when a timed transfer works." },
        { role: "Cryptographer", figure: "d = 2,753", scene: `In a classroom-size RSA example with <span class="m"><i>e</i> = 17</span> and <span class="m">(<i>p</i> − 1)(<i>q</i> − 1) = 3,120</span>, the extended Euclidean algorithm finds the private exponent <span class="m"><i>d</i> = 2,753</span>, because <span class="m">17 × 2,753 = 46,801 = 15 × 3,120 + 1</span>.`, takeaway: "The private key comes straight out of the Euclidean algorithm." },
        { role: "Production planner", figure: "40 of each", try: { label: "Show 10 and 8", lab: "a:10,b:8" }, scene: `Hot dogs come 10 to a pack and buns 8 to a pack. <span class="m">lcm(10, 8) = 40</span>, so 4 packs of hot dogs and 5 packs of buns match with none left over.`, takeaway: "Ordering by the LCM avoids leftovers." },
        { role: "Musician", figure: "12 pulses", try: { label: "Show 4 and 3", lab: "a:4,b:3" }, scene: `In a 3-against-4 polyrhythm one part divides the bar into 3 and the other into 4. Both fit a grid of <span class="m">lcm(3, 4) = 12</span> pulses: one part plays every 4th pulse, the other every 3rd.`, takeaway: "Counting the shared grid makes the rhythm playable." },
        { role: "Mechanical engineer", figure: "8 of 40 teeth", try: { label: "Show 40 and 15", lab: "a:40,b:15" }, scene: `A 15-tooth gear meshes with a 40-tooth gear. <span class="m">gcd(15, 40) = 5</span>, so each tooth on the small gear only ever meets <span class="m">40 ÷ 5 = 8</span> of the 40 teeth. With 41 teeth the counts are coprime and every tooth meets every tooth.`, takeaway: "Coprime tooth counts spread wear evenly." }
      ]
    },
    build: {
      lede: `Divide the larger number by the smaller, replace the pair with the divisor and the remainder, and repeat until the remainder is 0. The last nonzero remainder is the GCF.`,
      task: { text: "Find the GCF, then the LCM.", sub: `The same five steps work for any pair, from two bus times to two board lengths. Try each one in the model above as you go.`,
        figure: { sym: `lcm(<i>a</i>, <i>b</i>)`, value: "144", cap: "in the model", echo: "lcm" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model draws an <i>a</i> by <i>b</i> rectangle, cuts off the largest squares that fit, then repeats on the leftover strip. Each size of square is one division step, listed beside it as <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>. The last square size, outlined in amber, tiles what is left exactly: it is the GCF. The panel then gives the LCM as <span class="m"><i>a</i> × <i>b</i> ÷ gcd</span> and lists the first six multiples of each number, with the LCM in violet when it appears.</p>`,
      keyTry: [{ label: "Try 54 by 24", lab: "a:54,b:24" }, { label: "Try 56 by 21", lab: "a:56,b:21" }, { label: "Show a GCF of 1", lab: "a:35,b:12" }, { label: "Show the LCM in the lists", lab: "a:15,b:10" }],
      objects: ["square", "squares", "strip", "piece", "pieces", "board", "boards", "pack", "packs", "juice boxes", "snack bars", "day", "days", "questions", "bus", "buses", "minutes"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Division removes as many copies of <i>b</i> as possible at once. It does the same work as subtracting <i>b</i> again and again, only faster.`,
        `A remainder of 0 means <i>b</i> divides <i>a</i>. It also divides itself, and nothing larger than <i>b</i> divides <i>b</i>, so <i>b</i> is the greatest common factor.`,
        `Any number that divides <i>a</i> and <i>b</i> also divides <span class="m"><i>r</i> = <i>a</i> − <i>bq</i></span>, and any number that divides <i>b</i> and <i>r</i> also divides <i>a</i>. The common factors stay the same while the numbers shrink.`,
        `The remainders get smaller every time, so they must reach 0. The divisor at that moment is the last nonzero remainder, and step 2 says it is the GCF.`,
        `Because <span class="m">gcd × lcm = <i>a</i> × <i>b</i></span>, the LCM is the product divided by the GCF. Dividing first, as in <span class="m">18 ÷ 6 × 24 = 72</span>, keeps the numbers small.`
      ],
      stepTry: [{ label: "Try 50 and 15", lab: "a:50,b:15" }, null, { label: "Watch 57 and 21", lab: "a:57,b:21" }, null, null],
      stepGoal: [null,
        { key: "gcf", eq: 13, text: `Set <i>a</i> = 39 and <i>b</i> = 13. Before you look, decide: is there a remainder?`, after: `<span class="m">39 = 13 × 3 + 0</span>. The remainder is 0 at once, so <span class="m c1">gcd = 13</span>.`, notYet: `Not yet. Set <i>a</i> to 39 and <i>b</i> to 13.` },
        null,
        { key: "gcf", eq: 17, text: `Set <i>a</i> = 51 and <i>b</i> = 34. Work the steps on paper first, then read the last nonzero remainder in the model.`, after: `<span class="m">51 = 34 × 1 + 17</span>, then <span class="m">34 = 17 × 2 + 0</span>. The last nonzero remainder is <span class="m c1">17</span>.`, notYet: `Not yet. Set <i>a</i> to 51 and <i>b</i> to 34.` },
        { key: "lcm", eq: 180, text: `Set <i>a</i> = 60 and <i>b</i> = 45. Work out <span class="m">60 × 45 ÷ gcd</span> yourself, then check the model.`, after: `<span class="m">gcd(60, 45) = 15</span>, and <span class="m">60 ÷ 15 × 45 = 4 × 45 = <span class="c4">180</span></span>.`, notYet: `Not yet. Set <i>a</i> to 60 and <i>b</i> to 45.` }],
      matters: { title: "Why a Method Beats Listing", text: `<p>Listing factors works for small numbers. For big ones the lists get long, and you can miss a factor.</p><ul class="why-chips"><li><b>Long</b> lists</li><li><b>Missed</b> factors</li><li><b>Big</b> numbers</li></ul><p>The Euclidean algorithm <b>shrinks the numbers every step</b>. A few short divisions give the GCF, and <b>one more division</b> gives the LCM.</p>` },
      bridge: `<p>The buses in the walk showed the LCM pattern: two cycles, and the first time they meet. GCF questions turn it around: two amounts, and the biggest equal piece that fits both. Here is where both show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Simplifying fractions in one step", check: { q: `You got 20 of 24 questions right. Write 20/24 in lowest terms.`, parts: [{ label: "top", ans: 5 }, { label: "bottom", ans: 6 }], hint: `Find gcd(24, 20), then divide the top and the bottom by it.` }, figure: "20/24",
          demo: { kind: "fraction", n: 5, d: 6, split: 4, alt: "A bar cut into 6 parts with 5 shaded shows 5/6. Each part is then cut into 4, showing that 20/24 is the same amount." },
          lines: [{ math: `24 = 20 × 1 + 4`, note: "Divide the larger number by the smaller. 4 is left." }, { math: `20 = 4 × 5 + 0`, note: "Remainder 0, so the GCF is 4." }, { math: `20 ÷ 4 = 5, &nbsp; 24 ÷ 4 = 6`, note: "Divide the top and the bottom by the GCF." }, { math: `20/24 = 5/6`, note: "5 and 6 share no factor but 1, so this is lowest terms." }],
          predict: [null, { ask: `Now divide 20 by 4. What is the remainder?`, parts: [{ label: "remainder", ans: 0 }], hint: `4 × 5 = 20.` }, null, null],
          try: { label: "Show 24 and 20", lab: "a:24,b:20" },
          link: `Steps 1 and 2 give the GCF in two lines. Dividing by a smaller common factor, like 2, would leave 10/12 and need another round.` },
        { task: "Working out when two repeating events happen on the same day", check: { q: `You water a plant every 4 days and feed it every 6 days. You did both today. In how many days do you do both again?`, parts: [{ label: "days", ans: 12 }], hint: `Feeding days are 6, 12, 18. Which is also on the list 4, 8, 12?` }, figure: "every 4 and 6 days",
          demo: { kind: "line", from: 0, to: 12, tick: 2, points: [{ v: 4, c: "c2", label: "4" }, { v: 8, c: "c2", label: "8" }, { v: 12, c: "c2", label: "12" }, { v: 6, c: "c3", label: "6", below: true }, { v: 12, c: "c3", label: "12", below: true }],
            alt: "Watering days 4, 8 and 12 appear above a number line, then feeding days 6 and 12 below it. Both lists reach 12." },
          lines: [{ math: `4, 8, 12, 16, …`, note: "The watering days." }, { math: `6, 12, 18, …`, note: "The feeding days." }, { math: `lcm(4, 6) = 12`, note: "12 is the first day on both lists." }],
          predict: [null, { ask: `Feeding days start at 6. What is the next feeding day?`, parts: [{ label: "next feeding day", ans: 12 }], hint: `Add 6.` }, null],
          try: { label: "Show 6 and 4", lab: "a:6,b:4" },
          link: `It is the buses from the walk again: list the multiples and take the first one on both lists. 4 × 6 = 24 is a shared day too, but not the first.` },
        { task: "Cutting ribbon or boards into equal pieces with no waste", check: { q: `Two boards are 60 cm and 42 cm long. You cut both into equal pieces, as long as possible, with nothing left over. How long is each piece, and how many pieces do you get?`, parts: [{ label: "piece (cm)", ans: 6 }, { label: "pieces", ans: 17 }], hint: `Run the Euclidean algorithm on 60 and 42. Then divide each board by the GCF.` }, figure: "60 cm and 42 cm",
          demo: { kind: "bar", parts: [42, 18], labels: ["one 42 cm piece", "18 cm left"], cap: "cm board", alt: "A 60 cm board holds one 42 cm length, leaving 18 cm." },
          lines: [{ math: `60 = 42 × 1 + 18`, note: "One 42 cm length fits in 60, with 18 cm left." }, { math: `42 = 18 × 2 + 6`, note: "Two 18 cm lengths fit in 42, with 6 cm left." }, { math: `18 = 6 × 3 + 0`, note: "Remainder 0: the GCF is 6 cm." }, { math: `60 ÷ 6 + 42 ÷ 6 = 10 + 7 = 17`, note: "10 pieces from one board and 7 from the other." }],
          predict: [null, { ask: `42 = 18 × 2 + ? What is the remainder?`, parts: [{ label: "remainder", ans: 6 }], hint: `18 × 2 = 36.` }, null, null],
          try: { label: "Show 60 and 42", lab: "a:60,b:42" },
          link: `Steps 1 to 4 in full: each line hands its divisor and remainder to the next, like the strips in the model.` },
        { task: "Buying packs of two items so the counts match", check: { q: `Juice boxes come 9 to a pack and snack bars 12 to a pack. You want the same number of each, as few as possible. How many of each, and how many packs of each?`, parts: [{ label: "of each", ans: 36 }, { label: "juice packs", ans: 4 }, { label: "snack bar packs", ans: 3 }], hint: `lcm(12, 9) = 12 × 9 ÷ gcd(12, 9).` }, figure: "9 and 12 a pack",
          demo: { kind: "array", rows: 4, cols: 9, unit: "juice box", alt: "Four packs of 9 juice boxes, one row each, make 9, 18, 27 and then 36." },
          lines: [{ math: `12 = 9 × 1 + 3, &nbsp; 9 = 3 × 3 + 0`, note: "The GCF is 3." }, { math: `12 × 9 = 108`, note: "A shared amount, but not the smallest." }, { math: `108 ÷ 3 = 36`, note: "Divide by the GCF: the LCM is 36." }, { math: `36 ÷ 9 = 4, &nbsp; 36 ÷ 12 = 3`, note: "4 packs of juice boxes and 3 packs of snack bars." }],
          predict: [null, null, { ask: `What is 108 ÷ 3?`, parts: [{ label: "108 ÷ 3", ans: 36 }], hint: `99 ÷ 3 = 33, and 9 ÷ 3 = 3.` }, null],
          try: { label: "Show 12 and 9", lab: "a:12,b:9" },
          link: `Step 5: divide the product by the GCF, as in the last line of the bus walk.` }
      ]
    },
    formal: {
      question: { text: "What are gcd and lcm, exactly?", sub: `You can find the biggest shared piece and the first shared multiple. Here are the words a textbook uses for both, and how to write a GCF and LCM problem out in full.`,
        figure: { sym: `gcd(<i>a</i>, <i>b</i>)`, value: "6", cap: "the greatest common divisor", echo: "gcf" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>d</i> | <i>a</i>`, term: "Divisor (factor)", def: `A nonzero integer <i>d</i> divides <i>a</i>, written <span class="m"><i>d</i> | <i>a</i></span>, when <span class="m"><i>a</i> = <i>dk</i></span> for some integer <i>k</i>. Then <i>a</i> is a multiple of <i>d</i>.`, was: "a number that splits another with nothing left over" },
        { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>)`, term: "Greatest common divisor", def: `For integers <i>a</i>, <i>b</i> not both 0, the largest integer that divides both. School texts call it the greatest common factor (GCF).`, was: "the biggest piece that fits both; the amber square" },
        { c: "c4", sym: `lcm(<i>a</i>, <i>b</i>)`, term: "Least common multiple", def: `For nonzero integers <i>a</i>, <i>b</i>, the smallest positive integer that both divide.`, was: "the first number on both lists" },
        { c: "c2", sym: `<i>a</i> = <i>bq</i> + <i>r</i>`, term: "Division algorithm", def: `For integers <i>a</i> and <i>b</i> &gt; 0 there are unique integers <i>q</i> and <i>r</i> with <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> and <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>: the quotient and the remainder.`, was: "how many squares fit, and the strip left over" },
        { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>) = gcd(<i>b</i>, <i>r</i>)`, term: "Euclidean algorithm", def: `Repeat the division algorithm, replacing <span class="m">(<i>a</i>, <i>b</i>)</span> by <span class="m">(<i>b</i>, <i>r</i>)</span>, until the remainder is 0. The last nonzero remainder is <span class="m">gcd(<i>a</i>, <i>b</i>)</span>.`, was: "cut squares, keep the leftover" },
        { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>) = 1`, term: "Relatively prime (coprime)", def: `Integers whose only common positive divisor is 1. For coprime positive integers, <span class="m">lcm(<i>a</i>, <i>b</i>) = <i>ab</i></span>.`, was: "gears where every tooth meets every tooth" },
        { c: "c4", sym: `gcd · lcm = <i>ab</i>`, term: "Product identity", def: `For positive integers, <span class="m">gcd(<i>a</i>, <i>b</i>) · lcm(<i>a</i>, <i>b</i>) = <i>ab</i></span>, because for each prime the smaller and the larger exponent add up to the two exponents.`, was: "divide the product by the GCF" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“A common factor” and “the greatest common factor” of 24 and 18 are different answers. <b>One word decides which number is right.</b></p><ul class="why-chips"><li>common factors: 1, 2, 3, 6</li><li>the greatest: <b>6</b></li><li>the least common multiple: <b>72</b>, not 432</li></ul><p>Exact words let you read any book, follow a proof, and write an answer <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers use a common divisor or multiple that is not the extreme one, or read the wrong number from the algorithm.`,
      setupIntro: `<p>The two buses from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a GCF and LCM problem", items: [
        { say: `<b>Name the quantities.</b> Give each period a letter and its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 24</span> min, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 18</span> min, &nbsp;<span class="m"><i>t</i></span> = minutes until both leave together` },
        { say: `<b>Translate the condition.</b> Both buses leave at <i>t</i> exactly when <i>t</i> is a positive multiple of both periods; the next time is the smallest such <i>t</i>.`, math: `<span class="m"><i>t</i> = <span class="c4">lcm(<i>a</i>, <i>b</i>)</span></span>` },
        { say: `<b>Justify the method.</b> Each division step keeps the same common divisors, because <span class="m">gcd(<i>a</i>, <i>b</i>) = gcd(<i>b</i>, <i>r</i>)</span>.`, math: `<span class="m">gcd(24, 18) = gcd(18, 6) = gcd(6, 0) = <span class="c1">6</span></span>` },
        { say: `<b>Compute.</b> Use the product identity <span class="m">gcd · lcm = <i>ab</i></span>.`, math: `<span class="m"><i>t</i> = 24 × 18 ÷ 6 = 432 ÷ 6 = <span class="c4">72</span></span>` },
        { say: `<b>Check by prime factors.</b> The lcm takes the larger exponent of each prime, the gcd the smaller.`, math: `<span class="m">24 = 2³ · 3, &nbsp;18 = 2 · 3², &nbsp;lcm = 2³ · 3² = 72, &nbsp;gcd = 2 · 3 = 6</span>` },
        { say: `<b>Answer in a sentence</b> with units.`, math: `The buses next leave together 72 minutes after 7:00 a.m., at 8:12 a.m.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the quantities, run the Euclidean algorithm, and use gcd × lcm = <i>ab</i>. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can find the GCF and LCM the formal way.",
      checks: [
        { hint: `List the factors of 12 and of 18. Which is the largest number on both lists?`, parts: [{ label: "bags", ans: 6 }] },
        { hint: `Divide 6 × 8 by gcd(6, 8).`, parts: [{ label: "plates and cups", ans: 24 }] },
        { hint: `<span class="m">15 = 9 × 1 + 6</span>, <span class="m">9 = 6 × 1 + 3</span>, <span class="m">6 = 3 × 2 + 0</span>. Divide 9 × 15 by that GCF.`, parts: [{ label: "minutes", ans: 45 }] },
        { hint: `Start with <span class="m">252 = 198 × 1 + 54</span> and keep going until the remainder is 0. Then use <span class="m">lcm = 252 × 198 ÷ gcd</span>.`, parts: [{ label: "gcd (cm)", ans: 18 }, { label: "lcm", ans: 2772 }] },
        { hint: `<span class="m"><i>t</i> = lcm(15, 25)</span>. Find gcd(15, 25) first.`, parts: [{ label: "t (seconds)", ans: 75 }] }
      ]
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
    { wrong: `Giving 3 as the GCF of 24 and 18, because 3 divides both`, fix: `3 is a common factor, but 6 is greater. 6 also divides both: <span class="m">24 = 6 × 4</span> and <span class="m">18 = 6 × 3</span>.` },
    { wrong: `Mixing up GCF and LCM: answering 24 for the GCF of 6 and 8`, fix: `The GCF is never larger than the smaller number. The LCM is never smaller than the larger number.` },
    { wrong: `Using the larger exponents for the GCF`, fix: `The GCF takes the smaller exponent of each shared prime. The LCM takes the larger exponent of every prime present.` },
    { wrong: `Reporting the last quotient as the GCF: reading <span class="m">147 = 21 × 7 + 0</span> and answering 7`, fix: `The GCF is the last nonzero remainder, which is the divisor in the line ending in + 0. Here it is 21.` }
  ],
  practice: [
    { ctx: "Gifts", q: `You have 12 pens and 18 notebooks and want identical gift bags with nothing left over. What is the largest number of bags, <span class="m">gcd(12, 18)</span>?`, a: `<span class="m">6</span> bags. The common factors are 1, 2, 3, 6, and each bag gets 2 pens and 3 notebooks.` },
    { ctx: "Party", q: `Plates come in packs of 6 and cups in packs of 8. What is the smallest equal number of plates and cups you can buy, <span class="m">lcm(6, 8)</span>?`, a: `<span class="m">24</span>. 6 × 8 ÷ gcd(6, 8) = 48 ÷ 2 = 24: 4 packs of plates and 3 packs of cups.` },
    { ctx: "Running", q: `Two runners start together at the start line. One laps the track every 9 minutes and the other every 15 minutes. After how many minutes do they next cross the start line together?`, a: `<span class="m">lcm(9, 15) = 9 × 15 ÷ gcd(9, 15) = 135 ÷ 3 = 45</span>. They cross together after <b>45</b> minutes.` },
    { ctx: "Woodworking", q: `Two boards are 252 cm and 198 cm long. Use the Euclidean algorithm to find the longest equal pieces that cut both with no waste, <span class="m">gcd(252, 198)</span>, then find <span class="m">lcm(252, 198)</span>.`, a: `gcd = 18 cm: 252 = 198 × 1 + 54, 198 = 54 × 3 + 36, 54 = 36 × 1 + 18, 36 = 18 × 2 + 0. lcm = 252 × 198 ÷ 18 = 2,772.` },
    { ctx: "Safety lights", q: `Write an equation with a letter for the unknown, then solve: two warning lights flash together, then one flashes every 15 seconds and the other every 25 seconds. Let <i>t</i> be the number of seconds until they next flash together.`, a: `<span class="m"><i>t</i> = lcm(15, 25) = 15 × 25 ÷ gcd(15, 25) = 375 ÷ 5 = 75</span>. They flash together again after <b>75 seconds</b>.` }
  ],
  origin: `The Euclidean algorithm appears in Euclid's <i>Elements</i>, Book VII, Propositions 1 and 2 (around 300 BCE), described as repeatedly subtracting the smaller number from the larger.`
};
