# Implementation Plan: Immersive Learning System

**Branch**: `003-immersive-learning` | **Date**: 2025-12-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-immersive-learning/spec.md`

## Summary

Transform CoEngineers from flat slash commands into an immersive, guided learning experience matching the ccforpms.com inspiration. This involves creating a meta-command system, teaching scripts with Say/Check/Action blocks, lesson modules with supporting materials, company context, and config-driven course navigation.

## Technical Context

**Language/Version**: Markdown (.md), JSON, Claude Code slash commands
**Primary Dependencies**: Claude Code CLI, file system operations
**Storage**: File-based (lesson-modules/, company-context/, course-structure.json)
**Testing**: Manual testing via running slash commands and verifying teaching flow
**Target Platform**: Claude Code CLI (terminal-based)
**Project Type**: Content/documentation (no code compilation)
**Performance Goals**: N/A (content-driven, no runtime performance requirements)
**Constraints**: All content must use British English, teaching scripts must follow Say/Check/Action patterns
**Scale/Scope**: 31 lessons across 5 weeks, ~100+ supporting material files, 4 company context files

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Principle                                      | Status  | Evidence                                                                                                   |
| ---------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| **I. Learner-First Design**                    | ✅ PASS | Feature explicitly prioritises guided learning with checkpoints, realistic materials, and encouraging tone |
| **II. British English Throughout**             | ✅ PASS | Spec explicitly requires British English in all materials                                                  |
| **III. Progressive Disclosure**                | ✅ PASS | Course structure maintains week themes, day-by-day progression, config-driven navigation                   |
| **IV. Interactive Learning (Tool-as-Teacher)** | ✅ PASS | Core feature: teaching scripts with Say:/Check:/Action: blocks, no fourth-wall breaks                      |
| **V. Spec-Driven Development**                 | ✅ PASS | This plan follows spec → plan → tasks → implement workflow                                                 |

**Content Standards Compliance**:

- ✅ Slash commands will follow `w[week].d[day]` naming convention
- ✅ Commands will be thin launchers loading CLAUDE.md teaching scripts
- ✅ Dynamic variables for navigation (no hardcoded module numbers)
- ✅ Supporting materials use .md extension

**Gate Result**: PASSED - Proceed to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/003-immersive-learning/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # N/A for content-only feature
```

### Source Code (repository root)

```text
# Content Structure (new)
lesson-modules/
├── week-1/
│   ├── day-1-first-conversation/
│   │   ├── CLAUDE.md                    # Teaching script
│   │   └── [supporting-materials]/      # Day-specific files
│   ├── day-2-your-digital-home/
│   │   ├── CLAUDE.md
│   │   └── [supporting-materials]/
│   └── ... (7 days per week)
├── week-2/
├── week-3/
├── week-4/
└── bonus/

company-context/
├── COMPANY.md           # Company overview, mission, stage
├── PRODUCT.md           # Product details, features, positioning
├── PERSONAS.md          # 3+ user personas
└── COMPETITIVE.md       # Competitive landscape

.claude/
├── commands/
│   ├── w1.d1.md         # Meta-launcher (refactored)
│   ├── w1.d2.md
│   └── ... (31 commands)
├── SCRIPT_INSTRUCTIONS.md   # Teaching script interpretation rules
└── course-structure.json    # Config-driven navigation

# Existing (unchanged)
src/content/docs/          # Astro/Starlight MDX pages (textbook)
```

**Structure Decision**: Content-only structure. No src/ code changes - this feature creates the interactive lesson infrastructure that sits alongside the existing documentation site.

## Complexity Tracking

> No violations - this feature aligns with all constitutional principles.

| Aspect                   | Complexity  | Justification                         |
| ------------------------ | ----------- | ------------------------------------- |
| 31 teaching scripts      | High volume | Required for complete course coverage |
| Supporting materials     | High volume | Required for realistic PM simulation  |
| Config-driven navigation | Moderate    | Required for reorderability per spec  |

## Phase 0: Research Topics

1. **Teaching script patterns** - Analyse ccforpms.com inspiration for exact Say/Check/Action syntax
2. **Course structure JSON** - Define schema for config-driven navigation with dynamic variables
3. **Company context design** - Define CoEngine (fictional company) with appropriate personas
4. **Week themes alignment** - Map existing MDX content to lesson module requirements

## Phase 1: Design Outputs

1. **data-model.md** - Define entities: Lesson Module, Teaching Script, Supporting Material, Course Structure
2. **quickstart.md** - How to run a lesson, how to create a new lesson module
3. **contracts/** - N/A (no API contracts for content feature)
