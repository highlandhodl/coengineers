# Data Model: Course Restructure

**Created**: 2025-12-10
**Status**: Complete

## Overview

This document defines the entity structures for the restructured 4-theme, 20-lab course format. The primary data structure is `course-structure.json`, which drives navigation, slash command resolution, and variable substitution in teaching scripts.

---

## Entities

### Theme

A logical grouping of related labs focused on a specific Claude Code capability pillar.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Theme identifier (1-4) |
| `name` | string | ✅ | Display name for navigation |
| `description` | string | ✅ | Brief theme description for overview pages |
| `pillar` | string | ✅ | Claude Code pillar (LLM, OS Driver, External Tools) |
| `labs` | Lab[] | ✅ | Array of 5 labs within this theme |

**Validation Rules:**
- `id` must be "1", "2", "3", or "4"
- `labs` array must contain exactly 5 items
- `name` max length: 50 characters
- `pillar` must be one of: "LLM Capabilities", "OS Driver (Obsidian)", "External Tool Integration"

---

### Lab

A self-contained learning experience with video, instructions, and interactive slash command.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Lab identifier in format "theme.lab" (e.g., "2.3") |
| `title` | string | ✅ | Display title for navigation and headers |
| `slug` | string | ✅ | URL-friendly identifier for routing |
| `path` | string | ✅ | Relative path to CLAUDE.md teaching script |
| `command` | string | ✅ | Slash command in format "tN.lbN" |
| `description` | string | ✅ | Brief description for overview pages |
| `estimatedMinutes` | number | ✅ | Expected completion time (target: ≤30) |
| `supportingMaterials` | string[] | ❌ | Array of paths to optional supporting files |

**Validation Rules:**
- `id` must match pattern `^[1-4]\.[1-5]$`
- `command` must match pattern `^t[1-4]\.lb[1-5]$`
- `slug` must be URL-safe (lowercase, hyphens only)
- `path` must end with `/CLAUDE.md`
- `estimatedMinutes` must be 15-45 (enforces learner-first design)
- `supportingMaterials` paths must end with `.md` (Obsidian-compatible)

---

### Reason

A concise, shareable content piece for social media distribution (replaces "blog post").

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | ✅ | Reason number (1-6) |
| `title` | string | ✅ | Compelling title for social sharing |
| `slug` | string | ✅ | URL-friendly identifier |
| `description` | string | ✅ | Meta description for social previews |
| `shareText` | string | ✅ | Pre-written social media copy |

**Validation Rules:**
- `id` must be 1-6
- `title` max length: 60 characters (optimal for social)
- `description` max length: 160 characters (meta description limit)
- `shareText` max length: 280 characters (Twitter limit)

---

## Course Structure JSON Schema

The complete `course-structure.json` structure:

```json
{
  "version": "2.0.0",
  "lastUpdated": "2025-12-10",
  "structure": "themes",
  "themes": [
    {
      "id": "1",
      "name": "Building Your Digital Workspace",
      "description": "Set up Obsidian with PARA, templates, and Claude Code memory",
      "pillar": "OS Driver (Obsidian)",
      "labs": [
        {
          "id": "1.1",
          "title": "First Conversation",
          "slug": "first-conversation",
          "path": "lesson-modules/theme-1/lab-1-first-conversation/CLAUDE.md",
          "command": "t1.lb1",
          "description": "Your first interaction with Claude Code",
          "estimatedMinutes": 20
        }
        // ... 4 more labs
      ]
    }
    // ... 3 more themes
  ],
  "reasons": [
    {
      "id": 1,
      "title": "Reason Title",
      "slug": "reason-1",
      "description": "Meta description for social sharing",
      "shareText": "Pre-written social post copy"
    }
    // ... 5 more reasons
  ],
  "metadata": {
    "totalLabs": 20,
    "totalThemes": 4,
    "targetAudience": "Product managers, content creators, knowledge workers",
    "language": "en-GB"
  }
}
```

---

## Entity Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                    course-structure.json                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    contains    ┌─────────────┐             │
│  │   Theme     │ ─────────────► │    Lab      │             │
│  │  (1-4)      │    1:5         │  (1-5 each) │             │
│  └─────────────┘                └──────┬──────┘             │
│                                        │ references          │
│                                        ▼                     │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              lesson-modules/theme-N/lab-N/           │    │
│  │  ┌─────────────┐    ┌─────────────────────────────┐ │    │
│  │  │  CLAUDE.md  │    │  supporting-materials.md    │ │    │
│  │  │ (required)  │    │  (optional)                 │ │    │
│  │  └─────────────┘    └─────────────────────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌─────────────┐    contains    ┌─────────────┐             │
│  │   reasons   │ ─────────────► │   Reason    │             │
│  │   array     │    1:6         │   (1-6)     │             │
│  └─────────────┘                └─────────────┘             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## State Transitions

