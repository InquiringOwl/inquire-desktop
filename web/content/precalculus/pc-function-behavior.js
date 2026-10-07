window.ARITH = window.ARITH || {};
ARITH["pc-function-behavior"] = {
  title: "Rates of Change & Behaviour of Graphs",
  short: "Secant slopes, rising and falling, peaks and valleys",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · rates of change and behaviour",
  hero: `<span class="m"><span class="c5">average rate</span> = <span class="fr"><span><span class="c3"><i>f</i></span>(<span class="c2"><i>b</i></span>) − <span class="c3"><i>f</i></span>(<span class="c1"><i>a</i></span>)</span><span><span class="c2"><i>b</i></span> − <span class="c1"><i>a</i></span></span></span> = slope of the <span class="c4">secant</span></span>`,
  lede: `The <b>average rate of change</b> of a function between two inputs is the slope of the <span class="c4">secant line</span> through the two points of its graph. Rates tell you where a function is increasing or decreasing, where it turns, and how fast it grows compared with another function.`,
  plain: `<p>If a car's odometer reads 40 km at 1:00 and 160 km at 3:00, it travelled 120 km in 2 hours: an average of 60 km/h. It may have stopped or sped up along the way, but on average the distance grew by 60 km each hour. That number is an <b>average rate of change</b>: the change in output divided by the change in input, in output units per input unit.</p>
<p>On a graph, pick two points <span class="c1"><i>A</i></span> and <span class="c2"><i>B</i></span> on the curve and draw the line through them. Its slope, rise over run, is the average rate of change between them. A positive slope means the function went up overall between those inputs; a negative slope means it went down.</p>
<p>Reading a graph from left to right, a function is <b>increasing</b> where the curve climbs, <b>decreasing</b> where it falls, and <b>constant</b> where it is flat. Where it switches from climbing to falling it has a <b>local maximum</b>, a hilltop; where it switches from falling to climbing, a <b>local minimum</b>, a valley floor. The highest point of the whole graph, if there is one, is the <b>absolute maximum</b>.</p>
<p>The way a curve bends matters too. If it bends upward like a cup, its slopes keep getting larger and it is <b>concave up</b>; if it bends downward like a cap, its slopes keep getting smaller and it is <b>concave down</b>.</p>`,
  formal: `<p>The average rate of change of <span class="m"><span class="c3"><i>f</i></span></span> on <span class="m">[<span class="c1"><i>a</i></span>, <span class="c2"><i>b</i></span>]</span> is</p>
<div class="display"><span class="fr"><span>Δ<i>y</i></span><span>Δ<i>x</i></span></span> = <span class="fr"><span><i>f</i>(<span class="c2"><i>b</i></span>) − <i>f</i>(<span class="c1"><i>a</i></span>)</span><span><span class="c2"><i>b</i></span> − <span class="c1"><i>a</i></span></span></span></div>
<p>the slope of the secant line through <span class="m">(<i>a</i>, <i>f</i>(<i>a</i>))</span> and <span class="m">(<i>b</i>, <i>f</i>(<i>b</i>))</span>. A function is <b>increasing</b> on an open interval <span class="m"><i>I</i></span> if <span class="m"><i>x</i><sub>1</sub> &lt; <i>x</i><sub>2</sub></span> in <span class="m"><i>I</i></span> implies <span class="m"><i>f</i>(<i>x</i><sub>1</sub>) &lt; <i>f</i>(<i>x</i><sub>2</sub>)</span>, <b>decreasing</b> if it implies <span class="m"><i>f</i>(<i>x</i><sub>1</sub>) &gt; <i>f</i>(<i>x</i><sub>2</sub>)</span>, and <b>constant</b> if <span class="m"><i>f</i>(<i>x</i><sub>1</sub>) = <i>f</i>(<i>x</i><sub>2</sub>)</span>. Equivalently, every average rate of change on <span class="m"><i>I</i></span> is positive, negative or zero.</p>
<p><span class="m"><i>f</i>(<i>c</i>)</span> is a <b>local maximum</b> if <span class="m"><i>f</i>(<i>c</i>) ≥ <i>f</i>(<i>x</i>)</span> for every <span class="m"><i>x</i></span> in some open interval containing <span class="m"><i>c</i></span>, and a <b>local minimum</b> if <span class="m"><i>f</i>(<i>c</i>) ≤ <i>f</i>(<i>x</i>)</span> there. It is an <b>absolute maximum</b> (minimum) if the inequality holds for every <span class="m"><i>x</i></span> in the domain. A cubic such as <span class="m"><i>x</i><sup>3</sup> − 3<i>x</i></span> has a local maximum 2 and a local minimum −2 but no absolute extremes, since its values run from −∞ to ∞.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i>, <i>A</i>`, name: "First input", desc: "The left end of the interval and its point on the curve; also the trace point." },
    { c: "c2", sym: `<i>b</i>, <i>B</i>`, name: "Second input", desc: "The right end of the interval and its point on the curve." },
    { c: "c3", sym: `<i>f</i>`, name: "Curve", desc: "The function whose behaviour you are reading." },
    { c: "c4", sym: `secant`, name: "Secant line", desc: "The line through A and B; its slope is the average rate of change." },
    { c: "c5", sym: `Δ<i>y</i>/Δ<i>x</i>`, name: "Rate", desc: "The average rate of change, exact, with its sign." }
  ],
  steps: {
    title: "How to describe a function's behaviour",
    items: [
      `For an average rate, compute <span class="m"><i>f</i>(<span class="c1"><i>a</i></span>)</span> and <span class="m"><i>f</i>(<span class="c2"><i>b</i></span>)</span>, then divide the difference by <span class="m"><span class="c2"><i>b</i></span> − <span class="c1"><i>a</i></span></span>. Keep the order the same on top and bottom, and attach units: output units per input unit.`,
      `Find the turning points: the <i>x</i>-values where the graph switches between climbing and falling. For a quadratic this is the vertex.`,
      `Between turning points, decide from one test point or the graph whether the function rises or falls.`,
      `Write the intervals of increase and decrease as <b>open</b> intervals of <i>x</i>-values, such as <span class="m">(−∞, −1)</span>; never use <i>y</i>-values here.`,
      `Name each local maximum or minimum by its value <span class="m"><i>f</i>(<i>c</i>)</span> and where it occurs, <span class="m"><i>x</i> = <i>c</i></span>, and check whether any is absolute over the whole domain.`
    ]
  },
  example: {
    prompt: `For <span class="m"><span class="c3"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> − 3<i>x</i></span></span>, find the average rate of change on <span class="m">[<span class="c1">0</span>, <span class="c2">2</span>]</span>, the intervals where <span class="m"><i>f</i></span> increases and decreases, and its local extrema.`,
    lines: [
      { math: `<span class="m"><i>f</i>(<span class="c1">0</span>) = 0, &nbsp; <i>f</i>(<span class="c2">2</span>) = 8 − 6 = 2</span>`, note: "Evaluate at both ends." },
      { math: `<span class="m"><span class="c5"><span class="fr"><span>2 − 0</span><span>2 − 0</span></span> = 1</span></span>`, note: "The secant from (0, 0) to (2, 2) has slope 1, although the curve dips below the axis in between." },
      { math: `<span class="m"><i>f</i>(−1) = −1 + 3 = 2, &nbsp; <i>f</i>(1) = 1 − 3 = −2</span>`, note: "The graph turns at x = −1 and x = 1 (the zeros of 3x² − 3, as calculus will show)." },
      { math: `<span class="m"><i>f</i>(−2) = −2, &nbsp; <i>f</i>(0) = 0, &nbsp; <i>f</i>(2) = 2</span>`, note: "Test points: up from −2 to 2 on the left, down from 2 to −2 in the middle, up again on the right." },
      { math: `<span class="m">increasing on (−∞, −1) ∪ (1, ∞), &nbsp; decreasing on (−1, 1)</span>`, note: "Open intervals of x-values." },
      { math: `<span class="m">local max <i>f</i>(−1) = 2, &nbsp; local min <i>f</i>(1) = −2</span>`, note: "Neither is absolute: f(3) = 18 > 2 and f(−3) = −18 < −2." }
    ],
    answer: `Average rate <span class="m"><span class="c5">1</span></span> on <span class="m">[0, 2]</span>; increasing on <span class="m">(−∞, −1) ∪ (1, ∞)</span>, decreasing on <span class="m">(−1, 1)</span>; local maximum <span class="m">2</span> at <span class="m"><i>x</i> = −1</span>, local minimum <span class="m">−2</span> at <span class="m"><i>x</i> = 1</span>, no absolute extremes.`
  },
  why: `<p>Rates of change are how most quantities are reported: speed in km/h, population growth in people per year, the cost of one more unit in a factory. The average rate turns two readings into one comparable number with units, and comparing rates over the same interval tells you which of two functions is growing faster there.</p><p>Increasing and decreasing intervals and extremes answer the practical questions about a model: when does a quantity peak, when does it bottom out, and how large does it get. Calculus sharpens the average rate into an instantaneous one by letting the two points of the secant come together.</p>`,
  careers: [
    { role: "Economist", use: "Reports average growth rates of output, prices and employment over quarters and years, in percent or units per year." },
    { role: "Epidemiologist", use: "Tracks the average change in new cases per day to see whether an outbreak is increasing, peaking or declining." },
    { role: "Civil engineer", use: "Computes road grade as rise over run between survey points and limits it on steep sections." },
    { role: "Financial analyst", use: "Compares average returns per year of two investments over the same period and locates price peaks and troughs." },
    { role: "Sports scientist", use: "Turns split times into average speeds over each segment of a race to find where an athlete slows." },
    { role: "Climate scientist", use: "Measures the average change in temperature or sea level per decade from long data records." }
  ],
  life: [
    "Average speed on a trip is distance travelled divided by the time taken",
    "A fuel gauge falling faster on the motorway than in town shows a larger rate of use",
    "The price of a stock reaches a high for the year, a local or absolute maximum on its chart",
    "A child's height grows quickly in some years and slowly in others",
    "A road sign warning of a 10 % grade gives the rise per unit of horizontal distance"
  ],
  fields: [
    { name: "Physics", use: "Average velocity is the average rate of change of position; average acceleration is that of velocity." },
    { name: "Economics", use: "Marginal cost and revenue start as the change in cost or revenue per extra unit produced." },
    { name: "Biology", use: "Growth rates of populations and of individual organisms are compared over equal time intervals." },
    { name: "Data science", use: "Trends in time series are summarised by rates of change and local peaks and troughs." }
  ],
  prereqWhy: {
    "a2-func-ops": "Rates are built from differences of function values, f(b) − f(a), and comparing functions uses the same function notation.",
    "a1-slope-forms": "The average rate of change is the slope of a line, rise over run, through two points of the graph."
  },
  unlocksWhy: {
    "pc-function-modeling": "Once a situation is written as a function, its maximum or minimum is found by reading where the graph turns.",
    "pc-ivt-bounds": "Knowing where a polynomial rises and falls tells you between which inputs its sign must change, which is where the zeros are.",
    "pc-limits-graph": "Letting the two points of a secant come together is the first limit, and reading a graph near a point is the skill limits use."
  },
  beyond: [
    { field: "Calculus I", why: "The derivative is the limit of the average rate of change as b → a, and its sign gives the intervals of increase and decrease exactly." },
    { field: "Physics (Mechanics, E&M)", why: "Average and instantaneous velocity and acceleration are rates of change of position and velocity." },
    { field: "Economics/Operations research", why: "Marginal analysis and optimisation locate maxima of profit and minima of cost." },
    { field: "Data science", why: "Gradient methods move along the direction in which a function decreases fastest to train models." }
  ],
  mistakes: [
    { wrong: `Writing the intervals with <i>y</i>-values: "increasing on <span class="m">(−2, 2)</span>" because the curve climbs from −2 to 2.`, fix: `Intervals of increase and decrease are sets of inputs. Read them along the <i>x</i>-axis: <span class="m"><i>x</i><sup>3</sup> − 3<i>x</i></span> increases on <span class="m">(−∞, −1) ∪ (1, ∞)</span>.` },
    { wrong: `Mixing the order: <span class="m">(<i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>))/(<i>a</i> − <i>b</i>)</span>.`, fix: `Subtract in the same order on top and bottom. Mixing them flips the sign of the rate.` },
    { wrong: `Calling every local maximum the maximum of the function.`, fix: `A local maximum is only the highest point nearby. Compare it with the values everywhere else, including the ends of the domain and the end behaviour, before calling it absolute.` }
  ],
  practice: [
    { q: `Find the average rate of change of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> on <span class="m">[1, 4]</span>.`, a: `<span class="m">(16 − 1)/(4 − 1) = 15/3 = 5</span>.` },
    { q: `A town had 12 400 people in 2010 and 15 600 in 2020. Find the average rate of change of its population, with units.`, a: `<span class="m">(15 600 − 12 400)/(2020 − 2010) = 3200/10 = 320</span> people per year.` },
    { q: `For <span class="m"><i>g</i>(<i>x</i>) = −<i>x</i><sup>2</sup> + 6<i>x</i> − 5</span>, give the intervals of increase and decrease and the absolute maximum.`, a: `The vertex is at <span class="m"><i>x</i> = −6/(−2) = 3</span>, <span class="m"><i>g</i>(3) = 4</span>. Increasing on <span class="m">(−∞, 3)</span>, decreasing on <span class="m">(3, ∞)</span>; absolute maximum 4 at <span class="m"><i>x</i> = 3</span>.` },
    { q: `Find the average rate of change of <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup></span> on <span class="m">[1, 1 + <i>h</i>]</span> (<span class="m"><i>h</i> ≠ 0</span>). What value does it approach as <span class="m"><i>h</i></span> gets close to 0?`, a: `<span class="m">((1 + <i>h</i>)<sup>3</sup> − 1)/<i>h</i> = (3<i>h</i> + 3<i>h</i><sup>2</sup> + <i>h</i><sup>3</sup>)/<i>h</i> = 3 + 3<i>h</i> + <i>h</i><sup>2</sup></span>, which approaches 3.` }
  ],
  origin: `<p>Nicole Oresme drew graphs of changing quantities around 1350, plotting a velocity against time, and noticed that a quantity changes least near its greatest value. Pierre de Fermat turned that observation into a method for finding maxima and minima in the 1630s by comparing <span class="m"><i>f</i>(<i>x</i>)</span> with <span class="m"><i>f</i>(<i>x</i> + <i>e</i>)</span> for a small <span class="m"><i>e</i></span>, which is the average rate of change over a short interval. Newton and Leibniz made that comparison into the derivative later in the century.</p>`
};
