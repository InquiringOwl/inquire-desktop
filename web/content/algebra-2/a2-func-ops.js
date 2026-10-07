window.ARITH = window.ARITH || {};

ARITH["a2-func-ops"] = {
  title: "Function Operations & Composition",
  short: "Add, multiply, divide and compose functions, with domains",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Functions · combining and composing",
  hero: `<span class="m">(<span class="c1"><i>f</i></span> ∘ <span class="c2"><i>g</i></span>)(<i>x</i>) = <span class="c1"><i>f</i></span>(<span class="c2"><i>g</i>(<i>x</i>)</span>) &nbsp; ≠ &nbsp; <span class="c2"><i>g</i></span>(<span class="c1"><i>f</i>(<i>x</i>)</span>)</span>`,
  lede: `Two functions <span class="c1"><i>f</i></span> and <span class="c2"><i>g</i></span> can be combined into a <span class="c3">new function</span> by adding, subtracting, multiplying or dividing their outputs, or by feeding the output of one into the other. Each new function has its own <span class="c4">domain</span>, and finding it is half the work.`,
  plain: `<p>If <span class="c1"><i>f</i></span> and <span class="c2"><i>g</i></span> both give a number at the same input <span class="m"><i>x</i></span>, you can add those two numbers. Doing that at every <span class="m"><i>x</i></span> makes a new function, <span class="m"><i>f</i> + <i>g</i></span>. On a graph, its height at each <span class="m"><i>x</i></span> is the height of <span class="c1"><i>f</i></span> plus the height of <span class="c2"><i>g</i></span>. Differences, products and quotients work the same way. The new function only exists where both originals do, and a quotient also fails where the bottom function is zero.</p>
<p><b>Composition</b> is a chain. Put <span class="m"><i>x</i></span> into <span class="c2"><i>g</i></span>, take the output, and put that into <span class="c1"><i>f</i></span>. The result is <span class="m"><i>f</i>(<i>g</i>(<i>x</i>))</span>, read "<i>f</i> of <i>g</i> of <i>x</i>". Think of two machines in a row. A sales tax applied after a discount is a composition, and so is converting a temperature reading from a sensor's voltage to Celsius to Fahrenheit.</p>
<p>The order matters. A $10 coupon taken off before an 8% tax leaves a different total from the same coupon taken off after the tax, and <span class="m"><i>f</i>(<i>g</i>(<i>x</i>))</span> is usually different from <span class="m"><i>g</i>(<i>f</i>(<i>x</i>))</span>. The chain also breaks if the first machine's output is something the second cannot accept, so the domain of a composition can be smaller than either domain alone.</p>`,
  formal: `<p>For functions <span class="c1"><i>f</i></span> and <span class="c2"><i>g</i></span> with domains <span class="m"><i>D<sub>f</sub></i></span> and <span class="m"><i>D<sub>g</sub></i></span>, the <b>sum, difference, product</b> and <b>quotient</b> are defined pointwise:</p>
<div class="display">(<i>f</i> ± <i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>) ± <i>g</i>(<i>x</i>), &nbsp; (<i>fg</i>)(<i>x</i>) = <i>f</i>(<i>x</i>)<i>g</i>(<i>x</i>) &nbsp; on <span class="c4"><i>D<sub>f</sub></i> ∩ <i>D<sub>g</sub></i></span><br>(<i>f</i>/<i>g</i>)(<i>x</i>) = <i>f</i>(<i>x</i>)/<i>g</i>(<i>x</i>) &nbsp; on <span class="c4">{<i>x</i> ∈ <i>D<sub>f</sub></i> ∩ <i>D<sub>g</sub></i> : <i>g</i>(<i>x</i>) ≠ 0}</span></div>
<p>The <b>composition</b> of <span class="c1"><i>f</i></span> with <span class="c2"><i>g</i></span> is <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>f</i>(<i>g</i>(<i>x</i>))</span>, with domain <span class="c4">{<i>x</i> ∈ <i>D<sub>g</sub></i> : <i>g</i>(<i>x</i>) ∈ <i>D<sub>f</sub></i>}</span>. Composition is not commutative: for <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span> and <span class="m"><i>g</i>(<i>x</i>) = <i>x</i> + 1</span>, <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = (<i>x</i> + 1)<sup>2</sup> = <i>x</i><sup>2</sup> + 2<i>x</i> + 1</span> while <span class="m">(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>x</i><sup>2</sup> + 1</span>. Simplifying a formula never changes the domain: the restrictions found from the inner function stay.</p>
<p><b>Decomposing</b> means writing a given function as a composition. For <span class="m"><i>h</i>(<i>x</i>) = (3<i>x</i> − 1)<sup>5</sup></span>, take the inner function <span class="m"><span class="c2"><i>g</i>(<i>x</i>) = 3<i>x</i> − 1</span></span> and the outer function <span class="m"><span class="c1"><i>f</i>(<i>x</i>) = <i>x</i><sup>5</sup></span></span>; then <span class="m"><i>h</i> = <i>f</i> ∘ <i>g</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>f</i>`, name: "Outer function", desc: "In f(g(x)) it acts second, on the output of g." },
    { c: "c2", sym: `<i>g</i>`, name: "Inner function", desc: "In f(g(x)) it acts first, on x itself." },
    { c: "c3", sym: `<i>f</i> + <i>g</i>, <i>f</i> ∘ <i>g</i>`, name: "Result", desc: "The new function made by an operation or a composition." },
    { c: "c4", sym: `<i>D</i>`, name: "Domain", desc: "Where the result is defined: both inputs exist, no division by zero, and the inner output is allowed in the outer function." }
  ],
  steps: {
    title: "How to compose two functions and find the domain",
    items: [
      `Write the domains <span class="m"><i>D<sub>f</sub></i></span> and <span class="m"><i>D<sub>g</sub></i></span> of both functions first.`,
      `To evaluate <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>a</i>)</span>, work from the inside: find <span class="m"><span class="c2"><i>g</i>(<i>a</i>)</span></span>, then put that number into <span class="c1"><i>f</i></span>.`,
      `To find a formula, replace every <span class="m"><i>x</i></span> in <span class="m"><span class="c1"><i>f</i>(<i>x</i>)</span></span> by the whole expression <span class="m"><span class="c2"><i>g</i>(<i>x</i>)</span></span>, in parentheses.`,
      `Simplify the result.`,
      `For the domain, keep the <span class="m"><i>x</i></span> in <span class="m"><i>D<sub>g</sub></i></span> whose output <span class="m"><i>g</i>(<i>x</i>)</span> lies in <span class="m"><i>D<sub>f</sub></i></span>. Write it in interval notation.`
    ]
  },
  example: {
    prompt: `Let <span class="m"><span class="c1"><i>f</i>(<i>x</i>) = √<span class="ov"><i>x</i> − 1</span></span></span> and <span class="m"><span class="c2"><i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 4</span></span>. Find <span class="m">(<i>f</i> ∘ <i>g</i>)(3)</span> and <span class="m">(<i>g</i> ∘ <i>f</i>)(3)</span>, then the formulas and domains of <span class="m"><i>f</i> ∘ <i>g</i></span> and <span class="m"><i>g</i> ∘ <i>f</i></span>.`,
    lines: [
      { math: `<span class="m"><span class="c2"><i>g</i>(3) = 9 − 4 = 5</span>, &nbsp; <span class="c3"><i>f</i>(5) = √<span class="ov">4</span> = 2</span></span>`, note: "Inside first: g acts on 3, then f acts on the result. So (f ∘ g)(3) = 2." },
      { math: `<span class="m"><span class="c1"><i>f</i>(3) = √<span class="ov">2</span></span>, &nbsp; <span class="c3"><i>g</i>(√<span class="ov">2</span>) = 2 − 4 = −2</span></span>`, note: "The other order gives (g ∘ f)(3) = −2, a different number." },
      { math: `<span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = √<span class="ov">(<i>x</i><sup>2</sup> − 4) − 1</span> = <span class="c3">√<span class="ov"><i>x</i><sup>2</sup> − 5</span></span></span>`, note: "Replace x in f by the whole expression g(x)." },
      { math: `<span class="m"><i>x</i><sup>2</sup> − 5 ≥ 0 ⇔ <i>x</i> ≤ −√<span class="ov">5</span> or <i>x</i> ≥ √<span class="ov">5</span></span>`, note: "g accepts every x; f needs its input g(x) to be at least 1, so x² − 4 ≥ 1." },
      { math: `<span class="m">(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (√<span class="ov"><i>x</i> − 1</span>)<sup>2</sup> − 4 = <span class="c3"><i>x</i> − 5</span></span>`, note: "The square undoes the root, but only for inputs where the root exists." },
      { math: `<span class="m"><span class="c4"><i>D</i> = [1, ∞)</span></span>`, note: "f needs x ≥ 1. The simplified formula x − 5 hides this, but the domain keeps it." }
    ],
    answer: `<span class="m">(<i>f</i> ∘ <i>g</i>)(3) = 2</span> and <span class="m">(<i>g</i> ∘ <i>f</i>)(3) = −2</span>. <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = √<span class="ov"><i>x</i><sup>2</sup> − 5</span></span> on <span class="m">(−∞, −√<span class="ov">5</span>] ∪ [√<span class="ov">5</span>, ∞)</span>; <span class="m">(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>x</i> − 5</span> on <span class="m">[1, ∞)</span>.`
  },
  why: `<p>Real processes come in stages. A price goes through a discount and then a tax; a sensor turns temperature into voltage and a chip turns voltage into a number; a population model feeds this year's output into next year's input. Composition is the algebra of stages, and the domain rule says which inputs survive every stage.</p>
<p>Composition is also the language of later topics. Inverse functions are defined by <span class="m"><i>f</i>(<i>f</i><sup>−1</sup>(<i>x</i>)) = <i>x</i></span>, transformations are compositions with simple linear functions, and in calculus the chain rule differentiates a composition by splitting it back into its inner and outer parts.</p>`,
  careers: [
    { role: "Software engineer", use: "Builds data pipelines as compositions of small functions, where the output type of one stage must be a valid input to the next." },
    { role: "Retail pricing analyst", use: "Compares discount-then-tax with tax-then-discount and sums cost and shipping functions to set final prices." },
    { role: "Electrical engineer", use: "Chains a sensor's response with an amplifier's gain function to predict the voltage a circuit finally reads." },
    { role: "Actuary", use: "Composes a claim-frequency model with a cost-per-claim model and adds expense functions to price insurance." },
    { role: "Economist", use: "Writes profit as revenue minus cost, P(x) = R(x) − C(x), and average cost as the quotient C(x)/x." },
    { role: "Climate modeller", use: "Feeds emissions into a concentration model and that into a temperature model, a composition of submodels." }
  ],
  life: [
    "A coupon applied before or after sales tax changes the final price",
    "Total cost of a trip is fuel cost plus tolls, a sum of two functions of distance",
    "Converting miles to kilometres and then kilometres to metres is one composed conversion",
    "Cost per person is total cost divided by the number of people, a quotient of functions",
    "A photo filter applied after a crop gives a different picture than crop after filter"
  ],
  fields: [
    { name: "Computer science", use: "Functional programming builds programs by composing functions; type checking is a domain check." },
    { name: "Economics", use: "Profit, average cost and marginal revenue are sums, differences and quotients of functions." },
    { name: "Physics", use: "Position as a function of time, fed into energy as a function of position, gives energy as a function of time." },
    { name: "Chemistry", use: "Rate laws compose concentration as a function of time with rate as a function of concentration." }
  ],
  prereqWhy: {
    "a1-functions": "Function notation, evaluating f(a) and finding the domain of a single function are the parts every operation here is built from.",
    "a1-poly-mult": "Products such as (fg)(x) and compositions such as (x + 1)² expand by multiplying polynomials."
  },
  unlocksWhy: {
    "a2-inverses": "An inverse function is defined by composition: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x.",
    "pc-function-behavior": "Evaluating <i>f</i> at two inputs and combining the outputs, as in <i>f</i>(<i>b</i>) − <i>f</i>(<i>a</i>), is the arithmetic behind comparing how fast two functions change.",
    "pc-parametric": "Composing functions, feeding the output of one into the next, is how <i>x</i>(<i>t</i>) and <i>y</i>(<i>t</i>) are combined and how a parameter is eliminated to leave <i>y</i> as a function of <i>x</i>."
  },
  beyond: [
    { field: "Calculus I", why: "The chain rule differentiates a composition f(g(x)) by its outer and inner parts, so decomposing functions is daily work." },
    { field: "Precalculus", why: "Trigonometric, exponential and logarithmic models are built and simplified as compositions." },
    { field: "Computer science", why: "Function composition and domain errors are the core of functional programming and type systems." },
    { field: "Linear Algebra", why: "Composing linear transformations corresponds to multiplying their matrices, and again order matters." }
  ],
  mistakes: [
    { wrong: `Computing <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>)</span> as the product <span class="m"><i>f</i>(<i>x</i>) · <i>g</i>(<i>x</i>)</span>.`, fix: `The circle means "of": substitute <span class="m"><i>g</i>(<i>x</i>)</span> into <span class="m"><i>f</i></span>. For <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>, <i>g</i>(<i>x</i>) = <i>x</i> + 1</span>, <span class="m"><i>f</i>(<i>g</i>(<i>x</i>)) = (<i>x</i> + 1)<sup>2</sup></span>, not <span class="m"><i>x</i><sup>2</sup>(<i>x</i> + 1)</span>.` },
    { wrong: `Taking the domain of <span class="m"><i>g</i> ∘ <i>f</i></span> from the simplified formula <span class="m"><i>x</i> − 5</span> and answering <span class="m">(−∞, ∞)</span>.`, fix: `The inner function <span class="m">√<span class="ov"><i>x</i> − 1</span></span> needs <span class="m"><i>x</i> ≥ 1</span>. The domain is <span class="m">[1, ∞)</span>, whatever the simplified formula looks like.` },
    { wrong: `Assuming <span class="m"><i>f</i> ∘ <i>g</i> = <i>g</i> ∘ <i>f</i></span>.`, fix: `Check one value. With <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i></span> and <span class="m"><i>g</i>(<i>x</i>) = <i>x</i> + 3</span>: <span class="m"><i>f</i>(<i>g</i>(0)) = 6</span> but <span class="m"><i>g</i>(<i>f</i>(0)) = 3</span>.` },
    { wrong: `Giving the domain of <span class="m"><i>f</i>/<i>g</i></span> as <span class="m"><i>D<sub>f</sub></i> ∩ <i>D<sub>g</sub></i></span> only.`, fix: `Also remove every <span class="m"><i>x</i></span> where <span class="m"><i>g</i>(<i>x</i>) = 0</span>, even if <span class="m"><i>f</i>(<i>x</i>)</span> is zero there too.` }
  ],
  practice: [
    { q: `Let <span class="m"><i>f</i>(<i>x</i>) = 2<i>x</i> + 1</span> and <span class="m"><i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup> − 3</span>. Find <span class="m">(<i>f</i> + <i>g</i>)(<i>x</i>)</span> and <span class="m">(<i>fg</i>)(2)</span>.`, a: `<span class="m">(<i>f</i> + <i>g</i>)(<i>x</i>) = <i>x</i><sup>2</sup> + 2<i>x</i> − 2</span>. <span class="m"><i>f</i>(2) = 5</span>, <span class="m"><i>g</i>(2) = 1</span>, so <span class="m">(<i>fg</i>)(2) = 5</span>.` },
    { q: `Let <span class="m"><i>f</i>(<i>x</i>) = √<span class="ov"><i>x</i></span></span> and <span class="m"><i>g</i>(<i>x</i>) = <i>x</i> − 4</span>. Find <span class="m">(<i>f</i>/<i>g</i>)(<i>x</i>)</span> and its domain.`, a: `<span class="m">(<i>f</i>/<i>g</i>)(<i>x</i>) = √<span class="ov"><i>x</i></span>/(<i>x</i> − 4)</span>. Need <span class="m"><i>x</i> ≥ 0</span> and <span class="m"><i>x</i> ≠ 4</span>: domain <span class="m">[0, 4) ∪ (4, ∞)</span>.` },
    { q: `Let <span class="m"><i>f</i>(<i>x</i>) = <span class="fr"><span>1</span><span><i>x</i> − 2</span></span></span> and <span class="m"><i>g</i>(<i>x</i>) = 3<i>x</i></span>. Find <span class="m"><i>f</i> ∘ <i>g</i></span> and <span class="m"><i>g</i> ∘ <i>f</i></span> with their domains.`, a: `<span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <span class="fr"><span>1</span><span>3<i>x</i> − 2</span></span></span>, <span class="m"><i>x</i> ≠ <span class="fr"><span>2</span><span>3</span></span></span>. <span class="m">(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <span class="fr"><span>3</span><span><i>x</i> − 2</span></span></span>, <span class="m"><i>x</i> ≠ 2</span>.` },
    { q: `Let <span class="m"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></span>. Find every linear function <span class="m"><i>g</i></span> with <span class="m">(<i>f</i> ∘ <i>g</i>)(<i>x</i>) = 4<i>x</i><sup>2</sup> − 12<i>x</i> + 9</span>.`, a: `<span class="m">4<i>x</i><sup>2</sup> − 12<i>x</i> + 9 = (2<i>x</i> − 3)<sup>2</sup></span>, and <span class="m">(<i>g</i>(<i>x</i>))<sup>2</sup> = (2<i>x</i> − 3)<sup>2</sup></span> gives <span class="m"><i>g</i>(<i>x</i>) = 2<i>x</i> − 3</span> or <span class="m"><i>g</i>(<i>x</i>) = −2<i>x</i> + 3</span>.` }
  ],
  origin: `<p>Leonhard Euler introduced the notation f(x) in 1734 and treated functions as objects that could be combined. Composition was used long before it had a name, for example in substitutions in seventeenth-century algebra. The small circle symbol ∘ for composition came into wide use in the twentieth century and is now standard in algebra and analysis.</p>`
};
