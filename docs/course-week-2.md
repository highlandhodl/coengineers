# Week 2: Content Processing

**Theme:** "From chaos to clarity in seconds."
**Days:** 8-14
**Fictional Context:** Processing Thistle & Thorn's messy content backlog

---

## Week 2 Overview

### Learning Objectives
By the end of Week 2, students will be able to:
1. Process meeting transcripts into structured notes
2. Transform voice memo transcripts into organised thoughts
3. Extract insights from YouTube videos
4. Rip key data from PDF documents
5. Archive web articles as clean markdown
6. Turn email threads into action items
7. Build a personal "content processing pipeline"

### Week 2 Outcome
A suite of content ingestion tools that handle any input format and output consistent, structured notes.

### Thistle & Thorn Context
The distillery has a backlog of content that's never been organised:
- Fiona's voice memos about whisky production
- Meeting recordings from distributor calls
- PDFs of industry reports
- Saved web articles about whisky trends
- Email threads with suppliers

Jamie's mission: process it all into usable knowledge.

---

## Day 8: Meeting Tamer

**Slash Command:** `/w2.d8`
**Title:** Transforming Meeting Transcripts
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Process raw meeting transcripts into structured notes
- Extract speakers, decisions, and action items
- Create consistent meeting note format
- Handle messy, real-world transcripts

### The Scenario
Sarah recorded last week's distributor call. The raw transcript is 47 minutes of rambling. Fiona needs to know what was decided. Jamie to the rescue.

### Video Content
1. **Hook:** "47 minutes of meeting. 2 minutes to know what matters."
2. **Demo:**
   - Show raw meeting transcript (messy, no punctuation)
   - Feed to Claude with structured prompt
   - Get clean output with speakers, decisions, actions
   - Save to proper location with frontmatter
3. **Key moments:**
   - Before/after comparison
   - Handling speaker identification
   - Extracting action items with owners

### Slash Command Structure

```markdown
# Day 8: Meeting Tamer

Turn messy meeting transcripts into structured, actionable notes.

## What We're Building
A processed meeting note from a raw transcript, with speakers
identified, decisions captured, and action items extracted.

## The Scenario
Sarah's distributor call recording has been transcribed by Whisper.
It's... rough. Long paragraphs, no punctuation, unclear who said
what. We need to make sense of it.

## The Input
A raw meeting transcript - messy, unstructured, possibly without
clear speaker labels.

## The Output
A clean meeting note with:
- Frontmatter (date, attendees, type)
- Summary (2-3 sentences)
- Key discussion points
- Decisions made
- Action items (who, what, when)

## Let's Go

### Step 1: Create the Meeting Processor Command
First, let's build a reusable command:

"Create a slash command at .claude/commands/process-meeting.md:

# Process Meeting Transcript

You are helping me turn a raw meeting transcript into structured notes.

## Input
I'll provide a raw meeting transcript. It may be:
- Messy with poor punctuation
- Missing clear speaker labels
- Long and rambling

## Your Task
1. Identify speakers if possible (from context clues)
2. Summarise the meeting in 2-3 sentences
3. Extract key discussion points (bullet list)
4. Identify decisions that were made
5. Extract action items as a table: Action | Owner | Due Date
6. Note any open questions or parking lot items

## Output Format
Create a markdown file with frontmatter and clear sections.
Use British English. Be concise - cut the fluff."

### Step 2: Process the Example Transcript
Now let's use it. I'll give you a sample transcript:

"Process this meeting transcript using my meeting processor:

[PASTE SAMPLE TRANSCRIPT]

Meeting was between Jamie and Fiona discussing Q1 marketing plans.
Save the output to 01-projects/learning-claude-code/week-2-outputs/
distributor-call-processed.md"

### Step 3: Refine the Output
Review what Claude created. Iterate:

"The action items section needs due dates. Can you infer
reasonable dates from context, or mark as 'TBD' if unclear?
Update the file."

### Step 4: Add to Your Template Library
"Update my meeting note template (templates/meeting-note.md)
to match the structure we used for processed meetings. Add a
'Source: transcript' field to frontmatter."

## Sample Transcript for Practice

Here's a sample Thistle & Thorn meeting to process:

---
so fiona was saying we need to get the christmas stuff sorted
jamie said yeah definitely what were you thinking fiona well
i was thinking maybe a tasting event but sarah thinks we dont
have capacity sarah said look we can maybe do 20 people max
if we use the warehouse jamie asked about the social media
plan fiona said priority one is the website its looking dated
jamie agreed to update it by december first sarah will handle
event bookings fiona wants to focus on premium customers not
volume jamie asked about budget fiona said lets keep it under
two thousand pounds for the whole campaign sarah worried about
staffing for the event decided to hire two temp staff for
december jamie to draft social calendar by friday next week
we'll review the website mockups...
---

## Your Turn
Find a real meeting transcript (or create one from notes) and
process it with your new command. Compare the before and after.

## What You Learned
- Claude can parse messy, unstructured text
- Speaker identification from context works surprisingly well
- Consistent output format makes notes usable
- Save the command for reuse

## Tomorrow
Day 9: Voice to Text - Processing voice memo transcripts
Run `/w2.d9` when you're ready!

---
Day 8 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/process-meeting.md`
- `distributor-call-processed.md` with clean structure
- Updated meeting template

