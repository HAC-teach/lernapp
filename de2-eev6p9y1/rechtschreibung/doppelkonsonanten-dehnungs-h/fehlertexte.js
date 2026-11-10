// Fehlertexte zu „Doppelkonsonanten und Dehnungs-h“ (Deutsch, 2. Klasse, Rechtschreibung)
// Alle Texte selbst ausgedacht. Jeder Text hat etwa 250 Wörter und genau 10 Fehler – nur Fehler aus dem Thema des Textes.
// Im Text: [falsch|richtig|Erklärung]. Absätze sind durch eine Leerzeile getrennt. Alles andere muss richtig geschrieben sein.
// topic = id aus TOPICS (questions.js), title = Überschrift, hint = Hinweis, worauf die Kinder achten sollen.
const FEHLERTEXTE = [
  // ---------- I. Doppelkonsonanten ----------
  { topic: "doppel", title: "Das Gewitter", hint: "Achte nur auf einfache und doppelte Mitlaute (auch ck und tz). Manchmal fehlt ein Buchstabe, manchmal ist einer zu viel.",
    text: `
Am Nachmittag war der [Himel|Himmel|kurzes i → mm] noch blau. Wir saßen im Garten und aßen Kuchen. Plötzlich wurde es dunkel. Dicke Wolken zogen über die Stadt, und ein [kallter|kalter|nach dem a kommen schon l und t → nicht verdoppeln] Wind kam auf. Meine Mutter rief: „Schnell, [komt|kommt|kommen: kurzes o → mm] alle ins Haus!“ Wir trugen die Teller und die Tassen in die Küche.

Kaum waren wir drinnen, begann es zu regnen. Zuerst fielen nur ein paar [Tropffen|Tropfen|nach dem o kommen schon p und f → nicht verdoppeln]. Dann [praselte|prasselte|kurzes a → ss] das Wasser auf das Dach. Ein heller [Bliz|Blitz|kurzes i → tz] zuckte, und gleich darauf hörten wir den [Doner|Donner|kurzes o → nn]. Unser Hund kroch vor Angst unter das Bett. Auch meine kleine Schwester hielt sich die Ohren zu.

Mein Vater zündete eine Kerze an, denn das Licht war ausgegangen. Im [Zimer|Zimmer|kurzes i → mm] war es jetzt richtig gemütlich. Wir setzten uns auf den Teppich und spielten Karten. Draußen bog der Sturm die Äste der Bäume. Das Wasser floss in kleinen Bächen über den Weg. Meine Oma erzählte, dass früher einmal der Keller voll Wasser war. Damals mussten alle Nachbarn mit Kübeln helfen.

Nach einer Stunde wurde es still. Der Regen hörte auf, und die [Sone|Sonne|kurzes o → nn] kam wieder hervor. Wir liefen in den Garten. Alles war nass und [glizerte|glitzerte|kurzes i → tz] im Licht. Auf der Wiese standen große Pfützen. Meine Schwester sprang sofort hinein, und ihre Hose wurde ganz schmutzig. Über den Dächern sahen wir einen bunten Regenbogen. Der Hund kam endlich unter dem Bett hervor und schüttelte sich. Die Luft roch frisch, und die Vögel begannen wieder zu singen. Am Abend gab es Suppe und warmes Brot mit Butter. So schnell kann sich das Wetter ändern.` },

  { topic: "doppel", title: "Der Flohmarkt", hint: "Achte nur auf einfache und doppelte Mitlaute (auch ck und tz). Manchmal fehlt ein Buchstabe, manchmal ist einer zu viel.",
    text: `
Am Sonntag war in unserer Gasse ein Flohmarkt. Schon um sieben Uhr [stelten|stellten|stellen: kurzes e → ll] die Leute ihre Tische auf. Meine Mutter und ich hatten am Abend davor alles in Schachteln gepackt: alte Bücher, eine [Pupe|Puppe|kurzes u → pp], Tassen, Teller und eine Lampe.

Unser Platz war gleich neben einem Mann, der Uhren verkaufte. Er war sehr [net|nett|kurzes e → tt] und half uns beim Aufbauen. Bald kamen die ersten Besucher. Eine Frau wollte den Preis für eine [Dekke|Decke|statt kk schreibt man ck] wissen. Ich sagte: „Zwei Euro.“ Sie [nikte|nickte|kurzes i → ck] und gab mir das Geld. Das war mein erstes Geschäft!

Zu Mittag wurde es heiß. Wir [trannken|tranken|nach dem a kommen schon n und k → nicht verdoppeln] kalten Saft und aßen Brote mit Käse. Ein kleiner Bub blieb lange vor unserem Tisch stehen. Er schaute immer wieder auf ein rotes Auto aus Blech. Leider hatte er zu wenig Geld. Da schenkte meine Mutter es ihm. Er [rante|rannte|rennen: kurzer Selbstlaut → nn] glücklich zu seinem Vater.

Am Nachmittag begann es leicht zu regnen. [Schnel|Schnell|kurzes e → ll] deckten wir alles mit einer Plane zu. Zum Glück hörte der Regen bald wieder auf. Ein Mädchen kaufte drei Bücher und ein [Spiell|Spiel|langes ie → nur ein l] mit bunten Würfeln. Ein alter Herr suchte eine [Pfane|Pfanne|kurzes a → nn] für seine Küche und fand bei uns eine.

Um fünf Uhr packten wir zusammen. Die Kasse war gut gefüllt, und die meisten Schachteln waren leer. Nur die Lampe wollte niemand haben. Sie steht jetzt wieder in unserem Keller. Mit dem Geld gehen wir nächste Woche ins Kino. Den Rest spare ich für ein neues Rad. Der Flohmarkt war anstrengend, aber er hat mir viel Spaß gemacht. Im nächsten Jahr mache ich sicher wieder mit.` },

  // ---------- II. Dehnungs-h ----------
  { topic: "dehnung", title: "Ferien bei Oma", hint: "Achte nur auf das Dehnungs-h. Manchmal fehlt es, manchmal steht ein h, wo keines hingehört.",
    text: `
In den Ferien [faren|fahren|langes a vor r → Dehnungs-h] wir jedes [Jar|Jahr|langes a vor r → Dehnungs-h] zu meiner Oma. Sie [wont|wohnt|wohnen: langes o vor n → Dehnungs-h] in einem kleinen Dorf in einem grünen Tal. Die Fahrt mit dem Zug dauert fast drei Stunden. Ich nehme immer ein Buch mit, aber meistens schaue ich nur aus dem Fenster.

Heuer [kahmen|kamen|kam und kamen schreibt man ohne h] wir erst am Abend an. Oma wartete schon am Bahnhof. Sie schaute auf ihre alte [Ur|Uhr|langes u vor r → Dehnungs-h] und sagte: „Ihr seid zehn Minuten zu spät!“ Dann lachte sie und drückte uns fest. Zu Hause gab es zuerst eine warme Suppe mit Nudeln.

Am nächsten Morgen weckte mich der [Han|Hahn|langes a vor n → Dehnungs-h] vom Nachbarn. Zum Frühstück gab es frische Semmeln mit Honig und ein weiches Ei. Danach durfte ich im Stall helfen. Dort stehen zwei Kühe, ein Pferd und ein paar [Hüner|Hühner|langes ü vor n → Dehnungs-h]. Sie bekommen jeden Tag Körner. Das Pferd mag am liebsten Äpfel und Karotten.

Am Nachmittag gingen wir an den See. Das Wasser war [kül|kühl|langes ü vor l → Dehnungs-h]. Ich bin trotzdem hineingesprungen. Mein Bruder hatte keine Lust und blieb auf einem [Stul|Stuhl|langes u vor l → Dehnungs-h] am Ufer sitzen. Er las ein Heft über Tiere. Später bauten wir ein kleines Boot aus Holz und ließen es schwimmen.

Am Abend erzählte Oma von früher. Als Kind ging sie zu Fuß in die [Schuhle|Schule|Schule schreibt man ohne h]. Der Weg war weit, und im Winter lag oft viel Schnee. Trotzdem war sie gerne dort, weil ihre Lehrerin so nett war. Ich höre diese Geschichten sehr gerne. Nach einer Woche mussten wir leider wieder nach Hause. Zum Abschied schenkte mir Oma einen Korb mit Äpfeln. Ich freue mich schon auf das nächste Mal.` },

  { topic: "dehnung", title: "Mein neues Rad", hint: "Achte nur auf das Dehnungs-h. Manchmal fehlt es, manchmal steht ein h, wo keines hingehört.",
    text: `
Zu meinem Geburtstag bekam ich ein neues [Farrad|Fahrrad|fahren: langes a vor r → Dehnungs-h]. Es ist rot und hat sieben Gänge. Ich wollte es [ser|sehr|langes e vor r → Dehnungs-h] gerne sofort ausprobieren. Mein Vater sagte aber: „Zuerst stellen wir den Sattel richtig ein.“ Er [nam|nahm|nehmen, nahm: Dehnungs-h vor m] sein Werkzeug und drehte an einer Schraube. Nach [zen|zehn|langes e vor n → Dehnungs-h] Minuten war alles fertig.

Wir fuhren gemeinsam los. Zuerst ging es an der Bahn entlang, dann über eine Brücke aus [Stal|Stahl|langes a vor l → Dehnungs-h]. Der Weg war am Anfang breit und eben. Später wurde er [schmahl|schmal|schmal schreibt man ohne h]. Links und rechts standen hohe Bäume. In einer Kurve musste ich stark bremsen, weil ein Hase über den Weg lief. Zum Glück ist nichts passiert.

Nach einer Stunde machten wir eine Pause. Wir setzten uns an einen Bach und aßen Brote. Das Wasser war [klahr|klar|klar schreibt man ohne h] und kalt. Ich hielt meine Füße hinein. Ein Mann mit einem Hund kam vorbei und grüßte uns freundlich. Der Hund wollte unbedingt ein Stück von meinem Brot. Ich gab ihm ein wenig, und er wedelte mit dem Schwanz.

Auf dem Rückweg kamen wir an einer [Müle|Mühle|langes ü vor l → Dehnungs-h] vorbei. Dort wird noch heute Korn zu [Mel|Mehl|langes e vor l → Dehnungs-h] gemahlen. Der Müller zeigte uns das große Rad. Es dreht sich schon seit über hundert Jahren. Ich durfte sogar einen kleinen Sack tragen. Er war schwerer, als ich dachte.

Am Abend war ich müde, aber stolz. Ich hatte fast zwanzig Kilometer geschafft! Vor dem Schlafen putzte ich mein Rad und stellte es in den Keller. Morgen will ich mit meiner Freundin zum See fahren. Sie wohnt gleich um die Ecke und hat auch ein neues Rad. Hoffentlich bleibt das Wetter [schöhn|schön|schön schreibt man ohne h].` }
];
