/* ============ Story art: Subject–Verb Agreement (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: hound-moor (The Hound of the Baskervilles). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* The Hound of the Baskervilles: Dartmoor at night. A granite tor on the skyline under a low moon,
   standing stones, mist lying in the hollows of the mire, the lit windows of a distant hall, and a
   faintly glowing hound loping across the foreground. */
S["hound-moor"] = svg("hm", `
<defs><linearGradient id="hm-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070b16"/><stop offset=".6" stop-color="#1d2a3e"/><stop offset="1" stop-color="#4a5466"/></linearGradient>
<radialGradient id="hm-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f4ecd2" stop-opacity=".55"/><stop offset="1" stop-color="#f4ecd2" stop-opacity="0"/></radialGradient>
<linearGradient id="hm-far" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26303d"/><stop offset="1" stop-color="#171d26"/></linearGradient>
<linearGradient id="hm-near" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22261f"/><stop offset="1" stop-color="#0b0d0a"/></linearGradient>
<linearGradient id="hm-mist" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c8d2dc" stop-opacity="0"/><stop offset=".3" stop-color="#c8d2dc" stop-opacity=".22"/><stop offset=".7" stop-color="#c8d2dc" stop-opacity=".18"/><stop offset="1" stop-color="#c8d2dc" stop-opacity="0"/></linearGradient>
<radialGradient id="hm-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9fe0c8" stop-opacity=".45"/><stop offset="1" stop-color="#9fe0c8" stop-opacity="0"/></radialGradient></defs>
<rect width="480" height="180" fill="url(#hm-sky)"/>
<g fill="#dfe6f0" opacity=".65"><circle cx="30" cy="18" r="1"/><circle cx="96" cy="40" r=".9"/><circle cx="150" cy="14" r="1.1"/><circle cx="214" cy="30" r=".8"/><circle cx="268" cy="12" r="1"/><circle cx="430" cy="24" r="1"/><circle cx="458" cy="52" r=".8"/><circle cx="60" cy="58" r=".7"/></g>
<circle cx="352" cy="50" r="44" fill="url(#hm-moon)"/><circle cx="352" cy="50" r="15" fill="#f1e8cc"/><circle cx="347" cy="46" r="3" fill="#ddd2b2" opacity=".6"/><circle cx="357" cy="55" r="2" fill="#ddd2b2" opacity=".5"/>
<path d="M0 92 Q60 80 120 88 T240 84 T360 90 T480 82 V180 H0Z" fill="url(#hm-far)"/>
<g fill="#10151d"><path d="M150 86 l6 -16 l10 -4 l4 -10 l12 2 l6 10 l10 2 l4 16Z"/><rect x="160" y="62" width="10" height="8"/><rect x="174" y="54" width="9" height="12"/><rect x="186" y="66" width="8" height="6"/></g>
<g fill="#0f141b"><rect x="404" y="74" width="40" height="16"/><rect x="414" y="64" width="8" height="12"/><rect x="430" y="62" width="8" height="14"/><path d="M402 76 l22 -10 l22 10Z"/></g>
<g fill="#f2c46a"><rect x="408" y="80" width="3" height="4"/><rect x="418" y="80" width="3" height="4"/><rect x="436" y="80" width="3" height="4"/></g>
<g fill="#f2c46a" opacity=".2"><circle cx="410" cy="82" r="5"/><circle cx="437" cy="82" r="5"/></g>
<rect x="0" y="94" width="480" height="18" fill="url(#hm-mist)"/>
<path d="M0 118 Q80 104 170 114 T330 110 T480 116 V180 H0Z" fill="url(#hm-near)"/>
<g fill="#151a16"><path d="M60 120 l4 -26 l8 -2 l3 28Z"/><path d="M86 120 l3 -18 l7 0 l2 18Z"/><path d="M300 116 l4 -22 l7 -1 l2 23Z"/></g>
<g fill="#2b3a2e" opacity=".55"><ellipse cx="120" cy="150" rx="40" ry="4"/><ellipse cx="390" cy="160" rx="54" ry="5"/></g>
<g stroke="#45573f" stroke-width="1" opacity=".7"><path d="M20 140 l3 -10 M26 141 l1 -12 M32 140 l-2 -9"/><path d="M440 138 l2 -10 M446 139 l0 -12 M452 138 l-3 -9"/><path d="M180 150 l2 -9 M186 151 l0 -11"/></g>
<rect x="0" y="124" width="480" height="14" fill="url(#hm-mist)" opacity=".8"/>
<ellipse cx="250" cy="134" rx="60" ry="22" fill="url(#hm-glow)"/>
<g fill="#0a0d0b" stroke="#a6e6cf" stroke-width="1" stroke-opacity=".5">
<path d="M212 132 q10 -12 30 -10 q14 -10 26 -6 l8 -6 q6 -2 8 2 l-4 6 q4 6 -2 10 q-6 0 -10 -2 l-6 4 q-2 8 4 18 l-5 1 q-6 -8 -8 -16 q-14 4 -26 2 q-4 8 -12 14 l-5 -1 q6 -6 6 -14 q-8 2 -14 12 l-5 -1 q4 -10 10 -14Z"/>
<path d="M212 132 q-10 -2 -18 4 q8 -1 14 1Z"/></g>
<circle cx="283" cy="118" r="1.4" fill="#d6fff0"/><circle cx="283" cy="118" r="4" fill="#d6fff0" opacity=".35"/>
<rect x="0" y="0" width="480" height="180" fill="#000" opacity=".06"/>`);
})();
