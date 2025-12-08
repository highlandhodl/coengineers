# CoEngineers.ai

## Product Requirements Document

**Version:** 1.0  
**Date:** 8 December 2025  
**Author:** John  
**Domain:** coengineers.ai  
**Launch:** January 2026  

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Brand Guidelines](#brand-guidelines)
3. [Course Structure](#course-structure)
4. [Website Specification](#website-specification)
5. [GitHub Repository](#github-repository)
6. [Slash Commands](#slash-commands)
7. [Marketing Campaign](#marketing-campaign)
8. [Email & Newsletter](#email--newsletter)
9. [Community Platform](#community-platform)
10. [Technical Infrastructure](#technical-infrastructure)
11. [Production Timeline](#production-timeline)
12. [Success Metrics](#success-metrics)
13. [Appendices](#appendices)

---

## Executive Summary

CoEngineers.ai is a free, open-source 31-day video course teaching practical Claude Code automations for productivity. Each day delivers a standalone 5-10 minute YouTube video with downloadable slash commands that viewers can implement immediately.

The course progresses from foundational setup (Week 1) through content processing (Week 2), visual/audio asset generation (Week 3), written content creation (Week 4), and advanced frameworks (Week 5 Bonus).

**Inspiration:** Carl Vellotti's "Claude Code for Product Managers" course structure, Cole Medin's community-building approach.

**Key Differentiators:**

- Daily YouTube videos (not just documentation)
- British English throughout
- Casual, cheeky, accessible tone
- Focus on non-developers who want to be productive
- Companion slash commands for every lesson
- Free community on Circle

---

## Brand Guidelines

### Colour Palette

The brand combines Claude's light/dark aesthetic with Bitcoin orange as the accent colour.

```css
:root {
  /* Light Mode */
  --bg-primary: #FAFAF9;
  --bg-secondary: #F5F5F4;
  --text-primary: #1C1917;
  --text-secondary: #57534E;
  
  /* Dark Mode */
  --bg-primary-dark: #1C1917;
  --bg-secondary-dark: #292524;
  --text-primary-dark: #FAFAF9;
  --text-secondary-dark: #A8A29E;
  
  /* Accent - Bitcoin Orange */
  --accent-primary: #F7931A;
  --accent-hover: #E8850F;
  --accent-light: #FEF3E2;
  --accent-dark: #C77A15;
  
  /* Claude-inspired neutrals */
  --border-light: #E7E5E4;
  --border-dark: #44403C;
  
  /* Semantic colours */
  --success: #22C55E;
  --warning: #EAB308;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### Typography

```css
/* Primary font */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace for code */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Voice & Tone

- **Accessible:** No jargon, explain everything
- **Non-technical:** Assume zero developer experience
- **Casual & cheeky:** Personality-driven, British humour
- **Second person:** "You'll learn", "You can steal this"
- **British English:** Throughout all content, including code comments

**Example copy:**

> ❌ "This module covers the implementation of CLI commands"
> ✅ "Right, let's get your terminal sorted so you can stop being scared of it"

> ❌ "Execute the following command to initialize"  
> ✅ "Pop this into your terminal and hit enter"

### Logo Requirements

- Primary: "CoEngineers" wordmark with stylised gear/cog icon
- Icon only: Gear/cog for favicons and small spaces
- Bitcoin orange (#F7931A) as primary logo colour
- Works on both light and dark backgrounds
- SVG format for web, PNG exports at 1x, 2x, 3x

---

## Course Structure

### Overview

| Week | Theme | Days | Focus |
|------|-------|------|-------|
| 1 | Foundations & Scaffolding | 1-7 | Setup, tools, structure |
| 2 | Content Processing | 8-14 | Ingest and transform content |
| 3 | Visual & Audio Assets | 15-21 | Generate creative outputs |
| 4 | Written Content & Business | 22-28 | Documents that drive revenue |
| 5 | Bonus: Frameworks | 29-31 | Advanced methodologies |

### Detailed Episode List

#### Week 1: Foundations & Scaffolding (Days 1-7)

| Day | Slug | Title | Description | Key Tools |
|-----|------|-------|-------------|-----------|
| 1 | `claude-code-essentials` | Claude Code Essentials | Installation, authentication, first commands, how the agent thinks | Claude Code |
| 2 | `command-line-basics` | Command Line for Non-Devs | The 10 commands you actually need: `cd`, `ls`, `mkdir`, `cat`, `cp`, `mv`, `rm`, `pwd`, `touch`, `open` | Terminal |
| 3 | `markdown-mastery` | Markdown Mastery | Syntax, formatting, frontmatter, why plain text wins | Obsidian, any editor |
| 4 | `second-brain-setup` | Your Second Brain Setup | Folder structures that scale (PARA and alternatives) | Obsidian |
| 5 | `claude-md-builder` | CLAUDE.md Builder | Project memory files, conventions, persistent context | Claude Code |
| 6 | `note-templates` | Note Template Factory | Reusable templates for meetings, projects, research, daily notes | Obsidian |
| 7 | `frontmatter-schema` | Frontmatter Schema Designer | YAML metadata standards, required fields, controlled vocabularies | Obsidian |

**Week 1 Outcome:** Fully scaffolded personal knowledge system with Claude Code configured and project memory established.

---

#### Week 2: Content Processing (Days 8-14)

| Day | Slug | Title | Description | Key Tools |
|-----|------|-------|-------------|-----------|
| 8 | `transcript-processor` | Transcript Processor | Convert meeting/podcast transcripts into structured notes with speakers, timestamps, actions | Claude Code |
| 9 | `voice-memo-structurer` | Voice Memo Structurer | Transform rambling recordings into organised thoughts via Whisper | Whisper, Claude Code |
| 10 | `youtube-summariser` | YouTube Video Summariser | Pull transcripts from URLs, generate summaries, extract key quotes | Claude Code, yt-dlp |
| 11 | `meeting-notes-standardiser` | Meeting Notes Standardiser | Reformat inconsistent notes to your schema with proper frontmatter | Claude Code |
| 12 | `pdf-extractor` | PDF Report Extractor | Rip key data, tables, and insights from PDFs into markdown | Claude Code |
| 13 | `whisper-pipeline` | Whisper + Claude Pipeline | End-to-end audio processing: record, transcribe locally, structure | Whisper, Claude Code |
| 14 | `web-archiver` | Web Page Archiver | Save web articles as clean markdown, stripping ads and navigation | Claude Code |

**Week 2 Outcome:** Suite of content ingestion tools that handle any input format and output consistent, structured notes.

---

#### Week 3: Visual & Audio Assets (Days 15-21)

| Day | Slug | Title | Description | Key Tools |
|-----|------|-------|-------------|-----------|
| 15 | `gamma-generator` | Gamma Deck Generator | Turn notes into presentation outlines ready for Gamma.app | Gamma |
| 16 | `gemini-image-prompter` | Gemini Image Prompter | Generate detailed image prompts for Gemini 3/Nano Banana with style consistency | Gemini 3, AI Studio |
| 17 | `elevenlabs-preparer` | ElevenLabs Script Preparer | Format text for voiceover: SSML tags, pause markers, pronunciation guides | ElevenLabs |
| 18 | `podcast-builder` | Podcast Episode Builder | Structure notes into show outlines with hooks, segments, talking points | NotebookLM |
| 19 | `mermaid-diagrams` | Mermaid Diagram Generator | Visualise processes, relationships, timelines from plain text | Mermaid, Obsidian |
| 20 | `heygen-briefs` | HeyGen Avatar Brief Creator | Generate talking head video scripts with scene directions and timing | HeyGen |
| 21 | `kling-prompts` | Kling Video Prompt Generator | Turn concepts into motion prompts with camera movements and transitions | Kling |

**Week 3 Outcome:** Transform any structured note into visual or audio production briefs for multiple platforms.

---

#### Week 4: Written Content & Business Assets (Days 22-28)

| Day | Slug | Title | Description | Key Tools |
|-----|------|-------|-------------|-----------|
| 22 | `blog-compiler` | Blog Post Compiler | Stitch related notes into publishable drafts with hooks and CTAs | Claude Code |
| 23 | `newsletter-assembler` | Newsletter Assembler | Pull highlights into email-ready format with sections | Claude Code |
| 24 | `social-threads` | Social Thread Generator | Break long-form into Twitter/LinkedIn hooks and carousels | Claude Code, Canva |
| 25 | `case-study-packager` | Case Study Packager | Compile project notes into client story format | Claude Code |
| 26 | `proposal-generator` | Proposal Generator | Turn meeting notes into structured proposals with scope and pricing | Claude Code, Airtable |
| 27 | `chatbot-exporter` | Chatbot Training Exporter | Format content for RAG ingestion with chunking and metadata | Claude Code, MCP |
| 28 | `competitor-report` | Competitive Intelligence Report | Compile research into analysis with comparisons | Claude Code, Guidde |

**Week 4 Outcome:** Production-ready business documents generated from existing notes and research.

---

#### Week 5: Bonus - Frameworks & Power Moves (Days 29-31)

| Day | Slug | Title | Description | Key Tools |
|-----|------|-------|-------------|-----------|
| 29 | `bmad-method` | BMAD Method Deep Dive | Full workflow using BMAD (Breakthrough Method for Agile AI-Driven Development) | BMAD, Claude Code |
| 30 | `prp-framework` | PRP Framework | Structure projects with Prompt-Response-Product context engineering | PRP, Claude Code |
| 31 | `speckit-integration` | SpecKit Integration | Build apps from PRDs using GitHub SpecKit's spec-driven development | SpecKit, Claude Code |

**Week 5 Outcome:** Three advanced frameworks for complex, multi-step projects.

---

### Video Structure Template

Each video follows this consistent structure (5-10 minutes total):

```
[0:00-0:30] THE HOOK
- Relatable pain point
- "Ever spent 2 hours doing X when you could do it in 2 minutes?"
- Quick preview of the outcome

[0:30-1:00] THE CONTEXT
- Why this matters
- Where this fits in your workflow
- What you'll walk away with

[1:00-7:00] THE SOLUTION
- Live demo in Claude Code
- Show the command/prompt step by step
- Walk through the output
- Handle edge cases

[7:00-8:00] THE STEAL
- Display the slash command
- "Grab this from the description"
- Quick recap of what it does

[8:00-8:30] THE TEASE
- "Tomorrow we're doing X..."
- Subscribe/community CTA
- "See you then"
```

### Supporting Materials Per Episode

Each day includes:

- YouTube video (5-10 minutes)
- Slash command file (`.md` in `.claude/commands/`)
- Example input file(s)
- Example output file(s)
- Written summary on website (for SEO/accessibility)
- Closed captions/transcript

---

## Website Specification

### Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Framework | Astro + Starlight | Built for documentation, excellent DX |
| Styling | Tailwind CSS | Matches Starlight defaults, easy customisation |
| Hosting | Vercel | Simple deployment, preview branches |
| Analytics | Vercel Analytics | Built-in, privacy-friendly |
| Forms | Custom Astro component → Supabase | Email capture without third-party widgets |

### Site Structure

```
coengineers.ai/
├── / (Homepage)
├── /getting-started/
│   ├── introduction
│   ├── installation
│   └── prerequisites
├── /week-1/
│   ├── overview
│   ├── day-1-claude-code-essentials
│   ├── day-2-command-line-basics
│   ├── day-3-markdown-mastery
│   ├── day-4-second-brain-setup
│   ├── day-5-claude-md-builder
│   ├── day-6-note-templates
│   └── day-7-frontmatter-schema
├── /week-2/
│   ├── overview
│   ├── day-8-transcript-processor
│   ├── ... (days 9-14)
├── /week-3/
│   ├── overview
│   ├── day-15-gamma-generator
│   ├── ... (days 16-21)
├── /week-4/
│   ├── overview
│   ├── day-22-blog-compiler
│   ├── ... (days 23-28)
├── /bonus/
│   ├── overview
│   ├── bmad-method
│   ├── prp-framework
│   └── speckit-integration
├── /community/
└── /search/
```

### Homepage Specification

#### Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo]                              [Get Started] [GitHub] │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│          31 Days of Claude Code                             │
│          to Save Time                                       │
│                                                             │
│          From chaos to production assets.                   │
│          No coding required.                                │
│                                                             │
│          [▶ Watch Introduction Video]                       │
│                                                             │
│          [Get Started - It's Free]   [Join Community]       │
│                                                             │
│          ┌─────────────────────────────────────┐            │
│          │                                     │            │
│          │     [Autoplay Video Hero]           │            │
│          │     (muted, with captions)          │            │
│          │                                     │            │
│          └─────────────────────────────────────┘            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Countdown Timer to January 1st Launch]                    │
│  "Launching in X days, X hours, X minutes"                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  What You'll Learn                                          │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Week 1   │ │ Week 2   │ │ Week 3   │ │ Week 4   │       │
│  │ Setup &  │ │ Process  │ │ Visual & │ │ Business │       │
│  │ Structure│ │ Content  │ │ Audio    │ │ Assets   │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Email Signup                                               │
│                                                             │
│  "Get notified when each day drops"                         │
│                                                             │
│  [Email input] [Subscribe]                                  │
│                                                             │
│  "No spam. Unsubscribe anytime. British bloke's honour."    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Navigation (Sidebar)

Following Carl's pattern - collapsible by week:

```
Home

Getting Started
├── Introduction
├── Installation
└── Prerequisites

▼ Week 1: Foundations
├── Overview
├── Day 1: Claude Code Essentials
├── Day 2: Command Line Basics
├── Day 3: Markdown Mastery
├── Day 4: Second Brain Setup
├── Day 5: CLAUDE.md Builder
├── Day 6: Note Templates
└── Day 7: Frontmatter Schema

▶ Week 2: Content Processing
▶ Week 3: Visual & Audio
▶ Week 4: Business Assets
▶ Bonus: Frameworks

Community
```

### Day Page Template

Each day's page follows this structure:

```markdown
---
title: "Day 1: Claude Code Essentials"
description: "Install Claude Code and run your first command"
---

# Day 1: Claude Code Essentials

<YouTube id="VIDEO_ID_HERE" />

## What You'll Learn

- Install Claude Code on Mac, Windows, or Linux
- Run your first command
- Understand how the agent thinks

## Watch the Video

[Embedded YouTube player]

## The Slash Command

```bash
/w1.d1
```

[Download from GitHub →](link)

## Key Concepts

[Written summary of video content for SEO and accessibility]

## Try It Yourself

1. Open your terminal
2. Run `claude`
3. Type "Hello, I'm new here"

## Common Issues

[FAQ/troubleshooting section]

## What's Next?

Tomorrow in [Day 2: Command Line Basics](/week-1/day-2-command-line-basics),
we'll get comfortable with the 10 terminal commands you actually need.

---

<EmailSignup />
```

### Pre-Launch Page (Live Now)

Before January 1st, the site shows:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          31 Days of Claude Code                             │
│          to Save Time                                       │
│                                                             │
│          A free course teaching you to automate             │
│          your entire workflow with AI.                      │
│                                                             │
│          Launching January 1st, 2026                        │
│                                                             │
│          [COUNTDOWN: 24 days, 3 hours, 42 minutes]          │
│                                                             │
│          ┌─────────────────────────────────────┐            │
│          │                                     │            │
│          │     [Teaser Video]                  │            │
│          │                                     │            │
│          └─────────────────────────────────────┘            │
│                                                             │
│          Be first to know when we launch                    │
│                                                             │
│          [Email] [Notify Me]                                │
│                                                             │
│          Join 247 others waiting for launch                 │
│                                                             │
│          ────────────────────────────────────────           │
│                                                             │
│          What's Coming                                      │
│                                                             │
│          • 31 daily videos (5-10 mins each)                 │
│          • Downloadable slash commands                      │
│          • Free community access                            │
│          • Zero coding required                             │
│                                                             │
│          ────────────────────────────────────────           │
│                                                             │
│          Follow the Journey                                 │
│                                                             │
│          [LinkedIn] [YouTube] [GitHub]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Experience

- Full parity with desktop
- Hamburger menu with slide-out navigation
- Touch-friendly video player controls
- Readable code blocks with horizontal scroll
- Email capture optimised for mobile keyboards

### Dark Mode

- Default: Dark (matches Claude aesthetic)
- User toggle in header
- Persists via localStorage
- Respects `prefers-color-scheme` on first visit

---

## GitHub Repository

### Repository Details

- **Name:** `coengineers-productivity-course`
- **Visibility:** Private (until launch)
- **License:** MIT
- **Organisation:** Personal account or create `coengineers` org

### Repository Structure

```
coengineers-productivity-course/
├── .claude/
│   └── commands/
│       ├── week-1/
│       │   ├── w1.d1.md
│       │   ├── w1.d2.md
│       │   ├── w1.d3.md
│       │   ├── w1.d4.md
│       │   ├── w1.d5.md
│       │   ├── w1.d6.md
│       │   └── w1.d7.md
│       ├── week-2/
│       │   ├── w2.d8.md
│       │   └── ... (w2.d9 - w2.d14)
│       ├── week-3/
│       │   └── ... (w3.d15 - w3.d21)
│       └── week-4/
│           └── ... (w4.d22 - w4.d28)
├── examples/
│   ├── week-1/
│   │   ├── day-1/
│   │   │   ├── input/
│   │   │   └── output/
│   │   └── ... 
│   ├── week-2/
│   ├── week-3/
│   └── week-4/
├── website/
│   └── (Astro/Starlight source)
├── CLAUDE.md
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

### Release Strategy

- **Pre-launch:** Private repo, preview deployments only
- **Launch (Jan 1):** Make repo public, tag `v1.0.0`
- **During January:** Tag each week as it completes (`v1.1.0`, `v1.2.0`, etc.)
- **Post-January:** Semantic versioning for updates

### README.md Content

```markdown
# 31 Days of Claude Code to Save Time

A free, open-source course teaching practical Claude Code automations 
for productivity. No coding experience required.

## Quick Start

1. Clone this repository
2. Open in Claude Code: `claude`
3. Run `/w1.d1` to start Day 1

## Course Structure

| Week | Theme | Days |
|------|-------|------|
| 1 | Foundations | 1-7 |
| 2 | Content Processing | 8-14 |
| 3 | Visual & Audio | 15-21 |
| 4 | Business Assets | 22-28 |
| Bonus | Frameworks | 29-31 |

## Watch the Videos

🎥 [YouTube Playlist](link)
🌐 [Course Website](https://coengineers.ai)
💬 [Community](https://circle.so/c/coengineers)

## Credits

Inspired by:
- [Carl Vellotti](https://ccforpms.com) - Claude Code for PMs course structure
- [Cole Medin](https://youtube.com/@ColeMedin) - Community-building approach

## License

MIT - do whatever you want with it.

## Disclaimer

This course and its creator are not affiliated with, endorsed by, 
or sponsored by Anthropic.
```

---

## Slash Commands

### Command Naming Convention

```
/w{week}.d{day}

Examples:
/w1.d1  → Week 1, Day 1 (Claude Code Essentials)
/w2.d10 → Week 2, Day 10 (YouTube Summariser)
/w4.d26 → Week 4, Day 26 (Proposal Generator)
```

### Bonus Content (Not Slash Commands)

Days 29-31 (BMAD, PRP, SpecKit) are linked to YouTube videos only, not slash commands. These are advanced frameworks that require watching the videos to understand context.

### Slash Command Template

Each slash command follows this structure:

```markdown
# Day X: [Title]

You are helping the user with [specific task]. This command is part of 
the "31 Days of Claude Code" course from CoEngineers.ai.

## What This Does

[Clear description of the automation]

## How to Use

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Example Input

[Show what the user should provide]

## Expected Output

[Show what they'll get back]

## The Prompt

[The actual prompt/instructions for Claude Code]

## Tips

- [Helpful tip 1]
- [Helpful tip 2]

## Learn More

Watch the full video: [YouTube Link]
Course website: https://coengineers.ai/week-X/day-Y

---
CoEngineers.ai | MIT License
```

---

## Marketing Campaign

### Campaign Timeline

| Phase | Dates | Focus |
|-------|-------|-------|
| Pre-launch | 8 Dec - 31 Dec | Build anticipation, email list |
| Launch | 1 Jan | Day 1 release, big push |
| Sustain | 2-31 Jan | Daily content, engagement |
| Post-launch | Feb onwards | Community, paid tier prep |

### LinkedIn Content Strategy

**Frequency:** Daily posts
**Best times:** 8am, 12pm, or 5pm GMT
**Content mix:** 40% video, 30% carousels, 30% text posts

#### Pre-Launch Themes (8-31 December)

| Week | Theme | Content Focus |
|------|-------|---------------|
| Week 1 (8-14 Dec) | The Problem | Pain points, time wasted, manual processes |
| Week 2 (15-21 Dec) | The Solution | What Claude Code can do, teasers |
| Week 3 (22-28 Dec) | The Journey | Behind-the-scenes, course creation |
| Week 4 (29-31 Dec) | The Launch | Countdown, final teasers |

#### Pre-Launch Post Templates

**Day 1 (8 Dec) - Introduction:**

```
I'm building something.

31 days. 31 videos. 31 ways to save time with Claude Code.

Launching January 1st.

Every day in January, I'll release a short video showing you 
one practical automation you can steal and use immediately.

No coding required.
No technical jargon.
Just results.

Who's interested?

Drop a 🔥 and I'll make sure you're first to know when we launch.

#ClaudeCode #Productivity #AI
```

**Week 1 - Pain Point Posts:**

```
How much time did you spend last week:

→ Formatting meeting notes?
→ Turning voice memos into actual notes?
→ Copying content between apps?
→ Making the same document for the 47th time?

I used to waste hours on this stuff.

Now it takes minutes.

Building a free course to show you how.

Launching January 1st.

Link in comments to get notified.
```

**Week 2 - Solution Teasers:**

```
Just recorded Day 16 of the course.

In 8 minutes, I show you how to turn any document 
into image prompts for Gemini 3.

The AI does all the creative thinking.
You just click "generate."

This would have taken me hours to figure out alone.

31 videos like this. Free. January 1st.

[Video clip teaser]
```

**Week 3 - Behind the Scenes:**

```
Recording Day 22 today.

The setup:
• OBS for screen recording
• Rode mic for audio
• Claude Code for... everything else

The irony of using AI to teach AI isn't lost on me.

23 days until launch.

[Photo of setup]
```

**Week 4 - Countdown:**

```
3 days.

31 videos ready.
31 slash commands tested.
1 community waiting.

January 1st.

Let's make 2026 the year you stop doing
things the hard way.

[Countdown graphic]
```

#### Launch Day Post (1 January)

```
It's live.

Day 1 of 31 Days of Claude Code is up.

Today: Getting Claude Code installed and running 
your first command.

5 minutes. Zero coding. Works on Mac, Windows, and Linux.

Every day this month, a new video drops.

By January 31st, you'll have 31 automations 
that save you hours every week.

Link in comments. Let's go.

#ClaudeCode #Productivity #AI #2026Goals
```

#### Daily Posts During January

```
Day {X}/31: {Title}

{One-line hook about what the video teaches}

Today you'll learn:
→ {Benefit 1}
→ {Benefit 2}
→ {Benefit 3}

{5-10 second video clip}

Full video + slash command: [link]

#ClaudeCode #Day{X}of31
```

### Video Content for LinkedIn

**Format recommendations:**

- Square (1:1) or vertical (4:5) for feed
- First 3 seconds = hook (text overlay)
- 15-60 seconds for teasers
- Captions baked in (not auto-generated)
- Bitcoin orange accent in graphics

**Video ideas:**

1. Before/after comparisons
2. Speed runs (watch me do X in 30 seconds)
3. "POV: You just discovered Claude Code"
4. Time-lapse of building something
5. Screen recordings with voiceover

---

## Email & Newsletter

### Technology Stack

| Component | Tool | Purpose |
|-----------|------|---------|
| Email sending | Resend | Transactional + marketing |
| Database | Supabase | Subscriber storage |
| Forms | Custom Astro component | On-site capture |

### Supabase Schema

```sql
-- Subscribers table
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT FALSE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  unsubscribed BOOLEAN DEFAULT FALSE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source TEXT, -- 'website', 'linkedin', 'youtube'
  tags TEXT[] DEFAULT '{}'
);

-- Email sends tracking
CREATE TABLE email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id),
  email_type TEXT NOT NULL, -- 'welcome', 'daily', 'weekly'
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE
);
```

### Email Sequences

#### Welcome Sequence (Immediate)

**Email 1: Welcome (Immediate)**

```
Subject: You're in! Here's what happens next

Hey {name},

Welcome to CoEngineers.

On January 1st, you'll get an email with Day 1's video.

Then every day in January, a new lesson drops:
- 5-10 minute video
- Downloadable slash command
- No coding required

While you wait, here's what you can do:
→ Install Claude Code (takes 5 mins): [link]
→ Join the community: [Circle link]
→ Follow on LinkedIn for daily updates: [link]

Any questions? Just reply to this email.

Cheers,
John

P.S. Tell a friend who needs to automate their life: [share link]
```

#### Daily Emails (January)

**Daily notification (sent at 8am GMT)**

```
Subject: Day {X}: {Title} 🚀

Morning!

Day {X} just dropped.

Today: {One-line description}

In this video, you'll learn:
→ {Key takeaway 1}
→ {Key takeaway 2}

[Watch Day {X} →]

Grab the slash command:
/w{week}.d{day}

See you tomorrow for Day {X+1}: {Tomorrow's title}

Cheers,
John

---
Not finding this useful? [Unsubscribe]
```

#### Weekly Recap (Every Sunday)

```
Subject: Week {X} Recap: What You Learned

Hey {name},

Here's what we covered this week:

Day {X}: {Title} - {one line}
Day {X+1}: {Title} - {one line}
...

Missed any? Catch up here: [Week overview link]

Community highlight:
"{Quote from community member about what they built}"
— {Name}, {Role}

What's coming next week:
→ {Day X+7 preview}
→ {Day X+8 preview}
→ ...

Have a great Sunday.

John
```

---

## Community Platform

### Platform: Circle

Following Cole Medin's approach with a focus on engagement and support.

### Space Structure

```
CoEngineers Community
├── 🏠 Start Here
│   ├── Welcome & Introductions
│   ├── Community Guidelines
│   └── How to Get Help
├── 📚 Course Discussion
│   ├── Week 1: Foundations
│   ├── Week 2: Content Processing
│   ├── Week 3: Visual & Audio
│   ├── Week 4: Business Assets
│   └── Bonus: Frameworks
├── 🛠️ Show & Tell
│   ├── Share Your Automations
│   └── Wins & Celebrations
├── 💬 General
│   ├── Off-Topic
│   └── Introductions
└── ❓ Support
    ├── Technical Help
    └── Feature Requests
```

### Community Guidelines

```markdown
# CoEngineers Community Guidelines

Welcome! This is a space for people learning Claude Code together.

## The Vibe

- Be kind. Everyone's learning.
- Share your wins, no matter how small.
- Ask questions freely. There are no stupid questions.
- Help others when you can.

## The Rules

1. **No spam or self-promotion** (unless it's genuinely helpful)
2. **Keep it SFW** (safe for work)
3. **No politics or religion** (plenty of other places for that)
4. **Respect privacy** (don't share others' info)

## Getting Help

- Use the relevant week's channel for course questions
- Check if your question's been answered before posting
- Share what you've already tried
- Include error messages if relevant

## Sharing Your Work

We love seeing what you build! When sharing:
- Explain what problem it solves
- Share the slash command if applicable
- Note any tools required

That's it. Welcome aboard.
```

### Launch Strategy

1. **Pre-launch:** Create community, invite early email subscribers
2. **Week 1:** Actively engage, answer every question
3. **Week 2+:** Encourage peer-to-peer support
4. **Ongoing:** Weekly "office hours" or Q&A thread

---

## Technical Infrastructure

### Vercel Configuration

```json
// vercel.json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["lhr1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### Environment Variables

```bash
# Vercel Environment Variables

# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_KEY=xxx

# Resend
RESEND_API_KEY=xxx

# Analytics (Vercel built-in)
# No config needed

# Site
PUBLIC_SITE_URL=https://coengineers.ai
PUBLIC_YOUTUBE_PLAYLIST_ID=xxx
PUBLIC_CIRCLE_URL=https://circle.so/c/coengineers
PUBLIC_GITHUB_REPO=https://github.com/xxx/coengineers-productivity-course
```

### Domain Setup

1. Purchase `coengineers.ai` (if not already owned)
2. Add to Vercel project
3. Configure DNS:
   - `A` record → Vercel IP
   - `CNAME` for `www` → `cname.vercel-dns.com`
4. Enable SSL (automatic)
5. Force HTTPS redirect

### API Routes (if needed)

```
/api/subscribe     → Add email to Supabase
/api/unsubscribe   → Mark as unsubscribed
```

---

## Production Timeline

### December 2025

| Date | Milestone |
|------|-----------|
| 8 Dec | PRD finalised, begin website build |
| 9-14 Dec | Starlight site structure, brand implementation |
| 15 Dec | Pre-launch page live |
| 15-21 Dec | Record Week 1 videos |
| 22-28 Dec | Record Week 2-4 videos |
| 29 Dec | All videos edited |
| 30 Dec | GitHub repo ready, slash commands tested |
| 31 Dec | Final checks, staging review |

### January 2026

| Date | Milestone |
|------|-----------|
| 1 Jan | 🚀 Launch Day 1, repo goes public |
| 2-7 Jan | Days 2-7 (Week 1 complete) |
| 8-14 Jan | Days 8-14 (Week 2 complete) |
| 15-21 Jan | Days 15-21 (Week 3 complete) |
| 22-28 Jan | Days 22-28 (Week 4 complete) |
| 29-31 Jan | Days 29-31 (Bonus content) |
| 31 Jan | Course complete, retrospective |

### February 2026+

- Community maintenance
- Gather feedback for v2
- Explore paid advanced content
- Additional tool integrations

---

## Success Metrics

### Pre-Launch (December)

| Metric | Target |
|--------|--------|
| Email signups | 500+ |
| LinkedIn followers gained | 200+ |
| YouTube subscribers | 100+ |

### Launch Month (January)

| Metric | Target |
|--------|--------|
| Total video views | 10,000+ |
| Average watch time | >50% |
| Email open rate | >40% |
| GitHub stars | 500+ |
| Community members | 300+ |
| Slash command downloads | 1,000+ |

### Engagement

| Metric | Target |
|--------|--------|
| Course completion (Day 31 views) | >30% of Day 1 viewers |
| Community posts per week | 50+ |
| User-generated automations shared | 20+ |

---

## Appendices

### Appendix A: Tools Featured in Course

| Tool | Category | Days Used | API/Integration |
|------|----------|-----------|-----------------|
| Claude Code | Core | All | CLI |
| Obsidian | Notes | 3, 4, 6, 7, 19 | Local app |
| Whisper | Transcription | 9, 13 | Local/API |
| Gamma | Presentations | 15 | Web app |
| Gemini 3 | Image generation | 16 | API |
| ElevenLabs | Voice | 17 | API |
| NotebookLM | Podcasts | 18 | Web app |
| HeyGen | Video avatars | 20 | Web app |
| Kling | Video generation | 21 | API |
| Canva | Graphics | 24 | Web app |
| Airtable | Database | 26 | API |
| MCP | Integration | 27 | Protocol |
| Guidde | Documentation | 28 | Web app |
| BMAD | Framework | 29 | GitHub |
| SpecKit | Framework | 31 | CLI |

### Appendix B: Competitor/Inspiration Analysis

| Course | What We Like | What We'll Do Differently |
|--------|--------------|---------------------------|
| CC for PMs (Carl Vellotti) | Starlight structure, slash commands, fictional company context | Daily videos, broader audience, British tone |
| Cole Medin tutorials | Community engagement, practical focus | Structured course vs standalone tutorials |
| BMAD Method | Comprehensive framework | Introduce as bonus, not core |

### Appendix C: Content Checklist Per Day

```markdown
## Day X Checklist

### Pre-Production
- [ ] Script written
- [ ] Example files prepared
- [ ] Slash command tested

### Production
- [ ] Video recorded
- [ ] Audio levels checked
- [ ] Screen capture clear

### Post-Production
- [ ] Video edited
- [ ] Captions added
- [ ] Thumbnail created

### Publishing
- [ ] YouTube upload (scheduled)
- [ ] Website page ready
- [ ] Email drafted
- [ ] LinkedIn post drafted
- [ ] Slash command in repo

### Quality Check
- [ ] Links work
- [ ] Command runs successfully
- [ ] Mobile preview checked
```

### Appendix D: Starlight Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://coengineers.ai',
  integrations: [
    starlight({
      title: 'CoEngineers',
      description: '31 Days of Claude Code to Save Time',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/xxx/coengineers-productivity-course',
        youtube: 'https://youtube.com/@coengineers',
        linkedin: 'https://linkedin.com/in/xxx',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/introduction' },
            { label: 'Installation', link: '/getting-started/installation' },
            { label: 'Prerequisites', link: '/getting-started/prerequisites' },
          ],
        },
        {
          label: 'Week 1: Foundations',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/week-1/overview' },
            { label: 'Day 1: Claude Code Essentials', link: '/week-1/day-1-claude-code-essentials' },
            // ... days 2-7
          ],
        },
        // ... weeks 2-4, bonus
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        // Custom components for video embeds, email signup, etc.
      },
    }),
    tailwind(),
  ],
});
```

### Appendix E: Attribution

```markdown
## Credits & Attribution

### Course Inspiration
- **Carl Vellotti** - [Claude Code for Product Managers](https://ccforpms.com)
  - Course structure, slash command approach, Starlight implementation
- **Cole Medin** - [YouTube Channel](https://youtube.com/@ColeMedin)
  - Community-building approach, engagement strategies

### Tools & Frameworks
- **BMAD Method** - [GitHub](https://github.com/bmad-code-org/BMAD-METHOD)
- **Context Engineering / PRP** - [Cole Medin](https://github.com/coleam00/context-engineering-intro)
- **SpecKit** - [GitHub](https://github.com/github/spec-kit)

### Disclaimer
This course and its creator are not affiliated with, endorsed by, 
or sponsored by Anthropic, Google, or any other company mentioned.
```

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 8 Dec 2025 | Initial PRD |

---

**End of Document**
