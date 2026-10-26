// Verzeichnis aller Lernspiele für die Lehrer-Ansicht.
// Neues Kapitel / neuer Jahrgang / neues Fach: hier eintragen.
// folder = Jahrgangsordner im Repo, path = Kapitelordner darin.
const FAECHER = [
  {
    id: "bio", name: "Biologie", color: "#3f9a6f", soft: "#e3f4ea",
    klassen: [
      { name: "3. Klasse", folder: "bio3-pnnstwfb", kapitel: [
        { name: "1. Gewässer", path: "gewaesser/" }
      ] }
    ]
  },
  {
    id: "de", name: "Deutsch", color: "#c8483b", soft: "#fbe6e1",
    klassen: []
  }
];
