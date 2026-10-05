/* Account-scoped storage keys (progress and notes belong to the signed-in account; "_local"/legacy keys when nobody is).
   InquireKeys.progress() = "codex.mastered.<user>" (or "codex.mastered" with no sign-in), notes() = "codex.notes.<user>".
   Migration: progress used to be one list per computer ("codex.mastered"). The first account to sign in after the update
   takes it over (copied, recorded in "codex.mastered.claimedBy"); later accounts start empty. The old key is left in place. */
(function () {
"use strict";
const user = () => (window.InquireUser ? String(window.InquireUser).toLowerCase() : "");
window.InquireKeys = {
  user,
  progress: () => user() ? "codex.mastered." + user() : "codex.mastered",
  notes: () => "codex.notes." + (user() || "_local"),
  forUser: u => ({ progress: "codex.mastered." + String(u).toLowerCase(), notes: "codex.notes." + String(u).toLowerCase() })
};
window.addEventListener("inquire:signed-in", () => {
  try {
    const k = InquireKeys.progress();
    if (!user() || localStorage.getItem(k) != null || localStorage.getItem("codex.mastered.claimedBy")) return;
    const old = localStorage.getItem("codex.mastered");
    if (old && JSON.parse(old).length) localStorage.setItem(k, old);
    localStorage.setItem("codex.mastered.claimedBy", JSON.stringify(user()));
  } catch (e) {}
});
})();

/* Notes: a per-account store, folders, photos and the rich note editor.
   Loaded before app.js (the Menu and the Notes screen read it) and before dock.js (the corner panel writes it).
   Notes live in localStorage "codex.notes.<username>" (lower-case), or "codex.notes._local" with nobody signed in.
   Each note: { id, title, html (sanitised rich text), body (plain text made from html: search, previews, .md),
     created, updated, fav, folder (folder id | null), links: ["s:<subject>", "f:<field>", "t:<topic>"], src: { topic, title } | null }.
   Older notes (body only) get html on read. Folders: "codex.notefolders.<username>" = [{ id, name }].
   Photos: IndexedDB "inquire-notes" / "images" (Blob by id); a note holds <img data-img="id">, a linked photo <img src="https://…">.
   Links inside a note: <a class="nlink" data-note="id"> (another note) or data-topic="id" (a lesson); colour = --note-link (Settings).
   Every change fires "inquire:notes-changed" so open views redraw. */
