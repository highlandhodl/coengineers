# Tasks: Email Capture System

**Input**: Design documents from `/specs/001-email-capture/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: No automated tests requested. Manual testing per quickstart.md.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Project type**: Astro web application
- **Source**: `src/` at repository root
- **API Routes**: `src/pages/api/`
- **Library Code**: `src/lib/`
- **Components**: `src/components/`
- **Content**: `src/content/docs/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, dependencies, and configuration

- [ ] T001 Install @supabase/supabase-js and resend packages via `npm install @supabase/supabase-js resend`
- [ ] T002 Add `output: 'hybrid'` to astro.config.mjs to enable API routes (per research.md Decision 1)
- [ ] T003 [P] Create src/lib/ directory for shared library code
- [ ] T004 [P] Create src/pages/api/ directory for API endpoints
- [ ] T005 [P] Create .env.example file documenting required environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, PUBLIC_SITE_URL)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create Supabase client helper in src/lib/supabase.ts with getSupabaseClient() function (per research.md Decision 2)
- [ ] T007 Create Resend email helper in src/lib/email.ts with sendWelcomeEmail() function stub (per research.md Decision 3)
- [ ] T008 Create database tables in Supabase: run SQL from data-model.md to create subscribers and email_sends tables
- [ ] T009 [P] Create TypeScript types in src/lib/types.ts for SubscribeRequest, SuccessResponse, ErrorResponse (per contracts/api.md)
- [ ] T010 Add environment variables to Vercel project settings (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, PUBLIC_SITE_URL)

**Checkpoint**: Foundation ready - Supabase connected, Resend configured, database schema created

---

## Phase 3: User Story 1 - Visitor Subscribes to Course Notifications (Priority: P1) 🎯 MVP

**Goal**: Visitors can enter their email in the signup form and get stored in the database with success feedback

**Independent Test**: Enter email on website → verify appears in Supabase subscribers table → see "You're in!" message

### Implementation for User Story 1

- [ ] T011 [US1] Create POST /api/subscribe endpoint in src/pages/api/subscribe.ts implementing contract from contracts/api.md
- [ ] T012 [US1] Implement email validation (RFC 5322 format) in subscribe endpoint
- [ ] T013 [US1] Implement upsert logic for subscribers table with onConflict: 'email' handling duplicates gracefully
- [ ] T014 [US1] Add source field capture from form data (default: 'website')
- [ ] T015 [US1] Update EmailSignup.astro component in src/components/EmailSignup.astro with loading/success/error states
- [ ] T016 [US1] Add client-side form validation in EmailSignup.astro script section
- [ ] T017 [US1] Implement progressive enhancement: form works without JS, enhanced UX with JS (per research.md Decision 4)
- [ ] T018 [US1] Add GDPR consent checkbox to EmailSignup.astro with label "I agree to receive email updates"
- [ ] T019 [US1] Add privacy notice text component below form: "We'll only email you about this course. View our [Privacy Policy](/privacy)."

**Checkpoint**: Email signup form captures emails to Supabase. Users see success message. GDPR consent collected.

---

## Phase 4: User Story 2 - Subscriber Receives Welcome Email (Priority: P2)

**Goal**: After subscribing, visitors receive a welcome email within 1 minute with useful links and unsubscribe option

**Independent Test**: Subscribe with real email → receive welcome email → verify subject, content, and links work

### Implementation for User Story 2

