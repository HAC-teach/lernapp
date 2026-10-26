// Lernkarten zum Thema "3. Sinnesorgane" (Inhalt aus Sinnesorgane_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Höchstens 5 Karten pro Thema, nur das Wichtigste in kurzen Stichworten.
// Die Organe des Menschen (Karte „Wichtige Organe“) und die Namen der drei Hautschichten stehen auf den Folien
// nur als Bild bzw. Arbeitsblatt – sie sind übliches Unterstufen-Schulwissen.

const LESSONS = {
  ebenen: [
    { title: "Vom Kleinen zum Großen",
      points: [
        "Zelle: Grundeinheit",
        "Gewebe: Zellen mit gemeinsamer Funktion",
        "Organ: Gewebe mit gemeinsamer Funktion",
        "Organsystem: Organe mit gemeinsamer Aufgabe",
        "alle Organsysteme → Mensch"
      ], tip: "Zelle → Gewebe → Organ → Organsystem → Mensch." },
    { title: "Beispiel Herz",
      points: [
        "Herzmuskelzellen → Muskelgewebe",
        "Muskelgewebe + andere Gewebe → Organ Herz",
        "Herz + Blutgefäße → Organsystem Blutkreislauf"
      ] },
    { title: "Wichtige Organe",
      points: [
        "Gehirn: Steuerzentrale",
        "Herz: pumpt Blut",
        "Lunge: nimmt Sauerstoff auf",
        "Magen, Darm: verdauen · Leber: reinigt das Blut",
        "Haut: größtes Organ"
      ] }
  ],
  nerven: [
    { title: "Fünf Sinnesorgane",
      points: [
        "Augen: Sehen",
        "Ohren: Hören (+ Gleichgewicht)",
        "Nase: Riechen",
        "Zunge: Schmecken",
        "Haut: Fühlen"
      ] },
    { title: "Das Gehirn",
      points: [
        "Steuer- und Kontrollzentrale",
        "verarbeitet Reize, steuert Bewegungen",
        "denken, lernen, erinnern"
      ] },
    { title: "Vom Reiz zur Bewegung",
      points: [
        "Sinnesorgan nimmt Reiz auf",
        "→ elektrische Nervenimpulse",
        "Nerven → Gehirn: verarbeitet, entscheidet",
        "Nerven → Muskeln: Bewegung"
      ] },
    { title: "Reaktion und Reflex",
      points: [
        "Reaktion: schnell, über das Gehirn",
        "Reflex: noch schneller, ohne Nachdenken",
        "Reflex läuft über das Rückenmark",
        "Schutz, z. B. Hand weg von der heißen Herdplatte"
      ], tip: "Reflex = Rückenmark. Beide Wörter beginnen mit R!" }
  ],
  auge: [
    { title: "Teile des Auges",
      points: [
        "Hornhaut: lässt Licht hinein",
        "Linse: bündelt das Licht",
        "Netzhaut: fängt das Bild auf",
        "Sehnerv: leitet ans Gehirn"
      ] },
    { title: "So entsteht ein Bild",
      points: [
        "Licht → Hornhaut → Linse → Netzhaut",
        "Bild auf der Netzhaut steht Kopf",
        "Gehirn dreht es um"
      ] },
    { title: "Nah und fern",
      points: [
        "nah: Linse rund",
        "fern: Linse flach",
        "Augenmuskeln verändern die Linse"
      ] },
    { title: "Sehschwächen",
      points: [
        "kurzsichtig: nah scharf, fern unscharf",
        "weitsichtig: fern scharf, nah unscharf",
        "Brille gleicht aus"
      ] },
    { title: "Schutz der Augen",
      points: [
        "Lider, Wimpern: gegen Staub und Schmutz",
        "Augenbrauen: gegen Schweiß",
        "Tränenflüssigkeit: hält feucht"
      ] }
  ],
  ohr: [
    { title: "Die Ohren",
      points: [
        "Hören + Gleichgewicht",
        "3 Teile: äußeres Ohr, Mittelohr, Innenohr"
      ] },
    { title: "Äußeres Ohr und Mittelohr",
      points: [
        "Ohrmuschel: sammelt Schall",
        "Gehörgang: leitet weiter",
        "Trommelfell: schwingt",
        "Hammer, Amboss, Steigbügel: verstärken, leiten weiter"
      ] },
    { title: "Innenohr",
      points: [
        "Schnecke: Schall → Nervenimpulse",
        "Hörnerv: zum Gehirn",
        "Bogengänge: Gleichgewicht"
      ] },
    { title: "Wie laut ist das?",
      points: [
        "gemessen in Dezibel (dB)",
        "Flüstern 20 · Regen 40 · Straße 60–80",
        "Hundegebell 70–90 · Presslufthammer 100–110"
      ] },
    { title: "Lärm schadet",
      points: [
        "ab 80 dB schädlich",
        "Hörschäden, Ohrgeräusche (Tinnitus)",
        "Schlaf- und Konzentrationsstörungen"
      ], tip: "Schütze deine Ohren: Musik nicht zu laut hören!" }
  ],
  haut: [
    { title: "Die Haut",
      points: [
        "größtes Organ",
        "schützt vor Hitze, Kälte, Keimen",
        "fühlt Schmerz, Druck, Wärme",
        "3 Schichten: Oberhaut, Lederhaut, Unterhaut"
      ] },
    { title: "Schmecken und Riechen",
      points: [
        "arbeiten zusammen",
        "Geschmack und Geruch entstehen im Gehirn",
        "Erkältung → man schmeckt weniger"
      ] },
    { title: "Die Zunge",
      points: [
        "Geschmacksknospen mit Sinneszellen",
        "Signale ans Gehirn",
        "süß, salzig, sauer, bitter, umami"
      ], tip: "Umami ist japanisch und heißt ungefähr „würzig, herzhaft“." },
    { title: "Die Nase",
      points: [
        "Riechschleimhaut erkennt Duftstoffe",
        "Duftstoffe reizen Sinneszellen",
        "Infos ans Gehirn"
      ] }
  ]
};
