// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

// Kreisbogen um (cx, cy) mit Radius r von Winkel a0 bis a1 (in Grad)
function arc(cx, cy, r, a0, a1) {
  const p = a => [(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), (cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}`;
}
// Spirale (Schnecke im Innenohr) um (cx, cy), beginnt außen beim Winkel a0 (in Grad)
function spiral(cx, cy, r0, turns, a0) {
  const steps = turns * 36;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const a = (a0 + i * 10) * Math.PI / 180, r = r0 * (1 - i / steps * .85);
    d += `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  }
  return d;
}

// Herz in anatomischer Form (Vorderansicht, Spitze zeigt nach links unten im Körper = rechts im Bild),
// mit oberer Hohlvene, Aorta, Lungenarterie und Herzkranzgefäßen; Mittelpunkt bei 0,0, ca. 40 Einheiten breit
const HEART = `<path d="M-9-7V-20" stroke="#4a6ad0" stroke-width="5" fill="none"/>
  <path d="M-1-8V-16C-1-23 10-23 10-16V-11" stroke="#c84a46" stroke-width="5.5" fill="none"/>
  <path d="M1-20l-1-5M5-22v-5" stroke="#c84a46" stroke-width="2.5" fill="none"/>
  <path d="M-14-8C-19-1-17 9-8 14C-1 17 8 19 15 19C17 12 19 3 15-4C13-8 9-10 4-10C-3-11-10-11-14-8z" fill="#d0504a" stroke="#8a2a2a" stroke-width="2"/>
  <path d="M-12-8C-19-8-21 2-16 5C-14 3-13-3-12-8z" fill="#b8403c" stroke="#8a2a2a" stroke-width="1.5"/>
  <path d="M10-8C15-10 18-5 14-2C13-4 12-6 10-8z" fill="#b8403c" stroke="#8a2a2a" stroke-width="1.5"/>
  <path d="M3-9C3-14 8-16 12-14" stroke="#5a78c8" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M2-9C4 2 8 10 13 17M-13 2C-9 8-3 10 2 9" stroke="#f2a8a0" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;

// Einfache Person, Mitte bei 0,0, von -58 (Kopf) bis 58 (Füße)
const PERSON = `<circle cy="-50" r="8" fill="#3a6ea8"/>
  <path d="M0-38V5M-9-36L-12 0M9-36L12 0M0 5L-7 56M0 5L7 56" stroke="#3a6ea8" stroke-width="6.5" fill="none" stroke-linecap="round"/>
  <path d="M-8-38H8L6 8H-6Z" fill="#3a6ea8"/>`;

const IMAGES = {
  // Organe im Körper: Gehirn, Luftröhre, Lunge, Herz, Leber, Magen, Nieren, Dünndarm, Dickdarm, Harnblase;
  // Speiseröhre strichliert hinter der Luftröhre. Der Dünndarm beginnt am Magenausgang und mündet unten in den aufsteigenden Dickdarm.
  koerper: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organe des Menschen">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <g stroke-linecap="round" fill="none">
      <path d="M146 80Q118 150 110 262M254 80Q282 150 290 262" stroke="#b9785a" stroke-width="24"/>
      <path d="M146 80Q118 150 110 262M254 80Q282 150 290 262" stroke="#f6dcc6" stroke-width="18"/></g>
    <rect x="189" y="44" width="22" height="24" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <path d="M140 74Q200 56 260 74L266 264H134Z" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <rect x="191" y="46" width="18" height="24" fill="#f6dcc6"/>
    <circle cx="200" cy="27" r="25" fill="#f6dcc6" stroke="#b9785a" stroke-width="3"/>
    <path d="M180 22c0-11 9-18 20-18s20 7 20 18c0 7-8 9-20 9s-20-2-20-9z" fill="#f4b6c8" stroke="#c2577a" stroke-width="2"/>
    <path d="M200 6v24M186 16c3-4 6 3 9-1M205 15c3-4 6 3 9-1M185 24c3-3 6 3 9 0M206 24c3-3 6 3 9 0" stroke="#c2577a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M191 39h3M206 39h3" stroke="#8a5a45" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M191 80C175 74 158 92 152 122C148 140 150 154 160 153C172 151 186 148 192 140Z" fill="#f59ab0" stroke="#c2577a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M209 80C225 74 242 92 248 122C252 140 250 154 240 153C232 152 226 150 222 146C224 132 218 112 209 104Z" fill="#f59ab0" stroke="#c2577a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M200 50V92M200 92L184 104M200 92L216 104" stroke="#8fb0c8" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M200 50V92M200 92L184 104M200 92L216 104" stroke="#cfe0ec" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M196 58h8M196 66h8M196 74h8M196 82h8" stroke="#8fb0c8" stroke-width="1.5"/>
    <g transform="translate(205 127) scale(.85)">${HEART}</g>
    <g fill="#8a4a6a" stroke="#5e2f48" stroke-width="2">
      <path d="M170 184C160 184 158 196 160 204C162 212 174 212 178 206C180 203 176 200 176 196C176 192 180 190 178 187C176 185 173 184 170 184Z"/>
      <path d="M230 186C240 186 242 198 240 206C238 214 226 214 222 208C220 205 224 202 224 198C224 194 220 192 222 189C224 187 227 186 230 186Z"/></g>
    <path d="M148 164C165 150 205 148 216 158C216 170 196 182 172 186C158 188 146 180 148 164Z" fill="#9a5a3a" stroke="#6a3a22" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke-linecap="round"><path d="M212 191C198 190 192 198 196 212" stroke="#d4875a" stroke-width="5.5"/><path d="M212 191C198 190 192 198 196 212" stroke="#f6d3ae" stroke-width="2.8"/></g>
    <path d="M222 156C236 152 252 162 250 178C248 194 230 200 214 196C206 194 206 186 214 185C224 184 230 178 226 170C224 166 220 162 222 156Z" fill="#f2b48a" stroke="#c4702a" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M160 250V224Q160 212 174 212H226Q240 212 240 224V238Q240 248 228 246L212 242" stroke="#a86a30" stroke-width="12"/>
      <path d="M160 250V224Q160 212 174 212H226Q240 212 240 224V238Q240 248 228 246L212 242" stroke="#d9a060" stroke-width="8"/>
      <path d="M156 228h8M180 208v8M196 208v8M212 208v8M228 209v8M236 226h8" stroke="#a86a30" stroke-width="1.5"/>
      <path d="M197 219Q197 224 192 224q-4 3-8 0t-8 0q-6 3.5 0 7q5-4 10 0t10 0t10 0t10 0t10 0q6 3.5 0 7q-5 4-10 0t-10 0t-10 0t-10 0t-10 0t-10 0" stroke="#d4875a" stroke-width="5.5"/>
      <path d="M197 219Q197 224 192 224q-4 3-8 0t-8 0q-6 3.5 0 7q5-4 10 0t10 0t10 0t10 0t10 0q6 3.5 0 7q-5 4-10 0t-10 0t-10 0t-10 0t-10 0t-10 0" stroke="#f6d3ae" stroke-width="2.8"/></g>
    <ellipse cx="197" cy="250" rx="13" ry="8" fill="#ecd06a" stroke="#b0912a" stroke-width="2"/>
    <path d="M206 48V96C206 124 214 144 225 158" fill="none" stroke="#6a3a1a" stroke-width="3" stroke-dasharray="5 4"/>
  </svg>`,

  // Auge im Längsschnitt: Person links, Lichtstrahlen durch Hornhaut und Linse, das Bild steht auf der Netzhaut auf dem Kopf
  auge: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau des Auges">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <path d="M350 138C372 148 386 156 400 160V194C384 190 366 184 344 172Z" fill="#f7d98e" stroke="#c99a3a" stroke-width="2"/>
    <circle cx="255" cy="130" r="108" fill="#f7d98e" stroke="#c99a3a" stroke-width="2"/>
    <circle cx="255" cy="130" r="92" fill="#dff0f4"/>
    <path d="${arc(255, 130, 93, -135, 0)}${arc(255, 130, 93, 0, 135)}" stroke="#d84a4a" stroke-width="7" fill="none"/>
    <path d="M169 65C140 85 128 110 128 130C128 150 140 175 169 195C176 180 176 80 169 65Z" fill="#eef8fb" stroke="#4a90b0" stroke-width="2.5"/>
    <path d="M166 84L160 106M166 176L160 154" stroke="#6f9f6a" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="172" cy="130" rx="14" ry="31" fill="#c9e6f0" stroke="#3a86b0" stroke-width="2.5"/>
    <g transform="translate(26 130)">${PERSON}</g>
    <g transform="translate(344 130) rotate(180) scale(.3)">${PERSON}</g>
    <path d="M36 77L172 118L345 148M36 183L172 142L345 112" stroke="#2f2a22" stroke-width="1.6" stroke-dasharray="6 5" fill="none"/>
  </svg>`,

  // Ohr im Schnitt: Ohrmuschel, Gehörgang, Trommelfell, Hammer, Amboss, Steigbügel, Bogengänge, Schnecke, Hörnerv, Ohrtrompete
  ohr: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau des Ohres">
    <rect width="400" height="260" fill="#f3f7fb"/>
    <path d="M72 0H400V260H72Z" fill="#ead5b5"/>
    <path d="M72 146L190 165L206 260H72Z" fill="#f6dcc6"/>
    <path d="M72 0H150C150 60 170 90 180 100L72 112Z" fill="#f6dcc6"/>
    <path d="M74 30C40 14 12 46 18 92C22 126 38 150 44 180C48 200 66 206 72 186L76 150V110Z" fill="#f7cfc0" stroke="#c98a7a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M60 52C40 46 30 72 36 100C40 120 52 134 58 150" stroke="#c98a7a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M76 112C110 118 150 108 178 102L188 158C150 150 110 146 76 146Z" fill="#f9dcd2" stroke="#c98a7a" stroke-width="2.5"/>
    <path d="M210 176C226 206 262 236 296 260" stroke="#c9777c" stroke-width="16" fill="none"/>
    <path d="M210 176C226 206 262 236 296 260" stroke="#eba9a9" stroke-width="11" fill="none"/>
    <path d="M182 100C190 80 234 74 244 96C250 120 248 150 236 170C222 186 194 180 188 160Z" fill="#eba9a9" stroke="#c9777c" stroke-width="2"/>
    <ellipse cx="184" cy="130" rx="6" ry="31" transform="rotate(-10 184 130)" fill="#6f8fc8" stroke="#3f5a96" stroke-width="2"/>
    <path d="M187 136L203 106" stroke="#a85f1f" stroke-width="8" stroke-linecap="round"/>
    <path d="M187 136L203 106" stroke="#f2a65a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="205" cy="100" r="9" fill="#f2a65a" stroke="#a85f1f" stroke-width="2"/>
    <path d="M214 92C226 86 236 96 232 106L228 130C226 136 220 134 221 128L222 112C218 112 214 110 212 106Z" fill="#8cc063" stroke="#4f7f2f" stroke-width="2" stroke-linejoin="round"/>
    <path d="M228 132L247 120M228 132L247 144" stroke="#7a6a3a" stroke-width="5" stroke-linecap="round"/>
    <path d="M228 132L247 120M228 132L247 144" stroke="#f5efd8" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M249 114V150" stroke="#7a6a3a" stroke-width="5" stroke-linecap="round"/>
    <g fill="none" stroke-linecap="round">
      <g stroke="#3a86b0" stroke-width="10"><path d="M262 118C244 86 258 56 284 56C310 56 314 90 284 112"/><path d="M276 116C266 96 274 78 296 76C322 76 330 104 288 124"/><path d="M280 126C298 134 326 126 320 110C314 98 294 104 284 120"/><path d="M274 142L288 168"/><path d="${spiral(322, 182, 38, 3, 200)}"/></g>
      <g stroke="#bfe3f0" stroke-width="6.5"><path d="M262 118C244 86 258 56 284 56C310 56 314 90 284 112"/><path d="M276 116C266 96 274 78 296 76C322 76 330 104 288 124"/><path d="M280 126C298 134 326 126 320 110C314 98 294 104 284 120"/><path d="M274 142L288 168"/><path d="${spiral(322, 182, 38, 3, 200)}"/></g></g>
    <circle cx="268" cy="130" r="17" fill="#bfe3f0" stroke="#3a86b0" stroke-width="2.5"/>
    <path d="M396 84C370 96 340 110 310 122L276 130M344 108C352 130 346 156 328 172" stroke="#b08a10" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M396 84C370 96 340 110 310 122L276 130M344 108C352 130 346 156 328 172" stroke="#f2c433" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Haut im Schnitt: Oberhaut, Lederhaut, Unterhaut mit Haar, Talgdrüse, Haarmuskel, Schweißdrüse, Blutgefäßen, Nerv, Sinneskörperchen, Fett
  haut: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau der Haut">
    <rect width="400" height="260" fill="#eaf4fb"/>
    <rect y="178" width="400" height="72" fill="#f9e6b4"/>
    <rect y="248" width="400" height="12" fill="#cf7468"/>
    <path d="M0 254H400" stroke="#a85548" stroke-width="1.5"/>
    <path d="M0 50H400V180C340 174 260 184 200 178S60 174 0 180Z" fill="#f5c0ba"/>
    <g fill="#fbeea8" stroke="#d3b64a" stroke-width="1.5">${[[28, 212], [66, 228], [100, 208], [136, 228], [172, 208], [208, 228], [244, 208], [280, 228], [316, 208], [352, 228], [384, 208], [28, 236], [136, 208], [244, 234], [352, 204]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="15" ry="10"/>`).join("")}</g>
    <path d="M70 192C60 130 80 96 72 70C78 96 92 130 84 200M204 192C194 130 214 96 206 70C212 96 226 130 218 200" fill="none" stroke="#d0403a" stroke-width="2.5"/>
    <path d="M0 192C60 178 120 200 180 188S300 198 400 184" fill="none" stroke="#d0403a" stroke-width="5" stroke-linecap="round"/>
    <path d="M0 202C60 190 120 212 180 200S300 208 400 196" fill="none" stroke="#3f63c0" stroke-width="5" stroke-linecap="round"/>
    <path d="M400 216C360 200 330 176 322 134M332 176C304 166 282 120 288 72" fill="none" stroke="#e8b820" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="320" cy="118" rx="8" ry="17" fill="#f7dc72" stroke="#b08a10" stroke-width="2"/>
    <path d="M315 110h10M314 118h12M315 126h10" stroke="#b08a10" stroke-width="1.5"/>
    <path d="M244 146C240 124 252 106 244 84C240 66 248 48 244 34" fill="none" stroke="#3a78a8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="${spiral(244, 160, 18, 3, 270)}" fill="none" stroke="#3a78a8" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M133 120L186 60" stroke="#a84058" stroke-width="7" stroke-linecap="round"/>
    <path d="M133 120L186 60" stroke="#d66d82" stroke-width="4" stroke-linecap="round"/>
    <path d="M122 92H136" stroke="#b89a2a" stroke-width="4" stroke-linecap="round"/>
    <g fill="#f2d16a" stroke="#b89a2a" stroke-width="1.8"><circle cx="104" cy="90" r="9"/><circle cx="118" cy="98" r="9"/><circle cx="102" cy="106" r="9"/><circle cx="116" cy="112" r="8"/></g>
    <path d="M127 170L143 48" stroke="#8a6a50" stroke-width="13" stroke-linecap="round"/>
    <path d="M0 62Q25 76 50 60T100 60T150 60T200 60T250 60T300 60T350 60T400 60V32C300 24 250 38 150 30S50 24 0 32Z" fill="#edc391" stroke="#b07a50" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M0 40C50 32 100 46 150 38S300 32 400 40" fill="none" stroke="#d8a770" stroke-width="2"/>
    <path d="M127 172L144 40L160 2" stroke="#3a2a20" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="126" cy="174" r="10" fill="#3a2a20"/><circle cx="126" cy="179" r="4" fill="#f5c0ba"/>
    <path d="M352 118L360 34L374 8" stroke="#3a2a20" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="352" cy="118" r="5" fill="#3a2a20"/>
    <ellipse cx="244" cy="31" rx="4" ry="2" fill="#6a4a30"/>
  </svg>`
};

// Motive für die Themen (viewBox 0 0 48 48, nur Linien)
const TOPIC_ICONS = {
  ebenen: `<circle cx="9" cy="36" r="3" /><circle cx="21" cy="33" r="6" /><circle cx="37" cy="27" r="9" /><path d="M5 44h38" /><path d="M33 26a4 4 0 0 1 8 0" />`,
  nerven: `<circle cx="16" cy="17" r="5" /><path d="M12 13L7 8M11 19l-6 2M16 12V5M19 13l4-5M20 21l14 14" /><path d="M34 35l6-1M34 35l1 6M34 35l5 4" />`,
  auge: `<path d="M4 24C10 14 17 10 24 10s14 4 20 14c-6 10-13 14-20 14S10 34 4 24z" /><circle cx="24" cy="24" r="7" /><circle cx="24" cy="24" r="2.5" />`,
  ohr: `<path d="M14 20c0-8 6-14 13-14s13 6 13 14c0 6-4 9-7 12s-3 6-3 8c0 4-3 6-6 6s-5-2-6-4" /><path d="M21 20c0-4 3-7 6-7s6 3 6 7c0 3-3 4-5 6" />`,
  haut: `<path d="M14 27V13a3 3 0 0 1 6 0v9M20 21V9a3 3 0 0 1 6 0v12M26 21V11a3 3 0 0 1 6 0v12M32 23v-6a3 3 0 0 1 6 0v12c0 8-6 14-13 14h-2c-5 0-8-3-11-7l-5-8a3 3 0 0 1 5-3l2 3" />`
};
