# Decisions Log

This document captures key architectural and design decisions for the CoEngineers platform.

## Decision 001: Astro/Starlight for Documentation Site

**Date**: 2024-12
**Status**: Accepted

### Context

Needed a framework for building a documentation-style course website with MDX content.

### Options Considered

1. **Next.js + custom theme** - Flexible but requires custom documentation features
2. **Docusaurus** - React-based, feature-rich but opinionated
3. **Astro + Starlight** - Static-first, excellent DX, built-in docs features

### Decision

Chose Astro + Starlight.

### Rationale

- Zero JavaScript by default (performance)
- Built-in search, navigation, dark mode
- MDX support out of the box
- Active community and Anthropic backing

---

## Decision 002: Supabase for Database

**Date**: 2024-12
**Status**: Accepted

### Context

Needed a database for email subscription management.

### Options Considered

1. **Firebase** - NoSQL, Google ecosystem
2. **PlanetScale** - MySQL, serverless-friendly
3. **Supabase** - PostgreSQL, open source, generous free tier

### Decision

Chose Supabase PostgreSQL.

### Rationale

- PostgreSQL is battle-tested
- Row Level Security for safety
- PostgREST provides instant API
- Generous free tier for small projects

---

## Decision 003: Resend for Transactional Email

**Date**: 2024-12
**Status**: Accepted

### Context

Needed a service to send welcome emails to subscribers.

### Options Considered

1. **SendGrid** - Enterprise-grade, complex setup
2. **Postmark** - Excellent deliverability, higher cost
3. **Resend** - Developer-focused, simple API, modern

### Decision

Chose Resend.

### Rationale

- Modern, clean API
- Excellent documentation
- Developer-first approach
- Reasonable pricing

---

## Decision 004: Vitest for Testing

**Date**: 2024-12
**Status**: Accepted

### Context

Needed a testing framework compatible with Astro and Vite.

### Options Considered

1. **Jest** - Standard choice, requires configuration for ESM
2. **Vitest** - Native Vite support, Jest-compatible API
3. **Playwright** - E2E focused, overkill for unit tests

### Decision

Chose Vitest.

### Rationale

- Native integration with Astro/Vite
- Jest-compatible API (easy migration)
- Fast execution
- Built-in coverage support

---

## Decision 005: British English Throughout

**Date**: 2024-12
**Status**: Accepted

### Context

Needed consistency in language across all content.

### Options Considered

1. **American English** - Most common in tech
2. **British English** - Author's native dialect
3. **Mixed** - Inconsistent, confusing

### Decision

Chose British English.

### Rationale

- Author's native language
- Consistency across all content
- Target audience is global (both acceptable)
- Starlight configured for `en-GB`

---

## Decision 006: Service Role Key for API

**Date**: 2024-12
**Status**: Accepted

### Context

Needed to access Supabase from serverless functions.

### Options Considered

1. **Anon key + RLS policies** - Complex, requires auth
2. **Service role key** - Bypasses RLS, server-only
3. **Direct PostgreSQL connection** - Complex pooling issues

### Decision

Chose service role key.

### Rationale

- Simple implementation
- Bypasses RLS safely (deny-all policies)
- No authentication required for subscription
- Key never exposed to client

---

## Decision 007: Four-Theme Course Structure

**Date**: 2024-12
**Status**: Accepted

### Context

Needed to restructure 31-day course into coherent modules.

### Options Considered

1. **Keep 31-day format** - Original structure, too long
2. **Weekly modules** - 4-5 weeks, still time-based
3. **Theme-based modules** - Skill grouping, flexible timing

### Decision

Chose four-theme structure with 20 labs.

### Rationale

- Progressive skill building
- Clear learning objectives per theme
- Flexible pacing (not tied to days)
- Manageable scope (5 labs per theme)
