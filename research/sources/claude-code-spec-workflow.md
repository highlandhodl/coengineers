# claude-code-spec-workflow Analysis

**Source**: https://github.com/Pimzino/claude-code-spec-workflow
**Creator**: Pimzino
**Installation**: `npm i -g @pimzino/claude-code-spec-workflow`

## Overview

Automated workflows for Claude Code featuring spec-driven development for new features and streamlined bug fix workflows. Notable for its **real-time dashboard** and **token optimisation**.

## Core Concept

Provides "structured workflows" enabling:
- **New Features**: Requirements → Design → Tasks → Implementation
- **Bug Fixes**: Report → Analyze → Fix → Verify

## Installation & Setup

```bash
npm i -g @pimzino/claude-code-spec-workflow
claude-code-spec-workflow
```

This creates a complete `.claude/` directory structure with all necessary workflows.

## Development Phases (Spec Workflow)

### 1. Requirements Phase
Creates user stories and acceptance criteria documenting what needs building.

**Output**: Structured requirements document with:
- User stories
- Acceptance criteria
- Success metrics

### 2. Design Phase
Produces technical architecture and diagrams outlining the solution approach.

**Output**: Design document with:
- Architecture diagrams
- Component relationships
- Technical decisions

### 3. Tasks Phase
Breaks work into "atomic, agent-friendly" tasks that Claude can execute independently.

**Output**: Task list with:
- Individual task definitions
- Dependencies between tasks
- Auto-generated execution commands

### 4. Implementation Phase
Executes each task using auto-generated commands or manual execution.

**Output**: Working code implementing the specification.

## Commands Reference

### Core Spec Commands

| Command | Purpose |
|---------|---------|
| `/spec-steering-setup` | Create project context documents |
| `/spec-create <name> "description"` | Initiate complete workflow |
| `/spec-execute <task-id>` | Manually run specific tasks |
| `/spec-status` | Show progress |
| `/spec-list` | List all specifications |

### Bug Fix Commands

| Command | Purpose |
|---------|---------|
| `/bug-create <name> "description"` | Document the issue |
| `/bug-analyze` | Investigate root cause |
| `/bug-fix` | Implement the solution |
| `/bug-verify` | Confirm resolution |
| `/bug-status` | Show fix progress |

### Auto-Generated Commands

When you create a spec, the system auto-generates task-specific commands:
```
/<name>-task-<id>
```

For example, creating spec "whisky-club" generates:
- `/whisky-club-task-1`
- `/whisky-club-task-2`
- etc.

## Project Structure

```
.claude/
├── commands/          # 14+ slash commands
├── steering/          # product.md, tech.md, structure.md
├── templates/         # Document templates
├── specs/             # Generated specifications
├── bugs/              # Bug fix workflows
└── agents/            # AI agents (optional)
```

## Steering Documents

Persistent files providing project guidance across all development:

### product.md
- Product vision
- Target users
- Core features
- Success metrics

### tech.md
- Technology stack
- Development tools
- Constraints
- Integrations

### structure.md
- File organisation
- Naming conventions
- Code patterns

Run `/spec-steering-setup` to create these documents with Claude's assistance.

## Key Features

### Zero Configuration
Works with any project type. No setup required beyond installation.

### Token Optimisation
Claims "60-80% token reduction" through intelligent document caching. Steering documents are cached and only loaded when relevant.

### Real-Time Dashboard

```bash
npx -p @pimzino/claude-code-spec-workflow claude-spec-dashboard
```

Features:
- Live progress tracking
- Git integration
- Task status visualisation

### Dashboard Tunnel

Share progress externally via secure HTTPS URLs:
```bash
npx -p @pimzino/claude-code-spec-workflow claude-spec-dashboard --tunnel
```

Optional password protection for shared access.

### TypeScript Implementation
95%+ type coverage for reliability.

## Development Approach

Rather than manual step-by-step instructions, the workflow provides **automated implementation** where Claude:
1. Receives full specification context
2. Executes tasks independently
3. Reports progress in real-time

This significantly reduces back-and-forth conversation overhead.

## Bug Fix Workflow Detail

The bug fix workflow is particularly elegant:

1. **Report** (`/bug-create`)
   - Document observed vs expected behaviour
   - Capture reproduction steps
   - Note environment details

2. **Analyse** (`/bug-analyze`)
   - Claude investigates codebase
   - Identifies root cause
   - Proposes fix strategy

3. **Fix** (`/bug-fix`)
   - Implement the solution
   - Minimal, focused changes

4. **Verify** (`/bug-verify`)
   - Confirm fix resolves issue
   - Check for regressions
   - Document the resolution

## Lessons for CoEngineers

1. **Auto-generate task commands** - Each task gets its own executable command
2. **Steering documents** - Persistent context improves all outputs
3. **Dashboard visualisation** - Progress tracking aids learning
4. **Bug workflow** - Separate workflow for fixes vs features
5. **Token optimisation** - Intelligent caching reduces costs

## Integration Opportunity

The dashboard concept could enhance CoEngineers:
- Track progress through Week 4
- Visualise PRP → Backlog → Story → Code progression
- Share progress with teams/mentors

---

*Analysed December 2025 for CoEngineers research*
