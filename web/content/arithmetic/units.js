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
    concept: {
      heading: "What is dimensional analysis?",
      lede: `How do you change a measurement from one unit to another without changing what it measures? Dimensional analysis multiplies by fractions equal to 1 and lets the units guide the arithmetic.`,
      history: `<p><b>The problem.</b> For most of history each region set its own units. On the eve of the French Revolution, France alone was using roughly 800 units of measure, by one 1789 estimate. Many traders brought their own measuring devices, which invited fraud, and the variety hindered trade and tax collection.</p>
<p><b>The solution.</b> In 1791 the French Assembly accepted a new unit of length, the metre, set at one ten-millionth of the distance from the North Pole to the Equator along the Paris meridian. A 1795 law defined the whole decimal system, and platinum standards for the metre and kilogram were deposited in the National Archives in 1799. Each metric unit is a power of ten of the others, so converting within the system means moving the decimal point. In 1875, 17 countries signed the Metre Convention, which set up an international bureau to keep the standards. In 1959 the United States, the United Kingdom, Canada, Australia, New Zealand and South Africa agreed to define the yard as exactly 0.9144 m and the pound as exactly 0.45359237 kg, which makes the inch exactly 2.54 cm. In 1960 the metric system became the International System of Units (SI).</p>
<p><b>What it changed.</b> With exact factors such as 2.54 cm per inch, any conversion became a short chain of multiplications, the method in this lesson. Different systems are still used side by side, so the units must be tracked. On 23 September 1999 the Mars Climate Orbiter was lost during the engine burn meant to put it into orbit around Mars. NASA's investigation board found the root cause in a ground software file that reported thruster data in pound-force seconds where newton-seconds were required. One pound-force second is about 4.45 newton-seconds, so each figure was about 4.45 times too small.</p>`,
      sources: [
        { title: "History of the metric system (Wikipedia)", url: "https://en.wikipedia.org/wiki/History_of_the_metric_system" },
        { title: "International yard and pound (Wikipedia)", url: "https://en.wikipedia.org/wiki/International_yard_and_pound" },
        { title: "Mars Climate Orbiter Mishap Investigation Board Phase I Report (NASA)", url: "https://llis.nasa.gov/llis_lib/pdf/1009464main1_0641-mr.pdf" },
        { title: "Mars Climate Orbiter team finds likely cause of loss (NASA JPL)", url: "https://www.jpl.nasa.gov/news/mars-climate-orbiter-team-finds-likely-cause-of-loss/" }
      ],
      examples: [
        { role: "Nurse", scene: `An IV order is 1,000 mL over 8 hours. <span class="m">1,000 mL ÷ 8 h = 125</span> mL/h, the rate keyed into the pump.`, takeaway: "The answer's units, mL/h, match what the pump asks for." },
        { role: "Chemist", scene: `36 g of water, at about 18 g per mole, is <span class="m">36 g × (1 mol / 18 g) = 2</span> mol, which is <span class="m">2 × 6.022 × 10²³ ≈ 1.2 × 10²⁴</span> molecules.`, takeaway: "Each factor cancels one unit until only molecules remain." },
        { role: "Aircraft mechanic", scene: `A bolt is specified at 25 ft·lb and the torque wrench reads in N·m. With 1 ft·lb ≈ 1.356 N·m: <span class="m">25 × 1.356 ≈ 33.9</span> N·m.`, takeaway: "A wrong factor leaves a bolt too loose or overtightened." },
        { role: "Civil engineer", scene: `A culvert carries 10 cubic feet per second. With 1 ft³ ≈ 7.48 US gallons and 60 s per minute: <span class="m">10 × 7.48 × 60 ≈ 4,488</span> gal/min.`, takeaway: "Pipe and pump data often come in different units, and both must agree." },
        { role: "Chef", scene: `A recipe calls for 500 mL of milk and your US measuring cup holds about 236.6 mL: <span class="m">500 ÷ 236.6 ≈ 2.11</span> cups, a little over 2 cups.`, takeaway: "One factor moves a recipe between metric and US kitchens." },
        { role: "Pilot", scene: `A light aircraft cruises at 120 knots. One knot is exactly 1.852 km/h, so the speed is <span class="m">120 × 1.852 = 222.24</span> km/h, about 222 km/h.`, takeaway: "Charts, weather reports and instruments may give the same speed in different units." }
      ]
    },
    build: {
      lede: `To convert, write the quantity with its units, multiply by conversion factors that cancel each unwanted unit, and check that only the target units remain.`,
      intro: `<p>The model above writes a conversion as a chain of fractions. The given quantity comes first, followed by the conversion factors with their numbers in cyan. Each press of Step cancels one matching pair of units, one on top and one underneath; when only the target units are left, the result appears in amber. Pick a conversion from the menu (highway speed, a dose by body weight, seconds in a year and others) and change the value to see the chain stay the same.</p>`,
      stepWhy: [
        `Writing a rate as a fraction shows which unit is on top and which is underneath, and that tells you which way up each factor must go.`,
        `Naming the target first tells you when to stop and gives you something to check the answer against.`,
        `A unit cancels only against the same unit on the other side of the bar, in the same way that 5/5 = 1. A factor the wrong way up squares the unit instead of removing it.`,
        `Few conversions have one direct factor. Chaining through units you know (km to m, then h to s) is safer than hunting for one memorised number like 3.6.`,
        `Every factor equals 1, so the order of multiplication does not change the result. Cancelling first leaves fewer numbers to handle, and a unit that will not cancel shows a mistake before you compute.`,
        `Units confirm the setup; size confirms the arithmetic. A child's dose of 470 mL, or a walking speed of 50 m/s, should stop you.`
      ],
      bridge: `<p>The dose problem is the pattern behind every conversion: start with what you know, multiply by factors equal to 1, cancel, and check the units. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Driving abroad with km/h signs", link: `Chain kilometres to miles as practice 5 does: 100 km/h is about 62 mi/h.` },
        { task: "Buying flooring sold by the square metre", link: `Square the length factor, as practice 4 does: 150 ft² is about 13.9 m².` },
        { task: "Reading a liquid medicine label", link: `Labels give strength as mg per 5 mL. The worked example's chain, lb to kg to mg to mL, shows how a prescribed dose turns into a volume.` },
        { task: "Converting a recipe", link: `Use one factor per unit, as in practice 2: 2.5 L is 2,500 mL.` },
        { task: "Comparing fuel prices per litre and per gallon", link: `Multiply the price per litre by about 3.785 L per gallon so litres cancel (step 3), and both prices are per gallon.` }
      ]
    },
    formal: {
      setup: { title: "Writing a conversion", items: [
        { say: `<b>Name the given quantity and the target.</b> Write each with its units.`, math: `<span class="m"><i>w</i> = 22 lb</span> (body weight); &nbsp;find <span class="m"><i>V</i></span> in mL` },
        { say: `<b>Write each relation as a fraction.</b> A true conversion factor equals 1 (here with the rounded 2.2 lb per kg). A rate, such as the order or the concentration, links two different quantities and is used the same way.`, math: `<span class="m"><span class="fr"><span>1 kg</span><span>2.2 lb</span></span>, &nbsp;<span class="fr"><span>15 mg</span><span>1 kg</span></span>, &nbsp;<span class="fr"><span>5 mL</span><span>160 mg</span></span></span>` },
        { say: `<b>Build the chain.</b> Orient each fraction so the previous unit cancels.`, math: `<span class="m"><i>V</i> = 22 lb × <span class="fr"><span>1 kg</span><span>2.2 lb</span></span> × <span class="fr"><span>15 mg</span><span>1 kg</span></span> × <span class="fr"><span>5 mL</span><span>160 mg</span></span></span>` },
        { say: `<b>Check the dimensions.</b> Units multiply and divide like variables. Only the target unit may survive.`, math: `<span class="m"><span class="fr"><span>lb · kg · mg · mL</span><span>lb · kg · mg</span></span> = mL</span>` },
        { say: `<b>Compute and answer.</b> Multiply the numerators, divide by the denominators, round to a measurable amount, and state the result with units.`, math: `<span class="m"><i>V</i> = <span class="fr"><span>22 · 15 · 5</span><span>2.2 · 160</span></span> = <span class="fr"><span>1650</span><span>352</span></span> = 4.6875 ≈ 4.7</span> &nbsp;→ One dose is about 4.7 mL.` }
      ] }
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
