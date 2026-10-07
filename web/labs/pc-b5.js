/* ============ Labs: Precalculus, batch B5 (building functions, locating zeros, limits from graphs) ============ */
(function(){
const L = window.LABS;
const MI = "−", INF = "∞";
const MRf = () => window.MathRules;

/* ---------- KIT CANDIDATES (DOM-free; small pure rules this batch needed) ---------- */
// KIT CANDIDATE: (p − q√m)/r simplified as text, p, q, r integers, m ≥ 0 ("(10 − 2√7)/3", "2"); used for exact optima
const surdT = (p, q, m, r) => { const MR = MRf(), Q = MR.Q; const [o, i] = MR.sqrtParts(m); q *= o; if (i === 1) return MR.qT(Q(p - q, r));
  let g = MR.gcd(MR.gcd(Math.abs(p), Math.abs(q)), Math.abs(r)) || 1; if (r < 0) g = -g; p /= g; q /= g; r /= g;
  const rad = `${q === 1 ? "" : q}√${i}`, top = p ? `${p} ${MI} ${rad}` : `${MI}${rad}`; return r === 1 ? top : `(${top})/${r}`; };
// KIT CANDIDATE: √m/2 simplified as text, m ≥ 0 an integer ("√11/2", "3/2", "√2")
const halfRootT = m => { const MR = MRf(), [o, i] = MR.sqrtParts(m), q = MR.Q(o, 2); if (i === 1) return MR.qT(q); return `${q.n === 1 ? "" : q.n}√${i}${q.d === 1 ? "" : "/" + q.d}`; };
// KIT CANDIDATE: possible (positive, negative, nonreal) zero counts of a degree-n polynomial from Descartes' counts
const descRows = (D, n) => { const out = []; D.posCounts.forEach(p => D.negCounts.forEach(q => { const c = n - D.zeroRoot - p - q; if (c >= 0 && c % 2 === 0) out.push([p, q, c]); })); return out; };

// readout that only re-renders when its content changes
const ROmemo = k => { let last = ""; return o => { const s = JSON.stringify(o); if (s !== last) { last = s; k.readout(o); } }; };
const modesTop = k => { const mb = k.stage.querySelector(".modes"); return mb ? mb.offsetTop + mb.offsetHeight + 6 : 8; };
const poly = (c, pts, fill, stroke, lw = 1.5) => { const g = c.g; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.stroke(); } };
const mi = s => String(s).replace(/-/g, MI);

/* ================= pc-function-modeling ================= */
L["pc-function-modeling"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, C = k.C, F = k.F, c = k.canvas(), ro = ROmemo(k);
  let mode = "box", P = null, P2 = null;
  const S = k.vars([
    { key: "L", value: 12, min: 4, max: 40, step: 1, cls: "c2", label: "sheet length L" },
    { key: "W", value: 8, min: 2, max: 40, step: 1, cls: "c2", label: "sheet width W" },
    { key: "x", value: 1, min: 0.1, max: 19.9, step: 0.1, cls: "c1", label: "cut size x" },
    { key: "F", value: 120, min: 20, max: 600, step: 10, typeStep: 1, cls: "c2", label: "total fence F" },
    { key: "n", value: 3, min: 2, max: 6, step: 1, cls: "c2", label: "fence pieces across the pen" },
    { key: "w", value: 10, min: 0.5, max: 299.5, step: 0.5, cls: "c1", label: "width w" },
    { key: "a", value: 3, min: 0, max: 8, step: 0.5, cls: "c2", label: "target point a" },
    { key: "p", value: 1, min: 0, max: 12, step: 0.05, cls: "c1", label: "x of the point on the curve" },
  ], () => fix());
  const xMax = () => Math.min(S.L, S.W) / 2, wMax = () => S.F / S.n;
  function fix(){ if (S.x > xMax() - 0.1) S.set("x", Math.max(0.1, +(xMax() - 0.1).toFixed(1))); if (S.w > wMax() - 0.5) S.set("w", Math.max(0.5, Math.floor((wMax() - 0.5) * 2) / 2)); }
  const V = x => x * (S.L - 2 * x) * (S.W - 2 * x), A = w => w * (S.F - S.n * w), dist = x => Math.sqrt((x - S.a) ** 2 + x);
  const xBest = () => (S.L + S.W - Math.sqrt(S.L * S.L - S.L * S.W + S.W * S.W)) / 6;
  const pts = [
    { x: 1, y: 0, on: x => V(x), snap: 0.1, color: C.amber, name: "cut size x on V(x)" },
    { x: 10, y: 0, on: w => A(w), snap: 0.5, color: C.amber, name: "width w on A(w)" },
    { x: 1, y: 1, on: x => Math.sqrt(Math.max(0, x)), snap: 0.05, color: C.amber, name: "point P on y = √x" },
    { x: 3, y: 0, fixY: true, snap: 0.5, color: C.cyan, name: "target point T" },
  ];
  const D = k.drag(c, () => P, pts, (i, p) => { if (i === 0) S.set("x", p.x); if (i === 1) S.set("w", p.x); if (i === 2) S.set("p", p.x); if (i === 3) S.set("a", p.x); }, { label: "Model" });
  const sheet = [{ x: 1, y: -1, color: C.amber, name: "corner cut on the sheet", path: (mx, my) => { const t = Math.max(0.1, Math.min(xMax() - 0.1, Math.round((mx - my) * 5) / 10)); return { x: t, y: -t }; } }];
  const D2 = k.drag(c, () => (mode === "box" ? P2 : null), sheet, (i, p) => S.set("x", p.x), { label: "Sheet" });
  k.modes([["box", "Box"], ["fence", "Fence"], ["near", "Closest point"]], mode, m => { mode = m; hint(); });
  const hint = () => k.hint(mode === "box" ? "Drag the corner cut on the sheet or the point on V(x)." : mode === "fence" ? "Drag the point along A(w), or scrub F and n." : "Drag P along y = √x and T along the x-axis.");
  hint(); k.guard([]);
  const lab = (P, list) => P.labels(list.map(l => Object.assign({ font: `14px ${F.math}` }, l)));
  const T = (s, x, y, color, align = "center") => c.d.text(s, x, y, { color, align, font: `13px ${F.math}` });

  function frame(){
    c.begin(); fix(); const top = modesTop(k), wide = c.w >= 600, pw = wide ? Math.round(c.w * 0.4) : c.w - 16, ph = wide ? c.h - top - 8 : Math.round((c.h - top) * 0.38);
    const pad = wide ? { l: pw + 46, r: 16, t: top + 12, b: 30 } : { l: 40, r: 14, t: top + ph + 14, b: 26 };
    pts.forEach((p, i) => { p.off = !((mode === "box" && i === 0) || (mode === "fence" && i === 1) || (mode === "near" && i >= 2)); p.hidden = p.off; });
    if (mode === "box") box(top, pw, ph, wide, pad); else if (mode === "fence") fence(top, pw, ph, wide, pad); else near();
  }

  function box(top, pw, ph, wide, pad){
    const Lx = S.L, Wx = S.W, x = S.x, xm = xMax(), xb = xBest(), Vb = V(xb);
    // sheet (top / left half of the picture area)
    const sr = wide ? { l: 8, t: top, w: pw, h: ph * 0.5 } : { l: 8, t: top, w: pw * 0.5, h: ph };
    P2 = k.plane(c, { xmin: -0.08 * Lx, xmax: Lx * 1.08, ymin: -Wx * 1.12, ymax: Wx * 0.12, equal: true, modes: false, pad: { l: sr.l, r: c.w - sr.l - sr.w, t: sr.t, b: c.h - sr.t - sr.h } });
    const X = P2.X, Y = P2.Y, s = X(1) - X(0);
    c.d.rect(X(0), Y(0), Lx * s, Wx * s, k.alpha(C.cyan, 0.08), C.cyan, 1.5);
    [[0, 0], [Lx - x, 0], [0, -(Wx - x)], [Lx - x, -(Wx - x)]].forEach(([u, v]) => c.d.rect(X(u), Y(v), x * s, x * s, k.alpha(C.amber, 0.28), C.amber, 1));
    c.d.rect(X(x), Y(-x), (Lx - 2 * x) * s, (Wx - 2 * x) * s, null, k.alpha(C.cyan, 0.6), 1);
    T(`L = ${Lx}`, X(Lx / 2), Y(0) - 6, C.cyan); T(`W = ${Wx}`, X(Lx) + 4, Y(-Wx / 2) + 4, C.cyan, "left");
    sheet[0].x = x; sheet[0].y = -x; D2.draw(P2);
    // folded box (oblique view) in the other half
    const br = wide ? { l: 8, t: top + ph * 0.5, w: pw, h: ph * 0.5 } : { l: 8 + pw * 0.5, t: top, w: pw * 0.5, h: ph };
    const l = Lx - 2 * x, d = Wx - 2 * x, h = x, kx = 0.5, ky = 0.32, sc = Math.min(s * 1.6, (br.w - 90) / (l + kx * d), (br.h - 40) / (h + ky * d));
    const ox = br.l + 64 + (br.w - 90 - (l + kx * d) * sc) / 2, oy = br.t + br.h - 22, vx = kx * d * sc, vy = -ky * d * sc, L1 = l * sc, H = h * sc;
    poly(c, [[ox + vx, oy + vy], [ox + vx + L1, oy + vy], [ox + vx + L1, oy + vy - H], [ox + vx, oy + vy - H]], k.alpha(C.cyan, 0.06), k.alpha(C.cyan, 0.45), 1);
    poly(c, [[ox, oy], [ox + vx, oy + vy], [ox + vx, oy + vy - H], [ox, oy - H]], k.alpha(C.cyan, 0.1), k.alpha(C.cyan, 0.45), 1);
    poly(c, [[ox + L1, oy], [ox + L1 + vx, oy + vy], [ox + L1 + vx, oy + vy - H], [ox + L1, oy - H]], k.alpha(C.cyan, 0.2), C.cyan);
    poly(c, [[ox, oy], [ox + L1, oy], [ox + L1, oy - H], [ox, oy - H]], k.alpha(C.cyan, 0.24), C.cyan);
    c.d.line(ox, oy, ox, oy - H, C.amber, 2.5);
    T(`${mi(MR.fmtN(l, 2))}`, ox + L1 / 2, oy + 16, C.cyan); T(`${mi(MR.fmtN(d, 2))}`, ox + L1 + vx / 2 + 6, oy + vy / 2 + 14, C.cyan, "left"); T(`x = ${MR.fmtN(h, 2)}`, ox - 6, oy - H / 2 + 4, C.amber, "right");
    // V(x) graph
    P = k.plane(c, { xmin: -xm * 0.1, xmax: xm * 1.1, ymin: -Vb * 0.12, ymax: Vb * 1.28, pad, xlabel: "x", ylabel: "V" });
    P.grid(); P.axes(); P.vasym(0); P.vasym(xm);
    P.curve(V, C.pink, { from: 0, to: xm, w: 2.5 }); P.dot(xb, Vb, C.green);
    pts[0].x = x; pts[0].y = V(x); pts[0].clamp = [0.1, Math.max(0.1, xm - 0.1), -1e9, 1e9]; P.seg(x, 0, x, V(x), k.alpha(C.amber, 0.6), 1.5, [4, 4]); D.draw(P);
    lab(P, [{ text: "V(x)", ...P.onCurve(V, xm * 0.8), color: C.pink }, { text: `x = ${MR.fmtN(xm, 2)}`, x: xm, y: Vb * 1.15, color: C.violet, prefer: "w" }, { text: "max", x: xb, y: Vb, color: C.green, prefer: "n" }]);
    k.eqline(`<span class="c3"><i>V</i></span>(<span class="c1"><i>x</i></span>) = <span class="c1"><i>x</i></span>(${S.html("L")} − 2<span class="c1"><i>x</i></span>)(${S.html("W")} − 2<span class="c1"><i>x</i></span>), &nbsp; <span class="c1"><i>x</i></span> = ${S.html("x")}`, "Box");
    const xq = Q(+x.toFixed(1)), Vq = Q.mul(xq, Q.mul(Q.sub(Q(Lx), Q.mul(2, xq)), Q.sub(Q(Wx), Q.mul(2, xq)))), hit = Math.abs(x - xb) <= 0.05;
    ro({ title: "Open box from a sheet", big: `<span class="c3"><i>V</i></span> = ${MR.qT(Vq)}`, rows: [
      { lhs: "base", v: `${mi(MR.fmtN(l, 2))} × ${mi(MR.fmtN(d, 2))}`, cls: "c2", lbl: "(L − 2x) by (W − 2x)" },
      { lhs: "practical domain", v: `0 < x < ${MR.fmtN(xm, 2)}`, cls: "c4", lbl: "every side positive" },
      { lhs: "best from the graph", v: `x ≈ ${MR.fmtN(xb, 2)}, V ≈ ${MR.fmtN(Vb, 1)}`, cls: "c5" } ],
      landmark: { hit, big: hit ? `Top of the curve: V ≈ ${MR.fmtN(Vb, 2)}` : "Find the highest point of V(x)", note: `Exactly, x = ${surdT(Lx + Wx, 1, Lx * Lx - Lx * Wx + Wx * Wx, 6)}, from V′(x) = 0: a calculus step.` },
      narr: "Make the sheet square (L = W): the best cut becomes exactly L/6." });
  }

  function fence(top, pw, ph, wide, pad){
    const Fv = S.F, n = S.n, w = S.w, wm = wMax(), len = Fv - n * w, wq = Q(Fv, 2 * n), Aq = Q(Fv * Fv, 4 * n), Ab = Q.val(Aq);
    // pen picture against a wall
    const r = wide ? { l: 14, t: top + 30, w: pw - 20, h: Math.min(ph * 0.45, 200) } : { l: 14, t: top + 10, w: pw - 20, h: ph - 30 };
    const iw = r.w - 70, sc = Math.min(iw / Math.max(len, 1e-6), (r.h - 30) / Math.max(w, 1e-6), iw / (Fv / 2)), x0 = r.l + 66 + (iw - len * sc) / 2, y0 = r.t + 12;
    c.d.line(r.l, y0, r.l + r.w, y0, C.violet, 4); T("wall", r.l + r.w, y0 - 6, C.violet, "right");
    c.d.line(x0, y0 + w * sc, x0 + len * sc, y0 + w * sc, C.cyan, 2.5);
    for (let i = 0; i < n; i++) { const xx = x0 + (n > 1 ? i / (n - 1) : 0) * len * sc; c.d.line(xx, y0, xx, y0 + w * sc, C.amber, 2.5); }
    T(`w = ${MR.fmtN(w, 1)}`, x0 - 6, y0 + w * sc / 2 + 4, C.amber, "right"); T(`F − nw = ${MR.fmtN(len, 1)}`, x0 + len * sc / 2, y0 + w * sc + 16, C.cyan);
    P = k.plane(c, { xmin: -wm * 0.08, xmax: wm * 1.1, ymin: -Ab * 0.12, ymax: Ab * 1.3, pad, xlabel: "w", ylabel: "A" });
    P.grid(); P.axes(); P.vasym(0); P.vasym(wm);
    P.curve(A, C.pink, { from: 0, to: wm, w: 2.5 }); P.dot(Q.val(wq), Ab, C.green);
    pts[1].x = w; pts[1].y = A(w); pts[1].clamp = [0.5, Math.max(0.5, wm - 0.5), -1e9, 1e9]; P.seg(w, 0, w, A(w), k.alpha(C.amber, 0.6), 1.5, [4, 4]); D.draw(P);
    lab(P, [{ text: "A(w)", ...P.onCurve(A, wm * 0.85), color: C.pink }, { text: "vertex", x: Q.val(wq), y: Ab, color: C.green, prefer: "n" }]);
    k.eqline(`<span class="c3"><i>A</i></span>(<span class="c1"><i>w</i></span>) = <span class="c1"><i>w</i></span>(${S.html("F")} − ${S.html("n")}<span class="c1"><i>w</i></span>), &nbsp; <span class="c1"><i>w</i></span> = ${S.html("w")}`, "Fence");
    const wv = Q(+w.toFixed(1)), Aw = Q.mul(wv, Q.sub(Q(Fv), Q.mul(n, wv))), hit = Math.abs(w - Q.val(wq)) < 0.26;
    ro({ title: "Pen against a wall", big: `<span class="c3"><i>A</i></span> = ${MR.qT(Aw)}`, rows: [
      { lhs: "practical domain", v: `0 < w < ${MR.qT(Q(Fv, n))}`, cls: "c4", lbl: "the long side must be positive" },
      { lhs: "vertex w = F/(2n)", v: MR.qT(wq), cls: "c5" },
      { lhs: "largest area F²/(4n)", v: MR.qT(Aq), cls: "c5" } ],
      landmark: { hit, big: hit ? `At the vertex: A = ${MR.qT(Aq)}` : "A(w) is a downward parabola", note: "Its zeros are 0 and F/n, so the vertex sits halfway between them." },
      narr: "Add a fence piece (n): the best width shrinks and so does the area." });
  }

  function near(){
    const a = S.a, xm = Math.max(6, a + 3), xb = a >= 0.5 ? a - 0.5 : 0;
    P = k.plane(c, { xmin: -0.6, xmax: xm, ymin: -0.8, ymax: Math.sqrt(xm) + 1.2, equal: true, xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.vasym(0);
    const f = x => (x >= 0 ? Math.sqrt(x) : NaN);
    P.curve(f, C.text, { from: 0, to: xm, w: 2.5 }); P.curve(dist, C.pink, { from: 0, to: xm, w: 1.5, dash: [6, 5] });
    P.dot(xb, Math.sqrt(xb), C.green); P.dot(xb, dist(xb), C.green, 4);
    pts[2].x = S.p; pts[2].y = Math.sqrt(S.p); pts[3].x = a; pts[3].y = 0; pts[2].clamp = [0, xm, -1, 99]; pts[3].clamp = [0, 8, 0, 0];
    P.seg(S.p, Math.sqrt(S.p), a, 0, C.pink, 2.5); P.seg(S.p, 0, S.p, dist(S.p), k.alpha(C.amber, 0.5), 1, [3, 4]); P.dot(S.p, dist(S.p), C.pink, 4); D.draw(P);
    lab(P, [{ text: "y = √x", ...P.onCurve(f, xm * 0.85) }, { text: "d(x)", ...P.onCurve(dist, xm * 0.9), color: C.pink }, { text: "P", x: S.p, y: Math.sqrt(S.p), color: C.amber, prefer: "nw" }, { text: "T", x: a, y: 0, color: C.cyan, prefer: "s" }]);
    k.eqline(`<span class="c3"><i>d</i></span>(<span class="c1"><i>x</i></span>) = √<span class="mk-ol">(<span class="c1"><i>x</i></span> − ${S.html("a")})<sup>2</sup> + <span class="c1"><i>x</i></span></span>, &nbsp; <span class="c1"><i>x</i></span> = ${S.html("p")}`, "Closest");
    const aq = Q(a), pq = Q(+S.p.toFixed(2)), d2 = Q.add(Q.pow(Q.sub(pq, aq), 2), pq), b1 = Q.sub(Q.mul(2, aq), 1), hit = Math.abs(S.p - xb) <= 0.03;
    const quad = `x² ${Q.val(b1) >= 0 ? "−" : "+"} ${MR.qT(Q.abs(b1))}x + ${MR.qT(Q.mul(aq, aq))}`, best = a >= 0.5 ? halfRootT(4 * a - 1) : MR.qT(aq);
    ro({ title: "Closest point on y = √x", big: `<span class="c3"><i>d</i></span>² = ${MR.qT(d2)}`, rows: [
      { lhs: "d² = (x − a)² + x", v: quad.replace(/\+ 0$/, ""), cls: "c3", lbl: "a quadratic in x" },
      { lhs: "best x", v: a >= 0.5 ? `a − 1/2 = ${MR.qT(Q.sub(aq, Q(1, 2)))}` : "0 (end of the domain)", cls: "c5" },
      { lhs: "shortest distance", v: best, cls: "c5" } ],
      landmark: { hit, big: hit ? `P is the closest point: d = ${best}` : "Slide P to make PT shortest", note: "d is smallest exactly where d² is: at the vertex of the parabola." },
      narr: "Move T left of x = 1/2: the closest point jumps to the origin." });
  }
  k.loop(frame);
};

/* ================= pc-ivt-bounds ================= */
L["pc-ivt-bounds"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, F = k.F, c = k.canvas(), ro = ROmemo(k), host = k.dom(), hostT = k.dom();
  let mode = "ivt", P = null, view = {}, hintOff = false;
  const S = k.vars([
    { key: "c3", value: 1, min: -5, max: 5, step: 1, cls: "c3", label: "coefficient of x cubed" },
    { key: "c2", value: 0, min: -9, max: 9, step: 1, cls: "c3", label: "coefficient of x squared" },
    { key: "c1", value: -2, min: -9, max: 9, step: 1, cls: "c3", label: "coefficient of x" },
    { key: "c0", value: -5, min: -9, max: 9, step: 1, cls: "c3", label: "constant term" },
    { key: "cb", value: 3, min: -9, max: 9, step: 1, cls: "c4", label: "bound test number c" },
    { key: "e", value: 2, min: 1, max: 6, step: 1, cls: "c4", label: "tolerance exponent" },
  ], key => { if (key === "cb") pts[2].x = S.cb; reset(); });
  const poly3 = () => Poly([Q(S.c0), Q(S.c1), Q(S.c2), Q(S.c3)]), fN = x => ((S.c3 * x + S.c2) * x + S.c1) * x + S.c0;
  const pts = [
    { x: 1, y: 0, on: fN, snap: 0.25, color: C.amber, name: "a on the graph" },
    { x: 3, y: 0, on: fN, snap: 0.25, color: C.cyan, name: "b on the graph" },
    { x: 3, y: 0, fixY: true, snap: 1, clamp: [-9, 9, 0, 0], color: C.violet, name: "bound test number c" },
  ];
  const D = k.drag(c, () => P, pts, i => { if (i === 2) S.set("cb", pts[2].x); reset(); }, { label: "Polynomial" });
  k.modes([["ivt", "IVT"], ["desc", "Descartes & bounds"], ["bis", "Bisect"]], mode, m => { mode = m; reset(); k.showGroup(m); k.hint(hints[m]); });
  const hints = { ivt: "Drag a and b along the curve until f(a) and f(b) have opposite signs.", desc: "Step through the sign counts; drag c along the x-axis for the bound test.", bis: "Drag a and b to bracket a zero, then step: each step halves the interval." };
  const STd = k.group("desc", () => k.stepper(() => descLines().length - 1, () => {}));
  const STb = k.group("bis", () => k.stepper(() => bisect().steps.length, () => {}, { ms: 700 }));
  const SP = k.stepsPanel(host);
  function reset(){ STd.reset(); STb.reset(); }
  const sgn = v => (v > 0 ? "+" : v < 0 ? MI : "0"), cls = v => (v > 0 ? "c3" : v < 0 ? "c2" : "c5");
  const signsH = cs => cs.filter(q => q.n !== 0).map(q => `<span class="${cls(q.n)}">${sgn(q.n)}</span>`).join(" ");
  const zerosAll = () => { const p = poly3(); return Poly.deg(p) >= 1 ? Poly.realRoots(p) : []; };
  function descLines(){
    const p = poly3(), n = Poly.deg(p); if (n < 1) return [{ tag: "p(x)", eq: "Choose a nonconstant polynomial." }];
    const Dc = MR.descartes(p), pm = Poly(p.map((q, i) => (i % 2 ? Q.neg(q) : q))), rows = descRows(Dc, n), B = MR.boundTest(p, S.cb), zs = zerosAll();
    const hi = p.slice().reverse(), hm = pm.slice().reverse(), np = zs.filter(z => z.x > 1e-12).reduce((s, z) => s + z.m, 0), nn = zs.filter(z => z.x < -1e-12).reduce((s, z) => s + z.m, 0);
    const bw = B.upper ? `all ≥ 0 or all ≤ 0: no zero is greater than ${S.cb}` : B.lower ? `signs alternate: no zero is less than ${MI}${-S.cb}`.replace(MI + MI, "") : "test inconclusive for this c";
    return [
      { tag: "p(x)", eq: `<span class="m">${MR.polyH(p)}</span>`, why: "Count sign changes in the coefficients, highest power first." },
      { tag: "p(x)", eq: `${signsH(hi)} → ${Dc.pos} change${Dc.pos === 1 ? "" : "s"}`, why: `Possible positive zeros: ${Dc.posCounts.join(" or ")}` },
      { tag: "p(−x)", eq: `<span class="m">${MR.polyH(pm)}</span>: ${signsH(hm)} → ${Dc.neg} change${Dc.neg === 1 ? "" : "s"}`, why: `Possible negative zeros: ${Dc.negCounts.join(" or ")}` },
      { tag: "table", eq: rows.map(r => `(${r.join(", ")})`).join(" &nbsp; "), why: `(positive, negative, nonreal); nonreal zeros come in pairs${Dc.zeroRoot ? `; x = 0 has multiplicity ${Dc.zeroRoot}` : ""}` },
      { tag: `c = ${mi(S.cb)}`, eq: `bottom row: ${B.row.map(MR.qT).join(", ")}`, why: S.cb === 0 ? "Use c ≠ 0." : bw },
      { tag: "actual", eq: zs.length ? `real zeros ≈ ${zs.map(z => MR.fmtN(z.x, 3) + (z.m > 1 ? ` (×${z.m})` : "")).join(", ")}` : "no real zeros", why: `Found: ${np} positive, ${nn} negative (counting multiplicity)` },
    ];
  }
  let bisMemo = { key: "", r: null };
  function bisect(){ const key = [S.c3, S.c2, S.c1, S.c0, pts[0].x, pts[1].x, S.e].join(); if (key !== bisMemo.key) { const lo = Math.min(pts[0].x, pts[1].x), hi = Math.max(pts[0].x, pts[1].x); bisMemo = { key, r: MR.bisect(fN, lo, hi, { tol: 10 ** -S.e, n: 40 }) }; } return bisMemo.r; }
  const n5 = v => mi(MR.fmtN(v, Math.min(6, S.e + 2)));

  function frame(){
    c.begin(); const p = poly3();
    const stepping = (mode === "desc" && STd.k > 0) || (mode === "bis" && STb.k > 0); if (stepping !== hintOff) { hintOff = stepping; k.hint(stepping ? "" : hints[mode]); }
    const o = { side: "right", frac: 0.44, hfrac: 0.44 }, pd = k.split(c, host, { ...o, off: mode !== "desc" }), pt = k.split(c, hostT, { ...o, off: mode !== "bis" }), pad = mode === "bis" ? pt : pd;
    const xr = Math.max(4, mode === "desc" ? Math.abs(S.cb) + 1 : 4);
    let lo = Infinity, hi = -Infinity; for (let i = 0; i <= 80; i++) { const y = fN(-xr + 2 * xr * i / 80); lo = Math.min(lo, y); hi = Math.max(hi, y); }
    lo = Math.max(lo, -24); hi = Math.min(hi, 24); const m = Math.max(1, (hi - lo) * 0.12);
    k.smooth(view, { ymin: Math.min(lo - m, -2), ymax: Math.max(hi + m, 2) }, 1 / 30);
    P = k.plane(c, { xmin: -xr, xmax: xr, ymin: view.ymin, ymax: view.ymax, pad, xlabel: "x", ylabel: "y" }); P.grid(); P.axes();
    pts[0].off = pts[1].off = mode === "desc"; pts[2].off = mode !== "desc"; pts.forEach(q => (q.hidden = q.off));
    pts[0].y = fN(pts[0].x); pts[1].y = fN(pts[1].x); pts[2].x = S.cb; pts[2].y = 0;
    const a = Math.min(pts[0].x, pts[1].x), b = Math.max(pts[0].x, pts[1].x), labels = [];
    const band = (u, v, col) => { c.d.rect(P.X(u), P.Y(0) - 5, Math.max(1, P.X(v) - P.X(u)), 10, k.alpha(col, 0.35)); };
    if (mode === "desc") { if (S.cb > 0) band(S.cb, xr, C.violet); else if (S.cb < 0) band(-xr, S.cb, C.violet); P.vasym(S.cb); }
    P.curve(fN, C.pink, { w: 2.5 }); const zs = zerosAll();
    if (mode === "ivt") {
      band(a, b, C.violet); P.seg(pts[0].x, 0, pts[0].x, pts[0].y, C.amber, 1.5, [4, 4]); P.seg(pts[1].x, 0, pts[1].x, pts[1].y, C.cyan, 1.5, [4, 4]);
      const fa = Poly.eval(p, Q(pts[0].x)), fb = Poly.eval(p, Q(pts[1].x)), diff = fa.n * fb.n < 0, inside = zs.filter(z => z.x > a && z.x < b);
      if (diff) inside.forEach(z => P.dot(z.x, 0, C.green, 6));
      k.guard([]);
      ro({ title: "Intermediate Value Theorem", big: `<span class="c1"><i>f</i>(${mi(pts[0].x)}) = ${MR.qT(fa)}</span>, &nbsp; <span class="c2"><i>f</i>(${mi(pts[1].x)}) = ${MR.qT(fb)}</span>`,
        rows: [{ lhs: "signs", v: `${sgn(fa.n)} and ${sgn(fb.n)}`, cls: diff ? "c5" : "" }, { lhs: "real zeros in the interval", v: inside.length ? inside.map(z => "≈ " + MR.fmtN(z.x, 3)).join(", ") : "none", cls: "c5" }],
        landmark: { hit: diff, big: diff ? `A zero is guaranteed between ${mi(pts[0].x)} and ${mi(pts[1].x)}` : fa.n * fb.n === 0 ? "An endpoint is a zero" : "Same signs: no guarantee", note: "A polynomial is continuous, so it cannot change sign without crossing zero." },
        narr: "Find an interval of width 1 that traps the zero, then of width 1/4." });
    } else if (mode === "desc") {
      const lines = descLines(); SP.set(lines, STd.k); zs.forEach(z => STd.k >= 5 && P.dot(z.x, 0, C.green, 6));
      k.guard(STd.k >= 5 ? [] : lines.slice(STd.k + 1).map(l => l.why).filter(w => /zeros:|Found/.test(w)));
      ro({ title: "Descartes' rule of signs", big: `<span class="m"><i>p</i>(<i>x</i>) = ${MR.polyH(p)}</span>`, rows: [{ lhs: "degree", v: Poly.deg(p) }, { lhs: "step", v: `${STd.k} of ${lines.length - 1}` }],
        landmark: { hit: STd.k >= 5, big: STd.k >= 5 ? "The counts only bound the real zeros" : "Step to count sign changes", note: "Possible counts drop by 2 because nonreal zeros come in conjugate pairs." },
        narr: "Make the constant term positive: watch both sign counts change." });
      labels.push({ text: `c = ${mi(S.cb)}`, x: S.cb, y: 0, color: C.violet, prefer: "n" });
    } else {
      const r = bisect(), j = Math.min(STb.k, r.steps.length), cur = r.bad ? null : j < r.steps.length ? r.steps[j] : { a: r.a, b: r.b, m: r.root };
      if (cur) { band(cur.a, cur.b, C.violet); P.dot(cur.m, 0, C.green, 5); }
      const rows = r.bad ? [] : r.steps.slice(0, j).map((s, i) => `<tr><td>${i + 1}</td><td>[${n5(s.a)}, ${n5(s.b)}]</td><td class="c5">${n5(s.m)}</td><td class="${cls(s.fm)}">${sgn(s.fm)}</td></tr>`).slice(-8);
      const done = !r.bad && j >= r.steps.length, ans = r.bad ? "" : `zero ≈ ${n5(r.root)}`;
      hostT.innerHTML = r.bad ? `<p class="dim">f(a) and f(b) have the same sign. Drag a or b.</p>` : `<table class="b5t"><tr><th>n</th><th>[a, b]</th><th>m</th><th>f(m)</th></tr>${rows.join("")}</table><p>${done ? `<b class="c5">${ans}</b>, interval width ≤ 10<sup>${MI}${S.e}</sup>` : `step ${j} of ${r.steps.length}`}</p>`;
      k.guard(done || r.bad ? [] : [ans]);
      ro({ title: "Bisection", big: `stop when <i>b</i> − <i>a</i> ≤ 10<sup>${MI}${S.html("e")}</sup>`, rows: [{ lhs: "start", v: `[${mi(a)}, ${mi(b)}]` }, { lhs: "halvings needed", v: r.bad ? "—" : r.steps.length }],
        landmark: { hit: done, big: done ? ans : "Each step keeps the half where the sign changes", note: "After n halvings the width is (b − a)/2ⁿ." }, narr: "Tighten the tolerance by one digit: about 3 or 4 more halvings." });
    }
    D.draw(P);
    if (mode !== "desc") labels.push({ text: "a", x: pts[0].x, y: pts[0].y, color: C.amber, prefer: "nw" }, { text: "b", x: pts[1].x, y: pts[1].y, color: C.cyan, prefer: "ne" });
    P.labels(labels.map(l => Object.assign({ font: `14px ${F.math}` }, l)));
    k.eqline(`<i>p</i>(<span class="c1"><i>x</i></span>) = ${S.term("c3", { v: "<i>x</i><sup>3</sup>", first: true })}${S.term("c2", { v: "<i>x</i><sup>2</sup>" })}${S.term("c1", { v: "<i>x</i>" })}${S.term("c0")}${mode === "desc" ? `, &nbsp; <i>c</i> = ${S.html("cb")}` : mode === "bis" ? `, &nbsp; tol 10<sup>${MI}${S.html("e")}</sup>` : ""}`, "p");
  }
  k.css("b5t", ".b5t{border-collapse:collapse;font-size:14px;width:100%}.b5t td,.b5t th{padding:2px 6px;text-align:right;white-space:nowrap}.b5t th{color:var(--muted,#999);font-weight:500}");
  k.showGroup(mode); k.hint(hints.ivt); k.loop(frame);
};

/* ================= pc-limits-graph ================= */
L["pc-limits-graph"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, F = k.F, c = k.canvas(), ro = ROmemo(k), host = k.dom(), hostT = k.dom();
  let mode = "approach", kind = "hole", P = null, defined = true, anim = 0;
  const S = k.vars([
    { key: "a", value: 2, min: -4, max: 4, step: 0.5, cls: "c1", label: "a" },
    { key: "h", value: 0.1, min: 0.001, max: 1, step: 0.01, typeStep: 0.001, cls: "c1", label: "table step h" },
    { key: "J", value: 2, min: -4, max: 4, step: 0.5, cls: "c4", label: "jump size J" },
    { key: "n", value: 1, min: 1, max: 2, step: 1, cls: "c4", label: "power n" },
    { key: "m1", value: 1, min: -4, max: 4, step: 0.5, cls: "c2", label: "left slope" },
    { key: "b1", value: 1, min: -9, max: 9, step: 0.5, cls: "c2", label: "left intercept" },
    { key: "m2", value: -1, min: -4, max: 4, step: 0.5, cls: "c3", label: "right slope" },
    { key: "b2", value: 5, min: -9, max: 9, step: 0.5, cls: "c3", label: "right intercept" },
    { key: "v", value: 1, min: -9, max: 9, step: 0.5, cls: "c5", label: "f(a)" },
    { key: "z", value: 0, min: 0, max: 4, step: 0.25, cls: "c1", label: "zoom exponent" },
  ], () => ST.reset());
  let dl = 1.5, dr = 1.5;
  const fA = x => kind === "hole" ? (x * x - S.a * S.a) / (x - S.a) : kind === "jump" ? (x < S.a ? x : x + S.J) : 1 / (x - S.a) ** S.n;
  const fP = x => (x < S.a ? S.m1 * x + S.b1 : x > S.a ? S.m2 * x + S.b2 : defined ? S.v : NaN), osc = x => (x === 0 ? NaN : Math.sin(1 / x)), w = () => 10 ** -S.z;
  const pts = [
    { x: 0.5, y: 0, on: x => fA(x), keyStep: 0.05, color: C.cyan, name: "left point" },
    { x: 3.5, y: 0, on: x => fA(x), keyStep: 0.05, color: C.pink, name: "right point" },
    { x: 2, y: 0, fixY: true, snap: 0.5, clamp: [-4, 4, 0, 0], color: C.amber, name: "a on the x-axis" },
    { x: 2, y: 3, fixX: true, snap: 0.5, color: C.cyan, name: "end of the left piece" },
    { x: 2, y: 3, fixX: true, snap: 0.5, color: C.pink, name: "end of the right piece" },
    { x: 2, y: 1, fixX: true, snap: 0.5, color: C.green, name: "the point (a, f(a))" },
    { x: 0.3, y: 0, on: osc, color: C.amber, name: "trace point on sin(1/x)" },
  ];
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (i === 0) dl = Math.max(1e-4, S.a - p.x); if (i === 1) dr = Math.max(1e-4, p.x - S.a);
    if (i === 2) { S.set("a", p.x); ST.reset(); } if (i === 3) S.set("b1", p.y - S.m1 * S.a); if (i === 4) S.set("b2", p.y - S.m2 * S.a); if (i === 5) S.set("v", p.y);
    if (i >= 3 && i <= 5) ST.reset(); }, { label: "Limit" });
  k.modes([["approach", "Approach"], ["one", "One-sided"], ["osc", "Oscillate"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); });
  const hints = { approach: "Drag the two points toward a, or press Approach.", one: "Drag the piece ends and the dot at x = a; step to read the limits.", osc: "Zoom in on x = 0 and drag the point along the curve." };
  k.group("approach", () => { k.select("f", [["hole", "hole"], ["jump", "jump"], ["vert", "vertical asymptote"]], kind, v => { kind = v; }); k.button("Approach a", () => { anim = 1; }); k.button("Back", () => { anim = 0; dl = dr = 1.5; }, "btn ghost"); });
  const ST = k.group("one", () => { k.check("f(a) defined", true, v => { defined = v; ST.reset(); }); return k.stepper(() => 4, () => {}); });
  k.group("osc", () => k.button("Zoom ×10", () => { const r = S.z; S.set("z", Math.min(4, r + 1)); pts[6].x *= 10 ** -(S.z - r); }));
  k.showGroup(mode); const SP = k.stepsPanel(host);
  const lim = (s, side) => `lim<sub><i>x</i>→${mi(s)}${side}</sub> <i>f</i>(<i>x</i>)`;
  const qa = () => Q(S.a);

  function approach(){
    const a = S.a; if (anim) { dl = Math.max(1e-3, dl * 0.97); dr = Math.max(1e-3, dr * 0.97); if (dl <= 1e-3) anim = 0; }
    const yc = kind === "hole" ? 2 * a : kind === "jump" ? a + S.J / 2 : 0, ys = kind === "vert" ? 6 : 5 + Math.abs(S.J) / 2;
    P = k.plane(c, { xmin: a - 4, xmax: a + 4, ymin: yc - ys, ymax: yc + ys, pad: (k.split(c, host, { off: true }), k.split(c, hostT, { side: "left", frac: 0.4, hfrac: 0.42 })), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(fA, C.text, { w: 2.5, breaks: [a] });
    const qa1 = qa(); let Lq, Rq, val, res;
    if (kind === "hole") { P.hole(a, 2 * a, C.violet); Lq = Rq = MR.qT(Q.mul(2, qa1)); val = "undefined"; res = Lq; }
    else if (kind === "jump") { P.hole(a, a, C.violet); P.dot(a, a + S.J, C.text); Lq = MR.qT(qa1); Rq = MR.qT(Q.add(qa1, Q(S.J))); val = Rq; res = S.J ? "does not exist" : Lq; }
    else { P.vasym(a); Lq = S.n === 1 ? MI + INF : INF; Rq = INF; val = "undefined"; res = S.n === 1 ? "does not exist" : INF; }
    [[0, a - dl], [1, a + dr]].forEach(([i, x]) => { pts[i].x = x; pts[i].y = fA(x); pts[i].clamp = i ? [a + 1e-4, a + 4, -1e9, 1e9] : [a - 4, a - 1e-4, -1e9, 1e9]; P.seg(x, 0, x, pts[i].y, k.alpha(i ? C.pink : C.cyan, 0.6), 1.5, [4, 4]); });
    pts[2].x = a; P.seg(a, P.ymin, a, P.ymax, k.alpha(C.amber, 0.35), 1, [2, 5]); D.draw(P);
    P.labels([{ text: "a", x: a, y: 0, color: C.amber, prefer: "s" }]);
    const h = S.h, row = x => { const y = fA(x); return `<tr><td>${mi(MR.fmtN(x, 6))}</td><td>${isFinite(y) ? mi(MR.fmtN(y, 6)) : "undefined"}</td></tr>`; };
    hostT.innerHTML = `<table class="b5t"><tr><th class="c2">x → ${mi(a)}⁻</th><th>f(x)</th></tr>${[1, 0.1, 0.01, 0.001].map(t => row(a - h * t)).join("")}<tr><th class="c3">x → ${mi(a)}⁺</th><th>f(x)</th></tr>${[1, 0.1, 0.01, 0.001].map(t => row(a + h * t)).join("")}</table>`;
    const eq = kind === "hole" ? `<i>f</i>(<i>x</i>) = <span class="fr"><span><i>x</i><sup>2</sup> − (${S.html("a")})<sup>2</sup></span><span><i>x</i> − ${S.html("a")}</span></span>` : kind === "jump" ? `<i>f</i>(<i>x</i>) = <i>x</i> for <i>x</i> &lt; ${S.html("a")}, &nbsp; <i>x</i>${S.term("J")} for <i>x</i> ≥ <span class="c1">${mi(a)}</span>` : `<i>f</i>(<i>x</i>) = 1/(<i>x</i> − ${S.html("a")})<sup>${S.html("n")}</sup>`;
    k.eqline(`${eq}, &nbsp; <i>h</i> = ${S.html("h")}`, "f"); k.guard([]);
    const near = dl < 0.011 && dr < 0.011;
    ro({ title: "Approaching a", rows: [{ lhs: lim(a, "⁻"), v: Lq, cls: "c2" }, { lhs: lim(a, "⁺"), v: Rq, cls: "c3" }, { lhs: `<i>f</i>(${mi(a)})`, v: val }],
      landmark: { hit: near, big: `${lim(a, "")} ${/exist/.test(res) ? res : "= " + res}`, note: kind === "vert" ? "Unbounded values have no finite limit; we write ∞ to say how they fail." : "The limit ignores the value at a: only nearby values count." },
      narr: "Switch to the jump and set J = 0: the jump closes and the limit appears." });
  }

  function onesided(){
    const a = S.a, aq = qa(), Lq = Q.add(Q.mul(Q(S.m1), aq), Q(S.b1)), Rq = Q.add(Q.mul(Q(S.m2), aq), Q(S.b2)), lv = Q.val(Lq), rv = Q.val(Rq);
    const ys = [lv, rv, defined ? S.v : lv, fP(a - 4), fP(a + 4)], lo = Math.min(...ys) - 1.5, hi = Math.max(...ys) + 1.5;
    P = k.plane(c, { xmin: a - 4, xmax: a + 4, ymin: Math.min(lo, -1), ymax: Math.max(hi, 1), pad: (k.split(c, hostT, { off: true }), k.split(c, host, { side: "right", frac: 0.46, hfrac: 0.44 })), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(fP, C.cyan, { to: a - 1e-9, w: 2.5 }); P.curve(fP, C.pink, { from: a + 1e-9, w: 2.5 });
    P.hole(a, lv, C.cyan); P.hole(a, rv, C.pink); P.seg(a, P.ymin, a, P.ymax, k.alpha(C.amber, 0.35), 1, [2, 5]);
    pts[2].x = a; pts[3].x = pts[4].x = pts[5].x = a; pts[3].y = lv; pts[4].y = rv; pts[5].y = S.v; pts[5].off = pts[5].hidden = !defined; D.draw(P);
    P.labels([{ text: "a", x: a, y: 0, color: C.amber, prefer: "s" }, ...(defined ? [{ text: "f(a)", x: a, y: S.v, color: C.green, prefer: "e" }] : [])]);
    const same = Q.eq(Lq, Rq), ct = MR.continuityAt([{ p: Poly([Q(S.b1), Q(S.m1)]), lo: null, hi: a }, ...(defined ? [{ p: Poly([Q(S.v)]), lo: a, hi: a, loIn: true, hiIn: true }] : []), { p: Poly([Q(S.b2), Q(S.m2)]), lo: a, hi: null }], a);
    const kindT = { continuous: "f is continuous at a", removable: "removable discontinuity (a hole)", jump: "jump discontinuity", infinite: "infinite discontinuity" }[ct.type] || ct.type;
    const lines = [{ tag: "read", eq: `Approach <span class="c1"><i>x</i> = ${mi(a)}</span> from each side.`, why: "Use the piece on that side, not the dot at a." },
      { tag: "left", eq: `${lim(a, "⁻")} = ${MR.qT(Lq)}`, why: "the left piece's end" },
      { tag: "right", eq: `${lim(a, "⁺")} = ${MR.qT(Rq)}`, why: "the right piece's end" },
      { tag: "limit", eq: same ? `${lim(a, "")} = ${MR.qT(Lq)}` : `${lim(a, "")} does not exist`, why: same ? "the one-sided limits agree" : "the one-sided limits differ" },
      { tag: "f(a)", eq: defined ? `<i>f</i>(${mi(a)}) = ${MR.qT(Q(S.v))}` : `<i>f</i>(${mi(a)}) is undefined`, why: kindT }];
    SP.set(lines, ST.k);
    const g = t => t.replace(/<[^>]+>/g, ""); k.guard(lines.slice(ST.k + 1, 4).map(l => g(l.eq)).concat(ST.k < 4 ? [kindT] : []));
    k.eqline(`<i>f</i>(<i>x</i>) = ${S.term("m1", { v: "<i>x</i>", first: true })}${S.term("b1")} (<i>x</i> &lt; ${S.html("a")}), &nbsp; ${defined ? S.html("v") : "undefined"} (<i>x</i> = <span class="c1">${mi(a)}</span>),<br>${S.term("m2", { v: "<i>x</i>", first: true })}${S.term("b2")} (<i>x</i> &gt; <span class="c1">${mi(a)}</span>)`, "f");
    ro({ title: "One-sided limits", rows: [{ lhs: "step", v: `${ST.k} of 4` }], landmark: { hit: ST.k >= 4, big: ST.k >= 4 ? kindT : "Step to read each side", note: "The limit exists exactly when both one-sided limits exist and agree." },
      narr: "Drag the right end onto the left end: the jump becomes a hole." });
  }

  function oscillate(){
    const W = w(); P = k.plane(c, { xmin: -W, xmax: W, ymin: -1.6, ymax: 1.6, xlabel: "x", ylabel: "y", pad: (k.split(c, hostT, { off: true }), k.split(c, host, { off: true })) }); P.grid(); P.axes();
    P.clip(() => { const g = c.g, N = Math.round(P.width * 4); g.save(); g.strokeStyle = C.text; g.lineWidth = 1.2; g.beginPath(); let on = false;
      for (let i = 0; i <= N; i++) { const x = -W + 2 * W * i / N; if (Math.abs(x) < 1e-12) { on = false; continue; } const X = P.X(x), Y = P.Y(Math.sin(1 / x)); on ? g.lineTo(X, Y) : g.moveTo(X, Y); on = true; } g.stroke(); g.restore(); });
    P.seg(-W, 1, W, 1, k.alpha(C.violet, 0.7), 1, [5, 5]); P.seg(-W, -1, W, -1, k.alpha(C.violet, 0.7), 1, [5, 5]);
    const p = pts[6]; p.clamp = [-W, W, -2, 2]; p.keyStep = W / 200; if (Math.abs(p.x) > W) p.x = 0.3 * W; p.y = osc(p.x); D.draw(P);
    const K = Math.max(0, Math.ceil((1 / W - Math.PI / 2) / (2 * Math.PI))), xk = 2 / ((4 * K + 1) * Math.PI);
    k.eqline(`<i>f</i>(<span class="c1"><i>x</i></span>) = sin(1/<span class="c1"><i>x</i></span>), &nbsp; window −10<sup>${MI}${S.html("z")}</sup> &lt; <i>x</i> &lt; 10<sup>${MI}${S.html("z")}</sup>`, "f"); k.guard([]);
    ro({ title: "sin(1/x) near 0", big: `<i>f</i>(${mi(MR.fmtN(p.x, 6))}) = ${mi(MR.fmtN(p.y, 4))}`, rows: [{ lhs: "f(x) = 1 at", v: "x = 2/((4k + 1)π)", lbl: "k = 0, 1, 2, …" }, { lhs: "first one in the window", v: `k = ${K}: x ≈ ${MR.fmtN(xk, 7)}`, cls: "c1" }],
      landmark: { hit: S.z >= 2, big: "lim<sub><i>x</i>→0</sub> sin(1/<i>x</i>) does not exist", note: "Every window around 0 holds x-values with f(x) = 1 and with f(x) = −1." }, narr: "Zoom twice more: the picture never settles on one height." });
  }

  k.loop(() => { c.begin(); pts.forEach((p, i) => { p.off = p.hidden = !(mode === "approach" ? i <= 2 : mode === "one" ? i >= 2 && i <= 5 : i === 6); });
    if (mode === "approach") approach(); else if (mode === "one") onesided(); else oscillate(); });
  k.css("b5t", ".b5t{border-collapse:collapse;font-size:14px;width:100%}.b5t td,.b5t th{padding:2px 6px;text-align:right;white-space:nowrap}.b5t th{font-weight:500}");
  k.hint(hints.approach);
};
})();
