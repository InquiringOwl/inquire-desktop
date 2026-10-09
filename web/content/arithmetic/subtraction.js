window.ARITH = window.ARITH || {};

ARITH["subtraction"] = {
  title: "Subtraction",
  short: "Take away, or find how far apart.",
  grade: "Grades K–3",
  hours: 6,
  voice: "plain",
  eyebrow: "Operations · taking away and comparing",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>`,
  lede: `Subtraction finds the amount that remains when one quantity is removed from another, or how much larger one quantity is than another. It is the inverse of addition.`,
  plain: `<p><b>Subtraction</b> finds what is left after an amount is taken away, or how far apart two amounts are. If you have $85 and spend $27, you have <span class="m">85 − 27 = 58</span> dollars left. The starting amount is the <b>minuend</b>. The amount taken away is the <b>subtrahend</b>. The result is the <b>difference</b>.</p>
<p>The same subtraction answers comparison questions. If one jacket costs $85 and another $27, the first costs $58 more. When a top digit is too small, as with 5 − 7 in the ones column, you <b>regroup</b>. People also call it <b>borrowing</b>. You trade one ten for ten ones and subtract <span class="m">15 − 7 = 8</span>. You can check every subtraction by adding: <span class="m">58 + 27 = 85</span>.</p>`,
  formal: `<p>For whole numbers with <span class="m"><i>a</i> ≥ <i>b</i></span>, the <b>difference</b> <span class="m"><i>a</i> − <i>b</i></span> is the unique whole number <span class="m"><i>d</i></span> such that <span class="m"><i>d</i> + <i>b</i> = <i>a</i></span>. Subtraction is thus the <b>inverse operation</b> of addition.</p>
<div class="display"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;&nbsp;<span class="dim">(minuend − subtrahend = difference)</span><br><i>a</i> − <i>b</i> ≠ <i>b</i> − <i>a</i> in general &nbsp;·&nbsp; (<i>a</i> − <i>b</i>) − <i>c</i> ≠ <i>a</i> − (<i>b</i> − <i>c</i>) in general</div>
<p>Subtraction is neither commutative nor associative. Within the whole numbers, <span class="m"><i>a</i> − <i>b</i></span> is undefined when <span class="m"><i>a</i> &lt; <i>b</i></span>; extending to the integers ℤ removes that restriction. In the column algorithm, when <span class="m"><i>a</i><sub><i>i</i></sub> &lt; <i>b</i><sub><i>i</i></sub></span>, one unit of place <span class="m"><i>i</i> + 1</span> is exchanged for ten units of place <span class="m"><i>i</i></span> (<b>regrouping</b>), which leaves the value of the minuend unchanged.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Minuend", desc: "The starting amount, the number you subtract from. It sits on top." },
    { c: "c3", sym: `<i>b</i>`, name: "Subtrahend", desc: "The amount taken away. It sits under the top number, place under place." },
    { c: "c1", sym: `10`, name: "Borrow (regroup)", desc: "When a top digit is too small, one from the next place left becomes ten here. The old digit is crossed out and the new one is written above it." },
    { c: "c5", sym: `<i>d</i>`, name: "Difference", desc: "What is left, or how much bigger the top number is. The model writes it one digit per column." }
  ],
  steps: { title: "How to subtract with regrouping", items: [
    `Write the larger number (the minuend) on top and line up the ones digits.`,
    `Start with the ones column. If the top digit is at least the bottom digit, subtract.`,
    `If the top digit is smaller, borrow: take 1 from the next place left (make that digit one less) and add 10 to the current top digit.`,
    `If the next place left is 0, keep moving left to a nonzero digit, borrow from it, and turn each 0 you passed into 9.`,
    `Subtract each column, moving left.`,
    `Check by adding the difference and the subtrahend. You should get the minuend.`
  ] },
  example: {
    prompt: `A bakery made 603 bagels. By noon it had sold 248. How many bagels are left?`,
    lines: [
      { math: `<span class="c2">603</span> − <span class="c3">248</span>`, note: "Line up the places. Ones: 3 is less than 8, so you need to borrow." },
      { math: `6 0 3 → 5 <span class="c1">10</span> 3 → 5 9 <span class="c1">13</span>`, note: "The tens digit is 0, so borrow from the hundreds: 6 hundreds becomes 5 and the tens become 10. Then one ten moves to the ones, leaving 9 tens and 13 ones." },
      { math: `13 − 8 = 5`, note: "Ones column." },
      { math: `9 − 4 = 5`, note: "Tens column." },
      { math: `5 − 2 = 3`, note: "Hundreds column." },
      { math: `<span class="c5">355</span> + <span class="c3">248</span> = <span class="c2">603</span>`, note: "Check by adding back. It matches the minuend." }
    ],
    answer: `The bakery has <span class="m c5">355</span> bagels left.`
  },
  why: `<p>Subtraction tells you where you stand: the change you are owed, the money left in a budget, the minutes before a train leaves, how much one price beats another. Comparing any two measurements, such as this month's bill against last month's, is a subtraction. A wrong difference looks as believable as a right one, which is why the add-back check is worth the few seconds it takes.</p>
<p>Subtraction is also the first operation that leads out of the whole numbers. Asking for <span class="m">3 − 5</span> leads to negative numbers, which describe debts, temperatures below zero and depths below sea level. In algebra you solve equations by undoing operations, and subtraction undoes addition. In calculus every rate of change starts from a difference, <span class="m"><i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)</span>.</p>`,
  careers: [
    { role: "Cashier", use: "Figures change due by subtracting the price from the amount paid, often by counting up." },
    { role: "Pharmacist", use: "Subtracts dispensed quantities from stock counts, especially for controlled substances that require exact records." },
    { role: "Accountant", use: "Computes net income as revenue minus expenses and finds variances between budgeted and actual amounts." },
    { role: "Pilot", use: "Subtracts fuel burned from fuel on board to track remaining fuel against required reserves." },
    { role: "Machinist", use: "Subtracts a measured dimension from the target dimension to find how much more material to remove." },
    { role: "Meteorologist", use: "Subtracts the overnight low from the daytime high to report the daily temperature range." }
  ],
  life: [
    "Checking your change after paying cash",
    "Finding how much is left in your budget this month",
    "Working out how many minutes until the bus leaves",
    "Comparing two prices to see how much you save",
    "Figuring out someone's age from their birth year"
  ],
  fields: [
    { name: "Accounting", use: "Profit, balances and variances are all found by subtracting." },
    { name: "Physics", use: "Change in position, velocity or temperature is a final value minus an initial value." },
    { name: "Statistics", use: "The range of a data set is the maximum minus the minimum, and deviations from the mean are differences." }
  ],
  layers: {
    nudge: "Not yet. Check each column for a borrow, and watch for zeros on top.",
    concept: {
      lede: `Subtraction answers two questions: how much is left, and how far apart are two amounts? It is addition run backwards.`,
      heading: "What is subtraction?",
      question: { text: "How much is left?", sub: `Every difference you work out uses the same few ideas. Watch each one happen in the model above, then try it yourself.`,
        figure: { sym: `<i>d</i>`, value: "?", cap: "the difference", echo: "result" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["bagel", "bagels", "dollar", "dollars", "tablet", "tablets", "lb", "mm", "hundreds", "tens"],
      walk: { title: "Take it away together: bagels left by noon",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A bakery made 603 bagels. By noon it sold 248. How many bagels are left?`,
        demo: { kind: "columns", sub: [603, 248], alt: "603 sits above 248 in columns. The ones borrow across the 0 in the tens: the 6 hundreds become 5, the tens become 9 and the ones become 13. Then each column is subtracted from the right, and the difference 355 appears." },
        lines: [
          { math: `<span class="c2">603</span> − <span class="c3">248</span>`, note: `Stack the numbers. Ones go under ones, tens under tens, hundreds under hundreds.`, frame: 0 },
          { math: `6 0 3 → 5 <span class="c1">10</span> 3`, note: `Ones: 3 is less than 8, so you need a ten. The tens have 0 to give. So 1 hundred becomes 10 tens, and the 6 becomes 5.`, frame: 0 },
          { math: `5 <span class="c1">10</span> 3 → 5 <span class="c1">9</span> <span class="c1">13</span>`, note: `Now one of those tens moves to the ones. That leaves 9 tens and makes 13 ones.`, frame: 0 },
          { math: `13 − 8 = 5`, note: `Now the ones column works. Write 5.`, frame: 1 },
          { math: `9 − 4 = 5, &nbsp;5 − 2 = 3 → <span class="c5">355</span>`, note: `The tens and hundreds need no more borrowing. 355 bagels are left.`, frame: 4 },
          { math: `603 − 248 ≠ 455`, note: `Forget to cross the 6 down to 5 and you get 455. That invents 100 bagels.`, frame: 4 },
          { math: `<span class="c5">355</span> + <span class="c3">248</span> = <span class="c2">603</span>`, note: `Add back to check. You land on 603 again, so 355 is right.`, frame: 4 }
        ],
        predict: [null,
          { ask: `The ones need more than 3. The tens digit is 0. Where does the extra ten come from?`, choices: [
            { t: "From the hundreds", ok: true },
            { t: "From the tens", why: "The tens have 0. There is nothing there to give yet." },
            { t: "Turn it around: 8 − 3", why: "That is the classic slip. The 8 is being taken away, so it stays on the bottom." }
          ], hint: `Look one place further left than the tens.` },
          { ask: `The tens now hold 10. One ten moves to the ones. How many tens are left?`, parts: [{ label: "tens left", ans: 9 }], hint: `10 tens, take away 1 ten.` },
          null,
          { ask: `The tens are 9 − 4 and the hundreds 5 − 2. How many bagels are left?`, parts: [{ label: "bagels left", ans: 355 }], hint: `Write the hundreds, tens and ones digits in order: 3, 5, 5.` },
          { ask: `A coworker gets 455. What went wrong?`, choices: [
            { t: "The 6 hundreds never went down to 5", ok: true },
            { t: "The ones were done wrong", why: "455 ends in 5, the same as 355. The ones are fine." },
            { t: "The tens should be 0 − 4", why: "The tens were regrouped to 9 first. 9 − 4 = 5 is right." }
          ], hint: `Compare each digit of 455 with 355. Only one place is off.` },
          { ask: `Check by adding back. What is 355 + 248?`, parts: [{ label: "355 + 248", ans: 603 }], hint: `Ones: 5 + 8 = 13, carry 1. Tens: 1 + 5 + 4 = 10, carry 1. Hundreds: 1 + 3 + 2.` }],
        answer: `The bakery has <span class="m c5">355</span> bagels left.` },
      ideas: [
        { c: "c5", title: "Take some away, see what's left", term: "difference", text: `You have $85 and spend $27. The $58 you still have is the difference.`,
          demo: { kind: "bar", parts: [27, null], total: 85, unit: "dollar", alt: "A bar of 85 dollars holds a part of 27 dollars and a part marked with a question mark. The missing part is revealed as 58." }, try: { label: "Take 27 from 85", lab: "b:0,a:85,b:27,finish" } },
        { c: "c2", title: "Subtract like places", term: "place value", text: `Ones come off ones, tens off tens. Put the larger number on top and line up the right edges.`,
          demo: { kind: "columns", sub: [86, 25], alt: "86 sits above 25. The ones give 6 − 5 = 1, the tens give 8 − 2 = 6, and the difference 61 appears." }, try: { label: "Step through 86 − 25", lab: "b:0,a:86,b:25,play" } },
        { c: "c1", title: "Short in a column? Trade a ten", term: "regrouping (borrowing)", text: `In 52 − 17, the 2 ones can't give 7. Trade 1 ten for 10 ones, and 12 − 7 = 5.`,
          demo: { kind: "columns", sub: [52, 17], alt: "52 sits above 17. The 5 tens are crossed down to 4 and the ones become 12. Then 12 − 7 = 5 and 4 − 1 = 3, and the difference 35 appears." }, try: { label: "Borrow in 52 − 17", lab: "b:0,a:52,b:17,step" } },
        { c: "c3", title: "How far apart, and back again", term: "inverse of addition", text: `From 27 up to 85 is 58. So 85 − 27 = 58, and 58 + 27 = 85 checks it.`,
          demo: { kind: "line", from: 20, to: 90, points: [{ v: 27, c: "c3", label: "b" }, { v: 85, c: "c2", label: "a" }], show: "dist", alt: "A number line marks 27 and then 85. A bracket between them shows the distance, 58." }, try: { label: "Play 85 − 27", lab: "b:0,a:85,b:27,play" } }
      ],
      timelineTitle: "The minus sign started as a shortfall",
      timelineLead: `People tracked what was taken away and what was owed long before the − sign. The same sign sits beside the bottom number in the model.`,
      timeline: [
        { when: "By about 200 BCE", what: `Chinese calculators use counting rods in two colours, red and black, for tax and trade. Black rods cancel out red ones.` },
        { when: "628", what: `In India, the astronomer Brahmagupta writes rules for "fortunes" and "debts". One rule: a debt subtracted from zero is a fortune.` },
        { when: "1489", what: `Johannes Widmann prints the − sign in Leipzig, in a book for merchants. It marks a shortfall, like boxes of goods weighing less than they should.` },
        { when: "1518", what: `Henricus Grammateus uses + and − for adding and subtracting themselves.` },
        { when: "1557", what: `Robert Recorde's <i>The Whetstone of Witte</i> spreads the signs in England. He writes that − "betokeneth lesse".` }
      ],
      history: `<p><b>The problem.</b> Traders and tax officials have always tracked what came in, what went out and what was still owed. A balance is a subtraction, and sometimes the result is a shortfall: more owed than held.</p>
<p><b>The solution.</b> In China, by about 200 BCE, calculators laid out counting rods in two colours, red and black, so that amounts in trade and tax accounts could cancel each other. In India in 628, the astronomer Brahmagupta wrote his <i>Brahmasphutasiddhanta</i>. It gives rules for working with "fortunes" and "debts", including that a debt subtracted from zero is a fortune. Rules like these let a calculation continue even when the answer goes below zero.</p>
<p><b>What it changed.</b> In Europe, the − sign first appeared in print in Johannes Widmann's arithmetic for merchants (Leipzig, 1489). There it marked a shortfall, such as boxes or bales of goods weighing less than expected. In 1518 Henricus Grammateus used + and − for addition and subtraction themselves, and Robert Recorde's <i>The Whetstone of Witte</i> (1557) spread the signs in England. The minus sign on an overdrawn bank balance still carries that first meaning of a shortfall.</p>`,
      sources: [
        { title: "The History of Negative Numbers (NRICH, University of Cambridge)", url: "https://nrich.maths.org/node/55920" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      matters: { title: "Why subtraction matters", text: `<p>Subtraction tells you <b>where you stand</b>. Change, a budget, a deadline and a price gap are all differences.</p><ul class="why-chips"><li><b>Change</b> is paid minus price</li><li><b>Savings</b> is one price minus another</li><li><b>Time left</b> is later minus now</li></ul><p>A wrong difference looks as believable as a right one. That is why you <b>add back to check</b> before you trust it.</p>` },
      stakes: { title: "Where subtraction goes wrong", lead: `Most wrong differences come from a borrow that went missing or got turned around.`, items: [
        { role: "Smaller from larger", text: `52 − 17 written as 45. In the ones, 7 − 2 was done instead of borrowing for 12 − 7.` },
        { role: "Across a zero", text: `603 − 248 written as 455. The 6 hundreds never dropped to 5.` },
        { role: "Order flipped", text: `"Take 248 from 603" written as 248 − 603. The starting amount goes first.` },
        { role: "Cash drawer", text: `Change counted short. A customer leaves with less than they paid for.` }
      ], try: { label: "Watch 603 − 248 borrow", lab: "b:0,a:603,b:248,play" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Cashier", figure: "$17.35", scene: `A customer pays $50 for a $32.65 order. Count up: $0.35 to $33, $7 to $40, $10 to $50. Change: <span class="m">0.35 + 7 + 10 = 17.35</span> dollars, which is <span class="m">50 − 32.65</span>.`, takeaway: "Counting up is subtraction done by adding, and it doubles as the check." },
        { role: "Pharmacist", figure: "90 tablets", scene: `A controlled-drug count shows 240 tablets. After prescriptions for 90 and 60 are filled, <span class="m">240 − 90 − 60 = 90</span> tablets should remain on the shelf.`, takeaway: "If the shelf count differs, the records must be reconciled before anything else happens." },
        { role: "Accountant", figure: "$16,650", scene: `Revenue for the quarter is $84,500 and expenses are $67,850. Net income: <span class="m">84,500 − 67,850 = 16,650</span> dollars.`, takeaway: "Profit is a difference, and every regrouping slip changes it.", try: { label: "Play 84,500 − 67,850", lab: "b:0,a:84500,b:67850,play" } },
        { role: "Pilot", figure: "1,450 lb", scene: `A flight starts with 6,200 lb of fuel and burns 4,750 lb. Remaining: <span class="m">6,200 − 4,750 = 1,450</span> lb, which is 250 lb above a 1,200 lb reserve.`, takeaway: "Two subtractions decide whether the plane can continue or must divert.", try: { label: "Play 6,200 − 4,750", lab: "b:0,a:6200,b:4750,play" } },
        { role: "Machinist", figure: "0.40 mm", scene: `A shaft measures 25.40 mm and must finish at 25.00 mm. Material to remove: <span class="m">25.40 − 25.00 = 0.40</span> mm.`, takeaway: "Taking off too much cannot be undone, so the difference is measured twice." },
        { role: "Meteorologist", figure: "25°C", scene: `The high is 21°C and the overnight low is −4°C. Daily range: <span class="m">21 − (−4) = 25</span>°C.`, takeaway: "Differences work below zero too, which is where negative numbers come in." }
      ]
    },
    build: {
      lede: `Line up the places, subtract one column at a time from the right, and borrow whenever a top digit is too small.`,
      task: { text: "Subtract so every column is right.", sub: `The same six moves work for any difference, from your change at a register to a year's budget. Try each one in the model above as you go.`,
        figure: { sym: `<i>r</i>`, value: "2", cap: "borrows in the model", echo: "regroups" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above stacks the <span class="c2">minuend</span> over the <span class="c3">subtrahend</span>, place under place. Each step works one column from the right. When a top digit is too small, the model crosses it out and writes the <span class="c1">borrowed</span> digit above it. The <span class="c5">difference</span> fills in one digit per column.</p>`,
      keyTry: [{ label: "Set 603 − 248", lab: "b:0,a:603,b:248" }, { label: "Take away 99 instead", lab: "b:0,a:603,b:99" }, { label: "Borrow in 52 − 17", lab: "b:0,a:52,b:17,step" }, { label: "Finish 603 − 248", lab: "b:0,a:603,b:248,finish" }],
      objects: ["dollar", "dollars", "minute", "minutes", "min", "year", "years", "bagel", "bagels"],
      goalsIntro: `Two of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Each column is one place value. Lining up the ones on the right means you subtract ones from ones and tens from tens.`,
        `Start on the right because a borrow always comes from the left. Working right to left settles each column before the next one is needed.`,
        `Trading 1 ten for 10 ones changes how the minuend is written. Its value stays the same: 7 tens and 12 ones is still 82.`,
        `An empty place has nothing to lend, so the trade comes from further left. One hundred becomes 10 tens, and one of those becomes 10 ones, leaving 9 tens. That is why each 0 you pass turns into 9.`,
        `After borrowing, every top digit is at least the bottom digit. So each column is a basic subtraction fact.`,
        `Subtraction is defined by addition: the difference <i>d</i> is the number with <i>d</i> + <i>b</i> = <i>a</i>. Adding back tests exactly that.`
      ],
      stepTry: [{ label: "Set 603 − 248", lab: "b:0,a:603,b:248" }, { label: "Do the ones of 86 − 25", lab: "b:0,a:86,b:25,step" }, null, null, { label: "Finish 5,203 − 1,867", lab: "b:0,a:5203,b:1867,finish" }, null],
      stepGoal: [null,
        null,
        { key: "result", eq: 46, text: `Set <i>b</i> to 45 and <i>a</i> to 91, then press <b>Play</b> and let it work every column. Watch the ones borrow a ten.`, after: `1 one can't give 5, so a ten moved over: 11 − 5 = 6, then 8 − 4 = 4. The difference is <span class="m c5">46</span>.`, notYet: `Not yet. Check that the boxes read 91 and 45, then press <b>Play</b> until the difference shows.` },
        { key: "result", eq: 242, text: `Now borrow across a zero. Set <i>b</i> to 158 and <i>a</i> to 400, then press <b>Play</b>.`, after: `The 4 hundreds dropped to 3, the 0 tens became 9, and the ones became 10. Then 10 − 8 = 2, 9 − 5 = 4, 3 − 1 = 2: <span class="m c5">242</span>.`, notYet: `Not yet. Check that the boxes read 400 and 158, then press <b>Play</b> until the difference shows.` },
        null,
        null],
      matters: { title: "Why a Method Beats Subtracting in Your Head", text: `<p>Anyone can take 3 from 10. Mistakes start when the numbers are long, a zero sits on top, or someone talks to you halfway through.</p><ul class="why-chips"><li><b>Long</b> numbers</li><li><b>Zeros</b> on top</li><li><b>Interruptions</b></li></ul><p>A method is <b>the same few moves every time</b>. One column at a time, you can stop, pick up where you left off, and <b>add back</b> to check.</p>` },
      bridge: `<p>The bakery problem has the shape of most everyday differences: a starting amount, an amount taken away, a borrow when a column runs short, and an add-back check at the end. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Checking change after paying cash", check: { q: `You pay with a $50 bill for a $32 order. How much change should you get?`, parts: [{ label: "dollars", ans: 18 }], hint: `Count up from 32: first to 40, then to 50.` }, figure: "$18",
          demo: { kind: "line", from: 20, to: 60, points: [{ v: 32, c: "c3", label: "price" }, { v: 50, c: "c2", label: "paid" }], show: "dist", alt: "A number line marks the price, 32, and the amount paid, 50. A bracket between them shows the change, 18." },
          lines: [{ math: `32 + 8 = 40`, note: "Count up from the price to the next ten." }, { math: `40 + 10 = 50`, note: "Then up to what you paid." }, { math: `8 + 10 = 18`, note: "The steps add up to the change: $18." }, { math: `50 − 32 = 18`, note: "Same answer as subtracting. Counting up is the add-back check." }],
          predict: [null, null, { ask: `You counted up 8, then 10. How much change is that?`, parts: [{ label: "dollars", ans: 18 }], hint: `8 + 10.` }, null],
          try: { label: "Take 32 from 50", lab: "b:0,a:50,b:32,finish" }, link: `Counting up is step 6 run first: change plus price must equal what you paid.` },
        { task: "Tracking what is left in a monthly budget", check: { q: `Your budget is $2,000 a month. Bills come to $1,365. How much is left?`, parts: [{ label: "dollars", ans: 635 }], hint: `Three zeros on top. Borrow from the 2 thousands, and each 0 you pass turns into 9.` }, figure: "$635",
          demo: { kind: "columns", sub: [2000, 1365], alt: "2,000 sits above 1,365. The ones borrow across three zeros: the 2 thousands become 1, the hundreds and tens become 9 and the ones become 10. Each column is subtracted and the difference 635 appears." },
          lines: [{ math: `2 0 0 0 → 1 9 9 10`, note: "The ones need a ten. Borrow from the thousands. Each 0 you pass becomes 9." }, { math: `10 − 5 = 5, &nbsp;9 − 6 = 3`, note: "Ones, then tens." }, { math: `9 − 3 = 6, &nbsp;1 − 1 = 0`, note: "Hundreds, then thousands. $635 is left." }, { math: `635 + 1,365 = 2,000`, note: "Add back to check." }],
          predict: [null, { ask: `After the borrow, the tens hold 9. What is the tens digit of the answer, 9 − 6?`, parts: [{ label: "tens digit", ans: 3 }], hint: `9 − 6.` }, null, null],
          try: { label: "Play 2,000 − 1,365", lab: "b:0,a:2000,b:1365,play" }, link: `This is step 4 three times over: the borrow walks left past every zero, like the 0 tens in the bakery's 603.` },
        { task: "Counting minutes until the bus", check: { q: `It is 7:48. The bus leaves at 8:15. How many minutes do you have?`, parts: [{ label: "minutes", ans: 27 }], hint: `8:15 is the same as 7 hours and 75 minutes.` }, figure: "27 min",
          demo: { kind: "columns", sub: [75, 48], alt: "75 sits above 48. The ones borrow a ten: 15 − 8 = 7, then 6 − 4 = 2, and the difference 27 appears." },
          lines: [{ math: `8:15 → 7 h 75 min`, note: "Trade 1 hour for 60 minutes: 60 + 15 = 75." }, { math: `75 − 48`, note: "Now both times are in the 7 o'clock hour." }, { math: `15 − 8 = 7, &nbsp;6 − 4 = 2`, note: "The ones borrow a ten. You have 27 minutes." }],
          predict: [null, { ask: `8:15 is 7 hours and how many minutes?`, parts: [{ label: "minutes", ans: 75 }], hint: `One hour is 60 minutes. Add the 15.` }, null],
          try: { label: "Take 48 from 75", lab: "b:0,a:75,b:48,finish" }, link: `An hour lends 60 minutes the way a ten lends 10 ones (step 3).` },
        { task: "Comparing two prices", check: { q: `One TV costs $1,250 and another costs $875. How much do you save with the cheaper one?`, parts: [{ label: "dollars", ans: 375 }], hint: `Every column borrows. Start with 10 − 5 in the ones.` }, figure: "$375",
          demo: { kind: "line", from: 800, to: 1300, points: [{ v: 875, c: "c3", label: "cheaper" }, { v: 1250, c: "c2", label: "pricier" }], show: "dist", alt: "A number line marks 875 and then 1,250. A bracket between them shows the gap, 375." },
          lines: [{ math: `1,250 − 875`, note: "The larger price goes on top." }, { math: `10 − 5 = 5`, note: "Ones: borrow from the tens, which drop from 5 to 4." }, { math: `14 − 7 = 7`, note: "Tens: 4 is less than 7, so borrow from the hundreds, which drop from 2 to 1." }, { math: `11 − 8 = 3`, note: "Hundreds: borrow from the thousands. You save $375." }],
          predict: [null, null, { ask: `The tens now hold 4, less than 7. After you borrow, what is the tens subtraction's answer?`, parts: [{ label: "tens digit", ans: 7 }], hint: `4 becomes 14. Then 14 − 7.` }, null],
          try: { label: "Play 1,250 − 875", lab: "b:0,a:1250,b:875,play" }, link: `How much you save is a how-far-apart question. It is the same as the gap on a number line.` },
        { task: "Working out someone's age", check: { q: `Someone was born in 1987. How old do they turn in 2026?`, parts: [{ label: "years", ans: 39 }], hint: `Borrow in the ones, then borrow across the 0 hundreds for the tens.` }, figure: "39 years",
          demo: { kind: "columns", sub: [2026, 1987], alt: "2,026 sits above 1,987. The ones borrow a ten: 16 − 7 = 9. The tens borrow across the 0 hundreds: 11 − 8 = 3. The hundreds and thousands both give 0, and the difference 39 appears." },
          lines: [{ math: `16 − 7 = 9`, note: "Ones: 6 is less than 7. The 2 tens drop to 1." }, { math: `11 − 8 = 3`, note: "Tens: 1 is less than 8. The hundreds are 0, so borrow from the thousands. The 0 becomes 9." }, { math: `9 − 9 = 0, &nbsp;1 − 1 = 0`, note: "Hundreds and thousands. The age is 39." }, { math: `39 + 1,987 = 2,026`, note: "Add back to check. Until the birthday comes, they are still 38." }],
          predict: [null, { ask: `In the tens, 1 becomes 11 after the borrow. What is 11 − 8?`, parts: [{ label: "tens digit", ans: 3 }], hint: `Count up from 8 to 11.` }, null, null],
          try: { label: "Play 2,026 − 1,987", lab: "b:0,a:2026,b:1987,play" }, link: `The borrow crosses a zero, as in the bakery's 603. Each new year, the same subtraction gives one more.` }
      ]
    },
    formal: {
      question: { text: "What is a difference, exactly?", sub: `You can subtract, and you can subtract so every column holds up. Here are the words a textbook uses for the same ideas, and how to write a subtraction problem out in full.`,
        figure: { sym: `<i>d</i>`, value: "?", cap: "the difference", echo: "result" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>`, term: "Minuend", def: `The number from which another is subtracted. In <span class="m"><i>a</i> − <i>b</i> = <i>d</i></span>, <i>a</i> is the minuend.`, was: "the starting amount, the top number" },
        { c: "c3", sym: `<i>b</i>`, term: "Subtrahend", def: `The number being subtracted. In <span class="m"><i>a</i> − <i>b</i> = <i>d</i></span>, <i>b</i> is the subtrahend.`, was: "the amount taken away" },
        { c: "c5", sym: `<i>d</i>`, term: "Difference", def: `For whole numbers <span class="m"><i>a</i> ≥ <i>b</i></span>, the unique whole number <i>d</i> with <span class="m"><i>d</i> + <i>b</i> = <i>a</i></span>.`, was: "what is left, or how far apart" },
        { c: "c5", sym: `<i>a</i> − <i>b</i> = <i>d</i> ⇔ <i>d</i> + <i>b</i> = <i>a</i>`, term: "Inverse operation", def: `Subtracting <i>b</i> undoes adding <i>b</i>: <span class="m">(<i>a</i> + <i>b</i>) − <i>b</i> = <i>a</i></span>. Every subtraction can be verified by an addition.`, was: "add back to check" },
        { c: "c1", sym: `10<sup><i>i</i>+1</sup> = 10 · 10<sup><i>i</i></sup>`, term: "Regrouping (borrowing)", def: `Exchanging one unit of place <i>i</i> + 1 for ten units of place <i>i</i>. The written form of the minuend changes; its value does not: <span class="m">603 = 5·10² + 9·10 + 13</span>.`, was: "short in a column? trade a ten" },
        { c: "c2", sym: `<i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup>`, term: "Place value (expanded form)", def: `A digit <i>d</i><sub><i>i</i></sub> in place <i>i</i> (counting from 0 at the ones) stands for <span class="m"><i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup></span>, so the algorithm subtracts like powers of ten.`, was: "ones off ones, tens off tens" },
        { c: "c3", sym: `<i>a</i> − <i>b</i> ≠ <i>b</i> − <i>a</i>`, term: "Not commutative or associative", def: `In general order and grouping change a difference: <span class="m">10 − 3 = 7</span> but <span class="m">3 − 10 = −7</span>, and <span class="m">(10 − 4) − 3 = 3</span> but <span class="m">10 − (4 − 3) = 9</span>.`, was: "the larger number goes on top" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>Subtraction cares about order, so <b>the wording decides which number comes first</b>.</p><ul class="why-chips"><li>603 and 248</li><li><b>“Subtract 248 from 603”</b>: 603 − 248 = 355</li><li><b>“248 minus 603”</b>: 248 − 603 = −355</li></ul><p>“From” puts the second number first. Naming the minuend and subtrahend before you compute lets you, and <b>anyone checking</b>, see that the order is right.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong differences flip a column, lose a borrow across a zero, or reverse the order of the operands.`,
      setupIntro: `<p>The bakery from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a subtraction problem", items: [
        { say: `<b>Name the amounts.</b> Give the starting amount and the amount removed letters, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 603</span> bagels made, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 248</span> bagels sold` },
        { say: `<b>Write the equation.</b> The unknown difference gets its own letter. The equivalent addition form is what defines it.`, math: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>` },
        { say: `<b>Justify regrouping.</b> Rewriting the minuend by place value keeps its value the same.`, math: `<span class="m">603 = 6 · 10² + 0 · 10 + 3 = 5 · 10² + 9 · 10 + 13</span>` },
        { say: `<b>Subtract place by place.</b> Each place now has a top digit at least as large as the bottom one.`, math: `<span class="m">(5 − 2) · 10² + (9 − 4) · 10 + (13 − 8) = 3 · 10² + 5 · 10 + 5 = 355</span>` },
        { say: `<b>Check and answer.</b> Add back, then state the result as a sentence with units.`, math: `<span class="m"><span class="c5">355</span> + 248 = 603</span> &nbsp;→ The bakery has 355 bagels left.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: larger number on top, subtract from the right, borrow when a top digit is too small, then add back. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can subtract the formal way.",
      checks: [
        { hint: `Ones: 2 is less than 7, so borrow. 12 − 7 = 5, then 7 − 3.`, parts: [{ label: "dollars", ans: 45 }] },
        { hint: `700 = 6 hundreds, 9 tens, 10 ones. Then subtract each column.`, parts: [{ label: "boxes", ans: 436 }] },
        { hint: `5,003 = 4 thousands, 9 hundreds, 9 tens, 13 ones.`, parts: [{ label: "km", ans: 3156 }] },
        { hint: `Borrow across the three zeros of 3,000, then add back to check.`, parts: [{ label: "dollars", ans: 1238 }] },
        { hint: `Write <span class="m"><i>m</i> + 1,875 = 2,400</span>, then subtract 1,875 from both sides.`, parts: [{ label: "free money m (dollars)", ans: 525 }] }
      ]
    }
  },
  prereqWhy: {
    "addition": "Subtraction is defined as the inverse of addition, and addition facts are what you use to find and check differences."
  },
  unlocksWhy: {
    "division": "Long division repeatedly subtracts multiples of the divisor to find each digit of the quotient and the remainder.",
    "integers": "Subtracting a larger number from a smaller one requires negative numbers, which is how the integers are introduced."
  },
  beyond: [
    { field: "Algebra I", why: "Solving equations uses subtraction to undo addition on both sides." },
    { field: "Calculus", why: "Derivatives are limits of differences divided by small intervals." },
    { field: "Linear algebra", why: "Vector subtraction gives displacement and the distance between points." }
  ],
  mistakes: [
    { wrong: `Subtracting the smaller digit from the larger in every column, so <span class="m">52 − 17 = 45</span>.`, fix: `In the ones, 2 is less than 7, so borrow: 12 − 7 = 5, and the tens become 4 − 1 = 3. The answer is <span class="m">35</span>.` },
    { wrong: `Borrowing across a zero in 603 − 248 without reducing the hundreds, giving 455.`, fix: `Borrowing across 0 changes the hundreds from 6 to 5 and the tens from 0 to 9. The answer is <span class="m">355</span>.` },
    { wrong: `Assuming <span class="m">10 − 3</span> and <span class="m">3 − 10</span> are the same.`, fix: `Subtraction is not commutative. <span class="m">10 − 3 = 7</span>, while <span class="m">3 − 10 = −7</span>, a negative number.` },
    { wrong: `Reading "take 248 from 603" as <span class="m">248 − 603</span>.`, fix: `The amount you start with comes first: "take <i>b</i> from <i>a</i>" means <span class="m"><i>a</i> − <i>b</i></span>, here <span class="m">603 − 248 = 355</span>.` }
  ],
  practice: [
    { ctx: "Shopping", q: `A gift card holds $82. You spend $37. How much is left on the card?`, a: `Borrow: 12 − 7 = 5, then 7 − 3 = 4. <b>$45</b>. Check: 45 + 37 = 82.` },
    { ctx: "Warehouse", q: `A warehouse had 700 boxes and shipped 264. How many boxes remain?`, a: `Borrow across two zeros: 700 becomes 6 hundreds, 9 tens, 10 ones. 10 − 4 = 6, 9 − 6 = 3, 6 − 2 = 4. <b>436</b> boxes.` },
    { ctx: "Travel", q: `A flight is 5,003 km long and the plane has flown 1,847 km. How far is left?`, a: `Regroup: 5,003 = 4 thousands, 9 hundreds, 9 tens, 13 ones. 13 − 7 = 6, 9 − 4 = 5, 9 − 8 = 1, 4 − 1 = 3. <b>3,156 km</b>. Check: 3,156 + 1,847 = 5,003.` },
    { ctx: "Fundraising", q: `A club wants to raise $3,000. It has $1,762 so far. How much more does it need?`, a: `<span class="m">3,000 − 1,762 = </span><b>$1,238</b>. Check: 1,238 + 1,762 = 3,000.` },
    { ctx: "Budget", q: `Write an equation with a letter for the unknown, then solve: a household budget is $2,400 a month and $1,875 is already committed to bills. How much money <i>m</i> is still free?`, a: `<span class="m"><i>m</i> + 1,875 = 2,400</span>, so <span class="m"><i>m</i> = 2,400 − 1,875 = </span><b>$525</b>. Check: 525 + 1,875 = 2,400.` }
  ],
  origin: `The minus sign − appeared in print alongside the plus sign in Johannes Widmann's 1489 commercial arithmetic. Widmann used them to mark surpluses and shortfalls in quantities of goods. They were not yet general signs for the operations.`
};
