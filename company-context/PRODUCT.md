# CoEngine Product Details

## Product Overview

**Name**: CoEngineers
**Tagline**: "Master Claude Code in 31 Days"
**Category**: AI productivity training platform
**Target Users**: Product managers, engineers, designers, and knowledge workers who want to 10x their output with Claude Code

---

## Core Product: The CoEngineers Course

### What It Is

A 31-day structured learning experience that takes users from Claude Code novice to confident practitioner through hands-on projects, realistic materials, and guided workflows.

### How It Works

1. **Enrol** - Sign up, install Claude Code, run initial setup
2. **Learn** - Complete one lesson per day (20-45 minutes each)
3. **Practice** - Work with realistic materials (meeting notes, PRDs, user interviews)
4. **Build** - Week 4 culminates in shipping a real feature using spec-driven development
5. **Graduate** - Receive certificate, unlock premium features, join alumni community

### Course Structure

#### Week 1: Foundations (Days 1-7)

**Theme**: Getting started with confidence

**What you'll learn**:

- Day 1: First Conversation - Your first interaction with Claude Code
- Day 2: Your Digital Home - Setting up your Claude Code workspace
- Day 3: Project Memory - Creating and using CLAUDE.md files
- Day 4: Template Factory - Building reusable templates
- Day 5: The Daily Note - Automating daily documentation
- Day 6: Your First Slash Command - Creating custom commands
- Day 7: Week 1 Review - Consolidating foundation skills

**Deliverables**: Personal workspace, 3+ custom templates, 2+ slash commands

#### Week 2: Content Processing (Days 8-14)

**Theme**: Input to insight

**What you'll learn**:

- Day 8: Meeting Tamer - Processing meeting notes into action items
- Day 9: Voice to Text - Cleaning up voice transcriptions
- Day 10: YouTube Brain - Extracting insights from video content
- Day 11: PDF Crusher - Processing and summarising documents
- Day 12: Web Archiver - Capturing and organising web content
- Day 13: Email Processor - Managing and processing email threads
- Day 14: Week 2 Review - Content processing mastery

**Deliverables**: Processing workflows for 5+ content types, personal knowledge base

#### Week 3: Creative Outputs (Days 15-21)

**Theme**: From brief to brilliant

**What you'll learn**:

- Day 15: Presentation Builder - Creating presentation outlines and content
- Day 16: Image Prompter - Crafting effective image generation prompts
- Day 17: Audio Script Writer - Writing scripts for podcasts and videos
- Day 18: Diagram Generator - Creating diagrams with Mermaid syntax
- Day 19: Social Thread Maker - Crafting engaging social media content
- Day 20: Video Brief Creator - Planning video content and shot lists
- Day 21: Week 3 Review - Creative outputs mastery

**Deliverables**: 6+ creative artefacts, reusable creative templates

#### Week 4: Building Software (Days 22-28)

**Theme**: Spec-driven development

**What you'll learn**:

- Day 22: The Product Idea - Creating a Product Requirements Prompt
- Day 23: The Product Backlog - Building a prioritised backlog
- Day 24: The User Story - Writing detailed user stories
- Day 25: Code the Story - Implementing with Claude Code
- Day 26: Test the Story - Verification and quality assurance
- Day 27: Document the Story - Creating comprehensive documentation
- Day 28: Ship It! - Deployment and retrospective

**Deliverables**: Shipped feature with full documentation, working code in production

#### Bonus Week: Advanced Topics (Days 29-31)

**Theme**: Level up

**What you'll learn**:

- Day 29: BMAD Method - Brief, Map, Analyse, Deliver workflow
- Day 30: PRP Framework - Advanced Product Requirements Prompts
- Day 31: Ship It! Capstone - Build and ship your own project

**Deliverables**: Capstone project (original feature shipped to production)

---

## Product Features

### Interactive Teaching Scripts

**What**: Guided, scripted lessons that feel like having a personal tutor
**Why**: Learning by doing, not just reading
**How**: Claude follows teaching scripts with checkpoints, questions, and actions

**Key capabilities**:

- Verbatim content delivery ("Say:" blocks)
- Interactive checkpoints ("Check:" blocks)
- Automated actions ("Action:" blocks)
- Dynamic navigation based on progress
- No "fourth wall breaking" - Claude stays in character as teacher

