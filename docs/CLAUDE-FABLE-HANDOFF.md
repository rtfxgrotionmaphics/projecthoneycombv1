# Claude Fable handoff

This repository is prepared so Claude Code using the Fable model can work from the complete source rather than reverse-engineering the public site.

## Recommended import

1. Push this repository to GitHub.
2. Connect or select the GitHub repository in Claude/Claude Code.
3. Ask Claude to read `CLAUDE.md`, `README.md`, and this handoff before editing.
4. Have Claude run `npm ci` and `npm test` to establish a clean baseline.
5. Describe the requested visual or functional change and require the checks in `CLAUDE.md` before completion.

Suggested first prompt:

```text
Read CLAUDE.md, README.md, and docs/CLAUDE-FABLE-HANDOFF.md. Install with npm ci, run the existing test suite, and summarize the current architecture and visual invariants before making changes. Preserve all approved Honeycomb copy, assets, and layout registration unless I explicitly say otherwise.
```

## Current product behavior

- A full-viewport archive field displays approved honeycomb cells and organic vines.
- The header opens Explore, Stories, About, and Submit panels.
- Portraits are registered to approved cells and are positioned from shared layout data.
- Empty cell hotspots are interaction-ready placeholders for future archive videos.
- Escape closes the menu or panel; the archive field centers on initial load.

## Technical baseline

- React 19 and TypeScript
- Vite with vinext
- Cloudflare-compatible server output
- No required environment variables
- No active database or object-storage binding
- npm is the canonical package manager

## Visual invariants

- `app/honeycomb-bright-layout.json` uses a fixed coordinate canvas. Percentages in `app/page.tsx` derive from that canvas and align with the approved cell artwork.
- `hc-approved-cells-150-alpha.png`, `hc-final-fuller-vine-system-review-18.png`, and `hc-archive-background.webp` form the active archive composition.
- The bundled Inter and Montserrat files are intentional; avoid replacing them with remote font dependencies.
- Portrait crops and `object-position` values are individually tuned.

## Safe change workflow

1. Make the smallest coherent change.
2. Update tests when behavior intentionally changes; never weaken content-preservation checks just to make them pass.
3. Run `npm run build`, `npm test`, and `npm run lint`.
4. Review the page at desktop and mobile widths for any change affecting layout.
5. Commit source and web assets together so a checkout is always complete.

## Deployment note

`.openai/hosting.json` binds this checkout to the existing OpenAI Sites project. It does not contain a secret. Keep it for Sites continuity; a different hosting provider may ignore it.
