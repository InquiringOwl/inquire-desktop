/* ============ Labs: Precalculus, batch B6 (partial fractions, determinants and Cramer's rule, inverse matrices) ============ */
(function(){
const L = window.LABS, MI = "−";
const I = s => `<i>${s}</i>`, SUBS = "₀₁₂₃₄₅₆₇₈₉", sub = n => String(n).split("").map(d => SUBS[+d]).join("");
const css = k => k.css("pcb6", `.pcb6{font:400 17px/1.4 var(--math)}.pcb6 .blk{margin:2px 0 10px;white-space:nowrap;overflow-x:auto}
.pcb6 .nm{font:600 11px var(--ui);letter-spacing:.1em;color:var(--faint);text-transform:uppercase;display:block;margin-bottom:2px;white-space:normal}
.pcb6 .mat td{min-width:1.3em}.pcb6 .mat td.bar{border-right-color:var(--violet)}.pcb6 td.dim{opacity:.3}
.pcb6 td.hm{background:color-mix(in srgb,var(--amber) 18%,transparent)}.pcb6 td.hx{box-shadow:inset 0 0 0 1.5px var(--violet)}
.pcb6 td.h5{background:color-mix(in srgb,var(--green) 22%,transparent)}.pcb6 td.h1{background:color-mix(in srgb,var(--amber) 16%,transparent)}
.pcb6 .cov{text-decoration:line-through;text-decoration-color:var(--amber);opacity:.55}
.pcb6 .big .mat{font-size:1.25em}.pcb6 .fb{font:400 13px/1.4 var(--ui);color:var(--muted);margin:2px 0 8px;white-space:normal}`);
const qf = k => v => k.MR.qT(k.MR.Q(v));
const sgnF = k => v => (v < 0 ? MI + " " : "+ ") + qf(k)(Math.abs(v));
const once = (el, html, st) => { if (st.h !== html) { el.innerHTML = html; st.h = html; } };
// steps panel: phones show a window of 3 lines around the current one
const spSet = (c, SP, ls, cur) => { if (c.w >= 600) return SP.set(ls, cur); const a = Math.max(0, Math.min(cur, ls.length - 1) - 1); SP.set(ls.slice(a, a + 3), cur - a); };
const poly = (c, P, pts, fill, stroke) => { const g = c.g; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(P.X(x), P.Y(y)) : g.moveTo(P.X(x), P.Y(y)))); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = 2; g.stroke(); } };
// fraction-like display of a typed guess (3/2 rather than 1.5)
const niceT = (k, v) => { for (let d = 1; d <= 60; d++) if (Math.abs(v * d - Math.round(v * d)) < 1e-6) return k.MR.qT(k.MR.Q(Math.round(v * d), d)); return k.fmt(v, 3); };

