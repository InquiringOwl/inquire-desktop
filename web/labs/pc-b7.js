/* ============ Labs: Precalculus, batch B7 (focus–directrix and eccentricity, polar conics, rotation of axes) ============ */
(function(){
const L = window.LABS, MI = "−", TAU = 2 * Math.PI, R2D = 180 / Math.PI;
const I = s => `<i>${s}</i>`, sp = (c, s) => `<span class="${c}">${s}</span>`, fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const nf = (v, d = 2) => String(+v.toFixed(d)).replace("-", MI), deg = v => nf(v * R2D, 1) + "°";
const typeOf = e => (e === 0 ? "circle" : Math.abs(e - 1) < 1e-9 ? "parabola" : e < 1 ? "ellipse" : "hyperbola");
// A conic with a focus at (fx, fy): r(θ) = e·p / (1 + s·e·trig θ). Far points are NaN, so curves break at the asymptotes.
const focal = (fx, fy, e, p, s, trig = "cos", lim = 80) => { const R = t => e * p / (1 + s * e * (trig === "cos" ? Math.cos(t) : Math.sin(t))), ok = t => { const r = R(t); return Math.abs(r) < lim ? r : NaN; };
  return { R, x: t => fx + ok(t) * Math.cos(t), y: t => fy + ok(t) * Math.sin(t), near: trig === "cos" ? (s > 0 ? 0 : Math.PI) : (s > 0 ? Math.PI / 2 : 1.5 * Math.PI) }; };
// A handle that glides along a focal conic: path for k.drag; remembers the parameter in st.t
const glide = (getP, getCv, st) => (x, y) => { const P = getP(), cv = getCv(); if (!P || !cv) return null; const q = PlaneRules.nearestOnCurve(cv.x, cv.y, 0, TAU, x, y, P.width / (P.xmax - P.xmin), P.height / (P.ymax - P.ymin)); st.t = q.t; return q; };
const keepOn = (cv, st) => { if (!isFinite(cv.x(st.t))) st.t = cv.near; return [cv.x(st.t), cv.y(st.t)]; };
const rt = (k, q) => { const s = k.MR.sqrtQ(k.MR.Q(q)); return k.MR.radFrac(s.s, s.t).t; };   // √q as exact text

/* ---------- pc-eccentricity: PF = e · PD ---------- */
L["pc-eccentricity"] = k => {
  MathKit.attach(k);
  const { C, F } = k, Q = k.MR.Q, c = k.canvas(), st = { t: 0.9 }, ft = `600 14px ${F.math}`;
  let mode = "ratio", kind = "ell", shown = false, sweep = 0, P = null, cur = null;
  const S = k.vars([{ key: "e", value: 0.5, min: 0, max: 2, step: 0.05, typeStep: 0.0001, cls: "c5", label: "eccentricity e" },
    { key: "h", value: -1, min: -4, max: 4, step: 0.5, cls: "c2", label: "focus x" }, { key: "kk", value: 0, min: -3, max: 3, step: 0.5, cls: "c2", label: "focus y" },
    { key: "d", value: 2, min: -5, max: 5, step: 0.5, cls: "c4", label: "directrix x = d" },
    { key: "a2", value: 25, min: 1, max: 36, cls: "", label: "a squared (under x²)" }, { key: "b2", value: 9, min: 1, max: 36, cls: "", label: "b squared (under y²)" }], key => {
    if (S.d === S.h) S.set("d", S.h + (S.h < 4.5 ? 0.5 : -0.5));
    if (kind === "ell" && S.a2 === S.b2) S.set("b2", S.b2 > 1 ? S.b2 - 1 : 2);
    if (key === "a2" || key === "b2") { shown = false; guard(); } });
  const geo = () => { const p = Math.abs(S.d - S.h), s = S.d > S.h ? 1 : -1; return { p, s, cv: focal(S.h, S.kk, S.e, p, s) }; };
  const fromEq = () => { const ell = kind === "ell", vert = ell && S.b2 > S.a2, a2 = ell ? Math.max(S.a2, S.b2) : S.a2, c2 = ell ? Math.abs(S.a2 - S.b2) : S.a2 + S.b2;
    const a = Math.sqrt(a2), cc = Math.sqrt(c2), dd = a2 / cc, p = Math.abs(dd - cc), s = dd > cc ? 1 : -1;
    return { a2, c2, vert, dd, cc, cT: rt(k, c2), eT: rt(k, Q(c2, a2)), dT: rt(k, Q(a2 * a2, c2)), ax: vert ? "y" : "x", cv: focal(vert ? 0 : cc, vert ? cc : 0, cc / a, p, s, vert ? "sin" : "cos") }; };
  const guard = () => { if (mode !== "from" || shown) return k.guard([]); const E = fromEq(); k.guard([`c = ${E.cT}`, `e = ${E.eT}`, `${E.ax} = ±${E.dT}`]); };
  const root = x => Math.sqrt(Math.max(1, Math.min(36, Math.round(x * x))));
  const pts = [{ color: C.cyan, name: "focus F", snap: 0.5, clamp: [-4, 4, -3, 3] }, { color: C.violet, name: "directrix", snap: 0.5, fixY: true, clamp: [-5, 5, -9, 9] },
    { color: C.amber, name: "point P on the conic", path: glide(() => P, () => cur, st) },
    { color: C.amber, name: "x-intercept (a² or a)", path: x => ({ x: root(x), y: 0 }) }, { color: C.amber, name: "y-intercept (b)", path: (x, y) => ({ x: 0, y: root(y) }) }].map(p => ({ x: 0, y: 0, ...p }));
  const D = k.drag(c, () => P, pts, (i, q) => { if (i === 0) { S.change("h", q.x); S.change("kk", q.y); } else if (i === 1) S.change("d", q.x); else if (i === 3) S.change("a2", Math.round(q.x * q.x)); else if (i === 4) S.change("b2", Math.round(q.y * q.y)); }, { label: "Conic" });
  const hints = { ratio: "Drag the focus, the directrix or P along the curve; scrub e", family: "Scrub e, or press Sweep e", from: "Scrub a² and b², or drag the intercepts; work out c, e and the directrices" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); guard(); };
  k.modes([["ratio", "Ratio"], ["family", "Family"], ["from", "From equation"]], mode, setMode);
  k.group("ratio", () => {}); k.group("family", () => k.button("Sweep e", () => { S.set("e", 0); sweep = 1; }));
  k.group("from", () => { k.select("Conic", [["ell", "Ellipse"], ["hyp", "Hyperbola"]], kind, v => { kind = v; if (v === "ell" && S.a2 === S.b2) S.set("b2", S.b2 > 1 ? S.b2 - 1 : 2); shown = false; guard(); }); k.button("Show answers", () => { shown = true; guard(); }, "btn ghost"); });
  setMode(mode);
  k.loop(dt => {
    if (sweep > 1) sweep = Math.max(1, sweep - dt); else if (sweep) { const ne = Math.min(2, S.e + dt * 0.35); if (S.e < 1 && ne >= 1) { S.set("e", 1); sweep = 2.4; } else { S.set("e", +ne.toFixed(3)); if (ne >= 2) sweep = 0; } }
    c.begin(); const lb = [], from = mode === "from";
    let E = null, g = null;
    if (from) { E = fromEq(); const Rg = Math.max(Math.sqrt(S.a2), Math.sqrt(S.b2), shown ? E.dd : 0, E.cc) * 1.3; P = k.plane(c, { xmin: -Rg, xmax: Rg, ymin: -Rg * 0.75, ymax: Rg * 0.75, equal: true }); cur = E.cv; }
    else { g = geo(); P = k.plane(c, { xmin: -6.5, xmax: 6.5, ymin: -4.5, ymax: 4.5, equal: true }); cur = g.cv; }
    P.grid(); P.axes();
    pts.forEach((p, i) => (p.off = from ? (i < 2 || (i === 2 && !shown)) : (i > 2 || (i === 2 && mode === "family"))));
    pts[0].x = S.h; pts[0].y = S.kk; pts[1].x = S.d; pts[1].y = P.ymax - 0.9;
    pts[3].x = Math.sqrt(S.a2); pts[3].y = 0; pts[4].x = 0; pts[4].y = Math.sqrt(S.b2);
    if (mode === "family") [0.25, 0.5, 0.75, 1, 1.5, 2].forEach(e => { const cv = focal(S.h, S.kk, e, g.p, g.s); P.param(cv.x, cv.y, 0, TAU, k.alpha(C.green, 0.22), 1.4); });
    if (from) { const H = (x, y) => x * x / S.a2 + (kind === "ell" ? 1 : -1) * y * y / S.b2 - 1; P.implicit(H, C.green); }
    else if (S.e > 0) P.param(cur.x, cur.y, 0, TAU, C.green, 2.6);
    const [px, py] = keepOn(cur, st); pts[2].x = px; pts[2].y = py;
    if (!from) { P.vasym(S.d); P.dot(S.h, S.kk, C.cyan); lb.push({ text: "F", x: S.h, y: S.kk, color: C.cyan, font: ft }, { text: `x = ${nf(S.d)}`, x: S.d, y: P.ymin + 0.6, color: C.violet, font: `13px ${F.math}` }); }
    else if (shown) { const sg = [1, -1]; sg.forEach(s => { if (E.vert) { P.line(P.xmin, s * E.dd, P.xmax, s * E.dd, C.violet, 1.5, [6, 5]); P.dot(0, s * E.cc, C.cyan); } else { P.vasym(s * E.dd); P.dot(s * E.cc, 0, C.cyan); } }); }
    let pf = 0, pd = 1;
    if (mode === "ratio" || (from && shown)) { const fx = from ? (E.vert ? 0 : E.cc) : S.h, fy = from ? (E.vert ? E.cc : 0) : S.kk, dx = from ? E.dd : S.d;
      const foot = from && E.vert ? [px, dx] : [dx, py]; pf = Math.hypot(px - fx, py - fy); pd = Math.hypot(px - foot[0], py - foot[1]);
      P.seg(fx, fy, px, py, C.cyan, 2.2); P.seg(px, py, foot[0], foot[1], C.pink, 2.2, [5, 4]);
      lb.push({ text: "PF", x: (px + fx) / 2, y: (py + fy) / 2, color: C.cyan, font: ft }, { text: "PD", x: (px + foot[0]) / 2, y: (py + foot[1]) / 2, color: C.pink, font: ft }, { text: "P", x: px, y: py, color: C.amber, font: ft }); }
    D.draw(P); P.labels(lb);
    const ty = typeOf(S.e);
    if (mode === "ratio") {
      k.eqline(`${sp("c2", I("PF"))} = ${S.html("e")} · ${sp("c3", I("PD"))} &nbsp; ${I("F")} = (${S.html("h")}, ${S.html("kk")}), &nbsp;directrix ${I("x")} = ${S.html("d")}`, "focus–directrix");
      k.readout({ title: "Distance ratio", big: `${sp("c2", "PF")} / ${sp("c3", "PD")} = ${nf(pf)} / ${nf(pd)} = ${sp("c5", nf(pf / pd))}`,
        rows: [{ lhs: I("e"), v: S.html("e"), lbl: ty }, { lhs: I("p"), v: nf(g.p), cls: "c4", lbl: "focus to directrix" }, { lhs: "near vertex", v: S.e ? `${nf(S.e * g.p / (1 + S.e))} from ${I("F")}` : "at F", lbl: "where PF = e·PD on the axis" }],
        landmark: { hit: ty === "parabola", big: ty === "parabola" ? "e = 1: a parabola" : `0 < e < 1 ellipse · e = 1 parabola · e > 1 hyperbola`, note: "On a parabola every point is as far from the focus as from the directrix." },
        narr: "Move P all the way round: the ratio never changes. Then set e to 1, or past 1 and find the second branch." });
    } else if (mode === "family") {
      const r0 = S.e * g.p / (1 + S.e), r1 = S.e * g.p / (1 - S.e), a = (r0 + r1) / 2;
      k.eqline(`${sp("c2", I("PF"))} = ${S.html("e")} · ${sp("c3", I("PD"))}, &nbsp;${I("p")} = ${nf(g.p)}`, "one focus, one directrix");
      k.readout({ title: "One family of curves", big: `${I("e")} = ${S.html("e")} ⇒ ${sp("c5", ty)}`,
        rows: [{ lhs: "near vertex", v: nf(r0), lbl: `${I("ep")}/(1 + ${I("e")}) from ${I("F")}` }, { lhs: "far vertex", v: S.e < 1 ? nf(r1) : S.e === 1 ? "none" : `${nf(-r1)} behind the directrix`, lbl: S.e < 1 ? `${I("ep")}/(1 − ${I("e")})` : S.e === 1 ? "the curve opens forever" : "on the second branch" },
          { lhs: `${I("c")}/${I("a")}`, v: S.e > 0 && S.e !== 1 ? nf(Math.abs((a - r0) / a)) : "—", cls: "c5", lbl: "centre-to-focus over centre-to-vertex equals e" }],
        landmark: { hit: ty === "parabola", big: ty === "parabola" ? "e = 1: the ellipse has opened into a parabola" : "The type changes at e = 1", note: "Below 1 the curve closes; above 1 it splits into two branches." },
        narr: "Small e makes a nearly round ellipse hugging the focus. Push e towards 1 and the far vertex runs away." });
    } else {
      const sg = kind === "ell" ? "+" : MI, sum = kind === "ell" ? (E.vert ? `${S.b2} − ${S.a2}` : `${S.a2} − ${S.b2}`) : `${S.a2} + ${S.b2}`;
      k.eqline(`${fr(`${I("x")}<sup>2</sup>`, S.html("a2"))} ${sg} ${fr(`${I("y")}<sup>2</sup>`, S.html("b2"))} = 1`, kind === "ell" ? "ellipse" : "hyperbola");
      k.readout({ title: kind === "ell" ? "Ellipse: c² = a² − b²" : "Hyperbola: c² = a² + b²", big: shown ? `c = ${sp("c5", E.cT)}, e = ${sp("c5", E.eT)}` : `${I("c")} = ?, ${I("e")} = ?`,
        rows: [{ lhs: `${I("a")}<sup>2</sup>`, v: E.a2, lbl: E.vert ? "the larger denominator, under y²" : "under x²" }, shown ? { lhs: `${I("c")}<sup>2</sup>`, v: `${sum} = ${E.c2}` } : null,
          { lhs: "directrices", v: shown ? `${E.ax} = ±${E.dT}` : "?", cls: "c4", lbl: `${I("a")}/${I("e")} = ${I("a")}<sup>2</sup>/${I("c")}` }, shown ? { lhs: `${sp("c2", "PF")}/${sp("c3", "PD")}`, v: nf(pf / pd), cls: "c5", lbl: "for P on the curve" } : null],
        landmark: { hit: shown, big: shown ? "Drag P: PF/PD stays e" : "Find c, then e = c/a, then a/e", note: kind === "ell" ? "For an ellipse 0 < e < 1." : "For a hyperbola e > 1." },
        narr: shown ? "Change a² or b²: the answers hide again for the new problem." : "Work it out, then press Show answers." });
    }
  });
};

/* ---------- pc-polar-conics: r = ep / (1 ± e cos θ) ---------- */
L["pc-polar-conics"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), st = { t: 0.8 }, ob = { t: 2 }, ft = `600 14px ${F.math}`;
  let mode = "polar", trig = "cos", sg = -1, P = null, cur = null, Rv = 6, play = false, sel = null;
  const PRE = { earth: [0.0167, 0.983], mercury: [0.2056, 0.307], halley: [0.967, 0.586] };
  const S = k.vars([{ key: "e", value: 0.5, min: 0.05, max: 2.5, step: 0.05, typeStep: 0.0001, cls: "c5", label: "eccentricity e" }, { key: "p", value: 4, min: 0.5, max: 8, step: 0.5, typeStep: 0.01, cls: "c4", label: "distance p from focus to directrix" },
    { key: "oe", value: 0.2056, min: 0, max: 0.99, step: 0.01, typeStep: 0.0001, cls: "c5", label: "orbit eccentricity" }, { key: "q", value: 0.307, min: 0.1, max: 5, step: 0.01, typeStep: 0.001, cls: "c3", label: "perihelion distance in AU" }], () => {});
  const qOf = v => Q(+(+v).toFixed(6)), base = () => MR.polarConic(qOf(S.e), qOf(S.p), trig, sg);
  const orbit = () => { const e = S.oe, a = S.q / (1 - e); return { e, a, r: t => S.q * (1 + e) / (1 + e * Math.cos(t)), cx: S.q - a, b: a * Math.sqrt(1 - e * e) }; };
  const pts = [{ color: C.violet, name: "directrix", snap: 0.5 }, { color: C.amber, name: "point on the curve", path: glide(() => P, () => cur, st) },
    { color: C.amber, name: "the orbiting body", path: glide(() => P, () => cur, ob) }].map(p => ({ x: 0, y: 0, ...p }));
  const D = k.drag(c, () => P, pts, (i, q) => { if (i) { play = false; return; } const v = trig === "cos" ? q.x : q.y; if (Math.abs(v) < 0.5) return; sg = v > 0 ? 1 : -1; S.change("p", Math.abs(v)); if (sel) sel.set(trig + "," + sg); }, { label: "Polar conic" });
  const hints = { polar: "Drag the directrix or the point on the curve; scrub e and p", orbit: "Drag the body along its orbit, or press Play" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); k.guard([]); };
  k.modes([["polar", "Polar"], ["orbit", "Orbit"]], mode, setMode);
  k.group("polar", () => sel = k.select("Form", [["cos,1", "1 + e cos θ"], ["cos,-1", "1 − e cos θ"], ["sin,1", "1 + e sin θ"], ["sin,-1", "1 − e sin θ"]], "cos,-1", v => { const [t, s] = v.split(","); trig = t; sg = +s; }));
  k.group("orbit", () => { k.select("Body", [["mercury", "Mercury"], ["earth", "Earth"], ["halley", "Halley's comet"]], "mercury", v => { S.set("oe", PRE[v][0]); S.set("q", PRE[v][1]); ob.t = 2; });
    k.button("Play", () => { play = !play; }); });
  setMode(mode);
  const pt = v => `(${v.map(MR.qT).join(", ")})`;
  k.loop(dt => {
    c.begin(); const lb = [];
    if (mode === "polar") {
      const B = base(), ext = Math.max(S.p, ...B.vertices.map(v => Math.abs(Q.val(v[0])) + Math.abs(Q.val(v[1])))) * 1.2;
      if (D.active < 0) Rv += (Math.max(3, Math.min(14, ext)) - Rv) * Math.min(1, dt * 5);
      P = k.polarPlane(c, { rmax: Rv }); P.polarGrid(); cur = focal(0, 0, S.e, S.p, sg, trig);
      const dir = sg * S.p; if (trig === "cos") { P.vasym(dir); pts[0].x = dir; pts[0].y = Rv * 0.75; pts[0].fixY = true; pts[0].fixX = false; } else { P.line(P.xmin, dir, P.xmax, dir, C.violet, 1.5, [6, 5]); pts[0].x = Rv * 0.75; pts[0].y = dir; pts[0].fixX = true; pts[0].fixY = false; }
      P.polarCurve(t => { const r = cur.R(t); return Math.abs(r) < 80 ? r : NaN; }, 0, TAU, C.green, { w: 2.6 });
      const [x, y] = keepOn(cur, st), r = cur.R(st.t), th = ((st.t % TAU) + TAU) % TAU; pts[1].x = x; pts[1].y = y; pts[2].off = true; pts[0].off = pts[1].off = false;
      P.seg(0, 0, x, y, C.pink, 2.2); P.angleArc(0, 0, 22, 0, th, C.amber); P.dot(0, 0, C.cyan);
      B.vertices.forEach(v => P.dot(Q.val(v[0]), Q.val(v[1]), C.green, 4));
      lb.push({ text: "F", x: 0, y: 0, color: C.cyan, font: ft, prefer: "sw" }, { text: "r", x: x / 2, y: y / 2, color: C.pink, font: ft }, { text: trig === "cos" ? `x = ${MR.qT(B.directrix.x)}` : `y = ${MR.qT(B.directrix.y)}`, x: trig === "cos" ? dir : P.xmin + 1, y: trig === "cos" ? P.ymin + 0.8 : dir, color: C.violet, font: `13px ${F.math}` });
      D.draw(P); P.labels(lb);
      const eq = qOf(S.e), n = eq.n, d = eq.d, op = sg > 0 ? "+" : MI, tr = `${trig} ${I("θ")}`;
      k.eqline(`${sp("c3", I("r"))} = ${fr(`${S.html("e")} · ${S.html("p")}`, `1 ${op} ${S.html("e")} ${tr}`)} = ${fr(MR.qT(Q.mul(n, qOf(S.p))), `${d} ${op} ${n === 1 ? "" : n} ${tr}`)}`, "focus at the pole");
      const atV = B.vertices.some(v => Math.hypot(Q.val(v[0]) - x, Q.val(v[1]) - y) < 1e-6);
      k.readout({ title: "Polar conic", big: `${I("e")} = ${MR.qT(eq)} ⇒ ${sp("c5", B.type)}`,
        rows: [{ lhs: "directrix", v: trig === "cos" ? `${I("x")} = ${MR.qT(B.directrix.x)}` : `${I("y")} = ${MR.qT(B.directrix.y)}`, cls: "c4", lbl: `${I("p")} = ${MR.qT(qOf(S.p))}` },
          { lhs: B.vertices.length > 1 ? "vertices" : "vertex", v: B.vertices.map(pt).join(", ").replace(/-/g, MI), cls: "c5", lbl: trig === "cos" ? "θ = 0 and π" : "θ = π/2 and 3π/2" },
          B.center ? { lhs: "centre", v: pt(B.center).replace(/-/g, MI), lbl: `${I("a")} = ${MR.qT(B.a)}, ${I("c")} = ${MR.qT(B.c)}` } : null,
          { lhs: `${sp("c1", "θ")}, ${sp("c3", I("r"))}`, v: `${deg(th)}, ${nf(r)}`, lbl: r < 0 ? "r < 0: plotted opposite θ" : "the point you drag" }],
        landmark: { hit: atV, big: atV ? "At a vertex" : "Vertices come from θ on the axis", note: "The axis through the focus is perpendicular to the directrix." },
        narr: "Drag the directrix across the pole: the ± sign flips. Push e past 1 for a hyperbola." });
    } else {
      const O = orbit();
      if (play) { const r0 = O.r(ob.t), n = TAU / 8; ob.t = (ob.t + dt * n * O.a * O.a * Math.sqrt(1 - O.e * O.e) / (r0 * r0)) % TAU; }
      P = k.plane(c, { xmin: O.cx - O.a * 1.12, xmax: O.cx + O.a * 1.12, ymin: -O.b * 1.3 - 0.05, ymax: O.b * 1.3 + 0.05, equal: true });
      P.param(t => O.r(t) * Math.cos(t), t => O.r(t) * Math.sin(t), 0, TAU, C.green, 2.4);
      const r = O.r(ob.t), x = r * Math.cos(ob.t), y = r * Math.sin(ob.t), Qa = S.q * (1 + O.e) / (1 - O.e);
      cur = { x: t => O.r(t) * Math.cos(t), y: t => O.r(t) * Math.sin(t) }; pts[2].x = x; pts[2].y = y; pts[2].off = false; pts[0].off = pts[1].off = true;
      P.seg(0, 0, x, y, C.pink, 2); P.dot(0, 0, C.cyan, 7); P.dot(S.q, 0, C.green, 4); P.dot(-Qa, 0, C.green, 4);
      lb.push({ text: "Sun", x: 0, y: 0, color: C.cyan, font: `600 13px ${F.ui}`, prefer: "nw" }, { text: "perihelion", x: S.q, y: 0, color: C.green, font: `12px ${F.ui}`, prefer: "se" }, { text: "aphelion", x: -Qa, y: 0, color: C.green, font: `12px ${F.ui}`, prefer: "ne" });
      D.draw(P); P.labels(lb);
      k.eqline(`${sp("c3", I("r"))} = ${fr(`${S.html("q")}(1 + ${S.html("oe")})`, `1 + ${S.html("oe")} cos ${I("θ")}`)} = ${fr(nf(S.q * (1 + O.e), 4), `1 + ${nf(O.e, 4)} cos ${I("θ")}`)}`, "AU, Sun at the focus");
      const th = ((ob.t % TAU) + TAU) % TAU, peri = Math.abs(r - S.q) < 0.004 * Qa, aph = Math.abs(r - Qa) < 0.004 * Qa;
      k.readout({ title: "An orbit with the Sun at a focus", big: `${sp("c3", I("r"))} = ${nf(r, 3)} AU at ${sp("c1", I("θ") + " = " + deg(th))}`,
        rows: [{ lhs: "perihelion", v: `${S.html("q")} AU`, lbl: `θ = 0: ${I("ep")}/(1 + ${I("e")})` }, { lhs: "aphelion", v: `${nf(Qa, 3)} AU`, lbl: `θ = π: ${I("ep")}/(1 − ${I("e")})` },
          { lhs: I("a"), v: `${nf(O.a, 3)} AU`, lbl: "half of perihelion + aphelion" }, { lhs: I("e"), v: S.html("oe"), cls: "c5", lbl: "(aphelion − perihelion)/(aphelion + perihelion)" }],
        landmark: { hit: peri || aph, big: peri ? "Perihelion: closest to the Sun" : aph ? "Aphelion: farthest from the Sun" : "Closest at θ = 0, farthest at θ = π", note: "Play moves the body as Kepler's second law says: fast near the Sun, slow far away." },
        narr: "Compare Earth's nearly round orbit with Halley's comet, e ≈ 0.967." });
    }
  });
};

