// ---------- Animationen am Ende (ohne Ton), passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Sinneswelt“, eine Animation pro Thema (fertig / alles richtig):
// A. Ebenen: Zellen und Organe steigen auf / Zelle → Gewebe → Organ → Organsystem → Mensch baut sich auf
// B. Nerven: Nervenimpulse flitzen nach oben / Nervennetz wächst von der Mitte aus und leuchtet auf
// C. Auge: zwinkernde Augen steigen auf / großes Auge öffnet sich, schaut umher und zwinkert
// D. Ohr: Schallwellen und Noten / Schallwellen aus der Mitte, Noten fliegen nach außen
// E. Haut, Nase, Zunge: Duftwolken steigen auf / Geschmackstropfen (süß, salzig …) regnen herab
// Gemischt: Sinnes-Symbole steigen auf / regnen herab
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const T = (x, y, r = 0, s = 1) => `translate(${x}px,${y}px) rotate(${r}deg) scale(${s})`;

function fxLayer(ms) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  document.querySelectorAll(".fx").forEach(e => e.remove());
  const W = innerWidth, H = innerHeight;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "fx"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("aria-hidden", "true");
  document.body.appendChild(svg);
  setTimeout(() => svg.remove(), ms);
  const el = (parent, tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  return { svg, W, H, k: Math.min(2, Math.max(1, W / 420)), el };
}

