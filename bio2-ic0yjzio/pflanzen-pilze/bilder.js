// Bilder für die Beschriftungsaufgaben (Fragetyp "label")
// Alle Bilder sind selbst gezeichnete SVGs mit viewBox 0 0 400 260.
// Die Marker-Koordinaten in questions.js beziehen sich auf diese 400 × 260 Einheiten.

// Blatt mit verschiedenem Blattrand (Spitze oben): Abweichung vom glatten Rand je nach Art
function leafEdge(cx, kind) {
  const frac = x => x - Math.floor(x);
  const off = {
    gesaegt: t => 5 * frac(t * 22 / (2 * Math.PI)),
    gezaehnt: t => 9 * (1 - Math.abs(2 * frac(t * 12 / (2 * Math.PI)) - 1)),
    ganz: () => 0,
    gebuchtet: t => 12 * Math.abs(Math.sin(t * 6)) - 6
  }[kind];
  let d = "";
  for (let i = 0; i <= 240; i++) {
    const t = i / 240 * 2 * Math.PI, w = Math.sin(t) * (1 - .35 * Math.cos(t)), o = Math.sin(t / 2) * off(t);
    d += (i ? "L" : "M") + (cx + (34 + o) * w).toFixed(1) + " " + (150 - (88 + o) * Math.cos(t)).toFixed(1);
  }
  return `<path d="${d}Z" fill="#7ab55c" stroke="#4f8a3c" stroke-width="2"/>
    <path d="M${cx} 70V250" stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"/>`;
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

  // Blattformen: herzförmig, gelappt, gefiedert, gefingert
  blattformen: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier verschiedene Blattformen">
    <rect width="400" height="260" fill="#eef6fb"/>
    <g stroke="#d9d1c2" stroke-width="1.5" stroke-dasharray="4 4"><path d="M100 10V250M200 10V250M300 10V250"/></g>
    <g fill="#7ab55c" stroke="#4f8a3c" stroke-width="2" stroke-linejoin="round">
      <path d="M50 64C88 100 98 162 74 200C64 212 52 206 50 174C48 206 36 212 26 200C2 162 12 100 50 64Z"/>
      <path d="M150 58L160 92L186 76L178 112L204 120L180 140L190 170L158 160L150 196L142 160L110 170L120 140L96 120L122 112L114 76L140 92Z"/>
      <ellipse cx="250" cy="70" rx="8" ry="15"/>
      <g transform="translate(250 104)"><ellipse cx="-20" cy="0" rx="19" ry="8" transform="rotate(-20 -20 0)"/><ellipse cx="20" cy="0" rx="19" ry="8" transform="rotate(20 20 0)"/></g>
      <g transform="translate(250 136)"><ellipse cx="-20" cy="0" rx="19" ry="8" transform="rotate(-20 -20 0)"/><ellipse cx="20" cy="0" rx="19" ry="8" transform="rotate(20 20 0)"/></g>
      <g transform="translate(250 168)"><ellipse cx="-20" cy="0" rx="19" ry="8" transform="rotate(-20 -20 0)"/><ellipse cx="20" cy="0" rx="19" ry="8" transform="rotate(20 20 0)"/></g>
      <g transform="translate(250 200)"><ellipse cx="-20" cy="0" rx="19" ry="8" transform="rotate(-20 -20 0)"/><ellipse cx="20" cy="0" rx="19" ry="8" transform="rotate(20 20 0)"/></g>
      <g transform="translate(350 168)"><ellipse cx="0" cy="-40" rx="9" ry="32"/><ellipse cx="0" cy="-38" rx="9" ry="30" transform="rotate(36)"/>
        <ellipse cx="0" cy="-38" rx="9" ry="30" transform="rotate(-36)"/><ellipse cx="0" cy="-30" rx="8" ry="24" transform="rotate(72)"/>
        <ellipse cx="0" cy="-30" rx="8" ry="24" transform="rotate(-72)"/></g></g>
    <g stroke="#4f8a3c" stroke-width="3" stroke-linecap="round"><path d="M50 176V245M150 196V245M250 84V245M350 168V245"/></g>
  </svg>`,

  // Blattränder: gesägt, gezähnt, ganzrandig, gebuchtet
  blattraender: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vier verschiedene Blattränder">
    <rect width="400" height="260" fill="#eef6fb"/>
    <g stroke="#d9d1c2" stroke-width="1.5" stroke-dasharray="4 4"><path d="M100 10V250M200 10V250M300 10V250"/></g>
    ${leafEdge(50, "gesaegt")}${leafEdge(150, "gezaehnt")}${leafEdge(250, "ganz")}${leafEdge(350, "gebuchtet")}
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
  sporen: `<path d="M22 44c0-12 0-20 6-26a7 7 0 1 0-8-5 3.5 3.5 0 0 0 5 2" /><path d="M22 38l-7-3M22 31l-6-4M23 26l-5-5M22 38l7-1M23 31l6-2" />`,
  pilze: `<path d="M8 25c0-10 7-17 16-17s16 7 16 17z" /><path d="M19 25v14c0 3 10 3 10 0V25" /><circle cx="18" cy="17" r="1.6" /><circle cx="29" cy="15" r="1.6" />`
};
