/* ============ Story art: Active & Passive Voice (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: declaration (the Declaration of Independence, 1776). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* The Declaration: a candlelit writing table in a panelled room, Philadelphia, summer 1776. A large parchment
   lies across the table with a bold heading and lines of script; a quill stands in a pewter inkwell; a tall
   sash window behind shows a dusk sky and the outline of a bell tower. */
S["declaration"] = svg("dc", `
<defs><linearGradient id="dc-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d1a24"/><stop offset="1" stop-color="#2c2420"/></linearGradient>
<linearGradient id="dc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26304f"/><stop offset=".6" stop-color="#6a5470"/><stop offset="1" stop-color="#d79a6a"/></linearGradient>
<linearGradient id="dc-table" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3a24"/><stop offset="1" stop-color="#2a1a10"/></linearGradient>
<linearGradient id="dc-parch" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efdcb0"/><stop offset=".6" stop-color="#e2c690"/><stop offset="1" stop-color="#c9a66c"/></linearGradient>
<radialGradient id="dc-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd690" stop-opacity=".55"/><stop offset="1" stop-color="#ffd690" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#dc-wall)"/>
<g stroke="#3a3030" stroke-width="1.5" fill="none" opacity=".7"><rect x="12" y="14" width="70" height="80" rx="2"/><rect x="398" y="14" width="70" height="80" rx="2"/></g>
<rect x="196" y="8" width="88" height="96" fill="url(#dc-sky)"/>
<path d="M196 104 V90 Q206 88 214 92 L222 70 L226 58 L230 70 L236 92 Q260 86 284 92 V104Z" fill="#141522" opacity=".9"/>
<rect x="224" y="52" width="4" height="8" fill="#141522"/>
<g stroke="#4a3a2e" stroke-width="3" fill="none"><rect x="196" y="8" width="88" height="96"/><path d="M240 8 V104 M196 40 H284 M196 72 H284"/></g>
<circle cx="88" cy="96" r="70" fill="url(#dc-glow)"/>
<path d="M0 112 H480 V180 H0Z" fill="url(#dc-table)"/>
<path d="M0 112 H480" stroke="#7a5236" stroke-width="2"/>
<path d="M150 124 L346 118 L352 172 L144 178Z" fill="url(#dc-parch)"/>
<path d="M150 124 Q144 128 146 134 L144 178" stroke="#a88552" stroke-width="1.2" fill="none"/>
<g fill="#4a3420"><rect x="196" y="128" width="104" height="5" rx="1"/></g>
<g stroke="#6a4c30" stroke-width="1.1" opacity=".75"><path d="M168 140 H330 M166 147 H331 M165 154 H332 M164 161 H333 M163 168 H300"/></g>
<path d="M280 172 q8 -6 14 0 t14 -2" stroke="#4a3420" stroke-width="1.2" fill="none"/>
<g><ellipse cx="392" cy="140" rx="16" ry="5" fill="#1a1512"/><path d="M378 140 V126 Q392 120 406 126 V140Z" fill="#8a8e96"/><ellipse cx="392" cy="126" rx="14" ry="4" fill="#2a2d33"/></g>
<path d="M392 126 Q404 96 432 66 Q420 92 396 126Z" fill="#e8e2d4"/><path d="M394 124 Q410 96 430 70" stroke="#b9b0a0" stroke-width=".8" fill="none"/>
<g><rect x="80" y="104" width="16" height="18" fill="#efe3c8"/><ellipse cx="88" cy="122" rx="16" ry="4" fill="#6a6e76"/><path d="M88 104 V98" stroke="#2a2420"/><path d="M88 98 Q84 92 88 84 Q92 92 88 98Z" fill="#ffcf6a"/></g>
<g fill="#e7d2a8" opacity=".25"><rect x="40" y="150" width="70" height="3"/><rect x="380" y="160" width="60" height="3"/></g>
`);
})();
