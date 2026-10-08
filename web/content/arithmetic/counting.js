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
        { role: "Pharmacy technician", scene: `An order calls for 90 tablets. Counted in fives on a tray, 18 full groups make <span class="m">18 × 5 = 90</span>. If only 17 groups go in, the bottle holds <span class="m">17 × 5 = 85</span>, five short.`, takeaway: "Counting in groups is fast, and a group is quick to recount if something looks off." },
        { role: "Inventory clerk", scene: `The system lists 60 cases. The shelf holds 4 stacks of 12 and one stack of 9: <span class="m">48 + 9 = 57</span>. Three cases are unaccounted for.`, takeaway: "A count that disagrees with the records starts a search for theft, damage or a data-entry error." },
        { role: "Surgical nurse", scene: `Twenty sponges were opened during an operation. Before the incision is closed, the team counts 19 on the counter. Closing waits until the 20th is found.`, takeaway: "One skipped item in a count can mean an object left inside a patient." },
        { role: "Bank teller", scene: `At shift end the drawer holds 12 twenties, 15 tens and 8 fives: <span class="m">240 + 150 + 40 = 430</span> dollars, which should match the $430 the records show.`, takeaway: "Counting each kind of bill separately keeps a large count manageable." },
        { role: "Wildlife biologist", scene: `Three survey plots of the same size hold 14, 9 and 22 deer: <span class="m">14 + 9 + 22 = 45</span> deer, an average of <span class="m">45 ÷ 3 = 15</span> per plot.`, takeaway: "Careful counts in small areas are how whole populations are estimated." },
        { role: "Election official", scene: `In a hand recount, ballots are stacked in batches of 50. There are 24 batches and 14 left over: <span class="m">24 × 50 + 14 = 1,214</span>, matching the machine total of 1,214.`, takeaway: "When a hand count matches the machine, voters can trust the result." }
      ]
    },
    build: {
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
      tasks: [
        { task: "Checking that everyone is back on the bus", link: `Give each person one number as they board, the way each seat got one number from 1 to 9 in the worked example.` },
        { task: "Counting the days of a trip on a calendar", link: `A trip from the 3rd to the 10th, both days included, is <span class="m">10 − 3 + 1 = 8</span> days. It is the same rule as the last line of the worked example.` },
        { task: "Making sure a bag has the right number of items", link: `Take items out one at a time and count as you go (steps 1 and 2). The last number said is how many there are (step 4).` },
        { task: "Counting stitches or rows when knitting", link: `Place a marker every 10 stitches, like filling a ten-frame (step 5). A lost count means recounting one group, not the whole row.` },
        { task: "Counting reps and sets during exercise", link: `Count by fives or tens when the numbers are large, as in practice item 1, and say each number once per rep.` }
      ]
    },
    formal: {
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
