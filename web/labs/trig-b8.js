/* ============ Labs: Trigonometry, batch B8 (trig equations, multiple angles, the ambiguous case) ============ */
(function(){
const L = window.LABS;
const I = s => `<i>${s}</i>`, PI = Math.PI, TAU = 2 * PI, SUB = ["", "₁", "₂"];

/* ---------- DOM-free helpers (angT, refOf, the sign quadrants and the SSA case text are MathRules, web/kits/subjects/trig.js) ---------- */
// Angle in radians as text: exact multiple of π (denominator ≤ 48) or 4 decimals.
const angT = (MR, x) => MR.angT(x);
// Reference angle of fn x = k (radians) and the quadrants where fn has the sign of k.
const refOf = (fn, k) => window.MathRules.refOf(fn, k);
const QUADS = window.MathRules.SIGN_QUADS;
// "x = 0 + 2πn" → "2πn"; general-solution text from MR.trigSolve, without the "x = ".
const genT = g => g.replace(/^x = /, "").replace(/^0 \+ /, "").replace(/n$/, I("n"));
// Plan of a step-by-step equation: given, rewrite lines, one line per simple factor (solved by MR.trigSolve),
// an extraneous-root check when p.ok is given, and the solution set. Returns {lines, parts, kept, checkAt, ans}.
function planOf(MR, p){
  const lines = [{ tag: "given", eq: p.q, why: p.why0 }].concat(p.pre), cand = [];
  const parts = p.parts.map(pt => {
    const S = MR.trigSolve(pt.fn, pt.k, { B: pt.B || 1 }), v = pt.B ? `${pt.B}${I("x")}` : I("x"), xs = S.sols.map(s => s.x);
    let eq = `${pt.fn} ${v} = ${pt.kt} ⇒ `;
    if (pt.B) eq += `${v} = ${S.sols.map(s => angT(MR, s.u)).join(", ")} ⇒ `;
    eq += `${I("x")} = <span class="c5">${xs.map(x => angT(MR, x)).join(", ")}</span>`;
    const quad = Math.abs(pt.k) < 1e-12 || (pt.fn !== "tan" && Math.abs(Math.abs(pt.k) - 1) < 1e-12);
    const why = quad ? "A quadrantal value: read it off the unit circle." : `Reference angle ${angT(MR, refOf(pt.fn, pt.k))}; ${pt.fn} ${pt.k > 0 ? ">" : "<"} 0 in Quadrants ${QUADS[pt.fn][pt.k > 0 ? 0 : 1]}.` + (pt.B ? ` ${pt.B}${I("x")} runs over [0, ${2 * pt.B}π); then divide by ${pt.B}.` : "");
    lines.push({ tag: pt.tag || "solve", eq, why: pt.why || why });
    xs.forEach(x => { if (!cand.some(y => Math.abs(y - x) < 1e-9)) cand.push(x); });
    return { xs, S, at: lines.length - 1 };
  });
  cand.sort((a, b) => a - b);
  const kept = p.ok ? cand.filter(p.ok) : cand; let checkAt = -1;
  if (p.ok) { lines.push({ tag: "check", eq: cand.map(x => `${angT(MR, x)} ${kept.includes(x) ? "✓" : "✗"}`).join(", "), why: "Squaring can add roots: substitute each candidate in the original equation." }); checkAt = lines.length - 1; }
  const gen = p.ok || p.calc ? kept.map(x => genT(`x = ${angT(MR, x)} + 2πn`)) : parts.flatMap(pp => pp.S.general.map(genT));
  const ans = `x = ${kept.map(x => angT(MR, x)).join(", ")}`;
  lines.push({ tag: "solution set", eq: `<span class="c5">${I("x")} = ${kept.map(x => angT(MR, x)).join(", ")}</span>`, why: (p.calc ? "Rounded to four decimal places. " : "") + `General: ${gen.join("; ")}, ${I("n")} an integer.` });
  return { lines, parts, kept, checkAt, ans };
}
// SSA: the case in words (the classification by h = b sin A), from MR.solveTriangle({A, a, b}).
const caseText = (g, S) => window.MathRules.ssaCase(g, S);
const nr = (v, d) => Math.abs(v - Math.round(v)) < 1e-6 ? `= ${Math.round(v)}` : `≈ ${v.toFixed(d)}`;
const DIRS = ["e", "ne", "n", "nw", "w", "sw", "s", "se"], dirOf = (dx, dy) => DIRS[((Math.round(Math.atan2(dy, dx) / (PI / 4)) % 8) + 8) % 8];
const KS = [[-Math.sqrt(3), "−√3"], [-1.2, "−1.2"], [-1, "−1"], [-Math.sqrt(3) / 2, "−√3/2"], [-Math.SQRT1_2, "−√2/2"], [-0.5, "−1/2"], [-0.3, "−0.3"], [0, "0"], [0.3, "0.3"], [0.5, "1/2"], [Math.SQRT1_2, "√2/2"], [Math.sqrt(3) / 2, "√3/2"], [1, "1"], [1.2, "1.2"], [Math.sqrt(3), "√3"]];
const kSlider = (k, val, set) => k.slider(`<span class="c3"><i>k</i></span>`, 0, KS.length - 1, 1, val, set, v => KS[v][1]);
// Phone: keep the steps panel short (earlier steps without their reasons, no placeholders).
const CSS = `.tb8.narrow .mk-steps .st:not(.cur) .why{display:none}.tb8.narrow .mk-steps .st.todo{display:none}`;
const css = host => { host.classList.add("tb8"); if (!document.getElementById("trig-b8-css")) { const s = document.createElement("style"); s.id = "trig-b8-css"; s.textContent = CSS; document.head.appendChild(s); } };
const chunk = (a, n) => a.reduce((r, x, i) => (i % n ? r[r.length - 1].push(x) : r.push([x]), r), []);

// Shared Steps mode: graph of left − right on [0, 2π] with each factor's solutions dotted on the axis as they are reached.
function stepsView(k, c, host, SP, p, pl, cur){
  const { C, F } = k, pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 });
  let lo = Infinity, hi = -Infinity; for (let i = 0; i <= 240; i++) { const y = p.f(i * TAU / 240); if (isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); } }
  lo = Math.max(-4, Math.min(lo, -1)); hi = Math.min(4, Math.max(hi, 1)); const m = (hi - lo) * 0.14;
  const P = k.plane(c, { xmin: -0.25, xmax: TAU + 0.25, ymin: lo - m, ymax: hi + m, xstep: PI / 2, pad });
  P.grid(); P.piAxes(); P.curve(p.f, C.cyan, { w: 2.2 });
  pl.parts.forEach(pp => { if (cur >= pp.at) pp.xs.forEach(x => { if (pl.checkAt > 0 && cur >= pl.checkAt && !pl.kept.includes(x)) P.hole(x, 0, C.pink, 6); else P.dot(x, 0, C.green, 6); }); });
  const an = P.onCurve(p.f, 0.9); P.labels(an ? [{ text: "left − right", x: an.x, y: an.y, color: C.cyan, font: `13px ${F.math}` }] : []);
  SP.set(pl.lines, cur);
}
function stepsReadout(k, p, pl, cur, i, n){
  const last = pl.lines.length - 1, done = cur >= last;
  k.readout({ title: "Solve step by step", big: `${p.q} <span class="dim">· ${i + 1} of ${n}</span>`,
    rows: [{ lhs: `${I("y")} = left − right`, lbl: "its zeros on [0, 2π) are the solutions" }],
    landmark: { hit: done, big: done ? `${pl.kept.length} solution${pl.kept.length === 1 ? "" : "s"} in [0, 2π)` : `step ${cur} of ${last}`, note: done ? "Each green dot is a zero of the graph." : pl.checkAt > 0 ? "Hollow pink dots will mark extraneous roots." : "Each factor adds its own dots." },
    narr: "Before each step, predict which dots will appear." });
}

