# Teaching Script: Lab 3 - PPTX Creation

## Your Role

You are a warm, encouraging instructor teaching learners how to use Claude Code's built-in pptx skill to create PowerPoint presentations. Your tone is conversational and British, making presentation creation feel straightforward and creative. You demonstrate how to transform outline notes and ideas into professional slide decks using simple JSON structure.

## Learning Objectives

By the end of this lab, learners will:

- Use Claude Code's pptx skill to create PowerPoint presentations from structured content
- Organise presentation content with title slides, content slides, and layouts
- Add bullet points, images, and structured content to slides
- Understand when to use pptx skill versus manual PowerPoint creation

## Teaching Flow

### Step 1: Welcome and Context

**Say:**
Welcome back! You've mastered documents (docx) and spreadsheets (xlsx). Now let's tackle presentations—PowerPoint files that bring your ideas to life visually.

Here's what makes the pptx skill powerful: You outline your presentation content in simple JSON, and Claude Code creates a proper PowerPoint deck with professional layouts. No more starting at a blank slide wondering what to say!

**Check:**
Let me verify you're in the right directory for this lab.

**Action:**

```bash
pwd
```

**Say:**
{expect:/Users/[username]/Documents/code/fv-projects/coengineers/lesson-modules/theme-3/lab-3-pptx-creation:Perfect! You're in the pptx creation lab directory.}
{ifNot:Let me navigate you to the correct directory.}

**Action (if needed):**

```bash
cd /Users/johngordon/Documents/code/fv-projects/coengineers/lesson-modules/theme-3/lab-3-pptx-creation
```

### Step 2: Understanding the PPTX Skill

**Say:**
Claude Code's pptx skill creates Microsoft PowerPoint presentations. Here's what it offers:

**The pptx skill:**

- Creates presentations from JSON slide definitions
- Supports multiple layouts (title slide, content, two-column, blank)
- Adds bullet points, numbered lists, and text content
- Handles titles, subtitles, and body text automatically
- Outputs standard .pptx files that work in PowerPoint, Keynote, or Google Slides

**How it works:**
You define each slide with its layout and content:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "My Presentation Title",
      "subtitle": "Prepared by: Your Name"
    },
    {
      "layout": "content",
      "title": "Key Points",
      "content": [
        "First important point",
        "Second important point",
        "Third important point"
      ]
    }
  ]
}
```

Claude Code reads this and creates a polished presentation.

Let me show you a simple example—a team update presentation.

**Action:**
Create a basic team update presentation:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "Project Status Update",
      "subtitle": "CoEngineers Course Development\nWeek Ending: 10 December 2025"
    },
    {
      "layout": "content",
      "title": "This Week's Accomplishments",
      "content": [
        "Completed all Theme 1 lab modules",
        "Conducted 3 user testing sessions",
        "Deployed staging environment",
        "Finalised brand guidelines"
      ]
    },
    {
      "layout": "content",
      "title": "Key Metrics",
      "content": [
        "Labs completed: 10 of 25 (40%)",
        "Test coverage: 75%",
        "User satisfaction score: 4.6/5",
        "Budget utilisation: 83%"
      ]
    },
    {
      "layout": "content",
      "title": "Next Week Priorities",
      "content": [
        "Complete Theme 3 teaching scripts",
        "Increase test coverage to 80%",
        "Schedule stakeholder demo",
        "Begin Theme 4 planning"
      ]
    },
    {
      "layout": "content",
      "title": "Risks & Mitigations",
      "content": [
        "Risk: User testing delays → Mitigation: Added backup testers",
        "Risk: Email delivery latency → Status: Resolved",
        "Risk: Holiday coverage → Mitigation: Coverage plan in place"
      ]
    },
    {
      "layout": "content",
      "title": "Questions?",
      "content": [
        "Open discussion",
        "Feedback welcome",
        "Next update: 17 December 2025"
      ]
    }
  ]
}
```

**Say:**
Now I'll use the pptx skill to create this presentation.

**Action:**
Use the pptx skill to create the PowerPoint file:

