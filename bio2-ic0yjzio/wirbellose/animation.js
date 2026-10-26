// ---------- Animationen am Ende (ohne Ton), passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Krabbelwelt“ für alle Themen und gemischt: Ameisenstraße, Marienkäfer krabbeln, Schmetterlinge flattern /
// Marienkäfer krabbeln zur Mitte, klappen die Deckflügel auf und fliegen davon, dazwischen Schmetterlinge.
// „Bienenstock“ für V. Honigbiene und Bienenstaat und VI. Bienentanz und Wildbienen:
// Bienen summen über Blumen / Bienenwabe wächst, eine Biene tanzt den Schwänzeltanz (8), dann schwärmen alle aus.
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const T = (x, y, r = 0, s = 1) => `translate(${x}px,${y}px) rotate(${r}deg) scale(${s})`;
const TF = (x, y, s, flip) => `translate(${x}px,${y}px) scale(${flip ? -s : s},${s})`; // flip = nach links schauen
const deg = (dx, dy) => Math.atan2(dy, dx) * 180 / Math.PI;

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
function shButterfly(L, p = L.svg) { // von oben, Kopf nach oben
  const g = L.el(p, "g", {}), [c, c2] = pickOf([["#e8873a", "#f7d070"], ["#3a86b0", "#a8d8f0"], ["#c2577a", "#f5b8cc"], ["#7a62b8", "#d2c4f0"]]), dur = rnd(260, 360);
  [1, -1].forEach(sx => {
    const w = L.el(g, "g", { transform: `scale(${sx} 1)` });
    L.el(w, "path", { d: "M1-3C6-20 22-22 22-9C22-1 12 2 1 0z", fill: c, stroke: "#2f2a22", "stroke-width": 1.5 });
    L.el(w, "path", { d: "M1 1C10 2 18 8 14 15C10 19 3 12 1 4z", fill: c, stroke: "#2f2a22", "stroke-width": 1.5 });
    L.el(w, "circle", { cx: 13, cy: -10, r: 3.5, fill: c2 });
    w.animate([{ transform: `scale(${sx},1)` }, { transform: `scale(${sx * .2},1)` }, { transform: `scale(${sx},1)` }], { duration: dur, iterations: Infinity });
  });
  L.el(g, "ellipse", { cy: 1, rx: 2.4, ry: 11, fill: "#2f2a22" });
  L.el(g, "path", { d: "M-1-9C-3-15-6-18-8-19M1-9C3-15 6-18 8-19", stroke: "#2f2a22", "stroke-width": 1.4, fill: "none", "stroke-linecap": "round" });
  return g;
}
function shBee(L, p = L.svg) { // Honigbiene von der Seite, schaut nach rechts
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-21 0l-6 2 6 2z", fill: "#3a2a1a" });
  L.el(g, "ellipse", { cx: -10, cy: 2, rx: 12, ry: 8, fill: "#f2c230", stroke: "#3a2a1a", "stroke-width": 1.6 });
  L.el(g, "path", { d: "M-15-4v12M-8-5.5v15", stroke: "#3a2a1a", "stroke-width": 3 });
  L.el(g, "path", { d: "M2 6l-2 6M5 6v7M8 6l2 6", stroke: "#3a2a1a", "stroke-width": 1.4, "stroke-linecap": "round" });
  L.el(g, "circle", { cx: 5, cy: 0, r: 6.5, fill: "#a0723a", stroke: "#3a2a1a", "stroke-width": 1.6 });
  L.el(g, "circle", { cx: 15, cy: 1, r: 5, fill: "#4a3420", stroke: "#3a2a1a", "stroke-width": 1.4 });
  L.el(g, "ellipse", { cx: 16, cy: -.5, rx: 2, ry: 3, fill: "#1a1410" });
  L.el(g, "path", { d: "M16-3l3-6 4-1", stroke: "#3a2a1a", "stroke-width": 1.4, fill: "none", "stroke-linecap": "round" });
  const w = L.el(L.el(g, "g", { transform: "translate(4 -5)" }), "path", { d: "M-1 0C-6-13 4-17 8-13C8-7 4-3 1 0z", fill: "#dcecf6", "fill-opacity": .85, stroke: "#5a7a8a", "stroke-width": 1.3 });
  w.animate([{ transform: "scale(1,1)" }, { transform: "scale(1,-.5)" }, { transform: "scale(1,1)" }], { duration: 110, iterations: Infinity });
  return g;
}
function shFlower(L, p = L.svg) { // Fuß bei 0,0
  const g = L.el(p, "g", {}), c = pickOf(["#f5d04a", "#c2577a", "#7a62b8", "#ffffff", "#e8873a"]);
  L.el(g, "path", { d: "M0 0V-30M0-12c-6-2-10-6-10-10 5 0 9 3 10 8", stroke: "#4d7d2c", "stroke-width": 2.4, fill: "#7cb342", "stroke-linecap": "round" });
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; L.el(g, "circle", { cx: Math.cos(a) * 6, cy: -36 + Math.sin(a) * 6, r: 5, fill: c, stroke: "#2f2a22", "stroke-width": 1.2 }); }
  L.el(g, "circle", { cy: -36, r: 3.5, fill: "#e0a020", stroke: "#2f2a22", "stroke-width": 1.2 });
  return g;
}
function shAnt(L, p = L.svg, load) { // Rote Waldameise von der Seite, schaut nach rechts; load = trägt ein Blattstück
  const g = L.el(p, "g", {}), a = { stroke: "#2a1a12", "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" };
  const l1 = L.el(g, "path", { d: "M-3 2l-6 7M1 2v8M4 2l6 7", ...a }), l2 = L.el(g, "path", { d: "M-3 2l-3 8M1 2l3 8M4 2l2 8", ...a });
  l1.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], { duration: 240, iterations: Infinity, easing: "steps(2)" });
  l2.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], { duration: 240, iterations: Infinity, easing: "steps(2)" });
  L.el(g, "ellipse", { cx: -12, rx: 8, ry: 6, fill: "#3a1e14", stroke: "#1a0e08", "stroke-width": 1.2 });
  L.el(g, "circle", { cx: -4, cy: 1, r: 1.8, fill: "#6a2a18" });
  L.el(g, "ellipse", { cx: 1, rx: 5, ry: 3.2, fill: "#b0482a", stroke: "#5a2010", "stroke-width": 1.2 });
  L.el(g, "circle", { cx: 9, cy: -1, r: 4, fill: "#5a2418", stroke: "#2a0e08", "stroke-width": 1.2 });
  L.el(g, "path", { d: "M10-4l2-6 5 2", ...a, "stroke-width": 1.3 });
  if (load) L.el(g, "path", { d: "M8-6C10-18 22-20 26-14C22-8 14-4 8-6z", fill: "#7cb342", stroke: "#4d7d2c", "stroke-width": 1.4 });
  return g;
}
function shLadybug(L, p = L.svg) { // Marienkäfer von oben, Kopf nach oben; g.open(delay) klappt die Deckflügel auf
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-8-4l-8-5M-9 2h-9M-8 8l-8 6M8-4l8-5M9 2h9M8 8l8 6", stroke: "#1f1a14", "stroke-width": 2, "stroke-linecap": "round" });
  const hw = L.el(g, "g", { opacity: 0 });
  [-1, 1].forEach(s => L.el(hw, "path", { d: `M${2 * s}-4C${14 * s}-16 ${30 * s}-8 ${26 * s} 6C${22 * s} 14 ${10 * s} 10 ${2 * s} 2z`, fill: "#e4eef6", "fill-opacity": .85, stroke: "#6a7a8a", "stroke-width": 1.2 }));
  L.el(g, "ellipse", { cy: 3, rx: 11, ry: 12.5, fill: "#1f1a14" });
  const covers = [-1, 1].map(s => {
    const c = L.el(L.el(g, "g", { transform: "translate(0 -8)" }), "g", {});
    L.el(c, "path", { d: `M0 0C${9 * s} 0 ${12 * s} 6 ${12 * s} 12C${12 * s} 19 ${6 * s} 23 0 23z`, fill: "#d8352a", stroke: "#1f1a14", "stroke-width": 1.4 });
    L.el(c, "circle", { cx: 6 * s, cy: 7, r: 2.3, fill: "#1f1a14" });
    L.el(c, "circle", { cx: 5 * s, cy: 16, r: 2, fill: "#1f1a14" });
    return [c, s];
  });
  L.el(g, "path", { d: "M-7-8C-7-14 7-14 7-8z", fill: "#1f1a14" });
  L.el(g, "circle", { cx: -4, cy: -10, r: 1.5, fill: "#ffffff" }); L.el(g, "circle", { cx: 4, cy: -10, r: 1.5, fill: "#ffffff" });
  L.el(g, "circle", { cy: -15, r: 4, fill: "#1f1a14" });
  L.el(g, "path", { d: "M-2-18l-3-4M2-18l3-4", stroke: "#1f1a14", "stroke-width": 1.4, "stroke-linecap": "round" });
  g.open = delay => {
    covers.forEach(([c, s]) => c.animate([{ transform: "rotate(0deg)" }, { transform: `rotate(${-s * 42}deg)` }], { duration: 450, delay, easing: "ease-out", fill: "both" }));
    hw.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: delay + 250, fill: "both" });
    hw.animate([{ transform: "scale(1,1)" }, { transform: "scale(.6,1)" }, { transform: "scale(1,1)" }], { duration: 120, delay: delay + 550, iterations: Infinity });
  };
  return g;
}

