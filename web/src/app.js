(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const h = (tag, attrs={}, html) => { const e = document.createElement(tag); for (const k in attrs) { if (k === "class") e.className = attrs[k]; else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); } if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T = window.ARITH || {};
// Every charted field has its own tree in DB.trees. Topic ids are unique across fields,
// and a node's prerequisites may come from another field (e.g. Pre-Algebra ← Arithmetic).
const TREES = DB.trees;
const NODES = [];
Object.entries(TREES).forEach(([f, tr]) => tr.nodes.forEach(n => { n.field = f; NODES.push(n); }));
const NODE = Object.fromEntries(NODES.map(n => [n.id, n]));
const fieldNodes = f => (TREES[f] ? TREES[f].nodes : []);
const charted = f => !!TREES[f];
const fieldOf = id => (NODE[id] ? NODE[id].field : "arithmetic");
// unlocks
NODES.forEach(n => n.post = []);
NODES.forEach(n => { n.pre = n.pre.filter(p => { if (NODE[p]) return true; console.warn("Unknown prerequisite", p, "for", n.id); return false; }); n.pre.forEach(p => NODE[p].post.push(n.id)); });
// reading order: by column then row
const ORDERS = Object.fromEntries(Object.keys(TREES).map(f => [f, fieldNodes(f).slice().sort((a,b) => a.col - b.col || a.row - b.row).map(n => n.id)]));
const doneIn = f => fieldNodes(f).filter(n => mastered.has(n.id)).length;
// Subjects (Mathematics, Physics …): each field belongs to one; each subject has its own field map.
const SM = DB.subjectMaps;
const subjOf = f => (DB.fields[f] && DB.fields[f].subject) || "mathematics";
const subjFields = sub => Object.keys(DB.fields).filter(k => subjOf(k) === sub);
const subjTrees = sub => Object.keys(TREES).filter(k => subjOf(k) === sub);
// Math a node needs: a charted topic id, or "field:Topic name" for a field not yet charted.
const mathRef = m => { const i = m.indexOf(":"); if (i < 0) return NODE[m] ? { id: m } : null; const f = m.slice(0, i); return DB.fields[f] ? { field: f, name: m.slice(i + 1) } : null; };

/* ---------- persistence (per-viewer convenience) ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem("codex." + k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem("codex." + k, JSON.stringify(v)); } catch(e){} }
};
let mastered = new Set(store.get("mastered", []));
const saveMastered = () => store.set("mastered", [...mastered]);
function stateOf(id){
  if (mastered.has(id)) return "mastered";
  return NODE[id].pre.every(p => mastered.has(p)) ? "avail" : "locked";
}

/* ---------- app state + routing ---------- */
const S = { view: "menu", subject: "mathematics", field: "arithmetic", topic: null, openGroups: store.get("groups", ["Foundations","Core Sequence"]), pan: {} };
const app = $("#app");
const viewEl = $("#view");
let cleanup = [];
function clearView(){ cleanup.forEach(f => { try{ f(); }catch(e){} }); cleanup = []; viewEl.innerHTML = ""; }

function go(next, push = true){
  if (next.g) { Object.assign(G, next.g); next = { ...next }; delete next.g; }
  Object.assign(S, next);
  if (S.topic && NODE[S.topic]) S.field = fieldOf(S.topic);
  if (S.field !== "map" && DB.fields[S.field]) S.subject = subjOf(S.field);
  if (!SM[S.subject]) S.subject = "mathematics";
  render();
  const tok = S.view === "glossary" ? gTok() : S.topic ? S.topic : (S.view === "math" ? (S.field === "map" ? "field-map" + (S.subject !== "mathematics" ? "-" + S.subject : "") : "field-" + S.field) : S.view);
  if (push) { try { history.pushState({ ...next, view: S.view, subject: S.subject, field: S.field, topic: S.topic, ...(S.view === "glossary" ? { g: { sub: G.sub, word: G.word, field: G.field } } : {}) }, "", "#" + tok); } catch(e){} }
  store.set("last", { view: S.view, subject: S.subject, field: S.field, topic: S.topic });
}
window.addEventListener("popstate", e => { if (e.state) go(e.state, false); });
window.addEventListener("hashchange", () => { const s = fromHash(); if (s) go(s, false); });
function fromHash(){
  const t = (location.hash || "").slice(1);
  if (!t) return null;
  if (NODE[t]) return { view: "math", field: fieldOf(t), topic: t };
  if (t === "field-map" || t.startsWith("field-map-")) { const sub = t.slice(10) || "mathematics"; if (SM[sub]) return { view: "math", subject: sub, field: "map", topic: null }; }
  if (t.startsWith("field-")) { const f = t.slice(6); if (DB.fields[f]) return { view: "math", subject: subjOf(f), field: f, topic: null }; }
  if (t === "menu" || t === "dict") return { view: t, topic: null };
  if (t === "glossary" || t.startsWith("glossary-") || t.startsWith("glossary~")) {
    const m = t.match(/^glossary(?:-([a-z0-9-]+))?(?:~(.*))?$/); if (!m) return null;
    let w = null; try { w = m[2] ? decodeURIComponent(m[2]).toLowerCase() : null; } catch(e){}
    return { view: "glossary", topic: null, g: { sub: m[1] && GSUB[m[1]] ? m[1] : "all", word: w && GWORDS[w] ? w : null, field: null } };
  }
  return null;
}

/* ---------- top bar ---------- */
function crumbs(){
  const c = $("#crumbs"); c.innerHTML = "";
  const parts = [["Menu", () => go({ view: "menu", topic: null })]];
  if (S.view === "glossary") {
    parts.push(["Glossary", () => { G.sub = "all"; G.field = null; G.word = null; openGlossary({}); }]);
    if (G.sub !== "all") parts.push([gName(G.sub), null]);
    parts.forEach(([label, fn], i) => {
      if (i) c.appendChild(h("span", { class: "sep" }, "›"));
      if (fn && i < parts.length - 1) c.appendChild(h("button", { type: "button", onclick: fn }, esc(label)));
      else c.appendChild(h("span", { class: "here" }, esc(label)));
    });
    $("#stat-t").textContent = `${Object.keys(GWORDS).length} words · ${gSubjects().length} subjects`;
    $("#stat-m").style.width = "0%";
    return;
  }
  if (S.view !== "menu") parts.push(["Dictionary", () => go({ view: "dict", topic: null })]);
  if (S.view === "math") {
    parts.push([SM[S.subject].name, () => go({ view: "math", subject: S.subject, field: "map", topic: null })]);
    if (S.field !== "map") parts.push([DB.fields[S.field].name, () => go({ view: "math", topic: null })]);
    if (S.topic) parts.push([T[S.topic] ? T[S.topic].title : S.topic, null]);
  }
  parts.forEach(([label, fn], i) => {
    if (i) c.appendChild(h("span", { class: "sep" + (i < parts.length - 2 ? " hide-s" : "") }, "›"));
    if (fn && i < parts.length - 1) c.appendChild(h("button", { type: "button", class: i < parts.length - 2 ? "hide-s" : "", onclick: fn }, esc(label)));
    else c.appendChild(h("span", { class: "here" }, esc(label)));
  });
  const sf = S.topic ? fieldOf(S.topic) : (S.view === "math" && charted(S.field) ? S.field : null);
  const pool = sf ? fieldNodes(sf) : NODES.filter(n => subjOf(n.field) === S.subject);
  const done = pool.filter(n => mastered.has(n.id)).length, tot = pool.length;
  $("#stat-t").textContent = `${sf ? DB.fields[sf].name : SM[S.subject].name} ${done}/${tot} mastered`;
  $("#stat-m").style.width = (tot ? done / tot * 100 : 0) + "%";
}

function render(){
  clearView(); crumbs();
  if (S.view === "menu") renderMenu();
  else if (S.view === "dict") renderDict();
  else if (S.view === "glossary") renderGlossary();
  else renderWork();
  viewEl.focus({ preventScroll: true });
}

/* ---------- main menu ---------- */
function renderMenu(){
  const s = h("div", { class: "screen" });
  s.innerHTML = `<div class="screen-in">
    <div class="hello"><p class="eyebrow">Inquire · knowledge console</p><h1>Choose a section</h1>
    <p>Inquire maps each subject as a skill tree. Every node is a full dossier with an interactive model, the exact definitions, a worked example, and where the idea is used.</p></div>
    <div class="slots" id="slots"></div>
    <div class="verline" id="verline"></div></div>`;
  viewEl.appendChild(s);
  const slots = $("#slots", s);
  if (window.codexDesktop) {
    const vl = $("#verline", s);
    vl.innerHTML = `<span>Inquire <span class="num">v${esc(DESK_VERSION || "")}</span></span><button type="button" class="btn-s" id="chk">Check for updates</button>`;
    $("#chk", s).onclick = () => window.codexDesktop.checkForUpdates();
  }
  const d = h("button", { type: "button", class: "slot big", onclick: () => go({ view: "dict", topic: null }) },
    `<span class="glyph">Ⅾ</span><span><h3>Dictionary</h3><p>Subjects broken into fields and topics, ordered as a path to mastery. Mathematics, Physics and English are open.</p></span><span class="tag">Online</span>`);
  slots.appendChild(d);
  slots.appendChild(h("button", { type: "button", class: "slot big", onclick: () => { G.sub = "all"; G.field = null; G.word = null; G.ret = null; openGlossary({}); } },
    `<span class="glyph">Aa</span><span><h3>Glossary</h3><p>Every subject’s words in one place, with each subject’s meaning marked. ${Object.keys(GWORDS).length} words so far.</p></span><span class="tag">Online</span>`));
  for (let i = 3; i <= 4; i++) slots.appendChild(h("div", { class: "slot big locked", "aria-disabled": "true" },
    `<span class="glyph">·</span><span><h3>Slot 0${i}</h3><p>Reserved for a future section.</p></span><span class="tag">Empty</span>`));
}

/* ---------- dictionary ---------- */
function renderDict(){
  const s = h("div", { class: "screen" });
  s.innerHTML = `<div class="screen-in">
    <div class="hello"><p class="eyebrow">Dictionary</p><h1>Subjects</h1>
    <p>Pick a subject to open its navigator. Fields appear on the left and the selected field's skill tree on the right.</p></div>
    <div class="subj-groups" id="subj"></div></div>`;
  viewEl.appendChild(s);
  (DB.subjectGroups || [{ id: "all", name: "Subjects", line: "" }]).forEach(g => {
    const subs = DB.subjects.filter(x => (x.group || "all") === g.id);
    if (!subs.length) return;
    const sec = h("section", { class: "subj-group", "data-accent": g.accent || "", "aria-label": g.name });
    sec.innerHTML = `<div class="subj-gh"><h2>${esc(g.name)}</h2><span class="ln">${esc(g.line || "")}</span><span class="n">${subs.length}</span></div><div class="slots"></div>`;
    subs.forEach(sub => {
      const open = sub.status === "open";
      const el = h(open ? "button" : "div", open ? { type: "button", class: "slot", onclick: () => go({ view: "math", subject: sub.id, field: "map", topic: null }) } : { class: "slot locked", "aria-disabled": "true" },
        `<span class="glyph">${sub.glyph}</span><span><h3>${esc(sub.name)}</h3><p>${esc(sub.note)}</p></span><span class="tag">${open ? "Open" : "Locked"}</span>`);
      $(".slots", sec).appendChild(el);
    });
    $("#subj", s).appendChild(sec);
  });
}

/* ---------- workspace ---------- */
function renderWork(){
  const w = h("div", { class: "work", "data-accent": SM[S.subject].accent || "" });
  const nav = h("aside", { class: "nav", "aria-label": SM[S.subject].name + " navigator" });
  const main = h("section", { class: "main" });
  w.append(nav, main); viewEl.appendChild(w);
  buildNav(nav, w);
  if (S.topic) renderTopic(main);
  else if (S.field === "map") renderFieldMap(main);
  else if (charted(S.field)) renderFieldTree(main, S.field);
  else renderDossier(main);
}

function buildNav(nav, w){
  nav.innerHTML = `<div class="nav-top">
      <div class="nav-title"><span class="glyph">${SM[S.subject].glyph}</span><div><h2>${esc(SM[S.subject].name)}</h2><small>${subjFields(S.subject).length} fields · ${subjTrees(S.subject).length} charted</small></div></div>
      <label class="search"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="6" cy="6" r="4.5" fill="none" stroke="#8B97AE" stroke-width="1.4"/><path d="M9.5 9.5 13 13" stroke="#8B97AE" stroke-width="1.4"/></svg>
      <input id="navq" type="text" placeholder="Search fields and topics" aria-label="Search fields and topics"></label>
    </div><div class="nav-list" id="navlist"></div>
    <div class="nav-foot">Gold nodes are ready to study. Green nodes are mastered. Mark a topic mastered from its page.</div>`;
  const list = $("#navlist", nav);
  const q = $("#navq", nav);
  function build(){
    const term = q.value.trim().toLowerCase();
    list.innerHTML = "";
    const mapItem = h("button", { type: "button", class: "item" + (S.field === "map" && !S.topic ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", subject: S.subject, field: "map", topic: null }); } },
      `<span class="ic">⌗</span><span style="min-width:0"><span class="nm">Field map</span><span class="lv">${esc(SM[S.subject].mapLine)}</span></span><span class="st"></span>`);
    if (!term) list.appendChild(mapItem);
    const gn = Object.keys(GWORDS).filter(k => GWORDS[k].some(e => e.subject === S.subject));
    const fromHere = () => ({ label: SM[S.subject].name + (S.topic && T[S.topic] ? " · " + T[S.topic].title : S.field !== "map" && DB.fields[S.field] ? " · " + DB.fields[S.field].name : ""), subject: S.subject, state: { view: "math", subject: S.subject, field: S.field, topic: S.topic } });
    if (!term) list.appendChild(h("button", { type: "button", class: "item gl-nav", onclick: () => { w.classList.remove("navopen"); openGlossary({ from: fromHere(), sub: gn.length ? S.subject : "all", word: null }); } },
      `<span class="ic">Aa</span><span style="min-width:0"><span class="nm">Glossary</span><span class="lv">${gn.length ? `${gn.length} ${esc(SM[S.subject].name)} words · all subjects one tap away` : "Words from every subject"}</span></span><span class="st"></span>`));
    if (term) {
      const hits = gn.filter(k => k.includes(term) || GWORDS[k].some(e => e.subject === S.subject && (e.forms || []).some(f => f.toLowerCase().includes(term)))).slice(0, 6);
      if (hits.length) {
        const grp = h("div", { class: "grp open" }), body = h("div", { class: "grp-b" });
        grp.appendChild(h("div", { class: "grp-h" }, `<span class="car"></span>Glossary<span class="n">${hits.length}</span>`));
        hits.forEach(k => body.appendChild(h("button", { type: "button", class: "item sub", onclick: () => { w.classList.remove("navopen"); openGlossary({ from: fromHere(), sub: S.subject, word: k }); } },
          `<span class="ic">Aa</span><span class="nm">${esc(GWORDS[k][0].w)}</span><span class="st"></span>`)));
        grp.appendChild(body); list.appendChild(grp);
      }
    }
    SM[S.subject].groups.forEach(g => {
      const ids = g.ids.filter(id => {
        if (!term) return true;
        const f = DB.fields[id];
        if (f.name.toLowerCase().includes(term)) return true;
        if (charted(id)) return fieldNodes(id).some(n => (T[n.id]?.title || "").toLowerCase().includes(term));
        return f.topics.some(t => t.toLowerCase().includes(term));
      });
      if (!ids.length) return;
      const open = term || S.openGroups.includes(g.name) || ids.includes(S.field);
      const grp = h("div", { class: "grp" + (open ? " open" : "") });
      const head = h("button", { type: "button", class: "grp-h", "aria-expanded": String(!!open) }, `<span class="car"></span>${esc(g.name)}<span class="n">${ids.length}</span>`);
      head.onclick = () => {
        const on = !grp.classList.contains("open"); grp.classList.toggle("open", on); head.setAttribute("aria-expanded", String(on));
        S.openGroups = on ? [...new Set([...S.openGroups, g.name])] : S.openGroups.filter(x => x !== g.name); store.set("groups", S.openGroups);
      };
      const body = h("div", { class: "grp-b" });
      ids.forEach(id => {
        const f = DB.fields[id];
        const isCh = charted(id);
        const it = h("button", { type: "button", class: "item" + (isCh ? " charted" : "") + (S.field === id && !S.topic ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", field: id, topic: null }); } },
          `<span class="ic">${f.icon}</span><span style="min-width:0"><span class="nm">${esc(f.name)}</span><span class="lv">${esc(f.level)}</span></span><span class="st">${isCh ? (fieldNodes(id).length ? doneIn(id) + "/" + fieldNodes(id).length : "Mapped") : "Planned"}</span>`);
        body.appendChild(it);
        if (isCh && (S.field === id || term)) {
          ORDERS[id].map(x => NODE[x]).forEach(n => {
            const t = T[n.id]; if (!t) return;
            if (term && !t.title.toLowerCase().includes(term)) return;
            const st = stateOf(n.id);
            const sub = h("button", { type: "button", class: "item sub" + (st === "mastered" ? " mastered" : "") + (S.topic === n.id ? " sel" : ""), onclick: () => { w.classList.remove("navopen"); go({ view: "math", field: id, topic: n.id }); } },
              `<span class="ic"${[...n.icon].length > 3 ? ' style="font-size:8px;letter-spacing:-.03em"' : [...n.icon].length > 2 ? ' style="font-size:9.5px"' : ""}>${n.icon}</span><span class="nm">${esc(t.title)}</span><span class="st">${st === "mastered" ? "✓" : ""}</span>`);
            body.appendChild(sub);
          });
        }
      });
      grp.append(head, body); list.appendChild(grp);
    });
    const sel = list.querySelector(".item.sel");
    if (sel && !term) requestAnimationFrame(() => { const r = sel.getBoundingClientRect(), lr = list.getBoundingClientRect(); if (r.top < lr.top || r.bottom > lr.bottom) sel.scrollIntoView({ block: "center" }); });
  }
  q.addEventListener("input", build);
  build();
}

/* ---------- generic pannable tree (Civ-style) ---------- */
const COLW = 364, ROWH = 92, PADX = 40, PADY = 58, NW = 312, NH = 70;
function buildTree(main, cfg){
  const { nodes, eras, key, stateFn, title, onOpen, infoFn } = cfg;
  const maxCol = Math.max(...nodes.map(n => n.col)), maxRow = Math.max(...nodes.map(n => n.row));
  const W = PADX * 2 + (maxCol + 1) * COLW - (COLW - NW), H = PADY + (maxRow + 1) * ROWH + 10;
  const vp = h("div", { class: "tree-vp", role: "region", "aria-label": title + " skill tree. Drag or scroll to pan." });
  const cv = h("div", { class: "tree-canvas" });
  cv.style.width = W + "px"; cv.style.height = H + "px";
  // eras
  const erasEl = h("div", { class: "eras" }); erasEl.style.width = W + "px";
  eras.forEach((e, i) => {
    const x0 = i === 0 ? 0 : PADX + e.from * COLW - (COLW - NW) / 2;
    const x1 = i === eras.length - 1 ? W : PADX + (e.to + 1) * COLW - (COLW - NW) / 2;
    const el = h("div", { class: "era" }, esc(e.name)); el.style.width = (x1 - x0) + "px"; erasEl.appendChild(el);
    const band = h("div", { class: "era-band" }); band.style.left = x0 + "px"; band.style.width = (x1 - x0) + "px"; cv.appendChild(band);
  });
  const pos = id => { const n = nodes.find(x => x.id === id); return { x: PADX + n.col * COLW, y: PADY + n.row * ROWH }; };
  // edges
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg"); svg.setAttribute("width", W); svg.setAttribute("height", H);
  const edges = [];
  nodes.forEach(n => n.pre.forEach(p => {
    const a = pos(p), b = pos(n.id);
    const x1 = a.x + NW, y1 = a.y + NH / 2, x2 = b.x + 22, y2 = b.y + NH / 2;
    const xm = x2 - 26;
    const r = Math.min(8, Math.abs(y2 - y1) / 2);
    let d;
    if (Math.abs(y2 - y1) < 1) d = `M${x1} ${y1}H${x2}`;
    else { const s = y2 > y1 ? 1 : -1; d = `M${x1} ${y1}H${xm - r}Q${xm} ${y1} ${xm} ${y1 + s*r}V${y2 - s*r}Q${xm} ${y2} ${xm + r} ${y2}H${x2}`; }
    const path = document.createElementNS(svgNS, "path"); path.setAttribute("d", d); path.setAttribute("class", "edge");
    svg.appendChild(path); edges.push({ from: p, to: n.id, el: path });
  }));
  cv.appendChild(svg);
  // nodes
  const els = {};
  nodes.forEach(n => {
    const p = pos(n.id), st = stateFn(n.id);
    const el = h("button", { type: "button", class: "node", "data-st": st, "data-id": n.id, "aria-label": n.label + " (" + ({mastered:"mastered",avail:"ready to study",locked:"prerequisites not yet mastered",planned:"planned"}[st]) + ")" },
      `<span class="box"><span class="ttl"><span>${esc(n.label)}</span><span class="hrs">${n.right || ""}</span></span><span class="chips">${(n.chips||[]).map(c => `<span class="chip">${c}</span>`).join("")}</span></span><span class="orb" style="font-size:${[...n.icon].length > 5 ? 12 : [...n.icon].length > 3 ? 14 : [...n.icon].length > 2 ? 17 : 20}px">${n.icon}</span>`);
    el.style.left = p.x + "px"; el.style.top = p.y + "px";
    els[n.id] = el; cv.appendChild(el);
  });
  edges.forEach(e => { if (stateFn(e.from) === "mastered" && stateFn(e.to) === "mastered") e.el.classList.add("done"); });
  vp.appendChild(cv); vp.appendChild(erasEl);
  const info = h("div", { class: "info-card win" }); info.innerHTML = `<div class="in"></div>`; vp.appendChild(info);
  // highlight ancestry
  function ancestors(id, acc = new Set()){ const n = nodes.find(x => x.id === id); n.pre.forEach(p => { if (!acc.has(p)) { acc.add(p); ancestors(p, acc); } }); return acc; }
  function hl(id){
    Object.values(els).forEach(e => e.classList.remove("hl"));
    edges.forEach(e => e.el.classList.remove("hl"));
    if (!id) { info.classList.remove("on"); return; }
    const anc = ancestors(id); anc.forEach(a => els[a].classList.add("hl"));
    edges.forEach(e => { if ((e.to === id || anc.has(e.to)) && (anc.has(e.from))) e.el.classList.add("hl"); });
    if (infoFn) { info.firstChild.innerHTML = infoFn(id, anc); info.classList.add("on"); }
  }
  // bottom bar
  const bar = h("div", { class: "tree-bar" });
  bar.innerHTML = `<button type="button" class="btn-s" data-d="-1" aria-label="Pan left">◀</button><div class="track" aria-hidden="true"><div class="thumb"></div></div><button type="button" class="btn-s" data-d="1" aria-label="Pan right">▶</button><span class="hint">Drag to pan · scroll · click a node to open</span>`;
  main.append(vp, bar);
  // pan logic
  let px = S.pan[key]?.x ?? 0, py = S.pan[key]?.y ?? 0, vw = 1, vh = 1;
  const track = $(".track", bar), thumb = $(".thumb", bar);
  function clamp(){ px = Math.min(0, Math.max(px, Math.min(0, vw - W))); if (H <= vh) py = Math.round((vh - H) / 2); else py = Math.min(0, Math.max(py, vh - H)); }
  function apply(){
    clamp(); cv.style.transform = `translate(${px}px,${py}px)`; erasEl.style.transform = `translateX(${px}px)`;
    const tw = track.clientWidth, frac = Math.min(1, vw / W);
    thumb.style.width = Math.max(24, tw * frac) + "px";
    const maxT = tw - thumb.offsetWidth; const t = W > vw ? (-px) / (W - vw) : 0;
    thumb.style.left = (maxT * t) + "px";
    S.pan[key] = { x: px, y: py };
  }
  const ro = new ResizeObserver(() => { vw = vp.clientWidth; vh = vp.clientHeight; apply(); });
  ro.observe(vp); cleanup.push(() => ro.disconnect());
  let drag = null, moved = false;
  vp.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, y: e.clientY, px, py, id: e.pointerId }; moved = false;
  });
  vp.addEventListener("pointermove", e => {
    if (!drag) {
      const n = e.target.closest(".node"); hl(n ? n.dataset.id : null); return;
    }
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!moved && Math.hypot(dx, dy) > 5) { moved = true; vp.classList.add("drag"); try { vp.setPointerCapture(drag.id); } catch(_){} hl(null); }
    if (moved) { px = drag.px + dx; py = drag.py + dy; apply(); }
  });
  const end = e => {
    if (!drag) return;
    const wasMoved = moved; drag = null; vp.classList.remove("drag");
    if (!wasMoved) { const n = e.target.closest && e.target.closest(".node"); if (n) onOpen(n.dataset.id); }
  };
  vp.addEventListener("pointerup", end);
  vp.addEventListener("pointercancel", () => { drag = null; vp.classList.remove("drag"); });
  vp.addEventListener("pointerleave", () => { if (!drag) hl(null); });
  vp.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.classList.contains("node")) { e.preventDefault(); onOpen(e.target.dataset.id); } });
  cv.querySelectorAll(".node").forEach(n => { n.addEventListener("click", e => e.preventDefault()); n.addEventListener("focus", () => { hl(n.dataset.id); const x = parseFloat(n.style.left); if (x + px < 0 || x + px + NW > vw) { px = -(x - vw / 2 + NW / 2); apply(); } }); n.addEventListener("blur", () => hl(null)); });
  vp.addEventListener("wheel", e => { e.preventDefault(); const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || H <= vh) px -= d; else { px -= d; } apply(); }, { passive: false });
  bar.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { const target = px - (+b.dataset.d) * COLW * 2; animatePan(target); });
  function animatePan(target){ const start = px, t0 = performance.now(); const step = now => { const k = Math.min(1, (now - t0) / 350); const e = 1 - Math.pow(1 - k, 3); px = start + (target - start) * e; apply(); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }
  let tdrag = null;
  thumb.addEventListener("pointerdown", e => { e.stopPropagation(); tdrag = { x: e.clientX, left: thumb.offsetLeft }; thumb.setPointerCapture(e.pointerId); });
  thumb.addEventListener("pointermove", e => { if (!tdrag) return; const maxT = track.clientWidth - thumb.offsetWidth; const l = Math.max(0, Math.min(maxT, tdrag.left + e.clientX - tdrag.x)); px = -(l / (maxT || 1)) * (W - vw); apply(); });
  thumb.addEventListener("pointerup", () => tdrag = null);
  track.addEventListener("pointerdown", e => { if (e.target !== track) return; const r = track.getBoundingClientRect(); const t = (e.clientX - r.left) / r.width; animatePan(-(t * W - vw / 2)); });
  return { els, focus(id){ const p = pos(id); px = -(p.x - vw / 2 + NW / 2); py = -(p.y - vh / 2 + NH / 2); apply(); els[id].classList.add("sel"); } };
}

