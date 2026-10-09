window.ARITH = window.ARITH || {};

ARITH["number-line"] = {
  title: "Comparing & the Number Line",
  short: "Bigger numbers sit farther to the right.",
  grade: "Grades K–2",
  hours: 3,
  voice: "plain",
  eyebrow: "Number sense · order and distance",
  hero: `<span class="m"><span class="c2"><i>a</i></span> <span class="c1">&lt;</span> <span class="c3"><i>b</i></span> &nbsp;·&nbsp; <span class="c4">|<i>a</i> − <i>b</i>|</span></span>`,
  lede: `A number line puts numbers in order with equal spacing. The number farther right is greater, and the gap between two points is their distance.`,
  plain: `<p>A <b>number line</b> is a straight line with numbers placed at equal steps: 0, then 1, 2, 3 and so on to the right. Every number has its own spot, and the number farther right is <b>greater</b>.</p>
<p>A highway's mile markers work the same way. A gas station at mile 11 and a rest stop at mile 18 sit in order along the road. Since 18 is to the right of 11, you write <span class="m">18 &gt; 11</span> ("18 is greater than 11") or <span class="m">11 &lt; 18</span> ("11 is less than 18"). The open side of the sign faces the greater number.</p>
<p>The <b>distance</b> between two numbers is the gap between their spots. From mile 11 to mile 18 is <span class="m">18 − 11 = 7</span> miles. Distance is the larger number minus the smaller, so it is never negative.</p>`,
  formal: `<p>The whole numbers are <b>totally ordered</b>: for any <span class="m"><i>a</i></span> and <span class="m"><i>b</i></span>, exactly one of <span class="m"><i>a</i> &lt; <i>b</i></span>, <span class="m"><i>a</i> = <i>b</i></span>, <span class="m"><i>a</i> &gt; <i>b</i></span> holds (the <b>trichotomy law</b>). The order is <b>transitive</b>: if <span class="m"><i>a</i> &lt; <i>b</i></span> and <span class="m"><i>b</i> &lt; <i>c</i></span>, then <span class="m"><i>a</i> &lt; <i>c</i></span>.</p>
<div class="display"><span class="c2"><i>a</i></span> &lt; <span class="c3"><i>b</i></span> &nbsp;⇔&nbsp; <i>b</i> = <i>a</i> + <i>k</i> for some natural number <i>k</i> ≥ 1<br>distance(<i>a</i>, <i>b</i>) = <span class="c4">|<i>a</i> − <i>b</i>|</span> = (larger) − (smaller)</div>
<p>On the number line, <span class="m"><i>a</i> &lt; <i>b</i></span> means the point for <i>a</i> lies to the left of the point for <i>b</i>. The symbols <span class="m">≤</span> and <span class="m">≥</span> mean "less than or equal to" and "greater than or equal to." The <b>midpoint</b> of <i>a</i> and <i>b</i> is <span class="m">(<i>a</i> + <i>b</i>) ÷ 2</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "First point", desc: "One of the two numbers being compared, marked on the line." },
    { c: "c3", sym: `<i>b</i>`, name: "Second point", desc: "The other number being compared." },
    { c: "c1", sym: `&lt; = &gt;`, name: "Comparison symbol", desc: "Shows which number is less, or that they are equal. The open side faces the larger number." },
    { c: "c4", sym: `|<i>a</i> − <i>b</i>|`, name: "Distance", desc: "How far apart the two points are. It is the larger number minus the smaller, so it is never negative." }
  ],
  steps: { title: "How to compare two whole numbers", items: [
    `Count the digits. A whole number with more digits is greater (with no leading zeros): <span class="m">1,002 &gt; 998</span>.`,
    `If they have the same number of digits, compare the leftmost digits.`,
    `If those match, move one place right and compare again. Keep going until two digits differ.`,
    `The number with the larger digit at the first difference is greater.`,
    `Write the symbol with its open side toward the greater number, or <span class="m">=</span> if every digit matched.`
  ] },
  example: {
    prompt: `On a straight highway, a gas station is at mile marker 11 and a rest stop is at mile marker 18. You are at mile 0. Which is farther from you, and how far apart are they?`,
    lines: [
      { math: `<span class="c2">11</span> and <span class="c3">18</span>`, note: "Both have two digits, so compare the tens digits: 1 and 1 are equal." },
      { math: `1 &lt; 8`, note: "Move to the ones digits. They differ here." },
      { math: `<span class="c2">11</span> <span class="c1">&lt;</span> <span class="c3">18</span>`, note: "So the rest stop is farther right on the line, and farther from mile 0." },
      { math: `<span class="c4">18 − 11</span> = 7`, note: "Distance is the larger minus the smaller." }
    ],
    answer: `The rest stop is farther, and the two are <span class="m c4">7</span> miles apart.`
  },
  why: `<p>Comparing is how most everyday choices with numbers get made: the cheaper of two quotes, whether a temperature is in the safe range, whether a load is under the limit. A slip in comparison, such as reading 406 as larger than 460, leads straight to the wrong choice.</p>
<p>The number line gives you a picture to check against. Left is less, right is more, and the gap is the difference. Rulers, thermometers, fuel gauges and timelines are all number lines.</p>
<p>Much of later math happens on this line. Negative numbers sit to the left of 0, fractions and decimals fill the spaces between whole numbers, and in algebra, inequalities such as <span class="m"><i>x</i> &gt; 3</span> are drawn as rays on it. In calculus, the real line is where functions live.</p>`,
  careers: [
    { role: "Nurse", use: "Compares vital signs and lab values to reference ranges to decide whether a result is low, normal or high." },
    { role: "Quality control inspector", use: "Checks that part measurements fall between the minimum and maximum allowed by the specification." },
    { role: "Surveyor", use: "Uses stationing along a road centerline, where distances between points are found by subtracting station numbers." },
    { role: "Purchasing agent", use: "Compares supplier bids to choose the lowest acceptable price." },
    { role: "Air traffic controller", use: "Compares aircraft altitudes and distances to keep required separation between planes." },
    { role: "Delivery driver", use: "Reads mile markers and house numbers along a route to find how far apart two stops are." }
  ],
  life: [
    "Choosing the lower price between two stores",
    "Reading a thermometer or a ruler",
    "Checking whether you are under a speed limit or weight limit",
    "Finding how many miles are left between two mile markers",
    "Putting items in order by size, date or price"
  ],
  fields: [
    { name: "Statistics", use: "Sorting data from smallest to largest is the first step in finding the median and range." },
    { name: "Physics", use: "Position along a line is measured as a coordinate, and displacement is the difference of two coordinates." },
    { name: "Computer science", use: "Sorting and searching algorithms rely on comparing values with less-than and greater-than." }
  ],
  layers: {
    nudge: "Not yet. Count the spaces between the numbers, not the marks.",
    concept: {
      heading: "What is the number line?",
      lede: `The number line answers two questions: which of two numbers is larger, and how far apart are they? It turns order and distance into spots you can see.`,
      question: { text: "Which is larger?", sub: `Two numbers, two spots on a line. Move the points in the model above and watch the sign and the gap change.`,
        figure: { sym: `|<i>a</i> − <i>b</i>|`, value: "5", cap: "the gap between a and b", echo: "dist" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["mile", "miles", "stop", "stops", "marker", "markers", "point", "points", "spot", "spots", "space", "spaces", "mark", "marks", "inch", "inches", "feet", "ft", "mm", "dollars", "square feet"],
      walk: { title: "Compare it together: two stops on a highway",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `You are at mile 0 of a straight highway. A gas station is at mile 11. A rest stop is at mile 18. Which stop is farther from you, and how far apart are the two stops?`,
        demo: { kind: "line", from: 0, to: 20, points: [{ v: 11, c: "c2", label: "gas" }, { v: 18, c: "c3", label: "rest" }], show: "dist", unit: "mile",
          alt: "A number line from 0 to 20. The gas station appears at 11, then the rest stop at 18, then a bracket between them shows they are 7 miles apart." },
        lines: [
          { math: `0, 1, 2, …, 20`, note: `Think of the highway as a number line. You stand at 0. The miles grow as you go right.`, frame: 0 },
          { math: `<span class="c2">11</span> … <span class="c3">18</span>`, note: `Mark both stops. 18 sits to the right of 11, so the rest stop is farther from you.`, frame: 2 },
          { math: `<span class="c2">11</span> <span class="c1">&lt;</span> <span class="c3">18</span>`, note: `Farther right means larger. The sign opens toward 18, the larger number.`, frame: 2 },
          { math: `<span class="c4">18 − 11</span> = 7`, note: `The gap between the stops is the larger number minus the smaller one: 7 miles.`, frame: 3 },
          { math: `11, 12, …, 18 → 8 markers`, note: `Counting the mile markers gives 8. That counts both ends. The trip is the 7 spaces between them.`, frame: 3 },
          { math: `|11 − 18| = 7`, note: `Drive back from the rest stop to the gas station and it is still 7 miles. A distance is never negative.`, frame: 3 }
        ],
        predict: [null,
          { ask: `The miles grow as you drive. Which stop is farther from you at mile 0?`, choices: [
            { t: "The rest stop at mile 18", ok: true },
            { t: "The gas station at mile 11", why: "11 sits to the left of 18 on the line, so it is closer to 0." },
            { t: "They are the same distance", why: "They sit at different spots, so they cannot be the same distance from 0." }
          ], hint: `Picture both numbers on the line. Which one is farther right?` },
          { ask: `Which sign goes between 11 and 18?`, choices: [
            { t: "11 < 18", ok: true },
            { t: "11 > 18", why: "The open side faces the larger number. 18 is larger, so the sign must open toward 18." },
            { t: "11 = 18", why: "The two stops sit at different spots, so the numbers are not equal." }
          ], hint: `The wide, open side of the sign faces the larger number.` },
          { ask: `How many miles apart are the two stops?`, parts: [{ label: "miles apart", ans: 7 }], hint: `Count up from 11 to 18, one mile at a time.` },
          { ask: `A friend counts the markers 11, 12, … 18 and says the stops are 8 miles apart. Why is that one too many?`, choices: [
            { t: "It counts the markers, not the spaces between them", ok: true },
            { t: "Marker 11 should not be there", why: "Marker 11 is real. It is where the gas station stands." },
            { t: "Counting can't be used for distance", why: "Counting works when you count the spaces, the 1-mile hops." }
          ], hint: `From marker 11 to marker 12 is two markers but only one mile.` },
          { ask: `On the way home you drive from the rest stop at 18 back to the gas station at 11. How many miles is that?`, parts: [{ label: "miles", ans: 7 }], hint: `The road between the two stops did not change.` }],
        answer: `The rest stop is farther from you, and the two stops are <span class="m c4">7</span> miles apart.` },
      ideas: [
        { c: "c2", title: "Farther right is larger", term: "greater than", text: `Numbers sit in order at equal steps. Of any two numbers, the one farther right is the greater one.`,
          demo: { kind: "line", from: 0, to: 20, points: [{ v: 4, c: "c2", label: "a" }, { v: 15, c: "c3", label: "b" }], alt: "A number line from 0 to 20. Point a appears at 4, then point b at 15, farther right." },
          try: { label: "Put a at 4 and b at 15", lab: "a:4,b:15" } },
        { c: "c1", title: "The sign opens to the larger", term: "comparison symbol", text: `The signs &lt; and &gt; are open on one side. The open side always faces the larger number.`,
          demo: { kind: "line", from: 0, to: 20, points: [{ v: 13, c: "c2", label: "a" }, { v: 6, c: "c3", label: "b" }], alt: "A number line from 0 to 20. Point a appears at 13, then point b at 6, to its left, so a is greater than b." },
          try: { label: "Compare 13 and 6", lab: "a:13,b:6" } },
        { c: "c4", title: "The gap is the distance", term: "distance", text: `The distance is the larger number minus the smaller one. Swap the two points and the gap stays the same.`,
          demo: { kind: "line", from: 0, to: 20, points: [{ v: 6, c: "c2", label: "a" }, { v: 13, c: "c3", label: "b" }], show: "dist", alt: "A number line from 0 to 20. Points at 6 and 13 appear, then a bracket shows they are 7 apart." },
          try: { label: "Set 6 and 13, then swap", lab: "a:6,b:13,swap" } }
      ],
      timelineTitle: "How numbers got a place on a line",
      timelineLead: `People used numbers for a long time before they drew them on a line. The line in the model above took about a thousand years to arrive.`,
      timeline: [
        { when: "628", what: `In India, the astronomer Brahmagupta writes rules for "fortunes" and "debts", that is, positive and negative numbers. There is no picture yet.` },
        { when: "1616", what: `An English book on John Napier's logarithms shows the numbers 1 to 12 lined up from left to right, like the marks in the model.` },
        { when: "1631", what: `The signs &lt; and &gt; appear in print in a book of Thomas Harriot's algebra, put together by others after his death.` },
        { when: "1685", what: `John Wallis describes adding and subtracting as walking forward and backward along a line, the way you slide a point in the model.` }
      ],
      history: `<p><b>The problem.</b> Numbers were used for centuries before anyone drew them along a line. In 628 the Indian astronomer Brahmagupta already gave rules for "fortunes" and "debts", that is, positive and negative numbers. Yet there was no simple picture showing where each number belongs, which of two is larger, or why the rules for adding and subtracting work.</p>
<p><b>The solution.</b> In 1616 an English book on John Napier's logarithms showed the values 1 to 12 lined up from left to right. In his <i>Treatise of Algebra</i> (1685), John Wallis used a line to calculate, describing addition and subtraction as moving forward and backward along it, like a person walking. The signs &lt; and &gt; had appeared in print in 1631, in Thomas Harriot's <i>Artis Analyticae Praxis</i>. The book was put together after his death by Walter Warner and perhaps others, and the signs are not found in Harriot's surviving papers, so the editors may have chosen them.</p>
<p><b>What it changed.</b> Once numbers had spots, "less than" became "to the left of", and the difference between two numbers became a distance you can measure. The picture gave negative numbers a place, to the left of 0, and it is the same picture behind every ruler, thermometer scale, timeline and graph axis you read today.</p>`,
      sources: [
        { title: "Number line (Wikipedia)", url: "https://en.wikipedia.org/wiki/Number_line" },
        { title: "Earliest Uses of Symbols of Relation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/relation/" },
        { title: "John Wallis (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Wallis/" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" }
      ],
      matters: { title: "Why comparing comes first", text: `<p>Most choices with numbers come down to one question: <b>which is less, and by how much?</b></p><ul class="why-chips"><li><b>Prices</b>: which one costs less</li><li><b>Limits</b>: am I under</li><li><b>Ranges</b>: is it inside</li></ul><p>The number line turns each one into a picture. <b>Left is less</b>, right is more, and the <b>gap</b> tells you how far apart.</p>` },
      stakes: { title: "Where comparing goes wrong", lead: `Most slips come from reading digits in the wrong order, or counting marks instead of spaces.`, items: [
        { role: "Apartment hunting", text: `406 square feet looks bigger than 460, because 6 beats 0. Compare from the left: <span class="m">406 &lt; 460</span>.` },
        { role: "Reading a sign", text: `<span class="m">3 &lt; 7</span> read as "3 is greater than 7." The open side faces the larger number.` },
        { role: "Measuring with a ruler", text: `From the 3 mark to the 7 mark you pass 5 marks, but the length is 4 inches. Count the spaces.` },
        { role: "Driving back", text: `From mile 18 back to mile 11 is 7 miles, not −7. A distance is never negative.` }
      ], try: { label: "Show 3 and 7", lab: "a:3,b:7" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "104 mg/dL", scene: `A clinic's reference range for fasting blood sugar is 70 to 99 mg/dL. A result of 104 is above the range: <span class="m">104 &gt; 99</span>, by <span class="m">104 − 99 = 5</span> mg/dL.`, takeaway: "Comparing a result with both ends of a range decides whether it gets flagged." },
        { role: "Quality control inspector", figure: "53 mm", scene: `A bolt must be between 48 mm and 52 mm long. One measures 53 mm: <span class="m">53 &gt; 52</span>, so it fails, by 1 mm.`, takeaway: "A part is accepted only if its measurement sits between the two limits on the line." },
        { role: "Surveyor", figure: "270 ft", scene: `Along a road centerline, station 12+50 is 1,250 ft from the start and station 15+20 is 1,520 ft. The distance between them is <span class="m">1,520 − 1,250 = 270</span> ft.`, takeaway: "Stationing turns a road into a number line, so every distance is a subtraction." },
        { role: "Purchasing agent", figure: "$4,780", scene: `Bids come in at $4,870, $4,780 and $4,807. In order: <span class="m">4,780 &lt; 4,807 &lt; 4,870</span>. The lowest bid beats the next by <span class="m">4,807 − 4,780 = 27</span> dollars.`, takeaway: "Look-alike numbers must be compared digit by digit, from the left." },
        { role: "Air traffic controller", figure: "2,000 ft", scene: `Two aircraft cruise at 33,000 ft and 35,000 ft on crossing routes. Their vertical separation is <span class="m">35,000 − 33,000 = 2,000</span> ft, more than the 1,000 ft required at those levels.`, takeaway: "Safety rules are stated as distances, so controllers subtract positions all day." },
        { role: "Delivery driver", figure: "15 miles", try: { label: "Show miles 4 and 19", lab: "a:4,b:19" }, scene: `Two drops sit at mile 4 and mile 19 of the same county road: <span class="m">19 − 4 = 15</span> miles apart. Driving back from 19 to 4 is also 15 miles.`, takeaway: "Knowing the gap between stops lets a driver plan fuel and time." }
      ]
    },
    build: {
      lede: `To compare two whole numbers, line up their digits and find the first place from the left where they differ; the larger digit there marks the larger number.`,
      task: { text: "Compare the numbers, then find the gap.", sub: `The same five moves work for 11 and 18 on a highway or $1,209 and $1,290 on a price tag. Try each one in the model above as you go.`,
        figure: { sym: `|<i>a</i> − <i>b</i>|`, value: "5", cap: "in the model", echo: "dist" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above shows two points, <span class="c2"><i>a</i></span> and <span class="c3"><i>b</i></span>, on a number line. The <span class="c1">comparison sign</span> opens toward the point farther right, and the <span class="c4">distance</span> is the gap between the two points.</p>`,
      keyTry: [{ label: "Move a to 5", lab: "a:5" }, { label: "Move b to 16", lab: "b:16" }, { label: "Turn the sign around", lab: "a:12,b:5" }, { label: "Swap a and b", lab: "swap" }],
      objects: ["mile", "miles", "dollar", "dollars", "inch", "inches", "mph", "pound", "pounds", "point", "points", "digit", "digits", "space", "spaces", "mark", "marks", "parcel", "parcels"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Each extra digit is a higher place. The smallest 4-digit number, 1,000, is already larger than the largest 3-digit number, 999.`,
        `The leftmost digit is the largest place. A difference there outweighs everything to its right: 1 hundred is more than 99.`,
        `Equal digits in the same place add the same amount to both numbers, so they cannot decide the comparison. Only the first difference matters.`,
        `Once two digits differ, the places to their right cannot catch up. One more ten is worth more than any 9 ones.`,
        `The sign is a picture of the comparison, wide next to the larger number. <span class="m">18 &gt; 11</span> and <span class="m">11 &lt; 18</span> say the same thing.`
      ],
      stepTry: [{ label: "Compare 9 and 12", lab: "a:9,b:12" }, null, { label: "Compare 16 and 12", lab: "a:16,b:12" }, null, null],
      stepGoal: [null,
        { key: "pair", eq: 1920, text: `Set <span class="c2"><i>a</i></span> to 19 and <span class="c3"><i>b</i></span> to 20. Compare the tens digits first.`, after: `Tens: 1 &lt; 2, so <span class="m">19 &lt; 20</span>, even though the 9 in 19 beats the 0 in 20.`, notYet: `Not yet. Put <span class="c2"><i>a</i></span> at 19 and <span class="c3"><i>b</i></span> at 20.` },
        null,
        { key: "pair", eq: 1417, text: `Set <span class="c2"><i>a</i></span> to 14 and <span class="c3"><i>b</i></span> to 17. The tens match, so the ones decide.`, after: `Ones: 4 &lt; 7, so <span class="m">14 &lt; 17</span>. The gap is <span class="m c4">17 − 14 = 3</span>.` , notYet: `Not yet. Put <span class="c2"><i>a</i></span> at 14 and <span class="c3"><i>b</i></span> at 17.` },
        { key: "dist", eq: 0, text: `Put both points on the same number. Watch the sign turn into =.`, after: `Every digit matches, so the numbers are equal and the distance is <span class="m c4">0</span>.`, notYet: `Not yet. The two points must sit on the same spot.` }],
      matters: { title: "Why a Method Beats Eyeballing", text: `<p>Look-alike numbers trip people up. A glance at two prices or two part numbers can pick the wrong one.</p><ul class="why-chips"><li><b>Look-alike</b> digits</li><li><b>Long</b> numbers</li><li><b>Swapped</b> digits</li></ul><p>A method checks <b>one place at a time, from the left</b>. It finds the first place that differs, and that place settles it.</p>` },
      bridge: `<p>The highway walk used both halves of this lesson: compare to see which point is farther along, then subtract to find the gap. The same pair of moves shows up whenever you choose between amounts or measure what is left.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Choosing the lower price between two stores", check: { q: `Store A sells a sofa for $1,209. Store B sells the same sofa for $1,290. How many dollars do you save at the cheaper store?`, parts: [{ label: "dollars saved", ans: 81 }], hint: `Find the first place from the left where the digits differ. Then subtract the smaller price from the larger.` }, figure: "$81 saved",
          demo: { kind: "line", from: 1200, to: 1300, points: [{ v: 1209, c: "c2", label: "A" }, { v: 1290, c: "c3", label: "B" }], show: "dist", unit: "dollar", alt: "A number line from 1,200 to 1,300. Store A's price appears at 1,209, then Store B's at 1,290, then a bracket shows they are 81 dollars apart." },
          lines: [{ math: `1,209 and 1,290`, note: "Both have 4 digits. Thousands match. Hundreds match." }, { math: `0 &lt; 9`, note: "The tens differ: 0 tens against 9 tens." }, { math: `1,209 &lt; 1,290`, note: "So Store A is cheaper." }, { math: `1,290 − 1,209 = 81`, note: "The gap is what you save: 81 dollars." }],
          predict: [null, { ask: `Thousands and hundreds match. What are the tens digits?`, parts: [{ label: "tens in 1,209", ans: 0 }, { label: "tens in 1,290", ans: 9 }], hint: `The tens digit is second from the right.` }],
          link: `Thousands and hundreds tie, so the tens decide (steps 2 to 4), as in practice item 3.` },
        { task: "Reading a thermometer or a ruler", check: { q: `A crack in a board runs from the 3-inch mark to the 7-inch mark of a ruler. How long is the crack?`, parts: [{ label: "inches", ans: 4 }], hint: `Count the spaces between marks, or subtract the smaller mark from the larger.` }, figure: "4 inches",
          demo: { kind: "line", from: 0, to: 10, points: [{ v: 3, c: "c2", label: "3" }, { v: 7, c: "c3", label: "7" }], show: "dist", unit: "inch", alt: "A ruler drawn as a number line from 0 to 10. Marks at 3 and 7 light up, then a bracket shows they are 4 inches apart." },
          lines: [{ math: `3, 4, 5, 6, 7`, note: "The crack touches 5 marks, from 3 to 7." }, { math: `3→4→5→6→7`, note: "Count the hops between marks: 4 spaces." }, { math: `7 − 3 = 4`, note: "The difference counts the spaces: 4 inches." }],
          predict: [null, { ask: `How many hops are there from mark 3 to mark 7?`, parts: [{ label: "hops", ans: 4 }], hint: `3 to 4 is one hop. Keep going to 7.` }],
          try: { label: "Show 3 and 7", lab: "a:3,b:7" },
          link: `Count spaces, not marks, the same fix as the mile markers in the highway walk.` },
        { task: "Checking whether you are under a speed or weight limit", check: { q: `You drive at 62 mph in a 65 mph zone. How many mph under the limit are you?`, parts: [{ label: "mph under", ans: 3 }], hint: `The tens match. Compare the ones, then subtract.` }, figure: "3 mph to spare",
          demo: { kind: "line", from: 55, to: 70, points: [{ v: 62, c: "c2", label: "you" }, { v: 65, c: "c3", label: "limit" }], show: "dist", cap: "mph to spare", alt: "A number line from 55 to 70. Your speed appears at 62, then the limit at 65, then a bracket shows 3 mph between them." },
          lines: [{ math: `62 and 65`, note: "Tens match: 6 and 6." }, { math: `2 &lt; 5`, note: "The ones differ, so they decide." }, { math: `62 &lt; 65`, note: "You are under the limit." }, { math: `65 − 62 = 3`, note: "You have 3 mph to spare." }],
          predict: [null, null, { ask: `The ones are 2 and 5. Which speed is larger?`, parts: [{ label: "larger speed", ans: 65 }], hint: `The larger ones digit marks the larger number.` }],
          link: `Tens tie, ones decide (steps 3 and 4), then subtract for the gap.` },
        { task: "Finding how many miles are left between two mile markers", check: { q: `You have passed mile marker 46. Your exit is at mile marker 83. How many miles are left?`, parts: [{ label: "miles left", ans: 37 }], hint: `Count up from 46: first to 50, then by tens to 80, then to 83.` }, figure: "37 miles",
          demo: { kind: "line", from: 40, to: 90, start: 46, jumps: [4, 30, 3], unit: "mile", cap: "your exit", alt: "A number line from 40 to 90. A dot starts at 46, hops 4 to 50, then 30 to 80, then 3 to land on the exit at 83." },
          lines: [{ math: `46 → 50`, note: "Hop 4 to reach a round number." }, { math: `50 → 80`, note: "Hop 30 by tens." }, { math: `80 → 83`, note: "Hop 3 more to the exit." }, { math: `4 + 30 + 3 = 37`, note: "Add the hops: 37 miles. Check: 83 − 46 = 37." }],
          predict: [null, { ask: `How long is the hop from 50 to 80?`, parts: [{ label: "miles", ans: 30 }], hint: `Count by tens: 60, 70, 80.` }],
          link: `The same subtraction as the highway walk, <span class="m">18 − 11 = 7</span>, done by counting up in hops.` },
        { task: "Putting items in order by size, date or price", check: { q: `Four parcels weigh 14, 9, 17 and 11 pounds. Which is the lightest, which is the heaviest, and how far apart are they?`, parts: [{ label: "lightest", ans: 9 }, { label: "heaviest", ans: 17 }, { label: "pounds apart", ans: 8 }], hint: `Put each weight on the line, then read from left to right.` }, figure: "9 to 17 lb",
          demo: { kind: "line", from: 0, to: 20, points: [{ v: 14, c: "c1", label: "14" }, { v: 9, c: "c2", label: "9" }, { v: 17, c: "c3", label: "17" }, { v: 11, c: "c1", label: "11" }], unit: "pound", alt: "A number line from 0 to 20. The weights 14, 9, 17 and 11 appear one at a time; read left to right they go 9, 11, 14, 17." },
          lines: [{ math: `14, 9, 17, 11`, note: "Place each weight on the line." }, { math: `9 &lt; 11 &lt; 14 &lt; 17`, note: "Read the points from left to right: lightest to heaviest." }, { math: `17 − 9 = 8`, note: "The heaviest is 8 pounds more than the lightest." }],
          predict: [null, { ask: `Which weight sits farthest left on the line?`, parts: [{ label: "lightest", ans: 9 }], hint: `Farther left means smaller.` }],
          try: { label: "Show 9 and 17", lab: "a:9,b:17" },
          link: `Compare two at a time until every item has its place, as in practice item 3.` }
      ]
    },
    formal: {
      question: { text: "What do “less than” and “distance” mean, exactly?", sub: `You can compare two numbers and find the gap. Here are the words a textbook uses for the same ideas, and how to write a comparison out in full.`,
        figure: { sym: `|<i>a</i> − <i>b</i>|`, value: "5", cap: "the distance", echo: "dist" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i>`, term: "Coordinate", def: `The number paired with a point on the number line. The point with coordinate <i>a</i> lies <i>a</i> unit lengths to the right of the origin, 0.`, was: "a point's spot on the line" },
        { c: "c1", sym: `<i>a</i> &lt; <i>b</i>`, term: "Less than", def: `<span class="m"><i>a</i> &lt; <i>b</i></span> when <span class="m"><i>b</i> = <i>a</i> + <i>k</i></span> for some natural number <span class="m"><i>k</i> ≥ 1</span>. Geometrically, <i>a</i> lies to the left of <i>b</i>. <span class="m"><i>b</i> &gt; <i>a</i></span> states the same relation.`, was: "farther left is smaller" },
        { c: "c1", sym: `≤ &nbsp;≥`, term: "Non-strict inequality", def: `<span class="m"><i>a</i> ≤ <i>b</i></span> means <span class="m"><i>a</i> &lt; <i>b</i></span> or <span class="m"><i>a</i> = <i>b</i></span>. The strict signs &lt; and &gt; exclude equality.`, was: "at most, at least" },
        { c: "c1", sym: `&lt;, =, &gt;`, term: "Trichotomy law", def: `For any two whole numbers <i>a</i> and <i>b</i>, exactly one of <span class="m"><i>a</i> &lt; <i>b</i></span>, <span class="m"><i>a</i> = <i>b</i></span>, <span class="m"><i>a</i> &gt; <i>b</i></span> is true.`, was: "the sign is always one of three" },
        { c: "c1", sym: `<i>a</i> &lt; <i>b</i> &lt; <i>c</i>`, term: "Transitive property", def: `If <span class="m"><i>a</i> &lt; <i>b</i></span> and <span class="m"><i>b</i> &lt; <i>c</i></span>, then <span class="m"><i>a</i> &lt; <i>c</i></span>. It lets a list be ordered by comparing neighbors.`, was: "putting items in order" },
        { c: "c4", sym: `|<i>x</i>|`, term: "Absolute value", def: `The distance from <i>x</i> to 0: <span class="m">|<i>x</i>| = <i>x</i></span> if <span class="m"><i>x</i> ≥ 0</span> and <span class="m">|<i>x</i>| = −<i>x</i></span> if <span class="m"><i>x</i> &lt; 0</span>. It is never negative.`, was: "a distance is never negative" },
        { c: "c4", sym: `|<i>a</i> − <i>b</i>|`, term: "Distance", def: `The distance between <i>a</i> and <i>b</i> is <span class="m">|<i>a</i> − <i>b</i>| = |<i>b</i> − <i>a</i>|</span>, the larger minus the smaller.`, was: "the gap between the points" },
        { c: "c4", sym: `(<i>a</i> + <i>b</i>) ÷ 2`, term: "Midpoint", def: `The number equally distant from <i>a</i> and <i>b</i>. It lies between them on the line.`, was: "the halfway meeting point" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>"Under 7" and "at most 7" sound alike. In symbols they differ, <span class="m"><i>x</i> &lt; 7</span> against <span class="m"><i>x</i> ≤ 7</span>, and <b>one sign decides whether 7 itself counts</b>.</p><ul class="why-chips"><li>Whole numbers with <span class="m"><i>x</i> &lt; 7</span>: <b>7</b> of them, 0 to 6</li><li>Whole numbers with <span class="m"><i>x</i> ≤ 7</span>: <b>8</b> of them, 0 to 7</li></ul><p>A speed limit, a dosage cap or an age rule depends on that one sign. Exact words let you write a rule <b>someone else can check</b>.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here compare digits in the wrong order, turn the sign around, or count marks instead of unit lengths.`,
      setupIntro: `<p>The highway from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a comparison", items: [
        { say: `<b>Name the positions.</b> Give each point a letter and say what it measures, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 11</span> (gas station), &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 18</span> (rest stop), in miles from mile 0` },
        { say: `<b>State the order.</b> <i>a</i> &lt; <i>b</i> means <i>b</i> is <i>a</i> plus some natural number at least 1.`, math: `<span class="m">18 = 11 + 7, &nbsp;7 ≥ 1 &nbsp;⇒&nbsp; <span class="c2">11</span> <span class="c1">&lt;</span> <span class="c3">18</span></span>` },
        { say: `<b>Justify the digit method.</b> Expand by place value. The tens are equal, so the ones decide.`, math: `<span class="m">11 = 1·10 + 1, &nbsp;18 = 1·10 + 8, &nbsp;1 &lt; 8</span>` },
        { say: `<b>Write the distance.</b> The absolute value makes the answer the same in either direction.`, math: `<span class="m"><span class="c4"><i>d</i></span> = |<i>a</i> − <i>b</i>| = |<i>b</i> − <i>a</i>|</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><span class="c4"><i>d</i></span> = |11 − 18| = |−7| = <span class="c4">7</span></span> &nbsp;→ The rest stop is farther from mile 0, 7 miles past the gas station.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: compare from the leftmost digit, write the sign, and find a distance as larger minus smaller. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can compare numbers and find distances the formal way.",
      checks: [
        { hint: `Hundreds match. Compare the tens, then subtract the smaller from the larger.`, parts: [{ label: "larger", ans: 460 }, { label: "square feet more", ans: 54 }] },
        { hint: `Distance is the larger marker minus the smaller.`, parts: [{ label: "miles", ans: 53 }] },
        { hint: `All four start with 1 thousand. Compare the hundreds, then the tens.`, parts: [{ label: "lowest", ans: 1029 }, { label: "highest", ans: 1290 }] },
        { hint: `The meeting point is the midpoint, <span class="m">(<i>a</i> + <i>b</i>) ÷ 2</span>.`, parts: [{ label: "mile marker", ans: 60 }] },
        { hint: `Morning plus the rise equals afternoon: <span class="m">47 + <i>d</i> = 72</span>.`, parts: [{ label: "d (°F)", ans: 25 }] }
      ]
    }
  },
  prereqWhy: {
    "counting": "The number line lays out the counting numbers in order, so you need to know that order and that each number is one more than the last."
  },
  unlocksWhy: {
    "rounding": "Rounding means finding which of two nearby landmarks on the number line a number is closer to.",
    "integers": "Negative numbers extend the number line to the left of 0, and comparison and distance work the same way there."
  },
  beyond: [
    { field: "Algebra I", why: "Inequalities are solved and graphed on the number line." },
    { field: "Analytic geometry", why: "The coordinate plane is two number lines crossing at right angles." },
    { field: "Real analysis", why: "The real number line and its order and distance are the foundation of limits and continuity." }
  ],
  mistakes: [
    { wrong: `Thinking <span class="m">406 &gt; 460</span> because 6 is bigger than 0.`, fix: `Compare from the left. Hundreds match (4 and 4). Tens: 0 &lt; 6. So <span class="m">406 &lt; 460</span>.` },
    { wrong: `Reading <span class="m">3 &lt; 7</span> as "3 is greater than 7."`, fix: `The small, pointed end faces the smaller number. Read left to right: "3 is less than 7."` },
    { wrong: `Counting the tick marks instead of the spaces, so the distance from 3 to 7 comes out as 5.`, fix: `Distance counts the jumps between marks: 3→4→5→6→7 is 4 jumps, and <span class="m">7 − 3 = 4</span>.` },
    { wrong: `Saying the distance from mile 18 back to mile 11 is <span class="m">11 − 18 = −7</span> miles.`, fix: `Distance has no direction. Subtract the smaller from the larger: <span class="m">|11 − 18| = 18 − 11 = 7</span> miles.` }
  ],
  practice: [
    { ctx: "Housing", q: `One apartment has 406 square feet and another has 460. Write &lt;, &gt; or = between 406 and 460. Which is larger, and by how many square feet?`, a: `<b><span class="m">406 &lt; 460</span></b>. Hundreds match; tens digits: 0 &lt; 6. The larger is <b>460</b>, by <span class="m">460 − 406 = </span><b>54</b> square feet.` },
    { ctx: "Travel", q: `You are at mile marker 38 and your exit is at mile marker 91. How many miles do you have left?`, a: `<span class="m">91 − 38 = </span><b>53</b> miles.` },
    { ctx: "Repairs", q: `Four shops quote $1,209, $1,092, $1,290 and $1,029 for the same repair. Order the quotes from lowest to highest.`, a: `<b>$1,029 &lt; $1,092 &lt; $1,209 &lt; $1,290</b>. All start with 1 thousand, so compare hundreds (0, 0, 2, 2), then tens.` },
    { ctx: "Meeting up", q: `Two friends live at mile 36 and mile 84 of the same highway. At what mile marker should they meet so each drives the same distance?`, a: `<span class="m">(36 + 84) ÷ 2 = 120 ÷ 2 = </span><b>60</b>. Check: 60 − 36 = 24 and 84 − 60 = 24.` },
    { ctx: "Weather", q: `Write an equation with a letter for the unknown, then solve: a thermometer reads 47 °F in the morning and 72 °F in the afternoon. By how many degrees <i>d</i> did it rise?`, a: `<span class="m">47 + <i>d</i> = 72</span>, so <span class="m"><i>d</i> = 72 − 47 = </span><b>25 °F</b>.` }
  ],
  origin: `John Wallis is generally credited with describing the number line in his <i>Treatise of Algebra</i> (1685). The symbols &lt; and &gt; first appeared in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631 after his death.`
};
