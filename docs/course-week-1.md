# Week 1: Foundation

**Theme:** "Hello, Claude. Let's build something together."
**Days:** 1-7
**Fictional Context:** Setting up Thistle & Thorn's new knowledge management system

---

## Week 1 Overview

### Learning Objectives
By the end of Week 1, students will be able to:
1. Have effective conversations with Claude Code
2. Create and organise project folder structures
3. Build CLAUDE.md files for project memory
4. Create reusable note templates
5. Design frontmatter schemas for structured notes
6. Create their own custom slash commands

### Week 1 Outcome
A fully scaffolded personal knowledge system with Claude Code configured and project memory established.

### Thistle & Thorn Context
Fiona has just hired Jamie to handle marketing. Jamie's first task: get the distillery's scattered knowledge organised. They'll build a proper system from scratch - and students will too.

---

## Day 1: First Conversation

**Slash Command:** `/w1.d1`
**Title:** Your First Claude Code Conversation
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Understand how Claude Code thinks and responds
- Learn effective prompting techniques
- Experience the conversational flow
- Create your first output file

### The Scenario
Jamie's first day at Thistle & Thorn. They open Claude Code for the first time. What do they say? How does this work?

### Video Content
1. **Hook:** "Most people's first message to Claude is 'Hello'. Let's do better."
2. **Demo:**
   - Opening Claude Code for the first time
   - The difference between chat and agentic behaviour
   - Asking Claude to explain itself
   - Giving context before asking for help
   - Watching Claude work (file operations, thinking)
3. **Key moments:**
   - Show Claude creating a file
   - Show Claude explaining its reasoning
   - Show how to guide Claude when it goes wrong

### Slash Command Structure

```markdown
# Day 1: Your First Claude Code Conversation

Welcome to Day 1! Today you'll have your first real conversation
with Claude Code and learn how it thinks.

## What We're Building
A markdown file containing your first experiments with Claude -
a record of what works, what doesn't, and what surprises you.

## The Scenario
You're Jamie, starting at Thistle & Thorn. You've got Claude Code
installed. Now what?

## Let's Go

### Step 1: Say Hello (Properly)
Don't just say "hello". Give Claude context about who you are
and what you're trying to do.

Try this:
"I'm learning Claude Code. I work at a small whisky distillery
and I'm trying to get our knowledge organised. Can you explain
how you work - what can you do, and what should I know about
working with you?"

Watch what Claude says. Notice how it explains its capabilities.

### Step 2: Ask Claude to Create Something
Now ask Claude to create a simple file. Be specific about what
you want.

Try this:
"Create a markdown file called 'learning-log.md' in my current
directory. Start it with today's date and a section called
'Day 1 Observations'. Leave space for me to add notes."

Watch Claude work. Notice:
- It tells you what it's doing
- It creates the file
- It shows you the result

### Step 3: Give Feedback and Iterate
Now modify what Claude created. Practice the back-and-forth.

Try:
"Add a section called 'Prompts That Worked' and another called
'Things I Learned'. Format them as bullet lists."

### Step 4: Explore Capabilities
Ask Claude what else it can do. Be curious.

Try:
"What are 5 things you can do that might surprise me? Show me
an example of one of them."

### Step 5: Document Your Learning
Add your observations to the learning log Claude created.

Ask Claude:
"Help me write up what I learned today in the learning log.
I want to capture: what surprised me, what prompts worked well,
and what I want to try tomorrow."

## Your Turn
Now experiment freely. Try 3-5 prompts of your own. Add the
results to your learning log.

Ideas to try:
- Ask Claude to explain something you don't understand
- Ask Claude to help you plan something
- Ask Claude to find files on your computer
- Ask Claude to summarise something

## What You Learned
- Claude works best with context, not just commands
- You can watch Claude work in real-time
- Iteration is normal - refine as you go
- Claude can explain itself and its capabilities

## Tomorrow
Day 2: Your Digital Home - Creating a folder structure that scales
Run `/w1.d2` when you're ready!

---
Day 1 of 31 | CoEngineers.ai
```

### Example Outputs
- `learning-log.md` with dated entries
- First observations about Claude's capabilities
- List of prompts that worked well

### Common Issues & Solutions
| Issue | Solution |
|-------|----------|
| Claude says it can't do something | Rephrase with more context |
| Claude does something unexpected | Say "stop" and explain what you wanted |
| Claude asks too many questions | Give more upfront context |

