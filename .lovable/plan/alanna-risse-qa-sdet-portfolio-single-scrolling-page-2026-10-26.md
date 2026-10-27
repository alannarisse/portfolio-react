# Alanna Risse — QA / SDET Portfolio (single scrolling page)

## Goal
A polished, hiring-focused one-page site that positions Alanna as a Quality Assurance Engineer / Software Engineer in Test, reusing content and images from alannarisse.com. Sections from "Illustration & Design" onward are dropped.

## Visual direction
- Palette: Charcoal & Ember — dark charcoal background (#1a1a1a / #2d2d2d), mid-gray borders (#4a4a4a), ember orange accent (#e85d3a) for links, buttons, and small highlights.
- Type: Sora for headings, Manrope for body. Generous spacing, crisp thin borders, subtle hover lifts on cards.
- Screenshots shown in consistent browser-frame cards with even aspect ratios, so the mixed image sizes from the old site look uniform.

## Page sections (sticky top nav jumps to each)
1. **Hero** — Name, title "QA Engineer · Software Engineer in Test", short pitch on quality, accessibility (WCAG 2.0 AA background), and automation with Playwright. Buttons: View Resume, LinkedIn, GitHub.
2. **Skills** — Grouped chips: Testing (Playwright, test planning, A/B testing, accessibility audits, cross-browser), Development (JavaScript, TypeScript, React, Angular, Vue, Next.js, Node, Django), Platforms (AWS, Vercel, Railway, Netlify, Pantheon, WordPress).
3. **Professional Work** — Featured large cards for West Elm, BusinessBlocks (acquired by AmTrust), Qadium, PlusPlus; compact grid for the rest (Timbuk2, MedNet, House of Bagels, CETI, Alignment Therapy, Anna Fidler, JJ Wiesler, Button). Each card: screenshot, role, stack, outcome.
   - **Device mockups:** each featured card shows the desktop screenshot in a browser frame with a phone-framed mobile screenshot overlapping its lower corner, to show the site was mobile friendly.
   - **Expandable case studies:** featured cards have a "Read case study" button that expands in place (or opens a full-screen panel) with: overview, my role, challenge, QA/testing approach, results, tech stack, and an image gallery of extra desktop and mobile screenshots.
   - Starts with West Elm and BusinessBlocks as case studies; the data format makes adding more jobs simple. Missing mobile screenshots and longer write-ups will be placeholders until you send them.
4. **Personal Projects** — Send a Boop, Quote Keeper, DMV Practice Quiz, Wine Finder, Verge Store, Scrumptious, PSU Interactive Media, Verge PDX, with live links and stack tags (noting AI-assisted builds).
5. **Teaching & Speaking** — PSU interaction design teaching, embedded student reel (Vimeo), the two speaking photos/talks.
6. **Testimonial** — Sarah Moe quote.
7. **Writing** — Four Substack posts as clean text cards.
8. **Footer / Contact** — Resume, LinkedIn, GitHub, Instagram, Substack, Mystery Portal links from the current site.

## Technical details
- Rewrite `src/routes/index.tsx` with section components in `src/components/portfolio/`; content data in `src/data/portfolio.ts`.
- Images hot-linked from alannarisse.com asset URLs.
- Design tokens in `src/styles.css` (oklch, dark theme as default); Google Fonts via `<link>` in `__root.tsx`.
- Index `head()` with unique title/description/og tags; root generic meta cleaned up.
- Smooth-scroll anchors for in-page nav; responsive down to mobile.

## Open item
No contact email was found on the current site — I'll use the LinkedIn link as the main contact unless you provide an email.