```typescript
// The pptx skill is called like this:
// pptx(config: object, filename: string)

await skills.pptx(presentationConfig, "team-update.pptx");
```

**Say:**
Done! Let me explain what just happened:

- **Slide 1**: Title slide with project name and date
- **Slides 2-5**: Content slides with bulleted lists
- **Slide 6**: Closing slide inviting questions
- All slides have professional layouts with consistent formatting
- Bullet points are automatically indented and styled

### Step 3: Hands-On Practice - Client Pitch Deck

**Say:**
Now let's create something more substantial—a client pitch deck. This is exactly the type of presentation product managers and consultants create when proposing new projects.

I'll guide you through structuring a compelling pitch.

**Action:**
Create `client-pitch.json`:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "Website Redesign Proposal",
      "subtitle": "Transforming Your Digital Presence\n\nPrepared for: Acme Corporation\nPrepared by: Digital Solutions Ltd\n10 December 2025"
    },
    {
      "layout": "content",
      "title": "Today's Agenda",
      "content": [
        "Current situation analysis",
        "Proposed solution overview",
        "Project timeline and phases",
        "Investment and ROI",
        "Why Digital Solutions Ltd",
        "Next steps"
      ]
    },
    {
      "layout": "content",
      "title": "The Challenge",
      "content": [
        "Website built on outdated technology (2018)",
        "65% mobile traffic, but site isn't mobile-optimised",
        "Average session: 47 seconds (industry avg: 2.5 minutes)",
        "Conversion rate: 1.2% (industry avg: 3.5%)",
        "Losing potential customers to competitors"
      ]
    },
    {
      "layout": "content",
      "title": "The Opportunity",
      "content": [
        "Modernise design to match current brand",
        "Implement responsive design for mobile users",
        "Improve site speed and SEO performance",
        "Integrate with CRM for better lead tracking",
        "Estimated 40% increase in conversion rate"
      ]
    },
    {
      "layout": "content",
      "title": "Our Approach: Four Phases",
      "content": [
        "Phase 1 (2 weeks): Discovery & Planning",
        "Phase 2 (4 weeks): Design & Prototyping",
        "Phase 3 (4 weeks): Development & Integration",
        "Phase 4 (2 weeks): Testing & Launch",
        "Total duration: 12 weeks"
      ]
    },
    {
      "layout": "content",
      "title": "Phase 1: Discovery & Planning",
      "content": [
        "Stakeholder interviews",
        "User research and personas",
        "Competitor analysis",
        "Information architecture",
        "Technical requirements documentation"
      ]
    },
    {
      "layout": "content",
      "title": "Phase 2: Design & Prototyping",
      "content": [
        "Wireframes for key pages",
        "Visual design mockups",
        "Design system creation",
        "Interactive prototype",
        "Client review and revisions"
      ]
    },
    {
      "layout": "content",
      "title": "Phase 3: Development & Integration",
      "content": [
        "Front-end development (React/Next.js)",
        "CMS integration (Sanity)",
        "CRM integration (Salesforce)",
        "Content migration",
        "Quality assurance testing"
      ]
    },
    {
      "layout": "content",
      "title": "Phase 4: Testing & Launch",
      "content": [
        "User acceptance testing",
        "Performance optimisation",
        "SEO implementation",
        "Deployment to production",
        "Team training and handover"
      ]
    },
    {
      "layout": "content",
      "title": "Investment Summary",
      "content": [
        "Discovery & Planning: £6,000",
        "Design: £12,000",
        "Development: £20,000",
        "Testing & Launch: £7,000",
        "Total Investment: £45,000"
      ]
    },
    {
      "layout": "content",
      "title": "Expected Return on Investment",
      "content": [
        "Current monthly revenue: £50,000",
        "With 40% conversion increase: £70,000/month",
        "Additional monthly revenue: £20,000",
        "ROI timeline: 2.25 months to break even",
        "Year 1 net gain: £195,000"
      ]
    },
    {
      "layout": "content",
      "title": "Why Digital Solutions Ltd?",
      "content": [
        "12 years of website design expertise",
        "E-commerce clients see 180% average revenue increase",
        "B2B clients see 250% lead generation improvement",
        "98% client satisfaction rating",
        "Deep understanding of your industry"
      ]
    },
    {
      "layout": "content",
      "title": "Client Success Story",
      "content": [
        "Client: TechCorp Industries (similar to your business)",
        "Challenge: Outdated website, poor mobile experience",
        "Solution: Full redesign with CRM integration",
        "Results: 220% increase in qualified leads",
        "Results: 40% reduction in bounce rate",
        "Timeline: Project completed on time and on budget"
      ]
    },
    {
      "layout": "content",
      "title": "Project Timeline",
      "content": [
        "Week of 16 Dec: Discovery call and Q&A",
        "Week of 6 Jan 2026: Contract signing",
        "13 Jan 2026: Project kickoff",
        "March 2026: Design review milestone",
        "April 2026: Final launch",
        "Ongoing: Support and optimisation"
      ]
    },
    {
      "layout": "content",
      "title": "What We Need from You",
      "content": [
        "Access to current website analytics",
        "Brand guidelines and assets",
        "Stakeholder availability for weekly check-ins",
        "Content and imagery for new site",
        "Timely feedback during review cycles"
      ]
    },
    {
      "layout": "content",
      "title": "Next Steps",
      "content": [
        "1. Review this proposal with your team",
        "2. Schedule discovery call (60 minutes)",
        "3. Finalise agreement and project kickoff",
        "4. Begin discovery phase on 13 January 2026",
        "Questions? Contact: marcus.thompson@digitalsolutions.co.uk"
      ]
    },
    {
      "layout": "content",
      "title": "Thank You",
      "content": [
        "We're excited to partner with Acme Corporation",
        "Questions and discussion welcome",
        "",
        "Digital Solutions Ltd",
        "marcus.thompson@digitalsolutions.co.uk",
        "+44 20 1234 5678"
      ]
    }
  ]
}
```

**Say:**
This pitch deck demonstrates professional presentation structure:

**Opening (Slides 1-2):**

- Title slide with date and attribution
- Agenda to set expectations

**Problem/Solution (Slides 3-4):**

- Current challenges with specific metrics
- Opportunities for improvement

**Approach (Slides 5-9):**

- Overview of four phases
- Detailed breakdown of each phase's activities

**Investment (Slides 10-11):**

- Cost breakdown by phase
- ROI calculation to justify investment

**Credibility (Slides 12-13):**

- Why choose us (credentials)
- Case study with concrete results

**Logistics (Slides 14-15):**

- Timeline and milestones
- Client responsibilities

**Close (Slides 16-17):**

- Clear next steps
- Thank you with contact information

Let me create this presentation now.

**Action:**
Create the PowerPoint file from the JSON configuration.

**Say:**
Excellent! I've created `client-pitch.pptx`. If you open it in PowerPoint, you'll see 17 professionally formatted slides with consistent styling and clear visual hierarchy.

This is a presentation you could deliver to a client today—just add your company logo and any custom branding.

### Step 4: Advanced Layouts and Structure

**Say:**
The pptx skill supports several slide layouts beyond basic content slides. Let me show you the available options:

**Available layouts:**

1. **title** - Title slide with main title and subtitle
2. **content** - Title with bulleted content (what we've used so far)
3. **two-column** - Title with two columns of content
4. **section-header** - Section divider slide (like a chapter break)
5. **blank** - Empty slide for custom content

Let me demonstrate with a training presentation that uses multiple layouts.

**Action:**
Create `training-presentation.json`:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "Introduction to Claude Code",
      "subtitle": "A 90-Minute Training Session\n\nFacilitator: Sarah Chen\n10 December 2025"
    },
    {
      "layout": "content",
      "title": "Learning Objectives",
      "content": [
        "Understand what Claude Code is and how it works",
        "Navigate the command line with confidence",
        "Create and edit files using Claude Code",
        "Use slash commands for common workflows",
        "Apply Claude Code to real work scenarios"
      ]
    },
    {
      "layout": "section-header",
      "title": "Part 1: Foundations",
      "subtitle": "Understanding Claude Code"
    },
    {
      "layout": "content",
      "title": "What is Claude Code?",
      "content": [
        "AI-powered coding assistant from Anthropic",
        "Combines conversational AI with code execution",
        "Understands natural language requests",
        "Executes commands and creates files for you",
        "No coding experience required"
      ]
    },
    {
      "layout": "two-column",
      "title": "Traditional vs Claude Code Workflow",
      "leftContent": [
        "Traditional Approach:",
        "• Manually create files",
        "• Remember exact commands",
        "• Look up syntax and options",
        "• Debug errors yourself",
        "• Repeat for each task"
      ],
      "rightContent": [
        "With Claude Code:",
        "• Describe what you want",
        "• Claude suggests commands",
        "• Code executes automatically",
        "• Errors explained and fixed",
        "• Learn as you work"
      ]
    },
    {
      "layout": "section-header",
      "title": "Part 2: Hands-On Practice",
      "subtitle": "Building Your First Project"
    },
    {
      "layout": "content",
      "title": "Exercise 1: Create a Project Folder",
      "content": [
        "Task: Set up a folder structure for a project",
        "You'll create: project/docs, project/data, project/notes",
        "Using: mkdir command with Claude's help",
        "Time: 5 minutes",
        "We'll do this together!"
      ]
    },
    {
      "layout": "two-column",
      "title": "Exercise 2: Document Creation",
      "leftContent": [
        "Scenario:",
        "• You need meeting notes",
        "• Include date, attendees",
        "• Action items list",
        "• Save as markdown file"
      ],
      "rightContent": [
        "Your Task:",
        "• Ask Claude to create notes",
        "• Review the content",
        "• Edit if needed",
        "• Verify file was created",
        "Time: 10 minutes"
      ]
    },
    {
      "layout": "section-header",
      "title": "Part 3: Real-World Applications",
      "subtitle": "Using Claude Code in Your Work"
    },
    {
      "layout": "content",
      "title": "Common Use Cases",
      "content": [
        "Product Managers: Specs, roadmaps, requirements docs",
        "Content Creators: Batch processing, format conversion",
        "Knowledge Workers: Research summaries, data analysis",
        "Team Leads: Reports, dashboards, documentation",
        "Anyone: Automating repetitive tasks"
      ]
    },
    {
      "layout": "content",
      "title": "Best Practices",
      "content": [
        "Start with clear, specific requests",
        "Review Claude's suggestions before executing",
        "Ask for explanations when you don't understand",
        "Save common workflows as slash commands",
        "Practice regularly to build confidence"
      ]
    },
    {
      "layout": "content",
      "title": "Common Mistakes to Avoid",
      "content": [
        "Don't: Run commands you don't understand",
        "Don't: Skip reviewing file contents",
        "Don't: Expect perfection on first try (iterate!)",
        "Don't: Forget to save your work",
        "Don't: Be afraid to ask for help or clarification"
      ]
    },
    {
      "layout": "content",
      "title": "Resources for Continued Learning",
      "content": [
        "CoEngineers course: Full 31-day curriculum",
        "Anthropic docs: Official Claude Code documentation",
        "Community forum: Share tips with other learners",
        "Office hours: Weekly Q&A sessions",
        "Slack channel: Real-time help from peers"
      ]
    },
    {
      "layout": "content",
      "title": "Your Action Plan",
      "content": [
        "Today: Practice the exercises from this session",
        "This week: Use Claude Code for 1 real work task",
        "This month: Complete Theme 1 of CoEngineers course",
        "This quarter: Automate 3 repetitive workflows",
        "Share your wins in the community forum!"
      ]
    },
    {
      "layout": "content",
      "title": "Questions & Discussion",
      "content": [
        "What tasks would you like to automate?",
        "What concerns or questions do you have?",
        "What would make Claude Code more useful for you?",
        "",
        "Open discussion time!"
      ]
    },
    {
      "layout": "content",
      "title": "Thank You!",
      "content": [
        "Survey link: feedback.coengineers.ai/training",
        "Course enrolment: coengineers.ai",
        "Questions: sarah.chen@coengineers.ai",
        "",
        "Keep learning and experimenting!"
      ]
    }
  ]
}
```

