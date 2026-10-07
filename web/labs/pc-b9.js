/* ============ Labs: Precalculus, batch B9 (limit laws, continuity, secant to tangent) ============ */
(function(){
const L = window.LABS;
const MI = "−";
const mi = s => String(s).replace(/-/g, MI), strip = s => s.replace(/<[^>]+>/g, "");
const ROmemo = k => { let last = ""; return o => { const s = JSON.stringify(o); if (s !== last) { last = s; k.readout(o); } }; };
const fr = (t, b) => `<span class="fr"><span>${t}</span><span>${b}</span></span>`;
const onLab = (P, text, f, at, color) => { const o = P.onCurve(f, at); return o ? [{ text, x: o.x, y: o.y, color }] : []; };
const lim = (v, s = "") => `lim<sub>${v}→<span class="c1">${s}</span></sub>`;

// KIT CANDIDATE: "x − r" / "x + |r|" / "x" for a rational r, as HTML (v = variable HTML)
const linH = (MR, r, v = "<i>x</i>") => { const Q = MR.Q; r = Q(r); return r.n === 0 ? v : `${v} ${r.n > 0 ? MI : "+"} ${MR.qT(Q.abs(r))}`; };
// KIT CANDIDATE: a rational in parentheses when negative, for substitution lines: "(−2)"
const parQ = (MR, q) => { const t = MR.qT(q); return MR.Q(q).n < 0 ? `(${t})` : t; };

/* ================= pc-limit-laws ================= */
L["pc-limit-laws"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, c = k.canvas(), ro = ROmemo(k), host = k.dom();
  let mode = "eval", kind = "factor", comb = "sum", P = null;
  const S = k.vars([
    { key: "a", value: 2, min: -5, max: 5, step: 1, cls: "c1", label: "a" },
    { key: "b", value: 1, min: -12, max: 12, step: 1, cls: "c2", label: "b" },
    { key: "c", value: -6, min: -40, max: 40, step: 1, cls: "c2", label: "c" },
    { key: "p", value: 5, min: -9, max: 9, step: 1, cls: "c2", label: "p" },
    { key: "q", value: 3, min: 1, max: 5, step: 1, cls: "c2", label: "q" },
    { key: "m", value: 1, min: -9, max: 9, step: 1, cls: "c2", label: "m" },
    { key: "Lf", value: 4, min: -9, max: 9, step: 0.5, cls: "c2", label: "lim f" },
    { key: "Mg", value: -2, min: -9, max: 9, step: 0.5, cls: "c3", label: "lim g" },
    { key: "cc", value: 3, min: -9, max: 9, step: 1, cls: "c1", label: "constant c" },
    { key: "n", value: 2, min: 1, max: 4, step: 1, cls: "c1", label: "power n" },
    { key: "z", value: 0, min: 0, max: 3, step: 0.25, cls: "c1", label: "zoom exponent" },
  ], () => ST.reset());
  const fx = { factor: x => (x * x + S.b * x + S.c) / (x - S.a), conj: x => (Math.sqrt(x + S.p) - S.q) / (x - (S.q * S.q - S.p)), frac: x => (S.m / x - S.m / S.a) / (x - S.a) };
  const sq = x => x * Math.sin(1 / x), W = () => 2 * 10 ** -S.z;
  const lawF = x => S.Lf + 0.6 * (x - S.a) + 0.15 * (x - S.a) ** 2, lawG = x => S.Mg - 0.5 * (x - S.a) + 0.2 * Math.sin(2 * (x - S.a));
  const pts = [
    { x: 2, y: 0, fixY: true, snap: 1, clamp: [-5, 5, 0, 0], color: C.amber, name: "a on the x-axis" },
    { x: 3, y: 0, on: x => fx[kind](x), keyStep: 0.05, color: C.amber, name: "trace point on the curve" },
    { x: 2, y: 4, fixX: true, snap: 0.5, color: C.cyan, name: "lim f (end of f)" },
    { x: 2, y: -2, fixX: true, snap: 0.5, color: C.pink, name: "lim g (end of g)" },
    { x: 0.5, y: 0, on: sq, keyStep: 0.01, color: C.amber, name: "x on x sin(1/x)" },
  ];
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (i === 0) { if (kind === "conj") S.set("p", S.q * S.q - p.x); else S.set("a", p.x); ST.reset(); }
    if (i === 2) S.set("Lf", p.y); if (i === 3) S.set("Mg", p.y); }, { label: "Limit" });
  const hints = { eval: "Scrub the numbers in the limit, or drag a along the axis; Step through the algebra.", laws: "Drag the ends of f and g (or scrub L and M) and pick a combination.", sq: "Drag x along the curve toward 0, or zoom in." };
  k.modes([["eval", "Evaluate"], ["laws", "Laws"], ["sq", "Squeeze"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); });
  const ST = k.group("eval", () => { k.select("form", [["factor", "factor"], ["conj", "conjugate"], ["frac", "complex fraction"]], kind, v => { kind = v; ST.reset(); });
    k.button("New problem", () => { const r = () => Math.floor(Math.random() * 9) - 4; const a = r() || 1, s = r(); S.set("a", a); S.set("b", -(a + s)); S.set("c", a * s); S.set("p", Math.floor(Math.random() * 9) - 3); S.set("q", 1 + Math.floor(Math.random() * 4)); S.set("m", r() || 2); ST.reset(); }, "btn ghost");
    return k.stepper(() => lines().length - 1, () => {}); });
  k.group("laws", () => k.select("combine", [["sum", "f + g"], ["cf", "c · f"], ["prod", "f · g"], ["quot", "f / g"], ["pow", "fⁿ"], ["root", "√f"]], comb, v => { comb = v; }));
  k.group("sq", () => k.button("Zoom ×10", () => { const z0 = S.z; S.set("z", Math.min(3, z0 + 1)); pts[4].x *= 10 ** -(S.z - z0); }));
  k.showGroup(mode); const SP = k.stepsPanel(host);

  // the worked solution of the current numbers: [{tag, eq, why}], plus the exact result
  let res = null;
  function lines(){
    const a = Q(S.a), x = "<i>x</i>", rad = `√<span class="ov">${linH(MR, Q.neg(Q(S.p)))}</span>`;
    if (kind === "factor") {
      const N = Poly([Q(S.c), Q(S.b), 1]), R = MR.ratLimit(N, Poly([Q.neg(a), 1]), a), Na = Poly.eval(N, a), s = Q.sub(Q(-S.b), a);
      const out = [{ tag: "substitute", eq: `${x} = ${MR.qT(a)}: &nbsp; ${fr(MR.qT(Na), "0")}`, why: Na.n ? "a nonzero number over 0" : "0/0 is indeterminate: simplify first" }];
      if (Na.n) { res = { R, t: "no finite limit" }; out.push({ tag: "result", eq: `left → ${R.left}, right → ${R.right}`, why: `vertical asymptote at ${x} = ${MR.qT(a)}: no finite limit` }); return out; }
      res = { R, t: MR.qT(R.value) };
      return out.concat([{ tag: "factor", eq: `${MR.polyH(N)} = <span class="c4">(${linH(MR, a)})</span>(${linH(MR, s)})`, why: `${MR.qT(a)} is a zero of the top, so ${linH(MR, a)} is a factor` },
        { tag: "cancel", eq: `${fr(`<span class="c4">(${linH(MR, a)})</span>(${linH(MR, s)})`, `<span class="c4">${linH(MR, a)}</span>`)} = ${linH(MR, s)}`, why: `for ${x} ≠ ${MR.qT(a)}` },
        { tag: "limit", eq: `<span class="c5">${lim(x, MR.qT(a))} = ${MR.qT(a)} ${s.n > 0 ? MI : "+"} ${MR.qT(Q.abs(s))} = ${res.t}</span>`, why: "substitute into the simplified form" }]);
    }
    if (kind === "conj") {
      const q = Q(S.q), q2 = Q.mul(q, q), A = Q.sub(q2, Q(S.p)), v = Q(1, 2 * S.q); res = { R: { kind: "hole", value: v }, t: MR.qT(v) };
      return [{ tag: "substitute", eq: `${x} = ${MR.qT(A)}: &nbsp; ${fr(`√${MR.qT(q2)} − ${S.q}`, "0")} = ${fr("0", "0")}`, why: "0/0 is indeterminate: simplify first" },
        { tag: "conjugate", eq: `(${rad} − ${S.q})(${rad} + ${S.q}) = ${linH(MR, Q.neg(Q(S.p)))} − ${MR.qT(q2)} = <span class="c4">${linH(MR, A)}</span>`, why: "multiply top and bottom by the conjugate" },
        { tag: "cancel", eq: `${fr(`<span class="c4">${linH(MR, A)}</span>`, `(<span class="c4">${linH(MR, A)}</span>)(${rad} + ${S.q})`)} = ${fr("1", `${rad} + ${S.q}`)}`, why: `for ${x} ≠ ${MR.qT(A)}` },
        { tag: "limit", eq: `<span class="c5">${lim(x, MR.qT(A))} = ${fr("1", `${S.q} + ${S.q}`)} = ${res.t}</span>`, why: `√(${MR.qT(A)} ${S.p < 0 ? MI : "+"} ${Math.abs(S.p)}) = ${S.q}` }];
    }
    if (!a.n) { res = { R: { kind: "none" }, t: "undefined" }; return [{ tag: "substitute", eq: `1/<i>a</i> is undefined at <i>a</i> = 0`, why: "choose a ≠ 0" }]; }
    const m = Q(S.m), v = Q.div(Q.neg(m), Q.mul(a, a)); res = { R: { kind: "hole", value: v }, t: MR.qT(v) };
    return [{ tag: "substitute", eq: `${x} = ${MR.qT(a)}: &nbsp; ${fr(`${fr(S.m, parQ(MR, a))} − ${fr(S.m, parQ(MR, a))}`, "0")} = ${fr("0", "0")}`, why: "0/0 is indeterminate: simplify first" },
      { tag: "combine", eq: `${fr(S.m, x)} − ${fr(S.m, parQ(MR, a))} = ${fr(`${MR.qT(Q.neg(m))}<span class="c4">(${linH(MR, a)})</span>`, `${parQ(MR, a)}${x}`)}`, why: "common denominator a·x" },
      { tag: "cancel", eq: `${fr(`${MR.qT(Q.neg(m))}<span class="c4">(${linH(MR, a)})</span>`, `${parQ(MR, a)}${x}<span class="c4">(${linH(MR, a)})</span>`)} = ${fr(MR.qT(Q.neg(m)), `${parQ(MR, a)}${x}`)}`, why: `divide by ${linH(MR, a)}; ${x} ≠ ${MR.qT(a)}` },
      { tag: "limit", eq: `<span class="c5">${lim(x, MR.qT(a))} = ${fr(MR.qT(Q.neg(m)), `${parQ(MR, a)}·${parQ(MR, a)}`)} = ${res.t}</span>`, why: "substitute into the simplified form" }];
  }

  function evaluate(){
    const ls = lines(), A = kind === "conj" ? S.q * S.q - S.p : S.a, fin = res.R.kind === "hole" || res.R.kind === "value", Lv = fin ? Q.val(res.R.value) : 0;
    P = k.plane(c, { xmin: A - 5, xmax: A + 5, ymin: Lv - 5, ymax: Lv + 5, pad: k.split(c, host, { side: "right", frac: 0.48, hfrac: 0.5 }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(fx[kind], C.text, { w: 2.5, breaks: [A, 0] }); const done = ST.k >= ls.length - 1;
    if (fin) P.hole(A, Lv, C.violet); else if (res.R.kind === "vertical") P.vasym(A);
    pts[0].x = A; pts[1].clamp = [A - 5, A + 5, -1e9, 1e9]; if (!isFinite(fx[kind](pts[1].x))) pts[1].x = A + 1.5; pts[1].y = fx[kind](pts[1].x); D.draw(P);
    P.labels([{ text: "a", x: A, y: 0, color: C.amber, prefer: "s" }, ...(done && fin ? [{ text: `(${mi(MR.fmtN(A, 3))}, ${mi(res.t)})`, x: A, y: Lv, color: C.violet, prefer: "ne" }] : [])]);
    SP.set(ls, ST.k); k.guard(done ? [] : ls.slice(ST.k + 1).map(l => strip(l.eq)).concat([`= ${res.t}`]));
    const ar = `<span class="c1">${mi(A)}</span>`, eq = kind === "factor" ? `${lim("<i>x</i>", S.html("a"))} ${fr(`<i>x</i><sup>2</sup>${S.term("b", { v: "<i>x</i>" })}${S.term("c")}`, `<i>x</i> ${S.a < 0 ? "+" : MI} ${S.html("a", { fmt: v => String(Math.abs(v)) })}`)}`
      : kind === "conj" ? `${lim("<i>x</i>", ar)} ${fr(`√<span class="ov"><i>x</i>${S.term("p")}</span> − ${S.html("q")}`, `<i>x</i> ${A < 0 ? "+" : MI} <span class="c1">${Math.abs(A)}</span>`)}`
      : `${lim("<i>x</i>", S.html("a"))} ${fr(`${fr(S.html("m"), "<i>x</i>")} − ${fr(S.html("m"), S.html("a"))}`, `<i>x</i> ${S.a < 0 ? "+" : MI} ${S.html("a", { fmt: v => String(Math.abs(v)) })}`)}`;
    k.eqline(eq, "limit");
    ro({ title: "Evaluate the limit", rows: [{ lhs: "trace", v: `<i>f</i>(${mi(MR.fmtN(pts[1].x, 3))}) = ${mi(MR.fmtN(pts[1].y, 4))}` }, { lhs: "step", v: `${ST.k} of ${ls.length - 1}` }],
      landmark: { hit: done, big: done ? `limit: ${res.t}` : "Step to the limit", note: fin ? "Cancelling the common factor leaves a hole in the graph at the limit." : "A nonzero number over 0 means a vertical asymptote." },
      narr: kind === "factor" ? "Change c so that a stops being a zero of the top: 0/0 turns into an asymptote." : "Drag a: the hole slides along with the limit." });
  }

  function laws(){
    const a = S.a, Lq = Q(S.Lf), Mq = Q(S.Mg), n = S.n, cq = Q(S.cc), t = MR.qT;
    const cf = { sum: [x => lawF(x) + lawG(x), `${t(Lq)} + ${parQ(MR, Mq)} = ${t(Q.add(Lq, Mq))}`], cf: [x => S.cc * lawF(x), `${t(cq)} · ${parQ(MR, Lq)} = ${t(Q.mul(cq, Lq))}`],
      prod: [x => lawF(x) * lawG(x), `${parQ(MR, Lq)} · ${parQ(MR, Mq)} = ${t(Q.mul(Lq, Mq))}`], quot: [x => lawF(x) / lawG(x), Mq.n ? `${t(Lq)} / ${parQ(MR, Mq)} = ${t(Q.div(Lq, Mq))}` : "needs lim g ≠ 0"],
      pow: [x => lawF(x) ** n, `${parQ(MR, Lq)}<sup>${n}</sup> = ${t(Q.pow(Lq, n))}`], root: [x => Math.sqrt(lawF(x)), Lq.n >= 0 ? `√${t(Lq)} = ${MR.sqrtQStr(Lq)}` : "needs lim f ≥ 0"] }[comb];
    const ys = [S.Lf, S.Mg, cf[0](a + 1e-6)].filter(isFinite), lo = Math.min(...ys, 0) - 3, hi = Math.max(...ys, 0) + 3;
    P = k.plane(c, { xmin: a - 4, xmax: a + 4, ymin: Math.max(lo, -40), ymax: Math.min(hi, 40), pad: k.split(c, host, { off: true }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(lawF, C.cyan, { w: 2 }); P.curve(lawG, C.pink, { w: 2 }); P.curve(cf[0], C.green, { w: 2.5, breaks: [a] });
    const yv = cf[0](a + 1e-9); if (isFinite(yv)) P.hole(a, yv, C.green); P.hole(a, S.Lf, C.cyan); P.hole(a, S.Mg, C.pink);
    pts[0].x = a; pts[2].x = pts[3].x = a; pts[2].y = S.Lf; pts[3].y = S.Mg; D.draw(P);
    P.labels([...onLab(P, "f", lawF, 0.85, C.cyan), ...onLab(P, "g", lawG, 0.85, C.pink), { text: "a", x: a, y: 0, color: C.amber, prefer: "s" }]);
    k.eqline(`${lim("<i>x</i>", S.html("a"))} <i>f</i>(<i>x</i>) = ${S.html("Lf")}, &nbsp; ${lim("<i>x</i>", `<span class="c1">${mi(a)}</span>`)} <i>g</i>(<i>x</i>) = ${S.html("Mg")},<br><i>c</i> = ${S.html("cc")}, &nbsp; <i>n</i> = ${S.html("n")}`, "laws"); k.guard([]);
    const law = { sum: "sum law", cf: "constant multiple law", prod: "product law", quot: "quotient law", pow: "power law", root: "root law" }[comb], ok = !/needs/.test(cf[1]);
    ro({ title: "Limit laws", rows: [{ lhs: `<span class="c2">lim <i>f</i></span>`, v: t(Lq), cls: "c2" }, { lhs: `<span class="c3">lim <i>g</i></span>`, v: t(Mq), cls: "c3" }],
      landmark: { hit: ok, big: `${law}: ${cf[1]}`, note: ok ? "The limit of the combination is built from the two limits alone." : "This law does not apply: the limit has to be found another way." },
      narr: "Set lim g = 0 and pick f / g: the quotient law no longer applies." });
  }

  function squeeze(){
    const w = W(); P = k.plane(c, { xmin: -w, xmax: w, ymin: -w, ymax: w, pad: k.split(c, host, { off: true }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(x => -Math.abs(x), C.cyan, { w: 2 }); P.curve(x => Math.abs(x), C.pink, { w: 2 }); P.curve(sq, C.text, { w: 1.5, breaks: [0] });
    const p = pts[4]; p.clamp = [-w, w, -1e9, 1e9]; if (Math.abs(p.x) > w) p.x = w / 2; if (p.x === 0) p.x = w / 100; p.y = sq(p.x); P.hole(0, 0, C.green); D.draw(P);
    P.labels([...onLab(P, "|x|", Math.abs, 0.9, C.pink), ...onLab(P, "−|x|", x => -Math.abs(x), 0.9, C.cyan)]);
    k.eqline(`−|<i>x</i>| ≤ <i>x</i> sin(1/<i>x</i>) ≤ |<i>x</i>|, &nbsp; window ±2·10<sup>−${S.html("z")}</sup>`, "squeeze"); k.guard([]);
    const ax = Math.abs(p.x), f = v => mi(MR.fmtN(v, 6));
    ro({ title: "Squeeze theorem", rows: [{ lhs: "<i>x</i>", v: f(p.x), cls: "c1" }, { lhs: `<span class="c2">−|<i>x</i>|</span> ≤ <i>f</i>(<i>x</i>) ≤ <span class="c3">|<i>x</i>|</span>`, v: `${f(-ax)} ≤ ${f(p.y)} ≤ ${f(ax)}` }],
      landmark: { hit: ax < 0.001, big: `${lim("<i>x</i>", "0")} <i>x</i> sin(1/<i>x</i>) = 0`, note: "Both bounds go to 0, so the trapped function must too." },
      narr: "Zoom in twice and drag x close to 0: the wiggles never escape the two lines." });
  }

  k.loop(() => { c.begin(); pts.forEach((p, i) => { p.off = p.hidden = !(mode === "eval" ? i <= 1 : mode === "laws" ? i === 0 || i === 2 || i === 3 : i === 4); });
    if (mode === "eval") evaluate(); else if (mode === "laws") laws(); else squeeze(); });
  k.hint(hints.eval);
};

/* ================= pc-continuity ================= */
L["pc-continuity"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, c = k.canvas(), ro = ROmemo(k), host = k.dom();
  let mode = "three", P = null, defined = true;
  const S = k.vars([
    { key: "a", value: -1, min: -4, max: 4, step: 0.25, cls: "c1", label: "a" },
    { key: "s", value: 1, min: -3, max: 3, step: 0.5, cls: "c4", label: "break" },
    { key: "m1", value: 2, min: -3, max: 3, step: 0.5, cls: "c2", label: "left slope" },
    { key: "b1", value: -1, min: -9, max: 9, step: 0.5, cls: "c2", label: "left intercept" },
    { key: "cq", value: 0.5, min: -2, max: 2, step: 0.5, cls: "c3", label: "right x² coefficient" },
    { key: "b2", value: 2, min: -9, max: 9, step: 0.5, cls: "c3", label: "right constant" },
    { key: "v", value: 2.5, min: -9, max: 9, step: 0.5, cls: "c5", label: "f(break)" },
    { key: "kk", value: 2, min: -12, max: 12, step: 0.25, cls: "c5", label: "k" },
    { key: "p", value: -1, min: -9, max: 9, step: 1, cls: "c2", label: "p" },
    { key: "q", value: 3, min: -9, max: 9, step: 1, cls: "c3", label: "q" },
    { key: "t", value: 2, min: -3, max: 3, step: 1, cls: "c1", label: "break" },
  ], () => ST.reset());
  const fL = x => S.m1 * x + S.b1, fR = x => S.cq * x * x + S.b2, kL = x => S.kk * x + S.p, kR = x => x * x + S.q;
  // Classify gallery: pieces for MR.continuityAt (Poly or f), a, the curve and its features
  const P1 = c0 => Poly(c0.map(v => Q(v)));
  const items = [
    { name: "(x² − 1)/(x − 1)", a: 1, pieces: [{ p: P1([1, 1]), lo: null, hi: 1 }, { p: P1([1, 1]), lo: 1, hi: null }] },
    { name: "x + 1 (x ≠ 2), f(2) = 1", a: 2, pieces: [{ p: P1([1, 1]), lo: null, hi: 2 }, { p: P1([1]), lo: 2, hi: 2, loIn: true, hiIn: true }, { p: P1([1, 1]), lo: 2, hi: null }] },
    { name: "x (x < 1), x + 2 (x ≥ 1)", a: 1, pieces: [{ p: P1([0, 1]), lo: null, hi: 1 }, { p: P1([2, 1]), lo: 1, hi: null, loIn: true }] },
    { name: "|x|/x", a: 0, pieces: [{ p: P1([-1]), lo: null, hi: 0 }, { p: P1([1]), lo: 0, hi: null }] },
    { name: "1/(x − 2)²", a: 2, pieces: [{ f: x => 1 / (x - 2) ** 2, lo: null, hi: 2 }, { f: x => 1 / (x - 2) ** 2, lo: 2, hi: null }] },
    { name: "1/(x + 1)", a: -1, pieces: [{ f: x => 1 / (x + 1), lo: null, hi: -1 }, { f: x => 1 / (x + 1), lo: -1, hi: null }] },
    { name: "x² (x < 1), 2x − 1 (x ≥ 1)", a: 1, pieces: [{ p: P1([0, 0, 1]), lo: null, hi: 1 }, { p: P1([-1, 2]), lo: 1, hi: null, loIn: true }] },
    { name: "(x² − 4)/(x − 2) (x ≠ 2), f(2) = 4", a: 2, pieces: [{ p: P1([2, 1]), lo: null, hi: 2 }, { p: P1([4]), lo: 2, hi: 2, loIn: true, hiIn: true }, { p: P1([2, 1]), lo: 2, hi: null }] },
  ].map(it => Object.assign(it, { type: MR.continuityAt(it.pieces, it.a).type }));
  const ev = (pc, x) => (pc.p ? Poly.evalN(pc.p, x) : pc.f(x));
  const gal = x => { const it = qz.item, pc = it.pieces.find(pc => pc.lo !== pc.hi && (pc.lo === null || x > pc.lo) && (pc.hi === null || x < pc.hi)); return pc ? ev(pc, x) : NaN; };
  const qz = k.quiz({ items, seed: 9, render: () => "", check: (it, v) => it.type === v });
  const pts = [
    { x: -1, y: 0, fixY: true, snap: 0.25, clamp: [-4, 4, 0, 0], color: C.amber, name: "a on the x-axis" },
    { x: 1, y: 2, fixX: true, snap: 0.5, color: C.cyan, name: "end of the left piece" },
    { x: 1, y: 3, fixX: true, snap: 0.5, color: C.pink, name: "end of the right piece" },
    { x: 1, y: 3, fixX: true, snap: 0.5, color: C.green, name: "the value f(break)" },
    { x: 2, y: 0, fixY: true, snap: 1, clamp: [-3, 3, 0, 0], color: C.amber, name: "break on the x-axis" },
    { x: 0, y: 0, on: gal, keyStep: 0.05, color: C.amber, name: "trace point" },
  ];
  const D = k.drag(c, () => P, pts, (i, p) => {
    if (mode === "make") { if (i === 1 && S.t) S.set("kk", (p.y - S.p) / S.t); if (i === 2) S.set("q", Math.round(p.y - S.t * S.t)); if (i === 4) S.set("t", p.x); if (i !== 1) ST.reset(); return; }
    if (i === 0) S.set("a", p.x); if (i === 1) S.set("b1", p.y - S.m1 * S.s); if (i === 2) S.set("b2", p.y - S.cq * S.s * S.s); if (i === 3) S.set("v", p.y); }, { label: "Continuity" });
  const hints = { three: "Drag a along the axis; drag the piece ends and the value at the break.", make: "Scrub k (or drag the left end) until the pieces meet, then Step for the exact k.", classify: "Read the graph at x = a and pick the kind." };
  k.modes([["three", "Three checks"], ["make", "Make it continuous"], ["classify", "Classify"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); });
  k.group("three", () => k.check("f(break) defined", true, v => { defined = v; }));
  const ST = k.group("make", () => k.stepper(() => 3, () => {}));
  const KINDS = [["continuous", "Continuous"], ["removable", "Removable"], ["jump", "Jump"], ["infinite", "Infinite"]];
  k.group("classify", () => { KINDS.forEach(([v, l]) => k.button(l, () => qz.pick(v), "btn-s")); k.button("Next", () => qz.next(), "btn ghost"); });
  k.showGroup(mode); const SP = k.stepsPanel(host);
  const qt = MR.qT, typeT = { continuous: "continuous", removable: "removable discontinuity", jump: "jump discontinuity", infinite: "infinite discontinuity" };

  function three(){
    const s = S.s, a = S.a, sq = Q(s), Lq = Q.add(Q.mul(Q(S.m1), sq), Q(S.b1)), Rq = Q.add(Q.mul(Q(S.cq), Q.mul(sq, sq)), Q(S.b2));
    const pcs = [{ p: Poly([Q(S.b1), Q(S.m1)]), lo: null, hi: s }, ...(defined ? [{ p: Poly([Q(S.v)]), lo: s, hi: s, loIn: true, hiIn: true }] : []), { p: Poly([Q(S.b2), 0, Q(S.cq)]), lo: s, hi: null }];
    const r = MR.continuityAt(pcs, a), ys = [Q.val(Lq), Q.val(Rq), S.v, fL(-4), fR(4), fR(0)], lo = Math.max(-12, Math.min(...ys) - 1.5), hi = Math.min(14, Math.max(...ys) + 1.5);
    P = k.plane(c, { xmin: -4, xmax: 4, ymin: Math.min(lo, -1), ymax: Math.max(hi, 1), pad: k.split(c, host, { off: true }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(fL, C.cyan, { to: s - 1e-9, w: 2.5 }); P.curve(fR, C.pink, { from: s + 1e-9, w: 2.5 });
    P.hole(s, Q.val(Lq), C.cyan); P.hole(s, Q.val(Rq), C.pink); if (!Q.eq(Lq, Rq)) P.seg(s, Q.val(Lq), s, Q.val(Rq), k.alpha(C.violet, 0.8), 1.5, [3, 4]);
    P.seg(a, P.ymin, a, P.ymax, k.alpha(C.amber, 0.4), 1, [2, 5]);
    Object.assign(pts[0], { x: a }); Object.assign(pts[1], { x: s, y: Q.val(Lq) }); Object.assign(pts[2], { x: s, y: Q.val(Rq) }); Object.assign(pts[3], { x: s, y: S.v }); pts[3].off = pts[3].hidden = !defined; D.draw(P);
    P.labels([{ text: "a", x: a, y: 0, color: C.amber, prefer: "s" }]);
    const val = r.value === undefined ? "undefined" : qt(r.value), L1 = r.left, R1 = r.right, ok = (b, t) => `<span class="${b ? "c5" : "c4"}">${b ? "✓" : "✗"} ${t}</span>`;
    k.eqline(`<i>f</i>(<i>x</i>) = ${S.term("m1", { v: "<i>x</i>", first: true })}${S.term("b1")} (<i>x</i> &lt; ${S.html("s")}), &nbsp; ${defined ? S.html("v") : "undefined"} (<i>x</i> = <span class="c4">${mi(s)}</span>),<br>${S.term("cq", { v: "<i>x</i><sup>2</sup>", first: true })}${S.term("b2")} (<i>x</i> &gt; <span class="c4">${mi(s)}</span>); &nbsp; <i>a</i> = ${S.html("a")}`, "f"); k.guard([]);
    ro({ title: `Three checks at a = ${mi(a)}`, rows: [{ lhs: "1", v: ok(r.defined, `<i>f</i>(<i>a</i>) = ${val}`) }, { lhs: "2", v: ok(r.limExists, `left ${qt(L1)}, right ${qt(R1)}`) }, { lhs: "3", v: ok(r.equal, r.equal ? "limit = f(a)" : "limit ≠ f(a)") }],
      landmark: { hit: r.equal, big: typeT[r.type] || r.type, note: a === s ? "At the break the pieces must meet and the value must sit where they meet." : "Away from the break one polynomial piece is in charge, so f is continuous there." },
      narr: "Drag a onto the break, then drag the ends together and the value onto them." });
  }

  function make(){
    const s = S.t, sq = Q(s), Rq = Q.add(Q.mul(sq, sq), Q(S.q)), Lq = Q.add(Q.mul(Q(S.kk), sq), Q(S.p)), gap = Q.sub(Rq, Lq), kx = s ? Q.div(Q.sub(Rq, Q(S.p)), sq) : null;
    const ys = [Q.val(Rq), Q.val(Lq), kL(-4), kR(4)], lo = Math.max(-25, Math.min(...ys) - 2), hi = Math.min(30, Math.max(...ys) + 2);
    P = k.plane(c, { xmin: -4, xmax: 4, ymin: lo, ymax: hi, pad: k.split(c, host, { side: "right", frac: 0.46, hfrac: 0.46 }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); P.curve(kL, C.cyan, { to: s - 1e-9, w: 2.5 }); P.curve(kR, C.pink, { from: s, w: 2.5 }); P.hole(s, Q.val(Lq), C.cyan);
    if (gap.n) P.seg(s, Q.val(Lq), s, Q.val(Rq), C.violet, 2, [3, 4]);
    Object.assign(pts[1], { x: s, y: Q.val(Lq) }); Object.assign(pts[2], { x: s, y: Q.val(Rq) }); pts[4].x = s; D.draw(P);
    P.labels([{ text: "break", x: s, y: 0, color: C.amber, prefer: "s" }]);
    const kT = kx ? qt(kx) : "", sp = parQ(MR, sq), lines = [{ tag: "value", eq: `<span class="c3"><i>f</i>(${mi(s)}) = ${sp}<sup>2</sup> ${S.q < 0 ? MI : "+"} ${Math.abs(S.q)} = ${qt(Rq)}</span>`, why: "the right piece includes the break" },
      { tag: "left", eq: `<span class="c2">${lim("<i>x</i>", mi(s) + "<sup>−</sup>")} <i>f</i>(<i>x</i>) = ${sp}<i>k</i> ${S.p < 0 ? MI : "+"} ${Math.abs(S.p)}</span>`, why: "substitute the break into the left piece" },
      s ? { tag: "solve", eq: `${sp}<i>k</i> ${S.p < 0 ? MI : "+"} ${Math.abs(S.p)} = ${qt(Rq)} ⇒ <span class="c5"><i>k</i> = ${kT}</span>`, why: "the two ends must meet" }
        : { tag: "solve", eq: Q.eq(Q(S.p), Rq) ? "every <i>k</i> works" : "no <i>k</i> works", why: "at x = 0 the term kx is 0, so k cannot move the left end" },
      { tag: "check", eq: s ? `${sp} · ${parQ(MR, kx)} ${S.p < 0 ? MI : "+"} ${Math.abs(S.p)} = ${qt(Rq)} = <i>f</i>(${mi(s)})` : `left end ${S.p}, value ${qt(Rq)}`, why: "both one-sided limits equal the value" }];
    SP.set(lines, ST.k); k.guard(ST.k >= 3 ? [] : lines.slice(ST.k + 1).map(l => strip(l.eq)).concat(kT ? [`k = ${kT}`] : []));
    k.eqline(`<i>f</i>(<i>x</i>) = ${S.html("kk")}<i>x</i>${S.term("p")} (<i>x</i> &lt; ${S.html("t")}), &nbsp; <i>x</i><sup>2</sup>${S.term("q")} (<i>x</i> ≥ <span class="c1">${mi(s)}</span>)`, "f");
    ro({ title: "Make it continuous", rows: [{ lhs: `<span class="c2">left end</span>`, v: qt(Lq), cls: "c2" }, { lhs: `<span class="c3">right end</span>`, v: qt(Rq), cls: "c3" }, { lhs: `<span class="c4">gap</span>`, v: qt(Q.abs(gap)), cls: "c4" }],
      landmark: { hit: !gap.n, big: gap.n ? "The pieces do not meet yet" : "The pieces meet: continuous everywhere", note: "Both pieces are polynomials, so only the break can fail." },
      narr: "Change p or q and the right k changes with them: Step to solve it exactly." });
  }

  function classify(){
    const it = qz.item, a = it.a, st = qz.state || {}, r = MR.continuityAt(it.pieces, a), qv = v => (v && v.isQ ? Q.val(v) : v);
    P = k.plane(c, { xmin: a - 4, xmax: a + 4, ymin: -5, ymax: 6, pad: k.split(c, host, { off: true }), xlabel: "x", ylabel: "y" });
    P.grid(); P.axes(); it.pieces.forEach(pc => { if (pc.lo !== pc.hi || pc.lo === null) P.curve(x => ev(pc, x), C.text, { from: pc.lo ?? undefined, to: pc.hi ?? undefined, w: 2.5, breaks: [a] }); });
    if (it.type === "infinite") P.vasym(a); else { [qv(r.left), qv(r.right)].forEach(y => P.hole(a, y, C.violet)); if (r.value !== undefined) P.dot(a, qv(r.value), C.text); }
    const p = pts[5]; p.clamp = [a - 4, a + 4, -1e9, 1e9]; if (!isFinite(gal(p.x)) || Math.abs(p.x - a) > 4) p.x = a + 1.5; p.y = gal(p.x); D.draw(P);
    P.labels([{ text: "a", x: a, y: 0, color: C.amber, prefer: "s" }]);
    const ans = `${typeT[it.type]} at x = ${mi(a)}`; k.guard(st.answered ? [] : [ans]); k.eqline(`<i>f</i>(<i>x</i>) = ${mi(it.name)}, &nbsp; <i>a</i> = <span class="c1">${mi(a)}</span>`, "f");
    const why = { continuous: "both one-sided limits equal f(a)", removable: "the limit exists but f(a) is missing or elsewhere", jump: "the one-sided limits are finite and differ", infinite: "the outputs grow without bound" }[it.type];
    ro({ title: `Question ${qz.index + 1} of ${qz.total}`, rows: [{ lhs: "trace", v: `<i>f</i>(${mi(MR.fmtN(p.x, 2))}) = ${mi(MR.fmtN(p.y, 3))}` }, { lhs: "score", v: `${qz.score.right} / ${qz.score.tries}` }],
      landmark: { hit: !!st.correct, big: st.answered ? `${st.correct ? "Right" : "Not quite"}: ${ans}` : "What happens at x = a?", note: st.answered ? `It is ${why}.` : "Compare the two sides with the value at a." },
      narr: st.answered ? "Press Next for another graph." : "Drag the trace point toward a from each side." });
  }

  k.loop(() => { c.begin(); pts.forEach((p, i) => { p.off = p.hidden = !(mode === "three" ? i <= 3 : mode === "make" ? i === 1 || i === 2 || i === 4 : i === 5); });
    if (mode === "three") three(); else if (mode === "make") make(); else classify(); });
  k.hint(hints.three);
};

/* ================= pc-tangent-rate ================= */
L["pc-tangent-rate"] = k => {
  window.MathKit.attach(k); const MR = k.MR, Q = MR.Q, Poly = MR.Poly, C = k.C, c = k.canvas(), ro = ROmemo(k), host = k.dom(), hostT = k.dom(), qt = MR.qT;
  let mode = "sec", P = null;
  const S = k.vars([
    { key: "c3", value: 0, min: -2, max: 2, step: 0.5, cls: "c3", label: "x³ coefficient" },
    { key: "c2", value: 0.5, min: -4, max: 4, step: 0.5, cls: "c3", label: "x² coefficient" },
    { key: "c1", value: -2, min: -6, max: 6, step: 0.5, cls: "c3", label: "x coefficient" },
    { key: "c0", value: 3, min: -6, max: 6, step: 0.5, cls: "c3", label: "constant" },
    { key: "a", value: 3, min: -3, max: 3, step: 0.5, cls: "c1", label: "a" },
    { key: "h", value: 1, min: -2, max: 2, step: 0.05, typeStep: 0.0001, cls: "c2", label: "h" },
    { key: "s0", value: 64, min: 0, max: 200, step: 4, cls: "c3", label: "initial height" },
    { key: "v0", value: 48, min: 0, max: 96, step: 8, cls: "c3", label: "initial velocity" },
    { key: "t", value: 0.5, min: 0, max: 6, step: 0.25, cls: "c1", label: "t" },
  ], () => ST.reset());
  const poly = () => mode === "vel" ? Poly([Q(S.s0), Q(S.v0), Q(-16)]) : Poly([Q(S.c0), Q(S.c1), Q(S.c2), Q(S.c3)]);
  const f = x => Poly.evalN(poly(), x), A = () => (mode === "vel" ? S.t : S.a), setA = v => S.set(mode === "vel" ? "t" : "a", v);
  const pts = [
    { x: 2, y: 0, on: x => f(x), snap: 0.25, color: C.amber, name: "P on the curve (sets a)" },
    { x: 3, y: 0, on: x => f(x), snap: 0.05, keyStep: 0.05, color: C.cyan, name: "Q on the curve (sets h)" },
  ];
  const D = k.drag(c, () => P, pts, (i, p) => { if (i === 0) { setA(p.x); ST.reset(); } else S.set("h", Math.round((p.x - A()) * 1e4) / 1e4); }, { label: "Secant" });
  const hints = { sec: "Drag Q along the curve into P, or type a tiny h.", alg: "Scrub the coefficients or drag P, then Step through the difference quotient.", vel: "Drag the time point, then shrink h toward 0." };
  k.modes([["sec", "Secant → tangent"], ["alg", "Algebra"], ["vel", "Velocity"]], mode, m => { mode = m; k.showGroup(m); k.hint(hints[m]); });
  k.group("sec", () => k.button("Shrink h ÷10", () => S.set("h", Math.round(S.h * 1e3) / 1e4 || 0.0001)));
  k.group("vel", () => k.button("Shrink h ÷10", () => S.set("h", Math.round(S.h * 1e3) / 1e4 || 0.0001)));
  const ST = k.group("alg", () => k.stepper(() => 5, () => k.hint("")));
  k.showGroup(mode); const SP = k.stepsPanel(host);
  const dec = q => mi(MR.fmtN(Q.val(q), 6));

  // the curve, P, Q, secant and (optionally) tangent; returns {a, h, fa, sec (Q | null), m (Q)}
  function scene(pad, tangent, win){
    const p = poly(), a = A(), aq = Q(a), h = S.h, hq = Q(h), fa = Poly.eval(p, aq), m = MR.slopeAt(p, aq), sec = h ? Poly.eval(MR.diffQuot(p, aq), hq) : null;
    const w = win || { xmin: a - 3.5, xmax: a + 3.5, ymin: Q.val(fa) - 6, ymax: Q.val(fa) + 6 };
    P = k.plane(c, Object.assign({ pad, xlabel: mode === "vel" ? "t" : "x", ylabel: mode === "vel" ? "s" : "y" }, w));
    P.grid(); P.axes(); P.curve(f, C.pink, { w: 2.5 });
    if (sec) P.secant(f, a, a + h, C.violet); if (tangent) P.seg(P.xmin, Q.val(fa) + Q.val(m) * (P.xmin - a), P.xmax, Q.val(fa) + Q.val(m) * (P.xmax - a), C.green, 2, [7, 5]);
    pts[0].x = a; pts[0].y = Q.val(fa); pts[1].x = a + h; pts[1].y = f(a + h); pts[0].clamp = pts[1].clamp = [w.xmin, w.xmax, -1e9, 1e9]; D.draw(P);
    P.labels([{ text: "P", x: a, y: Q.val(fa), color: C.amber, prefer: "nw" }, ...(h ? [{ text: "Q", x: a + h, y: f(a + h), color: C.cyan, prefer: "se" }] : [])]);
    return { p, a, aq, h, fa, m, sec };
  }
  const table = (p, aq) => `<table class="b9t"><tr><th class="c2">h</th><th class="c4">secant slope</th></tr>${[0.1, 0.01, 0.001, -0.001, -0.01, -0.1].map(h => `<tr><td>${mi(h)}</td><td>${dec(Poly.eval(MR.diffQuot(p, aq), Q(h)))}</td></tr>`).join("")}</table>`;

  function secant(){
    const r = scene((k.split(c, host, { off: true }), k.split(c, hostT, { side: "right", frac: 0.3, hfrac: 0.36 })), Math.abs(S.h) <= 0.01); hostT.innerHTML = table(r.p, r.aq);
    k.eqline(`<i>f</i>(<i>x</i>) = ${S.term("c3", { v: "<i>x</i><sup>3</sup>", first: true })}${S.term("c2", { v: "<i>x</i><sup>2</sup>" })}${S.term("c1", { v: "<i>x</i>" })}${S.term("c0")}, &nbsp; <i>a</i> = ${S.html("a")}, &nbsp; <i>h</i> = ${S.html("h")}`, "f"); k.guard([]);
    const near = Math.abs(S.h) <= 0.01;
    ro({ title: "Secant to tangent", rows: [{ lhs: `<span class="c1"><i>f</i>(<i>a</i>)</span>`, v: qt(r.fa) }, { lhs: `<span class="c4">secant slope</span>`, v: r.sec ? `${qt(r.sec)}${r.sec.d > 1 ? ` ≈ ${dec(r.sec)}` : ""}` : "h = 0: no secant", cls: "c4" }],
      landmark: { hit: near, big: near ? `tangent slope <i>f</i> ′(${mi(r.a)}) = ${qt(r.m)}` : "Slide Q into P", note: "Secant slopes from both sides close in on the tangent slope." },
      narr: "Make h negative: Q jumps to the left of P and the slopes approach from the other side." });
  }

  function algebra(){
    const r = scene((k.split(c, hostT, { off: true }), k.split(c, host, { side: "right", frac: 0.5, hfrac: 0.5 })), ST.k >= 4), hv = "<i>h</i>", aT = parQ(MR, r.aq);
    const fah = Poly.compose(r.p, Poly([r.aq, 1])), diff = Poly.sub(fah, Poly([r.fa])), dq = MR.diffQuot(r.p, r.aq), b = Q.sub(r.fa, Q.mul(r.m, r.aq));
    const ph = q => MR.polyH(q, hv) || "0", lines = [{ tag: "f(a)", eq: `<i>f</i>(${aT}) = ${qt(r.fa)}`, why: "the point P" },
      { tag: "expand", eq: `<i>f</i>(${aT} + ${hv}) = ${ph(fah)}`, why: "substitute a + h for x" },
      { tag: "subtract", eq: `<i>f</i>(${aT} + ${hv}) − <i>f</i>(${aT}) = ${ph(diff)}`, why: "the constants cancel" },
      { tag: "divide", eq: `<span class="c4">${fr(`<i>f</i>(${aT} + ${hv}) − <i>f</i>(${aT})`, hv)} = ${ph(dq)}</span>`, why: "every term had a factor h" },
      { tag: "h → 0", eq: `<span class="c5"><i>f</i> ′(${mi(r.a)}) = ${qt(r.m)}</span>`, why: "the terms with h vanish" },
      { tag: "tangent", eq: `<i>y</i> = ${MR.polyH(Poly([b, r.m])) || "0"}`, why: `y − ${parQ(MR, r.fa)} = ${qt(r.m)}(x − ${aT})` }];
    SP.set(lines, ST.k); k.guard(ST.k >= 5 ? [] : lines.slice(ST.k + 1).map(l => strip(l.eq)));
    k.eqline(`<i>f</i>(<i>x</i>) = ${S.term("c3", { v: "<i>x</i><sup>3</sup>", first: true })}${S.term("c2", { v: "<i>x</i><sup>2</sup>" })}${S.term("c1", { v: "<i>x</i>" })}${S.term("c0")}, &nbsp; <i>a</i> = ${S.html("a")}`, "f");
    ro({ title: "Difference quotient", rows: [{ lhs: "step", v: `${ST.k} of 5` }], landmark: { hit: ST.k >= 4, big: ST.k >= 4 ? `slope ${qt(r.m)}` : "Step to the slope", note: "Divide by h before letting h go to 0, never after." },
      narr: "Add a cubic term: the quotient gains an h² term, and it still vanishes as h → 0." });
  }

  function velocity(){
    const p = poly(), T = Math.max(...Poly.realRoots(p).map(r => r.x).filter(x => x > 0), 1), top = Math.max(S.s0, S.s0 + S.v0 * S.v0 / 64);
    if (S.t > T) S.set("t", Math.floor(T * 4) / 4);
    const r = scene((k.split(c, hostT, { off: true }), k.split(c, host, { off: true })), Math.abs(S.h) <= 0.01, { xmin: -0.3, xmax: T + 0.4, ymin: -top * 0.08, ymax: top * 1.15 + 4 });
    P.seg(r.a, 0, r.a, Q.val(r.fa), k.alpha(C.amber, 0.5), 1.5, [3, 4]);
    k.eqline(`<i>s</i>(<i>t</i>) = ${S.html("s0")} + ${S.html("v0")}<i>t</i> − 16<i>t</i><sup>2</sup> ft, &nbsp; <i>t</i> = ${S.html("t")} s, &nbsp; <i>h</i> = ${S.html("h")}`, "s"); k.guard([]);
    const near = Math.abs(S.h) <= 0.01, v = r.m;
    ro({ title: "Velocity of a thrown ball", rows: [{ lhs: `<span class="c1"><i>s</i>(<i>t</i>)</span>`, v: `${qt(r.fa)} ft` }, { lhs: `<span class="c4">average velocity</span>`, v: r.sec ? `${qt(r.sec)} ft/s` : "h = 0", cls: "c4" }],
      landmark: { hit: near, big: near ? `<i>v</i>(${mi(r.a)}) = ${qt(v)} ft/s` : "Shrink h to read the velocity", note: Q.val(v) > 0 ? "Positive: the ball is still rising." : Q.val(v) < 0 ? "Negative: the ball is falling." : "Zero: the top of the flight." },
      narr: "Find the time when the velocity is 0: that is the highest point." });
  }

  k.loop(() => { c.begin(); if (mode === "sec") secant(); else if (mode === "alg") algebra(); else velocity(); });
  k.css("b9t", ".b9t{border-collapse:collapse;font-size:13px;width:100%}.b9t td,.b9t th{padding:2px 6px;text-align:right;white-space:nowrap}.b9t th{font-weight:500}");
  k.hint(hints.sec);
};
})();
