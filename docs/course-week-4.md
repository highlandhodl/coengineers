# Week 4: Business Assets + Capstone

**Theme:** "Documents that drive revenue."
**Days:** 22-31 (Week 4: 22-28, Bonus Capstone: 29-31)
**Fictional Context:** Building Thistle & Thorn's content engine and shipping a real project

---

## Week 4 Overview (Days 22-28)

### Learning Objectives
By the end of Week 4, students will be able to:
1. Compile blog posts from notes and research
2. Assemble newsletters from content highlights
3. Package project notes into case studies
4. Generate proposals from meeting notes
5. Create competitive intelligence reports
6. Prepare content for chatbot/RAG training
7. Build an integrated "business content factory"

### Week 4 Outcome
Production-ready business documents generated from existing notes and research.

### Thistle & Thorn Context
Thistle & Thorn needs to turn their knowledge and content into business assets:
- Blog posts to drive organic traffic
- Newsletters to nurture their email list
- Case studies from successful customer events
- Proposals for potential distributors
- Competitive analysis to understand the market

---

## Day 22: Blog Compiler

**Slash Command:** `/w4.d22`
**Title:** Compiling Blog Posts from Notes
**Duration:** Video 9 mins, Hands-on 15 mins

### Learning Objectives
- Transform scattered notes into cohesive blog posts
- Write compelling hooks and CTAs
- Structure content for readability
- Optimise for SEO basics

### The Scenario
Jamie has notes from distillery visits, conversations with Fiona, and research about whisky trends. Time to turn them into blog posts that drive traffic.

### Video Content
1. **Hook:** "Your notes are blog posts waiting to happen."
2. **Demo:**
   - Gathering source notes
   - Creating blog structure
   - Writing hooks and CTAs
   - SEO basics (headings, keywords)
3. **Key moments:**
   - Notes → outline transformation
   - Hook writing techniques
   - Final polish and formatting

### Slash Command Structure

```markdown
# Day 22: Blog Compiler

Transform your notes into publishable blog posts.

## What We're Building
A complete blog post from scattered notes, with hooks, structure,
and calls to action.

## The Scenario
Jamie has 6 months of notes about whisky-making, customer stories,
and industry trends. Fiona wants a blog on the website. It's time
to turn notes into content.

## Blog Post Anatomy

1. **Hook** - First line that grabs attention
2. **Context** - Why this matters to the reader
3. **Body** - The main content (structured with subheadings)
4. **Takeaway** - What the reader should remember
5. **CTA** - What you want them to do next

## Let's Go

### Step 1: Create the Blog Compiler
"Create a slash command at .claude/commands/compile-blog.md:

# Compile Blog Post

You are helping me turn notes into a publishable blog post.

## Input
I'll provide:
- Source notes (can be multiple, messy)
- Target audience
- Desired length (short: 500w, medium: 1000w, long: 1500w+)
- Any SEO keywords to include
- Call to action

## Your Task
Create a complete blog post with:

1. **Title Options** - 3 headline options (curiosity, benefit, how-to)
2. **Hook** - Opening that grabs attention
3. **Body** - Structured content with H2/H3 subheadings
4. **Takeaways** - Key points summarised
5. **CTA** - Clear next action for reader
6. **Meta** - Suggested meta description (155 chars)

## Writing Style
- British English
- Conversational but authoritative
- Short paragraphs (2-3 sentences max)
- Use 'you' and 'your' - speak to the reader
- Include examples and specifics

## Output Format
Markdown with frontmatter (title, description, author, date, tags)"

### Step 2: Compile a Thistle & Thorn Blog Post
"Compile a blog post from these notes:

Topic: The Difference Between Age and Quality in Whisky

Notes:
- Age statement is a marketing tool, not quality guarantee
- Cask quality matters more than years
- Climate affects maturation speed (Scotland slower than Kentucky)
- A 10-year in good cask beats 18-year in tired cask
- Smaller distilleries often use better casks
- Tasting notes matter more than age
- Price often reflects age, not quality
- Tips for choosing whisky without fixating on age

Target audience: Whisky curious, not experts
Length: Medium (1000 words)
SEO keyword: 'choosing whisky by age'
CTA: Sign up for our tasting notes newsletter

Save to week-4-outputs/blog-age-vs-quality.md"

### Step 3: Add SEO Enhancement
"Create a slash command enhance-blog-seo.md that takes a
draft blog post and:
- Suggests header improvements for SEO
- Recommends internal/external links
- Adds alt text suggestions for images
- Optimises the meta description"

### Step 4: Create a Content Series
"Using the age vs quality blog as a starting point, suggest
3 more blog posts that could form a 'Whisky Wisdom' series.
Give titles and brief outlines for each."

### Step 5: Quick Blog Mode
"Create a slash command blog-quick.md that creates a
500-word blog post from a single topic sentence. Minimal
input, maximum output."

## Hook Formulas for Blogs

| Formula | Example |
|---------|---------|
| Contrarian | "Everything you know about whisky age is wrong." |
| Question | "Would you pay £100 more for 6 extra years?" |
| Story | "Last week, a customer chose our 10-year over an 18-year. Here's why." |
| Statistic | "87% of whisky buyers focus on the wrong thing." |
| How-to | "How to spot a great whisky without looking at the label." |

## Your Turn
Find notes on a topic you know well. Run them through the
blog compiler. Create a post you could actually publish.

## What You Learned
- Notes → blog is a structured process
- Hooks determine if anyone reads further
- Structure aids readability
- CTAs convert readers to action

## Tomorrow
Day 23: Newsletter Assembler - Building email newsletters
Run `/w4.d23` when you're ready!

---
Day 22 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/compile-blog.md`
- `.claude/commands/enhance-blog-seo.md`
- `.claude/commands/blog-quick.md`
- `blog-age-vs-quality.md`

