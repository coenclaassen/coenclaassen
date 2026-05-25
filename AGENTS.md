# AGENTS.md

## Project

Build and maintain the personal website for Coen Claassen.

The site is a personal portfolio and writing site. It presents:
- a quiet personal homepage
- selected work through a slideshow
- Curiosity notes from conversations
- about content
- contact links

## Stack

- Astro
- Tailwind CSS is installed, but most page styling currently lives in simple component CSS
- Netlify deployment
- GitHub repository
- Mobile-first responsive design
- No React

## Execution Behavior

- Act as an implementation-focused developer.
- Do not reinterpret the visual direction.
- Do not invent new sections, patterns, or features unless explicitly requested.
- Do not replace provided values with "better" values.
- If something is unspecified, choose the simplest implementation that matches these rules.
- Preserve structure and consistency over creativity.
- Keep the code easy to edit manually.
- Prefer explicit code over clever abstractions.
- Do not simplify code just because a shorter version exists. Simplify only when it removes stale or confusing code.

## Current Architecture

Use a small Astro structure with shared page components.

Current structure:

```txt
src/
  components/
    Layout.astro
    SeoHead.astro
    ButtonLink.astro
    BackButton.astro
    CuriosityCard.astro
    Slideshow.astro
    HomePage.astro
    AboutPage.astro
    CuriosityIndexPage.astro
    CuriosityNotePage.astro
  config/
    curiosity.ts
    design.ts
    seo.ts
    site.ts
  content/
    curiosity/
  lib/
    curiositySlug.js
  pages/
    index.astro
    about.astro
    robots.txt.ts
    sitemap.xml.ts
    curiosity/
      index.astro
      [slug].astro
  styles/
    global.css

public/
  images/
    slides/
    about/
  og/
```

The current site does not render a global header or footer. Do not add global navigation or a footer unless explicitly requested.

## File Responsibilities

- `src/config/design.ts` = reusable design values only.
- `src/config/site.ts` = site metadata, canonical URL, email link, LinkedIn link, Off Trail Run link, and external URLs.
- `src/config/seo.ts` = shared SEO helpers.
- `src/config/curiosity.ts` = Curiosity note sorting and public URL helpers.
- `src/content/curiosity/` = markdown files for Curiosity notes.
- `src/components/Layout.astro` = shared document layout and design CSS variables.
- `src/components/SeoHead.astro` = shared SEO/head metadata.
- `src/components/ButtonLink.astro` = reusable link styled as a button.
- `src/components/BackButton.astro` = reusable back link/button.
- `src/components/CuriosityCard.astro` = reusable Curiosity note preview card.
- `src/components/Slideshow.astro` = homepage work slideshow.
- `src/components/HomePage.astro` = shared homepage markup, styling, scroll cue, and homepage page data.
- `src/components/AboutPage.astro` = shared about page markup and styling.
- `src/components/CuriosityIndexPage.astro` = shared Curiosity index markup, styling, and load-more behavior.
- `src/components/CuriosityNotePage.astro` = shared Curiosity article markup and styling.
- `src/pages/index.astro` = route wrapper for `/`.
- `src/pages/about.astro` = route wrapper for `/about`.
- `src/pages/robots.txt.ts` = generated robots response with the sitemap URL.
- `src/pages/sitemap.xml.ts` = generated sitemap response for canonical site pages and Curiosity notes.
- `src/pages/curiosity/index.astro` = route wrapper for `/curiosity`.
- `src/pages/curiosity/[slug].astro` = route wrapper for Curiosity note pages.
- `src/styles/global.css` = Tailwind import, font setup, global base styles, shared card styles, and article content styles.
- `public/images/slides/` = work slideshow images.
- `public/images/about/coen.webp` = about page image. This file may be replaced manually with a new profile picture.
- `public/og/ogCoen.png` = default Open Graph image.

## Implementation Rules

- Use Astro, not React.
- Use semantic HTML.
- Use a mobile-first approach.
- Keep interactions lightweight and native.
- Keep route files minimal: they should only render shared page components.
- Do not add extra dependencies unless clearly needed.
- Prefer consistency over clever abstractions.
- Keep code easy to edit manually.
- Do not create a larger design system than needed.
- Do not introduce helper utilities unless they are reused and clearly improve maintainability.
- Keep the architecture flat and easy to edit.

## Dependency Rules

- Do not add dependencies unless clearly necessary.
- Prefer Astro, native browser APIs, and the current CSS setup.
- Use the native Fullscreen API for the slideshow.
- Use the Screen Orientation API only as an optional enhancement for mobile slideshow fullscreen.
- Do not add a slideshow/carousel library.
- Do not add a menu library.
- Use lucide icons only for icons.

