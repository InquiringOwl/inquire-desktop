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

/* Notes: a small per-account store plus the "from this page" note generator.
   Loaded before app.js (the Menu and the Notes screen read it) and before dock.js (the corner panel writes it).
   Kept in localStorage "codex.notes.<username>" (lower-case), or "codex.notes._local" when nobody is signed in
   (the claude.ai preview). Each note: { id, title, body (plain text), created, updated, src: { topic, title } | null }.
   Every change fires "inquire:notes-changed" so open views redraw. */
(function () {
"use strict";
const key = () => window.InquireKeys.notes();
const read = () => { try { const v = JSON.parse(localStorage.getItem(key()) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
const write = all => { try { localStorage.setItem(key(), JSON.stringify(all)); } catch (e) {} window.dispatchEvent(new CustomEvent("inquire:notes-changed")); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const byUpdated = (a, b) => b.updated - a.updated;

function list(q) {
  const all = read().sort(byUpdated);
  if (!q) return all;
  const s = q.toLowerCase();
  return all.filter(n => (n.title + "\n" + n.body + "\n" + (n.src ? n.src.title : "")).toLowerCase().includes(s));
}
const get = id => read().find(n => n.id === id) || null;
function create(o = {}) {
  const now = Date.now();
  const n = { id: uid(), title: o.title || "Untitled note", body: o.body || "", created: now, updated: now, src: o.src || null };
  const all = read(); all.push(n); write(all); return n;
}
function update(id, patch) {
  const all = read(), n = all.find(x => x.id === id); if (!n) return null;
  Object.assign(n, patch, { updated: Date.now() }); write(all); return n;
}
function remove(id) { write(read().filter(n => n.id !== id)); }

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
window.InquireNotes = { list, get, create, update, remove, fromTopic, key };
})();
