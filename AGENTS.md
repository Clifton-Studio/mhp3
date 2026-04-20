# AGENTS.md

Guidance for coding agents working in this Astro template.

## Project Overview

This is an Astro 6 static website based on the Relative Astro Template by shadcnblocks. It uses Astro pages, React components, Tailwind 4, shadcn/ui-style primitives, MD/MDX content, RSS, and sitemap generation.

Important paths:

- `src/pages/` contains Astro routes.
- `src/components/sections/` contains page-level marketing sections.
- `src/components/elements/` contains smaller template-specific building blocks.
- `src/components/ui/` contains shadcn/ui-style primitives.
- `src/content/blog/` contains Markdown and MDX blog posts.
- `src/consts.ts` contains global site metadata and branding defaults.
- `astro.config.mjs` contains Astro integrations, static output, site URL, Tailwind, and font config.
- `public/` contains static assets.

## Design And Implementation Principles

Use the existing Astro template as the design system.

Before making UI changes, inspect the relevant files in `src/pages/`, `src/components/sections/`, `src/components/elements/`, and `src/components/ui/`.

Prefer this order:

1. Reuse an existing page/section/component as-is with new copy or data.
2. Adapt an existing section/component while preserving its local style and API shape.
3. Compose existing UI primitives into a new section only when no existing section fits.
4. Add a new primitive or dependency only when there is a clear, project-specific need.

Do not introduce a parallel design system. Reuse existing `Button`, `Card`, `Badge`, `Accordion`, `Tabs`, navigation, layout, spacing, typography, and Tailwind conventions wherever possible. IMPORTANT: when not possible, stop and ask what to do.

Keep Astro pages thin. Pages should mostly compose layouts and sections. Section components should own the actual marketing UI.

Keep changes scoped. Do not perform broad refactors, redesign unrelated pages, or rename large component families unless the user explicitly asks.

## Template-First Workflow

When asked to build or redesign a page:

1. Identify existing sections that can satisfy the request.
2. Reuse or adapt those sections first.
3. Keep the template's visual language unless the user asks for a distinct brand direction.
4. If a new section is needed, base it on the closest existing section.
5. Avoid adding dependencies unless the current stack cannot reasonably solve the problem.

For requests like "add pricing", "add FAQ", "add testimonials", or "add contact", inspect the matching existing section before creating anything new.

For copy, branding, and metadata changes, prefer editing `src/consts.ts` and relevant page/section content rather than scattering duplicated constants.

## Frontend Quality Bar

Make the usable experience the first screen. Do not create a marketing wrapper around a tool or page when the requested experience itself can be shown directly.

Use stable responsive dimensions for fixed-format UI such as navs, cards, controls, grids, counters, and repeated tiles so hover states or dynamic content do not cause layout shifts.

Keep text inside its parent at mobile and desktop sizes. Adjust layout or wrapping rather than letting labels overflow or overlap.

Use icons for icon-like actions, familiar UI controls for settings, and concise labels for commands. Do not add explanatory in-app text about how the UI was built.

Avoid one-note color palettes and decorative effects that do not match the template. Preserve the template's established paradigms.

Do not place cards inside cards. Use cards for repeated items, modals, and framed tools; use sections and constrained layouts for page structure.
