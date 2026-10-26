// ---------- Animationen am Ende (ohne Ton), passend zum Thema ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Waldtiere“, gleich für alle Themen (fertig / alles richtig):
// Eichhörnchen hüpfen, Vögel fliegen vorbei /
// Nahrungskreislauf baut sich auf: Baum → Eichhörnchen → Marder → Uhu → Pilz → zurück zum Baum
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const T = (x, y, r = 0, s = 1) => `translate(${x}px,${y}px) rotate(${r}deg) scale(${s})`;
const TF = (x, y, s, flip) => `translate(${x}px,${y}px) scale(${flip ? -s : s},${s})`; // flip = nach links schauen

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
function shTree(L, p = L.svg, h = 100) { // Laubbaum, Fuß bei 0,0, Höhe h
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: `M${-h * .06} 0V${-h * .55}h${h * .12}V0z`, fill: "#7a5532", stroke: "#4e341c", "stroke-width": 2 });
  const c = pickOf(["#6aa84f", "#5f9a3a", "#7cb342"]);
  [[0, -h * .72, h * .26], [-h * .18, -h * .56, h * .18], [h * .18, -h * .56, h * .18]].forEach(([x, y, r]) =>
    L.el(g, "circle", { cx: x, cy: y, r, fill: c, stroke: "#3b6324", "stroke-width": 2 }));
  return g;
}
function shSquirrel(L, p = L.svg) { // schaut nach rechts
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-4 10C-24 14-30-8-20-19C-12-27 0-21-6-12C-10-7-15-2-7 4z", fill: "#c0662a", stroke: "#7a3a14", "stroke-width": 2 });
  L.el(g, "ellipse", { cx: 4, cy: 6, rx: 10, ry: 9, fill: "#d0782a", stroke: "#7a3a14", "stroke-width": 2 });
  L.el(g, "path", { d: "M11-12l1-7 5 6z", fill: "#d0782a", stroke: "#7a3a14", "stroke-width": 1.6, "stroke-linejoin": "round" });
  L.el(g, "circle", { cx: 14, cy: -5, r: 7, fill: "#d0782a", stroke: "#7a3a14", "stroke-width": 2 });
  L.el(g, "circle", { cx: 17, cy: -6, r: 1.6, fill: "#2f2a22" });
  L.el(g, "path", { d: "M0 15h6M9 15h6", stroke: "#7a3a14", "stroke-width": 2.4, "stroke-linecap": "round" });
  return g;
}
function shMarten(L, p = L.svg) { // Baummarder mit gelbem Kehlfleck, schaut nach rechts
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-15 2C-24 2-30-4-32-10", stroke: "#5a3418", "stroke-width": 6, fill: "none", "stroke-linecap": "round" });
  L.el(g, "path", { d: "M-6 7v8M8 7v8M-12 6l-3 9M12 6l2 9", stroke: "#4a2a12", "stroke-width": 3, "stroke-linecap": "round" });
  L.el(g, "ellipse", { cy: 2, rx: 17, ry: 7, fill: "#7a4a2a", stroke: "#4a2a12", "stroke-width": 2 });
  L.el(g, "path", { d: "M12 4C14 0 18-1 20 2z", fill: "#f0d080" });
  L.el(g, "path", { d: "M14-7l2-5 3 4z", fill: "#7a4a2a", stroke: "#4a2a12", "stroke-width": 1.5, "stroke-linejoin": "round" });
  L.el(g, "path", { d: "M12-4C14-9 22-8 26-3C22 0 16 1 12-4z", fill: "#7a4a2a", stroke: "#4a2a12", "stroke-width": 2 });
  L.el(g, "circle", { cx: 19, cy: -5, r: 1.4, fill: "#1f1a14" });
  return g;
}
function shOwl(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-12-14l-4-10 9 6M12-14l4-10-9 6", fill: "#7a5530", stroke: "#4e341c", "stroke-width": 1.8, "stroke-linejoin": "round" });
  L.el(g, "ellipse", { cy: 2, rx: 16, ry: 20, fill: "#9a7350", stroke: "#4e341c", "stroke-width": 2 });
  L.el(g, "ellipse", { cy: 9, rx: 9, ry: 11, fill: "#e8d2a8" });
  L.el(g, "path", { d: "M-4 6l2 2 2-2M2 11l2 2 2-2M-5 15l2 2 2-2", stroke: "#9a7350", "stroke-width": 1.3, fill: "none" });
  const eyes = L.el(g, "g", {});
  [-6.5, 6.5].forEach(x => {
    L.el(eyes, "circle", { cx: x, cy: -7, r: 6, fill: "#f5b700", stroke: "#4e341c", "stroke-width": 1.6 });
    L.el(eyes, "circle", { cx: x, cy: -7, r: 3, fill: "#1f1a14" });
  });
  L.el(g, "path", { d: "M-2.5-2L0 3l2.5-5z", fill: "#e0a020", stroke: "#7a5a10", "stroke-width": 1 });
  eyes.animate([{ transform: "scale(1,1)" }, { transform: "scale(1,1)", offset: .45 }, { transform: "translateY(-7px) scale(1,.1) translateY(7px)", offset: .5 },
    { transform: "scale(1,1)", offset: .55 }, { transform: "scale(1,1)" }], { duration: rnd(1400, 2200), iterations: 3, delay: rnd(0, 600) });
  return g;
}
function shBird(L, p = L.svg) { // fliegender Vogel, schaut nach rechts
  const g = L.el(p, "g", {}), c = pickOf(["#3a86b0", "#c2577a", "#d08a2a", "#5f9a3a"]);
  L.el(g, "path", { d: "M-14 2l-6-4v8z", fill: c });
  L.el(g, "ellipse", { rx: 13, ry: 6, fill: c, stroke: "#2f2a22", "stroke-width": 1.5 });
  L.el(g, "circle", { cx: 12, cy: -3, r: 5, fill: c, stroke: "#2f2a22", "stroke-width": 1.5 });
  L.el(g, "path", { d: "M16-3l5 2-5 1z", fill: "#e0a020" });
  L.el(g, "circle", { cx: 13, cy: -4, r: 1.1, fill: "#1f1a14" });
  const wing = L.el(g, "path", { d: "M-4-2C-6-16 4-22 8-20C6-12 4-6 2-2z", fill: c, stroke: "#2f2a22", "stroke-width": 1.5 });
  wing.animate([{ transform: "scale(1,1)" }, { transform: "scale(1,-.7)" }, { transform: "scale(1,1)" }], { duration: 380, iterations: Infinity });
  return g;
}
function shMushroom(L, p = L.svg) {
  const g = L.el(p, "g", {});
  L.el(g, "path", { d: "M-6 0h12l2 15h-16z", fill: "#f4ead8", stroke: "#8a7a5a", "stroke-width": 1.8, "stroke-linejoin": "round" });
  L.el(g, "path", { d: "M-18 1C-18-16 18-16 18 1z", fill: "#c84a3a", stroke: "#7a2a1a", "stroke-width": 2 });
  [[-8, -6, 2.6], [3, -10, 2.2], [10, -3, 2]].forEach(([x, y, r]) => L.el(g, "circle", { cx: x, cy: y, r, fill: "#ffffff" }));
  return g;
}
const shTreeSmall = (L, p) => shTree(L, p, 52);

