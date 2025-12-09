# Tasks: Immersive Learning System

**Input**: Design documents from `/specs/003-immersive-learning/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md
**Tests**: Not requested - no test tasks included
**Organisation**: Tasks grouped by user story for independent implementation

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1-US5)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Project Infrastructure)

**Purpose**: Create foundational structure and configuration for the immersive learning system

- [x] T001 Create lesson-modules folder structure at repository root: `lesson-modules/week-1/`, `lesson-modules/week-2/`, `lesson-modules/week-3/`, `lesson-modules/week-4/`, `lesson-modules/bonus/`
- [x] T002 [P] Create company-context folder at repository root: `company-context/`
- [x] T003 [P] Create `.claude/course-structure.json` with complete course navigation schema per data-model.md
- [x] T004 [P] Create `.claude/SCRIPT_INSTRUCTIONS.md` with Say/Check/Action interpretation rules per research.md

**Checkpoint**: ✅ Folder structure and configuration files exist

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story content can be created

**CRITICAL**: No lesson content can be created until this phase is complete

- [x] T005 Populate `.claude/course-structure.json` with all 31 days metadata (id, title, slug, path, command, description, estimatedMinutes) per data-model.md schema
- [x] T006 Write complete `.claude/SCRIPT_INSTRUCTIONS.md` including:
  - Critical rules for script interpretation
  - No fourth-wall breaking examples
  - Say/Check/Action block semantics
  - Dynamic variables system ({dayId}, {weekId}, {nextCommand}, {nextDayTitle}, etc.)
  - Conditional blocks ({ifFirstInCourse:}, {ifLastInCourse:}, {ifFirstInWeek:}, {ifLastInWeek:})
  - British English requirements
  - Error handling guidance

**Checkpoint**: ✅ Foundation ready - lesson content creation can now begin

---

## Phase 3: User Story 1 - Complete a Guided Lesson (Priority: P1)

**Goal**: Learners run slash commands and experience fully guided, interactive lessons with Say/Check/Action teaching flow

**Independent Test**: Run `/w1.d1` and verify Claude delivers scripted content, waits at checkpoints, and executes actions in sequence without meta-commentary

### Day Folder Creation for User Story 1

- [x] T007 [P] [US1] Create `lesson-modules/week-1/day-1-first-conversation/` folder
- [x] T008 [P] [US1] Create `lesson-modules/week-1/day-2-your-digital-home/` folder
- [x] T009 [P] [US1] Create `lesson-modules/week-1/day-3-project-memory/` folder
- [x] T010 [P] [US1] Create `lesson-modules/week-1/day-4-template-factory/` folder
- [x] T011 [P] [US1] Create `lesson-modules/week-1/day-5-the-daily-note/` folder
- [x] T012 [P] [US1] Create `lesson-modules/week-1/day-6-your-first-slash-command/` folder
- [x] T013 [P] [US1] Create `lesson-modules/week-1/day-7-week-1-review/` folder
- [x] T014 [P] [US1] Create `lesson-modules/week-2/day-8-meeting-tamer/` folder
- [x] T015 [P] [US1] Create `lesson-modules/week-2/day-9-voice-to-text/` folder
- [x] T016 [P] [US1] Create `lesson-modules/week-2/day-10-youtube-brain/` folder
- [x] T017 [P] [US1] Create `lesson-modules/week-2/day-11-pdf-crusher/` folder
- [x] T018 [P] [US1] Create `lesson-modules/week-2/day-12-web-archiver/` folder
- [x] T019 [P] [US1] Create `lesson-modules/week-2/day-13-email-processor/` folder
- [x] T020 [P] [US1] Create `lesson-modules/week-2/day-14-week-2-review/` folder
- [x] T021 [P] [US1] Create `lesson-modules/week-3/day-15-presentation-builder/` folder
- [x] T022 [P] [US1] Create `lesson-modules/week-3/day-16-image-prompter/` folder
- [x] T023 [P] [US1] Create `lesson-modules/week-3/day-17-audio-script-writer/` folder
- [x] T024 [P] [US1] Create `lesson-modules/week-3/day-18-diagram-generator/` folder
- [x] T025 [P] [US1] Create `lesson-modules/week-3/day-19-social-thread-maker/` folder
- [x] T026 [P] [US1] Create `lesson-modules/week-3/day-20-video-brief-creator/` folder
- [x] T027 [P] [US1] Create `lesson-modules/week-3/day-21-week-3-review/` folder
- [x] T028 [P] [US1] Create `lesson-modules/week-4/day-22-the-product-idea/` folder
- [x] T029 [P] [US1] Create `lesson-modules/week-4/day-23-the-product-backlog/` folder
- [x] T030 [P] [US1] Create `lesson-modules/week-4/day-24-the-user-story/` folder
- [x] T031 [P] [US1] Create `lesson-modules/week-4/day-25-code-the-story/` folder
- [x] T032 [P] [US1] Create `lesson-modules/week-4/day-26-test-the-story/` folder
- [x] T033 [P] [US1] Create `lesson-modules/week-4/day-27-document-the-story/` folder
- [x] T034 [P] [US1] Create `lesson-modules/week-4/day-28-ship-it/` folder
- [x] T035 [P] [US1] Create `lesson-modules/bonus/day-29-bmad-method/` folder
- [x] T036 [P] [US1] Create `lesson-modules/bonus/day-30-prp-framework/` folder
- [x] T037 [P] [US1] Create `lesson-modules/bonus/day-31-ship-it/` folder

### Teaching Scripts (CLAUDE.md) for Week 1

- [x] T038 [US1] Write `lesson-modules/week-1/day-1-first-conversation/CLAUDE.md` teaching script with minimum 3 Check points, Say/Check/Action blocks, learning objectives, success criteria, Q&A section per quickstart.md template
- [x] T039 [US1] Write `lesson-modules/week-1/day-2-your-digital-home/CLAUDE.md` teaching script
- [x] T040 [US1] Write `lesson-modules/week-1/day-3-project-memory/CLAUDE.md` teaching script
- [x] T041 [US1] Write `lesson-modules/week-1/day-4-template-factory/CLAUDE.md` teaching script
- [x] T042 [US1] Write `lesson-modules/week-1/day-5-the-daily-note/CLAUDE.md` teaching script
- [x] T043 [US1] Write `lesson-modules/week-1/day-6-your-first-slash-command/CLAUDE.md` teaching script
- [x] T044 [US1] Write `lesson-modules/week-1/day-7-week-1-review/CLAUDE.md` teaching script with week completion celebration

### Teaching Scripts (CLAUDE.md) for Week 2

- [x] T045 [US1] Write `lesson-modules/week-2/day-8-meeting-tamer/CLAUDE.md` teaching script
- [x] T046 [US1] Write `lesson-modules/week-2/day-9-voice-to-text/CLAUDE.md` teaching script
- [x] T047 [US1] Write `lesson-modules/week-2/day-10-youtube-brain/CLAUDE.md` teaching script
- [x] T048 [US1] Write `lesson-modules/week-2/day-11-pdf-crusher/CLAUDE.md` teaching script
- [x] T049 [US1] Write `lesson-modules/week-2/day-12-web-archiver/CLAUDE.md` teaching script
- [x] T050 [US1] Write `lesson-modules/week-2/day-13-email-processor/CLAUDE.md` teaching script
- [x] T051 [US1] Write `lesson-modules/week-2/day-14-week-2-review/CLAUDE.md` teaching script with week completion celebration

### Teaching Scripts (CLAUDE.md) for Week 3

- [x] T052 [US1] Write `lesson-modules/week-3/day-15-presentation-builder/CLAUDE.md` teaching script
- [x] T053 [US1] Write `lesson-modules/week-3/day-16-image-prompter/CLAUDE.md` teaching script
- [x] T054 [US1] Write `lesson-modules/week-3/day-17-audio-script-writer/CLAUDE.md` teaching script
- [x] T055 [US1] Write `lesson-modules/week-3/day-18-diagram-generator/CLAUDE.md` teaching script
- [x] T056 [US1] Write `lesson-modules/week-3/day-19-social-thread-maker/CLAUDE.md` teaching script
- [x] T057 [US1] Write `lesson-modules/week-3/day-20-video-brief-creator/CLAUDE.md` teaching script
- [x] T058 [US1] Write `lesson-modules/week-3/day-21-week-3-review/CLAUDE.md` teaching script with week completion celebration

### Teaching Scripts (CLAUDE.md) for Week 4

- [x] T059 [US1] Write `lesson-modules/week-4/day-22-the-product-idea/CLAUDE.md` teaching script
- [x] T060 [US1] Write `lesson-modules/week-4/day-23-the-product-backlog/CLAUDE.md` teaching script
- [x] T061 [US1] Write `lesson-modules/week-4/day-24-the-user-story/CLAUDE.md` teaching script
- [x] T062 [US1] Write `lesson-modules/week-4/day-25-code-the-story/CLAUDE.md` teaching script
- [x] T063 [US1] Write `lesson-modules/week-4/day-26-test-the-story/CLAUDE.md` teaching script
- [x] T064 [US1] Write `lesson-modules/week-4/day-27-document-the-story/CLAUDE.md` teaching script
- [x] T065 [US1] Write `lesson-modules/week-4/day-28-ship-it/CLAUDE.md` teaching script with week completion celebration

### Teaching Scripts (CLAUDE.md) for Bonus Week

- [x] T066 [US1] Write `lesson-modules/bonus/day-29-bmad-method/CLAUDE.md` teaching script
- [x] T067 [US1] Write `lesson-modules/bonus/day-30-prp-framework/CLAUDE.md` teaching script
- [x] T068 [US1] Write `lesson-modules/bonus/day-31-ship-it/CLAUDE.md` teaching script with course completion celebration and {ifLastInCourse:} conditional

### Refactor Slash Commands to Thin Launchers

- [x] T069 [US1] Refactor `.claude/commands/w1.d1.md` to thin launcher pattern per data-model.md schema (parse day ID, read course-structure.json, load CLAUDE.md, follow SCRIPT_INSTRUCTIONS.md)
- [x] T070 [P] [US1] Refactor `.claude/commands/w1.d2.md` to thin launcher pattern
- [x] T071 [P] [US1] Refactor `.claude/commands/w1.d3.md` to thin launcher pattern
- [x] T072 [P] [US1] Refactor `.claude/commands/w1.d4.md` to thin launcher pattern
- [x] T073 [P] [US1] Refactor `.claude/commands/w1.d5.md` to thin launcher pattern
- [x] T074 [P] [US1] Refactor `.claude/commands/w1.d6.md` to thin launcher pattern
- [x] T075 [P] [US1] Refactor `.claude/commands/w1.d7.md` to thin launcher pattern
- [x] T076 [P] [US1] Refactor `.claude/commands/w2.d8.md` to thin launcher pattern
- [x] T077 [P] [US1] Refactor `.claude/commands/w2.d9.md` to thin launcher pattern
- [x] T078 [P] [US1] Refactor `.claude/commands/w2.d10.md` to thin launcher pattern
- [x] T079 [P] [US1] Refactor `.claude/commands/w2.d11.md` to thin launcher pattern
- [x] T080 [P] [US1] Refactor `.claude/commands/w2.d12.md` to thin launcher pattern
- [x] T081 [P] [US1] Refactor `.claude/commands/w2.d13.md` to thin launcher pattern
- [x] T082 [P] [US1] Refactor `.claude/commands/w2.d14.md` to thin launcher pattern
- [x] T083 [P] [US1] Refactor `.claude/commands/w3.d15.md` to thin launcher pattern
- [x] T084 [P] [US1] Refactor `.claude/commands/w3.d16.md` to thin launcher pattern
- [x] T085 [P] [US1] Refactor `.claude/commands/w3.d17.md` to thin launcher pattern
- [x] T086 [P] [US1] Refactor `.claude/commands/w3.d18.md` to thin launcher pattern
- [x] T087 [P] [US1] Refactor `.claude/commands/w3.d19.md` to thin launcher pattern
- [x] T088 [P] [US1] Refactor `.claude/commands/w3.d20.md` to thin launcher pattern
- [x] T089 [P] [US1] Refactor `.claude/commands/w3.d21.md` to thin launcher pattern
- [x] T090 [P] [US1] Refactor `.claude/commands/w4.d22.md` to thin launcher pattern
- [x] T091 [P] [US1] Refactor `.claude/commands/w4.d23.md` to thin launcher pattern
- [x] T092 [P] [US1] Refactor `.claude/commands/w4.d24.md` to thin launcher pattern
- [x] T093 [P] [US1] Refactor `.claude/commands/w4.d25.md` to thin launcher pattern
- [x] T094 [P] [US1] Refactor `.claude/commands/w4.d26.md` to thin launcher pattern
- [x] T095 [P] [US1] Refactor `.claude/commands/w4.d27.md` to thin launcher pattern
- [x] T096 [P] [US1] Refactor `.claude/commands/w4.d28.md` to thin launcher pattern
- [x] T097 [P] [US1] Refactor `.claude/commands/bonus.d29.md` to thin launcher pattern
- [x] T098 [P] [US1] Refactor `.claude/commands/bonus.d30.md` to thin launcher pattern
- [x] T099 [P] [US1] Refactor `.claude/commands/bonus.d31.md` to thin launcher pattern

**Checkpoint**: ✅ User Story 1 complete - all teaching scripts exist and slash commands are refactored to thin launchers. Test by running `/w1.d1`.

---

## Phase 4: User Story 2 - Realistic Supporting Materials (Priority: P1)

**Goal**: Learners work with realistic PM materials (meeting notes, interviews, product docs) that feel like actual work documents

**Independent Test**: Verify each lesson folder contains appropriate supporting materials that Claude references during teaching

### Week 1 Supporting Materials (Setup/Templates)

- [x] T100 [P] [US2] Create `lesson-modules/week-1/day-1-first-conversation/learning-log-template.md` - empty template for learner's observations
- [x] T101 [P] [US2] Create `lesson-modules/week-1/day-2-your-digital-home/project-scaffold-example.md` - example folder structure
- [x] T102 [P] [US2] Create `lesson-modules/week-1/day-3-project-memory/example-claude-md.md` - example CLAUDE.md file
- [ ] T103 [P] [US2] Create `lesson-modules/week-1/day-4-template-factory/template-examples/` folder with 3 sample templates
- [x] T104 [P] [US2] Create `lesson-modules/week-1/day-5-the-daily-note/daily-note-template.md` - daily note template
- [x] T105 [P] [US2] Create `lesson-modules/week-1/day-6-your-first-slash-command/example-slash-command.md` - example command file

### Week 2 Supporting Materials (Content Processing - Heavy Materials)

- [x] T106 [P] [US2] Create `lesson-modules/week-2/day-8-meeting-tamer/meeting-notes-raw-1.md` - messy meeting notes with typos, abbreviations
- [x] T107 [P] [US2] Create `lesson-modules/week-2/day-8-meeting-tamer/meeting-notes-raw-2.md` - different meeting, different style
- [x] T108 [P] [US2] Create `lesson-modules/week-2/day-8-meeting-tamer/meeting-notes-raw-3.md` - third meeting for variety
- [x] T109 [P] [US2] Create `lesson-modules/week-2/day-9-voice-to-text/voice-memo-transcript-1.md` - raw transcript with "ums" and "uhs"
- [x] T110 [P] [US2] Create `lesson-modules/week-2/day-9-voice-to-text/voice-memo-transcript-2.md` - second voice memo transcript
- [x] T111 [P] [US2] Create `lesson-modules/week-2/day-10-youtube-brain/youtube-transcript-sample.md` - sample YouTube transcript to analyse
- [x] T112 [P] [US2] Create `lesson-modules/week-2/day-11-pdf-crusher/sample-report.md` - simulated PDF content (text version)
- [x] T113 [P] [US2] Create `lesson-modules/week-2/day-12-web-archiver/web-page-content-sample.md` - sample web page content
- [x] T114 [P] [US2] Create `lesson-modules/week-2/day-13-email-processor/email-thread-sample.md` - long email thread for processing
- [x] T115 [P] [US2] Create `lesson-modules/week-2/day-13-email-processor/email-dump-sample.md` - multiple unrelated emails

### Week 3 Supporting Materials (Creative Outputs - Briefs)

- [x] T116 [P] [US2] Create `lesson-modules/week-3/day-15-presentation-builder/presentation-brief.md` - requirements for presentation
- [x] T117 [P] [US2] Create `lesson-modules/week-3/day-15-presentation-builder/presentation-content-notes.md` - raw content to structure
- [x] T118 [P] [US2] Create `lesson-modules/week-3/day-16-image-prompter/image-brief.md` - requirements for image generation
- [x] T119 [P] [US2] Create `lesson-modules/week-3/day-17-audio-script-writer/audio-brief.md` - requirements for audio script
- [x] T120 [P] [US2] Create `lesson-modules/week-3/day-18-diagram-generator/diagram-requirements.md` - what to diagram
- [x] T121 [P] [US2] Create `lesson-modules/week-3/day-19-social-thread-maker/social-content-brief.md` - content to turn into threads
- [x] T122 [P] [US2] Create `lesson-modules/week-3/day-20-video-brief-creator/video-concept-notes.md` - raw video ideas

### Week 4 Supporting Materials (Building Software - Templates)

- [x] T123 [P] [US2] Create `lesson-modules/week-4/day-22-the-product-idea/prp-template.md` - Product Requirements Prompt template
- [x] T124 [P] [US2] Create `lesson-modules/week-4/day-22-the-product-idea/example-prp-filled.md` - filled example PRP
- [x] T125 [P] [US2] Create `lesson-modules/week-4/day-23-the-product-backlog/backlog-template.md` - product backlog template
- [x] T126 [P] [US2] Create `lesson-modules/week-4/day-24-the-user-story/user-story-template.md` - user story template with acceptance criteria
- [x] T127 [P] [US2] Create `lesson-modules/week-4/day-25-code-the-story/coding-guidance.md` - guidelines for coding with Claude
- [x] T128 [P] [US2] Create `lesson-modules/week-4/day-26-test-the-story/test-template.md` - test documentation template
- [x] T129 [P] [US2] Create `lesson-modules/week-4/day-27-document-the-story/readme-template.md` - README template
- [x] T130 [P] [US2] Create `lesson-modules/week-4/day-28-ship-it/deployment-checklist.md` - deployment checklist

### Bonus Week Supporting Materials

- [x] T131 [P] [US2] Create `lesson-modules/bonus/day-29-bmad-method/bmad-template.md` - BMAD method template
- [x] T132 [P] [US2] Create `lesson-modules/bonus/day-30-prp-framework/advanced-prp-template.md` - advanced PRP template
- [x] T133 [P] [US2] Create `lesson-modules/bonus/day-31-ship-it/capstone-project-brief.md` - comprehensive capstone brief

**Checkpoint**: ✅ User Story 2 complete - all lesson folders have appropriate supporting materials. Verify @file references in CLAUDE.md scripts resolve correctly.

---

## Phase 5: User Story 3 - Navigate Course Progression (Priority: P2)

**Goal**: Learners complete lessons and receive clear guidance on what's next with dynamic navigation that works regardless of course reordering

**Independent Test**: Complete any lesson and verify outro correctly references next lesson using dynamic variables resolved from course-structure.json

### Navigation Implementation

- [ ] T134 [US3] Update all Week 1 CLAUDE.md files to use dynamic navigation variables ({nextCommand}, {nextDayTitle}, {ifNotLastInCourse:}, etc.) instead of hardcoded references
- [ ] T135 [US3] Update all Week 2 CLAUDE.md files to use dynamic navigation variables
- [ ] T136 [US3] Update all Week 3 CLAUDE.md files to use dynamic navigation variables
- [ ] T137 [US3] Update all Week 4 CLAUDE.md files to use dynamic navigation variables
- [ ] T138 [US3] Update all Bonus CLAUDE.md files to use dynamic navigation variables
- [ ] T139 [US3] Add special week-completion messaging to day 7, 14, 21, 28 CLAUDE.md files using {ifLastInWeek:} conditional
- [ ] T140 [US3] Add course-completion messaging to day 31 CLAUDE.md using {ifLastInCourse:} conditional
- [ ] T141 [US3] Test navigation flow by simulating course-structure.json reorder - verify references update automatically

**Checkpoint**: User Story 3 complete - all navigation uses dynamic variables and works regardless of lesson reordering

---

## Phase 6: User Story 4 - Understand Company Context (Priority: P2)

**Goal**: Learners understand and reference the fictional company (CoEngine) throughout all lessons, creating a cohesive narrative

**Independent Test**: Verify company context files exist and are referenced in teaching scripts where appropriate

### Company Context Files

- [x] T142 [P] [US4] Create `company-context/COMPANY.md` with CoEngine overview per research.md (Founded 2024, Seed $3M, 15 employees, Claude Code productivity plugins)
- [x] T143 [P] [US4] Create `company-context/PRODUCT.md` with CoEngine product details (features, roadmap, metrics, tech stack)
- [x] T144 [P] [US4] Create `company-context/PERSONAS.md` with 3 user personas per research.md:
  - Maya (Power User, Senior PM)
  - Tom (Newcomer, Marketing Manager)
  - Sara (Technical, Data Analyst)
- [x] T145 [P] [US4] Create `company-context/COMPETITIVE.md` with competitive landscape (other AI productivity tools)

### Company Context Integration

- [ ] T146 [US4] Update Week 1 Day 1 CLAUDE.md to introduce CoEngine company and learner's role
- [ ] T147 [US4] Update Week 2 CLAUDE.md files to reference CoEngine context where relevant (meeting notes from CoEngine meetings)
- [ ] T148 [US4] Update Week 3 CLAUDE.md files to reference CoEngine context (presentations for CoEngine, etc.)
- [ ] T149 [US4] Update Week 4 CLAUDE.md files to reference CoEngine context (building CoEngine features)
- [ ] T150 [US4] Ensure persona references are consistent across all CLAUDE.md files that mention users

**Checkpoint**: User Story 4 complete - CoEngine context is established and consistently referenced throughout course

---

## Phase 7: User Story 5 - Communication Styles (Priority: P3)

**Goal**: Learners can create and reuse communication style templates for consistent output formatting

**Independent Test**: Create a style template once and verify it applies correctly to multiple outputs

### Communication Styles

- [x] T151 [P] [US5] Create `company-context/communication-styles/slack-style.md` - Slack message formatting guidelines
- [x] T152 [P] [US5] Create `company-context/communication-styles/email-style.md` - Email formatting guidelines
- [x] T153 [P] [US5] Create `company-context/communication-styles/documentation-style.md` - Documentation formatting guidelines
- [ ] T154 [US5] Update relevant CLAUDE.md files (Week 2, Week 3) to demonstrate communication style usage

**Checkpoint**: ✅ User Story 5 complete - communication styles exist and are demonstrated in relevant lessons

---

## Phase 8: GitHub Repository & Documentation (ALPHA Release)

**Purpose**: Clean up repository, update GitHub links, add documentation for public ALPHA release

### Update GitHub Links on Site

- [ ] T155 [P] Update GitHub social link in `astro.config.mjs:20` - verify URL points to correct public repository
- [ ] T156 [P] Update GitHub download URLs in `README.md:124` and `README.md:269` - update to correct path structure
- [ ] T157 [P] Update GitHub link in `src/content/docs/index.mdx:13` - verify correct repository URL
- [ ] T158 [P] Update GitHub link in `src/content/docs/blog/08-website-launch.mdx:83` - verify correct repository URL

### ALPHA Release Documentation

- [ ] T159 Create `CONTRIBUTING.md` at repository root with contribution guidelines for the course content
- [ ] T160 [P] Create `CHANGELOG.md` at repository root documenting ALPHA release features
- [ ] T161 Update `README.md` for public release:
  - Add ALPHA release banner/notice
  - Update "Getting Started" section for learners
  - Add "For Contributors" section
  - Document the immersive learning system structure
  - Add license information if not present
- [ ] T162 [P] Create `docs/ARCHITECTURE.md` documenting the immersive learning system architecture (lesson-modules, company-context, course-structure.json, SCRIPT_INSTRUCTIONS.md)
- [ ] T163 [P] Create `docs/CONTENT-STYLE-GUIDE.md` with British English guidelines and content standards for contributors

### Repository Cleanup

- [ ] T164 Delete duplicate migration file: `supabase/migrations/20241209000001_create_email_tables 2.sql`
- [ ] T165 Review and clean `.specify/memory/constitution.md` staged changes - commit or discard appropriately
- [ ] T166 Review `CLAUDE.md` staged changes - ensure all updates are intentional and commit
- [ ] T167 Review `astro.config.mjs` staged changes - ensure sidebar and social links are correct, commit
- [ ] T168 Delete old Week 4 MDX files that were replaced (if still in git history as deleted):
  - `src/content/docs/week-4/day-22-blog-compiler.mdx`
  - `src/content/docs/week-4/day-23-newsletter-assembler.mdx`
  - `src/content/docs/week-4/day-24-case-study-packager.mdx`
  - `src/content/docs/week-4/day-25-proposal-generator.mdx`
  - `src/content/docs/week-4/day-26-competitive-intel.mdx`
  - `src/content/docs/week-4/day-27-chatbot-trainer.mdx`
  - `src/content/docs/week-4/day-28-week-4-review.mdx`
- [ ] T169 Delete obsolete specs files (if no longer needed):
  - `specs/001-email-capture/` directory (verify feature is complete or archived)
- [ ] T170 Run `npm run build` to verify no build errors after cleanup
- [ ] T171 Review `.gitignore` for any sensitive files that should be excluded

### Repository Organisation for Public Access

- [ ] T172 Create `.github/ISSUE_TEMPLATE/bug_report.md` for bug reports
- [ ] T173 [P] Create `.github/ISSUE_TEMPLATE/feature_request.md` for feature requests
- [ ] T174 [P] Create `.github/ISSUE_TEMPLATE/content_suggestion.md` for course content suggestions
- [ ] T175 [P] Create `.github/PULL_REQUEST_TEMPLATE.md` for PRs
- [ ] T176 Create `LICENSE` file if not present (recommend MIT or CC BY-SA for course content)

**Checkpoint**: Repository is clean, documented, and ready for public ALPHA release

---

## Phase 9: Final Validation & Deployment

**Purpose**: Merge to main, push, and deploy to Vercel

### Pre-Merge Validation

- [ ] T177 Run `npm run build` - verify successful build with no errors
- [ ] T178 Run `npm run preview` - manually test site navigation and lesson pages
- [ ] T179 Test at least 3 slash commands (`/w1.d1`, `/w2.d8`, `/w4.d22`) to verify teaching flow works
- [ ] T180 Verify all GitHub links on site are clickable and point to correct locations
- [ ] T181 Review all uncommitted changes with `git status` and `git diff`
- [ ] T182 Review quickstart.md validation checklist - ensure all items pass

### Git Operations

- [ ] T183 Stage all changes for commit: `git add .`
- [ ] T184 Create comprehensive commit message documenting all changes:
  - Immersive learning system (lesson-modules, company-context, SCRIPT_INSTRUCTIONS.md)
  - Refactored slash commands to thin launchers
  - Updated documentation for ALPHA release
  - Repository cleanup
- [ ] T185 Commit changes to `003-immersive-learning` branch
- [ ] T186 Push branch to remote: `git push -u origin 003-immersive-learning`
- [ ] T187 Create pull request from `003-immersive-learning` to `main` with comprehensive description:
  - Summary of immersive learning system
  - List of major changes
  - Testing performed
  - Breaking changes (if any)
- [ ] T188 Merge pull request to `main` (after review if required)
- [ ] T189 Pull latest `main` locally: `git checkout main && git pull`

### Vercel Deployment

- [ ] T190 Verify Vercel is configured for automatic deployment on `main` push
- [ ] T191 Monitor Vercel deployment logs for any errors: `npx vercel logs`
- [ ] T192 Test production site at `https://coengineers.ai` after deployment:
  - Homepage loads correctly
  - All week navigation works
  - Blog posts accessible
  - Getting Started section works
