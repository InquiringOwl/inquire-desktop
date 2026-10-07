/* ============ Labs: Precalculus, batch B10 (limits at infinity, infinite limits) ============ */
(function(){
const L = window.LABS, MI = "−", INF = "∞", SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const mi = s => String(s).replace(/-/g, MI), sup = e => e === 1 ? "" : String(e).split("").map(d => SUP[d]).join("");

L["pc-limits-infinity"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, c = k.canvas(), host = k.dom(), hostT = k.dom();
  let mode = "inf", P = null, tx = 3, pull = 0, W = 8, YS = 6, dl = 1.5, dr = 1.5, anim = 0;
  const nk = ["n0", "n1", "n2", "n3"], dk = ["d0", "d1", "d2", "d3"], X = "<i>x</i>", fx = "<i>f</i>(<i>x</i>)";
  const S = k.vars([
    ...[1, -1, 3, 0].map((v, i) => ({ key: nk[i], value: v, min: -9, max: 9, step: 1, typeStep: 0.5, cls: "c2", label: `numerator x${sup(i)} coefficient` })),
    ...[4, 0, 1, 0].map((v, i) => ({ key: dk[i], value: v, min: -9, max: 9, step: 1, typeStep: 0.5, cls: "c3", label: `denominator x${sup(i)} coefficient` })),
    { key: "c", value: 1, min: -5, max: 5, step: 1, cls: "c2", label: "numerator factor c" },
    { key: "u", value: -1, min: -4, max: 4, step: 0.5, cls: "c2", label: "numerator constant" },
    { key: "v", value: -2, min: -4, max: 4, step: 0.5, cls: "c3", label: "asymptote factor constant" },
    { key: "p", value: 1, min: 1, max: 3, step: 1, cls: "c3", label: "power p" },
    { key: "w", value: 2, min: -4, max: 4, step: 0.5, cls: "c3", label: "second denominator constant" },
  ], key => { if (dk.every(q => !S[q])) S.set("d0", 1); ST.reset(); });
  const NP = () => Poly(nk.map(q => S[q])), DP = () => Poly(dk.map(q => S[q]));
  const g = x => S.c * (x + S.u) / ((x + S.v) ** S.p * (x + S.w)), fI = x => Poly.evalN(NP(), x) / Poly.evalN(DP(), x);
  const ax = (col, name) => ({ x: 0, y: 0, fixY: true, snap: 0.5, clamp: [-4, 4, 0, 0], color: col, name });
  const pts = [{ x: 3, y: 0, on: fI, color: C.amber, name: "trace point on f" },
    { x: 0, y: 0, on: g, color: C.amber, name: "point left of the asymptote" }, { x: 0, y: 0, on: g, color: C.amber, name: "point right of the asymptote" },
    ax(C.cyan, "zero of the numerator"), ax(C.pink, "vertical asymptote x = a"), ax(C.pink, "second denominator zero")];
  const D = k.drag(c, () => P, pts, (i, p) => { k.hint("");
    if (i === 0) { tx = p.x || 1e-3; pull = 0; } if (i === 1) dl = Math.max(1e-4, -S.v - p.x); if (i === 2) dr = Math.max(1e-4, p.x + S.v);
    if (i > 2) S.set("uvw"[i - 3], -p.x); }, { label: "Limit graph" });
  const hints = { inf: "Drag the point along the curve toward the right edge, or press Pull → ∞.", vert: "Drag the two points toward the dashed line x = a, or press Approach a." };
  k.modes([["inf", "At infinity"], ["vert", "Infinite"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); });
  const ST = k.group("inf", () => { k.button("Pull → ∞", () => { if (tx < 0) tx = 3; pull = 1; }); k.button("Pull → −∞", () => { if (tx > 0) tx = -3; pull = 1; }, "btn ghost");
    k.button("Back", () => { pull = 0; tx = 3; }, "btn ghost"); return k.stepper(() => 4, () => {}); });
  k.group("vert", () => { k.button("Approach a", () => { anim = 1; }); k.button("Back", () => { anim = 0; dl = dr = 1.5; }, "btn ghost"); });
  k.showGroup(mode); const SP = k.stepsPanel(host);
  const qv = v => (typeof v === "string" ? v : MR.qT(v)), lim = (to, f = fx) => `lim<sub>${X}→${to}</sub> ${f}`, strip = t => t.replace(/<[^>]+>/g, "");
  const frac = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
  // the terms of a polynomial divided by x^m: "3 − 1/x + 1/x²"
  const divT = (p, m, cls) => { let out = ""; for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; if (!q.n) continue; const e = i - m, a = MR.qT(Q.abs(q)), neg = q.n < 0;
      const t = e > 0 ? `${a === "1" ? "" : a}${X}${sup(e)}` : e === 0 ? a : frac(a, X + sup(-e)); out += out ? ` ${neg ? MI : "+"} ${t}` : (neg ? MI : "") + t; }
    return `<span class="${cls}">${out || "0"}</span>`; };

  function atInf(){
    const N = NP(), Dn = DP(), R = MR.rational(N, Dn), Lp = MR.limInf(N, Dn, 1), Lm = MR.limInf(N, Dn, -1), n = Lp.n, m = Lp.m;
    if (pull) { tx *= 1.03; if (Math.abs(tx) >= 1e5) { tx = Math.sign(tx) * 1e5; pull = 0; } }
    const Ls = tx > 0 ? Lp : Lm, yc = typeof Ls.value === "string" ? 0 : Q.val(Ls.value), fy = fI(tx);
    W += (Math.max(8, 1.3 * Math.abs(tx)) - W) * 0.15; YS += (Math.min(1e12, Math.max(5, 1.4 * Math.abs((isFinite(fy) ? fy : 0) - yc))) - YS) * 0.15;
    P = k.plane(c, { xmin: -W, xmax: W, ymin: yc - YS, ymax: yc + YS, xlabel: "x", ylabel: "y", pad: (k.split(c, hostT, { off: true }), k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.42 })) });
    P.grid(); P.axes(); R.vas.forEach(v => P.vasym(v.x)); R.holes.forEach(h => P.hole(h.x, h.y, C.violet));
    const done = ST.k >= 4;
    if (done) { if (Lp.case !== "higher") P.hasym(yc); else { const q = Poly.divmod(N, Dn).q; P.curve(x => Poly.evalN(q, x), C.violet, { dash: [6, 5], w: 1.5 }); } }
    P.curve(fI, C.text, { w: 2.5, breaks: R.vas.map(v => v.x) });
    const p0 = pts[0]; p0.x = tx; p0.y = fy; p0.clamp = [-1e5, 1e5, -1e15, 1e15]; p0.keyStep = W / 40; P.seg(tx, 0, tx, fy, k.alpha(C.amber, 0.5), 1.5, [4, 4]); D.draw(P);
    P.labels([{ text: "x", x: tx, y: 0, color: C.amber, prefer: tx > 0 ? "sw" : "se" }]);
    const nT = n < 0 ? "none (f = 0)" : n, aN = Poly.lead(N), bM = Poly.lead(Dn), r = Q.div(aN, bM), top = Q(S["n" + m] || 0);
    const res = L1 => L1.case === "lower" ? "the numerator's terms all → 0" : L1.case === "equal" ? `ratio of leading coefficients ${MR.qT(aN)}/${MR.qT(bM)}` : `f behaves like ${MR.qT(r)}x${sup(n - m)}${(n - m) % 2 ? ", an odd power" : ""}`;
    const lines = [
      { tag: "degrees", eq: `top: <span class="c2"><i>n</i> = ${nT}</span>, &nbsp; bottom: <span class="c3"><i>m</i> = ${m}</span>`, why: m ? `divide every term by ${X}${sup(m)}, the bottom's highest power` : "the bottom is a constant" },
      { tag: "÷ x" + sup(m), eq: `${fx} = ${frac(divT(N, m, "c2"), divT(Dn, m, "c3"))}`, why: m ? `each term ÷ ${X}${sup(m)}` : "nothing to divide" },
      { tag: "→ 0", eq: n <= m ? `${fx} → ${frac(`<span class="c2">${MR.qT(top)}</span>`, `<span class="c3">${MR.qT(bM)}</span>`)}` : `${fx} ≈ ${frac(`<span class="c2">${MR.qT(aN)}${X}${sup(n - m)}</span>`, `<span class="c3">${MR.qT(bM)}</span>`)}`, why: `every c/${X}ʲ → 0 as ${X} → ±∞` },
      { tag: "x → ∞", eq: `${lim(INF)} = ${qv(Lp.value)}`, why: res(Lp) },
      { tag: "x → −∞", eq: `${lim(MI + INF)} = ${qv(Lm.value)}`, why: Lp.case === "higher" ? `sign of ${X}${sup(n - m)} for ${X} &lt; 0` : "same as x → ∞ for a rational function" }];
    SP.set(lines, ST.k); k.guard(lines.slice(Math.max(3, ST.k + 1)).map(l => strip(l.eq)));
    const t = q => S.term(q, { v: +q[1] ? X + sup(+q[1]) : "", first: q === "n3" || q === "d3" });
    k.eqline(`${fx} = ${frac(`<span class="c2">${[3, 2, 1, 0].map(i => t("n" + i)).join("")}</span>`, `<span class="c3">${[3, 2, 1, 0].map(i => t("d" + i)).join("")}</span>`)}`, "f");
    const ha = Lp.case === "higher" ? "none" : `y = ${MR.qT(Lp.value)}`;
    k.readout({ title: "Trace point", big: `${fx} at ${X} = ${mi(MR.fmtN(tx, 2))}: ${MR.fmtN(fy, 5)}`, rows: [{ lhs: "degrees n, m", v: `${nT}, ${m}` }, { lhs: "horizontal asymptote", v: done ? ha : "step to find it", cls: "c4" }],
      landmark: { hit: done, big: done ? (Lp.case === "higher" ? `${strip(lim(INF))} = ${qv(Lp.value)}` : `${ha} on both ends`) : "Step through the division", note: "Only the highest powers matter far from the origin." },
      narr: "Make the numerator's degree bigger than the bottom's and pull again: the window chases f to ±∞." });
  }

  function vert(){
    const a = -S.v, b = -S.w, N = Poly([S.c * S.u, S.c]), Dn = Poly.mul(Poly.pow(Poly([S.v, 1]), S.p), Poly([S.w, 1])), RL = MR.ratLimit(N, Dn, a), RB = MR.ratLimit(N, Dn, b);
    if (anim) { dl *= 0.96; dr *= 0.96; if (dl < 1e-3) { dl = dr = 1e-3; anim = 0; } }
    const xl = a - dl, xr = a + dr, yl = g(xl), yr = g(xr);
    YS += (Math.min(1e7, Math.max(6, 1.3 * Math.max(Math.abs(yl) || 0, Math.abs(yr) || 0))) - YS) * 0.15;
    P = k.plane(c, { xmin: a - 4.5, xmax: a + 4.5, ymin: -YS, ymax: YS, xlabel: "x", ylabel: "y", pad: (k.split(c, host, { off: true }), k.split(c, hostT, { side: "right", frac: 0.36, hfrac: 0.3 })) });
    P.grid(); P.axes(); [[a, RL], [b, RB]].forEach(([x, R]) => R.kind === "vertical" ? P.vasym(x) : P.hole(x, Q.val(R.value), C.violet));
    P.curve(g, C.text, { w: 2.5, breaks: [a, b] });
    [[1, xl, yl, [a - 4.5, a - 1e-4]], [2, xr, yr, [a + 1e-4, a + 4.5]]].forEach(([i, x, y, cl]) => { Object.assign(pts[i], { x, y, clamp: [cl[0], cl[1], -1e12, 1e12], keyStep: 0.05 }); P.seg(x, 0, x, y, k.alpha(C.amber, 0.5), 1.5, [4, 4]); });
    pts[3].x = -S.u; pts[4].x = a; pts[5].x = b; D.draw(P);
    P.labels([{ text: "a", x: a, y: 0, color: C.pink, prefer: "s" }]);
    const sg = (v, z) => Math.abs(v) < z ? (v < 0 ? "0⁻" : "0⁺") : v < 0 ? MI : "+", F = [x => S.c * (x + S.u), x => (x + S.v) ** S.p, x => x + S.w];
    const row = (h, cls, f, z) => `<tr><td class="${cls}">${h}</td><td>${sg(f(xl), z)}</td><td>${sg(f(xr), z)}</td></tr>`;
    const fT = u => `${X}${u ? ` ${u < 0 ? MI : "+"} ${MR.fmtN(Math.abs(u), 2)}` : ""}`;
    hostT.innerHTML = `<table class="b10t"><tr><th>sign</th><th class="c1">${X} → ${mi(a)}⁻</th><th class="c1">${X} → ${mi(a)}⁺</th></tr>${row(`${mi(S.c)}(${fT(S.u)})`, "c2", F[0], 0.05)}`
      + `${row(`(${fT(S.v)})${S.p > 1 ? `<sup>${S.p}</sup>` : ""}`, "c3", F[1], 0.05)}${row(fT(S.w), "c3", F[2], 0.05)}${row("<i>f</i>", "c5", g, 0)}</table>`;
    const nl = dl < 0.011, nr = dr < 0.011, two = RL.left === RL.right ? `= ${qv(RL.left)}` : "does not exist";
    k.eqline(`${fx} = ${frac(`<span class="c2">${S.html("c")}(${X}${S.term("u")})</span>`, `<span class="c3">(${X}${S.term("v")})<sup>${S.html("p")}</sup>(${X}${S.term("w")})</span>`)}`, "f"); k.guard([]);
    k.readout({ title: "Approaching x = a", rows: [{ lhs: lim(mi(a) + "⁻"), v: nl ? qv(RL.left) : "drag closer", cls: "c5" }, { lhs: lim(mi(a) + "⁺"), v: nr ? qv(RL.right) : "drag closer", cls: "c5" }],
      landmark: { hit: nl && nr, big: `${lim(mi(a))} ${nl && nr ? two : "?"}`, note: RL.kind === "vertical" ? "Small denominator, nonzero numerator: the outputs grow without bound. The signs decide +∞ or −∞." : "The factor cancels: a hole, not an asymptote." },
      narr: "Set the power p to 2: both sides now agree." });
  }

  k.loop(() => { c.begin(); pts.forEach((p, i) => { p.off = p.hidden = mode === "inf" ? i > 0 : i === 0; }); mode === "inf" ? atInf() : vert(); });
  k.css("b10t", ".b10t{border-collapse:collapse;font-size:14px;width:100%}.b10t td,.b10t th{padding:3px 6px;text-align:center;white-space:nowrap}.b10t th{font-weight:500}.b10t td:first-child{text-align:left}");
  k.hint(hints.inf);
};
})();
