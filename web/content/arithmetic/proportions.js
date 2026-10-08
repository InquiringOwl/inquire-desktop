window.ARITH = window.ARITH || {};

ARITH["proportions"] = {
  title: "Proportions",
  short: "Two equal ratios, one missing value",
  grade: "Grades 6–7",
  hours: 6,
  voice: "plain",
  eyebrow: "Multiplicative reasoning · equal ratios",
  hero: `<span class="m"><span class="fr"><span class="c2"><i>a</i></span><span class="c2"><i>b</i></span></span> = <span class="fr"><span class="c2"><i>c</i></span><span class="c1"><i>x</i></span></span> &nbsp;⇒&nbsp; <span class="c1"><i>x</i></span> = <span class="fr"><span><i>bc</i></span><span><i>a</i></span></span></span>`,
  lede: `A proportion says two ratios are equal. If three of the four numbers are known, the fourth is determined.`,
  plain: `<p>Your car used 9 gallons of gas to drive 252 miles, and a 420-mile trip is coming up. How much gas will it take? If the car burns fuel at a steady rate, gallons and miles grow together: twice the distance takes twice the gas. The ratio of gallons to miles stays the same.</p>
<p>Writing that down gives a <b>proportion</b>, a statement that two ratios are equal: <span class="m">9/252 = <i>x</i>/420</span>. Three numbers are known and one is missing. <b>Cross-multiplication</b> finds it: <span class="m">252<i>x</i> = 9 × 420 = 3,780</span>, so <span class="m"><i>x</i> = 15</span> gallons. The fixed rate linking the two quantities, here 28 miles per gallon, is the <b>constant of proportionality</b>.</p>
<p>Before setting one up, check that the situation really is proportional. Twice the workers on a job usually means about half the time, so time and workers do not grow together. That is an <b>inverse</b> relationship, and it needs a different method.</p>`,
  formal: `<p>A <b>proportion</b> is an equation <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with <span class="m"><i>b</i>, <i>d</i> ≠ 0</span>. The <b>cross-product property</b> states</p>
<div class="display"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> &nbsp;⇔&nbsp; <i>ad</i> = <i>bc</i> &nbsp;<span class="dim">(multiply both sides by <i>bd</i>)</span></div>
<p>Two quantities <span class="m"><i>x</i></span> and <span class="m"><i>y</i></span> are <b>directly proportional</b> if <span class="m"><i>y</i> = <i>kx</i></span> for a constant <span class="m"><i>k</i> ≠ 0</span>, the <b>constant of proportionality</b>. Then <span class="m"><i>y</i>/<i>x</i></span> is the same for every pair, so any two pairs form a proportion. They are <b>inversely proportional</b> if <span class="m"><i>xy</i> = <i>k</i></span>, which does not give a proportion of this form.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i> : <i>b</i>`, name: "Known pair", desc: "A matched pair of values you already know, such as 9 gallons for 252 miles." },
    { c: "c2", sym: `<i>c</i>`, name: "Known value of the new pair", desc: "The value you have for the new situation, such as 420 miles." },
    { c: "c1", sym: `<i>x</i>`, name: "Unknown", desc: "The missing value that keeps the two ratios equal." },
    { c: "c4", sym: `<i>k</i>`, name: "Constant of proportionality", desc: "The fixed ratio y/x. On the double number line it is how far one line stretches relative to the other." }
  ],
  steps: { title: "How to solve a proportion", items: [
    `Check that the situation is proportional: doubling one quantity should double the other.`,
    `Write the known ratio with units, such as <span class="m">gallons/miles</span>.`,
    `Write the second ratio in the same order, with <span class="m c1"><i>x</i></span> for the unknown.`,
    `Cross-multiply to get <span class="m"><i>ad</i> = <i>bc</i></span>.`,
    `Divide to isolate <span class="m c1"><i>x</i></span>.`,
    `Check by comparing the unit rates or plugging back in.`
  ] },
  example: {
    prompt: `Your car used 9 gallons of gas to drive 252 miles. At the same rate, how many gallons will a 420-mile trip use?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c2">9</span><span class="c2">252</span></span> = <span class="fr"><span class="c1"><i>x</i></span><span class="c2">420</span></span></span>`, note: "Gallons over miles on both sides." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 9 × 420</span>`, note: "Cross-multiply." },
      { math: `<span class="m">252<span class="c1"><i>x</i></span> = 3,780</span>`, note: "Multiply out the right side." },
      { math: `<span class="m"><span class="c1"><i>x</i></span> = 3,780 ÷ 252 = 15</span>`, note: "Divide both sides by 252." },
      { math: `<span class="m">252 ÷ 9 = 28 = 420 ÷ 15</span>`, note: "Check: both trips get 28 miles per gallon." }
    ],
    answer: `The trip will use <span class="m">15</span> gallons of gas.`
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
    concept: {
      lede: `If you know how two quantities go together once, a proportion tells you how they go together at any other size: more gas for a longer trip, more flour for a bigger batch.`,
      heading: `What is a proportion?`,
      history: `<p><b>The problem.</b> Traders met the same question every day: if a known amount of goods sells at a known price, what does a different amount cost? A problem in the twelfth-century Indian mathematician Bhāskara II's <i>Bījagaṇita</i>, addressed to "the best of merchants", asks the price of a weight of saffron from a known rate.</p>
<p><b>The solution.</b> The answer was a fixed routine, the rule of three. Chinese mathematicians knew it before the 2nd century CE. In India it was called <i>trairāśika</i>, a term found in the Bakhshali manuscript, and Aryabhata stated the rule in the <i>Aryabhatiya</i>, finished in 499 CE: multiply the known result by the new amount and divide by the known amount. Europe took it up much later, and then it became the core of merchant arithmetic. Cocker's <i>Arithmetick</i>, a leading 17th-century textbook, introduces it with cloth: if 4 yards cost 12 shillings, what do 6 yards cost?</p>
<p><b>What it changed.</b> One memorised routine let clerks, shopkeepers and students scale any price, wage or quantity without algebra. It was hard work for some: an anonymous manuscript of 1570 complains "The Rule of three doth puzzle me". In 1855 Charles Darwin wrote that he had "no faith in anything short of actual measurement and the Rule of Three". The cross-multiplication in this lesson is the same rule, written as an equation.</p>`,
      sources: [
        { title: "Trairāśika (Wikipedia)", url: "https://en.wikipedia.org/wiki/Trair%C4%81%C5%9Bika" },
        { title: "Cross-multiplication (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cross-multiplication" },
        { title: "Aryabhata I (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Aryabhata_I/" }
      ],
      examples: [
        { role: "Nurse", scene: `A liquid medicine has an example strength of 250 mg in 5 mL, and the order is 400 mg. <span class="m">250/5 = 400/<i>x</i></span>, so <span class="m">250<i>x</i> = 2,000</span> and <b>8 mL</b>.`, takeaway: "Keeping milligrams over millilitres on both sides is what makes the dose safe." },
        { role: "Wildlife biologist", scene: `60 fish are tagged and released. Later 50 are caught and 12 carry tags. <span class="m">60/<i>N</i> = 12/50</span>, so <span class="m"><i>N</i> = 60 × 50 ÷ 12 = 250</span>, about <b>250 fish</b> in the lake.`, takeaway: "A small sample predicts a whole population when the ratio is the same in both." },
        { role: "Architect", scene: `At a scale of 1/4 in to 1 ft, a wall measures 6.5 in on the drawing. <span class="m">6.5 ÷ 0.25 = 26</span>, so the wall is <b>26 ft</b> long.`, takeaway: "Every dimension on a plan is one proportion away from the real building." },
        { role: "Pharmacist", scene: `A cream formula uses 2 g of active ingredient per 100 g. For a 250 g batch: <span class="m">2/100 = <i>x</i>/250</span>, so <b>5 g</b>.`, takeaway: "Scaling every ingredient by the same factor keeps the strength unchanged." },
        { role: "Travel agent", scene: `At an example rate of 1 US dollar to 0.92 euro, a €230 hotel bill costs <span class="m">230 ÷ 0.92 = 250</span>, so <b>$250</b>.`, takeaway: "An exchange rate is a known pair, so any price converts with one proportion." },
        { role: "Graphic designer", scene: `A 1,920 × 1,080 image is resized to 800 pixels wide. Height: <span class="m">1,080 × 800 ÷ 1,920 = 450</span> pixels.`, takeaway: "Keeping width over height fixed stops the picture from stretching." }
      ]
    },
    build: {
      lede: `Write the known pair and the new pair as two ratios in the same order, cross-multiply, and divide to find the missing value.`,
      intro: `<p>The model is a double number line. The top line counts one quantity and the bottom line the other, and the two lines stretch by the same factor. The cyan pair <i>a</i> and <i>b</i> is the match you know, such as 3 cups of flour for 36 cookies. The amber pair is the new amount <i>c</i> with the unknown <i>x</i> lined up beneath it. Choose a scenario or change <i>a</i>, <i>b</i> or <i>c</i>, and the panel shows the cross-multiplication and the unit rate.</p>`,
      stepWhy: [
        `A proportion assumes the ratio never changes. If doubling one quantity does not double the other, as with more workers and less time, the equation gives a confident but wrong answer.`,
        `Units label each position. Writing gallons/miles makes clear what goes on top and what goes underneath.`,
        `Equal ratios compare like with like. If gallons are on top on the left, gallons must be on top on the right, or you are setting a ratio equal to its reciprocal.`,
        `Multiplying both sides by both denominators clears the fractions: <span class="m"><i>a</i>/<i>b</i> = <i>c</i>/<i>d</i></span> becomes <span class="m"><i>ad</i> = <i>bc</i></span>. Cross-multiplication is that step done in one move.`,
        `The unknown is now multiplied by a number, and dividing both sides by that number undoes it: <span class="m">252<i>x</i> = 3,780</span> gives <span class="m"><i>x</i> = 15</span>.`,
        `Equal ratios mean equal unit rates. If both pairs give the same rate, 28 miles per gallon in the worked example, the answer is right.`
      ],
      bridge: `<p>The fuel problem is the pattern behind most everyday scaling: one known pair, one new amount, two ratios in the same order, then cross-multiply and check the unit rate.</p>`,
      tasks: [
        { task: "Figuring out how much gas a longer trip will need", link: `Exactly the worked example: 9 gallons for 252 miles means 15 gallons for 420 miles.` },
        { task: "Scaling a recipe from 4 servings to 10", link: `Steps 2 and 3: amount over servings on both sides, then cross-multiply as in practice item 1.` },
        { task: "Converting prices while travelling abroad", link: `The exchange rate is the known pair. Set it equal to the price ratio and cross-multiply, as with the notebooks in practice item 3.` },
        { task: "Resizing a photo without stretching it", link: `Width over height stays the same on both sides. The unit-rate check of step 6 confirms the shape is kept.` },
        { task: "Estimating distances from a map scale", link: `Practice item 4: 1 cm for 2.5 km, so 18.4 km is 7.36 cm on the map.` }
      ]
    },
    formal: {
      setup: { title: "Writing a proportion", items: [
        { say: `<b>Name the quantities.</b> Say what each number measures, with units, and give the unknown a letter.`, math: `known pair: 9 gal for 252 mi; &nbsp;new: 420 mi; &nbsp;unknown <span class="m"><span class="c1"><i>x</i></span></span> gal` },
        { say: `<b>Check direct proportion.</b> Gallons are a constant multiple of miles.`, math: `<span class="m"><i>g</i> = <span class="c4"><i>k</i></span><i>d</i>, &nbsp;<span class="c4"><i>k</i></span> = 9/252 = 1/28</span> gallon per mile` },
        { say: `<b>Write the equation.</b> Same units in the same positions on both sides.`, math: `<span class="m"><span class="fr"><span class="c2">9</span><span class="c2">252</span></span> = <span class="fr"><span class="c1"><i>x</i></span><span class="c2">420</span></span></span>` },
        { say: `<b>Justify cross-multiplying.</b> Multiply both sides by 252 · 420, which is allowed because neither denominator is zero.`, math: `<span class="m">9 · 420 = 252<span class="c1"><i>x</i></span> &nbsp;⇔&nbsp; 3,780 = 252<span class="c1"><i>x</i></span></span>` },
        { say: `<b>Solve, check, answer.</b> Divide, confirm the unit rate, and state the result with units.`, math: `<span class="m"><span class="c1"><i>x</i></span> = 3,780 ÷ 252 = 15</span>, &nbsp;<span class="m">420 ÷ 15 = 28</span> &nbsp;→ The trip uses 15 gallons.` }
      ] }
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
  origin: `Euclid's <i>Elements</i> (c. 300 BCE) sets out a theory of proportion attributed to Eudoxus. Solving for a missing fourth term was taught as the "rule of three", which appears in the <i>Aryabhatiya</i> of the Indian mathematician Aryabhata (499 CE) and was a staple of European merchant arithmetic for centuries.`
};
