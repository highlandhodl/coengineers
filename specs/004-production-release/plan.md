# Implementation Plan: Production Release

**Branch**: `004-production-release` | **Date**: 2025-12-10 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-production-release/spec.md`

## Summary

Production readiness work with three deliverable streams: (1) UI refinements (text-only logo, remove countdown), (2) comprehensive test suite for email workflows establishing patterns for future development, and (3) complete documentation for three stakeholder groups (UX, Engineering, PM/Board). Includes cleanup of legacy files after documentation migration.

## Technical Context

**Language/Version**: TypeScript 5.9 (via Astro 5.1)
**Primary Dependencies**: Astro, @astrojs/starlight, @supabase/supabase-js, Resend, Vitest
**Storage**: Supabase PostgreSQL (external service, existing schema)
**Testing**: Vitest with happy-dom, mocked Supabase/Resend
**Target Platform**: Vercel (static site + serverless functions)
**Project Type**: Web (static site with serverless API)
**Performance Goals**: N/A (polish and documentation only, no new features)
**Constraints**: Must maintain existing functionality; British English throughout
**Scale/Scope**: 2 API endpoints to test, ~15 documentation files to create, 2 UI changes

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Principle                      | Status  | Notes                                                                          |
| ------------------------------ | ------- | ------------------------------------------------------------------------------ |
| I. Learner-First Design        | ✅ PASS | Documentation improves learner onboarding; UI polish enhances first impression |
| II. British English Throughout | ✅ PASS | All documentation and tests use British English                                |
| III. Progressive Disclosure    | ✅ PASS | N/A - no new learning content                                                  |
| IV. Interactive Learning       | ✅ PASS | N/A - no changes to teaching scripts                                           |
| V. Spec-Driven Development     | ✅ PASS | Following speckit workflow                                                     |

**Content Standards**:

- Site Quality: Build must pass before merge ✅
- Testing: Test via corresponding commands ✅

**No violations requiring justification.**

## Project Structure

### Documentation (this feature)

```text
specs/004-production-release/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (existing schema documentation)
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (API contracts)
│   └── api.yaml         # OpenAPI spec for subscribe/unsubscribe
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
# Existing structure (no changes)
src/
├── assets/
│   ├── logo-dark.svg    # UPDATE: text-only logo
│   └── logo-light.svg   # UPDATE: text-only logo
├── components/
│   ├── Countdown.astro  # REMOVE: usage from homepage
│   ├── EmailSignup.astro
│   └── ...
├── content/docs/
│   └── index.mdx        # UPDATE: remove countdown
├── lib/
│   ├── supabase.ts
│   ├── email.ts
│   └── types.ts
├── pages/api/
│   ├── subscribe.ts     # TEST: add unit tests
│   └── unsubscribe.ts   # TEST: add unit tests
└── styles/
    └── custom.css

# New test structure
tests/
├── setup.ts             # Global mocks (Supabase, Resend)
└── unit/
    ├── subscribe.test.ts
    ├── unsubscribe.test.ts
    └── email.test.ts

# New documentation structure
docs/
├── ux/
│   ├── user-journeys.md         # UX team: 4 user journeys
│   └── README.md
├── engineering/
│   ├── architecture.md          # System diagram, components
│   ├── api.md                   # API reference
│   ├── deployment.md            # Vercel setup, env vars
│   ├── troubleshooting.md       # Common issues
│   └── README.md
├── product/
│   ├── feature-summary.md       # What was built
│   ├── decisions.md             # Key decisions
│   ├── roadmap.md               # Future enhancements
│   └── README.md
└── uat/
    ├── test-plan.md             # Test cases
    └── test-results.md          # Execution log

# Cleanup (delete after docs complete)
legacy/                          # DELETE: entire folder
```

**Structure Decision**: Existing Astro/Starlight structure maintained. New `/docs/` folder at root for stakeholder documentation, new `/tests/` folder for Vitest tests. Legacy folder deleted after migration.

## Complexity Tracking

No violations requiring justification.
