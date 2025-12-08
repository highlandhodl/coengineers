# Documentation Style Guide

## Overview

Documentation at CoEngine includes course content, teaching scripts, technical docs, API references, and internal knowledge base articles. This guide ensures consistency, clarity, and usability across all documentation.

---

## Core Principles

### 1. Write for the Learner

Documentation serves the reader, not the writer. Every sentence should help them do something or understand something better.

### 2. Show, Don't Just Tell

Examples are more valuable than explanations. Always include code snippets, screenshots, or real examples.

### 3. Structure for Scanning

Most readers scan before reading. Use headings, bullets, and visual hierarchy to support scanning.

### 4. Keep It Current

Outdated docs are worse than no docs. Include "Last Updated" dates and review regularly.

---

## Document Types

### 1. Course Content (MDX Files)

#### Structure

```markdown
---
title: 'Day X: Descriptive Title'
description: 'Brief description for SEO and previews'
---

# Day X: Descriptive Title

[Opening paragraph: What this lesson covers and why it matters]

## What You'll Learn

- Concrete outcome 1
- Concrete outcome 2
- Concrete outcome 3

## Prerequisites

[What learners should know or have completed before starting]

## The Lesson

[Main content broken into clear sections with examples]

## Key Takeaways

- Main point 1
- Main point 2
- Main point 3

## What's Next

[Preview of next lesson with command to run]
```

#### Voice & Tone

- **Conversational**: Write like you're teaching a friend
- **Encouraging**: Celebrate progress, normalise struggle
- **Specific**: Use concrete examples, not abstract concepts
- **British English**: colour, organisation, learnt (not learned)

#### Examples

**Good**:

> You've just created your first slash command! Right now it's simple—just outputs text. But this is the foundation. By the end of Week 1, you'll have commands that read files, process data, and generate complex outputs.

**Bad**:

> Slash commands are user-defined macros that enable rapid invocation of predefined workflows through the command-line interface.

### 2. Teaching Scripts (CLAUDE.md Files)

#### Structure

```markdown
# Day X: Title

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

[Teaching persona, style, tone]

## Learning Objectives

[3-5 measurable objectives]

## Teaching Flow

### Step 1: [Title] (X minutes)

**Say:**
"[Verbatim content Claude delivers]"

**Check:** [Specific learner action to wait for]

**Action:**
[Command or operation Claude executes]

**Present it like this:**
[Output formatting guidance]

### Step 2: [Title] (X minutes)

[Continue pattern...]

---

## Common Questions & Answers

### Q: [Likely question]?

**A:** [Helpful response]

---

## Success Criteria

[How to know the lesson succeeded]
```

#### Key Rules

- **Say blocks**: Always in quotation marks, always verbatim
- **Check blocks**: Must specify exact wait condition
- **Action blocks**: Must be executable commands
- **Timing**: Include estimated minutes per step

### 3. Technical Documentation

#### Structure

```markdown
# Feature/API Name

**Version**: X.Y.Z
**Last Updated**: YYYY-MM-DD

## Overview

[One paragraph: what it is and why it exists]

## Quick Start

[Minimal example to get started in <5 minutes]

## Installation

[Step-by-step setup instructions]

## Usage

[Common use cases with examples]

## API Reference

[Detailed specification if applicable]

## Examples

[Real-world examples with code]

## Troubleshooting

[Common issues and solutions]

## FAQ

[Frequently asked questions]
```

#### Voice & Tone

- **Precise**: Technical accuracy matters
- **Minimal**: Don't over-explain, trust the reader
- **Example-driven**: Code speaks louder than prose

### 4. README Files

#### Structure (for Course Repos)

````markdown
# Project Name

[One-sentence description]

## What This Is

[2-3 paragraphs explaining context and purpose]

## Quick Start

```bash
# Step 1
# Step 2
# Step 3
```
````

## Prerequisites

- Requirement 1
- Requirement 2

## Installation

[Detailed setup instructions]

## Usage

[How to use with examples]

## Project Structure

```
directory/
├── file1.js        # Description
├── file2.js        # Description
└── folder/         # Description
```

## Development

[How to run locally, tests, contribute]

## Deployment

[How to deploy if applicable]

## Troubleshooting

