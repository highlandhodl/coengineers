# Claude Code PM Workflows: Comprehensive Research

## Executive Summary

This document synthesises research on using Claude Code for product management and software development workflows. The key insight: **spec-driven development** dramatically improves outcomes when working with AI coding assistants.

## What is Spec-Driven Development?

Spec-driven development (SDD) is a methodology where you write down objectives, structure, and requirements in a clear specification document—a "spec"—before writing code. Think of it as creating a detailed blueprint before building.

### Why It Matters for AI Coding

Claude Code represents a paradigm shift from assistant-based to agentic development. For AI to do its best work, it needs deep context. Vague, one-shot prompts give vague, one-shot results. A detailed spec acts as a single source of truth—a guiding star for the entire development process.

**Key statistic**: One study found that 1 iteration with structure matched the accuracy of 8 iterations with unstructured prompts.

### The Typical Workflow

```
1. Requirements Phase    → Detailed specification of what needs building
2. Design Phase          → Architectural decisions and technical approach
3. Tasks Phase           → Breakdown into specific, actionable items
4. Implementation Phase  → Actual code development with verification
```

Each phase must complete and receive approval before proceeding to the next.

---

## Key Projects & Methodologies

### 1. Claude Code for PMs (ccforpms.com)

**Creator**: Carl Vellotti
**Repository**: github.com/carlvellotti/claude-code-pm-course

#### Teaching Methodology

The course uses an **immersive, tool-as-teacher** approach:
- Students clone a repository
- Type `/start-1-1` to begin first lesson
- Claude Code itself delivers the curriculum
- Hands-on execution from minute one

#### Course Structure

| Module | Focus | Key Skills |
|--------|-------|------------|
| Module 0 | Getting Started | Installation, setup |
| Module 1 | Fundamentals | File ops, agents, sub-agents, project memory |
| Module 2 | Advanced PM Work | PRDs, data analysis, strategic planning |

#### Key Innovations

1. **Config-Driven System**: `course-structure.json` controls module definitions, slash command routing, and navigation. Single source of truth.

2. **Teaching Scripts**: Claude follows scripts verbatim, treating "Check:" points as gates requiring student response.

3. **Multi-Perspective Feedback**: Custom sub-agents provide different viewpoints (Engineer, Executive, User Researcher).

4. **Parallel Processing**: Launch multiple Claude instances simultaneously (e.g., processing 10 meeting transcripts in 5 minutes instead of 50).

#### Slash Commands

- `/start-1-1`, `/start-1-2`, etc. - Module launchers
- Commands parse their own names to load correct teaching script
- Auto-generated navigation between modules

---

### 2. GitHub Spec Kit (github/spec-kit)

**Creator**: GitHub
**Philosophy**: Specifications become executable, directly generating working implementations.

#### Core Commands

| Command | Purpose |
|---------|---------|
| `/speckit.constitution` | Establish governing principles |
| `/speckit.specify` | Define requirements (the "what" and "why") |
| `/speckit.plan` | Create technical implementation plan |
| `/speckit.tasks` | Break plan into actionable items |
| `/speckit.implement` | Build features per specification |
| `/speckit.clarify` | Resolve ambiguities |
| `/speckit.analyze` | Cross-artifact consistency check |
| `/speckit.checklist` | Quality validation |

#### Key Principle

> "Intent-driven development where specifications precede implementation"

#### Support

Works with 16+ coding agents including Claude Code, GitHub Copilot, Cursor, Google Gemini, Amazon Q.

---

### 3. claude-code-spec-workflow (Pimzino)

**Repository**: github.com/Pimzino/claude-code-spec-workflow
**Focus**: Automated workflows with real-time progress tracking

#### Phases

**Spec Workflow (New Features):**
1. Requirements Phase - User stories and acceptance criteria
2. Design Phase - Technical architecture and diagrams
3. Tasks Phase - "Atomic, agent-friendly" tasks
4. Implementation Phase - Auto-generated execution commands

**Bug Fix Workflow:**
1. Report → Analyze → Fix → Verify

#### Commands

| Command | Purpose |
|---------|---------|
| `/spec-steering-setup` | Create product.md, tech.md, structure.md |
| `/spec-create <name> "desc"` | Initiate complete workflow |
| `/spec-execute <task-id>` | Run specific task |
| `/spec-status` | Show progress |
| `/bug-create`, `/bug-analyze`, `/bug-fix`, `/bug-verify` | Bug workflow |

#### Steering Documents

Persistent files that guide all development:
- **product.md** - Vision, users, features, success metrics
- **tech.md** - Technology stack, tools, constraints
- **structure.md** - File organisation, naming conventions, patterns

#### Key Features

- Zero Configuration - Works with any project type
- 60-80% token reduction through intelligent caching
- Real-time dashboard with WebSocket updates
- Optional secure tunnel for sharing progress externally

---

### 4. cc-sdd (gotalab)

**Repository**: github.com/gotalab/cc-sdd
**Focus**: Kiro-style commands for cross-platform AI assistants

#### Supported Agents

Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, Windsurf, Qwen

#### Commands

| Command | Purpose |
|---------|---------|
| `/kiro:spec-init` | Initialise new specification |
| `/kiro:spec-requirements` | Generate structured requirements |
| `/kiro:spec-design` | Create architecture with diagrams |
| `/kiro:spec-tasks` | Decompose into dependent tasks |
| `/kiro:spec-impl` | Execute implementation |
| `/kiro:steering` | Analyse existing codebases |
| `/kiro:validate-gap` | Verify requirement coverage |
| `/kiro:validate-design` | Confirm design alignment |