## Icon Rules

Use lucide icons only.

Current active icons:
- `ChevronDown`
- `ChevronLeft`
- `ChevronRight`
- `Maximize2`
- `Minimize2`

Rules:
- Do not create custom SVG icons.
- Do not use emoji icons.
- Do not mix icon libraries.
- Do not introduce decorative icon usage outside explicitly described places.
- If a new icon is needed, choose the closest lucide icon and use it consistently.

## Navigation Rules

The current site does not use a global desktop or mobile navigation bar.

Current navigation behavior:
- Homepage is the main entry point.
- `/about`, `/curiosity`, and Curiosity article pages use `BackButton` links.
- Homepage work anchor is `/#work`.
- Homepage contact anchor is `/#contact`.

Do not add a global header, footer, or mobile menu unless explicitly requested.

## Pages And Segments

### `/`

Homepage segments:

1. Hero
   - Full viewport height on desktop and mobile.
   - Centered vertically.
   - Headline: `Somehow, you ended up here.`
   - Supporting text: `This is where you'll find stuff I've built and things I think about.`

2. Work section
   - Anchor: `id="work"`
   - Headline: `Products I've helped build`
   - Supporting text:
     - `My job is finding direction before the chaos turns into cost.`
     - `I turn half-ideas and "this will never work" into things teams can actually build and ship.`
   - On desktop, the work text starts immediately after the hero.
   - On desktop, keep about `15svh` between the work text and slideshow.
   - Slideshow follows the work text.

3. Curiosity preview section
   - Headline: `Notes from talking to people`
   - Supporting text:
     - `Everyone has something interesting going on. You just have to ask the right questions.`
     - `These are a few conversations I keep thinking about.`
   - Show the latest 2 Curiosity notes.
   - On desktop, show a third grid card linking to `/curiosity` with `See more notes.`
   - On mobile, show a `See more notes` button below the cards.
   - On desktop, keep about `45svh` between the slideshow and this section so the previous shadow clears.

4. Contact section
   - Anchor: `id="contact"`
   - Full viewport height on desktop.
   - Centered vertically on desktop.
   - Headline: `Still here?`
   - Supporting text: `If you made it this far, we probably get along.`
   - CTA: Email me
   - CTA: More about me

5. Scroll cue
   - A small lucide `ChevronDown` cue may appear on the initial hero after a delay.
   - It scrolls to `#work`.
   - It is dismissed after the user scrolls or interacts.

### `/about`

About page segments:

1. Back button to `/`
2. Intro
   - Headline: `More about me.`
   - Personal intro text
   - Image: `/images/about/coen.webp`
3. Most days
4. When I'm not working
5. Now what?
   - CTA: Email me
   - CTA: Connect on LinkedIn

### `/curiosity`

Curiosity index page segments:

1. Back button to `/`
2. Intro
   - Headline: `Notes from talking to people`
   - Supporting text matches the homepage Curiosity preview.
3. Curiosity notes grid
   - Show Curiosity markdown files from `src/content/curiosity/`.
   - Sort latest first by numeric note slug/id using `sortCuriosityNotes`.
   - Mobile initially shows 6 notes.
   - Desktop initially shows 8 notes plus a grid-style `Load more notes` card when more notes exist.
   - Load more reveals 6 more notes at a time.
4. Bottom CTA
   - Desktop text: `Talk to people. It works.`
   - Mobile headline: `Talk to people. It works.`
   - CTA: Email me
   - CTA: Back home

Curiosity card fields:
- `title`
- `With {name}`

Do not show on cards:
- `subtitle`
- `date`
- `location`
- `image`
- `imageAlt`

### `/curiosity/[slug]`

Individual Curiosity note page.

Article header should show:
- Back button to `/curiosity`
- Intro sentence: `I had coffee with {name}. Notes below.`
- If `website` exists, link the person's name.
- `title`
- `subtitle`
- optional `TLDR` section if `tldr` exists

Article body:
- Render the markdown body normally.

Footer CTA:
- `See what else I build`
- `See more notes`

Do not visibly show:
- `date`
- `dateModified`
- `location`
- `image`
- `imageAlt`

## Curiosity Content Collection

Curiosity markdown files live in:

```txt
src/content/curiosity/
```

Example file names:

```txt
1.md
2.md
17.md
```

Each Curiosity note should use frontmatter for metadata and normal markdown for the article content.

Required frontmatter:

```yaml
id: 17
slug: "17"
name: "Noa Smolenaars"
title: "Empathy isn't the full story."
subtitle: "Why good intentions can still exclude people."
```

Optional frontmatter:

