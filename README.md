# CoEngineers Course - Content Creator Guide

This guide explains how to add and edit lesson content for the 31 Days of Claude Code course. No coding experience required.

---

## Quick Start

**To add a new lesson:**

1. Create a file at `src/content/docs/week-X/day-Y-lesson-title.mdx`
2. Copy the [lesson template](#lesson-template) below
3. Fill in your content
4. Tell the developer to add it to the sidebar

**To preview locally** (if you have Node.js):
```bash
npm install    # First time only
npm run dev    # Start the preview server
```
Then visit `http://localhost:4321/` in your browser.

---

## File Structure

All course content lives in `src/content/docs/`:

```
src/content/docs/
├── index.mdx                    # Homepage
├── getting-started/
│   ├── introduction.mdx
│   ├── installation.mdx
│   └── prerequisites.mdx
├── week-1/                      # Days 1-7: Foundations
│   ├── overview.mdx
│   ├── day-1-claude-code-essentials.mdx
│   ├── day-2-command-line-basics.mdx
│   └── ...
├── week-2/                      # Days 8-14: Content Processing
├── week-3/                      # Days 15-21: Visual & Audio
├── week-4/                      # Days 22-28: Business Assets
├── bonus/                       # Days 29-31: Frameworks
├── blog/                        # Blog posts
└── community.mdx
```

### How File Paths Become URLs

| File Path | URL |
|-----------|-----|
| `src/content/docs/week-1/day-1-claude-code-essentials.mdx` | `/week-1/day-1-claude-code-essentials/` |
| `src/content/docs/getting-started/installation.mdx` | `/getting-started/installation/` |
| `src/content/docs/blog/01-my-ai-story.mdx` | `/blog/01-my-ai-story/` |

### Naming Rules

- Use **lowercase** letters only
- Use **hyphens** to separate words (not spaces or underscores)
- Match the filename to what you want in the URL

---

## Frontmatter (The Top Section)

Every MDX file starts with **frontmatter** — metadata between `---` marks:

```yaml
---
title: "Day 1: Claude Code Essentials"
description: Install Claude Code and run your first command
day: 1
week: 1
---
```

### Required Fields

| Field | What It Does | Example |
|-------|--------------|---------|
| `title` | Page heading, shown in sidebar and browser tab | `"Day 1: Claude Code Essentials"` |
| `description` | SEO text, shown in search results | `Install Claude Code and run your first command` |

### Optional Fields

| Field | What It Does | Example |
|-------|--------------|---------|
| `day` | Which day of the course (1-31) | `1` |
| `week` | Which week (1-5) | `1` |

---

## Available Components

These are ready-to-use building blocks you can drop into your content.

### YouTube Video

Embeds a YouTube video with proper sizing.

```mdx
import YouTube from '../../../components/YouTube.astro';

<YouTube id="dQw4w9WgXcQ" />
```

**Finding the video ID:** For `https://youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ` (the part after `v=`).

### SlashCommand

Shows a Claude Code command with a copy button.

```mdx
import SlashCommand from '../../../components/SlashCommand.astro';

<SlashCommand code="/w1.d1" />
```

With download link:
```mdx
<SlashCommand
  code="/w1.d1"
  downloadUrl="https://github.com/coengineers/coengineers-productivity-course/blob/main/.claude/commands/week-1/w1.d1.md"
/>
```

### EmailSignup

Newsletter subscription form (use on homepage only).

```mdx
import EmailSignup from '../../../components/EmailSignup.astro';

<EmailSignup heading="Get notified when each day drops" />
```

### Countdown

Live countdown timer to a date.

```mdx
import Countdown from '../../../components/Countdown.astro';

<Countdown target="2026-01-01T00:00:00Z" heading="Launching in" />
```

### Starlight Built-in Components

These come from Starlight and don't need the `../../../` path:

```mdx
import { Card, CardGrid, Aside, Badge } from '@astrojs/starlight/components';

<Badge text="Week 1" variant="tip" />

<Card title="My Card">
Card content goes here.
</Card>

<Aside type="tip" title="Pro Tip">
Highlighted callout content.
</Aside>
```

**Badge variants:** `note`, `tip`, `danger`, `caution`
**Aside types:** `note`, `tip`, `caution`, `danger`

---

## Writing Content

### Basic Markdown

```mdx
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)
[Internal link](/week-1/day-2-command-line-basics/)

`inline code`

| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

### Code Blocks

````mdx
```bash
npm run dev
```

```javascript
const greeting = "Hello!";
console.log(greeting);
```
````

### Comments (Won't Appear on Page)

```mdx
{/* This is a comment - it won't show up */}
{/* TODO: Add video when ready */}
```

### Import Components at the Top

Always put imports after the frontmatter, before your content:

```mdx
---
title: "My Lesson"
description: "Lesson description"
---

import YouTube from '../../../components/YouTube.astro';
import SlashCommand from '../../../components/SlashCommand.astro';

# My Lesson

Content starts here...
```

---

## Lesson Template

Copy this entire template when creating a new lesson:

```mdx
---
title: "Day X: Lesson Title"
description: Brief description of what students will learn
day: X
week: Y
---

import YouTube from '../../../components/YouTube.astro';
import SlashCommand from '../../../components/SlashCommand.astro';

# Day X: Lesson Title

{/* TODO: Add video ID when uploaded */}
{/* <YouTube id="VIDEO_ID_HERE" /> */}

## What You'll Learn

- First thing they'll learn
- Second thing
- Third thing

## The Slash Command

<SlashCommand
  code="/wY.dX"
  downloadUrl="https://github.com/coengineers/coengineers-productivity-course/blob/main/.claude/commands/week-Y/wY.dX.md"
/>

## Main Content Section

Your lesson content goes here. Explain the concepts clearly.

### Subsection

More detailed explanation.

## Try It Yourself

Walk readers through a hands-on exercise:

1. First step
2. Second step
3. Third step

## Common Issues

**Problem description**
- How to fix it

**Another common problem**
- Solution

## What's Next?

Tomorrow in [Day X+1: Next Lesson Title](/week-Y/day-X+1-next-lesson-title/), we'll learn about...
```

**Remember to:**
- Replace `X` with the day number (1-31)
- Replace `Y` with the week number (1-4, or 5 for bonus)
- Update the slash command code to match (e.g., `/w1.d1`, `/w2.d8`)
- Uncomment the YouTube line when you have a video ID

---

## Adding a New Lesson: Step-by-Step

### Step 1: Create the File

In your code editor or file browser, create a new file:
- **Location:** `src/content/docs/week-X/`
- **Filename:** `day-Y-lesson-title.mdx`

Example: `src/content/docs/week-2/day-10-youtube-summariser.mdx`

### Step 2: Add the Template

Copy the [lesson template](#lesson-template) and paste it into your new file.

### Step 3: Fill in Your Content

1. Update the frontmatter (title, description, day, week)
2. Write your lesson sections
3. Add comments `{/* TODO: ... */}` for anything not ready yet

### Step 4: Tell the Developer

Send the developer your file (or commit it to Git). They will:
1. Add your lesson to the sidebar in `astro.config.mjs`
2. Run the build to check for errors
3. Deploy the updated site

---

## Common Errors & Fixes

### "Missing required field: title"

Your frontmatter is missing the `title` field. Add it:
```yaml
---
title: "Your Title Here"
description: "Your description"
---
```

### Build fails with "Cannot find module"

Your import path is wrong. For files in `src/content/docs/week-X/`:
- Correct: `import YouTube from '../../../components/YouTube.astro';`
- Wrong: `import YouTube from '../../components/YouTube.astro';`

Count the folders: `week-X` → `docs` → `content` → `src` = 3 levels = `../../../`

### "Unexpected character" or YAML errors

Check your frontmatter:
- Colons need a space after them: `title: "Text"` not `title:"Text"`
- Strings with colons need quotes: `title: "Day 1: Title"` not `title: Day 1: Title`
- No tabs, only spaces

### Component not rendering

1. Check the import is at the top of the file (after frontmatter)
2. Check the import path is correct
3. Check the component name matches exactly (case-sensitive)

---

## British English

Use British spellings throughout:
- colour (not color)
- organisation (not organization)
- behaviour (not behavior)
- whilst (not while, where appropriate)
- "pop this in" (not "go ahead and")

Keep the tone informal and accessible.

---

## For Developers

### Sidebar Configuration

The sidebar is configured in `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: 'Week 1: Foundations',
    collapsed: false,
    items: [
      { label: 'Overview', slug: 'week-1/overview' },
      { label: 'Day 1: Claude Code Essentials', slug: 'week-1/day-1-claude-code-essentials' },
      // Add new lessons here
    ],
  },
]
```

### Build Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (catches errors)
npm run preview   # Preview production build
```

### Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.x + Starlight |
| Styling | Tailwind CSS + custom CSS |
| Hosting | Vercel |
| Email | Supabase (planned) |

---

## Checklist for New Lessons

Before submitting a new lesson, confirm:

- [ ] File is in the correct folder (`week-X/day-Y-title.mdx`)
- [ ] Frontmatter has `title` and `description`
- [ ] Component imports are at the top (if using any)
- [ ] All links work (`/week-X/day-Y/` format)
- [ ] British English spellings used
- [ ] Lesson follows the standard structure
- [ ] TODOs are commented out or completed
- [ ] Link to "What's Next" points to the next lesson
