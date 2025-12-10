# Feature Specification: Course Restructure - Theme-Based Obsidian Productivity

**Feature Branch**: `001-course-restructure`
**Created**: 2025-12-10
**Status**: Draft
**Input**: Transform 31-day week-based course into focused 4-theme structure with Obsidian productivity labs, 6 "reasons" blog posts, and simplified landing page for Christmas launch.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Complete a Theme Lab (Priority: P1)

A learner visits the CoEngineers site and navigates to a specific theme and lab (e.g., Theme 2, Lab 3: Refining Email into Obsidian Notes). They follow the learning experience which includes a YouTube video, interactive slash command, and detailed claude.md instructions. They complete the lab by running the slash command in their own environment and producing a tangible output.

**Why this priority**: This is the core learning experience. Each lab must be a self-contained, completable unit that delivers immediate value. Without functional labs, there is no course.

**Independent Test**: Can be fully tested by navigating to any single lab page, watching the video, following instructions, and successfully executing the slash command to produce the expected output.

**Acceptance Scenarios**:

1. **Given** a learner is on any lab page, **When** they view the page content, **Then** they see a YouTube video, learning objectives, and clear instructions for running the associated slash command.
2. **Given** a learner has Claude Code installed, **When** they run the lab's slash command (e.g., `/t2.lb3`), **Then** they receive interactive guidance that produces a structured Obsidian note.
3. **Given** a learner completes a lab, **When** they review their output, **Then** the output matches the expected format described in the lab instructions.

---

### User Story 2 - Discover Course via Landing Page (Priority: P1)

A potential learner arrives at the CoEngineers homepage. They see a compelling hero section explaining the value proposition (Claude Code + Obsidian productivity), a countdown to launch, and a clear call-to-action to subscribe. They enter their email and join the community.

**Why this priority**: Without subscriber acquisition, there is no audience for the course. The landing page is the primary conversion mechanism.

**Independent Test**: Can be fully tested by visiting the homepage, viewing the hero/countdown/CTA elements, and successfully submitting an email subscription.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the homepage, **When** the page loads, **Then** they see a hero section, countdown timer, and email signup form.
2. **Given** a visitor views the hero section, **When** they read the content, **Then** they understand the course covers Claude Code for Obsidian productivity without coding experience required.
3. **Given** a visitor enters a valid email, **When** they submit the form, **Then** they receive confirmation and a welcome email inviting them to the learning community.

---

### User Story 3 - Browse 6 Reasons Content (Priority: P2)

A visitor discovers CoEngineers through social media sharing. They click a link to one of the "6 Reasons" articles (formerly blog posts). The article is concise, shareable, and explains a specific benefit of using Claude Code for productivity. At the end, they see a CTA to subscribe.

**Why this priority**: Social sharing drives organic growth. Concise, themed content is easier to share and repurpose throughout the year.

**Independent Test**: Can be fully tested by viewing any single reason page, reading the content, and confirming it includes a subscription CTA.

**Acceptance Scenarios**:

1. **Given** a visitor clicks a shared link, **When** they view a "reason" page, **Then** they see concise content explaining one benefit of Claude Code productivity.
2. **Given** a visitor finishes reading, **When** they reach the end of the content, **Then** they see an email signup CTA.
3. **Given** a social media user shares a reason, **When** the link is rendered as a preview, **Then** the preview shows an engaging title and description suitable for sharing.

---

### User Story 4 - Navigate Theme Structure (Priority: P2)

A learner wants to explore the course content by theme. They navigate to a theme overview page (e.g., Theme 1: Building Your Digital Workspace) and see all 5 labs within that theme. They can click into any lab to begin learning.

**Why this priority**: Clear navigation by theme helps learners understand the course structure and find relevant content. It supports the "three pillars" messaging (LLM, OS driver, external tools).

**Independent Test**: Can be fully tested by visiting any theme overview page and clicking through to each of its 5 labs.

**Acceptance Scenarios**:

1. **Given** a learner views the site navigation, **When** they look at the sidebar, **Then** they see 4 themes clearly labelled with their focus areas.
2. **Given** a learner clicks a theme, **When** they view the theme overview, **Then** they see all 5 labs listed with brief descriptions.
3. **Given** a learner clicks a lab from the overview, **When** the page loads, **Then** they arrive at the correct lab page with full learning content.

