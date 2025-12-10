# Tasks: Course Restructure - Theme-Based Obsidian Productivity

**Input**: Design documents from `/specs/001-course-restructure/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅, quickstart.md ✅

**Target**: Monday launch deadline
**Organisation**: Tasks grouped by user story with git checkpoints at each milestone for context window management

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story (US1-US5) this task belongs to
- Include exact file paths in descriptions

---

## Phase 1: Setup & Foundation (BLOCKS ALL USER STORIES)

**Purpose**: Infrastructure changes that enable all user stories. Must complete before any content work.

### 1.1 Core Configuration

- [x] T001 Update `.claude/SCRIPT_INSTRUCTIONS.md` with theme/lab variable names ({themeId}, {labId}, {nextCommand}, etc.) per reference/SCRIPT_INSTRUCTIONS.md
- [x] T002 Create new `.claude/course-structure.json` with theme-based structure per contracts/course-structure-schema.json and data-model.md
- [x] T003 Update `astro.config.mjs` sidebar configuration per quickstart.md structure (Reasons, Getting Started, Theme 1-4, Reference)

### 1.2 Directory Structure

- [x] T004 [P] Create directory `src/content/docs/theme-1/`
- [x] T005 [P] Create directory `src/content/docs/theme-2/`
- [x] T006 [P] Create directory `src/content/docs/theme-3/`
- [x] T007 [P] Create directory `src/content/docs/theme-4/`
- [x] T008 [P] Create directory `src/content/docs/reasons/`
- [x] T009 [P] Create directory `lesson-modules/theme-1/lab-1-first-conversation/`
- [x] T010 [P] Create directory `lesson-modules/theme-1/lab-2-para-structure/`
- [x] T011 [P] Create directory `lesson-modules/theme-1/lab-3-document-templates/`
- [x] T012 [P] Create directory `lesson-modules/theme-1/lab-4-metadata-enrichment/`
- [x] T013 [P] Create directory `lesson-modules/theme-1/lab-5-project-memory/`
- [x] T014 [P] Create directory `lesson-modules/theme-2/lab-1-meeting-notes/`
- [x] T015 [P] Create directory `lesson-modules/theme-2/lab-2-audio-transcripts/`
- [x] T016 [P] Create directory `lesson-modules/theme-2/lab-3-email-refinement/`
- [x] T017 [P] Create directory `lesson-modules/theme-2/lab-4-research-synthesis/`
- [x] T018 [P] Create directory `lesson-modules/theme-2/lab-5-youtube-extraction/`
- [x] T019 [P] Create directory `lesson-modules/theme-3/lab-1-docx-creation/`
- [x] T020 [P] Create directory `lesson-modules/theme-3/lab-2-xlsx-creation/`
- [x] T021 [P] Create directory `lesson-modules/theme-3/lab-3-pptx-creation/`
- [x] T022 [P] Create directory `lesson-modules/theme-3/lab-4-brandkit-creation/`
- [x] T023 [P] Create directory `lesson-modules/theme-3/lab-5-sow-creation/`
- [x] T024 [P] Create directory `lesson-modules/theme-4/lab-1-gamma-presentations/`
- [x] T025 [P] Create directory `lesson-modules/theme-4/lab-2-gemini-images/`
- [x] T026 [P] Create directory `lesson-modules/theme-4/lab-3-elevenlabs-audio/`
- [x] T027 [P] Create directory `lesson-modules/theme-4/lab-4-prd-creation/`
- [x] T028 [P] Create directory `lesson-modules/theme-4/lab-5-product-backlog/`

**🔖 GIT CHECKPOINT M1**: `git add . && git commit -m "feat(001): Phase 1 - Setup foundation and directory structure"`

---

## Phase 2: User Story 1 - Complete a Theme Lab (Priority: P1) 🎯 MVP

**Goal**: Learners can navigate to any lab, watch video, follow instructions, run slash command, produce output
**Independent Test**: Visit any lab page → watch video → run `/tN.lbN` → produce expected output

### 2.1 Slash Commands (20 commands)

- [x] T029 [P] [US1] Create slash command `.claude/commands/t1.lb1.md` for First Conversation per reference/example-slash-command.md
- [x] T030 [P] [US1] Create slash command `.claude/commands/t1.lb2.md` for PARA Structure
- [x] T031 [P] [US1] Create slash command `.claude/commands/t1.lb3.md` for Document Templates
- [x] T032 [P] [US1] Create slash command `.claude/commands/t1.lb4.md` for Metadata Enrichment
- [x] T033 [P] [US1] Create slash command `.claude/commands/t1.lb5.md` for Project Memory
- [x] T034 [P] [US1] Create slash command `.claude/commands/t2.lb1.md` for Meeting Notes
- [x] T035 [P] [US1] Create slash command `.claude/commands/t2.lb2.md` for Audio Transcripts
- [x] T036 [P] [US1] Create slash command `.claude/commands/t2.lb3.md` for Email Refinement
- [x] T037 [P] [US1] Create slash command `.claude/commands/t2.lb4.md` for Research Synthesis
- [x] T038 [P] [US1] Create slash command `.claude/commands/t2.lb5.md` for YouTube Extraction
- [x] T039 [P] [US1] Create slash command `.claude/commands/t3.lb1.md` for DOCX Creation
- [x] T040 [P] [US1] Create slash command `.claude/commands/t3.lb2.md` for XLSX Creation
- [x] T041 [P] [US1] Create slash command `.claude/commands/t3.lb3.md` for PPTX Creation
- [x] T042 [P] [US1] Create slash command `.claude/commands/t3.lb4.md` for Brandkit Creation
- [x] T043 [P] [US1] Create slash command `.claude/commands/t3.lb5.md` for SOW Creation
- [x] T044 [P] [US1] Create slash command `.claude/commands/t4.lb1.md` for Gamma Presentations
- [x] T045 [P] [US1] Create slash command `.claude/commands/t4.lb2.md` for Gemini Images
- [x] T046 [P] [US1] Create slash command `.claude/commands/t4.lb3.md` for ElevenLabs Audio
- [x] T047 [P] [US1] Create slash command `.claude/commands/t4.lb4.md` for PRD Creation
- [x] T048 [P] [US1] Create slash command `.claude/commands/t4.lb5.md` for Product Backlog

**🔖 GIT CHECKPOINT M2**: `git add . && git commit -m "feat(001): Phase 2.1 - All 20 slash commands created"`

### 2.2 Teaching Scripts - Theme 1: Building Your Digital Workspace (5 labs)

**Reuse Strategy**: Adapt from existing week-1 content

- [ ] T049 [US1] Create `lesson-modules/theme-1/lab-1-first-conversation/CLAUDE.md` (adapt from week-1/day-1)
- [ ] T050 [P] [US1] Copy `lesson-modules/week-1/day-1-first-conversation/learning-log-template.md` to `lesson-modules/theme-1/lab-1-first-conversation/`
- [ ] T051 [US1] Create `lesson-modules/theme-1/lab-2-para-structure/CLAUDE.md` (adapt from week-1/day-2, focus on PARA)
- [ ] T052 [P] [US1] Create `lesson-modules/theme-1/lab-2-para-structure/para-template.md` supporting material
- [ ] T053 [US1] Create `lesson-modules/theme-1/lab-3-document-templates/CLAUDE.md` (adapt from week-1/day-4)
- [ ] T054 [P] [US1] Create `lesson-modules/theme-1/lab-3-document-templates/template-examples.md` supporting material
- [ ] T055 [US1] Create `lesson-modules/theme-1/lab-4-metadata-enrichment/CLAUDE.md` (adapt from week-1/day-5, focus on metadata)
- [ ] T056 [US1] Create `lesson-modules/theme-1/lab-5-project-memory/CLAUDE.md` (adapt from week-1/day-3)
- [ ] T057 [P] [US1] Copy `lesson-modules/week-1/day-3-project-memory/example-claude-md.md` to `lesson-modules/theme-1/lab-5-project-memory/`

**🔖 GIT CHECKPOINT M3**: `git add . && git commit -m "feat(001): Phase 2.2 - Theme 1 teaching scripts complete"`

### 2.3 Teaching Scripts - Theme 2: Content Processing (5 labs)

**Reuse Strategy**: Adapt from existing week-2 content

- [ ] T058 [US1] Create `lesson-modules/theme-2/lab-1-meeting-notes/CLAUDE.md` (adapt from week-2/day-8)
- [ ] T059 [P] [US1] Copy meeting notes samples from `lesson-modules/week-2/day-8-meeting-tamer/` to `lesson-modules/theme-2/lab-1-meeting-notes/`
- [ ] T060 [US1] Create `lesson-modules/theme-2/lab-2-audio-transcripts/CLAUDE.md` (adapt from week-2/day-9)
- [ ] T061 [P] [US1] Copy voice memo samples from `lesson-modules/week-2/day-9-voice-to-text/` to `lesson-modules/theme-2/lab-2-audio-transcripts/`
- [ ] T062 [US1] Create `lesson-modules/theme-2/lab-3-email-refinement/CLAUDE.md` (adapt from week-2/day-13)
- [ ] T063 [P] [US1] Copy email samples from `lesson-modules/week-2/day-13-email-processor/` to `lesson-modules/theme-2/lab-3-email-refinement/`
- [ ] T064 [US1] Create `lesson-modules/theme-2/lab-4-research-synthesis/CLAUDE.md` (adapt from week-2/day-12)
- [ ] T065 [P] [US1] Create `lesson-modules/theme-2/lab-4-research-synthesis/research-dump-sample.md` supporting material
- [ ] T066 [US1] Create `lesson-modules/theme-2/lab-5-youtube-extraction/CLAUDE.md` (adapt from week-2/day-10)
- [ ] T067 [P] [US1] Copy `lesson-modules/week-2/day-10-youtube-brain/youtube-transcript-sample.md` to `lesson-modules/theme-2/lab-5-youtube-extraction/`

**🔖 GIT CHECKPOINT M4**: `git add . && git commit -m "feat(001): Phase 2.3 - Theme 2 teaching scripts complete"`

### 2.4 Teaching Scripts - Theme 3: Document Creation (5 labs)

**Note**: Mostly NEW content using Claude Code skills (docx, xlsx, pptx, etc.)

- [ ] T068 [US1] Create `lesson-modules/theme-3/lab-1-docx-creation/CLAUDE.md` (NEW - Claude Code docx skill)
- [ ] T069 [US1] Create `lesson-modules/theme-3/lab-2-xlsx-creation/CLAUDE.md` (NEW - Claude Code xlsx skill)
- [ ] T070 [US1] Create `lesson-modules/theme-3/lab-3-pptx-creation/CLAUDE.md` (adapt from week-3/day-15, use pptx skill)
- [ ] T071 [US1] Create `lesson-modules/theme-3/lab-4-brandkit-creation/CLAUDE.md` (NEW - brand guidelines skill)
- [ ] T072 [US1] Create `lesson-modules/theme-3/lab-5-sow-creation/CLAUDE.md` (NEW - Statement of Work)
- [ ] T073 [P] [US1] Create `lesson-modules/theme-3/lab-5-sow-creation/sow-template.md` supporting material

**🔖 GIT CHECKPOINT M5**: `git add . && git commit -m "feat(001): Phase 2.4 - Theme 3 teaching scripts complete"`

### 2.5 Teaching Scripts - Theme 4: External API Integrations (5 labs)

**Note**: Uses research.md API documentation for Gamma, Gemini, ElevenLabs

- [ ] T074 [US1] Create `lesson-modules/theme-4/lab-1-gamma-presentations/CLAUDE.md` (NEW - per research.md Gamma API)
- [ ] T075 [US1] Create `lesson-modules/theme-4/lab-2-gemini-images/CLAUDE.md` (adapt from week-3/day-16, add Gemini API details from research.md)
- [ ] T076 [US1] Create `lesson-modules/theme-4/lab-3-elevenlabs-audio/CLAUDE.md` (adapt from week-3/day-17, add ElevenLabs API details from research.md)
- [ ] T077 [US1] Create `lesson-modules/theme-4/lab-4-prd-creation/CLAUDE.md` (adapt from week-4/day-22)
- [ ] T078 [P] [US1] Copy PRD templates from `lesson-modules/week-4/day-22-the-product-idea/` to `lesson-modules/theme-4/lab-4-prd-creation/`
- [ ] T079 [US1] Create `lesson-modules/theme-4/lab-5-product-backlog/CLAUDE.md` (adapt from week-4/day-23)
- [ ] T080 [P] [US1] Copy `lesson-modules/week-4/day-23-the-product-backlog/backlog-template.md` to `lesson-modules/theme-4/lab-5-product-backlog/`

**🔖 GIT CHECKPOINT M6**: `git add . && git commit -m "feat(001): Phase 2.5 - Theme 4 teaching scripts complete"`

### 2.6 MDX Lab Pages - All 20 Labs

**Pattern**: Per quickstart.md MDX template (YouTube, objectives, SlashCommand component)

- [ ] T081 [P] [US1] Create `src/content/docs/theme-1/lab-1-first-conversation.mdx`
- [ ] T082 [P] [US1] Create `src/content/docs/theme-1/lab-2-para-structure.mdx`
- [ ] T083 [P] [US1] Create `src/content/docs/theme-1/lab-3-document-templates.mdx`
- [ ] T084 [P] [US1] Create `src/content/docs/theme-1/lab-4-metadata-enrichment.mdx`
- [ ] T085 [P] [US1] Create `src/content/docs/theme-1/lab-5-project-memory.mdx`
- [ ] T086 [P] [US1] Create `src/content/docs/theme-2/lab-1-meeting-notes.mdx`
- [ ] T087 [P] [US1] Create `src/content/docs/theme-2/lab-2-audio-transcripts.mdx`
- [ ] T088 [P] [US1] Create `src/content/docs/theme-2/lab-3-email-refinement.mdx`
- [ ] T089 [P] [US1] Create `src/content/docs/theme-2/lab-4-research-synthesis.mdx`
- [ ] T090 [P] [US1] Create `src/content/docs/theme-2/lab-5-youtube-extraction.mdx`
- [ ] T091 [P] [US1] Create `src/content/docs/theme-3/lab-1-docx-creation.mdx`
- [ ] T092 [P] [US1] Create `src/content/docs/theme-3/lab-2-xlsx-creation.mdx`
- [ ] T093 [P] [US1] Create `src/content/docs/theme-3/lab-3-pptx-creation.mdx`
- [ ] T094 [P] [US1] Create `src/content/docs/theme-3/lab-4-brandkit-creation.mdx`
- [ ] T095 [P] [US1] Create `src/content/docs/theme-3/lab-5-sow-creation.mdx`
- [ ] T096 [P] [US1] Create `src/content/docs/theme-4/lab-1-gamma-presentations.mdx`
- [ ] T097 [P] [US1] Create `src/content/docs/theme-4/lab-2-gemini-images.mdx`
- [ ] T098 [P] [US1] Create `src/content/docs/theme-4/lab-3-elevenlabs-audio.mdx`
- [ ] T099 [P] [US1] Create `src/content/docs/theme-4/lab-4-prd-creation.mdx`
- [ ] T100 [P] [US1] Create `src/content/docs/theme-4/lab-5-product-backlog.mdx`

**🔖 GIT CHECKPOINT M7**: `git add . && git commit -m "feat(001): Phase 2.6 - All 20 MDX lab pages complete"`

**✅ US1 COMPLETE**: Learners can now complete any theme lab end-to-end

---

## Phase 3: User Story 2 - Discover Course via Landing Page (Priority: P1)

**Goal**: Visitors see hero, countdown, CTA, can subscribe
**Independent Test**: Visit homepage → see hero/countdown/CTA → submit email → receive confirmation

- [ ] T101 [US2] Update `src/content/docs/index.mdx` with new hero section (Claude Code + Obsidian value proposition)
- [ ] T102 [US2] Update index.mdx countdown component for Christmas launch date
- [ ] T103 [US2] Update index.mdx CTA copy to mention "learning community in the new year"
- [ ] T104 [US2] Update Starlight description in `astro.config.mjs` to reflect new course structure (4 themes, 20 labs)

**🔖 GIT CHECKPOINT M8**: `git add . && git commit -m "feat(001): Phase 3 - Landing page updated with new value proposition"`

**✅ US2 COMPLETE**: Landing page ready for subscriber acquisition

---

## Phase 4: User Story 3 - Browse 6 Reasons Content (Priority: P2)

**Goal**: Shareable content pages with subscription CTAs
**Independent Test**: View any reason page → read content → see CTA → share link generates good preview

- [ ] T105 [P] [US3] Create `src/content/docs/reasons/reason-1.mdx` with EmailSignup CTA (adapt from blog/01)
- [ ] T106 [P] [US3] Create `src/content/docs/reasons/reason-2.mdx` with EmailSignup CTA (adapt from blog/02)
- [ ] T107 [P] [US3] Create `src/content/docs/reasons/reason-3.mdx` with EmailSignup CTA (adapt from blog/03)
- [ ] T108 [P] [US3] Create `src/content/docs/reasons/reason-4.mdx` with EmailSignup CTA (adapt from blog/04)
- [ ] T109 [P] [US3] Create `src/content/docs/reasons/reason-5.mdx` with EmailSignup CTA (adapt from blog/05)
- [ ] T110 [P] [US3] Create `src/content/docs/reasons/reason-6.mdx` with EmailSignup CTA (adapt from blog/06)
- [ ] T111 [US3] Update frontmatter on all 6 reasons pages with optimised title/description for social sharing (max 60/160 chars)

**🔖 GIT CHECKPOINT M9**: `git add . && git commit -m "feat(001): Phase 4 - 6 Reasons pages created for social sharing"`

**✅ US3 COMPLETE**: Social sharing content ready

---

## Phase 5: User Story 4 - Navigate Theme Structure (Priority: P2)

**Goal**: Clear sidebar navigation, theme overviews showing all 5 labs
**Independent Test**: View sidebar → click theme → see overview with all 5 labs → click lab → arrive at correct page

### 5.1 Theme Overview Pages

- [ ] T112 [P] [US4] Create `src/content/docs/theme-1/overview.mdx` with links to all 5 labs
- [ ] T113 [P] [US4] Create `src/content/docs/theme-2/overview.mdx` with links to all 5 labs
- [ ] T114 [P] [US4] Create `src/content/docs/theme-3/overview.mdx` with links to all 5 labs
- [ ] T115 [P] [US4] Create `src/content/docs/theme-4/overview.mdx` with links to all 5 labs

### 5.2 Navigation Verification

- [ ] T116 [US4] Verify astro.config.mjs sidebar shows 4 themes clearly labelled with focus areas
- [ ] T117 [US4] Verify all lab links in sidebar work correctly (theme-1 through theme-4)

**🔖 GIT CHECKPOINT M10**: `git add . && git commit -m "feat(001): Phase 5 - Theme navigation complete with overview pages"`

**✅ US4 COMPLETE**: Theme-based navigation fully functional

---

## Phase 6: User Story 5 - Access Getting Started Content (Priority: P3)

**Goal**: New visitors can understand prerequisites and set up environment
**Independent Test**: Navigate to Getting Started → see prerequisites, introduction, installation, cheat sheet

- [ ] T118 [P] [US5] Create `src/content/docs/getting-started/cheat-sheet.mdx` per quickstart.md content outline
- [ ] T119 [US5] Update `astro.config.mjs` sidebar to include cheat-sheet in Getting Started section
- [ ] T120 [US5] Review and update `src/content/docs/getting-started/prerequisites.mdx` to mention Obsidian requirement

**🔖 GIT CHECKPOINT M11**: `git add . && git commit -m "feat(001): Phase 6 - Getting Started with cheat sheet complete"`

**✅ US5 COMPLETE**: Learner setup content ready

---

## Phase 7: Cleanup (Remove Old Structure)

**Purpose**: Remove obsolete week-based content per FR-024/FR-025

### 7.1 Remove Old Slash Commands

- [ ] T121 [P] Remove `.claude/commands/w1.d1.md` through `.claude/commands/w1.d7.md`
- [ ] T122 [P] Remove `.claude/commands/w2.d8.md` through `.claude/commands/w2.d14.md`
- [ ] T123 [P] Remove `.claude/commands/w3.d15.md` through `.claude/commands/w3.d21.md`
- [ ] T124 [P] Remove `.claude/commands/w4.d22.md` through `.claude/commands/w4.d28.md`
- [ ] T125 [P] Remove `.claude/commands/bonus.d29.md` through `.claude/commands/bonus.d31.md`

### 7.2 Remove Old Website Content

- [ ] T126 [P] Remove `src/content/docs/week-1/` directory (7 files)
- [ ] T127 [P] Remove `src/content/docs/week-2/` directory (8 files)
- [ ] T128 [P] Remove `src/content/docs/week-3/` directory (8 files)
- [ ] T129 [P] Remove `src/content/docs/week-4/` directory (8 files)
- [ ] T130 [P] Remove `src/content/docs/bonus/` directory (4 files)
- [ ] T131 [P] Remove `src/content/docs/blog/` directory (6 files)

### 7.3 Remove Old Lesson Modules

- [ ] T132 [P] Remove `lesson-modules/week-1/` directory
- [ ] T133 [P] Remove `lesson-modules/week-2/` directory
- [ ] T134 [P] Remove `lesson-modules/week-3/` directory
- [ ] T135 [P] Remove `lesson-modules/week-4/` directory
- [ ] T136 [P] Remove `lesson-modules/bonus/` directory

**🔖 GIT CHECKPOINT M12**: `git add . && git commit -m "chore(001): Phase 7 - Removed obsolete week-based content"`

---

## Phase 8: Verification & Polish

**Purpose**: Final checks before launch

### 8.1 Build Verification

- [ ] T137 Run `npm run build` and verify no errors
- [ ] T138 Run `npm run lint` and fix any issues
- [ ] T139 Run `npm run type-check` and fix any issues

### 8.2 Content Verification

- [ ] T140 Verify all 20 lab pages render correctly (manual spot check)
- [ ] T141 Verify all 6 reasons pages render with CTAs
- [ ] T142 Verify homepage hero/countdown/CTA display correctly
- [ ] T143 Verify cheat sheet is accessible from Getting Started
- [ ] T144 Verify navigation reaches any lab in ≤3 clicks from homepage

### 8.3 Functional Verification

- [ ] T145 Test email signup flow works (201 for new, 200 for existing)
- [ ] T146 Test at least 3 slash commands execute without errors (t1.lb1, t2.lb1, t4.lb1)
- [ ] T147 Verify British English used throughout (spot check 5 pages)

### 8.4 Course Structure Validation

- [ ] T148 Validate `.claude/course-structure.json` has all 20 labs with correct paths
- [ ] T149 Verify all lab paths in course-structure.json resolve to existing CLAUDE.md files

**🔖 GIT CHECKPOINT M13 (FINAL)**: `git add . && git commit -m "feat(001): Course restructure complete - 4 themes, 20 labs, ready for launch"`

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) → BLOCKS ALL
    ↓
Phase 2 (US1: Labs) → Core MVP
    ↓
Phase 3 (US2: Landing) → Parallel with Phase 4-5
Phase 4 (US3: Reasons) → Parallel with Phase 3, 5
Phase 5 (US4: Navigation) → Parallel with Phase 3-4
Phase 6 (US5: Getting Started) → Parallel with Phase 3-5
    ↓
Phase 7 (Cleanup) → After Phase 2-6 complete
    ↓
Phase 8 (Verification) → Final
```

