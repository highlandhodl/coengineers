# Research: Production Release Preparation

**Feature**: 004-production-release | **Date**: 2025-12-09 | **Status**: Complete

This document records research findings and technology decisions for the production release preparation feature.

---

## 1. Testing Framework

### Decision: Vitest

**Rationale**: Vitest is the recommended testing framework for Astro projects. It integrates natively with Vite (which Astro uses internally) and provides first-class TypeScript support without additional configuration.

**Alternatives Considered**:
| Framework | Pros | Cons | Verdict |
|-----------|------|------|---------|
| **Vitest** | Native Vite integration, fast, TypeScript support, Astro-specific `getViteConfig()` helper | Newer than Jest | ✅ Selected |
| Jest | Mature ecosystem, extensive documentation | Requires additional configuration for ESM/TypeScript, slower | ❌ Rejected |
| Mocha | Flexible, minimal | No built-in assertions, requires setup | ❌ Rejected |

**Key Configuration Details**:

- Use `getViteConfig()` from `astro/config` for proper Astro integration
- Set test environment to `node` for server-side API tests (default)
- Use `happy-dom` environment only if testing client components
- Install `@testing-library/jest-dom` for enhanced assertions (compatible with Vitest)

**Source**: [Astro Testing Docs](https://docs.astro.build/en/guides/testing/), [Vitest Config](https://vitest.dev/config/)

---

## 2. Mocking Strategy for External Services

### Decision: Vitest Mock Functions with Manual Mocks

**Rationale**: The API endpoints depend on Supabase and Resend. Tests must mock these services to ensure tests are:

- Fast (no network calls)
- Reliable (no external service dependencies)
- Deterministic (predictable responses)

**Implementation Approach**:

```typescript
// tests/setup.ts
import { vi } from 'vitest';

// Mock Supabase client
vi.mock('../src/lib/supabase', () => ({
  getSupabaseClient: vi.fn(() => ({
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      update: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn(),
    })),
  })),
}));

// Mock Resend
vi.mock('resend', () => ({
  Resend: vi.fn(() => ({
    emails: {
      send: vi.fn(),
    },
  })),
}));
```

**Alternatives Considered**:
| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| **Manual mocks** | Full control, simple setup | More boilerplate | ✅ Selected |
| MSW (Mock Service Worker) | Network-level mocking | Overkill for unit tests | ❌ Rejected |
| Live sandbox services | Tests real integration | Slow, flaky, credentials needed | ❌ Rejected |

---

## 3. Linting Configuration

### Decision: ESLint with eslint-plugin-astro

**Rationale**: ESLint is the standard JavaScript/TypeScript linter. The `eslint-plugin-astro` package provides Astro-specific rules and understands `.astro` file syntax.

**Package Selection**:

```json
{
  "devDependencies": {
    "eslint": "^9.x",
    "@eslint/js": "^9.x",
    "eslint-plugin-astro": "^1.x",
    "eslint-plugin-jsx-a11y": "^6.x",
    "typescript-eslint": "^8.x",
    "globals": "^15.x"
  }
}
```

**Configuration Approach**: Use modern flat config format (`eslint.config.mjs`)

**Key Rules to Enable**:

- TypeScript recommended rules
- Astro recommended rules
- Accessibility rules (jsx-a11y)
- No unused variables, no console in production

**Source**: [eslint-plugin-astro User Guide](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/), [Cosmic Themes Setup Guide](https://cosmicthemes.com/blog/astro-eslint-prettier-setup/)

---

## 4. Formatting Configuration

### Decision: Prettier with prettier-plugin-astro

**Rationale**: Prettier provides consistent formatting across the codebase. The Astro plugin enables formatting of `.astro` files.

**Package Selection**:

```json
{
  "devDependencies": {
    "prettier": "^3.x",
    "prettier-plugin-astro": "^0.x"
  }
}
```

**Configuration** (`.prettierrc`):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

**ESLint Integration**: Use `eslint-config-prettier` to disable ESLint formatting rules that conflict with Prettier.

**Source**: [Astro Editor Setup](https://docs.astro.build/en/editor-setup/)

---

## 5. Editor Configuration

### Decision: EditorConfig for Cross-Platform Consistency

**Rationale**: EditorConfig ensures consistent coding styles across different editors and IDEs, regardless of developer setup.

**Configuration** (`.editorconfig`):

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2
```

**Key Decisions**:

- Use `lf` line endings (Unix-style) for cross-platform consistency
- 2-space indentation (matches existing codebase)
- Preserve trailing whitespace in Markdown (significant for formatting)

---

## 6. CI/CD Configuration

### Decision: GitHub Actions with Node.js Workflow

**Rationale**: GitHub Actions is integrated with GitHub, free for public repositories, and supports matrix builds.

**Workflow Strategy**:

1. **Trigger**: On push and pull request to main branch
2. **Steps** (sequential):
   - Checkout code
   - Setup Node.js with npm cache
   - Install dependencies (`npm ci`)
   - Type check (`npm run type-check`)
   - Lint (`npm run lint`)
   - Format check (`npm run format:check`)
   - Test (`npm run test:run`)
   - Build (`npm run build`)

**Key Best Practices Applied**:

- Use `npm ci` instead of `npm install` for deterministic builds
- Enable npm caching via `actions/setup-node`
- Use specific action versions (`@v4`) for stability
- Run checks early (type-check, lint before tests)
- Single Node.js version (18) matching Vercel runtime

**Source**: [GitHub Actions Node.js Docs](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs), [actions/setup-node](https://github.com/actions/setup-node)

---

## 7. Dependency Update Automation

### Decision: Dependabot

**Rationale**: Dependabot is free, integrated with GitHub, and automatically creates PRs for outdated dependencies.

**Configuration** (`.github/dependabot.yml`):

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
    open-pull-requests-limit: 5
    groups:
      production:
        patterns:
          - '*'
        exclude-patterns:
          - '@types/*'
          - 'eslint*'
          - 'prettier*'
          - 'vitest*'
      dev-dependencies:
        dependency-type: 'development'
```

**Alternatives Considered**:
| Tool | Pros | Cons | Verdict |
|------|------|------|---------|
| **Dependabot** | Free, native GitHub integration | Limited grouping options | ✅ Selected |
| Renovate | More configurable | Requires setup, external service | ❌ Rejected |

---

## 8. Documentation Standards

### UAT Test Case Format

**Decision**: Use structured test case format with British English

**Template**:

```markdown
### TC-XXX: [Test Case Title]

**Priority**: P1/P2/P3
**Preconditions**: [Required setup]
**Test Data**: [Any required data]

**Steps**:

1. [Action]
2. [Action]
3. [Action]

**Expected Result**: [What should happen]
**Pass Criteria**: [Measurable outcome]
```

**Coverage Areas** (per FR-028 to FR-033):

- Email signup functionality (TC-001 to TC-005)
- Unsubscribe functionality (TC-006 to TC-010)
- Lesson navigation (TC-011 to TC-015)
- Slash command system (TC-016 to TC-020)
- Responsive design (TC-021 to TC-025)

---

## 9. Reference Section Structure

### Decision: Add to Starlight Sidebar as Collapsed Section

**Implementation**: Add new sidebar group in `astro.config.mjs`:

```javascript
{
  label: 'Reference',
  collapsed: true,
  items: [
    { label: 'Troubleshooting', slug: 'reference/troubleshooting' },
    { label: 'Glossary', slug: 'reference/glossary' },
    { label: 'FAQ', slug: 'reference/faq' },
  ],
}
```

**Content Guidelines** (per Constitution):

- Learner-first: No jargon, define technical terms
- British English: colour, organisation, behaviour
- Accessible: Clear explanations, helpful examples

---

## 10. Security - RLS Policies

### Decision: Deny-All for Anonymous/Authenticated, Service Role Only

**Current State**: Migration `20241209000001_create_email_tables.sql` enables RLS but policies need verification.

**Required Policies**:

```sql
-- Verify RLS enabled
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;

-- Deny all public access (service role bypasses RLS)
CREATE POLICY "Deny anonymous access" ON subscribers
  FOR ALL TO anon USING (false);

CREATE POLICY "Deny authenticated access" ON subscribers
  FOR ALL TO authenticated USING (false);
```

**Verification**: Use `get_advisors` Supabase MCP tool post-implementation to confirm zero security warnings.

---

## Summary of Decisions

| Area          | Decision           | Key Package/Tool                                     |
| ------------- | ------------------ | ---------------------------------------------------- |
| Testing       | Vitest             | `vitest`, `@testing-library/jest-dom`                |
| Mocking       | Manual vi.mock()   | Built into Vitest                                    |
| Linting       | ESLint flat config | `eslint`, `eslint-plugin-astro`, `typescript-eslint` |
| Formatting    | Prettier           | `prettier`, `prettier-plugin-astro`                  |
| Editor        | EditorConfig       | `.editorconfig`                                      |
| CI/CD         | GitHub Actions     | `.github/workflows/ci.yml`                           |
| Dependencies  | Dependabot         | `.github/dependabot.yml`                             |
| Documentation | Starlight MDX      | Reference section with 3 pages                       |
| Security      | RLS deny-all       | Service role only access                             |

---

## Open Questions Resolved

All NEEDS CLARIFICATION items from the plan have been resolved through this research:

1. ✅ Testing framework → Vitest
2. ✅ Linting approach → ESLint flat config with Astro plugin
3. ✅ CI/CD workflow → GitHub Actions
4. ✅ Mocking strategy → Vitest manual mocks
5. ✅ Documentation format → UAT structured test cases
