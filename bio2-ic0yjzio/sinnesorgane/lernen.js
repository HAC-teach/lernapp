// Lernkarten zum Thema "3. Sinnesorgane" (Inhalt aus Sinnesorgane_PPP.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.
// Die Organe des Menschen (Karte „Wichtige Organe“) und die Namen der drei Hautschichten stehen auf den Folien
// nur als Bild bzw. Arbeitsblatt – sie sind übliches Unterstufen-Schulwissen.

const LESSONS = {
  ebenen: [
    { title: "Vom Kleinen zum Großen",
      points: [
        "Unser Körper ist in Stufen aufgebaut – von ganz klein bis ganz groß.",
        "Zellen: die Grundeinheit aller Lebewesen.",
        "Gewebe: viele Zellen mit gemeinsamer Funktion.",
        "Organe: Gewebe mit gemeinsamer Funktion.",
        "Organsystem: Organe mit gemeinsamer Aufgabe.",
        "Alle Organsysteme zusammen ergeben den ganzen Menschen."
      ],
      tip: "Merke die Reihenfolge: Zelle → Gewebe → Organ → Organsystem → Mensch." },
    { title: "Ein Beispiel: das Herz",
      points: [
        "Viele Herzmuskelzellen bilden zusammen das Muskelgewebe.",
        "Aus Muskelgewebe und anderen Geweben besteht das Herz – ein Organ.",
        "Herz und Blutgefäße arbeiten zusammen: Sie bilden ein Organsystem, den Blutkreislauf."
      ] },
    { title: "Wichtige Organe",
      points: [
        "Gehirn: die Steuerzentrale des Körpers.",
        "Herz: pumpt das Blut durch den Körper.",
        "Lunge: nimmt beim Atmen Sauerstoff auf.",
        "Magen und Darm: verdauen die Nahrung.",
        "Leber: reinigt das Blut von Giftstoffen.",
        "Haut: das größte Organ des Körpers."
      ] }
  ],
  nerven: [
    { title: "Unsere Sinnesorgane",
      points: [
        "Augen: Sehen",
        "Ohren: Hören (und Gleichgewicht)",
        "Nase: Riechen",
        "Zunge: Schmecken",
        "Haut: Fühlen"
      ],
      tip: "Fünf Sinnesorgane – fünf Sinne. Mehr dazu in den nächsten Themen!" },
    { title: "Das Gehirn",
      points: [
        "Das Gehirn ist die Steuer- und Kontrollzentrale des Körpers.",
        "Es verarbeitet Sinnesreize.",
        "Es steuert unsere Bewegungen.",
        "Mit dem Gehirn denken, lernen und erinnern wir uns."
      ] },
    { title: "So nehmen wir etwas wahr",
      points: [
        "1. Sinnesorgane (Haut, Augen …) nehmen Reize auf.",
        "2. Die Reize werden in elektrische Nervenimpulse umgewandelt.",
        "3. Nerven leiten die Impulse zum Gehirn.",
        "4. Das Gehirn verarbeitet die Informationen.",
        "5. Das Gehirn entscheidet über die Reaktion.",
        "6. Nerven leiten das Signal zu den Muskeln.",
        "7. Die Muskeln führen die Bewegung aus."
      ] },
    { title: "Reaktionen und Reflexe",
      points: [
        "Reaktion: schnell, läuft über das Gehirn.",
        "Reflex: noch schneller und unwillkürlich – du denkst nicht darüber nach.",
        "Ein Reflex läuft über das Rückenmark, nicht über das Gehirn.",
        "Reflexe haben eine Schutzfunktion, zum Beispiel das Zurückziehen der Hand von einer heißen Herdplatte."
      ],
      tip: "Reflex = Rückenmark. Beide Wörter beginnen mit R!" }
  ],
  auge: [
    { title: "Die wichtigsten Teile des Auges",
      points: [
        "Hornhaut: lässt Licht ins Auge.",
        "Linse: bündelt das Licht.",
        "Netzhaut: fängt das Bild auf.",
        "Sehnerv: leitet die Informationen ans Gehirn."
      ] },
    { title: "So entsteht ein Bild im Auge",
      points: [
        "Licht fällt durch die Hornhaut und die Linse.",
        "Die Linse bündelt das Licht.",
        "Auf der Netzhaut entsteht ein Bild.",
        "Das Bild steht auf dem Kopf!",
        "Das Gehirn dreht das Bild wieder um."
      ] },
    { title: "Nah- und Fernsicht",
      points: [
        "Für nahe Dinge wird die Linse rund.",
        "Für ferne Dinge wird die Linse flach.",
        "Die Augenmuskeln verändern die Form der Linse."
      ] },
    { title: "Sehschwächen",
      points: [
        "Kurzsichtig: Nahe Dinge sind scharf, ferne Dinge unscharf.",
        "Weitsichtig: Ferne Dinge sind scharf, nahe Dinge unscharf.",
        "Brillen gleichen die unscharfe Sicht aus."
      ],
      tip: "Kurzsichtig = man sieht nur auf kurze Entfernung scharf." },
    { title: "Schutz der Augen",
      points: [
        "Augenlider und Wimpern schützen vor Staub und Schmutz.",
        "Augenbrauen schützen vor Schweiß.",
        "Tränendrüsen produzieren Tränenflüssigkeit. Sie hält die Augen feucht."
      ] }
  ],
  ohr: [
    { title: "Die Ohren",
      points: [
        "Mit den Ohren hören wir Geräusche und Töne.",
        "Die Ohren helfen uns auch beim Gleichgewicht.",
        "Das Ohr hat drei Teile: äußeres Ohr, Mittelohr und Innenohr."
      ] },
    { title: "Das äußere Ohr",
      points: [
        "1. Die Ohrmuschel sammelt den Schall.",
        "2. Der Gehörgang leitet den Schall weiter.",
        "3. Das Trommelfell beginnt zu schwingen."
      ] },
    { title: "Das Mittelohr",
      points: [
        "4. Die Gehörknöchelchen heißen Hammer, Amboss und Steigbügel.",
        "5. Sie verstärken die Schwingungen.",
        "6. Sie leiten die Schwingungen ins Innenohr weiter."
      ] },
    { title: "Das Innenohr",
      points: [
        "7. Die Schnecke wandelt den Schall in Nervenimpulse um.",
        "8. Der Hörnerv leitet die Signale zum Gehirn.",
        "9. Die Bogengänge sind wichtig für das Gleichgewicht."
      ] },
    { title: "Wie laut ist das?",
      points: [
        "Flüstern: 20 dB",
        "Regen: 40 dB",
        "Stark befahrene Straße: 60–80 dB",
        "Hundegebell: 70–90 dB",
        "Presslufthammer: 100–110 dB"
      ] },
    { title: "Lärm und Lautstärke",
      points: [
        "Die Lautstärke wird in Dezibel (dB) gemessen.",
        "Ab 80 dB kann es schädlich sein.",
        "Sehr laute Geräusche können das Gehör zerstören.",
        "Folgen von Lärm: Hörschäden, Schlaf- und Konzentrationsstörungen, Ohrgeräusche (Tinnitus)."
      ],
      tip: "Schütze deine Ohren: Musik nicht zu laut hören!" }
  ],
  haut: [
    { title: "Die Haut",
      points: [
        "Die Haut ist das größte Organ des Körpers.",
        "Sie schützt vor Hitze, Kälte und Keimen.",
        "Mit der Haut fühlen wir Schmerz, Druck und Wärme. So nehmen wir die Umwelt wahr.",
        "Die Haut hat 3 Schichten: Oberhaut, Lederhaut und Unterhaut."
      ] },
    { title: "Schmecken und Riechen",
      points: [
        "Die Sinne Schmecken und Riechen arbeiten zusammen.",
        "Die Reize gelangen ins Gehirn. Erst dort entstehen Geschmack und Geruch.",
        "Bei einer Erkältung schmeckt man weniger."
      ] },
    { title: "Die Zunge",
      points: [
        "Auf der Zunge erkennen Geschmacksknospen die Geschmacksstoffe.",
        "Geschmacksknospen enthalten Sinneszellen.",
        "Werden sie von Essen oder Trinken gereizt, werden Signale ans Gehirn geleitet.",
        "Geschmacksrichtungen: süß, salzig, sauer, bitter, umami."
      ],
      tip: "Umami ist japanisch und heißt ungefähr „würzig, herzhaft“." },
    { title: "Die Nase",
      points: [
        "Die Nase enthält die Riechschleimhaut.",
        "Sie erkennt Duftstoffe.",
        "Die Duftstoffe reizen Sinneszellen.",
        "Die Informationen gehen ans Gehirn."
      ] }
  ]
};
