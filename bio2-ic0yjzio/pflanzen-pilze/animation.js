// ---------- Animationen am Ende (ohne Ton): „Waldboden“, passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// Bäume: Blätter fallen / Baum wächst und färbt sich herbstlich
// Sporenpflanzen: Sporen steigen auf / Farnwedel wachsen, danach Sporen
// Pilze: Pilze sprießen aus dem Boden / Hexenring mit Sporenwolke
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

// ---- Formen (Mittelpunkt bzw. Fußpunkt bei 0,0) ----
const AUTUMN = ["#e8a33d", "#d0533f", "#e0b100", "#9aa83a", "#c46a2b"];
const SPORE = ["#8a6d3b", "#a8873f", "#6f8f3a", "#b39b5e"];
function shLeaf(L, c = pickOf(AUTUMN)) {
  const g = L.el(L.svg, "g", {});
  L.el(g, "path", { d: "M0-14C10-9 10 7 0 14C-10 7-10-9 0-14z", fill: c });
  L.el(g, "path", { d: "M0-12V19", stroke: "rgba(0,0,0,.28)", "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" });
  return g;
}
function shNeedle(L) { return L.el(L.svg, "path", { d: "M0-10V10", stroke: pickOf(["#3d7a35", "#5a8f3c"]), "stroke-width": 2.4, "stroke-linecap": "round" }); }
const shFoliage = L => Math.random() < .8 ? shLeaf(L) : shNeedle(L);
function shSpore(L, c = pickOf(SPORE)) { return L.el(L.svg, "circle", { r: rnd(2, 4.5), fill: c, opacity: .85 }); }
function shMush(L, red = Math.random() < .5, parent = L.svg) {
  const g = L.el(parent, "g", {});
  L.el(g, "path", { d: "M-7 0h14l-2-20h-10z", fill: "#f4ead2", stroke: "#b9a77f", "stroke-width": 1.5 });
  L.el(g, "path", { d: "M-22-17C-20-40 20-40 22-17z", fill: red ? "#d0533f" : "#b5713f", stroke: red ? "#a33a2a" : "#7d4a24", "stroke-width": 1.5 });
  if (red) [[-10, -26], [3, -32], [12, -23]].forEach(([cx, cy]) => L.el(g, "circle", { cx, cy, r: 3, fill: "#fff" }));
  return g;
}

// ---- Bewegungen ----
function fall(L, n, make, delay = 0) { // schaukelnd herabfallen
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(.8, 1.5) * L.k, w = rnd(30, 70), r = rnd(-60, 60);
    make(L).animate([{ transform: T(x, -40, r, s), opacity: 0 }, { opacity: 1, offset: .08 },
      { transform: T(x + w, L.H * .35, r + 90, s), offset: .35 }, { transform: T(x - w, L.H * .7, r + 200, s), offset: .7 },
      { transform: T(x, L.H + 40, r + 300, s), opacity: .9 }], { duration: rnd(2800, 4200), delay: delay + rnd(0, 1800), fill: "both" });
  }
}
function rise(L, n, make, delay = 0, from = L.H + 20) { // aufsteigen und dabei leicht pendeln
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(.8, 1.6) * L.k;
    make(L).animate([{ transform: T(x, from, 0, s), opacity: 0 }, { opacity: 1, offset: .15 },
      { transform: T(x + rnd(-40, 40), from * .5, 0, s), offset: .5 }, { transform: T(x + rnd(-60, 60), -40, 0, s), opacity: 0 }],
      { duration: rnd(2400, 3800), delay: delay + rnd(0, 1800), easing: "ease-out", fill: "both" });
  }
}
function sprout(L, n, delay = 0) { // Pilze schießen am unteren Rand aus dem Boden
  const order = [...Array(n).keys()].sort(() => Math.random() - .5);
  order.forEach((i, j) => {
    const x = (i + .5) / n * L.W + rnd(-12, 12), y = L.H - rnd(2, 18), s = rnd(.9, 1.4) * L.k;
    shMush(L).animate([{ transform: T(x, y, 0, 0) }, { transform: T(x, y, 0, s * 1.15), offset: .1 }, { transform: T(x, y, 0, s), offset: .15 },
      { transform: T(x, y, 0, s), offset: .88 }, { transform: T(x, y + 8, 0, 0) }], { duration: 4200 - j * 60, delay: delay + j * 110, easing: "ease-out", fill: "both" });
  });
}
function puff(L, x, y, n, delay) { // kleine Sporenwolke an einer Stelle
  for (let i = 0; i < n; i++) {
    const a = rnd(-Math.PI * .85, -Math.PI * .15), d = rnd(40, 120) * L.k;
    shSpore(L).animate([{ transform: T(x, y), opacity: 0 }, { opacity: .9, offset: .1 },
      { transform: T(x + Math.cos(a) * d, y + Math.sin(a) * d - 30), opacity: 0 }], { duration: rnd(1200, 2000), delay: delay + rnd(0, 300), easing: "ease-out", fill: "both" });
  }
}
function fadeOut(node, ms) { node.animate([{ opacity: 1 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, fill: "both" }); }
const pop = (node, delay, dur = 450) => node.animate([{ transform: "scale(0)" }, { transform: "scale(1.15)", offset: .7 }, { transform: "scale(1)" }], { duration: dur, delay, easing: "ease-out", fill: "both" });
const drawLine = (node, delay, dur) => { node.setAttribute("pathLength", 1); node.setAttribute("stroke-dasharray", 1);
  node.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: dur, delay, easing: "ease-in-out", fill: "both" }); };
