# Meeting Notes Example Output

This file demonstrates what a properly processed meeting note looks like with frontmatter metadata.

---

## Example Output: Product Roadmap Meeting

```markdown
---
created: 2025-12-05
modified: 2025-12-05
type: meeting-note
status: active
project: Q1-Roadmap
attendees: [Sarah, James, Priya, Alex]
location: Video Call
duration: 60 minutes
tags: [meeting, roadmap, planning, Q1]
---

# Product Roadmap Meeting Summary

**Date:** Tuesday, 5th December 2025
**Time:** 10:00 - 11:00 GMT
**Attendees:** Sarah (Chair), James, Priya, Alex

## Key Decisions

1. **Mobile App Priority**: Mobile development will proceed in Q1, targeting field sales team needs
2. **Reporting Timeline**: Advanced reporting (Excel/PDF exports) moved to Q2
3. **API Development**: API access deferred to Q2 due to documentation and authentication complexity
4. **Quick Win Approved**: Dark mode implementation approved for pre-Christmas delivery
5. **Pricing Strategy**: New "Professional" tier design to begin immediately, launch with Q2 features

## Action Items

| Action                                        | Owner | Due Date    | Status  |
| --------------------------------------------- | ----- | ----------- | ------- |
| Check budget for new developer hire           | Sarah | 12 Dec 2025 | Pending |
| Scope reporting work and estimate effort      | Priya | 12 Dec 2025 | Pending |
| Implement dark mode feature                   | James | 22 Dec 2025 | Pending |
| Draft pricing page copy for Professional tier | Sarah | 15 Dec 2025 | Pending |
| Map features to pricing tiers                 | Priya | 15 Dec 2025 | Pending |

## Discussion Summary

### Mobile vs Reporting Priority

The team debated whether to prioritise mobile app development or reporting improvements. James advocated for mobile citing customer demand from field sales teams. Priya highlighted reporting pain points from support tickets.

**Resolution:** Both will proceed, with mobile in Q1 and reporting in Q2. Budget check needed for potential new hire.

### API Development

Multiple customers requesting API access for system integration. Acknowledged as high-value opportunity but requires significant supporting work (documentation, authentication, rate limiting).

**Decision:** Defer to Q2 at earliest due to scope.

### Pricing Tiers

Proposed new "Professional" tier at £49/month between Basic (£19) and Enterprise (£199). Would include API access, priority support, and advanced reporting.

**Decision:** Design tier structure now, launch when supporting features are ready (projected Q2).

## Open Questions

- What is the realistic timeline for hiring and onboarding a new developer?
- Can reporting scope be reduced to fit Q1 alongside mobile?
- Should API access be gated behind Enterprise tier or available at Professional?

## Parking Lot (Future Discussion)

- Slack integration (mentioned, not discussed)
- Onboarding flow improvements (James to bring back later)
- Analytics dashboard (Priya's proposal, deferred)

## Next Meeting

**Date:** Tuesday, 12th December 2025, 10:00 GMT
**Agenda:**

- Review budget for new hire
- Priya's reporting scope estimate
- Finalise Q1 roadmap priorities

---

**Meeting notes processed by Claude Code**
```

---

## Why This Structure Works

### Frontmatter Metadata

The YAML frontmatter enables:

- **Findability**: Search all meeting notes with `type: meeting-note`
- **Filtering**: Find active meetings by status, project, or date
- **Context**: AI tools understand this is a meeting note, not general notes
- **Connections**: Tags link to related content

### Consistent Sections

Every meeting note should include:

1. **Header info**: Date, time, attendees (for context)
2. **Key decisions**: What was decided (the most important output)
3. **Action items**: Who does what by when (with clear table format)
4. **Discussion summary**: Context for decisions
5. **Open questions**: What remains unresolved
6. **Next meeting**: Continuity for follow-up

### Action Item Table Format

Using a table makes actions scannable and trackable:

- Owner clearly assigned
- Due date explicit
- Status can be updated over time

---

## Using This Example

When processing raw meeting notes, ask Claude Code to:

1. Extract key decisions as a bulleted list
2. Create action items table with owner and due date
3. Summarise discussions that led to decisions
4. Note questions that remain open
5. Include next meeting details
6. Add appropriate frontmatter metadata

The result should be something you could share with the team immediately.