---

### User Story 5 - Access Getting Started Content (Priority: P3)

A new visitor wants to understand prerequisites before diving into the course. They navigate to the Getting Started section and find installation instructions, an introduction to the course philosophy, and prerequisites (Obsidian, Claude Code).

**Why this priority**: Getting Started content ensures learners can set up their environment. Without proper setup, they cannot complete labs.

**Independent Test**: Can be fully tested by navigating to Getting Started and confirming all three pages (prerequisites, introduction, installation) are accessible and contain relevant content.

**Acceptance Scenarios**:

1. **Given** a new visitor clicks Getting Started, **When** they view the section, **Then** they see prerequisites, introduction, and installation pages.
2. **Given** a visitor reads prerequisites, **When** they review the content, **Then** they understand they need Obsidian and Claude Code installed.
3. **Given** a visitor follows installation steps, **When** they complete the instructions, **Then** they have a working environment to run slash commands.

---

### Edge Cases

- What happens when a visitor accesses an old week-based URL (e.g., `/week-1/day-1`)? Redirects or 404 handling needed.
- How does the site handle incomplete theme content during initial launch? Placeholder or "coming soon" state.
- What happens when a learner runs a slash command without the required Obsidian setup? Clear error messaging with setup link.
- How does the countdown timer behave after launch date passes? Transitions to launched state or removes countdown.

## Requirements _(mandatory)_

### Functional Requirements

**Content Structure**

- **FR-001**: Site MUST display 4 themes, each containing exactly 5 labs (20 total learning experiences).
- **FR-002**: Site MUST display 6 "reasons" pages (replacing the former blog posts) designed for social sharing.
- **FR-003**: Site MUST retain the Getting Started section with prerequisites, introduction, and installation pages.
- **FR-004**: Site MUST remove all week-based content structure (weeks 1-4, bonus days 29-31).
- **FR-005**: Site MUST remove the bonus content section entirely.

**Theme Content**

- **FR-006**: Theme 1 MUST focus on digital workspace setup with Obsidian (PARA structure, templates, metadata).
- **FR-007**: Theme 2 MUST focus on content processing (meeting transcripts, audio, emails, research, YouTube).
- **FR-008**: Theme 3 MUST focus on document creation using Claude Code skills (docx, xlsx, pptx, brandkit, SOW).
- **FR-009**: Theme 4 MUST focus on external API integrations (Gamma, image generation, text-to-speech, PRD, backlog).

**Slash Commands**

- **FR-010**: Each lab MUST have an associated slash command following the pattern `/tN.lbN` (e.g., `/t1.lb1`, `/t2.lb3`).
- **FR-011**: Slash commands MUST reference the common script instructions file (`SCRIPT_INSTRUCTIONS.md`).
- **FR-012**: Slash commands MUST follow the existing interactive pattern (questions first, then output generation).

**Learning Experience**

- **FR-013**: Each lab page MUST include a YouTube video component.
- **FR-014**: Each lab page MUST include clear learning objectives and instructions.
- **FR-015**: Each lab MUST have a corresponding claude.md file with detailed learning experience instructions.
- **FR-016**: Labs MUST be self-contained units that can be completed independently.

**Landing Page**

- **FR-017**: Homepage MUST display a hero section explaining the course value proposition.
- **FR-018**: Homepage MUST display a countdown timer to the launch date.
- **FR-019**: Homepage MUST display a prominent email signup CTA.

**Visual Design**

