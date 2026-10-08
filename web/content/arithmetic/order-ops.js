window.ARITH = window.ARITH || {};

ARITH["order-ops"] = {
  title: "Order of Operations",
  short: "One expression, one correct value.",
  grade: "Grades 5–6",
  hours: 4,
  voice: "plain",
  eyebrow: "Structure · reading expressions correctly",
  hero: `<span class="m">3 + <span class="c1">4 × 2</span> = <span class="c5">11</span></span>`,
  lede: `When an expression mixes operations, everyone must agree on which to do first. The convention: grouping, then exponents, then multiplication and division left to right, then addition and subtraction left to right.`,
  plain: `<p>The <b>order of operations</b> is the agreed sequence for working out an expression that mixes operations. Take a lunch order: a $3 delivery fee plus 4 sandwiches at $2 each is written <span class="m">3 + 4 × 2</span>. Multiplying first gives $11, the right bill. Working strictly left to right gives 14, which charges the delivery fee twice.</p>
<p>The agreed order is: first anything in <b>parentheses</b> or other grouping, then <b>exponents</b>, then <b>multiplication and division</b> from left to right, and last <b>addition and subtraction</b> from left to right. Many people remember this as PEMDAS or BODMAS.</p>
<p>The letters hide one trap. Multiplication and division form one step, done in the order they appear, and so do addition and subtraction. So <span class="m">12 ÷ 3 × 2 = 8</span>, because the division comes first. When you want a different order, add parentheses: <span class="m">(3 + 4) × 2 = 14</span>.</p>`,
  formal: `<p>The standard <b>precedence</b> convention evaluates an expression in levels, from highest to lowest:</p>
<div class="display">1. Grouping symbols: ( ), [ ], { }, fraction bars, radicals, absolute value<br>2. Exponents (evaluated right to left: 2<sup>3<sup>2</sup></sup> = 2<sup>9</sup>)<br>3. Multiplication and division, left to right<br>4. Addition and subtraction, left to right</div>
<p>Within a level, operations are <b>left-associative</b>: <span class="m"><i>a</i> − <i>b</i> + <i>c</i> = (<i>a</i> − <i>b</i>) + <i>c</i></span> and <span class="m"><i>a</i> ÷ <i>b</i> × <i>c</i> = (<i>a</i> ÷ <i>b</i>) × <i>c</i></span>. This is an agreed notational convention. It lets every well-formed expression have one value. A fraction bar groups its whole numerator and whole denominator: <span class="m"><span class="fr"><span>6 + 4</span><span>2</span></span> = 5</span>. Implied multiplication such as <span class="m">2(3 + 1)</span> or <span class="m">2<i>x</i></span> is sometimes given higher precedence in textbooks, so ambiguous forms like <span class="m">6 ÷ 2(1 + 2)</span> should be rewritten with explicit parentheses.</p>`,
  legend: [
    { c: "c1", sym: `4 × 2`, name: "Next operation", desc: "The operation with the highest precedence, or the leftmost one at that level. It is done next." },
    { c: "c5", sym: `11`, name: "Result", desc: "The value that replaces the operation just done, until one number remains." },
    { c: "c1", sym: `( )`, name: "Grouping", desc: "Parentheses and other grouping symbols override the usual order. Work inside them first." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Find the innermost grouping symbols and evaluate what is inside them first, using these same steps.`,
    `Evaluate any exponents.`,
    `Scan left to right and do each multiplication or division as you meet it.`,
    `Scan left to right again and do each addition or subtraction as you meet it.`,
    `After each operation, rewrite the whole expression with the result in place. This avoids skipping or doubling a step.`
  ] },
  example: {
    prompt: `Two adults go to a museum at $12 each, with 3 children at $7 each. They have a $5-off coupon for the whole group. Write one expression for the cost and evaluate it.`,
    lines: [
      { math: `2 × 12 + 3 × 7 − 5`, note: "Each product is a group of tickets. The coupon comes off the total." },
      { math: `<span class="c1">2 × 12</span> + 3 × 7 − 5`, note: "Multiplication comes before addition and subtraction. Start at the left." },
      { math: `24 + <span class="c1">3 × 7</span> − 5`, note: "Next multiplication." },
      { math: `<span class="c1">24 + 21</span> − 5`, note: "No multiplication left. Add and subtract left to right." },
      { math: `<span class="c1">45 − 5</span>`, note: "Last operation." },
      { math: `<span class="c5">40</span>`, note: "One number remains." }
    ],
    answer: `The visit costs <span class="m c5">$40</span>. Going strictly left to right would give a wrong total of $184.`
  },
  why: `<p>A formula for a price, a dose or a load is only useful if everyone who reads it gets the same number. Without a shared order, <span class="m">3 + 4 × 2</span> could be 11 or 14, and a nurse, a pharmacist and a spreadsheet could each get a different dose from the same line. The order of operations is that shared agreement, and calculators, spreadsheets and programming languages are built to follow it.</p>
<p>It also keeps formulas short. Because multiplication is understood to come first, nobody has to write <span class="m">(2 × 12) + (3 × 7)</span>. The bare <span class="m">2 × 12 + 3 × 7</span> means the same thing, and parentheses are saved for the times you want a different order.</p>
<p>Algebra rests on it. An expression like <span class="m">3<i>x</i><sup>2</sup> + 2<i>x</i> − 5</span> makes sense only because everyone knows the square applies to <i>x</i> alone and the products come before the sums. Every formula in science, finance and engineering is written with this convention.</p>`,
  careers: [
    { role: "Software developer", use: "Writes expressions knowing each language's operator precedence, and adds parentheses so the code computes what is intended." },
    { role: "Financial analyst", use: "Builds spreadsheet formulas such as =B2*(1+C2)-D2 where misplaced parentheses would change every result." },
    { role: "Nurse", use: "Evaluates dosage formulas with several steps, such as (desired ÷ on hand) × volume, in the correct order." },
    { role: "Electrical engineer", use: "Evaluates circuit formulas like the parallel resistance 1/(1/R₁ + 1/R₂), where the grouping determines the answer." },
    { role: "Estimator", use: "Writes cost formulas combining quantities, unit prices and a markup percentage that must be applied at the right step." }
  ],
  life: [
    "Totaling a bill with several items at different prices and a coupon",
    "Typing a multi-step calculation into a phone calculator correctly",
    "Writing formulas in a spreadsheet for a household budget",
    "Following a recipe conversion that multiplies and then adds",
    "Checking a store's sale price math, such as a discount applied before tax"
  ],
  fields: [
    { name: "Computer programming", use: "Every language defines operator precedence and associativity, and parsers enforce them." },
    { name: "Algebra and all later math", use: "Formulas and equations are written assuming the standard order." },
    { name: "Physics and engineering", use: "Formulas like v = v₀ + at are read with multiplication before addition." }
  ],
  layers: {
    concept: {
      lede: `The order of operations answers one question: when a calculation mixes steps, which step comes first? Agreeing on it is what lets a formula mean the same thing to everyone.`,
      history: `<p><b>The problem.</b> For centuries algebra was written mostly in words, so there was little need for rules about which symbol came first. As writers in the 1500s and 1600s began packing a calculation into one line of symbols, readers needed a way to see which parts belonged together.</p>
<p><b>The solution.</b> Grouping marks came first. In 1484 Nicolas Chuquet drew a bar under terms that belonged together, and round parentheses appear in Niccolò Tartaglia's treatise on numbers and measures of 1556, though they stayed rare for a long time. Doing multiplication before addition became the accepted habit as symbolic algebra grew in the 1600s, apparently without much dispute, so that <span class="m"><i>ax</i> + <i>b</i></span> meant the product plus <i>b</i>. Textbooks later stated these habits as explicit rules, and mnemonics such as PEMDAS and BODMAS are later school aids still.</p>
<p><b>What it changed.</b> A fixed order lets formulas be written compactly and read the same way anywhere. Calculators, spreadsheets and programming languages follow the same convention, which is why a spreadsheet cell like <span class="m">=2*12+3*7-5</span> gives 40 for every user. The rules are an agreement among people, so where a form like <span class="m">6 ÷ 2(1 + 2)</span> is unclear, careful writers still add parentheses.</p>`,
      sources: [
        { title: "Earliest Uses of Grouping Symbols (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/grouping/" },
        { title: "Order of Operations: Historical Caveats (The Math Doctors)", url: "https://themathdoctors.org/?p=3681" }
      ],
      examples: [
        { role: "Software developer", scene: `A line of code reads <span class="m">price * qty + shipping</span> with price 15, qty 4 and shipping 8. The language multiplies first: <span class="m">15 × 4 + 8 = 68</span>. Writing <span class="m">price * (qty + shipping)</span> by mistake would give 180.`, takeaway: "The computer follows the convention exactly, so the code must say what you mean." },
        { role: "Financial analyst", scene: `A cell holds <span class="m">=B2*(1+C2)-D2</span> with B2 = 2,000, C2 = 0.05 and D2 = 150: <span class="m">2,000 × 1.05 − 150 = 1,950</span>. Without the parentheses it computes <span class="m">2,000 × 1 + 0.05 − 150 = 1,850.05</span>.`, takeaway: "One missing pair of brackets changes every row of a model." },
        { role: "Nurse", scene: `An order calls for 250 mg, and the vial has 500 mg in 10 mL: <span class="m">250 ÷ 500 × 10</span>. Division and multiplication share a level, so left to right gives <span class="m">0.5 × 10 = 5</span> mL.`, takeaway: "A dose formula has one right reading, and the order fixes it." },
        { role: "Electrical engineer", scene: `Resistors of 6 Ω and 3 Ω in parallel: <span class="m">1/(1/6 + 1/3)</span>. The grouping says add first: <span class="m">1/6 + 1/3 = 1/2</span>, so the result is 2 Ω.`, takeaway: "Grouping decides which operation the whole formula hinges on." },
        { role: "Estimator", scene: `Tile costs 120 sq ft × $4 plus $200 labor, with a 15% markup on everything: <span class="m">(120 × 4 + 200) × 1.15 = 680 × 1.15 = 782</span>. Leaving out the brackets marks up only the labor: <span class="m">120 × 4 + 200 × 1.15 = 710</span>.`, takeaway: "Where the markup applies is a $72 question." }
      ]
    },
    build: {
      lede: `Work from the inside out: grouping first, then exponents, then multiplication and division left to right, then addition and subtraction left to right, rewriting the expression after every step.`,
      intro: `<p>The model above rewrites an expression one operation at a time. The highlighted operation is the one to do next. Its result takes its place, and the expression gets shorter until one number remains.</p>`,
      stepWhy: [
        `Grouping is how a writer marks "this part first". The inside of a bracket is a small expression of its own, so it gets the same steps, and its value must be known before anything outside can use it.`,
        `An exponent is repeated multiplication of one number, so it binds most tightly. In <span class="m">2 × 3<sup>2</sup></span> the square belongs to the 3 alone, giving <span class="m">2 × 9 = 18</span>.`,
        `A product is a group: 2 tickets at $12 is one amount, $24. Doing products and quotients first turns each group into a single number. Left to right matters because division does not regroup: <span class="m">12 ÷ 3 × 2 = 8</span>, while <span class="m">12 ÷ (3 × 2) = 2</span>.`,
        `Sums and differences combine the finished groups. Left to right matters here too, because subtraction does not regroup: <span class="m">10 − 3 + 2 = 9</span>, while <span class="m">10 − (3 + 2) = 5</span>.`,
        `Rewriting keeps a record. Each line equals the one before, so a slip shows up at the line where the value changed, and no step is done twice or skipped.`
      ],
      bridge: `<p>The museum problem is the pattern behind most bills: price each group of items with multiplication, combine the groups with addition, and take off discounts at the end. Here is where the same order shows up.</p>`,
      tasks: [
        { task: "Totaling a bill with several items and a coupon", link: `Write each group as a product, like <span class="m">2 × 12</span> and <span class="m">3 × 7</span>, add the groups, then subtract the coupon, as in the last lines of the example.` },
        { task: "Typing a calculation into a calculator", link: `A calculator that follows the standard order gives 40 for <span class="m">2 × 12 + 3 × 7 − 5</span>. A basic one that works strictly left to right gives 184, the wrong total in the example. Do the products first if you are unsure.` },
        { task: "Writing spreadsheet formulas for a budget", link: `Brackets change the result, as in the second practice problem: <span class="m">(8 + 2) × 5 = 50</span>, but <span class="m">8 + 2 × 5 = 18</span>. Put them where the order must differ from the default.` },
        { task: "Applying a discount before tax", link: `A $40 item at 25% off plus 8% tax is <span class="m">40 × (1 − 0.25) × 1.08 = 32.40</span>. The brackets make the discount happen first, as grouping does in step 1.` },
        { task: "Scaling a recipe", link: `Doubling 3 cups of flour plus 1 cup for dusting is <span class="m">2 × 3 + 1 = 7</span> cups if only the dough doubles, and <span class="m">2 × (3 + 1) = 8</span> if both do. The parentheses say which.` }
      ]
    },
    formal: {
      setup: { title: "Writing an expression in the right order", items: [
        { say: `<b>Name the quantities.</b> Give each count and price a letter, with units.`, math: `<span class="m"><i>a</i> = 2</span> adults at <span class="m"><i>p</i> = 12</span> dollars, &nbsp;<span class="m"><i>c</i> = 3</span> children at <span class="m"><i>q</i> = 7</span> dollars, &nbsp;<span class="m"><i>d</i> = 5</span> dollars off` },
        { say: `<b>Write the expression.</b> Each group's cost is a product, and the coupon comes off the total.`, math: `<span class="m"><i>T</i> = <i>ap</i> + <i>cq</i> − <i>d</i></span>` },
        { say: `<b>Read its structure.</b> Precedence binds the products first, and left associativity groups the sum before the subtraction. Fully bracketed, it is:`, math: `<span class="m"><i>T</i> = ((<i>a</i> · <i>p</i>) + (<i>c</i> · <i>q</i>)) − <i>d</i></span>` },
        { say: `<b>Bracket only to change the order.</b> If the coupon took $5 off each child ticket instead, the meaning changes, so the grouping must show it.`, math: `<span class="m"><i>ap</i> + <i>c</i>(<i>q</i> − <i>d</i>) = 2 · 12 + 3 · (7 − 5) = 30</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>T</i> = 2 · 12 + 3 · 7 − 5 = 24 + 21 − 5 = <span class="c5">40</span></span> &nbsp;→ The visit costs $40.` }
      ] }
    }
  },
  prereqWhy: {
    "division": "Division shares a precedence level with multiplication and is done left to right, so it must be fluent inside expressions.",
    "properties": "The laws of arithmetic show why grouping matters for subtraction and division and when regrouping is allowed."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Algebra I", why: "Evaluating and simplifying expressions with variables requires the standard order at every step." },
    { field: "Computer science", why: "Parsing expressions into trees, as compilers and calculators do, encodes the precedence rules." },
    { field: "Calculus", why: "Reading formulas such as derivatives of composite functions depends on knowing what each operation applies to." }
  ],
  mistakes: [
    { wrong: `Treating PEMDAS as six steps and multiplying before dividing: <span class="m">12 ÷ 3 × 2 = 12 ÷ 6 = 2</span>.`, fix: `Multiplication and division share one level and go left to right: <span class="m">12 ÷ 3 × 2 = 4 × 2 = 8</span>.` },
    { wrong: `Adding before subtracting: <span class="m">10 − 3 + 2 = 10 − 5 = 5</span>.`, fix: `Addition and subtraction share one level, left to right: <span class="m">10 − 3 + 2 = 7 + 2 = 9</span>.` },
    { wrong: `Going strictly left to right: <span class="m">3 + 4 × 2 = 7 × 2 = 14</span>.`, fix: `Multiplication comes before addition: <span class="m">3 + 8 = 11</span>.` },
    { wrong: `Typing a fraction into a calculator without brackets: <span class="m"><span class="fr"><span>6 + 4</span><span>2</span></span></span> entered as <span class="m">6 + 4 ÷ 2</span>, which gives 8.`, fix: `A fraction bar groups its whole top. Type <span class="m">(6 + 4) ÷ 2</span> to get 5.` }
  ],
  practice: [
    { ctx: "Shopping", q: `You buy an $8 notebook and 2 pens at $5 each. The cost is <span class="m">8 + 2 × 5</span>. What is the total?`, a: `<span class="m">8 + 10 = </span><b>$18</b>.` },
    { ctx: "Work", q: `Five team members each get an $8 lunch and a $2 drink. The cost is <span class="m">(8 + 2) × 5</span>. What does the team spend?`, a: `<span class="m">10 × 5 = </span><b>$50</b>.` },
    { ctx: "Crafts", q: `Each bow uses 12 ÷ 4 feet of ribbon. You make 2 bows from a 20-foot roll: <span class="m">20 − 12 ÷ 4 × 2</span>. How much ribbon is left?`, a: `<span class="m">12 ÷ 4 = 3</span>, <span class="m">3 × 2 = 6</span>, <span class="m">20 − 6 = </span><b>14 feet</b>.` },
    { ctx: "Parties", q: `48 cookies are shared evenly among 2 adults and 6 children. A family of 3 at the party eats 5 of its share right away. Evaluate <span class="m">48 ÷ (2 + 6) × 3 − 5</span> for what the family has left.`, a: `Parentheses: 8 people. Then <span class="m">48 ÷ 8 = 6</span> each, <span class="m">6 × 3 = 18</span> for the family, <span class="m">18 − 5 = </span><b>13</b> cookies.` },
    { ctx: "Fitness", q: `Write an equation with a letter for the unknown, then solve: a gym charges a $25 sign-up fee plus $30 a month. What is the cost <i>C</i> for 6 months?`, a: `<span class="m"><i>C</i> = 25 + 30 × 6</span>. Multiply first: <span class="m">30 × 6 = 180</span>, then <span class="m">25 + 180 = </span><b>$205</b>.` }
  ],
  origin: `The rule that multiplication comes before addition grew up with symbolic algebra in the 1500s and 1600s, where writing <span class="m"><i>ax</i> + <i>b</i></span> to mean <span class="m">(<i>ax</i>) + <i>b</i></span> was already standard. Mnemonics such as PEMDAS and BODMAS are much later school conventions.`
};
