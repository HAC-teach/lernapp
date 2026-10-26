// ---------- Animationen am Ende (ohne Ton), passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Gewebe & Schwarm“, passend zum Thema:
// fertig: Zellen, Mikroben oder Organellen steigen wie Blasen auf
// alles richtig: Pflanzengewebe wächst von der Mitte aus über den Bildschirm (Zellen) / Mikroben-Schwarm dreht eine Runde (Mikroorganismen)
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
function shAnimal(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-21 0C-21-12-11-20 2-19C14-18 22-9 21 2C20 13 11 20-1 19C-13 18-21 11-21 0z", fill: "#f8d3dc", stroke: "#c2577a", "stroke-width": 2.2 });
  L.el(g, "circle", { cx: -2, cy: -1, r: 7, fill: "#b493d4", stroke: "#7b56a8", "stroke-width": 1.5 });
  L.el(g, "ellipse", { cx: 10, cy: 9, rx: 4.5, ry: 2.2, fill: "#f0a04b", transform: "rotate(-25 10 9)" });
  L.el(g, "ellipse", { cx: -11, cy: 9, rx: 4, ry: 2, fill: "#f0a04b", transform: "rotate(20 -11 9)" });
  return g;
}
function shPlant(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "rect", { x: -22, y: -16, width: 44, height: 32, rx: 4, fill: "#e6f4d2", stroke: "#5f8f35", "stroke-width": 3.2 });
  L.el(g, "ellipse", { cx: 5, cy: 2, rx: 11, ry: 8, fill: "#cfe6f7" });
  L.el(g, "circle", { cx: -12, cy: -6, r: 4.5, fill: "#b493d4" });
  [[-13, 8], [-4, -10], [16, -8], [16, 9], [4, 12]].forEach(([cx, cy]) => L.el(g, "ellipse", { cx, cy, rx: 3.4, ry: 2, fill: "#4f9a3a" }));
  return g;
}
function shBact(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-20 0c-4-5-8 5-12 0s-8 5-12 0", stroke: "#9a8a5a", "stroke-width": 1.8, fill: "none", "stroke-linecap": "round" });
  L.el(g, "rect", { x: -20, y: -8, width: 40, height: 16, rx: 8, fill: "#f2d27a", stroke: "#c49a32", "stroke-width": 2 });
  L.el(g, "path", { d: "M-10 0c2-5 4 5 6 0s4 5 6 0s4 5 6 0", stroke: "#3a6fc4", "stroke-width": 1.8, fill: "none", "stroke-linecap": "round" });
  return g;
}
function shParam(L, p = L.svg) { // Pantoffeltierchen mit Wimpern
  const g = L.el(p, "g", {});
  let cil = "";
  for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, x = Math.cos(a) * 24, y = Math.sin(a) * 10; cil += `M${x.toFixed(1)} ${y.toFixed(1)}l${(Math.cos(a) * 4).toFixed(1)} ${(Math.sin(a) * 4).toFixed(1)}`; }
  L.el(g, "path", { d: cil, stroke: "#a08a5a", "stroke-width": 1.2 });
  L.el(g, "ellipse", { rx: 24, ry: 10, fill: "#eadfc4", stroke: "#a08a5a", "stroke-width": 1.8 });
  L.el(g, "circle", { cx: 2, cy: 0, r: 4, fill: "#b493d4" });
  L.el(g, "circle", { cx: -12, cy: -2, r: 2.5, fill: "#cfe6f7" }); L.el(g, "circle", { cx: 14, cy: 2, r: 2.5, fill: "#cfe6f7" });
  return g;
}
function shMito(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "ellipse", { rx: 12, ry: 6, fill: "#f0a04b", stroke: "#c4702a", "stroke-width": 1.5 });
  L.el(g, "path", { d: "M-8 0l2-3.5 2 7 2-7 2 7 2-7 2 3.5", stroke: "#fde3c0", "stroke-width": 1.4, fill: "none" });
  return g;
}
function shChloro(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "ellipse", { rx: 11, ry: 6, fill: "#4f9a3a", stroke: "#3a7a2a", "stroke-width": 1.2 });
  L.el(g, "path", { d: "M-6-2h12M-7 1.5h14", stroke: "#8cc96e", "stroke-width": 1.3 });
  return g;
}
function shNucleus(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "circle", { r: 9, fill: "#b493d4", stroke: "#7b56a8", "stroke-width": 1.5 });
  L.el(g, "circle", { cx: 2, cy: -2, r: 3, fill: "#7b56a8" });
  return g;
}
const shCell = (L, p) => Math.random() < .5 ? shAnimal(L, p) : shPlant(L, p);
const shMicrobe = (L, p) => Math.random() < .6 ? shBact(L, p) : shParam(L, p);
const shOrganelle = (L, p) => pickOf([shMito, shMito, shChloro, shNucleus])(L, p);
const shAny = (L, p) => pickOf([shCell, shMicrobe, shOrganelle])(L, p);

