window.ARITH = window.ARITH || {};

ARITH["multiplication"] = {
  title: "Multiplication",
  short: "Equal groups, counted fast.",
  grade: "Grades 2–5",
  hours: 12,
  voice: "plain",
  eyebrow: "Operations · equal groups and area",
  hero: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>`,
  lede: `Multiplication counts equal groups: <i>a</i> groups of <i>b</i>. A rectangle <i>a</i> units wide and <i>b</i> units tall covers <i>a</i> × <i>b</i> unit squares, and the distributive property turns any product into a sum of partial products.`,
  plain: `<p><b>Multiplication</b> counts equal groups in one step. A case of water holds 24 bottles, so 5 cases hold <span class="m">5 × 24 = 120</span> bottles. You could add 24 five times, but multiplying is faster and leaves fewer places to slip. The numbers you multiply are <b>factors</b>. The answer is the <b>product</b>.</p>
<p>Multiplication also measures area. A floor 12 feet by 10 feet is a grid of <span class="m">12 × 10 = 120</span> one-foot squares. Turn the rectangle sideways and it does not change, so order does not matter: <span class="m">10 × 12</span> is also 120.</p>
<p>For bigger numbers, split each factor into tens and ones. Multiply every part by every part to get the <b>partial products</b>, then add them. Knowing the facts up to <span class="m">10 × 10</span> by heart makes every step faster.</p>`,
  formal: `<p><b>Multiplication</b> on the whole numbers can be defined recursively by <span class="m"><i>a</i> × 0 = 0</span> and <span class="m"><i>a</i> × (<i>b</i> + 1) = <i>a</i> × <i>b</i> + <i>a</i></span>. For finite sets, <span class="m"><i>a</i> × <i>b</i> = |<i>A</i> × <i>B</i>|</span>, the number of ordered pairs from sets of sizes <i>a</i> and <i>b</i>.</p>
<div class="display"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span> &nbsp;&nbsp;<span class="dim">(factor × factor = product)</span><br>(10<i>a</i><sub>1</sub> + <i>a</i><sub>0</sub>)(10<i>b</i><sub>1</sub> + <i>b</i><sub>0</sub>) = <span class="c1">100<i>a</i><sub>1</sub><i>b</i><sub>1</sub> + 10<i>a</i><sub>1</sub><i>b</i><sub>0</sub> + 10<i>a</i><sub>0</sub><i>b</i><sub>1</sub> + <i>a</i><sub>0</sub><i>b</i><sub>0</sub></span></div>
<p>The standard and area-model algorithms rest on the <b>distributive property</b> <span class="m"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i></span>. Multiplication is commutative and associative, has identity 1 (<span class="m"><i>a</i> × 1 = <i>a</i></span>), and satisfies the <b>zero property</b> <span class="m"><i>a</i> × 0 = 0</span>. Notation: <span class="m"><i>a</i> × <i>b</i></span>, <span class="m"><i>a</i> · <i>b</i></span>, or <span class="m"><i>ab</i></span> in algebra.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "How many groups there are. In the model it is the width of the rectangle, along the top." },
    { c: "c3", sym: `<i>b</i>`, name: "Second factor", desc: "How many are in each group. In the model it is the height of the rectangle, down the left side." },
    { c: "c1", sym: `20 × 40`, name: "Partial products", desc: "A tens or ones part of one factor times a part of the other. Each one fills one box of the rectangle." },
    { c: "c5", sym: `<i>p</i>`, name: "Product", desc: "The total. It is the area of the whole rectangle, and the sum of all the partial products." }
  ],
  steps: { title: "How to multiply two-digit numbers with an area model", items: [
    `Split each factor into tens and ones, for example <span class="m">23 = 20 + 3</span> and <span class="m">47 = 40 + 7</span>.`,
    `Draw a rectangle and divide it into a grid: one column per part of the first factor, one row per part of the second.`,
    `Multiply to fill each box. Use a basic fact and then attach zeros: <span class="m">20 × 40 = 2 × 4 × 100 = 800</span>.`,
    `Add all the partial products.`,
    `Check by estimating: round each factor and multiply.`
  ] },
  example: {
    prompt: `A concert hall has 23 rows with 47 seats in each row. How many seats are there?`,
    lines: [
      { math: `<span class="c2">23</span> × <span class="c3">47</span> = (20 + 3) × (40 + 7)`, note: "Split each factor by place value." },
      { math: `20 × 40 = <span class="c1">800</span>`, note: "Tens times tens." },
      { math: `20 × 7 = <span class="c1">140</span>`, note: "Tens times ones." },
      { math: `3 × 40 = <span class="c1">120</span>`, note: "Ones times tens." },
      { math: `3 × 7 = <span class="c1">21</span>`, note: "Ones times ones." },
      { math: `800 + 140 + 120 + 21 = <span class="c5">1,081</span>`, note: "Add the four partial products." },
      { math: `20 × 50 = 1,000 &nbsp;<span class="dim">(estimate)</span>`, note: "Rounded factors give about 1,000, so 1,081 is reasonable." }
    ],
    answer: `The hall has <span class="m c5">1,081</span> seats.`
  },
  why: `<p>Multiplication appears whenever the same amount repeats: 12 items at one price, 40 hours at an hourly rate, a recipe for 4 scaled up for 12, tiles across a wall. Without it, each of these is a long chain of additions with many places to go wrong. With it, you can price a job, check a paycheck or size an order in one step.</p>
<p>It is also the gateway to most later math. Division undoes multiplication. Fractions, ratios, percents and unit conversions are all multiplications. Areas and volumes are products of lengths, and exponents are repeated multiplication. In algebra, expanding <span class="m">(<i>x</i> + 3)(<i>x</i> + 7)</span> uses exactly the box-by-box method of the area model.</p>`,
  careers: [
    { role: "Nurse", use: "Multiplies a dose in mg per kg by a patient's weight in kg to find the total dose ordered." },
    { role: "Electrician", use: "Multiplies current by voltage to find the power a circuit draws in watts." },
    { role: "Flooring installer", use: "Multiplies room length by width to find square footage and order enough material." },
    { role: "Payroll specialist", use: "Multiplies hours worked by hourly rate, and overtime hours by 1.5 times the rate." },
    { role: "Chef", use: "Multiplies each ingredient amount in a recipe by a scale factor to cook for more guests." },
    { role: "Retail buyer", use: "Multiplies unit cost by order quantity to price a purchase order." }
  ],
  life: [
    "Finding the cost of several items with the same price",
    "Figuring weekly pay from an hourly wage",
    "Doubling or tripling a recipe",
    "Working out the area of a room for paint or carpet",
    "Counting items packed in rows and columns, like eggs in a carton"
  ],
  fields: [
    { name: "Geometry", use: "Areas of rectangles and volumes of boxes are products of lengths." },
    { name: "Physics", use: "Many laws are products, such as distance = rate × time and force = mass × acceleration." },
    { name: "Economics", use: "Revenue is price times quantity sold." },
    { name: "Computer science", use: "Counting the steps in nested loops and the size of a grid of data uses multiplication." }
  ],
  layers: {
    nudge: "Not yet. Check that every part met every part: two parts by two parts make four boxes.",
    concept: {
      lede: `Multiplication answers the question "how many in all, when the same amount repeats?" It turns many equal additions into one step, and it measures area.`,
      heading: "What is multiplication?",
      question: { text: "How many in all?", sub: `Equal groups, a rectangle, and boxes you add up. Watch each idea in the model above, then try it yourself.`,
        figure: { sym: `<i>a</i> × <i>b</i>`, value: "322", cap: "the product", echo: "product" } },
      ideasTitle: "Four ideas, all in the model",
      objects: ["seat", "seats", "row", "rows", "bottle", "bottles", "pack", "packs", "square", "squares", "group", "groups", "dollar", "dollars", "cup", "cups", "jacket", "jackets", "watts", "amps", "mg", "kg", "tablets", "guests", "hours", "feet"],
      walk: { title: "Multiply it together: seats in a concert hall",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A concert hall has 23 rows. Each row has 47 seats. The box office needs the number of seats before tickets go on sale.`,
        demo: { kind: "bar", parts: [800, 140, 120, 21], labels: ["20 × 40", "20 × 7", "3 × 40", "3 × 7"], unit: "seat", cap: "seats", alt: "A bar fills in four pieces: 800 seats for 20 × 40, 140 for 20 × 7, 120 for 3 × 40 and 21 for 3 × 7. A brace then joins them into 1,081 seats." },
        lines: [
          { math: `<span class="c2">23</span> × <span class="c3">47</span>`, note: `23 rows of 47 seats. That's 23 equal groups, so you multiply.`, frame: 0 },
          { math: `23 = 20 + 3, &nbsp;47 = 40 + 7`, note: `Split each number into tens and ones. Small pieces are easier to multiply.`, frame: 0 },
          { math: `20 × 40 = <span class="c1">800</span>`, note: `Tens times tens. 2 × 4 is 8, and each ten adds a zero.`, frame: 1 },
          { math: `20 × 7 = <span class="c1">140</span>, &nbsp;3 × 40 = <span class="c1">120</span>`, note: `Tens times ones, both ways. A fast shortcut skips these two boxes and gets 800 + 21 = 821. That is 260 seats short.`, frame: 3 },
          { math: `3 × 7 = <span class="c1">21</span>`, note: `Ones times ones. Now every part has met every part: four boxes.`, frame: 4 },
          { math: `800 + 140 + 120 + 21 = <span class="c5">1,081</span>`, note: `Add the four boxes. Together they are the whole hall.`, frame: 5 },
          { math: `20 × 50 = 1,000`, note: `Round to check: 20 rows of 50 is about 1,000. So 1,081 makes sense.`, frame: 5 }
        ],
        predict: [null,
          { ask: `23 splits into 20 + 3. How does 47 split?`, parts: [{ label: "tens part", ans: 40 }, { label: "ones part", ans: 7 }], hint: `47 has 4 tens and 7 ones.` },
          { ask: `What is 20 × 40?`, parts: [{ label: "20 × 40", ans: 800 }], hint: `2 × 4 = 8. Then add one zero for each ten: two zeros.` },
          { ask: `A friend adds 800 + 21 and says 821 seats. What did they miss?`, choices: [
            { t: "20 × 7 and 3 × 40, the two mixed boxes", ok: true },
            { t: "Nothing. Tens with tens and ones with ones is enough", why: "That leaves out 20 rows of 7 seats and 3 rows of 40 seats. Those are real seats: 140 + 120 = 260 of them." },
            { t: "They should have added 23 + 47", why: "Adding gives 70, the seats in one row plus the number of rows. It doesn't count the seats in every row." }
          ], hint: `Each part of 23 has to meet each part of 47. Count the boxes.` },
          { ask: `What is the last box, 3 × 7?`, parts: [{ label: "3 × 7", ans: 21 }], hint: `3 rows of 7 seats.` },
          { ask: `Add the four boxes. How many seats in all?`, parts: [{ label: "seats", ans: 1081 }], hint: `800 + 140 is 940. Then add 120, then 21.` },
          { ask: `Rounding gives 20 × 50 = 1,000. What does that tell you?`, choices: [
            { t: "1,081 is close, so it is likely right", ok: true },
            { t: "The answer should be exactly 1,000", why: "Rounding changes the numbers a little. It tells you where the answer should land, close by." },
            { t: "821 fits better", why: "821 is far below 1,000. That gap is the sign that two boxes are missing." }
          ], hint: `An estimate tells you about where the answer should land.` }],
        answer: `The hall has <span class="m c5">1,081</span> seats: 23 rows of 47.` },
      ideas: [
        { c: "c2", title: "Equal groups, counted at once", term: "factors", text: `One factor says how many groups. The other says how many in each. 4 packs of 6 bottles is 4 × 6.`,
          demo: { kind: "array", rows: 4, cols: 6, unit: "bottle", cap: "bottles", alt: "Four rows of 6 bottles appear one row at a time, with running totals 6, 12, 18 and 24." }, try: { label: "Make 4 × 6", lab: "a:4,b:6,unit:1" } },
        { c: "c3", title: "Turn it, same total", term: "commutative property", text: `6 rows of 4 is the same 24 as 4 rows of 6. Turn the rectangle sideways. Nothing is added or lost.`,
          demo: { kind: "array", rows: 6, cols: 4, unit: "bottle", cap: "bottles", alt: "Six rows of 4 bottles appear one row at a time, with running totals up to 24, the same total as 4 rows of 6." }, try: { label: "Turn it to 6 × 4", lab: "a:6,b:4,unit:1" } },
        { c: "c1", title: "Split it into small boxes", term: "partial products", text: `Split 23 into 20 + 3 and 14 into 10 + 4. Multiply each part by each part. Then add the boxes.`,
          demo: { kind: "bar", parts: [200, 80, 30, 12], labels: ["20 × 10", "20 × 4", "3 × 10", "3 × 4"], cap: "in all", alt: "A bar fills in four pieces, 200, 80, 30 and 12, then a brace joins them into 322." }, try: { label: "Show 23 × 14", lab: "a:23,b:14" } },
        { c: "c5", title: "The area is the product", term: "product", text: `A floor 12 feet by 10 feet holds 120 one-foot squares. Count the squares, and you have the product.`,
          demo: { kind: "array", rows: 10, cols: 12, unit: "square", cap: "squares", alt: "Ten rows of 12 squares fill in one row at a time, with running totals up to 120." }, try: { label: "Lay out 12 × 10", lab: "a:12,b:10,unit:1" } }
      ],
      timelineTitle: "People have split products into parts for almost 4,000 years",
      timelineLead: `Tables, grids and rods all do what the model does: break a big product into small ones, then add.`,
      timeline: [
        { when: "About 1900–1600 BCE", what: `Student scribes in Babylonia copy multiplication tables onto clay. For 47 times a number, they add the lines for 40 and 7. That's the same split as the boxes in the model.` },
        { when: "Late 1200s to about 1300", what: `Grid, or "lattice," multiplication is written down in North Africa and in England. Each cell of the grid holds one digit times one digit.` },
        { when: "1617", what: `John Napier in Scotland publishes numbered rods, later called Napier's bones. They turn long multiplication into reading off rows and adding.` },
        { when: "1631", what: `William Oughtred's <i>Clavis Mathematicae</i>, printed in London, uses the × sign. In 1698 Leibniz says he prefers a dot, because × looks like the letter <i>x</i>.` }
      ],
      history: `<p><b>The problem.</b> Ancient administrators had to work out rations, wages, taxes and field areas. Each of these repeats the same amount many times, and adding it over and over is slow and invites mistakes.</p>
<p><b>The solution.</b> In the Old Babylonian period, roughly the 19th to 17th centuries BCE, student scribes copied multiplication tables onto clay tablets. A single table listed the multiples of one number from 1 times to 20 times, then 30, 40 and 50 times. To find 47 times the number, a scribe added the lines for 40 and 7, the same split into parts used in this lesson. Much later, with the ten-digit place-value system, grid or "lattice" multiplication was written down in North Africa by Ibn al-Banna' in the late 13th century and in an English treatise around 1300. The grid multiplies digit by digit and then adds the partial products. In 1617 John Napier, in Scotland, published numbered rods built on the same grid, now called Napier's bones.</p>
<p><b>What it changed.</b> Once multiplication was a short written routine, anyone with pen and paper could price a large order or measure a field. The × sign came later: William Oughtred used it in <i>Clavis Mathematicae</i>, published in London in 1631. In 1698 Leibniz wrote that he did not like × because it is easily confused with <i>x</i>, and he used a dot instead. That is why algebra writes <span class="m"><i>a</i> · <i>b</i></span> or <span class="m"><i>ab</i></span>. The area model in this lesson is the grid idea with the place values written out.</p>`,
      sources: [
        { title: "School tablet with a multiplication table, UPenn B6063 (Before Pythagoras, ISAW, New York University)", url: "https://isaw.nyu.edu/exhibitions/before-pythagoras/items/b-6063" },
        { title: "Old Babylonian multiplication tables (Mesopotamian Mathematics, St. Lawrence University)", url: "https://myslu.stlawu.edu/~dmel/mesomath/multiply.html" },
        { title: "Lattice multiplication (Wikipedia)", url: "https://en.wikipedia.org/wiki/Lattice_multiplication" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      matters: { title: "Why multiplication matters", text: `<p>Multiplication is how you handle <b>the same amount, many times</b>, without adding it over and over.</p><ul class="why-chips"><li><b>Prices</b> times how many</li><li><b>Pay</b> per hour times hours</li><li><b>Length</b> times width</li></ul><p>It is faster than adding, and it leaves <b>fewer places to slip</b>. It is also the base for division, fractions, percents and area, so <b>a slip here travels</b> into everything built on it.</p>` },
      stakes: { title: "Where multiplication goes wrong", lead: `Most slips drop a piece: a box, a zero, or a unit.`, items: [
        { role: "Seating chart", text: `23 rows of 47 counted as 800 + 21 = 821. The two mixed boxes, 140 and 120, are missing: 260 seats.` },
        { role: "Purchase order", text: `20 cases at $40 written as $80. The real total is $800. A dropped zero makes the order ten times too small.` },
        { role: "Medication", text: `A dose per kilogram multiplied by a weight in pounds. The dose comes out more than twice too big.` },
        { role: "Flooring", text: `12 feet times 30 inches called 360 square feet. Change inches to feet first: 12 × 2.5 = 30 square feet.` }
      ], try: { label: "Show all four boxes of 23 × 47", lab: "a:23,b:47" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "630 mg", scene: `An order calls for 15 mg per kg for a patient who weighs 42 kg. Total dose: <span class="m">15 × 42 = 630</span> mg.`, takeaway: "The dose is sized to each patient, so the product is double-checked before it is given.", try: { label: "Show 15 × 42", lab: "a:15,b:42" } },
        { role: "Electrician", figure: "1,500 watts", scene: `A space heater draws 12.5 amps on a 120-volt circuit. Power: <span class="m">12.5 × 120 = 1,500</span> watts.`, takeaway: "The product tells you whether the circuit and its breaker can carry the load." },
        { role: "Flooring installer", figure: "168 sq ft", scene: `A room is 14 ft by 12 ft: <span class="m">14 × 12 = 168</span> square feet. With 10% extra for cuts, <span class="m">168 × 1.1 = 184.8</span>, so order about 185 square feet.`, takeaway: "Ordering by area plus waste avoids a second order that may not match the first.", try: { label: "Lay out 14 × 12", lab: "a:14,b:12" } },
        { role: "Payroll specialist", figure: "$1,078", scene: `A worker logs 40 hours at $22 and 6 overtime hours at <span class="m">1.5 × 22 = 33</span> dollars. Pay: <span class="m">40 × 22 + 6 × 33 = 880 + 198 = 1,078</span> dollars.`, takeaway: "Overtime is a product inside a product, and missing it shortchanges the worker." },
        { role: "Chef", figure: "9 cups", scene: `A sauce for 4 people uses 3 cups of stock. For 12 guests the scale factor is <span class="m">12 ÷ 4 = 3</span>, so use <span class="m">3 × 3 = 9</span> cups.`, takeaway: "Every ingredient gets the same factor, or the balance of flavours changes." },
        { role: "Retail buyer", figure: "$1,776", scene: `An order of 48 jackets at $37 each costs <span class="m">48 × 37 = 1,776</span> dollars.`, takeaway: "The product is the purchase order total, and it has to fit the season's budget.", try: { label: "Show 48 × 37", lab: "a:48,b:37" } }
      ]
    },
    build: {
      lede: `Split each factor by place value, multiply every part by every part, and add the partial products.`,
      task: { text: "Multiply so every box is counted.", sub: `The same five moves work for 6 items at $23 and for a hall of 23 rows of 47 seats. Try each one in the model above as you go.`,
        figure: { sym: `<i>a</i> × <i>b</i>`, value: "322", cap: "in the model", echo: "product" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows multiplication as a rectangle. The <span class="c2">first factor</span> runs along the top and the <span class="c3">second factor</span> down the side, each split into tens and ones. Each box inside is one <span class="c1">partial product</span>. Together the boxes fill the whole area, which is the <span class="c5">product</span>.</p>`,
      keyTry: [{ label: "Set 35 × 12", lab: "a:35,b:12" }, { label: "Set 18 × 25", lab: "a:18,b:25" }, { label: "Split 46 × 28", lab: "a:46,b:28" }, { label: "Count the squares in 9 × 7", lab: "a:9,b:7,unit:1" }],
      objects: ["item", "items", "hour", "hours", "dollar", "dollars", "cup", "cups", "onion", "onions", "carrot", "carrots", "egg", "eggs", "carton", "cartons", "foot", "feet", "square", "squares", "seat", "seats", "row", "rows"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Tens and ones are easier to multiply than whole numbers, and splitting does not change the value: 20 + 3 is still 23.`,
        `The grid makes sure every part of one factor meets every part of the other. Two parts by two parts gives four boxes, and none can be skipped.`,
        `20 × 40 is 2 tens times 4 tens, which is 2 × 4 × 10 × 10. The basic fact gives the 8, and each ten adds a zero.`,
        `The whole rectangle is the sum of its boxes. That is the distributive property, so adding the partial products gives the full product.`,
        `Rounding 23 to 20 and 47 to 50 gives 1,000, close to 1,081. A missing box or a lost zero would put the answer far from the estimate.`
      ],
      stepTry: [{ label: "Set 23 × 47", lab: "a:23,b:47" }, null, { label: "Show 20 × 40", lab: "a:20,b:40" }, null, null],
      stepGoal: [null,
        { key: "product", eq: 1333, text: `Set <i>a</i> to 31 and <i>b</i> to 43. Count the boxes in the grid.`, after: `Two columns, 30 and 1, by two rows, 40 and 3: four boxes. <span class="m">1,200 + 90 + 40 + 3 = 1,333</span>.`, notYet: `Not yet. Set <i>a</i> to 31 and <i>b</i> to 43, then look for four boxes.` },
        null,
        { key: "product", eq: 1537, text: `Set up 29 × 53. Add its four boxes in your head, then compare with the product in the model.`, after: `<span class="m">1,000 + 60 + 450 + 27 = 1,537</span>. The sum of the boxes is the product.`, notYet: `Not yet. Set <i>a</i> to 29 and <i>b</i> to 53.` },
        { key: "product", eq: 779, text: `Set up 19 × 41. First guess: it should be close to 20 × 40 = 800.`, after: `The product is 779, close to 800. The estimate backs up the answer.`, notYet: `Not yet. Set <i>a</i> to 19 and <i>b</i> to 41.` }],
      matters: { title: "Why a Method Beats a Guess", text: `<p>Small facts like 6 × 7 come from memory. Bigger products have <b>several pieces</b>, and any piece can get dropped.</p><ul class="why-chips"><li>A <b>missing box</b></li><li>A <b>lost zero</b></li><li>An answer <b>far from the estimate</b></li></ul><p>A method is <b>the same moves every time</b>. Every box gets filled, every zero stays, and the estimate tells you when to look again.</p>` },
      bridge: `<p>The concert hall used one pattern: split the factors, multiply every part by every part, add, then estimate. Any total made of equal rows or equal groups works the same way.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Pricing several items at one price", check: { q: `You buy 6 items at $23 each. What is the total?`, parts: [{ label: "dollars", ans: 138 }], hint: `Split 23 into 20 + 3. Find 6 × 20 and 6 × 3, then add.` }, figure: "6 at $23",
          demo: { kind: "bar", parts: [120, 18], labels: ["6 × 20", "6 × 3"], unit: "dollar", cap: "dollars", alt: "A bar fills in two pieces, 120 dollars for 6 × 20 and 18 dollars for 6 × 3, then a brace joins them into 138 dollars." },
          lines: [{ math: `23 = 20 + 3`, note: "Split the price into tens and ones." }, { math: `6 × 20 = 120`, note: "Six items at $20." }, { math: `6 × 3 = 18`, note: "Six items at $3 more." }, { math: `120 + 18 = 138`, note: "Add the two parts: $138." }],
          predict: [null, null, { ask: `Six items at $3 each. What is 6 × 3?`, parts: [{ label: "6 × 3", ans: 18 }], hint: `3 + 3 + 3 + 3 + 3 + 3.` }, null],
          link: `Split the price as in step 1, the way the concert hall split 47 into 40 + 7.` },
        { task: "Working out a week's pay", check: { q: `You work 38 hours at $25 an hour. What is the week's pay?`, parts: [{ label: "dollars", ans: 950 }], hint: `Split 38 into 30 + 8. Find 30 × 25 and 8 × 25.` }, figure: "38 hours",
          demo: { kind: "bar", parts: [750, 200], labels: ["30 × 25", "8 × 25"], unit: "dollar", cap: "dollars", alt: "A bar fills in two pieces, 750 dollars for 30 hours and 200 dollars for 8 hours, then a brace joins them into 950 dollars." },
          lines: [{ math: `38 = 30 + 8`, note: "Split the hours." }, { math: `30 × 25 = 750`, note: "30 hours at $25." }, { math: `8 × 25 = 200`, note: "8 more hours at $25." }, { math: `750 + 200 = 950`, note: "Add the parts: $950." }],
          predict: [null, null, { ask: `What do the other 8 hours pay? Find 8 × 25.`, parts: [{ label: "8 × 25", ans: 200 }], hint: `4 × 25 is 100. 8 is twice 4.` }, null],
          link: `Two partial products, then add, as in step 4. Practice item 2 works the same way.` },
        { task: "Tripling a recipe", check: { q: `A soup for 4 uses 4 cups of broth and 6 carrots. You make 3 times as much. How many cups of broth and how many carrots?`, parts: [{ label: "cups of broth", ans: 12 }, { label: "carrots", ans: 18 }], hint: `Multiply each amount by 3.` }, figure: "× 3",
          demo: { kind: "array", rows: 3, cols: 4, unit: "cup", cap: "cups", alt: "Three rows of 4 cups appear one row at a time, one row per batch, with running totals 4, 8 and 12." },
          lines: [{ math: `3 batches`, note: "Three times the recipe means 3 equal groups." }, { math: `3 × 4 = 12`, note: "Broth: 12 cups." }, { math: `3 × 6 = 18`, note: "Carrots: 18." }],
          predict: [null, { ask: `Each batch takes 4 cups of broth. How many cups for 3 batches?`, parts: [{ label: "cups", ans: 12 }], hint: `3 rows of 4.` }, null],
          link: `Every ingredient gets the same factor, 3. Each one is an equal-groups problem, like 23 equal rows of seats.` },
        { task: "Measuring a room for flooring", check: { q: `A room is 13 feet by 11 feet. How many square feet of flooring does it need, before extra for cuts?`, parts: [{ label: "square feet", ans: 143 }], hint: `Split 11 into 10 + 1. Find 13 × 10 and 13 × 1.` }, figure: "13 ft × 11 ft",
          demo: { kind: "bar", parts: [130, 13], labels: ["13 × 10", "13 × 1"], unit: "square foot", cap: "square feet", alt: "A bar fills in two pieces, 130 square feet for 13 × 10 and 13 square feet for 13 × 1, then a brace joins them into 143 square feet." },
          lines: [{ math: `11 = 10 + 1`, note: "Split the width." }, { math: `13 × 10 = 130`, note: "A strip 10 feet wide." }, { math: `13 × 1 = 13`, note: "A strip 1 foot wide." }, { math: `130 + 13 = 143`, note: "143 square feet in all." }],
          predict: [null, { ask: `What is 13 × 10?`, parts: [{ label: "13 × 10", ans: 130 }], hint: `Times ten adds a zero.` }, null, null],
          try: { label: "Lay out 13 × 11", lab: "a:13,b:11,unit:1" },
          link: `Length times width is the rectangle in the model. Each strip is one box, as in step 2.` },
        { task: "Counting eggs in cartons", check: { q: `A carton holds 2 rows of 6 eggs. How many eggs are in 9 cartons?`, parts: [{ label: "eggs", ans: 108 }], hint: `First find the eggs in one carton. Then multiply by 9.` }, figure: "2 rows of 6",
          demo: { kind: "array", rows: 2, cols: 6, unit: "egg", cap: "eggs", alt: "Two rows of 6 eggs appear one row at a time, with running totals 6 and 12: one carton." },
          lines: [{ math: `2 × 6 = 12`, note: "One carton holds 12 eggs." }, { math: `9 × 12 = 9 × 10 + 9 × 2`, note: "Split 12 into 10 + 2." }, { math: `90 + 18 = 108`, note: "108 eggs in 9 cartons." }],
          predict: [null, { ask: `How many eggs in one carton?`, parts: [{ label: "eggs", ans: 12 }], hint: `2 rows of 6.` }, null],
          link: `Rows and columns are an equal-groups picture, the same as the squares in the model. Then split 12 as in step 1.` }
      ]
    },
    formal: {
      question: { text: "What is a product, exactly?", sub: `You can multiply, and you can show why the answer is right. Here are the words a textbook uses for the same ideas, and how to write a multiplication problem out in full.`,
        figure: { sym: `<i>p</i>`, value: "322", cap: "the product", echo: "product" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>, <i>b</i>`, term: "Factors", def: `The numbers being multiplied. In <span class="m"><i>a</i> × <i>b</i> = <i>p</i></span>, both <i>a</i> and <i>b</i> are factors of <i>p</i>.`, was: "how many groups, and how many in each" },
        { c: "c5", sym: `<i>p</i> = <i>a</i> × <i>b</i>`, term: "Product", def: `The result of multiplication. For whole numbers it is the size of <i>a</i> groups of <i>b</i>, or the number of ordered pairs in <span class="m"><i>A</i> × <i>B</i></span> with <span class="m">|<i>A</i>| = <i>a</i></span> and <span class="m">|<i>B</i>| = <i>b</i></span>.`, was: "how many in all" },
        { c: "c1", sym: `20 × 40`, term: "Partial product", def: `The product of one place-value part of a factor with one part of the other. The sum of all partial products is the product.`, was: "one box of the rectangle" },
        { c: "c1", sym: `<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i>`, term: "Distributive property", def: `Multiplication distributes over addition. It justifies splitting a factor and adding the partial products.`, was: "split it into small boxes" },
        { c: "c3", sym: `<i>a</i> × <i>b</i> = <i>b</i> × <i>a</i>`, term: "Commutative property", def: `The order of the factors does not change the product.`, was: "turn it, same total" },
        { c: "c5", sym: `<i>A</i> = <i>lw</i>`, term: "Area of a rectangle", def: `A rectangle of length <i>l</i> and width <i>w</i> units has area <i>lw</i> square units: the number of unit squares that tile it.`, was: "the squares in the model" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In everyday talk, "increase by 3" and "increase by a factor of 3" sound alike. In a textbook, <b>one word decides whether you add or multiply</b>.</p><ul class="why-chips"><li>A budget of $40</li><li><b>increased by 3</b>: $43</li><li><b>by a factor of 3</b>: $120</li></ul><p>In the same way, the <b>sum</b> of 6 and 4 is 10, but their <b>product</b> is 24. Exact words let you write an answer <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong products are missing a piece: a partial product, a power of ten, or a unit conversion.`,
      setupIntro: `<p>The concert hall from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a multiplication problem", items: [
        { say: `<b>Name the factors.</b> Give each a letter and say what it counts, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 23</span> rows, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 47</span> seats per row` },
        { say: `<b>Write the equation.</b> The unknown product gets its own letter.`, math: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>` },
        { say: `<b>Check the units.</b> A rate times a count gives a total in the rate's units.`, math: `rows × <span class="dim">(seats / row)</span> = seats` },
        { say: `<b>Justify the method.</b> Split by place value and apply the distributive property: every part times every part.`, math: `<span class="m">(20 + 3)(40 + 7) = 20 · 40 + 20 · 7 + 3 · 40 + 3 · 7</span>` },
        { say: `<b>Compute and answer.</b> Add the partial products and state the result as a sentence with units.`, math: `<span class="m"><span class="c5"><i>p</i></span> = 800 + 140 + 120 + 21 = <span class="c5">1,081</span></span> &nbsp;→ The hall has 1,081 seats.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: name the factors, split by place value, and add the partial products. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can multiply the formal way.",
      checks: [
        { hint: `Seven groups of 8 dollars: <span class="m">7 × 8</span>.`, parts: [{ label: "dollars", ans: 56 }] },
        { hint: `Split 36 into 30 + 6, then multiply each part by 5.`, parts: [{ label: "dollars", ans: 180 }] },
        { hint: `Split 48 into 40 + 8 and 25 into 20 + 5. There are four partial products.`, parts: [{ label: "chairs", ans: 1200 }] },
        { hint: `Split 37 into 30 + 7. Find <span class="m">124 × 30</span> and <span class="m">124 × 7</span>, then add.`, parts: [{ label: "pencils", ans: 4588 }] },
        { hint: `Write <span class="m"><i>n</i> = 18 × 26</span>. Split 18 into 10 + 8.`, parts: [{ label: "spaces n", ans: 468 }] }
      ]
    }
  },
  prereqWhy: {
    "addition": "Multiplication begins as repeated addition, and every multi-digit method finishes by adding partial products."
  },
  unlocksWhy: {
    "division": "Division asks how many times the divisor fits into the dividend, and each step of long division uses a multiplication fact.",
    "properties": "The commutative, associative and distributive laws describe how multiplication behaves and why the algorithms work.",
    "exponents": "An exponent is a count of repeated multiplications of the same base.",
    "decimal-ops": "Multiplying decimals is whole-number multiplication followed by placing the decimal point."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding and factoring polynomials uses the same distributive pattern as the area model." },
    { field: "Linear algebra", why: "Matrix multiplication is built from many products and sums of numbers." },
    { field: "Number theory", why: "Primes, factors and divisibility are all questions about how numbers multiply." }
  ],
  mistakes: [
    { wrong: `Multiplying only tens by tens and ones by ones: <span class="m">23 × 47 = 800 + 21 = 821</span>.`, fix: `Every part of one factor multiplies every part of the other. There are four partial products, <span class="m">800 + 140 + 120 + 21 = 1,081</span>.` },
    { wrong: `Thinking <span class="m">20 × 40 = 80</span>.`, fix: `<span class="m">20 × 40 = 2 × 4 × 10 × 10 = 800</span>. Both zeros count.` },
    { wrong: `Believing <span class="m">7 × 0 = 7</span>.`, fix: `Seven groups of zero is zero: <span class="m">7 × 0 = 0</span>. It is multiplying by 1 that leaves a number unchanged.` },
    { wrong: `Multiplying lengths in different units: a strip 12 ft long and 30 in wide called 360 square feet.`, fix: `Convert first. 30 in = 2.5 ft, so the area is <span class="m">12 × 2.5 = 30</span> square feet.` }
  ],
  practice: [
    { ctx: "Shopping", q: `Seven packs of batteries cost $8 each. What is the total?`, a: `<span class="m">7 × 8 = </span><b>$56</b>.` },
    { ctx: "Work", q: `A courier is paid $5 per delivery and makes 36 deliveries in a day. What does the courier earn?`, a: `<span class="m">30 × 5 + 6 × 5 = 150 + 30 = </span><b>$180</b>.` },
    { ctx: "Events", q: `A hall is set up with 48 rows of 25 chairs. How many chairs is that?`, a: `<span class="m">40 × 20 + 40 × 5 + 8 × 20 + 8 × 5 = 800 + 200 + 160 + 40 = </span><b>1,200</b> chairs.` },
    { ctx: "Supplies", q: `An office orders 124 boxes of pencils with 37 pencils in each box. How many pencils is that?`, a: `<span class="m">124 × 37 = 124 × 30 + 124 × 7 = 3,720 + 868 = </span><b>4,588</b> pencils.` },
    { ctx: "Parking", q: `Write an equation with a letter for the unknown, then solve: a parking lot has 18 rows of 26 spaces. How many spaces <i>n</i> does it have?`, a: `<span class="m"><i>n</i> = 18 × 26 = 10 × 26 + 8 × 26 = 260 + 208 = </span><b>468</b> spaces.` }
  ],
  origin: `Multiplication tables appear on Old Babylonian school tablets from roughly the 19th to 17th centuries BCE. Grid (lattice) multiplication is recorded in North Africa and England by about 1300, and John Napier's calculating rods followed in 1617. William Oughtred used the × sign in his <i>Clavis Mathematicae</i> (1631); Gottfried Leibniz preferred a raised dot, in part to avoid confusion with the letter x.`
};
