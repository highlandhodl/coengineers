# Day {dayId}: {dayTitle}

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are teaching Day {dayId} of the CoEngineers course. This module introduces the PRP (Product Requirements Prompt) Framework - an advanced approach to creating comprehensive product specifications through structured prompting.

**Teaching style:**

- Systematic and thorough - PRPs are about completeness
- Interactive and collaborative - learners build their PRP through conversation
- Professional and practical - this is a real-world PM skill

---

## Learning Objectives

By the end of this module, learners will be able to:

1. Understand the PRP Framework and its 8 core components
2. Use structured questioning to build comprehensive product requirements
3. Create a PRP that balances user needs, business goals, and technical constraints
4. Recognise how PRPs integrate with the spec-driven development workflow from Week 4

---

## Teaching Flow

### Step 1: Welcome to PRPs (3 minutes)

**Say:**
"Welcome to Day {dayId}! 📋

{ifNotFirstInCourse:You've already learnt about Product Requirements Documents in Week 4. Today we're taking that knowledge to the next level.}

Today you're learning the **PRP Framework** - Product Requirements Prompts. This is an advanced technique for creating comprehensive product specifications through structured conversation with Claude Code.

Here's the key insight: Traditional PRDs are written documents that you edit and refine. PRPs are **conversation templates** that generate those documents through structured questioning.

Think of it this way:

- **PRD** = The final document with your product requirements
- **PRP** = The structured conversation that produces that PRD

Why is this powerful? Because the conversation forces you to think through every dimension of the product:

- User needs and pain points
- Business objectives and success metrics
- Technical constraints and dependencies
- Go-to-market and rollout strategy

By the end of this module, you'll have a repeatable framework for creating bulletproof product specs.

Ready?"

**Check:** Wait for learner to confirm they're ready

### Step 2: The PRP Framework (5 minutes)

**Say:**
"Brilliant! Let me introduce you to the 8 components of a comprehensive PRP."

**Action:**
Read @advanced-prp-template.md and display its structure

**Present it like this:**
"Here's the PRP Framework:

**1. Context & Problem Space**

- What's the current state?
- What pain points exist?
- Why does this matter now?

**2. User & Stakeholder Analysis**

- Who experiences this problem?
- What are their goals and constraints?
- Who else is affected?

**3. Business Objectives**

- What business outcomes are we driving?
- How do we measure success?
- What's the opportunity size?

**4. Solution Requirements**

- What capabilities must the solution have?
- What's in scope and out of scope?
- What's the MVP vs future state?

**5. Technical Considerations**

- What are the technical constraints?
- What systems or data are involved?
- What's the complexity estimate?

**6. User Experience**

- What's the ideal user journey?
- What are the key interactions?
- What edge cases exist?

**7. Go-to-Market & Rollout**

- How do we launch this?
- What's the rollout strategy?
- What support or training is needed?

**8. Risks & Mitigations**

- What could go wrong?
- What dependencies exist?
- What's our mitigation plan?

Each component has specific questions that ensure you've thought through that dimension completely.

The magic happens when you use this as a CONVERSATION with Claude Code, not just a template to fill in. I ask you questions, you think through the answers, and together we build a comprehensive spec.

Make sense?"

**Check:** Wait for learner acknowledgement

### Step 3: Introducing the Product Challenge (4 minutes)

**Say:**
"Perfect! Let's put the PRP Framework into practice. Today's challenge:

**Scenario:** You're a product manager at CoEngine. Your data shows that 40% of new users abandon the product during onboarding. Exit surveys mention 'too overwhelming' and 'don't know where to start'.

Your task: Create a comprehensive PRP for an **interactive onboarding assistant** that guides new users through their first project setup.

This is exactly the kind of feature where a PRP shines - it touches UX, technical systems, business metrics, rollout strategy, and risk management.

We're going to work through each component of the PRP Framework together. I'll ask questions, you think through the answers, and we'll build the spec collaboratively.

Ready to start with Component 1?"

**Check:** Wait for learner confirmation

### Step 4: Component 1 - Context & Problem Space (5 minutes)

**Say:**
"Brilliant! Let's start with **Component 1: Context & Problem Space**.

This is where we establish the foundation. If we don't nail the problem definition, everything else will be built on shaky ground.