/* ================= Solving Trigonometric Equations (C + graph) ================= */
const EQ1 = [
  { q: `2 sin ${I("x")} − 1 = 0`, f: x => 2 * Math.sin(x) - 1, why0: "Linear in sin x.", pre: [{ tag: "isolate", eq: `sin ${I("x")} = 1/2`, why: "Add 1, then divide by 2." }], parts: [{ fn: "sin", k: 0.5, kt: "1/2" }] },
  { q: `2 cos² ${I("x")} − cos ${I("x")} − 1 = 0`, f: x => 2 * Math.cos(x) ** 2 - Math.cos(x) - 1, why0: "Quadratic in u = cos x.", pre: [{ tag: "factor", eq: `(2 cos ${I("x")} + 1)(cos ${I("x")} − 1) = 0`, why: "2u² − u − 1 = (2u + 1)(u − 1). Set each factor to 0." }], parts: [{ fn: "cos", k: -0.5, kt: "−1/2" }, { fn: "cos", k: 1, kt: "1" }] },
  { q: `2 cos² ${I("x")} + 3 sin ${I("x")} − 3 = 0`, f: x => 2 * Math.cos(x) ** 2 + 3 * Math.sin(x) - 3, why0: "Two functions: sine and cosine.", pre: [{ tag: "identity", eq: `2(1 − sin² ${I("x")}) + 3 sin ${I("x")} − 3 = 0`, why: "Replace cos² x by 1 − sin² x so only sine is left." }, { tag: "factor", eq: `(2 sin ${I("x")} − 1)(sin ${I("x")} − 1) = 0`, why: "Collect: −2 sin² x + 3 sin x − 1 = 0; multiply by −1 and factor 2u² − 3u + 1." }], parts: [{ fn: "sin", k: 0.5, kt: "1/2" }, { fn: "sin", k: 1, kt: "1" }] },
  { q: `2 sin ${I("x")} cos ${I("x")} = sin ${I("x")}`, f: x => 2 * Math.sin(x) * Math.cos(x) - Math.sin(x), why0: "Do not divide by sin x: it is 0 at 0 and π.", pre: [{ tag: "factor", eq: `sin ${I("x")} (2 cos ${I("x")} − 1) = 0`, why: "Move sin x to the left and take it out as a common factor." }], parts: [{ fn: "sin", k: 0, kt: "0" }, { fn: "cos", k: 0.5, kt: "1/2" }] },
  { q: `sin ${I("x")} + 1 = cos ${I("x")}`, f: x => Math.sin(x) + 1 - Math.cos(x), why0: "Sine and cosine to the first power: square both sides.", ok: x => Math.abs(Math.sin(x) + 1 - Math.cos(x)) < 1e-9,
    pre: [{ tag: "square", eq: `sin² ${I("x")} + 2 sin ${I("x")} + 1 = cos² ${I("x")} = 1 − sin² ${I("x")}`, why: "Square both sides, then use the Pythagorean identity." }, { tag: "factor", eq: `2 sin ${I("x")} (sin ${I("x")} + 1) = 0`, why: "Collect: 2 sin² x + 2 sin x = 0." }], parts: [{ fn: "sin", k: 0, kt: "0" }, { fn: "sin", k: -1, kt: "−1" }] },
  { q: `3 cos ${I("x")} − 1 = 0`, f: x => 3 * Math.cos(x) - 1, why0: "Linear in cos x.", calc: true, pre: [{ tag: "isolate", eq: `cos ${I("x")} = 1/3`, why: "Not a special value: use a calculator." }],
    parts: [{ fn: "cos", k: 1 / 3, kt: "1/3", why: "cos⁻¹(1/3) ≈ 1.2310 is the calculator answer, in Quadrant I. Cosine is also positive in Quadrant IV: 2π − 1.2310 ≈ 5.0522." }] }
];