// ---- Hilfen ----
function fadeOut(node, ms) { node.animate([{ opacity: 1 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, fill: "both" }); }
function burst(L, x, y, n, delay, colors) { // Punkte fliegen nach außen
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), d = rnd(80, 260) * L.k;
    L.el(L.svg, "circle", { r: rnd(2.5, 5) * L.k, fill: pickOf(colors) }).animate([{ transform: T(x, y), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + Math.cos(a) * d, y + Math.sin(a) * d), opacity: 0 }], { duration: rnd(1100, 1800), delay: delay + rnd(0, 250), easing: "ease-out", fill: "both" });
  }
}
// Text mit weißem Rand
function word(L, p, x, y, text, anchor = "middle") {
  const t = L.el(p, "text", { x, y, "text-anchor": anchor, "font-size": Math.round(13 + 2 * L.k), "font-weight": 800, fill: "#2f2a22",
    "font-family": "system-ui, sans-serif", stroke: "#ffffff", "stroke-width": 4, "paint-order": "stroke", "dominant-baseline": "middle" });
  t.textContent = text;
  return t;
}
const pop = (node, delay, dur = 500) => node.animate([{ transform: "scale(0)" }, { transform: "scale(1.12)", offset: .7 }, { transform: "scale(1)" }],
  { duration: dur, delay, easing: "ease-out", fill: "both" });
