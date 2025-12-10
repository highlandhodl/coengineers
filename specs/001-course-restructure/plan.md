# Implementation Plan: Course Restructure - Theme-Based Obsidian Productivity

**Branch**: `001-course-restructure` | **Date**: 2025-12-10 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-course-restructure/spec.md`

## Summary

Transform the existing 31-day week-based course into a focused 4-theme structure with 20 Obsidian productivity labs. The restructure emphasises the three pillars of Claude Code: LLM capabilities, OS driver (Obsidian focus), and external tool integration (Gamma, Gemini, ElevenLabs APIs). Labs will maintain the existing interactive teaching pattern (Say/Check/Action blocks) whilst consolidating from 31 days to 20 focused, self-contained labs. Supporting infrastructure includes 6 "reasons" content pages for social sharing and a simplified landing page with countdown/CTA for Christmas launch.

## Technical Context

**Language/Version**: TypeScript 5.x (via Astro 5.1)
**Primary Dependencies**: Astro, @astrojs/starlight, @supabase/supabase-js, Resend
**Storage**: Supabase PostgreSQL (existing schema unchanged), JSON (course-structure.json)
**Testing**: Vitest (existing tests will be archived/removed as per FR-024)
**Target Platform**: Static site hosted on Vercel (existing infrastructure)
**Project Type**: Web application (static site with serverless API endpoints)
**Performance Goals**: Labs completable in <30 minutes each (SC-001), navigation to any lab in ≤3 clicks (SC-006)
**Constraints**: No schema changes to subscribers/email_sends tables, British English throughout
**Scale/Scope**: 20 labs across 4 themes, 6 reasons pages, simplified landing page

**External API Integrations** (Theme 4 Labs - guidance-only, not embedded):
- **Gamma API**: Presentation generation from Obsidian notes
- **Gemini API**: Image generation from text prompts
- **ElevenLabs API**: Text-to-speech audio generation

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Principle | Status | Notes |
|-----------|--------|-------|
| **I. Learner-First Design** | ✅ PASS | Labs are self-contained, completable in <30 min, no jargon |
| **II. British English Throughout** | ✅ PASS | All content uses British spellings (colour, organisation, behaviour) |
| **III. Progressive Disclosure** | ✅ PASS | 4 themes build logically: workspace → content → documents → APIs |
| **IV. Interactive Learning (Tool-as-Teacher)** | ✅ PASS | Retaining Say/Check/Action pattern in all CLAUDE.md scripts |
| **V. Spec-Driven Development** | ✅ PASS | Following speckit workflow, this plan precedes implementation |

**Content Standards Compliance:**
- [x] MDX files validate against frontmatter schema
- [x] Supporting materials use .md extension (Obsidian-compatible)
- [x] Slash commands follow naming convention: `t{theme}.lb{lab}` pattern
- [x] Teaching scripts reside in lesson-modules folders as CLAUDE.md files
- [x] Build must pass before merge

**Post-Design Re-Check:** All principles remain satisfied. No constitutional violations identified.

## Project Structure

### Documentation (this feature)

```text
specs/001-course-restructure/
├── spec.md              # Feature specification (complete)
├── plan.md              # This file
├── research.md          # Phase 0 output - API research findings
├── data-model.md        # Phase 1 output - Theme/Lab entity definitions
├── quickstart.md        # Phase 1 output - Implementation guidance
├── contracts/           # Phase 1 output
│   └── course-structure-schema.json
└── tasks.md             # Phase 2 output (generated via /speckit.tasks)
```

### Source Code (repository root)

```text
# Content Structure
src/content/docs/
├── index.mdx                      # Landing page (hero, countdown, CTA)
├── getting-started/               # Expanded (4 pages)
│   ├── introduction.mdx
│   ├── installation.mdx
│   ├── prerequisites.mdx
│   └── cheat-sheet.mdx            # NEW: Claude Code commands reference
├── theme-1/                       # Digital Workspace (5 labs)
│   ├── overview.mdx
│   ├── lab-1-first-conversation.mdx
│   ├── lab-2-para-structure.mdx
│   ├── lab-3-document-templates.mdx
│   ├── lab-4-metadata-enrichment.mdx
│   └── lab-5-project-memory.mdx   # CLAUDE.md & memory focus
├── theme-2/                       # Content Processing (5 labs)
│   ├── overview.mdx
│   ├── lab-1-meeting-notes.mdx
│   ├── lab-2-audio-transcripts.mdx
│   ├── lab-3-email-refinement.mdx
│   ├── lab-4-research-synthesis.mdx
│   └── lab-5-youtube-extraction.mdx
├── theme-3/                       # Document Creation (5 labs)
│   ├── overview.mdx
│   ├── lab-1-docx-creation.mdx
│   ├── lab-2-xlsx-creation.mdx
│   ├── lab-3-pptx-creation.mdx
│   ├── lab-4-brandkit-creation.mdx
│   └── lab-5-sow-creation.mdx
├── theme-4/                       # External APIs (5 labs)
│   ├── overview.mdx
│   ├── lab-1-gamma-presentations.mdx
│   ├── lab-2-gemini-images.mdx
│   ├── lab-3-elevenlabs-audio.mdx
│   ├── lab-4-prd-creation.mdx
│   └── lab-5-product-backlog.mdx
├── reasons/                       # 6 shareable content pages
│   ├── reason-1.mdx
│   ├── reason-2.mdx
│   ├── reason-3.mdx
│   ├── reason-4.mdx
│   ├── reason-5.mdx
│   └── reason-6.mdx
├── reference/                     # Retained
│   ├── faq.mdx
│   ├── glossary.mdx
│   └── troubleshooting.mdx
├── community.mdx                  # Retained
└── privacy.mdx                    # Retained

