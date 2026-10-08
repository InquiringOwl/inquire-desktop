window.ARITH = window.ARITH || {};

ARITH["subtraction"] = {
  title: "Subtraction",
  short: "Take away, or find how far apart.",
  grade: "Grades K–3",
  hours: 6,
  voice: "plain",
  eyebrow: "Operations · taking away and comparing",
  hero: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>`,
  lede: `Subtraction finds what is left when you take some away, or how much bigger one number is than another. It undoes addition.`,
  plain: `<p><b>Subtraction</b> finds what is left after an amount is taken away, or how far apart two amounts are. If you have $85 and spend $27, you have <span class="m">85 − 27 = 58</span> dollars left. The starting amount is the <b>minuend</b>, the amount taken away is the <b>subtrahend</b>, and the result is the <b>difference</b>.</p>
<p>The same subtraction answers comparison questions: if one jacket costs $85 and another $27, the first costs $58 more. When a top digit is too small, as with 5 − 7 in the ones column, you <b>regroup</b> (also called <b>borrowing</b>): trade one ten for ten ones and subtract <span class="m">15 − 7 = 8</span>. Every subtraction can be checked by adding: <span class="m">58 + 27 = 85</span>.</p>`,
  formal: `<p>For whole numbers with <span class="m"><i>a</i> ≥ <i>b</i></span>, the <b>difference</b> <span class="m"><i>a</i> − <i>b</i></span> is the unique whole number <span class="m"><i>d</i></span> such that <span class="m"><i>d</i> + <i>b</i> = <i>a</i></span>. Subtraction is thus the <b>inverse operation</b> of addition.</p>
<div class="display"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;&nbsp;<span class="dim">(minuend − subtrahend = difference)</span><br><i>a</i> − <i>b</i> ≠ <i>b</i> − <i>a</i> in general &nbsp;·&nbsp; (<i>a</i> − <i>b</i>) − <i>c</i> ≠ <i>a</i> − (<i>b</i> − <i>c</i>) in general</div>
<p>Subtraction is neither commutative nor associative. Within the whole numbers, <span class="m"><i>a</i> − <i>b</i></span> is undefined when <span class="m"><i>a</i> &lt; <i>b</i></span>; extending to the integers ℤ removes that restriction. In the column algorithm, when <span class="m"><i>a</i><sub><i>i</i></sub> &lt; <i>b</i><sub><i>i</i></sub></span>, one unit of place <span class="m"><i>i</i> + 1</span> is exchanged for ten units of place <span class="m"><i>i</i></span> (<b>regrouping</b>), which leaves the value of the minuend unchanged.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Minuend", desc: "The starting amount, the number you subtract from." },
    { c: "c3", sym: `<i>b</i>`, name: "Subtrahend", desc: "The amount being taken away." },
    { c: "c1", sym: `10`, name: "Borrow / regroup", desc: "One unit from the next place left traded for ten units in the current place when the top digit is too small." },
    { c: "c5", sym: `<i>d</i>`, name: "Difference", desc: "What is left, or how much larger the minuend is than the subtrahend." }
  ],
  steps: { title: "How to subtract with regrouping", items: [
    `Write the larger number (minuend) on top and line up the ones digits.`,
    `Start with the ones column. If the top digit is at least the bottom digit, subtract.`,
    `If the top digit is smaller, borrow: take 1 from the next place left (make that digit one less) and add 10 to the current top digit.`,
    `If the next place left is 0, keep moving left to a nonzero digit, borrow from it, and turn each 0 you passed into 9.`,
    `Subtract each column, moving left.`,
    `Check by adding the difference and the subtrahend. You should get the minuend.`
  ] },
  example: {
    prompt: `A bakery made 603 bagels. By noon it had sold 248. How many bagels are left?`,
    lines: [
      { math: `<span class="c2">603</span> − <span class="c3">248</span>`, note: "Line up the places. Ones: 3 is less than 8, so we need to borrow." },
      { math: `6 0 3 → 5 <span class="c1">10</span> 3 → 5 9 <span class="c1">13</span>`, note: "The tens digit is 0, so borrow from the hundreds: 6 hundreds becomes 5, the tens become 10, then one ten moves to the ones, leaving 9 tens and 13 ones." },
      { math: `13 − 8 = 5`, note: "Ones column." },
      { math: `9 − 4 = 5`, note: "Tens column." },
      { math: `5 − 2 = 3`, note: "Hundreds column." },
      { math: `<span class="c5">355</span> + <span class="c3">248</span> = <span class="c2">603</span>`, note: "Check by adding back. It matches the minuend." }
    ],
    answer: `The bakery has <span class="m c5">355</span> bagels left.`
  },
  why: `<p>Subtraction tells you where you stand: the change you are owed, the money left in a budget, the minutes before a train leaves, how much one price beats another. Comparing any two measurements, such as this month's bill against last month's, is a subtraction. A wrong difference looks just as believable as a right one, which is why the add-back check is worth the few seconds it takes.</p>
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
    concept: {
      lede: `Subtraction answers two questions: how much is left, and how far apart are two amounts? It is addition run backwards.`,
      history: `<p><b>The problem.</b> Traders and tax officials have always tracked what came in, what went out and what was still owed. A balance is a subtraction, and sometimes the result is a shortfall: more owed than held.</p>
