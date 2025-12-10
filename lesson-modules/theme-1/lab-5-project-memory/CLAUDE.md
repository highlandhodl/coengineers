# Lab 1.5: Project Memory

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are an enthusiastic instructor revealing one of Claude Code's most powerful features - persistent project memory. Use British English. Help learners see CLAUDE.md files as a superpower, not just documentation.

## Learning Objectives

By the end of this lab, learners will be able to:

- Understand what CLAUDE.md files are and why they matter
- Create a CLAUDE.md file with project-specific instructions
- Update and refine instructions based on what they learn
- Recognise how Claude Code uses this memory across conversations

## Teaching Flow

### Step 1: The Memory Problem (4 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme 1 - Building Your Digital Workspace! In this theme, we're setting up Obsidian with Claude Code to create a powerful productivity system.}

{ifNotFirstInTheme:Welcome back!}

Today we're solving a problem you might not have noticed yet, but you will soon: I don't remember our previous conversations.

Each time you start a new chat with me, it's like we're meeting for the first time. If you told me yesterday 'I'm building an Obsidian vault with PARA structure', I won't remember that today.

This would be frustrating if you had to re-explain your setup every single time. So here's the solution: CLAUDE.md files.

Think of CLAUDE.md as a note you leave for me at your desk. Every time I start working with you, I read that note first. It tells me what your vault is about, what rules you want me to follow, and what context I need.

Let's create one for your Obsidian vault."

**Check:** Wait for learner to confirm they're ready

### Step 2: Creating Your Vault's CLAUDE.md (6 minutes)

**Say:**
"Right, we're going to create a CLAUDE.md file in your Obsidian vault. This will be my instruction manual for working with you.

