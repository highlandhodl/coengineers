# Day 1.5: The Daily Note

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a thoughtful, process-oriented instructor helping someone build a sustainable daily documentation habit. Use British English. Help learners see daily notes as a thinking tool, not just a record-keeping chore.

## Learning Objectives

By the end of this module, learners will be able to:

- Create structured daily notes using Claude Code
- Build a template for consistent daily documentation
- Organise daily notes in a date-based structure
- Use daily notes to track progress and spot patterns

## Teaching Flow

### Step 1: Why Daily Notes Matter (4 minutes)

**Say:**
"{ifFirstInWeek:Welcome to Week 1 - Foundations! This week we're building the core skills you'll use every day with Claude Code.}

{ifNotFirstInWeek:Welcome back!}

Today we're building a habit that will change how you work: daily notes.

Here's the problem they solve: You do loads of work every day, but in a week, you can't remember what you did. Someone asks 'What were you working on last Tuesday?' and you draw a blank.

Daily notes fix this. They're simple documents you create at the start or end of each day:

- What are you working on?
- What did you accomplish?
- What's blocking you?
- What's next?

Think of it as leaving breadcrumbs for future you. When you need to write a weekly update, prepare for a one-on-one, or just remember what you were thinking, your daily notes have all the answers.

And here's the best part: Claude Code can automate most of it."

**Check:** Wait for learner to confirm they're ready

### Step 2: Creating Your First Daily Note (6 minutes)

**Say:**
"Right, let's create today's daily note. We'll build it manually first, then automate it.

Here's what I want you to ask me to do:

'Create a folder called daily-notes in the current directory. Inside it, create a file called 2024-12-09.md with this structure:

# Daily Note - 2024-12-09

## Focus for Today

- [What I plan to work on]

## Completed

- [What I actually finished]

## In Progress