---

## Day 2: Your Digital Home

**Slash Command:** `/w1.d2`
**Title:** Creating Your Folder Structure
**Duration:** Video 7 mins, Hands-on 12 mins

### Learning Objectives
- Understand folder organisation principles (PARA-inspired)
- Create a consistent, scalable structure
- Learn Claude's file system capabilities
- Set up a home for all future work

### The Scenario
Jamie needs somewhere to put everything. The distillery's files are scattered across desktops, email attachments, and "that folder Fiona has somewhere". Time to build a proper home.

### Video Content
1. **Hook:** "Before you can organise knowledge, you need somewhere to put it."
2. **Demo:**
   - The PARA method (simplified): Projects, Areas, Resources, Archive
   - Why consistent structure matters
   - Claude creating folders
   - Customising for personal needs
3. **Key moments:**
   - Creating the initial structure
   - Adding a .gitkeep or README to each folder
   - Explaining naming conventions

### Slash Command Structure

```markdown
# Day 2: Your Digital Home

Today we build the folder structure that holds everything.

## What We're Building
A complete folder hierarchy for your personal knowledge system,
ready to hold projects, notes, templates, and archives.

## The Scenario
Jamie's laptop has a mess of files. Fiona keeps asking "where's
that document?" and nobody knows. Today we fix that with a
structure that scales.

## The Structure We'll Create

```
thistle-thorn-vault/
├── 00-inbox/           # Temporary landing zone
├── 01-projects/        # Active work with deadlines
├── 02-areas/           # Ongoing responsibilities
├── 03-resources/       # Reference material
├── 04-archive/         # Completed/inactive items
├── templates/          # Reusable templates
└── .claude/
    └── commands/       # Your slash commands
```

## Let's Go

### Step 1: Choose Your Location
First, decide where this vault will live. Common choices:
- `~/Documents/vault/`
- `~/notes/`
- `~/second-brain/`

Tell Claude:
"Create a folder structure for my personal knowledge system at
[YOUR CHOSEN PATH]. Use these folders: 00-inbox, 01-projects,
02-areas, 03-resources, 04-archive, templates. Also create a
.claude/commands folder for slash commands."

### Step 2: Add README Files
Each folder should explain itself. Ask Claude:

"Add a README.md to each folder explaining what goes there.
Keep it simple - just 2-3 sentences per folder. Use Thistle &
Thorn Distillery as an example business for the descriptions."

### Step 3: Create Your First Project Folder
Let's add a real project inside 01-projects.

"Create a folder called 'learning-claude-code' inside 01-projects.
Move my learning-log.md from yesterday into this project folder.
Add a README explaining this is my course learning project."

### Step 4: Understand the System
Ask Claude to explain how this should work:

"Explain how I should use this folder structure day-to-day.
When does something go in inbox vs projects? When do I archive?
Keep it practical."

## Your Turn
Customise your structure. Ask Claude to:
- Add any additional folders you need
- Create a folder for a real project you're working on
- Move some existing files into the right places

## What You Learned
- Consistent folder structure reduces cognitive load
- 00-inbox catches everything before you organise it
- Projects are temporary, Areas are ongoing
- Claude can create and organise files for you

## Tomorrow
Day 3: Project Memory - Building your first CLAUDE.md
Run `/w1.d3` when you're ready!

---
Day 2 of 31 | CoEngineers.ai
```

### Example Outputs
- Complete folder structure with READMEs
- First project folder with learning log moved
- Understanding of PARA-style organisation

---

## Day 3: Project Memory

**Slash Command:** `/w1.d3`
**Title:** Building Your First CLAUDE.md
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Understand what CLAUDE.md does (persistent project context)
- Learn what to include vs exclude
- Create a CLAUDE.md for a real project
- Experience Claude "remembering" your context

### The Scenario
Jamie keeps explaining the same things to Claude. "We're a whisky distillery... we use metric measurements... we write in British English..." There must be a better way. There is: CLAUDE.md.

### Video Content
1. **Hook:** "What if Claude remembered everything about your project without you repeating it?"
2. **Demo:**
   - What CLAUDE.md is and where it lives
   - Essential sections: overview, conventions, patterns
   - What NOT to include (secrets, huge files)
   - Before/after: prompting with and without CLAUDE.md
3. **Key moments:**
   - Create CLAUDE.md from scratch
   - Show Claude reading it automatically
   - Demo how context improves responses

### Slash Command Structure