// ---- Hilfen ----
function fadeOut(node, ms) { node.animate([{ opacity: 1 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, fill: "both" }); }
function rise(L, n, make, delay = 0) { // wie Blasen aufsteigen und dabei pendeln
  for (let i = 0; i < n; i++) {
    const x = rnd(0, L.W), s = rnd(.8, 1.5) * L.k, r = rnd(-30, 30);
    make(L).animate([{ transform: T(x, L.H + 30, r, s), opacity: 0 }, { opacity: 1, offset: .12 },
      { transform: T(x + rnd(-40, 40), L.H * .5, r + rnd(-40, 40), s), offset: .5 }, { transform: T(x + rnd(-60, 60), -40, r, s), opacity: 0 }],
      { duration: rnd(2600, 4000), delay: delay + rnd(0, 1800), easing: "ease-out", fill: "both" });
  }
}
function burst(L, x, y, n, delay, colors = ["#f5b700", "#ffd96a", "#f0a04b"]) { // Funken fliegen nach außen
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), d = rnd(80, 260) * L.k;
    L.el(L.svg, "circle", { r: rnd(2.5, 5) * L.k, fill: pickOf(colors) }).animate([{ transform: T(x, y), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + Math.cos(a) * d, y + Math.sin(a) * d), opacity: 0 }], { duration: rnd(1100, 1800), delay: delay + rnd(0, 250), easing: "ease-out", fill: "both" });
  }
}

// ---- Große Bilder für „alles richtig“ ----
// Wabenförmiges Pflanzengewebe wächst von der Mitte aus über den Bildschirm
function heroTissue(L, ms) {
  const R = 30 * L.k, dx = R * Math.sqrt(3), dy = R * 1.5, cx = L.W / 2, cy = L.H / 2, cells = [];
  for (let row = -1; row * dy < L.H + R; row++)
    for (let col = -1; col * dx < L.W + R; col++) {
      const x = col * dx + (row % 2 ? dx / 2 : 0), y = row * dy;
      cells.push({ x, y, d: Math.hypot(x - cx, y - cy) });
    }
  const maxD = Math.max(...cells.map(c => c.d));
  const hex = [...Array(6).keys()].map(i => { const a = (i * 60 + 30) * Math.PI / 180; return `${(Math.cos(a) * R * .96).toFixed(1)},${(Math.sin(a) * R * .96).toFixed(1)}`; }).join(" ");
  cells.forEach(c => {
    const t = 200 + c.d / maxD * 2000;
    const holder = L.el(L.svg, "g", { transform: `translate(${c.x} ${c.y})` });
    const g = L.el(holder, "g", {});
    L.el(g, "polygon", { points: hex, fill: "#e6f4d2", stroke: "#5f8f35", "stroke-width": 3, opacity: .92 });
    L.el(g, "circle", { cx: -R * .3, cy: -R * .2, r: R * .16, fill: "#b493d4" });
    [[R * .3, -R * .35], [R * .38, R * .2], [-R * .1, R * .45]].forEach(([x, y]) => L.el(g, "ellipse", { cx: x, cy: y, rx: R * .14, ry: R * .08, fill: "#4f9a3a" }));
    g.animate([{ transform: "scale(0)" }, { transform: "scale(1.12)", offset: .12 }, { transform: "scale(1)", offset: .2 },
      { transform: "scale(1)", offset: .55 }, { transform: "scale(1.1)", offset: .62 }, { transform: "scale(1)", offset: .7 }, { transform: "scale(1)" }],
      { duration: ms - t, delay: t, easing: "ease-out", fill: "both" });
    fadeOut(holder, ms);
  });
}
// Schwarm: Mikroben schwimmen von allen Seiten zu einem Kreis, drehen eine Runde und sausen davon
function heroSwarm(L, ms) {
  const n = 36, cx = L.W / 2, cy = L.H / 2, rad = Math.min(L.W, L.H) * .3, far = Math.hypot(L.W, L.H) * .7;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2, a2 = a + Math.PI * .6, s = rnd(1.1, 1.6) * L.k, from = a + rnd(-.6, .6);
    const deg = x => x * 180 / Math.PI;
    const p = (ang, r) => [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r];
    const [sx, sy] = p(from, far), [ax, ay] = p(a, rad), [bx, by] = p(a2, rad), [ex, ey] = p(a2, far);
    const make = i % 3 === 0 ? shParam : shBact;
    make(L).animate([{ transform: T(sx, sy, deg(from) + 180, s) }, { transform: T(ax, ay, deg(a) + 90, s), offset: .35 },
      { transform: T(bx, by, deg(a2) + 90, s), offset: .68 }, { transform: T(ex, ey, deg(a2), s) }],
      { duration: ms - 400, delay: rnd(0, 300), easing: "ease-in-out", fill: "both" });
  }
  burst(L, cx, cy, 30, 4200, ["#c5b8ee", "#7a62b8", "#f2d27a"]);
}
const FX = {
  done: { zellen: L => rise(L, 32, shCell), mikro: L => rise(L, 30, shMicrobe), all: L => rise(L, 34, shAny) },
  perfect: { zellen: heroTissue, mikro: heroSwarm, all: (L, ms) => { heroTissue(L, ms); rise(L, 14, shMicrobe, 2600); } }
};

function fxEnd(kind, topic) {
  const ms = kind === "perfect" ? 6500 : 5200, L = fxLayer(ms);
  if (L) (FX[kind][topic] || FX[kind].all)(L, ms);
}
