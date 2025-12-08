# Quick Start: Development & Testing

**Feature**: 004-production-release | **Date**: 2025-12-09

This guide covers setting up your local environment for development and running the test suite.

---

## Prerequisites

| Requirement | Version | Check Command    |
| ----------- | ------- | ---------------- |
| Node.js     | 18+     | `node --version` |
| npm         | 9+      | `npm --version`  |
| Git         | 2.30+   | `git --version`  |

---

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/coengineers/coengineers-productivity-course.git
cd coengineers-productivity-course
```

### 2. Install Dependencies

```bash
npm ci
```

> **Note**: Use `npm ci` (not `npm install`) for deterministic, reproducible builds.

### 3. Environment Variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

**Required Variables**:

| Variable                    | Description               | Required For    |
| --------------------------- | ------------------------- | --------------- |
| `SUPABASE_URL`              | Supabase project URL      | API endpoints   |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | API endpoints   |
| `RESEND_API_KEY`            | Resend API key            | Email sending   |
| `RESEND_FROM_EMAIL`         | Sender email address      | Email sending   |
| `PUBLIC_SITE_URL`           | Site URL for links        | Email templates |

**For local development** (no live services):

```env
# These can be placeholder values for local development
SUPABASE_URL=http://localhost:54321
SUPABASE_SERVICE_ROLE_KEY=placeholder
RESEND_API_KEY=re_placeholder
RESEND_FROM_EMAIL=test@example.com
PUBLIC_SITE_URL=http://localhost:4321
```

---

## Development Commands

### Start Development Server

```bash
npm run dev
```

Opens the site at [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
npm run build
```

Outputs static files to `./dist/`

### Preview Production Build

```bash
npm run preview
```

---

## Quality Checks

### Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler in check mode.

### Linting

```bash
npm run lint
```

Runs ESLint on all source files.

### Formatting

```bash
# Check formatting
npm run format:check

# Auto-fix formatting
npm run format
```

Runs Prettier on all files.

---

## Running Tests

### Run All Tests

```bash
npm run test:run
```

Runs all tests once and exits (CI mode).

### Run Tests in Watch Mode

```bash
npm run test
```

Watches for file changes and re-runs affected tests.

### Run Specific Test File

```bash
npm run test:run -- tests/unit/subscribe.test.ts
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

Generates coverage report in `./coverage/`

---

## Test Structure

```
tests/
├── setup.ts              # Global test setup with mocks
└── unit/
    ├── subscribe.test.ts     # Subscribe endpoint tests
    ├── unsubscribe.test.ts   # Unsubscribe endpoint tests
    └── email.test.ts         # Email template tests
```

### Test Mocking

Tests mock external dependencies:

- **Supabase**: Mocked via `vi.mock('../src/lib/supabase')`
- **Resend**: Mocked via `vi.mock('resend')`

This ensures tests:

- Run fast (no network calls)
- Are reliable (no external dependencies)
- Can simulate error conditions

---

## Full Quality Check (CI Equivalent)

Run all checks in sequence:

```bash
npm run type-check && npm run lint && npm run format:check && npm run test:run && npm run build
```

This mirrors the CI pipeline exactly.

---

## Common Issues

### "Cannot find module" Errors

```bash
rm -rf node_modules package-lock.json
npm ci
```

### TypeScript Errors After Package Update

```bash
npm run type-check -- --build --clean
npm run type-check
```

### Tests Fail with Import Errors

Ensure `vitest.config.ts` uses `getViteConfig()`:

```typescript
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    /* config options */
  },
});
```

### ESLint/Prettier Conflicts

Run Prettier first, then ESLint:

```bash
npm run format
npm run lint -- --fix
```

---

## Environment Configurations

| Environment | Command         | Description             |
| ----------- | --------------- | ----------------------- |
| Development | `npm run dev`   | Hot reload, source maps |
| Production  | `npm run build` | Optimised static output |
| Test        | `npm run test`  | Uses mocked services    |

---

## IDE Setup

### VS Code Extensions

Install recommended extensions:

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- Astro (`astro-build.astro-vscode`)

### Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "eslint.validate": ["javascript", "typescript", "astro"]
}
```

---

## Next Steps

1. **Read the API Contract**: `specs/004-production-release/contracts/api.md`
2. **Understand the Data Model**: `specs/004-production-release/data-model.md`
3. **Review UAT Test Cases**: `docs/uat/test-plan.md` (after implementation)