```markdown
# Day 3: Project Memory

Today we teach Claude to remember your project context.

## What We're Building
A CLAUDE.md file that gives Claude persistent memory about your
project - who you are, what you're building, how you work.

## The Scenario
Every time Jamie opens Claude, they explain: "I work at a whisky
distillery, we use British English, our main products are..."
It's exhausting. CLAUDE.md solves this.

## What Goes in CLAUDE.md

```markdown
# Project Name

## Overview
What this project is about, in 2-3 sentences.

## Key Context
- Who uses this
- What problem it solves
- Important constraints

## Conventions
- Spelling (British/American)
- Terminology
- File naming patterns

## Tech Stack (if applicable)
- Languages/frameworks
- Key dependencies

## Patterns
- Code patterns to follow
- Document structures used
- Naming conventions
```

## Let's Go

### Step 1: Create CLAUDE.md for Your Learning Project
Navigate to your learning-claude-code project folder.

"Create a CLAUDE.md file in my learning-claude-code project.
Include: an overview explaining I'm learning Claude Code over
31 days, that I use British English, and that I work in
[YOUR FIELD/CONTEXT]. Add sections for conventions and patterns."

### Step 2: Add Specific Context
Now add details relevant to YOUR situation.

"Update the CLAUDE.md to include:
- My role/job context: [YOUR DETAILS]
- File naming convention: lowercase-with-dashes
- Preferred output format: markdown with frontmatter
- Any tools I commonly use: [YOUR TOOLS]"

### Step 3: Test the Memory
Start a fresh conversation and see if Claude remembers.

"Based on my project context, what conventions should I follow
when creating a new document?"

Claude should reference your CLAUDE.md without you reminding it.

### Step 4: Create CLAUDE.md for Thistle & Thorn
Let's practice with the fictional company.

"Create a CLAUDE.md for Thistle & Thorn Distillery with:
- Overview: Craft whisky distillery in Speyside, 4th generation
- British English spelling
- Key people: Fiona (owner), Jamie (marketing), Hamish (cooper)
- Products: Single malt whisky, gin, distillery experiences
- Tone: Warm, proud heritage, approachable"

## Your Turn
Create a CLAUDE.md for a real project of your own. Include:
- What the project is
- Your conventions and preferences
- Any context Claude should always know

## What You Learned
- CLAUDE.md gives Claude persistent project memory
- Put it in the project root folder
- Include conventions, not conversations
- Keep it concise - Claude reads it every time

## Tomorrow
Day 4: Template Factory - Creating reusable note templates
Run `/w1.d4` when you're ready!

---
Day 3 of 31 | CoEngineers.ai
```

### Example Outputs
- CLAUDE.md for learning project
- CLAUDE.md for Thistle & Thorn
- Experience of context-aware responses

---

## Day 4: Template Factory

**Slash Command:** `/w1.d4`
**Title:** Creating Reusable Note Templates
**Duration:** Video 7 mins, Hands-on 12 mins

### Learning Objectives
- Understand template-based note creation
- Design templates for common note types
- Learn frontmatter basics
- Create at least 3 reusable templates

### The Scenario
Jamie keeps recreating the same structures. Meeting notes, project briefs, customer records - all start from blank. Templates solve this.

### Video Content
1. **Hook:** "Stop recreating the wheel. Build once, use forever."
2. **Demo:**
   - What makes a good template
   - Frontmatter: metadata at the top of files
   - Creating templates for: meetings, projects, people
   - Using templates in practice
3. **Key moments:**
   - Show empty note vs templated note
   - Demo frontmatter with real examples
   - Create and use a template live

### Slash Command Structure