```yaml
tldr: "Short summary."
summary: "SEO summary."
description: "SEO fallback description."
date: "2026-03-06"
dateModified: "2026-03-10"
website: "https://www.noasmolenaars.com/"
location: "Catharina Ziekenhuis Eindhoven"
```

Rules:
- `date` and `dateModified` are for metadata and SEO only.
- `location` is internal reference only.
- Do not display `date`, `dateModified`, or `location` on the website.
- Do not include or display Curiosity note images for now.
- Curiosity pages are text-only for now.
- The article body should use standard markdown headings, paragraphs, lists, links, and emphasis.
- Do not use `paragraph1Title`, `paragraph1Body`, or similar numbered content fields.
- Do not parse body content manually for cards; cards should use frontmatter only.
- New Curiosity markdown files should automatically appear on `/curiosity`.
- The latest 2 Curiosity markdown files should automatically appear on `/`.

## Slideshow Rules

The slideshow appears on the homepage Work section.

Image location:

```txt
public/images/slides/
```

Current slide naming pattern:

```txt
slide01.webp
slide02.webp
slide03.webp
...
```

Functionality:
- Read numbered `.webp` files from `public/images/slides/`.
- Sort slides by number ascending.
- Automatically advance every 4 seconds.
- Use a smooth fade transition.
- Loop from final slide back to first slide.
- Previous button uses lucide `ChevronLeft`.
- Fullscreen button uses lucide `Maximize2` and `Minimize2`.
- Next button uses lucide `ChevronRight`.
- Previous loops backward from first slide to final slide.
- Next loops forward from final slide to first slide.
- Fullscreen uses the native Fullscreen API.
- On mobile, tapping the slideshow enters fullscreen.
- On mobile fullscreen, request landscape orientation when the browser supports it.
- When fullscreen starts, stop autoplay.
- When fullscreen exits, resume autoplay and unlock orientation when supported.
- Keep buttons visible in fullscreen.
- Keep implementation basic and native.
- Do not add a slideshow library.
- Do not over-engineer this feature.

## Design Values

Use `src/config/design.ts` as the reusable design source of truth.

Current design values:

```ts
colors.black = "#2D2D2D"
colors.grey = "#6B6B6B"
colors.white = "#FFFFFF"
stroke.color = "#E5F4F2"

button.height = "50px"
button.radius = "25px"
card.radius = "20px"

layout.maxWidth.default = "1280px"
layout.maxWidth.article = "720px"
layout.sidePadding.mobile = "30px"
layout.sidePadding.desktop = "60px"
layout.spacer = "250px"
layout.topButtonOffset.mobile = "30px"
layout.topButtonOffset.desktop = "60px"
layout.topContentOffset = "100px"
layout.noteIntroGap = "30px"
layout.articleHeadingGap.mobile = "80px"
layout.articleHeadingGap.desktop = "120px"
layout.sectionGap.mobile = "130px"
layout.sectionGap.desktop = "150px"

slideshow.interval = 4000
slideshow.height = "60vh"
```

## Typography

Fonts:
- Heading display: `Instrument Serif`
- Body and UI: `DM Sans`

Desktop sizes:
- `h1 = 46px / 130% / 400`
- `h2 = 30px / 130% / 400`
- `h3 = 30px / 130% / 400`
- `p1 = 18px / 150% / 300`
- `p2 = 16px / 150% / 300`
- `p3 = 14px / 150% / 300`
- `btn = 15px / 130% / 500`
- `cta = 40px / 130% / 400`
- `n1 = 22px / 150% / 300`
- `n2 = 16px / 150% / 300`
- `n0 = 16px / 150% / 300`

Mobile sizes:
- `h1 = 40px / 130% / 400`
- `h2 = 28px / 130% / 400`
- `h3 = 28px / 130% / 400`
- `p1 = 18px / 150% / 300`
- `p2 = 15px / 150% / 300`
- `p3 = 13px / 150% / 300`
- `btn = 15px / 130% / 500`
- `cta = 40px / 130% / 400`
- `n1 = 18px / 150% / 300`
- `n2 = 15px / 150% / 300`
- `n0 = 15px / 150% / 300`

Rules:
- Keep typography easy to update globally.
- Prefer existing global type classes and CSS variables.
- Do not scatter font sizes across many files if a shared type class is already available.

## Colors

Current color system:

```ts
black = "#2D2D2D"
grey = "#6B6B6B"
white = "#FFFFFF"
stroke = "#E5F4F2"
```

Rules:
- Keep color usage easy to update.
- Avoid spreading raw color values unnecessarily across multiple files.
- Keep the base visual language clean, quiet, and minimal.
- Do not introduce accent colors unless explicitly requested.

## Layout Rules

