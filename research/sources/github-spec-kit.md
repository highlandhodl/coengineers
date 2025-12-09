# GitHub Spec Kit Analysis

**Source**: https://github.com/github/spec-kit
**Creator**: GitHub
**Blog Post**: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/

## Overview

Spec Kit is GitHub's open-source toolkit for spec-driven development. Its core philosophy: **specifications become executable, directly generating working implementations** rather than just guiding them.

## Core Philosophy

> "Instead of coding first and writing docs later, in spec-driven development, you start with a spec. This is a contract for how your code should behave and becomes the source of truth your tools and AI agents use to generate, test, and validate code."

### Benefits

1. **Less guesswork** - AI knows what it's supposed to build
2. **Fewer surprises** - Spec defines expected behaviour
3. **Higher-quality code** - Structured iteration beats unstructured prompts
4. **Focused reviews** - Review specs, not thousand-line code dumps

## The Workflow

### Six Key Steps

1. **Establish Principles** (`/speckit.constitution`)
   - Create governing project principles
   - Define development guidelines
   - Set quality standards

2. **Define Requirements** (`/speckit.specify`)
   - Describe what to build
   - Focus on the "what" and "why"
   - Avoid implementation details

3. **Plan Implementation** (`/speckit.plan`)
   - Create technical plans
   - Address tech stack decisions
   - Design architecture

4. **Generate Tasks** (`/speckit.tasks`)
   - Break plan into actionable items
   - Define dependencies
   - Enable parallel work

5. **Execute** (`/speckit.implement`)
   - Build features per specification
   - Follow the plan systematically
   - Validate against requirements

6. **Validate** (Optional commands)
   - `/speckit.clarify` - Resolve ambiguities
   - `/speckit.analyze` - Check cross-artifact consistency
   - `/speckit.checklist` - Validate requirement quality

## Commands Reference

| Command | Purpose | Phase |
|---------|---------|-------|
| `/speckit.constitution` | Establish governing principles | Setup |
| `/speckit.specify` | Define requirements | Requirements |
| `/speckit.clarify` | Resolve ambiguities | Requirements |
| `/speckit.plan` | Create technical plan | Design |
| `/speckit.tasks` | Generate actionable items | Planning |
| `/speckit.analyze` | Cross-artifact consistency | Validation |
| `/speckit.checklist` | Quality validation | Validation |
| `/speckit.implement` | Execute implementation | Implementation |
| `/speckit.taskstoissues` | Convert tasks to GitHub issues | Integration |

## Project Structure

After initialisation with `specify init <project-name>`:

```
project/
├── constitution.md       # Governing principles
├── spec.md               # Feature specification
├── plan.md               # Implementation plan
├── tasks.md              # Actionable task list
└── .specify/
    └── memory/           # Project context artifacts
```

## AI Assistant Support

Spec Kit works with 16+ coding agents:

- Claude Code
- GitHub Copilot
- Cursor
- Google Gemini
- Amazon Q
- Windsurf
- And others

## Installation

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
specify init <PROJECT_NAME> --ai claude
```

## Key Principles

### Progressive Refinement
Each phase builds on the previous:
- Requirements inform design
- Design shapes tasks
- Tasks guide implementation

### Human-AI Collaboration
Claude generates initial templates and content, but human review and refinement ensure quality and alignment with business needs.

### Explicit Approval Gates
The `/spec:approve` command creates clear checkpoints, preventing premature progression and ensuring each phase meets quality standards.

### Technology Independence
Works across diverse development approaches and technology stacks—enterprise and greenfield projects alike.

## Research Finding

> "One study found that 1 iteration with structure was of similar accuracy to 8 iterations with unstructured prompts."

This validates the core premise: structured specifications dramatically improve AI coding outcomes.

## Lessons for CoEngineers

1. **Constitution first** - Establish principles before features
2. **Sequential phases** - Each phase depends on previous
3. **Approval gates** - Explicit checkpoints prevent drift
4. **Task decomposition** - Break work into atomic, agent-friendly units
5. **Cross-platform** - Same workflow works across AI tools

## Integration with CoEngineers

Our Week 4 adapts Spec Kit's workflow:

| Spec Kit Phase | CoEngineers Day |
|----------------|-----------------|
| /speckit.specify | Day 22: The Product Idea (PRP) |
| /speckit.tasks | Day 23: The Product Backlog |
| (detailed spec) | Day 24: The User Story |
| /speckit.implement | Day 25: Code the Story |
| (validation) | Day 26: Test the Story |
| (documentation) | Day 27: Document the Story |
| (deployment) | Day 28: Ship It! |

---

*Analysed December 2025 for CoEngineers research*