function flyOut(L, make, n, x, y, delay, spin) { // Tiere fliegen vom Punkt x,y nach allen Seiten aus dem Bild
  const far = Math.hypot(L.W, L.H) * .6;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2 + rnd(-.2, .2), s = rnd(1, 1.4) * L.k, ang = deg(Math.cos(a), Math.sin(a)) + spin;
    make(L).animate([{ transform: T(x, y, ang, 0) }, { transform: T(x + Math.cos(a) * 40, y + Math.sin(a) * 40, ang, s), offset: .15 },
      { transform: T(x + Math.cos(a) * far, y + Math.sin(a) * far, ang, s) }], { duration: rnd(1600, 2200), delay: delay + rnd(0, 300), easing: "ease-in", fill: "both" });
  }
}

// ---- „Bienenstock“ ----
function buzz(L, n) { // Bienen fliegen im Zickzack über Blumen
  for (let i = 0; i < n; i++) {
    const flip = Math.random() < .5, s = rnd(1, 1.4) * L.k, y0 = rnd(.1, .7) * L.H, amp = rnd(20, 50) * L.k, ph = rnd(0, 6), kf = [];
    for (let j = 0; j <= 12; j++) {
      const t = j / 12, x = flip ? L.W + 50 - t * (L.W + 100) : -50 + t * (L.W + 100);
      kf.push({ transform: TF(x, y0 + Math.sin(t * Math.PI * 5 + ph) * amp, s, flip) });
    }
    shBee(L).animate(kf, { duration: rnd(2600, 3400), delay: rnd(0, 1800), fill: "both" });
  }
  const m = Math.round(L.W / (60 * L.k));
  for (let i = 0; i < m; i++) {
    const f = L.el(L.el(L.svg, "g", { transform: `translate(${(i + rnd(.2, .8)) * L.W / m} ${L.H + 4}) scale(${rnd(1, 1.4) * L.k})` }), "g", {});
    shFlower(L, f); pop(f, rnd(0, 900), 600); fadeOut(f, 5200);
  }
}
function heroHive(L, ms) { // Bienenwabe wächst, eine Biene tanzt den Schwänzeltanz (8), dann fliegen alle aus
  const cx = L.W / 2, cy = L.H / 2, a = 20 * L.k, Rmax = Math.min(L.W, L.H) * .44, all = L.el(L.svg, "g", {}), n = Math.ceil(Rmax / a) + 1;
  const hex = r => [...Array(6).keys()].map(i => { const t = Math.PI / 6 + i * Math.PI / 3; return `${Math.cos(t) * r},${Math.sin(t) * r}`; }).join(" ");
  for (let q = -n; q <= n; q++) for (let w = -n; w <= n; w++) {
    const x = a * Math.sqrt(3) * (q + w / 2), y = a * 1.5 * w, d = Math.hypot(x, y);
    if (d > Rmax) continue;
    const c = L.el(L.el(all, "g", { transform: `translate(${cx + x} ${cy + y})` }), "g", {});
    L.el(c, "polygon", { points: hex(a * .96), fill: "#fff6d8", stroke: "#c9932a", "stroke-width": 2.5 });
    if (Math.random() < .6) L.el(c, "polygon", { points: hex(a * .7), fill: "#f2c230", opacity: .9 })
      .animate([{ opacity: 0 }, { opacity: .9 }], { duration: 500, delay: 1500 + d / Rmax * 1200, fill: "both" });
    pop(c, 100 + d / Rmax * 1300, 450);
  }
  // Schwänzeltanz: gerade nach oben (schwänzeln), Bogen rechts zurück, wieder gerade hoch, Bogen links zurück
  const A = 46 * L.k, kf = [], pts = [];
  for (let j = 0; j <= 16; j++) pts.push([Math.sin(j * Math.PI / 2) * 5 * L.k, A - 2 * A * j / 16]);
  for (let j = 1; j <= 12; j++) { const t = -Math.PI / 2 + j / 12 * Math.PI; pts.push([Math.cos(t) * A, Math.sin(t) * A]); }
  for (let j = 1; j <= 16; j++) pts.push([Math.sin(j * Math.PI / 2) * 5 * L.k, A - 2 * A * j / 16]);
  for (let j = 1; j <= 12; j++) { const t = -Math.PI / 2 - j / 12 * Math.PI; pts.push([Math.cos(t) * A, Math.sin(t) * A]); }
  pts.forEach(([x, y], i) => {
    const [px, py] = pts[Math.max(0, i - 1)], [nx, ny] = pts[Math.min(pts.length - 1, i + 1)];
    const run = i <= 16 || (i > 28 && i <= 44); // auf der geraden Strecke schaut die Biene nach oben
    kf.push({ transform: T(cx + x, cy + y, run ? -90 : deg(nx - px, ny - py), 1.6 * L.k) });
  });
  const dancer = shBee(L);
  dancer.animate(kf, { duration: 2600, delay: 1800, iterations: 1, fill: "both" });
  dancer.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 1600, fill: "backwards" });
  const lbl = word(L, all, cx, cy - A - 26 * L.k, "Schwänzeltanz");
  lbl.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 1900, fill: "both" });
  fadeOut(all, ms); fadeOut(dancer, 4400);
  flyOut(L, shBee, 12, cx, cy, 4300, 0);
}

