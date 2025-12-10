# Tasks: Production Release

**Input**: Design documents from `/specs/004-production-release/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/api.yaml ✅

**Tests**: INCLUDED - User Story 2 explicitly requires comprehensive test suite.

**Organisation**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Exact file paths included in all task descriptions

---

## Phase 1: Setup (Test Infrastructure)

**Purpose**: Establish test infrastructure required for User Story 2

- [x] T001 Create test directory structure at `tests/` and `tests/unit/`
- [x] T002 [P] Create global test setup with Supabase mock in `tests/setup.ts`
- [x] T003 [P] Create Vitest configuration in `vitest.config.ts`
- [x] T004 Verify `npm run test:run` command executes without error (empty test suite)

**Checkpoint**: Test infrastructure ready for User Story 2 implementation

---

## Phase 2: Foundational (Quality Gate Verification)

**Purpose**: Verify existing quality gates pass before making changes

**⚠️ CRITICAL**: All gates must pass before proceeding to user stories

- [x] T005 [P] Run `npm run type-check` and verify zero errors
- [x] T006 [P] Run `npm run lint` and verify zero errors
- [x] T007 [P] Run `npm run format:check` and verify zero errors
- [x] T008 Run `npm run build` and verify successful completion

**Checkpoint**: Foundation verified - user story implementation can begin

---

## Phase 3: User Story 1 - UI Refinements (Priority: P1) 🎯 MVP

**Goal**: Visual polish for launch - text-only logo, no countdown timer

**Independent Test**: UX team visually inspects homepage on desktop and mobile, confirms:

- Logo displays as text-only "CoEngineers" without gear icon
- No countdown timer present on homepage
- Clean, professional appearance

### Implementation for User Story 1

- [x] T009 [P] [US1] Update logo to text-only in `src/assets/logo-dark.svg`
- [x] T010 [P] [US1] Update logo to text-only in `src/assets/logo-light.svg`
- [x] T011 [US1] Remove Countdown component usage from `src/content/docs/index.mdx`
- [x] T012 [US1] Run `npm run build` and verify homepage renders correctly
- [x] T013 [US1] Run `npm run dev` and visually verify logo and countdown removal at http://localhost:4321

**Checkpoint**: User Story 1 complete - site displays text-only logo, no countdown

---

## Phase 4: User Story 2 - Comprehensive Test Suite (Priority: P1)

**Goal**: Engineering confidence via 80%+ test coverage on API endpoints

**Independent Test**: Run `npm run test:run` and `npm run test:coverage`, verify all tests pass with 80%+ coverage on `src/pages/api/`

### Unit Tests for Subscribe Endpoint

- [x] T014 [P] [US2] Create test scaffold for subscribe endpoint in `tests/unit/subscribe.test.ts`
- [x] T015 [US2] Add test case: valid email creates new subscriber in `tests/unit/subscribe.test.ts`
- [x] T016 [US2] Add test case: invalid email returns 400 error in `tests/unit/subscribe.test.ts`
- [x] T017 [US2] Add test case: duplicate email returns 200 "already subscribed" in `tests/unit/subscribe.test.ts`
- [x] T018 [US2] Add test case: resubscribe (previously unsubscribed) updates status in `tests/unit/subscribe.test.ts`
- [x] T019 [US2] Add test case: server error returns 500 response in `tests/unit/subscribe.test.ts`

### Unit Tests for Unsubscribe Endpoint

- [x] T020 [P] [US2] Create test scaffold for unsubscribe endpoint in `tests/unit/unsubscribe.test.ts`
- [x] T021 [US2] Add test case: valid token unsubscribes user in `tests/unit/unsubscribe.test.ts`
- [x] T022 [US2] Add test case: invalid token format returns 400 error in `tests/unit/unsubscribe.test.ts`
- [x] T023 [US2] Add test case: missing token returns 400 error in `tests/unit/unsubscribe.test.ts`
- [x] T024 [US2] Add test case: unknown token returns 404 error in `tests/unit/unsubscribe.test.ts`
- [x] T025 [US2] Add test case: already unsubscribed returns success in `tests/unit/unsubscribe.test.ts`

### Unit Tests for Email Templates

- [x] T026 [P] [US2] Create test scaffold for email templates in `tests/unit/email.test.ts`
- [x] T027 [US2] Add test case: welcome email contains British English content in `tests/unit/email.test.ts`
- [x] T028 [US2] Add test case: welcome email contains unsubscribe link in `tests/unit/email.test.ts`
- [x] T029 [US2] Add test case: welcome email contains correct subject line in `tests/unit/email.test.ts`

### Test Suite Verification

- [x] T030 [US2] Run `npm run test:run` and verify all tests pass
- [x] T031 [US2] Run `npm run test:coverage` and verify 80%+ coverage on API endpoints
- [x] T032 [US2] Run all quality gates: `npm run type-check && npm run lint && npm run format:check && npm run build`

**Checkpoint**: User Story 2 complete - all tests pass with 80%+ coverage

---

## Phase 5: User Story 3 - Documentation for Stakeholders (Priority: P1)

**Goal**: Complete documentation packages for UX, Engineering, and PM/Board teams

**Independent Test**: Each stakeholder reviews their documentation package and confirms it meets requirements

### Documentation Structure Setup

- [x] T033 [P] [US3] Create documentation directory structure at `docs/ux/`, `docs/engineering/`, `docs/product/`, `docs/uat/`
- [x] T034 [P] [US3] Create UX documentation index in `docs/ux/README.md`
- [x] T035 [P] [US3] Create Engineering documentation index in `docs/engineering/README.md`
- [x] T036 [P] [US3] Create Product documentation index in `docs/product/README.md`

### UX Team Documentation

- [x] T037 [US3] Create user journeys documentation covering homepage, subscription, navigation, and unsubscribe flows in `docs/ux/user-journeys.md`

### Engineering Documentation

- [x] T038 [P] [US3] Create architecture documentation with system diagram in `docs/engineering/architecture.md`
- [x] T039 [P] [US3] Create API reference documentation with request/response examples in `docs/engineering/api.md`
- [x] T040 [P] [US3] Create deployment guide with Vercel setup and environment variables in `docs/engineering/deployment.md`
- [x] T041 [P] [US3] Create troubleshooting guide covering build, API, and email issues in `docs/engineering/troubleshooting.md`

### PM/Board Documentation

- [x] T042 [P] [US3] Create feature summary documenting 001-course-restructure and 004-production-release work in `docs/product/feature-summary.md`
- [x] T043 [P] [US3] Create decisions log capturing key architectural and design decisions in `docs/product/decisions.md`
- [x] T044 [P] [US3] Create roadmap outlining future enhancements and next steps in `docs/product/roadmap.md`

**Checkpoint**: User Story 3 complete - all three stakeholder groups have complete documentation packages

---

## Phase 6: User Story 4 - UAT Sign-off (Priority: P2)

**Goal**: Formal evidence that system meets requirements via structured UAT

**Independent Test**: Execute all P1 test cases, record results, confirm 100% P1 pass rate

### UAT Test Plan

- [x] T045 [US4] Create UAT test plan with P1 and P2 test cases in `docs/uat/test-plan.md`
- [x] T046 [US4] Execute P1 test cases for User Story 1 (UI refinements)
- [x] T047 [US4] Execute P1 test cases for User Story 2 (test suite)
- [x] T048 [US4] Execute P1 test cases for User Story 3 (documentation completeness)
- [x] T049 [US4] Create test results log with pass/fail status in `docs/uat/test-results.md`
- [x] T050 [US4] Verify 100% P1 pass rate before launch sign-off

**Checkpoint**: User Story 4 complete - UAT executed with documented results

---

## Phase 7: Polish & Cleanup

**Purpose**: Final cleanup and verification before merge

- [x] T051 [P] Delete `/legacy/` folder (verify no references exist first)
- [x] T052 [P] Verify no unused imports or dead code in modified files
- [x] T053 Run final quality gate verification: `npm run type-check && npm run lint && npm run format:check && npm run build && npm run test:run`
- [x] T054 Run quickstart.md validation commands and verify all pass
- [x] T055 Create PR and request stakeholder sign-off

**Checkpoint**: Feature complete - ready for merge to main

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup ─────────────────────────┐
                                        │
Phase 2: Foundational (quality gates) ──┼─► BLOCKS all user stories
                                        │
        ┌───────────────────────────────┘
        │
        ├──► Phase 3: US1 (UI Refinements) ──┐
        │                                    │
        ├──► Phase 4: US2 (Test Suite) ──────┤
        │                                    │
        └──► Phase 5: US3 (Documentation) ───┤
                                             │
        ┌────────────────────────────────────┘
        │
        └──► Phase 6: US4 (UAT) ── depends on US1, US2, US3
                    │
                    └──► Phase 7: Polish & Cleanup
```

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **US2 (P1)**: Can start after Phase 1 (test setup) - No dependencies on other stories
- **US3 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **US4 (P2)**: MUST wait for US1, US2, US3 to complete (UAT validates all prior work)

