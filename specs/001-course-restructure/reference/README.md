# Reference Implementation Patterns

This folder contains reference documentation for the lab file structure. Use these files during planning, task generation, and implementation to ensure consistency across all 20 labs.

## Contents

| File | Purpose |
| ---- | ------- |
| `SCRIPT_INSTRUCTIONS.md` | Common teaching rules for all CLAUDE.md scripts (Say/Check/Action blocks, British English, variables, conditionals) |
| `example-slash-command.md` | Pattern for slash command entry points (`/tN.lbN`) |
| `example-CLAUDE-teaching-script.md` | Pattern for detailed teaching scripts with full section breakdown |
| `example-course-structure-entry.json` | JSON structure for course-structure.json entries |

## Lab File Structure

Each lab MUST contain these components:

```
lesson-modules/theme-N/lab-N-slug/
├── CLAUDE.md                    # Teaching script (Say/Check/Action blocks)
└── [supporting-materials].md    # Optional: templates, sample data

.claude/
├── commands/tN.lbN.md           # Slash command entry point
├── course-structure.json        # Lab metadata, paths, navigation
└── SCRIPT_INSTRUCTIONS.md       # Common teaching rules (shared)
```

## Component Responsibilities

1. **Slash Command** (`.claude/commands/tN.lbN.md`)
   - Entry point that silently loads course-structure.json
   - Resolves the lab path and initiates the teaching script
   - Pattern: `/t1.lb1`, `/t2.lb3`, etc.

2. **Teaching Script** (`CLAUDE.md`)
   - Detailed learning experience with:
     - Learning objectives
     - Say blocks (verbatim instructor dialogue)
     - Check blocks (learner response gates)
     - Action blocks (Claude Code operations)
     - Success criteria
     - Common questions & answers

3. **Course Structure** (`.claude/course-structure.json`)
   - Metadata: theme/lab IDs, titles, slugs, paths, commands
   - Navigation references for {nextCommand}, {nextLabTitle}, etc.
   - Estimated duration for each lab

4. **Script Instructions** (`.claude/SCRIPT_INSTRUCTIONS.md`)
   - Shared rules for all teaching scripts
   - British English requirements
   - Variable resolution from course-structure.json
   - Conditional block evaluation
   - No fourth-wall breaking

5. **Supporting Materials** (optional)
   - Sample data, templates, or reference files
   - Referenced in CLAUDE.md via `@filename.md` syntax
   - Must use `.md` extension (Obsidian-compatible)

## Implementation Notes

- The learning experience is driven through Claude Code
- Website content (MDX pages) supports the learning experience but does not replace it
- Each lab must be independently completable
- All content must use British English