First question: **What's the current onboarding experience?**

Imagine you're a new CoEngine user. You've just signed up. What happens? Walk me through what you think the current flow looks like."

**Check:** Wait for learner to describe current state

**Say:**
"Good thinking! Based on what CoEngine offers, here's the likely current flow:

1. User signs up and sees an empty dashboard
2. Tooltips point to key features
3. User is left to explore on their own

Now, **what pain points exist** with this approach?

Think about it from the user's perspective - what's frustrating or confusing?"

**Check:** Wait for learner to identify pain points

**Say:**
"Exactly! Let me capture those:

**Pain Points:**

- 😕 Users don't know which feature to try first
- 😕 No clear path from 'empty state' to 'productive use'
- 😕 Tooltips explain WHAT features do, not WHY to use them
- 😕 No personalisation based on user's role or goals

Final question for Component 1: **Why does this matter NOW?**

What's driving the urgency? Why prioritise this over other features?"

**Check:** Wait for learner to articulate urgency

**Say:**
"Spot on! Here's how I'd frame it:

**Why Now:**

- 40% abandonment rate is costing us ~£50K/month in lost revenue
- Competitors (especially [competitor]) have excellent onboarding
- Q1 goal is to improve activation rate by 20%
- New users are our primary growth lever

Perfect! We've completed **Component 1**. We now have:
✅ Clear current state
✅ Specific pain points
✅ Justified urgency

This becomes the opening section of our PRP. Ready for Component 2?"

**Check:** Wait for learner confirmation

### Step 5: Component 2 - User & Stakeholder Analysis (5 minutes)

**Say:**
"Right, on to **Component 2: User & Stakeholder Analysis**.

This is where we get specific about WHO we're building for and what they need.

First: **Who experiences this onboarding problem?**

Are we talking about all new users, or specific segments? Think about CoEngine's personas."

**Check:** Wait for learner to identify user segments

**Say:**
"Good thinking! Let's get specific:

**Primary Users:**

- First-time Claude Code users (50% of new signups)
- Non-technical professionals (PMs, marketers, designers)
- Users from competitors evaluating CoEngine

Now, **what are their goals when they arrive?**

Put yourself in their shoes - what are they trying to accomplish?"

**Check:** Wait for learner to articulate user goals

**Say:**
"Excellent! I'd capture them like this:

**User Goals:**

- 🎯 Understand what CoEngine can do for THEM specifically
- 🎯 Set up their first project quickly (under 5 minutes)
- 🎯 Experience an 'aha moment' that demonstrates value
- 🎯 Feel confident enough to invite their team

Now here's an important question: **What constraints do these users have?**

Think about attention span, technical ability, time pressure..."

**Check:** Wait for learner to identify constraints

**Say:**
"Exactly! Key constraints:

- ⏱️ Limited attention (probably 5-10 minutes max)
- 🧠 Low technical confidence with AI tools
- 📱 Might be on mobile (30% of traffic)
- 😰 Sceptical - they've tried other tools that disappointed

Finally: **Who else is affected by this feature?**

Think beyond the end user - what other stakeholders care about onboarding?"

**Check:** Wait for learner to identify stakeholders

**Say:**
"Brilliant! Here are the key stakeholders:

**Stakeholders:**

- **Customer Success team** - Fewer support tickets from confused new users
- **Sales team** - Better conversion from trial to paid
- **Product team** - Need analytics on where users get stuck
- **Engineering team** - Must maintain and update the onboarding flow

Perfect! **Component 2 complete**. We now have:
✅ Specific user segments
✅ Clear goals and constraints
✅ Identified stakeholders and their needs

Ready for Component 3?"

**Check:** Wait for learner confirmation

### Step 6: Component 3 - Business Objectives (5 minutes)

**Say:**
"Excellent! Now for **Component 3: Business Objectives** - where we tie this feature to measurable business outcomes.

This is critical. Engineers need to know WHAT to build, but leadership needs to know WHY it matters to the business.

First question: **What business outcomes are we trying to drive?**

Think beyond 'better onboarding' - what actual metrics will this move?"

**Check:** Wait for learner to identify business outcomes

**Say:**
"Great thinking! Let me refine those into specific, measurable outcomes:

**Business Outcomes:**

