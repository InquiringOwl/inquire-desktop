/* Right-click menu for selected text on lesson (topic) pages and in notes (.nb-rich editors: My notes and the Assist dock).
   1. Copy  2. Glossary: the glossary entry shown in the menu (Open in glossary ↗; no entry → search)
   3. Dictionary: a simple online definition shown in the menu (Oxford Dictionaries API with keys from Settings → Usage, else the free
      Wiktionary-based dictionaryapi.dev; the desktop app fetches through main.js "dict:lookup")  4. Link to a note:
   - in a note: the selected words become a link to another note (or a new one); links use --note-link (Settings → Appearance)
   - on a lesson: the selection is quoted into a note, with a link back to the lesson, and the note is linked to the lesson.
   No selection → the normal menu. Loaded after app.js, notes.js and dock.js. */
(function () {
"use strict";
const NS = () => window.InquireNotes, A = () => window.InquireApp;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
let menu = null;
function close() {
  if (!menu) return;
  menu.remove(); menu = null;
  document.removeEventListener("pointerdown", out, true); document.removeEventListener("keydown", key, true);
  window.removeEventListener("blur", close); window.removeEventListener("resize", close); document.removeEventListener("scroll", onScroll, true);
}
const out = e => { if (menu && !menu.contains(e.target)) close(); };
const onScroll = e => { if (menu && e.target instanceof Node && menu.contains(e.target)) return; close(); }; // scrolling a definition keeps the menu
function key(e) {
  if (!menu) return;
  const bs = [...menu.querySelectorAll("button:not([disabled])")], i = bs.indexOf(document.activeElement);
  if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); }
  else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); (bs[e.key === "ArrowDown" ? (i + 1) % bs.length : (i - 1 + bs.length) % bs.length] || bs[0]).focus(); }
}
function toast(html, action) {
  document.querySelectorAll(".tm-toast").forEach(t => t.remove());
  const t = document.createElement("div"); t.className = "tm-toast win"; t.setAttribute("role", "status");
  t.innerHTML = `<span>${html}</span>` + (action ? `<button type="button" class="btn-s">${esc(action.label)}</button>` : "");
  document.body.appendChild(t);
  if (action) t.querySelector("button").onclick = () => { t.remove(); action.run(); };
  setTimeout(() => t.classList.add("out"), 3600); setTimeout(() => t.remove(), 4000);
}
function copy(text) {
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) {}
  if (!ok && navigator.clipboard) navigator.clipboard.writeText(text).then(() => {}, () => {});
  toast("Copied");
}
function open(x, y, c) {
  close();
  const short = c.text.length > 26 ? c.text.slice(0, 24).trim() + "…" : c.text;
  const words = c.text.split(/\s+/).length;
  menu = document.createElement("div");
  menu.className = "tm-menu win"; menu.setAttribute("role", "menu"); menu.setAttribute("aria-label", "Selected text");
  menu.innerHTML = `
    <button type="button" role="menuitem" data-a="copy"><span class="tm-ic">⧉</span><span>Copy</span><kbd>${/Mac/.test(navigator.platform) ? "⌘" : "Ctrl+"}C</kbd></button>
    <button type="button" role="menuitem" data-a="define"${words > 6 ? " disabled" : ""}><span class="tm-ic">Aa</span><span>Define “${esc(short)}” · Glossary<small>${words > 6 ? "Select a word or short phrase" : "Inquire’s own glossary"}</small></span></button>
    <button type="button" role="menuitem" data-a="dict"${words > 3 ? " disabled" : ""}><span class="tm-ic">Ox</span><span>Define “${esc(short)}” · Dictionary<small>${words > 3 ? "Select a word or short phrase" : dictKeys().appId ? "Oxford, online" : "Online · Oxford with a key in Settings → Usage"}</small></span></button>
    <button type="button" role="menuitem" data-a="link"><span class="tm-ic">↗</span><span>Link to a note…<small>${c.rich ? "These words open the note you pick" : "Quote this in a note, linked back here"}</small></span></button>`;
  document.body.appendChild(menu);
  const W = menu.offsetWidth, H = menu.offsetHeight;
  const place = () => { const W2 = menu.offsetWidth, H2 = menu.offsetHeight; menu.style.left = Math.max(6, Math.min(innerWidth - W2 - 6, x)) + "px"; menu.style.top = Math.max(6, Math.min(innerHeight - H2 - 6, y)) + "px"; };
  menu.style.left = Math.max(6, Math.min(innerWidth - W - 6, x)) + "px";
  menu.style.top = Math.max(6, Math.min(innerHeight - H - 6, y)) + "px";
  menu.addEventListener("mousedown", e => e.preventDefault()); // keep the selection while clicking
  menu.addEventListener("click", e => {
    const b = e.target.closest("button[data-a]"); if (!b || b.disabled) return;
    const a = b.dataset.a;
    if (a === "save") { saveDef(x, y, c); return; }
    if (a === "define") { showGlossary(c.text, place); return; }
    if (a === "dict") { showDict(c.text, place); return; }
    if (b.dataset.go) { close(); A() && A().define(c.text); return; }
    close();
    if (a === "copy") copy(c.text);
    else if (a === "link") linkFlow(x, y, c);
  });
  document.addEventListener("pointerdown", out, true); document.addEventListener("keydown", key, true);
  window.addEventListener("blur", close); window.addEventListener("resize", close); document.addEventListener("scroll", onScroll, true);
  menu.querySelector("button").focus({ preventScroll: true });
}
/* ---------- definitions inside the menu ---------- */
// "＋ Save to note": in a note, the definition goes in right after the selected line; on a lesson, into a note you pick
const SAVE_BTN = `<button type="button" class="tm-dgo tm-save" data-a="save">＋ Save to note</button>`;
async function saveDef(x, y, c) {
  const d = menu && menu._def; if (!d) return;
  const N = NS(); if (!N) return;
  close();
  if (c.rich) { const api = N.editorFor(c.zone); if (api && api.insertBlock(d.html, c.range)) toast(`Saved “${esc(d.word)}” to this note`); return; }
  const ctx = A() ? A().context() : {};
  const id = await N.pickNote({ x, y, title: "Save the definition to…", suggest: ctx.topicTitle || d.word });
  if (!id) return;
  N.appendBlock(id, d.html, d.topic || ctx.topic || null);
  toast(`Saved “${esc(d.word)}” to “${esc(N.get(id).title)}”`, { label: "Open note", run: () => A() && A().openNotes(id) });
}
function defBox(html, place) {
  let d = menu.querySelector(".tm-def");
  if (!d) { d = document.createElement("div"); d.className = "tm-def"; d.setAttribute("role", "status"); d.setAttribute("aria-live", "polite"); menu.appendChild(d); }
  d.innerHTML = html; place(); return d;
}
function showGlossary(text, place) {
  menu._def = null;
  const g = A() && A().glossaryDef ? A().glossaryDef(text) : null;
  if (!g) { defBox(`<p class="tm-dn">No glossary entry for “${esc(text.slice(0, 40))}” yet.</p><button type="button" class="tm-dgo" data-a="gl" data-go="1">Search the glossary ↗</button>`, place); return; }
  defBox(`<div class="tm-dh"><b>${esc(g.word)}</b>${g.ipa ? `<span class="tm-ipa">${esc(g.ipa)}</span>` : ""}<span class="tm-src">Glossary</span></div>`
    + g.blocks.slice(0, 3).map(b => `<div class="tm-db" style="--gc:${b.colour}"><div class="tm-ds"><span>${b.glyph}</span>${esc(b.subject)}${b.field ? " · " + esc(b.field) : ""}${b.pos ? ` <i>${esc(b.pos)}</i>` : ""}</div>${b.senses.map((s, i) => `<p>${b.senses.length > 1 ? `<b>${i + 1}</b> ` : ""}${s}</p>`).join("")}</div>`).join("")
    + `<div class="tm-dacts">${SAVE_BTN}<button type="button" class="tm-dgo" data-a="gl" data-go="1">Open in glossary ↗</button></div>`, place);
  const b0 = g.blocks[0], own = g.blocks.find(b => b.node);
  menu._def = { word: g.word, topic: own ? own.node : null,
    html: `<blockquote><b>${esc(g.word)}</b>${g.ipa ? ` <i>${esc(g.ipa)}</i>` : ""}${b0.pos ? " · " + esc(b0.pos) : ""}<br>${b0.senses.join("<br>")}<br>— Glossary · ${esc(b0.subject)}${b0.field ? " · " + esc(b0.field) : ""}${own ? ` · <a class="nlink" data-topic="${esc(own.node)}">${esc(own.nodeTitle)}</a>` : ""}</blockquote>` };
}
const dictKeys = () => { try { return JSON.parse(localStorage.getItem("codex.dictkeys") || "{}") || {}; } catch (e) { return {}; } };
const dictCache = {};
async function lookup(word) {
  const k = dictKeys(), key = (k.appId ? "ox:" : "free:") + word.toLowerCase();
  if (dictCache[key]) return dictCache[key];
  let r;
  const D = window.inquireDesktop;
  if (D && D.lookupWord) r = await D.lookupWord({ word, appId: k.appId || "", appKey: k.appKey || "" });
  else { // browser build: the free dictionary allows cross-origin requests
    try { const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word.toLowerCase())); r = res.status === 200 ? { ok: true, source: "free", data: await res.json() } : { ok: false, source: "free", error: res.status === 404 ? "No dictionary entry for that word." : "The dictionary answered " + res.status + "." }; }
    catch (e) { r = { ok: false, error: "Could not reach the dictionary." }; }
  }
  if (r && r.ok) r.entry = parseDict(r);
  if (r && r.ok && !r.entry.senses.length) r = { ok: false, source: r.source, error: "No definition found." };
  if (r && (r.ok || /no (dictionary )?entry|no definition/i.test(r.error || ""))) dictCache[key] = r;
  return r;
}
// both sources → { word, phon, senses: [{ pos, def }], link }
function parseDict(r) {
  const out = { word: "", phon: "", senses: [], link: "" };
  if (r.source === "oxford") {
    const res = (r.data && r.data.results) || [];
    res.forEach(x => (x.lexicalEntries || []).forEach(le => (le.entries || []).forEach(en => {
      out.word = out.word || x.word || "";
      (en.pronunciations || []).concat(le.pronunciations || []).forEach(p => { if (!out.phon && p.phoneticSpelling) out.phon = "/" + p.phoneticSpelling + "/"; });
      (en.senses || []).forEach(s => { const d = (s.shortDefinitions || s.definitions || [])[0]; if (d) out.senses.push({ pos: le.lexicalCategory ? le.lexicalCategory.text : "", def: d }); });
    })));
    out.link = "https://www.oxfordlearnersdictionaries.com/definition/english/" + encodeURIComponent((out.word || "").replace(/ /g, "-"));
  } else {
    (Array.isArray(r.data) ? r.data : []).forEach(x => {
      out.word = out.word || x.word || ""; out.phon = out.phon || x.phonetic || ((x.phonetics || []).find(p => p.text) || {}).text || "";
      (x.meanings || []).forEach(m => (m.definitions || []).slice(0, 2).forEach(d => out.senses.push({ pos: m.partOfSpeech || "", def: d.definition })));
      if (!out.link && x.sourceUrls && x.sourceUrls[0]) out.link = x.sourceUrls[0];
    });
  }
  out.senses = out.senses.filter(s => s.def).slice(0, 4);
  return out;
}
async function showDict(text, place) {
  const word = text.trim().replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
  const ox = !!dictKeys().appId; menu._def = null;
  defBox(`<p class="tm-dn tm-busy">Looking up “${esc(word)}” in ${ox ? "the Oxford dictionary" : "the dictionary"}…</p>`, place);
  const r = await lookup(word);
  if (!menu) return;
  if (!r || !r.ok) { defBox(`<p class="tm-dn">${esc((r && r.error) || "No definition found.")}</p>`, place); return; }
  const e = r.entry, src = r.source === "oxford" ? "Oxford" : "Wiktionary";
  menu._def = { word: e.word || word, topic: null, html: `<blockquote><b>${esc(e.word || word)}</b>${e.phon ? ` <i>${esc(e.phon)}</i>` : ""}<br>${e.senses.map((s, i) => `${i + 1}. ${s.pos ? "(" + esc(s.pos) + ") " : ""}${esc(s.def)}`).join("<br>")}<br>— ${src} dictionary</blockquote>` };
  defBox(`<div class="tm-dh"><b>${esc(e.word || word)}</b>${e.phon ? `<span class="tm-ipa">${esc(e.phon)}</span>` : ""}<span class="tm-src">${src}</span></div>`
    + `<ol class="tm-dl">${e.senses.map(s => `<li>${s.pos ? `<i>${esc(s.pos)}</i> ` : ""}${esc(s.def)}</li>`).join("")}</ol>`
    + `<div class="tm-dacts">${SAVE_BTN}${e.link ? `<a class="tm-dgo" href="${esc(e.link)}" target="_blank" rel="noopener">More at ${r.source === "oxford" ? "Oxford" : "Wiktionary"} ↗</a>` : ""}</div>`
    + (r.source !== "oxford" ? `<p class="tm-dfoot">Free dictionary from Wiktionary. Add Oxford keys in Settings → Usage for Oxford definitions.</p>` : ""), place);
}