---

## Day 9: Voice to Text

**Slash Command:** `/w2.d9`
**Title:** Processing Voice Memo Transcripts
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Process rambling voice memos into structured thoughts
- Extract key ideas from conversational audio
- Create different output formats (notes, tasks, ideas)
- Use Whisper for transcription (local, free)

### The Scenario
Fiona records voice memos while walking through the distillery. Observations about the whisky, ideas for new products, things she needs to remember. It's all in recordings on her phone - unusable until now.

### Video Content
1. **Hook:** "Your best ideas happen when you can't type. Here's how to capture them."
2. **Demo:**
   - Whisper basics (local transcription)
   - Feeding transcript to Claude
   - Different output modes: notes, actions, ideas
   - Handling conversational, jumpy content
3. **Key moments:**
   - Show Whisper in action
   - Process a rambling voice memo
   - Multiple output formats from same input

### Slash Command Structure

```markdown
# Day 9: Voice to Text

Turn rambling voice memos into organised thoughts.

## What We're Building
A system for processing voice memo transcripts into structured
notes, extracting the gold from stream-of-consciousness audio.

## The Scenario
Fiona records while walking the distillery: "Cask 47 needs
checking... oh and we should think about that gin idea...
reminded me to call Duncan about barley prices..."

It's valuable. It's messy. Let's fix that.

## Prerequisites
- Whisper installed locally (free, runs on your machine)
- Or: Use a transcription service of your choice

## Let's Go

### Step 1: Understanding Voice Memo Challenges
Voice memos are different from meetings:
- Single speaker (usually)
- Stream of consciousness
- Topic jumping
- Incomplete thoughts
- Filler words and thinking pauses

### Step 2: Create the Voice Memo Processor
"Create a slash command at .claude/commands/process-voice-memo.md:

# Process Voice Memo

You are helping me extract structured content from a voice memo
transcript.

## The Challenge
Voice memos are rambling by nature. The speaker jumps between
topics, has incomplete thoughts, and mixes observations with
action items.

## Your Task
From the transcript, extract:

1. **Key Topics** - What subjects were mentioned?
2. **Observations** - Facts, notices, things seen/heard
3. **Ideas** - Suggestions, possibilities, creative thoughts
4. **Action Items** - Things to do, people to contact, tasks
5. **Questions** - Things to figure out, uncertainties
6. **Random Notes** - Anything else worth capturing

## Output Format
Create sections for each category. Only include sections that
have content. Be concise - voice memos have lots of filler.

Use British English. Date the output."

### Step 3: Process Fiona's Voice Memo
Here's a sample voice memo transcript:

"Process this voice memo transcript:

---
so i'm walking past the warehouse and cask 47 is definitely
leaking a wee bit, not urgent but hamish should check it
this week... um... what else... oh the Henderson order, did
we confirm that, i need to check with sarah... thinking about
the christmas event again, what if we did whisky and chocolate
pairings, could be something different... the barley delivery
is tuesday i think, need to be here for that... hmm that new
recipe jamie mentioned for the gin, worth exploring, maybe
spring launch... the website really does need updating, saw
a competitor's site yesterday and ours looks ancient...
oh and call duncan about barley prices going up, he mentioned
something at the pub... remind me to check the fermentation
temps this afternoon...
---

Save to week-2-outputs/fiona-voice-memo-processed.md"

### Step 4: Create Different Output Modes
Sometimes you want different formats:

"Create two more slash commands:
1. process-voice-ideas.md - Only extract ideas and creative thoughts
2. process-voice-actions.md - Only extract action items as a task list"

### Step 5: Batch Process
If you have multiple voice memos:

"Look in [YOUR FOLDER] for any .txt files that look like voice
memo transcripts. List them and ask which ones I want to process."

## Sample Voice Memos for Practice

**Voice Memo 2 - Jamie thinking about social media:**
---
okay so social media plan for december... instagram definitely,
we should show the casks, people love that behind the scenes
stuff... maybe a countdown to christmas, like 12 drams of
christmas or something cheesy like that... need to ask fiona
about budget for promoted posts... should we do tiktok,
probably not our demographic but maybe... the competitor in
islay is doing really well on linkedin actually, b2b angle,
we should try that for trade customers... oh remind me to
get photos of the new batch, the colour is really good...
---

## Your Turn
Record a voice memo of yourself thinking about a project.
Transcribe it (use Whisper or any tool). Process it with
your new command. See what Claude extracts.

## What You Learned
- Voice memos need different processing than meetings
- Multiple output formats serve different purposes
- The "action items only" filter is powerful
- Whisper + Claude = free voice-to-structured-notes

## Tomorrow
Day 10: YouTube Brain - Extracting insights from videos
Run `/w2.d10` when you're ready!

---
Day 9 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/process-voice-memo.md`
- `.claude/commands/process-voice-ideas.md`
- `.claude/commands/process-voice-actions.md`
- Processed voice memo with structured output

