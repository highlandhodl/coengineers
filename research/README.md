# Claude Code PM Workflows Research

This folder contains comprehensive research on Claude Code workflows for product management and software development, compiled to inform the CoEngineers Week 4 curriculum redesign.

## Purpose

Week 4 of the CoEngineers course teaches learners to **build software using Claude Code** through a spec-driven development approach. This research documents the methodologies, tools, and best practices that informed our curriculum design.

## Contents

### Main Document
- **[claude-code-pm-workflows.md](./claude-code-pm-workflows.md)** - Comprehensive overview of spec-driven development with Claude Code

### Source Documents
Detailed analysis of key projects and resources:

| File | Source | Key Concept |
|------|--------|-------------|
| [ccforpms-course.md](./sources/ccforpms-course.md) | ccforpms.com | Interactive tool-as-teacher methodology |
| [github-spec-kit.md](./sources/github-spec-kit.md) | github/spec-kit | Spec-driven development toolkit |
| [claude-code-spec-workflow.md](./sources/claude-code-spec-workflow.md) | Pimzino | Requirements → Design → Tasks → Implement |
| [cc-sdd.md](./sources/cc-sdd.md) | gotalab/cc-sdd | Kiro-style cross-platform commands |
| [claude-command-suite.md](./sources/claude-command-suite.md) | qdhenry | 148+ namespace-organised commands |
| [anthropic-best-practices.md](./sources/anthropic-best-practices.md) | Anthropic Engineering | Official best practices |
| [awesome-claude-code.md](./sources/awesome-claude-code.md) | Community | Curated resources list |

### Templates
Ready-to-use templates derived from research:

| Template | Purpose |
|----------|---------|
| [prp-template.md](./templates/prp-template.md) | Product Requirements Prompt structure |
| [user-story-template.md](./templates/user-story-template.md) | User story with acceptance criteria |
| [retrospective-template.md](./templates/retrospective-template.md) | Ship It! retrospective format |

## Key Findings

### Core Principle: Spec-Driven Development

> "One study found that 1 iteration with structure was of similar accuracy to 8 iterations with unstructured prompts."

Write specifications before code. Specifications become executable, directly generating working implementations rather than just guiding them.

### The Workflow Pattern

All researched projects follow a similar progression:

```
Requirements → Design → Tasks → Implementation → Verification
```

Our Week 4 adapts this as:

```
Day 22: Product Idea (PRP)
Day 23: Product Backlog (Excel)
Day 24: User Story (Detailed spec)
Day 25: Code the Story (Implementation)
Day 26: Test the Story (Verification)
Day 27: Document the Story (Documentation)
Day 28: Ship It! (Deployment + Retrospective)
```

### Interactive vs Direct Generation

The most effective learning approaches (particularly ccforpms.com) use **interactive walkthroughs** where Claude asks questions before generating output. This:

- Forces learners to think through requirements
- Creates context for better outputs
- Models real-world PM-developer collaboration
- Produces personalised, relevant results

## How This Research Is Used

1. **CLAUDE.md** references this folder for project context
2. **Constitution** includes spec-driven learning as a core principle
3. **Week 4 slash commands** implement the interactive walkthrough pattern
4. **Templates** provide steal-ready starting points for learners

## External Links

- [Claude Code for PMs](https://ccforpms.com)
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow)
- [cc-sdd](https://github.com/gotalab/cc-sdd)
- [Claude Command Suite](https://github.com/qdhenry/Claude-Command-Suite)
- [Anthropic Best Practices](https://anthropic.com/engineering/claude-code-best-practices)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)

---

*Research compiled December 2025 for CoEngineers Week 4 redesign.*
