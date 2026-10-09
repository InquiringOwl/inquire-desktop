window.ARITH = window.ARITH || {};

ARITH["proportions"] = {
  title: "Proportions",
  short: "Two equal ratios, one missing value",
  grade: "Grades 6–7",
  hours: 6,
  voice: "plain",
  eyebrow: "Multiplicative reasoning · equal ratios",
  hero: `<span class="m"><span class="fr"><span class="c2"><i>a</i></span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c2"><i>c</i></span><span class="c1"><i>x</i></span></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i></span> = <span class="fr"><span><i>bc</i></span><span><i>a</i></span></span></span>`,
  lede: `A proportion is an equation stating that two ratios are equal. When three of its four terms are known, the cross-product property determines the fourth.`,
  plain: `<p>Your car used 9 gallons of gas to drive 252 miles, and a 420-mile trip is coming up. How much gas will it take? If the car burns fuel at a steady rate, gallons and miles grow together. Twice the distance takes twice the gas, so the ratio of gallons to miles stays the same.</p>
<p>Writing that down gives a <b>proportion</b>, a statement that two ratios are equal: <span class="m">9/252 = <i>x</i>/420</span>. Three numbers are known and one is missing. <b>Cross-multiplication</b> finds it: <span class="m">252<i>x</i> = 9 × 420 = 3,780</span>, so <span class="m"><i>x</i> = 15</span> gallons. The fixed rate linking the two quantities, here 28 miles per gallon, is the <b>constant of proportionality</b>.</p>
<p>Before you set one up, check that the situation really is proportional. Twice the workers on a job usually means about half the time, so time and workers do not grow together. That is an <b>inverse</b> relationship, and it needs a different method.</p>`,
  formal: `<p>A <b>proportion</b> is an equation <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>. The <b>cross-product property</b> states</p>
<div class="display"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(multiply both sides by <i>bd</i>)</span></div>
<p>Two quantities <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> are <b>directly proportional</b> if <span class="m"><i>y</i> = <i>kx</i></span> for a constant <span class="m"><i>k</i> ≠ 0</span>, the <b>constant of proportionality</b>. Then <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair, so any two pairs form a proportion. They are <b>inversely proportional</b> if <span class="m"><i>xy</i> = <i>k</i></span>, which does not give a proportion of this form.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i> : <i>b</i>`, name: "Known pair", desc: "A matched pair you already know, such as 3 cups of flour for 36 cookies. It sits on the left of the model." },
    { c: "c1", sym: `<i>c</i>`, name: "New amount", desc: "The amount you have for the new situation, such as 8 cups of flour. The slider sets it." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown", desc: "The missing value that keeps the two ratios equal. It lines up under the new amount." },
    { c: "c2", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed rate b ÷ a, such as 12 cookies per cup. Both number lines stretch by it." }
  ],
  steps: { title: "How to solve a proportion", items: [
    `Check that the situation is proportional: doubling one quantity should double the other.`,
    `Write the known ratio with units, such as <span class="m">cups/cookies</span>.`,
    `Write the second ratio in the same order, with <span class="m c1"><i>x</i></span> for the unknown.`,
    `Cross-multiply to get <span class="m"><i>ad</i> = <i>bc</i></span>.`,
    `Divide to isolate <span class="m c1"><i>x</i></span>.`,
    `Check by comparing the unit rates or plugging back in.`
  ] },
  example: {
    prompt: `A cookie recipe uses 3 cups of flour for 36 cookies. You have 8 cups of flour. At the same rate, how many cookies can you bake?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">3</span><span class="c2">36</span></span> = <span class="fr"><span class="c1">8</span><span class="c1"><i>x</i></span></span></span>`, note: "Cups over cookies on both sides." },
      { math: `<span class="m">3<span class="c1"><i>x</i></span> = 36 × 8</span>`, note: "Cross-multiply." },
      { math: `<span class="m">3<span class="c1"><i>x</i></span> = 288</span>`, note: "Multiply out the right side." },
      { math: `<span class="m"><span class="c1"><i>x</i></span> = 288 ÷ 3 = 96</span>`, note: "Divide both sides by 3." },
      { math: `<span class="m">36 ÷ 3 = 12 = 96 ÷ 8</span>`, note: "Check: both batches make 12 cookies per cup." }
    ],
    answer: `You can bake <span class="m">96</span> cookies.`
  },
  why: `<p>Proportions are how you scale what you already know. Without them a recipe for 4 cannot be stretched to 10, a map scale cannot be turned into kilometres, and a liquid medicine labelled in milligrams per 5 mL cannot be turned into a dose. Setting a ratio up upside down does not give a small error. It gives an answer that is wildly wrong.</p>
<p>With one reliable pair you can predict any other: the cost of 14 notebooks from the price of 4, the fuel for a long trip from the last fill-up, the currency you need for a hotel bill, or the size of a wildlife population from one marked sample.</p>
<p>Direct proportion <span class="m"><i>y</i> = <i>kx</i></span> is the simplest linear function, and in algebra <i>k</i> becomes the slope. Similar triangles are proportions about lengths, which leads to trigonometry, and unit conversion is a chain of proportions.</p>`,
  careers: [
    { role: "Nurse", use: "Uses proportions to find a liquid dose, such as 250 mg is to 5 mL as 400 mg is to x mL, giving 8 mL." },
    { role: "Wildlife biologist", use: "Estimates population size by capture-recapture, setting marked animals in a sample equal in ratio to marked animals in the whole population." },
    { role: "Architect", use: "Converts scale-drawing measurements to real dimensions with a fixed ratio such as 1/4 in : 1 ft." },
    { role: "Pharmacist", use: "Scales compounding formulas proportionally to make a different total quantity." },
    { role: "Travel agent", use: "Converts prices between currencies using the proportion set by the exchange rate." },
    { role: "Graphic designer", use: "Resizes images while keeping the width-to-height ratio fixed so they do not distort." }
  ],
  life: [
    "Figuring out how much gas a longer trip will need",
    "Converting prices while travelling abroad",
    "Scaling a recipe from 4 servings to 10",
    "Resizing a photo without stretching it",
    "Estimating distances from a map scale"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry uses proportions from balanced equations to scale reactant and product amounts." },
    { name: "Ecology", use: "Mark-recapture and quadrat sampling estimate totals by proportion." },
    { name: "Physics", use: "Many laws, such as Hooke's law F = kx, are direct proportions." }
  ],
  layers: {
    nudge: "Not yet. Keep the same units on top on both sides.",
    concept: {
      lede: `If you know how two amounts go together once, a proportion tells you how they go together at any other size: more gas for a longer trip, more flour for a bigger batch.`,
      heading: `What is a proportion?`,
      question: { text: "Same rate, new size?", sub: `You know one matched pair. You want the match for a new amount. The model above lines both pairs up. Watch each idea happen there, then try it yourself.`,
        figure: { sym: `<i>x</i>`, value: "60", cap: "the missing value", echo: "d" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["cup", "cups", "cookie", "cookies", "flour", "gallon", "gallons", "mile", "miles", "painter", "painters", "hours", "fish", "wall", "cream", "pixels", "metres"],
      walk: { title: "Scale it together: a bigger batch of cookies",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Your cookie recipe uses 3 cups of flour for 36 cookies. You have 8 cups of flour for a bake sale. How many cookies can you make?`,
        demo: { kind: "array", rows: 8, cols: 12, unit: "cookie", cap: "cookies", alt: "Each row is one cup of flour holding 12 cookies. Rows appear one at a time with running totals, from 12 for one cup to 36 for three cups, up to 96 for eight cups." },
        lines: [
          { math: `3 cups → 36 cookies`, note: `This is the pair you know. Each row in the picture is one cup of flour.`, frame: 3 },
          { math: `36 ÷ 3 = 12`, note: `One cup makes 12 cookies. That is the rate for one, called the unit rate.`, frame: 1 },
          { math: `8 × 12 = 96`, note: `Eight cups make eight rows of 12. That is 96 cookies.`, frame: 9 },
          { math: `36 + 5 = 41 ✗`, note: `A shortcut adds: 8 cups is 5 more than 3, so 5 more cookies. One more cup already gives 48, so 41 is far too few.`, frame: 4 },
          { math: `<span class="fr"><span class="c2">3</span><span class="c2">36</span></span> = <span class="fr"><span class="c1">8</span><span class="c1"><i>x</i></span></span>`, note: `Write it as two equal ratios. Cups go on top on both sides, cookies on the bottom.`, frame: 9 },
          { math: `3<span class="c1"><i>x</i></span> = 36 × 8 = 288, &nbsp;<span class="c1"><i>x</i></span> = 96`, note: `Multiply across the diagonals, then divide by 3. It agrees with the rows: 96 cookies.`, frame: 9 }
        ],
        predict: [null,
          { ask: `3 cups make 36 cookies. How many cookies does 1 cup make?`, parts: [{ label: "cookies per cup", ans: 12 }], hint: `Share 36 cookies equally over 3 cups.` },
          { ask: `Each cup makes 12 cookies. How many do 8 cups make?`, parts: [{ label: "cookies", ans: 96 }], hint: `8 rows of 12. Try 8 × 10 = 80, then 8 × 2 = 16 more.` },
          { ask: `A friend says: "8 cups is 5 more cups, so it's 5 more cookies: 41." What went wrong?`, choices: [
            { t: "Each extra cup adds 12 cookies, not 1", ok: true },
            { t: "Nothing. Adding the same to both is fair", why: "Adding changes the rate. 3 cups for 36 is 12 a cup. 8 cups for 41 is about 5 a cup." },
            { t: "She should add 8, not 5", why: "Adding any fixed number breaks the rate. Both amounts must grow by the same factor." }
          ], hint: `Look at the picture. What does one more row add?` },
          { ask: `Which equation keeps the same order on both sides?`, choices: [
            { t: "3/36 = 8/x", ok: true },
            { t: "3/36 = x/8", why: "Cups sit on top on the left, but cookies sit on top on the right. The two sides compare different things." },
            { t: "36/3 = 8/x", why: "The left side is cookies per cup. The right side is cups per cookie. One is upside down." }
          ], hint: `Put cups on top on both sides.` },
          { ask: `Cross-multiply: 3 × x = 36 × 8. What is 36 × 8?`, parts: [{ label: "36 × 8", ans: 288 }], hint: `36 × 8 = 30 × 8 + 6 × 8.` }],
        answer: `You can make <span class="m c1">96</span> cookies, 12 for every cup of flour.` },
      ideas: [
        { c: "c2", title: "Find what one is worth", term: "unit rate", text: `Share the known pair down to one. 3 cups make 36 cookies, so 1 cup makes 12.`,
          demo: { kind: "array", rows: 3, cols: 12, unit: "cookie", cap: "cookies", alt: "Three rows of 12 cookies appear one cup at a time: 12, 24, then 36 cookies." }, try: { label: "Show 1 cup of flour", lab: "scenario:0,c:1" } },
        { c: "c1", title: "Grow both by one factor", term: "scale factor", text: `Double the flour and you double the cookies. Both amounts grow by the same number of times.`,
          demo: { kind: "bar", parts: [36, 36], labels: ["first 3 cups", "next 3 cups"], unit: "cookies", alt: "One bar of 36 cookies for 3 cups, then a second bar of 36 for 3 more cups, joined into 72 cookies for 6 cups." }, try: { label: "Double the flour to 6 cups", lab: "scenario:0,c:6" } },
        { c: "c1", title: "Two ratios that are equal", term: "proportion", text: `3 out of 4 and 6 out of 8 are the same share. A proportion says two ratios match like that.`,
          demo: { kind: "fraction", n: 3, d: 4, split: 2, alt: "A bar cut into 4 parts has 3 shaded. Each part is then cut in two, giving 6 of 8 parts, the same amount." }, try: { label: "Try the map scale", lab: "scenario:1" } }
      ],
      timelineTitle: "Merchants used this rule for two thousand years",
      timelineLead: `Long before algebra, people scaled prices with a fixed routine called the rule of three. It is the same <i>b</i> × <i>c</i> ÷ <i>a</i> the model works out.`,
      timeline: [
        { when: "Before the 2nd century CE", what: `Chinese mathematicians know the rule of three: from three known numbers, find the fourth.` },
        { when: "499 CE", what: `Aryabhata finishes the <i>Aryabhatiya</i> in India. His rule: multiply the result by the new amount, then divide by the known amount. That is the <i>x</i> in the model.` },
        { when: "The 1100s", what: `Bhāskara II asks the "best of merchants" the price of saffron from a known rate.` },
        { when: "The 1600s", what: `Cocker's <i>Arithmetick</i> teaches the rule with cloth: if 4 yards cost 12 shillings, what do 6 yards cost?` },
        { when: "1855", what: `Charles Darwin writes that he trusts nothing "short of actual measurement and the Rule of Three".` }
      ],
      history: `<p><b>The problem.</b> Traders met the same question every day: if a known amount sells at a known price, what does a different amount cost? In the 1100s the Indian mathematician Bhāskara II posed one such problem in his <i>Bījagaṇita</i>, asking the "best of merchants" the price of a weight of saffron from a known rate.</p>
<p><b>The solution.</b> The answer was a fixed routine, the rule of three. Chinese mathematicians knew it before the 2nd century CE. In India it was called <i>trairāśika</i>, a word already found in the Bakhshali manuscript, which is thought to date from the early centuries CE. Aryabhata, who finished his <i>Aryabhatiya</i> in 499 CE, stated it this way: multiply the known result by the new amount and divide by the known amount. Europe took the rule up much later, and then it became the core of merchant arithmetic. Cocker's <i>Arithmetick</i>, a leading 17th-century textbook, introduces it with cloth: if 4 yards cost 12 shillings, what do 6 yards cost?</p>
<p><b>What it changed.</b> One memorised routine let clerks, shopkeepers and students scale any price, wage or quantity without algebra. It was hard work for some: an anonymous manuscript of 1570 complains "The Rule of three doth puzzle me". In an 1855 letter to William Darwin Fox, Charles Darwin wrote that he had "no faith in anything short of actual measurement and the Rule of Three", and Karl Pearson later made the line the motto of his journal <i>Biometrika</i>. The cross-multiplication in this lesson is the same rule, written as an equation.</p>`,
      sources: [
        { title: "Trairāśika (Wikipedia)", url: "https://en.wikipedia.org/wiki/Trair%C4%81%C5%9Bika" },
        { title: "Cross-multiplication (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cross-multiplication" },
        { title: "Aryabhata I (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Aryabhata_I/" },
        { title: "Eudoxus of Cnidus (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Eudoxus/" }
      ],
      matters: { title: "Why proportions matter", text: `<p>A proportion lets you <b>scale what you already know</b>. One pair you trust becomes an answer at any size.</p><ul class="why-chips"><li><b>Cooking</b> for more people</li><li><b>Dosing</b> a medicine</li><li><b>Reading</b> a map</li></ul><p>The rule only works when both amounts <b>grow together</b>. Check that first, and keep the units in the same places. Then the answer can be <b>trusted</b>.</p>` },
      stakes: { title: "Where proportions go wrong", lead: `Most slips break the rate. The wrong answer still looks like a sensible number, so the slip hides.`, items: [
        { role: "Bake sale", text: `3 cups for 36 cookies does not mean 8 cups for 41. Each cup adds 12 cookies, so it is 96.` },
        { role: "Fuel", text: `Gallons over miles on one side and miles over gallons on the other gives a wildly wrong amount of gas.` },
        { role: "Painting crew", text: `3 painters take 6 hours, so 6 painters take 3 hours, not 12. More painters means fewer hours.` },
        { role: "Map", text: `Metres used with a kilometre scale give a distance 1,000 times too big.` }
      ], try: { label: "See 8 cups in the model", lab: "scenario:0,c:8" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "8 mL", scene: `A liquid medicine has 250 mg in every 5 mL, and the order is 400 mg. <span class="m">250/5 = 400/<i>x</i></span>, so <span class="m">250<i>x</i> = 2,000</span> and <span class="m"><i>x</i> = 8</span> mL.`, takeaway: "Keeping milligrams over millilitres on both sides is what makes the dose safe." },
        { role: "Wildlife biologist", figure: "250 fish", scene: `60 fish are tagged and released. Later 50 are caught and 12 carry tags. <span class="m">60/<i>N</i> = 12/50</span>, so <span class="m"><i>N</i> = 60 × 50 ÷ 12 = 250</span>, about 250 fish in the lake.`, takeaway: "A small sample predicts a whole population when the ratio is the same in both." },
        { role: "Architect", figure: "26 ft", scene: `At a scale of 1/4 in to 1 ft, a wall measures 6.5 in on the drawing. <span class="m">6.5 ÷ 0.25 = 26</span>, so the wall is 26 ft long.`, takeaway: "Every dimension on a plan is one proportion away from the real building." },
        { role: "Pharmacist", figure: "5 g", scene: `A cream formula uses 2 g of active ingredient per 100 g of cream. For a 250 g batch: <span class="m">2/100 = <i>x</i>/250</span>, so <span class="m"><i>x</i> = 5</span> g.`, takeaway: "Scaling every ingredient by the same factor keeps the strength the same." },
        { role: "Travel agent", figure: "$250", scene: `At a sample rate of 1 US dollar to 0.92 euro, a €230 hotel bill costs <span class="m">230 ÷ 0.92 = 250</span> dollars.`, takeaway: "An exchange rate is a known pair, so any price converts with one proportion." },
        { role: "Graphic designer", figure: "450 pixels", scene: `A 1,920 × 1,080 image is resized to 800 pixels wide. Height: <span class="m">1,080 × 800 ÷ 1,920 = 450</span> pixels.`, takeaway: "Keeping width over height fixed stops the picture from stretching." }
      ]
    },
    build: {
      lede: `Write the known pair and the new pair as two ratios in the same order, cross-multiply, and divide to find the missing value.`,
      task: { text: "Find the value that keeps both ratios equal.", sub: `The same six moves work for any proportion, from a batch of cookies to a map. Try each one in the model above as you go.`,
        figure: { sym: `<i>x</i>`, value: "60", cap: "in the model", echo: "d" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model is a double number line. The top line measures one quantity and the bottom line the other, and both lines stretch by the same factor. The <span class="c2">known pair</span> <i>a</i> and <i>b</i> is the match you know, such as 3 cups of flour for 36 cookies. The <span class="c1">new pair</span> is the new amount <i>c</i> with the unknown <i>x</i> lined up beneath it. Choose a scenario or change <i>a</i>, <i>b</i> or <i>c</i>, and the panel shows the cross-multiplication and the unit rate.</p>`,
      keyTry: [{ label: "Load the fuel numbers", lab: "scenario:2" }, { label: "Set c to 10 cups", lab: "scenario:0,c:10" }, null, { label: "Try the map scale", lab: "scenario:1" }],
      objects: ["cup", "cups", "cookie", "cookies", "gallon", "gallons", "mile", "miles", "serving", "servings", "dollar", "dollars", "euro", "euros", "inches", "km", "cm", "hours"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `A proportion assumes the rate never changes. If doubling one amount does not double the other, as with more workers and less time, the equation gives a confident but wrong answer.`,
        `Units label each position. Writing cups/cookies makes clear what goes on top and what goes underneath.`,
        `Equal ratios compare like with like. If cups are on top on the left, cups must be on top on the right. Otherwise you set a ratio equal to its upside-down version.`,
        `Multiplying both sides by both bottom numbers clears the fractions: <span class="m"><i>a</i>/<i>b</i> = <i>c</i>/<i>d</i></span> becomes <span class="m"><i>ad</i> = <i>bc</i></span>. Cross-multiplying is that step done in one move.`,
        `The unknown is now multiplied by a number. Dividing both sides by that number undoes it: <span class="m">3<i>x</i> = 288</span> gives <span class="m"><i>x</i> = 96</span>.`,
        `Equal ratios mean equal unit rates. If both pairs give the same rate, 12 cookies per cup in the cookie walk, the answer is right.`
      ],
      stepTry: [{ label: "Double the fuel to 8 gallons", lab: "scenario:2,c:8" }, { label: "Load the map scale", lab: "scenario:1" }, null, null, { label: "Set c to 10 cups", lab: "scenario:0,c:10" }, null],
      stepGoal: [null, null,
        { key: "d", eq: 84, text: `Choose <b>Recipe</b> in Scenario, then set <i>c</i> to 7 cups. The model writes cups over cookies on both sides.`, after: `Same order on both sides: <span class="m">3/36 = 7/<i>x</i></span>, so <i>x</i> = 84 cookies.`, notYet: `Not yet. Pick Recipe, then move c to 7.` },
        { key: "d", eq: 75, text: `Set up a smaller batch yourself: 4 cups make 30 cookies. Type <i>a</i> = 4 and <i>b</i> = 30, then set <i>c</i> to 10.`, after: `Cross-multiplying gives <span class="m">4<i>x</i> = 30 × 10 = 300</span>, so <i>x</i> = 75 cookies.`, notYet: `Not yet. Check that a = 4, b = 30 and c = 10.` },
        null,
        { key: "d", eq: 100, text: `Choose <b>Map scale</b>. Make 2 cm stand for 25 km (<i>a</i> = 2, <i>b</i> = 25), then set <i>c</i> to 8 cm.`, after: `Check the unit rate: <span class="m">25 ÷ 2 = 12.5</span> and <span class="m">100 ÷ 8 = 12.5</span> km per cm. The answer, 100 km, holds.`, notYet: `Not yet. Check that a = 2, b = 25 and c = 8.` }],
      matters: { title: "Why a Method Beats a Guess", text: `<p>A guess often adds when it should multiply. The numbers look close, so the slip hides.</p><ul class="why-chips"><li><b>Adding</b> instead of scaling</li><li><b>Flipped</b> ratios</li><li><b>Mixed</b> units</li></ul><p>The method is <b>the same six moves every time</b>. The last move checks the unit rate, so you <b>catch your own slip</b> before it costs you.</p>` },
      bridge: `<p>The cookie walk used one pattern: a known pair, a new amount, two ratios in the same order, then cross-multiply and check the unit rate. Here is the same pattern in daily life.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Figuring out how much gas a longer trip will need", check: { q: `Your car used 9 gallons to drive 252 miles. How many gallons will a 420-mile trip use?`, parts: [{ label: "gallons", ans: 15 }], hint: `Gallons over miles on both sides: <span class="m">9/252 = <i>x</i>/420</span>.` }, figure: "28 mi a gallon",
          demo: { kind: "line", from: 0, to: 420, tick: 84, points: [{ v: 252, c: "c2", label: "9 gal" }, { v: 420, c: "c1", label: "x gal" }], cap: "miles", alt: "A line of miles from 0 to 420. The first trip, 9 gallons, ends at 252 miles. The new trip ends at 420 miles with x gallons." },
          lines: [{ math: `9/252 = <i>x</i>/420`, note: "Gallons over miles on both sides." }, { math: `252<i>x</i> = 9 × 420 = 3,780`, note: "Cross-multiply." }, { math: `<i>x</i> = 3,780 ÷ 252 = 15`, note: "Divide by 252." }, { math: `252 ÷ 9 = 28 = 420 ÷ 15`, note: "Check: 28 miles per gallon both times." }],
          predict: [null, { ask: `What is 9 × 420?`, parts: [{ label: "9 × 420", ans: 3780 }], hint: `9 × 400 = 3,600, then add 9 × 20.` }], try: { label: "Load the fuel numbers", lab: "scenario:2" },
          link: `The same setup as the cookie walk: units in the same order on both sides, then cross-multiply (steps 2 to 4).` },
        { task: "Scaling a recipe from 4 servings to 10", check: { q: `A soup for 4 servings uses 6 cups of broth. How many cups do 10 servings need?`, parts: [{ label: "cups", ans: 15 }], hint: `Cups over servings on both sides: <span class="m">6/4 = <i>x</i>/10</span>.` }, figure: "6 cups for 4",
          demo: { kind: "bar", parts: [6, 6, 3], labels: ["4 servings", "4 servings", "2 servings"], unit: "cups", alt: "Bars of 6 cups for 4 servings, another 6 cups for 4 more, and 3 cups for the last 2 servings, joined into the total for 10 servings." },
          lines: [{ math: `6/4 = <i>x</i>/10`, note: "Cups over servings on both sides." }, { math: `4<i>x</i> = 6 × 10 = 60`, note: "Cross-multiply." }, { math: `<i>x</i> = 60 ÷ 4 = 15`, note: "Divide by 4." }, { math: `6 ÷ 4 = 1.5 = 15 ÷ 10`, note: "Check: 1.5 cups per serving both times." }],
          predict: [null, { ask: `Cross-multiply. What is 6 × 10?`, parts: [{ label: "6 × 10", ans: 60 }], hint: `Six tens.` }],
          link: `Adding 6 more servings does not mean adding 6 more cups. Like the 41-cookie shortcut in the walk, adding breaks the rate.` },
        { task: "Converting prices while travelling abroad", check: { q: `At the exchange desk, $10 buys 9 euros. A train ticket costs 27 euros. How many dollars is that?`, parts: [{ label: "dollars", ans: 30 }], hint: `Dollars over euros on both sides: <span class="m">10/9 = <i>x</i>/27</span>.` }, figure: "$10 = 9 euros",
          demo: { kind: "bar", parts: [9, 9, 9], labels: ["$10", "$10", "$10"], unit: "euros", alt: "Three bars of 9 euros, each bought with 10 dollars, joined into the 27-euro ticket." },
          lines: [{ math: `$10 → 9 euros`, note: "The exchange rate is the known pair." }, { math: `10/9 = <i>x</i>/27`, note: "Dollars over euros on both sides." }, { math: `9<i>x</i> = 10 × 27 = 270`, note: "Cross-multiply." }, { math: `<i>x</i> = 270 ÷ 9 = 30`, note: "Divide by 9: $30." }],
          predict: [null, { ask: `Which equation keeps the same order on both sides?`, choices: [
            { t: "10/9 = x/27", ok: true },
            { t: "10/9 = 27/x", why: "Dollars are on top on the left, but euros are on top on the right." },
            { t: "9/10 = x/27", why: "The left side is euros per dollar, but x on the right is dollars. The units do not match." }
          ], hint: `Put dollars on top on both sides.` }],
          link: `This is step 3: the second ratio in the same order as the first, the way cups stayed on top in the cookie walk.` },
        { task: "Resizing a photo without stretching it", check: { q: `A photo is 6 in wide and 4 in tall. You print it 15 in wide. How tall must it be so it does not stretch?`, parts: [{ label: "inches tall", ans: 10 }], hint: `Width over height on both sides: <span class="m">6/4 = 15/<i>x</i></span>.` }, figure: "keep 6 : 4",
          demo: { kind: "bar", parts: [4, 4, 2], labels: ["6 in wide", "6 in wide", "3 in wide"], unit: "inches", alt: "Bars of height for each width: 4 inches tall for 6 wide, 4 more for the next 6 wide, and 2 for the last 3 wide, joined into the full height." },
          lines: [{ math: `6/4 = 15/<i>x</i>`, note: "Width over height on both sides." }, { math: `6<i>x</i> = 4 × 15 = 60`, note: "Cross-multiply." }, { math: `<i>x</i> = 60 ÷ 6 = 10`, note: "Divide by 6." }, { math: `15 ÷ 10 = 1.5 = 6 ÷ 4`, note: "Check: the width is 1.5 times the height both times." }],
          predict: [null, { ask: `Cross-multiply. What is 4 × 15?`, parts: [{ label: "4 × 15", ans: 60 }], hint: `Four fifteens: 15, 30, 45, …` }],
          link: `The unit-rate check of step 6 confirms the shape: 1.5 inches wide for every inch tall, before and after.` },
        { task: "Estimating distances from a map scale", check: { q: `On a map, 2 cm stands for 15 km. A lake trail is 6 cm long on the map. How long is it on the ground?`, parts: [{ label: "km", ans: 45 }], hint: `Centimetres over kilometres on both sides: <span class="m">2/15 = 6/<i>x</i></span>.` }, figure: "2 cm = 15 km",
          demo: { kind: "line", from: 0, to: 45, start: 0, jumps: [15, 15, 15], unit: "km", alt: "Three jumps of 15 km along a line, one for every 2 cm on the map, reach the trail's full length." },
          lines: [{ math: `2/15 = 6/<i>x</i>`, note: "Map cm over ground km on both sides." }, { math: `2<i>x</i> = 15 × 6 = 90`, note: "Cross-multiply." }, { math: `<i>x</i> = 90 ÷ 2 = 45`, note: "Divide by 2." }, { math: `15 ÷ 2 = 7.5 = 45 ÷ 6`, note: "Check: 7.5 km per cm both times." }],
          predict: [null, { ask: `Cross-multiply. What is 15 × 6?`, parts: [{ label: "15 × 6", ans: 90 }], hint: `10 × 6 = 60, plus 5 × 6 = 30.` }], try: { label: "Set the map to 6 cm", lab: "scenario:1,c:6" },
          link: `The map scale is the known pair, like 3 cups for 36 cookies. Six centimetres is three times two, so the ground distance is three times 15.` }
      ]
    },
    formal: {
      question: { text: "When are two ratios equal?", sub: `You can scale a known pair and check the rate. Here are the words a textbook uses for the same ideas, and how to write a proportion problem out in full.`,
        figure: { sym: `<i>x</i>`, value: "60", cap: "the fourth term", echo: "d" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i> : <i>b</i>`, term: "Ratio", def: `A comparison of two quantities by division, written <span class="m"><i>a</i> : <i>b</i></span> or <span class="m"><i>a</i>/<i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span>. Order matters: <span class="m"><i>b</i>/<i>a</i></span> is its reciprocal.`, was: "the known pair, 3 cups for 36 cookies" },
        { c: "c2", sym: `<i>b</i>/<i>a</i> per 1`, term: "Unit rate", def: `A rate whose second quantity is one unit, found by dividing the first quantity by the second.`, was: "what one is worth, 12 cookies per cup" },
        { c: "c1", sym: `<i>a</i>/<i>b</i> = <i>c</i>/<i>d</i>`, term: "Proportion", def: `An equation stating that two ratios are equal, with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>. Its four numbers are its terms.`, was: "two equal ratios, one unknown" },
        { c: "c1", sym: `<i>ad</i> = <i>bc</i>`, term: "Cross-product property", def: `For nonzero <i>b</i> and <i>d</i>, <span class="m"><i>a</i>/<i>b</i> = <i>c</i>/<i>d</i></span> holds exactly when <span class="m"><i>ad</i> = <i>bc</i></span>. It follows from multiplying both sides by <i>bd</i>.`, was: "multiply across the diagonals" },
        { c: "c2", sym: `<i>y</i> = <i>kx</i>`, term: "Direct proportion", def: `<i>y</i> is directly proportional to <i>x</i> when <span class="m"><i>y</i> = <i>kx</i></span> for a fixed <span class="m"><i>k</i> ≠ 0</span>, the constant of proportionality. Then <span class="m"><i>y</i>/<i>x</i> = <i>k</i></span> for every pair.`, was: "both grow by the same factor" },
        { c: "c1", sym: `<i>xy</i> = <i>k</i>`, term: "Inverse proportion", def: `<i>y</i> is inversely proportional to <i>x</i> when <span class="m"><i>xy</i> = <i>k</i></span> for a fixed <span class="m"><i>k</i> ≠ 0</span>. Doubling <i>x</i> halves <i>y</i>, so equal ratios do not apply.`, was: "more painters, fewer hours" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Proportional” on its own usually means <b>directly</b> proportional. One extra word, <b>inversely</b>, changes the equation and the answer.</p><ul class="why-chips"><li>3 painters take 6 hours. How long for 6?</li><li><b>12 hours</b> if time is directly proportional</li><li><b>3 hours</b> if it is inversely proportional</li></ul><p>Naming the relationship first tells you <b>which equation to write</b>, and lets someone else check your answer.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers come from treating a multiplicative relationship as an additive one, or from terms in the wrong positions.`,
      setupIntro: `<p>The cookie batch from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a proportion problem", items: [
        { say: `<b>Name the quantities.</b> Say what each number measures, with units, and give the unknown a letter.`, math: `known pair: 3 cups for 36 cookies; &nbsp;new: 8 cups; &nbsp;unknown <span class="m"><span class="c1"><i>x</i></span></span> cookies` },
        { say: `<b>State the relationship.</b> Cookies are directly proportional to cups of flour.`, math: `<span class="m"><i>y</i> = <span class="c2"><i>k</i></span><i>f</i>, &nbsp;<span class="c2"><i>k</i></span> = 36/3 = 12</span> cookies per cup` },
        { say: `<b>Write the proportion.</b> The same units occupy the same positions on both sides.`, math: `<span class="m"><span class="fr"><span class="c2">3</span><span class="c2">36</span></span> = <span class="fr"><span class="c1">8</span><span class="c1"><i>x</i></span></span></span>` },
        { say: `<b>Apply the cross-product property.</b> Multiplying both sides by <span class="m">36<i>x</i></span> is valid because neither denominator is zero.`, math: `<span class="m">3<span class="c1"><i>x</i></span> = 36 · 8 = 288</span>` },
        { say: `<b>Solve, check, answer.</b> Divide, confirm the unit rate, and state the result with units.`, math: `<span class="m"><span class="c1"><i>x</i></span> = 288 ÷ 3 = 96</span>, &nbsp;<span class="m">96 ÷ 8 = 12</span> &nbsp;→ The 8 cups make 96 cookies.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the proportion with matching units, apply the cross-product property, and solve. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can solve a proportion the formal way.",
      checks: [
        { hint: `Tint over base on both sides: <span class="m">3/5 = <i>x</i>/40</span>.`, parts: [{ label: "mL of tint", ans: 24 }] },
        { hint: `Bottles over minutes on both sides: <span class="m">7/<i>x</i> = 21/12</span>.`, parts: [{ label: "minutes", ans: 4 }] },
        { hint: `Dollars over notebooks on both sides: <span class="m">10/4 = <i>x</i>/14</span>.`, parts: [{ label: "dollars", ans: 35 }] },
        { hint: `Map cm over ground km on both sides: <span class="m">1/2.5 = <i>x</i>/18.4</span>.`, parts: [{ label: "cm", ans: 7.36 }] },
        { hint: `Dollars over hours on both sides: <span class="m">148/8 = <i>p</i>/30</span>.`, parts: [{ label: "p (dollars)", ans: 555 }] }
      ]
    }
  },
  prereqWhy: {
    "ratios": "A proportion is a statement that two ratios are equal, so you need to read and write ratios first.",
    "fraction-ops": "Cross-multiplying and simplifying the result are fraction operations."
  },
  unlocksWhy: {
    "units": "Each conversion factor is a proportion between equal amounts in two units, and dimensional analysis chains them together.",
    "g-dilations": "A dilation multiplies every distance from the centre by the same scale factor k, so image and preimage lengths form one proportion."
  },
  beyond: [
    { field: "Algebra I", why: "Direct variation y = kx is a linear function through the origin with slope k." },
    { field: "Geometry", why: "Similar figures have proportional sides, which is used to find unknown lengths." },
    { field: "Trigonometry", why: "Trigonometric ratios are constant because right triangles with the same angles are similar." }
  ],
  mistakes: [
    { wrong: `Adding instead of scaling: "3 cups make 36 cookies, so 8 cups make <span class="m">36 + 5 = 41</span>."`, fix: `The rate is <span class="m">36 ÷ 3 = 12</span> cookies per cup, so each extra cup adds 12. Solve <span class="m">3/36 = 8/<i>x</i></span>: <span class="m"><i>x</i> = 96</span>.` },
    { wrong: `Mixing the order: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span>420</span><span><i>x</i></span></span></span>, with gallons over miles on one side and miles over gallons on the other.`, fix: `Keep the same units in the same positions on both sides: <span class="m"><span class="fr"><span>9</span><span>252</span></span> = <span class="fr"><span><i>x</i></span><span>420</span></span></span>.` },
    { wrong: `Using a proportion for an inverse relationship: "3 painters take 6 hours, so 6 painters take 12 hours."`, fix: `More painters means less time. Here the work is 3 × 6 = 18 painter-hours, so 6 painters take <span class="m">18 ÷ 6 = 3</span> hours.` },
    { wrong: `Cross-adding or multiplying straight across instead of diagonally.`, fix: `Multiply each numerator by the opposite denominator: <span class="m"><i>ad</i> = <i>bc</i></span>.` },
    { wrong: `Mixing units inside a ratio: with a scale of 1 cm : 2.5 km, entering 18,400 m as 18,400 and getting <span class="m">18,400 ÷ 2.5 = 7,360</span> cm.`, fix: `Convert to the scale's units first: 18,400 m = 18.4 km, so <span class="m">18.4 ÷ 2.5 = 7.36</span> cm.` }
  ],
  practice: [
    { ctx: "Home", q: `A paint store adds 3 mL of tint for every 5 L of base paint. How much tint goes into 40 L of base?`, a: `<span class="m"><span class="fr"><span>3</span><span>5</span></span> = <span class="fr"><span><i>x</i></span><span>40</span></span></span>, so <span class="m">5<i>x</i> = 120</span> and <span class="m"><i>x</i> = 24</span> mL.` },
    { ctx: "Manufacturing", q: `A machine fills 21 bottles in 12 minutes. At the same rate, how long does it take to fill 7 bottles?`, a: `<span class="m"><span class="fr"><span>7</span><span><i>x</i></span></span> = <span class="fr"><span>21</span><span>12</span></span></span>, so <span class="m">21<i>x</i> = 84</span> and <span class="m"><i>x</i> = 4</span> minutes.` },
    { ctx: "Shopping", q: `4 notebooks cost $10. At the same price each, what do 14 notebooks cost?`, a: `<span class="m"><span class="fr"><span>10</span><span>4</span></span> = <span class="fr"><span><i>x</i></span><span>14</span></span></span>, so <span class="m">4<i>x</i> = 140</span> and <span class="m"><i>x</i> = $35</span>.` },
    { ctx: "Travel", q: `A map's scale is 1 cm : 2.5 km. Two towns are 18.4 km apart. How far apart are they on the map?`, a: `<span class="m"><span class="fr"><span>1</span><span>2.5</span></span> = <span class="fr"><span><i>x</i></span><span>18.4</span></span></span>, so <span class="m"><i>x</i> = 18.4 ÷ 2.5 = 7.36</span> cm.` },
    { ctx: "Work", q: `Write an equation with a letter for the unknown, then solve: a worker earns $148 for 8 hours. At the same hourly rate, what does she earn, <i>p</i> dollars, for 30 hours?`, a: `<span class="m"><span class="fr"><span>148</span><span>8</span></span> = <span class="fr"><span><i>p</i></span><span>30</span></span></span>, so <span class="m">8<i>p</i> = 4,440</span> and <span class="m"><i>p</i> = 555</span>. She earns <b>$555</b>.` }
  ],
  origin: `Book V of Euclid's <i>Elements</i> sets out a theory of proportion developed by Eudoxus in the 4th century BCE. Solving for a missing fourth term was taught as the "rule of three", which appears in the <i>Aryabhatiya</i> of the Indian mathematician Aryabhata (499 CE) and was a staple of European merchant arithmetic for centuries.`
};
