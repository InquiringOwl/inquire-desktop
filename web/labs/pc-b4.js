/* ============ Labs: Precalculus, batch B4 (counting, probability, induction) ============ */
(function(){
const L = window.LABS;
const I = v => `<i>${v}</i>`, sp = (cls, s) => `<span class="${cls}">${s}</span>`;
const big = v => (typeof v === "bigint" ? v : Math.round(v)).toLocaleString("en-US").replace("-", "−");
const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const rnd = n => Math.floor(Math.random() * n);
const BRK = '</span> <span class="m">';
const topOf = k => { const mb = k.stage.querySelector(".modes"); return mb ? mb.offsetTop + mb.offsetHeight + 8 : 10; };

// KIT CANDIDATE: hypergeometric count, exactly j marked among r drawn from n with g marked → {nS, a, b, nE, P: Q}
const hyper = (MR, n, g, r, j) => { const nS = MR.nCr(n, r), a = MR.nCr(g, j), b = MR.nCr(n - g, r - j), nE = a * b; return { nS, a, b, nE, P: MR.probQ(nE, nS) }; };
// KIT CANDIDATE: distance between two circle centres whose lens (overlap) has the given area (bisection; area decreases with d)
const lensDist = (r1, r2, area) => {
  const lens = d => { if (d >= r1 + r2) return 0; if (d <= Math.abs(r1 - r2)) return Math.PI * Math.min(r1, r2) ** 2;
    const a = r1 * r1 * Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1)), b = r2 * r2 * Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));
    return a + b - 0.5 * Math.sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2)); };
  let lo = Math.abs(r1 - r2), hi = r1 + r2; for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (lens(m) > area) lo = m; else hi = m; } return (lo + hi) / 2; };

