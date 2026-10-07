/* ============ Labs: Algebra II, batch B5 (vertex form, parabolas, nonlinear systems) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---- DOM-free helpers: vertex form, shifted terms, general form and conic systems are in MathRules (web/kits/subjects/math.js) ---- */
const MR = () => window.MathRules;
const vertexForm = (a, b, c) => MR().vertexForm(a, b, c);
const vfT = (a, h, k) => MR().vertexFormStr(a, h, k);
const vfH = (a, h, k) => MR().vertexFormStr(a, h, k, { html: true });
const ptT = (x, y) => `(${MR().qT(x)}, ${MR().qT(y)})`;
// "(v − h)" or "v" for a linear factor
const linT = (v, h, html) => MR().shiftStr(v, h, html);
// Parabola with axis along v: (u − h)² = 4p(v − k) as HTML; hz = horizontal axis (u = y, v = x)
function parabolaH(h, k, p, hz){
  const R = MR(), Q = R.Q, U = hz ? "y" : "x", V = hz ? "x" : "y", p4 = Q.mul(4, p);
  const co = Q.eq(p4, 1) ? "" : Q.eq(p4, -1) ? MI : `<span class="c1">${R.qT(p4)}</span>`;
  const sqr = Q.zero(h) ? `<i>${U}</i><sup>2</sup>` : `${linT(U, h, true)}<sup>2</sup>`;
  return `${sqr} = ${co}${linT(V, k, true)}`;
}
// General form as HTML, and intersections of a conic with a line or a second conic (MathRules.conicSystem)
const genEqH = o => MR().generalFormH(o);
const sysSolve = (c1, c2) => MR().conicSystem(c1, c2);
const setT = pts => (pts.length ? pts.map(p => `(${p.xt}, ${p.yt})`).join(", ") : "no real solution");