### Recommended Execution Strategy (Solo Developer)

**Day 1 Focus - Foundation + Core Content:**

1. Phase 1 complete → Commit M1
2. Phase 2.1 (Slash Commands) → Commit M2
3. Phase 2.2-2.5 (Teaching Scripts) → Commits M3-M6

**Day 2 Focus - MDX + Navigation:**

1. Phase 2.6 (MDX Lab Pages) → Commit M7
2. Phase 3 (Landing Page) → Commit M8
3. Phase 5 (Theme Overviews) → Commit M10

**Day 3 Focus - Polish + Cleanup:**

1. Phase 4 (Reasons) → Commit M9
2. Phase 6 (Cheat Sheet) → Commit M11
3. Phase 7 (Cleanup) → Commit M12
4. Phase 8 (Verification) → Commit M13

### Parallel Opportunities

Within each phase, tasks marked [P] can run in parallel:

```bash
# Example: Create all Theme 1 directories in parallel
mkdir -p lesson-modules/theme-1/{lab-1-first-conversation,lab-2-para-structure,lab-3-document-templates,lab-4-metadata-enrichment,lab-5-project-memory}

# Example: Create all slash commands in parallel (20 files, same template)
# All T029-T048 can be parallelised

# Example: Create all MDX lab pages in parallel (20 files, same template)
# All T081-T100 can be parallelised

# Example: All removal tasks in Phase 7 can be parallelised
```