```markdown
# Day 4: Template Factory

Today we build reusable templates for every type of note you create.

## What We're Building
A library of templates: meeting notes, project briefs, person
profiles, and any others you need regularly.

## The Scenario
Sarah at Thistle & Thorn takes meeting notes three times a week.
Each time she starts blank, trying to remember what sections to
include. Templates fix this - consistent structure, every time.

## What Makes a Good Template

1. **Frontmatter** - Metadata at the top (title, date, type, tags)
2. **Consistent sections** - Same structure every time
3. **Prompts** - Questions or placeholders to fill in
4. **Flexibility** - Sections you can delete if not needed

## Let's Go

### Step 1: Meeting Notes Template
Create a template for meeting notes.

"Create a meeting notes template at templates/meeting-note.md
with:
- Frontmatter: title, date, attendees (list), type: meeting
- Sections: Attendees, Agenda, Discussion, Decisions, Actions
- The Actions section should have columns: Action, Owner, Due Date
- Add placeholder text showing what goes where"

### Step 2: Project Brief Template
Create a template for new projects.

"Create a project brief template at templates/project-brief.md
with:
- Frontmatter: title, date, status (not-started/active/complete),
  priority (high/medium/low), owner
- Sections: Overview, Objectives, Success Criteria, Timeline,
  Resources Needed, Risks, Next Steps
- Add guiding questions as placeholders in each section"

### Step 3: Person Profile Template
For tracking customers, contacts, team members.

"Create a person profile template at templates/person-profile.md
with:
- Frontmatter: name, company, role, relationship (customer/partner/
  team/contact), last-contact date, tags
- Sections: Background, Key Interests, Conversation History,
  Notes, Follow-up Actions
- This is for Thistle & Thorn tracking their trade customers"

### Step 4: Use a Template
Now let's use one. Ask Claude:

"Using my meeting template, create a new meeting note for:
Meeting: Weekly Marketing Sync
Date: Today
Attendees: Jamie, Fiona
Agenda: Social media plan, Christmas campaign, website updates"

### Step 5: Create Your Own Template
What note type do you create repeatedly?

Ideas:
- Weekly review
- Book/article notes
- Idea capture
- Daily standup
- Customer call

"Create a template for [YOUR TEMPLATE TYPE] with appropriate
frontmatter and sections."

## Your Turn
Create at least 2 more templates for notes you regularly create.
Use them for something real.

## What You Learned
- Templates ensure consistency
- Frontmatter adds searchable metadata
- Placeholders guide what to fill in
- Build templates for your actual workflow

## Tomorrow
Day 5: The Daily Note - Building a daily note system
Run `/w1.d5` when you're ready!

---
Day 4 of 31 | CoEngineers.ai
```

### Example Outputs
- `templates/meeting-note.md`
- `templates/project-brief.md`
- `templates/person-profile.md`
- At least one personal template

---

## Day 5: The Daily Note

**Slash Command:** `/w1.d5`
**Title:** Building a Daily Note System
**Duration:** Video 6 mins, Hands-on 10 mins

### Learning Objectives
- Understand daily notes as a practice
- Design a daily note template
- Create dated notes automatically
- Link daily notes to projects and people

### The Scenario
Jamie wants to track what they do each day - for accountability, memory, and building a trail of work. Daily notes are the foundation.

### Video Content
1. **Hook:** "Your best ideas happen randomly. Daily notes catch them."
2. **Demo:**
   - What a daily note is for
   - Template with date, tasks, notes, log sections
   - Auto-generating with today's date
   - Linking to projects and people
3. **Key moments:**
   - Show a week of daily notes
   - Demo quick capture
   - Show reviewing past notes

### Slash Command Structure

```markdown
# Day 5: The Daily Note

Today we build a daily note practice that captures everything.

## What We're Building
A daily note template and your first daily note for today.

## The Scenario
Fiona asks Jamie: "What did you work on last Tuesday?" Jamie
has no idea. With daily notes, they'll always know.

## Daily Note Purpose

- **Capture** everything that happens
- **Plan** what you'll do today
- **Reflect** on what you learned
- **Link** to projects, people, ideas

## Let's Go

### Step 1: Create Daily Note Template
"Create a daily note template at templates/daily-note.md with:
- Frontmatter: date, weekday, energy-level (1-5), tags
- Sections:
  - Focus (top 3 priorities today)
  - Log (timestamped entries)
  - Notes (thoughts, ideas, learnings)
  - Tomorrow (what's carrying over)
- Make the Log section a simple bullet list for quick entries"

### Step 2: Create Today's Daily Note
"Using my daily note template, create today's note at
01-projects/learning-claude-code/daily/[TODAY'S DATE].md

Fill in:
- Today's date and weekday
- Focus: Learning Claude Code Day 5
- Add a log entry for right now about completing Day 5"

### Step 3: Practice Quick Capture
Throughout today, add entries to your daily note.

"Add a log entry to today's daily note:
[TIME] - Completed daily note template setup"

### Step 4: Create a Folder for Daily Notes
"Create a 'daily' folder inside my learning project if it
doesn't exist. This is where all daily notes will live."

## Your Turn
- Create tomorrow's daily note in advance
- Add 3 entries to today's note about things you're doing
- Link to a project or person if relevant: [[project-name]]

## What You Learned
- Daily notes are low-effort, high-value
- Timestamped logs create an audit trail
- The practice compounds over time
- Quick capture beats perfect capture

## Tomorrow
Day 6: Your First Slash Command - Creating custom commands
Run `/w1.d6` when you're ready!

---
Day 5 of 31 | CoEngineers.ai
```

