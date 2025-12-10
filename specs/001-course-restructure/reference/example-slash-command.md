# Example Slash Command: Lesson Launcher

This file demonstrates the pattern for slash commands that launch lab learning experiences.

**Source:** `.claude/commands/w2.d8.md` (Meeting Tamer)

---

## Pattern

```markdown
# Day 8: Meeting Tamer - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract day/week ID:
   - Command name: "w2.d8" → Day ID: "2.8"
   - Pattern: w{week}.d{day}

2. Read `.claude/course-structure.json` to find the day with ID "2.8"

3. Get the teaching script path from the config: `lesson-modules/week-2/day-8-meeting-tamer/CLAUDE.md`

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions on how to interpret and deliver the script

6. Follow the teaching script PRECISELY as instructed:
   - Execute "Say:" blocks word-for-word
   - Stop at "Check:" points and wait for learner response
   - Run "Action:" blocks exactly as specified
   - Start teaching immediately (no meta-commentary about reading scripts)

7. For navigation references, use dynamic variables resolved from course-structure.json:
   - {nextCommand} → next lesson command
   - {nextDayTitle} → next lesson title
   - Wrap navigation in conditionals: {ifNotLastInCourse:...}

8. Remember: You are a friendly instructor using British English. Never mention "the script" or "my instructions" - just teach naturally.
```

---

## Key Characteristics

1. **Silent loading**: Claude reads files without announcing it
2. **ID extraction**: Parses command name to find course-structure entry
3. **Three-file system**: Loads course-structure.json → CLAUDE.md → SCRIPT_INSTRUCTIONS.md
4. **Immediate teaching**: No preamble, just starts the lesson
5. **Variable resolution**: Dynamic navigation using course-structure metadata

---

## New Theme Pattern

For the new theme/lab structure, update the pattern to:

```markdown
# Lab 3: Refining Email - Lesson Launcher

Do this SILENTLY and don't SAY you're doing it silently:

1. Parse the command name to extract theme/lab ID:
   - Command name: "t2.lb3" → Theme ID: "2", Lab ID: "3"
   - Pattern: t{theme}.lb{lab}

2. Read `.claude/course-structure.json` to find the lab with ID "2.3"

3. Get the teaching script path from the config: `lesson-modules/theme-2/lab-3-refining-email/CLAUDE.md`

4. Read that CLAUDE.md file - this is your teaching script

5. Also read `.claude/SCRIPT_INSTRUCTIONS.md` for critical instructions on how to interpret and deliver the script

6. Follow the teaching script PRECISELY as instructed:
   - Execute "Say:" blocks word-for-word
   - Stop at "Check:" points and wait for learner response
   - Run "Action:" blocks exactly as specified
   - Start teaching immediately (no meta-commentary about reading scripts)

7. For navigation references, use dynamic variables resolved from course-structure.json:
   - {nextCommand} → next lab command
   - {nextLabTitle} → next lab title
   - Wrap navigation in conditionals: {ifNotLastInCourse:...}

8. Remember: You are a friendly instructor using British English. Never mention "the script" or "my instructions" - just teach naturally.
```
