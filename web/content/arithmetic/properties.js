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
<p>The <b>distributive</b> law links multiplying and adding: multiplying a sum gives the same result as multiplying each part and adding. Six cases of 14 bottles hold <span class="m">6 × 14 = 6 × 10 + 6 × 4 = 60 + 24 = 84</span> bottles. Two more laws complete the list. <b>Identity</b>: adding 0 or multiplying by 1 changes nothing. <b>Inverse</b>: adding −5 undoes adding 5, and multiplying by 1/5 undoes multiplying by 5.</p>
<p>Subtraction and division do not obey the commutative or associative laws. <span class="m">10 − 4</span> is 6, while <span class="m">4 − 10</span> is −6. This lesson is about knowing which moves are safe.</p>`,
  formal: `<p>For all numbers <span class="m c2"><i>a</i></span>, <span class="m c3"><i>b</i></span>, <span class="m c4"><i>c</i></span> (whole numbers, integers, rationals or reals):</p>
<div class="display">Commutative: &nbsp;<i>a</i> + <i>b</i> = <i>b</i> + <i>a</i> &nbsp;·&nbsp; <i>ab</i> = <i>ba</i><br>Associative: &nbsp;(<i>a</i> + <i>b</i>) + <i>c</i> = <i>a</i> + (<i>b</i> + <i>c</i>) &nbsp;·&nbsp; (<i>ab</i>)<i>c</i> = <i>a</i>(<i>bc</i>)<br>Distributive: &nbsp;<i>a</i>(<i>b</i> + <i>c</i>) = <i>ab</i> + <i>ac</i><br>Identity: &nbsp;<i>a</i> + 0 = <i>a</i> &nbsp;·&nbsp; <i>a</i> · 1 = <i>a</i><br>Inverse: &nbsp;<i>a</i> + (−<i>a</i>) = 0 &nbsp;·&nbsp; <i>a</i> · <span class="fr"><span>1</span><span><i>a</i></span></span> = 1 for <i>a</i> ≠ 0</div>
<p>The additive inverse <span class="m">−<i>a</i></span> exists only once the integers ℤ are available, and the multiplicative inverse (<b>reciprocal</b>) <span class="m">1/<i>a</i></span> only in the rationals ℚ or reals ℝ; 0 has no reciprocal. A set with two operations obeying all of these laws is called a <b>field</b>; ℚ and ℝ are fields, while ℤ lacks multiplicative inverses and the whole numbers lack both kinds of inverse. The <b>zero property</b> <span class="m"><i>a</i> · 0 = 0</span> follows from the distributive, identity and additive inverse laws.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First number", desc: "In the distributive law, the multiplier applied to each part of the sum." },
    { c: "c3", sym: `<i>b</i>`, name: "Second number", desc: "The first part of the sum, or the second term being swapped or regrouped." },
    { c: "c4", sym: `<i>c</i>`, name: "Third number", desc: "The second part of the sum, or the third term in a regrouping." }
  ],
  steps: { title: "How to use the laws for mental math", items: [
    `Look for pairs that make friendly numbers, like 25 and 4 (100), or 7 and 3 (10).`,
    `Use the commutative law to move those numbers next to each other.`,
    `Use the associative law to group the friendly pair first.`,
    `For a product with an awkward factor like 98 or 14, write it as a sum or difference of easy numbers: <span class="m">98 = 100 − 2</span>.`,
    `Use the distributive law to multiply each part, then combine.`
  ] },
  example: {
    prompt: `Concert tickets cost $49 each. You buy 8 for a group. Work out the total in your head.`,
    lines: [
      { math: `<span class="c2">8</span> × 49 = <span class="c2">8</span> × (<span class="c3">50</span> − <span class="c4">1</span>)`, note: "Rewrite 49 as a friendly number minus a small one." },
      { math: `= <span class="c2">8</span> × <span class="c3">50</span> − <span class="c2">8</span> × <span class="c4">1</span>`, note: "Distributive law (it works over subtraction too)." },
      { math: `= 400 − 8`, note: "Each product is easy." },
      { math: `= 392`, note: "Subtract." },
      { math: `8 × 49 = 392 <span class="dim">(column check)</span>`, note: "Standard multiplication gives the same result." }
    ],
    answer: `The 8 tickets cost <span class="m">$392</span>.`
  },
  why: `<p>These laws are why mental math works. Pricing 6 items at $99 as <span class="m">$600 − $6 = $594</span>, adding a list in the order that makes tens, and taking a discount off a whole bill instead of line by line all rely on them. Without them, every calculation would have to be done in the order it was written.</p>
<p>They also mark the moves that are not safe. Swapping the order of a subtraction, or splitting a product as if it were a sum, gives a wrong answer that can look reasonable. A spreadsheet formula that subtracts in the wrong order turns a profit into a loss without any warning.</p>
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
    concept: {
      heading: "What are the laws of arithmetic?",
      lede: `Why can you add a list of prices in any order, or price 6 items at $99 as $600 minus $6? A few laws say which rearrangements are safe.`,
      history: `<p><b>The problem.</b> People used these rules long before anyone named them; Egyptian scribes already swapped the order of factors to make multiplication easier. By the early 1800s mathematicians were applying algebra to new objects, such as operators acting on functions, and they needed to know which of the familiar rules still held there and which did not.</p>
