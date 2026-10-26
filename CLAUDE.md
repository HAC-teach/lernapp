# Gewässer Lernspiel

A static learning app for a biology class (Austrian AHS, topic "1. Gewässer"), hosted on GitHub Pages.

- Repo: https://github.com/HAC-teach/lernapp (branch `main`, Pages from `/ (root)`)
- Live: https://hac-teach.github.io/lernapp/
- Source material: `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\3_Biologie\1. Gewässer\Gewässer_PPP.pptx`

## Rules

- Keep it fully static: plain HTML/CSS/JS, no build step, no frameworks, no npm, no external CDNs. It must work when served from GitHub Pages as-is.
- All student-facing text is in German, written for lower-secondary students (short sentences, simple words).
- Questions must be based on the slide content. Don't invent content beyond the slides without saying so.
- Keep it phone-friendly. The design is always light (white background, `color-scheme: light only`) – no dark mode, don't follow the browser/OS colour scheme.
- Never put personal information in the repository (it is public): no names, photos, grades, emails or other data of students, teachers or parents — not in code, questions, examples, commit messages or file names. Strip such details from slide content before using it.

## Structure / access

- Root `index.html` is a neutral page that links nowhere. Each grade+subject lives in its own unguessable folder (e.g. `bio3-pnnstwfb/` = Biologie 3. Klasse); only that link goes to the students. Never link one grade's folder from another or from the root. All pages carry `noindex`; `robots.txt` disallows everything (never list folder names in it).
- `<grade folder>/index.html` – chapter list. Each chapter is a subfolder (e.g. `gewaesser/`) with the files below.
- `lehrer-oagzajb8/` – teacher view (only for the teacher, never give it to students; the only page allowed to link grade folders). Subject tabs, student link per grade, chapter preview, live question counts. Its `apps.js` (`FAECHER`) lists every subject, grade folder and chapter: whenever you add a chapter, grade or subject, add it there too.

## Files (per chapter folder)

- `lernen.js` – `LESSONS[topicId]` = learning cards `{ title, points[], tip? }`, shown before the quiz of that topic. Content comes from the slides.
- `bilder.js` – `IMAGES[name]` = self-drawn inline SVGs (viewBox 0 0 400 260) for `label` questions. Don't copy pictures from the slides (copyright); draw simple SVGs instead.
- `index.html` – the whole app (UI, styles, logic). A topic quiz (and „Alle Themen gemischt“) asks ALL questions of the topic in random order – no round limit; best scores stored in `localStorage` under `gewaesser-best`. Also contains the „Millionenshow“ mode (mixed topics, only `mc` questions, max 15 – keep at least 15 `mc` questions, 3 jokers, best prize under `show`).
- `questions.js` – `TOPICS` and `QUESTIONS`. Add or change questions here. Types:
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
