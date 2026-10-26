# Lernspiele

Static learning apps for biology classes (Austrian AHS), hosted on GitHub Pages.

- Repo: https://github.com/HAC-teach/lernapp (branch `main`, Pages from `/ (root)`)
- Live: https://hac-teach.github.io/lernapp/
- Chapters and source material:
  - `bio2-ic0yjzio/pflanzen-pilze/` (2. Klasse, „1. Pflanzen und Pilze“; slide topics Bäume, Sporenpflanzen, Pilze, split into A. Bau des Baumes, B. Laubbäume, C. Nadelbäume, D. Sporenpflanzen, E. Pilze: Bau und Vermehrung, F. Pilze: Ernährung und Sammeln): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\1. Pflanzen und Pilze\PPP_Pflanzen.pptx` + `PPP_Pilze.pptx` (slides on Schachtelhalme and Bärlappgewächse are left out on purpose)
  - `bio2-ic0yjzio/zelle/` (2. Klasse, „2. Die Zelle“; slide topics Zellen, Mikroskope, Mikroorganismen, split into A. Zellen und Leben, B. Tier- und Pflanzenzelle, C. Mikroskope, D. Einzeller und Bakterien, E. Nützliche und gefährliche Bakterien): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\2. Die Zelle\Zelle_PPP.pptx` (C. Mikroskope has no slide content – it uses standard lower-secondary knowledge about the light microscope: parts, magnification, handling)
  - `bio2-ic0yjzio/sinnesorgane/` (2. Klasse, „3. Sinnesorgane“): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\3. Sinnesorgane\Sinnesorgane_PPP.pptx`. The slides only have A. Vom Atom zum Menschen and B. Sinnesorgane; at the teacher's request B is split, so the topics are A. Vom Atom zum Menschen, B. Gehirn und Nerven, C. Das Auge, D. Das Ohr, E. Haut, Nase und Zunge (organs of the body and the names of the 3 skin layers are standard knowledge, only shown as pictures on the slides)
  - `bio3-pnnstwfb/gewaesser/` (3. Klasse, „1. Gewässer“; slide topic „Trinkwasser und Mensch“ is split, so the topics are A. Wasserkreislauf, B. Fließ- und stehende Gewässer, C. Trinkwasser und Kläranlage, D. Flüsse verändern, E. Das Meer, F. Amphibien und Fische): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\3_Biologie\1. Gewässer\Gewässer_PPP.pptx`
  - `bio2-ic0yjzio/wald/` (2. Klasse, „4. Ökosystem Wald“; slide topics A. Ökologie, B. Der Wald, C. Einflüsse auf den Wald, split into A. Ökologie, B. Aufgaben des Waldes, C. Waldtypen und Forst, D. Stockwerke und Nahrung, E. Einflüsse auf den Wald, F. Tropischer Regenwald): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\4. Ökosystem Wald\Der Wald_PPP.pptx` (video slides are left out)
- Topic order follows the slides. Big slide topics with clearly separate parts are split into several topics (at the teacher's request); the numbers then just count through. Topic titles in `TOPICS` are numbered with Roman numerals („I. …“, „II. …“, „III. …“) at the teacher's request; the letters A, B, C … used in this file only name the topic positions. Ignore links on slides.
- Per topic: at most 5 learning cards with only the most important points as short keywords or phrases (not full sentences, not all slide content), and at most 10 questions. No two questions of a topic may ask the same content (a `label` question naming parts and a question about their function count as different).

## Rules

- Keep it fully static: plain HTML/CSS/JS, no build step, no frameworks, no npm, no external CDNs. It must work when served from GitHub Pages as-is.
- All student-facing text is in German, written for lower-secondary students (short sentences, simple words).
- Questions must be based on the slide content. Don't invent content beyond the slides without saying so.
- Keep it phone-friendly. The design is always light (white background, `color-scheme: light only`) – no dark mode, don't follow the browser/OS colour scheme.
- Design „Forscherheft“ on all pages: graph-paper background, highlighter headings, cards with tape, topics as sticky notes in the topic colour. Branding: logo „Lernspiele“ + subject label from the shared root `marke.js` (`<span data-marke="bio">` + script tag; new subjects go into `FACH` there).
- Never put personal information in the repository (it is public): no names, photos, grades, emails or other data of students, teachers or parents — not in code, questions, examples, commit messages or file names. Strip such details from slide content before using it.

## Structure / access

- Root `index.html` is a neutral page that links nowhere. Each grade+subject lives in its own unguessable folder (e.g. `bio3-pnnstwfb/` = Biologie 3. Klasse); only that link goes to the students. Never link one grade's folder from another or from the root. All pages carry `noindex`; `robots.txt` disallows everything (never list folder names in it).
- `<grade folder>/index.html` – chapter list. Each chapter is a subfolder (e.g. `gewaesser/`) with the files below.
- `lehrer-oagzajb8/` – teacher view (only for the teacher, never give it to students; the only page allowed to link grade folders). Subject tabs, student link per grade, chapter preview, live question counts. Its `apps.js` (`FAECHER`) lists every subject, grade folder and chapter: whenever you add a chapter, grade or subject, add it there too. Its `neu.js` (`NEUIGKEITEN`) is the „Neuigkeiten“ list, opened with its own button in the teacher view header and shown only for the subject the entry's `fach` names (never mix subjects; a change that affects several subjects gets one entry per subject). The app loads `apps.js` and `neu.js` with a cache-busting query so changes show up at once: for EVERY change students or the teacher would notice (new chapter, new/changed questions, pictures, animations, design, features) add an entry at the top `{ datum, fach, wo, text, ziel? }` – German, short, written for the teacher; `ziel` = chapter folder for the preview button.

## Files (per chapter folder)

- `lernen.js` – `LESSONS[topicId]` = learning cards `{ title, points[], tip? }`, shown before the quiz of that topic. Content comes from the slides.
- `bilder.js` – `IMAGES[name]` = self-drawn inline SVGs (viewBox 0 0 400 260) for `label` questions. Don't copy pictures from the slides (copyright); draw simple SVGs instead. Organs are drawn in a simplified but anatomically correct shape – e.g. the heart never as the ♥ symbol (also in animations). `TOPIC_ICONS[topicId]` = line motif per topic (viewBox 0 0 48 48, stroke only) for topic tiles and headings.
- `index.html` – the whole app (UI, styles, logic). A topic quiz (and „Alle Themen gemischt“) asks ALL questions of the topic in random order – no round limit; best scores stored in `localStorage` under `<chapter>-best` (e.g. `gewaesser-best`). Also contains the „Millionenshow“ mode (mixed topics, only `mc` questions, max 15 – keep at least 15 `mc` questions, 3 jokers, best prize under `show`). At the end of a quiz an animation plays (no sound), themed to the chapter – one for „finished“, a bigger one when everything is right (also on a Millionenshow win). It is skipped with `prefers-reduced-motion`. Gewässer: „Unter Wasser“ (bubbles / rising water + jumping fish), inside `index.html`. Pflanzen und Pilze: „Waldboden“, one animation per slide topic in `animation.js` (`fxEnd(kind, topicId)`): falling leaves / tree grows and turns autumn-coloured (A–C) · rising spores / fern fronds grow (D) · mushrooms sprout / fairy ring (E–F). Die Zelle: „Gewebe & Schwarm“ in `animation.js`: cells / microbes rise like bubbles · plant tissue (honeycomb) grows from the centre (A–B) / microbe swarm circles and bursts (D–E); C and mixed use the mixed version. Split topics reuse their slide topic's animation via aliases at the end of `FX`. Sinnesorgane: „Sinneswelt“, one animation per topic in `animation.js`: cells/organs rise / Zelle → Gewebe → Organ → Organsystem → Mensch builds up (A) · nerve impulses zigzag up / nerve network grows and flashes (B) · blinking eyes rise / big eye opens, looks around, winks (C) · sound-wave rings + notes / big waves, pulsing ear, notes fly out (D) · scent swirls rise / taste drops (süß, salzig …) rain down (E); mixed: sense symbols rise / rain down. Ökosystem Wald: „Waldtiere“ in `animation.js`, the same for all topics: squirrels hop and birds fly past / food cycle builds up (Baum → Eichhörnchen → Marder → Uhu → Pilz → back to Baum).
- `questions.js` – `TOPICS` (`{ id, title, color }` – each topic has its own colour; lighter/darker shades are computed) and `QUESTIONS`. Add or change questions here. Types:
  - `mc`: `options[]`, `answer` = index of the correct option
  - `tf`: `answer` = `true` / `false`
  - `order`: `items[]` in the correct order (shuffled for display). Every food-chain task uses `chain: true`: items are shown side by side with arrows pointing right, and an arrow always means „wird gefressen von“ (also in `info` texts and learning cards)
  - `match`: `pairs[]` of `[term, answer]`; duplicate answers are fine (dropdowns use the unique set)
  - `multi`: `options[]`, `answers[]` = indices of ALL correct options (select all that apply)
  - `label`: `image` = key in `IMAGES` (bilder.js), `markers[]` = `{ x, y, answer }` in the image's 400×260 units, optional `extra[]` = wrong terms added to the choices. `x, y` is the point ON the part to label: the numbers never sit on the picture but in a margin left/right of it, with a leader line to that point (`pinLayout` in `index.html`; numbered left top-down, then right; at most 5 markers per side)
  - `gap`: `text` with `{answer}` blanks (each becomes a dropdown), optional `extra[]` = wrong words added to the choices
  - every question has `topic` (a `TOPICS` id), `q`, and an `info` explanation shown after answering
- `README.md` – short German guide for publishing.

## Environment

- Windows, PowerShell 5.1. No Python or Node installed.
- Git is installed at `C:\Program Files\Git\cmd\git.exe` but may not be on PATH in older shells.
- Pushing needs a GitHub browser sign-in, so run `git push` in the user's Terminal panel, not in a non-interactive shell.
- To test in the browser, serve the folder over HTTP (e.g. a small PowerShell `HttpListener` on localhost); `file://` pages can't load `questions.js` in the preview.