L["trig-equations"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host); css(host);
  let mode = "circle", fn = "sin", ki = 9, gfn = "sin", gki = 9, pi = 0, cur = 0, st = null;
  const PL = () => planOf(MR, EQ1[pi]);
  const hints = { circle: "Move k: the line meets the circle in 0, 1 or 2 points.", graph: "Each intersection repeats every period: the violet ladder.", steps: "Step through, or press New problem." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; k.guard(m === "steps" ? [PL().ans] : []); };
  k.modes([["circle", "Circle"], ["graph", "Graph"], ["steps", "Steps"]], mode, setMode);
  k.group("circle", () => { k.select("Solve", [["sin", "sin x = k"], ["cos", "cos x = k"]], fn, v => fn = v); kSlider(k, ki, v => ki = v); });
  k.group("graph", () => { k.select("Solve", [["sin", "sin x = k"], ["cos", "cos x = k"], ["tan", "tan x = k"]], gfn, v => gfn = v); kSlider(k, gki, v => gki = v); });
  k.group("steps", () => { st = k.stepper(() => PL().lines.length - 1, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % EQ1.length; st.reset(); k.guard([PL().ans]); }, "btn ghost"); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const labels = [];
    if (mode === "circle") {
      k.split(c, host, { off: true });
      const [kv, kt] = KS[ki], S = MR.trigSolve(fn, kv), n = S.sols.length, H = Math.max(1.45, Math.abs(kv) + 0.3);
      const P = k.plane(c, { xmin: -H, xmax: H, ymin: -H, ymax: H, equal: true, xstep: 0.5, ystep: 0.5 }), u = P.X(1) - P.X(0);
      P.grid(); P.axes(); P.param(Math.cos, Math.sin, 0, TAU, k.alpha(C.violet, .75), 1.6);
      if (fn === "sin") { P.seg(P.xmin, kv, P.xmax, kv, C.pink, 2.2); labels.push({ text: `sin x = ${kt}`, x: P.xmax - 0.2, y: kv, color: C.pink, prefer: "n" }); }
      else { P.seg(kv, P.ymin, kv, P.ymax, C.pink, 2.2); labels.push({ text: `cos x = ${kt}`, x: kv, y: P.ymax - 0.2, color: C.pink, prefer: "e" }); }
      S.sols.forEach((s, i) => { const x = Math.cos(s.x), y = Math.sin(s.x);
        P.angleArc(0, 0, u * (0.2 + 0.11 * i), 0, s.x, k.alpha(C.green, .8), { w: 1.6 }); P.seg(0, 0, x, y, C.green, 2.4);
        const base = x >= 0 ? 0 : PI, dl = ((Math.atan2(y, x) - base + 3 * PI) % TAU) - PI;
        if (Math.abs(dl) > 1e-6 && Math.abs(Math.abs(dl) - PI / 2) > 1e-6) { const an = P.angleArc(0, 0, u * 0.6, base, base + dl, C.amber, { dash: [4, 4], arrow: false }); if (i === 0) labels.push({ text: "α", x: an.x, y: an.y, color: C.amber, font: `600 15px ${F.math}` }); }
        P.dot(x, y, C.green, 6); labels.push({ text: `x = ${angT(MR, s.x)}`, x, y, color: C.green, font: `600 14px ${F.math}`, prefer: dirOf(x, y) }); });
      P.labels(labels);
      const al = n ? refOf(fn, kv) : 0, list = S.sols.map(s => angT(MR, s.x)).join(", ");
      k.readout({ title: "Where the line meets the circle", big: `${fn} ${I("x")} = <span class="c3">${kt}</span>`,
        rows: n ? [{ lhs: `<span class="c1">α</span> = ${angT(MR, al)}`, lbl: "reference angle" }, { lhs: `${I("x")} = <span class="c5">${list}</span>`, lbl: "in [0, 2π)" }, { lhs: S.general.map(genT).join("; "), lbl: "general solution" }]
          : [{ lhs: `|${I("k")}| &gt; 1`, lbl: "the line misses the circle" }],
        landmark: { hit: n === 1, big: n === 0 ? "no solution" : n === 1 ? "one solution: the line touches" : "two solutions", note: n === 1 ? "At k = ±1 the two solutions merge into one point of the circle." : n === 2 ? `${fn === "sin" ? "Sine" : "Cosine"} has the sign of k in two quadrants.` : "sin x and cos x stay between −1 and 1." },
        narr: "Push k toward 1: the two green radii close in and meet." });
      return;
    }
    if (mode === "graph") {
      k.split(c, host, { off: true });
      const [kv, kt] = KS[gki], tan = gfn === "tan", per = tan ? PI : TAU, f = MR.sinusoid(gfn, 1, 1, 0, 0), Y = tan ? 3.2 : 2;
      const S = MR.trigSolve(gfn, kv, { lo: -TAU - 0.3, hi: 2 * TAU + 0.3 }), S0 = MR.trigSolve(gfn, kv), base = S0.sols.map(s => s.x).filter(x => x < per - 1e-9);
      const P = k.plane(c, { xmin: -TAU - 0.3, xmax: 2 * TAU + 0.3, ymin: -Y, ymax: Y, xstep: PI, ystep: 1 }), g = c.g;
      g.save(); g.fillStyle = k.alpha(C.green, .07); g.fillRect(P.X(0), P.top, P.X(TAU) - P.X(0), P.height); g.restore();
      P.grid(); P.piAxes({ xstep: PI });
      const asy = tan ? MR.asymptotes("tan", 1, 0, P.xmin, P.xmax) : []; asy.forEach(x => P.vasym(x, C.faint));
      P.curve(f, k.alpha(C.text, .85), { breaks: asy, w: 2 });
      if (Math.abs(kv) < Y) { P.seg(P.xmin, kv, P.xmax, kv, C.pink, 2); labels.push({ text: `y = ${kt}`, x: P.xmin + 0.6, y: kv, color: C.pink, prefer: "n" }); }
      const an = P.onCurve(f, 0.93); if (an) labels.push({ text: `y = ${gfn} x`, x: an.x, y: an.y, color: C.text, font: `13px ${F.math}` });
      base.forEach((x0, i) => { const yl = kv + (i ? -0.45 : 0.45); P.vec(x0, yl, x0 + per, yl, C.violet, { w: 1.6 }); P.vec(x0, yl, x0 - per, yl, C.violet, { w: 1.6 });
        labels.push({ text: tan ? "+π" : "+2π", x: x0 + per / 2, y: yl, color: C.violet, font: `13px ${F.math}`, prefer: i ? "s" : "n" }); });
      S.sols.forEach(s => { const inB = s.x >= -1e-9 && s.x < TAU - 1e-9; if (inB) P.dot(s.x, kv, C.green, 6.5); else P.dot(s.x, kv, C.violet, 4.5); });
      S0.sols.forEach(s => labels.push({ text: angT(MR, s.x), x: s.x, y: kv, color: C.green, font: `600 13px ${F.math}`, prefer: "s" }));
      P.labels(labels);
      const n = S0.sols.length, exact = n && S0.sols.every(s => s.q);
      k.readout({ title: "Solutions repeat every period", big: n ? `${I("x")} = ${S0.general.map(genT).join("; ")}` : "no solution",
        rows: [n ? { lhs: `${I("x")} = <span class="c5">${S0.sols.map(s => angT(MR, s.x)).join(", ")}</span>`, lbl: "in [0, 2π), the shaded band" } : { lhs: `|${I("k")}| &gt; 1`, lbl: "the line misses the curve" },
          { lhs: `<span class="c4">period ${tan ? "π" : "2π"}</span>`, lbl: `add ${tan ? "π" : "2π"}${I("n")}, ${I("n")} an integer` }],
        landmark: { hit: !!exact, big: n ? `${n} in one turn, infinitely many in all` : "the line misses the curve", note: exact ? "Special value: the solutions are exact multiples of π." : n ? "Not a special value: give decimals, still using the reference angle." : "Choose |k| ≤ 1 for sine and cosine." },
        narr: "Switch to tan x: the ladder steps by π, so one rung per period." });
      return;
    }
    const p = EQ1[pi], pl = planOf(MR, p);
    stepsView(k, c, host, SP, p, pl, cur); stepsReadout(k, p, pl, cur, pi, EQ1.length);
  });
};

