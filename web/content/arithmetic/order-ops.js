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
  plain: `<p>The <b>order of operations</b> is the agreed order for working out a calculation that mixes steps. Take a lunch order: a $3 delivery fee plus 4 sandwiches at $2 each is written <span class="m">3 + 4 × 2</span>. Multiply first and you get $11, the right bill. Work straight across from the left and you get 14, which charges the delivery fee twice.</p>
<p>The agreed order is: first anything in <b>parentheses</b> or other grouping, then <b>exponents</b>, then <b>multiplication and division</b> from left to right, and last <b>addition and subtraction</b> from left to right. Many people remember this as PEMDAS or BODMAS.</p>
<p>The letters hide one trap. Multiplication and division are one step, done in the order they appear. So are addition and subtraction. So <span class="m">12 ÷ 3 × 2 = 8</span>, because the division comes first. When you want a different order, add parentheses: <span class="m">(3 + 4) × 2 = 14</span>.</p>`,
  formal: `<p>The standard <b>precedence</b> convention evaluates an expression in levels, from highest to lowest:</p>
<div class="display">1. Grouping symbols: ( ), [ ], { }, fraction bars, radicals, absolute value<br>2. Exponents (evaluated right to left: 2<sup>3<sup>2</sup></sup> = 2<sup>9</sup>)<br>3. Multiplication and division, left to right<br>4. Addition and subtraction, left to right</div>
<p>Within a level, operations are <b>left-associative</b>: <span class="m"><i>a</i> − <i>b</i> + <i>c</i> = (<i>a</i> − <i>b</i>) + <i>c</i></span> and <span class="m"><i>a</i> ÷ <i>b</i> × <i>c</i> = (<i>a</i> ÷ <i>b</i>) × <i>c</i></span>. This is an agreed notational convention. It lets every well-formed expression have one value. A fraction bar groups its whole numerator and whole denominator: <span class="m"><span class="fr"><span>6 + 4</span><span>2</span></span> = 5</span>. Implied multiplication such as <span class="m">2(3 + 1)</span> or <span class="m">2<i>x</i></span> is sometimes given higher precedence in textbooks, so ambiguous forms like <span class="m">6 ÷ 2(1 + 2)</span> should be rewritten with explicit parentheses.</p>`,
  legend: [
    { c: "c1", sym: `4 × 2`, name: "Next operation", desc: "The operation that ranks highest, or the leftmost one at that rank. It is done next." },
    { c: "c5", sym: `11`, name: "Result", desc: "The number that takes the place of the operation you finished. The expression shrinks until one number is left." },
    { c: "c1", sym: `( )`, name: "Grouping", desc: "Parentheses and other grouping marks change the usual order. Work inside them first." }
  ],
  steps: { title: "How to evaluate an expression", items: [
    `Find the innermost grouping symbols and work out what is inside them first, using these same steps.`,
    `Work out any exponents.`,
    `Read left to right and do each multiplication or division as you meet it.`,
    `Read left to right again and do each addition or subtraction as you meet it.`,
    `After each operation, rewrite the whole expression with the result in place. This stops you skipping or doubling a step.`
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
    nudge: "Not yet. Do × and ÷ before + and −, each from left to right.",

    concept: {
      lede: `When a calculation mixes steps, which step comes first? Everyone uses one agreed order, so a bill or a formula gives everyone the same number.`,
      heading: "What is the order of operations?",
      question: { text: "Which step first?", sub: `Every expression is worked the same way, one operation at a time. Pick an expression in the model above and press <b>Step</b> to see which part goes next.`,
        figure: { sym: `<i>k</i>`, value: "0", cap: "Step presses so far", echo: "k" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["dollar", "dollars", "ticket", "tickets", "adult", "adults", "child", "children", "coupon", "sandwich", "sandwiches", "row", "rows", "sponge", "resistor", "resistors", "tile"],
      walk: { title: "Order it together: a museum trip",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Two adults and 3 children visit a museum. Adult tickets are 12 dollars and child tickets are 7 dollars. A coupon takes 5 dollars off the whole bill. You write <span class="m">2 × 12 + 3 × 7 − 5</span>. What does the visit cost?`,
        demo: { kind: "bar", parts: [24, 21], labels: ["2 adults", "3 children"], unit: "dollar", cap: "before the coupon", alt: "A bar fills with the adults' 24 dollars, then the children's 21 dollars, and a brace shows 45 dollars before the coupon." },
        lines: [
          { math: `2 × 12 + 3 × 7 − 5`, note: `Two groups of tickets, then the coupon. Each × is one group.`, frame: 0 },
          { math: `<span class="c1">2 × 12</span> + 3 × 7 − 5 &nbsp;→&nbsp; 24 + 3 × 7 − 5`, note: `Multiply before you add or subtract. The adults cost 2 × 12 = 24 dollars.`, frame: 1 },
          { math: `24 + <span class="c1">3 × 7</span> − 5 &nbsp;→&nbsp; 24 + 21 − 5`, note: `The children cost 3 × 7 = 21 dollars. Each group is now one number.`, frame: 2 },
          { math: `<span class="c1">24 + 21</span> − 5 &nbsp;→&nbsp; 45 − 5`, note: `Only + and − are left. They are one step, so go left to right: 24 + 21 = 45.`, frame: 3 },
          { math: `45 − 5 = <span class="c5">40</span>`, note: `Take off the coupon. The visit costs 40 dollars.`, frame: 3 },
          { math: `2 × 12 = 24, &nbsp;24 + 3 = 27, &nbsp;27 × 7 = 189, &nbsp;189 − 5 = 184`, note: `A basic calculator keyed straight across gets 184. It adds the 3 children to the dollars, then multiplies the lot by 7. This is the classic slip: working strictly left to right.`, frame: 3 }
        ],
        predict: [null,
          { ask: `Which part do you work out first?`, choices: [
            { t: "2 × 12, the adult tickets", ok: true },
            { t: "12 + 3", why: "That adds dollars to children. Multiplying comes first, so the 3 stays with its 7." },
            { t: "7 − 5", why: "That takes the coupon off one child ticket. Subtracting waits until every × is done." }
          ], hint: `Look for a ×. Multiply before you add or subtract.` },
          { ask: `What do the 3 child tickets cost?`, parts: [{ label: "3 × 7", ans: 21 }], hint: `Three tickets at 7 dollars: 7, 14, 21.` },
          { ask: `Now 24 + 21 − 5 is left. What do you do?`, choices: [
            { t: "Add and subtract from left to right", ok: true },
            { t: "Always add before you subtract", why: "Adding and subtracting are one step. In 10 − 3 + 2, adding first gives 5. The right value is 9." },
            { t: "Always subtract before you add", why: "Subtracting does not go first either. The two share one step, so you read them in order." }
          ], hint: `+ and − are one step. Read them in order.` },
          { ask: `What does the whole visit cost?`, parts: [{ label: "dollars", ans: 40 }], hint: `Take the 5-dollar coupon off 45.` },
          { ask: `A basic calculator shows 184 for the same keys. Why?`, choices: [
            { t: "It worked straight across and skipped multiply-first", ok: true },
            { t: "It took the coupon off twice", why: "The coupon came off once. The slip comes earlier: it did 24 + 3 before 3 × 7." },
            { t: "184 is right and 40 is wrong", why: "Five tickets cost 24 + 21 = 45 dollars before the coupon. A bill of 184 dollars cannot be right." }
          ], hint: `Follow the keys in the order the calculator got them: 2 × 12, then + 3.` }],
        answer: `The museum visit costs <span class="m c5">$40</span>: products first, then + and − from left to right.` },
      ideas: [
        { c: "c1", title: "Multiply before you add", term: "precedence", text: `In 3 + 4 × 2, do 4 × 2 first. Four sandwiches at 2 dollars are one group: 8 dollars. Then add 3.`,
          demo: { kind: "array", rows: 4, cols: 2, unit: "dollar", alt: "Four rows of 2 dollars build up one row at a time to a product of 8 dollars." }, try: { label: "Work 3 + 4 × 2", lab: "expression:0,play" } },
        { c: "c1", title: "Brackets go first", term: "grouping", text: `Brackets say: do this part first. In (3 + 4) × 2, add first to get 7. Then double it to get 14.`,
          demo: { kind: "array", rows: 2, cols: 7, unit: "dollar", alt: "Two rows of 7 dollars build up one row at a time to a product of 14 dollars." }, try: { label: "Work (3 + 4) × 2", lab: "expression:1,play" } },
        { c: "c1", title: "Same step, left to right", term: "left to right", text: `+ and − are one step. So are × and ÷. Work them in the order you read them: 7 − 2 − 1 = 4.`,
          demo: { kind: "line", from: 0, to: 8, start: 7, jumps: [-2, -1], alt: "A point starts at 7, hops back 2 to 5, then hops back 1 to 4." }, try: { label: "Work 7 − 2 − 1", lab: "expression:6,play" } }
      ],
      timelineTitle: "The order grew up with algebra",
      timelineLead: `For a long time math was written in words, so no order was needed. Once people wrote it in symbols, they needed the same rules you see in the model's list.`,
      timeline: [
        { when: "1484", what: `Nicolas Chuquet draws a bar under terms that belong together, in his book <i>Le Triparty en la Science des Nombres</i>. It is an early grouping mark, like the brackets the model works first.` },
        { when: "1556", what: `Round brackets appear in Niccolò Tartaglia's book on numbers and measures. They stay rare for a long time.` },
        { when: "The 1600s", what: `As algebra moves from words to symbols, multiplying before adding becomes the habit. Exponents rank above both. These are the top rows of the model's rule list.` },
        { when: "Late 1800s to early 1900s", what: `Textbooks write the habits down as rules. The name "order of operations" and memory aids like PEMDAS and BODMAS come from this time or later.` },
        { when: "The 1920s", what: `Historian Florian Cajori still finds writers who disagree on whether × goes before ÷. Today the two share one step, done left to right, as in the model.` }
      ],
      history: `<p><b>The problem.</b> For centuries algebra was written mostly in words, so there was little need for rules about which symbol came first. As writers in the 1500s and 1600s began packing a calculation into one line of symbols, readers needed a way to see which parts belonged together.</p>
<p><b>The solution.</b> Grouping marks came first. In 1484 Nicolas Chuquet drew a bar under terms that belonged together, and round parentheses appear in Niccolò Tartaglia's treatise on numbers and measures of 1556, though they stayed rare for a long time. Doing multiplication before addition became part of algebraic notation in the 1600s, apparently without much dispute, so that <span class="m"><i>ax</i> + <i>b</i></span> meant the product plus <i>b</i>. Textbooks stated these habits as explicit rules in the late 1800s and early 1900s, and mnemonics such as PEMDAS and BODMAS are school aids from that time or later. Even in the 1920s, Florian Cajori found writers who disagreed about whether multiplication comes before division.</p>
<p><b>What it changed.</b> A fixed order lets formulas be written compactly and read the same way anywhere. Calculators, spreadsheets and programming languages follow the same convention, which is why a spreadsheet cell like <span class="m">=2*12+3*7-5</span> gives 40 for every user. The rules are an agreement among people, so where a form like <span class="m">6 ÷ 2(1 + 2)</span> is unclear, careful writers still add parentheses.</p>`,
      sources: [
        { title: "Earliest Uses of Grouping Symbols (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/grouping/" },
        { title: "Order of Operations: Historical Caveats (The Math Doctors)", url: "https://themathdoctors.org/?p=3681" },
        { title: "Order of operations (Wikipedia)", url: "https://en.wikipedia.org/wiki/Order_of_operations" }
      ],
      matters: { title: "Why the order comes first", text: `<p>A written calculation is only useful if <b>everyone gets the same number</b> from it. The agreed order is what makes that happen.</p><ul class="why-chips"><li><b>Bills</b> and receipts</li><li><b>Doses</b> and recipes</li><li><b>Spreadsheets</b> and code</li></ul><p>Because the order is shared, a formula can stay <b>short</b>. You add brackets only when you want <b>a different order</b>.</p>` },
      stakes: { title: "Where the order goes wrong", lead: `Do the steps in the wrong order and you get a different number. Nothing on the page warns you.`, items: [
        { role: "Straight across", text: `<span class="m">3 + 4 × 2</span> read from the left gives 14. The right value is 11. This is the classic slip.` },
        { role: "× before ÷", text: `<span class="m">12 ÷ 3 × 2</span> is 8. Multiplying first gives 2. The two share one step, left to right.` },
        { role: "Calculator", text: `A fraction typed without brackets: <span class="m">(6 + 4) ÷ 2</span> is 5, but <span class="m">6 + 4 ÷ 2</span> is 8.` },
        { role: "Spreadsheet", text: `One missing bracket in a cell changes every row that copies it.` }
      ], try: { label: "Watch 3 + 4 × 2 go wrong", lab: "expression:0,play" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Software developer", figure: "$68", scene: `A line of code reads <span class="m">price * qty + shipping</span>, with price 15, qty 4 and shipping 8. The computer multiplies first: <span class="m">15 × 4 + 8 = 68</span>. Type <span class="m">price * (qty + shipping)</span> by mistake and it gives 180.`, takeaway: "The computer follows the order exactly, so the code must say what you mean." },
        { role: "Financial analyst", figure: "$1,950", scene: `A cell holds <span class="m">=B2*(1+C2)-D2</span> with B2 = 2,000, C2 = 0.05 and D2 = 150: <span class="m">2,000 × 1.05 − 150 = 1,950</span>. Without the brackets it works out <span class="m">2,000 × 1 + 0.05 − 150 = 1,850.05</span>.`, takeaway: "One missing pair of brackets changes every row of a model." },
        { role: "Nurse", figure: "5 mL", scene: `An order calls for 250 mg, and the vial has 500 mg in 10 mL: <span class="m">250 ÷ 500 × 10</span>. ÷ and × share one step, so go left to right: <span class="m">0.5 × 10 = 5</span> mL.`, takeaway: "A dose formula has one right reading, and the order fixes it." },
        { role: "Electrical engineer", figure: "2 Ω", scene: `Resistors of 6 Ω and 3 Ω side by side: <span class="m">1/(1/6 + 1/3)</span>. The brackets say add first: <span class="m">1/6 + 1/3 = 1/2</span>, so the result is 2 Ω.`, takeaway: "The brackets decide which step the whole formula hangs on." },
        { role: "Estimator", figure: "$782", scene: `Tile costs 120 sq ft × $4 plus $200 labor, with a 15% markup on everything: <span class="m">(120 × 4 + 200) × 1.15 = 680 × 1.15 = 782</span>. Leave out the brackets and only the labor is marked up: <span class="m">120 × 4 + 200 × 1.15 = 710</span>.`, takeaway: "Where the markup goes is a $72 question." }
      ]
    },

    build: {
      lede: `Work grouping first, then exponents, then × and ÷ left to right, then + and − left to right, and rewrite the expression after every step.`,
      task: { text: "Work it in the agreed order.", sub: `The same five steps work for any expression, from a lunch bill to a long formula. Try each one in the model above as you go.`,
        figure: { sym: `<i>k</i>`, value: "0", cap: "Step presses so far", echo: "k" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above rewrites an expression one operation at a time. The <span class="c1">highlighted operation</span> is the one to do next. Its <span class="c5">result</span> takes its place, and the expression gets shorter until one number is left.</p>`,
      keyTry: [{ label: "Find the first step", lab: "expression:0,step" }, { label: "Finish 3 + 4 × 2", lab: "expression:0,play" }, { label: "Work (3 + 4) × 2", lab: "expression:1,play" }],
      objects: ["dollar", "dollars", "shirt", "shirts", "cap", "caps", "mile", "miles", "week", "weeks", "jacket", "cup", "cups", "ticket", "tickets"],
      goalsIntro: `Two of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Grouping is how a writer marks "this part first". The inside of a bracket is a small expression of its own. Its value must be known before anything outside can use it.`,
        `An exponent is repeated multiplication of one number, so it binds most tightly. In <span class="m">2 × 3<sup>2</sup></span> the square belongs to the 3 alone: <span class="m">2 × 9 = 18</span>.`,
        `A product is a group: 2 tickets at $12 is one amount, $24. Left to right matters because division does not regroup: <span class="m">12 ÷ 3 × 2 = 8</span>, while <span class="m">12 ÷ (3 × 2) = 2</span>.`,
        `Sums and differences combine the finished groups. Left to right matters here too: <span class="m">10 − 3 + 2 = 9</span>, while <span class="m">10 − (3 + 2) = 5</span>.`,
        `Rewriting keeps a record. Each line equals the one before, so a slip shows up at the line where the value changed. No step is done twice or skipped.`
      ],
      stepTry: [null, null, { label: "Work 20 − 12 ÷ 4 × 2", lab: "expression:2,play" }, { label: "Work 7 − 2 − 1", lab: "expression:6,play" }, { label: "Watch a long one shrink", lab: "expression:7,play" }],
      stepGoal: [
        { key: "result", eq: 16, text: `Pick <b>8 ÷ 2 × (2 + 2)</b> in the Expression list. Press <b>Step</b> until one number is left.`, after: `The brackets went first: <span class="m">2 + 2 = 4</span>. Then left to right: <span class="m">8 ÷ 2 × 4 = 4 × 4 = 16</span>.`, notYet: `Not yet. Pick 8 ÷ 2 × (2 + 2), then keep pressing <b>Step</b> until one number is left.` },
        { key: "result", eq: 118, text: `Pick <b>2 × (3 + 5)² − 10</b>. Before you press <b>Step</b>, say which part goes first and which goes second. Then step until one number is left.`, after: `Brackets, then the square: <span class="m">8² = 64</span>. Then <span class="m">2 × 64 = 128</span> and <span class="m">128 − 10 = 118</span>.`, notYet: `Not yet. Pick 2 × (3 + 5)² − 10 and keep pressing <b>Step</b> until one number is left.` },
        null, null, null],
      matters: { title: "Why a Fixed Order Beats Guessing", text: `<p>Short expressions feel obvious. Mistakes start when an expression is long, mixes four kinds of step, or comes from someone else.</p><ul class="why-chips"><li><b>Long</b> formulas</li><li><b>Mixed</b> operations</li><li><b>Someone else's</b> notes</li></ul><p>A method is <b>the same few moves every time</b>. Rewriting after each step lets you <b>check your own work</b> line by line.</p>` },
      bridge: `<p>The museum trip is the pattern behind most bills: price each group with ×, combine the groups with +, and take off discounts at the end. Brackets step in when the order must change. Here is where the same order shows up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Totaling a bill with several items and a coupon", figure: "$53",
          check: { q: `You buy 3 shirts at $15 and 2 caps at $9, with a $10-off coupon: <span class="m">3 × 15 + 2 × 9 − 10</span>. What do you pay?`, parts: [{ label: "dollars", ans: 53 }], hint: `Price each group first: 3 × 15 and 2 × 9. Then add, then take off 10.` },
          demo: { kind: "bar", parts: [45, 18], labels: ["3 shirts", "2 caps"], unit: "dollar", cap: "before the coupon", alt: "A bar fills with 45 dollars of shirts, then 18 dollars of caps, and a brace shows 63 dollars before the coupon." },
          lines: [
            { math: `3 × 15 + 2 × 9 − 10`, note: "Each product is one group of items." },
            { math: `45 + 2 × 9 − 10`, note: "Shirts first: 3 × 15 = 45." },
            { math: `45 + 18 − 10`, note: "Caps next: 2 × 9 = 18." },
            { math: `63 − 10`, note: "Only + and − are left. Go left to right." },
            { math: `<span class="c5">53</span>`, note: "You pay $53." }
          ],
          predict: [null, null, null, { ask: `Add the two groups: what is 45 + 18?`, parts: [{ label: "45 + 18", ans: 63 }], hint: `45 + 20 = 65, then take away 2.` }, null],
          link: `This is the museum trip again: price each group, add the groups, then take off the coupon (steps 3 and 4).` },
        { task: "Typing a calculation into a calculator", figure: "$17",
          check: { q: `A taxi charges $5 to start plus $3 a mile. You ride 4 miles: <span class="m">5 + 3 × 4</span>. What is the fare?`, parts: [{ label: "dollars", ans: 17 }], hint: `The miles cost 3 × 4. Add the start fee after.` },
          demo: { kind: "bar", parts: [5, 12], labels: ["start fee", "4 miles"], unit: "dollar", alt: "A bar fills with the 5-dollar start fee, then 12 dollars for 4 miles, and a brace shows the 17-dollar fare." },
          lines: [
            { math: `5 + 3 × 4`, note: "The start fee, plus 4 miles at $3." },
            { math: `5 + 12`, note: "Miles first: 3 × 4 = 12." },
            { math: `<span class="c5">17</span>`, note: "The fare is $17." },
            { math: `(5 + 3) × 4 = 32`, note: "A basic calculator keyed straight across adds first. That charges the start fee 4 times." }
          ],
          predict: [null, { ask: `What do the 4 miles cost?`, parts: [{ label: "3 × 4", ans: 12 }], hint: `Four miles at 3 dollars each.` }, null, null],
          link: `A phone calculator follows the agreed order. A basic one may not, so do the products first yourself, as in the last line of the museum walk.` },
        { task: "Writing spreadsheet formulas for a budget", figure: "$340",
          check: { q: `Each week you spend $60 on groceries and $25 on snacks. Your sheet says <span class="m">=(60+25)*4</span> for 4 weeks. What does it show?`, parts: [{ label: "dollars", ans: 340 }], hint: `Brackets first: one week costs 60 + 25. Then times 4.` },
          demo: { kind: "bar", parts: [85, 85, 85, 85], labels: ["week 1", "week 2", "week 3", "week 4"], unit: "dollar", alt: "Four bars of 85 dollars, one per week, fill in one at a time, and a brace shows 340 dollars." },
          lines: [
            { math: `(60 + 25) × 4`, note: "The brackets make one week a single amount." },
            { math: `85 × 4`, note: "Brackets first: one week costs $85." },
            { math: `<span class="c5">340</span>`, note: "Four weeks cost $340." },
            { math: `60 + 25 × 4 = 160`, note: "Without brackets only the snacks get counted 4 times. That is $180 short." }
          ],
          predict: [null, { ask: `What does one week cost?`, parts: [{ label: "60 + 25", ans: 85 }], hint: `Add the groceries and the snacks.` }, null, null],
          link: `Put brackets where the order must differ from the usual one (step 1).` },
        { task: "Applying a discount before tax", figure: "$42",
          check: { q: `A $50 jacket is $10 off, then 5% tax is added: <span class="m">(50 − 10) × 1.05</span>. What do you pay?`, parts: [{ label: "dollars", ans: 42 }], hint: `Brackets first: the price after the discount. Then multiply by 1.05 to add the tax.` },
          demo: { kind: "bar", parts: [40, 2], labels: ["price after $10 off", "5% tax"], unit: "dollar", alt: "A bar fills with the 40-dollar sale price, then 2 dollars of tax, and a brace shows 42 dollars." },
          lines: [
            { math: `(50 − 10) × 1.05`, note: "Times 1.05 adds 5% tax to the price." },
            { math: `40 × 1.05`, note: "Brackets first: the sale price is $40." },
            { math: `<span class="c5">42</span>`, note: "With tax you pay $42." },
            { math: `50 − 10 × 1.05 = 39.50`, note: "Without brackets the tax lands on the $10 only, and the total comes out too low." }
          ],
          predict: [null, { ask: `What is the price after the discount?`, parts: [{ label: "50 − 10", ans: 40 }], hint: `Take 10 off 50.` }, null, null],
          link: `The brackets make the discount happen first, as grouping does in step 1.` },
        { task: "Scaling a recipe", figure: "7 cups",
          check: { q: `The dough takes 3 cups of flour, and you use 1 more cup for dusting. You double the dough only: <span class="m">2 × 3 + 1</span>. How many cups do you need?`, parts: [{ label: "cups", ans: 7 }], hint: `Double the dough first, then add the dusting.` },
          demo: { kind: "bar", parts: [3, 3, 1], labels: ["dough", "dough", "dusting"], unit: "cup", alt: "Two bars of 3 cups for the doubled dough and one bar of 1 cup for dusting fill in, and a brace shows 7 cups." },
          lines: [
            { math: `2 × 3 + 1`, note: "Only the dough doubles." },
            { math: `6 + 1`, note: "Multiply first: 2 × 3 = 6 cups of dough." },
            { math: `<span class="c5">7</span>`, note: "You need 7 cups." },
            { math: `2 × (3 + 1) = 8`, note: "Brackets would double the dusting too: 8 cups." }
          ],
          predict: [null, { ask: `How much flour goes in the doubled dough?`, parts: [{ label: "2 × 3", ans: 6 }], hint: `Two batches of 3 cups.` }, null, null],
          link: `The brackets say what gets doubled. Without them, only the product doubles (step 3).` }
      ]
    },

    formal: {
      question: { text: "What is the value of an expression?", sub: `You can work an expression in the agreed order. Here are the words a textbook uses for the same ideas, and how to write an order-of-operations problem out in full.`,
        figure: { sym: `<i>k</i>`, value: "0", cap: "steps in the model", echo: "k" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `( ) [ ] { }`, term: "Grouping symbols", def: `Parentheses, brackets, braces, a fraction bar, a radical or absolute-value bars. The enclosed expression is evaluated first and then acts as a single number.`, was: "brackets go first" },
        { c: "c1", sym: `^ ≻ × ÷ ≻ + −`, term: "Precedence", def: `The ranking of operations: exponents above multiplication and division, which rank above addition and subtraction. A higher-ranked operation is applied to its operands first.`, was: "multiply before you add" },
        { c: "c1", sym: `<i>a</i> − <i>b</i> + <i>c</i> = (<i>a</i> − <i>b</i>) + <i>c</i>`, term: "Left associativity", def: `Operations of equal precedence are grouped from the left. Subtraction and division are not associative, so this convention fixes their value.`, was: "same step, left to right" },
        { c: "c1", sym: `<i>b</i><sup><i>n</i></sup>`, term: "Exponent", def: `Denotes repeated multiplication of the base <i>b</i>. It applies only to the base immediately before it, so <span class="m">2 × 3<sup>2</sup> = 18</span>, and stacked exponents are evaluated from the top down.`, was: "the small raised number" },
        { c: "c1", sym: `2 · 12, &nbsp;3 · 7, &nbsp;5`, term: "Term", def: `A part of an expression joined to the rest by + or − at the outermost level. In <span class="m">2 · 12 + 3 · 7 − 5</span> the terms are <span class="m">2 · 12</span>, <span class="m">3 · 7</span> and 5.`, was: "a group of tickets" },
        { c: "c5", sym: `= 40`, term: "Value of an expression", def: `The single number obtained by evaluating an expression under the precedence convention. The convention gives every well-formed expression exactly one value.`, was: "the one number left at the end" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>"Multiplication and division go together" is loose talk. The precise rule, <b>left associativity</b>, decides the answer.</p><ul class="why-chips"><li><span class="m">12 ÷ 3 × 2</span></li><li><b>8</b> grouped from the left</li><li><b>2</b> if × is done first</li></ul><p>The convention says <span class="m">(12 ÷ 3) × 2</span>, so the value is 8. Where a form like <span class="m">6 ÷ 2(1 + 2)</span> leaves the reading open, <b>write the brackets</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong values come from one of three habits: reading strictly left to right, splitting a shared level into two, or leaving out a grouping symbol.`,
      setupIntro: `<p>The museum trip from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing an expression in the right order", items: [
        { say: `<b>Name the quantities.</b> Give each count and price a letter, with units.`, math: `<span class="m"><i>a</i> = 2</span> adults at <span class="m"><i>p</i> = 12</span> dollars, &nbsp;<span class="m"><i>c</i> = 3</span> children at <span class="m"><i>q</i> = 7</span> dollars, &nbsp;<span class="m"><i>d</i> = 5</span> dollars off` },
        { say: `<b>Write the expression.</b> Each group's cost is a product, and the coupon comes off the total.`, math: `<span class="m"><i>T</i> = <i>ap</i> + <i>cq</i> − <i>d</i></span>` },
        { say: `<b>Read its structure.</b> Precedence binds the products first, and left associativity groups the sum before the subtraction. Fully bracketed, it is:`, math: `<span class="m"><i>T</i> = ((<i>a</i> · <i>p</i>) + (<i>c</i> · <i>q</i>)) − <i>d</i></span>` },
        { say: `<b>Bracket only to change the order.</b> If the coupon took $5 off each child ticket instead, the meaning changes, so the grouping must show it.`, math: `<span class="m"><i>ap</i> + <i>c</i>(<i>q</i> − <i>d</i>) = 2 · 12 + 3 · (7 − 5) = 30</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><i>T</i> = 2 · 12 + 3 · 7 − 5 = 24 + 21 − 5 = <span class="c5">40</span></span> &nbsp;→ The visit costs $40.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: grouping, exponents, then × and ÷, then + and −, each level from the left. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can evaluate an expression the formal way.",
      checks: [
        { hint: `Multiply first: 2 × 5. Then add the notebook.`, parts: [{ label: "dollars", ans: 18 }] },
        { hint: `Brackets first: one person's lunch and drink. Then times 5.`, parts: [{ label: "dollars", ans: 50 }] },
        { hint: `÷ and × share a level: 12 ÷ 4 first, then × 2. Subtract last.`, parts: [{ label: "feet", ans: 14 }] },
        { hint: `Brackets first: 2 + 6 people. Then ÷ and × from the left. Subtract last.`, parts: [{ label: "cookies", ans: 13 }] },
        { hint: `<span class="m"><i>C</i> = 25 + 30 × 6</span>. Multiply before you add.`, parts: [{ label: "C (dollars)", ans: 205 }] }
      ]
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
    { wrong: `Going strictly left to right: <span class="m">3 + 4 × 2 = 7 × 2 = 14</span>.`, fix: `Multiplication comes before addition: <span class="m">3 + 8 = 11</span>.` },
    { wrong: `Treating PEMDAS as six steps and multiplying before dividing: <span class="m">12 ÷ 3 × 2 = 12 ÷ 6 = 2</span>.`, fix: `Multiplication and division share one level and go left to right: <span class="m">12 ÷ 3 × 2 = 4 × 2 = 8</span>.` },
    { wrong: `Adding before subtracting: <span class="m">10 − 3 + 2 = 10 − 5 = 5</span>.`, fix: `Addition and subtraction share one level, left to right: <span class="m">10 − 3 + 2 = 7 + 2 = 9</span>.` },
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