---

## Day 23: Newsletter Assembler

**Slash Command:** `/w4.d23`
**Title:** Building Email Newsletters
**Duration:** Video 8 mins, Hands-on 12 mins

### Learning Objectives
- Curate content for newsletters
- Write email-friendly copy
- Structure sections for scanability
- Create consistent newsletter formats

### The Scenario
Thistle & Thorn is building an email list. They need a monthly newsletter that's worth opening. Jamie needs a system.

### Video Content
1. **Hook:** "The newsletter people actually want to read."
2. **Demo:**
   - Newsletter structure and sections
   - Curating from existing content
   - Email-friendly formatting
   - Subject line writing
3. **Key moments:**
   - Content → newsletter transformation
   - Subject line A/B options
   - Mobile-friendly formatting

### Slash Command Structure

```markdown
# Day 23: Newsletter Assembler

Create email newsletters people actually open.

## What We're Building
A complete newsletter from your content, ready to send.

## The Scenario
Thistle & Thorn's email list is growing. They need a monthly
newsletter that keeps subscribers engaged and drives visits
to the distillery.

## Newsletter Structure

```
1. SUBJECT LINE - Makes them open
2. PREVIEW TEXT - The snippet they see
3. GREETING - Personal, warm
4. MAIN STORY - One key piece of content
5. QUICK BITS - 2-3 shorter items
6. CTA - What you want them to do
7. SIGN-OFF - Human, not corporate
```

## Let's Go

### Step 1: Create the Newsletter Assembler
"Create a slash command at .claude/commands/assemble-newsletter.md:

# Assemble Newsletter

You are helping me create an email newsletter from my content.

## Input
I'll provide:
- Main story/content piece
- 2-3 shorter items (optional)
- Any news/announcements
- Desired CTA
- Month/date for the newsletter

## Your Task
Create a newsletter with:

1. **Subject Lines** - 3 options (curiosity, benefit, timely)
2. **Preview Text** - First line visible in inbox (40-90 chars)
3. **Greeting** - Warm, personal opening
4. **Main Story** - The feature content (3-4 paragraphs max)
5. **Quick Bits** - 2-3 short items with one-line intros
6. **CTA** - Clear action
7. **Sign-off** - Personal, human

## Email Writing Rules
- Short paragraphs (1-2 sentences)
- One idea per paragraph
- Scannable format
- Links clearly visible
- Mobile-friendly (no wide images/tables)

## Tone
Warm, personal, like a letter from a friend who happens
to run a distillery. Not corporate, not salesy."

### Step 2: Create December Newsletter
"Assemble the December newsletter for Thistle & Thorn:

Main story: The Christmas Tasting Event (Dec 15-20)
- 20 guests per evening
- Whisky and chocolate pairings
- Meet Fiona, hear the family story
- £45 per person, includes take-home dram

Quick bits:
- New 12-year batch just released
- Blog post: Age vs Quality (link)
- Instagram: Behind the scenes with Hamish

Announcement: Closed Dec 24-26, reopening Dec 27

CTA: Book your spot at the tasting event

Save to week-4-outputs/newsletter-december.md"

### Step 3: Create Subject Line Generator
"Create a slash command generate-subjects.md that takes
a newsletter topic and generates 10 subject line options
using different psychological triggers (curiosity, urgency,
benefit, etc.)."

### Step 4: Quick Newsletter Template
"Create a reusable template at templates/newsletter-template.md
that I can use as a starting point each month. Include all
sections with placeholder prompts."

## Subject Line Formulas

| Trigger | Example |
|---------|---------|
| Curiosity | "We tried something new. Here's what happened." |
| Benefit | "Your invite to taste whisky you can't buy" |
| Urgency | "Only 12 spots left for December" |
| Personal | "A note from Fiona about the holidays" |
| Story | "The cask that almost got away" |

## Your Turn
Create a newsletter for something you're working on.
Test different subject lines. See what feels right.

## What You Learned
- Newsletters need structure and consistency
- Subject lines are everything
- Short paragraphs for email
- Personal beats professional

## Tomorrow
Day 24: Case Study Packager - Turning projects into case studies
Run `/w4.d24` when you're ready!

---
Day 23 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/assemble-newsletter.md`
- `.claude/commands/generate-subjects.md`
- `templates/newsletter-template.md`
- `newsletter-december.md`

---

## Day 24: Case Study Packager

**Slash Command:** `/w4.d24`
**Title:** Turning Projects into Case Studies
**Duration:** Video 9 mins, Hands-on 15 mins

### Learning Objectives
- Structure case studies effectively
- Extract stories from project notes
- Write compelling before/after narratives
- Create credible, shareable case studies

### The Scenario
Thistle & Thorn hosted a corporate whisky tasting that was a huge success. They want to use it to attract more corporate clients. Jamie needs to package it as a case study.

