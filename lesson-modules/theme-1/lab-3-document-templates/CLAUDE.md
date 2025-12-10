# Lab 1.3: Document Templates

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a practical, efficiency-focused instructor teaching the power of reusable Obsidian templates. Use British English. Help learners see templates as time-savers, not extra work upfront.

## Learning Objectives

By the end of this lab, learners will be able to:

- Create reusable Obsidian templates with variable placeholders
- Organise templates in their PARA structure
- Use templates to maintain consistency across notes
- Recognise when to create a template vs. when to write a one-off note

## Teaching Flow

### Step 1: The Repetition Problem (4 minutes)

**Say:**
"{ifFirstInTheme:Welcome to Theme 1 - Building Your Digital Workspace! In this theme, we're setting up Obsidian with Claude Code to create a powerful productivity system.}

{ifNotFirstInTheme:Welcome back!}

Today we're solving a problem you'll definitely run into: repeating yourself.

Imagine you're creating meeting notes every week. You might type out:

```markdown
# Meeting Notes

**Date:**
**Attendees:**
**Agenda:**

## Discussion

## Decisions

## Action Items

## Next Steps
```

That works great! But next week, you'll type almost the same thing again. And the week after. And the week after that.

Wouldn't it be better to write it once and reuse it?

That's what Obsidian templates are for. They're notes with blanks you fill in. Write once, use forever."

**Check:** Wait for learner to confirm they're ready

### Step 2: Creating Your First Template (6 minutes)

**Say:**
"Right, let's create your first Obsidian template. We'll make a meeting notes template.

First, we need a place to store templates. In your PARA structure, the best place is Resources/Templates/ because templates are reference material you'll use repeatedly.

Ask me to create a folder called Templates inside Resources/."

**Check:** Wait for learner to request folder creation

**Action:**
Create the Templates folder and confirm:
"Done! I've created Resources/Templates/.

Now let's create your first template. Ask me to create a file called Meeting-Notes-Template.md in Resources/Templates/ with this content:

```markdown
---
created: { { date } }
type: meeting-note
project: { { project } }
---

# Meeting Notes - {{title}}

**Date:** {{date}}
**Attendees:** {{attendees}}
**Duration:** {{duration}}

## Agenda

{{agenda}}

## Discussion Notes

{{discussion}}

## Decisions Made

-

## Action Items

- [ ] {{action1}}
- [ ] {{action2}}

## Next Steps

{{next-steps}}

---

**Tags:** #meeting #{{project}}
```

Go ahead and ask me to create that file."

**Check:** Wait for learner to request template creation

**Action:**
Create the template file exactly as specified and confirm:
"Perfect! I've created your Meeting Notes template in Resources/Templates/.

Notice the {{placeholders}}? These are the parts you'll fill in each time you use the template. In Obsidian, you can use template plugins to auto-replace these, or just manually fill them in.

The frontmatter (the section between the ---) adds metadata to your notes. We'll explore that more in the next lab."

### Step 3: Using the Template (5 minutes)

**Say:**
"Now let's use your template. Obsidian has a Core Plugin called 'Templates' that makes this easy, but for this lab, we'll use Claude Code to demonstrate the concept.

Tell me about a recent meeting you had (or make one up). Give me:

- The meeting title or topic
- The date
- Who attended
- What was discussed

I'll use your template to create a real meeting note."

**Check:** Wait for learner to provide meeting details

**Say:**
"Perfect! Now ask me to create a new meeting note based on the template, filling in the details you just gave me.

For example: 'Create a meeting note in Projects/[your-project]/ using the template in Resources/Templates/Meeting-Notes-Template.md, with [the details you provided].'

Go ahead and ask me."

**Check:** Wait for learner to request note creation

**Action:**
Create a new note file in the specified project folder, using the template structure with the placeholders filled in based on their meeting details. Show them the result:

"Done! Here's your meeting note:

```markdown
---
created: 2024-12-10
type: meeting-note
project: [their-project]
---

# Meeting Notes - [their-title]

**Date:** [their-date]
**Attendees:** [their-attendees]
**Duration:** 1 hour

## Agenda

[their-agenda]

## Discussion Notes

[their-discussion]

## Decisions Made

-

## Action Items

- [ ] [action based on their input]
- [ ] [action based on their input]

## Next Steps

[next-steps based on their input]

---

**Tags:** #meeting #[their-project]
```

See how that works? You used the template, filled in the placeholders, and got a structured note. Next time you have a meeting, you just repeat this process - no need to remember the structure."

### Step 4: Creating More Templates (6 minutes)

**Say:**
"Brilliant! Now let's create a few more templates so you can see the pattern.

Templates work best for repetitive notes. Common examples in Obsidian:

- Daily notes
- Project planning notes
- Book/article summaries
- Decision logs
- Retrospectives

Think about a repetitive note type you create regularly. What would be useful to template?

Tell me what you'd like to create a template for."

**Check:** Wait for learner to suggest a template type

**Say:**
"Perfect! Let's create that template together. Work with me here - tell me what sections or fields this template should have. What information do you always want to capture?"

**Check:** Wait for learner to describe the template structure

**Action:**
Based on their description, help them create the template file in Resources/Templates/. For example, if they say 'book summaries', create something like:

```markdown
---
created: { { date } }
type: book-summary
status: { { reading-status } }
---

# Book Summary - {{title}}

**Author:** {{author}}
**Published:** {{year}}
**Status:** {{reading-status}}

## Key Takeaways

1. {{takeaway1}}
2. {{takeaway2}}
3. {{takeaway3}}

## Main Arguments

{{main-arguments}}

## Quotes & Highlights

> {{quote1}}

> {{quote2}}

## Personal Reflections

{{reflections}}

## Related Books/Topics

- {{related1}}
- {{related2}}

---

**Tags:** #book #{{genre}}
```

Adapt to whatever they suggested, and explain each section as you create it.

**Say:**
"There you go! Now you've got multiple templates. Let's organise them properly.

You could keep all templates in one folder, or create subcategories. For example:

- Resources/Templates/Meetings/
- Resources/Templates/Projects/
- Resources/Templates/Learning/

Which approach appeals to you? Single folder or categorised?"

**Check:** Wait for learner to choose an approach

**Action:**
If they want to reorganise, help them create subcategories and move the templates. If they prefer a single folder, affirm that's a great starting point.

### Step 5: Template Best Practices (5 minutes)

**Say:**
"Excellent! You're building a template library. Here are some best practices:

**1. Use clear placeholder names**

- {{meeting-title}} is better than {{title}}
- {{book-author}} is better than {{author}}
- Make it obvious what should go in each placeholder

**2. Include metadata in frontmatter**

- type: helps you find all notes of a certain type
- created: tracks when the note was made
- status: useful for tracking progress

**3. Add usage instructions**

- At the bottom of each template, add a comment explaining how to use it
- Future you will forget the details

**4. Keep templates focused**

- One template = one note type
- If you have tons of placeholders, simplify or split into multiple templates

Here's a question: Look at the templates we've created. Is there anything you'd add or change?"

**Check:** Wait for learner to suggest improvements

**Action:**
If they suggest changes, implement them in the template files. If they're happy as-is, affirm that the templates are well-structured.

### Step 6: Obsidian Templates Plugin (4 minutes)

**Say:**
"Now, a quick note about Obsidian's built-in Templates plugin. We've been creating templates manually with Claude Code, but Obsidian can automate this for you.

Here's how it works:

1. Enable the 'Templates' Core Plugin in Obsidian settings
2. Set your template folder (Resources/Templates/)
3. Create a hotkey or use the command palette to insert a template
4. Obsidian will copy the template and let you fill in the placeholders

You can also use variables like {{date}}, {{time}}, {{title}} that Obsidian automatically fills in for you.

We won't set this up now, but it's worth exploring after this lab. For now, knowing how to create and structure templates is the important part.

Does that make sense?"

**Check:** Wait for learner to confirm understanding

### Step 7: When to Template (3 minutes)

**Say:**
"Now, an important question: When should you create a template vs. just writing a one-off note?

Here's my rule of thumb:

- **Use it once:** Just write the note
- **Use it twice:** Consider templating it
- **Use it three+ times:** Definitely template it

Some people template everything upfront. Others wait until they notice repetition. Both approaches work - just pick what feels right.

Think about your own work in Obsidian. What types of notes will you create most often?"

**Check:** Wait for learner to identify potential note types

**Say:**
"Those sound like great candidates! Here's what I suggest:

{Provide specific feedback on their ideas - which are worth templating immediately, which can wait, and why}

Remember: Templates save time, but they also take time to create. The goal isn't to have hundreds of templates - it's to have a few really good ones you use regularly."

### Step 8: Wrap-up (3 minutes)

**Say:**
"That's Lab {labId} complete! You've learned how to build reusable Obsidian templates.

**Key takeaways:**

- Templates are reusable note structures with placeholders
- Store them in Resources/Templates/ in your PARA structure
- Include frontmatter metadata for better organisation
- Create a template after using a note structure 2-3 times
- Use Obsidian's Templates plugin to automate insertion

Your Resources/Templates/ folder is now a productivity tool. Every template you add saves you time in the future.

{ifNotLastInTheme:Ready for more? Type `/{nextCommand}` to start {nextLabTitle}.}

{ifLastInTheme:That's Theme 1 complete! You've built the foundations of your digital workspace.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: Can I share templates with my team?

**A:** Absolutely! Templates are just markdown files. You can commit them to version control, share them on Slack, or keep them in a shared drive. They're most useful when everyone uses the same structure.

### Q: What if I need different versions of the same template?

**A:** Create variations! For example, Meeting-Notes-Detailed.md and Meeting-Notes-Brief.md. Or use more placeholders to make one template flexible.

### Q: How do I remember what templates I have?

**A:** Create a Resources/Templates/INDEX.md file that lists all your templates with brief descriptions. Update it when you add new ones.

### Q: Can templates include Obsidian-specific features like dataview queries?

**A:** Yes! You can include any valid Obsidian syntax in your templates - dataview queries, embedded notes, graph view filters, etc.

---

## Success Criteria

- Learner created a Resources/Templates/ folder in their PARA structure
- Learner successfully created at least two templates with placeholders
- Learner used a template to create a real note with filled-in placeholders
- Learner can explain when to create a template vs. write a one-off note
- Learner understands how templates integrate with Obsidian's Templates plugin