[Common issues]

## Contributing

[How to contribute]

## License

[License info]

````

### 5. Internal Knowledge Base (Notion)

#### Structure
```markdown
# Topic Title

**Owner**: [Who maintains this]
**Last Updated**: YYYY-MM-DD
**Status**: Draft | Active | Archived

## Overview

[What this doc covers]

## When to Use This

[Scenarios where this doc is relevant]

## How To

[Step-by-step instructions]

## Examples

[Real examples]

## Related Docs

- [Link to related doc 1]
- [Link to related doc 2]

## FAQ

[Common questions]
````

---

## Writing Style

### Headings

#### Use Sentence Case for Headings

**Good**: How to create a slash command
**Bad**: How To Create A Slash Command

#### Be Descriptive

**Good**: Installing Claude Code on macOS
**Bad**: Installation

#### Use Hierarchy Logically

```markdown
# Top-level topic (H1) - One per document

## Major sections (H2)

### Subsections (H3)

#### Minor details (H4) - Use sparingly
```

### Paragraphs

#### Keep Them Short

Aim for 2-4 sentences per paragraph. Long paragraphs are hard to scan.

**Good**:

> Claude Code slash commands live in the .claude/commands/ directory. Each command is a Markdown file containing instructions for Claude.
>
> To create a command, add a new .md file to that directory. The filename becomes the command name.

**Bad**:

> Claude Code slash commands are stored in the .claude/commands/ directory within your project repository, with each command being represented by an individual Markdown file that contains the specific instructions that Claude will follow when the command is invoked, and to create a new command, you simply need to add a new Markdown file to that directory, after which the filename you choose will automatically become the command name that users can invoke.

#### Front-Load Key Information

Put the most important point first.

**Good**:

> The course takes 31 days if you complete one lesson per day. Most graduates finish in 35-40 days, doing 3-4 lessons per week.

**Bad**:

> Most graduates take a bit longer than the recommended pace because life gets busy and not everyone can commit to daily lessons, so typically people finish in around 35-40 days, though the course is designed to take 31 days if you complete one lesson per day.

### Lists

#### Use Bullets for Unordered Items

**When**: Items have no inherent sequence

**Example**:

> Prerequisites:
>
> - Claude Code installed
> - Basic familiarity with terminal
> - Text editor (VS Code recommended)

#### Use Numbers for Sequential Steps

**When**: Items must be done in order

**Example**:

> Setup steps:
>
> 1. Clone the repository
> 2. Run `npm install`
> 3. Copy `.env.example` to `.env`
> 4. Start dev server with `npm run dev`

#### Keep List Items Parallel

All items should follow the same grammatical structure.

**Good**:

> - Create a new file
> - Add your content
> - Save and test

**Bad**:

> - Create a new file
> - Adding your content
> - You should save and test

### Code Examples

#### Use Fenced Code Blocks

Always specify the language for syntax highlighting.

**Good**:

```javascript
const greeting = 'Hello, world!';
console.log(greeting);
```

**Bad**:

```
const greeting = "Hello, world!";
console.log(greeting);
```

#### Include Context

Don't drop code without explanation.

**Good**:

> To read a file in your teaching script, use this pattern:
>
> ```markdown
> **Action:**
> Read the file @lesson-materials/example.md
> ```

**Bad**:

> ```markdown
> **Action:**
> Read the file @lesson-materials/example.md
> ```

#### Show Complete Examples

Prefer complete, runnable examples over fragments.

**Good**:

```javascript
// Complete example: Fetch user data
async function getUser(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}

