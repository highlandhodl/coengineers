# Obsidian Template Examples

This document provides example templates for common note types in Obsidian.

---

## Meeting Notes Template

```markdown
---
created: { { date } }
modified: { { date } }
type: meeting-note
status: active
project: { { project } }
attendees: { { attendees } }
tags: [meeting, { { project } }]
---

# Meeting Notes - {{title}}

**Date:** {{date}}
**Duration:** {{duration}}
**Location:** {{location}}

## Attendees

- {{attendee1}}
- {{attendee2}}

## Agenda

1. {{agenda-item-1}}
2. {{agenda-item-2}}

## Discussion Notes

{{discussion}}

## Decisions Made

- {{decision1}}
- {{decision2}}

## Action Items

- [ ] {{action1}} - **Owner:** {{owner1}} - **Due:** {{due-date1}}
- [ ] {{action2}} - **Owner:** {{owner2}} - **Due:** {{due-date2}}

## Next Steps

{{next-steps}}

## Related Notes

- [[{{related-note-1}}]]
- [[{{related-note-2}}]]

---

**Next Meeting:** {{next-meeting-date}}
```

---

## Daily Note Template

```markdown
---
created: { { date } }
type: daily-note
mood: { { mood } }
energy: { { energy-level } }
tags: [daily]
---

# Daily Note - {{date}}

## Morning Intention

{{morning-intention}}

## Focus for Today

- {{focus1}}
- {{focus2}}
- {{focus3}}

## Time Blocks

**09:00 - 11:00:** {{time-block-1}}
**11:00 - 13:00:** {{time-block-2}}
**14:00 - 16:00:** {{time-block-3}}
**16:00 - 18:00:** {{time-block-4}}

## Completed Tasks

- [x] {{completed1}}
- [x] {{completed2}}

## In Progress

- [ ] {{in-progress1}}
- [ ] {{in-progress2}}

## Notes & Ideas

- {{note1}}
- {{note2}}

## Gratitude

- {{gratitude1}}
- {{gratitude2}}
- {{gratitude3}}

## Evening Reflection

{{evening-reflection}}

---

**Tomorrow's Priority:** {{tomorrow-priority}}
```

---

## Project Planning Template

```markdown
---
created: { { date } }
modified: { { date } }
type: project-note
status: { { status } }
project: { { project-name } }
deadline: { { deadline } }
priority: { { priority } }
tags: [project, planning]
---

# Project Plan - {{project-name}}

## Project Overview

**Goal:** {{goal}}
**Deadline:** {{deadline}}
**Status:** {{status}}
**Priority:** {{priority}}

## Context

{{context}}

## Objectives

1. {{objective1}}
2. {{objective2}}
3. {{objective3}}

## Key Deliverables

- [ ] {{deliverable1}}
- [ ] {{deliverable2}}
- [ ] {{deliverable3}}

## Milestones

| Milestone      | Target Date | Status      |
| -------------- | ----------- | ----------- |
| {{milestone1}} | {{date1}}   | {{status1}} |
| {{milestone2}} | {{date2}}   | {{status2}} |

## Stakeholders

- **Project Lead:** {{lead}}
- **Team Members:** {{team}}
- **Stakeholders:** {{stakeholders}}

## Resources Needed

- {{resource1}}
- {{resource2}}

## Risks & Mitigation

| Risk      | Impact      | Mitigation      |
| --------- | ----------- | --------------- |
| {{risk1}} | {{impact1}} | {{mitigation1}} |

## Success Criteria

- {{criterion1}}
- {{criterion2}}

## Related Notes

- [[{{related1}}]]
- [[{{related2}}]]
```

---

## Book Summary Template

