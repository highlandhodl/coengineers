# CoEngineers Constitution

## Core Principles

### I. British English Throughout

All content uses British English spelling and terminology.

- **Spellings**: colour, organised, behaviour, centre, catalogue, programme
- **Terminology**: "pop this in" not "go ahead and", "sorted" not "set up"
- **Tone**: Casual, cheeky, accessible — never corporate or robotic
- **Code comments**: British English in all user-facing comments and documentation

### II. Accessibility First

Every piece of content assumes zero technical experience.

- **No jargon**: If a technical term is unavoidable, explain it immediately
- **Second person**: "You'll learn" not "Users will learn"
- **Show don't tell**: Concrete examples over abstract explanations
- **One concept per section**: Don't overwhelm — build understanding incrementally

### III. Obsidian-Friendly Markdown

All course materials must render correctly in Obsidian for non-technical contributors.

**Required**:
- Standard markdown only (no framework-specific syntax in learner-facing files)
- YAML frontmatter for metadata (Obsidian handles this natively)
- Relative links between files (`[[filename]]` or `[text](./path.md)`)
- No HTML in markdown unless absolutely necessary

**Forbidden in course content**:
- JSX/MDX component syntax (`<Component />`)
- Import statements
- Framework-specific shortcodes
- Astro-specific syntax

**File structure for Obsidian users**:
```
content/           ← Non-devs edit here (pure markdown)
├── week-1/
├── week-2/
├── week-3/
├── week-4/
└── bonus/

src/content/docs/  ← Build copies from content/ with MDX wrappers
```

### IV. Steal-Ready Outputs

Every lesson delivers something the learner can immediately copy and use.

- **Slash commands**: Complete, tested, ready to paste into `.claude/commands/`
- **Example files**: Real inputs and outputs, not lorem ipsum
- **No setup required**: Commands work out of the box with Claude Code installed
- **Self-contained**: Each day's materials work independently

### V. Separation of Content and Code

Course content and website code live in distinct spaces.

| Layer | Location | Edited by | Format |
|-------|----------|-----------|--------|
| Course content | `content/` | Anyone (Obsidian) | Pure Markdown |
| Website source | `src/` | Developers | Astro/MDX |
| Slash commands | `.claude/commands/` | Anyone (Obsidian) | Pure Markdown |
| Examples | `examples/` | Anyone (Obsidian) | Various |

**Build process** syncs `content/` → `src/content/docs/` with necessary MDX wrappers.

### VI. Minimal Dependencies

Slash commands and course materials should work with minimal tooling.

- **Required**: Claude Code only
- **Optional**: Listed clearly at the start of each lesson
- **No assumption**: Learners have Node, Python, or any dev environment
- **Graceful degradation**: If a tool isn't available, provide alternatives

## Content Standards

### Markdown Formatting

```markdown
# Day Title (H1 - one per file)

## Major Sections (H2)

### Subsections (H3)

**Bold** for emphasis
`code` for commands, file names, technical terms
```code blocks``` for multi-line code or outputs

- Bullet lists for unordered items
1. Numbered lists for sequential steps
```

### Frontmatter Schema

Every content file includes:

```yaml
---
title: "Day X: Title Here"
description: "One sentence for SEO and previews"
day: 1
week: 1
slug: "day-1-title-slug"
---
```

### File Naming

- Lowercase with hyphens: `day-1-claude-code-essentials.md`
- Prefix with day number for sort order
- Match slug in frontmatter

## Governance

This constitution supersedes conflicting guidance elsewhere.

**Amendments**: Document the change, update version, note the date.

**Conflicts**: If CLAUDE.md and Constitution disagree, Constitution wins for principles; CLAUDE.md wins for technical implementation details.

**Version**: 1.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-08