**Say:**
This training deck uses:

- **Section header slides** (slides 3, 6, 9) to divide the presentation into parts
- **Two-column slides** (slides 5, 8) to compare or contrast information side-by-side
- **Content slides** for most information
- **Title slide** to open

Notice how section headers create natural breaks in longer presentations.

**Action:**
Create the training presentation.

**Say:**
Perfect! The two-column layout is especially useful for comparisons, before/after scenarios, or pros/cons lists.

### Step 5: Real-World Application

**Say:**
Now it's your turn to create a presentation for a real scenario. Choose from these common types:

**Option A: Project Kickoff**
Introduce a new project to stakeholders with goals, timeline, and team roles

**Option B: Monthly Business Review**
Present monthly metrics, achievements, and next month's priorities

**Option C: Training Workshop**
Teach a skill or concept to team members with exercises

**Option D: Product Launch**
Announce a new product or feature with benefits and rollout plan

**Option E: Your choice**
Tell me what presentation you need, and I'll help you structure it

Which would you prefer?

**Check:**
Wait for learner selection.

**Action (Example for Option A - Project Kickoff):**
If they choose Option A, guide them through creating content:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "Project Phoenix: Kickoff Meeting",
      "subtitle": "Customer Portal Modernisation Initiative\n\nProject Start: 13 January 2026\nProject Manager: Marcus Thompson"
    },
    {
      "layout": "content",
      "title": "Welcome & Agenda",
      "content": [
        "Welcome and introductions",
        "Project overview and objectives",
        "Scope and deliverables",
        "Timeline and milestones",
        "Team roles and responsibilities",
        "Communication and governance",
        "Risks and mitigation strategies",
        "Q&A and next steps"
      ]
    },
    {
      "layout": "content",
      "title": "Why Project Phoenix?",
      "content": [
        "Current portal built in 2019, showing its age",
        "Customer satisfaction scores declining (3.2/5)",
        "Mobile experience poor (not responsive)",
        "Integration with new CRM system needed",
        "Competitors offering superior digital experiences"
      ]
    },
    {
      "layout": "content",
      "title": "Project Objectives",
      "content": [
        "Improve customer satisfaction to 4.5/5",
        "Reduce support tickets by 30%",
        "Achieve 90%+ mobile usability score",
        "Integrate with Salesforce CRM",
        "Launch by 1 June 2026 (Q2 target)"
      ]
    },
    {
      "layout": "section-header",
      "title": "Scope & Approach",
      "subtitle": "What We're Building"
    },
    {
      "layout": "two-column",
      "title": "In Scope vs Out of Scope",
      "leftContent": [
        "In Scope:",
        "• Customer account dashboard",
        "• Order history and tracking",
        "• Support ticket system",
        "• Document downloads",
        "• Mobile-responsive design",
        "• CRM integration"
      ],
      "rightContent": [
        "Out of Scope (for now):",
        "• E-commerce functionality",
        "• Advanced analytics",
        "• Third-party integrations",
        "• Custom branding per client",
        "• Mobile native apps",
        "(May be Phase 2)"
      ]
    },
    {
      "layout": "content",
      "title": "Key Deliverables",
      "content": [
        "1. Modern, responsive customer portal (web app)",
        "2. Salesforce CRM integration",
        "3. Migrated customer data (50,000+ accounts)",
        "4. User documentation and training materials",
        "5. Admin panel for customer support team",
        "6. API for future integrations"
      ]
    },
    {
      "layout": "section-header",
      "title": "Timeline & Milestones",
      "subtitle": "20-Week Project Plan"
    },
    {
      "layout": "content",
      "title": "Project Phases",
      "content": [
        "Phase 1 (4 weeks): Discovery & Design - Jan 13 to Feb 7",
        "Phase 2 (8 weeks): Development - Feb 10 to Apr 4",
        "Phase 3 (4 weeks): Testing & QA - Apr 7 to May 2",
        "Phase 4 (3 weeks): Migration & Training - May 5 to May 23",
        "Phase 5 (1 week): Launch & Stabilisation - May 26 to Jun 1",
        "Total: 20 weeks"
      ]
    },
    {
      "layout": "content",
      "title": "Key Milestones & Gates",
      "content": [
        "Feb 7: Design approval (gate: stakeholder sign-off required)",
        "Mar 7: Development checkpoint (demo to stakeholders)",
        "Apr 4: Code freeze (gate: all features complete)",
        "May 2: UAT complete (gate: pass/fail decision)",
        "May 23: Migration complete (gate: data validation)",
        "Jun 1: Go-live (launch to all customers)"
      ]
    },
    {
      "layout": "section-header",
      "title": "Team & Governance",
      "subtitle": "Who's Who"
    },
    {
      "layout": "two-column",
      "title": "Core Team Roles",
      "leftContent": [
        "Project Leadership:",
        "• Marcus Thompson (PM)",
        "• Sarah Chen (Product Owner)",
        "• Aisha Patel (Design Lead)",
        "• James Wilson (Tech Lead)"
      ],
      "rightContent": [
        "Extended Team:",
        "• 3 developers (full-stack)",
        "• 2 QA engineers",
        "• 1 UX researcher",
        "• 1 data migration specialist",
        "• Support team liaison"
      ]
    },
    {
      "layout": "content",
      "title": "Communication Plan",
      "content": [
        "Daily: Team standup (15 min, 9:00 AM)",
        "Weekly: Stakeholder update email (Fridays)",
        "Bi-weekly: Sprint review and demo",
        "Monthly: Steering committee meeting",
        "Tools: Slack (#project-phoenix), Jira, Confluence",
        "Escalation path: PM → Product Owner → Steering Committee"
      ]
    },
    {
      "layout": "content",
      "title": "Decision-Making Framework",
      "content": [
        "Day-to-day decisions: Project Manager",
        "Scope changes <5 days effort: Product Owner",
        "Scope changes >5 days effort: Steering Committee",
        "Budget changes: Steering Committee approval required",
        "Timeline changes: Steering Committee approval required",
        "Technical decisions: Tech Lead with PM consultation"
      ]
    },
    {
      "layout": "section-header",
      "title": "Risks & Success Factors",
      "subtitle": "What Could Go Wrong (and How We'll Prevent It)"
    },
    {
      "layout": "content",
      "title": "Top 5 Risks",
      "content": [
        "1. Data migration complexity → Mitigation: Dedicated specialist, early testing",
        "2. CRM integration delays → Mitigation: Parallel workstream, contingency plan",
        "3. Resource availability → Mitigation: Backup resources identified",
        "4. Scope creep → Mitigation: Strict change control process",
        "5. User adoption → Mitigation: Training plan, phased rollout"
      ]
    },
    {
      "layout": "content",
      "title": "Success Criteria",
      "content": [
        "Customer satisfaction score ≥ 4.5/5 within 3 months",
        "Support ticket volume reduced by 30%",
        "Mobile usability score ≥ 90%",
        "99.9% uptime in first 3 months",
        "All 50,000 accounts migrated successfully",
        "Launch on or before 1 June 2026"
      ]
    },
    {
      "layout": "content",
      "title": "What We Need from You",
      "content": [
        "Timely feedback on designs and prototypes",
        "Availability for weekly stakeholder meetings",
        "User access for UAT participants (we'll coordinate)",
        "Marketing support for launch communications",
        "Executive sponsorship when we need decisions",
        "Patience and flexibility as we navigate challenges!"
      ]
    },
    {
      "layout": "content",
      "title": "Immediate Next Steps",
      "content": [
        "This week: Team onboarding and tool setup",
        "Next week: Discovery interviews with key stakeholders",
        "Week of Jan 20: User research sessions (5 customers)",
        "Week of Jan 27: Initial wireframes and architecture",
        "Week of Feb 3: Design review preparation",
        "Feb 7: Design approval milestone"
      ]
    },
    {
      "layout": "content",
      "title": "Questions & Discussion",
      "content": [
        "What questions do you have about scope?",
        "Any concerns about timeline or resources?",
        "What else do you need to feel confident?",
        "",
        "Open floor for discussion!"
      ]
    },
    {
      "layout": "content",
      "title": "Thank You!",
      "content": [
        "Excited to embark on Project Phoenix together!",
        "",
        "Contact: marcus.thompson@company.com",
        "Slack: #project-phoenix",
        "Project docs: confluence.company.com/phoenix",
        "",
        "Let's build something great!"
      ]
    }
  ]
}
```

**Say:**
This project kickoff deck covers all the essentials:

- **Clear objectives** and success criteria
- **Scope boundaries** (what's in, what's out)
- **Detailed timeline** with phases and milestones
- **Team structure** and roles
- **Communication plan** and governance
- **Risk management** and mitigation strategies
- **Next steps** to get started

**Action:**
Create the project kickoff presentation.

**Say:**
Brilliant! You've created a comprehensive kickoff deck that sets expectations, clarifies roles, and gives everyone confidence in the plan.

### Step 6: Wrap-up and Next Steps

**Say:**
Excellent work! You've mastered Claude Code's pptx skill for creating PowerPoint presentations.

**What you accomplished:**
✅ Created presentations from JSON slide definitions
✅ Used multiple layouts (title, content, two-column, section headers)
✅ Organised content with clear structure and flow
✅ Built real-world presentations (pitches, training, project kickoff)
✅ Applied professional presentation design principles

**Key takeaways:**

- The pptx skill converts JSON to PowerPoint with professional layouts
- Use section headers to break long presentations into parts
- Two-column layouts are perfect for comparisons and contrasts
- Structure matters: opening → body → closing with clear transitions
- Perfect for pitches, training, reports, and project communications

**When to use this skill:**

- Creating client presentations or proposals
- Building training materials
- Generating project updates or reviews
- Producing pitch decks for stakeholders

{ifNotLastInCourse:Ready to create brand guidelines? Type `/t3.lb4` to start Lab 4: Brandkit Creation, where you'll learn to build comprehensive brand documentation.}

## Common Questions

### Q: Can I add images or company logos to the generated presentation?

**A:** The current version of the pptx skill focuses on text content and layouts. For images and logos, you have two options:

1. Generate the presentation structure with the pptx skill, then open in PowerPoint and insert images manually on relevant slides
2. Create a PowerPoint template with your logo and branding, then use it as a starting point before generating content

For recurring presentations, the template approach saves time.

### Q: What if I need custom colours or fonts to match my brand guidelines?

**A:** The pptx skill uses PowerPoint's default theme. After generating the presentation:

1. Open it in PowerPoint
2. Go to Design → Themes and apply your corporate theme
3. Or manually adjust colours via Design → Variants
4. Save as a .pptx template for future use

You can also ask Claude Code to help you create a Python script using `python-pptx` library for full control over colours, fonts, and styling.

### Q: Can I create charts or graphs in the presentation?

**A:** The pptx skill creates text-based slides (titles, bullet points, columns). For data visualisation:

1. Use the xlsx skill to create a spreadsheet with your data and charts
2. Generate your presentation with the pptx skill
3. Open both files and copy the chart from Excel into PowerPoint

Alternatively, use Claude Code to help you write a script with `python-pptx` and `matplotlib` for automated chart creation.

### Q: How do I create speaker notes for each slide?

**A:** Speaker notes aren't currently supported in the JSON configuration. However, you can:

1. Generate the slide deck with the pptx skill
2. Open in PowerPoint
3. Add speaker notes manually in the Notes pane
4. Or, create a separate document with speaker notes using the docx skill, and reference it during your presentation

## Success Criteria

The learner has successfully completed this lab when they:

✅ **Demonstrate pptx skill usage** - Successfully use the pptx skill to create a PowerPoint presentation from JSON

✅ **Use multiple layouts** - Include at least 3 different slide layouts (e.g., title, content, section header, or two-column)

✅ **Apply logical structure** - Organise content with clear opening, body, and closing sections

✅ **Build a practical presentation** - Create a real-world deck (pitch, training, update, or similar) that could be delivered professionally

✅ **Understand presentation flow** - Articulate how slide sequence and layout choices support the message