/* ---------------- pc-counting ---------------- */
L["pc-counting"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, c = k.canvas(), d = c.d;
  const WORDS = ["MISSISSIPPI", "LEVEL", "BANANA", "STATISTICS", "BOOKKEEPER", "ALGEBRA"], NAMES = ["ABCD", "1234", "xyzw"];
  let mode = "slots", ordered = true, letters = [], t = 0, pick = [], shuf = "", lastTick = -1, ordB;
  const S = k.vars([
    { key: "n", value: 7, min: 1, max: 15, cls: "c1", label: "n, objects available", px: 10 },
    { key: "r", value: 3, min: 0, max: 15, cls: "c2", label: "r, slots to fill", px: 10 },
    { key: "st", value: 3, min: 2, max: 3, cls: "c3", label: "number of stages", px: 16 },
    ...[3, 2, 2].map((v, i) => ({ key: "a" + i, value: v, min: 1, max: 4, cls: "c3", label: `choices at stage ${i + 1}`, px: 14 })),
    ...[0, 1, 2, 3, 4, 5].map(i => ({ key: "m" + i, value: 1, min: 1, max: 4, cls: "c4", label: `copies of letter ${i + 1}`, px: 14 }))
  ], (key, v) => { if (key === "n" && S.r > v) S.set("r", v); if (key === "r" && v > S.n) S.set("n", v); t = 0; lastTick = -1; });
  const setWord = w => { letters = [...new Set(w)]; letters.forEach((ch, i) => S.set("m" + i, [...w].filter(x => x === ch).length)); t = 0; lastTick = -1; };
  const counts = () => letters.map((_, i) => S["m" + i]);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const hints = { slots: "Scrub n and r in the equation below. Switch order off to see each selection counted r! times.", tree: "Scrub the stages and the choices per stage; count the leaves as they light up.", arr: "Pick a word, or scrub how many copies of each letter it has." };
  const setMode = m => { mode = m; k.showGroup(m); k.hint(hints[m]); t = 0; lastTick = -1; k.guard([]); };
  k.modes([["slots", "Slots"], ["tree", "Tree"], ["arr", "Arrangements"]], mode, setMode);
  k.group("slots", () => { ordB = k.button("Order matters: yes", () => { ordered = !ordered; ordB.textContent = `Order matters: ${ordered ? "yes" : "no"}`; }, "btn ghost"); });
  k.group("arr", () => { k.select("Word", WORDS.map(w => [w, w]), "MISSISSIPPI", setWord); });
  setWord("MISSISSIPPI"); setMode(mode);

  const tile = (x, y, s, ch, col, fill) => { d.rr(x - s / 2, y - s / 2, s, s, 5, fill || C.ink, col, 2); d.text(ch, x, y + 1, { font: `600 ${Math.round(s * 0.5)}px ${F.ui}`, color: C.text, align: "center", base: "middle" }); };
  const prodH = (n, r) => r === 0 ? "1" : r <= 5 ? Array.from({ length: r }, (_, i) => sp("c3", n - i)).join(" · ") : `${sp("c3", n)} · ${sp("c3", n - 1)} ⋯ ${sp("c3", n - r + 1)}`;

  k.loop(dt => {
    c.begin(); t += dt; const W = c.w, H = c.h, top = topOf(k), tick = k.reduce ? 0 : Math.floor(t / 1.4);
    if (mode === "slots") {
      const n = S.n, r = S.r, pv = MR.nPr(n, r), rf = MR.fact(r), cv = MR.nCr(n, r);
      if (tick !== lastTick) { pick = shuffle([...Array(n).keys()]).slice(0, r); lastTick = tick; }
      const rad = Math.min(24, (W - 24) / n / 2.4), gap = (W - 24) / n, y1 = top + 40 + Math.max(0, (H - top - 340) * 0.2);
      d.text("objects", 12, y1 - rad - 10, { font: `12px ${F.ui}`, color: C.muted });
      for (let i = 0; i < n; i++) { const x = 12 + gap * (i + 0.5), used = pick.includes(i);
        d.circle(x, y1, rad, used ? k.alpha(C.amber, .12) : C.ink, used ? k.alpha(C.amber, .35) : C.amber, 2);
        d.text(String.fromCharCode(65 + i), x, y1 + 1, { font: `600 ${Math.round(rad)}px ${F.ui}`, color: used ? C.faint : C.text, align: "center", base: "middle" }); }
      const y2 = y1 + rad + 64, bw = Math.min(66, (W - 24) / Math.max(r, 1) - 6), g2 = (W - 24) / Math.max(r, 1);
      d.text(ordered ? "slots (order matters)" : "a selection (order ignored)", 12, y2 - bw / 2 - 12, { font: `12px ${F.ui}`, color: C.muted });
      if (r === 0) d.text("r = 0: one way, choose nothing", W / 2, y2, { font: `15px ${F.math}`, color: C.muted, align: "center" });
      pick.forEach((p, i) => { const x = 12 + g2 * (i + 0.5); tile(x, y2, bw, String.fromCharCode(65 + p), C.cyan);
        if (ordered) d.text(String(n - i), x, y2 + bw / 2 + 18, { font: `600 15px ${F.math}`, color: C.pink, align: "center" }); });
      if (!ordered && r > 0) { const set = pick.map(p => String.fromCharCode(65 + p)).sort(), y3 = y2 + bw / 2 + 34;
        const perms = r <= 3 ? (r === 1 ? [set] : r === 2 ? [set, [set[1], set[0]]] : [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]].map(q => q.map(i => set[i]))) : [];
        d.text(`{${set.join(", ")}} is the same selection in all ${rf} orders`, W / 2, y3, { font: `14px ${F.math}`, color: C.violet, align: "center" });
        const cols = Math.min(perms.length, Math.max(1, Math.floor((W - 24) / 66)));
        perms.forEach((q, i) => d.text(q.join(""), W / 2 + ((i % cols) - (cols - 1) / 2) * 62, y3 + 26 + Math.floor(i / cols) * 22, { font: `15px ${F.mono}`, color: i ? C.faint : C.green, align: "center" })); }
      k.eqline(ordered ? `${I("P")}(${S.html("n")}, ${S.html("r")}) = ${prodH(n, r)} = ${sp("c5", big(pv))}`
        : `${I("C")}(${S.html("n")}, ${S.html("r")}) = ${fr(I("P") + `(${n}, ${r})`, sp("c4", r + "!"))} = ${fr(big(pv), sp("c4", big(rf)))} = ${sp("c5", big(cv))}`, ordered ? "permutations" : "combinations");
      k.readout({ title: "Fill r slots from n", rows: [{ lhs: `${I("P")}(${n}, ${r})`, v: big(pv), cls: ordered ? "c5" : "" , lbl: "ordered lists" }, { lhs: `${r}!`, v: big(rf), cls: "c4", lbl: "orders of one selection" }, { lhs: `${I("C")}(${n}, ${r})`, v: big(cv), cls: ordered ? "" : "c5", lbl: "selections" }],
        landmark: { hit: !ordered, big: ordered ? "order matters" : `${big(pv)} ÷ ${big(rf)} = ${big(cv)}`, note: ordered ? `Each slot has one fewer choice: ${n} for the first, ${Math.max(n - 1, 0)} for the second, …` : r === 0 ? "Choosing nothing can be done in exactly one way: 0! = 1." : `Every selection of ${r} appears ${big(rf)} time${rf > 1 ? "s" : ""} among the ${big(pv)} ordered lists.` },
        narr: ordered ? "Turn order off: the same count divided by r!." : `Set r = ${n - r} and compare: choosing which to leave out gives the same number.` });
      return;
    }
    if (mode === "tree") {
      const st = S.st, ch = [S.a0, S.a1, S.a2].slice(0, st), N = ch.reduce((a, b) => a * b, 1), lit = k.reduce ? N : Math.min(N, Math.floor(t * N / 4));
      const L0 = 26, R0 = 64, T0 = top + 22, B0 = H - 44, colX = i => L0 + i * (W - L0 - R0) / st, leafY = j => T0 + (j + 0.5) * (B0 - T0) / N, sp2 = (B0 - T0) / N;
      ch.forEach((v, i) => d.text(`×${v}`, (colX(i) + colX(i + 1)) / 2, top + 6, { font: `600 14px ${F.math}`, color: C.pink, align: "center" }));
      const walk = (lvl, lo, hi, label) => { const y = (leafY(lo) + leafY(hi - 1)) / 2, x = colX(lvl);
        if (lvl === st) { const on = lo < lit; d.circle(x, y, Math.min(5, sp2 / 2.4), on ? C.green : k.alpha(C.green, .25));
          if (sp2 >= 13) d.text(label, x + 9, y, { font: `${sp2 >= 18 ? 14 : 11}px ${F.mono}`, color: on ? C.green : C.faint, base: "middle" }); return; }
        const m = ch[lvl], w = (hi - lo) / m;
        for (let i = 0; i < m; i++) { const a = lo + i * w, cy = (leafY(a) + leafY(a + w - 1)) / 2, nx = colX(lvl + 1);
          d.line(x, y, nx, cy, lit > a ? k.alpha(C.green, .7) : C.line2, 1.5);
          if ((hi - lo) / m * sp2 >= 16) d.text(NAMES[lvl][i], (x + nx) / 2, (y + cy) / 2 - 5, { font: `13px ${F.mono}`, color: C.pink, align: "center" });
          walk(lvl + 1, a, a + w, label + NAMES[lvl][i]); } };
      walk(0, 0, N, ""); d.circle(colX(0), (leafY(0) + leafY(N - 1)) / 2, 5, C.amber);
      k.eqline(`${S.html("st")} stages: ${ch.map((_, i) => S.html("a" + i)).join(" × ")} = ${sp("c5", N)}`, "multiplication principle");
      k.readout({ title: "Multiply along the branches", rows: ch.map((v, i) => ({ lhs: `stage ${i + 1}`, v: `${v} choice${v > 1 ? "s" : ""}`, cls: "c3", lbl: `names ${NAMES[i].slice(0, v).split("").join(", ")}` })).concat([{ lhs: "outcomes", v: ch.join(" · ") + " = " + N, cls: "c5" }]),
        landmark: { hit: lit === N, big: `${lit} of ${N} leaves counted`, note: lit === N ? "Every path from the root to a leaf is one outcome, and each branch point multiplies the paths." : "Counting the leaves one by one…" },
        narr: "Make one stage 1 choice: it adds a column but never changes the count." });
      return;
    }
    const cn = counts(), n = cn.reduce((a, b) => a + b, 0), word = letters.map((ch, i) => ch.repeat(cn[i])).join("");
    if (tick !== lastTick || shuf.length !== n) { shuf = shuffle([...word]).join(""); lastTick = tick; }
    const total = MR.multiset(n, cn), den = cn.reduce((a, b) => a * MR.fact(b), 1), nf = n <= 18 ? MR.fact(n) : null;
    const s1 = Math.min(42, (W - 24) / n - 4), y1 = top + 40;
    d.text("one arrangement", 12, top + 6, { font: `12px ${F.ui}`, color: C.muted });
    [...shuf].forEach((ch, i) => tile(12 + (s1 + 4) * i + s1 / 2 + (W - 24 - (s1 + 4) * n) / 2, y1, s1, ch, cn[letters.indexOf(ch)] > 1 ? C.violet : C.amber));
    const gw = (W - 24) / letters.length, s2 = Math.min(30, gw - 10), y2 = y1 + s1 / 2 + 46;
    d.text("identical letters, grouped", 12, y2 - 26, { font: `12px ${F.ui}`, color: C.muted });
    letters.forEach((ch, i) => { const x = 12 + gw * (i + 0.5);
      for (let q = 0; q < cn[i]; q++) tile(x, y2 + q * (s2 + 4), s2, ch, cn[i] > 1 ? C.violet : C.amber);
      d.text(cn[i] > 1 ? `÷ ${cn[i]}!` : "1", x, y2 + cn[i] * (s2 + 4) + 10, { font: `600 14px ${F.math}`, color: cn[i] > 1 ? C.violet : C.faint, align: "center" }); });
    k.eqline(`${fr(sp("c1", n + "!"), letters.map((ch, i) => `${S.html("m" + i)}!<sub>${ch}</sub>`).join(" · "))} = ${nf ? fr(big(nf), sp("c4", big(den))) + " = " : ""}${sp("c5", big(total))}`, word.length <= 12 ? word : "arrangements");
    k.readout({ title: "Arrangements with repeats", rows: [{ lhs: `${n}!`, v: nf ? big(nf) : "too large to show", cls: "c1", lbl: "if every letter were different" }, { lhs: cn.filter(v => v > 1).map(v => v + "!").join(" · ") || "1", v: big(den), cls: "c4", lbl: "swaps of identical letters" }, { lhs: "distinct words", v: big(total), cls: "c5" }],
      landmark: { hit: den > 1, big: den > 1 ? `${nf ? big(nf) : n + "!"} ÷ ${big(den)} = ${big(total)}` : `${n}! = ${big(total)}`, note: den > 1 ? "Swapping identical letters gives the same word, so each word was counted that many times." : "No letter repeats: every one of the n! orders is a different word." },
      narr: "Set every count to 1: nothing is divided out and the answer is n!." });
  });
};

