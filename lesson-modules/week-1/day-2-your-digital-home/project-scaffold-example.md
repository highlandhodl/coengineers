# Project Scaffold Example

This is an example folder structure for a well-organised project workspace. You don't need to follow this exactly - adapt it to suit your working style.

## The Structure

```
my-project/
├── docs/
│   ├── decisions/
│   │   ├── 2025-12-01-choosing-astro.md
│   │   └── 2025-12-05-api-design.md
│   ├── meeting-notes/
│   │   ├── 2025-12-weekly-standup.md
│   │   └── 2025-12-client-feedback.md
│   └── research/
│       ├── competitor-analysis.md
│       └── user-interviews.md
├── templates/
│   ├── daily-note.md
│   ├── user-story.md
│   ├── bug-report.md
│   └── project-readme.md
├── notes/
│   ├── 2025-12-01.md
│   ├── 2025-12-02.md
│   ├── ideas.md
│   └── learnings.md
├── src/
│   └── [your actual code lives here]
├── CLAUDE.md
├── README.md
└── .gitignore
```

## What Each Folder Does

### `/docs`

Your project's permanent knowledge base. Things that matter long-term go here.

- **decisions/** - Record important choices and why you made them
- **meeting-notes/** - Processed, organised notes from meetings
- **research/** - Background research, competitive analysis, user feedback

### `/templates`

Reusable templates for common tasks. When you find yourself creating the same structure repeatedly, make it a template.

Examples:

- Daily note format
- User story structure
- Bug report template
- Project README outline

### `/notes`

Your working memory. Daily notes, fleeting thoughts, things you're currently figuring out.

- Daily notes with date-based filenames (2025-12-01.md)
- `ideas.md` for random thoughts
- `learnings.md` for quick insights
- These can be messy - they're for you

## Why This Structure Works

1. **Separation of concerns** - Documentation vs. templates vs. daily work
2. **Easy to find things** - Consistent naming and organisation
3. **Works with Claude Code** - Clear structure helps Claude understand your project
4. **Scales well** - Add subfolders as projects grow

## Example: How You'd Use This

### Monday Morning

1. Create `notes/2025-12-09.md` from your daily note template
2. Write down today's goals
3. Start working, adding notes as you go

### During a Meeting

1. Capture rough notes in `notes/meeting-raw.md`
2. After meeting, ask Claude to clean them up
3. Save processed notes to `docs/meeting-notes/2025-12-09-sprint-planning.md`

### When Making a Big Decision

1. Research options, save findings to `docs/research/`
2. Make your decision
3. Document it in `docs/decisions/` with date and reasoning

### Creating Something New

1. Check `templates/` for a relevant starting point
2. Copy template to your working location
3. Fill in the blanks

## Customise for Your Needs

This is just a starting point. You might want to add:

- `/scripts` - Automation scripts
- `/assets` - Images, diagrams, resources
- `/archive` - Old notes you want to keep but don't need active
- `/inbox` - Unsorted items to process later

The key is **consistency**. Pick a structure and stick with it long enough to build habits.

## Quick Start

Want to create this structure? Save this as a slash command:

```bash
mkdir -p docs/{decisions,meeting-notes,research}
mkdir -p templates
mkdir -p notes
touch CLAUDE.md README.md .gitignore
echo "# My Project" > README.md
echo "node_modules/\n.DS_Store\nnotes/" > .gitignore
```

Then tell Claude: "Set up my project scaffold using the CoEngineers structure."