/* ================= Equations with Multiple Angles & Identities (C + graph) ================= */
const EQ2 = [
  { q: `sin 2${I("x")} = cos ${I("x")}`, f: x => Math.sin(2 * x) - Math.cos(x), why0: "Mixed angles: 2x and x.", pre: [{ tag: "identity", eq: `2 sin ${I("x")} cos ${I("x")} = cos ${I("x")}`, why: "Double-angle formula: everything in x." }, { tag: "factor", eq: `cos ${I("x")} (2 sin ${I("x")} − 1) = 0`, why: "Move cos x over and factor. Dividing by cos x would lose π/2 and 3π/2." }], parts: [{ fn: "cos", k: 0, kt: "0" }, { fn: "sin", k: 0.5, kt: "1/2" }] },
  { q: `cos 2${I("x")} = sin ${I("x")}`, f: x => Math.cos(2 * x) - Math.sin(x), why0: "Mixed angles: 2x and x.", pre: [{ tag: "identity", eq: `1 − 2 sin² ${I("x")} = sin ${I("x")}`, why: "Choose the form of cos 2x written with sine." }, { tag: "factor", eq: `(2 sin ${I("x")} − 1)(sin ${I("x")} + 1) = 0`, why: "2 sin² x + sin x − 1 = 0 factors like 2u² + u − 1." }], parts: [{ fn: "sin", k: 0.5, kt: "1/2" }, { fn: "sin", k: -1, kt: "−1" }] },
  { q: `cos 2${I("x")} + cos ${I("x")} = 0`, f: x => Math.cos(2 * x) + Math.cos(x), why0: "Mixed angles: 2x and x.", pre: [{ tag: "identity", eq: `2 cos² ${I("x")} − 1 + cos ${I("x")} = 0`, why: "Choose the form of cos 2x written with cosine." }, { tag: "factor", eq: `(2 cos ${I("x")} − 1)(cos ${I("x")} + 1) = 0`, why: "2u² + u − 1 = (2u − 1)(u + 1) with u = cos x." }], parts: [{ fn: "cos", k: 0.5, kt: "1/2" }, { fn: "cos", k: -1, kt: "−1" }] },
  { q: `sin 3${I("x")} cos ${I("x")} − cos 3${I("x")} sin ${I("x")} = 1/2`, f: x => Math.sin(2 * x) - 0.5, why0: "The pattern of sin(α − β).", pre: [{ tag: "identity", eq: `sin(3${I("x")} − ${I("x")}) = sin 2${I("x")} = 1/2`, why: "Difference formula with α = 3x, β = x." }], parts: [{ fn: "sin", k: 0.5, kt: "1/2", B: 2 }] },
  { q: `2 cos 2${I("x")} + 1 = 0`, f: x => 2 * Math.cos(2 * x) + 1, why0: "One multiple angle, 2x.", pre: [{ tag: "isolate", eq: `cos 2${I("x")} = −1/2`, why: "Subtract 1, divide by 2." }], parts: [{ fn: "cos", k: -0.5, kt: "−1/2", B: 2 }] }
];
const GE = [
  { q: `2 sin ${I("x")} = ${I("x")}`, f: x => 2 * Math.sin(x), g: x => x, ft: "2 sin x", gt: "x" },
  { q: `cos ${I("x")} = ${I("x")}`, f: Math.cos, g: x => x, ft: "cos x", gt: "x" },
  { q: `sin 2${I("x")} = ${I("x")}/3`, f: x => Math.sin(2 * x), g: x => x / 3, ft: "sin 2x", gt: "x/3" }
];
const rootT = x => Math.abs(x) < 1e-9 ? "x = 0" : `x ≈ ${x.toFixed(4)}`;

