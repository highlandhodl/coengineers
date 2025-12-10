# Quickstart: Course Restructure Implementation

**Created**: 2025-12-10
**Status**: Ready for task generation

## Overview

This document provides implementation guidance for the course restructure. Use this alongside `tasks.md` (generated via `/speckit.tasks`) to understand priorities, dependencies, and implementation patterns.

---

## Implementation Order

The restructure should be implemented in this order to maintain a working site throughout:

### Phase 1: Foundation (Parallel-Safe)
1. **Update course-structure.json** - New theme/lab format
2. **Update SCRIPT_INSTRUCTIONS.md** - New variable names
3. **Update astro.config.mjs sidebar** - New navigation structure
4. **Update custom.css** - Already has Bitcoin orange ✅

### Phase 2: Content Creation (Parallel-Safe)
5. **Create theme directories** - `src/content/docs/theme-N/`
6. **Create lesson-modules theme directories** - `lesson-modules/theme-N/`
7. **Create 20 slash commands** - `.claude/commands/tN.lbN.md`
8. **Create 20 MDX lab pages** - Website content
9. **Create 20 CLAUDE.md teaching scripts** - Interactive learning
10. **Create cheat-sheet.mdx** - Getting Started addition
11. **Create 6 reasons pages** - Social sharing content

### Phase 3: Cleanup (After Phase 2 Complete)
12. **Remove old week directories** - `src/content/docs/week-N/`
13. **Remove old lesson-modules** - `lesson-modules/week-N/`
14. **Remove old slash commands** - `.claude/commands/wN.dN.md`
15. **Remove bonus content** - Both site and lesson-modules
16. **Remove blog directory** - Replaced by reasons
17. **Archive/remove obsolete tests** - Per FR-024

### Phase 4: Verification
18. **Build check** - `npm run build`
19. **Navigation test** - All labs reachable in ≤3 clicks
20. **Slash command test** - All 20 commands execute

---

## File Patterns

### MDX Lab Page Template

```mdx
---
title: "Lab N: Title"
description: "Brief description for meta tags"
---

import YouTube from '../../../components/YouTube.astro';
import SlashCommand from '../../../components/SlashCommand.astro';

## Learning Objectives

By the end of this lab, you'll be able to:

- Objective 1
- Objective 2
- Objective 3

## Video Walkthrough

<YouTube id="VIDEO_ID_HERE" />

## Interactive Lab

Ready to get hands-on? Open Claude Code in your terminal and run:

<SlashCommand command="/tN.lbN" />

Claude will guide you through the exercise step by step.

## What You'll Create

Description of the tangible output learners will produce.

## Next Steps

Ready for more? Continue to [Lab N+1: Next Title](/theme-N/lab-N+1-slug).
```

### Slash Command Template

```markdown
# Lab N: Title - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract theme/lab ID:
   - Command name: "tN.lbN" → Theme ID: "N", Lab ID: "N"
   - Pattern: t{theme}.lb{lab}

2. Read `.claude/course-structure.json` to find the lab with ID "N.N"

3. Get the teaching script path from the config: `lesson-modules/theme-N/lab-N-slug/CLAUDE.md`

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions on how to interpret and deliver the script

6. Follow the teaching script PRECISELY as instructed:
   - Execute "Say:" blocks word-for-word
   - Stop at "Check:" points and wait for learner response
   - Run "Action:" blocks exactly as specified
   - Start teaching immediately (no meta-commentary about reading scripts)

7. For navigation references, use dynamic variables resolved from course-structure.json:
   - {nextCommand} → next lab command
   - {nextLabTitle} → next lab title
   - Wrap navigation in conditionals: {ifNotLastInCourse:...}

8. Remember: You are a friendly instructor using British English. Never mention "the script" or "my instructions" - just teach naturally.
```

### CLAUDE.md Teaching Script Template

