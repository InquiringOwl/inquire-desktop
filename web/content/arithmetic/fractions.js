window.ARITH = window.ARITH || {};

ARITH["fractions"] = {
  title: "Fractions & Equivalence",
  short: "Parts of a whole, and many names for one amount",
  grade: "Grades 3–4",
  hours: 8,
  voice: "plain",
  eyebrow: "Rational numbers · fractions",
  hero: `<span class="m"><span class="fr"><span class="c1"><i>n</i></span><span class="c2"><i>d</i></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span> × <span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span> × <span class="c4"><i>k</i></span></span></span></span>`,
  lede: `A fraction names equal parts of a whole. Multiplying top and bottom by the same number changes the name, not the amount.`,
  plain: `<p>A <b>fraction</b> names part of a whole that has been cut into equal pieces. Cut a pizza into 8 equal slices and eat 3, and you have eaten <span class="m"><span class="fr"><span>3</span><span>8</span></span></span> of it. The bottom number, the <b>denominator</b>, says how many equal pieces make the whole. The top number, the <b>numerator</b>, says how many of those pieces you have.</p>
<p>The same amount can have many names. On a tape measure, the mark for <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> inch is also the mark for <span class="m"><span class="fr"><span>6</span><span>8</span></span></span> and <span class="m"><span class="fr"><span>12</span><span>16</span></span></span> inch, because the smaller marks cut each quarter into 2 or 4 pieces. Fractions that name the same amount are <b>equivalent</b>. You get one from another by multiplying or dividing the top and bottom by the same number.</p>
<p>A fraction is also a division: <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> is what each person gets when 3 pizzas are shared equally by 4 people. A fraction is in <b>simplest form</b> when the top and bottom have no common factor except 1.</p>`,
  formal: `<p>For integers <i>a</i> and <i>b</i> with <span class="m"><i>b</i> ≠ 0</span>, the <b>fraction</b> <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> denotes the quotient <span class="m"><i>a</i> ÷ <i>b</i></span>: the unique number that gives <i>a</i> when multiplied by <i>b</i>. Numbers expressible this way form the <b>rational numbers</b> ℚ.</p>
<div class="display"><span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span> = <span class="fr"><span><i>c</i></span><span><i>d</i></span></span>  ⟺  <i>ad</i> = <i>bc</i></span>  <span class="dim">(b, d ≠ 0)</span><br><span class="m"><span class="fr"><span><span class="c1"><i>n</i></span></span><span><span class="c2"><i>d</i></span></span></span> = <span class="fr"><span><span class="c1"><i>n</i></span><span class="c4"><i>k</i></span></span><span><span class="c2"><i>d</i></span><span class="c4"><i>k</i></span></span></span></span>  for any <span class="m"><i>k</i> ≠ 0</span></div>
<p>A fraction <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> with <span class="m"><i>b</i> &gt; 0</span> is in <b>lowest terms</b> when <span class="m">gcd(<i>a</i>, <i>b</i>) = 1</span>. Every rational number has exactly one such representation.</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "Numerator", desc: "How many equal parts you have. The top number." },
    { c: "c2", sym: `<i>d</i>`, name: "Denominator", desc: "How many equal parts make one whole. The bottom number, never zero." },
    { c: "c4", sym: `<i>k</i>`, name: "Scale factor", desc: "The number both parts are multiplied or divided by to get an equivalent fraction. In the lab it splits every piece into k smaller pieces." }
  ],
  steps: { title: "How to simplify and compare fractions", items: [
    `Find the greatest common factor of the numerator and denominator.`,
    `Divide both by it. The result is in simplest form.`,
    `To compare two fractions, rewrite both with a common denominator, or cross-multiply.`,
    `With equal denominators, the fraction with the larger numerator is larger.`,
    `When cross-multiplying <span class="m"><span class="fr"><span><i>a</i></span><span><i>b</i></span></span></span> and <span class="m"><span class="fr"><span><i>c</i></span><span><i>d</i></span></span></span> with positive denominators, compare <span class="m"><i>ad</i></span> with <span class="m"><i>bc</i></span>.`
  ] },
  example: {
    prompt: `In one office, 18 of 24 employees prefer a four-day work week. In another, 20 of 25 do. Write each as a fraction in simplest form and decide which office has the larger share in favour.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span class="c1">18</span><span class="c2">24</span></span> = <span class="fr"><span>18 ÷ <span class="c4">6</span></span><span>24 ÷ <span class="c4">6</span></span></span> = <span class="fr"><span>3</span><span>4</span></span></span>`, note: "The GCF of 18 and 24 is 6." },
      { math: `<span class="m"><span class="fr"><span class="c1">20</span><span class="c2">25</span></span> = <span class="fr"><span>20 ÷ <span class="c4">5</span></span><span>25 ÷ <span class="c4">5</span></span></span> = <span class="fr"><span>4</span><span>5</span></span></span>`, note: "The GCF of 20 and 25 is 5." },
      { math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>15</span><span>20</span></span>,  <span class="fr"><span>4</span><span>5</span></span> = <span class="fr"><span>16</span><span>20</span></span></span>`, note: "Rename both with the common denominator 20." },
      { math: `<span class="m"><span class="fr"><span>15</span><span>20</span></span> &lt; <span class="fr"><span>16</span><span>20</span></span></span>`, note: "Same size pieces, so compare numerators." }
    ],
    answer: `The first office is at <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> and the second at <span class="m"><span class="fr"><span>4</span><span>5</span></span></span>. The second office has the larger share in favour.`
  },
  why: `<p>Fractions turn up whenever something is shared or measured: recipes, tape measures, medication doses, time ("a quarter past"), discounts and survey results. If you cannot tell that 12/16 inch and 3/4 inch are the same mark, a cut comes out wrong. If you cannot compare 3/4 with 4/5, you cannot tell which of two results or offers is better.</p>
<p>Fractions are the first step into the rational numbers. Ratios, percents, probability, slope and every algebraic expression with division depend on them. Adding and subtracting fractions, the next lessons, rest entirely on renaming fractions as equivalent ones with a common denominator.</p>`,
  careers: [
    { role: "Carpenter", use: "Reads tape measures marked in sixteenths and recognizes that 12/16 inch is the same as 3/4 inch." },
    { role: "Chef", use: "Scales recipes and swaps measuring cups, knowing that two 1/4 cups equal 1/2 cup." },
    { role: "Pharmacy technician", use: "Works with partial tablets and fractional doses such as 1/2 of a 50 mg tablet." },
    { role: "Machinist", use: "Converts drill and wrench sizes like 5/16 inch to find the nearest matching tool." },
    { role: "Pollster", use: "Reports survey responses as fractions of the sample and compares groups of different sizes." }
  ],
  life: [
    "Reading a ruler or tape measure",
    "Following and adjusting a recipe",
    "Sharing a pizza or a bill fairly",
    "Understanding \"half off\" or \"a third more\"",
    "Telling time with quarter and half hours"
  ],
  fields: [
    { name: "Chemistry", use: "Mole ratios and concentrations are expressed and simplified as fractions." },
    { name: "Music", use: "Note lengths are fractions of a whole note, and time signatures look like fractions." },
    { name: "Probability", use: "The chance of an event is the fraction of equally likely outcomes where it happens." },
    { name: "Construction", use: "Plans and materials are measured in fractional inches." }
  ],
  layers: {
    concept: {
      heading: "What are fractions?",
      lede: `Fractions answer two questions: how much of a whole is this, and are two amounts with different names really the same?`,
      history: `<p><b>The problem.</b> Food, wages and land rarely divide into whole units. Scribes who handed out rations had to split loaves among workers and write each share down so it could be checked.</p>
<p><b>The solution.</b> The Egyptian Rhind Mathematical Papyrus, copied by the scribe Ahmes about 1550 BCE from an older text, opens with problems that share 1, 2, 6, 7, 8 and 9 loaves among 10 men. Egyptians wrote such shares as sums of unit fractions: 7 loaves among 10 men gives each man 2/3 + 1/30. In India, Brahmagupta (about 628 CE) wrote a numerator above its denominator, without a bar. The horizontal bar is first attested in the work of al-Hassar, active around 1200, and Fibonacci used the same notation in the 13th century.</p>
<p><b>What it changed.</b> Writing any part as one number over another made shares quick to compare, simplify and combine by fixed rules. It is the notation you read today on a tape measure, a measuring cup, a medicine label or a poll, and it led to the decimal fractions that Simon Stevin promoted for everyday calculation in 1585.</p>`,
      sources: [
        { title: "Rhind Mathematical Papyrus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus" },
        { title: "Fraction: history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fraction" }
      ],
      examples: [
        { role: "Carpenter", scene: `A plan calls for a <span class="m"><span class="fr"><span>3</span><span>4</span></span></span>-inch groove and the tape is marked in sixteenths. Multiplying top and bottom by 4 gives <span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>12</span><span>16</span></span></span>, so the cut goes at the 12th sixteenth mark.`, takeaway: "Renaming a fraction lets you read it on the scale you have." },
        { role: "Chef", scene: `A recipe needs <span class="m"><span class="fr"><span>1</span><span>2</span></span></span> cup of oil and only the <span class="m"><span class="fr"><span>1</span><span>4</span></span></span> cup measure is clean. Since <span class="m"><span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>2</span><span>4</span></span></span>, fill the <span class="m"><span class="fr"><span>1</span><span>4</span></span></span> cup twice.`, takeaway: "Equivalent fractions let any set of measures do the job." },
        { role: "Pharmacy technician", scene: `As an example, an order calls for 25 mg and the tablets are 50 mg each. The dose is <span class="m"><span class="fr"><span>25</span><span>50</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, half a tablet.`, takeaway: "Simplest form turns a ratio of milligrams into something you can hand a patient." },
        { role: "Machinist", scene: `Is a <span class="m"><span class="fr"><span>5</span><span>16</span></span></span>-inch drill bigger than a <span class="m"><span class="fr"><span>9</span><span>32</span></span></span>-inch one? Rename: <span class="m"><span class="fr"><span>5</span><span>16</span></span> = <span class="fr"><span>10</span><span>32</span></span> &gt; <span class="fr"><span>9</span><span>32</span></span></span>, so yes, by <span class="m"><span class="fr"><span>1</span><span>32</span></span></span> inch.`, takeaway: "A common denominator settles which tool is larger at a glance." },
        { role: "Pollster", scene: `In one sample, 240 of 600 favour a measure; in another, 210 of 500 do. Simplify: <span class="m"><span class="fr"><span>240</span><span>600</span></span> = <span class="fr"><span>2</span><span>5</span></span> = <span class="fr"><span>20</span><span>50</span></span></span> and <span class="m"><span class="fr"><span>210</span><span>500</span></span> = <span class="fr"><span>21</span><span>50</span></span></span>, so the second group's share is higher.`, takeaway: "Fractions compare groups of different sizes fairly." }
      ]
    },
    build: {
      lede: `To simplify, divide top and bottom by their greatest common factor. To compare, give the fractions a common denominator and compare the tops.`,
      intro: `<p>The model above draws the fraction <span class="c1"><i>n</i></span>/<span class="c2"><i>d</i></span> as an amber bar cut into <i>d</i> equal pieces, with <i>n</i> of them shaded. The violet bar cuts every piece into <span class="c4"><i>k</i></span> smaller ones: more, smaller pieces, and the same shaded length. When the fraction can be simplified, a green bar shows it in simplest form. The dot on the number line marks the amount, and it stays put when you change <i>k</i>.</p>`,
      stepWhy: [
        `Simplifying undoes the largest possible scale factor in one move, and the GCF is that factor. A smaller common factor also works but leaves more steps.`,
        `Dividing top and bottom by the same number merges groups of small pieces into bigger ones. The amount stays the same and only the name changes. After dividing by the GCF, no common factor is left.`,
        `Fractions with different denominators count different-size pieces, like comparing 3 quarters with 4 fifths. A common denominator puts both in pieces of the same size.`,
        `When the pieces are the same size, more pieces means more. This is the only case where comparing numerators alone is safe.`,
        `Cross-multiplying renames both fractions over the denominator <i>bd</i> without writing it: <span class="m"><i>a</i>/<i>b</i> = <i>ad</i>/<i>bd</i></span> and <span class="m"><i>c</i>/<i>d</i> = <i>bc</i>/<i>bd</i></span>. With positive denominators, the larger new numerator is the larger fraction.`
      ],
      bridge: `<p>The office survey follows the pattern of most fraction questions: reduce each share so it reads at a glance, then rename both over a common denominator before you compare. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Reading a ruler or tape measure", link: `Rename between halves, quarters, eighths and sixteenths by multiplying top and bottom (12/16 = 3/4), the same move that wrote 3/4 as 15/20.` },
        { task: "Following and adjusting a recipe", link: `Swap measuring cups by equivalence: 2/4 cup = 1/2 cup, the same kind of reduction as 18/24 divided by its GCF 6.` },
        { task: "Sharing a pizza or a bill fairly", link: `A fraction is a division: 3 pizzas for 4 people is 3/4 each. Simplify a share like 6/8 the way 20/25 became 4/5 (step 2).` },
        { task: "Understanding \"half off\" or \"a third more\"", link: `To compare two discounts, rename them over a common denominator as in step 3: a third off is 4/12 and a quarter off is 3/12, so a third off saves more.` },
        { task: "Telling time with quarter and half hours", link: `An hour has 60 minutes, so 45 minutes is 45/60 = 3/4 hour, the same simplest form the first office reached from 18/24.` }
      ]
    },
    formal: {
      setup: { title: "Writing a fraction comparison", items: [
        { say: `<b>Name the quantities.</b> Write each share as a fraction: part over whole, with what is being counted.`, math: `<span class="m"><i>p</i><sub>1</sub> = <span class="fr"><span><span class="c1">18</span></span><span><span class="c2">24</span></span></span></span>, <span class="m"><i>p</i><sub>2</sub> = <span class="fr"><span><span class="c1">20</span></span><span><span class="c2">25</span></span></span></span> (employees in favour over employees)` },
        { say: `<b>Reduce to lowest terms.</b> Divide by the gcd so that each fraction has exactly one standard name.`, math: `<span class="m">gcd(18, 24) = 6 ⟹ <i>p</i><sub>1</sub> = <span class="fr"><span>3</span><span>4</span></span></span>; <span class="m">gcd(20, 25) = 5 ⟹ <i>p</i><sub>2</sub> = <span class="fr"><span>4</span><span>5</span></span></span>` },
        { say: `<b>Justify the renaming.</b> The rule n/d = nk/dk (k ≠ 0) gives a common denominator without changing either amount.`, math: `<span class="m"><span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>3 · <span class="c4">5</span></span><span>4 · <span class="c4">5</span></span></span> = <span class="fr"><span>15</span><span>20</span></span></span>, <span class="m"><span class="fr"><span>4</span><span>5</span></span> = <span class="fr"><span>4 · <span class="c4">4</span></span><span>5 · <span class="c4">4</span></span></span> = <span class="fr"><span>16</span><span>20</span></span></span>` },
        { say: `<b>Compare.</b> Over a common denominator compare numerators, or cross-multiply directly.`, math: `<span class="m">3 · 5 = 15 &lt; 16 = 4 · 4 ⟹ <span class="fr"><span>3</span><span>4</span></span> &lt; <span class="fr"><span>4</span><span>5</span></span></span>` },
        { say: `<b>Answer in a sentence.</b> Say which share is larger and give both values.`, math: `<span class="m"><i>p</i><sub>1</sub> &lt; <i>p</i><sub>2</sub></span> → The second office has the larger share in favour, 4/5 against 3/4.` }
      ] }
    }
  },
  prereqWhy: {
    "division": "A fraction is a division, so a/b means a ÷ b.",
    "factors": "Simplifying needs a common factor of the numerator and denominator."
  },
  unlocksWhy: {
    "mixed-numbers": "A mixed number rewrites a fraction larger than 1 as a whole number plus a proper fraction.",
    "ratios": "A ratio a : b is often written and compared as the fraction a/b.",
    "fraction-ops": "Adding and subtracting fractions depends on rewriting them as equivalent fractions with a common denominator.",
    "decimals": "A decimal is a fraction whose denominator is a power of 10."
  },
  beyond: [
    { field: "Algebra I", why: "Rational expressions and solving equations with fractions use equivalence and cross-multiplication." },
    { field: "Probability & statistics", why: "Probabilities and relative frequencies are fractions between 0 and 1." },
    { field: "Abstract algebra", why: "The construction of ℚ from ℤ uses exactly the rule a/b = c/d when ad = bc." }
  ],
  mistakes: [
    { wrong: `<span class="m"><span class="fr"><span>2</span><span>3</span></span></span> = <span class="m"><span class="fr"><span>3</span><span>4</span></span></span> because 1 was added to both`, fix: `Equivalent fractions come from multiplying or dividing, never adding. <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> = <span class="m"><span class="fr"><span>4</span><span>6</span></span></span>.` },
    { wrong: `"1/8 is bigger than 1/4 because 8 is bigger than 4"`, fix: `A larger denominator means smaller pieces. <span class="m"><span class="fr"><span>1</span><span>8</span></span> &lt; <span class="fr"><span>1</span><span>4</span></span></span>.` },
    { wrong: `Cancelling digits: <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>4</span></span></span> by crossing out the 2s`, fix: `Cancel only common factors. <span class="m"><span class="fr"><span>12</span><span>24</span></span> = <span class="fr"><span>1</span><span>2</span></span></span>, dividing both by 12.` },
    { wrong: `Comparing counts from groups of different sizes: "30 of 50 people is more than 18 of 24, because 30 &gt; 18"`, fix: `Compare the shares. <span class="m"><span class="fr"><span>30</span><span>50</span></span> = <span class="fr"><span>3</span><span>5</span></span> = <span class="fr"><span>12</span><span>20</span></span></span> and <span class="m"><span class="fr"><span>18</span><span>24</span></span> = <span class="fr"><span>3</span><span>4</span></span> = <span class="fr"><span>15</span><span>20</span></span></span>, so 18 of 24 is the larger share.` }
  ],
  practice: [
    { ctx: "Customers", q: `2 in every 5 customers chose the new design. Out of 15 customers, how many is that? Fill in the blank: <span class="m"><span class="fr"><span>2</span><span>5</span></span> = <span class="fr"><span>?</span><span>15</span></span></span>`, a: `<b>6</b>. The denominator was multiplied by 3, so the numerator is 2 × 3 = 6: 6 of 15 customers.` },
    { ctx: "Quality control", q: `42 of 56 parts passed inspection. Write the passing share in simplest form.`, a: `<span class="m"><b><span class="fr"><span>3</span><span>4</span></span></b></span>. The GCF of 42 and 56 is 14: 42 ÷ 14 = 3 and 56 ÷ 14 = 4.` },
    { ctx: "Sports", q: `One player made 9 of 12 free throws and another made 15 of 20. Is <span class="m"><span class="fr"><span>9</span><span>12</span></span></span> equivalent to <span class="m"><span class="fr"><span>15</span><span>20</span></span></span>, so that they shot equally well?`, a: `<b>Yes</b>. Cross products 9 × 20 = 180 and 12 × 15 = 180 are equal. Both simplify to 3/4.` },
    { ctx: "Kitchen", q: `Three jars are <span class="m"><span class="fr"><span>5</span><span>8</span></span></span>, <span class="m"><span class="fr"><span>2</span><span>3</span></span></span> and <span class="m"><span class="fr"><span>7</span><span>12</span></span></span> full. Order them from least to most full.`, a: `<span class="m"><span class="fr"><span>7</span><span>12</span></span> &lt; <span class="fr"><span>5</span><span>8</span></span> &lt; <span class="fr"><span>2</span><span>3</span></span></span>. With denominator 24 they are 14/24, 15/24 and 16/24.` },
    { ctx: "Measuring", q: `Write an equation with a letter for the unknown, then solve: on a tape measure marked in sixteenths, which mark <i>n</i>/16 is the same as <span class="m"><span class="fr"><span>5</span><span>8</span></span></span> inch?`, a: `<span class="m"><span class="fr"><span><i>n</i></span><span>16</span></span> = <span class="fr"><span>5</span><span>8</span></span></span>. Cross-multiplying, <span class="m">8<i>n</i> = 80</span>, so <span class="m"><i>n</i> = 10</span>: the <b>10/16</b> mark.` }
  ],
  origin: `The Egyptian Rhind Mathematical Papyrus (about 1550 BCE) works with unit fractions such as 1/3 and 1/10. The horizontal fraction bar was used by Arabic mathematicians, including al-Hassar in the 12th century, and spread in Europe through Fibonacci's <i>Liber Abaci</i> (1202).`
};
