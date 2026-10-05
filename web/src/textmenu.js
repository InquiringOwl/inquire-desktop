/* Right-click menu for selected text on lesson (topic) pages and in notes (.nb-rich editors: My notes and the Assist dock).
   1. Copy  2. Define: the glossary entry (or a glossary search) for the selection  3. Link to a note:
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
  window.removeEventListener("blur", close); window.removeEventListener("resize", close); document.removeEventListener("scroll", close, true);
}
const out = e => { if (menu && !menu.contains(e.target)) close(); };
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
    <button type="button" role="menuitem" data-a="define"${words > 6 ? " disabled" : ""}><span class="tm-ic">Aa</span><span>Define “${esc(short)}”<small>${words > 6 ? "Select a word or short phrase" : "Glossary"}</small></span></button>
    <button type="button" role="menuitem" data-a="link"><span class="tm-ic">↗</span><span>Link to a note…<small>${c.rich ? "These words open the note you pick" : "Quote this in a note, linked back here"}</small></span></button>`;
  document.body.appendChild(menu);
  const W = menu.offsetWidth, H = menu.offsetHeight;
  menu.style.left = Math.max(6, Math.min(innerWidth - W - 6, x)) + "px";
  menu.style.top = Math.max(6, Math.min(innerHeight - H - 6, y)) + "px";
  menu.addEventListener("mousedown", e => e.preventDefault()); // keep the selection while clicking
  menu.addEventListener("click", e => {
    const b = e.target.closest("button[data-a]"); if (!b || b.disabled) return;
    const a = b.dataset.a; close();
    if (a === "copy") copy(c.text);
    else if (a === "define") { if (A() && !A().define(c.text)) toast(`No glossary entry for “${esc(short)}” yet: showing a search.`); }
    else if (a === "link") linkFlow(x, y, c);
  });
  document.addEventListener("pointerdown", out, true); document.addEventListener("keydown", key, true);
  window.addEventListener("blur", close); window.addEventListener("resize", close); document.addEventListener("scroll", close, true);
  menu.querySelector("button").focus({ preventScroll: true });
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
