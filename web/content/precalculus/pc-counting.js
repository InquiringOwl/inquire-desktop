window.ARITH = window.ARITH || {};

ARITH["pc-counting"] = {
  title: "Counting Principles: Permutations & Combinations",
  short: "Count choices, arrangements and selections without listing",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Counting & probability · permutations and combinations",
  hero: `<span class="m"><i>P</i>(<span class="c1">10</span>, <span class="c2">3</span>) = <span class="c3">10</span> · <span class="c3">9</span> · <span class="c3">8</span> = 720, &nbsp; <span class="fr"><span>720</span><span class="c4">3!</span></span> = <span class="c5">120</span> = <i>C</i>(<span class="c1">10</span>, <span class="c2">3</span>)</span>`,
  lede: `Counting principles tell you how many ways something can happen without listing every case. Multiply the choices at each stage, then divide out the orderings that should not count as different.`,
  plain: `<p>A meal is one of 4 starters followed by one of 3 mains. Each starter goes with each main, so there are <span class="m"><span class="c3">4</span> · <span class="c3">3</span> = <span class="c5">12</span></span> meals. That is the <b>multiplication principle</b>. If instead you order a single dish, either one of the 4 starters or one of 3 desserts, there are <span class="m">4 + 3 = 7</span> choices. Adding works when the options cannot happen together.</p>
<p>Putting things in a row is repeated multiplication. Five books fill a shelf in <span class="m">5 · 4 · 3 · 2 · 1 = 120</span> orders, because each position has one fewer book left to choose from. That product is <span class="m">5!</span>, read "5 factorial". If only the first 3 places matter, as for gold, silver and bronze among <span class="m c1">10</span> runners, there are <span class="m"><span class="c3">10</span> · <span class="c3">9</span> · <span class="c3">8</span> = 720</span> results.</p>
<p>Sometimes order does not matter. A 3-person committee chosen from 10 people is the same committee whichever member is named first. Each committee appears <span class="m c4">3! = 6</span> times among the 720 ordered lists, so there are <span class="m">720 ÷ 6 = <span class="c5">120</span></span> committees.</p>
<p>Identical objects work the same way. The 5 letters of LEVEL would make <span class="m">5! = 120</span> rows if all were different, but swapping the two Ls or the two Es gives the same word. Divide by <span class="m c4">2! · 2! = 4</span>: there are <span class="m c5">30</span> different arrangements.</p>`,
  formal: `<p><b>Multiplication principle</b>: if a task is done in stages with <span class="m c3"><i>n</i><sub>1</sub>, <i>n</i><sub>2</sub>, …, <i>n<sub>k</sub></i></span> choices at the stages (the number at each stage not depending on earlier picks), the task can be done in <span class="m"><i>n</i><sub>1</sub> · <i>n</i><sub>2</sub> ⋯ <i>n<sub>k</sub></i></span> ways. <b>Addition principle</b>: if the sets of options <span class="m"><i>A</i></span> and <span class="m"><i>B</i></span> do not overlap, <span class="m"><i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>)</span>.</p>
<div class="display"><span class="m"><i>n</i>! = <i>n</i>(<i>n</i> − 1)(<i>n</i> − 2) ⋯ 2 · 1, &nbsp; 0! = 1</span><br><span class="m"><i>P</i>(<span class="c1"><i>n</i></span>, <span class="c2"><i>r</i></span>) = <span class="fr"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> = <i>n</i>(<i>n</i> − 1) ⋯ (<i>n</i> − <i>r</i> + 1)</span> &nbsp; (order matters)<br><span class="m"><i>C</i>(<span class="c1"><i>n</i></span>, <span class="c2"><i>r</i></span>) = <span class="fr"><span><i>n</i>!</span><span><i>r</i>!(<i>n</i> − <i>r</i>)!</span></span> = <span class="fr"><span><i>P</i>(<i>n</i>, <i>r</i>)</span><span class="c4"><i>r</i>!</span></span></span> &nbsp; (order does not matter)<br><span class="m"><span class="fr"><span><i>n</i>!</span><span class="c4"><i>n</i><sub>1</sub>! <i>n</i><sub>2</sub>! ⋯ <i>n<sub>k</sub></i>!</span></span></span> &nbsp; (<i>n</i> objects, <i>n<sub>i</sub></i> alike of kind <i>i</i>)</div>
<p>A <b>permutation</b> is an ordered arrangement of <span class="m c2"><i>r</i></span> of <span class="m c1"><i>n</i></span> distinct objects; a <b>combination</b> is an unordered selection, a subset of size <span class="m c2"><i>r</i></span>. <span class="m"><i>C</i>(<i>n</i>, <i>r</i>)</span> is entry <span class="m"><i>r</i></span> of row <span class="m"><i>n</i></span> of Pascal's triangle, the coefficient of <span class="m"><i>a</i><sup><i>n</i> − <i>r</i></sup><i>b</i><sup><i>r</i></sup></span> in <span class="m">(<i>a</i> + <i>b</i>)<sup><i>n</i></sup></span>. Choosing which <span class="m"><i>r</i></span> to take is choosing which <span class="m"><i>n</i> − <i>r</i></span> to leave, so <span class="m"><i>C</i>(<i>n</i>, <i>r</i>) = <i>C</i>(<i>n</i>, <i>n</i> − <i>r</i>)</span>, and all subsets together number <span class="m"><i>C</i>(<i>n</i>, 0) + ⋯ + <i>C</i>(<i>n</i>, <i>n</i>) = 2<sup><i>n</i></sup></span>. For "at least one", count the complement: total minus "none".</p>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "Objects available", desc: "How many distinct things there are to choose from." },
    { c: "c2", sym: `<i>r</i>`, name: "Positions or picks", desc: "How many slots are filled, or how many are selected." },
    { c: "c3", sym: `<i>n</i><sub>1</sub>, <i>n</i><sub>2</sub>, …`, name: "Choices per stage", desc: "Multiplied together by the multiplication principle." },
    { c: "c4", sym: `<i>r</i>!, <i>n<sub>i</sub></i>!`, name: "Divided-out orders", desc: "Orderings that give the same selection or the same word." },
    { c: "c5", sym: `<i>P</i>, <i>C</i>`, name: "The count", desc: "How many outcomes there are." }
  ],
  steps: {
    title: "How to count without listing",
    items: [
      `Say what one outcome is, and decide whether two outcomes that differ only in order are different.`,
      `Break the task into stages and multiply the choices per stage. Add the counts of cases that cannot happen together.`,
      `Order matters, no repeats: <span class="m"><i>P</i>(<i>n</i>, <i>r</i>) = <i>n</i>(<i>n</i> − 1) ⋯ (<i>n</i> − <i>r</i> + 1)</span>, a product of <span class="m"><i>r</i></span> factors.`,
      `Order does not matter: divide by the <span class="m c4"><i>r</i>!</span> orders of each selection, <span class="m"><i>C</i>(<i>n</i>, <i>r</i>) = <i>P</i>(<i>n</i>, <i>r</i>)/<i>r</i>!</span>.`,
      `Identical objects in a row: divide <span class="m"><i>n</i>!</span> by the factorial of the size of each group of alike objects.`,
      `For "at least one" or "not all", count the opposite case and subtract it from the total.`
    ]
  },
  example: {
    prompt: `How many 5-card hands from a standard 52-card deck contain at least one ace?`,
    lines: [
      { math: `<span class="m"><i>C</i>(<span class="c1">52</span>, <span class="c2">5</span>) = <span class="fr"><span>52 · 51 · 50 · 49 · 48</span><span class="c4">5!</span></span> = <span class="fr"><span>311,875,200</span><span>120</span></span> = 2,598,960</span>`, note: "A hand is a set of cards, so order does not matter: all hands." },
      { math: `<span class="m"><i>C</i>(<span class="c1">48</span>, <span class="c2">5</span>) = <span class="fr"><span>48 · 47 · 46 · 45 · 44</span><span class="c4">5!</span></span> = <span class="fr"><span>205,476,480</span><span>120</span></span> = 1,712,304</span>`, note: "Hands with no ace use only the 48 other cards." },
      { math: `<span class="m">2,598,960 − 1,712,304 = <span class="c5">886,656</span></span>`, note: "At least one ace is the complement of no ace." },
      { math: `<span class="m">4 · <i>C</i>(51, 4) = 999,600 ≠ 886,656</span>`, note: "Picking an ace first and then any 4 cards counts a two-ace hand twice." }
    ],
    answer: `<span class="m c5">886,656</span> hands contain at least one ace.`
  },
  why: `<p>Probability with equally likely outcomes is a ratio of two counts, so every card, lottery and committee probability starts here. Counting also measures the size of a search: an 8-character password drawn from 62 letters and digits has <span class="m">62<sup>8</sup> ≈ 2.18 × 10<sup>14</sup></span> possibilities, and a delivery route through 10 stops can be ordered in <span class="m">10! = 3,628,800</span> ways. Knowing the count tells you whether trying every case is practical.</p>`,
  careers: [
    { role: "Actuary", use: "Counts the ways claims and events can combine when pricing insurance and pensions." },
    { role: "Cryptographer", use: "Sizes key spaces and password spaces to judge how long a brute-force attack would take." },
    { role: "Software engineer", use: "Estimates how many cases a search or test suite must cover, such as n! orderings or 2ⁿ subsets." },
    { role: "Clinical trial statistician", use: "Counts the possible random assignments of patients to treatment groups when designing a trial." },
    { role: "Logistics planner", use: "Recognises that delivery routes grow like n! and chooses heuristics instead of checking every order." },
    { role: "Geneticist", use: "Counts codons (4³ = 64 three-letter DNA words) and possible genotype combinations." }
  ],
  life: [
    "Working out how many licence plates a format like three letters and four digits allows",
    "Counting the outfits you can make from the shirts, trousers and shoes you own",
    "Seeing why a 4-digit PIN has 10,000 possibilities",
    "Counting the games in a round-robin tournament, one for each pair of teams",
    "Choosing toppings for a pizza when the order you name them does not matter"
  ],
  fields: [
    { name: "Probability and statistics", use: "Equally likely probabilities and the binomial and hypergeometric distributions are built from nPr and nCr." },
    { name: "Computer science", use: "Running times of brute-force algorithms are counts of the cases they examine." },
    { name: "Chemistry and physics", use: "Statistical mechanics counts the arrangements of particles among energy levels." },
    { name: "Biology", use: "The genetic code's 64 codons and the number of possible gene combinations are products of choices." }
  ],
  prereqWhy: {
    "a2-binomial": "C(n, r) first appeared as a binomial coefficient; here it is derived as the number of r-element subsets, P(n, r)/r!."
  },
  unlocksWhy: {
    "pc-probability": "Equally likely probability P(E) = n(E)/n(S) needs both counts, usually found with permutations and combinations."
  },
  beyond: [
    { field: "Discrete Mathematics", why: "Inclusion–exclusion, the pigeonhole principle, recurrences and generating functions extend these counting rules." },
    { field: "Statistics", why: "The binomial and hypergeometric distributions assign probabilities using C(n, r)." },
    { field: "Data science", why: "Feature selection and hyperparameter search grow combinatorially, which decides how much can be tried." }
  ],
  mistakes: [
    { wrong: `A 3-person committee from 10 people: <span class="m">10 · 9 · 8 = 720</span> committees.`, fix: `A committee has no order. Each one was counted <span class="m">3! = 6</span> times, so there are <span class="m">720 ÷ 6 = 120</span>.` },
    { wrong: `Hands with at least one ace: choose an ace, then any 4 other cards, <span class="m">4 · <i>C</i>(51, 4) = 999,600</span>.`, fix: `That counts a hand with two aces twice. Use the complement: <span class="m"><i>C</i>(52, 5) − <i>C</i>(48, 5) = 886,656</span>.` },
    { wrong: `3 shirts and 4 pairs of trousers make <span class="m">3 + 4 = 7</span> outfits.`, fix: `An outfit uses one of each, a two-stage choice: <span class="m">3 · 4 = 12</span>. Add only when you choose one option from either list.` },
    { wrong: `<span class="m"><i>C</i>(5, 5) = <span class="fr"><span>5!</span><span>5! · 0!</span></span></span> is undefined because <span class="m">0! = 0</span>.`, fix: `<span class="m">0! = 1</span>, so <span class="m"><i>C</i>(5, 5) = 1</span>: there is exactly one way to take all five.` }
  ],
  practice: [
    { q: `In how many orders can 6 people stand in a line?`, a: `<span class="m">6! = 6 · 5 · 4 · 3 · 2 · 1 = 720</span>.` },
    { q: `A club of 12 members elects a president, a secretary and a treasurer, three different people. How many outcomes are possible?`, a: `Order matters (the posts differ): <span class="m"><i>P</i>(12, 3) = 12 · 11 · 10 = 1320</span>.` },
    { q: `How many different arrangements of the letters of MISSISSIPPI are there?`, a: `11 letters: M once, I four times, S four times, P twice. <span class="m"><span class="fr"><span>11!</span><span>1! · 4! · 4! · 2!</span></span> = <span class="fr"><span>39,916,800</span><span>1152</span></span> = 34,650</span>.` },
    { q: `A committee of 5 is chosen from 6 women and 4 men. How many committees include at least one man?`, a: `All committees minus the all-women ones: <span class="m"><i>C</i>(10, 5) − <i>C</i>(6, 5) = 252 − 6 = 246</span>.` }
  ],
  origin: `The Indian medical text Suśruta Saṃhitā already counts the 63 combinations that can be made from six tastes, and Bhāskara II's Līlāvatī (1150) states the rule for C(n, r). Levi ben Gershon proved the formulas for permutations and combinations in his Maaseh Hoshev (1321). Blaise Pascal tied the combinations to his arithmetical triangle in 1654, and Jacob Bernoulli's Ars Conjectandi (1713) gave the theory of permutations and combinations the form taught today.`
};