### Example Outputs
- `templates/daily-note.md`
- Today's daily note with real entries
- Daily notes folder structure

---

## Day 6: Your First Slash Command

**Slash Command:** `/w1.d6`
**Title:** Creating Your Own Commands
**Duration:** Video 10 mins, Hands-on 20 mins

### Learning Objectives
- Understand how slash commands work
- Write a slash command from scratch
- Test and iterate on commands
- Build a command for a real use case

### The Scenario
Jamie finds themselves asking Claude the same things repeatedly. "Summarise this meeting..." "Turn this into action items..." What if they could save these prompts and reuse them with one command?

### Video Content
1. **Hook:** "What if you could save your best prompts and reuse them forever?"
2. **Demo:**
   - Where slash commands live (`.claude/commands/`)
   - Anatomy of a slash command
   - Creating a simple command
   - Using arguments in commands
   - Testing and debugging
3. **Key moments:**
   - Create command from scratch
   - Run it and see results
   - Iterate to improve

### Slash Command Structure

```markdown
# Day 6: Your First Slash Command

Today you become a slash command creator.

## What We're Building
Your own custom slash command that solves a real problem
you face regularly.

## The Scenario
Jamie keeps asking Claude: "Summarise this in 3 bullet points."
Every. Single. Time. Today we turn that into `/summarise` -
one command, instant results.

## How Slash Commands Work

1. They live in `.claude/commands/` folder
2. They're markdown files with prompts
3. When you type `/command-name`, Claude reads the file
4. You can include instructions, context, and examples

## Let's Go

### Step 1: Create the Commands Folder
"Check if I have a .claude/commands folder. If not, create it.
This is where all my slash commands will live."

### Step 2: Create a Simple Command
Let's build a meeting summariser.

"Create a slash command at .claude/commands/summarise-meeting.md
with this content:

# Summarise Meeting

You are helping me summarise meeting notes.

Take the meeting content I provide and create:
1. A one-sentence summary
2. Key decisions (bullet list)
3. Action items with owners (table format)
4. Any open questions

Format the output in clean markdown.

Keep it concise. No fluff."

### Step 3: Test Your Command
Now test it. Run `/summarise-meeting` and provide some notes:

"Here's a test meeting:

Meeting: Q4 Planning
Attendees: Fiona, Jamie, Sarah

Discussion:
- Website needs updating before Christmas
- Jamie will handle social media posts
- Consider running a Christmas tasting event
- Sarah worried about capacity for events
- Fiona wants to focus on premium customers

Decision: Go ahead with tasting event, cap at 20 people
Decision: Website update by Dec 1st

Next: Jamie to draft social calendar by Friday"

### Step 4: Iterate and Improve
Based on the output, refine your command.

"Update my summarise-meeting command to also include:
- A 'Mood/Vibe' one-liner at the start
- Deadlines highlighted in bold in action items"

### Step 5: Create Your Own Command
What do you ask Claude repeatedly? Turn it into a command.

Ideas:
- `/explain` - Explain something simply
- `/fix-grammar` - Fix grammar and spelling
- `/action-items` - Extract action items from text
- `/daily-review` - End of day reflection prompts
- `/idea-expand` - Take a rough idea and expand it

"Create a slash command called [YOUR NAME] that [WHAT IT DOES].
Include clear instructions and an example of good output."

## Your Turn
Create at least 2 more slash commands for tasks you do regularly.
Test each one with real content.

## What You Learned
- Slash commands are reusable prompts
- They live in `.claude/commands/`
- You can iterate and improve them
- One command can save hours over time

## Tomorrow
Day 7: Week 1 Review - Consolidating everything we've learned
Run `/w1.d7` when you're ready!

---
Day 6 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/summarise-meeting.md`
- At least 2 personal slash commands
- Understanding of command structure

---

## Day 7: Week 1 Review

**Slash Command:** `/w1.d7`
**Title:** Week 1 Consolidation
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Review and consolidate Week 1 learning
- Identify gaps and questions
- Celebrate progress
- Prepare for Week 2