Labs do not have explicit state in the JSON structure. Learner progress is tracked externally (if at all) or via completion markers in their local Obsidian vault.

**Navigation State** (resolved at runtime by SCRIPT_INSTRUCTIONS.md):
- `{ifFirstInTheme:...}` - True when lab.id ends in ".1"
- `{ifLastInTheme:...}` - True when lab.id ends in ".5"
- `{ifFirstInCourse:...}` - True when lab.id is "1.1"
- `{ifLastInCourse:...}` - True when lab.id is "4.5"
- `{nextCommand}` - Next lab's command (or empty if last)
- `{nextLabTitle}` - Next lab's title
- `{themeId}`, `{themeName}` - Current theme context

---

## Migration Notes

### From Old Structure (weeks/days) to New (themes/labs)

| Old Field | New Field | Notes |
|-----------|-----------|-------|
| `weeks[]` | `themes[]` | Renamed for clarity |
| `week.days[]` | `theme.labs[]` | Renamed, reduced from 7 to 5 per group |
| `day.id` (e.g., "2.8") | `lab.id` (e.g., "2.3") | New numbering scheme |
| `day.command` (e.g., "w2.d8") | `lab.command` (e.g., "t2.lb3") | New command pattern |
| `week.id` (e.g., "bonus") | Removed | Bonus content eliminated |

### SCRIPT_INSTRUCTIONS.md Variable Updates

| Old Variable | New Variable |
|--------------|--------------|
| `{dayId}` | `{labId}` |
| `{dayTitle}` | `{labTitle}` |
| `{weekId}` | `{themeId}` |
| `{weekName}` | `{themeName}` |
| `{nextDayId}` | `{nextLabId}` |
| `{nextDayTitle}` | `{nextLabTitle}` |
| `{ifFirstInWeek:...}` | `{ifFirstInTheme:...}` |
| `{ifLastInWeek:...}` | `{ifLastInTheme:...}` |

---

## Complete Lab Inventory

### Theme 1: Building Your Digital Workspace

| ID | Command | Title | Est. Minutes |
|----|---------|-------|--------------|
| 1.1 | t1.lb1 | First Conversation | 20 |
| 1.2 | t1.lb2 | PARA Structure | 25 |
| 1.3 | t1.lb3 | Document Templates | 30 |
| 1.4 | t1.lb4 | Metadata Enrichment | 25 |
| 1.5 | t1.lb5 | Project Memory | 25 |

### Theme 2: Content Processing

| ID | Command | Title | Est. Minutes |
|----|---------|-------|--------------|
| 2.1 | t2.lb1 | Meeting Notes to Obsidian | 25 |
| 2.2 | t2.lb2 | Audio Transcripts to Obsidian | 25 |
| 2.3 | t2.lb3 | Email Refinement to Obsidian | 25 |
| 2.4 | t2.lb4 | Research Synthesis to Obsidian | 30 |
| 2.5 | t2.lb5 | YouTube Extraction to Obsidian | 30 |

### Theme 3: Document Creation

| ID | Command | Title | Est. Minutes |
|----|---------|-------|--------------|
| 3.1 | t3.lb1 | DOCX Creation | 25 |
| 3.2 | t3.lb2 | XLSX Creation | 25 |
| 3.3 | t3.lb3 | PPTX Creation | 30 |
| 3.4 | t3.lb4 | Brandkit Creation | 30 |
| 3.5 | t3.lb5 | SOW Creation | 30 |

### Theme 4: External API Integrations

| ID | Command | Title | Est. Minutes |
|----|---------|-------|--------------|
| 4.1 | t4.lb1 | Gamma Presentations | 30 |
| 4.2 | t4.lb2 | Gemini Images | 30 |
| 4.3 | t4.lb3 | ElevenLabs Audio | 30 |
| 4.4 | t4.lb4 | PRD Creation | 30 |
| 4.5 | t4.lb5 | Product Backlog | 30 |

**Total**: 20 labs, ~540 minutes (~9 hours total course time)