/* ---------------- pc-probability ---------------- */
L["pc-probability"] = k => {
  MathKit.attach(k);
  const { C, F } = k, MR = k.MR, Q = MR.Q, c = k.canvas(), d = c.d, g = c.g, over = k.dom(), host = k.dom(), SP = k.stepsPanel(host);
  over.style.cssText = "pointer-events:none;padding:0;overflow:visible";
  k.css("pcb4-venn", ".pcb4-v{position:absolute;transform:translate(-50%,-50%);pointer-events:auto;font:400 19px/1.2 var(--math);white-space:nowrap;padding:1px 5px;border-radius:5px;background:rgba(8,12,20,.55)}");
  let mode = "venn", turn = false, qi = 0, picked = null, sim = null, hist = [], ST, D = null, Dc = null, simP = null, cntP = null, userT = false, drawN = [], drawT = -1, chB = [], expSel, sc = "committee", cur = 0, turnB;
  const S = k.vars([
    { key: "oa", value: 8, min: 0, max: 40, cls: "c2", label: "outcomes in A only" }, { key: "ab", value: 4, min: 0, max: 40, cls: "c1", label: "outcomes in A and B" },
    { key: "ob", value: 6, min: 0, max: 40, cls: "c3", label: "outcomes in B only" }, { key: "ne", value: 2, min: 0, max: 40, cls: "c4", label: "outcomes in neither" },
    { key: "tA", value: 18, min: 0, max: 60, cls: "c2", label: "n(A)" }, { key: "tB", value: 15, min: 0, max: 60, cls: "c3", label: "n(B)" },
    { key: "tAB", value: 7, min: 0, max: 60, cls: "c1", label: "n(A and B)" }, { key: "tN", value: 40, min: 1, max: 99, cls: "c4", label: "n(S)" },
    { key: "N", value: 600, min: 10, max: 5000, step: 10, typeStep: 1, cls: "c1", label: "number of trials", px: 3 },
    { key: "s", value: 7, min: 2, max: 12, cls: "c2", label: "target sum" }, { key: "m", value: 3, min: 1, max: 8, cls: "c2", label: "number of coins" },
    { key: "h", value: 1, min: 0, max: 8, cls: "c2", label: "at least this many heads" }, { key: "cc", value: 2, min: 1, max: 4, cls: "c2", label: "cards drawn" },
    { key: "W", value: 7, min: 0, max: 20, cls: "c2", label: "women" }, { key: "Mn", value: 5, min: 0, max: 20, cls: "c4", label: "men" },
    { key: "nb", value: 49, min: 6, max: 60, cls: "c4", label: "numbers in the lottery" }, { key: "r", value: 4, min: 1, max: 8, cls: "c1", label: "size of the choice" },
    { key: "j", value: 2, min: 0, max: 8, cls: "c5", label: "exactly this many" }
  ], key => fix(key));
  function fix(key){
    if (S.oa + S.ab + S.ob + S.ne === 0) S.set("ne", 1);
    if (S.tAB > Math.min(S.tA, S.tB)) S.set("tAB", Math.min(S.tA, S.tB));
    if (S.tA + S.tB - S.tAB > S.tN) S.set("tN", Math.min(99, S.tA + S.tB - S.tAB)); if (S.tA + S.tB - S.tAB > S.tN) S.set(key === "tA" ? "tA" : "tB", S[key === "tA" ? "tA" : "tB"] - 1), fix(key);
    if (S.h > S.m) S.set("h", S.m);
    const n = sc === "lottery" ? S.nb : S.W + S.Mn; if (S.r > n) S.set("r", Math.max(1, n)); if (S.j > S.r) S.set("j", S.r);
    if (sc === "committee" && S.j > S.W) S.set("j", S.W);
    if (["tA", "tB", "tAB", "tN"].includes(key)) { picked = null; setTurn(); }
    if (["N", "s", "m", "h", "cc"].includes(key)) run();
    if (["W", "Mn", "nb", "r", "j"].includes(key)) loadCount();
  }

  /* ---- Venn ---- */
  const QS = [["union", `${I("P")}(${I("A")} ∪ ${I("B")})`], ["neither", `${I("P")}(${I("A")}′ ∩ ${I("B")}′)`], ["onlyA", `${I("P")}(${I("A")} ∩ ${I("B")}′)`]];
  const turnData = () => { const A = S.tA, B = S.tB, AB = S.tAB, N = S.tN, U = A + B - AB, kind = QS[qi][0];
    const right = kind === "union" ? U : kind === "neither" ? N - U : A - AB, wrong = kind === "union" ? [A + B, AB, N - U] : kind === "neither" ? [N - A - B, U, N - AB] : [A, AB, A + B - 2 * AB];
    const seen = new Set(), opts = [];
    [right, ...wrong, right + 1, right - 1, right + 2].forEach(v => { const q = MR.probQ(v, N), t = MR.qT(q); if (v >= 0 && v <= N && !seen.has(t) && opts.length < 4) { seen.add(t); opts.push(q); } });
    const order = k.shuffle(opts.map((_, i) => i), qi * 7 + A + B + N); return { right: MR.probQ(right, N), raw: right, N, opts: order.map(i => opts[i]), name: QS[qi][1] }; };
  const setTurn = () => { if (mode !== "venn" || !turn) return; const T = turnData(); k.guard([`${T.name.replace(/<[^>]+>/g, "")} = ${MR.qT(T.right)}`]);
    chB.forEach((b, i) => { b.style.display = T.opts[i] ? "" : "none"; if (T.opts[i]) b.textContent = MR.qT(T.opts[i]); }); };
  const pick = i => { if (picked === null) picked = turnData().opts[i]; };
  const shade = (A, B, ra, rb, inA, inB, col, box) => { g.save(); g.beginPath();
    const clip = (cc, inside) => { g.beginPath(); if (!inside) g.rect(box[0], box[1], box[2], box[3]); g.arc(cc[0], cc[1], cc[2], 0, Math.PI * 2); g.clip(inside ? "nonzero" : "evenodd"); };
    if (inA !== null) clip([A[0], A[1], ra], inA); if (inB !== null) clip([B[0], B[1], rb], inB); g.fillStyle = col; g.fillRect(box[0], box[1], box[2], box[3]); g.restore(); };
  const venn = (nA, nB, nAB, ask) => {
    const top = topOf(k), box = [12, top, c.w - 24, c.h - top - 46], m = Math.max(nA, nB, 1);
    const r1 = Math.sqrt(nA / m), r2 = Math.sqrt(nB / m), dd = nAB <= 0 ? r1 + r2 + 0.15 : nAB >= Math.min(nA, nB) ? Math.abs(r1 - r2) + 0.02 : lensDist(r1, r2, Math.PI * nAB / m);
    const s = Math.min((box[2] - 70) / (r1 + dd + r2), (box[3] - 56) / (2 * Math.max(r1, r2))), ra = Math.max(10, r1 * s), rb = Math.max(10, r2 * s);
    const cx = box[0] + box[2] / 2 - (dd * s + rb - ra) / 2, A = [cx, box[1] + box[3] / 2 + 8], B = [A[0] + dd * s, A[1]];
    d.rr(box[0], box[1], box[2], box[3], 8, k.alpha(C.violet, .05), C.violet, 1.5);
    if (ask) shade(A, B, ra, rb, ask[0], ask[1], k.alpha(C.green, .28), box);
    d.circle(A[0], A[1], ra, k.alpha(C.cyan, .14), C.cyan, 2.5); d.circle(B[0], B[1], rb, k.alpha(C.pink, .14), C.pink, 2.5);
    if (nAB > 0) shade(A, B, ra, rb, true, true, k.alpha(C.amber, .3), box);
    d.text("S", box[0] + 10, box[1] + 20, { font: `italic 600 17px ${F.math}`, color: C.violet });
    d.text("A", A[0] - ra * 0.72, A[1] - ra * 0.72 - 6, { font: `italic 600 17px ${F.math}`, color: C.cyan, align: "center" });
    d.text("B", B[0] + rb * 0.72, B[1] - rb * 0.72 - 6, { font: `italic 600 17px ${F.math}`, color: C.pink, align: "center" });
    const l = Math.max(A[0] - ra, B[0] - rb), rgt = Math.min(A[0] + ra, B[0] + rb);
    return { onlyA: [(A[0] - ra + Math.min(B[0] - rb, A[0] + ra)) / 2 - 4, A[1]], both: [(l + rgt) / 2, A[1] + (nAB > 0 ? 0 : Math.max(ra, rb) * 0.7 + 14)], onlyB: [(Math.max(A[0] + ra, B[0] - rb) + B[0] + rb) / 2 + 4, B[1]], out: [box[0] + box[2] - 34, box[1] + 18], A, B, ra, rb, box };
  };
  let overLast = "";
  const place = items => { const h = items.map(([x, y, html]) => `<span class="pcb4-v" style="left:${Math.round(x)}px;top:${Math.round(y)}px">${html}</span>`).join(""); if (h !== overLast) { over.innerHTML = h; overLast = h; } };

  /* ---- Simulate ---- */
  const exactP = e => e === "dice" ? MR.probQ(6 - Math.abs(S.s - 7), 36) : e === "coins" ? MR.probQ(Array.from({ length: S.m - S.h + 1 }, (_, i) => MR.nCr(S.m, S.h + i)).reduce((a, b) => a + b, 0), 2 ** S.m) : MR.probQ(MR.nCr(13, S.cc), MR.nCr(52, S.cc));
  const trial = e => { if (e === "dice") return 2 + rnd(6) + rnd(6) === S.s; if (e === "coins") { let hh = 0; for (let i = 0; i < S.m; i++) hh += rnd(2); return hh >= S.h; }
    for (let i = 0; i < S.cc; i++) if (Math.random() >= (13 - i) / (52 - i)) return false; return true; };
  function run(){ sim = { done: 0, hits: 0 }; hist = [[0, 0]]; userT = false; }
  const freqAt = x => { if (!hist.length) return 0; let lo = 0, hi = hist.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (hist[m][0] <= x) lo = m; else hi = m; } return hist[lo][1]; };

  /* ---- Count it ---- */
  const cntData = () => { const lot = sc === "lottery", n = lot ? S.nb : S.W + S.Mn, gg = lot ? S.r : S.W; return { n, g: gg, ...hyper(MR, n, gg, S.r, S.j), lot }; };
  const finalT = D0 => `P(E) = ${MR.qT(D0.P)}`;
  function loadCount(){ if (ST) ST.reset(); if (mode === "count") k.guard([finalT(cntData())]); drawT = -1; }

  const hints = { venn: "Scrub the numbers inside the diagram. The circles resize and the union is recomputed.", sim: "Scrub the event's number or the trials; drag the amber point along the frequency curve.", count: "Scrub the numbers in the problem, then Step through the count." };
  const setMode = m => { mode = m; k.showGroup(m === "venn" && turn ? "vturn" : m); turnB.style.display = m === "venn" ? "" : "none"; k.hint(hints[m]); overLast = ""; over.innerHTML = ""; over.style.display = m === "venn" ? "" : "none";
    if (m === "venn") { if (turn) setTurn(); else k.guard([]); } else if (m === "sim") { k.guard([]); run(); } else loadCount(); };
  k.modes([["venn", "Venn"], ["sim", "Simulate"], ["count", "Count it"]], mode, setMode);
  turnB = k.button("Your turn", () => { turn = !turn; turnB.textContent = turn ? "Explore" : "Your turn"; picked = null; setMode("venn"); }, "btn ghost");
  k.group("vturn", () => { chB = [0, 1, 2, 3].map(i => k.button("?", () => pick(i), "btn-s")); k.button("Next question", () => { qi = (qi + 1) % QS.length; picked = null; setTurn(); }, "btn ghost"); });
  k.group("venn", () => {});
  k.group("sim", () => { expSel = k.select("Experiment", [["dice", "Two dice"], ["coins", "Coins"], ["cards", "Cards"]], "dice", () => run()); k.button("Run again", () => run(), "btn ghost"); });
  k.group("count", () => { k.select("Problem", [["committee", "Committee"], ["lottery", "Lottery"]], sc, v => { sc = v; if (v === "lottery") { S.set("r", 6); S.set("j", 3); } else { S.set("r", 4); S.set("j", 2); } fix("r"); loadCount(); });
    ST = k.stepper(() => 5, v => { cur = v; }, { ms: 1300 }); k.button("New draw", () => { drawT = -1; }, "btn ghost"); });
  run(); setMode(mode);

  k.loop(dt => {
    c.begin();
    if (mode === "venn" && !turn) {
      k.split(c, host, { off: true });
      const nA = S.oa + S.ab, nB = S.ab + S.ob, N = nA + S.ob + S.ne, U = nA + S.ob, V = venn(nA, nB, S.ab, null);
      place([[...V.onlyA, S.html("oa")], [...V.both, S.html("ab")], [...V.onlyB, S.html("ob")], [...V.out, S.html("ne")]]);
      const p = v => MR.qH(MR.probQ(v, N)), indep = nA > 0 && nB > 0 && S.ab * N === nA * nB, excl = S.ab === 0;
      k.eqline(`${I("n")}(${I("A")} ∪ ${I("B")}) = (${S.html("oa")} + ${S.html("ab")}) + (${S.html("ab")} + ${S.html("ob")}) − ${S.html("ab")} = ${sp("c5", U)}`, "inclusion–exclusion");
      k.readout({ title: "Events in a sample space", big: `${I("P")}(${I("A")} ∪ ${I("B")}) = ${p(nA)} + ${p(nB)} − ${p(S.ab)} = ${sp("c5", MR.qH(MR.probQ(U, N)))}`,
        rows: [{ lhs: `${I("n")}(${I("S")})`, v: N, cls: "c4" }, { lhs: `${I("P")}(${I("A")}) · ${I("P")}(${I("B")})`, v: MR.qH(Q.mul(MR.probQ(nA, N), MR.probQ(nB, N))), lbl: `vs ${I("P")}(${I("A")} ∩ ${I("B")}) = ${MR.qT(MR.probQ(S.ab, N))}` }, { lhs: `${I("P")}(${I("A")}′) = 1 − ${I("P")}(${I("A")})`, v: MR.qH(MR.probQ(N - nA, N)), cls: "c4" }],
        landmark: { hit: indep || excl, big: indep ? "independent" : excl ? "mutually exclusive" : "neither exclusive nor independent", note: indep ? `${I("P")}(${I("A")} ∩ ${I("B")}) = ${I("P")}(${I("A")}) · ${I("P")}(${I("B")}): knowing A does not change the chance of B.` : excl ? `No overlap, so ${I("P")}(${I("A")} ∪ ${I("B")}) = ${I("P")}(${I("A")}) + ${I("P")}(${I("B")}).` : "The overlap is counted once: added twice, subtracted once." },
        narr: "Try 6, 4, 4, 6 for A only, both, B only, neither: the events become independent." });
      return;
    }
    if (mode === "venn") {
      k.split(c, host, { off: true });
      const T = turnData(), kind = QS[qi][0], ask = kind === "union" ? null : kind === "neither" ? [false, false] : [true, false], done = picked !== null, ok = done && Q.eq(picked, T.right);
      const V = venn(S.tA, S.tB, S.tAB, ask);
      if (!ask) { shade(V.A, V.B, V.ra, V.rb, true, null, k.alpha(C.green, .28), V.box); shade(V.A, V.B, V.ra, V.rb, false, true, k.alpha(C.green, .28), V.box); }
      place([[V.A[0], V.A[1] - V.ra - 14, `${I("n")}(${I("A")}) = ${S.html("tA")}`], [V.B[0], V.B[1] + V.rb + 14, `${I("n")}(${I("B")}) = ${S.html("tB")}`], [V.both[0], V.both[1], S.html("tAB")], [V.out[0] - 30, V.out[1], `${I("n")}(${I("S")}) = ${S.html("tN")}`]]);
      k.eqline(`${I("n")}(${I("S")}) = ${S.html("tN")},${BRK}${I("n")}(${I("A")}) = ${S.html("tA")},${BRK}${I("n")}(${I("B")}) = ${S.html("tB")},${BRK}${I("n")}(${I("A")} ∩ ${I("B")}) = ${S.html("tAB")}`, "given");
      k.readout({ title: "Your turn", big: `${T.name} = ${done ? sp("c5", MR.qT(T.right)) : "?"}`,
        rows: done ? [{ lhs: "you chose", v: MR.qT(picked), cls: ok ? "c5" : "c3" }, { lhs: "count", v: `${T.raw} of ${T.N} outcomes`, lbl: kind === "union" ? `${S.tA} + ${S.tB} − ${S.tAB}` : kind === "neither" ? `${T.N} − (${S.tA} + ${S.tB} − ${S.tAB})` : `${S.tA} − ${S.tAB}` }] : [{ lhs: "the shaded region", v: "pick its probability below" }],
        landmark: { hit: ok, big: done ? (ok ? "right" : "not quite") : "choose an answer", note: done ? "Count the overlap once: A and B both contain it." : "Each number can still be scrubbed; the question follows." },
        narr: "Next question asks about another region of the same diagram." });
      return;
    }
    if (mode === "sim") {
      k.split(c, host, { off: true });
      const e = expSel.v, p = exactP(e), pv = MR.qT(p), pN = Q.val(p), N = S.N;
      if (sim.done < N) { const step = Math.max(1, Math.ceil(N / 160)); for (let i = 0; i < step && sim.done < N; i++) { sim.done++; if (trial(e)) sim.hits++; } hist.push([sim.done, sim.hits / sim.done]); }
      const f = sim.done ? sim.hits / sim.done : 0, ymax = Math.min(1, Math.ceil(Math.max(pN * 2, pN + 0.15) * 10) / 10);
      const P = k.plane(c, { xmin: 0, xmax: N, ymin: 0, ymax, pad: { l: 46, r: 18, t: 16, b: 58 }, xlabel: "trials", ylabel: "relative frequency" }); P.grid(); P.axes();
      P.seg(0, pN, N, pN, C.green, 2, [7, 5]);
      P.clip(() => { g.save(); g.strokeStyle = C.cyan; g.lineWidth = 2; g.beginPath(); hist.forEach(([x, y], i) => { const X = P.X(x), Y = P.Y(Math.min(y, ymax * 1.05)); i ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.stroke(); g.restore(); });
      if (!D) D = k.drag(c, () => mode === "sim" ? simP : null, [{ x: 1, y: 0, color: C.amber, name: "trial count", snap: 1, on: x => freqAt(x) }], () => { userT = true; }, { label: "Relative frequency" });
      simP = P; const hp = D.pts[0]; hp.clamp = [1, Math.max(1, sim.done), 0, 1]; if (!userT || hp.x > sim.done) hp.x = Math.max(1, sim.done); hp.y = freqAt(hp.x); D.draw(P);
      P.labels([{ text: `exact ${pv}`, x: N, y: pN, color: C.green, prefer: "nw" }]);
      const ev = e === "dice" ? `${I("P")}(sum = ${S.html("s")}) = ${fr(6 - Math.abs(S.s - 7), 36)}` : e === "coins" ? `${I("P")}(at least ${S.html("h")} heads${BRK}in ${S.html("m")} coins) = ${fr(Math.round(pN * 2 ** S.m), 2 ** S.m)}` : `${I("P")}(all ${S.html("cc")} cards hearts) = ${fr(`${I("C")}(13, ${S.cc})`, `${I("C")}(52, ${S.cc})`)}`;
      k.eqline(`${ev} = ${sp("c5", MR.qH(p))}`, "exact");
      const near = sim.done >= N && Math.abs(f - pN) < 0.02;
      k.readout({ title: "Relative frequency", big: `${sp("c2", big(sim.hits))} / ${sim.done < N ? big(sim.done) : S.html("N")} ≈ ${sp("c2", f.toFixed(3))}`,
        rows: [{ lhs: "exact", v: `${MR.qH(p)} ≈ ${pN.toFixed(3)}`, cls: "c5" }, { lhs: `after ${big(hp.x)} trials`, v: freqAt(hp.x).toFixed(3), cls: "c1" }, { lhs: "trials", v: S.html("N"), lbl: sim.done < N ? `running: ${big(sim.done)}` : "done" }],
        landmark: { hit: near, big: near ? "close to the exact value" : sim.done < N ? "running…" : "still off", note: "Over many trials the relative frequency settles near the probability: the law of large numbers." },
        narr: "Set the trials to 20, then to 5000, and compare how far the curve wanders." });
      return;
    }
    const DD = cntData(), pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 }), lot = DD.lot, who = lot ? "matching numbers" : "women";
    const lines = [
      { tag: "sample space", eq: `${I("n")}(${I("S")}) = ${I("C")}(${DD.n}, ${S.r}) = ${big(DD.nS)}`, why: `every set of ${S.r} is equally likely` },
      { tag: lot ? "matches" : "women", eq: `${I("C")}(${DD.g}, ${S.j}) = ${big(DD.a)}`, why: `choose the ${S.j} ${who}` },
      { tag: "the rest", eq: `${I("C")}(${DD.n - DD.g}, ${S.r - S.j}) = ${big(DD.b)}`, why: `fill the other ${S.r - S.j} from the ${DD.n - DD.g} ${lot ? "numbers not drawn" : "men"}` },
      { tag: "event", eq: `${I("n")}(${I("E")}) = ${big(DD.a)} · ${big(DD.b)} = ${big(DD.nE)}`, why: "multiplication principle" },
      { tag: "probability", eq: `${sp("c5", finalT(DD))} ≈ ${Q.val(DD.P) < 1e-3 && DD.nE ? Q.val(DD.P).toExponential(2).replace("e-", " × 10^−") : Q.val(DD.P).toFixed(3)}`, why: `${big(DD.nE)}/${big(DD.nS)}${DD.nE ? ", reduced" : ""}` }];
    SP.set(lines, cur - 1);
    const L0 = pad.l, R0 = c.w - pad.r, T0 = pad.t, tok = Math.max(5, Math.min(13, (R0 - L0) / 30)), per = Math.max(1, Math.floor((R0 - L0) / (tok * 2.6))), rows = Math.ceil(DD.n / per);
    const tick = k.reduce ? 0 : Math.floor(performance.now() / 2200); if (tick !== drawT || drawN.length !== S.r || drawN.some(i => i >= DD.n)) { drawT = tick; const a = [...Array(DD.n).keys()]; for (let i = a.length - 1; i > 0; i--) { const q = rnd(i + 1); [a[i], a[q]] = [a[q], a[i]]; } drawN = a.slice(0, S.r); }
    for (let i = 0; i < DD.n; i++) { const x = L0 + (i % per + 0.5) * tok * 2.6, y = T0 + 10 + Math.floor(i / per) * tok * 2.6, mk = i < DD.g, on = drawN.includes(i);
      d.circle(x, y, tok, mk ? k.alpha(C.cyan, .35) : k.alpha(C.violet, .18), on ? C.green : mk ? C.cyan : C.violet, on ? 3 : 1.2); }
    const top2 = T0 + 18 + rows * tok * 2.6, hmax = Math.min(S.r, DD.g), ps = Array.from({ length: hmax + 1 }, (_, i) => Q.val(hyper(MR, DD.n, DD.g, S.r, i).P)), ym = Math.max(...ps, 0.05) * 1.15;
    if (c.h - top2 - pad.b > 96) {
      const P = k.plane(c, { xmin: -0.7, xmax: hmax + 0.7, ymin: 0, ymax: ym, xstep: 1, pad: { l: L0 + 34, r: pad.r, t: top2, b: pad.b + 26 }, xlabel: lot ? "matches" : "women", modes: false }); P.axes();
      ps.forEach((v, i) => { const x0 = P.X(i - 0.32), x1 = P.X(i + 0.32); d.rect(x0, P.Y(v), x1 - x0, P.Y(0) - P.Y(v), i === S.j ? k.alpha(C.green, .75) : k.alpha(C.cyan, .3)); });
      if (!Dc) Dc = k.drag(c, () => mode === "count" ? cntP : null, [{ x: S.j, y: 0, fixY: true, snap: 1, color: C.green, name: "j" }], (i, q) => { S.change("j", Math.round(q.x)); }, { label: "Distribution" });
      cntP = P; Dc.pts[0].x = S.j; Dc.pts[0].clamp = [0, hmax, 0, 0]; Dc.draw(P);
    } else cntP = null;
    k.eqline(lot ? `pick ${S.html("r")} of ${S.html("nb")}, ${S.r} drawn:${BRK}${I("P")}(exactly ${S.html("j")} match)` : `${S.html("W")} women, ${S.html("Mn")} men, choose ${S.html("r")}:${BRK}${I("P")}(exactly ${S.html("j")} women)`, "count it");
    k.readout({ title: "Probability by counting", big: `${I("P")}(${I("E")}) = ${fr(`${I("n")}(${I("E")})`, `${I("n")}(${I("S")})`)}`,
      rows: [{ lhs: "step", v: `${cur} of 5`, lbl: cur < 5 ? "press Step" : "done" }, { lhs: `${I("n")}(${I("S")})`, v: cur >= 1 ? big(DD.nS) : "?", cls: "c4" }, { lhs: `${I("n")}(${I("E")})`, v: cur >= 4 ? big(DD.nE) : "?", cls: "c2" }],
      landmark: { hit: cur >= 5, big: cur >= 5 ? sp("c5", MR.qH(DD.P)) : "count both, then divide", note: "Green bar: your event. The bars show every possible number, and together they make 1." },
      narr: "Drag the green handle under the bars or scrub j: the whole count is redone." });
  });
};

