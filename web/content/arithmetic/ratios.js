window.ARITH = window.ARITH || {};

ARITH["ratios"] = {
  title: "Ratios & Rates",
  short: "Comparing two quantities by division",
  grade: "Grade 6",
  hours: 5,
  voice: "plain",
  eyebrow: "Multiplicative reasoning · ratios and rates",
  hero: `<span class="m"><span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>a</i></span> : <span class="c4"><i>k</i></span><span class="c3"><i>b</i></span></span>`,
  lede: `A ratio says how much of one thing there is for each amount of another. Scaling both parts by the same number <span class="m c4"><i>k</i></span> keeps the ratio the same.`,
  plain: `<p>A lemonade recipe uses 2 cups of concentrate for every 5 cups of water. That comparison is a <b>ratio</b>, written <span class="m">2 : 5</span> and read "2 to 5". It describes the mix at any batch size: 4 cups to 10 cups, or 6 cups to 15, taste the same. Ratios that describe the same mix are <b>equivalent ratios</b>. You get them by multiplying both parts by the same number.</p>
<p>A <b>rate</b> compares quantities of different kinds, such as 222 miles on 6 gallons, or $5.40 for 20 ounces. Dividing so the second amount is 1 gives a <b>unit rate</b>: 37 miles per gallon, 27 cents per ounce. Unit rates let you compare things that come in different sizes.</p>`,
  formal: `<p>For quantities <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span>, the <b>ratio</b> <span class="m"><i>a</i> : <i>b</i></span> is the comparison of <span class="m"><i>a</i></span> to <span class="m"><i>b</i></span> by division, with associated value <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span>. Order matters: <span class="m"><i>a</i> : <i>b</i></span> and <span class="m"><i>b</i> : <i>a</i></span> are different ratios.</p>
<div class="display">Equivalence: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <i>c</i> : <i>d</i> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(<i>b</i>, <i>d</i> ≠ 0)</span><br>Scaling: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>a</i></span> : <span class="c4"><i>k</i></span><span class="c3"><i>b</i></span> &nbsp;for any <span class="c4"><i>k</i></span> ≠ 0<br>Unit rate of <i>a</i> per <i>b</i>: <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> : 1</div>
<p>A ratio of whole numbers is in <b>simplest form</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. A <b>rate</b> is a ratio of quantities measured in different units. Its unit is the quotient of the two units, such as mi/h.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First quantity", desc: "The amount named first. In 2 : 5 lemonade, it is the 2 cups of concentrate." },
    { c: "c3", sym: `<i>b</i>`, name: "Second quantity", desc: "The amount it is compared to. Here, the 5 cups of water." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number both parts are multiplied by. In the model, it is what each box is worth. Any nonzero k gives an equivalent ratio." },
    { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span>`, name: "Value of the ratio", desc: "The single number a ÷ b. Equivalent ratios all have the same value. The readout shows it as A per 1 B." }
  ],
  steps: { title: "How to work with a ratio", items: [
    `Write the quantities in the order the question names them, as <span class="m"><i>a</i> : <i>b</i></span>.`,
    `Simplify by dividing both parts by their greatest common factor.`,
    `To scale up or down, multiply both parts by the same factor <span class="m c4"><i>k</i></span>.`,
    `If you know the total, add the parts to get the number of equal shares, then find the size of one share.`,
    `For a rate, divide so the second quantity is 1 to get the unit rate. Keep the units attached.`
  ] },
  example: {
    prompt: `A lemonade mix uses concentrate and water in the ratio <span class="m">2 : 5</span>. You need 21 cups of lemonade for a party. How much of each do you use?`,
    lines: [
      { math: `<span class="m"><span class="c2">2</span> + <span class="c3">5</span> = 7</span>`, note: "One batch of the mix has 7 equal parts in total." },
      { math: `<span class="m">21 ÷ 7 = <span class="c4">3</span></span>`, note: "Each part is 3 cups, so the scale factor is 3." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c2">2</span> = 6</span>`, note: "Cups of concentrate." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c3">5</span> = 15</span>`, note: "Cups of water." },
      { math: `<span class="m">6 : 15 = 2 : 5</span>`, note: "Check: dividing both by 3 gives back the original ratio, and 6 + 15 = 21." }
    ],
    answer: `Use <span class="m">6</span> cups of concentrate and <span class="m">15</span> cups of water.`
  },
  why: `<p>Most everyday comparisons are ratios. A bigger box is not always the better deal; the unit price on the shelf tag, which is a rate, tells you. Mixing paint, fertilizer or a cleaning solution at the wrong ratio can ruin a job, and scaling a recipe by adding the same amount to every ingredient, instead of multiplying, changes the taste.</p>
<p>Once you know a ratio, any batch size, map distance or budget share follows by multiplication. Rates such as speed, pay per hour and price per pound turn one measurement into another, so you can predict a cost or a travel time before you commit to it.</p>
<p>Later math is built on them. A proportion sets two ratios equal to find a missing value. The slope of a line is a rate, the trigonometric functions are ratios of sides, and similar figures share a scale factor. In science nearly every quantity with "per" in its unit is a rate.</p>`,
  careers: [
    { role: "Pharmacy technician", use: "Mixes solutions in fixed ratios, such as 1 part concentrate to 4 parts diluent, and scales them to the volume ordered." },
    { role: "Chef", use: "Scales recipes up or down by multiplying every ingredient by the same factor so flavors stay balanced." },
    { role: "Cartographer", use: "Sets and reads map scales such as 1 : 24,000, where one unit on the map equals 24,000 of the same units on the ground." },
    { role: "Retail buyer", use: "Compares supplier offers by unit cost per item or per ounce before placing orders." },
    { role: "Concrete finisher", use: "Mixes cement, sand and gravel in ratios such as 1 : 2 : 3 by volume for the required strength." },
    { role: "Sports analyst", use: "Reports rates such as points per game and strikeouts per nine innings to compare players with different playing time." }
  ],
  life: [
    "Comparing unit prices to find the better buy at the grocery store",
    "Mixing concentrate, fertilizer or paint thinner at the label's ratio",
    "Working out your car's miles per gallon",
    "Scaling a recipe for more or fewer people",
    "Reading a map scale to estimate walking distance"
  ],
  fields: [
    { name: "Chemistry", use: "Mole ratios from balanced equations tell how much of each reactant combines." },
    { name: "Physics", use: "Speed, density and pressure are all rates: distance per time, mass per volume, force per area." },
    { name: "Economics", use: "Prices, exchange rates and debt-to-income ratios compare one quantity to another." },
    { name: "Architecture", use: "Scale drawings use a fixed ratio between drawing length and building length." }
  ],
  layers: {
    nudge: "Not yet. Check that you multiplied both parts by the same number.",
    concept: {
      lede: `Ratios answer the question: how much of one thing goes with how much of another? Rates add units, like miles per gallon or cents per ounce, so you can compare offers and keep mixes right.`,
      heading: "What are ratios and rates?",
      question: { text: "How much of each?", sub: `A ratio keeps two amounts in step. Watch both tapes in the model above grow together, then try it yourself.`,
        figure: { sym: `<i>k</i>(<i>a</i> + <i>b</i>)`, value: "20", cap: "in the whole mix", echo: "total" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["cup", "cups", "batch", "batches", "mile", "miles", "gallon", "gallons", "mL", "tablespoon", "tablespoons", "cm", "km", "innings", "batters", "yard", "yards", "shillings", "cubic yard", "cubic yards"],
      walk: { title: "Mix it together: lemonade for a party",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Your lemonade mix is 2 cups of concentrate for every 5 cups of water. You need 21 cups for a party. How much of each do you use?`,
        demo: { kind: "array", rows: 3, cols: 7, unit: "cup", cap: "cups of lemonade", alt: "One batch of 7 cups lights up, then a second and a third, with running totals 7, 14 and 21; then the total, 21 cups, lifts out." },
        lines: [
          { math: `<span class="c2">2</span> + <span class="c3">5</span> = 7`, note: `One batch is 2 cups of concentrate plus 5 cups of water. That makes 7 cups, one row.`, frame: 1 },
          { math: `21 ÷ 7 = <span class="c4">3</span>`, note: `21 cups is 3 batches. That 3 is the scale factor, <i>k</i>.`, frame: 3 },
          { math: `<span class="c4">3</span> × <span class="c2">2</span> = 6, &nbsp;<span class="c4">3</span> × <span class="c3">5</span> = 15`, note: `Three batches hold 3 times as much of each part. Both parts get the same 3.`, frame: 4 },
          { math: `2 + 7 = 9, &nbsp;5 + 7 = 12`, note: `A shortcut adds 7 cups to each part. The total is 21 again. But 9 : 12 is 3 : 4, a much stronger drink.`, frame: 4 },
          { math: `6 : 15 = <span class="c2">2</span> : <span class="c3">5</span>`, note: `Divide both parts by 3 and the first mix comes back. And 6 + 15 = 21.`, frame: 4 }
        ],
        predict: [null,
          { ask: `One batch is 7 cups. How many batches make 21 cups?`, parts: [{ label: "batches", ans: 3 }], hint: `Count rows of 7: 7, 14, 21.` },
          { ask: `You make 3 batches. How many cups of each do you pour?`, parts: [{ label: "cups of concentrate", ans: 6 }, { label: "cups of water", ans: 15 }], hint: `Each batch has 2 cups of concentrate and 5 cups of water. Multiply both by 3.` },
          { ask: `A friend says: "We need 14 more cups. Add 7 to each part: 9 and 12. That makes 21 too." Is it the same drink?`, choices: [
            { t: "No. 9 : 12 is a stronger mix", ok: true },
            { t: "Yes. The total is right", why: "The total is right, but the taste is off. Concentrate went from 2 cups in 7 to 9 cups in 21." },
            { t: "Yes. Both parts grew by the same amount", why: "Adding the same amount changes how the parts compare. Only multiplying keeps the mix." }
          ], hint: `Divide 9 and 12 by 3. Do you get 2 : 5 back?` },
          { ask: `Which check shows that 6 : 15 is the same mix as 2 : 5?`, choices: [
            { t: "Divide both parts by 3 and get 2 : 5", ok: true },
            { t: "6 + 15 = 21", why: "That checks the amount, not the taste. 9 + 12 is 21 too." },
            { t: "15 − 6 = 9", why: "A difference does not tell you the mix. 2 : 5 has a difference of 3." }
          ], hint: `The same mix means the same ratio. What number did you multiply by?` }],
        answer: `Use <span class="m"><span class="c2">6</span></span> cups of concentrate and <span class="m"><span class="c3">15</span></span> cups of water.` },
      ideas: [
        { c: "c2", title: "Two amounts, in order", term: "ratio", text: `2 : 5 means 2 cups of concentrate for every 5 cups of water. Swap the order and you get a different drink.`,
          demo: { kind: "bar", parts: [2, 5], labels: ["concentrate", "water"], unit: "cup", cap: "cups in one batch", alt: "A bar shows 2 cups of concentrate, then 5 cups of water, then a brace with the total of one batch, 7 cups." }, try: { label: "Set a 2 : 5 mix", lab: "a:2,b:5,k:1" } },
        { c: "c4", title: "Grow both parts the same way", term: "equivalent ratios", text: `Multiply both parts by the same number. Two batches of 2 : 5 make 4 : 10. Three make 6 : 15. The taste stays the same.`,
          demo: { kind: "array", rows: 4, cols: 7, unit: "cup", cap: "cups of lemonade", alt: "Batches of 7 cups light up one row at a time, with running totals 7, 14, 21 and 28; then 28 cups lifts out." }, try: { label: "Make 4 batches", lab: "a:2,b:5,k:4" } },
        { c: "c1", title: "Find the amount for one", term: "unit rate", text: `Divide so the second amount is 1. A car goes 222 miles on 6 gallons. That is 37 miles per gallon.`,
          demo: { kind: "bar", parts: [37, 37, 37, 37, 37, 37], labels: ["1 gal", "1 gal", "1 gal", "1 gal", "1 gal", "1 gal"], unit: "mile", cap: "miles on 6 gallons", alt: "Six equal pieces of 37 miles, one for each gallon, appear in turn; then a brace shows the total, 222 miles." }, try: { label: "Set 6 : 2, read A per 1 B", lab: "a:6,b:2,k:1" } }
      ],
      timelineTitle: "People have scaled ratios for thousands of years",
      timelineLead: `Traders, tax officials and teachers all needed the move you make with the <i>k</i> slider: take a known pair and scale it to a new size.`,
      timeline: [
        { when: "408 to 355 BCE", what: `Eudoxus of Cnidus builds a theory of ratio that works even for lengths with no common measure. Euclid sets it out in Book V of the <i>Elements</i>.` },
        { when: "By the 1st century CE", what: `The Chinese <i>Nine Chapters</i> has a chapter called "Millet and rice." It trades grain at fixed rates, finds unit prices and uses the rule of three. Each trade is one column of the ratio table in the model.` },
        { when: "1631 and 1651", what: `William Oughtred's <i>Clavis Mathematicae</i> brings in the sign ::. In 1651 Vincent Wing writes proportions as A : B :: C : D, with the colons we still use.` },
        { when: "17th century", what: `<i>Cocker's Arithmetick</i>, a leading textbook, teaches the rule of three: if 4 yards of cloth cost 12 shillings, what do 6 yards cost? That is 3 shillings a yard, so 18 shillings.` }
      ],
      history: `<p><b>The problem.</b> Trade runs on exchange: so much millet for so much rice, so much cloth for so much money. Officials also had to share goods and taxes fairly among households of different sizes. Each case asks the same thing: if this much goes with that much, how much goes with a new amount?</p>
<p><b>The solution.</b> The Chinese <i>Nine Chapters on the Mathematical Art</i>, written by several generations of scholars and in its last form by the 1st century CE, has a chapter on exchanging millet and rice at fixed rates and on unit prices. It solves such problems with what Europe later called the rule of three: from three known amounts in proportion, multiply two and divide by the third to get the fourth. In Greece, Eudoxus of Cnidus (408 to 355 BCE) built a theory of ratio that works even for lengths with no common measure, and Euclid set it out in Book V of the <i>Elements</i>.</p>
<p><b>What it changed.</b> The rule of three became a standard part of arithmetic for trade. In the 17th century, <i>Cocker's Arithmetick</i> taught it with a problem about the price of cloth. Notation followed: William Oughtred introduced the sign :: in a book published in 1631, and in 1651 Vincent Wing wrote proportions as A : B :: C : D, with the colons we still use. A shelf tag's unit price, a currency exchange and a map scale are the same calculation today.</p>`,
      sources: [
        { title: "The Nine Chapters on the Mathematical Art (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Nine_Chapters_on_the_Mathematical_Art" },
        { title: "Cross-multiplication and the rule of three (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cross-multiplication" },
        { title: "Eudoxus of Cnidus (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Eudoxus/" },
        { title: "Earliest Uses of Symbols of Relation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/relation/" }
      ],
      matters: { title: "Why ratios matter", text: `<p>A ratio lets you <b>change the size</b> of something and keep what makes it right.</p><ul class="why-chips"><li><b>Recipes</b> for more people</li><li><b>Mixes</b> at the label's strength</li><li><b>Prices</b> per ounce</li></ul><p>Know the ratio, and every batch, map distance and price follows by <b>multiplying</b>. Get it wrong, and the error grows with the batch.</p>` },
      stakes: { title: "Where ratios go wrong", lead: `Most slips come from adding when you should multiply, or from reading the parts in the wrong order.`, items: [
        { role: "Party lemonade", text: `Adding 7 cups to each part of 2 : 5 gives 9 : 12. The total is right, but 9 : 12 is 3 : 4, a much stronger drink.` },
        { role: "Kitchen", text: `Doubling a recipe by adding 2 cups to everything. The flavors drift apart.` },
        { role: "Pharmacy", text: `Mixing 4 parts concentrate to 1 part diluent when the order says 1 : 4.` },
        { role: "Grocery store", text: `Grabbing the bigger box because it seems cheaper. Only the unit price tells you.` }
      ], try: { label: "Show the 9 : 12 mix", lab: "a:3,b:4,k:3" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Pharmacy technician", figure: "50 mL a part", scene: `An order calls for 250 mL of a solution mixed 1 part concentrate to 4 parts diluent. <span class="m">1 + 4 = 5</span> parts, <span class="m">250 ÷ 5 = 50</span> mL per part: 50 mL of concentrate and 200 mL of diluent.`, takeaway: "Adding the parts turns a ratio into exact volumes for any order size." },
        { role: "Chef", figure: "15 tablespoons", scene: `A sauce for 4 people uses 6 tablespoons of butter. For 10 guests the scale factor is <span class="m">10 ÷ 4 = 2.5</span>, so <span class="m">6 × 2.5 = 15</span> tablespoons.`, takeaway: "Every ingredient gets the same factor, so the balance of flavors holds." },
        { role: "Cartographer", figure: "1 : 24,000", scene: `On a 1 : 24,000 map, 5 cm stands for <span class="m">5 × 24,000 = 120,000</span> cm on the ground, which is 1.2 km.`, takeaway: "One ratio converts every distance on the sheet." },
        { role: "Retail buyer", figure: "$1.70 a unit", scene: `Supplier A offers 144 units for $252, supplier B 200 units for $340. Unit costs: <span class="m">252 ÷ 144 = 1.75</span> and <span class="m">340 ÷ 200 = 1.70</span>. B is 5 cents cheaper per unit.`, takeaway: "Unit rates compare offers of different sizes fairly." },
        { role: "Concrete finisher", figure: "1 : 2 : 3", scene: `A 1 : 2 : 3 mix of cement, sand and gravel for 3 cubic yards of dry material has 6 parts, so each part is 0.5 cubic yard: 0.5 of cement, 1 of sand, 1.5 of gravel.`, takeaway: "The ratio fixes the strength. The total only sets the size of a part." },
        { role: "Sports analyst", figure: "10.8 per 9", scene: `A pitcher strikes out 54 batters in 45 innings. Per nine innings: <span class="m">54 ÷ 45 × 9 = 10.8</span>.`, takeaway: "A rate per fixed amount lets you compare players with different playing time." }
      ]
    },
    build: {
      lede: `Write the quantities in the order named, simplify by a common factor, scale by multiplying both parts, and divide to a unit rate when the units differ.`,
      task: { text: "Keep the mix the same at any size.", sub: `The same five moves work for lemonade, plant food, maps and prices. Try each one in the model above as you go.`,
        figure: { sym: `<i>k</i><i>a</i>`, value: "12", cap: "in the model", echo: "first" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows a ratio as two tapes of equal boxes: <span class="c2"><i>a</i></span> boxes for quantity A and <span class="c3"><i>b</i></span> boxes for quantity B. Each box is worth the <span class="c4">scale factor <i>k</i></span>. The ratio table lists the multiples, and the graph plots each pair as a point, so equivalent ratios fall on one straight line through 0. The readout gives the simplest form, both unit rates and the part-to-whole fractions.</p>`,
      keyTry: [{ label: "Set a to 6", lab: "a:6,b:5,k:1" }, { label: "Set b to 7", lab: "a:2,b:7,k:1" }, { label: "Scale 2 : 5 by 6", lab: "a:2,b:5,k:6" }, { label: "Show 1 : 2 = 4 : 8", lab: "a:1,b:2,k:4" }],
      objects: ["cup", "cups", "box", "boxes", "ounce", "ounces", "oz", "jar", "liter", "liters", "share", "shares", "mile", "miles", "gallon", "gallons", "egg", "eggs", "people", "meter", "meters", "km", "cm", "wins", "losses", "buckets", "batches", "cents"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `A ratio has a direction. 2 : 5 and 5 : 2 are different mixes. The order of the words sets the order of the numbers.`,
        `Dividing both parts by the same number keeps the mix the same. The numbers get smaller and quicker to work with.`,
        `Multiplying both parts by <i>k</i> makes every box worth <i>k</i>, so the mix stays the same. Adding the same amount to both parts changes it.`,
        `The parts of a ratio count equal shares. Their sum is the number of shares in the whole. The total divided by that sum is one share, the scale factor.`,
        `Making the second amount 1 puts every option on the same footing. The unit, such as miles per gallon, says what the number means.`
      ],
      stepTry: [{ label: "Swap to 5 : 2", lab: "a:5,b:2,k:1" }, null, null, null, { label: "Set 8 : 2, read A per 1 B", lab: "a:8,b:2,k:1" }],
      stepGoal: [null,
        { key: "first", eq: 35, text: `A team has 35 wins and 20 losses. Set <i>a</i> and <i>b</i> to that record in simplest form. Then set <i>k</i> so the tapes show 35 and 20 again.`, after: `<span class="m">35 : 20 = 7 : 4</span>. You divided both by 5, so each box is worth <span class="m c4"><i>k</i> = 5</span>.`, notYet: `Not yet. The greatest common factor of 35 and 20 is 5. Divide both by 5 for <i>a</i> and <i>b</i>, then set <i>k</i> to 5.` },
        { key: "first", eq: 48, text: `A paint mix is 8 cans of white for every 3 cans of blue. Scale it up 6 times in the model.`, after: `<span class="m">8 : 3 = 48 : 18</span>. Both parts were multiplied by 6.`, notYet: `Not yet. Set <i>a</i> to 8 and <i>b</i> to 3, then make every box worth 6.` },
        { key: "total", eq: 35, text: `A 3 : 4 mix of sand to gravel fills 35 buckets. Set <i>a</i> and <i>b</i>, then find the share size <i>k</i> and set it.`, after: `<span class="m">3 + 4 = 7</span> shares, and <span class="m">35 ÷ 7 = 5</span> buckets per share: 15 of sand and 20 of gravel.`, notYet: `Not yet. Set <i>a</i> to 3 and <i>b</i> to 4. Then <i>k</i> is 35 ÷ (3 + 4).` },
        null],
      matters: { title: "Why a Method Keeps the Mix Right", text: `<p>Ratio slips feel right. The total can be correct while the mix is wrong.</p><ul class="why-chips"><li><b>Order</b> of the words</li><li><b>Multiply</b> both parts</li><li><b>Units</b> on every rate</li></ul><p>A method checks all three, <b>every time</b>. It catches the 9 : 12 lemonade before anyone tastes it.</p>` },
      bridge: `<p>The party lemonade shows the pattern behind most ratio tasks: a fixed mix, a target total, and one share size that scales every part. Unit rates add a second tool, for comparing offers of different sizes.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Comparing unit prices to find the better buy", check: { q: `A 16 oz jar of peanut butter costs $4.00. A 28 oz jar costs $6.44. What does each cost per ounce, in cents?`, parts: [{ label: "16 oz jar, cents per oz", ans: 25 }, { label: "28 oz jar, cents per oz", ans: 23 }], hint: `Divide each price by its ounces. $4.00 is 400 cents and $6.44 is 644 cents.` }, figure: "23¢ an ounce",
          demo: { kind: "line", from: 20, to: 26, tick: 1, points: [{ v: 25, c: "c2", label: "16 oz" }, { v: 23, c: "c3", label: "28 oz" }], show: "dist", unit: "cent", cap: "cents saved per ounce", alt: "On a line of cents per ounce, the 16 oz jar sits at 25 and the 28 oz jar at 23; a bracket shows they are 2 cents apart." },
          lines: [{ math: `400 ÷ 16 = 25`, note: "The small jar costs 25 cents an ounce." }, { math: `644 ÷ 28 = 23`, note: "The big jar costs 23 cents an ounce." }, { math: `25 − 23 = 2`, note: "The big jar saves 2 cents on every ounce." }],
          predict: [null, { ask: `Now the big jar. What is 644 ÷ 28?`, parts: [{ label: "cents per oz", ans: 23 }], hint: `28 × 20 = 560. How many more 28s make 644?` }],
          link: `Divide price by size so the size becomes 1 ounce (step 5). Then the two jars compare fairly.` },
        { task: "Mixing plant food at the label's ratio", check: { q: `A plant food label says 1 part concentrate to 3 parts water. Your sprayer holds 16 liters. How many liters of each do you use?`, parts: [{ label: "liters of concentrate", ans: 4 }, { label: "liters of water", ans: 12 }], hint: `1 + 3 = 4 shares. How many liters is one share?` }, figure: "4 L a share",
          demo: { kind: "bar", parts: [4, 12], labels: ["concentrate", "water"], unit: "liter", alt: "A bar shows 4 liters of concentrate, then 12 liters of water, then a brace with the total, 16 liters." },
          lines: [{ math: `1 + 3 = 4`, note: "The mix has 4 equal shares." }, { math: `16 ÷ 4 = 4`, note: "Each share is 4 liters." }, { math: `1 × 4 = 4, &nbsp;3 × 4 = 12`, note: "4 liters of concentrate and 12 liters of water." }],
          predict: [null, { ask: `16 liters split into 4 shares. How many liters is one share?`, parts: [{ label: "liters per share", ans: 4 }], hint: `16 ÷ 4.` }],
          try: { label: "Show 1 : 3 with k = 4", lab: "a:1,b:3,k:4" },
          link: `The same moves as the party lemonade: add the parts, divide the total, multiply both parts (step 4).` },
        { task: "Working out your car's miles per gallon", check: { q: `Car A drove 300 miles on 10 gallons. Car B drove 252 miles on 7 gallons. What is each car's miles per gallon?`, parts: [{ label: "car A, mi/gal", ans: 30 }, { label: "car B, mi/gal", ans: 36 }], hint: `Divide miles by gallons for each car.` }, figure: "36 mi/gal",
          demo: { kind: "line", from: 25, to: 40, tick: 5, points: [{ v: 30, c: "c2", label: "car A" }, { v: 36, c: "c3", label: "car B" }], show: "dist", cap: "more miles per gallon", alt: "On a line of miles per gallon, car A sits at 30 and car B at 36; a bracket shows car B gets 6 more miles per gallon." },
          lines: [{ math: `300 ÷ 10 = 30`, note: "Car A goes 30 miles on each gallon." }, { math: `252 ÷ 7 = 36`, note: "Car B goes 36 miles on each gallon." }, { math: `36 − 30 = 6`, note: "Car B goes 6 more miles per gallon." }],
          predict: [null, { ask: `Now car B. What is 252 ÷ 7?`, parts: [{ label: "mi/gal", ans: 36 }], hint: `7 × 30 = 210. How many more 7s make 252?` }],
          link: `Divide miles by gallons so the gallons become 1 (step 5). Car B drove fewer miles, yet it goes farther on each gallon.` },
        { task: "Scaling a recipe for more people", check: { q: `Pancakes for 4 people use 2 cups of flour and 3 eggs. You are cooking for 12 people. How much flour and how many eggs?`, parts: [{ label: "cups of flour", ans: 6 }, { label: "eggs", ans: 9 }], hint: `12 people is how many times 4 people? Multiply both amounts by that.` }, figure: "k = 3",
          demo: { kind: "array", rows: 3, cols: 3, unit: "egg", cap: "eggs", alt: "Three rows of 3 eggs light up one row at a time, 3, 6 and 9; then 9 eggs lifts out." },
          lines: [{ math: `12 ÷ 4 = 3`, note: "12 people is 3 times as many as 4. So k = 3." }, { math: `3 × 2 = 6`, note: "6 cups of flour." }, { math: `3 × 3 = 9`, note: "9 eggs." }],
          predict: [null, { ask: `The scale factor is 3. How many cups of flour?`, parts: [{ label: "cups of flour", ans: 6 }], hint: `Multiply the 2 cups by 3.` }],
          try: { label: "Show 2 : 3 with k = 3", lab: "a:2,b:3,k:3" },
          link: `Multiply every ingredient by the same <i>k</i> (step 3). Adding 8 to each, since 12 is 8 more than 4, would give 10 cups and 11 eggs.` },
        { task: "Reading a map scale to estimate walking distance", check: { q: `A hiking map has a scale of 1 : 50,000. The trail is 6 cm long on the map. How long is it on the ground, in meters and in kilometers?`, parts: [{ label: "meters", ans: 3000 }, { label: "kilometers", ans: 3 }], hint: `1 cm on the map is 50,000 cm on the ground. There are 100 cm in a meter.` }, figure: "500 m a cm",
          demo: { kind: "line", from: 0, to: 3000, start: 0, jumps: [500, 500, 500, 500, 500, 500], unit: "meter", cap: "meters on the ground", alt: "A dot hops along a line in six jumps of 500 meters, one for each map centimeter, and lands at 3,000 meters." },
          lines: [{ math: `1 : 50,000`, note: "1 cm on the map is 50,000 cm on the ground." }, { math: `50,000 cm = 500 m`, note: "100 cm make 1 meter. So each map centimeter is 500 m." }, { math: `6 × 500 = 3,000 m = 3 km`, note: "Six map centimeters are 3,000 m, or 3 km." }],
          predict: [null, { ask: `How many meters is 50,000 cm?`, parts: [{ label: "meters", ans: 500 }], hint: `Divide by 100.` }],
          link: `A map scale is a ratio. Multiply the map distance by it, the same scaling as step 3, then change the units.` }
      ]
    },
    formal: {
      question: { text: "When are two ratios equal?", sub: `You can keep a mix the same at any size. Here are the words a textbook uses for the same ideas, and how to write a ratio problem out in full.`,
        figure: { sym: `<i>k</i>`, value: "4", cap: "the scale factor", echo: "k" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i> : <i>b</i>`, term: "Ratio", def: `A comparison of two quantities <i>a</i> and <i>b</i>, with <span class="m"><i>b</i> ≠ 0</span>, by division. The terms are ordered: <span class="m"><i>a</i> : <i>b</i></span> and <span class="m"><i>b</i> : <i>a</i></span> differ unless <span class="m"><i>a</i> = <i>b</i></span>.`, was: "2 cups to 5 cups, in that order" },
        { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span>`, term: "Value of a ratio", def: `The quotient <span class="m"><i>a</i> ÷ <i>b</i></span>. Two ratios are equal exactly when their values are equal.`, was: "A per 1 B in the readout" },
        { c: "c4", sym: `<i>ka</i> : <i>kb</i>`, term: "Equivalent ratios", def: `Ratios with the same value. For any <span class="m"><i>k</i> ≠ 0</span>, <span class="m"><i>a</i> : <i>b</i> = <i>ka</i> : <i>kb</i></span>.`, was: "growing both parts the same way" },
        { c: "c4", sym: `<i>k</i>`, term: "Scale factor", def: `The nonzero number that multiplies both terms of a ratio to give an equivalent ratio.`, was: "what each box is worth" },
        { c: "c1", sym: `<i>ad</i> = <i>bc</i>`, term: "Cross products", def: `For <span class="m"><i>a</i> : <i>b</i></span> and <span class="m"><i>c</i> : <i>d</i></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>, the products <i>ad</i> and <i>bc</i>. They are equal exactly when the ratios are equal.`, was: "the check that 6 : 15 is still 2 : 5" },
        { c: "c1", sym: `gcd(<i>a</i>, <i>b</i>) = 1`, term: "Simplest form", def: `A ratio of whole numbers whose terms have no common factor greater than 1. Divide both terms by their greatest common divisor to reach it.`, was: "dividing both parts by the greatest common factor" },
        { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>a</i> + <i>b</i></span></span>`, term: "Part-to-whole ratio", def: `For a part-to-part ratio <span class="m"><i>a</i> : <i>b</i></span>, the first part is <span class="m"><i>a</i>/(<i>a</i> + <i>b</i>)</span> of the whole.`, was: "2 of the 7 cups in a batch" },
        { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span> : 1`, term: "Rate and unit rate", def: `A rate is a ratio of quantities in different units. A unit rate has second term 1 and a compound unit, such as mi/gal.`, was: "miles per gallon, cents per ounce" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>A ratio names its two terms. Change one word and the same numbers describe a <b>different mix</b>.</p><ul class="why-chips"><li>concentrate <b>to water</b>, 2 : 5</li><li>concentrate <b>to lemonade</b>, 2 : 5</li></ul><p>The first makes concentrate <span class="m">2/7</span> of the drink. In 21 cups that is 6 cups. The second makes it <span class="m">2/5</span> of the drink, or 8.4 cups. Exact words let someone else <b>mix the batch you meant</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here come from adding instead of multiplying, swapping the terms, or mixing up a part with the whole.`,
      setupIntro: `<p>The party lemonade from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a ratio problem", items: [
        { say: `<b>Name the quantities.</b> Give each a letter and a unit, and write the ratio in the order the problem names them.`, math: `<span class="m"><span class="c2"><i>c</i></span> : <span class="c3"><i>w</i></span> = 2 : 5</span>, &nbsp;<i>c</i> and <i>w</i> in cups` },
        { say: `<b>Write the scaling.</b> Equivalent ratios are nonzero multiples of the same pair, so introduce the scale factor.`, math: `<span class="m"><span class="c2"><i>c</i></span> = 2<span class="c4"><i>k</i></span>, &nbsp;<span class="c3"><i>w</i></span> = 5<span class="c4"><i>k</i></span>, &nbsp;<i>k</i> &gt; 0</span>` },
        { say: `<b>Write the equation from the total.</b>`, math: `<span class="m">2<i>k</i> + 5<i>k</i> = 21 &nbsp;⇒&nbsp; 7<i>k</i> = 21</span>` },
        { say: `<b>Solve and substitute.</b>`, math: `<span class="m"><span class="c4"><i>k</i></span> = 3, &nbsp;<i>c</i> = 6, &nbsp;<i>w</i> = 15</span>` },
        { say: `<b>Check with cross products, then answer with units.</b> Equal ratios have equal cross products.`, math: `<span class="m">6 · 5 = 15 · 2 = 30</span>, <span class="m">6 + 15 = 21</span> &nbsp;→ Use 6 cups of concentrate and 15 cups of water.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the ratio in order, then simplify, scale or divide to a unit rate. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can work with ratios and rates the formal way.",
      checks: [
        { hint: `Divide both terms by <span class="m">gcd(18, 24)</span>.`, parts: [{ label: "nurses", ans: 3 }, { label: "aides", ans: 4 }] },
        { hint: `First find the whole: girls plus boys. Then simplify girls : whole.`, parts: [{ label: "girls", ans: 4 }, { label: "all students", ans: 9 }] },
        { hint: `Divide miles by gallons so the second term is 1.`, parts: [{ label: "miles per gallon", ans: 37 }] },
        { hint: `Divide each price by its ounces, then compare dollars per ounce.`, parts: [{ label: "12 oz box, $ per oz", ans: 0.29 }, { label: "20 oz box, $ per oz", ans: 0.27 }] },
        { hint: `Set pages : minutes equal: <span class="m">45 : 3 = 240 : <i>m</i></span>, then use cross products.`, parts: [{ label: "minutes m", ans: 16 }] }
      ]
    }
  },
  prereqWhy: {
    "fractions": "A ratio a : b has the value a/b, and simplifying or scaling a ratio works exactly like finding equivalent fractions."
  },
  unlocksWhy: {
    "proportions": "A proportion is a statement that two ratios are equal, used to find a missing quantity."
  },
  beyond: [
    { field: "Algebra I", why: "The slope of a line is the rate of change in y per unit change in x." },
    { field: "Geometry", why: "Similar figures have corresponding sides in the same ratio, which drives scale drawings and indirect measurement." },
    { field: "Trigonometry", why: "Sine, cosine and tangent are defined as ratios of side lengths in a right triangle." }
  ],
  mistakes: [
    { wrong: `Scaling by adding: turning <span class="m">2 : 5</span> into <span class="m">9 : 12</span> by adding 7 to each part to reach 21 cups.`, fix: `Scale by multiplying both parts by the same factor. <span class="m">21 ÷ 7 = 3</span>, so <span class="m">2 : 5 = 6 : 15</span>. The ratio 9 : 12 is 3 : 4, a different mix.` },
    { wrong: `Writing the ratio of 12 girls to 15 boys as <span class="m">15 : 12</span>.`, fix: `Keep the order of the words. Girls to boys is <span class="m">12 : 15 = 4 : 5</span>.` },
    { wrong: `Mixing part-to-part with part-to-whole: saying 2 : 5 lemonade is "2/5 concentrate".`, fix: `With 2 parts concentrate and 5 parts water there are 7 parts in all, so concentrate is <span class="m"><span class="fr"><span>2</span><span>7</span></span></span> of the drink.` },
    { wrong: `Comparing rates in different units: "60 km/h is faster than 40 mi/h because 60 is bigger."`, fix: `Convert first. 1 mile is about 1.609 km, so 40 mi/h is about 64 km/h, which is faster than 60 km/h.` }
  ],
  practice: [
    { ctx: "Workplace", q: `A clinic has 18 nurses and 24 aides. Write the ratio of nurses to aides in simplest form.`, a: `<span class="m">gcd(18, 24) = 6</span>, so <span class="m">18 : 24 = <b>3 : 4</b></span>.` },
    { ctx: "School", q: `A class has 12 girls and 15 boys. What is the ratio of girls to all students, in simplest form?`, a: `There are <span class="m">12 + 15 = 27</span> students. <span class="m">12 : 27 = <b>4 : 9</b></span>.` },
    { ctx: "Driving", q: `A car goes 222 miles on 6 gallons of gas. What is its fuel economy as a unit rate?`, a: `<span class="m">222 ÷ 6 = 37</span>, so <b>37</b> miles per gallon.` },
    { ctx: "Shopping", q: `Which is the better buy: 12 oz of cereal for $3.48 or 20 oz for $5.40?`, a: `<span class="m">3.48 ÷ 12 = 0.29</span> and <span class="m">5.40 ÷ 20 = 0.27</span>. The <b>20 oz box</b> is cheaper per ounce ($0.27 vs $0.29).` },
    { ctx: "Office", q: `Write an equation with a letter for the unknown, then solve: a printer prints 45 pages in 3 minutes. At the same rate, how many minutes <i>m</i> does it take to print 240 pages?`, a: `<span class="m">45 : 3 = 240 : <i>m</i></span>, so <span class="m">45<i>m</i> = 3 × 240 = 720</span> and <b><i>m</i> = 16 minutes</b>.` }
  ],
  origin: `The Greek mathematician Eudoxus of Cnidus (408 to 355 BCE) developed a theory of ratio and proportion that works even for lengths with no common measure. Euclid preserved it in Book V of the <i>Elements</i>.`
};
