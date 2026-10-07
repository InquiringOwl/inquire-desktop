/* ============ Labs: Trigonometry, batch B10 (polar coordinates, complex polar form, De Moivre) ============ */
(function(){
const L = window.LABS;
const MI = "−", PI = Math.PI, TAU = 2 * PI;
const I = s => `<i>${s}</i>`;
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹", SUB = "₀₁₂₃₄₅₆₇₈₉", sup = n => String(n).split("").map(d => SUP[d]).join(""), sub = n => String(n).split("").map(d => SUB[d]).join("");

/* ---------- DOM-free helpers (kit additions: candidates for MathRules, with tests) ---------- */
// Exact terms of m·√s·fn(qπ), a + bi text from term lists, r cis(qπ) in exact a + bi form: MathRules (web/kits/subjects/trig.js)
const exTerms = (MR, fn, q, m, s) => MR.exTerms(fn, q, m, s);
const zText = (MR, re, im) => MR.exZStr(re, im);
const rect = (MR, q, m, s) => MR.cisExact(q, m, s);
// "r(cos θ + i sin θ)" with r text given (plain text, so it can be guarded)
const cs = (MR, rT, q) => `${rT === "1" ? "" : rT}(cos ${MR.piT(q)} + i sin ${MR.piT(q)})`;
// positive real nth root of an integer as text: "2", "√2", "³√2"
const rootT = (R, n) => window.MathRules.nthRootT(R, n);
// snap a math point to polar (r step rs within [r0, r1], θ to π/12): {r, q}
const snapPolar = (MR, p, rs, r0, r1) => ({ r: Math.max(r0, Math.min(r1, Math.round(Math.hypot(p.x, p.y) / rs) * rs)), q: MR.normQ(MR.Q(Math.round(Math.atan2(p.y, p.x) / PI * 12), 12)) });
const lbl = (F, text, x, y, color, prefer, sz = 14) => ({ text, x, y, color, prefer, font: `600 ${sz}px ${F.math}` });
// dashed ray from 0 at angle t on any plane (k.polarPlane has P.ray; k.cplane does not)
const rayTo = (P, t, color, len, w = 1.5) => P.seg(0, 0, len * Math.cos(t), len * Math.sin(t), color, w, [5, 4]);
const ring = (P, R, color, w = 1.6) => P.param(t => R * Math.cos(t), t => R * Math.sin(t), 0, TAU, color, w, [5, 5]);

/* ---------- trig-polar-coords ---------- */
L["trig-polar-coords"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), RM = 4;
  let mode = "plot", r = 2, q = Q(5, 6), cur = 0, pi = 0, ei = 0, sw = 0, Pl = null, st = null;
  const hp = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
  k.drag(c, () => Pl, hp, (i, p) => { if (mode !== "plot") return; if (i === 1) q = snapPolar(MR, p, 1, 0, 9).q;
    else { const t = MR.qRad(q); r = Math.max(-RM, Math.min(RM, Math.round((p.x * Math.cos(t) + p.y * Math.sin(t)) * 2) / 2)); } });
  const CV = [{ x: -1, y: -Math.sqrt(3), xt: "−1", yt: "−√3" }, { r: 4, q: Q(2, 3) }, { x: -3, y: 3, xt: "−3", yt: "3" }, { r: -2, q: Q(1, 4) },
    { x: 2 * Math.sqrt(3), y: -2, xt: "2√3", yt: "−2" }, { r: 3, q: Q(7, 6) }, { x: 0, y: -5, xt: "0", yt: "−5" }];
  const EQ = [
    { p: "r = 4 sin θ", rc: "x² + (y − 2)² = 4", f: t => 4 * Math.sin(t), G: (x, y) => x * x + (y - 2) ** 2 - 4, t0: 0, t1: PI, rows: ["r² = 4r sin θ", "x² + y² = 4y"], what: "circle, centre (0, 2), radius 2", note: "θ from 0 to π traces the circle once; π to 2π would trace it again with r ≤ 0." },
    { p: "r = 3 sec θ", rc: "x = 3", f: t => 3 / Math.cos(t), G: x => x - 3, t0: -1.25, t1: 1.25, rows: ["r cos θ = 3"], what: "vertical line", note: "As θ nears ±π/2, r grows without bound: the line never meets those rays." },
    { p: "r = −2 csc θ", rc: "y = −2", f: t => -2 / Math.sin(t), G: (x, y) => y + 2, t0: 0.4, t1: PI - 0.4, rows: ["r sin θ = −2"], what: "horizontal line", note: "Here θ is in (0, π) and r < 0: the ray points up, yet every point lands below the pole." },
    { p: "r = 3", rc: "x² + y² = 9", f: () => 3, G: (x, y) => x * x + y * y - 9, t0: 0, t1: TAU, rows: ["r² = 9"], what: "circle, centre the pole, radius 3", note: "A constant r ignores θ: one full turn draws the circle." }];
  const prob = () => { const p = CV[pi]; if (p.x === undefined) { const xt = MR.exStr(exTerms(MR, "cos", p.q, p.r)), yt = MR.exStr(exTerms(MR, "sin", p.q, p.r)), t = MR.qRad(p.q);
      return Object.assign({ toR: true, X: p.r * Math.cos(t), Y: p.r * Math.sin(t), ans: `(${xt}, ${yt})`, xt2: xt, yt2: yt }, p); }
    const r2 = Math.round(p.x * p.x + p.y * p.y), tq = MR.piQ(MR.toPolar(p.x, p.y).t), rT = MR.sideT(r2);
    return Object.assign({ toR: false, X: p.x, Y: p.y, r2, rT, tq, quad: MR.quadrant(tq), ref: MR.refAngle(tq), ans: `(${rT}, ${MR.piT(tq)})` }, p); };
  const count = () => prob().toR ? 3 : 4;
  const hints = { plot: "Drag the green point along its line (through the pole for r < 0) and the amber handle to turn θ.", convert: "Step through the conversion. New problem alternates the two directions.", eq: "Pick an equation: the polar curve (green) is traced over the rectangular graph (wide cyan)." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; k.guard(m === "convert" ? [prob().ans] : []); };
  k.modes([["plot", "Plot"], ["convert", "Convert"], ["eq", "Equations"]], mode, setMode);
  k.group("convert", () => { st = k.stepper(count, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % CV.length; st.reset(); k.guard([prob().ans]); }, "btn ghost"); });
  k.group("eq", () => { k.select("Equation", EQ.map((e, i) => [i, e.p]), ei, v => { ei = +v; sw = 0; }); });
  setMode(mode);

  k.loop(dt => {
    c.begin(); const labels = [], f = (s, x, y, col, pr, sz) => labels.push(lbl(F, s, x, y, col, pr, sz));
    hp.forEach(h => { h.x = 1e6; h.y = 1e6; });
    if (mode === "plot") {
      const pad = k.split(c, host, { off: true }), P = Pl = k.polarPlane(c, { rmax: RM, rstep: 1, tstep: PI / 6, pad }); P.polarGrid();
      const t = MR.qRad(q), [x, y] = P.pp(r, t), xt = MR.exStr(exTerms(MR, "cos", q, r)), yt = MR.exStr(exTerms(MR, "sin", q, r)), rT = MR.fmtN(r);
      P.ray(t, C.amber, 1.6); if (r < 0) P.ray(t + PI, k.alpha(C.violet, .7), 1.2);
      const an = P.angleArc(0, 0, 30, 0, t, C.amber); if (t > 0.2) f("θ", an.x, an.y, C.amber);
      if (Math.abs(x) > 1e-9) P.seg(0, 0, x, 0, C.cyan, 2.4, [5, 4]); if (Math.abs(y) > 1e-9) P.seg(x, 0, x, y, C.pink, 2.4, [5, 4]);
      if (r !== 0) { P.seg(0, 0, x, y, C.violet, 3.2); f(`r = ${rT}`, x / 2, y / 2, C.violet, "n"); }
      const [hx, hy] = P.pp(RM, t); hp[1].x = hx; hp[1].y = hy; hp[0].x = x; hp[0].y = y;
      P.dot(hx, hy, C.amber, 7); P.dot(x, y, C.green, 7.5); f(`(${rT}, ${MR.piT(q)})`, x, y, C.green, "ne", 15);
      P.labels(labels);
      const names = MR.polarNames(r, q, [-1, 0]).filter(n => !(n.r === r && Q.eq(n.q, q))).map(n => `(${MR.fmtN(n.r)}, ${MR.piT(n.q)})`).join(", ");
      k.readout({ title: "Plot a polar point", big: `(<span class="c4">${rT}</span>, <span class="c1">${MR.piT(q)}</span>) ↔ (<span class="c2">${xt}</span>, <span class="c3">${yt}</span>)`,
        rows: [{ lhs: `${I("x")} = ${I("r")} cos ${I("θ")}`, v: xt, cls: "c2" }, { lhs: `${I("y")} = ${I("r")} sin ${I("θ")}`, v: yt, cls: "c3" }, { lhs: `${I("θ")} in degrees`, v: MR.degT(MR.qDeg(q)), cls: "c1" },
          r !== 0 ? { lhs: "other names", lbl: names } : { lhs: "the pole", lbl: "(0, θ) for every θ" }],
        landmark: { hit: r < 0, big: r < 0 ? `${I("r")} &lt; 0: opposite ray` : `${I("r")} ≥ 0`, note: r < 0 ? `The point lies on the ray θ + π, so it is also (${MR.fmtN(-r)}, ${MR.piT(MR.normQ(Q.add(q, 1)))}).` : "Pull the green point back through the pole to make r negative." },
        narr: "Keep the point fixed and read its other names: add 2π, or flip r and add π." });
      return;
    }
    if (mode === "convert") {
      const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.46 }), p = prob(), P = Pl = k.polarPlane(c, { rmax: Math.ceil(Math.hypot(p.X, p.Y)) + 0.5, rstep: 1, tstep: PI / 6, pad }); P.polarGrid(false);
      const X = p.X, Y = p.Y, t = Math.atan2(Y, X), done = cur >= count();
      if (p.toR) { const tq = MR.qRad(p.q); P.ray(tq, C.amber, 1.4); P.angleArc(0, 0, 26, 0, tq, C.amber); P.seg(0, 0, X, Y, C.violet, 3);
        if (cur >= 1) P.seg(0, 0, X, 0, C.cyan, 2.6, [5, 4]); if (cur >= 2) P.seg(X, 0, X, Y, C.pink, 2.6, [5, 4]); }
      else { P.seg(0, 0, X, 0, C.cyan, 2.6, [5, 4]); P.seg(X, 0, X, Y, C.pink, 2.6, [5, 4]); if (cur >= 1) P.seg(0, 0, X, Y, C.violet, 3);
        const tt = (t + TAU) % TAU, ax = Math.round(tt / PI) * PI; if (cur >= 3 && p.quad) P.angleArc(0, 0, 40, Math.min(ax, tt), Math.max(ax, tt), C.amber, { dash: [3, 3], arrow: false });
        if (cur >= 4) { const an = P.angleArc(0, 0, 24, 0, tt, C.amber); f("θ", an.x, an.y, C.amber); } }
      P.dot(X, Y, done ? C.green : C.text, 7); f(done ? p.ans : p.toR ? `(${MR.fmtN(p.r)}, ${MR.piT(p.q)})` : `(${p.xt}, ${p.yt})`, X, Y, done ? C.green : C.text, "ne", 15);
      P.labels(labels);
      const xs = (p.toR ? "" : MR.fmtN(p.x * p.x)), ys = (p.toR ? "" : MR.fmtN(p.y * p.y));
      const qd = ["", "I", "II", "III", "IV"][p.quad], th = [null, `<span class="c1">${I("θ")}</span> = ${I("θ")}′`, `<span class="c1">${I("θ")}</span> = π − ${MR.piT(p.ref)}`, `<span class="c1">${I("θ")}</span> = π + ${MR.piT(p.ref)}`, `<span class="c1">${I("θ")}</span> = 2π − ${MR.piT(p.ref)}`];
      SP.set(p.toR ? [
        { tag: "given", eq: `(<span class="c4">${I("r")}</span>, <span class="c1">${I("θ")}</span>) = (${MR.fmtN(p.r)}, ${MR.piT(p.q)})`, why: p.r < 0 ? "r < 0: the point is on the opposite ray, θ + π." : "Find x and y." },
        { tag: "x", eq: `<span class="c2">${I("x")}</span> = ${MR.fmtN(p.r)} · cos ${MR.piT(p.q)} = ${p.xt2}`, why: `cos ${MR.piT(p.q)} = ${MR.trigExact("cos", p.q).text}` },
        { tag: "y", eq: `<span class="c3">${I("y")}</span> = ${MR.fmtN(p.r)} · sin ${MR.piT(p.q)} = ${p.yt2}`, why: `sin ${MR.piT(p.q)} = ${MR.trigExact("sin", p.q).text}` },
        { tag: "point", eq: `<span class="c5">${p.ans}</span>`, why: `Check: x² + y² = ${MR.fmtN(p.r * p.r)} = r².` }] : [
        { tag: "given", eq: `(<span class="c2">${I("x")}</span>, <span class="c3">${I("y")}</span>) = (${p.xt}, ${p.yt})`, why: "Find r > 0 and θ in [0, 2π)." },
        { tag: "r", eq: `<span class="c4">${I("r")}</span> = √(${xs} + ${ys}) = √${p.r2} = ${p.rT}`, why: "r² = x² + y²" },
        { tag: "quadrant", eq: p.quad ? `Q${qd}` : "on the y-axis", why: p.quad ? `x ${p.x < 0 ? "&lt;" : "&gt;"} 0 and y ${p.y < 0 ? "&lt;" : "&gt;"} 0` : "x = 0, so tan θ is undefined." },
        { tag: "reference", eq: p.quad ? `${I("θ")}′ = tan⁻¹|${p.yt}/${p.xt}| = ${MR.piT(p.ref)}` : "quadrantal angle", why: p.quad ? "tan⁻¹ of the absolute ratio gives the reference angle." : "y < 0 on the y-axis points straight down." },
        { tag: "θ", eq: `${p.quad ? th[p.quad] + " = " : `<span class="c1">${I("θ")}</span> = `}${MR.piT(p.tq)} &nbsp; <span class="c5">${p.ans}</span>`, why: p.quad > 1 ? "tan⁻¹(y/x) alone would point into the wrong quadrant." : "" }], cur);
      k.readout({ title: p.toR ? "Polar to rectangular" : "Rectangular to polar", big: p.toR ? `(${MR.fmtN(p.r)}, ${MR.piT(p.q)}) ↔ (${I("x")}, ${I("y")})?` : `(${p.xt}, ${p.yt}) ↔ (${I("r")}, ${I("θ")})?`,
        landmark: { hit: done, big: done ? "converted" : `step ${cur} of ${count()}`, note: done ? "Convert back in your head to check: the point must not move." : p.toR ? "x = r cos θ, y = r sin θ." : "Find the quadrant before the angle." },
        narr: `Problem ${pi + 1} of ${CV.length}. Predict each line before you step.` });
      return;
    }
    const e = EQ[ei]; sw += dt / 3.4; if (sw > 1.45) sw = 0; const u = Math.min(1, sw), tc = e.t0 + (e.t1 - e.t0) * u, rc = e.f(tc);
    const pad = k.split(c, host, { off: true }), P = Pl = k.polarPlane(c, { rmax: 4.5, rstep: 1, tstep: PI / 6, pad }); P.polarGrid();
    P.implicit(e.G, k.alpha(C.cyan, .4), 8); P.polarCurve(e.f, e.t0, Math.max(e.t0 + 1e-3, tc), C.green, { w: 2.6 }); P.ray(tc, C.amber, 1.4);
    const [x, y] = P.pp(rc, tc); P.seg(0, 0, x, y, C.violet, 2.6); P.dot(x, y, C.green, 6.5);
    f(e.rc, ...(ei === 1 ? [3, -3] : ei === 2 ? [3, -2] : ei === 3 ? [-2.12, -2.12] : [1.41, 3.41]), C.cyan, "e");
    P.labels(labels);
    k.readout({ title: "Same graph, two equations", big: `<span class="c5">${e.p}</span>`,
      rows: e.rows.map(s => ({ lhs: s, lbl: "" })).concat([{ lhs: `⇔ <span class="c2">${e.rc}</span>`, lbl: "" }]).concat([{ lhs: `${I("θ")} ≈ ${MR.fmtN(tc, 2)}`, v: `${I("r")} ≈ ${MR.fmtN(rc, 2)}`, cls: "c4", lbl: e.what }]),
      landmark: { hit: u >= 1, big: u >= 1 ? "traced" : "tracing…", note: e.note },
      narr: "Watch the violet segment: when r is negative it points away from the amber ray." });
  });
};

