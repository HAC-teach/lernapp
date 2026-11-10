// Lernkarten zu „Nomen und Großschreibung“ (übliches Schulwissen, alle Beispiele selbst ausgedacht)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }. Höchstens 5 Karten pro Thema.

const LESSONS = {
  erkennen: [
    { title: "Was sind Nomen?",
      points: [
        "Nomen (Namenwörter, Substantive)",
        "Lebewesen: Hund, Lehrerin",
        "Dinge: Tisch, Ball",
        "Gefühle und Gedanken: Angst, Freude, Idee",
        "Nomen schreibt man immer groß."
      ] },
    { title: "Die Artikelprobe",
      points: [
        "Passt der, die, das (ein, eine) davor? → Nomen",
        "der Mut, die Freude, das Glück",
        "„das schnell“ klingt falsch → kein Nomen",
        "Auch ohne Artikel im Satz: Kinder spielen. → die Kinder"
      ],
      tip: "Unsicher? Setz „der, die, das“ davor. Klingt es richtig, schreibst du groß." },
    { title: "Begleiter verraten Nomen",
      points: [
        "Artikel: der, die, das, ein, eine",
        "Fürwörter: mein, dein, sein, unser … → mein Rad",
        "Zahlwörter: zwei Katzen, viele Kinder",
        "Adjektiv dazwischen bleibt klein: das rote Rad"
      ] },
    { title: "Der Satzanfang",
      points: [
        "Das erste Wort im Satz schreibt man immer groß.",
        "Auch wenn es kein Nomen ist: Wir lachen.",
        "Im Satz bleibt es dann klein: Heute lachen wir."
      ] },
    { title: "Tageszeiten und Wochentage",
      points: [
        "groß: am Abend, am Montag, in der Früh",
        "groß: heute Abend, gestern Nachmittag",
        "klein mit -s: abends, montags, morgens",
        "klein: morgen (= am nächsten Tag)"
      ] }
  ],
  endungen: [
    { title: "Endungen verraten Nomen",
      points: [
        "-ung, -heit, -keit, -schaft",
        "-nis, -tum, -ling",
        "Verkleinerung: -chen, -lein",
        "Wörter mit diesen Endungen schreibt man immer groß."
      ],
      tip: "Schau auf das Wortende: -ung, -heit, -keit, -schaft? Dann schreibst du groß!" },
    { title: "Aus Verben werden Nomen",
      points: [
        "mit -ung: wohnen → die Wohnung",
        "hoffen → die Hoffnung",
        "mit -nis: erleben → das Erlebnis",
        "ergeben → das Ergebnis"
      ] },
    { title: "Aus Adjektiven werden Nomen",
      points: [
        "-heit: frei → die Freiheit, krank → die Krankheit",
        "-keit nach -lich, -ig, -bar, -sam: ehrlich → die Ehrlichkeit",
        "manchmal -igkeit: müde → die Müdigkeit",
        "-tum: reich → der Reichtum",
        "-ling: früh → der Frühling"
      ] },
    { title: "Aus Nomen werden Nomen",
      points: [
        "-schaft: Freund → die Freundschaft",
        "-heit: Kind → die Kindheit",
        "-chen, -lein machen etwas klein:",
        "Haus → das Häuschen, Buch → das Büchlein"
      ] },
    { title: "Artikel und Mehrzahl",
      points: [
        "-ung, -heit, -keit, -schaft: immer die",
        "-chen, -lein: immer das",
        "-ling: immer der",
        "Mehrzahl: -nis → -nisse (die Ergebnisse)"
      ] }
  ],
  nominal: [
    { title: "Wörter werden zu Nomen",
      points: [
        "Verben und Adjektive können zu Nomen werden.",
        "Dann schreibt man sie groß.",
        "lesen → das Lesen",
        "neu → etwas Neues"
      ] },
    { title: "Verben als Nomen",
      points: [
        "mit Artikel: das Lesen, das Singen",
        "Im Wort versteckt sich ein Artikel:",
        "beim (bei dem), zum (zu dem), vom (von dem)",
        "im (in dem), aufs (auf das)",
        "beim Essen, zum Schwimmen, vom Laufen"
      ] },
    { title: "Adjektive als Nomen",
      points: [
        "etwas, nichts, viel, wenig, alles + Adjektiv",
        "etwas Neues, nichts Gutes, viel Schönes",
        "alles Liebe, wenig Brauchbares",
        "mit Artikel: das Beste, das Schöne"
      ] },
    { title: "Weitere Begleiter",
      points: [
        "Fürwort: mein Lachen, dein Zögern",
        "Adjektiv davor: lautes Rufen, das lange Warten",
        "Ohne Begleiter? Probe machen!",
        "Schwimmen ist gesund. → Das Schwimmen ist gesund."
      ] },
    { title: "Achtung: Verb bleibt Verb",
      points: [
        "Wir lesen ein Buch. → klein",
        "Das Lesen macht Spaß. → groß",
        "Ich will schwimmen. → klein",
        "am schnellsten, am besten → klein"
      ],
      tip: "Frag dich: Steht ein Begleiter davor oder kann ich „das“ davorsetzen? Dann groß!" }
  ]
};
