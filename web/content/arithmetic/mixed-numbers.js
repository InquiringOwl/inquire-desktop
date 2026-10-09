window.ARITH = window.ARITH || {};

ARITH["mixed-numbers"] = {
  title: "Mixed Numbers & Improper Fractions",
  short: "Two ways to write amounts bigger than one",
  grade: "Grades 4–5",
  hours: 3,
  voice: "plain",
  eyebrow: "Fractions · amounts greater than one",
  hero: `<span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>w</i></span> × <span class="c2"><i>d</i></span> + <span class="c3"><i>r</i></span></span><span class="c2"><i>d</i></span></span></span>`,
  lede: `A mixed number is a whole number plus a proper fraction. It names the same amount as an improper fraction, and the division algorithm converts one form into the other.`,
  plain: `<p>Many measurements are more than one whole but not a whole number: a 1 1/2-inch pipe, 2 3/4 cups of flour. A <b>mixed number</b> writes such an amount as a whole number plus a proper fraction. <span class="m">2 <span class="fr"><span>3</span><span>4</span></span></span> cups means 2 full cups and 3 quarters of another.</p>
<p>The same amount can be counted in pieces only. Each cup holds 4 quarters, so 2 cups hold 8 quarters, and 3 more make 11. That is <span class="m"><span class="fr"><span>11</span><span>4</span></span></span>, an <b>improper fraction</b>, because its numerator is at least as large as its denominator. Going back is a division: 11 ÷ 4 = 2 remainder 3, so 2 whole cups and 3 quarters.</p>
<p>Both forms name the same number. Mixed numbers are quicker to picture and to measure out. Improper fractions are simpler to multiply and divide.</p>`,
  formal: `<p>A fraction <span class="m"><span class="fr"><span><i>n</i></span><span><i>d</i></span></span></span> with <span class="m"><i>n</i> ≥ <i>d</i> &gt; 0</span> is <b>improper</b>. By the division algorithm, <span class="m"><i>n</i> = <i>dw</i> + <i>r</i></span> with integers <span class="m"><i>w</i> ≥ 1</span> and <span class="m">0 ≤ <i>r</i> &lt; <i>d</i></span>, so</p>
<div class="display"><span class="m"><span class="fr"><span><i>n</i></span><span><span class="c2"><i>d</i></span></span></span> = <span class="c1"><i>w</i></span> + <span class="fr"><span><span class="c3"><i>r</i></span></span><span><span class="c2"><i>d</i></span></span></span></span>, written <span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span></span><br><span class="dim">Here, writing a whole number beside a fraction means adding them.</span></div>
<p>For a negative mixed number the sign applies to the whole amount: <span class="m">−<i>w</i> <span class="fr"><span><i>r</i></span><span><i>d</i></span></span> = −(<i>w</i> + <span class="fr"><span><i>r</i></span><span><i>d</i></span></span>)</span>. The fraction part is in lowest terms when <span class="m">gcd(<i>r</i>, <i>d</i>) = 1</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>w</i>`, name: "Whole part", desc: "How many full wholes there are. It is the quotient n ÷ d: the amber pies in the model." },
    { c: "c3", sym: `<i>r</i>`, name: "Leftover numerator", desc: "The pieces left over after the wholes. It is the remainder, always less than d: the pink slices." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal pieces make one whole. It stays the same in both forms." }
  ],
  steps: { title: "How to convert between the two forms", items: [
    `Mixed to improper: multiply the whole part by the denominator.`,
    `Add the numerator. Put the result over the same denominator.`,
    `Improper to mixed: divide the numerator by the denominator.`,
    `The quotient is the whole part. The remainder goes over the original denominator.`,
    `Simplify the fraction part if the remainder and denominator share a factor.`
  ] },
  example: {
    prompt: `A cook needs <span class="m">2 <span class="fr"><span>2</span><span>3</span></span></span> cups of broth but only has a <span class="m"><span class="fr"><span>1</span><span>3</span></span></span>-cup scoop. How many level scoops are needed?`,
    lines: [
      { math: `<span class="m"><span class="c1">2</span> <span class="fr"><span class="c3">2</span><span class="c2">3</span></span></span>`, note: "Whole part w = 2, leftover numerator r = 2, denominator d = 3." },
      { math: `<span class="m"><span class="c1">2</span> × <span class="c2">3</span> = 6</span>`, note: "Each whole cup holds 3 thirds, so 2 cups hold 6 thirds." },
      { math: `<span class="m">6 + <span class="c3">2</span> = 8</span>`, note: "Add the 2 extra thirds." },
      { math: `<span class="m"><span class="c1">2</span> <span class="fr"><span class="c3">2</span><span class="c2">3</span></span> = <span class="fr"><span>8</span><span class="c2">3</span></span></span>`, note: "Eight thirds of a cup." },
      { math: `<span class="m">8 ÷ <span class="c2">3</span> = <span class="c1">2</span> R <span class="c3">2</span></span>`, note: "Check by converting back: 2 wholes and 2 thirds." }
    ],
    answer: `The cook needs <span class="m">8</span> level <span class="m"><span class="fr"><span>1</span><span>3</span></span></span>-cup scoops.`
  },
  why: `<p>Kitchens, workshops and fabric counters write measurements as mixed numbers, while calculations work best with improper fractions. Double a recipe that calls for 1 1/2 cups by doubling only the whole part and you get 2 1/2 cups instead of 3. Converting first, <span class="m">1 <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>3</span><span>2</span></span></span>, makes every multiplication and division straightforward.</p>
<p>The conversion is a clear case of division with remainder: the quotient is the number of wholes and the remainder is what is left over. The same idea turns 150 minutes into 2 hours 30 minutes and 75 inches into 6 feet 3 inches. In algebra it reappears as polynomial division, which writes a rational expression as a polynomial plus a proper remainder term.</p>`,
  careers: [
    { role: "Carpenter", use: "Adds and cuts lengths like 3 5/8 in from a tape measure marked in fractions of an inch." },
    { role: "Baker", use: "Scales recipe amounts such as 1 1/2 cups of flour by converting to 3/2 before multiplying." },
    { role: "Tailor", use: "Buys fabric in yardages like 2 1/4 yd and works with seam allowances such as 5/8 in." },
    { role: "Plumber", use: "Works with pipe and fitting sizes such as 1 1/4 in and 1 1/2 in." },
    { role: "Landscaper", use: "Orders mulch, soil and gravel in amounts such as 3 1/2 cubic yards." }
  ],
  life: [
    "Following a recipe that calls for 1 1/2 cups",
    "Measuring a shelf or picture frame in inches",
    "Reading a child's height as 4 1/2 feet",
    "Buying fabric or rope by the yard",
    "Saying a trip takes 2 1/2 hours"
  ],
  fields: [
    { name: "Construction", use: "US lumber, fasteners and plans use mixed-number inch measurements." },
    { name: "Culinary arts", use: "Recipe quantities are written as mixed numbers of cups and spoons." },
    { name: "Textiles", use: "Patterns and fabric are measured in mixed numbers of inches and yards." }
  ],
  layers: {
    nudge: "Not yet. Multiply the whole part by the bottom number, then add the top.",
    concept: {
      lede: `How do you write an amount that is more than one whole but not a whole number? A mixed number writes the wholes first, then a fraction. You see them on tape measures, in recipes and at the fabric counter.`,
      heading: "What are mixed numbers and improper fractions?",
      question: { text: "How many wholes?", sub: `Any amount of pieces can be sorted into full wholes and a few left over. Watch the model above do it, then try it yourself.`,
        figure: { sym: `<i>w</i>`, value: "2", cap: "whole pies", echo: "whole" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["cup", "cups", "scoop", "scoops", "pie", "pies", "slice", "slices", "piece", "pieces", "third", "thirds", "fourth", "fourths", "quarter", "quarters", "half", "halves", "eighth", "eighths", "loaves", "boards", "strips", "pipe"],
      walk: { title: "Convert it together: 2 2/3 cups of broth",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A soup needs <span class="m">2 <span class="fr"><span>2</span><span>3</span></span></span> cups of broth. Your only scoop holds <span class="m"><span class="fr"><span>1</span><span>3</span></span></span> cup. How many level scoops do you pour?`,
        demo: { kind: "fraction", n: 8, d: 3, mixed: true, cap: "cups of broth", alt: "Three bars, each one cup cut into 3 thirds. Thirds fill one at a time: 3 fill the first cup, 6 fill two cups, then 2 more make 8 thirds, shown as 2 2/3." },
        lines: [
          { math: `2 <span class="fr"><span>2</span><span>3</span></span> cups`, note: `Each bar is one cup, cut into 3 equal thirds. One scoop fills one third.`, frame: 0 },
          { math: `1 cup = 3 thirds`, note: `It takes 3 scoops to fill one cup.`, frame: 3 },
          { math: `2 × 3 = 6 thirds`, note: `Two full cups take 6 scoops. That is the whole part times the bottom number.`, frame: 6 },
          { math: `6 + 2 = 8 thirds`, note: `Add the 2 extra thirds. That makes 8 scoops in all.`, frame: 8 },
          { math: `2 <span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>8</span><span>3</span></span>`, note: `Same amount, two names. <span class="fr"><span>8</span><span>3</span></span> is an improper fraction: its top is bigger than its bottom.`, frame: 9 },
          { math: `2 × 2 + 3 = 7`, note: `A common slip multiplies the whole part by the top number. 7 scoops leaves you a third of a cup short.`, frame: 7 },
          { math: `8 ÷ 3 = 2 R 2`, note: `Check by going back. 8 thirds fill 2 cups with 2 thirds left over: <span class="m">2 <span class="fr"><span>2</span><span>3</span></span></span> cups.`, frame: 9 }
        ],
        predict: [null,
          { ask: `How many <span class="m"><span class="fr"><span>1</span><span>3</span></span></span>-cup scoops fill one whole cup?`, parts: [{ label: "scoops per cup", ans: 3 }], hint: `The bottom number says how many pieces fill one whole.` },
          { ask: `Now fill both whole cups. How many scoops is that so far?`, parts: [{ label: "scoops", ans: 6 }], hint: `Each cup takes 3 scoops. There are 2 cups.` },
          { ask: `You have 6 scoops for the 2 full cups. What do you add?`, choices: [
            { t: "2, the extra thirds", ok: true },
            { t: "3, the bottom number", why: "3 names the size of a piece. You add the pieces you still need, and that is 2." },
            { t: "Nothing, 6 scoops is enough", why: "6 scoops fill only the 2 whole cups. The recipe asks for 2 more thirds." }
          ], hint: `Look at the top number of the fraction part.` },
          null,
          { ask: `A friend works it as 2 × 2 + 3 = 7 scoops. What went wrong?`, choices: [
            { t: "It multiplied by the top 2, not the 3 thirds in a cup", ok: true },
            { t: "Nothing, 8 counts one scoop too many", why: "Count the bars: 2 full cups are 6 thirds, and 2 more make 8." },
            { t: "It should add instead: 2 + 2 + 3", why: "That also gives 7. Each whole cup is 3 scoops, so the 2 cups need multiplying by 3." }
          ], hint: `How many thirds are in one whole cup?` }],
        answer: `You pour 8 level scoops, because <span class="m">2 <span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>8</span><span>3</span></span></span> cups.` },
      ideas: [
        { c: "c2", title: "The bottom number names the piece", term: "denominator", text: `A fourth is one of 4 equal pieces. The bottom number says how many pieces fill one whole.`,
          demo: { kind: "fraction", n: 3, d: 4, alt: "One bar cut into 4 equal parts. Three parts shade one at a time, then 3/4 shows." }, try: { label: "Cut each pie into 6", lab: "numerator:11,denominator:6" } },
        { c: "c1", title: "Full wholes come first", term: "whole part", text: `Group the pieces into full wholes. Every 4 fourths make 1 whole, so 11 fourths fill 2 wholes.`,
          demo: { kind: "fraction", n: 11, d: 4, mixed: true, alt: "Three bars cut into fourths. Eleven fourths fill two whole bars and 3 parts of the third, shown as 2 3/4." }, try: { label: "Show 11 fourths", lab: "numerator:11,denominator:4" } },
        { c: "c3", title: "Leftovers stay a fraction", term: "remainder", text: `Pieces that can't fill another whole stay as a fraction. There are always fewer of them than the bottom number.`,
          demo: { kind: "fraction", n: 7, d: 3, mixed: true, alt: "Three bars cut into thirds. Seven thirds fill two whole bars with 1 third left over, shown as 2 1/3." }, try: { label: "Show 7 thirds", lab: "numerator:7,denominator:3" } },
        { c: "c1", title: "One amount, two names", term: "improper fraction", text: `<span class="m"><span class="fr"><span>5</span><span>2</span></span></span> counts only pieces. <span class="m">2 <span class="fr"><span>1</span><span>2</span></span></span> counts wholes, then pieces. Both name the same amount.`,
          demo: { kind: "fraction", n: 5, d: 2, mixed: true, alt: "Three bars cut into halves. Five halves fill two whole bars and half of the third, shown as 2 1/2." }, try: { label: "Show 5 halves", lab: "numerator:5,denominator:2" } }
      ],
      timelineTitle: "People wrote wholes and pieces long before the fraction bar",
      timelineLead: `For thousands of years, people have written an amount as full wholes plus a piece. It is the amber pies and pink slices you see in the model.`,
      timeline: [
        { when: "About 1550 BCE", what: `The scribe Ahmes copies the Rhind papyrus in Egypt. Answers above one are a whole number plus pieces, such as 16 + 1/2 + 1/8.` },
        { when: "About 628 and 1150", what: `In India, Brahmagupta and later Bhaskara write one number above another, with no bar. A whole number sits on one line, its fraction on the next.` },
        { when: "About 1200", what: `The horizontal fraction bar first appears, in the work of the Moroccan mathematician al-Hassar.` },
        { when: "1200s", what: `Leonardo of Pisa (Fibonacci) is the first European to use the bar as we do. Following Arab practice, he writes the fraction before the whole number.` }
      ],
      history: `<p><b>The problem.</b> Sharing goods rarely comes out even. The Egyptian Rhind Mathematical Papyrus, copied by the scribe Ahmes around 1550 BCE from an older text, works problems such as dividing loaves among 10 men. Apart from 2/3, its fractions are unit fractions such as 1/2 and 1/8, and an answer above one is written as a whole number plus unit fractions, for example 16 + 1/2 + 1/8.</p>
<p><b>The solution.</b> Indian mathematicians, including Brahmagupta (about 628 CE) and Bhaskara (about 1150), wrote a fraction as one number above another without a bar, and wrote a whole number on one line with its fraction on the next. The horizontal bar is first found around 1200 in the work of al-Hassar, a Moroccan mathematician. In the 13th century Leonardo of Pisa (Fibonacci) became the first European to use the bar as we do today, and, following Arab practice, he wrote the fraction to the left of the whole number.</p>
<p><b>What it changed.</b> Merchants, builders and cooks could record any measured amount in one compact expression and still compute with it. Mixed numbers remain everywhere inches, cups and yards are used, as on a US tape measure marked in sixteenths. The idea of an improper fraction came later, and school algebra settled on it for calculating, which is why both forms, and the switch between them, are worth knowing.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Fraction: history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fraction" },
        { title: "Earliest Uses of Symbols for Fractions (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/fractions/" },
        { title: "Al-Hassar (Wikipedia)", url: "https://en.wikipedia.org/wiki/Al-Hassar" }
      ],
      matters: { title: "Why two names for one amount", text: `<p>Most amounts in a kitchen or a workshop are <b>more than one whole</b> and less than the next. Mixed numbers are how people say them.</p><ul class="why-chips"><li><b>Measuring</b> uses mixed numbers</li><li><b>Calculating</b> uses improper fractions</li><li><b>Switching</b> links the two</li></ul><p>You read <b>2 3/4 cups</b> off a recipe, but you scale it as 11 quarters. Being able to <b>switch both ways</b> keeps the amount the same while the job changes.</p>` },
      stakes: { title: "Where mixed numbers go wrong", lead: `Most slips forget that 2 3/4 means 2 plus 3/4.`, items: [
        { role: "Converting", text: `Writing <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> as 3 × 1 + 4 = 7 quarters. It is 3 × 4 + 1 = 13 quarters. The model shows how short 7 quarters falls.` },
        { role: "Kitchen", text: `Doubling 1 1/2 cups by doubling only the 1. That gives 2 1/2 cups, but the right amount is 3.` },
        { role: "Adding", text: `Leaving a total as <span class="m">2 <span class="fr"><span>6</span><span>4</span></span></span> cups. The 6 quarters hold another whole, so it is <span class="m">3 <span class="fr"><span>1</span><span>2</span></span></span> cups.` },
        { role: "Reading", text: `Taking <span class="m">2 <span class="fr"><span>3</span><span>4</span></span></span> as 2 × <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>4</span></span>. A mixed number is a sum: 2 + <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>11</span><span>4</span></span>.` }
      ], try: { label: "Show the wrong 7 quarters", lab: "numerator:7,denominator:4" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Carpenter", figure: "6 3/8 in", scene: `Two strips of 3 5/8 in and 2 3/4 in sit side by side. In eighths: <span class="m">29/8 + 22/8 = 51/8 = 6 3/8</span> in.`, takeaway: "Converting to eighths matches the marks on the tape, so the sum can be read straight off it." },
        { role: "Baker", figure: "4 1/2 cups", try: { label: "Show 9 halves", lab: "numerator:9,denominator:2" }, scene: `A loaf needs 1 1/2 cups of flour. For 3 loaves: <span class="m">3/2 × 3 = 9/2 = 4 1/2</span> cups.`, takeaway: "Multiplying the improper fraction scales the whole amount, including the half cup." },
        { role: "Tailor", figure: "2 1/2 yd", try: { label: "Show 20 eighths", lab: "numerator:20,denominator:8" }, scene: `Each of 4 cushion covers takes 5/8 yd of fabric. Total: <span class="m">4 × 5/8 = 20/8 = 2 4/8 = 2 1/2</span> yd.`, takeaway: "The store sells by the yard, so the improper total has to become a mixed number to order." },
        { role: "Plumber", figure: "6 3/4 ft", scene: `A run needs 3 pieces of pipe, each 2 1/4 ft. <span class="m">3 × 9/4 = 27/4 = 6 3/4</span> ft, so one 10 ft length covers it with <span class="m">3 1/4</span> ft to spare.`, takeaway: "Knowing the leftover tells you whether one length of pipe is enough." },
        { role: "Landscaper", figure: "7 scoops", try: { label: "Show 7 halves", lab: "numerator:7,denominator:2" }, scene: `Beds need 3 1/2 cubic yards of mulch, delivered in 1/2-cubic-yard scoops. <span class="m">3 1/2 = 7/2</span>, so the loader makes 7 scoops.`, takeaway: "Counting in the delivery unit is exactly the conversion to an improper fraction." }
      ]
    },
    build: {
      lede: `To write a mixed number as an improper fraction, multiply the whole part by the denominator and add the numerator. To go back, divide and keep the remainder over the same denominator.`,
      task: { text: "Switch between the two forms.", sub: `The same five steps turn 2 2/3 cups into 8 scoops and back again. Try each one in the model above as you go.`,
        figure: { sym: `<i>r</i>`, value: "3", cap: "leftover slices in the model", echo: "rem" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above draws the fraction as pies. Cyan lines cut each pie into equal slices, as many as the <span class="c2">denominator</span>. Slices that fill <span class="c1">whole pies</span> are amber. The <span class="c3">leftover</span> slices in the last pie are pink. The readout shows the division that turns the improper fraction into a mixed number, and the multiplication that turns it back.</p>`,
      keyTry: [{ label: "Show 3 whole pies", lab: "numerator:12,denominator:4" }, { label: "Leave 1 slice over", lab: "numerator:13,denominator:4" }, { label: "Cut pies into 8", lab: "numerator:11,denominator:8" }],
      objects: ["cup", "cups", "scoop", "scoops", "pie", "pies", "slice", "slices", "piece", "pieces", "half", "halves", "third", "thirds", "fourth", "fourths", "quarter", "quarters", "fifth", "fifths", "sixth", "sixths", "eighth", "eighths", "hour", "hours", "minute", "minutes", "yard", "yards", "inch", "inches", "board", "boards", "wholes"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Each whole holds <i>d</i> pieces of size 1/<i>d</i>, so <i>w</i> wholes hold <i>w</i> × <i>d</i> pieces. This counts the wholes in the same piece size as the fraction part.`,
        `Once everything is counted in the same piece size, the counts can be added. The denominator names the piece size, so it stays the same.`,
        `Division asks how many full groups of <i>d</i> pieces fit into <i>n</i> pieces. Each full group is one whole.`,
        `The remainder is the pieces that could not fill another whole, so it is always less than <i>d</i>. That is what makes the fraction part proper.`,
        `A fraction part like 3/6 names the same amount as 1/2. Simplest form makes the answer quicker to read and to compare.`
      ],
      stepTry: [null, null, { label: "Show 17 fifths", lab: "numerator:17,denominator:5" }, null, { label: "Show 10 fourths", lab: "numerator:10,denominator:4" }],
      stepGoal: [
        { key: "numerator", eq: 16, text: `Fill exactly 2 whole pies cut into eighths. Set the denominator to 8, then work out the numerator.`, after: `2 × 8 = 16 slices, so <span class="m"><span class="fr"><span>16</span><span>8</span></span> = <span class="c1">2</span></span> with no slices left over.`, notYet: `Not yet. Each pie holds 8 slices. Two pies hold 2 × 8 of them.` },
        { key: "numerator", eq: 19, text: `Make the model show <span class="m">3 <span class="fr"><span>1</span><span>6</span></span></span>. Set the denominator to 6, then work out the numerator.`, after: `3 × 6 + 1 = 19, so <span class="m"><span class="c1">3</span> <span class="fr"><span>1</span><span>6</span></span> = <span class="fr"><span>19</span><span>6</span></span></span>.`, notYet: `Not yet. Multiply 3 wholes by 6 slices, then add the 1 extra slice.` },
        null,
        { key: "numerator", eq: 23, text: `Set the denominator to 5. Find the numerator that gives 4 whole pies and 3 pink slices left over.`, after: `23 ÷ 5 = <span class="c1">4</span> R <span class="c3">3</span>, so <span class="m"><span class="fr"><span>23</span><span>5</span></span> = 4 <span class="fr"><span>3</span><span>5</span></span></span>.`, notYet: `Not yet. Four pies of 5 slices is 20 slices. Add the 3 left over.` },
        null],
      matters: { title: "Why a Method Keeps the Pieces Straight", text: `<p>With small numbers you can count slices in your head. Mistakes start when the wholes pile up or the pieces get small.</p><ul class="why-chips"><li><b>Many</b> wholes</li><li><b>Small</b> pieces, like eighths</li><li><b>Going both ways</b></li></ul><p>The method is <b>the same few moves every time</b>: multiply and add to count pieces, divide to find wholes. Each direction <b>checks the other</b>.</p>` },
      bridge: `<p>The broth on the Concept tab is the everyday pattern. An amount comes as a mixed number, a tool measures in pieces, and you need the count in between. Converting gives the number of pieces. Dividing gives the number of wholes.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Following a recipe that calls for 1 1/2 cups", check: { q: `A recipe calls for <span class="m">1 <span class="fr"><span>1</span><span>2</span></span></span> cups of milk. Your measure holds <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> cup. How many times do you fill it?`, parts: [{ label: "fills", ans: 3 }], hint: `One cup holds 2 halves. Then add the extra half.` }, figure: "1/2-cup measure",
          demo: { kind: "fraction", n: 3, d: 2, mixed: true, alt: "Two bars, each one cup cut in halves. Three halves fill one at a time, shown as 1 1/2." },
          lines: [{ math: `1 × 2 = 2 halves`, note: "One full cup holds 2 halves." }, { math: `2 + 1 = 3 halves`, note: "Add the extra half." }, { math: `1 <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>3</span><span>2</span></span>`, note: "Fill the half-cup measure 3 times." }],
          predict: [null, { ask: `One cup is 2 halves. Add the extra half. How many halves in all?`, parts: [{ label: "halves", ans: 3 }], hint: `2 + 1.` }],
          try: { label: "Show 3 halves", lab: "numerator:3,denominator:2" },
          link: `Steps 1 and 2, the same moves as the broth on the Concept tab: whole part times the bottom number, then add the extra pieces.` },
        { task: "Adding lengths on a tape marked in eighths", check: { q: `Two pieces of trim are <span class="m">1 <span class="fr"><span>5</span><span>8</span></span></span> in and <span class="m">1 <span class="fr"><span>7</span><span>8</span></span></span> in long. Laid end to end, how many eighths is that? Then write it as whole inches and eighths.`, parts: [{ label: "eighths", ans: 28 }, { label: "whole inches", ans: 3 }, { label: "eighths over", ans: 4 }], hint: `Turn each length into eighths: 1 × 8 + 5, and 1 × 8 + 7. Add, then divide by 8.` }, figure: "in eighths",
          demo: { kind: "fraction", n: 28, d: 8, mixed: true, alt: "Four bars, each an inch cut into eighths. Twenty-eight eighths fill three whole inches and 4 eighths of the fourth, shown as 3 4/8." },
          lines: [{ math: `1 <span class="fr"><span>5</span><span>8</span></span> = <span class="fr"><span>13</span><span>8</span></span>`, note: "1 × 8 + 5 = 13 eighths." }, { math: `1 <span class="fr"><span>7</span><span>8</span></span> = <span class="fr"><span>15</span><span>8</span></span>`, note: "1 × 8 + 7 = 15 eighths." }, { math: `<span class="fr"><span>13</span><span>8</span></span> + <span class="fr"><span>15</span><span>8</span></span> = <span class="fr"><span>28</span><span>8</span></span>`, note: "Same piece size, so add the tops." }, { math: `28 ÷ 8 = 3 R 4`, note: "3 whole inches and 4 eighths." }, { math: `3 <span class="fr"><span>4</span><span>8</span></span> = 3 <span class="fr"><span>1</span><span>2</span></span>`, note: "4 eighths is the half-inch mark." }],
          predict: [null, { ask: `Write <span class="m">1 <span class="fr"><span>7</span><span>8</span></span></span> in eighths. How many eighths?`, parts: [{ label: "eighths", ans: 15 }], hint: `One inch is 8 eighths. Add 7 more.` }],
          link: `Steps 1 and 2 turn each length into eighths. Steps 3 to 5 turn the total back into a length you can find on the tape.` },
        { task: "Saying how long a 150-minute film is", check: { q: `A film runs 150 minutes. How many whole hours is that, and how many minutes over?`, parts: [{ label: "hours", ans: 2 }, { label: "minutes over", ans: 30 }], hint: `An hour is 60 minutes. Divide 150 by 60 and keep the remainder.` }, figure: "150 min",
          demo: { kind: "fraction", n: 10, d: 4, mixed: true, alt: "Three bars, each an hour cut into 4 quarter hours. Ten quarter hours fill two hours and 2 quarters of the third, shown as 2 2/4." },
          lines: [{ math: `150 ÷ 15 = 10 quarter hours`, note: "Count the film in quarter hours of 15 minutes." }, { math: `10 ÷ 4 = 2 R 2`, note: "4 quarter hours make an hour: 2 full hours, 2 quarters over." }, { math: `2 <span class="fr"><span>2</span><span>4</span></span> = 2 <span class="fr"><span>1</span><span>2</span></span> hours`, note: "2 quarters make a half." }, { math: `150 ÷ 60 = 2 R 30`, note: "Check in minutes: 2 hours and 30 minutes." }],
          predict: [null, { ask: `10 quarter hours, 4 to an hour. How many full hours?`, parts: [{ label: "hours", ans: 2 }], hint: `How many groups of 4 fit in 10?` }],
          link: `Divide as in step 3, keep the remainder as in step 4, then simplify as in step 5: <span class="m">2 <span class="fr"><span>2</span><span>4</span></span> = 2 <span class="fr"><span>1</span><span>2</span></span></span> hours.` },
        { task: "Buying fabric by the yard", check: { q: `A pattern calls for <span class="m"><span class="fr"><span>13</span><span>4</span></span></span> yards of fabric. The store cuts by the quarter yard. How many whole yards and how many quarters do you ask for?`, parts: [{ label: "whole yards", ans: 3 }, { label: "quarters", ans: 1 }], hint: `4 quarters make a yard. Divide 13 by 4.` }, figure: "13/4 yd",
          demo: { kind: "fraction", n: 13, d: 4, mixed: true, alt: "Four bars, each a yard cut into quarters. Thirteen quarters fill three whole yards and 1 quarter of the fourth, shown as 3 1/4." },
          lines: [{ math: `13 ÷ 4 = 3 R 1`, note: "3 full yards, 1 quarter over." }, { math: `<span class="fr"><span>13</span><span>4</span></span> = 3 <span class="fr"><span>1</span><span>4</span></span> yards`, note: "Ask for 3 and a quarter yards." }, { math: `3 × 4 + 1 = 13`, note: "Check by going back: 13 quarters." }],
          predict: [null, { ask: `After 3 full yards, how many quarters are left over?`, parts: [{ label: "quarters", ans: 1 }], hint: `3 yards use 12 quarters.` }],
          link: `Steps 3 and 4 turn the pattern's improper amount into yards and a piece, the way the broth's 8 thirds went back to 2 2/3 cups.` },
        { task: "Comparing two board lengths", check: { q: `One shelf board is <span class="m"><span class="fr"><span>11</span><span>3</span></span></span> ft long. Write that as a mixed number.`, parts: [{ label: "whole feet", ans: 3 }, { label: "thirds over", ans: 2 }], hint: `3 thirds make a foot. Divide 11 by 3.` }, figure: "11/3 ft",
          demo: { kind: "fraction", n: 11, d: 3, mixed: true, alt: "Four bars, each a foot cut into thirds. Eleven thirds fill three whole feet and 2 thirds of the fourth, shown as 3 2/3." },
          lines: [{ math: `11 ÷ 3 = 3 R 2`, note: "3 whole feet, 2 thirds over." }, { math: `<span class="fr"><span>11</span><span>3</span></span> = 3 <span class="fr"><span>2</span><span>3</span></span> ft`, note: "Now it reads like the other board, 3 1/2 ft." }, { math: `<span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>4</span><span>6</span></span>,  <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>3</span><span>6</span></span>`, note: "The whole parts match, so compare the pieces in sixths." }, { math: `3 <span class="fr"><span>2</span><span>3</span></span> &gt; 3 <span class="fr"><span>1</span><span>2</span></span>`, note: "The 11/3 ft board is longer, by 1/6 ft." }],
          predict: [null, null, { ask: `Write <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> in sixths. How many sixths?`, parts: [{ label: "sixths", ans: 4 }], hint: `Each third is 2 sixths.` }],
          link: `Write both lengths as mixed numbers with steps 3 and 4. Compare the whole parts first, then the pieces, as in practice item 4.` }
      ]
    },
    formal: {
      question: { text: "What does 2 3/4 mean, exactly?", sub: `You can switch between wholes and pieces. Here are the words a textbook uses for the same ideas, and how to write a conversion out in full.`,
        figure: { sym: `<i>n</i>`, value: "11", cap: "the numerator", echo: "numerator" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<span class="fr"><span><i>n</i></span><span><i>d</i></span></span>, <i>n</i> ≥ <i>d</i> &gt; 0`, term: "Improper fraction", def: `A fraction whose numerator is greater than or equal to its denominator, so its value is at least 1.`, was: "counting in pieces only: 8 thirds" },
        { c: "c3", sym: `<span class="fr"><span><i>r</i></span><span><i>d</i></span></span>, 0 ≤ <i>r</i> &lt; <i>d</i>`, term: "Proper fraction", def: `A fraction whose numerator is less than its denominator, so its value is less than 1 (for a positive denominator and nonnegative numerator).`, was: "the leftover slices" },
        { c: "c1", sym: `<i>w</i> <span class="fr"><span><i>r</i></span><span><i>d</i></span></span>`, term: "Mixed number", def: `The sum <span class="m"><i>w</i> + <i>r</i>/<i>d</i></span> of a positive integer and a positive proper fraction, written side by side. The juxtaposition means addition.`, was: "wholes, then pieces: 2 2/3 cups" },
        { c: "c1", sym: `<i>n</i> = <i>dw</i> + <i>r</i>`, term: "Division algorithm", def: `For integers <i>n</i> ≥ 0 and <i>d</i> &gt; 0 there are unique integers <i>w</i> and <i>r</i> with <span class="m"><i>n</i> = <i>dw</i> + <i>r</i></span> and <span class="m">0 ≤ <i>r</i> &lt; <i>d</i></span>.`, was: "divide and keep the remainder" },
        { c: "c1", sym: `<i>w</i> = ⌊<i>n</i>/<i>d</i>⌋`, term: "Quotient", def: `The integer <i>w</i> in the division algorithm: the greatest integer not exceeding <i>n</i>/<i>d</i>. It is the whole part of the mixed number.`, was: "the full pies" },
        { c: "c3", sym: `<i>r</i>`, term: "Remainder", def: `The integer <i>r</i> in the division algorithm, with <span class="m">0 ≤ <i>r</i> &lt; <i>d</i></span>. It is the numerator of the fraction part.`, was: "the pink slices left over" },
        { c: "c2", sym: `gcd(<i>r</i>, <i>d</i>) = 1`, term: "Lowest terms", def: `A fraction is in lowest terms when its numerator and denominator have no common factor greater than 1.`, was: "simplify the fraction part" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In a mixed number, writing two things side by side means <b>add</b>. In algebra, the same layout means <b>multiply</b>: <span class="m">2<i>x</i></span> is 2 × <i>x</i>.</p><ul class="why-chips"><li><span class="m">2 <span class="fr"><span>3</span><span>4</span></span> = 2 + <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>11</span><span>4</span></span></span></li><li><span class="m">2 · <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>4</span></span> = 1 <span class="fr"><span>1</span><span>2</span></span></span></li></ul><p>The two readings differ by more than a whole. That is why many algebra texts convert mixed numbers to improper fractions <b>before</b> any other step.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers forget that a mixed number is a sum. The whole part gets multiplied by the wrong number, a minus sign covers only part of it, or a regrouping stops halfway.`,
      setupIntro: `<p>The broth from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a mixed-number conversion", items: [
        { say: `<b>Name the parts.</b> Read the whole part, the leftover numerator and the denominator from the mixed number.`, math: `<span class="m"><span class="c1"><i>w</i></span> = 2</span> cups, &nbsp;<span class="m"><span class="c3"><i>r</i></span> = 2</span>, &nbsp;<span class="m"><span class="c2"><i>d</i></span> = 3</span> thirds per cup` },
        { say: `<b>Write the identity.</b> A mixed number is a sum, so it equals one fraction over <i>d</i>.`, math: `<span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span> = <i>w</i> + <span class="fr"><span><i>r</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>wd</i> + <i>r</i></span><span><i>d</i></span></span></span>` },
        { say: `<b>Justify it.</b> Multiplying by <i>d</i>/<i>d</i> = 1 writes the whole part in <i>d</i>ths, and fractions with the same denominator add by adding numerators.`, math: `<span class="m"><i>w</i> = <span class="fr"><span><i>wd</i></span><span><i>d</i></span></span></span>` },
        { say: `<b>Substitute and compute.</b>`, math: `<span class="m">2 <span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>2 · 3 + 2</span><span>3</span></span> = <span class="fr"><span>8</span><span>3</span></span></span>` },
        { say: `<b>Check with the division algorithm.</b> Dividing back must return the same whole part and remainder.`, math: `<span class="m">8 = 3 · <span class="c1">2</span> + <span class="c3">2</span></span>` },
        { say: `<b>Answer in a sentence with units.</b> Eight thirds of a cup is eight scoops of the 1/3-cup measure.`, math: `<span class="m"><i>s</i> = <span class="fr"><span>8</span><span>3</span></span> ÷ <span class="fr"><span>1</span><span>3</span></span> = 8</span> &nbsp;→ The cook needs 8 scoops.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write <span class="m"><i>n</i> = <i>dw</i> + <i>r</i></span>, then read off the whole part and the remainder. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can convert between mixed numbers and improper fractions the formal way.",
      checks: [
        { hint: `Use <span class="m"><i>wd</i> + <i>r</i></span>: 3 wholes of 4 quarters each, plus 1.`, parts: [{ label: "scoops", ans: 13 }] },
        { hint: `Divide 17 by 5. The quotient is the whole part and the remainder is the new numerator.`, parts: [{ label: "whole yards", ans: 3 }, { label: "fifths over", ans: 2 }] },
        { hint: `45 = 6 · 7 + 3. Then reduce 3/6 by the common factor 3.`, parts: [{ label: "whole feet", ans: 7 }, { label: "numerator", ans: 1 }, { label: "denominator", ans: 2 }] },
        { hint: `Write 29/7 as a mixed number first. Both boards have 4 whole metres, so compare the fraction parts.`, parts: [{ label: "whole metres in 29/7", ans: 4 }, { label: "sevenths over", ans: 1 }] },
        { hint: `Write <span class="m">5 <span class="fr"><span>1</span><span>4</span></span></span> as an improper fraction, then solve <span class="m"><span class="fr"><span>3</span><span>4</span></span><i>b</i> = <span class="fr"><span>21</span><span>4</span></span></span>.`, parts: [{ label: "beds b", ans: 7 }] }
      ]
    }
  },
  prereqWhy: {
    "fractions": "Both forms are fractions, and converting keeps the denominator while regrouping the parts."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Expressions are simplified to improper fractions, and a mixed number like 2 1/3 must be read as a sum." },
    { field: "Precalculus", why: "Polynomial long division writes an improper rational expression as a polynomial plus a proper remainder term, the same shape as a mixed number." }
  ],
  mistakes: [
    { wrong: `<span class="m">2 <span class="fr"><span>3</span><span>4</span></span> = 2 × <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>4</span></span></span>`, fix: `A mixed number is a sum: <span class="m">2 + <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>11</span><span>4</span></span></span>.` },
    { wrong: `<span class="m">3 <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>3 × 1 + 4</span><span>4</span></span> = <span class="fr"><span>7</span><span>4</span></span></span>`, fix: `Multiply the whole part by the denominator: <span class="m"><span class="fr"><span>3 × 4 + 1</span><span>4</span></span> = <span class="fr"><span>13</span><span>4</span></span></span>.` },
    { wrong: `<span class="m">−2 <span class="fr"><span>1</span><span>3</span></span> = −2 + <span class="fr"><span>1</span><span>3</span></span></span>`, fix: `The minus sign covers both parts: <span class="m">−(2 + <span class="fr"><span>1</span><span>3</span></span>) = −<span class="fr"><span>7</span><span>3</span></span></span>.` },
    { wrong: `Leaving an improper fraction inside a mixed number: <span class="m">1 <span class="fr"><span>3</span><span>4</span></span> + 1 <span class="fr"><span>3</span><span>4</span></span> = 2 <span class="fr"><span>6</span><span>4</span></span></span> cups.`, fix: `Regroup the extra whole: <span class="m"><span class="fr"><span>6</span><span>4</span></span> = 1 <span class="fr"><span>2</span><span>4</span></span> = 1 <span class="fr"><span>1</span><span>2</span></span></span>, so the total is <span class="m">3 <span class="fr"><span>1</span><span>2</span></span></span> cups.` }
  ],
  practice: [
    { ctx: "Cooking", q: `A recipe calls for <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> cups of stock and you only have a <span class="m"><span class="fr"><span>1</span><span>4</span></span></span>-cup measure. Write <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> as an improper fraction to count the scoops.`, a: `<span class="m"><span class="fr"><span>13</span><span>4</span></span></span>. 3 × 4 + 1 = 13, so <b>13</b> scoops.` },
    { ctx: "Sewing", q: `A pattern needs <span class="m"><span class="fr"><span>17</span><span>5</span></span></span> yards of ribbon. Write that as a mixed number.`, a: `<b><span class="m">3 <span class="fr"><span>2</span><span>5</span></span></span></b> yards. 17 ÷ 5 = 3 remainder 2.` },
    { ctx: "Woodworking", q: `A stack of 45 boards, each 2 inches (<span class="m"><span class="fr"><span>1</span><span>6</span></span></span> foot) thick, is <span class="m"><span class="fr"><span>45</span><span>6</span></span></span> feet tall. Write the height as a mixed number in simplest form.`, a: `<b><span class="m">7 <span class="fr"><span>1</span><span>2</span></span></span></b> feet. 45 ÷ 6 = 7 remainder 3, and 3/6 = 1/2.` },
    { ctx: "Building", q: `Which is longer: a <span class="m"><span class="fr"><span>29</span><span>7</span></span></span> m board or a <span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span> m board?`, a: `The <b><span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span></b> m board. 29/7 = 4 1/7, and 1/7 &lt; 1/3.` },
    { ctx: "Landscaping", q: `Write an equation with a letter for the unknown, then solve: a landscaper has <span class="m">5 <span class="fr"><span>1</span><span>4</span></span></span> cubic yards of soil, and each bed takes <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> cubic yard. How many beds <i>b</i> can be filled?`, a: `<span class="m"><span class="fr"><span>3</span><span>4</span></span><i>b</i> = 5 <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>21</span><span>4</span></span></span>. Multiply both sides by 4: <span class="m">3<i>b</i> = 21</span>, so <b><i>b</i> = 7 beds</b>.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) writes quantities greater than one as a whole number followed by unit fractions, such as 16 + 1/2 + 1/8.`
};
