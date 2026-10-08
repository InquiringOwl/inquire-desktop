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
<p>A highway's mile markers work the same way. A gas station at mile 11 and a rest stop at mile 18 sit in order along the road. Since 18 is to the right of 11, we write <span class="m">18 &gt; 11</span> ("18 is greater than 11") or <span class="m">11 &lt; 18</span> ("11 is less than 18"). The open side of the sign faces the greater number.</p>
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
      { math: `<span class="c2">18</span> and <span class="c3">11</span>`, note: "Both have two digits, so compare the tens digits: 1 and 1 are equal." },
      { math: `8 &gt; 1`, note: "Move to the ones digits. They differ here." },
      { math: `<span class="c2">18</span> <span class="c1">&gt;</span> <span class="c3">11</span>`, note: "So the rest stop is farther right on the line, and farther from mile 0." },
      { math: `<span class="c4">|18 − 11|</span> = 7`, note: "Distance is the larger minus the smaller." }
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
    { role: "Air traffic controller", use: "Compares aircraft altitudes and distances to keep required separation between planes." }
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
    concept: {
      heading: "What is the number line?",
      lede: `The number line answers two questions: which of two numbers is larger, and how far apart are they? It turns order and distance into positions you can see.`,
      history: `<p><b>The problem.</b> Numbers were used for centuries before anyone drew them along a line. In 628 the Indian astronomer Brahmagupta already gave rules for "fortunes" and "debts", that is, positive and negative numbers. Yet there was no simple picture showing where each number belongs, which of two is larger, or why the rules for adding and subtracting work.</p>
<p><b>The solution.</b> In 1616 the English edition of John Napier's book on logarithms showed the values 1 to 12 lined up from left to right. In his <i>Treatise of Algebra</i> (1685), John Wallis used a line to calculate, describing addition and subtraction as moving forward and backward along it, like a person walking. The signs &lt; and &gt; had appeared in print in 1631, in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published after his death; some historians think the editors who compiled the book chose the signs.</p>
<p><b>What it changed.</b> Once numbers had positions, "less than" became "to the left of", and the difference between two numbers became a distance you can measure. The picture gave negative numbers a place, to the left of 0, and it is the same picture behind every ruler, thermometer scale, timeline and graph axis you read today.</p>`,
      sources: [
        { title: "Number line (Wikipedia)", url: "https://en.wikipedia.org/wiki/Number_line" },
        { title: "Earliest Uses of Symbols of Relation (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/relation/" },
        { title: "John Wallis (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Wallis/" },
        { title: "Brahmagupta (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/" }
      ],
      examples: [
        { role: "Nurse", scene: `A clinic's reference range for fasting blood sugar is 70 to 99 mg/dL. A result of 104 is above the range: <span class="m">104 &gt; 99</span>, by <span class="m">104 − 99 = 5</span> mg/dL.`, takeaway: "Comparing a result with both ends of a range decides whether it gets flagged." },
        { role: "Quality control inspector", scene: `A bolt must be between 48 mm and 52 mm long. One measures 53 mm: <span class="m">53 &gt; 52</span>, so it fails, by 1 mm.`, takeaway: "A part is accepted only if its measurement sits between the two limits on the line." },
        { role: "Surveyor", scene: `Along a road centerline, station 12+50 is 1,250 ft from the start and station 15+20 is 1,520 ft. The distance between them is <span class="m">1,520 − 1,250 = 270</span> ft.`, takeaway: "Stationing turns a road into a number line, so every distance is a subtraction." },
        { role: "Purchasing agent", scene: `Bids come in at $4,870, $4,780 and $4,807. In order: <span class="m">4,780 &lt; 4,807 &lt; 4,870</span>. The lowest bid beats the next by <span class="m">4,807 − 4,780 = 27</span> dollars.`, takeaway: "Similar-looking numbers must be compared digit by digit, from the left." },
        { role: "Air traffic controller", scene: `Two aircraft cruise at 33,000 ft and 35,000 ft on crossing routes. Their vertical separation is <span class="m">35,000 − 33,000 = 2,000</span> ft, more than the 1,000 ft required at those levels.`, takeaway: "Safety rules are stated as distances, so controllers subtract positions all day." }
      ]
    },
    build: {
      lede: `To compare two whole numbers, line up their digits and find the first place from the left where they differ; the larger digit there marks the larger number.`,
      intro: `<p>The model above shows two points, <span class="c2"><i>a</i></span> and <span class="c3"><i>b</i></span>, on a number line. The <span class="c1">comparison sign</span> opens toward the point farther right, and the <span class="c4">distance</span> is the gap between the two points.</p>`,
      stepWhy: [
        `Each extra digit is a higher place. The smallest 4-digit number, 1,000, is already larger than the largest 3-digit number, 999.`,
        `The leftmost digit is the largest place. A difference there outweighs everything to its right: 1 hundred is more than 99.`,
        `Equal digits in the same place add the same amount to both numbers, so they cannot decide the comparison. Only the first difference matters.`,
        `Once two digits differ, the places to their right cannot catch up. One more ten is worth more than any 9 ones.`,
        `The sign is a picture of the comparison, wide next to the larger number. <span class="m">18 &gt; 11</span> and <span class="m">11 &lt; 18</span> say the same thing.`
      ],
      bridge: `<p>The highway problem used both halves of this lesson: compare to see which point is farther along, then subtract to find the gap. The same pair of moves shows up whenever you choose between amounts or measure what is left.</p>`,
      tasks: [
        { task: "Choosing the lower price between two stores", link: `$1,209 and $1,290 agree in the thousands and hundreds. The tens decide: 0 &lt; 9, as in practice item 3.` },
        { task: "Reading a thermometer or a ruler", link: `Count spaces, not marks: from 3 to 7 inches is <span class="m">7 − 3 = 4</span> inches, as in the third common mistake.` },
        { task: "Checking whether you are under a speed or weight limit", link: `At 62 mph in a 65 mph zone, <span class="m">62 &lt; 65</span>, with <span class="m">65 − 62 = 3</span> mph to spare (steps 3 and 4).` },
        { task: "Finding how many miles are left between two mile markers", link: `Subtract the smaller marker from the larger, exactly as in the worked example: <span class="m">18 − 11 = 7</span>.` },
        { task: "Putting items in order by size, date or price", link: `Compare two at a time from the leftmost digit, as in practice item 3, until every item has its place.` }
      ]
    },
    formal: {
      setup: { title: "Writing a comparison", items: [
        { say: `<b>Name the positions.</b> Give each point a letter and say what it measures, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 18</span> (rest stop), &nbsp;<span class="m"><span class="c3"><i>b</i></span> = 11</span> (gas station), in miles from mile 0` },
        { say: `<b>State the order.</b> <i>b</i> &lt; <i>a</i> means <i>a</i> is <i>b</i> plus some natural number at least 1.`, math: `<span class="m">18 = 11 + 7, &nbsp;7 ≥ 1 &nbsp;⇒&nbsp; <span class="c3">11</span> <span class="c1">&lt;</span> <span class="c2">18</span></span>` },
        { say: `<b>Justify the digit method.</b> Expand by place value. The tens are equal, so the ones decide.`, math: `<span class="m">18 = 1·10 + 8, &nbsp;11 = 1·10 + 1, &nbsp;8 &gt; 1</span>` },
        { say: `<b>Write the distance.</b> The absolute value makes the answer the same in either direction.`, math: `<span class="m"><span class="c4"><i>d</i></span> = |<i>a</i> − <i>b</i>| = |<i>b</i> − <i>a</i>|</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence with units.`, math: `<span class="m"><span class="c4"><i>d</i></span> = |18 − 11| = <span class="c4">7</span></span> &nbsp;→ The rest stop is farther, 7 miles past the gas station.` }
      ] }
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
    { ctx: "Housing", q: `One apartment has 406 square feet and another has 460. Write &lt;, &gt; or = between 406 and 460.`, a: `<b><span class="m">406 &lt; 460</span></b>. Hundreds match; tens digits: 0 &lt; 6.` },
    { ctx: "Travel", q: `You are at mile marker 38 and your exit is at mile marker 91. How many miles do you have left?`, a: `<span class="m">91 − 38 = </span><b>53</b> miles.` },
    { ctx: "Repairs", q: `Four shops quote $1,209, $1,092, $1,290 and $1,029 for the same repair. Order the quotes from lowest to highest.`, a: `<b>$1,029 &lt; $1,092 &lt; $1,209 &lt; $1,290</b>. All start with 1 thousand, so compare hundreds (0, 0, 2, 2), then tens.` },
    { ctx: "Meeting up", q: `Two friends live at mile 36 and mile 84 of the same highway. At what mile marker should they meet so each drives the same distance?`, a: `<span class="m">(36 + 84) ÷ 2 = 120 ÷ 2 = </span><b>60</b>. Check: 60 − 36 = 24 and 84 − 60 = 24.` },
    { ctx: "Weather", q: `Write an equation with a letter for the unknown, then solve: a thermometer reads 47 °F in the morning and 72 °F in the afternoon. By how many degrees <i>d</i> did it rise?`, a: `<span class="m">47 + <i>d</i> = 72</span>, so <span class="m"><i>d</i> = 72 − 47 = </span><b>25 °F</b>.` }
  ],
  origin: `John Wallis is generally credited with describing the number line in his <i>Treatise of Algebra</i> (1685). The symbols &lt; and &gt; first appeared in Thomas Harriot's <i>Artis Analyticae Praxis</i>, published in 1631 after his death.`
};