- [ ] T193 Verify GitHub links on production site are clickable and correct
- [ ] T194 Test production site on mobile viewport
- [ ] T195 Document deployment in `CHANGELOG.md` with date and version

### Social Links Update

- [ ] T196 Update LinkedIn social link in `astro.config.mjs:21` from `https://linkedin.com/company/coengineers` to `https://www.linkedin.com/in/john-gordon-39135287/`
- [ ] T197 [P] Verify YouTube social link in `astro.config.mjs:21` is correctly set to `https://www.youtube.com/@coengineers`
- [ ] T198 Run `npm run build` to verify social link changes don't break build
- [ ] T199 Commit social link updates and push to trigger Vercel redeployment
- [ ] T200 Verify social links work correctly on production site footer/header

**Checkpoint**: ALPHA release complete - site deployed to production with correct social links

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational - Can start after Phase 2
- **User Story 2 (Phase 4)**: Depends on US1 folder creation (T007-T037) - Can run in parallel with later US1 tasks
- **User Story 3 (Phase 5)**: Depends on US1 CLAUDE.md files existing
- **User Story 4 (Phase 6)**: Depends on company-context folder (Phase 1) - Can run in parallel with US1
- **User Story 5 (Phase 7)**: Depends on US4 company-context files
- **GitHub/Docs (Phase 8)**: Can start after Phase 1, mostly parallel with other phases
- **Deployment (Phase 9)**: Depends on ALL previous phases completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - Core teaching system
- **User Story 2 (P1)**: Depends on US1 folder structure - Supporting materials
- **User Story 3 (P2)**: Depends on US1 CLAUDE.md files - Navigation integration
- **User Story 4 (P2)**: Can run parallel with US1 after setup - Company context
- **User Story 5 (P3)**: Depends on US4 - Communication styles