### Video Content
1. **Hook:** "Your best work deserves to be a story you can tell."
2. **Demo:**
   - Case study structure
   - Extracting details from notes
   - Before/after framing
   - Getting approval/quotes
3. **Key moments:**
   - Notes → case study transformation
   - Emotional vs logical elements
   - Call to action placement

### Slash Command Structure

```markdown
# Day 24: Case Study Packager

Turn your project wins into compelling case studies.

## What We're Building
A professional case study from project notes, with clear
problem-solution-results structure.

## The Scenario
Edinburgh Tech Company booked a team-building whisky tasting.
25 people, private tour, custom tasting, dinner. It was a hit.
Now we want to attract more corporate clients.

## Case Study Structure

```
1. HEADLINE - Results-focused
2. OVERVIEW - Client + challenge + outcome (one paragraph)
3. THE CHALLENGE - What problem they faced
4. THE SOLUTION - What we did
5. THE RESULTS - Measurable outcomes
6. QUOTE - In their words
7. CTA - Want the same?
```

## Let's Go

### Step 1: Create the Case Study Packager
"Create a slash command at .claude/commands/package-case-study.md:

# Package Case Study

You are helping me turn project notes into a case study.

## Input
I'll provide:
- Project notes and details
- Client information (may need to anonymise)
- Problem they faced
- What we did
- Results/outcomes
- Any quotes or feedback

## Your Task
Create a case study with:

1. **Headline** - Focus on the result, not the client
   - Example: 'How a tech company rebuilt team morale with whisky'

2. **Overview Box**
   - Client: [Name/type]
   - Industry: [Sector]
   - Challenge: [One line]
   - Result: [One line]

3. **The Challenge** (2-3 paragraphs)
   - What was the situation?
   - Why did it matter?
   - What had they tried before?

4. **The Solution** (2-3 paragraphs)
   - What did we propose?
   - How did we deliver?
   - What made it special?

5. **The Results** (bullets or numbers)
   - Measurable outcomes
   - Qualitative feedback
   - Follow-on effects

6. **Quote** (if available)
   - In their words
   - Attribution

7. **CTA**
   - Want similar results? Here's how to start.

## Writing Style
- Storytelling, not reporting
- Show, don't tell
- Use specific numbers
- Keep it credible (not overselling)"

### Step 2: Package the Tech Company Case Study
"Create a case study from these notes:

Client: Nexus Solutions (Edinburgh tech company, 120 employees)
Contact: Sarah Chen, Head of People

The Challenge:
- Remote work had fragmented the team
- In-person events felt forced ('not another pizza party')
- Needed something memorable to rebuild connections
- Budget: £2000 for 25 senior team members

What We Did:
- Private after-hours distillery tour
- Hamish explained cask selection (hands-on)
- Tasting of 4 whiskies with food pairings
- Created a 'Nexus Single Cask' concept (their own future cask)
- Group dinner in the tasting room

Results:
- NPS of the event: 94
- 3 attendees booked personal visits within a month
- They've already asked about an annual booking
- Sarah shared on LinkedIn (18,000 impressions)

Quote from Sarah: 'This was the first team event where nobody
checked their phone. Genuinely special.'

Save to week-4-outputs/case-study-nexus.md"

### Step 3: Create Anonymised Version
"Create a version of the case study that doesn't name the
client - for use before getting formal approval. Call them
'A leading Edinburgh tech company'."

### Step 4: Case Study Template
"Create a template at templates/case-study-template.md
that I can reuse for future case studies."

### Step 5: Quick Win Version
"Create a slash command case-study-quick.md that creates a
one-page case study summary (200-300 words) for quick sharing."

## Case Study Tips

1. **Get permission** before publishing with client name
2. **Use specifics** - "94 NPS" beats "great feedback"
3. **Include photos** if possible (add [PHOTO: description])
4. **Focus on results** the reader wants
5. **Make it skimmable** - headers, bullets, bold text

## Your Turn
Think of a project that went well. Package it as a case study.
Even if you can't publish it, the exercise is valuable.

## What You Learned
- Case studies are stories with structure
- Results matter more than process
- Quotes add credibility
- Permission is essential

## Tomorrow
Day 25: Proposal Generator - Turning meetings into proposals
Run `/w4.d25` when you're ready!

---
Day 24 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/package-case-study.md`
- `.claude/commands/case-study-quick.md`
- `templates/case-study-template.md`
- `case-study-nexus.md`

---

## Day 25: Proposal Generator

**Slash Command:** `/w4.d25`
**Title:** Generating Proposals from Meeting Notes
**Duration:** Video 10 mins, Hands-on 18 mins

### Learning Objectives
- Structure professional proposals
- Extract requirements from meeting notes
- Include scope, pricing, and terms
- Create reusable proposal templates

### The Scenario
Fiona just finished a call with a wedding planner who wants to offer Thistle & Thorn experiences to clients. Jamie needs to send a proposal by tomorrow.

### Video Content
1. **Hook:** "From meeting to proposal in 10 minutes."
2. **Demo:**
   - Proposal structure and sections
   - Extracting details from meeting notes
   - Pricing presentation
   - Terms and next steps
3. **Key moments:**
   - Notes → proposal transformation
   - Pricing strategy
   - Professional formatting

### Slash Command Structure