### The Scenario
Jamie's first week at Thistle & Thorn is complete. They've got systems in place. Time to review what's working and what needs adjustment.

### Video Content
1. **Hook:** "You've built more in a week than most people do in a month."
2. **Demo:**
   - Review what we created
   - Check each system is working
   - Identify improvements
   - Preview Week 2
3. **Key moments:**
   - Show complete folder structure
   - Demo using templates in practice
   - Run a slash command

### Slash Command Structure

```markdown
# Day 7: Week 1 Review

Time to consolidate and celebrate.

## What We're Building
A Week 1 retrospective document capturing what you learned,
built, and want to improve.

## This Week You Built:
- ✓ Learning log and first Claude conversations
- ✓ Folder structure (PARA-style vault)
- ✓ CLAUDE.md project memory
- ✓ Note templates (meeting, project, person)
- ✓ Daily note system
- ✓ Custom slash commands

## Let's Go

### Step 1: Audit Your Setup
Ask Claude to check everything is in place:

"Review my folder structure and list:
- What folders exist
- What templates I have
- What slash commands I've created
- Whether I have a CLAUDE.md

Give me a status report on my Week 1 setup."

### Step 2: Create Week 1 Retrospective
"Create a retrospective document at 01-projects/learning-claude-code/
week-1-retro.md with:
- Frontmatter: date, week: 1, mood (1-5)
- Sections: What I Built, What Surprised Me, What I'll Use Most,
  Questions I Still Have, Goals for Week 2"

### Step 3: Fill In Your Retro
With Claude's help, fill in each section:

"Help me complete my Week 1 retro. For 'What I Built', list
everything I created this week. For 'What Surprised Me', help me
reflect on what was unexpected about Claude Code."

### Step 4: Identify Gaps
What's missing from your system?

"Look at my folder structure and templates. What's missing that
a typical knowledge system might have? Suggest 3 additions I
could consider."

### Step 5: Preview Week 2
Week 2 is about processing content. Get ready:

"Create a folder at 01-projects/learning-claude-code/week-2-inputs/
and add a README explaining this is where I'll put content to
process during Week 2 (meeting notes, transcripts, PDFs, etc.)"

## Your Turn
Complete your retrospective with honest reflections. Celebrate
what you've built!

## What You Learned This Week

| Day | Topic | Key Skill |
|-----|-------|-----------|
| 1 | First Conversation | Effective prompting |
| 2 | Digital Home | Folder organisation |
| 3 | Project Memory | CLAUDE.md creation |
| 4 | Template Factory | Reusable templates |
| 5 | Daily Note | Capture system |
| 6 | Slash Commands | Custom commands |
| 7 | Review | Consolidation |

## Ready for Week 2?
Week 2: Content Processing - From chaos to clarity in seconds

We'll transform:
- Meeting transcripts → Structured notes
- Voice memos → Organised thoughts
- PDFs → Extracted insights
- Web pages → Archived knowledge

Run `/w2.d8` when you're ready!

---
Day 7 of 31 | CoEngineers.ai

🎉 Week 1 Complete!
```

### Example Outputs
- `week-1-retro.md` with reflections
- System audit showing complete setup
- Week 2 input folder ready

---

## Week 1 Materials Checklist

### Slash Commands to Create
- [ ] `/w1.d1` - First Conversation
- [ ] `/w1.d2` - Your Digital Home
- [ ] `/w1.d3` - Project Memory
- [ ] `/w1.d4` - Template Factory
- [ ] `/w1.d5` - The Daily Note
- [ ] `/w1.d6` - Your First Slash Command
- [ ] `/w1.d7` - Week 1 Review

### Videos to Record
- [ ] Day 1: First Conversation (8 mins)
- [ ] Day 2: Folder Structure (7 mins)
- [ ] Day 3: CLAUDE.md (8 mins)
- [ ] Day 4: Templates (7 mins)
- [ ] Day 5: Daily Notes (6 mins)
- [ ] Day 6: Slash Commands (10 mins)
- [ ] Day 7: Week Review (8 mins)

### Example Files Needed
- [ ] Sample learning-log.md
- [ ] Sample folder READMEs
- [ ] Sample CLAUDE.md for Thistle & Thorn
- [ ] Sample templates (meeting, project, person)
- [ ] Sample daily note
- [ ] Sample slash commands

---

*End of Week 1 Detailed Plan*
