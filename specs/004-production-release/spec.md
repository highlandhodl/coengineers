# Feature Specification: Production Release

**Feature Branch**: `004-production-release`
**Created**: 2025-12-10
**Status**: Draft
**Input**: Production readiness with three deliverable streams: (1) small UI refinements, (2) comprehensive testing for Engineering confidence, (3) detailed documentation for UX, Engineering, and PM/Board stakeholders.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - UI Refinements (Priority: P1)

The UX team reviews the site and confirms all visual polish items are complete: text-only logo, no countdown timer, clean uncluttered homepage. The site looks professional and award-winning before Monday launch.

**Why this priority**: Visual polish is a prerequisite for launch. The UX team must sign off on appearance before go-live.

**Independent Test**: UX team visually inspects homepage, theme pages, and lab pages on desktop and mobile, confirming all refinements are implemented.

**Acceptance Scenarios**:

1. **Given** the UX team views the header, **When** they inspect the logo, **Then** they see text-only "CoEngineers" without gear icon or graphics.
2. **Given** the UX team views the homepage, **When** they look for the countdown, **Then** no countdown timer is present.
3. **Given** the UX team reviews the homepage layout, **When** they assess visual hierarchy, **Then** the four theme cards are clean and uncluttered with clear calls-to-action.

---

### User Story 2 - Comprehensive Test Suite (Priority: P1)

Senior Engineering reviews the codebase and confirms robust automated testing is in place: unit tests for API endpoints, integration tests for external services, and all quality gates passing. Engineering has confidence the system is production-ready.

**Why this priority**: Engineering sign-off requires evidence of code quality and test coverage. No launch without Engineering confidence.

**Independent Test**: Run `npm run test:run` and `npm run test:coverage`, verify 80%+ coverage on API endpoints, all tests passing.

**Acceptance Scenarios**:

1. **Given** a developer runs the test suite, **When** tests execute, **Then** all unit tests pass with 80%+ code coverage on `src/pages/api/`.
2. **Given** a developer runs quality checks, **When** they execute type-check, lint, and format commands, **Then** all pass with zero errors.
3. **Given** the CI pipeline runs on a pull request, **When** all checks complete, **Then** the build passes and preview deployment succeeds.

---

### User Story 3 - Documentation for Stakeholders (Priority: P1)

All three stakeholder groups receive their required documentation: UX team gets user experience documentation (journey maps, screen flows), Engineering gets technical documentation (architecture, API reference, deployment guide), PM/Board gets product documentation (feature summary, decisions made, future roadmap).

**Why this priority**: Each stakeholder group has explicitly requested documentation as a launch requirement. Missing any one blocks sign-off.

**Independent Test**: Each stakeholder reviews their documentation package and confirms it meets their stated requirements.

**Acceptance Scenarios**:

1. **Given** the UX team reviews their documentation, **When** they look for user journey documentation, **Then** they find documented user flows for homepage, subscription, navigation, and unsubscribe experiences.
2. **Given** Senior Engineering reviews technical docs, **When** they look for architecture and API documentation, **Then** they find system diagrams, API endpoint specifications, and deployment instructions.
3. **Given** PM/Board reviews product docs, **When** they look for decision documentation, **Then** they find a summary of what was built, key decisions made, and clear next steps.

---

### User Story 4 - UAT Sign-off (Priority: P2)

A structured User Acceptance Testing process is completed before launch. Test cases are documented, executed, and results recorded. Any critical issues are fixed before go-live.

**Why this priority**: UAT provides formal evidence that the system meets requirements. Required for audit trail and stakeholder confidence.

**Independent Test**: Execute all P1 test cases in the UAT plan, record results, confirm 100% P1 pass rate.

**Acceptance Scenarios**:

1. **Given** a tester follows the UAT test plan, **When** they execute P1 test cases, **Then** all critical tests pass.
2. **Given** test execution is complete, **When** results are compiled, **Then** a test report shows pass/fail status for each case.
3. **Given** any P1 test fails, **When** the issue is raised, **Then** it is fixed and retested before launch sign-off.

---

### Edge Cases

- What if a UI refinement requirement conflicts with Starlight theme constraints? Document limitation and propose post-launch fix.
- What if test coverage cannot reach 80% due to mocking limitations? Document exclusions with justification.
- What if a stakeholder requests additional documentation not specified? Capture request for post-launch follow-up.

## Requirements _(mandatory)_

### Functional Requirements

**UI Refinements**

- **FR-001**: Logo MUST display as text-only "CoEngineers" without gear icon.
- **FR-002**: Homepage MUST NOT display a countdown timer.
- **FR-003**: Homepage layout MUST be clean and uncluttered with clear visual hierarchy.

