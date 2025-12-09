# Implementation Plan: Production Release Preparation

**Branch**: `004-production-release` | **Date**: 2025-12-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-production-release/spec.md`

## Summary

Prepare the CoEngineers repository for production release and senior engineering/PM review. This involves repository cleanup (removing duplicate files, orphaned content, and development artefacts), adding professional-grade code quality tooling (ESLint, Prettier, EditorConfig), implementing a comprehensive test suite (Vitest with mocked dependencies), setting up CI/CD (GitHub Actions), ensuring security compliance (RLS policies), and creating complete documentation (README, technical docs, UAT, end-user help).

## Technical Context

**Language/Version**: Node.js 18+, TypeScript 5.x (via Astro)
**Primary Dependencies**: Astro 5.1, @astrojs/starlight, @supabase/supabase-js, Resend
**Storage**: Supabase PostgreSQL (external service, service role access only)
**Testing**: Vitest (to be added) - matches Astro ecosystem
**Target Platform**: Vercel serverless (static site with API routes)
**Project Type**: Web application (static content + serverless API)
**Performance Goals**: Build completes within 2 minutes, tests run within 30 seconds
**Constraints**: Vercel serverless limits, no hardcoded credentials, service role only DB access
**Scale/Scope**: Educational course site with ~50 MDX pages, 2 API endpoints, email signup functionality

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Principle                          | Applicable   | Status  | Notes                                                                                                                   |
| ---------------------------------- | ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| **I. Learner-First Design**        | ✅ Partially | ✅ PASS | Documentation must be accessible. Technical jargon defined in glossary. End-user troubleshooting guides included.       |
| **II. British English Throughout** | ✅ Yes       | ✅ PASS | All documentation uses British spelling (colour, organisation, behaviour). DD/MM/YYYY date format. Informal, warm tone. |
| **III. Progressive Disclosure**    | ⚪ N/A       | —       | Infrastructure feature, not course content                                                                              |
| **IV. Interactive Learning**       | ⚪ N/A       | —       | Infrastructure feature, not course content                                                                              |
| **V. Spec-Driven Development**     | ✅ Yes       | ✅ PASS | Following speckit workflow: specify → clarify → plan → tasks → implement                                                |

### Pre-Design Gate Evaluation

**PASS** — No constitution violations identified. The feature is primarily infrastructure-focused but documentation deliverables (README, UAT, end-user help) will follow learner-first and British English principles.

## Project Structure

### Documentation (this feature)

```text
specs/004-production-release/
├── spec.md              ✅ Created (feature specification)
├── plan.md              ✅ This file (/speckit.plan output)
├── research.md          ✅ Phase 0 output (complete)
├── data-model.md        ✅ Phase 1 output (complete)
├── quickstart.md        ✅ Phase 1 output (complete)
├── contracts/api.md     ✅ Phase 1 output (complete)
└── tasks.md             📋 Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
# Current structure (Astro/Starlight web application)
src/
├── assets/              # Logo SVGs, images
├── components/          # Custom Astro components
├── content/
│   └── docs/            # MDX course content (31 days + extras)
├── lib/
│   ├── email.ts         # Resend email service
│   ├── supabase.ts      # Supabase client
│   └── types.ts         # TypeScript types
├── pages/
│   └── api/
│       ├── subscribe.ts # POST /api/subscribe
│       └── unsubscribe.ts # GET /api/unsubscribe
├── styles/
│   └── custom.css       # Starlight customisations
├── content.config.ts    # Content collection config
└── env.d.ts             # Environment type declarations

# To be added (test infrastructure)
tests/
├── unit/
│   ├── subscribe.test.ts      # Subscribe endpoint tests
│   ├── unsubscribe.test.ts    # Unsubscribe endpoint tests
│   └── email.test.ts          # Email template tests
└── setup.ts                   # Test setup with mocks

# To be added (CI/CD)
.github/
└── workflows/
    └── ci.yml           # GitHub Actions workflow