```markdown
# Lab N.N: Title

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a friendly, knowledgeable instructor guiding someone through [specific skill]. Use British English. Be warm but not patronising.

## Learning Objectives

By the end of this module, learners will be able to:

- Objective 1
- Objective 2
- Objective 3

## Teaching Flow

### Step 1: Welcome (2-3 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme N - Theme Name! This theme focuses on...}

{ifNotFirstInTheme:Welcome back!}

Today we're tackling [topic]. By the end, you'll have [tangible outcome]."

**Check:** Wait for learner to confirm they're ready

### Step 2: Core Activity (10-15 minutes)

**Say:**
"Explanation of what we're doing and why..."

**Action:**
[Specific Claude Code operation to perform]

**Present it like this:**
[Expected output format]

**Check:** Wait for learner to review and acknowledge

### Step 3: Practice (5-10 minutes)

**Say:**
"Now you try. [Instructions for independent practice]"

**Check:** Wait for learner to complete and share result

### Step 4: Wrap-up (2-3 minutes)

**Say:**
"Brilliant work! You've learned how to [skill summary].

**Key takeaways:**
- Point 1
- Point 2
- Point 3

{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: [Anticipated question]?
**A:** [Helpful answer]

---

## Success Criteria

- Learner successfully [measurable outcome 1]
- Learner can [measurable outcome 2]
- Learner demonstrates [measurable outcome 3]
```

---

## Content Reuse Strategy

### Labs with Existing Content (Adapt)
These labs can reuse significant content from existing days:

| New Lab | Source Day | Reuse Level |
|---------|------------|-------------|
| T1.L1 | Day 1 | High - adapt CLAUDE.md |
| T1.L5 | Day 3 | High - adapt CLAUDE.md |
| T2.L1 | Day 8 | High - adapt CLAUDE.md + samples |
| T2.L2 | Day 9 | High - adapt CLAUDE.md + samples |
| T2.L3 | Day 13 | High - adapt CLAUDE.md + samples |
| T2.L5 | Day 10 | High - adapt CLAUDE.md + samples |
| T4.L4 | Day 22 | Medium - adapt PRD content |
| T4.L5 | Day 23 | Medium - adapt backlog content |

### Labs Requiring New Content
These labs need fresh teaching scripts:

| New Lab | Notes |
|---------|-------|
| T1.L2 | PARA structure - focus on Obsidian folder patterns |
| T1.L3 | Document templates - new Obsidian-focused content |
| T1.L4 | Metadata enrichment - new content for frontmatter |
| T2.L4 | Research synthesis - similar to Day 12 but reframed |
| T3.L1-L5 | All new - Claude Code skills focus |
| T4.L1-L3 | All new - external API integration |

---

## astro.config.mjs Sidebar Structure