---

## Content Reuse Map

### Labs with HIGH Reuse (adapt existing CLAUDE.md)

| New Lab | Source Day | Copy Supporting Materials?                    |
| ------- | ---------- | --------------------------------------------- |
| T1.L1   | Day 1      | Yes - learning-log-template.md                |
| T1.L2   | Day 2      | No - create new PARA template                 |
| T1.L3   | Day 4      | No - create new template-examples.md          |
| T1.L5   | Day 3      | Yes - example-claude-md.md                    |
| T2.L1   | Day 8      | Yes - meeting-notes-raw-\*.md                 |
| T2.L2   | Day 9      | Yes - voice-memo-transcript-\*.md             |
| T2.L3   | Day 13     | Yes - email-\*-sample.md                      |
| T2.L5   | Day 10     | Yes - youtube-transcript-sample.md            |
| T3.L3   | Day 15     | Partial - adapt for pptx skill                |
| T4.L2   | Day 16     | Partial - add Gemini API from research.md     |
| T4.L3   | Day 17     | Partial - add ElevenLabs API from research.md |
| T4.L4   | Day 22     | Yes - prp-template.md, example-prp-filled.md  |
| T4.L5   | Day 23     | Yes - backlog-template.md                     |

### Labs Requiring NEW Content

| New Lab | Focus                | Reference                      |
| ------- | -------------------- | ------------------------------ |
| T1.L4   | Metadata/Frontmatter | Obsidian metadata practices    |
| T2.L4   | Research Synthesis   | Adapt from Day 12 Web Archiver |
| T3.L1   | DOCX Creation        | Claude Code docx skill         |
| T3.L2   | XLSX Creation        | Claude Code xlsx skill         |
| T3.L4   | Brandkit Creation    | Brand guidelines skill         |
| T3.L5   | SOW Creation         | Statement of Work template     |
| T4.L1   | Gamma Presentations  | research.md Gamma API section  |

