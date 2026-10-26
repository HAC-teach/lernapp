// Neuigkeiten für die Lehrer-Ansicht: jede Änderung an den Lernspielen hier oben eintragen (neueste zuerst).
// datum = "JJJJ-MM-TT", fach = id aus FAECHER (apps.js) – der Eintrag erscheint nur bei diesem Fach, wo = Jahrgang/Kapitel (kurz),
// text = was sich geändert hat (für die Lehrkraft), ziel = optional Kapitelordner für die Vorschau.
// Einträge der letzten 14 Tage bekommen das Kennzeichen „neu“.
const NEUIGKEITEN = [
  { datum: "2026-10-26", fach: "bio", wo: "Lehrer-Ansicht",
    text: "Neuigkeiten öffnen sich über einen eigenen Knopf und zeigen nur das gewählte Fach. Die Kapitelliste lädt immer die aktuelle Version." },
  { datum: "2026-10-26", fach: "bio", wo: "2. Klasse · 3. Sinnesorgane", ziel: "bio2-ic0yjzio/sinnesorgane/",
    text: "Das Herz ist im Bild „Organe des Menschen“ und in den Animationen jetzt anatomisch gezeichnet statt als Herzsymbol." },
  { datum: "2026-10-26", fach: "bio", wo: "2. Klasse · 3. Sinnesorgane", ziel: "bio2-ic0yjzio/sinnesorgane/",
    text: "Neues Kapitel mit den Themen A. Vom Atom zum Menschen, B. Gehirn und Nerven, C. Das Auge, D. Das Ohr, E. Haut, Nase und Zunge. Lernkarten, 93 Fragen, Beschriftungsbilder und die Animation „Sinneswelt“." },
  { datum: "2026-10-26", fach: "bio", wo: "2. Klasse · 2. Die Zelle", ziel: "bio2-ic0yjzio/zelle/",
    text: "Neues Kapitel mit den Themen A. Zellen, B. Mikroskope, C. Mikroorganismen. Lernkarten, 92 Fragen, Beschriftungsbilder und die Animation „Gewebe & Schwarm“." },
  { datum: "2026-10-26", fach: "bio", wo: "2. Klasse · 1. Pflanzen und Pilze", ziel: "bio2-ic0yjzio/pflanzen-pilze/",
    text: "Neues Kapitel mit den Themen A. Bäume, B. Sporenpflanzen, C. Pilze. Lernkarten, Quiz und die Animation „Waldboden“." },
  { datum: "2026-10-26", fach: "bio", wo: "Alle Kapitel",
    text: "Die Themen sind wie auf den Folien mit A, B, C … durchnummeriert." },
  { datum: "2026-10-26", fach: "bio", wo: "Alle Kapitel",
    text: "Neues Design „Forscherheft“: Karopapier, Textmarker, Themenfarben und das Lernspiele-Logo. Am Ende eines Quiz läuft eine Animation (ohne Ton)." },
  { datum: "2026-10-26", fach: "bio", wo: "Lehrer-Ansicht",
    text: "Lehrer-Ansicht mit Fächerwechsel, Schüler-Link pro Jahrgang, Vorschau und Fragenanzahl pro Kapitel." },
  { datum: "2026-10-26", fach: "bio", wo: "Alle Kapitel",
    text: "Neue Aufgabenformate (Beschriften, Mehrfachauswahl, Lückentext) und die Millionenshow mit 3 Jokern. Im Quiz kommen alle Fragen eines Themas." },
  { datum: "2026-10-26", fach: "bio", wo: "3. Klasse · 1. Gewässer", ziel: "bio3-pnnstwfb/gewaesser/",
    text: "Erstes Lernspiel mit Lernkarten und Quiz." }
];
