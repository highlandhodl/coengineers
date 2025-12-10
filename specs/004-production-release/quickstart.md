# Quickstart: Production Release

**Branch**: `004-production-release` | **Date**: 2025-12-10

## Prerequisites

- Node.js 18+
- npm 9+
- Access to the CoEngineers repository

## Setup

```bash
# Clone and checkout feature branch
git clone <repo-url>
cd coengineers
git checkout 004-production-release

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs at http://localhost:4321

## Key Commands

| Command                 | Purpose                        |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start development server       |
| `npm run build`         | Production build               |
| `npm run test:run`      | Run tests once                 |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run type-check`    | TypeScript type checking       |
| `npm run lint`          | ESLint check                   |
| `npm run format:check`  | Prettier check                 |

## Feature Scope

This feature implements three deliverable streams:

### 1. UI Refinements

- **Logo**: Change from gear+text to text-only
- **Homepage**: Remove countdown timer
- Files: `src/assets/logo-dark.svg`, `src/assets/logo-light.svg`, `src/content/docs/index.mdx`

### 2. Test Suite

- Unit tests for `/api/subscribe` and `/api/unsubscribe`
- Email template tests
- Files: `tests/setup.ts`, `tests/unit/*.test.ts`

### 3. Documentation

- UX team: `docs/ux/user-journeys.md`
- Engineering: `docs/engineering/architecture.md`, `api.md`, `deployment.md`, `troubleshooting.md`
- PM/Board: `docs/product/feature-summary.md`, `decisions.md`, `roadmap.md`
- UAT: `docs/uat/test-plan.md`, `test-results.md`

### 4. Cleanup

- Delete `/legacy/` folder after documentation complete

## Verification

Before merging, verify all quality gates pass:

```bash
npm run type-check && npm run lint && npm run format:check && npm run build && npm run test:run
```

All commands must exit with status 0.

## Environment Variables

For local testing of API endpoints, create `.env`:

```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_xxx
PUBLIC_SITE_URL=http://localhost:4321
```

Note: Tests use mocks and don't require real credentials.