function renderFieldTree(main, f){
  const F = DB.fields[f], TR = TREES[f], FN = fieldNodes(f);
  const head = h("div", { class: "tree-head" });
  const done = doneIn(f);
  const hrs = FN.reduce((s, n) => s + (T[n.id]?.hours || 0), 0);
  head.innerHTML = `<button type="button" class="btn-s navtoggle" id="navtoggle2">☰ Fields</button><div><h2>${esc(F.name)}</h2><div class="sub">${FN.length ? `${FN.length} topic${FN.length === 1 ? "" : "s"}${TR.planned && TR.planned.length ? ` written, ${TR.planned.length} planned` : ""} · about ${hrs} study hours · ${done} mastered` : `${(TR.planned || []).length} planned topics · the tree is mapped and the pages are being written`}</div></div>
   <div class="legend-chips"><span><i class="lg-m"></i>Mastered</span><span><i class="lg-a"></i>Ready</span><span><i class="lg-l"></i>Locked</span>${TR.planned && TR.planned.length ? '<span><i class="lg-p"></i>Planned</span>' : ""}<span><i class="lg-s"></i>Last opened</span></div>`;
  main.appendChild(head);
  $("#navtoggle2", head).onclick = () => main.parentElement.classList.toggle("navopen");
  const inTree = new Set(FN.map(n => n.id));
  // Planned nodes (TR.planned) show the rest of a partly written tree, dashed and not openable.
  const PL = TR.planned || [], PLAN = Object.fromEntries(PL.map(n => [n.id, n]));
  const nodes = FN.map(n => ({ ...n, pre: n.pre.filter(p => inTree.has(p)), ext: n.pre.filter(p => !inTree.has(p)), label: T[n.id]?.title || n.id, right: T[n.id] ? T[n.id].hours + " h" : "" }))
    .concat(PL.map(n => ({ ...n, pre: n.pre.filter(p => inTree.has(p) || PLAN[p]), ext: n.pre.filter(p => !inTree.has(p) && !PLAN[p]), right: "Planned" })));
  const tree = buildTree(main, {
    nodes, eras: TR.eras, key: "tree-" + f, title: F.name, stateFn: id => PLAN[id] ? "planned" : stateOf(id),
    onOpen: id => { if (!PLAN[id]) go({ view: "math", field: f, topic: id }); },
    infoFn: (id, anc) => {
      if (PLAN[id]) { const lb = p => esc(PLAN[p] ? PLAN[p].label : (T[p]?.title || p));
        return `<div><span class="pill l">Planned</span></div><h4>${esc(PLAN[id].label)}</h4><p>This topic's page is not written yet. It is shown so you can see the whole path.</p><div class="req">${PLAN[id].pre.length ? "Requires: " + PLAN[id].pre.map(lb).join(", ") : ""}</div>`; }
      const t = T[id], st = stateOf(id), nd = NODE[id];
      const pill = st === "mastered" ? `<span class="pill m">Mastered</span>` : st === "avail" ? `<span class="pill a">Ready to study</span>` : `<span class="pill l">Locked</span>`;
      const nm = p => esc(T[p]?.title || p) + (NODE[p].field !== f ? ` <span style="color:var(--faint)">(${esc(DB.fields[NODE[p].field].name)})</span>` : "");
      const need = nd.pre.filter(p => !mastered.has(p)).map(nm);
      return `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${pill}<span class="pill l">${esc(t?.grade || "")}</span></div><h4>${esc(t?.title || id)}</h4><p>${esc(t?.short || "")}</p>
        <div class="req">${nd.pre.length ? "Requires: " + nd.pre.map(nm).join(", ") : "Starting point, no prerequisites"}${need.length && st !== "mastered" ? "<br>Still to master: " + need.join(", ") : ""}<br>Path length: ${anc.size} topic${anc.size === 1 ? "" : "s"} before this one in this tree</div>`;
    }
  });
  const last = store.get("lastTopic." + f, f === "arithmetic" ? store.get("lastTopic", null) : null);
  if (last && inTree.has(last) && !S.pan["tree-" + f]) requestAnimationFrame(() => tree.focus(last));
  else if (last && inTree.has(last)) tree.els[last].classList.add("sel");
}

