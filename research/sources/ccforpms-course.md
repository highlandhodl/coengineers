# Claude Code for PMs Course Analysis

**Source**: https://ccforpms.com
**Repository**: https://github.com/carlvellotti/claude-code-pm-course
**Creator**: Carl Vellotti

## Overview

An interactive course teaching Product Managers to leverage Claude Code as a professional tool. The curriculum spans approximately 4-6 hours and covers fundamental through advanced PM scenarios.

## Key Innovation: Tool-as-Teacher

The course's defining characteristic is that **Claude Code itself is both the subject and the delivery mechanism**. Students:

1. Install Claude Code
2. Clone the course repository
3. Type `/start-1-1` to begin
4. Receive instruction directly from Claude

This immersive approach means learners start executing commands immediately rather than reading theory.

## Course Structure

### Module 0: Getting Started
- Installation and environment setup
- Repository cloning
- Initial configuration

### Module 1: Claude Code Fundamentals (7 lessons)
Core capabilities taught through "TaskFlow" practice exercises:

| Lesson | Topic |
|--------|-------|
| 1.1 | File operations (read, write, edit) |
| 1.2 | File visualisation via Obsidian |
| 1.3 | Parallel agent workflows |
| 1.4 | Custom AI personas (sub-agents) |
| 1.5 | Project memory (CLAUDE.md) |
| 1.6 | Navigation techniques |
| 1.7 | @ mentions for context |

### Module 2: Advanced PM Scenarios (3 lessons)
Applied professional tasks:

| Lesson | Topic |
|--------|-------|
| 2.1 | PRD writing with multi-perspective feedback |
| 2.2 | Data analysis for product decisions |
| 2.3 | Strategic planning and competitive analysis |

## Technical Architecture

### Config-Driven System

A single `course-structure.json` file controls:
- Module definitions
- Slash command routing
- Website navigation
- Teaching script navigation

This enables adding or reordering modules by editing one JSON file without renaming folders or updating individual files.

### Slash Command Structure

Commands are **identical files** that parse their own command names to load the correct teaching script:

```
.claude/commands/
├── start-1-1.md
├── start-1-2.md
├── start-1-3.md
└── ...
```

Each command:
1. Parses its own filename
2. Loads corresponding teaching script
3. Delivers lesson content

### Teaching Scripts

Scripts follow strict formatting:

- **"Say:" blocks** - Claude reads verbatim to student
- **"Check:" points** - Gates requiring student response before continuing
- **"Do:" instructions** - Actions Claude should take

Example pattern:
```markdown
Say: "Welcome to lesson 1.1. Today we'll learn about file operations."

Check: Does the student have a project folder ready?

Do: Create a sample file to demonstrate read operations.

Say: "Now let's read that file back..."
```

## Key Capabilities Taught

### File Operations
- Direct reading, writing, and editing
- Working with multiple files simultaneously
- Maintaining file context across operations

### Parallel Processing
The course demonstrates launching multiple Claude instances simultaneously:
- Process 10 meeting transcripts in 5 minutes (vs 50 minutes serially)
- Gather research from multiple sources concurrently
- Run independent analyses in parallel

### Custom Sub-Agents
Create specialised reviewers with distinct perspectives:
- Engineer perspective
- Executive perspective
- User Researcher perspective

Each provides unique feedback on the same document.

### Project Memory (CLAUDE.md)
Persistent context files that maintain project knowledge:
- Project overview and goals
- Technology stack
- Coding conventions
- Key decisions and rationale

### Visual Processing
Support for images, screenshots, and mockups:
- Analyse UI designs
- Review data visualisations
- Process diagrams

## Professional Deliverables

The course culminates in creating real PM artifacts:

| Deliverable | Method |
|-------------|--------|
| PRDs | Socratic questioning + multi-perspective review |
| Data analysis | Product funnel and A/B test analysis |
| Competitive research | Parallel research synthesis |
| Meeting summaries | Transcript processing with action extraction |

## Requirements

- Claude Pro or Max subscription
- Basic PM knowledge
- **No coding experience required** (explicitly accessible to non-technical PMs)

## Release Management

The course uses GitHub Releases for versioning:
1. Changes made to `course-materials/`
2. Commit and push to main
3. Run `./scripts/create-release.sh v1.0.X`
4. Create GitHub release with zip file

Version scheme:
- Patch (v1.0.X) - Bug fixes
- Minor (v1.X.0) - New modules
- Major (vX.0.0) - Restructuring

## Lessons for CoEngineers

1. **Interactive delivery works** - Tool-as-teacher creates engagement
2. **Config-driven architecture** - Single source of truth simplifies maintenance
3. **Gated progression** - Check points ensure understanding before advancing
4. **Multi-perspective feedback** - Different viewpoints improve outputs
5. **Parallel processing** - Dramatic efficiency gains possible
6. **No coding required** - Accessible to non-technical learners

## Licence

CC BY-NC-ND 4.0 (attribution required; no commercial or derivative works)

---

*Analysed December 2025 for CoEngineers research*