// ---- Hilfen ----
function fadeOut(node, ms) { node.animate([{ opacity: 1 }, { opacity: 1, offset: .85 }, { opacity: 0 }], { duration: ms, fill: "both" }); }
function burst(L, x, y, n, delay, colors = ["#8fc36a", "#5f9a3a", "#f5d04a", "#c9a227"]) { // Punkte fliegen nach außen
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), d = rnd(80, 260) * L.k;
    L.el(L.svg, "circle", { r: rnd(2.5, 5) * L.k, fill: pickOf(colors) }).animate([{ transform: T(x, y), opacity: 0 }, { opacity: 1, offset: .1 },
      { transform: T(x + Math.cos(a) * d, y + Math.sin(a) * d), opacity: 0 }], { duration: rnd(1100, 1800), delay: delay + rnd(0, 250), easing: "ease-out", fill: "both" });
  }
}
function hop(L, n) { // Eichhörnchen hüpfen am unteren Rand entlang
  for (let i = 0; i < n; i++) {
    const flip = Math.random() < .5, s = rnd(1, 1.4) * L.k, y = L.H - rnd(24, 70) * L.k, hops = 5, kf = [];
    for (let j = 0; j <= hops * 2; j++) {
      const t = j / (hops * 2), x = flip ? L.W + 60 - t * (L.W + 120) : -60 + t * (L.W + 120);
      kf.push({ transform: TF(x, j % 2 ? y - rnd(50, 90) * L.k : y, s, flip), easing: j % 2 ? "ease-in" : "ease-out" });
    }
    shSquirrel(L).animate(kf, { duration: rnd(2600, 3400), delay: rnd(0, 2200), fill: "both" });
  }
}
function fly(L, n) { // Vögel fliegen in Wellen über den oberen Teil
  for (let i = 0; i < n; i++) {
    const flip = Math.random() < .5, s = rnd(.9, 1.3) * L.k, y = rnd(L.H * .08, L.H * .55), x0 = flip ? L.W + 50 : -50, x1 = flip ? -50 : L.W + 50;
    shBird(L).animate([{ transform: TF(x0, y, s, flip) }, { transform: TF((x0 + x1) / 2, y - rnd(30, 70), s, flip) }, { transform: TF(x1, y + rnd(-40, 40), s, flip) }],
      { duration: rnd(2400, 3600), delay: rnd(0, 2400), easing: "ease-in-out", fill: "both" });
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


// ---- Variante „Waldtiere“: Nahrungskreislauf ----
function heroChain(L, ms) {
  const steps = [[shTreeSmall, "Baum", "Produzent"], [shSquirrel, "Eichhörnchen", "Erstverbraucher"], [shMarten, "Marder", "Zweitverbraucher"],
    [shOwl, "Uhu", "Endverbraucher"], [shMushroom, "Pilz", "Zersetzer"]];
  const cx = L.W / 2, cy = L.H / 2, R = Math.min(L.W * .34, L.H * .32), s = Math.min(1.9, Math.min(L.W, L.H) / 330);
  const pos = i => { const a = -Math.PI / 2 + i / 5 * Math.PI * 2; return [cx + Math.cos(a) * R, cy + Math.sin(a) * R]; };
  const all = L.el(L.svg, "g", {}), r = 30 * s;
  steps.forEach(([make, name, role], i) => {
    const [x, y] = pos(i), t = 300 + i * 800;
    // Pfeil zur nächsten Stufe = „wird gefressen von“; vom Pilz zurück zum Baum gestrichelt (Nährstoffe, nicht gefressen)
    const [nx, ny] = pos((i + 1) % 5), a = Math.atan2(ny - y, nx - x), x0 = x + Math.cos(a) * (r + 8), y0 = y + Math.sin(a) * (r + 8), x1 = nx - Math.cos(a) * (r + 10), y1 = ny - Math.sin(a) * (r + 10);
    const ah = 9, l = [x1 - Math.cos(a - .5) * ah, y1 - Math.sin(a - .5) * ah], rr = [x1 - Math.cos(a + .5) * ah, y1 - Math.sin(a + .5) * ah];
    L.el(all, "path", { d: `M${x0} ${y0}L${x1} ${y1}M${l[0]} ${l[1]}L${x1} ${y1}L${rr[0]} ${rr[1]}`, stroke: i === 4 ? "#3f9a6f" : "#b0762a", "stroke-width": 3.5, "stroke-dasharray": i === 4 ? "7 7" : "none",
      fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" }).animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350, delay: t + 550, fill: "both" });
    const holder = L.el(L.el(all, "g", { transform: `translate(${x} ${y})` }), "g", {});
    L.el(holder, "circle", { r, fill: "#ffffff", stroke: "#b0762a", "stroke-width": 2.5, opacity: .95 });
    const shape = make(L, holder);
    shape.setAttribute("transform", `scale(${s * (i === 0 ? 1 : .95)})${i === 0 ? " translate(0 26)" : ""}`);
    word(L, holder, 0, r + 14, name);
    const sub = word(L, holder, 0, r + 32, role); sub.setAttribute("font-weight", 600); sub.setAttribute("fill", "#7c5a2a");
    pop(holder, t, 550);
  });
  word(L, all, cx, cy, "Kreislauf").animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 4400, fill: "both" });
  burst(L, cx, cy, 34, 4500, ["#b0762a", "#5f9a3a", "#f5d04a", "#c84a3a"]);
  fadeOut(all, ms);
}
const FX = {
  done: L => { hop(L, 6); fly(L, 9); },
  perfect: heroChain
};

function fxEnd(kind, topic) {
  const ms = kind === "perfect" ? 6500 : 5200, L = fxLayer(ms);
  if (L) FX[kind](L, ms);
}
