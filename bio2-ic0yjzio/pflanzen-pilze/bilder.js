// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

// Einfaches Blatt: Grund bei (cx, by), Spitze oben. d = Umriss (Grund bei 0 0, Spitze bei etwa 0 -90),
// adern = [y, Länge] der Seitenadern, spitze = oberes Ende der Mittelader, stiel = Länge des Stiels
function blattUmriss(cx, by, { d, adern, pfad, spitze }, stiel) {
  const seiten = pfad || adern.map(([y, w]) => `M0 ${y}L${w} ${y - 12}M0 ${y}L${-w} ${y - 12}`).join("");
  return `<g transform="translate(${cx} ${by})">
    <path d="${d}" fill="#7ab55c" stroke="#4f8a3c" stroke-width="2" stroke-linejoin="round"/>
    <path d="${seiten}" stroke="#4f8a3c" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M0 ${spitze}V${stiel}" stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"/></g>`;
}
const BLATTFORM = {
  lanzettlich: { d: "M0-90C14-60 17-22 0 0C-17-22-14-60 0-90Z", adern: [[-25, 8], [-42, 8], [-58, 6]], spitze: -82 },
  eifoermig: { d: "M0-90C20-70 36-40 32-22C28-6 12 0 0 0C-12 0-28-6-32-22C-36-40-20-70 0-90Z", adern: [[-18, 24], [-36, 24], [-54, 11]], spitze: -82 },
  verkehrt: { d: "M0-90C14-90 34-80 34-58C34-36 14-14 0 0C-14-14-34-36-34-58C-34-80-14-90 0-90Z", adern: [[-16, 16], [-34, 24], [-52, 26], [-68, 18]], spitze: -84 },
  kreisrund: { d: "M0-78A38 38 0 1 1 0-2A38 38 0 1 1 0-78Z", adern: [[-16, 28], [-34, 30], [-52, 26]], spitze: -72 },
  elliptisch: { d: "M0-90C36-70 36-20 0 0C-36-20-36-70 0-90Z", adern: [[-18, 20], [-36, 22], [-54, 14]], spitze: -82 },
  // gelappt wie ein Ahornblatt: fünf spitze Lappen, die Adern laufen vom Blattgrund in die Lappen
  gelappt: { d: "M0-90L9-72L16-76L13-60L9-46L20-56L24-68L30-58L44-66L38-48L44-42L30-36L16-30L28-26L44-24L34-14L20-10L8-8L0-3L-8-8L-20-10L-34-14L-44-24L-28-26L-16-30L-30-36L-44-42L-38-48L-44-66L-30-58L-24-68L-20-56L-9-46L-13-60L-16-76L-9-72Z", pfad: "M0-6L36-58M0-6L-36-58M0-6L36-24M0-6L-36-24", adern: [], spitze: -82 },
  dreieckig: { d: "M0-90C10-68 28-34 38-12C24-4 10-2 0 0C-10-2-24-4-38-12C-28-34-10-68 0-90Z", adern: [[-10, 26], [-26, 20], [-44, 12]], spitze: -82 },
  herz: { d: "M0-90C14-70 38-40 36-16C34 2 10 4 0-12C-10 4-34 2-36-16C-38-40-14-70 0-90Z", adern: [[-14, 26], [-32, 24], [-50, 15]], spitze: -82 }
};

// Gefiedertes Blatt: Blattachse von oben bis unten, Blättchenpaare bei ys, ende = Endblättchen an der Spitze
function fiederBlatt(cx, oben, unten, ys, rx, ry, ende) {
  const a = 18 * Math.PI / 180, dx = (rx + 1) * Math.cos(a), dy = (rx + 1) * Math.sin(a), n = v => v.toFixed(1);
  const form = `fill="#7ab55c" stroke="#4f8a3c" stroke-width="${rx < 10 ? 1 : 2}"`;
  const paare = ys.map(y => [-1, 1].map(s =>
    `<ellipse cx="${n(cx + s * dx)}" cy="${n(y - dy)}" rx="${rx}" ry="${ry}" transform="rotate(${-s * 18} ${n(cx + s * dx)} ${n(y - dy)})" ${form}/>`).join("")).join("");
  const spitze = ende ? `<ellipse cx="${cx}" cy="${oben - rx}" rx="${ry}" ry="${rx}" ${form}/>` : "";
  return `${paare}${spitze}<path d="M${cx} ${oben}V${unten}" stroke="#4f8a3c" stroke-width="${rx < 10 ? 1.5 : 3}" stroke-linecap="round"/>`;
}

