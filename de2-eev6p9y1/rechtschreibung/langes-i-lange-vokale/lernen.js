// Lernkarten zu „Langes i und lange Vokale“ (übliches Schulwissen, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }. Höchstens 5 Karten pro Thema.

const LESSONS = {
  langi: [
    { title: "Kurzes oder langes i?",
      points: [
        "kurz gesprochen: Kind, Wind, Kiste",
        "lang gesprochen: Biene, Spiel, Tier",
        "Sprich das Wort deutlich und hör genau hin!"
      ] },
    { title: "Die Regel: ie",
      points: [
        "langes i → meistens ie",
        "Wiese, Brief, lieben, sieben",
        "auch am Wortende: Knie, sie, wie, nie",
        "kurzes i → nur i: Fisch, bitte"
      ],
      tip: "Wenn du unsicher bist: Ein langes i schreibt man fast immer ie." },
    { title: "Langes i – trotzdem nur i",
      points: [
        "kleine Wörter: mir, dir, wir",
        "Merkwörter: Tiger, Igel, Kino",
        "Fremdwörter: Maschine, Rosine, Lawine",
        "Krokodil, Benzin, Vitamin, Kilo"
      ] },
    { title: "ih und ieh",
      points: [
        "ih nur bei: ihm, ihn, ihr, ihre, ihnen",
        "ieh: Vieh, ziehen, fliehen",
        "sehen → sieht, stehlen → stiehlt",
        "Das h kommt aus der Wortfamilie."
      ] },
    { title: "Tricks",
      points: [
        "Verben auf -ieren immer mit ie: probieren, spazieren",
        "Vergangenheit: schrieb, blieb, lief, rief, schlief",
        "wieder (noch einmal) – wider (gegen)",
        "Lied (singen) – Lid (Auge)"
      ] }
  ],
  lang: [
    { title: "Kurz oder lang?",
      points: [
        "Selbstlaute (Vokale): a, e, i, o, u – auch ä, ö, ü",
        "lang: Tal, Weg, Brot, Hut",
        "kurz: Ball, Bett, Topf, Mutter",
        "Sprich das Wort deutlich und hör genau hin!"
      ] },
    { title: "Meistens einfach",
      points: [
        "Die meisten langen Selbstlaute haben kein Zeichen.",
        "Name, Hase, lesen, Rose, Blume, Tür",
        "nur der einfache Buchstabe"
      ],
      tip: "Wörter mit aa, ee, oo oder Dehnungs-h sind die Ausnahmen. Die musst du dir merken." },
    { title: "Doppelter Selbstlaut",
      points: [
        "aa: Haar, Paar, Saal, Waage",
        "ee: Tee, See, Schnee, Meer, leer",
        "oo: Boot, Moos, Zoo",
        "nie uu, nie ii",
        "Umlaute nie doppelt: Saal → Säle"
      ] },
    { title: "Dehnungs-h",
      points: [
        "Man hört es nicht.",
        "meistens vor l, m, n, r",
        "Zahl, nehmen, Bohne, Uhr",
        "bleibt in der Wortfamilie: fahren – Fahrt – Fähre"
      ] },
    { title: "Klingt gleich – anders geschrieben",
      points: [
        "Meer (Wasser) – mehr (viel)",
        "leeren (leer machen) – lehren (Lehrer)",
        "Wal (Tier) – Wahl (wählen)",
        "malen (Bild) – mahlen (Mehl)"
      ],
      tip: "Lies den ganzen Satz. Er zeigt dir, welches Wort gemeint ist." }
  ]
};
