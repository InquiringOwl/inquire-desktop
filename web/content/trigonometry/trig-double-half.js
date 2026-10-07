window.ARITH = window.ARITH || {};
ARITH["trig-double-half"] = {
  title: `Double-Angle, Half-Angle & Power-Reducing Formulas`,
  short: `sin 2θ, cos 2θ, sin² θ and sin(θ/2) from the sum formulas`,
  grade: `Grade 11–12 · college Trigonometry`,
  hours: 7,
  voice: `plain`,
  eyebrow: `Identities · double and half angles`,
  hero: `<span class="m">sin <span class="c5">2<i>θ</i></span> = 2 sin <span class="c1"><i>θ</i></span> cos <span class="c1"><i>θ</i></span></span>`,
  lede: `Put <span class="m">β = α</span> in the sum formulas and you get the double-angle formulas. Solve the cosine one for <span class="m">sin<sup>2</sup> <i>θ</i></span> or <span class="m">cos<sup>2</sup> <i>θ</i></span> and you get the power-reducing formulas; replace <span class="m"><i>θ</i></span> by <span class="m"><i>θ</i>/2</span> and you get the half-angle formulas.`,
  plain: `<p>Doubling an angle does not double its sine. <span class="m">sin 60° ≈ 0.866</span>, while <span class="m">2 sin 30° = 1</span>. The graph of <span class="m">sin 2<i>x</i></span> squeezes the sine wave into half the period with the same height 1; the graph of <span class="m">2 sin <i>x</i></span> stretches it to height 2 with the same period. They are different functions.</p><p>The correct rule comes from the sum formula with both angles equal: <span class="m">sin(<i>θ</i> + <i>θ</i>) = sin <i>θ</i> cos <i>θ</i> + cos <i>θ</i> sin <i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i></span>. The same move on cosine gives <span class="m">cos 2<i>θ</i> = cos<sup>2</sup> <i>θ</i> − sin<sup>2</sup> <i>θ</i></span>, and the Pythagorean identity turns that into two more forms.</p><p>Read backwards, the cosine formula trades a square for a double angle: <span class="m">sin<sup>2</sup> <i>θ</i> = <span class="fr"><span>1 − cos 2<i>θ</i></span><span>2</span></span></span>. That is <b>power reducing</b>. Write <span class="m"><i>θ</i></span> in place of <span class="m">2<i>θ</i></span>, take a square root, and you have a <b>half-angle formula</b>. The square root brings a <span class="m"><span class="c3">±</span></span> sign, and the quadrant of <span class="m"><span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span></span> decides which sign is right.</p>`,
  formal: `<p><b>Double-angle formulas</b>:</p><div class="display">sin <span class="c5">2<i>θ</i></span> = 2 sin <i>θ</i> cos <i>θ</i><br>cos <span class="c5">2<i>θ</i></span> = cos<sup>2</sup> <i>θ</i> − sin<sup>2</sup> <i>θ</i> = 2 cos<sup>2</sup> <i>θ</i> − 1 = 1 − 2 sin<sup>2</sup> <i>θ</i><br>tan <span class="c5">2<i>θ</i></span> = <span class="fr"><span>2 tan <i>θ</i></span><span>1 − tan<sup>2</sup> <i>θ</i></span></span></div><p><b>Power-reducing formulas</b>:</p><div class="display">sin<sup>2</sup> <i>θ</i> = <span class="fr"><span>1 − cos 2<i>θ</i></span><span>2</span></span> &nbsp;&nbsp; cos<sup>2</sup> <i>θ</i> = <span class="fr"><span>1 + cos 2<i>θ</i></span><span>2</span></span> &nbsp;&nbsp; tan<sup>2</sup> <i>θ</i> = <span class="fr"><span>1 − cos 2<i>θ</i></span><span>1 + cos 2<i>θ</i></span></span></div><p><b>Half-angle formulas</b>, with the sign <span class="m"><span class="c3">±</span></span> chosen by the quadrant in which <span class="m"><span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span></span> lies:</p><div class="display">sin <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="c3">±</span>√<span class="ov"><span class="fr"><span>1 − cos <i>θ</i></span><span>2</span></span></span> &nbsp;&nbsp; cos <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="c3">±</span>√<span class="ov"><span class="fr"><span>1 + cos <i>θ</i></span><span>2</span></span></span><br>tan <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="c3">±</span>√<span class="ov"><span class="fr"><span>1 − cos <i>θ</i></span><span>1 + cos <i>θ</i></span></span></span> = <span class="fr"><span>sin <i>θ</i></span><span>1 + cos <i>θ</i></span></span> = <span class="fr"><span>1 − cos <i>θ</i></span><span>sin <i>θ</i></span></span></div><p>The last two forms of <span class="m">tan(<i>θ</i>/2)</span> need no sign choice, because <span class="m">1 ± cos <i>θ</i> ≥ 0</span> and <span class="m">sin <i>θ</i></span> has the sign of <span class="m">tan(<i>θ</i>/2)</span>. For example <span class="m">sin 22.5° = √<span class="ov"><span class="fr"><span>1 − cos 45°</span><span>2</span></span></span> = <span class="fr"><span>√<span class="ov">2 − √<span class="ov">2</span></span></span><span>2</span></span></span>, with + because 22.5° is in QI.</p><p><b>Projectile range.</b> Launched from level ground at speed <span class="m"><i>v</i></span> and angle <span class="m"><span class="c1"><i>θ</i></span></span>, with no air resistance, a projectile lands at distance <span class="m"><i>R</i> = <span class="fr"><span>v<sup>2</sup> sin <span class="c5">2<i>θ</i></span></span><span><i>g</i></span></span></span>. The range is largest when <span class="m">sin 2<i>θ</i> = 1</span>, at <span class="m"><i>θ</i> = 45°</span>, and the angles <span class="m"><i>θ</i></span> and <span class="m">90° − <i>θ</i></span> give the same range because <span class="m">sin(180° − 2<i>θ</i>) = sin 2<i>θ</i></span>. At <span class="m"><i>v</i> = 20 m/s</span> and <span class="m"><i>g</i> = 9.8 m/s<sup>2</sup></span> the range is about 40.8 m at 45° and about 35.3 m at both 30° and 60°.</p>`,
  legend: [
    {
      c: `c1`,
      sym: `<i>θ</i>`,
      name: `Angle`,
      desc: `The angle you know something about, often only its cosine and a range.`
    },
    {
      c: `c5`,
      sym: `2<i>θ</i>`,
      name: `Double angle`,
      desc: `<span class="m">sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i></span>: doubling the angle does not double the value.`
    },
    {
      c: `c2`,
      sym: `<span class="fr"><span><i>θ</i></span><span>2</span></span>`,
      name: `Half angle`,
      desc: `It lies in its own quadrant, which can differ from the quadrant of θ.`
    },
    {
      c: `c3`,
      sym: `±`,
      name: `Sign`,
      desc: `Chosen by the quadrant of θ/2: the sign that sine, cosine or tangent has there.`
    }
  ],
  steps: {
    title: `How to find an exact value with a half-angle formula`,
    items: [
      `Write the angle as <span class="m"><i>θ</i>/2</span> for an angle <span class="m"><i>θ</i></span> whose cosine you know: <span class="m">22.5° = 45°/2</span>, <span class="m">165° = 330°/2</span>.`,
      `Find the quadrant of <span class="m"><i>θ</i>/2</span>. If only a range for <span class="m"><i>θ</i></span> is given, halve both ends: <span class="m">180° &lt; <i>θ</i> &lt; 270°</span> gives <span class="m">90° &lt; <i>θ</i>/2 &lt; 135°</span>.`,
      `Choose the sign: the sign that the function has in the quadrant of <span class="m"><i>θ</i>/2</span>, not of <span class="m"><i>θ</i></span>.`,
      `Substitute <span class="m">cos <i>θ</i></span> into the formula with that one sign.`,
      `Simplify the fraction under the root, and write <span class="m">√<span class="ov"><span class="fr"><span><i>a</i></span><span>4</span></span></span></span> as <span class="m"><span class="fr"><span>√<span class="ov"><i>a</i></span></span><span>2</span></span></span>.`,
      `Check the size: a sine or cosine is never more than 1 in absolute value.`
    ]
  },
  example: {
    prompt: `Given <span class="m">cos <span class="c1"><i>θ</i></span> = −<span class="fr"><span>7</span><span>25</span></span></span> with <span class="m">180° &lt; <span class="c1"><i>θ</i></span> &lt; 270°</span>, find <span class="m">sin <span class="c5">2<i>θ</i></span></span>, <span class="m">cos <span class="c5">2<i>θ</i></span></span>, <span class="m">sin <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span></span> and <span class="m">cos <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span></span>.`,
    lines: [
      { math: `<span class="m">sin <span class="c1"><i>θ</i></span> = −√<span class="ov">1 − <span class="fr"><span>49</span><span>625</span></span></span> = −<span class="fr"><span>24</span><span>25</span></span></span>`, note: `Pythagorean identity; sine is negative in QIII.` },
      { math: `<span class="m">sin <span class="c5">2<i>θ</i></span> = 2(−<span class="fr"><span>24</span><span>25</span></span>)(−<span class="fr"><span>7</span><span>25</span></span>) = <span class="c5"><span class="fr"><span>336</span><span>625</span></span></span></span>`, note: `sin 2θ = 2 sin θ cos θ.` },
      { math: `<span class="m">cos <span class="c5">2<i>θ</i></span> = 2(−<span class="fr"><span>7</span><span>25</span></span>)<sup>2</sup> − 1 = <span class="fr"><span>98</span><span>625</span></span> − 1 = <span class="c5">−<span class="fr"><span>527</span><span>625</span></span></span></span>`, note: `The form 2 cos² θ − 1 needs only cos θ.` },
      { math: `<span class="m">90° &lt; <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> &lt; 135°</span>, so <span class="m"><span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span></span> is in QII`, note: `Halve each end of the range of θ.` },
      { math: `<span class="m">sin <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="c3">+</span>√<span class="ov"><span class="fr"><span>1 + <span class="fr"><span>7</span><span>25</span></span></span><span>2</span></span></span> = √<span class="ov"><span class="fr"><span>16</span><span>25</span></span></span> = <span class="c2"><span class="fr"><span>4</span><span>5</span></span></span></span>`, note: `Sine is positive in QII.` },
      { math: `<span class="m">cos <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="c3">−</span>√<span class="ov"><span class="fr"><span>1 − <span class="fr"><span>7</span><span>25</span></span></span><span>2</span></span></span> = −√<span class="ov"><span class="fr"><span>9</span><span>25</span></span></span> = <span class="c2">−<span class="fr"><span>3</span><span>5</span></span></span></span>`, note: `Cosine is negative in QII.` }
    ],
    answer: `<span class="m">sin 2<i>θ</i> = <span class="fr"><span>336</span><span>625</span></span>, cos 2<i>θ</i> = −<span class="fr"><span>527</span><span>625</span></span>, sin <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = <span class="fr"><span>4</span><span>5</span></span>, cos <span class="c2"><span class="fr"><span><i>θ</i></span><span>2</span></span></span> = −<span class="fr"><span>3</span><span>5</span></span></span>. Check: <span class="m">cos<sup>2</sup>(<i>θ</i>/2) − sin<sup>2</sup>(<i>θ</i>/2) = <span class="fr"><span>9</span><span>25</span></span> − <span class="fr"><span>16</span><span>25</span></span> = −<span class="fr"><span>7</span><span>25</span></span> = cos <i>θ</i></span>.`
  },
  why: `<p>Double-angle and power-reducing formulas turn products and squares of trigonometric functions into single cosines of multiple angles. That is how equations like <span class="m">sin 2<i>x</i> = cos <i>x</i></span> are solved, and how calculus finds the area under <span class="m">sin<sup>2</sup> <i>x</i></span>: it rewrites <span class="m">sin<sup>2</sup> <i>x</i></span> as <span class="m"><span class="fr"><span>1 − cos 2<i>x</i></span><span>2</span></span></span> first.</p><p>Half-angle formulas give exact values at angles like 22.5° and 15°, and the range formula <span class="m"><i>R</i> = v<sup>2</sup> sin 2<i>θ</i>/<i>g</i></span> shows why 45° throws farthest on level ground.</p>`,
  careers: [
    { role: `Mechanical engineer`, use: `Finds the stress on a plane cut at angle θ through a loaded part; the normal and shear stresses depend on cos 2θ and sin 2θ (Mohr's circle).` },
    { role: `Electrical engineer`, use: `Computes the average power of an AC circuit by writing sin²(ωt) = (1 − cos 2ωt)/2, whose average over a cycle is 1/2.` },
    { role: `Sports scientist`, use: `Starts from R = v² sin 2θ/g for a throw, kick or jump, then corrects for release height and air drag.` },
    { role: `Optical engineer`, use: `Rewrites Malus's law I = I₀ cos² θ for a polarizer as I₀(1 + cos 2θ)/2 to analyse rotating filters.` },
    { role: `Signal processing engineer`, use: `Uses sin² ωt = (1 − cos 2ωt)/2 to see that squaring a signal produces a component at twice its frequency.` },
    { role: `Mathematics teacher`, use: `Derives the whole family from the sum formulas and drills the choice of sign by the quadrant of θ/2.` }
  ],
  life: [
    `Throwing a ball farthest by releasing it near 45°`,
    `Aiming a garden hose to reach the far edge of a lawn`,
    `Polarized sunglasses dimming a screen as you tilt your head`,
    `A lamp on AC power flickering at twice the line frequency`,
    `Folding a paper angle exactly in half`
  ],
  fields: [
    { name: `Physics`, use: `Projectile range and height, and average AC power, are computed with sin 2θ and sin² θ.` },
    { name: `Calculus`, use: `Integrals of sin² x and cos² x are found with the power-reducing formulas.` },
    { name: `Optics`, use: `Malus's law for polarized light, I = I₀ cos² θ, is often used in power-reduced form.` },
    { name: `Engineering`, use: `Stress transformation on an inclined plane uses sin 2θ and cos 2θ.` }
  ],
  prereqWhy: { "trig-sum-difference": `Each double-angle formula is a sum formula with β = α, and the half-angle formulas are the cos 2θ formula solved for a square.` },
  unlocksWhy: { "trig-equations-multi": `Equations such as sin 2x = cos x or cos 2x = sin x are solved by rewriting the double angle with these formulas and then factoring.`,
    "pc-rotation": "Eliminating the <i>xy</i> term requires the angle <i>θ</i> with cot 2<i>θ</i> = (<i>A</i> − <i>C</i>)/<i>B</i>, and the half-angle formulas then give sin <i>θ</i> and cos <i>θ</i> exactly for the rotation."
  },
  beyond: [
    { field: `Calculus II`, why: `Integrals of even powers of sine and cosine use the power-reducing formulas, and the substitution t = tan(x/2) turns any rational function of sine and cosine into a rational function of t.` },
    { field: `Physics (Mechanics)`, why: `The range and maximum height of a projectile, R = v² sin 2θ/g and H = v² sin² θ/(2g), come from these formulas.` },
    { field: `Physics (E&M)`, why: `The average power in an AC circuit is half the peak power because sin² ωt averages to 1/2.` }
  ],
  mistakes: [
    { wrong: `<span class="m">sin 2<i>x</i> = 2 sin <i>x</i></span>.`, fix: `At <span class="m"><i>x</i> = π/2</span> the left side is <span class="m">sin π = 0</span> and the right side is 2. The rule is <span class="m">sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i></span>; the graphs of <span class="m">sin 2<i>x</i></span> and <span class="m">2 sin <i>x</i></span> differ in period and in amplitude.` },
    { wrong: `<span class="m">sin(<i>θ</i>/2) = <span class="fr"><span>1</span><span>2</span></span> sin <i>θ</i></span>.`, fix: `With <span class="m"><i>θ</i> = 180°</span>: <span class="m">sin 90° = 1</span> but <span class="m"><span class="fr"><span>1</span><span>2</span></span> sin 180° = 0</span>. Use <span class="m">sin(<i>θ</i>/2) = ±√<span class="ov"><span class="fr"><span>1 − cos <i>θ</i></span><span>2</span></span></span></span>.` },
    { wrong: `<span class="m"><i>θ</i></span> is in QIII, so <span class="m">sin(<i>θ</i>/2)</span> is negative.`, fix: `The sign goes with the quadrant of <span class="m"><i>θ</i>/2</span>, not of <span class="m"><i>θ</i></span>. For <span class="m">180° &lt; <i>θ</i> &lt; 270°</span>, <span class="m"><i>θ</i>/2</span> is between 90° and 135°, in QII, where sine is positive.` },
    { wrong: `<span class="m">sin 22.5° = ±<span class="fr"><span>√<span class="ov">2 − √<span class="ov">2</span></span></span><span>2</span></span></span>.`, fix: `Only one sign is right. 22.5° is in QI, so <span class="m">sin 22.5° = <span class="fr"><span>√<span class="ov">2 − √<span class="ov">2</span></span></span><span>2</span></span></span>.` }
  ],
  practice: [
    { q: `<span class="m">sin <i>θ</i> = <span class="fr"><span>5</span><span>13</span></span></span> with <span class="m"><i>θ</i></span> in QI. Find <span class="m">sin 2<i>θ</i></span> and <span class="m">cos 2<i>θ</i></span>.`, a: `<span class="m">cos <i>θ</i> = <span class="fr"><span>12</span><span>13</span></span></span>; <span class="m">sin 2<i>θ</i> = 2 · <span class="fr"><span>5</span><span>13</span></span> · <span class="fr"><span>12</span><span>13</span></span> = <span class="fr"><span>120</span><span>169</span></span></span>; <span class="m">cos 2<i>θ</i> = 1 − 2 · <span class="fr"><span>25</span><span>169</span></span> = <span class="fr"><span>119</span><span>169</span></span></span>.` },
    { q: `Find <span class="m">sin 22.5°</span> exactly.`, a: `<span class="m">22.5° = 45°/2</span> is in QI, so +: <span class="m">√<span class="ov"><span class="fr"><span>1 − <span class="fr"><span>√<span class="ov">2</span></span><span>2</span></span></span><span>2</span></span></span> = √<span class="ov"><span class="fr"><span>2 − √<span class="ov">2</span></span><span>4</span></span></span> = <span class="fr"><span>√<span class="ov">2 − √<span class="ov">2</span></span></span><span>2</span></span></span>.` },
    { q: `Find <span class="m">cos 165°</span> exactly.`, a: `<span class="m">165° = 330°/2</span> is in QII, so −: <span class="m">−√<span class="ov"><span class="fr"><span>1 + <span class="fr"><span>√<span class="ov">3</span></span><span>2</span></span></span><span>2</span></span></span> = −<span class="fr"><span>√<span class="ov">2 + √<span class="ov">3</span></span></span><span>2</span></span></span> (which equals <span class="m">−<span class="fr"><span>√<span class="ov">6</span> + √<span class="ov">2</span></span><span>4</span></span></span>).` },
    { q: `Write <span class="m">sin<sup>4</sup> <i>x</i></span> using only first powers of cosine.`, a: `<span class="m">sin<sup>4</sup> <i>x</i> = (<span class="fr"><span>1 − cos 2<i>x</i></span><span>2</span></span>)<sup>2</sup> = <span class="fr"><span>1 − 2 cos 2<i>x</i> + cos<sup>2</sup> 2<i>x</i></span><span>4</span></span> = <span class="fr"><span>1 − 2 cos 2<i>x</i> + <span class="fr"><span>1 + cos 4<i>x</i></span><span>2</span></span></span><span>4</span></span> = <span class="fr"><span>3 − 4 cos 2<i>x</i> + cos 4<i>x</i></span><span>8</span></span></span>.` }
  ],
  origin: `Ptolemy's <i>Almagest</i> (about 150 CE) gave a rule for the chord of half an arc, the half-angle formula in chord form. Starting from the chord of 12°, he halved repeatedly to reach the chords of 6°, 3°, 1½° and ¾°, a step in building his table of chords. Galileo showed in his <i>Two New Sciences</i> (1638) that, without air resistance, a projectile goes farthest when it is launched at 45°.`
};