L["trig-equations-multi"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host); css(host);
  let mode = "stretch", fn = "sin", B = 2, ki = 11, pi = 0, cur = 0, st = null, gi = 0, rx = 3, found = new Set();
  const PL = () => planOf(MR, EQ2[pi]), roots = () => MR.intersect(GE[gi].f, GE[gi].g, 0, TAU).filter(r => r.x < TAU - 1e-9);
  const guard = () => k.guard(mode === "identity" ? [PL().ans] : mode === "graph" ? roots().map(r => rootT(r.x)) : []);
  const hints = { stretch: "Change the multiple: the top axis for kx stretches to [0, 2kπ).", identity: "Step: rewrite with an identity, factor, solve each factor.", graph: "Slide the reader onto each crossing to read the solution." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; guard(); };
  k.modes([["stretch", "Stretch"], ["identity", "Identity"], ["graph", "Graph"]], mode, setMode);
  k.group("stretch", () => { k.select("Function", [["sin", "sin"], ["cos", "cos"], ["tan", "tan"]], fn, v => fn = v); k.select("Angle", [[1, "x"], [2, "2x"], [3, "3x"], [4, "4x"]], B, v => B = +v); kSlider(k, ki, v => ki = v); });
  k.group("identity", () => { st = k.stepper(() => PL().lines.length - 1, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % EQ2.length; st.reset(); guard(); }, "btn ghost"); });
  k.group("graph", () => { k.select("Equation", GE.map((e, i) => [i, `${e.ft} = ${e.gt}`]), gi, v => { gi = +v; found = new Set(); guard(); }); k.slider(`<span class="c4">reader</span> <i>x</i>`, 0, 6.28, 0.005, rx, v => rx = v, v => v.toFixed(3)); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const labels = [];
    if (mode === "stretch") {
      k.split(c, host, { off: true });
      const [kv, kt] = KS[ki], tan = fn === "tan", Y = tan ? 3.2 : 1.6, yu = Y + 0.55, f = MR.sinusoid(fn, 1, B, 0, 0), S = MR.trigSolve(fn, kv, { B }), S0 = MR.trigSolve(fn, kv);
      const P = k.plane(c, { xmin: -0.2, xmax: TAU + 0.2, ymin: -Y, ymax: yu + 0.45, xstep: PI / 2, ystep: tan ? 1 : 0.5 }), d = c.d;
      P.grid(); P.piAxes();
      const asy = tan ? MR.asymptotes("tan", B, 0, P.xmin, P.xmax) : []; asy.forEach(x => P.vasym(x, C.faint));
      P.curve(f, k.alpha(C.text, .85), { breaks: asy, w: 2, to: TAU });
      P.seg(0, yu, TAU, yu, C.amber, 1.6);
      for (let j = 0; j <= 2 * B; j++) { const x = j * PI / B, px = P.X(x), py = P.Y(yu); d.line(px, py - 4, px, py + 4, C.amber, 1.4); d.text(j ? (j === 1 ? "π" : `${j}π`) : "0", px, py - 9, { font: `12px ${F.math}`, color: C.amber, align: "center" }); P.boxes.push({ x: px - 12, y: py - 22, w: 24, h: 16 }); }
      d.text(B === 1 ? "x" : `${B}x`, P.X(0) - 8, P.Y(yu), { font: `italic 14px ${F.math}`, color: C.amber, align: "right", base: "middle" });
      if (Math.abs(kv) < Y) { P.seg(P.xmin, kv, P.xmax, kv, C.pink, 1.8); labels.push({ text: `y = ${kt}`, x: TAU, y: kv, color: C.pink, prefer: "ne" }); }
      S.sols.forEach(s => { P.seg(s.x, yu, s.x, 0, k.alpha(C.green, .5), 1.2, [4, 4]); P.dot(s.x, kv, C.green, 6); P.dot(s.x, 0, C.cyan, 4); P.dot(s.x, yu, C.amber, 4); });
      const an = P.onCurve(f, 0.08); if (an) labels.push({ text: `y = ${fn} ${B === 1 ? "" : B}x`, x: an.x, y: an.y, color: C.text, font: `13px ${F.math}` });
      P.labels(labels);
      const n = S.sols.length, bx = B === 1 ? I("x") : `${B}${I("x")}`, uRows = chunk(S.sols.map(s => angT(MR, s.u)), 4), xRows = chunk(S.sols.map(s => angT(MR, s.x)), 4);
      k.readout({ title: "Stretch the interval", big: `${fn} <span class="c1">${bx}</span> = <span class="c3">${kt}</span>`,
        rows: n ? [{ lhs: `<span class="c1">${bx}</span> ∈ [0, ${2 * B}π)`, lbl: `${B} turn${B > 1 ? "s" : ""} while x makes one` }]
          .concat(uRows.map((r, i) => ({ lhs: `${i ? "" : `<span class="c1">${bx}</span> = `}<span class="c1">${r.join(", ")}</span>` })))
          .concat(xRows.map((r, i) => ({ lhs: `${i ? "" : `<span class="c2">${I("x")}</span> = `}<span class="c5">${r.join(", ")}</span>`, lbl: i ? "" : `divide by ${B}` })))
          .concat([{ lhs: S.general.map(genT).join("; "), lbl: "general solution" }]) : [{ lhs: `|${I("k")}| &gt; 1`, lbl: "no solution for sine or cosine" }],
        landmark: { hit: n > 0 && B > 1, big: n ? `${n} solutions = ${S0.sols.length} × ${B}` : "no solution", note: n ? `${S0.sols.length} per turn of ${bx}, and ${bx} turns ${B} time${B > 1 ? "s" : ""}.` : "Pick |k| ≤ 1." },
        narr: "Compare 2x with 4x: the count doubles again, the period halves." });
      return;
    }
    if (mode === "identity") { const p = EQ2[pi], pl = planOf(MR, p); stepsView(k, c, host, SP, p, pl, cur); stepsReadout(k, p, pl, cur, pi, EQ2.length); return; }
    // Graph: intersection reader
    k.split(c, host, { off: true });
    const e = GE[gi], R = roots(), P = k.plane(c, { xmin: -0.25, xmax: TAU + 0.25, ymin: -2.4, ymax: 2.6, xstep: PI / 2, ystep: 1 });
    P.grid(); P.piAxes(); P.curve(e.f, C.pink, { w: 2.2 }); P.curve(e.g, C.cyan, { w: 2.2 });
    R.forEach((r, i) => { if (Math.abs(rx - r.x) < 0.012) found.add(i); });
    P.seg(rx, P.ymin, rx, P.ymax, C.violet, 1.5, [5, 4]); P.dot(rx, e.f(rx), C.pink, 5); P.dot(rx, e.g(rx), C.cyan, 5);
    R.forEach((r, i) => { if (found.has(i)) { P.dot(r.x, r.y, C.green, 6.5); labels.push({ text: rootT(r.x), x: r.x, y: r.y, color: C.green, font: `600 13px ${F.math}`, prefer: "se" }); } });
    const a1 = P.onCurve(e.f, 0.62), a2 = P.onCurve(e.g, 0.2);
    if (a1) labels.push({ text: `y = ${e.ft}`, x: a1.x, y: a1.y, color: C.pink, font: `13px ${F.math}` }); if (a2) labels.push({ text: `y = ${e.gt}`, x: a2.x, y: a2.y, color: C.cyan, font: `13px ${F.math}` });
    P.labels(labels);
    const fv = e.f(rx), gv = e.g(rx), df = fv - gv, all = found.size === R.length;
    k.readout({ title: "Read the intersections", big: e.q,
      rows: [{ lhs: `<span class="c3">${e.ft}</span>`, v: fv.toFixed(4).replace("-", "−"), lbl: `reader at ${rx.toFixed(3)}` }, { lhs: `<span class="c2">${e.gt}</span>`, v: gv.toFixed(4).replace("-", "−") },
        { lhs: "left − right", v: df.toFixed(4).replace("-", "−"), lbl: Math.abs(df) < 0.02 ? "nearly 0: a crossing" : df > 0 ? "left is above" : "left is below" }],
      landmark: { hit: all, big: `found ${found.size} of ${R.length}`, note: found.size ? [...found].sort().map(i => rootT(R[i].x)).join(", ") : "Where the sign of left − right changes, the curves cross." },
      narr: "No identity isolates x here: x appears inside and outside a function." });
  });
};

