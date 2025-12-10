# Messy Requirement Input: Progress Tracking Feature

_This is a deliberately unstructured requirement dump. Your task is to transform this into a proper PRD._

---

From: Sarah (Head of Product)
To: John
Subject: RE: RE: Quick idea

Hey John,

So I was thinking about this over the weekend. We really need some way for people to track where they are in the course. I keep getting emails from learners saying they forgot which lab they were on.

Maybe like a checklist or something? Like you tick off each day as you complete it. Should be simple right?

Oh and Michelle mentioned certificates would be cool. Like when you finish a theme you get a little PDF or something you can put on LinkedIn. Not sure if that's v1 though.

Also the sales team wants to know completion rates so maybe we need analytics? But don't make it creepy, no tracking without consent etc.

Let me know what you think.

Sarah

---

From: Dev Team Slack

**@mike**: fyi if we're doing progress tracking it needs to work offline. lots of people do this on trains etc

**@priya**: +1 and no login please. localStorage should be fine for mvp

**@mike**: what about syncing across devices?

**@priya**: v2 problem. let's ship something first

---

From: User Feedback Survey

> "I love the course but I keep losing my place. A simple progress bar would be amazing."

> "It would be great to see how far I've come. Maybe a dashboard?"

> "Can we get certificates? I want to show my boss I completed this."

> "The course is great but I wish I could export my progress somehow."

---

From: Competitor Analysis Notes

- Coursera has detailed progress tracking with time estimates
- Udemy shows completion percentage prominently
- LinkedIn Learning does certificates really well
- Most competitors require accounts for progress tracking

---

From: Technical Constraints (from dev team)

- Site is built on Astro/Starlight
- No backend currently (static site)
- Don't want to add auth complexity for MVP
- localStorage has 5MB limit (should be fine)
- Need to work on mobile browsers

---

From: Business Requirements

- Launch before Jan 1st 2026
- Keep development time under 2 weeks
- Must not break existing site
- Should increase course completion rates
- Nice to have: shareable achievements

---

_Your task: Transform this messy input into a structured PRD following the PRD template. Identify the core features, prioritise them, define success metrics, and document what's in/out of scope._