(function () {
"use strict";
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const key = () => window.InquireKeys.notes();
const fkey = () => key().replace(/^codex\.notes\./, "codex.notefolders.");
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const byUpdated = (a, b) => b.updated - a.updated;
const changed = () => window.dispatchEvent(new CustomEvent("inquire:notes-changed"));

/* ---------- rich text: sanitise, plain text ---------- */
const KEEP = new Set(["B", "STRONG", "I", "EM", "U", "S", "BR", "DIV", "P", "UL", "OL", "LI", "H3", "BLOCKQUOTE", "A", "IMG", "SPAN"]);
const TCOL = { "#f2b84b": "amber", "#5cc8e0": "cyan", "#f07ca0": "pink", "#b49bff": "violet", "#7bd88f": "green", "#d97ae6": "magenta", "#b5d65a": "lime", "#e5675b": "red", "#8b97ae": "muted" };
const TKEYS = new Set(Object.values(TCOL));
const WIDGETS = new Set(["code", "music"]);
const DROP = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK", "META", "TEMPLATE", "SVG", "MATH", "NOSCRIPT", "TITLE", "HEAD", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT", "VIDEO", "AUDIO", "CANVAS"]);
function clean(node) {
  [...node.childNodes].forEach(c => {
    if (c.nodeType === 3) return;
    if (c.nodeType !== 1) { c.remove(); return; }
    const tag = c.tagName.toUpperCase();
    if (DROP.has(tag)) { c.remove(); return; }
    if (tag === "DIV" && c.classList.contains("nw")) { // widget: only its type and data survive; the UI is rebuilt on load
      const w = c.getAttribute("data-w"), src = c.getAttribute("data-src") || "{}";
      if (!WIDGETS.has(w) || src.length > 60000) { c.remove(); return; }
      c.innerHTML = ""; [...c.attributes].forEach(a => c.removeAttribute(a.name));
      c.setAttribute("class", "nw"); c.setAttribute("data-w", w); c.setAttribute("data-src", src); c.setAttribute("contenteditable", "false"); return;
    }
    if (tag === "FONT") { // text colour from the toolbar (execCommand foreColor) → span[data-c]
      const k = TCOL[String(c.getAttribute("color") || "").toLowerCase()];
      clean(c);
      if (k) { const sp = document.createElement("span"); sp.setAttribute("data-c", k); sp.append(...c.childNodes); c.replaceWith(sp); } else c.replaceWith(...c.childNodes);
      return;
    }
    clean(c);
    if (!KEEP.has(tag)) { c.replaceWith(...c.childNodes); return; }
    const keep = {};
    if (tag === "A") {
      const n = c.getAttribute("data-note"), t = c.getAttribute("data-topic");
      if (n && /^[a-z0-9]+$/i.test(n)) keep["data-note"] = n; else if (t && /^[a-z0-9-]+$/i.test(t)) keep["data-topic"] = t;
      else { c.replaceWith(...c.childNodes); return; }
      keep.class = "nlink"; keep.contenteditable = "false";
    }
    if (tag === "IMG") {
      const id = c.getAttribute("data-img"), src = c.getAttribute("src") || "";
      if (id && /^[a-z0-9]+$/i.test(id)) keep["data-img"] = id; else if (/^https:\/\/[^\s"'<>]+$/i.test(src)) keep.src = src; else { c.remove(); return; }
      keep.alt = (c.getAttribute("alt") || "").slice(0, 200); keep.class = "nimg";
    }
    if (tag === "SPAN") { const k = c.getAttribute("data-c"); if (TKEYS.has(k)) keep["data-c"] = k; else { c.replaceWith(...c.childNodes); return; } }
    [...c.attributes].forEach(a => c.removeAttribute(a.name));
    Object.entries(keep).forEach(([k, v]) => c.setAttribute(k, v));
  });
}
function sanitize(html) { const t = document.createElement("template"); t.innerHTML = String(html || ""); clean(t.content); return t.innerHTML; }
const BLOCK = new Set(["DIV", "P", "LI", "H3", "BLOCKQUOTE", "UL", "OL"]);
function toText(html) {
  const t = document.createElement("template"); t.innerHTML = String(html || ""); let out = "";
  const walk = n => n.childNodes.forEach(c => {
    if (c.nodeType === 3) { out += c.nodeValue; return; }
    if (c.nodeType !== 1) return;
    if (c.tagName === "BR") { out += "\n"; return; }
    if (c.tagName === "IMG") { out += "[photo]"; return; }
    if (c.tagName === "DIV" && c.classList.contains("nw")) { out += window.InquireWidgets ? InquireWidgets.text(c) : ""; return; }
    const b = BLOCK.has(c.tagName);
    if (b && out && !out.endsWith("\n")) out += "\n";
    if (c.tagName === "LI") out += "• ";
    walk(c);
    if (b && !out.endsWith("\n")) out += "\n";
  });
  walk(t.content);
  return out.replace(/ /g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
const textToHtml = t => String(t || "").split("\n").map(l => `<div>${l ? esc(l) : "<br>"}</div>`).join("");
const imgIds = html => [...String(html || "").matchAll(/data-img="([a-z0-9]+)"/gi)].map(m => m[1]);

/* ---------- notes ---------- */
function normalize(n) {
  if (n.html == null) n.html = textToHtml(n.body);
  if (!Array.isArray(n.links)) n.links = n.src && n.src.topic ? ["t:" + n.src.topic] : [];
  if (n.folder === undefined) n.folder = null;
  n.fav = !!n.fav;
  return n;
}
const read = () => { try { const v = JSON.parse(localStorage.getItem(key()) || "[]"); return Array.isArray(v) ? v.map(normalize) : []; } catch (e) { return []; } };
const write = all => { try { localStorage.setItem(key(), JSON.stringify(all)); } catch (e) { console.warn("Notes could not be saved", e); } changed(); };
function list(q) {
  const all = read().sort(byUpdated);
  if (!q) return all;
  const s = q.toLowerCase();
  return all.filter(n => (n.title + "\n" + n.body + "\n" + (n.src ? n.src.title : "")).toLowerCase().includes(s));
}
const get = id => read().find(n => n.id === id) || null;
function create(o = {}) {
  const now = Date.now(), html = o.html != null ? sanitize(o.html) : textToHtml(o.body || "");
  const n = { id: uid(), title: o.title || "Untitled note", html, body: toText(html), created: now, updated: now, src: o.src || null,
    fav: !!o.fav, folder: o.folder || null, links: Array.isArray(o.links) ? o.links.slice() : o.src && o.src.topic ? ["t:" + o.src.topic] : [] };
  const all = read(); all.push(n); write(all); return n;
}
function update(id, patch) {
  const all = read(), n = all.find(x => x.id === id); if (!n) return null;
  patch = Object.assign({}, patch);
  if (patch.html != null) { patch.html = sanitize(patch.html); patch.body = toText(patch.html); }
  else if (patch.body != null) patch.html = textToHtml(patch.body);
  const quiet = patch.quiet; delete patch.quiet;
  Object.assign(n, patch); if (!quiet) n.updated = Date.now(); write(all); return n;
}
function remove(id) {
  const all = read(), n = all.find(x => x.id === id); if (!n) return;
  const rest = all.filter(x => x.id !== id), still = new Set(rest.flatMap(x => imgIds(x.html)));
  delImages(imgIds(n.html).filter(i => !still.has(i)));
  write(rest);
}
const link = (id, k) => { const n = get(id); if (n && !n.links.includes(k)) update(id, { links: n.links.concat(k), quiet: true }); };
const unlink = (id, k) => { const n = get(id); if (n) update(id, { links: n.links.filter(x => x !== k), quiet: true }); };
// a quote from a lesson, linked back to it (context menu "Link to a note" on a topic page, dock "Clip selection")
function appendQuote(id, text, topic, title) {
  const n = get(id); if (!n) return null;
  const back = topic ? `<br>— <a class="nlink" data-topic="${esc(topic)}" contenteditable="false">${esc(title || topic)}</a>` : "";
  const html = n.html + `<blockquote>“${esc(text)}”${back}</blockquote><div><br></div>`;
  return update(id, { html, links: topic && !n.links.includes("t:" + topic) ? n.links.concat("t:" + topic) : n.links });
}

/* ---------- folders ---------- */
const readF = () => { try { const v = JSON.parse(localStorage.getItem(fkey()) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
const writeF = f => { try { localStorage.setItem(fkey(), JSON.stringify(f)); } catch (e) {} changed(); };
const folders = () => readF().sort((a, b) => a.name.localeCompare(b.name));
function addFolder(name) { const f = { id: uid(), name: String(name || "").trim().slice(0, 60) || "New folder" }; writeF(readF().concat(f)); return f; }
function renameFolder(id, name) { const all = readF(), f = all.find(x => x.id === id); if (!f) return; f.name = String(name || "").trim().slice(0, 60) || f.name; writeF(all); }
function removeFolder(id) {
  writeF(readF().filter(x => x.id !== id));
  const all = read(); let hit = false; all.forEach(n => { if (n.folder === id) { n.folder = null; hit = true; } }); if (hit) write(all);
}

/* ---------- photos (IndexedDB) ---------- */
let dbP = null;
const db = () => dbP || (dbP = new Promise((res, rej) => {
  if (!window.indexedDB) return rej(new Error("no IndexedDB"));
  const r = indexedDB.open("inquire-notes", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("images");
  r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
}));
const tx = (mode, fn) => db().then(d => new Promise((res, rej) => {
  const t = d.transaction("images", mode), req = fn(t.objectStore("images"));
  t.oncomplete = () => res(req && "result" in req ? req.result : undefined); t.onerror = () => rej(t.error);
}));
async function shrink(blob) { // long side ≤ 1800 px keeps the store small; GIFs and SVGs are kept as they are
  if (!/^image\/(png|jpeg|webp)$/.test(blob.type) || !window.createImageBitmap) return blob;
  try {
    const bm = await createImageBitmap(blob), M = 1800, sc = Math.min(1, M / Math.max(bm.width, bm.height));
    if (sc === 1 && blob.size < 1.5e6) return blob;
    const c = document.createElement("canvas"); c.width = Math.round(bm.width * sc); c.height = Math.round(bm.height * sc);
    c.getContext("2d").drawImage(bm, 0, 0, c.width, c.height);
    return await new Promise(r => c.toBlob(b => r(b || blob), blob.type === "image/png" ? "image/png" : "image/jpeg", .86));
  } catch (e) { return blob; }
}
async function putImage(blob) { const id = uid(), b = await shrink(blob); await tx("readwrite", st => st.put({ blob: b, at: Date.now() }, id)); return id; }
const urls = {};
async function imageURL(id) {
  if (urls[id]) return urls[id];
  const rec = await tx("readonly", st => st.get(id)).catch(() => null);
  return rec && rec.blob ? (urls[id] = URL.createObjectURL(rec.blob)) : null;
}
// backups: the photos a set of notes uses, as data URLs, and back
const fromDataURL = u => { const m = String(u).match(/^data:([^;,]+)(;base64)?,(.*)$/); if (!m) throw new Error("bad data URL"); const bin = m[2] ? atob(m[3]) : decodeURIComponent(m[3]); const a = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return new Blob([a], { type: m[1] }); };
const toDataURL = blob => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => rej(r.error); r.readAsDataURL(blob); });
async function exportImages(notes) {
  const out = {}, ids = [...new Set((notes || read()).flatMap(n => imgIds(n.html)))];
  for (const id of ids) { const rec = await tx("readonly", st => st.get(id)).catch(() => null); if (rec && rec.blob) out[id] = await toDataURL(rec.blob); }
  return out;
}
async function importImages(map) {
  let n = 0;
  for (const [id, url] of Object.entries(map || {})) {
    if (!/^[a-z0-9]+$/i.test(id) || !/^data:image\/[a-z+.-]+;base64,/i.test(String(url))) continue;
    try { const b = fromDataURL(url); await tx("readwrite", st => st.put({ blob: b, at: Date.now() }, id)); if (urls[id]) { URL.revokeObjectURL(urls[id]); delete urls[id]; } n++; } catch (e) {}
  }
  return n;
}
function delImages(ids) { if (ids.length) tx("readwrite", st => { ids.forEach(i => { st.delete(i); if (urls[i]) { URL.revokeObjectURL(urls[i]); delete urls[i]; } }); return null; }).catch(() => {}); }
function hydrate(root) {
  if (window.InquireWidgets) root.querySelectorAll("div.nw").forEach(w => InquireWidgets.mount(w));
  root.querySelectorAll("img[data-img]").forEach(im => { if (im.src) return; imageURL(im.dataset.img).then(u => { if (u) im.src = u; else { im.alt = "Photo missing"; im.classList.add("missing"); } }); });
  root.querySelectorAll("a.nlink").forEach(a => {
    a.contentEditable = "false"; a.tabIndex = 0; a.setAttribute("role", "link");
    const n = a.dataset.note && get(a.dataset.note);
    a.title = a.dataset.note ? (n ? "Open note: " + n.title : "Linked note was deleted") : "Open lesson";
    a.classList.toggle("gone", !!a.dataset.note && !n);
  });
}

/* ---------- small picker popover (notes, link targets) ----------
   pick({ x, y, title, placeholder, items: [{ id, label, sub, ic }], create: q => label | null }) → Promise<id | { create: q } | null> */
function pick(o) {
  return new Promise(done => {
    document.querySelectorAll(".nk-pick").forEach(p => p.remove());
    const p = document.createElement("div");
    p.className = "nk-pick win"; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", o.title || "Pick");
    p.innerHTML = `<div class="win-h"><span class="dot"></span>${esc(o.title || "Pick")}</div>
      <input class="nk-q" type="search" placeholder="${esc(o.placeholder || "Search")}" aria-label="Search"><div class="nk-list" role="listbox"></div>`;
    document.body.appendChild(p);
    const q = p.querySelector(".nk-q"), lst = p.querySelector(".nk-list");
    const W = Math.min(340, innerWidth - 16); p.style.width = W + "px";
    p.style.left = Math.max(8, Math.min(innerWidth - W - 8, o.x || 8)) + "px";
    const top = o.y || 8; p.style.top = Math.max(8, Math.min(innerHeight - 380, top)) + "px";
    const finish = v => { p.remove(); document.removeEventListener("pointerdown", out, true); document.removeEventListener("keydown", key, true); done(v); };
    const out = e => { if (!p.contains(e.target)) finish(null); };
    const key = e => {
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); finish(null); }
      else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); const bs = [...lst.querySelectorAll("button")], i = bs.indexOf(document.activeElement); const nx = bs[e.key === "ArrowDown" ? Math.min(bs.length - 1, i + 1) : Math.max(0, i - 1)]; if (nx) nx.focus(); else if (bs[0]) bs[0].focus(); }
    };
    const draw = () => {
      const s = q.value.trim().toLowerCase();
      const hits = o.items.filter(x => !s || (x.label + " " + (x.sub || "")).toLowerCase().includes(s)).slice(0, 60);
      const mk = o.create ? o.create(q.value.trim()) : null;
      lst.innerHTML = (mk ? `<button type="button" class="nk-it nk-new" data-new="1"><span class="nk-ic">＋</span><span>${esc(mk)}</span></button>` : "")
        + hits.map(x => `<button type="button" class="nk-it" data-id="${esc(x.id)}"><span class="nk-ic">${x.ic || "▤"}</span><span>${esc(x.label)}${x.sub ? `<small>${esc(x.sub)}</small>` : ""}</span></button>`).join("")
        + (!hits.length && !mk ? `<p class="nk-none">Nothing matches.</p>` : "");
    };
    lst.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; finish(b.dataset.new ? { create: q.value.trim() } : b.dataset.id); });
    q.addEventListener("input", draw);
    q.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); const b = lst.querySelector("button"); if (b) b.click(); } });
    document.addEventListener("pointerdown", out, true); document.addEventListener("keydown", key, true);
    draw(); setTimeout(() => q.focus({ preventScroll: true }), 0);
  });
}
// pick a note (or make a new one); resolves to a note id or null
async function pickNote(o = {}) {
  const items = list().filter(n => n.id !== o.exclude).map(n => ({ id: n.id, label: n.title, sub: (n.fav ? "★ " : "") + (n.body.slice(0, 60) || "Empty note"), ic: "✎" }));
  const r = await pick({ x: o.x, y: o.y, title: o.title || "Link to a note", placeholder: "Search your notes", items, create: q => "New note: " + (q || o.suggest || "Untitled note") });
  if (!r) return null;
  if (typeof r === "object") return create({ title: (r.create || o.suggest || "Untitled note").slice(0, 140), folder: o.folder || null }).id;
  return r;
}