```markdown
# Day 25: Proposal Generator

Turn meeting notes into professional proposals.

## What We're Building
A complete proposal from meeting notes, with scope, pricing,
and clear next steps.

## The Scenario
Wedding planner Megan Fraser wants to partner with Thistle &
Thorn for whisky experiences at weddings. Fiona took notes
during the call. Jamie needs to send a proposal.

## Proposal Structure

```
1. COVER - Who, what, date
2. EXECUTIVE SUMMARY - The opportunity in one paragraph
3. UNDERSTANDING - What we heard (shows we listened)
4. SOLUTION - What we're proposing
5. SCOPE - What's included/excluded
6. INVESTMENT - Pricing and options
7. TIMELINE - How it would work
8. ABOUT US - Brief credibility
9. TERMS - Payment, cancellation
10. NEXT STEPS - How to proceed
```

## Let's Go

### Step 1: Create the Proposal Generator
"Create a slash command at .claude/commands/generate-proposal.md:

# Generate Proposal

You are helping me create a professional proposal from meeting notes.

## Input
I'll provide:
- Meeting notes or call summary
- What they need/want
- Any pricing discussed
- Timeline requirements
- Our standard terms

## Your Task
Create a proposal with:

1. **Header**
   - Proposal title
   - Client name
   - Date
   - Prepared by

2. **Executive Summary** (1 paragraph)
   - The opportunity
   - Our recommendation
   - Expected outcome

3. **Understanding Your Needs** (3-4 bullets)
   - What we heard in the meeting
   - Shows we were listening
   - May include challenges/goals

4. **Proposed Solution** (2-3 paragraphs)
   - What we're recommending
   - Why it's right for them
   - How it's different/special

5. **Scope of Work** (table or bullets)
   - What's included
   - What's not included
   - Any options/add-ons

6. **Investment** (table)
   - Pricing options (if multiple)
   - What each includes
   - Payment terms

7. **Timeline**
   - Key milestones
   - When things happen

8. **About Thistle & Thorn** (brief)
   - Credibility, history
   - Why we're the right partner

9. **Terms & Conditions**
   - Payment: 50% deposit, 50% on completion
   - Cancellation policy
   - What happens next

10. **Next Steps**
    - How to proceed
    - Contact details
    - Expiry date if applicable

## Tone
Professional but warm. Not legal/corporate-speak.
Use 'you' and 'we'. Confident, not pushy."

### Step 2: Generate the Wedding Partnership Proposal
"Generate a proposal from these meeting notes:

Call: Megan Fraser, Fraser Events (wedding planning)
Date: Yesterday

What she wants:
- Whisky experience as part of wedding packages
- Could be at distillery or at venue
- Expecting 5-10 weddings per year to start
- Typically 20-40 guests for the whisky bit
- Budget varies, wants options

What we discussed:
- Option 1: Group visits to distillery (transport their problem)
- Option 2: We come to venue with mobile tasting kit
- Pricing: £40-60 per head depending on package
- She wants exclusivity in Speyside (we said we'd consider)

Her concerns:
- Consistency of experience
- Dietary requirements (gluten in whisky?)
- Wet weather backup for distillery visits

Next steps: Send proposal, she'll respond within a week

Save to week-4-outputs/proposal-fraser-events.md"

### Step 3: Create Pricing Options Table
"Add a pricing table to the proposal with 3 options:
- Silver: Basic tasting (4 whiskies, 1 hour, £40/head)
- Gold: Full experience (6 whiskies, food, 2 hours, £55/head)
- Platinum: Private tour + dinner (3 hours, £80/head)

Include minimum group sizes and what's included in each."

### Step 4: Proposal Template
"Create a reusable template at templates/proposal-template.md
with all sections as placeholders."

### Step 5: Quick Quote Mode
"Create a slash command quick-quote.md that generates just
the scope and pricing sections - for when you don't need a
full proposal."

## Proposal Tips

1. **Recap their needs first** - shows you listened
2. **Offer options** - gives them control
3. **Be specific on scope** - prevents disputes
4. **Include a deadline** - creates urgency
5. **Make next steps crystal clear**

## Your Turn
Think of something you could propose to a client or
colleague. Create a proposal even as practice.

## What You Learned
- Proposals have a reliable structure
- Recapping needs builds trust
- Options give clients control
- Clear next steps drive action

## Tomorrow
Day 26: Competitive Intel - Creating competitive analysis reports
Run `/w4.d26` when you're ready!

---
Day 25 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/generate-proposal.md`
- `.claude/commands/quick-quote.md`
- `templates/proposal-template.md`
- `proposal-fraser-events.md`

---

## Day 26: Competitive Intel

**Slash Command:** `/w4.d26`
**Title:** Creating Competitive Analysis Reports
**Duration:** Video 9 mins, Hands-on 15 mins

### Learning Objectives
- Structure competitive analysis
- Compare features and positioning
- Identify opportunities and threats
- Create actionable intel reports

### The Scenario
Fiona wants to understand what other Speyside distilleries are doing. Are they offering experiences? What do they charge? How do they market themselves?

### Slash Command Structure

