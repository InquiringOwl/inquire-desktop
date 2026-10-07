/* ============ Subject kit: English (shared by the English labs) ============
   Loaded with the subject kits (web/kits/subjects), after web/kits/universal and web/kits/categorical. Pieces every English lab needs, so a lab
   only writes what is unique to its topic. API (all return HTML strings unless noted):

   EngLab.parse(tokens)                    story-style token string → [{w, tag, it, key, glue, br}] (DB.parseStory)
   EngLab.text(parsed)                     plain text with correct spacing
   EngLab.words(parsed, opt)               a sentence as clickable word chips (class .pos-w). opt:
        color(x, i) → "c1".."c5" | ""        colour class for word i (default: none)
        sel: i | Set                        selected word(s) (outlined)
        dim(x, i) → bool                    greyed words
        title(x, i) → text                  tooltip
        click: true                         render as buttons with data-i (bind with EngLab.on)
        under(x, i) → html                  small label under the word (e.g. "S", "DO")
   EngLab.spans(parsed)                    contiguous runs of one tag → [{tag, from, to, text}]
   EngLab.gaps(words, opt)                 words with clickable gaps between them (class .el-gap, data-g = gap index,
                                           gap g sits after word g). opt: on: Set of gap indexes showing a mark,
                                           mark: "," | "|" | ";" …, state(g) → "ok" | "bad" | "miss" | "" (feedback colour)
   EngLab.nest(node)                       nested brackets: node = {tag, label, c, kids: [node | "word"]}; labels under brackets
   EngLab.chips(list, active)              toggle chips: list [[key, label, c?]] → buttons .el-chip with data-k
   EngLab.ro({title, big, rows, landmark, narr})   readout in the house layout. rows: [{label, value, c, note}]
   EngLab.on(root, selector, fn)           delegate clicks: fn(el, event) for elements matching selector inside root
   EngLab.quiz(cfg)                        → controller for a scored quiz:
        cfg.items: array; cfg.render(item, state) → html (state: {answered, picked, correct});
        cfg.check(item, picked) → bool; ctl.pick(v), ctl.next(), ctl.reset(), ctl.item, ctl.state, ctl.score {right, tries}
        (order shuffles without repeats; the lab draws and binds, the kit keeps the state)
   EngLab.shuffle(arr, seed?)              copy, shuffled (seeded when seed given, for tests)
   EngLab.css(id, text)                    inject a <style> once (prefix every selector with your lab's class)
   EngLab.logic[id] = {…}                  put a lab's pure rule functions here; checks/labs/<id>.test.js tests them
                                           with `node tools/labtest.js` (no browser needed)
   Colours: c1 amber, c2 cyan, c3 pink, c4 violet, c5 green (the page legend must match). */
(function(){
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const E = window.EngLab = window.EngLab || {};
E.logic = E.logic || {};
E.esc = esc;

E.parse = tokens => (Array.isArray(tokens) ? tokens : window.DB.parseStory(tokens));
E.text = parsed => E.parse(parsed).map(x => x.br ? "\n" : (x.glue ? "" : " ") + x.w).join("");

E.words = (parsed, opt = {}) => {
  const P = E.parse(parsed), sel = opt.sel instanceof Set ? opt.sel : new Set(opt.sel == null ? [] : [opt.sel]);
  let html = "<p>";
  P.forEach((x, i) => {
    if (x.br) { html += "</p><p>"; return; }
    let w = esc(x.w); if (x.it) w = `<i>${w}</i>`;
    const c = opt.color ? opt.color(x, i) || "" : "";
    const isWord = /[A-Za-z0-9]/.test(x.w);
    const cls = ["pos-w", c, c ? "on" : "", sel.has(i) ? "sel" : "", opt.dim && opt.dim(x, i) ? "el-dim" : "", opt.under ? "el-u" : ""].filter(Boolean).join(" ");
    const t = opt.title ? opt.title(x, i) : "";
    const under = opt.under ? opt.under(x, i) : "";
    const inner = under ? `<span class="el-uw">${w}</span><span class="el-ul ${c}">${under}</span>` : w;
    const tag = opt.click && isWord ? "button" : "span";
    const el = `<${tag}${tag === "button" ? ' type="button"' : ""} class="${cls}" data-i="${i}"${t ? ` title="${esc(t)}"` : ""}>${inner}</${tag}>`;
    html += (x.glue ? "" : " ") + (isWord || c || under ? el : w);
  });
  return html + "</p>";
};

E.spans = parsed => {
  const P = E.parse(parsed), out = []; let cur = null;
  P.forEach((x, i) => {
    if (x.tag && cur && cur.tag === x.tag && cur.to === i - 1) { cur.to = i; cur.text += (x.glue ? "" : " ") + x.w; }
    else if (x.tag) { cur = { tag: x.tag, from: i, to: i, text: x.w }; out.push(cur); }
    else cur = null;
  });
  return out;
};

E.gaps = (words, opt = {}) => {
  const on = opt.on || new Set(), mark = opt.mark || ",";
  return `<p class="el-gaps">` + words.map((w, g) => {
    const last = g === words.length - 1;
    const st = opt.state && !last ? opt.state(g) : "";
    return `<span class="el-gw">${esc(w)}</span>` + (last ? "" : `<button type="button" class="el-gap${on.has(g) ? " on" : ""}${st ? " " + st : ""}" data-g="${g}" aria-label="gap after ${esc(w)}"><span>${on.has(g) ? esc(mark) : ""}</span></button>`);
  }).join("") + `</p>`;
};

E.nest = node => {
  if (typeof node === "string") return `<span class="el-nw">${esc(node)}</span>`;
  return `<span class="el-nb ${node.c || ""}"><span class="el-nk">${node.kids.map(E.nest).join(" ")}</span>${node.label ? `<span class="el-nl">${esc(node.label)}</span>` : ""}</span>`;
};

E.chips = (list, active) => `<div class="el-chips">${list.map(([k, label, c]) => `<button type="button" class="el-chip ${c || ""}${String(k) === String(active) ? " on" : ""}" data-k="${esc(k)}" aria-pressed="${String(k) === String(active)}">${esc(label)}</button>`).join("")}</div>`;

E.ro = ({ title, big, rows, landmark, narr }) =>
  (title || big ? `<div>${title ? `<h2>${title}</h2>` : ""}${big ? `<div class="ro-big" style="margin-top:8px">${big}</div>` : ""}</div>` : "") +
  (rows && rows.length ? `<div class="ro-rows">${rows.map(r => `<div class="row">${r.label ? `<span>${r.label}</span>` : ""}${r.value != null ? ` <span class="v ${r.c || ""}">${r.value}</span>` : ""}${r.note ? `<span class="lbl">${r.note}</span>` : ""}</div>`).join("")}</div>` : "") +
  (landmark ? `<div class="landmark${landmark.hit ? " hit" : ""}"><div class="big">${landmark.big || ""}</div>${landmark.note ? `<div class="note">${landmark.note}</div>` : ""}</div>` : "") +
  (narr ? `<p class="narr">${narr}</p>` : "");

E.on = (root, selector, fn) => root.addEventListener("click", e => { const el = e.target.closest(selector); if (el && root.contains(el)) fn(el, e); });

// shuffle and the quiz controller are shared (universal core + categorical quiz kit); these are aliases.
E.shuffle = window.LabKit.rules.shuffle;
E.quiz = window.LabKit.quiz;

E.css = (id, text) => {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const s = document.createElement("style"); s.id = id; s.textContent = text; document.head.appendChild(s);
};
})();