```javascript
sidebar: [
  {
    label: 'Reasons',
    collapsed: true,
    items: [
      { label: 'Reason 1: [Title]', slug: 'reasons/reason-1' },
      { label: 'Reason 2: [Title]', slug: 'reasons/reason-2' },
      { label: 'Reason 3: [Title]', slug: 'reasons/reason-3' },
      { label: 'Reason 4: [Title]', slug: 'reasons/reason-4' },
      { label: 'Reason 5: [Title]', slug: 'reasons/reason-5' },
      { label: 'Reason 6: [Title]', slug: 'reasons/reason-6' },
    ],
  },
  {
    label: 'Getting Started',
    items: [
      { label: 'Introduction', slug: 'getting-started/introduction' },
      { label: 'Installation', slug: 'getting-started/installation' },
      { label: 'Prerequisites', slug: 'getting-started/prerequisites' },
      { label: 'Cheat Sheet', slug: 'getting-started/cheat-sheet' },
    ],
  },
  {
    label: 'Theme 1: Digital Workspace',
    collapsed: false,
    items: [
      { label: 'Overview', slug: 'theme-1/overview' },
      { label: 'Lab 1: First Conversation', slug: 'theme-1/lab-1-first-conversation' },
      { label: 'Lab 2: PARA Structure', slug: 'theme-1/lab-2-para-structure' },
      { label: 'Lab 3: Document Templates', slug: 'theme-1/lab-3-document-templates' },
      { label: 'Lab 4: Metadata Enrichment', slug: 'theme-1/lab-4-metadata-enrichment' },
      { label: 'Lab 5: Project Memory', slug: 'theme-1/lab-5-project-memory' },
    ],
  },
  {
    label: 'Theme 2: Content Processing',
    collapsed: true,
    items: [
      { label: 'Overview', slug: 'theme-2/overview' },
      { label: 'Lab 1: Meeting Notes', slug: 'theme-2/lab-1-meeting-notes' },
      { label: 'Lab 2: Audio Transcripts', slug: 'theme-2/lab-2-audio-transcripts' },
      { label: 'Lab 3: Email Refinement', slug: 'theme-2/lab-3-email-refinement' },
      { label: 'Lab 4: Research Synthesis', slug: 'theme-2/lab-4-research-synthesis' },
      { label: 'Lab 5: YouTube Extraction', slug: 'theme-2/lab-5-youtube-extraction' },
    ],
  },
  {
    label: 'Theme 3: Document Creation',
    collapsed: true,
    items: [
      { label: 'Overview', slug: 'theme-3/overview' },
      { label: 'Lab 1: DOCX Creation', slug: 'theme-3/lab-1-docx-creation' },
      { label: 'Lab 2: XLSX Creation', slug: 'theme-3/lab-2-xlsx-creation' },
      { label: 'Lab 3: PPTX Creation', slug: 'theme-3/lab-3-pptx-creation' },
      { label: 'Lab 4: Brandkit Creation', slug: 'theme-3/lab-4-brandkit-creation' },
      { label: 'Lab 5: SOW Creation', slug: 'theme-3/lab-5-sow-creation' },
    ],
  },
  {
    label: 'Theme 4: External APIs',
    collapsed: true,
    items: [
      { label: 'Overview', slug: 'theme-4/overview' },
      { label: 'Lab 1: Gamma Presentations', slug: 'theme-4/lab-1-gamma-presentations' },
      { label: 'Lab 2: Gemini Images', slug: 'theme-4/lab-2-gemini-images' },
      { label: 'Lab 3: ElevenLabs Audio', slug: 'theme-4/lab-3-elevenlabs-audio' },
      { label: 'Lab 4: PRD Creation', slug: 'theme-4/lab-4-prd-creation' },
      { label: 'Lab 5: Product Backlog', slug: 'theme-4/lab-5-product-backlog' },
    ],
  },
  {
    label: 'Reference',
    collapsed: true,
    items: [
      { label: 'Troubleshooting', slug: 'reference/troubleshooting' },
      { label: 'Glossary', slug: 'reference/glossary' },
      { label: 'FAQ', slug: 'reference/faq' },
    ],
  },
  { label: 'Community', slug: 'community' },
  { label: 'Privacy Policy', slug: 'privacy' },
],
```

---

## Cheat Sheet Content Outline

The new `getting-started/cheat-sheet.mdx` should include:

### Essential Commands
- `/help` - Get help
- `/clear` - Clear conversation
- `/compact` - Compact mode
- `/model` - Switch models
- `/memory` - View memory

### Course Commands
- `/t1.lb1` through `/t4.lb5` - Launch labs

### Keyboard Shortcuts
- `Ctrl+C` - Cancel current operation
- `Ctrl+R` - Rerun last command
- Up/Down arrows - Command history

### Quick Tips
- "Be specific about what you want"
- "Use @filename to reference files"
- "Ask Claude to explain its reasoning"

---

## Verification Checklist

Before marking restructure complete:

- [ ] `npm run build` passes
- [ ] All 20 lab pages render correctly
- [ ] All 20 slash commands execute
- [ ] Navigation reaches any lab in ≤3 clicks
- [ ] All 6 reasons pages render with CTAs
- [ ] Cheat sheet is accessible from Getting Started
- [ ] No broken links (404s)
- [ ] British English used throughout
- [ ] Bitcoin orange accent applied correctly
- [ ] Email signup still functional
