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
    nudge: "Not yet. Line up the points and pad with zeros, then compare from the left.",
    concept: {
      heading: "What are decimals?",
      lede: `Decimals write parts of a whole with the same place value you use for whole numbers. That is why prices, doses and measurements use them.`,
      question: { text: "How much of one?", sub: `Every decimal is built from tenths and hundredths of one whole. Watch each part in the model above, then try it yourself.`, figure: { sym: `<i>x</i>`, value: "0.47", cap: "the value", echo: "decimal" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["bolt", "bolts", "hole", "column", "columns", "square", "squares", "tenth", "tenths", "hundredth", "hundredths", "thousandths", "tablet", "tablets", "dime", "dimes", "cent", "cents", "dollar", "dollars", "quarters", "bills", "part", "parts", "readings", "sprinters", "shaft"],
      walk: { title: "Line it up together: three bolts and a hole",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You need a bolt for a hole marked <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> in. The bin has three bolts: 0.4 in, 0.38 in and 0.375 in. Which one fits exactly?`,
        demo: { kind: "line", from: 0.35, to: 0.45, tick: 0.05, still: true, points: [{ v: 0.375, c: "c1", label: "0.375", below: true }, { v: 0.4, c: "c2", label: "0.4" }, { v: 0.38, c: "c3", label: "0.38" }], alt: "A number line from 0.35 to 0.45. The bolt sizes 0.375, then 0.4, then 0.38 appear on it, so 0.375 sits furthest left and 0.4 furthest right." },
        lines: [
          { math: `0.4,  0.38,  0.375  and  <span class="fr"><span>3</span><span>8</span></span>`, note: `Three bolts, sized in inches. The hole is 3/8 of an inch across.`, frame: 0 },
          { math: `<span class="fr"><span>3</span><span>8</span></span> = 3 ÷ 8 = <span class="c1">0.375</span>`, note: `Write the hole size as a decimal. Divide the top by the bottom.`, frame: 1 },
          { math: `0.400,  0.380,  0.375`, note: `Line up the points. Add zeros on the right so each has three places. Those zeros add no value.`, frame: 1 },
          { math: `0.<span class="c2">4</span>00 &gt; 0.<span class="c2">3</span>80 and 0.<span class="c2">3</span>75`, note: `Compare tenths first. 4 tenths beats 3 tenths, so 0.4 is the widest bolt.`, frame: 2 },
          { math: `0.3<span class="c3">8</span>0 &gt; 0.3<span class="c3">7</span>5`, note: `The tenths tie, so look at the hundredths. 8 beats 7, so 0.38 is wider than 0.375.`, frame: 3 },
          { math: `0.375 &lt; 0.38 &lt; 0.4`, note: `Only 0.375 equals 3/8, so that bolt fits. The 0.38 bolt is 5 thousandths too wide.`, frame: 3 }
        ],
        predict: [null,
          { ask: `What is 3 ÷ 8 as a decimal?`, parts: [{ label: "3 ÷ 8", ans: 0.375 }], hint: `One eighth of a dollar is 12.5 cents. Three eighths is three of those.` },
          { ask: `Write 0.38 with three places after the point.`, choices: [
            { t: "0.380", ok: true },
            { t: "0.038", why: "That moves the 3 and the 8 one place to the right. 0.038 is ten times smaller than 0.38." },
            { t: "0.308", why: "A zero in the middle changes the hundredths digit. Padding zeros go on the right end." }
          ], hint: `Zeros added after the last digit keep every digit in its place.` },
          { ask: `The tenths digits are 4, 3 and 3. Which bolt is the widest?`, choices: [
            { t: "0.4", ok: true },
            { t: "0.375, it has the most digits", why: "More digits do not make a number bigger. Its tenths digit is 3, less than 4." },
            { t: "0.38, it is in the middle", why: "Its tenths digit is 3. The 0.4 bolt has 4 tenths." }
          ], hint: `A tenth is worth more than everything after it put together.` },
          { ask: `A friend says 0.375 is bigger than 0.38, because 375 is more than 38. Is that right?`, choices: [
            { t: "No. Padded, 0.380 is more than 0.375", ok: true },
            { t: "Yes, 375 is more than 38", why: "375 counts thousandths and 38 counts hundredths. Padded to thousandths, 0.38 is 380, more than 375." },
            { t: "They are equal", why: "They differ in the hundredths place: 8 and 7." }
          ], hint: `Compare 0.380 and 0.375 digit by digit from the left.` },
          { ask: `The 0.38 bolt is too wide. By how many thousandths of an inch?`, parts: [{ label: "thousandths", ans: 5 }], hint: `0.380 is 380 thousandths. 0.375 is 375 thousandths.` }],
        answer: `The <span class="m c1">0.375</span> in bolt fits the 3/8 in hole. In order: <span class="m">0.375 &lt; 0.38 &lt; 0.4</span>.` },
      ideas: [
        { c: "c2", title: "Each column is one tenth", term: "tenths", text: `Cut one whole into 10 equal parts. Each part is one tenth, 0.1. The first digit after the point counts tenths.`,
          demo: { kind: "fraction", n: 4, d: 10, alt: "A bar is cut into 10 equal parts and 4 of them are shaded one at a time, making 4/10." }, try: { label: "Show 4 tenths", lab: "value:40" } },
        { c: "c3", title: "Each square is one hundredth", term: "hundredths", text: `Cut each tenth into 10 again. Now the whole has 100 small squares. The second digit after the point counts them.`,
          demo: { kind: "tens", n: 47, unit: "hundredth", cap: "hundredths, 0.47", alt: "Four groups of ten hundredths are counted 10, 20, 30, 40, then 7 more: 47 hundredths, which is 0.47." }, try: { label: "Show 7 hundredths", lab: "value:7" } },
        { c: "c1", title: "Zeros at the end change nothing", term: "equivalent decimals", text: `0.5 and 0.50 shade the same 5 columns. Add zeros on the right to make two decimals the same length.`,
          demo: { kind: "line", from: 0, to: 1, tick: 0.5, points: [{ v: 0.5, c: "c1", label: "0.5" }, { v: 0.5, c: "c2", label: "0.50", below: true }], alt: "A number line from 0 to 1. The point 0.5 appears, then 0.50 lands on the very same spot." }, try: { label: "Show 0.5", lab: "value:50" } }
      ],
      timelineTitle: "People split units into tens long before the decimal point",
      timelineLead: `Cutting one unit into ten equal parts, then ten again, is old. It is the same split you see in the grid above.`,
      timeline: [
        { when: "From the 2nd century BCE", what: `In China, some units of length are divided into tens. Ten small parts make one, like ten columns make the whole grid in the model.` },
        { when: "10th century", what: `Abu'l-Hasan al-Uqlidisi writes the earliest known positional decimal fractions, in an Arabic arithmetic book.` },
        { when: "1427", what: `Jamshid al-Kashi finishes <i>The Key to Arithmetic</i> for students in Samarkand. It treats decimal fractions as a full system.` },
        { when: "1585", what: `Simon Stevin, once a bookkeeper and a tax clerk, prints <i>De Thiende</i>. It is a 29-page booklet on tenths for surveyors, wine-gaugers and merchants.` },
        { when: "1792", what: `The U.S. Coinage Act makes the disme worth $0.10 and the cent $0.01. A column of the grid is a dime. A square is a cent.` }
      ],
      history: `<p><b>The problem.</b> Merchants, surveyors and astronomers worked with parts of a unit every day. Fractions with different denominators, such as 3/8 and 5/12, are slow to add and hard to compare, and astronomers often used base-60 fractions instead. Every trade had its own awkward subdivisions.</p>
<p><b>The solution.</b> In China, some units of length were divided into tens from the 2nd century BCE. Positional decimal fractions first appear in a 10th-century Arabic arithmetic by Abu'l-Hasan al-Uqlidisi. In 1427 Jamshid al-Kashi finished <i>The Key to Arithmetic</i>, written to teach students in Samarkand. It gave a full treatment of decimal fractions for people studying astronomy, surveying, architecture, accounting and trade. In Europe the engineer Simon Stevin, who had worked as a bookkeeper and a tax clerk, published <i>De Thiende</i> ("the art of tenths") in 1585. It was a 29-page booklet for stargazers, surveyors, carpet-makers, wine-gaugers, mint-masters and merchants.</p>
<p><b>What it changed.</b> Stevin wrote that decimal coins, weights and measures would come into general use; it was only a matter of time. Robert Norton's English translation of his booklet (1608) inspired Thomas Jefferson to propose a decimal currency for the United States. The Coinage Act of 1792 set the dollar, the disme ($0.10) and the cent ($0.01). The decimal point itself settled later: John Napier's book on logarithm tables, published in 1620 after his death, used a period to separate the whole part from the fraction. Receipts, fuel pumps and thermometers now all read in tenths and hundredths.</p>`,
      sources: [
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" },
        { title: "Jamshid al-Kashi (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Kashi/" },
        { title: "Decimal (Wikipedia)", url: "https://en.wikipedia.org/wiki/Decimal" },
        { title: "Coinage Act of 1792 (Wikipedia)", url: "https://en.wikipedia.org/wiki/Coinage_Act_of_1792" }
      ],
      matters: { title: "Why decimals are everywhere", text: `<p>Prices, doses and measurements all need parts of one. Decimals write those parts with the <b>same place value</b> you already use for whole numbers.</p><ul class="why-chips"><li><b>Prices</b> in dollars and cents</li><li><b>Doses</b> in parts of a milligram</li><li><b>Sizes</b> in parts of an inch</li></ul><p>Read one place wrong and the amount is off by a <b>factor of ten</b>. Read every place right and you can <b>compare amounts at a glance</b>, with no common denominators to find.</p>` },
      stakes: { title: "Where decimals go wrong", lead: `Most decimal slips put a digit in the wrong place. Each one makes an amount ten times too big or too small.`, items: [
        { role: "Pharmacy", text: `A dose of 0.5 mg read as 5 mg is ten times too much.` },
        { role: "Checkout", text: `A $1.50 item rung up as $15.00 costs ten times as much.` },
        { role: "Longer looks bigger", text: `0.45 seems larger than 0.5, because 45 is more than 5. Padded, 0.45 is less than 0.50.` },
        { role: "Reading a place", text: `0.07 read as seven tenths is ten times too big. It is seven hundredths.` }
      ], try: { label: "Show 0.45: fewer than 5 columns", lab: "value:45" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Pharmacist", figure: "0.25 mg", try: { label: "Show 0.25", lab: "value:25" }, scene: `A prescription calls for 0.25 mg of a drug and the tablets are 0.125 mg each: <span class="m">0.25 ÷ 0.125 = 2</span> tablets. Misread as 2.5 mg, the same order would need 20 tablets, a clear warning sign.`, takeaway: "A slipped decimal point is a tenfold dose error, so pharmacists check every one." },
        { role: "Machinist", figure: "0.750 in", scene: `A drawing calls for a shaft of 0.750 in, ±0.005 in, so anything from 0.745 to 0.755 in passes. A part measuring 0.748 in passes; one at 0.757 in is rejected.`, takeaway: "Thousandths of an inch decide whether a part fits." },
        { role: "Bank teller", figure: "$62.15", try: { label: "Show 4 dimes, 0.40", lab: "value:40" }, scene: `A customer deposits 3 twenty-dollar bills, 7 quarters and 4 dimes: <span class="m">60 + 1.75 + 0.40 = 62.15</span>. The slip should read $62.15.`, takeaway: "Lining up the points keeps dollars with dollars and cents with cents." },
        { role: "Lab technician", figure: "2.38 mL", scene: `Three readings are 2.45 mL, 2.5 mL and 2.38 mL. Padded to 2.45, 2.50 and 2.38, they order as <span class="m">2.38 &lt; 2.45 &lt; 2.50</span>.`, takeaway: "Padding stops a shorter number from looking smaller than it is." },
        { role: "Sports timer", figure: "0.01 s", scene: `Two sprinters finish in 10.09 s and 10.1 s. Padded, that is 10.09 and 10.10, so the first runner wins by <span class="m">0.01</span> s, one hundredth of a second.`, takeaway: "Medals can turn on the hundredths digit." }
      ]
    },
    build: {
      lede: `To compare decimals, line up the points, pad with zeros so the lengths match, and compare digits from the left until one differs.`,
      task: { text: "Line up the points, then compare.", sub: `The same five moves sort bolts, prices, temperatures and race times. Try each one in the model above as you go.`,
        figure: { sym: `<i>x</i>`, value: "0.47", cap: "in the model", echo: "decimal" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model shades a 10 × 10 grid that stands for one whole. Each full column is one <span class="c2">tenth</span> and each small square is one <span class="c3">hundredth</span>. The place-value chart shows the same <span class="c1">value</span> digit by digit, and the number line shows where it sits between 0 and 1. The panel gives it in expanded form, as a fraction over 100 and as a percent.</p>`,
      keyTry: [{ label: "Show 3 tenths", lab: "value:30" }, { label: "Show 3 hundredths", lab: "value:3" }, null, { label: "Show one hundredth", lab: "value:1" }],
      objects: ["column", "columns", "square", "squares", "tenth", "tenths", "hundredth", "hundredths", "thousandths", "ounce", "cent", "cents", "dollars", "degrees", "gallon", "seconds", "lap", "bolts"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Lining up the points puts tenths under tenths and hundredths under hundredths, so each comparison is between digits worth the same amount.`,
        `Zeros at the end add no value: 0.4 is 40 hundredths, the same as 0.40. Equal lengths stop a decimal from looking bigger only because it has more digits.`,
        `One whole is worth more than all the tenths and hundredths after it put together, so a larger whole part settles the comparison at once.`,
        `Each place is worth ten times the place to its right. A difference of 1 in the tenths outweighs anything the later places can add, so you work from the left.`,
        `At the first differing place, everything to the left is equal and the digits to the right cannot make up the gap, so that digit decides.`
      ],
      stepTry: [null, null, { label: "Show one whole, 1.00", lab: "value:100" }, null, null],
      stepGoal: [null,
        { key: "value", eq: 70, text: `Set the model to 0.7 yourself. Then read the place-value chart.`, after: `The chart reads 0.70: 7 tenths and 0 hundredths. 0.7 and 0.70 shade the same 7 columns.`, notYet: `Not yet. Move the slider until 7 full columns are shaded and nothing else.` },
        null,
        { key: "value", eq: 60, text: `Which is larger, 0.6 or 0.58? Set the model to the larger one.`, after: `0.60 has 6 tenths and 0.58 has 5. The tenths decide: <span class="m">0.6 &gt; 0.58</span>.`, notYet: `Not yet. Pad 0.6 to 0.60, then compare the tenths digits first.` },
        { key: "value", eq: 9, text: `Of 0.9, 0.09 and 0.19, set the model to the smallest.`, after: `Padded, they are 0.90, 0.09 and 0.19. The tenths digits are 9, 0 and 1, so 0.09 is the smallest.`, notYet: `Not yet. Pad all three to two places, then find the smallest tenths digit.` }],
      matters: { title: "Why a Method Beats a Glance", text: `<p>Decimals of different lengths fool the eye. The <b>longer one looks bigger</b>, even when it is smaller.</p><ul class="why-chips"><li><b>Line up</b> the points</li><li><b>Pad</b> with zeros</li><li><b>Read</b> from the left</li></ul><p>The same moves sort prices, times and sizes. They work <b>every time</b>, however many digits the numbers have.</p>` },
      bridge: `<p>The bolts used the whole routine: turn every size into a decimal, line up the points, pad with zeros and read from the left. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Comparing prices per unit at the grocery store", check: { q: `Two boxes of cereal have shelf tags of $0.25 per ounce and $0.3 per ounce. How many cents per ounce does the cheaper box save?`, parts: [{ label: "cents per ounce", ans: 5 }], hint: `Pad $0.3 to $0.30, then subtract.` }, figure: "$0.25 vs $0.3",
          demo: { kind: "line", from: 0.2, to: 0.35, tick: 0.05, points: [{ v: 0.25, c: "c3", label: "$0.25" }, { v: 0.3, c: "c2", label: "$0.30" }], show: "dist", cap: "dollars an ounce apart", alt: "A number line from 0.2 to 0.35 marks the unit prices $0.25 and $0.30, then brackets the 0.05 dollar gap between them." },
          lines: [{ math: `0.3 = 0.30`, note: "Pad with a zero so both prices have two places." }, { math: `0.<span class="c2">2</span>5 &lt; 0.<span class="c2">3</span>0`, note: "Tenths: 2 is less than 3, so $0.25 an ounce is cheaper." }, { math: `0.30 − 0.25 = 0.05`, note: "The cheaper box saves 5 cents an ounce." }],
          predict: [null, { ask: `Which tag is cheaper per ounce?`, choices: [{ t: "$0.25", ok: true }, { t: "$0.3, because 3 is less than 25", why: "Compare place by place. Padded, $0.30 has 3 tenths and $0.25 has 2." }], hint: `Pad $0.3 to $0.30 first.` }],
          try: { label: "Show 0.25", lab: "value:25" }, link: `Pad, then compare from the left (steps 2 and 4), the same moves that found the widest bolt on the Concept tab.` },
        { task: "Reading a digital thermometer or scale", check: { q: `A fever is often counted from 100.4 °F. A digital thermometer reads 100.04 °F. How many degrees below 100.4 °F is the reading?`, parts: [{ label: "degrees below", ans: 0.36 }], hint: `Pad 100.4 to 100.40, then subtract.` }, figure: "100.04 °F",
          demo: { kind: "line", from: 100, to: 100.5, tick: 0.1, points: [{ v: 100.04, c: "c3", label: "100.04", below: true }, { v: 100.4, c: "c2", label: "100.4" }], show: "dist", cap: "degrees apart", alt: "A number line from 100 to 100.5 marks 100.04 near the left end and 100.4 near the right, then brackets the 0.36 degree gap." },
          lines: [{ math: `100.4 = 100.40`, note: "Pad so both readings have two places after the point." }, { math: `100.<span class="c2">0</span>4 &lt; 100.<span class="c2">4</span>0`, note: "Whole degrees tie. Tenths: 0 is less than 4. The reading is below the fever line." }, { math: `100.40 − 100.04 = 0.36`, note: "The reading is 0.36 degrees below 100.4 °F." }],
          predict: [null, { ask: `Is 100.04 °F at or above 100.4 °F?`, choices: [{ t: "No, 100.04 is less than 100.4", ok: true }, { t: "Yes, 100.04 has more digits", why: "More digits do not mean more. Its tenths digit is 0, less than 4." }], hint: `Compare the tenths digits after padding.` }],
          try: { label: "Show 0.04", lab: "value:4" }, link: `The tenths digit decides here, as the tenths decided between the 0.4 and 0.38 bolts (step 4).` },
        { task: "Checking a receipt or bank statement", check: { q: `The shelf tag says $1.29. The receipt says $1.92. How many cents were you overcharged?`, parts: [{ label: "cents", ans: 63 }], hint: `$1.92 is 192 cents and $1.29 is 129 cents.` }, figure: "$1.29 vs $1.92",
          demo: { kind: "columns", sub: [192, 129], cap: "cents overcharged", alt: "Column subtraction of 129 cents from 192 cents, right to left, with one regrouping, gives 63 cents." },
          lines: [{ math: `1.<span class="c2">9</span>2 &gt; 1.<span class="c2">2</span>9`, note: "Dollars tie. Tenths: 9 is more than 2, so the receipt is higher." }, { math: `192 − 129 = 63`, note: "Work in cents: 192 cents minus 129 cents." }, { math: `63 cents = $0.63`, note: "You were charged 63 cents too much." }],
          predict: [null, { ask: `How many cents is $1.92?`, parts: [{ label: "cents", ans: 192 }], hint: `One dollar is 100 cents.` }],
          link: `Line up the points before you compare amounts, as step 1 does. Swapped digits look alike until you read them place by place.` },
        { task: "Reading fuel prices and litres pumped", check: { q: `Station A sells gas at $3.459 a gallon. Station B sells it at $3.5 a gallon. How many cents a gallon cheaper is Station A?`, parts: [{ label: "cents a gallon", ans: 4.1 }], hint: `Pad $3.5 to $3.500 and subtract. One cent is 0.01 dollars.` }, figure: "$3.459 vs $3.5",
          demo: { kind: "line", from: 3.4, to: 3.6, tick: 0.1, points: [{ v: 3.459, c: "c3", label: "3.459", below: true }, { v: 3.5, c: "c2", label: "3.5" }], show: "dist", cap: "dollars apart", alt: "A number line from 3.4 to 3.6 marks 3.459 and 3.5, then brackets the 0.041 dollar gap between them." },
          lines: [{ math: `3.5 = 3.500`, note: "Pad so both prices have three places after the point." }, { math: `3.<span class="c2">4</span>59 &lt; 3.<span class="c2">5</span>00`, note: "Dollars tie. Tenths: 4 is less than 5, so Station A is cheaper." }, { math: `3.500 − 3.459 = 0.041`, note: "The gap is 0.041 dollars, which is 4.1 cents a gallon." }],
          predict: [null, { ask: `Which station is cheaper?`, choices: [{ t: "Station A, at $3.459", ok: true }, { t: "Station B, because 3.5 is shorter", why: "Length does not decide. Padded, 3.500 has 5 tenths and 3.459 has 4." }], hint: `Pad 3.5 to 3.500, then compare the tenths.` }],
          link: `Pumps price gas in thousandths of a dollar. Pad to three places, as the bolts were padded to 0.400 and 0.380.` },
        { task: "Understanding race and lap times", check: { q: `Two lap times are 58.7 s and 58.69 s. The faster lap is the shorter time. By how many seconds is it faster?`, parts: [{ label: "seconds", ans: 0.01 }], hint: `Pad 58.7 to 58.70, then subtract.` }, figure: "58.7 vs 58.69 s",
          demo: { kind: "line", from: 58.6, to: 58.8, tick: 0.1, points: [{ v: 58.69, c: "c3", label: "58.69", below: true }, { v: 58.7, c: "c2", label: "58.70" }], show: "dist", cap: "seconds apart", alt: "A number line from 58.6 to 58.8 marks the lap times 58.69 and 58.70 side by side, then brackets the 0.01 second gap." },
          lines: [{ math: `58.7 = 58.70`, note: "Pad so both times have two places after the point." }, { math: `58.<span class="c2">6</span>9 &lt; 58.<span class="c2">7</span>0`, note: "Whole seconds tie. Tenths: 6 is less than 7. The 58.69 lap is faster." }, { math: `58.70 − 58.69 = 0.01`, note: "It is faster by one hundredth of a second." }],
          predict: [null, { ask: `Which lap is faster?`, choices: [{ t: "58.69 s", ok: true }, { t: "58.7 s", why: "The faster lap takes less time. Padded, 58.69 is less than 58.70." }], hint: `Pad 58.7 to 58.70, then compare from the left.` }],
          try: { label: "Show 0.01", lab: "value:1" }, link: `The hundredths can decide a race, as the hundredths decided between the 0.38 and 0.375 bolts (step 5).` }
      ]
    },
    formal: {
      question: { text: "What does a decimal stand for, exactly?", sub: `You can read and compare decimals. Here are the words a textbook uses for the same ideas, and how to write a decimal problem out in full.`,
        figure: { sym: `<i>x</i>`, value: "0.47", cap: "the value", echo: "decimal" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>d</i><sub>0</sub>.<i>d</i><sub>−1</sub><i>d</i><sub>−2</sub>⋯`, term: "Decimal numeral", def: `A numeral that uses base-ten place value on both sides of the decimal point. The digit <i>d</i><sub><i>i</i></sub> contributes <span class="m"><i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup></span> to the value.`, was: "the decimal, the shaded amount" },
        { c: "c1", sym: `.`, term: "Decimal point", def: `The separator between the ones place (exponent 0) and the tenths place (exponent −1). In words it is read as "and".`, was: "the dot where the whole part ends" },
        { c: "c2", sym: `10<sup>−1</sup>`, term: "Tenths place", def: `The first place to the right of the decimal point. Its place value is <span class="m">10<sup>−1</sup> = 1/10</span>.`, was: "the columns of the grid" },
        { c: "c3", sym: `10<sup>−2</sup>`, term: "Hundredths place", def: `The second place to the right of the decimal point. Its place value is <span class="m">10<sup>−2</sup> = 1/100</span>.`, was: "the small squares of the grid" },
        { c: "c4", sym: `10<sup>−<i>n</i></sup>`, term: "Place value", def: `The value <span class="m">10<sup>−<i>n</i></sup></span> of the <i>n</i>th place to the right of the point. Each place is worth one tenth of the place to its left.`, was: "what each digit is worth" },
        { c: "c1", sym: `0.5 = 0.50`, term: "Equivalent decimals", def: `Decimals that name the same number. Appending or deleting zeros after the last nonzero digit to the right of the point leaves the value unchanged, since <span class="m">0 · 10<sup>−<i>k</i></sup> = 0</span>.`, was: "zeros at the end change nothing" },
        { c: "c1", sym: `3/8 = 0.375`, term: "Terminating decimal", def: `A decimal with finitely many digits after the point; it equals <span class="m"><i>a</i>/10<sup><i>n</i></sup></span>. A fraction in lowest terms terminates exactly when its denominator has no prime factors other than 2 and 5.`, was: "a decimal that stops" },
        { c: "c1", sym: `1/3 = 0.3̅`, term: "Repeating decimal", def: `A decimal in which a block of digits repeats without end, written with a bar over the block. Every rational number whose expansion does not terminate repeats.`, was: "a decimal that goes on, like 0.333…" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In words, <b>"and" marks the decimal point</b>. Leave it out or add it, and the number changes by a factor of about a thousand.</p><ul class="why-chips"><li>"one hundred and five thousandths" is <b>100.005</b></li><li>"one hundred five thousandths" is <b>0.105</b></li></ul><p>On a check, an order form or a prescription, the exact words decide <b>which number is meant</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here read digits by length instead of by place. Line up the points, name each place, and these slips go away.`,
      setupIntro: `<p>The bolts and the 3/8 in hole from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a decimal problem", items: [
        { say: `<b>Name the quantity.</b> Give the unknown a letter and its units.`, math: `<span class="m"><span class="c1"><i>x</i></span> = <span class="fr"><span>3</span><span>8</span></span></span> in (hole diameter)` },
        { say: `<b>Make the denominator a power of ten.</b> In lowest terms, 8 = 2³ has no prime factors other than 2 and 5, so the decimal terminates.`, math: `<span class="m"><span class="fr"><span>3</span><span>8</span></span> = <span class="fr"><span>3 · 125</span><span>8 · 125</span></span> = <span class="fr"><span>375</span><span>1000</span></span></span>` },
        { say: `<b>Write it in place-value form.</b> Each digit after the point multiplies a negative power of ten.`, math: `<span class="m"><span class="c1"><i>x</i></span> = 0.375 = <span class="c2">3</span>·10<sup>−1</sup> + <span class="c3">7</span>·10<sup>−2</sup> + 5·10<sup>−3</sup></span>` },
        { say: `<b>Compare.</b> Pad to three places and compare from the left. The first differing digit decides.`, math: `<span class="m">0.375 &lt; 0.380 &lt; 0.400</span>` },
        { say: `<b>Answer in a sentence</b> with units.`, math: `<span class="m"><i>x</i> = 0.375</span> in → the 0.375 in bolt fits the hole.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: line up the points, pad with zeros and compare place by place. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can read and compare decimals the formal way.",
      checks: [
        { hint: `Each cent is one hundredth of a dollar, and $3 is 300 cents.`, parts: [{ label: "hundredths", ans: 307 }] },
        { hint: `Pad all four to three places, then compare from the left.`, parts: [{ label: "smallest (in)", ans: 0.06 }, { label: "largest (in)", ans: 0.66 }] },
        { hint: `Make the denominator 100: multiply top and bottom by 5.`, parts: [{ label: "kg", ans: 0.35 }] },
        { hint: `Divide 5 by 12 and watch which digit keeps coming back.`, parts: [{ label: "repeating digit", ans: 6 }] },
        { hint: `Divide 5 by 8, then pad 0.6 to three places and subtract.`, parts: [{ label: "t (in)", ans: 0.625 }, { label: "too thin by (in)", ans: 0.025 }] }
      ]
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
    { ctx: "Banking", q: `A check is written for $3.07. Write the amount in words, then say how many hundredths of a dollar (cents) it is.`, a: `Three and seven hundredths dollars. That is <b>307</b> hundredths of a dollar: <span class="m">3.07 = 307/100</span>.` },
    { ctx: "Workshop", q: `Four drill bits measure 0.6 in, 0.06 in, 0.66 in and 0.606 in. Order them from smallest to largest.`, a: `Padded: 0.060, 0.600, 0.606, 0.660. So <b>0.06</b> &lt; 0.6 &lt; 0.606 &lt; <b>0.66</b> in.` },
    { ctx: "Cooking", q: `A recipe calls for <span class="m"><span class="fr"><span>7</span><span>20</span></span></span> kg of flour, and your scale reads in decimals. What should it show?`, a: `Multiply top and bottom by 5: 35/100. The scale should show <b>0.35</b> kg.` },
    { ctx: "Bills", q: `One household pays 5 of 12 equal shares of a bill. Write <span class="m"><span class="fr"><span>5</span><span>12</span></span></span> as a decimal. Does it terminate?`, a: `0.41666…, with the <b>6</b> repeating. It does not terminate because 12 = 2² × 3 has the prime factor 3.` },
    { ctx: "Carpentry", q: `Write an equation with a letter for the unknown, then solve: a shelf needs a board <span class="m"><span class="fr"><span>5</span><span>8</span></span></span> in thick. Let <i>t</i> be that thickness as a decimal. Is a 0.6 in board thick enough?`, a: `<span class="m"><i>t</i> = 5 ÷ 8 = 0.625</span> in. Padded, 0.600 &lt; 0.625, so <b>no</b>: the 0.6 in board is 0.025 in too thin.` }
  ],
  origin: `Decimal fractions were used by the Persian mathematician Jamshid al-Kashi in <i>The Key to Arithmetic</i> (1427). Simon Stevin's booklet <i>De Thiende</i> (1585) promoted them for everyday use in Europe.`
};
