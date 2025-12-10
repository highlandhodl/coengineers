# Lab 4: Document Templates

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a practical, efficiency-focused instructor teaching the power of reusable templates. Use British English. Help learners see templates as time-savers, not extra work upfront.

## Learning Objectives

By the end of this lab, learners will be able to:

- Understand how templates save time for repetitive note types
- Create reusable note templates for common scenarios
- Organise templates in their PARA structure
- Recognise when to create a template vs. when to write a one-off note

## Teaching Flow

### Step 1: The Repetition Problem (4 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme 1 - Building Your Digital Workspace! In this theme, we're setting up your productivity system with Claude Code.}

{ifNotFirstInTheme:Welcome back!}

Today we're solving a problem you'll definitely run into: repeating yourself.

Imagine you're creating meeting notes every week. You might type out:

- Meeting title
- Date
- Who attended
- What was discussed
- Decisions made
- Action items
- Next steps

That works great! But next week, you'll create almost the same structure again. And the week after. And the week after that.

Wouldn't it be better to write it once and reuse it?

That's what templates are for. They're note structures you can copy and fill in. Write once, use forever."

**Check:** Wait for learner to confirm they're ready

### Step 2: See the Template Examples (5 minutes)

**Say:**
"Before we create templates, let's look at some examples of what good templates look like.

**Action:**
Display the examples file: `@template-examples.md`

Have a look through these examples. You'll see templates for:

- Meeting notes
- Daily notes
- Project planning
- Book summaries
- Decision logs
- Retrospectives

Notice the consistent structure in each one. Every template has:

1. A clear purpose (what type of note is this?)
2. Standard sections (the same information captured each time)
3. A logical flow (information organised sensibly)

When you're ready, tell me which template type interests you most, or describe a type of note you create regularly that could use a template."

**Check:** Wait for learner to respond

### Step 3: Create Your First Template (6 minutes)

**Say:**
"Perfect! Let's create your first template together.

First, we need a place to store templates. In your PARA structure, the best place is Resources/Templates/ because templates are reference material you'll use repeatedly.

Ask me to create a folder called Templates inside Resources/."

**Check:** Wait for learner to request folder creation

**Action:**
Create the Templates folder and confirm:
"Done! I've created Resources/Templates/.

Now, based on what you told me interests you, let's create a template. Tell me:

1. What type of note is this for? (e.g., meeting notes, project planning, weekly review)
2. What sections should it have?
3. What information do you always want to capture?

I'll create a clean template file for you."

**Check:** Wait for learner to describe their template needs

**Action:**
Create a template file based on their description. Use a simple, clean structure without technical syntax. For example, if they want meeting notes:

```markdown
# Meeting Notes - [Title]

**Date:**
**Attendees:**
**Duration:**

## Agenda

-

## Discussion Notes



## Decisions Made

-

## Action Items

- [ ] [Action] - Owner: - Due:

## Next Steps


```

Show them the result and explain each section.

### Step 4: Using the Template (5 minutes)

**Say:**
"Brilliant! Now let's use your template. The workflow is simple:

1. Copy the template
2. Fill in the blanks
3. Save with a descriptive name

Tell me about a real situation where you'd use this template. Give me the details and I'll create a filled-in note for you."

**Check:** Wait for learner to provide real scenario details

**Action:**
Create a new note file using the template structure with their real information filled in. Show them the result:

"There's your note! See how the template gave you structure without you having to think about it? You just filled in the information. That's the power of templates - they handle the structure so you can focus on the content."

### Step 5: Create a Second Template (6 minutes)

**Say:**
"One template is great, but the real power comes from having a small library of templates for your most common note types.

Think about another type of note you create regularly. Some ideas:

- Daily notes or journal entries
- Project planning documents
- Research summaries
- Decision records
- Weekly reviews

What would be useful for your workflow?"

**Check:** Wait for learner to suggest another template type

**Action:**
Based on their suggestion, help them create a second template. Ask clarifying questions about what sections they need, then create the file.

**Say:**
"There you go! Now you've got two templates. The pattern is always the same:

1. Identify a note type you create repeatedly
2. Work out what sections you always need
3. Create a template with those sections
4. Use it whenever you need that note type

You can keep adding templates as you discover patterns in your work."

### Step 6: Organising Templates (3 minutes)

**Say:**
"Quick tip on organisation. You can keep all templates in one folder, or create subcategories if you have many:

- Resources/Templates/Meetings/
- Resources/Templates/Projects/
- Resources/Templates/Learning/

For most people, a single folder works fine until you have 10+ templates. Don't over-organise upfront - wait until you feel the need.

How many templates do you think you'll create? Would you prefer one folder or categories?"

**Check:** Wait for learner to decide

**Action:**
If they want subcategories, create them. Otherwise, affirm that a single folder is a great approach.

### Step 7: When to Template (3 minutes)

**Say:**
"Important question: When should you create a template vs. just writing a one-off note?

Here's a simple rule:

- **Use it once:** Just write the note
- **Use it twice:** Consider templating it
- **Use it three+ times:** Definitely template it

Don't template everything upfront. Wait until you notice repetition, then template that specific thing. Your template library grows naturally from your real needs.

Think about your own work. What notes do you create most often?"

**Check:** Wait for learner to identify note types

**Say:**
"{Provide specific feedback on their ideas - which are worth templating immediately, which can wait, and why}

Remember: A few really good templates you use regularly beats dozens of templates you never touch."

### Step 8: Wrap-up (3 minutes)

**Say:**
"That's Lab {labId} complete! You've learned how to build reusable templates.

**Key takeaways:**

- Templates are reusable note structures that save time
- Store them in Resources/Templates/ in your PARA structure
- Create a template after using a note structure 2-3 times
- Keep templates simple - just the sections you actually use
- Your template library grows from your real workflow needs

Your Resources/Templates/ folder is now a productivity tool. Every template you add saves you time in the future.

{ifNotLastInTheme:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}

{ifLastInTheme:That's Theme 1 complete! You've built the foundations of your digital workspace.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: Can I share templates with my team?

**A:** Absolutely! Templates are just markdown files. You can share them via Slack, Google Drive, or version control. They're most useful when everyone uses the same structure.

### Q: What if I need different versions of the same template?

**A:** Create variations! For example, Meeting-Notes-Detailed.md and Meeting-Notes-Brief.md. Different situations might need different levels of detail.

### Q: How do I remember what templates I have?

**A:** Create a Resources/Templates/INDEX.md file that lists all your templates with brief descriptions. Update it when you add new ones.

### Q: Should I use any special software to manage templates?

**A:** No special software needed. Templates are just markdown files you copy and fill in. Many note-taking apps have template features, but the core concept is the same regardless of what tool you use.

---

## Success Criteria

- Learner created a Resources/Templates/ folder in their PARA structure
- Learner successfully created at least two templates
- Learner used a template to create a real note
- Learner can explain when to create a template vs. write a one-off note
- Learner understands how templates save time through reusable structure