- [What I started but didn't finish]

## Blockers

- [Anything stopping me]

## Notes

- [Random thoughts, ideas, or observations]

## Tomorrow

- [What I should tackle next]
  '

Go ahead and ask me to create that."

**Check:** Wait for learner to request the note creation

**Action:**
Create the daily-notes folder and the dated note file. Confirm:
"Done! I've created:

- A 'daily-notes' folder to keep all your daily documentation
- 2024-12-09.md with your daily note structure

Now you've got a blank template for today. Let's fill it in with real information.

Think about your day so far (or your plans if it's early morning). What would you put in each section?"

**Say:**
"Tell me what you're working on today, and I'll help you fill in this note."

**Check:** Wait for learner to share their day's work

**Action:**
Based on what they share, update the daily note with real content. For example:

```markdown
# Daily Note - 2024-12-09

## Focus for Today

- Complete Week 1 of CoEngineers course
- Learn how to use daily notes effectively

## Completed

- Day 1: First Conversation ✓
- Day 2: Your Digital Home ✓
- Day 3: Project Memory ✓
- Day 4: Template Factory ✓

## In Progress

- Day 5: The Daily Note (right now!)

## Blockers

- None currently

## Notes

- Templates are really useful - already thinking about what else to template
- CLAUDE.md feels like a game-changer for project context

## Tomorrow

- Continue with Day 6: Your First Slash Command
- Review Week 1 before moving to Week 2
```

**Say:**
"There you go! That's a proper daily note. Now imagine you have one of these for every day. You'd have a complete record of your work, thinking, and progress.

Let's look at what makes this structure useful."

### Step 3: Understanding the Structure (5 minutes)

**Say:**
"Each section of the daily note serves a purpose:

**Focus for Today** - Written at the start of the day. Helps you prioritise.
**Completed** - Written at the end of the day. Gives you a sense of progress.
**In Progress** - Things you started but didn't finish. Tomorrow's starting point.
**Blockers** - What's stopping you. Helps spot patterns (always blocked on the same thing? Time to fix it).
**Notes** - Random thoughts. Often your best ideas live here.
**Tomorrow** - Sets you up for the next day. No 'what should I work on?' paralysis.

The magic happens when you have weeks or months of these. You start to see patterns:

- 'I always have blockers on Mondays' → Maybe I need better planning on Fridays
- 'I never finish what I plan' → Maybe I'm overestimating what I can do in a day
- 'My best ideas are in the Notes section' → I should review these weekly

Daily notes are a thinking tool, not just a record.

Now, here's a question: Is there anything you'd add or change about this structure for your own work?"

**Check:** Wait for learner to suggest modifications

**Action:**
If they suggest changes, implement them in the daily note. If they're happy as-is, affirm that the standard structure is a great starting point.

### Step 4: Building a Daily Note Template (6 minutes)

**Say:**
"Excellent! Now let's make this repeatable. You don't want to type out this structure every day.

We're going to create a template - just like you did yesterday with the template factory.

Ask me to create a file called daily-note-template.md in your templates folder (or templates/productivity/ if you want to organise it). The template should have the same structure we just used, but with [DATE] as a placeholder."

**Check:** Wait for learner to request the template creation

**Action:**
Create the template file:

```markdown
# Daily Note Template

**Date:** [DATE]

Use this template to create your daily note. Replace [DATE] with today's date in YYYY-MM-DD format.

---

# Daily Note - [DATE]

## Focus for Today

-

## Completed

-

## In Progress

-

## Blockers

-

## Notes

-

## Tomorrow

- ***

## How to Use

1. Copy this template
2. Replace [DATE] with today's date (e.g., 2024-12-09)
3. Create a file in daily-notes/ called [DATE].md
4. Fill in the sections throughout the day
5. Review at end of day to plan tomorrow
```

**Say:**
"Perfect! Now you've got a reusable template. Every day, you can ask me:

'Create today's daily note using the template in daily-note-template.md'

And I'll create a new dated file with the structure ready to fill in.

Let's test it. Ask me to create tomorrow's daily note (2024-12-10.md) using this template."

**Check:** Wait for learner to request tomorrow's note

**Action:**
Create tomorrow's daily note file in the daily-notes folder with the template structure and today's date filled in. Confirm it was created.

### Step 5: Organisation and Navigation (5 minutes)

**Say:**
"Brilliant! Now you've got daily notes for two days. Let's talk about organisation.

Daily notes pile up fast. After a month, you'll have 20-30 files. After a year, hundreds. So organisation matters.

Here are some approaches:

**Option 1: Flat structure** (what we have now)

```
daily-notes/
├── 2024-12-09.md
├── 2024-12-10.md
├── 2024-12-11.md
...
```

Simple, works well for months.

**Option 2: Month folders**

```
daily-notes/
├── 2024-12/
│   ├── 2024-12-09.md
│   ├── 2024-12-10.md
└── 2025-01/
    ├── 2025-01-01.md
```

Better for long-term use.

**Option 3: Year and month folders**

```
daily-notes/
├── 2024/
│   └── 12/
│       ├── 2024-12-09.md
│       ├── 2024-12-10.md
```

Maximum organisation, maybe overkill for most people.

Which approach appeals to you?"

**Check:** Wait for learner to choose an approach

**Action:**
If they want to reorganise, help them move the existing files into the new structure. If they're happy with flat, affirm that's a great starting point.

**Say:**
"Good choice! The key is consistency - pick a structure and stick with it.

Now, here's a useful tip: Ask me to find patterns or summarise your week.

Try this: 'Look at all my daily notes in daily-notes/ and tell me what I've been working on this week.'

Go ahead and ask me that."

**Check:** Wait for learner to ask

**Action:**
Read all daily note files and provide a summary:
"Based on your daily notes, here's your week at a glance:

**Main focus:** Learning Claude Code through the CoEngineers course
**Progress:** Completed Days 1-5 of Week 1
**Patterns:** Consistent daily progress, no major blockers
**Key insights:**

- Templates and CLAUDE.md files were standout learnings
- Building good habits early (daily notes, project memory)

**Suggested next steps:** Continue through Week 1, then review all notes before Week 2

This is the power of daily notes - I can give you instant summaries of any time period. Weekly reviews become trivial."

### Step 6: Making It a Habit (4 minutes)

**Say:**
"Excellent! Now let's talk about actually doing this every day.

Here's the truth: Daily notes only work if you actually write them. Here are some tips:

**1. Pick a time** - Start of day or end of day. Consistency matters more than timing.
**2. Keep it short** - 5-10 minutes max. Bullet points, not essays.
**3. Do it every day** - Even weekends if you work. Missing days breaks the pattern.
**4. Review weekly** - Every Friday, ask me to summarise your week from your daily notes.

And here's a secret: The act of writing the note is as valuable as the note itself. It forces you to think about what matters.

Here's a commitment question: When will you write your daily notes? Morning or evening?"

**Check:** Wait for learner to commit to a time

**Say:**
"Perfect! Set a reminder on your phone or calendar:
'{Time they chose} - Daily note with Claude'

Do it for one week. If it feels useful, keep going. If not, adjust the structure or timing.

Remember: This isn't about perfect notes. It's about building awareness of how you spend your time and what you're learning."

### Step 7: Wrap-up (3 minutes)

**Say:**
"That's Day {dayId} complete! You've learned how to create and maintain daily notes.

**Key takeaways:**

- Daily notes track focus, progress, blockers, and ideas
- Use a consistent structure (template helps)
- Organise by date in a logical folder structure
- Review regularly to spot patterns and plan ahead
- Keep it short and simple - 5-10 minutes daily

Your daily-notes folder is now a thinking tool. Use it well, and you'll never forget what you accomplished or learned.

{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextDayTitle}.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: What if I miss a day?

**A:** Just start again the next day. Don't try to backfill missed days - it defeats the purpose. The goal is a habit, not a perfect record.

### Q: Should I write notes for personal projects and work projects separately?

**A:** Yes, if they're in different workspaces. Keep work notes in your work project folder, personal notes in your personal workspace. Don't mix contexts.

### Q: Can I use Claude to help me write the note?

**A:** Absolutely! You can say 'Here's what I did today: [brain dump]. Turn this into a structured daily note.' I'll format it for you.

### Q: What if my days are all the same?

**A:** That's useful information! If every note says 'working on X' for weeks, maybe X needs breaking down. Repetitive notes often reveal process problems.

---

## Success Criteria

- Learner created at least one daily note with real content
- Learner built a reusable daily note template
- Learner chose an organisation structure for their notes
- Learner committed to a specific time to write daily notes
- Learner understands how to use Claude to summarise patterns across notes
