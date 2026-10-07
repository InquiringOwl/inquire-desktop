window.ARITH = window.ARITH || {};

ARITH["a2-log-props"] = {
  title: "Properties of Logarithms",
  short: "Logs turn products into sums and powers into multiples",
  grade: "Grade 11 · college Intermediate Algebra",
  hours: 5,
  voice: "plain",
  eyebrow: "Exponential and logarithmic functions · properties of logarithms",
  hero: `<span class="m">log<sub class="c4">2</sub>(<span class="c1">8 · 4</span>) = log<sub class="c4">2</sub> 8 <span class="c1">+</span> log<sub class="c4">2</sub> 4 = 3 + 2 = 5</span>`,
  lede: `A logarithm is an exponent, so the laws of exponents become laws of logarithms. The log of a <span class="c1">product</span> is a sum, the log of a <span class="c2">quotient</span> is a difference, and the log of a <span class="c3">power</span> is a multiple. With these three rules you can expand, condense and evaluate logs in any <span class="c4">base</span>.`,
  plain: `<p>Multiplying powers of 2 adds their exponents: <span class="m">8 · 4 = 2<sup>3</sup> · 2<sup>2</sup> = 2<sup>5</sup> = 32</span>. Since a logarithm reads off the exponent, <span class="m">log<sub>2</sub> 32 = log<sub>2</sub> 8 + log<sub>2</sub> 4 = 3 + 2</span>. That is the <span class="c1">product rule</span>: the log of a product is the sum of the logs.</p>
<p>Dividing subtracts exponents, so <span class="m">log<sub>2</sub>(8/2) = log<sub>2</sub> 8 − log<sub>2</sub> 2 = 3 − 1 = 2</span>: the <span class="c2">quotient rule</span>. Raising to a power multiplies exponents, so <span class="m">log<sub>2</sub> 8<sup>2</sup> = 2 · log<sub>2</sub> 8 = 6</span>, and indeed <span class="m">8<sup>2</sup> = 64 = 2<sup>6</sup></span>: the <span class="c3">power rule</span>.</p>
<p>There is no rule for the log of a sum. <span class="m">log<sub>2</sub>(4 + 4) = log<sub>2</sub> 8 = 3</span>, while <span class="m">log<sub>2</sub> 4 + log<sub>2</sub> 4 = 4</span>. Calculators only have <span class="m">log</span> and <span class="m">ln</span> keys, so for any other <span class="c4">base</span> you divide two logs: <span class="m">log<sub class="c4">7</sub> 50 = ln 50 / ln 7 ≈ 2.0104</span>. This is the change-of-base formula.</p>`,
  formal: `<p>For a base <span class="m"><span class="c4"><i>b</i></span> > 0</span>, <span class="m"><i>b</i> ≠ 1</span>, positive numbers <span class="m"><i>M</i></span> and <span class="m"><i>N</i></span>, and any real number <span class="m"><i>p</i></span>:</p>
<div class="display"><span class="c1">Product rule</span>: &nbsp;log<sub class="c4"><i>b</i></sub>(<i>MN</i>) = log<sub class="c4"><i>b</i></sub> <i>M</i> + log<sub class="c4"><i>b</i></sub> <i>N</i><br><span class="c2">Quotient rule</span>: &nbsp;log<sub class="c4"><i>b</i></sub>(<i>M</i>/<i>N</i>) = log<sub class="c4"><i>b</i></sub> <i>M</i> − log<sub class="c4"><i>b</i></sub> <i>N</i><br><span class="c3">Power rule</span>: &nbsp;log<sub class="c4"><i>b</i></sub>(<i>M</i><sup><i>p</i></sup>) = <i>p</i> log<sub class="c4"><i>b</i></sub> <i>M</i><br><span class="c4">Change of base</span>: &nbsp;log<sub class="c4"><i>b</i></sub> <i>M</i> = <span class="fr"><span>log<sub><i>a</i></sub> <i>M</i></span><span>log<sub><i>a</i></sub> <i>b</i></span></span> = <span class="fr"><span>ln <i>M</i></span><span>ln <i>b</i></span></span></div>
<p>Proof of the product rule: let <span class="m"><i>u</i> = log<sub><i>b</i></sub> <i>M</i></span> and <span class="m"><i>v</i> = log<sub><i>b</i></sub> <i>N</i></span>, so <span class="m"><i>M</i> = <i>b</i><sup><i>u</i></sup></span>, <span class="m"><i>N</i> = <i>b</i><sup><i>v</i></sup></span> and <span class="m"><i>MN</i> = <i>b</i><sup><i>u</i> + <i>v</i></sup></span>; hence <span class="m">log<sub><i>b</i></sub>(<i>MN</i>) = <i>u</i> + <i>v</i></span>. The other rules follow the same way from <span class="m"><i>b</i><sup><i>u</i></sup>/<i>b</i><sup><i>v</i></sup> = <i>b</i><sup><i>u</i> − <i>v</i></sup></span> and <span class="m">(<i>b</i><sup><i>u</i></sup>)<sup><i>p</i></sup> = <i>b</i><sup><i>pu</i></sup></span>. The inverse properties <span class="m">log<sub><i>b</i></sub> <i>b</i><sup><i>x</i></sup> = <i>x</i></span> and <span class="m"><i>b</i><sup>log<sub><i>b</i></sub> <i>x</i></sup> = <i>x</i></span> (for <span class="m"><i>x</i> > 0</span>), with <span class="m">log<sub><i>b</i></sub> 1 = 0</span> and <span class="m">log<sub><i>b</i></sub> <i>b</i> = 1</span>, complete the toolkit. Using the rules to split one log into many is <b>expanding</b>; running them backward to make a single log is <b>condensing</b>.</p>`,
  legend: [
    { c: "c1", sym: `log(<i>MN</i>)`, name: "Product rule", desc: "The log of a product is the sum of the logs." },
    { c: "c2", sym: `log(<i>M</i>/<i>N</i>)`, name: "Quotient rule", desc: "The log of a quotient is the log of the top minus the log of the bottom." },
    { c: "c3", sym: `log <i>M</i><sup><i>p</i></sup>`, name: "Power rule", desc: "An exponent on the argument comes down in front as a multiplier." },
    { c: "c4", sym: `<i>b</i>`, name: "Base", desc: "Every rule keeps one base throughout; change of base converts to ln." }
  ],
  steps: {
    title: "How to expand or condense a logarithm",
    items: [
      `Check that every argument is positive. The rules hold only for <span class="m"><i>M</i>, <i>N</i> > 0</span>.`,
      `To expand, split a quotient first (<span class="c2">quotient rule</span>), then split each product into a sum (<span class="c1">product rule</span>).`,
      `Rewrite roots as fractional powers, <span class="m">√<span class="ov"><i>y</i></span> = <i>y</i><sup>1/2</sup></span>, and bring every exponent down in front (<span class="c3">power rule</span>).`,
      `Evaluate any exact logs, such as <span class="m">log<sub>2</sub> 8 = 3</span> or <span class="m">ln <i>e</i><sup>2</sup> = 2</span>.`,
      `To condense, run the rules backward: coefficients become exponents first, then sums become products and differences become quotients.`,
      `For a decimal value in an unusual <span class="c4">base</span>, use change of base: <span class="m">log<sub class="c4"><i>b</i></sub> <i>M</i> = ln <i>M</i> / ln <i>b</i></span>.`
    ]
  },
  example: {
    prompt: `Expand <span class="m">log<sub class="c4">2</sub> <span class="fr"><span>8<i>x</i><sup>3</sup></span><span>√<span class="ov"><i>y</i></span></span></span></span> completely (<span class="m"><i>x</i>, <i>y</i> > 0</span>). Then check the result at <span class="m"><i>x</i> = 4</span>, <span class="m"><i>y</i> = 16</span>.`,
    lines: [
      { math: `<span class="m">log<sub>2</sub>(8<i>x</i><sup>3</sup>) <span class="c2">−</span> log<sub>2</sub> <i>y</i><sup>1/2</sup></span>`, note: "Quotient rule. A square root is the power 1/2." },
      { math: `<span class="m">log<sub>2</sub> 8 <span class="c1">+</span> log<sub>2</sub> <i>x</i><sup>3</sup> − log<sub>2</sub> <i>y</i><sup>1/2</sup></span>`, note: "Product rule on 8 · x³." },
      { math: `<span class="m">3 + <span class="c3">3</span> log<sub>2</sub> <i>x</i> − <span class="c3"><span class="fr"><span>1</span><span>2</span></span></span> log<sub>2</sub> <i>y</i></span>`, note: "Power rule on each term, and log₂ 8 = 3 because 2³ = 8." },
      { math: `<span class="m">3 + 3 · 2 − <span class="fr"><span>1</span><span>2</span></span> · 4 = 7</span>`, note: "At x = 4 and y = 16: log₂ 4 = 2 and log₂ 16 = 4." },
      { math: `<span class="m"><span class="fr"><span>8 · 4<sup>3</sup></span><span>√<span class="ov">16</span></span></span> = <span class="fr"><span>512</span><span>4</span></span> = 128 = 2<sup>7</sup></span>`, note: "Directly: the original argument is 128, and log₂ 128 = 7. Both forms agree." }
    ],
    answer: `<span class="m">log<sub>2</sub> <span class="fr"><span>8<i>x</i><sup>3</sup></span><span>√<span class="ov"><i>y</i></span></span></span> = 3 + 3 log<sub>2</sub> <i>x</i> − <span class="fr"><span>1</span><span>2</span></span> log<sub>2</sub> <i>y</i></span>, which equals 7 at <span class="m"><i>x</i> = 4</span>, <span class="m"><i>y</i> = 16</span>.`
  },
  why: `<p>Solving an exponential equation means getting an unknown out of an exponent, and the power rule is the tool that does it: <span class="m">log 5<sup><i>x</i></sup> = <i>x</i> log 5</span>. Every doubling time, half-life and loan term you will compute comes from that one step.</p>
<p>The product rule is why logarithms were invented. Before calculators, astronomers and navigators multiplied large numbers by adding their logs from a table, and slide rules did the same thing with lengths. Today the same rule turns long products of probabilities into sums that a computer can handle without rounding to zero.</p>`,
  careers: [
    { role: "Data scientist", use: "Sums log-probabilities instead of multiplying tiny probabilities when training and scoring statistical models." },
    { role: "Audio engineer", use: "Adds decibel gains of chained amplifiers and filters because the log of a product of gains is a sum." },
    { role: "Pharmacologist", use: "Linearises dose-response and elimination data with logs to read rates from a straight-line fit." },
    { role: "Chemist", use: "Splits the log of an equilibrium expression into terms when deriving pH and buffer equations." },
    { role: "Software engineer", use: "Converts log₂ running times to log₁₀ or ln with change of base when comparing algorithm estimates." },
    { role: "Financial analyst", use: "Adds log returns over several periods to get the total return of an investment." }
  ],
  life: [
    "Reading a slide rule or an old table of logarithms",
    "Finding log base 2 of a number on a calculator that only has log and ln",
    "Adding decibel ratings of stacked speakers or amplifier stages",
    "Combining yearly growth factors into one total growth figure",
    "Spotting the error when someone splits log(a + b) into two logs"
  ],
  fields: [
    { name: "Statistics", use: "Log-likelihoods turn the product of many probabilities into a sum." },
    { name: "Chemistry", use: "The Henderson-Hasselbalch buffer equation is a quotient-rule expansion." },
    { name: "Computer science", use: "Change of base shows that log₂ n and log₁₀ n differ only by a constant factor." },
    { name: "Physics", use: "Decibel gains of a chain of devices add because their power ratios multiply." }
  ],
  prereqWhy: {
    "a2-logs": "The rules rest on the definition log_b x = y ⇔ bʸ = x and on exact values such as log_b b = 1 and log_b 1 = 0."
  },
  unlocksWhy: {
    "a2-exp-log-eq": "Solving equations means condensing logs into one and using the power rule to bring an unknown down from an exponent.",
    "pc-fitting-models": "The product and power rules turn <i>y</i> = <i>a</i>·<i>x<sup>b</sup></i> into ln <i>y</i> = ln <i>a</i> + <i>b</i> ln <i>x</i>, the straight line that a power model is fitted to."
  },
  beyond: [
    { field: "Calculus I", why: "Logarithmic differentiation expands the log of a product or quotient before taking the derivative." },
    { field: "Statistics", why: "Maximum-likelihood estimation maximises a sum of logs instead of a product of probabilities." },
    { field: "Computer science", why: "Big-O notation drops the base of a logarithm because of the change-of-base formula." },
    { field: "Chemistry", why: "The Nernst equation and buffer calculations expand logs of concentration ratios." }
  ],
  mistakes: [
    { wrong: `Splitting <span class="m">log(<i>M</i> + <i>N</i>)</span> into <span class="m">log <i>M</i> + log <i>N</i></span>.`, fix: `The product rule is for a product. <span class="m">log(2 + 8) = log 10 = 1</span>, but <span class="m">log 2 + log 8 = log 16 ≈ 1.204</span>. A log of a sum cannot be expanded.` },
    { wrong: `Treating <span class="m">log <i>M</i> / log <i>N</i></span> as <span class="m">log <i>M</i> − log <i>N</i></span>.`, fix: `The quotient rule needs the log of a quotient. <span class="m">log<sub>2</sub> 8 / log<sub>2</sub> 2 = 3</span>, while <span class="m">log<sub>2</sub> 8 − log<sub>2</sub> 2 = 2</span>. A quotient of logs is a change of base.` },
    { wrong: `Writing <span class="m">(log <i>x</i>)<sup>2</sup> = 2 log <i>x</i></span>.`, fix: `The power rule moves an exponent on the argument: <span class="m">log <i>x</i><sup>2</sup> = 2 log <i>x</i></span>. At <span class="m"><i>x</i> = 10</span>, <span class="m">(log 10)<sup>2</sup> = 1</span> but <span class="m">2 log 10 = 2</span>.` },
    { wrong: `Replacing <span class="m">ln <i>x</i><sup>2</sup></span> by <span class="m">2 ln <i>x</i></span> for every <span class="m"><i>x</i> ≠ 0</span>.`, fix: `<span class="m">ln <i>x</i><sup>2</sup></span> is defined for all <span class="m"><i>x</i> ≠ 0</span>, but <span class="m">2 ln <i>x</i></span> only for <span class="m"><i>x</i> > 0</span>. For all <span class="m"><i>x</i> ≠ 0</span>, <span class="m">ln <i>x</i><sup>2</sup> = 2 ln |<i>x</i>|</span>.` }
  ],
  practice: [
    { q: `Expand <span class="m">log(100<i>x</i><sup>3</sup>)</span>, and evaluate <span class="m">log<sub>6</sub> 4 + log<sub>6</sub> 9</span>.`, a: `<span class="m">log 100 + log <i>x</i><sup>3</sup> = 2 + 3 log <i>x</i></span>. The product rule gives <span class="m">log<sub>6</sub>(4 · 9) = log<sub>6</sub> 36 = 2</span>.` },
    { q: `Condense <span class="m">3 log <i>x</i> − 2 log <i>y</i> + <span class="fr"><span>1</span><span>2</span></span> log <i>z</i></span> into a single logarithm.`, a: `Power rule first: <span class="m">log <i>x</i><sup>3</sup> − log <i>y</i><sup>2</sup> + log <i>z</i><sup>1/2</sup></span>. Then product and quotient rules: <span class="m">log <span class="fr"><span><i>x</i><sup>3</sup>√<span class="ov"><i>z</i></span></span><span><i>y</i><sup>2</sup></span></span></span>.` },
    { q: `Use change of base to find <span class="m">log<sub>7</sub> 50</span> to four decimal places, and check the answer.`, a: `<span class="m">log<sub>7</sub> 50 = ln 50 / ln 7 ≈ 3.9120 / 1.9459 ≈ 2.0104</span>. Check: <span class="m">7<sup>2.0104</sup> ≈ 50.0</span>.` },
    { q: `Given <span class="m">log<sub><i>b</i></sub> 2 ≈ 0.3562</span> and <span class="m">log<sub><i>b</i></sub> 3 ≈ 0.5646</span>, find <span class="m">log<sub><i>b</i></sub> 12</span> and <span class="m">log<sub><i>b</i></sub> 1.5</span> without finding <span class="m"><i>b</i></span>.`, a: `<span class="m">12 = 2<sup>2</sup> · 3</span>, so <span class="m">log<sub><i>b</i></sub> 12 = 2(0.3562) + 0.5646 = 1.2770</span>. <span class="m">1.5 = 3/2</span>, so <span class="m">log<sub><i>b</i></sub> 1.5 = 0.5646 − 0.3562 = 0.2084</span>. (The base is 7: <span class="m">ln 12 / ln 7 ≈ 1.2770</span>.)` }
  ],
  origin: `<p>John Napier's tables of 1614 were built so that products could be found by adding, the product rule in action. Henry Briggs recast them in base 10 in 1617 and 1624, and Edmund Gunter drew a logarithmic scale on a ruler in 1620 so that lengths could be added with dividers. William Oughtred slid two such scales against each other around 1622, making the first slide rule, which engineers used until pocket calculators replaced it in the 1970s.</p>`
};
