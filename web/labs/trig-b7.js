/* ============ Labs: Trigonometry, batch B7 (law of sines, law of cosines, triangle area) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers (kit additions: candidates for MathRules, with tests) ---------- */
// Which law starts a triangle of the given case: AAS, ASA, SSA → "sines" (SSA: check 0, 1 or 2 triangles); SAS, SSS → "cosines".
const lawFor = kind => (kind === "SAS" || kind === "SSS") ? "cosines" : kind === "AAA" ? "none" : "sines";
// Exact √(N/D) as text with integer N, D (N/D > 0): rootText(216, 1) → "6√6", rootText(9, 4) → "3/2".
const rootText = (N, D) => window.MathRules.ratioExact(N, D).t;
// Compass direction (for label placement) of a math-coordinate offset.
const DIRS = ["e", "ne", "n", "nw", "w", "sw", "s", "se"];
const dirOf = (dx, dy) => DIRS[((Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) % 8) + 8) % 8];

const CSS = `.tb7{font-size:15px;line-height:1.4}
.tb7 .hd{color:var(--muted);font-size:13px;margin:2px 0 8px}
.tb7 .rw{margin:0 0 9px}
.tb7 .bx{position:relative;height:12px;border-radius:3px;background:rgba(255,255,255,.06);margin-top:4px}
.tb7 .bx span{position:absolute;top:0;bottom:0;border-radius:2px}
.tb7 .big{font-size:17px;margin-top:6px}
.narrow .tb7 .rw{margin-bottom:5px}
.narrow .tb7 .hd{display:none}`;
const css = () => { if (!document.getElementById("trig-b7-css")) { const s = document.createElement("style"); s.id = "trig-b7-css"; s.textContent = CSS; document.head.appendChild(s); } };

// Shared drawing: fill a polygon; labels for the sides (a = BC, b = CA, c = AB) and vertex letters of triangle pts = [A, B, C].
function kit7(k, c){
  const { C, F } = k, MR = k.MR;
  const fillPoly = (P, pts, col) => { const g = c.g; g.save(); g.fillStyle = col; g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(P.X(p[0]), P.Y(p[1])) : g.moveTo(P.X(p[0]), P.Y(p[1]))); g.closePath(); g.fill(); g.restore(); };
  const triLabels = (pts, side, names = ["A", "B", "C"]) => {
    const [A, B, Cv] = pts, g = [(A[0] + B[0] + Cv[0]) / 3, (A[1] + B[1] + Cv[1]) / 3], ends = { a: [B, Cv], b: [Cv, A], c: [A, B] }, out = [];
    for (const s of ["a", "b", "c"]) { const o = side[s]; if (!o) continue; const [p, q] = ends[s], m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      out.push({ text: o.t, x: m[0], y: m[1], color: o.c, font: `600 15px ${F.math}`, prefer: dirOf(m[0] - g[0], m[1] - g[1]) }); }
    pts.forEach((p, i) => out.push({ text: names[i], x: p[0], y: p[1], color: C.muted, font: `bold 13px ${F.sans}`, prefer: dirOf(p[0] - g[0], p[1] - g[1]) }));
    return out;
  };
  // interior-angle arc at vertex i of pts, returns a label (or null when text is empty)
  const angLabel = (P, pts, i, color, text, rpx = 26) => { const an = P.vertexArc(pts[i], pts[(i + 1) % 3], pts[(i + 2) % 3], rpx, color); return text ? { text, x: an.x, y: an.y, color, font: `600 14px ${F.math}` } : null; };
  const n1 = v => MR.fmtN(v, 1), dg = v => MR.fmtN(v, 1) + "°";
  const ap = v => Math.abs(v - Math.round(v)) < 1e-9 ? "= " + MR.fmtN(v, 0) : "≈ " + n1(v);
  return { fillPoly, triLabels, angLabel, n1, dg, ap };
}
const I = s => `<i>${s}</i>`;

