# Email Communication Style Guide

## Overview

Email is our primary external communication channel (with users, partners, investors) and our formal internal channel (for important decisions, async deep work, and documentation).

---

## Core Principles

### 1. Subject Lines Matter

Your subject line determines whether the email gets opened and when.

**Be specific**:

- ✅ "Week 4 feedback: 3 changes needed before launch"
- ❌ "Week 4"

**Be actionable when needed**:

- ✅ "[Action Required] Approve Q1 budget by Friday"
- ❌ "Q1 budget"

**Be informative for FYIs**:

- ✅ "[FYI] Course completion rate hit 65% this week"
- ❌ "Update"

### 2. Respect Recipient Time

Every email should pass the "So what?" test. Why does the recipient need this? What should they do with it?

### 3. Make Skimming Easy

Use structure, headings, bullets. Never send a wall of text.

### 4. Default to Reply-All... Carefully

If multiple people need context, keep them looped. But if it becomes a back-and-forth, take it to Slack or 1:1.

---

## Email Types & Templates

### 1. Customer Support Emails

#### Template: Responding to a Bug Report

```
Subject: Re: Bug with Day 15 lesson

Hi [Name],

Thanks for reporting this! You're absolutely right—there's a broken link in the Day 15 teaching script.

**What we're doing**: I've logged this with our engineering team. We'll have it fixed within 24 hours.

**Workaround for now**: You can access the correct file here: [link]

**Why it happened**: We recently reorganised the supporting materials folder and missed updating this reference. We've added a check to our deployment process so this doesn't happen again.

Really appreciate you taking the time to let us know. If you hit any other issues, just reply to this email.

Best,
[Name]

P.S. Saw you're on Day 15—you're halfway through Week 3! How's it going so far?
```

#### Template: Responding to "I'm Stuck" Email

```
Subject: Re: Stuck on Week 1 installation

Hi [Name],

I can help get you unstuck! This is a common snag—you're not alone.

**Quick question**: When you run `claude --version`, what do you see? This will tell me where the installation got stuck.

**Most common fix**: [Likely solution based on their description]

**If that doesn't work**: [Alternative solution]

**Video walkthrough**: [Link to Loom showing installation steps]

Let me know how you get on. Happy to jump on a quick call if you're still stuck—my Calendly link is [link].

Cheers,
[Name]
```

### 2. Internal Decision Emails

#### Template: Proposing a Decision

```
Subject: [Decision Needed] Week 4 launch date: Nov 15 or Dec 1?

Team,

I need a decision on Week 4 rewrite launch date. Two options on the table.

**Context**: Week 4 rewrite is in final testing. We can launch in 2 weeks (Nov 15) or wait 4 weeks (Dec 1) for more polish.

**Option 1: Launch Nov 15**
Pros:
• Gets new content to users faster
• Captures Q4 enrollments
• Iteration in production (real feedback)

Cons:
• Less beta testing (10 users vs. 30)
• Higher risk of bugs
• No time for video walkthrough

**Option 2: Launch Dec 1**
Pros:
• More beta testing (30 users)
• Time to add video walkthrough
• Lower risk, more polish

Cons:
• Delays value to users by 2 weeks
• Misses Q4 marketing push
• Slows iteration cycle

**My recommendation**: Launch Nov 15. Our beta testing has been solid (NPS 85), and we can iterate based on real usage. Waiting 2 more weeks for marginal polish doesn't justify the delay.

**Need by**: EOD Wednesday (need to brief marketing)

**How to respond**: Reply-all with your vote and reasoning (or concerns I haven't considered).

Thanks,
Alex
```

#### Template: Documenting a Decision

```
Subject: [Decided] Week 4 launches Nov 15

Team,

Decision made: We're launching Week 4 rewrite on Nov 15.

**Why**: Consensus that real-world feedback > more beta testing. We can iterate quickly if issues arise.

**Next steps**:
• Sarah: Marketing brief by Thursday
• Marcus: Deployment checklist by Friday
• Alex: User comms drafted by Monday
• Aisha: Discord announcement prepared

**What we're monitoring**:
• Support ticket volume (expect 10-15% spike)
• Completion rate (target: maintain 62%+)
• Feedback in #product-feedback channel

Thanks everyone for the thoughtful input. Let's ship this thing!

Alex
```

### 3. Customer Lifecycle Emails

#### Template: Welcome Email (Day 0)