```markdown
# Day 26: Competitive Intel

Create structured competitive analysis from research.

## What We're Building
A competitive intelligence report that identifies opportunities
and threats from competitor analysis.

## The Scenario
Three other Speyside distilleries are within 10 miles. Fiona wants
to know: What are they doing? What can we learn? Where can we win?

## Competitive Analysis Structure

```
1. EXECUTIVE SUMMARY - Key findings
2. COMPETITOR PROFILES - Who they are
3. COMPARISON MATRIX - Features side by side
4. PRICING ANALYSIS - What they charge
5. STRENGTHS & WEAKNESSES - Per competitor
6. OPPORTUNITIES - Where we can win
7. THREATS - What to watch
8. RECOMMENDATIONS - What to do next
```

## Let's Go

### Step 1: Create the Competitor Analyzer
"Create a slash command at .claude/commands/analyze-competitors.md:

# Analyze Competitors

You are helping me create a competitive analysis report.

## Input
I'll provide:
- Our company/product details
- Competitor information (can be notes, websites, research)
- Specific questions to answer

## Your Task
Create a competitive analysis with:

1. **Executive Summary** (1 paragraph)
   - Key findings
   - Main opportunities
   - Primary threats

2. **Competitor Profiles** (per competitor)
   - Name and overview
   - Products/services
   - Target market
   - Positioning

3. **Comparison Matrix** (table)
   - Key features/offerings
   - Us vs each competitor
   - Use ✓, ✗, ~ for yes/no/partial

4. **Pricing Comparison** (if available)
   - Their prices vs ours
   - Value positioning

5. **SWOT per Competitor**
   - Their strengths
   - Their weaknesses

6. **Opportunities**
   - Gaps we can fill
   - Weaknesses we can exploit
   - Unserved segments

7. **Threats**
   - Where they're stronger
   - What they might do
   - Market shifts

8. **Recommendations** (3-5 bullets)
   - Specific actions to take
   - Prioritised

## Tone
Analytical, objective, actionable."

### Step 2: Analyze Speyside Competitors
"Create a competitive analysis for Thistle & Thorn:

Our positioning: Family distillery, authentic experience,
premium but accessible, 4th generation

Competitor 1: Glen Morrison Distillery
- Larger, corporate-owned (bought by big brand 2019)
- Slick visitor centre, café, shop
- Tours: £20 (basic), £50 (premium)
- High volume, less personal
- Great website, professional marketing

Competitor 2: Cairn Spirits
- Similar size to us, family-owned
- Focus on gin more than whisky
- Tours: £25 (combined whisky/gin)
- Strong local following
- Weak online presence

Competitor 3: The Whisky Collective
- Not a distillery - a whisky experience venue
- Partners with multiple distilleries
- Tours: N/A, tastings from £30
- Modern, millennial-focused
- Excellent Instagram

Save to week-4-outputs/competitive-analysis-speyside.md"

### Step 3: Create Quick Competitor Profile
"Create a slash command competitor-profile.md that creates
a one-page profile of a single competitor from notes or
website research."

### Step 4: Opportunity Finder
"Based on the competitive analysis, create a 'Top 5
Opportunities' summary document with specific actions
Thistle & Thorn could take."

## Your Turn
Identify 2-3 competitors in your space. Research them
(websites, social, reviews). Run the analysis.

## What You Learned
- Structured analysis beats gut feel
- Comparison matrices reveal gaps
- Competitor weaknesses = opportunities
- Regular updates keep it relevant

## Tomorrow
Day 27: Chatbot Trainer - Preparing content for RAG
Run `/w4.d27` when you're ready!

---
Day 26 of 31 | CoEngineers.ai
```

---

## Day 27: Chatbot Trainer

**Slash Command:** `/w4.d27`
**Title:** Preparing Content for RAG/Chatbot Training
**Duration:** Video 9 mins, Hands-on 15 mins

### Learning Objectives
- Chunk content for retrieval
- Add metadata for searchability
- Format Q&A pairs
- Prepare for RAG ingestion

### The Scenario
Thistle & Thorn wants a chatbot on their website to answer customer questions. Jamie needs to prepare the content for training.

### Slash Command Structure