/* ---------- pc-partial-fractions ---------- */
L["pc-partial-fractions"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, Poly = MR.Poly, c = k.canvas(), host = k.dom(); host.classList.add("pcb6");
  const top = document.createElement("div"), st0 = {}; host.appendChild(top); const SP = k.stepsPanel(host);
  const PRE = { lin: [0, 5, -4, 2, -1, 0, 4], rep: [3, 1, 2, -1, 1, 0, 4], quad: [1, 4, 5, 1, 0, 0, 4] }; // n2 n1 n0 r1 r2 p q
  const gf = v => niceT(k, v), sg = sgnF(k), rootF = v => (v < 0 ? "+ " : MI + " ") + qf(k)(Math.abs(v));
  const S = k.vars([["n2", "c1", "x² coefficient"], ["n1", "c1", "x coefficient"], ["n0", "c1", "constant"]].map(([key, cls, label]) => ({ key, value: 0, min: -40, max: 40, cls, label: "numerator " + label }))
    .concat([{ key: "r1", value: 2, min: -5, max: 5, cls: "c2", label: "root of factor 1", typeStep: 0.5 }, { key: "r2", value: -1, min: -5, max: 5, cls: "c3", label: "root of factor 2", typeStep: 0.5 },
      { key: "p", value: 0, min: -4, max: 4, cls: "c3", label: "x coefficient of the quadratic" }, { key: "q", value: 4, min: 1, max: 9, cls: "c3", label: "constant of the quadratic" },
      { key: "gA", value: 0, min: -99, max: 99, cls: "c5", label: "your A", typeStep: 1e-6, fmt: gf }, { key: "gB", value: 0, min: -99, max: 99, cls: "c5", label: "your B", typeStep: 1e-6, fmt: gf }, { key: "gC", value: 0, min: -99, max: 99, cls: "c5", label: "your C", typeStep: 1e-6, fmt: gf }]),
    (key, v) => { if (key[0] === "g") { fb = ""; return; }
      if (cs !== "quad" && (key === "r1" || key === "r2") && S.r1 === S.r2) S.set(key, v < 5 ? v + 1 : v - 1);
      if ((key === "p" || key === "q") && S.p * S.p >= 4 * S.q) S.set("q", Math.floor(S.p * S.p / 4) + 1);
      build(); });
  let cs = "lin", mode = "dec", cov = 0, PF, fs, N, fb = "", shown = false, cur = 0, ST, P = null;
  const load = () => PRE[cs].forEach((v, i) => S.set(["n2", "n1", "n0", "r1", "r2", "p", "q"][i], v));
  const fac = r => Poly([Q.neg(Q(r)), 1]), quad = () => Poly([S.q, S.p, 1]);
  const facH = (f, m) => { const s = Poly.deg(f) === 2 ? `(${MR.polyH(f)})` : f[0].n === 0 ? I("x") : `(${MR.polyH(f)})`; return m > 1 ? `${s}<sup>${m}</sup>` : s; };
  const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
  const termCls = i => (i ? "c3" : "c2");
  function build(){
    N = Poly(cs === "lin" ? [S.n0, S.n1] : [S.n0, S.n1, S.n2]);
    fs = cs === "lin" ? [{ p: fac(S.r1), m: 1 }, { p: fac(S.r2), m: 1 }] : cs === "rep" ? [{ p: fac(S.r1), m: 1 }, { p: fac(S.r2), m: 2 }] : [{ p: fac(S.r1), m: 1 }, { p: quad(), m: 1 }];
    PF = MR.partialFractions(N, fs); PF.terms.forEach(t => (t.fi = fs.findIndex(f => Poly.eq(f.p, t.den))));
    if (cs === "quad") cov = 0; if (ST) ST.reset(); cur = 0; shown = false; fb = ""; guard(); }
  const guard = () => k.guard(mode === "turn" && PF.sol.kind === "unique" ? PF.unknowns.map((u, i) => `${u} = ${MR.qT(PF.sol.x[i])}`) : []);
  const D = () => PF.D, fN = x => Poly.evalN(N, x) / Poly.evalN(PF.D, x);
  const termNum = (t, val) => { if (!val) return Poly.deg(t.den) === 2 ? `${t.names[0]}${I("x")} + ${t.names[1]}` : t.names[0]; return MR.polyH(t.num); };
  const formH = val => PF.terms.map((t, i) => { const num = val ? t.num : null, neg = num && Poly.deg(num) <= 0 && num[0] && num[0].n < 0;
    const body = fr(val ? (neg ? MR.polyH(Poly.scale(num, Q(-1))) : MR.polyH(num)) : termNum(t), facH(t.den, t.power));
    return `${i ? (neg ? ` ${MI} ` : " + ") : neg ? MI : ""}<span class="${termCls(t.fi)}">${body}</span>`; }).join("");
  const otherH = t => fs.map((f, i) => { const m = f.m - (i === t.fi ? t.power : 0); return m > 0 ? facH(f.p, m) : ""; }).join("");
  const clearH = () => PF.terms.map((t, i) => `${i ? " + " : ""}<span class="${termCls(t.fi)}">${Poly.deg(t.den) === 2 ? `(${termNum(t)})` : t.names[0]}</span>${otherH(t)}`).join("");
  const solH = () => PF.unknowns.map((u, i) => `${u} = ${MR.qH(PF.sol.x[i]).replace(/^<span class="m">|<\/span>$/g, "")}`).join(", ");
  const denH = () => fs.map(f => facH(f.p, f.m)).join("");
  const lines = () => [{ tag: "form", eq: `${fr(MR.polyH(N), denH())} = ${formH(false)}`, why: cs === "lin" ? "One constant over each distinct linear factor." : cs === "rep" ? "A repeated factor gets one term for each power up to its multiplicity." : "An irreducible quadratic factor gets a linear numerator Bx + C." },
    { tag: "clear", eq: `${MR.polyH(N)} = ${clearH()}`, why: "Multiply both sides by the whole denominator." },
    { tag: "system", eq: `${MR.matH(PF.rows, { aug: 1, cls: (i, j) => (j === PF.unknowns.length ? "c4" : "") })} &nbsp;<span class="dim">(${PF.unknowns.join(", ")})</span>`, why: `Expand and equate the coefficients of ${["1", "x", "x²"].slice(0, PF.rows.length).reverse().join(", ")}.` },
    { tag: "solve", eq: `<span class="c5">${solH()}</span>`, why: "Row reduce the system (or substitute the roots)." },
    { tag: "result", eq: `${fr(MR.polyH(N), denH())} = ${formH(true)}`, why: "Check: the pieces recombine to the original fraction." }];
  const covInfo = () => { const f = fs[cov], r = Q(cov ? S.r2 : S.r1), rest = Poly.divmod(PF.D, Poly.pow(f.p, f.m)).q, t = PF.terms.filter(t => t.fi === cov).pop();
    return { r, rest, name: t.names[0], nr: Poly.eval(N, r), dr: Poly.eval(rest, r), v: Q.div(Poly.eval(N, r), Poly.eval(rest, r)), f }; };
  const hints = { dec: "Press Step, scrub a number, or drag a root", cov: "Drag a root along the x-axis", turn: "Type each constant into the pieces, then Check" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); build(); };
  k.select("Denominator", [["lin", "distinct linear"], ["rep", "repeated linear"], ["quad", "irreducible quadratic"]], cs, v => { cs = v; load(); build(); });
  k.modes([["dec", "Decompose"], ["cov", "Cover-up"], ["turn", "Your turn"]], mode, setMode);
  k.group("dec", () => { ST = k.stepper(() => 4, v => { cur = v; }, { ms: 1400 }); });
  k.group("cov", () => k.button("Cover the other factor", () => { cov = cs === "quad" ? 0 : 1 - cov; }, "btn ghost"));
  k.group("turn", () => { k.button("Check", () => { const ok = PF.unknowns.map((u, i) => Math.abs(S["g" + u] - Q.val(PF.sol.x[i])) < 1e-6); shown = ok.every(Boolean); fb = PF.unknowns.map((u, i) => `${u} ${ok[i] ? "✓" : "✗"}`).join(" · "); });
    k.button("Show", () => { shown = true; fb = ""; }, "btn ghost");
    k.button("New problem", () => { const R = () => [-4, -3, -2, -1, 1, 2, 3, 4][Math.floor(Math.random() * 8)]; let a = R(), b = R(); while (b === a) b = R();
      S.set("r1", a); S.set("r2", b); if (cs === "quad") { S.set("p", [-2, 0, 2][Math.floor(Math.random() * 3)]); S.set("q", 2 + Math.floor(Math.random() * 4)); }
      build(); let num = Poly([0]); PF.terms.forEach(t => { const other = Poly.divmod(PF.D, Poly.pow(t.den, t.power)).q, top = Poly.deg(t.den) === 2 ? Poly([R(), R()]) : Poly([R()]); num = Poly.add(num, Poly.mul(top, other)); });
      ["n0", "n1", "n2"].forEach((key, i) => S.set(key, num[i] ? Q.val(num[i]) : 0)); ["gA", "gB", "gC"].forEach(g => S.set(g, 0)); build(); }, "btn ghost"); });
  const rootPts = [{ x: 0, y: 0, color: C.cyan, name: "root of factor 1", snap: 1, fixY: true, clamp: [-5, 5, 0, 0] }, { x: 0, y: 0, color: C.pink, name: "root of factor 2", snap: 1, fixY: true, clamp: [-5, 5, 0, 0] }];
  const Dg = k.drag(c, () => P, rootPts, (i, p) => { const key = i ? "r2" : "r1", other = S[i ? "r1" : "r2"]; if (p.x === other && cs !== "quad") return; S.set(key, p.x); build(); }, { label: "Roots of the linear factors" });
  load(); setMode(mode);
  k.loop(() => {
    c.begin(); const ok = PF.sol.kind === "unique";
    const numH = cs === "lin" ? `${S.html("n1")}${I("x")} ${S.html("n0", { fmt: sg })}` : `${S.html("n2")}${I("x")}<sup>2</sup> ${S.html("n1", { fmt: sg })}${I("x")} ${S.html("n0", { fmt: sg })}`;
    const dH = `(${I("x")} ${S.html("r1", { fmt: rootF })})` + (cs === "quad" ? `(${I("x")}<sup>2</sup> ${S.html("p", { fmt: sg })}${I("x")} ${S.html("q", { fmt: sg })})` : `(${I("x")} ${S.html("r2", { fmt: rootF })})${cs === "rep" ? "<sup>2</sup>" : ""}`);
    k.eqline(`${I("f")}(${I("x")}) = ${fr(numH, dH)}`);
    const pad = k.split(c, host, { side: "left", frac: 0.47, hfrac: 0.5 });
    let html = "";
    if (mode === "dec") { spSet(c, SP, lines(), cur); SP.el.style.display = ""; }
    else { SP.el.style.display = "none";
      if (mode === "cov") { const ci = covInfo(), cl = j => termCls(j);
        const parts = fs.map((f, j) => j === cov ? `<span class="cov">${facH(f.p, f.m)}</span>` : `<span class="${cl(j)}">${facH(f.p, f.m)}</span>`).join("");
        html = `<div class="blk"><span class="nm">Cover the factor, put x = ${MR.qT(ci.r)}</span>${ci.name} = ${fr(MR.polyH(N), parts)}<sub>&thinsp;${I("x")} = ${MR.qT(ci.r)}</sub></div>
<div class="blk"><span class="nm">Value</span>${ci.name} = ${fr(MR.qT(ci.nr), MR.qT(ci.dr))} = <span class="c5">${MR.qT(ci.v)}</span></div>
<div class="fb">${ci.f.m > 1 ? `Covering a squared factor gives only the constant over its highest power (${ci.name}). The lower power needs a coefficient equation.` : "Cover-up works for a linear factor that appears once."}</div>`; }
      else { const gx = PF.terms.map((t, i) => { const g = Poly.deg(t.den) === 2 ? `${S.html("g" + t.names[0])}${I("x")} ${S.html("g" + t.names[1], { fmt: sg })}` : S.html("g" + t.names[0]); return `${i ? " + " : ""}<span class="${termCls(t.fi)}">${fr(g, facH(t.den, t.power))}</span>`; }).join("");
        html = `<div class="blk"><span class="nm">Decompose · type each constant</span>${fr(MR.polyH(N), denH())} = ${gx}</div>${fb ? `<div class="fb">${fb}</div>` : ""}${shown && ok ? `<div class="blk c5">${solH()}</div>` : ""}`; } }
    once(top, html, st0);
    P = k.plane(c, { xmin: -6, xmax: 6, ymin: -8, ymax: 8, pad }); P.grid(); P.axes(); const lb = [];
    const roots = cs === "quad" ? [S.r1] : [S.r1, S.r2]; roots.forEach(r => P.vasym(r));
    const solved = ok && (mode === "dec" ? cur >= 3 : mode === "turn" ? shown : false);
    P.curve(fN, mode === "cov" ? k.alpha(C.text, 0.35) : C.text, { breaks: roots, w: solved ? 5 : 2.4 });
    if (solved) { PF.terms.forEach(t => P.curve(x => Poly.evalN(t.num, x) / Poly.evalN(t.den, x) ** t.power, t.fi ? C.pink : C.cyan, { breaks: roots, dash: [6, 5], w: 1.8 }));
      P.curve(x => PF.terms.reduce((s, t) => s + Poly.evalN(t.num, x) / Poly.evalN(t.den, x) ** t.power, 0), C.green, { breaks: roots, w: 1.8 });
      lb.push({ text: "sum of pieces = f", x: P.xmin + 1, y: fN(P.xmin + 1), color: C.green, font: `600 13px ${F.ui}` }); }
    if (mode === "cov" && ok) { const ci = covInfo(), g = x => Poly.evalN(N, x) / Poly.evalN(ci.rest, x), rv = Q.val(ci.r), v = Q.val(ci.v);
      P.curve(g, C.amber, { breaks: cs === "quad" ? [] : roots.filter(r => r !== rv), w: 2.4 }); P.seg(rv, 0, rv, v, C.green, 1.5, [4, 4]); P.dot(rv, v, C.green, 6);
      lb.push({ text: `${ci.name} = ${MR.qT(ci.v)}`, x: rv, y: v, color: C.green, font: `600 15px ${F.math}` }, { text: "f with the factor covered", x: rv + 1.5, y: g(rv + 1.5), color: C.amber, font: `12px ${F.ui}` }); }
    rootPts[0].x = S.r1; rootPts[1].x = S.r2; rootPts[1].off = cs === "quad";
    Dg.draw(P); P.labels(lb);
    if (mode === "dec") k.readout({ title: "Partial fractions", big: cur >= 3 && ok ? `<span class="c5">${solH()}</span>` : ["write the form", "clear denominators", "equate coefficients"][Math.min(cur, 2)],
      rows: [{ lhs: "unknowns", v: PF.unknowns.join(", "), lbl: "one per numerator coefficient of the form" }, { lhs: "system", v: `${PF.rows.length} × ${PF.unknowns.length}`, cls: "c4", lbl: "one equation per power of x" }],
      landmark: { hit: cur >= 4, big: cur >= 4 ? "the pieces add back to f" : `step ${cur} of 4`, note: cur >= 4 ? "Green (sum) lies on the thick original curve: each dashed piece blows up at its own asymptote." : "Step through; each scrubbed number re-solves the problem." },
      narr: "Make the numerator share a root with the denominator: that piece's constant becomes 0." });
    else if (mode === "cov") { const ci = covInfo(); k.readout({ title: "Cover-up method", big: `${ci.name} = <span class="c5">${MR.qT(ci.v)}</span>`,
      rows: [{ lhs: `${I("N")}(${MR.qT(ci.r)})`, v: MR.qT(ci.nr) }, { lhs: "rest at the root", v: MR.qT(ci.dr), lbl: "the other factors evaluated at the root" }],
      landmark: { hit: ci.nr.n === 0, big: ci.nr.n === 0 ? `${ci.name} = 0` : "covered curve meets the root", note: ci.nr.n === 0 ? "The numerator vanishes at this root: the factor cancels and its piece disappears." : "The amber curve is f times the covered factor; its height at the root is the constant." },
      narr: "Drag the root: the amber curve and the constant follow. Press the button to cover the other factor." }); }
    else k.readout({ title: "Your turn", big: shown && ok ? `<span class="c5">${solH()}</span>` : "find the constants", rows: [{ lhs: "form", v: PF.unknowns.join(", "), lbl: "type fractions like 3/2" }],
      landmark: { hit: shown, big: shown ? "decomposed" : "check when ready", note: "Cover-up gives the constants over linear factors that appear once; equate coefficients for the rest." }, narr: "New problem makes one with integer constants." });
  });
};

