window.ARITH = window.ARITH || {};
ARITH["pc-tangent-rate"] = {
  title: "From Secant to Tangent: Instantaneous Rate",
  short: "Slide the secant's second point in: the tangent's slope",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Introduction to calculus · rates of change",
  hero: `<span class="m"><span class="c5"><i>m</i></span> = <span class="c5">lim<sub><i>h</i>→0</sub></span> <span class="fr"><span><i>f</i>(<span class="c1"><i>a</i></span> + <span class="c2"><i>h</i></span>) − <i>f</i>(<span class="c1"><i>a</i></span>)</span><span><span class="c2"><i>h</i></span></span></span></span>`,
  lede: `The slope of a <b>secant line</b> through two points of a graph is an average rate of change. Slide the second point into the first and the secant turns into the <b>tangent line</b>; its slope, a limit of secant slopes, is the <b>instantaneous rate of change</b> at that point.`,
  plain: `<p>A car travels 120 miles in 2 hours. Its average speed is 60 mph, but the speedometer showed many different speeds along the way. How do you get the speed at one instant? Measure over a shorter and shorter time interval around that instant, and see what the average speeds approach.</p>
<p>On a graph, the average rate of change of <span class="m"><i>f</i></span> from <span class="m"><span class="c1"><i>a</i></span></span> to <span class="m"><span class="c1"><i>a</i></span> + <span class="c2"><i>h</i></span></span> is the slope of the <span class="c4">secant</span> through <span class="m"><span class="c1"><i>P</i></span> = (<i>a</i>, <i>f</i>(<i>a</i>))</span> and <span class="m"><span class="c2"><i>Q</i></span> = (<i>a</i> + <i>h</i>, <i>f</i>(<i>a</i> + <i>h</i>))</span>. That slope is the <b>difference quotient</b> <span class="m">(<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>))/<i>h</i></span>.</p>
<p>Now let <span class="m"><span class="c2"><i>h</i></span></span> shrink. <span class="m"><span class="c2"><i>Q</i></span></span> slides along the curve toward <span class="m"><span class="c1"><i>P</i></span></span>, and the secant pivots into the line that just touches the curve at <span class="m"><span class="c1"><i>P</i></span></span>. You cannot set <span class="m"><i>h</i> = 0</span> directly, because that gives <span class="m">0/0</span>. Instead simplify the quotient with algebra until <span class="m"><i>h</i></span> no longer divides, then let <span class="m"><i>h</i> → 0</span>.</p>`,
  formal: `<p>The <b>average rate of change</b> of <span class="m"><i>f</i></span> on <span class="m">[<i>a</i>, <i>a</i> + <i>h</i>]</span> is the slope of the secant line, <span class="m">(<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>))/<i>h</i></span>, in output units per input unit. The <b>instantaneous rate of change</b> of <span class="m"><i>f</i></span> at <span class="m"><i>a</i></span>, also called the <b>derivative of <i>f</i> at <i>a</i></b>, is</p>
<div class="display"><span class="c5"><i>f</i> ′(<i>a</i>)</span> = lim<sub><i>h</i>→0</sub> <span class="fr"><span><i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>)</span><span><i>h</i></span></span>, &nbsp; when this limit exists.</div>
<p>It is the slope of the <b>tangent line</b> to the graph at <span class="m">(<i>a</i>, <i>f</i>(<i>a</i>))</span>, whose equation is <span class="m"><i>y</i> = <i>f</i>(<i>a</i>) + <i>f</i> ′(<i>a</i>)(<i>x</i> − <i>a</i>)</span>. For <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> the quotient is <span class="m">((<i>a</i> + <i>h</i>)<sup>2</sup> − <i>a</i><sup>2</sup>)/<i>h</i> = 2<i>a</i> + <i>h</i></span>, so the slope at <span class="m"><i>a</i></span> is <span class="m">2<i>a</i></span>. If <span class="m"><i>s</i>(<i>t</i>)</span> is the position of an object at time <span class="m"><i>t</i></span>, the same limit is its <b>instantaneous velocity</b> <span class="m"><i>v</i>(<i>t</i>)</span>; for a ball thrown upward with <span class="m"><i>s</i>(<i>t</i>) = <i>s</i><sub>0</sub> + <i>v</i><sub>0</sub><i>t</i> − 16<i>t</i><sup>2</sup></span> (feet, seconds) it is <span class="m"><i>v</i><sub>0</sub> − 32<i>t</i></span> ft/s. Rules that find <span class="m"><i>f</i> ′</span> without the limit come in Calculus I.</p>`,
  legend: [
    { c: "c1", sym: `<i>P</i>, <i>a</i>`, name: "Point of tangency", desc: "P = (a, f(a)) glides along the curve; dragging it sets a." },
    { c: "c2", sym: `<i>Q</i>, <i>h</i>`, name: "Second point", desc: "Q = (a + h, f(a + h)); dragging it along the curve sets h." },
    { c: "c3", sym: `<i>f</i>`, name: "Curve", desc: "The function or position graph; its coefficients are scrubbable." },
    { c: "c4", sym: `secant`, name: "Secant line", desc: "Through P and Q; its slope is the average rate." },
    { c: "c5", sym: `<i>f</i> ′(<i>a</i>)`, name: "Tangent slope", desc: "The limit of the secant slopes as h → 0: the instantaneous rate." }
  ],
  steps: {
    title: "How to find the instantaneous rate at a point",
    items: [
      `Compute <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span>.`,
      `Expand <span class="m"><i>f</i>(<span class="c1"><i>a</i></span> + <span class="c2"><i>h</i></span>)</span> by substituting <span class="m"><i>a</i> + <i>h</i></span> for every <span class="m"><i>x</i></span>.`,
      `Subtract: the constant terms cancel, and every term left contains <span class="m"><i>h</i></span>.`,
      `Divide by <span class="m"><i>h</i></span> (allowed since <span class="m"><i>h</i> ≠ 0</span>). This is the <span class="c4">secant slope</span> for every <span class="m"><i>h</i></span>.`,
      `Let <span class="m"><i>h</i> → 0</span>: the terms with <span class="m"><i>h</i></span> vanish and the <span class="c5">tangent slope</span> remains.`,
      `Write the tangent line in point-slope form <span class="m"><i>y</i> − <i>f</i>(<i>a</i>) = <i>m</i>(<i>x</i> − <i>a</i>)</span>, and give the rate with units.`
    ]
  },
  example: {
    prompt: `For <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i><sup>2</sup> − <i>x</i></span>, find the slope of the tangent line at <span class="m"><span class="c1"><i>a</i> = 1</span></span> and its equation.`,
    lines: [
      { math: `<span class="m"><i>f</i>(1) = 2 − 1 = 1</span>`, note: "The point of tangency is P = (1, 1)." },
      { math: `<span class="m"><i>f</i>(1 + <i>h</i>) = 2(1 + 2<i>h</i> + <i>h</i><sup>2</sup>) − (1 + <i>h</i>) = 2<i>h</i><sup>2</sup> + 3<i>h</i> + 1</span>`, note: "Substitute 1 + h for x and expand." },
      { math: `<span class="m"><span class="fr"><span><i>f</i>(1 + <i>h</i>) − <i>f</i>(1)</span><span><i>h</i></span></span> = <span class="fr"><span>2<i>h</i><sup>2</sup> + 3<i>h</i></span><span><i>h</i></span></span> = <span class="c4">2<i>h</i> + 3</span></span>`, note: "The constants cancel; divide every term by h, which is not 0." },
      { math: `<span class="m"><i>h</i> = 0.1: 3.2, &nbsp; <i>h</i> = 0.01: 3.02, &nbsp; <i>h</i> = −0.01: 2.98</span>`, note: "Secant slopes from both sides close in on one number." },
      { math: `<span class="m"><span class="c5">lim<sub><i>h</i>→0</sub> (2<i>h</i> + 3) = 3</span></span>`, note: "Now h can go to 0 without dividing by zero." },
      { math: `<span class="m"><i>y</i> − 1 = 3(<i>x</i> − 1) &nbsp;⇒&nbsp; <i>y</i> = 3<i>x</i> − 2</span>`, note: "Point-slope form through P with the tangent slope." }
    ],
    answer: `The tangent slope is <span class="m"><span class="c5"><i>f</i> ′(1) = 3</span></span> and the tangent line is <span class="m"><i>y</i> = 3<i>x</i> − 2</span>.`
  },
  why: `<p>Almost every law of science is a statement about instantaneous rates: velocity is the rate of change of position, current the rate of flow of charge, a reaction rate the rate of change of a concentration. Averages over an interval hide what happens at a moment, and the limit of the difference quotient recovers it.</p>
<p>This limit is the derivative, the central object of Calculus I. Working it out by hand for a few polynomials here makes the later rules (power rule, product rule) feel like shortcuts for algebra you have already done, not like magic.</p>`,
  careers: [
    { role: "Mechanical engineer", use: "Computes velocities and accelerations of machine parts as rates of change of position over time." },
    { role: "Economist", use: "Uses marginal cost and marginal revenue, the instantaneous rates of change of cost and revenue with quantity." },
    { role: "Pharmacologist", use: "Measures how fast a drug's concentration in the blood is changing at a given time after a dose." },
    { role: "Data analyst", use: "Estimates growth rates from data with difference quotients over short intervals." },
    { role: "Pilot", use: "Reads the vertical speed indicator, the instantaneous rate of change of altitude." },
    { role: "Epidemiologist", use: "Tracks the rate at which case counts are rising at a given date, not just the weekly average." }
  ],
  life: [
    "A speedometer shows instantaneous speed; a trip computer shows average speed",
    "A weather report's 'temperature falling 3 degrees per hour' is a rate at a moment",
    "The steepness of a road at one spot is the slope of its tangent there",
    "A savings balance growing faster each year has an increasing instantaneous rate",
    "A stock chart's 'momentum' compares short-interval slopes with longer averages"
  ],
  fields: [
    { name: "Calculus", use: "The derivative is defined as this limit and then computed with rules." },
    { name: "Physics", use: "Velocity, acceleration, current and power are all instantaneous rates of change." },
    { name: "Economics", use: "Marginal quantities are rates of change of cost, revenue and utility." },
    { name: "Biology", use: "Growth and reaction rates at a given time come from the slope of the tangent to a curve." }
  ],
  prereqWhy: {
    "pc-limit-laws": "The difference quotient is a 0/0 form at h = 0; factoring out h and cancelling it is exactly the algebraic limit technique.",
    "pc-function-modeling": "The models built there have best values where the graph turns flat, which is where the tangent slope found here is zero."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "The derivative function f ′(x) and its rules turn this limit into quick computations, and f ′ = 0 locates maxima and minima." },
    { field: "Physics (Mechanics)", why: "Velocity is the derivative of position and acceleration the derivative of velocity." },
    { field: "Differential Equations", why: "Laws stated as rates of change, like cooling or population growth, become equations involving derivatives." }
  ],
  mistakes: [
    { wrong: `Setting <span class="m"><i>h</i> = 0</span> in <span class="m">(<i>f</i>(<i>a</i> + <i>h</i>) − <i>f</i>(<i>a</i>))/<i>h</i></span> before simplifying, and getting <span class="m">0/0</span>.`, fix: `Simplify first so that <span class="m"><i>h</i></span> no longer divides, then let <span class="m"><i>h</i> → 0</span>.` },
    { wrong: `Writing <span class="m"><i>f</i>(<i>a</i> + <i>h</i>) = <i>f</i>(<i>a</i>) + <i>h</i></span>, or <span class="m">(<i>a</i> + <i>h</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + <i>h</i><sup>2</sup></span>.`, fix: `Substitute <span class="m"><i>a</i> + <i>h</i></span> for every <span class="m"><i>x</i></span> and expand fully: <span class="m">(<i>a</i> + <i>h</i>)<sup>2</sup> = <i>a</i><sup>2</sup> + 2<i>a</i><i>h</i> + <i>h</i><sup>2</sup></span>.` },
    { wrong: `Giving the tangent line as <span class="m"><i>y</i> = <i>m</i><i>x</i></span>, through the origin.`, fix: `The tangent passes through <span class="m">(<i>a</i>, <i>f</i>(<i>a</i>))</span>: use <span class="m"><i>y</i> − <i>f</i>(<i>a</i>) = <i>m</i>(<i>x</i> − <i>a</i>)</span>.` },
    { wrong: `Reporting an average velocity over an interval as the velocity at an instant.`, fix: `The average over <span class="m">[<i>a</i>, <i>a</i> + <i>h</i>]</span> depends on <span class="m"><i>h</i></span>; the instantaneous velocity is its limit as <span class="m"><i>h</i> → 0</span>.` }
  ],
  practice: [
    { q: `Find the average rate of change of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> on <span class="m">[1, 3]</span>.`, a: `<span class="m">(<i>f</i>(3) − <i>f</i>(1))/(3 − 1) = (9 − 1)/2 = <span class="c4">4</span></span>: the slope of the secant through <span class="m">(1, 1)</span> and <span class="m">(3, 9)</span>.` },
    { q: `Simplify the difference quotient of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> + 4<i>x</i></span> at <span class="m"><i>a</i> = 1</span>, and find the slope of the tangent there.`, a: `<span class="m"><i>f</i>(1) = 5</span>, <span class="m"><i>f</i>(1 + <i>h</i>) = <i>h</i><sup>2</sup> + 6<i>h</i> + 5</span>, so the quotient is <span class="m">(<i>h</i><sup>2</sup> + 6<i>h</i>)/<i>h</i> = 6 + <i>h</i></span>. As <span class="m"><i>h</i> → 0</span>: slope <span class="m"><span class="c5">6</span></span>.` },
    { q: `Find the equation of the tangent line to <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup></span> at <span class="m"><i>a</i> = 2</span>.`, a: `<span class="m"><i>f</i>(2 + <i>h</i>) = 8 + 12<i>h</i> + 6<i>h</i><sup>2</sup> + <i>h</i><sup>3</sup></span>, quotient <span class="m">12 + 6<i>h</i> + <i>h</i><sup>2</sup> → 12</span>. Tangent: <span class="m"><i>y</i> − 8 = 12(<i>x</i> − 2)</span>, so <span class="m"><span class="c5"><i>y</i> = 12<i>x</i> − 16</span></span>.` },
    { q: `A ball's height is <span class="m"><i>s</i>(<i>t</i>) = 64 + 48<i>t</i> − 16<i>t</i><sup>2</sup></span> feet after <span class="m"><i>t</i></span> seconds. Find its average velocity on <span class="m">[2, 2 + <i>h</i>]</span> and its velocity at <span class="m"><i>t</i> = 2</span>.`, a: `<span class="m"><i>s</i>(2) = 96</span>, <span class="m"><i>s</i>(2 + <i>h</i>) = 96 − 16<i>h</i> − 16<i>h</i><sup>2</sup></span>, so the average velocity is <span class="m">−16 − 16<i>h</i></span> ft/s. As <span class="m"><i>h</i> → 0</span>: <span class="m"><span class="c5"><i>v</i>(2) = −16</span></span> ft/s; the ball is falling at 16 ft/s.` }
  ],
  origin: `<p>Pierre de Fermat found tangents and maxima around 1636 by comparing <span class="m"><i>f</i>(<i>a</i>)</span> with <span class="m"><i>f</i>(<i>a</i> + <i>e</i>)</span>, dividing by <span class="m"><i>e</i></span> and then discarding the terms that still contained it, essentially the difference quotient. Isaac Newton (his method of fluxions, 1665–1666) and Gottfried Leibniz (first published in 1684) turned such computations into the calculus. Augustin-Louis Cauchy defined the derivative as the limit of the difference quotient in his lectures of 1823.</p>`
};
