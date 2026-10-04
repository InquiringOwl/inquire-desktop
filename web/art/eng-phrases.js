/* ============ Story art: Phrases (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: sleepy-hollow (Irving, "The Legend of Sleepy Hollow"). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* The Legend of Sleepy Hollow: dusk over the broad Tappan Zee. Dark hills fold down to a cove on the
   eastern shore, where a little market town with a white church spire sits among the trees; a Dutch
   sloop has shortened sail on the wide water; far up the hill road a lone horseman crosses the ridge. */
S["sleepy-hollow"] = svg("sh", `
<defs><linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1631"/><stop offset=".55" stop-color="#4b3a5e"/><stop offset="1" stop-color="#d98c62"/></linearGradient>
<linearGradient id="sh-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a6a72"/><stop offset=".35" stop-color="#3b3a58"/><stop offset="1" stop-color="#121426"/></linearGradient>
<radialGradient id="sh-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6e7c4" stop-opacity=".5"/><stop offset="1" stop-color="#f6e7c4" stop-opacity="0"/></radialGradient>
<linearGradient id="sh-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e2a26"/><stop offset="1" stop-color="#0c1311"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#sh-sky)"/>
<circle cx="96" cy="38" r="40" fill="url(#sh-moon)"/><circle cx="96" cy="38" r="11" fill="#f3e3bd"/>
<g fill="#e9dcc0" opacity=".6"><circle cx="30" cy="16" r=".9"/><circle cx="168" cy="22" r="1"/><circle cx="214" cy="10" r=".8"/><circle cx="262" cy="30" r="1"/><circle cx="330" cy="14" r=".9"/><circle cx="452" cy="24" r="1"/></g>
<path d="M0 96 Q40 84 80 90 T170 92 Q200 94 230 98 L230 104 H0Z" fill="#2c2a3e" opacity=".85"/>
<rect y="98" width="480" height="82" fill="url(#sh-water)"/>
<path d="M60 102 h60 M70 108 h40 M84 114 h18" stroke="#f3e3bd" stroke-width="1.2" opacity=".35"/>
<path d="M480 40 Q440 46 410 62 Q380 76 350 82 Q318 90 296 104 Q276 116 290 128 Q312 140 360 146 Q420 152 480 150Z" fill="url(#sh-hill)"/>
<path d="M480 40 Q452 42 430 52 Q404 64 384 70" stroke="#3a4a40" stroke-width="1" fill="none" opacity=".7"/>
<g fill="#16211d"><ellipse cx="318" cy="102" rx="12" ry="9"/><ellipse cx="336" cy="96" rx="10" ry="8"/><ellipse cx="404" cy="80" rx="13" ry="10"/><ellipse cx="452" cy="58" rx="12" ry="10"/><ellipse cx="300" cy="118" rx="9" ry="7"/></g>
<g><rect x="342" y="104" width="16" height="12" fill="#c9b79a"/><path d="M340 105 L350 96 L360 105Z" fill="#5a3a30"/>
<rect x="362" y="108" width="14" height="10" fill="#b8a585"/><path d="M360 109 L369 101 L378 109Z" fill="#4a3028"/>
<rect x="320" y="112" width="13" height="10" fill="#bba888"/><path d="M318 113 L326.5 105 L335 113Z" fill="#553529"/>
<rect x="384" y="102" width="12" height="16" fill="#e4dccb"/><path d="M384 102 L390 92 L396 102Z" fill="#e4dccb"/><path d="M390 92 L390 74" stroke="#e4dccb" stroke-width="2"/><path d="M386.5 84 L390 72 L393.5 84Z" fill="#e4dccb"/>
<g fill="#ffcf7a"><rect x="346" y="108" width="3" height="3"/><rect x="352" y="108" width="3" height="3"/><rect x="366" y="111" width="3" height="3"/><rect x="324" y="115" width="3" height="3"/><rect x="388.5" y="106" width="3" height="4"/></g></g>
<g stroke="#e9c58a" stroke-width=".8" fill="none" opacity=".5"><path d="M356 128 q8 -2 16 0 M378 132 q10 -2 20 0"/></g>
<path d="M398 66 Q412 60 426 56" stroke="#5a5040" stroke-width="1.2" fill="none" opacity=".8" stroke-dasharray="2 2"/>
<g fill="#0a0d0c" transform="translate(414 50)"><path d="M-6 6 q4 -6 10 -5 q4 1 5 4 l-1 5 h-2 l0 -3 h-8 l-1 4 h-2z"/><path d="M0 1 l1 -6 q1 -2 3 -1 l-1 6z"/><path d="M3 -5 l5 -3" stroke="#0a0d0c" stroke-width="1"/></g>
<g transform="translate(176 138)"><path d="M-30 0 Q0 10 32 0 L26 8 Q0 14 -24 8Z" fill="#1a1410"/>
<rect x="-1" y="-48" width="2.2" height="48" fill="#1a1410"/>
<path d="M1 -44 Q20 -30 24 -6 L1 -6Z" fill="#d8ccb2" opacity=".9"/><path d="M-1 -30 Q-14 -18 -20 -4 L-1 -4Z" fill="#cbbd9f" opacity=".85"/>
<path d="M1 -44 v-6 l6 2z" fill="#a84a3a"/></g>
<path d="M146 152 q30 4 60 0" stroke="#d8ccb2" stroke-width="1" fill="none" opacity=".35"/>
<g stroke="#8a86a8" stroke-width="1" fill="none" opacity=".35"><path d="M0 128 q20 -3 40 0 t40 0 t40 0"/><path d="M220 160 q20 -3 40 0 t40 0 t40 0"/><path d="M10 170 q20 -3 40 0 t40 0 t40 0 t40 0"/></g>`);
})();
