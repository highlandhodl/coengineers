# Metadata Before & After: Real Examples

This document shows how metadata transforms notes from isolated files into structured, searchable knowledge.

---

## Example 1: Meeting Notes

### Before (No Metadata)

```markdown
# Q4 Planning Meeting

We discussed the roadmap for next quarter. Sarah mentioned the API rewrite is behind schedule. James suggested we push the mobile app launch to January.

- API team needs two more weeks
- Mobile launch moved to January 15
- Budget review next Tuesday
```

**Problems:**

- No way to find all meeting notes
- Can't search by project or attendees
- No date context for when this happened
- Impossible to connect to related notes

### After (With Metadata)

```markdown
---
created: 2024-12-10
modified: 2024-12-10
type: meeting-note
status: active
project: Q4-Roadmap
attendees: [Sarah-Chen, James-Wilson, Alex-Thompson]
tags: [meeting, planning, roadmap]
---

# Q4 Planning Meeting

We discussed the roadmap for next quarter. Sarah mentioned the API rewrite is behind schedule. James suggested we push the mobile app launch to January.

- API team needs two more weeks
- Mobile launch moved to January 15
- Budget review next Tuesday
```

**Benefits:**

- Find all meeting notes with `type: meeting-note`
- Search by project, attendees, or date
- AI tools can use metadata for context-aware responses
- Easy to create automated reports and queries

---

## Example 2: Research Note

### Before (No Metadata)

```markdown
# Claude Code Tips

Found some useful stuff about Claude Code while browsing the docs.

- Use @filename to reference files
- /help shows commands
- You can ask it to explain code

This seems really useful for the course I'm building.
```

**Problems:**

- Mixed in with hundreds of other notes
- No indication of source or reliability
- Can't track which topics you've researched
- Difficult for AI assistants to understand context

### After (With Metadata)

```markdown
---
created: 2024-12-08
modified: 2024-12-10
type: resource-note
status: active
topic: Claude-Code
source: https://docs.anthropic.com/claude-code
confidence: high
related: [CoEngineers-Course, AI-Tools]
tags: [resource, claude-code, documentation]
---

# Claude Code Tips

Found some useful stuff about Claude Code while browsing the docs.

- Use @filename to reference files
- /help shows commands
- You can ask it to explain code

This seems really useful for the course I'm building.
```

**Benefits:**

- Track sources for credibility
- Group by topic for easy retrieval
- Confidence field helps prioritise information
- Related field creates knowledge connections

---

## Example 3: Project Task

### Before (No Metadata)

```markdown
# Website Redesign Tasks

- [ ] Review competitor sites
- [ ] Create wireframes
- [ ] Write homepage copy
- [ ] Get client feedback
```

**Problems:**

- No way to track project status
- Can't prioritise across multiple projects
- No deadline visibility
- Difficult to filter active vs completed work

### After (With Metadata)

```markdown
---
created: 2024-12-01
modified: 2024-12-10
type: project-task
status: in-progress
project: Website-Redesign
priority: high
deadline: 2024-12-20
owner: John-Gordon
tags: [project, website, client-work]
---

# Website Redesign Tasks

- [x] Review competitor sites
- [x] Create wireframes
- [ ] Write homepage copy
- [ ] Get client feedback
```

**Benefits:**

- Filter tasks by status, priority, or deadline
- Track ownership for team projects
- Create dashboards showing all high-priority tasks
- AI assistants can help prioritise work based on metadata

---

## Why Metadata Matters for AI Workflows

When you use Claude Code or other AI tools with your notes, metadata provides critical context:

1. **Better Search Results** - AI can find notes by type, project, or status instead of just keyword matching

2. **Smarter Responses** - When Claude Code reads a note with metadata, it understands whether it's a meeting note, research, or task list

3. **RAG (Retrieval Augmented Generation)** - AI systems that retrieve your notes to answer questions work much better with structured metadata

4. **Automated Workflows** - Create reports like "all high-priority tasks due this week" or "meeting notes from Project X"

5. **Knowledge Connections** - Related fields and tags help AI understand how your notes connect

---

## Key Takeaways

| Aspect        | Without Metadata      | With Metadata             |
| ------------- | --------------------- | ------------------------- |
| Findability   | Keyword search only   | Structured queries        |
| Context       | None                  | Rich context for AI tools |
| Organisation  | Manual folder sorting | Automatic categorisation  |
| Connections   | Hidden                | Explicit relationships    |
| AI Processing | Limited               | Enhanced understanding    |

---

**Remember:** Metadata isn't extra work—it's an investment that pays dividends every time you (or an AI assistant) searches your notes.
