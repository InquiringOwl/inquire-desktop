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
    `Write the dividend under the division bracket and the divisor to its left.`,
    `Divide: take the fewest leading digits of the dividend that are at least the divisor, and find the largest digit whose product with the divisor fits. Write it above.`,
    `Multiply that digit by the divisor and write the product underneath.`,
    `Subtract. The result must be less than the divisor; if not, your digit was too small.`,
    `Bring down the next digit of the dividend and repeat divide, multiply, subtract.`,
    `When no digits are left, the number on top is the quotient and the last difference is the remainder.`,
    `Check: divisor × quotient + remainder should equal the dividend.`
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
    concept: {
      lede: `Division answers two everyday questions: how much does each share get, and how many groups fit? It is how you split a bill, a budget or a load.`,
      history: `<p><b>The problem.</b> Sharing is as old as organized work: rations for laborers, bread for a crew, land and goods among heirs. The Rhind papyrus, copied by the Egyptian scribe Ahmes around 1550 BCE, opens with problems that share 1, 2, 6, 7, 8 and 9 loaves among 10 men. Without place-value numerals, dividing large amounts was slow and hard to check.</p>
<p><b>The solution.</b> Place-value numerals made a written routine possible. In the 12th century al-Samaw'al al-Maghribi carried out calculations that amount to long division, without setting the method out as a rule. In Europe several layouts were in use, including the "galley" method. The earliest printed long division in its modern layout, called <i>a danda</i> in Italy, appears in Filippo Calandri's <i>Aritmetica</i> (Florence, 1491). The exact form taught today is credited to Henry Briggs, around 1600, and in 1659 Johann Rahn first used the ÷ sign for division in his <i>Teutsche Algebra</i>.</p>
<p><b>What it changed.</b> With a written routine, a trader could split a cost among partners or price goods per unit with pen and paper, and anyone could check the answer by multiplying back. The cycle in this lesson (divide, multiply, subtract, bring down) is that routine. Unit prices on shelf labels, fuel economy and cost per person all come from it.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Long division (Wikipedia)", url: "https://en.wikipedia.org/wiki/Long_division" },
        { title: "Calandri, Aritmetica, 1491 (Antiquariat Lynge)", url: "https://lynge.com/product/57782" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      examples: [
        { role: "Nurse", scene: `The order is 250 mg, and the liquid on hand has 125 mg in each 5 mL. <span class="m">250 ÷ 125 = 2</span> doses of 5 mL, so give <span class="m">2 × 5 = 10</span> mL.`, takeaway: "A division error in a dose is a medication error." },
        { role: "Event planner", scene: `150 guests sit at tables of 8. <span class="m">150 = 8 × 18 + 6</span>, so 18 tables fill up and 6 guests remain: rent <b>19</b> tables.`, takeaway: "The remainder decides the order: 6 guests still need somewhere to sit." },
        { role: "Truck driver", scene: `A run of 1,860 miles used 300 gallons of diesel: <span class="m">1,860 ÷ 300 = 6.2</span> miles per gallon.`, takeaway: "Tracking miles per gallon shows when fuel use rises and where to plan stops." },
        { role: "Grocery store manager", scene: `A 24-ounce box costs $4.80 and a 32-ounce box costs $5.76. Unit prices: <span class="m">4.80 ÷ 24 = 0.20</span> and <span class="m">5.76 ÷ 32 = 0.18</span> dollars per ounce.`, takeaway: "Unit prices let shoppers compare sizes fairly; here the larger box is cheaper per ounce." },
        { role: "Software developer", scene: `1,037 search results are shown 25 to a page. <span class="m">1,037 = 25 × 41 + 12</span>, so there are 42 pages, the last with 12 results.`, takeaway: "Integer division and the remainder decide how many pages a list needs." },
        { role: "Pharmacist", scene: `A bottle holds 180 tablets and the dose is 3 a day: <span class="m">180 ÷ 3 = 60</span> days.`, takeaway: "The quotient tells the patient when to request a refill." }
      ]
    },
    build: {
      lede: `Long division repeats one cycle (divide, multiply, subtract, bring down) until no digits are left, then checks the answer by multiplying back.`,
      intro: `<p>The model above shows the division algorithm. The dividend <span class="c2"><i>a</i></span> is split into <span class="c1"><i>q</i></span> whole groups of the divisor <span class="c3"><i>b</i></span>, plus a remainder <span class="c4"><i>r</i></span> smaller than <span class="c3"><i>b</i></span>. The colours keep these roles in every problem.</p>`,
      stepWhy: [
        `The layout keeps each digit of the dividend in its place-value column, so each digit you write above lands in the right place of the quotient.`,
        `Working from the left divides the largest place first. The 34 in 347 is 34 tens, so the 2 written above it stands for 20 cartons. The largest digit that fits takes out as many groups as possible in that place.`,
        `The product is the amount used up: <span class="m">2 × 12 = 24</span> tens, or 240 eggs packed into 20 cartons.`,
        `Subtracting shows what is still unpacked. If it is still at least the divisor, another group would have fit, so the digit was too small.`,
        `The leftover tens are traded into ones and joined with the next digit: 10 tens and 7 ones make 107. The same cycle then runs on a smaller problem.`,
        `Every place has been divided, so the digits on top form the quotient. What remains is less than the divisor and cannot make another group.`,
        `The check runs the division backwards with <span class="m"><i>a</i> = <i>bq</i> + <i>r</i></span>. If it does not return the dividend, there is a slip somewhere.`
      ],
      bridge: `<p>The egg cartons follow the pattern of most everyday divisions: a total, a group size, a count of full groups and a leftover. What you do with the leftover depends on the situation.</p>`,
      tasks: [
        { task: "Splitting a restaurant bill evenly", link: `Divide the total by the number of people, then check by multiplying back as in step 7: <span class="m">4 × 24 = 96</span>.` },
        { task: "Finding the price per ounce", link: `Divide each price by its size. When the division does not come out even, continue into decimals instead of stopping at a remainder.` },
        { task: "Working out how many vans or buses a group needs", link: `This is practice item 4: when everyone needs a seat, any remainder means one more vehicle.` },
        { task: "Turning a yearly cost into monthly payments", link: `Divide by 12, the same divisor as the egg cartons. A $1,008 yearly fee is <span class="m">1,008 ÷ 12 = 84</span> dollars a month, as in practice item 3.` },
        { task: "Sharing supplies equally", link: `The quotient is each share and the remainder is what is left, the way 347 eggs made 28 cartons with 11 eggs over.` }
      ]
    },
    formal: {
      setup: { title: "Writing a division problem", items: [
        { say: `<b>Name the amounts.</b> Give the dividend and divisor letters and say what each stands for, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 347</span> eggs, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 12</span> eggs per carton` },
        { say: `<b>Write the equation.</b> The unknowns are the number of full cartons and the eggs left over.`, math: `<span class="m">347 = 12<span class="c1"><i>q</i></span> + <span class="c4"><i>r</i></span>, &nbsp;0 ≤ <span class="c4"><i>r</i></span> &lt; 12</span>` },
        { say: `<b>Justify the algorithm.</b> Long division finds <i>q</i> one place value at a time: first the tens of cartons, then the ones.`, math: `<span class="m">347 = 12 · 20 + 107, &nbsp;107 = 12 · 8 + 11, &nbsp;so 347 = 12 · 28 + 11</span>` },
        { say: `<b>Check the remainder condition.</b> Because <i>r</i> is between 0 and <i>b</i> − 1, the pair (<i>q</i>, <i>r</i>) is the unique one.`, math: `<span class="m">0 ≤ 11 &lt; 12</span>` },
        { say: `<b>Answer in context.</b> State both results as a sentence with units.`, math: `<span class="m"><span class="c1"><i>q</i></span> = 28, <span class="c4"><i>r</i></span> = 11</span> &nbsp;→ 28 full cartons and 11 eggs left over.` }
      ] }
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
