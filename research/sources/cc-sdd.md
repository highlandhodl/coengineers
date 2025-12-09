# cc-sdd (Spec-Driven Development) Analysis

**Source**: https://github.com/gotalab/cc-sdd
**Creator**: Gotalab
**Focus**: Cross-platform Kiro-style commands

## Overview

cc-sdd implements spec-driven development using "Kiro-style" commands that work across **seven AI coding agents**. The emphasis is on platform independence and team collaboration.

## Supported AI Agents

- Claude Code
- Codex
- Cursor
- GitHub Copilot
- Gemini CLI
- Windsurf
- Qwen

The same commands and workflow work identically across all platforms.

## Core Workflow

### Requirements → Design → Tasks → Implementation

```
/kiro:spec-init
    ↓
/kiro:spec-requirements
    ↓
/kiro:spec-design
    ↓
/kiro:spec-tasks
    ↓
/kiro:spec-impl
```

Each phase must complete before the next begins.

## Commands Reference

### Primary Commands

| Command | Purpose |
|---------|---------|
| `/kiro:spec-init` | Initialise a new specification |
| `/kiro:spec-requirements` | Generate structured requirements |
| `/kiro:spec-design` | Create architectural designs with diagrams |
| `/kiro:spec-tasks` | Decompose into implementation tasks |
| `/kiro:spec-impl` | Execute implementation from specs |

### Validation Commands

| Command | Purpose |
|---------|---------|
| `/kiro:steering` | Analyse existing codebases |
| `/kiro:validate-gap` | Verify requirement coverage |
| `/kiro:validate-design` | Confirm design alignment |

## Development Scenarios

### Greenfield Projects (New)

1. **Initialise** - Create spec structure
2. **Requirements** - Gather and document needs
3. **Design** - Create architecture
4. **Tasks** - Decompose into work items
5. **Implement** - Build per specification

### Brownfield Enhancement (Existing)

1. **Analyse** - Understand existing codebase (`/kiro:steering`)
2. **Spec** - Create specification for enhancement
3. **Design** - Plan modifications
4. **Tasks** - Plan implementation steps
5. **Implement** - Execute changes

## Template System

Teams customise documents in `.kiro/settings/`:

### templates/
Define structure for:
- Requirements documents
- Design documents
- Task lists

### rules/
Establish:
- Generation principles
- Evaluation standards
- Quality criteria

## Key Features

### Spec-First Guarantees

Separates approval stages from implementation:
1. Users review and approve requirements
2. Users review and approve design
3. **Only then** does AI implementation begin

This prevents AI from jumping ahead and building the wrong thing.

### Dependency Tracking

Tasks include explicit dependencies, enabling:
- Parallel development across team members
- Clear understanding of blocking relationships
- Optimal task ordering

### Multi-Language Support

Works with 12 programming languages while maintaining consistent workflow.

### Context Persistence

Maintains project context across sessions:
- AI remembers architectural patterns
- Coding standards persist
- Previous decisions inform new work

## Kiro Style

The "Kiro style" refers to:
- Namespace-prefixed commands (`/kiro:`)
- Clear phase separation
- Validation checkpoints
- Cross-platform compatibility

This style originated from efforts to create AI-agnostic development workflows.

## Comparison with Other Tools

| Feature | cc-sdd | Spec Kit | spec-workflow |
|---------|--------|----------|---------------|
| Cross-platform | 7 agents | 16+ agents | Claude Code only |
| Template system | Yes | Yes | Limited |
| Dashboard | No | No | Yes |
| Namespace style | Kiro | speckit | spec- |

## Lessons for CoEngineers

1. **Platform independence** - Workflows should work across tools
2. **Namespace prefixing** - Clear command organisation
3. **Validation commands** - Explicit verification steps
4. **Brownfield support** - Don't assume greenfield
5. **Dependency tracking** - Enable parallel work

## Integration Notes

cc-sdd's approach could inform:
- Command naming conventions (`/w4:` prefix?)
- Explicit validation steps between days
- Support for learners using different AI tools

---

*Analysed December 2025 for CoEngineers research*