function renderFieldMap(main){
  const head = h("div", { class: "tree-head" });
  const sm = SM[S.subject];
  head.innerHTML = `<button type="button" class="btn-s navtoggle" id="navtoggle2">☰ Fields</button><div><h2>${esc(sm.name)} field map</h2><div class="sub">${esc(sm.mapSub)}</div></div>
    <div class="legend-chips"><span><i class="lg-a"></i>Charted</span><span><i class="lg-l"></i>Planned</span></div>`;
  main.appendChild(head);
  $("#navtoggle2", head).onclick = () => main.parentElement.classList.toggle("navopen");
  const nodes = subjFields(S.subject).map(id => [id, DB.fields[id]]).map(([id, f]) => ({ id, col: f.col, row: f.row, pre: f.pre, icon: f.icon, label: f.name, right: "", chips: [f.level.split("·")[0].trim()] }));
  buildTree(main, {
    nodes, eras: sm.eras, key: "map-" + S.subject, title: sm.name + " field map",
    stateFn: id => charted(id) ? "avail" : "planned",
    onOpen: id => go({ view: "math", field: id, topic: null }),
    infoFn: id => { const f = DB.fields[id]; return `<div>${charted(id) ? '<span class="pill a">Charted</span>' : '<span class="pill l">Planned</span>'}</div><h4>${esc(f.name)}</h4><p>${esc(f.blurb)}</p><div class="req">${esc(f.level)}${f.pre.length ? "<br>Requires: " + f.pre.map(p => esc(DB.fields[p].name)).join(", ") : S.subject !== "mathematics" ? `<br>Starting field, no ${esc(sm.name)} prerequisites` : ""}${f.math && f.math.length ? "<br>Mathematics: " + f.math.map(p => esc(DB.fields[p].name)).join(", ") : ""}${f.physics && f.physics.length ? "<br>Physics: " + f.physics.map(p => esc(DB.fields[p].name)).join(", ") : ""}</div>`; }
  });
}

