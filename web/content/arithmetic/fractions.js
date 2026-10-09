window.ARITH = window.ARITH || {};

ARITH["fractions"] = {
  title: "Fractions & Equivalence",
  short: "Parts of a whole, and many names for one amount",
  grade: "Grades 3–4",
  hours: 8,
  voice: "plain",
  eyebrow: "Rational numbers · fractions",
  hero: `<span class="m"><span class="fr"><span class="c1"><i>n</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span> × <span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span> × <span class="c4"><i>k</i></span></span></span></span>`,
  lede: `A fraction names equal parts of a whole. Multiplying the numerator and denominator by the same nonzero number changes the name of the fraction, and the amount stays the same.`,
  plain: `<p>A <b>fraction</b> names part of a whole that has been cut into equal pieces. Cut a pizza into 8 equal slices and eat 3, and you have eaten <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> of it. The bottom number, the <b>denominator</b>, says how many equal pieces make the whole. The top number, the <b>numerator</b>, says how many of those pieces you have.</p>
<p>The same amount can have many names. On a tape measure, the mark for <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> inch is also the mark for <span class="m"><span class="fr"><span>6</span><span>8</span></span></span> and <span class="m"><span class="fr"><span>12</span><span>16</span></span></span> inch, because the smaller marks cut each quarter into 2 or 4 pieces. Fractions that name the same amount are <b>equivalent</b>. You get one from another by multiplying or dividing the top and bottom by the same number.</p>
<p>A fraction is also a division: <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> is what each person gets when 3 pizzas are shared equally by 4 people. A fraction is in <b>simplest form</b> when the top and bottom have no common factor except 1.</p>`,
  formal: `<p>For integers <i>a</i> and <i>b</i> with <span class="m"><i>b</i> ≠ 0</span>, the <b>fraction</b> <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> denotes the quotient <span class="m"><i>a</i> ÷ <i>b</i></span>: the unique number that gives <i>a</i> when multiplied by <i>b</i>. Numbers expressible this way form the <b>rational numbers</b> ℚ.</p>
<div class="display"><span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span>  ⟺  <i>ad</i> = <i>bc</i></span>  <span class="dim">(b, d ≠ 0)</span><br><span class="m"><span class="fr"><span><span class="c1"><i>n</i></span></span><span><span class="c2"><i>d</i></span></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span><span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span><span class="c4"><i>k</i></span></span></span></span>  for any <span class="m"><i>k</i> ≠ 0</span></div>
<p>A fraction <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> with <span class="m"><i>b</i> &gt; 0</span> is in <b>lowest terms</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. Every rational number has exactly one such representation.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "Numerator", desc: "How many equal parts you have. The top number." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal parts make one whole. The bottom number. It is never zero." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number you multiply the top and bottom by. In the model it cuts every part into k smaller parts. The amount stays the same." },
    { c: "c5", sym: `gcd`, name: "Simplest form", desc: "The same amount with the fewest, biggest parts. You divide the top and bottom by their greatest common factor. The green bar shows it." }
  ],
  steps: { title: "How to rename, simplify and compare fractions", items: [
    `To rename a fraction, multiply its top and bottom by the same number <span class="m c4"><i>k</i></span>.`,
    `To simplify, find the greatest common factor (GCF) of the top and bottom.`,
    `Divide both by the GCF. The result is in simplest form.`,
    `To compare two fractions, rename both with a common denominator.`,
    `With equal denominators, the fraction with the larger numerator is larger.`,
    `Or cross-multiply. For <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> and <span class="m"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with positive denominators, compare <span class="m"><i>ad</i></span> with <span class="m"><i>bc</i></span>.`
  ] },
  example: {
    prompt: `Sam and Ana each order a pizza of the same size. Sam's is cut into 4 equal slices and he eats 3. Ana's is cut into 8 equal slices and she eats 6. Who ate more pizza?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><span class="c1">3</span></span><span><span class="c2">4</span></span></span></span>`, note: "Sam ate 3 of 4 equal slices." },
      { math: `<span class="m"><span class="fr"><span><span class="c1">6</span></span><span><span class="c2">8</span></span></span></span>`, note: "Ana ate 6 of 8 equal slices. Her slices are half as wide." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>3 × <span class="c4">2</span></span><span>4 × <span class="c4">2</span></span></span> = <span class="fr"><span>6</span><span>8</span></span></span>`, note: "Cut each of Sam's slices in 2. Same amount, new name." },
      { math: `<span class="m">3 × 8 = 24 = 4 × 6</span>`, note: "The cross products are equal, so the fractions are equivalent." }
    ],
    answer: `They ate the same amount: <span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>8</span></span></span> of a pizza each.`
  },
  why: `<p>Fractions turn up whenever something is shared or measured: recipes, tape measures, medication doses, time ("a quarter past"), discounts and survey results. If you cannot tell that 12/16 inch and 3/4 inch are the same mark, a cut comes out wrong. If you cannot compare 3/4 with 4/5, you cannot tell which of two results or offers is better.</p>
<p>Fractions are the first step into the rational numbers. Ratios, percents, probability, slope and every algebraic expression with division depend on them. Adding and subtracting fractions, the next lessons, rest entirely on renaming fractions as equivalent ones with a common denominator.</p>`,
  careers: [
    { role: "Carpenter", use: "Reads tape measures marked in sixteenths and recognizes that 12/16 inch is the same as 3/4 inch." },
    { role: "Chef", use: "Scales recipes and swaps measuring cups, knowing that two 1/4 cups equal 1/2 cup." },
    { role: "Pharmacy technician", use: "Works with partial tablets and fractional doses such as 1/2 of a 50 mg tablet." },
    { role: "Machinist", use: "Converts drill and wrench sizes like 5/16 inch to find the nearest matching tool." },
    { role: "Pollster", use: "Reports survey responses as fractions of the sample and compares groups of different sizes." }
  ],
  life: [
    "Reading a ruler or tape measure",
    "Following and adjusting a recipe",
    "Sharing a pizza or a bill fairly",
    "Understanding \"half off\" or \"a third more\"",
    "Telling time with quarter and half hours"
  ],
  fields: [
    { name: "Chemistry", use: "Mole ratios and concentrations are expressed and simplified as fractions." },
    { name: "Music", use: "Note lengths are fractions of a whole note, and time signatures look like fractions." },
    { name: "Probability", use: "The chance of an event is the fraction of equally likely outcomes where it happens." },
    { name: "Construction", use: "Plans and materials are measured in fractional inches." }
  ],
  layers: {
    nudge: "Not yet. Do the same thing to the top and the bottom.",
    concept: {
      lede: `Fractions answer two questions. How much of a whole is this? And are two amounts with different names really the same?`,
      heading: "What are fractions?",
      question: { text: "How much of a whole?", sub: `A fraction names part of a whole. The model above shows 3/4 two ways, as 3/4 and as 6/8. Watch each idea happen there, then try it yourself.`,
        figure: { sym: `<i>n</i> ÷ <i>d</i>`, value: "0.75", cap: "the amount", echo: "value" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["part", "parts", "slice", "slices", "pizza", "pizzas", "piece", "pieces", "whole", "wholes", "loaf", "loaves", "cup", "cups", "inch", "tablet", "tablets", "drill", "groove", "mark", "marks", "people"],
      walk: { title: "Split it together: two pizzas",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Sam and Ana each get a pizza of the same size. Sam's is cut into 4 equal slices, and he eats 3. Ana's is cut into 8 equal slices, and she eats 6. Did Ana eat more?`,
        demo: { kind: "fraction", n: 3, d: 4, split: 2, alt: "A bar cut into 4 equal parts. Three parts shade one at a time and the bar reads 3/4. Then every part is cut in 2, and the same shaded length reads 6/8." },
        lines: [
          { math: `1 pizza = <span class="c2">4</span> slices`, note: `Here is Sam's pizza, cut into 4 equal slices. The bottom number counts them: 4.`, frame: 0 },
          { math: `<span class="fr"><span><span class="c1">3</span></span><span><span class="c2">4</span></span></span>`, note: `Sam eats 3 of the 4 slices. The top number counts the slices he ate. He ate 3/4 of his pizza.`, frame: 4 },
          { math: `3 × <span class="c4">2</span> = 6`, note: `Ana's slices are half as wide. Cut each of Sam's 3 slices in 2, and they make 6 of Ana's slices.`, frame: 5 },
          { math: `6 &gt; 3, so Ana ate more?`, note: `A quick look says Ana ate twice as much. That compares counts of slices that are different sizes.`, frame: 5 },
          { math: `<span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>3 × <span class="c4">2</span></span><span>4 × <span class="c4">2</span></span></span> = <span class="fr"><span>6</span><span>8</span></span>`, note: `Multiply the top and the bottom by the same number, 2. The name changes. The amount stays the same.`, frame: 5 },
          { math: `<span class="fr"><span><span class="c1">3</span></span><span><span class="c2">4</span></span></span> = <span class="fr"><span><span class="c1">6</span></span><span><span class="c2">8</span></span></span>`, note: `So they ate the same amount. Two names for one amount are called equivalent fractions.`, frame: 5 }
        ],
        predict: [null,
          { ask: `Sam ate 3 of 4 equal slices. Write that as a fraction.`, parts: [{ label: "top (slices eaten)", ans: 3 }, { label: "bottom (slices in the pizza)", ans: 4 }], hint: `The bottom counts the slices in the whole pizza. The top counts the ones he ate.` },
          { ask: `Each of Sam's slices is the same as 2 of Ana's. How many of Ana's slices cover Sam's 3?`, parts: [{ label: "Ana's slices", ans: 6 }], hint: `3 wide slices, each made of 2 thin ones. That is 3 groups of 2.` },
          { ask: `Ana ate 6 slices and Sam ate 3. Did Ana eat more?`, choices: [
            { t: "No. Her slices are half the size", ok: true },
            { t: "Yes, 6 is more than 3", why: "6 counts thin slices and 3 counts wide ones. You can only compare counts of parts that are the same size." },
            { t: "Yes, 8 is more than 4", why: "8 says how many slices make Ana's pizza. More slices in the same pizza means each slice is smaller." }
          ], hint: `Look at the bar after the cut. Did the shaded part get longer?` },
          { ask: `Which move renames 3/4 without changing the amount?`, choices: [
            { t: "Multiply top and bottom by 2: 6/8", ok: true },
            { t: "Add 3 to top and bottom: 6/7", why: "6/7 is more than 3/4. Adding does not cut each slice into equal smaller slices." },
            { t: "Multiply only the bottom by 2: 3/8", why: "3/8 is 3 thin slices. That is half of what Sam ate." }
          ], hint: `Cutting each slice in 2 doubles the slices eaten and the slices in the whole.` },
          null],
        answer: `Sam and Ana ate the same amount of pizza: <span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>8</span></span></span>.` },
      ideas: [
        { c: "c2", title: "The bottom counts equal parts", term: "denominator", text: `The bottom number says how many equal parts make one whole. Cut a whole into more parts, and each part gets smaller.`,
          demo: { kind: "fraction", n: 1, d: 8, alt: "A bar is cut into 8 equal parts and one part is shaded: 1/8 of the whole." }, try: { label: "Cut the whole into 8", lab: "n:1,d:8,k:1" } },
        { c: "c1", title: "The top counts parts you have", term: "numerator", text: `The top number counts the equal parts you have. Shade one more part, and the top goes up by one.`,
          demo: { kind: "fraction", n: 3, d: 8, alt: "A bar cut into 8 equal parts. Three parts shade one at a time, and the bar reads 3/8." }, try: { label: "Shade 5 of 8 parts", lab: "n:5,d:8,k:1" } },
        { c: "c4", title: "Same amount, new name", term: "equivalent fractions", text: `Cut every part into 3 smaller parts. You get 3 times as many parts and 3 times as many shaded. The amount stays put.`,
          demo: { kind: "fraction", n: 1, d: 2, split: 3, alt: "A bar cut in half with one half shaded reads 1/2. Then every part is cut into 3, and the same shaded length reads 3/6." }, try: { label: "Cut each part into 3", lab: "n:1,d:2,k:3" } }
      ],
      timelineTitle: "People have written shares for thousands of years",
      timelineLead: `Long before the bar between two numbers, people had to split loaves, land and pay into equal parts and write the share down. The top and bottom in the model are the end of that story.`,
      timeline: [
        { when: "About 1550 BCE", what: `In Egypt, the scribe Ahmes copies the Rhind papyrus. Its problems 1 to 6 share 1, 2, 6, 7, 8 and 9 loaves among 10 men. Each share is part of a loaf, like a shaded part of the bar.` },
        { when: "About 628 CE", what: `In India, Brahmagupta writes a fraction as one number above another, with no bar between them. That is the top and bottom in the model.` },
        { when: "Around 1200", what: `The bar between the top and bottom is first found in the work of al-Hassar, a mathematician in Fez, Morocco. Fibonacci uses the same bar soon after, in the 13th century.` },
        { when: "1585", what: `Simon Stevin's pamphlet <i>De Thiende</i> helps make decimal fractions an everyday tool. The model shows the decimal next to the fraction.` }
      ],
      history: `<p><b>The problem.</b> Food, pay and land rarely divide into whole units. Anyone who shared bread among workers had to say exactly how big each share was, and write it so it could be checked.</p>
<p><b>The solution.</b> The Egyptian Rhind Mathematical Papyrus, copied by the scribe Ahmes about 1550 BCE from an older text, has problems that share 1, 2, 6, 7, 8 and 9 loaves among 10 men. Egyptians wrote such shares as sums of unit fractions: 7 loaves among 10 men gives each man <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> + <span class="m"><span class="fr"><span>1</span><span>30</span></span></span> of a loaf. In India, Brahmagupta (about 628 CE) wrote a numerator above its denominator, without a bar. The horizontal bar is first found in the work of al-Hassar of Fez, active around 1200, and Fibonacci used the same notation in the 13th century.</p>
<p><b>What it changed.</b> Writing any part as one number over another made shares quick to compare, simplify and combine by fixed rules. It is the notation you read today on a tape measure, a measuring cup, a medicine label or a poll. It also led to the decimal fractions that Simon Stevin promoted for everyday calculation in 1585.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Fraction: history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fraction" }
      ],
      matters: { title: "Why fractions matter", text: `<p>Most things you share or measure do not come out in whole numbers. Fractions let you <b>name the part exactly</b>.</p><ul class="why-chips"><li><b>Measuring</b> a board or a cup</li><li><b>Sharing</b> a pizza or a bill</li><li><b>Comparing</b> two offers or two results</li></ul><p>The same amount can wear many names. Once you can <b>rename a fraction</b>, you can read any ruler, use any measuring cup, and tell which of two shares is <b>really bigger</b>.</p>` },
      stakes: { title: "Where fractions go wrong", lead: `Most fraction slips count parts and forget how big the parts are.`, items: [
        { role: "Counting slices", text: `Saying 6 slices beat 3 slices when the slices are different sizes. 6/8 and 3/4 of the same pizza are equal.` },
        { role: "Bigger bottom", text: `Reading 1/8 inch as more than 1/4 inch because 8 is more than 4. More parts means smaller parts.` },
        { role: "Adding to rename", text: `Adding 1 to the top and bottom of 2/3 to get 3/4. That is more pizza, a different amount.` },
        { role: "Medicine", text: `Giving a quarter tablet when the order says half. Half a tablet is two quarters, 2/4.` }
      ], try: { label: "Show 2/3", lab: "n:2,d:3,k:2" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Carpenter", figure: "12/16 inch", scene: `A plan calls for a <span class="m"><span class="fr"><span>3</span><span>4</span></span></span>-inch groove and the tape is marked in sixteenths. Multiplying top and bottom by 4 gives <span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>12</span><span>16</span></span></span>, so the cut goes at the 12th sixteenth mark.`, takeaway: "Renaming a fraction lets you read it on the scale you have.", try: { label: "Show 3/4 in sixteenths", lab: "n:3,d:4,k:4" } },
        { role: "Chef", figure: "2 × 1/4 cup", scene: `A recipe needs <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> cup of oil and only the <span class="m"><span class="fr"><span>1</span><span>4</span></span></span> cup measure is clean. Since <span class="m"><span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>2</span><span>4</span></span></span>, fill the <span class="m"><span class="fr"><span>1</span><span>4</span></span></span> cup twice.`, takeaway: "Equivalent fractions let any set of measures do the job.", try: { label: "Show 1/2 as quarters", lab: "n:1,d:2,k:2" } },
        { role: "Pharmacy technician", figure: "1/2 tablet", scene: `An order calls for 25 mg and the tablets are 50 mg each. The dose is <span class="m"><span class="fr"><span>25</span><span>50</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, half a tablet.`, takeaway: "Simplest form turns a ratio of milligrams into something you can hand a patient." },
        { role: "Machinist", figure: "5/16 inch", scene: `Is a <span class="m"><span class="fr"><span>5</span><span>16</span></span></span>-inch drill bigger than a <span class="m"><span class="fr"><span>9</span><span>32</span></span></span>-inch one? Rename: <span class="m"><span class="fr"><span>5</span><span>16</span></span> = <span class="fr"><span>10</span><span>32</span></span> &gt; <span class="fr"><span>9</span><span>32</span></span></span>, so yes, by <span class="m"><span class="fr"><span>1</span><span>32</span></span></span> inch.`, takeaway: "A common denominator settles which tool is larger at a glance." },
        { role: "Pollster", figure: "2/5 vs 21/50", scene: `In one sample, 240 of 600 people favour a measure. In another, 210 of 500 do. Simplify: <span class="m"><span class="fr"><span>240</span><span>600</span></span> = <span class="fr"><span>2</span><span>5</span></span> = <span class="fr"><span>20</span><span>50</span></span></span> and <span class="m"><span class="fr"><span>210</span><span>500</span></span> = <span class="fr"><span>21</span><span>50</span></span></span>, so the second group's share is higher.`, takeaway: "Fractions compare groups of different sizes fairly." }
      ]
    },

    build: {
      lede: `To rename a fraction, multiply the top and bottom by the same number. To simplify, divide both by their GCF. To compare, give both the same denominator and compare the tops.`,
      task: { text: "Rename it, then compare.", sub: `Sam's 3/4 and Ana's 6/8 on the Concept tab took one move. The same six steps rename, simplify and compare any fractions. Try each one in the model above as you go.`,
        figure: { sym: `<i>d</i> × <i>k</i>`, value: "8", cap: "the new bottom", echo: "bottom" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above draws the fraction <span class="c1"><i>n</i></span>/<span class="c2"><i>d</i></span> as an amber bar cut into <i>d</i> equal parts, with <i>n</i> of them shaded. The violet bar cuts every part into <span class="c4"><i>k</i></span> smaller ones: more parts, smaller parts, and the same shaded length. When the fraction can be simplified, a green bar shows it in <span class="c5">simplest form</span>. The dot on the number line marks the amount. It stays put when you change <i>k</i>.</p>`,
      keyTry: [{ label: "Shade 7 of 12", lab: "n:7,d:12,k:1" }, { label: "Cut the whole into 6", lab: "n:3,d:6,k:1" }, { label: "Set k to 3", lab: "n:3,d:4,k:3" }, { label: "Show 6/9", lab: "n:6,d:9,k:1" }],
      objects: ["part", "parts", "slice", "slices", "pizza", "mark", "marks", "inch", "cup", "cups", "scoop", "scoops", "minute", "minutes", "question", "questions", "piece", "pieces"],
      goalsIntro: `Two of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Multiplying by <i>k</i> cuts every part into <i>k</i> smaller parts. You get <i>k</i> times as many parts in the whole and <i>k</i> times as many shaded. The amount does not move.`,
        `The GCF is the biggest number that divides both. Dividing by it undoes the biggest renaming in one move. A smaller common factor works too, but leaves more steps.`,
        `Dividing top and bottom by the same number merges small parts into bigger ones. The amount stays the same. After the GCF, no common factor is left.`,
        `Different denominators count parts of different sizes, like 3 quarters against 4 fifths. A common denominator cuts both into parts of the same size.`,
        `When the parts are the same size, more parts means more. This is the only time comparing the tops alone is safe.`,
        `Cross-multiplying renames both fractions over the denominator <i>bd</i> without writing it out: <span class="m"><i>a</i>/<i>b</i> = <i>ad</i>/<i>bd</i></span> and <span class="m"><i>c</i>/<i>d</i> = <i>bc</i>/<i>bd</i></span>. The larger new top is the larger fraction.`
      ],
      stepTry: [{ label: "Rename 2/3 as twelfths", lab: "n:2,d:3,k:4" }, { label: "Show 8/12 and its GCF", lab: "n:8,d:12,k:1" }, null, null, null, null],
      stepGoal: [null, null,
        { key: "value", eq: 0.4, text: `You got 4 of 10 quiz questions right. Set the model to 4/10 and read the green bar.`, after: `gcd(4, 10) = 2, so <span class="m"><span class="fr"><span>4</span><span>10</span></span> = <span class="fr"><span>2</span><span>5</span></span></span>. The dot on the number line stays at 0.4.`, notYet: `Not yet. Set <i>n</i> to 4 and <i>d</i> to 10. The green bar shows the simplest form.` },
        { key: "top", eq: 10, text: `Rename 5/6 as twelfths. Set <i>n</i> to 5 and <i>d</i> to 6, then pick the <i>k</i> that makes the bottom 12.`, after: `<span class="m"><i>k</i> = 2</span>: <span class="m"><span class="fr"><span>5</span><span>6</span></span> = <span class="fr"><span>5 × 2</span><span>6 × 2</span></span> = <span class="fr"><span>10</span><span>12</span></span></span>.`, notYet: `Not yet. Which <i>k</i> turns 6 into 12? Set <i>k</i> to it, with 5/6 on the top bar.` },
        null, null],
      matters: { title: "Why a Method Beats Eyeballing", text: `<p>You can picture a half or a quarter. Is 5/8 more than 7/12? Your eyes cannot tell, and bigger numbers can fool you.</p><ul class="why-chips"><li><b>Different-size</b> parts</li><li><b>Big</b> numbers</li><li><b>Close</b> amounts</li></ul><p>The method <b>makes the parts the same size first</b>. After that, comparing is counting, and anyone can <b>check your answer</b>.</p>` },
      bridge: `<p>Sam and Ana's pizzas used the key move: rename so the parts are the same size, then compare. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Reading a ruler or tape measure", check: { q: `A plan says <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> inch. Your tape is marked in sixteenths. Which sixteenth mark do you use?`, parts: [{ label: "sixteenths", ans: 6 }], hint: `16 is 8 × 2. Multiply the top by 2 as well.` }, figure: "6/16 inch",
          demo: { kind: "fraction", n: 3, d: 8, split: 2, alt: "A bar cut into 8 equal parts with 3 shaded reads 3/8. Every part is cut in 2, and the same length reads 6/16." },
          lines: [{ math: `<span class="fr"><span>3</span><span>8</span></span> inch`, note: "The mark the plan asks for." }, { math: `8 × <span class="c4">2</span> = 16`, note: "Sixteenths are eighths cut in 2." }, { math: `<span class="fr"><span>3 × <span class="c4">2</span></span><span>8 × <span class="c4">2</span></span></span> = <span class="fr"><span>6</span><span>16</span></span>`, note: "Do the same to the top: the 6th sixteenth mark." }],
          predict: [null, { ask: `What number times 8 makes 16?`, parts: [{ label: "k", ans: 2 }], hint: `Count by 8s: 8, 16.` }, null], try: { label: "Show 3/8 in sixteenths", lab: "n:3,d:8,k:2" },
          link: `Rename by multiplying top and bottom by the same number (step 1), the same move that turned Sam's 3/4 into 6/8.` },
        { task: "Following and adjusting a recipe", check: { q: `A recipe needs <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> cup of flour. You only have a <span class="m"><span class="fr"><span>1</span><span>6</span></span></span> cup scoop. How many scoops do you need?`, parts: [{ label: "scoops", ans: 4 }], hint: `Rename 2/3 as sixths. 6 is 3 × 2.` }, figure: "4 scoops",
          demo: { kind: "fraction", n: 2, d: 3, split: 2, alt: "A bar cut into 3 equal parts with 2 shaded reads 2/3. Every part is cut in 2, and the same length reads 4/6." },
          lines: [{ math: `<span class="fr"><span>2</span><span>3</span></span> cup`, note: "What the recipe asks for." }, { math: `<span class="fr"><span>1</span><span>3</span></span> = <span class="fr"><span>2</span><span>6</span></span>`, note: "Each third of a cup is 2 sixths." }, { math: `<span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>2 × <span class="c4">2</span></span><span>3 × <span class="c4">2</span></span></span> = <span class="fr"><span>4</span><span>6</span></span>`, note: "So 2/3 cup is 4 sixths: 4 scoops." }],
          predict: [null, { ask: `How many sixths make one third?`, parts: [{ label: "sixths", ans: 2 }], hint: `Cut each third in 2.` }, null], try: { label: "Show 2/3 as sixths", lab: "n:2,d:3,k:2" },
          link: `The scoop sets the denominator. Rename the recipe's fraction to match it (step 1), as Ana's slices set the eighths.` },
        { task: "Sharing a pizza or a bill fairly", check: { q: `A party pizza is cut into 12 equal slices. You eat 4, and you pay that share of the bill. What fraction is it, in simplest form?`, parts: [{ label: "top", ans: 1 }, { label: "bottom", ans: 3 }], hint: `Find the GCF of 4 and 12, then divide both by it.` }, figure: "1/3 of the bill",
          demo: { kind: "fraction", n: 4, d: 12, alt: "A bar cut into 12 equal parts. Four parts shade one at a time, and the bar reads 4/12." },
          lines: [{ math: `<span class="fr"><span>4</span><span>12</span></span>`, note: "4 of the 12 slices." }, { math: `gcd(4, 12) = 4`, note: "4 divides both 4 and 12." }, { math: `<span class="fr"><span>4 ÷ 4</span><span>12 ÷ 4</span></span> = <span class="fr"><span>1</span><span>3</span></span>`, note: "Divide both by the GCF: you pay a third." }],
          predict: [null, { ask: `What is the GCF of 4 and 12?`, parts: [{ label: "GCF", ans: 4 }], hint: `Try the biggest factor of 4 first. Does it divide 12?` }, null], try: { label: "Show 4/12", lab: "n:4,d:12,k:1" },
          link: `Find the GCF and divide both by it (steps 2 and 3). It is the walk run backward: 6/8 back to 3/4.` },
        { task: "Understanding \"half off\" or \"a third more\"", check: { q: `Store A takes a third off a jacket. Store B takes a quarter off the same jacket. Rename both as twelfths.`, parts: [{ label: "a third = ?/12", ans: 4 }, { label: "a quarter = ?/12", ans: 3 }], hint: `12 is 3 × 4 and 4 × 3.` }, figure: "4/12 vs 3/12",
          demo: { kind: "fraction", n: 1, d: 3, split: 4, alt: "A bar cut into 3 equal parts with 1 shaded reads 1/3. Every part is cut into 4, and the same length reads 4/12." },
          lines: [{ math: `<span class="fr"><span>1</span><span>3</span></span> = <span class="fr"><span>1 × 4</span><span>3 × 4</span></span> = <span class="fr"><span>4</span><span>12</span></span>`, note: "A third off, in twelfths." }, { math: `<span class="fr"><span>1</span><span>4</span></span> = <span class="fr"><span>1 × 3</span><span>4 × 3</span></span> = <span class="fr"><span>3</span><span>12</span></span>`, note: "A quarter off, in twelfths." }, { math: `<span class="fr"><span>4</span><span>12</span></span> &gt; <span class="fr"><span>3</span><span>12</span></span>`, note: "Same-size parts, so the bigger top wins. A third off saves more." }],
          predict: [null, { ask: `Rename a quarter as twelfths. What is the top?`, parts: [{ label: "1/4 = ?/12", ans: 3 }], hint: `4 × 3 = 12, so multiply the top by 3 too.` }, null], try: { label: "Show 1/3 as twelfths", lab: "n:1,d:3,k:4" },
          link: `Give both a common denominator, then compare the tops (steps 4 and 5).` },
        { task: "Telling time with quarter and half hours", check: { q: `A meeting runs 45 minutes. What fraction of an hour is that, in simplest form?`, parts: [{ label: "top", ans: 3 }, { label: "bottom", ans: 4 }], hint: `A clock has 12 five-minute marks. Count the marks in 45 minutes, then simplify.` }, figure: "3/4 hour",
          demo: { kind: "fraction", n: 9, d: 12, alt: "A bar cut into 12 equal parts, like the 12 five-minute marks on a clock. Nine parts shade, and the bar reads 9/12." },
          lines: [{ math: `45 = 9 × 5`, note: "45 minutes is 9 of the clock's 12 five-minute marks." }, { math: `<span class="fr"><span>45</span><span>60</span></span> = <span class="fr"><span>9</span><span>12</span></span>`, note: "Both divided by 5." }, { math: `<span class="fr"><span>9 ÷ 3</span><span>12 ÷ 3</span></span> = <span class="fr"><span>3</span><span>4</span></span>`, note: "gcd(9, 12) = 3. Three quarters of an hour." }],
          predict: [null, { ask: `How many five-minute marks fit in 45 minutes?`, parts: [{ label: "marks", ans: 9 }], hint: `Count by 5s up to 45.` }, null], try: { label: "Show 9/12", lab: "n:9,d:12,k:1" },
          link: `Simplify by the GCF (step 3). The answer is Sam's 3/4 again, under a third name.` }
      ]
    },

    formal: {
      question: { text: "When do two fractions name the same number?", sub: `You can rename, simplify and compare fractions. Here are the words a textbook uses for the same moves, and Sam and Ana's pizzas written out in full.`,
        figure: { sym: `<i>n</i>/<i>d</i>`, value: "0.75", cap: "the rational number n ÷ d", echo: "value" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>a</i>/<i>b</i> ∈ ℚ`, term: "Fraction; rational number", def: `A number that can be written <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> with integers <i>a</i>, <i>b</i> and <span class="m"><i>b</i> ≠ 0</span>. It denotes the quotient <span class="m"><i>a</i> ÷ <i>b</i></span>.`, was: "part of a whole" },
        { c: "c1", sym: `<i>a</i>`, term: "Numerator", def: `The integer above the bar. When the whole is divided into <i>b</i> equal parts, it is the number of parts taken.`, was: "the top: the parts you have" },
        { c: "c2", sym: `<i>b</i>`, term: "Denominator", def: `The nonzero integer below the bar: the number of equal parts in one whole. It cannot be 0, because division by 0 is undefined.`, was: "the bottom: the parts in the whole" },
        { c: "c4", sym: `<i>a</i>/<i>b</i> = <i>ac</i>/<i>bc</i>`, term: "Equivalent Fractions Property", def: `For <span class="m"><i>b</i> ≠ 0</span> and <span class="m"><i>c</i> ≠ 0</span>, multiplying or dividing the numerator and denominator by <i>c</i> gives a fraction with the same value.`, was: "cut every part into k smaller parts" },
        { c: "c4", sym: `<i>ad</i> = <i>bc</i>`, term: "Equivalent fractions; cross products", def: `<span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> and <span class="m"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> are equivalent exactly when <span class="m"><i>ad</i> = <i>bc</i></span>. With positive denominators, <span class="m"><i>ad</i> &lt; <i>bc</i></span> means <span class="m"><i>a</i>/<i>b</i> &lt; <i>c</i>/<i>d</i></span>.`, was: "same amount, new name" },
        { c: "c2", sym: `LCD`, term: "Least common denominator", def: `The least common multiple of the denominators. It is the smallest denominator both fractions can be renamed to.`, was: "a common denominator: parts of the same size" },
        { c: "c5", sym: `gcd(<i>a</i>, <i>b</i>) = 1`, term: "Lowest terms", def: `A fraction with <span class="m"><i>b</i> &gt; 0</span> is in lowest terms when its numerator and denominator share no factor but 1. Each rational number has exactly one such form.`, was: "simplest form, the green bar" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>A $12 shirt is “reduced by a third” in one store and “reduced to a third” in another. <b>One small word changes the price.</b></p><ul class="why-chips"><li><b>By</b> a third: pay 2/3, $8</li><li><b>To</b> a third: pay 1/3, $4</li></ul><p>Exact words say <b>which fraction of what</b>. Get them right, and someone else can check your answer.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here come from changing only one part of a fraction, or from comparing counts of parts that are different sizes.`,
      setupIntro: `<p>Sam and Ana's pizzas from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing an equivalence problem", items: [
        { say: `<b>Name the quantities.</b> Write each share as a fraction of one pizza. The pizzas are the same size, so the wholes match.`, math: `<span class="m"><i>p</i><sub>S</sub> = <span class="fr"><span><span class="c1">3</span></span><span><span class="c2">4</span></span></span>, <i>p</i><sub>A</sub> = <span class="fr"><span><span class="c1">6</span></span><span><span class="c2">8</span></span></span></span> (slices eaten over slices in the pizza)` },
        { say: `<b>State the rule.</b> The Equivalent Fractions Property lets you rename without changing the value.`, math: `<span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>a</i> · <i>c</i></span><span><i>b</i> · <i>c</i></span></span></span>, <span class="m"><i>b</i>, <i>c</i> ≠ 0</span>` },
        { say: `<b>Rename to a common denominator.</b> The LCD of 4 and 8 is 8.`, math: `<span class="m"><i>p</i><sub>S</sub> = <span class="fr"><span>3 · <span class="c4">2</span></span><span>4 · <span class="c4">2</span></span></span> = <span class="fr"><span>6</span><span>8</span></span></span>` },
        { say: `<b>Check with cross products.</b> Equal cross products confirm equivalence.`, math: `<span class="m">3 · 8 = 24 = 4 · 6 ⟹ <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>6</span><span>8</span></span></span>` },
        { say: `<b>Reduce to lowest terms.</b> The standard name settles it.`, math: `<span class="m">gcd(6, 8) = 2 ⟹ <i>p</i><sub>A</sub> = <span class="fr"><span>6 ÷ 2</span><span>8 ÷ 2</span></span> = <span class="c5"><span class="fr"><span>3</span><span>4</span></span></span></span>` },
        { say: `<b>Answer in a sentence.</b>`, math: `<span class="m"><i>p</i><sub>S</sub> = <i>p</i><sub>A</sub></span> → Sam and Ana each ate 3/4 of a pizza. Neither ate more.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name each fraction, rename or reduce by a stated rule, then answer in a sentence. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can rename and compare fractions the formal way.",
      checks: [
        { hint: `The denominator went from 5 to 15, times 3. Do the same to the numerator.`, parts: [{ label: "customers", ans: 6 }] },
        { hint: `Find gcd(42, 56), then divide both by it.`, parts: [{ label: "numerator", ans: 3 }, { label: "denominator", ans: 4 }] },
        { hint: `Compute both cross products, 9 × 20 and 12 × 15.`, parts: [{ label: "9 × 20", ans: 180 }, { label: "12 × 15", ans: 180 }] },
        { hint: `Rename all three over 24, the LCD of 8, 3 and 12.`, parts: [{ label: "7/12 = ?/24", ans: 14 }, { label: "5/8 = ?/24", ans: 15 }, { label: "2/3 = ?/24", ans: 16 }] },
        { hint: `Set <span class="m"><i>n</i>/16 = 5/8</span> and cross-multiply.`, parts: [{ label: "n", ans: 10 }] }
      ]
    }
  },
  prereqWhy: {
    "division": "A fraction is a division, so a/b means a ÷ b.",
    "factors": "Simplifying needs a common factor of the numerator and denominator."
  },
  unlocksWhy: {
    "mixed-numbers": "A mixed number rewrites a fraction larger than 1 as a whole number plus a proper fraction.",
    "ratios": "A ratio a : b is often written and compared as the fraction a/b.",
    "fraction-ops": "Adding and subtracting fractions depends on rewriting them as equivalent fractions with a common denominator.",
    "decimals": "A decimal is a fraction whose denominator is a power of 10."
  },
  beyond: [
    { field: "Algebra I", why: "Rational expressions and solving equations with fractions use equivalence and cross-multiplication." },
    { field: "Probability & statistics", why: "Probabilities and relative frequencies are fractions between 0 and 1." },
    { field: "Abstract algebra", why: "The construction of ℚ from ℤ uses exactly the rule a/b = c/d when ad = bc." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>6</span><span>8</span></span></span> is more than <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> because 6 is more than 3`, fix: `The eighths are half the size of the quarters. <span class="m">3 · 8 = 24 = 4 · 6</span>, so <span class="m"><span class="fr"><span>6</span><span>8</span></span> = <span class="fr"><span>3</span><span>4</span></span></span>.` },
    { wrong: `<span class="m"><span class="fr"><span>2</span><span>3</span></span></span> = <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> because 1 was added to both`, fix: `Equivalent fractions come from multiplying or dividing, never adding. <span class="m"><span class="fr"><span>2</span><span>3</span></span> = <span class="fr"><span>4</span><span>6</span></span></span>.` },
    { wrong: `"1/8 is bigger than 1/4 because 8 is bigger than 4"`, fix: `A larger denominator means smaller pieces. <span class="m"><span class="fr"><span>1</span><span>8</span></span> &lt; <span class="fr"><span>1</span><span>4</span></span></span>.` },
    { wrong: `Cancelling digits: <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>4</span></span></span> by crossing out the 2s`, fix: `Cancel only common factors. <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, dividing both by 12.` },
    { wrong: `Comparing counts from groups of different sizes: "30 of 50 people is more than 18 of 24, because 30 &gt; 18"`, fix: `Compare the shares. <span class="m"><span class="fr"><span>30</span><span>50</span></span> = <span class="fr"><span>3</span><span>5</span></span> = <span class="fr"><span>12</span><span>20</span></span></span> and <span class="m"><span class="fr"><span>18</span><span>24</span></span> = <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>15</span><span>20</span></span></span>, so 18 of 24 is the larger share.` }
  ],
  practice: [
    { ctx: "Customers", q: `2 in every 5 customers chose the new design. Out of 15 customers, how many is that? Fill in the blank: <span class="m"><span class="fr"><span>2</span><span>5</span></span> = <span class="fr"><span>?</span><span>15</span></span></span>`, a: `<b>6</b>. The denominator was multiplied by 3, so the numerator is 2 × 3 = 6: 6 of 15 customers.` },
    { ctx: "Quality control", q: `42 of 56 parts passed inspection. Write the passing share in simplest form.`, a: `<span class="m"><b><span class="fr"><span>3</span><span>4</span></span></b></span>. The GCF of 42 and 56 is 14: 42 ÷ 14 = 3 and 56 ÷ 14 = 4.` },
    { ctx: "Sports", q: `One player made 9 of 12 free throws and another made 15 of 20. Is <span class="m"><span class="fr"><span>9</span><span>12</span></span></span> equivalent to <span class="m"><span class="fr"><span>15</span><span>20</span></span></span>, so that they shot equally well?`, a: `<b>Yes</b>. Cross products 9 × 20 = 180 and 12 × 15 = 180 are equal. Both simplify to 3/4.` },
    { ctx: "Kitchen", q: `Three jars are <span class="m"><span class="fr"><span>5</span><span>8</span></span></span>, <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> and <span class="m"><span class="fr"><span>7</span><span>12</span></span></span> full. Order them from least to most full.`, a: `<span class="m"><span class="fr"><span>7</span><span>12</span></span> &lt; <span class="fr"><span>5</span><span>8</span></span> &lt; <span class="fr"><span>2</span><span>3</span></span></span>. With denominator 24 they are 14/24, 15/24 and 16/24.` },
    { ctx: "Measuring", q: `Write an equation with a letter for the unknown, then solve: on a tape measure marked in sixteenths, which mark <i>n</i>/16 is the same as <span class="m"><span class="fr"><span>5</span><span>8</span></span></span> inch?`, a: `<span class="m"><span class="fr"><span><i>n</i></span><span>16</span></span> = <span class="fr"><span>5</span><span>8</span></span></span>. Cross-multiplying, <span class="m">8<i>n</i> = 80</span>, so <span class="m"><i>n</i> = 10</span>: the <b>10/16</b> mark.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) works with unit fractions such as 1/3 and 1/10. Brahmagupta (about 628 CE) wrote a numerator above its denominator. The horizontal fraction bar is first found in the work of al-Hassar of Fez, active around 1200, and Fibonacci used it in the 13th century.`
};