// ---- Formen (Mittelpunkt bei 0,0; ca. 44 Einheiten breit) ----
const SKIN = { fill: "#f6c9ae", stroke: "#b9785a", "stroke-width": 2.2, "stroke-linejoin": "round" };
function shCell(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-20 0C-20-12-10-19 2-18C14-17 21-9 20 2C19 12 10 19-1 18C-12 17-20 11-20 0z", fill: "#f8d3dc", stroke: "#c2577a", "stroke-width": 2.2 });
  L.el(g, "circle", { cx: -2, cy: -1, r: 7, fill: "#b493d4", stroke: "#7b56a8", "stroke-width": 1.5 });
  return g;
}
function shTissue(L, p = L.svg) {
  const g = L.el(p, "g", {});
  [[0, 0], ...[...Array(6).keys()].map(i => [Math.cos(i * Math.PI / 3) * 14, Math.sin(i * Math.PI / 3) * 14])].forEach(([x, y]) => {
    L.el(g, "circle", { cx: x, cy: y, r: 7.5, fill: "#f8d3dc", stroke: "#c2577a", "stroke-width": 1.6 });
    L.el(g, "circle", { cx: x - 1, cy: y - 1, r: 2.4, fill: "#7b56a8" });
  });
  return g;
}
function shHeart(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M0 18C-22 4-22-14-10-16C-4-17 0-12 0-8C0-12 4-17 10-16C22-14 22 4 0 18z", fill: "#e0565a", stroke: "#a83a3a", "stroke-width": 2.2 });
  L.el(g, "path", { d: "M-10-9c-4 2-6 6-5 10", stroke: "#f59a9a", "stroke-width": 2, fill: "none", "stroke-linecap": "round" });
  return g;
}
function shSystem(L, p = L.svg) { // Herz mit Blutgefäßen (Blutkreislauf)
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M3-2C10-24 26-20 23-4C21 10 12 16 4 10", stroke: "#d04a4a", "stroke-width": 3, fill: "none", "stroke-linecap": "round" });
  L.el(g, "path", { d: "M-3-2C-10-24-26-20-23-4C-21 10-12 16-4 10", stroke: "#4a6ad0", "stroke-width": 3, fill: "none", "stroke-linecap": "round" });
  L.el(g, "path", { d: "M0 12C-13 4-13-7-6-8C-3-9 0-6 0-4C0-6 3-9 6-8C13-7 13 4 0 12z", fill: "#e0565a", stroke: "#a83a3a", "stroke-width": 1.8 });
  return g;
}
function shPerson(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M0-6V9M-12 0L0-3L12 0M0 9L-8 21M0 9L8 21", stroke: "#2f2a22", "stroke-width": 3.5, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" });
  L.el(g, "circle", { cy: -14, r: 7, ...SKIN });
  return g;
}
function shImpulse(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "circle", { r: 10, fill: "#ffe680", opacity: .45 });
  L.el(g, "circle", { r: 4.5, fill: "#f5b700" });
  return g;
}
function shEye(L, p = L.svg, blink = true) {
  const g = L.el(p, "g", {}), lid = L.el(g, "g", {});
  L.el(lid, "path", { d: "M-12-8l-3-5M0-10v-6M12-8l3-5", stroke: "#2f2a22", "stroke-width": 2, "stroke-linecap": "round" });
  L.el(lid, "path", { d: "M-22 0C-14-12 14-12 22 0C14 12-14 12-22 0z", fill: "#ffffff", stroke: "#2f2a22", "stroke-width": 2.2 });
  const iris = L.el(lid, "g", {});
  L.el(iris, "circle", { r: 7, fill: "#3a86b0" });
  L.el(iris, "circle", { r: 3.2, fill: "#1f2a33" });
  L.el(iris, "circle", { cx: 2, cy: -2, r: 1.5, fill: "#ffffff" });
  if (blink) lid.animate([{ transform: "scale(1,1)" }, { transform: "scale(1,1)", offset: .45 }, { transform: "scale(1,.08)", offset: .5 },
    { transform: "scale(1,1)", offset: .55 }, { transform: "scale(1,1)" }], { duration: rnd(1300, 2100), iterations: 3, delay: rnd(0, 600) });
  g.lid = lid; g.iris = iris;
  return g;
}
function shEar(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M4-20C-10-20-18-10-16 2C-15 10-8 12-8 18C-8 23 0 24 3 19C6 14 15 10 15-3C15-13 11-20 4-20z", ...SKIN });
  L.el(g, "path", { d: "M3-12C-4-12-8-6-6 0C-5 4 0 5 1 9", stroke: "#b9785a", "stroke-width": 2, fill: "none", "stroke-linecap": "round" });
  return g;
}
function shNose(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-3-18C-3-6-6 2-11 8C-13 12-9 15-5 13C-3 16 3 16 5 13C9 15 13 12 11 8C6 2 3-6 3-18z", ...SKIN });
  L.el(g, "path", { d: "M-6 11a2 1.5 0 0 0 3 0M3 11a2 1.5 0 0 0 3 0", stroke: "#b9785a", "stroke-width": 1.6, fill: "none" });
  return g;
}
function shTongue(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-20-4C-10-12 10-12 20-4C10 14-10 14-20-4z", fill: "#e06a6a", stroke: "#a83a3a", "stroke-width": 2 });
  L.el(g, "path", { d: "M-11 1C-8 13 8 13 11 1C6-3-6-3-11 1z", fill: "#f59ab0" });
  L.el(g, "path", { d: "M0 1v8", stroke: "#c2577a", "stroke-width": 1.6, "stroke-linecap": "round" });
  return g;
}
function shHand(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-10 5V-9a3 3 0 0 1 6 0v9M-4-1v-13a3 3 0 0 1 6 0v13M2-1v-11a3 3 0 0 1 6 0v12M8 1v-6a3 3 0 0 1 6 0v12c0 8-6 14-13 14h-2c-5 0-8-3-11-7l-5-8a3 3 0 0 1 5-3l2 3",
    stroke: "#b9785a", "stroke-width": 3, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" });
  return g;
}
const NOTE_COLORS = ["#3f9a6f", "#3a86b0", "#7a62b8", "#d08a2a", "#c2577a"];
function shNote(L, p = L.svg) {
  const g = L.el(p, "g", {}), c = pickOf(NOTE_COLORS);
  if (Math.random() < .5) {
    L.el(g, "ellipse", { cx: -4, cy: 10, rx: 7, ry: 5, fill: c, transform: "rotate(-20 -4 10)" });
    L.el(g, "path", { d: "M3 9V-16c6 2 10 6 8 13", stroke: c, "stroke-width": 3, fill: "none", "stroke-linecap": "round" });
  } else { // Doppelnote
    L.el(g, "ellipse", { cx: -12, cy: 12, rx: 6, ry: 4.5, fill: c, transform: "rotate(-20 -12 12)" });
    L.el(g, "ellipse", { cx: 10, cy: 8, rx: 6, ry: 4.5, fill: c, transform: "rotate(-20 10 8)" });
    L.el(g, "path", { d: "M-6 11V-12L16-16V7", stroke: c, "stroke-width": 3, fill: "none", "stroke-linejoin": "round" });
    L.el(g, "path", { d: "M-6-12L16-16", stroke: c, "stroke-width": 6 });
  }
  return g;
}
function shScent(L, p = L.svg) { // Duftwolke: drei geschwungene Linien
  const g = L.el(p, "g", {}), c = pickOf(["#c2577a", "#b493d4", "#8fc36a", "#f0a04b"]);
  [-9, 0, 9].forEach((x, i) => L.el(g, "path", { d: `M${x} ${18 - i * 3}c-7-6 7-11 0-17s7-11 0-17`, stroke: c, "stroke-width": 3, fill: "none", "stroke-linecap": "round", opacity: .85 }));
  return g;
}
const TASTES = [["süß", "#f59ab0"], ["salzig", "#8fb8d8"], ["sauer", "#e6d24a"], ["bitter", "#9a7a5a"], ["umami", "#e0884a"]];
function shDrop(L, p = L.svg, n = Math.floor(Math.random() * 5)) {
  const g = L.el(p, "g", {}), [word, c] = TASTES[n % 5];
  L.el(g, "path", { d: "M0-18C6-8 13-1 13 6a13 13 0 0 1-26 0C-13-1-6-8 0-18z", fill: c, stroke: "#2f2a22", "stroke-width": 1.8 });
  L.el(g, "path", { d: "M-6 3a6 6 0 0 0 3 8", stroke: "#ffffff", "stroke-width": 2.2, fill: "none", "stroke-linecap": "round", opacity: .8 });
  const t = L.el(g, "text", { y: 34, "text-anchor": "middle", "font-size": 13, "font-weight": 800, fill: "#2f2a22",
    "font-family": "system-ui, sans-serif", stroke: "#ffffff", "stroke-width": 3, "paint-order": "stroke" });
  t.textContent = word;
  return g;
}
const shLevel = (L, p) => pickOf([shCell, shCell, shTissue, shHeart])(L, p);
const shSense = (L, p) => pickOf([shEye, shEar, shNose, shTongue, shHand])(L, p);
const shSmell = (L, p) => pickOf([shScent, shScent, shScent, shNose, shTongue, shHand])(L, p);