/* ---------- trig-complex-polar ---------- */
L["trig-complex-polar"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "polar", cur = 0, pi = 0, Pl = null, st = null;
  const z = { r: 2, q: Q(5, 6) }, w = { r: 1.5, q: Q(1, 3) }, hp = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
  k.drag(c, () => Pl, hp, (i, p) => { if (mode === "div") return; Object.assign(i ? w : z, snapPolar(MR, p, 0.5, 0.5, mode === "polar" ? 3 : 2)); });
  const DV = [{ z: [6, Q(5, 6)], w: [2, Q(1, 3)] }, { z: [4, Q(1, 4)], w: [2, Q(3, 4)] }, { z: [8, Q(4, 3)], w: [4, Q(1, 6)] }];
  const div = () => { const d = DV[pi], rq = d.z[0] / d.w[0], raw = Q.sub(d.z[1], d.w[1]), nq = MR.normQ(raw), cT = cs(MR, MR.fmtN(rq), nq);
    return { d, rq, raw, nq, cT, re: rect(MR, nq, rq) }; };
  const pt = (o) => [o.r * Math.cos(MR.qRad(o.q)), o.r * Math.sin(MR.qRad(o.q))];
  const hints = { polar: "Drag z. It snaps to moduli in steps of 0.5 and arguments in steps of π/12, so the values stay exact.", mul: "Drag z (amber) and w (cyan). The product (green) turns by arg w and stretches by |w|.", div: "Step through the quotient: modulus first, then the argument." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; z.r = Math.min(z.r, m === "polar" ? 3 : 2); k.guard(m === "div" ? [div().cT, div().re] : []); };
  k.modes([["polar", "Polar form"], ["mul", "Multiply"], ["div", "Divide"]], mode, setMode);
  k.group("div", () => { st = k.stepper(() => 3, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % DV.length; st.reset(); k.guard([div().cT, div().re]); }, "btn ghost"); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const labels = [], f = (s, x, y, col, pr, sz) => labels.push(lbl(F, s, x, y, col, pr, sz));
    hp.forEach(h => { h.x = 1e6; h.y = 1e6; });
    if (mode === "polar") {
      const pad = k.split(c, host, { off: true }), P = Pl = k.cplane(c, { xmin: -3.5, xmax: 3.5, ymin: -3.5, ymax: 3.5, pad }); P.grid(); P.axes();
      const [a, b] = pt(z), t = MR.qRad(z.q), rT = MR.fmtN(z.r), re = rect(MR, z.q, z.r), left = Math.cos(t) < -1e-9;
      if (Math.abs(a) > 1e-9) P.seg(a, 0, a, b, C.muted, 1.4, [4, 4]); if (Math.abs(b) > 1e-9) P.seg(0, b, a, b, C.muted, 1.4, [4, 4]);
      const an = P.angleArc(0, 0, 30, 0, t, C.pink); if (t > 0.2) f("θ", an.x, an.y, C.pink);
      P.vec(0, 0, a, b, C.amber, { w: 3 }); P.dot(a, b, C.amber, 7); hp[0].x = a; hp[0].y = b;
      f(`|z| = ${rT}`, a / 2, b / 2, C.violet, "n"); f(`z = ${re}`, a, b, C.amber, "ne", 15);
      P.labels(labels);
      k.readout({ title: "Modulus and argument", big: `<span class="c1">${I("z")}</span> = <span class="c4">${rT}</span> cis <span class="c3">${MR.piT(z.q)}</span>`,
        rows: [{ lhs: "polar form", v: cs(MR, rT, z.q), cls: "c1" }, { lhs: `|${I("z")}| = √(${I("a")}² + ${I("b")}²)`, v: rT, cls: "c4" }, { lhs: `arg ${I("z")}`, v: `${MR.piT(z.q)} = ${MR.degT(MR.qDeg(z.q))}`, cls: "c3" }, { lhs: `${I("a")} + ${I("b")}${I("i")}`, v: re, cls: "c1" }],
        landmark: { hit: left, big: left ? `tan⁻¹(${I("b")}/${I("a")}) + π` : `tan⁻¹(${I("b")}/${I("a")})${MR.quadrant(z.q) === 0 ? " not needed" : ""}`, note: left ? `a &lt; 0: tan⁻¹(b/a) = ${MR.piT(Q.sub(z.q, 1))} points the opposite way, so add π.` : "Drag z into the left half-plane, where tan⁻¹(b/a) alone gives the wrong angle." },
        narr: "The argument is kept in [0, 2π); points below the real axis get angles past π." });
      return;
    }
    if (mode === "mul") {
      const pad = k.split(c, host, { off: true }), P = Pl = k.cplane(c, { xmin: -4.6, xmax: 4.6, ymin: -4.6, ymax: 4.6, pad }); P.grid(); P.axes();
      const p = { r: z.r * w.r, q: Q.add(z.q, w.q) }, n = { r: p.r, q: MR.normQ(p.q) }, [a, b] = pt(z), [c1, d1] = pt(w), [e, g] = pt(p), tz = MR.qRad(z.q), tw = MR.qRad(w.q);
      ring(P, 1, k.alpha(C.violet, .6), 1.3);
      P.angleArc(0, 0, 22, 0, tz, C.amber, { arrow: false }); P.angleArc(0, 0, 22, tz, tz + tw, C.cyan); const an = P.angleArc(0, 0, 38, 0, tz + tw, C.green);
      P.vec(0, 0, a, b, C.amber, { w: 3 }); P.vec(0, 0, c1, d1, C.cyan, { w: 3 }); P.vec(0, 0, e, g, C.green, { w: 3.4 });
      P.dot(a, b, C.amber, 7); P.dot(c1, d1, C.cyan, 7); hp[0].x = a; hp[0].y = b; hp[1].x = c1; hp[1].y = d1;
      f("z", a, b, C.amber, "ne", 16); f("w", c1, d1, C.cyan, "ne", 16); f("zw", e, g, C.green, "ne", 16); if (tz + tw > 0.3) f("θ₁ + θ₂", an.x, an.y, C.green, "ne", 13);
      P.labels(labels);
      const wrap = !Q.eq(p.q, n.q), re = rect(MR, n.q, n.r);
      k.readout({ title: "Multiply: stretch and turn", big: `<span class="c5">${I("zw")} = ${MR.fmtN(n.r)} cis ${MR.piT(n.q)}</span>`,
        rows: [{ lhs: `|${I("z")}| · |${I("w")}|`, v: `${MR.fmtN(z.r)} · ${MR.fmtN(w.r)} = ${MR.fmtN(p.r)}`, cls: "c4" }, { lhs: `arg ${I("z")} + arg ${I("w")}`, v: `${MR.piT(z.q)} + ${MR.piT(w.q)} = ${MR.piT(p.q)}${wrap ? ` → ${MR.piT(n.q)}` : ""}`, cls: "c3", lbl: wrap ? "subtract 2π" : "" }, { lhs: I("zw"), v: re, cls: "c5" }],
        landmark: { hit: w.r === 1, big: w.r === 1 ? `|${I("w")}| = 1: a pure rotation` : `|${I("w")}| = ${MR.fmtN(w.r)}`, note: w.r === 1 ? `zw is z turned by ${MR.piT(w.q)}, with the same length.` : "Drag w onto the dashed unit circle: then the product turns z without stretching it." },
        narr: "Put w at i (length 1, angle π/2): every z turns a quarter turn." });
      return;
    }
    const D = div(), d = D.d, zz = { r: d.z[0], q: d.z[1] }, ww = { r: d.w[0], q: d.w[1] }, ext = Math.max(zz.r, ww.r) * 1.18;
    const pad = k.split(c, host, { side: "left", frac: 0.46, hfrac: 0.46 }), P = Pl = k.cplane(c, { xmin: -ext, xmax: ext, ymin: -ext, ymax: ext, pad }); P.grid(); P.axes();
    const [a, b] = pt(zz), [c1, d1] = pt(ww), tn = MR.qRad(D.nq);
    P.vec(0, 0, a, b, C.amber, { w: 3 }); P.vec(0, 0, c1, d1, C.cyan, { w: 3 }); f("z", a, b, C.amber, "ne", 16); f("w", c1, d1, C.cyan, "ne", 16);
    if (cur >= 1) ring(P, D.rq, C.violet); if (cur >= 2) { rayTo(P, tn, C.pink, ext * 1.5, 1.6); P.angleArc(0, 0, 30, 0, tn, C.pink); }
    if (cur >= 3) { const [e, g] = [D.rq * Math.cos(tn), D.rq * Math.sin(tn)]; P.vec(0, 0, e, g, C.green, { w: 3.4 }); f("z/w", e, g, C.green, "ne", 16); }
    P.labels(labels);
    const zt = cs(MR, MR.fmtN(zz.r), zz.q), wt = cs(MR, MR.fmtN(ww.r), ww.q), neg = Q.lt(D.raw, 0);
    SP.set([{ tag: "given", eq: `<span class="c1">z = ${zt}</span><br><span class="c2">w = ${wt}</span>`, why: "Divide the moduli; subtract the arguments, first minus second." },
      { tag: "modulus", eq: `<span class="c4">|z/w| = ${MR.fmtN(zz.r)}/${MR.fmtN(ww.r)} = ${MR.fmtN(D.rq)}</span>`, why: "|z| ÷ |w|" },
      { tag: "argument", eq: `<span class="c3">${MR.piT(zz.q)} − ${MR.piT(ww.q)} = ${MR.piT(D.raw)}${neg ? ` + 2π = ${MR.piT(D.nq)}` : ""}</span>`, why: neg ? "Negative, so add 2π to land in [0, 2π)." : "Already in [0, 2π)." },
      { tag: "z/w", eq: `<span class="c5">${D.cT}</span> = <span class="c5">${D.re}</span>`, why: `Check: multiply by w. ${MR.fmtN(D.rq)} · ${MR.fmtN(ww.r)} = ${MR.fmtN(zz.r)} and ${MR.piT(D.nq)} + ${MR.piT(ww.q)} gives arg z.` }], cur);
    k.readout({ title: "Divide: shrink and turn back", big: `${I("z")}/${I("w")} · problem ${pi + 1} of ${DV.length}`,
      landmark: { hit: cur >= 3, big: cur >= 3 ? "done" : `step ${cur} of 3`, note: cur >= 3 ? "Dividing by w undoes multiplying by w: divide by |w|, turn back by arg w." : "The violet circle shows the modulus; the pink ray the argument." },
      narr: "Before stepping, guess where z/w lands: turn z back by arg w." });
  });
};

