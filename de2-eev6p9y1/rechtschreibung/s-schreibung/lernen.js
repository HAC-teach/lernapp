// Lernkarten zu „s-Schreibung“ (übliches Schulwissen, alle Beispiele selbst ausgedacht; ohne „das“/„dass“)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }. Höchstens 5 Karten pro Thema.

const LESSONS = {
  "ssß": [
    { title: "Der scharfe s-Laut",
      points: [
        "zischt wie eine Schlange",
        "zwei Schreibweisen: ss und ß",
        "Wichtig ist der Selbstlaut davor: kurz oder lang?"
      ] },
    { title: "Kurz → ss",
      points: [
        "kurzer Selbstlaut → ss",
        "Fluss, Kuss, Nuss, nass",
        "Wasser, Tasse, Schlüssel, essen"
      ],
      tip: "ss ist ein Doppelkonsonant – wie mm oder tt." },
    { title: "Lang → ß",
      points: [
        "langer Selbstlaut → ß",
        "Fuß, Straße, groß, süß, Gruß",
        "auch nach ie: fließen, gießen, schließen"
      ] },
    { title: "Nach Zwielaut → ß",
      points: [
        "ei, au, eu, äu sind immer lang",
        "heiß, weiß, fleißig, beißen",
        "draußen, außen, Strauß",
        "nie ss nach ei, au, eu"
      ] },
    { title: "ss und ß in einer Wortfamilie",
      points: [
        "fließen – floss – der Fluss",
        "essen – aß – gegessen",
        "wissen – weiß – gewusst",
        "schließen – Schloss – Schlüssel"
      ],
      tip: "Hör bei jeder Form neu hin: kurz oder lang?" }
  ],
  s: [
    { title: "Weich oder scharf?",
      points: [
        "weiches s summt wie eine Biene: Rose, Hase, lesen",
        "scharfes s zischt: Tasse, Straße",
        "weiches s → immer einfaches s",
        "am Wortanfang immer s: Sonne, sieben"
      ] },
    { title: "Am Wortende: verlängern",
      points: [
        "Am Wortende klingt jedes s scharf.",
        "Gras → Gräser: summt → s",
        "Fuß → Füße: scharf, lang → ß",
        "Fluss → Flüsse: scharf, kurz → ss"
      ],
      tip: "Nomen: Bilde die Mehrzahl. Adjektive: groß → größer." },
    { title: "st und sp",
      points: [
        "vor t und p meistens einfaches s",
        "Fenster, Kiste, Nest, Herbst",
        "Wespe, Knospe",
        "auch: Hals, Gans, Pinsel, Insel"
      ] },
    { title: "Verben: an die Grundform denken",
      points: [
        "lesen → liest, reisen → reist",
        "essen → isst, küssen → küsst",
        "heißen → heißt, gießen → gießt",
        "Der Wortstamm bleibt gleich."
      ] },
    { title: "Merkwörter",
      points: [
        "-nis → -nisse: Zeugnis – Zeugnisse",
        "Bus – Busse, Kürbis – Kürbisse",
        "kleine Wörter mit s: was, es, bis, aus, uns",
        "ist (sein) – isst (essen)"
      ] }
  ]
};
