# Example CLAUDE.md Teaching Script

This file demonstrates the pattern for detailed teaching scripts that drive the learning experience.

**Source:** `lesson-modules/week-2/day-8-meeting-tamer/CLAUDE.md` (Meeting Tamer)

---

## Structure Overview

```markdown
# Day 2.8: Meeting Tamer

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

[Brief description of instructor persona and context for this lesson]

## Learning Objectives

[Bullet list of what learners will be able to do after completing this lab]

## Teaching Flow

### Step 1: [Section Name] (X minutes)

**Say:**
"[Verbatim dialogue including {conditionals} and {variables}]"

**Check:** [Description of what to wait for]

### Step 2: [Section Name] (X minutes)

**Say:**
"[Verbatim dialogue]"

**Action:**
[Instructions for Claude to execute - file operations, demonstrations, etc.]

**Present it like this:**
[Template showing expected output format]

**Check:** [What to wait for before proceeding]

[Continue with more steps...]

---

## Common Questions & Answers

### Q: [Anticipated question]?

**A:** [Helpful answer]

---

## Success Criteria

- [Measurable outcome 1]
- [Measurable outcome 2]
- [Measurable outcome 3]
```

---

## Key Sections Explained

### 1. Header & Role

- Title with lab ID
- Reference to SCRIPT_INSTRUCTIONS.md
- Instructor persona (British English, warm, knowledgeable)

### 2. Learning Objectives

- 3-5 specific, actionable outcomes
- Use verbs: "process", "create", "identify", "build"

### 3. Teaching Flow

- Timed steps (total ~20-30 minutes)
- **Say:** blocks for verbatim instructor dialogue
- **Check:** blocks as gates (learner must respond)
- **Action:** blocks for Claude to execute
- **Present it like this:** blocks for output formatting

### 4. Conditional Content

```markdown
{ifFirstInTheme:Welcome to Theme 2 - Content Processing!}
{ifNotFirstInTheme:Welcome back!}
{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}
{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}
```

### 5. File References

```markdown
- @meeting-notes-raw-1.md (references file in same folder)
- @template.md (another supporting material)
```

### 6. Common Questions

- Anticipate 3-5 likely questions
- Provide clear, helpful answers
- May reference future lessons

### 7. Success Criteria

- How to know the learner succeeded
- Used for instructor feedback at end

---

## Example Sections

### Say Block with Conditionals

```markdown
**Say:**
"{ifFirstInTheme:Welcome to Theme 2 - Content Processing! This theme is all about transforming raw, messy inputs into polished, useful outputs.}

{ifNotFirstInTheme:Welcome back!}

Today we're tackling something you've probably dealt with: meeting notes that are all over the place."
```

### Action Block with File Creation

```markdown
**Action:**
Create a file called `meeting-processor-template.md` in the current lesson folder with this content:

\`\`\`markdown

# Meeting Notes Processor Template

Use this template whenever you need to process raw meeting notes.

## Prompt Template

Read [MEETING_FILE] and extract:

1. **Key Decisions** - What was decided?
2. **Action Items** - Who needs to do what by when?
   \`\`\`
```

### Check Block Examples

```markdown
**Check:** Wait for learner to confirm they're ready

**Check:** Wait for learner to review files and share observations

**Check:** Wait for learner to write their prompt

**Check:** Wait for learner to share their use case
```

---

## Tone Guidelines

**Do:**

- Use British English ("colour", "recognise", "brilliant")
- Be warm and encouraging
- Use phrases like "Right, let's...", "Brilliant!", "Have a look at..."

**Don't:**

- Be condescending
- Use corporate jargon
- Over-explain or pad content