- [ ] T020 [US2] Create welcome email HTML template in src/lib/email.ts with British English copy (per spec.md FR-009)
- [ ] T021 [US2] Add links to welcome email: Install Claude Code, Follow on LinkedIn, Community (with coming soon note)
- [ ] T022 [US2] Add unsubscribe link to welcome email footer using subscriber's unsubscribe_token (per research.md Decision 5)
- [ ] T023 [US2] Implement sendWelcomeEmail() function in src/lib/email.ts calling Resend API
- [ ] T024 [US2] Integrate welcome email sending into subscribe endpoint (call after successful insert/resubscribe)
- [ ] T025 [US2] Record email send in email_sends table with resend_id for tracking
- [ ] T026 [US2] Add error handling: if email fails, subscriber still saved (don't show error to user)
- [ ] T027 [US2] Add privacy notice footer to welcome email: "You received this because you subscribed at coengineers.ai"

**Checkpoint**: New subscribers receive welcome email. Email contains all required links including unsubscribe.

---

## Phase 5: User Story 3 - Subscriber Unsubscribes (Priority: P3)

**Goal**: Subscribers can unsubscribe via one-click link in email, see confirmation, and receive no further emails

**Independent Test**: Click unsubscribe link from welcome email → see confirmation page → verify unsubscribed=true in database

### Implementation for User Story 3

- [ ] T028 [US3] Create GET /api/unsubscribe endpoint in src/pages/api/unsubscribe.ts implementing contract from contracts/api.md
- [ ] T029 [US3] Implement token validation (UUID format check)
- [ ] T030 [US3] Implement subscriber lookup by unsubscribe_token and update unsubscribed=true, unsubscribed_at
- [ ] T031 [US3] Create unsubscribed confirmation page at src/content/docs/unsubscribed.mdx with friendly message
- [ ] T032 [US3] Return HTML confirmation or redirect to /unsubscribed page on successful unsubscribe
- [ ] T033 [US3] Handle error cases: invalid token (400), token not found (404)
- [ ] T034 [US3] Update subscribe endpoint to handle resubscribe: if user was unsubscribed, reset status and send new welcome email

**Checkpoint**: One-click unsubscribe works. Confirmation displayed. Database updated correctly.

---

## Phase 6: User Story 4 - Community Page Shows Coming Soon (Priority: P3)

**Goal**: Visitors see "Coming Soon" message on community page with email signup to be notified when it launches

**Independent Test**: Navigate to /community → see coming soon message → see email signup form with community-specific messaging

### Implementation for User Story 4

- [ ] T035 [US4] Update src/content/docs/community.mdx with "Coming Soon" hero section
- [ ] T036 [US4] Add messaging explaining community launches after course starts (January 2026)
- [ ] T037 [US4] Add EmailSignup component with source="community-page" to capture signups from this page
- [ ] T038 [US4] Update EmailSignup to accept source prop and pass to API endpoint
- [ ] T039 [US4] Use British English and positive, anticipation-building copy (per constitution)

**Checkpoint**: Community page displays coming soon message with functional email signup.

---

## Phase 7: GDPR Compliance (Cross-Cutting)

**Purpose**: Legal compliance components for data protection (UK GDPR / EU GDPR)

- [ ] T040 [P] Create Privacy Policy page at src/content/docs/privacy.mdx explaining:
  - What data is collected (email address, subscription timestamp, source)
  - How data is used (email notifications about course)
  - Data retention (until unsubscribe or account deletion request)
  - Third parties (Supabase for storage, Resend for email delivery)
  - User rights (access, rectification, erasure, unsubscribe)
  - Contact information for data requests
- [ ] T041 [P] Add Privacy Policy link to site footer in astro.config.mjs sidebar or via custom footer component
- [ ] T042 Add link to Privacy Policy in welcome email footer
- [ ] T043 Update EmailSignup component to require consent checkbox before submission (prevent submit if unchecked)
- [ ] T044 [P] Create data export endpoint at src/pages/api/data-export.ts (returns subscriber's data as JSON for GDPR access requests) - OPTIONAL
- [ ] T045 [P] Create data deletion endpoint at src/pages/api/data-delete.ts (deletes subscriber record for GDPR erasure requests) - OPTIONAL

**Checkpoint**: Privacy Policy page exists. Consent captured on signup. Unsubscribe provides erasure mechanism.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and verification

- [ ] T046 [P] Add form state CSS styles to src/styles/custom.css (loading spinner, success checkmark, error state)
- [ ] T047 [P] Ensure EmailSignup component supports both light and dark mode (per spec.md FR-012)
- [ ] T048 Verify all user-facing copy uses British English (per constitution)
- [ ] T049 Run npm run build and fix any TypeScript/build errors
- [ ] T050 Manual testing: complete quickstart.md verification checklist
- [ ] T051 Test email signup flow end-to-end on localhost
- [ ] T052 Test unsubscribe flow end-to-end
- [ ] T053 Verify welcome email renders correctly on mobile (Litmus/Email on Acid or manual test)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - US1 can start immediately after Foundational
  - US2 depends on US1 (needs subscribe endpoint to trigger email)
  - US3 can start after Foundational (needs welcome email template from US2 for testing)
  - US4 can start after US1 (needs working EmailSignup component)
- **GDPR (Phase 7)**: Can start after Foundational, but should complete before launch
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

```
Foundational ──┬──→ US1 (P1) ──→ US2 (P2) ──→ US3 (P3) ──→ Polish
               │
               └──→ US4 (P3) ─────────────────────────────────┘
               │
               └──→ GDPR ─────────────────────────────────────┘
```

- **US1 (P1)**: Core signup - No dependencies on other stories
- **US2 (P2)**: Welcome email - Builds on US1's subscribe endpoint
- **US3 (P3)**: Unsubscribe - Needs unsubscribe link from US2's email template
- **US4 (P3)**: Community page - Can run in parallel with US2/US3, needs US1's EmailSignup

### Parallel Opportunities

**Setup Phase (can run in parallel):**
- T003, T004, T005 (directory and file creation)

**Foundational Phase (can run in parallel after T006-T008):**
- T009 (types) - independent file

**US1 Phase (within story):**
- T018, T019 (GDPR components) can run parallel to T015-T017

**GDPR Phase (all tasks can run in parallel):**
- T040, T041, T044, T045 - all independent pages/endpoints

**Polish Phase (can run in parallel):**
- T046, T047 (styling tasks) - independent of testing tasks

---

## Parallel Example: GDPR Components

```bash
# Launch all GDPR tasks together:
Task: "Create Privacy Policy page at src/content/docs/privacy.mdx"
Task: "Add Privacy Policy link to site footer"
Task: "Create data export endpoint at src/pages/api/data-export.ts"
Task: "Create data deletion endpoint at src/pages/api/data-delete.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup ✓
2. Complete Phase 2: Foundational ✓
3. Complete Phase 3: User Story 1 (email capture working)
4. **STOP and VALIDATE**: Test signup flow independently
5. Deploy if needed for early signups

### Full Feature (All Stories)

1. Setup + Foundational → Foundation ready
2. US1 (P1) → Core signup working → Can collect emails
3. US2 (P2) → Welcome email flowing → Better engagement
4. US3 (P3) + US4 (P3) → Run in parallel
5. GDPR (Phase 7) → Legal compliance
6. Polish (Phase 8) → Production ready

### Recommended Order

For a single developer working sequentially:

```
T001 → T002 → T003/T004/T005 (parallel) → T006 → T007 → T008 → T009/T010 (parallel)
→ T011 → T012 → T013 → T014 → T015 → T016 → T017 → T018 → T019
→ T020 → T021 → T022 → T023 → T024 → T025 → T026 → T027
→ T028 → T029 → T030 → T031 → T032 → T033 → T034
→ T035 → T036 → T037 → T038 → T039
→ T040/T041 (parallel) → T042 → T043 → T044/T045 (optional, parallel)
→ T046/T047 (parallel) → T048 → T049 → T050 → T051 → T052 → T053
```

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| Phase 1: Setup | T001-T005 | Dependencies, config, directories |
| Phase 2: Foundational | T006-T010 | Supabase, Resend, database, types |
| Phase 3: US1 (P1) | T011-T019 | Email subscription with GDPR consent |
| Phase 4: US2 (P2) | T020-T027 | Welcome email sending |
| Phase 5: US3 (P3) | T028-T034 | Unsubscribe flow |
| Phase 6: US4 (P3) | T035-T039 | Community coming soon page |
| Phase 7: GDPR | T040-T045 | Privacy policy, consent, data rights |
| Phase 8: Polish | T046-T053 | Styling, testing, verification |

**Total Tasks**: 53
**MVP Tasks (US1 only)**: 19 (T001-T019)
**Full Feature Tasks**: 53

---

## Notes

- All copy in British English (colour, organised, centre)
- Form has progressive enhancement (works without JS)
- Welcome email must have working unsubscribe link (legal requirement)
- Privacy Policy page is legally required before collecting emails
- GDPR consent checkbox required before form submission
- T044/T045 (data export/delete endpoints) are optional for MVP but recommended for full GDPR compliance
- Manual testing per quickstart.md - no automated tests