// ---- Hilfen ----
function fadeOut(node, ms) { node.animate([{ opacity: 1 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, fill: "both" }); }
function rise(L, n, make, delay = 0) { // aufsteigen und dabei pendeln
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(.8, 1.5) * L.k, r = rnd(-25, 25);
    make(L).animate([{ transform: T(x, L.H + 40, r, s), opacity: 0 }, { opacity: 1, offset: .12 },
      { transform: T(x + rnd(-40, 40), L.H * .5, r + rnd(-30, 30), s), offset: .5 }, { transform: T(x + rnd(-60, 60), -50, r, s), opacity: 0 }],
      { duration: rnd(2600, 4000), delay: delay + rnd(0, 1800), easing: "ease-out", fill: "both" });
  }
}
function rain(L, n, make, delay = 0, spread = 2600) { // von oben herabregnen und dabei schaukeln
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(1, 1.5) * L.k, r = rnd(-20, 20);
    make(L).animate([{ transform: T(x, -60, r, s), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + rnd(-30, 30), L.H * .5, -r, s), offset: .5 }, { transform: T(x + rnd(-40, 40), L.H + 60, r, s), opacity: .9 }],
      { duration: rnd(2400, 3400), delay: delay + rnd(0, spread), easing: "ease-in", fill: "both" });
  }
}
function burst(L, x, y, n, delay, colors = ["#f5b700", "#ffd96a", "#f0a04b"]) { // Funken fliegen nach außen
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), d = rnd(80, 260) * L.k;
    L.el(L.svg, "circle", { r: rnd(2.5, 5) * L.k, fill: pickOf(colors) }).animate([{ transform: T(x, y), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + Math.cos(a) * d, y + Math.sin(a) * d), opacity: 0 }], { duration: rnd(1100, 1800), delay: delay + rnd(0, 250), easing: "ease-out", fill: "both" });
  }
}
function waves(L, x, y, n, delay, every, size, color = "#3f9a6f") { // Schallwellen: Ringe breiten sich aus
  const holder = L.el(L.svg, "g", { transform: `translate(${x} ${y})` });
  for (let i = 0; i < n; i++)
    L.el(holder, "circle", { r: 10, fill: "none", stroke: color, "stroke-width": 4 * L.k, "vector-effect": "non-scaling-stroke" }).animate(
      [{ transform: "scale(1)", opacity: 0 }, { opacity: .9, offset: .1 }, { transform: `scale(${size / 10})`, opacity: 0 }],
      { duration: 1600, delay: delay + i * every, easing: "ease-out", fill: "both" });
}
function zap(L, n) { // Nervenimpulse flitzen im Zickzack nach oben
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(.7, 1.3) * L.k, steps = 6, dx = rnd(20, 45) * L.k, kf = [];
    for (let j = 0; j <= steps; j++) kf.push({ transform: T(x + (j % 2 ? dx : -dx), L.H + 30 - j / steps * (L.H + 60), 0, s), opacity: j === 0 || j === steps ? 0 : 1 });
    shImpulse(L).animate(kf, { duration: rnd(1500, 2400), delay: rnd(0, 2600), easing: "linear", fill: "both" });
  }
}