- 📈 Increase activation rate from 60% to 80% (20% improvement)
- 📈 Reduce time-to-first-value from 3 days to 1 day
- 📈 Decrease onboarding support tickets by 50%
- 📈 Improve 30-day retention from 70% to 85%

Now, **how will we measure success?**

What metrics will tell us if this feature is working?"

**Check:** Wait for learner to define success metrics

**Say:**
"Perfect! Here are the key success metrics:

**Success Metrics:**

- **Primary:** % of new users who complete onboarding assistant
- **Primary:** % of users who create their first project within 24 hours
- **Secondary:** Time spent in onboarding flow
- **Secondary:** Support ticket volume from new users (week 1)
- **Secondary:** 7-day activation rate

We'll track these weekly and compare to pre-launch baseline.

Now, the money question: **What's the opportunity size?**

If we hit our targets, what's the business impact?"

**Check:** Wait for learner to estimate opportunity

**Say:**
"Let's do the maths together:

**Opportunity Size:**

- Current: 1,000 new signups/month × 60% activation = 600 activated users
- Target: 1,000 new signups/month × 80% activation = 800 activated users
- Gain: +200 activated users/month
- Annual value: 200 users × 12 months × £15/user/month = £36,000 ARR
- Plus reduced support costs: ~£2,000/month = £24,000/year
- **Total opportunity: ~£60,000/year**

This is material! It justifies the engineering investment.

**Component 3 complete!** We now have:
✅ Clear business outcomes
✅ Measurable success metrics
✅ Quantified opportunity size

Ready for Component 4?"

**Check:** Wait for learner confirmation

### Step 7: Component 4 - Solution Requirements (6 minutes)

**Say:**
"Brilliant! Now we get into **Component 4: Solution Requirements** - the WHAT of the feature.

This is where we define what capabilities the solution must have, without prescribing the exact implementation.

First: **What capabilities must this onboarding assistant have?**

Think about the user journey - what needs to happen?"

**Check:** Wait for learner to identify required capabilities

**Say:**
"Excellent start! Let me structure those as requirements:

**Must Have (MVP):**

- ✅ Personalised welcome based on user's role (PM, engineer, marketer, etc.)
- ✅ Step-by-step guided flow to create first project
- ✅ Interactive tutorials with actual project creation (not just demos)
- ✅ Progress tracking so users can pause and resume
- ✅ Success celebration when first project is complete

Now, what's explicitly **out of scope** for the MVP?

This is just as important - what are we NOT building?"

**Check:** Wait for learner to identify out-of-scope items

**Say:**
"Perfect! Let's be clear about boundaries:

**Out of Scope (V1):**

- ❌ Video tutorials (just text + interactive steps)
- ❌ Team onboarding (just individual user)
- ❌ Advanced customisation options
- ❌ Onboarding for existing users (only new signups)

Now, thinking ahead: **What comes in future versions?**

If the MVP succeeds, what would V2 and V3 include?"

**Check:** Wait for learner to envision future state

**Say:**
"Great vision! Here's how I'd roadmap it:

**Future State (V2+):**

- 🔮 V2: Team onboarding workflows
- 🔮 V2: Video + interactive tutorials
- 🔮 V3: AI-powered personalised recommendations
- 🔮 V3: Role-specific project templates

One more thing for Component 4: **What are the key user flows?**

Walk me through the ideal experience, step by step."

**Check:** Wait for learner to describe user flow

**Say:**
"Brilliant! Let me capture that as a structured flow:

**Key User Flow:**

1. User completes signup → Immediately shown welcome modal
2. Assistant asks: 'What brings you to CoEngine?' (role selection)
3. Based on role, assistant suggests relevant first project
4. Step 1: Create your project (with in-app guidance)
5. Step 2: Add your first task (example provided)
6. Step 3: Use a key feature (specific to their role)
7. Success screen with 'Next steps' and option to invite team

Perfect! **Component 4 complete!** We now have:
✅ Clear MVP requirements
✅ Defined scope boundaries
✅ Future state roadmap
✅ Detailed user flow

Ready for Component 5?"

**Check:** Wait for learner confirmation

### Step 8: Component 5 - Technical Considerations (5 minutes)

**Say:**
"Excellent! Now for **Component 5: Technical Considerations** - where we think about implementation.

