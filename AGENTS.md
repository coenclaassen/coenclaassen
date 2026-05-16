# AGENTS.md

## Project

Build and maintain a personal website for Coen Claassen.

The site is a personal portfolio and writing site. It presents:
- personal positioning
- selected work through a slideshow
- Curiosity Coffee notes
- about content
- contact links

## Stack

- Astro
- Tailwind CSS
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

## Core Architecture

Use a small Astro structure with shared page components.

Expected structure:

```txt
src/
  components/
    Layout.astro
    SeoHead.astro
    Header.astro
    Footer.astro
    ButtonLink.astro
    CoffeeCard.astro
    Slideshow.astro
    HomePage.astro
    AboutPage.astro
    CoffeeIndexPage.astro
    CoffeeNotePage.astro
  config/
    design.ts
    site.ts
  content/
    coffee/
  pages/
    index.astro
    about.astro
    coffee/
      index.astro
      [slug].astro
  styles/
    global.css

public/
  images/
    slides/
    coffee/
    about/
```

## File Responsibilities

- `src/config/design.ts` = reusable design values only.
- `src/config/site.ts` = site metadata, canonical URL, navigation items, email link, LinkedIn link, and external URLs.
- `src/content/coffee/` = markdown files for Curiosity Coffee notes.
- `src/components/Layout.astro` = shared document layout.
- `src/components/SeoHead.astro` = shared SEO/head metadata.
- `src/components/Header.astro` = desktop and mobile navigation.
- `src/components/Footer.astro` = footer content.
- `src/components/ButtonLink.astro` = reusable link styled as a button.
- `src/components/CoffeeCard.astro` = reusable coffee note preview card.
- `src/components/Slideshow.astro` = homepage work slideshow.
- `src/components/HomePage.astro` = shared homepage markup and styling.
- `src/components/AboutPage.astro` = shared about page markup and styling.
- `src/components/CoffeeIndexPage.astro` = shared coffee index markup and styling.
- `src/components/CoffeeNotePage.astro` = shared coffee article markup and styling.
- `src/pages/index.astro` = route wrapper for `/`.
- `src/pages/about.astro` = route wrapper for `/about`.
- `src/pages/coffee/index.astro` = route wrapper for `/coffee`.
- `src/pages/coffee/[slug].astro` = route wrapper for `/coffee/NN`.
- `src/styles/global.css` = Tailwind import, font setup, global base styles, and shared global CSS.
- `public/images/slides/` = work slideshow images.
- `public/images/about/` = about page images.
- `public/images/coffee/` = reserved for possible future coffee note images, but do not use images for coffee notes now.

## Implementation Rules

- Use Astro, not React.
- Use Tailwind CSS for styling.
- Use semantic HTML.
- Use a mobile-first approach.
- Keep interactions lightweight.
- Keep route files minimal: they should only render shared page components.
- Do not add extra dependencies unless clearly needed.
- Prefer consistency over clever abstractions.
- Keep code easy to edit manually.
- Do not create a larger design system than needed.
- Do not introduce helper utilities unless they are reused and clearly improve maintainability.
- Keep the architecture flat and easy to edit.

## Dependency Rules

- Do not add dependencies unless clearly necessary.
- Prefer Astro and Tailwind built-ins.
- Use native HTML behavior where possible.
- Use the native Fullscreen API for the slideshow.
- Do not add a slideshow/carousel library.
- Do not add a menu library.
- Use lucide icons only for icons.
- If lucide is not installed, add the smallest appropriate Astro-compatible lucide dependency.

## Icon Rules

Use lucide icons only.

Allowed icons for current functionality:
- `Menu`
- `X`
- `ChevronLeft`
- `ChevronRight`
- `Maximize`
- `Mail`
- `Linkedin`
- `ArrowRight`
- `ExternalLink`

Rules:
- Do not create custom SVG icons.
- Do not use emoji icons.
- Do not mix icon libraries.
- Do not introduce decorative icon usage outside explicitly described places.
- If a new icon is needed, choose the closest lucide icon and use it consistently.

## Navigation Rules

Desktop navigation appears as a simple top navbar:

- Home → `/`
- Work → `/#work`
- About → `/about`
- Coffee → `/coffee`
- Contact → `/#contact`

Mobile navigation:
- Use a minimal menu.
- Show lucide `Menu` when closed.
- Clicking `Menu` opens the nav items stacked vertically.
- When open, the icon changes to lucide `X`.
- Clicking `X` closes the menu.
- Clicking any nav item closes the menu.
- Keep this lightweight with a small native script.
- Do not use framework state.
- Do not add menu animation libraries.

## Pages And Segments

### `/`

Homepage segments:

