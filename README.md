# Website Portfolio v2

Flagship personal portfolio for **Dennis Oteri**, designed to communicate front-end engineering quality, product thinking, accessibility and full-stack growth.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- PostgreSQL + Prisma
- Vitest + Playwright
- GitHub Actions
- Vercel

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
npm test
```

## Git workflow

- `main`: production-ready code
- `develop`: staging and integration
- `feature/*`: one focused change per branch

Use Conventional Commits, for example: `feat(hero): add animated headline`.

## Delivery plan

The work follows the Agile roadmap in six sprints: setup, design system, professional content, project case studies, recruiter conversion, and final QA/deployment.