- Max page width: `1280px`.
- Article max width: `720px`.
- Breakpoint from mobile to desktop: `768px`.
- Page horizontal padding:
  - mobile: `30px`
  - desktop: `60px`
- Keep all content centered within the max page width.
- Stack content vertically on mobile unless stated otherwise.
- Use a simple grid for Curiosity cards:
  - mobile: 1 column
  - desktop: 3 columns
- Do not invent complex layout systems.

## Styling Rules

- Reuse values from `design.ts` where practical.
- Do not scatter repeated layout constants across files.
- Keep internal spacing simple and consistent.
- Do not introduce alternate spacing systems.
- Use rounded corners consistently.
- Keep button styling based on `button.height` and `button.radius`.
- Keep styling readable and easy to edit manually.
- Use component CSS for page-specific styles unless an existing global class is the better local pattern.

## SEO Rules

Use `SeoHead.astro` for shared SEO metadata.

Current SEO behavior:
- Simple title, description, canonical, Open Graph, and Twitter metadata.
- Canonical URL uses `site.url` from `src/config/site.ts`.
- JSON-LD is present for homepage, about page, Curiosity index, and Curiosity articles.
- `/sitemap.xml` is generated from canonical routes and Curiosity notes that have summaries.
- `/robots.txt` allows crawling and points to the sitemap.
- Curiosity note SEO derives from frontmatter where available:
  - `title`
  - `subtitle`
  - `summary`
  - `description`
  - `name`
  - `date`
  - `dateModified`

Rules:
- Keep canonical URLs and Open Graph metadata in sync.
- Do not add analytics unless explicitly requested.
- Keep SEO simple and maintainable.

## Asset Rules

- Use WebP for photographic raster images.
- Slideshow files live in `public/images/slides/`.
- About page image lives at `public/images/about/coen.webp`.
- Do not use Curiosity note images for now.
- Do not add unused PNG fallbacks unless explicitly requested.
- Image paths should be predictable and easy to replace manually.

## Accessibility Scope

Do not over-focus on accessibility, but avoid sloppy implementation.

Minimum rules:
- Use semantic HTML: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>` where appropriate.
- Buttons must be real `<button>` elements.
- Links must be real `<a>` elements.
- Slideshow controls should have simple labels.
- Images should have `alt` text.
- Do not build complex accessibility systems or heavy keyboard behavior unless explicitly requested.

## Content Rules

- Use the provided content as the source of truth.
- Do not rewrite or improve copy unless explicitly requested.
- Preserve provided wording except for minor syntax fixes required by code.
- Do not invent new visible sections.
- Do not invent fake Curiosity notes.
- Do not show date or location for Curiosity notes.
- Keep all visible copy easy to edit manually.

## Preferred Implementation Order

1. Inspect existing Astro setup.
2. Read this `AGENTS.md`.
3. Check `src/config/design.ts` before changing reusable design values.
4. Check `src/config/site.ts` before changing metadata or contact links.
5. Keep route wrappers minimal.
6. Update shared page components for visible page changes.
7. Update Curiosity content or helpers only when the request touches notes or note URLs.
8. Verify routes, anchors, slideshow, Curiosity sorting, load-more behavior, and SEO when affected.
9. Run the relevant build/check command and fix errors.

## If Something Is Unclear

- Choose the simplest implementation that matches these rules.
- Avoid over-engineering.
- Do not redesign the site unless explicitly asked.
- Keep structure shared and content easy to edit.
- Make conservative assumptions.
- Do not add features to solve hypothetical future problems.

## Output Expectations

- Make the smallest set of changes needed.
- Keep code readable and easy to edit manually.
- Prefer explicit code over clever abstractions.
- Keep the implementation stable and internally consistent.
- Summarize changed files and assumptions after implementation.

## Done When

- The homepage renders at `/`.
- The Work anchor works at `/#work`.
- The Contact anchor works at `/#contact`.
- The About page renders at `/about`.
- The Curiosity index renders at `/curiosity`.
- Individual Curiosity notes render at their generated `/curiosity/[slug]` paths.
- Shared markup exists in one component per page type.
- Route files remain minimal.
- Slideshow renders slide WebP files.
- Slideshow autoplay, previous, next, loop, fullscreen pause, and fullscreen resume work.
- Mobile slideshow tap opens fullscreen and requests landscape when supported.
- Latest 2 Curiosity notes appear on the homepage.
- All Curiosity notes appear on `/curiosity` latest first by numeric slug/id.
- Curiosity cards do not show subtitle, date, location, or images.
- Curiosity article pages do not visibly show date, location, or images.
- SEO metadata is present for all routes.
- Code is clean, internally consistent, and easy to update.
