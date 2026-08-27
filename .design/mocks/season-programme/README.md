# Campbell — "Season Programme" design round

A **design preview**, not the production site. One self-contained HTML file:
`campbell-season-programme.html` (~3.9 MB, images embedded, opens offline, no build step).

Open it in any browser, or share the hosted link.

## Concept

> Campbell is a repertory house's season programme — one masthead, one paper, six
> productions that each get their own poster — for someone choosing tonight, on a
> phone, by picture.

This is what resolves the brief's central tension ("each outlet its own personality,
while maintaining Campbell's design language"). A theatre company solves it every
season: one typographic system and one paper; each production gets its own ink and
its own plate.

## What is in it

- Homepage + all six house pages, fully navigable (`#/louve`, `#/dodicci`, …).
- **The ink curtain** — entering a house floods the screen with *that house's* colour.
  The transition is the concept, moving.
- Group palette ivory / black / subtle gold. Each house adds exactly one ink.
- Masked line rise on display type, clip-path plate reveals, parallax, ink wash on the
  bill, full-screen house drawer, per-page section rail, progress hairline.

## Content rules this file obeys

- **Every outlet detail is verbatim from the deployed build** — name, index, category,
  location, status, both body paragraphs. Nothing paraphrased, nothing invented.
- The only new prose is six one-line taglines, each a compression of that house's own
  paragraph.
- **Photography and copy Campbell has not supplied render as designed holds** naming
  exactly what is owed ("The bar — a pour, low light, hands in frame · SHOOT REQUIRED").
  The page doubles as the shot list and copy brief.
- Dodicci carries no photograph and no substitute. `brand-patiala.jpg` is an orphan of
  Royal House of Patiala, the house that used to occupy slot 06 — **do not reuse it.**

## Verified (not asserted)

- 15 viewports x 3 routes = 45 combinations: no horizontal overflow, no clipped text,
  no undersized tap targets. 320px through 3440px, including phone landscape.
- WCAG AA contrast on every text role (lowest 4.78:1).
- `prefers-reduced-motion` removes all movement and keeps every state legible.
- Zero JS errors.

## Not closable in design

- No video exists. The brief asks for cinematic hero video.
- 13 usable photographs across six houses; the design needs roughly 60-80.
  `brand-louve.jpg` is the best image in the library and is only 1080px wide.
