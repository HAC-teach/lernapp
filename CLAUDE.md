# Gewässer Lernspiel

A static learning app for a biology class (Austrian AHS, topic "1. Gewässer"), hosted on GitHub Pages.

- Repo: https://github.com/HAC-teach/lernapp (branch `main`, Pages from `/ (root)`)
- Live: https://hac-teach.github.io/lernapp/
- Source material: `C:\Users\thoma\OneDrive - AHS Gerasdorf\Schuljahr 26_27\3_Biologie\1. Gewässer\Gewässer_PPP.pptx`

## Rules

- Keep it fully static: plain HTML/CSS/JS, no build step, no frameworks, no npm, no external CDNs. It must work when served from GitHub Pages as-is.
- All student-facing text is in German, written for lower-secondary students (short sentences, simple words).
- Questions must be based on the slide content. Don't invent content beyond the slides without saying so.
- Keep it phone-friendly and keep the dark mode working.

## Files

- `index.html` – the whole app (UI, styles, logic). Rounds of `ROUND_SIZE` (10) random questions; best scores stored in `localStorage` under `gewaesser-best`.
- `questions.js` – `TOPICS` and `QUESTIONS`. Add or change questions here. Types:
  - `mc`: `options[]`, `answer` = index of the correct option
  - `tf`: `answer` = `true` / `false`
  - `order`: `items[]` in the correct order (shuffled for display)
  - `match`: `pairs[]` of `[term, answer]`; duplicate answers are fine (dropdowns use the unique set)
  - every question has `topic` (a `TOPICS` id), `q`, and an `info` explanation shown after answering
- `README.md` – short German guide for publishing.

## Environment

- Windows, PowerShell 5.1. No Python or Node installed.
- Git is installed at `C:\Program Files\Git\cmd\git.exe` but may not be on PATH in older shells.
- Pushing needs a GitHub browser sign-in, so run `git push` in the user's Terminal panel, not in a non-interactive shell.
- To test in the browser, serve the folder over HTTP (e.g. a small PowerShell `HttpListener` on localhost); `file://` pages can't load `questions.js` in the preview.