/* ---------- pc-rotation: Ax² + Bxy + Cy² + Dx + Ey + F = 0 ---------- */
L["pc-rotation"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), R0 = 3.3;
  let mode = "cls", turn = false, shown = false, phi = 0, P = null, ST = null, cur = 0;
  const K = ["A", "B", "C", "D", "E", "F"], VAL = [8, -12, 17, 0, 0, -20], LIM = [12, 24, 12, 20, 20, 40];
  const S = k.vars(K.map((key, i) => ({ key, value: VAL[i], min: -LIM[i], max: LIM[i], step: 1, cls: i < 3 ? "c5" : "", label: "coefficient " + key })), () => { shown = false; guard(); if (ST) ST.reset(); });
  const info = () => { const R = MR.rotateConic(S), d = Q.val(R.disc), Dl = MR.Mat.det([[S.A, Q(S.B, 2), Q(S.D, 2)], [Q(S.B, 2), S.C, Q(S.E, 2)], [Q(S.D, 2), Q(S.E, 2), S.F]]), dv = Q.val(Dl);
    let name = R.type; if (R.type === "line") name = "a line (not a conic)"; else if (dv === 0) name = d < 0 ? "a point (degenerate)" : d === 0 ? "parallel lines, one line or nothing (degenerate)" : "two crossing lines (degenerate)"; else if (d < 0 && (S.A + S.C) * dv > 0) name = "no real points";
    return { R, d, name, dT: MR.qT(R.disc) }; };
  const guard = () => { if (mode !== "cls" || !turn || shown) return k.guard([]); const N = info(); k.guard([`B² − 4AC = ${N.dT}`, `⇒ ${N.name}`]); };
  const coefAt = t => { const cs = Math.cos(t), sn = Math.sin(t); return [S.A * cs * cs + S.B * cs * sn + S.C * sn * sn, S.B * (cs * cs - sn * sn) + 2 * (S.C - S.A) * cs * sn, S.A * sn * sn - S.B * cs * sn + S.C * cs * cs, S.D * cs + S.E * sn, -S.D * sn + S.E * cs, S.F]; };
  const rs = (m, t) => (Q.val(m) === 0 ? "0" : (Q.val(m) < 0 ? MI : "") + MR.radFrac(Q.abs(m), t).t);
  const eqStr = ts => { let s = ""; ts.forEach(([t, v]) => { if (t === "0" || t === "−0") return; const neg = t[0] === MI, a = neg ? t.slice(1) : t, cf = a === "1" && v ? "" : /[/√]/.test(a) && v ? `(${a})` : a; s += (s ? (neg ? " − " : " + ") : neg ? MI : "") + cf + v; }); return (s || "0") + " = 0"; };
  const V = [`${I("x")}′²`, `${I("x")}′${I("y")}′`, `${I("y")}′²`, `${I("x")}′`, `${I("y")}′`, ""];
  const exactEq = R => { if (!R.exact && S.B !== 0) return null; let cT = Q(1), sT = Q(0), t = 1; if (S.B !== 0) { const a = MR.sqrtQ(R.exact.cos2th), b = MR.sqrtQ(R.exact.sin2th); t = Math.max(a.t, b.t); cT = a.s; sT = b.s; }
    return eqStr([[MR.qT(R.coefQ.A), V[0]], ["0", V[1]], [MR.qT(R.coefQ.C), V[2]], [rs(Q.add(Q.mul(S.D, cT), Q.mul(S.E, sT)), t), V[3]], [rs(Q.sub(Q.mul(S.E, cT), Q.mul(S.D, sT)), t), V[4]], [MR.qT(Q(S.F)), ""]]).replace(/-/g, MI); };
  const pts = [{ color: C.cyan, name: "x′ axis", path: (x, y) => { let a = Math.max(0, Math.min(Math.PI / 2, Math.atan2(y, x))); const th = MR.rotateConic(S).theta; a = Math.abs(a - th) < 0.06 ? th : Math.round(a * R2D) / R2D; return { x: R0 * Math.cos(a), y: R0 * Math.sin(a) }; } }].map(p => ({ x: R0, y: 0, ...p }));
  const D = k.drag(c, () => (mode === "rot" ? P : null), pts, (i, q) => { phi = Math.atan2(q.y, q.x); }, { label: "Rotated axes" });
  const hints = { cls: "Scrub A to F in the equation", rot: "Drag the x′ axis until the x′y′ term is 0" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); guard(); };
  k.modes([["cls", "Classify"], ["rot", "Rotate"]], mode, setMode);
  k.group("cls", () => { k.check("Your turn", turn, v => { turn = v; shown = false; guard(); }); k.button("Show", () => { shown = true; guard(); }, "btn ghost"); });
  k.group("rot", () => { ST = k.stepper(() => 5, v => { cur = v; }, { ms: 1500 }); });
  setMode(mode);
  k.loop(() => {
    c.begin(); const lb = [], N = info(), R = N.R, G = (x, y) => S.A * x * x + S.B * x * y + S.C * y * y + S.D * x + S.E * y + S.F;
    k.eqline(`${S.html("A")}${I("x")}<sup>2</sup> + ${S.html("B")}${I("xy")} + ${S.html("C")}${I("y")}<sup>2</sup> + ${S.html("D")}${I("x")} + ${S.html("E")}${I("y")} + ${S.html("F")} = 0`, "general form");
    const pad = mode === "rot" ? k.split(c, host, { side: "right", frac: 0.44, hfrac: 0.42 }) : k.split(c, host, { off: true });
    P = k.plane(c, { xmin: -4.5, xmax: 4.5, ymin: -3.6, ymax: 3.6, equal: true, pad }); P.grid(); P.axes();
    P.seg(P.xmin, 0, P.xmax, 0, k.alpha(C.violet, 0.8), 1.4); P.seg(0, P.ymin, 0, P.ymax, k.alpha(C.violet, 0.8), 1.4);
    lb.push({ text: "x", x: P.xmax - 0.3, y: 0, color: C.violet, font: `600 14px ${F.math}`, prefer: "n" }, { text: "y", x: 0, y: P.ymax - 0.3, color: C.violet, font: `600 14px ${F.math}`, prefer: "e" });
    if (mode === "rot") { const cs = Math.cos(phi), sn = Math.sin(phi), L9 = 7;
      for (let j = -5; j <= 5; j++) if (j) { P.seg(-L9 * cs - j * sn, -L9 * sn + j * cs, L9 * cs - j * sn, L9 * sn + j * cs, k.alpha(C.cyan, 0.1), 1); P.seg(j * cs + L9 * sn, j * sn - L9 * cs, j * cs - L9 * sn, j * sn + L9 * cs, k.alpha(C.pink, 0.1), 1); }
      P.seg(-L9 * cs, -L9 * sn, L9 * cs, L9 * sn, C.cyan, 2); P.seg(L9 * sn, -L9 * cs, -L9 * sn, L9 * cs, C.pink, 2); if (phi > 0.01) P.angleArc(0, 0, 34, 0, phi, C.amber);
      lb.push({ text: "x′", x: R0 * 1.18 * cs, y: R0 * 1.18 * sn, color: C.cyan, font: `600 15px ${F.math}` }, { text: "y′", x: -2.9 * sn, y: 2.9 * cs, color: C.pink, font: `600 15px ${F.math}` }, { text: "θ", x: 1.05 * Math.cos(phi / 2 || 0.2), y: 1.05 * Math.sin(phi / 2 || 0.2), color: C.amber, font: `600 14px ${F.math}` });
      pts[0].x = R0 * cs; pts[0].y = R0 * sn; }
    pts[0].off = mode !== "rot";
    P.implicit(G, C.green); D.draw(P); P.labels(lb);
    const hide = turn && !shown, rel = N.d < 0 ? "&lt;" : N.d > 0 ? "&gt;" : "=";
    if (mode === "cls") {
      k.readout({ title: "Classify by the discriminant", big: hide ? `${I("B")}² − 4${I("AC")} = ?` : `B² − 4AC = ${sp("c5", N.dT)} ${rel} 0 ⇒ ${sp("c5", N.name)}`,
        rows: [{ lhs: `${I("B")}² − 4${I("AC")}`, v: `(${S.B})² − 4(${S.A})(${S.C})`.replace(/-/g, MI) }, { lhs: "&lt; 0", v: "ellipse (circle if B = 0 and A = C)", cls: "c5" }, { lhs: "= 0", v: "parabola", cls: "c5" }, { lhs: "&gt; 0", v: "hyperbola", cls: "c5" }],
        landmark: { hit: !hide && S.B !== 0, big: S.B ? "The xy-term tilts the axes of the conic" : "B = 0: the axes are parallel to x and y", note: "D, E and F move and size the curve; they never change the type of a non-degenerate conic." },
        narr: hide ? "Decide the type, then press Show." : "Try A = 1, B = 2, C = 1: the discriminant is 0." });
      return;
    }
    const cf = coefAt(phi), hit = Math.abs(cf[1]) < 1e-9, ex = exactEq(R), th = R.theta, ct = R.cot2 ? MR.qT(R.cot2).replace(/-/g, MI) : null;
    const cosT = R.exact ? rs(MR.sqrtQ(R.exact.cos2th).s, MR.sqrtQ(R.exact.cos2th).t) : nf(Math.cos(th), 4), sinT = R.exact ? rs(MR.sqrtQ(R.exact.sin2th).s, MR.sqrtQ(R.exact.sin2th).t) : nf(Math.sin(th), 4);
    SP.set([{ tag: "type", eq: `${I("B")}² − 4${I("AC")} = ${N.dT.replace(/-/g, MI)}`, why: N.name },
      { tag: "angle", eq: S.B ? `cot 2${I("θ")} = (${I("A")} − ${I("C")})/${I("B")} = ${ct}` : `${I("B")} = 0: no rotation needed`, why: S.B ? `θ ≈ ${deg(th)}, between 0° and 90°` : "" },
      { tag: "cos θ, sin θ", eq: R.exact || !S.B ? `cos ${I("θ")} = ${S.B ? cosT : "1"}, sin ${I("θ")} = ${S.B ? sinT : "0"}` : `cos ${I("θ")} ≈ ${cosT}, sin ${I("θ")} ≈ ${sinT}`, why: R.exact ? `from cos 2θ = ${MR.qT(R.exact.cos2).replace(/-/g, MI)} and the half-angle formulas` : S.B ? "√((A − C)² + B²) is irrational: decimals" : "" },
      { tag: "substitute", eq: `${I("x")} = ${I("x")}′cos ${I("θ")} − ${I("y")}′sin ${I("θ")}, ${I("y")} = ${I("x")}′sin ${I("θ")} + ${I("y")}′cos ${I("θ")}`, why: "the x′y′ term cancels" },
      { tag: "result", eq: ex || "≈ " + eqStr(coefAt(th).map((v, i) => [nf(v), V[i]])), why: "no cross term" }], cur);
    k.readout({ title: "Turn the axes", big: hit && ex ? ex : "≈ " + eqStr(cf.map((v, i) => [nf(v), V[i]])),
      rows: [{ lhs: sp("c1", I("θ")), v: deg(phi), cls: "c1", lbl: "drag the x′ axis" }, { lhs: `${I("B")}′`, v: nf(cf[1], 3), cls: hit ? "c5" : "", lbl: `${I("B")} cos 2${I("θ")} + (${I("C")} − ${I("A")}) sin 2${I("θ")}` }, { lhs: `${I("B")}′² − 4${I("A")}′${I("C")}′`, v: nf(cf[1] * cf[1] - 4 * cf[0] * cf[2]), lbl: "never changes" }],
      landmark: { hit, big: hit ? "No x′y′ term: the axes line up with the conic" : "Turn until B′ = 0", note: "The discriminant is the same at every angle." },
      narr: "Use Step for the worked solution of these numbers." });
  });
};
})();
