# Data Model: Immersive Learning System

**Feature Branch**: `003-immersive-learning`
**Date**: 2025-12-09

## Overview

This document defines the key entities and their relationships for the CoEngineers immersive learning system. All entities are file-based (no database required).

---

## Entity: Course Structure

**File**: `.claude/course-structure.json`
**Purpose**: Central configuration defining all weeks, days, and navigation paths

### Schema

```typescript
interface CourseStructure {
  version: string; // Semantic version (e.g., "1.0.0")
  lastUpdated: string; // ISO date (e.g., "2025-12-09")
  weeks: Week[];
}

interface Week {
  id: string; // Week number (e.g., "1", "2", "bonus")
  name: string; // Week name (e.g., "Foundations")
  description: string; // Week summary
  theme: string; // Week theme for context
  days: Day[];
}

interface Day {
  id: string; // Day ID (e.g., "1.1", "2.8", "bonus.29")
  title: string; // Day title (e.g., "First Conversation")
  slug: string; // URL-safe identifier (e.g., "first-conversation")
  path: string; // Path to CLAUDE.md teaching script
  command: string; // Slash command name (e.g., "w1.d1")
  description: string; // Brief description
  estimatedMinutes: number; // Expected completion time
  prerequisites?: string[]; // Optional list of day IDs
  supportingMaterials?: string[]; // List of supporting file paths
}
```

### Example

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-12-09",
  "weeks": [
    {
      "id": "1",
      "name": "Foundations",
      "description": "Core Claude Code mechanics and setup",
      "theme": "Getting started with confidence",
      "days": [
        {
          "id": "1.1",
          "title": "First Conversation",
          "slug": "first-conversation",
          "path": "lesson-modules/week-1/day-1-first-conversation/CLAUDE.md",
          "command": "w1.d1",
          "description": "Your first interaction with Claude Code",
          "estimatedMinutes": 20,
          "supportingMaterials": ["lesson-modules/week-1/day-1-first-conversation/learning-log.md"]
        }
      ]
    }
  ]
}
```

### Constraints

- Day IDs MUST be unique across the entire course
- Slugs MUST be URL-safe (lowercase, hyphens only)
- Commands MUST follow pattern `w{week}.d{dayNumber}`
- Paths MUST be relative to repository root
- EstimatedMinutes MUST be between 10 and 60

---

## Entity: Teaching Script

**File Pattern**: `lesson-modules/{week}/{day}/CLAUDE.md`
**Purpose**: Scripted lesson content for Claude to deliver

### Schema

```markdown
# Day {dayId}: {dayTitle}

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

[Teaching persona and style instructions]

## Learning Objectives

[3-5 measurable objectives]

## Teaching Flow

### Step 1: [Title] ({minutes} minutes)

**Say:**
"[Verbatim content]"

**Check:** [Gate condition - learner must respond before continuing]

**Action:**
[Commands to execute]

**Present it like this:**
[Output formatting guidance]

### Step 2: [Title] ({minutes} minutes)

[Continue pattern...]

---

## Common Questions & Answers

### Q: [Common question]?

**A:** [Helpful response that redirects to script]

---

## Success Criteria