// Doppelt gefiedert: Die Seitenzweige der Blattachse sind selbst wieder gefiedert
function doppeltGefiedert(cx, oben, unten, ys) {
  const zweig = fiederBlatt(0, -32, 0, [-9, -18, -27], 6, 2.8, true);
  const zweige = ys.map(y => [-72, 72].map(r => `<g transform="translate(${cx} ${y}) rotate(${r})">${zweig}</g>`).join("")).join("");
  return `${zweige}<g transform="translate(${cx} ${oben})">${zweig}</g><path d="M${cx} ${oben}V${unten}" stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"/>`;
}

// Gefingert: Alle Teilblättchen gehen von einem Punkt am Ende des Stiels aus
function gefingertesBlatt(cx, y, unten) {
  const finger = [-66, -33, 0, 33, 66].map(r => `<g transform="translate(${cx} ${y}) rotate(${r}) scale(.92)">
    <path d="M0 0C-5-14-15-38-11-54C-8-66 8-66 11-54C15-38 5-14 0 0Z" fill="#7ab55c" stroke="#4f8a3c" stroke-width="2.4"/>
    <path d="M0 0V-58" stroke="#4f8a3c" stroke-width="1.8" stroke-linecap="round"/></g>`).join("");
  return `${finger}<path d="M${cx} ${y}V${unten}" stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"/>`;
}

// Halbes Blatt, damit der Blattrand groß zu sehen ist: Mittelader bei cx, Rand rechts davon
function halbBlatt(cx, oben, unten, art, stiel) {
  const H = unten - oben, W = 62;
  const breite = t => W * Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(t, .85))), .8);
  const huelle = t => Math.pow(Math.max(0, Math.sin(Math.PI * t)), .5);
  const p = (t, o = 0) => `${(cx + breite(t) + o * huelle(t)).toFixed(1)} ${(oben + t * H).toFixed(1)}`;
  let d = `M${cx} ${oben}`;
  if (art === "ganzrandig" || art === "gebuchtet") {
    for (let i = 1; i <= 120; i++) { const t = i / 120; d += `L${p(t, art === "gebuchtet" ? 7 * Math.cos(2 * Math.PI * 5.5 * t) : 0)}`; }
  } else if (art === "gesaegt") { // kleine Zacken, die schräg zur Blattspitze zeigen
    const n = 15;
    for (let k = 0; k < n; k++) d += `L${p((k + .2) / n, 7)}L${p((k + 1) / n)}`;
  } else { // gezähnt: größere spitze Zähne mit runden Buchten dazwischen
    const n = 8;
    d += `L${p(.5 / n, 14)}`;
    for (let k = 1; k < n; k++) d += `Q${p(k / n, -14)} ${p((k + .5) / n, 14)}`;
    d += `L${p(1)}`;
  }
  const adern = [.22, .38, .54, .7, .85].map(t => `M${cx} ${(oben + t * H).toFixed(1)}L${(cx + .8 * breite(t - .1)).toFixed(1)} ${(oben + (t - .1) * H).toFixed(1)}`).join("");
  return `<path d="${d}Z" fill="#7ab55c" stroke="#4f8a3c" stroke-width="2" stroke-linejoin="round"/>
    <path d="${adern}" stroke="#4f8a3c" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M${cx} ${oben}V${unten + stiel}" stroke="#4f8a3c" stroke-width="3.5" stroke-linecap="round"/>`;
}

// Farnwedel: Fiederblättchen entlang einer gebogenen Mittelrippe (quadratische Kurve)
function frond(x0, y0, qx, qy, x1, y1, n, len) {
  let s = `<path d="M${x0} ${y0}Q${qx} ${qy} ${x1} ${y1}" stroke="#3d7a35" stroke-width="3" fill="none"/>`;
  for (let i = 1; i <= n; i++) {
    const t = .12 + .86 * i / n, u = 1 - t;
    const x = u * u * x0 + 2 * u * t * qx + t * t * x1, y = u * u * y0 + 2 * u * t * qy + t * t * y1;
    const a = Math.atan2(2 * u * (qy - y0) + 2 * t * (y1 - qy), 2 * u * (qx - x0) + 2 * t * (x1 - qx)) * 180 / Math.PI;
    const l = len * (1.1 - .7 * t);
    [-1, 1].forEach(side => s += `<ellipse cx="0" cy="${(side * l / 2).toFixed(1)}" rx="${(l / 5).toFixed(1)}" ry="${(l / 2).toFixed(1)}"
      transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(a + side * 30).toFixed(1)})" fill="#6aaa52"/>`);
  }
  return s;
}