```markdown
# Day 27: Chatbot Trainer

Prepare content for chatbot and RAG systems.

## What We're Building
Training data for a chatbot or RAG system, properly chunked
and formatted with metadata.

## The Scenario
The website gets the same questions repeatedly:
- What are your opening hours?
- Do you ship internationally?
- Can we book a private tour?

A chatbot could handle this. But it needs training data.

## RAG Basics

RAG (Retrieval-Augmented Generation):
1. Content is chunked into pieces
2. Chunks are embedded (vectorised)
3. User asks a question
4. Relevant chunks are retrieved
5. LLM generates answer from chunks

Good training data = good answers.

## Let's Go

### Step 1: Create the Chatbot Trainer
"Create a slash command at .claude/commands/prepare-chatbot-data.md:

# Prepare Chatbot Training Data

You are helping me prepare content for chatbot/RAG training.

## Input
I'll provide:
- Source content (FAQs, docs, website copy)
- The context (what the chatbot is for)

## Your Task
Create training-ready content:

1. **Content Chunks**
   - Break into semantic units (one topic per chunk)
   - 100-300 words per chunk ideal
   - Include enough context in each chunk

2. **Metadata per Chunk**
   - Category (e.g., 'tours', 'products', 'practical')
   - Keywords
   - Source document

3. **Q&A Pairs** (if appropriate)
   - Question: How a user might ask
   - Answer: The response
   - Variations: Other ways to ask

4. **Entity Extraction**
   - Key facts (hours, prices, policies)
   - Named entities (products, people)

## Output Format
JSON-like structure or markdown with clear sections.
Each chunk should be self-contained."

### Step 2: Prepare Thistle & Thorn FAQ Data
"Prepare chatbot training data from this FAQ content:

Opening Hours:
Monday-Saturday: 10am-5pm (last tour 4pm)
Sunday: 12pm-4pm (last tour 3pm)
Closed: Dec 24-26, Jan 1-2

Tours:
- Discovery Tour: £20/person, 1 hour, includes 3 tastings
- Premium Experience: £55/person, 2 hours, 6 tastings + food
- Private Tour: £300 minimum (up to 8 people)
- Booking required for all tours

Products:
- 12 Year Single Malt: £45
- 18 Year Single Malt: £85
- Thistle Gin: £38
- Shipping: UK free over £50, Europe £15, No international yet

Contact:
Phone: 01234 567890
Email: hello@thistle-thorn.com
Address: Thistle & Thorn Distillery, Speyside AB12 3CD

Save to week-4-outputs/chatbot-training-data.md"

### Step 3: Create Q&A Pairs
"From the FAQ content, generate 10 Q&A pairs with 3 question
variations each. Format for chatbot training."

### Step 4: Chunk Long-Form Content
"Take the 'Age vs Quality' blog post from Day 22 and chunk
it for RAG ingestion. Add appropriate metadata to each chunk."

### Step 5: Export Formats
"Create exports of the training data in:
1. JSON format (for most chatbot platforms)
2. CSV format (for spreadsheet review)"

## Your Turn
Take some content you have (FAQ, documentation, guides)
and prepare it for chatbot training.

## What You Learned
- Chunking is crucial for retrieval
- Metadata improves search
- Q&A pairs with variations help coverage
- Self-contained chunks beat fragments

## Tomorrow
Day 28: Week 4 Review - Building your content factory
Run `/w4.d28` when you're ready!

---
Day 27 of 31 | CoEngineers.ai
```

---

## Day 28: Week 4 Review

**Slash Command:** `/w4.d28`
**Title:** Week 4 Consolidation
**Duration:** Video 10 mins, Hands-on 20 mins

### Learning Objectives
- Review and consolidate Week 4 skills
- Build integrated business content workflows
- Prepare for the Capstone
- Celebrate progress

### Slash Command Structure

```markdown
# Day 28: Week 4 Review

Consolidate your business content factory.

## What You Built This Week

| Day | Output | Purpose |
|-----|--------|---------|
| 22 | Blog posts | Drive organic traffic |
| 23 | Newsletters | Nurture email list |
| 24 | Case studies | Build credibility |
| 25 | Proposals | Win business |
| 26 | Competitive intel | Understand market |
| 27 | Chatbot data | Scale support |

## Let's Go

### Step 1: Audit Your Business Commands
"List all slash commands I created during Week 4. For each:
- Show the file path
- One-line description
- When I'd use it"

### Step 2: Create Week 4 Retrospective
"Create a retrospective at 01-projects/learning-claude-code/
week-4-retro.md with:
- Frontmatter: date, week: 4
- Business content I created
- Which command I'll use most
- Ideas for my own business/work"

### Step 3: Build a Business Content Router
"Create a slash command at .claude/commands/create-business.md
that asks what type of business content I need, then routes
to the appropriate creator:
- Blog → compile-blog
- Newsletter → assemble-newsletter
- Case study → package-case-study
- Proposal → generate-proposal
- Competitor analysis → analyze-competitors
- Chatbot data → prepare-chatbot-data"

### Step 4: Preview the Capstone
The next 3 days are the Capstone - you'll build and ship
a real project using frameworks.

"Review everything I've built over 4 weeks. Suggest 3 project
ideas I could build in the Capstone that would:
1. Use skills from multiple weeks
2. Be genuinely useful
3. Be achievable in 3 days"

### Step 5: Prepare for Launch
"Create a folder at 01-projects/capstone-project/ for the
Capstone work. Add a README with space for:
- Project idea
- Why I'm building it
- Who it's for
- What success looks like"

## The Complete CoEngineers Toolkit

### Week 1: Foundation
- Folder structure
- CLAUDE.md
- Templates
- Daily notes
- Custom slash commands

### Week 2: Processing
- Meeting notes
- Voice memos
- YouTube videos
- PDFs
- Web articles
- Emails

### Week 3: Creative
- Presentations
- Images
- Audio
- Diagrams
- Social content
- Video

### Week 4: Business
- Blog posts
- Newsletters
- Case studies
- Proposals
- Competitive intel
- Chatbot data

## Your Turn
Complete your Week 4 retro. Prepare for the Capstone.

## Ready for the Capstone?
Days 29-31: Build and ship a real project

- Day 29: BMAD Method - Plan your project
- Day 30: PRP Framework - Structure the build
- Day 31: SpecKit - Ship it!

Run `/bonus.d29` when you're ready!

---
Day 28 of 31 | CoEngineers.ai

🎉 Week 4 Complete!
```

---

## Bonus: The Capstone (Days 29-31)

**Theme:** "Build and ship a real project."

### Capstone Overview

The Capstone brings everything together. Students use three professional frameworks to plan, structure, and ship a real project.