/* ================= The Law of Sines (F · Triangle) ================= */
L["trig-law-sines"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), T = kit7(k, c);
  const { n1, dg, ap } = T;
  const PROB = [{ A: 40, B: 60, a: 10 }, { A: 28, C: 110, b: 15 }, { B: 35, C: 95, b: 12 }, { A: 52, B: 71, c: 9 }];
  let mode = "proof", cur = 0, Aang = 40, pi = 0, thA = 50, thB = 30, st1 = null, st2 = null;
  const D0 = 10;
  const solveCase = () => { const g = PROB[pi], S = MR.solveTriangle(g), t = S.tris[0], sides = ["a", "b", "c"].filter(s => g[s] != null), s0 = sides[0];
    const missA = ["A", "B", "C"].find(x => g[x] == null), missS = ["a", "b", "c"].filter(s => g[s] == null); return { g, kind: S.kind, t, s0, missA, missS }; };
  const guardSolve = () => { const P = solveCase(); k.guard([`${ap(P.t[P.missA])}°`].concat(P.missS.map(s => `${s} ≈ ${n1(P.t[s])}`))); };
  const hints = { proof: "Step to drop the altitude and write it two ways. Then slide A past 90°.", solve: "Step through the solution: third angle first, then each side from the known pair.", bearing: "Move the two bearings and watch the fire's position and distances." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st1) st1.reset(); if (st2) st2.reset(); cur = 0; if (m === "solve") guardSolve(); else k.guard([]); };
  k.modes([["proof", "Proof"], ["solve", "Solve"], ["bearing", "Bearing"]], mode, setMode);
  k.group("proof", () => { k.slider(`<span class="c1"><i>A</i></span>`, 20, 150, 1, Aang, v => { Aang = v; }, v => v + "°"); st1 = k.stepper(() => 4, v => cur = v, { ms: 1300 }); });
  k.group("solve", () => { st2 = k.stepper(() => 3, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % PROB.length; st2.reset(); guardSolve(); }, "btn ghost"); });
  k.group("bearing", () => { k.slider("From A: N", 10, 80, 1, thA, v => { thA = v; }, v => `${v}° E`); k.slider("From B: N", 10, 80, 1, thB, v => { thB = v; }, v => `${v}° W`); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const d = c.d, labels = [];
    if (mode === "proof") {
      const pad = k.split(c, host, { side: "left", frac: 0.42, hfrac: 0.42 });
      const b = 5, cc = 7, A = [0, 0], B = [cc, 0], Cp = [b * MR.cosD(Aang), b * MR.sinD(Aang)], Dp = [Cp[0], 0], t = MR.solveTriangle({ b, c: cc, A: Aang }).tris[0];
      const obt = Aang > 90, h = Cp[1], pts = [A, B, Cp];
      const P = k.plane(c, Object.assign(k.fit([A, B, Cp, Dp], 0.16), { equal: true, pad }));
      if (cur >= 2) T.fillPoly(P, [A, Dp, Cp], k.alpha(C.cyan, .13));
      if (cur >= 3) T.fillPoly(P, [B, Dp, Cp], k.alpha(C.pink, .13));
      if (cur >= 1 && obt) P.seg(A[0], 0, Dp[0], 0, C.faint, 1.6, [6, 5]);
      P.tri(A, B, Cp, { colors: [C.muted, C.pink, C.cyan], w: 3 });
      labels.push(T.angLabel(P, pts, 0, C.amber, `A = ${Aang}°`, 24));
      if (cur >= 3) labels.push(T.angLabel(P, pts, 1, C.green, `B ≈ ${dg(t.B)}`, 30));
      if (cur >= 1) { P.seg(Cp[0], Cp[1], Dp[0], 0, C.violet, 2.6); if (Aang !== 90) P.rightMark(Dp, obt ? B : A, Cp, C.violet, 11);
        labels.push({ text: "h", x: Dp[0], y: h / 2, color: C.violet, font: `600 15px ${F.math}`, prefer: obt ? "w" : "e" }, { text: "D", x: Dp[0], y: 0, color: C.muted, font: `bold 13px ${F.sans}`, prefer: "s" }); }
      if (cur >= 2 && obt) { const an = P.vertexArc(A, Dp, Cp, 40, C.amber, { dash: [4, 4] }); labels.push({ text: `180° − A`, x: an.x, y: an.y, color: C.amber, font: `13px ${F.math}` }); }
      labels.push(...T.triLabels(pts, { a: { t: cur >= 3 ? `a ≈ ${n1(t.a)}` : "a", c: C.pink }, b: { t: "b = 5", c: C.cyan }, c: { t: "c = 7", c: C.muted } }));
      P.labels(labels.filter(Boolean));
      const sA = `sin ${Aang}°`, hs = MR.fmtN(h, 2);
      SP.set([
        { tag: "given", eq: `<span class="c2">${I("b")} = 5</span>, ${I("c")} = 7, <span class="c1">${I("A")} = ${Aang}°</span>`, why: obt ? "A is obtuse." : "A is acute. Slide it past 90° for the obtuse case." },
        { tag: "altitude", eq: `<span class="c4">${I("h")}</span> ⊥ line ${I("AB")} at ${I("D")}`, why: obt ? "A is obtuse, so D lies on the extension of AB beyond A." : "D lies on side AB." },
        { tag: "triangle ADC", eq: obt ? `<span class="c4">${I("h")}</span> = <span class="c2">${I("b")}</span> sin(180° − <span class="c1">${I("A")}</span>) = <span class="c2">${I("b")}</span> sin <span class="c1">${I("A")}</span>` : `<span class="c4">${I("h")}</span> = <span class="c2">${I("b")}</span> sin <span class="c1">${I("A")}</span>`, why: `5 ${sA} ≈ ${hs}${obt ? "; the angle at A inside ADC is 180° − A" : ""}` },
        { tag: "triangle BDC", eq: `<span class="c4">${I("h")}</span> = <span class="c3">${I("a")}</span> sin ${I("B")}`, why: `${MR.fmtN(t.a, 2)} · sin ${MR.fmtN(t.B, 2)}° ≈ ${hs}` },
        { tag: "equate", eq: `<span class="c2">${I("b")}</span> sin <span class="c1">${I("A")}</span> = <span class="c3">${I("a")}</span> sin ${I("B")} ⇒ <span class="c3">${I("a")}</span>/sin <span class="c1">${I("A")}</span> = <span class="c2">${I("b")}</span>/sin ${I("B")}`, why: `Divide by sin A sin B. Both ratios ≈ ${MR.fmtN(t.a / MR.sinD(Aang), 3)}.` }], cur);
      k.readout({ title: "Proof with an altitude", big: `<span class="c1">${I("A")} = ${Aang}°</span> · ${obt ? "obtuse" : Aang === 90 ? "right" : "acute"}`,
        rows: [{ lhs: `sin ${Aang}° = sin ${180 - Aang}°`, lbl: "supplementary angles have the same sine" }],
        landmark: { hit: cur >= 4, big: cur >= 4 ? `${I("a")}/sin ${I("A")} = ${I("b")}/sin ${I("B")}` : `step ${cur} of 4`, note: cur >= 4 ? "The altitude from A proves b/sin B = c/sin C the same way." : "One height, written from each of the two right triangles." },
        narr: "Slide A above 90°: D leaves the side, yet h = b sin A still holds." });
      return;
    }
    if (mode === "solve") {
      const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.44 });
      const S = solveCase(), t = S.t, g = S.g, pts = k.triPts(t), P = k.plane(c, Object.assign(k.fit(pts, 0.2), { equal: true, pad }));
      const order = [S.missA].concat(S.missS), foundAt = x => order.indexOf(x) + 1, known = x => g[x] != null, shown = x => known(x) || cur >= foundAt(x);
      const sc = { a: C.pink, b: C.cyan, c: C.text };
      P.tri(pts[0], pts[1], pts[2], { colors: ["c", "a", "b"].map(s => known(s) ? sc[s] : shown(s) ? C.green : C.faint), w: 3, dash: ["c", "a", "b"].map(s => shown(s) ? null : [6, 5]) });
      ["A", "B", "C"].forEach((x, i) => { if (known(x)) labels.push(T.angLabel(P, pts, i, C.amber, `${g[x]}°`)); else if (shown(x)) labels.push(T.angLabel(P, pts, i, C.green, `${x} ${ap(t[x])}°`)); });
      const side = {}; ["a", "b", "c"].forEach(s => { side[s] = { t: known(s) ? `${s} = ${g[s]}` : shown(s) ? `${s} ≈ ${n1(t[s])}` : `${s} = ?`, c: known(s) ? sc[s] : shown(s) ? C.green : C.muted }; });
      labels.push(...T.triLabels(pts, side)); P.labels(labels.filter(Boolean));
      const giv = ["A", "B", "C"].filter(known).map(x => `<span class="c1">${I(x)} = ${g[x]}°</span>`).concat(["a", "b", "c"].filter(known).map(s => `${I(s)} = ${g[s]}`)).join(", ");
      const S0 = S.s0.toUpperCase(), others = ["A", "B", "C"].filter(x => x !== S.missA);
      const lines = [{ tag: S.kind, eq: giv, why: S.kind === "AAS" ? "Two angles and a side not between them." : "Two angles and the side between them." },
        { tag: "third angle", eq: `${I(S.missA)} = 180° − ${g[others[0]]}° − ${g[others[1]]}° <span class="c5">${ap(t[S.missA])}°</span>`, why: "The angles of a triangle sum to 180°." }]
        .concat(S.missS.map(s => ({ tag: "law of sines", eq: `${I(s)} = <span class="fr"><span>${g[S.s0]} sin ${MR.fmtN(t[s.toUpperCase()], 2)}°</span><span>sin ${MR.fmtN(t[S0], 2)}°</span></span> <span class="c5">${s} ≈ ${n1(t[s])}</span>`, why: `Known pair: ${S.s0}/sin ${S0} = ${g[S.s0]}/sin ${MR.fmtN(t[S0], 2)}° ≈ ${MR.fmtN(g[S.s0] / MR.sinD(t[S0]), 3)}.` })));
      SP.set(lines, cur);
      const big = Object.entries(t).filter(([x]) => "ABC".includes(x)).sort((p, q) => q[1] - p[1])[0][0];
      k.readout({ title: "Solve by the law of sines", big: `${S.kind} · problem ${pi + 1} of ${PROB.length}`,
        rows: [{ lhs: `${I(S.s0)}/sin ${I(S0)}`, lbl: "the known pair: a side and its opposite angle" }],
        landmark: { hit: cur >= 3, big: cur >= 3 ? "solved" : `${3 - cur} part${3 - cur === 1 ? "" : "s"} to find`, note: cur >= 3 ? `Check: the longest side, ${big.toLowerCase()}, is across from the largest angle, ${big}.` : "Find the missing angle before any side." },
        narr: "Predict each side before you step: which sine goes on top?" });
      return;
    }
    // Bearing: towers A and B on an east-west baseline, fire F north of it.
    k.split(c, host, { off: true });
    const angA = 90 - thA, angB = 90 - thB, angF = thA + thB, t = MR.solveTriangle({ A: angA, B: angB, c: D0 }).tris[0];
    const A = [0, 0], B = [D0, 0], Fp = [t.b * MR.cosD(angA), t.b * MR.sinD(angA)], nl = D0 * 0.32, pts = [A, B, Fp];
    const P = k.plane(c, Object.assign(k.fit([A, B, Fp, [0, nl], [D0, nl]], 0.14), { equal: true, pad: { l: 18, r: 18, b: 18 } }));
    P.tri(A, B, Fp, { colors: [C.text, C.pink, C.cyan], w: 2.6 });
    [A, B].forEach(p => { P.seg(p[0], 0, p[0], nl, C.muted, 1.4, [5, 4]); labels.push({ text: "N", x: p[0], y: nl, color: C.muted, font: `bold 13px ${F.sans}`, prefer: "n" }); });
    const r = Math.PI / 180, aA = P.angleArc(0, 0, 48, (90 - thA) * r, Math.PI / 2, C.amber, { dash: [3, 4] }), aB = P.angleArc(D0, 0, 48, Math.PI / 2, (90 + thB) * r, C.amber, { dash: [3, 4] });
    labels.push(T.angLabel(P, pts, 0, C.amber, `${angA}°`, 22), T.angLabel(P, pts, 1, C.amber, `${angB}°`, 22), T.angLabel(P, pts, 2, C.green, `${angF}°`, 22));
    if (aA) labels.push({ text: `N ${thA}° E`, x: aA.x, y: aA.y, color: C.amber, font: `13px ${F.math}` });
    if (aB) labels.push({ text: `N ${thB}° W`, x: aB.x, y: aB.y, color: C.amber, font: `13px ${F.math}` });
    P.dot(Fp[0], Fp[1], C.pink, 6);
    labels.push(...T.triLabels(pts, { a: { t: `BF ≈ ${n1(t.a)} km`, c: C.green }, b: { t: `AF ≈ ${n1(t.b)} km`, c: C.green }, c: { t: `AB = ${D0} km`, c: C.text } }, ["A", "B", "F"]));
    P.labels(labels.filter(Boolean));
    const nav = v => String(v).padStart(3, "0");
    k.readout({ title: "Two bearings fix the fire", big: `∠${I("F")} = 180° − ${angA}° − ${angB}° = ${angF}°`,
      rows: [{ lhs: `A: N ${thA}° E = ${nav(thA)}°`, lbl: `angle with AB: 90° − ${thA}° = ${angA}°` }, { lhs: `B: N ${thB}° W = ${nav(360 - thB)}°`, lbl: `angle with BA: 90° − ${thB}° = ${angB}°` },
        { lhs: `AF = ${D0} sin ${angB}°/sin ${angF}°`, v: `≈ ${n1(t.b)} km`, cls: "c5" }, { lhs: `BF = ${D0} sin ${angA}°/sin ${angF}°`, v: `≈ ${n1(t.a)} km`, cls: "c5" }],
      landmark: { hit: angF === 90, big: angF === 90 ? "∠F = 90°" : `∠F = ${angF}°`, note: angF === 90 ? `A right angle at the fire: sin F = 1, so AF = ${D0} sin ${angB}° and right-triangle trigonometry would do.` : "Make the sight lines meet at a right angle." },
      narr: "Make the bearings large: the lines nearly run parallel and a small error moves the fire a long way." });
  });
};

