# CoEngineers

**31 Days of Claude Code to Save Time**

A free, immersive course teaching product managers, content creators, and knowledge workers how to use Claude Code for everyday productivity. No coding experience required.

[![Website](https://img.shields.io/badge/website-coengineers.ai-F97316)](https://coengineers.ai)
[![Licence](https://img.shields.io/badge/licence-MIT-blue)](./LICENCE)
[![Tests](https://img.shields.io/badge/tests-26%20passing-brightgreen)](./tests)

---

## What You'll Learn

Transform your workflow over 31 days:

| Week       | Focus              | Topics                                               |
| ---------- | ------------------ | ---------------------------------------------------- |
| **Week 1** | Foundation         | Digital workspace, templates, slash commands         |
| **Week 2** | Content Processing | Meetings, voice transcription, PDFs, web archiving   |
| **Week 3** | Creative Outputs   | Presentations, image prompts, social threads         |
| **Week 4** | Building Software  | Spec-driven development from idea to shipped feature |
| **Bonus**  | Capstone           | BMAD Method and PRP Framework                        |

---

## Key Features

- **Production-ready examples** — Every lesson includes real-world workflows you can use immediately
- **Interactive slash commands** — Practice each lesson with guided Claude Code commands
- **Email subscription system** — Get notified when new content drops
- **Comprehensive test suite** — 26 automated tests ensuring reliability
- **CI/CD pipeline** — GitHub Actions for quality assurance
- **British English throughout** — Written for a global audience with proper spelling

---

## Prerequisites

| Requirement | Version | Check Command    |
| ----------- | ------- | ---------------- |
| Node.js     | 18+     | `node --version` |
| npm         | 9+      | `npm --version`  |
| Git         | 2.30+   | `git --version`  |

Optional for API development:

- Supabase account (for database)
- Resend account (for email)

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/highlandhodl/coengineers.git
cd coengineers

# Install dependencies
npm ci

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

---

## Development Commands

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start development server with hot reload |
| `npm run build`         | Build for production                     |
| `npm run preview`       | Preview production build locally         |
| `npm run lint`          | Run ESLint on all files                  |
| `npm run lint:fix`      | Fix ESLint errors automatically          |
| `npm run format`        | Format all files with Prettier           |
| `npm run format:check`  | Check formatting without changes         |
| `npm run test`          | Run tests in watch mode                  |
| `npm run test:run`      | Run tests once (CI mode)                 |
| `npm run test:coverage` | Run tests with coverage report           |
| `npm run type-check`    | TypeScript type checking                 |

---

## Project Structure

```
coengineers/
├── src/
│   ├── content/docs/     # MDX course content (31 days + extras)
│   ├── pages/api/        # Serverless API endpoints
│   ├── lib/              # Shared utilities (Supabase, email, types)
│   ├── components/       # Custom Astro components
│   └── styles/           # CSS customisations
├── tests/                # Vitest test suite
├── .claude/commands/     # Interactive slash commands for learners
├── specs/                # Feature specifications
├── docs/                 # Technical documentation
└── public/               # Static assets
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Supabase (required for API endpoints)
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend (required for email)
RESEND_API_KEY=your_resend_api_key

# Site URL (for email links)
PUBLIC_SITE_URL=http://localhost:4321
```

For local development without API features, placeholder values work fine.

---

## API Endpoints

### POST /api/subscribe

Subscribe to the mailing list.

```bash
curl -X POST http://localhost:4321/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

**Responses:**

- `201` — New subscription created
- `200` — Already subscribed
- `400` — Invalid email
- `500` — Server error

### GET /api/unsubscribe

One-click unsubscribe via token.

```
GET /api/unsubscribe?token=<uuid>
```

**Responses:**

- `200` — HTML confirmation page
- `400` — Invalid token format
- `404` — Token not found

See [docs/api.md](./docs/api.md) for full API documentation.

---

## Testing

Run the test suite:

```bash
# Run all tests
npm run test:run

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test
```

Tests mock external services (Supabase, Resend) for fast, reliable execution.

---

## Deployment

The site deploys automatically to Vercel on push to `main`.

Manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```

---

## Tech Stack

| Technology                                    | Purpose               |
| --------------------------------------------- | --------------------- |
| [Astro](https://astro.build/)                 | Static site generator |
| [Starlight](https://starlight.astro.build/)   | Documentation theme   |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript  |
| [Supabase](https://supabase.com/)             | PostgreSQL database   |
| [Resend](https://resend.com/)                 | Transactional email   |
| [Vitest](https://vitest.dev/)                 | Testing framework     |
| [Vercel](https://vercel.com/)                 | Hosting platform      |

---

## Documentation

- [Architecture](./docs/architecture.md) — System design and data flow
- [API Reference](./docs/api.md) — Endpoint documentation
- [UAT Test Plan](./docs/uat/test-plan.md) — Manual testing guide

---

## Contributing

1. Follow the existing code style (Prettier + ESLint)
2. Write tests for new functionality
3. Use British English in all content
4. Run quality checks before committing:

```bash
npm run type-check && npm run lint && npm run format:check && npm run test:run
```

---

## Licence

MIT — see [LICENCE](./LICENCE) for details.

---

## Support

- **Website:** [coengineers.ai](https://coengineers.ai)
- **YouTube:** [@coengineers](https://youtube.com/@coengineers)
- **Issues:** [GitHub Issues](https://github.com/highlandhodl/coengineers/issues)

---
