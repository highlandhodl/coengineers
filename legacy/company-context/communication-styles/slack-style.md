# Slack Communication Style Guide

## Overview

Slack is our primary synchronous communication tool at CoEngine. Messages should be clear, concise, and respectful of people's time and attention.

---

## Core Principles

### 1. Async-First Mindset

Even though Slack feels synchronous, treat it as async unless it's genuinely urgent.

**Good**:

> "When you get a chance, could you review the Week 4 teaching scripts? No rush—by EOD Friday works."

**Bad**:

> "URGENT: Need you to review Week 4 scripts RIGHT NOW"
> (Unless it's actually blocking a launch, it's not urgent)

### 2. Front-Load the Point

Put the key message or question at the top. Context can follow.

**Good**:

> "**Decision needed**: Should we launch command marketplace in Q4 or Q1?
>
> Context: Engineering says they can hit Q4 but it'll be tight. Marketing prefers Q1 to align with campaign."

**Bad**:

> "So I was talking to Marcus about the marketplace and he mentioned that the timeline is tight but doable, and then I spoke with Rachel who has some thoughts on marketing timing, which got me thinking about whether we should..."

### 3. Use Threads

Keep channels clean by threading conversations.

**When to thread**:

- Responses to someone's message
- Back-and-forth discussions
- Detailed conversations that don't need channel visibility

**When NOT to thread**:

- New topics or announcements
- Decisions that affect the whole team
- Questions that might benefit others

### 4. Be Generous with Emoji Reactions

Use emoji to acknowledge messages without cluttering with "thanks" or "got it" messages.

**Common reactions**:

- ✅ = Done / Confirmed / Agreed
- 👀 = Saw this, will respond later
- 🙌 = Great work!
- 🤔 = Thinking about this, not sure yet
- ❓ = Confused, need clarification

---

## Message Structure

### Questions

**Pattern**: Question → Context → Deadline/Priority

**Example**:

> **Q: Should we add video walkthroughs to Week 1?**
>
> Context: 15% of new users get stuck on installation. Video might help.
>
> Data: LearnPrompting saw 22% drop in support tickets after adding videos.
>
> Trade-off: Videos take 2 weeks to produce, delays Q4 priorities.
>
> Need decision by: Wednesday team meeting

### Updates

**Pattern**: Headline → Key Points → Details (optional)

**Example**:

> **Week 4 rewrite shipped! 🎉**
>
> Key changes:
>
> - 7 new teaching scripts with BMAD/PRP methodology
> - 15+ realistic supporting materials
> - Spec-driven development workflow
>
> Early feedback: 12 users tested it, NPS 85 (up from 68)
>
> [Link to full changelog]

### Requests

**Pattern**: What you need → Why → Deadline → Make it easy to say yes

**Example**:

> **Request: Review Week 4 Day 22 teaching script**
>
> Why: It's the PRP lesson—critical for Week 4 quality
>
> What I need: Feedback on clarity, pacing, examples
>
> Deadline: Friday EOD (launching Tuesday)
>
> [Link to Google Doc with comment permissions]
>
> Thanks! Let me know if the timeline doesn't work.

### Announcements

**Pattern**: @mention → Headline → Key Info → Link to details

**Example**:

> @channel **New feature: Command Marketplace Beta**
>
> What: Browse, install, and share Claude Code commands
> Who: Available to Premium users today, all users next week
> How: Run `/marketplace` or visit coengine.ai/marketplace
>
> [Link to documentation]
>
> Feedback welcome in #product-feedback

---

## Channel Guidelines

### #general

**Purpose**: Company-wide updates, celebrations, announcements
**Tone**: Inclusive, positive, brief
**@channel usage**: Rarely (only for truly company-wide info)

### #product

**Purpose**: Product discussions, feature ideas, roadmap
**Tone**: Thoughtful, data-informed, collaborative
**Threads**: Use liberally

### #engineering