/* ================= The Law of Cosines (F · Triangle) ================= */
L["trig-law-cosines"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), T = kit7(k, c), { n1, dg, ap } = T;
  const bars = document.createElement("div"); bars.className = "tb7"; host.appendChild(bars); const SP = k.stepsPanel(host);
  const PROB = [{ a: 5, b: 7, C: 60 }, { a: 30, b: 40, C: 110 }, { a: 4, b: 5, c: 6 }, { a: 7, b: 9, c: 14 }];
  const CASES = [{ A: 50, B: 60, a: 8 }, { a: 9, b: 6, C: 48 }, { a: 5, b: 7, c: 9 }, { A: 40, C: 75, b: 10 }, { a: 9, b: 7, A: 62 }, { b: 8, c: 11, A: 118 }];
  let mode = "slide", cur = 0, pi = 0, ci = 0, ans = null, right = 0, tried = 0, st = null, lastBars = "", PS = null;
  const sides = { a: C.cyan, b: C.pink, c: C.green };
  // Solution lines for a SAS or SSS problem: [{tag, eq, why}], answers list
  const plan = g => {
    const Sv = MR.solveTriangle(g), t = Sv.tris[0], cosOf = X => { const x = X.toLowerCase(), [y, z] = ["a", "b", "c"].filter(s => s !== x);
      return { eq: `cos ${I(X)} = <span class="fr"><span>${g[y]}² + ${g[z]}² − ${g[x]}²</span><span>2 · ${g[y]} · ${g[z]}</span></span> = ${MR.qT(MR.Q(g[y] ** 2 + g[z] ** 2 - g[x] ** 2, 2 * g[y] * g[z]))}`, ans: `${X} ≈ ${n1(t[X])}°` }; };
    const giv = ["a", "b", "c"].filter(s => g[s] != null).map(s => `${I(s)} = ${g[s]}`).concat(g.C != null ? [`<span class="c1">${I("C")} = ${g.C}°</span>`] : []).join(", ");
    if (Sv.kind === "SAS") {
      const c2 = t.c ** 2, sh = g.a <= g.b ? "A" : "B", lo = sh.toLowerCase(), last = sh === "A" ? "B" : "A", ans = [`c ≈ ${n1(t.c)}`, `${sh} ≈ ${n1(t[sh])}°`, `${last} ≈ ${n1(t[last])}°`];
      return { kind: "SAS", t, ans, lines: [{ tag: "SAS", eq: giv, why: "Two sides and the angle between them: no side is known with its opposite angle." },
        { tag: "law of cosines", eq: `${I("c")}² = ${g.a}² + ${g.b}² − 2(${g.a})(${g.b}) cos ${g.C}° ≈ ${MR.fmtN(c2, 2)} ⇒ <span class="c5">${ans[0]}</span>`, why: `cos ${g.C}° ${g.C > 90 ? "< 0, so the correction adds" : g.C < 90 ? "> 0, so the correction subtracts" : "= 0"}.` },
        { tag: "law of sines", eq: `sin ${I(sh)} = <span class="fr"><span>${g[lo]} sin ${g.C}°</span><span>${I("c")}</span></span> ⇒ <span class="c5">${ans[1]}</span>`, why: `${sh} is opposite the shorter given side, so it is acute and sin⁻¹ is safe.` },
        { tag: "angle sum", eq: `${I(last)} = 180° − ${g.C}° − ${I(sh)} ⇒ <span class="c5">${ans[2]}</span>`, why: `Check: the largest angle is across from the longest side.` }] };
    }
    const order = ["A", "B", "C"].sort((p, q) => g[q.toLowerCase()] - g[p.toLowerCase()]), [L0, L1, L2] = order, c0 = cosOf(L0), c1 = cosOf(L1), ans = [c0.ans, c1.ans, `${L2} ≈ ${n1(t[L2])}°`];
    return { kind: "SSS", t, ans, lines: [{ tag: "SSS", eq: giv, why: `Three sides. Triangle inequality: ${g[order[1].toLowerCase()]} + ${g[order[2].toLowerCase()]} > ${g[L0.toLowerCase()]}.` },
      { tag: "largest angle first", eq: `${c0.eq} ⇒ <span class="c5">${c0.ans}</span>`, why: `${L0} is opposite the longest side; cos⁻¹ reports an obtuse angle correctly.` },
      { tag: "law of cosines", eq: `${c1.eq} ⇒ <span class="c5">${c1.ans}</span>`, why: "Only the largest angle can be obtuse, so this one is acute." },
      { tag: "angle sum", eq: `${I(L2)} = 180° − ${I(L0)} − ${I(L1)} ⇒ <span class="c5">${ans[2]}</span>`, why: "Use unrounded values; the three rounded angles add to 180° within rounding." }] };
  };
  const hints = { slide: "Slide C through 90° and watch the correction term change sign.", solve: "Step through the solution. New problem alternates SAS and SSS.", which: "Look at the given parts and pick the law that starts the solution." };
  const guardMode = () => { if (mode === "solve") k.guard(plan(PROB[pi]).ans); else if (mode === "which") { const kd = MR.solveTriangle(CASES[ci]).kind; k.guard([`${kd}: law of ${lawFor(kd)}`]); } else k.guard([]); };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st) st.reset(); cur = 0; ans = null; lastBars = ""; guardMode(); };
  k.modes([["slide", "Slide C"], ["solve", "Solve"], ["which", "Which law?"]], mode, setMode);
  k.group("slide", () => { PS = (k.params([{ key: "a", min: 2, max: 8, step: 0.5, value: 6, cls: "c2", fmt: v => MR.fmtN(v, 1) }, { key: "b", min: 2, max: 8, step: 0.5, value: 4, cls: "c3", fmt: v => MR.fmtN(v, 1) }, { key: "C", min: 10, max: 170, step: 1, value: 60, cls: "c1", fmt: v => v + "°" }])); });
  k.group("solve", () => { st = k.stepper(() => 3, v => cur = v, { ms: 1300 }); k.button("New problem", () => { pi = (pi + 1) % PROB.length; st.reset(); guardMode(); }, "btn ghost"); });
  const pick = law => { if (ans) return; ans = law; tried++; if (law === lawFor(MR.solveTriangle(CASES[ci]).kind)) right++; };
  k.group("which", () => { k.button("Law of sines", () => pick("sines")); k.button("Law of cosines", () => pick("cosines")); k.button("Next", () => { ci = (ci + 1) % CASES.length; ans = null; guardMode(); }, "btn ghost"); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const labels = [];
    if (mode === "slide") {
      const pad = k.split(c, host, { side: "left", frac: 0.4, hfrac: 0.4 }); bars.style.display = ""; SP.el.style.display = "none";
      const a = PS.a, b = PS.b, Cg = PS.C, Cv = [0, 0], Bv = [a, 0], Av = [b * MR.cosD(Cg), b * MR.sinD(Cg)], ft = [Av[0], 0], pts = [Av, Bv, Cv];
      const c2 = a * a + b * b - 2 * a * b * MR.cosD(Cg), corr = -2 * a * b * MR.cosD(Cg), cl = Math.sqrt(c2), right90 = Cg === 90;
      const P = k.plane(c, Object.assign(k.fit([Av, Bv, Cv, ft, [0, -0.12 * Math.max(a, b)]], 0.14), { equal: true, pad }));
      P.seg(Av[0], Av[1], ft[0], 0, C.faint, 1.3, [4, 4]);
      if (ft[0] < 0) P.seg(0, 0, ft[0], 0, C.faint, 1.5, [6, 5]);
      P.tri(Av, Bv, Cv, { colors: [C.green, C.cyan, C.pink], w: 3 });
      const yo = -0.08 * Math.max(a, b); if (Math.abs(ft[0]) > 1e-9) { P.seg(0, yo, ft[0], yo, C.violet, 4); labels.push({ text: `b cos C ${ap(b * MR.cosD(Cg))}`, x: ft[0] / 2, y: yo, color: C.violet, font: `600 14px ${F.math}`, prefer: "s" }); }
      labels.push(T.angLabel(P, pts, 2, C.amber, `C = ${Cg}°`, 26));
      labels.push(...T.triLabels(pts, { a: { t: `a = ${MR.fmtN(a, 1)}`, c: C.cyan }, b: { t: `b = ${MR.fmtN(b, 1)}`, c: C.pink }, c: { t: `c ≈ ${MR.fmtN(cl, 2)}`, c: C.green } }));
      P.labels(labels.filter(Boolean));
      const M = (a + b) ** 2, pc = v => (100 * v / M).toFixed(2) + "%", s2 = a * a + b * b, lo = Math.min(c2, s2), w = Math.abs(corr);
      const html = `<div class="hd">${I("c")}² = ${I("a")}² + ${I("b")}² − 2${I("ab")} cos ${I("C")}</div>` +
        `<div class="rw m"><span class="c2">${I("a")}²</span> + <span class="c3">${I("b")}²</span> = ${MR.fmtN(a * a, 2)} + ${MR.fmtN(b * b, 2)} = ${MR.fmtN(s2, 2)}<div class="bx"><span style="left:0;width:${pc(a * a)};background:${C.cyan}"></span><span style="left:${pc(a * a)};width:${pc(b * b)};background:${C.pink}"></span></div></div>` +
        `<div class="rw m"><span class="c4">−2${I("ab")} cos ${I("C")}</span> = −2(${MR.fmtN(a, 1)})(${MR.fmtN(b, 1)}) cos ${Cg}° ${ap(corr)}<div class="bx"><span style="left:${pc(lo)};width:${pc(w)};background:${C.violet}"></span></div></div>` +
        `<div class="rw m"><span class="c5">${I("c")}²</span> ${ap(c2)}<div class="bx"><span style="left:0;width:${pc(c2)};background:${C.green}"></span></div></div>` +
        `<div class="big m"><span class="c5">${I("c")}</span> ≈ ${MR.fmtN(cl, 3)}</div>`;
      if (html !== lastBars) { bars.innerHTML = html; lastBars = html; }
      k.readout({ title: "The correction term", big: `<span class="c5">${I("c")}²</span> = ${MR.fmtN(s2, 2)} ${corr < -1e-9 ? "−" : "+"} ${MR.fmtN(w, 2)}`,
        rows: [{ lhs: `cos ${Cg}° ${right90 ? "= 0" : Cg < 90 ? "> 0" : "< 0"}`, lbl: right90 ? "no correction" : Cg < 90 ? "acute C: c² is less than a² + b²" : "obtuse C: c² is more than a² + b²" }],
        landmark: { hit: right90, big: right90 ? `${I("c")}² = ${I("a")}² + ${I("b")}²` : `C = ${Cg}°`, note: right90 ? "cos 90° = 0, so the law of cosines is the Pythagorean Theorem." : "Set C to 90° and the correction vanishes." },
        narr: "The violet bracket b cos C is the shadow of b on side a; the correction is −2a times it." });
      return;
    }
    if (mode === "solve") {
      const pad = k.split(c, host, { side: "left", frac: 0.46, hfrac: 0.46 }); bars.style.display = "none"; SP.el.style.display = "";
      const g = PROB[pi], Pl = plan(g), t = Pl.t, pts = k.triPts(t), P = k.plane(c, Object.assign(k.fit(pts, 0.2), { equal: true, pad }));
      const step = { c: 1 }; if (Pl.kind === "SAS") { const sh = g.a <= g.b ? "A" : "B"; step[sh] = 2; step[sh === "A" ? "B" : "A"] = 3; } else { const o = ["A", "B", "C"].sort((p, q) => g[q.toLowerCase()] - g[p.toLowerCase()]); o.forEach((x, i) => step[x] = i + 1); }
      const known = x => g[x] != null, shown = x => known(x) || cur >= step[x];
      P.tri(pts[0], pts[1], pts[2], { colors: ["c", "a", "b"].map(s => shown(s) ? sides[s] : C.faint), w: 3, dash: ["c", "a", "b"].map(s => shown(s) ? null : [6, 5]) });
      ["A", "B", "C"].forEach((x, i) => { if (known(x)) labels.push(T.angLabel(P, pts, i, C.amber, `${g[x]}°`)); else if (shown(x)) labels.push(T.angLabel(P, pts, i, C.green, `${x} ≈ ${dg(t[x])}`)); });
      const sd = {}; ["a", "b", "c"].forEach(s => sd[s] = { t: known(s) ? `${s} = ${g[s]}` : shown(s) ? `${s} ≈ ${n1(t[s])}` : `${s} = ?`, c: shown(s) ? sides[s] : C.muted });
      labels.push(...T.triLabels(pts, sd)); P.labels(labels.filter(Boolean));
      SP.set(Pl.lines, cur);
      k.readout({ title: `Solve ${Pl.kind} by the law of cosines`, big: `${Pl.kind} · problem ${pi + 1} of ${PROB.length}`,
        rows: [{ lhs: Pl.kind === "SAS" ? `${I("c")}² = ${I("a")}² + ${I("b")}² − 2${I("ab")} cos ${I("C")}` : `cos ${I("C")} = (${I("a")}² + ${I("b")}² − ${I("c")}²)/(2${I("ab")})`, lbl: Pl.kind === "SAS" ? "third side from the included angle" : "an angle from three sides" }],
        landmark: { hit: cur >= 3, big: cur >= 3 ? "solved" : `${3 - cur} part${3 - cur === 1 ? "" : "s"} to find`, note: cur >= 3 ? "Every part found; the longest side is across from the largest angle." : Pl.kind === "SAS" ? "The third side comes first." : "The largest angle comes first." },
        narr: "Then try the other case with New problem." });
      return;
    }
    // Which law?
    k.split(c, host, { off: true });
    const g = CASES[ci], Sv = MR.solveTriangle(g), t = Sv.tris[0], pts = k.triPts(t), law = lawFor(Sv.kind);
    const P = k.plane(c, Object.assign(k.fit(pts, 0.22), { equal: true, pad: { l: 18, r: 18, b: 18 } }));
    P.tri(pts[0], pts[1], pts[2], { colors: ["c", "a", "b"].map(s => g[s] != null ? sides[s] : C.faint), w: 3, dash: ["c", "a", "b"].map(s => g[s] != null ? null : [6, 5]) });
    ["A", "B", "C"].forEach((x, i) => { if (g[x] != null) labels.push(T.angLabel(P, pts, i, C.amber, `${g[x]}°`)); });
    const sd = {}; ["a", "b", "c"].forEach(s => { if (g[s] != null) sd[s] = { t: `${s} = ${g[s]}`, c: sides[s] }; });
    labels.push(...T.triLabels(pts, sd)); P.labels(labels.filter(Boolean));
    const WHY = { AAS: "Two angles give the third, so a side and its opposite angle are known.", ASA: "Two angles give the third, so the given side has its opposite angle.", SSA: "A side and its opposite angle are known, but check for 0, 1 or 2 triangles: the ambiguous case.", SAS: "No side is known with its opposite angle; the law of cosines gives the third side.", SSS: "Only sides are known; the law of cosines gives the largest angle first." };
    const giv = ["A", "B", "C"].filter(x => g[x] != null).map(x => `${x} = ${g[x]}°`).concat(["a", "b", "c"].filter(s => g[s] != null).map(s => `${s} = ${g[s]}`)).join(", ");
    k.readout({ title: "Which law first?", big: giv,
      rows: [ans ? { lhs: `${Sv.kind}: law of ${law}`, lbl: WHY[Sv.kind] } : { lhs: "sines needs a side with its opposite angle", lbl: "pick a law with the buttons" }],
      landmark: { hit: !!ans && ans === law, big: ans ? (ans === law ? "right" : `not quite: law of ${law}`) : `${right} of ${tried} right`, note: ans ? `Score: ${right} of ${tried}. Press Next.` : `Case ${ci + 1} of ${CASES.length}.` },
      narr: "Coloured parts are given; dashed parts are unknown." });
  });
};

