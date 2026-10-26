// Lernkarten zum Thema "1. Pflanzen und Pilze" (Inhalt aus PPP_Pflanzen.pptx und PPP_Pilze.pptx)
// LESSONS[topicId] = Liste von Karten: { title, points: [...], tip? }
// Die Karten werden vor dem Quiz zum Durchklicken angezeigt.

const LESSONS = {
  baeume: [
    { title: "Bäume sind Blütenpflanzen",
      points: [
        "Bäume gehören auch zu den Blütenpflanzen.",
        "Sie haben den gleichen Bauplan: Wurzel, Sprossachse (Stamm) und Blatt.",
        "Jeder Teil des Baumes hat eine bestimmte Aufgabe."
      ] },
    { title: "Die Aufgaben der Baumteile",
      points: [
        "Wurzel: verankert den Baum im Boden und nimmt Wasser und Mineralsalze auf.",
        "Stamm: gibt dem Baum Stabilität und leitet Wasser und Mineralsalze in die Äste und Zweige.",
        "Blätter: machen Fotosynthese.",
        "Blüten: dienen der Fortpflanzung.",
        "Früchte: verbreiten die Samen."
      ] },
    { title: "Die Wurzelspitze",
      points: [
        "Wurzelhaare nehmen Wasser und Mineralsalze aus dem Boden auf.",
        "In der Wachstumszone wächst die Wurzel in die Länge.",
        "Die Wurzelhaube schützt die Wurzel beim Wachsen im Boden."
      ] },
    { title: "Ein Baum im Jahreslauf",
      points: [
        "Frühling: Die gespeicherten Reservestoffe werden aktiviert, das Wachstum beginnt.",
        "Sommer: Die Blätter sind voll ausgebildet. Nach der Bestäubung entwickeln sich aus den Blüten die Früchte.",
        "Herbst: Das Chlorophyll wird abgebaut, die Blätter verfärben sich und fallen ab.",
        "Winter: Der Baum schützt sich vor Verdunstung und Frost."
      ] },
    { title: "Holz ist nicht gleich Holz",
      points: [
        "Holz besteht aus verschiedenen Teilen – von innen nach außen:",
        "Kernholz → Splintholz → Wachstumsschicht (Kambium) → Rinde.",
        "Die Rinde besteht aus Bast und Borke. Die Borke ist ganz außen."
      ], tip: "Im Kambium bildet der Baum jedes Jahr neues Holz." },
    { title: "Die Jahresringe",
      points: [
        "Ein Baum bildet 1 Ring pro Lebensjahr.",
        "Jeder Ring hat einen helleren Teil (Frühholz) und einen dunkleren Teil (Spätholz).",
        "Gute Bedingungen → viel Holz → breite Ringe.",
        "Schlechte Bedingungen (z. B. heiße, trockene Jahre, Schatten, Schädlinge) → schmale Ringe.",
        "Keine Jahreszeiten → keine Jahresringe (z. B. im tropischen Regenwald)."
      ], tip: "Zähl die Ringe – dann weißt du, wie alt der Baum ist." },
    { title: "Blätter",
      points: [
        "Blätter machen Fotosynthese mit dem grünen Farbstoff Chlorophyll.",
        "Blattadern transportieren Nährstoffe und Wasser.",
        "Teile des Blattes: Blattfläche, Blattrand, Blattstiel und Blattgrund.",
        "Es gibt einfache Blätter und zusammengesetzte Blätter aus mehreren kleinen Fiederblättchen."
      ] },
    { title: "Laubbäume bestimmen",
      points: [
        "Laubbäume unterscheidet man an Früchten und Blättern.",
        "Blattform: z. B. eiförmig, herzförmig, gelappt – oder zusammengesetzt: gefiedert, gefingert.",
        "Blattrand: gesägt, gezähnt, ganzrandig oder gebuchtet.",
        "Blattstellung: wechselständig, gegenständig, quirlständig oder grundständig."
      ] },
    { title: "Welcher Baum ist das?",
      points: [
        "Sommer-Linde: herzförmige Blätter",
        "Rotbuche: eiförmig, ganzrandig",
        "Stiel-Eiche: Blattrand gebuchtet",
        "Hainbuche: eiförmig, scharf gesägt",
        "Spitz-Ahorn: gelappt",
        "Rosskastanie: gefingert",
        "Robinie: gefiedert, Rand glatt · Esche: gefiedert, Rand gesägt"
      ] },
    { title: "Herbstlaub",
      points: [
        "Laubbäume werfen im Herbst ihre Blätter ab – eine Anpassung an den Winter.",
        "Im Winter gefriert das Wasser (auch in den Blättern). Ohne Blätter verdunstet wenig Wasser.",
        "Verfärbung: Das grüne Chlorophyll wird entzogen. Rote, gelbe und orange Farbstoffe bleiben.",
        "Das Laub am Boden ist Wärmeschutz und Versteck für kleine Tiere."
      ] },
    { title: "Bäume in den Tropen",
      points: [
        "In den Tropen gibt es keine Jahreszeiten.",
        "Einige Bäume werfen in Trockenzeiten ihre Blätter ab und bilden gleich neue („Verjüngung“).",
        "Die Blätter sind für lange Zeit gebaut und an Feuchtigkeit und viel Licht angepasst.",
        "Sie sind groß und dick und haben eine Blattspitze zum „Abtropfen“."
      ] },
    { title: "Zwittrig oder getrenntgeschlechtlich?",
      points: [
        "Zwittrig: Eine Blüte hat männliche (Staubblätter) UND weibliche Geschlechtsorgane (Fruchtblätter).",
        "Getrenntgeschlechtlich: Es gibt männliche und weibliche Blüten.",
        "Einhäusig: Auf einer Pflanze wachsen männliche und weibliche Blüten.",
        "Zweihäusig: Auf einer Pflanze wachsen nur männliche oder nur weibliche Blüten."
      ] },
    { title: "Der Transpirationssog",
      points: [
        "Transpiration: Wasser wird zu Wasserdampf und vom Lebewesen abgegeben.",
        "Sog bedeutet „saugen“.",
        "Durch den Sog wird das Wasser von den Wurzeln bis in die Krone transportiert."
      ], tip: "Das ist wie beim Trinken mit einem Strohhalm." },
    { title: "Nadelbäume",
      points: [
        "Nadelbäume sind an Kälte und Trockenheit angepasst.",
        "Problem im Winter: wenig Wasser bei den Wurzeln, aber die Blätter verdunsten Wasser.",
        "Lösung: Nadeln sind schmale, spitze Blätter – sie verdunsten wenig Wasser.",
        "Eine Wachsschicht um die Nadeln schützt sie.",
        "Vorteil: Die Nadeln bleiben im Winter am Baum → Fotosynthese auch im Winter."
      ] },
    { title: "Zapfen",
      points: [
        "Nadelbäume sind Nacktsamer: Die Samenanlagen liegen offen am Zapfen.",
        "Bei Bedecktsamern sind die Samenanlagen im Fruchtknoten bedeckt.",
        "Zapfen entstehen aus weiblichen Blütenständen.",
        "Der Wind trägt den Pollen der männlichen Blüten zu den weiblichen Samenanlagen.",
        "Kontakt = Bestäubung. Verschmelzen = Befruchtung."
      ] }
  ],

  sporen: [
    { title: "Sporenpflanzen",
      points: [
        "Sporenpflanzen gibt es schon länger als die Dinosaurier.",
        "Man unterteilt sie in Moose und Farne.",
        "Sie haben keine Blüten, keine Samen und keine Früchte.",
        "Sie vermehren sich geschlechtlich UND ungeschlechtlich durch Sporen."
      ] },
    { title: "Sporen",
      points: [
        "Sporen sind kleine „Körnchen“.",
        "Sie entstehen in Sporenbehältern. Diese platzen auf und die Sporen werden verbreitet.",
        "Sporen haben eine widerstandsfähige Hülle.",
        "Vorteil: Sie überstehen ungünstige Bedingungen wie Kälte und Trockenheit."
      ] },
    { title: "Moose",
      points: [
        "Moose sind Pionierpflanzen: Sie besiedeln als erste einen Standort.",
        "Sie haben keine Wurzeln, nur Wurzelhaare.",
        "Moose sind Überlebenskünstler: Sie nehmen überall am Körper Wasser auf.",
        "Sie brauchen wenig Licht und können beinahe überall wachsen."
      ] },
    { title: "Moose speichern Wasser",
      points: [
        "Im Wald versickert das Regenwasser nur langsam.",
        "Moose saugen sich mit Wasser voll wie ein Schwamm.",
        "Sie geben das Wasser nur langsam an den Boden ab."
      ] },
    { title: "Farne",
      points: [
        "Farnpflanzen haben keine Blüten, aber Wurzel, Spross und Blatt.",
        "Die Blätter der Farne heißen Farnwedel. Junge Wedel sind eingerollt und wachsen im Frühjahr.",
        "Anders als Moose haben Farne Blattnerven. Sie leiten Wasser, Mineralstoffe und Nährstoffe.",
        "Die Sporenbehälter sitzen auf der Unterseite der Wedel."
      ] },
    { title: "Der Generationswechsel",
      points: [
        "Zwei verschiedene Generationen entwickeln sich abwechselnd.",
        "Die eine Generation pflanzt sich mit Geschlechtszellen fort (geschlechtlich).",
        "Die andere Generation vermehrt sich mit Sporen (ungeschlechtlich)."
      ] },
    { title: "Generationswechsel beim Farn",
      points: [
        "1. Die Farnpflanze bildet Sporenkapselhäufchen mit Sporen.",
        "2. Aus einer Spore wächst ein kleiner Vorkeim.",
        "3. Am Vorkeim entstehen Eizelle und Schwärmer (Geschlechtszellen).",
        "4. Nach der Befruchtung wächst daraus eine neue Farnpflanze."
      ], tip: "Farnpflanze = Sporen bildende Generation. Vorkeim = Geschlechtszellen bildende Generation." }
  ],

  pilze: [
    { title: "Was sind Pilze?",
      points: [
        "Pilze haben kein Chlorophyll (Blattgrün) – darum machen sie keine Fotosynthese.",
        "Sie ernähren sich von organischen Stoffen. Diese werden außerhalb des Pilzes zersetzt und dann aufgenommen.",
        "Pilze sind weder Pflanzen noch Tiere. Sie bilden ein eigenes Reich der Lebewesen."
      ] },
    { title: "Der Hallimasch – das größte Lebewesen",
      points: [
        "Im Jahr 2000 wurde in Oregon (USA) ein riesiger Hallimasch entdeckt.",
        "Er ist etwa 2 400 Jahre alt.",
        "Er ist 900 Hektar groß – so groß wie 1 260 Fußballfelder – und etwa 1 m tief.",
        "Bei Wärme und Feuchte leuchtet er: Biolumineszenz (Lichterzeugung durch Lebewesen)."
      ] },
    { title: "Aufbau eines Pilzes",
      points: [
        "Das Hauptorgan des Pilzes ist das Fadengeflecht (Mycel) im Boden.",
        "Eine Hyphe ist ein einzelner Pilzfaden.",
        "Das „Schwammerl“ ist der Sporenkörper über der Erde – mit Hut, Lamellen, Ring und Stiel.",
        "Sporen dienen der Vermehrung und Verbreitung. Aus Sporen entstehen neue Pilzgeflechte."
      ], tip: "Verschimmelte Marmelade gehört in den Müll: Das Pilzgeflecht ist auch dort, wo man nichts sieht." },
    { title: "Vom Pilz zum Pilz",
      points: [
        "Ein reifer Sporenträger bildet an den Lamellen „+“- und „–“-Sporen.",
        "Aus den Sporen wachsen Pilzfäden (Hyphen).",
        "Die Hyphen verschmelzen – es entsteht ein neues Mycel.",
        "Aus dem Mycel wächst ein junger Sporenträger."
      ] },
    { title: "Sporenverbreitung",
      points: [
        "Pilze verbreiten ihre Sporen auf verschiedene Arten:",
        "durch Wind, durch Aasgeruch (lockt Tiere an), durch Regentropfen oder durch Berührung und Druck.",
        "Die Form des Pilzes ist ein Hinweis darauf, wie er seine Sporen verbreitet."
      ] },
    { title: "Ernährung: Destruenten",
      points: [
        "Destruenten ernähren sich von abgestorbenem, organischem Material und zersetzen es.",
        "So entstehen Nährstoffe für andere Pflanzen.",
        "Sie sind ein wichtiger Teil des Nährstoffkreislaufs.",
        "Beispiele: Champignon, Schimmelpilze"
      ] },
    { title: "Ernährung: Parasiten",
      points: [
        "Parasiten (Schmarotzer) ernähren sich von einem Lebewesen und schädigen es.",
        "Das geschädigte Lebewesen heißt Wirt (Tiere, Pflanzen und Menschen).",
        "Beispiele: Fußpilz, Hallimasch"
      ] },
    { title: "Ernährung: Symbionten",
      points: [
        "Symbiose = Zusammenleben von Lebewesen, bei dem beide Partner Vorteile haben.",
        "Pilzfäden dringen in die Wurzeln ein. Der Pilz bekommt Nährstoffe vom Baum und gibt Wasser und Mineralsalze ab.",
        "Wenn Pflanze und Pilz eine Symbiose bilden, heißt das Mykorrhiza.",
        "Beispiele: Steinpilz, Eierschwammerl, Fliegenpilz"
      ] },
    { title: "Speisepilz oder giftig?",
      points: [
        "Manche Pilze sehen sich sehr ähnlich, z. B. Steinpilz und Gemeiner Gallenröhrling.",
        "Vergiftung nach 6–48 Stunden: Durchfall, Erbrechen, Blutdruckabfall.",
        "Nach scheinbarer Besserung: Leber- und Nierenversagen, Magen- und Darmblutungen.",
        "In schweren Fällen Tod nach 4–7 Tagen."
      ] },
    { title: "Was tun bei einer Pilzvergiftung?",
      points: [
        "Ruhe bewahren! Vergiftungsinformationszentrale anrufen und ins Krankenhaus.",
        "Keine Selbstbehandlung, keine Milch, kein Alkohol.",
        "Putzreste, Essensreste und Erbrochenes aufheben.",
        "Wichtig für den Arzt: Zeit zwischen Essen und Beschwerden, welcher Pilz, Garzeit, Sammelort, wie viele Personen."
      ] },
    { title: "Regeln für das Pilzesammeln",
      points: [
        "Sammle nur Pilze, die du sicher kennst!",
        "Drehe die Sporenträger heraus oder schneide sie ab – so wird das Mycel nicht geschädigt.",
        "Bewahre Pilze luftig auf (z. B. im Korb), nicht im Plastiksack – sonst zersetzt sich das Eiweiß.",
        "Verarbeite Pilze rasch, denn sie verderben schnell."
      ] },
    { title: "Flechten",
      points: [
        "Eine Flechte ist ein Lebewesen aus Pilz und Alge (Symbiose).",
        "Der Pilz schützt vor Austrocknung und UV-Strahlen.",
        "Die Alge bildet Nahrung durch Fotosynthese."
      ] }
  ]
};