async function linkFlow(x, y, c) {
  const N = NS(); if (!N) return;
  if (c.rich) {
    const api = N.editorFor(c.zone); if (!api) return;
    const self = N.get(api.id);
    const id = await N.pickNote({ x, y, exclude: api.id, suggest: c.text.slice(0, 80), folder: self && self.folder });
    if (!id) return;
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(c.range);
    if (api.linkRange(c.range, id)) toast(`Linked to “${esc(N.get(id).title)}”`);
    return;
  }
  const ctx = A() ? A().context() : {};
  const id = await N.pickNote({ x, y, title: "Quote in a note", suggest: ctx.topicTitle || c.text.slice(0, 80) });
  if (!id) return;
  N.appendQuote(id, c.text, ctx.topic, ctx.topicTitle);
  toast(`Added to “${esc(N.get(id).title)}”`, { label: "Open note", run: () => A() && A().openNotes(id) });
}
document.addEventListener("contextmenu", e => {
  const zone = e.target.closest && e.target.closest(".topic, .nb-rich");
  if (!zone || e.target.closest("input, textarea, select, canvas")) return;
  const sel = getSelection(), text = sel ? sel.toString().trim() : "";
  if (!text || !sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  if (!zone.contains(range.commonAncestorContainer)) return;
  e.preventDefault();
  open(e.clientX || 0, e.clientY || 0, { zone, text, range: range.cloneRange(), rich: zone.classList.contains("nb-rich") });
});
})();
