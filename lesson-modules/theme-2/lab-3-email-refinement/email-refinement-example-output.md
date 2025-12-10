# Email Refinement Example Output

This file demonstrates what a properly processed email thread looks like with frontmatter metadata.

---

## Example Output: Client Email Thread Summary

```markdown
---
created: 2025-12-07
modified: 2025-12-07
type: email-summary
status: active
project: TechConsult-Website
client: TechConsult Ltd
thread-length: 12 emails
date-range: 2025-11-28 to 2025-12-07
participants: [Marcus Thompson, Sarah Chen, Emma Wilson]
tags: [email, client, project-change, scope, TechConsult]
---

# Email Thread Summary: TechConsult Website Project Changes

**Thread Period:** 28 November - 7 December 2025
**Participants:** Marcus Thompson (Client), Sarah Chen (PM), Emma Wilson (Design)
**Total Emails:** 12

## Executive Summary

TechConsult has requested significant scope changes to their website project, including additional pages and revised branding. After negotiation, a revised timeline and additional budget were agreed.

## Key Decisions Made

1. **Scope Expansion Approved**
   - 3 additional landing pages added to project scope
   - Blog section brought forward from Phase 2 to Phase 1
   - Additional budget: £4,500

2. **Timeline Adjusted**
   - Original deadline: 15 December 2025
   - New deadline: 5 January 2026
   - Reason: Scope increase and holiday period

3. **Design Direction Confirmed**
   - Client approved Option B (modern gradient style)
   - Header layout finalised with full-width hero
   - Colour scheme: Navy blue primary, coral accent

## Action Items from Thread

| Action                                 | Owner           | Due Date    | Status  |
| -------------------------------------- | --------------- | ----------- | ------- |
| Send revised SOW with new scope        | Sarah Chen      | 8 Dec 2025  | Pending |
| Provide final logo files               | Marcus Thompson | 9 Dec 2025  | Pending |
| Create mockups for 3 new landing pages | Emma Wilson     | 12 Dec 2025 | Pending |
| Review and approve revised SOW         | Marcus Thompson | 10 Dec 2025 | Pending |

## Timeline of Key Exchanges

**28 Nov** - Marcus raised concern about missing landing pages for product lines
**29 Nov** - Sarah acknowledged and asked for specific requirements
**1 Dec** - Marcus provided detailed brief for 3 landing pages
**2 Dec** - Sarah sent impact assessment (timeline + budget)
**3 Dec** - Back-and-forth on budget negotiation
**5 Dec** - Agreement reached on £4,500 additional budget
**6 Dec** - Emma shared design options for landing pages
**7 Dec** - Marcus approved Option B, requested minor colour adjustment

## Agreed Changes Summary

### Original Scope

- Homepage
- About page
- Services page
- Contact page
- 5 case study pages

### Added to Scope (+£4,500)

- Product landing page: Enterprise
- Product landing page: SMB
- Product landing page: Startup
- Blog section (moved from Phase 2)

### Timeline Impact

- 3 weeks added to accommodate scope increase
- Holiday period factored in (23 Dec - 2 Jan reduced capacity)

## Outstanding Questions

- Will TechConsult provide copy for new landing pages, or should we budget for copywriting?
- Are the case study pages still required before launch, or can they come in Phase 2?
- Who will manage blog content after launch?

## Next Steps

1. Sarah to send revised SOW by end of day 8 December
2. Marcus to sign SOW and provide remaining assets by 10 December
3. Emma to begin landing page mockups once SOW signed
4. Weekly check-in call scheduled for every Tuesday at 14:00

---

**Email thread processed by Claude Code**
```

---

## Why This Structure Works

### Frontmatter Metadata

For email summaries, capture:

- **thread-length**: How many emails in the chain
- **date-range**: When the conversation occurred
- **participants**: Who was involved
- **client/project**: Link to relevant project

### Extracting Signal from Noise

Email threads are often repetitive and conversational. Processing should:

1. **Identify decisions**: What was actually agreed?
2. **Extract actions**: Who needs to do what?
3. **Note timeline**: How did the conversation evolve?
4. **Highlight outstanding items**: What's still unresolved?

### The Timeline Section

Showing key exchanges chronologically helps:

- Understand how decisions were reached
- Identify when commitments were made
- Provide context for future reference

---

## Using This Example

When processing email threads, ask Claude Code to:

1. Create executive summary (1-2 sentences)
2. List key decisions made in the thread
3. Extract action items with owners and dates
4. Summarise timeline of important exchanges
5. Note any outstanding questions
6. Suggest clear next steps
7. Add appropriate frontmatter metadata

The result should capture everything important from a long email chain in a format that's quick to scan and reference.
