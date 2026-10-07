window.ARITH = window.ARITH || {};

ARITH["pc-probability"] = {
  title: "Probability",
  short: "Equally likely outcomes, complements, unions and independence",
  grade: "Grade 12 · college Precalculus",
  hours: 4,
  voice: "plain",
  eyebrow: "Counting & probability · events and their chances",
  hero: `<span class="m c5"><i>P</i>(<span class="c2"><i>A</i></span> ∪ <span class="c3"><i>B</i></span>)</span><span class="m"> = <i>P</i>(<span class="c2"><i>A</i></span>) + <i>P</i>(<span class="c3"><i>B</i></span>) − <i>P</i>(<span class="c1"><i>A</i> ∩ <i>B</i></span>)</span>`,
  lede: `Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). When every outcome is equally likely it is a ratio of two counts: the outcomes in the event over all possible outcomes.`,
  plain: `<p>Roll a fair die. There are 6 outcomes, each as likely as the others, and 3 of them are even. The probability of an even number is <span class="m"><span class="fr"><span>3</span><span>6</span></span> = <span class="c5"><span class="fr"><span>1</span><span>2</span></span></span></span>. The probability of not rolling a 6 is easiest from the opposite event: <span class="m">1 − <span class="fr"><span>1</span><span>6</span></span> = <span class="fr"><span>5</span><span>6</span></span></span>.</p>
<p>Draw one card from a 52-card deck. "A heart or a face card" is not <span class="m">13 + 12</span> cards, because the jack, queen and king of hearts are in both groups. Counting them once gives <span class="m">13 + 12 − 3 = 22</span> cards, so the probability is <span class="m"><span class="fr"><span>22</span><span>52</span></span> = <span class="fr"><span>11</span><span>26</span></span></span>. Subtracting the overlap is the rule for "or".</p>
<p>Two events are independent when one tells you nothing about the other, like two separate coin flips. Then the chance that both happen is the product: two heads has probability <span class="m"><span class="fr"><span>1</span><span>2</span></span> · <span class="fr"><span>1</span><span>2</span></span> = <span class="fr"><span>1</span><span>4</span></span></span>.</p>
<p>A probability also predicts the long run. Toss a coin many times and the fraction of heads settles near <span class="m"><span class="fr"><span>1</span><span>2</span></span></span>, though any short run can stray far from it.</p>`,
  formal: `<p>The <b>sample space</b> <span class="m c4"><i>S</i></span> is the set of all outcomes of an experiment; an <b>event</b> <span class="m"><i>E</i></span> is a subset of <span class="m"><i>S</i></span>. If the outcomes are <b>equally likely</b>, <span class="m"><i>P</i>(<i>E</i>) = <i>n</i>(<i>E</i>)/<i>n</i>(<i>S</i>)</span>, so <span class="m">0 ≤ <i>P</i>(<i>E</i>) ≤ 1</span>, <span class="m"><i>P</i>(<i>S</i>) = 1</span> and <span class="m"><i>P</i>(∅) = 0</span>.</p>
<div class="display"><span class="m"><i>P</i>(<span class="c4"><i>E</i>′</span>) = 1 − <i>P</i>(<i>E</i>)</span> &nbsp; (complement)<br><span class="m"><i>P</i>(<span class="c2"><i>A</i></span> ∪ <span class="c3"><i>B</i></span>) = <i>P</i>(<span class="c2"><i>A</i></span>) + <i>P</i>(<span class="c3"><i>B</i></span>) − <i>P</i>(<span class="c1"><i>A</i> ∩ <i>B</i></span>)</span> &nbsp; (union)<br><span class="m"><i>P</i>(<i>A</i> ∪ <i>B</i>) = <i>P</i>(<i>A</i>) + <i>P</i>(<i>B</i>)</span> &nbsp; when <span class="m"><i>A</i> ∩ <i>B</i> = ∅</span> (mutually exclusive)<br><span class="m"><i>P</i>(<i>A</i> ∩ <i>B</i>) = <i>P</i>(<i>A</i>) · <i>P</i>(<i>B</i>)</span> &nbsp; when <i>A</i> and <i>B</i> are independent</div>
<p>Events that cannot both occur are <b>mutually exclusive</b>; events where the occurrence of one does not change the probability of the other are <b>independent</b>. The <b>expected value</b> of a quantity that takes the values <span class="m"><i>x</i><sub>1</sub>, …, <i>x<sub>k</sub></i></span> with probabilities <span class="m"><i>p</i><sub>1</sub>, …, <i>p<sub>k</sub></i></span> is <span class="m"><i>E</i> = <i>x</i><sub>1</sub><i>p</i><sub>1</sub> + ⋯ + <i>x<sub>k</sub>p<sub>k</sub></i></span>, the long-run average; for one roll of a fair die it is <span class="m">(1 + 2 + ⋯ + 6)/6 = <span class="fr"><span>7</span><span>2</span></span></span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>A</i>`, name: "Event A", desc: "The outcomes in the first event." },
    { c: "c3", sym: `<i>B</i>`, name: "Event B", desc: "The outcomes in the second event." },
    { c: "c1", sym: `<i>A</i> ∩ <i>B</i>`, name: "Both", desc: "Outcomes in A and in B, counted once in a union." },
    { c: "c4", sym: `<i>S</i>, <i>E</i>′`, name: "Sample space and complement", desc: "All outcomes, and the outcomes not in an event." },
    { c: "c5", sym: `<i>P</i>`, name: "Probability", desc: "n(E)/n(S) for equally likely outcomes, between 0 and 1." }
  ],
  steps: {
    title: "How to find a probability",
    items: [
      `Describe the sample space and check that its outcomes are equally likely (two dice give 36 ordered pairs, not 11 sums).`,
      `Count <span class="m"><i>n</i>(<i>S</i>)</span>, using the counting principles when listing is impractical.`,
      `Count <span class="m"><i>n</i>(<i>E</i>)</span> directly, or count the complement and use <span class="m"><i>P</i>(<i>E</i>) = 1 − <i>P</i>(<i>E</i>′)</span> for "at least one".`,
      `For "<i>A</i> or <i>B</i>", add the probabilities and subtract the overlap <span class="m"><i>P</i>(<i>A</i> ∩ <i>B</i>)</span>.`,
      `For "<i>A</i> and <i>B</i>" with independent events, multiply. Draws without replacement are not independent: count the pairs directly.`,
      `Simplify the fraction and check that it lies between 0 and 1.`
    ]
  },
  example: {
    prompt: `A committee of 4 is chosen at random from 7 women and 5 men. What is the probability that it has exactly 2 women?`,
    lines: [
      { math: `<span class="m"><i>n</i>(<span class="c4"><i>S</i></span>) = <i>C</i>(12, 4) = <span class="fr"><span>12 · 11 · 10 · 9</span><span>4!</span></span> = 495</span>`, note: "Every set of 4 of the 12 people is equally likely." },
      { math: `<span class="m"><i>C</i>(7, 2) = 21, &nbsp; <i>C</i>(5, 2) = 10</span>`, note: "Choose the 2 women, then the other 2 members from the men." },
      { math: `<span class="m"><i>n</i>(<i>E</i>) = 21 · 10 = 210</span>`, note: "Multiplication principle." },
      { math: `<span class="m"><i>P</i>(<i>E</i>) = <span class="fr"><span>210</span><span>495</span></span> = <span class="c5"><span class="fr"><span>14</span><span>33</span></span></span> ≈ 0.424</span>`, note: "Divide numerator and denominator by 15." }
    ],
    answer: `<span class="m c5"><i>P</i> = <span class="fr"><span>14</span><span>33</span></span> ≈ 0.424</span>`
  },
  why: `<p>Probability turns counts into decisions. An insurer sets premiums from the chance of a claim, a doctor weighs a test result against how common a disease is, and an engineer rates a system by the chance that two independent parts fail together: if each fails with probability <span class="m">0.01</span>, both fail with probability <span class="m">0.0001</span>. The same rules explain why a 6/49 lottery ticket wins the jackpot with probability <span class="m">1/13,983,816</span>.</p>`,
  careers: [
    { role: "Actuary", use: "Prices insurance from the probabilities of death, illness and accidents in each group of customers." },
    { role: "Epidemiologist", use: "Estimates the chance of infection or disease in a population and how it changes with exposure." },
    { role: "Quality engineer", use: "Computes the probability that a batch passes inspection when parts fail independently." },
    { role: "Data scientist", use: "Judges whether a difference in an A/B test is larger than chance alone would produce." },
    { role: "Meteorologist", use: "Issues forecasts such as a 30% chance of rain, calibrated against how often it then rains." },
    { role: "Game designer", use: "Sets drop rates and dice mechanics so that rewards arrive at the intended average rate." }
  ],
  life: [
    "Reading a weather forecast's chance of rain",
    "Judging the odds of a lottery ticket before buying one",
    "Deciding whether to draw another card in a card game",
    "Understanding what a medical test's accuracy figure means",
    "Seeing why rolling a 7 with two dice is more likely than rolling a 12"
  ],
  fields: [
    { name: "Statistics", use: "Probability models describe random samples, and inference reasons back from data to the model." },
    { name: "Genetics", use: "A Punnett square gives each offspring genotype a probability, such as 1/4 for two recessive alleles." },
    { name: "Physics", use: "Statistical mechanics and quantum mechanics predict probabilities of states and measurement results." },
    { name: "Finance", use: "Expected returns and risk are probability-weighted averages over possible outcomes." }
  ],
  prereqWhy: {
    "pc-counting": "n(E) and n(S) for cards, lotteries and committees are counted with permutations and combinations."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Statistics", why: "Random variables, the binomial and normal distributions and inference all rest on these rules." },
    { field: "Data science", why: "Classifiers and Bayesian models report probabilities and are judged by how well they are calibrated." },
    { field: "Discrete Mathematics", why: "Probability on finite sample spaces uses counting, conditional probability and Bayes' theorem." },
    { field: "Physics", why: "Statistical mechanics derives temperature and entropy from the probabilities of microscopic states." }
  ],
  mistakes: [
    { wrong: `<span class="m"><i>P</i>(heart or face card) = <span class="fr"><span>13</span><span>52</span></span> + <span class="fr"><span>12</span><span>52</span></span> = <span class="fr"><span>25</span><span>52</span></span></span>.`, fix: `The three face cards that are hearts were counted twice. Subtract the overlap: <span class="m"><span class="fr"><span>13 + 12 − 3</span><span>52</span></span> = <span class="fr"><span>11</span><span>26</span></span></span>.` },
    { wrong: `Two cards drawn without replacement are both aces with probability <span class="m"><span class="fr"><span>4</span><span>52</span></span> · <span class="fr"><span>4</span><span>52</span></span></span>.`, fix: `After one ace is gone, 3 aces remain among 51 cards: <span class="m"><span class="fr"><span>4</span><span>52</span></span> · <span class="fr"><span>3</span><span>51</span></span> = <span class="fr"><span>1</span><span>221</span></span></span>, the same as <span class="m"><i>C</i>(4, 2)/<i>C</i>(52, 2)</span>.` },
    { wrong: `There are 11 possible sums of two dice, so <span class="m"><i>P</i>(sum 7) = <span class="fr"><span>1</span><span>11</span></span></span>.`, fix: `The sums are not equally likely. Use the 36 ordered pairs: six of them add to 7, so <span class="m"><i>P</i> = <span class="fr"><span>6</span><span>36</span></span> = <span class="fr"><span>1</span><span>6</span></span></span>.` }
  ],
  practice: [
    { q: `A fair die is rolled. What is the probability of a number greater than 4?`, a: `Two outcomes, 5 and 6, out of 6: <span class="m"><span class="fr"><span>2</span><span>6</span></span> = <span class="fr"><span>1</span><span>3</span></span></span>.` },
    { q: `Two fair dice are rolled. What is the probability that the sum is 8?`, a: `The pairs (2, 6), (3, 5), (4, 4), (5, 3), (6, 2): <span class="m"><span class="fr"><span>5</span><span>36</span></span></span>.` },
    { q: `One card is drawn from a standard deck. What is the probability that it is a king or a heart?`, a: `<span class="m"><span class="fr"><span>4</span><span>52</span></span> + <span class="fr"><span>13</span><span>52</span></span> − <span class="fr"><span>1</span><span>52</span></span> = <span class="fr"><span>16</span><span>52</span></span> = <span class="fr"><span>4</span><span>13</span></span></span>; the king of hearts is in both events.` },
    { q: `In a lottery you choose 6 numbers from 1 to 49 and 6 are drawn. What is the probability that exactly 5 of yours are drawn?`, a: `<span class="m"><span class="fr"><span><i>C</i>(6, 5) · <i>C</i>(43, 1)</span><span><i>C</i>(49, 6)</span></span> = <span class="fr"><span>6 · 43</span><span>13,983,816</span></span> = <span class="fr"><span>43</span><span>2,330,636</span></span> ≈ 1.84 × 10<sup>−5</sup></span>.` }
  ],
  origin: `Gerolamo Cardano wrote one of the earliest studies of chances in dice games, Liber de ludo aleae, around 1564 (published 1663). The 1654 letters between Blaise Pascal and Pierre de Fermat on dividing the stakes of an unfinished game founded the subject, and Christiaan Huygens's De ratiociniis in ludo aleae (1657) introduced expected value. Jacob Bernoulli proved the first law of large numbers in Ars Conjectandi (1713), and Andrey Kolmogorov gave probability its modern axioms in 1933.`
};