# Teaching Scripts (lesson-modules/)
lesson-modules/
├── theme-1/
│   ├── lab-1-first-conversation/
│   │   └── CLAUDE.md
│   ├── lab-2-para-structure/
│   │   ├── CLAUDE.md
│   │   └── para-template.md       # Optional supporting material
│   ├── lab-3-document-templates/
│   │   ├── CLAUDE.md
│   │   └── template-examples.md
│   ├── lab-4-metadata-enrichment/
│   │   └── CLAUDE.md
│   └── lab-5-project-memory/      # CLAUDE.md & memory focus
│       ├── CLAUDE.md
│       └── example-claude-md.md
├── theme-2/
│   ├── lab-1-meeting-notes/
│   │   ├── CLAUDE.md
│   │   └── meeting-transcript-sample.md
│   ├── lab-2-audio-transcripts/
│   │   ├── CLAUDE.md
│   │   └── voice-memo-sample.md
│   ├── lab-3-email-refinement/
│   │   ├── CLAUDE.md
│   │   └── email-thread-sample.md
│   ├── lab-4-research-synthesis/
│   │   ├── CLAUDE.md
│   │   └── research-dump-sample.md
│   └── lab-5-youtube-extraction/
│       ├── CLAUDE.md
│       └── youtube-transcript-sample.md
├── theme-3/
│   ├── lab-1-docx-creation/
│   │   └── CLAUDE.md
│   ├── lab-2-xlsx-creation/
│   │   └── CLAUDE.md
│   ├── lab-3-pptx-creation/
│   │   └── CLAUDE.md
│   ├── lab-4-brandkit-creation/
│   │   └── CLAUDE.md
│   └── lab-5-sow-creation/
│       ├── CLAUDE.md
│       └── sow-template.md
└── theme-4/
    ├── lab-1-gamma-presentations/
    │   └── CLAUDE.md
    ├── lab-2-gemini-images/
    │   └── CLAUDE.md
    ├── lab-3-elevenlabs-audio/
    │   └── CLAUDE.md
    ├── lab-4-prd-creation/
    │   ├── CLAUDE.md
    │   └── prd-template.md
    └── lab-5-product-backlog/
        ├── CLAUDE.md
        └── backlog-template.md

# Slash Commands (.claude/commands/)
.claude/
├── commands/
│   ├── t1.lb1.md through t1.lb5.md    # Theme 1 labs
│   ├── t2.lb1.md through t2.lb5.md    # Theme 2 labs
│   ├── t3.lb1.md through t3.lb5.md    # Theme 3 labs
│   └── t4.lb1.md through t4.lb5.md    # Theme 4 labs
├── course-structure.json              # Updated for theme/lab format
└── SCRIPT_INSTRUCTIONS.md             # Updated for theme/lab variables