---

## Day 10: YouTube Brain

**Slash Command:** `/w2.d10`
**Title:** Extracting Insights from YouTube Videos
**Duration:** Video 9 mins, Hands-on 15 mins

### Learning Objectives
- Extract transcripts from YouTube videos
- Summarise video content effectively
- Pull key quotes and timestamps
- Create reference notes from video content

### The Scenario
Jamie watches YouTube videos about whisky marketing, distillery tours, and industry trends. Hours of watching, but nothing captured. Time to extract the value.

### Video Content
1. **Hook:** "Every YouTube video you watch should leave you with notes."
2. **Demo:**
   - Getting YouTube transcripts (yt-dlp or manual)
   - Processing long-form video content
   - Creating summaries, quotes, timestamps
   - Building a video notes library
3. **Key moments:**
   - Show transcript extraction
   - Process a 20-minute video in seconds
   - Create a referenceable note

### Slash Command Structure

```markdown
# Day 10: YouTube Brain

Extract lasting value from every video you watch.

## What We're Building
A system for processing YouTube video transcripts into structured
notes with summaries, key quotes, and actionable insights.

## The Scenario
Jamie watches a 45-minute video on "How Small Distilleries Win
on Social Media". Lots of good ideas. Two days later? Can't
remember any of it. Video notes fix this.

## Getting Transcripts

Option 1: yt-dlp (command line)
```bash
yt-dlp --write-auto-sub --skip-download "VIDEO_URL"
```

Option 2: YouTube's built-in transcript
- Click "..." under video → "Show transcript" → Copy

Option 3: Services like Downsub, etc.

## Let's Go

### Step 1: Create the YouTube Processor
"Create a slash command at .claude/commands/process-youtube.md:

# Process YouTube Video

You are helping me extract insights from a YouTube video transcript.

## Input
I'll provide:
- Video title and URL
- The transcript (may include timestamps)

## Your Task
Create a video note with:

1. **Metadata**
   - Title, channel, URL
   - Duration (if known)
   - Date watched: today

2. **Summary** (3-5 sentences)
   - What's the main message?
   - Who is this for?

3. **Key Points** (bullet list)
   - The main ideas/arguments
   - Limit to 5-7 points

4. **Notable Quotes** (with timestamps if available)
   - Memorable phrases
   - Insights worth saving

5. **Action Items / Ideas**
   - What should I do based on this?
   - Ideas it sparked

6. **Related Topics**
   - What else should I explore?

## Output Format
Markdown with frontmatter. Be concise - distill, don't transcribe."

### Step 2: Process a Sample Video
Here's a transcript excerpt to practice with:

"Process this YouTube video transcript:

Video: 'Marketing Your Craft Distillery in 2024'
Channel: Spirits Business Weekly
URL: https://youtube.com/watch?v=example

---
[0:00] welcome back to spirits business weekly today we're
talking about how small distilleries can compete with the
big brands on marketing [0:15] i've been visiting distilleries
across scotland and the ones winning aren't outspending
they're out-storying [0:30] first thing authenticity matters
more than production value people want real not polished
[1:00] show your process not just your product take people
behind the scenes [1:30] second user generated content is
gold encourage visitors to share and reshare everything
[2:00] third local partnerships punch above your weight
collaborate with local restaurants cheese makers chocolate
shops [2:45] fourth email is not dead your email list is
your most valuable asset own your audience don't rent it
from social platforms [3:30] finally consistency beats
virality post regularly rather than hoping for hits...
---

Save to week-2-outputs/youtube-marketing-distillery.md"

### Step 3: Add to Your Workflow
"Create a folder at 03-resources/video-notes/ for all processed
video notes. Add a README explaining the format."

### Step 4: Quick Capture Mode
Sometimes you just need the highlights:

"Create a slash command process-youtube-quick.md that only
extracts: 3-sentence summary, top 3 takeaways, and any action
items. Super concise."

## Your Turn
Find a YouTube video relevant to your work. Get the transcript
and process it. Add to your video notes collection.

## What You Learned
- YouTube transcripts are freely available
- Long videos distill into short, useful notes
- Quotes with timestamps are referenceable
- Two modes: full notes and quick capture

## Tomorrow
Day 11: PDF Crusher - Ripping data from PDF reports
Run `/w2.d11` when you're ready!

---
Day 10 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/process-youtube.md`
- `.claude/commands/process-youtube-quick.md`
- `youtube-marketing-distillery.md` with structured notes
- Video notes folder setup

