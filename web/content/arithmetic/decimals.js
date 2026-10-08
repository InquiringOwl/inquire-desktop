window.ARITH = window.ARITH || {};

ARITH["decimals"] = {
  title: "Decimals",
  short: "Place value extended to the right of the point",
  grade: "Grades 4–5",
  hours: 6,
  voice: "plain",
  eyebrow: "Place value · decimal fractions",
  hero: `<span class="m"><span class="c1">0.47</span> = <span class="fr"><span class="c2">4</span><span>10</span></span> + <span class="fr"><span class="c3">7</span><span>100</span></span> = <span class="fr"><span>47</span><span>100</span></span></span>`,
  lede: `Each place to the right of the decimal point is worth one tenth of the place to its left. A decimal is a fraction with a power of 10 underneath.`,
  plain: `<p>A <b>decimal</b> carries place value to the right of the ones. Each place to the left is worth ten times more, so each place to the right is worth ten times less. The <b>decimal point</b> marks where the whole part ends. After it come the <b>tenths</b>, the <b>hundredths</b> and the <b>thousandths</b>.</p>
<p>Money shows how it works. In $3.47 the 3 is three dollars, the 4 is four dimes (tenths of a dollar) and the 7 is seven cents (hundredths). You read it as "three and forty-seven hundredths". A fuel pump that shows 12.346 gallons is counting thousandths.</p>
<p>To compare decimals, line up the points and compare place by place from the left. Zeros at the end change nothing: 0.5 and 0.50 are equal. Written that way, 0.5 is clearly larger than 0.45, even though 45 looks bigger than 5. Some fractions give decimals that stop, like 3/8 = 0.375. Others repeat forever, like 1/3 = 0.333….</p>`,
  formal: `<p>A <b>decimal numeral</b> <span class="m"><i>d</i><sub><i>k</i></sub>⋯<i>d</i><sub>1</sub><i>d</i><sub>0</sub>.<i>d</i><sub>−1</sub><i>d</i><sub>−2</sub>⋯</span> with digits <span class="m"><i>d</i><sub><i>i</i></sub> ∈ {0, …, 9}</span> denotes</p>
<div class="display"><span class="m">∑ <i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup> = ⋯ + <i>d</i><sub>0</sub> + <span class="c2"><i>d</i><sub>−1</sub></span>·10<sup>−1</sup> + <span class="c3"><i>d</i><sub>−2</sub></span>·10<sup>−2</sup> + ⋯</span></div>
<p>A terminating decimal with <i>n</i> digits after the point equals a fraction with denominator <span class="m">10<sup><i>n</i></sup></span>. A fraction in lowest terms has a terminating decimal expansion if and only if its denominator has no prime factors other than 2 and 5. Every other rational number has an eventually repeating expansion, and every eventually repeating decimal is rational.</p>`,
  legend: [
    { c: "c2", sym: `<i>d</i><sub>−1</sub>`, name: "Tenths digit", desc: "First digit after the point. Each unit is one column of the 10×10 grid." },
    { c: "c3", sym: `<i>d</i><sub>−2</sub>`, name: "Hundredths digit", desc: "Second digit after the point. Each unit is one small square of the grid." },
    { c: "c1", sym: `<i>x</i>`, name: "Value", desc: "The number the decimal represents, shaded on the grid." },
    { c: "c4", sym: `10<sup>−<i>n</i></sup>`, name: "Place value", desc: "The worth of the nth place after the point: 0.1, 0.01, 0.001, …" }
  ],
  steps: { title: "How to compare and order decimals", items: [
    `Write the numbers in a column with the decimal points lined up.`,
    `Pad with zeros on the right so every number has the same number of decimal places.`,
    `Compare the whole-number parts first.`,
    `If they tie, compare tenths, then hundredths, and so on, until a digit differs.`,
    `The number with the larger digit in the first differing place is larger.`
  ] },
  example: {
    prompt: `A mechanic has three bolts with diameters 0.4 in, 0.38 in and 0.375 in. The hole is labelled 3/8 in. Which bolt matches exactly, and what is the order from smallest to largest?`,
    lines: [
      { math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> = 3 ÷ 8 = <span class="c1">0.375</span></span>`, note: "Convert the fraction by dividing numerator by denominator." },
      { math: `<span class="m">0.400,  0.380,  0.375</span>`, note: "Pad with zeros so all have three decimal places." },
      { math: `<span class="m">0.<span class="c2">4</span>00 vs 0.<span class="c2">3</span>80 vs 0.<span class="c2">3</span>75</span>`, note: "Tenths: 4 beats 3, so 0.4 is largest." },
      { math: `<span class="m">0.3<span class="c3">8</span>0 vs 0.3<span class="c3">7</span>5</span>`, note: "Tenths tie. Hundredths: 8 beats 7, so 0.38 > 0.375." }
    ],
    answer: `The 0.375 in bolt matches the 3/8 in hole. Order: <span class="m">0.375 &lt; 0.38 &lt; 0.4</span>.`
  },
  why: `<p>Prices and most measurements are written as decimals: fuel, medicine doses, lab results, race times and nutrition labels. Misreading one place is a factor-of-ten error. A dose of 0.5 mg read as 5 mg is ten times too much, and a $1.50 item rung up as $15.00 costs ten times as much.</p>
<p>Decimals also make comparison fast. Unit prices, interest rates and measurements can be ranked by lining up the points, with no common denominators to find.</p>
<p>Later math builds on them directly. A percent counts hundredths, scientific notation uses a decimal between 1 and 10, and points on the real number line are described by decimal expansions. Seeing 0.47 as 4 tenths plus 7 hundredths is the first step toward the infinite sums of calculus.</p>`,
  careers: [
    { role: "Pharmacist", use: "Reads and checks doses such as 0.25 mg against 2.5 mg, where a misplaced decimal point is a tenfold error." },
    { role: "Machinist", use: "Measures parts with calipers to thousandths of an inch, such as 0.375 in." },
    { role: "Bank teller", use: "Counts and records cash amounts to the hundredth of a dollar." },
    { role: "Lab technician", use: "Records measurements such as 2.45 mL and reports them to the correct number of decimal places." },
    { role: "Sports timer", use: "Ranks race results recorded to hundredths of a second." }
  ],
  life: [
    "Comparing prices per unit at the grocery store",
    "Reading a digital thermometer or scale",
    "Checking a receipt or bank statement",
    "Reading fuel prices and litres pumped",
    "Understanding race and lap times"
  ],
  fields: [
    { name: "Chemistry", use: "Measurements and concentrations are recorded as decimals with significant figures." },
    { name: "Finance", use: "Money, interest rates and exchange rates are decimal quantities." },
    { name: "Engineering", use: "Tolerances are specified in decimal units such as ±0.005 in." },
    { name: "Computer science", use: "Converting between decimal and binary fractions explains floating-point rounding." }
  ],
  layers: {
    concept: {
      heading: "What are decimals?",
      lede: `How do you write parts of a whole with the same place value you use for whole numbers? Decimals do it, which is why prices, doses and measurements use them.`,
      history: `<p><b>The problem.</b> Merchants, surveyors and astronomers worked with parts of a unit every day. Fractions with different denominators, such as 3/8 and 5/12, are slow to add and hard to compare, and astronomers often used base-60 fractions instead. Every trade had its own awkward subdivisions.</p>
<p><b>The solution.</b> In China, units of length were divided into tens from the 2nd century BCE, and positional decimal fractions appear in a 10th-century Arabic arithmetic by al-Uqlidisi. In 1427 Jamshid al-Kashi, working in Samarkand, finished <i>The Key to Arithmetic</i>, a full treatment of decimal fractions written for students of astronomy, surveying, architecture, accounting and trade. In Europe the engineer Simon Stevin, who had worked as a bookkeeper and a tax clerk, published <i>De Thiende</i> ("the art of tenths") in 1585: a 29-page booklet for surveyors, wine-gaugers, mint-masters and merchants.</p>
<p><b>What it changed.</b> Stevin expected decimal coins, weights and measures to come into general use. An English translation of his booklet (1608) inspired Thomas Jefferson to propose a decimal currency for the United States, and the Coinage Act of 1792 set the dollar, the disme ($0.10) and the cent ($0.01). The decimal point itself became standard later; John Napier's logarithm tables, published in 1620, used a period to separate the whole and fractional parts. Receipts, fuel pumps and thermometers now all read in tenths and hundredths.</p>`,
      sources: [
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" },
        { title: "Jamshid al-Kashi (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Kashi/" },
        { title: "Decimal (Wikipedia)", url: "https://en.wikipedia.org/wiki/Decimal" },
        { title: "Coinage Act of 1792 (Wikipedia)", url: "https://en.wikipedia.org/wiki/Coinage_Act_of_1792" }
      ],
      examples: [
        { role: "Pharmacist", scene: `For example, a prescription calls for 0.25 mg of a drug and the tablets are 0.125 mg each: <span class="m">0.25 ÷ 0.125 = 2</span> tablets. Misread as 2.5 mg, the same order would need 20 tablets, a clear warning sign.`, takeaway: "A slipped decimal point is a tenfold dose error, so pharmacists check every one." },
        { role: "Machinist", scene: `A drawing calls for a shaft of 0.750 in, ±0.005 in, so anything from 0.745 to 0.755 in passes. A part measuring 0.748 in passes; one at 0.757 in is rejected.`, takeaway: "Thousandths of an inch decide whether a part fits." },
        { role: "Bank teller", scene: `A customer deposits 3 twenty-dollar bills, 7 quarters and 4 dimes: <span class="m">60 + 1.75 + 0.40 = 62.15</span>. The slip should read $62.15.`, takeaway: "Lining up the points keeps dollars with dollars and cents with cents." },
        { role: "Lab technician", scene: `Three readings are 2.45 mL, 2.5 mL and 2.38 mL. Padded to 2.45, 2.50 and 2.38, they order as <span class="m">2.38 &lt; 2.45 &lt; 2.50</span>.`, takeaway: "Padding stops a shorter number from looking smaller than it is." },
        { role: "Sports timer", scene: `Two sprinters finish in 10.09 s and 10.1 s. Padded, that is 10.09 and 10.10, so the first runner wins by <span class="m">0.01</span> s, one hundredth of a second.`, takeaway: "Medals can turn on the hundredths digit." }
      ]
    },
    build: {
      lede: `To compare decimals, line up the points, pad with zeros so the lengths match, and compare digits from the left until one differs.`,
      intro: `<p>The model shades a 10 × 10 grid that stands for one whole. Each full column is one tenth (cyan) and each small square is one hundredth (pink). The place-value chart beside it shows the same value digit by digit, and the number line marks where it sits between 0 and 1. The panel gives the value in expanded form, as a fraction over 100 and as a percent.</p>`,
      stepWhy: [
        `Lining up the points puts tenths under tenths and hundredths under hundredths, so each comparison is between digits worth the same amount.`,
        `Zeros at the end add no value: 0.4 is 40 hundredths, the same as 0.40. Equal lengths stop a decimal from looking bigger only because it has more digits.`,
        `One whole is worth more than all the tenths and hundredths after it put together, so a larger whole part settles the comparison at once.`,
        `Each place is worth ten times the place to its right. A difference of 1 in the tenths outweighs anything the later places can add, so you work from the left.`,
        `At the first differing place, everything to the left is equal and the digits to the right cannot make up the gap, so that digit decides.`
      ],
      bridge: `<p>The bolt problem is the everyday pattern: turn every amount into a decimal, line up the points, pad with zeros and read from the left. The same steps sort prices, times and measurements.</p>`,
      tasks: [
        { task: "Comparing prices per unit at the grocery store", link: `Pad the unit prices to the same length, as the worked example pads 0.4, 0.38 and 0.375 to 0.400, 0.380 and 0.375, then compare from the left.` },
        { task: "Reading a digital thermometer or scale", link: `Name the place of each digit, as in practice 1: the 7 in 3.07 is seven hundredths, not seven tenths.` },
        { task: "Checking a receipt or bank statement", link: `Line up the decimal points before adding or comparing amounts, exactly as step 1 does.` },
        { task: "Understanding race and lap times", link: `Compare tenths first, then hundredths, as the worked example compares 0.380 and 0.375.` },
        { task: "Converting a fraction on a ruler or in a recipe", link: `Divide the top by the bottom, as <span class="m">3 ÷ 8 = 0.375</span> in the first line of the worked example.` }
      ]
    },
    formal: {
      setup: { title: "Writing a decimal", items: [
        { say: `<b>Name the quantity.</b> Give the unknown a letter and its units.`, math: `<span class="m"><span class="c1"><i>x</i></span> = <span class="fr"><span>3</span><span>8</span></span></span> in (hole diameter)` },
        { say: `<b>Make the denominator a power of ten.</b> In lowest terms, 8 = 2³ has no prime factors other than 2 and 5, so the decimal terminates.`, math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>3 · 125</span><span>8 · 125</span></span> = <span class="fr"><span>375</span><span>1000</span></span></span>` },
        { say: `<b>Write it in place-value form.</b> Each digit after the point multiplies a negative power of ten.`, math: `<span class="m"><span class="c1"><i>x</i></span> = 0.375 = <span class="c2">3</span>·10<sup>−1</sup> + <span class="c3">7</span>·10<sup>−2</sup> + 5·10<sup>−3</sup></span>` },
        { say: `<b>Compare.</b> Pad to three places and compare from the left. The first differing digit decides.`, math: `<span class="m">0.375 &lt; 0.380 &lt; 0.400</span>` },
        { say: `<b>Answer in a sentence</b> with units.`, math: `<span class="m"><i>x</i> = 0.375</span> in → the 0.375 in bolt fits the hole.` }
      ] }
    }
  },
  prereqWhy: {
    "place-value": "Decimals extend the base-ten place-value chart to the right of the ones place.",
    "fractions": "A decimal is a fraction with denominator 10, 100, 1000 and so on, and converting between them needs fraction sense."
  },
  unlocksWhy: {
    "decimal-ops": "Adding, subtracting, multiplying and dividing decimals depends on lining up and tracking place value.",
    "percents": "A percent is a number of hundredths, so 0.35 = 35%.",
    "sci-notation": "The coefficient in scientific notation is a decimal between 1 and 10.",
    "real-numbers": "Every real number has a decimal expansion, and repeating versus non-repeating decimals separate rationals from irrationals."
  },
  beyond: [
    { field: "Statistics", why: "Data summaries, probabilities and p-values are reported as decimals." },
    { field: "Calculus", why: "Limits and infinite series are first understood through decimal approximations like 0.999… = 1." },
    { field: "Numerical analysis", why: "Rounding error and floating-point representation are studied on decimal and binary expansions." }
  ],
  mistakes: [
    { wrong: `"0.45 is larger than 0.5 because 45 &gt; 5"`, fix: `Pad to equal length: 0.45 vs 0.50. Fifty hundredths is more than forty-five hundredths.` },
    { wrong: `Reading 0.07 as "seven tenths"`, fix: `The 7 is in the hundredths place: "seven hundredths". Seven tenths is 0.7.` },
    { wrong: `<span class="m"><span class="fr"><span>1</span><span>3</span></span> = 0.3</span>`, fix: `0.3 is 3/10. One third is <span class="m">0.333…</span> with the 3 repeating forever.` },
    { wrong: `Writing a dose as .5 mg or 5.0 mg`, fix: `A missed point turns either one into a tenfold error. Medication-safety guidelines, for example, call for a zero before the point (0.5 mg) and no zero after a whole number (5 mg).` }
  ],
  practice: [
    { ctx: "Banking", q: `A check is written for $3.07. Write the amount in words and as a fraction of a dollar.`, a: `Three and seven hundredths, <span class="m"><span class="fr"><span>307</span><span>100</span></span></span> dollars.` },
    { ctx: "Workshop", q: `Four drill bits measure 0.6 in, 0.06 in, 0.66 in and 0.606 in. Order them from smallest to largest.`, a: `0.06 &lt; 0.6 &lt; 0.606 &lt; 0.66 in. Padded: 0.060, 0.600, 0.606, 0.660.` },
    { ctx: "Cooking", q: `A recipe calls for <span class="m"><span class="fr"><span>7</span><span>20</span></span></span> kg of flour, and your scale reads in decimals. What should it show?`, a: `0.35 kg. Multiply top and bottom by 5: 35/100.` },
    { ctx: "Bills", q: `One household pays 5 of 12 equal shares of a bill. Write <span class="m"><span class="fr"><span>5</span><span>12</span></span></span> as a decimal. Does it terminate?`, a: `0.41666…, with the 6 repeating. It does not terminate because 12 = 2² × 3 has the prime factor 3.` },
    { ctx: "Carpentry", q: `Write an equation with a letter for the unknown, then solve: a shelf needs a board <span class="m"><span class="fr"><span>5</span><span>8</span></span></span> in thick. Let <i>t</i> be that thickness as a decimal. Is a 0.6 in board thick enough?`, a: `<span class="m"><i>t</i> = 5 ÷ 8 = 0.625</span> in. Padded, 0.600 &lt; 0.625, so <b>no</b>: the 0.6 in board is 0.025 in too thin.` }
  ],
  origin: `Decimal fractions were used by the Persian mathematician Jamshid al-Kashi in <i>The Key to Arithmetic</i> (1427). Simon Stevin's booklet <i>De Thiende</i> (1585) promoted them for everyday use in Europe.`
};