// Usage
const user = await getUser(123);
console.log(user.name);
```

**Bad**:

```javascript
const response = await fetch(`/api/users/${userId}`);
// ... more code here
```

### Links

#### Use Descriptive Link Text

Tell readers where the link goes.

**Good**:

> See the [Week 4 methodology guide](link) for details.

**Bad**:

> See [here](link) for details.
> Click [this link](link) to learn more.

#### Link to Specific Sections

When possible, link directly to relevant sections, not just top-level pages.

**Good**:

> [Installation instructions for macOS](#installation-macos)

**Bad**:

> [Installation instructions](#installation)

---

## Formatting Conventions

### Emphasis

#### Use Bold for UI Elements and Key Terms

**Example**:

> Click the **Save** button to save your changes.
> The **Product Requirements Prompt (PRP)** is a structured document...

#### Use Italics Sparingly

Reserve for subtle emphasis or introducing terms.

**Example**:

> This is a _fundamental_ concept in the BMAD methodology.

#### Use Code Formatting for Code

Inline code, commands, file names, variables:

**Example**:

> Run the `npm install` command to install dependencies.
> Edit your `CLAUDE.md` file.
> Set the `API_KEY` environment variable.

### Callouts

#### Use Blockquotes for Important Notes

**For important information**:

> **Note**: This command requires admin privileges.

**For tips**:

> **Tip**: Use Cmd+K to open the command palette.

**For warnings**:

> **Warning**: This will delete all existing data.

### Tables

#### Use Tables for Structured Comparisons

**Good for**:

- Feature comparisons
- Configuration options
- API parameters

**Example**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | User's unique identifier |
| `options` | object | No | Additional options |

#### Keep Tables Simple

Don't cram too much into a table. If cells contain paragraphs, consider a different format.

---

## Course Content Specific

### Learning Objectives

#### Make Them Measurable

**Good**:

> - Create a custom slash command
> - Use variables in teaching scripts
> - Test your command with realistic inputs

**Bad**:

> - Understand slash commands
> - Learn about variables
> - Gain familiarity with testing

#### Use Action Verbs

Start with verbs: Create, Build, Write, Implement, Analyse, Design, Test, Deploy

### Prerequisites

#### Be Explicit

**Good**:

> Prerequisites:
>
> - Completed Day 1-5 (Week 1 foundation)
> - Have at least 2 custom slash commands
> - Familiar with CLAUDE.md file format

**Bad**:

> Prerequisites:
>
> - Basic knowledge of Claude Code

### Examples

#### Use Realistic Examples

Course examples should mirror real work.

**Good**:

> ```markdown
> # Meeting Notes - Product Sync
>
> Date: 2024-12-03
> Attendees: Sarah, Marcus, Maya
>
> ## Discussion
>
> - Need to fix bug in Day 15 (broken link)
> - Marcus can patch today
> - Maya will test tomorrow
>
> Action items:
>
> - [ ] Marcus: Fix Day 15 link (today)
> - [ ] Maya: Test fix (tomorrow)
> ```

**Bad**:

> ```markdown
> # Meeting Notes
>
> We discussed stuff.
> John will do things.
> ```

### Success Criteria

#### Make Them Testable

**Good**:

> Success criteria:
>
> - [ ] Command runs without errors
> - [ ] Output matches expected format
> - [ ] Learner can explain what the command does

**Bad**:

> Success criteria:
>
> - Command works
> - Learner understands

---

## API Documentation

### Endpoint Documentation

#### Template

````markdown
## GET /api/resource

Retrieves a list of resources.

### Parameters

| Parameter | Type    | Required | Description                               |
| --------- | ------- | -------- | ----------------------------------------- |
| `limit`   | integer | No       | Number of results (default: 10, max: 100) |
| `offset`  | integer | No       | Pagination offset (default: 0)            |

### Example Request

```bash
curl -X GET "https://api.coengine.ai/resources?limit=20" \
  -H "Authorization: Bearer YOUR_TOKEN"