---

## Day 11: PDF Crusher

**Slash Command:** `/w2.d11`
**Title:** Extracting Data from PDFs
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Extract text and data from PDF documents
- Handle different PDF types (text, scanned, tables)
- Create markdown summaries from reports
- Extract specific data points

### The Scenario
Fiona receives industry reports, supplier price lists, and regulatory documents - all as PDFs. The information is locked in. Time to unlock it.

### Video Content
1. **Hook:** "PDFs are where information goes to die. Let's resurrect it."
2. **Demo:**
   - Claude Code's PDF reading capabilities
   - Processing a multi-page report
   - Extracting tables as markdown
   - Creating summaries with key data
3. **Key moments:**
   - Show before (PDF) and after (markdown)
   - Handle a table extraction
   - Extract specific figures

### Slash Command Structure

```markdown
# Day 11: PDF Crusher

Liberate information locked in PDF documents.

## What We're Building
A system for extracting insights, data, and summaries from
PDF reports and documents.

## The Scenario
The Scotch Whisky Association sends quarterly industry reports.
40 pages of PDF. Fiona needs to know the three things that
affect Thistle & Thorn. Let's find them.

## Claude Code and PDFs
Claude Code can read PDF files directly. Just point it at the
file and ask questions.

## Let's Go

### Step 1: Create the PDF Processor
"Create a slash command at .claude/commands/process-pdf.md:

# Process PDF Document

You are helping me extract key information from a PDF document.

## Input
I'll provide a path to a PDF file.

## Your Task
1. Read the PDF content
2. Identify what type of document it is
3. Create a summary with:
   - Document title and source
   - Date/version
   - Key findings (bullet points)
   - Any tables or data as markdown tables
   - Action items or implications
   - Notable quotes

## Output Format
Markdown file with frontmatter including source file path.
Preserve important data, discard boilerplate.

If there are tables, convert them to markdown format."

### Step 2: Process a Sample PDF
Let's process an industry report:

"Read the PDF at [PATH TO SAMPLE PDF] and:
1. Tell me what type of document it is
2. Summarise the key points relevant to a craft distillery
3. Extract any statistics or data tables
4. Save the summary to week-2-outputs/industry-report-summary.md"

### Step 3: Targeted Extraction
Sometimes you need specific data:

"Create a slash command process-pdf-data.md that:
- Asks what specific data I'm looking for
- Searches the PDF for relevant sections
- Extracts only the requested information
- Outputs as a focused brief"

### Step 4: Handle Tables
PDF tables are tricky. Practice extracting them:

"If the PDF has any tables:
1. Identify all tables in the document
2. Convert the most relevant table to markdown format
3. Explain what the table shows"

### Step 5: Build a Reports Library
"Create a folder at 03-resources/reports/ for processed PDF
summaries. Add a README explaining the structure."

## Sample PDF Types to Practice

If you don't have PDFs handy, try:
- Any industry report (Google "[your industry] report 2024 pdf")
- A user manual for software you use
- A research paper from Google Scholar
- A government publication

## Your Turn
Find a PDF relevant to your work. Process it with your new
command. Extract at least one table or data set.

## What You Learned
- Claude Code reads PDFs natively
- Summaries beat re-reading 40-page documents
- Tables can be extracted as markdown
- Targeted extraction for specific data

## Tomorrow
Day 12: Web Archiver - Saving articles as clean markdown
Run `/w2.d12` when you're ready!

---
Day 11 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/process-pdf.md`
- `.claude/commands/process-pdf-data.md`
- `industry-report-summary.md`
- Reports folder setup