### Realistic Supporting Materials

**What**: Professional-quality documents used in exercises
**Why**: Practice on real-world materials, not toy examples
**How**: Meeting notes, user interviews, product docs, email threads, etc.

**Types of materials**:

- Messy meeting notes (with typos, abbreviations, tangents)
- User interview transcripts (8-10 per research exercise)
- Product requirement documents
- Email dumps and threads
- Voice memo transcriptions
- Presentation briefs
- Competitive research notes

### Company Context & Personas

**What**: Fictional company (CoEngine) with detailed context and user personas
**Why**: Cohesive narrative across all exercises
**How**: COMPANY.md, PRODUCT.md, PERSONAS.md, COMPETITIVE.md files

**Includes**:

- Company background and mission
- Product features and roadmap
- 3 detailed user personas
- Competitive landscape
- Team structure with named people

### Slash Command Library

**What**: 31+ pre-built slash commands for course lessons
**Why**: One-command access to any lesson
**How**: Meta-launcher pattern loads teaching scripts dynamically

**Examples**:

- `/w1.d1` - Start Day 1 lesson
- `/w4.d22` - Launch Product Idea lesson
- `/bonus.d31` - Begin capstone project

### Config-Driven Architecture

**What**: JSON configuration defines course structure and navigation
**Why**: Lessons can be reordered without breaking links
**How**: course-structure.json with dynamic variable resolution

**Enables**:

- Automatic navigation ("next lesson" links always correct)
- Position-aware content (first/last day special messaging)
- Easy curriculum updates
- Custom learning paths

---

## Product Roadmap

### Recently Shipped (Q3 2024)

- ✅ Week 4 rewrite (spec-driven development approach)
- ✅ Interactive teaching scripts with checkpoints
- ✅ Company context and personas
- ✅ 50+ supporting material files

### In Progress (Q4 2024)

- 🚧 Immersive learning system (teaching scripts + supporting materials)
- 🚧 Command marketplace (browse and install community commands)
- 🚧 Team features (multi-user accounts, shared templates)

### Next Up (Q1 2025)

- 📋 Usage analytics (track command usage, identify patterns)
- 📋 AI coach (personalised tips based on your usage)
- 📋 Enterprise onboarding (streamlined team setup)
- 📋 Mobile companion app (review lessons, check progress)

### Future Considerations (Q2+ 2025)

- 💭 Specialised tracks (PM track, Engineering track, Content track)
- 💭 Certification programme with portfolio review
- 💭 Integration marketplace (connect to Notion, Linear, Jira)
- 💭 Community curriculum (learner-contributed lessons)

---

## Product Metrics

### Learner Engagement (November 2024)

| Metric                 | Value   | Target  | Status             |
| ---------------------- | ------- | ------- | ------------------ |
| Course completion rate | 62%     | 75%     | 🟡 Below target    |
| Avg. time to complete  | 35 days | 31 days | 🟡 Slightly slow   |
| Daily active learners  | 450     | 600     | 🟡 Growing         |
| Commands run per week  | 12,000+ | 15,000  | 🟢 Strong usage    |
| Learner NPS            | 71      | 75      | 🟡 Good, not great |

### Learner Outcomes

| Metric                        | Value   | Notes                                       |
| ----------------------------- | ------- | ------------------------------------------- |
| Time to first shipped project | 18 days | Week 4 completion average                   |
| Post-graduation active usage  | 73%     | Using Claude Code weekly 3 months post-grad |
| Referrals per graduate        | 2.1     | Strong word-of-mouth                        |
| Repeat course takers          | 8%      | Learners repeating to reinforce skills      |

### Business Metrics

| Metric              | Value | MoM Growth |
| ------------------- | ----- | ---------- |
| Total enrollments   | 8,200 | +28%       |
| Active learners     | 1,400 | +31%       |
| Graduates           | 5,100 | +22%       |
| Premium subscribers | 1,840 | +35%       |
| MRR                 | £42K  | +29%       |

### Quality Metrics

