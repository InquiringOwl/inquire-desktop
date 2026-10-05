/* Corner dock: the "Assist" tab at the bottom right of the app. It opens a small window with two tabs:
   - AI: a chat. The model is NOT built in: set window.InquireAI before or after this file loads:
       window.InquireAI = { name: "Tutor", async ask({ messages, context }) { … return "reply text"; } }
     messages = [{ role: "user" | "assistant", content }], context = InquireApp.context() (view, subject, field, topic, topicTitle).
     ask may also return an async iterable of text chunks (streaming). Without a provider the chat says it is not connected.
   - Notes: write notes, make one from the current topic page (InquireNotes.fromTopic), or clip selected page text.
   Lives inside #app, so the sign-in screen and the settings window cover/fog it like the rest of the app. */
(function () {
"use strict";
const app = document.getElementById("app"); if (!app) return;
const NS = window.InquireNotes, A = () => window.InquireApp, esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const KEY = "codex.dock";
const st = (() => { try { return Object.assign({ open: false, tab: "ai" }, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return { open: false, tab: "ai" }; } })();
const keep = () => { try { localStorage.setItem(KEY, JSON.stringify({ open: st.open, tab: st.tab })); } catch (e) {} };

const root = document.createElement("div");
root.className = "dk";
root.innerHTML = `
  <button type="button" class="dk-tab" aria-expanded="false" aria-controls="dk-win"><span class="dk-gem" aria-hidden="true"></span>Assist</button>
  <section class="dk-win win" id="dk-win" role="dialog" aria-label="Assist" hidden>
    <header class="dk-h"><div class="dk-tabs" role="tablist">
      <button type="button" role="tab" data-t="ai">AI chat</button><button type="button" role="tab" data-t="notes">Notes</button></div>
      <button type="button" class="dk-x" aria-label="Close Assist" title="Close">✕</button></header>
    <div class="dk-pane" data-p="ai">
      <div class="dk-ctx"></div>
      <div class="dk-log" aria-live="polite"></div>
      <form class="dk-ask"><textarea rows="2" placeholder="Ask about this topic…" aria-label="Message"></textarea><button type="submit" class="btn-s" aria-label="Send">Send</button></form>
    </div>
    <div class="dk-pane" data-p="notes" hidden></div>
  </section>`;
app.appendChild(root);
const tabBtn = root.querySelector(".dk-tab"), win = root.querySelector(".dk-win");
const $ = s => root.querySelector(s);

function setOpen(o) {
  st.open = o; keep();
  win.hidden = !o; tabBtn.setAttribute("aria-expanded", String(o)); root.classList.toggle("is-open", o);
  if (o) { setTab(st.tab); }
}
function setTab(t) {
  st.tab = t; keep();
  root.querySelectorAll(".dk-tabs [data-t]").forEach(b => b.setAttribute("aria-selected", String(b.dataset.t === t)));
  root.querySelectorAll(".dk-pane").forEach(p => { p.hidden = p.dataset.p !== t; });
  if (t === "ai") { drawCtx(); setTimeout(() => $(".dk-ask textarea").focus({ preventScroll: true }), 30); }
  else drawNotes();
}
tabBtn.onclick = () => setOpen(!st.open);
$(".dk-x").onclick = () => { setOpen(false); tabBtn.focus(); };
root.querySelectorAll(".dk-tabs [data-t]").forEach(b => b.onclick = () => setTab(b.dataset.t));
win.addEventListener("keydown", e => { if (e.key === "Escape") { e.stopPropagation(); setOpen(false); tabBtn.focus(); } });

/* ---------- AI chat ---------- */
const chat = []; // this session only
const ctx = () => (A() ? A().context() : {});
function drawCtx() {
  const c = ctx(), where = c.topicTitle || c.fieldName || c.subjectName || "";
  $(".dk-ctx").innerHTML = (c.view === "math" && where ? `<span>Context</span><b>${esc(where)}</b>` : `<span>Context</span><b>${c.view === "notes" ? "My notes" : c.view === "glossary" ? "Glossary" : "Menu"}</b>`)
    + `<span class="dk-prov">${window.InquireAI ? esc(window.InquireAI.name || "Assistant") : "not connected"}</span>`;
}
function bubble(role, text) {
  const d = document.createElement("div");
  d.className = "dk-msg " + role;
  d.innerHTML = `<div class="dk-t"></div>` + (role === "assistant" ? `<button type="button" class="dk-save" title="Save this reply to a note">＋ Note</button>` : "");
  d.querySelector(".dk-t").textContent = text;
  const sv = d.querySelector(".dk-save");
  if (sv) sv.onclick = () => { const c = ctx(); const n = NS.create({ title: "AI: " + (c.topicTitle || "notes"), body: d.querySelector(".dk-t").textContent, src: c.topic ? { topic: c.topic, title: c.topicTitle } : null }); sv.textContent = "Saved ✓"; sv.disabled = true; window.dispatchEvent(new CustomEvent("inquire:notes-changed", { detail: { id: n.id } })); };
  $(".dk-log").appendChild(d); $(".dk-log").scrollTop = 1e9;
  return d;
}
function hello() {
  if ($(".dk-log").childElementCount) return;
  const p = document.createElement("p"); p.className = "dk-hello";
  p.textContent = window.InquireAI ? "Ask a question about the page you are on, or anything you are studying." : "The AI assistant is not connected yet. Its logic will be added in a later update; until then you can still write notes in the Notes tab.";
  $(".dk-log").appendChild(p);
}
$(".dk-ask").onsubmit = async e => {
  e.preventDefault();
  const ta = $(".dk-ask textarea"), q = ta.value.trim(); if (!q) return;
  ta.value = ""; bubble("user", q); chat.push({ role: "user", content: q });
  const out = bubble("assistant", "…"), t = out.querySelector(".dk-t"); out.classList.add("busy");
  const P = window.InquireAI;
  try {
    if (!P || typeof P.ask !== "function") throw new Error("The AI assistant is not connected yet.");
    const r = await P.ask({ messages: chat.slice(), context: ctx() });
    let text = "";
    if (r && typeof r[Symbol.asyncIterator] === "function") { t.textContent = ""; for await (const ch of r) { text += ch; t.textContent = text; $(".dk-log").scrollTop = 1e9; } }
    else { text = String(r == null ? "" : r); t.textContent = text; }
    chat.push({ role: "assistant", content: text });
  } catch (err) { t.textContent = err.message || "Something went wrong."; out.classList.add("err"); }
  out.classList.remove("busy"); $(".dk-log").scrollTop = 1e9;
};
$(".dk-ask textarea").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $(".dk-ask").requestSubmit(); } });