const IMAGES = {
  // Baum: Krone mit Blüte und Frucht, Stamm, Wurzeln im Boden
  baum: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Teile eines Baumes">
    <rect width="400" height="260" fill="#eef6fb"/>
    <rect y="200" width="400" height="60" fill="#c9a77c"/><rect y="198" width="400" height="8" fill="#7cb860"/>
    <g stroke="#7a4f2c" stroke-width="5" stroke-linecap="round" fill="none">
      <path d="M200 204C180 220 160 230 130 246M200 204C222 220 240 228 270 244M200 206C204 225 196 238 200 254M186 214l-26 6M230 226l14 18"/></g>
    <path d="M188 204C190 170 190 140 192 110h16c2 30 2 60 4 94z" fill="#8a5a35"/>
    <path d="M196 140L160 112M204 132L240 106" stroke="#8a5a35" stroke-width="7" stroke-linecap="round"/>
    <g fill="#5fa04e"><circle cx="150" cy="80" r="44"/><circle cx="250" cy="80" r="44"/><circle cx="200" cy="58" r="52"/>
      <circle cx="172" cy="112" r="32"/><circle cx="228" cy="112" r="32"/></g>
    <g fill="#7ab55c"><circle cx="186" cy="44" r="22"/><circle cx="236" cy="66" r="18"/><circle cx="140" cy="96" r="16"/></g>
    ${[[160, 50], [126, 96], [176, 88]].map(([x, y]) => `<g transform="translate(${x} ${y})"><g fill="#ffffff" stroke="#e7a8b8" stroke-width="1.5">
      <circle cx="0" cy="-8" r="7"/><circle cx="8" cy="-2" r="7"/><circle cx="5" cy="7" r="7"/><circle cx="-5" cy="7" r="7"/><circle cx="-8" cy="-2" r="7"/></g>
      <circle r="4" fill="#f2c94c"/></g>`).join("")}
    ${[[268, 92], [232, 50], [282, 58]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="#9b5a2a" stroke="#6d3c18" stroke-width="2"/>
      <path d="M${x} ${y - 12}v-6" stroke="#4f8a3c" stroke-width="3"/>`).join("")}
  </svg>`,

  // Wurzelspitze: Wurzelhaare, Wachstumszone, Wurzelhaube
  wurzel: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wurzelspitze">
    <rect width="400" height="260" fill="#efe3cf"/>
    <g fill="#c9a77c" opacity=".5"><circle cx="60" cy="40" r="6"/><circle cx="330" cy="200" r="8"/><circle cx="90" cy="190" r="5"/><circle cx="350" cy="60" r="5"/><circle cx="120" cy="120" r="4"/></g>
    <g stroke="#d8c08f" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M180 30q-20-4-38 4M180 50q-24 2-44 14M180 70q-22 0-40 10M180 90q-20 4-34 16M180 110q-16 4-28 14"/>
      <path d="M240 30q20-4 38 4M240 50q24 2 44 14M240 70q22 0 40 10M240 90q20 4 34 16M240 110q16 4 28 14"/></g>
    <path d="M180 0V170Q180 205 196 222H224Q240 205 240 170V0z" fill="#ead9b0" stroke="#b9a173" stroke-width="2"/>
    <path d="M182 135H238V176Q238 200 224 214H196Q182 200 182 176z" fill="#f4ead2"/>
    <g stroke="#cdb789" stroke-width="1.5"><path d="M188 150h44M188 162h44M190 174h40M192 186h36"/></g>
    <path d="M190 206Q210 196 230 206Q226 238 210 248Q194 238 190 206z" fill="#8c6b45" stroke="#5f4529" stroke-width="2"/>
  </svg>`,

  // Baumstamm im Querschnitt: Kernholz, Splintholz, Kambium, Bast, Borke
  holz: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Querschnitt durch einen Baumstamm">
    <rect width="400" height="260" fill="#eef6fb"/>
    <path d="M160 8H360Q392 8 392 130T360 252H160z" fill="#5b3b22"/>
    <g stroke="#3f2815" stroke-width="3" fill="none" opacity=".7"><path d="M200 20q30 12 60 0M240 60q30 10 70 0M210 110q40 12 90 0M230 160q30 10 80 0M200 220q40 10 90 0M280 240q30-8 60 0"/></g>
    <circle cx="160" cy="130" r="122" fill="#5b3b22"/>
    <g stroke="#3f2815" stroke-width="2" fill="none"><path d="M58 70l8 6M44 128l10 0M62 196l8-6M150 12l0 9M250 52l-8 6M266 180l-8-4M150 248l0-9"/></g>
    <circle cx="160" cy="130" r="105" fill="#c98a4b"/>
    <circle cx="160" cy="130" r="93" fill="#9fc87a"/>
    <circle cx="160" cy="130" r="85" fill="#ecd29b"/>
    <g fill="none" stroke="#d2b06f" stroke-width="2"><circle cx="160" cy="130" r="58"/><circle cx="160" cy="130" r="66"/><circle cx="160" cy="130" r="74"/><circle cx="160" cy="130" r="80"/></g>
    <circle cx="160" cy="130" r="50" fill="#b9773f"/>
    <g fill="none" stroke="#9a5f2e" stroke-width="2"><circle cx="160" cy="130" r="12"/><circle cx="160" cy="130" r="22"/><circle cx="160" cy="130" r="31"/><circle cx="160" cy="130" r="41"/></g>
    <circle cx="160" cy="130" r="4" fill="#7a4a22"/>
  </svg>`,

  // Blatt: Blattfläche, Blattrand, Blattader, Blattstiel, Blattgrund
  blatt: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau eines Blattes">
    <rect width="400" height="260" fill="#eef6fb"/>
    <path d="M90 246H330" stroke="#8a5a35" stroke-width="10" stroke-linecap="round"/>
    <path d="M202 246Q210 236 210 228" stroke="#5a8a3c" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M210 230V168" stroke="#5a8a3c" stroke-width="5" stroke-linecap="round"/>
    <path d="M210 14C300 44 300 140 210 170C120 140 120 44 210 14Z" fill="#7ab55c" stroke="#4f8a3c" stroke-width="2.5"/>
    <g stroke="#4f8a3c" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M210 22V168"/><path d="M210 56L246 36M210 84L262 60M210 112L268 92M210 140L254 126"/>
      <path d="M210 56L174 36M210 84L158 60M210 112L152 92M210 140L166 126"/></g>
  </svg>`,

  // Einfache Blätter: Die inneren Spalten sitzen etwas tiefer, damit ihre Linien unter den äußeren Blättern durchlaufen
  blattformen: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acht einfache Blattformen">
    <rect width="400" height="260" fill="#eef6fb"/>
    ${blattUmriss(50, 94, BLATTFORM.herz, 12)}${blattUmriss(150, 112, BLATTFORM.lanzettlich, 14)}
    ${blattUmriss(250, 112, BLATTFORM.kreisrund, 14)}${blattUmriss(350, 94, BLATTFORM.gelappt, 12)}
    ${blattUmriss(50, 224, BLATTFORM.eifoermig, 10)}${blattUmriss(150, 242, BLATTFORM.dreieckig, 14)}
    ${blattUmriss(250, 242, BLATTFORM.elliptisch, 14)}${blattUmriss(350, 224, BLATTFORM.verkehrt, 10)}
  </svg>`,

  // Zusammengesetzte Blätter: unpaarig gefiedert, paarig gefiedert, doppelt gefiedert, gefingert
  blattformen2: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier zusammengesetzte Blattformen">
    <rect width="400" height="260" fill="#eef6fb"/>
    ${fiederBlatt(50, 46, 222, [78, 118, 158], 20, 9, true)}
    ${fiederBlatt(150, 46, 256, [52, 112, 172, 236], 20, 9, false)}
    ${doppeltGefiedert(248, 52, 256, [96, 146, 196, 240])}
    ${gefingertesBlatt(344, 92, 222)}
  </svg>`,

  // Blattränder als halbe Blätter: gezähnt, ganzrandig, gebuchtet, gesägt
  blattraender: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier verschiedene Blattränder">
    <rect width="400" height="260" fill="#eef6fb"/>
    ${halbBlatt(18, 8, 200, "gezaehnt", 14)}${halbBlatt(116, 30, 245, "ganzrandig", 11)}
    ${halbBlatt(216, 30, 245, "gebuchtet", 11)}${halbBlatt(316, 8, 200, "gesaegt", 14)}
  </svg>`,

  // Farn: Wedel, eingerollter junger Wedel, Sporenbehälter (Lupe auf der Blattunterseite), Wurzel
  farn: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau eines Farns">
    <rect width="400" height="260" fill="#eef6fb"/>
    <rect y="205" width="400" height="55" fill="#c9a77c"/><rect y="203" width="400" height="6" fill="#7cb860"/>
    <g stroke="#7a5a3a" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M190 208q-10 20-32 38M190 208q2 24-4 42M190 208q16 18 36 30M176 222l-14 4M200 226l12 8"/></g>
    ${frond(190, 206, 150, 120, 80, 36, 9, 34)}
    ${frond(192, 206, 250, 140, 290, 40, 8, 30)}
    <path d="M194 206C200 180 212 160 214 136" stroke="#3d7a35" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M214 136a12 12 0 1 0-12-12a7 7 0 0 0 7 7a3.5 3.5 0 0 0 0-7" stroke="#3d7a35" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M276 92L302 84" stroke="#2f2a22" stroke-width="2" stroke-dasharray="4 3"/>
    <circle cx="340" cy="78" r="44" fill="#ffffff" stroke="#2f2a22" stroke-width="2.5"/>
    <ellipse cx="340" cy="78" rx="18" ry="36" fill="#8fc070" stroke="#4f8a3c" stroke-width="2"/>
    <path d="M340 44V112" stroke="#4f8a3c" stroke-width="2"/>
    <g fill="#8a5a2a"><circle cx="332" cy="58" r="4"/><circle cx="348" cy="58" r="4"/><circle cx="331" cy="70" r="4"/><circle cx="349" cy="70" r="4"/>
      <circle cx="332" cy="82" r="4"/><circle cx="348" cy="82" r="4"/><circle cx="333" cy="94" r="4"/><circle cx="347" cy="94" r="4"/></g>
  </svg>`,

  // Pilz: Hut, Lamellen, Ring, Stiel und Mycel im Boden
  pilz: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aufbau eines Pilzes">
    <rect width="400" height="260" fill="#eef6fb"/>
    <rect y="205" width="400" height="55" fill="#a8835a"/><rect y="203" width="400" height="6" fill="#7cb860"/>
    <g stroke="#f6f1e4" stroke-width="2" fill="none" stroke-linecap="round" opacity=".95">
      <path d="M200 210C170 222 130 226 80 236M200 210C230 224 280 230 350 228M200 212C196 230 210 240 204 256M150 226q-10 14-30 22M260 228q20 10 50 22M110 232l-20 18M300 230q10 12 30 16M230 222q4 18-6 30M170 220q-6 16-20 28"/></g>
    <path d="M184 112V200Q184 210 200 210Q216 210 216 200V112z" fill="#f4ead2" stroke="#b9a77f" stroke-width="2"/>
    <path d="M184 128Q170 136 168 142Q200 150 232 142Q230 136 216 128z" fill="#efe6cf" stroke="#b9a77f" stroke-width="2"/>
    <path d="M114 98Q200 120 286 98Q270 116 200 116Q130 116 114 98z" fill="#efe1c0" stroke="#b9a77f" stroke-width="2"/>
    <g stroke="#c9b48a" stroke-width="1.5"><path d="M130 102l10 10M150 106l6 9M170 108l3 8M190 110v6M210 110v6M230 108l-3 8M250 106l-6 9M270 102l-10 10"/></g>
    <path d="M110 98C112 50 160 24 200 24S288 50 290 98Q200 116 110 98Z" fill="#b5713f" stroke="#7d4a24" stroke-width="2.5"/>
    <path d="M150 50q30-16 60-14" stroke="#d29a68" stroke-width="5" stroke-linecap="round" fill="none"/>
  </svg>`
};

// Motive pro Thema (viewBox 0 0 48 48, nur Linien in der Themenfarbe) für Kacheln und Überschriften
const TOPIC_ICONS = {
  baeume: `<circle cx="24" cy="18" r="12" /><path d="M24 30v13M17 43h14M24 35l-5-4M24 33l5-4" />`,
  laub: `<path d="M10 38C10 20 22 9 40 8c0 18-11 30-29 30z" /><path d="M10 38L32 16M19 29h8M24 24v-7" />`,
  nadel: `<path d="M24 5l-8 12h5l-8 11h6l-8 11h26l-8-11h6l-8-11h5z" /><path d="M24 39v5" />`,
  sporen: `<path d="M22 44c0-12 0-20 6-26a7 7 0 1 0-8-5 3.5 3.5 0 0 0 5 2" /><path d="M22 38l-7-3M22 31l-6-4M23 26l-5-5M22 38l7-1M23 31l6-2" />`,
  pilze: `<path d="M8 25c0-10 7-17 16-17s16 7 16 17z" /><path d="M19 25v14c0 3 10 3 10 0V25" /><circle cx="18" cy="17" r="1.6" /><circle cx="29" cy="15" r="1.6" />`,
  pilzleben: `<path d="M6 24h36l-5 17H11z" /><path d="M13 24c0-12 22-12 22 0" /><path d="M15 24c0-6 4-10 9-10s9 4 9 10" /><path d="M16 31h16M14 36h20" />`
};
