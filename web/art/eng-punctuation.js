/* ============ Story art: Punctuation (inline SVG, offline) ============
   Original scene drawn for Inquire, 480 × 180: dickinson-carriage (Emily Dickinson, "Because I could not stop for Death"). */
(function(){
window.DB = window.DB || {};
const S = DB.scenes = DB.scenes || {};
const svg = (id, body) => `<svg viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${body}</svg>`;

/* "Because I could not stop for Death": a closed black carriage drawn by one dark horse rolls slowly along a
   country road at sunset; fields of grain on one side, a schoolhouse far off, the sun low and red; ahead,
   a small swelling of ground like a house, with a tiny cornice, half sunk in the grass. */
S["dickinson-carriage"] = svg("dc", `
<defs><linearGradient id="dc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1a33"/><stop offset=".55" stop-color="#5a3f5c"/><stop offset=".85" stop-color="#c0715a"/><stop offset="1" stop-color="#e6a066"/></linearGradient>
<radialGradient id="dc-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd59a"/><stop offset=".35" stop-color="#f2a35a" stop-opacity=".8"/><stop offset="1" stop-color="#f2a35a" stop-opacity="0"/></radialGradient>
<linearGradient id="dc-field" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b5a34"/><stop offset="1" stop-color="#2a2416"/></linearGradient>
<linearGradient id="dc-road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a6e52"/><stop offset="1" stop-color="#4a3a2c"/></linearGradient></defs>
<rect width="480" height="180" fill="url(#dc-sky)"/>
<circle cx="380" cy="112" r="46" fill="url(#dc-sun)"/><circle cx="380" cy="112" r="11" fill="#ffd9a0"/>
<g fill="#e8d9c0"><circle cx="60" cy="22" r="1"/><circle cx="130" cy="14" r="1.2"/><circle cx="210" cy="30" r="1"/><circle cx="96" cy="44" r=".8"/><circle cx="262" cy="12" r=".9"/></g>
<path d="M0 118c80-8 170-6 250-2s160 2 230-4v68H0z" fill="#3e3424"/>
<path d="M0 124c90-4 180 0 260 2s150-2 220-6v60H0z" fill="url(#dc-field)"/>
<g stroke="#a88a4a" stroke-width="1" opacity=".55"><path d="M10 140v-8M18 142v-9M26 140v-8M34 143v-9M42 140v-8M50 142v-9M58 140v-8M66 143v-9M74 140v-8M82 142v-9M90 140v-8M98 142v-9M106 140v-8"/></g>
<g fill="#2b2433"><rect x="300" y="108" width="20" height="12"/><path d="M298 108l12-8 12 8z"/><rect x="309" y="96" width="2" height="5"/></g>
<path d="M120 180c40-26 120-48 230-56 50-3 100-2 130 0v6c-60 0-150 6-220 22-50 12-80 24-100 28z" fill="url(#dc-road)"/>
<g fill="#2e3a2a"><path d="M408 132c6-9 22-9 28 0z"/></g><g stroke="#cbb79a" stroke-width="1.2" fill="none"><path d="M410 131h24"/><path d="M412 128h20"/></g>
<g fill="#151320">
<path d="M0 118c14-30 28-34 40-30 12-12 26-8 30 6 10 4 12 16 8 24z"/>
<path d="M440 120c6-22 18-26 28-20 6-6 12-2 12 4v16z"/>
<path d="M156 130c2-6 8-10 14-10h48c6 0 10 4 12 10l2 10h-78z"/>
<rect x="150" y="98" width="76" height="34" rx="4"/>
<path d="M146 98h84l-6-8h-72z"/><path d="M160 90v-4h56v4z"/>
<rect x="164" y="106" width="20" height="14" rx="2" fill="#e8b46a" opacity=".55"/><rect x="192" y="106" width="20" height="14" rx="2" fill="#e8b46a" opacity=".35"/>
<path d="M226 120h40" stroke="#151320" stroke-width="2"/>
<path d="M258 118c4-12 16-18 30-16l10-12 6 2-2 10c6 2 10 8 8 14l-3 2-5-6c-4 6-10 8-18 8l-2 22h-4l-2-18-8 2-4 16h-4l-1-16c-3-2-4-5-1-8z"/>
<path d="M300 92l4-8 3 7z"/></g>
<g fill="none" stroke="#151320" stroke-width="3"><circle cx="166" cy="142" r="13"/><circle cx="214" cy="142" r="13"/></g>
<g stroke="#151320" stroke-width="1.2"><path d="M166 129v26M153 142h26M157 133l18 18M175 133l-18 18M214 129v26M201 142h26M205 133l18 18M223 133l-18 18"/></g>
<rect width="480" height="180" fill="#f2a35a" opacity=".05"/>`);
})();
