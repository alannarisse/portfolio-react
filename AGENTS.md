# Portfolio maintenance

These instructions apply throughout this repository. Read `README.md` for local setup and upload instructions, and `src/routes/README.md` before changing routes. Keep the Lovable-managed block above intact.

## Purpose and content

- This is Alanna Risse's single-page QA Engineer / SDET portfolio, hosted at `portfolio.alannarisse.com` on DreamHost shared hosting.
- Lead with QA automation while preserving relevant development, accessibility, teaching, and design experience. Preserve supplied copy and factual claims; do not invent qualifications, employment dates, outcomes, or metrics.
- Keep work focused on the requested change. Preserve unrelated edits and avoid repository-wide formatting during small maintenance tasks.

## Where to make changes

- `src/data/portfolio.ts`: portfolio links, skills, featured jobs, other clients, personal projects, talks, writing, and case-study data. Prefer editing these records over duplicating content in components.
- `src/routes/index.tsx`: page sections, section-anchor navigation, and page metadata.
- `src/components/portfolio/`: portfolio-specific components, including `FeaturedJob`, `DeviceMockup`, and `ThemeToggle`.
- `src/styles.css`: global styles, theme tokens, and shared visual classes. Reuse existing Tailwind utilities and tokens.
- `src/components/ui/`: reusable UI primitives; use existing components before introducing a new dependency or parallel component system.
- `src/routes/__root.tsx`: document shell, shared metadata, stylesheet links, theme initialization, and error boundaries. Preserve `<Outlet />`, `<HeadContent />`, `<Scripts />`, and the query provider.
- `src/routeTree.gen.ts`: generated route tree; do not edit by hand. Use TanStack file-based routing rather than Next.js or Remix directory conventions.

## Assets, theme, and accessibility

- Store portfolio images and fonts locally under `public/assets/`; reference them using `/assets/...`. Verify paths and filename case when adding or renaming assets.
- Featured jobs require separate `desktop` and `mobile` screenshot paths. The phone frame must render the `mobile` field, not reuse the desktop image.
- Preserve the external resume URL `https://alannarisse.com/resume/` and the existing external Vimeo embed unless the task changes them. Other portfolio links can remain external; avoid moving local image/font assets to remote hosts.
- Default to light mode when no preference is stored. Restore an explicitly saved dark preference from `localStorage.theme`; keep the root theme initialization and toggle consistent.
- Keep browser-only APIs safe during server rendering and prerendering. Handle unavailable browser storage gracefully when changing persistence behavior.
- Preserve semantic headings, descriptive image alternatives, labeled controls, keyboard operation, visible focus, and responsive layouts. For visual changes, check narrow mobile and desktop widths and both themes.

## Tooling and builds

Use npm and `package-lock.json` for this maintenance workflow. Do not regenerate other lockfiles incidentally. Preserve the existing `rolldown` override unless resolving a demonstrated compatibility issue.

```sh
npm ci
npm run dev
npm test
npm run lint
npx tsc --noEmit
npm run build:dreamhost
```

- The app uses React, TypeScript, TanStack Start/Router, Vite, and Tailwind CSS. Follow `.prettierrc` and the ESLint configuration; format touched files rather than running the repository-wide `npm run format` for a small edit.
- `@lovable.dev/vite-tanstack-config` already supplies the main app plugins and the `@/` alias. Follow the comments in `vite.config.ts`; do not register duplicate React, Tailwind, or TanStack app plugins. The separate Vitest configuration intentionally supplies its own test plugins.
- `npm run build` produces a server-oriented build. **Use `npm run build:dreamhost` for the deployed static site**, preserving `nitro: false`, the custom server entry, and prerendering in `vite.dreamhost.config.ts`.
- Upload only the **contents of `dist/client/`** to the subdomain's web root. DreamHost does not need the server bundle or a running Node process for this site.
- Static assets are copied from `public/` during the build. Do not edit generated files under `dist/`, `.output/`, or `.tanstack/`, and do not include incidental build-output changes in source changes.
- Hosting assumes a domain/subdomain root. The current page uses anchors; additional routes must also be prerendered. Server functions and API routes need a separate backend and are not supported merely by uploading the static build.

## Validation and reporting

- Documentation-only changes need a focused review and `git diff --check`; no application build is necessary.
- For application changes, run relevant Vitest coverage, lint/type checks appropriate to the files changed, and the DreamHost build when rendering, routes, assets, dependencies, or build configuration are affected. Report any existing failures separately from new failures.
- The current `src/test/app-routing.test.tsx` verifies route matching only. It does not prove that the page renders or that interactions work; check affected user flows in a browser when behavior changes.
- For deployment-related work, confirm `dist/client/index.html` contains the prerendered portfolio and check referenced local assets before describing the build as ready to upload. Do not infer success from a server bundle alone.
- Summarize what changed, what was actually checked, and any remaining limitations. A local build is not evidence that the live site was uploaded or updated.