/* ---------- trig-de-moivre ---------- */
L["trig-de-moivre"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host);
  let mode = "pow", n = 5, zi = 0, ci = 1, nr = 4, nu = 6, cur = 0, pi = 0, tm = 0, st = null;
  const ZP = [{ t: "1 + i", R2: Q(2), q: Q(1, 4) }, { t: "−1 + √3i", R2: Q(4), q: Q(2, 3) }, { t: "(√3 + i)/2", R2: Q(1), q: Q(1, 6) }, { t: "(1 + i)/2", R2: Q(1, 2), q: Q(1, 4) }];
  const CS = [{ t: "16", R: 16, q: Q(0) }, { t: "−16", R: 16, q: Q(1) }, { t: "8i", R: 8, q: Q(1, 2) }, { t: "1 + √3i", R: 2, q: Q(1, 3) }, { t: "−1", R: 1, q: Q(1) }];
  const TP = [{ t: "z³ = −8", ct: "−8", R: 8, q: Q(1), n: 3 }, { t: "z⁶ = −64", ct: "−64", R: 64, q: Q(1), n: 6 }, { t: "z⁵ = 32i", ct: "32i", R: 32, q: Q(1, 2), n: 5 }];
  const roots = (R, q, m) => Array.from({ length: m }, (_, j) => MR.normQ(Q.div(Q.add(q, 2 * j), m)));
  const turnRoots = () => { const p = TP[pi], m = Math.round(Math.pow(p.R, 1 / p.n)); return roots(p.R, p.q, p.n).map((a, j) => `w${sub(j)} = ${cs(MR, String(m), a)}`); };
  const hints = { pow: "Choose z and slide n: each power turns by θ and scales by r.", roots: "Choose c and n. The highlighted root walks k = 0, 1, …, n; k = n lands on w₀ again.", turn: "Solve zⁿ = c one step at a time. New problem for another.", unity: "Slide n: the roots of unity, laid head to tail, close up at 0." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; tm = 0; k.guard(m === "turn" ? turnRoots() : []); };
  k.modes([["pow", "Powers"], ["roots", "Roots"], ["turn", "Your turn"], ["unity", "Unity"]], mode, setMode);
  k.group("pow", () => { k.select("z", ZP.map((p, i) => [i, p.t]), zi, v => zi = +v); k.slider(I("n"), 1, 8, 1, n, v => n = v); });
  k.group("roots", () => { k.select("c", CS.map((p, i) => [i, p.t]), ci, v => { ci = +v; tm = 0; }); k.slider(I("n"), 2, 8, 1, nr, v => { nr = v; tm = 0; }); });
  k.group("turn", () => { st = k.stepper(() => TP[pi].n + 2, v => cur = v, { ms: 1100 }); k.button("New problem", () => { pi = (pi + 1) % TP.length; st.reset(); k.guard(turnRoots()); }, "btn ghost"); });
  k.group("unity", () => { k.slider(I("n"), 2, 12, 1, nu, v => { nu = v; tm = 0; }); k.button("Replay", () => tm = 0, "btn ghost"); });
  setMode(mode);
  const plane = (ext, pad) => { const P = k.cplane(c, Object.assign({ xmin: -ext, xmax: ext, ymin: -ext, ymax: ext, pad })); P.grid(); P.axes(); return P; };

  k.loop(dt => {
    c.begin(); tm += dt; const labels = [], f = (s, x, y, col, pr, sz) => labels.push(lbl(F, s, x, y, col, pr, sz));
    if (mode === "pow") {
      const z = ZP[zi], r = Math.sqrt(Q.val(z.R2)), t = MR.qRad(z.q), S = MR.sqrtQ(z.R2), half = Math.floor(n / 2);
      const m = Q.mul(Q.pow(S.s, n), Q.pow(Q(S.t), half)), sq = n % 2 ? S.t : 1, rnT = MR.exStr([[m, sq]]), rT = MR.exStr([[S.s, S.t]]), nq = Q.mul(z.q, n), nn = MR.normQ(nq);
      const ext = Math.max(1.25, ...Array.from({ length: n + 1 }, (_, j) => Math.pow(r, j))) * 1.15;
      const P = plane(ext, k.split(c, host, { off: true }));
      ring(P, Math.pow(r, n), k.alpha(C.violet, .8)); P.param(s => Math.pow(r, s) * Math.cos(s * t), s => Math.pow(r, s) * Math.sin(s * t), 0, n, k.alpha(C.green, .45), 1.6);
      for (let j = 2; j < n; j++) P.dot(Math.pow(r, j) * Math.cos(j * t), Math.pow(r, j) * Math.sin(j * t), k.alpha(C.green, .8), 4.5);
      const ex = Math.pow(r, n) * Math.cos(n * t), ey = Math.pow(r, n) * Math.sin(n * t);
      P.vec(0, 0, r * Math.cos(t), r * Math.sin(t), C.amber, { w: 3 }); if (n > 1) { P.vec(0, 0, ex, ey, C.green, { w: 3.2 }); f(`z${sup(n)}`, ex, ey, C.green, "ne", 16); }
      f("z", r * Math.cos(t), r * Math.sin(t), C.amber, "ne", 16); P.labels(labels);
      const re = rect(MR, nn, m, sq);
      k.readout({ title: "Powers by De Moivre", big: `<span class="c5">${I("z")}${sup(n)} = ${rnT} cis ${MR.piT(nn)}</span>`,
        rows: [{ lhs: `${I("z")} = ${z.t}`, v: cs(MR, rT, z.q), cls: "c1" }, { lhs: `${I("r")}${sup(n)}`, v: `(${rT})${sup(n)} = ${rnT}`, cls: "c4" },
          { lhs: `${I("n")}${I("θ")}`, v: `${n} · ${MR.piT(z.q)} = ${MR.piT(nq)}${Q.eq(nq, nn) ? "" : ` → ${MR.piT(nn)}`}`, cls: "c1" }, { lhs: `${I("z")}${sup(n)}`, v: re, cls: "c5" }],
        landmark: { hit: nn.n === 0, big: nn.n === 0 ? `${I("z")}${sup(n)} = ${re}, a positive real` : `${I("n")}${I("θ")} = ${MR.piT(nn)}`, note: nn.n === 0 ? "nθ is a whole number of turns." : "Find the n that brings the power back to the positive real axis." },
        narr: "Try (1 + i)/2: with r &lt; 1 the spiral winds inward." });
      return;
    }
    if (mode === "roots" || mode === "turn") {
      const turn = mode === "turn", p = turn ? TP[pi] : CS[ci], m = turn ? p.n : nr, rm = Math.pow(p.R, 1 / m), A = roots(p.R, p.q, m), mT = rootT(p.R, m);
      const P = plane(rm * 1.55, turn ? k.split(c, host, { side: "left", frac: 0.46, hfrac: 0.5 }) : k.split(c, host, { off: true }));
      const tc = MR.qRad(p.q); rayTo(P, tc, C.amber, rm * 2.4); f(`c = ${turn ? p.ct : p.t}`, 1.2 * rm * Math.cos(tc), 1.2 * rm * Math.sin(tc), C.amber, "ne");
      const shown = turn ? Math.max(0, cur - 2) : m, kk = Math.floor(tm / 1.1) % (m + 1);
      if (!turn || cur >= 1) ring(P, rm, C.violet);
      const xy = a => [rm * Math.cos(MR.qRad(a)), rm * Math.sin(MR.qRad(a))];
      for (let j = 0; j < shown; j++) { const [x, y] = xy(A[j]); if (shown === m && m > 2) { const [x2, y2] = xy(A[(j + 1) % m]); P.seg(x, y, x2, y2, k.alpha(C.pink, .45), 1.6); } }
      for (let j = 0; j < shown; j++) { const [x, y] = xy(A[j]); P.dot(x, y, C.pink, 6.5); f(`w${sub(j)}`, x, y, C.pink, "ne", 14); }
      if (!turn) { const j = kk % m, [x, y] = xy(A[j]), arc = P.angleArc(0, 0, 26, 0, (MR.qRad(p.q) + TAU * kk) / m, C.pink); c.d.circle(P.X(x), P.Y(y), 12, null, C.green, 2.2); }
      P.labels(labels);
      if (turn) {
        const tq = MR.piT(p.q), rows = [{ tag: "polar form", eq: `${p.ct} = ${cs(MR, String(p.R), p.q)}`, why: "Write c as r(cos θ + i sin θ)." },
          { tag: "modulus", eq: `<span class="c4">|w| = ${sup(m)}√${p.R} = ${mT}</span>`, why: "Every root has this modulus." },
          { tag: "arguments", eq: `φₖ = (${tq} + 2πk)/${m}, k = 0, …, ${m - 1}`, why: `Spacing 2π/${m} = ${MR.piT(Q(2, m))}.` }]
          .concat(A.map((a, j) => { const re = rect(MR, a, Number(mT)); return { tag: `k = ${j}`, eq: `<span class="c3">w${sub(j)} = ${cs(MR, mT, a)}</span>${re ? ` = ${re}` : ""}`, why: j === m - 1 ? "k = n would give w₀ again." : "" }; }));
        SP.set(rows, cur);
        const done = cur >= m + 2;
        k.readout({ title: "Your turn: solve", big: p.t, landmark: { hit: done, big: done ? `${m} roots, ${MR.piT(Q(2, m))} apart` : `step ${cur} of ${m + 2}`, note: done ? `They are the corners of a regular ${m}-gon on the circle of radius ${mT}.` : "Find the modulus, then the first argument, then keep adding 2π/n." },
          narr: `Problem ${pi + 1} of ${TP.length}. Check one root: raise it to the power ${m}.` });
        return;
      }
      const kT = MR.piT(Q.div(Q.add(p.q, 2 * kk), m));
      k.readout({ title: "The nth roots of c", big: `<span class="c3">${I("w")}<sub>${I("k")}</sub> = ${mT}(cos φₖ + ${I("i")} sin φₖ)</span>`,
        rows: [{ lhs: `${I("c")} = ${p.t}`, v: cs(MR, String(p.R), p.q), cls: "c1" }, { lhs: `|${I("w")}| = ${sup(m)}√${p.R}`, v: mT, cls: "c4" }, { lhs: `φₖ = (${MR.piT(p.q)} + 2π${I("k")})/${m}`, v: A.map(a => MR.piT(a)).join(", "), cls: "c3" }],
        landmark: { hit: kk === m, big: kk === m ? `${I("k")} = ${m} → ${I("w")}₀ again` : `${I("k")} = ${kk}: φ = ${kT}`, note: kk === m ? `(θ + 2π·${m})/${m} = θ/${m} + 2π, the same direction as k = 0.` : `Each step of k turns 2π/${m} = ${MR.piT(Q(2, m))}.` },
        narr: "Raise n and watch the polygon gain corners while its circle shrinks toward radius 1." });
      return;
    }
    const w = Q(2, nu), om = MR.qRad(w), pts = [[0, 0]]; for (let j = 0; j < nu; j++) { const [x, y] = pts[j]; pts.push([x + Math.cos(om * j), y + Math.sin(om * j)]); }
    const P = k.cplane(c, Object.assign(k.fit(pts.concat([[-1.1, -1.1], [1.1, 1.1]]), 0.08), { equal: true, pad: k.split(c, host, { off: true }) })); P.grid(); P.axes();
    ring(P, 1, C.violet); const mm = Math.min(nu, Math.floor(tm * 2.4));
    for (let j = 0; j < nu; j++) P.dot(Math.cos(om * j), Math.sin(om * j), C.pink, 5.5);
    for (let j = 0; j < mm; j++) P.vec(pts[j][0], pts[j][1], pts[j + 1][0], pts[j + 1][1], j ? C.pink : C.amber, { w: 2.6 });
    P.dot(pts[mm][0], pts[mm][1], C.green, 6.5); f("1", 1, 0, C.pink, "se"); f("ω", Math.cos(om), Math.sin(om), C.pink, "ne"); P.labels(labels);
    const sx = pts[mm][0], sy = pts[mm][1], re = rect(MR, w, 1);
    k.readout({ title: "Roots of unity add to zero", big: `1 + ω + … + ω${sup(nu - 1)} = <span class="c5">0</span>`,
      rows: [{ lhs: `ω = cos ${MR.piT(w)} + ${I("i")} sin ${MR.piT(w)}`, v: re || `≈ ${MR.fmtN(Math.cos(om))} + ${MR.fmtN(Math.sin(om))}i`, cls: "c3" },
        { lhs: `sum of the first ${mm}`, v: `≈ ${MR.fmtN(sx, 2)} + ${MR.fmtN(sy, 2)}i`.replace("+ −", "− "), cls: "c5" }],
      landmark: { hit: mm === nu, big: mm === nu ? "the chain closes at 0" : `${mm} of ${nu} arrows`, note: mm === nu ? "The n arrows, each turned 2π/n from the last, form a closed regular polygon." : "Each arrow is the next root, laid head to tail." },
      narr: "Every n ≥ 2 closes. Only n = 1 fails: the single root 1 does not sum to 0." });
  });
};
})();