/* ================= The Ambiguous Case (F · Triangle) ================= */
// Figure: A at the origin, side b to C along the ray at angle A, side c along +x. o: {arc, h, show: [tri1, tri2]}.
function ssaFig(k, c, g, o){
  const { C, F } = k, MR = k.MR, S = MR.solveTriangle({ A: g.A, a: g.a, b: g.b }), T = S.tris.slice().sort((p, q) => p.B - q.B);
  const Cx = g.b * MR.cosD(g.A), Cy = g.b * MR.sinD(g.A), h = Cy, Cp = [Cx, Cy], O = [0, 0], labels = [];
  const P = k.plane(c, Object.assign(k.fit([O, Cp, [Math.max(Cx + g.a, g.b * 0.6), 0], [Math.min(0, Cx - g.a, -0.2 * g.b), 0], [0, -0.1 * g.b]], 0.1), { equal: true, pad: o.pad }));
  P.seg(P.xmin, 0, 0, 0, C.faint, 1.2, [5, 5]); P.seg(0, 0, P.xmax, 0, C.muted, 1.6);
  if (o.h && g.A < 90) { P.seg(Cx, Cy, Cx, 0, C.violet, 2, [6, 4]); P.rightMark([Cx, 0], [Cx + 1, 0], Cp, C.violet, 9); labels.push({ text: `h ${nr(h, 2)}`, x: Cx, y: h / 2, color: C.violet, font: `600 14px ${F.math}`, prefer: "w" }); }
  T.forEach((t, i) => { if (!o.show[i]) return; const B = [t.c, 0]; P.tri(O, B, Cp, { colors: [C.green, C.pink, C.cyan], fill: k.alpha(C.green, i ? .07 : .14), w: 2.6 });
    labels.push({ text: `B${T.length > 1 ? SUB[i + 1] : ""}`, x: t.c, y: 0, color: C.green, font: `bold 14px ${F.sans}`, prefer: "s" }); });
  if (o.arc) { P.param(t => Cx + g.a * Math.cos(t), t => Cy + g.a * Math.sin(t), 0, TAU, k.alpha(C.pink, .6), 1.4, [5, 4]);
    const back = g.a > h + 1e-9 ? [-1, 1].map(sg => Cx + sg * Math.sqrt(g.a ** 2 - h * h)).filter(x => x <= 1e-9) : [];
    back.forEach(x => P.hole(x, 0, C.pink, 5)); if (back.length) labels.push({ text: "behind A", x: back[0], y: 0, color: C.muted, font: `12px ${F.sans}`, prefer: "s" }); }
  const shown = T.filter((t, i) => o.show[i]), aEnd = shown.length ? [shown[0].c, 0] : o.arc ? [Cx + g.a * Math.cos(-PI / 3), Cy + g.a * Math.sin(-PI / 3)] : null;
  if (aEnd && !shown.length) P.seg(Cx, Cy, aEnd[0], aEnd[1], C.pink, 2.4);
  if (aEnd) labels.push({ text: `a = ${+g.a.toFixed(2)}`, x: (Cx + aEnd[0]) / 2, y: (Cy + aEnd[1]) / 2, color: C.pink, font: `600 14px ${F.math}`, prefer: "e" });
  P.seg(0, 0, Cx, Cy, C.cyan, 3);
  const an = P.vertexArc(O, [1, 0], Cp, 24, C.amber); labels.push({ text: `A = ${g.A}°`, x: an.x, y: an.y, color: C.amber, font: `600 14px ${F.math}` });
  labels.push({ text: `b = ${g.b}`, x: Cx / 2, y: Cy / 2, color: C.cyan, font: `600 14px ${F.math}`, prefer: dirOf(-Cy, Cx) }, { text: "A", x: 0, y: 0, color: C.muted, font: `bold 13px ${F.sans}`, prefer: "sw" }, { text: "C", x: Cx, y: Cy, color: C.muted, font: `bold 13px ${F.sans}`, prefer: "n" });
  return { P, S, T, h, labels };
}
// Step-by-step SSA solution lines and the guarded answers.
function planSSA(MR, g){
  const S = MR.solveTriangle({ A: g.A, a: g.a, b: g.b }), T = S.tris.slice().sort((p, q) => p.B - q.B), h = g.b * MR.sinD(g.A), sB = h / g.a, f1 = v => v.toFixed(1);
  const lines = [{ tag: "SSA", eq: `<span class="c1">${I("A")} = ${g.A}°</span>, <span class="c3">${I("a")} = ${g.a}</span>, <span class="c2">${I("b")} = ${g.b}</span>`, why: "Two sides and the angle opposite one of them." }];
  lines.push(g.A >= 90 ? { tag: "compare", eq: `${I("A")} ≥ 90°, ${I("a")} ${g.a > g.b ? "&gt;" : "≤"} ${I("b")}`, why: caseText(g, S) } : { tag: "height", eq: `<span class="c4">${I("h")}</span> = ${g.b} sin ${g.A}° ${nr(h, 2)}`, why: caseText(g, S) });
  const tri = { at: [] };
  if (sB > 1 + 1e-12) { lines.push({ tag: "law of sines", eq: `sin ${I("B")} = ${g.b} sin ${g.A}°/${g.a} ≈ ${sB.toFixed(4)} &gt; 1`, why: "No angle has this sine: no triangle." }); return { lines, T, tri, ans: [`sin B ≈ ${sB.toFixed(4)} > 1`] }; }
  const B1 = MR.asinD(Math.min(1, sB)), right = Math.abs(sB - 1) < 1e-9;
  lines.push(right ? { tag: "law of sines", eq: `sin ${I("B")} = ${g.b} sin ${g.A}°/${g.a} = 1 ⇒ <span class="c5">${I("B")} = 90°</span>`, why: "Only 90° has sine 1: the arc touches the ray." }
    : { tag: "law of sines", eq: `sin ${I("B")} = ${g.b} sin ${g.A}°/${g.a} ≈ ${sB.toFixed(4)} ⇒ <span class="c5">${I("B")}₁ ≈ ${f1(B1)}°</span>`, why: "The inverse sine gives the acute angle." });
  if (!right) { const B2 = 180 - B1, ok = g.A + B2 < 180 - 1e-9;
    lines.push({ tag: "test B₂", eq: `${I("B")}₂ ≈ 180° − ${f1(B1)}° = ${f1(B2)}°; &nbsp;${g.A}° + ${f1(B2)}° ${ok ? "&lt;" : "≥"} 180°`, why: ok ? "Room for a third angle: a second triangle." : "No room for C: B₂ is rejected." }); }
  const ans = T.map((t, i) => { const s = T.length > 1 ? SUB[i + 1] : "";
    lines.push({ tag: T.length > 1 ? `triangle ${i + 1}` : "finish", eq: `<span class="c5">${I("B")}${s} ${nr(t.B, 1)}°, ${I("C")}${s} ${nr(t.C, 1)}°, ${I("c")}${s} ${nr(t.c, 1)}</span>`, why: `C = 180° − A − B; c = ${g.a} sin C/sin ${g.A}°, unrounded angles inside.` });
    tri.at.push(lines.length - 1); return `c${s} ${nr(t.c, 1)}`; });
  return { lines, T, tri, ans };
}
const SSA_P = [{ A: 40, a: 7, b: 10 }, { A: 35, a: 12, b: 9 }, { A: 50, a: 5, b: 8 }, { A: 110, a: 15, b: 10 }, { A: 30, a: 4, b: 8 }, { A: 30, a: 6, b: 10 }];
const SSA_C = [{ A: 25, a: 5, b: 9 }, { A: 120, a: 8, b: 11 }, { A: 60, a: 9, b: 9 }, { A: 45, a: 4, b: 7 }, { A: 30, a: 5, b: 10 }, { A: 100, a: 12, b: 7 }, { A: 52, a: 10, b: 12 }, { A: 70, a: 15, b: 6 }];