function renderDossier(main){
  const f = DB.fields[S.field];
  const id = S.field;
  const next = Object.entries(DB.fields).filter(([k, v]) => v.pre.includes(id)).map(([k]) => k);
  const d = h("div", { class: "dossier" });
  d.innerHTML = `<div class="dossier-in">
    <div><button type="button" class="btn-s navtoggle" id="navtoggle2" style="margin-bottom:12px">☰ Fields</button><p class="eyebrow">${esc(f.level)}</p><h1>${esc(f.name)}</h1><p class="lede">${esc(f.blurb)}</p>
      <div class="meta"><span class="pill l">Skill tree not yet charted</span>${subjTrees(subjOf(id)).length ? `<span class="pill a">${subjTrees(subjOf(id)).map(k => esc(DB.fields[k].name)).join(", ")} charted</span>` : ""}</div></div>
    <div class="dgrid">
      <div class="win"><div class="win-h"><span class="dot"></span>Core topics</div><div class="in"><ol>${f.topics.map(t => `<li>${esc(t)}</li>`).join("")}</ol></div></div>
      <div style="display:grid;gap:16px;align-content:start">
        <div class="win"><div class="win-h"><span class="dot"></span>Study first</div><div class="in"><div class="linkrow">${f.pre.length ? f.pre.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("") : '<span class="empty">None</span>'}</div></div></div>
        ${f.math && f.math.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Mathematics needed</div><div class="in"><div class="linkrow">${f.math.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("")}</div></div></div>` : ""}
        ${f.physics && f.physics.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Physics needed</div><div class="in"><div class="linkrow">${f.physics.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("")}</div></div></div>` : ""}
        <div class="win"><div class="win-h"><span class="dot"></span>Leads to</div><div class="in"><div class="linkrow">${next.length ? next.map(p => `<button type="button" class="lnk ${charted(p) ? "charted" : ""}" data-f="${p}">${esc(DB.fields[p].name)}</button>`).join("") : '<span class="empty">Capstone field in this map</span>'}</div></div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>Status</div><div class="in"><p style="margin:0;color:var(--muted);font-size:14px">The topic tree for ${esc(f.name)} will be built with the same dossier format as the charted fields. The list on the left is the planned node set.</p></div></div>
      </div>
    </div></div>`;
  main.appendChild(d);
  d.querySelectorAll("[data-f]").forEach(b => b.onclick = () => go({ view: "math", field: b.dataset.f, topic: null }));
  $("#navtoggle2", d).onclick = () => main.parentElement.classList.toggle("navopen");
}

