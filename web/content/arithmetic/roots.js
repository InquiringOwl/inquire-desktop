window.ARITH = window.ARITH || {};

ARITH["roots"] = {
  title: "Square Roots & Perfect Squares",
  short: "Finding the side of a square from its area",
  grade: "Grade 8",
  hours: 5,
  voice: "plain",
  eyebrow: "Operations · inverse of squaring",
  hero: `<span class="m">√<span class="c1"><i>A</i></span> = <span class="c2"><i>s</i></span>  ⟺  <span class="c2"><i>s</i></span><sup>2</sup> = <span class="c1"><i>A</i></span>, <span class="c2"><i>s</i></span> ≥ 0</span>`,
  lede: `The principal square root of a non-negative number <i>A</i> is the non-negative number whose square is <i>A</i>. Geometrically, it is the side length of the square with area <i>A</i>.`,
  plain: `<p>A square patio laid with 1-foot tiles, 5 tiles along each side, uses 25 tiles. Squaring goes from side to area: <span class="m">5<sup>2</sup> = 25</span>. The <b>square root</b> goes back from area to side: <span class="m">√25 = 5</span>. The number under the sign is called the <b>radicand</b>.</p>
<p>Numbers like 1, 4, 9, 16, 25 and 36 are <b>perfect squares</b>. They come from squaring whole numbers, so their roots are whole numbers. Most numbers are not perfect squares. A square with an area of 20 ft² has a side between √16 = 4 and √25 = 5 feet, about 4.47 feet. You can close in on a root like this by guessing a side, dividing the area by the guess, and averaging the two numbers. Each round gives a better guess.</p>
<p>The √ sign always means the non-negative root. Both 5 and −5 square to 25, but √25 is 5. A side length is never negative.</p>`,
  formal: `<p>For a real number <span class="m"><i>A</i> ≥ 0</span>, the <b>principal square root</b> <span class="m">√<i>A</i></span> is the unique real number <span class="m"><i>s</i> ≥ 0</span> with <span class="m"><i>s</i><sup>2</sup> = <i>A</i></span>. An integer <i>A</i> is a <b>perfect square</b> if <span class="m"><i>A</i> = <i>k</i><sup>2</sup></span> for some integer <i>k</i>. The equation <span class="m"><i>x</i><sup>2</sup> = <i>A</i></span> with <span class="m"><i>A</i> &gt; 0</span> has two solutions, <span class="m"><i>x</i> = ±√<i>A</i></span>.</p>
<div class="display"><span class="m">√(<i>ab</i>) = √<i>a</i> · √<i>b</i></span>,  <span class="m">√(<i>a</i>/<i>b</i>) = √<i>a</i> / √<i>b</i></span>  <span class="dim">(a ≥ 0, b &gt; 0)</span><br><span class="m">√(<i>x</i><sup>2</sup>) = |<i>x</i>|</span><br>Babylonian (Heron's) iteration: <span class="m"><span class="c3"><i>x</i></span><sub><i>k</i>+1</sub> = <span class="fr"><span>1</span><span>2</span></span>(<span class="c3"><i>x</i></span><sub><i>k</i></sub> + <span class="c1"><i>A</i></span>/<span class="c3"><i>x</i></span><sub><i>k</i></sub>)</span></div>
<p>If a positive integer is not a perfect square, its square root is irrational. For example <span class="m">√2</span> cannot be written as a ratio of integers.</p>`,
  legend: [
    { c: "c1", sym: `<i>A</i>`, name: "Area (radicand)", desc: "The number under the root sign. In the model it is the number of unit tiles. When the tiles fill a whole square with none left over, A is a perfect square." },
    { c: "c2", sym: `√<i>A</i>`, name: "Side (square root)", desc: "The number that times itself gives A. It is the side of the dashed square, and it is never negative." },
    { c: "c3", sym: `<i>x</i><sub><i>k</i></sub>`, name: "Babylonian guess", desc: "Each better estimate of √A. The next guess is the average of a guess and A divided by that guess." }
  ],
  steps: { title: "How to estimate a square root", items: [
    `Find the two perfect squares on either side of <i>A</i>. Their roots bracket <span class="m">√<i>A</i></span>.`,
    `Take a first guess <span class="m"><i>x</i></span> between those roots.`,
    `Divide: <span class="m"><i>A</i> ÷ <i>x</i></span>. If your guess is too big, this is too small, and the reverse.`,
    `Average the two: <span class="m">(<i>x</i> + <i>A</i>/<i>x</i>) ÷ 2</span>. This is the new guess.`,
    `Repeat until the guess stops changing to the accuracy you need.`
  ] },
  example: {
    prompt: `A community garden plot is a square with an area of 60 m². How long is each side, and about how much fencing is needed to enclose it?`,
    lines: [
      { math: `<span class="m">7<sup>2</sup> = 49 &lt; <span class="c1">60</span> &lt; 64 = 8<sup>2</sup></span>`, note: "The side is between 7 and 8 m." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>1</sub> = (8 + 60/8) ÷ 2 = (8 + 7.5) ÷ 2 = <span class="c3">7.75</span></span>`, note: "One Babylonian step from the guess 8." },
      { math: `<span class="m"><span class="c3"><i>x</i></span><sub>2</sub> = (7.75 + 60/7.75) ÷ 2 ≈ <span class="c3">7.7460</span></span>`, note: "A second step. The guess has settled to four decimal places." },
      { math: `<span class="m">√<span class="c1">60</span> = √(4 × 15) = 2√15 ≈ <span class="c2">7.746</span></span>`, note: "Exact form, using √(ab) = √a · √b." },
      { math: `<span class="m">4 × 7.746 ≈ 30.98</span>`, note: "The perimeter is four sides." }
    ],
    answer: `Each side is <span class="m">2√15 ≈ 7.75</span> m, and about <span class="m">31</span> m of fencing is needed.`
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
    "Laying out a square flower bed to match a bag of mulch",
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
    nudge: "Not yet. Check that your side times itself gives the area.",
    concept: {
      lede: `A square root answers the question: what side gives this area? It works backward from a square, and later from any straight-line distance.`,
      heading: "What is a square root?",
      question: { text: "How long is the side?", sub: `You know how many tiles cover a square. You want the length of one side. Watch the tiles in the model above, then try each idea yourself.`,
        figure: { sym: `<i>A</i>`, value: "50", cap: "tiles in the model", echo: "a" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["tile", "tiles", "meter", "meters", "square meters", "foot", "feet", "square feet", "inch", "inches", "fencing", "volts", "minutes", "units"],
      walk: { title: "Undo it together: a square garden plot",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A community garden plot is a square. Its area is 60 square meters. How long is each side, and how much fencing goes around it?`,
        demo: { kind: "line", from: 7, to: 8, tick: 1, points: [{ v: 7, c: "c1", label: "7 × 7 = 49", below: true }, { v: 8, c: "c1", label: "8 × 8 = 64", below: true }, { v: 7.5, c: "c3", label: "60 ÷ 8 = 7.5" }, { v: 7.75, c: "c2", label: "7.75" }],
          alt: "A number line from 7 to 8. First 7 and 8 are marked as the sides of squares of 49 and 64. Then 7.5, the area divided by the guess 8, is marked. Last, 7.75, the average of 8 and 7.5, is marked." },
        lines: [
          { math: `<span class="c1"><i>A</i></span> = 60`, note: `The plot is a square of 60 square meters. You need the side.`, frame: 0 },
          { math: `7 × 7 = 49,  8 × 8 = 64`, note: `60 is between 49 and 64. So the side is between 7 and 8 meters.`, frame: 2 },
          { math: `60 ÷ 2 = 30?  30 × 30 = 900`, note: `A shortcut halves the area. But a 30 m side gives 900 square meters, far too big.`, frame: 2 },
          { math: `60 ÷ 8 = 7.5`, note: `Guess 8. Divide the area by your guess. 8 is too big, so 7.5 is too small.`, frame: 3 },
          { math: `(8 + 7.5) ÷ 2 = <span class="c3">7.75</span>`, note: `The side is between 7.5 and 8. Their average is a better guess.`, frame: 4 },
          { math: `7.75 × 7.75 = 60.0625`, note: `That is very close to 60. Each side is about <span class="c2">7.75</span> meters.`, frame: 4 },
          { math: `4 × 7.75 = 31`, note: `A square has 4 equal sides. You need about 31 meters of fencing.`, frame: 4 }
        ],
        predict: [null,
          { ask: `7 × 7 = 49 is too small. What is 8 × 8?`, parts: [{ label: "8 × 8", ans: 64 }], hint: `8 × 8 is 8 groups of 8.` },
          { ask: `A friend says: "Half of 60 is 30, so the side is 30 meters." Is that right?`, choices: [
            { t: "No. 30 × 30 is 900, not 60", ok: true },
            { t: "Yes. A square root is half the number", why: "Half undoes doubling. A square root undoes side times side, so check 30 × 30." },
            { t: "Yes. A square has 2 equal sides", why: "A square has 4 equal sides, and side times side is the area." }
          ], hint: `Multiply the side by itself and compare with 60.` },
          { ask: `Guess the side is 8. What is 60 ÷ 8?`, parts: [{ label: "60 ÷ 8", ans: 7.5 }], hint: `8 × 7 = 56. The 4 left over is half of 8.` },
          { ask: `The side is between 7.5 and 8. Which is the best next guess?`, choices: [
            { t: "7.75, halfway between them", ok: true },
            { t: "7.5", why: "7.5 × 7.5 = 56.25, too small." },
            { t: "8", why: "8 × 8 = 64, too big." }
          ], hint: `Average the two numbers: add them and divide by 2.` },
          null,
          { ask: `Each side is about 7.75 meters. How many meters of fencing go around all 4 sides?`, parts: [{ label: "meters of fencing", ans: 31 }], hint: `4 × 7 = 28, and 4 × 0.75 = 3.` }],
        answer: `Each side is about <span class="m c2">7.75</span> meters, and the plot needs about 31 meters of fencing.` },
      ideas: [
        { c: "c1", title: "Some areas make full squares", term: "perfect square", text: `6 rows of 6 tiles make 36. The tiles fill a whole square with none left over. 36 is a perfect square.`,
          demo: { kind: "array", rows: 6, cols: 6, unit: "tile", alt: "Six rows of six tiles appear one row at a time, making 36 tiles in a full square." }, try: { label: "Make 36 tiles", lab: "a:36" } },
        { c: "c2", title: "The side undoes the area", term: "square root", text: `Side times side gives the area. The square root goes back: √16 = 4, √25 = 5, √36 = 6. A side is never negative.`,
          demo: { kind: "line", from: 0, to: 7, tick: 1, points: [{ v: 4, c: "c2", label: "√16 = 4" }, { v: 5, c: "c2", label: "√25 = 5" }, { v: 6, c: "c2", label: "√36 = 6" }], alt: "A number line from 0 to 7 marks 4, 5 and 6 as the square roots of 16, 25 and 36." },
          try: { label: "Show √81", lab: "a:81" } },
        { c: "c3", title: "Guess, divide, average", term: "Babylonian guess", text: `Guess the side. Divide the area by your guess. The average of the two is a better guess. Repeat.`,
          demo: { kind: "line", from: 2, to: 4, tick: 1, points: [{ v: 4, c: "c3", label: "guess 4" }, { v: 2.5, c: "c3", label: "10 ÷ 4 = 2.5" }, { v: 3.25, c: "c2", label: "average 3.25" }], alt: "For an area of 10, a number line marks the guess 4, then 10 divided by 4, which is 2.5, then their average, 3.25." },
          try: { label: "Guess twice for 10", lab: "a:10,nextguess,nextguess" } }
      ],
      timelineTitle: "People have found square roots for about 4,000 years",
      timelineLead: `Builders and scribes often knew an area and needed a length. The guess, divide and average rule they used is the Next guess button in the model.`,
      timeline: [
        { when: "About 1800 to 1600 BCE", what: `A student in southern Mesopotamia draws a square with its diagonals on a small clay tablet, YBC 7289. It gives √2 as about 1.414213.` },
        { when: "1st century CE", what: `Heron of Alexandria writes down guess, divide and average in his <i>Metrica</i>. For an area of 720 he starts from 27 and gets 26 5/6, as Next guess does in the model.` },
        { when: "1525", what: `The √ sign first appears in print, in Christoff Rudolff's algebra book <i>Die Coss</i>.` },
        { when: "1637", what: `René Descartes joins the √ sign to a bar over the number, the symbol in use today.` }
      ],
      history: `<p><b>The problem.</b> Builders, surveyors and scribes often knew an area and needed a length, such as the side of a square field or the diagonal of a square. Most of these roots are not whole numbers, so they needed a way to compute them to useful accuracy.</p>
<p><b>The solution.</b> A small Babylonian clay tablet, YBC 7289, made in southern Mesopotamia between about 1800 and 1600 BCE and probably a student's exercise, shows a square with its diagonals and gives √2 in base 60 as 1;24,51,10, about 1.414213. It is now in the Yale Babylonian Collection. In the 1st century CE Heron of Alexandria wrote down the guess, divide and average rule in his <i>Metrica</i>, a book of methods for measuring areas and volumes. For the side of a square of area 720 he started from 27, since 27² = 729, divided 720 by 27 to get 26 2/3, and averaged the two to get 26 5/6. The rule is often called the Babylonian method. Some historians think the Babylonians used it, but no Babylonian text that spells it out has been found.</p>
<p><b>What it changed.</b> A rule that improves any guess made square roots a routine part of measuring, and the same averaging step still runs inside calculators and software. Once a guess is close, each round roughly doubles the number of correct digits. The √ sign first appeared in print in Christoff Rudolff's algebra book <i>Die Coss</i> (1525), and in 1637 Descartes joined it to the bar over the radicand, giving the modern symbol.</p>`,
      sources: [
        { title: "YBC 7289 (Wikipedia)", url: "https://en.wikipedia.org/wiki/YBC_7289" },
        { title: "Heron of Alexandria (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Heron/" },
        { title: "Methods of computing square roots (Wikipedia)", url: "https://en.wikipedia.org/wiki/Methods_of_computing_square_roots" },
        { title: "Radical symbol (Wikipedia)", url: "https://en.wikipedia.org/wiki/Radical_symbol" }
      ],
      matters: { title: "Why square roots matter", text: `<p>Tiles, sod and mulch are sold by the square foot. But you build with <b>lengths</b>. A square root turns an area back into a side you can measure.</p><ul class="why-chips"><li><b>Fencing</b> and edging</li><li><b>Diagonals</b> of frames and screens</li><li><b>Straight-line</b> distances</li></ul><p>Get the side wrong and every cut, post and order that uses it is wrong too. A square root you can <b>check by multiplying</b> keeps the job honest.</p>` },
      stakes: { title: "Where square roots go wrong", lead: `Most slips treat a square root like halving, or forget that a side is a length.`, items: [
        { role: "Halving", text: `√16 is 4, not 8. Half of 16 is 8, but 8 × 8 = 64.` },
        { role: "Adding under the root", text: `√(9 + 16) is √25 = 5, not 3 + 4 = 7.` },
        { role: "Wrong units", text: `A square room of 100 square feet has 10-foot walls, not 10 square feet.` },
        { role: "Ordering by the side", text: `A square floor with 12-foot sides needs 144 square feet of tile, not 12.` }
      ], try: { label: "Set the area to 16", lab: "a:16" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Carpenter", figure: "10 ft", try: { label: "Show √100", lab: "a:100" }, scene: `A deck frame is 6 ft by 8 ft. If the corner is square, the diagonal is <span class="m">√(6² + 8²) = √100 = 10</span> ft. The tape reads 10 ft 1 in, so the frame gets a push before it is fastened.`, takeaway: "Two equal, correct diagonals prove the frame is square." },
        { role: "Landscape designer", figure: "12 ft", try: { label: "Show √144", lab: "a:144" }, scene: `A client wants a square patio of 144 ft². The side is <span class="m">√144 = 12</span> ft, and the edging around it is <span class="m">4 × 12 = 48</span> ft.`, takeaway: "The area sets the budget, but the side sets the layout and the edging order." },
        { role: "Electrician", figure: "170 V", scene: `A standard US outlet is rated 120 V, an RMS value. The peak of the sine wave is <span class="m">120 × √2 ≈ 170</span> V.`, takeaway: "Insulation and components must handle the peak, which is higher than the rating." },
        { role: "Statistician", figure: "4 minutes", try: { label: "Show √16", lab: "a:16" }, scene: `Delivery times have a variance of 16 min². The standard deviation is <span class="m">√16 = 4</span> minutes.`, takeaway: "The root brings the spread back into the same units as the data." },
        { role: "Game developer", figure: "13 units", scene: `An enemy is 5 units across and 12 units up from the player. The distance is <span class="m">√(5² + 12²) = √169 = 13</span> units, inside a 15-unit attack range.`, takeaway: "Every range check in a game is a square root, run many times a second." },
        { role: "Surveyor", figure: "130 m", scene: `A marker is 120 m east and 50 m north of a benchmark. The straight-line distance is <span class="m">√(120² + 50²) = √16,900 = 130</span> m.`, takeaway: "Coordinates become distances through a square root." }
      ]
    },
    build: {
      lede: `To estimate a square root, bracket it between perfect squares, then keep averaging a guess with the area divided by that guess.`,
      task: { text: "Find the side, and check it by multiplying.", sub: `The same five moves work for any area, from a 60-square-meter garden to a 20-square-foot flower bed. Try each one in the model above as you go.`,
        figure: { sym: `⌊√<i>A</i>⌋`, value: "7", cap: "whole tiles along the gold square's side", echo: "floor" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above builds the area <span class="c1"><i>A</i></span> from unit tiles. Gold tiles form the biggest whole square that fits, and pink tiles are the leftovers that do not finish the next one. The dashed square has area exactly <i>A</i>, so its side is <span class="c2">√<i>A</i></span>. On the number line, each pink dot is a Babylonian guess <span class="c3"><i>x</i><sub><i>k</i></sub></span>. Press Next guess and watch the dots close in on the root.</p>`,
      keyTry: [{ label: "Set the area to 36", lab: "a:36" }, { label: "Set the area to 2", lab: "a:2" }, { label: "Press Next guess", lab: "nextguess" }],
      objects: ["tile", "tiles", "area", "side", "sides", "foot", "feet", "square feet", "inch", "inches", "meter", "meters", "square meters", "mulch", "fencing"],
      goalsIntro: `Two of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Bigger sides make bigger squares. So if 49 &lt; 60 &lt; 64, the side is between 7 and 8. The bracket gives the whole-number part and catches a wild answer later.`,
        `Any guess inside the bracket works. A closer one saves rounds, because the method improves whatever you give it.`,
        `If your guess were exactly right, <i>A</i> ÷ <i>x</i> would equal <i>x</i>. A guess that is too big makes <i>A</i> ÷ <i>x</i> too small. So the real side is between the two numbers.`,
        `The side is between <i>x</i> and <i>A</i> ÷ <i>x</i>, so their average is closer. Once you are close, each round about doubles the number of correct digits.`,
        `Stop when the new guess matches the old one to the places you need. Extra places add nothing if your tape measure cannot read them.`
      ],
      stepTry: [null, null, { label: "Set the area to 20", lab: "a:20" }, { label: "Guess once for 20", lab: "a:20,nextguess" }, { label: "Guess four times for 20", lab: "a:20,nextguess,nextguess,nextguess,nextguess" }],
      stepGoal: [
        { key: "a", eq: 99, text: `Find the biggest area whose side is still less than 10. Set <span class="c1"><i>A</i></span> to it.`, after: `<span class="m">81 &lt; 99 &lt; 100</span>. The 81 gold tiles make 9 by 9, and 18 pink tiles are left. One more tile would make 10 by 10.`, notYet: `Not yet. 10 × 10 = 100. Which area is one tile short of that?` },
        { key: "a", eq: 56, text: `Pick the area whose side is closest to 7.5. Slide <span class="c1"><i>A</i></span> between 49 and 64 and watch the side.`, after: `<span class="m">√56 ≈ 7.483</span> is closest to 7.5, since <span class="m">7.5 × 7.5 = 56.25</span>.`, notYet: `Not yet. Work out 7.5 × 7.5, then pick the whole area closest to it.` },
        null, null, null],
      matters: { title: "Why a Method Beats Guess and Check", text: `<p>You can try sides one by one until something fits. That works for 36. It stalls for 60, because no whole number fits and the decimals go on forever.</p><ul class="why-chips"><li>A <b>bracket</b> you can trust</li><li>A guess that <b>always improves</b></li><li>A clear point to <b>stop</b></li></ul><p>The method gets <b>closer every round</b>, and you can check any guess by multiplying it by itself.</p>` },
      bridge: `<p>The garden plot follows the pattern of most square-root jobs: you know an area, you want a length. Bracket it, then guess, divide and average until it is close enough. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Finding the side of a square room from its floor area", check: { q: `A square room has 100 square feet of floor. How long is each wall?`, parts: [{ label: "feet", ans: 10 }], hint: `Which number times itself makes 100? Try 9, then 10.` }, figure: "100 ft²",
          demo: { kind: "array", rows: 10, cols: 10, unit: "tile", alt: "Ten rows of ten one-foot tiles appear one row at a time, making 100 tiles in a full square." },
          lines: [{ math: `9 × 9 = 81`, note: "Too small. The side is more than 9 feet." }, { math: `10 × 10 = 100`, note: "That matches the floor area." }, { math: `√100 = 10`, note: "Each wall is 10 feet long." }],
          predict: [null, { ask: `9 × 9 = 81 is too small. What is 10 × 10?`, parts: [{ label: "10 × 10", ans: 100 }], hint: `10 rows of 10 tiles.` }],
          try: { label: "Show 100 tiles", lab: "a:100" }, link: `Bracket the area between perfect squares (step 1). Here the area is itself a perfect square, so the bracket lands on the answer.` },
        { task: "Laying out a square flower bed to match a bag of mulch", check: { q: `A bag of mulch covers 20 square feet. You want a square bed. Start from the guess 5, divide, and average once. What is your new guess for the side, in feet?`, parts: [{ label: "new guess", ans: 4.5 }], hint: `20 ÷ 5 = 4. Then average 5 and 4.` }, figure: "20 ft²",
          demo: { kind: "line", from: 4, to: 5, tick: 1, points: [{ v: 5, c: "c3", label: "guess 5" }, { v: 4, c: "c3", label: "20 ÷ 5 = 4", below: true }, { v: 4.5, c: "c2", label: "4.5" }], alt: "A number line from 4 to 5 marks the guess 5, then 20 divided by 5, which is 4, then their average, 4.5." },
          lines: [{ math: `4 × 4 = 16 &lt; 20 &lt; 25 = 5 × 5`, note: "The side is between 4 and 5 feet." }, { math: `20 ÷ 5 = 4`, note: "Divide the area by the guess 5." }, { math: `(5 + 4) ÷ 2 = 4.5`, note: "Average the two." }, { math: `4.5 × 4.5 = 20.25`, note: "Close to 20. Each side is about 4.5 feet." }],
          predict: [null, { ask: `Your guess is 5. What is 20 ÷ 5?`, parts: [{ label: "20 ÷ 5", ans: 4 }], hint: `How many 5s make 20?` }],
          try: { label: "Guess once for 20", lab: "a:20,nextguess" }, link: `This is one round of steps 3 and 4, the same divide and average that took the garden plot from 8 to 7.75.` },
        { task: "Understanding a TV's size, which is measured along the diagonal", check: { q: `A TV screen is 48 inches wide and 27 inches tall. Its size is the diagonal, √(48² + 27²). To the nearest inch, how big is the TV?`, parts: [{ label: "inches", ans: 55 }], hint: `48² = 2,304 and 27² = 729. Which whole number times itself comes closest to their sum?` }, figure: "55 in",
          demo: { kind: "bar", parts: [2304, 729], labels: ["48²", "27²"], alt: "A bar of 2,304 for 48 squared and a bar of 729 for 27 squared join into a total of 3,033." },
          lines: [{ math: `48² + 27² = 2,304 + 729`, note: "Square the width and the height." }, { math: `2,304 + 729 = 3,033`, note: "Add them." }, { math: `55² = 3,025 &lt; 3,033 &lt; 3,136 = 56²`, note: "Bracket the root: very close to 55." }, { math: `√3,033 ≈ 55.07`, note: "It is a 55-inch TV." }],
          predict: [null, { ask: `What is 2,304 + 729?`, parts: [{ label: "sum", ans: 3033 }], hint: `2,304 + 700 = 3,004. Then add 29.` }],
          link: `Step 1 does most of the work: the bracket between 55² and 56² already gives the size to the nearest inch.` },
        { task: "Checking that a corner is square with a tape measure", check: { q: `You frame a corner with sides of 9 feet and 12 feet. If the corner is square, how long is the diagonal?`, parts: [{ label: "feet", ans: 15 }], hint: `9 × 9 = 81 and 12 × 12 = 144. Add them, then find the root.` }, figure: "15 ft",
          demo: { kind: "bar", parts: [81, 144], labels: ["9²", "12²"], alt: "A bar of 81 for 9 squared and a bar of 144 for 12 squared join into a total of 225." },
          lines: [{ math: `9² + 12² = 81 + 144`, note: "Square each side." }, { math: `81 + 144 = 225`, note: "Add them." }, { math: `√225 = 15`, note: "15 × 15 = 225. If the tape reads 15 feet, the corner is square." }],
          predict: [null, { ask: `What is 81 + 144?`, parts: [{ label: "sum", ans: 225 }], hint: `80 + 144 = 224, plus 1.` }],
          link: `225 is a perfect square, so step 1 gives the exact answer. A reading longer or shorter than 15 feet means the corner needs a push.` },
        { task: "Estimating a straight-line shortcut across a field", check: { q: `You walk 60 meters along one edge of a field, then 80 meters along the next edge. How long is the straight path from start to finish, and how many meters does it save?`, parts: [{ label: "straight path", ans: 100 }, { label: "meters saved", ans: 40 }], hint: `60² + 80² = 3,600 + 6,400. Then compare the path with 60 + 80.` }, figure: "40 m saved",
          demo: { kind: "line", from: 0, to: 140, tick: 20, points: [{ v: 100, c: "c2", label: "across 100" }, { v: 140, c: "c1", label: "around 140" }], show: "dist", alt: "A number line from 0 to 140 marks the straight path of 100 meters and the walk around of 140 meters; the gap between them, 40 meters, is the saving." },
          lines: [{ math: `60² + 80² = 3,600 + 6,400`, note: "Square each leg of the walk." }, { math: `3,600 + 6,400 = 10,000`, note: "Add them." }, { math: `√10,000 = 100`, note: "100 × 100 = 10,000. The straight path is 100 meters." }, { math: `60 + 80 − 100 = 40`, note: "The shortcut saves 40 meters." }],
          predict: [null, { ask: `What is 3,600 + 6,400?`, parts: [{ label: "sum", ans: 10000 }], hint: `36 hundreds and 64 hundreds make 100 hundreds.` }],
          link: `Same steps as the TV: square, add, then find the root. A perfect square under the root ends the job at step 1.` }
      ]
    },
    formal: {
      question: { text: "What is √A, exactly?", sub: `You can find a side from an area and check it by multiplying. Here are the words a textbook uses for the same ideas, and how to write a square-root problem out in full.`,
        figure: { sym: `<i>A</i>`, value: "50", cap: "the radicand", echo: "a" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `<i>A</i>`, term: "Radicand", def: `The expression under a radical sign. For a real principal square root it must be non-negative.`, was: "the area, the number of tiles" },
        { c: "c2", sym: `√<i>A</i>`, term: "Principal square root", def: `For <span class="m"><i>A</i> ≥ 0</span>, the unique real number <span class="m"><i>s</i> ≥ 0</span> with <span class="m"><i>s</i><sup>2</sup> = <i>A</i></span>.`, was: "the side of the square" },
        { c: "c1", sym: `<i>k</i><sup>2</sup>`, term: "Perfect square", def: `An integer of the form <span class="m"><i>k</i><sup>2</sup></span> with <i>k</i> an integer, so its principal square root is a whole number.`, was: "tiles that fill a whole square, none left over" },
        { c: "c2", sym: `<i>x</i> = ±√<i>A</i>`, term: "Solutions of x² = A", def: `For <span class="m"><i>A</i> &gt; 0</span> the equation has exactly two real solutions, <span class="m">√<i>A</i></span> and <span class="m">−√<i>A</i></span>. The symbol √ names only the non-negative one.`, was: "a side is never negative" },
        { c: "c2", sym: `√2`, term: "Irrational number", def: `A real number that is not a ratio of integers. The square root of a positive integer that is not a perfect square is irrational; its decimal never ends or repeats.`, was: "the decimals go on forever" },
        { c: "c3", sym: `<i>x</i><sub><i>k</i>+1</sub> = ½(<i>x</i><sub><i>k</i></sub> + <i>A</i>/<i>x</i><sub><i>k</i></sub>)`, term: "Heron's (Babylonian) method", def: `An iteration that converges to √<i>A</i> from any positive start. It is Newton's method for <span class="m"><i>x</i><sup>2</sup> − <i>A</i> = 0</span>, and near the root it roughly doubles the correct digits each step.`, was: "guess, divide, average" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>The symbol and the equation give <b>different answers</b>. <span class="m">√9</span> names one number. The equation <span class="m"><i>x</i><sup>2</sup> = 9</span> has two solutions.</p><ul class="why-chips"><li><span class="m">√9 = <b>3</b></span></li><li><span class="m"><i>x</i><sup>2</sup> = 9 ⟹ <i>x</i> = <b>±3</b></span></li><li>A side takes only <b>+3</b></li></ul><p>Writing "√9 = ±3" is false as written. Saying which one you mean lets <b>someone else check</b> your work.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here treat √ like halving, split it over a sum, or lose track of signs and units.`,
      setupIntro: `<p>The garden plot from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a square-root problem", items: [
        { say: `<b>Name the quantities.</b> Give the known area and the unknown side letters, with units.`, math: `<span class="m"><span class="c1"><i>A</i></span> = 60</span> m² (area), <span class="m"><span class="c2"><i>s</i></span></span> = side in m` },
        { say: `<b>Write the equation.</b> A length is non-negative, so keep only the principal root.`, math: `<span class="m"><span class="c2"><i>s</i></span><sup>2</sup> = <span class="c1"><i>A</i></span>, <span class="c2"><i>s</i></span> ≥ 0 ⟹ <span class="c2"><i>s</i></span> = √<span class="c1"><i>A</i></span></span>` },
        { say: `<b>Bracket.</b> Squaring is increasing on <span class="m">[0, ∞)</span>, so the root lies between the roots of the neighboring perfect squares.`, math: `<span class="m">49 &lt; 60 &lt; 64 ⟹ 7 &lt; √60 &lt; 8</span>` },
        { say: `<b>Simplify exactly.</b> The product rule √(ab) = √a · √b pulls out the largest perfect-square factor.`, math: `<span class="m">√60 = √(4 · 15) = √4 · √15 = 2√15</span>` },
        { say: `<b>Approximate by iteration.</b> Apply the Babylonian step until the digits settle.`, math: `<span class="m"><span class="c3"><i>x</i></span><sub>0</sub> = 8, <span class="c3"><i>x</i></span><sub>1</sub> = ½(8 + 60/8) = 7.75, <span class="c3"><i>x</i></span><sub>2</sub> ≈ 7.7460</span>` },
        { say: `<b>Answer in a sentence.</b> Give the side and anything that follows from it, with units.`, math: `<span class="m"><span class="c2"><i>s</i></span> = 2√15 ≈ 7.746</span> m, <span class="m"><i>P</i> = 4<span class="c2"><i>s</i></span> ≈ 30.98</span> m → Each side is about 7.75 m, and about 31 m of fencing is needed.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the equation, bracket the root, then simplify or iterate. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can find a square root the formal way.",
      checks: [
        { hint: `Which whole number <i>s</i> has <span class="m"><i>s</i><sup>2</sup> = 144</span>?`, parts: [{ label: "feet", ans: 12 }] },
        { hint: `Find the perfect squares on either side of 50.`, parts: [{ label: "lower whole number", ans: 7 }, { label: "upper whole number", ans: 8 }] },
        { hint: `Find the largest perfect square that divides 72, then use <span class="m">√(ab) = √a · √b</span>.`, parts: [{ label: "number in front of √2", ans: 6 }] },
        { hint: `Compute <span class="m">10 ÷ 3</span>, add 3, and halve the sum.`, parts: [{ label: "new guess (2 decimal places)", ans: 3.17 }] },
        { hint: `Write <span class="m"><i>s</i><sup>2</sup> = 225</span> with <span class="m"><i>s</i> ≥ 0</span>. The edging is 4 sides.`, parts: [{ label: "side s (m)", ans: 15 }, { label: "edging (m)", ans: 60 }] }
      ]
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
    { wrong: `<span class="m">√16 = 8</span> (halving)`, fix: `A square root asks what number times itself gives 16: <span class="m">4 × 4 = 16</span>, so <span class="m">√16 = 4</span>. Halving gives 8, and <span class="m">8 × 8 = 64</span>.` },
    { wrong: `<span class="m">√9 = ±3</span>`, fix: `The symbol √ means the non-negative root: <span class="m">√9 = 3</span>. The equation <span class="m"><i>x</i><sup>2</sup> = 9</span> has solutions ±3.` },
    { wrong: `<span class="m">√(9 + 16) = √9 + √16 = 7</span>`, fix: `Roots do not split over addition: <span class="m">√(9 + 16) = √25 = 5</span>.` },
    { wrong: `Keeping area units on the side: <span class="m">√(60 m²) ≈ 7.75 m²</span>`, fix: `The root of an area in square meters is a length in meters: <span class="m">√(60 m²) ≈ 7.75 m</span>.` }
  ],
  practice: [
    { ctx: "Home", q: `A square rug covers 144 ft². How long is each side?`, a: `<span class="m">√144 = 12</span>, since 12 × 12 = 144. Each side is <b>12 ft</b>.` },
    { ctx: "Gardening", q: `A square herb bed has an area of 50 ft². Between which two whole numbers of feet is its side, <span class="m">√50</span>?`, a: `<b>7 and 8</b>, since 49 &lt; 50 &lt; 64. It is close to 7 (√50 ≈ 7.07 ft).` },
    { ctx: "Tiling", q: `A square tile has an area of 72 in². Write its side, <span class="m">√72</span> inches, in simplest form <span class="m"><i>a</i>√2</span>.`, a: `<span class="m"><b>6√2</b></span> inches. 72 = 36 × 2, so √72 = √36 · √2 = 6√2.` },
    { ctx: "Signs", q: `A square sign must have an area of 10 ft². Do one Babylonian step for its side <span class="m">√10</span>, starting from the guess 3. Round to two decimal places.`, a: `<span class="m">(3 + 10/3) ÷ 2 = 19/6 ≈ <b>3.17</b></span> ft. The true value is √10 ≈ 3.1623.` },
    { ctx: "Landscaping", q: `Write an equation with a letter for the unknown, then solve: a square lawn has an area of 225 m². How long is each side <i>s</i>, and how much edging goes around it?`, a: `<span class="m"><i>s</i><sup>2</sup> = 225</span> with <span class="m"><i>s</i> ≥ 0</span>, so <span class="m"><i>s</i> = √225 = 15</span>. Each side is <b>15 m</b>, and the edging is <span class="m">4 × 15 = </span><b>60 m</b>.` }
  ],
  origin: `The Babylonian clay tablet YBC 7289 (about 1800–1600 BCE) gives √2 in base 60 as 1;24,51,10, about 1.414213, correct to roughly six decimal places. Greek mathematicians of the Pythagorean school proved that √2 is not a ratio of whole numbers. The √ sign appeared in print in Christoff Rudolff's <i>Die Coss</i> (1525).`
};
