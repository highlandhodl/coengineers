<!--
  SYNC IMPACT REPORT

  Version Change: 0.0.0 → 1.0.0

  Modified Principles: N/A (initial creation)

  Added Sections:
  - Core Principles (5 principles)
  - Content Standards
  - Development Workflow
  - Governance

  Removed Sections: N/A (initial creation)

  Templates Requiring Updates:
  - .specify/templates/plan-template.md: ✅ Compatible (Constitution Check section present)
  - .specify/templates/spec-template.md: ✅ Compatible (no constitution-specific updates needed)
  - .specify/templates/tasks-template.md: ✅ Compatible (no constitution-specific updates needed)

  Follow-up TODOs: None
-->

# CoEngineers Constitution

## Core Principles

### I. Learner-First Design

Every decision MUST prioritise the learner experience above all else.

- Content MUST be accessible to non-technical professionals (product managers, marketers, business analysts)
- Explanations MUST avoid jargon; when technical terms are necessary, they MUST be defined
- Examples MUST be relevant to real-world professional scenarios, not abstract or contrived
- Learning curves MUST be gradual — each day builds on previous knowledge
- Error messages and guidance MUST be encouraging, never condescending

**Rationale**: The course exists to empower learners. Complexity for its own sake fails them.

### II. British English Throughout

All content MUST use British English spelling, grammar, and idioms.

- Use British spellings: colour, organisation, behaviour, catalogue, programme
- Use British terminology: "pop this in", "have a look", "brilliant", not "go ahead and", "awesome"
- Dates MUST use DD/MM/YYYY format in user-facing content
- Maintain an informal, warm, accessible tone — professional but not stuffy

**Rationale**: Consistency in voice builds trust and brand identity. The course has a distinct British personality.

### III. Progressive Disclosure

Content MUST be structured for incremental knowledge building.

- Each week MUST have a clear theme and learning outcomes
- Each day MUST build on skills from previous days
- Advanced concepts MUST NOT be introduced before foundational concepts
- Slash commands MUST match the complexity level of their corresponding day
- Cross-references to future content are permitted; assumptions of future knowledge are not

**Rationale**: Cognitive overload destroys learning. Proper sequencing enables mastery.

### IV. Interactive Learning (Tool-as-Teacher)

Lessons MUST use interactive teaching patterns, not passive content delivery.

- Teaching scripts MUST include "Check:" points where Claude waits for learner response
- "Say:" blocks MUST contain the exact content Claude delivers verbatim
- "Action:" blocks MUST specify exact commands Claude executes
- Learners MUST DO exercises, not just read about them
- Claude MUST stay in character as a teacher, never breaking the fourth wall

**Rationale**: Active learning produces retention. The ccforpms.com inspiration demonstrates this approach's effectiveness.

### V. Spec-Driven Development

For Week 4 (Building Software) and any code-generating features, specifications MUST precede implementation.

- User requirements MUST be captured in spec.md before any code is written
- Plans MUST be approved before implementation begins
- Implementation MUST trace back to specification requirements
- Changes MUST update specifications first, then implementation

**Rationale**: One structured iteration matches accuracy of eight unstructured iterations (Anthropic research). This is also what we teach.

## Content Standards

### Course Materials

- MDX files in `src/content/docs/` MUST validate against frontmatter schema
- Supporting materials (meeting notes, interviews, etc.) MUST use .md extension
- Supporting materials MUST feel realistic — messy, imperfect, professional
- Company context (personas, product details) MUST be consistent across all lessons
- Each lesson folder MUST be self-contained with all referenced materials

### Slash Commands

- Commands MUST follow naming convention: `w[week].d[day]` (e.g., `/w1.d1`, `/w2.d8`)
- Commands MUST be thin launchers that load teaching scripts, not self-contained prompts
- Teaching scripts MUST reside in lesson-modules folders as CLAUDE.md files
- Dynamic variables MUST be used for all navigation references (no hardcoded module numbers)

### Site Quality

- Build MUST pass (`npm run build`) before any merge
- No client-side JavaScript unless absolutely necessary
- Dark/light modes MUST both render correctly
- Links and navigation MUST work

## Development Workflow

### Feature Development

1. **Specify**: Create specification via `/speckit.specify`
2. **Clarify**: Resolve ambiguities via `/speckit.clarify` (if needed)
3. **Plan**: Design implementation via `/speckit.plan`
4. **Tasks**: Generate task list via `/speckit.tasks`
5. **Implement**: Execute tasks via `/speckit.implement`

### Code Review

- All PRs MUST verify constitutional compliance
- Learner experience impact MUST be considered in every review
- British English MUST be verified in content changes

### Testing

- Content changes MUST be tested by running the corresponding slash command
- Site changes MUST pass build and preview checks
- Interactive elements MUST be tested through complete user flows

## Governance

This Constitution supersedes all other development practices for the CoEngineers project.

**Amendment Process**:

1. Propose amendment with rationale
2. Document impact on existing content
3. Update Constitution via `/speckit.constitution`
4. Propagate changes to affected templates and content

**Versioning Policy**:

- MAJOR: Backward-incompatible principle changes or removals
- MINOR: New principle or section added, material guidance expansion
- PATCH: Clarifications, wording improvements, typo fixes

**Compliance**:

- All PRs MUST verify alignment with Core Principles
- CLAUDE.md MUST reference relevant constitutional principles
- Complexity beyond principles MUST be justified in plan documentation

**Guidance File**: CLAUDE.md serves as runtime development guidance; this Constitution provides the foundational rules.

**Version**: 1.0.0 | **Ratified**: 2025-12-08 | **Last Amended**: 2025-12-09
