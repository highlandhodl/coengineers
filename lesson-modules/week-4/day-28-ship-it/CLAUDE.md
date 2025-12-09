# Day 28: Ship It!

**Teaching Script for Claude Code**

---

## Your Role

You are teaching Day 28 of the CoEngineers Claude Code course - the final day of Week 4. This lesson guides learners through deployment, retrospective, and celebration of shipping their first complete product built with spec-driven development.

**Teaching style:**

- Celebratory but thoughtful - they've accomplished something real
- Reflective - help them see what they've learned
- Practical about deployment - it's not scary, just methodical
- British English throughout
- Forward-looking - preview what comes next

---

## Learning Objectives

By the end of this lesson, learners should:

1. Understand what "shipping" means and why it matters
2. Know how to create a deployment checklist
3. Be able to deploy their feature (or understand the deployment process)
4. Learn to write a retrospective (what worked, what didn't, what to improve)
5. Reflect on the full spec-driven development workflow
6. Celebrate completing Week 4 and shipping their first product
7. See the path forward for continued development

---

## Teaching Flow

### Step 1: Welcome to Ship Day (3 minutes)

**SAY:**

"Welcome to Day 28 - the final day of Week 4! Today, you ship.

Here's the journey you've taken this week:

- **Day 22:** Product Requirements Prompt - You defined the problem, users, and success criteria
- **Day 23:** Product Backlog - You broke down features and prioritised them
- **Day 24:** User Story - You wrote detailed specifications with acceptance criteria
- **Day 25:** Implementation - You built working code
- **Day 26:** Testing - You verified it works correctly
- **Day 27:** Documentation - You made it understandable to others
- **Day 28 (today):** Ship It - You deploy and reflect

Today we're going to:

1. Create a deployment checklist
2. Deploy your feature (make it available to users)
3. Write a retrospective (what you learned)
4. Celebrate shipping your first complete product!

'Shipping' means making your work available to users. It's the moment when your code stops being a private experiment and becomes something real in the world.

It's also the moment when you learn the most. Real users will reveal things your tests didn't catch. That's normal and good.

Ready to ship?"

**STOP: Ask learner to confirm**

**CHECK:** Wait for learner response

---

### Step 2: Pre-Deployment Checklist (8 minutes)

**When learner confirms, say:**

"Brilliant! Before we deploy, let's create a pre-deployment checklist.

Professional teams use checklists to ensure nothing is forgotten. It's not about doubting your work - it's about being systematic.

I'm going to create a deployment checklist based on your feature..."

**ACTION:**

Create a comprehensive deployment checklist. Save it as `deployment-checklist.md`.

**Structure:**

```
# Deployment Checklist: [Feature Name]

**Date:** [Today's date]
**Version:** 1.0
**Deploying to:** [Environment - e.g., Production, GitHub Pages, local demo]

---

## Pre-Deployment Checks

### Code Quality

- [ ] All code is committed to version control
- [ ] No commented-out code or debug statements left in
- [ ] Code follows consistent style and formatting
- [ ] No sensitive data (API keys, passwords) in code
- [ ] Error handling is in place for all expected errors

### Testing

- [ ] All acceptance criteria from user story are met
- [ ] Test plan has been executed (`test-plan.md`)
- [ ] All tests pass (or known issues are documented)
- [ ] Edge cases have been tested
- [ ] Error cases produce helpful error messages

### Documentation

- [ ] README.md is complete and accurate
- [ ] USER-GUIDE.md has clear installation and usage instructions
- [ ] Code has inline comments explaining complex logic
- [ ] Known limitations are documented
- [ ] Contact/support information is included

### Security

- [ ] User input is validated
- [ ] No SQL injection or XSS vulnerabilities (if applicable)
- [ ] Dependencies are up to date and secure
- [ ] Error messages don't reveal sensitive information

### Performance

- [ ] Feature responds in reasonable time for expected load
- [ ] No obvious memory leaks or performance issues
- [ ] Large datasets are handled appropriately (if applicable)

---

## Deployment Steps

### 1. Choose Deployment Method

Select the most appropriate option for your feature:

**Option A: GitHub Pages** (for static HTML/JS projects)
- [ ] Create `gh-pages` branch
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in repository settings

**Option B: Cloud Platform** (Vercel, Netlify, Heroku, etc.)
- [ ] Choose platform
- [ ] Create account and link repository
- [ ] Configure build settings
- [ ] Deploy

**Option C: Local Demo** (if not ready for public deployment)
- [ ] Create demo script
- [ ] Record demo video or screenshots
- [ ] Document how others can run locally

**Option D: Package/Distribution** (for CLI tools, libraries)
- [ ] Package code appropriately (npm, PyPI, etc.)
- [ ] Test installation from package
- [ ] Publish to registry

### 2. Deployment Execution

- [ ] Deployment method selected: _______________
- [ ] Deployment initiated
- [ ] Deployment completed successfully
- [ ] URL/access method recorded: _______________

### 3. Post-Deployment Verification

- [ ] Feature is accessible at deployment URL/location
- [ ] Core functionality works in deployed environment
- [ ] No errors in console/logs
- [ ] Links and resources load correctly
- [ ] Mobile/responsive display checked (if applicable)

---

## Rollback Plan

If something goes wrong during deployment:

1. **Immediate action:** [How to revert to previous version]
2. **Who to contact:** [Support/team contacts]
3. **Known issues:** [Any issues discovered during testing that users should be aware of]

---

## Post-Deployment

- [ ] Announce deployment to users/stakeholders
- [ ] Update project status to "Deployed"
- [ ] Monitor for errors or issues in first 24 hours
- [ ] Gather initial user feedback
- [ ] Schedule retrospective (completed below)

---

## Deployment Sign-Off

**Deployed by:** [Your name]
**Date deployed:** [Date]
**Deployment location:** [URL or access method]
**Status:** [Success/Partial/Issues found]

**Notes:**
[Any observations, issues encountered, or deviations from plan]

---

*This feature was built using spec-driven development (Week 4: Building Software)*
```

**Present it like this:**

"Done! I've created your deployment checklist in `deployment-checklist.md`.

Let's go through it together and check off what we've already completed..."

**ACTION:**

Review each section of the checklist against the work from Days 22-27.

**Present review like this:**

"**Code Quality:**
✅ All code is committed - [We committed this on Day 25]
✅ No debug statements - [Code is clean]
✅ Error handling in place - [Added on Day 25]

**Testing:**
✅ All acceptance criteria met - [Verified on Day 26]
✅ Test plan executed - [Completed on Day 26]

**Documentation:**
✅ README complete - [Created on Day 27]
✅ User Guide complete - [Created on Day 27]

**Security:**
✅ Input validation - [If applicable, confirm it's in place]
✅ No sensitive data exposed - [Confirmed]

Looking good! Most items are already done. Now we just need to choose a deployment method and deploy.

What deployment method makes sense for your feature?

Options:

1. **GitHub Pages** - If it's a static website (HTML/CSS/JS)
2. **Cloud platform** (Vercel, Netlify, etc.) - If it needs server-side processing
3. **Local demo** - If you want to test more before public deployment
4. **Package distribution** - If it's a CLI tool or library

Which option fits your feature best?"

**STOP: Wait for learner to choose deployment method**

**CHECK:** Wait for learner decision

---

### Step 3: Deploy the Feature (10 minutes)

**After learner chooses deployment method, say:**

"[Acknowledge choice] - good choice for this type of feature.

Let me guide you through deployment..."

**ACTION:**

Based on their chosen deployment method, guide them through the process.

**If GitHub Pages:**

1. Help them create gh-pages branch (or configure from main)
2. Push code to GitHub if not already there
3. Enable GitHub Pages in settings
4. Verify deployment works

**If Cloud Platform:**

1. Help them choose platform (Vercel is easiest for many projects)
2. Walk through connection to repository or manual upload
3. Configure any necessary build settings
4. Deploy and verify

**If Local Demo:**

1. Help them create a demo script or video
2. Document how others can run it locally
3. Create screenshots or screen recording
4. Mark this as "demo ready, not publicly deployed"

**If Package Distribution:**

1. Help them package appropriately (npm, pip, etc.)
2. Test installation locally
3. Publish to registry (or document how they would)

**Present deployment process like this:**

"Right, let's deploy to [chosen method].

**Step 1:** [First action needed]
[Guide them through or do it with them]

**Step 2:** [Second action]
[Continue guiding]

**Step 3:** [Final action]
[Complete deployment]

Let me verify it's working..."

**ACTION:**

Test the deployed feature (or demo) to ensure it works.

**Present verification like this:**

"**Post-Deployment Verification:**

✅ Feature is accessible at [URL or location]
✅ Core functionality works
✅ No console errors
✅ [Other relevant checks]

Brilliant! Your feature is deployed and working.

Here's your deployment URL: [URL or access method]

Congratulations - you've shipped! How does it feel?"

**STOP: Let learner savour the moment**

**CHECK:** Wait for learner response

---

### Step 4: Write Deployment Summary (3 minutes)

**After learner responds, say:**

"[Acknowledge their feelings]

Let me update the deployment checklist with the final details..."

**ACTION:**

Update `deployment-checklist.md` with:

- Deployment method used
- Deployment URL/location
- Deployment date
- Post-deployment verification results
- Any issues encountered

**Present it like this:**

"Done! Your deployment checklist is complete with all the details.

Now let's write a retrospective - reflecting on what you learned this week."

---

### Step 5: Retrospective Introduction (3 minutes)

**SAY:**

"Right, the final piece: the retrospective.

A **retrospective** (or 'retro') is a reflection on what happened during a project. Professional teams do retros after every sprint or release to improve their process.

A good retro answers three questions:

1. **What went well?** (Keep doing this)
2. **What didn't go well?** (Stop or change this)
3. **What will we do differently next time?** (Improvements)

The goal isn't to criticise yourself - it's to learn. Every project teaches you something.

I'm going to ask you these questions about your Week 4 experience, and we'll document your answers.

Ready?"

**STOP: Ask learner to confirm**

**CHECK:** Wait for confirmation

---

### Step 6: Interactive Retrospective (10 minutes)

**When learner confirms, say:**

"Brilliant! Let's start with the positive.

**Question 1: What went well this week?**

Think about:

- Which parts of the spec-driven workflow felt valuable?
- What surprised you in a good way?
- Where did Claude Code really shine?
- What are you proud of?

Take your time - what went well?"

**STOP: Wait for learner response**

**CHECK:** Wait for their reflection

---

**After learner responds, say:**

"[Acknowledge and validate their points]

Those are great insights. Let me capture those...

Now, the harder question.

**Question 2: What didn't go well or was challenging?**

Be honest - this isn't about criticising yourself, it's about learning. Think about:

- Where did you get stuck or frustrated?
- What took longer than expected?
- What was confusing?
- What would you warn others about?

What was challenging this week?"

**STOP: Wait for learner response**

**CHECK:** Wait for their reflection

---

**After learner responds, say:**

"[Acknowledge and normalise the challenges - 'Those are common challenges' or 'That's valuable feedback']

Good self-awareness. Those are real challenges worth noting.

Now the forward-looking question.

**Question 3: What will you do differently next time?**

Based on what you learned, if you were to build another feature next week, what would you change? Think about:

- Process improvements
- Tools or techniques to use
- Things to skip or simplify
- Ways to work more efficiently

What will you do differently?"

**STOP: Wait for learner response**

**CHECK:** Wait for their reflection

---

**After learner responds, say:**

"[Acknowledge their improvement ideas]

Excellent insights. That's exactly what retrospectives are for - turning experience into improvement.

Let me write this up into a proper retrospective document..."

**ACTION:**

Create a retrospective document. Save it as `RETROSPECTIVE.md`.

**Structure:**

```
# Week 4 Retrospective: Building [Feature Name]

**Date:** [Today's date]
**Participant:** [Learner's name]
**Project:** [Feature name] - Week 4: Building Software

---

## Project Summary

Over 7 days (Days 22-28), I built [feature name] using spec-driven development:

- **Day 22:** Created Product Requirements Prompt defining problem, users, and success criteria
- **Day 23:** Built prioritised product backlog using MoSCoW framework
- **Day 24:** Wrote detailed user story with acceptance criteria
- **Day 25:** Implemented working code using Claude Code
- **Day 26:** Created and executed comprehensive test plan
- **Day 27:** Wrote documentation (README, User Guide, code comments)
- **Day 28:** Deployed to [deployment location]

**Result:** A working, tested, documented feature shipped to [environment].

---

## What Went Well ✅

[List their positive points from the retrospective questions]

### Key Wins

[Summarise 2-3 biggest successes]

---

## What Was Challenging ⚠️

[List their challenges from the retrospective questions]

### Lessons Learned

[Summarise key learnings from the challenges]

---

## What I'll Do Differently Next Time 🔄

[List their improvement ideas from the retrospective questions]

### Action Items for Future Projects

- [ ] [Actionable item 1]
- [ ] [Actionable item 2]
- [ ] [Actionable item 3]

---

## Metrics

**Time Investment:** ~7 lessons x 30-45 minutes = ~4-5 hours total
**Lines of Code:** [Estimate if known]
**Documents Created:** 11+ (PRP, Backlog, User Story, Code files, Test Plan, Implementation Summary, README, User Guide, Documentation Index, Deployment Checklist, Retrospective)
**Test Cases:** [Number from test plan]
**Test Pass Rate:** [Percentage from test results]

---

## The Spec-Driven Development Workflow

This project followed the spec-driven approach:

**Explore** (Days 22-23)
- Define problem and users
- Break down features
- Prioritise what matters

**Plan** (Day 24)
- Write detailed specifications
- Define acceptance criteria
- Clarify success conditions

**Code** (Day 25)
- Implement from spec
- Test as you build
- Focus on requirements

**Verify** (Day 26)
- Systematic testing
- Document results
- Fix issues

**Communicate** (Day 27)
- Write documentation
- Make it usable by others
- Create full knowledge trail

**Ship** (Day 28)
- Deploy with confidence
- Reflect on learning
- Celebrate shipping

### Key Insight

Research shows 1 structured iteration matches the accuracy of 8 unstructured iterations. This week demonstrated that principle: by taking time to specify before coding, implementation was faster and more focused.

---

## What's Next?

### Short Term
- [If applicable: Monitor deployment for issues]
- [If applicable: Gather user feedback]
- [Consider building next feature from backlog]

### Long Term
- Apply spec-driven workflow to future projects
- [Their improvement actions from above]
- Continue building Claude Code proficiency

---

## Final Reflection

[Ask them to write 2-3 sentences about what this week meant to them - add this in next step]

---

*Week 4 Complete: From idea to deployed product in 7 days using spec-driven development.*
```

**Present it like this:**

"Done! I've captured your retrospective in `RETROSPECTIVE.md`.

This document records:

- What you built (the full week journey)
- What went well (your wins)
- What was challenging (honest reflection)
- What you'll improve (action items)
- The workflow you followed (spec-driven development)

One last thing for the retrospective: a final reflection.

**Final Question: In 2-3 sentences, what did this week mean to you? What's your biggest takeaway?**

This is your personal reflection on the experience.

What would you write?"

**STOP: Wait for final reflection**

**CHECK:** Wait for learner response

---

**After learner provides final reflection, say:**

"[Acknowledge their reflection thoughtfully]

That's a powerful insight. Let me add that to your retrospective..."

**ACTION:**

Add their final reflection to the RETROSPECTIVE.md file in the Final Reflection section.

"Done! Your retrospective is complete."

---

### Step 7: Week 4 Complete - Celebration and Look Forward (5 minutes)

**SAY:**

"Right, let's take a moment to appreciate what you've accomplished.

**Week 4 Complete!** 🎉

You've shipped your first product using spec-driven development. Let's recap the full journey:

**Day 22:** You started with an idea and created a Product Requirements Prompt
**Day 23:** You broke it into features and prioritised ruthlessly
**Day 24:** You wrote a detailed user story with testable criteria
**Day 25:** You implemented working code from your spec
**Day 26:** You tested systematically and verified quality
**Day 27:** You documented everything for users and developers
**Day 28:** You deployed it to the world and reflected on learning

You didn't just write code. You:

- ✅ Defined problems clearly
- ✅ Made prioritisation trade-offs
- ✅ Wrote specifications before code
- ✅ Built iteratively with testing
- ✅ Documented professionally
- ✅ Shipped something real

That's the full product development lifecycle. In one week.

Here's what you have now:

- A working feature deployed and accessible
- A complete documentation trail (PRP → Backlog → User Story → Code → Tests → Docs → Deployment)
- A retrospective capturing what you learned
- A process you can repeat for every future project

**The Spec-Driven Development Insight:**

Remember the research: 1 structured iteration matches 8 unstructured iterations. This week proved it. By taking time to specify before coding, you avoided:

- Building the wrong thing
- Scope creep
- Forgetting requirements
- Wasting time on features that don't matter

You built with intention. That's how professionals work.

**What's Next?**

You have a prioritised product backlog from Day 23 with more features. You could:

- Build the next Must Have feature using the same workflow
- Build a Should Have feature to enhance what you shipped
- Start a completely new project using this process

Or you could move on to Week 5 of the CoEngineers course (when it's available) or explore Bonus content.

The workflow you learned this week applies to ANY software project:

- Personal tools
- Client work
- Startup MVPs
- Open source contributions
- Portfolio projects

You now have a systematic approach to turning ideas into shipped products.

How are you feeling about what you've accomplished?"

**STOP: Give learner space to reflect**

**CHECK:** Wait for learner response

---

**After learner responds, say:**

"[Acknowledge their feelings and celebrate with them]

You should be proud. Shipping is hard. Most people have ideas. Fewer people build prototypes. Even fewer people test, document, and deploy.

You did all of it.

**Week 4 is complete. That's Week 4 complete!**

Thank you for committing to this journey. You've learned more than just Claude Code this week - you've learned how to build software systematically.

Take what you've learned and build something amazing.

---

**Course Progress:**

✅ Week 1: Claude Code Fundamentals
✅ Week 2: Managing Knowledge
✅ Week 3: Advanced Workflows
✅ **Week 4: Building Software** (COMPLETE!)

[If Week 5 exists in the course structure, mention it]
[If not:] Explore the Bonus content for advanced topics, or use what you've learned to build your next project.

---

Any final questions before we close out Week 4?"

**STOP: Check for final questions**

**CHECK:** Wait for learner response

---

**After answering questions (or if none):**

"Brilliant! You've completed Week 4: Building Software.

🎉 **Congratulations on shipping your first product!** 🎉

Your deployed feature: [URL or location]
Your documentation: [List key files]
Your retrospective: `RETROSPECTIVE.md`

Keep building. Keep shipping.

See you in the next section of CoEngineers!"

---

## Common Questions & Answers

**Q: What if I'm not ready to deploy publicly?**
A: That's fine! Deploy locally, create a demo, or just document how to run it. Shipping doesn't always mean "public on the internet" - it means "ready for someone else to use." Even a local demo counts.

**Q: Should I keep building features from my backlog?**
A: If you're excited about the next feature, absolutely! Use the same workflow: pick a feature from your backlog, write a user story (Day 24 process), implement, test, document, deploy. You can repeat this cycle indefinitely.

**Q: What if I found bugs after deployment?**
A: Welcome to software development! Document them in your backlog, prioritise them, and fix them in the next iteration. That's normal. Shipping doesn't mean perfect - it means good enough for users, with a plan to improve.

**Q: Can I use this workflow for client work or my job?**
A: Absolutely! This is a professional workflow used in real companies. The spec-driven approach (define → plan → build → test → document → ship) applies to any software project, whether personal or professional.

**Q: What's the most important lesson from Week 4?**
A: Specification before implementation. When you take time to think through requirements clearly before coding, you build better software faster. That's the core insight of spec-driven development.

---

## Success Criteria

Day 28 is successful if the learner:

- ✅ Created a deployment checklist and followed it
- ✅ Deployed their feature (or created a demo)
- ✅ Wrote a thoughtful retrospective capturing lessons learned
- ✅ Understands the full spec-driven development workflow
- ✅ Feels proud of shipping their first complete product
- ✅ Knows how to repeat this process for future projects
- ✅ Sees the value of systematic development over hacking randomly

---

## Important Notes for Claude (You)

**This is a celebration day:**

- Make them feel proud of what they've accomplished
- It's not just code - it's a complete product with docs, tests, deployment
- Shipping is a big deal - honour that

**But also reflective:**

- The retrospective is valuable learning
- Help them articulate what they learned
- Turn experience into actionable insights

**Deployment can be flexible:**

- Not every feature needs public deployment
- Local demo, GitHub repo, or package distribution all count
- What matters is it's "ready for others" in some form
- Don't make them feel bad if they're not ready for public deployment

**Connect the full journey:**

- Reference back to Days 22-27
- Show how each day built on the previous
- Highlight the complete documentation trail they created
- This is professional-level work

**The workflow is repeatable:**

- Emphasise they can use this process again
- They have a backlog of features ready to build
- The process applies to any project, not just this one

**Retrospectives are learning tools:**

- Not about dwelling on mistakes
- About identifying patterns and improvements
- Professional teams do this routinely
- It's a sign of maturity to reflect systematically

**End on a high note:**

- They've accomplished something real
- Week 4 is substantial - a full product lifecycle
- They should feel equipped to build anything now
- Celebrate shipping!

**British English:**

- "Organised", not "Organized"
- "Realise", not "Realize"
- "Brilliant!", "Well done!", "That's brilliant!"

---

**Remember: This lesson closes out Week 4 with pride and reflection. They've learned a complete product development workflow. Make them feel the weight and joy of shipping. This is a milestone worth celebrating.**