<p><b>The solution.</b> In a paper on differential operators in the <i>Annales de mathématiques</i> in 1814, François-Joseph Servois, who taught mathematics at French artillery schools, introduced the terms "commutative" and "distributive". On 16 October 1843, walking along the Royal Canal in Dublin, William Rowan Hamilton found the quaternions, a number system whose multiplication is not commutative. Around 1844 he seems to have coined the term "associative" too.</p>
<p><b>What it changed.</b> Once the laws had names, they could be checked instead of assumed, and each new number system could be tested against the list. Quaternions, where order matters, are now used to compute three-dimensional rotations in computer graphics, robotics and spacecraft control. The same short list justifies every mental-math shortcut and every line of algebra in this course.</p>`,
      sources: [
        { title: "Commutative property (Wikipedia)", url: "https://en.wikipedia.org/wiki/Commutative_property" },
        { title: "François Joseph Servois (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Servois/" },
        { title: "Associative property (Wikipedia)", url: "https://en.wikipedia.org/wiki/Associative_property" },
        { title: "Quaternion (Wikipedia)", url: "https://en.wikipedia.org/wiki/Quaternion" }
      ],
      examples: [
        { role: "Retail cashier", scene: `The register is down. Items cost $25, $17 and $75. Pair the round numbers first: <span class="m">(25 + 75) + 17 = 100 + 17 = 117</span>. Total: <b>$117</b>.`, takeaway: "Reordering to make round numbers keeps a mental total fast and accurate." },
        { role: "Software engineer", scene: `Four servers each total part of a day's orders: 2,150, 1,980, 2,430 and 1,840. Combining them in pairs, <span class="m">(2,150 + 1,980) + (2,430 + 1,840) = 4,130 + 4,270 = 8,400</span>, gives the same total as adding in a line.`, takeaway: "Associativity is what makes it safe to split a sum across machines." },
        { role: "Compiler engineer", scene: `A program computes <span class="m">4 × <i>x</i> + 4 × <i>y</i></span>. The compiler rewrites it as <span class="m">4 × (<i>x</i> + <i>y</i>)</span>. With <i>x</i> = 12 and <i>y</i> = 9: <span class="m">48 + 36 = 84</span> and <span class="m">4 × 21 = 84</span>.`, takeaway: "One multiplication instead of two, repeated millions of times, makes a program faster." },
        { role: "Accountant", scene: `Line items of $40, $35 and $25 are taxed at 8%. Taxing each line gives <span class="m">3.20 + 2.80 + 2.00 = 8.00</span>; taxing the subtotal gives <span class="m">0.08 × 100 = 8.00</span>.`, takeaway: "The distributive law guarantees one calculation on the subtotal matches the line-by-line total." },
        { role: "Actuary", scene: `Two policies are priced at the same 2% rate on $350,000 and $150,000 of coverage: <span class="m">0.02 × (350,000 + 150,000) = 0.02 × 500,000 = 10,000</span>, or <b>$10,000</b> a year.`, takeaway: "Factoring out a shared rate shortens long formulas and cuts arithmetic errors." }
      ]
    },
    build: {
      lede: `Find numbers that pair into round amounts, move and group them together, and split awkward factors into round parts.`,
      intro: `<p>The model above shows the laws with three numbers, <span class="c2"><i>a</i></span>, <span class="c3"><i>b</i></span> and <span class="c4"><i>c</i></span>. In the distributive law <span class="c2"><i>a</i></span> multiplies each part of the sum <span class="c3"><i>b</i></span> + <span class="c4"><i>c</i></span>; in the other laws the same colours show which number moved or was regrouped.</p>`,
      stepWhy: [
        `Numbers like 10, 100 and 1,000 take little effort to add and multiply in your head, so finding them first leaves only small work for the rest.`,
        `The commutative law guarantees the total or product is the same in any order, so moving 25 next to 4 changes the effort and not the answer.`,
        `The associative law lets you do the friendly pair first: <span class="m">(25 × 4) × 17</span> gives the same product as working left to right.`,
        `A number near a round one is that round number plus or minus a little. <span class="m">98 = 100 − 2</span>, and multiplying by 100 and by 2 are both quick.`,
        `Multiplying a sum or difference means multiplying every part. In <span class="m">8 × (50 − 1)</span> both 8 × 50 and 8 × 1 are needed; drop one and the total is wrong.`
      ],
      bridge: `<p>The concert tickets used one pattern: write an awkward price as a round number minus a little, multiply each part, then combine. The same moves turn many everyday sums and products into mental math.</p>`,
      tasks: [
        { task: "Pricing several items at $99", link: `Write the price as a round number minus a little, as 49 became 50 − 1 in the worked example, then use step 5: <span class="m">6 × 99 = 600 − 6 = 594</span>.` },
        { task: "Adding a list of prices", link: `Use steps 2 and 3: move the amounts that make 10 or 100 next to each other and add them first, as 25 and 4 were paired in practice item 3.` },
        { task: "Taking tax or a tip on a whole bill", link: `Apply the rate once to the subtotal instead of to each item. It is the distributive law of step 5, read from right to left.` },
        { task: "Doubling a recipe", link: `Doubling each ingredient is the distributive law. Skip one ingredient and the dish changes, like dropping the 8 × 1 in the worked example.` },
        { task: "Counting coins", link: `Group four quarters into each dollar first, the same <span class="m">25 × 4 = 100</span> pairing as practice item 3, then count what is left.` }
      ]
    },
    formal: {
      setup: { title: "Writing a calculation with the laws", items: [
        { say: `<b>Name the quantities.</b> Give each number a letter and say what it stands for, with its units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 8</span> tickets, &nbsp;price <span class="m"><span class="c3"><i>b</i></span> − <span class="c4"><i>c</i></span> = 50 − 1 = 49</span> dollars` },
        { say: `<b>Write the expression.</b> The total cost <i>T</i> is the number of tickets times the price.`, math: `<span class="m"><i>T</i> = <span class="c2"><i>a</i></span>(<span class="c3"><i>b</i></span> − <span class="c4"><i>c</i></span>)</span>` },
        { say: `<b>Justify the rewrite.</b> The distributive law works over subtraction because subtracting is adding the additive inverse.`, math: `<span class="m"><i>a</i>(<i>b</i> − <i>c</i>) = <i>a</i>(<i>b</i> + (−<i>c</i>)) = <i>ab</i> + <i>a</i>(−<i>c</i>) = <i>ab</i> − <i>ac</i></span>` },
        { say: `<b>Name the law at each step.</b> In a chain of rewrites, each equals sign should be backed by one law.`, math: `<span class="m">(25 × 17) × 4 = 25 × (17 × 4) = 25 × (4 × 17) = (25 × 4) × 17 = 1,700</span> &nbsp;<span class="dim">(associative, commutative, associative)</span>` },
        { say: `<b>Substitute, compute, answer.</b> Check against the direct product and state the result with units.`, math: `<span class="m"><i>T</i> = 8 × 50 − 8 × 1 = 400 − 8 = 392 = 8 × 49</span> &nbsp;→ The tickets cost $392.` }
      ] }
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
    { ctx: "Groceries", q: `You add prices of $5, $3 and $9 as 5 + (3 + 9). A friend adds (5 + 3) + 9. Which law says <span class="m">5 + (3 + 9) = (5 + 3) + 9</span>, so you both get $17?`, a: `The <b>associative law of addition</b>. Only the grouping changed, and both totals are $17.` },
    { ctx: "Warehouse", q: `A pallet holds 6 rows of 14 boxes. Use the distributive law to find <span class="m">6 × 14</span>, the number of boxes.`, a: `<span class="m">6 × (10 + 4) = 60 + 24 = </span><b>84</b> boxes.` },
    { ctx: "School supplies", q: `A school orders 25 boxes of pens for each of 17 classrooms, and each box holds 4 pens. Find <span class="m">25 × 17 × 4</span> in your head.`, a: `Commute and regroup: <span class="m">(25 × 4) × 17 = 100 × 17 = </span><b>1,700</b> pens.` },
    { ctx: "Shopping", q: `You buy 8 shirts at $97 each. Find <span class="m">8 × 97</span> using the distributive law.`, a: `<span class="m">8 × (100 − 3) = 800 − 24 = </span><b>$776</b>.` },
    { ctx: "Budget", q: `Write an expression with a letter for the unknown, then solve: a team buys 7 lunches at $11 each and 7 drinks at $3 each. Use the distributive law to find the total <i>T</i>.`, a: `<span class="m"><i>T</i> = 7 × 11 + 7 × 3 = 7 × (11 + 3) = 7 × 14 = </span><b>$98</b>.` }
  ],
  origin: `François-Joseph Servois introduced the terms "commutative" and "distributive" in 1814. William Rowan Hamilton introduced "associative" in the 1840s, while working with quaternions, a number system whose multiplication is not commutative.`
};
