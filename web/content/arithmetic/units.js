window.ARITH = window.ARITH || {};

ARITH["units"] = {
  title: "Units & Dimensional Analysis",
  short: "Converting units by multiplying by one",
  grade: "Grades 6–8; central in high school chemistry and physics",
  hours: 7,
  voice: "plain",
  eyebrow: "Measurement · dimensional analysis",
  hero: `<span class="m">60 <span class="fr"><span>mi</span><span>h</span></span> × <span class="c2"><span class="fr"><span>5280 ft</span><span>1 mi</span></span></span> × <span class="c2"><span class="fr"><span>1 h</span><span>3600 s</span></span></span> = <span class="c1">88 <span class="fr"><span>ft</span><span>s</span></span></span></span>`,
  lede: `Each conversion factor equals 1, so multiplying by it changes the units without changing the quantity. Units cancel like factors in a fraction.`,
  plain: `<p>A measurement is a number <i>and</i> a unit. "60" means nothing until you say 60 miles per hour or 60 kilograms. Converting units rewrites the same amount in a different unit: 60 miles per hour and 88 feet per second are the same speed.</p>
<p>The tool is the <b>conversion factor</b>, a fraction whose top and bottom are equal amounts, such as <span class="m">5280 ft / 1 mi</span>. Because 5280 feet and 1 mile are the same length, the fraction equals 1, and multiplying by 1 never changes a value. Choose each factor so the unit you want to remove sits on the opposite side of the fraction bar. Then the units <b>cancel</b>, like matching factors in a fraction.</p>
<p>This method is called <b>dimensional analysis</b>. It doubles as a check: if the units left at the end are not the ones you wanted, a factor is upside down or missing.</p>`,
  formal: `<p>A physical quantity is a product <span class="m"><i>Q</i> = {<i>Q</i>} · [<i>Q</i>]</span> of a numerical value and a unit. A <b>conversion factor</b> is a ratio of two equal quantities expressed in different units, so its value is 1:</p>
<div class="display"><span class="c2"><span class="fr"><span>2.54 cm</span><span>1 in</span></span></span> = 1 &nbsp;&nbsp;⇒&nbsp;&nbsp; <i>Q</i> × <span class="c2"><span class="fr"><span>new unit</span><span>old unit</span></span></span> × ⋯ = <span class="c1"><i>Q</i> in new units</span><br><span class="dim">For area or volume, square or cube the factor: (<span class="fr"><span>0.3048 m</span><span>1 ft</span></span>)<sup>2</sup> = <span class="fr"><span>0.09290304 m<sup>2</sup></span><span>1 ft<sup>2</sup></span></span></span></div>
<p>Units obey the algebra of multiplication and division, so they cancel between numerator and denominator. A physically meaningful equation must be <b>dimensionally homogeneous</b>: every term has the same dimension (length, mass, time, and so on), and only like quantities are added. The International System of Units (SI) is built on seven base units, including the metre, kilogram and second. Some factors are exact by definition (1 in = 2.54 cm exactly), while others are rounded (1 kg ≈ 2.2046 lb).</p>`,
  legend: [
    { c: "c2", sym: `<span class="fr"><span>new</span><span>old</span></span>`, name: "Conversion factor", desc: "A ratio of equal amounts in two units. Its value is 1, so it changes only the units." },
    { c: "c1", sym: `<i>Q</i>`, name: "Result", desc: "The same quantity expressed in the target units after the unwanted units cancel." },
    { c: "c4", sym: `[ ]`, name: "Unit", desc: "The label attached to a number. Units multiply, divide and cancel like variables." }
  ],
  steps: { title: "How to convert with dimensional analysis", items: [
    `Write the given quantity with its units as a fraction, such as <span class="m">60 mi / 1 h</span>.`,
    `Write the units you want at the end.`,
    `Choose a conversion factor that puts the unwanted unit on the opposite side of the fraction bar.`,
    `Chain more factors until only the target units remain.`,
    `Cancel units, then multiply all numerators and divide by all denominators.`,
    `Check the final units and whether the size of the number makes sense.`
  ] },
  example: {
    prompt: `A child weighs 22 lb. A medication order is 15 mg per kg of body weight, and the liquid contains 160 mg per 5 mL. How many millilitres is one dose? (Use 1 kg = 2.2 lb.)`,
    lines: [
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> = 10 kg</span>`, note: "Pounds cancel, leaving kilograms." },
      { math: `<span class="m">10 kg × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> = 150 mg</span>`, note: "The order is a rate: mg per kg. Kilograms cancel." },
      { math: `<span class="m">150 mg × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span> = <span class="fr"><span>750</span><span>160</span></span> mL</span>`, note: "Milligrams cancel, leaving millilitres." },
      { math: `<span class="m"><span class="fr"><span>750</span><span>160</span></span> = <span class="c1">4.6875 mL</span> ≈ 4.7 mL</span>`, note: "Round to a measurable amount." },
      { math: `<span class="m">22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span> × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span></span>`, note: "The whole chain in one line. Only mL survives." }
    ],
    answer: `One dose is about <span class="m">4.7</span> mL.`
  },
  why: `<p>Unit errors are among the costliest mistakes people make. In 1999 NASA lost the Mars Climate Orbiter because a ground software file reported thruster data in pound-force seconds where newton-seconds were required. In medicine, a dose ordered per kilogram but worked out with a weight in pounds comes out 2.2 times too large. Dimensional analysis catches these errors because the units themselves show whether the setup is right.</p>
<p>It also lets you work in any system with one routine. You can read a 100 km/h sign in miles per hour, follow a recipe written in millilitres with US cups, or compare a price per litre with a price per gallon.</p>
<p>Later subjects lean on it constantly. Chemistry converts grams to moles to molecules, physics checks a formula by making sure both sides have the same units, and calculus gives every rate units such as metres per second.</p>`,
  careers: [
    { role: "Nurse", use: "Converts mg/kg dosing orders into millilitres of liquid medication and sets IV pumps in mL/h." },
    { role: "Chemist", use: "Chains conversion factors from grams to moles to molecules using molar mass and Avogadro's number." },
    { role: "Aircraft mechanic", use: "Converts between metric and imperial torque and pressure units such as N·m and ft·lb, or kPa and psi." },
    { role: "Civil engineer", use: "Converts flow rates between cubic feet per second and gallons per minute when sizing pipes and culverts." },
    { role: "Chef", use: "Converts recipes between cups, millilitres, ounces and grams." },
    { role: "Pilot", use: "Converts fuel between gallons, pounds and litres and speeds between knots and km/h." }
  ],
  life: [
    "Converting a recipe from metric to cups and ounces",
    "Working out a speed limit in km/h when driving abroad",
    "Figuring out how many square feet of flooring a room needs",
    "Reading medicine labels in mL and mg",
    "Comparing gas prices per litre and per gallon"
  ],
  fields: [
    { name: "Chemistry", use: "Stoichiometry and gas-law problems are solved as chains of conversion factors." },
    { name: "Physics", use: "Checking that an equation's units balance is a standard test of any derivation." },
    { name: "Engineering", use: "Designs mix units from different standards, and consistent conversion is required for safety." },
    { name: "Pharmacology", use: "Dose calculations convert between body mass, concentration and volume." }
  ],
  layers: {
    nudge: "Not yet. Check that each factor puts the unit you want gone on the other side of the bar.",
    concept: {
      heading: "What is dimensional analysis?",
      lede: `How do you change a measurement to another unit without changing the amount? You multiply by fractions that equal 1 and let the units cancel.`,
      question: { text: "Same amount, new units?", sub: `A conversion keeps the amount and changes the units. Watch the model above cancel one unit at a time, then try it yourself.`,
        figure: { sym: `<i>Q</i>`, value: "65", cap: "the amount you start with", echo: "value" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["pound", "pounds", "kilogram", "kilograms", "milligram", "milligrams", "millilitre", "millilitres", "inch", "inches", "foot", "feet", "yard", "yards", "metre", "metres", "kilometre", "kilometres", "mile", "miles", "dose", "doses", "tablet", "tablets", "cup", "cups", "knots", "gallons", "molecules"],
      walk: { title: "Convert it together: a child's dose",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A child weighs 22 pounds. The doctor orders 15 mg of medicine for each kilogram of body weight. The bottle holds 160 mg in every 5 mL. How many millilitres is one dose? (Use 1 kg = 2.2 lb.)`,
        demo: { kind: "line", from: 0, to: 150, tick: 30, start: 0, jumps: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15], cap: "mg in one dose", alt: "A dot starts at 0 mg and makes ten hops of 15 mg, one for each kilogram, and lands on 150 mg." },
        lines: [
          { math: `22 lb`, note: `Start with what you know: the weight, 22 pounds. The order is per kilogram, so pounds must go.`, frame: 0 },
          { math: `22 lb × <span class="c2"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span></span>`, note: `1 kg and 2.2 lb are the same weight, so this fraction equals 1. Pounds sit underneath, so they cancel.`, frame: 0 },
          { math: `22 ÷ 2.2 = 10 kg`, note: `The child weighs 10 kg. The 2.2 is rounded. The model's exact factor gives 9.98 kg.`, frame: 0 },
          { math: `10 kg × <span class="c2"><span class="fr"><span>15 mg</span><span>1 kg</span></span></span> = <span class="c1">150 mg</span>`, note: `Kilograms cancel. Each kilogram adds 15 mg: ten hops of 15.`, frame: 11 },
          { math: `22 × 15 = 330 mg`, note: `The rushed shortcut skips the pounds-to-kilograms step. It gives 330 mg, 2.2 times too much.`, frame: 11 },
          { math: `150 mg × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span> ≈ <span class="c1">4.7 mL</span>`, note: `Milligrams cancel. 750 ÷ 160 = 4.6875, about 4.7 mL. Only mL is left, the unit you wanted.`, frame: 11 }
        ],
        predict: [null,
          { ask: `Which fraction makes pounds cancel?`, choices: [
            { t: "1 kg over 2.2 lb", ok: true },
            { t: "2.2 lb over 1 kg", why: "Pounds would be on top twice. You would get pounds squared per kilogram, not kilograms." },
            { t: "Multiply 22 by 2.2", why: "That turns the weight into a bigger number of a smaller unit. A kilogram is heavier than a pound, so the kilogram number must be smaller." }
          ], hint: `A unit cancels when the same unit sits on the other side of the bar.` },
          { ask: `What is 22 ÷ 2.2?`, parts: [{ label: "kilograms", ans: 10 }], hint: `How many 2.2s make 22? Try 2.2 × 10.` },
          { ask: `Ten kilograms, 15 mg for each one. How many milligrams in all?`, parts: [{ label: "mg", ans: 150 }], hint: `Ten hops of 15 on the line: 15, 30, 45, …` },
          { ask: `A friend says: "22 × 15 = 330 mg." Why is that wrong?`, choices: [
            { t: "22 is in pounds, and the order is per kilogram", ok: true },
            { t: "15 should be divided, not multiplied", why: "Multiplying is right. The order gives 15 mg for each kilogram, so you multiply by the number of kilograms." },
            { t: "It is right, only rounded", why: "330 is more than twice 150. That is a real overdose, not a rounding slip." }
          ], hint: `Look at the units: 22 lb × 15 mg per kg. Do pounds and kilograms cancel?` },
          { ask: `Now turn 150 mg into millilitres. To the nearest tenth, how many mL?`, parts: [{ label: "mL", ans: 4.7 }], hint: `150 × 5 = 750, then divide by 160.` }],
        answer: `One dose is about <span class="m c1">4.7 mL</span>, and only millilitres are left at the end.` },
      ideas: [
        { c: "c2", title: "A fraction that equals one", term: "conversion factor", text: `12 inches and 1 foot are the same length. So 12 in over 1 ft equals 1. Multiplying by 1 changes the units, not the amount.`,
          demo: { kind: "fraction", n: 12, d: 12, cap: "one whole foot", alt: "A bar one foot long is cut into 12 inches. All 12 fill in, and 12/12 makes one whole foot." }, try: { label: "Show the inch factor", lab: "conversion:4" } },
        { c: "c4", title: "Units cancel like numbers", term: "unit", text: `A unit on top cancels the same unit underneath, the way 5/5 is 1. In 3 ft × 12 in / 1 ft, feet cancel. Inches stay.`,
          demo: { kind: "array", rows: 3, cols: 12, unit: "inch", cap: "inches in 3 feet", alt: "Three rows of 12 dots, one row for each foot, count up 12, 24, 36: three feet is 36 inches." }, try: { label: "Cancel one pair", lab: "step" } },
        { c: "c1", title: "Same amount, new number", term: "result", text: `Smaller units need a bigger number. 3 km is 3,000 m. 65 miles per hour is about 29 metres per second.`,
          demo: { kind: "bar", parts: [1000, 1000, 1000], labels: ["1 km", "1 km", "1 km"], cap: "metres in 3 km", alt: "Three equal bar parts of 1,000 metres, each labelled 1 km, add up to 3,000 metres." }, try: { label: "Convert 65 mi/h to m/s", lab: "conversion:0,play" } }
      ],
      timelineTitle: "Every factor is a number people agreed on",
      timelineLead: `The 2.54 in the model's inch chain and the 0.45359237 in its dose chain were both settled by agreement. Here is how.`,
      timeline: [
        { when: "1791", what: `The French Assembly accepts a new length, the metre: one ten-millionth of the distance from the North Pole to the Equator.` },
        { when: "1875", what: `17 countries sign the Metre Convention to keep shared standards for the metre and kilogram.` },
        { when: "1959", what: `Six countries fix the yard at exactly 0.9144 m and the pound at exactly 0.45359237 kg. That makes the inch exactly 2.54 cm, the factor in the model.` },
        { when: "1960", what: `The metric system becomes the International System of Units, SI.` },
        { when: "1999", what: `The Mars Climate Orbiter is lost. One team's software gave pound-force seconds where newton-seconds were expected.` }
      ],
      history: `<p><b>The problem.</b> For most of history each region set its own units. On the eve of the French Revolution, France alone used about 800 units of measure, with up to a quarter of a million local definitions. Many traders brought their own measuring devices, which invited fraud and held back trade.</p>
<p><b>The solution.</b> On 30 March 1791 the French Assembly accepted a new unit of length, the metre, set at one ten-millionth of the distance from the North Pole to the Equator. A law of 7 April 1795 defined the whole decimal system, and in 1799 platinum standards for the metre and kilogram went into the French National Archives. Each metric unit is a power of ten of the others, so converting inside the system means moving the decimal point. On 20 May 1875, 17 states signed the Metre Convention to keep the standards. On 1 July 1959 Australia, Canada, New Zealand, South Africa, the United Kingdom and the United States agreed to define the yard as exactly 0.9144 m and the pound as exactly 0.45359237 kg. That makes the inch exactly 2.54 cm. In 1960 the metric system was relaunched as the International System of Units (SI).</p>
<p><b>What it changed.</b> With exact factors such as 2.54 cm per inch, any conversion became a short chain of multiplications, the chain in the model. Different systems are still used side by side, so the units must be tracked. On 23 September 1999 the Mars Climate Orbiter was lost during the engine burn meant to put it into orbit around Mars. Software that totalled the thruster firings gave its results in pound-force seconds, while the software that used them expected newton-seconds. Each figure was off by a factor of about 4.45.</p>`,
      sources: [
        { title: "History of the metric system (Wikipedia)", url: "https://en.wikipedia.org/wiki/History_of_the_metric_system" },
        { title: "International yard and pound (Wikipedia)", url: "https://en.wikipedia.org/wiki/International_yard_and_pound" },
        { title: "Mars Climate Orbiter (Wikipedia)", url: "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter" },
        { title: "Mars Climate Orbiter team finds likely cause of loss (NASA JPL)", url: "https://www.jpl.nasa.gov/news/mars-climate-orbiter-team-finds-likely-cause-of-loss/" }
      ],
      matters: { title: "Why units come first", text: `<p>A number on its own says almost nothing. <b>The unit tells you what the number means.</b></p><ul class="why-chips"><li><b>Doses</b> come in mg per kg</li><li><b>Speeds</b> come in miles or kilometres per hour</li><li><b>Prices</b> come per litre or per gallon</li></ul><p>When you carry the units through every step, they <b>check your work</b>. If the units at the end are wrong, the setup was wrong, and you know before anyone acts on the answer.</p>` },
      stakes: { title: "Where conversions go wrong", lead: `Most unit slips come from a missing step or a factor turned the wrong way up.`, items: [
        { role: "Medicine", text: `A per-kilogram order worked out in pounds. For the 22 lb child, 22 × 15 = 330 mg, 2.2 times the right 150 mg.` },
        { role: "Upside-down factor", text: `22 lb × 2.2 lb per kg leaves pounds squared per kilogram. The leftover units show the mistake.` },
        { role: "Area", text: `1 square yard is 9 square feet, not 3. Square the length factor.` },
        { role: "Spacecraft", text: `In 1999 a Mars orbiter was lost. One program gave pound-force seconds, and the next expected newton-seconds.` }
      ], try: { label: "See the dose for 22 lb", lab: "conversion:2,value:22,play" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "125 mL/h", scene: `An IV order is 1,000 mL over 8 hours. <span class="m">1,000 mL ÷ 8 h = 125</span> mL/h, the rate keyed into the pump.`, takeaway: "The answer's units, mL/h, match what the pump asks for." },
        { role: "Chemist", figure: "2 mol", scene: `36 g of water, at about 18 g per mole, is <span class="m">36 g × (1 mol / 18 g) = 2</span> mol, which is <span class="m">2 × 6.022 × 10²³ ≈ 1.2 × 10²⁴</span> molecules.`, takeaway: "Each factor cancels one unit until only molecules remain." },
        { role: "Aircraft mechanic", figure: "33.9 N·m", scene: `A bolt is specified at 25 ft·lb and the torque wrench reads in N·m. With 1 ft·lb ≈ 1.356 N·m: <span class="m">25 × 1.356 ≈ 33.9</span> N·m.`, takeaway: "A wrong factor leaves a bolt too loose or overtightened." },
        { role: "Civil engineer", figure: "4,488 gal/min", scene: `A culvert carries 10 cubic feet per second. With 1 ft³ ≈ 7.48 US gallons and 60 s per minute: <span class="m">10 × 7.48 × 60 ≈ 4,488</span> gal/min.`, takeaway: "Pipe and pump data often come in different units, and both must agree." },
        { role: "Chef", figure: "2.11 cups", scene: `A recipe calls for 500 mL of milk and your US measuring cup holds about 236.6 mL: <span class="m">500 ÷ 236.6 ≈ 2.11</span> cups, a little over 2 cups.`, takeaway: "One factor moves a recipe between metric and US kitchens." },
        { role: "Pilot", figure: "222 km/h", scene: `A light aircraft cruises at 120 knots. One knot is exactly 1.852 km/h, so the speed is <span class="m">120 × 1.852 = 222.24</span> km/h, about 222 km/h.`, takeaway: "Charts, weather reports and instruments may give the same speed in different units." }
      ]
    },
    build: {
      lede: `To convert, write the quantity with its units, multiply by conversion factors that cancel each unwanted unit, and check that only the target units remain.`,
      task: { text: "Convert so only the target units remain.", sub: `The same six steps work for any conversion, from a child's dose to a highway speed. Try each one in the model above as you go.`,
        figure: { sym: `<i>k</i>`, value: "0", cap: "unit pairs cancelled", echo: "k" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model writes a conversion as a chain of fractions. The amount you start with comes first. The <span class="c2">conversion factors</span> follow, and each one equals 1. Each press of <b>Step</b> crosses out one <span class="c4">unit</span> on top and the same unit underneath. When only the target units are left, the <span class="c1">result</span> appears. Pick a chain from the menu and change the value. The chain stays the same.</p>`,
      keyTry: [{ label: "Show the dose chain", lab: "conversion:2" }, { label: "Play the highway chain", lab: "conversion:0,play" }, { label: "Cancel one pair", lab: "step" }],
      objects: ["pound", "pounds", "kilogram", "kilograms", "milligram", "milligrams", "millilitre", "millilitres", "inch", "inches", "foot", "feet", "metre", "metres", "kilometre", "kilometres", "teaspoon", "teaspoons", "tablespoon", "tablespoons", "yard", "yards", "dose", "carpet"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Writing a rate as a fraction shows which unit is on top and which is underneath. That tells you which way up each factor must go.`,
        `Naming the target first tells you when to stop. It also gives you something to check the answer against.`,
        `A unit cancels only against the same unit on the other side of the bar, the way 5/5 = 1. A factor the wrong way up squares the unit instead of removing it.`,
        `Few conversions have one direct factor. Chaining through units you know (km to m, then h to s) is safer than hunting for one memorised number like 3.6.`,
        `Every factor equals 1, so the order of multiplying does not change the result. A unit that will not cancel shows a mistake before you compute.`,
        `Units confirm the setup. Size confirms the arithmetic. A child's dose of 470 mL, or a walking speed of 50 m/s, should stop you.`
      ],
      stepTry: [{ label: "Show 90 km/h as a fraction", lab: "conversion:1" }, { label: "Pick a gallons-to-litres chain", lab: "conversion:3" }, { label: "Cancel pounds in the dose chain", lab: "conversion:2,step" }, null, null, null],
      stepGoal: [null, null, null,
        { key: "result", eq: 20, text: `Pick <b>km/h to m/s</b>, type 72 in the value box, then press <b>Step</b> until every unit pair has cancelled.`, after: `Kilometres and hours both cancel: <span class="m">72 km/h = <span class="c1">20 m/s</span></span>.`, notYet: `Not yet. Pick km/h to m/s, set the value to 72, and step until the result shows.` },
        { key: "result", eq: 224.5, text: `Pick <b>Dose by body weight</b>, set the weight to 33 lb, and cancel every pair.`, after: `33 lb is about 14.97 kg, so the dose is <span class="m c1">224.5 mg</span>.`, notYet: `Not yet. Pick the dose chain, set the value to 33, and step until mg is the only unit left.` },
        { key: "result", eq: 182.88, text: `A 6-foot adult is 72 inches tall. Convert 72 in to cm in the model, then ask if the size makes sense.`, after: `<span class="m c1">182.88 cm</span>, about 183 cm. Dividing by 2.54 by mistake gives about 28 cm, far too short for an adult.`, notYet: `Not yet. Pick the inches-to-cm chain, set the value to 72, and step until the result shows.` }],
      matters: { title: "Why a Method Beats a Memorised Number", text: `<p>Shortcuts like "divide by 3.6" or "times 2.2" work until you forget which way they go. Then the answer is wrong by the same factor, and it looks fine.</p><ul class="why-chips"><li><b>Units</b> show the direction</li><li><b>One step</b> per unit</li><li><b>Leftover units</b> flag a slip</li></ul><p>A method is <b>the same few moves every time</b>. It works for units you have never converted before, and it lets someone else check your work line by line.</p>` },
      bridge: `<p>The child's dose used the whole pattern: start with what you know, multiply by factors equal to 1, cancel, and check the units left over. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Working out a speed limit in km/h when driving abroad", check: { q: `A sign abroad says 90 km/h. How many metres do you travel each second at that speed?`, parts: [{ label: "m/s", ans: 25 }], hint: `Turn km into m (× 1,000), then hours into seconds (÷ 3,600).` }, figure: "25 m each second",
          demo: { kind: "line", from: 0, to: 100, tick: 25, start: 0, jumps: [25, 25, 25, 25], cap: "metres in 4 seconds", alt: "A dot hops 25 metres for each second, four hops, and lands on 100 metres." },
          lines: [{ math: `90 <span class="fr"><span>km</span><span>h</span></span> × <span class="c2"><span class="fr"><span>1,000 m</span><span>1 km</span></span></span> × <span class="c2"><span class="fr"><span>1 h</span><span>3,600 s</span></span></span>`, note: "Kilometres cancel, then hours cancel." }, { math: `<span class="fr"><span>90,000 m</span><span>3,600 s</span></span>`, note: "Multiply the tops, multiply the bottoms." }, { math: `= <span class="c1">25 m/s</span>`, note: "25 metres every second." }, { math: `25 × 2 = 50 m`, note: "A two-second gap to the car ahead is about 50 metres." }],
          predict: [null, { ask: `What is 90 × 1,000?`, parts: [{ label: "metres per hour", ans: 90000 }], hint: `Add three zeros to 90.` }], try: { label: "Run 90 km/h in the model", lab: "conversion:1,play" },
          link: `The same chain as step 4: kilometres to metres, then hours to seconds. Dividing by 3.6 is the shortcut this chain explains.` },
        { task: "Figuring out how many square feet of flooring a room needs", check: { q: `A room is 12 ft by 9 ft. Carpet is sold by the square yard. How many square yards do you need?`, parts: [{ label: "square yards", ans: 12 }], hint: `1 yard is 3 feet, so 1 square yard is 3 ft × 3 ft.` }, figure: "9 ft² per yd²",
          demo: { kind: "array", rows: 3, cols: 3, unit: "square foot", cap: "square feet in 1 square yard", alt: "A square yard drawn as 3 rows of 3 one-foot squares: 3, 6, 9 square feet." },
          lines: [{ math: `12 ft × 9 ft = 108 ft²`, note: "Find the area in square feet." }, { math: `1 yd² = 3 ft × 3 ft = 9 ft²`, note: "Square the length factor. A square yard holds 9 square feet, not 3." }, { math: `108 ft² × <span class="c2"><span class="fr"><span>1 yd²</span><span>9 ft²</span></span></span> = <span class="c1">12 yd²</span>`, note: "Square feet cancel." }],
          predict: [null, { ask: `How many square feet fit in one square yard?`, parts: [{ label: "square feet", ans: 9 }], hint: `Picture the 3-by-3 grid of one-foot squares.` }, null],
          link: `Step 3 with a twist: for area, the factor is squared. Using 3 instead of 9 would give 36 yd², three times too much carpet.` },
        { task: "Reading medicine labels in mL and mg", check: { q: `A 16 kg child needs 15 mg per kg, which is 240 mg. The label says 160 mg per 5 mL. How many mL is one dose?`, parts: [{ label: "mL", ans: 7.5 }], hint: `Multiply 240 mg by 5 mL over 160 mg.` }, figure: "160 mg in 5 mL",
          demo: { kind: "bar", parts: [160, 80], labels: ["5 mL", "2.5 mL"], cap: "mg in 7.5 mL", alt: "A bar of 160 mg labelled 5 mL, then a half-size part of 80 mg labelled 2.5 mL, make 240 mg in all." },
          lines: [{ math: `240 mg × <span class="c2"><span class="fr"><span>5 mL</span><span>160 mg</span></span></span>`, note: "Milligrams on the bottom, so they cancel." }, { math: `<span class="fr"><span>1,200</span><span>160</span></span> mL`, note: "240 × 5 on top, 160 underneath." }, { math: `= <span class="c1">7.5 mL</span>`, note: "One and a half spoonfuls of 5 mL." }],
          predict: [null, { ask: `What is 240 × 5?`, parts: [{ label: "240 × 5", ans: 1200 }], hint: `200 × 5 = 1,000, and 40 × 5 = 200.` }, null],
          link: `The last line of the child's dose on the Concept tab: the label's strength turns milligrams into millilitres.` },
        { task: "Converting a recipe's measures", check: { q: `A recipe needs 2 tablespoons of oil, but you only have a teaspoon. 1 tablespoon is 3 teaspoons. How many teaspoons do you use?`, parts: [{ label: "teaspoons", ans: 6 }], hint: `Each tablespoon is 3 teaspoons.` }, figure: "3 tsp per tbsp",
          demo: { kind: "array", rows: 2, cols: 3, unit: "teaspoon", cap: "teaspoons in 2 tbsp", alt: "Two rows of 3 teaspoons, one row for each tablespoon, count 3 then 6." },
          lines: [{ math: `1 tbsp = 3 tsp`, note: "The fact you know." }, { math: `2 tbsp × <span class="c2"><span class="fr"><span>3 tsp</span><span>1 tbsp</span></span></span>`, note: "Tablespoons sit underneath, so they cancel." }, { math: `= <span class="c1">6 tsp</span>`, note: "Six level teaspoons." }],
          predict: [null, { ask: `Which way up does the factor go?`, choices: [{ t: "3 tsp over 1 tbsp", ok: true }, { t: "1 tbsp over 3 tsp", why: "Then tablespoons would be on top twice and nothing cancels." }], hint: `You want tablespoons gone, so put them underneath.` }, null],
          link: `Step 3 in a kitchen: put the unit you want gone underneath, and the answer comes out in teaspoons.` }
      ]
    },
    formal: {
      question: { text: "How is a quantity rewritten in new units?", sub: `You can convert, and you can check a conversion by its units. Here are the words a textbook uses for the same ideas, and how to write a conversion out in full.`,
        figure: { sym: `{<i>Q</i>}`, value: "65", cap: "the given value", echo: "value" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c4", sym: `<i>Q</i> = {<i>Q</i>} · [<i>Q</i>]`, term: "Physical quantity", def: `A measured amount written as the product of a numerical value {<i>Q</i>} and a unit [<i>Q</i>]. Changing the unit changes the numerical value but not the quantity.`, was: "a number and its unit" },
        { c: "c4", sym: `[<i>Q</i>]`, term: "Unit", def: `A reference amount of a quantity, fixed by convention, against which other amounts of the same kind are compared. In algebra, units multiply, divide and cancel like variables.`, was: "the label that cancels" },
        { c: "c2", sym: `<span class="fr"><span>2.54 cm</span><span>1 in</span></span> = 1`, term: "Conversion factor", def: `A ratio of two equal quantities expressed in different units. Its value is 1, so multiplying by it changes the unit and leaves the quantity unchanged.`, was: "a fraction that equals one" },
        { c: "c2", sym: `1 in = 2.54 cm`, term: "Exact and approximate factors", def: `An exact factor is fixed by definition and adds no rounding error. An approximate factor, such as 1 kg ≈ 2.2 lb, limits the precision of the result.`, was: "2.54 is exact, 2.2 is rounded" },
        { c: "c4", sym: `L, M, T`, term: "Dimension", def: `The kind of quantity a unit measures, such as length L, mass M or time T. Only units of the same dimension can be converted into one another.`, was: "what a unit measures" },
        { c: "c1", sym: `[lhs] = [rhs]`, term: "Dimensional homogeneity", def: `Every term of a physically meaningful equation has the same dimension, so only like quantities are added, subtracted or set equal.`, was: "only the target units are left" },
        { c: "c1", sym: `<i>Q</i> × <span class="fr"><span>new</span><span>old</span></span> × ⋯`, term: "Dimensional analysis", def: `Solving a problem by multiplying the given quantity by a chain of conversion factors and cancelling units. Also called the factor-label method.`, was: "chaining factors until only the target unit remains" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>Two unit symbols can look almost alike and differ by a factor of a thousand: <b>1 mg = 1,000 mcg</b>.</p><ul class="why-chips"><li>An order for 50 mcg</li><li>Misread as 50 mg</li><li><b>1,000 times</b> the dose</li></ul><p>Writing the unit on every number, and reading it as carefully as the digits, is <b>part of the answer</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong conversions come from a factor turned the wrong way up, a missing step, or a length factor used for area.`,
      setupIntro: `<p>The child's dose from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a conversion", items: [
        { say: `<b>Name the given quantity and the target.</b> Write each with its units.`, math: `<span class="m"><i>w</i> = 22 lb</span> (body weight); &nbsp;find <span class="m"><i>V</i></span> in mL` },
        { say: `<b>Write each relation as a fraction.</b> A true conversion factor equals 1 (here with the rounded 2.2 lb per kg). A rate, such as the order or the concentration, links two different quantities and is used the same way.`, math: `<span class="m"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span>, &nbsp;<span class="fr"><span>15 mg</span><span>1 kg</span></span>, &nbsp;<span class="fr"><span>5 mL</span><span>160 mg</span></span></span>` },
        { say: `<b>Build the chain.</b> Orient each fraction so the previous unit cancels.`, math: `<span class="m"><i>V</i> = 22 lb × <span class="fr"><span>1 kg</span><span>2.2 lb</span></span> × <span class="fr"><span>15 mg</span><span>1 kg</span></span> × <span class="fr"><span>5 mL</span><span>160 mg</span></span></span>` },
        { say: `<b>Check the dimensions.</b> Units multiply and divide like variables. Only the target unit may survive.`, math: `<span class="m"><span class="fr"><span>lb · kg · mg · mL</span><span>lb · kg · mg</span></span> = mL</span>` },
        { say: `<b>Compute and answer.</b> Multiply the numerators, divide by the denominators, round to a measurable amount, and state the result with units.`, math: `<span class="m"><i>V</i> = <span class="fr"><span>22 · 15 · 5</span><span>2.2 · 160</span></span> = <span class="fr"><span>1650</span><span>352</span></span> = 4.6875 ≈ 4.7</span> &nbsp;→ One dose is about 4.7 mL.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the chain, cancel the units, then compute. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can convert units the formal way.",
      checks: [
        { hint: `Use 12 in over 1 ft so feet cancel.`, parts: [{ label: "inches", ans: 42 }] },
        { hint: `Use 1,000 mL over 1 L so litres cancel.`, parts: [{ label: "mL", ans: 2500 }] },
        { hint: `Chain 1,000 m over 1 km and 1 h over 3,600 s.`, parts: [{ label: "m/s", ans: 12.5 }] },
        { hint: `Square the factor: 0.3048² = 0.09290304 m² per ft². Round to the nearest tenth.`, parts: [{ label: "m²", ans: 13.9 }] },
        { hint: `Divide by 1.609344 so kilometres cancel. Round to the nearest tenth.`, parts: [{ label: "v (mi/h)", ans: 62.1 }] }
      ]
    }
  },
  prereqWhy: {
    "proportions": "Every conversion factor states a proportion between equal amounts, such as 1 mi : 5280 ft.",
    "decimal-ops": "Conversion factors like 2.54 cm per inch and 0.3048 m per foot mean multiplying and dividing decimals."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus", why: "Rates of change carry units, such as m/s for a derivative of position, and integrals multiply units, such as m/s × s = m." },
    { field: "Differential equations", why: "Nondimensionalisation simplifies models by dividing out characteristic units." },
    { field: "Mathematical modelling", why: "The Buckingham π theorem uses dimensional analysis to find the form of physical laws." }
  ],
  mistakes: [
    { wrong: `Setting a factor upside down: <span class="m">22 lb × <span class="fr"><span>2.2 lb</span><span>1 kg</span></span></span>, giving lb²/kg.`, fix: `Put the unit you want to cancel on the bottom: <span class="m">22 lb × <span class="fr"><span>1 kg</span><span>2.2 lb</span></span> = 10 kg</span>.` },
    { wrong: `Converting area with a length factor: 1 yd² = 3 ft².`, fix: `Square the factor: <span class="m">1 yd² × (3 ft / 1 yd)<sup>2</sup> = 9 ft²</span>.` },
    { wrong: `Dropping units in the middle of a calculation.`, fix: `Write units on every number so you can see them cancel. The final unit is your check.` },
    { wrong: `Adding quantities in different units: 2 ft + 6 in = 8.`, fix: `Convert first so like units are added: 2 ft = 24 in, and <span class="m">24 in + 6 in = 30 in</span>.` },
    { wrong: `Using a weight in pounds with a per-kilogram order: <span class="m">22 × 15 = 330</span> mg.`, fix: `Convert to kilograms first. 22 lb is 10 kg, so the dose is 150 mg; 330 mg would be 2.2 times too much.` }
  ],
  practice: [
    { ctx: "Home", q: `A shelf board is 3.5 ft long and your tape measure reads in inches. How many inches long is it?`, a: `<span class="m">3.5 ft × <span class="fr"><span>12 in</span><span>1 ft</span></span> = 42 in</span>` },
    { ctx: "Kitchen", q: `A recipe calls for 2.5 L of stock, and your measuring jug is marked in millilitres. How many millilitres is that?`, a: `<span class="m">2.5 L × <span class="fr"><span>1000 mL</span><span>1 L</span></span> = 2,500 mL</span>` },
    { ctx: "Cycling", q: `A cyclist's computer shows 45 km/h. What is that speed in metres per second?`, a: `<span class="m">45 <span class="fr"><span>km</span><span>h</span></span> × <span class="fr"><span>1000 m</span><span>1 km</span></span> × <span class="fr"><span>1 h</span><span>3600 s</span></span> = <span class="fr"><span>45,000</span><span>3600</span></span> = 12.5 m/s</span>` },
    { ctx: "Flooring", q: `Flooring is sold by the square metre, and a room measures 150 ft². What is its area in square metres? (1 ft = 0.3048 m exactly.)`, a: `<span class="m">150 ft² × (0.3048 m / 1 ft)<sup>2</sup> = 150 × 0.09290304 ≈ 13.9 m²</span>` },
    { ctx: "Travel", q: `Write an equation with a letter for the unknown, then solve: a road sign shows a limit of 100 km/h. What is that speed <i>v</i> in miles per hour? (1 mi = 1.609344 km exactly.)`, a: `<span class="m"><i>v</i> = 100 <span class="fr"><span>km</span><span>h</span></span> × <span class="fr"><span>1 mi</span><span>1.609344 km</span></span> = <span class="fr"><span>100</span><span>1.609344</span></span></span> mi/h ≈ <b>62.1 mi/h</b>.` }
  ],
  origin: `France introduced the metric system in the 1790s, basing the metre on the size of the Earth. In 1959 the United States and other English-speaking countries agreed to define the inch as exactly 2.54 cm, and in 1960 the metric system was formalised as the International System of Units (SI).`
};
