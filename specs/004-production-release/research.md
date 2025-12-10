# Research: Production Release

**Branch**: `004-production-release` | **Date**: 2025-12-10

## Overview

This feature involves polish, testing, and documentation for an existing system. No new technologies or significant unknowns exist. Research focuses on best practices for each deliverable stream.

## Research Areas

### 1. Vitest Testing Patterns for Astro API Routes

**Decision**: Use Vitest with mocked Supabase client and Resend client.

**Rationale**:

- Vitest is already configured in the project (package.json shows vitest dependency)
- Astro API routes are standard async functions that can be unit tested by mocking the request context
- Mocking external services (Supabase, Resend) provides fast, deterministic tests
- Pattern established in legacy tests can be followed

**Alternatives considered**:

- Playwright for E2E tests: Rejected as out of scope and adds complexity
- Integration tests with real Supabase: Rejected as requires test database credentials and adds flakiness

**Pattern to follow**:

```typescript
// tests/setup.ts - Global mocks
vi.mock("../../src/lib/supabase", () => ({
  getSupabaseClient: vi.fn(() => mockSupabaseClient),
}));

vi.mock("../../src/lib/email", () => ({
  sendWelcomeEmail: vi.fn(),
}));

// tests/unit/subscribe.test.ts
describe("POST /api/subscribe", () => {
  beforeEach(() => vi.clearAllMocks());

  it("creates new subscriber with valid email", async () => {
    // Arrange: mock Supabase responses
    // Act: call POST() with mock context
    // Assert: verify response and mock calls
  });
});
```

### 2. SVG Text-Only Logo

**Decision**: Replace gear + text SVG with text-only SVG using the Inter font.

**Rationale**:

- Current logo uses inline SVG with text element
- Simplest approach is to remove the gear `<g>` element and adjust viewBox
- Font family remains "Inter, system-ui, sans-serif" for consistency

**Implementation**:

```svg
<svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="26" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700" letter-spacing="-0.5">
    <tspan fill="#F7931A">Co</tspan><tspan fill="#FAFAF9">Engineers</tspan>
  </text>
</svg>
```

### 3. Documentation Structure

**Decision**: Three-folder structure under `/docs/` aligned with stakeholder groups.

**Rationale**:

- Clear ownership: each stakeholder knows where their docs live
- Separation of concerns: technical docs don't clutter product docs
- Scalable: easy to add more docs per category

**Structure**:

- `/docs/ux/` - User journeys, wireframes, experience documentation
- `/docs/engineering/` - Architecture, API, deployment, troubleshooting
- `/docs/product/` - Feature summary, decisions, roadmap
- `/docs/uat/` - Test plan and results

**Alternatives considered**:

- Single flat `/docs/` folder: Rejected as becomes cluttered with 15+ files
- Keep in `/specs/`: Rejected as specs are temporary planning artifacts

### 4. UAT Test Plan Format

**Decision**: Markdown-based test plan with structured test cases and execution log.

**Rationale**:

- Markdown is version-controlled and reviewable
- Structured format enables clear pass/fail tracking
- Execution log provides audit trail

**Format**:

```markdown
## Test Cases

### TC-001: Valid email subscription (P1)

**Preconditions**: Clean browser, no existing subscription
**Steps**:

1. Navigate to homepage
2. Enter valid email in signup form
3. Click subscribe
   **Expected**: Success message displayed, welcome email received
   **Actual**: [To be filled during execution]
   **Status**: [ ] Pass / [ ] Fail
```

### 5. Legacy Cleanup Strategy

**Decision**: Delete `/legacy/` folder entirely after documentation migration.

**Rationale**:

- Legacy folder contains outdated documentation that's being replaced
- No code dependencies exist on legacy folder
- Clean repository reduces confusion

**Verification before deletion**:

1. All relevant content migrated to `/docs/`
2. No imports/references to legacy folder in codebase
3. Build passes without legacy folder

## Unknowns Resolved

| Unknown                | Resolution                             |
| ---------------------- | -------------------------------------- |
| Test mocking approach  | Vitest mocks for Supabase and Resend   |
| Logo simplification    | Remove gear element, adjust viewBox    |
| Documentation location | `/docs/` with stakeholder subfolders   |
| UAT format             | Markdown test cases with execution log |
| Legacy cleanup timing  | After all documentation complete       |

## Next Steps

Phase 1: Generate data-model.md and API contracts based on existing schema and endpoints.
