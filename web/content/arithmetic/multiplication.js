window.ARITH = window.ARITH || {};

ARITH["multiplication"] = {
  title: "Multiplication",
  short: "Equal groups, counted fast.",
  grade: "Grades 2–5",
  hours: 12,
  voice: "plain",
  eyebrow: "Operations · equal groups and area",
  hero: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>`,
  lede: `Multiplication counts equal groups: a groups of b. A rectangle a wide and b tall covers a × b unit squares.`,
  plain: `<p><b>Multiplication</b> counts equal groups in one step. A case of water holds 24 bottles, so 5 cases hold <span class="m">5 × 24 = 120</span> bottles. You could add 24 five times, but multiplying is faster and leaves fewer chances for a slip. The numbers you multiply are <b>factors</b>, and the answer is the <b>product</b>.</p>
<p>Multiplication also measures area. A floor 12 feet by 10 feet is a grid of <span class="m">12 × 10 = 120</span> one-foot squares. Turning the rectangle sideways does not change it, which is why order does not matter: <span class="m">10 × 12</span> is also 120.</p>
<p>For larger numbers, split each factor into tens and ones, multiply the pieces to get <b>partial products</b>, and add them. Knowing the facts up to <span class="m">10 × 10</span> by heart makes every step faster.</p>`,
  formal: `<p><b>Multiplication</b> on the whole numbers can be defined recursively by <span class="m"><i>a</i> × 0 = 0</span> and <span class="m"><i>a</i> × (<i>b</i> + 1) = <i>a</i> × <i>b</i> + <i>a</i></span>. For sets, <span class="m"><i>a</i> × <i>b</i> = |<i>A</i> × <i>B</i>|</span>, the number of ordered pairs from sets of sizes <i>a</i> and <i>b</i>.</p>
<div class="display"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span> &nbsp;&nbsp;<span class="dim">(factor × factor = product)</span><br>(10<i>a</i><sub>1</sub> + <i>a</i><sub>0</sub>)(10<i>b</i><sub>1</sub> + <i>b</i><sub>0</sub>) = <span class="c1">100<i>a</i><sub>1</sub><i>b</i><sub>1</sub> + 10<i>a</i><sub>1</sub><i>b</i><sub>0</sub> + 10<i>a</i><sub>0</sub><i>b</i><sub>1</sub> + <i>a</i><sub>0</sub><i>b</i><sub>0</sub></span></div>
<p>The standard and area-model algorithms rest on the <b>distributive property</b> <span class="m"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i></span>. Multiplication is commutative and associative, has identity 1 (<span class="m"><i>a</i> × 1 = <i>a</i></span>), and satisfies the <b>zero property</b> <span class="m"><i>a</i> × 0 = 0</span>. Notation: <span class="m"><i>a</i> × <i>b</i></span>, <span class="m"><i>a</i> · <i>b</i></span>, or <span class="m"><i>ab</i></span> in algebra.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First factor", desc: "The number of groups, or the width of the rectangle." },
    { c: "c3", sym: `<i>b</i>`, name: "Second factor", desc: "The size of each group, or the height of the rectangle." },
    { c: "c1", sym: `20 × 40`, name: "Partial products", desc: "Products of the place-value parts of each factor. Each is one box of the area model." },
    { c: "c5", sym: `<i>p</i>`, name: "Product", desc: "The total: the sum of all the partial products." }
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
    concept: {
      lede: `Multiplication answers the question "how many in all, when the same amount repeats?" It turns many equal additions into one step, and it measures area.`,
      history: `<p><b>The problem.</b> Ancient administrators had to work out rations, wages, taxes and field areas. Each of these repeats the same amount many times, and adding it over and over is slow and easy to get wrong.</p>
<p><b>The solution.</b> About 4,000 years ago, students in Babylonian scribal schools copied multiplication tables onto clay tablets. A table listed the multiples of one number from 1 times to 20 times, then 30, 40 and 50 times. To find 47 times the number, a scribe added the lines for 40 and 7, the same split into parts used in this lesson. Much later, with the ten-digit place-value system, lattice multiplication arrived in Europe in Fibonacci's <i>Liber Abaci</i> (1202): a grid that multiplies digit by digit and then adds the partial products. In 1617 John Napier published numbered rods built on the same grid, now called Napier's bones, to speed up long multiplications.</p>
<p><b>What it changed.</b> Once multiplication was a short written routine, anyone with pen and paper could price a large order or measure a field. The × sign came later: William Oughtred used it in <i>Clavis Mathematicae</i>, published in London in 1631. Leibniz preferred a dot because × is easily confused with the letter <i>x</i>, which is why algebra writes <span class="m"><i>a</i> · <i>b</i></span> or <span class="m"><i>ab</i></span>. The area model in this lesson is the lattice idea with the place values written out.</p>`,
      sources: [
        { title: "Old Babylonian multiplication tables (Mesopotamian Mathematics, St. Lawrence University)", url: "https://myslu.stlawu.edu/~dmel/mesomath/multiply.html" },
        { title: "Multiplication algorithm (Wikipedia)", url: "https://en.wikipedia.org/wiki/Multiplication_algorithm" },
        { title: "Earliest Uses of Symbols of Operation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/operation/" }
      ],
      examples: [
        { role: "Nurse", scene: `An order calls for 15 mg per kg for a patient who weighs 42 kg. Total dose: <span class="m">15 × 42 = 630</span> mg.`, takeaway: "The dose is sized to each patient, so the product is double-checked before it is given." },
        { role: "Electrician", scene: `A space heater draws 12.5 amps on a 120-volt circuit. Power: <span class="m">12.5 × 120 = 1,500</span> watts.`, takeaway: "The product tells you whether the circuit and its breaker can carry the load." },
        { role: "Flooring installer", scene: `A room is 14 ft by 12 ft: <span class="m">14 × 12 = 168</span> square feet. With 10% extra for cuts, <span class="m">168 × 1.1 = 184.8</span>, so order about 185 square feet.`, takeaway: "Ordering by area plus waste avoids a second order that may not match the first." },
        { role: "Payroll specialist", scene: `A worker logs 40 hours at $22 and 6 overtime hours at <span class="m">1.5 × 22 = 33</span> dollars. Pay: <span class="m">40 × 22 + 6 × 33 = 880 + 198 = 1,078</span> dollars.`, takeaway: "Overtime is a product inside a product, and missing it shortchanges the worker." },
        { role: "Chef", scene: `A sauce for 4 people uses 3 cups of stock. For 12 guests the scale factor is <span class="m">12 ÷ 4 = 3</span>, so use <span class="m">3 × 3 = 9</span> cups.`, takeaway: "Every ingredient gets the same factor, or the balance of flavours changes." },
        { role: "Retail buyer", scene: `An order of 48 jackets at $37 each costs <span class="m">48 × 37 = 1,776</span> dollars.`, takeaway: "The product is the purchase order total, and it has to fit the season's budget." }
      ]
    },
    build: {
      lede: `Split each factor by place value, multiply every part by every part, and add the partial products.`,
      intro: `<p>The model above shows multiplication as a rectangle. Its sides are the two factors, split into tens and ones. Each box inside is one partial product, and together the boxes fill the whole area, which is the product.</p>`,
      stepWhy: [
        `Tens and ones are easier to multiply than whole numbers, and splitting does not change the value: 20 + 3 is still 23.`,
        `The grid makes sure every part of one factor meets every part of the other. Two parts by two parts gives four boxes, and none can be skipped.`,
        `20 × 40 is 2 tens times 4 tens, which is 2 × 4 × 10 × 10. The basic fact gives the 8, and each factor of ten adds a zero.`,
        `The distributive property says the whole rectangle equals the sum of its boxes, so adding the partial products gives the full product.`,
        `Rounding 23 to 20 and 47 to 50 gives 1,000, close to 1,081. A missing box or a lost zero would put the answer far from the estimate.`
      ],
      bridge: `<p>The concert-hall problem is the pattern behind every total made of equal rows or equal groups: split the factors, multiply the pieces, add. The same steps show up across an ordinary week.</p>`,
      tasks: [
        { task: "Pricing several items at one price", link: `Six items at $23 each: split 23 into 20 + 3 as in step 1, then <span class="m">120 + 18 = 138</span> dollars.` },
        { task: "Working out a week's pay", link: `38 hours at $25 is <span class="m">30 × 25 + 8 × 25 = 750 + 200 = 950</span> dollars, two partial products as in practice item 2.` },
        { task: "Tripling a recipe", link: `Multiply every ingredient by 3. Three times 1¼ cups is <span class="m">3 + ¾ = 3¾</span> cups: a whole part and a fraction part, like tens and ones.` },
        { task: "Measuring a room for flooring", link: `Length times width is the rectangle of the model. A 13 ft by 11 ft room is <span class="m">130 + 13 = 143</span> square feet.` },
        { task: "Counting eggs in cartons", link: `12 cartons of 12 eggs: <span class="m">12 × 10 + 12 × 2 = 120 + 24 = 144</span>, the same split as step 1.` }
      ]
    },
    formal: {
      setup: { title: "Writing a multiplication problem", items: [
        { say: `<b>Name the factors.</b> Give each a letter and say what it counts, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 23</span> rows, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 47</span> seats per row` },
        { say: `<b>Write the equation.</b> The unknown product gets its own letter.`, math: `<span class="m"><span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span> = <span class="c5"><i>p</i></span></span>` },
        { say: `<b>Check the units.</b> A rate times a count gives a total in the rate's units.`, math: `rows × <span class="dim">(seats / row)</span> = seats` },
        { say: `<b>Justify the method.</b> Split by place value and apply the distributive property: every part times every part.`, math: `<span class="m">(20 + 3)(40 + 7) = 20 · 40 + 20 · 7 + 3 · 40 + 3 · 7</span>` },
        { say: `<b>Compute and answer.</b> Add the partial products and state the result as a sentence with units.`, math: `<span class="m"><span class="c5"><i>p</i></span> = 800 + 140 + 120 + 21 = <span class="c5">1,081</span></span> &nbsp;→ The hall has 1,081 seats.` }
      ] }
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
    { wrong: `Multiplying only tens by tens and ones by ones: <span class="m">23 × 47 = 800 + 21 = 821</span>.`, fix: `Every part of one factor multiplies every part of the other. There are four partial products, and the answer is <span class="m">1,081</span>.` },
    { wrong: `Thinking <span class="m">20 × 40 = 80</span>.`, fix: `<span class="m">20 × 40 = 2 × 4 × 10 × 10 = 800</span>. Both zeros count.` },
    { wrong: `Believing <span class="m">7 × 0 = 7</span>.`, fix: `Seven groups of zero is zero: <span class="m">7 × 0 = 0</span>. Multiplying by 1 leaves a number unchanged.` },
    { wrong: `Multiplying lengths in different units: a strip 12 ft long and 30 in wide called 360 square feet.`, fix: `Convert first. 30 in = 2.5 ft, so the area is <span class="m">12 × 2.5 = 30</span> square feet.` }
  ],
  practice: [
    { ctx: "Shopping", q: `Seven packs of batteries cost $8 each. What is the total?`, a: `<span class="m">7 × 8 = </span><b>$56</b>.` },
    { ctx: "Work", q: `A courier is paid $5 per delivery and makes 36 deliveries in a day. What does the courier earn?`, a: `<span class="m">30 × 5 + 6 × 5 = 150 + 30 = </span><b>$180</b>.` },
    { ctx: "Events", q: `A hall is set up with 48 rows of 25 chairs. How many chairs is that?`, a: `<span class="m">40 × 20 + 40 × 5 + 8 × 20 + 8 × 5 = 800 + 200 + 160 + 40 = </span><b>1,200</b> chairs.` },
    { ctx: "Supplies", q: `An office orders 124 boxes of pencils with 37 pencils in each box. How many pencils is that?`, a: `<span class="m">124 × 37 = 124 × 30 + 124 × 7 = 3,720 + 868 = </span><b>4,588</b> pencils.` },
    { ctx: "Parking", q: `Write an equation with a letter for the unknown, then solve: a parking lot has 18 rows of 26 spaces. How many spaces <i>n</i> does it have?`, a: `<span class="m"><i>n</i> = 18 × 26 = 10 × 26 + 8 × 26 = 260 + 208 = </span><b>468</b> spaces.` }
  ],
  origin: `William Oughtred introduced the × sign in his <i>Clavis Mathematicae</i> (1631). Gottfried Leibniz favoured a raised dot for multiplication, in part to avoid confusion with the letter x. Multiplication tables appear on Babylonian clay tablets from about 4,000 years ago.`
};
