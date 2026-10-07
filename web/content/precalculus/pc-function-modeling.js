window.ARITH = window.ARITH || {};
ARITH["pc-function-modeling"] = {
  title: "Building Functions from Situations",
  short: "Write the function, find its domain, read the best value",
  grade: "Grade 12 · college Precalculus",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · modeling and optimization",
  hero: `<span class="m"><span class="c3"><i>V</i></span>(<span class="c1"><i>x</i></span>) = <span class="c1"><i>x</i></span>(<span class="c2">12</span> − 2<span class="c1"><i>x</i></span>)(<span class="c2">8</span> − 2<span class="c1"><i>x</i></span>), &nbsp; <span class="c4">0 &lt; <i>x</i> &lt; 4</span></span>`,
  lede: `Many questions in science and business ask for the largest or smallest value of some quantity. To answer them you first write that quantity as a <b>function of one variable</b>, decide which inputs make sense, and then find the highest or lowest point of its graph.`,
  plain: `<p>Cut a square of side <span class="m"><span class="c1"><i>x</i></span></span> from each corner of a 12 by 8 sheet of cardboard and fold up the sides. You get an open box. Small cuts give a wide, flat box; big cuts give a tall, narrow one. Somewhere in between the box holds the most.</p>
<p>To find where, write the volume using only <span class="m"><span class="c1"><i>x</i></span></span>. The base is <span class="m"><span class="c2">12 − 2<i>x</i></span></span> by <span class="m"><span class="c2">8 − 2<i>x</i></span></span> and the height is <span class="m"><span class="c1"><i>x</i></span></span>, so the volume is the product of the three. Every length has to be positive, so <span class="m"><span class="c1"><i>x</i></span></span> must stay between 0 and 4. That range is the <b>practical domain</b>.</p>
<p>Now the question is about a graph: where is the top of the curve over <span class="m">(0, 4)</span>? A graph shows the answer to a few decimal places. When the function is a quadratic, the vertex gives it exactly.</p>`,
  formal: `<p>To build a model: name the quantity to optimize and the variable you control; write every other length or amount in terms of that variable using the constraint (a fixed perimeter, a fixed area, a price–demand rule, the positions of two moving objects at time <i>t</i>); multiply or add to get the function; restrict it to the <b>practical domain</b>, the inputs for which every quantity in the situation is meaningful.</p>
<div class="display"><span class="c3"><i>V</i></span>(<span class="c1"><i>x</i></span>) = <span class="c1"><i>x</i></span>(12 − 2<span class="c1"><i>x</i></span>)(8 − 2<span class="c1"><i>x</i></span>) = 4<i>x</i><sup>3</sup> − 40<i>x</i><sup>2</sup> + 96<i>x</i>, &nbsp; <span class="c4">0 &lt; <i>x</i> &lt; 4</span></div>
<p>When the model is a quadratic <span class="m"><i>f</i>(<i>x</i>) = <i>a</i><i>x</i><sup>2</sup> + <i>b</i><i>x</i> + <i>c</i></span>, its maximum (if <span class="m"><i>a</i> &lt; 0</span>) or minimum (if <span class="m"><i>a</i> &gt; 0</span>) is at the vertex <span class="m"><i>x</i> = −<i>b</i>/(2<i>a</i>)</span>, provided the vertex lies in the practical domain; otherwise the best value is at an end of the domain. For a cubic such as <span class="m"><span class="c3"><i>V</i></span></span> there is no vertex formula. A graph gives <span class="m"><i>x</i> ≈ 1.57</span> and <span class="m"><i>V</i> ≈ 67.6</span>; the exact value <span class="m"><span class="c5"><i>x</i> = (10 − 2√7)/3</span></span> comes from setting the derivative <span class="m"><i>V</i>′(<i>x</i>) = 12<i>x</i><sup>2</sup> − 80<i>x</i> + 96</span> equal to zero, which is calculus.</p>`,
  legend: [
    { c: "c1", sym: `<i>x</i>, <i>w</i>`, name: "Input you control", desc: "The cut size, the width of the pen or the position of the moving point." },
    { c: "c2", sym: `<i>L</i>, <i>W</i>, <i>F</i>`, name: "Given dimensions", desc: "The fixed numbers of the situation and the lengths built from them." },
    { c: "c3", sym: `<i>V</i>, <i>A</i>, <i>d</i>`, name: "Model output", desc: "The quantity being optimized: volume, area or distance." },
    { c: "c4", sym: `0 &lt; <i>x</i> &lt; 4`, name: "Practical domain", desc: "The inputs that make physical sense; its ends are drawn as dashed lines." },
    { c: "c5", sym: `max`, name: "Best value", desc: "The highest or lowest point of the model over the practical domain." },
  ],
  steps: {
    title: "How to build and optimize a model",
    items: [
      `Draw a picture and label it. Choose one variable for the quantity you can change and say what it measures, with units.`,
      `Use the constraint to write every other length or amount in terms of that variable: a fence of length <span class="m">120</span> with three widths <span class="m"><i>w</i></span> leaves <span class="m">120 − 3<i>w</i></span> for the long side.`,
      `Write the quantity to optimize as a function of the one variable, and simplify.`,
      `State the practical domain: every length, count or price must be positive (or nonnegative) and every constraint must hold.`,
      `Find the best value. For a quadratic use the vertex <span class="m">−<i>b</i>/(2<i>a</i>)</span>; for other functions read the highest or lowest point from a graph or table, and check the ends of the domain.`,
      `Answer the question in context, with units: the dimensions as well as the best value.`,
    ],
  },
  example: {
    prompt: `A farmer has <span class="m"><span class="c2">120</span></span> m of fence to build a rectangular pen along a straight wall, split into two pens by a fence parallel to the ends. No fence is needed along the wall. Find the dimensions that give the largest total area.`,
    lines: [
      { math: `<span class="m">widths: 3 pieces of length <span class="c1"><i>w</i></span>; &nbsp; long side: <span class="c2">120 − 3<i>w</i></span></span>`, note: "Three pieces meet the wall; the fence that is left runs parallel to it." },
      { math: `<span class="m"><span class="c3"><i>A</i></span>(<span class="c1"><i>w</i></span>) = <i>w</i>(120 − 3<i>w</i>) = −3<i>w</i><sup>2</sup> + 120<i>w</i></span>`, note: "Area is width times length." },
      { math: `<span class="m"><span class="c4">0 &lt; <i>w</i> &lt; 40</span></span>`, note: "Both sides must be positive: w > 0 and 120 − 3w > 0." },
      { math: `<span class="m"><i>w</i> = −<span class="fr"><span>120</span><span>2(−3)</span></span> = 20</span>`, note: "The parabola opens downward, so the vertex is the maximum." },
      { math: `<span class="m">long side 120 − 60 = 60, &nbsp; <span class="c5"><i>A</i>(20) = 20 · 60 = 1200</span></span>`, note: "Evaluate at the vertex, which lies inside the domain." },
    ],
    answer: `Each end and the middle fence are <span class="m">20</span> m, the side parallel to the wall is <span class="m">60</span> m, and the largest area is <span class="m"><span class="c5">1200</span></span> m².`,
  },
  why: `<p>Optimization is one of the main reasons functions are studied at all. An engineer sizing a beam, a company setting a price and a delivery service planning routes each want the best value of a quantity that depends on a choice. The hard part is rarely the arithmetic: it is turning words and a picture into one function with the right domain.</p>
<p>Precalculus can finish the job for quadratics and can read the answer from a graph for anything else. Calculus supplies the exact answer for every smooth function, and it starts from exactly the model you build here.</p>`,
  careers: [
    { role: "Packaging engineer", use: "Chooses box and carton dimensions that hold a required volume with the least board, starting from a volume function of one cut size." },
    { role: "Operations research analyst", use: "Writes cost or profit as a function of an order size or price and finds where it is best within the allowed range." },
    { role: "Civil engineer", use: "Models the area or flow capacity of a channel cross-section as a function of one dimension and picks the most efficient shape." },
    { role: "Pricing analyst", use: "Combines a price–demand rule with unit costs into a profit function of price and reports the best price." },
    { role: "Agricultural engineer", use: "Plans fenced paddocks and irrigation layouts that enclose the most area for a fixed length of material." },
    { role: "Robotics engineer", use: "Writes the distance from a tool to a target as a function of a joint position and finds the closest reachable point." },
  ],
  life: [
    "Choosing the size of a garden bed when you have a fixed length of edging",
    "Working out which ticket price brings in the most money for a club event",
    "Cutting the corners of a sheet to fold the biggest possible tray",
    "Finding the point on a path that comes closest to a landmark",
    "Deciding how many items to order at once to keep total costs low",
  ],
  fields: [
    { name: "Economics", use: "Revenue, cost and profit are modeled as functions of price or quantity and optimized subject to constraints." },
    { name: "Engineering", use: "Design choices such as dimensions and angles are picked to maximize strength or capacity for the material used." },
    { name: "Physics", use: "Distances, energies and travel times are written as functions of one parameter and minimized." },
    { name: "Biology", use: "Models of foraging and growth find the strategy or size that maximizes energy gained per unit time." },
  ],
  prereqWhy: {
    "pc-function-behavior": "Finding the best value means reading where a graph increases, decreases and turns, which is the behaviour of functions studied there.",
    "a2-quad-vertex": "When the model is a quadratic, the vertex formula x = −b/(2a) gives the best value exactly.",
  },
  unlocksWhy: {
    "pc-tangent-rate": "At the best point of a smooth model the graph is flat; the slope of the tangent line, found as a limit of secant slopes, makes that exact.",
  },
  beyond: [
    { field: "Calculus I", why: "Setting the derivative of the model equal to zero gives the exact optimum of cubics, roots and other non-quadratic models." },
    { field: "Economics/Operations research", why: "Linear and nonlinear programming optimize models with many variables and several constraints at once." },
    { field: "Calculus III", why: "Functions of two or more variables are optimized with partial derivatives and Lagrange multipliers." },
  ],
  mistakes: [
    { wrong: `Giving the vertex of the volume formula's graph outside the situation, such as a cut of <span class="m"><i>x</i> = 5</span> from an 8-wide sheet.`, fix: `Write the practical domain first. Here <span class="m">8 − 2<i>x</i> &gt; 0</span> forces <span class="m">0 &lt; <i>x</i> &lt; 4</span>, and the best value must be found inside it.` },
    { wrong: `Using all 120 m of fence for four sides when one side is a wall: <span class="m">2<i>w</i> + 2<i>ℓ</i> = 120</span>.`, fix: `Count only the pieces you build. With a wall and one divider, three widths and one length use the fence: <span class="m">3<i>w</i> + <i>ℓ</i> = 120</span>.` },
    { wrong: `Answering only "the maximum area is 1200".`, fix: `The question asks for dimensions too. Report the input (<span class="m"><i>w</i> = 20</span> m), the other side (<span class="m">60</span> m) and the best value, with units.` },
  ],
  practice: [
    { q: `A rectangle has perimeter <span class="m">40</span> cm. Write its area as a function of its width <span class="m"><i>w</i></span>, give the practical domain and find the largest area.`, a: `Length <span class="m">20 − <i>w</i></span>, so <span class="m"><i>A</i>(<i>w</i>) = <i>w</i>(20 − <i>w</i>)</span> on <span class="m">(0, 20)</span>. Vertex <span class="m"><i>w</i> = 10</span>: a square with area <span class="m">100</span> cm².` },
    { q: `Squares of side <span class="m"><i>x</i></span> are cut from the corners of a 12 by 8 sheet to make an open box. Write <span class="m"><i>V</i>(<i>x</i>)</span>, its practical domain, and compare <span class="m"><i>V</i>(1)</span> and <span class="m"><i>V</i>(2)</span>.`, a: `<span class="m"><i>V</i>(<i>x</i>) = <i>x</i>(12 − 2<i>x</i>)(8 − 2<i>x</i>)</span> on <span class="m">(0, 4)</span>. <span class="m"><i>V</i>(1) = 1 · 10 · 6 = 60</span> and <span class="m"><i>V</i>(2) = 2 · 8 · 4 = 64</span>; the graph peaks between them, near <span class="m"><i>x</i> ≈ 1.57</span> with <span class="m"><i>V</i> ≈ 67.6</span>.` },
    { q: `A shop sells <span class="m">200 − 4<i>p</i></span> mugs a week at a price of <span class="m"><i>p</i></span> dollars, and each mug costs $10 to make. Write the weekly profit as a function of <span class="m"><i>p</i></span> and find the best price.`, a: `<span class="m"><i>P</i>(<i>p</i>) = (<i>p</i> − 10)(200 − 4<i>p</i>) = −4<i>p</i><sup>2</sup> + 240<i>p</i> − 2000</span> on <span class="m">[0, 50]</span>, since sales cannot be negative. Vertex <span class="m"><i>p</i> = 240/8 = 30</span>: 80 mugs and a profit of <span class="m">$1600</span>.` },
    { q: `Find the point on the graph of <span class="m"><i>y</i> = √<span class="ov"><i>x</i></span></span> closest to <span class="m">(3, 0)</span>.`, a: `<span class="m"><i>d</i><sup>2</sup> = (<i>x</i> − 3)<sup>2</sup> + <i>x</i> = <i>x</i><sup>2</sup> − 5<i>x</i> + 9</span>, smallest at <span class="m"><i>x</i> = 5/2</span> (minimizing <span class="m"><i>d</i><sup>2</sup></span> minimizes <span class="m"><i>d</i></span>). The point is <span class="m">(5/2, √10/2)</span> and the distance is <span class="m">√11/2 ≈ 1.66</span>.` },
  ],
  origin: `<p>Optimization problems are old: the story of Queen Dido enclosing the most land with a strip of oxhide is told by Virgil, and Euclid's <i>Elements</i> (Book VI, proposition 27) contains a maximum result from which it follows that, of all rectangles with a given perimeter, the square has the greatest area. Pierre de Fermat gave a general method for maxima and minima around 1636, and Newton and Leibniz turned it into the derivative later that century.</p>`,
};