**Testing** (focused on email workflows; establishes patterns for future work)

- **FR-004**: Unit tests MUST exist for `/api/subscribe` endpoint covering valid email, invalid email, duplicate, and resubscribe scenarios.
- **FR-005**: Unit tests MUST exist for `/api/unsubscribe` endpoint covering valid token, invalid token, missing token, and already-unsubscribed scenarios.
- **FR-006**: Unit tests MUST exist for email template generation verifying British English content and unsubscribe link presence.
- **FR-007**: Test suite MUST establish clear patterns (mocking, fixtures, assertions) for future test development.
- **FR-008**: All TypeScript type checks MUST pass with strict mode.
- **FR-009**: All ESLint rules MUST pass with zero errors.
- **FR-010**: All Prettier formatting checks MUST pass.
- **FR-011**: Build MUST complete without errors or warnings.

**Documentation - UX Team**

- **FR-012**: User journey documentation MUST cover: homepage experience, email subscription flow, course navigation flow, and unsubscribe flow.
- **FR-013**: Each user journey MUST include: entry point, key screens/states, success path, and error states.

**Documentation - Engineering**

- **FR-014**: Architecture documentation MUST include system diagram showing Vercel, Supabase, and Resend integration.
- **FR-015**: API documentation MUST cover both endpoints with request/response examples and error codes.
- **FR-016**: Deployment guide MUST cover Vercel setup, environment variables, and production checklist.
- **FR-017**: Troubleshooting guide MUST cover common issues (build failures, API errors, email delivery).

**Documentation - PM/Board**

- **FR-018**: Feature summary MUST describe what was built in the 001-course-restructure and 004-production-release work.
- **FR-019**: Decision log MUST capture key architectural and design decisions made during development.
- **FR-020**: Roadmap section MUST outline potential future enhancements and clear next steps.

**UAT**

- **FR-021**: UAT test plan MUST define test cases for all critical user journeys.
- **FR-022**: Test cases MUST be prioritised (P1 critical, P2 important).
- **FR-023**: Test execution log MUST record pass/fail status, tester, date, and notes.

**Cleanup**

- **FR-024**: All documentation MUST be created fresh in `/docs/` folder at project root.
- **FR-025**: `/legacy/` folder MUST be deleted after documentation is complete.
- **FR-026**: Any unused code, components, or files from previous iterations MUST be removed.

### Key Entities

- **Test Case**: A documented scenario with preconditions, steps, and expected results.
- **User Journey**: A documented flow from user goal to completion, including happy path and error states.
- **Documentation Artifact**: A markdown file delivered to a specific stakeholder group.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Logo displays as text-only (verified by UX team visual inspection).
- **SC-002**: Countdown timer removed from homepage (verified by UX team).
- **SC-003**: Unit test coverage on API endpoints is 80% or higher.
- **SC-004**: All quality checks (type-check, lint, format, build) pass.
- **SC-005**: UX team documentation package contains 4 user journeys.
- **SC-006**: Engineering documentation package contains architecture, API, deployment, and troubleshooting docs.
- **SC-007**: PM/Board documentation package contains feature summary, decisions, and roadmap.
- **SC-008**: UAT test plan contains all P1 test cases executed with 100% pass rate.
- **SC-009**: All three stakeholder groups provide sign-off before launch.

## Assumptions

- 001-course-restructure provides the base site structure (4 themes, 20 labs, content pages).
- Existing API endpoints (`/api/subscribe`, `/api/unsubscribe`) are functional and need tests, not reimplementation.
- Supabase and Resend are already configured; documentation describes existing setup.
- Legacy documentation in `/legacy/docs/` provides reference material that can be updated, not rewritten from scratch.
- Stakeholder sign-off is verbal/written acknowledgement, not a formal system.

## Out of Scope

- New features or functionality (this is polish and documentation only).
- End-to-end browser tests with Playwright (future enhancement).
- Performance testing or load testing (Vercel handles scaling).
- Security penetration testing (basic security review only).
- Accessibility audit beyond automated checks.
- Video content for labs (placeholder acceptable).

## Clarifications

### Session 2025-12-10

- Q: Are there additional UI refinements beyond logo and countdown removal? → A: No, logo + countdown removal only; theme/lab pages are acceptable as-is from Starlight theme.
- Q: Where should documentation artifacts be created? → A: Create fresh documentation in `/docs/` folder at project root, then clean up all legacy files and unused code.
- Q: What test approach for unit and integration tests? → A: Focus on key email workflows (subscribe/unsubscribe) only; static content doesn't need tests. Establish testing patterns for future work.