1. Hero
   - Headline: `Good things rarely start clear.`
   - Subheading: `Things I build, think about, and care about.`
   - Intro text
   - CTA: Email me
   - CTA: See more

2. Work section
   - Anchor: `id="work"`
   - Headline: `Products start as chaos.`
   - Subheading: `My work is finding direction before the chaos turns into cost.`
   - Supporting text
   - Slideshow

3. Coffee preview section
   - Headline: `Better ideas begin with better conversations.`
   - Subheading: `Things you only learn by talking to real people.`
   - Supporting text
   - Show latest 3 coffee notes
   - CTA: See all notes

4. Contact section
   - Anchor: `id="contact"`
   - Headline: `Adventures have to start somewhere.`
   - Subheading: `Share an idea, a thought, or just say hi.`
   - Supporting text
   - CTA: Email me
   - CTA: Connect on LinkedIn

### `/about`

About page segments:

1. Intro
   - Headline: `Hey, I’m Coen.`
   - Personal intro text
   - Large image placeholder or image if available

2. Most days

3. When I’m not working

4. Say hi
   - CTA: Email me
   - CTA: Connect on LinkedIn

### `/coffee`

Coffee index page segments:

1. Intro
   - Headline: `Better ideas begin with better conversations.`
   - Subheading: `Things you only learn by talking to real people.`
   - Supporting text

2. Coffee notes grid
   - Show all coffee markdown files from `src/content/coffee/`
   - Sort latest first by `date`
   - If `date` is missing, fall back to highest `id`
   - Card per note

Coffee card fields:
- `title`
- `subtitle`
- `name`
- `Read notes` CTA

Do not show:
- `date`
- `location`
- `image`
- `imageAlt`

### `/coffee/NN`

Individual coffee note page.

Article header should show:
- `title`
- `subtitle`
- `name`
- optional `website` link if present

Article body:
- Render the markdown body normally.

Footer:
- Simple `Back to all notes` link.

Do not show:
- `date`
- `location`
- `image`
- `imageAlt`

## Coffee Content Collection

Coffee markdown files live in:

```txt
src/content/coffee/
```

Example file names:

```txt
coffee01.md
coffee02.md
coffee03.md
coffee17.md
```

Each coffee note should use frontmatter for metadata and normal markdown for the article content.

Required frontmatter:

```yaml
id: 17
slug: "17"
name: "Noa Smolenaars"
title: "Empathy isn't the full story."
subtitle: "Why good intentions can still exclude people."
date: "2026-03-06"
```

Optional frontmatter:

```yaml
website: "https://www.noasmolenaars.com/"
location: "Catharina Ziekenhuis Eindhoven"
```

Rules:
- `date` is used for sorting only.
- `location` is internal reference only.
- Do not display `date` or `location` on the website.
- Do not include `image` or `imageAlt`.
- Coffee pages are text-only for now.
- The article body should use standard markdown headings, paragraphs, lists, links, and emphasis.
- Do not use `paragraph1Title`, `paragraph1Body`, or similar numbered content fields.
- Do not parse body content manually for cards; cards should use frontmatter only.
- New coffee markdown files should automatically appear on `/coffee`.
- The latest 3 coffee markdown files should automatically appear on `/`.

## Slideshow Rules

The slideshow appears on the homepage Work section.

Image location:

```txt
public/images/slides/
```

Expected slide names:

```txt
slide01.webp
slide02.webp
slide03.webp
slide04.webp
slide05.webp
```

Functionality:
- Automatically advance every 4 seconds.
- Use a smooth fade transition.
- Loop from final slide back to first slide.
- Show controls at the bottom right.
- Previous button uses lucide `ChevronLeft`.
- Fullscreen button uses lucide `Maximize`.
- Next button uses lucide `ChevronRight`.
- Previous loops backward from first slide to final slide.
- Next loops forward from final slide to first slide.
- Fullscreen uses the native Fullscreen API.
- When fullscreen starts, stop autoplay.
- When fullscreen exits, resume autoplay.
- Keep buttons visible in fullscreen.
- Keep implementation basic and native.
- Do not add a slideshow library.
- Do not over-engineer this feature.

## Design Values

Use these as implementation constraints, not suggestions.

```ts
cornerRadius = 20
buttonRadius = 999
buttonHeight = 60
featureHeight = 90
gutterSmall = 20
gutterLarge = 30
```

## Typography

Fonts:
- `h1 = Poppins, 700`
- `h2 = Poppins, 700`
- `h3 = Poppins, 700`
- `h4 = Poppins, 400`
- `h5 = Manrope, 400`
- `h6 = Manrope, 700`
- `p = Manrope, 400`

Desktop sizes:
- `h1 = 67px / 105%`
- `h2 = 38px / 130%`
- `h3 = 28px / 130%`
- `h4 = 21px / 150%`
- `h5 = 21px / 150%`
- `h6 = 18px / 150%`
- `p = 16px / 150%`

