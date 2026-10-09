window.ARITH = window.ARITH || {};

ARITH["properties"] = {
  title: "Laws of Arithmetic",
  short: "The rules that let you rearrange and regroup.",
  grade: "Grades 3–7",
  hours: 5,
  voice: "plain",
  eyebrow: "Structure · commutative, associative, distributive",
  hero: `<span class="m"><span class="c2"><i>a</i></span>(<span class="c3"><i>b</i></span> + <span class="c4"><i>c</i></span>) = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> + <span class="c2"><i>a</i></span><span class="c4"><i>c</i></span></span>`,
  lede: `A few laws hold for every number: you can swap the order of addends or factors, regroup them, and split a product over a sum. Mental math and all of algebra rely on them.`,
  plain: `<p>Some rules hold no matter which numbers you pick. They are the <b>laws</b>, or <b>properties</b>, of arithmetic, and you already use them. Items at a register cost $18, $7 and $3. Most people add 7 + 3 = 10 first and then the 18, for $28. The <b>associative</b> law says that regrouping is safe: <span class="m">(18 + 7) + 3 = 18 + (7 + 3)</span>. The <b>commutative</b> law says order does not matter for adding or multiplying: <span class="m">3 + 5 = 5 + 3</span> and <span class="m">3 × 5 = 5 × 3</span>.</p>
<p>The <b>distributive</b> law links multiplying and adding. Multiplying a sum gives the same result as multiplying each part and adding. Six cases of 14 bottles hold <span class="m">6 × 14 = 6 × 10 + 6 × 4 = 60 + 24 = 84</span> bottles. Two more laws complete the list. <b>Identity</b>: adding 0 or multiplying by 1 changes nothing. <b>Inverse</b>: adding −5 undoes adding 5, and multiplying by 1/5 undoes multiplying by 5.</p>
<p>Subtraction and division do not obey the commutative or associative laws. <span class="m">10 − 4</span> is 6, while <span class="m">4 − 10</span> is −6. This lesson is about knowing which moves are safe.</p>`,
  formal: `<p>For all numbers <span class="m c2"><i>a</i></span>, <span class="m c3"><i>b</i></span>, <span class="m c4"><i>c</i></span> (whole numbers, integers, rationals or reals):</p>
<div class="display">Commutative: &nbsp;<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; <i>ab</i> = <i>ba</i><br>Associative: &nbsp;(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; (<i>ab</i>)<i>c</i> = <i>a</i>(<i>bc</i>)<br>Distributive: &nbsp;<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i><br>Identity: &nbsp;<i>a</i> + 0 = <i>a</i> &nbsp;·&nbsp; <i>a</i> · 1 = <i>a</i><br>Inverse: &nbsp;<i>a</i> + (−<i>a</i>) = 0 &nbsp;·&nbsp; <i>a</i> · <span class="fr"><span>1</span><span><i>a</i></span></span> = 1 for <i>a</i> ≠ 0</div>
<p>The additive inverse <span class="m">−<i>a</i></span> exists only once the integers ℤ are available, and the multiplicative inverse (<b>reciprocal</b>) <span class="m">1/<i>a</i></span> only in the rationals ℚ or reals ℝ; 0 has no reciprocal. A set with two operations obeying all of these laws is called a <b>field</b>; ℚ and ℝ are fields, while ℤ lacks multiplicative inverses and the whole numbers lack both kinds of inverse. The <b>zero property</b> <span class="m"><i>a</i> · 0 = 0</span> follows from the distributive, identity and additive inverse laws.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "In the distributive law, the number that multiplies each part of the sum. In the grid, the number of rows." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The first part of the sum, or the second number being swapped or regrouped." },
    { c: "c4", sym: `<i>c</i>`, name: "Third number", desc: "The second part of the sum, or the third number in a regrouping." }
  ],
  steps: { title: "How to use the laws for mental math", items: [
    `Look for pairs that make friendly numbers, like 25 and 4 (100), or 7 and 3 (10).`,
    `Use the commutative law to move those numbers next to each other.`,
    `Use the associative law to group the friendly pair first.`,
    `For a product with an awkward factor like 98 or 14, write it as a sum or difference of round numbers: <span class="m">98 = 100 − 2</span>.`,
    `Use the distributive law to multiply each part, then combine.`
  ] },
  example: {
    prompt: `Six friends go to a movie. Each one buys a $7 ticket and a $3 popcorn. What does the night cost?`,
    lines: [
      { math: `<span class="c2">6</span> × (<span class="c3">7</span> + <span class="c4">3</span>) = <span class="c2">6</span> × <span class="c3">7</span> + <span class="c2">6</span> × <span class="c4">3</span>`, note: "Distributive law: multiply both parts of each friend's cost by 6." },
      { math: `= 42 + 18`, note: "Six tickets and six popcorns." },
      { math: `= 60`, note: "Add the two parts." },
      { math: `6 × 7 + 3 = 45 <span class="dim">(wrong)</span>`, note: "Multiplying only the tickets pays for one popcorn. It is $15 short." },
      { math: `<span class="c2">6</span> × (<span class="c3">7</span> + <span class="c4">3</span>) = 6 × 10 = 60`, note: "Adding each friend's 7 + 3 = 10 first gives the same total faster." }
    ],
    answer: `The movie night costs <span class="m">$60</span>.`
  },
  why: `<p>These laws are why mental math works. Pricing 6 items at $99 as <span class="m">$600 − $6 = $594</span>, adding a list in the order that makes tens, and taking a tip on a whole bill instead of line by line all rely on them. Without them, every calculation would have to be done in the order it was written.</p>
<p>They also mark the moves that are not safe. Swapping the order of a subtraction, or multiplying only one part of a sum, gives a wrong answer that can look reasonable. A spreadsheet formula that subtracts in the wrong order turns a profit into a loss without any warning.</p>
<p>Algebra is mostly these laws applied to letters. Combining like terms, expanding <span class="m">3(<i>x</i> + 4)</span>, factoring and solving equations each use them on every line. They also explain why the column methods for addition and multiplication work. Higher algebra studies systems where some of them fail, such as matrices, whose products depend on order.</p>`,
  careers: [
    { role: "Retail cashier", use: "Rearranges and regroups prices mentally to total a small order quickly when a register is down." },
    { role: "Software engineer", use: "Relies on associativity to split a sum across many processors and combine the partial results in any grouping." },
    { role: "Compiler engineer", use: "Writes optimizations that reorder or factor arithmetic using the commutative and distributive laws, while guarding cases where floating-point rounding breaks them." },
    { role: "Accountant", use: "Applies a tax or discount rate to a subtotal instead of to each line, which is the distributive law." },
    { role: "Actuary", use: "Simplifies long premium and reserve formulas by factoring out common rates." }
  ],
  life: [
    "Adding a list of prices in whatever order is easiest",
    "Finding the cost of 6 items at $99 as 600 − 6",
    "Figuring a 20% tip on the whole bill instead of each item",
    "Doubling a recipe by doubling each ingredient",
    "Grouping coins into dollars before counting the rest"
  ],
  fields: [
    { name: "Algebra", use: "Every simplification and equation-solving step is justified by one of these laws." },
    { name: "Computer science", use: "Parallel algorithms and compilers use associativity and commutativity to reorder calculations safely." },
    { name: "Physics", use: "Vector addition is commutative and associative, which lets forces be added in any order." }
  ],
  layers: {
    nudge: "Not yet. Check that you multiplied every part.",
    concept: {
      lede: `Can you change the order of numbers, or how you group them, and still get the same answer? A few laws tell you which moves are safe.`,
      heading: "What are the laws of arithmetic?",
      question: { text: "Same answer?", sub: `Three moves keep an answer the same: swap, regroup and split. Watch each one in the model above, then try it yourself.`,
        figure: { sym: `<span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span>`, value: "15", cap: "the value", echo: "value" } },
      ideasTitle: "Three moves, all in the model",
      objects: ["dot", "dots", "friend", "friends", "ticket", "tickets", "popcorn", "popcorns", "orders", "policies", "items"],
      walk: { title: "Rearrange it together: a movie night",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Six friends go to a movie. Each one buys a $7 ticket and a $3 popcorn. What does the night cost?`,
        demo: { kind: "bar", parts: [42, 18], labels: ["6 tickets", "6 popcorns"], unit: "dollar", alt: "A bar model. The first part, 42 dollars, is six tickets. The second part, 18 dollars, is six popcorns. A brace over both shows 60 dollars in all." },
        lines: [
          { math: `<span class="c2">6</span> × (<span class="c3">7</span> + <span class="c4">3</span>)`, note: `Six friends. Each one spends $7 on a ticket and $3 on popcorn.`, frame: 0 },
          { math: `<span class="c2">6</span> × <span class="c3">7</span> = 42`, note: `Tickets first. Six tickets at $7 cost $42.`, frame: 1 },
          { math: `<span class="c2">6</span> × <span class="c4">3</span> = 18`, note: `Then popcorn. Six popcorns at $3 cost $18.`, frame: 2 },
          { math: `42 + 18 = 60`, note: `Add the two parts. The night costs $60. This is the distributive law: multiply every part, then add.`, frame: 3 },
          { math: `6 × 7 + 3 = 45`, note: `A common slip gives $45. The 6 multiplied the tickets but not the popcorn. That pays for one popcorn, so five friends get none.`, frame: 1 },
          { math: `<span class="c2">6</span> × (<span class="c3">7</span> + <span class="c4">3</span>) = 6 × 10 = 60`, note: `A faster way: each friend spends 7 + 3 = $10. Six friends spend $60. Same total.`, frame: 3 }
        ],
        predict: [null,
          { ask: `What do 6 tickets at $7 cost?`, parts: [{ label: "tickets, $", ans: 42 }], hint: `Six groups of 7. Or 5 × 7 = 35, plus one more 7.` },
          { ask: `Each friend gets one $3 popcorn. What does the popcorn cost for the group?`, choices: [
            { t: "6 × 3 = $18", ok: true },
            { t: "$3, one popcorn", why: "That buys popcorn for one friend. Six friends need six." },
            { t: "7 × 3 = $21", why: "7 is the price of a ticket. The number of friends is 6." }
          ], hint: `One popcorn for each of the 6 friends.` },
          { ask: `Tickets are $42 and popcorn is $18. What is the total?`, parts: [{ label: "total, $", ans: 60 }], hint: `Add the tens, 40 + 10. Then the ones, 2 + 8.` },
          { ask: `A friend writes <span class="m">6 × 7 + 3 = 45</span>. Why is that $15 short?`, choices: [
            { t: "The 6 multiplied the tickets only", ok: true },
            { t: "6 × 7 is not 42", why: "6 × 7 really is 42. The slip is in the popcorn." },
            { t: "You may not add after you multiply", why: "You may. You need to add all 6 popcorns, not 1." }
          ], hint: `How many popcorns did that $3 pay for?` },
          { ask: `Each friend spends 7 + 3 = $10. What do 6 friends spend?`, parts: [{ label: "total, $", ans: 60 }], hint: `Six groups of 10.` }],
        answer: `The movie night costs <span class="m">$60</span>, because <span class="m">6 × (7 + 3) = 6 × 7 + 6 × 3</span>.` },
      ideas: [
        { c: "c2", title: "Order does not matter", term: "commutative property", text: `3 rows of 5 dots make 15. Turn the grid and you get 5 rows of 3. Still 15 dots.`,
          demo: { kind: "array", rows: 3, cols: 5, unit: "dot", alt: "Three rows of five dots light up one row at a time, 5, 10, 15, then the product 15." }, try: { label: "Turn 3 rows of 5", lab: "mode:0,a:3,b:5,c:4,rearrange" } },
        { c: "c3", title: "Group in any order", term: "associative property", text: `To add $8 + $7 + $3, add 7 + 3 first to make 10. Then 8 + 10 = 18. The grouping changed. The total did not.`,
          demo: { kind: "bar", parts: [8, 7, 3], unit: "dollar", alt: "A bar model with parts of 8, 7 and 3 dollars. A brace over all three shows 18 dollars in all." }, try: { label: "Group 7 + 3 first", lab: "mode:1,a:8,b:7,c:3,rearrange" } },
        { c: "c4", title: "Split, multiply, then add", term: "distributive property", text: `3 × (5 + 4) is 3 × 5 plus 3 × 4. That is 15 + 12 = 27. Multiply every part, then add.`,
          demo: { kind: "bar", parts: [15, 12], labels: ["3 × 5", "3 × 4"], cap: "3 × 9", alt: "A bar model with a part of 15 for 3 times 5 and a part of 12 for 3 times 4. A brace over both shows 27, which is 3 times 9." }, try: { label: "Split 3 × (5 + 4)", lab: "mode:2,a:3,b:5,c:4,rearrange" } }
      ],
      timelineTitle: "People used these laws long before they had names",
      timelineLead: `Each step in the story matches something you can do in the model: split a rectangle, swap a grid, regroup a sum.`,
      timeline: [
        { when: "About 300 BCE", what: `Euclid's <i>Elements</i> shows that a rectangle cut into strips equals the strips added up. Today this is called the distributive law. It is the split rectangle in the model's Distributive mode.` },
        { when: "1814", what: `François-Joseph Servois, a teacher at the French artillery school at La Fère, names the commutative and distributive laws in a paper on operators.` },
        { when: "16 October 1843", what: `In Dublin, William Rowan Hamilton finds the quaternions. Their multiplication breaks the commutative law. Turn the grid there, and the answer changes.` },
        { when: "About 1844", what: `Hamilton seems to have made up the word "associative" for the law that lets you regroup, like the Rearrange button in Associative mode.` }
      ],
      history: `<p><b>The problem.</b> People used these laws long before anyone named them. Euclid's <i>Elements</i>, written about 300 BCE, proves with rectangles that a rectangle cut into strips equals the sum of the strips (Book II, Proposition 1), the distributive law in pictures. By the early 1800s mathematicians were applying algebra to new objects, such as operators acting on functions. They needed to know which of the familiar rules still held there and which did not.</p>
<p><b>The solution.</b> In a paper on differential operators in the <i>Annales de mathématiques</i> in November 1814, François-Joseph Servois, who taught mathematics at the artillery school at La Fère, introduced the terms "commutative" and "distributive". On 16 October 1843, in Dublin, William Rowan Hamilton found the quaternions, a number system whose multiplication is not commutative, and carved their defining formula into the stone of Brougham Bridge. Around 1844 he seems to have coined the term "associative" too.</p>
<p><b>What it changed.</b> Once the laws had names, they could be checked instead of assumed, and each new number system could be tested against the list. Quaternions, where order matters, are now used for rotations in computer graphics, computer vision and robotics, and to command the attitude of spacecraft. The same short list justifies every mental-math shortcut and every line of algebra in this course.</p>`,
      sources: [
        { title: "Euclid's Elements, Book II, Proposition 1 (D. E. Joyce, Clark University)", url: "https://mathcs.clarku.edu/~djoyce/java/elements/bookII/propII1.html" },
        { title: "Euclid's Elements (Wikipedia)", url: "https://en.wikipedia.org/wiki/Euclid%27s_Elements" },
        { title: "François Joseph Servois (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Servois/" },
        { title: "Quaternion (Wikipedia)", url: "https://en.wikipedia.org/wiki/Quaternion" },
        { title: "Associative property (Wikipedia)", url: "https://en.wikipedia.org/wiki/Associative_property" }
      ],
      matters: { title: "Why the laws come first", text: `<p>The laws tell you which moves keep an answer <b>the same</b>. That is what makes mental math safe.</p><ul class="why-chips"><li><b>Swap</b> the order</li><li><b>Regroup</b> the numbers</li><li><b>Split</b> a number into parts</li></ul><p>They also tell you which moves are <b>not safe</b>. Subtraction and division break the first two. Algebra uses these laws <b>on every line</b>.</p>` },
      stakes: { title: "Where the laws go wrong", lead: `Use a law where it does not hold, or on only part of a sum, and the answer looks fine but is wrong.`, items: [
        { role: "Multiplying one part", text: `6 × (7 + 3) worked as 6 × 7 + 3 gives $45. The real cost is $60. Five friends get no popcorn.` },
        { role: "Spreadsheet", text: `Profit typed as 4 − 10 instead of 10 − 4 shows a $6 loss for a $6 profit. Order matters in subtraction.` },
        { role: "Regrouping a subtraction", text: `(10 − 4) − 3 is 3. 10 − (4 − 3) is 9.` },
        { role: "Splitting a division", text: `100 ÷ (4 + 1) is 20. 100 ÷ 4 + 100 ÷ 1 is 125.` }
      ], try: { label: "See both parts of 6 × (7 + 3)", lab: "mode:2,a:6,b:7,c:3" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Retail cashier", figure: "$117", scene: `The register is down. Items cost $25, $17 and $75. Pair the round numbers first: <span class="m">(25 + 75) + 17 = 100 + 17 = 117</span>. Total: $117.`, takeaway: "Reordering to make round numbers keeps a mental total fast and accurate." },
        { role: "Software engineer", figure: "8,400 orders", scene: `Four servers each total part of a day's orders: 2,150, 1,980, 2,430 and 1,840. Combining them in pairs, <span class="m">(2,150 + 1,980) + (2,430 + 1,840) = 4,130 + 4,270 = 8,400</span>, gives the same total as adding in a line.`, takeaway: "Associativity is what makes it safe to split a sum across machines." },
        { role: "Compiler engineer", figure: "1 multiply, not 2", try: { label: "Show 4 × (5 + 3)", lab: "mode:2,a:4,b:5,c:3" }, scene: `A program computes <span class="m">4 × <i>x</i> + 4 × <i>y</i></span>. The compiler rewrites it as <span class="m">4 × (<i>x</i> + <i>y</i>)</span>. With <i>x</i> = 5 and <i>y</i> = 3: <span class="m">20 + 12 = 32</span> and <span class="m">4 × 8 = 32</span>.`, takeaway: "One multiplication instead of two, repeated millions of times, makes a program faster." },
        { role: "Accountant", figure: "$8.00 tax", scene: `Line items of $40, $35 and $25 are taxed at 8%. Taxing each line gives <span class="m">3.20 + 2.80 + 2.00 = 8.00</span>. Taxing the subtotal gives <span class="m">0.08 × 100 = 8.00</span>.`, takeaway: "The distributive law guarantees one calculation on the subtotal matches the line-by-line total." },
        { role: "Actuary", figure: "$10,000 a year", scene: `Two policies are priced at the same 2% rate on $350,000 and $150,000 of coverage: <span class="m">0.02 × (350,000 + 150,000) = 0.02 × 500,000 = 10,000</span>, or $10,000 a year.`, takeaway: "Factoring out a shared rate shortens long formulas and cuts arithmetic errors." }
      ]
    },
    build: {
      lede: `Find numbers that pair into round amounts, move and group them together, and split awkward numbers into easy parts.`,
      task: { text: "Rearrange it so the math is quick.", sub: `The same five moves turn a long sum or product into mental math, from a $60 movie night to a $594 order. Try each one in the model above as you go.`,
        figure: { sym: `<span class="c2"><i>a</i></span> × <span class="c3"><i>b</i></span>`, value: "15", cap: "in the model", echo: "value" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows each law with three numbers, <span class="c2"><i>a</i></span>, <span class="c3"><i>b</i></span> and <span class="c4"><i>c</i></span>. In Distributive mode, <span class="c2"><i>a</i></span> multiplies each part of the sum <span class="c3"><i>b</i></span> + <span class="c4"><i>c</i></span>. In the other modes, the colours show which number moved or was regrouped. Press Rearrange to see the move. The value never changes.</p>`,
      keyTry: [{ label: "Make a 9", lab: "mode:2,a:9,b:5,c:4" }, { label: "Make b 8", lab: "mode:2,a:3,b:8,c:4" }, { label: "Make c 1", lab: "mode:2,a:3,b:5,c:1" }],
      objects: ["item", "items", "dollar", "dollars", "quarter", "quarters", "cup", "cups", "jar", "jars", "meal", "meals", "friend", "friends", "ticket", "tickets", "popcorn", "popcorns", "cents"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Numbers like 10, 100 and 1,000 take little effort to add and multiply in your head. Find them first and only small work is left.`,
        `The commutative law says a sum or product is the same in any order. Moving 25 next to 4 changes the effort, not the answer.`,
        `The associative law lets you do the friendly pair first. <span class="m">(25 × 4) × 17</span> gives the same product as working left to right.`,
        `A number near a round one is that round number plus or minus a little. <span class="m">98 = 100 − 2</span>, and multiplying by 100 and by 2 are both quick.`,
        `Multiplying a sum means multiplying every part. In <span class="m">6 × (7 + 3)</span>, both 6 × 7 and 6 × 3 are needed. Drop one and the total is wrong.`
      ],
      stepTry: [{ label: "Add 6 + 9 + 1", lab: "mode:1,a:6,b:9,c:1,rearrange" }, { label: "Turn 4 rows of 9", lab: "mode:0,a:4,b:9,c:4,rearrange" }, null, null, null],
      stepGoal: [null, null,
        { key: "value", eq: 19, text: `Pick <b>Associative</b>. Add 9 + 6 + 4, then press <b>Rearrange</b> to group 6 + 4 first.`, after: `<span class="m">9 + (6 + 4) = 9 + 10 = 19</span>, the same as <span class="m">(9 + 6) + 4 = 15 + 4</span>.`, notYet: `Not yet. Pick Associative, then set a to 9, b to 6 and c to 4.` },
        { key: "value", eq: 96, text: `A case holds 8 rows of 12 jars. Pick <b>Distributive</b> and show 8 × 12 by splitting 12 into 9 + 3.`, after: `<span class="m">8 × 9 + 8 × 3 = 72 + 24 = 96</span> jars.`, notYet: `Not yet. Pick Distributive, set a to 8, and make b + c equal 12.` },
        { key: "value", eq: 70, text: `Show <span class="m">7 × (8 + 2)</span>, then press <b>Rearrange</b> to split it into two pieces.`, after: `<span class="m">7 × 8 + 7 × 2 = 56 + 14 = 70</span>. It is also <span class="m">7 × 10</span>.`, notYet: `Not yet. Pick Distributive, then set a to 7, b to 8 and c to 2.` }],
      matters: { title: "Why a Method Beats Left to Right", text: `<p>Working a long sum or product in the order it is written is slow, and slow work invites slips. A method finds <b>the short path</b> first.</p><ul class="why-chips"><li><b>Pair</b> to make 10 or 100</li><li><b>Group</b> the pair first</li><li><b>Split</b> awkward numbers</li></ul><p>Each move is backed by a law, so the shortcut gives <b>the same answer</b> as the long way.</p>` },
      bridge: `<p>The movie night used two moves: multiply every part, or add each friend's part first to make a round number. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Finding the cost of 6 items at $99", check: { q: `You buy 6 items at $99 each. What is the total?`, parts: [{ label: "dollars", ans: 594 }], hint: `Price each item at $100. Then take back $1 for each of the 6.` }, figure: "6 × $99",
          demo: { kind: "bar", parts: [null, 6], total: 600, labels: ["6 × $99", "6 × $1"], unit: "dollar", alt: "A bar of 600 dollars, six items at 100 dollars. The 6 extra dollars are marked off, and the rest, 594 dollars, is revealed." },
          lines: [{ math: `99 = 100 − 1`, note: "Write the price as a round number minus a little." }, { math: `6 × 100 = 600`, note: "Price all 6 at $100." }, { math: `6 × 1 = 6`, note: "That is $1 too much on each of the 6." }, { math: `600 − 6 = 594`, note: "Take it back: $594." }],
          predict: [null, { ask: `What do 6 items at $100 cost?`, parts: [{ label: "dollars", ans: 600 }], hint: `6 hundreds.` }, null, null],
          link: `Split the awkward price (step 4), then multiply every part (step 5), as the movie night split into tickets and popcorn on the Concept tab.` },
        { task: "Adding a list of prices", check: { q: `Your cart has items at $6, $9, $4 and $1. Pair them to make tens. What is the total?`, parts: [{ label: "dollars", ans: 20 }], hint: `6 pairs with 4. 9 pairs with 1.` }, figure: "make tens",
          demo: { kind: "bar", parts: [6, 4, 9, 1], labels: ["$6", "$4", "$9", "$1"], unit: "dollar", alt: "A bar model with parts of 6, 4, 9 and 1 dollars, side by side so each pair makes 10. A brace shows 20 dollars in all." },
          lines: [{ math: `6 + 9 + 4 + 1`, note: "The prices in the order you picked them up." }, { math: `(6 + 4) + (9 + 1)`, note: "Move 4 next to 6 and 1 next to 9. Order and grouping are free in a sum." }, { math: `10 + 10 = 20`, note: "Two tens make $20." }],
          predict: [null, { ask: `Which price pairs with $9 to make 10?`, parts: [{ label: "dollars", ans: 1 }], hint: `9 + ? = 10.` }, null],
          link: `Move the pair next to each other (step 2) and add it first (step 3), as 7 + 3 made 10 for each friend at the movie night.` },
        { task: "Figuring a 20% tip on the whole bill", check: { q: `Three meals cost $18, $22 and $10. What is a 20% tip on the whole bill?`, parts: [{ label: "tip, $", ans: 10 }], hint: `Add the bill first. 20% is one fifth.` }, figure: "one tip",
          demo: { kind: "bar", parts: [18, 22, 10], labels: ["meal 1", "meal 2", "meal 3"], unit: "dollar", alt: "A bar model with three meals of 18, 22 and 10 dollars. A brace shows the bill, 50 dollars." },
          lines: [{ math: `18 + 22 + 10 = 50`, note: "Add the bill first: $50." }, { math: `20% of 50 = 50 ÷ 5 = 10`, note: "One tip on the whole bill: $10." }, { math: `3.60 + 4.40 + 2.00 = 10.00`, note: "A tip on each meal gives the same $10. The distributive law promises it." }],
          predict: [null, { ask: `The bill is $50. What is 20% of it?`, parts: [{ label: "tip, $", ans: 10 }], hint: `20% is one fifth. 50 ÷ 5.` }, null],
          link: `Taking the rate once on the total is step 5 read from right to left: 0.2 × 18 + 0.2 × 22 + 0.2 × 10 = 0.2 × 50.` },
        { task: "Doubling a recipe", check: { q: `A recipe uses 3 cups of flour, 2 cups of milk and 1 cup of sugar. You double it. How many cups go in the bowl?`, parts: [{ label: "cups", ans: 12 }], hint: `Double each ingredient, then add. Or add first, then double.` }, figure: "× 2",
          demo: { kind: "bar", parts: [6, 4, 2], labels: ["flour", "milk", "sugar"], unit: "cup", alt: "A bar model with 6 cups of flour, 4 cups of milk and 2 cups of sugar. A brace shows 12 cups in all." },
          lines: [{ math: `2 × (3 + 2 + 1)`, note: "Doubling the recipe doubles the whole mix." }, { math: `2 × 3 + 2 × 2 + 2 × 1`, note: "So you double each ingredient." }, { math: `6 + 4 + 2 = 12`, note: "12 cups in all, the same as 2 × 6." }],
          predict: [null, { ask: `How many cups of flour go in now?`, parts: [{ label: "cups of flour", ans: 6 }], hint: `Twice 3 cups.` }, null],
          link: `Doubling every ingredient is step 5. Skip one and the dish changes, like the popcorn left out of 6 × 7 + 3 on the Concept tab.` },
        { task: "Grouping coins into dollars", check: { q: `You have 12 quarters. Group 4 quarters into each dollar. How many dollars is that?`, parts: [{ label: "dollars", ans: 3 }], hint: `4 quarters make $1. How many groups of 4 are in 12?` }, figure: "4 per dollar",
          demo: { kind: "array", rows: 3, cols: 4, unit: "quarter", alt: "Three rows of four quarters light up one row at a time, 4, 8, 12. Each row is one dollar." },
          lines: [{ math: `12 × 25 = (3 × 4) × 25`, note: "12 quarters is 3 groups of 4." }, { math: `= 3 × (4 × 25)`, note: "Regroup so each group of 4 is done first." }, { math: `= 3 × 100 = 300`, note: "Each group is 100 cents, or $1. So 300 cents is $3." }],
          predict: [null, { ask: `How many cents are 4 quarters?`, parts: [{ label: "cents", ans: 100 }], hint: `4 × 25.` }, null],
          try: { label: "Show 3 rows of 4", lab: "mode:0,a:3,b:4,c:4" },
          link: `Group 4 with 25 first (step 3), the same way 25 and 4 make 100 in practice item 3.` }
      ]
    },
    formal: {
      question: { text: "When may you rearrange, exactly?", sub: `You can swap, regroup and split. Here are the words a textbook uses for each move, and how to write the movie night out in full.`,
        figure: { sym: `<i>v</i>`, value: "15", cap: "the value in the model", echo: "value" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i>`, term: "Commutative property", def: `A binary operation ∗ on a set is commutative when <span class="m"><i>a</i> ∗ <i>b</i> = <i>b</i> ∗ <i>a</i></span> for all <i>a</i>, <i>b</i> in the set. Addition and multiplication of real numbers are commutative; subtraction and division are not.`, was: "order does not matter; turning the grid" },
        { c: "c3", sym: `(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>)`, term: "Associative property", def: `An operation ∗ is associative when <span class="m">(<i>a</i> ∗ <i>b</i>) ∗ <i>c</i> = <i>a</i> ∗ (<i>b</i> ∗ <i>c</i>)</span> for all <i>a</i>, <i>b</i>, <i>c</i>. A sum or product of three or more terms then needs no parentheses.`, was: "group in any order" },
        { c: "c4", sym: `<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i>`, term: "Distributive property", def: `Multiplication distributes over addition: <span class="m"><i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i></span> and <span class="m">(<i>b</i> + <i>c</i>)<i>a</i> = <i>ba</i> + <i>ca</i></span>. Since <span class="m"><i>b</i> − <i>c</i> = <i>b</i> + (−<i>c</i>)</span>, it also holds over subtraction.`, was: "split, multiply, then add" },
        { c: "c4", sym: `<i>ab</i> + <i>ac</i> = <i>a</i>(<i>b</i> + <i>c</i>)`, term: "Factoring out a common factor", def: `Rewriting a sum of products that share a factor as that factor times a sum: the distributive property read from right to left.`, was: "adding each friend's 7 + 3 first" },
        { c: "c2", sym: `<i>a</i> + 0 = <i>a</i>, &nbsp;<i>a</i> · 1 = <i>a</i>`, term: "Identity elements", def: `0 is the additive identity and 1 is the multiplicative identity: combining any number with them leaves it unchanged.`, was: "adding 0 or multiplying by 1 changes nothing" },
        { c: "c3", sym: `<i>a</i> + (−<i>a</i>) = 0`, term: "Inverses", def: `The additive inverse −<i>a</i> gives the sum 0. For <i>a</i> ≠ 0 the reciprocal 1/<i>a</i> gives the product 1. Zero has no reciprocal.`, was: "adding −5 undoes adding 5" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>"Multiplication <b>distributes over</b> addition" has a direction. Turn it around and the answer changes.</p><ul class="why-chips"><li><span class="m">2 × (3 + 5) = 2 × 3 + 2 × 5 = 16</span></li><li><span class="m">2 + (3 × 5) = 17</span></li><li><span class="m">(2 + 3) × (2 + 5) = 35</span></li></ul><p>Addition does <b>not</b> distribute over multiplication. Naming the law at each step lets anyone <b>check your work</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here use a law where it does not hold: on subtraction or division, or on only part of a sum.`,
      setupIntro: `<p>The movie night from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a calculation with the laws", items: [
        { say: `<b>Name the quantities.</b> Give each number a letter and say what it stands for, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 6</span> friends, &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 7</span> dollars per ticket, &nbsp;<span class="m"><span class="c4"><i>c</i></span> = 3</span> dollars per popcorn` },
        { say: `<b>Write the expression.</b> The total cost <i>T</i> is the cost of the tickets plus the cost of the popcorn.`, math: `<span class="m"><i>T</i> = <span class="c2"><i>a</i></span><span class="c3"><i>b</i></span> + <span class="c2"><i>a</i></span><span class="c4"><i>c</i></span> = 6 · 7 + 6 · 3</span>` },
        { say: `<b>Justify the rewrite.</b> The distributive law, read from right to left, factors out the common 6.`, math: `<span class="m"><i>ab</i> + <i>ac</i> = <i>a</i>(<i>b</i> + <i>c</i>) &nbsp;⇒&nbsp; <i>T</i> = 6(7 + 3)</span> &nbsp;<span class="dim">(distributive)</span>` },
        { say: `<b>Compute.</b> Evaluate the sum inside the parentheses, then the product.`, math: `<span class="m"><i>T</i> = 6 · 10 = 60</span>` },
        { say: `<b>Check and answer.</b> Compute the other side of the law and state the result with units.`, math: `<span class="m">6 · 7 + 6 · 3 = 42 + 18 = 60</span> &nbsp;→ The movie night costs $60.` }
      ] },
      practiceTip: `Type your answer and press Check. Name the law you use at each step. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can use the laws of arithmetic the formal way.",
      checks: [
        { hint: `Only the parentheses moved. Add either way.`, parts: [{ label: "total, $", ans: 17 }] },
        { hint: `Split 14 into 10 + 4, multiply each part by 6, then add.`, parts: [{ label: "boxes", ans: 84 }] },
        { hint: `Move the 4 next to the 25 first: 25 × 4 = 100.`, parts: [{ label: "pens", ans: 1700 }] },
        { hint: `97 = 100 − 3. Multiply both parts by 8.`, parts: [{ label: "dollars", ans: 776 }] },
        { hint: `Both items are bought 7 times, so factor out the 7: 7 × (11 + 3).`, parts: [{ label: "T, $", ans: 98 }] }
      ]
    }
  },
  prereqWhy: {
    "multiplication": "Three of the laws concern multiplication, and the distributive law links multiplication to addition, so you need fluent products."
  },
  unlocksWhy: {
    "order-ops": "The distributive law explains why parentheses matter, and the associative and commutative laws explain which rearrangements are safe.",
    "exponents": "The rules for exponents, such as multiplying powers with the same base, are proved using the associative and commutative laws."
  },
  beyond: [
    { field: "Algebra I", why: "Expanding, factoring and solving equations are direct applications of these laws." },
    { field: "Abstract algebra", why: "Groups, rings and fields are defined by lists of exactly these properties." },
    { field: "Linear algebra", why: "Vector spaces are defined by these laws, and matrix multiplication shows what happens when commutativity fails." }
  ],
  mistakes: [
    { wrong: `Distributing to only the first term: <span class="m">6(10 + 4) = 60 + 4</span>.`, fix: `Multiply every term inside: <span class="m">6(10 + 4) = 60 + 24 = 84</span>.` },
    { wrong: `Assuming subtraction is associative: <span class="m">(10 − 4) − 3 = 10 − (4 − 3)</span>.`, fix: `The left side is 3 and the right side is 9. Subtraction and division are neither commutative nor associative.` },
    { wrong: `Distributing multiplication over multiplication: <span class="m">2 × (3 × 5) = (2 × 3) × (2 × 5)</span>.`, fix: `Multiplication distributes over addition only. <span class="m">2 × (3 × 5) = 30</span>, while the right side is 60.` },
    { wrong: `Splitting a division over a sum in the divisor: <span class="m">100 ÷ (4 + 1) = 100 ÷ 4 + 100 ÷ 1</span>.`, fix: `The left side is 20 and the right side is 125. Division splits only a sum being divided: <span class="m">(100 + 20) ÷ 4 = 25 + 5 = 30</span>.` }
  ],
  practice: [
    { ctx: "Groceries", q: `You add prices of $5, $3 and $9 as 5 + (3 + 9). A friend adds (5 + 3) + 9. Which law says <span class="m">5 + (3 + 9) = (5 + 3) + 9</span>, and what total do you both get?`, a: `The <b>associative law of addition</b>. Only the grouping changed, and both totals are <b>$17</b>.` },
    { ctx: "Warehouse", q: `A pallet holds 6 rows of 14 boxes. Use the distributive law to find <span class="m">6 × 14</span>, the number of boxes.`, a: `<span class="m">6 × (10 + 4) = 60 + 24 = </span><b>84</b> boxes.` },
    { ctx: "School supplies", q: `A school orders 25 boxes of pens for each of 17 classrooms, and each box holds 4 pens. Find <span class="m">25 × 17 × 4</span> in your head.`, a: `Commute and regroup: <span class="m">(25 × 4) × 17 = 100 × 17 = </span><b>1,700</b> pens.` },
    { ctx: "Shopping", q: `You buy 8 shirts at $97 each. Find <span class="m">8 × 97</span> using the distributive law.`, a: `<span class="m">8 × (100 − 3) = 800 − 24 = </span><b>$776</b>.` },
    { ctx: "Budget", q: `Write an expression with a letter for the unknown, then solve: a team buys 7 lunches at $11 each and 7 drinks at $3 each. Use the distributive law to find the total <i>T</i>.`, a: `<span class="m"><i>T</i> = 7 × 11 + 7 × 3 = 7 × (11 + 3) = 7 × 14 = </span><b>$98</b>.` }
  ],
  origin: `Euclid's Elements (about 300 BCE) proves the distributive law with rectangles in Book II, Proposition 1. François-Joseph Servois introduced the terms "commutative" and "distributive" in 1814. William Rowan Hamilton, who found the quaternions in 1843, a number system whose multiplication is not commutative, seems to have coined "associative" around 1844.`
};