/* ---------- rich editor ----------
   mountEditor(host, id, { onEditing, onSaved, openNote(id), openTopic(id) }) → api { el, flush, addFiles(files), addURL(url), linkRange(range, noteId) } */
const editors = new WeakMap();
function mountEditor(host, id, o = {}) {
  const n = get(id); if (!n) return null;
  const ed = document.createElement("div");
  ed.className = "nb-rich"; ed.contentEditable = "true"; ed.spellcheck = true;
  ed.setAttribute("role", "textbox"); ed.setAttribute("aria-multiline", "true"); ed.setAttribute("aria-label", "Note"); ed.dataset.noteId = id;
  ed.dataset.placeholder = "Write… Paste or drop photos here. Select words and right-click to link them to another note.";
  ed.innerHTML = sanitize(n.html); hydrate(ed);
  let bar = null;
  const empty = () => ed.classList.toggle("is-empty", !ed.textContent.trim() && !ed.querySelector("img"));
  empty();
  let t = null, last = null;
  const flush = () => { if (!t) return; clearTimeout(t); t = null; update(id, { html: ed.innerHTML }); if (o.onSaved) o.onSaved(); };
  const save = () => { clearTimeout(t); t = setTimeout(flush, 400); empty(); if (o.onEditing) o.onEditing(); };
  ed.addEventListener("input", save);
  const inWidget = node => { const el = node && (node.nodeType === 1 ? node : node.parentElement); return !!(el && el.closest && el.closest(".nw")); };
  const remember = () => { const s = getSelection(); if (s.rangeCount && ed.contains(s.getRangeAt(0).commonAncestorContainer) && !inWidget(s.getRangeAt(0).commonAncestorContainer)) last = s.getRangeAt(0).cloneRange(); };
  document.addEventListener("selectionchange", remember);
  function insert(nodes) {
    ed.focus({ preventScroll: true });
    let r = last && ed.contains(last.commonAncestorContainer) && !inWidget(last.commonAncestorContainer) ? last : null;
    if (!r) { r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); }
    r.deleteContents();
    const frag = document.createDocumentFragment(); nodes.forEach(x => frag.appendChild(x)); const end = frag.lastChild;
    r.insertNode(frag);
    if (end) { const s = getSelection(), r2 = document.createRange(); r2.setStartAfter(end); r2.collapse(true); s.removeAllRanges(); s.addRange(r2); last = r2.cloneRange(); }
    hydrate(ed); save();
  }
  const imgEl = attrs => { const im = document.createElement("img"); im.className = "nimg"; Object.entries(attrs).forEach(([k, v]) => im.setAttribute(k, v)); return im; };
  async function addFiles(files) {
    const imgs = [...files].filter(f => f && /^image\//.test(f.type));
    const ids = [];
    for (const f of imgs) { try { ids.push(await putImage(f)); } catch (e) { console.warn("Photo not stored", e); } }
    if (ids.length) insert(ids.flatMap(i => [imgEl({ "data-img": i, alt: "" }), document.createElement("br")]));
    return ids.length;
  }
  function addURL(url) {
    url = String(url || "").trim();
    if (!/^https:\/\/[^\s"'<>]+$/i.test(url)) return false;
    insert([imgEl({ src: url, alt: "Linked photo" }), document.createElement("br")]); return true;
  }
  function linkRange(range, noteId) {
    if (!range || !ed.contains(range.commonAncestorContainer)) return false;
    const text = range.toString(); if (!text.trim()) return false;
    range.deleteContents();
    const a = document.createElement("a"); a.className = "nlink"; a.dataset.note = noteId; a.textContent = text;
    range.insertNode(a); last = null;
    const r2 = document.createRange(); r2.setStartAfter(a); r2.collapse(true); const s = getSelection(); s.removeAllRanges(); s.addRange(r2);
    hydrate(ed); save(); flush(); return true;
  }
  ed.addEventListener("paste", async e => {
    const cd = e.clipboardData; if (!cd || inWidget(e.target)) return;
    e.preventDefault();
    const files = [...cd.files].filter(f => /^image\//.test(f.type));
    if (files.length) { await addFiles(files); return; }
    const html = cd.getData("text/html");
    if (html) {
      const tp = document.createElement("template"); tp.innerHTML = html;
      for (const im of tp.content.querySelectorAll('img[src^="data:image"]')) { try { const b = fromDataURL(im.getAttribute("src")); im.setAttribute("data-img", await putImage(b)); im.removeAttribute("src"); } catch (err) { im.remove(); } }
      const safe = document.createElement("template"); safe.innerHTML = sanitize(tp.innerHTML);
      insert([...safe.content.childNodes]); return;
    }
    const txt = cd.getData("text/plain"); if (txt) document.execCommand("insertText", false, txt);
  });
  ed.addEventListener("dragover", e => { if (inWidget(e.target)) return; if ([...(e.dataTransfer && e.dataTransfer.items || [])].some(i => i.kind === "file")) { e.preventDefault(); ed.classList.add("drop"); } });
  ed.addEventListener("dragleave", () => ed.classList.remove("drop"));
  ed.addEventListener("drop", e => { if (inWidget(e.target)) return;
    const fs = [...(e.dataTransfer && e.dataTransfer.files || [])].filter(f => /^image\//.test(f.type));
    ed.classList.remove("drop"); if (!fs.length) return;
    e.preventDefault();
    const r = document.caretRangeFromPoint ? document.caretRangeFromPoint(e.clientX, e.clientY) : null;
    if (r && ed.contains(r.startContainer)) last = r;
    addFiles(fs);
  });
  const follow = a => { if (a.dataset.note) { if (get(a.dataset.note) && o.openNote) { flush(); o.openNote(a.dataset.note); } } else if (a.dataset.topic && o.openTopic) { flush(); o.openTopic(a.dataset.topic); } };
  ed.addEventListener("click", e => { const a = e.target.closest("a.nlink"); if (a && ed.contains(a)) { e.preventDefault(); follow(a); } });
  ed.addEventListener("keydown", e => { const a = e.target.closest && e.target.closest("a.nlink"); if (a && e.key === "Enter") { e.preventDefault(); follow(a); } });
  function insertText(t) {
    ed.focus({ preventScroll: true });
    const s = getSelection();
    if (last && ed.contains(last.commonAncestorContainer) && !inWidget(last.commonAncestorContainer)) { s.removeAllRanges(); s.addRange(last); }
    else if (!s.rangeCount || !ed.contains(s.getRangeAt(0).commonAncestorContainer)) { const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); s.removeAllRanges(); s.addRange(r); }
    document.execCommand("insertText", false, t); remember(); save();
  }
  function addWidget(type) {
    if (!window.InquireWidgets) return;
    const w = InquireWidgets.create(type), after = document.createElement("div"); after.appendChild(document.createElement("br"));
    // a widget is a block: it goes after the line the caret is on (never inside bold or coloured text)
    let block = last && ed.contains(last.commonAncestorContainer) ? last.endContainer : null;
    while (block && block.parentNode !== ed) block = block.parentNode;
    if (block) block.after(w, after); else ed.append(w, after);
    const s = getSelection(), r = document.createRange(); r.setStart(after, 0); r.collapse(true); s.removeAllRanges(); s.addRange(r); last = r.cloneRange();
    hydrate(ed); save();
    const f = w.querySelector(type === "code" ? ".nw-ta" : ".nw-piano button"); if (f) f.focus({ preventScroll: true });
    w.scrollIntoView({ block: "nearest" });
  }
  const api = { el: ed, id, flush, addFiles, addURL, linkRange, insertText, addWidget,
    focus: () => { ed.focus({ preventScroll: true }); const s = getSelection(); if (last && (!s.rangeCount || !ed.contains(s.getRangeAt(0).commonAncestorContainer))) { s.removeAllRanges(); s.addRange(last); } },
    changed: () => save(),
    normalizeColors: () => { ed.querySelectorAll("font").forEach(f => { const k = TCOL[String(f.getAttribute("color") || "").toLowerCase()]; if (k) { const sp = document.createElement("span"); sp.dataset.c = k; sp.append(...f.childNodes); f.replaceWith(sp); } else f.replaceWith(...f.childNodes); }); },
    destroy: () => { flush(); document.removeEventListener("selectionchange", remember); if (bar && bar.destroy) bar.destroy(); } };
  if (window.InquireWidgets) { bar = InquireWidgets.toolbar(api); host.appendChild(bar); }
  host.appendChild(ed);
  editors.set(ed, api);
  return api;
}
const editorFor = el => { const ed = el && el.closest ? el.closest(".nb-rich") : null; return ed ? editors.get(ed) || null : null; };

/* ---------- generator: a study note from a topic page ---------- */
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻", "−": "⁻", "+": "⁺", "n": "ⁿ", "i": "ⁱ" };
const SUB = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉", "n": "ₙ" };
const script = (m, map, mark) => { const t = m.replace(/<[^>]+>/g, ""); return [...t].every(c => map[c]) ? [...t].map(c => map[c]).join("") : mark + (t.length > 1 ? "(" + t + ")" : t); };
const text = html => { const d = document.createElement("div"); d.innerHTML = String(html || "").replace(/<sup>(.*?)<\/sup>/gi, (_, m) => script(m, SUP, "^")).replace(/<sub>(.*?)<\/sub>/gi, (_, m) => script(m, SUB, "_")).replace(/<br\s*\/?>/gi, "\n").replace(/<\/(p|li|h\d)>/gi, "\n"); return d.textContent.replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim(); };
function definitions(formalHtml) {
  // sentences of the formal statement that define a bold term
  const out = [];
  String(formalHtml || "").split(/<\/p>/i).forEach(par => {
    par.split(/(?<=[.!?])\s+(?=[A-Z<])/).forEach(sent => {
      const terms = [...sent.matchAll(/<b>(.*?)<\/b>/gi)].map(m => text(m[1]));
      if (terms.length) out.push({ terms, line: text(sent).replace(/\s*\n\s*/g, " ") });
    });
  });
  return out;
}
function fromTopic(id) {
  const T = (window.ARITH || {})[id]; if (!T) return null;
  const L = [];
  L.push(text(T.short || ""));
  if (T.lede) L.push("", text(T.lede));
  const defs = definitions(T.formal);
  if (defs.length) { L.push("", "KEY TERMS"); defs.slice(0, 10).forEach(d => L.push("• " + d.line)); }
  if (T.legend && T.legend.length) { L.push("", "SYMBOLS"); T.legend.forEach(l => L.push("• " + text(l.sym) + " — " + text(l.name) + ": " + text(l.desc))); }
  if (T.steps && T.steps.items) { L.push("", (text(T.steps.title) || "STEPS").toUpperCase()); T.steps.items.forEach((s, i) => L.push((i + 1) + ". " + text(s))); }
  if (T.example) { L.push("", "WORKED EXAMPLE", text(T.example.prompt)); if (T.example.answer) L.push("→ " + text(T.example.answer)); }
  L.push("", "MY NOTES", "");
  return { title: text(T.title), body: L.join("\n"), src: { topic: id, title: text(T.title) } };
}
window.InquireNotes = { list, get, create, update, remove, fromTopic, key, link, unlink, appendQuote,
  folders, addFolder, renameFolder, removeFolder, sanitize, toText, mountEditor, editorFor, hydrate, pick, pickNote, imageURL, exportImages, importImages,
  readFolders: readF, writeFolders: writeF };
})();
