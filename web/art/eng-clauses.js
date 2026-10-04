/* ============ Story art: Clauses (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: raft-river (Twain, Adventures of Huckleberry Finn). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Adventures of Huckleberry Finn: a summer night on the Mississippi. A wide, slow river under a low moon;
   black cottonwood banks on both sides; far off, a steamboat with lit windows and twin stacks; in front,
   the plank raft with its little wigwam, a lantern, and two figures sitting with their feet in the water. */
S["raft-river"] = svg("rr", `
<defs><linearGradient id="rr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1426"/><stop offset=".6" stop-color="#1d2c4a"/><stop offset="1" stop-color="#3c4a6a"/></linearGradient>
<linearGradient id="rr-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e3d5c"/><stop offset=".4" stop-color="#18233b"/><stop offset="1" stop-color="#0a101d"/></linearGradient>
<radialGradient id="rr-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f3e6c2" stop-opacity=".55"/><stop offset="1" stop-color="#f3e6c2" stop-opacity="0"/></radialGradient>
<radialGradient id="rr-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f2b84b" stop-opacity=".7"/><stop offset="1" stop-color="#f2b84b" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#rr-sky)"/>
<g fill="#e9eefb"><circle cx="40" cy="18" r=".9"/><circle cx="96" cy="34" r=".7"/><circle cx="150" cy="12" r="1"/><circle cx="214" cy="28" r=".7"/><circle cx="262" cy="10" r=".8"/><circle cx="420" cy="22" r=".9"/><circle cx="452" cy="44" r=".6"/><circle cx="300" cy="40" r=".6"/><circle cx="12" cy="50" r=".6"/></g>
<circle cx="352" cy="46" r="34" fill="url(#rr-moon)"/><circle cx="352" cy="46" r="11" fill="#f3e6c2"/>
<path d="M0 86 C30 74 52 80 70 70 C88 62 104 72 122 66 C142 60 160 74 178 78 L196 92 L0 98 Z" fill="#0c1424"/>
<path d="M0 92 C24 86 48 90 72 84 C100 80 130 88 160 88 L200 94 L0 100 Z" fill="#111b2e"/>
<path d="M480 80 C462 70 446 76 430 66 C414 58 396 68 380 64 C362 62 344 72 330 80 C318 86 300 88 286 94 L480 98 Z" fill="#0c1424"/>
<rect y="94" width="480" height="86" fill="url(#rr-water)"/>
<g opacity=".6" fill="#f3e6c2"><rect x="344" y="100" width="16" height="1.4" rx=".7"/><rect x="338" y="108" width="28" height="1.2" rx=".6"/><rect x="346" y="117" width="12" height="1.2" rx=".6"/><rect x="334" y="127" width="34" height="1.1" rx=".5" opacity=".7"/><rect x="342" y="139" width="20" height="1" rx=".5" opacity=".6"/></g>
<g stroke="#4a5b80" stroke-width="1" opacity=".5"><path d="M20 120 h40 M90 134 h56 M200 112 h34 M250 150 h60 M400 140 h50 M30 160 h44 M420 120 h30"/></g>
<g transform="translate(232 84)">
<path d="M0 10 h46 v-6 h-46 z" fill="#1a1712"/><rect x="8" y="-6" width="6" height="10" fill="#120f0b"/><rect x="26" y="-8" width="5" height="12" fill="#120f0b"/>
<rect x="7" y="-10" width="8" height="3" fill="#2a241b"/><rect x="25" y="-12" width="7" height="3" fill="#2a241b"/>
<g fill="#f2b84b"><rect x="4" y="6" width="2" height="1.6"/><rect x="10" y="6" width="2" height="1.6"/><rect x="16" y="6" width="2" height="1.6"/><rect x="22" y="6" width="2" height="1.6"/><rect x="28" y="6" width="2" height="1.6"/><rect x="34" y="6" width="2" height="1.6"/><rect x="40" y="6" width="2" height="1.6"/></g>
<circle cx="38" cy="7" r="7" fill="#1a1712"/><path d="M-4 10 h54" stroke="#f2b84b" stroke-width=".5" opacity=".5"/>
<g fill="#7a8399" opacity=".35"><circle cx="11" cy="-16" r="4"/><circle cx="17" cy="-22" r="5"/><circle cx="29" cy="-20" r="4"/></g></g>
<g transform="translate(96 132)">
<path d="M-6 16 L170 16 L176 26 L0 26 Z" fill="#05080f" opacity=".5"/>
<path d="M0 10 L168 10 L172 18 L-4 18 Z" fill="#4a3826"/>
<g stroke="#2b2016" stroke-width="1"><path d="M20 10 l-2 8 M44 10 l-2 8 M68 10 l-1 8 M92 10 l-1 8 M116 10 l0 8 M140 10 l1 8"/></g>
<path d="M18 10 L46 -22 L74 10 Z" fill="#2d2a22"/><path d="M46 -22 L74 10 L62 10 Z" fill="#1f1d17"/>
<path d="M38 10 L46 -6 L54 10 Z" fill="#0d0c09"/>
<circle cx="150" cy="-4" r="22" fill="url(#rr-lamp)"/>
<path d="M150 10 v-10" stroke="#2b2016" stroke-width="1.6"/><rect x="146.5" y="-8" width="7" height="8" rx="1.4" fill="#f2b84b"/><rect x="145.5" y="-9.5" width="9" height="2" fill="#3a2c1c"/>
<g fill="#0f0d0b">
<circle cx="102" cy="-14" r="4.4"/><path d="M96 10 C95 0 97 -8 102 -9 C108 -8 110 0 109 10 Z"/><path d="M98 -16 h9 l-1.5 -4 h-6 z"/>
<circle cx="122" cy="-12" r="4.2"/><path d="M116 10 C115 1 117 -6 122 -7 C127 -6 129 1 128 10 Z"/>
<path d="M104 10 l3 10 M108 10 l5 10 M124 10 l2 10 M127 10 l5 9" stroke="#0f0d0b" stroke-width="2.2"/></g>
<path d="M100 22 q6 3 14 0 M120 22 q6 3 13 0" stroke="#8fa0c6" stroke-width=".8" fill="none" opacity=".7"/>
<path d="M-30 20 C-20 16 -12 22 -4 18 M176 22 C190 18 198 24 212 20" stroke="#5b6d94" stroke-width="1" fill="none" opacity=".6"/>
<path d="M172 14 L196 6" stroke="#3a2c1c" stroke-width="2"/></g>
<g stroke="#26324d" stroke-width="1.2" opacity=".8"><path d="M170 160 q30 6 60 0 q30 -6 60 0"/></g>
`);
})();
