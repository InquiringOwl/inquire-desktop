window.ARITH = window.ARITH || {};

ARITH["decimal-ops"] = {
  title: "Operations with Decimals",
  short: "Add, subtract, multiply and divide decimals",
  grade: "Grades 5–6",
  hours: 8,
  voice: "plain",
  eyebrow: "Base ten · decimal arithmetic",
  hero: `<span class="m"><span class="c2">0.3</span> × <span class="c3">0.4</span> = <span class="c1">0.12</span></span>`,
  lede: `Three tenths of four tenths is twelve hundredths. The decimal places of the factors add up in the product.`,
  plain: `<p><b>Decimals</b> are base-ten numbers that continue to the right of the ones place: tenths, hundredths, thousandths. Money is the everyday case: $3.49 is 3 dollars, 4 dimes and 9 cents. Adding and subtracting decimals works like whole numbers once you <b>line up the decimal points</b>, so tenths sit under tenths and hundredths under hundredths. A $3.49 coffee and a $2.75 muffin cost <span class="m">3.49 + 2.75 = 6.24</span>, or $6.24.</p>
<p>Multiplication is where the point moves. Picture a square cut into a 10 by 10 grid, and shade 3 columns and 4 rows. The overlap is 12 small squares out of 100, so <span class="m">0.3 × 0.4 = 0.12</span>. Tenths times tenths gives hundredths. That is why you count the <b>decimal places</b> in both factors and give the product that many.</p>
<p>To divide by a decimal, move the point in both numbers the same number of places until the divisor is a whole number. The answer stays the same, because both numbers were multiplied by the same power of ten.</p>`,
  formal: `<p>A terminating decimal with <span class="m"><i>j</i></span> digits after the point is the fraction <span class="m"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> for some integer <span class="m"><i>m</i></span>. The operations follow from fraction arithmetic:</p>
<div class="display"><span class="c2"><span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span></span> × <span class="c3"><span class="fr"><span><i>n</i></span><span>10<sup><i>k</i></sup></span></span></span> = <span class="c1"><span class="fr"><span><i>mn</i></span><span>10<sup><i>j</i>+<i>k</i></sup></span></span></span><br><i>x</i> ÷ <i>y</i> = (<i>x</i> · 10<sup><i>k</i></sup>) ÷ (<i>y</i> · 10<sup><i>k</i></sup>) &nbsp;<span class="dim">(<i>y</i> ≠ 0)</span></div>
<p>For addition and subtraction, write both numbers over the common denominator <span class="m">10<sup>max(<i>j</i>,<i>k</i>)</sup></span>, which is what aligning decimal points does. A quotient of terminating decimals may be a repeating decimal, for example <span class="m">1 ÷ 0.3 = 3.333…</span></p>`,
  legend: [
    { c: "c2", sym: `<i>x</i>`, name: "First number", desc: "In Multiply, the shaded columns of the grid: 3 columns is 0.3. In Add, the first squares filled." },
    { c: "c3", sym: `<i>y</i>`, name: "Second number", desc: "In Multiply, the shaded rows: 4 rows is 0.4. In Add, the squares filled after x." },
    { c: "c1", sym: `<i>xy</i>`, name: "Product", desc: "The overlap of the rows and columns, counted in hundredths. Its decimal places are the factors' places added." },
    { c: "c1", sym: `<i>x</i> + <i>y</i>`, name: "Sum", desc: "All the filled squares in Add. The readout stacks the numbers with their points lined up." }
  ],
  steps: { title: "How to compute with decimals", items: [
    `<b>Add or subtract:</b> line up the decimal points. Fill empty places with zeros.`,
    `Compute as with whole numbers and bring the decimal point straight down.`,
    `<b>Multiply:</b> ignore the points and multiply the digits as whole numbers.`,
    `Count the total decimal places in both factors and place the point that many places from the right.`,
    `<b>Divide:</b> move the point in the divisor right until it is a whole number, and move the dividend's point the same number of places. Divide as usual, with the quotient's point straight above the dividend's.`,
    `Estimate with rounded numbers to check the size of the answer.`
  ] },
  example: {
    prompt: `A planter box has a floor 0.6 m long and 0.4 m wide. How many square metres of liner cover the floor?`,
    lines: [
      { math: `<span class="m"><span class="c2">0.6</span> × <span class="c3">0.4</span></span>`, note: "Area is length times width." },
      { math: `<span class="m">6 × 4 = 24</span>`, note: "Multiply the digits as whole numbers." },
      { math: `<span class="m">1 + 1 = 2</span> decimal places`, note: "Each factor has one decimal place, so the product has two." },
      { math: `<span class="m"><span class="c2">0.6</span> × <span class="c3">0.4</span> = <span class="c1">0.24</span></span>`, note: "Tenths times tenths gives hundredths: 24 hundredths." },
      { math: `<span class="m">0.6 × 0.4 ≠ 2.4</span>`, note: "2.4 square metres is more than a 1 m by 1 m square. The box fits inside that square, so its area is less than 1." },
      { math: `<span class="m">0.5 × 0.5 = 0.25</span>`, note: "Estimate: about half a metre by half a metre. 0.24 is close." }
    ],
    answer: `The floor needs <span class="m c1">0.24</span> square metres of liner.`
  },
  why: `<p>Money, measurements and data almost always come as decimals. Receipts, fuel pumps, pay stubs, bank statements, medicine labels and lab readings all need decimal arithmetic. One misplaced point is a factor-of-ten error: a dose of 0.5 mg misread as 5 mg is ten times too much.</p>
<p>Calculators and spreadsheets do the digits, but you still need to know roughly where the point belongs to catch a typo or a slipped key. Decimal fluency underlies percents, scientific notation, the metric system and statistics, and it is the starting point for understanding why computers sometimes round in surprising ways.</p>`,
  careers: [
    { role: "Bank teller", use: "Adds and subtracts deposits and withdrawals to the cent and balances the cash drawer at the end of a shift." },
    { role: "Machinist", use: "Adds and subtracts dimensions measured to thousandths of an inch, like 1.250 in − 0.375 in, when setting cuts." },
    { role: "Pharmacist", use: "Multiplies and divides decimal doses such as 0.25 mg per tablet, where a misplaced point is a tenfold error." },
    { role: "Payroll clerk", use: "Multiplies hours such as 37.5 by hourly rates such as $22.80 to compute gross pay." },
    { role: "Lab technician", use: "Divides measured masses and volumes read off digital instruments to get concentrations." },
    { role: "Construction estimator", use: "Multiplies areas in square feet by decimal unit costs to price materials." }
  ],
  life: [
    "Totalling a grocery receipt and checking your change",
    "Paying for food sold by the pound",
    "Splitting a restaurant bill evenly among friends",
    "Following a metric recipe or medicine label in millilitres",
    "Checking a paycheck's hours times rate"
  ],
  fields: [
    { name: "Accounting", use: "All ledger arithmetic is decimal arithmetic to two places." },
    { name: "Chemistry", use: "Measurements from balances and burettes are decimals combined in calculations." },
    { name: "Health care", use: "Doses in mg and mL are decimals. Many hospitals require a leading zero (0.5 mg) and forbid a trailing zero (5 mg, never 5.0 mg) so a point cannot be missed." },
    { name: "Computer science", use: "Floating-point numbers are binary analogues of decimals, and understanding decimal rounding helps explain their errors." }
  ],
  layers: {
    nudge: "Not yet. Check where the decimal point goes.",
    concept: {
      lede: `Decimals answer everyday questions about money and measurement: what does it cost, how much is left, how much each? The new skill is keeping track of the point.`,
      heading: "How do you calculate with decimals?",
      question: { text: "Where does the point go?", sub: `You add, subtract, multiply and divide decimals the way you do whole numbers. Then you put the point in the right place. Watch the grid above to see where it goes.`,
        figure: { sym: `<i>x</i> × <i>y</i>`, value: "0.12", cap: "the result", echo: "result" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["square", "squares", "tenth", "tenths", "hundredth", "hundredths", "column", "columns", "row", "rows", "box", "metre", "metres", "dollar", "dollars", "tablet", "tablets", "dose", "hours", "inch", "slot", "insert"],
      walk: { title: "Multiply it together: a planter box",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You are lining the floor of a planter box. The floor is 0.6 m long and 0.4 m wide. How many square metres of liner do you need?`,
        demo: { kind: "array", rows: 4, cols: 6, unit: "square", cap: "hundredths of a square metre", alt: "A grid of small squares, 6 across and 4 down, fills one row at a time: 6, 12, 18, 24. The total, 24, counts hundredths of a square metre." },
        lines: [
          { math: `<span class="c2">0.6</span> × <span class="c3">0.4</span>`, note: `Area is length times width. In the grid, 0.6 is 6 columns and 0.4 is 4 rows.`, frame: 0 },
          { math: `6 × 4 = 24`, note: `Leave the points off for now. Multiply as whole numbers.`, frame: 4 },
          { math: `<span class="c2">0.6</span> × <span class="c3">0.4</span> = <span class="c1">0.24</span>`, note: `Each factor has one decimal place, so the answer has two. Each small square is a hundredth of a square metre.`, frame: 5 },
          { math: `0.6 × 0.4 ≠ 2.4`, note: `A common slip gives 2.4. That is more than a whole 1 m by 1 m square. The box fits inside that square.`, frame: 5 },
          { math: `0.5 × 0.5 = 0.25`, note: `Check the size. The box is about half a metre each way. Half of a half is 0.25, close to 0.24.`, frame: 5 }
        ],
        predict: [null,
          { ask: `Leave the points off. What is 6 × 4?`, parts: [{ label: "6 × 4", ans: 24 }], hint: `Four rows of 6 squares: 6, 12, 18, …` },
          { ask: `Each factor has one decimal place. Where does the point go in 24?`, choices: [
            { t: "0.24", ok: true },
            { t: "2.4", why: "That gives the answer one decimal place. Tenths times tenths makes hundredths, so it needs two." },
            { t: "24", why: "24 square metres is bigger than most rooms. The points still count." }
          ], hint: `Count the digits after the point in 0.6 and in 0.4, and add them.` },
          { ask: `A friend says the floor is 2.4 square metres. How can you tell that is wrong without multiplying?`, choices: [
            { t: "The box fits inside 1 m by 1 m, so its area is under 1", ok: true },
            { t: "The digits 2 and 4 are wrong", why: "The digits are right. 6 × 4 really is 24. The point is in the wrong place." },
            { t: "An area can't be a decimal", why: "Areas are often decimals. 0.24 square metres is a real area." }
          ], hint: `Both sides are shorter than 1 metre. How big can the area be?` },
          { ask: `Estimate. The box is about half a metre each way. What is 0.5 × 0.5?`, parts: [{ label: "0.5 × 0.5", ans: 0.25 }], hint: `5 × 5 = 25, and the answer gets two decimal places.` }],
        answer: `The floor needs <span class="m c1">0.24</span> square metres of liner.` },
      ideas: [
        { c: "c1", title: "Line up the points", term: "place value", text: `To add, put tenths under tenths and hundredths under hundredths. A zero can fill a gap: 0.3 is the same as 0.30.`,
          demo: { kind: "bar", parts: [0.45, 0.3], labels: ["x", "y"], cap: "the sum", alt: "A bar of 0.45 and a bar of 0.3 join end to end, and the brace shows the sum, 0.75." }, try: { label: "Add 0.45 and 0.30", lab: "mode:1,x:45,y:30" } },
        { c: "c1", title: "Multiply, then count places", term: "decimal places", text: `For 0.3 × 0.4, multiply 3 × 4 = 12. Each factor has one decimal place, so the answer has two: 0.12.`,
          demo: { kind: "array", rows: 4, cols: 3, unit: "square", cap: "hundredths: 0.12", alt: "A grid 3 squares across and 4 down fills row by row to 12 small squares, which is 12 hundredths." }, try: { label: "Show 0.3 × 0.4", lab: "mode:0,x:3,y:4" } },
        { c: "c3", title: "A part of a part is smaller", term: "factor less than 1", text: `Half of a half is a quarter: 0.5 × 0.5 = 0.25. Times a number under 1, you get less than you started with.`,
          demo: { kind: "array", rows: 5, cols: 5, unit: "square", cap: "hundredths: 0.25", alt: "A grid 5 squares across and 5 down fills row by row to 25 small squares, a quarter of a hundred." }, try: { label: "Show half of a half", lab: "mode:0,x:5,y:5" } },
        { c: "c1", title: "Zero holds an empty place", term: "placeholder zero", text: `0.2 × 0.3 is 6 hundredths. You write that as 0.06. The zero keeps the 6 in the hundredths place.`,
          demo: { kind: "array", rows: 3, cols: 2, unit: "square", cap: "hundredths: 0.06", alt: "A grid 2 squares across and 3 down fills row by row to 6 small squares, which is 6 hundredths, written 0.06." }, try: { label: "Show 0.2 × 0.3", lab: "mode:0,x:2,y:3" } }
      ],
      timelineTitle: "The point took 600 years to settle",
      timelineLead: `People wrote parts of units in tenths long before there was a dot to mark them. The point in the model's readout is the last piece to arrive.`,
      timeline: [
        { when: "10th century", what: `Al-Uqlidisi writes decimal fractions in Arabic arithmetic. He marks where the whole number ends with a short stroke above a digit.` },
        { when: "1427", what: `In Samarkand, al-Kashi finishes <i>The Key to Arithmetic</i>. It teaches decimal fractions for astronomy, surveying, building, accounts and trade.` },
        { when: "1585", what: `Simon Stevin's booklet <i>De Thiende</i> ("The Tenth") shows merchants and surveyors how to compute with tenths, like the tenths in the grid.` },
        { when: "1608", what: `Robert Norton's English translation of Stevin's booklet appears. It later inspires Thomas Jefferson to propose a decimal currency for the United States.` },
        { when: "1614 and 1619", what: `John Napier's tables of logarithms use the point to mark the ones place, the same point you line up in the model.` }
      ],
      history: `<p><b>The problem.</b> Astronomers, surveyors and merchants worked with parts of units every day: parts of a degree, of a length, of a coin. Common fractions with different denominators are slow to combine, and astronomers often used base-60 fractions instead.</p>
<p><b>The solution.</b> Decimal fractions appear in Arabic arithmetic by the 10th century, when al-Uqlidisi marked the split with a short stroke above a digit. In Samarkand, al-Kashi finished <i>The Key to Arithmetic</i> in 1427, teaching decimal fractions to students of astronomy, surveying, architecture, accounting and trade. In Europe, Simon Stevin's booklet <i>De Thiende</i> ("The Tenth", 1585) explained them for "stargazers, surveyors, carpet-makers, wine-gaugers, mint-masters and all kind of merchants". The point itself settled later. John Napier's logarithm tables of 1614 and 1619 used it.</p>
<p><b>What it changed.</b> Stevin argued that coins, weights and measures should be decimal too. An English translation of his booklet, published in 1608, inspired Thomas Jefferson to propose a decimal currency for the United States. Today money and the metric system are decimal in most of the world. That is why adding prices and converting centimetres follow the rules in this lesson.</p>`,
      sources: [
        { title: "Simon Stevin (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Stevin/" },
        { title: "Jamshid al-Kashi (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Kashi/" },
        { title: "De Thiende (Wikipedia)", url: "https://en.wikipedia.org/wiki/De_Thiende" },
        { title: "Decimal separator (Wikipedia)", url: "https://en.wikipedia.org/wiki/Decimal_separator" }
      ],
      matters: { title: "Why the point matters", text: `<p>Most numbers you pay or measure are decimals. You already know the digit work. <b>Where the point goes</b> decides the answer.</p><ul class="why-chips"><li><b>Money</b> on every receipt</li><li><b>Doses</b> on every label</li><li><b>Lengths</b> on every plan</li></ul><p>Move the point one place and the answer is <b>ten times too big</b> or ten times too small. A quick estimate catches that before it costs you.</p>` },
      stakes: { title: "Where decimals go wrong", lead: `Almost every decimal slip is a point in the wrong place.`, items: [
        { role: "Multiplying", text: `0.6 × 0.4 written as 2.4. It should be 0.24, smaller than both factors.` },
        { role: "Adding", text: `4.7 + 12.35 done with the right edges lined up gives 12.82. Line up the points: 17.05.` },
        { role: "Dividing", text: `7.56 ÷ 0.36 with only the divisor's point moved. Move both: 756 ÷ 36 = 21.` },
        { role: "Pharmacy", text: `A dose of 0.5 mg read as 5 mg. That is ten times too much.` }
      ], try: { label: "Show 0.6 × 0.4", lab: "mode:0,x:6,y:4" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Bank teller", figure: "$948.25", scene: `A customer deposits $1,248.75 and withdraws $300.50. With the points lined up, the account changes by <span class="m">1,248.75 − 300.50 = 948.25</span> dollars.`, takeaway: "A cash drawer has to balance to the cent at the end of a shift." },
        { role: "Machinist", figure: "0.875 in", scene: `A 1.250 in slot needs a 0.375 in insert. The gap left is <span class="m">1.250 − 0.375 = 0.875</span> in.`, takeaway: "Lining up the points keeps thousandths under thousandths, where a part's fit is decided." },
        { role: "Pharmacist", figure: "3 tablets", scene: `An order calls for 0.75 mg and the tablets are 0.25 mg each. Move both points two places: <span class="m">75 ÷ 25 = 3</span> tablets.`, takeaway: "A point in the wrong place turns a dose into ten times or one tenth of what was ordered." },
        { role: "Payroll clerk", figure: "$855.00", scene: `An employee works 37.5 hours at $22.80 an hour: <span class="m">375 × 2,280 = 855,000</span>, with <span class="m">1 + 2 = 3</span> decimal places, gives $855.000, or $855.00.`, takeaway: "Counting decimal places is how a clerk knows the pay is $855, not $85.50." },
        { role: "Lab technician", figure: "16.8 g/L", scene: `4.2 g of salt is dissolved to make 0.25 L of solution. Concentration: <span class="m">4.2 ÷ 0.25 = 420 ÷ 25 = 16.8</span> g/L.`, takeaway: "Clearing the decimal from the divisor turns an awkward division into a familiar one." },
        { role: "Construction estimator", figure: "$924.00", scene: `Flooring for 240 sq ft at $3.85 per sq ft costs <span class="m">240 × 3.85 = 924.00</span> dollars. Estimate: <span class="m">240 × 4 = 960</span>.`, takeaway: "A quick estimate confirms the point is in the right place before a bid goes out." }
      ]
    },

    build: {
      lede: `Line up the points to add or subtract; multiply as whole numbers and count decimal places; clear the divisor's point before dividing.`,
      task: { text: "Compute so the point lands in the right place.", sub: `The same six steps work for a planter box, a grocery receipt or a dose. Try each one in the model above as you go.`,
        figure: { sym: `<i>x</i> × <i>y</i>`, value: "0.12", cap: "in the model", echo: "result" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above has two modes. In <b>Multiply</b>, a 10 by 10 grid stands for one whole: <span class="c2">x</span> shades columns, <span class="c3">y</span> shades rows, and the <span class="c1">overlap</span> is the product, counted in hundredths. In <b>Add</b>, two grids stand for two wholes. The squares of <span class="c2">x</span> and then <span class="c3">y</span> fill them in turn, and the readout stacks the numbers with their points lined up.</p>`,
      keyTry: [{ label: "Set x to 0.7", lab: "mode:0,x:7,y:4" }, { label: "Set y to 0.2", lab: "mode:0,x:7,y:2" }, { label: "Make x one whole", lab: "mode:0,x:10,y:4" }, { label: "Add past 1.00", lab: "mode:1,x:65,y:50" }],
      objects: ["square", "squares", "tenth", "tenths", "hundredth", "hundredths", "column", "columns", "row", "rows", "dollar", "dollars", "cent", "cents", "pound", "pounds", "friend", "friends", "dose", "doses"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Each place must sit under the same place, and the point marks where the ones are. Zeros fill empty places without changing the value: 4.7 = 4.70.`,
        `With the places lined up, carrying and borrowing work as they do for whole numbers. The point stays put because no place value changed.`,
        `A decimal is a whole number over a power of ten: 0.6 is 6/10 and 0.4 is 4/10. Multiplying the whole numbers handles the tops first.`,
        `The bottoms multiply too: <span class="m">10 × 10 = 100</span>, so tenths times tenths gives hundredths. Placing the point two places from the right is that division by 100.`,
        `Multiplying both numbers by the same power of ten keeps the answer the same: <span class="m">7.56 ÷ 0.36 = 756 ÷ 36</span>. A whole-number divisor makes ordinary long division work, and each quotient digit sits over the place it came from.`,
        `Rounded numbers give the size of the answer fast. A misplaced point shows up as an answer ten times too big or too small: 0.24, not 2.4.`
      ],
      stepTry: [{ label: "Add 0.40 and 0.05", lab: "mode:1,x:40,y:5" }, null, { label: "Show 0.9 × 0.6", lab: "mode:0,x:9,y:6" }, null, null, null],
      stepGoal: [null,
        { key: "result", eq: 1.25, text: `Press <b>Add</b>, then set <span class="c2">x</span> to 0.68 and <span class="c3">y</span> to 0.57. Add the hundredths first, then the tenths.`, after: `8 + 7 = 15 hundredths: write 5, carry 1. Then 6 + 5 + 1 = 12 tenths: write 2, carry 1 into the ones. <span class="m">0.68 + 0.57 = 1.25</span>.`, notYet: `Not yet. Press <b>Add</b>, then set x to 0.68 and y to 0.57.` },
        null,
        { key: "result", eq: 0.56, text: `Press <b>Multiply</b> and make <span class="m">0.8 × 0.7</span>. Say the whole-number product first, then place the point.`, after: `<span class="m">8 × 7 = 56</span>, and <span class="m">1 + 1 = 2</span> decimal places: <span class="m c1">0.56</span>.`, notYet: `Not yet. Press <b>Multiply</b>, then set x to 0.8 and y to 0.7.` },
        null,
        { key: "result", eq: 0.81, text: `Estimate <span class="m">0.9 × 0.9</span> first: a little less than <span class="m">1 × 1 = 1</span>. Then make it in <b>Multiply</b> and compare.`, after: `<span class="m">0.9 × 0.9 = 0.81</span>, a little less than 1, as the estimate said.`, notYet: `Not yet. Press <b>Multiply</b>, then set x to 0.9 and y to 0.9.` }],
      matters: { title: "Why a Method Keeps the Point in Place", text: `<p>Decimal digits are whole-number work you already know. The slips come from the point.</p><ul class="why-chips"><li><b>Adding</b>: points out of line</li><li><b>Multiplying</b>: places miscounted</li><li><b>Dividing</b>: one point moved</li></ul><p>A method puts the point in <b>by a rule, every time</b>. The estimate at the end tells you when a rule was skipped.</p>` },
      bridge: `<p>The planter box used the two habits that matter most: work with whole numbers, then place the point by a rule, and check the size with an estimate. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Totalling a grocery receipt and checking your change", check: { q: `A coffee costs $3.49 and a muffin $2.75. You pay with a $10 bill. What is the total, and what is your change?`, parts: [{ label: "total ($)", ans: 6.24 }, { label: "change ($)", ans: 3.76 }], hint: `Line up the points to add. Then write $10 as 10.00 and subtract.` }, figure: "$3.76",
          demo: { kind: "bar", parts: [6.24, null], total: 10, labels: ["coffee and muffin", "change"], unit: "dollar", alt: "A $10 bar splits into the $6.24 spent on coffee and a muffin and the unknown change, which is revealed as $3.76." },
          lines: [{ math: `3.49 + 2.75 = 6.24`, note: "Line up the points. 9 + 5 = 14 hundredths: write 4, carry 1." }, { math: `10.00 − 6.24 = 3.76`, note: "Write 10 as 10.00 so every place has a digit, then subtract." }, { math: `6.24 + 3.76 = 10.00`, note: "Check: the cost and the change add back to $10." }],
          predict: [null, { ask: `What change do you get from $10.00?`, parts: [{ label: "change ($)", ans: 3.76 }], hint: `Count up from 6.24: 0.76 makes 7.00, then 3 more makes 10.00.` }, null],
          link: `Steps 1 and 2: line up the points, and fill $10 out as 10.00 so every place has a digit.` },
        { task: "Paying for food sold by the pound", check: { q: `Cheese costs $6.20 a pound. You buy 2.75 pounds and pay with a $20 bill. What does the cheese cost, and what is your change?`, parts: [{ label: "cost ($)", ans: 17.05 }, { label: "change ($)", ans: 2.95 }], hint: `Multiply 275 × 620, then give the answer 2 + 2 = 4 decimal places.` }, figure: "$17.05",
          demo: { kind: "bar", parts: [17.05, null], total: 20, labels: ["cheese", "change"], unit: "dollar", alt: "A $20 bar splits into $17.05 for the cheese and the unknown change, which is revealed as $2.95." },
          lines: [{ math: `275 × 620 = 170,500`, note: "Leave the points off and multiply as whole numbers." }, { math: `2.75 × 6.20 = 17.0500 = 17.05`, note: "Two decimal places in each factor make four in the product." }, { math: `3 × 6 = 18`, note: "Estimate: about 3 pounds at about $6. So $17.05 is the right size." }, { math: `20.00 − 17.05 = 2.95`, note: "Line up the points to subtract." }],
          predict: [null, { ask: `How many decimal places does 2.75 × 6.20 get?`, parts: [{ label: "decimal places", ans: 4 }], hint: `Count the digits after the point in both factors and add.` }, null, null],
          link: `This is the planter box with prices: multiply as whole numbers, count the places (steps 3 and 4), then estimate (step 6).` },
        { task: "Splitting a restaurant bill evenly among friends", check: { q: `Four friends split a bill of $86.52 evenly. How much does each one pay?`, parts: [{ label: "each ($)", ans: 21.63 }], hint: `The divisor 4 is already whole. Divide, and put the point straight above the point in 86.52.` }, figure: "$21.63",
          demo: { kind: "bar", parts: [21.63, 21.63, 21.63, 21.63], labels: ["you", "Ana", "Ben", "Kim"], unit: "dollar", alt: "Four equal bars of $21.63 join, and the brace shows the whole bill, $86.52." },
          lines: [{ math: `88 ÷ 4 = 22`, note: "Estimate first with a round number near 86.52." }, { math: `86.52 ÷ 4 = 21.63`, note: "The divisor is whole. Divide, with the point straight above the dividend's point." }, { math: `4 × 21.63 = 86.52`, note: "Check: four shares make the whole bill." }],
          predict: [null, { ask: `What does each friend pay?`, parts: [{ label: "each ($)", ans: 21.63 }], hint: `8 ÷ 4 = 2, 6 ÷ 4 = 1 r 2, 25 ÷ 4 = 6 r 1, 12 ÷ 4 = 3.` }, null],
          link: `Step 5: when the divisor is already whole, divide as usual and put the point straight up. Step 6 says the answer is near $22.` },
        { task: "Following a medicine label in millilitres", check: { q: `A bottle holds 100 mL of syrup. Each dose is 2.5 mL. How many doses are in the bottle?`, parts: [{ label: "doses", ans: 40 }], hint: `Move the point one place right in both numbers: 1,000 ÷ 25.` }, figure: "40 doses",
          demo: { kind: "array", rows: 4, cols: 10, unit: "dose", cap: "doses in the bottle", alt: "Four rows of 10 doses fill one row at a time: 10, 20, 30, 40 doses in the bottle." },
          lines: [{ math: `100 ÷ 2.5`, note: "The divisor 2.5 is not whole yet." }, { math: `1,000 ÷ 25`, note: "Move the point one place right in both numbers. The answer stays the same." }, { math: `1,000 ÷ 25 = 40`, note: "Divide as whole numbers: 40 doses." }, { math: `100 ÷ 25 = 4`, note: "The slip: moving only the divisor's point gives 4 doses, ten times too few." }],
          predict: [null, { ask: `Move the point one place right in both. What does 100 become?`, parts: [{ label: "100 becomes", ans: 1000 }], hint: `Moving the point one place right multiplies by 10.` }, null, null],
          link: `Step 5: move both points the same number of places. That keeps the answer the same and makes the divisor whole.` }
      ]
    },

    formal: {
      question: { text: "Why do decimal places add when you multiply?", sub: `You can place the point by a rule. Here are the words a textbook uses for the same ideas, and how to write a decimal problem out in full.`,
        figure: { sym: `<i>xy</i>`, value: "0.12", cap: "the product", echo: "result" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<span class="fr"><span><i>m</i></span><span>10<sup><i>j</i></sup></span></span>`, term: "Terminating decimal", def: `A decimal with finitely many digits after the point. With <i>j</i> such digits it equals <span class="m"><i>m</i>/10<sup><i>j</i></sup></span> for an integer <i>m</i>: <span class="m">0.6 = 6/10</span>.`, was: "a decimal such as 0.6 or 2.75" },
        { c: "c2", sym: `<i>j</i>`, term: "Decimal places", def: `The number of digits to the right of the decimal point. In a product of terminating decimals the places add: <span class="m"><i>j</i> + <i>k</i></span>.`, was: "counting the digits after the point" },
        { c: "c1", sym: `<i>xy</i>`, term: "Product", def: `The result of multiplication: <span class="m">(<i>m</i>/10<sup><i>j</i></sup>)(<i>n</i>/10<sup><i>k</i></sup>) = <i>mn</i>/10<sup><i>j</i>+<i>k</i></sup></span>. For <span class="m">0 &lt; <i>x</i>, <i>y</i> &lt; 1</span>, <span class="m"><i>xy</i> &lt; min(<i>x</i>, <i>y</i>)</span>.`, was: "the overlap of rows and columns" },
        { c: "c1", sym: `<i>x</i> + <i>y</i>`, term: "Sum over a common denominator", def: `Write both addends over <span class="m">10<sup>max(<i>j</i>,<i>k</i>)</sup></span> and add the numerators. Aligning the points does exactly this.`, was: "lining up the points" },
        { c: "c3", sym: `10<sup><i>k</i></sup>`, term: "Scaling by a power of ten", def: `For <span class="m"><i>y</i> ≠ 0</span>, <span class="m"><i>x</i> ÷ <i>y</i> = (<i>x</i> · 10<sup><i>k</i></sup>) ÷ (<i>y</i> · 10<sup><i>k</i></sup>)</span>. Choose <i>k</i> so that <span class="m"><i>y</i> · 10<sup><i>k</i></sup></span> is an integer.`, was: "moving both points the same number of places" },
        { c: "c1", sym: `0.0<i>d</i>`, term: "Placeholder zero", def: `A zero digit that holds a place value with no units in it, so later digits keep their places: <span class="m">6/100 = 0.06</span>.`, was: "the zero in 0.06" },
        { c: "c3", sym: `3.3̅`, term: "Repeating decimal", def: `A decimal whose digits repeat forever. A quotient of terminating decimals can repeat: <span class="m">1 ÷ 0.3 = 10/3 = 3.333…</span>`, was: "a division that never comes out even" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Round to two decimal places” and “round to two significant figures” sound alike. <b>They give different answers</b> for the same number.</p><ul class="why-chips"><li>The number: <b>0.0456</b></li><li>Two decimal places: <b>0.05</b></li><li>Two significant figures: <b>0.046</b></li></ul><p>On a lab report or a dose chart, the exact phrase decides <b>which digits you keep</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Nearly every wrong answer here has the right digits and the point in the wrong place. Each rule below is a reason the point goes where it does.`,
      setupIntro: `<p>The planter box from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a decimal multiplication problem", items: [
        { say: `<b>Name the quantities.</b> Give each a letter, with its units.`, math: `<span class="m"><span class="c2">ℓ</span> = 0.6</span> m, &nbsp;<span class="m"><span class="c3"><i>w</i></span> = 0.4</span> m, &nbsp;<span class="m"><span class="c1"><i>A</i></span> = ℓ<i>w</i></span>` },
        { say: `<b>Write each factor over a power of ten.</b> One decimal place means a denominator of 10.`, math: `<span class="m">0.6 = <span class="fr"><span>6</span><span>10</span></span>, &nbsp;0.4 = <span class="fr"><span>4</span><span>10</span></span></span>` },
        { say: `<b>Apply the product rule.</b> Numerators multiply and the powers of ten add.`, math: `<span class="m"><span class="fr"><span>6</span><span>10</span></span> × <span class="fr"><span>4</span><span>10</span></span> = <span class="fr"><span>24</span><span>10<sup>1+1</sup></span></span> = <span class="fr"><span>24</span><span>100</span></span> = 0.24</span>` },
        { say: `<b>Check the size.</b> Both factors lie between 0 and 1, so the product is less than each.`, math: `<span class="m">0 &lt; 0.24 &lt; 0.4 &lt; 0.6</span> &nbsp;(so 2.4 is impossible)` },
        { say: `<b>Answer in a sentence.</b> State the result with units.`, math: `<span class="m"><i>A</i> = <span class="c1">0.24</span> m²</span> &nbsp;→ The floor needs 0.24 square metres of liner.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the numbers over powers of ten, apply the rule, and check the size. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can compute with decimals the formal way.",
      checks: [
        { hint: `Write 4.7 as 4.70 so the hundredths line up.`, parts: [{ label: "lb", ans: 17.05 }] },
        { hint: `Write $10 as 10.00, then subtract.`, parts: [{ label: "change ($)", ans: 6.54 }] },
        { hint: `6 × 25 = 150. Give the product 2 + 1 = 3 decimal places.`, parts: [{ label: "L", ans: 0.15 }] },
        { hint: `Multiply both numbers by 100 so the divisor is whole: 756 ÷ 36.`, parts: [{ label: "bows", ans: 21 }] },
        { hint: `Price times gallons is the total: 12<i>p</i> = 43.20. Divide both sides by 12.`, parts: [{ label: "p ($)", ans: 3.6 }] }
      ]
    }
  },
  prereqWhy: {
    "decimals": "You need to read decimal place values and know that 0.1 is one tenth before you can compute with them.",
    "multiplication": "Decimal multiplication is whole-number multiplication followed by placing the point."
  },
  unlocksWhy: {
    "averages": "Means are usually decimals, and computing them means adding decimal data and dividing.",
    "units": "Metric and other conversions multiply and divide by decimal conversion factors such as 2.54 cm per inch."
  },
  beyond: [
    { field: "Statistics", why: "Means, standard deviations and regression coefficients are computed and reported as decimals." },
    { field: "Numerical analysis", why: "Rounding and truncation in decimal computation are the starting point for studying computer error." }
  ],
  mistakes: [
    { wrong: `<span class="m">0.6 × 0.4 = 2.4</span>, with one decimal place in the product.`, fix: `Each factor has one decimal place, so the product has two: <span class="m">6/10 × 4/10 = 24/100 = 0.24</span>. A positive number less than 1 times another positive number less than 1 is less than both.` },
    { wrong: `Lining up the right-hand digits: <span class="m">4.7 + 12.35</span> computed as <span class="m">0.47 + 12.35 = 12.82</span>.`, fix: `Line up the decimal points: <span class="m">4.70 + 12.35 = 17.05</span>.` },
    { wrong: `Moving the point in the divisor but not the dividend: <span class="m">7.56 ÷ 0.36</span> treated as <span class="m">7.56 ÷ 36</span>.`, fix: `Move both points two places: <span class="m">756 ÷ 36 = 21</span>.` },
    { wrong: `Writing <span class="m">0.2 × 0.3 = 0.6</span>, dropping the placeholder zero.`, fix: `<span class="m">2 × 3 = 6</span> and the product needs two decimal places, so a zero fills the tenths place: <span class="m">0.06</span>.` },
    { wrong: `Writing ".5" or "5.0" for an amount where a misread matters, such as a dose.`, fix: `Write 0.5 with a leading zero and 5 with no trailing zero. A faint point in ".5" or "5.0" can be read as 5 or 50, a tenfold error.` }
  ],
  practice: [
    { ctx: "Groceries", q: `You buy 4.7 lb of apples and 12.35 lb of potatoes. What is the total weight?`, a: `<span class="m">4.70 + 12.35 = 17.05</span>, so <b>17.05 lb</b>.` },
    { ctx: "Money", q: `You pay for a $3.46 item with a $10 bill. How much change do you get?`, a: `<span class="m">10.00 − 3.46 = 6.54</span>, so <b>$6.54</b>.` },
    { ctx: "Work", q: `A pump adds 0.06 L of concentrate per minute. How much does it add in 2.5 minutes?`, a: `<span class="m">6 × 25 = 150</span>, with 2 + 1 = 3 decimal places: <span class="m">0.150 = 0.15</span>, so <b>0.15 L</b>.` },
    { ctx: "Crafts", q: `A roll holds 7.56 m of ribbon and each bow uses 0.36 m. How many bows can you make?`, a: `Multiply both by 100: <span class="m">756 ÷ 36 = 21</span>, so <b>21 bows</b>.` },
    { ctx: "Travel", q: `Write an equation with a letter for the unknown, then solve: you pay $43.20 for 12 gallons of fuel. What is the price <i>p</i> per gallon?`, a: `<span class="m">12<i>p</i> = 43.20</span>, so <span class="m"><i>p</i> = 43.20 ÷ 12 = 3.6</span>. The price is <b>$3.60</b> a gallon.` }
  ],
  origin: `The astronomer Jamshid al-Kashi used decimal fractions systematically in <i>The Key to Arithmetic</i> (1427), written for teaching in Samarkand. In Europe, Simon Stevin's pamphlet <i>De Thiende</i> (1585) argued for decimals in everyday measurement and trade.`
};
