window.ARITH = window.ARITH || {};

ARITH["modular"] = {
  title: "Remainders & Clock Arithmetic",
  short: "Arithmetic that wraps around, like a clock",
  grade: "Grades 4–5 (remainders); college (congruences)",
  hours: 6,
  voice: "plain",
  eyebrow: "Number theory · modular arithmetic",
  hero: `<span class="m"><span class="c2"><i>a</i></span> ≡ <span class="c3"><i>b</i></span> (mod <span class="c4"><i>m</i></span>)</span>`,
  lede: `Two integers are congruent mod m when they leave the same remainder after division by m. On a clock with m positions, they land in the same spot.`,
  plain: `<p>Suppose it is 9 o'clock and a job will take 5 hours. Adding gives 14, but a 12-hour clock has no 14. The hand passes 12 and keeps going, so the job ends at 2 o'clock. Arithmetic that wraps around like this is called <b>modular arithmetic</b>, and the number where it wraps is the <b>modulus</b>.</p>
<p>The tool that does the wrapping is the <b>remainder</b>. Divide 14 by 12: it goes in once, with 2 left over. The leftover 2 is where the hand points. We write <span class="m">14 ≡ 2 (mod 12)</span> and read it "14 is <b>congruent</b> to 2 mod 12".</p>
<p>Other cycles use other moduli: 7 for the days of the week, 24 for the hours in a day, 2 for even and odd. You can add or multiply first and take the remainder at the end, or take remainders first to keep the numbers small. Both routes land on the same answer.</p>`,
  formal: `<p><b>Division algorithm.</b> For any integer <i>a</i> and positive integer <i>m</i> there are unique integers <i>q</i> and <i>r</i> with</p>
<div class="display"><span class="m"><span class="c2"><i>a</i></span> = <span class="c4"><i>m</i></span><i>q</i> + <span class="c1"><i>r</i></span>,  0 ≤ <span class="c1"><i>r</i></span> &lt; <span class="c4"><i>m</i></span></span></div>
<p>We write <span class="m"><i>r</i> = <i>a</i> mod <i>m</i></span>. Integers <i>a</i> and <i>b</i> are <b>congruent modulo <i>m</i></b>, written <span class="m"><i>a</i> ≡ <i>b</i> (mod <i>m</i>)</span>, if <span class="m"><i>m</i> | (<i>a</i> − <i>b</i>)</span>. This holds exactly when <i>a</i> and <i>b</i> have the same remainder mod <i>m</i>. Congruence is an equivalence relation, and it respects the operations: if <span class="m"><i>a</i> ≡ <i>a</i>′</span> and <span class="m"><i>b</i> ≡ <i>b</i>′ (mod <i>m</i>)</span>, then <span class="m"><i>a</i> + <i>b</i> ≡ <i>a</i>′ + <i>b</i>′</span> and <span class="m"><i>ab</i> ≡ <i>a</i>′<i>b</i>′ (mod <i>m</i>)</span>.</p>`,
  legend: [
    { c: "c2", sym: `<i>a</i>`, name: "Starting value", desc: "The integer you start from, such as the current hour." },
    { c: "c3", sym: `<i>b</i>`, name: "Step", desc: "The amount added or multiplied, such as hours to wait." },
    { c: "c1", sym: `<i>r</i>`, name: "Result (remainder)", desc: "Where you land on the clock. Always a whole number from 0 up to m − 1." },
    { c: "c4", sym: `<i>m</i>`, name: "Modulus", desc: "How many positions the clock has before it wraps back to 0." }
  ],
  steps: { title: "How to compute a mod m", items: [
    `Divide <i>a</i> by <i>m</i> and take the whole-number quotient <i>q</i>, rounding down (toward negative infinity for negative <i>a</i>).`,
    `Compute <span class="m"><i>r</i> = <i>a</i> − <i>mq</i></span>.`,
    `Check that <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>. If <i>r</i> is negative, add <i>m</i>; if it is too large, subtract <i>m</i>.`,
    `For a long sum or product, reduce each piece mod <i>m</i> first, combine, then reduce again.`
  ] },
  example: {
    prompt: `A freight truck leaves at 19:00 on a Friday. The trip takes 30 hours. On what day and at what time does it arrive?`,
    lines: [
      { math: `<span class="m"><span class="c2">19</span> + <span class="c3">30</span> = 49</span>`, note: "Count hours from midnight at the start of Friday." },
      { math: `<span class="m">49 − 24 = 25</span>`, note: "Taking off one day leaves 25, which is still more than a day. One lap is not all the laps." },
      { math: `<span class="m">49 = <span class="c4">24</span> × 2 + <span class="c1">1</span></span>`, note: "Division algorithm with modulus 24: quotient 2, remainder 1." },
      { math: `<span class="m">49 ≡ <span class="c1">1</span> (mod <span class="c4">24</span>)</span>`, note: "The remainder is the clock time: 01:00." },
      { math: `<span class="m">Friday + 2 days = Sunday</span>`, note: "The quotient 2 counts how many midnights were passed." }
    ],
    answer: `The truck arrives on Sunday at 01:00.`
  },
  why: `<p>Anything that repeats runs on modular arithmetic. A nurse giving a dose every 8 hours, a manager building a rotating shift schedule and a dispatcher working out the arrival day of a long haul are all counting around a cycle. Without the remainder, people add hours past midnight and land on times like 29:00, or miscount the weekday of a deadline.</p>
<p>Remainders also guard against typing errors. Check digits on ISBNs, bank account numbers and payment cards are chosen so that a weighted sum of the digits leaves a fixed remainder. A single mistyped digit breaks that pattern, and the system rejects the number before any money moves.</p>
<p>Later math builds directly on it. Number theory states its questions about primes and divisibility as congruences. Abstract algebra studies the integers mod <i>m</i> as a basic example of a ring. The public-key cryptography that secures websites, such as RSA and elliptic-curve systems, is arithmetic modulo very large numbers.</p>`,
  careers: [
    { role: "Cryptographer", use: "Designs and analyzes encryption such as RSA, which raises numbers to powers modulo a large product of two primes." },
    { role: "Software engineer", use: "Uses the % operator to place keys in hash tables and wrap indices in circular buffers." },
    { role: "Nurse", use: "Schedules a dose every 8 hours on a 24-hour clock, so a 22:00 dose is followed by 06:00 and 14:00." },
    { role: "Payment systems developer", use: "Validates card numbers with the Luhn check, which tests whether a weighted digit sum is divisible by 10." },
    { role: "Operations scheduler", use: "Plans rotating shift patterns that repeat on a fixed cycle of days." },
    { role: "Music theorist", use: "Treats pitch classes as integers mod 12, since notes an octave apart share a name." }
  ],
  life: [
    "Working out what time a long trip ends",
    "Finding what weekday a date falls on",
    "Telling whether a number is even or odd",
    "Planning a medicine schedule every 6 or 8 hours",
    "Splitting items into groups and finding how many are left over"
  ],
  fields: [
    { name: "Computer science", use: "Hashing, random number generators and checksums use modular reduction." },
    { name: "Cryptography", use: "Public-key systems depend on modular exponentiation and modular inverses." },
    { name: "Music theory", use: "Transposition and interval arithmetic on the 12 pitch classes is arithmetic mod 12." },
    { name: "Calendar science", use: "Algorithms for the day of the week of any date reduce counts of days mod 7." }
  ],
  layers: {
    nudge: "Not yet. Take off every full lap, not only one.",
    concept: {
      heading: "What is clock arithmetic?",
      lede: `Clock arithmetic answers questions about things that repeat. What time will it be? What day will it fall on? What is left after you make equal groups?`,
      question: { text: "Where does it land?", sub: `A clock counts up, then wraps back to the start. Watch the hand in the model above. The three ideas below are all you need to say where it stops.`,
        figure: { sym: `<i>r</i>`, value: "5", cap: "where the hand stops", echo: "result" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["hour", "hours", "day", "days", "lap", "laps", "spot", "spots", "truck", "dose", "doses", "bucket", "buckets", "shift", "shifts", "week", "weeks", "tens", "midnight", "midnights", "digit", "semitones"],
      walk: { title: "Wrap it together: a 30-hour trip",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A truck leaves at 19:00 on a Friday. The trip takes 30 hours. On what day, and at what time, does it arrive?`,
        demo: { kind: "line", from: 0, to: 50, tick: 24, start: 19, jumps: [5, 24, 1], points: [{ v: 24, c: "c4", label: "Sat 00:00", below: true }, { v: 48, c: "c4", label: "Sun 00:00", below: true }], cap: "hours after Friday began", alt: "A line of hours from the start of Friday. Midnights are marked at 24 and 48. A dot starts at 19, hops 5 hours to the first midnight, a full 24 hours to the second, then 1 more hour, landing at 49." },
        lines: [
          { math: `Friday <span class="c2">19:00</span> + <span class="c3">30</span> hours`, note: `Count hours from the start of Friday. The truck leaves at hour 19.`, frame: 2 },
          { math: `<span class="c2">19</span> + <span class="c3">30</span> = 49`, note: `Add the trip to the start. Hour 49 is past the end of the day, so the clock has wrapped.`, frame: 6 },
          { math: `49 − <span class="c4">24</span> = 25`, note: `A shortcut takes off one day and gives 25. No clock shows 25:00. One lap is not all the laps.`, frame: 3 },
          { math: `49 = <span class="c4">24</span> × 2 + <span class="c1">1</span>`, note: `Take off every full day. Two days fit, with 1 hour left over.`, frame: 4 },
          { math: `49 mod <span class="c4">24</span> = <span class="c1">1</span>`, note: `The hour left over is the clock time: 01:00. Its real name is the remainder.`, frame: 5 },
          { math: `Friday + 2 days = Sunday`, note: `Each full lap passed one midnight. Friday, then Saturday, then Sunday.`, frame: 6 }
        ],
        predict: [null,
          { ask: `Start at hour 19 and add the 30-hour trip. What hour do you reach?`, parts: [{ label: "19 + 30", ans: 49 }], hint: `Add 30 to 19.` },
          { ask: `A friend takes off one day: 49 − 24 = 25. Does the truck arrive at 25:00?`, choices: [
            { t: "No. 25 hours is still more than a day", ok: true },
            { t: "Yes. 25:00 means 1 in the morning", why: "There is no 25:00 on a clock. 25 hours still holds a whole day, so take off another 24." },
            { t: "No. Take off 12 hours instead", why: "A day has 24 hours, so this clock wraps at 24. Taking off 12 gives the wrong time." }
          ], hint: `Is 25 bigger than 24?` },
          { ask: `How many full days fit in 49 hours, and how many hours are left over?`, parts: [{ label: "full days", ans: 2 }, { label: "hours left", ans: 1 }], hint: `24 × 2 = 48. How far is 48 from 49?` },
          null,
          { ask: `The time is 01:00. What day is it?`, choices: [
            { t: "Sunday", ok: true },
            { t: "Saturday", why: "Two midnights pass on the trip: one at the start of Saturday and one at the start of Sunday." },
            { t: "Friday", why: "That keeps the 1 and drops the 2 full days. The truck would arrive before it left." }
          ], hint: `Each full day is one midnight passed. Count them from Friday.` }],
        answer: `The truck arrives on Sunday at <span class="m c1">01:00</span>.` },
      ideas: [
        { c: "c4", title: "The clock wraps at m", term: "modulus", text: `A clock with m spots counts 0, 1, 2 and on to m − 1. Then it starts again at 0. A day wraps at 24 hours.`,
          demo: { kind: "range", from: 0, to: 11, unit: "spot", cap: "spots, 0 to 11", alt: "The spots 0 to 11 of a 12-hour clock get counting numbers 1 to 12, so the clock has 12 spots." }, try: { label: "Make a 24-hour clock", lab: "m:24,a:9,b:8,op:0" } },
        { c: "c1", title: "The leftover is where you land", term: "remainder", text: `Make as many full groups as you can. What is left is the remainder. 47 in tens is 4 full tens and 7 left.`,
          demo: { kind: "tens", n: 47, cap: "4 tens, 7 left over", alt: "Four full groups of ten are counted 10, 20, 30, 40, then 7 more: 47 is 4 tens with 7 left over." }, try: { label: "Show 47 on a 10-spot clock", lab: "m:10,a:40,b:7,op:0" } },
        { c: "c3", title: "A full lap changes nothing", term: "congruent", text: `Go once around the clock and the hand is back where it was. On a 12-hour clock, 5 and 17 point to the same spot.`,
          demo: { kind: "line", from: 0, to: 24, tick: 12, start: 5, jumps: [12], cap: "same spot as 5", alt: "A dot starts at 5 and hops 12 places, one full lap of a 12-hour clock, to land on 17." }, try: { label: "Add one full lap to 5", lab: "m:12,a:5,b:12,op:0" } }
      ],
      timelineTitle: "Calendar makers needed remainders first",
      timelineLead: `Days, weeks, months and years are cycles that do not line up. The people who built calendars had to count around them, as the hand does in the model.`,
      timeline: [
        { when: "3rd to 5th century CE", what: `The Chinese book <i>Sunzi Suanjing</i> asks for a number that leaves 2 when counted by threes, 3 by fives and 2 by sevens. The answer is 23. Each count is a clock with 3, 5 or 7 spots.` },
        { when: "1247", what: `Qin Jiushao gives a general method in his <i>Mathematical Treatise in Nine Sections</i>. He learned the rule from calendar experts at the Board of Astronomy.` },
        { when: "1800", what: `Carl Friedrich Gauss gives a method for the date of Easter. It starts from the remainders of the year by 19, 4 and 7.` },
        { when: "1801", what: `Gauss's <i>Disquisitiones Arithmeticae</i> brings in the sign ≡ for "congruent". It is the same sign in the model's readout.` }
      ],
      history: `<p><b>The problem.</b> Calendar makers had to fit together cycles that do not line up, such as days, months and years. Questions like "which number leaves these remainders for these cycles?" came up again and again, and in China calculating calendars was an important reason to study them.</p>
<p><b>The solution.</b> The Chinese text <i>Sunzi Suanjing</i>, written between the 3rd and 5th centuries CE, asks for a number of things that leave 2 when counted by threes, 3 when counted by fives and 2 when counted by sevens. The smallest answer is 23. In 1247 Qin Jiushao gave a general method in his <i>Mathematical Treatise in Nine Sections</i>, and wrote that he had learned the rule from calendar experts while studying at the Board of Astronomy in Hangzhou. In 1800 Carl Friedrich Gauss published a method for the date of Easter built on the remainders of the year by 19, 4 and 7. A year later his <i>Disquisitiones Arithmeticae</i> introduced the sign ≡ and built remainders into a full theory of congruences, illustrated with a calendar problem of its own.</p>
<p><b>What it changed.</b> Congruences gave one language to every repeating count. The same rules now set times on a 24-hour schedule, compute the check digits on ISBNs and bank account numbers, and run the encryption behind secure websites.</p>`,
      sources: [
        { title: "Chinese remainder theorem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Chinese_remainder_theorem" },
        { title: "Qin Jiushao (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Qin_Jiushao/" },
        { title: "Earliest Uses of Symbols of Number Theory (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/nth/" },
        { title: "Date of Easter (Wikipedia)", url: "https://en.wikipedia.org/wiki/Date_of_Easter" }
      ],
      matters: { title: "Why remainders matter", text: `<p>Most of life runs in <b>cycles</b>. The hours, the days of the week and the months all come back around.</p><ul class="why-chips"><li><b>Clocks</b> wrap every day</li><li><b>Weekdays</b> repeat every week</li><li><b>Check digits</b> catch typos</li></ul><p>The remainder tells you <b>where you are in the cycle</b>. The number of full laps tells you <b>how many times you went around</b>. You need both to land on the right time and the right day.</p>` },
      stakes: { title: "Where clock arithmetic goes wrong", lead: `Most slips keep too much of the count, or throw away too much.`, items: [
        { role: "Night shift", text: `A dose at 22:00 plus 8 hours is written down as 30:00. The clock wraps at 24, so it is 06:00.` },
        { role: "Long haul", text: `A 49-hour count with one day taken off gives 25:00. Take off every full day: 49 is 2 days and 1 hour.` },
        { role: "Arrival day", text: `The time 01:00 is right, but the 2 full days are dropped. The truck "arrives" on Friday, before it left.` },
        { role: "Clock face", text: `A remainder of 12 on a 12-hour clock. Remainders run 0 to 11. The face prints 12 where the 0 is.` }
      ], try: { label: "Show the 49-hour trip", lab: "m:24,a:19,b:30,op:0" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Nurse", figure: "06:00", try: { label: "Show 22 + 8 on a 24-hour clock", lab: "m:24,a:22,b:8,op:0" }, scene: `An order calls for a dose every 8 hours, the first at 22:00. Next: <span class="m">22 + 8 = 30 ≡ 6 (mod 24)</span>, so 06:00, then 14:00, then back to 22:00.`, takeaway: "Wrapping at 24 keeps a round-the-clock schedule on real clock times." },
        { role: "Software engineer", figure: "bucket 34", scene: `A hash table with 100 buckets stores the record with ID 1,234 in bucket <span class="m">1234 mod 100 = 34</span>.`, takeaway: "Remainders spread data over a fixed number of slots, so lookups stay fast." },
        { role: "Payment systems developer", figure: "check digit 3", scene: `In the standard Luhn example, the account digits 7992739871 give a weighted digit sum of 67. The check digit makes the total a multiple of 10: <span class="m">67 + 3 = 70 ≡ 0 (mod 10)</span>, so the full number is 79927398713.`, takeaway: "A mistyped digit changes the remainder, and the error is caught at once." },
        { role: "Operations scheduler", figure: "shift B", try: { label: "Show 29 on a 4-spot clock", lab: "m:4,a:29,b:0,op:0" }, scene: `A plant rotates shifts A, B, C, D week by week, starting with A in week 1. Week 30 uses position <span class="m">(30 − 1) mod 4 = 1</span>, which is shift B.`, takeaway: "One remainder answers a question about any week without listing them all." },
        { role: "Music theorist", figure: "G + 7 = D", try: { label: "Show 7 + 7 on a 12-spot clock", lab: "m:12,a:7,b:7,op:0" }, scene: `With C as 0, the note G is pitch class 7. Up 7 semitones: <span class="m">7 + 7 = 14 ≡ 2 (mod 12)</span>, the note D.`, takeaway: "Notes an octave apart share a name, so pitch arithmetic wraps at 12." },
        { role: "Cryptographer", figure: "4 → 31 → 4", scene: `A classroom-size RSA key uses modulus 33 and exponent 3. The message 4 is sent as <span class="m">4<sup>3</sup> = 64 ≡ 31 (mod 33)</span>, and raising 31 to the 7th power mod 33 brings back 4.`, takeaway: "Real keys use moduli hundreds of digits long, with the same arithmetic." }
      ]
    },
    build: {
      lede: `To find where a count lands on a cycle, divide by the modulus: the remainder is the position and the quotient is the number of full laps.`,
      task: { text: "Find where it lands and how many laps it took.", sub: `The same four steps work for any cycle, from a 24-hour day to a 7-day week. Try each one in the model above as you go.`,
        figure: { sym: `<i>r</i>`, value: "5", cap: "in the model", echo: "result" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model above is a clock with <span class="c4"><i>m</i></span> spots, numbered 0 to m − 1. The hand starts at 0, steps forward <span class="c2"><i>a</i></span> places and then <span class="c3"><i>b</i></span> more (with ×, it makes <i>a</i> jumps of <i>b</i>). The laps counter is the quotient. The number lit up where the hand stops is the remainder <span class="c1"><i>r</i></span>.</p>`,
      keyTry: [
        { label: "Start at 9, add nothing", lab: "m:12,a:9,b:0,op:0" },
        { label: "Add 5 to 9", lab: "m:12,a:9,b:5,op:0" },
        null,
        { label: "Switch to a 24-hour clock", lab: "m:24,a:9,b:5,op:0" }
      ],
      objects: ["hour", "hours", "day", "days", "week", "weeks", "lap", "laps", "spot", "spots", "dose", "doses", "egg", "eggs", "carton", "cartons", "kid", "kids", "pair", "pairs", "midnight", "midnights"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `The quotient counts full laps around the clock. Rounding down keeps it from counting a lap the hand has not finished. For a negative number, rounding toward negative infinity keeps the remainder from dropping below zero.`,
        `Taking away <i>m</i> × <i>q</i> removes the complete laps. What is left is how far into the current lap you are, which is the spot on the clock.`,
        `Every spot on an <i>m</i>-spot clock is a whole number from 0 to m − 1. A result outside that range means the quotient was off by a lap. Adding or taking away <i>m</i> fixes it.`,
        `A full lap changes nothing, so you can take laps off early or late and land in the same spot. Smaller numbers mean fewer slips by hand and no overflow on a computer.`
      ],
      stepTry: [{ label: "Pack 17 into groups of 5", lab: "m:5,a:17,b:0,op:0" }, null, null, null],
      stepGoal: [null,
        { key: "result", eq: 11, text: `Set <i>m</i> to 24, <i>a</i> to 20 and <i>b</i> to 15. Before you look, work it out: <span class="m">35 − 24 × 1</span>.`, after: `<span class="m">35 = 24 × 1 + 11</span>. One full lap, and the hand stops at 11.`, notYet: `Not yet. Use + with <i>m</i> = 24, <i>a</i> = 20 and <i>b</i> = 15.` },
        { key: "m", eq: 2, text: `Set the clock to 2 spots. Then move <i>a</i> and <i>b</i> around and watch where the hand can stop.`, after: `With 2 spots the hand stops only on 0 or 1. Remainder 0 means even. Remainder 1 means odd.`, notYet: `Not yet. Slide <i>m</i> all the way down to 2.` },
        { key: "result", eq: 8, text: `Set <i>m</i> to 10, pick ×, and set <i>a</i> to 27 and <i>b</i> to 34. Reduce first: <span class="m">7 × 4 = 28</span>. Predict the spot, then check the hand.`, after: `<span class="m">27 × 34 = 918</span> and <span class="m">918 mod 10 = 8</span>. Reducing first gave 8 too, with much smaller numbers.`, notYet: `Not yet. Use × with <i>m</i> = 10, <i>a</i> = 27 and <i>b</i> = 34.` }],
      matters: { title: "Why a Method Beats Counting Around", text: `<p>You can count around a clock by hand for a few hours. It breaks down when the count is long, like a 58-hour drive or 100 days ahead.</p><ul class="why-chips"><li><b>Long</b> counts</li><li><b>Many</b> laps</li><li><b>Big</b> products</li></ul><p>The method is <b>the same four steps every time</b>. Divide, take off the laps, check the range, and reduce early when the numbers get big.</p>` },
      bridge: `<p>The truck trip had the pattern of every cycle question. Add up the count, take off every full lap, then read the remainder as the spot and the quotient as the laps. Here is where the same steps show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Working out what time a long trip ends", check: { q: `A night bus leaves at 21:00. The trip takes 15 hours. At what hour does it arrive, on a 24-hour clock?`, parts: [{ label: "arrives at hour", ans: 12 }], hint: `21 + 15, then take off one full day of 24 hours.` }, figure: "mod 24",
          demo: { kind: "line", from: 18, to: 40, tick: 6, start: 21, jumps: [3, 12], points: [{ v: 24, c: "c4", label: "midnight", below: true }], cap: "36 − 24 = 12: noon", alt: "A dot starts at hour 21, hops 3 hours to midnight, then 12 more hours, landing at 36, which is noon the next day." },
          lines: [{ math: `21 + 15 = 36`, note: "Add the trip to the start hour." }, { math: `36 = 24 × 1 + 12`, note: "One full day fits, with 12 hours left." }, { math: `36 mod 24 = 12`, note: "The bus arrives at 12:00, noon the next day." }],
          predict: [null, { ask: `One full day is 24 hours. What is left of 36 hours after it?`, parts: [{ label: "hours left", ans: 12 }], hint: `36 − 24.` }, null],
          try: { label: "Show 21 + 15 on a 24-hour clock", lab: "m:24,a:21,b:15,op:0" },
          link: `Add, then take off every full day, as <span class="m">19 + 30 = 49 = 24 × 2 + 1</span> gave 01:00 in the truck trip.` },
        { task: "Finding what weekday a date falls on", check: { q: `Today is a Friday. A bill is due in 100 days. How many full weeks is that, and how many days are left over?`, parts: [{ label: "full weeks", ans: 14 }, { label: "days left", ans: 2 }], hint: `7 × 14 = 98. How far is 98 from 100?` }, figure: "mod 7",
          demo: { kind: "bar", parts: [98, null], total: 100, labels: ["full weeks", "days left"], unit: "day", alt: "A bar of 100 days splits into 98 days of full weeks and a part left over, which turns out to be 2 days." },
          lines: [{ math: `100 = 7 × 14 + 2`, note: "14 full weeks fit in 100 days, with 2 days left." }, { math: `100 mod 7 = 2`, note: "Full weeks bring you back to Friday. Only the 2 days move you." }, { math: `Friday + 2 = Sunday`, note: "The bill is due on a Sunday." }],
          predict: [null, { ask: `After the 14 full weeks, how many days still move you along the week?`, parts: [{ label: "days", ans: 2 }], hint: `100 − 98.` }, null],
          try: { label: "Show 10 × 10 on a 7-day clock", lab: "m:7,a:10,b:10,op:1" },
          link: `Divide the days by 7 and keep the remainder (step 2). Whole weeks are full laps, so they change nothing.` },
        { task: "Telling whether a number is even or odd", check: { q: `37 people pair up for a buddy walk. How many full pairs are there, and how many people are left without a partner?`, parts: [{ label: "pairs", ans: 18 }, { label: "left over", ans: 1 }], hint: `2 × 18 = 36.` }, figure: "mod 2",
          demo: { kind: "bar", parts: [36, null], total: 37, labels: ["in pairs", "no partner"], unit: "person", alt: "A bar of 37 people splits into 36 people in pairs and a part left over, which turns out to be 1 person." },
          lines: [{ math: `37 = 2 × 18 + 1`, note: "18 full pairs, with 1 person left." }, { math: `37 mod 2 = 1`, note: "A remainder of 1 means 37 is odd." }],
          predict: [null, { ask: `So is 37 even or odd?`, choices: [{ t: "Odd", ok: true }, { t: "Even", why: "An even number leaves 0 when split into pairs. 37 leaves 1." }], hint: `Look at the remainder.` }],
          link: `This is a clock with only 2 spots. Every number lands on 0, even, or 1, odd (step 3).` },
        { task: "Planning a medicine schedule every 6 or 8 hours", check: { q: `A dose is due every 6 hours. The first is at 20:00. At what hours are the second and third doses?`, parts: [{ label: "second dose", ans: 2 }, { label: "third dose", ans: 8 }], hint: `20 + 6 = 26. Take off 24. Then add 6 again.` }, figure: "every 6 h",
          demo: { kind: "line", from: 18, to: 34, tick: 4, start: 20, jumps: [6, 6], points: [{ v: 24, c: "c4", label: "midnight", below: true }], cap: "32 − 24 = 8: 08:00", alt: "A dot starts at hour 20 and hops 6 hours twice, past midnight at 24, landing at 26 and then 32, which are 02:00 and 08:00." },
          lines: [{ math: `20 + 6 = 26`, note: "The second dose is past midnight." }, { math: `26 mod 24 = 2`, note: "So the second dose is at 02:00." }, { math: `2 + 6 = 8`, note: "The third dose is at 08:00." }],
          predict: [null, { ask: `26 hours is past midnight. What hour is that on the clock?`, parts: [{ label: "hour", ans: 2 }], hint: `26 − 24.` }, null],
          try: { label: "Show 20 + 6 on a 24-hour clock", lab: "m:24,a:20,b:6,op:0" },
          link: `Add the interval and wrap at 24 each time. Wrapping early keeps the numbers small (step 4).` },
        { task: "Splitting items into groups and finding how many are left over", check: { q: `You pack 40 eggs into cartons of 12. How many cartons do you fill, and how many eggs are left?`, parts: [{ label: "full cartons", ans: 3 }, { label: "eggs left", ans: 4 }], hint: `12 × 3 = 36.` }, figure: "mod 12",
          demo: { kind: "bar", parts: [36, null], total: 40, labels: ["full cartons", "left over"], unit: "egg", alt: "A bar of 40 eggs splits into 36 eggs in full cartons and a part left over, which turns out to be 4 eggs." },
          lines: [{ math: `40 = 12 × 3 + 4`, note: "3 full cartons, with 4 eggs left." }, { math: `40 mod 12 = 4`, note: "The remainder is the eggs left over." }],
          predict: [null, { ask: `3 cartons hold 36 eggs. How many of the 40 are left?`, parts: [{ label: "eggs left", ans: 4 }], hint: `40 − 36.` }],
          try: { label: "Show 40 on a 12-spot clock", lab: "m:12,a:40,b:0,op:0" },
          link: `The quotient is the full groups and the remainder is what is left, as 49 hours split into 2 full days and 1 hour.` }
      ]
    },
    formal: {
      question: { text: "What is a remainder, exactly?", sub: `You can find where a count lands on a cycle. Here are the words a textbook uses for the same ideas, and how to write a clock problem out in full.`,
        figure: { sym: `<i>a</i> mod <i>m</i>`, value: "5", cap: "the least residue", echo: "result" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c4", sym: `<i>m</i>`, term: "Modulus", def: `The positive integer at which counting wraps. Arithmetic modulo <i>m</i> works with the remainders <span class="m">0, 1, …, <i>m</i> − 1</span>.`, was: "the number of spots on the clock" },
        { c: "c2", sym: `<i>a</i> = <i>mq</i> + <i>r</i>`, term: "Division algorithm", def: `For every integer <i>a</i> and positive integer <i>m</i> there are unique integers <i>q</i> and <i>r</i> with <span class="m"><i>a</i> = <i>mq</i> + <i>r</i></span> and <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>.`, was: "full laps plus what is left over" },
        { c: "c2", sym: `<i>q</i> = ⌊<i>a</i>/<i>m</i>⌋`, term: "Quotient", def: `The greatest integer not exceeding <span class="m"><i>a</i>/<i>m</i></span>: the number of complete multiples of <i>m</i> contained in <i>a</i>.`, was: "the laps counter" },
        { c: "c1", sym: `<i>r</i> = <i>a</i> mod <i>m</i>`, term: "Least nonnegative residue (remainder)", def: `The unique <i>r</i> of the division algorithm. It always satisfies <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>, even when <i>a</i> is negative.`, was: "where the hand stops" },
        { c: "c3", sym: `<i>a</i> ≡ <i>b</i> (mod <i>m</i>)`, term: "Congruence modulo m", def: `<span class="m"><i>m</i> ∣ (<i>a</i> − <i>b</i>)</span>; equivalently, <i>a</i> and <i>b</i> leave the same remainder on division by <i>m</i>. It is an equivalence relation that respects + and ×.`, was: "a full lap changes nothing" },
        { c: "c1", sym: `[<i>a</i>]`, term: "Residue class", def: `The set <span class="m">{<i>a</i> + <i>km</i> : <i>k</i> ∈ ℤ}</span> of all integers congruent to <i>a</i> modulo <i>m</i>. There are exactly <i>m</i> classes, one for each remainder.`, was: "every count that lands on the same spot" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Remainder” sounds settled, but <b>two conventions disagree on negative numbers</b>. Mathematics requires <span class="m">0 ≤ <i>r</i> &lt; <i>m</i></span>, so <span class="m">−11 mod 4 = 1</span>. The <span class="m">%</span> operator in C, Java and JavaScript keeps the sign of <i>a</i> and returns <span class="m">−3</span>. Python returns 1.</p><ul class="why-chips"><li><b>Least residue</b>: 1</li><li><b>Truncated remainder</b>: −3</li><li>Both are <b>≡ (mod 4)</b></li></ul><p>A schedule or an array index built on −3 points <b>outside the clock</b>. Naming the least nonnegative residue removes the doubt.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers keep a value outside 0 to m − 1, take off too few laps, or throw away the quotient when the question needs it.`,
      setupIntro: `<p>The 30-hour truck trip from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a clock problem", items: [
        { say: `<b>Name the quantities.</b> Give the start, the step and the cycle length letters, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 19</span> h (start), <span class="m"><span class="c3"><i>b</i></span> = 30</span> h (trip), <span class="m"><span class="c4"><i>m</i></span> = 24</span> h (one day)` },
        { say: `<b>Write the congruence.</b> The unknown clock time is the remainder, required to lie in the range 0 to m − 1.`, math: `<span class="m"><span class="c1"><i>r</i></span> ≡ <span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> (mod <span class="c4"><i>m</i></span>), 0 ≤ <span class="c1"><i>r</i></span> &lt; <span class="c4"><i>m</i></span></span>` },
        { say: `<b>Justify with the division algorithm.</b> It gives exactly one quotient and one remainder in range, so the answer is well defined.`, math: `<span class="m">49 = <span class="c4">24</span> · 2 + <span class="c1">1</span>, 0 ≤ 1 &lt; 24</span>` },
        { say: `<b>Reduce early if it helps.</b> Congruence respects addition, so the trip can be reduced first.`, math: `<span class="m">30 = 24 · 1 + 6 ⟹ 19 + 30 ≡ 19 + 6 = 25 ≡ <span class="c1">1</span> (mod 24)</span>` },
        { say: `<b>Answer in a sentence.</b> The quotient counts days passed and the remainder is the time.`, math: `<span class="m"><i>q</i> = 2</span> days, <span class="m"><span class="c1"><i>r</i></span> = 1</span> → The truck arrives on Sunday at 01:00.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: write the division algorithm, check that 0 ≤ r &lt; m, and state what the quotient and remainder mean. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can find a remainder and read it the formal way.",
      checks: [
        { hint: `Write <span class="m">17 = 5<i>q</i> + <i>r</i></span> with <span class="m">0 ≤ <i>r</i> &lt; 5</span>.`, parts: [{ label: "mugs left over", ans: 2 }] },
        { hint: `Add first: 8 + 50. Then take off every full day of 24 hours.`, parts: [{ label: "arrival hour", ans: 10 }] },
        { hint: `Write <span class="m">−11 = 4<i>q</i> + <i>r</i></span> with <span class="m">0 ≤ <i>r</i> &lt; 4</span>. The quotient is −3, not −2.`, parts: [{ label: "position", ans: 1 }] },
        { hint: `Work out <span class="m">3, 3<sup>2</sup>, 3<sup>3</sup>, 3<sup>4</sup></span> mod 10 and look for the cycle.`, parts: [{ label: "last digit", ans: 1 }] },
        { hint: `Four 8-hour intervals pass between the first and the fifth dose.`, parts: [{ label: "hour t", ans: 6 }] }
      ]
    }
  },
  prereqWhy: {
    "division": "Modular arithmetic keeps the remainder from division, so the division algorithm is the starting point.",
    "integers": "Remainders of negative numbers and differences like a − b require integer arithmetic."
  },
  unlocksWhy: {},
  beyond: [
    { field: "Number theory", why: "Congruences are the main language for questions about primes and divisibility." },
    { field: "Abstract algebra", why: "The integers mod m form the ring ℤ/mℤ, a basic example of groups, rings and fields." },
    { field: "Cryptography", why: "RSA, Diffie–Hellman key exchange and digital signatures are built on modular arithmetic." },
    { field: "Discrete mathematics", why: "Proofs about cycles, hashing and divisibility use congruences directly." }
  ],
  mistakes: [
    { wrong: `<span class="m">−11 mod 4 = −3</span>`, fix: `The remainder must satisfy 0 ≤ r &lt; 4. Since <span class="m">−11 = 4(−3) + 1</span>, the answer is 1.` },
    { wrong: `Using 12 as a remainder on a 12-position clock`, fix: `Remainders mod 12 run from 0 to 11. The clock face labels position 0 as "12".` },
    { wrong: `Dividing both sides of a congruence freely: <span class="m">2 · 3 ≡ 2 · 6 (mod 6)</span> so <span class="m">3 ≡ 6</span>`, fix: `Cancelling is only safe when the factor shares no common factor with m. Here gcd(2, 6) = 2, and 3 is not congruent to 6 mod 6.` },
    { wrong: `Keeping only the remainder and answering "01:00 on Friday" for the freight truck`, fix: `The remainder gives the time and the quotient gives the days passed. <span class="m">49 = 24 × 2 + 1</span> means 2 midnights later: Sunday at 01:00.` },
    { wrong: `Taking off one cycle only: <span class="m">19 + 30 = 49</span>, and <span class="m">49 − 24 = 25</span>, so 25:00`, fix: `Subtract every complete cycle. <span class="m">49 = 24 × 2 + 1</span>, so the least residue is 1 and the time is 01:00.` }
  ],
  practice: [
    { ctx: "Packing", q: `A warehouse packs 17 mugs into boxes of 5. After filling as many boxes as possible, how many mugs are left over?`, a: `<span class="m">17 mod 5 = 2</span>, since 17 = 5 × 3 + 2. Three full boxes and <b>2 mugs</b> left over.` },
    { ctx: "Travel", q: `It is 08:00 and a bus journey takes 50 hours. What time is it when you arrive?`, a: `<b>10:00</b>. 8 + 50 = 58 = 24 × 2 + 10, so 58 ≡ 10 (mod 24).` },
    { ctx: "Shifts", q: `Four crews rotate daily in positions 0, 1, 2, 3 (crews A, B, C, D). Crew A, position 0, is on duty today. Which position was on duty 11 days ago?`, a: `Position <span class="m">−11 mod 4 = 1</span>, crew <b>B</b>, since −11 = 4 × (−3) + 1 with 0 ≤ 1 &lt; 4.` },
    { ctx: "Computing", q: `A program needs only the last digit of <span class="m">3<sup>20</sup></span>, which is its remainder mod 10. What is it?`, a: `<b>1</b>. Last digits of powers of 3 cycle 3, 9, 7, 1 with period 4, and 20 ≡ 0 (mod 4), so 3²⁰ ends like 3⁴ = 81. (3²⁰ = 3,486,784,401.)` },
    { ctx: "Health care", q: `Write an equation with a letter for the unknown, then solve: a patient gets a dose every 8 hours, the first at 22:00. At what hour <i>t</i> on a 24-hour clock is the fifth dose?`, a: `Four intervals pass, so <span class="m"><i>t</i> ≡ 22 + 4 × 8 (mod 24)</span>. 22 + 32 = 54 = 24 × 2 + 6, so <i>t</i> = 6: the fifth dose is at <b>06:00</b>.` }
  ],
  origin: `The Chinese text <i>Sunzi Suanjing</i> (between the 3rd and 5th centuries CE) poses a problem about a number with given remainders, the origin of the Chinese Remainder Theorem. Carl Friedrich Gauss introduced the ≡ notation and developed the theory of congruences in <i>Disquisitiones Arithmeticae</i> (1801).`
};