/* ================= Area of a triangle (F · Triangle) ================= */
L["trig-triangle-area"] = k => {
  MathKit.attach(k); css();
  const { C, F } = k, MR = k.MR, c = k.canvas(), host = k.dom(), SP = k.stepsPanel(host), T = kit7(k, c), { n1 } = T;
  const PLOTS = [{ AB: 40, BC: 55, CD: 30, DA: 45, AC: 60 }, { AB: 70, BC: 50, CD: 65, DA: 40, AC: 80 }];
  let mode = "sas", cur = 0, st1 = null, st2 = null, pl = 0;
  let R1 = null, S2 = null;
  const heronOf = (a, b, cc) => { const s = (a + b + cc) / 2, N = Math.round(2 * (a + b + cc)) * Math.round(2 * (-a + b + cc)) * Math.round(2 * (a - b + cc)) * Math.round(2 * (a + b - cc)); return { s, p: s * (s - a) * (s - b) * (s - cc), N, K: MR.heron(a, b, cc), ok: a + b > cc && a + cc > b && b + cc > a }; };
  const exactK = H => rootText(H.N, 256);
  const guardHeron = () => { const H = heronOf(S2.a, S2.b, S2.c); k.guard(H.ok ? [`K = √${MR.fmtN(H.p, 4)}`] : []); };
  const plotAns = () => { const p = PLOTS[pl], K1 = MR.heron(p.AB, p.BC, p.AC), K2 = MR.heron(p.AC, p.CD, p.DA); return { K1, K2, ans: [`K₁ ≈ ${n1(K1)}`, `K₂ ≈ ${n1(K2)}`, `≈ ${n1(K1 + K2)} m²`] }; };
  const guardMode = () => { if (mode === "heron") guardHeron(); else if (mode === "plot") k.guard(plotAns().ans); else k.guard([]); };
  const hints = { sas: "Slide C: the height b sin C, and with it the area, peaks at 90°.", heron: "Set three sides, then Step through Heron's formula.", plot: "Step: split the field along the diagonal and add two Heron areas." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); if (st1) st1.reset(); if (st2) st2.reset(); cur = 0; guardMode(); };
  k.modes([["sas", "SAS"], ["heron", "Heron"], ["plot", "Plot"]], mode, setMode);
  k.group("sas", () => { R1 = (k.params([{ key: "a", min: 2, max: 9, step: 0.5, value: 7, cls: "c2", fmt: v => MR.fmtN(v, 1) }, { key: "b", min: 2, max: 9, step: 0.5, value: 5, cls: "c3", fmt: v => MR.fmtN(v, 1) }, { key: "C", min: 5, max: 175, step: 1, value: 50, cls: "c1", fmt: v => v + "°" }])); });
  k.group("heron", () => { S2 = k.params([{ key: "a", min: 1, max: 15, step: 0.5, value: 5, cls: "c2", fmt: v => MR.fmtN(v, 1) }, { key: "b", min: 1, max: 15, step: 0.5, value: 6, cls: "c3", fmt: v => MR.fmtN(v, 1) }, { key: "c", min: 1, max: 15, step: 0.5, value: 7, cls: "c5", fmt: v => MR.fmtN(v, 1) }], () => { if (st1) st1.reset(); guardHeron(); }); st1 = k.stepper(() => 4, v => cur = v, { ms: 1200 }); });
  k.group("plot", () => { st2 = k.stepper(() => 3, v => cur = v, { ms: 1300 }); k.button("Other field", () => { pl = (pl + 1) % PLOTS.length; st2.reset(); guardMode(); }, "btn ghost"); });
  setMode(mode);

  k.loop(() => {
    c.begin(); const labels = [], f15 = `600 15px ${F.math}`;
    if (mode === "sas") {
      k.split(c, host, { off: true });
      const a = R1.a, b = R1.b, Cg = R1.C, Cv = [0, 0], Bv = [a, 0], Av = [b * MR.cosD(Cg), b * MR.sinD(Cg)], ft = [Av[0], 0], h = Av[1], K = 0.5 * a * h, pts = [Av, Bv, Cv];
      const gh = Math.max(120, c.h * 0.32), top = { b: gh + 30, l: 18, r: 18 };
      const P = k.plane(c, Object.assign(k.fit([[-b, 0], [Math.max(a, b), 0], [0, b]], 0.1), { equal: true, pad: top }));
      T.fillPoly(P, pts, k.alpha(C.green, .2));
      if (ft[0] < 0) P.seg(0, 0, ft[0], 0, C.faint, 1.5, [6, 5]); else if (ft[0] > a) P.seg(a, 0, ft[0], 0, C.faint, 1.5, [6, 5]);
      P.tri(Av, Bv, Cv, { colors: [C.muted, C.cyan, C.pink], w: 3 });
      P.seg(Av[0], Av[1], ft[0], 0, C.violet, 2.4, [7, 5]); if (Cg !== 90) P.rightMark(ft, ft[0] < 0 || ft[0] > a ? Cv : Bv, Av, C.violet, 10);
      labels.push(T.angLabel(P, pts, 2, C.amber, `C = ${Cg}°`, 24), { text: `h ≈ ${MR.fmtN(h, 2)}`, x: ft[0], y: h / 2, color: C.violet, font: f15, prefer: ft[0] < a / 2 ? "e" : "w" });
      labels.push(...T.triLabels(pts, { a: { t: `a = ${MR.fmtN(a, 1)}`, c: C.cyan }, b: { t: `b = ${MR.fmtN(b, 1)}`, c: C.pink } }));
      P.labels(labels.filter(Boolean));
      // K as a function of C for these a, b
      const Km = 0.5 * a * b, G = k.plane(c, { xmin: 0, xmax: 180, ymin: 0, ymax: 0.5 * a * b * 1.25, xstep: c.w < 500 ? 45 : 30, ystep: Km <= 4 ? 1 : Km <= 10 ? 2 : Km <= 25 ? 5 : 10, pad: { t: c.h - gh - 4, b: 44, l: 40, r: 18 }, modes: false });
      G.grid(); G.axes(); G.curve(x => 0.5 * a * b * MR.sinD(x), C.green, { w: 2.4 }); G.seg(90, 0, 90, Km, C.faint, 1, [4, 4]); G.dot(Cg, K, C.amber, 6);
      G.labels([{ text: `K = ½ab sin C`, x: 150, y: 0.5 * a * b * MR.sinD(150), color: C.green, font: `14px ${F.math}`, prefer: "ne" }]);
      k.readout({ title: "Area from two sides and the angle", big: `<span class="c5">${I("K")}</span> = ½ · ${MR.fmtN(a, 1)} · ${MR.fmtN(b, 1)} · sin ${Cg}° ≈ ${MR.fmtN(K, 2)}`,
        rows: [{ lhs: `<span class="c4">${I("h")}</span> = <span class="c3">${I("b")}</span> sin <span class="c1">${I("C")}</span>`, v: `≈ ${MR.fmtN(h, 2)}` }, { lhs: `½ · base · height = ½ · ${MR.fmtN(a, 1)} · ${MR.fmtN(h, 2)}` }],
        landmark: { hit: Cg === 90, big: Cg === 90 ? `largest area ½${I("ab")} = ${MR.fmtN(Km, 2)}` : `C = ${Cg}°`, note: Cg === 90 ? "sin 90° = 1: the height is all of b." : `C and 180° − C give the same area (sin ${Cg}° = sin ${180 - Cg}°).` },
        narr: "Take C past 90°: the foot of the height leaves the base, but h = b sin C still holds." });
      return;
    }
    if (mode === "heron") {
      const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.46 });
      const a = S2.a, b = S2.b, cc = S2.c, H = heronOf(a, b, cc);
      if (!H.ok) { // sides cannot close: base c with arcs of radius a (from B) and b (from A)
        const P = k.plane(c, Object.assign(k.fit([[0, 0], [cc, 0], [-b, 0], [cc + a, 0], [0, Math.max(a, b)]], 0.08), { equal: true, pad }));
        P.seg(0, 0, cc, 0, C.green, 3); P.param(t => b * Math.cos(t), t => b * Math.sin(t), 0, Math.PI); P.param(t => cc + a * Math.cos(t), t => a * Math.sin(t), 0, Math.PI);
        P.labels([{ text: `c = ${n1(cc)}`, x: cc / 2, y: 0, color: C.green, font: f15, prefer: "s" }, { text: "no triangle", x: cc / 2, y: Math.max(a, b) * 0.6, color: C.text, font: f15 }]);
        SP.set([{ tag: "check", eq: "the triangle inequality fails", why: "Each side must be shorter than the sum of the other two." }], 0);
        k.readout({ title: "No triangle", big: `${n1(Math.max(a, b, cc))} ≥ ${n1(a + b + cc - Math.max(a, b, cc))}`, rows: [{ lhs: `${I("s")}(${I("s")} − ${I("a")})(${I("s")} − ${I("b")})(${I("s")} − ${I("c")}) ≤ 0`, lbl: "Heron's product is not positive" }],
          landmark: { hit: false, big: "sides do not close", note: "Shorten the longest side or lengthen the others." }, narr: "The arcs show where the two shorter sides can reach: they never meet." });
        return;
      }
      const t = MR.solveTriangle({ a, b, c: cc }).tris[0], pts = k.triPts(t), P = k.plane(c, Object.assign(k.fit(pts, 0.2), { equal: true, pad }));
      if (cur >= 4) T.fillPoly(P, pts, k.alpha(C.green, .2));
      P.tri(pts[0], pts[1], pts[2], { colors: [C.green, C.cyan, C.pink], w: 3 });
      labels.push(...T.triLabels(pts, { a: { t: `a = ${n1(a)}`, c: C.cyan }, b: { t: `b = ${n1(b)}`, c: C.pink }, c: { t: `c = ${n1(cc)}`, c: C.green } }));
      P.labels(labels);
      const s = H.s, fs = v => MR.fmtN(v, 2), ex = exactK(H), dec = MR.fmtN(H.K, 2), isInt = !/[√/]/.test(ex);
      SP.set([{ tag: "sides", eq: `${I("a")} = ${n1(a)}, ${I("b")} = ${n1(b)}, ${I("c")} = ${n1(cc)}`, why: "Each side is shorter than the other two together." },
        { tag: "semiperimeter", eq: `${I("s")} = (${n1(a)} + ${n1(b)} + ${n1(cc)})/2 = ${fs(s)}`, why: "Half the perimeter." },
        { tag: "differences", eq: `${I("s")} − ${I("a")} = ${fs(s - a)}, ${I("s")} − ${I("b")} = ${fs(s - b)}, ${I("s")} − ${I("c")} = ${fs(s - cc)}`, why: "All positive, as the triangle inequality promises." },
        { tag: "product", eq: `${fs(s)} · ${fs(s - a)} · ${fs(s - b)} · ${fs(s - cc)} = ${MR.fmtN(H.p, 4)}`, why: "This is K²." },
        { tag: "root", eq: `<span class="c5">${I("K")}</span> = √${MR.fmtN(H.p, 4)} = <span class="c5">${ex}</span>${isInt ? "" : ` ≈ <span class="c5">${dec}</span>`}`, why: isInt ? "A whole-number area." : "Exact, then rounded." }], cur);
      const heronian = isInt && [a, b, cc].every(v => Number.isInteger(v));
      k.readout({ title: "Heron's formula", big: `<span class="c5">${I("K")}</span> = √<span class="ov">${I("s")}(${I("s")} − ${I("a")})(${I("s")} − ${I("b")})(${I("s")} − ${I("c")})</span>`,
        rows: [{ lhs: `${I("s")} = (${I("a")} + ${I("b")} + ${I("c")})/2`, lbl: "the semiperimeter" }],
        landmark: { hit: cur >= 4 && heronian, big: cur >= 4 ? (heronian ? "whole sides, whole area" : `area found`) : `step ${cur} of 4`, note: cur >= 4 ? (heronian ? "A Heronian triangle, like 3-4-5 or 13-14-15." : "Try 13, 14, 15 or 5, 5, 6: whole sides and a whole area.") : "No angle is needed, only the three sides." },
        narr: "Make one side nearly the sum of the other two: s minus it nears 0 and so does the area." });
      return;
    }
    // Plot: quadrilateral ABCD split by diagonal AC (on the x-axis), B above, D below.
    const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.44 });
    const p = PLOTS[pl], Aa = [0, 0], Cc = [p.AC, 0], tB = MR.solveTriangle({ a: p.BC, b: p.AC, c: p.AB }).tris[0], tD = MR.solveTriangle({ a: p.CD, b: p.AC, c: p.DA }).tris[0];
    const Bb = [p.AB * MR.cosD(tB.A), p.AB * MR.sinD(tB.A)], Dd = [p.DA * MR.cosD(tD.A), -p.DA * MR.sinD(tD.A)], PA = plotAns();
    const P = k.plane(c, Object.assign(k.fit([Aa, Bb, Cc, Dd], 0.14), { equal: true, pad }));
    T.fillPoly(P, [Aa, Bb, Cc], k.alpha(C.cyan, cur >= 1 ? .22 : .06)); T.fillPoly(P, [Aa, Cc, Dd], k.alpha(C.pink, cur >= 2 ? .22 : .06));
    P.tri(Aa, Bb, Cc, { colors: [C.text, C.text, C.violet], w: 2.6, dash: [null, null, [7, 5]] }); P.seg(Cc[0], 0, Dd[0], Dd[1], C.text, 2.6); P.seg(Dd[0], Dd[1], 0, 0, C.text, 2.6);
    const mid = (u, v) => [(u[0] + v[0]) / 2, (u[1] + v[1]) / 2], lab = (u, v, t, col, pr) => { const m = mid(u, v); labels.push({ text: t, x: m[0], y: m[1], color: col, font: `600 14px ${F.math}`, prefer: pr }); };
    lab(Aa, Bb, `${p.AB} m`, C.text, "nw"); lab(Bb, Cc, `${p.BC} m`, C.text, "ne"); lab(Cc, Dd, `${p.CD} m`, C.text, "se"); lab(Dd, Aa, `${p.DA} m`, C.text, "sw"); lab(Aa, Cc, `${p.AC} m`, C.violet, "n");
    [["A", Aa, "w"], ["B", Bb, "n"], ["C", Cc, "e"], ["D", Dd, "s"]].forEach(([n, q, pr]) => labels.push({ text: n, x: q[0], y: q[1], color: C.muted, font: `bold 13px ${F.sans}`, prefer: pr }));
    if (cur >= 1) { const g1 = [(Bb[0] + Cc[0]) / 3, Bb[1] / 3]; labels.push({ text: `K₁ ≈ ${n1(PA.K1)}`, x: g1[0], y: g1[1], color: C.cyan, font: `600 14px ${F.math}` }); }
    if (cur >= 2) { const g2 = [(Dd[0] + Cc[0]) / 3, Dd[1] / 3]; labels.push({ text: `K₂ ≈ ${n1(PA.K2)}`, x: g2[0], y: g2[1], color: C.pink, font: `600 14px ${F.math}` }); }
    P.labels(labels);
    const her = (x, y, z) => { const s = (x + y + z) / 2; return `${I("s")} = ${MR.fmtN(s, 1)}, √<span class="ov">${MR.fmtN(s, 1)} · ${MR.fmtN(s - x, 1)} · ${MR.fmtN(s - y, 1)} · ${MR.fmtN(s - z, 1)}</span>`; };
    SP.set([{ tag: "split", eq: `diagonal <span class="c4">${I("AC")} = ${p.AC}</span> m`, why: "Two triangles with all three sides known." },
      { tag: "triangle ABC", eq: `${her(p.AB, p.BC, p.AC)} <span class="c2">${PA.ans[0]}</span>`, why: "Heron's formula." },
      { tag: "triangle ACD", eq: `${her(p.AC, p.CD, p.DA)} <span class="c3">${PA.ans[1]}</span>`, why: "Heron's formula again." },
      { tag: "total", eq: `${I("K")} = ${I("K")}₁ + ${I("K")}₂ <span class="c5">${PA.ans[2]}</span>`, why: "Area Addition: the triangles do not overlap." }], cur);
    k.readout({ title: "Area of a four-sided field", big: `${p.AB}, ${p.BC}, ${p.CD}, ${p.DA} m · diagonal ${p.AC} m`,
      rows: [{ lhs: "four sides alone do not fix the shape", lbl: "the diagonal makes two rigid triangles" }],
      landmark: { hit: cur >= 3, big: cur >= 3 ? `${I("K")} ${PA.ans[2]}` : `step ${cur} of 3`, note: cur >= 3 ? "Surveyors measure areas this way: a mesh of triangles with measured sides." : "Each triangle gets its own Heron's formula." },
      narr: "Switch fields: a different diagonal length would give a different area for the same four sides." });
  });
};
})();