const at = (L, x, y, s) => L.el(L.svg, "g", { transform: `translate(${x} ${y}) scale(${s})` });

// ---- Große Bilder für „alles richtig“ ----
// Baum wächst, Krone färbt sich herbstlich, Blätter fallen
function heroTree(L, ms) {
  const s = Math.min(L.H / 330, L.W / 300), g = at(L, L.W / 2, L.H + 4, s);
  const trunk = L.el(g, "g", {});
  L.el(trunk, "path", { d: "M-14 0C-12-50-11-100-9-140h18c2 40 3 90 5 140z", fill: "#8a5a35" });
  L.el(trunk, "path", { d: "M-3-110L-46-160M4-120L48-170M0-140V-190", stroke: "#8a5a35", "stroke-width": 9, "stroke-linecap": "round" });
  trunk.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 900, easing: "ease-out", fill: "both" });
  [[0, -205, 70], [-60, -170, 52], [60, -170, 52], [-34, -238, 46], [34, -238, 46], [0, -150, 44]].forEach(([x, y, r], i) => {
    const green = i % 2 ? "#5fa04e" : "#74b25a"; // Farbe über currentColor, weil Chrome "fill" nicht animiert
    const c = L.el(L.el(g, "g", { transform: `translate(${x} ${y})` }), "circle", { r, fill: "currentColor", style: `color:${green}` });
    pop(c, 800 + i * 110);
    c.animate([{ color: green }, { color: pickOf(AUTUMN) }], { duration: 900, delay: 2300 + i * 80, fill: "forwards" });
  });
  fadeOut(g, ms);
  fall(L, 30, shLeaf, 2900);
}
// Farnwedel wachsen von unten nach oben, danach steigen Sporen auf
function heroFern(L, ms) {
  const s = Math.min(L.H / 300, L.W / 340);
  [-.28, 0, .28].forEach((dx, f) => {
    const g = at(L, L.W / 2 + dx * L.W, L.H + 6, s * (f === 1 ? 1.15 : .9));
    const sx = (f === 0 ? -1 : f === 2 ? 1 : .3) * 70;
    const stem = L.el(g, "path", { d: `M0 0Q${sx} -120 ${sx * .6} -240`, stroke: "#3d7a35", "stroke-width": 5, fill: "none", "stroke-linecap": "round" });
    drawLine(stem, f * 250, 1100);
    for (let i = 1; i <= 9; i++) {
      const t = .15 + .8 * i / 9, u = 1 - t, x = 2 * u * t * sx + t * t * sx * .6, y = -2 * u * t * 120 - t * t * 240, l = 46 * (1.1 - .7 * t);
      [-1, 1].forEach(sd => {
        const p = L.el(L.el(g, "g", { transform: `translate(${x} ${y}) rotate(${sd * 62})` }), "ellipse", { cx: 0, cy: -l / 2, rx: l / 5, ry: l / 2, fill: "#6aaa52" });
        pop(p, f * 250 + 300 + i * 90, 380);
      });
    }
    fadeOut(g, ms);
  });
  rise(L, 50, shSpore, 2200, L.H * .75);
}
// Hexenring: Pilze wachsen in einem Kreis aus dem Boden
function heroRing(L, ms) {
  const n = 12, cx = L.W / 2, cy = L.H * .7, rx = Math.min(L.W * .38, 380), ry = L.H * .13, items = [];
  for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; items.push({ i, x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry, sc: 1 + .35 * Math.sin(a) }); }
  items.sort((a, b) => a.y - b.y).forEach(m => {
    const g = at(L, m.x, m.y, m.sc * L.k * 1.3);
    pop(shMush(L, m.i % 3 === 0, g), 300 + m.i * 160, 500);
    fadeOut(g, ms);
  });
  puff(L, cx, cy - 30, 26, 2400);
}

const FX = {
  done: { baeume: L => fall(L, 28, shFoliage), sporen: L => rise(L, 60, shSpore), pilze: L => sprout(L, Math.round(L.W / 70)),
          all: L => { fall(L, 12, shLeaf); rise(L, 25, shSpore); sprout(L, Math.round(L.W / 120)); } },
  perfect: { baeume: heroTree, sporen: heroFern, pilze: heroRing,
             all: (L, ms) => { heroTree(L, ms); sprout(L, Math.round(L.W / 90), 600); } }
};
// Aufgeteilte Themen verwenden die Animation ihres Folien-Themas (Bäume bzw. Pilze).
for (const kind of ["done", "perfect"]) {
  FX[kind].laub = FX[kind].nadel = FX[kind].baeume;
  FX[kind].pilzleben = FX[kind].pilze;
}

function fxEnd(kind, topic) {
  const ms = kind === "perfect" ? 6500 : 5200, L = fxLayer(ms);
  if (L) (FX[kind][topic] || FX[kind].all)(L, ms);
}