**Purpose**: Technical discussions, bug reports, deployment updates
**Tone**: Precise, technical, solution-focused
**Code snippets**: Use code blocks (```), not screenshots

### #content

**Purpose**: Course content, lesson materials, copy review
**Tone**: Detailed, feedback-friendly, iterative
**Attachments**: Link to Notion/Google Docs, don't paste full content

### #support

**Purpose**: User issues, feature requests, bug reports
**Tone**: User-first, empathetic, action-oriented
**Format**: Always include user ID, relevant timestamps, repro steps

### #wins

**Purpose**: Celebrating customer success, team achievements, milestones
**Tone**: Enthusiastic, specific, generous
**Frequency**: Post often! No such thing as too many wins

### #random

**Purpose**: Non-work chat, memes, life updates
**Tone**: Casual, human, fun
**Rule**: No work talk here (keep it light)

---

## Tone & Voice

### Be Human

Slack is less formal than email. It's okay to be casual.

**Good**:

> "Love this! One small thing—can we tweak the wording on line 23? It's a bit jargon-y."

**Bad**:

> "Per our discussion, I propose the following amendment to line 23 of the document in question, as the current verbiage may present challenges for comprehension among non-technical stakeholders."

### Be Clear

Short sentences. Simple words. No jargon unless necessary.

**Good**:

> "The API is down. Marcus is fixing it. Should be up in 20 minutes."

**Bad**:

> "We're currently experiencing a service degradation event impacting our API endpoints. Engineering has been notified and is implementing remediation protocols. ETA for resolution is approximately 20 minutes."

### Be Kind

Assume good intent. No snark. Give context when disagreeing.

**Good**:

> "I see your point about launching in Q4. My concern is quality—rushing might hurt our brand. Could we do a small beta in Q4 and full launch in Q1?"

**Bad**:

> "Launching in Q4 is a terrible idea. We're not ready."

---

## Response Time Expectations

### By Channel

| Channel      | Expected Response Time              |
| ------------ | ----------------------------------- |
| #general     | 24 hours (if it needs a response)   |
| #product     | 4 hours during work hours           |
| #engineering | 2 hours for bugs, 4 hours otherwise |
| #support     | 1 hour (customers waiting)          |
| #urgent      | 30 minutes                          |

### By Time of Day

- **9am-5pm UK time**: Normal response expectations
- **5pm-9am UK time**: No expectation of response (we're async!)
- **Weekends**: No expectation of response

### Setting Boundaries

It's okay to:

- Mute channels when you need focus time
- Set Slack to "Do Not Disturb"
- Not respond immediately
- Say "I'll look at this tomorrow"

---

## Formatting Best Practices

### Use Markdown

Slack supports markdown. Use it for clarity.

**Bold** for emphasis:

> **Action required**: Please review by EOD

**Bullet points** for lists:

```
Key findings:
• 62% completion rate (target: 75%)
• Week 2 has highest engagement
• Week 4 intimidates newcomers
```

**Code blocks** for code:

```javascript
const lessonComplete = (userId, lessonId) => {
  return db.lessons.markComplete(userId, lessonId);
};
```

**Blockquotes** for highlighting:

> "Week 4 changed how I think about product work."
> — Maya, Senior PM

### Link Meaningfully

Don't paste raw URLs. Use descriptive link text.

**Good**:

> Check out the [Week 4 feedback summary](https://notion.so/week-4-feedback)

**Bad**:

> https://notion.so/coengine/week-4-feedback-analysis-december-2024-draft-v3-final

### Use Emoji Sparingly

Emoji adds personality but too much is distracting.

**Good**:

> Shipped Week 4 rewrite! 🚀

**Bad**:

> Shipped 🚢 Week 4️⃣ rewrite ✍️! 🚀🎉🎊🥳👏💯🔥

---

## Common Mistakes

### The Wall of Text

**Problem**: Long, unformatted paragraphs are hard to read

**Solution**: Break into sections with headings, bullets, white space

### The Vague Question

**Problem**: "Thoughts on the marketplace?" (too open-ended)

**Solution**: "Should we prioritise browse or search for marketplace MVP? Browse is simpler but search is more useful."

### The Missing Context

**Problem**: "This is broken" (what? where? how?)

**Solution**: "Day 22 teaching script has a broken @file reference (line 47). Should link to prp-template.md but file doesn't exist."

### The Fake Urgency

**Problem**: Everything marked as urgent when it's not

**Solution**: Reserve "urgent" for actual emergencies (site down, data breach, customer escalation)

---

## Asking for Help

### Technical Help

**Pattern**: What you're trying to do → What's happening → What you've tried

**Example**:

> **Help needed: Astro build failing on Vercel**
>
> Trying to: Deploy latest changes to production
> Error: "Cannot find module '@astrojs/starlight'"
> What I've tried: npm install, cleared cache, restarted Vercel build
>
> [Link to build logs]

### Product Help

**Pattern**: Context → Decision needed → Options you're considering

**Example**:

> **Input needed: Week 1 pricing strategy**
>
> Context: 15% of users abandon during Week 1 setup (too much friction)
>
> Question: Should Week 1 be free (no signup required)?
>
> Options:
>
> 1. Free Week 1, signup required for Week 2+ (reduces friction)
> 2. Keep current (signup required from Day 1, keeps quality high)
> 3. Free Week 1 preview, require signup to save progress
>
> Leaning towards #3. Thoughts?

---

## Giving Feedback

### Be Specific

**Vague**:

> "This lesson feels off"

**Specific**:

> "Day 15 (Presentation Builder) feels rushed. The jump from 'create outline' to 'add speaker notes' skips the content writing step. Learners might get lost."

### Be Constructive

**Unhelpful**:

> "This teaching script is terrible"

**Helpful**:

> "This teaching script has great content but the pacing feels uneven. Steps 1-3 are detailed, then Step 4 jumps ahead too quickly. Could we add a checkpoint between 3 and 4?"

### Be Timely

Give feedback when it's useful (during drafts), not after it's shipped.

---

## Meetings via Slack

### Scheduling

**Pattern**: Propose specific times → Give context → Make it easy to decline

**Example**:

> "Quick sync on Week 4 feedback? 30 minutes this week.
>
> Options: Tuesday 2pm, Wednesday 10am, Thursday 3pm
>
> Can also do async if you prefer—just need your input on three questions."

### Pre-Meeting Context

Always share context before the meeting.

**Example**:

> **Tomorrow's product sync (10am)**
>
> Agenda:
>
> 1. Week 4 completion rate review (10 min)
> 2. Command marketplace launch date (15 min)
> 3. Q1 priorities (5 min)
>
> [Link to agenda doc with prep notes]
>
> Please review doc before meeting

---

## Status Updates

### Daily Standups (Async in #product)

**Pattern**: Yesterday → Today → Blockers

**Example**:

> **Alex — Monday standup**
>
> ✅ Yesterday: Finished Week 4 Day 22-24 teaching scripts
> 🚀 Today: Writing Day 25-28, reviewing company context files
> 🚧 Blockers: Waiting on Priya's technical review of Day 25

### Weekly Updates (Async in #general on Fridays)

**Pattern**: Week highlights → Next week plan → Help needed

**Example**:

> **Product — Week of Dec 2**
>
> Shipped:
> • Week 4 teaching scripts (Days 22-28)
> • Company context files (4 docs)
> • 20+ supporting materials
>
> Next week:
> • Bonus week content (Days 29-31)
> • User testing with 10 beta users
> • Q1 roadmap draft
>
> Help needed: Beta testers for Week 4 (DM me if interested)

---

## Emergency Communication

### When to Use #urgent Channel

- Site/product is down
- Data breach or security issue
- Critical bug affecting many users
- Customer escalation requiring immediate action

### Format for Urgent Messages

```
🚨 [SEVERITY: Critical/High/Medium]

ISSUE: [One-line description]

IMPACT: [Who's affected and how]

STATUS: [What's being done]

ETA: [Expected resolution time]

OWNER: [Who's handling it]
```

**Example**:

> 🚨 **SEVERITY: Critical**
>
> ISSUE: Course platform returning 500 errors
>
> IMPACT: All users unable to access lessons (800+ active users)
>
> STATUS: Marcus investigating, identified database connection issue
>
> ETA: 15-20 minutes
>
> OWNER: Marcus (engineering)

---

## Slack Etiquette Summary

**Do**:
✅ Front-load your point
✅ Use threads for discussions
✅ React with emoji to acknowledge
✅ Be human and kind
✅ Give context when asking for help
✅ Respect response time boundaries

**Don't**:
❌ @channel unless truly necessary
❌ Send "hey" and wait for a response (just ask your question)
❌ Expect instant responses
❌ Send walls of text
❌ Use fake urgency
❌ Work outside your hours (we're async!)

---

## Examples by Situation

### Proposing an idea

> **Idea: Add command versioning**
>
> Problem: Users customise commands, then course updates break them
>
> Solution: Version commands (v1, v2) so users can stick with their version
>
> Effort: 2-3 days (Engineering)
>
> Value: Reduces support tickets, improves upgrade experience
>
> Thoughts? Worth prioritising for Q1?

### Sharing a win

> Customer email just made my day! 🙌
>
> Maya (Senior PM) wrote: "CoEngineers changed how I work. I shipped 3 features last month using Week 4 methodology. My engineering team asked if they could take the course too!"
>
> This is why we build.

### Reporting a bug

> **Bug: Day 15 teaching script has broken link**
>
> Location: Line 34, references @presentation-brief.md
> Issue: File doesn't exist (should be presentation-content-notes.md)
> Severity: Medium (blocks learner progress)
> Quick fix: Update line 34 to correct filename
>
> Can someone with write access fix? Otherwise I'll PR it.

---

**Last Updated**: December 2024
**Maintained By**: Team (Living document—everyone can contribute)