---

## Day 12: Web Archiver

**Slash Command:** `/w2.d12`
**Title:** Saving Web Articles as Markdown
**Duration:** Video 7 mins, Hands-on 12 mins

### Learning Objectives
- Fetch and clean web page content
- Strip ads, navigation, and clutter
- Save articles as clean markdown
- Build an article archive

### The Scenario
Jamie bookmarks interesting articles. The bookmarks pile up. Links break. Paywalls appear. Time to archive properly.

### Video Content
1. **Hook:** "Bookmarks break. Archives don't."
2. **Demo:**
   - Fetching web content
   - Cleaning HTML to markdown
   - Adding metadata and context
   - Organising an article library
3. **Key moments:**
   - Show cluttered webpage vs clean markdown
   - Handle different site structures
   - Add personal notes to archived content

### Slash Command Structure

```markdown
# Day 12: Web Archiver

Save web articles as clean, permanent markdown.

## What We're Building
An archiving system that captures web articles in clean markdown
with metadata, notes, and proper organisation.

## The Scenario
Jamie finds a brilliant article on whisky tourism trends.
Six months from now they'll want to reference it. But will
the link still work? Will it be paywalled? Archive it now.

## Let's Go

### Step 1: Create the Web Archiver
"Create a slash command at .claude/commands/archive-webpage.md:

# Archive Web Page

You are helping me save a web article as clean markdown.

## Input
I'll provide a URL.

## Your Task
1. Fetch the page content
2. Extract the main article content
3. Remove: ads, navigation, sidebars, footers, popups
4. Convert to clean markdown
5. Add frontmatter:
   - title
   - source (domain)
   - url
   - date-archived: today
   - tags (suggest based on content)
6. Preserve:
   - Headings structure
   - Key images (as markdown image links)
   - Important links
   - Author and date if available

## Output Format
Clean markdown with frontmatter. Reading-focused."

### Step 2: Archive a Sample Article
Let's archive something relevant:

"Archive this URL: [RELEVANT URL]

Save to 03-resources/articles/ with a slug-based filename."

### Step 3: Add Personal Notes
Make archived articles more useful:

"Update archive-webpage.md to also include:
- A 'My Notes' section at the end for personal annotations
- A 'Why I Saved This' prompt I should fill in
- A 'Key Quotes' section with 2-3 notable quotes"

### Step 4: Batch Archive
Sometimes you have a list of URLs:

"I'll give you a list of URLs. For each one, tell me the
title and ask if I want to archive it. Then process the
ones I approve."

### Step 5: Organise by Topic
"In my articles folder, create subfolders:
- marketing
- industry
- operations
- reference

Move any archived articles to appropriate subfolders."

## Good Sources to Archive

For practice, try archiving:
- A blog post you want to remember
- A how-to article for a tool you use
- An industry news piece
- A recipe or guide

## Your Turn
Archive 3 articles you've been meaning to save. Add personal
notes to each. Organise by topic.

## What You Learned
- Web content is ephemeral - archive what matters
- Clean markdown beats cluttered bookmarks
- Personal notes add context for future you
- Organisation makes retrieval easy

## Tomorrow
Day 13: Email Processor - Turning threads into action items
Run `/w2.d13` when you're ready!

---
Day 12 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/archive-webpage.md`
- Archived articles with clean formatting
- Articles folder with topic subfolders