### Within Each Phase

- Folders must exist before files can be created
- SCRIPT_INSTRUCTIONS.md must exist before CLAUDE.md files can reference it
- course-structure.json must exist before slash commands can reference it
- CLAUDE.md files must exist before navigation variables can be added
- All content must be complete before final validation and deployment

### Parallel Opportunities

**Phase 1 - All tasks can run in parallel:**

- T001, T002, T003, T004 (different folders/files)

**Phase 3 - Folder creation can run in parallel:**

- T007-T037 (all 31 day folders)

**Phase 3 - Slash command refactoring can run in parallel:**

- T069-T099 after T069 is validated (same pattern, different files)

**Phase 4 - Supporting materials can run in parallel:**

- All T100-T133 tasks (different files)

**Phase 6 - Company context files can run in parallel:**

- T142, T143, T144, T145 (different files)

**Phase 8 - Many documentation tasks can run in parallel:**

- T155-T158 (GitHub link updates)
- T159-T163 (documentation files)
- T172-T176 (GitHub templates)

---

## Parallel Example: Phase 1 Setup

```bash
# Launch all setup tasks together:
Task: "Create lesson-modules folder structure"
Task: "Create company-context folder"
Task: "Create course-structure.json"
Task: "Create SCRIPT_INSTRUCTIONS.md"
```