| Metric                        | Value     | Target   |
| ----------------------------- | --------- | -------- |
| Lesson completion time (avg)  | 32 min    | 30 min   |
| Support tickets per 100 users | 4.2       | <5       |
| Bug reports per 100 users     | 1.8       | <3       |
| Time to resolution (support)  | 4.2 hours | <6 hours |

---

## Tech Stack

### Course Platform

- **Framework**: Astro 5.x + Starlight (static site generator)
- **Styling**: Tailwind CSS + Starlight custom properties
- **Content**: MDX (Markdown + React components)
- **Hosting**: Vercel (edge network, instant deploys)

### Interactive Learning

- **Teaching Scripts**: Markdown files with structured blocks
- **Slash Commands**: Claude Code native commands (.md files in .claude/commands/)
- **Config System**: JSON for course structure and navigation
- **Supporting Materials**: Plain Markdown files (Obsidian-compatible)

### Data & Backend

- **Database**: Supabase (PostgreSQL)
  - User accounts and progress tracking
  - Email subscriptions and sends
  - Usage analytics
- **Authentication**: Supabase Auth (email/password, magic links)
- **Email**: Resend (transactional emails, course updates)

### Analytics & Monitoring

- **Product Analytics**: PostHog (event tracking, funnels)
- **Error Tracking**: Sentry (client + server errors)
- **Logging**: Better Stack (formerly Logtail)
- **Uptime**: Better Stack (status page, alerts)

### Development & Deployment

- **Version Control**: GitHub (main branch = production)
- **CI/CD**: GitHub Actions → Vercel (auto-deploy on push)
- **Package Management**: npm
- **TypeScript**: ESM modules, strict mode

---

## Pricing & Packaging

### Free Tier (Course Access)

**Price**: £0

**Includes**:

- Access to all 31 course lessons
- Basic slash command library
- Community Discord access
- 10 template downloads/month

**Limitations**:

- No usage analytics
- No team features
- Standard support (community-based)

### Premium Tier

**Price**: £29/month or £290/year (2 months free)

**Includes**:

- Everything in Free
- Unlimited template downloads
- Command marketplace access (install any command)
- Usage analytics dashboard
- Priority support (email, <24h response)
- Early access to new features

### Team Tier

**Price**: £99/user/month (minimum 5 users)

**Includes**:

- Everything in Premium
- Team admin dashboard
- Shared command library
- Team analytics and reporting
- Custom onboarding session
- Dedicated success manager
- SSO (SAML) integration

### Enterprise

**Price**: Custom

**Includes**:

- Everything in Team
- Self-hosted option
- Custom integrations
- SLA guarantees
- White-label course content
- Annual strategic review

---

## User Journey

### Discovery

**How users find us**:

1. Organic search (40%) - "Claude Code tutorial", "learn Claude Code"
2. Social media (30%) - Twitter/LinkedIn posts from graduates
3. Community recommendations (18%) - Discord, Slack, forums
4. Paid ads (8%) - Google Ads, LinkedIn Ads
5. Partnerships (4%) - Anthropic newsletter, developer tool newsletters

### Onboarding

**First 15 minutes**:

1. Land on homepage (coengine.ai)
2. Watch 90-second demo video
3. Sign up (email + password or magic link)
4. Install Claude Code (guided instructions)
5. Run `/w1.d1` - start first lesson
6. Complete "First Conversation" lesson
7. Receive welcome email with next steps

### Activation

**First week**:

- Complete Days 1-3 (critical for retention)
- Create first custom template
- Build first slash command
- Join Discord community
- Receive encouragement email if stalled

### Engagement

**Weeks 2-4**:

- Daily lesson completion (30-45 min each)
- Slack/email reminders if inactive >3 days
- Community celebrations for milestones
- Show & Tell channel for sharing work

### Graduation

**After Day 31**:

- Certificate of completion
- Alumni Discord channel access
- Premium trial (14 days)
- Portfolio showcase opportunity
- Referral incentive (1 month free per referral)

### Retention

**Post-graduation**:

- Weekly "Advanced Tip" emails
- Monthly community office hours
- Early access to new features
- Discount on annual premium (30% off)

---

## Competitive Analysis (Summary)

See COMPETITIVE.md for detailed analysis.

**Direct Competitors**:

- Prompt engineering courses (e.g., LearnPrompting)
- AI productivity tools with training (e.g., Notion AI Academy)
- Developer education platforms (e.g., Codecademy, freeCodeCamp)

**Our Advantages**:

- Only course teaching Claude Code specifically
- Learn by doing (not watching videos)
- Realistic materials and hands-on projects
- Structured 31-day progression
- Strong community and support

**Our Disadvantages**:

- Smaller brand than established platforms
- Single tool focus (vs. broader AI productivity)
- Requires Claude Code subscription (additional cost)
- No mobile-first learning experience

---

## Product Philosophy

### Teaching, Not Telling

We don't just show you what to do. We walk you through why, challenge you to apply it, and give feedback.

### Real Work, Real Problems

Every exercise uses realistic materials. No "foo bar baz" examples. You work on actual PM tasks.

### Progressive Complexity

Week 1 starts simple. By Week 4, you're shipping production features. The curve is calibrated.

### Learn by Shipping

The course isn't complete until you've shipped something. Week 4 and Bonus ensure you build and deploy.

### Community as Curriculum

Learners teach each other. The Discord is as valuable as the lessons.

---

## Feature Requests & Prioritisation

### Top Requested Features (from learners)

1. **Mobile app** (78% want it) - Review lessons on phone, check progress
2. **Video demos** (65%) - See commands in action before trying
3. **More templates** (61%) - Especially for PMs and designers
4. **Team features** (52%) - Share commands and context with colleagues
5. **Custom learning paths** (48%) - Skip weeks, focus on specific areas

### How We Prioritise

**Framework**: RICE (Reach × Impact × Confidence / Effort)

**Recent prioritisation decisions**:

- ✅ Teaching scripts - High reach, high impact, high confidence, medium effort → Built it
- ✅ Company context - Medium reach, high impact, high confidence, low effort → Built it
- 🚧 Command marketplace - High reach, high impact, medium confidence, high effort → Building now
- 📋 Mobile app - High reach, medium impact, low confidence, very high effort → Later
- ❌ Video demos - Medium reach, low impact, medium confidence, high effort → Not doing

---

## Product Challenges

### Current Challenges

1. **Completion rate stalled at 62%** - Learners drop off in Week 2
2. **Week 4 intimidates some users** - Building software feels too technical
3. **Support doesn't scale** - Daniel (Customer Success) is overwhelmed
4. **Onboarding friction** - Claude Code installation trips up ~15% of new users

### How We're Addressing Them

1. **Immersive learning system** - More guidance, realistic materials, company context
2. **Week 4 rewrite** - Spec-driven approach makes building feel more accessible
3. **Self-serve support** - Building knowledge base, improving docs
4. **Installation guide overhaul** - Video walkthrough, common issue troubleshooting

---

## Success Stories

### Maya (Senior PM at Fintech)

"Before CoEngineers, I'd ask Claude to write user stories and they were always generic. Now I have a workflow: PRP → Backlog → Stories → Implementation. My engineers love how clear my specs are."

**Impact**: Reduced spec-rework by 40%, ships features 30% faster

### Tom (Marketing Manager)

"I used to spend 3 hours writing a newsletter. Now it takes 45 minutes with my Claude Code workflow. I've automated content curation, drafting, and formatting."

**Impact**: 4x content output with same time investment

### Sara (Data Analyst)

"Week 2 changed my life. I process meeting notes, research reports, and user interviews 10x faster. I've become the 'insights person' on my team."

**Impact**: Promoted to Senior Analyst, citing productivity improvements

---

## What's Next for the Product?

### Near-term Focus

Make the core course experience better:

- Teaching scripts and guided lessons
- Realistic supporting materials
- Company context for cohesive narrative
- Improve completion rate to 75%

### Medium-term Evolution

Expand beyond the course:

- Command marketplace (community-driven)
- Team collaboration features
- Usage analytics and AI coaching
- Specialised learning tracks

### Long-term Vision

Become the definitive platform for AI-augmented work:

- Integration with popular tools
- Certification and credentialing
- Enterprise adoption at scale
- Community-driven curriculum

---

**Last Updated**: December 2024
**Maintained By**: Maya Patel (Head of Product) & Alex Morrison (PM - that's you!)