```
Subject: Welcome to CoEngineers! Your first lesson awaits 👋

Hi [Name],

Welcome to CoEngineers! You're about to start a 31-day journey that'll completely transform how you work with Claude Code.

**Your first step**: Run `/w1.d1` in Claude Code to start Day 1: First Conversation.

No really, do it now. It takes 20 minutes and you'll immediately see what makes this course different.

**What to expect**:
• Week 1: Foundations (setup, templates, slash commands)
• Week 2: Content Processing (meetings, docs, research)
• Week 3: Creative Outputs (presentations, diagrams, social)
• Week 4: Building Software (ship a real feature!)

**Stuck? Need help?**
• Email: support@coengine.ai (we respond within 4 hours)
• Discord: [invite link] (500+ learners, super helpful)
• Docs: coengine.ai/help

**One more thing**: 62% of learners complete all 31 days. The ones who do share one thing in common—they start Week 1 within 24 hours of enrolling.

So what are you waiting for? Go run `/w1.d1` 😊

Cheers,
Tom Whitfield
Head of Content, CoEngine

P.S. Hit reply if you have questions. I read every email.
```

#### Template: Re-engagement Email (Inactive User)

```
Subject: Miss you in CoEngineers—pick up where you left off?

Hi [Name],

I noticed you haven't logged into CoEngineers in a couple of weeks. Life gets busy—totally get it!

**You left off at**: Day 8 (Meeting Tamer)
**Progress**: 8 of 31 days complete—you're 26% of the way there!

**What you're missing**: Week 2 is where things get really practical. Days 8-14 teach you to process meeting notes, documents, and research 10x faster. Multiple graduates have said "Week 2 paid for the entire course."

**Pick up where you left off**: Just run `/w2.d8` in Claude Code

**Need help getting unstuck?** Reply to this email and tell me what's blocking you. Common issues:
• "I don't have time" → Lessons take 20-30 min. Even 2-3 per week gets you there.
• "Week 1 was too basic" → Week 2 is where it gets good, promise.
• "I got stuck" → Tell me where. I'll help.

We'd love to see you graduate. You've already done the hard part (starting). Don't stop now!

Best,
Tom

P.S. If CoEngineers isn't for you, that's okay too. Just hit reply and let me know why—your feedback helps us improve.
```

#### Template: Graduation Email (Day 31 Complete)

```
Subject: You did it! 🎉 You're a CoEngineers graduate

Hi [Name],

You completed Day 31. You're officially a CoEngineers graduate!

**What you've achieved**:
✅ 31 days of focused learning
✅ Dozens of custom commands and templates
✅ A shipped feature (Week 4 capstone)
✅ A repeatable methodology for AI-augmented work

**You're now in the top 62% of enrollees**. Most people start courses. You finished. That's rare and worth celebrating.

**What's next?**

1. **Certificate**: [Download your certificate] (perfect for LinkedIn)

2. **Alumni Discord**: Join #alumni for graduates only ([invite link])

3. **Premium Trial**: 14 days of Premium features, free ([activate here])

4. **Share your work**: We'd love to feature your capstone project ([submit here])

5. **Help others**: Refer a friend, they get 20% off, you get 1 month free

**Keep learning**:
• Try Bonus Days 29-31 (BMAD, Advanced PRP, bigger capstone)
• Explore the command marketplace (coming Q1 2025)
• Join monthly office hours with Sarah (CEO)

**One last thing**: What was your biggest win from the course? Hit reply and tell me. I read every response, and we feature the best stories on our site.

Congratulations, [Name]. You earned this.

Cheers,
Tom Whitfield
Head of Content, CoEngine

P.S. Don't be a stranger. We're here if you need us.
```

### 4. Internal Updates

#### Template: Weekly Product Update

```
Subject: [Product Update] Week of Dec 2: Week 4 shipped 🚀

Team,

Quick weekly product update:

**Shipped This Week**
• Week 4 rewrite (Days 22-28, new methodology)
• Company context files (COMPANY.md, PRODUCT.md, PERSONAS.md, COMPETITIVE.md)
• 20+ supporting materials for Week 4

**Metrics**
• Active learners: 1,420 (+3% WoW)
• Week 4 completion rate: 58% (down from 62%, investigating)
• NPS: 73 (+2 points)
• Support tickets: 52 (-8% WoW, good!)

**User Feedback Highlights**
✅ "Week 4 PRP template is a game-changer" (Maya, 5 similar)
✅ "BMAD method is now how I think about all projects" (Sara, 3 similar)
🚧 "Day 25 coding step is intimidating" (Tom, 8 similar—need to address)

**Next Week Priorities**
1. Bonus week content (Days 29-31)
2. Week 4 completion rate investigation
3. Command marketplace design review

**Help Needed**
• Beta testers for Bonus week (need 5, DM me)
• Feedback on Day 25 (is it too technical?)

Full notes: [Link to Notion]

Questions/thoughts? Hit reply or ping me on Slack.

Alex
```