/* ---------------- pc-induction ---------------- */
L["pc-induction"] = k => {
  MathKit.attach(k);
  const { C, F } = k, c = k.canvas(), d = c.d, host = k.dom(), SP = k.stepsPanel(host), B = BigInt;
  const K = I("k"), N = I("n"), sup = s => `<sup>${s}</sup>`, k1 = `(${K} + 1)`;
  const sumTo = (n, f) => { let s = 0n; for (let i = 1n; i <= n; i++) s += f(i); return s; };
  const list = (n, f) => n <= 5 ? Array.from({ length: n }, (_, i) => f(i + 1)).join(" + ") : `${f(1)} + ${f(2)} + ${f(3)} + ⋯ + ${f(n)}`;
  const CL = {
    sum: { name: "1 + 2 + ⋯ + n", term: i => i, R: n => n * (n + 1n) / 2n, rel: "=", claim: x => `1 + 2 + ⋯ + ${x} = ${x}(${x} + 1)/2`, lhsN: n => list(n, i => i), rhsN: n => `${n} · ${n + 1}/2`,
      hyp: `1 + ⋯ + ${K} = ${K}(${K} + 1)/2`, goal: `1 + ⋯ + ${k1} = ${k1}(${K} + 2)/2`, step: `${K}(${K} + 1)/2 + ${k1} = ${k1}(${K} + 2)/2`, why: "P(k) replaces the first k terms; factor out k + 1" },
    sq: { name: "1² + ⋯ + n²", term: i => i * i, R: n => n * (n + 1n) * (2n * n + 1n) / 6n, rel: "=", claim: x => `1${sup(2)} + ⋯ + ${x}${sup(2)} = ${x}(${x} + 1)(2${x} + 1)/6`, lhsN: n => list(n, i => i + sup(2)), rhsN: n => `${n} · ${n + 1} · ${2 * n + 1}/6`,
      hyp: `1${sup(2)} + ⋯ + ${K}${sup(2)} = ${K}(${K} + 1)(2${K} + 1)/6`, goal: `⋯ + ${k1}${sup(2)} = ${k1}(${K} + 2)(2${K} + 3)/6`, step: `${K}(${K} + 1)(2${K} + 1)/6 + ${k1}${sup(2)} = ${k1}(2${K}${sup(2)} + 7${K} + 6)/6`, why: "2k² + 7k + 6 = (k + 2)(2k + 3)" },
    geo: { name: "1 + r + ⋯ + rⁿ⁻¹", geo: true },
    div: { name: "3 divides n³ − n", L: n => n * n * n - n, ok: n => (n * n * n - n) % 3n === 0n, rel: "|", claim: x => `3 divides ${x}${sup(3)} − ${x}`, lhsN: n => `${n}${sup(3)} − ${n}`,
      hyp: `${K}${sup(3)} − ${K} = 3${I("m")}`, goal: `3 divides ${k1}${sup(3)} − ${k1}`, step: `${k1}${sup(3)} − ${k1} = (${K}${sup(3)} − ${K}) + 3(${K}${sup(2)} + ${K})`, why: "both parts are multiples of 3" },
    pow: { name: "2ⁿ > n²", L: n => 2n ** n, Rn: n => n * n, ok: n => 2n ** n > n * n, rel: ">", from: 3, claim: x => `2${sup(x)} > ${x}${sup(2)}`, lhsN: n => `2${sup(n)}`, rhsN: n => `${n}${sup(2)}`,
      hyp: `2${sup(K)} > ${K}${sup(2)}`, goal: `2${sup(K + " + 1")} > ${k1}${sup(2)}`, step: `2${sup(K + " + 1")} = 2 · 2${sup(K)} > 2${K}${sup(2)} ≥ ${k1}${sup(2)}`, why: "the last ≥ needs k ≥ 3" } };
  const S = k.vars([{ key: "n0", value: 1, min: 1, max: 8, cls: "c4", label: "first value n₀", px: 14 }, { key: "r", value: 3, min: 2, max: 6, cls: "c3", label: "ratio r", px: 14 },
    { key: "n", value: 4, min: 1, max: 25, cls: "c1", label: "n", px: 10 }, { key: "t", value: 1, min: 1, max: 12, cls: "c1", label: "test value of n", px: 12 }], key => { if (key === "n" && D) D.pts[0].x = S.n; if (ST && key !== "n" && key !== "t") ST.reset(); fall = 0; });
  const cl = () => { const C0 = CL[ci]; if (!C0.geo) return C0; const r = B(S.r), rr = S.r;
    return { name: C0.name, term: i => r ** (i - 1n), R: n => (r ** n - 1n) / (r - 1n), rel: "=", claim: (x, rh = rr) => `1 + ${rh} + ⋯ + ${rh}${sup(x + " − 1")} = (${rh}${sup(x)} − 1)/${rr - 1}`, lhsN: n => list(n, i => i === 1 ? "1" : i === 2 ? rr : rr + sup(i - 1)), rhsN: n => `(${rr}${sup(n)} − 1)/${rr - 1}`,
      hyp: `1 + ⋯ + ${rr}${sup(K + " − 1")} = (${rr}${sup(K)} − 1)/${rr - 1}`, goal: `⋯ + ${rr}${sup(K)} = (${rr}${sup(K + " + 1")} − 1)/${rr - 1}`, step: `(${rr}${sup(K)} − 1)/${rr - 1} + ${rr}${sup(K)} = (${rr} · ${rr}${sup(K)} − 1)/${rr - 1}`, why: `${rr}^k − 1 + ${rr - 1}·${rr}^k = ${rr}^(k+1) − 1` }; };
  const val = (C0, n) => { const b = B(n); if (C0.term) { const l = sumTo(b, C0.term), r = C0.R(b); return { l, r, ok: l === r }; } const l = C0.L(b); return { l, r: C0.Rn ? C0.Rn(b) : l / 3n, ok: C0.ok(b) }; };
  const BR = [
    { claim: `2 + 4 + ⋯ + 2${N} = ${N}${sup(2)} + ${N} + 1`, inst: n => `${n === 1 ? 2 : `2 + ⋯ + ${2 * n}`} = ${n}${sup(2)} + ${n} + 1`, f: n => [n * (n + 1), n * n + n + 1, n * (n + 1) === n * n + n + 1], base: `${N} = 1: compare 2 with 1${sup(2)} + 1 + 1`, step: `(${K}${sup(2)} + ${K} + 1) + 2${k1} = ${k1}${sup(2)} + ${k1} + 1`, at: "base case", why: "At n = 1 the left side is 2 and the right side is 3. The step is correct, but nothing starts the chain." },
    { claim: `3 divides 4${sup(N)} + 1`, inst: n => `3 divides 4${sup(n)} + 1`, f: n => [4 ** n + 1, "a multiple of 3", (4 ** n + 1) % 3 === 0], base: `${N} = 1: 4 + 1 = 5`, step: `4${sup(K + " + 1")} + 1 = 4(4${sup(K)} + 1) − 3`, at: "base case", why: "5 is not a multiple of 3. In fact 4ⁿ + 1 always leaves remainder 2 when divided by 3." },
    { claim: `${N}${sup(2)} + ${N} is odd`, inst: n => `${n}${sup(2)} + ${n} is odd`, f: n => [n * n + n, "odd", (n * n + n) % 2 === 1], base: `${N} = 1: 1 + 1 = 2`, step: `${k1}${sup(2)} + ${k1} = (${K}${sup(2)} + ${K}) + 2${k1}`, at: "base case", why: "2 is even. The step is right (odd + even is odd), but n² + n = n(n + 1) is always even." },
    { claim: `2${sup(N)} > ${N}${sup(2)} for every ${N} ≥ 1`, inst: n => `2${sup(n)} > ${n}${sup(2)}`, f: n => [2 ** n, n * n, 2 ** n > n * n], base: `${N} = 1: 2 > 1`, step: `2${sup(K + " + 1")} = 2 · 2${sup(K)} > 2${K}${sup(2)} ≥ ${k1}${sup(2)}`, at: "inductive step", why: "2k² ≥ (k + 1)² is false for k = 1 and k = 2 (2 < 4, 8 < 9), so P(2), P(3) and P(4) fail. The step only works for k ≥ 3." }];
  let mode = "dom", ci = "sum", bi = 0, ans = null, cur = 0, fall = 0, ST, D = null, selD, selC, chkP = null;
  const hints = { dom: "Pick a claim, scrub n₀, then Step: the base case tips the first domino and the step carries it on.", check: "Scrub n or drag the amber handle: both sides are computed, and the step from n − 1.", broken: "Each “proof” has a flaw. Test values of n, then pick where it breaks." };
  const guardB = () => k.guard(mode === "broken" && ans === null ? [`Breaks at: ${BR[bi].at}`] : []);
  const setMode = m => { mode = m; k.showGroup(m); selD.set(ci); selC.set(ci); k.hint(hints[m]); fall = 0; if (ST) ST.reset(); guardB(); };
  k.modes([["dom", "Dominoes"], ["check", "Check"], ["broken", "Broken"]], mode, setMode);
  k.group("dom", () => { selD = k.select("Claim", Object.keys(CL).map(id => [id, CL[id].name]), ci, v => { ci = v; S.set("n0", v === "pow" ? 5 : 1); ST.reset(); }); ST = k.stepper(() => 5, v => { cur = v; fall = 0; }, { ms: 1400 }); });
  k.group("check", () => { selC = k.select("Claim", Object.keys(CL).map(id => [id, CL[id].name]), ci, v => { ci = v; }); });
  k.group("broken", () => { ["Base case", "Inductive step", "Nowhere: it is proved"].forEach(t => k.button(t, () => { if (ans === null) { ans = t; guardB(); } }, "btn-s")); k.button("Next proof", () => { bi = (bi + 1) % BR.length; ans = null; fall = 0; guardB(); }, "btn ghost"); });
  setMode(mode);

  const dominoes = (n0, cnt, okAt, upTo, hiN, L0, R0, y, T) => { const gap = (R0 - L0) / cnt, h = Math.min(130, gap * 3, y - T - 30), w = Math.max(7, h * 0.16);
    for (let i = 0; i < cnt; i++) { const n = n0 + i, x = L0 + gap * (i + 0.5), down = i < upTo, prog = down ? Math.max(0, Math.min(1, (fall - i * 0.22) / 0.3)) : 0, a = prog * (i === cnt - 1 ? 1.45 : Math.min(1.2, Math.asin(Math.min(1, (gap - w) / h))));
      const g = c.g; g.save(); g.translate(x + w / 2, y); g.rotate(a); d.rr(-w, -h, w, h, 2, down && prog > 0.5 ? k.alpha(C.green, .55) : k.alpha(C.cyan, .12), i === 0 ? C.violet : n === hiN ? C.amber : C.cyan, i === 0 || n === hiN ? 2.5 : 1.5); g.restore();
      d.text(String(n), x, y + 18, { font: `600 13px ${F.math}`, color: n === hiN ? C.amber : C.muted, align: "center" });
      if (okAt) { const ok = okAt(n); if (ok !== null) d.text(ok ? "✓" : "✗", x, y - h - 10, { font: `600 14px ${F.ui}`, color: ok ? C.green : C.pink, align: "center" }); } } };

  k.loop(dt => {
    c.begin(); fall += k.reduce ? 99 : dt * 2.2;
    if (mode === "dom") {
      const C0 = cl(), n0 = S.n0, base = val(C0, n0).ok, pad = k.split(c, host, { side: "left", frac: 0.52, hfrac: 0.56 }), stepOK = n0 >= (C0.from || 1);
      let run = 0; if (cur >= 1 && base) { run = 1; if (cur >= 5) while (run < 10 && val(C0, n0 + run).ok) run++; }
      const bv = val(C0, n0), rel = C0.rel === "|" ? `${C0.lhsN(n0)} = ${bv.l} = 3 · ${bv.l / 3n}` : `${C0.lhsN(n0)} = ${bv.l}, ${C0.rhsN(n0)} = ${bv.r}`;
      SP.set([{ tag: "base case", eq: sp("c4", C0.rel === "|" && !base ? `${C0.lhsN(n0)} = ${bv.l}` : rel), why: base ? `P(${n0}) is true` : `P(${n0}) is false` },
        { tag: "hypothesis", eq: sp("c2", C0.hyp), why: `assume P(k) for some k ≥ ${n0}` }, { tag: "target", eq: sp("c3", C0.goal), why: "P(k + 1)" },
        { tag: "step", eq: C0.step, why: C0.why }, { tag: "conclusion", eq: sp("c5", !base ? "no proof: the base case fails" : stepOK ? `P(${N}) for every ${N} ≥ ${n0}` : `step fails for k = ${n0}: not proved`), why: !base ? "the first domino never falls" : stepOK ? "base case + step" : "valid only for k ≥ 3" }], cur - 1);
      dominoes(n0, 10, cur >= 5 ? n => val(C0, n).ok : null, run, -1, pad.l + 6, c.w - pad.r - 6, c.h - 64, pad.t);
      k.eqline(`${I("P")}(${N}): ${C0.claim(N, S.html("r"))}${BRK}for ${N} ≥ ${S.html("n0")}`, "claim");
      k.readout({ title: "Falling dominoes", rows: [{ lhs: `base case ${I("P")}(${n0})`, v: cur >= 1 ? (base ? "true" : "false") : "?", cls: "c4" }, { lhs: "step", v: cur >= 4 ? (stepOK ? `holds for every ${K} ≥ ${n0}` : `needs ${K} ≥ 3`) : "?", cls: "c2" }],
        landmark: { hit: cur >= 5 && base && stepOK, big: cur < 5 ? "step through the proof" : base && stepOK ? `${I("P")}(${N}) for all ${N} ≥ ${n0}` : "the chain breaks", note: cur < 5 ? "Base case first, then the step." : base && stepOK ? "The first domino falls, and each one knocks over the next." : "Without a true base case and a step valid from n₀, nothing follows." },
        narr: ci === "pow" ? "Set n₀ = 1, then 4, then 5 and step through each time." : "Try the claim 2ⁿ > n² with different n₀." });
      return;
    }
    if (mode === "check") {
      const C0 = cl(), n = S.n, v = val(C0, n), pad = { l: 48, r: 16, t: 16, b: 58 }; k.split(c, host, { off: true });
      const m0 = Math.max(1, n - 9), m1 = Math.max(10, n), vals = []; for (let m = m0; m <= m1; m++) { const q = val(C0, m); vals.push([m, Number(q.l), Number(C0.rel === "|" ? q.l - q.l % 3n : q.r)]); }
      const ym = Math.max(1, ...vals.map(q => Math.max(q[1], q[2]))) * 1.12;
      const P = k.plane(c, { xmin: m0 - 0.7, xmax: m1 + 0.7, ymin: 0, ymax: ym, xstep: 1, pad, xlabel: "n" }); P.grid(); P.axes();
      vals.forEach(([m, l, r]) => { const x0 = P.X(m - 0.3), x1 = P.X(m + 0.3); d.rect(x0, P.Y(l), x1 - x0, P.Y(0) - P.Y(l), m === n ? k.alpha(C.cyan, .8) : k.alpha(C.cyan, .3)); d.circle(P.X(m), P.Y(r), 4.5, C.pink); });
      if (!D) D = k.drag(c, () => mode === "check" ? chkP : null, [{ x: n, y: 0, fixY: true, snap: 1, color: C.amber, name: "n" }], (i, q) => { S.change("n", Math.round(q.x)); }, { label: "Values of n" });
      D.pts[0].x = n; D.pts[0].clamp = [1, 25, 0, 0]; D.draw(P);
      const kk = n - 1, pv = n > 1 ? val(C0, kk) : null;
      const stepRow = n === 1 ? { lhs: "step", v: `${N} = 1 is the base case`, cls: "c4" } : C0.term ? { lhs: `${I("P")}(${kk}) ⇒ ${I("P")}(${n})`, v: `${pv.r} + ${C0.term(B(n))} = ${C0.R(B(n))}`, cls: "c3", lbl: `add term ${n}` }
        : C0.rel === "|" ? { lhs: `${I("P")}(${kk}) ⇒ ${I("P")}(${n})`, v: `${pv.l} + 3 · ${kk * kk + kk} = ${v.l}`, cls: "c3" } : { lhs: `${I("P")}(${kk}) ⇒ ${I("P")}(${n})`, v: `2 · ${2n ** B(kk)} vs 2 · ${kk * kk} = ${2 * kk * kk} ${2 * kk * kk >= n * n ? "≥" : "<"} ${n * n}`, cls: "c3", lbl: kk >= 3 ? "step works" : "step fails here" };
      k.eqline(C0.claim(S.html("n"), S.html("r")), "check");
      k.readout({ title: "Both sides at n", rows: [{ lhs: C0.lhsN(n), v: big(v.l), cls: "c2" }, C0.rel === "|" ? { lhs: "÷ 3", v: v.ok ? big(v.l / 3n) : `remainder ${v.l % 3n}`, cls: "c3" } : { lhs: C0.rhsN(n), v: big(v.r), cls: "c3" }, stepRow],
        landmark: { hit: v.ok, big: v.ok ? `${I("P")}(${n}) is true` : `${I("P")}(${n}) is false`, note: v.ok ? "Bars are the left side, pink dots the right side." : "A single false case: the claim is not true for this n." },
        narr: ci === "pow" ? "Drag n from 1 to 6: watch where 2ⁿ overtakes n²." : "Checking cases is evidence; only the step proves every n." });
      chkP = P; return;
    }
    const b = BR[bi], tv = S.t, [lv, rv, ok] = b.f(tv), pad = k.split(c, host, { side: "left", frac: 0.5, hfrac: 0.5 }), done = ans !== null, right = done && ans.toLowerCase().startsWith(b.at.split(" ")[0]);
    SP.set([{ tag: "claim", eq: b.claim }, { tag: "base case", eq: sp("c4", b.base) }, { tag: "hypothesis", eq: sp("c2", "assume P(k)") }, { tag: "step", eq: b.step }, { tag: "conclusion", eq: sp("c5", `so P(${N}) for every ${N} ≥ 1`) }], 4);
    let run = 0; if (done) { while (run < 10 && b.f(run + 1)[2]) run++; }
    dominoes(1, 10, n => (n === tv || (done && n <= 4)) ? b.f(n)[2] : null, run, tv, pad.l + 6, c.w - pad.r - 6, c.h - 64, pad.t);
    k.eqline(`test ${N} = ${S.html("t")}:${BRK}${b.inst(tv)}`, "test");
    k.readout({ title: "Where does it break?", big: done ? sp(right ? "c5" : "c3", `Breaks at: ${b.at}`) : "pick the line that fails",
      rows: [{ lhs: `${I("n")} = ${tv}`, v: `${big(lv)} ${typeof rv === "string" ? "should be " + rv : "vs " + big(rv)}`, cls: ok ? "c5" : "c3", lbl: ok ? "true" : "false" }].concat(done ? [{ lhs: "you chose", v: ans, cls: right ? "c5" : "c3" }] : []),
      landmark: { hit: right, big: done ? (right ? "found it" : "look again") : "test some values", note: done ? b.why : "A proof needs a true base case and a step that holds for every k ≥ n₀." },
      narr: "Next proof shows another flaw." });
  });
};
})();
