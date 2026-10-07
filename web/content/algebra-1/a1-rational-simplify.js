window.ARITH = window.ARITH || {};

ARITH["a1-rational-simplify"] = {
  title: "Rational Expressions: Simplify, Multiply & Divide",
  short: "Factor, note excluded values, cancel common factors",
  grade: "Grade 9–10 · college Elementary Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational expressions · algebraic fractions",
  hero: `<span class="m"><span class="fr"><span><span class="c2">(<i>x</i> − 3)</span><span class="c1">(<i>x</i> + 3)</span></span><span>(<i>x</i> − 2)<span class="c1">(<i>x</i> + 3)</span></span></span> = <span class="fr"><span><span class="c2"><i>x</i> − 3</span></span><span><i>x</i> − 2</span></span>, &nbsp;<span class="c3"><i>x</i> ≠ −3, 2</span></span>`,
  lede: `A rational expression is a fraction of polynomials. To simplify it, factor top and bottom, record the <span class="c3">excluded values</span> that make the denominator zero, and cancel <span class="c1">common factors</span>.`,
  plain: `<p>A rational expression works like a fraction with polynomials in it, such as <span class="m">(<i>x</i><sup>2</sup> − 9)/(<i>x</i><sup>2</sup> + <i>x</i> − 6)</span>. The rules you know for fractions still hold. You simplify <span class="m">12/18</span> by writing it as <span class="m">(2 · 6)/(3 · 6)</span> and cancelling the 6. You simplify a rational expression the same way, except that the factors are binomials like <span class="m">(<i>x</i> + 3)</span>.</p>
<p>There is one new thing to watch. Division by zero is undefined, so any value of <span class="m"><i>x</i></span> that makes the original denominator zero is not allowed. These are the <b>excluded values</b>. Find them before you cancel, because once a factor is cancelled you can no longer see it. On a graph, a cancelled factor leaves a hole.</p>
<p>You can only cancel <b>factors</b>, pieces that are multiplied. In <span class="m">(<i>x</i> + 3)/(<i>x</i> + 5)</span> nothing cancels, because the 3 and 5 are added, not multiplied. Multiplying and dividing follow fraction rules: multiply across, and to divide, multiply by the reciprocal. Factor everything first so the cancelling is easy.</p>`,
  formal: `<p>A <b>rational expression</b> is a quotient <span class="m"><i>P</i>/<i>Q</i></span> of polynomials with <span class="m"><i>Q</i> ≠ 0</span>. Its domain is all real numbers except the <b>excluded values</b>, the zeros of <span class="m"><i>Q</i></span>. It is in <b>simplest form</b> when numerator and denominator have no common factor other than ±1.</p>
<div class="display"><b>Equivalent fractions</b>: &nbsp;<span class="fr"><span><i>ac</i></span><span><i>bc</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span>, &nbsp; <i>b</i> ≠ 0, <i>c</i> ≠ 0<br><b>Multiplication</b>: &nbsp;<span class="fr"><span><i>a</i></span><span><i>b</i></span></span> · <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>ac</i></span><span><i>bd</i></span></span> &nbsp;&nbsp; <b>Division</b>: &nbsp;<span class="fr"><span><i>a</i></span><span><i>b</i></span></span> ÷ <span class="fr"><span><i>c</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>a</i></span><span><i>b</i></span></span> · <span class="fr"><span><i>d</i></span><span><i>c</i></span></span>, &nbsp; <i>c</i> ≠ 0<br><b>Opposites</b>: &nbsp;<span class="fr"><span><i>a</i> − <i>b</i></span><span><i>b</i> − <i>a</i></span></span> = −1, &nbsp; <i>a</i> ≠ <i>b</i></div>
<p>The simplified expression equals the original only on the original domain, so the excluded values are stated with the answer. In division, the excluded values also include the zeros of the divisor's numerator <span class="m"><i>c</i></span>, since dividing by a rational expression equal to zero is undefined.</p>`,
  legend: [
    { c: "c2", sym: `<i>P</i>(<i>x</i>)`, name: "Numerator", desc: "The polynomial on top, written in factored form before simplifying." },
    { c: "c1", sym: `(<i>x</i> − <i>a</i>)`, name: "Common factor", desc: "A factor that appears in both the numerator and the denominator. It divides out to 1." },
    { c: "c3", sym: `<i>x</i> ≠ …`, name: "Excluded values", desc: "Values that make the original denominator zero. They stay excluded after simplifying and show as holes or asymptotes on the graph." }
  ],
  steps: { title: "How to simplify, multiply or divide rational expressions", items: [
    `For division, first rewrite as multiplication by the reciprocal of the divisor.`,
    `Factor every numerator and denominator completely: GCF, trinomials, special patterns.`,
    `List the <span class="c3">excluded values</span>: every value that makes any original denominator zero (and, for division, the divisor's numerator zero).`,
    `Cancel <span class="c1">common factors</span> between any numerator and any denominator. Watch for opposites such as <span class="m">(<i>x</i> − 2)</span> and <span class="m">(2 − <i>x</i>)</span>, which give −1.`,
    `Multiply the remaining factors. It is usually best to leave the answer factored.`,
    `State the result together with its excluded values.`
  ] },
  example: {
    prompt: `Heat loss from a tank depends on its surface-area-to-volume ratio. For a closed cylinder of radius <span class="m"><i>r</i></span> and height <span class="m"><i>h</i></span>, simplify <span class="m"><span class="fr"><span>2π<i>r</i><sup>2</sup> + 2π<i>rh</i></span><span>π<i>r</i><sup>2</sup><i>h</i></span></span></span> and evaluate it for <span class="m"><i>r</i> = 2</span> m, <span class="m"><i>h</i> = 5</span> m.`,
    lines: [
      { math: `<span class="m"><span class="fr"><span><span class="c2">2π<i>r</i>(<i>r</i> + <i>h</i>)</span></span><span>π<i>r</i> · <i>rh</i></span></span></span>`, note: "Factor 2πr out of the numerator and write the denominator as πr times rh." },
      { math: `<span class="m"><span class="c3"><i>r</i> ≠ 0, &nbsp;<i>h</i> ≠ 0</span></span>`, note: "Excluded values: the denominator is zero if r or h is zero." },
      { math: `<span class="m"><span class="fr"><span>2<span class="c1">π<i>r</i></span>(<i>r</i> + <i>h</i>)</span><span><span class="c1">π<i>r</i></span> · <i>rh</i></span></span> = <span class="fr"><span>2(<i>r</i> + <i>h</i>)</span><span><i>rh</i></span></span></span>`, note: "Cancel the common factor πr." },
      { math: `<span class="m"><span class="fr"><span>2(2 + 5)</span><span>2 · 5</span></span> = <span class="fr"><span>14</span><span>10</span></span> = 1.4</span>`, note: "Substitute r = 2 and h = 5. The units are square metres per cubic metre, that is, per metre." },
      { math: `<span class="m"><span class="fr"><span>8π + 20π</span><span>20π</span></span> = <span class="fr"><span>28π</span><span>20π</span></span> = 1.4 ✓</span>`, note: "Check with the original expression." }
    ],
    answer: `The ratio simplifies to <span class="m"><span class="fr"><span>2(<i>r</i> + <i>h</i>)</span><span><i>rh</i></span></span></span> for <span class="m"><i>r</i>, <i>h</i> ≠ 0</span>, which is <span class="m">1.4</span> per metre for this tank.`
  },
  why: `<p>Rates, averages and ratios of changing quantities are rational expressions: average cost per item as production grows, time for a trip as speed changes, concentration as a solution is diluted. Simplifying them reveals how the quantity really behaves, as in the example, where the ratio shows that bigger tanks lose heat more slowly relative to their volume.</p>
<p>Every later topic with algebraic fractions depends on this: adding rational expressions, solving rational equations, graphing rational functions with holes and asymptotes, and evaluating limits in calculus by factoring and cancelling. The habit of stating excluded values is the habit of respecting a function's domain.</p>`,
  careers: [
    { role: "Chemical engineer", use: "Simplifies surface-area-to-volume and concentration ratios when sizing reactors and tanks." },
    { role: "Cost accountant", use: "Writes average cost per unit as a rational expression in the number of units produced and simplifies it to compare production levels." },
    { role: "Electrical engineer", use: "Simplifies transfer functions, which are ratios of polynomials, to analyse filters and control circuits." },
    { role: "Biologist", use: "Uses the surface-area-to-volume ratio 3/r of a spherical cell to explain limits on cell size." },
    { role: "Optometrist", use: "Works with lens formulas that combine focal lengths as rational expressions." }
  ],
  life: [
    "Comparing the cost per person of a group rental as the group size changes",
    "Understanding why a big pot of soup cools more slowly than a small cup",
    "Working out how travel time changes if you drive faster",
    "Scaling a recipe where every quantity is divided by the same number of servings"
  ],
  fields: [
    { name: "Engineering", use: "Transfer functions in control and signal processing are rational expressions that are factored and simplified." },
    { name: "Biology", use: "Surface-area-to-volume ratios explain heat loss, cell size and gas exchange." },
    { name: "Economics", use: "Average cost and average revenue are rational functions of output." },
    { name: "Physics", use: "Formulas for resistors in parallel, lenses and gravitational fields contain algebraic fractions to simplify." }
  ],
  prereqWhy: {
    "a1-factor-special": "Simplifying depends on factoring numerators and denominators completely, and differences of squares and perfect squares are the most common patterns there.",
    "fraction-ops": "Multiplying, dividing and reducing rational expressions use exactly the same rules as numerical fractions."
  },
  unlocksWhy: {
    "a2-rational-func": "Finding holes means factoring and cancelling common factors while keeping the excluded values, exactly the work of simplifying a rational expression.",
    "a1-rational-add": "Adding and subtracting rational expressions requires factoring denominators, building a common denominator and simplifying the result, all learned here.",
    "pc-limit-laws": "A limit that gives 0/0 at direct substitution is evaluated by factoring the numerator and denominator and cancelling the common factor, then substituting, which is the simplifying skill learned here."
  },
  beyond: [
    { field: "Precalculus", why: "Graphs of rational functions have holes where common factors cancel and vertical asymptotes at the remaining excluded values." },
    { field: "Calculus I", why: "Limits of the form 0/0 are evaluated by factoring and cancelling a common factor." },
    { field: "Calculus II", why: "Partial fraction decomposition of rational expressions is a key integration technique." },
    { field: "Electrical engineering", why: "Circuit transfer functions are rational expressions whose factored form shows the system's poles and zeros." }
  ],
  mistakes: [
    { wrong: `Cancelling terms instead of factors: <span class="m"><span class="fr"><span><i>x</i> + 3</span><span><i>x</i> + 5</span></span> = <span class="fr"><span>3</span><span>5</span></span></span>.`, fix: `Only common factors cancel. <span class="m">(<i>x</i> + 3)/(<i>x</i> + 5)</span> is already in simplest form.` },
    { wrong: `Dropping excluded values that cancel: <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i> + 3</span></span> = <i>x</i> − 3</span> for all <span class="m"><i>x</i></span>.`, fix: `The original denominator is zero at <span class="m"><i>x</i> = −3</span>, so the result is <span class="m"><i>x</i> − 3</span> with <span class="m"><i>x</i> ≠ −3</span>.` },
    { wrong: `Missing opposite factors: leaving <span class="m"><span class="fr"><span><i>x</i> − 2</span><span>2 − <i>x</i></span></span></span> unsimplified, or calling it 1.`, fix: `<span class="m">2 − <i>x</i> = −(<i>x</i> − 2)</span>, so the quotient is <span class="m">−1</span> for <span class="m"><i>x</i> ≠ 2</span>.` }
  ],
  practice: [
    { q: `Simplify <span class="m"><span class="fr"><span>5<i>x</i> + 15</span><span><i>x</i><sup>2</sup> − 9</span></span></span>.`, a: `<span class="m"><span class="fr"><span>5(<i>x</i> + 3)</span><span>(<i>x</i> + 3)(<i>x</i> − 3)</span></span> = <span class="fr"><span>5</span><span><i>x</i> − 3</span></span></span>, <span class="m"><i>x</i> ≠ −3, 3</span>.` },
    { q: `Simplify <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 5<i>x</i> + 6</span><span>4 − <i>x</i><sup>2</sup></span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> − 2)(<i>x</i> − 3)</span><span>(2 − <i>x</i>)(2 + <i>x</i>)</span></span> = <span class="fr"><span>−(<i>x</i> − 3)</span><span><i>x</i> + 2</span></span> = <span class="fr"><span>3 − <i>x</i></span><span><i>x</i> + 2</span></span></span>, <span class="m"><i>x</i> ≠ −2, 2</span>.` },
    { q: `Multiply <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 4</span><span><i>x</i><sup>2</sup> + 5<i>x</i> + 6</span></span> · <span class="fr"><span><i>x</i> + 3</span><span><i>x</i> − 2</span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> + 2)(<i>x</i> − 2)(<i>x</i> + 3)</span><span>(<i>x</i> + 2)(<i>x</i> + 3)(<i>x</i> − 2)</span></span> = 1</span>, for <span class="m"><i>x</i> ≠ −3, −2, 2</span>.` },
    { q: `Divide <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 25</span><span>2<i>x</i> + 6</span></span> ÷ <span class="fr"><span><i>x</i> − 5</span><span><i>x</i><sup>2</sup> + 6<i>x</i> + 9</span></span></span>.`, a: `<span class="m"><span class="fr"><span>(<i>x</i> + 5)(<i>x</i> − 5)</span><span>2(<i>x</i> + 3)</span></span> · <span class="fr"><span>(<i>x</i> + 3)<sup>2</sup></span><span><i>x</i> − 5</span></span> = <span class="fr"><span>(<i>x</i> + 5)(<i>x</i> + 3)</span><span>2</span></span></span>, for <span class="m"><i>x</i> ≠ −3, 5</span>.` }
  ]
};
