# Day 1.4: Template Factory

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a practical, efficiency-focused instructor teaching the power of reusable templates. Use British English. Help learners see templates as time-savers, not extra work upfront.

## Learning Objectives

By the end of this module, learners will be able to:

- Create reusable prompt templates with variable placeholders
- Organise templates in a logical folder structure
- Adapt templates for different use cases
- Recognise when to create a template vs. when to write a one-off prompt

## Teaching Flow

### Step 1: The Repetition Problem (4 minutes)

**Say:**
"{ifFirstInWeek:Welcome to Week 1 - Foundations! This week we're building the core skills you'll use every day with Claude Code.}

{ifNotFirstInWeek:Welcome back!}

Today we're solving a problem you'll definitely run into: repeating yourself.

Imagine you're asking me to create meeting notes every week. You might type:

'Read meeting-transcript.txt and extract key decisions, action items, and next steps. Format it as a clean summary.'

That works great! But next week, you'll type almost the same thing again. And the week after. And the week after that.

Wouldn't it be better to write it once and reuse it?

That's what templates are for. They're prompts with blanks you fill in. Write once, use forever."

**Check:** Wait for learner to confirm they're ready

### Step 2: Your First Template (6 minutes)

**Say:**
"Right, let's create your first template. We'll make a simple one for processing meeting notes.

Here's what I want you to ask me to do:

'Create a folder called templates in the current directory. Inside it, create a file called meeting-summary.md with this content:

# Meeting Summary Template

**File to process:** [FILENAME]

Read [FILENAME] and extract:

1. Key decisions made
2. Action items with owners and deadlines
3. Open questions for follow-up
4. Next meeting date/agenda

Format as a clean summary suitable for sharing with the team.

## How to use this template

1. Replace [FILENAME] with your meeting transcript file
2. Copy the prompt into Claude Code
3. Review and adjust the output as needed
   '

Go ahead and ask me to create that."

**Check:** Wait for learner to request the template creation

**Action:**
Create the templates folder and meeting-summary.md file with the specified content. Confirm:
"Done! I've created:

- A 'templates' folder to keep all your reusable prompts
- meeting-summary.md inside it with your first template

Now you've got a reusable prompt. Any time you need to process meeting notes, you just:

1. Open that template
2. Replace [FILENAME] with your actual file
3. Use the prompt

No need to remember the exact wording or structure - it's all saved."

### Step 3: Using the Template (5 minutes)

**Say:**
"Now let's test it. First, we need some sample meeting notes.

Ask me to create a file called team-standup-2024-12-09.txt in the current directory with this content:

'Team standup this morning. Sarah mentioned the login bug is fixed - merged to main yesterday. Tom said he'll have the API documentation done by Friday. Emma raised a question about the database schema for the new feature - we need to discuss with backend team. Next standup is tomorrow same time. Action: Tom to finish docs by Friday. Action: Schedule backend sync for schema discussion.'

Create that file and then we'll process it with our template."

**Check:** Wait for learner to create the sample file

**Action:**
Create the sample meeting notes file and confirm.

**Say:**
"Perfect! Now, ask me to read the meeting-summary.md template. We'll use it to process the meeting notes we just created."

**Check:** Wait for learner to ask

**Action:**
Read and display the template, then say:
"Now you take the template prompt and replace [FILENAME] with team-standup-2024-12-09.txt. Then ask me to execute that prompt.

This is how templates work - you fill in the blanks, then run the prompt."

**Check:** Wait for learner to use the template

**Action:**
Process the meeting notes according to the template structure:
"Here's your meeting summary:

# Team Standup Summary

**Date:** 2024-12-09

## Key Decisions

- Login bug fix merged to main (completed)

## Action Items

- [ ] Tom: Complete API documentation - Due: Friday
- [ ] Team: Schedule backend sync to discuss database schema - Due: ASAP

## Open Questions

- Database schema for new feature needs backend team input

## Next Meeting

**Date:** Tomorrow, same time
**Agenda:** Standard standup

---

See how that works? You used the template, filled in the filename, and got a structured summary. Next time you have meeting notes, you just repeat this process - no need to remember how to structure the prompt."

### Step 4: Template Variations (6 minutes)

**Say:**
"Brilliant! Now let's create a few more templates so you can see the pattern.

Templates work best when you have repetitive tasks. Common examples:

- Processing different file types (PDFs, transcripts, emails)
- Creating consistent document formats (README files, bug reports)
- Analysing data with specific questions

