/* ============ Story art: Misplaced & Dangling Modifiers (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: admiral-benbow (Stevenson, Treasure Island). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* The Admiral Benbow: a lonely stone inn on the cliffs above a cove at dusk. Smoke curls from the chimney,
   the windows glow, and the inn sign hangs from a post by the road. Below, the cove opens to a grey sea with
   a distant ship under sail; a sea-chest stands by the inn door. */
S["admiral-benbow"] = svg("ab", `
<defs><linearGradient id="ab-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2234"/><stop offset=".6" stop-color="#5a5468"/><stop offset="1" stop-color="#c78a5e"/></linearGradient>
<linearGradient id="ab-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a6672"/><stop offset="1" stop-color="#1a2230"/></linearGradient>
<linearGradient id="ab-cliff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e3a2c"/><stop offset="1" stop-color="#121812"/></linearGradient>
<radialGradient id="ab-win" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffc864" stop-opacity=".6"/><stop offset="1" stop-color="#ffc864" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#ab-sky)"/>
<g fill="#7a6e80" opacity=".6"><ellipse cx="90" cy="40" rx="60" ry="6"/><ellipse cx="380" cy="28" rx="50" ry="5"/></g>
<rect y="104" width="480" height="76" fill="url(#ab-sea)"/>
<path d="M300 116 h50 M280 126 h40 M330 134 h60 M260 146 h30" stroke="#d8c4a8" stroke-width="1" opacity=".3"/>
<g fill="#141820"><path d="M396 100 h26 l-4 5 h-18Z"/><path d="M408 100 V78 M402 98 L408 80 L414 98Z M415 98 L415 84 L422 98Z"/></g>
<path d="M0 84 Q60 78 120 86 Q170 92 200 104 Q226 118 238 140 Q246 160 240 180 H0Z" fill="url(#ab-cliff)"/>
<path d="M0 92 Q70 86 130 94" stroke="#4a5a44" stroke-width="1" fill="none" opacity=".6"/>
<path d="M150 180 Q140 150 120 130 Q100 112 60 106" stroke="#8a7a5a" stroke-width="6" fill="none" opacity=".55"/>
<g><rect x="34" y="62" width="70" height="36" fill="#5c5650"/><path d="M28 64 L69 42 L110 64Z" fill="#2a2228"/>
<rect x="88" y="40" width="9" height="16" fill="#3e3836"/>
<path d="M92 40 q-6 -8 2 -14 q8 -6 2 -14" stroke="#9a96a0" stroke-width="3" fill="none" opacity=".45"/>
<circle cx="52" cy="78" r="16" fill="url(#ab-win)"/><circle cx="88" cy="78" r="16" fill="url(#ab-win)"/>
<rect x="46" y="72" width="11" height="10" fill="#f0b85a"/><rect x="82" y="72" width="11" height="10" fill="#f0b85a"/>
<rect x="64" y="78" width="10" height="20" fill="#2a1e18"/>
<rect x="74" y="92" width="12" height="7" fill="#4a3020"/><rect x="74" y="90" width="12" height="3" fill="#6a4a2e"/></g>
<g><path d="M128 100 V64 M128 66 H146" stroke="#2a2018" stroke-width="2.5"/><path d="M134 66 v4 M144 66 v4" stroke="#2a2018"/>
<rect x="130" y="70" width="18" height="13" fill="#3a2a20" stroke="#8a6a40"/><path d="M134 79 q5 -7 10 0" stroke="#d8b878" stroke-width="1" fill="none"/></g>
<g fill="#e8d8b8" opacity=".5"><circle cx="210" cy="16" r=".8"/><circle cx="260" cy="30" r=".9"/><circle cx="440" cy="12" r=".8"/></g>
`);
})();