| Day | Framework | Purpose |
|-----|-----------|---------|
| 29 | BMAD Method | Plan the project |
| 30 | PRP Framework | Structure the build |
| 31 | SpecKit | Ship it |

### Project Ideas

Students choose a project that:
1. Uses skills from multiple weeks
2. Is genuinely useful to them
3. Can be completed in 3 days

Examples:
- A personal website with blog
- A documentation site for a project
- A content automation pipeline
- Their own slash command library
- A chatbot for their business

---

## Day 29: BMAD Method

**Slash Command:** `/bonus.d29`
**Title:** Planning with BMAD
**Duration:** Video 12 mins, Hands-on 25 mins

### Learning Objectives
- Understand the BMAD framework
- Create a project brief using BMAD
- Define breakthrough goals
- Plan with AI-assisted methodology

### What is BMAD?

BMAD = Breakthrough Method for Agile AI-Driven Development

A framework for using AI to plan and execute complex projects:
1. **Breakthrough Goal** - What's the big outcome?
2. **Method** - How will we achieve it?
3. **Agents** - What AI agents/tools help?
4. **Deliverables** - What will we produce?

### Slash Command Structure

```markdown
# Day 29: BMAD Method

Plan your Capstone project using BMAD.

## What We're Building
A complete project plan using the Breakthrough Method for
Agile AI-Driven Development.

## BMAD Framework

### 1. Breakthrough Goal
- What's the ambitious outcome?
- Why does it matter?
- What would success look like?

### 2. Method
- What's the approach?
- What phases are needed?
- What order makes sense?

### 3. Agents
- What AI tools will help?
- What slash commands apply?
- What human skills are needed?

### 4. Deliverables
- What will be produced?
- What format?
- Who's it for?

## Let's Go

### Step 1: Choose Your Project
"I'm planning my Capstone project. Help me evaluate these ideas:

[YOUR 3 PROJECT IDEAS]

For each, assess:
- Feasibility in 3 days
- Use of course skills
- Personal value
- Portfolio-worthiness

Recommend which to pursue."

### Step 2: Define the Breakthrough Goal
"For my chosen project [PROJECT], help me define:
- The breakthrough goal (ambitious but achievable)
- Why it matters to me
- What success looks like
- How I'll know it's done"

### Step 3: Create the BMAD Plan
"Create a BMAD plan for my Capstone project:

Project: [YOUR PROJECT]
Available time: 3 days (Days 29-31)
Skills available: All 28 days of course content

Structure it as:
- Breakthrough Goal
- Method (phases and approach)
- Agents (tools and commands I'll use)
- Deliverables (what I'll produce)

Save to capstone-project/bmad-plan.md"

### Step 4: Define Day-by-Day Work
"Break the BMAD plan into 3 days:
- Day 29 (today): Planning + initial setup
- Day 30: Core build
- Day 31: Polish + ship

What should I complete by end of today?"

### Step 5: Start Day 29 Work
"Let's begin the Day 29 tasks from the plan. What's first?"

## Your Turn
Execute the Day 29 tasks from your BMAD plan.
By end of today, you should have a clear plan and initial work done.

## Tomorrow
Day 30: PRP Framework - Structure the build
Run `/bonus.d30` when you're ready!

---
Day 29 of 31 | CoEngineers.ai
```

---

## Day 30: PRP Framework

**Slash Command:** `/bonus.d30`
**Title:** Building with PRP
**Duration:** Video 10 mins, Hands-on 30 mins

### Learning Objectives
- Understand Prompt-Response-Product pattern
- Structure complex builds with PRP
- Execute the core project build
- Create reusable project patterns

### What is PRP?

PRP = Prompt-Response-Product

A pattern for AI-assisted creation:
1. **Prompt** - The detailed request
2. **Response** - What the AI produces
3. **Product** - The refined, shipped output

### Slash Command Structure

```markdown
# Day 30: PRP Framework

Execute your Capstone build using PRP.

## What We're Building
The core of your Capstone project, structured with
Prompt-Response-Product methodology.

## PRP Framework

For each piece of your project:

1. **Prompt** - Write a detailed request
   - Context: What exists already
   - Task: What you need created
   - Format: How it should look
   - Constraints: Any limitations

2. **Response** - Get the AI output
   - Review what's produced
   - Note what's good
   - Note what needs work

3. **Product** - Refine to final form
   - Edit and improve
   - Ensure consistency
   - Polish for shipping

## Let's Go

### Step 1: Review Yesterday's Progress
"Review my BMAD plan and Day 29 work. What's the status?
What should I focus on today?"

### Step 2: List Today's Build Tasks
"From my BMAD plan, extract the Day 30 tasks. List them
in order of priority with estimated time for each."

### Step 3: Execute with PRP
For each major component, use PRP:

"I need to build [COMPONENT]. Using PRP:

**Context:** [What exists]
**Task:** [What to create]
**Format:** [How it should look]
**Constraints:** [Limitations]

Create this component."

### Step 4: Review and Refine
"Review what we've built today:
- What's complete?
- What needs refinement?
- What's ready for Day 31 polish?"

### Step 5: Prepare for Ship Day
"What needs to happen tomorrow to ship this project?
Create a Day 31 checklist."

## PRP in Action

Example PRP cycle:

**Prompt:**
"Create a homepage for my personal website. Context: I'm a
marketing consultant. Task: Write hero section copy, about
section, and services list. Format: Markdown ready for Astro.
Constraints: British English, warm but professional tone."

**Response:**
[AI generates content]

**Product:**
[You review, edit, refine, and finalise]

## Your Turn
Execute your Day 30 tasks using PRP for each component.
Build the core of your project.

## Tomorrow
Day 31: Ship It! - Polish and launch
Run `/bonus.d31` when you're ready!

---
Day 30 of 31 | CoEngineers.ai
```