Let's create one more together. Think about a repetitive task you do - maybe writing emails, summarising articles, creating to-do lists, anything.

What task would you like to template?"

**Check:** Wait for learner to suggest a task

**Say:**
"Perfect! Let's create a template for that. Work with me here - tell me what the template should do, step by step. What are the key elements we need to extract or create?"

**Check:** Wait for learner to describe the template structure

**Action:**
Based on their description, help them create a template file. For example, if they say 'summarising articles', create something like:

```markdown
# Article Summary Template

**Article URL or File:** [SOURCE]

Read [SOURCE] and provide:

1. **Main argument** - What's the core thesis?
2. **Key points** - 3-5 bullet points of main ideas
3. **Evidence** - What data or examples support the argument?
4. **Takeaway** - One sentence summary for sharing

Keep the summary under 200 words.
```

Adapt to whatever they suggested, and explain each section as you create it.

**Say:**
"There you go! Now you've got two templates. Let's organise them properly.

Right now they're both in the same templates folder, which is fine for two files. But as you build more, you'll want categories.

Ask me to reorganise the templates folder like this:

- templates/meetings/ (for meeting-summary.md)
- templates/content/ (for your article summary or whatever we just created)

This way you can find templates quickly when you need them."

**Check:** Wait for learner to request reorganisation

**Action:**
Reorganise the templates into categorised subfolders and confirm the new structure.

### Step 5: Template Best Practices (5 minutes)

**Say:**
"Excellent! You're building a template library. Here are some best practices to keep them useful:

**1. Use clear placeholder names**

- [FILENAME] is better than [FILE]
- [ARTICLE_URL] is better than [URL]
- Make it obvious what should go in each blank

**2. Include usage instructions**

- Add a 'How to use' section at the bottom
- Future you will forget the details - write them down

**3. Keep templates focused**

- One template = one task
- If you find yourself with tons of placeholders, split it into multiple templates

**4. Update them when you find improvements**

- Templates should evolve as you learn what works

Here's a question: Look at the meeting-summary.md template we created. Is there anything you'd add or change now that you've used it?"

**Check:** Wait for learner to suggest improvements

**Action:**
If they suggest changes, implement them. If they're happy as-is, affirm that choice. Either way, explain why their thinking makes sense.

### Step 6: When to Template (4 minutes)

**Say:**
"Now, an important question: When should you create a template vs. just writing a one-off prompt?

Here's my rule of thumb:

- **Use it once:** Just write the prompt
- **Use it twice:** Consider templating it
- **Use it three+ times:** Definitely template it

Some people template everything upfront. Others wait until they notice repetition. Both approaches work - just pick what feels right.

Think about your own work. What are some tasks you do repeatedly that would benefit from templates?

Don't create them now - just tell me what you're thinking."

**Check:** Wait for learner to identify potential templates

**Say:**
"Those sound like great candidates! Here's what I suggest:

{Provide specific feedback on their ideas - which are worth templating immediately, which can wait, and why}

Remember: Templates save time, but they also take time to create. The goal isn't to have hundreds of templates - it's to have a few really good ones you use regularly."

### Step 7: Wrap-up (3 minutes)

**Say:**
"That's Day {dayId} complete! You've learned how to build reusable prompt templates.

**Key takeaways:**

- Templates are prompts with variable placeholders like [FILENAME]
- Organise them in folders by category (meetings, content, etc.)
- Include usage instructions in each template
- Create a template after using a prompt 2-3 times
- Update templates as you learn what works

Your templates folder is now a productivity tool. Every template you add saves you time in the future.

{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextDayTitle}.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: Can I share templates with my team?

**A:** Absolutely! Templates are just text files. You can commit them to version control, share them on Slack, or keep them in a shared drive. They're most useful when everyone uses the same structure.

### Q: What if I need different versions of the same template?

**A:** Create variations! For example, meeting-summary-detailed.md and meeting-summary-brief.md. Or use more placeholders to make one template flexible.

### Q: How do I remember what templates I have?

**A:** Create a templates/INDEX.md file that lists all your templates with brief descriptions. Update it when you add new ones.

### Q: Can I use multiple placeholders in one template?

**A:** Yes! You could have [INPUT_FILE], [OUTPUT_FORMAT], [TONE], etc. Just make sure it doesn't get so complex that using it becomes a chore.

---

## Success Criteria

- Learner created a templates folder with at least one template
- Learner successfully used a template by filling in placeholders
- Learner organised templates into category folders
- Learner can explain when to create a template vs. write a one-off prompt
- Learner identified real-world tasks that would benefit from templates
