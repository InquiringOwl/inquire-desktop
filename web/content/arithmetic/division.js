window.ARITH = window.ARITH || {};

ARITH["division"] = {
  title: "Division",
  short: "Share equally, or count how many fit.",
  grade: "Grades 3–5",
  hours: 12,
  voice: "plain",
  eyebrow: "Operations · equal sharing and the division algorithm",
  hero: `<span class="m"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span> · <span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span></span>`,
  lede: `Dividing a by b finds how many whole groups of b fit into a (the quotient q) and what is left over (the remainder r), which is always smaller than b.`,
  plain: `<p><b>Division</b> splits an amount into equal parts. Four people share a $96 dinner bill, and each pays $24, because <span class="m">96 ÷ 4 = 24</span>. The amount being split is the <b>dividend</b> (96), the number you divide by is the <b>divisor</b> (4), and the result is the <b>quotient</b> (24).</p>
<p>The same arithmetic answers two kinds of question. Sharing: split $96 among 4 people, and how much does each pay? Grouping: how many $4 coffees can $96 buy? Both answers are 24. Division also undoes multiplication: since <span class="m">4 × 24 = 96</span>, you know <span class="m">96 ÷ 4 = 24</span>.</p>
<p>Some amounts do not split evenly. Pack 50 bottles in cases of 12 and you fill 4 cases with 2 bottles left over: <span class="m">50 = 12 × 4 + 2</span>. The leftover 2 is the <b>remainder</b>, and it is always smaller than the divisor. If it were 12 or more, you could fill another case.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integers <span class="m c2"><i>a</i></span> and <span class="m c3"><i>b</i></span> with <span class="m"><i>b</i> &gt; 0</span>, there exist unique integers <span class="m c1"><i>q</i></span> (the <b>quotient</b>) and <span class="m c4"><i>r</i></span> (the <b>remainder</b>) such that</p>
<div class="display"><span class="c2"><i>a</i></span> = <span class="c3"><i>b</i></span><span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp;&nbsp; 0 ≤ <span class="c4"><i>r</i></span> &lt; <span class="c3"><i>b</i></span><br><span class="dim">dividend = divisor × quotient + remainder</span></div>
<p>When <span class="m"><i>r</i> = 0</span>, <span class="m"><i>b</i></span> <b>divides</b> <span class="m"><i>a</i></span>, written <span class="m"><i>b</i> | <i>a</i></span>, and <span class="m"><i>a</i> ÷ <i>b</i> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <i>q</i></span> is the unique number with <span class="m"><i>b</i> × <i>q</i> = <i>a</i></span>. <b>Division by zero is undefined</b>: <span class="m"><i>a</i> ÷ 0</span> would need a number <span class="m"><i>q</i></span> with <span class="m">0 × <i>q</i> = <i>a</i></span>, which is impossible for <span class="m"><i>a</i> ≠ 0</span> and not unique for <span class="m"><i>a</i> = 0</span>. Division is neither commutative nor associative.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Dividend", desc: "The amount being divided up." },
    { c: "c3", sym: `<i>b</i>`, name: "Divisor", desc: "The size of each group, or the number of equal shares. It cannot be 0." },
    { c: "c1", sym: `<i>q</i>`, name: "Quotient", desc: "How many whole groups fit, or how much each share gets." },
    { c: "c4", sym: `<i>r</i>`, name: "Remainder", desc: "What is left after taking out as many whole groups as possible. It is at least 0 and less than the divisor." }
  ],
  steps: { title: "How to do long division", items: [
    `Write the <span class="c2">dividend</span> under the bracket and the <span class="c3">divisor</span> to its left.`,
    `Divide. Start with the fewest front digits that the divisor fits into. Find the biggest digit whose product with the divisor still fits, and write it on top.`,
    `Multiply that digit by the divisor. Write the product underneath.`,
    `Subtract. The answer must be less than the divisor. If it is not, your digit was too small.`,
    `Bring down the next digit and repeat. When no digits are left, the top number is the <span class="c1">quotient</span> and the last difference is the <span class="c4">remainder</span>.`,
    `Check: divisor × quotient + remainder should give back the dividend.`
  ] },
  example: {
    prompt: `A farm collects 347 eggs and packs them in cartons of 12. How many full cartons can it fill, and how many eggs are left over?`,
    lines: [
      { math: `<span class="c2">347</span> ÷ <span class="c3">12</span>`, note: "12 does not fit into 3, so start with the first two digits, 34." },
      { math: `34 ÷ 12 → <span class="c1">2</span>, &nbsp;2 × 12 = 24, &nbsp;34 − 24 = 10`, note: "12 fits into 34 twice. Write 2 above the 4." },
      { math: `bring down 7 → 107`, note: "Put the next digit beside the 10." },
      { math: `107 ÷ 12 → <span class="c1">8</span>, &nbsp;8 × 12 = 96, &nbsp;107 − 96 = <span class="c4">11</span>`, note: "12 fits into 107 eight times (9 × 12 = 108 is too big)." },
      { math: `<span class="c1"><i>q</i> = 28</span>, &nbsp;<span class="c4"><i>r</i> = 11</span>`, note: "No digits left. 11 is less than 12, so it is a valid remainder." },
      { math: `<span class="c3">12</span> × <span class="c1">28</span> + <span class="c4">11</span> = 336 + 11 = <span class="c2">347</span>`, note: "Check with the division algorithm." }
    ],
    answer: `The farm fills <span class="m c1">28</span> full cartons with <span class="m c4">11</span> eggs left over.`
  },
  why: `<p>Division turns totals into rates and fair shares. Price per ounce, miles per gallon, cost per person and monthly payments are all quotients. Without division you cannot tell whether the large box is cheaper per ounce, or how far a tank of fuel will take you.</p>
<p>The remainder matters as much as the quotient. Moving 500 people in 12-seat vans takes 42 vans, because 41 vans leave 8 people behind. Whether to round up, round down or keep the leftover depends on the situation, and getting it wrong means a missing van or a wasted one.</p>
<p>Fractions, decimals, ratios and percents are all ways of writing a quotient, so division opens the rest of arithmetic. The division algorithm <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> is the starting point of number theory, clock arithmetic and the Euclidean algorithm, and long division of polynomials in algebra follows the same steps.</p>`,
  careers: [
    { role: "Nurse", use: "Divides the dose ordered by the concentration on hand, such as 250 mg ordered from a 125 mg per 5 mL liquid, to find the volume to give." },
    { role: "Event planner", use: "Divides the guest count by table size and rounds up to find how many tables to rent." },
    { role: "Truck driver", use: "Divides miles driven by gallons used to track fuel economy and plan fuel stops." },
    { role: "Grocery store manager", use: "Divides package price by weight to set the unit price shown on shelf labels." },
    { role: "Software developer", use: "Uses integer division and the remainder (modulo) operator to split data into pages or batches." },
    { role: "Pharmacist", use: "Divides the total quantity dispensed by the daily dose to find how many days a prescription will last." }
  ],
  life: [
    "Splitting a restaurant bill evenly among friends",
    "Finding the price per ounce to compare two package sizes",
    "Working out how many cars or buses a group needs",
    "Figuring monthly payments from a yearly cost",
    "Sharing snacks or supplies equally"
  ],
  fields: [
    { name: "Number theory", use: "The division algorithm is the basis for divisibility, primes, greatest common divisors and modular arithmetic." },
    { name: "Computer science", use: "Integer division and the modulo operation are used in hashing, indexing and cryptography." },
    { name: "Chemistry", use: "Concentration is amount of substance divided by volume, and molar mass calculations divide mass by moles." },
    { name: "Economics", use: "Per-capita figures and unit costs are found by dividing totals." }
  ],
  layers: {
    nudge: "Not yet. Check that the remainder is less than the divisor.",
    concept: {
      lede: `Division answers two everyday questions: how much does each share get, and how many groups fit? It is how you split a bill, a budget or a load.`,
      heading: "What is division?",
      question: { text: "How many fit?", sub: `Division answers two questions: how much does each share get, and how many groups fit? Watch the model above split a number into equal groups, then try it yourself.`,
        figure: { sym: `<i>q</i>`, value: "226", cap: "the quotient", echo: "quotient" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["egg", "eggs", "carton", "cartons", "chair", "chairs", "row", "rows", "bottle", "bottles", "case", "cases", "jump", "jumps", "loaves", "men", "guest", "guests", "table", "tables", "tablet", "tablets", "result", "results", "page", "pages", "people", "van", "vans", "mile", "miles", "gallon", "gallons", "ounce", "ounces"],
      walk: { title: "Divide it together: eggs into cartons",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A farm collects <span class="m c2">347</span> eggs. A carton holds <span class="m c3">12</span> eggs. How many cartons can the farm fill, and how many eggs are left over?`,
        demo: { kind: "line", from: 0, to: 360, start: 347, jumps: [-240, -96], unit: "egg", cap: "eggs left over", alt: "A dot starts at 347 on a number line. It jumps back 240, the eggs in 20 cartons, and lands on 107. Then it jumps back 96, the eggs in 8 more cartons, and lands on 11, the eggs left over." },
        lines: [
          { math: `<span class="c2">347</span> eggs, <span class="c3">12</span> in each carton`, note: `Here is the pile. The dot on the line stands at 347 eggs.`, frame: 0 },
          { math: `20 cartons: 20 × <span class="c3">12</span> = 240`, note: `Packing one carton at a time is slow. Pack 20 at once. Ten cartons hold 120 eggs, so 20 cartons hold 240.`, frame: 0 },
          { math: `347 − 240 = 107`, note: `Take those eggs away. The dot jumps back 240 and lands on 107 eggs still to pack.`, frame: 1 },
          { math: `8 cartons: 8 × <span class="c3">12</span> = 96`, note: `How many 12s fit in 107? Try 9: 9 × 12 = 108, one egg too many. So 8 cartons, using 96 eggs.`, frame: 1 },
          { math: `107 − 96 = <span class="c4">11</span>`, note: `The dot jumps back 96 and lands on 11. Those 11 eggs are the remainder. 11 is less than 12, so no carton can be filled.`, frame: 2 },
          { math: `27 cartons, 23 left?`, note: `A count can stop too soon. 27 cartons use 324 eggs and leave 23. But 23 eggs fill one more carton. The remainder must be less than the carton size.`, frame: 2 },
          { math: `20 + 8 = <span class="c1">28</span> cartons, <span class="c4">11</span> left: 12 × 28 + 11 = 347`, note: `Add the two jumps: 28 full cartons. Multiply back to check. You get the 347 eggs you started with.`, frame: 3 }
        ],
        predict: [null,
          { ask: `Ten cartons hold 120 eggs. How many eggs fill 20 cartons?`, parts: [{ label: "eggs in 20 cartons", ans: 240 }], hint: `20 cartons is two sets of 10 cartons.` },
          { ask: `20 cartons use 240 eggs. How many of the 347 eggs are still to pack?`, choices: [
            { t: "107", ok: true },
            { t: "327", why: "That takes away 20 eggs. The 20 cartons hold 240 eggs." },
            { t: "127", why: "Check it: 240 + 127 = 367, not 347." }
          ], hint: `Take 240 away from 347.` },
          { ask: `How many more full cartons fit in 107 eggs?`, parts: [{ label: "more cartons", ans: 8 }], hint: `Guess and check. Is 9 × 12 more or less than 107?` },
          { ask: `8 more cartons use 96 eggs. Could the eggs left fill one more carton?`, choices: [
            { t: "No, 11 eggs are left, fewer than 12", ok: true },
            { t: "Yes, there are still eggs left", why: "A full carton needs 12 eggs. 107 − 96 leaves 11, one short." },
            { t: "No eggs are left at all", why: "107 − 96 is 11, not 0. Not every pile packs evenly." }
          ], hint: `Find 107 − 96, then compare it with 12.` },
          { ask: `A friend packs 27 cartons and says 23 eggs are left. What went wrong?`, choices: [
            { t: "23 eggs fill one more carton", ok: true },
            { t: "27 × 12 is not 324", why: "It is: 27 × 12 = 324, and 347 − 324 = 23. The math is right. The stop is wrong." },
            { t: "The leftover should be 0", why: "Some eggs can be left over, as long as there are fewer than 12." }
          ], hint: `Compare the 23 left with the 12 in a carton.` },
          { ask: `Add the cartons from both jumps. How many full cartons in all?`, parts: [{ label: "full cartons", ans: 28 }], hint: `The first jump packed 20 cartons. The second packed 8.` }],
        answer: `The farm fills <span class="m c1">28</span> cartons, with <span class="m c4">11</span> eggs left over.` },
      ideas: [
        { c: "c1", title: "Equal shares for everyone", term: "quotient", text: `Set 24 chairs out in 4 equal rows. Each row gets 6 chairs. The amount in each share is the quotient.`,
          demo: { kind: "array", rows: 4, cols: 6, unit: "chair", cap: "chairs in 4 rows of 6", alt: "Four rows of 6 chairs light up one row at a time, 6, 12, 18, 24: 24 chairs shared into 4 equal rows." }, try: { label: "Divide 24 by 4", lab: "dividend:24,divisor:4,play" } },
        { c: "c3", title: "Groups of one size", term: "divisor", text: `How many 5s fit in 20? Take away 5 again and again. It takes 4 jumps to reach 0. The group size, 5, is the divisor.`,
          demo: { kind: "line", from: 0, to: 20, start: 20, jumps: [-5, -5, -5, -5], cap: "left over", alt: "A dot starts at 20 and jumps back 5 four times, landing on 0: four groups of 5 fit in 20." }, try: { label: "Divide 20 by 5", lab: "dividend:20,divisor:5,play" } },
        { c: "c4", title: "What does not fit", term: "remainder", text: `Pack 50 bottles in cases of 12. Four cases use 48. The 2 bottles left over are the remainder. It is always less than 12.`,
          demo: { kind: "line", from: 0, to: 50, start: 50, jumps: [-12, -12, -12, -12], cap: "bottles left over", alt: "A dot starts at 50 and jumps back 12 four times, one jump per full case, landing on 2 bottles left over." }, try: { label: "Divide 50 by 12", lab: "dividend:50,divisor:12,play" } }
      ],
      timelineTitle: "People have shared things fairly for thousands of years",
      timelineLead: `Long before calculators, scribes and merchants shared bread, goods and costs by hand. The divide, multiply, subtract cycle in the model is the routine they worked out.`,
      timeline: [
        { when: "About 1550 BCE", what: `The scribe Ahmes copies the Rhind papyrus in Egypt. Its first problems share 1, 2, 6, 7, 8 and 9 loaves among 10 men: equal shares, like the rows of chairs.` },
        { when: "1100s", what: `al-Samaw'al al-Maghribi, born in Baghdad, does calculations that amount to long division, without writing the method out as a rule.` },
        { when: "1491", what: `Filippo Calandri's <i>Aritmetica</i>, printed in Florence, shows long division in its modern form, called <i>a danda</i>. It is the divide, multiply, subtract, bring down cycle in the model.` },
        { when: "1659", what: `Johann Rahn first uses the sign ÷ for division, in his <i>Teutsche Algebra</i>.` }
      ],
      history: `<p><b>The problem.</b> Sharing is as old as organized work: rations for laborers, bread for a crew, land and goods among heirs. The Rhind papyrus, copied by the Egyptian scribe Ahmes around 1550 BCE, opens with problems that share 1, 2, 6, 7, 8 and 9 loaves among 10 men. Without place-value numerals, dividing large amounts was slow and hard to check.</p>
<p><b>The solution.</b> Place-value numerals made a written routine possible. In the 12th century al-Samaw'al al-Maghribi carried out calculations that amount to long division, without setting the method out as a rule. In Europe several layouts were in use, including the "galley" method. The earliest printed long division in its modern layout, called <i>a danda</i> in Italy, appears in Filippo Calandri's <i>Aritmetica</i> (Florence, 1491). The exact form taught today is credited to Henry Briggs, around 1600, and in 1659 Johann Rahn first used the ÷ sign for division in his <i>Teutsche Algebra</i>.</p>
<p><b>What it changed.</b> With a written routine, a trader could split a cost among partners or price goods per unit with pen and paper, and anyone could check the answer by multiplying back. The cycle in the model (divide, multiply, subtract, bring down) is that routine. Unit prices on shelf labels, fuel economy and cost per person all come from it.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Long division (Wikipedia)", url: "https://en.wikipedia.org/wiki/Long_division" },
        { title: "Calandri, Aritmetica, 1491 (Antiquariat Lynge)", url: "https://lynge.com/product/57782" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      matters: { title: "Why division matters", text: `<p>Division turns a total into <b>a fair share</b> or <b>a rate</b>. You use it every time you split, price or plan.</p><ul class="why-chips"><li><b>Cost</b> per person</li><li><b>Price</b> per ounce</li><li><b>Miles</b> per gallon</li></ul><p>It also opens the rest of arithmetic. <b>Fractions, decimals and percents</b> are all ways to write a division.</p>` },
      stakes: { title: "Where division goes wrong", lead: `Most division slips happen at the end, with what is left after the last full group.`, items: [
        { role: "Stopping too soon", text: `347 eggs packed as 27 cartons with 23 left. 23 eggs fill another carton. The remainder must be less than the divisor.` },
        { role: "Vans for a trip", text: `500 people in 12-seat vans need 42 vans, not 41. 41 vans leave 8 people at the curb.` },
        { role: "A skipped zero", text: `1,236 ÷ 12 is 103, not 13. When 12 does not fit, that place in the answer still gets a 0.` },
        { role: "Dividing by zero", text: `No number of empty groups adds up to 5. Division by 0 has no answer.` }
      ], try: { label: "Set up 500 ÷ 12", lab: "dividend:500,divisor:12" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "10 mL", scene: `The order is 250 mg, and the liquid on hand has 125 mg in each 5 mL. <span class="m">250 ÷ 125 = 2</span> doses of 5 mL, so give <span class="m">2 × 5 = 10</span> mL.`, takeaway: "A division error in a dose is a medication error." },
        { role: "Event planner", figure: "19 tables", try: { label: "Divide 150 by 8", lab: "dividend:150,divisor:8,play" }, scene: `150 guests sit at tables of 8. <span class="m">150 = 8 × 18 + 6</span>, so 18 tables fill up and 6 guests remain: rent <b>19</b> tables.`, takeaway: "The remainder decides the order: 6 guests still need somewhere to sit." },
        { role: "Truck driver", figure: "6.2 miles per gallon", scene: `A run of 1,860 miles used 300 gallons of diesel: <span class="m">1,860 ÷ 300 = 6.2</span> miles per gallon.`, takeaway: "Tracking miles per gallon shows when fuel use rises and where to plan stops." },
        { role: "Grocery store manager", figure: "18¢ an ounce", scene: `A 24-ounce box costs $4.80 and a 32-ounce box costs $5.76. Unit prices: <span class="m">4.80 ÷ 24 = 0.20</span> and <span class="m">5.76 ÷ 32 = 0.18</span> dollars per ounce.`, takeaway: "Unit prices let shoppers compare sizes fairly; here the larger box is cheaper per ounce." },
        { role: "Software developer", figure: "42 pages", scene: `1,037 search results are shown 25 to a page. <span class="m">1,037 = 25 × 41 + 12</span>, so there are 42 pages, the last with 12 results.`, takeaway: "Integer division and the remainder decide how many pages a list needs." },
        { role: "Pharmacist", figure: "60 days", try: { label: "Divide 180 by 3", lab: "dividend:180,divisor:3,play" }, scene: `A bottle holds 180 tablets and the dose is 3 a day: <span class="m">180 ÷ 3 = 60</span> days.`, takeaway: "The quotient tells the patient when to request a refill." }
      ]
    },
    build: {
      lede: `Long division repeats one cycle (divide, multiply, subtract, bring down) until no digits are left, then checks the answer by multiplying back.`,
      task: { text: "Divide until what is left is less than the divisor.", sub: `The same cycle works for 347 eggs in cartons of 12 and for a $1,140 bill split into 12 payments. Try each step in the model above as you go.`,
        figure: { sym: `<i>r</i>`, value: "1", cap: "the remainder, in the model", echo: "remainder" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model works one long division at a time. Type a <span class="c2">dividend</span> and a <span class="c3">divisor</span>, then press Step or Play. Each step shows one move: divide, multiply, subtract or bring down. The <span class="c1">quotient</span> grows on top, one digit at a time. The last difference is the <span class="c4">remainder</span>, always less than the <span class="c3">divisor</span>.</p>`,
      keyTry: [{ label: "Set the dividend to 347", lab: "dividend:347,divisor:12" }, { label: "Make the divisor 9", lab: "dividend:347,divisor:9" }, { label: "Play 347 ÷ 12", lab: "dividend:347,divisor:12,play" }, { label: "Try 348 ÷ 12", lab: "dividend:348,divisor:12,play" }],
      objects: ["egg", "eggs", "carton", "cartons", "people", "van", "vans", "seat", "seats", "friend", "friends", "dollar", "dollars", "ounce", "ounces", "cent", "cents", "bar", "bars", "month", "months", "payment", "payments", "share", "shares", "coworkers"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `The layout keeps each digit in its place-value column. So each digit you write on top lands in the right place of the quotient.`,
        `Working from the left divides the biggest place first. In 347 ÷ 12, the 34 means 34 tens, so the 2 on top means 20 cartons. The biggest digit that fits packs as many as it can.`,
        `The product is what you used up: <span class="m">2 × 12 = 24</span> tens, or 240 eggs in 20 cartons. It is the first jump on the egg walk's number line.`,
        `Subtracting shows what is still unpacked. If that is still 12 or more, another carton fits, so the digit was too small.`,
        `The leftover 10 tens become 100 ones and join the 7 to make 107. The same cycle then runs on a smaller problem. When every place is done, what is left cannot make another group.`,
        `The check runs the division backward with <span class="m"><i>a</i> = <i>b</i> × <i>q</i> + <i>r</i></span>. If it does not give back the dividend, there is a slip somewhere.`
      ],
      stepTry: [{ label: "Set up 347 ÷ 12", lab: "dividend:347,divisor:12" }, { label: "Try 1,357 ÷ 6", lab: "dividend:1357,divisor:6" }, { label: "Step to the multiply", lab: "dividend:347,divisor:12,step" }, null, null, null],
      stepGoal: [null, null, null,
        { key: "result", eq: 41, text: `500 people ride in vans that seat 12. Type 500 ÷ 12 into the model and step to the end.`, after: `41 vans fill up and 8 people are left. 8 is less than 12, so the subtraction is done. Those 8 people still need a seat, so the trip needs 42 vans.`, notYet: `Not yet. Set the dividend to 500 and the divisor to 12, then press <b>Step</b> until the model finishes.` },
        { key: "result", eq: 103, text: `Divide 1,236 by 12 in the model and step to the end. Watch the place where 12 does not fit.`, after: `12 does not fit into 3, so that place gets a 0: <span class="m">1,236 ÷ 12 = 103</span>, not 13.`, notYet: `Not yet. Set 1,236 ÷ 12, then press <b>Step</b> until no digits are left.` },
        { key: "dividend", eq: 68, text: `A division came out 9 R 5 with a divisor of 7. Find the dividend it started from and type it into the model.`, after: `<span class="m">7 × 9 + 5 = 68</span>. With a divisor of 7, the model shows 68 ÷ 7 = 9 R 5.`, notYet: `Not yet. Multiply 7 × 9, then add the remainder 5.` }],
      matters: { title: "Why a Method Matters", text: `<p>Small divisions you can do in your head. Big ones need <b>a routine</b> you can trust.</p><ul class="why-chips"><li><b>Big</b> dividends</li><li><b>Two-digit</b> divisors</li><li><b>Zeros</b> in the answer</li></ul><p>Long division breaks one hard problem into <b>small steps of the same kind</b>. Each step is quick to check, and the last check catches any slip.</p>` },
      bridge: `<p>The egg cartons on the Concept tab followed a pattern most divisions share: a total, a group size, a count of full groups and a leftover. What you do with the leftover depends on the situation. Here is the same pattern in daily life.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Splitting a restaurant bill evenly", check: { q: `Eight friends split a $96 dinner bill evenly. How much does each person pay?`, parts: [{ label: "dollars each", ans: 12 }], hint: `Try $10 each first. How much of the bill is still unpaid?` }, figure: "8 equal shares",
          demo: { kind: "array", rows: 8, cols: 12, unit: "dollar", cap: "dollars in 8 shares", alt: "Eight rows of 12 dots light up one row at a time, 12, 24, 36 up to 96: eight equal shares of the $96 bill." },
          lines: [{ math: `96 ÷ 8`, note: "Eight people, one bill." }, { math: `8 × 10 = 80, 96 − 80 = 16`, note: "Give everyone $10 first. $16 is still unpaid." }, { math: `16 ÷ 8 = 2`, note: "Share the $16: $2 more each." }, { math: `10 + 2 = 12, 8 × 12 = 96`, note: "Each person pays $12. Multiply back: the shares cover the bill." }],
          predict: [null, { ask: `Everyone pays $10 first. How much of the $96 is still unpaid?`, parts: [{ label: "dollars unpaid", ans: 16 }], hint: `8 people × $10 = $80.` }],
          try: { label: "Divide 96 by 8", lab: "dividend:96,divisor:8,play" },
          link: `This is the egg walk's move: take out a big round chunk first, then share what is left. The check is step 6.` },
        { task: "Finding the price per ounce", check: { q: `A 32-ounce box of cereal costs $5.76, which is 576 cents. What is the price per ounce, in cents?`, parts: [{ label: "cents per ounce", ans: 18 }], hint: `Try 10 cents an ounce first: 32 × 10 = 320 cents. How much is left?` }, figure: "per ounce",
          demo: { kind: "line", from: 0, to: 600, start: 576, jumps: [-320, -256], unit: "cent", cap: "cents left", alt: "A dot starts at 576 cents. It jumps back 320, which is 10 cents for each of 32 ounces, then 256, which is 8 cents more for each ounce, and lands on 0." },
          lines: [{ math: `576 ÷ 32`, note: "Spread the price over the 32 ounces. Work in cents." }, { math: `32 × 10 = 320, 576 − 320 = 256`, note: "10 cents an ounce covers 320 cents. 256 cents are left." }, { math: `32 × 8 = 256`, note: "8 more cents an ounce covers the rest. Nothing is left over." }, { math: `10 + 8 = 18 cents per ounce`, note: "The 24-ounce box at $4.80 costs 20 cents an ounce. The bigger box is cheaper per ounce." }],
          predict: [null, null, { ask: `256 cents are left to spread over 32 ounces. How many more cents per ounce?`, parts: [{ label: "more cents", ans: 8 }], hint: `Try 8: is 8 × 32 equal to 256?` }],
          try: { label: "Divide 576 by 32", lab: "dividend:576,divisor:32,play" },
          link: `Two jumps on the line, like the egg walk: a round chunk of 10, then the rest. Here the dot lands on 0, so the remainder is 0.` },
        { task: "Working out how many vans a group needs", check: { q: `A team of 75 people rides in vans that seat 12. How many vans do they need?`, parts: [{ label: "vans", ans: 7 }], hint: `75 = 12 × 6 + 3. Do the 3 people left need a van?` }, figure: "12 a van",
          demo: { kind: "line", from: 0, to: 80, start: 75, jumps: [-12, -12, -12, -12, -12, -12], cap: "people left", alt: "A dot starts at 75 and jumps back 12 six times, one jump per full van, landing on 3 people still without a seat." },
          lines: [{ math: `75 ÷ 12`, note: "75 people, 12 seats in each van." }, { math: `12 × 6 = 72, 75 − 72 = 3`, note: "Six vans fill up. 3 people are left." }, { math: `6 + 1 = 7 vans`, note: "The 3 people still need a ride, so round up: one more van." }],
          predict: [null, { ask: `Six vans fill up. How many people are still waiting?`, parts: [{ label: "people waiting", ans: 3 }], hint: `Six vans carry 6 × 12 = 72 people.` }],
          link: `This is the trap from the move in step 4: when everyone needs a seat, any remainder means one more van.` },
        { task: "Turning a yearly cost into monthly payments", check: { q: `Car insurance costs $1,140 a year. What is the cost per month?`, parts: [{ label: "dollars a month", ans: 95 }], hint: `Divide by 12. 114 ÷ 12 is 9 with 6 left; bring down the 0.` }, figure: "12 months",
          demo: { kind: "line", from: 0, to: 1200, start: 1140, jumps: [-1080, -60], unit: "dollar", cap: "dollars left", alt: "A dot starts at 1,140 dollars. It jumps back 1,080, which is 90 dollars for each of 12 months, then 60, which is 5 dollars more for each month, and lands on 0." },
          lines: [{ math: `1,140 ÷ 12`, note: "Twelve monthly payments make the yearly cost." }, { math: `114 ÷ 12 → 9, 9 × 12 = 108, 114 − 108 = 6`, note: "12 does not fit into 11, so start with 114. It fits 9 times, with 6 left." }, { math: `bring down 0 → 60, 60 ÷ 12 = 5`, note: "60 is exactly five 12s. Nothing is left." }, { math: `12 × 95 = 1,140`, note: "$95 a month. Multiply back to check." }],
          predict: [null, null, { ask: `Bring down the 0 to make 60. How many 12s fit in 60?`, parts: [{ label: "12s in 60", ans: 5 }], hint: `Count by 12s: 12, 24, 36, 48, 60.` }],
          try: { label: "Divide 1,140 by 12", lab: "dividend:1140,divisor:12,play" },
          link: `Steps 2 to 6 on a real bill: divide, multiply, subtract, bring down, then check.` },
        { task: "Sharing supplies equally", check: { q: `Four coworkers share a box of 30 snack bars equally. How many does each get, and how many are left?`, parts: [{ label: "each gets", ans: 7 }, { label: "left over", ans: 2 }], hint: `4 × 7 = 28. How many of the 30 are left?` }, figure: "4 shares",
          demo: { kind: "array", rows: 4, cols: 7, unit: "bar", cap: "bars shared out", alt: "Four rows of 7 bars light up, 7, 14, 21, 28: four equal shares that use 28 of the 30 bars." },
          lines: [{ math: `30 ÷ 4`, note: "30 bars, 4 people." }, { math: `4 × 7 = 28`, note: "7 bars each uses 28 bars. 8 each would need 32, too many." }, { math: `30 − 28 = 2`, note: "2 bars are left. 2 is less than 4, so they cannot go around." }, { math: `30 = 4 × 7 + 2`, note: "7 each, 2 left over. Split them, save them or set them out for anyone." }],
          predict: [null, null, { ask: `Each person gets 7, which uses 28 bars. How many bars are left?`, parts: [{ label: "bars left", ans: 2 }], hint: `Take 28 away from 30.` }],
          try: { label: "Divide 30 by 4", lab: "dividend:30,divisor:4,play" },
          link: `The quotient is each share and the remainder is what is left, like the 28 cartons and 11 eggs in the egg walk.` }
      ]
    },
    formal: {
      question: { text: "What does a ÷ b mean, exactly?", sub: `You can split a total and pack it into groups. Here are the words a textbook uses for the same ideas, and how to write a division problem out in full.`,
        figure: { sym: `<i>q</i>`, value: "226", cap: "the quotient", echo: "quotient" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>`, term: "Dividend", def: `The number being divided: <i>a</i> in <span class="m"><i>a</i> ÷ <i>b</i></span> and in <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>.`, was: "the pile of eggs, the amount you split" },
        { c: "c3", sym: `<i>b</i>`, term: "Divisor", def: `The number you divide by. In the division algorithm it is a positive integer; a divisor of 0 is never allowed.`, was: "the carton size, the size of each group" },
        { c: "c1", sym: `<i>q</i>`, term: "Quotient", def: `The result of <span class="m"><i>a</i> ÷ <i>b</i></span>. In the division algorithm, the integer <span class="m"><i>q</i> = ⌊<i>a</i>/<i>b</i>⌋</span>: the number of whole copies of <i>b</i> in <i>a</i>.`, was: "the number of full cartons" },
        { c: "c4", sym: `<i>r</i>`, term: "Remainder", def: `The integer <span class="m"><i>r</i> = <i>a</i> − <i>bq</i></span>, with <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>: what is left after removing <i>bq</i> from <i>a</i>.`, was: "the eggs left over" },
        { c: "c1", sym: `<i>a</i> = <i>bq</i> + <i>r</i>`, term: "Division algorithm", def: `For integers <i>a</i> and <i>b</i> with <span class="m"><i>b</i> &gt; 0</span>, there are unique integers <i>q</i> and <i>r</i> with <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span> and <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>. Despite the name, it is a theorem.`, was: "multiply back to check" },
        { c: "c3", sym: `<i>b</i> | <i>a</i>`, term: "Divides", def: `<i>b</i> divides <i>a</i> when <span class="m"><i>a</i> = <i>bq</i></span> for some integer <i>q</i>, that is, when the remainder is 0. Then <i>a</i> is a multiple of <i>b</i>.`, was: "a division that comes out even" },
        { c: "c3", sym: `<i>a</i> ÷ 0`, term: "Undefined", def: `Division by 0 has no value: no <i>q</i> satisfies <span class="m">0 × <i>q</i> = <i>a</i></span> when <span class="m"><i>a</i> ≠ 0</span>, and every <i>q</i> does when <span class="m"><i>a</i> = 0</span>.`, was: "no number of empty groups makes 5" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Divide 347 by 12” and “divide 12 into 347” name the same problem. “Divide 12 by 347” does not. <b>Swapping the dividend and the divisor changes the answer</b>, because division is not commutative.</p><ul class="why-chips"><li><span class="m">347 ÷ 12 = 28 R 11</span></li><li><span class="m">12 ÷ 347 = 0 R 12</span></li></ul><p>The condition <b>0 ≤ <i>r</i> &lt; <i>b</i></b> matters as much. Without it, <span class="m">347 = 12 · 27 + 23</span> would also count, and the answer would not be unique.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers break the remainder condition, drop a place in the quotient, or ignore what the situation needs.`,
      setupIntro: `<p>The egg cartons from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a division problem", items: [
        { say: `<b>Name the amounts.</b> Give the dividend and divisor letters and say what each stands for, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 347</span> eggs, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 12</span> eggs per carton` },
        { say: `<b>Write the equation.</b> The unknowns are the number of full cartons and the eggs left over.`, math: `<span class="m">347 = 12<span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp;0 ≤ <span class="c4"><i>r</i></span> &lt; 12</span>` },
        { say: `<b>Justify the algorithm.</b> Long division finds <i>q</i> one place value at a time: first the tens of cartons, then the ones.`, math: `<span class="m">347 = 12 · 20 + 107, &nbsp;107 = 12 · 8 + 11, &nbsp;so 347 = 12 · 28 + 11</span>` },
        { say: `<b>Check the remainder condition.</b> Because <i>r</i> is between 0 and <i>b</i> − 1, the pair (<i>q</i>, <i>r</i>) is the unique one.`, math: `<span class="m">0 ≤ 11 &lt; 12</span>` },
        { say: `<b>Answer in context.</b> State both results as a sentence with units.`, math: `<span class="m"><span class="c1"><i>q</i></span> = 28, <span class="c4"><i>r</i></span> = 11</span> &nbsp;→ 28 full cartons and 11 eggs left over.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name <i>a</i> and <i>b</i>, find <i>q</i> and <i>r</i> with <span class="m">0 ≤ <i>r</i> &lt; <i>b</i></span>, and answer in the situation's units. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can divide the formal way.",
      checks: [
        { hint: `Which number times 7 gives 56?`, parts: [{ label: "inches", ans: 8 }] },
        { hint: `Find the largest multiple of 4 that fits in 97, then subtract.`, parts: [{ label: "full boxes", ans: 24 }, { label: "pencils left", ans: 1 }] },
        { hint: `Divide by 12. 100 ÷ 12 is 8 with 4 left; bring down the 8.`, parts: [{ label: "dollars a month", ans: 84 }] },
        { hint: `500 = 12 × 41 + 8. Do the 8 people left need a van?`, parts: [{ label: "vans", ans: 42 }] },
        { hint: `Write <span class="m">12<i>n</i> = 156</span>, then divide both sides by 12.`, parts: [{ label: "rows n", ans: 13 }] }
      ]
    }
  },
  prereqWhy: {
    "multiplication": "Each step of long division asks which multiple of the divisor fits, so multiplication facts must be quick and reliable.",
    "subtraction": "Long division subtracts each multiple of the divisor from part of the dividend to find what remains."
  },
  unlocksWhy: {
    "order-ops": "Order of operations treats multiplication and division as one level, done left to right, so you must be able to divide within expressions.",
    "factors": "A factor of n is a number that divides n with remainder 0, so testing factors is testing divisions.",
    "modular": "Clock arithmetic works entirely with the remainder r from the division algorithm.",
    "fractions": "A fraction a/b is the quotient a ÷ b, and simplifying fractions uses exact division.",
    "averages": "The mean is a total divided by the number of values."
  },
  beyond: [
    { field: "Number theory", why: "The division algorithm leads to the Euclidean algorithm, congruences and the Fundamental Theorem of Arithmetic." },
    { field: "Algebra I and II", why: "Polynomial long division and synthetic division follow the same divide, multiply, subtract, bring down pattern." },
    { field: "Abstract algebra", why: "Rings with a division algorithm, called Euclidean domains, generalize this property of the integers." }
  ],
  mistakes: [
    { wrong: `Leaving a remainder larger than the divisor, like <span class="m">347 ÷ 12 = 27</span> R 23.`, fix: `If the remainder is 12 or more, another 12 fits. Increase the quotient: <span class="m">28</span> R <span class="m">11</span>.` },
    { wrong: `Skipping a zero in the quotient: <span class="m">1,236 ÷ 12 = 13</span>.`, fix: `After 12 ÷ 12 = 1, bring down 3. 12 does not fit into 3, so write 0 above it before bringing down 6. The answer is <span class="m">103</span>.` },
    { wrong: `Saying <span class="m">5 ÷ 0 = 0</span> or <span class="m">5 ÷ 0 = 5</span>.`, fix: `Division by zero is undefined. No number times 0 gives 5.` },
    { wrong: `Rounding down when every item needs a place: 500 people, vans of 12, so 41 vans.`, fix: `41 vans hold 492 people and leave 8 behind. Context says round the quotient up: 42 vans.` },
    { wrong: `Writing the remainder as decimal digits: 28 R 11 written as 28.11.`, fix: `A remainder of 11 means 11/12 of a carton, about 0.92. As a decimal, <span class="m">347 ÷ 12 ≈ 28.92</span>.` }
  ],
  practice: [
    { ctx: "Carpentry", q: `A 56-inch board is cut into 7 equal pieces. How long is each piece? Find <span class="m">56 ÷ 7</span>.`, a: `<span class="m">7 × 8 = 56</span>, so <b>8 inches</b>.` },
    { ctx: "Packing", q: `97 pencils are packed in boxes of 4. How many full boxes are there, and how many pencils are left? Find <span class="m">97 ÷ 4</span>.`, a: `<span class="m">4 × 24 = 96</span>, <span class="m">97 − 96 = 1</span>. <b>24 R 1</b>: 24 full boxes and 1 pencil left. Check: 4 × 24 + 1 = 97.` },
    { ctx: "Budget", q: `A gym membership costs $1,008 a year. What is the cost per month? Find <span class="m">1,008 ÷ 12</span>.`, a: `100 ÷ 12 → 8, 8 × 12 = 96, 100 − 96 = 4; bring down 8 → 48; 48 ÷ 12 = 4. <b>$84</b>. Check: 12 × 84 = 1,008.` },
    { ctx: "Travel", q: `500 people are going on a trip. Each van holds 12 people. How many vans are needed?`, a: `<span class="m">500 = 12 × 41 + 8</span>. 41 vans leave 8 people, so <b>42 vans</b> are needed.` },
    { ctx: "Events", q: `Write an equation with a letter for the unknown, then solve: 156 chairs are set out in rows of 12. How many rows <i>n</i> are there?`, a: `<span class="m">12<i>n</i> = 156</span>, so <span class="m"><i>n</i> = 156 ÷ 12</span>. 15 ÷ 12 → 1, 15 − 12 = 3; bring down 6 → 36; 36 ÷ 12 = 3. <b>13 rows</b>. Check: 12 × 13 = 156.` }
  ],
  origin: `Book VII of Euclid's <i>Elements</i> (about 300 BCE) uses repeated subtraction of the smaller number from the larger, the idea behind the division algorithm. The ÷ symbol (obelus) was first used for division by Johann Rahn in his <i>Teutsche Algebra</i> (1659).`
};