### Within Each User Story

1. Structure/scaffold tasks first
2. Core implementation tasks
3. Verification tasks last

### Parallel Opportunities

**Phase 1 (Setup)**:

```bash
# Can run in parallel:
T002: Create tests/setup.ts
T003: Create vitest.config.ts
```

**Phase 2 (Foundational)**:

```bash
# Can run in parallel:
T005: npm run type-check
T006: npm run lint
T007: npm run format:check
```

**Phase 3 (US1 - UI)**:

```bash
# Can run in parallel:
T009: Update logo-dark.svg
T010: Update logo-light.svg
```

**Phase 4 (US2 - Tests)**:

```bash
# Can run in parallel (test scaffolds):
T014: Create subscribe.test.ts scaffold
T020: Create unsubscribe.test.ts scaffold
T026: Create email.test.ts scaffold
```

**Phase 5 (US3 - Documentation)**:

```bash
# Can run in parallel (directory setup):
T033: Create directory structure
T034-T036: Create README files

# Can run in parallel (Engineering docs):
T038: architecture.md
T039: api.md
T040: deployment.md
T041: troubleshooting.md

# Can run in parallel (Product docs):
T042: feature-summary.md
T043: decisions.md
T044: roadmap.md
```

**Phase 7 (Cleanup)**:

```bash
# Can run in parallel:
T051: Delete legacy/
T052: Verify no dead code
```

---

## Implementation Strategy

### MVP First (User Story 1 + User Story 2)

1. Complete Phase 1: Setup (test infrastructure)
2. Complete Phase 2: Foundational (quality gates)
3. Complete Phase 3: US1 (visual polish for launch readiness)
4. Complete Phase 4: US2 (engineering confidence)
5. **STOP and VALIDATE**: Site looks professional, tests pass, ready for soft launch

### Full Delivery

1. MVP above
2. Add Phase 5: US3 (stakeholder documentation)
3. Add Phase 6: US4 (formal UAT)
4. Complete Phase 7: Polish & Cleanup
5. Merge to main

### Parallel Team Strategy

With multiple developers after Phase 2:

- **Developer A**: User Story 1 (UI refinements) → Quick wins
- **Developer B**: User Story 2 (test suite) → Engineering confidence
- **Developer C**: User Story 3 (documentation) → Stakeholder delivery

User Story 4 (UAT) requires waiting for A, B, and C to complete.

---

## Summary

| Phase | Story        | Task Count | Parallel Tasks | Critical Path |
| ----- | ------------ | ---------- | -------------- | ------------- |
| 1     | Setup        | 4          | 2              | Yes           |
| 2     | Foundational | 4          | 3              | Yes           |
| 3     | US1          | 5          | 2              | No            |
| 4     | US2          | 19         | 3              | No            |
| 5     | US3          | 12         | 11             | No            |
| 6     | US4          | 6          | 0              | Yes           |
| 7     | Polish       | 5          | 2              | Yes           |

**Total Tasks**: 55
**Parallel Opportunities**: 23 tasks can run in parallel
**Estimated Critical Path**: Setup → Foundational → (US1 ‖ US2 ‖ US3) → US4 → Polish

---

## Notes

- All tests use mocks for Supabase and Resend (no real credentials needed)
- British English required throughout all documentation
- Logo SVGs use Inter font family for consistency
- Delete legacy/ folder only after docs/uat/test-results.md confirms all content migrated
- Commit after each logical task group
- Each checkpoint represents a deliverable increment
