# Feature Specification: Immersive Learning System

**Feature Branch**: `003-immersive-learning`
**Created**: 2025-12-09
**Status**: Draft
**Input**: User description: "Reinvent the learning experience to match the quality and intuitiveness of the ccforpms.com inspiration, with meta-command system, teaching scripts, lesson modules, company context, and config-driven architecture"

## Overview

Transform the CoEngineers 31-day Claude Code course from flat, self-contained slash commands into an immersive, guided learning experience with:

1. **Meta-command system** - Thin launcher commands that load detailed teaching scripts
2. **Teaching scripts (CLAUDE.md)** - Scripted lessons with dialogue, checkpoints, and actions
3. **Lesson modules** - Folder structure with supporting materials for each day
4. **Company context** - Fictional company learners work for throughout the course
5. **Config-driven architecture** - JSON structure enabling reordering without breaking links

### Current State Analysis

**What exists now:**

- 31 flat slash commands (w1.d1.md through bonus.d31.md)
- Commands ask questions before generating output
- No supporting materials (meeting notes, interviews, etc.)
- No company context or personas
- No scripted teaching flow with checkpoints
- Commands are self-contained with no external dependencies

**What the inspiration has:**

- Meta-commands that parse module IDs and load teaching scripts
- CLAUDE.md files with "Say:", "Check:", "Action:" blocks
- SCRIPT_INSTRUCTIONS.md with critical teaching rules
- course-structure.json for config-driven navigation
- company-context/ folder with COMPANY.md, PRODUCT.md, PERSONAS.md, COMPETITIVE.md
- lesson-modules/ folders with supporting materials per lesson
- Dynamic variables ({moduleId}, {nextCommand}, etc.) for reorderability
- Conditional blocks for position-aware content

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Complete a Guided Lesson (Priority: P1)

A learner runs a slash command (e.g., `/w1.d1`) and experiences a fully guided, interactive lesson that feels like having a personal tutor walk them through the material step-by-step.

**Why this priority**: This is the core learning experience. Without guided lessons, the course is just a collection of prompts. The teaching scripts are what transform information into education.

**Independent Test**: Can be fully tested by running any lesson command and verifying Claude delivers scripted content, waits at checkpoints, and executes actions in sequence.

**Acceptance Scenarios**:

1. **Given** a learner runs `/w1.d1`, **When** the command executes, **Then** Claude reads the teaching script and begins with the "Say:" content without meta-commentary about reading files
2. **Given** a teaching script has a "Check:" point, **When** Claude reaches that point, **Then** Claude stops and waits for the specific learner response before continuing
3. **Given** a teaching script has an "Action:" block, **When** Claude reaches that point, **Then** Claude executes the specified command or file operation
4. **Given** the learner asks an off-topic question mid-lesson, **When** Claude answers, **Then** Claude returns to the script at the appropriate checkpoint

---

### User Story 2 - Work with Realistic Supporting Materials (Priority: P1)

A learner works with realistic PM materials (meeting notes, user interviews, product docs) that feel like actual work documents, not contrived examples.

**Why this priority**: The inspiration's power comes from realistic materials that make learners feel like they're doing real PM work. Without supporting materials, exercises feel hollow.

**Independent Test**: Can be tested by verifying each lesson module folder contains appropriate supporting materials that Claude references during teaching.

**Acceptance Scenarios**:

1. **Given** a lesson involves meeting notes, **When** the learner reaches that part of the lesson, **Then** realistic, messy meeting notes exist in the lesson-modules folder
2. **Given** a lesson involves user research, **When** the learner reaches synthesis tasks, **Then** multiple realistic interview transcripts exist to analyse
3. **Given** supporting materials exist, **When** Claude references them with @filename, **Then** the files exist and contain relevant, realistic content

---

### User Story 3 - Navigate Course Progression (Priority: P2)

A learner completes a lesson and receives clear guidance on what's next, including dynamic references to the next module that work regardless of course reordering.

**Why this priority**: Course navigation keeps learners oriented and motivated. Config-driven navigation allows curriculum updates without breaking the experience.

**Independent Test**: Can be tested by completing any lesson and verifying the outro correctly references the next lesson using dynamic variables resolved from course-structure.json.

**Acceptance Scenarios**:

1. **Given** a learner completes a lesson, **When** Claude delivers the outro, **Then** the next module title and command are correctly resolved from config
2. **Given** a lesson is reordered in course-structure.json, **When** the lesson is run, **Then** all navigation references update automatically
3. **Given** a learner is at the last lesson of a week, **When** they complete it, **Then** special messaging celebrates week completion and previews the next week

---

### User Story 4 - Understand Company Context (Priority: P2)

A learner understands and can reference the fictional company (CoEngine - a Claude Code productivity startup) throughout all lessons, creating a cohesive narrative.

**Why this priority**: Company context transforms disconnected exercises into a coherent PM simulation. Learners build familiarity with personas, product, and competitive landscape.

**Independent Test**: Can be tested by verifying company context files exist and are referenced in teaching scripts where appropriate.

**Acceptance Scenarios**:

1. **Given** the course begins, **When** a learner starts Week 1, **Then** they are introduced to the fictional company and their role
2. **Given** a lesson involves personas, **When** the learner needs to consider user needs, **Then** pre-defined personas are available and consistent across lessons
3. **Given** a lesson involves competitive analysis, **When** the learner researches competitors, **Then** pre-defined competitive context is available

---

### User Story 5 - Reuse Communication Styles (Priority: P3)

A learner creates and reuses communication style templates for consistent output formatting across different audiences (Slack, email, documentation).

**Why this priority**: Communication styles demonstrate Claude Code's power for PM workflows but are a secondary concern to core teaching functionality.

**Independent Test**: Can be tested by creating a style template once and verifying it's applied correctly to multiple outputs.

**Acceptance Scenarios**:

1. **Given** pre-defined communication styles exist, **When** a learner requests content transformation, **Then** Claude applies the appropriate style consistently
2. **Given** a learner creates a custom style, **When** they reference it in future prompts, **Then** the style is applied to new content

---

### Edge Cases

- What happens when a learner skips ahead to a lesson that assumes prior knowledge? Claude should gently note the dependency but allow progression
- How does the system handle learners asking to repeat content? Claude should be able to revisit any "Say:" block on request
- What if supporting materials are accidentally deleted? Claude should gracefully handle missing files with informative error messages
- How does the system handle learners who want to modify the teaching pace? Check points can be acknowledged with various responses (not just exact matches)

## Requirements _(mandatory)_

### Functional Requirements

**Meta-Command System**:

- **FR-001**: Each day's slash command MUST be a thin launcher that parses the day/week ID and loads the corresponding teaching script
- **FR-002**: Slash commands MUST follow a consistent naming pattern (e.g., `/w1.d1`, `/w2.d8`)
- **FR-003**: The meta-command MUST silently read teaching materials without announcing the process

**Teaching Scripts**:

- **FR-004**: Each lesson MUST have a CLAUDE.md teaching script in its lesson-modules folder
- **FR-005**: Teaching scripts MUST use "Say:" blocks for content Claude delivers verbatim
- **FR-006**: Teaching scripts MUST use "Check:" blocks as gates that require learner response before continuing
- **FR-007**: Teaching scripts MUST use "Action:" blocks for commands Claude executes
- **FR-008**: Teaching scripts MUST include learning objectives, success criteria, and common Q&A sections
- **FR-009**: A SCRIPT_INSTRUCTIONS.md file MUST exist defining how Claude interprets teaching scripts

**Course Structure**:

- **FR-010**: A course-structure.json MUST define all weeks, days, titles, and paths
- **FR-011**: Teaching scripts MUST use dynamic variables ({dayId}, {weekId}, {nextCommand}) resolved from config
- **FR-012**: Conditional blocks MUST support position-aware content ({ifFirstInWeek:...}, {ifLastInCourse:...})

**Supporting Materials**:

- **FR-013**: Each lesson module MUST have a folder containing all referenced supporting materials
- **FR-014**: Supporting materials MUST use .md extension for Obsidian compatibility
- **FR-015**: Supporting materials MUST feel realistic and professionally written

**Company Context**:

- **FR-016**: Company context files MUST exist defining the fictional company, product, personas, and competitive landscape
- **FR-017**: Company context MUST be introduced in Week 1 and referenced throughout the course
- **FR-018**: Personas MUST be consistent across all lessons that reference them

### Key Entities

- **Lesson Module**: A day's complete learning package (teaching script + supporting materials)
- **Teaching Script**: The CLAUDE.md file that scripts Claude's behaviour for a lesson
- **Supporting Material**: Realistic PM documents (meeting notes, interviews, product docs) used in exercises
- **Company Context**: The fictional company narrative (company info, product, personas, competitors)
- **Course Structure**: The JSON configuration defining navigation and module relationships

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: All 31 lessons have teaching scripts with at least 3 "Check:" points each
- **SC-002**: Each week has at least 5 supporting material files for exercises
- **SC-003**: Company context covers company overview, 3+ personas, product details, and competitive landscape
- **SC-004**: Navigation references work correctly when lessons are reordered in config
- **SC-005**: Learners can complete any lesson end-to-end without Claude breaking character or referencing "the script"
- **SC-006**: Teaching scripts achieve the same intuitive, guided feel as the ccforpms.com inspiration

## Assumptions

- Learners have Claude Code installed and working
- Learners have basic familiarity with their terminal
- The course repository structure allows for lesson-modules/ folder organisation
- Teaching scripts can reference files using @ syntax
- Claude can be instructed to follow verbatim scripts through proper prompting
- British English is used throughout all materials

## Dependencies

- Existing course content in src/content/docs/ provides learning objectives and topics for each day
- The inspiration materials in research/inspiration/ provide the reference architecture
- Starlight/Astro site continues to serve as the course "textbook" with MDX pages
- Slash commands in .claude/commands/ must be refactored to become meta-launchers

## Out of Scope

- Video content creation or embedding
- Assessment/quiz functionality
- Progress tracking across sessions
- Multi-user or cohort features
- Certification or completion tracking
- Changes to the Astro/Starlight documentation site structure
