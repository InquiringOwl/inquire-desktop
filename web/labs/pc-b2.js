/* ============ Labs: Precalculus, batch B2 (matrices, Gaussian elimination, matrices as transformations) ============ */
(function(){
const L = window.LABS, MI = "−";
const I = s => `<i>${s}</i>`, SUBS = "₀₁₂₃₄₅₆₇₈₉", sub = n => String(n).split("").map(d => SUBS[+d]).join("");
const css = k => k.css("pcb2", `.pcb2{font:400 17px/1.4 var(--math)}.pcb2 .blk{margin:2px 0 10px;white-space:nowrap}
.pcb2 .nm{font:600 11px var(--ui);letter-spacing:.1em;color:var(--faint);text-transform:uppercase;display:block;margin-bottom:2px;white-space:normal}.pcb2 .mat{font-size:1.08em}
.pcb2 .mat td{min-width:1.4em}.pcb2 .mat td.bar{border-right-color:var(--violet)}
.pcb2 td.h2{background:color-mix(in srgb,var(--cyan) 16%,transparent)}.pcb2 td.h3{background:color-mix(in srgb,var(--pink) 16%,transparent)}
.pcb2 td.h5{background:color-mix(in srgb,var(--green) 24%,transparent)}.pcb2 [data-ij]{cursor:pointer;display:inline-block;min-width:1.2em}
.pcb2 .ops{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 8px}.pcb2 .ops button{font:400 16px var(--math);padding:4px 10px}
.pcb2 .fb{font:400 13px/1.4 var(--ui);color:var(--muted);margin:2px 0 8px;white-space:normal}`);
// Matrix HTML: entries that are k.vars keys become scrubbable numbers (colour o.col(i, j)); o.td(i, j) → cell class
const mH = (k, S, grid, o = {}) => k.MR.matH(grid, { aug: o.aug, cls: o.td, cell: (i, j, v) => (typeof v === "string" && S && S.defs[v] ? S.html(v, { cls: o.col ? o.col(i, j) : undefined }) : o.cell ? o.cell(i, j, v) : v && v.isQ ? k.MR.qH(v).replace(/^<span class="m">|<\/span>$/g, "") : String(v).replace("-", MI)) });
const keys = (p, m, n) => Array.from({ length: m }, (_, i) => Array.from({ length: n }, (_, j) => p + i + j));

// KIT CANDIDATE: two wrong row operations for "pick the next step" drills: the right op with the sign or the
// reciprocal mistaken, or aimed at the wrong row. → [op, wrong1, wrong2] (no duplicates, never scale by 0).
const opChoices = (op, m) => {
  const Q = window.MathRules.Q, key = o => [o.type, o.i, o.j, o.c ? Q.val(Q(o.c)) : ""].join(":"), oth = (a, b) => [...Array(m).keys()].find(r => r !== a && r !== b);
  let w = op.type === "add" ? [{ ...op, c: Q.neg(op.c) }, oth(op.i, op.j) !== undefined ? { ...op, i: oth(op.i, op.j) } : null, { ...op, c: Q.mul(op.c, 2) }]
    : op.type === "scale" ? [{ ...op, c: Q.inv(op.c) }, { ...op, c: Q.neg(op.c) }, { ...op, c: Q.mul(op.c, 2) }]
    : [oth(op.i, op.j) !== undefined ? { type: "swap", i: op.i, j: oth(op.i, op.j) } : null, { type: "add", i: op.j, j: op.i, c: Q(-1) }, { type: "add", i: op.i, j: op.j, c: Q(-1) }];
  const seen = new Set([key(op)]), out = [op];
  w.forEach(o => { if (o && out.length < 3 && !(o.c && Q(o.c).n === 0) && !seen.has(key(o))) { seen.add(key(o)); out.push(o); } });
  return out; };
// KIT CANDIDATE: the solution of an Mat.rref result as text: "(1, −1, 2)", "∅", or "(1 + t, 2 − 2t, t)"
const solText = R => { const MR = window.MathRules, qT = MR.qT;
  if (R.kind === "unique") return `(${R.x.map(qT).join(", ")})`; if (R.kind === "none") return "∅";
  const nm = R.free.length === 1 ? ["t"] : ["s", "t"], name = f => nm[R.free.indexOf(+f)];
  return "(" + R.param.map(p => { let s = p.c.n ? qT(p.c) : ""; Object.keys(p.coef).forEach(f => { const q = p.coef[f], a = MR.Q.abs(q), neg = q.n < 0, co = a.n === 1 && a.d === 1 ? "" : a.d === 1 ? qT(a) : `(${qT(a)})`;
    s += s ? ` ${neg ? MI : "+"} ${co}${name(f)}` : `${neg ? MI : ""}${co}${name(f)}`; }); return s || "0"; }).join(", ") + ")"; };

/* ---------- pc-matrices ---------- */
L["pc-matrices"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, M = MR.Mat, c = k.canvas(), host = k.dom(); host.classList.add("pcb2");
  const qt = MR.qT, qh = v => MR.qH(v).replace(/^<span class="m">|<\/span>$/g, ""), par = v => (v.n < 0 ? `(${qh(v)})` : qh(v));
  const money = v => { const x = Q.val(v); return Number.isInteger(x) ? String(x) : x.toFixed(2); };
  const defs = [], ent = (p, X, o, nm) => X.forEach((r, i) => r.forEach((v, j) => defs.push({ key: p + i + j, value: v, label: `${nm} row ${i + 1} column ${j + 1}`, ...o })));
  [["mA", 2, "rows of A"], ["nA", 3, "columns of A"], ["mB", 3, "rows of B"], ["nB", 2, "columns of B"]].forEach(([key, value, label]) => defs.push({ key, value, label, min: 1, max: 3, cls: "c4", px: 16 }));
  ent("a", [[2, -1, 0], [1, 3, 4], [0, 1, 2]], { min: -9, max: 9, cls: "c2" }, "A");
  ent("b", [[1, 2, 0], [0, -1, 1], [3, 1, 2]], { min: -9, max: 9, cls: "c3" }, "B");
  ent("q", [[10, 4, 6], [8, 12, 5]], { min: 0, max: 99, cls: "c2" }, "orders");
  ent("p", [[3, 1], [2, 1], [6, 3]], { min: 0, max: 50, step: 0.25, cls: "c3", fmt: v => money(Q(v)) }, "prices");
  const S = k.vars(defs, () => fix());
  let mode = "mul", P = null, last = "";
  const sel = [[0, 1], [0, 0]], geo = [null, null], G = 0.55;
  const fix = () => sel.forEach((s, t) => { const g = geo[t]; if (g) { s[0] = Math.min(s[0], g.m - 1); s[1] = Math.min(s[1], g.q - 1); } });
  const val = K => K.map(r => r.map(x => Q(S[x])));
  const cellAt = (t, x, y) => { const g = geo[t]; if (!g) return null; const j = Math.max(0, Math.min(g.q - 1, Math.floor(x - g.x0))), i = Math.max(0, Math.min(g.m - 1, Math.floor(g.y0 - y))); return { x: g.x0 + j + 0.8, y: g.y0 - i - 0.8 }; };
  const pts = [0, 1].map(t => ({ x: 0, y: 0, color: C.green, name: t ? "an entry of BA" : "an entry of AB", path: (x, y) => cellAt(t, x, y) }));
  const D = k.drag(c, () => P, pts, (t, p) => { const g = geo[t]; sel[t] = [Math.round(g.y0 - p.y - 0.8), Math.round(p.x - g.x0 - 0.8)]; }, { label: "Product entries" });
  k.listen(host, "pointerover", e => { const t = e.target.closest && e.target.closest("[data-ij]"); if (t) { const [w, i, j] = t.dataset.ij.split(",").map(Number); sel[w] = [i, j]; } });
  // Falk scheme: X bottom-left, Y top-right, XY bottom-right; top-left corner at (ox, oy)
  const scheme = (t, ox, oy, X, Y, cx, cy, nx, ny) => {
    const m = X.length, n = X[0].length, p = Y.length, q = Y[0].length, ok = n === p, XY = ok ? M.mul(X, Y) : null, s = sel[t];
    const x0 = ox + n + G, y0 = oy - p - G, u = P.X(1) - P.X(0), fs = Math.round(Math.max(11, Math.min(19, u * 0.33)));
    geo[t] = ok ? { x0, y0, m, q } : null;
    const cell = (x, y, txt, col, on, hot) => { const X0 = P.X(x), Y0 = P.Y(y); c.d.rr(X0 + 2, Y0 + 2, u - 4, u - 4, 5, k.alpha(col, hot ? 0.3 : on ? 0.15 : 0.04), k.alpha(col, on || hot ? 0.9 : 0.3), hot ? 2 : 1);
      c.d.text(txt, X0 + u / 2, Y0 + u / 2 + 1, { color: col, font: `${hot ? 600 : 400} ${fs}px ${F.math}`, align: "center", base: "middle" }); };
    X.forEach((r, i) => r.forEach((v, j) => cell(ox + j, y0 - i, qt(v), cx, ok && i === s[0])));
    Y.forEach((r, i) => r.forEach((v, j) => cell(x0 + j, oy - i, qt(v), cy, ok && j === s[1])));
    const lab = (txt, x, y, col, al) => c.d.text(txt, P.X(x), P.Y(y), { color: col, font: `600 ${fs}px ${F.math}`, align: al, base: "middle" });
    lab(`${nx}  ${m}×${n}`, ox + n / 2, y0 + G / 2, cx, "center"); lab(`${ny}  ${p}×${q}`, x0 - 0.15, oy - p / 2, cy, "right");
    if (ok) XY.forEach((r, i) => r.forEach((v, j) => cell(x0 + j, y0 - i, qt(v), C.green, false, i === s[0] && j === s[1])));
    else { c.d.rr(P.X(x0) + 2, P.Y(y0) + 2, q * u - 4, m * u - 4, 6, k.alpha(C.violet, 0.06), k.alpha(C.violet, 0.6), 1);
      c.d.text(`${n} ≠ ${p}`, P.X(x0 + q / 2), P.Y(y0 - m / 2) - fs * 0.6, { color: C.violet, font: `600 ${fs}px ${F.math}`, align: "center", base: "middle" });
      c.d.text("undefined", P.X(x0 + q / 2), P.Y(y0 - m / 2) + fs * 0.6, { color: C.violet, font: `${fs - 2}px ${F.ui}`, align: "center", base: "middle" }); }
    const h = pts[t]; h.off = !ok; if (ok) { h.x = x0 + s[1] + 0.8; h.y = y0 - s[0] - 0.8; }
    return XY; };
  const prodH = (t, XY, nm) => XY ? `${nm} = ${MR.matH(XY, { cls: (i, j) => (i === sel[t][0] && j === sel[t][1] ? "c5 h5" : "c5"), cell: (i, j, v) => `<span data-ij="${t},${i},${j}">${qh(v)}</span>` })}` : `${nm} <span class="c4">undefined</span>`;
  const hints = { mul: "Drag the green handle over AB, or scrub any entry or size", order: "Scrub entries until AB = BA", data: "Scrub an order or a price" };
  const setMode = m => { mode = m; k.hint(hints[m]); k.guard([]); };
  k.modes([["mul", "Multiply"], ["order", "Order matters"], ["data", "Data"]], mode, setMode); setMode(mode);
  k.loop(() => {
    c.begin(); const Ak = keys("a", S.mA, S.nA), Bk = keys("b", S.mB, S.nB), A = val(Ak), B = val(Bk);
    const dimH = (a, b) => `<span class="c4">${S.html(a)} × ${S.html(b)}</span>`;
    const s = sel[0], okAB = S.nA === S.mB, okBA = S.nB === S.mA;
    let html;
    if (mode !== "data") html = `<div class="blk"><span class="nm">A · rows × columns</span>${I("A")} = ${mH(k, S, Ak, { col: () => "c2", td: (i, j) => (mode === "mul" && okAB && i === s[0] ? "h2" : "") })} ${dimH("mA", "nA")}</div>
<div class="blk"><span class="nm">B · rows × columns</span>${I("B")} = ${mH(k, S, Bk, { col: () => "c3", td: (i, j) => (mode === "mul" && okAB && j === s[1] ? "h3" : "") })} ${dimH("mB", "nB")}</div>`;
    else html = `<div class="blk"><span class="nm">Orders Q · rows Mon, Tue · columns coffee, muffin, sandwich</span>${I("Q")} = ${mH(k, S, keys("q", 2, 3), { col: () => "c2" })}</div>
<div class="blk"><span class="nm">P · rows items · columns price, cost ($)</span>${I("P")} = ${mH(k, S, keys("p", 3, 2), { col: () => "c3" })}</div>`;
    const pad = k.split(c, host, { side: "left", frac: 0.44, hfrac: 0.5 });
    if (mode === "data") {
      const T = M.mul(val(keys("q", 2, 3)), val(keys("p", 3, 2))), Qv = val(keys("q", 2, 3)), Pv = val(keys("p", 3, 2));
      html += `<div class="blk"><span class="nm">Totals · revenue, cost per day</span>${I("Q")}${I("P")} = ${MR.matH(T, { cls: () => "c5", cell: (i, j, v) => money(v) })}</div>`;
      const top = Math.max(10, ...T.flat().map(Q.val)) * 1.15, P2 = P = k.plane(c, { xmin: 0, xmax: 2, ymin: 0, ymax: top, xstep: 1, pad, ylabel: "$" }); P2.grid(); P2.axes(); geo[0] = geo[1] = null; pts.forEach(p => (p.off = true));
      const bw = (P2.X(1) - P2.X(0)) * 0.3;
      ["Mon", "Tue"].forEach((d, i) => { const rv = Q.val(T[i][0]), co = Q.val(T[i][1]), xr = P2.X(i + 0.5);
        c.d.rect(xr - bw - 2, P2.Y(rv), bw, P2.Y(0) - P2.Y(rv), k.alpha(C.green, 0.75)); c.d.rect(xr + 2, P2.Y(co), bw, P2.Y(0) - P2.Y(co), k.alpha(C.muted, 0.5));
        c.d.text(d, xr, P2.Y(0) + 16, { color: C.text, font: `600 13px ${F.ui}`, align: "center" });
        c.d.text(money(T[i][0]), xr - bw / 2 - 2, P2.Y(rv) - 6, { color: C.green, font: `600 13px ${F.math}`, align: "center" });
        c.d.text(money(T[i][1]), xr + bw / 2 + 2, P2.Y(co) - 6, { color: C.muted, font: `13px ${F.math}`, align: "center" }); });
      const pr = [0, 1].map(i => Q.sub(T[i][0], T[i][1])), best = Q.cmp(pr[0], pr[1]) >= 0 ? 0 : 1, rowT = (i, j) => Qv[i].map((v, t) => `${qh(v)}·${money(Pv[t][j])}`).join(" + ");
      k.readout({ title: "Orders times prices", big: `${I("Q")}${I("P")} = ${MR.matH(T, { cls: () => "c5", cell: (i, j, v) => money(v) })}`,
        rows: [{ lhs: "Mon revenue", v: `${rowT(0, 0)} = ${money(T[0][0])}`, cls: "c5" }, { lhs: "Tue revenue", v: `${rowT(1, 0)} = ${money(T[1][0])}`, cls: "c5" },
          { lhs: "profit", v: `Mon ${money(pr[0])}, Tue ${money(pr[1])}`, lbl: "revenue column minus cost column" }],
        landmark: { hit: true, big: `best day: ${best ? "Tue" : "Mon"}, profit $${money(pr[best])}`, note: "Rows of QP are days, columns are revenue and cost. Each entry is a row of orders times a column of P." },
        narr: "Raise the sandwich price or Tuesday's coffee orders and watch both totals change." });
    } else if (mode === "mul") {
      const W = S.nA + G + S.nB, H = S.mB + G + S.mA; P = k.plane(c, { xmin: -0.2, xmax: W + 0.2, ymin: -H - 0.2, ymax: 0.2, equal: true, pad });
      const AB = scheme(0, 0, 0, A, B, C.cyan, C.pink, "A", "B"); pts[1].off = true; geo[1] = null;
      html += `<div class="blk"><span class="nm">AB · ${okAB ? `${S.mA} × ${S.nB}` : "inner sizes differ"}</span>${prodH(0, AB, `${I("A")}${I("B")}`)}</div>`;
      const tm = okAB ? M.dotTerms(A, B, s[0], s[1]).map(({ a, b }) => `<span class="c2">${par(a)}</span>·<span class="c3">${par(b)}</span>`).join(" + ") : "";
      k.readout({ title: "Row times column", big: okAB ? `(${I("AB")})${sub(`${s[0] + 1}${s[1] + 1}`)} = <span class="c5">${qh(AB[s[0]][s[1]])}</span>` : `${I("AB")} is undefined`,
        rows: [okAB && { lhs: `row ${s[0] + 1} · column ${s[1] + 1}`, v: tm }, { lhs: `(${S.mA} × ${S.nA})(${S.mB} × ${S.nB})`, v: okAB ? `→ ${S.mA} × ${S.nB}` : `inner ${S.nA} ≠ ${S.mB}`, cls: okAB ? "c5" : "c4" },
          { lhs: I("BA"), v: okBA ? `${S.mB} × ${S.nA}` : "undefined", lbl: "the other order" }],
        landmark: { hit: okAB, big: okAB ? `inner sizes agree: ${S.nA} = ${S.mB}` : `${S.nA} columns of A, ${S.mB} rows of B`, note: okAB ? `Row ${s[0] + 1} of A meets column ${s[1] + 1} of B: multiply pairs, add.` : "A row of A and a column of B must have the same length to pair up." },
        narr: "Make A 3 × 1 and B 1 × 3: the product is a full 3 × 3 table." });
    } else {
      const BAm = okBA ? M.mul(B, A) : null, W1 = S.nA + G + S.nB, H1 = S.mB + G + S.mA, W2 = S.nB + G + S.nA, H2 = S.mA + G + S.mB, wide = c.w >= 600;
      const off = wide ? [W1 + 1, 0] : [0, -H1 - 1]; P = k.plane(c, wide ? { xmin: -0.2, xmax: W1 + 1 + W2 + 0.2, ymin: -Math.max(H1, H2) - 0.2, ymax: 0.2, equal: true, pad } : { xmin: -0.2, xmax: Math.max(W1, W2) + 0.2, ymin: -H1 - 1 - H2 - 0.2, ymax: 0.2, equal: true, pad });
      const AB = scheme(0, 0, 0, A, B, C.cyan, C.pink, "A", "B"), BA = scheme(1, off[0], off[1], B, A, C.pink, C.cyan, "B", "A");
      html += `<div class="blk">${prodH(0, AB, `${I("A")}${I("B")}`)}</div><div class="blk">${prodH(1, BA, `${I("B")}${I("A")}`)}</div>`;
      const same = AB && BA && M.eq(AB, BA);
      k.readout({ title: "AB versus BA", big: !AB || !BA ? `${!AB ? I("AB") : I("BA")} is undefined` : AB.length !== BA.length ? `${I("AB")} is ${AB.length} × ${AB.length}, ${I("BA")} is ${BA.length} × ${BA.length}` : same ? `${I("AB")} = ${I("BA")}` : `${I("AB")} ≠ ${I("BA")}`,
        rows: [{ lhs: I("AB"), v: AB ? `${S.mA} × ${S.nB}` : "undefined", cls: AB ? "c5" : "c4" }, { lhs: I("BA"), v: BA ? `${S.mB} × ${S.nA}` : "undefined", cls: BA ? "c5" : "c4" }],
        landmark: { hit: !!same, big: same ? "These two commute" : "Order matters", note: same ? "Equal products are the exception: try changing one entry." : "Rows of the left factor meet columns of the right one, so swapping the factors changes every entry." },
        narr: "Try B = I (1s on the diagonal, 0s elsewhere), or B = A: both make AB = BA." });
    }
    if (html !== last) { host.innerHTML = html; last = html; }
    if (P && mode !== "data") D.draw(P);
  });
};

/* ---------- pc-gaussian ---------- */
L["pc-gaussian"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, M = MR.Mat, c = k.canvas(), host = k.dom(); host.classList.add("pcb2");
  const top = document.createElement("div"); host.appendChild(top); const SP = k.stepsPanel(host);
  const spSet = (ls, cur) => { if (c.w >= 600) return SP.set(ls, cur); const a = Math.max(0, Math.min(cur, ls.length - 1) - 1); SP.set(ls.slice(a, a + 3), cur - a); }; // phones: a window of 3 lines
  const SYS = [[[1, 2, 1, 1], [2, 3, -1, -3], [3, -1, 2, 8]], [[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]], [[0, 1, -1, -1], [1, 1, 1, 3], [2, 1, 3, 7]], [[1, 1, 1, 3], [0, 1, -1, -1], [2, 1, 3, 8]], [[1, -1, 2, 5], [2, 1, 1, 4], [3, 3, 0, 3]]];
  const defs = []; SYS[0].forEach((r, i) => r.forEach((v, j) => defs.push({ key: `g${i}${j}`, value: v, min: -9, max: 9, cls: j === 3 ? "c4" : "c1", label: `row ${i + 1} column ${j + 1}` })));
  [["p1", 4], ["q1", 2], ["p2", 1], ["q2", -1]].forEach(([key, value], i) => defs.push({ key, value, min: -6, max: 6, cls: i < 2 ? "c2" : "c3", label: `${key[0] === "p" ? "x" : "y"}-intercept of line ${key[1]}` }));
  const S = k.vars(defs, key => { if (key[0] === "g") run(); else if (!S[key]) S.set(key, 1); });
  const LK = ["p1", "q1", "p2", "q2"];
  let mode = "reduce", cur = 0, si = 0, sysI = 0, R = null, fb = "", score = [0, 0], last = "", P = null, ST, ch = null, chAt = "";
  const run = () => { R = M.rref(keys("g", 3, 4).map(r => r.map(x => Q(S[x]))), { aug: 1 }); cur = 0; si = 0; fb = ""; ch = null; if (ST) ST.reset(); guard(); };
  const guard = () => k.guard(mode === "pic" ? [] : [solText(R)]);
  const opH = o => MR.rowOpT(o, true);
  const why = st => st.op.type === "swap" ? "Bring a row with a nonzero entry (a 1 if possible) up to the pivot position." : st.op.type === "scale" ? "Make the pivot 1." : st.phase === "back" ? "Clear the entry above the pivot." : "Clear the entry below the pivot.";
  const readT = () => (R.kind === "unique" ? "one solution" : R.kind === "none" ? "a row 0 = c, c ≠ 0: inconsistent" : `free variable${R.free.length > 1 ? "s" : ""}: dependent`);
  const lines = () => [{ tag: "start", eq: "the augmented matrix [A | b]", why: "Each row is one equation; the last column holds the constants." },
    ...R.steps.map((st, n) => ({ tag: `step ${n + 1}`, eq: `<span class="c3">${opH(st.op)}</span>`, why: why(st) })),
    { tag: "read", eq: `<span class="c5">(${I("x")}, ${I("y")}, ${I("z")}) = ${solText(R)}</span>`, why: readT() }];
  const pick = n => { const st = R.steps[si]; if (!st || !ch) return; const o = ch[n]; score[1]++;
    if (o === st.op) { score[0]++; si++; ch = null; fb = si >= R.steps.length ? "Done: read the solution off the last matrix." : `Right: ${why(st).toLowerCase()}`; }
    else fb = `${opH(o)} is a legal move, but it does not do what this step needs. ${why(st)}`; };
  k.listen(host, "click", e => { const b = e.target.closest && e.target.closest("[data-op]"); if (b) pick(+b.dataset.op); });
  // draw an augmented matrix on the canvas, rows tinted: used c2, changed c3; pivot ring c1
  const drawM = (Mt, box, o = {}) => {
    const m = Mt.length, n = Mt[0].length, cw = Math.min(78, (box.w - 40) / (n + 0.6)), ch = Math.min(56, cw * 0.72, (box.h - 40) / m), W = cw * (n + 0.4), x0 = box.x + (box.w - W) / 2 + 14, y0 = box.y + Math.max(24, (box.h - ch * m) / 2);
    const fs = Math.round(Math.min(24, ch * 0.46)), cx = j => x0 + cw * (j + 0.5) + (j === n - 1 ? cw * 0.4 : 0);
    Mt.forEach((r, i) => { const used = o.used === i, chg = (o.chg || []).includes(i), y = y0 + ch * i;
      if (used || chg) c.d.rr(x0 - 4, y + 2, W + 8, ch - 4, 6, k.alpha(chg ? C.pink : C.cyan, 0.14), k.alpha(chg ? C.pink : C.cyan, 0.7));
      c.d.text(`R${sub(i + 1)}`, x0 - 16, y + ch / 2, { color: chg ? C.pink : used ? C.cyan : C.muted, font: `600 14px ${F.math}`, align: "right", base: "middle" });
      r.forEach((v, j) => { const pv = o.piv && o.piv.some(([a, b]) => a === i && b === j);
        if (pv) c.d.circle(cx(j), y + ch / 2, Math.min(ch, cw) * 0.38, k.alpha(C.amber, 0.12), C.amber, 2);
        c.d.text(MR.qT(v), cx(j), y + ch / 2 + 1, { color: pv ? C.amber : j === n - 1 ? C.violet : C.text, font: `${pv ? 600 : 400} ${fs}px ${F.math}`, align: "center", base: "middle" }); }); });
    const yb = y0 + ch * m, br = (x, d) => { c.d.line(x, y0, x, yb, C.muted, 2); c.d.line(x, y0, x + d, y0, C.muted, 2); c.d.line(x, yb, x + d, yb, C.muted, 2); };
    br(x0 - 2, 8); br(x0 + W + 2, -8); const xb = x0 + cw * (n - 1) + cw * 0.2; c.d.line(xb, y0 + 4, xb, yb - 4, C.violet, 2);
    if (o.note) c.d.text(o.note, x0 + W / 2, yb + 26, { color: o.noteC || C.text, font: `600 17px ${F.math}`, align: "center" }); };
  const hints = { reduce: "Press Step, or scrub an entry", move: "Pick the next row operation", pic: "Drag the intercepts of either line" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); run(); };
  k.modes([["reduce", "Reduce"], ["move", "Your move"], ["pic", "Picture"]], mode, setMode);
  const newSys = () => { sysI = (sysI + 1) % SYS.length; SYS[sysI].forEach((r, i) => r.forEach((v, j) => S.set(`g${i}${j}`, v))); run(); };
  k.group("reduce", () => { ST = k.stepper(() => R.steps.length + 1, v => { cur = v; }, { ms: 1300 }); k.button("New system", newSys, "btn ghost"); });
  k.group("move", () => k.button("New system", () => { newSys(); score = [0, 0]; }, "btn ghost"));
  k.group("pic", () => {});
  const pts = LK.map((key, i) => ({ x: 0, y: 0, color: i < 2 ? C.cyan : C.pink, name: `${i % 2 ? "y" : "x"}-intercept of line ${i < 2 ? 1 : 2}`, snap: 1, clamp: [-6, 6, -6, 6], fixX: i % 2 === 1, fixY: i % 2 === 0 }));
  const D = k.drag(c, () => P, pts, (i, p) => { let v = i % 2 ? p.y : p.x; if (!v) v = S[LK[i]] > 0 ? 1 : -1; S.set(LK[i], v); }, { label: "Two lines" });
  const lineRow = (p, q) => { const g = MR.gcd(Math.abs(p), Math.abs(q)), sg = q < 0 ? -1 : 1; return [q / g * sg, p / g * sg, p * q / g * sg]; };
  setMode(mode);
  k.loop(() => {
    c.begin(); let html = "";
    const pad = k.split(c, host, { side: "left", frac: 0.42, hfrac: 0.5 }), box = { x: pad.l - 20, y: pad.t, w: c.w - pad.l - pad.r + 20, h: c.h - pad.t - pad.b };
    if (mode !== "pic") {
      P = null; pts.forEach(p => (p.off = true));
      const n = R.steps.length, at = mode === "reduce" ? Math.min(cur, n) : si, st = at ? R.steps[at - 1] : null, done = mode === "reduce" ? cur > n : si >= n;
      html = `<div class="blk"><span class="nm">[A | b] · scrub any entry</span>${mH(k, S, keys("g", 3, 4), { aug: true, col: (i, j) => (j === 3 ? "c4" : "c1") })}</div>`;
      const Mt = st ? st.M : keys("g", 3, 4).map(r => r.map(x => Q(S[x])));
      if (mode === "move" && !done) { if (!ch) ch = k.shuffle(opChoices(R.steps[si].op, 3), si + 7 * sysI);
        html += `<span class="nm">Next row operation</span><div class="ops">${ch.map((o, j) => `<button class="btn ghost" data-op="${j}">${opH(o)}</button>`).join("")}</div>`; }
      if (fb) html += `<div class="fb">${fb}</div>`;
      const showPiv = done ? R.pivots : mode === "move" ? [R.steps[si].pivot] : st ? [st.pivot] : [];
      drawM(Mt, box, { used: mode === "reduce" && st && st.op.type === "add" ? st.op.j : -1, chg: mode === "reduce" && st ? (st.op.type === "swap" ? [st.op.i, st.op.j] : [st.op.i]) : [], piv: showPiv,
        note: done ? `(x, y, z) = ${solText(R)}` : mode === "reduce" && st ? MR.rowOpT(st.op) : "", noteC: done ? C.green : C.pink });
      spSet(lines(), mode === "reduce" ? cur : done ? n + 1 : si);
      const fwd = R.steps.filter(s => s.phase !== "back").length;
      if (mode === "reduce") k.readout({ title: "Gauss–Jordan elimination", big: cur === 0 ? "start: [A | b]" : cur <= n ? `<span class="c3">${opH(st.op)}</span>` : `<span class="c5">${solText(R)}</span>`,
        rows: [{ lhs: "step", v: `${Math.min(cur, n)} of ${n}`, lbl: cur && cur <= n ? why(st) : "row operations never change the solution set" },
          { lhs: "form", v: at >= n ? "reduced row-echelon (RREF)" : at >= fwd ? "row-echelon (REF)" : "not yet echelon", cls: "c4" }],
        landmark: { hit: cur > n, big: cur > n ? readT() : `step ${cur} of ${n}`, note: cur > n ? (R.kind === "infinite" ? "A column with no pivot is free: call it t and solve the pivot rows for the rest." : R.kind === "none" ? "The last row says 0 = c with c ≠ 0, which no x, y, z can satisfy." : "Every variable column has a pivot, so each row names one variable.") : "Step through, or Play. Pivots are ringed in amber." },
        narr: "New system cycles through cases with one solution, none, and infinitely many." });
      else k.readout({ title: "Your move", big: done ? `<span class="c5">${solText(R)}</span>` : `step ${si + 1} of ${n}: which operation?`,
        rows: [{ lhs: "score", v: `${score[0]} right of ${score[1]} tries` }, { lhs: "pivot", v: done ? "all pivots placed" : `row ${R.steps[si].pivot[0] + 1}, column ${R.steps[si].pivot[1] + 1}`, cls: "c1" }],
        landmark: { hit: done, big: done ? readT() : "Pick the move", note: done ? "Same answer as Gauss–Jordan by machine: the RREF is unique." : "Forward: make the pivot 1, then zeros below it. Back: zeros above each pivot." },
        narr: "Scrub an entry to get a new problem; the moves are re-planned for it." });
    } else {
      const rows = [lineRow(S.p1, S.q1), lineRow(S.p2, S.q2)], R2 = M.rref(rows, { aug: 1 }), sol = solText(R2);
      LK.forEach((key, i) => { pts[i].off = false; pts[i].x = i % 2 ? 0 : S[key]; pts[i].y = i % 2 ? S[key] : 0; });
      const frH = (a, b) => `<span class="fr"><span>${I(a)}</span><span>${S.html(b)}</span></span>`;
      html = `<div class="blk"><span class="nm">Intercept form · scrub or drag</span><span class="c2">${frH("x", "p1")} + ${frH("y", "q1")} = 1</span> &nbsp; <span class="c3">${frH("x", "p2")} + ${frH("y", "q2")} = 1</span></div>
<div class="blk"><span class="nm">Augmented matrix → RREF</span>${MR.matH(rows.map(r => r.map(v => Q(v))), { aug: 1, cls: i => (i ? "c3" : "c2") })} → ${MR.matH(R2.M, { aug: 1, cls: (i, j) => (j === 2 ? "c5" : "") })}</div>`;
      spSet([{ tag: "start", eq: "rows from the two lines" }, ...R2.steps.map((st, n) => ({ tag: `step ${n + 1}`, eq: opH(st.op) })), { tag: "read", eq: `<span class="c5">(${I("x")}, ${I("y")}) = ${sol === "∅" ? "∅" : sol.replace(/t/g, "t")}</span>` }], R2.steps.length + 1);
      P = k.plane(c, { xmin: -7, xmax: 7, ymin: -7, ymax: 7, equal: true, pad }); P.grid(); P.axes(); const lb = [];
      [[S.p1, S.q1, C.cyan], [S.p2, S.q2, C.pink]].forEach(([p, q, col], i) => { const L0 = Math.hypot(p, q), dx = -p / L0 * 30, dy = q / L0 * 30;
        P.clip(() => P.seg(p - dx, -dy, p + dx, dy, R2.kind === "infinite" ? C.green : col, R2.kind === "infinite" ? 4 - i * 2 : 2.4)); lb.push({ text: `(${i + 1})`, x: p / 2, y: q / 2, color: col, font: `600 13px ${F.mono}` }); });
      if (R2.kind === "unique") { const [x, y] = R2.x.map(Q.val); P.dot(x, y, C.green, 6); lb.push({ text: sol, x, y, color: C.green, font: `600 14px ${F.math}` }); }
      D.draw(P); P.labels(lb);
      k.readout({ title: "Two lines, one matrix", big: `<span class="c5">${R2.kind === "unique" ? `(${I("x")}, ${I("y")}) = ${sol}` : R2.kind === "none" ? "∅: parallel lines" : "the same line twice"}</span>`,
        rows: rows.map((r, i) => ({ lhs: `(${i + 1})`, v: `${MR.qT(Q(r[0]))}${I("x")} ${r[1] < 0 ? MI : "+"} ${Math.abs(r[1])}${I("y")} = ${MR.qT(Q(r[2]))}`.replace(/^1<i>/, "<i>").replace(/ 1<i>y/, " <i>y"), cls: i ? "c3" : "c2" })),
        landmark: { hit: R2.kind !== "unique", big: R2.kind === "unique" ? "consistent, independent" : R2.kind === "none" ? "inconsistent: 0 = c" : "dependent: a zero row", note: R2.kind === "unique" ? "Two pivots: the lines cross once. Make them parallel (same slope) to see a row 0 = c." : R2.kind === "none" ? "Same slope, different lines: elimination leaves a false row." : "One equation is a multiple of the other: one free variable." },
        narr: "Try intercepts 4, 2 and 2, 1: parallel. Then 2, 1 and 2, 1: the same line." });
    }
    if (html !== last) { top.innerHTML = html; last = html; }
  });
};

/* ---------- pc-matrix-transform ---------- */
L["pc-matrix-transform"] = k => {
  MathKit.attach(k); css(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), PI = Math.PI, U = PI / 12;
  const FIG = [[0.2, 0.2], [0.45, 0.2], [0.45, 0.7], [0.75, 0.7], [0.75, 0.92], [0.45, 0.92], [0.45, 1.2], [0.95, 1.2], [0.95, 1.45], [0.2, 1.45]];
  const ang = v => MR.piFmt(v, 12), mk = (p, v, o) => ["00", "01", "10", "11"].map((s, i) => ({ key: p + s, value: v[i], cls: i % 2 ? "c3" : "c2", label: `${p} row ${+s[0] + 1} column ${+s[1] + 1}`, ...o }));
  const S = k.vars([...mk("m", [2, 1, 0, 3], { min: -4, max: 4, step: 0.5 }), ...mk("A", [0, -1, 1, 0], { min: -2, max: 2, step: 0.5 }), ...mk("B", [1, 0, 0, -1], { min: -2, max: 2, step: 0.5 }),
    { key: "th", value: PI / 6, min: 0, max: 23 * U, step: U, cls: "c1", fmt: ang, label: "rotation angle" }, { key: "ph", value: PI / 4, min: 0, max: 11 * U, step: U, cls: "c1", fmt: ang, label: "angle of the mirror line" },
    { key: "kx", value: 2, min: -3, max: 3, step: 0.5, cls: "c2", label: "x scale" }, { key: "ky", value: 0.5, min: -3, max: 3, step: 0.5, cls: "c3", label: "y scale" }, { key: "s", value: 1, min: -3, max: 3, step: 0.5, cls: "c3", label: "shear" }], () => {});
  let mode = "cols", kind = "rot", P = null, wide = true;
  const PRE = { rot: [0, -1, 1, 0], refx: [1, 0, 0, -1], shear: [1, 1, 0, 1], scale: [2, 0, 0, 1], proj: [1, 0, 0, 0] };
  const get = p => [[S[p + "00"], S[p + "01"]], [S[p + "10"], S[p + "11"]]], mul = (X, Y) => [0, 1].map(i => [0, 1].map(j => X[i][0] * Y[0][j] + X[i][1] * Y[1][j]));
  const nI = v => Math.round(v / U), ex = (fn, n) => MR.trigExact(fn, Q(((n % 24) + 24) % 24, 12)).html;
  const gal = () => { const n = nI(S.th), m2 = 2 * nI(S.ph);
    if (kind === "rot") return { M: [[Math.cos(S.th), -Math.sin(S.th)], [Math.sin(S.th), Math.cos(S.th)]], H: [[ex("cos", n), ex("sin", n + 12)], [ex("sin", n), ex("cos", n)]], det: "1" };
    if (kind === "ref") return { M: [[Math.cos(2 * S.ph), Math.sin(2 * S.ph)], [Math.sin(2 * S.ph), -Math.cos(2 * S.ph)]], H: [[ex("cos", m2), ex("sin", m2)], [ex("sin", m2), ex("cos", m2 + 12)]], det: MI + "1" };
    if (kind === "scale") return { M: [[S.kx, 0], [0, S.ky]], H: [["kx", 0], [0, "ky"]], det: MR.qT(Q.mul(Q(S.kx), Q(S.ky))) };
    return { M: [[1, S.s], [0, 1]], H: [[1, "s"], [0, 1]], det: "1" }; };
  // handles: 0, 1 columns · 2 rotation ray · 3 mirror line · 4 scale corner · 5 shear tip · 6–9 columns of A and B (Compose)
  const onCircle = (r, per) => (x, y) => { let t = Math.round(Math.atan2(y, x) / U) * U; if (per === PI) t = ((t % PI) + PI) % PI; else t = ((t % (2 * PI)) + 2 * PI) % (2 * PI); return { x: r * Math.cos(t), y: r * Math.sin(t) }; };
  const HB = 2.5, box = (o) => [o[0] - HB, o[0] + HB, o[1] - HB, o[1] + HB], O2 = () => (wide ? [2 * HB + 0.4, 0] : [0, -2 * HB - 0.4]);
  const pts = [{ color: C.cyan, name: "image of i", snap: 0.5, clamp: [-4, 4, -4, 4] }, { color: C.pink, name: "image of j", snap: 0.5, clamp: [-4, 4, -4, 4] },
    { color: C.amber, name: "rotation angle", path: onCircle(2.2, 2 * PI) }, { color: C.amber, name: "mirror line", path: onCircle(2.5, PI) },
    { color: C.amber, name: "image of (1, 1)", snap: 0.5, clamp: [-3, 3, -3, 3] }, { color: C.pink, name: "image of j", snap: 0.5, clamp: [-3, 3, 1, 1], fixY: true },
    { color: C.cyan, name: "A i", snap: 0.5 }, { color: C.pink, name: "A j", snap: 0.5 }, { color: C.cyan, name: "B i", snap: 0.5 }, { color: C.pink, name: "B j", snap: 0.5 }].map(p => ({ x: 0, y: 0, ...p }));
  const sync = () => { const o = O2(); pts.forEach((p, i) => (p.off = !(mode === "cols" ? i < 2 : mode === "gal" ? i === { rot: 2, ref: 3, scale: 4, shear: 5 }[kind] : i >= 6)));
    const set = (i, x, y) => { pts[i].x = x; pts[i].y = y; };
    set(0, S.m00, S.m10); set(1, S.m01, S.m11); set(2, 2.2 * Math.cos(S.th), 2.2 * Math.sin(S.th)); set(3, 2.5 * Math.cos(S.ph), 2.5 * Math.sin(S.ph)); set(4, S.kx, S.ky); set(5, S.s, 1);
    set(6, S.A00, S.A10); set(7, S.A01, S.A11); set(8, o[0] + S.B00, o[1] + S.B10); set(9, o[0] + S.B01, o[1] + S.B11);
    [6, 7].forEach(i => (pts[i].clamp = box([0, 0]))); [8, 9].forEach(i => (pts[i].clamp = box(o))); };
  const D = k.drag(c, () => P, pts, (i, p) => { const o = O2();
    if (i < 2) { S.set(i ? "m01" : "m00", p.x); S.set(i ? "m11" : "m10", p.y); } else if (i === 2) S.set("th", nI(Math.atan2(p.y, p.x) < 0 ? Math.atan2(p.y, p.x) + 2 * PI : Math.atan2(p.y, p.x)) * U);
    else if (i === 3) S.set("ph", nI(((Math.atan2(p.y, p.x) % PI) + PI) % PI) % 12 * U); else if (i === 4) { S.set("kx", p.x); S.set("ky", p.y); } else if (i === 5) S.set("s", p.x);
    else { const pre = i < 8 ? "A" : "B", dx = i < 8 ? 0 : o[0], dy = i < 8 ? 0 : o[1], col = i % 2 ? "1" : "0"; S.set(pre + "0" + col, p.x - dx); S.set(pre + "1" + col, p.y - dy); } }, { label: "Transformation" });
  const T = (Mn, [x, y], o = [0, 0]) => [o[0] + Mn[0][0] * x + Mn[0][1] * y, o[1] + Mn[1][0] * x + Mn[1][1] * y];
  const poly = (ps, fill, stroke, dash) => { const g = c.g; g.save(); g.beginPath(); ps.forEach(([x, y], i) => (i ? g.lineTo(P.X(x), P.Y(y)) : g.moveTo(P.X(x), P.Y(y)))); g.closePath(); if (fill) { g.fillStyle = fill; g.fill(); } if (dash) g.setLineDash(dash); g.strokeStyle = stroke; g.lineWidth = 2; g.stroke(); g.restore(); };
  const arrow = (o, [x, y], col) => c.d.arrow(P.X(o[0]), P.Y(o[1]), P.X(x), P.Y(y), col, 2.6);
  // the picture of one transformation: image grid, unit square, figure (ghost dashed), columns as arrows; clipped to a box
  const scene = (Mn, o, lb, opt = {}) => { const g = c.g, b = opt.box; g.save(); if (b) { g.beginPath(); g.rect(P.X(b[0]), P.Y(b[3]), P.X(b[1]) - P.X(b[0]), P.Y(b[2]) - P.Y(b[3])); g.clip(); }
    if (b) { for (let v = -2; v <= 2; v++) { c.d.line(P.X(o[0] + v), P.Y(b[2]), P.X(o[0] + v), P.Y(b[3]), k.alpha(C.text, v ? 0.06 : 0.3)); c.d.line(P.X(b[0]), P.Y(o[1] + v), P.X(b[1]), P.Y(o[1] + v), k.alpha(C.text, v ? 0.06 : 0.3)); } }
    for (let v = -8; v <= 8; v++) { const a = T(Mn, [v, -8], o), e = T(Mn, [v, 8], o), a2 = T(Mn, [-8, v], o), e2 = T(Mn, [8, v], o); c.d.line(P.X(a[0]), P.Y(a[1]), P.X(e[0]), P.Y(e[1]), k.alpha(C.cyan, 0.12)); c.d.line(P.X(a2[0]), P.Y(a2[1]), P.X(e2[0]), P.Y(e2[1]), k.alpha(C.pink, 0.12)); }
    if (opt.mid) poly(FIG.map(p => T(opt.mid, p, o)), null, k.alpha(C.amber, 0.55), [3, 4]);
    poly([[0, 0], [1, 0], [1, 1], [0, 1]].map(p => T(Mn, p, o)), k.alpha(C.violet, 0.16), C.violet);
    poly(FIG.map(([x, y]) => [o[0] + x, o[1] + y]), null, k.alpha(C.amber, 0.4), [5, 5]); poly(FIG.map(p => T(Mn, p, o)), k.alpha(C.amber, 0.28), C.amber);
    const ti = T(Mn, [1, 0], o), tj = T(Mn, [0, 1], o); arrow(o, ti, C.cyan); arrow(o, tj, C.pink); g.restore();
    if (lb) lb.push({ text: opt.ni || "Aî", x: ti[0], y: ti[1], color: C.cyan, font: `600 14px ${F.math}` }, { text: opt.nj || "Aĵ", x: tj[0], y: tj[1], color: C.pink, font: `600 14px ${F.math}` }); };
  const qM = Mn => Mn.map(r => r.map(v => Q(v))), detQ = X => Q.sub(Q.mul(X[0][0], X[1][1]), Q.mul(X[0][1], X[1][0]));
  const hints = { cols: "Drag the tips of Aî and Aĵ, or scrub an entry", gal: "Drag the amber handle, or scrub the number in the matrix", comp: "Drag the column tips in either panel" };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); k.guard([]); };
  k.modes([["cols", "Columns"], ["gal", "Gallery"], ["comp", "Compose"]], mode, setMode);
  k.group("cols", () => {}); k.group("gal", () => k.select("Type", [["rot", "Rotation"], ["ref", "Reflection"], ["scale", "Scaling"], ["shear", "Shear"]], kind, v => { kind = v; }));
  const PRS = [["rot", "rotate 90°"], ["refx", "reflect in x-axis"], ["shear", "shear"], ["scale", "stretch x by 2"], ["proj", "project on x-axis"]], put = (p, v) => PRE[v].forEach((x, i) => S.set(p + ["00", "01", "10", "11"][i], x));
  k.group("comp", () => { k.select("A", PRS, "rot", v => put("A", v)); k.select("B", PRS, "refx", v => put("B", v)); });
  setMode(mode);
  k.loop(() => {
    c.begin(); wide = c.w >= 600; sync(); const lb = [], mat = (p, cl) => mH(k, S, [[p + "00", p + "01"], [p + "10", p + "11"]], { col: (i, j) => cl || (j ? "c3" : "c2") });
    if (mode === "comp") {
      const o = O2(), A = get("A"), B = get("B"), BA = mul(B, A), AB = mul(A, B);
      P = k.plane(c, wide ? { xmin: -HB - 0.1, xmax: o[0] + HB + 0.1, ymin: -HB - 0.1, ymax: HB + 0.1, equal: true } : { xmin: -HB - 0.1, xmax: HB + 0.1, ymin: o[1] - HB - 0.1, ymax: HB + 0.1, equal: true });
      scene(BA, [0, 0], lb, { box: box([0, 0]), mid: A, ni: "BAî", nj: "BAĵ" }); scene(AB, o, lb, { box: box(o), mid: B, ni: "ABî", nj: "ABĵ" });
      [[0, 0, "A first, then B"], [o[0], o[1], "B first, then A"]].forEach(([x, y, t]) => c.d.text(t, P.X(x - HB + 0.1), P.Y(y + HB) + 14, { color: C.muted, font: `600 12px ${F.ui}` }));
      k.eqline(`${I("A")} = ${mat("A")} &nbsp; ${I("B")} = ${mat("B")}`);
      const qa = qM(BA), qb = qM(AB), same = qa.every((r, i) => r.every((v, j) => Q.eq(v, qb[i][j])));
      k.readout({ title: "Order of composition", big: `${I("BA")} ${same ? "=" : "≠"} ${I("AB")}`,
        rows: [{ lhs: I("BA"), v: MR.matH(qa), lbl: "A first, then B" }, { lhs: I("AB"), v: MR.matH(qb), lbl: "B first, then A" }, { lhs: "area factor", v: `|det| = ${MR.qT(Q.abs(detQ(qa)))} both ways`, cls: "c5" }],
        landmark: { hit: same, big: same ? `${I("AB")} = ${I("BA")}: order does not matter here` : "Different orders, different images", note: same ? "Two rotations, or two scalings along the axes, always commute." : "The first move is the right-hand factor: it acts on the point first." },
        narr: "Pick rotate 90° for both, or stretch and project: when do the two panels agree?" });
    } else {
      const g = mode === "gal" ? gal() : null, Mn = g ? g.M : get("m"), lim = mode === "gal" ? 2.8 : 4.6;
      P = k.plane(c, { xmin: -lim, xmax: lim, ymin: -lim, ymax: lim, equal: true }); P.grid(); P.axes();
      if (g && kind === "rot") { P.seg(0, 0, 2.2 * Math.cos(S.th), 2.2 * Math.sin(S.th), C.amber, 1.6, [5, 4]); c.g.save(); c.g.strokeStyle = C.amber; c.g.lineWidth = 1.6; c.g.beginPath(); c.g.arc(P.X(0), P.Y(0), 26, 0, -S.th, true); c.g.stroke(); c.g.restore(); lb.push({ text: "θ", x: 0.5 * Math.cos(S.th / 2), y: 0.5 * Math.sin(S.th / 2), color: C.amber, font: `600 15px ${F.math}` }); }
      if (g && kind === "ref") P.clip(() => P.seg(-9 * Math.cos(S.ph), -9 * Math.sin(S.ph), 9 * Math.cos(S.ph), 9 * Math.sin(S.ph), C.amber, 1.6, [6, 5]));
      scene(Mn, [0, 0], lb, {});
      const dq = g ? null : detQ(qM(Mn)), dT = g ? g.det : MR.qT(dq), dv = g ? Q.val(Q(g.det.replace(MI, "-"))) : Q.val(dq);
      if (g) { const H = g.H.map(r => r.map(v => (typeof v === "string" && S.defs[v] ? v : typeof v === "number" ? String(v) : v)));
        const lead = { rot: `rotation by ${I("θ")} = ${S.html("th")}`, ref: `reflection in the line at angle ${S.html("ph")}`, scale: "scaling", shear: "horizontal shear" }[kind];
        k.eqline(`${lead}: &nbsp;${mH(k, S, H, { col: (i, j) => (j ? "c3" : "c2"), cell: (i, j, v) => String(v).replace(/^<span class="m">|<\/span>$/g, "") })}`); }
      else k.eqline(`${I("A")} = ${mat("m")} : &nbsp;(${I("x")}, ${I("y")}) ↦ (${S.html("m00")}${I("x")} + ${S.html("m01")}${I("y")}, ${S.html("m10")}${I("x")} + ${S.html("m11")}${I("y")})`);
      const ci = g ? null : [MR.qT(Q(S.m00)), MR.qT(Q(S.m10)), MR.qT(Q(S.m01)), MR.qT(Q(S.m11))];
      k.readout({ title: g ? "Standard transformations" : "The matrix by its columns", big: `det = ${g ? `<span class="c5">${dT}</span>` : `${ci[0]}·${ci[3]} − ${ci[2]}·${ci[1]} = <span class="c5">${dT}</span>`}`,
        rows: [...(g ? [] : [{ lhs: "Aî", v: `(${ci[0]}, ${ci[1]})`, cls: "c2", lbl: "first column" }, { lhs: "Aĵ", v: `(${ci[2]}, ${ci[3]})`, cls: "c3", lbl: "second column" }]),
          { lhs: "area factor", v: `|det| = ${MR.qT(Q.abs(Q(dT.replace(MI, "-"))))}`, cls: "c5", lbl: dv < 0 ? "orientation reversed: the F is mirrored" : dv > 0 ? "orientation kept" : "" }],
        landmark: g ? { hit: Math.abs(Math.abs(dv) - 1) < 1e-9, big: Math.abs(Math.abs(dv) - 1) < 1e-9 ? "Area is preserved" : `Areas × ${MR.qT(Q.abs(Q(dT.replace(MI, "-"))))}`, note: "Rotations, reflections and shears keep every area; scalings multiply it by |k·m|." }
          : { hit: dv === 0, big: dv === 0 ? "det = 0: the plane collapses onto a line" : `unit square → area ${MR.qT(Q.abs(dq))}`, note: dv === 0 ? "The two columns point along one line, so every point lands on it." : "The violet parallelogram is spanned by the two columns." },
        narr: g ? "Snap the angle to π/4 or π/3 to see the exact values in the matrix." : "Line the two tips up with the origin: what happens to the square?" });
    }
    D.draw(P); P.labels(lb);
  });
};
})();