<p><b>The solution.</b> In China, by about 200 BCE, calculators laid out counting rods in two colours, red and black, so that gains and losses in commercial and tax accounts could cancel each other. In India in 628, the astronomer Brahmagupta wrote rules for working with "fortunes" and "debts", including that a debt subtracted from zero is a fortune. Rules like these let a calculation continue even when the answer goes below zero.</p>
<p><b>What it changed.</b> In Europe, the − sign first appeared in print in Johannes Widmann's arithmetic for merchants (Leipzig, 1489), where it marked a shortfall, such as bales of goods weighing less than expected. In 1518 Henricus Grammateus used + and − for addition and subtraction themselves, and Robert Recorde's <i>The Whetstone of Witte</i> (1557) spread the signs in England. The minus sign on an overdrawn bank balance still carries that first meaning of a shortfall.</p>`,
      sources: [
        { title: "The History of Negative Numbers (NRICH, University of Cambridge)", url: "https://nrich.maths.org/node/55920" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      examples: [
        { role: "Cashier", scene: `A customer pays $50 for a $32.65 order. Count up: $0.35 to $33, $7 to $40, $10 to $50. Change: <span class="m">0.35 + 7 + 10 = 17.35</span> dollars, which is <span class="m">50 − 32.65</span>.`, takeaway: "Counting up is subtraction done by adding, and it doubles as the check." },
        { role: "Pharmacist", scene: `A controlled-drug count shows 240 tablets. After prescriptions for 90 and 60 are filled, <span class="m">240 − 90 − 60 = 90</span> tablets should remain on the shelf.`, takeaway: "If the shelf count differs, the records must be reconciled before anything else happens." },
        { role: "Accountant", scene: `Revenue for the quarter is $84,500 and expenses are $67,850. Net income: <span class="m">84,500 − 67,850 = 16,650</span> dollars.`, takeaway: "Profit is a difference, and every regrouping slip changes it." },
        { role: "Pilot", scene: `A flight starts with 6,200 lb of fuel and burns 4,750 lb. Remaining: <span class="m">6,200 − 4,750 = 1,450</span> lb, which is 250 lb above a 1,200 lb reserve.`, takeaway: "Two subtractions decide whether the plane can continue or must divert." },
        { role: "Machinist", scene: `A shaft measures 25.40 mm and must finish at 25.00 mm. Material to remove: <span class="m">25.40 − 25.00 = 0.40</span> mm.`, takeaway: "Taking off too much cannot be undone, so the difference is measured twice." },
        { role: "Meteorologist", scene: `The high is 21°C and the overnight low is −4°C. Daily range: <span class="m">21 − (−4) = 25</span>°C.`, takeaway: "Differences work below zero too, which is where negative numbers come in." }
      ]
    },
    build: {
      lede: `Line up the places, subtract one column at a time from the right, and regroup whenever a top digit is too small.`,
      intro: `<p>The model above stacks the minuend over the subtrahend with each place lined up. When a top digit is too small, it shows one unit from the next place left traded for ten, and each colour plays the same role in every problem.</p>`,
      stepWhy: [
        `Each column is one place value. Lining up the ones on the right means you subtract ones from ones and tens from tens.`,
        `Start on the right because regrouping always takes from the left. Working right to left settles each column before the next one is needed.`,
        `Trading 1 ten for 10 ones changes how the minuend is written, not its value: 7 tens and 12 ones is still 82.`,
        `An empty place has nothing to lend, so the trade comes from further left. One hundred becomes 10 tens, and one of those becomes 10 ones, leaving 9 tens. That is why each 0 you pass turns into 9.`,
        `After regrouping, every top digit is at least the bottom digit, so each column is a basic subtraction fact.`,
        `Subtraction is defined by addition: the difference <i>d</i> is the number with <i>d</i> + <i>b</i> = <i>a</i>. Adding back tests exactly that.`
      ],
      bridge: `<p>The bakery problem has the shape of most everyday differences: a starting amount, an amount taken away, regrouping when a column runs short, and an add-back check at the end.</p>`,
      tasks: [
        { task: "Checking change after paying cash", link: `Count up from the price, then add back as in step 6: change plus price must equal what you paid.` },
        { task: "Tracking what is left in a monthly budget", link: `Each bill is a subtrahend. $2,000 minus $1,365 of bills leaves $635; check that <span class="m">635 + 1,365 = 2,000</span>.` },
        { task: "Counting minutes until the bus", link: `From 7:48 to 8:15, regroup 8:15 as 7 hours and 75 minutes, as the bakery regrouped a hundred into tens: <span class="m">75 − 48 = 27</span> minutes.` },
        { task: "Comparing two prices", link: `A $603 laptop against a $248 one is the bakery subtraction: the first costs $355 more.` },
        { task: "Working out someone's age", link: `Subtract the birth year from this year. Someone born in 1987 turns <span class="m">2026 − 1987 = 39</span> during 2026; until the birthday they are still 38. Each new year the same subtraction gives one more.` }
      ]
    },
    formal: {
      setup: { title: "Writing a subtraction problem", items: [
        { say: `<b>Name the amounts.</b> Give the starting amount and the amount removed letters, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 603</span> bagels made, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 248</span> bagels sold` },
        { say: `<b>Write the equation.</b> The unknown difference gets its own letter. The equivalent addition form is what defines it.`, math: `<span class="m"><span class="c2"><i>a</i></span> − <span class="c3"><i>b</i></span> = <span class="c5"><i>d</i></span> &nbsp;⇔&nbsp; <span class="c5"><i>d</i></span> + <span class="c3"><i>b</i></span> = <span class="c2"><i>a</i></span></span>` },
        { say: `<b>Justify regrouping.</b> Rewriting the minuend by place value changes its form, not its value.`, math: `<span class="m">603 = 6 · 10² + 0 · 10 + 3 = 5 · 10² + 9 · 10 + 13</span>` },
        { say: `<b>Subtract place by place.</b> Each place now has a top digit at least as large as the bottom one.`, math: `<span class="m">(5 − 2) · 10² + (9 − 4) · 10 + (13 − 8) = 3 · 10² + 5 · 10 + 5 = 355</span>` },
        { say: `<b>Check and answer.</b> Add back, then state the result as a sentence with units.`, math: `<span class="m"><span class="c5">355</span> + 248 = 603</span> &nbsp;→ The bakery has 355 bagels left.` }
      ] }
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
    { wrong: `Borrowing across a zero in 603 − 248 without reducing the hundreds, giving 455.`, fix: `Borrowing across 0 changes the hundreds from 6 to 5 and the tens 0 to 9. The answer is <span class="m">355</span>.` },
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
  origin: `The minus sign − appeared in print alongside the plus sign in Johannes Widmann's 1489 commercial arithmetic. Widmann used them to mark surpluses and shortages in quantities of goods, not yet as general operation signs.`
};
