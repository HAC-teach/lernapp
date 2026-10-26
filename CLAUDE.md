# Lernspiele

Static learning apps for biology classes (Austrian AHS), hosted on GitHub Pages.

- Repo: https://github.com/HAC-teach/lernapp (branch `main`, Pages from `/ (root)`)
- Live: https://hac-teach.github.io/lernapp/
- Chapters and source material:
  - `bio2-ic0yjzio/pflanzen-pilze/` (2. Klasse, „1. Pflanzen und Pilze“, topics A. Bäume, B. Sporenpflanzen, C. Pilze): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\1. Pflanzen und Pilze\PPP_Pflanzen.pptx` + `PPP_Pilze.pptx` (slides on Schachtelhalme and Bärlappgewächse are left out on purpose)
  - `bio2-ic0yjzio/zelle/` (2. Klasse, „2. Die Zelle“, topics A. Zellen, B. Mikroskope, C. Mikroorganismen): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\2. Die Zelle\Zelle_PPP.pptx` (B. Mikroskope has no slide content – it uses standard lower-secondary knowledge about the light microscope: parts, magnification, handling)
  - `bio2-ic0yjzio/sinnesorgane/` (2. Klasse, „3. Sinnesorgane“): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\2_Biologie\3. Sinnesorgane\Sinnesorgane_PPP.pptx`. The slides only have A. Vom Atom zum Menschen and B. Sinnesorgane; at the teacher's request B is split, so the topics are A. Vom Atom zum Menschen, B. Gehirn und Nerven, C. Das Auge, D. Das Ohr, E. Haut, Nase und Zunge (organs of the body and the names of the 3 skin layers are standard knowledge, only shown as pictures on the slides)
  - `bio3-pnnstwfb/gewaesser/` (3. Klasse, „1. Gewässer“): `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\3_Biologie\1. Gewässer\Gewässer_PPP.pptx`
- Topic numbering (A, B, C …) follows the slides. Ignore links on slides.

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
- `lehrer-oagzajb8/` – teacher view (only for the teacher, never give it to students; the only page allowed to link grade folders). Subject tabs, student link per grade, chapter preview, live question counts. Its `apps.js` (`FAECHER`) lists every subject, grade folder and chapter: whenever you add a chapter, grade or subject, add it there too.

## Files (per chapter folder)

- `lernen.js` – `LESSONS[topicId]` = learning cards `{ title, points[], tip? }`, shown before the quiz of that topic. Content comes from the slides.
- `bilder.js` – `IMAGES[name]` = self-drawn inline SVGs (viewBox 0 0 400 260) for `label` questions. Don't copy pictures from the slides (copyright); draw simple SVGs instead. Organs are drawn in a simplified but anatomically correct shape – e.g. the heart never as the ♥ symbol (also in animations). `TOPIC_ICONS[topicId]` = line motif per topic (viewBox 0 0 48 48, stroke only) for topic tiles and headings.
- `index.html` – the whole app (UI, styles, logic). A topic quiz (and „Alle Themen gemischt“) asks ALL questions of the topic in random order – no round limit; best scores stored in `localStorage` under `<chapter>-best` (e.g. `gewaesser-best`). Also contains the „Millionenshow“ mode (mixed topics, only `mc` questions, max 15 – keep at least 15 `mc` questions, 3 jokers, best prize under `show`). At the end of a quiz an animation plays (no sound), themed to the chapter – one for „finished“, a bigger one when everything is right (also on a Millionenshow win). It is skipped with `prefers-reduced-motion`. Gewässer: „Unter Wasser“ (bubbles / rising water + jumping fish), inside `index.html`. Pflanzen und Pilze: „Waldboden“, one animation per topic in `animation.js` (`fxEnd(kind, topicId)`): falling leaves / tree grows and turns autumn-coloured · rising spores / fern fronds grow · mushrooms sprout / fairy ring. Die Zelle: „Gewebe & Schwarm“ in `animation.js`: cells / microbes rise like bubbles · plant tissue (honeycomb) grows from the centre (A) / microbe swarm circles and bursts (C); B and mixed use the mixed version. Sinnesorgane: „Sinneswelt“, one animation per topic in `animation.js`: cells/organs rise / Zelle → Gewebe → Organ → Organsystem → Mensch builds up (A) · nerve impulses zigzag up / nerve network grows and flashes (B) · blinking eyes rise / big eye opens, looks around, winks (C) · sound-wave rings + notes / big waves, pulsing ear, notes fly out (D) · scent swirls rise / taste drops (süß, salzig …) rain down (E); mixed: sense symbols rise / rain down.
- `questions.js` – `TOPICS` (`{ id, title, color }` – each topic has its own colour; lighter/darker shades are computed) and `QUESTIONS`. Add or change questions here. Types:
  - `mc`: `options[]`, `answer` = index of the correct option
  - `tf`: `answer` = `true` / `false`
  - `order`: `items[]` in the correct order (shuffled for display)
  - `match`: `pairs[]` of `[term, answer]`; duplicate answers are fine (dropdowns use the unique set)
  - `multi`: `options[]`, `answers[]` = indices of ALL correct options (select all that apply)
  - `label`: `image` = key in `IMAGES` (bilder.js), `markers[]` = `{ x, y, answer }` in the image's 400×260 units, optional `extra[]` = wrong terms added to the choices
  - `gap`: `text` with `{answer}` blanks (each becomes a dropdown), optional `extra[]` = wrong words added to the choices
  - every question has `topic` (a `TOPICS` id), `q`, and an `info` explanation shown after answering
- `README.md` – short German guide for publishing.

## Environment

- Windows, PowerShell 5.1. No Python or Node installed.
- Git is installed at `C:\Program Files\Git\cmd\git.exe` but may not be on PATH in older shells.
- Pushing needs a GitHub browser sign-in, so run `git push` in the user's Terminal panel, not in a non-interactive shell.
- To test in the browser, serve the folder over HTTP (e.g. a small PowerShell `HttpListener` on localhost); `file://` pages can't load `questions.js` in the preview.