---

## Day 13: Email Processor

**Slash Command:** `/w2.d13`
**Title:** Turning Email Threads into Action Items
**Duration:** Video 8 mins, Hands-on 15 mins

### Learning Objectives
- Process email threads to extract action items
- Summarise long email conversations
- Identify decisions and next steps
- Create follow-up tasks from emails

### The Scenario
Fiona's inbox is chaos. Buried in a 47-email thread with a supplier are three critical things she needs to do. Let's find them.

### Video Content
1. **Hook:** "Email is where tasks go to hide. Let's find them."
2. **Demo:**
   - Copying email threads into Claude
   - Extracting action items with owners
   - Summarising multi-party conversations
   - Creating follow-up tasks
3. **Key moments:**
   - Show overwhelming inbox
   - Process a complex thread
   - Clean task list output

### Slash Command Structure

```markdown
# Day 13: Email Processor

Extract action items and clarity from email chaos.

## What We're Building
A system for processing email threads into clear summaries,
decisions, and action items.

## The Scenario
47 emails between Fiona, Duncan (barley supplier), and their
accountant about pricing, delivery schedules, and payment
terms. Somewhere in there are decisions. Let's find them.

## Let's Go

### Step 1: Create the Email Processor
"Create a slash command at .claude/commands/process-email.md:

# Process Email Thread

You are helping me extract actionable information from an
email thread.

## Input
I'll paste an email thread. It may include:
- Multiple participants
- Replies and forwards
- Mixed topics
- Attached file references

## Your Task
Create a structured summary with:

1. **Thread Overview**
   - Subject
   - Participants
   - Date range
   - Topic summary (1-2 sentences)

2. **Key Decisions**
   - What was agreed or decided?
   - Who agreed to it?

3. **Action Items**
   Table: Action | Owner | Due Date | Context

4. **Open Questions**
   - What's still unresolved?
   - Who needs to respond?

5. **Attachments/References**
   - Files mentioned
   - Links shared

6. **Follow-up Required**
   - What should I do next?
   - Draft a response if needed

## Output Format
Clean markdown. Focus on actionable content."

### Step 2: Process a Sample Thread
Here's a sample email thread:

"Process this email thread:

---
From: Duncan <duncan@highland-barley.co.uk>
To: Fiona <fiona@thistle-thorn.com>
Subject: RE: RE: RE: Barley order Q1 2025

Fiona,

Following up on our call. I can confirm:
- 500kg at £2.10/kg for January delivery
- Same terms as last year
- Let me know by Dec 15 if you want the February option too

Need the PO number when you get a chance.

Duncan

---
From: Fiona <fiona@thistle-thorn.com>
To: Duncan <duncan@highland-barley.co.uk>
CC: sarah@thistle-thorn.com

Duncan,

Thanks. Can you also quote for 750kg in February? We might
need extra if the Christmas sales go well.

Sarah - can you send Duncan the PO number for January?

Fiona

---
From: Sarah <sarah@thistle-thorn.com>
To: Duncan <duncan@highland-barley.co.uk>
CC: fiona@thistle-thorn.com

Hi Duncan,

PO number is TT-2025-0012.

Payment terms: net 30 as usual?

Sarah
---

Save to week-2-outputs/barley-supplier-thread.md"

### Step 3: Quick Actions Mode
Sometimes you just want the tasks:

"Create a slash command process-email-actions.md that ONLY
outputs:
- Action items as a checklist
- With owners and due dates
- Nothing else"

### Step 4: Response Drafting
Add the ability to draft responses:

"Update process-email.md to include a section that drafts
a suggested response if one is needed. Mark it as 'Draft
Response (review before sending)'."

## Privacy Note
When processing emails, consider privacy:
- Remove sensitive information if sharing
- Process locally when possible
- Be mindful of confidential content

## Your Turn
Find an email thread that has buried action items. Process
it and extract the tasks. How many did you find that you'd
forgotten about?

## What You Learned
- Email threads hide important information
- Structured extraction reveals actions
- Multiple participants = multiple action owners
- Quick action mode for busy days

## Tomorrow
Day 14: Week 2 Review - Building your processing pipeline
Run `/w2.d14` when you're ready!

---
Day 13 of 31 | CoEngineers.ai
```