// ---- „Krabbelwelt“ ----
function flutter(L, n, wait = 1500) { // Schmetterlinge flattern von unten nach oben
  for (let i = 0; i < n; i++) {
    const s = rnd(.9, 1.4) * L.k, x0 = rnd(.05, .95) * L.W, amp = rnd(30, 70) * L.k, ph = rnd(0, 6), kf = [];
    for (let j = 0; j <= 10; j++) {
      const t = j / 10;
      kf.push({ transform: T(x0 + Math.sin(t * Math.PI * 3 + ph) * amp, L.H + 40 - t * (L.H + 80), Math.cos(t * Math.PI * 3 + ph) * 25, s) });
    }
    shButterfly(L).animate(kf, { duration: rnd(3000, 3600), delay: rnd(0, wait), easing: "ease-in-out", fill: "both" });
  }
}
function crawl(L) { // Ameisenstraße am unteren Rand, Marienkäfer krabbeln quer durchs Bild, Schmetterlinge flattern hoch
  flutter(L, 5);
  const s = 1.3 * L.k, y = L.H - 26 * L.k, dur = 3000, speed = (L.W + 80) / dur, gap = 46 * s / speed, n = Math.min(16, Math.floor((4900 - dur) / gap) + 1);
  for (let i = 0; i < n; i++)
    shAnt(L, L.svg, i % 3 === 1).animate([{ transform: TF(-40, y, s, false) }, { transform: TF(L.W + 40, y, s, false) }], { duration: dur, delay: i * gap, fill: "both" });
  for (let i = 0; i < 4; i++) {
    const x0 = rnd(.1, .9) * L.W, x1 = rnd(.1, .9) * L.W, y0 = -30, y1 = L.H * .8, up = i % 2, k = rnd(1.2, 1.6) * L.k;
    const [a, b] = up ? [[x1, y1], [x0, y0]] : [[x0, y0], [x1, y1]], r = deg(b[0] - a[0], b[1] - a[1]) + 90;
    const bug = shLadybug(L);
    bug.animate([{ transform: T(a[0], a[1], r, k), opacity: 1 }, { opacity: 1, offset: .85 }, { transform: T(b[0], b[1], r, k), opacity: 0 }],
      { duration: rnd(3200, 4000), delay: rnd(0, 1200), fill: "both" });
  }
}
function heroLadybugs(L, ms) { // Marienkäfer krabbeln zur Mitte, klappen die Deckflügel auf und fliegen davon
  const cx = L.W / 2, cy = L.H / 2, n = 8, R = Math.min(L.W, L.H) * .26, s = 1.8 * L.k, far = Math.hypot(L.W, L.H) * .7;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, sx = cx + Math.cos(a) * far, sy = cy + Math.sin(a) * far;
    const inn = deg(x - sx, y - sy) + 90, out = deg(Math.cos(a), Math.sin(a) - 1.2) + 90, ex = x + Math.cos(a) * far * .4, ey = y - far;
    const bug = shLadybug(L), t0 = i * 120;
    bug.animate([{ transform: T(sx, sy, inn, s) }, { transform: T(x, y, inn, s), offset: .3 }, { transform: T(x, y, inn, s), offset: .45 },
      { transform: T(x, y, out, s), offset: .55 }, { transform: T(x, y - 14 * L.k, out, s * 1.15), offset: .62 }, { transform: T(ex, ey, out, s * 1.15) }],
      { duration: 5400, delay: t0, easing: "ease-in-out", fill: "both" });
    bug.open(t0 + 5400 * .5);
  }
  const lbl = L.el(L.el(L.svg, "g", { transform: `translate(${cx} ${cy})` }), "g", {});
  word(L, lbl, 0, 0, "Abflug!");
  pop(lbl, 2500, 500); fadeOut(lbl, ms);
  burst(L, cx, cy, 30, 3300, ["#d8352a", "#1f1a14", "#f5d04a", "#7cb342"]);
  flutter(L, 6, 2800);
}

const FX = {
  done: L => crawl(L),
  perfect: heroLadybugs,
  // Themen rund um die Honigbiene: „Bienenstock“
  biene: { done: L => buzz(L, 10), perfect: heroHive }
};
FX.bienenstaat = FX.bienentanz = FX.biene;

function fxEnd(kind, topic) {
  const ms = kind === "perfect" ? 6500 : 5200, L = fxLayer(ms);
  if (L) (FX[topic] || FX)[kind](L, ms);
}