---

## Day 31: Ship It!

**Slash Command:** `/bonus.d31`
**Title:** Polish and Launch with SpecKit
**Duration:** Video 12 mins, Hands-on 35 mins

### Learning Objectives
- Use SpecKit for spec-driven shipping
- Polish project to shippable state
- Create documentation and README
- Actually ship/publish the project

### What is SpecKit?

SpecKit is a spec-driven development approach:
1. Define what you're building (spec)
2. Build to the spec
3. Verify against the spec
4. Ship with confidence

### Slash Command Structure

```markdown
# Day 31: Ship It!

Polish and launch your Capstone project.

## What We're Building
A shipped project. Live. Public. Done.

## Today's Goal

By end of today:
- Project is polished and complete
- Documentation exists
- It's published/shared somewhere
- You can show it to others

## Let's Go

### Step 1: Review What We've Built
"Review my Capstone project status:
- What's complete?
- What's incomplete?
- What absolutely must be done to ship?
- What would be nice but can wait?"

### Step 2: Create the Ship Checklist
"Create a 'Ship Checklist' with everything needed to launch:
- Content complete
- Design/formatting done
- Documentation written
- Tested/reviewed
- Published
- Shared"

### Step 3: Polish Sprint
Work through critical items:

"Let's polish [ITEM]. Make it ship-ready:
- Fix any issues
- Improve quality
- Ensure consistency"

### Step 4: Create README/Documentation
"Create documentation for my project:
- What it is
- How to use it
- Who it's for
- How to contribute (if applicable)"

### Step 5: Ship It
"Help me publish my project:
- Where should it live? (GitHub, website, etc.)
- What's the publishing process?
- Let's do it now."

### Step 6: Create the Announcement
"Create an announcement for my shipped project:
- LinkedIn post
- Tweet
- Community share

I just completed the 31 Days of Claude Code Capstone!"

### Step 7: Reflect
"Create a final reflection at capstone-project/reflection.md:
- What I built
- What I learned
- What I'd do differently
- What's next"

## Ship Checklist Template

- [ ] Core functionality complete
- [ ] Content reviewed and polished
- [ ] Design/formatting consistent
- [ ] README/documentation written
- [ ] Tested on fresh environment
- [ ] Published to platform
- [ ] Shareable link created
- [ ] Announcement posted
- [ ] Celebrated! 🎉

## Your Turn
Ship your project. Share it with the world.
You've earned this.

## You Did It!

31 days. 31 lessons. One shipped project.

You now have:
- A complete knowledge system
- Content processing superpowers
- Creative output capabilities
- Business document automation
- A real, shipped project

What will you build next?

---
Day 31 of 31 | CoEngineers.ai

🎉🎉🎉 COURSE COMPLETE! 🎉🎉🎉

Share your achievement: #CoEngineers #31DaysOfClaudeCode
```

---

## Week 4 + Bonus Materials Checklist

### Slash Commands to Create
- [ ] `/w4.d22` - Blog Compiler
- [ ] `/w4.d23` - Newsletter Assembler
- [ ] `/w4.d24` - Case Study Packager
- [ ] `/w4.d25` - Proposal Generator
- [ ] `/w4.d26` - Competitive Intel
- [ ] `/w4.d27` - Chatbot Trainer
- [ ] `/w4.d28` - Week 4 Review
- [ ] `/bonus.d29` - BMAD Method
- [ ] `/bonus.d30` - PRP Framework
- [ ] `/bonus.d31` - Ship It!

### Business Commands Created
- [ ] `compile-blog.md`
- [ ] `enhance-blog-seo.md`
- [ ] `blog-quick.md`
- [ ] `assemble-newsletter.md`
- [ ] `generate-subjects.md`
- [ ] `package-case-study.md`
- [ ] `case-study-quick.md`
- [ ] `generate-proposal.md`
- [ ] `quick-quote.md`
- [ ] `analyze-competitors.md`
- [ ] `competitor-profile.md`
- [ ] `prepare-chatbot-data.md`
- [ ] `create-business.md` (router)

### Videos to Record
- [ ] Day 22: Blog Compiler (9 mins)
- [ ] Day 23: Newsletter Assembler (8 mins)
- [ ] Day 24: Case Study Packager (9 mins)
- [ ] Day 25: Proposal Generator (10 mins)
- [ ] Day 26: Competitive Intel (9 mins)
- [ ] Day 27: Chatbot Trainer (9 mins)
- [ ] Day 28: Week Review (10 mins)
- [ ] Day 29: BMAD Method (12 mins)
- [ ] Day 30: PRP Framework (10 mins)
- [ ] Day 31: Ship It! (12 mins)

### Templates Created
- [ ] `newsletter-template.md`
- [ ] `case-study-template.md`
- [ ] `proposal-template.md`

---

*End of Week 4 + Bonus Detailed Plan*
