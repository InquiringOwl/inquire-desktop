/* Precalculus batch B8: parametric equations, parametric motion */
(() => {
const L = window.LABS, MI = "−", PI = Math.PI;
const sg = s => String(s).replace(/-/g, MI);
const num = (v, d = 3) => sg(+(+v).toFixed(d));
const gcdI = (a, b) => (b ? gcdI(b, a % b) : Math.abs(a));
// KIT CANDIDATE: a multiple of π/12 as text ("3π/2", "−π"), anything else as a decimal
const piT = v => { const n = Math.round(v * 12 / PI); if (Math.abs(v - n * PI / 12) > 1e-9) return num(v, 2); if (!n) return "0";
  const g = gcdI(n, 12), p = Math.abs(n / g), q = 12 / g; return (n < 0 ? MI : "") + (p === 1 ? "" : p) + "π" + (q === 1 ? "" : "/" + q); };
const m = s => `<span class="m">${s}</span>`, fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const frH = q => (q.n < 0 ? MI : "") + (q.d === 1 ? Math.abs(q.n) : fr(Math.abs(q.n), q.d));
const strip = s => s.replace(/<[^>]+>/g, "");
const X = "<i>x</i>", Y = "<i>y</i>", T = `<span class="c1"><i>t</i></span>`;

/* ================= Parametric equations (D · Plane) ================= */
L["pc-parametric"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, PR = window.PlaneRules, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "trace", fam = "parab", cur = 0, st = null, P = null, lastT = 0, lastU = 0, ans = null;
  const view = { x0: -4, x1: 6, y0: -4, y1: 2 }, TP = 4 * PI;
  const S = k.vars([
    { key: "H", value: 1, min: -9, max: 9, step: 0.5, cls: "c2", label: "x shift h" },
    { key: "A", value: 2, min: -6, max: 6, step: 0.5, cls: "c2", label: "x coefficient a" },
    { key: "K", value: -3, min: -9, max: 9, step: 0.5, cls: "c3", label: "y shift k" },
    { key: "B", value: 1, min: -6, max: 6, step: 0.5, cls: "c3", label: "y coefficient b" },
    { key: "m", value: 3, min: 1, max: 6, step: 1, cls: "c2", label: "x frequency m" },
    { key: "n", value: 2, min: 1, max: 6, step: 1, cls: "c3", label: "y frequency n" },
    { key: "t0", value: -2, min: -6, max: 6, step: 0.5, cls: "c4", label: "first t" },
    { key: "t1", value: 2, min: -6, max: 6, step: 0.5, cls: "c4", label: "last t" },
    { key: "s0", value: 0, min: -TP, max: TP, step: PI / 12, cls: "c4", label: "first t", fmt: piT },
    { key: "s1", value: 2 * PI, min: -TP, max: TP, step: PI / 12, cls: "c4", label: "last t", fmt: piT },
    { key: "t", value: 1, min: -TP, max: TP, step: 0.05, typeStep: 0.001, cls: "c1", label: "t", fmt: v => (FAM[fam].trig ? piT(v) : num(v, 2)) },
    { key: "x0", value: -3, min: -8, max: 8, step: 0.5, cls: "c2", label: "x₀" }, { key: "y0", value: -2, min: -8, max: 8, step: 0.5, cls: "c3", label: "y₀" },
    { key: "x1", value: 4, min: -8, max: 8, step: 0.5, cls: "c2", label: "x₁" }, { key: "y1", value: 3, min: -8, max: 8, step: 0.5, cls: "c3", label: "y₁" },
    { key: "u", value: 0.25, min: 0, max: 1, step: 0.05, typeStep: 0.001, cls: "c1", label: "t on the segment", fmt: v => num(v, 3) }
  ], key => changed(key));
  const FAM = {
    line: { name: "Line", trig: false, x: t => S.H + S.A * t, y: t => S.K + S.B * t, d: { H: -2, A: 2, K: 1, B: -1, t0: 0, t1: 3, t: 1 } },
    parab: { name: "Graph of a function", trig: false, x: t => S.H + S.A * t, y: t => S.K + S.B * t * t, d: { H: 1, A: 2, K: -3, B: 1, t0: -2, t1: 2, t: 1 } },
    ellipse: { name: "Circle or ellipse", trig: true, x: t => S.H + S.A * Math.cos(t), y: t => S.K + S.B * Math.sin(t), d: { H: 0, A: 3, K: 0, B: 2, s0: 0, s1: 2 * PI, t: PI / 3 } },
    liss: { name: "Lissajous", trig: true, x: t => S.H + S.A * Math.sin(S.m * t), y: t => S.K + S.B * Math.sin(S.n * t), d: { H: 0, A: 3, K: 0, B: 2, m: 3, n: 2, s0: 0, s1: 2 * PI, t: PI / 6 } }
  };
  const fx = t => FAM[fam].x(t), fy = t => FAM[fam].y(t), tr = () => (FAM[fam].trig ? [S.s0, S.s1] : [S.t0, S.t1]);
  const sc = () => (P ? [P.width / (P.xmax - P.xmin), P.height / (P.ymax - P.ymin)] : [30, 30]);
  const pts = [
    { name: "point at t", color: C.amber, path: (x, y) => { const [a, b] = tr(), q = PR.nearestOnCurve(fx, fy, a, b, x, y, ...sc()); lastT = q.t; return q; } },
    { name: "start point", color: C.cyan, snap: 0.5, clamp: [-8, 8, -8, 8] },
    { name: "end point", color: C.pink, snap: 0.5, clamp: [-8, 8, -8, 8] },
    { name: "point on the segment", color: C.amber, path: (x, y) => { const q = PR.projectToSegment(x, y, S.x0, S.y0, S.x1, S.y1); lastU = q.t; return q; } }];
  const snapT = t => { const s = FAM[fam].trig ? PI / 12 : 0.25, r = Math.round(t / s) * s; return Math.abs(t - r) < 0.05 ? r : Math.round(t * 100) / 100; };
  const sync = () => {
    const [a, b] = tr(); S.set("t", Math.max(a, Math.min(b, S.t)));
    Object.assign(pts[0], { x: fx(S.t), y: fy(S.t), off: mode === "segment" });
    Object.assign(pts[1], { x: S.x0, y: S.y0, off: mode !== "segment" }); Object.assign(pts[2], { x: S.x1, y: S.y1, off: mode !== "segment" });
    Object.assign(pts[3], { x: S.x0 + (S.x1 - S.x0) * S.u, y: S.y0 + (S.y1 - S.y0) * S.u, off: mode !== "segment" });
  };
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (i === 0) S.set("t", snapT(lastT));
    if (i === 1) { S.set("x0", p.x); S.set("y0", p.y); } if (i === 2) { S.set("x1", p.x); S.set("y1", p.y); }
    if (i === 3) S.set("u", Math.round(lastU * 20) / 20);
    sync();
  }, { label: "Parametric curve" });
  const changed = key => {
    if (key === "t0" && S.t0 >= S.t1) S.set("t1", Math.min(6, S.t0 + 0.5)); if (key === "t1" && S.t1 <= S.t0) S.set("t0", Math.max(-6, S.t1 - 0.5));
    if (key === "s0" && S.s0 >= S.s1) S.set("s1", S.s0 + PI / 12); if (key === "s1" && S.s1 <= S.s0) S.set("s0", S.s1 - PI / 12);
    sync(); if (key !== "t" && key !== "u") fresh();
  };
  const setFam = f => { fam = f; Object.entries(FAM[f].d).forEach(([key, v]) => S.set(key, v)); sync(); fresh(); };

  // ---- eliminating the parameter, for the current numbers
  const dif = (v, w) => (v === 0 ? w : `${w} ${v > 0 ? MI : "+"} ${frH(Q(Math.abs(v)))}`), par = (v, w) => (v === 0 ? w : `(${dif(v, w)})`);
  const plus = q => (q.n === 0 ? "" : ` ${q.n > 0 ? "+" : MI} ${frH(Q.abs(q))}`);
  const cf = (q, term) => (q.n === q.d ? term : q.n === -q.d ? MI + term : frH(q) + term);
  const lin = (sl, b0) => (sl.n === 0 ? frH(b0) : cf(sl, X) + plus(b0));
  const elim = () => {
    const [a, b] = tr(), P0 = `(${num(fx(a), 2)}, ${num(fy(a), 2)})`, P1 = `(${num(fx(b), 2)}, ${num(fy(b), 2)})`, H = Q(S.H), A = Q(S.A), K = Q(S.K), B = Q(S.B);
    const tx = S.A === 1 ? dif(S.H, X) : fr(dif(S.H, X), frH(A)), lo = Math.min(fx(a), fx(b)), hi = Math.max(fx(a), fx(b));
    const rx = { tag: "restrict", eq: m(`${num(lo, 2)} ≤ ${X} ≤ ${num(hi, 2)}`), why: `Only t from ${piT(a)} to ${piT(b)}: the path runs from ${P0} to ${P1}.` };
    if (!FAM[fam].trig) {
      if (!S.A) return [{ tag: "x is fixed", eq: m(`${X} = ${frH(H)}`), why: "With a = 0 the x-coordinate never changes: part of a vertical line." }];
      const s1 = { tag: "solve for t", eq: m(`${T} = ${tx}`), why: "Solve the x-equation for t (a ≠ 0)." };
      if (fam === "line") { const sl = Q.div(B, A);
        return [s1, { tag: "substitute", eq: m(`${Y} = ${frH(K)} + ${frH(B)}·${S.A === 1 ? `(${tx})` : tx}`), why: "Put that t into the y-equation." },
          { tag: "simplify", eq: m(`${Y} = ${lin(sl, Q.sub(K, Q.mul(sl, H)))}`), why: "Slope b/a, so a line." }, rx]; }
      const co = Q.div(B, Q.mul(A, A));
      return [s1, { tag: "substitute", eq: m(`${Y} = ${frH(K)} + ${frH(B)}${S.A === 1 ? par(S.H, X) : `(${tx})`}<sup>2</sup>`), why: "Put that t into the y-equation." },
        { tag: "simplify", eq: m(`${Y} = ${co.n ? cf(co, par(S.H, X) + "<sup>2</sup>") + plus(K) : frH(K)}`), why: co.n ? "A parabola with vertex (h, k), the point at t = 0." : "b = 0: a horizontal line." }, rx];
    }
    if (!S.A || !S.B) return [{ tag: "degenerate", eq: m("<i>a</i> = 0 or <i>b</i> = 0"), why: "One coordinate is constant: the curve collapses to a segment. Make a and b nonzero." }];
    const span = b - a, full = span >= 2 * PI - 1e-9, X2 = par(S.H, X) + "<sup>2</sup>", Y2 = par(S.K, Y) + "<sup>2</sup>", A2 = Q.mul(A, A), B2 = Q.mul(B, B);
    const ux = fr(dif(S.H, X), frH(A)), uy = fr(dif(S.K, Y), frH(B));
    if (fam === "ellipse") {
      const circ = Q.eq(A2, B2);
      return [{ tag: "isolate", eq: m(`cos ${T} = ${ux}, &nbsp;sin ${T} = ${uy}`), why: "Solve each equation for its trig function." },
        { tag: "identity", eq: m(`(${ux})<sup>2</sup> + (${uy})<sup>2</sup> = 1`), why: "cos² t + sin² t = 1 removes t." },
        { tag: "simplify", eq: m(circ ? `${X2} + ${Y2} = ${frH(A2)}` : `${fr(X2, frH(A2))} + ${fr(Y2, frH(B2))} = 1`), why: circ ? `A circle of radius ${num(Math.abs(S.A), 2)} centred at (h, k).` : "An ellipse centred at (h, k)." },
        { tag: "restrict", eq: m(full ? "the whole curve" : `an arc from ${P0} to ${P1}`), why: `${full ? (span > 2 * PI + 1e-9 ? "More than one turn: parts are traced twice. " : "Exactly one turn. ") : ""}${S.A * S.B > 0 ? "Counterclockwise" : "Clockwise"} as t increases.` }];
    }
    if (S.m === S.n) { const sl = Q.div(B, A);
      return [{ tag: "isolate", eq: m(`sin(${S.m}${T}) = ${ux} = ${uy}`), why: "Both coordinates use the same sine." },
        { tag: "solve for y", eq: m(`${Y} = ${lin(sl, Q.sub(K, Q.mul(sl, H)))}`), why: "A line: the point slides back and forth on a segment." }, rx]; }
    if (S.m === 1 && S.n === 2) { const co = Q.div(Q.mul(Q(4), B2), Q.mul(A2, A2));
      return [{ tag: "isolate", eq: m(`sin ${T} = ${ux}`), why: "Solve the x-equation for sin t." },
        { tag: "double angle", eq: m(`${dif(S.K, Y)} = ${frH(B)} sin 2${T} = ${frH(Q.mul(Q(2), B))} sin ${T} cos ${T}`), why: "sin 2t = 2 sin t cos t." },
        { tag: "square", eq: m(`${Y2} = ${frH(Q.mul(Q(4), B2))} sin<sup>2</sup> ${T}(1 − sin<sup>2</sup> ${T})`), why: "cos² t = 1 − sin² t." },
        { tag: "simplify", eq: m(`${Y2} = ${cf(co, X2 + `(${frH(A2)} − ${X2})`)}`), why: "Replace sin t by (x − h)/a. A quartic: a figure-eight." }]; }
    return [{ tag: "set m, n", eq: m(`<i>m</i> = 1, <i>n</i> = 2 &nbsp;or&nbsp; <i>m</i> = <i>n</i>`), why: "Other frequencies need higher multiple-angle identities. Change m and n, or pick another curve." }];
  };
  const fresh = () => { cur = 0; if (st) st.reset(); const s = elim(); ans = s.length > 1 ? strip(s[s.length - (s[s.length - 1].tag === "restrict" ? 2 : 1)].eq) : null; k.guard(mode === "elim" && ans ? [ans] : []); };
  const hints = { trace: "Drag the amber point along the curve, or scrub t, the coefficients and the t-range", elim: "Step through eliminating t; scrub any number for a new problem", segment: "Drag either endpoint or the amber point; t = 0 at the start, t = 1 at the end" };
  k.select("Curve", Object.entries(FAM).map(([v, f]) => [v, f.name]), fam, v => setFam(v));
  k.modes([["trace", "Trace"], ["elim", "Eliminate"], ["segment", "Segment"]], mode, md => { mode = md; k.showGroup(md); k.hint(hints[md]); D.focus = -1; sync(); fresh(); });
  k.group("elim", () => { st = k.stepper(() => elim().length, v => cur = v, { ms: 1400 }); });
  k.showGroup(mode); k.hint(hints[mode]); sync(); fresh();

  const bbox = (gx, gy, a, b, extra = []) => { let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    const add = (x, y) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); };
    for (let i = 0; i <= 200; i++) { const t = a + (b - a) * i / 200; add(gx(t), gy(t)); } extra.forEach(p => add(p[0], p[1]));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, w = Math.max(4, (x1 - x0) * 1.25), h = Math.max(4, (y1 - y0) * 1.25);
    return { x0: cx - w / 2, x1: cx + w / 2, y0: cy - h / 2, y1: cy + h / 2 }; };
  const eqH = () => {
    const H = S.html("H"), A = S.html("A"), K = S.html("K"), B = S.html("B"), rng = `, &nbsp;<span class="c4">${S.html(FAM[fam].trig ? "s0" : "t0")} ≤ <i>t</i> ≤ ${S.html(FAM[fam].trig ? "s1" : "t1")}</span>`;
    const pair = { line: [`${A}${T}`, `${B}${T}`], parab: [`${A}${T}`, `${B}${T}<sup>2</sup>`], ellipse: [`${A} cos ${T}`, `${B} sin ${T}`], liss: [`${A} sin(${S.html("m")}${T})`, `${B} sin(${S.html("n")}${T})`] }[fam];
    return `<span class="c2">${X} = ${H} + ${pair[0]}</span>, &nbsp;<span class="c3">${Y} = ${K} + ${pair[1]}</span>${rng}`;
  };
  k.loop(dt => {
    c.begin(); const d = c.d, lab = [], wide = c.w >= 600, seg = mode === "segment", el = mode === "elim", [a, b] = tr();
    sync();
    const tgt = seg ? bbox(t => S.x0 + (S.x1 - S.x0) * t, t => S.y0 + (S.y1 - S.y0) * t, 0, 1, [[0, 0]]) : bbox(fx, fy, a, b, [[0, 0]]);
    if (D.active < 0) k.smooth(view, tgt, dt);
    const sp = k.split(c, host, el ? { side: "right", frac: 0.44, hfrac: 0.42 } : { off: true });
    const mw = Math.round(c.w * 0.3), mh = Math.round(c.h * 0.26), minis = mode === "trace";
    const pad = el ? sp : minis ? (wide ? { l: 40, r: mw + 34, t: 16, b: 30 } : { l: 38, r: 14, t: 16, b: mh + 52 }) : { l: 40, r: 16, t: 16, b: 30 };
    P = k.plane(c, { xmin: view.x0, xmax: view.x1, ymin: view.y0, ymax: view.y1, equal: true, pad, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    if (seg) {
      const dx = S.x1 - S.x0, dy = S.y1 - S.y0, u = S.u, px = S.x0 + dx * u, py = S.y0 + dy * u;
      P.paramTrace(t => S.x0 + dx * t, t => S.y0 + dy * t, 0, 1, u, C.green, { arrows: 1 });
      P.seg(px, Math.min(0, P.ymax), px, py, k.alpha(C.cyan, 0.6), 1.2, [3, 3]); P.seg(Math.min(0, P.xmax), py, px, py, k.alpha(C.pink, 0.6), 1.2, [3, 3]);
      lab.push({ text: "t = 0", x: S.x0, y: S.y0, color: C.cyan, font: `13px ${F.mono}`, prefer: "sw" }, { text: "t = 1", x: S.x1, y: S.y1, color: C.pink, font: `13px ${F.mono}`, prefer: "ne" });
      D.draw(P); P.labels(lab);
      k.eqline(`<span class="c2">${X} = ${S.html("x0")} + (${S.html("x1")} − ${S.html("x0")})${T}</span>,${wide ? " &nbsp;" : "<br>"}<span class="c3">${Y} = ${S.html("y0")} + (${S.html("y1")} − ${S.html("y0")})${T}</span>, &nbsp;<span class="c4">0 ≤ <i>t</i> ≤ 1</span>`, "segment");
      const mid = Math.abs(u - 0.5) < 1e-9, len = Math.hypot(dx, dy);
      k.readout({ title: "Segment from P₀ to P₁", big: m(`(<span class="c2">${num(px, 3)}</span>, <span class="c3">${num(py, 3)}</span>)`),
        rows: [{ lhs: `${T} = ${S.html("u")}`, lbl: "drag the amber point or scrub t" }, { lhs: `<span class="c2">${X} = ${num(S.x0, 2)} + ${num(dx, 2)}<i>t</i></span>, <span class="c3">${Y} = ${num(S.y0, 2)} + ${num(dy, 2)}<i>t</i></span>`, lbl: "the parametric equations" },
          { lhs: `(${num(S.x0 + dx / 2, 3)}, ${num(S.y0 + dy / 2, 3)})`, lbl: "midpoint, at t = 1/2" },
          { lhs: `${num(len, 3)}`, lbl: `length; the point covers ${num(len, 3)} units per unit of t` }],
        landmark: { hit: mid, big: mid ? "midpoint" : `${num(100 * u, 1)}% of the way`, note: mid ? "t = 1/2 averages the endpoints." : "Drag the amber point to t = 1/2." },
        narr: "Swap the endpoints and the same segment is traced the other way: a different parametrisation." });
      return;
    }
    const full = FAM[fam].trig ? [0, 2 * PI] : [Math.min(a, -6), Math.max(b, 6)];
    P.param(fx, fy, full[0], full[1], k.alpha(C.muted, 0.35), 1.2, [4, 5]);
    const fin = elim(), done = el && ans && cur >= fin.length - (fin[fin.length - 1].tag === "restrict" ? 2 : 1);
    if (done) { if (fam === "line" || (fam === "liss" && S.m === S.n)) P.curve(x => (S.A ? S.K + S.B * (x - S.H) / S.A : NaN), k.alpha(C.green, 0.8), { w: 1.6, dash: [7, 5] });
      else if (fam === "parab") P.curve(x => S.K + S.B * ((x - S.H) / S.A) ** 2, k.alpha(C.green, 0.8), { w: 1.6, dash: [7, 5] });
      else P.param(fx, fy, 0, 2 * PI, k.alpha(C.green, 0.8), 1.6, [7, 5]); }
    P.paramTrace(fx, fy, a, b, S.t, C.violet, { arrows: 4 });
    P.param(fx, fy, a, S.t, C.amber, 3);
    const p0 = { x: fx(a), y: fy(a) }, p1 = { x: fx(b), y: fy(b) };
    P.dot(p0.x, p0.y, C.violet, 4); P.dot(p1.x, p1.y, C.violet, 4);
    lab.push({ text: `t = ${piT(a)}`, x: p0.x, y: p0.y, color: C.violet, font: `13px ${F.mono}`, prefer: "sw" });
    if (Math.hypot(p1.x - p0.x, p1.y - p0.y) > 0.3) lab.push({ text: `t = ${piT(b)}`, x: p1.x, y: p1.y, color: C.violet, font: `13px ${F.mono}`, prefer: "ne" });
    D.draw(P);
    if (minis) {
      const boxes = wide ? [{ l: c.w - mw + 8, r: 12, t: 16, b: Math.round(c.h / 2) + 12 }, { l: c.w - mw + 8, r: 12, t: Math.round(c.h / 2) + 20, b: 28 }]
        : [{ l: 34, r: Math.round(c.w / 2) + 6, t: c.h - mh - 22, b: 40 }, { l: Math.round(c.w / 2) + 30, r: 10, t: c.h - mh - 22, b: 40 }];
      [[fx, C.cyan, "x"], [fy, C.pink, "y"]].forEach(([f, col, nm], j) => {
        let lo = Infinity, hi = -Infinity; for (let i = 0; i <= 120; i++) { const v = f(a + (b - a) * i / 120); lo = Math.min(lo, v); hi = Math.max(hi, v); }
        const padY = Math.max(0.5, (hi - lo) * 0.15), xs = FAM[fam].trig ? (b - a > 2 * PI + 1e-9 ? PI : PI / 2) : PR.niceStep(b - a, 4), y0 = Math.min(lo - padY, 0), y1 = Math.max(hi + padY, 0);
        const M = k.plane(c, { xmin: a, xmax: b, ymin: y0, ymax: y1, pad: boxes[j], xlabel: "t", ylabel: nm, xstep: xs, ystep: PR.niceStep(y1 - y0, 3) });
        if (xs && M.piAxes) M.piAxes({ xstep: xs }); else M.axes();
        M.curve(f, col, { w: 2 }); M.seg(S.t, M.ymin, S.t, f(S.t), k.alpha(C.amber, 0.7), 1.2, [3, 3]); M.dot(S.t, f(S.t), C.amber, 4);
      });
    }
    P.labels(lab);
    k.eqline(eqH(), FAM[fam].name.toLowerCase());
    if (el) {
      SP.set(fin, cur);
      k.readout({ title: "Eliminate the parameter", big: m(`<span class="c5">remove ${T}</span>`),
        rows: [{ lhs: `<span class="c2">${X}(${T})</span>, <span class="c3">${Y}(${T})</span> → <span class="c5"><i>F</i>(${X}, ${Y}) = 0</span>`, lbl: "two equations become one" }, { lhs: fam === "ellipse" || fam === "liss" ? "use an identity" : "solve for t, substitute", lbl: "the method for this curve" }, { lhs: `step ${Math.min(cur + 1, fin.length)} of ${fin.length}`, lbl: "Step or Play" }],
        landmark: { hit: !!done, big: done ? "rectangular form" : "t still there", note: done ? "Green dashes: the rectangular equation's whole graph. The parametric curve is only the solid part." : "Step to remove t." },
        narr: "Shorten the t-range: the rectangular equation stays the same, but the curve becomes a piece of its graph." });
      return;
    }
    const e = 1e-4, vx = (fx(S.t + e) - fx(S.t - e)) / (2 * e), vy = (fy(S.t + e) - fy(S.t - e)) / (2 * e);
    const dir = Math.hypot(vx, vy) < 1e-6 ? "momentarily at rest" : `moving ${Math.abs(vx) < 1e-6 ? "" : vx > 0 ? "right" : "left"}${Math.abs(vx) >= 1e-6 && Math.abs(vy) >= 1e-6 ? " and " : ""}${Math.abs(vy) < 1e-6 ? "" : vy > 0 ? "up" : "down"}`;
    const atA = Math.abs(S.t - a) < 1e-9, atB = Math.abs(S.t - b) < 1e-9;
    k.readout({ title: "Point at time t", big: m(`(<span class="c2">${num(fx(S.t), 3)}</span>, <span class="c3">${num(fy(S.t), 3)}</span>) at ${T} = ${S.html("t")}`),
      rows: [{ lhs: `(${num(p0.x, 2)}, ${num(p0.y, 2)}) → (${num(p1.x, 2)}, ${num(p1.y, 2)})`, lbl: "initial point → terminal point" },
        { lhs: dir, lbl: "orientation at this t (the arrows)" }],
      landmark: { hit: atA || atB, big: atA ? "initial point" : atB ? "terminal point" : `t in [${piT(a)}, ${piT(b)}]`, note: atA || atB ? "An end of the parameter interval." : "Drag the amber point to an end of the curve." },
      narr: "The small graphs show x and y separately against t. Change the t-range and watch the curve grow or shrink." });
  });
};

/* ================= Parametric motion (E · Model) ================= */
// KIT CANDIDATE: exact surds c·√r (c a Q, r square-free) for projectile values at 0°, 30°, 45°, 60°, 90°.
const SURD = (Q, sqrtParts) => {
  const mk = (c, r) => ({ c: Q(c), r }), half = Q(1, 2);
  const TRIG = { 0: [mk(0, 1), mk(1, 1)], 30: [mk(half, 1), mk(half, 3)], 45: [mk(half, 2), mk(half, 2)], 60: [mk(half, 3), mk(half, 1)], 90: [mk(1, 1), mk(0, 1)] };
  const mul = (a, b) => { const [p, r] = sqrtParts(a.r * b.r); return { c: Q.mul(Q.mul(a.c, b.c), Q(p)), r }; };
  const sqrtQ = q => { const [p, r] = sqrtParts(q.n * q.d); return { c: Q(p, q.d), r }; };
  const norm = list => { const o = {}; list.forEach(s => { if (s.c.n === 0) return; o[s.r] = o[s.r] ? Q.add(o[s.r], s.c) : s.c; });
    return Object.keys(o).map(r => ({ c: o[r], r: +r })).filter(s => s.c.n !== 0).sort((u, v) => u.r - v.r); };
  const val = list => list.reduce((s, x) => s + Q.val(x.c) * Math.sqrt(x.r), 0);
  return { TRIG, mul, sqrtQ, norm, val };
};
const surdH = (list, frH) => { if (!list.length) return "0";
  return list.map((s, i) => { const a = { n: Math.abs(s.c.n), d: s.c.d }, root = s.r === 1 ? "" : `√${s.r}`, co = s.r !== 1 && a.n === 1 && a.d === 1 ? "" : frH(a);
    return (i ? (s.c.n < 0 ? ` ${MI} ` : " + ") : s.c.n < 0 ? MI : "") + co + root; }).join(""); };

L["pc-parametric-motion"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, PR = window.PlaneRules, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), SU = SURD(Q, MR.sqrtParts);
  let mode = "launch", cur = 0, st = null, P = null, lastT = 0, lastW = 0;
  const LAM = 0.5, view = { x1: 180, y1: 80 }, cview = { x1: 4 * PI + 2, y1: 2.6 };   // the launch arrow is the velocity times 0.5 s
  const S = k.vars([
    { key: "v", value: 64, min: 1, max: 150, step: 1, typeStep: 0.1, cls: "c1", label: "launch speed v₀" },
    { key: "th", value: 30, min: 0, max: 90, step: 1, typeStep: 0.1, cls: "c1", label: "launch angle θ", fmt: v => num(v, 1) + "°" },
    { key: "h", value: 48, min: 0, max: 200, step: 1, typeStep: 0.1, cls: "c3", label: "launch height h₀" },
    { key: "g", value: 32, min: 1, max: 40, step: 0.1, cls: "c4", label: "gravity g" },
    { key: "t", value: 1, min: 0, max: 60, step: 0.05, typeStep: 0.001, cls: "c1", label: "time t" },
    { key: "tx", value: 96, min: 1, max: 600, step: 1, cls: "c4", label: "target distance" }, { key: "ty", value: 16, min: 0, max: 300, step: 1, cls: "c4", label: "target height" },
    { key: "r", value: 1, min: 0.5, max: 3, step: 0.25, cls: "c2", label: "wheel radius r" }, { key: "d", value: 1, min: 0, max: 4, step: 0.25, cls: "c3", label: "distance d of the point from the centre" },
    { key: "w", value: PI / 2, min: 0, max: 4 * PI, step: PI / 12, typeStep: 0.001, cls: "c1", label: "t (angle turned)", fmt: piT }
  ], () => { sync(); fresh(); });
  const pr = () => MR.projectile(S.v, S.th, S.h, S.g);
  const cyc = () => MR.cycloid(S.r, S.d);
  const tip = (v, th) => ({ x: LAM * v * Math.cos(th * PI / 180), y: S.h + LAM * v * Math.sin(th * PI / 180) });
  const sc = () => (P ? [P.width / (P.xmax - P.xmin), P.height / (P.ymax - P.ymin)] : [2, 2]);
  const pts = [
    { name: "launch point (height h₀)", color: C.pink, fixX: true, snapY: 1, clamp: [0, 0, 0, 200] },
    { name: "tip of the launch velocity", color: C.amber, path: (x, y) => { const v = Math.max(1, Math.min(150, Math.round(Math.hypot(x, y - S.h) / LAM))), th = Math.max(0, Math.min(90, Math.round(Math.atan2(y - S.h, Math.max(0, x)) * 180 / PI))); return tip(v, th); } },
    { name: "position at time t", color: C.amber, path: (x, y) => { const p = pr(), q = PR.nearestOnCurve(p.x, p.y, 0, Math.max(p.T, 1e-6), x, y, ...sc()); lastT = q.t; return q; } },
    { name: "target", color: C.violet, snap: 1, clamp: [1, 600, 0, 300] },
    { name: "point on the wheel", color: C.amber, path: (x, y) => { const cy = cyc(), q = PR.nearestOnCurve(cy.x, cy.y, 0, 4 * PI, x, y, ...sc()); lastW = q.t; return q; } }];
  const sync = () => {
    const p = pr(); S.set("t", Math.max(0, Math.min(p.T, S.t))); const tp = tip(S.v, S.th), cy = cyc();
    Object.assign(pts[0], { x: 0, y: S.h, off: mode === "cycloid" }); Object.assign(pts[1], { x: tp.x, y: tp.y, off: mode === "cycloid" });
    Object.assign(pts[2], { x: p.x(S.t), y: p.y(S.t), off: mode !== "launch" }); Object.assign(pts[3], { x: S.tx, y: S.ty, off: mode !== "target" });
    Object.assign(pts[4], { x: cy.x(S.w), y: cy.y(S.w), off: mode !== "cycloid" });
  };
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (i === 0) S.set("h", Math.round(p.y));
    if (i === 1) { S.set("v", Math.round(Math.hypot(p.x, p.y - S.h) / LAM)); S.set("th", Math.round(Math.atan2(p.y - S.h, p.x) * 180 / PI)); }
    if (i === 2) { const pp = pr(), cand = [pp.apex.t, pp.T].find(t => Math.abs(t - lastT) < 0.04 * pp.T); S.set("t", cand ?? Math.round(lastT * 100) / 100); }
    if (i === 3) { S.set("tx", p.x); S.set("ty", p.y); }
    if (i === 4) { const s = Math.round(lastW / (PI / 12)) * PI / 12; S.set("w", Math.abs(lastW - s) < 0.06 ? s : Math.round(lastW * 100) / 100); }
    sync(); if (i !== 2 && i !== 4) fresh();
  }, { label: "Motion" });
  // exact values when θ is 0°, 30°, 45°, 60° or 90°
  const exact = () => {
    const tr = SU.TRIG[S.th]; if (!tr) return null; const V = Q(S.v), G = Q(S.g), H = Q(S.h), ig = { c: Q.inv(G), r: 1 };
    const vy = { c: Q.mul(V, tr[0].c), r: tr[0].r }, vx = { c: Q.mul(V, tr[1].c), r: tr[1].r }, vy2 = Q.mul(Q.mul(vy.c, vy.c), Q(vy.r));
    const sD = SU.sqrtQ(Q.add(vy2, Q.mul(Q(2), Q.mul(G, H)))), Tl = SU.norm([SU.mul(vy, ig), SU.mul(sD, ig)]);
    return { vx: [vx], vy: [vy], T: Tl, R: SU.norm(Tl.map(s => SU.mul(vx, s))), ta: SU.norm([SU.mul(vy, ig)]), ya: Q.add(H, Q.div(vy2, Q.mul(Q(2), G))), xa: SU.norm([SU.mul(SU.mul(vx, vy), ig)]) };
  };
  const ex = (list, v, unit = "") => { const s = surdH(list, frH); return Math.abs(SU.val(list) - v) < 1e-6 && !/[√<]/.test(s) ? `${s}${unit}` : `${s} ≈ ${num(v, 2)}${unit}`; };
  // aiming at the target: a u² − x u + (a + y − h₀) = 0 with u = tan θ, a = g x²/(2v₀²)
  const aim = () => { const x = S.tx, a = S.g * x * x / (2 * S.v * S.v), c0 = a + S.ty - S.h, disc = x * x - 4 * a * c0;
    const us = disc < 0 ? [] : [...new Set([(x - Math.sqrt(disc)) / (2 * a), (x + Math.sqrt(disc)) / (2 * a)].map(u => +u.toFixed(9)))];
    return { a, c0, disc, us, ths: us.map(u => Math.atan(u) * 180 / PI) }; };
  const angT = th => `θ ≈ ${num(th, 1)}°`;
  const fresh = () => { cur = 0; if (st) st.reset(); const A = aim(); k.guard(mode === "target" ? (A.ths.length ? A.ths.map(angT) : ["out of reach"]) : []); };
  const hints = { launch: "Drag the arrow's tip (speed and angle), the launch point or the amber ball along the path; scrub v₀, θ, h₀, g", target: "Drag the violet target; aim by dragging the arrow tip, then Step through the solution", cycloid: "Drag the amber point to roll the wheel; scrub r and d" };
  k.modes([["launch", "Launch"], ["target", "Target"], ["cycloid", "Cycloid"]], mode, md => { mode = md; k.showGroup(md); k.hint(hints[md]); D.focus = -1; sync(); fresh(); });
  k.group("target", () => { st = k.stepper(() => 5, v => cur = v, { ms: 1400 }); });
  k.showGroup(mode); k.hint(hints[mode]); sync(); fresh();
  const unit = () => (S.g === 32 ? " ft" : Math.abs(S.g - 9.8) < 1e-9 ? " m" : "");

  k.loop(dt => {
    c.begin(); const lab = [], tg = mode === "target", cy = mode === "cycloid";
    sync();
    const sp = k.split(c, host, tg ? { side: "right", frac: 0.42, hfrac: 0.42 } : { off: true });
    if (cy) {
      const f = cyc(), R = S.r, W = S.w;
      if (D.active < 0) k.smooth(cview, { x1: 4 * PI * R + S.d + R, y1: R + S.d + R * 0.6 }, dt);
      const mx = Math.max(R, S.d) + 0.3, span = 2 * PI * R + 2 * mx, x0 = c.w >= 600 ? -mx : Math.max(-mx, Math.min(R * W - span / 2, 4 * PI * R + mx - span));
      P = k.plane(c, { xmin: x0, xmax: c.w >= 600 ? cview.x1 : x0 + span, ymin: Math.min(0, R - S.d) - 0.5, ymax: cview.y1, equal: true, pad: sp, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes(); P.seg(P.xmin, 0, P.xmax, 0, C.violet, 2);
      const cx = R * W, ctx = c.g, rp = R * P.width / (P.xmax - P.xmin);
      ctx.save(); ctx.strokeStyle = k.alpha(C.text, 0.55); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(P.X(cx), P.Y(R), rp, 0, 2 * PI); ctx.stroke(); ctx.restore();
      P.param(f.x, f.y, 0, 4 * PI, k.alpha(C.muted, 0.4), 1.2, [4, 5]);
      const pt = P.paramTrace(f.x, f.y, 0, Math.max(W, 1e-3), W, C.amber, { arrows: W > 1 ? 2 : 0 });
      P.seg(cx, R, pt.x, pt.y, C.text, 1.5); P.dot(cx, R, C.text, 3); P.seg(cx, 0, cx, R, k.alpha(C.violet, 0.5), 1, [3, 3]);
      P.seg(0, 0, cx, 0, C.cyan, 3);
      lab.push({ text: "rolled rt", x: cx / 2, y: 0, color: C.cyan, font: `13px ${F.sans}`, prefer: "s" });
      D.draw(P); P.labels(lab);
      k.eqline(`<span class="c2">${X} = ${S.html("r")}${T} − ${S.html("d")} sin ${T}</span>, &nbsp;<span class="c3">${Y} = ${S.html("r")} − ${S.html("d")} cos ${T}</span>, &nbsp;${T} = ${S.html("w")}`, "rolling wheel");
      const kind = S.d === S.r ? "cycloid: the point is on the rim" : S.d < S.r ? "curtate cycloid: inside the rim, no cusps" : "prolate cycloid: outside the rim, it loops below the ground line",
        n = Math.round(W / PI), atPi = Math.abs(W - n * PI) < 1e-9 && n > 0, top = atPi && n % 2 === 1, low = atPi && n % 2 === 0;
      k.readout({ title: "A point on a rolling wheel", big: m(`(<span class="c2">${num(f.x(W), 3)}</span>, <span class="c3">${num(f.y(W), 3)}</span>) at ${T} = ${piT(W)}`),
        rows: [{ lhs: kind, lbl: `d = ${num(S.d, 2)}, r = ${num(S.r, 2)}` }, { lhs: `2π<i>r</i> ≈ ${num(2 * PI * R, 3)}`, lbl: "one turn rolls this far: the width of an arch" },
          { lhs: `(π<i>r</i>, <i>r</i> + <i>d</i>) ≈ (${num(PI * R, 3)}, ${num(R + S.d, 2)})`, lbl: "highest point, at t = π" }],
        landmark: { hit: top || low, big: top ? "top of the arch" : low ? (S.d === S.r ? "cusp" : "lowest point") : `${num(W / (2 * PI), 2)} turns`, note: top ? `x = ${piT(W)}·r and y = r + d.` : low ? (S.d === S.r ? "The point touches the ground and is at rest for an instant." : `y = r − d = ${num(R - S.d, 2)}.`) : "Roll to t = π or t = 2π." },
        narr: "Set d above r for loops, below r for a wave. The centre always moves straight along y = r." });
      return;
    }
    const p = pr(), A = aim(), tp = tip(S.v, S.th);
    if (D.active < 0) k.smooth(view, { x1: Math.max(p.range, tp.x, tg ? S.tx : 0, 10) * 1.12, y1: Math.max(p.apex.y, S.h, tp.y, tg ? S.ty : 0, 5) * 1.18 }, dt);
    P = k.plane(c, { xmin: -view.x1 * 0.04, xmax: view.x1, ymin: -view.y1 * 0.05, ymax: view.y1, equal: true, pad: sp, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.seg(P.xmin, 0, P.xmax, 0, C.violet, 2);
    const T0 = Math.max(p.T, 1e-6), t = S.t;
    P.paramTrace(p.x, p.y, 0, T0, t, C.green, { arrows: 3, w: 2.2 });
    P.vec(0, S.h, tp.x, tp.y, C.amber); P.seg(0, S.h, tp.x, S.h, k.alpha(C.cyan, 0.8), 2, [5, 3]); P.seg(tp.x, S.h, tp.x, tp.y, k.alpha(C.pink, 0.8), 2, [5, 3]);
    lab.push({ text: `v₀ = ${num(S.v, 1)}, θ = ${num(S.th, 1)}°`, x: tp.x, y: tp.y, color: C.amber, font: `13px ${F.math}`, prefer: "ne" });
    if (!tg) {
      P.dot(p.apex.x, p.apex.y, C.green, 4); P.dot(p.range, 0, C.green, 4);
      lab.push({ text: "apex", x: p.apex.x, y: p.apex.y, color: C.green, font: `13px ${F.sans}`, prefer: "n" }, { text: "lands", x: p.range, y: 0, color: C.green, font: `13px ${F.sans}`, prefer: "n" });
      P.seg(p.x(t), 0, p.x(t), p.y(t), k.alpha(C.pink, 0.6), 1.2, [3, 3]);
    } else {
      P.seg(S.tx, 0, S.tx, S.ty, k.alpha(C.violet, 0.6), 1.2, [3, 3]);
      if (cur >= 4) A.ths.forEach(th => { const q = MR.projectile(S.v, th, S.h, S.g); P.param(q.x, q.y, 0, q.T, k.alpha(C.green, 0.7), 1.4, [6, 4]); });
      lab.push({ text: "target", x: S.tx, y: S.ty, color: C.violet, font: `13px ${F.sans}`, prefer: "e" });
    }
    D.draw(P); P.labels(lab);
    const hh = `${S.html("h")}`, vc = `${S.html("v")} cos ${S.html("th")}`, vs = `${S.html("v")} sin ${S.html("th")}`;
    k.eqline(`<span class="c2">${X} = (${vc})${T}</span>,${c.w >= 600 ? " &nbsp;" : "<br>"}<span class="c3">${Y} = ${hh} + (${vs})${T} − ½(${S.html("g")})${T}<sup>2</sup></span>`, "projectile");
    const E = exact(), u = unit();
    if (!tg) {
      const atA = Math.abs(t - p.apex.t) < 1e-9 && p.apex.t > 0, atT = Math.abs(t - p.T) < 1e-9;
      k.readout({ title: "Projectile", big: m(`(<span class="c2">${num(p.x(t), 2)}</span>, <span class="c3">${num(p.y(t), 2)}</span>) at ${T} = ${S.html("t")}`),
        rows: [{ lhs: `<span class="c2">${E ? ex(E.vx, p.vx) : num(p.vx, 2)}</span>, <span class="c3">${E ? ex(E.vy, p.vy) : num(p.vy, 2)}</span>`, lbl: "v₀ cos θ and v₀ sin θ" },
          { lhs: `<span class="c5"><i>T</i> = ${E ? ex(E.T, p.T) : num(p.T, 3)}</span>`, lbl: "flight time: y = 0" },
          { lhs: `<span class="c5">${E ? ex(E.R, p.range, u) : num(p.range, 2) + u}</span>`, lbl: "range: x(T)" },
          { lhs: `<span class="c5">${E ? frH(E.ya) + (E.ya.d > 1 ? ` ≈ ${num(p.apex.y, 2)}` : "") : num(p.apex.y, 2)}${u} at <i>t</i> = ${E ? ex(E.ta, p.apex.t) : num(p.apex.t, 3)}</span>`, lbl: "maximum height" }],
        landmark: { hit: atA || atT, big: atA ? "apex" : atT ? "landing" : `${num(100 * t / T0, 0)}% of the flight`, note: atA ? "Vertical velocity v₀ sin θ − gt is zero here." : atT ? "y(T) = 0: the ball is back on the ground." : "Drag the amber ball to the apex or the landing point." },
        narr: "With h₀ = 0, try 45° and then 30° and 60°: the range is the same for complementary angles." });
      return;
    }
    const x = S.tx, aq = Q.div(Q.mul(Q(S.g), Q.mul(Q(x), Q(x))), Q.mul(Q(2), Q.mul(Q(S.v), Q(S.v)))), qn = q => (q.d <= 200 ? frH(q) : num(Q.val(q), 3));
    const cq = Q.add(aq, Q.sub(Q(S.ty), Q(S.h))), none = !A.ths.length;
    SP.set([
      { tag: "time to reach x", eq: m(`${T} = ${fr(num(x, 2), `${num(S.v, 1)} cos θ`)}`), why: "Set x(t) equal to the target's distance." },
      { tag: "substitute", eq: m(`${num(S.ty, 2)} = ${num(S.h, 2)} + ${num(x, 2)} tan θ − ${qn(aq)} sec<sup>2</sup> θ`), why: `Put that t into y(t); ${qn(aq)} = gx²/(2v₀²).` },
      { tag: "quadratic in u = tan θ", eq: m(`${qn(aq)}<i>u</i><sup>2</sup> − ${num(x, 2)}<i>u</i> + ${qn(cq)} = 0`), why: "sec² θ = 1 + tan² θ; collect terms." },
      { tag: "discriminant", eq: m(`Δ = ${num(x, 2)}<sup>2</sup> − 4(${qn(aq)})(${qn(cq)}) ≈ ${num(A.disc, 2)}`), why: none ? "Negative: no angle reaches the target at this speed." : "Positive: two angles, a low and a high one." },
      { tag: "angles", eq: m(none ? "out of reach" : A.ths.map(angT).join(" &nbsp;or&nbsp; ")), why: none ? "Raise v₀ or move the target closer." : "θ = tan⁻¹ u for each root." }], cur);
    const yAt = S.th < 90 ? p.y(x / p.vx) : NaN, reach = x <= p.range + 1e-9 || S.h > 0, hit = isFinite(yAt) && Math.abs(yAt - S.ty) < 0.015 * view.y1 && x / p.vx <= p.T + 1e-9;
    k.readout({ title: "Hit the target", big: m(`target (<span class="c4">${S.html("tx")}</span>, <span class="c4">${S.html("ty")}</span>), &nbsp;v₀ = ${S.html("v")}`),
      rows: [{ lhs: isFinite(yAt) && reach ? `${num(yAt, 2)}${u}` : "never gets there", lbl: `height of your path at x = ${num(x, 2)}` }],
      landmark: { hit, big: hit ? "hit" : isFinite(yAt) ? (yAt > S.ty ? "too high" : "too low") : "aim lower", note: hit ? "This θ reaches the target. Step to see both solutions." : "Drag the arrow tip to change θ (keep v₀), or type θ." },
      narr: "Two angles usually work for the same speed: a flat shot and a lob, symmetric about 45° when h₀ = y." });
  });
};
})();
