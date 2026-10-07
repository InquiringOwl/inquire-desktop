/* ============ Labs: Algebra II, batch B11 (arithmetic series, geometric series, binomial theorem) ============ */
(function(){
const L = window.LABS;
const MI = "−";

/* ---------- DOM-free helpers: series and binomial helpers are in MathRules (web/kits/subjects/math.js) ---------- */
const MRx = () => window.MathRules;
const arithSolveN = (a1, d, S, o) => MRx().arithSolveN(a1, d, S, o);
const repDecimal = (int, pre, rep) => MRx().repDecimal(int, pre, rep);
const geomExact = (a1, r, n) => MRx().geomExact(a1, r, n);
const pascalPath = (n, k, m) => MRx().pascalPath(n, k, m);
const monoT = (c, parts, html) => MRx().monoStr(c, parts, html);

/* ---------- small helpers ---------- */
const SUB = "₀₁₂₃₄₅₆₇₈₉", subT = n => String(n).split("").map(ch => SUB[+ch]).join("");
const cl = (cls, s) => `<span class="${cls}">${s}</span>`;
const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const nw = s => `<span style="white-space:nowrap">${s}</span>`;
const sgn = v => (v < 0 ? MI + Math.abs(v) : String(v));
const par = v => (v < 0 ? `(${sgn(v)})` : String(v));

/* ================= Arithmetic series (E · Model) ================= */
L["a2-arith-series"] = k => {
  MathKit.attach(k);
  const { C, F } = k, R = k.MR, c = k.canvas(), d = c.d;
  let mode = "blocks", a1 = 3, dd = 2, n = 9, step = 0, ci = 0, nn = 1, solved = false, P = null;
  const view = {};
  const CASES = [
    { t: "Theatre seats", a1: 20, d: 2, S: 510, unit: "rows", nmax: 24, q: "Row 1 has 20 seats and each row has 2 more than the one in front. How many rows hold 510 seats?" },
    { t: "Salary", a1: 40, d: 2, S: 490, unit: "years", nmax: 20, q: "A salary starts at $40 thousand and rises $2 thousand a year. After how many years has it paid $490 thousand in total?" },
    { t: "Log pile", a1: 24, d: -1, S: 234, unit: "rows", nmax: 24, q: "A pile has 24 logs in the bottom row and one fewer in each row above. How many rows hold 234 logs?" },
    { t: "Odd numbers", a1: 1, d: 2, S: 144, unit: "terms", nmax: 20, q: "How many odd numbers 1 + 3 + 5 + ⋯ add up to 144?" }
  ];
  const HINT = { blocks: "Set a₁, d and n, then press Step", solve: "Move n to reach the green target" };
  k.modes([["blocks", "Gauss blocks"], ["solve", "Find n"]], mode, m => { mode = m; enter(); });
  let sN, st, sM;
  const fixN = () => { const mx = dd < 0 ? Math.min(12, Math.floor((a1 - 1) / -dd) + 1) : 12; sN.setMax(mx); n = sN.v; };
  k.group("blocks", () => {
    k.slider(cl("c1", "<i>a</i><sub>1</sub>"), 1, 8, 1, a1, v => { a1 = v; fixN(); }, String);
    k.slider(cl("c2", "<i>d</i>"), -2, 3, 1, dd, v => { dd = v; fixN(); }, sgn);
    sN = k.slider(cl("c4", "<i>n</i>"), 1, 12, 1, n, v => n = v, String);
    st = k.stepper(() => 2, v => { step = v; k.hint(v ? "" : HINT.blocks); }, { ms: 1400 });
  });
  k.group("solve", () => {
    sM = k.slider(cl("c4", "<i>n</i>"), 1, 24, 1, nn, v => nn = v, String);
    k.button("New problem", () => { ci = (ci + 1) % CASES.length; nn = 1; solved = false; enter(); }, "btn-s");
    k.button("Solve", () => { solved = true; }, "btn-s");
  });
  function enter(){
    k.showGroup(mode);
    if (mode === "blocks") { k.guard([]); k.hint(step ? "" : HINT.blocks); }
    else { const o = CASES[ci]; sM.setMax(o.nmax); sM.set(nn); k.guard([`n = ${arithSolveN(o.a1, o.d, o.S, { positive: true }).n}`]); k.hint(HINT.solve); }
  }
  enter();
  const term = i => a1 + (i - 1) * dd;
  const SnH = (A, D, N) => `${cl("c4", N)}(${cl("c1", A)} + ${A + (N - 1) * D})/2`;

  k.loop(dt => {
    c.begin(); const labels = [];
    if (mode === "blocks") {
      const an = term(n), H = a1 + an, S = n * H / 2;
      k.smooth(view, { xmax: step === 1 ? 2 * n + 1.6 : n + 2.6, slide: step >= 2 ? 1 : 0, show: step >= 1 ? 1 : 0 }, dt, 4);
      P = k.plane(c, { xmin: 0, xmax: view.xmax, ymin: 0, ymax: H * 1.14, xstep: 1, ystep: R.niceStep(H * 1.14), xlabel: "", ylabel: "", pad: { l: 40, r: 14, b: 30 } });
      P.grid(); P.axes();
      const u = P.Y(0) - P.Y(1), bw = 0.86, g = c.g;
      const col = (x, y0, y1, fill, stroke, dash) => { const X0 = P.X(x - bw / 2), W = P.X(x + bw / 2) - X0, Y0 = P.Y(Math.max(y0, y1)), Hh = Math.abs(P.Y(y0) - P.Y(y1));
        if (fill) d.rect(X0, Y0, W, Hh, fill); g.save(); if (dash) g.setLineDash(dash); d.rect(X0, Y0, W, Hh, null, stroke, 1.2); g.restore();
        if (u >= 7) for (let yy = Math.ceil(Math.min(y0, y1)) + 1; yy < Math.max(y0, y1); yy++) d.line(X0 + 1, P.Y(yy), X0 + W - 1, P.Y(yy), k.alpha(C.ink, 0.55), 1); };
      for (let i = 1; i <= n; i++) {
        const ai = term(i);
        if (dd >= 0) { col(i, 0, a1, k.alpha(C.amber, 0.7), C.amber); if (ai > a1) col(i, a1, ai, k.alpha(C.cyan, 0.6), C.cyan); }
        else { col(i, 0, ai, k.alpha(C.amber, 0.7), C.amber); if (ai < a1) col(i, ai, a1, null, k.alpha(C.cyan, 0.7), [3, 3]); }
        P.seg(i, 0, i, ai, "rgba(0,0,0,0)", 0);
      }
      if (view.show > 0.02) {
        const off = (n + 0.8) * (1 - view.slide); g.save(); g.globalAlpha = Math.min(1, view.show);
        for (let i = 1; i <= n; i++) { const h = term(n + 1 - i); col(i + off, H - h, H, k.alpha(C.pink, 0.28), C.pink); }
        g.restore();
        if (view.slide > 0.97) { d.rect(P.X(0.5 - bw / 2) - 2, P.Y(H) - 2, P.X(n + bw / 2) - P.X(0.5 - bw / 2) + 4, P.Y(0) - P.Y(H) + 4, null, C.text, 1.5);
          P.seg(n + 0.75, 0, n + 0.75, H, k.alpha(C.text, 0.7), 1.2, [4, 4]);
          labels.push({ text: `a₁ + aₙ = ${H}`, x: n + 0.8, y: H / 2, color: C.text, font: `13px ${F.math}`, prefer: "e" }); }
        else if (step === 1) labels.push({ text: "copy, turned over", x: n + 0.8 + (n + 1) / 2, y: H, color: C.pink, font: `13px ${F.ui}`, prefer: "n" });
      }
      labels.push({ text: `a₁ = ${a1}`, x: 1, y: a1, color: C.amber, font: `13px ${F.math}`, prefer: "n" });
      if (n > 1) labels.push({ text: `a${subT(n)} = ${an}`, x: n, y: an, color: C.amber, font: `13px ${F.math}`, prefer: "n" });
      if (n > 1 && dd) labels.push({ text: `+${dd < 0 ? "(" + sgn(dd) + ")" : dd} each`, x: 2, y: term(2), color: C.cyan, font: `12px ${F.ui}`, prefer: "ne" });
      P.labels(labels);
      const list = n <= 4 ? Array.from({ length: n }, (_, i) => term(i + 1)).join(" + ") : `${term(1)} + ${term(2)} + ⋯ + ${an}`;
      const hit = step >= 2;
      k.readout({ title: "Arithmetic series", big: nw(`${cl("c3", `<i>S</i><sub>${n}</sub>`)} = ${list}`),
        rows: [{ lhs: `<i>a</i><sub>${n}</sub> = ${cl("c1", a1)} + (${cl("c4", n)} − 1)${cl("c2", par(dd))} =`, v: an, lbl: "the last term: the tallest (or shortest) column" },
          { lhs: `${cl("c3", `<i>S</i><sub>${n}</sub>`)} = ${SnH(a1, dd, n)} =`, v: S, cls: "c3", lbl: `${n} × the average of the first and last terms, ${H}/2` },
          { lhs: `${fr(cl("c4", n), 2)}(2 · ${cl("c1", a1)} + ${n - 1} · ${cl("c2", par(dd))}) =`, v: S, cls: "c3", lbl: "the same sum from a₁, d and n only" }],
        landmark: hit ? { hit: true, big: nw(`2${cl("c3", `<i>S</i><sub>${n}</sub>`)} = ${cl("c4", n)} · ${H} = ${n * H} &nbsp;⇒&nbsp; ${cl("c3", `<i>S</i><sub>${n}</sub> = ${S}`)}`), note: `Two staircases fill a ${n} by ${H} rectangle: each column and its partner add to a₁ + aₙ = ${H}. One staircase is half the rectangle.` }
          : { hit: false, big: "Pair the first and last terms", note: step ? "Slide the copy across (Step) and watch the columns pair up." : "Press Step to bring in a second copy of the staircase, turned upside down." },
        narr: "Change a₁, d and n, then Step again: the copy always fits, because column i and column n + 1 − i add to a₁ + aₙ." });
    } else {
      const o = CASES[ci], sol = arithSolveN(o.a1, o.d, o.S, { positive: true }), Sx = x => x / 2 * (2 * o.a1 + (x - 1) * o.d);
      const hiR = Math.max(o.nmax, ...sol.roots.filter(r => r > 0 && r < 60)), xmax = solved ? hiR + 3 : o.nmax + 1.5;
      let top = Math.max(o.S * 1.3, Sx(Math.min(o.nmax, xmax)) * 1.05); if (o.d < 0) top = Math.max(o.S * 1.3, Sx((2 * o.a1 - o.d) / (2 * -o.d)) * 1.12);
      k.smooth(view, { sx: xmax, sy: top }, dt);
      P = k.plane(c, { xmin: 0, xmax: view.sx, ymin: -view.sy * 0.04, ymax: view.sy, ystep: R.niceStep(view.sy), xstep: view.sx > 30 ? 5 : 2, xlabel: "n", ylabel: "Sₙ", pad: { l: 50, r: 16, b: 30 } });
      P.grid(); P.axes();
      P.curve(Sx, k.alpha(C.pink, 0.45), { w: 1.6, dash: [5, 5], from: 0, to: view.sx });
      P.hasym(o.S, C.green, 1.6);
      for (let i = 1; i <= o.nmax; i++) P.dot(i, Sx(i), i === nn ? C.pink : k.alpha(C.pink, 0.55), i === nn ? 6.5 : 3.5);
      P.seg(nn, 0, nn, Sx(nn), k.alpha(C.violet, 0.8), 1.4, [3, 3]);
      labels.push({ text: `target ${o.S}`, x: view.sx * 0.08, y: o.S, color: C.green, font: `13px ${F.math}`, prefer: "n" });
      labels.push({ text: `S${subT(nn)} = ${Sx(nn)}`, x: nn, y: Sx(nn), color: C.pink, font: `13px ${F.math}`, prefer: "nw" });
      if (solved) sol.rejected.filter(r => r > 0 && r < view.sx).forEach(r => { P.dot(r, o.S, C.muted, 5); labels.push({ text: `${R.fmtN(r, 2)} rejected`, x: r, y: o.S, color: C.muted, font: `12px ${F.ui}`, prefer: "n" }); });
      P.labels(labels);
      const cur = Sx(nn), hit = cur === o.S, diff = o.S - cur;
      const eq = `${o.d === 1 ? "" : o.d === -1 ? MI : sgn(o.d)}<i>n</i><sup>2</sup>${sol.B ? ` ${sol.B < 0 ? MI : "+"} ${Math.abs(sol.B)}<i>n</i>` : ""} ${MI} ${2 * o.S} = 0`;
      const rows = [{ lbl: o.q }, { lhs: `${cl("c3", `<i>S</i><sub>${nn}</sub>`)} = ${fr(cl("c4", nn), 2)}(2 · ${cl("c1", o.a1)} + ${nn - 1} · ${cl("c2", par(o.d))}) =`, v: cur, cls: "c3", lbl: hit ? "on target" : diff > 0 ? `${diff} short of ${o.S}` : `${-diff} over ${o.S}` }];
      if (solved) rows.push({ lhs: `<i>n</i> = ${sol.roots.map(r => R.fmtN(r, 2)).join(" or ")}`, lbl: `roots of ${eq.replace(/<sup>2<\/sup>/g, "²").replace(/<[^>]+>/g, "")}; ` + (sol.rejected.length ? `keep the positive whole number that makes sense; reject ${sol.rejected.map(r => R.fmtN(r, 2)).join(", ")}${o.d < 0 ? " (rows would run out of logs)" : ""}` : "one root") });
      else rows.push({ lhs: eq, lbl: "from 2S = n(2a₁ + (n − 1)d): a quadratic in n; press Solve to see its roots" });
      k.readout({ title: `Find n · ${o.t}`, big: nw(`${cl("c1", `<i>a</i><sub>1</sub> = ${o.a1}`)}, ${cl("c2", `<i>d</i> = ${sgn(o.d)}`)}, ${cl("c3", `<i>S</i> = ${o.S}`)}`), rows,
        landmark: hit ? { hit: true, big: nw(`${cl("c4", `<i>n</i> = ${nn}`)} ${o.unit}: ${cl("c3", `<i>S</i><sub>${nn}</sub> = ${o.S}`)}`), note: sol.rejected.length ? `The quadratic also has the root ${R.fmtN(sol.rejected[sol.rejected.length - 1], 2)}, which is not a sensible number of ${o.unit}.` : "The dot sits on the target line." }
          : { hit: false, big: "Reach the green line", note: "Each step right adds the next term; the dots follow a parabola because Sₙ is quadratic in n." },
        narr: "Then press Solve to see both roots of the quadratic, and New problem for another scenario." });
    }
  });
};

/* ================= Geometric series (E · Model) ================= */
const RL = [[-2, 1], [-3, 2], [-1, 1], [-9, 10], [-3, 4], [-2, 3], [-1, 2], [-1, 3], [-1, 4], [1, 4], [1, 3], [1, 2], [2, 3], [3, 4], [9, 10], [1, 1], [5, 4], [3, 2], [2, 1]];
const DEC = [{ i: 0, pre: "", rep: "3" }, { i: 0, pre: "", rep: "36" }, { i: 0, pre: "1", rep: "6" }, { i: 0, pre: "", rep: "142857" }, { i: 2, pre: "", rep: "45" }, { i: 0, pre: "", rep: "9" }];
const decT = o => `${o.i}.${o.pre}${o.rep.repeat(Math.max(1, Math.ceil(6 / o.rep.length)))}…`;
L["a2-geom-series"] = k => {
  MathKit.attach(k);
  const { C, F } = k, R = k.MR, Q = R.Q, c = k.canvas(), d = c.d, host = k.dom();
  let mode = "square", sq = 0, sn = 3, a1 = 4, ri = 11, n = 6, di = 1, ds = 0, P = null;
  const view = {};
  const HINT = { square: "Move n: each piece is r times the one before", sums: "Move r across 1 and −1 to see the partial sums stop settling", decimal: "" };
  k.modes([["square", "Halving square"], ["sums", "Partial sums"], ["decimal", "Repeating decimal"]], mode, m => { mode = m; enter(); });
  let sR, sNn, stD;
  k.group("square", () => {
    k.select("ratio", [[0, "r = 1/2"], [1, "r = 1/4"]], sq, v => sq = +v);
    k.slider(cl("c4", "<i>n</i>"), 1, 10, 1, sn, v => sn = v, String);
  });
  const rQ = () => Q(RL[ri][0], RL[ri][1]);
  const fixN = () => { const big = Math.abs(Q.val(rQ())) > 1; sNn.setMax(big ? 14 : 25); n = sNn.v; };
  k.group("sums", () => {
    k.slider(cl("c1", "<i>a</i><sub>1</sub>"), 1, 8, 1, a1, v => a1 = v, String);
    sR = k.slider(cl("c2", "<i>r</i>"), 0, RL.length - 1, 1, ri, v => { ri = v; fixN(); }, v => R.qT(Q(RL[v][0], RL[v][1])));
    sNn = k.slider("<i>n</i>", 1, 25, 1, n, v => n = v, String);
    k.button("r = −1/2", () => { ri = 6; sR.set(ri); fixN(); }, "btn-s");
    k.button("r = 9/10", () => { ri = 14; sR.set(ri); fixN(); }, "btn-s");
    k.button("r = 5/4", () => { ri = 16; sR.set(ri); fixN(); }, "btn-s");
  });
  const ask = document.createElement("div"); ask.style.cssText = "font:400 18px/1.5 var(--math);color:var(--text);margin:2px 0 8px"; host.appendChild(ask);
  const SP = k.stepsPanel(host);
  k.group("decimal", () => {
    k.select("decimal", DEC.map((o, i) => [i, decT(o)]), di, v => { di = +v; stD.reset(); enter(); });
    stD = k.stepper(() => decLines().length, v => ds = v, { ms: 1500 });
  });
  function decLines(){
    const o = DEC[di], g = repDecimal(o.i, o.pre, o.rep), q = g.q, hasHead = !Q.zero(g.head), blk = "0." + "0".repeat(g.p) + o.rep;
    const t = j => `${o.rep}/${10 ** (g.p + q * (j + 1))}`, tH = j => fr(o.rep, 10 ** (g.p + q * (j + 1)));
    const lines = [
      { tag: "series", eq: `${decT(o)} = ${hasHead ? `${R.qH(g.head)} + ` : ""}${cl("c1", tH(0))} + ${tH(1)} + ${tH(2)} + ⋯`, why: `The block ${o.rep} repeats; each copy sits ${q} place${q > 1 ? "s" : ""} further right, so it is 1/${10 ** q} of the one before.` },
      { tag: "a₁ and r", eq: `${cl("c1", `<i>a</i><sub>1</sub> = ${t(0)}`)}, &nbsp;${cl("c2", `<i>r</i> = 1/${10 ** q}`)}`, why: "|r| < 1, so the infinite series converges." },
      { tag: "sum", eq: `${cl("c5", "<i>S</i>")} = ${fr(cl("c1", t(0)), `1 ${MI} ${cl("c2", `1/${10 ** q}`)}`)} = ${fr(t(0), `${10 ** q - 1}/${10 ** q}`)} = ${fr(o.rep, `${10 ** q - 1}${g.p ? "0".repeat(g.p) : ""}`)}`, why: `Dividing by 1 − r multiplies by ${10 ** q}/${10 ** q - 1}.` }
    ];
    if (hasHead) lines.push({ tag: "add", eq: `${R.qH(g.head)} + ${R.qH(g.tail)}`, why: "Add the part before the repetition starts." });
    lines.push({ tag: "fraction", eq: `${decT(o)} = ${R.qT(g.value)}`, why: Q.isInt(g.value) ? "The repeating nines add up to exactly the next whole number." : "Lowest terms." });
    return lines;
  }
  function enter(){
    k.showGroup(mode); k.hint(HINT[mode]);
    if (mode === "decimal") { const o = DEC[di]; k.guard([`= ${R.qT(repDecimal(o.i, o.pre, o.rep).value)}`]); } else k.guard([]);
  }
  enter();

  k.loop(dt => {
    c.begin(); const labels = [];
    if (mode === "square") {
      k.split(c, host, { off: true });
      const quarter = sq === 1, r = quarter ? Q(1, 4) : Q(1, 2), Sn = R.geom(r, r).sum(sn), Sinf = R.geom(r, r).sumInf();
      P = k.plane(c, { xmin: -0.08, xmax: 1.08, ymin: -0.08, ymax: 1.08, equal: true, pad: { l: 16, r: 16, b: 16 } });
      const box = (x0, y0, x1, y1, fill, stroke, w = 1.2) => { const X0 = P.X(x0), Y0 = P.Y(y1); d.rect(X0, Y0, P.X(x1) - X0, P.Y(y0) - Y0, fill, stroke, w); };
      box(0, 0, 1, 1, k.alpha(C.text, 0.05), k.alpha(C.text, 0.7), 1.5);
      let x0 = 0, y0 = 0, x1 = 1, y1 = 1;
      for (let j = 1; j <= sn; j++) {
        const on = j === sn, fill = k.alpha(j === 1 ? C.amber : C.pink, on ? 0.75 : 0.32 + 0.2 * (j % 2)), ar = R.qT(Q.pow(r, j));
        let px0, py0, px1, py1;
        if (!quarter) { if (j % 2) { px0 = x0; px1 = (x0 + x1) / 2; py0 = y0; py1 = y1; x0 = px1; } else { px0 = x0; px1 = x1; py0 = (y0 + y1) / 2; py1 = y1; y1 = py0; } }
        else { const mx = (x0 + x1) / 2, my = (y0 + y1) / 2; px0 = x0; px1 = mx; py0 = my; py1 = y1;
          box(mx, my, x1, y1, null, k.alpha(C.cyan, 0.55)); box(x0, y0, mx, my, null, k.alpha(C.cyan, 0.55)); x0 = mx; y1 = my; }
        box(px0, py0, px1, py1, fill, k.alpha(C.text, 0.6));
        if (j <= 4 || on) { const pxw = P.X(px1) - P.X(px0), pxh = P.Y(py0) - P.Y(py1), fs = pxw > 70 ? 15 : 11; if (pxw > d.width(ar, `${fs}px ${F.mono}`) + 6 && pxh > fs + 4) d.text(ar, P.X((px0 + px1) / 2), P.Y((py0 + py1) / 2), { font: `${fs}px ${F.mono}`, color: C.text, align: "center", base: "middle" }); }
      }
      P.labels(labels);
      const gap = Q.sub(Sinf, Sn), hit = Q.val(gap) / Q.val(Sinf) < 0.01;
      k.readout({ title: quarter ? "One quarter, again and again" : "Halving a square", big: nw(`${cl("c3", `<i>S</i><sub>${sn}</sub>`)} = ${quarter ? `${cl("c1", "1/4")} + 1/16 + ⋯` : `${cl("c1", "1/2")} + 1/4 + ⋯`} = ${R.qH(Sn, "c3")}`),
        rows: [{ lhs: `${cl("c1", "<i>a</i><sub>1</sub>")} = ${R.qT(r)}, &nbsp;${cl("c2", `<i>r</i> = ${R.qT(r)}`)}`, lbl: "each piece is r times the piece before it" },
          { lhs: `${fr(`${R.qT(r)}(1 − (${R.qT(r)})<sup>${sn}</sup>)`, `1 − ${R.qT(r)}`)}`, v: R.qH(Sn), cls: "c3", lbl: "the closed form gives the same partial sum" },
          { lhs: quarter ? "uncovered by the three-part pattern" : "unshaded", v: R.qH(quarter ? Q.mul(3, gap) : gap), lbl: quarter ? `the corner square, (1/4)${R.supT(sn)}` : `(1/2)${R.supT(sn)}: half of it is shaded next` }],
        landmark: hit ? { hit: true, big: nw(`${cl("c5", "<i>S</i>")} = ${fr(R.qT(r), `1 − ${R.qT(r)}`)} = ${R.qH(Sinf, "c5")}`), note: quarter ? "The shaded pieces are one of three equal L-shaped parts, so they fill 1/3 of the square in the limit." : "Every piece is half of what was left, so the gap halves each time and the total closes in on the whole square." }
          : { hit: false, big: `gap ${R.qT(gap)}`, note: "Keep adding pieces until the gap is under 1% of the limit." },
        narr: quarter ? "The cyan squares are the other two copies of each shaded piece: amber + 2 cyan + corner = the square." : "Switch to r = 1/4 for a series that adds to 1/3." });
    } else if (mode === "sums") {
      k.split(c, host, { off: true });
      const r = rQ(), rv = Q.val(r), A1 = Q(a1), gs = R.geom(A1, r), Sinf = gs.sumInf();
      const vals = [], terms = []; let s = 0; for (let j = 1; j <= n; j++) { const t = a1 * Math.pow(rv, j - 1); terms.push(t); s += t; vals.push(s); }
      const lo = Math.min(0, ...vals, ...terms, Sinf ? Q.val(Sinf) : 0), hi = Math.max(0, ...vals, ...terms, Sinf ? Q.val(Sinf) : 0), sp = (hi - lo) || 1;
      k.smooth(view, { lo: lo - sp * 0.08, hi: hi + sp * 0.16 }, dt);
      P = k.plane(c, { xmin: 0, xmax: Math.max(n, 6) + 1.2, ymin: view.lo, ymax: view.hi, xstep: n > 14 ? 5 : n > 7 ? 2 : 1, ystep: R.niceStep(view.hi - view.lo), xlabel: "n", ylabel: "", pad: { l: 60, r: 16, b: 30 } });
      P.grid(); P.axes();
      if (Sinf) P.hasym(Q.val(Sinf), C.green, 1.8);
      const bw = Math.min(0.32, 0.8), g = c.g;
      terms.forEach((t, j) => { const x = j + 1 - 0.22, X0 = P.X(x - bw / 2), W = Math.max(2, P.X(x + bw / 2) - X0); const ya = P.Y(Math.max(P.ymin, Math.min(P.ymax, 0))), yb = P.Y(Math.max(P.ymin, Math.min(P.ymax, t))); d.rect(X0, Math.min(ya, yb), W, Math.max(1.5, Math.abs(yb - ya)), k.alpha(C.amber, j === n - 1 ? 0.9 : 0.5)); });
      g.save(); g.strokeStyle = k.alpha(C.pink, 0.7); g.lineWidth = 1.6; g.beginPath(); vals.forEach((v, j) => { const X = P.X(j + 1), Y = P.Y(Math.max(P.ymin - 50, Math.min(P.ymax + 50, v))); j ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.stroke(); g.restore();
      vals.forEach((v, j) => P.dot(j + 1, v, j === n - 1 ? C.pink : k.alpha(C.pink, 0.7), j === n - 1 ? 6.5 : 3.5));
      if (Sinf) { P.seg(n, vals[n - 1], n, Q.val(Sinf), k.alpha(C.green, 0.85), 1.3, [2, 3]); labels.push({ text: `S = ${R.qT(Sinf)}`, x: Math.max(n, 6) * 0.15 + 0.4, y: Q.val(Sinf), color: C.green, font: `14px ${F.math}`, prefer: "n" }); }
      const ex = geomExact(A1, r, n), SnT = ex ? R.qT(ex) : "≈ " + R.fmtN(vals[n - 1], 4);
      labels.push({ text: `S${subT(n)} = ${SnT.replace("≈ ", "≈")}`, x: n, y: vals[n - 1], color: C.pink, font: `13px ${F.math}`, prefer: "nw" });
      P.labels(labels);
      const first = Array.from({ length: Math.min(4, n) }, (_, j) => R.qT(gs.term(j + 1))).join(", ") + (n > 4 ? ", …" : "");
      const conv = !!Sinf, gapv = conv ? Q.val(Sinf) - vals[n - 1] : 0, hit = conv && Math.abs(gapv) <= 0.01 * Math.abs(Q.val(Sinf));
      const rT = R.qT(r), absT = R.qT(Q.abs(r));
      const div = rv === 1 ? `r = 1: every term is ${a1}, so Sₙ = ${a1}n grows without bound.` : rv === -1 ? `r = −1: the partial sums alternate ${a1}, 0, ${a1}, 0, … and never settle.` : `|r| = ${absT} > 1: the terms grow, so the partial sums ${rv < 0 ? "swing wider and wider" : "grow without bound"}.`;
      k.readout({ title: conv ? "Geometric series · converges" : "Geometric series · diverges", big: nw(`${cl("c3", `<i>S</i><sub>${n}</sub>`)} ${ex ? "= " + R.qH(ex, "c3") : cl("c3", SnT)}`),
        rows: [{ lhs: `${fr(`${cl("c1", a1)}(1 − ${cl("c2", par(rT))}<sup>${n}</sup>)`, `1 − ${cl("c2", par(rT))}`)}`, lbl: ex && ex.d !== 1 ? `≈ ${R.fmtN(Q.val(ex), 5)}` : "the closed form for the first n terms" }, { lhs: "terms", v: first, cls: "c1", lbl: `each is the one before times ${rT}` },
          conv ? { lhs: `${cl("c5", "<i>S</i>")} = ${fr(cl("c1", a1), `1 − ${par(rT)}`)}`, v: R.qH(Sinf, "c5"), lbl: `|r| = ${absT} < 1: the partial sums approach this limit` } : { lhs: `|${cl("c2", "<i>r</i>")}| = ${absT} ≥ 1`, v: "no sum", lbl: "a₁/(1 − r) would give a wrong answer here" },
          conv ? { lhs: `${cl("c5", "<i>S</i>")} − ${cl("c3", `<i>S</i><sub>${n}</sub>`)} = <i>S</i> · <i>r</i><sup>${n}</sup>`, v: ex ? R.qT(Q.sub(Sinf, ex)) : "≈ " + R.fmtN(gapv, 5), lbl: rv < 0 ? "the sign of the gap flips each term: the sums land above and below S" : "the gap shrinks by the factor r each term" } : null],
        landmark: conv ? (hit ? { hit: true, big: `within 1% of ${cl("c5", `<i>S</i> = ${R.qT(Sinf)}`)}`, note: `After ${n} terms the partial sum is ${SnT.replace("≈ ", "about ")}; more terms only close the remaining gap.` } : { hit: false, big: "converging", note: "Add terms (n) until the pink dot is within 1% of the green line." })
          : { hit: false, big: "diverges", note: div },
        narr: "Try r = −1/2, then r = 9/10 (slow), then r = 5/4: once |r| ≥ 1 the green limit line disappears." });
    } else {
      const lines = decLines(), N = lines.length, o = DEC[di], g = repDecimal(o.i, o.pre, o.rep), done = ds >= N;
      ask.innerHTML = `Write ${nw(`<span class="m">${decT(o)}</span>`)} as a fraction.`;
      SP.set(lines, ds - 1);
      const pad = k.split(c, host, { side: "left", frac: 0.52, hfrac: 0.44 });
      const L0 = pad.l, T0 = pad.t, Wd = c.w - pad.l - pad.r, Hd = c.h - pad.t - pad.b;
      const hd = Q.zero(g.head) ? 0 : 1, fit = m => (Hd - 16) / (m + hd + 7.5);
      const nT = fit(4) >= 20 ? Math.max(2, Math.min(4, Math.floor(16 / (g.p + g.q)))) : fit(3) >= 18 ? Math.min(3, Math.max(2, Math.floor(16 / (g.p + g.q)))) : 2, maxLen = 2 + g.p + g.q * nT + String(o.i).length;
      const lh = Math.min(26, fit(nT)), fs = Math.max(10, Math.min(18, lh - 6, Math.floor(Wd / (maxLen * 0.68 + 2)))), mono = `${fs}px ${F.mono}`, cw = d.width("0", mono);
      const right = L0 + Math.min(Wd - 8, cw * (maxLen + 3)), x0 = right - cw * maxLen;
      let y = T0 + Math.min(18, lh);
      d.text("adding the pieces", L0 + 4, y, { font: `600 11px ${F.ui}`, color: C.faint }); y += lh;
      if (ds >= 1) {
        if (!Q.zero(g.head)) { d.text(`${o.i}.${o.pre}`, x0, y, { font: mono, color: C.text }); y += lh; }
        for (let j = 0; j < nT; j++) {
          const lead = `${j === 0 && Q.zero(g.head) ? o.i : 0}.${"0".repeat(g.p + g.q * j)}`;
          const w1 = d.text(lead, x0, y, { font: mono, color: C.muted });
          d.text(o.rep, x0 + w1, y, { font: mono, color: j === 0 ? C.amber : C.cyan }); y += lh;
        }
        d.text("+ ⋯", x0, y, { font: mono, color: C.muted }); y += 6;
        d.line(x0, y, right, y, C.muted, 1); y += lh;
        d.text(decT(o), x0, y, { font: mono, color: C.pink }); y += lh + 4;
        if (ds >= 2) { const sf = `${Math.max(11, fs - 3)}px ${F.mono}`; d.text(`a₁ = ${o.rep}/${10 ** (g.p + g.q)}`, x0, y, { font: sf, color: C.amber }); y += lh - 4; d.text(`r = 1/${10 ** g.q}`, x0, y, { font: sf, color: C.cyan }); y += lh; }
        if (done) d.text(`= ${R.qT(g.value)}`, x0, y, { font: `${fs + 2}px ${F.math}`, color: C.green });
      } else d.text("Press Step to split the decimal into pieces.", L0 + 4, y, { font: `13px ${F.sans}`, color: C.muted });
      k.readout({ title: "Repeating decimal", big: nw(`<span class="m">${decT(o)}</span>`),
        rows: [{ lhs: "repeating block", v: o.rep, cls: "c1", lbl: `${g.q} digit${g.q > 1 ? "s" : ""}${g.p ? `, after ${g.p} digit${g.p > 1 ? "s" : ""} that do not repeat` : ""}` },
          { lhs: "step", v: `${Math.min(ds, N)} of ${N}`, lbl: ds ? lines[Math.min(ds, N) - 1].tag : "press Step" }],
        landmark: done ? { hit: true, big: nw(`${decT(o)} = ${R.qH(g.value, "c5")}`), note: Q.isInt(g.value) ? "0.999… is not just close to 1: as an infinite geometric series its sum is exactly 1." : `Check: divide ${g.value.n} by ${g.value.d} and the block ${o.rep} repeats.` }
          : { hit: false, big: "a₁/(1 − r)", note: "The block is the first term; moving it along by its length multiplies by r." },
        narr: "Try 0.1666…, where one digit comes before the repetition, and 0.999…" });
    }
  });
};

/* ================= The binomial theorem (C · Steps) ================= */
const AV = [-3, -2, -1, 1, 2, 3], BV = [-4, -3, -2, -1, 1, 2, 3, 4];
const TF = [
  { A: 1, u: "x", B: 3, v: "", n: 6, kind: "term", r: 3 },
  { A: 2, u: "x", B: -1, v: "", n: 5, kind: "coef", m: 3 },
  { A: 1, u: "x", B: -2, v: "", n: 8, kind: "term", r: 5 },
  { A: 3, u: "x", B: 2, v: "", n: 4, kind: "has", m: 2 },
  { A: 2, u: "a", B: -1, v: "b", n: 6, kind: "term", r: 4 },
  { A: 1, u: "x", B: -3, v: "", n: 5, kind: "coef", m: 1 }
];
// (A u + B v) as HTML / text, e.g. (2x − 3), (2a − b)
const binH = (A, u, B, v) => `(${A === 1 ? "" : A === -1 ? MI : A}<i>${u}</i> ${B < 0 ? MI : "+"} ${Math.abs(B) === 1 && v ? "" : Math.abs(B)}${v ? `<i>${v}</i>` : ""})`;
const partH = (c, u) => (u ? (c === 1 ? `<i>${u}</i>` : c === -1 ? `${MI}<i>${u}</i>` : `${sgn(c)}<i>${u}</i>`) : sgn(c));
L["a2-binomial"] = k => {
  MathKit.attach(k);
  const { C, F } = k, R = k.MR, Q = R.Q, c = k.canvas(), d = c.d, host = k.dom();
  let mode = "pascal", pn = 6, pk = 2, ai = 4, bi = 1, en = 5, ek = 1, ti = 0, ts = 0, anim = true, pathM = 0, pathT = 0;
  const HINT = { pascal: "Click an entry, or set n and k", expand: "", term: "" };
  k.modes([["pascal", "Pascal's triangle"], ["expand", "Expand (ax + b)ⁿ"], ["term", "Term finder"]], mode, m => { mode = m; enter(); });
  let sPn, sPk, sEn, sEk, stT;
  k.group("pascal", () => {
    sPn = k.slider("row <i>n</i>", 0, 10, 1, pn, v => { pn = v; sPk.setMax(v); pk = sPk.v; pathM = 0; }, String);
    sPk = k.slider(cl("c1", "<i>k</i>"), 0, 6, 1, pk, v => { pk = v; pathM = 0; }, String);
    k.check("animate paths", anim, v => anim = v);
  });
  k.group("expand", () => {
    k.slider(cl("c2", "<i>a</i>"), 0, AV.length - 1, 1, ai, v => ai = v, v => sgn(AV[v]));
    k.slider(cl("c3", "<i>b</i>"), 0, BV.length - 1, 1, bi, v => bi = v, v => sgn(BV[v]));
    sEn = k.slider("<i>n</i>", 1, 7, 1, en, v => { en = v; sEk.setMax(v); ek = sEk.v; }, String);
    sEk = k.slider(cl("c1", "<i>k</i>"), 0, 5, 1, ek, v => ek = v, String);
  });
  const ask = document.createElement("div"); ask.style.cssText = "font:400 18px/1.5 var(--math);color:var(--text);margin:2px 0 8px"; host.appendChild(ask);
  const tbl = document.createElement("div"); tbl.style.cssText = "font:400 17px/1.7 var(--math);color:var(--muted)"; host.appendChild(tbl);
  const SP = k.stepsPanel(host);
  k.group("term", () => {
    k.button("New problem", () => { ti = (ti + 1) % TF.length; stT.reset(); enter(); }, "btn-s");
    stT = k.stepper(() => 5, v => ts = v, { ms: 1500 });
  });
  const tfK = o => (o.kind === "term" ? o.r - 1 : o.n - o.m);
  const tfAns = o => { const kk = tfK(o), cf = R.nCr(o.n, kk) * o.A ** (o.n - kk) * o.B ** kk; return { kk, cf, t: monoT(cf, [[o.u, o.n - kk], [o.v, kk]]), tt: monoT(cf, [[o.u, o.n - kk], [o.v, kk]], false) }; };
  function enter(){
    k.showGroup(mode); k.hint(HINT[mode]);
    if (mode === "term") k.guard([`= ${tfAns(TF[ti]).tt}`]); else k.guard([]);
  }
  enter();
  // click on the triangle (Pascal mode)
  let geo = null;
  c.cv.addEventListener("pointerdown", e => { if (mode !== "pascal" || !geo) return; const q = c.xy(e); let best = null, bd = geo.dx * 0.55;
    for (let i = 0; i <= geo.N; i++) for (let j = 0; j <= i; j++) { const p = geo.pos(i, j), dd = Math.hypot(p.x - q.x, p.y - q.y); if (dd < bd) { bd = dd; best = [i, j]; } }
    if (best) { pn = best[0]; sPn.set(pn); sPk.setMax(pn); pk = best[1]; sPk.set(pk); pathM = 0; } });

  // Pascal's triangle rows 0..N inside the box {x, y, w, h}; o: {row, k, region: (i, j) => bool, parents, dim}
  function pascal(box, N, o = {}){
    const dx = Math.min(box.w / (N + 1.2), 58), dy = Math.min(box.h / (N + 1), dx * 0.95), x0 = box.x + box.w / 2, y0 = box.y + dy * 0.55;
    const pos = (i, j) => ({ x: x0 + (j - i / 2) * dx, y: y0 + i * dy });
    const fs = Math.max(9, Math.min(17, Math.floor(dx * 0.4))), font = `${fs}px ${F.mono}`;
    if (o.row !== undefined && o.row <= N) { const a = pos(o.row, 0), b = pos(o.row, o.row); d.rr(a.x - dx * 0.5, a.y - dy * 0.42, b.x - a.x + dx, dy * 0.84, 6, k.alpha(C.amber, 0.1), k.alpha(C.amber, 0.45)); }
    for (let i = 0; i <= N; i++) for (let j = 0; j <= i; j++) {
      const p = pos(i, j), v = R.nCr(i, j), sel = i === o.row && j === o.k, par = o.parents && i === o.row - 1 && (j === o.k - 1 || j === o.k), reg = o.region && o.region(i, j);
      if (sel) d.circle(p.x, p.y, Math.min(dx, dy) * 0.46, k.alpha(C.amber, 0.3), C.amber, 2);
      else if (par) d.circle(p.x, p.y, Math.min(dx, dy) * 0.42, null, j === o.k - 1 ? C.cyan : C.pink, 1.6);
      else if (reg) d.circle(p.x, p.y, Math.min(dx, dy) * 0.4, k.alpha(C.amber, 0.08));
      d.text(String(v), p.x, p.y, { font, color: sel ? C.text : par ? C.text : i === o.row ? C.amber : o.dim ? C.faint : C.muted, align: "center", base: "middle" });
    }
    return { dx, dy, pos, N };
  }

  k.loop((dt, now) => {
    c.begin();
    const mb = k.stage.querySelector(".modes"), top = mb ? mb.offsetTop + mb.offsetHeight + 10 : 12;
    if (mode === "pascal") {
      k.split(c, host, { off: true });
      const N = Math.max(pn, c.w < 520 ? 8 : 10), cnt = R.nCr(pn, pk);
      geo = pascal({ x: 10, y: top, w: c.w - 20, h: c.h - top - 12 }, N, { row: pn, k: pk, parents: pn > 0 && pk > 0 && pk < pn, region: (i, j) => i <= pn && j <= pk && i - j <= pn - pk });
      if (anim && pn > 0) { pathT += dt; if (pathT > 0.9) { pathT = 0; pathM = (pathM + 1) % cnt; } }
      const path = pascalPath(pn, pk, Math.min(pathM, cnt - 1));
      let i0 = 0, j0 = 0; const g = c.g;
      path.forEach(s => { const a = geo.pos(i0, j0); i0++; if (s === "b") j0++; const b = geo.pos(i0, j0); const t = 0.3;
        g.save(); g.strokeStyle = s === "a" ? C.cyan : C.pink; g.lineWidth = 3; g.lineCap = "round"; g.beginPath(); g.moveTo(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t); g.lineTo(a.x + (b.x - a.x) * (1 - t), a.y + (b.y - a.y) * (1 - t)); g.stroke(); g.restore(); });
      const word = path.map(s => cl(s === "a" ? "c2" : "c3", `<i>${s}</i>`)).join(" ");
      const hit = pk > 0 && pk < pn;
      k.readout({ title: "Pascal's triangle", big: nw(`${cl("c1", `<i>C</i>(${pn}, ${pk})`)} = ${fr(`${pn}!`, `${pk}! ${pn - pk}!`)} = ${cl("c1", cnt)}`),
        rows: [{ lhs: `path ${Math.min(pathM, cnt - 1) + 1} of ${cnt}`, v: pn ? word : "start", lbl: `from the top: ${pn - pk} step${pn - pk === 1 ? "" : "s"} down-left (${cl("c2", "a")}) and ${pk} down-right (${cl("c3", "b")}), in any order` },
          { lhs: `term of (<i>a</i> + <i>b</i>)<sup>${pn}</sup>`, v: nw(`${cnt === 1 ? "" : cl("c1", cnt)}${pn - pk ? cl("c2", `<i>a</i>${pn - pk > 1 ? `<sup>${pn - pk}</sup>` : ""}`) : ""}${pk ? cl("c3", `<i>b</i>${pk > 1 ? `<sup>${pk}</sup>` : ""}`) : ""}${!pn ? "1" : ""}`), lbl: "each path is one way to pick a or b from every bracket" },
          { lhs: `row ${pn} sum`, v: `2<sup>${pn}</sup> = ${2 ** pn}`, lbl: `symmetry: C(${pn}, ${pk}) = C(${pn}, ${pn - pk})` }],
        landmark: hit ? { hit: true, big: nw(`${cl("c1", cnt)} = <span class="c2">${R.nCr(pn - 1, pk - 1)}</span> + <span class="c3">${R.nCr(pn - 1, pk)}</span>`), note: `Pascal's rule: every path to C(${pn}, ${pk}) arrives from one of the two entries above it, so the counts add.` }
          : { hit: false, big: pn ? `edge: C(${pn}, ${pk}) = 1` : "the top: C(0, 0) = 1", note: "On an edge there is only one path, all a's or all b's. Pick an inner entry to see Pascal's rule." },
        narr: "Click any entry. Amber circles mark every entry a path to it can pass through." });
    } else if (mode === "expand") {
      const a = AV[ai], b = BV[bi], N = en, kk = Math.min(ek, N);
      const pad = k.split(c, host, { side: "left", frac: 0.56, hfrac: 0.56 });
      ask.innerHTML = `<span class="m">${binH(a, "x", b, "")}<sup>${N}</sup> = </span>`;
      const terms = []; for (let j = 0; j <= N; j++) { const cf = R.nCr(N, j) * a ** (N - j) * b ** j; terms.push({ j, cf, t: monoT(cf, [["x", N - j]]) }); }
      const html = terms.map((t, j) => { const s = j === 0 ? t.t : (t.cf < 0 ? ` ${MI} ` : " + ") + t.t.replace(MI, ""); return j === kk ? `<span style="color:var(--text);background:rgba(242,184,75,.16);border-radius:3px;padding:0 2px">${s}</span>` : s; }).join("");
      const brk = `${cl("c1", R.nCr(N, kk))} · ${cl("c2", `(${partH(a, "x")})${N - kk === 1 ? "" : `<sup>${N - kk}</sup>`}`)} · ${cl("c3", `(${sgn(b)})${kk === 1 ? "" : `<sup>${kk}</sup>`}`)}`;
      tbl.innerHTML = `<div class="m" style="color:var(--muted)">${html}</div><div style="margin-top:10px;font:600 11px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--faint)">term k = ${kk}</div><div class="m" style="color:var(--text)">${brk} = ${terms[kk].t}</div>`;
      SP.set([], -1);
      const box = { x: pad.l - 24, y: pad.t, w: c.w - pad.l - pad.r + 30, h: c.h - pad.t - 14 };
      pascal(box, N, { row: N, k: kk, dim: true });
      const sum = (a + b) ** N, hit = b < 0;
      k.readout({ title: "Binomial expansion", big: nw(`${binH(a, "x", b, "")}<sup>${N}</sup>: ${N + 1} terms`),
        rows: [{ lhs: `term ${cl("c1", "<i>k</i>")} = ${kk}`, v: nw(`${brk}`), lbl: `= ${terms[kk].t.replace(/<[^>]+>/g, "")}: power of x falls to ${N - kk}, power of b rises to ${kk}` },
          { lhs: "coefficients add to", v: `(${sgn(a)} + ${par(b)})<sup>${N}</sup> = ${sgn(sum)}`, lbl: "set x = 1: the expansion becomes the sum of its coefficients" }],
        landmark: hit ? { hit: true, big: "signs alternate", note: `b = ${sgn(b)} is negative, so its odd powers are negative: the terms with k odd${a < 0 ? " (combined with the sign of a)" : ""} change sign.` }
          : { hit: false, big: `row ${N}: ${R.pascalRow(N).join(", ")}`, note: "Make b negative to see the signs alternate." },
        narr: "Move k: the highlighted term and the circled entry of row n move together." });
    } else {
      const o = TF[ti], A = tfAns(o), kk = A.kk, n = o.n, Ck = R.nCr(n, kk), done = ts >= 5;
      const pad = k.split(c, host, { side: "left", frac: 0.56, hfrac: 0.56 });
      const qtxt = o.kind === "term" ? `Find the ${["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"][o.r]} term of` : o.kind === "coef" ? `Find the coefficient of <i>${o.u}</i>${o.m > 1 ? R.supT(o.m) : ""} in` : `Find the term containing <i>${o.u}</i>${R.supT(o.m)} in`;
      ask.innerHTML = `${qtxt} ${nw(`<span class="m">${binH(o.A, o.u, o.B, o.v)}<sup>${n}</sup></span>`)}.`; tbl.innerHTML = "";
      const aP = partH(o.A, o.u), bP = partH(o.B, o.v), aB = o.A === 1 ? aP : `(${aP})`, bB = o.B === 1 && o.v ? bP : `(${bP})`, aPow = monoT(o.A ** (n - kk), [[o.u, n - kk]]), bPow = monoT(o.B ** kk, [[o.v, kk]]);
      const lines = [
        { tag: "parts", eq: `${cl("c2", `<i>a</i> = ${aP}`)}, &nbsp;${cl("c3", `<i>b</i> = ${bP}`)}, &nbsp;<i>n</i> = ${n}`, why: o.B < 0 ? "Keep the minus sign with b." : "The term is C(n, k) aⁿ⁻ᵏ bᵏ." },
        { tag: "which k", eq: o.kind === "term" ? `<i>k</i> = ${o.r} − 1 = ${kk}` : `power of <i>${o.u}</i>: ${n} − <i>k</i> = ${o.m}, &nbsp;<i>k</i> = ${kk}`, why: o.kind === "term" ? "Terms are counted from k = 0." : `The power of ${o.u} is the power of a, n − k.` },
        { tag: "coefficient", eq: `${cl("c1", `<i>C</i>(${n}, ${kk})`)} = ${fr(`${n}!`, `${kk}! ${n - kk}!`)} = ${cl("c1", Ck)}`, why: `Row ${n}, entry ${kk} of Pascal's triangle (counting from 0).` },
        { tag: "powers", eq: `${cl("c2", `${aB}${n - kk === 1 ? "" : R.supT(n - kk)} = ${aPow}`)}, &nbsp;${cl("c3", `${bB}${kk === 1 ? "" : R.supT(kk)} = ${bPow}`)}`, why: "Raise the coefficient and the sign, not only the variable." },
        { tag: "multiply", eq: `${Ck} · ${aPow} · ${bPow.startsWith(MI) ? `(${bPow})` : bPow} = ${A.t}`, why: o.kind === "coef" ? `The coefficient is ${sgn(A.cf)}.` : "This is the requested term." }
      ];
      SP.set(lines, ts - 1);
      const box = { x: pad.l - 24, y: pad.t, w: c.w - pad.l - pad.r + 30, h: c.h - pad.t - 14 };
      pascal(box, n, ts >= 3 ? { row: n, k: kk } : ts >= 1 ? { row: n } : { dim: true });
      k.readout({ title: "Term finder", big: nw(`${binH(o.A, o.u, o.B, o.v)}<sup>${n}</sup>`),
        rows: [{ lhs: "step", v: `${Math.min(ts, 5)} of 5`, lbl: ts ? lines[ts - 1].tag : "press Step" },
          { lhs: `term (<i>k</i> + 1)`, v: `${cl("c1", "<i>C</i>(<i>n</i>, <i>k</i>)")}${cl("c2", "<i>a</i><sup><i>n</i>−<i>k</i></sup>")}${cl("c3", "<i>b</i><sup><i>k</i></sup>")}`, lbl: "only one value of k is needed" }],
        landmark: done ? { hit: true, big: nw(`<span class="m">${A.t}</span>`), note: o.kind === "coef" ? `Coefficient ${sgn(A.cf)}: C(${n}, ${kk}) times the powers of both coefficients.` : `Term ${kk + 1} of ${n + 1}.` }
          : { hit: false, big: "k first, then C(n, k)", note: "Find k before computing anything; the rest follows from one term of the theorem." },
        narr: "Step through, then New problem. Watch the triangle: row n lights up, then entry k." });
    }
  });
};
})();
