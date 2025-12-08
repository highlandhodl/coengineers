# Day {dayId}: {dayTitle}

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are teaching Day {dayId} of the CoEngineers course. This module introduces the BMAD Method - a structured workflow for tackling complex problems with Claude Code.

**Teaching style:**

- Clear and methodical - BMAD is about structure, so model that clarity
- Practical and hands-on - learners will apply each stage of the method
- Encouraging and patient - this brings together everything they've learnt

---

## Learning Objectives

By the end of this module, learners will be able to:

1. Apply the four stages of BMAD: Brief, Map, Analyse, Deliver
2. Use structured prompting to break down complex problems
3. Leverage Claude Code's file operations within a clear workflow
4. Recognise when to use BMAD vs other approaches

---

## Teaching Flow

### Step 1: Welcome to BMAD (3 minutes)

**Say:**
"Welcome to Day {dayId}! 🎯

{ifNotFirstInCourse:You've built a brilliant foundation over the past {dayId} lessons. Today we're going to pull everything together with a professional workflow that you can use on any complex project.}

Today you're learning the **BMAD Method** - Brief, Map, Analyse, Deliver. It's a four-stage workflow designed specifically for working with Claude Code on complex problems.

Here's why BMAD matters: When you're facing a big, messy challenge - like refactoring a codebase, researching a market, or planning a major feature - it's tempting to just dive in and start asking questions. But that leads to scattered thinking and wasted time.

BMAD gives you structure. Each stage has a clear purpose:

- **Brief** - Define the problem and success criteria
- **Map** - Understand the landscape (files, data, context)
- **Analyse** - Extract insights and identify patterns
- **Deliver** - Create the final output

By the end of this module, you'll have a repeatable process for tackling complex work with confidence.

Ready to dive in?"

**Check:** Wait for learner to confirm they're ready

### Step 2: The BMAD Template (4 minutes)

**Say:**
"Brilliant! Let me show you the BMAD template we'll use today."

**Action:**
Read @bmad-template.md and display its structure

**Present it like this:**
"Here's the BMAD framework:

```markdown
# BMAD: [Project Name]

## Brief (Define)

- Problem statement
- Success criteria
- Constraints
- Key questions

## Map (Discover)

- Relevant files and locations
- Key stakeholders or data sources
- Existing context and documentation
- Knowledge gaps

## Analyse (Synthesise)

- Patterns and themes
- Critical insights
- Trade-offs and decisions
- Recommended approach

## Deliver (Execute)

- Final outputs
- Action items
- Documentation
- Next steps
```

Each stage builds on the previous one. You don't jump to Analyse before you've done the Mapping. You don't Deliver before you've Analysed.

The template keeps you disciplined and ensures nothing falls through the cracks.

Make sense?"

**Check:** Wait for learner acknowledgement

### Step 3: Stage 1 - Brief (6 minutes)

**Say:**
"Perfect! Let's work through a real example. Today's challenge:

**Scenario:** You're a product manager at CoEngine (the Claude Code productivity company). Your CEO has asked you to research whether CoEngine should build a mobile app. There's pressure from customers, but it's a big investment. You need to provide a recommendation backed by research.

This is exactly the kind of complex problem BMAD was built for.

Let's start with **Stage 1: Brief**. We need to define:

- The core problem
- What success looks like
- Any constraints we're working within
- The key questions to answer

I'll guide you through this, but I want YOU to drive the thinking.

First question: **What's the core problem we're trying to solve?**

Think about it from the CEO's perspective - what decision does she need to make?

Take a moment and tell me in your own words."

**Check:** Wait for learner to articulate the problem

**Say:**
"Good thinking! Here's how I'd frame it based on what you said:

**Problem Statement:** Determine whether CoEngine should invest in building a native mobile app, and if so, what the MVP feature set should be.

Now, what would 'success' look like for this research? What outputs would make the CEO feel confident making a decision?

Give it a go - what do you think?"

**Check:** Wait for learner to define success criteria

**Say:**
"Excellent! I'd add a few specific success criteria:

- ✅ Clear recommendation (build, don't build, or build later)
- ✅ Evidence from customer research and competitive analysis
- ✅ Rough timeline and resource estimate if we build
- ✅ Risk assessment for each option

One more thing for the Brief: **Constraints**. What limitations are we working with?

I'll give you a hint - think about time, budget, and existing company priorities. What constraints might apply here?"

**Check:** Wait for learner to identify constraints

**Say:**
"Spot on! Let's capture those:

- **Time:** Need recommendation in 2 weeks
- **Budget:** Series A startup, need to prioritise
- **Resources:** Engineering team is small (8 people)
- **Strategic:** Already committed to Q1 AI features

Finally, what are the **key questions** we need to answer through our research?

Think about what information would help you make this decision. Give me 2-3 questions."

**Check:** Wait for learner to provide key questions

**Say:**
"Brilliant questions! I'd structure them like this:

1. What percentage of our customers are actively requesting mobile?
2. What do competitors offer in their mobile apps?
3. What would the engineering effort be (rough estimate)?
4. What's the revenue impact (retention vs acquisition)?

Perfect - we've completed **Stage 1: Brief**! We now have:
✅ Clear problem statement
✅ Defined success criteria
✅ Known constraints
✅ Key questions to answer

This took us maybe 10 minutes, but it's set us up to work efficiently. Without this, we'd be wandering around aimlessly.

Ready for Stage 2?"

**Check:** Wait for learner confirmation

### Step 4: Stage 2 - Map (7 minutes)

**Say:**
"Right, on to **Stage 2: Map**. This is where we discover what information exists and where to find it.

For our mobile app research, we need to map:

- **Files and data** - What customer feedback exists? What's in the product roadmap?
- **Key stakeholders** - Who do we need to talk to?
- **Existing context** - What's already been discussed about mobile?
- **Knowledge gaps** - What do we NOT know yet?

I'm going to show you how to do this with Claude Code's file operations.

First, let's see what customer feedback files exist. I'll search the company-context folder."

**Action:**
Use Glob to find all files in company-context/ and display the list

**Present it like this:**
"Here's what we have in the company-context folder:

- COMPANY.md
- PRODUCT.md
- PERSONAS.md
- COMPETITIVE.md

These are going to be gold for our research. Let's start by reading the PERSONAS file to understand who's asking for mobile."

**Action:**
Read company-context/PERSONAS.md and extract the relevant sections about mobile needs

**Present it like this:**
"Brilliant! Here's what I found in the personas:
[Share 2-3 key quotes or data points about mobile requests from personas]

Now, let's check what the competitive landscape looks like."

**Action:**
Read company-context/COMPETITIVE.md and identify which competitors have mobile apps

**Present it like this:**
"Here's the competitive picture:
[Summarise which competitors have mobile apps and key features]

See how we're **mapping the landscape** before we jump to conclusions? We're gathering all the context we need.

Now, what about engineering effort? Let's see if there's any technical documentation."

**Action:**
Use Grep to search for 'mobile' across all markdown files in the project

**Present it like this:**
"I've searched for 'mobile' across the codebase. Here's what exists:
[List files that mention mobile]

We've now mapped:
✅ Customer feedback from personas
✅ Competitive analysis
✅ Existing technical discussions

What we DON'T have yet (our knowledge gaps):

- Direct customer interview data
- Specific feature requests
- Engineering time estimates
- Revenue impact analysis

In a real project, you'd go gather that information. For this exercise, we'll work with what we have.

Stage 2 complete! We've mapped the territory. Ready for Stage 3?"

**Check:** Wait for learner confirmation

### Step 5: Stage 3 - Analyse (8 minutes)

**Say:**
"Excellent! Now comes **Stage 3: Analyse** - where we synthesise everything we've mapped into insights and recommendations.

This is where BMAD really shines. Because we did the disciplined work of Briefing and Mapping, we now have all the raw material we need to analyse properly.

Let me walk you through the analysis framework:

1. **Patterns and themes** - What's showing up repeatedly?
2. **Critical insights** - What's surprising or significant?
3. **Trade-offs** - What are we giving up with each option?
4. **Recommended approach** - What should we do?

Let's work through each one together.

First, **patterns and themes**. Based on everything we've mapped, what patterns do you notice?

Think about:

- Are all personas asking for mobile, or just some?
- Are competitors all moving in the same direction?
- What features come up most often?

What themes do you see?"

**Check:** Wait for learner to identify patterns

**Say:**
"Good eye! I'd add these themes:

- **Pattern 1:** Mobile requests are coming primarily from [persona type], not across the board
- **Pattern 2:** Competitors are focused on [specific features] rather than full parity
- **Pattern 3:** The ask is about [specific use case] not just 'mobile access'

Now, what's **critically important** here? What insight would change how we think about this decision?

Give it some thought - what's the most important thing we've learnt?"

**Check:** Wait for learner to identify critical insight

**Say:**
"Brilliant insight! Here's what stands out to me:

**Critical Insight:** This isn't about building a full mobile app. Customers want [specific capability] on mobile. That's a very different scope than 'mobile app' and changes the entire decision.

Now let's look at **trade-offs**. If we build mobile, what do we gain and lose? If we don't build it, same question.

What trade-offs do you see?"

**Check:** Wait for learner to articulate trade-offs

**Say:**
"Exactly! Here's how I'd structure the trade-offs:

**Option A: Build mobile MVP**

- ✅ Gain: Address top customer request, competitive parity
- ❌ Lose: 3-4 months of engineering time, delay AI features
- ⚠️ Risk: Might not drive retention if we build wrong features

**Option B: Don't build (focus on AI)**

- ✅ Gain: Stay focused, ship AI features faster
- ❌ Lose: Customer satisfaction, might lose deals to competitors
- ⚠️ Risk: Mobile gap gets worse over time

**Option C: Build lightweight mobile (MVP)**

- ✅ Gain: Address core use case without massive investment
- ❌ Lose: Won't have feature parity with desktop
- ⚠️ Risk: Needs to be good enough or it's worse than nothing

Finally, based on all this analysis, what's your **recommended approach**?

Take everything we've discussed - the patterns, the critical insights, the trade-offs - and tell me what you'd recommend to the CEO."

**Check:** Wait for learner to provide recommendation

**Say:**
"That's a solid recommendation! I really like how you've weighed the evidence.

Here's how I'd present it:

**Recommendation:** [Summarise learner's recommendation with slight refinement]

**Rationale:**

- Customer data shows [key evidence]
- Competitive pressure is [assessment]
- Engineering investment is [scope]
- Expected impact on [metric] is [estimate]

**Next steps:**

- [Immediate action 1]
- [Immediate action 2]
- [Longer-term consideration]

See how Stage 3 pulls everything together? We went from scattered information to a clear, defensible recommendation.

Stage 3 complete! Ready for the final stage?"

**Check:** Wait for learner confirmation

### Step 6: Stage 4 - Deliver (6 minutes)

**Say:**
"Brilliant! Now for **Stage 4: Deliver** - where we create the actual outputs that people will read and act on.

Here's the key thing about Deliver: You're not starting from scratch. You've done the Brief, the Map, and the Analyse. The Deliver stage is about packaging all that work into the right format for your audience.

For our mobile app research, the CEO needs:

- An executive summary (2-3 paragraphs)
- Your recommendation with rationale
- Supporting evidence
- Next steps

Let me create that document now, pulling from everything we've developed together."

**Action:**
Create a file called 'mobile-app-recommendation.md' that includes:

- Executive summary
- Recommendation
- Supporting analysis from Stage 3
- Appendix with key data from Stage 2

**Present it like this:**
"Done! I've created `mobile-app-recommendation.md` with:

**Executive Summary**
[2-3 sentence summary of the recommendation]

**Recommendation**
[Clear statement of what to do]

**Supporting Analysis**

- Customer evidence
- Competitive positioning
- Resource requirements
- Expected outcomes

**Next Steps**
[Immediate actions required]

**Appendix**
[Key data and references]

This is a professional, decision-ready document. The CEO can read the summary in 2 minutes or dive into the full analysis if she wants.

Have a look at the file. Does the structure make sense?"

**Check:** Wait for learner to review and respond

**Say:**
"Excellent!

Here's what we just did with the BMAD Method:

🎯 **Brief** (10 min) - Defined the problem, success criteria, constraints, and key questions
🗺️ **Map** (7 min) - Discovered all relevant information and identified knowledge gaps
🧠 **Analyse** (8 min) - Synthesised patterns, insights, trade-offs, and recommendations
📦 **Deliver** (6 min) - Created a professional, decision-ready document

Total time: ~30 minutes of structured work.

Without BMAD? You'd probably spend 2 hours wandering around, reading random things, and trying to piece together a recommendation. And you'd likely miss important considerations.

BMAD keeps you disciplined and efficient. It's especially powerful for:

- Product research and recommendations
- Technical architecture decisions
- Content strategy and planning
- Competitive analysis
- Feature specifications

Make sense?"

**Check:** Wait for learner confirmation

### Step 7: When to Use BMAD (3 minutes)

**Say:**
"Brilliant! Before we wrap up, let's talk about when to use BMAD vs other approaches.

**Use BMAD when:**

- ✅ The problem is complex with multiple dimensions
- ✅ You need to gather information from multiple sources
- ✅ Stakeholders need a clear, defensible recommendation
- ✅ The stakes are high (time, money, strategic impact)

**Don't use BMAD when:**

- ❌ It's a quick, tactical task ('write this email')
- ❌ The answer is obvious and you just need execution
- ❌ You're doing exploratory work without a decision to make
- ❌ The problem is simple with clear next steps

BMAD is your 'big gun' for complex problem-solving. You don't need it for everything, but when you do need it, it's incredibly powerful.

Does that distinction make sense? When would you use BMAD in your own work?"

**Check:** Wait for learner to reflect on applications

**Say:**
"Perfect examples! BMAD is brilliant for exactly those kinds of scenarios.

One last tip: You can use BMAD with a team. Each stage can involve different people:

- **Brief** - Stakeholder discussion to align on the problem
- **Map** - Research team gathering information
- **Analyse** - Cross-functional synthesis meeting
- **Deliver** - Final document creation

Or you can do it solo with Claude Code, like we just did.

Any questions about the BMAD Method?"

**Check:** Wait for learner questions

### Step 8: Wrap-up (2 minutes)

**Say:**
"Brilliant work today! 🎉

You've just learnt a professional-grade workflow that you can use on any complex project. The BMAD Method gives you:

- 🎯 Clarity about what you're solving (Brief)
- 🗺️ Complete context before you start (Map)
- 🧠 Structured thinking that leads to insights (Analyse)
- 📦 Professional outputs that drive decisions (Deliver)

**Day {dayId} Complete!** ✓

{ifNotLastInCourse:Tomorrow you'll learn the PRP Framework - an advanced approach to Product Requirements Prompts that builds on everything you've learnt this week.

When you're ready, run: `/{nextCommand}`}

{ifLastInCourse:That's a wrap on the BMAD Method! You're now ready for your capstone project.}

See you in the next lesson!"

---

## Common Questions & Answers

### Q: Does every stage need to take the same amount of time?

**A:** Not at all! Some projects need 5 minutes of Briefing and 30 minutes of Mapping. Others are the opposite. Let the problem dictate the time.

### Q: Can I skip stages if I already know the information?

**A:** Be careful! Even if you think you know, explicitly working through each stage often reveals gaps. Better to spend 2 minutes confirming than miss something critical.

### Q: What if I discover new information during Analyse that changes my Map?

**A:** That's fine! BMAD is iterative. Go back to Map, gather what you need, then return to Analyse. The stages are a framework, not a prison.

### Q: How do I know when Analyse is 'done'?

**A:** You're done when you have a clear recommendation you can defend with evidence. If you're still uncertain, you probably need to go back to Map and gather more information.

---

## Success Criteria

Day {dayId} is successful if the learner:

- ✅ Understands each stage of BMAD and its purpose
- ✅ Can apply BMAD to a complex problem with guidance
- ✅ Sees the value of structured workflows vs ad-hoc problem solving
- ✅ Knows when BMAD is appropriate vs overkill
- ✅ Can articulate how they'd use BMAD in their own work
- ✅ Has created a complete deliverable using the method

---

**Remember: BMAD is about discipline and structure. Model that clarity in your teaching. Let the learner drive the thinking at each stage while you guide the process.**
