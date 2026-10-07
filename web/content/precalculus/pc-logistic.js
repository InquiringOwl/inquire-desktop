window.ARITH = window.ARITH || {};
ARITH["pc-logistic"] = {
  title: "Logistic Growth Models",
  short: "Growth that starts exponential and levels off at a limit",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · logistic models",
  hero: `<span class="m"><i>f</i>(<span class="c1"><i>t</i></span>) = <span class="fr"><span class="c4">1200</span><span>1 + 39<i>e</i><sup>−0.8<span class="c1"><i>t</i></span></sup></span></span></span>`,
  lede: `Real growth runs out of room. A logistic model grows almost exponentially at first, is fastest when it reaches half of its limit, and then levels off at the <b>carrying capacity</b>.`,
  plain: `<p>A rumour starts with 30 students in a school of 1200. At first each new person who hears it tells others, so the number of people who know grows roughly exponentially. But the more people already know, the harder it is to find someone new. Growth slows and the count creeps up toward 1200 without passing it.</p>
<p>The graph is an S-shaped curve. It starts low, bends upward, turns at the middle, and flattens toward a horizontal line. That line is the <span class="c4">carrying capacity</span>: the most the environment, market or population can hold.</p>
<p>The turning point is the <span class="c5">inflection point</span>. It sits exactly halfway up, at half the carrying capacity, and there the curve is steepest: the quantity is growing fastest. Before it, growth speeds up; after it, growth slows down.</p>
<p>Questions like "when will 900 students know?" are answered the same way as for exponential models: isolate the exponential and take a natural logarithm.</p>`,
  formal: `<p>A <b>logistic growth model</b> has the form</p>
<div class="display"><i>f</i>(<span class="c1"><i>t</i></span>) = <span class="fr"><span class="c4"><i>c</i></span><span>1 + <i>a</i><i>e</i><sup>−<i>b</i><span class="c1"><i>t</i></span></sup></span></span>, &nbsp; <i>a</i> &gt; 0, <i>b</i> &gt; 0, <i>c</i> &gt; 0</div>
<p>The <span class="c4">carrying capacity</span> is <span class="m"><span class="c4"><i>c</i></span></span>, the horizontal asymptote as <span class="m"><i>t</i> → ∞</span>. The initial value is <span class="m"><i>f</i>(0) = <i>c</i>/(1 + <i>a</i>)</span>, so <span class="m"><i>a</i> = (<i>c</i> − <i>f</i>(0))/<i>f</i>(0)</span>. The growth rate is <span class="m"><i>b</i></span>. For <span class="m"><i>a</i> &gt; 1</span> the <span class="c5">inflection point</span> is at</p>
<div class="display"><i>t</i> = <span class="fr"><span>ln <i>a</i></span><span><i>b</i></span></span>, &nbsp; <i>f</i> = <span class="fr"><span><i>c</i></span><span>2</span></span>, &nbsp; where the rate of growth is greatest, <span class="fr"><span><i>bc</i></span><span>4</span></span> per unit of time.</div>
<p>The relative growth rate is <span class="m"><i>f</i>′/<i>f</i> = <i>b</i>(1 − <i>f</i>/<i>c</i>)</span>. While <span class="m"><i>f</i></span> is small compared with <span class="m"><i>c</i></span> this is close to <span class="m"><i>b</i></span>, so early on the model stays close to the <span class="c2">exponential</span> <span class="m"><i>f</i>(0)<i>e</i><sup><i>bt</i></sup></span>. Solving <span class="m"><i>f</i>(<i>t</i>) = <i>L</i></span> for <span class="m">0 &lt; <i>L</i> &lt; <i>c</i></span> gives <span class="m"><i>t</i> = ln(<i>aL</i>/(<i>c</i> − <i>L</i>))/<i>b</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>t</i>`, name: "Time", desc: "The input: days, years or hours since the start." },
    { c: "c3", sym: `<i>f</i>(<i>t</i>)`, name: "Logistic curve", desc: "The S-shaped model of the quantity that is growing." },
    { c: "c4", sym: `<i>c</i>`, name: "Carrying capacity", desc: "The level the curve approaches but never passes." },
    { c: "c2", sym: `<i>f</i>(0)<i>e</i><sup><i>bt</i></sup>`, name: "Exponential comparison", desc: "Unlimited growth from the same start at the same rate b." },
    { c: "c5", sym: `(ln <i>a</i>/<i>b</i>, <i>c</i>/2)`, name: "Inflection point / answer", desc: "Where growth is fastest; also the times the lab solves for." }
  ],
  steps: {
    title: "How to work with a logistic model",
    items: [
      `Read the <span class="c4">carrying capacity</span> <span class="m"><i>c</i></span> from the numerator.`,
      `Find the initial value <span class="m"><i>f</i>(0) = <i>c</i>/(1 + <i>a</i>)</span>, or, given <span class="m"><i>f</i>(0)</span>, find <span class="m"><i>a</i> = (<i>c</i> − <i>f</i>(0))/<i>f</i>(0)</span>.`,
      `Locate the <span class="c5">inflection point</span> <span class="m">(ln <i>a</i>/<i>b</i>, <i>c</i>/2)</span>: growth is fastest there.`,
      `To find when <span class="m"><i>f</i>(<i>t</i>) = <i>L</i></span>: multiply out, isolate <span class="m"><i>e</i><sup>−<i>bt</i></sup></span>, take ln of both sides, divide by <span class="m">−<i>b</i></span>.`,
      `Given one more data point, the same steps solve for <span class="m"><i>b</i></span> instead of <span class="m"><i>t</i></span>.`,
      `Check the answer is sensible: a level at or above <span class="m"><i>c</i></span> is never reached.`
    ]
  },
  example: {
    prompt: `A rumour spreads through a school of 1200 students according to <span class="m"><i>f</i>(<i>t</i>) = 1200/(1 + 39<i>e</i><sup>−0.8<i>t</i></sup>)</span>, with <span class="m"><i>t</i></span> in days. How many knew it at the start, when is it spreading fastest, and when will 900 students know?`,
    lines: [
      { math: `<span class="m"><i>f</i>(0) = <span class="fr"><span>1200</span><span>1 + 39</span></span> = 30</span>`, note: "At t = 0 the exponential term is 39." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>ln 39</span><span>0.8</span></span> ≈ 4.58, &nbsp; <i>f</i> = 600</span>`, note: "The inflection point: half of 1200, fastest spread." },
      { math: `<span class="m">1200/(1 + 39<i>e</i><sup>−0.8<i>t</i></sup>) = 900 ⇒ 1 + 39<i>e</i><sup>−0.8<i>t</i></sup> = <span class="fr"><span>4</span><span>3</span></span></span>`, note: "Multiply both sides by the denominator and divide by 900." },
      { math: `<span class="m">39<i>e</i><sup>−0.8<i>t</i></sup> = <span class="fr"><span>1</span><span>3</span></span> ⇒ <i>e</i><sup>−0.8<i>t</i></sup> = <span class="fr"><span>1</span><span>117</span></span></span>`, note: "Isolate the exponential." },
      { math: `<span class="m">−0.8<i>t</i> = ln <span class="fr"><span>1</span><span>117</span></span> = −ln 117</span>`, note: "Take the natural log of both sides." },
      { math: `<span class="m"><i>t</i> = <span class="fr"><span>ln 117</span><span>0.8</span></span> ≈ 5.953</span>`, note: "Divide by −0.8." }
    ],
    answer: `30 students at the start; fastest spread at about day 4.58 (600 students, 240 new students a day); 900 students know after about 5.95 days.`
  },
  why: `<p>Unlimited exponential growth is a good model only for a while. Populations, epidemics, sales of a new product and the spread of news all slow down as they approach a limit. The logistic model is the simplest curve with that behaviour, and its parameters have meanings people can measure: the starting value, the early growth rate and the ceiling. The inflection point tells a manager or an epidemiologist when the peak of new cases or new sales arrives.</p>`,
  careers: [
    { role: "Epidemiologist", use: "Fits S-curves to cumulative case counts to estimate the final size of an outbreak and when new cases peak." },
    { role: "Fisheries scientist", use: "Uses the logistic model to set harvest limits; the fastest regrowth happens at half the carrying capacity." },
    { role: "Wildlife ecologist", use: "Estimates the carrying capacity of a habitat from survey counts of a reintroduced species." },
    { role: "Marketing analyst", use: "Forecasts the adoption of a new product and when its sales growth will start to slow." },
    { role: "Technology forecaster", use: "Models the market share of a new technology, such as electric cars, as an S-curve toward saturation." },
    { role: "Data scientist", use: "Uses logistic curves for growth forecasts and as the sigmoid in classification models." }
  ],
  life: [
    "How fast a video or meme spreads and then fades",
    "Why a new phone sells slowly, then fast, then slowly again",
    "The number of people who have heard a piece of news",
    "Bacteria filling a petri dish",
    "Fish stocks recovering after a fishing ban"
  ],
  fields: [
    { name: "Ecology", use: "Population growth with limited food and space follows the logistic equation." },
    { name: "Epidemiology", use: "Cumulative infections in a simple epidemic trace an S-curve." },
    { name: "Economics", use: "Diffusion of innovations and market saturation." },
    { name: "Machine learning", use: "The logistic (sigmoid) function turns scores into probabilities." }
  ],
  prereqWhy: {
    "a2-exp-models": "The logistic curve starts out as an exponential model, and the same logarithm steps answer its \"when\" questions."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Calculus I", why: "The derivative shows the growth rate is greatest at c/2, where the second derivative changes sign." },
    { field: "Differential Equations", why: "The logistic function solves dP/dt = bP(1 − P/c), the basic model of limited growth." },
    { field: "Statistics", why: "Logistic regression uses the same S-curve to model probabilities." }
  ],
  mistakes: [
    { wrong: `Reading <span class="m"><i>a</i></span> as the initial value.`, fix: `The initial value is <span class="m"><i>c</i>/(1 + <i>a</i>)</span>. For <span class="m">1200/(1 + 39<i>e</i><sup>−0.8<i>t</i></sup>)</span> it is 30, not 39.` },
    { wrong: `Putting the inflection at <span class="m"><i>t</i> = <i>a</i>/<i>b</i></span>.`, fix: `It is at <span class="m"><i>t</i> = ln <i>a</i>/<i>b</i></span>, where <span class="m"><i>ae</i><sup>−<i>bt</i></sup> = 1</span> and <span class="m"><i>f</i> = <i>c</i>/2</span>.` },
    { wrong: `Solving <span class="m"><i>f</i>(<i>t</i>) = <i>c</i></span> or a larger level and reporting a time.`, fix: `The curve only approaches <span class="m"><i>c</i></span>. The equation leads to <span class="m"><i>e</i><sup>−<i>bt</i></sup> ≤ 0</span>, which has no solution.` }
  ],
  practice: [
    { q: `For <span class="m"><i>f</i>(<i>t</i>) = 500/(1 + 4<i>e</i><sup>−0.3<i>t</i></sup>)</span>, find the carrying capacity and the initial value.`, a: `Carrying capacity 500; <span class="m"><i>f</i>(0) = 500/5 = 100</span>.` },
    { q: `Find the inflection point of <span class="m"><i>f</i>(<i>t</i>) = 1000/(1 + 9<i>e</i><sup>−0.5<i>t</i></sup>)</span>.`, a: `<span class="m"><i>t</i> = ln 9/0.5 = 4 ln 3 ≈ 4.394</span>, <span class="m"><i>f</i> = 500</span>.` },
    { q: `For the same model, when does <span class="m"><i>f</i>(<i>t</i>) = 800</span>?`, a: `<span class="m">1 + 9<i>e</i><sup>−0.5<i>t</i></sup> = 5/4</span>, so <span class="m"><i>e</i><sup>−0.5<i>t</i></sup> = 1/36</span> and <span class="m"><i>t</i> = 2 ln 36 = 4 ln 6 ≈ 7.167</span>.` },
    { q: `A lake can hold 2000 fish. It is stocked with 50, and after 4 years there are 200. Find a logistic model.`, a: `<span class="m"><i>a</i> = (2000 − 50)/50 = 39</span>. Then <span class="m">1 + 39<i>e</i><sup>−4<i>b</i></sup> = 10</span>, <span class="m"><i>e</i><sup>−4<i>b</i></sup> = 3/13</span>, <span class="m"><i>b</i> = ln(13/3)/4 ≈ 0.3666</span>: <span class="m"><i>f</i>(<i>t</i>) = 2000/(1 + 39<i>e</i><sup>−0.3666<i>t</i></sup>)</span>.` }
  ],
  origin: `<p>The Belgian mathematician Pierre-François Verhulst proposed the model in 1838 as a correction to Malthus's unlimited exponential growth of population, and named its curve "logistique" in 1845. It was largely forgotten until Raymond Pearl and Lowell Reed rediscovered it in 1920 and fitted it to the population of the United States.</p>`
};
