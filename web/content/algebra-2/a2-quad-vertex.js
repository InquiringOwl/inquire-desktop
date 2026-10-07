window.ARITH = window.ARITH || {};
ARITH["a2-quad-vertex"] = {
  title: "Quadratic Functions in Vertex Form",
  short: "Complete the square: f(x) = a(x − h)² + k",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 6,
  voice: "plain",
  eyebrow: "Quadratic functions · vertex form, max and min",
  hero: `<span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 13 = <span class="c3">2</span>(<i>x</i> − <span class="c1">3</span>)<sup>2</sup> <span class="c2">− 5</span></span>`,
  lede: `Every quadratic function can be written as <span class="m"><i>f</i>(<i>x</i>) = <span class="c3"><i>a</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + <span class="c2"><i>k</i></span></span>. In this form the vertex <span class="m">(<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)</span>, the axis of symmetry, the maximum or minimum value and the range can all be read off directly.`,
  plain: `<p>The graph of <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> is a parabola with its lowest point at the origin. Stretch it by <span class="m c3"><i>a</i></span>, move it right by <span class="m c1"><i>h</i></span> and up by <span class="m c2"><i>k</i></span>, and you get <span class="m"><i>y</i> = <span class="c3"><i>a</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + <span class="c2"><i>k</i></span></span>. The turning point has moved to <span class="m">(<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)</span>.</p>
<p>A quadratic usually arrives in standard form, <span class="m"><i>y</i> = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>, which hides the turning point. To find it, rebuild a perfect square. Take half of the <span class="m"><i>x</i></span>-coefficient, square it, and add that <span class="c4">missing corner</span> inside the bracket. Then take the same amount away outside so the function does not change.</p>
<p>The squared part, <span class="m">(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup></span>, is never negative and is 0 only at <span class="m"><i>x</i> = <span class="c1"><i>h</i></span></span>. So if <span class="m c3"><i>a</i></span> is positive the function is never smaller than <span class="m c2"><i>k</i></span>, and if <span class="m c3"><i>a</i></span> is negative it is never larger. That one fact answers every "largest area" or "best price" question about a quadratic.</p>`,
  formal: `<p>A quadratic function <span class="m"><i>f</i>(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span>, <span class="m"><i>a</i> ≠ 0</span>, can be written in <b>vertex form</b> (College Algebra calls this the standard form of a quadratic function and <span class="m"><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i></span> the general form)</p>
<div class="display"><i>f</i>(<i>x</i>) = <span class="c3"><i>a</i></span>(<i>x</i> − <span class="c1"><i>h</i></span>)<sup>2</sup> + <span class="c2"><i>k</i></span>, &nbsp; <span class="c1"><i>h</i></span> = −<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>, &nbsp; <span class="c2"><i>k</i></span> = <i>f</i>(<span class="c1"><i>h</i></span>) = <i>c</i> − <span class="fr"><span><i>b</i><sup>2</sup></span><span>4<i>a</i></span></span>.</div>
<p>The <b>vertex</b> is <span class="m">(<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)</span> and the <b>axis of symmetry</b> is the line <span class="m"><i>x</i> = <span class="c1"><i>h</i></span></span>. If <span class="m"><span class="c3"><i>a</i></span> &gt; 0</span> the parabola opens up, <span class="m c2"><i>k</i></span> is the <b>minimum value</b> and the range is <span class="m">[<span class="c2"><i>k</i></span>, ∞)</span>. If <span class="m"><span class="c3"><i>a</i></span> &lt; 0</span> it opens down, <span class="m c2"><i>k</i></span> is the <b>maximum value</b> and the range is <span class="m">(−∞, <span class="c2"><i>k</i></span>]</span>. The domain is always <span class="m">(−∞, ∞)</span>.</p>
<p>To complete the square, factor <span class="m"><i>a</i></span> from the <span class="m"><i>x</i></span>-terms, add <span class="m c4">(<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup></span> inside the bracket and subtract <span class="m"><i>a</i> · <span class="c4">(<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup></span></span> outside. For example <span class="m">2<i>x</i><sup>2</sup> − 12<i>x</i> + 13 = 2(<i>x</i><sup>2</sup> − 6<i>x</i> + <span class="c4">9</span>) + 13 − <span class="c4">18</span> = 2(<i>x</i> − 3)<sup>2</sup> − 5</span>: vertex <span class="m">(3, −5)</span>, minimum value <span class="m">−5</span>, range <span class="m">[−5, ∞)</span>.</p>`,
  legend: [
    { c: "c3", sym: `<i>a</i>`, name: "Leading coefficient", desc: "The same a as in ax² + bx + c. Its sign decides up or down; its size decides how narrow." },
    { c: "c1", sym: `<i>h</i>`, name: "Axis of symmetry", desc: "The x-coordinate of the vertex, h = −b/(2a). The parabola is a mirror image across x = h." },
    { c: "c2", sym: `<i>k</i>`, name: "Maximum or minimum value", desc: "The y-coordinate of the vertex, k = f(h): the lowest value when a > 0, the highest when a < 0." },
    { c: "c4", sym: `(<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup>`, name: "Completing term", desc: "The missing corner added inside the bracket to make a perfect square, and taken away again outside." }
  ],
  steps: {
    title: "How to write a quadratic in vertex form",
    items: [
      `Factor <span class="m"><i>a</i></span> out of the <span class="m"><i>x</i><sup>2</sup></span> and <span class="m"><i>x</i></span> terms: <span class="m"><i>a</i>(<i>x</i><sup>2</sup> + <span class="fr"><span><i>b</i></span><span><i>a</i></span></span><i>x</i>) + <i>c</i></span>.`,
      `Take half of the coefficient of <span class="m"><i>x</i></span> inside the bracket and square it: <span class="m">(<span class="fr"><span><i>b</i></span><span>2<i>a</i></span></span>)<sup>2</sup></span>.`,
      `Add it inside the bracket and subtract <span class="m"><i>a</i></span> times it outside, so the function is unchanged.`,
      `Write the bracket as <span class="m">(<i>x</i> − <i>h</i>)<sup>2</sup></span> and combine the constants into <span class="m"><i>k</i></span>.`,
      `Read the vertex <span class="m">(<i>h</i>, <i>k</i>)</span>, the axis <span class="m"><i>x</i> = <i>h</i></span>, the maximum or minimum <span class="m"><i>k</i></span> and the range. Check with <span class="m"><i>h</i> = −<i>b</i>/(2<i>a</i>)</span>.`
    ]
  },
  example: {
    prompt: `Write <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> − 6<i>x</i> + 1</span> in vertex form. Give the vertex, the axis of symmetry, the minimum value and the range.`,
    lines: [
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <span class="c3">2</span>(<i>x</i><sup>2</sup> − 3<i>x</i>) + 1</span>`, note: "Factor a = 2 out of the two x-terms only. The constant stays outside." },
      { math: `<span class="m"><span class="fr"><span>−3</span><span>2</span></span> = −<span class="fr"><span>3</span><span>2</span></span>, &nbsp; <span class="c4">(−<span class="fr"><span>3</span><span>2</span></span>)<sup>2</sup> = <span class="fr"><span>9</span><span>4</span></span></span></span>`, note: "Half of the x-coefficient inside the bracket, squared, is the completing term." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i><sup>2</sup> − 3<i>x</i> + <span class="c4"><span class="fr"><span>9</span><span>4</span></span></span>) + 1 − 2 · <span class="c4"><span class="fr"><span>9</span><span>4</span></span></span></span>`, note: "Adding 9/4 inside adds 2 · 9/4 = 9/2 in total, so subtract 9/2 outside." },
      { math: `<span class="m"><i>f</i>(<i>x</i>) = <span class="c3">2</span>(<i>x</i> − <span class="c1"><span class="fr"><span>3</span><span>2</span></span></span>)<sup>2</sup> <span class="c2">− <span class="fr"><span>7</span><span>2</span></span></span></span>`, note: "The bracket is a perfect square, and 1 − 9/2 = −7/2." },
      { math: `<span class="m"><span class="c1"><i>h</i></span> = −<span class="fr"><span>−6</span><span>2 · 2</span></span> = <span class="c1"><span class="fr"><span>3</span><span>2</span></span></span></span>`, note: "Check the x-coordinate with h = −b/(2a)." },
      { math: `<span class="m"><i>f</i>(<span class="fr"><span>3</span><span>2</span></span>) = 2 · <span class="fr"><span>9</span><span>4</span></span> − 9 + 1 = <span class="c2">−<span class="fr"><span>7</span><span>2</span></span></span></span>`, note: "Check k by evaluating f at h." }
    ],
    answer: `<span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − <span class="fr"><span>3</span><span>2</span></span>)<sup>2</sup> − <span class="fr"><span>7</span><span>2</span></span></span>. Vertex <span class="m">(<span class="c1"><span class="fr"><span>3</span><span>2</span></span></span>, <span class="c2">−<span class="fr"><span>7</span><span>2</span></span></span>)</span>, axis <span class="m"><i>x</i> = <span class="fr"><span>3</span><span>2</span></span></span>, minimum value <span class="m">−<span class="fr"><span>7</span><span>2</span></span></span> because <span class="m"><i>a</i> = 2 &gt; 0</span>, range <span class="m">[−<span class="fr"><span>7</span><span>2</span></span>, ∞)</span>.`
  },
  why: `<p>Many quantities rise and then fall, or fall and then rise: the height of a thrown ball, the area you can fence with a fixed length of wire, the revenue as a price goes up and fewer people buy. When the relationship is quadratic, the best value is the vertex. Vertex form puts that value in plain sight, along with where it happens.</p>
<p>Vertex form is also the bridge between algebra and the graph. It shows the parabola as <span class="m"><i>y</i> = <i>x</i><sup>2</sup></span> stretched and moved, so you can sketch it from three numbers. Completing the square, the move that produces it, comes back for circles, ellipses and the other conics, and for the quadratic formula itself.</p>`,
  careers: [
    { role: "Pricing analyst", use: "Models revenue as price times a falling demand and finds the price at the vertex that gives the most revenue." },
    { role: "Civil engineer", use: "Writes the vertical curve of a road crest or sag as a parabola from its high or low point and one known elevation." },
    { role: "Sports performance analyst", use: "Fits a parabola to tracked ball positions and reads the peak height and where it occurs from vertex form." },
    { role: "Operations researcher", use: "Minimises a quadratic cost, such as inventory holding plus ordering cost approximated near the optimum." },
    { role: "Agricultural engineer", use: "Finds the pen or field dimensions that enclose the most area with a fixed length of fencing." },
    { role: "Architect", use: "Sets a parabolic arch from its apex and the points where it meets the ground." }
  ],
  life: [
    "Finding the highest point of a basketball shot from its arc",
    "Choosing the ticket price that brings in the most money for a school event",
    "Fencing the largest garden against a wall with a fixed roll of fence",
    "Seeing that a fountain jet is symmetric about its highest point",
    "Reading the lowest point of a hanging cable sketch modelled by a parabola"
  ],
  fields: [
    { name: "Physics", use: "Projectile height h(t) = −½gt² + v₀t + h₀ peaks at t = v₀/g, the vertex." },
    { name: "Economics", use: "Quadratic revenue and profit models have their maximum at the vertex." },
    { name: "Statistics", use: "Least squares minimises a sum of squares by completing the square in the unknowns." },
    { name: "Engineering", use: "Parabolic curves for road profiles and arches are written from their vertex." }
  ],
  prereqWhy: {
    "a2-transformations": "Vertex form is y = x² stretched by a, shifted right h and up k, so the transformation rules explain every part of it.",
    "a1-quad-sqrt": "Completing the square, first used to solve quadratic equations, is the step that turns ax² + bx + c into a(x − h)² + k."
  },
  unlocksWhy: {
    "a2-parabolas": "The parabola as a conic, (x − h)² = 4p(y − k), is vertex form rearranged, with 4p = 1/a locating the focus and directrix.",
    "pc-function-modeling": "Many situation problems give a quadratic, such as the area of a fenced region, and its vertex gives the exact best value without a graph."
  },
  beyond: [
    { field: "Calculus I", why: "The vertex is where the derivative 2a(x − h) is zero, the first example of finding a maximum or minimum." },
    { field: "Precalculus", why: "Completing the square writes every conic in standard form and gives the quadratic formula." },
    { field: "Physics", why: "Projectile motion, potential energy near equilibrium and many approximations are quadratic, with the extreme at the vertex." },
    { field: "Statistics", why: "Least squares and the variance formula come from completing the square." }
  ],
  mistakes: [
    { wrong: `Reading the vertex of <span class="m"><i>f</i>(<i>x</i>) = 3(<i>x</i> + 4)<sup>2</sup> − 1</span> as <span class="m">(4, −1)</span>.`, fix: `Vertex form has <span class="m"><i>x</i> − <i>h</i></span>. Here <span class="m"><i>x</i> + 4 = <i>x</i> − (−4)</span>, so <span class="m"><i>h</i> = −4</span> and the vertex is <span class="m">(−4, −1)</span>.` },
    { wrong: `Writing <span class="m">2(<i>x</i><sup>2</sup> − 3<i>x</i> + <span class="fr"><span>9</span><span>4</span></span>) + 1 − <span class="fr"><span>9</span><span>4</span></span></span>.`, fix: `The 9/4 inside is multiplied by the 2 outside, so the function grew by 9/2. Subtract <span class="m">2 · <span class="fr"><span>9</span><span>4</span></span> = <span class="fr"><span>9</span><span>2</span></span></span>.` },
    { wrong: `Giving the range of <span class="m"><i>f</i>(<i>x</i>) = −(<i>x</i> − 1)<sup>2</sup> + 6</span> as <span class="m">[6, ∞)</span>.`, fix: `<span class="m"><i>a</i> = −1 &lt; 0</span>, so the parabola opens down and 6 is the maximum. The range is <span class="m">(−∞, 6]</span>.` }
  ],
  practice: [
    { q: `Write <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 6<i>x</i> + 5</span> in vertex form and give its range.`,
      a: `Half of 6 is 3 and <span class="m">3<sup>2</sup> = 9</span>: <span class="m"><i>f</i>(<i>x</i>) = (<i>x</i><sup>2</sup> + 6<i>x</i> + 9) + 5 − 9 = (<i>x</i> + 3)<sup>2</sup> − 4</span>. Vertex <span class="m">(−3, −4)</span>, minimum <span class="m">−4</span>, range <span class="m">[−4, ∞)</span>.` },
    { q: `Find the maximum value of <span class="m"><i>f</i>(<i>x</i>) = −3<i>x</i><sup>2</sup> + 12<i>x</i> − 7</span> and where it occurs.`,
      a: `<span class="m"><i>h</i> = −<span class="fr"><span>12</span><span>2(−3)</span></span> = 2</span> and <span class="m"><i>f</i>(2) = −12 + 24 − 7 = 5</span>. The maximum value is 5 at <span class="m"><i>x</i> = 2</span>; <span class="m"><i>f</i>(<i>x</i>) = −3(<i>x</i> − 2)<sup>2</sup> + 5</span>, range <span class="m">(−∞, 5]</span>.` },
    { q: `Write the quadratic function whose graph has vertex <span class="m">(2, −3)</span> and passes through <span class="m">(4, 5)</span>. Give it in both forms.`,
      a: `<span class="m"><i>f</i>(<i>x</i>) = <i>a</i>(<i>x</i> − 2)<sup>2</sup> − 3</span>. Then <span class="m">5 = <i>a</i>(4 − 2)<sup>2</sup> − 3</span>, so <span class="m">4<i>a</i> = 8</span> and <span class="m"><i>a</i> = 2</span>: <span class="m"><i>f</i>(<i>x</i>) = 2(<i>x</i> − 2)<sup>2</sup> − 3 = 2<i>x</i><sup>2</sup> − 8<i>x</i> + 5</span>.` },
    { q: `A farmer has 240 m of fencing to enclose a rectangular pen against a long barn wall, so only three sides need fence. What dimensions give the largest area, and what is that area?`,
      a: `Let <span class="m"><i>x</i></span> be each side touching the wall; the side parallel to the wall is <span class="m">240 − 2<i>x</i></span>. <span class="m"><i>A</i>(<i>x</i>) = <i>x</i>(240 − 2<i>x</i>) = −2<i>x</i><sup>2</sup> + 240<i>x</i> = −2(<i>x</i> − 60)<sup>2</sup> + 7200</span>. The maximum is at <span class="m"><i>x</i> = 60</span>: the pen is 60 m by 120 m, with area <span class="m">7200 m<sup>2</sup></span>.` }
  ],
  origin: `<p>Completing the square is older than algebraic symbols. Old Babylonian scribes, around 1800 BC, solved problems about a square's side and area with exactly this step, described in words. Around 820 AD al-Khwarizmi, in Baghdad, justified it with a picture: a square of side <span class="m"><i>x</i></span>, two rectangles along its sides, and a small missing corner that is filled in to complete a larger square. That picture is where the name comes from. Writing a quadratic function as <span class="m"><i>a</i>(<i>x</i> − <i>h</i>)<sup>2</sup> + <i>k</i></span> to read its graph became standard once Descartes and Fermat joined equations to curves in the 17th century.</p>`
};
