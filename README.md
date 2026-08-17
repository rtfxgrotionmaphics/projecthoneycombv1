# Honeycomb Interactive Test

An interactive design preview for Honeycomb, a living archive of personal UFO, UAP, and unexplained experiences.

Live preview: <https://honeycomb-interactive-test.djstangegfx.chatgpt.site/>

## What is included

- The full React/TypeScript source for the single-page experience
- All web-ready image assets, portraits, identity marks, and bundled fonts
- Responsive interactions for navigation, story panels, the archive field, and portrait cells
- Content-preservation and rendered-output tests
- OpenAI Sites deployment configuration (kept for provenance; it is not required for local editing)

See [`docs/ASSETS.md`](docs/ASSETS.md) for the asset map and [`docs/CLAUDE-FABLE-HANDOFF.md`](docs/CLAUDE-FABLE-HANDOFF.md) for the Claude/Fable handoff.

## Requirements

- Node.js 22.13 or newer
- npm 11 or newer

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server.

## Validate

```bash
npm run build
npm test
npm run lint
```

`npm test` performs a production build before running the tests.

## Project structure

```text
app/
  page.tsx                       Main interactive experience and content
  globals.css                    Complete visual and responsive system
  honeycomb-bright-layout.json   Cell coordinates used for hotspots/portraits
  layout.tsx                     Page metadata and document shell
public/
  people/                        Archive portrait photography
  team/                          About-panel portraits
  fonts/                         Bundled Inter and Montserrat font files
  hc-*                           Honeycomb artwork and identity assets
tests/                           Content and rendered-output checks
worker/                          Cloudflare-compatible worker entry
.openai/hosting.json             Existing OpenAI Sites project binding
CLAUDE.md                        Editing guidance for Claude Code/Fable
```

## Architecture notes

- The app uses React 19, TypeScript, Vite, vinext, and the Cloudflare Vite plugin.
- The page is intentionally a client component because its panels and navigation are interactive.
- Portrait and hotspot positions are calculated from `app/honeycomb-bright-layout.json`; do not replace these with arbitrary coordinates.
- Static files in `public/` are referenced with root-relative paths such as `/people/mark.png`.
- There is currently no database, object storage, external API, or required environment variable.
- The project uses npm as its only package manager. Commit `package-lock.json` and do not add another lockfile.

## Deployment portability

The checked-in setup targets the existing OpenAI Sites/Cloudflare runtime. For another host, keep the `app/` and `public/` folders intact and adapt the build/runtime layer as needed. No hosted secrets are required.

## Content and asset rights

No open-source license is granted by this repository. Portraits, names, copy, brand marks, and visual assets should be treated as client-provided or project-specific material. Confirm publication and reuse rights with the project owner before redistributing them.
