/* ============ Labs: Trigonometry, batch B5 (tan/cot/sec/csc graphs, inverse functions, modelling) ============ */
(function(){
const L = window.LABS;
const MI = "−", PI = Math.PI, TAU = 2 * PI;

/* ---------- DOM-free helpers ---------- */
// asymGen(MR, fn, B, C): general vertical asymptote of A·fn(B(x − C)) + D, e.g. "x = π/4 + nπ/2" (spacing π/|B|)
const asymGen = (MR, fn, B, C) => MR.asymGenT(fn, B, C);
// hltLine(f, a, b): a height y that the graph of f on [a, b] meets at least twice (horizontal line test fails), or null.
// Candidates: halfway between each interior turning value and the nearer-side endpoint value, then a grid of heights.
const hltLine = (f, a, b) => { const N = 600, xs = [], ys = []; for (let i = 0; i <= N; i++) { const x = a + (b - a) * i / N; xs.push(x); ys.push(f(x)); }
  const hits = y0 => { const h = []; for (let i = 1; i <= N; i++) { const u = ys[i - 1] - y0, v = ys[i] - y0; if (!isFinite(u) || !isFinite(v) || Math.abs(ys[i] - ys[i - 1]) > 5) continue; if (u === 0 || u * v < 0) h.push(xs[i]); } return h; };
  const cands = []; for (let i = 1; i < N; i++) { const p = ys[i - 1], q = ys[i], r = ys[i + 1]; if (isFinite(p + q + r) && (q - p) * (r - q) < 0) cands.push((q + (q > p ? Math.max(ys[0], ys[N]) : Math.min(ys[0], ys[N]))) / 2); }
  for (let j = 1; j < 40; j++) cands.push(-2.6 + 5.2 * j / 40);
  for (const y0 of cands) { if (!isFinite(y0) || Math.abs(y0) > 3) continue; const h = hits(y0); if (h.length >= 2) return { y: y0, hits: h }; } return null; };
// band(w, h, top): pads for a square picture beside (wide) or above (narrow) a graph → [picturePad, graphPad]
const band = (w, h, top) => { if (w >= 600) { const s = Math.min(w * .36, h - top - 24); return [{ l: 8, r: w - 8 - s, t: top + 6, b: h - top - 6 - s }, { l: s + 52, r: 14, t: top + 6, b: 30 }]; }
  const s = Math.min((h - top) * .4, w - 20); return [{ l: (w - s) / 2, r: (w - s) / 2, t: top + 2, b: h - top - 2 - s }, { l: 40, r: 14, t: top + s + 16, b: 28 }]; };
const numT = (v, p = 2) => String(+(+v).toFixed(p)).replace("-", MI);

/* ======================= trig-other-graphs ======================= */
L["trig-other-graphs"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas();
  const COL = { sin: C.pink, cos: C.cyan }, USES = { tan: ["sin", "cos"], cot: ["cos", "sin"], sec: ["cos"], csc: ["sin"] };
  const TG = [["tan", 2, 1, 0], ["tan", 1, 2, 0], ["cot", 1, .5, 0], ["sec", 2, 1, 0], ["csc", 1, 2, 0], ["tan", -1, 1, PI / 4]];
  let mode = "build", fn = "tan", ti = 0, play = false, S, X, playB, matchEls = [];
  const enter = () => { k.showGroup(mode === "build" ? "build" : "tr"); matchEls.forEach(e => { e.style.display = mode === "match" ? "" : "none"; });
    if (mode === "match") { S.set("A", 1); S.set("B", 1); S.set("C", 0); }
    k.guard(mode === "match" ? [MR.sinEq(...TG[ti], 0)] : []);
    k.hint(mode === "build" ? "Slide x (or press Play): the green value is the quotient or reciprocal of the dashed curves at x." : mode === "transform" ? "A stretches, B changes the period, C slides everything, asymptotes included." : "Pick the function, then match the asymptotes (B, C) before the stretch (A)."); };
  k.modes([["build", "Build"], ["transform", "Transform"], ["match", "Match"]], mode, m => { mode = m; enter(); });
  k.select("Function", [["tan", "tan x"], ["cot", "cot x"], ["sec", "sec x"], ["csc", "csc x"]], fn, v => { fn = v; });
  k.group("build", () => { X = k.params([{ key: "x", min: -PI, max: TAU, step: PI / 12, value: PI / 3, cls: "c1", fmt: v => MR.piFmt(v) }]);
    playB = k.button("Play", () => { play = !play; playB.textContent = play ? "Pause" : "Play"; }, "btn ghost"); });
  k.group("tr", () => { S = k.params([{ key: "A", min: -3, max: 3, step: .5, value: 1, cls: "c3" }, { key: "B", min: .5, max: 3, step: .5, value: 1, cls: "c2" },
      { key: "C", min: -PI / 2, max: PI / 2, step: PI / 12, value: 0, cls: "c1", fmt: v => MR.piFmt(v) }], (key, v) => { if (key === "A" && v === 0) S.set("A", .5); });
    matchEls = [k.button("New target", () => { ti = (ti + 1) % TG.length; enter(); }, "btn ghost"),
      k.button("Show answer", () => { const [f, A, B, Cc] = TG[ti]; fn = f; k.ctl.querySelector("select").value = f; S.set("A", A); S.set("B", B); S.set("C", Cc); }, "btn ghost")]; });
  enter();
  k.loop(dt => { c.begin(); const narrow = c.w < 600, lab = [];
    const P = k.plane(c, { xmin: -PI - .2, xmax: TAU + .2, ymin: -4.6, ymax: 4.6, xstep: narrow ? PI : PI / 2, ystep: 1, pad: { l: 40, r: 16, t: 16, b: 30 } });
    P.grid(); P.piAxes();
    if (mode === "build") {
      if (play) { let x = X.x + dt * .7; if (x > TAU) x = -PI; X.set("x", x); }
      const x = X.x, f = MR.sinusoid(fn), asy = MR.asymptotes(fn, 1, 0, P.xmin, P.xmax), q = MR.piQ(x, 12);
      USES[fn].forEach(g => { P.curve(MR.sinusoid(g), k.alpha(COL[g], .75), { w: 1.6, dash: [6, 5] }); lab.push({ text: `${g} x`, ...P.onCurve(MR.sinusoid(g), g === "sin" ? .12 : .3), color: COL[g] }); });
      asy.forEach(a => P.vasym(a, C.violet, 2));
      P.curve(f, k.alpha(C.green, .25), { w: 2, breaks: asy });
      if (x > P.xmin + .05) P.curve(f, C.green, { w: 3, breaks: asy, to: x });
      USES[fn].forEach((g, i) => { const v = MR.sinusoid(g)(x), xo = x + (i ? .06 : -.06); P.seg(xo, 0, xo, v, COL[g], 3); });
      const y = f(x), und = q ? !!MR.trigExact(fn, q).undef : Math.abs(fn === "tan" || fn === "sec" ? Math.cos(x) : Math.sin(x)) < 1e-9;
      if (!und) P.dot(x, y, C.green, 6);
      lab.push({ text: `${fn} x`, ...(P.onCurve(f, .78) || { x: 5, y: 3 }), color: C.green });
      const ex = g => q ? MR.trigExact(g, q).text : numT(MR.sinusoid(g)(x), 3), xs = q ? MR.piT(q) : numT(x, 3);
      const rows = ["sin", "cos"].map(g => ({ lhs: `<span class="${g === "sin" ? "c3" : "c2"}">${g} ${xs}</span> =`, v: ex(g), cls: g === "sin" ? "c3" : "c2" }));
      rows.push({ lhs: `<span class="c5">${fn} ${xs}</span> =`, v: und ? "undefined" : ex(fn), cls: "c5" });
      const den = fn === "tan" || fn === "sec" ? "cos" : "sin";
      k.readout({ title: "Built point by point", big: `<span class="m"><span class="c5">${fn} <i>x</i></span> = ${fn === "tan" ? '<span class="c3">sin <i>x</i></span> / <span class="c2">cos <i>x</i></span>' : fn === "cot" ? '<span class="c2">cos <i>x</i></span> / <span class="c3">sin <i>x</i></span>' : `1 / <span class="${den === "sin" ? "c3" : "c2"}">${den} <i>x</i></span>`}</span>`, rows,
        landmark: { hit: und, big: und ? `<span class="c4">${den} ${xs} = 0</span>: asymptote` : `asymptotes where ${den} x = 0`, note: und ? "Dividing by zero: the graph runs off to ±∞ on either side." : fn === "sec" || fn === "csc" ? `Where ${den} x = ±1 the branch touches the dashed curve.` : "Slide x onto a zero of the denominator." },
        narr: "Watch the green value grow as the denominator shrinks toward 0." });
      P.labels(lab); return; }
    const { A, B } = S, Cc = S.C, f = MR.sinusoid(fn, A, B, Cc, 0), asy = MR.asymptotes(fn, B, Cc, P.xmin, P.xmax), per = MR.period(fn, B), recip = fn === "sec" ? "cos" : fn === "csc" ? "sin" : null;
    if (recip) { const g = MR.sinusoid(recip, A, B, Cc, 0); P.curve(g, k.alpha(COL[recip], .8), { w: 1.6, dash: [6, 5] }); lab.push({ text: MR.sinEq(recip, A, B, Cc, 0).slice(4), ...(P.onCurve(g, .1) || { x: 0, y: 0 }), color: COL[recip] }); }
    else P.curve(MR.sinusoid(fn), k.alpha(C.green, .45), { w: 1.5, dash: [6, 5], breaks: MR.asymptotes(fn, 1, 0, P.xmin, P.xmax) });
    let tg = null; if (mode === "match") { const [tf, tA, tB, tC] = TG[ti]; tg = MR.sinusoid(tf, tA, tB, tC, 0); P.curve(tg, k.alpha(C.muted, .45), { w: 8, breaks: MR.asymptotes(tf, tB, tC, P.xmin, P.xmax) }); }
    asy.forEach(a => P.vasym(a, C.violet, 2)); P.curve(f, C.green, { w: 3, breaks: asy });
    const kp = recip ? MR.keyPts(recip, A, B, Cc, 0).filter(p => Math.abs(Math.abs(p.y) - Math.abs(A)) < 1e-9) : MR.keyPts(fn, A, B, Cc, 0); kp.forEach(p => P.hole(p.x, p.y, C.text, 4.5));
    const a0 = asy.find(a => a > -1e-9) ?? asy[0], yb = -4.1; if (a0 !== undefined) { P.seg(a0, yb, a0 + per, yb, C.cyan, 2.5); lab.push({ text: `period ${MR.piFmt(per)}`, x: a0 + per / 2, y: yb, color: C.cyan, prefer: "n" }); }
    if (Math.abs(Cc) > 1e-9) c.d.arrow(P.X(0), P.Y(3.9), P.X(Cc), P.Y(3.9), C.amber, 2.5);
    lab.push({ text: `${fn}`, ...(P.onCurve(f, .62) || { x: 1, y: 1 }), color: C.green });
    const rng = recip ? `(−∞, ${numT(-Math.abs(A))}] ∪ [${numT(Math.abs(A))}, ∞)` : "all real numbers";
    const rows = [{ lhs: `period ${recip ? "2π" : "π"}/|<span class="c2"><i>B</i></span>|`, v: MR.piFmt(per), cls: "c2" }, { lhs: `<span class="c4">asymptotes</span>`, v: asymGen(MR, fn, B, Cc), cls: "c4" }, { lhs: "range", v: rng }];
    if (mode === "transform") { const other = ["tan", "cot", "sec", "csc"].find(g => g !== fn && MR.sameCurve(f, MR.sinusoid(g)));
      k.readout({ title: "Transform the graph", big: `<span class="m" style="font-size:.9em">${MR.sinEq(fn, A, B, Cc, 0, { html: true })}</span>`, rows,
        landmark: { hit: !!other, big: other ? `same graph as <i>y</i> = ${other} <i>x</i>` : "asymptotes move with C", note: other ? "A flip and a shift turn one of these graphs into another." : "Can you make tan land exactly on cot?" }, narr: "Try A = −1, C = π/2 on tan x, or C = π/2 on sec x." }); }
    else { const [tf, tA, tB] = TG[ti], ok = MR.sameCurve(f, tg), pt = MR.period(tf, tB);
      k.readout({ title: "Match the grey graph", big: `<span class="m" style="font-size:.9em">${MR.sinEq(fn, A, B, Cc, 0, { html: true })}</span>`, rows: [
        { lhs: "function", v: fn === tf || ok ? "✓" : "try another", cls: "c5" }, { lhs: "period", v: Math.abs(per - pt) < 1e-9 ? "✓" : per > pt ? "too long" : "too short", cls: "c2" }, { lhs: "stretch, flip, shift", v: ok ? "✓" : "not yet", cls: "c3" }],
        landmark: { hit: ok, big: ok ? "Matched" : `target ${ti + 1} of ${TG.length}`, note: ok ? "Same graph. Another A or C can give it too." : "Line up the violet asymptotes first." }, narr: "New target gives another graph." }); }
    P.labels(lab); });
};

/* ======================= trig-inverse ======================= */
L["trig-inverse"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  const COL = { sin: C.pink, cos: C.cyan, tan: C.green }, RNG = { sin: [-PI / 2, PI / 2, "[−π/2, π/2]", "I and IV"], cos: [0, PI, "[0, π]", "I and II"], tan: [-PI / 2, PI / 2, "(−π/2, π/2)", "I and IV"] };
  const EV = [["sin", "1/2", .5, Q(1, 6)], ["cos", "−√2/2", -Math.SQRT1_2, Q(3, 4)], ["tan", "−1", -1, Q(-1, 4)], ["sin", "−√3/2", -Math.sqrt(3) / 2, Q(-1, 3)], ["cos", "−1/2", -.5, Q(2, 3)], ["tan", "√3", Math.sqrt(3), Q(1, 3)]];
  // compositions outer(inner⁻¹(v)): terminal point (x, y), radius r; known sides follow from the inner function
  const CO = [["cos", "sin", "3/5", 4, 3, 5, "4/5"], ["tan", "cos", "−5/13", -5, 12, 13, "−12/5"], ["sin", "tan", "−8/15", 15, -8, 17, "−8/17"], ["sin", "cos", "−7/25", -7, 24, 25, "24/25"]];
  let mode = "restrict", fn = "sin", ei = 0, ci = 0, st = 0, S, ST;
  const inv = f => `${f}<sup>−1</sup>`;
  const enter = () => { k.showGroup(mode === "restrict" ? "restrict" : "steps"); st = 0; if (ST) ST.reset();
    k.guard(mode === "evaluate" ? [MR.piT(EV[ei][3])] : mode === "compose" ? [CO[ci][6]] : []);
    k.hint(mode === "restrict" ? "Move the ends of the window until the piece passes the horizontal line test and still takes every value." : mode === "evaluate" ? "Two angles on the circle have this value; the inverse keeps the one in the principal range." : "Draw the angle's triangle in its quadrant, find the third side, then read the outer function."); };
  k.modes([["restrict", "Restrict"], ["evaluate", "Evaluate"], ["compose", "Compose"]], mode, m => { mode = m; enter(); });
  k.group("restrict", () => { k.select("Function", [["sin", "sin x"], ["cos", "cos x"], ["tan", "tan x"]], fn, v => { fn = v; });
    S = k.params([{ key: "a", min: -PI, max: PI, step: PI / 12, value: -PI, cls: "c1", fmt: v => MR.piFmt(v) }, { key: "b", min: -PI, max: PI, step: PI / 12, value: PI, cls: "c1", fmt: v => MR.piFmt(v) }],
      (key, v) => { if (S.b - S.a < PI / 12 - 1e-9) key === "a" ? S.set("b", Math.min(PI, v + PI / 12)) : S.set("a", Math.max(-PI, v - PI / 12)); }); });
  k.group("steps", () => { ST = k.stepper(() => (mode === "compose" ? 4 : 3), j => { st = j; }); k.button("New problem", () => { if (mode === "compose") ci = (ci + 1) % CO.length; else ei = (ei + 1) % EV.length; enter(); }, "btn ghost"); });
  enter();
  k.loop(() => { c.begin(); const lab = [];
    if (mode === "restrict") { k.split(c, host, { off: true });
      const { a, b } = S, f = MR.sinusoid(fn), col = COL[fn], P = k.plane(c, { xmin: -PI - .35, xmax: PI + .5, ymin: -PI - .3, ymax: PI + .3, equal: true, xstep: PI / 2, ystep: 1 });
      P.grid(); P.piAxes(); const asy = fn === "tan" ? [-PI / 2, PI / 2] : [];
      P.seg(-4, -4, 4, 4, C.violet, 1.5, [6, 5]); lab.push({ text: "y = x", x: 2.7, y: 2.7, color: C.violet });
      P.curve(f, k.alpha(col, .3), { w: 2, breaks: asy }); P.curve(f, col, { w: 3.5, from: a, to: b, breaks: asy });
      const g = c.g; P.clip(() => { g.save(); g.strokeStyle = C.amber; g.lineWidth = 3; g.beginPath(); let pen = false;
        for (let i = 0; i <= 400; i++) { const t = a + (b - a) * i / 400, v = f(t); if (!isFinite(v) || Math.abs(v) > 30 || asy.some(s => Math.abs(t - s) < 1e-3)) { pen = false; continue; } const px = P.X(v), py = P.Y(t); pen ? g.lineTo(px, py) : g.moveTo(px, py); pen = true; if (i % 8 === 0) P.pts.push([px, py]); }
        g.stroke(); g.restore(); });
      const inside = asy.some(s => s > a + 1e-9 && s < b - 1e-9), bad = hltLine(f, a + 1e-6, b - 1e-6), pass = !bad && !inside;
      if (bad) { P.hasym(bad.y, k.alpha(C.text, .6)); bad.hits.forEach(x => P.dot(x, bad.y, C.text, 5)); }
      lab.push({ text: `${fn} x`, ...(P.onCurve(f, .5, a, b) || { x: 0, y: 0 }), color: col }, { text: `${fn}⁻¹`, x: f(a + .3 * (b - a)), y: a + .3 * (b - a), color: C.amber });
      const R = RNG[fn], prin = Math.abs(a - R[0]) < 1e-9 && Math.abs(b - R[1]) < 1e-9;
      const ends = () => { if (fn === "tan") { if (inside) return "every real value, more than once"; const at = v => asy.some(s => Math.abs(v - s) < 1e-9), lo = at(a) ? "(−∞" : `[${MR.trigExact("tan", MR.piQ(a, 12)).text}`, hi = at(b) ? "∞)" : `${MR.trigExact("tan", MR.piQ(b, 12)).text}]`; return `${lo}, ${hi}`; }
        const xs = [a, b]; for (let n = -4; n <= 4; n++) { const x = n * PI / 2; if (x > a && x < b) xs.push(x); }
        const vs = xs.map(x => ({ v: f(x), t: MR.trigExact(fn, MR.piQ(x, 12)).text })).sort((p, q) => p.v - q.v); return `[${vs[0].t}, ${vs[vs.length - 1].t}]`; };
      k.readout({ title: "Restrict, then reflect", big: `<span class="m"><span class="${fn === "sin" ? "c3" : fn === "cos" ? "c2" : "c5"}">${fn} <i>x</i></span> on [${MR.piFmt(a)}, ${MR.piFmt(b)}]</span>`, rows: [
        { lhs: "horizontal line test", v: pass ? "passes" : bad ? `fails: y = ${numT(bad.y)} meets it ${bad.hits.length} times` : "fails: two branches", cls: pass ? "c5" : "" }, { lhs: "values taken", v: ends() }],
        landmark: { hit: prin, big: prin ? `<span class="c1">${inv(fn)}</span>: ${fn === "tan" ? "ℝ" : "[−1, 1]"} → ${R[2]}` : `standard window ${R[2]}`, note: prin ? "One-to-one, and every value is taken exactly once. This is the principal branch." : "Passing the test is not enough: the piece should also take every value." },
        narr: "Try [0, π/2] for sine: it passes, but misses the negative values." });
      P.labels(lab); return; }
    const pad = k.split(c, host, { side: "left", frac: .44, hfrac: .42 }); pad.b += 30;
    if (mode === "evaluate") { const [f, kT, kv, ans] = EV[ei], col = COL[f], R = RNG[f], P = k.plane(c, { xmin: -1.55, xmax: 1.55, ymin: -1.45, ymax: 1.45, equal: true, xstep: .5, ystep: .5, pad });
      P.grid(); P.axes(false); P.param(Math.cos, Math.sin, 0, TAU, k.alpha(C.violet, .8), 1.5);
      P.param(Math.cos, Math.sin, R[0], R[1], k.alpha(col, .4), 9);
      lab.push({ text: R[2], x: Math.cos((R[0] + R[1]) / 2) * 1.2, y: Math.sin((R[0] + R[1]) / 2) * 1.2, color: col });
      const u1 = Q.val(ans) * PI, u2 = f === "sin" ? PI - u1 : f === "cos" ? -u1 : u1 + PI, rej = MR.piFmt(((u2 % TAU) + TAU) % TAU);
      lab.push({ text: f === "sin" ? `y = ${kT}` : f === "cos" ? `x = ${kT}` : `slope ${kT}`, x: f === "cos" ? kv : 1.25 * Math.cos(Math.atan(f === "tan" ? kv : 0)), y: f === "sin" ? kv : f === "cos" ? -1.25 : 1.25 * Math.sin(Math.atan(kv)), color: col });
      if (f === "sin") P.seg(-1.5, kv, 1.5, kv, col, 2, [6, 4]); else if (f === "cos") P.seg(kv, -1.4, kv, 1.4, col, 2, [6, 4]); else { const ph = Math.atan(kv); P.seg(-1.6 * Math.cos(ph), -1.6 * Math.sin(ph), 1.6 * Math.cos(ph), 1.6 * Math.sin(ph), col, 2, [6, 4]); }
      if (st >= 1) [u1, u2].forEach((u, i) => { const bad = i === 1 && st >= 2, cl = i === 1 ? (bad ? C.muted : C.text) : (st >= 3 ? C.amber : C.text);
        P.seg(0, 0, Math.cos(u), Math.sin(u), cl, i === 0 && st >= 3 ? 3.5 : 2); P.dot(Math.cos(u), Math.sin(u), cl, 6);
        lab.push({ text: i ? (bad ? `${rej} ✗` : rej) : (st >= 3 ? `θ = ${MR.piT(ans)}` : MR.piT(ans)), x: Math.cos(u), y: Math.sin(u), color: cl, prefer: Math.cos(u) >= 0 ? "e" : "w" }); });
      if (st >= 3) P.angleArc(0, 0, 30, 0, u1, C.amber, { w: 2.5 });
      const nm = `${inv(f)}(${kT})`, w = { sin: "y-coordinate", cos: "x-coordinate", tan: "slope y/x" }[f];
      SP.set([{ tag: "candidates", eq: `${f} <i>θ</i> = ${kT}: &nbsp;<i>θ</i> = ${MR.piT(ans)} or ${rej}`, why: `The ${w} is ${kT} at two points of the circle.` },
        { tag: "range", eq: `${rej} is not in ${R[2]}`, why: `${inv(f)} answers only in quadrants ${R[3]}${f === "cos" ? "" : ", with negative angles below the x-axis"}.` },
        { tag: "answer", eq: `<span class="c1">${nm} = ${MR.piT(ans)}</span>`, why: `Check: ${f}(${MR.piT(ans)}) = ${kT}, and ${MR.piT(ans)} is in ${R[2]}.` }], st - 1);
      k.readout({ title: "Principal value", big: `<span class="m"><span class="c1">${nm}</span> = ${st >= 3 ? `<span class="c1">${MR.piT(ans)}</span>` : "?"}</span>`, landmark: { hit: st >= 3, big: st >= 3 ? "one answer, in the range" : `${st} of 3 steps`, note: st >= 2 ? `${rej} has the right value but the wrong quadrant.` : "Press Step." }, narr: "New problem gives another value." });
      P.labels(lab); return; }
    const [o, i, vT, x, y, r, ans] = CO[ci], th = Math.atan2(y, x), qd = x > 0 ? (y > 0 ? "I" : "IV") : "II", R = RNG[i];
    const P = k.plane(c, { ...k.fit([[0, 0], [x, 0], [x, y], [-.4 * r, 0], [.4 * r, 0], [0, .35 * r * Math.sign(y)]], .2), equal: true, pad, xstep: r > 12 ? 5 : 1, ystep: r > 12 ? 5 : 1 });
    P.grid(); P.axes();
    const known = i === "sin" ? ["y", "r"] : i === "cos" ? ["x", "r"] : ["x", "y"], miss = ["x", "y", "r"].find(s => !known.includes(s)), val = { x, y, r };
    const showS = s => st >= 3 || (st >= 2 && known.includes(s));
    const ar = P.angleArc(0, 0, 46, R[0], R[1], k.alpha(COL[i], .7), { dash: [5, 4], arrow: false }); if (st < 2 && ar) lab.push({ text: `${i}⁻¹ range ${R[2]}`, x: ar.x, y: ar.y, color: COL[i] });
    if (st >= 1) { P.seg(0, 0, x, y, C.violet, 3); P.angleArc(0, 0, 30, 0, th, C.amber, { w: 2.5 }); lab.push({ text: "θ", x: .22 * r * Math.cos(th / 2), y: .22 * r * Math.sin(th / 2), color: C.amber }); }
    if (st >= 2) { P.seg(0, 0, x, 0, C.cyan, 3); P.seg(x, 0, x, y, C.pink, 3); P.rightMark([x, 0], [0, 0], [x, y]); P.dot(x, y, C.text, 5);
      [["x", x / 2, 0, C.cyan], ["y", x, y / 2, C.pink], ["r", x / 2, y / 2, C.violet]].forEach(([s, lx, ly, cl]) => lab.push({ text: `${s} = ${showS(s) ? String(val[s]).replace("-", MI) : "?"}`, x: lx, y: ly, color: cl })); }
    const sq = miss === "r" ? `√(${x}² + ${y}²)` : miss === "x" ? `√(${r}² − ${y}²)` : `√(${r}² − ${x}²)`, sgn = miss !== "r" && val[miss] < 0 ? MI : "";
    const of = { sin: "y/r", cos: "x/r", tan: "y/x" }, iv = { sin: "y/r", cos: "x/r", tan: "y/x" }[i];
    SP.set([{ tag: "angle", eq: `<i>θ</i> = ${inv(i)}(${vT}) is in quadrant ${qd}`, why: `${inv(i)} answers in ${R[2]}; the sign of ${vT} picks the quadrant.` },
      { tag: "triangle", eq: `${i} <i>θ</i> = ${iv} = ${vT}: &nbsp;${known.map(s => `${s} = ${String(val[s]).replace("-", MI)}`).join(", ")}`, why: "Put the signs on the legs, the hypotenuse r stays positive." },
      { tag: "third side", eq: `${miss} = ${sgn}${sq} = ${String(val[miss]).replace("-", MI)}`, why: `By Pythagoras, with the sign of quadrant ${qd}.` },
      { tag: "evaluate", eq: `<span class="c5">${o} <i>θ</i> = ${of[o]} = ${ans}</span>`, why: "Read the outer function off the triangle." }], st - 1);
    k.readout({ title: "Triangle method", big: `<span class="m">${o}(${inv(i)}(${vT})) = ${st >= 4 ? `<span class="c5">${ans}</span>` : "?"}</span>`, landmark: { hit: st >= 4, big: st >= 4 ? `quadrant ${qd}, signs included` : `${st} of 4 steps`, note: "The inverse fixes the quadrant; the triangle gives the size." }, narr: "New problem gives another composition." });
    P.labels(lab); });
};

/* ======================= trig-modeling ======================= */
L["trig-modeling"] = k => {
  MathKit.attach(k);
  const { C, MR } = k, { Q } = MR, c = k.canvas();
  const MON = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const DATA = { fit: { name: "New York (Central Park)", v: [0.9, 2.2, 6.0, 12.1, 17.3, 22.2, 25.3, 24.5, 20.7, 14.4, 8.9, 3.9], h: [[7, 25.3], [1, 0.9]] },
    turn: { name: "Sydney (Observatory Hill)", v: [23.5, 23.4, 22.1, 19.5, 16.6, 14.2, 13.4, 14.5, 17.0, 18.9, 20.4, 22.1], h: [[4, 20], [9, 16]] } };
  let mode = "ferris", t = 0, play = true, F, SPR, playB, handles = [], view = {};
  const enter = () => { k.showGroup(mode === "turn" ? "fit" : mode); t = 0;
    if (DATA[mode]) handles = DATA[mode].h.map(([x, y]) => ({ x, y }));
    k.guard(mode === "turn" ? ["5.05", "18.45"] : []);
    k.hint(mode === "ferris" ? "Change the radius and the time for one turn; the height graph follows the rider." : mode === "spring" ? "Set c = 0 for simple harmonic motion, then add damping." : "Drag the two white handles onto the hottest and coldest months."); };
  k.modes([["ferris", "Ferris wheel"], ["fit", "Fit"], ["turn", "Your turn"], ["spring", "Spring"]], mode, m => { mode = m; enter(); });
  k.group("ferris", () => { F = k.params([{ key: "r", min: 10, max: 30, step: 5, value: 25, cls: "c3", fmt: v => v + " m" }, { key: "P", min: 10, max: 30, step: 5, value: 20, cls: "c2", fmt: v => v + " min" }], () => { t = 0; });
    playB = k.button("Pause", () => { play = !play; playB.textContent = play ? "Pause" : "Play"; }, "btn ghost"); });
  k.group("spring", () => { SPR = k.params([{ key: "a", min: 1, max: 4, step: .5, value: 3, cls: "c3", fmt: v => v + " cm" }, { key: "w", label: `<span class="c2"><i>ω</i></span>`, min: 1, max: 8, step: .5, value: 4, fmt: v => v + " rad/s" },
    { key: "c", label: `<span class="c5"><i>c</i></span>`, min: 0, max: .6, step: .05, value: .2, fmt: v => numT(v) }], () => { t = 0; }); });
  k.group("fit", () => { k.button("Reset handles", () => { handles = DATA[mode].h.map(([x, y]) => ({ x, y })); }, "btn ghost"); });
  k.drag(c, () => k.__fitP, [0, 1].map(i => ({ get x(){ return handles[i] ? handles[i].x : 0; }, set x(v){ if (handles[i]) handles[i].x = Math.round(v * 2) / 2; }, get y(){ return handles[i] ? handles[i].y : 0; }, set y(v){ if (handles[i]) handles[i].y = Math.round(v * 20) / 20; } })));
  enter();
  const top = () => { const mb = k.stage.querySelector(".modes"); return mb ? mb.offsetTop + mb.offsetHeight + 8 : 8; };
  k.loop(dt => { c.begin(); const lab = []; if (!DATA[mode]) k.__fitP = null;
    if (DATA[mode]) { const D0 = DATA[mode], P = k.plane(c, { xmin: 0, xmax: 13, ymin: -4, ymax: 32, xstep: 1, ystep: 5, xlabel: "month", ylabel: "°C", pad: { l: 40, r: 16, t: 16, b: 30 } }); k.__fitP = P;
      P.grid(); P.axes(); const [hx, hn] = handles, A = (hx.y - hn.y) / 2, Dm = (hx.y + hn.y) / 2, half = Math.max(.5, Math.abs(hn.x - hx.x)), Pd = 2 * half, B = TAU / Pd, f = MR.sinusoid("cos", A, B, hx.x, Dm);
      P.hasym(Dm, C.violet); P.curve(f, C.text, { w: 2.5 }); P.seg(hx.x, Dm, hx.x, hx.y, C.pink, 3); P.seg(hx.x, -2.4, hx.x + (hn.x > hx.x ? 1 : -1) * half, -2.4, C.cyan, 2.5);
      c.d.arrow(P.X(0), P.Y(29.5), P.X(hx.x), P.Y(29.5), C.amber, 2);
      D0.v.forEach((v, i) => P.dot(i + 1, v, C.green, 5));
      const iM = D0.v.indexOf(Math.max(...D0.v)), im = D0.v.indexOf(Math.min(...D0.v));
      lab.push({ text: `${MON[iM]} ${numT(D0.v[iM], 1)}`, x: iM + 1, y: D0.v[iM], color: C.green, prefer: "n" }, { text: `${MON[im]} ${numT(D0.v[im], 1)}`, x: im + 1, y: D0.v[im], color: C.green, prefer: "s" },
        { text: "midline", x: 12.3, y: Dm, color: C.violet, prefer: "n" }, { text: `½ period = ${numT(half)}`, x: hx.x + (hn.x > hx.x ? 1 : -1) * half / 2, y: -2.4, color: C.cyan, prefer: "s" });
      handles.forEach(h => { P.point(h.x, h.y, C.ink, 8); P.point(h.x, h.y, C.text, 5.5); });
      const rms = Math.sqrt(D0.v.reduce((s, v, i) => s + (f(i + 1) - v) ** 2, 0) / 12), mx = Math.max(...D0.v), mn = Math.min(...D0.v);
      const ok = Math.abs(hx.y - mx) < 1e-9 && Math.abs(hn.y - mn) < 1e-9 && Math.abs(Pd - 12) < 1e-9 && Math.abs(hx.x - (iM + 1)) < 1e-9;
      const bT = MR.piT(Q.div(Q(2), Q(Pd))), cT = numT(hx.x, 1);
      k.readout({ title: `${D0.name}, monthly mean`, big: `<span class="m" style="font-size:.76em"><i>T</i> = <span class="c3">${numT(A)}</span> cos(<span class="c2">${bT}</span>(<i>t</i> − <span class="c1">${cT}</span>)) + <span class="c4">${numT(Dm)}</span></span>`, rows: [
        { lhs: `<span class="c3"><i>A</i></span> = (max − min)/2`, v: numT(A), cls: "c3" }, { lhs: `<span class="c4"><i>D</i></span> = (max + min)/2`, v: numT(Dm), cls: "c4" },
        { lhs: `period, <span class="c1">peak month</span>`, v: `${numT(Pd)} months, ${cT}`, cls: "c2" }, { lhs: "average miss", v: `${numT(rms, 1)} °C`, lbl: "root mean square" }],
        landmark: { hit: ok, big: ok ? "max/min fit" : "drag the handles", note: ok ? (mode === "fit" ? "A northern city peaks in July." : "A southern city peaks in January: the phase moves half a year.") : "Put one handle on the hottest month and one on the coldest." },
        narr: "1991–2020 normals, °C, approximate. Compare the two cities' midlines and amplitudes." });
      P.labels(lab); return; }
    const pd = band(c.w, c.h, top());
    if (mode === "ferris") { const { r, P: Pm } = F, H = r + 2; if (play) t = (t + dt * 2) % 60;   // 1 s of screen time = 2 minutes
      const th = TAU * t / Pm, rx = r * Math.sin(th), ry = H - r * Math.cos(th), h = x => H - r * Math.cos(TAU * x / Pm);
      const W = k.plane(c, { xmin: -r - 5, xmax: r + 5, ymin: -2, ymax: 2 * r + 8, equal: true, pad: pd[0] });
      c.d.circle(W.X(0), W.Y(H), W.X(r) - W.X(0), null, C.muted, 2); W.seg(-r - 4, 0, r + 4, 0, C.muted, 2); W.seg(-r * .5, 0, 0, H, C.faint, 2); W.seg(r * .5, 0, 0, H, C.faint, 2);
      W.seg(0, H, rx, ry, C.violet, 2); W.dot(rx, ry, C.pink, 7); W.seg(0, H, 0, H - r, k.alpha(C.amber, .6), 1.5, [4, 4]); W.angleArc(0, H, 22, -PI / 2, -PI / 2 + th, C.amber, { w: 2 });
      const G = k.plane(c, { xmin: 0, xmax: 60, ymin: 0, ymax: 2 * r + 8, xstep: 10, ystep: 10, xlabel: "t", ylabel: "h", pad: pd[1] });
      G.grid(); G.axes(); G.hasym(H, C.violet); G.curve(h, k.alpha(C.text, .25), { w: 1.5 }); if (t > .05) G.curve(h, C.pink, { w: 3, to: t });
      G.seg(Pm / 2, H, Pm / 2, H + r, C.pink, 2.5); G.seg(0, 2 * r + 5, Pm, 2 * r + 5, C.cyan, 2.5); G.dot(t, h(t), C.pink, 6);
      lab.push({ text: `period ${Pm}`, x: Pm / 2, y: 2 * r + 5, color: C.cyan, prefer: "n" }, { text: `amplitude ${r}`, x: Pm / 2, y: H + r / 2, color: C.pink, prefer: "e" }, { text: `midline ${H}`, x: 55, y: H, color: C.violet, prefer: "s" });
      const top_ = Math.abs((t % Pm) - Pm / 2) < .3;
      k.readout({ title: "Rider's height", big: `<span class="m" style="font-size:.9em"><i>h</i>(<i>t</i>) = −<span class="c3">${r}</span> cos(<span class="c2">${MR.piT(Q(2, Pm))}</span> <i>t</i>) + <span class="c4">${H}</span></span>`, rows: [
        { lhs: "<i>t</i>", v: `${numT(t, 1)} min` }, { lhs: "<i>h</i>(<i>t</i>)", v: `${numT(h(t), 1)} m`, cls: "c3" }],
        landmark: { hit: top_, big: `top: <i>h</i> = ${2 * r + 2} m at <i>t</i> = ${numT(Pm / 2, 1)} min`, note: "Half a turn after boarding at the bottom (2 m)." }, narr: "Boarding at the bottom makes the model a flipped cosine." });
      G.labels(lab); return; }
    const { a, w } = SPR, cc = SPR.c, env = x => a * Math.exp(-cc * x), d = x => env(x) * Math.cos(w * x); t = (t + dt) % 12;
    const S = k.plane(c, { xmin: -3, xmax: 3, ymin: -a - 2, ymax: a + 3.5, pad: pd[0] }), yT = a + 3, yd = d(t);
    S.seg(-1.5, yT, 1.5, yT, C.muted, 3); const n = 14; for (let i = 0; i < n; i++) { const y0 = yT - (yT - yd - .6) * i / n, y1 = yT - (yT - yd - .6) * (i + 1) / n; S.seg(i % 2 ? .4 : -.4, y0, i % 2 ? -.4 : .4, y1, C.text, 1.5); }
    S.seg(-.9, yd, .9, yd, C.violet, 16); S.seg(-2.2, 0, 2.2, 0, C.faint, 1, [4, 4]); S.seg(1.6, 0, 1.6, yd, C.pink, 3);
    const G = k.plane(c, { xmin: 0, xmax: 12, ymin: -a - .6, ymax: a + .6, xstep: 2, ystep: 1, xlabel: "t", ylabel: "d", pad: pd[1] });
    G.grid(); G.axes(); if (cc > 0) { G.curve(env, C.green, { w: 1.8, dash: [6, 5] }); G.curve(x => -env(x), C.green, { w: 1.8, dash: [6, 5] }); }
    G.curve(d, k.alpha(C.text, .25), { w: 1.5 }); if (t > .05) G.curve(d, C.pink, { w: 2.5, to: t }); G.dot(t, yd, C.pink, 6);
    if (cc > 0) lab.push({ text: "±ae^(−ct)", x: 1.5, y: env(1.5), color: C.green, prefer: "n" });
    k.readout({ title: "Mass on a spring", big: `<span class="m" style="font-size:.9em"><i>d</i> = <span class="c3">${numT(a)}</span>${cc > 0 ? `<span class="c5"><i>e</i><sup>−${numT(cc)}<i>t</i></sup></span>` : ""} cos <span class="c2">${numT(w)}</span><i>t</i></span>`, rows: [
      { lhs: `period 2π/<span class="c2"><i>ω</i></span>`, v: `${numT(TAU / w)} s`, cls: "c2" }, { lhs: `frequency <span class="c2"><i>ω</i></span>/2π`, v: `${numT(w / TAU, 3)} Hz`, cls: "c2" }, { lhs: "envelope now", v: `${numT(env(t))} cm`, cls: "c5" }],
      landmark: { hit: cc === 0, big: cc === 0 ? "simple harmonic motion" : `envelope halves every ${numT(Math.LN2 / cc)} s`, note: cc === 0 ? "No damping: the amplitude never shrinks." : "ln 2 / c; the period does not change." }, narr: "Raise ω: faster swings. Raise c: they die out sooner." });
    G.labels(lab); });
};
})();