# To be added (code quality)
.editorconfig            # Cross-editor consistency
.eslintrc.cjs            # ESLint configuration
.prettierrc              # Prettier configuration
vitest.config.ts         # Vitest configuration

# To be added (documentation)
docs/
├── uat/
│   └── test-plan.md     # UAT test cases
└── architecture.md      # System architecture
```

**Structure Decision**: Maintaining existing Astro project structure. Adding test infrastructure in root `/tests/` directory, CI configuration in `.github/workflows/`, and documentation in `/docs/` folder. No need for separate frontend/backend split as this is a unified Astro application with serverless API routes.

## Current State Analysis

### Existing Assets (Keep)

- `/src/` - All source code, components, API endpoints
- `/supabase/migrations/20241209000001_create_email_tables.sql` - Production migration
- `/public/` - Static assets
- `/astro.config.mjs` - Site configuration

### Cleanup Targets (Remove)

- `/supabase/migrations/20241209000001_create_email_tables 2.sql` - Duplicate file
- `/.DS_Store` - macOS metadata (if present)
- `/research/` - Development research materials (not production-relevant)
- `/company-context/` - Assessment needed (may be course materials)
- `/lesson-modules/` - Assessment needed (may be course materials)
- Orphaned docs in `/docs/` folder (already deleted per git status)
- Old spec directories (001-email-capture already deleted per git status)

### Missing Infrastructure (Add)

| Category      | Current State   | Required                              |
| ------------- | --------------- | ------------------------------------- |
| Linting       | None            | ESLint with TypeScript, Astro plugins |
| Formatting    | None            | Prettier                              |
| Editor Config | None            | EditorConfig                          |
| Testing       | None            | Vitest with 23+ test cases            |
| CI/CD         | None            | GitHub Actions                        |
| README        | Empty (0 bytes) | Comprehensive setup guide             |
| CLAUDE.md     | Empty (0 bytes) | Development context                   |
| UAT Docs      | None            | Test plan + test cases                |
| End-User Docs | None            | Troubleshooting, FAQ, Glossary        |

## Complexity Tracking

> No Constitution violations requiring justification.

N/A — This feature adds standard engineering infrastructure without introducing unnecessary complexity.

## API Endpoint Summary (for testing)

### POST /api/subscribe

- **Input**: `{ email: string, source?: SignupSource }`
- **Scenarios**: Valid email (new), valid email (duplicate), valid email (resubscribe), invalid email, malformed request
- **Dependencies**: Supabase, Resend (both will be mocked)

### GET /api/unsubscribe

- **Input**: `?token=<uuid>`
- **Scenarios**: Valid token (subscribed), valid token (already unsubscribed), invalid token format, token not found
- **Dependencies**: Supabase (will be mocked)

## Test Coverage Requirements

Per FR-011 through FR-015, the test suite must cover:

1. **Subscribe Endpoint (8+ tests)**
   - Valid email, new subscriber → 201, welcome email sent
   - Valid email, existing active subscriber → 200, no email sent
   - Valid email, previously unsubscribed → 201, resubscription, email sent
   - Invalid email format → 400
   - Missing email → 400
   - Form-encoded request → Works same as JSON
   - With valid source parameter → Source recorded
   - Database error handling → 500

2. **Unsubscribe Endpoint (6+ tests)**
   - Valid token, subscribed user → 200 HTML confirmation
   - Valid token, already unsubscribed → 200 HTML confirmation
   - Invalid token format → 400 JSON error
   - Token not found → 404 JSON error
   - Database error handling → 500
   - Idempotency (repeat unsubscribe) → Still 200

3. **Email Template (4+ tests)**
   - Template contains required elements
   - Unsubscribe URL correctly formatted
   - British English used throughout
   - No hardcoded URLs (uses env vars)

## Phase 1 Deliverables

The following artefacts will be generated in Phase 1:

1. **data-model.md** - Database schema documentation (already implemented, documenting existing)
2. **contracts/api.md** - OpenAPI specification for `/api/subscribe` and `/api/unsubscribe`
3. **quickstart.md** - Developer quick-start guide for running tests locally
