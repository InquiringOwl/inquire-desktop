/* Precalculus batch B3: logistic growth, fitting models, linear programming */
(() => {
const L = window.LABS, MI = "−";
const sg = s => String(s).replace(/-/g, MI);
const num = (v, d = 3) => sg(+(+v).toFixed(d));
// KIT CANDIDATE: exact rational as inline HTML without the outer span.m (for use inside larger math lines)
const frH = q => (q.n < 0 ? MI : "") + (q.d === 1 ? Math.abs(q.n) : `<span class="fr"><span>${Math.abs(q.n)}</span><span>${q.d}</span></span>`);

/* ================= Logistic growth (E · Model) ================= */
L["pc-logistic"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "explore", cur = 0, st = null, P = null, D = null;
  const view = { T: 12, Y: 1450 };
  const S = k.vars([
    { key: "c", value: 1200, min: 50, max: 5000, step: 10, cls: "c4", label: "carrying capacity c" },
    { key: "a", value: 39, min: 1, max: 999, step: 1, typeStep: 0.01, cls: "c3", label: "a", fmt: v => num(v, 2) },
    { key: "b", value: 0.8, min: 0.05, max: 3, step: 0.01, px: 4, cls: "c3", label: "growth rate b", fmt: v => num(v, 2) },
    { key: "L", value: 900, min: 10, max: 4990, step: 10, cls: "c5", label: "level L" }
  ], () => { sync(); fresh(); });
  const f = t => S.c / (1 + S.a * Math.exp(-S.b * t)), y0 = () => S.c / (1 + S.a), ti = () => Math.log(S.a) / S.b;
  const dT = () => view.T * 0.12;
  const pts = [
    { name: "carrying capacity", color: C.violet, fixX: true, snapY: 10 },
    { name: "initial value", color: C.pink, fixX: true },
    { name: "inflection point", color: C.green, fixY: true },
    { name: "tangent at the inflection", color: C.green, fixX: true },
    { name: "trace", color: C.amber, x: 2, on: t => f(t) },
    { name: "level", color: C.green, fixX: true, snapY: 10 }];
  const sync = () => {
    if (S.L >= S.c) S.set("L", S.c - 10);
    const T = view.T, t1 = ti(), d = dT();
    Object.assign(pts[0], { x: T * 0.82, y: S.c }); Object.assign(pts[1], { x: 0, y: y0() });
    Object.assign(pts[2], { x: t1, y: S.c / 2 }); Object.assign(pts[3], { x: t1 + d, y: S.c / 2 + S.b * S.c * d / 4 });
    pts[1].clamp = [-1, 1, S.c / 1000, S.c / 2]; pts[4].clamp = [0, T, -1e9, 1e9]; pts[4].x = Math.max(0, Math.min(T, pts[4].x)); pts[4].y = f(pts[4].x); Object.assign(pts[5], { x: T * 0.06, y: S.L });
    pts.forEach((p, i) => { p.off = mode === "when" ? i !== 5 : i === 5; });
  };
  const rnd = v => (v < 10 ? Math.round(v * 100) / 100 : Math.round(v));
  D = k.drag(c, () => P, pts, (i, p) => {
    if (i === 0) S.set("c", Math.max(50, Math.round(p.y / 10) * 10));
    if (i === 1) S.set("a", Math.max(1, rnd(S.c / Math.max(p.y, S.c / 1000) - 1)));
    if (i === 2 && S.a > 1) S.set("b", Math.max(0.05, Math.min(3, Math.round(Math.log(S.a) / Math.max(p.x, 0.05) * 100) / 100)));
    if (i === 3) { const t1 = ti(), b = Math.max(0.05, Math.min(3, Math.round(4 * (p.y - S.c / 2) / (S.c * dT()) * 100) / 100)); S.set("b", b); if (S.a > 1) S.set("a", Math.max(1, Math.min(999, rnd(Math.exp(b * t1))))); }
    if (i === 5) S.set("L", Math.max(10, Math.min(S.c - 10, Math.round(p.y / 10) * 10)));
    sync(); if (i !== 4) fresh();
  }, { label: "Logistic curve" });
  const tWhen = () => MR.logisticWhen(S.c, S.a, S.b, S.L);
  const fresh = () => { cur = 0; if (st) st.reset(); const t = tWhen(); k.guard(mode === "when" && t !== null ? [`t ≈ ${num(t)}`] : []); };
  const hints = { explore: "Drag the violet capacity line, the start point, the green inflection point or its tangent; scrub c, a, b", when: "Drag the green level line (or scrub L), then Step through the solution" };
  k.modes([["explore", "Explore"], ["when", "When?"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); D.focus = -1; sync(); fresh(); });
  k.group("when", () => { st = k.stepper(() => 5, v => cur = v, { ms: 1400 }); });
  k.showGroup(mode); k.hint(hints[mode]); sync(); fresh();

  const fr = (n, d) => `<span class="fr"><span>${n}</span><span>${d}</span></span>`;
  const eB = () => `<i>e</i><sup>${MI}${S.html("b")}<i>t</i></sup>`;
  k.loop(dt => {
    c.begin(); const d = c.d, lab = [], when = mode === "when";
    if (D.active < 0) k.smooth(view, { T: Math.max(4, Math.min(80, (Math.log(Math.max(S.a, 1)) + 4.5) / S.b)), Y: S.c * 1.2 }, dt);
    sync();
    const pad = k.split(c, host, when ? { side: "right", frac: 0.42, hfrac: 0.44 } : { off: true });
    const T = view.T, Y = view.Y, t1 = ti(), yi = y0();
    P = k.plane(c, { xmin: -T * 0.05, xmax: T, ymin: -Y * 0.05, ymax: Y, pad, xlabel: "t", ylabel: "f(t)" });
    P.grid(); P.axes(); P.hasym(S.c);
    lab.push({ text: `c = ${S.c}`, x: T * 0.6, y: S.c, color: C.violet, font: `14px ${F.math}`, prefer: "n" });
    P.curve(t => yi * Math.exp(S.b * t), k.alpha(C.cyan, 0.85), { from: 0, dash: [6, 5], w: 1.8 });
    const ex = P.onCurve(t => yi * Math.exp(S.b * t), 0.35, 0); if (ex && !when) lab.push({ text: "exponential", x: ex.x, y: ex.y, color: C.cyan, font: `13px ${F.sans}`, prefer: "nw" });
    P.curve(f, C.pink, { from: 0, w: 2.6 });
    if (!when) {
      const dd = dT(), m = S.b * S.c / 4;
      P.seg(t1 - dd, S.c / 2 - m * dd, t1 + dd, S.c / 2 + m * dd, C.green, 1.6, [4, 4]);
      lab.push({ text: `(${num(t1, 2)}, ${num(S.c / 2, 1)})`, x: t1, y: S.c / 2, color: C.green, font: `13px ${F.mono}`, prefer: "se" });
      const tr = pts[4]; P.seg(tr.x, 0, tr.x, tr.y, k.alpha(C.amber, 0.5), 1.2, [3, 3]);
    } else {
      const t = tWhen(), done = cur >= 4 && t !== null;
      P.seg(P.xmin, S.L, P.xmax, S.L, k.alpha(C.green, 0.7), 1.4, [6, 4]);
      lab.push({ text: `L = ${S.L}`, x: T * 0.06, y: S.L, color: C.green, font: `13px ${F.math}`, prefer: "ne" });
      if (done && t >= P.xmin && t <= P.xmax) { P.seg(t, 0, t, S.L, C.green, 1.4, [3, 3]); P.dot(t, S.L, C.green, 6); lab.push({ text: `t ≈ ${num(t)}`, x: t, y: 0, color: C.green, font: `13px ${F.mono}`, prefer: "n" }); }
    }
    D.draw(P); P.labels(lab);
    const rhs = `${S.html("c")} / (1 + ${S.html("a")}${eB()})`; k.eqline(when ? `${rhs} = ${S.html("L")}` : `<i>f</i>(<i>t</i>) = ${rhs}`, when ? "solve" : "model");
    if (!when) {
      const tr = pts[4], ft = f(tr.x), near = Math.abs(tr.x - t1) < T * 0.025 && S.a > 1;
      k.readout({ title: "Logistic growth", big: `<span class="c3"><i>f</i>(<span class="c1">${num(tr.x, 2)}</span>) ≈ ${num(ft, 1)}</span>`,
        rows: [{ lhs: `<i>f</i>(0) = ${fr(S.c, `1 + ${num(S.a, 2)}`)} ≈ ${num(yi, 2)}`, lbl: "initial value" },
          { lhs: S.a > 1 ? `<span class="c5">(ln ${num(S.a, 2)}/${num(S.b, 2)}, ${num(S.c / 2, 1)}) ≈ (${num(t1, 3)}, ${num(S.c / 2, 1)})</span>` : "a = 1: inflection at t = 0", lbl: "inflection point" },
          { lhs: `<i>bc</i>/4 = ${num(S.b * S.c / 4, 2)}`, lbl: "fastest growth per unit time" },
          { lhs: `<i>f</i>′ = <i>bf</i>(1 − <i>f</i>/<i>c</i>) ≈ ${num(S.b * ft * (1 - ft / S.c), 2)}`, lbl: `the exponential grows ${num(S.b * yi * Math.exp(S.b * tr.x), 1)} here` }],
        landmark: { hit: near, big: near ? "fastest growth" : `${num(100 * ft / S.c, 1)}% of capacity`, note: near ? "At the inflection the curve is steepest: half of c, slope bc/4." : "Drag the amber trace to the green inflection point." },
        narr: "Raise a and the start drops; raise b and the S gets steeper. Early on the pink curve hugs the dashed exponential." });
    } else {
      const t = tWhen(), cq = Q(S.c), Lq = Q(S.L), aq = Q(S.a), r1 = Q.div(cq, Lq), r2 = Q.div(Q.sub(cq, Lq), Q.mul(aq, Lq)), r3 = Q.inv(r2);
      SP.set([
        { tag: "set equal", eq: `<span class="m">${S.c}/(1 + ${num(S.a, 2)}<i>e</i><sup>${MI}${num(S.b, 2)}<i>t</i></sup>) = ${S.L}</span>`, why: "The level L must lie between 0 and c." },
        { tag: "clear", eq: `<span class="m">1 + ${num(S.a, 2)}<i>e</i><sup>${MI}${num(S.b, 2)}<i>t</i></sup> = ${frH(r1)}</span>`, why: "Multiply by the denominator, divide by L." },
        { tag: "isolate", eq: `<span class="m"><i>e</i><sup>${MI}${num(S.b, 2)}<i>t</i></sup> = ${frH(r2)}</span>`, why: "Subtract 1, then divide by a." },
        { tag: "take ln", eq: `<span class="m">${MI}${num(S.b, 2)}<i>t</i> = ln ${frH(r2)} = ${MI}ln ${frH(r3)}</span>`, why: "ln undoes e; ln(1/r) = −ln r." },
        { tag: "solve", eq: `<span class="m"><i>t</i> = ${fr(`ln ${frH(r3)}`, num(S.b, 2))} ≈ ${num(t)}</span>`, why: t < 0 ? "Negative: the level was passed before t = 0." : "Divide by −b." }], cur);
      k.readout({ title: "When does it reach L?", big: `<span class="m"><i>f</i>(<i>t</i>) = <span class="c5">${S.L}</span></span>`,
        rows: [{ lhs: `${S.L}/${S.c} = ${num(100 * S.L / S.c, 1)}%`, lbl: "of the carrying capacity" }, { lhs: `<i>t</i> = ln(<i>aL</i>/(<i>c</i> − <i>L</i>))/<i>b</i>`, lbl: "the general answer" }],
        landmark: { hit: cur >= 4, big: cur >= 4 ? `t ≈ ${num(t)}` : `step ${cur + 1} of 5`, note: cur >= 4 ? "The green dot is where the curve meets the level line." : "Step to isolate the exponential." },
        narr: "Try a level near c: the time grows quickly, and at c it never arrives." });
    }
  });
};
/* ================= Fitting exponential, log and power models (E · Model) ================= */
const FIT_DATA = [
  { name: "Bacteria culture", kind: "exp", xl: "hour", yl: "cells/µL", pts: [[0, 120], [1, 190], [2, 290], [3, 470], [4, 720]], win: [6, 1900], snap: [0.1, 10] },
  { name: "Planet orbits", kind: "power", xl: "AU", yl: "years", pts: [[0.387, 0.241], [0.723, 0.615], [1, 1], [1.524, 1.881], [5.203, 11.862]], win: [10, 32], snap: [0.01, 0.01] },
  { name: "Typing practice", kind: "log", xl: "week", yl: "wpm", pts: [[1, 22], [2, 31], [3, 36], [4, 40], [6, 45], [8, 49], [10, 51]], win: [14, 65], snap: [0.1, 0.5] }];
const FIT_KINDS = [["exp", "exponential"], ["log", "logarithmic"], ["power", "power"], ["linear", "linear"]];
L["pc-fitting-models"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom();
  let mode = "fit", ds = FIT_DATA[0], kind = ds.kind, S = null, P = null, P1 = null, P2 = null, tx = 3;
  const lnx = () => kind === "log" || kind === "power", lny = () => kind === "exp" || kind === "power";
  const n = () => ds.pts.length, X = i => S["x" + i], Y = i => S["y" + i];
  const data = () => ds.pts.map((_, i) => [X(i), Y(i)]);
  const clampSet = (i, x, y) => { const [sx, sy] = ds.snap, sn = (v, s) => +(Math.round(v / s) * s).toFixed(4);
    S.set("x" + i, Math.max(lnx() ? sx : 0, Math.min(ds.win[0], sn(x, sx)))); S.set("y" + i, Math.max(sy, Math.min(ds.win[1], sn(y, sy)))); };
  const load = d => { ds = d; kind = d.kind; tx = d.win[0] * 0.55;
    S = k.vars(d.pts.flatMap(([x, y], i) => [{ key: "x" + i, value: x, min: 0, max: d.win[0], step: d.snap[0], typeStep: 0.001, cls: "c1", label: `x of point ${i + 1}` },
      { key: "y" + i, value: y, min: d.snap[1], max: d.win[1], step: d.snap[1], typeStep: 0.001, cls: "c2", label: `y of point ${i + 1}` }]), (key, v) => { const i = +key.slice(1); clampSet(i, X(i), Y(i)); }); };
  load(ds);
  // main plane handles: data points (math coords) + the prediction trace
  const pts = Array.from({ length: 8 }, (_, i) => ({ name: i < 7 ? `data point ${i + 1}` : "prediction", color: i < 7 ? C.cyan : C.amber }));
  const D = k.drag(c, () => P, pts, (i, p) => { if (i < 7) clampSet(i, p.x, p.y); else tx = p.x; }, { label: "Scatter plot" });
  // linearise: two panels share one pixel-space drag
  const pxP = { xmin: 0, xmax: 1e5, ymin: 0, ymax: 1e5, X: v => v, Y: v => v, inv: (x, y) => ({ x, y }), handle: (x, y, col, o) => { const Pp = x < P2.left - 10 ? P1 : P2, m = Pp.inv(x, y); Pp.handle(m.x, m.y, col, o); } };
  const box = Pp => (x, y) => ({ x: Math.max(Pp.left, Math.min(Pp.left + Pp.width, x)), y: Math.max(Pp.top, Math.min(Pp.top + Pp.height, y)) });
  const lpts = Array.from({ length: 14 }, (_, i) => ({ name: (i < 7 ? "data point " : "transformed point ") + (i % 7 + 1), color: C.cyan, path: (x, y) => box(i < 7 ? P1 : P2)(x, y) }));
  const DL = k.drag(c, () => pxP, lpts, (i, p) => { if (i < 7) { const m = P1.inv(p.x, p.y); clampSet(i, m.x, m.y); } else { const m = P2.inv(p.x, p.y), j = i - 7; clampSet(j, lnx() ? Math.exp(m.x) : m.x, lny() ? Math.exp(m.y) : m.y); } }, { label: "Original and transformed data" });
  const hints = { fit: "Drag any data point (or scrub its x and y in the table); the model refits live", lin: "Drag points in either panel: on the right the chosen transform makes the data straight", pred: "Drag the amber point along the model; outside the data it is an extrapolation" };
  const setMode = m => { mode = m; k.hint(hints[m]); D.focus = -1; DL.focus = -1; k.guard([]); };
  k.modes([["fit", "Fit"], ["lin", "Linearise"], ["pred", "Predict"]], mode, setMode);
  k.select("Data", FIT_DATA.map((d, i) => [i, d.name]), 0, v => { load(FIT_DATA[+v]); });
  k.select("Model", FIT_KINDS.map(([v, t]) => [v, t]), kind, v => { kind = v; });
  setMode(mode);
  const sig = v => sg(Math.abs(v) >= 1000 ? Math.round(v) : +v.toPrecision(4));
  const eqH = R => { if (!R) return "needs x > 0 (and y > 0)"; const A = `<span class="c5">${sig(R.a)}</span>`, B = `<span class="c5">${sig(R.b)}</span>`;
    return kind === "exp" ? `<i>y</i> = ${A}·(${B})<sup><i>x</i></sup>` : kind === "power" ? `<i>y</i> = ${A}<i>x</i><sup>${B}</sup>` : kind === "log" ? `<i>y</i> = ${A} + ${B} ln <i>x</i>` : `<i>y</i> = ${A} + ${B}<i>x</i>`; };
  const tName = () => `(${lnx() ? "ln x" : "x"}, ${lny() ? "ln y" : "y"})`;
  let lastPanel = "";
  k.loop(() => {
    c.begin(); const d = c.d, lab = [], R = MR.fit(kind, data()), N = n(), wide = c.w >= 600;
    const xs = data().map(p => p[0]), xlo = Math.min(...xs), xhi = Math.max(...xs);
    // data table panel (Fit), beside the plot on wide stages, transposed on phones
    const pad = k.split(c, host, mode === "fit" ? { side: "right", frac: 0.3, hfrac: 0.3 } : { off: true });
    if (mode === "fit") { const fx = R ? R.f : null, res = i => fx ? sg((Y(i) - fx(X(i))).toFixed(ds.snap[1] < 1 ? 3 : 1)) : "–";
      const html = wide ? `<table class="pcfit"><tr><th>${ds.xl}</th><th>${ds.yl}</th><th>residual</th></tr>${ds.pts.map((_, i) => `<tr><td>${S.html("x" + i)}</td><td>${S.html("y" + i)}</td><td class="c3">${res(i)}</td></tr>`).join("")}</table>`
        : `<table class="pcfit"><tr><th>${ds.xl}</th>${ds.pts.map((_, i) => `<td>${S.html("x" + i)}</td>`).join("")}</tr><tr><th>${ds.yl}</th>${ds.pts.map((_, i) => `<td>${S.html("y" + i)}</td>`).join("")}</tr></table>`;
      if (html !== lastPanel) { host.innerHTML = html; lastPanel = html; } }
    else lastPanel = "";
    k.css("pcfit", ".pcfit{border-collapse:collapse;font:15px var(--math);margin:4px auto}.pcfit th{font:600 11px var(--ui);color:var(--faint);text-transform:uppercase;letter-spacing:.08em;padding:2px 6px}.pcfit td{padding:2px 6px;text-align:right}.narrow .pcfit{font-size:13px}.narrow .pcfit td{padding:2px 3px}");
    const [W, H] = ds.win, plot = (pp, o) => { const Pp = k.plane(c, Object.assign({ pad: pp }, o)); Pp.grid(); Pp.axes(); return Pp; };
    const drawFit = (Pp, labs) => { if (!R) return; Pp.curve(R.f, C.pink, { w: 2.4, from: lnx() ? 1e-3 : Pp.xmin }); const a = Pp.onCurve(R.f, 0.88, lnx() ? 1e-3 : -Infinity); if (a) labs.push({ text: kind, x: a.x, y: a.y, color: C.pink, font: `13px ${F.sans}` }); };
    if (mode !== "lin") {
      P = plot(pad, { xmin: -W * 0.04, xmax: W, ymin: -H * 0.04, ymax: H, xlabel: ds.xl, ylabel: ds.yl });
      drawFit(P, lab);
      pts.forEach((p, i) => { p.off = i < 7 ? (i >= N || mode === "lin") : (mode !== "pred" || !R); if (i < N) Object.assign(p, { x: X(i), y: Y(i), snapX: ds.snap[0], snapY: ds.snap[1] }); });
      if (R && mode === "fit") for (let i = 0; i < N; i++) P.seg(X(i), Y(i), X(i), R.f(X(i)), k.alpha(C.pink, 0.55), 1.2, [3, 3]);
      if (R && mode === "pred") { const lo = lnx() ? W * 0.02 : 0; tx = Math.max(lo, Math.min(W, tx)); Object.assign(pts[7], { x: tx, y: R.f(tx), on: x => R.f(x), clamp: [lo, W, -1e9, 1e9] });
        P.shade(() => P.ymax, () => P.ymin, xlo, xhi, k.alpha(C.cyan, 0.06)); P.seg(tx, 0, tx, R.f(tx), k.alpha(C.amber, 0.6), 1.2, [3, 3]);
        lab.push({ text: `x = ${sig(tx)}`, x: tx, y: 0, color: C.amber, font: `13px ${F.mono}`, prefer: "s" }); }
      D.draw(P); P.labels(lab);
    } else {
      pts.forEach(p => { p.off = true; });
      const T0 = c.w >= 560, top = 48, gap = 30, Ww = c.w, Hh = c.h;
      const pa = T0 ? { l: 40, r: Ww / 2 + gap / 2, t: top, b: 30 } : { l: 40, r: 14, t: top, b: Hh / 2 + gap / 2 }, pb = T0 ? { l: Ww / 2 + gap, r: 14, t: top, b: 30 } : { l: 40, r: 14, t: Hh / 2 + gap, b: 30 };
      P1 = plot(pa, { xmin: -W * 0.04, xmax: W, ymin: -H * 0.04, ymax: H, xlabel: ds.xl, ylabel: ds.yl }); drawFit(P1, []);
      const TX = data().map(([x, y]) => [lnx() ? Math.log(x) : x, lny() ? Math.log(y) : y]).filter(p => p.every(isFinite));
      const ex = (a, b, f) => { const lo = Math.min(...a), hi = Math.max(...a), m = (hi - lo) * 0.25 || 1; return f ? [lo - m, hi + m] : [lo, hi]; };
      const [ax0, ax1] = TX.length ? ex(TX.map(p => p[0]), 0, 1) : [0, 1], [ay0, ay1] = TX.length ? ex(TX.map(p => p[1]), 0, 1) : [0, 1];
      P2 = plot(pb, { xmin: ax0, xmax: ax1, ymin: ay0, ymax: ay1, xlabel: lnx() ? "ln x" : "x", ylabel: lny() ? "ln y" : "y" });
      if (R) P2.curve(X2 => R.intercept + R.slope * X2, C.pink, { w: 2.2 });
      const l2 = [{ text: `transformed ${tName()}`, x: ax0 + (ax1 - ax0) * 0.05, y: ay1 - (ay1 - ay0) * 0.06, color: C.violet, font: `13px ${F.sans}`, prefer: "se" }];
      lpts.forEach((p, i) => { const j = i % 7; p.off = j >= N; if (p.off) return; if (i < 7) { p.x = P1.X(X(j)); p.y = P1.Y(Y(j)); } else { const u = lnx() ? Math.log(X(j)) : X(j), v = lny() ? Math.log(Y(j)) : Y(j); p.off = !isFinite(u) || !isFinite(v); p.x = P2.X(u); p.y = P2.Y(v); } });
      DL.draw(pxP); P2.labels(l2);
    }
    const all = FIT_KINDS.map(([kk, t]) => { const r = MR.fit(kk, data()); return `${t.slice(0, 3)} ${r ? r.r2.toFixed(3) : "–"}`; }).join(" · ");
    k.eqline(eqH(R), kind);
    if (mode === "pred") { const out = !R ? false : tx < xlo || tx > xhi;
      k.readout({ title: "Predict with the model", big: R ? `<span class="c3"><i>ŷ</i>(<span class="c1">${sig(tx)}</span>) ≈ ${sig(R.f(tx))}</span>` : "no model",
        rows: [{ lhs: `data from <i>x</i> = ${sig(xlo)} to ${sig(xhi)}`, lbl: "the shaded band" }, { lhs: R ? `<i>r</i>² = ${R.r2.toFixed(4)}` : "–", lbl: `on ${tName()}` }],
        landmark: { hit: !!R && !out, big: out ? "extrapolation" : "interpolation", note: out ? "Outside the data the model assumes the pattern continues. Treat the number with caution." : "Inside the range of the data: the model was fitted here." },
        narr: "Try the bacteria data at hour 6, or Saturn at 9.537 AU with the power model." });
    } else k.readout({ title: mode === "lin" ? "Linearise" : "Least-squares fit", big: `<span class="c5">${eqH(R)}</span>`,
      rows: [{ lhs: R ? `<span class="c4">${tName()}</span>: <i>Y</i> = ${sig(R.intercept)} + ${sig(R.slope)}<i>X</i>` : "–", lbl: "the line fitted to the transformed data" },
        { lhs: R ? `<i>r</i> = ${R.r.toFixed(4)}, &nbsp;<i>r</i>² = ${R.r2.toFixed(4)}` : "–", lbl: "on the transformed scale" }, { lhs: all, lbl: "r² of each model on its own scale" }],
      landmark: { hit: !!R && R.r2 >= 0.99, big: R ? `r² = ${R.r2.toFixed(4)}` : "x > 0 needed", note: R && R.r2 >= 0.99 ? "The transformed points lie almost on a line: a strong fit." : "Try another model, or look for a pattern in the residuals." },
      narr: mode === "lin" ? "Switch the model: only the right transform makes the points straight." : "Pull one point away: the residuals and r² react at once." });
  });
};
/* ================= Systems of inequalities & linear programming (D · Plane) ================= */
// KIT CANDIDATE: integer coefficients of the line through two exact points, oriented like (a0, b0)
const lineThrough = (Q, p1, p2, a0, b0) => {
  let a = Q.sub(p2[1], p1[1]), b = Q.sub(p1[0], p2[0]); if (a.n === 0 && b.n === 0) return null;
  let cq = Q.add(Q.mul(a, p1[0]), Q.mul(b, p1[1])); const g = (m, n) => (n ? g(n, m % n) : Math.abs(m));
  const L = [a, b, cq].reduce((m, q) => m * q.d / g(m, q.d), 1), ints = [a, b, cq].map(q => q.n * (L / q.d)), G = ints.reduce((m, v) => g(m, v), 0) || 1;
  let [A, B, Cc] = ints.map(v => v / G); if (A * a0 + B * b0 < 0) { A = -A; B = -B; Cc = -Cc; } return [A, B, Cc];
};
L["pc-linear-programming"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom();
  let mode = "region", cur = 0, steppers = [], P = null, sense = "max", lvl = null;
  const rel = ["<=", "<=", "<="], W = [-1, 13];
  const defs = [], v = (key, value, cls, lo, hi) => defs.push({ key, value, min: lo, max: hi, step: 1, cls, label: key });
  [[3, 2, 24], [1, 2, 16], [1, -1, 5]].forEach(([a, b, cc], i) => { v("a" + i, a, "c4", -20, 20); v("b" + i, b, "c4", -20, 20); v("c" + i, cc, "c4", -200, 200); });
  v("p", 30, "c3", -100, 100); v("q", 50, "c3", -100, 100);
  [["sa1", 3], ["sb1", 2], ["sc1", 24], ["sa2", 1], ["sb2", 2], ["sc2", 16]].forEach(([kk, val]) => v(kk, val, kk[1] === "c" ? "c4" : "c4", 1, 200));
  v("sp", 30, "c3", 0, 500); v("sq", 50, "c3", 0, 500);
  const S = k.vars(defs, key => { if (/^[abc]\d$/.test(key)) place(+key[1]); fresh(); });
  const story = () => mode === "story";
  const cons = () => story() ? [{ a: S.sa1, b: S.sb1, c: S.sc1, rel: "<=" }, { a: S.sa2, b: S.sb2, c: S.sc2, rel: "<=" }]
    : [0, 1, 2].map(i => ({ a: S["a" + i], b: S["b" + i], c: S["c" + i], rel: rel[i], i })).filter(o => o.a || o.b);
  const all = () => [...cons(), { a: 1, b: 0, c: 0, rel: ">=" }, { a: 0, b: 1, c: 0, rel: ">=" }];
  const obj = () => story() ? { a: S.sp, b: S.sq } : { a: S.p, b: S.q };
  // two exact handles on each boundary line, inside the window
  const hq = [[null, null], [null, null], [null, null]];
  const pts = [];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) pts.push({ name: `point ${j + 1} on line ${i + 1}`, color: C.violet, snap: 0.5, clamp: [W[0] + 0.5, W[1] - 0.5, W[0] + 0.5, W[1] - 0.5] });
  pts.push({ name: "objective line level", color: C.pink });
  const place = i => { const a = S["a" + i], b = S["b" + i], cc = S["c" + i]; if (!a && !b) return;
    const flat = Math.abs(b) >= Math.abs(a), at = t => flat ? [Q(t), Q.div(Q(cc - a * t), Q(b))] : [Q.div(Q(cc - b * t), Q(a)), Q(t)];
    let ok = []; for (let t = 0; t <= 12; t++) { const p = at(t), o = flat ? Q.val(p[1]) : Q.val(p[0]); if (o >= 0 && o <= 12) ok.push(p); }
    if (ok.length < 2) ok = [at(0), at(4)]; hq[i] = [ok[Math.floor(ok.length * 0.2)], ok[Math.ceil(ok.length * 0.8) - 1] === ok[Math.floor(ok.length * 0.2)] ? ok[ok.length - 1] : ok[Math.ceil(ok.length * 0.8) - 1]]; };
  [0, 1, 2].forEach(place);
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (i < 6) { const li = i >> 1, j = i & 1, np = [Q(p.x), Q(p.y)], other = hq[li][1 - j]; const ab = lineThrough(Q, j ? other : np, j ? np : other, S["a" + li], S["b" + li]);
      if (!ab || ab.some((x, m) => Math.abs(x) > (m === 2 ? 200 : 20))) return; hq[li][j] = np; ["a", "b", "c"].forEach((kk, m) => S.set(kk + li, ab[m])); fresh(); return; }
    // level handle: slides along the objective's normal through the anchor; snaps to a corner value within 8 px
    const o = obj(), nn = Math.hypot(o.a, o.b) || 1; let z = o.a * p.x + o.b * p.y; const R = MR.lp(all(), o), ppu = P.width / (P.xmax - P.xmin);
    if (!R.empty) R.vertices.forEach(V => { const zv = Q.val(V.z); if (Math.abs(zv - z) / nn * ppu < 8) z = zv; }); lvl = z;
  }, { label: "Feasible region" });
  const fresh = () => { cur = 0; steppers.forEach(s => s.reset()); lvl = null; const R = MR.lp(all(), obj()), best = sense === "max" ? R.max : R.min;
    k.guard(mode !== "region" && !R.empty && best ? [`${sense} z = ${MR.qT(best.z)}`, `${sense} ${story() ? "P" : "z"} = ${MR.qT(best.z)}`] : []); };
  const hints = { region: "Drag the violet points on each boundary, scrub a, b, c, or click ≤ to flip a constraint", opt: "Slide the pink objective line outward until it last touches the region, or Step through the corners", story: "Change any number in the story; the region, corners and best plan update" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); D.focus = -1; fresh(); };
  k.modes([["region", "Region"], ["opt", "Optimize"], ["story", "Story"]], mode, setMode);
  ["opt", "story"].forEach(g => k.group(g, () => { k.select("Goal", [["max", "maximize"], ["min", "minimize"]], sense, s => { sense = s; fresh(); }); steppers.push(k.stepper(() => cornersN() + 1, x => cur = x, { ms: 1100 })); }));
  let cornersN = () => 3;
  setMode(mode);
  const flip = e => { const t = e.target.closest("[data-flip]"); if (!t || (e.type === "keydown" && e.key !== "Enter" && e.key !== " ")) return; e.preventDefault(); const i = +t.dataset.flip; rel[i] = rel[i] === "<=" ? ">=" : "<="; fresh(); };
  k.listen(host, "click", flip); k.listen(host, "keydown", flip);
  k.css("pclp", ".pclp{font:17px/1.9 var(--math)}.pclp .flip{cursor:pointer;border-bottom:1px dashed var(--faint);padding:0 3px}.pclp .flip:hover{color:var(--text)}.pclp p{font:14px/1.55 var(--sans);margin:4px 0}.narrow .pclp{font-size:15px;line-height:1.6}");
  const term = (key, xv, first) => `${first ? "" : " + "}${!first && S[key] < 0 ? `(${S.html(key)})` : S.html(key)}<i>${xv}</i>`;
  const relH = i => `<span class="flip" data-flip="${i}" role="button" tabindex="0" title="Click to flip">${rel[i] === "<=" ? "≤" : "≥"}</span>`;
  let last = "";
  k.loop(() => {
    c.begin(); const lab = [], o = obj(), cs = cons(), R = MR.lp(all(), o), pad = k.split(c, host, { side: "left", frac: 0.38, hfrac: story() ? 0.4 : 0.34 });
    const lines = [0, 1, 2].map(i => `<span class="c4">${["①", "②", "③"][i]}</span> ${term("a" + i, "x", 1)}${term("b" + i, "y")} ${relH(i)} ${S.html("c" + i)}`).join("<br>");
    const html = story() ? `<div class="pclp"><p>A workshop makes <span class="c1">x</span> chairs and <span class="c2">y</span> tables a day. A chair takes ${S.html("sa1")} h of carpentry and ${S.html("sa2")} h of finishing; a table takes ${S.html("sb1")} h of carpentry and ${S.html("sb2")} h of finishing. There are ${S.html("sc1")} h of carpentry and ${S.html("sc2")} h of finishing. Profit is $${S.html("sp")} a chair and $${S.html("sq")} a table.</p></div>`
      : `<div class="pclp">${lines}<br><span class="dim"><i>x</i> ≥ 0, &nbsp;<i>y</i> ≥ 0</span></div>`;
    if (html !== last) { host.innerHTML = html; last = html; }
    // window: fixed for Region/Optimize, from the story's intercepts in Story
    let wx = W, wy = W; if (story()) { const ix = Math.min(S.sc1 / S.sa1, S.sc2 / S.sa2), iy = Math.min(S.sc1 / S.sb1, S.sc2 / S.sb2); wx = [-ix * 0.08, Math.max(ix, iy * 0.3) * 1.25]; wy = [-iy * 0.08, Math.max(iy, ix * 0.3) * 1.25]; }
    P = k.plane(c, { xmin: wx[0], xmax: wx[1], ymin: wy[0], ymax: wy[1], pad, equal: !story(), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.feasible(all(), k.alpha(C.green, 0.16));
    cs.forEach((q, i) => P.clip(() => { const ends = Math.abs(q.b) >= Math.abs(q.a) ? [[P.xmin, (q.c - q.a * P.xmin) / q.b], [P.xmax, (q.c - q.a * P.xmax) / q.b]] : [[(q.c - q.b * P.ymin) / q.a, P.ymin], [(q.c - q.b * P.ymax) / q.a, P.ymax]];
      P.seg(ends[0][0], ends[0][1], ends[1][0], ends[1][1], C.violet, 1.8); }));
    const verts = R.empty ? [] : R.vertices; cornersN = () => verts.length;
    const best = sense === "max" ? R.max : R.min, zT = V => MR.qT(V.z), ptT = V => `(${MR.qT(V.q[0])}, ${MR.qT(V.q[1])})`;
    pts.forEach((p, i) => { p.off = i < 6 ? (mode !== "region" || !hq[i >> 1][0] || !(S["a" + (i >> 1)] || S["b" + (i >> 1)])) : mode === "region" || R.empty; if (i < 6 && !p.off) { const h = hq[i >> 1][i & 1]; p.x = Q.val(h[0]); p.y = Q.val(h[1]); } });
    if (mode === "region") cs.forEach(q => { const i = q.i, h = hq[i] && hq[i][1]; if (h) lab.push({ text: ["①", "②", "③"][i], x: Q.val(h[0]), y: Q.val(h[1]), color: C.violet, font: `15px ${F.math}`, prefer: "ne" }); });
    verts.forEach((V, i) => { const hit = best && mode !== "region" && best.at.some(B => Q.eq(B.q[0], V.q[0]) && Q.eq(B.q[1], V.q[1])) && (lvl !== null && Math.abs(lvl - Q.val(V.z)) < 1e-9); P.dot(V.x, V.y, hit ? C.green : k.alpha(C.green, 0.8), hit ? 7 : 4.5);
      lab.push({ text: ptT(V), x: V.x, y: V.y, color: C.green, font: `12px ${F.mono}` }); });
    if (mode !== "region" && !R.empty) { // objective line at the current level
      const poly = R.polygon && R.polygon.length ? R.polygon : verts, ax = poly.reduce((m, V) => m + V.x, 0) / poly.length, ay = poly.reduce((m, V) => m + V.y, 0) / poly.length, nn = o.a * o.a + o.b * o.b || 1;
      if (lvl === null) { const zs = verts.map(V => Q.val(V.z)), lo = Math.min(...zs), hi = Math.max(...zs); lvl = sense === "max" ? lo + 0.3 * (hi - lo) : hi - 0.3 * (hi - lo); }
      const s = (lvl - (o.a * ax + o.b * ay)) / nn; Object.assign(pts[6], { x: ax + s * o.a, y: ay + s * o.b, path: (x, y) => { const t = ((x - ax) * o.a + (y - ay) * o.b) / nn; return { x: ax + t * o.a, y: ay + t * o.b }; } });
      const dx = -o.b, dy = o.a, Lg = (P.xmax - P.xmin) * 3 / (Math.hypot(dx, dy) || 1); P.clip(() => P.seg(pts[6].x - dx * Lg, pts[6].y - dy * Lg, pts[6].x + dx * Lg, pts[6].y + dy * Lg, C.pink, 2.2, [7, 5]));
      lab.push({ text: `${story() ? "P" : "z"} = ${num(lvl, 2)}`, x: pts[6].x, y: pts[6].y, color: C.pink, font: `13px ${F.mono}`, prefer: "ne" }); }
    D.draw(P); P.labels(lab);
    k.eqline(story() ? `${sense} <i>P</i> = ${S.html("sp")}<span class="c1"><i>x</i></span> + ${S.html("sq")}<span class="c2"><i>y</i></span>` : mode === "opt" ? `${sense} <i>z</i> = ${term("p", "x", 1)}${term("q", "y")}` : `${cs.length} constraints + <i>x</i> ≥ 0, <i>y</i> ≥ 0`, story() ? "profit" : mode === "opt" ? "objective" : "region");
    const kind = R.empty ? "empty: no point satisfies every constraint" : R.bounded ? "bounded" : "unbounded";
    if (mode === "region") k.readout({ title: "Feasible region", big: `<span class="c5">${verts.length} corner point${verts.length === 1 ? "" : "s"}</span>`,
      rows: [{ lhs: verts.map(ptT).join(", ") || "none", lbl: "each from two boundary lines, checked in all the others" }],
      landmark: { hit: !R.empty && R.bounded, big: kind.split(":")[0], note: R.empty ? "Flip a ≤ or move a line to bring the half-planes back together." : R.bounded ? "Every linear objective has a max and a min here, at corners. Fractions are exact." : "Unbounded: a max or a min may not exist." },
      narr: "Drag line ③ across the region and watch corners appear and disappear." });
    else { const V = n => `${story() ? "P" : "z"}${n}`, rows = verts.map((Vt, i) => cur >= i ? { lhs: `${ptT(Vt)}: ${V("")} = ${zT(Vt)}`, lbl: "" } : { lhs: "· · ·", lbl: "" });
      const done = cur >= verts.length, landed = best && lvl !== null && Math.abs(lvl - Q.val(best.z)) < 1e-9, hit = (done || landed) && !!best;
      k.readout({ title: story() ? "Best production plan" : "Corner-point theorem", big: `<span class="m">${sense} ${V("")}</span>`, rows: rows.length ? rows : [{ lhs: "no feasible point" }],
        landmark: { hit, big: hit ? `${sense} ${V("")} = ${zT(best)}` : best ? `step ${Math.min(cur + 1, verts.length + 1)} of ${verts.length + 1}` : R.empty ? "empty region" : `no ${sense}imum`,
          note: hit ? `at ${best.at.map(ptT).join(" and ")}${best.at.length > 1 ? ": every point of that edge is optimal" : ""}.` : best ? "Evaluate the objective at every corner, or slide the pink line." : "The region is unbounded in the direction the objective improves." },
        narr: story() ? "Raise the table profit: at some point the best plan jumps to another corner." : "Change p and q: the line tilts, and the best corner can move." }); }
  });
};
})();
