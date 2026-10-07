window.ARITH = window.ARITH || {};

ARITH["a2-arith-series"] = {
  title: "Arithmetic Series",
  short: "Sₙ = n(a₁ + aₙ)/2: pair the first and last terms",
  grade: "Grade 11–12 · college Intermediate/College Algebra",
  hours: 3,
  voice: "plain",
  eyebrow: "Sequences & series · arithmetic sums",
  hero: `<span class="m"><span class="c3"><i>S</i><sub>100</sub></span> = 1 + 2 + ⋯ + 100 = <span class="fr"><span><span class="c4">100</span>(<span class="c1">1</span> + 100)</span><span>2</span></span> = <span class="c3">5050</span></span>`,
  lede: `An arithmetic series adds the terms of an arithmetic sequence, where each term is the one before plus the common difference <span class="m c2"><i>d</i></span>. Pair the first term with the last: every pair has the same total, so <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="c4"><i>n</i></span>(<span class="c1"><i>a</i><sub>1</sub></span> + <i>a</i><sub><i>n</i></sub>)/2</span>.`,
  plain: `<p>Add <span class="m">1 + 2 + 3 + ⋯ + 100</span>. Adding one number at a time takes 99 additions. Instead, pair the numbers from the outside in: <span class="m">1 + 100 = 101</span>, <span class="m">2 + 99 = 101</span>, <span class="m">3 + 98 = 101</span>. Moving one step in from each end adds 1 on one side and takes 1 away on the other, so every pair has the same total. There are 50 pairs, and <span class="m">50 · 101 = 5050</span>.</p>
<p>The same trick works whenever the terms go up (or down) by a fixed amount, the <span class="c2">common difference</span> <span class="m c2"><i>d</i></span>. Write the sum forwards, then write it again backwards underneath. Each column adds to the first term plus the last term. There are <span class="m c4"><i>n</i></span> columns, so the two copies together are <span class="m"><span class="c4"><i>n</i></span>(<span class="c1"><i>a</i><sub>1</sub></span> + <i>a</i><sub><i>n</i></sub>)</span>, and one copy is half of that.</p>
<p>As a picture: build each term as a column of blocks. The columns make a staircase. A second staircase, turned upside down, fits on top of the first and makes a rectangle <span class="m c4"><i>n</i></span> columns wide and <span class="m"><span class="c1"><i>a</i><sub>1</sub></span> + <i>a</i><sub><i>n</i></sub></span> blocks tall. The sum is half the rectangle.</p>`,
  formal: `<p>An <b>arithmetic sequence</b> has <span class="m"><i>a</i><sub><i>n</i></sub> = <span class="c1"><i>a</i><sub>1</sub></span> + (<span class="c4"><i>n</i></span> − 1)<span class="c2"><i>d</i></span></span>. The sum of its first <span class="m c4"><i>n</i></span> terms is an <b>arithmetic series</b>, the partial sum</p>
<div class="display"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="sig"><span><i>n</i></span><span>Σ</span><span><i>i</i>=1</span></span>(<span class="c1"><i>a</i><sub>1</sub></span> + (<i>i</i> − 1)<span class="c2"><i>d</i></span>) = <span class="fr"><span><span class="c4"><i>n</i></span>(<span class="c1"><i>a</i><sub>1</sub></span> + <i>a</i><sub><i>n</i></sub>)</span><span>2</span></span> = <span class="fr"><span><span class="c4"><i>n</i></span></span><span>2</span></span>(2<span class="c1"><i>a</i><sub>1</sub></span> + (<span class="c4"><i>n</i></span> − 1)<span class="c2"><i>d</i></span>)</div>
<p>Proof: write <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ⋯ + <i>a</i><sub><i>n</i></sub></span> and <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>a</i><sub><i>n</i></sub> + <i>a</i><sub><i>n</i>−1</sub> + ⋯ + <i>a</i><sub>1</sub></span>. Matching terms add to <span class="m"><i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub></span> each time, so <span class="m">2<span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="c4"><i>n</i></span>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)</span>. Substituting <span class="m"><i>a</i><sub><i>n</i></sub></span> gives the second form, which needs only <span class="m c1"><i>a</i><sub>1</sub></span>, <span class="m c2"><i>d</i></span> and <span class="m c4"><i>n</i></span>. Two special cases: <span class="m">1 + 2 + ⋯ + <i>n</i> = <i>n</i>(<i>n</i> + 1)/2</span>, and the first <span class="m"><i>n</i></span> odd numbers add to <span class="m"><i>n</i><sup>2</sup></span>, since <span class="m"><span class="sig"><span><i>n</i></span><span>Σ</span><span><i>k</i>=1</span></span>(2<i>k</i> − 1) = <i>n</i>(1 + 2<i>n</i> − 1)/2 = <i>n</i><sup>2</sup></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>a</i><sub>1</sub>`, name: "First term", desc: "Where the sequence starts. With the last term aₙ it makes one Gauss pair." },
    { c: "c2", sym: `<i>d</i>`, name: "Common difference", desc: "The fixed amount added to get each next term: d = a₂ − a₁. It can be negative." },
    { c: "c4", sym: `<i>n</i>`, name: "Number of terms", desc: "How many terms are added, a positive integer. From the last term: n = (aₙ − a₁)/d + 1." },
    { c: "c3", sym: `<i>S</i><sub><i>n</i></sub>`, name: "Sum of n terms", desc: "The arithmetic series a₁ + a₂ + ⋯ + aₙ, equal to n times the average of the first and last terms." }
  ],
  steps: { title: "How to find an arithmetic series", items: [
    `Check that the series is arithmetic: the difference between consecutive terms is the same every time. Call it <span class="m c2"><i>d</i></span>.`,
    `Read off the first term <span class="m c1"><i>a</i><sub>1</sub></span>. In sigma notation, substitute the lower limit.`,
    `Find the number of terms <span class="m c4"><i>n</i></span>. If the last term is given, solve <span class="m"><i>a</i><sub><i>n</i></sub> = <i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i></span> for <span class="m"><i>n</i></span>.`,
    `Use <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <i>n</i>(<i>a</i><sub>1</sub> + <i>a</i><sub><i>n</i></sub>)/2</span> when you know the last term, or <span class="m"><span class="c3"><i>S</i><sub><i>n</i></sub></span> = <span class="fr"><span><i>n</i></span><span>2</span></span>(2<i>a</i><sub>1</sub> + (<i>n</i> − 1)<i>d</i>)</span> when you do not.`,
    `If the sum is given and <span class="m c4"><i>n</i></span> is unknown, the second formula is a quadratic equation in <span class="m"><i>n</i></span>. Keep only a positive integer solution that makes sense in the problem.`
  ] },
  example: {
    prompt: `Find the sum <span class="m">7 + 11 + 15 + ⋯ + 99</span>.`,
    lines: [
      { math: `<span class="m"><span class="c1"><i>a</i><sub>1</sub> = 7</span>, &nbsp;<span class="c2"><i>d</i> = 11 − 7 = 4</span></span>`, note: "The differences 11 − 7 and 15 − 11 are both 4, so the series is arithmetic." },
      { math: `<span class="m">99 = <span class="c1">7</span> + (<span class="c4"><i>n</i></span> − 1) · <span class="c2">4</span></span>`, note: "The last term is aₙ = 99. Use aₙ = a₁ + (n − 1)d to count the terms." },
      { math: `<span class="m">92 = 4(<i>n</i> − 1), &nbsp;<i>n</i> − 1 = 23, &nbsp;<span class="c4"><i>n</i> = 24</span></span>`, note: "There are 24 terms, not 23: the first term counts too." },
      { math: `<span class="m"><span class="c3"><i>S</i><sub>24</sub></span> = <span class="fr"><span><span class="c4">24</span>(<span class="c1">7</span> + 99)</span><span>2</span></span></span>`, note: "Twelve pairs, each adding to 7 + 99 = 106." },
      { math: `<span class="m">= 12 · 106 = <span class="c3">1272</span></span>`, note: "Half of 24 is 12 pairs." },
      { math: `<span class="m"><span class="fr"><span>24</span><span>2</span></span>(2 · 7 + 23 · 4) = 12(14 + 92) = 1272 ✓</span>`, note: "The second formula, which uses d instead of the last term, gives the same sum." }
    ],
    answer: `<span class="m">7 + 11 + 15 + ⋯ + 99 = <span class="c3">1272</span></span> (24 terms).`
  },
  why: `<p>Anything that grows by the same amount each step adds up to an arithmetic series. A salary of $42,000 with a raise of $1,500 a year pays <span class="m">10(42000 + 55500)/2 = 487500</span> dollars over ten years. Seats in rows that each hold two more than the row in front, logs stacked in a triangle, a training plan that adds a kilometre a week: the total is the number of terms times the average of the first and last.</p>
<p>The formula also counts work. A program that compares every item in a list with every later item makes <span class="m">1 + 2 + ⋯ + (<i>n</i> − 1) = <i>n</i>(<i>n</i> − 1)/2</span> comparisons, so doubling the list roughly quadruples the time. The same sum counts the handshakes when <span class="m"><i>n</i></span> people each shake hands once.</p>`,
  careers: [
    { role: "Compensation analyst", use: "Totals the cost of a multi-year contract with a fixed annual raise as an arithmetic series." },
    { role: "Theatre or arena manager", use: "Counts the seats in sections where each row holds a fixed number more than the row in front." },
    { role: "Construction estimator", use: "Counts the blocks or bricks in stepped walls and stairs, where each course changes by the same amount." },
    { role: "Software engineer", use: "Counts the n(n − 1)/2 comparisons of a nested loop to predict how an algorithm slows as data grows." },
    { role: "Accountant", use: "Uses the sum-of-the-years'-digits depreciation method, whose denominator is 1 + 2 + ⋯ + n = n(n + 1)/2." },
    { role: "Warehouse planner", use: "Works out how many pipes, cans or boxes fit in a triangular stack that loses one item per layer." }
  ],
  life: [
    "Stacking cans in a pyramid display with one fewer can in each row",
    "Saving five dollars more each week than the week before",
    "Adding one more kilometre to a weekly run and totalling the distance",
    "Counting the handshakes when everyone at a meeting greets everyone else",
    "Totalling the seats in a theatre whose rows get longer toward the back"
  ],
  fields: [
    { name: "Computer science", use: "Running times of nested loops are arithmetic series, which is why many simple sorts take time proportional to n²." },
    { name: "Accounting", use: "Sum-of-the-years'-digits depreciation spreads an asset's cost using the sum 1 + 2 + ⋯ + n." },
    { name: "Physics", use: "An object falling from rest covers distances in the ratio 1 : 3 : 5 : 7 in equal times, and the odd numbers add to squares." },
    { name: "Architecture", use: "Stepped seating and staircases are planned by summing rows or treads that change by a fixed amount." }
  ],
  prereqWhy: {
    "a2-sequences": "An arithmetic series is the partial sum Sₙ of an arithmetic sequence, written and evaluated with sigma notation."
  },
  unlocksWhy: {
    "pc-induction": "The formula for 1 + 2 + ⋯ + <i>n</i> and the idea of a sum with a general <i>n</i>th term give the first statements that an induction proof is asked to verify for every <i>n</i>."
  },
  beyond: [
    { field: "Calculus I", why: "Riemann sums for the area under y = x use 1 + 2 + ⋯ + n = n(n + 1)/2 before taking a limit." },
    { field: "Discrete Mathematics", why: "The formula for an arithmetic series is a first example of proof by induction and of counting pairs." },
    { field: "Computer science", why: "Analysing algorithms means summing the work done in each pass, often an arithmetic series of order n²." },
    { field: "Physics", why: "Uniformly accelerated motion in equal time steps gives distances in arithmetic progression." }
  ],
  mistakes: [
    { wrong: `Counting the terms of <span class="m">7, 11, …, 99</span> as <span class="m">(99 − 7)/4 = 23</span>.`, fix: `That counts the gaps between terms. Add one for the first term: <span class="m"><i>n</i> = (99 − 7)/4 + 1 = 24</span>.` },
    { wrong: `Using the arithmetic formula on <span class="m">1 + 2 + 4 + 8 + 16</span>: <span class="m">5(1 + 16)/2 = 42.5</span>.`, fix: `The differences 1, 2, 4, 8 are not constant, so the series is not arithmetic. Adding gives <span class="m">31</span>.` },
    { wrong: `Giving the last term as the answer: "a theatre with 20 rows, 16 seats in the first row and 2 more in each row has <span class="m">16 + 19 · 2 = 54</span> seats".`, fix: `54 is the number of seats in the last row, <span class="m"><i>a</i><sub>20</sub></span>. The total is <span class="m"><i>S</i><sub>20</sub> = 20(16 + 54)/2 = 700</span>.` },
    { wrong: `Solving <span class="m"><i>n</i>(2<i>n</i> + 3) = 702</span> and keeping both roots <span class="m">18</span> and <span class="m">−19.5</span>.`, fix: `The number of terms is a positive integer, so <span class="m"><i>n</i> = 18</span> only.` }
  ],
  practice: [
    { q: `Find the sum of the first 50 positive even integers.`, a: `<span class="m">2 + 4 + ⋯ + 100</span>: <span class="m"><i>a</i><sub>1</sub> = 2</span>, <span class="m"><i>a</i><sub>50</sub> = 100</span>, so <span class="m"><i>S</i><sub>50</sub> = 50(2 + 100)/2 = 25 · 102 = 2550</span>.` },
    { q: `Evaluate <span class="m"><span class="sig"><span>20</span><span>Σ</span><span><i>k</i>=1</span></span>(3<i>k</i> + 2)</span>.`, a: `<span class="m"><i>a</i><sub>1</sub> = 3(1) + 2 = 5</span> and <span class="m"><i>a</i><sub>20</sub> = 3(20) + 2 = 62</span>, so the sum is <span class="m">20(5 + 62)/2 = 10 · 67 = 670</span>.` },
    { q: `A theatre has 25 rows. The first row has 18 seats and each row has 2 more seats than the row in front of it. How many seats are there?`, a: `<span class="m"><i>a</i><sub>25</sub> = 18 + 24 · 2 = 66</span>, so <span class="m"><i>S</i><sub>25</sub> = 25(18 + 66)/2 = 25 · 42 = 1050</span> seats.` },
    { q: `How many terms of <span class="m">5 + 9 + 13 + ⋯</span> must be added to get 702?`, a: `<span class="m"><i>S</i><sub><i>n</i></sub> = <span class="fr"><span><i>n</i></span><span>2</span></span>(10 + 4(<i>n</i> − 1)) = <i>n</i>(2<i>n</i> + 3)</span>. Solve <span class="m">2<i>n</i><sup>2</sup> + 3<i>n</i> − 702 = 0</span>: <span class="m"><i>n</i> = (−3 ± 75)/4</span>, so <span class="m"><i>n</i> = 18</span> (reject <span class="m">−19.5</span>). Check: <span class="m"><i>a</i><sub>18</sub> = 73</span> and <span class="m">18(5 + 73)/2 = 702</span>.` }
  ],
  origin: `The Rhind papyrus (Egypt, about 1550 BCE) asks how to share 100 loaves among five people in arithmetic progression. Aryabhata gave rules for the sum and the number of terms of an arithmetic progression in 499 CE. The story of the young Carl Friedrich Gauss adding 1 to 100 by pairing comes from an 1856 memoir by Wolfgang Sartorius von Waltershausen; the exact numbers in the story are uncertain.`
};