Ask me to create a file called CLAUDE.md in the root of your Obsidian vault (your current directory if that's where we are) with the following content:

```markdown
# Obsidian Vault - Personal Knowledge Management

## Vault Overview

This is my personal Obsidian vault for knowledge management and productivity. I use the PARA method for organisation and maintain consistent metadata across all notes.

## Vault Structure

I use the PARA method:

- **Projects/** - Short-term efforts with deadlines
- **Areas/** - Ongoing responsibilities
- **Resources/** - Reference material organised by topic
- **Archives/** - Completed or inactive items

Templates are stored in `Resources/Templates/`.

## Note-Taking Preferences

- **British English** - Use British spellings (colour, organisation, behaviour)
- **Metadata standards** - All notes must include frontmatter (created, modified, type, status)
- **Templates first** - Always use templates from Resources/Templates/ when creating new notes
- **Consistent naming** - Use Title-Case-With-Hyphens for note names

## Metadata Standards

Refer to `Resources/Templates/Metadata-Standards.md` for field definitions. Key fields:

- **type:** meeting-note, project-note, resource-note, daily-note, etc.
- **status:** active, on-hold, completed, archived
- **created:** YYYY-MM-DD format
- **modified:** YYYY-MM-DD format

## Current Focus

[Add your current projects or areas of focus here]

## Obsidian Plugins in Use

- Templates (Core Plugin)
- Dataview (Community Plugin) - for querying notes
- [Add any other plugins you use]

## How to Work With Me

- Always ask before creating new notes or folders
- Use existing templates whenever possible
- Add proper frontmatter metadata to all notes
- Suggest organisation improvements when you see inefficiencies
```

Go ahead and ask me to create that file."

**Check:** Wait for learner to request the file creation

**Action:**
Create the CLAUDE.md file with the specified content and confirm:
"Done! I've created CLAUDE.md in your vault root.

Now here's the magic: The next time you start a conversation with me (or even later in this conversation), I'll read this file automatically and know:

- You're using PARA structure
- You want British English
- You have metadata standards
- You prefer template-based note creation

It's like leaving a briefing document for your future self, except I'm the one reading it."

### Step 3: Testing the Memory (5 minutes)

**Say:**
"Let's test it. I want you to ask me a question about your vault structure, and I'll reference the CLAUDE.md file in my response.

Try something like: 'What do you know about my Obsidian vault?'"

**Check:** Wait for learner to ask

**Action:**
Read the CLAUDE.md file and respond using that information:
"Based on your CLAUDE.md file, here's what I know about your vault:

**Organisation:**

- You use PARA method (Projects, Areas, Resources, Archives)
- Templates are in Resources/Templates/
- You have metadata standards documented

**Preferences:**

- British English spelling
- All notes need frontmatter (created, modified, type, status)
- Template-first approach to note creation
- Title-Case-With-Hyphens for naming

**Current setup:**

- You're using the Templates Core Plugin
- You're using Dataview for querying notes

This means when we work together, I'll:

- Use 'colour' instead of 'color'
- Always add frontmatter to new notes
- Suggest templates before creating notes from scratch
- Follow your naming conventions

See how this works? You don't have to remind me of these things - they're written down in CLAUDE.md, so I know them automatically."

### Step 4: Updating Your Vault Instructions (5 minutes)

**Say:**
"Brilliant! Now let's see what happens when we update the memory.

As you work in your vault, you'll learn new preferences. Your CLAUDE.md file should evolve with you.

Let's add something new. Ask me to update the CLAUDE.md file by adding a section called 'Linking Preferences' with these rules:

- Always create wiki-style links using [[note-name]] syntax
- Link to related notes in a 'Related Notes' section at the bottom
- Use tags for broad categories, links for specific relationships

Go ahead and ask me to update the file."

**Check:** Wait for learner to request the update

**Action:**
Update the CLAUDE.md file with the new section and confirm:
"Updated! I've added the Linking Preferences section to your CLAUDE.md:

```markdown
## Linking Preferences

- Always create wiki-style links using [[note-name]] syntax
- Link to related notes in a 'Related Notes' section at the bottom
- Use tags for broad categories, links for specific relationships
```

Now, whenever I create notes for you, I'll:

- Use [[wiki-links]] instead of markdown [links](url)
- Add a Related Notes section
- Distinguish between tags (broad categories) and links (specific relationships)

You've just taught me how you like your notes connected."

### Step 5: Real-World CLAUDE.md Examples (6 minutes)

**Say:**
"Excellent! Now let's talk about what you can actually put in a CLAUDE.md file for an Obsidian vault. Here are some real-world examples:

**For a research vault:**

```markdown
## Research Focus

This vault contains research on cognitive science and learning theory.

## Source Management

- All research papers go in Resources/Papers/
- Include `source:` field in frontmatter with DOI or URL
- Add `author:` and `year:` fields for citations
```

**For a work vault:**

```markdown
## Work Context

I'm a product manager at TechCo. This vault contains:

- Project documentation (Projects/)
- Team meeting notes (Areas/Team-Management/)
- Product research (Resources/)

## Confidentiality

- Never suggest committing sensitive information to git
- Client names should be anonymised in examples
```

**For a creative writing vault:**

```markdown
## Writing Projects

Each project in Projects/ is a different story or book.

## Character Notes

- Character notes go in Resources/Characters/
- Include frontmatter: role (protagonist/antagonist), story, traits
- Link characters to relevant story notes
```

Think about your own vault. What specific instructions would help me work better with your setup?

Have a think and tell me what you'd add."

**Check:** Wait for learner to share their ideas

**Say:**
"Those are brilliant additions! {Provide specific feedback on their choices}

Let me update your CLAUDE.md with those instructions."

**Action:**
Add their suggested sections to the CLAUDE.md file and show them the updated version.

### Step 6: Global vs. Vault-Specific CLAUDE.md (5 minutes)

**Say:**
"Perfect! Now here's something important: CLAUDE.md files can exist at different levels.

You can have:

- A **global CLAUDE.md** in your home directory (applies to all work)
- A **vault-specific CLAUDE.md** in your Obsidian vault (applies to this vault only)
- A **project-specific CLAUDE.md** in a subfolder (applies to that project only)

If there's a conflict, the most specific one wins. So a vault CLAUDE.md overrides a global one.

Here's how to think about it:

**Global CLAUDE.md** (in your home directory):

- Your general preferences (British English, communication style)
- Your name, role, company
- Universal rules you always follow

**Vault CLAUDE.md** (in your Obsidian vault):

- Vault structure and organisation
- Obsidian-specific preferences
- Vault-specific metadata and templates
- Current projects in this vault

**Project CLAUDE.md** (in Projects/Specific-Project/):

- Project-specific context
- Stakeholders and deadlines
- Project-specific naming or metadata rules

Most people start with just a vault-level CLAUDE.md and add others later. For now, your vault CLAUDE.md is perfect.

Does this hierarchy make sense?"

**Check:** Wait for learner to confirm understanding

### Step 7: Maintenance and Best Practices (5 minutes)

**Say:**
"Excellent! Now let's talk about keeping your CLAUDE.md useful.

Here are some best practices:

**1. Update it regularly**

- After each work session, ask yourself: 'Did I explain something to Claude that should be in CLAUDE.md?'
- Weekly review: Read your CLAUDE.md and update anything that's changed

**2. Be specific and actionable**

- ❌ 'Use good note names'
- ✅ 'Use Title-Case-With-Hyphens for note names (e.g., My-Project-Note.md)'

**3. Remove outdated information**

- If your vault structure changes, update CLAUDE.md immediately
- Old instructions can confuse me

**4. Keep it concise**

- I'll read all of it, but shorter is better
- Focus on what's actually important

**5. Include examples**

- Show me what good looks like
- Example frontmatter, example file names, example folder structures

Here's a practical exercise: Look at the CLAUDE.md we created. Read through it and tell me if there's anything unclear or anything you'd change."

**Check:** Wait for learner to review and suggest changes

**Action:**
If they suggest changes, implement them. If they're happy as-is, affirm that. Either way, explain why their thinking is sound.

### Step 8: Wrap-up (3 minutes)

**Say:**
"That's Lab {labId} complete! You've learned how to give me vault memory with CLAUDE.md.

**Key takeaways:**

- CLAUDE.md files are instructions I read at the start of every conversation
- Update them as you learn what works for your vault
- Be specific and actionable in your instructions
- You can have global (home), vault (Obsidian root), and project-level CLAUDE.md files
- Keep them concise and up to date

This is one of the most powerful features of Claude Code. Every successful Obsidian vault I've seen has a well-maintained CLAUDE.md file.

{ifNotLastInTheme:That's all 5 labs in Theme 1 complete! You've built a complete digital workspace with PARA structure, templates, metadata, and project memory. You're ready for Theme 2!}

{ifLastInTheme:That's Theme 1 complete! You've built the foundations of your digital workspace.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: How long should a vault CLAUDE.md file be?

**A:** For an Obsidian vault, 50-150 lines is typical. Enough to cover structure, preferences, and current focus, but not so long it becomes a chore to maintain.

### Q: What if I forget what's in my CLAUDE.md?

**A:** Just ask me! Say 'Show me what's in CLAUDE.md' and I'll read it back to you. You can also just open it in Obsidian like any other note.

### Q: Should I commit CLAUDE.md to git if I sync my vault?

**A:** Yes! CLAUDE.md is part of your vault structure. Anyone else working in the vault (or your future self on another machine) will benefit from the instructions.

### Q: What happens if there's conflicting information in CLAUDE.md?

**A:** I'll usually follow the most recent or specific instruction. If I'm unsure, I'll ask you to clarify. This is why keeping it up to date matters.

---

## Success Criteria

- Learner created a CLAUDE.md file in their Obsidian vault root
- Learner successfully updated the file with new information
- Learner can explain why CLAUDE.md files are useful for Obsidian vaults
- Learner understands the difference between global, vault, and project-level CLAUDE.md files
- Learner has personalised their CLAUDE.md with vault-specific instructions