/* ================= Quadratic functions in vertex form (A + C) ================= */
L["a2-quad-vertex"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q, c = k.canvas(), d = c.d;
  const dom = k.dom(), ask = document.createElement("div"); ask.style.cssText = "font:400 18px/1.5 var(--math);color:var(--text);margin:2px 0 8px"; dom.appendChild(ask);
  const SP = k.stepsPanel(dom);
  let mode = "graph", P = null, idx = 0, ti = 0, lastA = 1;
  const view = {};
  k.modes([["graph", "Graph"], ["cts", "Complete the square"], ["fit", "Fit"]], mode, m => { mode = m; enter(); });

  const S = k.group("graph", () => {
    const S = k.params([
      { key: "a", label: `<span class="c3"><i>a</i></span>`, min: -3, max: 3, step: 0.5, value: 1, fmt: v => R.fmtN(v, 2) },
      { key: "b", label: `<i>b</i>`, min: -8, max: 8, step: 1, value: -4, fmt: v => R.sg(v) },
      { key: "c", label: `<i>c</i>`, min: -8, max: 8, step: 1, value: 1, fmt: v => R.sg(v) }],
      (key, v) => { if (key === "a") { if (v === 0) S.set("a", lastA > 0 ? -0.5 : 0.5); lastA = S.a; } });
    const set = (a, b, cc) => { S.set("a", a); S.set("b", b); S.set("c", cc); lastA = a; };
    k.button("Perfect square", () => set(1, -6, 9), "btn-s");
    k.button("Fractions", () => set(2, -6, 1), "btn-s");
    k.button("Opens down", () => set(-1, 4, 1), "btn-s");
    return S;
  });
  const PROBS = [[1, 6, 5], [2, -6, 1], [1, -5, 4], [-1, 4, 1], [3, 12, 7], [-2, -6, 1], [2, -12, 13]];
  const st = k.group("cts", () => { k.button("New problem", () => { idx = (idx + 1) % PROBS.length; st.reset(); enter(); }, "btn-s"); return k.stepper(() => 5, () => {}, { ms: 1400 }); });
  const TG = [{ a: 2, h: 1, k: -3 }, { a: -1, h: -2, k: 4 }, { a: -0.5, h: 2, k: 3 }, { a: 1, h: -3, k: -2 }, { a: 3, h: 0, k: -5 }, { a: -2, h: 3, k: 2 }];
  k.group("fit", () => k.button("New target", () => { ti = (ti + 1) % TG.length; enter(); }, "btn-s"));
  const fp = [{ x: 0, y: 0, snap: 1 }, { x: 2, y: 2, snap: 1 }];
  k.drag(c, () => (mode === "fit" ? P : null), fp, () => {});

  function ctsLines(a, b, cc){
    const v = vertexForm(a, b, cc), one = Q.eq(v.a, 1), ba = Q.div(v.b, v.a), m = v.m, X = "<i>x</i>", X2 = "<i>x</i><sup>2</sup>";
    const lin = q => (Q.zero(q) ? "" : ` ${Q.val(q) < 0 ? MI : "+"} ${Q.eq(Q.abs(q), 1) ? "" : R.qH(Q.abs(q))}${X}`);
    const cst = q => (Q.zero(q) ? "" : ` ${Q.val(q) < 0 ? MI : "+"} ${R.qH(Q.abs(q))}`);
    const co = one ? "" : Q.eq(v.a, -1) ? MI : `<span class="c3">${R.qH(v.a)}</span>`;
    const sq = `<span class="c4">${R.qH(v.q)}</span>`, aq = Q.mul(v.a, v.q);
    const range = Q.val(v.a) > 0 ? `[${R.qT(v.k)}, ∞)` : `(${MI}∞, ${R.qT(v.k)}]`;
    return { v, lines: [
      { tag: one ? "group" : "factor a", eq: `${co}(${X2}${lin(ba)})${cst(v.c)}`, why: one ? "Bracket the two x-terms; the constant waits outside." : `Factor a = ${R.qT(v.a)} out of the x-terms only. The constant stays outside.` },
      { tag: "half, square", eq: `(<span class="fr"><span>${R.qT(ba)}</span><span>2</span></span>)<sup>2</sup> = (${R.qH(m)})<sup>2</sup> = ${sq}`, why: "Half of the x-coefficient inside the bracket, squared: the missing corner of the square." },
      { tag: "add, subtract", eq: `${co}(${X2}${lin(ba)} + ${sq})${cst(v.c)}${one ? ` ${MI} ${sq}` : Q.val(v.a) < 0 ? ` + ${R.qH(Q.abs(v.a))} · ${sq}` : ` ${MI} ${R.qH(v.a)} · ${sq}`}`,
        why: one ? `Add ${R.qT(v.q)} inside and take ${R.qT(v.q)} away outside: nothing has changed.` : `${R.qT(v.q)} inside the bracket counts ${R.qT(v.a)} · ${R.qT(v.q)} = ${R.qT(aq)}, so ${Q.val(aq) < 0 ? "add" : "subtract"} ${R.qT(Q.abs(aq))} outside.` },
      { tag: "factor", eq: `<i>f</i>(<i>x</i>) = ${vfH(v.a, v.h, v.k)}`, why: `The bracket is (x ${Q.val(m) < 0 ? MI : "+"} ${R.qT(Q.abs(m))})², and ${R.qT(v.c)} ${Q.val(aq) < 0 ? "+" : MI} ${R.qT(Q.abs(aq))} = ${R.qT(v.k)}.` },
      { tag: "read", eq: `vertex ${ptT(v.h, v.k)}, &nbsp;range ${range}`, why: `${Q.val(v.a) > 0 ? "a > 0: minimum" : "a < 0: maximum"} value ${R.qT(v.k)} at x = ${R.qT(v.h)}. Check: h = −b/(2a) = ${R.qT(v.h)}.` }
    ] };
  }

  function enter(){
    k.showGroup(mode);
    if (mode === "graph") { k.hint("Move a, b and c; read the vertex and range"); k.guard([]); }
    else if (mode === "cts") { const v = vertexForm(...PROBS[idx]); k.hint(""); k.guard([ptT(v.h, v.k)]); }
    else { const t = TG[ti]; k.hint("Drag the amber vertex and the pink point"); k.guard([`y = ${vfT(Q(t.a), Q(t.h), Q(t.k))}`]); }
  }
  enter();

  function drawGraph(dt){
    const v = vertexForm(S.a, S.b, S.c), a = S.a, hv = Q.val(v.h), kv = Q.val(v.k), up = a > 0;
    k.split(c, dom, { off: true });
    let tw = { x0: -8, x1: 8, y0: -8, y1: 8 };
    if (Math.abs(hv) > 6 || Math.abs(kv) > 6.5) tw = { x0: hv - 8, x1: hv + 8, y0: up ? kv - 3 : kv - 13, y1: up ? kv + 13 : kv + 3 };
    k.smooth(view, tw, dt);
    P = k.plane(c, { xmin: view.x0, xmax: view.x1, ymin: view.y0, ymax: view.y1, xlabel: "x", ylabel: "y", pad: { l: 40, r: 16, t: 16, b: 30 } });
    P.grid(); P.axes();
    const f = x => a * x * x + S.b * x + S.c;
    P.line(hv, P.ymin, hv, P.ymax, k.alpha(C.amber, .75), 1.5, [6, 5]);
    // range bracket at the left edge
    const bx = P.xmin + (P.xmax - P.xmin) * 0.035, end = up ? P.ymax : P.ymin;
    P.line(bx, kv, hv, kv, k.alpha(C.cyan, .55), 1.2, [3, 4]);
    P.seg(bx, kv, bx, end, C.cyan, 4);
    if (kv > P.ymin && kv < P.ymax) { d.arrow(P.X(bx), P.Y(kv), P.X(bx), P.Y(end) + (up ? 2 : -2), C.cyan, 4); P.seg(bx - 0.25, kv, bx + 0.25, kv, C.cyan, 3); }
    P.curve(f, C.text, { w: 3 });
    P.seg(hv, kv, hv + 1, kv, k.alpha(C.text, .5), 1.2, [3, 3]); P.seg(hv + 1, kv, hv + 1, kv + a, C.pink, 3);
    P.dot(hv + 1, kv + a, C.pink, 4); P.dot(0, S.c, k.alpha(C.text, .7), 4);
    P.dot(hv, kv, C.text, 6);
    const range = up ? `[${R.qT(v.k)}, ∞)` : `(${MI}∞, ${R.qT(v.k)}]`;
    P.labels([
      { text: `vertex ${ptT(v.h, v.k)}`, x: hv, y: kv, color: C.text, font: `14px ${F.math}`, prefer: up ? "s" : "n" },
      { text: `x = ${R.qT(v.h)}`, x: hv, y: up ? P.ymax - (P.ymax - P.ymin) * 0.08 : P.ymin + (P.ymax - P.ymin) * 0.08, color: C.amber, font: `italic 14px ${F.math}`, prefer: "e" },
      { text: "a", x: hv + 1, y: kv + a / 2, color: C.pink, font: `italic 16px ${F.math}`, prefer: "e" },
      { text: "range " + range, x: bx, y: (kv + end) / 2, color: C.cyan, font: `13px ${F.math}`, prefer: "e" }
    ]);
    const hit = Q.zero(v.k);
    k.readout({ title: up ? "Opens up: a minimum" : "Opens down: a maximum", big: `<i>f</i>(<i>x</i>) = ${vfH(v.a, v.h, v.k)}`,
      rows: [
        { lhs: "standard", v: R.polyH(R.Poly([v.c, v.b, v.a])), lbl: "" },
        { lhs: `<span class="c1"><i>h</i></span> = −<i>b</i>/(2<i>a</i>)`, v: R.qH(v.h), cls: "c1", lbl: "axis of symmetry x = h" },
        { lhs: `<span class="c2"><i>k</i></span> = <i>f</i>(<i>h</i>)`, v: R.qH(v.k), cls: "c2", lbl: up ? "minimum value" : "maximum value" },
        { lhs: "range", v: range, cls: "c2" },
        { lhs: `<span class="c4">(<i>b</i>/2<i>a</i>)<sup>2</sup></span>`, v: R.qH(v.q), cls: "c4", lbl: "completes the square" }
      ],
      landmark: hit ? { hit, big: `<span class="c2"><i>k</i> = 0</span>: a perfect square`, note: `f(x) = ${R.qT(v.a)}(x ${Q.val(v.h) > 0 ? MI : "+"} ${R.qT(Q.abs(v.h))})², so the vertex is the only x-intercept, a double zero.` }
        : { hit, big: `<i>f</i>(<i>x</i>) ${up ? "≥" : "≤"} <span class="c2">${R.qT(v.k)}</span> for every <i>x</i>`, note: "(x − h)² ≥ 0, and it is 0 only at x = h." },
      narr: "Change b and watch the vertex slide along a parabola of its own. Try Perfect square, then Fractions." });
  }

  function drawCts(){
    const sol = ctsLines(...PROBS[idx]), v = sol.v, n = sol.lines.length, kk = st.k, done = kk >= n;
    ask.innerHTML = `Write <span class="m"><i>f</i>(<i>x</i>) = ${R.polyH(R.Poly([v.c, v.b, v.a]))}</span> in vertex form.`;
    SP.set(sol.lines, kk - 1);
    const pad = k.split(c, dom, { side: "left", frac: .5, hfrac: .5 });
    const mv = Q.val(v.m), t = clamp(Math.abs(mv) * 0.55, 0.45, 1.6), Sd = 3, neg = mv < 0;
    P = k.plane(c, { xmin: -1.6, xmax: Sd + 2 * t + 0.9, ymin: -t - 1.1, ymax: Sd + 1.1, equal: true, pad });
    const box = (x0, y0, x1, y1, fill, stroke, dash) => { const X0 = P.X(x0), Y0 = P.Y(y1), w = P.X(x1) - X0, h = P.Y(y0) - Y0; if (fill) d.rect(X0, Y0, w, h, fill); c.g.save(); if (dash) c.g.setLineDash(dash); d.rect(X0, Y0, w, h, null, stroke, 1.5); c.g.restore(); };
    const txt = (s, x, y, color, font) => d.text(s, P.X(x), P.Y(y), { font: font || `14px ${F.math}`, color, align: "center", base: "middle" });
    const cx = q => (Q.eq(q, 1) ? "x" : Q.eq(q, -1) ? MI + "x" : Q.isInt(q) ? R.qT(q) + "x" : (Q.val(q) < 0 ? MI : "") + `(${R.qT(Q.abs(q))})x`);
    const am = R.qT(Q.abs(v.m)), mx = cx(v.m), bx = cx(Q.div(v.b, v.a));
    box(0, 0, Sd, Sd, k.alpha(C.text, .1), k.alpha(C.text, .6)); txt("x²", Sd / 2, Sd / 2, C.text, `16px ${F.math}`);
    const dash = neg ? [5, 4] : null;
    if (kk < 2) { box(Sd, 0, Sd + 2 * t, Sd, k.alpha(C.amber, .22), C.amber, dash); txt(bx, Sd + t, Sd / 2, C.amber, `13px ${F.math}`); }
    else {
      box(Sd, 0, Sd + t, Sd, k.alpha(C.amber, .22), C.amber, dash); box(0, -t, Sd, 0, k.alpha(C.amber, .22), C.amber, dash);
      txt(mx, Sd + t / 2, Sd / 2, C.amber, `13px ${F.math}`); txt(mx, Sd / 2, -t / 2, C.amber, `13px ${F.math}`);
      box(Sd, -t, Sd + t, 0, kk >= 3 ? k.alpha(C.violet, .55) : null, C.violet, kk >= 3 ? null : [4, 3]);
      txt(kk >= 3 ? R.qT(v.q) : "?", Sd + t / 2, -t / 2, kk >= 3 ? C.text : C.violet, `12px ${F.math}`);
    }
    if (kk >= 4) { box(0, -t, Sd + t, Sd, null, C.text, null); txt(`x ${neg ? MI : "+"} ${am}`, (Sd + t) / 2, Sd + 0.45, C.amber, `italic 14px ${F.math}`); }
    else txt("x", Sd / 2, Sd + 0.4, C.muted, `italic 14px ${F.math}`);
    if (kk >= 2 && kk < 4) txt((neg ? MI : "") + am, Sd + t / 2, Sd + 0.4, C.amber, `12px ${F.math}`);
    const lbl = kk < 2 ? "x² + " + bx : kk < 3 ? "two halves; a corner is missing" : kk < 4 ? "the corner completes the square" : "a perfect square";
    txt(lbl, (Sd + t) / 2, -t - 0.65, C.muted, `12px ${F.sans}`);
    k.readout({ title: "Complete the square", big: `<i>f</i>(<i>x</i>) = ${R.polyH(R.Poly([v.c, v.b, v.a]))}`,
      rows: [{ lhs: "step", v: `${Math.min(kk, n)} of ${n}`, lbl: kk ? sol.lines[kk - 1].tag : "press Step to begin" },
        { lhs: "tiles", v: Q.eq(v.a, 1) ? "x² + bx" : `x² + (b/a)x`, lbl: Q.eq(v.a, 1) ? "the x-terms" : "the x-terms inside the bracket, after factoring a" }],
      landmark: { hit: done, big: done ? `<i>f</i>(<i>x</i>) = ${vfH(v.a, v.h, v.k)}` : "· · ·", note: done ? `Vertex ${ptT(v.h, v.k)}: h is the opposite of the number in the bracket.` : "Factor a, halve and square, add and subtract, factor, read." },
      narr: "Step through, then New problem. Negative strips (dashed) are taken away, but the missing corner is always added." });
  }

  function drawFit(){
    k.split(c, dom, { off: true });
    P = k.plane(c, { xmin: -8, xmax: 8, ymin: -8, ymax: 8, xlabel: "x", ylabel: "y", xstep: 2, ystep: 2 });
    P.grid(); P.axes();
    const T = TG[ti], ft = x => T.a * (x - T.h) ** 2 + T.k;
    P.curve(ft, k.alpha(C.text, .16), { w: 10 });
    const [V, Pt] = fp, run = Pt.x - V.x, rise = Pt.y - V.y, ok = run !== 0;
    const a = ok ? Q(rise, run * run) : null;
    if (ok) P.curve(x => Q.val(a) * (x - V.x) ** 2 + V.y, C.text, { w: 2.5 });
    P.seg(V.x, V.y, Pt.x, V.y, C.amber, 1.5, [4, 4]); P.seg(Pt.x, V.y, Pt.x, Pt.y, C.pink, 2, [4, 4]);
    P.point(V.x, V.y, C.amber, 8, true); P.point(Pt.x, Pt.y, C.pink, 8, true); P.dot(V.x, V.y, C.cyan, 3); P.dot(Pt.x, Pt.y, C.pink, 3);
    const lab = [];
    if (ok) lab.push({ text: `x₁ − h = ${R.sg(run)}`, x: (V.x + Pt.x) / 2, y: V.y, color: C.amber, font: `13px ${F.math}`, prefer: rise > 0 ? "s" : "n" },
      { text: `y₁ − k = ${R.sg(rise)}`, x: Pt.x, y: (V.y + Pt.y) / 2, color: C.pink, font: `13px ${F.math}`, prefer: run > 0 ? "e" : "w" });
    P.labels(lab);
    const match = ok && Q.eq(a, Q(T.a)) && V.x === T.h && V.y === T.k;
    const eq = ok ? `<i>y</i> = ${vfT(a, Q(V.x), Q(V.y))}` : "—";
    k.readout({ title: "Fit the target", big: eq,
      rows: [
        { lhs: `vertex (<span class="c1"><i>h</i></span>, <span class="c2"><i>k</i></span>)`, v: ptT(V.x, V.y), lbl: "the amber handle" },
        { lhs: "point (<i>x</i>₁, <i>y</i>₁)", v: ptT(Pt.x, Pt.y), cls: "c3", lbl: "the pink handle" },
        { lhs: `<span class="c3"><i>a</i></span> = (<i>y</i>₁ − <i>k</i>)/(<i>x</i>₁ − <i>h</i>)<sup>2</sup>`, v: ok ? `${R.sg(rise)}/${R.sg(run * run)} = ${R.qT(a)}` : "undefined", cls: "c3", lbl: ok ? "substitute the point into y = a(x − h)² + k" : "the point is on the axis x = h: move it sideways" },
        ok ? { lhs: "standard", v: R.polyH(R.Poly([Q.add(Q.mul(a, V.x * V.x), V.y), Q.mul(a, -2 * V.x), a])), lbl: "expanded" } : null
      ],
      landmark: match ? { hit: true, big: `Matched: ${eq}`, note: "The vertex fixes h and k; one more point fixes a." }
        : { hit: false, big: `<span class="c3"><i>a</i></span> = rise ÷ run<sup>2</sup>`, note: "One step sideways from the vertex, the graph rises by a; two steps, by 4a." },
      narr: "Put the amber vertex on the target's turning point, then the pink point on any other grid point of the target. New target for another." });
  }

  k.loop(dt => { c.begin(); if (mode === "graph") drawGraph(dt); else if (mode === "cts") drawCts(); else drawFit(); });
};