#### Key Features

- Supports 12 languages
- Maintains project context across sessions
- Explicit dependency tracking for parallel work
- "Spec-first guarantees" - separate approval stages from implementation

---

### 5. Claude Command Suite (qdhenry)

**Repository**: github.com/qdhenry/Claude-Command-Suite
**Scale**: 148+ slash commands, 54 AI agents

#### Namespaces

| Namespace | Purpose | Example Commands |
|-----------|---------|-----------------|
| `/project:` | Project management | init-project, create-feature |
| `/dev:` | Development utilities | code-review, debug-error, ultra-think |
| `/test:` | Testing infrastructure | generate-test-cases, test-coverage |
| `/security:` | Security scanning | security-audit, dependency-audit |
| `/performance:` | Optimisation | performance-audit, implement-caching |
| `/deploy:` | Release workflows | prepare-release, rollback-deploy |
| `/docs:` | Documentation | generate-api-documentation |
| `/setup:` | Environment config | setup-development-environment |
| `/team:` | Collaboration | standup-report, sprint-planning |
| `/sync:` | GitHub-Linear sync | sync-issues-to-linear |

#### Skills (Model-Invoked)

- **linear-todo-sync**: GraphQL task retrieval with priority organisation
- **cloudflare-manager**: Infrastructure management (Workers, KV, R2, Pages, DNS)

---

### 6. Anthropic Best Practices

**Source**: anthropic.com/engineering/claude-code-best-practices

#### Core Pattern: Explore → Plan → Code → Commit

1. **Explore**: Ask Claude to read files without writing code yet
2. **Plan**: Request a plan using thinking modes ("think" < "think hard" < "think harder" < "ultrathink")
3. **Code**: Only after approval, implement
4. **Commit**: Verify and commit changes

#### TDD Workflow (Anthropic's Favourite)

1. Write tests first (explicitly state it's TDD to avoid mocks)
2. Confirm tests fail
3. Commit tests
4. Implement code iteratively until tests pass

#### CLAUDE.md Files

Auto-loaded context documents placed at:
- Repo root
- Parent directories
- Child directories
- Home (~/.claude/CLAUDE.md)

Should document: bash commands, code style, testing instructions, repo-specific quirks.

#### Custom Slash Commands

Store Markdown templates in `.claude/commands/`. Commands support `$ARGUMENTS` for parameterisation:

```
/project:fix-github-issue 1234
```

#### Course Correction Tools

- Request plans before coding
- Press Escape to interrupt
- Double-tap Escape to edit previous prompts
- Ask Claude to undo changes

#### Multi-Claude Workflows

- One instance writes code, another reviews
- Multiple instances work parallel tasks using git worktrees

---

## Patterns & Best Practices

### 1. Progressive Refinement

Each phase builds on the previous:
- Requirements inform design
- Design shapes tasks
- Tasks guide implementation

### 2. Human-AI Collaboration

Claude generates initial templates and content, but human review ensures quality and alignment with business needs.

### 3. Explicit Approval Gates

Commands like `/spec:approve` create clear checkpoints, preventing premature progression.

### 4. Context Persistence

CLAUDE.md files and steering documents maintain project context across sessions, eliminating repetitive setup.

### 5. Parallel Processing

Launch multiple agents for:
- Different perspectives on same problem
- Independent tasks that don't conflict
- Research vs implementation

### 6. Atomic Tasks

Break work into small, self-contained units that AI can execute independently without losing context.

---

## Application to CoEngineers Week 4

Based on this research, Week 4 implements:

| Our Approach | Inspired By |
|--------------|-------------|
| Interactive slash commands | ccforpms.com tool-as-teacher |
| PRP → Backlog → Story → Code | Spec Kit, spec-workflow phases |
| Excel backlog output | PM-friendly deliverables |
| Framework-agnostic coding | Broad accessibility |
| Test-driven implementation | Anthropic TDD best practice |
| Documentation as part of workflow | Claude Command Suite `/docs:` |
| Retrospective at end | Complete learning cycle |

### Key Differentiator

Our commands use **interactive walkthroughs** where Claude asks questions before generating. This:
1. Forces learners to think through requirements
2. Creates context for better outputs
3. Models real PM-developer collaboration
4. Produces personalised, relevant results

---

## References

1. Carl Vellotti. *Claude Code for Product Managers*. https://ccforpms.com
2. GitHub. *Spec Kit: Toolkit for Spec-Driven Development*. https://github.com/github/spec-kit
3. Pimzino. *claude-code-spec-workflow*. https://github.com/Pimzino/claude-code-spec-workflow
4. Gotalab. *cc-sdd: Spec-Driven Development*. https://github.com/gotalab/cc-sdd
5. qdhenry. *Claude Command Suite*. https://github.com/qdhenry/Claude-Command-Suite
6. Anthropic. *Claude Code: Best Practices for Agentic Coding*. https://anthropic.com/engineering/claude-code-best-practices
7. hesreallyhim. *Awesome Claude Code*. https://github.com/hesreallyhim/awesome-claude-code

---

*Research compiled December 2025 for CoEngineers Week 4 curriculum redesign.*
