# Anthropic Claude Code Best Practices

**Source**: https://anthropic.com/engineering/claude-code-best-practices
**Publisher**: Anthropic Engineering Blog
**Authority**: Official guidance from Claude's creators

## Overview

Anthropic's official best practices for Claude Code, providing authoritative guidance on workflows, context management, and tool configuration.

## Core Pattern: Explore → Plan → Code → Commit

The foundational workflow recommended by Anthropic:

### 1. Explore
Ask Claude to read relevant files **without writing code yet**.
- Understand the codebase structure
- Identify relevant patterns
- Gather context

### 2. Plan
Request a plan using thinking modes:
- `think` - Basic planning
- `think hard` - More thorough
- `think harder` - Deep analysis
- `ultrathink` - Maximum depth (complex problems)

### 3. Code
Only after approval, proceed with implementation.
- Follow the approved plan
- Make incremental changes
- Verify each step

### 4. Commit
Verify changes and commit.
- Review what was built
- Confirm it matches the plan
- Create meaningful commits

## TDD Workflow (Anthropic's Favourite)

Test-Driven Development is explicitly highlighted as the preferred approach:

1. **Write tests first**
   - Explicitly state it's TDD to avoid mocks
   - Define expected behaviour
   - Cover edge cases

2. **Confirm tests fail**
   - Verify tests are actually testing something
   - Red before green

3. **Commit tests**
   - Tests are the specification
   - Commit before implementation

4. **Implement iteratively**
   - Write code until tests pass
   - Refactor with confidence

## Visual Iteration Workflow

For UI work:
1. Provide design mocks to Claude
2. Have Claude implement
3. Claude takes screenshots of results
4. Refine across 2-3 iterations

This feedback loop produces polished UI quickly.

## Context Management

### CLAUDE.md Files

Auto-loaded context documents placed at:
- Repo root
- Parent directories
- Child directories
- Home (`~/.claude/CLAUDE.md`)

**Should document:**
- Bash commands specific to the project
- Code style preferences
- Testing instructions
- Repo-specific quirks and patterns

**Key advice**: Keep CLAUDE.md concise. Refine through experimentation, similar to prompt engineering.

### Context Reset

Use `/clear` frequently during long sessions:
- Prevents irrelevant conversation from degrading performance
- Resets to clean slate
- Maintains response quality

## Tool Configuration

### Custom Slash Commands

Store Markdown templates in `.claude/commands/`:

```markdown
# Fix GitHub Issue

Fix issue number $ARGUMENTS

1. Read the issue details
2. Understand the context
3. Implement the fix
4. Verify the solution
```

Usage: `/fix-github-issue 1234`

The `$ARGUMENTS` keyword passes parameters from invocation.

### Personal Commands

Store personal commands in `~/.claude/commands/`:
- Preferred code style
- Documentation format
- Testing approach
- Workflows used across all projects

### MCP Integration

Model Context Protocol configuration:
- Project config
- Global config
- Checked-in `.mcp.json` files

Use `--mcp-debug` flag to troubleshoot configuration issues.

## Specificity in Instructions

**Bad**: "add tests for foo.py"

**Good**: "write a test for foo.py covering the logged-out user edge case; avoid mocks"

Be explicit about:
- What to test
- Edge cases to cover
- Approaches to avoid
- Expected output format

## Course Correction Tools

Four ways to adjust mid-workflow:

1. **Request plans first** - Ask for plan before coding
2. **Press Escape** - Interrupt current operation
3. **Double-tap Escape** - Edit previous prompts and explore alternatives
4. **Ask to undo** - Request Claude undo recent changes

## Passing Data to Claude

Multiple methods, often combined:

| Method | Use Case |
|--------|----------|
| Copy-paste | Small snippets |
| Piping (`cat file \| claude`) | File contents |
| Bash commands | Dynamic data |
| File reads | Existing files |
| URL fetches | Web content |

## GitHub Interaction

Install the `gh` CLI for Claude to handle:
- Issues
- Pull requests
- Commit messages
- Complex git operations (rebasing, conflict resolution)
- History searches

## Multi-Claude Workflows

Boost quality through parallel instances:

### Review Pattern
- One instance writes code
- Another instance reviews it

### Parallel Tasks
- Multiple instances work independent tasks
- Use git worktrees to avoid conflicts

## Key Takeaways for CoEngineers

1. **Explore before coding** - Always gather context first
2. **Plan explicitly** - Use thinking modes for complex problems
3. **TDD is preferred** - Tests as specifications
4. **CLAUDE.md is essential** - Persistent project context
5. **Be specific** - Detailed instructions get better results
6. **Use course correction** - Don't hesitate to interrupt and redirect
7. **Multiple instances** - Parallel work and review patterns

## Official Recommendations Summary

| Aspect | Recommendation |
|--------|----------------|
| Workflow | Explore → Plan → Code → Commit |
| Testing | TDD with explicit test-first approach |
| Context | CLAUDE.md files, kept concise |
| Commands | Custom slash commands for workflows |
| Specificity | Explicit, detailed instructions |
| Correction | Escape to interrupt, double-tap to edit |
| Scale | Multiple instances for parallel/review |

---

*Documented December 2025 for CoEngineers research*