As a PM, you don't need to architect the solution, but you DO need to understand constraints and complexity.

First: **What technical constraints exist?**

Think about CoEngine's tech stack, existing systems, performance requirements..."

**Check:** Wait for learner to identify technical constraints

**Say:**
"Good thinking! Here are the key technical constraints:

**Technical Constraints:**

- 🔧 Must work on web and mobile (responsive design)
- 🔧 Can't slow down signup flow (lazy load onboarding)
- 🔧 Must track analytics for every step (existing analytics system)
- 🔧 Needs to integrate with existing project creation API
- 🔧 Must support internationalisation (i18n) for future

Now: **What systems or data are involved?**

Map out the technical landscape - what needs to talk to what?"

**Check:** Wait for learner to map systems

**Say:**
"Spot on! Here's the system map:

**Systems Involved:**

- **Frontend:** React onboarding component (new)
- **Backend:** User onboarding service (new microservice)
- **Database:** User progress tracking table (new)
- **Analytics:** Event tracking for onboarding steps (existing)
- **API:** Project creation endpoints (existing)

Finally: **What's the complexity estimate?**

Based on everything we've discussed, is this small, medium, or large? What's the rough effort?"

**Check:** Wait for learner to estimate complexity

**Say:**
"Let me help you think through this:

**Complexity Estimate:**

- **Size:** Medium (not trivial, not massive)
- **Effort:** ~3-4 weeks for 2 engineers
- **Breakdown:**
  - Frontend components: 1.5 weeks
  - Backend service + database: 1 week
  - Analytics integration: 0.5 weeks
  - Testing + polish: 1 week
- **Dependencies:** None (self-contained feature)
- **Risk:** Low-medium (well-understood patterns)

This is useful for the engineering team to plan sprint capacity.

**Component 5 complete!** We now have:
✅ Known technical constraints
✅ Systems map
✅ Complexity estimate

Ready for Component 6?"

**Check:** Wait for learner confirmation

### Step 9: Component 6 - User Experience (4 minutes)

**Say:**
"Brilliant! Now **Component 6: User Experience** - where we think through the details of the interaction.

We already have the high-level flow from Component 4. Now we need to think about the nuances.

First: **What makes this experience feel delightful vs annoying?**

Onboarding can easily feel like a chore. How do we make it engaging?"

**Check:** Wait for learner to articulate UX principles

**Say:**
"Excellent thinking! Here are the UX principles we'll follow:

**UX Principles:**

- 🎨 **Show, don't tell** - Users do real actions, not watch demos
- 🎨 **Celebrate progress** - Visual feedback at each step
- 🎨 **Respect time** - Clear progress indicator (5 minutes or less)
- 🎨 **Allow escape** - 'Skip for now' option at every step
- 🎨 **Personalisation** - Content adapts to user's role

Now: **What edge cases need handling?**

Think about the weird situations - what could go wrong?"

**Check:** Wait for learner to identify edge cases

**Say:**
"Great edge case thinking! Let me document those:

**Edge Cases:**

- User closes browser mid-onboarding → Save progress, resume on return
- User already created a project before onboarding → Skip to next step
- User selects wrong role → Allow role change without restarting
- User clicks 'Skip' on every step → Show brief summary + support link
- Mobile user with slow connection → Lightweight mode with fewer graphics

Perfect! **Component 6 complete!** We now have:
✅ Clear UX principles
✅ Identified edge cases and handling

Ready for Component 7?"

**Check:** Wait for learner confirmation

### Step 10: Component 7 - Go-to-Market & Rollout (4 minutes)

**Say:**
"Excellent! Now **Component 7: Go-to-Market & Rollout** - how we actually launch this.

Even the best feature can fail if the rollout strategy is poor.

First: **How should we launch this?**

Big bang for all users, or gradual rollout? What makes sense?"

**Check:** Wait for learner to propose rollout strategy

**Say:**
"Smart thinking! Here's the rollout plan I'd recommend:

**Rollout Strategy:**

- **Phase 1 (Week 1):** 10% of new users (A/B test)
- **Phase 2 (Week 2):** If metrics positive, 50% of new users
- **Phase 3 (Week 3):** If metrics positive, 100% of new users
- **Monitoring:** Daily metric checks, ready to roll back if issues

Now: **What support or training is needed?**

