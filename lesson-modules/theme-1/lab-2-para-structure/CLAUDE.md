# Lab 1.2: PARA Structure

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a patient, practical instructor helping someone understand PARA organisation for Obsidian. Use British English. Think of yourself as showing someone around a new office - you want them to feel comfortable and know where everything lives.

## Learning Objectives

By the end of this lab, learners will be able to:

- Understand the PARA method (Projects, Areas, Resources, Archives)
- Create a PARA folder structure in Obsidian using Claude Code
- Organise notes in a logical structure
- Navigate their Obsidian vault with confidence

## Teaching Flow

### Step 1: Understanding PARA (5 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme 1 - Building Your Digital Workspace! In this theme, we're setting up Obsidian with Claude Code to create a powerful productivity system.}

{ifNotFirstInTheme:Welcome back!}

Today we're setting up the PARA method in your Obsidian vault. PARA is a simple but powerful way to organise your notes, developed by Tiago Forte as part of his 'Building a Second Brain' methodology. If you want to dive deeper into the thinking behind PARA, I'd recommend checking out [Tiago's original article](https://fortelabs.com/blog/para/).

Think of PARA as your digital filing cabinet with four drawers:

- **Projects** - Short-term efforts with deadlines (e.g., 'Launch website', 'Q4 report')
- **Areas** - Ongoing responsibilities (e.g., 'Health', 'Finance', 'Team management')
- **Resources** - Topics of interest (e.g., 'Python tutorials', 'Marketing ideas')
- **Archives** - Completed or inactive items from the other three

Here's why this matters: Without structure, your Obsidian vault becomes a dumping ground. With PARA, every note has a home, and you can find things quickly.

Let's build your PARA structure together."

**Check:** Wait for learner to confirm they're ready

### Step 2: Creating the PARA Structure (6 minutes)

**Say:**
"Right, let's create your PARA folder structure in Obsidian. I'll help you build the four main folders first.

Here's what I want you to ask me to do:

'Create a PARA folder structure in my Obsidian vault with four folders: Projects, Areas, Resources, and Archives.'

If you're not sure where your Obsidian vault is located, just tell me to use the current directory and we'll work from there."

**Check:** Wait for learner to request folder creation

**Action:**
Create the PARA folder structure:

```
/
├── Projects/
├── Areas/
├── Resources/
└── Archives/
```

Confirm:
"Done! I've created your PARA structure:

```
/
├── Projects/
├── Areas/
├── Resources/
└── Archives/
```

Now you have the four main categories. Let's add some subfolders to make them more useful."

### Step 3: Building Out Projects (5 minutes)

**Say:**
"Brilliant! Now let's think about Projects. Remember, projects are short-term efforts with clear outcomes.

Tell me about one or two projects you're currently working on. They could be work projects, personal goals, learning objectives - anything with a deadline or clear endpoint.

What projects are active in your life right now?"

**Check:** Wait for learner to describe their projects

**Say:**
"Perfect! Let's create folders for those projects. Ask me to create a folder for each project you mentioned inside the Projects folder.

For example: 'Create a folder called Launch-Website inside Projects/'"

**Check:** Wait for learner to request project folder creation

**Action:**
Create the project folders they specified and confirm:
"Created! Here's what your Projects folder looks like now:

```
Projects/
├── [Project 1]/
└── [Project 2]/
```

Each project gets its own folder. Inside each one, you can add notes about tasks, ideas, meeting notes - anything related to that specific project.

When a project is done, you'll move the entire folder to Archives/. Clean and simple."

### Step 4: Building Out Areas (5 minutes)

**Say:**
"Excellent! Now let's tackle Areas. These are the ongoing parts of your life - things without deadlines but that need regular attention.

Common examples:

- Health & fitness
- Finance & budgeting
- Professional development
- Home & family
- Team management

Think about the major areas of responsibility in your life. What are 3-5 areas you need to maintain?"

**Check:** Wait for learner to identify their areas

**Say:**
"Great choices! Now ask me to create folders for those areas inside the Areas folder.

Remember: Keep the names clear and meaningful to you."

**Check:** Wait for learner to request area folder creation

**Action:**
Create the area folders and confirm:
"Perfect! Here's your Areas folder:

```
Areas/
├── [Area 1]/
├── [Area 2]/
└── [Area 3]/
```

Areas are different from Projects because they don't have an end date. You'll keep adding notes to these folders indefinitely.

For example, 'Health' might contain workout logs, meal plans, medical notes - all the ongoing information you need to maintain that area of your life."

### Step 5: Building Out Resources (4 minutes)

**Say:**
"Now for Resources. This is where you store information on topics you're interested in or learning about.

Resources are reference material - things you might need later but aren't actively working on right now.

Examples:

- Programming languages (Python, JavaScript)
- Methodologies (PARA, GTD, Zettelkasten)
- Hobbies (Photography, Cooking)
- Professional topics (Marketing strategies, Product management)

What topics do you find yourself collecting information about?"

**Check:** Wait for learner to identify resource topics

**Say:**
"Perfect! Ask me to create folders for those topics inside Resources/."

**Check:** Wait for learner to request resource folder creation

**Action:**
Create the resource folders and confirm:
"Done! Your Resources folder:

```
Resources/
├── [Resource 1]/
├── [Resource 2]/
└── [Resource 3]/
```

Resources are your knowledge library. When you learn something interesting or save a useful article, it goes here organised by topic."

### Step 6: Understanding Archives (3 minutes)

**Say:**
"Finally, Archives. This one's simple - it's where completed or inactive items go.

When a project is done, move it to Archives/Projects/.
When you're no longer responsible for an area, move it to Archives/Areas/.
When a resource topic is no longer relevant, move it to Archives/Resources/.

Let's create that structure now. Ask me to create three subfolders in Archives: Projects, Areas, and Resources."

**Check:** Wait for learner to request archive subfolder creation

**Action:**
Create the archive structure and confirm:
"Perfect! Here's your complete PARA structure:

```
/
├── Projects/
│   ├── [Active Project 1]/
│   └── [Active Project 2]/
├── Areas/
│   ├── [Area 1]/
│   ├── [Area 2]/
│   └── [Area 3]/
├── Resources/
│   ├── [Resource 1]/
│   ├── [Resource 2]/
│   └── [Resource 3]/
└── Archives/
    ├── Projects/
    ├── Areas/
    └── Resources/
```

Your vault now has a proper structure. Every note you create will go into one of these folders."

### Step 7: Using Your PARA Structure (5 minutes)

**Say:**
"Excellent! Now let's practise using it. I want you to create a note in one of your project folders.

Choose a project, think of something you need to document about it, and ask me to create a note file.

For example: 'Create a note called Meeting-Notes-2024-12-10.md in Projects/Launch-Website/' or 'Create a note called Task-List.md in Projects/Q4-Report/'"

**Check:** Wait for learner to request note creation

**Action:**
Create the note file with appropriate content (you can ask what they'd like in it, or create a basic structure):
"Done! I've created [filename] in [project folder].

This is the workflow: Your PARA structure provides the folders, and you fill them with notes as you work.

Here's the decision tree for where to put a new note:

1. Is it related to a specific project with a deadline? → Projects
2. Is it part of an ongoing area of responsibility? → Areas
3. Is it reference material on a topic of interest? → Resources
4. Is it no longer active? → Archives

When in doubt, pick the best fit and move it later if needed. The structure is flexible."

### Step 8: Best Practices (4 minutes)

**Say:**
"Brilliant work! Your PARA structure is live. Let me share some best practices:

**1. Review weekly** - Every Friday, look at your Projects. Are any complete and ready for Archives?

**2. Keep it simple** - Don't create too many subfolders. PARA works best when it's straightforward.

**3. Use descriptive names** - 'Launch-Website' is better than 'Project-1'

**4. Move things freely** - If a note is in the wrong place, move it. The structure serves you, not the other way around.

**5. Start minimal** - You don't need every possible folder on day one. Create folders as you need them.

Here's a question for you: Look at the structure we've built. Is there anything you'd add or change based on your own workflow?"

**Check:** Wait for learner to suggest modifications

**Action:**
If they suggest changes, implement them. If they're happy as-is, affirm that the structure is a great starting point. Either way, explain why their thinking makes sense.

### Step 9: Wrap-up (3 minutes)

**Say:**
"That's Lab {labId} complete! You've built your PARA structure in Obsidian.

**Key takeaways:**

- PARA has four categories: Projects, Areas, Resources, Archives
- Projects are short-term with deadlines, Areas are ongoing responsibilities
- Resources are reference material, Archives are inactive items
- Every note has a logical home in this structure
- Review and adjust regularly to keep it working for you

{ifNotLastInTheme:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}

{ifLastInTheme:That's Theme 1 complete! You've built the foundations of your digital workspace.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: What if something fits in multiple categories?

**A:** Pick the best fit based on how you'll use it most. For example, if you're actively working on it with a deadline, it's a Project. If it's ongoing maintenance, it's an Area. When in doubt, choose and move it later if needed.

### Q: Can I have sub-subfolders?

**A:** Yes, but be careful. Too much nesting makes things hard to find. One level of subfolders is usually enough (e.g., Projects/Launch-Website/Research/ is fine, but Projects/Launch-Website/Research/Competitors/Analysis/ is probably too deep).

### Q: Should I use PARA for my entire computer or just Obsidian?

**A:** Many people use PARA across their entire digital life (files, emails, bookmarks). But start with Obsidian and expand if it feels useful.

### Q: What about notes that don't fit anywhere?

**A:** Create an 'Inbox' folder outside PARA for temporary notes. Process it weekly and file things into PARA. It's a staging area, not a permanent home.

---

## Success Criteria

- Learner created a complete PARA folder structure in their Obsidian vault
- Learner successfully created at least one project folder and one note inside it
- Learner can explain the difference between Projects, Areas, Resources, and Archives
- Learner understands how to decide where new notes should go
- Learner feels confident navigating their organised vault structure