/* ================= Parabolas: focus and directrix (D) ================= */
L["a2-parabolas"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q, c = k.canvas(), d = c.d;
  let mode = "locus", P = null, hz = false, fu = 0, fv = 1.5, dv = -1.5, pu = 2.5, di = 0;
  const DISH = [{ hz: false, h: 0, k: -3, p: 2 }, { hz: false, h: -1, k: -2, p: 1.5 }, { hz: false, h: 1, k: 3, p: -1.25 }, { hz: true, h: 0, k: -4, p: 2.5 }, { hz: true, h: 1, k: 4, p: -1.5 }];
  let rcv = { x: 4, y: 3 };
  // local (u across the axis, v along it) ↔ world
  const W = (u, v) => (hz ? [v, u] : [u, v]), Lc = (x, y) => (hz ? [y, x] : [x, y]);
  const geo = () => { const p = (fv - dv) / 2, h = fu, kk = (fv + dv) / 2; return { p, h, k: kk, vf: u => kk + (u - h) ** 2 / (4 * p) }; };
  const pts = [{ x: 0, y: 0, snap: 0.5 }, { x: 0, y: 0, snap: 0.5 }, { x: 0, y: 0 }, { x: 0, y: 0, snap: 0.25 }];
  const umax = g => 2 * Math.sqrt(Math.abs(g.p) * 4.2);
  k.drag(c, () => P, pts, (i, q) => {
    const [u, v] = Lc(q.x, q.y);
    if (mode === "locus") {
      if (i === 0) { fu = clamp(u, -5, 5); fv = clamp(v, -4.5, 4.5); if (Math.abs(fv - dv) < 0.5) dv = fv + (dv <= fv ? -0.5 : 0.5); }
      else if (i === 1) { dv = clamp(hz ? q.x : q.y, -4.5, 4.5); if (Math.abs(fv - dv) < 0.5) dv = fv + (dv <= fv ? -0.5 : 0.5); }
      else if (i === 2) { const g = geo(), m = umax(g); pu = clamp(u, g.h - m, g.h + m); const e = 2 * Math.abs(g.p); if (Math.abs(Math.abs(pu - g.h) - e) < 0.12) pu = g.h + Math.sign(pu - g.h || 1) * e; else pu = Math.round(pu * 10) / 10; }
      if (Math.abs(fv - dv) > 8) dv = fv + Math.sign(dv - fv) * 8;
    } else if (i === 3) { rcv = { x: q.x, y: q.y }; const g = geo(), [fx, fy] = W(g.h, g.k + g.p); if (Math.hypot(q.x - fx, q.y - fy) < 0.35) rcv = { x: fx, y: fy }; }
  });
  const ctl = () => {
    k.ctl.innerHTML = "";
    k.button("Turn sideways", () => { hz = !hz; if (mode === "reflect") newDish(true); }, "btn-s");
    if (mode === "locus") { k.button("Wide", () => { fu = 0; fv = 2; dv = -2; }, "btn-s"); k.button("Narrow", () => { fu = 0; fv = 0.25; dv = -0.25; }, "btn-s"); k.hint("Drag the focus, the directrix and the point"); k.guard([]); }
    else { k.button("New dish", () => newDish(false), "btn-s"); k.hint("Drag the receiver to where the rays meet"); newDish(true); }
  };
  function newDish(keep){
    if (!keep) di = (di + 1) % DISH.length; let D = DISH[di];
    if (keep && D.hz !== hz) { di = DISH.findIndex(x => x.hz === hz); D = DISH[di]; }
    hz = D.hz; fu = D.h; fv = D.k + D.p; dv = D.k - D.p;
    const [ox, oy] = W(D.h + 3, D.k + (D.p > 0 ? 4.5 : -4.5) * 0.9); rcv = { x: clamp(ox, -6, 6), y: clamp(oy, -4.5, 4.5) };
    const [fx, fy] = W(D.h, D.k + D.p); k.guard([`(${R.qT(Q(fx))}, ${R.qT(Q(fy))})`]);
  }
  k.modes([["locus", "Focus & directrix"], ["reflect", "Reflect"]], mode, m => { mode = m; ctl(); });
  ctl();
  const dist = (x1, y1, x2, y2) => Math.hypot(x1 - x2, y1 - y2);

  k.loop(() => {
    c.begin();
    P = k.plane(c, { xmin: -8, xmax: 8, ymin: -6, ymax: 6, equal: true, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes();
    const g = geo(), sg = Math.sign(g.p), [Fx, Fy] = W(g.h, g.k + g.p), [Vx, Vy] = W(g.h, g.k), m = umax(g);
    const hq = Q(g.h), kq = Q(g.k), pq = Q(g.p), WQ = (u, v) => (hz ? [v, u] : [u, v]);
    // directrix and axis
    const dirSeg = hz ? [dv, P.ymin, dv, P.ymax] : [P.xmin, dv, P.xmax, dv];
    P.seg(...dirSeg, C.violet, 2.5);
    const ax = hz ? [P.xmin, g.h, P.xmax, g.h] : [g.h, P.ymin, g.h, P.ymax];
    P.line(...ax, k.alpha(C.text, .25), 1, [3, 5]);
    P.param(t => W(t, g.vf(t))[0], t => W(t, g.vf(t))[1], g.h - m * 1.6, g.h + m * 1.6, C.text, 3);
    const lab = [];
    if (mode === "locus") {
      // p: vertex → focus (solid) and vertex → directrix (dashed); latus rectum
      P.seg(Vx, Vy, Fx, Fy, C.amber, 3); const [Dx, Dy] = W(g.h, dv); P.seg(Vx, Vy, Dx, Dy, C.amber, 2, [4, 4]);
      const [l1x, l1y] = W(g.h - 2 * Math.abs(g.p), g.k + g.p), [l2x, l2y] = W(g.h + 2 * Math.abs(g.p), g.k + g.p);
      P.seg(l1x, l1y, l2x, l2y, k.alpha(C.amber, .6), 1.5);
      // the point and its two distances
      const [Px, Py] = W(pu, g.vf(pu)), [Qx, Qy] = W(pu, dv), PF = dist(Px, Py, Fx, Fy), PD = Math.abs(g.vf(pu) - dv);
      P.seg(Px, Py, Fx, Fy, C.cyan, 2.5); P.seg(Px, Py, Qx, Qy, C.cyan, 2.5); P.dot(Qx, Qy, C.violet, 4);
      P.dot(Vx, Vy, C.text, 4.5); P.point(Fx, Fy, C.pink, 7); P.point(Px, Py, C.text, 7, true);
      pts[0].x = Fx; pts[0].y = Fy;
      const hx = hz ? dv : P.xmin + 0.9, hy = hz ? P.ymax - 0.9 : dv; pts[1].x = hx; pts[1].y = hy; pts[1].fixX = !hz; pts[1].fixY = hz;
      d.circle(P.X(hx), P.Y(hy), 7, C.ink, C.violet, 2.5);
      pts[2].x = Px; pts[2].y = Py; pts[3].x = 99; pts[3].y = 99;
      const onLR = Math.abs(Math.abs(pu - g.h) - 2 * Math.abs(g.p)) < 1e-9;
      lab.push({ text: "F", x: Fx, y: Fy, color: C.pink, font: `italic 16px ${F.math}`, prefer: hz ? (sg > 0 ? "e" : "w") : (sg > 0 ? "n" : "s") },
        { text: `p = ${R.fmtN(g.p, 2)}`, x: (Vx + Fx) / 2, y: (Vy + Fy) / 2, color: C.amber, font: `13px ${F.math}`, prefer: hz ? "s" : "w" },
        { text: `PF = ${R.fmtN(PF, 2)}`, x: (Px + Fx) / 2, y: (Py + Fy) / 2, color: C.cyan, font: `13px ${F.math}` },
        { text: `PD = ${R.fmtN(PD, 2)}`, x: (Px + Qx) / 2, y: (Py + Qy) / 2, color: C.cyan, font: `13px ${F.math}` },
        { text: "P", x: Px, y: Py, color: C.text, font: `italic 15px ${F.math}` },
        { text: "directrix", x: hx, y: hy, color: C.violet, font: `13px ${F.sans}`, prefer: hz ? "e" : "n" });
      P.labels(lab);
      const gen = R.conicGeneral(hz ? "parabolaH" : "parabolaV", { h: hz ? kq : hq, k: hz ? hq : kq, p: pq });
      const fT = hz ? ptT(Q.add(kq, pq), hq) : ptT(hq, Q.add(kq, pq)), vT = hz ? ptT(kq, hq) : ptT(hq, kq), dT = `${hz ? "x" : "y"} = ${R.qT(Q.sub(kq, pq))}`;
      const open = hz ? (sg > 0 ? "right" : "left") : (sg > 0 ? "up" : "down");
      k.readout({ title: `Opens ${open}`, big: parabolaH(hq, kq, pq, hz),
        rows: [
          { lhs: "vertex", v: vT, lbl: "halfway between focus and directrix" },
          { lhs: `<span class="c1"><i>p</i></span>`, v: R.qT(pq), cls: "c1", lbl: "signed distance vertex → focus" },
          { lhs: `<span class="c3">focus</span> · <span class="c4">directrix</span>`, v: `<span class="c3">${fT}</span> · <span class="c4">${dT}</span>` },
          { lhs: `<span class="c2"><i>PF</i> = <i>PD</i></span>`, v: R.fmtN(PF, 3), cls: "c2", lbl: `P = (${R.fmtN(Px, 2)}, ${R.fmtN(Py, 2)})` },
          { lhs: "general form", v: genEqH(gen), lbl: `latus rectum |4p| = ${R.qT(Q.abs(Q.mul(4, pq)))}` }
        ],
        landmark: onLR ? { hit: true, big: `<span class="c2"><i>PF</i> = <i>PD</i> = 2|<i>p</i>| = ${R.fmtN(2 * Math.abs(g.p), 3)}</span>`, note: "P is an end of the latus rectum, level with the focus: the chord through F has length |4p|." }
          : { hit: false, big: `<span class="c2"><i>PF</i> = <i>PD</i></span> for every <i>P</i>`, note: "Drag P along the curve: the two cyan lengths change together. Slide it level with the focus." },
        narr: "Drag the pink focus or the violet directrix handle. A larger p gives a wider parabola; a negative p flips it." });
    } else {
      // parallel rays reflect through the focus (computed with the tangent, not assumed)
      const N = 7, sp = m / 3.4, edge = hz ? (sg > 0 ? P.xmax : P.xmin) : (sg > 0 ? P.ymax : P.ymin);
      let caught = 0, show = null;
      for (let j = -3; j <= 3; j++) {
        const u = g.h + j * sp, v = g.vf(u), T = [1, (u - g.h) / (2 * g.p)], n = Math.hypot(...T), t = [T[0] / n, T[1] / n];
        const din = [0, -sg], dt = din[0] * t[0] + din[1] * t[1], dout = [2 * dt * t[0] - din[0], 2 * dt * t[1] - din[1]];
        const [hx, hy] = W(u, v), [sx, sy] = W(u, edge), Lr = dist(...W(u, v), Fx, Fy) * 1.35 + 0.6;
        const [ex, ey] = W(u + dout[0] * Lr, v + dout[1] * Lr);
        P.seg(sx, sy, hx, hy, k.alpha(C.text, .45), 1.4); P.seg(hx, hy, ex, ey, k.alpha(C.cyan, .85), 1.6);
        // distance from the receiver to this reflected ray
        const vx = ex - hx, vy = ey - hy, s = clamp(((rcv.x - hx) * vx + (rcv.y - hy) * vy) / (vx * vx + vy * vy), 0, 1);
        if (dist(rcv.x, rcv.y, hx + s * vx, hy + s * vy) < 0.18) caught++;
        if (j === 2) show = { u, v, t, din, dout, hx, hy };
      }
      if (show) { const { t, hx, hy } = show, [tx, ty] = W(t[0] * 1.6, t[1] * 1.6); P.seg(hx - tx, hy - ty, hx + tx, hy + ty, k.alpha(C.violet, .8), 1.5, [4, 3]); P.dot(hx, hy, C.text, 4); }
      pts[0].x = pts[1].x = pts[2].x = 99; pts[0].y = pts[1].y = pts[2].y = 99; pts[3].x = rcv.x; pts[3].y = rcv.y;
      const all = caught === N;
      d.circle(P.X(rcv.x), P.Y(rcv.y), 9, k.alpha(all ? C.pink : C.text, .18), all ? C.pink : C.text, 2.5);
      lab.push({ text: "receiver", x: rcv.x, y: rcv.y, color: all ? C.pink : C.text, font: `13px ${F.sans}`, prefer: "se" });
      if (show) lab.push({ text: "tangent", x: show.hx, y: show.hy, color: C.violet, font: `12px ${F.sans}`, prefer: "nw" });
      P.labels(lab);
      const ang = show ? (Math.acos(clamp(Math.abs(show.din[0] * show.t[0] + show.din[1] * show.t[1]), 0, 1)) * 180 / Math.PI) : 0;
      const fT = hz ? ptT(Q.add(kq, pq), hq) : ptT(hq, Q.add(kq, pq));
      k.readout({ title: "Reflective property", big: parabolaH(hq, kq, pq, hz),
        rows: [
          { lhs: "receiver", v: `(${R.fmtN(rcv.x, 2)}, ${R.fmtN(rcv.y, 2)})`, lbl: "drag it" },
          { lhs: "rays caught", v: `${caught} of ${N}`, cls: all ? "c3" : "", lbl: "reflected rays passing through the receiver" },
          { lhs: "angle in = angle out", v: `${R.fmtN(ang, 1)}°`, lbl: "with the dashed tangent, for the marked ray" }
        ],
        landmark: all ? { hit: true, big: `Every ray meets at the <span class="c3">focus ${fT}</span>`, note: `From the vertex, move p = ${R.qT(pq)} along the axis. A dish puts its receiver here.` }
          : { hit: false, big: "Where do the reflected rays meet?", note: "Find p from 4p in the equation, then move p from the vertex along the axis." },
        narr: "Each ray bounces off at equal angles to the tangent. New dish or Turn sideways for another." });
    }
  });
};

/* ================= Nonlinear systems (D) ================= */
L["a2-nonlinear-sys"] = k => {
  MathKit.attach(k); const { C, F } = k, R = k.MR, Q = R.Q, c = k.canvas(), d = c.d;
  const dom = k.dom(), ask = document.createElement("div"); ask.style.cssText = "font:400 18px/1.5 var(--math);color:var(--text);margin:2px 0 8px"; dom.appendChild(ask);
  const SP = k.stepsPanel(dom);
  let mode = "graph", P = null, idx = 0;
  const FAM = {
    circle: { p: [["<i>r</i>", 0.5, 6, 0.5]] }, ellipse: { p: [["<i>a</i>", 0.5, 7, 0.5], ["<i>b</i>", 0.5, 6, 0.5]] },
    hyperbola: { p: [["<i>a</i>", 0.5, 6, 0.5], ["<i>b</i>", 0.5, 6, 0.5]] }, parabola: { p: [["<i>a</i>", -2, 2, 0.25], ["<i>c</i>", -6, 6, 0.5]] },
    line: { p: [["<i>m</i>", -4, 4, 0.25], ["<i>b</i>", -7, 7, 0.5]] }
  };
  const cur = [{ t: "circle", v: [2, 0] }, { t: "parabola", v: [1, -2] }];
  // curve → {kind, A, C, E, F} or {kind: "line", m, b}; equation HTML; implicit G
  function curve(t, v){
    const q = Q, [p1, p2] = v.map(x => q(x));
    if (t === "line") return { kind: "line", m: p1, b: p2, html: `<i>y</i> = ${R.polyH(R.Poly([p2, p1]))}` };
    const sq = z => Q.mul(z, z);
    if (t === "circle") return { kind: "conic", A: q(1), C: q(1), E: q(0), F: Q.neg(sq(p1)), html: `<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = ${R.qT(sq(p1))}` };
    if (t === "parabola") return { kind: "conic", A: p1, C: q(0), E: q(-1), F: p2, html: `<i>y</i> = ${R.polyH(R.Poly([p2, 0, p1]))}` };
    const a2 = sq(p1), b2 = sq(p2), fr = (top, z) => `<span class="fr"><span>${top}</span><span>${R.qT(z)}</span></span>`;
    if (t === "ellipse") return { kind: "conic", A: b2, C: a2, E: q(0), F: Q.neg(Q.mul(a2, b2)), html: `${fr("<i>x</i><sup>2</sup>", a2)} + ${fr("<i>y</i><sup>2</sup>", b2)} = 1` };
    return { kind: "conic", A: b2, C: Q.neg(a2), E: q(0), F: Q.neg(Q.mul(a2, b2)), html: `${fr("<i>x</i><sup>2</sup>", a2)} ${MI} ${fr("<i>y</i><sup>2</sup>", b2)} = 1` };
  }
  const drawCurve = (cv, color) => { if (cv.kind === "line") { const m = Q.val(cv.m), b = Q.val(cv.b); P.seg(P.xmin, m * P.xmin + b, P.xmax, m * P.xmax + b, color, 2.5); }
    else { const A = Q.val(cv.A), Cc = Q.val(cv.C), E = Q.val(cv.E), Fv = Q.val(cv.F); P.implicit((x, y) => A * x * x + Cc * y * y + E * y + Fv, color, 2.5, 4); } };

  k.modes([["graph", "Explore"], ["solve", "Solve"]], mode, m => { mode = m; enter(); });
  const sl = [];
  const sync = () => {
    cur.forEach((cu, i) => { const ps = FAM[cu.t].p; [0, 1].forEach(j => { const s = sl[i][j], w = s.el.parentNode, def = ps[j];
      if (!def) { w.style.display = "none"; return; } if (mode === "graph") w.style.display = "";
      w.querySelector("label").innerHTML = `<span class="${i ? "c2" : "c1"}">${def[0]}</span>`; s.el.min = def[1]; s.el.max = def[2]; s.el.step = def[3]; s.set(cu.v[j]); }); });
  };
  const DEF = { circle: [3, 0], ellipse: [4, 2], hyperbola: [2, 1.5], parabola: [1, -2], line: [1, 1] };
  k.group("graph", () => {
    [0, 1].forEach(i => {
      const opts = (i ? [["line", "line y = mx + b"]] : []).concat([["circle", "circle"], ["ellipse", "ellipse"], ["hyperbola", "hyperbola"], ["parabola", "parabola y = ax² + c"]]);
      const sel = k.select(i ? `<span class="c2">second</span>` : `<span class="c1">first</span>`, opts, cur[i].t, v => { cur[i].t = v; cur[i].v = DEF[v].slice(); sync(); });
      sl[i] = [0, 1].map(j => k.slider("p", 0, 1, 0.5, 0, v => { if (cur[i].t === "parabola" && j === 0 && v === 0) { v = 0.25; sl[i][0].set(v); } cur[i].v[j] = v; }, v => R.fmtN(v, 2)));
      cur[i].sel = sel;
    });
    const pre = (t1, v1, t2, v2) => { cur[0].t = t1; cur[0].v = v1; cur[1].t = t2; cur[1].v = v2; cur[0].sel.set(t1); cur[1].sel.set(t2); sync(); };
    k.button("3 points", () => pre("circle", [2, 0], "parabola", [1, -2]), "btn-s");
    k.button("4 points", () => pre("ellipse", [4, 2], "parabola", [0.5, -3]), "btn-s");
    k.button("Tangent", () => pre("circle", [3, 0], "line", [0, 3]), "btn-s");
  });
  // Solve mode: exact problems; the steps are the substitution/elimination, the solution set comes from sysSolve.
  const X = "<i>x</i>", Y = "<i>y</i>", X2 = "<i>x</i><sup>2</sup>", Y2 = "<i>y</i><sup>2</sup>";
  const circ = r2 => ({ kind: "conic", A: Q(1), C: Q(1), E: Q(0), F: Q(-r2), html: `${X2} + ${Y2} = ${r2}` });
  const PROBS = [
    { c1: circ(25), c2: { kind: "line", m: Q(1), b: Q(1), html: `${Y} = ${X} + 1` }, how: "substitution", lines: [
      { tag: "substitute", eq: `${X2} + (${X} + 1)<sup>2</sup> = 25`, why: "The line already gives y. Put x + 1 in place of y in the circle." },
      { tag: "expand", eq: `2${X2} + 2${X} ${MI} 24 = 0`, why: "(x + 1)² = x² + 2x + 1. Collect the terms and subtract 25." },
      { tag: "solve", eq: `${X2} + ${X} ${MI} 12 = 0 &nbsp;⇒&nbsp; (${X} + 4)(${X} ${MI} 3) = 0`, why: "Divide by 2 and factor: x = 3 or x = −4." },
      { tag: "back-sub", eq: `${X} = 3: ${Y} = 4; &nbsp; ${X} = ${MI}4: ${Y} = ${MI}3`, why: "Use the line y = x + 1 for each x." }] },
    { c1: circ(9), c2: { kind: "conic", A: Q(1), C: Q(0), E: Q(-1), F: Q(-3), html: `${Y} = ${X2} ${MI} 3` }, how: "substitution", lines: [
      { tag: "substitute", eq: `${X2} = ${Y} + 3 &nbsp;⇒&nbsp; (${Y} + 3) + ${Y2} = 9`, why: "Both equations contain x². Solve the parabola for x² and replace it in the circle." },
      { tag: "solve", eq: `${Y2} + ${Y} ${MI} 6 = 0 &nbsp;⇒&nbsp; (${Y} + 3)(${Y} ${MI} 2) = 0`, why: "A quadratic in y: y = 2 or y = −3." },
      { tag: "back-sub", eq: `${Y} = 2: ${X2} = 5; &nbsp; ${Y} = ${MI}3: ${X2} = 0`, why: "x² = y + 3 for each y. A positive x² gives two mirror points; x² = 0 gives one." }] },
    { c1: circ(10), c2: { kind: "conic", A: Q(1), C: Q(-1), E: Q(0), F: Q(-8), html: `${X2} ${MI} ${Y2} = 8` }, how: "elimination", lines: [
      { tag: "add", eq: `2${X2} = 18 &nbsp;⇒&nbsp; ${X2} = 9`, why: "Adding the equations eliminates y²." },
      { tag: "back-sub", eq: `${Y2} = 10 ${MI} 9 = 1`, why: "Put x² = 9 into the circle." },
      { tag: "roots", eq: `${X} = ±3, &nbsp; ${Y} = ±1`, why: "Each sign of x goes with each sign of y: four pairs." }] },
    { c1: { kind: "conic", A: Q(1), C: Q(0), E: Q(-1), F: Q(1), html: `${Y} = ${X2} + 1` }, c2: { kind: "line", m: Q(2), b: Q(0), html: `${Y} = 2${X}` }, how: "substitution", lines: [
      { tag: "substitute", eq: `${X2} + 1 = 2${X}`, why: "Both equations give y. Set them equal." },
      { tag: "solve", eq: `${X2} ${MI} 2${X} + 1 = 0 &nbsp;⇒&nbsp; (${X} ${MI} 1)<sup>2</sup> = 0`, why: "Discriminant 4 − 4 = 0: one double root, x = 1." },
      { tag: "back-sub", eq: `${X} = 1: ${Y} = 2`, why: "One point, counted twice: the line is tangent to the parabola." }] },
    { c1: circ(1), c2: { kind: "line", m: Q(1), b: Q(3), html: `${Y} = ${X} + 3` }, how: "substitution", lines: [
      { tag: "substitute", eq: `${X2} + (${X} + 3)<sup>2</sup> = 1`, why: "Put x + 3 in place of y." },
      { tag: "expand", eq: `2${X2} + 6${X} + 8 = 0 &nbsp;⇒&nbsp; ${X2} + 3${X} + 4 = 0`, why: "Collect the terms and divide by 2." },
      { tag: "discriminant", eq: `<i>b</i><sup>2</sup> ${MI} 4<i>ac</i> = 9 ${MI} 16 = ${MI}7 &lt; 0`, why: "Negative: the roots x = (−3 ± i√7)/2 are complex, not points of the graph." }] },
    { c1: circ(4), c2: { kind: "conic", A: Q(1), C: Q(0), E: Q(-1), F: Q(2), html: `${Y} = ${X2} + 2` }, how: "substitution", lines: [
      { tag: "substitute", eq: `${X2} = ${Y} ${MI} 2 &nbsp;⇒&nbsp; (${Y} ${MI} 2) + ${Y2} = 4`, why: "Solve the parabola for x² and replace it in the circle." },
      { tag: "solve", eq: `${Y2} + ${Y} ${MI} 6 = 0 &nbsp;⇒&nbsp; (${Y} + 3)(${Y} ${MI} 2) = 0`, why: "y = 2 or y = −3." },
      { tag: "back-sub", eq: `${Y} = 2: ${X2} = 0; &nbsp; ${Y} = ${MI}3: ${X2} = ${MI}5`, why: "x² = −5 has no real solution: reject y = −3. The parabola only touches the top of the circle." }] }
  ];
  const sol = () => { const pr = PROBS[idx], s = sysSolve(pr.c1, pr.c2), n = s.pts.length;
    const fin = { tag: "solution", eq: n ? `{${setT(s.pts)}}` : setT(s.pts), why: n ? `${n} point${n > 1 ? "s" : ""}: check each one in both equations.` : "The graphs do not meet." };
    return { pr, s, lines: pr.lines.concat([fin]) }; };
  const st = k.group("solve", () => { k.button("New system", () => { idx = (idx + 1) % PROBS.length; st.reset(); enter(); }, "btn-s"); return k.stepper(() => sol().lines.length, () => {}, { ms: 1400 }); });

  function enter(){
    k.showGroup(mode); sync();
    if (mode === "graph") { k.hint("Choose two curves and move the sliders"); k.guard([]); }
    else { const s = sol().s; k.hint(""); k.guard(s.pts.length ? s.pts.map(p => `(${p.xt}, ${p.yt})`) : [setT(s.pts)]); }
  }
  enter();

  const ptLabels = (s, color) => s.pts.map(p => ({ text: `(${p.xt}, ${p.yt})`, x: p.x, y: p.y, color, font: `13px ${F.math}` }));
  const eqH = (r, v) => { const V = `<i>${v}</i>`; return R.polyH(R.Poly([r.c, r.b, r.a]), V) + " = 0"; };

  k.loop(() => {
    c.begin();
    if (mode === "graph") {
      k.split(c, dom, { off: true });
      P = k.plane(c, { xmin: -8, xmax: 8, ymin: -7, ymax: 7, equal: true, xlabel: "x", ylabel: "y" });
      P.grid(); P.axes();
      const c1 = curve(cur[0].t, cur[0].v), c2 = curve(cur[1].t, cur[1].v), s = sysSolve(c1, c2);
      drawCurve(c1, C.amber); drawCurve(c2, C.cyan);
      s.pts.forEach(p => P.dot(p.x, p.y, C.green, 6));
      P.labels(ptLabels(s, C.green));
      const n = s.pts.length, exact = s.pts.every(p => p.exact), viaX = c2.kind === "line";
      const rej = s.rejected.map(r => `y = ${r.y} gives x² = ${r.X}`).join("; ");
      k.readout({ title: s.kind === "infinite" ? "Same curve: infinitely many" : `${n} intersection point${n === 1 ? "" : "s"}`,
        big: `<span class="c1">${c1.html}</span>, &nbsp;<span class="c2">${c2.html}</span>`,
        rows: [
          s.red ? { lhs: viaX ? "substitute the line:" : "eliminate <i>x</i><sup>2</sup>:", v: eqH(s.red, s.red.v), lbl: s.D ? `discriminant ${R.qT(s.D)}` : "" } : null,
          { lhs: `<span class="c5">solutions</span>`, v: n ? setT(s.pts) : "none (real)", cls: "c5", lbl: n && !exact ? "rounded to 2 decimals" : "" },
          s.complex ? { lhs: "complex", v: "discriminant &lt; 0", lbl: "the algebra has complex solutions, not points of the graph" } : null,
          rej ? { lhs: "rejected", v: rej, lbl: "no real x has a negative square" } : null
        ],
        landmark: s.tangent && n ? { hit: true, big: "The curves touch: a tangency", note: s.D && Q.zero(s.D) ? "Discriminant 0: a double root, so two intersection points merge into one." : "x² = 0 at that height gives a single point on the axis instead of a mirror pair." }
          : { hit: false, big: `${viaX ? "line and conic: at most 2" : "two conics: at most 4"}`, note: viaX ? "Substituting a line leaves a quadratic in x." : "Eliminating x² leaves a quadratic in y; each root gives up to two x-values." },
        narr: "Try the presets, then make the curves just touch. Can you get 1, 2, 3 and 4 points?" });
    } else {
      const S0 = sol(), { pr, s } = S0, n = S0.lines.length, kk = st.k, done = kk >= n;
      ask.innerHTML = `Solve by ${pr.how}: &nbsp;<span class="m"><span class="c1">${pr.c1.html}</span>, &nbsp;<span class="c2">${pr.c2.html}</span></span>`;
      SP.set(S0.lines, kk - 1);
      const pad = k.split(c, dom, { side: "left", frac: .52, hfrac: .52 });
      const r = Math.max(3.2, Math.sqrt(Math.max(0, -Q.val(pr.c1.F))) + 1.2);
      P = k.plane(c, { xmin: -r, xmax: r, ymin: -r, ymax: r, equal: true, xlabel: "x", ylabel: "y", pad });
      P.grid(); P.axes();
      drawCurve(pr.c1, C.amber); drawCurve(pr.c2, C.cyan);
      if (done) { s.pts.forEach(p => P.dot(p.x, p.y, C.green, 6)); P.labels(ptLabels(s, C.green)); } else P.labels([]);
      k.readout({ title: `Solve by ${pr.how}`, big: `<span class="c1">${pr.c1.html}</span>, &nbsp;<span class="c2">${pr.c2.html}</span>`,
        rows: [{ lhs: "step", v: `${Math.min(kk, n)} of ${n}`, lbl: kk ? S0.lines[kk - 1].tag : "press Step to begin" }],
        landmark: { hit: done, big: done ? `<span class="c5">${s.pts.length} real solution${s.pts.length === 1 ? "" : "s"}</span>` : "· · ·", note: done ? (s.pts.length ? "Each green point satisfies both equations." : "The graphs never meet; the solutions are complex.") : "Reduce to one variable, solve, then find each partner." },
        narr: "Step through, then New system. Watch for x² < 0 and for a zero discriminant." });
    }
  });
};

})();
