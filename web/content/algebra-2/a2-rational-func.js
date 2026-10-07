window.ARITH = window.ARITH || {};

ARITH["a2-rational-func"] = {
  title: "Rational Functions: Domain, Holes & Vertical Asymptotes",
  short: "Where a denominator is zero: a hole or a vertical asymptote",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Rational functions · domain and breaks",
  hero: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span><span class="c1">(<i>x</i> − 3)</span>(<i>x</i> + 3)</span><span><span class="c1">(<i>x</i> − 3)</span><span class="c4">(<i>x</i> + 1)</span></span></span>: &nbsp;<span class="c1">hole at <i>x</i> = 3</span>, &nbsp;<span class="c4"><i>x</i> = −1</span></span>`,
  lede: `A <b>rational function</b> is a quotient of two polynomials. Its graph breaks wherever the denominator is zero. A factor that cancels leaves a single missing point, a <span class="c1">hole</span>. A factor that stays in the denominator makes the graph shoot up or down along a <span class="c4">vertical asymptote</span>.`,
  plain: `<p>Take <span class="m"><i>y</i> = 1/<i>x</i></span>. When <span class="m"><i>x</i></span> is small, say 0.01, the output is 100. At 0.001 it is 1000. The closer <span class="m"><i>x</i></span> gets to 0, the larger the output, and at 0 itself there is no output at all. The graph runs up alongside the line <span class="m"><i>x</i> = 0</span> without touching it. That line is a <span class="c4">vertical asymptote</span>.</p>
<p>Every rational function has the same kind of trouble spots: the values of <span class="m"><i>x</i></span> that make the denominator zero. They are left out of the domain. What the graph does near them depends on the numerator.</p>
<p>If the numerator is also zero there because the same factor appears on top and bottom, the factor cancels. The graph is then the simpler graph with just one point missing. You draw that point as an open circle, a <span class="c1">hole</span>. If the factor does not cancel, the top stays nonzero while the bottom shrinks to zero, so the output grows without bound. That is a vertical asymptote.</p>
<p>Near a vertical asymptote the graph goes to <span class="m">+∞</span> or <span class="m">−∞</span> on each side. Whether the two sides match depends on how many times the factor appears in the denominator.</p>`,
  formal: `<p>A <b>rational function</b> is <span class="m"><i>f</i>(<i>x</i>) = <i>p</i>(<i>x</i>)/<i>q</i>(<i>x</i>)</span> with polynomials <span class="m"><i>p</i></span> and <span class="m"><i>q</i></span>, <span class="m"><i>q</i></span> not the zero polynomial. Its <b>domain</b> is every real number except the zeros of <span class="m"><i>q</i></span>. Factor both polynomials and cancel common factors to write <span class="m"><i>f</i></span> in <b>lowest terms</b>, keeping the excluded values. For each excluded value <span class="m"><i>a</i></span>:</p>
<div class="display"><span class="c1"><i>x</i> − <i>a</i></span> cancels completely &nbsp;⇒&nbsp; <span class="c1">removable discontinuity (hole)</span> at <span class="m">(<i>a</i>, value of the reduced form at <i>a</i>)</span><br><span class="c4"><i>x</i> − <i>a</i></span> remains in the reduced denominator &nbsp;⇒&nbsp; <span class="c4">vertical asymptote <i>x</i> = <i>a</i></span></div>
<p>Arrow notation describes the behaviour: <span class="m"><i>x</i> → <i>a</i><sup>−</sup></span> means <span class="m"><i>x</i></span> approaches <span class="m"><i>a</i></span> from the left, and <span class="m"><i>f</i>(<i>x</i>) → ∞</span> means the outputs increase without bound. If <span class="m">(<i>x</i> − <i>a</i>)</span> appears to an odd power in the reduced denominator, <span class="m"><i>f</i></span> changes sign across <span class="m"><i>a</i></span>, so one side goes to <span class="m">∞</span> and the other to <span class="m">−∞</span>. To an even power, both sides go the same way. The <span class="c5">zeros</span> of <span class="m"><i>f</i></span> are the zeros of the reduced numerator that are in the domain.</p>
<p>The <b>reciprocal functions</b> <span class="m"><i>y</i> = 1/<i>x</i></span> and <span class="m"><i>y</i> = 1/<i>x</i><sup>2</sup></span> both have the vertical asymptote <span class="m"><i>x</i> = 0</span> and the horizontal asymptote <span class="m"><i>y</i> = 0</span>. For <span class="m">1/<i>x</i></span> the range is <span class="m">(−∞, 0) ∪ (0, ∞)</span>; for <span class="m">1/<i>x</i><sup>2</sup></span> it is <span class="m">(0, ∞)</span>, since both sides go up. The transformation <span class="m"><i>y</i> = <i>a</i>/(<i>x</i> − <i>h</i>) + <i>k</i></span> moves the asymptotes to <span class="m"><span class="c4"><i>x</i> = <i>h</i></span></span> and <span class="m"><i>y</i> = <i>k</i></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>f</i>(<i>x</i>)`, name: "Rational function", desc: "A polynomial divided by a polynomial. The graph breaks where the denominator is zero." },
    { c: "c4", sym: `<i>x</i> = <i>a</i>`, name: "Vertical asymptote", desc: "A zero of the reduced denominator. The outputs go to ∞ or −∞ as x approaches a." },
    { c: "c1", sym: `○`, name: "Hole", desc: "A removable discontinuity. A factor x − a cancels from top and bottom, so one point is missing." },
    { c: "c5", sym: `<i>f</i>(<i>x</i>) = 0`, name: "Zero", desc: "A zero of the reduced numerator that is in the domain. The graph meets the x-axis there." }
  ],
  steps: {
    title: "How to find the domain, holes and vertical asymptotes",
    items: [
      `Factor the numerator and the denominator completely.`,
      `Set each denominator factor equal to zero. Those values are excluded; write the domain in interval notation.`,
      `Cancel common factors to get the reduced form, and keep the excluded values beside it.`,
      `A factor that cancelled completely gives a <span class="c1">hole</span>. Substitute its <span class="m"><i>x</i></span>-value into the reduced form to find the missing point.`,
      `A factor left in the reduced denominator gives a <span class="c4">vertical asymptote</span>. Use its power, or a test value on each side, to see where the graph goes.`,
      `Find the <span class="c5">zeros</span> from the reduced numerator and the <span class="m"><i>y</i></span>-intercept from <span class="m"><i>f</i>(0)</span>, if 0 is in the domain.`
    ]
  },
  example: {
    prompt: `Find the domain, holes, vertical asymptotes, zeros and <span class="m"><i>y</i></span>-intercept of <span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i><sup>2</sup> − 2<i>x</i> − 3</span></span></span>, and describe the behaviour near the asymptote.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span><span class="c1">(<i>x</i> − 3)</span>(<i>x</i> + 3)</span><span><span class="c1">(<i>x</i> − 3)</span><span class="c4">(<i>x</i> + 1)</span></span></span></span>`, note: "Factor the difference of squares on top and the trinomial on the bottom." },
      { math: `<span class="m">(−∞, −1) ∪ (−1, 3) ∪ (3, ∞)</span>`, note: "The denominator is zero at x = 3 and x = −1, so both are excluded from the domain." },
      { math: `<span class="m"><span class="c2"><i>f</i>(<i>x</i>)</span> = <span class="fr"><span><i>x</i> + 3</span><span><i>x</i> + 1</span></span>, &nbsp; <i>x</i> ≠ 3</span>`, note: "Cancel the common factor x − 3, keeping x = 3 out of the domain." },
      { math: `<span class="m"><span class="fr"><span>3 + 3</span><span>3 + 1</span></span> = <span class="fr"><span>3</span><span>2</span></span> &nbsp;⇒&nbsp; <span class="c1">hole at (3, <span class="fr"><span>3</span><span>2</span></span>)</span></span>`, note: "x − 3 cancelled completely, so the graph has a hole. Its height comes from the reduced form." },
      { math: `<span class="m"><span class="c4"><i>x</i> = −1</span></span>`, note: "x + 1 remains in the reduced denominator, so x = −1 is a vertical asymptote." },
      { math: `<span class="m"><i>f</i>(−1.01) = <span class="fr"><span>1.99</span><span>−0.01</span></span> = −199, &nbsp; <i>f</i>(−0.99) = <span class="fr"><span>2.01</span><span>0.01</span></span> = 201</span>`, note: "Test values on each side: as x → −1⁻, f(x) → −∞; as x → −1⁺, f(x) → ∞. The power of x + 1 is odd, so the signs differ." },
      { math: `<span class="m"><span class="c5"><i>x</i> = −3</span>, &nbsp; <i>f</i>(0) = <span class="fr"><span>3</span><span>1</span></span> = 3</span>`, note: "The reduced numerator is zero at x = −3, which is in the domain. The y-intercept is (0, 3)." }
    ],
    answer: `Domain <span class="m">(−∞, −1) ∪ (−1, 3) ∪ (3, ∞)</span>; <span class="c1">hole at <span class="m">(3, <span class="fr"><span>3</span><span>2</span></span>)</span></span>; <span class="c4">vertical asymptote <span class="m"><i>x</i> = −1</span></span> with <span class="m"><i>f</i>(<i>x</i>) → −∞</span> on the left and <span class="m">∞</span> on the right; <span class="c5">zero <span class="m"><i>x</i> = −3</span></span>; <span class="m"><i>y</i></span>-intercept <span class="m">(0, 3)</span>.`
  },
  why: `<p>Rational functions describe quantities that are a ratio: cost per item, time per trip, concentration per litre, resistance in a parallel circuit. The excluded values are where the ratio stops making sense, and the vertical asymptotes show what happens as you get close: average cost grows without bound as the number of items shrinks to zero, and the time a trip takes grows without bound as the speed drops toward zero.</p>
<p>Telling a hole from an asymptote matters in practice. A hole is a single missing value that a formula happens to skip, while an asymptote is a real blow-up. Engineers check for both before trusting a model near the edge of its domain.</p>`,
  careers: [
    { role: "Cost analyst", use: "Models average cost C(x)/x per unit and explains why it rises without bound as production falls toward zero." },
    { role: "Pharmacologist", use: "Works with concentration curves of the form a·t/(t² + b) and checks where a model's denominator would vanish." },
    { role: "Electrical engineer", use: "Analyses transfer functions, ratios of polynomials whose denominator zeros (poles) mark where a circuit's response blows up." },
    { role: "Optical engineer", use: "Uses the lens equation, where the image distance has a vertical asymptote when the object sits at the focal length." },
    { role: "Control systems engineer", use: "Cancels common factors in transfer functions and watches for the hidden pole-zero cancellations that act like holes." },
    { role: "Data scientist", use: "Guards ratio features such as clicks per view against division by zero before training a model." }
  ],
  life: [
    "Average cost per person of a shared rental falls as more people join and grows without bound as the group shrinks",
    "Travel time for a fixed distance grows without bound as the speed drops toward zero",
    "A camera lens cannot focus on an object placed exactly at its focal length",
    "A spreadsheet formula that divides by a cell shows an error when that cell is zero"
  ],
  fields: [
    { name: "Physics", use: "Lens and mirror equations, and forces that grow like 1/r², have vertical asymptotes at the singular point." },
    { name: "Economics", use: "Average cost and price elasticity models are rational functions with excluded values." },
    { name: "Electrical engineering", use: "Transfer functions are rational, and their poles are the vertical asymptotes of the response." },
    { name: "Chemistry", use: "Reaction-rate models such as Michaelis-Menten kinetics are rational functions of concentration." }
  ],
  prereqWhy: {
    "a1-rational-simplify": "Finding holes means factoring and cancelling common factors while keeping the excluded values, exactly the work of simplifying a rational expression.",
    "a2-transformations": "The graphs y = a/(x − h) + k and y = a/(x − h)² + k are the reciprocal parents 1/x and 1/x² shifted, stretched and reflected."
  },
  unlocksWhy: {
    "a2-variation": "Inverse variation y = k/x and inverse-square laws y = k/x² are reciprocal functions with a vertical asymptote at x = 0.",
    "a2-rational-asym": "Horizontal and slant asymptotes complete the picture: with holes and vertical asymptotes they give the full graph of a rational function.",
    "trig-other-graphs": "Tangent, secant and cotangent have vertical asymptotes where a denominator is zero and the numerator is not, as in a rational function.",
    "pc-partial-fractions": "Writing a rational function as a numerator over a factored denominator, and dividing when the degree is too high, is the setup for splitting it into a sum of simpler fractions."
  },
  beyond: [
    { field: "Calculus I", why: "Limits make arrow notation precise: one-sided limits describe vertical asymptotes, and a hole is a removable discontinuity that a limit can fill." },
    { field: "Precalculus", why: "Partial fractions and the graphs of tangent and secant, which have vertical asymptotes where cosine is zero." },
    { field: "Physics", why: "Inverse-square forces and lens equations are rational functions with a singular point." }
  ],
  mistakes: [
    { wrong: `Reading vertical asymptotes from the unreduced denominator: saying <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i><sup>2</sup> − 2<i>x</i> − 3</span></span></span> has asymptotes at <span class="m"><i>x</i> = 3</span> and <span class="m"><i>x</i> = −1</span>.`, fix: `Cancel first. The factor <span class="m"><i>x</i> − 3</span> cancels, so <span class="m"><i>x</i> = 3</span> is a hole at <span class="m">(3, 3/2)</span>. Only <span class="m"><i>x</i> = −1</span> is an asymptote.` },
    { wrong: `Treating every shared factor as a hole: <span class="m"><span class="fr"><span><i>x</i> − 2</span><span>(<i>x</i> − 2)<sup>2</sup></span></span></span> has a hole at <span class="m"><i>x</i> = 2</span>.`, fix: `It reduces to <span class="m"><span class="fr"><span>1</span><span><i>x</i> − 2</span></span></span>. A factor <span class="m"><i>x</i> − 2</span> is still in the denominator, so <span class="m"><i>x</i> = 2</span> is a vertical asymptote.` },
    { wrong: `Forgetting the domain after cancelling: writing <span class="m"><span class="fr"><span><i>x</i><sup>2</sup> − 9</span><span><i>x</i><sup>2</sup> − 2<i>x</i> − 3</span></span> = <span class="fr"><span><i>x</i> + 3</span><span><i>x</i> + 1</span></span></span> with no condition and computing <span class="m"><i>f</i>(3) = 3/2</span>.`, fix: `The two sides agree only for <span class="m"><i>x</i> ≠ 3</span>. The original <span class="m"><i>f</i>(3)</span> is undefined; <span class="m">3/2</span> is the height of the hole.` }
  ],
  practice: [
    { q: `Find the domain of <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span><i>x</i> + 5</span><span><i>x</i><sup>2</sup> − 16</span></span></span>.`, a: `<span class="m"><i>x</i><sup>2</sup> − 16 = (<i>x</i> − 4)(<i>x</i> + 4) = 0</span> at <span class="m"><i>x</i> = ±4</span>. Domain <span class="m">(−∞, −4) ∪ (−4, 4) ∪ (4, ∞)</span>.` },
    { q: `Find the holes and vertical asymptotes of <span class="m"><i>g</i>(<i>x</i>) = <span class="fr"><span><i>x</i><sup>2</sup> + 2<i>x</i></span><span><i>x</i><sup>2</sup> − <i>x</i> − 6</span></span></span>.`, a: `<span class="m"><i>g</i>(<i>x</i>) = <span class="fr"><span><i>x</i>(<i>x</i> + 2)</span><span>(<i>x</i> − 3)(<i>x</i> + 2)</span></span> = <span class="fr"><span><i>x</i></span><span><i>x</i> − 3</span></span>, <i>x</i> ≠ −2</span>. Hole at <span class="m">(−2, <span class="fr"><span>−2</span><span>−5</span></span>) = (−2, <span class="fr"><span>2</span><span>5</span></span>)</span>; vertical asymptote <span class="m"><i>x</i> = 3</span>.` },
    { q: `Describe <span class="m"><i>h</i>(<i>x</i>) = <span class="fr"><span>2</span><span><i>x</i> + 3</span></span> − 1</span> as a transformation of <span class="m">1/<i>x</i></span> and give its asymptotes, domain and range.`, a: `Stretch vertically by 2, shift left 3 and down 1. Vertical asymptote <span class="m"><i>x</i> = −3</span>, horizontal asymptote <span class="m"><i>y</i> = −1</span>. Domain <span class="m">(−∞, −3) ∪ (−3, ∞)</span>, range <span class="m">(−∞, −1) ∪ (−1, ∞)</span>.` },
    { q: `Describe the behaviour of <span class="m"><i>r</i>(<i>x</i>) = <span class="fr"><span><i>x</i> − 1</span><span>(<i>x</i> + 2)<sup>2</sup>(<i>x</i> − 4)</span></span></span> near each vertical asymptote.`, a: `No factor cancels, so the asymptotes are <span class="m"><i>x</i> = −2</span> and <span class="m"><i>x</i> = 4</span>. Near <span class="m">−2</span> the power is even and <span class="m"><span class="fr"><span><i>x</i> − 1</span><span><i>x</i> − 4</span></span></span> is <span class="m"><span class="fr"><span>−3</span><span>−6</span></span> &gt; 0</span>, so <span class="m"><i>r</i>(<i>x</i>) → ∞</span> on both sides. Near <span class="m">4</span> the power is odd: <span class="m"><i>x</i> → 4<sup>−</sup></span> gives <span class="m">−∞</span>, <span class="m"><i>x</i> → 4<sup>+</sup></span> gives <span class="m">∞</span>.` }
  ],
  origin: `<p>Quotients of polynomials were handled routinely by the algebraists of the 17th century, and the word <i>asymptote</i>, Greek for "not falling together", goes back to Apollonius of Perga, who used it around 200 BCE for the lines a hyperbola approaches. The graph of <span class="m"><i>xy</i> = 1</span> is such a hyperbola. The careful distinction between a removable discontinuity and an infinite one came with the 19th-century theory of limits developed by Cauchy and Weierstrass.</p>`
};
