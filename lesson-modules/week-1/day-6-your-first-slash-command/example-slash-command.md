# Example Slash Command

This is an example of a well-structured slash command file. Slash commands are markdown files containing instructions that Claude Code can execute.

---

## Example 1: Daily Note Generator

**File location:** `.claude/commands/daily-note.md`

```markdown
# Generate Daily Note

Create a new daily note file in the `notes/` directory using today's date.

## Instructions

1. Get today's date in YYYY-MM-DD format
2. Create a new file: `notes/[TODAY'S DATE].md`
3. Use this template:

---

# [DATE]

## Today's Focus

**Main goal:**

## **Secondary tasks:**

---

## Work Log

### [TIME] - [Activity]

---

## Things I Learned Today

1.

---

## Tomorrow's Priorities

1.

---

## Notes & Ideas

---

4. Open the file so I can start writing

## Example Output

The file should be created at `notes/2025-12-09.md` with the template filled in.
```

**How to use it:**

```bash
# In Claude Code
/daily-note
```

---

## Example 2: Project README Generator

**File location:** `.claude/commands/readme.md`

```markdown
# Generate Project README

Create a comprehensive README.md file for this project based on its structure and technology.

## Instructions

1. Analyse the project structure (look at package.json, file structure, etc.)
2. Identify the main technology stack
3. Create a README.md with these sections:
   - Project title and description
   - Tech stack
   - Getting started (installation)
   - Development commands
   - Project structure overview
   - Contributing guidelines
   - License

4. Use British English throughout
5. Include actual commands from package.json scripts
6. Make it friendly and accessible in tone

## Example Structure

# Project Name

Brief description of what this project does.

## Tech Stack

- Frontend: [detected technology]
- Backend: [detected technology]
- etc.

## Getting Started

### Prerequisites

- Node.js 18+
- [other requirements]

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

## Project Structure

\`\`\`
project/
├── src/
├── docs/
└── ...
\`\`\`

## Contributing

[Guidelines for contributing]

## License

[License information]

## Style

- Keep tone friendly and approachable
- Use clear, concrete examples
- Include emoji sparingly (maybe just one in the title)
```

**How to use it:**

```bash
# In Claude Code
/readme
```

---

## Example 3: Code Review Checklist

**File location:** `.claude/commands/review-checklist.md`

```markdown
# Generate Code Review Checklist

Create a code review checklist for the current branch's changes.

## Instructions

1. Run `git diff main` to see all changes
2. Analyse the changes and create a checklist covering:
   - Functionality: Does the code do what it's supposed to?
   - Tests: Are there tests for new functionality?
   - Documentation: Are docs updated if needed?
   - Code quality: Any obvious improvements?
   - Security: Any security concerns?
   - Performance: Any performance implications?

3. Create a markdown file `review-checklist.md` with specific items based on actual changes

4. Group items by category

5. Include relevant file names and line numbers where applicable

## Output Format

# Code Review Checklist

Generated: [DATE]
Branch: [CURRENT BRANCH]

## Functionality

- [ ] [Specific check based on changes]
- [ ] [Another specific check]

## Tests

- [ ] [Test-related check]

## Documentation

- [ ] [Doc-related check]

## Code Quality

- [ ] [Quality check]

## Security

- [ ] [Security check]

## Performance

- [ ] [Performance check]

## Style Notes

- Be specific: reference actual files and changes
- Focus on things that matter for this particular PR
- Keep checklist actionable (clear yes/no items)
```

**How to use it:**

```bash
# In Claude Code
/review-checklist
```

---

## Example 4: Meeting Notes Processor

**File location:** `.claude/commands/clean-meeting-notes.md`

```markdown
# Clean Up Meeting Notes

Take raw meeting notes and transform them into a structured, readable format.

## Instructions

1. Ask me for the file containing raw meeting notes
2. Read the file
3. Process the notes to create a clean, structured version with:
   - Meeting metadata (date, attendees, purpose)
   - Key discussion points (organised by topic)
   - Decisions made
   - Action items (with owners and due dates if mentioned)
   - Parking lot items (things mentioned but not resolved)

4. Save the processed notes to `docs/meeting-notes/[DATE]-[TOPIC].md`

## Output Format

# [Meeting Title]

**Date:** [DATE]
**Attendees:** [LIST]
**Purpose:** [BRIEF DESCRIPTION]

## Discussion

### [Topic 1]

[Summary of discussion]

### [Topic 2]

[Summary of discussion]

## Decisions

1. [Decision with context]
2. [Another decision]

## Action Items

- [ ] [Action item] - @[Owner] - Due: [DATE]
- [ ] [Another action item] - @[Owner] - Due: [DATE]

## Parking Lot

- [Item to revisit later]

## Style

- Use clear, professional language
- British English
- Be concise but don't lose important context
- Highlight important decisions
```

**How to use it:**

```bash
# In Claude Code
/clean-meeting-notes
```

Then provide the file path when Claude asks.

---

## Tips for Writing Good Slash Commands

1. **Be specific** - Tell Claude exactly what you want
2. **Include examples** - Show the desired output format
3. **Break it down** - List steps in order
4. **Add context** - Explain why certain things matter
5. **Iterate** - Start simple, refine based on results

## Common Patterns

### Asking for Input

```markdown
1. Ask the user for [specific information]
2. Validate that [condition is met]
3. Proceed with [action]
```

### File Operations

```markdown
1. Read file at [location]
2. Process by [specific transformation]
3. Save to [new location]
```

### Analysis Commands

```markdown
1. Analyse [specific aspect] of the project
2. Generate a report with [sections]
3. Save report to [location]
```

### Template Commands

```markdown
1. Create a new file at [location]
2. Use this template: [template content]
3. Fill in [specific fields]
```

## Where to Store Slash Commands

The standard location is `.claude/commands/` in your project root:

```
project/
├── .claude/
│   └── commands/
│       ├── daily-note.md
│       ├── readme.md
│       ├── review-checklist.md
│       └── clean-meeting-notes.md
├── src/
└── ...
```

This keeps them organised and easy to find. You can also create project-specific commands that use your project's particular structure or conventions.