/* ---------- notes ---------- */
let edId = null, saveT = null, rich = null;
function drawNotes() {
  const pane = $('[data-p="notes"]');
  if (!NS) { pane.innerHTML = "<p class=dk-hello>Notes are unavailable.</p>"; return; }
  if (rich) { rich.destroy(); rich = null; }
  const n = edId && NS.get(edId);
  if (n) {
    pane.innerHTML = `<div class="dk-nbar"><button type="button" class="btn-s" data-a="back">◀ Notes</button><span class="dk-saved">Saved</span><button type="button" class="btn-s" data-a="photo" title="Add a photo from this computer">＋ Photo</button><button type="button" class="btn-s" data-a="clip" title="Add the text you have selected on the page">Clip selection</button></div>
      <input class="dk-ntitle" value="${esc(n.title)}" aria-label="Title" maxlength="140"><div class="dk-nbody"></div><input type="file" accept="image/*" multiple hidden>
      <div class="dk-nfoot">${n.src ? `<button type="button" class="dk-link" data-a="src">↗ ${esc(n.src.title)}</button>` : "<span></span>"}<button type="button" class="dk-link" data-a="full">Open in My notes ▸</button></div>`;
    const ti = pane.querySelector(".dk-ntitle"), sv = pane.querySelector(".dk-saved");
    rich = NS.mountEditor(pane.querySelector(".dk-nbody"), n.id, {
      onEditing: () => { sv.textContent = "Editing…"; }, onSaved: () => { sv.textContent = "Saved"; },
      openNote: id => { edId = id; drawNotes(); }, openTopic: id => A() && A().openTopic(id)
    });
    const saveTitle = () => { clearTimeout(saveT); sv.textContent = "Editing…"; saveT = setTimeout(() => { NS.update(n.id, { title: ti.value.trim() || "Untitled note" }); sv.textContent = "Saved"; saveT = null; }, 400); };
    ti.oninput = saveTitle;
    const file = pane.querySelector('input[type="file"]');
    pane.querySelector('[data-a="photo"]').onclick = () => file.click();
    file.onchange = async () => { const k = await rich.addFiles(file.files); sv.textContent = k ? "Photo added" : "That file is not a photo"; file.value = ""; };
    pane.querySelector('[data-a="back"]').onclick = () => { flush(); edId = null; drawNotes(); };
    pane.querySelector('[data-a="full"]').onclick = () => { flush(); const id = edId; edId = null; setOpen(false); A() && A().openNotes(id); };
    const src = pane.querySelector('[data-a="src"]'); if (src) src.onclick = () => A() && A().openTopic(n.src.topic);
    pane.querySelector('[data-a="clip"]').onmousedown = e => e.preventDefault(); // keep the page selection
    pane.querySelector('[data-a="clip"]').onclick = () => {
      const sel = String(window.getSelection ? window.getSelection() : "").trim(), c = ctx();
      if (!sel) { sv.textContent = "Select text on the page first"; return; }
      flush(); NS.appendQuote(n.id, sel, c.topic, c.topicTitle); drawNotes(); sv.textContent = "Clipped";
    };
    if (!n.body) rich.el.focus();
    return;
  }
  const c = ctx(), all = NS.list();
  pane.innerHTML = `<div class="dk-nbar"><button type="button" class="btn-s" data-a="new">＋ New</button><button type="button" class="btn-s" data-a="gen"${c.topic ? "" : " disabled"} title="${c.topic ? "Make a study note from " + esc(c.topicTitle) : "Open a topic page first"}">Note from this page</button></div>
    <div class="dk-nlist">${all.length ? all.slice(0, 30).map(x => `<button type="button" class="dk-nit" data-id="${x.id}"><b>${x.fav ? "★ " : ""}${esc(x.title)}</b><span>${esc(x.body.slice(0, 90))}</span></button>`).join("") : `<p class="dk-hello">No notes yet. Start one, or open a topic and choose <b>Note from this page</b> for a ready-made study sheet you can add to.</p>`}</div>
    <div class="dk-nfoot"><span>${all.length} note${all.length === 1 ? "" : "s"}</span><button type="button" class="dk-link" data-a="full">Open in My notes ▸</button></div>`;
  pane.querySelector('[data-a="new"]').onclick = () => { const x = NS.create({ src: c.topic ? { topic: c.topic, title: c.topicTitle } : null }); edId = x.id; drawNotes(); pane.querySelector(".dk-ntitle").select(); };
  pane.querySelector('[data-a="gen"]').onclick = () => {
    const g = NS.fromTopic(c.topic); if (!g) return; const x = NS.create(g); edId = x.id; drawNotes();
    const ed = pane.querySelector(".nb-rich"); ed.focus(); const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); ed.scrollTop = 1e9;
  };
  pane.querySelector('[data-a="full"]').onclick = () => { setOpen(false); A() && A().openNotes(); };
  pane.querySelectorAll(".dk-nit").forEach(b => b.onclick = () => { edId = b.dataset.id; drawNotes(); });
}
function flush() {
  if (rich) rich.flush();
  if (!saveT) return; clearTimeout(saveT); saveT = null; const ti = $(".dk-ntitle"); if (ti && edId) NS.update(edId, { title: ti.value.trim() || "Untitled note" });
}

// keep the context line and the notes list current
window.addEventListener("hashchange", () => { if (!win.hidden) { if (st.tab === "ai") drawCtx(); else if (!edId) drawNotes(); } });
window.addEventListener("inquire:route", () => { if (!win.hidden) { if (st.tab === "ai") drawCtx(); else if (!edId) drawNotes(); } });
window.addEventListener("inquire:notes-changed", () => { if (!win.hidden && st.tab === "notes" && !edId) drawNotes(); });
window.addEventListener("inquire:signed-in", () => { edId = null; chat.length = 0; $(".dk-log").innerHTML = ""; hello(); if (!win.hidden) setTab(st.tab); });
hello();
if (st.open) setOpen(true);
})();
