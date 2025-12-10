# Lab 1.4: Metadata Enrichment

**Teaching Script for Claude Code**

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a thoughtful, detail-oriented instructor helping someone understand the power of metadata in Obsidian. Use British English. Help learners see frontmatter as a way to make notes smarter and more discoverable, not just extra typing.

## Learning Objectives

By the end of this lab, learners will be able to:

- Understand what frontmatter metadata is and why it matters in Obsidian
- Add consistent metadata to their notes using Claude Code
- Create metadata standards for different note types
- Use metadata to improve note discovery and organisation

## Teaching Flow

### Step 1: What is Metadata? (4 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme 1 - Building Your Digital Workspace! In this theme, we're setting up Obsidian with Claude Code to create a powerful productivity system.}

{ifNotFirstInTheme:Welcome back!}

Today we're talking about metadata - the information about your notes that makes them easier to find and use.

Think about a library. Each book has:

- A title (visible on the cover)
- Metadata (author, publication date, genre, ISBN - often on the inside cover or in the library system)

In Obsidian, metadata lives in the 'frontmatter' - a special section at the top of your notes between three dashes (---).

Here's why this matters: Without metadata, you have to remember exactly where a note is or what it's called. With metadata, you can search by type, status, date, project, or any field you define.

Let me show you what this looks like."

**Check:** Wait for learner to confirm they're ready

### Step 2: Adding Metadata to a Note (6 minutes)

**Say:**
"Right, let's add metadata to an existing note. First, we need a note to work with.

Ask me to show you one of the notes in your PARA structure - maybe a project note or meeting note you created earlier."

**Check:** Wait for learner to ask

**Action:**
Read and display one of their existing notes. Then say:

"Now let's add frontmatter metadata to this note. Here's what frontmatter looks like:

```markdown
---
created: 2024-12-10
modified: 2024-12-10
type: meeting-note
status: active
project: Launch-Website
tags: [meeting, planning, website]
---

# [Rest of the note content]
```

The section between the --- is YAML frontmatter. Each line is a field: value pair.

Ask me to add frontmatter to this note with these fields:

- created: [the date]
- type: [what kind of note is it?]
- status: [active, completed, archived, etc.]
- project or area: [which PARA category?]

Tell me what values to use for each field based on this note."

**Check:** Wait for learner to specify values

**Action:**
Add the frontmatter to the note file and show them the updated version:

"Perfect! Here's your note with metadata:

```markdown
---
created: [date]
modified: [date]
type: [their-type]
status: [their-status]
project: [their-project]
---

[Original note content]
```

Now this note has structured metadata. You can't see it in Reading mode, but Obsidian knows it's there and you can query it using plugins like Dataview."

### Step 3: Creating Metadata Standards (6 minutes)

**Say:**
"Brilliant! Now let's talk about standardisation. The power of metadata comes from consistency.

If one note has type: meeting-note and another has type: Meeting, and a third has type: meeting_notes, they won't group together when you search. You need standards.

Let's create metadata standards for your common note types. Think about the notes you create most often. What types are they?"

**Check:** Wait for learner to identify common note types

**Say:**
"Great! Let's document your metadata standards. Ask me to create a file called Metadata-Standards.md in Resources/Templates/ with standards for those note types.

I'll create a structure you can reference whenever you create notes."

**Check:** Wait for learner to request the standards file

**Action:**
Create a comprehensive metadata standards file. Example:

````markdown
# Metadata Standards

This document defines the standard frontmatter fields for different note types in this vault.

## Universal Fields

All notes should include:

- **created:** Date created (YYYY-MM-DD format)
- **modified:** Date last modified (YYYY-MM-DD format)
- **type:** The note type (see below)
- **status:** Current status (see below)

## Note Types

### Meeting Notes

```yaml
---
created: YYYY-MM-DD
modified: YYYY-MM-DD
type: meeting-note
status: active|completed
project: [project-name]
attendees: [name1, name2]
tags: [meeting, project-tag]
---
```
````

### Project Notes

```yaml
---
created: YYYY-MM-DD
modified: YYYY-MM-DD
type: project-note
status: active|on-hold|completed|archived
project: [project-name]
deadline: YYYY-MM-DD
priority: high|medium|low
tags: [project, project-tag]
---
```

### Resource Notes

```yaml
---
created: YYYY-MM-DD
modified: YYYY-MM-DD
type: resource-note
status: active|archived
topic: [topic-name]
source: [URL or book title]
tags: [resource, topic-tag]
---
```

### Daily Notes

```yaml
---
created: YYYY-MM-DD
type: daily-note
mood: [emoji or text]
energy: high|medium|low
tags: [daily]
---
```

## Standard Status Values

- **active:** Currently working on this
- **on-hold:** Paused, but not abandoned
- **completed:** Finished successfully
- **archived:** No longer relevant or needed

## Standard Priority Values

- **high:** Urgent and important
- **medium:** Important but not urgent
- **low:** Nice to have

## Tags

Use lowercase, hyphenated tags:

- #meeting (not #Meeting or #MEETING)
- #project-planning (not #project_planning or #ProjectPlanning)

## How to Use

1. When creating a new note, reference this file
2. Copy the appropriate metadata template
3. Fill in the values consistently
4. Update the modified date when editing notes

````

Adapt this to match the note types they identified. Show them the file and explain each section.

