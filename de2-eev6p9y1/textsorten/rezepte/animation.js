// ---------- Animationen am Ende (ohne Ton) ----------
// fxEnd(art, thema): art = "done" (Quiz fertig) oder "perfect" (alles richtig), thema = TOPICS-id oder "all"
// „Küchenzauber“ (für alle Themen gleich): Zutaten und Küchengeräte steigen wie Blasen auf /
// ein großer Topf erscheint, die Zutaten fallen hinein, Dampf steigt auf, dann landet der Stempel „Mahlzeit!“.
// Verwendet die Zeichnungen aus bilder.js (use).
const NS = "http://www.w3.org/2000/svg";
const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = a => a[Math.floor(Math.random() * a.length)];
const FX_DINGE = ["tomate", "ei", "apfel", "erdbeere", "banane", "zitrone", "zwiebel", "muffin", "kaese", "schneebesen", "kochloeffel", "teeloeffel", "basilikum"];
const FX_ZUTATEN = ["tomate", "ei", "apfel", "erdbeere", "zwiebel", "kaese", "basilikum", "zitrone", "banane"];

function fxLayer(ms) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  document.querySelectorAll(".fx").forEach(e => e.remove());
  const W = innerWidth, H = innerHeight;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "fx"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("aria-hidden", "true");
  document.body.appendChild(svg);
  setTimeout(() => svg.remove(), ms);
  const el = (parent, tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  return { svg, W, H, k: Math.min(1.6, Math.max(1, W / 420)), el };
}

// ein Icon aus bilder.js als bewegliche Gruppe (Mittelpunkt 0|0, Größe in Pixeln)
function fxDing(L, name, px) {
  const g = L.el(L.svg, "g", { opacity: 0 });
  g.innerHTML = use(name, 0, 0, px / 100);
  return g;
}

// Fertig: Zutaten und Geräte steigen auf und drehen sich dabei
function fxDone(L) {
  for (let i = 0; i < 22; i++) {
    const g = fxDing(L, pickOf(FX_DINGE), rnd(44, 70) * L.k);
    const x = rnd(40, L.W - 40), drift = rnd(-60, 60), r = rnd(-30, 30), dur = rnd(2800, 4200);
    g.animate([
      { transform: `translate(${x}px,${L.H + 60}px) rotate(${r}deg)`, opacity: 0 },
      { opacity: 1, offset: .15 },
      { opacity: 1, offset: .75 },
      { transform: `translate(${x + drift}px,-70px) rotate(${-r}deg)`, opacity: 0 }
    ], { duration: dur, delay: rnd(0, 1600), easing: "ease-out", fill: "both" });
  }
}

// Alles richtig: Topf in der Mitte, Zutaten fallen hinein, Dampf, Stempel „Mahlzeit!“
function fxPerfect(L) {
  const cx = L.W / 2, cy = L.H * .62, size = Math.min(200 * L.k, L.W * .55);
  const topf = L.el(L.svg, "g", { opacity: 0 });
  topf.innerHTML = use("herdplatte", 0, size * .34, size / 100 * 1.05) + use("topf", 0, 0, size / 100);
  topf.animate([
    { transform: `translate(${cx}px,${cy + 60}px) scale(.6)`, opacity: 0 },
    { transform: `translate(${cx}px,${cy}px) scale(1)`, opacity: 1, offset: .08 },
    { transform: `translate(${cx}px,${cy}px) scale(1)`, opacity: 1, offset: .9 },
    { transform: `translate(${cx}px,${cy}px) scale(1)`, opacity: 0 }
  ], { duration: 6000, easing: "ease-out", fill: "both" });

  // Zutaten fallen nacheinander von oben in den Topf
  const rand = cy - size * .14;
  FX_ZUTATEN.forEach((name, i) => {
    const g = fxDing(L, name, 52 * L.k);
    const x0 = rnd(30, L.W - 30), x1 = cx + rnd(-size * .22, size * .22), r = rnd(-200, 200);
    g.animate([
      { transform: `translate(${x0}px,-60px) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${x1}px,${rand - 20}px) rotate(${r}deg)`, opacity: 1, offset: .85 },
      { transform: `translate(${x1}px,${rand + 20}px) rotate(${r}deg) scale(.6)`, opacity: 0 }
    ], { duration: 1100, delay: 500 + i * 260, easing: "ease-in", fill: "both" });
  });

  // Dampf steigt auf
  for (let i = 0; i < 6; i++) {
    const d = fxDing(L, "dampf", 70 * L.k);
    const x = cx + rnd(-size * .25, size * .25);
    d.animate([
      { transform: `translate(${x}px,${rand}px) scale(.6)`, opacity: 0 },
      { transform: `translate(${x}px,${rand - 60}px) scale(1)`, opacity: .9, offset: .4 },
      { transform: `translate(${x + rnd(-20, 20)}px,${rand - 160}px) scale(1.3)`, opacity: 0 }
    ], { duration: 1800, delay: 2800 + i * 300, easing: "ease-out", fill: "both" });
  }

  // Stempel
  const text = "Mahlzeit!";
  const fs = Math.min(44 * L.k, (L.W - 70) / (text.length * .66));
  const breite = text.length * fs * .66 + 40, sy = L.H * .24;
  const g = L.el(L.svg, "g", { opacity: 0 });
  L.el(g, "rect", { x: -breite / 2, y: -fs, width: breite, height: fs * 2, rx: 14, fill: "#ffffff", stroke: "#c8483b", "stroke-width": 6 });
  const t = L.el(g, "text", { "text-anchor": "middle", "dominant-baseline": "central", "font-size": fs, "font-weight": 800, fill: "#c8483b", "font-family": "system-ui, sans-serif" });
  t.textContent = text;
  g.animate([
    { transform: `translate(${cx}px,${sy}px) rotate(-22deg) scale(3)`, opacity: 0 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .12 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1.06)`, opacity: 1, offset: .2 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .28 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1)`, opacity: 1, offset: .85 },
    { transform: `translate(${cx}px,${sy}px) rotate(-6deg) scale(1.3)`, opacity: 0 }
  ], { duration: 3400, delay: 2900, easing: "ease-out", fill: "both" });
}

function fxEnd(kind) {
  const perfect = kind === "perfect";
  const L = fxLayer(perfect ? 6600 : 6000);
  if (!L) return;
  if (perfect) fxPerfect(L); else fxDone(L);
}