L["trig-ambiguous"] = k => {
  MathKit.attach(k);
  const { C } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host); css(host);
  let mode = "swing", A = 40, b = 10, a = 7, aS = null, pi = 0, cur = 0, st = null, ci = 0, pick = null, right = 0, tried = 0;
  const guard = () => k.guard(mode === "solve" ? planSSA(MR, SSA_P[pi]).ans : mode === "classify" ? [caseText(SSA_C[ci], MR.solveTriangle(SSA_C[ci]))] : []);
  const hints = { swing: "Change a: the pink arc misses, touches, cuts twice or once.", solve: "Step: height, law of sines, test 180° − B, then each triangle.", classify: "Compare a with h = b sin A and with b, then choose." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; guard(); };
  k.modes([["swing", "Swing"], ["solve", "Solve"], ["classify", "Classify"]], mode, setMode);
  k.group("swing", () => { k.slider(`<span class="c1">A</span>`, 10, 170, 1, A, v => A = v, v => v + "°"); k.slider(`<span class="c2">b</span>`, 4, 12, 0.5, b, v => b = v);
    aS = k.slider(`<span class="c3">a</span>`, 0.5, 16, 0.1, a, v => a = v, v => v.toFixed(1)); k.button("Set a = h", () => { if (A < 90) { a = b * MR.sinD(A); aS.set(+a.toFixed(1)); } }, "btn ghost"); });
  k.group("solve", () => { st = k.stepper(() => planSSA(MR, SSA_P[pi]).lines.length - 1, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % SSA_P.length; st.reset(); guard(); }, "btn ghost"); });
  const choose = n => { if (pick !== null) return; pick = n; tried++; if (n === MR.solveTriangle(SSA_C[ci]).count) right++; };
  k.group("classify", () => { [[0, "No triangle"], [1, "One"], [2, "Two"]].forEach(([n, t]) => k.button(t, () => choose(n))); k.button("Next", () => { ci = (ci + 1) % SSA_C.length; pick = null; guard(); }, "btn ghost"); });
  setMode(mode);

  k.loop(() => {
    c.begin();
    if (mode === "swing") {
      k.split(c, host, { off: true });
      const g = { A, a, b }, F0 = ssaFig(k, c, g, { arc: true, h: true, show: [1, 1] }), S = F0.S, n = S.count;
      F0.P.labels(F0.labels);
      const bs = F0.T.map((t, i) => `${I("B")}${n > 1 ? SUB[i + 1] : ""} ${nr(t.B, 1)}°`).join(", ");
      k.readout({ title: "Swing side a from C", big: `<span class="c5">${caseText(g, S)}</span>`,
        rows: [A < 90 ? { lhs: `<span class="c4">${I("h")}</span> = <span class="c2">${I("b")}</span> sin <span class="c1">${I("A")}</span> ${nr(F0.h, 2)}`, lbl: `compare with a = ${a.toFixed(2)} and b = ${b}` } : { lhs: `<span class="c1">${I("A")}</span> ≥ 90°`, lbl: "only a > b gives a triangle" },
          n ? { lhs: bs, lbl: n > 1 ? "B and 180° − B both fit" : "" } : null],
        landmark: { hit: n === 2, big: `${n} triangle${n === 1 ? "" : "s"}`, note: n === 2 ? "Two triangles share A, b and a: SSA is ambiguous." : "Make h < a < b with A acute to get two." },
        narr: "Press Set a = h: the arc touches the ray and B = 90°." });
      return;
    }
    if (mode === "solve") {
      const pad = k.split(c, host, { side: "left", frac: 0.46, hfrac: 0.46 }), g = SSA_P[pi], pl = planSSA(MR, g);
      const F0 = ssaFig(k, c, g, { arc: cur >= 1, h: cur >= 1, show: [cur >= (pl.tri.at[0] ?? 99), cur >= (pl.tri.at[1] ?? 99)], pad });
      F0.P.labels(F0.labels); SP.set(pl.lines, cur);
      const last = pl.lines.length - 1, done = cur >= last, n = pl.T.length;
      k.readout({ title: "Solve SSA", big: `problem ${pi + 1} of ${SSA_P.length}`,
        rows: [{ lhs: `sin ${I("B")} = <span class="c2">${I("b")}</span> sin <span class="c1">${I("A")}</span>/<span class="c3">${I("a")}</span>`, lbl: "then test 180° − B" }],
        landmark: { hit: done, big: done ? (n ? `${n} triangle${n > 1 ? "s" : ""}` : "no triangle") : `step ${cur} of ${last}`, note: done ? "Angles to the nearest tenth of a degree, sides to the nearest tenth." : "Classify with h first, then calculate." },
        narr: "Predict the number of triangles before the law of sines step." });
      return;
    }
    k.split(c, host, { off: true });
    const g = SSA_C[ci], S = MR.solveTriangle(g), n = S.count, ans = pick !== null;
    const F0 = ssaFig(k, c, g, { arc: ans, h: ans, show: [ans, ans] }); F0.P.labels(F0.labels);
    k.readout({ title: "How many triangles?", big: `<span class="c1">${I("A")} = ${g.A}°</span>, <span class="c3">${I("a")} = ${g.a}</span>, <span class="c2">${I("b")} = ${g.b}</span>`,
      rows: ans ? [{ lhs: `<span class="c5">${caseText(g, S)}</span>`, lbl: g.A < 90 ? `h = ${g.b} sin ${g.A}° ${nr(S.h, 2)}` : "" }] : [{ lhs: `${I("h")} = ${I("b")} sin ${I("A")}`, lbl: "compare a with h and with b" }],
      landmark: { hit: ans && pick === n, big: ans ? (pick === n ? "right" : `not quite: ${n}`) : `${right} of ${tried} right`, note: ans ? `Score ${right} of ${tried}. Press Next.` : `Case ${ci + 1} of ${SSA_C.length}.` },
      narr: "Obtuse A: only a > b works, whatever h is." });
  });
};
})();