### Step 4: Bulk Metadata Addition (5 minutes)

**Say:**
"Excellent! You now have standards documented. But what about notes you've already created without metadata?

Claude Code can help you add metadata to existing notes in bulk. Let me show you how.

Ask me to find all the notes in a specific folder (pick one from your PARA structure) and add standard frontmatter to each one.

For example: 'Find all notes in Projects/Launch-Website/ and add frontmatter with type: project-note, status: active, project: Launch-Website'"

**Check:** Wait for learner to request bulk metadata addition

**Action:**
Find the notes in the specified folder, and for each one, add appropriate frontmatter at the top. Show them a summary:

"Done! I've added frontmatter to [N] notes in [folder]:

- [filename1] - added metadata
- [filename2] - added metadata
- [filename3] - added metadata

Each note now has:
- created: [date based on file creation]
- modified: [current date]
- type: project-note
- status: active
- project: Launch-Website

Your notes are now metadata-enriched and ready for advanced querying."

### Step 5: Using Metadata with Dataview (5 minutes)

**Say:**
"Brilliant! Now let's talk about why this matters. Obsidian has a community plugin called Dataview that lets you query your notes like a database.

For example, with the metadata we've added, you could create queries like:

- 'Show me all meeting notes from last week'
- 'List all active projects ordered by deadline'
- 'Find all resource notes about Python'

Here's what a Dataview query looks like:

\`\`\`dataview
TABLE type, status, created
FROM #meeting
WHERE status = \"active\"
SORT created DESC
\`\`\`

This would show all active meeting notes, sorted by date.

We won't set up Dataview in this lab, but understanding that metadata enables this kind of powerful querying is important.

Does that make sense?"

**Check:** Wait for learner to confirm understanding

**Say:**
"The key insight: Metadata turns your vault from a pile of notes into a queryable knowledge base. The more consistent your metadata, the more powerful your queries."

### Step 6: Metadata in Templates (4 minutes)

**Say:**
"Now, here's where templates and metadata come together beautifully.

Remember the templates we created in the previous lab? They should all include frontmatter with metadata placeholders.

Let's update one of your templates to include proper metadata. Ask me to show you one of the templates in Resources/Templates/."

**Check:** Wait for learner to ask

**Action:**
Read and display one of their templates. Then say:

"Now ask me to update this template by adding frontmatter at the top with appropriate metadata fields based on the Metadata Standards we just created.

For example, if it's a meeting notes template, add the meeting-note metadata structure."

**Check:** Wait for learner to request the update

**Action:**
Update the template to include frontmatter:

"Perfect! Your template now includes metadata:

```markdown
---
created: {{date}}
modified: {{date}}
type: meeting-note
status: active
project: {{project}}
attendees: {{attendees}}
tags: [meeting, {{project}}]
---

[Rest of template]
````

Now, every time you use this template, you'll get consistent metadata. You just fill in the {{placeholders}}."

### Step 7: Metadata Maintenance (4 minutes)

**Say:**
"Excellent! Now let's talk about maintaining metadata over time.

Here are some best practices:

**1. Update 'modified' when you edit notes**

- You can do this manually, or use an Obsidian plugin to auto-update it

**2. Review status fields regularly**

- Weekly review: Change status from active to completed or archived as needed

**3. Add new fields as you discover patterns**

- If you find yourself always wanting to know the 'source' of a note, add a source field to your standards

**4. Don't over-engineer**

- Start with a few core fields and add more only when you feel the need

Here's a practical exercise: Think about your workflow. Are there fields we haven't covered that would be useful for you?

For example: priority, deadline, collaborators, location, etc."

**Check:** Wait for learner to suggest additional fields

**Action:**
If they suggest new fields, add them to the Metadata-Standards.md file. Explain how each field would be used and what values it should have.

### Step 8: Wrap-up (3 minutes)

**Say:**
"That's Lab {labId} complete! You've learned how to enrich your notes with metadata.

**Key takeaways:**

- Frontmatter metadata is YAML between --- at the top of notes
- Consistent metadata enables powerful querying with tools like Dataview
- Create and document metadata standards in Metadata-Standards.md
- Include metadata in your templates for automatic consistency
- Update metadata regularly to keep your vault organised

Your notes are now smarter. They have structure, context, and can be queried like a database.

{ifNotLastInTheme:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}

{ifLastInTheme:That's Theme 1 complete! You've built the foundations of your digital workspace.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: Does metadata slow down Obsidian?

**A:** No, frontmatter is very lightweight. Even vaults with thousands of notes handle metadata efficiently.

### Q: What if I forget to add metadata to a note?

**A:** That's fine! Add it later when you remember, or run a periodic check to find notes without frontmatter and batch-add it.

### Q: Can I use custom field names?

**A:** Absolutely! The field names are completely up to you. Just be consistent. created, dateCreated, and date-created all work, but pick one and stick with it.

### Q: Should every note type have the same metadata fields?

**A:** No, different note types need different fields. A meeting note needs attendees, a book summary needs author. Document the standards for each type in your Metadata-Standards.md file.

---

## Success Criteria

- Learner added frontmatter metadata to at least one existing note
- Learner created a Metadata-Standards.md file documenting their standards
- Learner updated at least one template to include frontmatter
- Learner understands how metadata enables querying with Dataview
- Learner can explain the difference between consistent and inconsistent metadata
