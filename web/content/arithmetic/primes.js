window.ARITH = window.ARITH || {};

ARITH["primes"] = {
  title: "Prime Numbers & Prime Factorization",
  short: "The building blocks of every whole number",
  grade: "Grades 4–6",
  hours: 5,
  voice: "plain",
  eyebrow: "Number theory · the primes",
  hero: `<span class="m">360 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup> × <span class="c1">5</span></span>`,
  lede: `A prime has exactly two positive divisors: 1 and itself. Every integer greater than 1 is a product of primes in exactly one way, apart from the order of the factors.`,
  plain: `<p>A <b>prime number</b> is a whole number greater than 1 that divides evenly only by 1 and itself. Suppose you set out 7 chairs in equal rows. One row of 7 or seven rows of 1 are the only options. With 12 chairs you could also make 2 rows of 6, 3 rows of 4, 4 rows of 3 or 6 rows of 2. So 7 is prime and 12 is <b>composite</b>. The first primes are 2, 3, 5, 7, 11, 13 and 17. The number 1 is neither prime nor composite.</p>
<p>Primes are the building blocks of multiplication. Split a composite number into factors and keep splitting until every piece is prime. The result is its <b>prime factorization</b>: <span class="m">12 = 2 × 2 × 3</span>. You reach the same primes whichever split you start with. A <b>factor tree</b> records the splits.</p>
<p>To list primes, the <b>Sieve of Eratosthenes</b> crosses out multiples. Keep 2 and cross out its other multiples. Keep the next number left, 3, and cross out its multiples. Repeat. The numbers that survive are prime.</p>`,
  formal: `<p>An integer <span class="m"><i>p</i> &gt; 1</span> is <b>prime</b> if its only positive divisors are 1 and <i>p</i>. An integer <span class="m"><i>n</i> &gt; 1</span> that is not prime is <b>composite</b>. If <i>n</i> is composite it has a prime factor <span class="m"><i>p</i> ≤ √<i>n</i></span>, so trial division up to <span class="m">√<i>n</i></span> decides primality.</p>
<div class="display"><b>Fundamental Theorem of Arithmetic.</b> Every integer <span class="m"><i>n</i> &gt; 1</span> can be written as<br><span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> ⋯ <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>, with primes <span class="m"><i>p</i><sub>1</sub> &lt; ⋯ &lt; <i>p</i><sub><i>k</i></sub></span> and exponents <span class="m"><i>e</i><sub><i>i</i></sub> ≥ 1</span>,<br>and this representation is unique.</div>
<p><b>Euclid's theorem:</b> there are infinitely many primes. <b>Euclid's lemma:</b> if a prime <i>p</i> divides <span class="m"><i>ab</i></span>, then <span class="m"><i>p</i> | <i>a</i></span> or <span class="m"><i>p</i> | <i>b</i></span>.</p>`,
  legend: [
    { c: "c1", sym: `<i>p</i>`, name: "Prime", desc: "A whole number greater than 1 whose only factors are 1 and itself. Filled amber in the sieve and circled in the factor tree." },
    { c: "c3", sym: `<i>kp</i>`, name: "Multiples of the current prime", desc: "Numbers the sieve crosses out because the current prime divides them. They glow pink while that prime is at work." },
    { c: "c2", sym: `<i>n</i>`, name: "Number being factored", desc: "The number at the top of the factor tree. Each level splits off its smallest prime." },
    { c: "c4", sym: `<i>e</i>`, name: "Exponent", desc: "How many times a prime appears in the factorization. It is the small raised number in the panel." }
  ],
  steps: { title: "How to find a prime factorization", items: [
    `Try the smallest prime, 2. While the number is even, divide by 2 and record a 2.`,
    `Move to the next prime (3, 5, 7, 11, …) and divide by it as many times as it goes evenly.`,
    `Stop testing once the prime squared is larger than what remains. If what remains is bigger than 1, it is prime; record it.`,
    `Group repeated primes with exponents and list them in increasing order.`,
    `Check by multiplying the factorization back out.`
  ] },
  example: {
    prompt: `A bakery has 72 cookies, six dozen, and wants to offer every box size that packs all of them into full, equal boxes. Find the prime factorization of 72 and use it to count the box sizes.`,
    lines: [
      { math: `<span class="m">72 = 8 × 9</span>`, note: "A tray of 8 rows of 9 gives one split. Neither 8 nor 9 is prime." },
      { math: `<span class="m">8 = <span class="c1">2</span> × <span class="c1">2</span> × <span class="c1">2</span>, &nbsp;9 = <span class="c1">3</span> × <span class="c1">3</span></span>`, note: "Split each piece until every piece is prime." },
      { math: `<span class="m">72 = <span class="c1">2</span><sup>3</sup> × <span class="c1">3</span><sup>2</sup></span>`, note: "Group the repeated primes. Check: 8 × 9 = 72." },
      { math: `<span class="m">72 = 2 × 36 = 2 × 2 × 2 × 3 × 3</span>`, note: "Starting with a different split gives the same primes." },
      { math: `<span class="m">(3 + 1)(2 + 1) = 12</span>`, note: "A box size uses 0 to 3 twos and 0 to 2 threes. Multiply the number of choices. Multiplying the exponents, 3 × 2 = 6, misses sizes such as 1, 8 and 9." }
    ],
    answer: `<span class="m">72 = 2<sup>3</sup> × 3<sup>2</sup></span>, so there are 12 box sizes: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36 and 72 cookies.`
  },
  why: `<p>Prime factorization is the quickest route to simplifying fractions, finding common denominators and computing the GCF and LCM. Once you know that <span class="m">91 = 7 × 13</span> and <span class="m">104 = 8 × 13</span>, the fraction 91/104 reduces in one step to 7/8. Without it you test divisors one by one and can miss the one they share.</p>
<p>It also settles grouping questions. A number's prime factors list every way it splits into equal groups, so you can see that 360 items pack many ways while 97 items, a prime, fit only in a single row.</p>
<p>Primes protect your data too. Encryption methods such as RSA rely on the fact that multiplying two large primes is quick, while recovering them from their product takes far too long. Later math builds on the same idea: the GCF and LCM, modular arithmetic and much of number theory start from prime factorizations.</p>`,
  careers: [
    { role: "Cryptographer", use: "Generates RSA keys from pairs of large primes, often hundreds of digits long." },
    { role: "Security engineer", use: "Configures key sizes for TLS and SSH based on how hard it is to factor products of primes." },
    { role: "Mechanical engineer", use: "Chooses gear tooth counts with no common factor so each tooth meets every tooth on the mating gear, spreading wear." },
    { role: "Software developer", use: "Picks prime table sizes for some hash tables so keys spread evenly across slots." },
    { role: "Mathematician", use: "Researches the distribution of primes, including open problems such as the Riemann Hypothesis." }
  ],
  life: [
    "Simplifying a fraction in one step",
    "Finding how many ways items can be packed evenly",
    "Understanding why website padlock icons mean a connection is encrypted",
    "Checking quickly whether a number can be split into equal groups"
  ],
  fields: [
    { name: "Computer security", use: "Public-key encryption and digital signatures depend on properties of primes." },
    { name: "Number theory", use: "Primes are the central objects of the field." },
    { name: "Mechanical engineering", use: "Gear design uses tooth counts that share no common factor." },
    { name: "Biology", use: "Researchers have proposed that the 13- and 17-year cycles of periodical cicadas help them avoid predators with shorter cycles." }
  ],
  layers: {
    nudge: "Not yet. Check that every piece is prime.",
    concept: {
      lede: `Which numbers can't be split into equal groups, and how is every other number built from them? Primes answer both questions.`,
      heading: "What are prime numbers?",
      question: { text: "Does it split evenly?", sub: `Some numbers make equal rows many ways. Some make only one row. Switch the model to <b>Factor tree</b> to see 360 broken into its primes, then try the three ideas below.`,
        figure: { sym: `<i>n</i>`, value: "360", cap: "the number in the tree", echo: "n" } },
      ideasTitle: "Three ideas, all in the model",
      objects: ["cookie", "cookies", "box", "boxes", "chair", "chairs", "row", "rows", "loaf", "loaves", "tooth", "teeth", "slot", "slots", "key", "keys", "digits"],
      walk: { title: "Factor it together: boxes of cookies",
        lead: `One situation, step by step. Try each question before you show the next line.`,
        prompt: `A bakery has 72 cookies, six dozen, on a tray of 8 rows of 9. It wants to sell them in boxes that all hold the same number, with none left over. How many box sizes work?`,
        demo: { kind: "array", rows: 8, cols: 9, unit: "cookie", alt: "A tray of cookies fills in one row at a time, 9 cookies per row, until 8 rows make 72 cookies." },
        lines: [
          { math: `72 = 8 × 9`, note: `The tray holds 8 rows of 9. That is one split. But 8 and 9 are not prime yet.`, frame: 8 },
          { math: `8 = 2 × 2 × 2`, note: `Split 8 into 2 × 4, then 4 into 2 × 2. Every piece is a 2.`, frame: 9 },
          { math: `9 = 3 × 3`, note: `9 is odd, but it is not prime. It makes 3 rows of 3.`, frame: 9 },
          { math: `72 = 2 × 2 × 2 × 3 × 3 = 2<sup>3</sup> × 3<sup>2</sup>`, note: `Every piece is prime now. The small raised numbers are exponents. They count the repeats: three 2s and two 3s.`, frame: 9 },
          { math: `72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2 × 2 × 2 × 3 × 3`, note: `Start with a different split and you reach the same primes. Only the order changes.`, frame: 9 },
          { math: `3 × 2 = 6`, note: `A shortcut multiplies the exponents. It counts only boxes with at least one 2 and one 3. It misses 1, 2, 3, 4, 8 and 9.`, frame: 9 },
          { math: `(3 + 1) × (2 + 1) = 12`, note: `A box size uses 0 to 3 twos and 0 to 2 threes. That's 4 choices times 3 choices: 12 sizes, from 1 cookie up to all 72.`, frame: 9 }
        ],
        predict: [null,
          { ask: `8 is not prime. Split it all the way into primes. How many 2s do you get?`, parts: [{ label: "number of 2s", ans: 3 }], hint: `8 = 2 × 4. Then split the 4.` },
          { ask: `Next is 9. Is 9 prime?`, choices: [
            { t: "No, 9 = 3 × 3", ok: true },
            { t: "Yes, because 9 is odd", why: "Odd is not the same as prime. 9 chairs make 3 rows of 3." },
            { t: "Yes, because 9 = 9 × 1", why: "Every number is itself times 1. A prime is a number with no other split." }
          ], hint: `Try to set 9 chairs in equal rows, more than one row.` },
          { ask: `Multiply back to check. What is 2 × 2 × 2 × 3 × 3?`, parts: [{ label: "product", ans: 72 }], hint: `2 × 2 × 2 = 8 and 3 × 3 = 9.` },
          { ask: `A friend starts with 72 = 2 × 36 instead. Will the friend get different primes?`, choices: [
            { t: "No: three 2s and two 3s again", ok: true },
            { t: "Yes: a different start gives different primes", why: "Every split ends at the same primes. Only the order changes." },
            { t: "Yes: 36 brings in a new prime", why: "36 = 2 × 2 × 3 × 3. No new prime appears." }
          ], hint: `Split 36 into primes and count the 2s and 3s.` },
          { ask: `Another friend multiplies the exponents: 3 × 2 = 6 box sizes. What does that miss?`, choices: [
            { t: "Boxes with no 2s or no 3s, like 1, 8 and 9", ok: true },
            { t: "Nothing, 6 is right", why: "List them: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72. That's 12 sizes." },
            { t: "Boxes with a 5 in them", why: "5 does not divide 72. No box size uses a 5." }
          ], hint: `A box of 9 uses two 3s and no 2s. Did the shortcut count it?` },
          { ask: `Each box size uses 0 to 3 twos and 0 to 2 threes. How many box sizes is that?`, parts: [{ label: "box sizes", ans: 12 }], hint: `4 choices for the 2s times 3 choices for the 3s.` }],
        answer: `<span class="m">72 = 2<sup>3</sup> × 3<sup>2</sup></span>, so 12 box sizes work, from 1 cookie per box up to all 72.` },
      ideas: [
        { c: "c1", title: "Some numbers will not split", term: "prime number", text: `7 chairs make equal rows only one way: 1 row of 7. A number like that, bigger than 1, is prime.`,
          demo: { kind: "array", rows: 1, cols: 7, unit: "chair", alt: "Seven chairs stand in a single row of 7, the only way to set them in equal rows." }, try: { label: "Run the sieve", lab: "mode:0,reset,play" } },
        { c: "c3", title: "Cross out the multiples", term: "Sieve of Eratosthenes", text: `Keep 2 and cross out the rest of its multiples. Keep 3 and do the same. Whatever is never crossed out is prime.`,
          demo: { kind: "line", from: 0, to: 20, tick: 5, points: [{ v: 2, c: "c1", label: "2" }, { v: 3, c: "c1", label: "3", below: true }, { v: 5, c: "c1", label: "5" }, { v: 7, c: "c1", label: "7" }, { v: 11, c: "c1", label: "11" }, { v: 13, c: "c1", label: "13" }, { v: 17, c: "c1", label: "17" }, { v: 19, c: "c1", label: "19", below: true }], alt: "The primes up to 20 appear one by one on a number line: 2, 3, 5, 7, 11, 13, 17 and 19." },
          try: { label: "Find the first two primes", lab: "mode:0,reset,nextprime,nextprime" } },
        { c: "c2", title: "Every number breaks into primes", term: "prime factorization", text: `12 chairs make 3 rows of 4. Split the 4 into 2 × 2. Stop when every piece is prime: 12 = 2 × 2 × 3.`,
          demo: { kind: "array", rows: 3, cols: 4, unit: "chair", alt: "Twelve chairs fill in as 3 rows of 4." }, try: { label: "Factor 12", lab: "mode:1,n:12" } }
      ],
      timelineTitle: "The sieve in the model is more than 2,000 years old",
      timelineLead: `Greek scholars proved the primes never run out and found the crossing-out method you ran in the model. Today the same numbers guard your passwords.`,
      timeline: [
        { when: "About 300 BCE", what: `Euclid's <i>Elements</i> proves, in Book IX, that there are infinitely many primes.` },
        { when: "3rd century BCE", what: `Eratosthenes of Cyrene is credited with the sieve: the crossing out you watched in the model. The credit comes from Nicomachus, writing in the early 2nd century CE.` },
        { when: "1640", what: `Pierre de Fermat states his "little theorem" in a letter. It became the basis of a test computers use to check whether a number is prime.` },
        { when: "1977", what: `Ron Rivest, Adi Shamir and Leonard Adleman at MIT describe RSA encryption. It is safe because undoing a product of two huge primes takes far too long.` }
      ],
      history: `<p><b>The problem.</b> Anyone sharing goods into equal lots meets numbers that will not split: 7 loaves make equal groups only as 1 group of 7 or 7 groups of 1. Greek mathematicians asked the deeper questions. Which numbers are built from smaller ones by multiplying, how many primes are there, and how can you find them?</p>
<p><b>The solution.</b> Euclid's <i>Elements</i>, compiled around 300 BCE, proves in Book IX that the primes never run out: multiply any finite list of primes, add 1, and the result has a prime factor that is not on the list. A method for finding primes, the sieve, is credited to Eratosthenes of Cyrene, a 3rd-century BCE Greek scholar, by Nicomachus in his <i>Introduction to Arithmetic</i>, written in the early 2nd century CE.</p>
<p><b>What it changed.</b> For centuries primes were studied mostly for their own sake. In a letter of 1640, Pierre de Fermat stated the result now called Fermat's little theorem, the basis of the Fermat primality test. In 1977 Ron Rivest, Adi Shamir and Leonard Adleman, working at MIT, published RSA, an encryption method whose security rests on how hard it is to factor the product of two large primes. Methods like it secure online connections and digital signatures.</p>`,
      sources: [
        { title: "Prime numbers (MacTutor)", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Prime_numbers/" },
        { title: "Sieve of Eratosthenes (Wikipedia)", url: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes" },
        { title: "Fermat's little theorem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fermat%27s_little_theorem" },
        { title: "RSA cryptosystem (Wikipedia)", url: "https://en.wikipedia.org/wiki/RSA_cryptosystem" }
      ],
      matters: { title: "Why primes come first", text: `<p>Primes are the <b>building blocks</b> of every whole number. Know a number's primes and you know every way it splits.</p><ul class="why-chips"><li><b>Fractions</b> reduce in one step</li><li><b>Packing</b> shows every box size</li><li><b>Passwords</b> stay locked</li></ul><p>Each number breaks into primes <b>in only one way</b>. So two people who factor the same number always get the same answer, and either one can check the other.</p>` },
      stakes: { title: "Where primes go wrong", lead: `Most slips come from calling a number prime too soon, or stopping before every piece is prime.`, items: [
        { role: "Calling 1 prime", text: `1 has only one factor. A prime needs exactly two, so 1 is not prime.` },
        { role: "Odd means prime", text: `91 is odd, but <span class="m">91 = 7 × 13</span>. Odd is not the same as prime.` },
        { role: "Stopping the tree early", text: `<span class="m">72 = 8 × 9</span> is not done. 8 and 9 still split into 2s and 3s.` },
        { role: "Testing too few primes", text: `Try 2, 3 and 5 on 91 and it looks prime. Keep going up to <span class="m">√91 ≈ 9.5</span>: 7 divides it.` }
      ], try: { label: "Factor 91", lab: "mode:1,n:91" } },
      examplesTitle: "Where you will meet it",
      examples: [
        { role: "Cryptographer", figure: "3,233", try: { label: "Factor 3,233", lab: "mode:1,n:3233" }, scene: `A classroom-size RSA key uses the primes 61 and 53. Their product, <span class="m">61 × 53 = 3,233</span>, is made public and the primes stay secret. Real keys use primes hundreds of digits long.`, takeaway: "Multiplying primes is fast. Undoing it is the hard step security depends on." },
        { role: "Security engineer", figure: "617 digits", scene: `A 2,048-bit RSA key, a common size, has a public number about 617 digits long, made by multiplying two primes of roughly 309 digits each.`, takeaway: "Longer primes make factoring slower for an attacker, so key size is a security setting." },
        { role: "Mechanical engineer", figure: "300 contacts", scene: `A 12-tooth gear drives a 25-tooth gear. <span class="m">12 = 2<sup>2</sup> × 3</span> and <span class="m">25 = 5<sup>2</sup></span> share no prime, so the same pair of teeth meets again only after <span class="m">12 × 25 = 300</span> tooth contacts, and every tooth meets every tooth on the other gear.`, takeaway: "A shared prime factor would make the same teeth meet over and over and wear unevenly." },
        { role: "Software developer", figure: "97 slots", scene: `A hash table with 97 slots puts key <i>k</i> in slot <span class="m"><i>k</i> mod 97</span>. Keys that are all multiples of 4 still reach all 97 slots, because 97 is prime. With 100 slots they would use only 25 of them.`, takeaway: "A prime table size spreads patterned data evenly." },
        { role: "Mathematician", figure: "221 = 13 × 17", try: { label: "Factor 221", lab: "mode:1,n:221" }, scene: `To test 221, try primes only up to <span class="m">√221 ≈ 14.9</span>: 2, 3, 5, 7, 11, 13. The last one divides it: <span class="m">221 = 13 × 17</span>, so 221 is composite.`, takeaway: "Stopping at the square root turns a long search into six divisions." }
      ]
    },
    build: {
      lede: `To factor a number, divide out the smallest prime as often as it goes, move to the next prime, and stop once the prime squared is larger than what is left.`,
      task: { text: "Break the number into primes.", sub: `The same five moves factor any number, from 72 cookies to a six-digit order count. Try each one in the model above as you go.`,
        figure: { sym: `<i>n</i>`, value: "360", cap: "in the model", echo: "n" },
        jump: [{ label: "The method", to: "b-method" }, { label: "Everyday tasks", to: "b-tasks" }] },
      keysTitle: "What the model shows",
      intro: `<p>The model has two views. The sieve shows the numbers 1 to 120 in rows of ten. Each new <span class="c1">prime</span> is filled in amber, and its <span class="c3">multiples</span> are crossed out, starting at the prime squared. The factor tree puts the <span class="c2">number</span> at the top and splits off the smallest prime at each level until only a prime is left. The panel beside it gives the factorization with <span class="c4">exponents</span> and the number of divisors.</p>`,
      keyTry: [{ label: "Run the sieve", lab: "mode:0,reset,play" }, { label: "Cross out the multiples of 2", lab: "mode:0,reset,nextprime" }, { label: "Factor 360", lab: "mode:1,n:360" }, { label: "Factor 1,024", lab: "mode:1,n:1024" }],
      objects: ["cookie", "cookies", "muffin", "muffins", "box", "boxes", "volunteer", "volunteers", "team", "teams", "square", "squares"],
      goalsIntro: `Three of the steps have a move for you to make in the model. Make the move, then press <b>Check my move</b>. A move also ticks itself off as soon as the model shows it.`,
      stepWhy: [
        `Starting with 2 means every factor you divide out is prime: by the time you try a larger number, its smaller prime factors are already gone. Even numbers are also the quickest to spot.`,
        `Dividing by the same prime until it stops going catches repeated factors, like the three 2s in 72. Only primes need testing: once 2 and 3 are divided out, 4, 6 and 9 cannot divide what is left.`,
        `Every prime factor still in the remainder is at least the current prime <i>p</i>, so a composite remainder would be at least <span class="m"><i>p</i><sup>2</sup></span>. Once <span class="m"><i>p</i><sup>2</sup></span> is larger, the remainder must be prime.`,
        `Exponents make the factorization short and quick to compare. Increasing order is the standard form, so two people factoring the same number write the same answer.`,
        `Multiplying back checks every division at once. If the product is right and every factor is prime, the Fundamental Theorem of Arithmetic says this is the only factorization.`
      ],
      stepTry: [null, { label: "Factor 675", lab: "mode:1,n:675" }, null, { label: "Factor 5,040", lab: "mode:1,n:5040" }, null],
      stepGoal: [
        { key: "n", eq: 96, text: `Choose <b>Factor tree</b> and type 96 for <i>n</i>. Count the 2s the tree splits off before something else is left.`, after: `Five 2s come off, then a 3 is left: <span class="m">96 = 2<sup>5</sup> × 3</span>.`, notYet: `Not yet. Choose <b>Factor tree</b>, then type 96 in the <i>n</i> box.` },
        null,
        { key: "n", eq: 97, text: `Type 97 into the tree. Before you look, test the primes up to <span class="m">√97 ≈ 9.8</span>: 2, 3, 5 and 7.`, after: `None of 2, 3, 5 and 7 divides 97, so 97 is prime. The tree is a single circle.`, notYet: `Not yet. Type 97 in the <i>n</i> box of the factor tree.` },
        null,
        { key: "n", eq: 240, text: `Multiply <span class="m">2 × 2 × 2 × 2 × 3 × 5</span> yourself, then type the product into the tree. If the tree shows the same six primes, your product is right.`, after: `<span class="m">240 = 2<sup>4</sup> × 3 × 5</span>. The tree splits off the same six primes you multiplied.`, notYet: `Not yet. Work out 2 × 2 × 2 × 2 = 16, then 16 × 3 × 5, and type that number in the tree.` }
      ],
      matters: { title: "Why a Method Beats Guessing", text: `<p>Guessing a split works for small numbers. It breaks down when a number is big, or <b>looks prime but is not</b>, like 91.</p><ul class="why-chips"><li><b>Smallest prime first</b></li><li><b>Divide until it stops</b></li><li><b>Stop at the square root</b></li></ul><p>The method <b>never skips a prime</b> and tells you when to stop. So the answer is complete, and anyone can check it by multiplying back.</p>` },
      bridge: `<p>The cookie walk used one pattern: break a quantity into primes, then read every equal split from the exponents. Here is the same pattern in fractions, packing, teams and online locks.</p>`,
      tasksTitle: "Everyday tasks: solve them",
      tasks: [
        { task: "Simplifying a fraction in one step", check: { q: `Reduce <span class="m">91/104</span>. Factor top and bottom into primes, then cancel the prime they share. What is the fraction in lowest terms?`, parts: [{ label: "numerator", ans: 7 }, { label: "denominator", ans: 8 }], hint: `<span class="m">91 = 7 × 13</span>. Divide 104 by 2 until you can't.` }, figure: "one shared prime",
          demo: { kind: "fraction", n: 7, d: 8, alt: "A bar cut into 8 equal parts has 7 parts shaded: the fraction 7/8." },
          lines: [{ math: `91 = 7 × 13`, note: "91 is odd and its digits sum to 10, so 2 and 3 fail. 7 divides it." }, { math: `104 = 2 × 2 × 2 × 13`, note: "Divide by 2 three times: 104, 52, 26, 13." }, { math: `91/104 = (7 × 13)/(8 × 13) = 7/8`, note: "Both share the prime 13. Cancel it once." }],
          predict: [null, { ask: `What is 104 ÷ 2 ÷ 2 ÷ 2?`, parts: [{ label: "104 ÷ 2 ÷ 2 ÷ 2", ans: 13 }], hint: `104 ÷ 2 = 52. Halve it twice more.` }, null],
          try: { label: "Factor 104", lab: "mode:1,n:104" },
          link: `Factor both numbers with steps 1 and 2, then cancel the primes they share. Practice item 4 factors <span class="m">1,001 = 7 × 11 × 13</span> the same way.` },
        { task: "Finding how many ways items can be packed evenly", check: { q: `A tray holds 48 muffins in 6 rows of 8. How many box sizes pack all 48 into equal boxes with none left over?`, parts: [{ label: "box sizes", ans: 10 }], hint: `Factor 48, then add 1 to each exponent and multiply.` }, figure: "6 rows of 8",
          demo: { kind: "array", rows: 6, cols: 8, unit: "muffin", alt: "Muffins fill a tray one row at a time, 8 per row, until 6 rows make 48." },
          lines: [{ math: `48 = 6 × 8`, note: "The tray gives one split." }, { math: `6 = 2 × 3, &nbsp;8 = 2 × 2 × 2`, note: "Split each piece into primes." }, { math: `48 = 2<sup>4</sup> × 3`, note: "Four 2s and one 3." }, { math: `(4 + 1) × (1 + 1) = 10`, note: "1, 2, 3, 4, 6, 8, 12, 16, 24 and 48: 10 box sizes." }],
          predict: [null, null, { ask: `How many 2s are in 48 in all?`, parts: [{ label: "number of 2s", ans: 4 }], hint: `One 2 from the 6 and three from the 8.` }, null],
          link: `This is the last line of the cookie walk: add 1 to each exponent and multiply, as <span class="m">(3 + 1) × (2 + 1) = 12</span> did for 72.` },
        { task: "Checking whether a number can be split into equal groups", check: { q: `77 volunteers want equal teams, with more than one team and more than one person on each. What is the smallest number of teams that works?`, parts: [{ label: "teams", ans: 7 }], hint: `Test the primes in order: 2, 3, 5, 7. Stop at the first one that divides 77.` }, figure: "77 looks prime",
          demo: { kind: "array", rows: 7, cols: 11, unit: "volunteer", alt: "Volunteers line up one row at a time, 11 per row, until 7 rows make 77." },
          lines: [{ math: `77 is odd`, note: "2 does not divide it." }, { math: `7 + 7 = 14`, note: "The digits sum to 14, not a multiple of 3. 3 does not divide it." }, { math: `77 ends in 7`, note: "Not 0 or 5, so 5 does not divide it." }, { math: `77 = 7 × 11`, note: "7 divides it: 7 teams of 11." }],
          predict: [null, { ask: `Add the digits of 77. What do you get?`, parts: [{ label: "digit sum", ans: 14 }], hint: `7 + 7.` }, null, null],
          link: `Step 3 says you only test primes up to <span class="m">√77 ≈ 8.8</span>, so 2, 3, 5 and 7 settle it. Like 91 in the Concept tab, 77 is odd and still splits.` },
        { task: "Understanding why website padlock icons mean a connection is encrypted", check: { q: `A toy lock publishes 35, the product of two secret primes. Find the two primes.`, parts: [{ label: "smaller prime", ans: 5 }, { label: "larger prime", ans: 7 }], hint: `Try 2, then 3, then 5.` }, figure: "5 × 7",
          demo: { kind: "array", rows: 5, cols: 7, unit: "square", alt: "Squares fill in one row at a time, 7 per row, until 5 rows make 35." },
          lines: [{ math: `35 is odd`, note: "2 fails." }, { math: `3 + 5 = 8`, note: "8 is not a multiple of 3, so 3 fails." }, { math: `35 ÷ 5 = 7`, note: "35 ends in 5, so 5 divides it. The secret primes are 5 and 7." }, { math: `5 × 7 = 35`, note: "Locking took one multiplication. Unlocking took three tries. With primes about 309 digits long, the tries would take far too long." }],
          predict: [null, null, { ask: `What is 35 ÷ 5?`, parts: [{ label: "35 ÷ 5", ans: 7 }], hint: `Count by fives up to 35.` }, null],
          link: `Step 5, multiplying back, is fast. Steps 1 to 3 take far too long for numbers hundreds of digits long, and encryption relies on that gap.` }
      ]
    },
    formal: {
      question: { text: "What is a prime, exactly?", sub: `You can factor a number and check the answer. Here are the words a textbook uses for the same ideas, and how to write a factorization problem out in full.`,
        figure: { sym: `<i>n</i>`, value: "360", cap: "the integer factored", echo: "n" },
        jump: [{ label: "Vocabulary", to: "f-vocab" }, { label: "Where it goes wrong", to: "f-mist" }, { label: "Writing it out", to: "f-setup" }, { label: "Practice", to: "f-prac" }] },
      vocabTitle: "From your words to the textbook's",
      vocabIntro: `<p>Each card is an idea you already used in the Concept and Intermediate tabs, with its proper name and its exact meaning.</p>`,
      vocab: [
        { c: "c2", sym: `<i>a</i> | <i>b</i>`, term: "Divisor", def: `A nonzero integer <i>a</i> divides <i>b</i>, written <span class="m"><i>a</i> | <i>b</i></span>, when <span class="m"><i>b</i> = <i>ak</i></span> for some integer <i>k</i>. Then <i>a</i> is a divisor (factor) of <i>b</i> and <i>b</i> is a multiple of <i>a</i>.`, was: "a number of equal rows that uses every item" },
        { c: "c1", sym: `<i>p</i>`, term: "Prime number", def: `An integer <span class="m"><i>p</i> &gt; 1</span> whose only positive divisors are 1 and <i>p</i>.`, was: "a number that makes only one row" },
        { c: "c2", sym: `<i>n</i> = <i>ab</i>`, term: "Composite number", def: `An integer <span class="m"><i>n</i> &gt; 1</span> that is not prime; equivalently, <span class="m"><i>n</i> = <i>ab</i></span> with <span class="m">1 &lt; <i>a</i>, <i>b</i> &lt; <i>n</i></span>.`, was: "a number that splits into equal rows" },
        { c: "c1", sym: `1`, term: "Unit", def: `The integer 1 has exactly one positive divisor, so it is neither prime nor composite.`, was: "the number that is never prime" },
        { c: "c3", sym: `<i>p</i><sup>2</sup>, <i>p</i><sup>2</sup> + <i>p</i>, …`, term: "Sieve of Eratosthenes", def: `List 2, …, <i>N</i>. Take the least unmarked <i>p</i> as prime and strike its multiples from <span class="m"><i>p</i><sup>2</sup></span>; stop once <span class="m"><i>p</i><sup>2</sup> &gt; <i>N</i></span>. The unstruck numbers are the primes up to <i>N</i>.`, was: "crossing out the multiples" },
        { c: "c4", sym: `<i>p</i><sup><i>e</i></sup>`, term: "Multiplicity (exponent)", def: `The exponent of <i>p</i> in <i>n</i> is the largest <i>e</i> with <span class="m"><i>p</i><sup><i>e</i></sup> | <i>n</i></span>.`, was: "how many times a prime repeats" },
        { c: "c2", sym: `<i>p</i><sub>1</sub><sup><i>e</i><sub>1</sub></sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup>`, term: "Fundamental Theorem of Arithmetic", def: `Every integer <span class="m"><i>n</i> &gt; 1</span> is a product of primes, and the product is unique apart from the order of the factors. Written with <span class="m"><i>p</i><sub>1</sub> &lt; ⋯ &lt; <i>p</i><sub><i>k</i></sub></span>, it is the canonical form.`, was: "every split ends at the same primes" },
        { c: "c4", sym: `<i>d</i>(<i>n</i>)`, term: "Number of divisors", def: `For <span class="m"><i>n</i> = <i>p</i><sub>1</sub><sup><i>e</i><sub>1</sub></sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>, the positive divisors number <span class="m"><i>d</i>(<i>n</i>) = (<i>e</i><sub>1</sub> + 1) ⋯ (<i>e</i><sub><i>k</i></sub> + 1)</span>.`, was: "the number of box sizes" }
      ],
      matters: { title: "Why the exact words matter", text: `<p>“Exactly two positive divisors” is what keeps <b>1 out of the primes</b>, and that choice keeps factorizations unique.</p><ul class="why-chips"><li><span class="m">6 = 2 × 3</span></li><li><span class="m">6 = 1 × 2 × 3</span></li><li><span class="m">6 = 1 × 1 × 2 × 3</span></li></ul><p>If 1 counted as prime, 6 would have <b>endless factorizations</b>, and the Fundamental Theorem of Arithmetic would be false as stated.</p>` },
      mistakesTitle: "Where formal answers go wrong",
      mistakesLead: `Most wrong answers call a number prime too soon, stop before every factor is prime, or count divisors from the exponents alone.`,
      setupIntro: `<p>The cookies from the Concept tab, written the way a textbook would.</p>`,
      setup: { title: "Writing a prime factorization", items: [
        { say: `<b>Name the number.</b> Say what <i>n</i> counts.`, math: `<span class="m"><span class="c2"><i>n</i></span> = 72</span> cookies` },
        { say: `<b>Write the general form.</b> Each prime carries an exponent: how many times it appears.`, math: `<span class="m"><i>n</i> = <span class="c1"><i>p</i></span><sub>1</sub><sup><i>e</i><sub>1</sub></sup> × <span class="c1"><i>p</i></span><sub>2</sub><sup><i>e</i><sub>2</sub></sup> × ⋯ × <span class="c1"><i>p</i></span><sub><i>k</i></sub><sup><i>e</i><sub><i>k</i></sub></sup></span>` },
        { say: `<b>Justify the method.</b> A composite number has a prime factor no larger than its square root, so trial division by primes up to √<i>n</i> is enough. The Fundamental Theorem of Arithmetic makes the result unique.`, math: `<span class="m">√72 ≈ 8.49</span>, so at most the primes 2, 3, 5, 7` },
        { say: `<b>Compute.</b> Divide out each prime in turn and record its exponent.`, math: `<span class="m">72 ÷ 2 ÷ 2 ÷ 2 = 9, &nbsp;9 ÷ 3 ÷ 3 = 1</span> → <span class="m">72 = 2<sup>3</sup> × 3<sup>2</sup></span>` },
        { say: `<b>Use it and answer.</b> The number of divisors is the product of (exponent + 1). State the result in a sentence.`, math: `<span class="m"><i>d</i>(72) = (3 + 1)(2 + 1) = 12</span> → 12 box sizes are possible.` }
      ] },
      practiceTip: `Type your answer and press Check. Work it the formal way: divide out the smallest prime, stop at the square root, and multiply back. Stuck? Each one has a hint.`,
      practiceDone: "All 5 solved. You can factor a number into primes the formal way.",
      checks: [
        { hint: `Add the digits of 51. If the sum is a multiple of 3, so is 51.`, parts: [{ label: "smallest prime factor", ans: 3 }, { label: "other factor", ans: 17 }] },
        { hint: `Divide by 2 while you can: 84, 42, 21. Then try 3.`, parts: [{ label: "exponent of 2", ans: 2 }, { label: "largest prime", ans: 7 }] },
        { hint: `<span class="m">√211 ≈ 14.5</span>. Which primes are 14 or less?`, parts: [{ label: "largest prime you must test", ans: 13 }] },
        { hint: `Try 7 first: 1,001 ÷ 7 = 143. Then factor 143.`, parts: [{ label: "smallest prime", ans: 7 }, { label: "largest prime", ans: 13 }] },
        { hint: `<span class="m">200 = 2 × 100</span> and <span class="m">100 = 2<sup>2</sup> × 5<sup>2</sup></span>. Add 1 to each exponent and multiply.`, parts: [{ label: "d", ans: 12 }] }
      ]
    }
  },
  prereqWhy: {
    "factors": "A prime is defined by its factors, and factor trees are built from factor pairs."
  },
  unlocksWhy: {
    "gcf-lcm": "The GCF and LCM can be read off prime factorizations by taking the smaller or larger exponent of each prime."
  },
  beyond: [
    { field: "Number theory", why: "Primes, their distribution and unique factorization are its foundation." },
    { field: "Abstract algebra", why: "Prime and irreducible elements generalize primes to other number systems and polynomial rings." },
    { field: "Cryptography", why: "RSA and many other systems are built directly on prime numbers." }
  ],
  mistakes: [
    { wrong: `"1 is prime"`, fix: `A prime must have exactly two positive factors. 1 has only one, so it is neither prime nor composite.` },
    { wrong: `"51 and 91 are prime because they are odd"`, fix: `<span class="m">51 = 3 × 17</span> and <span class="m">91 = 7 × 13</span>. Odd does not mean prime.` },
    { wrong: `Stopping the factor tree at <span class="m">72 = 8 × 9</span>`, fix: `Every leaf must be prime. 8 splits into <span class="m">2 × 2 × 2</span> and 9 into <span class="m">3 × 3</span>.` },
    { wrong: `Deciding 91 is prime after trying only 2, 3 and 5`, fix: `Keep testing primes up to <span class="m">√91 ≈ 9.5</span>. The next one, 7, divides it: <span class="m">91 = 7 × 13</span>.` },
    { wrong: `<span class="m">72 = 2<sup>3</sup> × 3<sup>2</sup></span>, so 72 has <span class="m">3 × 2 = 6</span> divisors`, fix: `Each exponent can also be 0, so add 1 first: <span class="m"><i>d</i>(72) = (3 + 1)(2 + 1) = 12</span>.` }
  ],
  practice: [
    { ctx: "Events", q: `51 guests arrive for a dinner. Can they sit at more than one table with the same number of people, more than one, at each? In other words, is 51 composite?`, a: `Yes. Its digits sum to 6, so 3 divides it: <span class="m">51 = 3 × 17</span>. That gives 3 tables of 17 or 17 tables of 3.` },
    { ctx: "Retail", q: `A shop has 84 candles to pack into identical gift sets. Find the prime factorization of 84.`, a: `<span class="m">84 = 2<sup>2</sup> × 3 × 7</span>. 84 → 42 → 21 → 7, dividing by 2, 2, 3.` },
    { ctx: "Warehouse", q: `211 boxes must be stacked in a rectangle with more than one row and more than one column. Is that possible? (Is 211 prime?)`, a: `No. 211 is prime: √211 ≈ 14.5, and none of 2, 3, 5, 7, 11, 13 divides 211. The only arrangement is a single row.` },
    { ctx: "Catering", q: `A caterer has 1,001 dumplings to share out evenly. Find the prime factorization of 1,001 to see the possible group sizes.`, a: `<span class="m">1,001 = 7 × 11 × 13</span>. 1,001 ÷ 7 = 143, and 143 = 11 × 13.` },
    { ctx: "Office", q: `Write an expression with a letter for the unknown, then solve: a printer has 200 sheets and wants every stack size that uses all the sheets in equal stacks. Let <i>d</i> be the number of possible stack sizes. Factor 200 and find <i>d</i>.`, a: `<span class="m">200 = 2<sup>3</sup> × 5<sup>2</sup></span>, so <span class="m"><i>d</i> = (3 + 1)(2 + 1) = 12</span>. There are <b>12</b> stack sizes: 1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100 and 200.` }
  ],
  origin: `Euclid's <i>Elements</i> (around 300 BCE) proves there are infinitely many primes (Book IX, Proposition 20). The sieve is credited to Eratosthenes of Cyrene (3rd century BCE) by the later writer Nicomachus. Gauss gave what is generally taken as the first proof that the factorization is unique, in <i>Disquisitiones Arithmeticae</i> (1801).`
};
