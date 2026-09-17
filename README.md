# Dennis Oteri — Portfolio

Personal site of **Dennis Oteri**, Front End Developer based between Canegrate, Milan.

The site is a single-page portfolio built to be read by recruiters and hiring managers in one sitting: who I am, what I ship, where I have worked, and how to contact me. Copy, stats, and case studies live in typed files — not in a CMS — so the page stays honest, fast, and easy to update.

Live source: [iosonoDen/website-portfolio](https://github.com/iosonoDen/website-portfolio)

## What a visitor sees

The homepage is one scroll. The header stays on top and jumps to each section.

| Section | What it does |
| --- | --- |
| **Hero** | Name, location, short pitch, portrait, `1+` years and `9+` technologies in production. Primary actions: **Projects** (jumps to work) and **E-mail me** (`mailto:`). **Download CV** is in the header and serves `/dennis-oteri-cv.pdf`. |
| **Work** | Two case studies: this portfolio rebuild, and unattended-payment quality work. Each one follows problem → decisions → outcome → stack. |
| **About** | Origin story plus three “why hire me” points (payments, accessibility, full-stack range). |
| **Experience** | MADIC (Front End Developer, Nov 2024–present) and ENNOVA (L2 support, 2022–2024). |
| **Skills** | Tools grouped by how they are used: Frontend, Backend & data, Quality & delivery, Design. Not a logo wall. |
| **Contact** | Email, LinkedIn, and CV again. There is no contact form yet; mail is the conversion path. |

The design is dark, high-contrast, and cinematic: orange accent, condensed display type for headlines, Inter for body text. Clickable controls scale slightly on hover with a white glow, and darken on press.

## How it works in practice

You do not log into an admin panel. You edit TypeScript content, then the App Router renders it.

1. Change facts in `content/` (`profile.ts`, `experience.ts`, `work.ts`, `skills.ts`, `site.ts`).
2. Swap the portrait or CV in `public/images/` and `public/dennis-oteri-cv.pdf`.
3. Run `npm run dev` and check the homepage.
4. Commit. GitHub Actions lints, type-checks, and builds on `main` and `develop`.

Navigation, CV filename, and the about paragraphs live in `content/site.ts`. If you change the email or LinkedIn URL in `content/profile.ts`, the hero, contact block, footer, and JSON-LD stay in sync because they all read from that object.

## Architecture

```
app/                  Next.js App Router
  layout.tsx          Metadata, Inter font, schema.org Person JSON-LD
  page.tsx            Composes header + sections + footer
  robots.ts           Allows crawlers
  globals.css         Design tokens and .interactive-hit hover/active states
content/              Source of truth for copy and facts
types/content.ts      Shared TypeScript contracts
components/
  layout/             Header, footer, skip link
  sections/           Hero, work, about, experience, skills, contact
  ui/                 Button, container, section heading, count-up
  motion/             Reveal-on-scroll, cursor glow
public/               Logo, portrait, CV PDF
lib/cn.ts             className helper (clsx + tailwind-merge)
```

**Rendering.** `app/page.tsx` is a Server Component. It mounts the sections in order. Client components (`Hero`, `Reveal`, `CountUp`, `CursorGlow`) hydrate only where interaction or motion is required. Hash links (`#work`, `#about`, …) are native `<a>` tags so they do not fight Next.js client navigation or hydration.

**Content layer.** `types/content.ts` defines `Profile`, `Experience`, `CaseStudy`, and related shapes. Section components import from `content/` and render. That keeps UI free of hardcoded career facts.

**Motion.** Framer Motion reveals sections as they enter the viewport, after mount, so the server HTML is visible immediately. `CountUp` SSR-renders the final number (`1+`, `9+`) and animates only when the stat is in view. `prefers-reduced-motion` skips the animation. Hover/press on buttons and nav uses CSS (`.interactive-hit`).

**SEO and sharing.** `layout.tsx` sets title, description, Open Graph, and Twitter cards from `profile`. A Person JSON-LD block exposes name, role, email, Milan, and social URLs. `app/robots.ts` allows indexing. Set `NEXT_PUBLIC_SITE_URL` in production so absolute OG URLs are correct.

**Images.** The portrait is a high-quality WebP in `public/images/`, shown with `next/image` (`unoptimized` in the hero so Next does not recompress it). `next.config.ts` allows WebP/AVIF and extra device widths for other images.

**Accessibility.** Skip link, sticky header with `scroll-padding`, visible focus rings, semantic landmarks (`header`, `main`, `nav`, labelled sections), and keyboard-usable controls. The CV is a real file download, not a gate behind a form.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3, CSS variables in `app/globals.css` |
| Motion | Framer Motion 11 |
| Tests | Vitest (`tests/cn.test.ts`) |
| CI | GitHub Actions: `npm ci`, lint, `tsc --noEmit`, `next build` on Node 22 |
| Quality | ESLint (next), Prettier |

Prisma, Zod, and PostgreSQL are in `package.json` for a later data/contact layer. They are **not** used on the current homepage. Contact is `mailto:` plus LinkedIn. Playwright E2E and a hosted production deploy (Vercel or similar) are not wired up yet.

## Local development

Node 22 is the CI version. npm 10 is what the lockfile is generated with.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is taken, Next picks the next free one and prints it in the terminal.

`.env.local` only needs `NEXT_PUBLIC_SITE_URL` for local OG URLs. Leave `RESEND_API_KEY` and `CONTACT_TO_EMAIL` empty until a contact API exists. Never commit `.env.local`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript without emit |
| `npm test` | Vitest once |
| `npm run test:watch` | Vitest watch mode |

## Git workflow

- `main` — production-ready code
- `develop` — integration
- `feature/*` — one focused change

Conventional Commits, for example: `feat(hero): enlarge stats labels`.

Pushes and pull requests to `main` and `develop` run the CI workflow in `.github/workflows/ci.yml`.
