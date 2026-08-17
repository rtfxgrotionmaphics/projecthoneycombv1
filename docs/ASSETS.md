# Asset inventory

All deployable assets live in `public/` and should be committed to source control. No external asset CDN is required.

## Active archive composition

- `hc-archive-background.webp`: full-page atmospheric background
- `hc-approved-cells-150-alpha.png`: aligned illuminated/dormant cell field
- `hc-final-fuller-vine-system-review-18.png`: active foreground vine layer
- `hc-single-cell-hover.png`: cell hover and portrait shell treatment
- `hc-connected-field-watermark.svg`: header/site icon mark
- `hc-connected-field-watermark-white.svg`: panel-footer mark

## Portraits

- `people/`: 15 archive/community portraits used in the cell field
- `team/`: five leadership portraits used in the About panel

Portrait crops are tuned in `app/page.tsx`; preserve their filenames and per-image `object-position` values when refactoring.

## Fonts

- `fonts/Inter-Regular.ttf`
- `fonts/Inter-SemiBold.ttf`
- `fonts/Montserrat-SemiBold.ttf`

They are loaded locally in `app/globals.css` so the design does not depend on a third-party font service.

## Design development assets

The remaining `hc-*` PNG, WebP, and SVG files are retained as approved explorations, alternates, or source references. They are not all loaded by the current page, but they are intentionally preserved for future Honeycomb revisions.

## Repository-size note

The largest individual asset is under GitHub's standard 100 MB per-file limit, so Git LFS is not required for this version. Keep full-resolution production masters outside this repository when they are not needed by the website; the existing `.gitignore` documents those excluded filenames.

## Rights

These files are project-specific. Do not assume they are public-domain or generally reusable. Confirm rights with the project owner before republishing portraits, names, copy, logos, or artwork outside the Honeycomb project.
