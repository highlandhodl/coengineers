# Implementation Plan: Email Capture System

**Branch**: `001-email-capture` | **Date**: 9 December 2025 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-email-capture/spec.md`

## Summary

Build an email capture system for CoEngineers.ai that stores subscribers in Supabase and sends welcome emails via Resend. The existing `EmailSignup.astro` component needs to be connected to a new API endpoint that handles subscription and triggers the welcome email. The community page needs updating to show "Coming Soon" messaging with email capture for notifications.

## Technical Context

**Language/Version**: TypeScript (ESM) via Astro 5.x
**Primary Dependencies**: Astro 5.1, @astrojs/starlight 0.34, Supabase JS client, Resend SDK
**Storage**: Supabase (PostgreSQL) - subscribers and email_sends tables
**Testing**: Manual testing initially (Astro doesn't ship with built-in test framework)
**Target Platform**: Vercel (serverless functions for API routes)
**Project Type**: web (Astro static site with API routes)
**Performance Goals**: Email signup < 2 seconds, welcome email < 2 minutes
**Constraints**: Must work with Vercel serverless, British English throughout
**Scale/Scope**: ~1000 subscribers expected during launch period

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Design Check (Phase 0)

| Principle | Status | Notes |
|-----------|--------|-------|
| I. British English Throughout | ✅ PASS | All user-facing copy uses British English |
| II. Accessibility First | ✅ PASS | Form is simple, clear error messages planned |
| III. Obsidian-Friendly Markdown | ✅ PASS | Feature doesn't affect course content markdown |
| IV. Steal-Ready Outputs | N/A | Not applicable to email system |
| V. Separation of Content and Code | ✅ PASS | API routes in `src/pages/api/`, separate from content |
| VI. Minimal Dependencies | ✅ PASS | Only Supabase + Resend added (both specified in PRD) |

**Gate Status**: PASSED

### Post-Design Check (Phase 1)

| Principle | Status | Notes |
|-----------|--------|-------|
| I. British English Throughout | ✅ PASS | All error messages, success states, and email copy use British English |
| II. Accessibility First | ✅ PASS | Form has progressive enhancement (works without JS), clear labels |
| III. Obsidian-Friendly Markdown | ✅ PASS | No changes to course content files |
| IV. Steal-Ready Outputs | N/A | Not applicable |
| V. Separation of Content and Code | ✅ PASS | API code in `src/`, community page update is content only |
| VI. Minimal Dependencies | ✅ PASS | Only 2 new packages: `@supabase/supabase-js`, `resend` |

**Gate Status**: PASSED - Ready for task generation.

## Project Structure

### Documentation (this feature)

```text
specs/001-email-capture/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── EmailSignup.astro    # Existing - needs state management updates
├── pages/
│   └── api/
│       ├── subscribe.ts     # NEW - handles email signup
│       └── unsubscribe.ts   # NEW - handles unsubscribe
├── lib/
│   ├── supabase.ts          # NEW - Supabase client
│   └── resend.ts            # NEW - Resend client + welcome email
├── content/docs/
│   └── community.mdx        # Existing - needs "Coming Soon" update
└── styles/
    └── custom.css           # Existing - may need form state styles
```

**Structure Decision**: Single web application structure. API routes live alongside the Astro pages as serverless functions (Astro's built-in API routes). No separate backend needed - Vercel handles function deployment automatically.

## Complexity Tracking

> No violations requiring justification. Implementation uses standard Astro patterns.
