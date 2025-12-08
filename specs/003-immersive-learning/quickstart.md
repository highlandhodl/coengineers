# Quickstart: Immersive Learning System

**Feature Branch**: `003-immersive-learning`
**Date**: 2025-12-09

## Overview

This guide covers:

1. How to run a lesson as a learner
2. How to create a new lesson module
3. How to update existing lessons
4. How to test changes

---

## For Learners: Running a Lesson

### Step 1: Open Claude Code

Navigate to the CoEngineers project root:

```bash
cd /path/to/coengineers
claude
```

### Step 2: Run a Lesson Command

Use the slash command for your current day:

```bash
/w1.d1    # Week 1, Day 1: First Conversation
/w2.d8    # Week 2, Day 8: Meeting Tamer
/w4.d22   # Week 4, Day 22: The Product Idea
```

### Step 3: Follow the Teaching Flow

Claude will guide you through the lesson:

1. **Introduction** - Context setting and learning objectives
2. **Interactive Steps** - Follow "Say:" content, respond at "Check:" points
3. **Exercises** - Work with supporting materials (@file references)
4. **Wrap-up** - Summary and next lesson pointer

### Step 4: Respond at Check Points

When Claude stops and waits, respond naturally:

- "Done" or "Ready" to confirm you've completed an action
- Ask questions if stuck (Claude will answer and return to script)
- Share your work for feedback if requested

---

## For Content Creators: Creating a New Lesson

### Step 1: Create the Lesson Folder

```bash
# Pattern: lesson-modules/week-{n}/day-{n}-{slug}/
mkdir -p lesson-modules/week-1/day-1-first-conversation
```

### Step 2: Create the Teaching Script

Create `CLAUDE.md` in the day folder:

```markdown
# Day 1.1: First Conversation

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a friendly, knowledgeable instructor guiding someone through their
first Claude Code experience. Use British English. Be warm but not patronising.

## Learning Objectives

By the end of this module, learners will be able to:

- Start a Claude Code session in their terminal
- Have a basic conversation with Claude
- Understand the difference between chat and commands

## Teaching Flow

### Step 1: Welcome (2 minutes)

**Say:**
"Welcome to Day 1 of your Claude Code journey!

{ifFirstInCourse:This is the very first lesson - exciting times ahead!}

Today we're going to have your first real conversation with Claude.
No setup required - just you and your terminal."

**Check:** Wait for learner to respond with "Ready" or similar acknowledgement

### Step 2: Starting Claude Code (3 minutes)

**Say:**
"Right, let's get started. Open your terminal and type `claude` to begin a session.

Once you see the Claude Code prompt appear, let me know."

**Check:** Wait for learner to confirm Claude Code is running

### Step 3: First Message (5 minutes)

**Say:**
"Brilliant! Now, simply type a message. Ask Claude anything - what it can do,
what the weather's like, or to tell you a joke.

Go on, have a chat. When you're ready to continue, just say so."

**Check:** Wait for learner to have their first interaction

### Step 4: Wrap-up (2 minutes)

**Say:**
"Congratulations! You've just had your first Claude Code conversation.

{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextDayTitle}.}

{ifLastInCourse:That's the end of the course! Well done.}"

---

## Common Questions & Answers

### Q: Claude isn't responding - what do I do?

**A:** Check you're connected to the internet and your API key is set up.
If issues persist, try restarting your terminal.

### Q: Can I ask about anything?

**A:** Almost anything! Claude is helpful, harmless, and honest.
It won't help with harmful requests but most questions are fair game.

---

## Success Criteria

- Learner successfully started a Claude Code session
- Learner sent at least one message and received a response
- Learner feels comfortable with the basic interaction pattern
```

### Step 3: Add Supporting Materials

Create any files referenced in the teaching script:

```bash
# Example: learning log template
touch lesson-modules/week-1/day-1-first-conversation/learning-log.md
```

Write realistic, messy content for materials like meeting notes.

### Step 4: Update Course Structure

Add the new day to `.claude/course-structure.json`:

```json
{
  "id": "1.1",
  "title": "First Conversation",
  "slug": "first-conversation",
  "path": "lesson-modules/week-1/day-1-first-conversation/CLAUDE.md",
  "command": "w1.d1",
  "description": "Your first interaction with Claude Code",
  "estimatedMinutes": 15
}
```

### Step 5: Create the Slash Command

Create `.claude/commands/w1.d1.md`:

```markdown
# Day 1: First Conversation - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract day/week ID:
   - Command name: "w1.d1" → Day ID: "1.1"
   - Pattern: w{week}.d{day}

2. Read `.claude/course-structure.json` to find the day with ID "1.1"

3. Get the teaching script path from the config

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions

6. Follow the teaching script PRECISELY as instructed
```

### Step 6: Test the Lesson

```bash
cd /path/to/coengineers
claude
/w1.d1
```

Verify:

- [ ] Claude starts teaching immediately (no meta-commentary)
- [ ] Say blocks are delivered naturally
- [ ] Check points cause Claude to stop and wait
- [ ] Action blocks execute correctly
- [ ] Navigation to next lesson works

---

## Updating Existing Lessons

### Modifying Teaching Content

1. Edit the relevant `CLAUDE.md` file
2. Keep the Say/Check/Action structure intact
3. Test by running the lesson command

### Reordering Lessons

1. Update day IDs in `course-structure.json`
2. Dynamic variables will automatically update navigation
3. No need to edit individual teaching scripts

### Adding Supporting Materials

1. Create `.md` file in the lesson folder
2. Reference with `@filename.md` in teaching script
3. Update `supportingMaterials` array in config (optional)

---

## Validation Checklist

Before merging new lesson content:

- [ ] **CLAUDE.md exists** in lesson folder
- [ ] **At least 3 Check points** in teaching script
- [ ] **Success Criteria section** present
- [ ] **British English** throughout
- [ ] **No hardcoded module numbers** (use dynamic variables)
- [ ] **All @file references exist** in folder
- [ ] **course-structure.json updated** with new day
- [ ] **Slash command created** and matches config
- [ ] **Build passes** (`npm run build`)
- [ ] **Lesson runs correctly** (test with `/w{x}.d{y}`)

---

## Troubleshooting

### "Claude isn't following the script"

1. Check SCRIPT_INSTRUCTIONS.md is readable
2. Ensure teaching script follows exact format
3. Verify Check points have clear wait conditions

### "Supporting materials not found"

1. Check file exists in lesson folder
2. Verify .md extension (not .txt)
3. Ensure path in @reference is correct

### "Navigation shows wrong next lesson"

1. Check course-structure.json order
2. Verify day IDs are sequential
3. Ensure conditionals are properly closed

### "Learner got stuck at a Check point"

1. Check points accept flexible responses
2. Claude should resume on any reasonable acknowledgement
3. Consider making the wait condition more explicit

---

## File Reference

```
.claude/
├── commands/
│   ├── w1.d1.md          # Slash command launcher
│   └── ...
├── course-structure.json  # Navigation config
└── SCRIPT_INSTRUCTIONS.md # Claude behaviour rules

lesson-modules/
└── week-1/
    └── day-1-first-conversation/
        ├── CLAUDE.md              # Teaching script
        └── learning-log.md        # Supporting material

company-context/
├── COMPANY.md
├── PRODUCT.md
├── PERSONAS.md
└── COMPETITIVE.md
```
