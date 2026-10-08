window.ARITH = window.ARITH || {};

ARITH["mixed-numbers"] = {
  title: "Mixed Numbers & Improper Fractions",
  short: "Two ways to write amounts bigger than one",
  grade: "Grades 4–5",
  hours: 3,
  voice: "plain",
  eyebrow: "Fractions · amounts greater than one",
  hero: `<span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>w</i></span> × <span class="c2"><i>d</i></span> + <span class="c3"><i>r</i></span></span><span class="c2"><i>d</i></span></span></span>`,
  lede: `A mixed number is a whole number plus a proper fraction. It names the same amount as an improper fraction.`,
  plain: `<p>Many measurements are more than one whole but not a whole number: a 1 1/2-inch pipe, 2 3/4 cups of flour. A <b>mixed number</b> writes such an amount as a whole number plus a proper fraction. <span class="m">2 <span class="fr"><span>3</span><span>4</span></span></span> cups means 2 full cups and 3 quarters of another.</p>
<p>The same amount can be counted in pieces only. Each cup holds 4 quarters, so 2 cups hold 8 quarters, and 3 more make 11. That is <span class="m"><span class="fr"><span>11</span><span>4</span></span></span>, an <b>improper fraction</b>, because its numerator is at least as large as its denominator. Going back is a division: 11 ÷ 4 = 2 remainder 3, so 2 whole cups and 3 quarters.</p>
<p>Both forms name the same number. Mixed numbers are easier to picture and to measure out. Improper fractions are easier to multiply and divide.</p>`,
  formal: `<p>A fraction <span class="m"><span class="fr"><span><i>n</i></span><span><i>d</i></span></span></span> with <span class="m"><i>n</i> ≥ <i>d</i> &gt; 0</span> is <b>improper</b>. By the division algorithm, <span class="m"><i>n</i> = <i>dw</i> + <i>r</i></span> with integers <span class="m"><i>w</i> ≥ 1</span> and <span class="m">0 ≤ <i>r</i> &lt; <i>d</i></span>, so</p>
<div class="display"><span class="m"><span class="fr"><span><i>n</i></span><span><span class="c2"><i>d</i></span></span></span> = <span class="c1"><i>w</i></span> + <span class="fr"><span><span class="c3"><i>r</i></span></span><span><span class="c2"><i>d</i></span></span></span></span>, written <span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span></span><br><span class="dim">Juxtaposition here means addition, not multiplication.</span></div>
<p>For a negative mixed number the sign applies to the whole amount: <span class="m">−<i>w</i> <span class="fr"><span><i>r</i></span><span><i>d</i></span></span> = −(<i>w</i> + <span class="fr"><span><i>r</i></span><span><i>d</i></span></span>)</span>. The fraction part is in lowest terms when <span class="m">gcd(<i>r</i>, <i>d</i>) = 1</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>w</i>`, name: "Whole part", desc: "How many complete wholes there are. It is the quotient n ÷ d." },
    { c: "c3", sym: `<i>r</i>`, name: "Leftover numerator", desc: "The parts left over after the wholes. It is the remainder, always less than d." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal parts make one whole. It stays the same in both forms." }
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
    concept: {
      lede: `Mixed numbers answer a practical question: how do you write an amount that is more than one whole but not a whole number? You meet them on tape measures, in recipes and at the fabric counter.`,
      heading: "What are mixed numbers and improper fractions?",
      history: `<p><b>The problem.</b> Sharing goods rarely comes out even. The Egyptian Rhind Mathematical Papyrus, copied by the scribe Ahmes around 1550 BCE from an older text, works problems such as dividing loaves among 10 men. Its scribes had no general fraction a/b: apart from 2/3 they used unit fractions such as 1/2 and 1/8, and wrote an answer above one as a whole number plus unit fractions, for example 16 + 1/2 + 1/8.</p>
<p><b>The solution.</b> Indian mathematicians, including Brahmagupta (about 628 CE) and Bhaskara (about 1150), wrote a fraction as one number above another without a bar, and Indian works wrote a whole number on one line with its fraction below it. Around 1200 the horizontal bar appears in the work of al-Hassar, from Fez in Morocco. In the 13th century Leonardo of Pisa (Fibonacci) brought the bar to Europe and, following Arab practice, wrote the fraction to the left of the whole number.</p>
<p><b>What it changed.</b> Merchants, builders and cooks could record any measured amount in one compact expression and still compute with it. Mixed numbers remain everywhere inches, cups and yards are used, as on a US tape measure marked in sixteenths. School algebra later settled on improper fractions for calculating, which is why both forms, and the switch between them, are worth knowing.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Fraction: history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fraction" },
        { title: "Earliest Uses of Symbols for Fractions (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/fractions/" }
      ],
      examples: [
        { role: "Carpenter", scene: `Two strips of 3 5/8 in and 2 3/4 in sit side by side. In eighths: <span class="m">29/8 + 22/8 = 51/8 = 6 3/8</span> in.`, takeaway: "Converting to eighths matches the marks on the tape, so the sum can be read straight off it." },
        { role: "Baker", scene: `A loaf needs 1 1/2 cups of flour. For 3 loaves: <span class="m">3/2 × 3 = 9/2 = 4 1/2</span> cups.`, takeaway: "Multiplying the improper fraction scales the whole amount, including the half cup." },
        { role: "Tailor", scene: `Each of 4 cushion covers takes 5/8 yd of fabric. Total: <span class="m">4 × 5/8 = 20/8 = 2 4/8 = 2 1/2</span> yd.`, takeaway: "The store sells by the yard, so the improper total has to become a mixed number to order." },
        { role: "Plumber", scene: `A run needs 3 pieces of pipe, each 2 1/4 ft. <span class="m">3 × 9/4 = 27/4 = 6 3/4</span> ft, so one 10 ft length covers it with <span class="m">3 1/4</span> ft to spare.`, takeaway: "Knowing the leftover tells you whether one length of pipe is enough." },
        { role: "Landscaper", scene: `Beds need 3 1/2 cubic yards of mulch, delivered in 1/2-cubic-yard scoops. <span class="m">3 1/2 = 7/2</span>, so the loader makes 7 scoops.`, takeaway: "Counting in the delivery unit is exactly the conversion to an improper fraction." }
      ]
    },
    build: {
      lede: `To write a mixed number as an improper fraction, multiply the whole part by the denominator and add the numerator. To go back, divide and keep the remainder over the same denominator.`,
      intro: `<p>The model above draws the fraction as pies cut into equal slices by cyan lines, one slice for each step of the <span class="c2">denominator</span>. Slices that fill <span class="c1">whole pies</span> are amber; the <span class="c3">leftover</span> slices in the last pie are pink. The readout shows the division that turns the improper fraction into a mixed number and the multiplication that turns it back.</p>`,
      stepWhy: [
        `Each whole holds <i>d</i> pieces of size 1/<i>d</i>, so <i>w</i> wholes hold <i>w</i> × <i>d</i> pieces. This counts the wholes in the same piece size as the fraction part.`,
        `Once everything is counted in the same piece size, the counts can be added. The denominator names the piece size, so it stays the same.`,
        `Division asks how many full groups of <i>d</i> pieces fit into <i>n</i> pieces. Each full group is one whole.`,
        `The remainder is the pieces that could not fill another whole, so it is always less than <i>d</i>. That is what makes the fraction part proper.`,
        `A fraction part like 3/6 names the same amount as 1/2. Simplest form makes the answer quicker to read and to compare.`
      ],
      bridge: `<p>The broth problem is the everyday pattern: an amount given as a mixed number, a tool that measures in fractions, and a count of pieces in between. Converting to an improper fraction tells you how many pieces. Dividing tells you how many wholes.</p>`,
      tasks: [
        { task: "Following a recipe that calls for 1 1/2 cups with a 1/2-cup measure", link: `Steps 1 and 2: 1 × 2 + 1 = 3 halves, so fill the measure 3 times, as the cook filled the 1/3-cup scoop 8 times.` },
        { task: "Adding lengths on a tape marked in eighths", link: `Turn each length into eighths with steps 1 and 2, add, then divide back with steps 3 and 4 to read the result on the tape.` },
        { task: "Saying how long a 150-minute film is", link: `Divide as in step 3: 150 ÷ 60 = 2 remainder 30, so 2 30/60 hours, which simplifies as in step 5 to 2 1/2 hours.` },
        { task: "Buying ribbon or fabric by the yard", link: `Convert a pattern's improper amount back to yards and a fraction, as in practice item 2: 17/5 yd is 3 2/5 yd.` },
        { task: "Comparing two board lengths", link: `Write both as mixed numbers, as in practice item 4, then compare the whole parts first and the fractions second.` }
      ]
    },
    formal: {
      setup: { title: "Writing a mixed-number conversion", items: [
        { say: `<b>Name the parts.</b> Read the whole part, the leftover numerator and the denominator from the mixed number.`, math: `<span class="m"><span class="c1"><i>w</i></span> = 2</span> cups, &nbsp;<span class="m"><span class="c3"><i>r</i></span> = 2</span>, &nbsp;<span class="m"><span class="c2"><i>d</i></span> = 3</span> thirds per cup` },
        { say: `<b>Write the identity.</b> A mixed number is a sum, so it equals one fraction over <i>d</i>.`, math: `<span class="m"><span class="c1"><i>w</i></span> <span class="fr"><span class="c3"><i>r</i></span><span class="c2"><i>d</i></span></span> = <i>w</i> + <span class="fr"><span><i>r</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>wd</i> + <i>r</i></span><span><i>d</i></span></span></span>` },
        { say: `<b>Justify it.</b> Multiplying by <i>d</i>/<i>d</i> = 1 writes the whole part in <i>d</i>ths, and fractions with the same denominator add by adding numerators.`, math: `<span class="m"><i>w</i> = <span class="fr"><span><i>wd</i></span><span><i>d</i></span></span></span>` },
        { say: `<b>Substitute and compute.</b>`, math: `<span class="m">2 <span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>2 · 3 + 2</span><span>3</span></span> = <span class="fr"><span>8</span><span>3</span></span></span>` },
        { say: `<b>Check with the division algorithm.</b> Dividing back must return the same whole part and remainder.`, math: `<span class="m">8 = 3 · <span class="c1">2</span> + <span class="c3">2</span></span>` },
        { say: `<b>Answer in a sentence with units.</b> Eight thirds of a cup is eight scoops of the 1/3-cup measure.`, math: `<span class="m"><i>s</i> = <span class="fr"><span>8</span><span>3</span></span> ÷ <span class="fr"><span>1</span><span>3</span></span> = 8</span> &nbsp;→ The cook needs 8 scoops.` }
      ] }
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
    { ctx: "Cooking", q: `A recipe calls for <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> cups of stock and you only have a <span class="m"><span class="fr"><span>1</span><span>4</span></span></span>-cup measure. Write <span class="m">3 <span class="fr"><span>1</span><span>4</span></span></span> as an improper fraction to count the scoops.`, a: `<span class="m"><span class="fr"><span>13</span><span>4</span></span></span>. 3 × 4 + 1 = 13, so 13 scoops.` },
    { ctx: "Sewing", q: `A pattern needs <span class="m"><span class="fr"><span>17</span><span>5</span></span></span> yards of ribbon. Write that as a mixed number.`, a: `<span class="m">3 <span class="fr"><span>2</span><span>5</span></span></span> yards. 17 ÷ 5 = 3 remainder 2.` },
    { ctx: "Woodworking", q: `A stack of 45 boards, each 2 inches (<span class="m"><span class="fr"><span>1</span><span>6</span></span></span> foot) thick, is <span class="m"><span class="fr"><span>45</span><span>6</span></span></span> feet tall. Write the height as a mixed number in simplest form.`, a: `<span class="m">7 <span class="fr"><span>1</span><span>2</span></span></span> feet. 45 ÷ 6 = 7 remainder 3, and 3/6 = 1/2.` },
    { ctx: "Building", q: `Which is longer: a <span class="m"><span class="fr"><span>29</span><span>7</span></span></span> m board or a <span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span> m board?`, a: `The <span class="m">4 <span class="fr"><span>1</span><span>3</span></span></span> m board. 29/7 = 4 1/7, and 1/7 &lt; 1/3.` },
    { ctx: "Landscaping", q: `Write an equation with a letter for the unknown, then solve: a landscaper has <span class="m">5 <span class="fr"><span>1</span><span>4</span></span></span> cubic yards of soil, and each bed takes <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> cubic yard. How many beds <i>b</i> can be filled?`, a: `<span class="m"><span class="fr"><span>3</span><span>4</span></span><i>b</i> = 5 <span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>21</span><span>4</span></span></span>. Multiply both sides by 4: <span class="m">3<i>b</i> = 21</span>, so <b><i>b</i> = 7 beds</b>.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) writes quantities greater than one as a whole number followed by unit fractions, such as 2 plus 1/4.`
};