```markdown
---
created: { { date } }
modified: { { date } }
type: book-summary
status: { { reading-status } }
author: { { author } }
published: { { year } }
genre: { { genre } }
rating: { { rating } }
tags: [book, { { genre } }]
---

# Book Summary - {{title}}

**Author:** {{author}}
**Published:** {{year}}
**Pages:** {{pages}}
**ISBN:** {{isbn}}
**Rating:** {{rating}}/5

## Key Takeaways

1. {{takeaway1}}
2. {{takeaway2}}
3. {{takeaway3}}

## Main Arguments

{{main-arguments}}

## Chapter Summaries

### Chapter 1: {{chapter1-title}}

{{chapter1-summary}}

### Chapter 2: {{chapter2-title}}

{{chapter2-summary}}

## Quotes & Highlights

> {{quote1}}
> — Page {{page1}}

> {{quote2}}
> — Page {{page2}}

## Personal Reflections

{{reflections}}

## How I'll Apply This

- {{application1}}
- {{application2}}

## Related Books

- [[{{related-book1}}]]
- [[{{related-book2}}]]

## Related Topics

- [[{{related-topic1}}]]
- [[{{related-topic2}}]]
```

---

## Decision Log Template

```markdown
---
created: { { date } }
modified: { { date } }
type: decision-log
status: { { status } }
project: { { project } }
decision-maker: { { decision-maker } }
tags: [decision, { { project } }]
---

# Decision Log - {{decision-title}}

**Date:** {{date}}
**Decision Maker:** {{decision-maker}}
**Status:** {{status}}

## Context

{{context}}

## Decision

{{decision}}

## Options Considered

### Option 1: {{option1}}

**Pros:**

- {{pro1}}
- {{pro2}}

**Cons:**

- {{con1}}
- {{con2}}

### Option 2: {{option2}}

**Pros:**

- {{pro1}}
- {{pro2}}

**Cons:**

- {{con1}}
- {{con2}}

## Rationale

{{rationale}}

## Consequences

- {{consequence1}}
- {{consequence2}}

## Action Items

- [ ] {{action1}}
- [ ] {{action2}}

## Related Decisions

- [[{{related-decision1}}]]
- [[{{related-decision2}}]]
```

---

## Retrospective Template

```markdown
---
created: { { date } }
modified: { { date } }
type: retrospective
project: { { project } }
period: { { period } }
tags: [retrospective, { { project } }]
---

# Retrospective - {{title}}

**Period:** {{period}}
**Date:** {{date}}
**Participants:** {{participants}}

## What Went Well 🎉

- {{went-well1}}
- {{went-well2}}
- {{went-well3}}

## What Didn't Go Well 🤔

- {{went-wrong1}}
- {{went-wrong2}}
- {{went-wrong3}}

## What We Learned 💡

- {{learned1}}
- {{learned2}}
- {{learned3}}

## Action Items for Next Time

- [ ] {{action1}}
- [ ] {{action2}}
- [ ] {{action3}}

## Metrics

| Metric      | Target      | Actual      | Variance      |
| ----------- | ----------- | ----------- | ------------- |
| {{metric1}} | {{target1}} | {{actual1}} | {{variance1}} |
| {{metric2}} | {{target2}} | {{actual2}} | {{variance2}} |

## Shoutouts 🙌

- {{shoutout1}}
- {{shoutout2}}

## Related Retrospectives

- [[{{previous-retro}}]]
```

---

## How to Use These Templates

1. **Save to Resources/Templates/** - Copy these to your Obsidian vault's template folder
2. **Enable Templates plugin** - Activate the Core Plugin in Obsidian settings
3. **Set template folder** - Point Obsidian to Resources/Templates/
4. **Create hotkey** - Set up a keyboard shortcut for inserting templates
5. **Fill placeholders** - Replace {{placeholders}} with real values

## Customisation Tips

- Add or remove sections based on your needs
- Adjust frontmatter fields to match your metadata standards
- Create variations for different contexts (e.g., Meeting-Notes-Brief vs Meeting-Notes-Detailed)
- Include dataview queries if you use that plugin
- Add emoji for visual scanning (optional)