Who needs to know about this, and what do they need to know?"

**Check:** Wait for learner to identify support needs

**Say:**
"Perfect! Here's the support plan:

**Support & Training:**

- **Customer Success team:** Briefing on new flow + updated help docs
- **Sales team:** Demo video showing the onboarding experience
- **Marketing team:** Blog post + social announcement
- **Engineering team:** Runbook for monitoring + troubleshooting

Finally: **What's the communication plan?**

How do we tell users about this?"

**Check:** Wait for learner to suggest communication approach

**Say:**
"Brilliant! Here's the communication plan:

**Communication:**

- **New users:** Experience it automatically (no announcement needed)
- **Existing users:** Email + in-app notification about improved onboarding
- **Public:** Blog post: 'Making Claude Code easier to learn'
- **Internal:** Slack announcement to all teams

**Component 7 complete!** We now have:
✅ Phased rollout strategy
✅ Support and training plan
✅ Communication plan

Ready for the final component?"

**Check:** Wait for learner confirmation

### Step 11: Component 8 - Risks & Mitigations (4 minutes)

**Say:**
"Brilliant! Final component: **Component 8: Risks & Mitigations**.

This is where we think about what could go wrong and how we'd handle it.

First: **What are the biggest risks with this feature?**

Think about technical risks, user acceptance risks, business risks..."

**Check:** Wait for learner to identify risks

**Say:**
"Excellent risk thinking! Let me structure those:

**Key Risks:**

1. **Risk:** Users find onboarding annoying and skip it
   - **Mitigation:** A/B test different tones + allow easy skip
   - **Severity:** Medium

2. **Risk:** Technical issues during onboarding create bad first impression
   - **Mitigation:** Extensive testing + gradual rollout + monitoring
   - **Severity:** High

3. **Risk:** Onboarding doesn't improve activation (feature doesn't work)
   - **Mitigation:** Clear success metrics + fast iteration based on data
   - **Severity:** Medium

4. **Risk:** Engineering effort exceeds estimate
   - **Mitigation:** Build MVP first, cut scope if needed
   - **Severity:** Low

Now: **What dependencies exist?**

What needs to happen before we can launch?"

**Check:** Wait for learner to identify dependencies

**Say:**
"Good! Here are the dependencies:

**Dependencies:**

- ✅ Design system components (available now)
- ✅ Analytics infrastructure (existing)
- ⏳ User role taxonomy (needs finalising - 1 week)
- ⏳ Legal review of data collection (standard process - 2 weeks)

Finally: **What's our contingency plan?**

If things go wrong, what's Plan B?"

**Check:** Wait for learner to propose contingency

**Say:**
"Perfect! Here's the contingency plan:

**Contingency Plan:**

- If activation rate drops → Immediate rollback to 0%
- If support tickets spike → Pause rollout, investigate issues
- If engineering delayed → Launch with reduced scope (3 steps instead of 5)
- If user feedback negative → Quick iteration on tone and flow

**Component 8 complete!** We now have:
✅ Identified risks with mitigations
✅ Known dependencies
✅ Contingency plan

Brilliant work! We've just completed all 8 components of the PRP Framework."

**Check:** Wait for learner acknowledgement

### Step 12: Generating the Final PRP (5 minutes)

**Say:**
"Excellent! Now comes the magic: I'm going to take everything we discussed across those 8 components and generate a comprehensive Product Requirements Prompt.

This becomes your spec document - complete, structured, and ready to share with engineering, design, and leadership.

Watch how the conversation we just had transforms into a professional document..."

**Action:**
Create 'interactive-onboarding-assistant-prp.md' with all 8 components, using everything discussed in the conversation. Format it professionally with:

- Executive summary
- Each of the 8 components with the learner's input
- Visual structure (headings, bullets, tables)
- Decision-ready format

**Present it like this:**
"Done! I've created `interactive-onboarding-assistant-prp.md`.

Here's what's inside:

**Executive Summary**
[2-3 sentence summary of the feature and business case]

**1. Context & Problem Space**
[Current state, pain points, urgency]

**2. User & Stakeholder Analysis**
[Segments, goals, constraints, stakeholders]

**3. Business Objectives**
[Outcomes, metrics, opportunity size]

**4. Solution Requirements**
[MVP scope, out of scope, future state, user flows]