/* ---------- pc-determinants ---------- */
L["pc-determinants"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, M = MR.Mat, c = k.canvas(), host = k.dom(); host.classList.add("pcb6");
  const top = document.createElement("div"), st0 = {}; host.appendChild(top); const SP = k.stepsPanel(host); const f2 = qf(k);
  const defs = [["a", 3, "c2"], ["b", 1, "c3"], ["c", 1, "c2"], ["d", 2, "c3"]].map(([key, value, cls]) => ({ key, value, cls, min: -4, max: 4, step: 0.5, fmt: f2, label: "entry " + key }));
  [[2, 0, 1], [3, 0, -1], [4, 5, 2]].forEach((r, i) => r.forEach((v, j) => defs.push({ key: `e${i}${j}`, value: v, min: -9, max: 9, cls: "", label: `row ${i + 1} column ${j + 1}` })));
  const SYS = { 2: [[3, 2, 7], [1, -1, -1]], 3: [[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]] };
  [2, 3].forEach(n => SYS[n].forEach((r, i) => r.forEach((v, j) => defs.push({ key: `s${n}${i}${j}`, value: v, min: -9, max: 9, cls: j === n ? "c1" : ["c2", "c3", "c4"][j], label: j === n ? `constant ${i + 1}` : `row ${i + 1} column ${j + 1}` }))));
  const S = k.vars(defs, () => run());
  let mode = "area", along = "r0", n = 2, cur = 0, ST, P = null, ex, cr;
  const keys = (p, m, w) => Array.from({ length: m }, (_, i) => Array.from({ length: w }, (_, j) => p + i + j));
  const E = () => keys("e", 3, 3).map(r => r.map(x => Q(S[x])));
  const A = () => keys("s" + n, n, n + 1).map(r => r.slice(0, n).map(x => Q(S[x]))), bv = () => keys("s" + n, n, n + 1).map(r => Q(S[r[n]]));
  const VN = ["x", "y", "z"], solT = () => `(${VN.slice(0, n).map(I).join(", ")}) = (${cr.x.map(MR.qT).join(", ")})`;
  function run(){ ex = M.expand(E(), along[0] === "r" ? "row" : "col", +along[1]); cr = M.cramer(A(), bv()); cur = 0; if (ST) ST.reset();
    k.guard(mode === "exp" ? [`det A = ${MR.qT(ex.det)}`] : mode === "cram" && cr.x ? [solT().replace(/<\/?i>/g, "")] : []); }
  const hints = { area: "Drag either column tip", exp: "Press Step, or scrub an entry", cram: "Press Step, or scrub a coefficient" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); run(); };
  k.modes([["area", "Area"], ["exp", "Expand"], ["cram", "Cramer"]], mode, setMode);
  k.group("exp", () => k.select("Expand along", [["r0", "row 1"], ["r1", "row 2"], ["r2", "row 3"], ["c0", "column 1"], ["c1", "column 2"], ["c2", "column 3"]], along, v => { along = v; run(); }));
  k.group("cram", () => k.select("System", [[2, "2 × 2"], [3, "3 × 3"]], n, v => { n = +v; run(); }));
  ST = k.stepper(() => (mode === "exp" ? 4 : cr.x ? n + 2 : 1), v => { cur = v; }, { ms: 1300 });
  const pts = [{ x: 0, y: 0, color: C.cyan, name: "tip of column 1", snap: 0.5, clamp: [-4, 4, -4, 4] }, { x: 0, y: 0, color: C.pink, name: "tip of column 2", snap: 0.5, clamp: [-4, 4, -4, 4] }];
  const Dg = k.drag(c, () => P, pts, (i, p) => { S.set(i ? "b" : "a", p.x); S.set(i ? "d" : "c", p.y); }, { label: "Column vectors" });
  const signs = (hi) => MR.matH([[0, 1, 0], [1, 0, 1], [0, 1, 0]].map(r => r.map(v => (v ? MI : "+"))), { cls: (i, j) => "c4" + (hi && hi(i, j) ? " hx" : "") });
  setMode(mode);
  k.loop(() => {
    c.begin(); let html = "";
    ST.buttons.forEach(b => (b.style.display = mode === "area" ? "none" : ""));
    if (mode === "area") {
      const pad = k.split(c, host, { side: "left", frac: 0.4, hfrac: 0.36 }); SP.el.style.display = "none";
      const det = Q.sub(Q.mul(Q(S.a), Q(S.d)), Q.mul(Q(S.b), Q(S.c))), dv = Q.val(det), pos = dv > 0, fill = dv === 0 ? C.violet : pos ? C.green : C.amber;
      k.eqline(`det ${k.matH(S, [["a", "b"], ["c", "d"]], { det: true })} = ${S.html("a")}·${S.html("d")} ${MI} ${S.html("b")}·${S.html("c")} = <span class="c5">${MR.qT(det)}</span>`);
      html = `<div class="blk big"><span class="nm">Signed area</span><span class="c5">${MR.qT(det)}</span></div><div class="fb">${dv === 0 ? "Columns on one line: the square is flattened, A is singular." : pos ? "Column 2 is counterclockwise from column 1: positive orientation." : "Column 2 is clockwise from column 1: the plane is flipped, det &lt; 0."}</div>`;
      P = k.plane(c, { xmin: -5, xmax: 5, ymin: -5, ymax: 5, equal: true, pad }); P.grid(); P.axes();
      poly(c, P, [[0, 0], [1, 0], [1, 1], [0, 1]], null, k.alpha(C.violet, 0.6));
      poly(c, P, [[0, 0], [S.a, S.c], [S.a + S.b, S.c + S.d], [S.b, S.d]], k.alpha(fill, 0.22), k.alpha(fill, 0.8));
      [[S.a, S.c, C.cyan], [S.b, S.d, C.pink]].forEach(([x, y, col]) => (x || y) && c.d.arrow(P.X(0), P.Y(0), P.X(x), P.Y(y), col, 2.5));
      pts[0].x = S.a; pts[0].y = S.c; pts[1].x = S.b; pts[1].y = S.d; pts.forEach(p => (p.off = false)); Dg.draw(P);
      P.labels([{ text: `det = ${MR.qT(det)}`, x: (S.a + S.b) / 2, y: (S.c + S.d) / 2, color: fill, font: `600 15px ${F.math}` }, { text: "col 1", x: S.a, y: S.c, color: C.cyan, font: `13px ${F.ui}` }, { text: "col 2", x: S.b, y: S.d, color: C.pink, font: `13px ${F.ui}` }, { text: "unit square", x: 0.5, y: -0.4, color: C.violet, font: `12px ${F.ui}` }]);
      k.readout({ title: "Determinant as area", big: `det = ${I("a")}${I("d")} ${MI} ${I("b")}${I("c")} = <span class="c5">${MR.qT(det)}</span>`,
        rows: [{ lhs: "area", v: MR.qT(Q.abs(det)), lbl: "of the parallelogram = area scale factor" }, { lhs: "triangle", v: MR.qT(Q.div(Q.abs(det), Q(2))), lbl: "half the parallelogram" }],
        landmark: { hit: dv === 0, big: dv === 0 ? "det = 0: singular" : pos ? "orientation kept" : "orientation reversed", note: dv === 0 ? "The columns are parallel. No inverse exists and Ax = b has no unique solution." : "Drag one tip across the line of the other column: the area passes through 0 and changes sign." },
        narr: "Try a = 2, b = 4, c = 1, d = 2: the columns line up." });
    } else {
      k.split(c, host, { full: true }); SP.el.style.display = ""; pts.forEach(p => (p.off = true)); P = null;
      if (mode === "exp") { const ln0 = along[0] === "r" ? [0, 1, 2].map(j => [+along[1], j]) : [0, 1, 2].map(i => [i, +along[1]]);
        k.eqline(`det ${I("A")} = ${ln0.map(([i, j]) => `${I("a")}<sub>${i + 1}${j + 1}</sub><span class="c1">${I("C")}<sub>${i + 1}${j + 1}</sub></span>`).join(" + ")}`); const t = cur >= 1 && cur <= 3 ? ex.terms[cur - 1] : null;
        const td = (i, j) => !t ? "" : i === t.i && j === t.j ? "hx" : i === t.i || j === t.j ? "dim" : "hm";
        html = `<div class="blk"><span class="nm">A · scrub any entry &nbsp; · &nbsp; sign pattern</span>${k.matH(S, keys("e", 3, 3), { td })} &nbsp; ${signs(t ? (i, j) => i === t.i && j === t.j : null)}</div>`;
        const pa = q => (q.n < 0 ? `(${MR.qT(q)})` : MR.qT(q)), tH = tt => { const s0 = `<span class="c4">${tt.sign > 0 ? "+" : MI}</span>${pa(tt.a)}`; return `${s0}·${MR.matH(tt.minor, { det: true, cls: () => "c1" })} = ${s0}·(${MR.qT(tt.M)}) = ${MR.qT(tt.term)}`; };
        const ln = [{ tag: "signs", eq: `along ${along[0] === "r" ? "row" : "column"} ${+along[1] + 1}: <span class="c4">${ex.terms.map(tt => (tt.sign > 0 ? "+" : MI)).join(" ")}</span>`, why: "The sign of entry (i, j) is (−1)^(i + j): a checkerboard starting with +." },
          ...ex.terms.map(tt => ({ tag: `${I("a")}${sub(tt.i + 1)}${sub(tt.j + 1)}`, eq: tH(tt), why: tt.a.n === 0 ? "A zero entry: this term is 0, no minor needed." : "Entry × sign × minor (cross out its row and column)." })),
          { tag: "sum", eq: `<span class="c5">det ${I("A")} = ${ex.terms.map(tt => MR.qT(tt.term)).join(" + ").replace(/\+ −/g, "− ")} = ${MR.qT(ex.det)}</span>`, why: "Add the three cofactor terms." }];
        spSet(c, SP, ln, cur);
        const zc = ["r0", "r1", "r2", "c0", "c1", "c2"].map(l => [l, (l[0] === "r" ? E()[+l[1]] : E().map(r => r[+l[1]])).filter(v => v.n === 0).length]), best = zc.reduce((a, b) => (b[1] > a[1] ? b : a));
        k.readout({ title: "Cofactor expansion", big: cur >= 4 ? `<span class="c5">det ${I("A")} = ${MR.qT(ex.det)}</span>` : cur ? `term ${Math.min(cur, 3)} of 3` : "pick a row or column",
          rows: [{ lhs: "zeros here", v: zc.find(z => z[0] === along)[1], lbl: "each zero entry skips a minor" }, { lhs: "best line", v: `${best[0][0] === "r" ? "row" : "column"} ${+best[0][1] + 1}`, cls: "c4", lbl: "the one with the most zeros" }],
          landmark: { hit: cur >= 4, big: cur >= 4 ? "same value along any line" : "minor lit in amber", note: cur >= 4 ? "Switch the row or column: the terms change, the determinant does not." : "Step: each term crosses out one row and one column." },
          narr: "Swap two rows by scrubbing: the determinant changes sign." });
      } else { const sg = sgnF(k), pa = q => (q.n < 0 ? `(${MR.qT(q)})` : MR.qT(q)); k.eqline(keys("s" + n, n, n + 1).map(r => r.slice(0, n).map((x, j) => `${j ? S.html(x, { fmt: sg }) : S.html(x)}${I(VN[j])}`).join(" ") + ` = ${S.html(r[n])}`).join(", &nbsp; "));
        const Am = A(), rep = j => Am.map((r, i) => r.map((v, c2) => (c2 === j ? bv()[i] : v)));
        html = `<div class="blk"><span class="nm">[A | b] · scrub any coefficient</span>${k.matH(S, keys("s" + n, n, n + 1), { aug: 1, cls: (i, j) => (j === n ? "c1" : ["c2", "c3", "c4"][j]) })}</div>`;
        const ln = [{ tag: "D", eq: `${I("D")} = ${MR.matH(Am, { det: true })} = <span class="c5">${MR.qT(cr.D)}</span>`, why: cr.x ? "D ≠ 0, so the system has exactly one solution." : "D = 0: Cramer's rule does not apply. The system has no solution or infinitely many." }];
        if (cr.x) { VN.slice(0, n).forEach((v, j) => ln.push({ tag: `D${v}`, eq: `${I("D")}<sub>${v}</sub> = ${MR.matH(rep(j), { det: true, cls: (i, c2) => (c2 === j ? "h5" : "") })} = ${MR.qT(cr.Ds[j])}`, why: `Replace column ${j + 1} (the ${v}-coefficients) by the constants.` }));
          ln.push({ tag: "solve", eq: `<span class="c5">${solT()}</span>`, why: VN.slice(0, n).map((v, j) => `${v} = ${pa(cr.Ds[j])}/${pa(cr.D)}`).join(", ") }); }
        spSet(c, SP, [{ tag: "rule", eq: `${I("x")}<sub>i</sub> = ${I("D")}<sub>i</sub> / ${I("D")}`, why: "Each unknown is a ratio of two determinants." }, ...ln], cur);
        const done = cr.x && cur >= n + 2;
        k.readout({ title: "Cramer's rule", big: done ? `<span class="c5">${solT()}</span>` : cur >= 1 ? `${I("D")} = ${MR.qT(cr.D)}` : "start with D",
          rows: VN.slice(0, n).map((v, j) => cur >= j + 2 && cr.x ? { lhs: `${I("D")}<sub>${v}</sub>`, v: MR.qT(cr.Ds[j]), cls: "c5" } : null),
          landmark: { hit: !!done || (cur >= 1 && !cr.x), big: cr.x ? (done ? "unique solution" : `step ${cur} of ${n + 2}`) : "D = 0", note: cr.x ? "Substitute the solution back into each equation to check it." : "Scrub a coefficient to make D nonzero, or row reduce to see which case it is." },
          narr: "Make one row a multiple of another: D becomes 0." }); }
    }
    once(top, html, st0);
  });
};