/* ---------- story panels (English topics) ---------- */
// A story: { title, book, author, year, kind, where, scene, focus: [tags], tokens, notes, note, tags? }.
// Focus words are coloured by their tag: parts of speech (DB.posTags) unless the story defines its own
// `tags` (subject/predicate, clause types, comma rules …). The art comes from DB.scenes.
function storyPassage(st){
  const P = st.tags || DB.posTags, focus = new Set(st.focus || []);
  let html = "<p>";
  DB.parseStory(st.tokens).forEach(x => {
    if (x.br) { html += "</p><p>"; return; }
    let w = esc(x.w); if (x.it) w = `<i>${w}</i>`;
    // a tagged word links only to a sense with the same part of speech (verb "work" ≠ noun "work")
    let gk = /[A-Za-z]/.test(x.w) ? gLookup(x.w) : null; const gp = !st.tags && x.tag && DB.posTags[x.tag] ? x.tag : null;
    if (gk && gp && !GWORDS[gk].some(e => e.pos === gp)) gk = null;
    const ga = gk ? ` data-gw="${esc(gk)}"${gp ? ` data-gp="${gp}"` : ""} tabindex="0" role="button" aria-label="${esc(x.w)}: open glossary card"` : "";
    if (x.tag && focus.has(x.tag)) { const note = (st.notes || {})[x.key]; w = `<span class="sw ${P[x.tag].c}${gk ? " gw" : ""}" title="${esc(P[x.tag].name + (note ? ": " + note : ""))}"${ga}>${w}</span>`; }
    else if (gk) w = `<span class="gw"${ga}>${w}</span>`;
    html += (x.glue ? "" : " ") + w;
  });
  return html + "</p>";
}
function storyPanel(st){
  const P = st.tags || DB.posTags, art = (DB.scenes || {})[st.scene] || "";
  const keys = [...new Set((st.focus || []).map(f => P[f].c + "|" + P[f].name))].map(k => { const [c, n] = k.split("|"); return `<span class="sk ${c}">${esc(n)}</span>`; }).join("");
  return `<article class="story">
    <header class="story-h"><h3>${esc(st.title)}</h3></header>
    <div class="story-art">${art}</div>
    <div class="story-txt">${storyPassage(st)}
      <div class="story-cite">${esc(st.author)} · <i>${esc(st.book)}</i> (${st.year}) · ${esc(st.where)}</div>
      <div class="story-note"><div class="story-keys">${keys}</div>${st.note}</div>
    </div>
  </article>`;
}

