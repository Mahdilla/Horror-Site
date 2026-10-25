# The Anatomy of Fear

An interactive exhibition about horror psychology and writing craft. Built with Next.js App Router, TypeScript, Tailwind CSS 4, and Framer Motion. No API keys, paid services, database, or external image/font requests are required.

## Run locally

Use Node.js 22 or newer (validated with Node 24) and npm.

```bash
npm ci
npm run dev
```

The development server uses port 3000. For production: `npm run build` then `npm start`.

If the cloud machine does not allow npm's default cache directory, use `npm ci --cache /tmp/anatomy-npm-cache`.

## Validate

```bash
npm run typecheck
npm run build
npm test
```

Browser tests use `/usr/bin/chromium` when present, or `CHROMIUM_PATH` if supplied. Otherwise install Playwright Chromium with `npx playwright install chromium`. On a restricted network, its browser-download hosts must be allowed; the current cloud machine already has system Chromium. Tests start the production server, so build first. The five tests exercise all content routes, scene navigation, every lab, local draft/reflection persistence, export, mobile navigation, and reduced motion.

## Structure

- `src/lib/content.ts`: typed structured content, five concept lessons, four case dossiers, sources. Add a concept or case here and its route is generated automatically.
- `src/components/experiments.tsx`: breathing, dramatic irony, tension, movement, and face labs.
- `src/components/workshop.tsx`: local drafts, reflections, original examples, text export. This is experiment 006.
- `src/components/scene-breakdown.tsx`: reusable knowledge/assumption timeline.
- `src/components/artwork.tsx`: original SVG illustrations; no copyrighted film frames.
- `src/app`: homepage, concept library and five-stage lessons, case studies, laboratory, workshop, methodology.

## Editorial boundaries

Research, theoretical explanations, criticism, and craft advice are distinguished in the lessons and methodology. References are provided for substantive claims. The tension model is illustrative and not scientifically validated. The alternative response “That isn't me breathing” is hypothetical, not actual dialogue from The Others.

**Obsession:** the project owner identified Curry Barker's film (2026 release). The distributor page could not be retrieved during implementation, and the bedroom sequence has not been independently verified. Its dedicated page is explicitly a research dossier with an original face-perception exercise, not an invented scene analysis. Before expanding it, verify release metadata and directly inspect the identified scene. Sources list this limitation.

Sound is off by default and only plays after an explicit choice in the breathing experiment. Motion respects operating-system preferences and can be disabled in the header. Drafts remain in local storage on the current browser/device and can be exported. Storage failures are reported without blocking writing.