- **FR-020**: Site colour scheme MUST update the orange accent to Bitcoin orange (#F7931A or similar).
- **FR-021**: Site MUST retain the current neutral colour scheme with only the orange adjustment.

**Email/Subscription**

- **FR-022**: Email subscription functionality MUST remain unchanged (existing Supabase + Resend integration).
- **FR-023**: Subscription CTA MUST mention invitation to the learning community in the new year.

**Cleanup**

- **FR-024**: Site MUST remove or archive obsolete tests that no longer apply to the new structure.
- **FR-025**: Site MUST remove or archive obsolete documentation that no longer applies.
- **FR-026**: Each lesson-module MUST minimise extra documentation files (ideally only claude.md, with exceptions for templates).

**Navigation**

- **FR-027**: Site sidebar MUST display themes with their labs in a clear hierarchy.
- **FR-028**: Site MUST update the course structure JSON file to reflect the new theme/lab organisation.

### Key Entities

- **Theme**: A grouping of related learning content (1-4), each focused on a specific Claude Code capability pillar.
- **Lab**: A self-contained learning experience within a theme (5 per theme), with video, instructions, and slash command.
- **Reason**: A concise, shareable content piece (6 total) explaining benefits of Claude Code productivity.
- **Slash Command**: An interactive command file that guides learners through producing outputs with Claude Code.

### Lab File Structure _(mandatory for all 20 labs)_

Each lab MUST contain these components for a consistent, Claude Code-driven learning experience:

```
lesson-modules/theme-N/lab-N-slug/
├── CLAUDE.md                    # Teaching script (Say/Check/Action blocks)
└── [supporting-materials].md    # Optional: templates, sample data (referenced via @filename)

.claude/
├── commands/tN.lbN.md           # Slash command entry point
├── course-structure.json        # Lab metadata, paths, navigation
└── SCRIPT_INSTRUCTIONS.md       # Common teaching rules (shared across all labs)
```

**Component Responsibilities:**

1. **Slash Command** (`.claude/commands/tN.lbN.md`): Entry point that silently loads course-structure.json, resolves the lab path, and initiates the teaching script. Pattern: `/t1.lb1`, `/t2.lb3`, etc.

2. **Teaching Script** (`CLAUDE.md`): The detailed learning experience with:
   - Learning objectives
   - Say blocks (verbatim instructor dialogue)
   - Check blocks (learner response gates)
   - Action blocks (Claude Code operations)
   - Success criteria
   - Common questions & answers

3. **Course Structure** (`.claude/course-structure.json`): Metadata including theme/lab IDs, titles, slugs, paths, commands, estimated duration, and navigation references.

4. **Script Instructions** (`.claude/SCRIPT_INSTRUCTIONS.md`): Shared rules for all teaching scripts (British English, no fourth-wall breaking, variable resolution, conditional blocks).

5. **Supporting Materials** (optional): Sample data, templates, or reference files required by specific labs. Referenced in CLAUDE.md via `@filename.md` syntax.

**Reference Implementation:** See `specs/001-course-restructure/reference/` for existing patterns to follow.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Learners can complete any single lab from start to finish in under 30 minutes.
- **SC-002**: All 20 labs are accessible and contain complete learning content (video, objectives, instructions, slash command).
- **SC-003**: Homepage displays hero, countdown, and CTA components above the fold on standard desktop screens.
- **SC-004**: All 6 reasons pages load correctly and include subscription CTAs.
- **SC-005**: Email subscription flow works identically to current production (201 response for new subscribers, 200 for existing).
- **SC-006**: Site navigation allows reaching any lab within 3 clicks from the homepage.
- **SC-007**: Orange accent colour matches Bitcoin orange specification across all UI elements.
- **SC-008**: Course structure JSON accurately reflects the 4-theme, 20-lab organisation.
- **SC-009**: No broken links exist from old week-based URL structure (either redirected or properly 404'd).
- **SC-010**: Each slash command executes without errors when prerequisites are met.

## Assumptions

- YouTube videos for labs will be provided or placeholders will be acceptable for initial launch.
- The existing email subscription database schema requires no changes.
- Bitcoin orange (#F7931A) is the intended colour target; slight variations acceptable.
- "Learning community" refers to a future offering; the current CTA text can reference it without implementation.
- External API integrations in Theme 4 labs will provide guidance for users to set up their own API keys.
- Labs can reference external services (Gamma, ElevenLabs, etc.) without embedding those services in the site.

## Out of Scope

- Implementation of the learning community platform itself (future project).
- Integration of external APIs directly into the site (labs guide users to use their own API connections).
- Migration of existing subscriber data (no schema changes).
- Mobile-specific responsive design changes (existing responsive behaviour retained).
- SEO optimisation beyond basic meta tags on reason pages.
