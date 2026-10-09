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
<p>Two facts help you trust a sum. Order does not matter: <span class="m">25 + 40</span> is also 65. And adding zero changes nothing. The rest of this lesson is about adding bigger numbers reliably, one place value at a time.</p>`,
  formal: `<p><b>Addition</b> on the whole numbers can be defined from the successor function: <span class="m"><i>a</i> + 0 = <i>a</i></span> and <span class="m"><i>a</i> + <i>S</i>(<i>b</i>) = <i>S</i>(<i>a</i> + <i>b</i>)</span>. Equivalently, if disjoint sets <i>A</i> and <i>B</i> have <span class="m">|<i>A</i>| = <i>a</i></span> and <span class="m">|<i>B</i>| = <i>b</i></span>, then <span class="m">|<i>A</i> ∪ <i>B</i>| = <i>a</i> + <i>b</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span> &nbsp;&nbsp;<span class="dim">(addend + addend = sum)</span><br><i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; (<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; <i>a</i> + 0 = <i>a</i></div>
<p>The column algorithm adds digits in each place <span class="m"><i>i</i></span>: if <span class="m"><i>a</i><sub><i>i</i></sub> + <i>b</i><sub><i>i</i></sub> + <i>c</i><sub><i>i</i></sub> ≥ 10</span> (where <span class="m"><i>c</i><sub><i>i</i></sub></span> is the incoming <b>carry</b>), write the sum minus 10 and pass a carry of 1 to place <span class="m"><i>i</i> + 1</span>. This works because <span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First addend", desc: "One of the amounts being added. In the model it is the top number." },
    { c: "c3", sym: `<i>b</i>`, name: "Second addend", desc: "The other amount being added. It sits under the first, place under place." },
    { c: "c1", sym: `1`, name: "Carry", desc: "When a column adds to 10 or more, ten of that place are traded for 1 in the next place left." },
    { c: "c5", sym: `<i>s</i>`, name: "Sum", desc: "The total you get when the addends are combined. The model writes it one digit per column." }
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
    { name: "Computer science", use: "Processors add binary numbers with a carry chain that works like column addition." },
    { name: "Statistics", use: "Totals and sums are the first step in computing averages and other summaries." },
    { name: "Physics", use: "Combined masses, total distances and net forces along a line are found by adding." }
  ],
  layers: {
    nudge: "Not yet. Check each column for a carry.",
    concept: {
      lede: `Addition answers one question: how much do I have altogether? You use it every time you total a bill, a schedule or a budget.`,
      heading: "What is addition?",
      question: { text: "How much altogether?", sub: `Every sum you work out uses the same few ideas. Watch each one happen in the model above, then try it yourself.`,
        figure: { sym: `<i>s</i>`, value: "?", cap: "the sum", echo: "result" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["mile", "miles", "dollar", "dollars", "cent", "cents", "hour", "hours", "inch", "inches", "feet", "lb", "mL", "pallets", "goods"],
      walk: { title: "Add it together: two days on the road",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You drive 478 miles on Saturday and 356 miles on Sunday. How far did you drive in all?`,
        demo: { kind: "columns", add: [478, 356], alt: "478 sits above 356 in columns. Step by step the ones, tens and hundreds are added from the right, with a carried 1 over the tens and over the hundreds, and the sum 834 appears." },
        lines: [
          { math: `<span class="c2">478</span> + <span class="c3">356</span>`, note: `Stack the numbers. Ones go under ones, tens under tens, hundreds under hundreds.`, frame: 0 },
          { math: `8 + 6 = 14 → write 4, carry <span class="c1">1</span>`, note: `Start on the right. 14 ones is 1 ten and 4 ones. The 4 stays. The ten moves left as a carry.`, frame: 1 },
          { math: `<span class="c1">1</span> + 7 + 5 = 13 → write 3, carry <span class="c1">1</span>`, note: `The tens column has the carried 1 too. 13 tens is 1 hundred and 3 tens.`, frame: 2 },
          { math: `<span class="c1">1</span> + 4 + 3 = 8 → <span class="c5">834</span>`, note: `The hundreds make 8, with no carry. You drove 834 miles.`, frame: 4 },
          { math: `478 + 356 ≠ 724`, note: `Drop both carries and you get 724. That loses 10 miles from the tens and 100 from the hundreds.`, frame: 4 },
          { math: `500 + 400 = 900`, note: `Round each day to check. About 900 miles, so 834 makes sense.`, frame: 4 }
        ],
        predict: [null,
          { ask: `Start with the ones: 8 + 6. What digit do you write in the ones place?`, parts: [{ label: "ones digit", ans: 4 }], hint: `8 + 6 = 14. That is 1 ten and 4 ones.` },
          { ask: `The tens column holds 7 and 5, plus the 1 you carried. What is the tens total?`, parts: [{ label: "tens total", ans: 13 }], hint: `Count the carry: 1 + 7 + 5.` },
          { ask: `The hundreds are 4 and 3, plus a carry. What is the total distance?`, choices: [
            { t: "834 miles", ok: true },
            { t: "734 miles", why: "That leaves out the carried hundred. 1 + 4 + 3 is 8 hundreds." },
            { t: "71,214 miles", why: "That writes each column total in full. A place holds one digit, so the extra ten moves left." }
          ], hint: `Add the carried 1 to 4 + 3.` },
          { ask: `A friend adds the same days and gets 724. What went wrong?`, choices: [
            { t: "Both carries were dropped", ok: true },
            { t: "The days were added in the wrong order", why: "Order does not change a sum. 356 + 478 is also 834." },
            { t: "The numbers were lined up on the left", why: "Both numbers have three digits, so the places already line up." }
          ], hint: `Compare each column of 724 with 834.` },
          { ask: `Round each day to the nearest hundred and add. About how many miles is that?`, parts: [{ label: "estimate", ans: 900 }], hint: `478 is close to 500. 356 is close to 400.` }],
        answer: `You drove <span class="m c5">834</span> miles over the two days.` },
      ideas: [
        { c: "c5", title: "Two amounts make one total", term: "sum", text: `Put $40 and $25 together and you have $65. The amounts are addends. The total is the sum.`,
          demo: { kind: "bar", parts: [40, 25], unit: "dollar", alt: "A bar of 40 dollars and a bar of 25 dollars sit end to end, then a brace shows the total, 65." }, try: { label: "Add 40 + 25", lab: "a:40,b:25,finish" } },
        { c: "c2", title: "Add like places together", term: "place value", text: `Ones go with ones, tens with tens, hundreds with hundreds. Line the numbers up on the right so the places match.`,
          demo: { kind: "columns", add: [325, 142], alt: "325 sits above 142. The ones, tens and hundreds are added one column at a time, and the sum 467 appears." }, try: { label: "Step through 325 + 142", lab: "a:325,b:142,play" } },
        { c: "c1", title: "Ten in a column moves left", term: "carry (regrouping)", text: `A column can hold one digit. When it reaches 10 or more, trade ten for 1 in the next place left.`,
          demo: { kind: "columns", add: [58, 36], alt: "58 sits above 36. The ones make 14, so 4 is written and a 1 is carried over the tens. The sum 94 appears." }, try: { label: "Add the ones of 58 + 36", lab: "a:58,b:36,step" } },
        { c: "c3", title: "Order does not matter", term: "commutative property", text: `Start at 25 and add 40, or start at 40 and add 25. You land on 65 either way.`,
          demo: { kind: "line", from: 0, to: 70, start: 25, jumps: [40], alt: "A number line starts at 25, makes one jump of 40, and lands on 65." }, try: { label: "Add 25 + 40", lab: "a:25,b:40,finish" } }
      ],
      timelineTitle: "The column method took centuries to reach the page",
      timelineLead: `People added long before they could write numbers in columns. The routine you step through in the model needed place value first.`,
      timeline: [
        { when: "799 to 1102 CE", what: `The Bakhshali manuscript, found in what is now Pakistan, writes numbers with place value and a dot for zero. Its age was long argued over; Oxford's 2024 tests put it in this range.` },
        { when: "About 825 CE", what: `Al-Khwarizmi writes a book on calculating with Hindu numerals. It spreads them across the Islamic world.` },
        { when: "1202", what: `Leonardo of Pisa (Fibonacci) finishes <i>Liber Abaci</i>. It shows merchants how to keep books with the new numerals.` },
        { when: "1489", what: `Johannes Widmann prints the + sign in Leipzig, in a book of arithmetic for merchants. It marks a surplus in the weight of goods.` }
      ],
      history: `<p><b>The problem.</b> People have always needed totals: how much grain is in storage, how much a trader is owed. For most of history they found them with tallies, pebbles, counting boards and the abacus, and wrote results in systems like Roman numerals, which are awkward to add on paper.</p>
<p><b>The solution.</b> In India, a place-value system with ten digits grew up over several centuries. An early written example is the Bakhshali manuscript, found in 1881 near Mardan in present-day Pakistan; its age is still debated, and Oxford's revised radiocarbon tests (2024) place it between 799 and 1102 CE. Around 825 CE the scholar al-Khwarizmi wrote a book on calculating with these "Hindu numerals", which helped spread them across the Islamic world. In 1202 Leonardo of Pisa (Fibonacci), who had learned the system as a boy in Bugia, North Africa, where his father ran a trading post, finished <i>Liber Abaci</i>, showing merchants how to use it for bookkeeping, converting measures, money-changing and interest.</p>
<p><b>What it changed.</b> With place value, adding large numbers became a short routine anyone could do with pen and paper: add a column, carry, move left. That is the method in the model. The + sign came later: it first appeared in print in Johannes Widmann's arithmetic for merchants (Leipzig, 1489), where it marked a surplus in business problems about weights.</p>`,
      sources: [
        { title: "Hindu–Arabic numeral system (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hindu%E2%80%93Arabic_numeral_system" },
        { title: "Bakhshali manuscript (Wikipedia)", url: "https://en.wikipedia.org/wiki/Bakhshali_manuscript" },
        { title: "Fibonacci (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fibonacci" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      matters: { title: "Why addition comes first", text: `<p>Addition is the math you use most, often <b>without noticing</b>. A receipt, a timesheet and a budget are all sums.</p><ul class="why-chips"><li><b>Subtracting</b> is checked by adding</li><li><b>Multiplying</b> is adding equal groups</li><li><b>Averages</b> start with a total</li></ul><p>When you can add and <b>check your total</b>, you catch a billing error or a short paycheck before it costs you.</p>` },
      stakes: { title: "Where addition goes wrong", lead: `Most wrong sums come from a lost carry or places that do not line up.`, items: [
        { role: "Dropped carry", text: `478 + 356 written as 724. Both carries vanish, and 110 miles go missing.` },
        { role: "Lined up on the left", text: `Adding 42 to 356 with the 4 under the 3 gives 776. Ones under ones gives 398.` },
        { role: "Timesheet", text: `One day left out of the week's hours, so the paycheck comes up short.` },
        { role: "Mixed units", text: `2 ft + 6 in written as 8. Change feet to inches first: 30 in.` }
      ], try: { label: "Watch 478 + 356 carry", lab: "a:478,b:356,play" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Cashier", figure: "$24.44", scene: `The register goes down. Items cost $12.49, $3.75 and $8.20. Add the dollars, <span class="m">12 + 3 + 8 = 23</span>, then the cents, <span class="m">49 + 75 + 20 = 144</span> cents, which is $1.44. Total: <span class="m">23 + 1.44 = 24.44</span> dollars.`, takeaway: "Adding parts separately, then combining, keeps mental totals manageable." },
        { role: "Payroll specialist", figure: "54 hours", scene: `An employee works 40 regular hours, 6 overtime hours and takes 8 hours of paid leave. Paid hours: <span class="m">40 + 6 + 8 = 54</span>.`, takeaway: "A missing addend is money missing from someone's paycheck." },
        { role: "Nurse", figure: "860 mL", scene: `During a shift a patient gets 500 mL of IV fluid and drinks 240 mL of water and 120 mL of juice. Fluid intake: <span class="m">500 + 240 + 120 = 860</span> mL.`, takeaway: "Care decisions rest on these totals, so they are double-checked." },
        { role: "Carpenter", figure: "206 inches", scene: `Trim for a doorway needs two sides of 84 inches and a top of 38 inches: <span class="m">84 + 84 + 38 = 206</span> inches, a little over 17 feet.`, takeaway: "Adding before you buy saves a second trip to the store." },
        { role: "Logistics coordinator", figure: "3,705 lb", scene: `Three pallets weigh 1,250 lb, 980 lb and 1,475 lb. Together: <span class="m">1,250 + 980 + 1,475 = 3,705</span> lb, safely under a 4,000 lb limit.`, takeaway: "A sum decides whether a load is legal to drive." },
        { role: "Bookkeeper", figure: "$3,445", scene: `Receipts for three days are $1,320, $985 and $1,140: <span class="m">1,320 + 985 + 1,140 = 3,445</span> dollars, which should match the bank deposit.`, takeaway: "When two totals disagree, something was missed." }
      ]
    },
    build: {
      lede: `Column addition is a routine: line up the places, add one column at a time from the right, and carry whenever a column reaches ten.`,
      task: { text: "Add so every column is right.", sub: `The same six moves work for any sum, from two prices to a year of receipts. Try each one in the model above as you go.`,
        figure: { sym: `<i>k</i>`, value: "0", cap: "columns worked", echo: "k" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows column addition: two numbers stacked so each place lines up. The <span class="c2">first addend</span> sits on top and the <span class="c3">second addend</span> under it. Each step works one column, writes a <span class="c5">sum</span> digit, and puts any <span class="c1">carry</span> over the next column left.</p>`,
      keyTry: [{ label: "Set a to 478", lab: "a:478" }, { label: "Set b to 356", lab: "b:356" }, { label: "Carry in 58 + 36", lab: "a:58,b:36,step" }, { label: "Finish 325 + 142", lab: "a:325,b:142,finish" }],
      objects: ["mile", "miles", "dollar", "dollars", "hour", "hours", "minute", "minutes", "min", "points", "cans", "bills"],
      goalsIntro: `Two of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Each column holds one place value: ones, tens, hundreds. Lining up on the right puts ones under ones, so you add like with like.`,
        `Start on the right because a carry only moves left. Doing the ones first means every carry is ready before you reach the column that needs it.`,
        `Ten ones make one ten. A column can hold only one digit, so the extra ten is traded up to the next place. That traded ten is the carry.`,
        `The carry is real value: a 1 carried into the tens column is worth 10. Leaving it out is the most common way to lose an amount.`,
        `There is no column to the left of the last one, so its whole total is written out: 9 + 8 in the hundreds column gives 17 hundreds, written 17.`,
        `An estimate catches big slips like a missed carry. Adding in the other order catches small ones, because the sum must come out the same.`
      ],
      stepTry: [{ label: "Set 478 + 356", lab: "a:478,b:356" }, null, { label: "Add the ones of 58 + 36", lab: "a:58,b:36,step" }, null, null, { label: "Swap to 142 + 325", lab: "a:142,b:325,finish" }],
      stepGoal: [null,
        null,
        null,
        { key: "result", eq: 425, text: `Set <i>a</i> to 267 and <i>b</i> to 158, then press <b>Play</b> and let it work every column. Watch for two carries.`, after: `Two amber carries, and each one was counted in the next column: <span class="m c5">425</span>.`, notYet: `Not yet. Type 267 and 158, then press <b>Play</b> until the sum shows.` },
        { key: "result", eq: 1000, text: `Make the last column carry too. Set 999 and 1, then press <b>Play</b>.`, after: `Every column carries. The last carry becomes a new leading digit: <span class="m c5">1,000</span>.`, notYet: `Not yet. Set <i>a</i> to 999 and <i>b</i> to 1, then press <b>Play</b> until the sum shows.` },
        null],
      matters: { title: "Why a Method Beats Adding in Your Head", text: `<p>Anyone can add two small numbers. Mistakes start when the numbers are long, there are many of them, or someone talks to you halfway through.</p><ul class="why-chips"><li><b>Long</b> numbers</li><li><b>Many</b> addends</li><li><b>Interruptions</b></li></ul><p>A method is <b>the same few moves every time</b>. One column at a time, you can stop, pick up where you left off, and check each carry.</p>` },
      bridge: `<p>The road trip is the pattern behind most everyday totals: amounts lined up by place, added column by column, then checked with an estimate. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Totaling groceries before checkout", check: { q: `Your cart holds items at $27, $15 and $8. What is the total?`, parts: [{ label: "dollars", ans: 50 }], hint: `Add two at a time: 27 + 15 first, then add 8.` }, figure: "$50",
          demo: { kind: "bar", parts: [27, 15, 8], unit: "dollar", alt: "Bars of 27, 15 and 8 dollars sit end to end, then a brace shows the total, 50." },
          lines: [{ math: `27 + 15 + 8`, note: "Three prices, added two at a time." }, { math: `27 + 15 = 42`, note: "Ones: 7 + 5 = 12, write 2, carry 1. Tens: 1 + 2 + 1 = 4." }, { math: `42 + 8 = 50`, note: "Ones: 2 + 8 = 10, write 0, carry 1. The total is $50." }],
          predict: [null, { ask: `First two prices: what is 27 + 15?`, parts: [{ label: "27 + 15", ans: 42 }], hint: `7 + 5 = 12. Write 2 and carry 1 ten.` }],
          try: { label: "Add 27 + 15", lab: "a:27,b:15,finish" }, link: `Each new price is one more addend. A carry in the ones works the same way it did on Saturday and Sunday in the road trip.` },
        { task: "Adding up hours worked in a week", check: { q: `You work 8, 7, 9, 6 and 8 hours Monday to Friday. How many hours is that?`, parts: [{ label: "hours", ans: 38 }], hint: `Keep a running total: 8, then 15, then add 9.` }, figure: "38 hours",
          demo: { kind: "line", from: 0, to: 40, start: 8, jumps: [7, 9, 6, 8], unit: "hour", alt: "A number line starts at 8 and jumps 7, 9, 6 and 8, landing on 38." },
          lines: [{ math: `8 + 7 = 15`, note: "Monday and Tuesday." }, { math: `15 + 9 = 24`, note: "Add Wednesday to the running total." }, { math: `24 + 6 = 30`, note: "Add Thursday." }, { math: `30 + 8 = 38`, note: "Add Friday: 38 hours in all." }],
          predict: [null, { ask: `The running total is 15. Add Wednesday's 9 hours. What is the new total?`, parts: [{ label: "after Wednesday", ans: 24 }], hint: `15 + 5 = 20, then 4 more.` }],
          link: `A running total adds one day at a time, like the model works one column at a time. A forgotten day is a forgotten addend.` },
        { task: "Planning a monthly budget", check: { q: `Rent is $1,150 and the car payment is $375. What do the two bills cost together?`, parts: [{ label: "dollars", ans: 1525 }], hint: `Line up the ones. The tens column makes 12, so carry 1.` }, figure: "$1,525",
          demo: { kind: "columns", add: [1150, 375], alt: "1,150 sits above 375. The ones make 5, the tens make 12 with a carry, the hundreds make 5 and the thousands 1, and the sum 1,525 appears." },
          lines: [{ math: `0 + 5 = 5`, note: "Ones: no carry." }, { math: `5 + 7 = 12 → write 2, carry 1`, note: "Tens: 12 tens is 1 hundred and 2 tens." }, { math: `1 + 1 + 3 = 5`, note: "Hundreds, with the carry." }, { math: `1 → 1,525`, note: "Thousands: 1. Together the bills cost $1,525." }],
          predict: [null, { ask: `The tens column holds 5 and 7. What is the tens total?`, parts: [{ label: "tens total", ans: 12 }], hint: `5 + 7. Then you will write 2 and carry 1.` }],
          try: { label: "Add 1,150 + 375", lab: "a:1150,b:375,play" }, link: `375 has fewer digits, so line it up on the right (step 1). Its 3 goes under the 1 hundred. The thousands column holds only the 1 of 1,150.` },
        { task: "Finding total travel time across a trip", check: { q: `A train leg takes 2 h 45 min and a bus leg takes 1 h 30 min. How long is the trip?`, parts: [{ label: "hours", ans: 4 }, { label: "minutes", ans: 15 }], hint: `Add the minutes first. 60 minutes carry as 1 hour.` }, figure: "4 h 15 min",
          demo: { kind: "bar", parts: [165, 90], unit: "minute", alt: "A bar of 165 minutes and a bar of 90 minutes sit end to end, then a brace shows the total, 255 minutes." },
          lines: [{ math: `45 + 30 = 75 min`, note: "Add the minutes first." }, { math: `75 min = 1 h 15 min`, note: "60 minutes make an hour. Carry the hour, keep 15 minutes." }, { math: `2 + 1 + 1 = 4 h`, note: "Add the hours with the carried hour." }, { math: `4 h 15 min`, note: "The trip takes 4 hours 15 minutes." }],
          predict: [null, { ask: `75 minutes is 1 hour and how many minutes?`, parts: [{ label: "minutes left", ans: 15 }], hint: `75 − 60.` }],
          link: `Minutes carry into hours at 60, the same way ones carry into tens at 10 (step 3).` },
        { task: "Keeping score in a game", check: { q: `Your score is 120. You add 45 points, then 38 points. What is your score now?`, parts: [{ label: "points", ans: 203 }], hint: `120 + 45 first. Then add 38 and watch for a carry.` }, figure: "203 points",
          demo: { kind: "line", from: 100, to: 220, start: 120, jumps: [45, 38], unit: "point", alt: "A number line starts at 120, jumps 45 to 165, then jumps 38 to land on 203." },
          lines: [{ math: `120 + 45 = 165`, note: "Add the first score. No carry." }, { math: `165 + 38 = 203`, note: "Ones: 5 + 8 = 13, carry 1. Tens: 1 + 6 + 3 = 10, carry 1. Hundreds: 1 + 1 = 2." }],
          predict: [null, { ask: `What is 165 + 38?`, parts: [{ label: "score", ans: 203 }], hint: `Two carries: the ones make 13 and the tens make 10.` }],
          try: { label: "Add 165 + 38", lab: "a:165,b:38,play" }, link: `165 + 38 carries twice, like the road trip. Check: 170 + 40 = 210, close to 203.` }
      ]
    },
    formal: {
      question: { text: "What is a sum, exactly?", sub: `You can add, and you can add so every column holds up. Here are the words a textbook uses for the same ideas, and how to write an addition problem out in full.`,
        figure: { sym: `<i>s</i>`, value: "?", cap: "the sum", echo: "result" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>, <i>b</i>`, term: "Addends", def: `The numbers combined in an addition. In <span class="m"><i>a</i> + <i>b</i> = <i>s</i></span>, both <i>a</i> and <i>b</i> are addends.`, was: "the two amounts, like 478 and 356 miles" },
        { c: "c5", sym: `<i>s</i>`, term: "Sum", def: `The result of an addition. For disjoint finite sets, <span class="m">|<i>A</i> ∪ <i>B</i>| = |<i>A</i>| + |<i>B</i>|</span>.`, was: "the total, how much altogether" },
        { c: "c2", sym: `<i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup>`, term: "Place value (expanded form)", def: `A digit <i>d</i><sub><i>i</i></sub> in place <i>i</i> (counting from 0 at the ones) stands for <span class="m"><i>d</i><sub><i>i</i></sub> · 10<sup><i>i</i></sup></span>. So <span class="m">478 = 4·10² + 7·10 + 8</span>.`, was: "ones under ones, tens under tens" },
        { c: "c1", sym: `<i>c</i><sub><i>i</i>+1</sub>`, term: "Carry (regrouping)", def: `When <span class="m"><i>a</i><sub><i>i</i></sub> + <i>b</i><sub><i>i</i></sub> + <i>c</i><sub><i>i</i></sub> ≥ 10</span>, the digit written is that total minus 10 and a carry of 1 passes to place <i>i</i> + 1, since <span class="m">10 · 10<sup><i>i</i></sup> = 10<sup><i>i</i>+1</sup></span>.`, was: "ten in a column moves left" },
        { c: "c3", sym: `<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>`, term: "Commutative property", def: `Changing the order of the addends does not change the sum.`, was: "order does not matter" },
        { c: "c3", sym: `(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>)`, term: "Associative property", def: `Changing the grouping of three or more addends does not change the sum.`, was: "adding prices two at a time, in any pairs" },
        { c: "c5", sym: `<i>a</i> + 0 = <i>a</i>`, term: "Additive identity", def: `0 is the identity element for addition: adding 0 to any number leaves it unchanged.`, was: "adding zero changes nothing" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>Word problems use the same two numbers in different ways. <b>The question's wording decides the operation</b>, and so the answer.</p><ul class="why-chips"><li>478 and 356 miles</li><li><b>“In all”</b>: 478 + 356 = 834</li><li><b>“How many more”</b>: 478 − 356 = 122</li></ul><p>Naming the addends and the sum before you compute lets you, and <b>anyone checking</b>, see that the right operation was used.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong sums lose a carry, misalign a place, or add quantities in different units.`,
      setupIntro: `<p>The road trip from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing an addition problem", items: [
        { say: `<b>Name the amounts.</b> Give each addend a letter and say what it stands for, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 478</span> miles (Saturday), &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 356</span> miles (Sunday)` },
        { say: `<b>Write the equation.</b> The unknown total gets its own letter, on its own side of the equals sign.`, math: `<span class="m"><span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> = <span class="c5"><i>s</i></span></span>` },
        { say: `<b>Many addends.</b> The associative and commutative properties let you group and order them freely. A long sum is written in sigma notation.`, math: `<span class="m"><i>s</i> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ⋯ + <i>a</i><sub><i>n</i></sub> = ∑<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>a</i><sub><i>k</i></sub></span>` },
        { say: `<b>Justify the algorithm.</b> Expanding each addend by place value shows why carrying works: 12 tens become 1 hundred and 2 tens, and 14 ones become 1 ten and 4 ones.`, math: `<span class="m">(4·10² + 7·10 + 8) + (3·10² + 5·10 + 6) = 7·10² + 12·10 + 14 = 8·10² + 3·10 + 4 = 834</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>s</i> = 478 + 356 = <span class="c5">834</span></span> &nbsp;→ You drove 834 miles.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: line up the places, add from the right, carry when a column reaches 10. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can add the formal way.",
      checks: [
        { hint: `Ones: 6 + 7 = 13. Write 3, carry 1 into the tens.`, parts: [{ label: "dollars", ans: 83 }] },
        { hint: `Line up 509 over 287. The ones make 16; the tens are 1 + 0 + 8.`, parts: [{ label: "miles", ans: 796 }] },
        { hint: `Three columns carry: the ones make 14, the tens 14 and the hundreds 11.`, parts: [{ label: "dollars", ans: 4144 }] },
        { hint: `Add two weeks first, 1,875 + 2,409, then add the third.`, parts: [{ label: "cans", ans: 4922 }] },
        { hint: `Write <span class="m"><i>t</i> = 500 + 240 + 120</span>, then add two at a time.`, parts: [{ label: "intake t (mL)", ans: 860 }] }
      ]
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