// ---- Große Bilder für „alles richtig“ ----
// A: Die Stufen erscheinen nacheinander – Zelle → Gewebe → Organ → Organsystem → Mensch
function heroLevels(L, ms) {
  const steps = [[shCell, "Zelle"], [shTissue, "Gewebe"], [shHeart, "Organ"], [shSystem, "Organsystem"], [shPerson, "Mensch"]];
  const col = L.W < 560 && L.H > L.W; // Handy hochkant: untereinander
  const pos = i => col ? [L.W / 2, L.H * (i + 1) / 6.2] : [L.W * (i + .5) / 5, L.H / 2];
  const s = col ? Math.min(1.6, L.H / 6.2 / 82) : Math.min(2, L.W / 5 / 80);
  const all = L.el(L.svg, "g", {});
  steps.forEach(([make, word], i) => {
    const [x, y] = pos(i), t = 300 + i * 750;
    const holder = L.el(L.el(all, "g", { transform: `translate(${x} ${y})` }), "g", {});
    L.el(holder, "circle", { r: 30 * s, fill: "#ffffff", stroke: "#d08a2a", "stroke-width": 2.5, opacity: .95 });
    const shape = make(L, holder);
    shape.setAttribute("transform", `scale(${s})`);
    const label = L.el(holder, "text", { y: col ? 0 : 30 * s + 22, x: col ? 30 * s + 12 : 0, "text-anchor": col ? "start" : "middle", "dominant-baseline": col ? "middle" : "auto",
      "font-size": Math.round(14 + 2 * L.k), "font-weight": 800, fill: "#2f2a22", "font-family": "system-ui, sans-serif", stroke: "#ffffff", "stroke-width": 4, "paint-order": "stroke" });
    label.textContent = word;
    holder.animate([{ transform: "scale(0)", opacity: 0 }, { transform: "scale(1.2)", opacity: 1, offset: .3 }, { transform: "scale(1)", opacity: 1 }],
      { duration: 550, delay: t, easing: "ease-out", fill: "both" });
    if (i) { // Pfeil von der vorigen Stufe
      const [px, py] = pos(i - 1), r = 30 * s + 6;
      const d = col ? `M${x} ${py + r}V${y - r}m-6-8l6 8 6-8` : `M${px + r} ${y}H${x - r}m-8-6l8 6-8 6`;
      L.el(all, "path", { d, stroke: "#d08a2a", "stroke-width": 3, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" })
        .animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: t - 150, fill: "both" });
    }
  });
  const [lx, ly] = pos(4);
  burst(L, lx, ly, 34, 300 + 4 * 750 + 400, ["#f5b700", "#d08a2a", "#c2577a", "#ffd96a"]);
  fadeOut(all, ms);
}
// B: Ein Nervennetz wächst von der Mitte aus, dann flitzen Impulse durch alle Verbindungen
function heroNet(L, ms) {
  const cx = L.W / 2, cy = L.H / 2, far = Math.hypot(L.W, L.H) * .55, nodes = [{ x: cx, y: cy }];
  for (let i = 0; i < 46; i++) { const a = rnd(0, Math.PI * 2), r = Math.sqrt(Math.random()) * far; nodes.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }); }
  nodes.forEach(p => p.d = Math.hypot(p.x - cx, p.y - cy));
  nodes.sort((a, b) => a.d - b.d);
  nodes.forEach((p, i) => { // jeder Punkt hängt am nächsten Punkt, der näher an der Mitte liegt
    let bd = Infinity;
    for (let j = 0; j < i; j++) { const dd = Math.hypot(p.x - nodes[j].x, p.y - nodes[j].y); if (dd < bd) { bd = dd; p.par = nodes[j]; } }
  });
  const maxD = nodes[nodes.length - 1].d || 1, t0 = p => 200 + p.d / maxD * 2200, flash = 2800;
  const net = L.el(L.svg, "g", {});
  nodes.forEach(p => {
    if (!p.par) return;
    const line = L.el(net, "path", { d: `M${p.par.x} ${p.par.y}L${p.x} ${p.y}`, stroke: "#7a62b8", "stroke-width": 3 * L.k, "stroke-linecap": "round",
      fill: "none", pathLength: 1, "stroke-dasharray": 1, "stroke-dashoffset": 1 });
    line.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: Math.max(80, t0(p) - t0(p.par)), delay: t0(p.par), fill: "forwards" });
    for (let w = 0; w < 3; w++) { // Impulswellen
      const at = flash + w * 900 + p.par.d / maxD * 700;
      line.animate([{ stroke: "#7a62b8" }, { stroke: "#f5b700", offset: .4 }, { stroke: "#7a62b8" }], { duration: 500, delay: at });
      L.el(net, "circle", { r: 4.5 * L.k, fill: "#ffd94a" }).animate([{ transform: T(p.par.x, p.par.y), opacity: 0 }, { opacity: 1, offset: .2 },
        { transform: T(p.x, p.y), opacity: 0 }], { duration: 450, delay: at, fill: "both" });
    }
  });
  nodes.forEach((p, i) => {
    const holder = L.el(net, "g", { transform: `translate(${p.x} ${p.y})` });
    const dot = L.el(holder, "circle", { r: (i ? rnd(3.5, 6) : 13) * L.k, fill: "#c5b8ee", stroke: "#7a62b8", "stroke-width": 2 });
    dot.animate([{ transform: "scale(0)" }, { transform: "scale(1.3)", offset: .6 }, { transform: "scale(1)" }], { duration: 350, delay: t0(p), fill: "both" });
    for (let w = 0; w < 3; w++)
      dot.animate([{ fill: "#c5b8ee" }, { fill: "#ffd94a", offset: .3 }, { fill: "#c5b8ee" }], { duration: 600, delay: flash + w * 900 + p.d / maxD * 700 + 200 });
  });
  burst(L, cx, cy, 30, flash + 1900, ["#ffd94a", "#c5b8ee", "#7a62b8"]);
  fadeOut(net, ms);
}
// C: Ein großes Auge öffnet sich, schaut nach links und rechts und zwinkert – danach regnen kleine Augen
function heroEye(L, ms) {
  const cx = L.W / 2, cy = L.H * .45, s = Math.min(L.W * .7, L.H * .55) / 44;
  const eye = shEye(L, L.svg, false);
  eye.setAttribute("transform", `translate(${cx} ${cy}) scale(${s})`);
  eye.lid.animate([{ transform: "scale(1,0)" }, { transform: "scale(1,1)", offset: .08 }, { transform: "scale(1,1)", offset: .5 },
    { transform: "scale(1,.05)", offset: .53 }, { transform: "scale(1,1)", offset: .56 }, { transform: "scale(1,1)", offset: .62 },
    { transform: "scale(1,.05)", offset: .65 }, { transform: "scale(1,1)", offset: .68 }, { transform: "scale(1,1)" }], { duration: ms, easing: "ease-in-out", fill: "both" });
  eye.iris.animate([{ transform: "translate(0,0)" }, { transform: "translate(0,0)", offset: .14 }, { transform: "translate(-7px,0)", offset: .22 },
    { transform: "translate(-7px,0)", offset: .28 }, { transform: "translate(7px,0)", offset: .36 }, { transform: "translate(7px,0)", offset: .42 },
    { transform: "translate(0,-2px)", offset: .48 }, { transform: "translate(0,0)" }], { duration: ms, easing: "ease-in-out", fill: "both" });
  fadeOut(eye, ms);
  burst(L, cx, cy, 30, ms * .7, ["#3a86b0", "#8fc3e0", "#f5b700"]);
  rain(L, 22, shEye, ms * .68, 1200);
}
// D: Starke Schallwellen aus der Mitte, ein großes Ohr pulsiert, Noten fliegen nach außen
function heroSound(L, ms) {
  const cx = L.W / 2, cy = L.H / 2, big = Math.hypot(L.W, L.H) * .6;
  waves(L, cx, cy, 10, 200, 420, big);
  const ear = shEar(L), s = 3.2 * L.k;
  ear.animate([{ transform: T(cx, cy, 0, 0) }, { transform: T(cx, cy, 0, s * 1.15), offset: .08 }, { transform: T(cx, cy, 0, s), offset: .12 },
    { transform: T(cx, cy, 0, s * 1.08), offset: .4 }, { transform: T(cx, cy, 0, s), offset: .6 }, { transform: T(cx, cy, 0, s * 1.08), offset: .8 }, { transform: T(cx, cy, 0, s) }],
    { duration: ms, easing: "ease-in-out", fill: "both" });
  fadeOut(ear, ms);
  for (let i = 0; i < 30; i++) {
    const a = i / 30 * Math.PI * 2 * 1.5, d = big * rnd(.6, .9), sc = rnd(1.1, 1.6) * L.k, r = rnd(-30, 30);
    shNote(L).animate([{ transform: T(cx, cy, 0, .2), opacity: 0 }, { opacity: 1, offset: .15 },
      { transform: T(cx + Math.cos(a + .6) * d * .5, cy + Math.sin(a + .6) * d * .5, r, sc), offset: .55 },
      { transform: T(cx + Math.cos(a + 1) * d, cy + Math.sin(a + 1) * d, -r, sc), opacity: 0 }],
      { duration: 2600, delay: 600 + i * 110, easing: "ease-out", fill: "both" });
  }
}
// E: Geschmackstropfen mit den fünf Geschmacksrichtungen regnen herab, Duftwolken steigen auf
function heroTaste(L, ms) {
  for (let i = 0; i < 24; i++) {
    const x = (i % 8 + rnd(.1, .9)) / 8 * L.W, s = rnd(.9, 1.3) * L.k, r = rnd(-15, 15);
    shDrop(L, L.svg, i).animate([{ transform: T(x, -70, r, s), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + rnd(-20, 20), L.H * .5, -r, s), offset: .5 }, { transform: T(x + rnd(-30, 30), L.H + 70, r, s), opacity: .9 }],
      { duration: rnd(2600, 3400), delay: Math.floor(i / 8) * 1100 + rnd(0, 700), easing: "ease-in", fill: "both" });
  }
  rise(L, 10, shScent, 400);
}
const FX = {
  done: { ebenen: L => rise(L, 30, shLevel), nerven: L => zap(L, 34), auge: L => rise(L, 24, shEye),
    ohr: L => { for (let i = 0; i < 6; i++) waves(L, rnd(0, L.W), rnd(L.H * .2, L.H * .8), 3, rnd(0, 2400), 300, rnd(70, 140) * L.k, pickOf(NOTE_COLORS)); rise(L, 24, shNote); },
    haut: L => rise(L, 28, shSmell), all: L => rise(L, 30, shSense) },
  perfect: { ebenen: heroLevels, nerven: heroNet, auge: heroEye, ohr: heroSound, haut: heroTaste,
    all: (L, ms) => { rain(L, 36, shSense, 0, 3200); [800, 2200, 3600].forEach(t => burst(L, rnd(L.W * .2, L.W * .8), rnd(L.H * .2, L.H * .6), 26, t, NOTE_COLORS)); } }
};

function fxEnd(kind, topic) {
  const ms = kind === "perfect" ? 6500 : 5200, L = fxLayer(ms);
  if (L) (FX[kind][topic] || FX[kind].all)(L, ms);
}
