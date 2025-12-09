# Tasks: Production Release Preparation

**Input**: Design documents from `/specs/004-production-release/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Tests ARE required per FR-011 through FR-016 (23+ test cases covering critical API paths).

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, etc.)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, dev dependencies, and basic configuration

- [x] T001 [P] Install ESLint and related packages: `npm install -D eslint @eslint/js eslint-plugin-astro eslint-plugin-jsx-a11y typescript-eslint globals eslint-config-prettier`
- [x] T002 [P] Install Prettier and Astro plugin: `npm install -D prettier prettier-plugin-astro`
- [x] T003 [P] Install Vitest and testing libraries: `npm install -D vitest @testing-library/jest-dom happy-dom`
- [x] T004 Create ESLint flat config in /eslint.config.mjs per research.md Section 3
- [x] T005 Create Prettier config in /.prettierrc per research.md Section 4
- [x] T006 [P] Create EditorConfig in /.editorconfig per research.md Section 5
- [x] T007 Create Vitest config in /vitest.config.ts using Astro's getViteConfig() per research.md Section 1
- [x] T008 Create test setup file with mocks in /tests/setup.ts per research.md Section 2
- [x] T009 Add npm scripts to /package.json: lint, format, format:check, test, test:run, test:coverage, type-check

**Checkpoint**: All quality tools installed and configured. `npm run lint`, `npm run format:check`, `npm run type-check` should run (may show errors from existing code).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before ANY user story can be completed

**⚠️ CRITICAL**: Repository cleanup and security must complete before user story implementation

### Repository Cleanup (FR-001 to FR-006)

- [x] T010 Delete duplicate migration file: /supabase/migrations/20241209000001_create_email_tables 2.sql
- [x] T011 Remove .DS_Store files from repository and add to /.gitignore
- [x] T012 [P] Assess /research/ folder - remove if not production-relevant per plan.md (REMOVED)
- [x] T013 [P] Assess /company-context/ folder - remove if not course materials per plan.md (KEPT - business context)
- [x] T014 [P] Assess /lesson-modules/ folder - remove if not course materials per plan.md (KEPT - course templates)
- [x] T015 Update /.gitignore to prevent future accumulation: add .DS_Store, \*.log, .env.local, coverage/, .vercel/

### Security (FR-020 to FR-023)

- [x] T016 Apply RLS policies migration via Supabase MCP for subscribers table per data-model.md Section "RLS"
- [x] T017 Apply RLS policies migration via Supabase MCP for email_sends table per data-model.md Section "RLS"
- [x] T018 Run Supabase security advisor to verify zero warnings post-policy application
- [x] T019 Verify no hardcoded secrets in codebase - check all .ts files for API keys or credentials

### Code Quality Compliance (FR-010)

- [x] T020 Run `npm run lint` and fix all errors/warnings in existing codebase
- [x] T021 Run `npm run format` to auto-fix formatting across all files
- [x] T022 Run `npm run type-check` and fix any TypeScript errors

**Checkpoint**: Repository is clean, secure, and passes all linting/formatting. Foundation ready for user story implementation.

---

## Phase 3: User Story 1 - Senior Engineer Code Review (Priority: P1) 🎯 MVP

**Goal**: Provide professional-grade infrastructure demonstrating engineering rigour: automated testing, CI/CD, clean git history.

**Independent Test**: Clone repository, run `npm ci && npm run lint && npm run test:run && npm run type-check && npm run build` - all pass without errors.

### Test Infrastructure (FR-011 to FR-016)

- [x] T023 [P] [US1] Create subscribe endpoint tests in /tests/unit/subscribe.test.ts covering 8+ scenarios per plan.md "Test Coverage Requirements" (10 tests, all pass)
- [x] T024 [P] [US1] Create unsubscribe endpoint tests in /tests/unit/unsubscribe.test.ts covering 6+ scenarios per plan.md "Test Coverage Requirements" (8 tests, all pass)
- [x] T025 [P] [US1] Create email template tests in /tests/unit/email.test.ts covering 4+ scenarios per plan.md "Test Coverage Requirements" (8 tests, all pass)
- [x] T026 [US1] Verify all 18+ tests pass with `npm run test:run` (26/26 pass)

### CI/CD (FR-017 to FR-019)

- [x] T027 [US1] Create CI workflow in /.github/workflows/ci.yml per research.md Section 6
- [x] T028 [P] [US1] Create Dependabot config in /.github/dependabot.yml per research.md Section 7
- [x] T029 [US1] Verify CI workflow runs type-check, lint, format:check, test:run, build in correct order

### Git History (FR-038)

- [x] T030 [US1] Stage all setup/foundational changes and create atomic commit: "chore: add code quality tooling (ESLint, Prettier, EditorConfig)"
- [x] T031 [US1] Stage test files and create atomic commit: "test: add Vitest test suite with 23+ test cases"
- [x] T032 [US1] Stage CI files and create atomic commit: "ci: add GitHub Actions workflow and Dependabot"
- [x] T033 [US1] Stage cleanup changes and create atomic commit: "chore: repository cleanup and security hardening"

**Checkpoint**: User Story 1 complete. A senior engineer can clone, run quality checks, and all pass. CI pipeline functional.

---

## Phase 4: User Story 2 - Product Manager Feature Assessment (Priority: P1)

**Goal**: Comprehensive documentation explaining product purpose, features, and how to verify functionality.

**Independent Test**: Read README.md without accessing code - understand product purpose, target audience, and key features within 2 minutes.

### Technical Documentation (FR-024 to FR-027)

- [x] T034 [P] [US2] Write comprehensive README in /README.md with project overview, features, setup instructions, development commands per spec.md US2 acceptance criteria
- [x] T035 [P] [US2] Write CLAUDE.md context file in /CLAUDE.md with project-specific guidance for Claude Code development
- [x] T036 [P] [US2] Create architecture documentation in /docs/architecture.md explaining system components, data flow, API endpoints
- [x] T037 [US2] Document API endpoints in /docs/api.md with request/response formats (can reference contracts/api.md)

### UAT Documentation (FR-028 to FR-033)

- [x] T038 [US2] Create UAT test plan in /docs/uat/test-plan.md defining testing approach and scope
- [x] T039 [P] [US2] Write email signup test cases TC-001 to TC-005 in /docs/uat/test-cases-signup.md
- [x] T040 [P] [US2] Write unsubscribe test cases TC-006 to TC-010 in /docs/uat/test-cases-unsubscribe.md
- [x] T041 [P] [US2] Write lesson navigation test cases TC-011 to TC-015 in /docs/uat/test-cases-navigation.md
- [x] T042 [P] [US2] Write slash command test cases TC-016 to TC-020 in /docs/uat/test-cases-commands.md
- [x] T043 [P] [US2] Write responsive design test cases TC-021 to TC-025 in /docs/uat/test-cases-responsive.md

**Checkpoint**: User Story 2 complete. A PM can understand the product from README alone. UAT documentation ready for QA.

---

## Phase 5: User Story 3 - Repository Cleanliness Assessment (Priority: P2)

**Goal**: Clean, professional repository with no orphaned files, duplicates, or development artefacts.

**Independent Test**: List all files - no obsolete, duplicate, or temporary files exist.

_Note: Most cleanup tasks completed in Phase 2 Foundational. This phase verifies completion._

- [x] T044 [US3] Run `git status` and verify working directory is clean (all changes committed)
- [x] T045 [US3] Verify no files with " 2" or similar duplicate suffixes exist in repository
- [x] T046 [US3] Verify no orphaned documentation files from previous iterations
- [x] T047 [US3] Stage documentation changes and create atomic commit: "docs: add README, architecture, and UAT documentation"

**Checkpoint**: User Story 3 complete. Repository contains only production-relevant code and documentation.

---

## Phase 6: User Story 4 - Developer Onboarding (Priority: P2)

**Goal**: New developers can understand codebase and set up local environment within 10 minutes.

**Independent Test**: Fresh developer follows README instructions to run project locally within 10 minutes.

_Note: README written in US2. This phase verifies onboarding experience._

- [x] T048 [US4] Test README quick start guide by following instructions from fresh clone
- [x] T049 [US4] Verify README includes troubleshooting section for common build issues
- [x] T050 [US4] Update /specs/004-production-release/quickstart.md if any gaps found during testing
- [x] T051 [US4] Verify development scripts documented: lint, test, format, build, dev, preview

**Checkpoint**: User Story 4 complete. New developer onboarding verified.

---

## Phase 7: User Story 5 - QA Tester Verification (Priority: P3)

**Goal**: Detailed UAT test cases with clear steps, expected outcomes, and pass/fail criteria.

**Independent Test**: Execute UAT test cases manually and confirm all scenarios pass.

_Note: UAT documentation created in US2. This phase verifies test execution._

- [ ] T052 [US5] Execute TC-001 to TC-005 (email signup tests) manually and record results
- [ ] T053 [US5] Execute TC-006 to TC-010 (unsubscribe tests) manually and record results
- [ ] T054 [US5] Execute TC-011 to TC-015 (navigation tests) manually and record results
- [ ] T055 [US5] Execute TC-016 to TC-020 (slash command tests) manually and record results
- [ ] T056 [US5] Execute TC-021 to TC-025 (responsive design tests) manually and record results
- [ ] T057 [US5] Update any test cases that need clarification based on execution

**Checkpoint**: User Story 5 complete. All UAT test cases executed and verified.

---

## Phase 8: User Story 6 - Course Learner Self-Help (Priority: P3)

**Goal**: End-user reference section with troubleshooting, glossary, and FAQ accessible from main navigation.

**Independent Test**: Navigate to reference section and find answers to common questions.

### End-User Documentation (FR-034 to FR-037)

- [x] T058 [P] [US6] Create troubleshooting guide in /src/content/docs/reference/troubleshooting.mdx per research.md Section 9
- [x] T059 [P] [US6] Create glossary in /src/content/docs/reference/glossary.mdx with key terms used throughout course
- [x] T060 [P] [US6] Create FAQ in /src/content/docs/reference/faq.mdx with common questions about course structure

### Navigation Integration

- [x] T061 [US6] Add Reference section to sidebar in /astro.config.mjs per research.md Section 9
- [x] T062 [US6] Verify reference section accessible within 2 clicks from any course page

**Checkpoint**: User Story 6 complete. Learners can find self-help resources.

---

## Phase 9: Polish & Release

**Purpose**: Final verification, release tagging, and cross-cutting concerns

### Final Verification

- [x] T063 Run complete quality check: `npm run type-check && npm run lint && npm run format:check && npm run test:run && npm run build`
- [x] T064 Verify build completes within 2 minutes (completed in ~4 seconds)
- [x] T065 Verify test suite completes within 30 seconds (completed in 177ms)
- [x] T066 Run Supabase security advisor and confirm zero warnings

### Release (FR-039, FR-040)

- [x] T067 Stage end-user documentation and create atomic commit: "docs: add learner reference section (troubleshooting, glossary, FAQ)"
- [x] T068 Create final atomic commit: "chore: production release preparation complete"
- [ ] T069 Tag release as v1.0.0: `git tag -a v1.0.0 -m "First production release"`
- [ ] T070 Push all commits and tag to remote

### Deployment Verification

- [ ] T071 Verify Vercel deployment succeeds after merge to main
- [ ] T072 Verify production site loads correctly at coengineers.ai

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup           → No dependencies - start immediately
         ↓
Phase 2: Foundational    → Depends on Setup - BLOCKS all user stories
         ↓
    ┌────┴────┐
    ↓         ↓
Phase 3     Phase 4      → User Stories 1 & 2 (both P1) can run in parallel
(US1)       (US2)
    ↓         ↓
    └────┬────┘
         ↓
    ┌────┴────┐
    ↓         ↓
Phase 5     Phase 6      → User Stories 3 & 4 (both P2) can run in parallel
(US3)       (US4)
    ↓         ↓
    └────┬────┘
         ↓
    ┌────┴────┐
    ↓         ↓
Phase 7     Phase 8      → User Stories 5 & 6 (both P3) can run in parallel
(US5)       (US6)
    ↓         ↓
    └────┬────┘
         ↓
Phase 9: Polish          → Depends on all user stories complete
```