---

## Summary

| Metric                             | Count                |
| ---------------------------------- | -------------------- |
| **Total Tasks**                    | 149                  |
| **Phase 1 (Setup)**                | 28                   |
| **Phase 2 (US1: Labs)**            | 72                   |
| **Phase 3 (US2: Landing)**         | 4                    |
| **Phase 4 (US3: Reasons)**         | 7                    |
| **Phase 5 (US4: Navigation)**      | 6                    |
| **Phase 6 (US5: Getting Started)** | 3                    |
| **Phase 7 (Cleanup)**              | 16                   |
| **Phase 8 (Verification)**         | 13                   |
| **Git Checkpoints**                | 13                   |
| **Parallel Opportunities**         | 80+ tasks marked [P] |

### MVP Scope (US1 + US2 Only)

For minimum viable launch:

- Complete Phases 1-3 (Tasks T001-T104)
- Skip Phase 4 (Reasons) - can add after launch
- Complete Phase 5 (Navigation required)
- Skip Phase 6 (Cheat Sheet) - can add after launch
- Complete Phase 7-8 (Cleanup and Verification)

**MVP Task Count**: ~120 tasks (excluding reasons and cheat sheet)

---

## Notes

- All tasks use British English (colour, organisation, behaviour)
- Each CLAUDE.md must follow Say/Check/Action pattern per SCRIPT_INSTRUCTIONS.md
- Video placeholders acceptable for initial launch (YouTube IDs can be added later)
- Each git checkpoint allows safe context window restart
- Monday deadline prioritises: Labs working > Navigation working > Polish complete
