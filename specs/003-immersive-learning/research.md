# Research: Immersive Learning System

**Feature Branch**: `003-immersive-learning`
**Date**: 2025-12-09
**Status**: Complete

## Research Summary

This document consolidates findings from analysing the ccforpms.com inspiration materials to inform the implementation of CoEngineers' immersive learning system.

---

## 1. Teaching Script Patterns

### Decision: Use Say/Check/Action block format

**Rationale**: The inspiration materials use a clear, consistent pattern that Claude can interpret reliably:

- **"Say:" blocks** → Content Claude outputs verbatim to the learner
- **"Check:" points** → Gates where Claude STOPS and WAITS for learner response
- **"Action:" blocks** → Commands Claude executes (file operations, searches)
- **"Present it like this:" blocks** → Output formatting guidance

**Alternatives considered**:

- Free-form teaching scripts (rejected: too inconsistent, hard to maintain)
- Markdown headings only (rejected: no clear execution semantics)
- YAML/JSON structured scripts (rejected: harder to write, less readable)

### Key Implementation Details

Each teaching script MUST include:

```markdown
# Module {moduleId}: {moduleTitle}

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions.

---

## Your Role

[Teaching style, persona, tone]

## Module Learning Objectives

[What learners will achieve]

## Teaching Flow

### Step 1: [Title] (X minutes)

**Say:**
"[Verbatim content for Claude to deliver]"

**Check:** Wait for [specific learner action]

**Action:**
[Command to execute]

**Present it like this:**
[Output formatting guidance]

## Common Student Questions & Answers

[Q&A section for handling deviations]

## Success Criteria

[How to know the module succeeded]
```

---

## 2. Course Structure JSON Schema

### Decision: Config-driven navigation with dynamic variables

**Rationale**: Enables curriculum updates without editing 31+ teaching scripts. One source of truth.

**Schema**:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-12-09",
  "weeks": [
    {
      "id": "1",
      "name": "Foundations",
      "description": "Core Claude Code mechanics",
      "days": [
        {
          "id": "1.1",
          "title": "First Conversation",
          "slug": "first-conversation",
          "path": "lesson-modules/week-1/day-1-first-conversation/CLAUDE.md",
          "command": "w1.d1",
          "description": "Introduction to Claude Code",
          "estimatedMinutes": 20
        }
      ]
    }
  ]
}
```

### Dynamic Variables

| Variable         | Description         | Example              |
| ---------------- | ------------------- | -------------------- |
| `{dayId}`        | Current day number  | "1.1"                |
| `{dayTitle}`     | Current day title   | "First Conversation" |
| `{weekId}`       | Current week number | "1"                  |
| `{weekName}`     | Current week name   | "Foundations"        |
| `{nextDayId}`    | Next day number     | "1.2"                |
| `{nextDayTitle}` | Next day title      | "Your Digital Home"  |
| `{nextCommand}`  | Next slash command  | "w1.d2"              |
| `{prevDayId}`    | Previous day number | "" (empty if first)  |
| `{prevDayTitle}` | Previous day title  | ""                   |

### Conditional Blocks

```markdown
{ifFirstInCourse:...} # Only day 1.1
{ifNotFirstInCourse:...} # All days except 1.1
{ifFirstInWeek:...} # First day of any week
{ifLastInWeek:...} # Last day of any week (review days)
{ifLastInCourse:...} # Final day (bonus.d31)
{ifNotLastInCourse:...} # All except final day
```

---

## 3. Company Context Design

### Decision: Create "CoEngine" - a Claude Code productivity startup

**Rationale**: The inspiration uses TaskFlow (project management). CoEngine is more relevant to a Claude Code course - learners work on features for a tool they're learning about.

### CoEngine Company Profile

| Attribute     | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| **Name**      | CoEngine                                                         |
| **Founded**   | 2024                                                             |
| **Stage**     | Seed ($3M raised)                                                |
| **Employees** | 15 people                                                        |
| **Product**   | Claude Code productivity plugins and workflows                   |
| **Mission**   | Empower professionals to 10x their productivity with Claude Code |

### CoEngine Personas

| Persona               | Role                   | Key Needs                                   |
| --------------------- | ---------------------- | ------------------------------------------- |
| **Maya (Power User)** | Senior Product Manager | Advanced workflows, automation, efficiency  |
| **Tom (Newcomer)**    | Marketing Manager      | Simple setup, templates, quick wins         |
| **Sara (Technical)**  | Data Analyst           | Custom commands, data processing, scripting |

### Company Context Files

```
company-context/
├── COMPANY.md       # Company overview, mission, team structure
├── PRODUCT.md       # Product features, roadmap, positioning
├── PERSONAS.md      # 3 user personas with detailed profiles
└── COMPETITIVE.md   # Competitive landscape (other AI tools)
```

**Alternatives considered**:

- Using TaskFlow directly (rejected: creates confusion with inspiration source)
- Generic company context (rejected: less engaging, harder to relate to)
- No company context (rejected: exercises feel disconnected)

---

## 4. Week Themes Alignment

### Decision: Map existing MDX content to lesson module requirements

**Current Week Structure** (from src/content/docs/):

| Week  | Theme              | Days  |
| ----- | ------------------ | ----- |
| 1     | Foundations        | 1-7   |
| 2     | Content Processing | 8-14  |
| 3     | Creative Outputs   | 15-21 |
| 4     | Building Software  | 22-28 |
| Bonus | Capstone           | 29-31 |

### Supporting Materials per Week

**Week 1: Foundations** (setup, basic skills)

- Learning log templates
- Project setup files
- Configuration examples

**Week 2: Content Processing** (input → output)

- Meeting note samples (messy, realistic)
- User interview transcripts (8-10 interviews)
- Email dumps for processing
- PDF samples
- Voice memo transcriptions

**Week 3: Creative Outputs** (generation)

- Presentation briefs
- Image prompt examples
- Social media content samples
- Diagram specifications

**Week 4: Building Software** (development workflow)

- Product requirements documents
- User story templates
- Test case examples
- Documentation templates

**Bonus: Capstone**

- Comprehensive project brief
- Cross-week integration exercises

### Supporting Material Volume

| Week  | Minimum Files | Types                              |
| ----- | ------------- | ---------------------------------- |
| 1     | 5             | Templates, configs                 |
| 2     | 15            | Meeting notes, interviews, emails  |
| 3     | 10            | Briefs, examples, specifications   |
| 4     | 8             | PRDs, stories, test cases          |
| Bonus | 3             | Project briefs, integration guides |

---

## 5. SCRIPT_INSTRUCTIONS.md Design

### Decision: Comprehensive instruction file for Claude behaviour

**Key Sections**:

1. **Critical Rules** - Follow scripts precisely
2. **No Fourth-Wall Breaking** - Never mention "the script"
3. **Teaching Flow** - How to interpret Say/Check/Action
4. **Dynamic Variables** - How to resolve variables from config
5. **Conditional Blocks** - How to evaluate position-aware content
6. **File Extensions** - Always .md for Obsidian compatibility
7. **Error Handling** - How to handle learner deviations

**Character Guidelines**:

- Stay in teacher persona throughout
- British English, warm tone
- Encouraging but not condescending
- Answer questions naturally, return to script

---

## 6. Meta-Command System

### Decision: Thin launcher pattern

**Pattern**:

```markdown
# Day [X]: [Title] - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract day/week ID:
   - Command name: "w1.d1" → Day ID: "1.1"
   - Pattern: w{week}.d{day}