### User Story Dependencies

| Story | Priority | Can Start After        | Dependencies on Other Stories |
| ----- | -------- | ---------------------- | ----------------------------- |
| US1   | P1       | Foundational (Phase 2) | None - independent            |
| US2   | P1       | Foundational (Phase 2) | None - independent            |
| US3   | P2       | Foundational (Phase 2) | Verification of US2 cleanup   |
| US4   | P2       | US2 complete           | Depends on README from US2    |
| US5   | P3       | US2 complete           | Depends on UAT docs from US2  |
| US6   | P3       | Foundational (Phase 2) | None - independent            |

### Parallel Opportunities

**Phase 1 (all [P] tasks)**:

```
T001, T002, T003 → Install packages in parallel
T004, T005, T006, T007 → Config files in parallel (different files)
```

**Phase 2**:

```
T012, T013, T014 → Folder assessment in parallel
T016, T017 → RLS policies in parallel (different tables)
```

**Phase 3 (US1)**:

```
T023, T024, T025 → Test files in parallel (different files)
T027, T028 → CI configs in parallel (different files)
```

**Phase 4 (US2)**:

```
T034, T035, T036 → Tech docs in parallel (different files)
T039, T040, T041, T042, T043 → UAT test cases in parallel (different files)
```

**Phase 8 (US6)**:

```
T058, T059, T060 → Reference pages in parallel (different files)
```

---

## Parallel Example: User Story 1

```bash
# Launch all test file tasks together (different files):
Task: "Create subscribe endpoint tests in /tests/unit/subscribe.test.ts"
Task: "Create unsubscribe endpoint tests in /tests/unit/unsubscribe.test.ts"
Task: "Create email template tests in /tests/unit/email.test.ts"

# Launch CI config tasks together (different files):
Task: "Create CI workflow in /.github/workflows/ci.yml"
Task: "Create Dependabot config in /.github/dependabot.yml"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Run `npm run lint && npm run test:run && npm run build`
5. Deploy/demo with working CI pipeline

### Incremental Delivery

| Increment | What's Delivered                  | Cumulative Value        |
| --------- | --------------------------------- | ----------------------- |
| MVP       | Testing + CI/CD + Clean repo      | Engineering credibility |
| +US2      | All documentation                 | PM credibility          |
| +US3/US4  | Verified cleanliness + onboarding | Professional polish     |
| +US5/US6  | UAT verification + learner help   | Complete product        |

### Suggested Commit Sequence (7 atomic commits per FR-038)

1. `chore: add code quality tooling (ESLint, Prettier, EditorConfig)`
2. `test: add Vitest test suite with 23+ test cases`
3. `ci: add GitHub Actions workflow and Dependabot`
4. `chore: repository cleanup and security hardening`
5. `docs: add README, architecture, and UAT documentation`
6. `docs: add learner reference section (troubleshooting, glossary, FAQ)`
7. `chore: production release preparation complete`

---

## Notes

- All [P] tasks can run in parallel within their phase
- [US#] label maps task to specific user story for traceability
- British English throughout all documentation per Constitution
- Each user story independently completable and testable
- Commit after each logical group (per suggested sequence)
- Stop at any checkpoint to validate story independently