### 5. Partner/External Emails

#### Template: Partnership Proposal

```
Subject: Partnership opportunity: CoEngineers + [Partner]

Hi [Name],

I'm Alex, PM at CoEngineers. We teach professionals how to master Claude Code through a 31-day hands-on course.

**Why I'm reaching out**: I think there's a strong partnership opportunity between CoEngineers and [Partner].

**The opportunity**:
[Specific, mutual-value proposition]

**Example**:
We've got 8,200+ enrolled learners, 73% of whom are product managers. Many have asked for integrations between Claude Code and [Partner Tool].

**What we're proposing**:
• Co-marketing: Feature [Partner] in Week 2/3 lessons
• Integration: Build [specific integration]
• Cross-promotion: We feature you, you feature us

**Mutual benefits**:
• You: Access to 8K+ Claude Code power users
• Us: Deeper tool integration, happier users

**Next step**: 30-minute intro call? I'm free [specific times].

If this isn't relevant for you, no worries—happy to connect with the right person on your team.

Best,
Alex Morrison
Product Manager, CoEngine
alex@coengine.ai
```

---

## Formatting Best Practices

### Structure Every Email

1. **Greeting**: "Hi [Name]," (warm) or "Team," (internal)
2. **Context**: Why you're writing (1-2 sentences)
3. **Content**: The meat (use headings, bullets, white space)
4. **Action/Next Step**: What you need from recipient
5. **Closing**: "Best," "Cheers," "Thanks,"

### Use Headings

For emails >3 paragraphs, use headings.

**Example**:

```
**Background**: [Context]

**The problem**: [Issue]

**Proposed solution**: [What you're suggesting]

**Next steps**: [What needs to happen]
```

### Use Bullets

Turn paragraphs into bullets when possible.

**Before**:

> The course completion rate has three main drivers. First, Week 1 setup friction causes 15% to abandon. Second, Week 2 content is highly engaging and retention improves. Third, Week 4 intimidates non-technical users.

**After**:

> Course completion rate drivers:
> • Week 1: Setup friction causes 15% abandonment
> • Week 2: High engagement, retention improves
> • Week 4: Intimidates non-technical users (18% drop-off)

### Highlight Actions

Make it obvious what you need.

**Use**:

- **Bold** for actions
- Separate section for "What I need from you"
- Specific deadlines

**Example**:

> **What I need from you**: Review the attached PRD and confirm it matches your understanding. Deadline: Friday EOD.

---

## Tone & Voice

### External (Customers, Partners)

**Tone**: Warm, professional, helpful

**Good**:

> Thanks for reaching out! I can definitely help with that.

**Bad**:

> We have received your inquiry and will respond in accordance with our SLA.

### Internal (Team)

**Tone**: Direct, clear, collaborative

**Good**:

> This approach has risks. Have we considered [alternative]?

**Bad**:

> I have concerns about the viability of this strategic direction.

---

## Response Time Expectations

| Email Type                 | Expected Response                   |
| -------------------------- | ----------------------------------- |
| Customer support           | <4 hours (business hours)           |
| Customer questions         | <24 hours                           |
| Internal decision requests | <24 hours                           |
| Internal FYIs              | No response needed unless specified |
| External partnerships      | <48 hours                           |

---

## Common Mistakes

### 1. The Buried Lede

**Problem**: Important point is at the bottom

**Fix**: Front-load the key message

**Before**:

> [3 paragraphs of context]
> ...
> So, I need your approval by Friday.

**After**:

> **Approval needed by Friday**: [Key ask]
>
> Context: [Supporting details]

### 2. The Missing Context

**Problem**: Assumes recipient has context they don't have

**Fix**: Always give brief context, even for ongoing threads

**Example**:

> Re: that thing we discussed
>
> I've made the changes.

vs.

> Re: Week 4 teaching scripts review
>
> I've updated Day 22-24 based on your feedback (simplified PRP section, added examples). Ready for another review.

### 3. The Vague Subject Line

**Problem**: Subject doesn't communicate content or urgency

**Fix**: Be specific and signal action if needed

**Bad**:

> Update

**Good**:

> [FYI] Week 4 completion rate dropped to 58%

### 4. The Reply-All Abuse

**Problem**: 12 people on an email, 2 need to be

**Fix**: Use "To:" for people who need to act, "Cc:" for people who need to know

### 5. The Wall of Text

**Problem**: Dense paragraph with no structure

**Fix**: Headings, bullets, white space

---

## Email Signatures

### External (Customer-facing)

```
Best,
[Name]

[Title]
CoEngine
[Email]
[Phone - optional]

P.S. [Personal touch or CTA]
```

**Example**:

```
Cheers,
Tom Whitfield

Head of Content
CoEngine
tom@coengine.ai

P.S. If you're stuck on anything, just hit reply. I read every email.
```

### Internal (Team)

Keep it simple:

```
[Name]
```

No need for title/contact for internal emails.

---

## Example Emails by Scenario

### Scenario: Asking for feedback on a draft

```
Subject: Feedback request: Week 4 Day 22 teaching script

Hi Maya,

I've drafted the Day 22 teaching script (Product Idea / PRP). Would love your eyes on it before I finalise.

**What I need**: Feedback on clarity, pacing, and whether the PRP template is too complex for beginners.

**Context**: This is the first lesson in Week 4 (spec-driven dev). It introduces the PRP framework learners will use for the rest of the week.

**Link**: [Google Doc with comment access]

**Deadline**: Friday EOD (want to ship Week 4 next Tuesday)

**Specific questions**:
1. Is the PRP template too detailed? Should we simplify for v1?
2. Does Step 3 (teaching the template) need more examples?
3. Any jargon or unclear sections?

No rush if Friday doesn't work—let me know a better timeline.

Thanks!
Alex
```

### Scenario: Announcing a change

````
Subject: [Heads Up] Changing course-structure.json format

Team,

Quick heads-up: I'm updating the course-structure.json format to add a new field.

**What's changing**: Adding `prerequisites` array to each day object.

**Why**: So we can show learners "You need to complete Day X before starting Day Y" for certain advanced lessons.

**Example**:
```json
{
  "id": "4.25",
  "title": "Code the Story",
  "prerequisites": ["4.22", "4.23", "4.24"],
  ...
}
````

**Impact**:
• No breaking changes (field is optional)
• Teaching scripts can reference prerequisites with {prerequisites} variable
• Will make Bonus week dependencies clearer

**Timeline**: Implementing this week, shipping with Bonus week content

**Questions/concerns?** Reply or ping me on Slack.

Cheers,
Alex

```

### Scenario: Sharing a user testimonial
```

Subject: [Win] User testimonial: "CoEngineers changed my career"

Team,

Just got this email from Sara (Data Analyst, graduated last month). Had to share:

---

> "I want to thank you for CoEngineers. It genuinely changed my career.
>
> Before the course, I was drowning in data processing work—hours spent cleaning CSVs, formatting reports, pulling insights from messy data. I was good at analysis but spent 70% of my time on grunt work.
>
> Week 2 taught me to automate that grunt work. Week 4 taught me to build tools. I've now shipped 3 internal tools at my company that the whole data team uses.
>
> My manager noticed. Last week I got promoted to Senior Analyst with a £12K raise. She specifically cited my 'innovation and productivity improvements.'
>
> CoEngineers cost £29. It got me a £12K raise. That's a 41,000% ROI 😊
>
> Thank you."
>
> — Sara

---

This is why we do this work. Congratulations to everyone who contributed to the course. We're changing lives.

Alex

```

---

## Email Checklist

Before sending, verify:

**Content**:
- [ ] Subject line is specific and actionable (if needed)
- [ ] Key point is front-loaded
- [ ] Context is clear (don't assume recipient knows)
- [ ] Action/next step is explicit
- [ ] Deadline is specified (if needed)

**Structure**:
- [ ] Headings break up long emails
- [ ] Bullets used for lists
- [ ] White space makes it skimmable
- [ ] Links are descriptive (not raw URLs)

**Tone**:
- [ ] Appropriate for recipient (warm for external, direct for internal)
- [ ] No jargon (unless recipient will understand)
- [ ] Proofread (no typos, especially in recipient name!)

**Recipients**:
- [ ] Right people in To: (need to act)
- [ ] Right people in Cc: (need to know)
- [ ] Reply vs. Reply-All decision is correct

---

**Last Updated**: December 2024
**Maintained By**: Tom Whitfield (Content) & Team
```
