/* ============ Story art: Complements & Sentence Patterns (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: frankenstein-lab (Frankenstein, ch. 5). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Frankenstein: a garret workshop at one in the morning in November. Rain streaks a leaded arched
   window; a candle has burnt nearly out beside flasks and instruments; on the long table a sheeted
   form lies still, one hand uncovered. */
S["frankenstein-lab"] = svg("fk", `
<defs><linearGradient id="fk-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14121c"/><stop offset="1" stop-color="#0a0910"/></linearGradient>
<linearGradient id="fk-night" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2a40"/><stop offset=".7" stop-color="#3b4d66"/><stop offset="1" stop-color="#4a5a70"/></linearGradient>
<radialGradient id="fk-candle" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffcf7a" stop-opacity=".55"/><stop offset=".5" stop-color="#e09a4a" stop-opacity=".16"/><stop offset="1" stop-color="#e09a4a" stop-opacity="0"/></radialGradient>
<linearGradient id="fk-sheet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8c2b0"/><stop offset="1" stop-color="#6d6a62"/></linearGradient>
<linearGradient id="fk-table" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a1e"/><stop offset="1" stop-color="#160f0a"/></linearGradient>
<clipPath id="fk-win"><path d="M300 120 V48 Q340 8 380 48 V120Z"/></clipPath></defs>
<rect width="480" height="180" fill="url(#fk-wall)"/>
<g stroke="#221e2c" stroke-width="1" opacity=".9">${Array.from({length:7},(_,r)=>`<line x1="0" y1="${14+r*20}" x2="480" y2="${14+r*20}"/>`).join("")}${Array.from({length:7},(_,r)=>Array.from({length:9},(_,c)=>`<line x1="${(c*60+(r%2)*30)%480}" y1="${14+r*20}" x2="${(c*60+(r%2)*30)%480}" y2="${34+r*20}"/>`).join("")).join("")}</g>
<g clip-path="url(#fk-win)"><rect x="296" y="0" width="90" height="124" fill="url(#fk-night)"/>
<ellipse cx="356" cy="44" rx="10" ry="10" fill="#d7dde6" opacity=".55"/><path d="M296 52 q20 -10 40 -2 q18 -10 44 0 v14 h-84z" fill="#26324a" opacity=".85"/>
<g stroke="#a9bbd0" stroke-width=".8" opacity=".55">${Array.from({length:18},(_,i)=>`<line x1="${300+i*5}" y1="${(i*23)%60+30}" x2="${298+i*5}" y2="${(i*23)%60+44}"/>`).join("")}</g></g>
<g stroke="#2e2a36" stroke-width="3" fill="none"><path d="M300 120 V48 Q340 8 380 48 V120Z"/><line x1="340" y1="20" x2="340" y2="120"/><line x1="300" y1="72" x2="380" y2="72"/></g>
<g stroke="#2e2a36" stroke-width="1" opacity=".8"><line x1="300" y1="96" x2="380" y2="96"/><line x1="320" y1="32" x2="320" y2="120"/><line x1="360" y1="32" x2="360" y2="120"/></g>
<rect x="292" y="120" width="96" height="6" fill="#2a2532"/>
<g fill="#0c0b11"><rect x="40" y="40" width="70" height="4"/><rect x="40" y="76" width="70" height="4"/></g>
<g><rect x="46" y="22" width="9" height="18" rx="2" fill="#3c5a4a" opacity=".8"/><rect x="60" y="28" width="7" height="12" rx="2" fill="#5a3a52" opacity=".8"/><path d="M76 40 l4 -14 h6 l4 14z" fill="#4a4a5c"/><rect x="95" y="26" width="10" height="14" fill="#2e2a24"/>
<rect x="46" y="58" width="22" height="18" fill="#3a2c22"/><rect x="70" y="62" width="18" height="14" fill="#2e2620"/><circle cx="98" cy="68" r="7" fill="none" stroke="#6a6a7a" stroke-width="1.5"/></g>
<ellipse cx="190" cy="118" rx="120" ry="70" fill="url(#fk-candle)"/>
<rect x="60" y="128" width="300" height="10" fill="url(#fk-table)"/><rect x="72" y="138" width="8" height="42" fill="#120c08"/><rect x="340" y="138" width="8" height="42" fill="#120c08"/>
<path d="M92 128 q4 -16 22 -18 q14 -1 18 6 q30 -4 70 -2 q50 2 80 -6 q18 -2 26 8 l6 12z" fill="url(#fk-sheet)"/>
<path d="M120 122 q40 -2 80 2 M200 124 q40 0 80 -6" stroke="#8a8578" stroke-width="1" fill="none" opacity=".7"/>
<path d="M214 128 q2 8 10 12 q6 3 10 1 q-2 -3 -8 -4 q4 -1 6 -3 q-6 0 -10 -6z" fill="#9c9a86"/>
<g><path d="M218 140 l4 0 l1 10 l-6 0z" fill="#5e5c50" opacity=".6"/></g>
<g><rect x="168" y="114" width="8" height="14" fill="#d8ccb0"/><path d="M172 104 q-4 6 0 10 q4 -4 0 -10z" fill="#ffd27a"/><ellipse cx="172" cy="110" rx="12" ry="12" fill="#ffd27a" opacity=".2"/><path d="M164 128 h16 l-2 -3 h-12z" fill="#6a5434"/><path d="M168 114 q-2 4 1 8" stroke="#bfb194" stroke-width="2" fill="none"/></g>
<g><path d="M300 128 v-12 q-6 -4 -6 -12 h20 q0 8 -6 12 v12z" fill="#5a7a8a" opacity=".5"/><path d="M322 128 l6 -20 h4 l6 20z" fill="#7a5a3a" opacity=".55"/><line x1="342" y1="128" x2="352" y2="112" stroke="#8a8a96" stroke-width="2"/></g>
<rect x="0" y="168" width="480" height="12" fill="#07060a"/>`);
})();