[How to evaluate module completion]
```

### Constraints

- MUST include "Your Role" section
- MUST include "Learning Objectives" section
- MUST include at least 3 "Check:" points
- MUST include "Success Criteria" section
- Say blocks MUST be in quotation marks
- Check blocks MUST specify exact wait condition
- Action blocks MUST use valid Claude Code commands

---

## Entity: Supporting Material

**File Pattern**: `lesson-modules/{week}/{day}/*.md`
**Purpose**: Realistic documents used in exercises

### Types

| Type                 | Purpose              | Example Filename           |
| -------------------- | -------------------- | -------------------------- |
| Meeting Notes        | Raw notes to process | `meeting-notes-raw.md`     |
| Interview Transcript | User research data   | `interview-maya.md`        |
| Email                | Communication sample | `email-thread.md`          |
| Template             | Reusable format      | `learning-log-template.md` |
| Example Output       | Reference output     | `example-output.md`        |
| Product Doc          | Product context      | `prp-template.md`          |
| Brief                | Creative input       | `presentation-brief.md`    |

### Schema

```markdown
# [Document Title]

[Optional metadata as HTML comment]

<!-- Type: Meeting Notes -->
<!-- Context: Product sync, 2024-Q4 -->
<!-- Realism Level: High (messy) -->

[Document content...]
```

### Constraints

- MUST use .md extension (not .txt)
- MUST be realistic (not perfect/polished)
- MUST be self-contained (no external dependencies)
- Meeting notes SHOULD be messy with typos, abbreviations
- Interview transcripts SHOULD include conversational markers

---

## Entity: Company Context

**File Location**: `company-context/`
**Purpose**: Fictional company background for exercises

### Files

| File             | Purpose               | Key Sections                           |
| ---------------- | --------------------- | -------------------------------------- |
| `COMPANY.md`     | Company overview      | Background, Mission, Team, Stage       |
| `PRODUCT.md`     | Product details       | Features, Roadmap, Metrics, Tech Stack |
| `PERSONAS.md`    | User personas         | 3+ detailed personas with JTBD         |
| `COMPETITIVE.md` | Competitive landscape | Competitors, Positioning, Win/Loss     |

### COMPANY.md Schema

```markdown
# CoEngine Company Overview

## Company Background

**Founded:** [Year]
**Headquarters:** [Location]
**Stage:** [Funding stage]
**Employees:** [Number]

### Team Structure

[Org chart with key people]

## Company Mission

**Mission:** [One sentence]
**Vision:** [One sentence]
**Values:** [3-5 values]

## Your Role

[Learner's role in the company]
[What they own]
[Their stakeholders]
```

### PERSONAS.md Schema

```markdown
# CoEngine User Personas

## Persona 1: [Name] ([Role])

### Quick Facts

**Age:** [Number]
**Role:** [Title]
**Company Type:** [Description]
**Plan:** [Product tier]

### Goals & Motivations

[3-5 primary goals]

### Pain Points

[3-5 frustrations]

### Jobs to be Done

**When...** [context] **I want to...** [action] **so that...** [outcome]

### Features They Care About

**Must-haves:** [List]
**Nice-to-haves:** [List]
**Don't care about:** [List]

### Quotes

"[Characteristic quote]"
```

### Constraints

- MUST define at least 3 personas
- Personas MUST be consistent across all company context files
- Product metrics MUST be realistic but fictional
- Competitive analysis MUST reference real-world competitors
- Team members MUST be named and referenceable in exercises

---

## Entity: Slash Command

**File Pattern**: `.claude/commands/w{week}.d{day}.md`
**Purpose**: Thin launcher to load teaching script

### Schema

```markdown
# Day {dayNumber}: {dayTitle} - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract day/week ID:
   - Command name: "{commandName}" → Day ID: "{dayId}"
   - Pattern: w{week}.d{day}

2. Read `.claude/course-structure.json` to find the day with ID "{dayId}"

3. Get the teaching script path from the config

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions

6. Follow the teaching script PRECISELY as instructed
   - Execute "Say:" blocks word-for-word
   - Stop at "Check:" points and wait
   - Run "Action:" blocks exactly as specified
   - Start teaching immediately (no meta-commentary)

7. For navigation references, use dynamic variables:
   - {nextCommand} → next lesson command
   - {nextDayTitle} → next lesson title
   - Wrap in conditionals: {ifNotLastInCourse:...}
```

### Constraints

- MUST NOT contain teaching content (only launcher logic)
- MUST reference SCRIPT_INSTRUCTIONS.md
- MUST parse day ID from command name
- MUST be identical structure for all 31 commands

---

## Entity: Script Instructions

**File**: `.claude/SCRIPT_INSTRUCTIONS.md`
**Purpose**: Global teaching rules for Claude

### Schema

```markdown
# Script Instructions for Claude Code Teaching Scripts

## Critical Rules

[Core behaviour requirements]

## No Fourth-Wall Breaking

[What to never say]

## Teaching Flow

[How to interpret Say/Check/Action blocks]

## Dynamic Variables System

[Variable definitions and resolution]

## Conditional Blocks

[Position-aware content patterns]

## Example Files and Extensions

[File format requirements]
```

### Constraints

- MUST define all dynamic variables
- MUST define all conditional block types
- MUST include "what never to say" examples
- MUST include "what always to do" examples
- MUST explain Check point gate behaviour

---

## Entity Relationships

```
course-structure.json
    │
    ├── contains → Week[]
    │                 │
    │                 └── contains → Day[]
    │                                  │
    │                                  ├── references → CLAUDE.md (teaching script)
    │                                  │
    │                                  └── lists → Supporting Materials[]
    │
    └── referenced by → Slash Commands (for navigation)

company-context/
    │
    ├── COMPANY.md (referenced in Week 1 intro)
    ├── PERSONAS.md (referenced in PM exercises)
    ├── PRODUCT.md (referenced in feature exercises)
    └── COMPETITIVE.md (referenced in competitive exercises)

SCRIPT_INSTRUCTIONS.md
    │
    └── referenced by → All Teaching Scripts (CLAUDE.md)
```

---

## File Naming Conventions

| Entity              | Convention              | Example                     |
| ------------------- | ----------------------- | --------------------------- |
| Week Folder         | `week-{n}`              | `week-1`, `week-2`, `bonus` |
| Day Folder          | `day-{n}-{slug}`        | `day-1-first-conversation`  |
| Teaching Script     | `CLAUDE.md`             | (always uppercase)          |
| Supporting Material | `{descriptive-name}.md` | `meeting-notes-raw.md`      |
| Slash Command       | `w{week}.d{day}.md`     | `w1.d1.md`, `w2.d8.md`      |
| Company Context     | `{NAME}.md`             | `COMPANY.md` (uppercase)    |

---

## Validation Rules

1. **Course Structure**
   - All day IDs must be unique
   - All paths must exist
   - All commands must have corresponding slash command files

2. **Teaching Scripts**
   - Must contain at least 3 Check points
   - Must include Success Criteria section
   - All @file references must exist in day folder

3. **Supporting Materials**
   - Must use .md extension
   - Must be in same folder as CLAUDE.md or referenced via path

4. **Slash Commands**
   - Command filename must match config command value
   - Must follow thin launcher pattern
