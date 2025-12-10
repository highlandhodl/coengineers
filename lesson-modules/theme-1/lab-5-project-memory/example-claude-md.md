# Example CLAUDE.md for Obsidian Vault

This is an example of a well-structured CLAUDE.md file for an Obsidian vault. Use it as inspiration for creating your own vault context files.

---

# Product Research Vault

## Vault Overview

This Obsidian vault contains product research, competitive analysis, user interviews, and feature specifications for digital products. It's used for continuous discovery and product planning.

## Vault Structure

I use the PARA method:

- **Projects/** - Active product initiatives with launch dates
- **Areas/** - Ongoing product areas (user research, competitive intel, metrics)
- **Resources/** - Reference materials organised by topic
- **Archives/** - Completed or inactive items

Special folders:

- `Resources/Templates/` - Note templates
- `Areas/User-Research/` - Interview transcripts and insights
- `Areas/Competitive-Analysis/` - Competitor tracking
- `Resources/Frameworks/` - Product methodologies (Jobs-to-be-Done, OKRs, etc.)

## Note-Taking Preferences

- **British English** - Use British spellings (organisation, behaviour, optimise)
- **Templates first** - Always use templates from Resources/Templates/
- **Metadata required** - All notes must include frontmatter
- **Link liberally** - Connect related notes with [[wiki-links]]
- **Tag strategically** - Use tags for broad categories, links for specific relationships

## Metadata Standards

Refer to `Resources/Templates/Metadata-Standards.md` for complete field definitions.

### Core Fields (all notes)

- **created:** YYYY-MM-DD
- **modified:** YYYY-MM-DD
- **type:** interview-note, feature-spec, competitive-analysis, research-synthesis, etc.
- **status:** active, completed, archived

### Type-Specific Fields

**Interview Notes:**

- interviewee: Name
- role: Their job title
- company: Their organisation
- interview-date: YYYY-MM-DD

**Feature Specs:**

- feature-name: Name of feature
- priority: high, medium, low
- target-release: YYYY-QN

**Competitive Analysis:**

- competitor: Company name
- category: direct, indirect, adjacent
- last-reviewed: YYYY-MM-DD

## Current Projects

- **Q1 Mobile App** - Shipping iOS app by March 2025
- **Onboarding Redesign** - Improving first-time user experience
- **Enterprise Features** - Building B2B capabilities

## Common Workflows

### User Interview Process

1. Create interview note from template (Resources/Templates/Interview-Note-Template.md)
2. Conduct interview and take rough notes
3. Process notes within 24 hours to extract insights
4. Link insights to related feature specs or opportunity areas
5. Update Research-Insights-Index.md with key findings

### Feature Specification

1. Create feature spec from template
2. Add user stories and acceptance criteria
3. Link to relevant user research notes
4. Add wireframes or mockups to Assets/ folder
5. Tag with relevant product area

### Competitive Analysis

1. Create competitor note from template
2. Track product changes monthly
3. Add screenshots to Assets/Competitors/
4. Link to relevant feature specs where we compete
5. Update Competitive-Landscape.md overview

## Obsidian Plugins in Use

- **Templates** (Core) - For note templates
- **Dataview** (Community) - For querying notes and generating indexes
- **Excalidraw** (Community) - For sketching user flows and wireframes
- **Calendar** (Community) - For daily notes and interview scheduling

## Dataview Queries I Use

### Recent Interviews

\`\`\`dataview
TABLE interviewee, role, company, interview-date
FROM #interview
WHERE interview-date >= date(today) - dur(30 days)
SORT interview-date DESC
\`\`\`

### Active Features by Priority

\`\`\`dataview
TABLE priority, target-release, status
FROM "Projects"
WHERE type = "feature-spec" AND status = "active"
SORT priority ASC
\`\`\`

## Linking Conventions

- **User Insights:** Link to interview notes where they originated
- **Feature Specs:** Link to research that validates the feature
- **Competitor Notes:** Link to our features that compete in the same space
- **Related Notes Section:** Always include at bottom of notes

## Naming Conventions

- **Interview Notes:** Interview-[Name]-[Company]-[YYYY-MM-DD].md
- **Feature Specs:** Feature-[Name]-Spec.md
- **Competitive Analysis:** Competitor-[Company-Name].md
- **Research Syntheses:** Research-[Topic]-Synthesis.md

## How to Work With Me

- **Always use templates** - Check Resources/Templates/ before creating notes
- **Ask about structure** - If you're unsure where a note belongs, ask me
- **Maintain metadata** - Every note needs frontmatter
- **Link generously** - Help me see connections between notes
- **British English only** - User-facing content and documentation
- **Update modified dates** - When editing notes, update the modified field

## Special Considerations

- **Anonymise participants** - Use pseudonyms in shareable summaries
- **Competitor screenshots** - Keep in Assets/Competitors/, reference with `![[screenshot.png]]`
- **OKRs and metrics** - Store in Areas/Product-Metrics/
- **Design assets** - Keep in Assets/ folder, link from notes

## Research Framework

We use **Jobs-to-be-Done** for user research and **Continuous Discovery** for product decisions. When creating research notes:

- Identify the job the user is trying to accomplish
- Note the current workaround or alternative
- Capture pain points in their current solution
- Link to feature opportunities

## Tags in Use

- #interview - User interviews
- #research - Research syntheses
- #feature - Feature specifications
- #competitor - Competitive analysis
- #insight - Key insights from research
- #opportunity - Product opportunities
- #decision - Product decisions

Plus project-specific tags: #mobile-app, #onboarding, #enterprise

---

## How to Use This File

When working on this vault, Claude Code will read this file to understand:

- The vault's purpose (product research and planning)
- Organisational structure (PARA with special folders)
- Metadata standards and naming conventions
- Common workflows for interviews, specs, and competitive analysis
- Plugins and dataview queries in use
- How to link and tag notes appropriately

Keep this file updated as the vault evolves. If you add new workflows, plugins, or metadata fields, document them here so Claude stays in sync with your process.