/* ---------- pc-matrix-inverse ---------- */
L["pc-matrix-inverse"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, M = MR.Mat, c = k.canvas(), host = k.dom(); host.classList.add("pcb6");
  const top = document.createElement("div"), st0 = {}; host.appendChild(top); const SP = k.stepsPanel(host);
  const defs = [], add = (p, rows, cls) => rows.forEach((r, i) => r.forEach((v, j) => defs.push({ key: `${p}${i}${j}`, value: v, min: -9, max: 9, cls, label: `${p === "b" ? "B" : "A"} row ${i + 1} column ${j + 1}` })));
  add("u", [[2, 3], [1, 2]], "c2"); add("t", [[1, 2, 3], [0, 1, 4], [5, 6, 0]], "c2"); add("b", [[4], [1]], "c5"); add("c", [[5], [7], [-1]], "c5"); add("w", [[1, 1], [-1, 1]], "c2");
  defs.push({ key: "px", value: 1, min: -5, max: 5, step: 0.5, cls: "c1", label: "x of P", fmt: () => MR.qT(pq[0]) }, { key: "py", value: 1, min: -5, max: 5, step: 0.5, cls: "c1", label: "y of P", fmt: () => MR.qT(pq[1]) });
  const S = k.vars(defs, key => { if (key === "px" || key === "py") pq[key === "px" ? 0 : 1] = Q(S[key]); else run(); });
  let mode = "find", n = 2, cur = 0, ST, P = null, R, Ainv, pq = [Q(1), Q(1)];
  const keys = (p, m, w) => Array.from({ length: m }, (_, i) => Array.from({ length: w }, (_, j) => p + i + j));
  const AK = () => keys(n === 2 ? "u" : "t", n, n), BK = () => keys(n === 2 ? "b" : "c", n, 1), A = () => AK().map(r => r.map(x => Q(S[x])));
  const A2 = () => keys("w", 2, 2).map(r => r.map(x => Q(S[x]))), VN = ["x", "y", "z"];
  const X = () => M.mul(Ainv, BK().map(r => [Q(S[r[0]])])).map(r => r[0]), solT = () => `(${VN.slice(0, n).join(", ")}) = (${X().map(MR.qT).join(", ")})`;
  function run(){ R = M.inverse(A()); Ainv = R.inv; cur = 0; if (ST) ST.reset(); k.guard(mode === "solve" && Ainv ? [solT()] : []); }
  const hints = { find: "Press Step, or scrub an entry of A", undo: "Drag the point, or its image", solve: "Press Step, or scrub A or B" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); run(); };
  k.modes([["find", "Find A⁻¹"], ["undo", "Undo"], ["solve", "Solve"]], mode, setMode);
  const sizeSel = () => k.select("Size", [[2, "2 × 2"], [3, "3 × 3"]], n, v => { n = +v; [szF, szS].forEach(s => s.set(n)); run(); });
  let szF, szS; k.group("find", () => { szF = sizeSel(); }); k.group("solve", () => { szS = sizeSel(); });
  ST = k.stepper(() => (mode === "find" ? R.steps.length + 1 : Ainv ? n + 3 : 1), v => { cur = v; }, { ms: 1200 });
  const opH = o => MR.rowOpT(o, true), mI = (Mx, o = {}) => MR.matH(Mx, o);
  const pts = [{ x: 1, y: 1, color: C.amber, name: "point of the figure", snap: 0.5, clamp: [-5, 5, -5, 5] }, { x: 0, y: 0, color: C.cyan, name: "image of the point", snap: 0.5, clamp: [-7, 7, -7, 7] }];
  const Dg = k.drag(c, () => P, pts, (i, p) => { if (!i) pq = [Q(p.x), Q(p.y)]; else if (R2().inv) pq = M.mul(R2().inv, [[Q(p.x)], [Q(p.y)]]).map(r => r[0]); S.set("px", Q.val(pq[0])); S.set("py", Q.val(pq[1])); }, { label: "Point and image" });
  const R2 = () => M.inverse(A2());
  const FIG = [[0, 0], [0, 2], [1.2, 2], [1.2, 1.6], [0.4, 1.6], [0.4, 1.1], [1, 1.1], [1, 0.7], [0.4, 0.7], [0.4, 0]].map(([x, y]) => [x * 1.1, y * 1.1]);
  setMode(mode);
  k.loop(() => {
    c.begin(); let html = ""; ST.buttons.forEach(b => (b.style.display = mode === "undo" ? "none" : ""));
    const det = M.det(mode === "undo" ? A2() : A()), detH = `<span class="c4">det ${I("A")} = ${MR.qT(det)}</span>`;
    if (mode === "undo") {
      const pad = k.split(c, host, { side: "left", frac: 0.4, hfrac: 0.4 }); SP.el.style.display = "none";
      const inv = R2().inv, p = pq.map(Q.val), A0 = A2(), img = M.apply(A0, p), tQ = M.mul(A0, [[pq[0]], [pq[1]]]).map(r => r[0]);
      k.eqline(`${I("P")} = (${S.html("px")}, ${S.html("py")}) &nbsp;↦&nbsp; <span class="c2">${I("AP")} = (${tQ.map(MR.qT).join(", ")})</span>`);
      html = `<div class="blk"><span class="nm">A · scrub any entry</span>${I("A")} = ${k.matH(S, keys("w", 2, 2))} &nbsp; ${detH}</div>
<div class="blk"><span class="nm">Inverse</span>${inv ? `<span class="c3">${I("A")}<sup>−1</sup> = ${mI(inv)}</span>` : `<span class="c4">none: det ${I("A")} = 0</span>`}</div>
<div class="blk"><span class="nm">Point → image → back</span><span class="c1">${I("P")} = (${pq.map(MR.qT).join(", ")})</span><br><span class="c2">${I("AP")} = (${tQ.map(MR.qT).join(", ")})</span>${inv ? `<br><span class="c3">${I("A")}<sup>−1</sup>(${I("AP")}) = (${pq.map(MR.qT).join(", ")})</span>` : ""}</div>`;
      P = k.plane(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad }); P.grid(); P.axes();
      const fig = FIG.map(([x, y]) => [p[0] + x, p[1] + y]), im = fig.map(q => M.apply(A0, q));
      poly(c, P, im, k.alpha(C.cyan, 0.18), C.cyan); poly(c, P, fig, k.alpha(C.amber, 0.12), null);
      if (inv) { c.g.save(); c.g.setLineDash([6, 4]); poly(c, P, im.map(q => M.apply(inv, q)), null, C.pink); c.g.restore(); }
      c.d.arrow(P.X(p[0]), P.Y(p[1]), P.X(img[0]), P.Y(img[1]), k.alpha(C.cyan, 0.7), 1.5);
      pts[0].x = p[0]; pts[0].y = p[1]; pts[1].x = img[0]; pts[1].y = img[1]; pts[0].off = false; pts[1].off = !inv; Dg.draw(P);
      P.labels([{ text: "P", x: p[0], y: p[1], color: C.amber, font: `600 14px ${F.math}`, prefer: "sw" }, { text: "AP", x: img[0], y: img[1], color: C.cyan, font: `600 14px ${F.math}` }, ...(inv ? [{ text: "A⁻¹ brings it back", x: p[0] + 1, y: p[1] + 1.8, color: C.pink, font: `12px ${F.ui}` }] : [])]);
      k.readout({ title: "A then its inverse", big: inv ? `${I("A")}<sup>−1</sup>${I("A")} = ${I("I")}` : "no way back", rows: [{ lhs: "det A", v: MR.qT(det), cls: "c4", lbl: "area factor of A" }, { lhs: "det A⁻¹", v: inv ? MR.qT(Q.inv(det)) : "undefined", cls: "c3", lbl: "1/det A" }],
        landmark: { hit: !inv, big: inv ? "every image has one source" : "singular: det A = 0", note: inv ? "The dashed pink copy (A⁻¹ applied to the image) sits exactly on the figure." : "A squashes the plane onto a line: many points share an image, so nothing can undo it." },
        narr: "Make the columns proportional (2, 4 over 1, 2): the image collapses." });
    } else {
      k.split(c, host, { full: true }); SP.el.style.display = ""; pts.forEach(q => (q.off = true)); P = null;
      const AH = `${I("A")} = ${k.matH(S, AK())}`, sg = sgnF(k);
      k.eqline(mode === "find" ? `[${I("A")} | ${I("I")}] &nbsp;→&nbsp; [${I("I")} | <span class="c3">${I("A")}<sup>−1</sup></span>]` : AK().map((r, i) => r.map((x, j) => `${j ? S.html(x, { fmt: sg }) : S.html(x)}${I(VN[j])}`).join(" ") + ` = ${S.html(BK()[i][0])}`).join(", &nbsp; "));
      if (mode === "find") { const nS = R.steps.length, st = cur >= 1 && cur <= nS ? R.steps[cur - 1] : null, Mt = st ? st.M : A().map((r, i) => [...r, ...M.id(n)[i]]), done = cur > nS;
        const chg = st ? (st.op.type === "swap" ? [st.op.i, st.op.j] : [st.op.i]) : [];
        html = `<div class="blk"><span class="nm">A · scrub any entry</span>${AH} &nbsp; ${detH}</div>
<div class="blk big"><span class="nm">${st ? "after " : ""}${st ? opH(st.op) : "[A | I]"}</span>${mI(Mt, { aug: n, cls: (i, j) => [chg.includes(i) ? "h1" : "", j >= n && (done && R.inv) ? "c3" : ""].join(" ").trim() })}</div>`;
        spSet(c, SP, [{ tag: "start", eq: `[${I("A")} | ${I("I")}]`, why: "Row reduce the left block to I; every operation also acts on the right block." },
          ...R.steps.map((s, i) => ({ tag: `step ${i + 1}`, eq: `<span class="c1">${opH(s.op)}</span>`, why: s.op.type === "swap" ? "Bring a nonzero pivot up." : s.op.type === "scale" ? "Make the pivot 1." : "Clear the entry " + (s.phase === "back" ? "above" : "below") + " the pivot." })),
          { tag: "read", eq: R.inv ? `<span class="c3">${I("A")}<sup>−1</sup> = ${mI(R.inv)}</span>` : `<span class="c4">left block has a zero row: ${I("A")} is singular</span>`, why: R.inv ? "The right block is the inverse. Check: AA⁻¹ = I." : "det A = 0, so no inverse exists." }], cur);
        k.readout({ title: "Inverse by row reduction", big: done ? (R.inv ? `<span class="c3">${I("A")}<sup>−1</sup> found</span>` : "A is singular") : st ? `<span class="c1">${opH(st.op)}</span>` : "start: [A | I]",
          rows: [{ lhs: "det A", v: MR.qT(det), cls: "c4", lbl: det.n ? "nonzero: A is invertible" : "zero: no inverse" }, { lhs: "step", v: `${Math.min(cur, nS)} of ${nS}` }],
          landmark: { hit: done, big: done ? (R.inv ? "[I | A⁻¹]" : "stopped: det A = 0") : "left block → I", note: n === 2 && R.inv ? "For 2 × 2 the same answer is (1/det)[[d, −b], [−c, a]]." : "Fractions appear when det A is not ±1." },
          narr: "Scrub one entry so det A = 0 and step again: a zero row appears on the left." });
      } else { const Bv = BK().map(r => Q(S[r[0]])), ok = !!Ainv, done = ok && cur >= n + 3;
        html = `<div class="blk"><span class="nm">A X = B · scrub A or B</span>${AH} &nbsp; ${I("B")} = ${k.matH(S, BK())}</div>`;
        const ln = [{ tag: "det", eq: detH, why: ok ? "Nonzero, so A⁻¹ exists and X = A⁻¹B is the only solution." : "Zero: A has no inverse. Use row reduction to see whether there are no solutions or infinitely many." }];
        if (ok) { ln.push({ tag: "A⁻¹", eq: `<span class="c3">${I("A")}<sup>−1</sup> = ${mI(Ainv)}</span>`, why: n === 2 ? "(1/det)[[d, −b], [−c, a]]: swap the diagonal, negate the other two." : "From row reducing [A | I]." });
          const Xv = X(); VN.slice(0, n).forEach((v, i) => ln.push({ tag: v, eq: `${v} = ${M.dotTerms(Ainv, Bv.map(b => [b]), i, 0).map(t => `(${MR.qT(t.a)})(${MR.qT(t.b)})`).join(" + ")} = ${MR.qT(Xv[i])}`, why: `Row ${i + 1} of A⁻¹ times B.` }));
          ln.push({ tag: "solution", eq: `<span class="c5">${solT()}</span>`, why: "Check: A times X gives B." }); }
        spSet(c, SP, [{ tag: "plan", eq: `${I("X")} = ${I("A")}<sup>−1</sup>${I("B")}`, why: "Multiply both sides of AX = B on the left by A⁻¹." }, ...ln], cur);
        k.readout({ title: "Solving AX = B", big: done ? `<span class="c5">${solT()}</span>` : "X = A⁻¹B", rows: [{ lhs: "det A", v: cur >= 1 ? MR.qT(det) : "?", cls: "c4" }, { lhs: "order", v: "A⁻¹B, not BA⁻¹", lbl: "matrix products do not commute" }],
          landmark: { hit: !!done, big: done ? "solved" : ok ? `step ${cur} of ${n + 3}` : "singular A", note: "One A⁻¹ solves AX = B for every B: scrub B and the same inverse is reused." }, narr: "Change B only: the inverse line stays, the products change." }); }
    }
    once(top, html, st0);
  });
};
})();
