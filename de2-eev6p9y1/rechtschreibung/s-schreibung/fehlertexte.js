// Fehlertexte zu „s-Schreibung“ (Deutsch, 2. Klasse, Rechtschreibung)
// Alle Texte selbst ausgedacht. Jeder Text hat etwa 250 Wörter und genau 10 Fehler – nur Fehler aus dem Thema des Textes.
// „das“ und „dass“ sind nie ein Fehler (gehört nicht zu diesem Lernspiel).
// Im Text: [falsch|richtig|Erklärung]. Absätze sind durch eine Leerzeile getrennt. Alles andere muss richtig geschrieben sein.
// topic = id aus TOPICS (questions.js), title = Überschrift, hint = Hinweis, worauf die Kinder achten sollen.
const FEHLERTEXTE = [
  // ---------- I. ss oder ß ----------
  { topic: "ssß", title: "Ein Tag am Fluss", hint: "Achte nur auf ss und ß: Manchmal steht ss statt ß, manchmal ß statt ss. Die Wörter „das“ und „dass“ sind immer richtig.",
    text: `
Am Sonntag wanderten wir zu einem kleinen [Fluß|Fluss|kurzes u → ss]. Der Weg führte zuerst über eine breite [Strasse|Straße|langes a → ß] und dann durch einen Wald. Es war sehr heiß, und wir trugen alle kurze Hosen. Meine Schwester hatte ihre Kappe [vergeßen|vergessen|kurzes e → ss], darum borgte ihr mein Vater seinen Hut.

Am Ufer suchten wir einen schattigen Platz. Das [Waßer|Wasser|kurzes a → ss] war klar und kalt. Ich zog sofort die Schuhe aus und hielt einen [Fuss|Fuß|langes u → ß] hinein. Kleine Fische schwammen um meine Zehen. Mein Bruder baute mit Ästen und Schnüren ein Floß. Es schwamm wirklich, aber nur ein paar Meter weit. Dann blieb es an einem Stein hängen.

Zu Mittag packte meine Mutter die Jause aus. Es gab Brote, Gurken und [süsse|süße|langes ü → ß] Marillen. Wir aßen alles auf, weil wir so hungrig waren. Danach lagen wir im Gras und schauten in die Wolken. Eine sah aus wie ein [grosser|großer|langes o → ß] Drache, eine andere wie ein Schloss mit drei Türmen.

Am Nachmittag wurde der Himmel plötzlich dunkel. Wir packten schnell zusammen, aber es war zu spät. Es [goß|goss|gießen → goss: kurzes o → ss] wie aus Kübeln, und nach einer Minute waren wir alle nass. Mein Vater lachte nur und meinte, jetzt müssten wir wenigstens nicht mehr schwitzen. Wir liefen zu einer Hütte am Waldrand und warteten dort. [Draussen|Draußen|nach au → ß] blitzte und donnerte es.

Nach einer halben Stunde kam die Sonne wieder heraus. Die Wiesen dampften, und überall glitzerten Tropfen. Auf dem Heimweg sangen wir Lieder. Zu Hause gab es heißen Tee und eine warme Dusche. Am Abend war ich so müde, dass ich beim [Eßen|Essen|kurzes e → ss] fast eingeschlafen wäre. Trotzdem war es ein schöner Tag. Ich weiß schon, wohin wir beim nächsten Ausflug gehen: wieder an den Fluss.` },

  { topic: "ssß", title: "Das Fest im Schloss", hint: "Achte nur auf ss und ß: Manchmal steht ss statt ß, manchmal ß statt ss. Die Wörter „das“ und „dass“ sind immer richtig.",
    text: `
In unserer Stadt steht ein altes Schloss. Einmal im Jahr gibt es dort ein [grosses|großes|langes o → ß] Fest für alle Kinder. Heuer durfte ich zum ersten Mal mit meiner Freundin hingehen. Schon am Tor [begrüsste|begrüßte|langes ü → ß] uns ein Mann in einer Ritterrüstung. Er gab uns einen Plan und zeigte uns den Weg in den Hof.

Dort standen viele bunte Zelte. In einem konnte man Brot backen, in einem anderen mit Pfeil und Bogen [schiessen|schießen|nach ie → ß]. Meine Freundin traf beim dritten Versuch genau in die Mitte. Ich schoss leider jedes Mal daneben. Danach schauten wir einem Schmied zu. Er hielt ein Stück Eisen ins Feuer, bis es rot und [heiss|heiß|nach ei → ß] war. Dann schlug er mit dem Hammer darauf, dass die Funken flogen.

Zu Mittag bekamen wir Hunger. An einem Stand gab es Suppe aus einem riesigen [Keßel|Kessel|kurzes e → ss]. Wir setzten uns auf eine Bank und [assen|aßen|essen → aßen: langes a → ß] zwei volle Teller. Zum Trinken gab es Apfelsaft aus einem [Faß|Fass|kurzes a → ss]. Neben uns saß eine Frau mit einem Falken auf der Hand. Der Vogel schaute uns streng an, aber er blieb ganz ruhig sitzen.

Am Nachmittag stiegen wir auf den höchsten Turm. Die Stufen waren schmal und steil. Oben mussten wir kurz rasten, weil uns die Beine wehtaten. Die Aussicht war herrlich: Wir sahen die ganze Stadt, den Fluss und weit [draussen|draußen|nach au → ß] die Berge. Meine Freundin wollte gar nicht mehr hinuntergehen.

Zum [Schluß|Schluss|kurzes u → ss] gab es noch ein Ritterturnier. Zwei Reiter galoppierten aufeinander zu, und alle Kinder schrien vor Aufregung. Niemand wurde verletzt, es war ja nur gespielt. Am Ausgang bekamen wir beide eine Urkunde. Ich habe sie [fleissig|fleißig|nach ei → ß] verziert und über mein Bett gehängt. Nächstes Jahr gehe ich bestimmt wieder hin.` },

  // ---------- II. s, ss oder ß ----------
  { topic: "s", title: "Besuch am Bauernhof", hint: "Achte nur auf den s-Laut: s, ss oder ß? In diesem Text steht oft ss oder ß, wo ein einfaches s hingehört. Die Wörter „das“ und „dass“ sind immer richtig.",
    text: `
In den Ferien besuchte ich meine Großeltern auf ihrem Bauernhof. Das alte [Hauss|Haus|Haus – Häuser: weiches s → einfaches s] steht am Rand eines kleinen Dorfes. Gleich am ersten Morgen weckte mich der Hahn. Ich schaute aus dem [Fenßter|Fenster|vor t steht einfaches s] und sah, wie Opa schon über den Hof ging.

Nach dem Frühstück durfte ich mithelfen. Zuerst fütterten wir die [Haßen|Hasen|weiches s → einfaches s]. Sie bekamen frisches [Grass|Gras|Gras – Gräser: weiches s → einfaches s] und ein paar Karotten. Dann holten wir die Eier aus dem Stall. Ein Huhn saß noch auf seinem [Nesst|Nest|vor t steht einfaches s] und wollte nicht aufstehen. Opa hob es vorsichtig hoch, und darunter lagen drei braune Eier.

Am Vormittag kehrte ich mit einem großen [Beßen|Besen|weiches s → einfaches s] den Hof. Das war anstrengender, als ich gedacht hatte. Zur Belohnung gab es eine Jause: Brot mit Butter und [Käße|Käse|weiches s → einfaches s], dazu ein Glas kalte Milch. Wir saßen auf der Bank vor dem Haus und schauten den Schwalben zu.

Am Nachmittag zeigte mir Oma ihren Garten. Dort wachsen Salat, Bohnen und anderes [Gemüsse|Gemüse|weiches s → einfaches s]. Hinter dem Zaun blühen rote und gelbe Rosen. Ich wollte an einer Blüte riechen, aber darin saß eine [Wesspe|Wespe|vor p steht einfaches s]. Zum Glück flog sie gleich weg. Später pflückten wir Kirschen. Ich aß mehr, als ich in den Korb legte.

Am Abend wurde es still auf dem Hof. Die Kühe standen im Stall, und die Katze schlief auf der Stiege. Nur eine kleine [Mauß|Maus|Maus – Mäuse: weiches s → einfaches s] huschte durch die Scheune. Oma erzählte mir beim Essen, wie sie als Kind hier gelebt hat. Damals gab es noch kein Auto und kein Telefon im Dorf. Ich hörte lange zu und ging erst spät ins Bett. Draußen war es ganz leise. Am liebsten wäre ich den ganzen Sommer geblieben.` },

  { topic: "s", title: "Der letzte Schultag", hint: "Achte nur auf den s-Laut: s, ss oder ß? Manchmal fehlt ein Buchstabe, manchmal steht der falsche da. Die Wörter „das“ und „dass“ sind immer richtig.",
    text: `
Am letzten Schultag vor den Ferien waren alle aufgeregt. Schon im [Buss|Bus|Bus hat ein kurzes u, aber nur ein einfaches s] wurde laut gelacht und gesungen. Meine Freundin hatte für die ganze [Klase|Klasse|scharfes s nach kurzem a → ss] Kekse gebacken. Sie trug die [Doße|Dose|weiches s → einfaches s] vorsichtig auf dem Schoß, damit nichts zerbrach.

In der ersten Stunde räumten wir unsere Fächer aus. In meinem lagen ein alter [Pinßel|Pinsel|weiches s → einfaches s], zwei Hefte und eine einzelne Socke. Niemand wusste, wem sie gehörte. Unser Lehrer hängte inzwischen die Zeichnungen von der Wand ab. Jedes Kind durfte sein Bild mit nach Hause nehmen.

Dann kam der wichtigste Moment: Es gab das [Zeugniss|Zeugnis|Wörter auf -nis haben nur ein s (Mehrzahl: Zeugnisse)]. Der Lehrer rief uns einzeln nach vorne und sagte zu jedem ein paar nette Worte. Mein Herz klopfte, als ich an der Reihe war. Aber ich hatte mich umsonst gefürchtet: In [Mußik|Musik|weiches s → einfaches s] und Turnen bekam ich sogar eine Eins.

In der großen Pause spielten wir ein letztes Mal [Fusball|Fußball|Fuß – Füße: scharfes s nach langem u → ß] im Hof. Es war heiß, und bald hatten alle [Dursst|Durst|vor t steht einfaches s]. Zum Glück hatte die Schulwartin einen Krug mit kaltem Saft hingestellt. Wir tranken ihn in wenigen Minuten leer.

Zum Abschied sangen wir gemeinsam ein Lied. Manche hatten Tränen in den Augen, weil ein Mitschüler im Herbst in eine andere Stadt zieht. Wir schenkten ihm ein Heft, in das jeder etwas geschrieben hatte. Er freute sich sehr und versprach, uns bald zu besuchen.

Um elf Uhr läutete die Glocke zum letzten Mal. Alle stürmten hinaus auf die [Strase|Straße|scharfes s nach langem a → ß]. Vor dem Tor warteten schon viele Eltern. Meine Mutter nahm mich in den Arm und las gleich mein Zeugnis. Am Heimweg kauften wir zur Feier des Tages ein großes [Eiß|Eis|Eis – eisig: weiches s → einfaches s]. Jetzt liegen neun lange Wochen vor mir. Ich möchte schwimmen, lesen und ganz viel schlafen.` }
];
