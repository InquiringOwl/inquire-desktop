window.ARITH = window.ARITH || {};

ARITH["a2-binomial"] = {
  title: "The Binomial Theorem",
  short: "Expand (a + b)ⁿ with Pascal's triangle and C(n, k)",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 4,
  voice: "plain",
  eyebrow: "Sequences & series · Pascal's triangle and expansions",
  hero: `<span class="m">(<i>a</i> + <i>b</i>)<sup>4</sup> = <span class="c2"><i>a</i><sup>4</sup></span> + <span class="c1">4</span><span class="c2"><i>a</i><sup>3</sup></span><span class="c3"><i>b</i></span> + <span class="c1">6</span><span class="c2"><i>a</i><sup>2</sup></span><span class="c3"><i>b</i><sup>2</sup></span> + <span class="c1">4</span><span class="c2"><i>a</i></span><span class="c3"><i>b</i><sup>3</sup></span> + <span class="c3"><i>b</i><sup>4</sup></span></span>`,
  lede: `The binomial theorem expands <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></span> without multiplying it out. The powers of <span class="m c2"><i>a</i></span> count down from <span class="m"><i>n</i></span>, the powers of <span class="m c3"><i>b</i></span> count up from 0, and the coefficients are the binomial coefficients <span class="m c1"><i>C</i>(<i>n</i>, <i>k</i>)</span>, row <span class="m"><i>n</i></span> of Pascal's triangle.`,
  plain: `<p>Multiply out <span class="m">(<i>a</i> + <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>ab</i> + <i>b</i><sup>2</sup></span> and <span class="m">(<i>a</i> + <i>b</i>)<sup>3</sup> = <i>a</i><sup>3</sup> + 3<i>a</i><sup>2</sup><i>b</i> + 3<i>ab</i><sup>2</sup> + <i>b</i><sup>3</sup></span>. Two patterns show up. In every term the two exponents add to <span class="m"><i>n</i></span>: one goes down as the other goes up. And the coefficients 1, 2, 1 and 1, 3, 3, 1 are rows of <b>Pascal's triangle</b>, where each number is the sum of the two above it.</p>
<p>Why does the triangle appear? <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></span> is <span class="m"><i>n</i></span> brackets multiplied together. Each term of the product picks <span class="m"><i>a</i></span> or <span class="m"><i>b</i></span> from every bracket. The coefficient of <span class="m"><i>a</i><sup><i>n</i>−<i>k</i></sup><i>b</i><sup><i>k</i></sup></span> is the number of ways to choose which <span class="m"><i>k</i></span> brackets give a <span class="m"><i>b</i></span>. That count is written <span class="m c1"><i>C</i>(<i>n</i>, <i>k</i>)</span> and read "<span class="m"><i>n</i></span> choose <span class="m"><i>k</i></span>".</p>
<p>When the second term is negative, as in <span class="m">(<i>x</i> − 2)<sup>3</sup></span>, treat it as <span class="m"><i>b</i> = −2</span>. Odd powers of <span class="m"><i>b</i></span> are negative, so the signs alternate: <span class="m"><i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 12<i>x</i> − 8</span>.</p>`,
  formal: `<p>For integers <span class="m">0 ≤ <i>k</i> ≤ <i>n</i></span> the <b>binomial coefficient</b> is <span class="m"><span class="c1"><i>C</i>(<i>n</i>, <i>k</i>)</span> = <span class="fr"><span><i>n</i>!</span><span><i>k</i>!(<i>n</i> − <i>k</i>)!</span></span></span>, for example <span class="m"><i>C</i>(5, 2) = <span class="fr"><span>5!</span><span>2! 3!</span></span> = 10</span>. The <b>binomial theorem</b> states that for every positive integer <span class="m"><i>n</i></span></p>
<div class="display">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> = <span class="sig"><span><i>n</i></span><span>Σ</span><span><i>k</i>=0</span></span><span class="c1"><i>C</i>(<i>n</i>, <i>k</i>)</span> <span class="c2"><i>a</i><sup><i>n</i>−<i>k</i></sup></span><span class="c3"><i>b</i><sup><i>k</i></sup></span> = <span class="c2"><i>a</i><sup><i>n</i></sup></span> + <span class="c1"><i>n</i></span><span class="c2"><i>a</i><sup><i>n</i>−1</sup></span><span class="c3"><i>b</i></span> + ⋯ + <span class="c1"><i>n</i></span><span class="c2"><i>a</i></span><span class="c3"><i>b</i><sup><i>n</i>−1</sup></span> + <span class="c3"><i>b</i><sup><i>n</i></sup></span></div>
<p>The expansion has <span class="m"><i>n</i> + 1</span> terms, and the <span class="m">(<i>k</i> + 1)</span>st term is <span class="m"><span class="c1"><i>C</i>(<i>n</i>, <i>k</i>)</span><span class="c2"><i>a</i><sup><i>n</i>−<i>k</i></sup></span><span class="c3"><i>b</i><sup><i>k</i></sup></span></span>. The coefficients obey Pascal's rule <span class="m"><i>C</i>(<i>n</i>, <i>k</i>) = <i>C</i>(<i>n</i> − 1, <i>k</i> − 1) + <i>C</i>(<i>n</i> − 1, <i>k</i>)</span> and the symmetry <span class="m"><i>C</i>(<i>n</i>, <i>k</i>) = <i>C</i>(<i>n</i>, <i>n</i> − <i>k</i>)</span>. Setting <span class="m"><i>a</i> = <i>b</i> = 1</span> shows that row <span class="m"><i>n</i></span> adds to <span class="m">2<sup><i>n</i></sup></span>: <span class="m">1 + 4 + 6 + 4 + 1 = 16</span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>C</i>(<i>n</i>, <i>k</i>)`, name: "Binomial coefficient", desc: "n!/(k!(n − k)!), entry k of row n of Pascal's triangle (both counted from 0)." },
    { c: "c2", sym: `<i>a</i><sup><i>n</i>−<i>k</i></sup>`, name: "Power of the first term", desc: "Starts at n and goes down by one in each term, ending at 0." },
    { c: "c3", sym: `<i>b</i><sup><i>k</i></sup>`, name: "Power of the second term", desc: "Starts at 0 and goes up by one in each term, ending at n. Its sign goes with b." }
  ],
  steps: { title: "How to expand a binomial power", items: [
    `Name the parts: <span class="m">(<span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span>)<sup><i>n</i></sup></span>, keeping any coefficient and sign with its term. In <span class="m">(2<i>x</i> − 3)<sup>5</sup></span>, <span class="m"><span class="c2"><i>a</i> = 2<i>x</i></span>, <span class="c3"><i>b</i> = −3</span>, <i>n</i> = 5</span>.`,
    `Write row <span class="m"><i>n</i></span> of Pascal's triangle, or compute <span class="m c1"><i>C</i>(<i>n</i>, <i>k</i>)</span> for <span class="m"><i>k</i> = 0, 1, …, <i>n</i></span>.`,
    `Write each term <span class="m"><span class="c1"><i>C</i>(<i>n</i>, <i>k</i>)</span>(<span class="c2"><i>a</i></span>)<sup><i>n</i>−<i>k</i></sup>(<span class="c3"><i>b</i></span>)<sup><i>k</i></sup></span>, with brackets so the coefficient and sign are raised to the power too.`,
    `Simplify each term and add. Check: there are <span class="m"><i>n</i> + 1</span> terms, and the exponents in each term add to <span class="m"><i>n</i></span> (counting the variable's degree).`,
    `For one term only: the <span class="m"><i>r</i></span>th term uses <span class="m"><i>k</i> = <i>r</i> − 1</span>. For the term with a given power of <span class="m"><i>x</i></span>, set the exponent of <span class="m"><i>x</i></span> equal to that power and solve for <span class="m"><i>k</i></span>.`
  ] },
  example: {
    prompt: `Expand <span class="m">(2<i>x</i> − 3)<sup>5</sup></span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>a</i> = 2<i>x</i></span>, &nbsp;<span class="c3"><i>b</i> = −3</span>, &nbsp;<i>n</i> = 5: &nbsp;<span class="c1">1, 5, 10, 10, 5, 1</span></span>`, note: "Row 5 of Pascal's triangle gives C(5, 0) through C(5, 5)." },
      { math: `<span class="m"><span class="c1">1</span><span class="c2">(2<i>x</i>)<sup>5</sup></span> + <span class="c1">5</span><span class="c2">(2<i>x</i>)<sup>4</sup></span><span class="c3">(−3)</span> = 32<i>x</i><sup>5</sup> − 240<i>x</i><sup>4</sup></span>`, note: "k = 0 and k = 1. Raise the 2 as well as the x: (2x)⁴ = 16x⁴, and 5 · 16 · (−3) = −240." },
      { math: `<span class="m"><span class="c1">10</span><span class="c2">(2<i>x</i>)<sup>3</sup></span><span class="c3">(−3)<sup>2</sup></span> + <span class="c1">10</span><span class="c2">(2<i>x</i>)<sup>2</sup></span><span class="c3">(−3)<sup>3</sup></span> = 720<i>x</i><sup>3</sup> − 1080<i>x</i><sup>2</sup></span>`, note: "k = 2 and k = 3: 10 · 8 · 9 = 720 and 10 · 4 · (−27) = −1080." },
      { math: `<span class="m"><span class="c1">5</span><span class="c2">(2<i>x</i>)</span><span class="c3">(−3)<sup>4</sup></span> + <span class="c1">1</span><span class="c3">(−3)<sup>5</sup></span> = 810<i>x</i> − 243</span>`, note: "k = 4 and k = 5: 5 · 2 · 81 = 810 and (−3)⁵ = −243." },
      { math: `<span class="m">32<i>x</i><sup>5</sup> − 240<i>x</i><sup>4</sup> + 720<i>x</i><sup>3</sup> − 1080<i>x</i><sup>2</sup> + 810<i>x</i> − 243</span>`, note: "The signs alternate because the odd powers of −3 are negative." },
      { math: `<span class="m">32 − 240 + 720 − 1080 + 810 − 243 = −1 = (2 − 3)<sup>5</sup> ✓</span>`, note: "Check at x = 1: the coefficients must add to (2 · 1 − 3)⁵." }
    ],
    answer: `<span class="m">(2<i>x</i> − 3)<sup>5</sup> = 32<i>x</i><sup>5</sup> − 240<i>x</i><sup>4</sup> + 720<i>x</i><sup>3</sup></span> <span class="m">− 1080<i>x</i><sup>2</sup> + 810<i>x</i> − 243</span>`
  },
  why: `<p>Expanding <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></span> by repeated multiplication takes many steps and invites sign errors. The binomial theorem writes any term directly, so you can ask for "the term with <span class="m"><i>x</i><sup>3</sup></span>" without the other terms. It also gives quick estimates: <span class="m">1.01<sup>10</sup> = (1 + 0.01)<sup>10</sup> ≈ 1 + 10(0.01) + 45(0.01)<sup>2</sup> = 1.1045</span>, while the true value is 1.10462…</p>
<p>The coefficients <span class="m"><i>C</i>(<i>n</i>, <i>k</i>)</span> count choices: the committees of <span class="m"><i>k</i></span> people from <span class="m"><i>n</i></span>, the routes through a grid of city blocks, the ways to get <span class="m"><i>k</i></span> heads in <span class="m"><i>n</i></span> coin tosses. That is why the same numbers appear in algebra, counting and statistics.</p>`,
  careers: [
    { role: "Statistician", use: "Computes binomial probabilities, which are terms of (p + q)ⁿ with coefficients C(n, k)." },
    { role: "Actuary", use: "Counts the ways a given number of claims can occur among n policies when pricing group insurance." },
    { role: "Software engineer", use: "Counts subsets and combinations, for example the C(n, 2) pairs a matching algorithm must test." },
    { role: "Geneticist", use: "Predicts how many of n offspring inherit a trait, using the expansion of (½ + ½)ⁿ." },
    { role: "Mechanical engineer", use: "Uses (1 + x)ⁿ ≈ 1 + nx for small x to estimate how a small error in a part grows in a power law." },
    { role: "Quality control engineer", use: "Finds the chance that a sample of n items contains k defects from binomial coefficients." }
  ],
  life: [
    "Counting how many different three-topping pizzas a menu allows",
    "Counting the shortest routes through a grid of city blocks",
    "Working out the chances of 2 boys and 2 girls in a family of four",
    "Estimating 1.01¹⁰ by hand from the first three terms",
    "Seeing the 1, 4, 6, 4, 1 pattern in the outcomes of four coin tosses"
  ],
  fields: [
    { name: "Statistics", use: "The binomial distribution assigns each count k the probability C(n, k)pᵏ(1 − p)ⁿ⁻ᵏ." },
    { name: "Computer science", use: "Binomial coefficients count subsets, paths in grids and the cost of choosing pairs in algorithms." },
    { name: "Physics", use: "Approximations such as (1 + x)ⁿ ≈ 1 + nx simplify formulas in relativity and optics for small x." },
    { name: "Genetics", use: "The number of offspring with a trait follows the coefficients of a binomial expansion." }
  ],
  prereqWhy: {
    "a2-sequences": "The theorem is written as a sigma sum over k, and its coefficients n!/(k!(n − k)!) are built from factorials.",
    "a1-poly-mult": "Expanding (a + b)ⁿ is repeated polynomial multiplication; the theorem predicts the result of distributing n brackets."
  },
  unlocksWhy: {
    "pc-counting": "The coefficients C(<i>n</i>, <i>k</i>) and the factorial notation behind them are the combinations formula, which Precalculus now derives from counting choices and links back to Pascal's triangle."
  },
  beyond: [
    { field: "Statistics", why: "The binomial distribution and its mean np come straight from the terms of (p + q)ⁿ." },
    { field: "Discrete Mathematics", why: "Binomial coefficients, Pascal's rule and combinatorial proofs are central to counting." },
    { field: "Calculus I", why: "Expanding (x + h)ⁿ shows that the derivative of xⁿ is nxⁿ⁻¹." },
    { field: "Calculus II", why: "Newton's binomial series extends the theorem to fractional and negative powers as an infinite series." }
  ],
  mistakes: [
    { wrong: `<span class="m">(<i>x</i> + 3)<sup>2</sup> = <i>x</i><sup>2</sup> + 9</span>.`, fix: `Row 2 is 1, 2, 1, so there is a middle term: <span class="m">(<i>x</i> + 3)<sup>2</sup> = <i>x</i><sup>2</sup> + 6<i>x</i> + 9</span>. In general <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup> ≠ <i>a</i><sup><i>n</i></sup> + <i>b</i><sup><i>n</i></sup></span>.` },
    { wrong: `The first term of <span class="m">(2<i>x</i> + 1)<sup>3</sup></span> is <span class="m">2<i>x</i><sup>3</sup></span>.`, fix: `The whole first term is cubed: <span class="m">(2<i>x</i>)<sup>3</sup> = 8<i>x</i><sup>3</sup></span>.` },
    { wrong: `Using <span class="m"><i>k</i> = 4</span> for the 4th term of <span class="m">(<i>x</i> − 2<i>y</i>)<sup>7</sup></span>.`, fix: `Counting starts at <span class="m"><i>k</i> = 0</span>, so the 4th term has <span class="m"><i>k</i> = 3</span>.` },
    { wrong: `<span class="m">(<i>x</i> − 2)<sup>3</sup> = <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> − 12<i>x</i> − 8</span>.`, fix: `Use <span class="m"><i>b</i> = −2</span>: <span class="m">3<i>x</i>(−2)<sup>2</sup> = +12<i>x</i></span>. The signs alternate: <span class="m"><i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 12<i>x</i> − 8</span>.` }
  ],
  practice: [
    { q: `Compute <span class="m"><i>C</i>(7, 3)</span>.`, a: `<span class="m"><span class="fr"><span>7!</span><span>3! 4!</span></span> = <span class="fr"><span>7 · 6 · 5</span><span>3 · 2 · 1</span></span> = 35</span>.` },
    { q: `Expand <span class="m">(<i>x</i> + 2)<sup>4</sup></span>.`, a: `Row 4 is 1, 4, 6, 4, 1: <span class="m"><i>x</i><sup>4</sup> + 4<i>x</i><sup>3</sup>(2) + 6<i>x</i><sup>2</sup>(4) + 4<i>x</i>(8) + 16 = <i>x</i><sup>4</sup> + 8<i>x</i><sup>3</sup> + 24<i>x</i><sup>2</sup> + 32<i>x</i> + 16</span>.` },
    { q: `Find the 4th term of <span class="m">(<i>x</i> − 2<i>y</i>)<sup>7</sup></span>.`, a: `<span class="m"><i>k</i> = 3</span>: <span class="m"><i>C</i>(7, 3)<i>x</i><sup>4</sup>(−2<i>y</i>)<sup>3</sup> = 35 · <i>x</i><sup>4</sup> · (−8<i>y</i><sup>3</sup>) = −280<i>x</i><sup>4</sup><i>y</i><sup>3</sup></span>.` },
    { q: `Find the coefficient of <span class="m"><i>x</i><sup>6</sup></span> in <span class="m">(<i>x</i><sup>2</sup> + <span class="fr"><span>3</span><span><i>x</i></span></span>)<sup>6</sup></span>.`, a: `The general term is <span class="m"><i>C</i>(6, <i>k</i>)(<i>x</i><sup>2</sup>)<sup>6−<i>k</i></sup>(3/<i>x</i>)<sup><i>k</i></sup> = <i>C</i>(6, <i>k</i>)3<sup><i>k</i></sup><i>x</i><sup>12−3<i>k</i></sup></span>. <span class="m">12 − 3<i>k</i> = 6</span> gives <span class="m"><i>k</i> = 2</span>, so the coefficient is <span class="m">15 · 9 = 135</span>.` }
  ],
  origin: `Al-Karaji described the triangle of coefficients around 1000 CE, and Yang Hui printed it in China in 1261, crediting Jia Xian of the 11th century. Blaise Pascal's Traité du triangle arithmétique (written 1654, published 1665) proved its properties systematically. Isaac Newton extended the theorem to fractional and negative exponents around 1665.`
};
