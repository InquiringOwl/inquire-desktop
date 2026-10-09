/* ============ Labs: structure of number ============ */
(function(){
const L = window.LABS;
const lerp = (a, b, t) => a + (b - a) * t;
const sgn = n => n < 0 ? "−" + Math.abs(n) : String(n);
const par = n => n < 0 ? "(−" + Math.abs(n) + ")" : String(n);

/* ---------- integers ---------- */
L["integers"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let a = 3, b = -7, op = "+", t0 = 0, clock = 0;
  const restart = () => { t0 = clock; };
  k.slider(`<span class="c2"><i>a</i></span>`, -10, 10, 1, a, v => { a = v; restart(); });
  k.select("op", [["+", "+"], ["-", "−"], ["*", "×"]], op, v => { op = v; restart(); });
  k.slider(`<span class="c3"><i>b</i></span>`, -10, 10, 1, b, v => { b = v; restart(); });
  k.button("Replay", restart, "btn ghost");
  let lo = -12, hi = 12;
  k.loop(dt => {
    k.publish("result", op === "+" ? a + b : op === "-" ? a - b : a * b);   // lesson figures + Your move goals
    clock += dt; c.begin(); const { w, h } = c;
    const res = op === "+" ? a + b : op === "-" ? a - b : a * b;
    // hops: list of [from, to]
    const hops = []; let start;
    if (op === "*") { start = 0; const size = b >= 0 ? a : -a, n = Math.abs(b); let p = 0; for (let i = 0; i < n; i++) { hops.push([p, p + size]); p += size; } }
    else { start = a; const m = op === "+" ? b : -b; const dir = Math.sign(m); let p = a; const n = Math.abs(m); if (n > 12) { hops.push([p, p + m]); } else for (let i = 0; i < n; i++) { hops.push([p, p + dir]); p += dir; } }
    const need = [0, a, res, start, ...hops.flat()];
    const tlo = Math.min(-10, ...need) - 2, thi = Math.max(10, ...need) + 2;
    lo = lerp(lo, tlo, Math.min(1, dt * 6)); hi = lerp(hi, thi, Math.min(1, dt * 6));
    const x0 = 34, x1 = w - 34, y = h * .64, X = v => x0 + (x1 - x0) * (v - lo) / (hi - lo);
    // number line
    d.rect(X(lo), y - 3, X(0) - X(lo), 6, k.alpha(C.pink, .08)); d.rect(X(0), y - 3, X(hi) - X(0), 6, k.alpha(C.cyan, .08));
    d.line(x0, y, x1, y, C.muted, 2);
    const span = hi - lo, stp = span > 60 ? 10 : span > 30 ? 5 : span > 16 ? 2 : 1;
    for (let v = Math.ceil(lo); v <= hi; v++) { const major = v % stp === 0; if (!major && span > 40) continue; d.line(X(v), y - (major ? 8 : 4), X(v), y + (major ? 8 : 4), v === 0 ? C.text : C.faint, v === 0 ? 2 : 1); if (major) d.text(sgn(v), X(v), y + 26, { font: `${v === 0 ? 600 : 400} 12px ${F.mono}`, color: v === 0 ? C.text : C.faint, align: "center" }); }
    d.text("negative", x0, y - 60, { font: `600 11px ${F.ui}`, color: k.alpha(C.pink, .7) }); d.text("positive", x1, y - 60, { font: `600 11px ${F.ui}`, color: k.alpha(C.cyan, .7), align: "right" });
    const dur = k.reduce ? 0.01 : Math.max(0.12, Math.min(0.4, 3 / Math.max(1, hops.length)));
    const el = clock - t0, done = Math.min(hops.length, Math.floor(el / dur));
    const partial = hops.length && done < hops.length ? (el - done * dur) / dur : 1;
    hops.forEach(([p, q], i) => { if (i < done) d.hop(X(p), X(q), y - 2, Math.min(60, 18 + Math.abs(X(q) - X(p)) * .5), k.alpha(C.pink, .85), 2); });
    let pos = hops.length ? (done < hops.length ? lerp(hops[done][0], hops[done][1], partial) : hops[hops.length - 1][1]) : start;
    d.circle(X(start), y, 7, C.cyan); d.text(op === "*" ? "0" : "a", X(start), y - 16, { font: `italic 16px ${F.math}`, color: C.cyan, align: "center" });
    d.circle(X(pos), y, 9, C.amber);
    if (done >= hops.length) d.text(sgn(res), X(res), y + 52, { font: `600 18px ${F.mono}`, color: C.amber, align: "center" });
    const expr = `${sgn(a)} ${op === "*" ? "×" : op === "-" ? "−" : "+"} ${par(b)} = ${sgn(res)}`;
    d.text(expr, w / 2, 50, { font: `32px ${F.math}`, color: C.text, align: "center" });
    let rule;
    if (op === "+") rule = b >= 0 ? `Adding a positive moves right ${b} step${b === 1 ? "" : "s"}.` : `Adding a negative moves left ${-b} step${b === -1 ? "" : "s"}.`;
    else if (op === "-") rule = `Subtracting ${par(b)} is adding its opposite, ${sgn(-b)}. So ${sgn(a)} − ${par(b)} = ${sgn(a)} + ${par(-b)}.`;
    else rule = `${Math.abs(b)} jump${Math.abs(b) === 1 ? "" : "s"} of ${sgn(b >= 0 ? a : -a)} from 0. ${a !== 0 && b !== 0 ? (Math.sign(a) === Math.sign(b) ? "Same signs give a positive product." : "Different signs give a negative product.") : "Anything times 0 is 0."}`;
    k.setRO(`<div><h2>Result</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${sgn(a)}</span> ${op === "*" ? "×" : op === "-" ? "−" : "+"} <span class="c3">${par(b)}</span> = <span class="num c1">${sgn(res)}</span></div></div>
      <div class="ro-rows"><div class="row">${M("|<i>a</i>|")} = <span class="v">${Math.abs(a)}</span>, ${M("|<i>b</i>|")} = <span class="v">${Math.abs(b)}</span><span class="lbl">absolute value: distance from 0</span></div>
      <div class="row">${M("−<i>b</i>")} = <span class="v">${sgn(-b)}</span><span class="lbl">the opposite of b, mirrored across 0</span></div>
      <div class="row">${M("(+)(+) = +, (−)(−) = +, (+)(−) = −")}<span class="lbl">sign rules for × and ÷</span></div></div>
      <div class="landmark${res === 0 ? " hit" : ""}"><div class="big">${M(expr)}</div><div class="note">${rule}</div></div>`);
  });
};

/* ---------- factors ---------- */
L["factors"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let n = 36, pick = 0;
  k.slider(`<span class="c1"><i>n</i></span>`, 1, 100, 1, n, v => { n = v; pick = 0; });
  k.button("Next pair", () => pick++, "btn ghost");
  const rects = [];
  c.cv.addEventListener("pointerdown", e => { const p = c.xy(e); rects.forEach((r, i) => { if (p.x >= r.x - 6 && p.x <= r.x + r.w + 6 && p.y >= r.y - 20 && p.y <= r.y + r.h + 24) pick = i; }); });
  k.hint("Click a rectangle to select its factor pair");
  k.loop(() => {
    { let c = 0; for (let i = 1; i <= n; i++) if (n % i === 0) c++; k.publish("count", c); }   // lesson figures + Your move goals
    c.begin(); const { w, h } = c;
    const pairs = []; for (let a = 1; a * a <= n; a++) if (n % a === 0) pairs.push([a, n / a]);
    const sel = pick % pairs.length;
    const totalW = pairs.reduce((s, [a]) => s + a, 0);
    const u = Math.max(2, Math.min(26, (h - 120) / n, (w - 60 - (pairs.length - 1) * 26) / totalW));
    let x = (w - (totalW * u + (pairs.length - 1) * 26)) / 2; const base = h - 44;
    rects.length = 0;
    pairs.forEach(([a, b], i) => {
      const W = a * u, H = b * u, y = base - H, on = i === sel;
      d.rect(x, y, W, H, k.alpha(C.amber, on ? .55 : .22), on ? C.amber : k.alpha(C.amber, .5), on ? 2 : 1);
      if (u >= 5) { c.g.save(); c.g.strokeStyle = k.alpha("#0B1019", .4); c.g.beginPath(); for (let q = 1; q < a; q++) { c.g.moveTo(x + q * u, y); c.g.lineTo(x + q * u, base); } for (let q = 1; q < b; q++) { c.g.moveTo(x, y + q * u); c.g.lineTo(x + W, y + q * u); } c.g.stroke(); c.g.restore(); }
      d.text(String(a), x + W / 2, base + 18, { font: `600 13px ${F.mono}`, color: C.cyan, align: "center" });
      d.text("×" + b, x + W / 2, Math.max(30, y - 8), { font: `600 13px ${F.mono}`, color: C.pink, align: "center" });
      rects.push({ x, y, w: W, h: H }); x += W + 26;
    });
    d.text(`${pairs.length} rectangle${pairs.length > 1 ? "s" : ""} with area ${n}`, 16, 26, { font: `14px ${F.sans}`, color: C.muted });
    const fs = []; pairs.forEach(([a, b]) => { fs.push(a); if (a !== b) fs.push(b); }); fs.sort((p, q) => p - q);
    const [pa, pb] = pairs[sel];
    const ds = String(n).split("").reduce((s, x) => s + +x, 0);
    const tests = [
      [2, "last digit is even"], [3, `digit sum ${ds} is a multiple of 3`], [4, "last two digits form a multiple of 4"], [5, "last digit is 0 or 5"],
      [6, "divisible by both 2 and 3"], [8, "last three digits form a multiple of 8"], [9, `digit sum ${ds} is a multiple of 9`], [10, "last digit is 0"]
    ];
    const kind = n === 1 ? "neither prime nor composite" : fs.length === 2 ? "prime" : "composite";
    const sq = Number.isInteger(Math.sqrt(n));
    k.setRO(`<div><h2>Factors of <span class="c1">${n}</span></h2><div class="ro-big" style="margin-top:8px;font-size:20px;white-space:normal">${fs.map(f => `<span class="${f === pa ? "c2" : f === pb ? "c3" : ""}">${f}</span>`).join(", ")}</div>
      <div class="narr" style="margin-top:6px">${fs.length} factor${fs.length > 1 ? "s" : ""} · ${kind}${sq && n > 1 ? " · perfect square (" + Math.sqrt(n) + " × " + Math.sqrt(n) + ")" : ""}</div></div>
      <div class="landmark hit"><div class="big">${M(`<span class="c2">${pa}</span> × <span class="c3">${pb}</span> = <span class="c1">${n}</span>`)}</div><div class="note">${pa} and ${pb} both divide ${n}: ${M(`${pa} ∣ ${n}`)} and ${M(`${pb} ∣ ${n}`)}.</div></div>
      <div class="ro-rows">${tests.map(([p, why]) => { const ok = n % p === 0; return `<div class="row"><span class="m" style="color:${ok ? "var(--green)" : "var(--faint)"}">${ok ? "✓" : "✗"} ${p} ∣ ${n}</span><span class="lbl" style="width:auto;margin-left:6px">${ok ? why : "no"}</span></div>`; }).join("")}</div>
      <p class="narr">Multiples of ${n}: ${[1,2,3,4,5,6].map(q => q * n).join(", ")}, …</p>`);
  });
};

/* ---------- exponents ---------- */
L["exponents"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let b = 2, n = 5, log = false, grow = 0;
  k.slider(`<span class="c2"><i>b</i></span>`, 0, 10, 1, b, v => { b = v; grow = 0; });
  k.slider(`<span class="c3"><i>n</i></span>`, -3, 8, 1, n, v => { n = v; grow = 0; });
  k.check("Log scale", false, v => log = v);
  const val = (B, N) => (B === 0 && N <= 0) ? (N === 0 ? 1 : NaN) : Math.pow(B, N);
  k.loop(dt => {
    k.publish("power", b === 0 && n < 0 ? null : Math.pow(b, n));   // lesson figures + Your move goals
    grow = Math.min(1, grow + dt * 1.6);
    c.begin(); const { w, h } = c;
    // expanded product
    const m = Math.abs(n), boxes = Math.min(m, 8);
    const bw = Math.min(54, (w - 80) / Math.max(1, boxes * 1.5)), gap = bw * .5;
    const tw = boxes * bw + (boxes - 1) * gap; let x = (w - tw) / 2; const y = 40;
    if (n === 0) d.text(b === 0 ? "0⁰: often set to 1 in algebra, undefined in basic arithmetic" : "no factors at all: the empty product is 1", w / 2, y + bw * .6, { font: `20px ${F.math}`, color: C.text, align: "center" });
    for (let i = 0; i < boxes; i++) { d.rr(x, y, bw, bw, 4, k.alpha(C.cyan, .18), C.cyan, 1.5); d.text(String(b), x + bw / 2, y + bw / 2 + 1, { font: `${bw * .5}px ${F.mono}`, color: C.cyan, align: "center", base: "middle" }); if (i < boxes - 1) d.text("×", x + bw + gap / 2, y + bw / 2, { font: `${bw * .4}px ${F.math}`, color: C.faint, align: "center", base: "middle" }); x += bw + gap; }
    if (m > 0) { const x0 = (w - tw) / 2; d.line(x0, y + bw + 10, x0 + tw, y + bw + 10, C.pink, 2); d.text(`${m} factor${m > 1 ? "s" : ""}${n < 0 ? ", then take the reciprocal" : ""}`, w / 2, y + bw + 28, { font: `14px ${F.sans}`, color: C.pink, align: "center" }); }
    // bars b^0..b^max
    const top = y + bw + 50, base = h - 36, maxK = Math.max(1, n, 0);
    const ks = []; for (let q = Math.min(0, n); q <= maxK; q++) ks.push(q);
    const vals = ks.map(q => val(b, q)).map(v => isFinite(v) ? v : 0);
    const vmax = Math.max(...vals, 1);
    const colw = Math.min(64, (w - 80) / ks.length);
    const x00 = (w - colw * ks.length) / 2;
    const hmax = base - top - 26;
    ks.forEach((q, i) => {
      const v = vals[i];
      let fr = log ? (v > 0 ? (Math.log10(v) - Math.log10(Math.min(...vals.filter(z => z > 0), 1)) + .15) / (Math.log10(vmax) - Math.log10(Math.min(...vals.filter(z => z > 0), 1)) + .15) : 0) : v / vmax;
      fr = Math.max(0, fr) * (q === n ? grow : 1);
      const H = Math.max(v > 0 ? 2 : 0, fr * hmax), xx = x00 + i * colw + colw * .15, on = q === n;
      d.rect(xx, base - H, colw * .7, H, k.alpha(on ? C.amber : C.cyan, on ? .8 : .3), on ? C.amber : null, 1.5);
      d.pow(String(b), sgn(q), xx + colw * .35 - d.powW(String(b), sgn(q), 13, F.mono) / 2, base + 18, { size: 13, family: F.mono, color: on ? C.amber : C.faint, ecolor: on ? C.pink : C.faint });
      if (on || colw > 50) d.text(v >= 1e6 ? v.toExponential(1) : k.fmt(v, 4), xx + colw * .35, base - H - 8, { font: `12px ${F.mono}`, color: on ? C.amber : C.muted, align: "center" });
    });
    const V = val(b, n);
    const exp = n > 0 ? Array(Math.min(n, 8)).fill(b).join(" × ") + (n > 8 ? " × …" : "") : n === 0 ? "1" : `1 ÷ (${Array(m).fill(b).join(" × ")})`;
    const vs = b === 0 && n === 0 ? "1 (by convention)" : isNaN(V) ? "undefined" : V >= 1e15 ? V.toExponential(3) : k.fmt(V, 6);
    k.setRO(`<div><h2>Power</h2><div class="ro-big" style="margin-top:8px"><span class="c2">${b}</span><sup class="c3">${sgn(n)}</sup> = <span class="num c1">${vs}</span></div><div class="narr" style="margin-top:4px">${M(exp)}${n < 0 && b ? " = " + frac(1, Math.pow(b, m)) : ""}</div></div>
      <div class="ro-rows">
        <div class="row">${M(`<i>b</i><sup><i>m</i></sup> · <i>b</i><sup><i>n</i></sup> = <i>b</i><sup><i>m</i>+<i>n</i></sup>`)}<span class="lbl">e.g. ${b}² · ${b}³ = ${b}⁵ = ${k.fmt(Math.pow(b, 5))}</span></div>
        <div class="row">${M(`(<i>b</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>b</i><sup><i>mn</i></sup>`)}<span class="lbl">a power of a power multiplies the exponents</span></div>
        <div class="row">${M(`<i>b</i><sup>0</sup> = 1,  <i>b</i><sup>−<i>n</i></sup> = 1 / <i>b</i><sup><i>n</i></sup>`)}<span class="lbl">for b ≠ 0; each step down the exponent divides by b</span></div></div>
      <div class="landmark${n === 0 || n < 0 ? " hit" : ""}"><div class="big">${M(n === 0 ? "<i>b</i><sup>0</sup> = 1" : n < 0 ? "negative exponent = reciprocal" : `${b}<sup>${n}</sup> ÷ ${b} = ${b}<sup>${n - 1}</sup>`)}</div><div class="note">${b === 0 && n < 0 ? "0 has no reciprocal, so 0 to a negative power is undefined." : n === 0 ? `Divide ${b}¹ = ${b} by ${b} once more and you land on 1.` : n < 0 ? `Keep dividing by ${b} below ${b}⁰ = 1.` : "Moving one bar left divides by the base."}</div></div>`);
  });
  function frac(a, bb){ return `<span class="m"><span class="fr"><span>${a}</span><span>${bb.toLocaleString("en-US")}</span></span></span>`; }
};

/* ---------- modular (clock) ---------- */
L["modular"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let m = 12, a = 9, b = 8, op = "+", t0 = 0, clock = 0;
  const re = () => t0 = clock;
  k.slider(`<span class="c4"><i>m</i></span>`, 2, 24, 1, m, v => { m = v; re(); });
  k.slider(`<span class="c2"><i>a</i></span>`, 0, 40, 1, a, v => { a = v; re(); });
  k.select("op", [["+", "+"], ["*", "×"]], op, v => { op = v; re(); });
  k.slider(`<span class="c3"><i>b</i></span>`, 0, 40, 1, b, v => { b = v; re(); });
  k.button("Replay", re, "btn ghost");
  k.loop(dt => {
    k.publish("result", (op === "+" ? a + b : a * b) % m); k.publish("total", op === "+" ? a + b : a * b); k.publish("laps", Math.floor((op === "+" ? a + b : a * b) / m));   // lesson figures + Your move goals
    clock += dt; c.begin(); const { w, h } = c;
    const total = op === "+" ? a + b : a * b;
    const cx = w / 2, cy = h / 2 + 14, R = Math.min(w, h) / 2 - 60;
    const ang = v => -Math.PI / 2 + (v % m) / m * Math.PI * 2;
    d.circle(cx, cy, R, k.alpha(C.panel2, .6), C.line2, 2);
    for (let i = 0; i < m; i++) { const A = ang(i), x = cx + Math.cos(A) * R, y = cy + Math.sin(A) * R; d.circle(x, y, 5, C.faint); d.text(String(i), cx + Math.cos(A) * (R + 22), cy + Math.sin(A) * (R + 22), { font: `600 14px ${F.mono}`, color: i === total % m ? C.amber : C.muted, align: "center", base: "middle" }); }
    // animate steps: first a (cyan) then b steps (pink) [for ×: a jumps of b]
    const speed = k.reduce ? 1e6 : Math.max(8, (op === "+" ? a + b : a) / 3);
    const el = (clock - t0) * speed;
    let pos, laps;
    const trail = (from, to, col, rr) => { if (to <= from) return; const g = c.g; g.save(); g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); const N = Math.max(8, Math.ceil((to - from) * 6)); for (let i = 0; i <= N; i++) { const v = from + (to - from) * i / N; const A = -Math.PI / 2 + v / m * Math.PI * 2; const r = rr - v / m * 5; const x = cx + Math.cos(A) * r, y = cy + Math.sin(A) * r; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.restore(); };
    if (op === "+") { const pa = Math.min(a, el), pb = Math.max(0, Math.min(b, el - a)); trail(0, pa, k.alpha(C.cyan, .8), R - 18); trail(a, a + pb, k.alpha(C.pink, .8), R - 18 - a / m * 5); pos = pa + pb; }
    else { const jumps = Math.min(a, el); for (let j = 0; j < Math.floor(jumps); j++) trail(j * b, (j + 1) * b, k.alpha(j % 2 ? C.pink : C.cyan, .7), R - 18); const fr = jumps - Math.floor(jumps); trail(Math.floor(jumps) * b, (Math.floor(jumps) + fr) * b, k.alpha(C.pink, .7), R - 18); pos = jumps * b; }
    laps = Math.floor(pos / m);
    const A = -Math.PI / 2 + pos / m * Math.PI * 2;
    d.line(cx, cy, cx + Math.cos(A) * (R - 12), cy + Math.sin(A) * (R - 12), C.amber, 3); d.circle(cx, cy, 6, C.amber);
    d.text(`${op === "+" ? a + " + " + b : a + " × " + b} = ${total}`, cx, cy + 6, { font: `16px ${F.mono}`, color: C.muted, align: "center", base: "top" });
    d.text(`laps: ${laps}`, 16, 26, { font: `14px ${F.sans}`, color: C.muted });
    const q = Math.floor(total / m), r = total % m;
    k.setRO(`<div><h2>Residue</h2><div class="ro-big" style="margin-top:8px">${total} mod <span class="c4">${m}</span> = <span class="num c1">${r}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`${total} = <span class="c4">${m}</span> × ${q} + <span class="c1">${r}</span>`)}<span class="lbl">division algorithm: ${q} full laps, ${r} left over</span></div>
      <div class="row">${M(`${total} ≡ ${r} (mod ${m})`)}<span class="lbl">congruent: same remainder on division by ${m}</span></div>
      <div class="row">${M(`(<span class="c2">${a % m}</span> ${op === "+" ? "+" : "×"} <span class="c3">${b % m}</span>) mod ${m} = ${(op === "+" ? (a % m + b % m) : (a % m) * (b % m)) % m}`)}<span class="lbl">reduce first, then combine: same answer</span></div></div>
      <div class="landmark${r === 0 ? " hit" : ""}"><div class="big">${M(r === 0 ? `${m} ∣ ${total}` : `${r} ≠ 0`)}</div><div class="note">${r === 0 ? `A remainder of 0 means ${m} divides ${total} exactly. The hand is back at the top.` : `Clocks use m = 12, days of the week use m = 7, and computer hash tables use a large m.`}</div></div>`);
  });
};

/* ---------- primes: sieve + factor tree ---------- */
L["primes"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let mode = "sieve", N = 360;
  const MAXS = 120;
  let crossed = new Set(), primesDone = [], curP = 0, queue = [], acc = 0, playing = false;
  const resetSieve = () => { crossed = new Set([1]); primesDone = []; curP = 0; queue = []; playing = false; pb.textContent = "Play"; };
  const nextPrime = () => { let p = (curP || 1) + 1; while (p <= MAXS && crossed.has(p)) p++; return p; };
  const stepPrime = () => { if (queue.length) return; const p = nextPrime(); if (p > MAXS) return; curP = p; primesDone.push(p); if (p * p <= MAXS) for (let q = p * p; q <= MAXS; q += p) queue.push(q); };
  k.modes([["sieve", "Sieve of Eratosthenes"], ["tree", "Factor tree"]], mode, m => { mode = m; ctlS.forEach(e => e.hidden = m !== "sieve"); ctlT.forEach(e => e.hidden = m !== "tree"); });
  const pb = k.button("Play", () => { playing = !playing; pb.textContent = playing ? "Pause" : "Play"; });
  const sb = k.button("Next prime", () => { while (queue.length) crossed.add(queue.shift()); stepPrime(); }, "btn ghost");
  const rb = k.button("Reset", resetSieve, "btn ghost");
  const nt = k.number("<i>n</i>", 2, 999999, N, v => N = v);
  const ctlS = [pb, sb, rb], ctlT = [nt.el.parentElement]; ctlT.forEach(e => e.hidden = true);
  resetSieve();
  const factor = n => { const f = []; let x = n; for (let p = 2; p * p <= x; p++) while (x % p === 0) { f.push(p); x /= p; } if (x > 1) f.push(x); return f; };
  k.loop(dt => {
    c.begin(); const { w, h } = c;
    if (mode === "sieve") {
      const isDone = () => !queue.length && nextPrime() ** 2 > MAXS;
      if (playing) { acc += dt; const rate = .045; let guard = 0; while ((acc > rate || k.reduce) && guard++ < 200) { acc = Math.max(0, acc - rate); if (queue.length) crossed.add(queue.shift()); else if (isDone()) { playing = false; pb.textContent = "Play"; break; } else stepPrime(); } }
      const cols = 10, rows = MAXS / cols, cell = Math.min((w - 40) / cols, (h - 84) / rows), ox = (w - cols * cell) / 2, oy = 74;
      const finished = isDone();
      for (let i = 1; i <= MAXS; i++) {
        const x = ox + ((i - 1) % cols) * cell, y = oy + Math.floor((i - 1) / cols) * cell;
        const isP = primesDone.includes(i) || (finished && !crossed.has(i));
        const isCur = i === curP, isX = crossed.has(i), inQ = queue[0] === i;
        const multOfCur = curP && i % curP === 0 && i !== curP && isX;
        d.rr(x + 2, y + 2, cell - 4, cell - 4, 3, isP ? k.alpha(C.amber, isCur ? .8 : .45) : multOfCur ? k.alpha(C.pink, .28) : isX ? k.alpha(C.panel3, .6) : k.alpha(C.panel2, .9), isCur ? C.amber : inQ ? C.pink : k.alpha(C.line2, .6), isCur ? 2 : 1);
        d.text(String(i), x + cell / 2, y + cell / 2 + 1, { font: `${Math.max(10, cell * .34)}px ${F.mono}`, color: isP ? "#FFF3D6" : isX ? C.faint : C.text, align: "center", base: "middle" });
      }
      const allP = []; for (let i = 2; i <= MAXS; i++) if (!crossed.has(i) && (finished || primesDone.includes(i))) allP.push(i);
      d.text(finished ? "every number not crossed out is prime" : curP ? `crossing out multiples of ${curP}, starting at ${curP}² = ${curP * curP}` : "press Play or Next prime", w / 2, 64, { font: `14px ${F.sans}`, color: C.muted, align: "center" });
      k.setRO(`<div><h2>Primes found</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${finished ? allP.length : primesDone.length}</span> <span style="font-size:.5em;color:var(--muted)">up to ${MAXS}</span></div></div>
        <p class="narr" style="color:var(--amber)">${(finished ? allP : primesDone).join(", ")}</p>
        <div class="landmark${finished ? " hit" : ""}"><div class="big">${M(finished ? "√120 ≈ 10.95, so stop after 7" : curP ? `start at ${curP}<sup>2</sup> = ${curP * curP}` : "start with 2")}</div><div class="note">${finished ? "Any composite number up to 120 has a prime factor no bigger than 10. Those are 2, 3, 5 and 7, all already sieved." : "Smaller multiples of this prime were already crossed out by smaller primes."}</div></div>
        <p class="narr">1 is not prime: a prime has exactly two positive divisors, 1 and itself.</p>`);
    } else {
      const f = factor(N);
      const depth = f.length;
      const rowH = Math.min(58, (h - 60) / Math.max(1, depth));
      const stepX = Math.min(70, (w - 120) / Math.max(1, depth));
      let x = 60 + (w - 120 - stepX * (depth - 1)) / 2 - stepX * .3, y = 64, cur = N;   // the root sits below the mode buttons
      const fsz = Math.max(12, Math.min(18, rowH * .32));
      for (let i = 0; i < depth; i++) {
        const isLast = i === depth - 1;
        if (isLast) { d.circle(x, y, fsz * 1.3, k.alpha(C.amber, .3), C.amber, 2); d.text(String(cur), x, y + 1, { font: `600 ${fsz}px ${F.mono}`, color: C.amber, align: "center", base: "middle" }); break; }
        d.text(String(cur), x, y, { font: `600 ${fsz}px ${F.mono}`, color: C.text, align: "center", base: "middle" });
        const p = f[i], rest = cur / p, lx = x - stepX * .55, rx = x + stepX, ny = y + rowH;
        d.line(x - 6, y + fsz * .8, lx, ny - fsz * 1.2, C.line2, 1.5); d.line(x + 6, y + fsz * .8, rx, ny - fsz * .8, C.line2, 1.5);
        d.circle(lx, ny, fsz * 1.2, k.alpha(C.amber, .3), C.amber, 2); d.text(String(p), lx, ny + 1, { font: `600 ${fsz}px ${F.mono}`, color: C.amber, align: "center", base: "middle" });
        x = rx; y = ny; cur = rest;
      }
      const cnt = {}; f.forEach(p => cnt[p] = (cnt[p] || 0) + 1);
      const pf = Object.entries(cnt).map(([p, e]) => `<span class="c1">${p}</span>${e > 1 ? `<sup>${e}</sup>` : ""}`).join(" × ");
      const divs = Object.values(cnt).reduce((s, e) => s * (e + 1), 1);
      k.setRO(`<div><h2>Prime factorization</h2><div class="ro-big" style="margin-top:8px">${N.toLocaleString("en-US")} = ${pf}</div></div>
        <div class="ro-rows"><div class="row">${M("prime?")} <span class="v">${f.length === 1 ? "yes" : "no, composite"}</span></div>
        <div class="row">${M("number of divisors")} <span class="v">${divs}</span><span class="lbl">multiply (exponent + 1) for each prime: ${Object.values(cnt).map(e => `(${e}+1)`).join("")}</span></div></div>
        <div class="landmark hit"><div class="big">${M("Fundamental Theorem of Arithmetic")}</div><div class="note">Every whole number greater than 1 is a product of primes in exactly one way, apart from the order of the factors.</div></div>
        <p class="narr">The tree splits off the smallest prime each time. Any splitting order ends at the same primes.</p>`);
    }
  });
};

/* ---------- fractions ---------- */
L["fractions"] = k => {
  const { C, F, M, gcd } = k; const c = k.canvas(); const d = c.d;
  let n = 3, dd = 4, s = 2, dn = 3;
  const sn = k.slider(`<span class="c1"><i>n</i></span>`, 0, 12, 1, n, v => n = v);
  k.slider(`<span class="c2"><i>d</i></span>`, 1, 12, 1, dd, v => { dd = v; });
  k.slider(`<span class="c4"><i>k</i></span>`, 1, 6, 1, s, v => s = v);
  void sn;
  k.loop(dt => {
    k.publish("value", n / dd); k.publish("top", n * s); k.publish("bottom", dd * s); k.publish("pair", 100 * n + dd);   // lesson figures + Your move goals
    dn = lerp(dn, n, Math.min(1, dt * 10));
    c.begin(); const { w, h } = c;
    const units = Math.max(1, Math.ceil(n / dd));
    const bx = 50, bwAll = w - 100, uw = bwAll / Math.max(units, 1), bh = Math.min(46, (h - 190) / 3);
    const g = gcd(n, dd) || 1, sn2 = n / g, sd2 = dd / g;
    const bar = (y, parts, shade, col, label, lcol) => {
      for (let u = 0; u < units; u++) { const x0 = bx + u * uw; d.rect(x0, y, uw - 6, bh, k.alpha(C.panel3, .8), C.line2); for (let i = 0; i < parts; i++) { const idx = u * parts + i; const pw = (uw - 6) / parts; if (idx < shade) d.rect(x0 + i * pw, y, pw, bh, k.alpha(col, .7)); if (i) d.line(x0 + i * pw, y, x0 + i * pw, y + bh, k.alpha(lcol, .9), 1.5); } d.rect(x0, y, uw - 6, bh, null, C.muted, 1.5); }
      d.text(label, bx - 10, y + bh / 2, { font: `18px ${F.math}`, color: col, align: "right", base: "middle" });
    };
    const y1 = 40, y2 = y1 + bh + 40, y3 = y2 + bh + 40;
    bar(y1, dd, Math.round(dn), C.amber, "", C.cyan);
    d.text(`${n}/${dd}`, bx, y1 - 10, { font: `16px ${F.math}`, color: C.amber });
    bar(y2, dd * s, Math.round(dn) * s, C.violet, "", C.violet);
    d.text(`${n * s}/${dd * s}  (× ${s}/${s})`, bx, y2 - 10, { font: `16px ${F.math}`, color: C.violet });
    if (g > 1) { bar(y3, sd2, sn2, C.green, "", C.green); d.text(`${sn2}/${sd2}  (÷ ${g}/${g}, simplest form)`, bx, y3 - 10, { font: `16px ${F.math}`, color: C.green }); }
    // number line
    const ly = h - 44, X = v => bx + (bwAll - 6 * 0) * v / units;
    d.line(bx, ly, bx + bwAll, ly, C.muted, 2);
    for (let i = 0; i <= units * dd; i++) { const v = i / dd; d.line(X(v), ly - (i % dd ? 5 : 10), X(v), ly + (i % dd ? 5 : 10), i % dd ? C.faint : C.muted, 1.5); if (i % dd === 0) d.text(String(i / dd), X(v), ly + 26, { font: `12px ${F.mono}`, color: C.faint, align: "center" }); }
    d.circle(X(dn / dd), ly, 8, C.amber);
    const fr = (a, b, cl) => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;
    k.setRO(`<div><h2>Fraction</h2><div class="ro-big" style="margin-top:8px">${fr(`<span class="c1">${n}</span>`, `<span class="c2">${dd}</span>`)} = ${fr(n * s, dd * s, "c4")}${g > 1 ? " = " + fr(sn2, sd2, "c5") : ""}</div></div>
      <div class="ro-rows"><div class="row">${M("decimal")} <span class="v">${k.fmt(n / dd, 4)}</span><span class="lbl">${n} ÷ ${dd}</span></div>
      <div class="row">${M("percent")} <span class="v">${k.fmt(n / dd * 100, 2)}%</span></div>
      <div class="row">${M(`gcd(${n}, ${dd})`)} = <span class="v">${gcd(n, dd)}</span><span class="lbl">${g > 1 ? `divide top and bottom by ${g} to simplify` : n ? "already in simplest form" : "0 over anything nonzero is 0"}</span></div></div>
      <div class="landmark${n === dd ? " hit" : ""}"><div class="big">${M(`<span class="fr"><span><i>n</i></span><span><i>d</i></span></span> = <span class="fr"><span><i>n</i>·<i>k</i></span><span><i>d</i>·<i>k</i></span></span>`)}</div><div class="note">${n === dd ? "Numerator equals denominator: the fraction is one whole." : n > dd ? `An improper fraction: more than one whole. It is ${Math.floor(n / dd)} and ${n % dd}/${dd}.` : "Cutting every piece into k smaller pieces changes the names, not the amount shaded."}</div></div>`);
  });
};

/* ---------- square roots ---------- */
L["roots"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let A = 50, it = 0, dA = 50;
  k.slider(`<span class="c1"><i>A</i></span>`, 1, 150, 1, A, v => { A = v; it = 0; });
  k.button("Next guess", () => it = Math.min(it + 1, 6));
  k.button("Reset guesses", () => it = 0, "btn ghost");
  k.loop(dt => {
    k.publish("floor", Math.floor(Math.sqrt(A))); k.publish("guesses", it);   // lesson figures + Your move goals
    dA = lerp(dA, A, Math.min(1, dt * 8));
    c.begin(); const { w, h } = c;
    const r = Math.sqrt(A), s = Math.floor(r), extra = A - s * s;
    const side = Math.min(w * .52, h - 90), u = side / Math.max(s + 1, 1);
    const ox = 40, oy = 50;
    for (let i = 0; i < s; i++) for (let j = 0; j < s; j++) d.rect(ox + j * u, oy + i * u, u - 1, u - 1, k.alpha(C.amber, .55));
    // extra tiles around the L
    let e = 0; for (let i = 0; i < s && e < extra; i++, e++) d.rect(ox + s * u, oy + i * u, u - 1, u - 1, k.alpha(C.pink, .45));
    for (let j = 0; j <= s && e < extra; j++, e++) d.rect(ox + j * u, oy + s * u, u - 1, u - 1, k.alpha(C.pink, .45));
    // true square
    const S = Math.sqrt(dA) * u; c.g.save(); c.g.setLineDash([6, 4]); d.rect(ox, oy, S, S, null, C.cyan, 2); c.g.restore();
    d.text(`side √A ≈ ${k.fmt(r, 3)}`, ox + S / 2, oy - 12, { font: `15px ${F.math}`, color: C.cyan, align: "center" });
    // guesses on a number line to the right
    const gx0 = ox + side + 50, gx1 = w - 30;
    if (gx1 - gx0 > 120) {
      const lo = Math.max(0, s - 1), hi = s + 2, gy = oy + 40, X = v => gx0 + (gx1 - gx0) * (v - lo) / (hi - lo);
      d.line(gx0, gy, gx1, gy, C.muted, 1.5); for (let v = lo; v <= hi; v++) { d.line(X(v), gy - 6, X(v), gy + 6, C.faint); d.text(String(v), X(v), gy + 20, { font: `12px ${F.mono}`, color: C.faint, align: "center" }); }
      d.line(X(r), gy - 16, X(r), gy + 16, C.cyan, 2);
      let x = Math.floor(Math.sqrt(A)) ** 2 === A ? Math.sqrt(A) : Math.floor(Math.sqrt(A)) + 1; const gs = [x]; for (let i = 0; i < 6; i++) { x = (x + A / x) / 2; gs.push(x); }
      gs.slice(0, it + 1).forEach((g, i) => { if (g >= lo && g <= hi) { d.circle(X(g), gy - 26 - i * 0, 5, i === it ? C.pink : k.alpha(C.pink, .35)); } });
      d.text("Babylonian guesses", gx0, gy - 44, { font: `600 11px ${F.ui}`, color: C.pink });
      gs.slice(0, it + 1).forEach((g, i) => d.text(`x${i} = ${g.toFixed(6)}`, gx0, gy + 50 + i * 20, { font: `13px ${F.mono}`, color: i === it ? C.pink : C.muted }));
    }
    let x = Math.floor(Math.sqrt(A)) ** 2 === A ? Math.sqrt(A) : Math.floor(Math.sqrt(A)) + 1; const gs = [x]; for (let i = 0; i < 6; i++) { x = (x + A / x) / 2; gs.push(x); }
    const perfect = s * s === A;
    k.setRO(`<div><h2>Square root</h2><div class="ro-big" style="margin-top:8px">√<span class="c1">${A}</span> = <span class="num c2">${perfect ? s : r.toFixed(6) + "…"}</span></div></div>
      <div class="ro-rows"><div class="row">${M(perfect ? `${s}<sup>2</sup> = ${A}` : `${s}<sup>2</sup> = ${s * s} &lt; ${A} &lt; ${(s + 1) ** 2} = ${s + 1}<sup>2</sup>`)}<span class="lbl">${perfect ? "a perfect square: the tiles make a complete square" : `so √${A} is between ${s} and ${s + 1}`}</span></div>
      <div class="row">${M(`<i>x</i><sub><i>k</i>+1</sub> = ½(<i>x</i><sub><i>k</i></sub> + <i>A</i>/<i>x</i><sub><i>k</i></sub>)`)}<span class="lbl">Babylonian method: average a guess with A divided by the guess</span></div>
      <div class="row"><span class="m c3">guess ${it}</span> <span class="v c3">${gs[it].toFixed(8)}</span><span class="lbl">error ${Math.abs(gs[it] - r).toExponential(2)}</span></div></div>
      <div class="landmark${perfect ? " hit" : ""}"><div class="big">${M(perfect ? "perfect square" : `√${A} is irrational`)}</div><div class="note">${perfect ? `${A} = ${s} × ${s}.` : `The square root of a whole number that is not a perfect square never ends or repeats as a decimal.`}</div></div>
      <p class="narr">${A - s * s ? `${s * s} gold tiles form a ${s} × ${s} square. The ${A - s * s} pink tile${A - s * s === 1 ? " does" : "s do"} not complete the next square.` : ""}</p>`);
  });
};

/* ---------- gcf / lcm: Euclid tiling ---------- */
L["gcf-lcm"] = k => {
  const { C, F, M, gcd } = k; const c = k.canvas(); const d = c.d;
  let a = 48, b = 18, t0 = 0, clock = 0;
  k.slider(`<span class="c2"><i>a</i></span>`, 1, 60, 1, a, v => { a = v; t0 = clock; });
  k.slider(`<span class="c3"><i>b</i></span>`, 1, 60, 1, b, v => { b = v; t0 = clock; });
  k.button("Replay", () => t0 = clock, "btn ghost");
  k.loop(dt => {
    { let x = a, y = b; while (y) [x, y] = [y, x % y]; k.publish("gcf", x); k.publish("lcm", a * b / x); k.publish("pair", 100 * a + b); }   // lesson figures + Your move goals
    clock += dt; c.begin(); const { w, h } = c;
    const sq = []; let x = 0, y = 0, W = a, H = b; const steps = [];
    while (W > 0 && H > 0) { if (W >= H) { const q = Math.floor(W / H); for (let i = 0; i < q; i++) sq.push([x + i * H, y, H]); steps.push([W, H, q, W - q * H]); x += q * H; W -= q * H; } else { const q = Math.floor(H / W); for (let i = 0; i < q; i++) sq.push([x, y + i * W, W]); steps.push([H, W, q, H - q * W]); y += q * W; H -= q * W; } }
    const g = gcd(a, b);
    const sc = Math.min((w - 80) / a, (h - 110) / b), ox = (w - a * sc) / 2, oy = 50;
    const shown = k.reduce ? sq.length : Math.min(sq.length, Math.floor((clock - t0) * 5) + 1);
    const palette = [C.cyan, C.pink, C.violet, C.cyan, C.pink, C.violet];
    const sizes = [...new Set(sq.map(s => s[2]))];
    sq.slice(0, shown).forEach(([sx, sy, s]) => { const lvl = sizes.indexOf(s), isG = s === g; d.rect(ox + sx * sc, oy + sy * sc, s * sc, s * sc, k.alpha(isG ? C.amber : palette[lvl], isG ? .6 : .25), isG ? C.amber : palette[lvl], isG ? 2 : 1.2); if (s * sc > 26) d.text(String(s), ox + (sx + s / 2) * sc, oy + (sy + s / 2) * sc, { font: `600 ${Math.min(16, s * sc / 3)}px ${F.mono}`, color: C.text, align: "center", base: "middle" }); });
    d.rect(ox, oy, a * sc, b * sc, null, C.muted, 2);
    d.text(`${a}`, ox + a * sc / 2, oy - 12, { font: `600 15px ${F.mono}`, color: C.cyan, align: "center" }); d.text(`${b}`, ox - 10, oy + b * sc / 2, { font: `600 15px ${F.mono}`, color: C.pink, align: "right", base: "middle" });
    d.text(`largest square that tiles the ${a} × ${b} rectangle: ${g} × ${g}`, w / 2, h - 18, { font: `14px ${F.sans}`, color: shown >= sq.length ? C.amber : C.muted, align: "center" });
    const L_ = a * b / g;
    const mA = [], mB = []; for (let i = 1; i <= 6; i++) { mA.push(a * i); mB.push(b * i); }
    k.setRO(`<div><h2>Greatest common factor</h2><div class="ro-big" style="margin-top:8px">gcd(<span class="c2">${a}</span>, <span class="c3">${b}</span>) = <span class="num c1">${g}</span></div></div>
      <div class="ro-rows">${steps.map(([p, q, m, r]) => `<div class="row">${M(`${p} = ${q} × ${m} + ${r}`)}</div>`).join("")}<div class="row"><span class="lbl">Euclidean algorithm: replace the larger number by the remainder until the remainder is 0. The last nonzero remainder is the gcd.</span></div></div>
      <div class="landmark hit"><div class="big">lcm = ${M(`<span class="fr"><span>${a} × ${b}</span><span>${g}</span></span>`)} = <span class="c4">${L_}</span></div><div class="note">Because gcd(a, b) × lcm(a, b) = a × b.</div></div>
      <p class="narr">Multiples of ${a}: ${mA.map(v => v === L_ ? `<b style="color:var(--violet)">${v}</b>` : v).join(", ")}…<br>Multiples of ${b}: ${mB.map(v => v === L_ ? `<b style="color:var(--violet)">${v}</b>` : v).join(", ")}…</p>`);
  });
};

/* ---------- decimals: hundredths grid ---------- */
L["decimals"] = k => {
  const { C, F, M, gcd } = k; const c = k.canvas(); const d = c.d;
  let v = 47, dv = 47;
  k.slider(`<span class="c1">value</span>`, 0, 100, 1, v, x => v = x, x => (x / 100).toFixed(2));
  k.button("+0.1", () => { v = Math.min(100, v + 10); sync(); }, "btn-s"); k.button("+0.01", () => { v = Math.min(100, v + 1); sync(); }, "btn-s"); k.button("−0.01", () => { v = Math.max(0, v - 1); sync(); }, "btn-s");
  const sl = k.ctl.querySelector("input[type=range]"); const sync = () => { sl.value = v; sl.dispatchEvent(new Event("input")); };
  k.loop(dt => {
    k.publish("decimal", v / 100);   // lesson figures + Your move goals
    dv = lerp(dv, v, Math.min(1, dt * 12));
    c.begin(); const { w, h } = c;
    const size = Math.min(h - 110, w * .5), cell = size / 10, ox = 36, oy = 40;
    const t = Math.floor(v / 10), hd = v % 10, shown = Math.round(dv);
    for (let col = 0; col < 10; col++) for (let row = 0; row < 10; row++) { const idx = col * 10 + row; const fill = idx < shown ? (col < t ? k.alpha(C.cyan, .55) : k.alpha(C.pink, .6)) : k.alpha(C.panel3, .7); d.rect(ox + col * cell, oy + row * cell, cell - 1, cell - 1, fill); }
    d.rect(ox, oy, size, size, null, C.muted, 1.5);
    for (let col = 1; col < 10; col++) d.line(ox + col * cell, oy, ox + col * cell, oy + size, k.alpha(C.line2, .9), 1.5);
    d.text("each column = 0.1   each square = 0.01", ox, oy + size + 22, { font: `13px ${F.sans}`, color: C.faint });
    // place value chart
    const px = ox + size + 40, pw = w - px - 24;
    if (pw > 160) {
      const cols = [["ones", Math.floor(v / 100), C.text], [".", ".", C.amber], ["tenths", t % 10, C.cyan], ["hundredths", hd, C.pink]];
      const cw = pw / 4;
      cols.forEach(([n, dg, col], i) => { const x = px + i * cw + cw / 2; if (n !== ".") { d.text(n.toUpperCase(), x, oy + 10, { font: `600 ${cw < 70 ? 9 : 11}px ${F.ui}`, color: col, align: "center" }); d.rect(px + i * cw + 4, oy + 22, cw - 8, 70, k.alpha(C.panel2, .8), k.alpha(col, .5)); } d.text(String(v === 100 && i === 2 ? 0 : dg), x, oy + 72, { font: `${n === "." ? 50 : 44}px ${F.mono}`, color: col, align: "center" }); });
      d.text(n2w(v), px, oy + 130, { font: `15px ${F.sans}`, color: C.muted });
      // number line
      const ly = oy + 190, X = q => px + pw * q;
      d.line(px, ly, px + pw, ly, C.muted, 2); for (let i = 0; i <= 10; i++) { d.line(X(i / 10), ly - 7, X(i / 10), ly + 7, C.faint); d.text((i / 10).toFixed(1), X(i / 10), ly + 22, { font: `10px ${F.mono}`, color: C.faint, align: "center" }); }
      d.circle(X(dv / 100), ly, 7, C.amber);
    }
    const g = gcd(v, 100) || 1;
    k.setRO(`<div><h2>Value</h2><div class="ro-big" style="margin-top:8px"><span class="num c1">${(v / 100).toFixed(2)}</span></div></div>
      <div class="ro-rows"><div class="row">${M(`<span class="c2">${t % 10} × 0.1</span> + <span class="c3">${hd} × 0.01</span>`)}<span class="lbl">expanded form${v === 100 ? " (here, 1 whole)" : ""}</span></div>
      <div class="row">${M(`<span class="fr"><span>${v}</span><span>100</span></span>`)}${g > 1 ? " = " + M(`<span class="fr"><span>${v / g}</span><span>${100 / g}</span></span>`) : ""}<span class="lbl">as a fraction${g > 1 ? ", simplified" : ""}</span></div>
      <div class="row">${M("percent")} <span class="v">${v}%</span><span class="lbl">hundredths and percent are the same count</span></div></div>
      <div class="landmark${v % 10 === 0 ? " hit" : ""}"><div class="big">${M(`0.${String(v % 100).padStart(2, "0")} = 0.${String(v % 100).padStart(2, "0")}0`)}</div><div class="note">${v % 10 === 0 ? `${(v / 100).toFixed(1)} and ${(v / 100).toFixed(2)} are equal: ${t} full columns either way.` : "Zeros written after the last digit to the right of the point do not change the value."}</div></div>`);
  });
  function n2w(v){ if (v === 100) return "one whole"; if (v === 0) return "zero"; return k.words(v) + " hundredth" + (v === 1 ? "" : "s"); }
};

/* ---------- mixed numbers: pies ---------- */
L["mixed-numbers"] = k => {
  const { C, F, M } = k; const c = k.canvas(); const d = c.d;
  let n = 11, dd = 4, fill = 0;
  k.slider(`numerator`, 1, 40, 1, n, v => { n = v; fill = 0; });
  k.slider(`<span class="c2">denominator <i>d</i></span>`, 2, 8, 1, dd, v => { dd = v; fill = 0; });
  k.loop(dt => {
    k.publish("whole", Math.floor(n / dd)); k.publish("rem", n % dd); k.publish("pair", 100 * n + dd);   // lesson figures + Your move goals
    fill = Math.min(n, fill + dt * (k.reduce ? 999 : Math.max(6, n / 1.5)));
    c.begin(); const { w, h } = c;
    const pies = Math.ceil(n / dd), cols = Math.min(pies, Math.max(1, Math.floor((w - 40) / 110))), rows = Math.ceil(pies / cols);
    const R = Math.min((w - 40) / cols / 2 - 12, (h - 90) / rows / 2 - 12, 90);
    const W = Math.floor(n / dd), r = n % dd;
    for (let p = 0; p < pies; p++) {
      const cx = (w - cols * (2 * R + 24)) / 2 + (p % cols) * (2 * R + 24) + R + 12, cy = 60 + Math.floor(p / cols) * (2 * R + 24) + R;
      d.circle(cx, cy, R, k.alpha(C.panel3, .8), C.muted, 1.5);
      for (let s = 0; s < dd; s++) { const idx = p * dd + s; if (idx < Math.floor(fill)) { const a0 = -Math.PI / 2 + s / dd * Math.PI * 2, a1 = a0 + Math.PI * 2 / dd; const g = c.g; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, R - 2, a0, a1); g.closePath(); g.fillStyle = k.alpha(p < W ? C.amber : C.pink, .7); g.fill(); } }
      for (let s = 0; s < dd; s++) { const a0 = -Math.PI / 2 + s / dd * Math.PI * 2; d.line(cx, cy, cx + Math.cos(a0) * R, cy + Math.sin(a0) * R, C.cyan, 1.2); }
      d.text(p < W ? "1" : `${r}/${dd}`, cx, cy + R + 16, { font: `15px ${F.math}`, color: p < W ? C.amber : C.pink, align: "center" });
    }
    d.text(`${n}/${dd}  =  ${W ? W : ""}${r ? (W ? " " : "") + r + "/" + dd : ""}`, w / 2, 32, { font: `24px ${F.math}`, color: C.text, align: "center" });
    const fr = (a, b, cl = "") => `<span class="m ${cl}"><span class="fr"><span>${a}</span><span>${b}</span></span></span>`;
    k.setRO(`<div><h2>Mixed number</h2><div class="ro-big" style="margin-top:8px">${fr(n, `<span class="c2">${dd}</span>`)} = ${W ? `<span class="c1">${W}</span>` : ""}${r ? fr(`<span class="c3">${r}</span>`, `<span class="c2">${dd}</span>`) : ""}</div></div>
      <div class="ro-rows"><div class="row">${M(`${n} ÷ ${dd} = <span class="c1">${W}</span> R <span class="c3">${r}</span>`)}<span class="lbl">quotient = whole pies, remainder = leftover slices</span></div>
      <div class="row">${M(`<span class="c1">${W}</span> × <span class="c2">${dd}</span> + <span class="c3">${r}</span> = ${n}`)}<span class="lbl">back to an improper fraction: wholes × d + leftover</span></div>
      <div class="row">${M("decimal")} <span class="v">${k.fmt(n / dd, 4)}</span></div></div>
      <div class="landmark${r === 0 ? " hit" : ""}"><div class="big">${M(r === 0 ? `${n}/${dd} = ${W}` : n < dd ? "proper fraction" : "improper → mixed")}</div><div class="note">${r === 0 ? "No leftover slices: the fraction is a whole number." : n < dd ? "Less than one whole, so there is no whole-number part." : `${W} full pie${W > 1 ? "s" : ""} and ${r} of ${dd} slices of the next.`}</div></div>`);
  });
};
})();