```
````

### Example Response

```json
{
  "data": [
    {
      "id": "123",
      "name": "Example Resource",
      "createdAt": "2024-12-09T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}
```

### Error Responses

| Status Code | Description                             |
| ----------- | --------------------------------------- |
| 400         | Invalid parameters                      |
| 401         | Unauthorized (missing or invalid token) |
| 429         | Rate limit exceeded                     |
| 500         | Server error                            |

````

---

## Maintenance

### Last Updated Dates
Every doc should have a "Last Updated" date at the top or bottom.

**Format**: December 2024 (or YYYY-MM-DD for technical docs)

### Document Owners
Assign an owner to every doc. They're responsible for keeping it current.

**Format**:
> **Last Updated**: December 2024
> **Maintained By**: Tom Whitfield (Content)

### Review Cycle
- **Course content**: Review quarterly
- **Technical docs**: Review after major releases
- **Internal knowledge base**: Review annually (or when process changes)

---

## Common Mistakes

### 1. Over-Explaining
**Problem**: Explaining things the reader already knows

**Fix**: Trust your audience. If it's a prerequisite, don't re-teach it.

**Bad**:
> A slash command is a way to invoke Claude Code functionality through a command. Commands are files that contain instructions. When you run a command, Claude reads the file and follows the instructions...

**Good**:
> To create a slash command, add a Markdown file to `.claude/commands/`. The filename becomes the command name.

### 2. Missing Examples
**Problem**: Explaining without showing

**Fix**: Always include a concrete example.

**Bad**:
> Use dynamic variables to reference other lessons.

**Good**:
> Use dynamic variables to reference other lessons:
>
> ```markdown
> Continue to {nextDayTitle} by running {nextCommand}.
> ```
>
> This resolves to:
> "Continue to Your Digital Home by running w1.d2."

### 3. Inconsistent Terminology
**Problem**: Calling the same thing by different names

**Fix**: Use the glossary. Stick to standard terms.

**Bad**:
> Create a new command / Add a new macro / Build a new shortcut

**Good**:
> Create a new slash command (consistent term throughout)

### 4. Passive Voice
**Problem**: Weak, wordy writing

**Fix**: Use active voice.

**Bad**:
> The file should be created in the commands directory.

**Good**:
> Create the file in the commands directory.

### 5. Jargon Without Explanation
**Problem**: Using terms the audience doesn't know

**Fix**: Define terms on first use or link to glossary.

**Bad**:
> The PRP should include FRs, NFRs, and ACs.

**Good**:
> The Product Requirements Prompt (PRP) should include functional requirements (FRs), non-functional requirements (NFRs), and acceptance criteria (ACs).

---

## Glossary

Use these terms consistently:

| Term | Definition | Notes |
|------|------------|-------|
| Slash command | A command invoked with `/` in Claude Code | Not "macro" or "shortcut" |
| Teaching script | A CLAUDE.md file that scripts a lesson | Not "lesson script" |
| Supporting material | Files used in exercises (meeting notes, etc.) | Not "exercise files" |
| Learner | Person taking the course | Not "student" or "user" |
| Graduate | Person who completed all 31 days | Not "completer" |
| Course structure | The course-structure.json config file | Not "config" alone |
| Dynamic variable | Variable resolved from course-structure.json | Format: `{variableName}` |
| Conditional block | Position-aware content block | Format: `{ifCondition:content}` |

---

## Checklists

### Before Publishing Course Content

- [ ] Title is descriptive and matches day number
- [ ] Learning objectives are measurable (action verbs)
- [ ] Prerequisites are explicit
- [ ] Examples are realistic (not toy examples)
- [ ] Code blocks have language specified
- [ ] Success criteria are testable
- [ ] "What's Next" links to next lesson
- [ ] British spelling throughout
- [ ] Last Updated date included
- [ ] Proofread for typos

### Before Publishing Technical Docs

- [ ] Overview explains what and why
- [ ] Quick start example works (tested)
- [ ] API parameters are complete and accurate
- [ ] Example requests and responses are valid
- [ ] Error codes documented
- [ ] Troubleshooting covers common issues
- [ ] Version number and last updated date included
- [ ] Links are not broken
- [ ] Code examples are tested and runnable

### Before Publishing README

- [ ] One-sentence description is clear
- [ ] Quick start works (tested end-to-end)
- [ ] Prerequisites are listed
- [ ] Installation steps are complete
- [ ] Project structure is documented
- [ ] Contributing guidelines are clear
- [ ] License is specified
- [ ] Contact/support info included

---

## Resources

### Internal
- [Course content files](../src/content/docs/)
- [Teaching scripts](../lesson-modules/)
- [Company context](../company-context/)

### Style Guides
- [British English guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style)
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- [Google Developer Documentation Style Guide](https://developers.google.com/style)

### Tools
- [Hemingway Editor](https://hemingwayapp.com/) - Check readability
- [Grammarly](https://grammarly.com/) - Grammar and tone
- [Vale](https://vale.sh/) - Automated style checking

---

**Last Updated**: December 2024
**Maintained By**: Tom Whitfield (Head of Content)
````