2. Read `course-structure.json` to find the day with this ID

3. Get the teaching script path from the config

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions

6. Follow the teaching script PRECISELY as instructed
   - Execute "Say:" blocks word-for-word
   - Stop at "Check:" points and wait
   - Run "Action:" blocks exactly as specified
   - Start teaching immediately (no meta-commentary)
```

**Benefits**:

- Commands stay tiny and consistent
- Teaching content lives in CLAUDE.md files
- Easy to update curriculum without touching commands
- Config-driven navigation works seamlessly

---

## 7. Folder Structure Decision

### Decision: lesson-modules at repository root

**Structure**:

```
lesson-modules/
├── week-1/
│   ├── day-1-first-conversation/
│   │   ├── CLAUDE.md              # Teaching script
│   │   ├── learning-log.md        # Template
│   │   └── example-output.md      # Sample
│   ├── day-2-your-digital-home/
│   │   ├── CLAUDE.md
│   │   └── project-setup.md
│   └── ...
├── week-2/
│   ├── day-8-meeting-tamer/
│   │   ├── CLAUDE.md
│   │   ├── meeting-notes-raw.md
│   │   ├── meeting-notes-2.md
│   │   └── meeting-notes-3.md
│   └── ...
└── ...
```

**Rationale**:

- Clear separation from web content (src/content/docs/)
- Self-contained lesson folders
- Easy to navigate and maintain
- Matches inspiration structure

---

## 8. British English Guidelines

### Decision: Document specific British conventions for consistency

**Spelling**:

- colour (not color)
- organisation (not organization)
- behaviour (not behavior)
- catalogue (not catalog)
- programme (not program, except for computer programs)
- analyse (not analyze)
- recognise (not recognize)

**Terminology**:

- "pop this in" (not "go ahead and add")
- "have a look" (not "take a look")
- "brilliant" (not "awesome")
- "whilst" acceptable (though "while" also fine)
- "learner" preferred over "student"

**Tone**:

- Informal but professional
- Warm, encouraging
- Self-deprecating humour acceptable
- Avoid corporate speak

---

## Research Sources

1. `/research/inspiration/course-materials/.claude/SCRIPT_INSTRUCTIONS.md` - Teaching script interpretation rules
2. `/research/inspiration/course-materials/.claude/commands/start-*.md` - Meta-command pattern
3. `/research/inspiration/course-materials/lesson-modules/*/CLAUDE.md` - Teaching script examples
4. `/research/inspiration/course-materials/company-context/*.md` - Company context structure
5. `/research/inspiration/course-materials/course-structure.json` - Navigation config schema

---

## Next Steps

1. Generate `data-model.md` defining all entities
2. Generate `quickstart.md` for lesson creation workflow
3. Proceed to `/speckit.tasks` for task generation
