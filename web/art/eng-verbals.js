/* ============ Story art: Verbals (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: elsinore (Shakespeare, Hamlet). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* Elsinore: a cold night on the Danish coast. A square-towered castle with battlements stands on a dark
   headland above the sea; one window is lit. A pale moon breaks through cloud and lays a path on the water;
   on the rampart a single small cloaked figure stands looking out. */
S["elsinore"] = svg("el", `
<defs><linearGradient id="el-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1020"/><stop offset=".7" stop-color="#22304a"/><stop offset="1" stop-color="#3c4a62"/></linearGradient>
<linearGradient id="el-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3850"/><stop offset="1" stop-color="#070b14"/></linearGradient>
<radialGradient id="el-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dfe6f2" stop-opacity=".45"/><stop offset="1" stop-color="#dfe6f2" stop-opacity="0"/></radialGradient>
<linearGradient id="el-rock" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2230"/><stop offset="1" stop-color="#090c12"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#el-sky)"/>
<circle cx="370" cy="40" r="46" fill="url(#el-moon)"/><circle cx="370" cy="40" r="13" fill="#e6ebf3"/>
<g fill="#3a4660" opacity=".75"><ellipse cx="330" cy="46" rx="44" ry="5"/><ellipse cx="410" cy="30" rx="30" ry="4"/><ellipse cx="120" cy="34" rx="60" ry="5"/></g>
<g fill="#cfd8e6" opacity=".55"><circle cx="40" cy="20" r=".9"/><circle cx="90" cy="60" r=".8"/><circle cx="200" cy="18" r="1"/><circle cx="250" cy="44" r=".8"/><circle cx="455" cy="70" r=".9"/></g>
<rect y="118" width="480" height="62" fill="url(#el-sea)"/>
<path d="M350 124 h40 M340 132 h56 M356 140 h30 M346 150 h44 M362 160 h20" stroke="#dfe6f2" stroke-width="1.2" opacity=".4"/>
<path d="M0 120 L0 180 H270 Q250 150 228 136 Q210 124 186 118 Q150 110 110 112 Q60 108 0 120Z" fill="url(#el-rock)"/>
<g fill="#141a26">
<rect x="40" y="62" width="34" height="54"/><rect x="74" y="80" width="90" height="36"/><rect x="150" y="70" width="26" height="46"/>
<path d="M40 62 h6 v-6 h6 v6 h4 v-6 h6 v6 h4 v-6 h8 v6Z"/><path d="M74 80 h8 v-5 h7 v5 h8 v-5 h7 v5 h8 v-5 h7 v5 h8 v-5 h7 v5 h8 v-5 h7 v5 h9Z"/>
<path d="M150 70 h5 v-5 h5 v5 h5 v-5 h5 v5 h6Z"/><path d="M57 56 v-20 l-3 4 h6Z" stroke="#141a26" stroke-width="1.5"/></g>
<rect x="55" y="74" width="5" height="8" fill="#e8b860"/><rect x="100" y="92" width="4" height="6" fill="#3a4052"/><rect x="128" y="92" width="4" height="6" fill="#3a4052"/>
<path d="M57 36 l12 3 l-12 3Z" fill="#6a2a34"/>
<g fill="#0a0d14"><path d="M160 66 q3 -7 6 0 l1 4 h-8Z"/><circle cx="163" cy="62" r="2.4"/></g>
<path d="M0 132 Q40 128 80 134 T170 132" stroke="#4a5670" stroke-width=".8" fill="none" opacity=".5"/>
<path d="M232 140 q16 -4 30 2 M248 150 q14 -3 26 2" stroke="#9fb0c8" stroke-width="1" fill="none" opacity=".35"/>
`);
})();
