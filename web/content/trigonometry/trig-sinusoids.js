window.ARITH = window.ARITH || {};
ARITH["trig-sinusoids"] = {
  title: "Amplitude, Period, Phase Shift & Midline",
  short: "Stretching and shifting sine and cosine",
  grade: "Grade 11–12 · college Trigonometry",
  hours: 6,
  voice: "plain",
  eyebrow: "Graphs & inverses · sinusoidal functions",
  hero: `<span class="m"><i>y</i> = <span class="c3"><i>A</i></span> sin(<span class="c2"><i>B</i></span>(<i>x</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span> &nbsp;&nbsp; period <span class="fr"><span>2π</span><span>|<span class="c2"><i>B</i></span>|</span></span></span>`,
  lede: `Every wave of sine or cosine shape is the plain graph stretched and slid. Four numbers say how: the <b>amplitude</b> <span class="m">|<span class="c3"><i>A</i></span>|</span>, the <b>period</b> <span class="m">2π/|<span class="c2"><i>B</i></span>|</span>, the <b>phase shift</b> <span class="m c1"><i>C</i></span> and the <b>midline</b> <span class="m"><i>y</i> = <span class="c4"><i>D</i></span></span>.`,
  plain: `<p>The plain wave <span class="m c5"><i>y</i> = sin <i>x</i></span> swings 1 unit above and below the <span class="m"><i>x</i></span>-axis and repeats every <span class="m">2π</span>. A real wave, such as a tide or a sound, swings further, repeats faster or slower, starts somewhere else and sits at some other level.</p>
<p>The four numbers in <span class="m"><i>y</i> = <span class="c3"><i>A</i></span> sin(<span class="c2"><i>B</i></span>(<i>x</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span></span> handle exactly those changes. <span class="m c3"><i>A</i></span> stretches the wave up and down (a negative <span class="m c3"><i>A</i></span> also flips it). <span class="m c2"><i>B</i></span> squeezes it sideways, so it fits more cycles into the same space. <span class="m c1"><i>C</i></span> slides it right or left. <span class="m c4"><i>D</i></span> lifts it up or down.</p>
<p>These are the same moves as for any graph <span class="m"><i>a f</i>(<i>b</i>(<i>x</i> − <i>h</i>)) + <i>k</i></span>. Waves just have their own names for the results: how tall, how long, how late, and how high the centre line sits.</p>`,
  formal: `<p>A <b>sinusoidal function</b> has the form</p>
<div class="display"><i>y</i> = <span class="c3"><i>A</i></span> sin(<span class="c2"><i>B</i></span>(<i>x</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span> &nbsp;&nbsp; or &nbsp;&nbsp; <i>y</i> = <span class="c3"><i>A</i></span> cos(<span class="c2"><i>B</i></span>(<i>x</i> − <span class="c1"><i>C</i></span>)) + <span class="c4"><i>D</i></span>, &nbsp; <span class="c3"><i>A</i></span> ≠ 0, <span class="c2"><i>B</i></span> ≠ 0</div>
<p>with <b>amplitude</b> <span class="m">|<span class="c3"><i>A</i></span>|</span>, <b>period</b> <span class="m">2π/|<span class="c2"><i>B</i></span>|</span>, <b>phase shift</b> <span class="m c1"><i>C</i></span> (right if <span class="m"><i>C</i> &gt; 0</span>, left if <span class="m"><i>C</i> &lt; 0</span>), <b>midline</b> <span class="m"><i>y</i> = <span class="c4"><i>D</i></span></span> and <b>range</b> <span class="m">[<span class="c4"><i>D</i></span> − |<span class="c3"><i>A</i></span>|, <span class="c4"><i>D</i></span> + |<span class="c3"><i>A</i></span>|]</span>. For <span class="m"><i>B</i> &gt; 0</span>, the argument <span class="m"><i>B</i>(<i>x</i> − <i>C</i>)</span> runs from 0 to <span class="m">2π</span> as <span class="m"><i>x</i></span> runs from <span class="m"><i>C</i></span> to <span class="m"><i>C</i> + 2π/<i>B</i></span>; that is one full cycle. If <span class="m"><i>A</i> &lt; 0</span> the graph is also reflected across the midline. A negative <span class="m"><i>B</i></span> can be made positive with <span class="m">sin(−<i>u</i>) = −sin <i>u</i></span> or <span class="m">cos(−<i>u</i>) = cos <i>u</i></span>.</p>
<p>Many books write <span class="m"><i>y</i> = <i>A</i> sin(<i>Bx</i> − <i>C</i>) + <i>D</i></span> instead; there the phase shift is <span class="m"><i>C</i>/<i>B</i></span>, because <span class="m"><i>Bx</i> − <i>C</i> = <i>B</i>(<i>x</i> − <i>C</i>/<i>B</i>)</span>. This page always uses the factored form <span class="m"><i>B</i>(<i>x</i> − <i>C</i>)</span>, so <span class="m c1"><i>C</i></span> is the shift itself. The five <b>key points</b> of one period sit at <span class="m"><i>x</i> = <i>C</i>, <i>C</i> + <i>P</i>/4, <i>C</i> + <i>P</i>/2, <i>C</i> + 3<i>P</i>/4, <i>C</i> + <i>P</i></span> where <span class="m"><i>P</i></span> is the period; for sine with <span class="m"><i>A</i> &gt; 0</span> their heights are midline, maximum, midline, minimum, midline.</p>`,
  legend: [
    { c: "c3", sym: `<i>A</i>`, name: "Amplitude factor", desc: "Vertical stretch; |A| is the distance from the midline to a peak, and A < 0 flips the wave." },
    { c: "c2", sym: `<i>B</i>`, name: "Frequency factor", desc: "Horizontal squeeze; the period is 2π/|B|." },
    { c: "c1", sym: `<i>C</i>`, name: "Phase shift", desc: "Horizontal slide: right by C when C > 0, in the form B(x − C)." },
    { c: "c4", sym: `<i>D</i>`, name: "Midline", desc: "Vertical shift; the wave is centred on the line y = D." },
    { c: "c5", sym: `sin <i>x</i>`, name: "Parent graph", desc: "The plain sine or cosine wave, drawn dashed for comparison." }
  ],
  steps: {
    title: "How to graph y = A sin(B(x − C)) + D",
    items: [
      `Read the four numbers. If the inside is <span class="m"><i>Bx</i> − <i>c</i></span>, factor out <span class="m c2"><i>B</i></span> first: the shift is <span class="m"><i>c</i>/<i>B</i></span>.`,
      `Find the amplitude <span class="m">|<span class="c3"><i>A</i></span>|</span>, the period <span class="m"><i>P</i> = 2π/|<span class="c2"><i>B</i></span>|</span>, the midline <span class="m"><i>y</i> = <span class="c4"><i>D</i></span></span> and the range <span class="m">[<i>D</i> − |<i>A</i>|, <i>D</i> + |<i>A</i>|]</span>.`,
      `Start one period at <span class="m"><i>x</i> = <span class="c1"><i>C</i></span></span> and mark four equal quarter steps of <span class="m"><i>P</i>/4</span>.`,
      `Give the five points their heights: for sine midline, max, midline, min, midline; for cosine max, midline, min, midline, max (swap max and min when <span class="m"><i>A</i> &lt; 0</span>).`,
      `Join with a smooth wave and repeat it every period.`
    ]
  },
  example: {
    prompt: `Find the amplitude, period, phase shift, midline and range of <span class="m"><i>y</i> = <span class="c3">3</span> sin(<span class="c2">2</span>(<i>x</i> − <span class="c1">π/4</span>)) + <span class="c4">1</span></span>, and list the five key points of one period.`,
    lines: [
      { math: `<span class="m">amplitude |<span class="c3">3</span>| = 3, &nbsp; period <span class="fr"><span>2π</span><span><span class="c2">2</span></span></span> = π</span>`, note: "B = 2 fits two cycles into every 2π." },
      { math: `<span class="m">phase shift <span class="c1">π/4</span> right, &nbsp; midline <i>y</i> = <span class="c4">1</span></span>`, note: "Read C and D straight from the form B(x − C) + D." },
      { math: `<span class="m">range [1 − 3, 1 + 3] = [−2, 4]</span>`, note: "The wave reaches 3 above and 3 below the midline." },
      { math: `<span class="m"><i>x</i> = π/4, π/2, 3π/4, π, 5π/4</span>`, note: "Start at C = π/4 and add quarter periods of π/4." },
      { math: `<span class="m"><i>y</i> = 1, 4, 1, −2, 1</span>`, note: "Sine with A > 0: midline, maximum, midline, minimum, midline." }
    ],
    answer: `Amplitude <span class="m">3</span>, period <span class="m">π</span>, phase shift <span class="m">π/4</span> right, midline <span class="m"><i>y</i> = 1</span>, range <span class="m">[−2, 4]</span>; key points <span class="m c5">(π/4, 1)</span>, <span class="m c5">(π/2, 4)</span>, <span class="m c5">(3π/4, 1)</span>, <span class="m c5">(π, −2)</span>, <span class="m c5">(5π/4, 1)</span>`
  },
  why: `<p>Real cycles are rarely the plain sine wave. Daylight hours swing about 12 hours on a 365-day period; household voltage in North America swings about 170 volts either side of zero, 60 times a second; at many coasts the tide rises and falls around a mean level about twice a day. Reading A, B, C and D from a formula, or writing them down from a graph or a table of highs and lows, is the step that turns these cycles into functions you can calculate with.</p>`,
  careers: [
    { role: "Electrical engineer", use: "Describes AC signals by amplitude, frequency and phase, and lines up the phases of three-phase power." },
    { role: "Oceanographer", use: "Writes tide predictions as sinusoids with a mean level, a range and a period of about 12.4 hours." },
    { role: "Climatologist", use: "Fits seasonal temperature and daylight cycles with a midline, amplitude and phase shift." },
    { role: "Audio engineer", use: "Adjusts gain (amplitude) and delay (phase) of signals so speakers reinforce rather than cancel." },
    { role: "Biomedical engineer", use: "Reads heart and breathing rhythms as periodic signals with a measurable period and amplitude." },
    { role: "Game developer", use: "Animates bobbing and pulsing objects with A sin(B(t − C)) + D, tuning each number for the look." }
  ],
  life: [
    "Hours of daylight through the year",
    "The height of a seat on a Ferris wheel",
    "High and low tides at a beach",
    "Louder (larger amplitude) and higher (shorter period) musical notes",
    "Average monthly temperature in a city"
  ],
  fields: [
    { name: "Physics", use: "Waves and oscillations are written with an amplitude, angular frequency and phase constant." },
    { name: "Electrical engineering", use: "Alternating current is a sinusoid in time with a frequency and a phase angle." },
    { name: "Earth science", use: "Tides, seasons and daylight are modelled with midlines, amplitudes and periods." },
    { name: "Music acoustics", use: "Pitch is set by the period and loudness by the amplitude of a sound wave." }
  ],
  prereqWhy: {
    "trig-sin-cos-graphs": "Every sinusoid is built from the plain sine or cosine graph and its five key points.",
    "a2-transformations": "A, B, C and D are the vertical stretch, horizontal compression, horizontal shift and vertical shift of a f(b(x − h)) + k."
  },
  unlocksWhy: {
    "trig-modeling": "Fitting tides, daylight or a Ferris wheel means finding A, B, C and D from real data.",
    "trig-polar-graphs": "Polar curves such as r = 2 + 4 cos θ and r = 3 sin 2θ use the same amplitudes, periods and midlines, now wrapped around the pole.",
    "pc-parametric": "Circles and ellipses are parametrised as (<i>a</i> cos <i>t</i>, <i>b</i> sin <i>t</i>), using sine and cosine with their amplitudes and periods as functions of a parameter."
  },
  beyond: [
    { field: "Physics (Waves)", why: "A travelling wave A sin(kx − ωt + φ) has an amplitude, a wavelength 2π/k and a phase, the same three ideas." },
    { field: "Differential Equations", why: "Solutions of oscillator equations are written as a single sinusoid with an amplitude and a phase shift." },
    { field: "Music acoustics", why: "Combining sinusoids of different periods and phases explains beats, chords and timbre." }
  ],
  mistakes: [
    { wrong: `The phase shift of <span class="m"><i>y</i> = sin(2<i>x</i> − π)</span> is <span class="m">π</span>.`, fix: `Factor first: <span class="m">2<i>x</i> − π = 2(<i>x</i> − π/2)</span>, so the shift is <span class="m">π/2</span> right.` },
    { wrong: `The period of <span class="m">sin 3<i>x</i></span> is <span class="m">6π</span>.`, fix: `A larger <span class="m"><i>B</i></span> squeezes the wave: the period is <span class="m">2π/3</span>.` },
    { wrong: `The amplitude of <span class="m"><i>y</i> = −4 cos <i>x</i></span> is −4.`, fix: `Amplitude is a distance, <span class="m">|−4| = 4</span>; the sign only flips the wave.` },
    { wrong: `The range of <span class="m"><i>y</i> = 2 sin <i>x</i> + 5</span> is <span class="m">[−2, 2]</span>.`, fix: `The midline moves up to 5, so the range is <span class="m">[5 − 2, 5 + 2] = [3, 7]</span>.` }
  ],
  practice: [
    { q: `Find the amplitude, period, midline and range of <span class="m"><i>y</i> = −2 cos(<i>x</i>/2) + 3</span>.`, a: `Amplitude <span class="m">|−2| = 2</span>, period <span class="m">2π/(1/2) = 4π</span>, midline <span class="m"><i>y</i> = 3</span>, range <span class="m">[3 − 2, 3 + 2] = [1, 5]</span>.` },
    { q: `Find the amplitude, period and phase shift of <span class="m"><i>y</i> = 4 sin(3<i>x</i> − π)</span>.`, a: `<span class="m">3<i>x</i> − π = 3(<i>x</i> − π/3)</span>. Amplitude 4, period <span class="m">2π/3</span>, phase shift <span class="m">π/3</span> to the right.` },
    { q: `List the five key points of one period of <span class="m"><i>y</i> = 2 cos(π<i>x</i>) − 1</span>, starting at <span class="m"><i>x</i> = 0</span>, and give the range.`, a: `Period <span class="m">2π/π = 2</span>, quarter period <span class="m">1/2</span>. Points <span class="m">(0, 1), (1/2, −1), (1, −3), (3/2, −1), (2, 1)</span>; range <span class="m">[−3, 1]</span>.` },
    { q: `A sinusoid has a maximum of 7 at <span class="m"><i>x</i> = π/6</span>, and the next minimum is −1 at <span class="m"><i>x</i> = 2π/3</span>. Write it as a cosine and as a sine in the form <span class="m"><i>A</i> sin(<i>B</i>(<i>x</i> − <i>C</i>)) + <i>D</i></span> with <span class="m"><i>A</i>, <i>B</i> &gt; 0</span>.`, a: `<span class="m"><i>A</i> = (7 − (−1))/2 = 4</span>, <span class="m"><i>D</i> = (7 + (−1))/2 = 3</span>. Half a period is <span class="m">2π/3 − π/6 = π/2</span>, so <span class="m"><i>P</i> = π</span> and <span class="m"><i>B</i> = 2</span>. A cosine peaks at its start: <span class="m"><i>y</i> = 4 cos(2(<i>x</i> − π/6)) + 3</span>. A sine peaks a quarter period (<span class="m">π/4</span>) after its start: <span class="m"><i>C</i> = π/6 − π/4 = −π/12</span>, so <span class="m"><i>y</i> = 4 sin(2(<i>x</i> + π/12)) + 3</span>.` }
  ]
};