Mobile sizes:
- `h1 = 67px / 105%`
- `h2 = 38px / 130%`
- `h3 = 21px / 130%`
- `h4 = 16px / 150%`
- `h5 = 16px / 150%`
- `h6 = 18px / 150%`
- `p = 16px / 150%`

Rules:
- Use Poppins for headings.
- Use Manrope for body text.
- Keep typography easy to update globally.
- Do not scatter font sizes across many files if a shared style is more maintainable.

## Colors

```ts
white = "#ffffff"
black = "#1d1d1f"
lightGrey = "#f5f5f7"
darkGrey = "#ececf0"
lightAccent = "#cffafe"
midAccent = "#06b6d4"
darkAccent = "#0891b2"
```

Rules:
- Keep color usage easy to update.
- Avoid spreading raw color values unnecessarily across multiple files.
- Use the cyan accent system for CTAs and highlights.
- Keep the base visual language clean and minimal.

## Layout Rules

- Max page width: `1280px`.
- Breakpoint from mobile to desktop: `768px`.
- Page horizontal padding:
  - mobile: `px-[30px]`
  - desktop: `md:px-[55px]`
- Keep all content centered within the max page width.
- Stack content vertically on mobile unless stated otherwise.
- Use a simple grid for coffee cards:
  - mobile: 1 column
  - tablet/desktop: 2 or 3 columns depending on available space
- Do not invent complex layout systems.

## Styling Rules

- Reuse values from `design.ts` where practical.
- Do not scatter repeated layout constants across files.
- Keep internal spacing simple and consistent.
- Do not introduce alternate spacing systems.
- Use rounded corners consistently.
- Use pill-shaped buttons based on `buttonRadius = 999`.
- Keep buttons at `buttonHeight = 60` where practical.
- Keep styling readable in Tailwind and easy to edit manually.

## SEO Rules

Use `SeoHead.astro` for shared SEO metadata.

Add page-specific SEO for:
- `/`
- `/about`
- `/coffee`
- `/coffee/NN`

Coffee note SEO should derive from frontmatter:
- `title`
- `subtitle`
- `name`

Canonical URL:
- Use the canonical site URL from `src/config/site.ts`.
- Use `https://coenclaassen.com` unless changed in site config.

Rules:
- Keep canonical URLs and Open Graph metadata in sync.
- Do not add structured data unless explicitly requested.
- Do not add analytics unless explicitly requested.
- Keep SEO simple and maintainable.

## Asset Rules

- Use WebP for photographic raster images.
- Slideshow files live in `public/images/slides/`.
- About page image should live in `public/images/about/`.
- Do not use coffee note images for now.
- Do not add unused PNG fallbacks unless explicitly requested.
- Image paths should be predictable and easy to replace manually.

## Accessibility Scope

Do not over-focus on accessibility, but avoid sloppy implementation.

Minimum rules:
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
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
- Do not invent fake coffee notes.
- Do not show date or location for coffee notes.
- Keep all visible copy easy to edit manually.

## Preferred Implementation Order

1. Inspect existing Astro and Tailwind setup.
2. Read this `AGENTS.md`.
3. Check `src/config/design.ts` and update only if reusable design values are missing.
4. Check `src/config/site.ts` and update site metadata, navigation, and contact links as needed.
5. Implement shared layout, SEO, header, and footer.
6. Implement coffee content collection.
7. Implement coffee card and coffee listing behavior.
8. Implement homepage content and latest 3 coffee notes.
9. Implement slideshow with native behavior.
10. Implement about page.
11. Implement coffee index page.
12. Implement coffee article page.
13. Verify routes, anchors, mobile menu, slideshow, coffee sorting, and SEO.
14. Run the relevant build/check command and fix errors.

## If Something Is Unclear

- Choose the simplest implementation that matches the rules above.
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
- The Work nav item scrolls to `/#work`.
- The Contact nav item scrolls to `/#contact`.
- The About page renders at `/about`.
- The Coffee index renders at `/coffee`.
- Individual coffee notes render at `/coffee/NN`.
- Shared markup exists in one component per page type.
- Route files remain minimal.
- Desktop navigation works.
- Mobile menu opens and closes with lucide `Menu` and `X`.
- Slideshow renders slide WebP files.
- Slideshow autoplay, previous, next, loop, fullscreen pause, and fullscreen resume work.
- Latest 3 coffee notes appear on the homepage.
- All coffee notes appear on `/coffee` latest first.
- Coffee cards do not show date or location.
- Coffee article pages do not show date or location.
- SEO metadata is present for all routes.
- Code is clean, internally consistent, and easy to update.
