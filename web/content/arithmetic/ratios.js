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
  plain: `<p>A lemonade recipe uses 2 cups of concentrate for every 5 cups of water. That comparison is a <b>ratio</b>, written <span class="m">2 : 5</span> and read "2 to 5". It describes the mix, whatever the size of the batch: 4 cups to 10 cups, or 6 cups to 15, taste the same. Ratios that describe the same mix are <b>equivalent ratios</b>, and you get them by multiplying both parts by the same number.</p>
<p>A <b>rate</b> compares quantities of different kinds, such as 222 miles on 6 gallons, or $5.40 for 20 ounces. Dividing so the second amount is 1 gives a <b>unit rate</b>: 37 miles per gallon, 27 cents per ounce. Unit rates let you compare things that come in different sizes.</p>`,
  formal: `<p>For quantities <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span> with <span class="m"><i>b</i> ≠ 0</span>, the <b>ratio</b> <span class="m"><i>a</i> : <i>b</i></span> is the comparison of <span class="m"><i>a</i></span> to <span class="m"><i>b</i></span> by division, with associated value <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span>. Order matters: <span class="m"><i>a</i> : <i>b</i></span> and <span class="m"><i>b</i> : <i>a</i></span> are different ratios.</p>
<div class="display">Equivalence: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <i>c</i> : <i>d</i> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(<i>b</i>, <i>d</i> ≠ 0)</span><br>Scaling: <span class="c2"><i>a</i></span> : <span class="c3"><i>b</i></span> = <span class="c4"><i>k</i></span><span class="c2"><i>a</i></span> : <span class="c4"><i>k</i></span><span class="c3"><i>b</i></span> &nbsp;for any <span class="c4"><i>k</i></span> ≠ 0<br>Unit rate of <i>a</i> per <i>b</i>: <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> : 1</div>
<p>A ratio of whole numbers is in <b>simplest form</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. A <b>rate</b> is a ratio of quantities measured in different units. Its unit is the quotient of the two units, such as mi/h.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First quantity", desc: "The amount named first. In 2 : 5 lemonade, it is the 2 cups of concentrate." },
    { c: "c3", sym: `<i>b</i>`, name: "Second quantity", desc: "The amount it is compared to. Here, the 5 cups of water." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number both parts are multiplied by. Any nonzero k gives an equivalent ratio." },
    { c: "c1", sym: `<span class="fr"><span><i>a</i></span><span><i>b</i></span></span>`, name: "Value of the ratio", desc: "The single number a ÷ b. Equivalent ratios all have the same value." }
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
      { math: `<span class="m"><span class="c2">2</span> + <span class="c3">5</span> = 7</span>`, note: "Each batch unit has 7 equal parts in total." },
      { math: `<span class="m">21 ÷ 7 = <span class="c4">3</span></span>`, note: "Each part is 3 cups, so the scale factor is 3." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c2">2</span> = 6</span>`, note: "Cups of concentrate." },
      { math: `<span class="m"><span class="c4">3</span> × <span class="c3">5</span> = 15</span>`, note: "Cups of water." },
      { math: `<span class="m">6 : 15 = 2 : 5</span>`, note: "Check: dividing both by 3 gives back the original ratio, and 6 + 15 = 21." }
    ],
    answer: `Use <span class="m">6</span> cups of concentrate and <span class="m">15</span> cups of water.`
  },
  why: `<p>Most everyday comparisons are ratios. A bigger box is not always the better deal; the unit price on the shelf tag, which is a rate, tells you. Mixing paint, fertiliser or a cleaning solution at the wrong ratio can ruin a job, and scaling a recipe by adding the same amount to every ingredient, instead of multiplying, changes the taste.</p>
<p>Once you know a ratio, any batch size, map distance or budget share follows by multiplication. Rates such as speed, pay per hour and price per pound turn one measurement into another, so you can predict a cost or a travel time before you commit to it.</p>
<p>Later math is built on them. A proportion sets two ratios equal to find a missing value. The slope of a line is a rate, the trigonometric functions are ratios of sides, and similar figures share a scale factor. In science nearly every quantity with "per" in its unit is a rate.</p>`,
  careers: [
    { role: "Pharmacy technician", use: "Mixes solutions in fixed ratios, such as 1 part concentrate to 4 parts diluent, and scales them to the volume ordered." },
    { role: "Chef", use: "Scales recipes up or down by multiplying every ingredient by the same factor so flavours stay balanced." },
    { role: "Cartographer", use: "Sets and reads map scales such as 1 : 24,000, where one unit on the map equals 24,000 of the same units on the ground." },
    { role: "Retail buyer", use: "Compares supplier offers by unit cost per item or per ounce before placing orders." },
    { role: "Concrete finisher", use: "Mixes cement, sand and gravel in ratios such as 1 : 2 : 3 by volume for the required strength." },
    { role: "Sports analyst", use: "Reports rates such as points per game and strikeouts per nine innings to compare players with different playing time." }
  ],
  life: [
    "Comparing unit prices to find the better buy at the grocery store",
    "Mixing concentrate, fertiliser or paint thinner at the label's ratio",
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
    concept: {
      lede: `Ratios answer the question: how much of one thing goes with how much of another? Rates add units, like miles per gallon or dollars per ounce, so you can compare offers and keep mixtures right.`,
      heading: "What are ratios and rates?",
      history: `<p><b>The problem.</b> Trade runs on exchange: so much millet for so much rice, so much cloth for so much money. Officials also had to share goods and taxes fairly among households of different sizes. Each case asks the same thing: if this much goes with that much, how much goes with a new amount?</p>
<p><b>The solution.</b> The Chinese <i>Nine Chapters on the Mathematical Art</i>, compiled over several centuries and in its final form by the 1st century CE, has a chapter on exchanging millet and rice at fixed rates and on unit prices. It solves such problems with what Europe later called the rule of three: from three known amounts in proportion, multiply two and divide by the third to get the fourth. In Greece, Eudoxus of Cnidus (about 408–355 BCE) built a theory of ratio that works even for lengths with no common measure, and Euclid set it out in Book V of the <i>Elements</i>.</p>
<p><b>What it changed.</b> The rule of three became a standard part of arithmetic for trade. In 17th-century England, <i>Cocker's Arithmetick</i> taught it with a problem about the price of cloth. Notation followed: in 1651 Vincent Wing wrote proportions as A : B :: C : D, with the colons we still use. A shelf tag's unit price, a currency exchange and a map scale are the same calculation today.</p>`,
      sources: [
        { title: "The Nine Chapters on the Mathematical Art (Wikipedia)", url: "https://en.wikipedia.org/wiki/The_Nine_Chapters_on_the_Mathematical_Art" },
        { title: "Cross-multiplication and the rule of three (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cross-multiplication" },
        { title: "Eudoxus of Cnidus (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Eudoxus/" },
        { title: "Earliest Uses of Symbols of Relation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/relation/" }
      ],
      examples: [
        { role: "Pharmacy technician", scene: `An order calls for 250 mL of a solution mixed 1 part concentrate to 4 parts diluent. <span class="m">1 + 4 = 5</span> parts, <span class="m">250 ÷ 5 = 50</span> mL per part: 50 mL of concentrate and 200 mL of diluent.`, takeaway: "Adding the parts turns a ratio into exact volumes for any order size." },
        { role: "Chef", scene: `A sauce for 4 people uses 6 tablespoons of butter. For 10 guests the scale factor is <span class="m">10 ÷ 4 = 2.5</span>, so <span class="m">6 × 2.5 = 15</span> tablespoons.`, takeaway: "Every ingredient gets the same factor, so the balance of flavours holds." },
        { role: "Cartographer", scene: `On a 1 : 24,000 map, 5 cm stands for <span class="m">5 × 24,000 = 120,000</span> cm on the ground, which is 1.2 km.`, takeaway: "One ratio converts every distance on the sheet." },
        { role: "Retail buyer", scene: `Supplier A offers 144 units for $252, supplier B 200 units for $340. Unit costs: <span class="m">252 ÷ 144 = 1.75</span> and <span class="m">340 ÷ 200 = 1.70</span>. B is 5 cents cheaper per unit.`, takeaway: "Unit rates compare offers of different sizes fairly." },
        { role: "Concrete finisher", scene: `A 1 : 2 : 3 mix of cement, sand and gravel for 3 cubic yards of dry material has 6 parts, so each part is 0.5 cubic yard: 0.5 of cement, 1 of sand, 1.5 of gravel.`, takeaway: "The ratio fixes the strength; the total only sets the size of a part." },
        { role: "Sports analyst", scene: `A pitcher strikes out 54 batters in 45 innings. Per nine innings: <span class="m">54 ÷ 45 × 9 = 10.8</span>.`, takeaway: "A rate per fixed amount lets you compare players with different playing time." }
      ]
    },
    build: {
      lede: `Write the quantities in the order named, simplify by a common factor, scale by multiplying both parts, and divide to a unit rate when the units differ.`,
      intro: `<p>The model above shows a ratio as two tapes of equal boxes: <span class="c2"><i>a</i></span> boxes for quantity A and <span class="c3"><i>b</i></span> boxes for quantity B, each box worth the <span class="c4">scale factor <i>k</i></span>. The ratio table below lists the multiples, and the graph plots each pair as a point, so equivalent ratios fall on one straight line through the origin. The readout gives the simplest form, both unit rates and the part-to-whole fractions.</p>`,
      stepWhy: [
        `A ratio has a direction. 2 : 5 and 5 : 2 describe different mixes, so the order of the words fixes the order of the numbers.`,
        `Dividing both parts by the same number keeps their quotient the same, so the mix is unchanged and the numbers get smaller and easier to use.`,
        `Multiplying both parts by <i>k</i> multiplies every box by <i>k</i>, so the quotient <i>a</i>/<i>b</i> stays the same. Adding the same amount to both parts would change it.`,
        `The parts of a ratio count equal shares. Their sum is the number of shares in the whole, so the total divided by that sum is the size of one share, which is the scale factor.`,
        `Making the second quantity 1 puts every option on the same footing, so you compare like with like. The unit, such as miles per gallon, says what the number means.`
      ],
      bridge: `<p>The party lemonade shows the pattern behind most ratio tasks: a fixed mix, a target total, and one share size that scales every part. Unit rates add a second tool, for comparing offers of different sizes.</p>`,
      tasks: [
        { task: "Comparing unit prices at the store", link: `Divide price by size, as in step 5 and practice item 4, and compare cents per ounce.` },
        { task: "Mixing concentrate, fertiliser or paint thinner at the label's ratio", link: `Add the parts and divide the total, as the example did with 2 + 5 = 7 and 21 ÷ 7 = 3.` },
        { task: "Working out your car's miles per gallon", link: `Divide the miles driven by the gallons used at a fill-up, as in practice item 3: 222 ÷ 6 = 37.` },
        { task: "Scaling a recipe for more or fewer people", link: `Multiply every ingredient by the same factor, as step 3 and the example multiplied 2 and 5 by 3.` },
        { task: "Reading a map scale to estimate walking distance", link: `A scale such as 1 : 24,000 is a ratio. Multiply the map distance by 24,000, the same scaling as step 3, then convert the units.` }
      ]
    },
    formal: {
      setup: { title: "Writing a ratio problem", items: [
        { say: `<b>Name the quantities.</b> Give each a letter and a unit, and write the ratio in the order the problem names them.`, math: `<span class="m"><span class="c2"><i>c</i></span> : <span class="c3"><i>w</i></span> = 2 : 5</span>, &nbsp;<i>c</i> and <i>w</i> in cups` },
        { say: `<b>Write the scaling.</b> Equivalent ratios are nonzero multiples of the same pair, so introduce the scale factor.`, math: `<span class="m"><span class="c2"><i>c</i></span> = 2<span class="c4"><i>k</i></span>, &nbsp;<span class="c3"><i>w</i></span> = 5<span class="c4"><i>k</i></span>, &nbsp;<i>k</i> &gt; 0</span>` },
        { say: `<b>Write the equation from the total.</b>`, math: `<span class="m">2<i>k</i> + 5<i>k</i> = 21 &nbsp;⇒&nbsp; 7<i>k</i> = 21</span>` },
        { say: `<b>Solve and substitute.</b>`, math: `<span class="m"><span class="c4"><i>k</i></span> = 3, &nbsp;<i>c</i> = 6, &nbsp;<i>w</i> = 15</span>` },
        { say: `<b>Check with cross products, then answer with units.</b> Equal ratios have equal cross products.`, math: `<span class="m">6 · 5 = 15 · 2 = 30</span>, <span class="m">6 + 15 = 21</span> &nbsp;→ Use 6 cups of concentrate and 15 cups of water.` }
      ] }
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
    { wrong: `Writing the ratio of 12 girls to 15 boys as <span class="m">15 : 12</span>.`, fix: `Keep the order of the words. Girls to boys is <span class="m">12 : 15 = 4 : 5</span>.` },
    { wrong: `Scaling by adding: turning <span class="m">2 : 5</span> into <span class="m">4 : 7</span> by adding 2 to each part.`, fix: `Scale by multiplying both parts by the same factor. <span class="m">2 : 5 = 4 : 10</span>.` },
    { wrong: `Mixing part-to-part with part-to-whole: saying 2 : 5 lemonade is "2/5 concentrate".`, fix: `With 2 parts concentrate and 5 parts water there are 7 parts in all, so concentrate is <span class="m"><span class="fr"><span>2</span><span>7</span></span></span> of the drink.` },
    { wrong: `Comparing rates in different units: "60 km/h is faster than 40 mi/h because 60 is bigger."`, fix: `Convert first. 1 mile is about 1.609 km, so 40 mi/h is about 64 km/h, which is faster than 60 km/h.` }
  ],
  practice: [
    { ctx: "Workplace", q: `A clinic has 18 nurses and 24 aides. Write the ratio of nurses to aides in simplest form.`, a: `<span class="m">gcd(18, 24) = 6</span>, so <span class="m">18 : 24 = 3 : 4</span>.` },
    { ctx: "School", q: `A class has 12 girls and 15 boys. What is the ratio of girls to all students, in simplest form?`, a: `There are <span class="m">12 + 15 = 27</span> students. <span class="m">12 : 27 = 4 : 9</span>.` },
    { ctx: "Driving", q: `A car goes 222 miles on 6 gallons of gas. What is its fuel economy as a unit rate?`, a: `<span class="m">222 ÷ 6 = 37</span>, so 37 miles per gallon.` },
    { ctx: "Shopping", q: `Which is the better buy: 12 oz of cereal for $3.48 or 20 oz for $5.40?`, a: `<span class="m">3.48 ÷ 12 = 0.29</span> and <span class="m">5.40 ÷ 20 = 0.27</span>. The 20 oz box is cheaper per ounce ($0.27 vs $0.29).` },
    { ctx: "Office", q: `Write an equation with a letter for the unknown, then solve: a printer prints 45 pages in 3 minutes. At the same rate, how many minutes <i>m</i> does it take to print 240 pages?`, a: `<span class="m">45 : 3 = 240 : <i>m</i></span>, so <span class="m">45<i>m</i> = 3 × 240 = 720</span> and <b><i>m</i> = 16 minutes</b>.` }
  ],
  origin: `The Greek mathematician Eudoxus of Cnidus (4th century BCE) developed a theory of ratio and proportion that works even for lengths with no common measure. Euclid preserved it in Book V of the <i>Elements</i> (c. 300 BCE).`
};
