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
    prompt: `A freight truck leaves at 19:00 on a Friday. The trip takes 58 hours. On what day and at what time does it arrive?`,
    lines: [
      { math: `<span class="m"><span class="c2">19</span> + <span class="c3">58</span> = 77</span>`, note: "Count hours from midnight at the start of Friday." },
      { math: `<span class="m">77 = <span class="c4">24</span> × 3 + <span class="c1">5</span></span>`, note: "Division algorithm with modulus 24: quotient 3, remainder 5." },
      { math: `<span class="m">77 ≡ <span class="c1">5</span> (mod <span class="c4">24</span>)</span>`, note: "The remainder is the clock time: 05:00." },
      { math: `<span class="m">Friday + 3 days = Monday</span>`, note: "The quotient 3 counts how many midnights were passed." }
    ],
    answer: `The truck arrives on Monday at 05:00.`
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
    concept: {
      heading: "What is clock arithmetic?",
      lede: `Modular arithmetic answers questions about things that repeat: what time it will be, what day something falls on, and what is left over after making equal groups.`,
      history: `<p><b>The problem.</b> Calendar makers had to fit together cycles that do not line up, such as days, months and years. Questions like "which number leaves these remainders for these cycles?" came up again and again, and in China calculating calendars was an important motivation for studying them.</p>
<p><b>The solution.</b> The Chinese text <i>Sunzi Suanjing</i>, written between the 3rd and 5th centuries CE, asks for a number of things that leave 2 when counted by threes, 3 when counted by fives and 2 when counted by sevens. The smallest answer is 23. In 1247 Qin Jiushao gave a general method in his <i>Mathematical Treatise in Nine Sections</i>, and wrote that he had learned the rule from calendar experts while studying at the Board of Astronomy. In 1801 Carl Friedrich Gauss's <i>Disquisitiones Arithmeticae</i> introduced the sign ≡ and built remainders into a full theory of congruences, illustrated with a calendar problem of its own.</p>
<p><b>What it changed.</b> Congruences gave one language to every repeating count. The same rules now set times on a 24-hour schedule, compute the check digits on ISBNs and bank account numbers, and run the encryption behind secure websites.</p>`,
      sources: [
        { title: "Chinese remainder theorem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Chinese_remainder_theorem" },
        { title: "Qin Jiushao (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Qin_Jiushao/" },
        { title: "Earliest Uses of Symbols of Number Theory (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/Miller/mathsym/nth/" },
        { title: "Modular arithmetic (Wikipedia)", url: "https://en.wikipedia.org/wiki/Modular_arithmetic" }
      ],
      examples: [
        { role: "Nurse", scene: `Take, as an example, an order for a dose every 8 hours, the first at 22:00. Next: <span class="m">22 + 8 = 30 ≡ 6 (mod 24)</span>, so 06:00, then 14:00, then back to 22:00.`, takeaway: "Wrapping at 24 keeps a round-the-clock schedule on real clock times." },
        { role: "Software engineer", scene: `A hash table with 100 buckets stores the record with ID 1,234 in bucket <span class="m">1234 mod 100 = 34</span>.`, takeaway: "Remainders spread data over a fixed number of slots, so lookups stay fast." },
        { role: "Payment systems developer", scene: `In the standard Luhn example, the account digits 7992739871 give a weighted digit sum of 67. The check digit makes the total a multiple of 10: <span class="m">67 + 3 = 70 ≡ 0 (mod 10)</span>, so the full number is 79927398713.`, takeaway: "A mistyped digit changes the remainder, and the error is caught at once." },
        { role: "Operations scheduler", scene: `A plant rotates shifts A, B, C, D week by week, starting with A in week 1. Week 30 uses position <span class="m">(30 − 1) mod 4 = 1</span>, which is shift B.`, takeaway: "One remainder answers a question about any week without listing them all." },
        { role: "Music theorist", scene: `With C as 0, the note G is pitch class 7. Up 7 semitones: <span class="m">7 + 7 = 14 ≡ 2 (mod 12)</span>, the note D.`, takeaway: "Notes an octave apart share a name, so pitch arithmetic wraps at 12." },
        { role: "Cryptographer", scene: `A classroom-size RSA key uses modulus 33 and exponent 3. The message 4 is sent as <span class="m">4<sup>3</sup> = 64 ≡ 31 (mod 33)</span>, and raising 31 to the 7th power mod 33 brings back 4.`, takeaway: "Real keys use moduli hundreds of digits long, with the same arithmetic." }
      ]
    },
    build: {
      lede: `To find where a count lands on a cycle, divide by the modulus: the remainder is the position and the quotient is the number of full laps.`,
      intro: `<p>The model above is a clock with <span class="c4"><i>m</i></span> positions, numbered 0 to m − 1. The hand starts at 0, steps forward <span class="c2"><i>a</i></span> places and then <span class="c3"><i>b</i></span> more (with ×, it makes <i>a</i> jumps of <i>b</i>). The laps counter is the quotient, and the number lit up in amber where the hand stops is the remainder <span class="c1"><i>r</i></span>.</p>`,
      stepWhy: [
        `The quotient counts full laps around the clock. Rounding down keeps it from counting a lap the hand has not finished. For a negative number, rounding toward negative infinity keeps the remainder from dropping below zero.`,
        `Taking away <i>m</i> × <i>q</i> removes the complete laps. What is left is how far into the current lap you are, which is the position on the clock.`,
        `Every position on an <i>m</i>-position clock is a whole number from 0 to m − 1. A result outside that range means the quotient was off by one lap, and adding or subtracting <i>m</i> fixes it.`,
        `Congruence respects addition and multiplication, so reducing early gives the same remainder as reducing at the end. Smaller numbers mean fewer slips by hand and no overflow on a computer.`
      ],
      bridge: `<p>The freight-truck problem has the pattern of every cycle question: add up the elapsed amount, divide by the length of the cycle, then read the remainder as the position and the quotient as the number of laps. Here is where the same steps show up.</p>`,
      tasks: [
        { task: "Working out what time a long trip ends", link: `Add the trip hours to the start hour and reduce mod 24, as <span class="m">19 + 58 = 77 ≡ 5</span> gave 05:00.` },
        { task: "Finding what weekday a date falls on", link: `Divide the days ahead by 7 (step 2). Whole weeks return you to the same weekday, so only the remainder moves you: 100 days after a Friday, <span class="m">100 = 7 × 14 + 2</span>, is a Sunday.` },
        { task: "Planning a medicine schedule every 6 or 8 hours", link: `Add the interval and reduce mod 24 each time (step 4): a 20:00 dose plus 6 hours is <span class="m">26 ≡ 2</span>, so the next is at 02:00.` },
        { task: "Telling whether a number is even or odd", link: `Divide by 2. The remainder is 0 for even and 1 for odd: step 3 with <i>m</i> = 2.` },
        { task: "Splitting items into groups and finding how many are left over", link: `The quotient is the number of full groups and the remainder is what is left, as 77 hours split into 3 full days and 5 hours.` }
      ]
    },
    formal: {
      setup: { title: "Writing a clock problem", items: [
        { say: `<b>Name the quantities.</b> Give the start, the step and the cycle length letters, with units.`, math: `<span class="m"><span class="c2"><i>a</i></span> = 19</span> h (start), <span class="m"><span class="c3"><i>b</i></span> = 58</span> h (trip), <span class="m"><span class="c4"><i>m</i></span> = 24</span> h (one day)` },
        { say: `<b>Write the congruence.</b> The unknown clock time is the remainder, required to lie in the range 0 to m − 1.`, math: `<span class="m"><span class="c1"><i>r</i></span> ≡ <span class="c2"><i>a</i></span> + <span class="c3"><i>b</i></span> (mod <span class="c4"><i>m</i></span>), 0 ≤ <span class="c1"><i>r</i></span> &lt; <span class="c4"><i>m</i></span></span>` },
        { say: `<b>Justify with the division algorithm.</b> It gives exactly one quotient and one remainder in range, so the answer is well defined.`, math: `<span class="m">77 = <span class="c4">24</span> · 3 + <span class="c1">5</span>, 0 ≤ 5 &lt; 24</span>` },
        { say: `<b>Reduce early if it helps.</b> Congruence respects addition, so the trip can be reduced first.`, math: `<span class="m">58 = 24 · 2 + 10 ⟹ 19 + 58 ≡ 19 + 10 = 29 ≡ <span class="c1">5</span> (mod 24)</span>` },
        { say: `<b>Answer in a sentence.</b> The quotient counts days passed and the remainder is the time.`, math: `<span class="m"><i>q</i> = 3</span> days, <span class="m"><span class="c1"><i>r</i></span> = 5</span> → The truck arrives on Monday at 05:00.` }
      ] }
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
    { wrong: `Keeping only the remainder and answering "05:00 on Friday" for the freight truck`, fix: `The remainder gives the time and the quotient gives the days passed. <span class="m">77 = 24 × 3 + 5</span> means 3 midnights later: Monday at 05:00.` }
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
