window.ARITH = window.ARITH || {};

ARITH["counting"] = {
  title: "Counting & the Natural Numbers",
  short: "Say one number for each thing, then stop.",
  grade: "Pre-K – Kindergarten",
  hours: 2,
  voice: "plain",
  eyebrow: "Number sense · the natural numbers",
  hero: `<span class="m">1, 2, 3, …, <span class="c1"><i>n</i></span>, <span class="c2"><i>n</i> + 1</span>, …</span>`,
  lede: `Every counting number has a next number. Counting a group means matching each object to one number, in order, and the last number you say is how many there are.`,
  plain: `<p><b>Counting</b> answers the question "how many?" You match each object to one counting number, in order: 1, 2, 3, and so on. No object gets two numbers and none is skipped. The last number you say is the <b>count</b>. A pharmacy technician sliding tablets across a tray in groups of five says 5, 10, 15, 20, 25, 30, and when the last group is gone, the bottle holds 30 tablets.</p>
<p>The counting numbers are called the <b>natural numbers</b>. They never run out. Every number <span class="m c1"><i>n</i></span> has a next one, its <b>successor</b> <span class="m c2"><i>n</i> + 1</span>. After 99 comes 100, and after a million comes a million and one.</p>
<p>The order you count in does not change the result. Count a shelf left to right or right to left and you get the same total, as long as each item is matched once.</p>`,
  formal: `<p>The <b>natural numbers</b> are <span class="m">ℕ = {1, 2, 3, …}</span>. Many texts, especially in set theory and computer science, include 0 and write <span class="m">ℕ = {0, 1, 2, …}</span>; the set <span class="m">{0, 1, 2, …}</span> is also called the <b>whole numbers</b> <span class="m">𝕎</span>. Always check which convention a book uses.</p>
<p>The Peano axioms describe ℕ with a starting element and a <b>successor function</b> <span class="m"><i>S</i>(<i>n</i>) = <i>n</i> + 1</span> that is one-to-one and never returns the starting element. The <b>axiom of induction</b> says any set that contains the starting element and is closed under <i>S</i> contains every natural number.</p>
<div class="display">A finite set <i>A</i> has <b>cardinality</b> <span class="c1"><i>n</i></span>, written |<i>A</i>| = <span class="c1"><i>n</i></span>,<br>when there is a one-to-one correspondence (bijection) between <i>A</i> and {1, 2, …, <span class="c1"><i>n</i></span>}.</div>`,
  legend: [
    { c: "c1", sym: `<i>n</i>`, name: "The count", desc: "How many objects are in the group. It is the last number said when you count them one by one." },
    { c: "c2", sym: `<i>n</i> + 1`, name: "The successor", desc: "The next counting number after n. Adding one more dot to a ten-frame moves the count from n to n + 1." },
    { c: "c1", sym: `ℕ`, name: "Natural numbers", desc: "The set of counting numbers 1, 2, 3, and so on without end. Some books start it at 0." }
  ],
  steps: { title: "How to count a group of objects", items: [
    `Pick a starting object. Move each object aside, or touch it, as you count so none gets counted twice.`,
    `Say the counting numbers in order, <span class="m">1, 2, 3, …</span>, one number for each object.`,
    `Stop when every object has a number. Do not skip any.`,
    `The last number you said is the count <span class="m c1"><i>n</i></span>.`,
    `For big groups, count in tens: fill a ten-frame, set it aside, and count the full frames by tens before counting the leftovers.`
  ] },
  example: {
    prompt: `Seats in a theater row are numbered 14 through 22. Your class has 9 students. Is that row exactly the right size?`,
    lines: [
      { math: `14, 15, 16, 17, 18, 19, 20, 21, 22`, note: "List every seat number in the row." },
      { math: `1, 2, 3, 4, 5, 6, 7, 8, 9`, note: "Match each seat to a counting number, starting from 1." },
      { math: `<span class="c1"><i>n</i></span> = 9`, note: "The last counting number said is the number of seats." },
      { math: `22 − 14 = 8`, note: "Subtracting alone gives 8, which is one short. It counts the gaps between seats." },
      { math: `22 − 14 + 1 = 9`, note: "Counting from a to b including both ends gives b − a + 1 numbers." }
    ],
    answer: `The row has <span class="m c1">9</span> seats, exactly one for each of the 9 students.`
  },
  why: `<p>Counting is how you check that nothing is missing: every passenger is back on the bus, every sponge is out of a patient, every bill is in the cash drawer. Most counting errors come from two slips, counting something twice or skipping it. A drawer that is $20 short or a bottle one tablet light usually traces back to one of them.</p>
<p>A second trap is counting a range. Pages 45 through 112, the 3rd through the 10th of a month, or seats 14 through 22 all hold one more than the difference, because both ends are included. Programmers call this slip an off-by-one error.</p>
<p>Much of arithmetic is a shortcut for counting. Addition counts on, multiplication counts equal groups, and probability counts outcomes. Matching objects one to one, the idea at the heart of counting, is also how mathematicians compare the sizes of sets, even infinite ones.</p>`,
  careers: [
    { role: "Pharmacy technician", use: "Counts tablets into prescription bottles, usually in groups of five on a counting tray, and double-checks the total against the order." },
    { role: "Inventory clerk", use: "Performs cycle counts of stock on shelves and reconciles them with the numbers in the inventory system." },
    { role: "Wildlife biologist", use: "Counts animals in survey plots or along transects to estimate the size of a population." },
    { role: "Bank teller", use: "Counts cash drawers at the start and end of each shift so the totals match the day's transactions." },
    { role: "Surgical nurse", use: "Counts sponges, needles and instruments before and after an operation so nothing is left inside the patient." },
    { role: "Election official", use: "Counts ballots by hand during audits and recounts to confirm machine totals." }
  ],
  life: [
    "Checking that everyone is back on the bus after a field trip",
    "Counting days on a calendar until an event",
    "Making sure a bag has the right number of items at checkout",
    "Counting stitches or rows when knitting",
    "Counting reps and sets during exercise"
  ],
  fields: [
    { name: "Combinatorics", use: "Counts arrangements and selections, such as how many ways to choose a team, using rules built on simple counting." },
    { name: "Computer science", use: "Loop counters, array indexes and memory addresses are natural numbers, and off-by-one errors are counting mistakes." },
    { name: "Statistics", use: "Frequency tables and histograms start with counting how many data values fall in each group." },
    { name: "Logic and set theory", use: "Cardinality and mathematical induction are both built on the natural numbers." }
  ],
  layers: {
    concept: {
      heading: "What are counting and the natural numbers?",
      question: { text: "How many?", sub: `Every time you check a count, you do the same three things. Watch each one happen in the model above, then try it yourself.`, figure: { sym: `<i>n</i>`, value: "17", cap: "the count", echo: "n" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["dot", "dots", "seat", "seats", "friend", "friends", "tablet", "tablets", "bottle", "sponge", "sponges", "drawer", "cases", "stacks", "deer", "ballots", "batches", "twenties", "tens", "fives", "bills", "tokens", "token", "sheep", "marks", "notches", "bone"],
      walk: { title: "Count it together: a row of seats",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `Your group of 9 friends is going to a show. Your row has seats numbered 14 to 22. Is there a seat for every friend?`,
        demo: { kind: "range", from: 14, to: 22, gaps: true, unit: "seat", alt: "Seats 14 to 22. Step by step each seat gets a counting number, 1 to 9; the last number, 9, is the count; then the 8 spaces between seats are marked." },
        lines: [
          { math: `14, 15, 16, …, 22`, note: `Here is the row. Each box is one seat.`, frame: 0 },
          { math: `14 → 1,  15 → 2`, note: `Give the first seat the number 1, the next seat 2.`, frame: 2 },
          { math: `22 → 9`, note: `Keep going, one seat and one number at a time. No seat is skipped. No seat gets two numbers.`, frame: 9 },
          { math: `<span class="c1"><i>n</i></span> = 9`, note: `The last number you said is how many seats there are: 9. Yes, a seat for every friend.`, frame: 10 },
          { math: `22 − 14 = 8`, note: `A shortcut gives 8. It counts the spaces between seats, not the seats.`, frame: 11 },
          { math: `22 − 14 + 1 = 9`, note: `Add back the first seat, and the shortcut agrees: 9 seats.`, frame: 10 }
        ],
        predict: [null,
          { ask: `Seat 14 gets the number 1. What number does seat 15 get?`, parts: [{ label: "seat 15 gets", ans: 2 }], hint: `One more seat, one more number.` },
          { ask: `Keep matching. What number does seat 22 get?`, parts: [{ label: "seat 22 gets", ans: 9 }], hint: `Say them in order: 14 gets 1, 15 gets 2, 16 gets 3 … all the way to 22.` },
          { ask: `So how many seats are in the row?`, choices: [
            { t: "9, the last number said", ok: true },
            { t: "22, the last seat number", why: "22 is the seat's name, not the count. The count is the last counting number you said." },
            { t: "We have to add the numbers up", why: "No adding needed. The last number said is already the total." }
          ], hint: `Look at the number seat 22 got.` },
          { ask: `A friend says: "22 − 14 = 8, so there are 8 seats." Why is that one short?`, choices: [
            { t: "It counts the spaces between seats", ok: true },
            { t: "Seat 14 should not count", why: "Seat 14 is in the row. It got the number 1." },
            { t: "Subtracting is always wrong", why: "22 − 14 really is 8. It just counts something else: the spaces." }
          ], hint: `Seats 14 and 15 are two seats, with one space between them.` }],
        answer: `The row has <span class="m c1">9</span> seats, one for each of the 9 friends.` },
      ideas: [
        { c: "c1", title: "One number for each dot", term: "one-to-one matching", text: `Touch each dot once and say the next number. No dot gets two numbers. No dot gets skipped.`,
          demo: { kind: "dots", slots: 5, lit: 5, sweep: true, alt: "Five dots light up one at a time and are numbered 1 to 5." }, try: { label: "Press Count aloud", lab: "play" } },
        { c: "c1", title: "The last number is the total", term: "the count", text: `Say the numbers in order. The last one you say tells you how many there are. There is nothing to add up.`,
          demo: { kind: "dots", slots: 5, lit: 5, sweep: true, big: true, alt: "Five dots are numbered 1 to 5, then the last number, 5, lifts out as the total." }, try: { label: "Count a group of 12", lab: "set:12,play" } },
        { c: "c2", title: "There is always a next one", term: "successor", text: `After any number comes one more. After 99 comes 100. After a million comes a million and one. The dashed dot is the next one.`,
          demo: { kind: "dots", slots: 8, grow: [4, 5, 6], alt: "A dashed dot waits after the last dot. When it fills in, a new dashed dot appears after it." }, try: { label: "Add one more dot", lab: "plus" } }
      ],
      matters: { title: "Why counting comes first", text: `<p>Counting is the first thing in math you have to get <b>exactly right</b>. Almost everything else is built on it.</p><ul class="why-chips"><li><b>Adding</b> is counting on</li><li><b>Multiplying</b> is counting groups</li><li><b>Measuring</b> is counting units</li></ul><p>So when a count is right, the math built on it can be <b>trusted</b>. When a count is <b>off by just one</b>, every answer that uses it is off too.</p>` },
      stakes: { title: "Where counting goes wrong", lead: `Skip one thing, or count one twice, and your total is off by one.`, items: [
        { role: "Pharmacy", text: `A bottle that is one tablet light.` },
        { role: "Operating room", text: `A sponge left inside a patient. The team counts before closing, and closing waits until the count is right. With 19 counted out of 20, the dashed dot is where the last sponge should be.` },
        { role: "Cash drawer", text: `A drawer that is $20 short.` },
        { role: "Counting a range", text: `Seats 14 through 22 make 9 seats, not 8. Count both ends.` }
      ], try: { label: "Set the model to 19", lab: "set:19" } },
      examplesTitle: "Where you will meet it",
      timelineTitle: "People have counted this way for thousands of years",
      timelineLead: `Long before there were written numbers, people kept one mark or one token for each thing. It is the same matching you just tried in the model.`,
      timeline: [
        { when: "About 43,000 years ago", what: `Notches cut in a bone in southern Africa. They may be tallies. Scholars still debate it.` },
        { when: "From about 7500 BCE", what: `Farmers in the Near East count with small clay tokens: a cone for a small measure of barley, a disc for a sheep. One token for each thing, like one dot for each thing in the model.` },
        { when: "About 3200 BCE", what: `Marks pressed in clay become the first written records, according to archaeologist Denise Schmandt-Besserat.` },
        { when: "1888 and 1889", what: `Richard Dedekind and Giuseppe Peano write the counting numbers as rules: a first number, and a next number after every number. That next number is the dashed dot in the model.` }
      ],
      lede: `Counting answers the question "how many?" It works by matching each thing to one number, and the last number you say is the total.`,
      history: `<p><b>The problem.</b> Farmers and herders needed to know how many sheep or measures of grain they had, and who owed what. Before there were written numerals, the only way to record a number was to keep something that matched it, one mark or one object for each thing.</p>
<p><b>The solution.</b> Notched bones may be the oldest attempts. The Lebombo bone from southern Africa is about 42,000 to 43,000 years old and the Ishango bone from central Africa more than 20,000 years old, though whether their notches were tallies is still debated. Clearer evidence comes from the Near East, where from about 7500 BCE farmers kept counts with small clay tokens: a cone for a small measure of barley, a disc for a sheep. Three measures of barley were three cones. By about 3300 BCE, at sites such as Susa in Iran, tokens for unpaid dues were sealed in clay envelopes and pressed into the outside first. According to archaeologist Denise Schmandt-Besserat, those marks on clay became the first written records, around 3200 BCE.</p>
<p><b>What it changed.</b> Matching one mark to one thing is still how counts are checked: a stock count against the records, a surgical count before closing, a ballot recount. In 1888 Richard Dedekind, and in 1889 Giuseppe Peano, wrote the rules of the counting numbers as axioms: a first number, and a next number after every number. Those axioms are the base from which the rest of arithmetic is proved.</p>`,
      sources: [
        { title: "Lebombo bone (Wikipedia)", url: "https://en.wikipedia.org/wiki/Lebombo_bone" },
        { title: "Ishango bone (Wikipedia for Schools)", url: "https://dlab.epfl.ch/wikispeedia/wpcd/wp/i/Ishango_bone.htm" },
        { title: "From Accounting to Writing (Denise Schmandt-Besserat, University of Texas)", url: "https://sites.utexas.edu/dsb/tokens/from-accounting-to-writing/" },
        { title: "Peano axioms (Wikipedia)", url: "https://en.wikipedia.org/wiki/Peano_axioms" }
      ],
      examples: [
        { role: "Pharmacy technician", figure: "90 tablets", scene: `An order calls for 90 tablets. Counted in fives on a tray, 18 full groups make <span class="m">18 × 5 = 90</span>. If only 17 groups go in, the bottle holds <span class="m">17 × 5 = 85</span>, five short.`, takeaway: "Counting in groups is fast, and a group is quick to recount if something looks off." },
        { role: "Inventory clerk", figure: "57 of 60 cases", scene: `The system lists 60 cases. The shelf holds 4 stacks of 12 and one stack of 9: <span class="m">48 + 9 = 57</span>. Three cases are unaccounted for.`, takeaway: "A count that disagrees with the records starts a search for theft, damage or a data-entry error." },
        { role: "Surgical nurse", figure: "19 of 20 sponges", try: { label: "Show all 20", lab: "set:20" }, scene: `Twenty sponges were opened during an operation. Before the incision is closed, the team counts 19 on the counter. Closing waits until the 20th is found.`, takeaway: "One skipped item in a count can mean an object left inside a patient." },
        { role: "Bank teller", figure: "$430", scene: `At shift end the drawer holds 12 twenties, 15 tens and 8 fives: <span class="m">240 + 150 + 40 = 430</span> dollars, which should match the $430 the records show.`, takeaway: "Counting each kind of bill separately keeps a large count manageable." },
        { role: "Wildlife biologist", figure: "45 deer", scene: `Three survey plots of the same size hold 14, 9 and 22 deer: <span class="m">14 + 9 + 22 = 45</span> deer, an average of <span class="m">45 ÷ 3 = 15</span> per plot.`, takeaway: "Careful counts in small areas are how whole populations are estimated." },
        { role: "Election official", figure: "1,214 ballots", scene: `In a hand recount, ballots are stacked in batches of 50. There are 24 batches and 14 left over: <span class="m">24 × 50 + 14 = 1,214</span>, matching the machine total of 1,214.`, takeaway: "When a hand count matches the machine, voters can trust the result." }
      ]
    },
    build: {
      task: { text: "Count it so the total can be trusted.", sub: `The same five moves work for any group, from 9 seats in a row to 1,214 ballots. Try each one in the model above as you go.`,
        figure: { sym: `<i>n</i>`, value: "17", cap: "in the model", echo: "n" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      keyTry: [{ label: "Set the count to 30", lab: "set:30" }, { label: "Press +1", lab: "plus" }, null],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      objects: ["object", "objects", "dot", "dots", "seat", "seats", "rider", "riders", "day", "days", "item", "items", "stitch", "stitches", "reps", "fives", "frame", "frames", "ballots"],
      stepGoal: [null,
        { key: "aloud", min: 1, notYet: `Not yet. Press <b>Count aloud</b> in the model and let it give every dot a number.`, text: `Press <b>Count aloud</b> and watch each dot get exactly one number.`, after: `One number per dot, in order. That is one-to-one matching.` },
        null,
        { key: "counted", eq: 23, notYet: `Not yet. Set the slider to 23, then press <b>Count aloud</b> and let it finish.`, text: `Set the slider to 23 yourself, then press <b>Count aloud</b>. The last number said should be 23.`, after: `The last number said is the count: <span class="m c1"><i>n</i> = 23</span>.` },
        { key: "n", eq: 34, text: `Make the model show 34 dots. How many full frames is that, and how many left over?`, after: `3 full frames and 4 more: <span class="m">30 + 4 = 34</span>.` }],
      matters: { title: "Why a method beats a guess", text: `<p>Anyone can count a handful of things. Mistakes start when the group is big, or the things look alike, or someone talks to you halfway through.</p><ul class="why-chips"><li><b>Big</b> groups</li><li><b>Look-alike</b> things</li><li><b>Interruptions</b></li></ul><p>A method is <b>the same few moves every time</b>. It lets you stop, pick up where you left off, and check your own count.</p>` },
      lede: `To count, match each object to the next counting number, one at a time, and read the last number as the total.`,
      intro: `<p>The model above shows objects as dots in a ten-frame. Each dot gets one counting number, and the <span class="c1">count</span> is the last number said. Adding one more dot moves the count to its <span class="c2">successor</span>, one more.</p>`,
      stepWhy: [
        `Counting goes wrong in only two ways: an object counted twice or not at all. Moving or touching each object marks it as done, which prevents both.`,
        `The counting numbers always come in the same order. Saying them in order, one per object, pairs every object with exactly one number.`,
        `A skipped object leaves the count one too low. Checking that nothing is left unmatched before you stop is what makes the last number trustworthy.`,
        `Each number you say is the total so far. So the last number said is the total for the whole group.`,
        `Groups of ten match how we write numbers: 4 full frames and 7 left over is 47 at once. If you lose your place, you recount one frame instead of the whole pile.`
      ],
      bridge: `<p>The theater row used the two habits that matter most: match each item once, and when counting a range, include both ends. Here is where the same moves show up.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Checking that everyone is back on the bus", check: { q: `Riders sit in seats 12 through 40, every seat full. How many riders should be back on the bus?`, parts: [{ label: "riders", ans: 29 }], hint: `Both seat 12 and seat 40 count, so use <span class="m"><i>b</i> − <i>a</i> + 1</span>.` }, figure: "1 per rider",
          demo: { kind: "range", from: 12, to: 40, gaps: true, unit: "seat", alt: "Seats 12 to 40 get counting numbers 1 to 29; the gaps between seats number one fewer, 28." },
          lines: [{ math: `12, 13, 14, …, 40`, note: "Every seat from 12 to 40 has one rider." }, { math: `40 − 12 = 28`, note: "The difference counts the gaps between seats, one short." }, { math: `40 − 12 + 1 = 29`, note: "Both end seats count, so add one." }],
          predict: [null, { ask: `First the shortcut: what is 40 − 12?`, parts: [{ label: "40 − 12", ans: 28 }], hint: `40 − 10 = 30, then take away 2 more.` }], link: `Give each person one number as they board, the way each seat got one number from 1 to 9 in the theater row on the Concept tab.` },
        { task: "Counting the days of a trip on a calendar", check: { q: `A trip runs from the 3rd to the 10th of the month, counting both days. How many days is the trip?`, parts: [{ label: "days", ans: 8 }], hint: `List them: 3rd, 4th, … 10th. Or use <span class="m"><i>b</i> − <i>a</i> + 1</span>.` }, figure: "8 days",
          demo: { kind: "range", from: 3, to: 10, gaps: true, unit: "day", alt: "Calendar days 3 to 10 get counting numbers 1 to 8; the 7 gaps between them are the nights." },
          lines: [{ math: `3, 4, 5, 6, 7, 8, 9, 10`, note: "List the days, both ends included." }, { math: `10 − 3 = 7`, note: "The difference counts the nights between the days." }, { math: `10 − 3 + 1 = 8`, note: "Add one for the first day: 8 days." }],
          predict: [null, { ask: `What is 10 − 3? (It counts something, but not the days.)`, parts: [{ label: "10 − 3", ans: 7 }], hint: `Count up from 3 to 10 in steps of one.` }], link: `A trip from the 3rd to the 10th, both days included, is <span class="m">10 − 3 + 1 = 8</span> days. It is the same rule as the last line of the theater row on the Concept tab.` },
        { task: "Making sure a bag has the right number of items", check: { q: `You take items out one at a time and say 1, 2, 3, … The bag is empty when you say 14. How many items were in the bag?`, parts: [{ label: "items", ans: 14 }], hint: `The last number said is the count.` }, figure: "1 at a time",
          demo: { kind: "dots", slots: 14, lit: 14, sweep: true, big: true, ms: 260, alt: "Fourteen items each get the next number as they come out of the bag; the last number said, 14, is the count." },
          lines: [{ math: `1, 2, 3, …, 14`, note: "One number for each item as it comes out." }, { math: `<span class="c1"><i>n</i></span> = 14`, note: "The last number said is the count." }], link: `Take items out one at a time and count as you go (steps 1 and 2). The last number said is how many there are (step 4).` },
        { task: "Counting stitches or rows when knitting", check: { q: `A row has 47 stitches, with a marker after every 10. How many full groups of 10 are there, and how many stitches are left over?`, parts: [{ label: "full groups", ans: 4 }, { label: "left over", ans: 7 }], hint: `Count by tens: 10, 20, 30, 40. Then count the rest by ones.` }, figure: "10 a group",
          demo: { kind: "tens", n: 47, unit: "stitch", alt: "Four groups of ten stitches are counted 10, 20, 30, 40, then 7 more stitches: 47." },
          lines: [{ math: `10, 20, 30, 40`, note: "Count the full groups by tens: 4 groups." }, { math: `41, 42, 43, 44, 45, 46, 47`, note: "Count the rest by ones: 7 left over." }, { math: `4 × 10 + 7 = 47`, note: "4 tens and 7 ones make 47." }],
          predict: [null, { ask: `After the 4 full groups (40 stitches), how many stitches are left in the row of 47?`, parts: [{ label: "left over", ans: 7 }], hint: `Count on from 40 to 47.` }], try: { label: "Show 30 in frames", lab: "set:30" }, link: `Place a marker every 10 stitches, like filling a ten-frame (step 5). A lost count means recounting one group, not the whole row.` },
        { task: "Counting reps and sets during exercise", check: { q: `You count reps by fives: 5, 10, 15, … and stop at 45. How many fives did you say?`, parts: [{ label: "fives", ans: 9 }], hint: `Count the numbers you said, one for each five.` }, figure: "by fives",
          demo: { kind: "range", from: 5, to: 45, step: 5, unit: "five", alt: "The numbers 5, 10, 15 up to 45 each get a counting number, 1 to 9: nine fives." },
          lines: [{ math: `5, 10, 15, 20, 25, 30, 35, 40, 45`, note: "Write every number you said." }, { math: `1, 2, 3, 4, 5, 6, 7, 8, 9`, note: "Match each one to a counting number." }, { math: `45 ÷ 5 = 9`, note: "Each five is one number said: 9 fives." }], link: `Count by fives or tens when the numbers are large, as in practice item 1, and say each number once per rep.` }
      ]
    },
    formal: {
      question: { text: "What does “how many” mean, exactly?", sub: `You can count, and you can count so the total holds up. Here are the words a textbook uses for the same ideas, and how to write a counting problem out in full.`,
        figure: { sym: `|<i>A</i>|`, value: "17", cap: "the cardinality", echo: "n" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c1", sym: `ℕ`, term: "Natural numbers", def: `The set <span class="m">{1, 2, 3, …}</span>. Many texts, especially in set theory and computer science, start it at 0 instead.`, was: "the counting numbers 1, 2, 3, …" },
        { c: "c1", sym: `𝕎`, term: "Whole numbers", def: `The set <span class="m">{0, 1, 2, …}</span>: the natural numbers together with 0.`, was: "the count of an empty group, 0" },
        { c: "c1", sym: `<i>f</i> : <i>A</i> → {1, …, <i>n</i>}`, term: "Bijection (one-to-one correspondence)", def: `A pairing in which every element of <i>A</i> gets exactly one number and every number from 1 to <i>n</i> is used exactly once.`, was: "one number for each dot" },
        { c: "c1", sym: `|<i>A</i>| = <i>n</i>`, term: "Cardinality", def: `The number of elements of a finite set <i>A</i>: the <i>n</i> for which a bijection between <i>A</i> and <span class="m">{1, …, <i>n</i>}</span> exists. Every such bijection gives the same <i>n</i>.`, was: "the count, the last number you say" },
        { c: "c2", sym: `<i>S</i>(<i>n</i>) = <i>n</i> + 1`, term: "Successor function", def: `Sends each natural number to the next one. Different numbers have different successors, and the first natural number is not the successor of any number.`, was: "there is always a next one" },
        { c: "c2", sym: `<i>P</i>(1), <i>P</i>(<i>k</i>) ⇒ <i>P</i>(<i>k</i> + 1)`, term: "Axiom of induction", def: `A set of natural numbers that contains the first natural number, and contains the successor of each of its members, contains every natural number.`, was: "after every number comes one more, without end" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>In everyday talk, “counting numbers” and “natural numbers” mean the same thing. In a textbook, <b>one word can decide whether 0 is included</b>, and that changes answers.</p><ul class="why-chips"><li>How many natural numbers are less than 10?</li><li><b>9</b> if ℕ starts at 1</li><li><b>10</b> if ℕ starts at 0</li></ul><p>Exact words let you read any book, follow a proof, and write an answer <b>someone else can check</b>.</p>` },
      setupIntro: `<p>The theater row from the Intermediate tab, written the way a textbook would.</p>`,
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers here are off by one. The set is named carelessly, an end is dropped, or the gaps are counted instead of the things.`,
      checks: [
        { hint: `Each bill adds 5 dollars. How many fives make 40?`, parts: [{ label: "bills", ans: 8 }] },
        { hint: `The next ticket is the successor, <i>n</i> + 1. The ticket before 1,000 is the number whose successor is 1,000.`, parts: [{ label: "next ticket", ans: 100 }, { label: "ticket before 1,000", ans: 999 }] },
        { hint: `The 7th and the 31st both count, so use <span class="m"><i>b</i> − <i>a</i> + 1</span>.`, parts: [{ label: "days", ans: 25 }] },
        { hint: `Page 45 and page 112 are both read, so use <span class="m"><i>b</i> − <i>a</i> + 1</span>.`, parts: [{ label: "pages", ans: 68 }] },
        { hint: `Name the set <span class="m">{101, 102, …, 136}</span>, then use the range rule.`, parts: [{ label: "rooms r", ans: 36 }] }
      ],
      practiceTip: `Type your answer and press Check. Work it the formal way: name the set, match it to 1, …, <i>n</i>, and state the count. Stuck? Each one has a hint.`,
      setup: { title: "Writing a counting problem", items: [
        { say: `<b>Name the set.</b> Say exactly what is being counted.`, math: `<span class="m"><i>A</i> = {14, 15, 16, …, 22}</span> &nbsp;(seat numbers in the row)` },
        { say: `<b>Match it to the counting numbers.</b> A one-to-one correspondence pairs each element with exactly one of 1, 2, …, <i>n</i>.`, math: `<span class="m"><i>f</i>(<i>s</i>) = <i>s</i> − 13</span>: &nbsp;14 ↦ 1, 15 ↦ 2, …, 22 ↦ 9` },
        { say: `<b>State the count.</b> The cardinality is the <i>n</i> the matching reaches. Every matching of a finite set gives the same <i>n</i>, so the order of counting does not matter.`, math: `<span class="m"><i>A</i> ↔ {1, 2, …, 9} &nbsp;⇒&nbsp; |<i>A</i>| = <span class="c1">9</span></span>` },
        { say: `<b>Use the range rule.</b> The whole numbers from <i>a</i> to <i>b</i>, both included, are matched to 1, …, <i>b</i> − <i>a</i> + 1 by subtracting <i>a</i> − 1.`, math: `<span class="m">|{<i>a</i>, <i>a</i> + 1, …, <i>b</i>}| = <i>b</i> − <i>a</i> + 1</span>` },
        { say: `<b>Substitute, compute, answer.</b> State the result as a sentence.`, math: `<span class="m">22 − 14 + 1 = <span class="c1">9</span></span> &nbsp;→ The row has 9 seats, one for each student.` }
      ] }
    }
  },
  prereqWhy: {},
  unlocksWhy: {
    "place-value": "Place value groups counted objects into tens, hundreds and thousands so large counts can be written with only ten digits.",
    "number-line": "The number line puts the counting numbers in order at equal spacing, so the successor n + 1 is always one step to the right of n."
  },
  beyond: [
    { field: "Discrete mathematics", why: "Proof by induction, a core method there, rests directly on the successor structure of ℕ." },
    { field: "Combinatorics and probability", why: "Probabilities of equally likely outcomes are counts divided by counts." },
    { field: "Set theory", why: "Cardinality, defined by one-to-one matching, extends counting to compare infinite sets." }
  ],
  mistakes: [
    { wrong: `Touching the same object twice, or skipping one, while saying the numbers.`, fix: `Move each object to a "done" pile as you count it, so each gets exactly one number.` },
    { wrong: `Saying pages 45 to 112 make <span class="m">112 − 45 = 67</span> pages.`, fix: `When both ends count, add one: <span class="m">112 − 45 + 1 = 68</span> pages.` },
    { wrong: `Counting "…28, 29, 20-10" or "…109, 200" when crossing a ten or a hundred.`, fix: `After 29 comes 30; after 109 comes 110. The ones digit resets to 0 and the tens digit goes up by one.` },
    { wrong: `Thinking a 40-foot fence with a post every 10 feet needs 4 posts.`, fix: `<span class="m">40 ÷ 10 = 4</span> counts the gaps. Posts stand at both ends, so there are <span class="m">4 + 1 = 5</span> posts.` }
  ],
  practice: [
    { ctx: "Money", q: `You count a stack of $5 bills: 5, 10, 15, and so on up to 40 dollars. How many bills are in the stack?`, a: `5, 10, 15, 20, 25, 30, 35, 40 is 8 numbers (40 ÷ 5 = 8). There are <b>8</b> bills.` },
    { ctx: "Waiting line", q: `At a deli counter, ticket 99 has just been served. Which ticket is next? Later the display shows 1,000. Which ticket was served just before it?`, a: `After 99 comes <b>100</b>. Before 1,000 comes <b>999</b>.` },
    { ctx: "Rental", q: `A rental runs from the 7th to the 31st of a month, counting both days. How many days is that?`, a: `<span class="m">31 − 7 + 1 = 25</span>. It is <b>25</b> days.` },
    { ctx: "Reading", q: `You must read pages 45 through 112 of a book. How many pages is that?`, a: `<span class="m">112 − 45 + 1 = 68</span>. It is <b>68</b> pages.` },
    { ctx: "Work", q: `Write an expression with a letter for the unknown, then solve: a conference hotel has rooms numbered 101 through 136 on one floor. How many rooms <i>r</i> are on that floor?`, a: `<span class="m"><i>r</i> = 136 − 101 + 1</span>. 136 − 101 = 35, and 35 + 1 = <b>36</b> rooms.` }
  ],
  origin: `Notched bones such as the Lebombo bone from southern Africa (about 43,000 years old) and the Ishango bone from central Africa (about 20,000 years old) are often read as early tally records, though what they were used for is debated. Richard Dedekind (1888) and Giuseppe Peano (1889) gave the first axiom systems for the natural numbers.`
};