### Example Outputs
- `.claude/commands/process-email.md`
- `.claude/commands/process-email-actions.md`
- `barley-supplier-thread.md` with extracted actions

---

## Day 14: Week 2 Review

**Slash Command:** `/w2.d14`
**Title:** Building Your Processing Pipeline
**Duration:** Video 10 mins, Hands-on 20 mins

### Learning Objectives
- Review and consolidate Week 2 skills
- Build a unified "content processing pipeline"
- Create a master processor command
- Prepare for Week 3

### The Scenario
Jamie now has six processing commands. But they're separate. What if one command could route to the right processor automatically?

### Video Content
1. **Hook:** "Six tools. One pipeline. Zero friction."
2. **Demo:**
   - Review all Week 2 commands
   - Build a master processor
   - Show automatic routing
   - Preview Week 3
3. **Key moments:**
   - Unified command demo
   - Processing multiple content types in one session
   - Celebrate Week 2 completion

### Slash Command Structure

```markdown
# Day 14: Week 2 Review

Build your unified content processing pipeline.

## What We're Building
A master processor that routes content to the right handler
automatically, plus a Week 2 retrospective.

## This Week You Built

| Day | Command | Processes |
|-----|---------|-----------|
| 8 | `/process-meeting` | Meeting transcripts |
| 9 | `/process-voice-memo` | Voice recordings |
| 10 | `/process-youtube` | Video transcripts |
| 11 | `/process-pdf` | PDF documents |
| 12 | `/archive-webpage` | Web articles |
| 13 | `/process-email` | Email threads |

## Let's Go

### Step 1: Create the Master Processor
"Create a slash command at .claude/commands/process.md:

# Process Content

You are my content processing assistant.

## What I'll Give You
Any type of content:
- Meeting transcript
- Voice memo transcript
- YouTube video transcript
- PDF file path
- Web URL
- Email thread

## Your Task
1. Identify what type of content this is
2. Apply the appropriate processing approach:
   - Meetings → speakers, decisions, actions
   - Voice memos → ideas, observations, actions
   - YouTube → summary, key points, quotes
   - PDFs → summary, data extraction
   - Web → clean archive with metadata
   - Email → decisions, actions, follow-ups
3. Ask me where to save the output
4. Suggest what to do next

## Intelligence
- Infer content type from context
- Ask if you're not sure
- Combine approaches if content is mixed"

### Step 2: Test the Master Processor
Try it with different content types:

"Here's some content to process:

[PASTE ANY CONTENT TYPE]

Process it appropriately."

### Step 3: Review Your Commands
"List all the slash commands I created during Week 2. For each:
- Show the file path
- One-line description
- Count how many times I might have used it"

### Step 4: Create Week 2 Retrospective
"Create a retrospective at 01-projects/learning-claude-code/
week-2-retro.md with:
- Frontmatter: date, week: 2
- What I processed this week
- Which command I'll use most
- What I want to refine
- Ideas for new processors"

### Step 5: Prepare for Week 3
Week 3 is about creative outputs - using your processed
content to generate new assets.

"Review my 03-resources folder. What content do I have that
could be turned into:
- A presentation
- Social media posts
- Visual content
- Audio/video scripts

Give me 3 specific suggestions for Week 3."

## The Content Processing Pipeline

```
┌─────────────────────────────────────────────────┐
│              INPUTS                             │
│  Meetings  Voice  YouTube  PDF  Web  Email     │
└──────────────────────┬──────────────────────────┘
                       ↓
