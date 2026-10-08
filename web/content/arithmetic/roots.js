window.ARITH = window.ARITH || {};

ARITH["roots"] = {
  title: "Square Roots & Perfect Squares",
  short: "Finding the side of a square from its area",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Operations · inverse of squaring",
  hero: `<span class="m">√<span class="c1"><i>A</i></span> = <span class="c2"><i>s</i></span>  ⟺  <span class="c2"><i>s</i></span><sup>2</sup> = <span class="c1"><i>A</i></span>, <span class="c2"><i>s</i></span> ≥ 0</span>`,
  lede: `The square root of an area is the side length of the square with that area. It undoes squaring.`,
  plain: `<p>A square patio laid with 1-foot tiles, 5 tiles along each side, uses 25 tiles. Squaring goes from side to area: <span class="m">5<sup>2</sup> = 25</span>. The <b>square root</b> goes back from area to side: <span class="m">√25 = 5</span>. The number under the sign is called the <b>radicand</b>.</p>
<p>Numbers like 1, 4, 9, 16, 25 and 36 are <b>perfect squares</b>. They come from squaring whole numbers, so their roots are whole numbers. Most numbers are not perfect squares. A square with an area of 20 ft² has a side between √16 = 4 and √25 = 5 feet, about 4.47 feet. You can close in on a root like this by guessing a side, dividing the area by the guess, and averaging the two numbers. Each round gives a better guess.</p>
<p>The √ sign always means the non-negative root. Both 5 and −5 square to 25, but √25 is 5. A side length is never negative.</p>`,
  formal: `<p>For a real number <span class="m"><i>A</i> ≥ 0</span>, the <b>principal square root</b> <span class="m">√<i>A</i></span> is the unique real number <span class="m"><i>s</i> ≥ 0</span> with <span class="m"><i>s</i><sup>2</sup> = <i>A</i></span>. An integer <i>A</i> is a <b>perfect square</b> if <span class="m"><i>A</i> = <i>k</i><sup>2</sup></span> for some integer <i>k</i>. The equation <span class="m"><i>x</i><sup>2</sup> = <i>A</i></span> with <span class="m"><i>A</i> &gt; 0</span> has two solutions, <span class="m"><i>x</i> = ±√<i>A</i></span>.</p>
<div class="display"><span class="m">√(<i>ab</i>) = √<i>a</i> · √<i>b</i></span>,  <span class="m">√(<i>a</i>/<i>b</i>) = √<i>a</i> / √<i>b</i></span>  <span class="dim">(a ≥ 0, b &gt; 0)</span><br><span class="m">√(<i>x</i><sup>2</sup>) = |<i>x</i>|</span><br>Babylonian (Newton) iteration: <span class="m"><span class="c3"><i>x</i></span><sub><i>k</i>+1</sub> = <span class="fr"><span>1</span><span>2</span></span>(<span class="c3"><i>x</i></span><sub><i>k</i></sub> + <span class="c1"><i>A</i></span>/<span class="c3"><i>x</i></span><sub><i>k</i></sub>)</span></div>
<p>If a positive integer is not a perfect square, its square root is irrational. For example <span class="m">√2</span> cannot be written as a ratio of integers.</p>`,
  legend: [
    { c: "c1", sym: `<i>A</i>`, name: "Area (radicand)", desc: "The number under the root sign. In the lab it is the number of unit tiles." },
    { c: "c2", sym: `√<i>A</i>`, name: "Side (square root)", desc: "The non-negative number whose square is A: the side length of the square." },
    { c: "c3", sym: `<i>x</i><sub><i>k</i></sub>`, name: "Babylonian guess", desc: "Each improved estimate of √A. The average of a guess and A divided by the guess." }
  ],
  steps: { title: "How to estimate a square root", items: [
    `Find the two perfect squares on either side of <i>A</i>. Their roots bracket <span class="m">√<i>A</i></span>.`,
    `Take a first guess <span class="m"><i>x</i></span> between those roots.`,
    `Compute <span class="m"><i>A</i> ÷ <i>x</i></span>. If your guess is too big, this is too small, and the reverse.`,
    `Average the two: <span class="m">(<i>x</i> + <i>A</i>/<i>x</i>) ÷ 2</span>. This is the new guess.`,
    `Repeat until the guess stops changing to the accuracy you need.`
  ] },
  example: {
    prompt: `A community garden plot is a square with an area of 200 m². How long is each side, and about how much fencing is needed to enclose it?`,
    lines: [
      { math: `<span class="m">14<sup>2</sup> = 196 &lt; <span class="c1">200</span> &lt; 225 = 15<sup>2</sup></span>`, note: "The side is between 14 and 15 m, very close to 14." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>1</sub> = (14 + 200/14) ÷ 2 ≈ (14 + 14.2857) ÷ 2 ≈ <span class="c3">14.1429</span></span>`, note: "One Babylonian step from the guess 14." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>2</sub> = (14.1429 + 200/14.1429) ÷ 2 ≈ <span class="c3">14.1421</span></span>`, note: "A second step. The guess has settled to four decimal places." },
      { math: `<span class="m">√<span class="c1">200</span> = √(100 × 2) = 10√2 ≈ <span class="c2">14.142</span></span>`, note: "Exact form, using √(ab) = √a · √b." },
      { math: `<span class="m">4 × 14.142 ≈ 56.57</span>`, note: "The perimeter is four sides." }
    ],
    answer: `Each side is <span class="m">10√2 ≈ 14.14</span> m, and about <span class="m">56.6</span> m of fencing is needed.`
  },
  why: `<p>Square roots appear whenever you work backward from an area or need a straight-line distance. Ordering sod for a square lawn, checking that a deck frame is square and reading a TV size measured along the diagonal all run through a square root. Guessing instead wastes material or leaves a corner out of true.</p>
<p>They also measure size and spread in technical work. In statistics the standard deviation is a square root. In electrical work the RMS voltage of a sine wave is its peak divided by √2. In games and graphics, every distance between two points uses one.</p>
<p>Later math builds on them directly: the Pythagorean theorem and the distance formula, the quadratic formula, and the discovery that numbers like √2 are irrational, which leads to the real numbers.</p>`,
  careers: [
    { role: "Carpenter", use: "Finds the diagonal of a rectangular frame as √(length² + width²) to check that it is square." },
    { role: "Electrician", use: "Relates peak and RMS voltage for AC sine waves, where RMS equals peak divided by √2." },
    { role: "Statistician", use: "Computes standard deviation as the square root of the variance." },
    { role: "Game developer", use: "Calculates the distance between two objects with the distance formula, which uses a square root." },
    { role: "Surveyor", use: "Computes straight-line distances between measured points from their coordinate differences." },
    { role: "Landscape designer", use: "Works out the side length of a square bed or patio from a target area." }
  ],
  life: [
    "Finding the side of a square room from its floor area",
    "Understanding a TV's size, which is measured along the diagonal",
    "Checking that a corner is square with a tape measure",
    "Estimating a straight-line shortcut across a field"
  ],
  fields: [
    { name: "Geometry", use: "The Pythagorean theorem and distance formula need square roots." },
    { name: "Statistics", use: "Standard deviation and standard error are square roots." },
    { name: "Physics", use: "Pendulum periods, wave speeds and root-mean-square values involve square roots." },
    { name: "Computer graphics", use: "Vector lengths and normalization use square roots constantly." }
  ],
  layers: {
    concept: {
      heading: "What is a square root?",
      lede: `A square root answers the question: what side length gives this area? It works backward from a square, and later from any straight-line distance.`,
      history: `<p><b>The problem.</b> Builders, surveyors and scribes often knew an area and needed a length, such as the side of a square field or the diagonal of a square. Most of these roots are not whole numbers, so they needed a way to compute them to useful accuracy.</p>
<p><b>The solution.</b> A small Babylonian clay tablet, YBC 7289, made in southern Mesopotamia between about 1800 and 1600 BCE and probably a student's exercise, shows a square with its diagonals and gives √2 in base 60 as 1;24,51,10, about 1.414213. In the 1st century CE Heron of Alexandria wrote down the guess, divide and average rule in his <i>Metrica</i>, a book of methods for measuring areas and volumes. For the side of a square of area 720 he started from 27, since 27² = 729, divided 720 by 27 to get 26 2/3, and averaged the two to get 26 5/6. The rule is often called the Babylonian method, but no Babylonian text describing it is known.</p>
<p><b>What it changed.</b> A rule that improves any guess made square roots a routine part of measuring, and the same averaging step still runs inside calculators and software. The √ sign first appeared in print in Christoff Rudolff's algebra book <i>Die Coss</i> (1525), and in 1637 Descartes joined it to the bar over the radicand, giving the modern symbol.</p>`,
      sources: [
        { title: "YBC 7289 (Wikipedia)", url: "https://en.wikipedia.org/wiki/YBC_7289" },
        { title: "Heron of Alexandria (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Heron/" },
        { title: "Methods of computing square roots (Wikipedia)", url: "https://en.wikipedia.org/wiki/Methods_of_computing_square_roots" },
        { title: "Radical symbol (Wikipedia)", url: "https://en.wikipedia.org/wiki/Radical_symbol" }
      ],
      examples: [
        { role: "Carpenter", scene: `A deck frame is 6 ft by 8 ft. If the corner is square, the diagonal is <span class="m">√(6² + 8²) = √100 = 10</span> ft. The tape reads 10 ft 1 in, so the frame gets a push before it is fastened.`, takeaway: "Two equal, correct diagonals prove the frame is square." },
        { role: "Landscape designer", scene: `A client wants a square patio of 144 ft². The side is <span class="m">√144 = 12</span> ft, and the edging around it is <span class="m">4 × 12 = 48</span> ft.`, takeaway: "The area sets the budget, but the side sets the layout and the edging order." },
        { role: "Electrician", scene: `A standard US outlet is rated 120 V, an RMS value. The peak of the sine wave is <span class="m">120 × √2 ≈ 170</span> V.`, takeaway: "Insulation and components must handle the peak, which is higher than the rating." },
        { role: "Statistician", scene: `Delivery times have a variance of 16 min². The standard deviation is <span class="m">√16 = 4</span> minutes.`, takeaway: "The root brings the spread back into the same units as the data." },
        { role: "Game developer", scene: `An enemy is 5 units across and 12 units up from the player. The distance is <span class="m">√(5² + 12²) = √169 = 13</span> units, inside a 15-unit attack range.`, takeaway: "Every range check in a game is a square root, run many times a second." },
        { role: "Surveyor", scene: `A marker is 120 m east and 50 m north of a benchmark. The straight-line distance is <span class="m">√(120² + 50²) = √16,900 = 130</span> m.`, takeaway: "Coordinates become distances through a square root." }
      ]
    },
    build: {
      lede: `To estimate a square root, bracket it between perfect squares, then keep averaging a guess with the area divided by that guess.`,
      intro: `<p>The model above builds the area <span class="c1"><i>A</i></span> from unit tiles. Gold tiles form the largest complete square that fits, and pink tiles are the leftovers that do not finish the next one. The dashed cyan square has area exactly <i>A</i>, so its side is <span class="c2">√<i>A</i></span>. On the number line, each pink dot is a Babylonian guess <span class="c3"><i>x</i><sub><i>k</i></sub></span>: press Next guess and watch the dots close in on the cyan mark.</p>`,
      stepWhy: [
        `For positive numbers, squaring keeps order: since 196 &lt; 200 &lt; 225, the root lies between 14 and 15. The bracket gives the whole-number part and catches a wild answer later.`,
        `Any guess inside the bracket works, and a closer one saves rounds. The method improves whatever you give it.`,
        `If <i>x</i> × <i>x</i> were exactly <i>A</i>, then <i>A</i> ÷ <i>x</i> would equal <i>x</i>. A guess that is too big makes <i>A</i> ÷ <i>x</i> too small, so the true root lies between the two numbers.`,
        `The root lies between <i>x</i> and <i>A</i> ÷ <i>x</i>, so their average is a better guess. Once you are close, each round roughly doubles the number of correct digits.`,
        `Stop when the new guess agrees with the old one to the places you need. More places than your measurements support add nothing.`
      ],
      bridge: `<p>The garden plot follows the pattern of most square-root jobs: you know an area, you want a length, and two rounds of guess, divide and average give the side to four decimal places. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Finding the side of a square room from its floor area", link: `Bracket the area between perfect squares (step 1): a square room of 200 ft² has sides a little over 14 ft, since 14² = 196.` },
        { task: "Understanding a TV's size, which is measured along the diagonal", link: `The diagonal is √(width² + height²). Bracket it, then average once or twice, as the garden example went from 14 to 14.1429 to 14.1421.` },
        { task: "Checking that a corner is square with a tape measure", link: `For sides of 6 and 8 ft the diagonal should be √100 = 10 ft. With a perfect square under the root, step 1 already gives the exact answer.` },
        { task: "Estimating a straight-line shortcut across a field", link: `Walk 100 m, turn a right angle, walk 100 m: the shortcut is <span class="m">√20,000 = 100√2 ≈ 141</span> m, the garden's 10√2 pattern scaled up by 10.` }
      ]
    },
    formal: {
      setup: { title: "Writing a square-root problem", items: [
        { say: `<b>Name the quantities.</b> Give the known area and the unknown side letters, with units.`, math: `<span class="m"><span class="c1"><i>A</i></span> = 200</span> m² (area), <span class="m"><span class="c2"><i>s</i></span></span> = side in m` },
        { say: `<b>Write the equation.</b> A length is non-negative, so keep only the principal root.`, math: `<span class="m"><span class="c2"><i>s</i></span><sup>2</sup> = <span class="c1"><i>A</i></span>, <span class="c2"><i>s</i></span> ≥ 0 ⟹ <span class="c2"><i>s</i></span> = √<span class="c1"><i>A</i></span></span>` },
        { say: `<b>Simplify exactly.</b> The product rule √(ab) = √a · √b pulls out the largest perfect-square factor.`, math: `<span class="m">√200 = √(100 · 2) = √100 · √2 = 10√2</span>` },
        { say: `<b>Approximate by iteration.</b> Bracket, then apply the Babylonian step until the digits settle.`, math: `<span class="m"><span class="c3"><i>x</i></span><sub>0</sub> = 14, <span class="c3"><i>x</i></span><sub>1</sub> = ½(14 + 200/14) ≈ 14.1429, <span class="c3"><i>x</i></span><sub>2</sub> ≈ 14.1421</span>` },
        { say: `<b>Answer in a sentence.</b> Give the side and anything that follows from it, with units.`, math: `<span class="m"><span class="c2"><i>s</i></span> = 10√2 ≈ 14.14</span> m, <span class="m"><i>P</i> = 4<span class="c2"><i>s</i></span> ≈ 56.6</span> m → Each side is about 14.14 m, and about 56.6 m of fencing is needed.` }
      ] }
    }
  },
  prereqWhy: {
    "exponents": "A square root undoes the exponent 2, so you need to know what squaring does."
  },
  unlocksWhy: {
    "real-numbers": "Roots of non-square integers such as √2 are the first irrational numbers most learners meet."
  },
  beyond: [
    { field: "Geometry", why: "Lengths of diagonals, distances and the Pythagorean theorem depend on square roots." },
    { field: "Algebra I", why: "Solving quadratic equations and using the quadratic formula require square roots." },
    { field: "Real analysis", why: "Proving that √2 exists as a real number motivates the completeness of ℝ." }
  ],
  mistakes: [
    { wrong: `<span class="m">√9 = ±3</span>`, fix: `The symbol √ means the non-negative root: <span class="m">√9 = 3</span>. The equation <span class="m"><i>x</i><sup>2</sup> = 9</span> has solutions ±3.` },
    { wrong: `<span class="m">√(9 + 16) = √9 + √16 = 7</span>`, fix: `Roots do not split over addition: <span class="m">√(9 + 16) = √25 = 5</span>.` },
    { wrong: `<span class="m">√16 = 8</span> (halving)`, fix: `A square root asks what number times itself gives 16: <span class="m">4 × 4 = 16</span>, so <span class="m">√16 = 4</span>.` },
    { wrong: `Keeping area units on the side: <span class="m">√(200 m²) ≈ 14.14 m²</span>`, fix: `The root of an area in square metres is a length in metres: <span class="m">√(200 m²) ≈ 14.14 m</span>.` }
  ],
  practice: [
    { ctx: "Home", q: `A square rug covers 144 ft². How long is each side?`, a: `<span class="m">√144 = 12</span>, since 12 × 12 = 144. Each side is <b>12 ft</b>.` },
    { ctx: "Gardening", q: `A square herb bed has an area of 50 ft². Between which two whole numbers of feet is its side, <span class="m">√50</span>?`, a: `<b>7 and 8</b>, since 49 &lt; 50 &lt; 64. It is close to 7 (√50 ≈ 7.07 ft).` },
    { ctx: "Tiling", q: `A square tile has an area of 72 in². Write its side, <span class="m">√72</span> inches, in simplest form.`, a: `<span class="m"><b>6√2</b></span> inches. 72 = 36 × 2, so √72 = √36 · √2 = 6√2.` },
    { ctx: "Signs", q: `A square sign must have an area of 10 ft². Do one Babylonian step for its side <span class="m">√10</span>, starting from the guess 3.`, a: `<span class="m">(3 + 10/3) ÷ 2 = 19/6 ≈ 3.1667</span> ft. The true value is √10 ≈ 3.1623.` },
    { ctx: "Landscaping", q: `Write an equation with a letter for the unknown, then solve: a square lawn has an area of 225 m². How long is each side <i>s</i>, and how much edging goes around it?`, a: `<span class="m"><i>s</i><sup>2</sup> = 225</span> with <span class="m"><i>s</i> ≥ 0</span>, so <span class="m"><i>s</i> = √225 = 15</span>. Each side is <b>15 m</b>, and the edging is <span class="m">4 × 15 = </span><b>60 m</b>.` }
  ],
  origin: `The Babylonian clay tablet YBC 7289 (about 1800–1600 BCE) gives √2 in base 60 as 1;24,51,10, about 1.414213, correct to roughly six decimal places. Greek mathematicians of the Pythagorean school proved that √2 is not a ratio of whole numbers. The √ sign appeared in print in Christoph Rudolff's <i>Coss</i> (1525).`
};
