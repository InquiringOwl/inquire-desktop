window.ARITH = window.ARITH || {};

ARITH["addition"] = {
  title: "Addition",
  short: "Put groups together and count the total.",
  grade: "Grades K–3",
  hours: 6,
  voice: "plain",
  eyebrow: "Operations · combining quantities",
  hero: `<span class="m"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span></span>`,
  lede: `Addition joins two amounts into one total, called the sum. Column addition does it one place at a time, carrying whenever a place reaches ten.`,
  plain: `<p><b>Addition</b> combines two or more amounts into one total. If you have $40 in your wallet and a friend pays you back $25, you now have $65: <span class="m">40 + 25 = 65</span>. The amounts you combine are called <b>addends</b>, and the total is the <b>sum</b>.</p>
<p>Two facts make addition easy to trust. Order does not matter: <span class="m">25 + 40</span> is also 65. And adding zero changes nothing. The rest of this lesson is about doing it reliably with bigger numbers, one place value at a time.</p>`,
  formal: `<p><b>Addition</b> on the whole numbers can be defined from the successor function: <span class="m"><i>a</i> + 0 = <i>a</i></span> and <span class="m"><i>a</i> + <i>S</i>(<i>b</i>) = <i>S</i>(<i>a</i> + <i>b</i>)</span>. Equivalently, if disjoint sets <i>A</i> and <i>B</i> have <span class="m">|<i>A</i>| = <i>a</i></span> and <span class="m">|<i>B</i>| = <i>b</i></span>, then <span class="m">|<i>A</i> ∪ <i>B</i>| = <i>a</i> + <i>b</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span> &nbsp;&nbsp;<span class="dim">(addend + addend = sum)</span><br><i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; (<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; <i>a</i> + 0 = <i>a</i></div>
<p>The column algorithm adds digits in each place <span class="m"><i>i</i></span>: if <span class="m"><i>a</i><sub><i>i</i></sub> + <i>b</i><sub><i>i</i></sub> + <i>c</i><sub><i>i</i></sub> ≥ 10</span> (where <span class="m"><i>c</i><sub><i>i</i></sub></span> is the incoming <b>carry</b>), write the sum minus 10 and pass a carry of 1 to place <span class="m"><i>i</i> + 1</span>. This works because <span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First addend", desc: "One of the amounts being added." },
    { c: "c3", sym: `<i>b</i>`, name: "Second addend", desc: "The other amount being added." },
    { c: "c1", sym: `1`, name: "Carry", desc: "When a column adds to 10 or more, ten of that place are traded for 1 in the next place left." },
    { c: "c5", sym: `<i>s</i>`, name: "Sum", desc: "The total you get when the addends are combined." }
  ],
  steps: { title: "How to add with columns", items: [
    `Write the numbers one above the other with the ones digits lined up on the right.`,
    `Add the ones column.`,
    `If the column total is 10 or more, write the ones digit of that total and carry the 1 to the top of the next column left.`,
    `Add the next column, including any carry. Repeat the carry rule.`,
    `Keep going left. If the last column makes 10 or more, write the whole total.`,
    `Check: estimate by rounding, or add the numbers in the other order.`
  ] },
  example: {
    prompt: `On a road trip you drive 478 miles on Saturday and 356 miles on Sunday. How many miles did you drive in all?`,
    lines: [
      { math: `<span class="c2">478</span> + <span class="c3">356</span>`, note: "Line up the ones, tens and hundreds." },
      { math: `8 + 6 = 14 → write 4, carry <span class="c1">1</span>`, note: "Ones: 14 is one ten and four ones." },
      { math: `<span class="c1">1</span> + 7 + 5 = 13 → write 3, carry <span class="c1">1</span>`, note: "Tens: 13 tens is one hundred and three tens." },
      { math: `<span class="c1">1</span> + 4 + 3 = 8 → write 8`, note: "Hundreds: no carry needed." },
      { math: `<span class="c5">834</span>`, note: "Read the digits from the hundreds down." },
      { math: `500 + 400 = 900 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounding each addend gives about 900, so 834 is reasonable." }
    ],
    answer: `You drove <span class="m c5">834</span> miles.`
  },
  why: `<p>Addition is the operation you use most, often without noticing. A grocery total, the hours on a timesheet, the miles on a trip and the bills in a monthly budget are all sums. When you can add quickly and check your answer, you can catch a billing error, notice a short paycheck, or tell whether a plan fits your budget before you commit to it.</p>
<p>It is also the starting point for the rest of math. Subtraction undoes addition, multiplication is repeated addition, and averages, percentages and interest all begin with a total. The carrying rule you learn here (trade ten of one place for one of the next) is the same idea a computer chip uses to add binary numbers.</p>`,
  careers: [
    { role: "Cashier", use: "Totals purchases and counts back change, often mentally when a register goes down." },
    { role: "Bookkeeper", use: "Adds up daily receipts and expenses and checks that column totals match across accounts." },
    { role: "Payroll specialist", use: "Adds regular hours, overtime hours and paid leave to find each employee's total paid hours." },
    { role: "Nurse", use: "Totals a patient's fluid intake from IV fluids, oral drinks and medications over a shift." },
    { role: "Carpenter", use: "Adds lengths of boards and trim pieces to find how much lumber a job needs." },
    { role: "Logistics coordinator", use: "Adds package weights to confirm a shipment stays under a truck's load limit." }
  ],
  life: [
    "Totaling the cost of groceries before checkout",
    "Adding up hours worked in a week",
    "Keeping score in a game",
    "Planning a budget from several monthly bills",
    "Finding total travel time across several legs of a trip"
  ],
  fields: [
    { name: "Accounting", use: "Every financial statement is built from sums of transactions." },
    { name: "Computer science", use: "Processors add binary numbers with a carry chain that works just like column addition." },
    { name: "Statistics", use: "Totals and sums are the first step in computing averages and other summaries." },
    { name: "Physics", use: "Combined masses, total distances and net forces along a line are found by adding." }
  ],
  layers: {
    concept: {
      lede: `Addition answers one question: how much do I have altogether? You use it every time you total a bill, a schedule or a budget.`,
      history: `<p><b>The problem.</b> People have always needed totals: how much grain is in storage, how much a trader is owed. For most of history they found them with tallies, pebbles, counting boards and the abacus, and wrote results in systems like Roman numerals, which are awkward to add on paper.</p>
<p><b>The solution.</b> In India, a place-value system with ten digits grew up over several centuries; its earliest known use is in the Bakhshali manuscript, whose oldest leaves are dated to about 224–383 CE. Around 825 CE the scholar al-Khwarizmi wrote a book on calculating with these "Hindu numerals", which spread them across the Islamic world. In 1202 Leonardo of Pisa (Fibonacci), who had learned the system as a boy at a North African trading post, finished <i>Liber Abaci</i>, showing European merchants how to use it for bookkeeping, money-changing and interest.</p>
<p><b>What it changed.</b> With place value, adding large numbers became a short routine anyone could do with pen and paper: add a column, carry, move left. That is the method in this lesson. The + sign came later: it first appeared in print in Johannes Widmann's arithmetic for merchants (Leipzig, 1489), where it marked a surplus in the weight of goods.</p>`,
      sources: [
        { title: "Hindu–Arabic numeral system (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system" },
        { title: "Fibonacci (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fibonacci" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      examples: [
        { role: "Cashier", scene: `The register goes down. Items cost $12.49, $3.75 and $8.20. Add the dollars, <span class="m">12 + 3 + 8 = 23</span>, then the cents, <span class="m">49 + 75 + 20 = 144</span> cents, which is $1.44. Total: <b>$24.44</b>.`, takeaway: "Adding parts separately, then combining, keeps mental totals manageable." },
        { role: "Payroll specialist", scene: `An employee works 40 regular hours, 6 overtime hours and takes 8 hours of paid leave. Paid hours: <span class="m">40 + 6 + 8 = 54</span>.`, takeaway: "A missing addend is money missing from someone's paycheck." },
        { role: "Nurse", scene: `During a shift a patient gets 500 mL of IV fluid and drinks 240 mL of water and 120 mL of juice. Fluid intake: <span class="m">500 + 240 + 120 = 860</span> mL.`, takeaway: "Care decisions rest on these totals, so they are double-checked." },
        { role: "Carpenter", scene: `Trim for a doorway needs two sides of 84 inches and a top of 38 inches: <span class="m">84 + 84 + 38 = 206</span> inches, a little over 17 feet.`, takeaway: "Adding before you buy saves a second trip to the store." },
        { role: "Logistics coordinator", scene: `Three pallets weigh 1,250 lb, 980 lb and 1,475 lb. Together: <span class="m">3,705</span> lb, safely under a 4,000 lb limit.`, takeaway: "A sum decides whether a load is legal to drive." },
        { role: "Bookkeeper", scene: `Receipts for three days are $1,320, $985 and $1,140. Their sum, $3,445, should match the bank deposit.`, takeaway: "When two totals disagree, something was missed." }
      ]
    },
    build: {
      lede: `Column addition is a routine: line up the places, add one column at a time from the right, and carry whenever a column reaches ten.`,
      intro: `<p>The model above shows column addition: two numbers stacked so each place value lines up. Each colour plays the same role in every problem you will do.</p>`,
      stepWhy: [
        `Each column holds one place value: ones, tens, hundreds. Lining up on the right puts ones under ones, so you only ever add like with like.`,
        `Start on the right because a carry only ever moves left. Doing the ones first means every carry is ready before you reach the column that needs it.`,
        `Ten ones make one ten. A column can hold only one digit, so the extra ten is traded up to the next place. That traded ten is the carry.`,
        `The carry is real value: a 1 carried into the tens column is worth 10. Leaving it out is the most common way to lose an amount.`,
        `There is no column to the left of the last one, so its whole total is written out: 9 + 8 in the hundreds column gives 17 hundreds, written 17.`,
        `An estimate catches big slips like a missed carry. Adding in the other order catches small ones, because the sum must come out the same.`
      ],
      bridge: `<p>The road-trip problem is the pattern behind most everyday totals: several amounts, lined up by place value, added column by column, then checked with an estimate. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Totaling groceries before checkout", link: `Round each price as you shop to keep a running estimate, as the 900-mile estimate did, then compare it with the register total.` },
        { task: "Adding up hours worked in a week", link: `Add day by day, like the food bank adds week by week. Minutes carry into hours at 60, just as ones carry into tens at 10.` },
        { task: "Planning a monthly budget", link: `Stack every bill by place value and add. A forgotten bill works like a forgotten carry: the total looks fine but is too low.` },
        { task: "Finding total travel time across a trip", link: `Add each leg, exactly as Saturday and Sunday were added, then estimate to see that the answer is reasonable.` },
        { task: "Keeping score in a game", link: `Keep a running total: add each new score to the total so far, one addend at a time.` }
      ]
    },
    formal: {
      setup: { title: "Writing an addition problem", items: [
        { say: `<b>Name the amounts.</b> Give each addend a letter and say what it stands for, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 478</span> miles (Saturday), &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 356</span> miles (Sunday)` },
        { say: `<b>Write the equation.</b> The unknown total gets its own letter, on its own side of the equals sign.`, math: `<span class="m"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span></span>` },
        { say: `<b>Many addends.</b> The associative and commutative laws let you group and order them freely. A long sum is written in sigma notation.`, math: `<span class="m"><i>s</i> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ⋯ + <i>a</i><sub><i>n</i></sub> = ∑<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>a</i><sub><i>k</i></sub></span>` },
        { say: `<b>Justify the algorithm.</b> Expanding each addend by place value shows why carrying works: 12 tens become 1 hundred and 2 tens, and 14 ones become 1 ten and 4 ones.`, math: `<span class="m">(4·10² + 7·10 + 8) + (3·10² + 5·10 + 6) = 7·10² + 12·10 + 14 = 8·10² + 3·10 + 4 = 834</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>s</i> = 478 + 356 = <span class="c5">834</span></span> &nbsp;→ You drove 834 miles.` }
      ] }
    }
  },
  prereqWhy: {
    "place-value": "Column addition lines up digits by place, and carrying is trading ten ones for one ten, ten tens for one hundred, and so on."
  },
  unlocksWhy: {
    "subtraction": "Subtraction is the inverse of addition, and every subtraction can be checked by adding the answer back.",
    "multiplication": "Multiplication starts as repeated addition of equal groups, and multi-digit multiplication ends by adding partial products."
  },
  beyond: [
    { field: "Algebra I", why: "Combining like terms and adding polynomials follow the same place-by-place pattern as column addition." },
    { field: "Calculus", why: "Series and integrals are built from sums of many terms." },
    { field: "Abstract algebra", why: "Groups and rings are defined by generalizing the properties of addition." }
  ],
  mistakes: [
    { wrong: `Lining up numbers on the left: adding 356 and 42 as if the 4 sat under the 3.`, fix: `Always line up the ones on the right. The 4 in 42 is 4 tens and goes under the 5.` },
    { wrong: `Writing 14 in the ones column instead of carrying: 478 + 356 becomes "71214".`, fix: `Each column holds one digit. Write the 4 and carry the 1 ten to the next column.` },
    { wrong: `Forgetting to add the carried 1, giving <span class="m">478 + 356 = 724</span>.`, fix: `Write the carry at the top of the next column and include it in that column's total.` },
    { wrong: `Adding amounts in different units: 2 ft + 6 in written as 8.`, fix: `Convert to one unit first. 2 ft = 24 in, so <span class="m">24 + 6 = 30</span> in.` }
  ],
  practice: [
    { ctx: "Shopping", q: `A jacket costs $36 and a shirt costs $47. What do they cost together?`, a: `Ones: 6 + 7 = 13, write 3, carry 1. Tens: 1 + 3 + 4 = 8. <b>$83</b>.` },
    { ctx: "Travel", q: `A flight covers 509 miles to its first stop and 287 miles to its second. How far does it fly in all?`, a: `Ones: 16, write 6, carry 1. Tens: 1 + 0 + 8 = 9. Hundreds: 5 + 2 = 7. <b>796 miles</b>.` },
    { ctx: "Small business", q: `A shop spent $2,748 on supplies in March and $1,396 in April. How much did it spend in both months?`, a: `Ones 14 (carry 1), tens 1 + 4 + 9 = 14 (carry 1), hundreds 1 + 7 + 3 = 11 (carry 1), thousands 1 + 2 + 1 = 4. <b>$4,144</b>.` },
    { ctx: "Community", q: `A food bank collects 1,875 cans in week one, 2,409 in week two and 638 in week three. How many cans in total?`, a: `<span class="m">1,875 + 2,409 = 4,284</span>; <span class="m">4,284 + 638 = </span><b>4,922</b> cans.` },
    { ctx: "Health care", q: `Write an equation with a letter for the unknown, then solve: a patient's intake is 500 mL, 240 mL and 120 mL. What is the total intake <i>t</i>?`, a: `<span class="m"><i>t</i> = 500 + 240 + 120</span>. 500 + 240 = 740; 740 + 120 = <b>860 mL</b>.` }
  ],
  origin: `The plus sign + and minus sign − first appeared in print in Johannes Widmann's arithmetic book for merchants, published in Leipzig in 1489.`
};
