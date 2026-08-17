# Claude project guidance

## Objective

Preserve and evolve the Honeycomb interactive archive without losing its approved visual alignment, copy, or identity assets.

## Start here

1. Read `README.md`.
2. Read `docs/CLAUDE-FABLE-HANDOFF.md` before changing architecture or visuals.
3. Inspect `app/page.tsx`, `app/globals.css`, and `app/honeycomb-bright-layout.json` together; they form one coordinated layout system.
4. Run `npm ci`, then `npm test` after material changes.

## Non-negotiable constraints

- Keep the approved Honeycomb copy intact unless the user explicitly requests copy edits.
- Preserve the relationship between `honeycomb-bright-layout.json`, the background cell artwork, hotspot coordinates, and portrait coordinates.
- Reuse the assets in `public/`; do not redraw brand marks or replace portraits with placeholders.
- Keep interactions keyboard accessible. Escape must close open navigation/panels, buttons need accessible names, and external links must remain explicit.
- Maintain responsive behavior and horizontal centering of the archive field on first load.
- Do not add authentication, persistence, analytics, or external services unless requested.
- Use npm only and keep `package-lock.json` authoritative.
- Do not commit credentials or local `.env` files.

## Important files

- `app/page.tsx`: content, navigation, panels, portraits, hotspots, and client-side behavior
- `app/globals.css`: layout, animation, responsive rules, and visual treatments
- `app/honeycomb-bright-layout.json`: approved geometric registration data
- `public/`: all runtime art, photography, fonts, and marks
- `tests/honeycomb-content.test.mjs`: copy and interaction invariants
- `tests/rendered-html.test.mjs`: production-render smoke test
- `.openai/hosting.json`: existing Sites project ID; preserve it when working with OpenAI Sites

## Definition of done

- `npm run build` passes.
- `npm test` passes.
- `npm run lint` has no errors.
- No missing assets appear in the browser.
- Desktop and mobile layouts remain usable.