## Parallel Example: User Story 1 Folder Creation

```bash
# Launch all 31 day folder tasks together:
Task: "Create lesson-modules/week-1/day-1-first-conversation/"
Task: "Create lesson-modules/week-1/day-2-your-digital-home/"
... (all 31 folders)
```

## Parallel Example: User Story 2 Materials

```bash
# Launch all Week 2 supporting materials together:
Task: "Create meeting-notes-raw-1.md"
Task: "Create meeting-notes-raw-2.md"
Task: "Create voice-memo-transcript-1.md"
... (all Week 2 materials)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (teaching scripts + slash command refactoring)
4. **STOP and VALIDATE**: Test `/w1.d1` end-to-end
5. Deploy MVP if ready

### Incremental Delivery

1. Setup + Foundational → Infrastructure ready
2. Add User Story 1 → Test teaching flow → Deploy
3. Add User Story 2 → Test supporting materials → Deploy
4. Add User Story 3 → Test navigation → Deploy
5. Add User Story 4 → Test company context → Deploy
6. Add User Story 5 → Test communication styles → Deploy
7. Complete Phase 8 → Documentation ready
8. Complete Phase 9 → ALPHA release deployed

### Recommended Execution Order

For a single developer working sequentially:

1. **Day 1**: Phase 1 (Setup) + Phase 2 (Foundational)
2. **Days 2-4**: Phase 3 User Story 1 (teaching scripts) - focus on Week 1 first as MVP
3. **Days 5-6**: Phase 4 User Story 2 (supporting materials)
4. **Day 7**: Phase 5-7 (US3, US4, US5 - navigation, company context, styles)
5. **Day 8**: Phase 8 (GitHub/Documentation cleanup)
6. **Day 9**: Phase 9 (Final validation and deployment)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- British English throughout all content
- Commit after each phase or logical group of tasks
- Stop at any checkpoint to validate independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

---

## Summary

| Phase                 | Task Count | Description                                  |
| --------------------- | ---------- | -------------------------------------------- |
| Phase 1: Setup        | 4          | Project infrastructure                       |
| Phase 2: Foundational | 2          | Blocking prerequisites                       |
| Phase 3: US1          | 93         | Teaching scripts + slash command refactoring |
| Phase 4: US2          | 34         | Supporting materials                         |
| Phase 5: US3          | 8          | Navigation system                            |
| Phase 6: US4          | 9          | Company context                              |
| Phase 7: US5          | 4          | Communication styles                         |
| Phase 8: GitHub/Docs  | 22         | Documentation + cleanup                      |
| Phase 9: Deployment   | 24         | Validation + deploy + social links           |
| **TOTAL**             | **200**    |                                              |

### Tasks per User Story

- **US1 (P1)**: 93 tasks (teaching scripts, folders, slash commands)
- **US2 (P1)**: 34 tasks (supporting materials)
- **US3 (P2)**: 8 tasks (navigation)
- **US4 (P2)**: 9 tasks (company context)
- **US5 (P3)**: 4 tasks (communication styles)
- **Infrastructure/Docs**: 52 tasks (setup, foundational, GitHub, deployment, social links)

### Suggested MVP Scope

**MVP = Phase 1 + Phase 2 + Week 1 of Phase 3**

- Setup infrastructure
- Create SCRIPT_INSTRUCTIONS.md and course-structure.json
- Create 7 teaching scripts for Week 1
- Refactor 7 slash commands for Week 1
- Test `/w1.d1` through `/w1.d7` end-to-end

This provides a complete Week 1 experience to validate the immersive learning approach before scaling to all 31 days.