# Files to Remove (cleanup per FR-024/FR-025)
# - src/content/docs/week-1/ through week-4/ (replaced by theme-N/)
# - src/content/docs/bonus/ (removed entirely per FR-005)
# - src/content/docs/blog/ (replaced by reasons/)
# - .claude/commands/w*.d*.md (replaced by t*.lb*.md)
# - .claude/commands/bonus.d*.md (removed)
# - lesson-modules/week-1/ through week-4/ (replaced by theme-N/)
# - lesson-modules/bonus/ (removed)
# - Obsolete tests referencing old structure
```

**Structure Decision**: Web application with static site generation. Content organised by theme rather than week, with supporting lesson-modules providing CLAUDE.md teaching scripts. Slash commands follow `tN.lbN` pattern. External API integrations in Theme 4 provide guidance only (users configure their own API keys).

## Lab Mapping (31 Days → 20 Labs)

### Theme 1: Building Your Digital Workspace (Obsidian + Claude Code Foundation)

| New Lab | Old Day | Title | Focus |
|---------|---------|-------|-------|
| T1.L1 | Day 1 | First Conversation | Claude Code basics |
| T1.L2 | Day 2 | PARA Structure | Reusable folder structure for Obsidian |
| T1.L3 | Day 4 | Document Templates | Building templates for Obsidian |
| T1.L4 | Day 5 | Metadata Enrichment | Standard metadata for documents |
| T1.L5 | Day 3 | Project Memory | CLAUDE.md files and context |

### Theme 2: Content Processing (Input → Obsidian Notes)

| New Lab | Old Day | Title | Focus |
|---------|---------|-------|-------|
| T2.L1 | Day 8 | Meeting Notes | Meeting transcript → Obsidian note |
| T2.L2 | Day 9 | Audio Transcripts | Voice memo → Obsidian note |
| T2.L3 | Day 13 | Email Refinement | Email thread → Obsidian note |
| T2.L4 | Day 12 | Research Synthesis | Research dump → Obsidian note |
| T2.L5 | Day 10 | YouTube Extraction | Video content → Obsidian note |

### Theme 3: Document Creation (Claude Code Skills)

| New Lab | Old Day | Title | Focus |
|---------|---------|-------|-------|
| T3.L1 | NEW | DOCX Creation | Using docx skill |
| T3.L2 | NEW | XLSX Creation | Using xlsx skill |
| T3.L3 | Day 15 | PPTX Creation | Using pptx skill |
| T3.L4 | NEW | Brandkit Creation | Using brandkit skill |
| T3.L5 | NEW | SOW Creation | Statement of work |

### Theme 4: External API Integrations

| New Lab | Old Day | Title | Focus |
|---------|---------|-------|-------|
| T4.L1 | NEW | Gamma Presentations | Gamma API integration |
| T4.L2 | Day 16 | Gemini Images | Gemini image generation |
| T4.L3 | Day 17 | ElevenLabs Audio | Text-to-speech |
| T4.L4 | Day 22 | PRD Creation | Product Requirements Document |
| T4.L5 | Day 23 | Product Backlog | Backlog from notes |

### Content Removed (No Direct Mapping)

- Days 6, 7: Week 1 review + first slash command (covered in cheat sheet)
- Days 11, 14: PDF Crusher + Week 2 review (redundant with other processing)
- Days 18-21: Diagram Generator, Social Thread, Video Brief, Week 3 review
- Days 24-28: Code/Test/Document/Ship the Story (software development track removed)
- Days 29-31: Bonus content (BMAD, PRP, Capstone) - explicitly removed per requirements

## Complexity Tracking

No constitutional violations requiring justification. The restructure simplifies from 31 days to 20 labs whilst maintaining the core interactive learning pattern.

| Aspect | Old Structure | New Structure | Rationale |
|--------|--------------|---------------|-----------|
| Content units | 31 days + bonus | 20 labs | More focused, eliminates filler |
| Organisation | 5 weeks | 4 themes | Clearer pillar alignment |
| Command pattern | `w{week}.d{day}` | `t{theme}.lb{lab}` | Reflects theme-based structure |
| Blog posts | 6 varied posts | 6 "reasons" | Optimised for social sharing |
| Getting Started | 3 pages | 4 pages | Added cheat sheet reference |