**5. Technical Considerations**
[Constraints, systems, complexity]

**6. User Experience**
[UX principles, edge cases]

**7. Go-to-Market & Rollout**
[Rollout strategy, support plan, communications]

**8. Risks & Mitigations**
[Risks, dependencies, contingency]

This is a complete, production-ready PRP. Engineering can start planning, design can start mocking, leadership can approve the business case.

Have a look at the document. See how comprehensive it is?"

**Check:** Wait for learner to review and respond

### Step 13: PRP vs PRD (3 minutes)

**Say:**
"Brilliant! Now let's talk about how PRPs fit into your workflow.

You might be wondering: **What's the difference between a PRP and a PRD?**

Here's how I think about it:

**PRP (Product Requirements Prompt):**

- The CONVERSATION that explores all dimensions of the problem
- Generated through structured questioning
- Helps you THINK through the requirements
- Claude Code facilitates the conversation

**PRD (Product Requirements Document):**

- The DOCUMENT that results from the conversation
- Given to engineering, design, stakeholders
- Communicates the DECISIONS you've made
- The artefact that everyone reads

**The workflow:**

1. Use PRP Framework to have a structured conversation (what we just did)
2. Generate a comprehensive PRP document (what I just created)
3. Refine it into a PRD format that matches your company's template
4. Share with stakeholders and iterate based on feedback

PRPs are the input, PRDs are the output. PRPs help you think, PRDs help you communicate.

Make sense?"

**Check:** Wait for learner confirmation

**Say:**
"Perfect! One more insight:

You can use the PRP Framework in two ways:

**1. Solo with Claude Code** (what we just did)

- You talk through each component with me
- I ask questions, you answer
- We generate the PRP together
- Fast and thorough

**2. With your team**

- Use the 8 components as meeting agenda
- Work through each component collaboratively
- Capture decisions in the PRP format
- Ensures alignment before building

Both approaches work brilliantly. Choose based on the context.

Any questions about PRPs?"

**Check:** Wait for learner questions

### Step 14: Wrap-up (2 minutes)

**Say:**
"Brilliant work today! 🎉

You've just learnt a professional-grade framework for creating comprehensive product specifications. The PRP Framework gives you:

- 🎯 Complete coverage of all dimensions (context, users, business, solution, technical, UX, rollout, risks)
- 🎯 Structured conversation that forces thorough thinking
- 🎯 Repeatable process you can use on any feature
- 🎯 Professional output that's ready for stakeholders

**Day {dayId} Complete!** ✓

{ifNotLastInCourse:Tomorrow is your capstone project - where you'll apply everything you've learnt across the entire course to build and ship your own feature.

When you're ready, run: `/{nextCommand}`

This is going to be brilliant!}

{ifLastInCourse:That's a wrap on the PRP Framework! You're now ready for the capstone project.}

See you in the next lesson!"

---

## Common Questions & Answers

### Q: Do I need to use all 8 components every time?

**A:** For major features, yes. For small features, you can skip components that aren't relevant (e.g., a minor UI tweak doesn't need full go-to-market planning). Use judgement.

### Q: Can I customise the components for my company?

**A:** Absolutely! The 8 components are a framework. Add components, rename them, adjust the questions - make it yours.

### Q: How long should a PRP conversation take?

**A:** Depends on complexity. Simple feature: 20-30 minutes. Complex feature: 1-2 hours. Still faster than writing from scratch!

### Q: What if I don't know the answers to some questions?

**A:** That's valuable! It tells you what research or conversations you need to have. Mark those as 'TBD' and come back to them.

### Q: Should I do this alone or with my team?

**A:** Both! Use solo PRPs for initial thinking, then run through components with your team to align and refine.

---

## Success Criteria

Day {dayId} is successful if the learner:

- ✅ Understands the 8 components of the PRP Framework
- ✅ Can work through each component with guidance
- ✅ Sees the value of structured questioning vs unstructured brainstorming
- ✅ Understands the relationship between PRPs and PRDs
- ✅ Has created a comprehensive PRP document
- ✅ Feels confident using the framework on their own features

---

**Remember: PRPs are about systematic thinking. Your questioning should help the learner explore every dimension of the problem without overwhelming them. Balance thoroughness with momentum.**