/* ---------- topic page ---------- */
// Placeholder used only if a node has no content yet (keeps the app usable while a tree is being written).
function stubTopic(id){
  return { title: id, short: "", grade: "", hours: 0, voice: "plain", eyebrow: "Content coming soon", hero: esc(id), lede: "This topic's dossier has not been written yet.",
    plain: "", formal: "", legend: [], steps: { title: "Steps", items: [] }, example: { prompt: "", lines: [], answer: "" }, why: "", careers: [], life: [], fields: [],
    prereqWhy: {}, unlocksWhy: {}, beyond: [], mistakes: [], practice: [], origin: "" };
}
function renderTopic(main){
  const id = S.topic, n = NODE[id], f = n.field, FNAME = DB.fields[f].name;
  const t = T[id] || stubTopic(id);
  store.set("lastTopic." + f, id);
  const st = stateOf(id);
  const ORDER = ORDERS[f], idx = ORDER.indexOf(id), prev = ORDER[idx - 1], next = ORDER[idx + 1];
  const pg = h("div", { class: "topic" });
  const voiceTxt = { young: "Written for young learners, with the formal version alongside", mixed: "Plain explanation with the formal version alongside", plain: "Stated plainly, adult level" }[t.voice] || "";
  const link = pid => { const s = stateOf(pid), tp = T[pid] || { title: pid, short: "" }, other = NODE[pid].field !== f ? ` <span style="font-weight:400;color:var(--faint)">· ${esc(DB.fields[NODE[pid].field].name)}</span>` : ""; return `<button type="button" class="plink" data-t="${pid}" data-st="${s}"><span class="o"${[...NODE[pid].icon].length > 3 ? ' style="font-size:10px;letter-spacing:-.02em"' : ""}>${NODE[pid].icon}</span><span><b>${esc(tp.title)}${other}</b><span>${t.prereqWhy?.[pid] || t.unlocksWhy?.[pid] || esc(tp.short)}</span></span></button>`; };
  const mathLink = m => { const r = mathRef(m); if (!r) return "";
    const why = (t.mathWhy && t.mathWhy[m]) || "";
    if (r.id) { const tp = T[r.id] || { title: r.id, short: "" }; return `<button type="button" class="plink" data-t="${r.id}" data-st="${stateOf(r.id)}"><span class="o">${NODE[r.id].icon}</span><span><b>${esc(tp.title)} <span style="font-weight:400;color:var(--faint)">· ${esc(DB.fields[NODE[r.id].field].name)}</span></b><span>${why || esc(tp.short)}</span></span></button>`; }
    const F2 = DB.fields[r.field]; return `<button type="button" class="plink" data-f="${r.field}" data-st="planned"><span class="o">${F2.icon}</span><span><b>${esc(r.name)} <span style="font-weight:400;color:var(--faint)">· ${esc(F2.name)}${charted(r.field) ? "" : " (planned)"}</span></b><span>${why}</span></span></button>`; };
  const mathList = (n.math || []).map(mathLink).filter(Boolean), physList = (n.physics || []).map(mathLink).filter(Boolean);
  pg.innerHTML = `
  <div class="topic-bar">
    <button type="button" class="btn-s navtoggle" id="navtoggle2">☰</button>
    <button type="button" class="btn-s" id="back">◀ ${esc(FNAME)} tree</button>
    <span class="sp"></span>
    ${st === "mastered" ? '<span class="pill m">Mastered</span>' : st === "avail" ? '<span class="pill a">Ready to study</span>' : '<span class="pill l">Prerequisites open</span>'}
    <button type="button" class="btn ${st === "mastered" ? "ghost" : "good"}" id="mast">${st === "mastered" ? "Unmark mastered" : "Mark as mastered"}</button>
  </div>
  <div class="wrap">
    <header class="intro">
      <div><p class="eyebrow">${t.eyebrow}</p><h1>${t.hero}</h1>
        <div class="meta"><span class="pill l">${esc(t.grade)}</span><span class="pill l">About ${t.hours} h to master</span><span class="pill l">${esc(voiceTxt)}</span></div></div>
      <p class="lede">${t.lede}</p>
    </header>
    <section class="lab" aria-label="Interactive model">
      <div class="stage" id="stage"></div>
      <aside class="readout" id="readout" aria-live="off"></aside>
      <div class="controls" id="controls"></div>
    </section>
    <section class="notes">
      <div><h2>Reading the model</h2><div class="legend">${t.legend.map(k => `<div class="key" style="--c:var(--${{c1:"amber",c2:"cyan",c3:"pink",c4:"violet",c5:"green"}[k.c]})"><h3><span class="m">${k.sym}</span>${esc(k.name)}</h3><p>${k.desc}</p></div>`).join("")}</div></div>
      <div class="two">
        <div><h2>In plain words</h2><span class="voice">${t.voice === "young" ? "For a ten-year-old" : "Plain language"}</span>${t.plain}</div>
        <div><h2>Formal statement</h2><span class="voice f">College level</span>${t.formal}</div>
      </div>
      ${(t.stories || []).length ? `<div><h2>In the stories</h2><p>Passages from well-known books, with the words this topic is about picked out in colour. Every passage is quoted exactly from a public-domain edition.</p><div class="stories">${t.stories.map(storyPanel).join("")}</div></div>` : ""}
      <div><h2>${esc(t.steps.title)}</h2><ol class="steps">${t.steps.items.map(s => `<li><div>${s}</div></li>`).join("")}</ol></div>
      <div><h2>Worked example</h2><div class="ex"><div class="prompt"><p class="eyebrow">Problem</p>${t.example.prompt}</div>
        <div class="tbl"><table>${t.example.lines.map(l => `<tr><td>${l.math}</td><td>${esc(l.note)}</td></tr>`).join("")}</table></div>
        <div class="ans"><b>Answer.</b> ${t.example.answer}</div></div></div>
      <div><h2>Why it matters</h2>${t.why}
        <h3 style="margin-top:18px">Careers that use it</h3><div class="careers">${t.careers.map(c => `<div class="career"><h4>${esc(c.role)}</h4><p>${esc(c.use)}</p></div>`).join("")}</div>
        <div class="two" style="margin-top:22px"><div><h3>Everyday tasks</h3><ul class="lifelist">${t.life.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div><h3>Subjects that rely on it</h3><div class="fieldrow">${t.fields.map(f => `<div><b>${esc(f.name)}.</b> ${esc(f.use)}</div>`).join("")}</div></div></div>
      </div>
      <div><h2>Learning path</h2><div class="path">
        ${mathList.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Mathematics you need</div><div class="in">${mathList.join("")}</div></div>` : ""}
        ${physList.length ? `<div class="win"><div class="win-h"><span class="dot"></span>Physics you need</div><div class="in">${physList.join("")}</div></div>` : ""}
        <div class="win"><div class="win-h"><span class="dot"></span>Master these first</div><div class="in">${n.pre.length ? n.pre.map(link).join("") : '<span class="empty">This is the starting point of the tree. Nothing is required first.</span>'}</div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>This unlocks</div><div class="in">${n.post.length ? n.post.map(link).join("") : '<span class="empty">No later charted topic depends on this directly. It feeds the fields below.</span>'}</div></div>
        <div class="win"><div class="win-h"><span class="dot"></span>Vital in later fields</div><div class="in">${t.beyond.map(b => `<div class="plink" style="cursor:default"><span class="o">→</span><span><b>${esc(b.field)}</b><span>${esc(b.why)}</span></span></div>`).join("")}</div></div>
      </div></div>
      <div><h2>Common mistakes</h2><div class="mist">${t.mistakes.map(m => `<div><div class="w">${m.wrong}</div><div class="f">${m.fix}</div></div>`).join("")}</div></div>
      <div><h2>Practice</h2><div class="prac">${t.practice.map((p, i) => `<div class="pq"><div class="q"><span class="n">${String(i+1).padStart(2,"0")}</span>${p.q}</div><button type="button" class="btn-s" data-ans="${i}">Show answer</button><div class="a" hidden>${p.a}</div></div>`).join("")}</div></div>
      ${t.origin ? `<div><h2>Origin</h2><p class="origin">${t.origin}</p></div>` : ""}
      <div class="pager">${prev ? `<button type="button" class="btn ghost" data-t="${prev}">◀ ${esc((T[prev] || { title: prev }).title)}</button>` : "<span></span>"}${next ? `<button type="button" class="btn ghost" data-t="${next}">${esc((T[next] || { title: next }).title)} ▶</button>` : ""}</div>
    </section>
  </div>`;
  main.appendChild(pg);
  pg.scrollTop = 0;
  $("#back", pg).onclick = () => go({ view: "math", field: f, topic: null });
  $("#navtoggle2", pg).onclick = () => main.parentElement.classList.toggle("navopen");
  $("#mast", pg).onclick = () => { if (mastered.has(id)) mastered.delete(id); else mastered.add(id); saveMastered(); const y = pg.scrollTop; render(); const np = $(".topic"); if (np) np.scrollTop = y; };
  pg.querySelectorAll("[data-t]").forEach(b => b.onclick = () => go({ view: "math", field: fieldOf(b.dataset.t), topic: b.dataset.t }));
  pg.querySelectorAll(".plink[data-f]").forEach(b => b.onclick = () => go({ view: "math", field: b.dataset.f, topic: null }));
  if ((t.stories || []).length) glossaryPopover(pg, subjOf(f));
  pg.querySelectorAll("[data-ans]").forEach(b => b.onclick = () => { const a = b.nextElementSibling; a.hidden = !a.hidden; b.textContent = a.hidden ? "Show answer" : "Hide answer"; });
  // lab
  const lab = window.LABS && window.LABS[id];
  const stage = $("#stage", pg), ro = $("#readout", pg), ctl = $("#controls", pg);
  if (lab) { try { const d = lab(LabKit.make(stage, ro, ctl)); if (d) cleanup.push(d); } catch(err) { console.error(err); stage.innerHTML = `<div class="fallback">The model for this topic could not start.</div>`; } }
  else stage.innerHTML = `<div class="fallback">Model coming soon.</div>`;
  cleanup.push(() => LabKit.stopAll());
}

/* ---------- glossary (shared by every subject; spec web/GLOSSARY-SPEC.md) ---------- */
// One entry = one subject's sense block for one headword. Blocks are grouped by headword; each block is marked by its
// subject: stripe/chip colour = subject group (DB.glossaryGroupColour), glyph = subject, plus subject · field text.
const GL = DB.glossary || [];
const GSUB = Object.fromEntries((DB.subjects || []).map(s => [s.id, s]));
const SUBORDER = (DB.subjects || []).map(s => s.id);
const gColour = sub => (DB.glossaryGroupColour || {})[(GSUB[sub] && GSUB[sub].group) || "stem"] || "var(--g-stem)";
const gGlyph = sub => (GSUB[sub] && GSUB[sub].glyph) || "·";
const gName = sub => (GSUB[sub] && GSUB[sub].name) || sub;
const GWORDS = {};
GL.forEach(e => (GWORDS[e.w.toLowerCase()] = GWORDS[e.w.toLowerCase()] || []).push(e));
const GFORM = {};
Object.keys(GWORDS).forEach(k => { GFORM[k] = k; });
Object.keys(GWORDS).forEach(k => GWORDS[k].forEach(e => (e.forms || []).forEach(f => { const x = f.toLowerCase(); if (!GFORM[x]) GFORM[x] = k; })));
const gLookup = w => { const x = String(w).toLowerCase().replace(/[’']s$/, ""); return GFORM[x] || null; };
const gSubjects = () => SUBORDER.filter(s => GL.some(e => e.subject === s));
const gStrip = s => String(s).replace(/<[^>]+>/g, "");
// blocks of a headword, the preferred subject first, then subject order
const gBlocks = (k, pref) => (GWORDS[k] || []).slice().sort((a, b) => (b.subject === pref) - (a.subject === pref) || SUBORDER.indexOf(a.subject) - SUBORDER.indexOf(b.subject));
const plannedNode = id => { for (const [f, tr] of Object.entries(TREES)) { const n = (tr.planned || []).find(x => x.id === id); if (n) return { ...n, field: f }; } return null; };
const G = { q: "", sub: "all", field: null, letter: null, word: null, ret: null, mine: store.get("glmine", false) };
function gTok(){ return "glossary" + (G.sub !== "all" ? "-" + G.sub : "") + (G.word ? "~" + encodeURIComponent(G.word) : ""); }
function openGlossary(o = {}){
  if (o.from) { G.ret = o.from; G.q = ""; G.field = null; G.letter = null; }
  if ("sub" in o) { G.sub = o.sub || "all"; if (G.field && (!DB.fields[G.field] || subjOf(G.field) !== G.sub)) G.field = null; }
  if ("word" in o) G.word = o.word;
  go({ view: "glossary", topic: null });
}
function gScore(k, blocks, q){
  if (!q) return 1;
  if (k === q) return 100; if (k.startsWith(q)) return 80; if (k.includes(q)) return 60;
  let s = 0; const qm = q.replace(/^-|-$/g, "");
  blocks.forEach(e => {
    if ((e.forms || []).some(f => f.toLowerCase().startsWith(q))) s = Math.max(s, 50);
    if (qm && (e.parts || []).some(p => p[0].toLowerCase() === qm)) s = Math.max(s, 45);
    if (qm.length > 2 && (e.parts || []).some(p => p[0].toLowerCase().startsWith(qm))) s = Math.max(s, 35);
    if (q.length > 2 && e.senses.some(x => gStrip(x).toLowerCase().includes(q))) s = Math.max(s, 10);
  });
  return s;
}
function gVisible(){
  const q = G.q.trim().toLowerCase();
  return Object.keys(GWORDS).map(k => {
    const blocks = GWORDS[k].filter(e => (G.sub === "all" || e.subject === G.sub) && (!G.field || e.field === G.field) && (!G.mine || (e.node && mastered.has(e.node))));
    return { k, blocks, score: blocks.length ? gScore(k, blocks, q) : 0 };
  }).filter(x => x.score > 0 && (!G.letter || q || x.k[0] === G.letter))
    .sort((a, b) => b.score - a.score || a.k.localeCompare(b.k));
}
// part of speech: a neutral pill with a small square in the grammar colour (subject colour stays on the stripe only)
function gPos(e){ const p = DB.posTags[e.pos]; return p ? `<span class="gl-pos"><i class="${p.c}"></i>${esc(p.name)}</span>` : ""; }
function gNodeLink(e){
  if (e.node && NODE[e.node]) return `<button type="button" class="lnk charted" data-t="${e.node}">Taught in · ${esc(T[e.node] ? T[e.node].title : e.node)}</button>`;
  const pn = e.node && plannedNode(e.node);
  if (pn) return `<button type="button" class="lnk" data-f="${pn.field}">Planned topic · ${esc(pn.label)}</button>`;
  if (e.field && DB.fields[e.field]) return `<button type="button" class="lnk${charted(e.field) ? " charted" : ""}" data-f="${e.field}">${esc(DB.fields[e.field].name)}${charted(e.field) ? "" : " (planned)"}</button>`;
  return "";
}
function gQuote(q){
  const t = T[q.topic]; const st = t && (t.stories || []).find(s => DB.storyText(s.tokens).includes(q.text));
  if (!st) return "";
  return `<blockquote class="gl-q"><p>“${esc(q.text)}”</p><footer>${esc(st.author)} · <i>${esc(st.book)}</i> (${st.year}) <button type="button" class="gl-a" data-t="${q.topic}">See the passage</button></footer></blockquote>`;
}
function gSense(e, headIpa){
  const pairs = (lb, xs) => xs && xs.length ? `<div class="gl-rel"><span class="lb">${lb}</span>${xs.map(p => Array.isArray(p) ? `<span><b>${gw(p[0])}</b> ${p[1]}</span>` : `<span><b>${gw(p)}</b></span>`).join("")}</div>` : "";
  const gw = w => GWORDS[w.toLowerCase()] ? `<button type="button" class="gl-a" data-gword="${esc(w.toLowerCase())}">${esc(w)}</button>` : esc(w);
  const f = e.field && DB.fields[e.field];
  return `<article class="gl-sense" style="--gc:${gColour(e.subject)}">
    <div class="gl-sh"><span class="gl-glyph" aria-hidden="true">${gGlyph(e.subject)}</span><span class="gl-subj">${esc(gName(e.subject))}</span>${f ? `<span class="gl-fld">${esc(f.name)}</span>` : ""}<span class="gl-tags">${gPos(e)}${e.register ? `<span class="gl-tag">${esc(DB.glossaryRegister[e.register])}</span>` : ""}${e.conno ? `<span class="gl-tag">${esc(e.conno)} connotation</span>` : ""}</span></div>
    ${e.ipa !== headIpa ? `<div class="gl-say"><span class="ipa">${esc(e.ipa)}</span>${e.syl ? `<span class="syl">${esc(e.syl)}</span>` : ""}</div>` : ""}
    <ol class="gl-defs">${e.senses.map(s => `<li>${s}</li>`).join("")}</ol>
    ${e.ex ? `<p class="gl-ex"><span class="lb">Example</span>${e.ex}</p>` : ""}
    ${e.quote ? gQuote(e.quote) : ""}
    ${e.parts ? `<div class="gl-parts" aria-label="Word parts">${e.parts.map(p => `<span class="mp"><b>${esc(p[0])}</b><small>${p[1]}</small></span>`).join('<span class="pl">+</span>')}</div>` : ""}
    ${e.origin ? `<p class="gl-orig"><span class="lb">Origin</span>${e.origin}</p>` : ""}
    ${pairs("Synonyms", e.syn)}${pairs("Antonyms", e.ant)}${pairs("Often confused with", e.confused)}
    ${gNodeLink(e) ? `<div class="gl-links">${gNodeLink(e)}</div>` : ""}
  </article>`;
}
function gEntry(k){
  const blocks = gBlocks(k, G.sub !== "all" ? G.sub : (G.ret && G.ret.subject));
  if (!blocks.length) return `<div class="gl-empty">Pick a word from the list.</div>`;
  const head = blocks[0], subs = [...new Set(blocks.map(e => e.subject))];
  const see = [...new Set(blocks.flatMap(e => e.see || []))].filter(w => w.toLowerCase() !== k);
  const hidden = G.sub !== "all" ? GWORDS[k].filter(e => e.subject !== G.sub).length : 0;
  const shown = G.sub !== "all" ? blocks.filter(e => e.subject === G.sub) : blocks;
  return `<button type="button" class="btn-s gl-back" id="glback">◀ All words</button>
    <header class="gl-head"><h2>${esc(head.w)}</h2><div class="gl-say"><span class="ipa">${esc(head.ipa)}</span>${head.syl ? `<span class="syl">${esc(head.syl)}</span>` : ""}</div>
      <div class="gl-in">${subs.map(s => `<span class="gl-chip sm" style="--gc:${gColour(s)}"><span class="g">${gGlyph(s)}</span>${esc(gName(s))}</span>`).join("")}</div></header>
    ${shown.map(e => gSense(e, head.ipa)).join("")}
    ${hidden ? `<button type="button" class="btn-s gl-more" id="glall">Show ${hidden} more sense${hidden === 1 ? "" : "s"} from other subjects</button>` : ""}
    ${see.length ? `<div class="gl-rel gl-see"><span class="lb">See also</span>${see.map(w => `<button type="button" class="gl-a" data-gword="${esc(w.toLowerCase())}">${esc(w)}</button>`).join("")}</div>` : ""}`;
}
function renderGlossary(){
  const subs = gSubjects();
  if (G.sub !== "all" && !subs.includes(G.sub)) G.sub = "all";
  const s = h("div", { class: "screen gl-screen" });
  const groups = (DB.subjectGroups || []).map(g => `<span><i style="background:${(DB.glossaryGroupColour || {})[g.id]}"></i>${esc(g.name)}</span>`).join("");
  s.innerHTML = `<div class="screen-in gl-wrap">
    <div class="hello gl-hello"><div class="gl-top">${G.ret ? `<button type="button" class="btn-s" id="glret">◀ ${esc(G.ret.label)}</button>` : ""}<button type="button" class="btn-s gl-menu" id="glmenu">◀ Menu</button></div>
      <p class="eyebrow">Glossary · every subject</p><h1>Glossary</h1>
      <p>The words each subject uses, with pronunciation, word parts, origin and examples. One word can mean different things in different subjects: each sense is marked with its subject’s glyph, and its stripe colour shows the subject group.</p>
      <div class="gl-key" aria-label="Stripe colours">${groups}</div></div>
    <div class="gl-tools win"><div class="in">
      <label class="search"><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="6" cy="6" r="4.5" fill="none" stroke="#8B97AE" stroke-width="1.4"/><path d="M9.5 9.5 13 13" stroke="#8B97AE" stroke-width="1.4"/></svg>
        <input id="glq" type="text" placeholder="Search words, word parts (dict, logy) and definitions" aria-label="Search the glossary" value="${esc(G.q)}"></label>
      <div class="gl-chips" id="glsub" role="group" aria-label="Subject"></div>
      <div class="gl-chips gl-fields" id="glfield" role="group" aria-label="Field"></div>
      <div class="gl-row"><div class="gl-az" id="glaz" role="group" aria-label="First letter"></div>
        <label class="gl-mine"><input type="checkbox" id="glmine"${G.mine ? " checked" : ""}> Mastered topics only</label></div>
    </div></div>
    <div class="gl-body" id="glbody"><nav class="gl-list win" id="gllist" aria-label="Words"></nav><section class="gl-entry win" id="glentry" aria-live="polite"></section></div>
  </div>`;
  viewEl.appendChild(s);
  const q = $("#glq", s), list = $("#gllist", s), entry = $("#glentry", s), body = $("#glbody", s);
  const subChips = $("#glsub", s), fldChips = $("#glfield", s), az = $("#glaz", s);
  const count = sub => Object.keys(GWORDS).filter(k => GWORDS[k].some(e => sub === "all" || e.subject === sub)).length;
  subChips.innerHTML = [["all", "All subjects", "◎", "var(--line-2)"], ...subs.map(x => [x, gName(x), gGlyph(x), gColour(x)])]
    .map(([id, nm, gl, c]) => `<button type="button" class="gl-chip" data-sub="${id}" aria-pressed="${G.sub === id}" style="--gc:${c}"><span class="g">${gl}</span>${esc(nm)}<span class="n">${count(id)}</span></button>`).join("");
  if (G.sub !== "all") {
    const flds = [...new Set(GL.filter(e => e.subject === G.sub && e.field).map(e => e.field))];
    fldChips.innerHTML = flds.length > 1 ? `<button type="button" class="gl-chip sm" data-fld="" aria-pressed="${!G.field}" style="--gc:${gColour(G.sub)}">All fields</button>` + flds.map(f => `<button type="button" class="gl-chip sm" data-fld="${f}" aria-pressed="${G.field === f}" style="--gc:${gColour(G.sub)}">${esc(DB.fields[f].name)}</button>`).join("") : "";
  }
  fldChips.hidden = !fldChips.innerHTML;
  function drawList(){
    const vis = gVisible(), qq = G.q.trim();
    const letters = new Set(Object.keys(GWORDS).filter(k => GWORDS[k].some(e => G.sub === "all" || e.subject === G.sub)).map(k => k[0]));
    az.innerHTML = `<button type="button" class="gl-l" data-l="" aria-pressed="${!G.letter}">All</button>` + "abcdefghijklmnopqrstuvwxyz".split("").map(l => `<button type="button" class="gl-l" data-l="${l}" aria-pressed="${G.letter === l}"${letters.has(l) ? "" : " disabled"}>${l.toUpperCase()}</button>`).join("");
    list.innerHTML = `<div class="win-h"><span class="dot"></span>${vis.length} word${vis.length === 1 ? "" : "s"}${qq ? ` matching “${esc(qq)}”` : ""}</div>` + (vis.length ? vis.map(({ k, blocks }) =>
      `<button type="button" class="gl-item${G.word === k ? " sel" : ""}" data-gword="${esc(k)}"><span class="w">${esc(GWORDS[k][0].w)}</span><span class="gs">${[...new Set(blocks.map(e => e.subject))].map(x => `<i style="--gc:${gColour(x)}" title="${esc(gName(x))}">${gGlyph(x)}</i>`).join("")}</span></button>`).join("")
      : `<div class="gl-empty">No words match. Try fewer letters, another subject, or turn off “Mastered topics only”.</div>`);
    if (vis.length && window.innerWidth > 760 && !vis.some(x => x.k === G.word)) { G.word = vis[0].k; drawEntry(); }
  }
  function drawEntry(){
    body.classList.toggle("has-sel", !!G.word);
    entry.innerHTML = G.word && GWORDS[G.word] ? gEntry(G.word) : `<div class="gl-empty">Pick a word from the list.</div>`;
    list.querySelectorAll(".gl-item").forEach(b => b.classList.toggle("sel", b.dataset.gword === G.word));
    const back = $("#glback", entry); if (back) back.onclick = () => { G.word = null; body.classList.remove("has-sel"); entry.innerHTML = ""; try { history.replaceState(history.state, "", "#" + gTok()); } catch(e){} };
    const all = $("#glall", entry); if (all) all.onclick = () => { G.sub = "all"; G.field = null; openGlossary({}); };
  }
  const pick = k => { G.word = k; drawEntry(); try { history.replaceState({ view: "glossary" }, "", "#" + gTok()); } catch(e){} if (window.innerWidth <= 760) s.scrollTop = body.offsetTop - 8; else entry.scrollTop = 0; };
  s.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b || !s.contains(b)) return;
    if (b.dataset.gword != null) { pick(b.dataset.gword); return; }
    if (b.dataset.sub != null) { G.sub = b.dataset.sub; G.field = null; G.letter = null; G.word = null; openGlossary({}); return; }
    if (b.dataset.fld != null) { G.field = b.dataset.fld || null; G.word = null; openGlossary({}); return; }
    if (b.dataset.l != null) { G.letter = b.dataset.l || null; drawList(); return; }
    if (b.dataset.t) { go({ view: "math", field: fieldOf(b.dataset.t), topic: b.dataset.t }); return; }
    if (b.dataset.f) { go({ view: "math", field: b.dataset.f, topic: null }); return; }
  });
  q.addEventListener("input", () => { G.q = q.value; drawList(); });
  q.addEventListener("keydown", e => { if (e.key === "Enter") { const first = list.querySelector(".gl-item"); if (first) pick(first.dataset.gword); } });
  $("#glmine", s).onchange = e => { G.mine = e.target.checked; store.set("glmine", G.mine); drawList(); };
  $("#glmenu", s).onclick = () => go({ view: "menu", topic: null });
  const r = $("#glret", s); if (r) r.onclick = () => { const to = G.ret; G.ret = null; go(to.state); };
  drawList(); drawEntry();
  if (G.word && window.innerWidth <= 760) requestAnimationFrame(() => { s.scrollTop = body.offsetTop - 8; });
}
// Word card for story panels: a dotted word opens a short card; "Open in glossary" goes to the full entry.
function glossaryPopover(root, subject){
  let pop = null;
  const close = () => { if (pop) { pop.remove(); pop = null; } };
  const open = el => {
    close();
    const k = el.dataset.gw, gp = el.dataset.gp, all = gBlocks(k, subject);
    const blocks = gp ? all.filter(x => x.pos === gp).concat(all.filter(x => x.pos !== gp)) : all, e = blocks[0]; if (!e) return;
    const others = [...new Set(blocks.slice(1).map(x => x.subject))].filter(x => x !== e.subject);
    pop = h("div", { class: "gl-pop", role: "dialog", "aria-label": "Glossary: " + e.w, style: `--gc:${gColour(e.subject)}` },
      `<div class="gl-pop-h"><b>${esc(e.w)}</b><span class="ipa">${esc(e.ipa)}</span>${gPos(e)}</div><p>${e.senses[0]}</p>
       <div class="gl-pop-f">${others.length ? `<span class="gl-pop-o">Also in ${others.map(x => `<i style="--gc:${gColour(x)}" title="${esc(gName(x))}">${gGlyph(x)}</i>`).join("")}</span>` : ""}<button type="button" class="btn-s" data-open>Open in glossary</button></div>`);
    document.body.appendChild(pop);
    const r = el.getBoundingClientRect(), pw = Math.min(320, window.innerWidth - 24);
    pop.style.width = pw + "px";
    pop.style.left = Math.max(12, Math.min(window.innerWidth - pw - 12, r.left + r.width / 2 - pw / 2)) + "px";
    const below = r.bottom + 8, ph = pop.offsetHeight;
    pop.style.top = (below + ph > window.innerHeight - 8 && r.top - ph - 8 > 8 ? r.top - ph - 8 : below) + "px";
    $("[data-open]", pop).onclick = () => { const st = { view: "math", field: S.field, topic: S.topic }; close(); openGlossary({ from: { label: T[S.topic] ? T[S.topic].title : "Back", subject, state: st }, sub: "all", word: k }); };
  };
  root.addEventListener("click", e => { const el = e.target.closest("[data-gw]"); if (el && root.contains(el)) { e.stopPropagation(); open(el); } });
  root.addEventListener("keydown", e => { const el = e.target.closest && e.target.closest("[data-gw]"); if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(el); } });
  const outside = e => { if (pop && !pop.contains(e.target)) close(); };
  const esc2 = e => { if (e.key === "Escape") close(); };
  document.addEventListener("click", outside); document.addEventListener("keydown", esc2);
  const sc = root.closest(".topic"); if (sc) sc.addEventListener("scroll", close, { passive: true });
  window.addEventListener("resize", close);
  cleanup.push(() => { close(); document.removeEventListener("click", outside); document.removeEventListener("keydown", esc2); window.removeEventListener("resize", close); });
}

/* ---------- desktop shell (only inside the Inquire app) ---------- */
let DESK_VERSION = "";
if (window.codexDesktop) {
  const D = window.codexDesktop;
  document.documentElement.classList.add("desktop", "os-" + D.platform);
  D.version().then(v => { DESK_VERSION = v; const el = document.querySelector("#verline .num"); if (el) el.textContent = "v" + v; });
  const bar = $("#upd");
  let hideT = null;
  D.onUpdate(s => {
    clearTimeout(hideT);
    const v = s.version ? esc(s.version) : "";
    let html = "", keep = true;
    if (s.status === "downloading") html = `<span class="dot"></span>Downloading Inquire ${v}… <span class="num">${s.percent || 0}%</span>`;
    else if (s.status === "ready") html = `<span class="dot"></span>Inquire ${v} is ready.<button type="button" class="btn good" id="upd-go">Install &amp; Relaunch</button><button type="button" class="btn-s" id="upd-x">Later</button>`;
    else if (s.status === "installing") html = `<span class="dot"></span>Installing Inquire ${v}…`;
    else if (s.status === "installed") { html = `<span class="dot"></span>Updated to Inquire ${v}.`; keep = false; }
    else if (s.status === "blocked") html = `<span class="dot"></span>macOS blocked the update. Inquire ${v} is in your Downloads folder: drag it into Applications and replace the old copy.<button type="button" class="btn-s" id="upd-rev">Show in Finder</button><button type="button" class="btn-s" id="upd-x">Dismiss</button>`;
    else if (s.status === "error" && s.message) html = `<span class="dot err"></span>Update problem: ${esc(s.message)}<button type="button" class="btn-s" id="upd-x">Dismiss</button>`;
    bar.hidden = !html; bar.innerHTML = html;
    const go = $("#upd-go"); if (go) go.onclick = () => { go.disabled = true; D.installUpdate(); };
    const x = $("#upd-x"); if (x) x.onclick = () => { bar.hidden = true; };
    const rv = $("#upd-rev"); if (rv) rv.onclick = () => D.revealUpdate();
    if (!keep) hideT = setTimeout(() => bar.hidden = true, 6000);
  });
}

/* ---------- boot ---------- */
$("#brand").onclick = () => go({ view: "menu", topic: null });
// Inquire always opens on the main menu (a link with #topic still opens that page directly).
const initial = fromHash() || { view: "menu" };
if (initial.g) { Object.assign(G, initial.g); delete initial.g; }
Object.assign(S, initial);
if (S.view === "math" && S.field !== "map" && !DB.fields[S.field]) S.field = "arithmetic";
if (S.field !== "map" && DB.fields[S.field]) S.subject = subjOf(S.field);
if (!SM[S.subject]) S.subject = "mathematics";
if (S.topic && !NODE[S.topic]) S.topic = null;
try { history.replaceState({ view: S.view, field: S.field, topic: S.topic }, ""); } catch(e){}
render();
})();
