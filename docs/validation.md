# Validation notes

## Completed checks

- Production build with Node.js 24.18.1: six static pages generated.
- Astro and TypeScript diagnostics: zero errors, warnings or hints.
- Prettier: all matched source files conform to the formatter configuration.
- Generated HTML: all local links, image/script/style assets and fragment targets resolve.
- Browser: RF stage selection, journal category filtering, search empty state, filter reset and article navigation verified.
- Responsive checks: homepage and article at 390px; homepage at 1366px. No horizontal document overflow at those sizes.
- No browser console errors observed during these checks.

## Dependency audit

On 2026-10-03, npm reported two high-severity entries: `http-cache-semantics` and its dependent `astro`, both caused by the same advisory, GHSA-ch52-4w7c-c8xp. The latest published `http-cache-semantics` version available at verification time was 4.2.0, which is included in the advisory. npm suggested an incompatible downgrade to Astro 2; that downgrade was not applied.

Astro imports this dependency in its remote image build pipeline. This project uses a local image, system fonts and static output, with no remote image optimisation, authenticated requests or runtime response cache. The generated site contains no Astro server runtime. Recheck the advisory before introducing remote image optimisation or server-side caching, and update the dependency when a compatible fix is published.

## Node.js

Astro's transitive `unifont` dependency installs `undici` 8, which requires Node.js 22.19 or newer. `.nvmrc` selects Node.js 24. The project engine requirement reflects the transitive requirement rather than Astro's lower minimum.