┌──────────────────────┴──────────────────────────┐
│              /process                           │
│         (auto-routes to right handler)          │
└──────────────────────┬──────────────────────────┘
                       ↓
┌──────────────────────┴──────────────────────────┐
│              OUTPUTS                            │
│  Structured notes in your vault                 │
│  Ready for Week 3 creative transformation       │
└─────────────────────────────────────────────────┘
```

## Your Turn
Process 3 different types of content through your master
processor. Verify each works correctly.

## What You Learned This Week

| Day | Skill | Superpower |
|-----|-------|------------|
| 8 | Meeting processing | 47 mins → 2 min summary |
| 9 | Voice memos | Rambling → organised |
| 10 | YouTube | Hours watched → notes kept |
| 11 | PDFs | Locked info → liberated |
| 12 | Web articles | Bookmarks → archives |
| 13 | Email | Chaos → action items |
| 14 | Pipeline | One command, any content |

## Ready for Week 3?
Week 3: Creative Outputs - From notes to assets that impress

We'll generate:
- Presentations (Gamma)
- Images (Gemini)
- Audio scripts (ElevenLabs)
- Diagrams (Mermaid)
- Social content
- Video briefs (HeyGen, Kling)

Run `/w3.d15` when you're ready!

---
Day 14 of 31 | CoEngineers.ai

🎉 Week 2 Complete!
```

### Example Outputs
- `.claude/commands/process.md` (master router)
- `week-2-retro.md`
- Verified processing pipeline

---

## Week 2 Materials Checklist

### Slash Commands to Create
- [ ] `/w2.d8` - Meeting Tamer
- [ ] `/w2.d9` - Voice to Text
- [ ] `/w2.d10` - YouTube Brain
- [ ] `/w2.d11` - PDF Crusher
- [ ] `/w2.d12` - Web Archiver
- [ ] `/w2.d13` - Email Processor
- [ ] `/w2.d14` - Week 2 Review

### Processing Commands Created
- [ ] `process-meeting.md`
- [ ] `process-voice-memo.md`
- [ ] `process-voice-ideas.md`
- [ ] `process-voice-actions.md`
- [ ] `process-youtube.md`
- [ ] `process-youtube-quick.md`
- [ ] `process-pdf.md`
- [ ] `process-pdf-data.md`
- [ ] `archive-webpage.md`
- [ ] `process-email.md`
- [ ] `process-email-actions.md`
- [ ] `process.md` (master router)

### Videos to Record
- [ ] Day 8: Meeting Tamer (8 mins)
- [ ] Day 9: Voice to Text (8 mins)
- [ ] Day 10: YouTube Brain (9 mins)
- [ ] Day 11: PDF Crusher (8 mins)
- [ ] Day 12: Web Archiver (7 mins)
- [ ] Day 13: Email Processor (8 mins)
- [ ] Day 14: Week Review (10 mins)

### Sample Content Needed
- [ ] Sample meeting transcript (messy)
- [ ] Sample voice memo transcript
- [ ] Sample YouTube transcript with timestamps
- [ ] Sample PDF report
- [ ] Sample email thread

---

*End of Week 2 Detailed Plan*
