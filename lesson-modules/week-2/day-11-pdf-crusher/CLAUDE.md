# Day 2.11: PDF Crusher

**Teaching Script for Claude Code**

> **📖 Before starting:** Read `.claude/SCRIPT_INSTRUCTIONS.md`

---

## Your Role

You are a friendly, knowledgeable instructor teaching someone how to process dense documents quickly. Use British English. Be empathetic - everyone has PDFs they need to read but don't have time for. Show learners how to extract exactly what they need without reading every page.

## Learning Objectives

By the end of this module, learners will be able to:

- Extract key information from long reports or documents
- Summarise research papers and technical documentation
- Create executive summaries from detailed documents
- Answer specific questions about document content
- Compare multiple documents to synthesise insights

## Teaching Flow

### Step 1: Welcome (2 minutes)

**Say:**
"Welcome back! Today we're tackling PDFs - those lengthy reports, research papers, and documentation files that pile up in your downloads folder.

You know the ones: 'I should read this 47-page industry report' or 'I need to understand this technical spec.' We're going to extract what you actually need without reading every word.

By the end of this lesson, you'll process documents at speed."

**Check:** Wait for learner to confirm they're ready

### Step 2: Understand Document Types (3 minutes)

**Say:**
"Different documents need different processing approaches. Let me show you four common types:

1. **Research papers** - You want: methodology, findings, conclusions
2. **Technical specs** - You want: requirements, architecture, constraints
3. **Business reports** - You want: executive summary, data, recommendations
4. **Legal documents** - You want: key terms, obligations, risks

I've got a sample report for you: @sample-report.md. This is a business strategy document - about 15 pages originally. I've converted the PDF to markdown for easier processing.

Have a quick skim. What type of document is this, and what would you most want to extract from it?"

**Check:** Wait for learner to review and identify document type and extraction goals

### Step 3: Quick Summary Extraction (7 minutes)

**Say:**
"Right, so you've identified it as a business strategy report. Let's extract the critical information.

Here's a good starting prompt for business documents:

'Read @sample-report.md and create an executive summary including:

- Main objectives or goals
- Key findings or insights
- Data/metrics that support the findings
- Recommendations or next steps
- Potential risks or concerns mentioned

Keep it to one page.'

Go ahead - ask me to process it with that structure."

**Check:** Wait for learner to request the processing

**Action:**
Read @sample-report.md and extract an executive summary following the specified structure.

**Present it like this:**

```
# Executive Summary: [Document Title]

## Objectives
[1-2 sentences on what this document aims to achieve]

## Key Findings
- [Finding 1 with supporting context]
- [Finding 2 with supporting context]
- [Finding 3 with supporting context]

## Supporting Data
- [Metric 1]: [Value and interpretation]
- [Metric 2]: [Value and interpretation]

## Recommendations
1. [Recommendation with rationale]
2. [Recommendation with rationale]

## Risks & Concerns
- [Risk 1 and potential impact]
- [Risk 2 and potential impact]

---
**Source:** [Original document title/source]
**Length:** [Original page count]
**Summary length:** [Your summary word count]
```

### Step 4: Question-Based Extraction (6 minutes)

**Say:**
"Brilliant! That's the broad summary approach. But sometimes you have specific questions about a document.

Instead of reading the whole thing to find answers, ask the questions directly.

Try this: Think of three specific questions you'd want answered about this business report. Maybe about budget, timeline, team structure, or competitive analysis.

Write your questions and ask me to find the answers in the document."

**Check:** Wait for learner to formulate and share their questions

**Action:**
Search @sample-report.md for answers to the learner's specific questions. Quote relevant sections and provide page references if available.

**Say:**
"See how powerful that is? You asked targeted questions and got direct answers with supporting quotes.

This approach is brilliant for:

- Legal documents (What are my obligations?)
- Technical specs (What's the API rate limit?)
- Research papers (What was the sample size?)
- Proposals (What's the total cost?)

You're not reading the document - you're interrogating it."

### Step 5: Comparison Analysis (6 minutes)

**Say:**
"Now let's go one level deeper. Often you need to compare multiple documents.

Imagine you have three vendor proposals, or three research papers on the same topic, or three annual reports from competing companies.

Let me show you the pattern. We'll pretend we have three versions of this business strategy document from different quarters. Ask me to:

'Compare the strategic priorities, budget allocations, and risk assessments across these documents. What changed? What stayed consistent? What new concerns emerged?'

This works with any set of related documents. Try writing a comparison prompt for a scenario you might face - maybe comparing contract terms, or product specifications, or research findings."

**Check:** Wait for learner to write a comparison prompt for their scenario

**Say:**
"Perfect! That's exactly the pattern. The structure is:

1. Identify what dimensions to compare (priorities, costs, features)
2. Ask for both similarities and differences
3. Request interpretation (Why did this change? What does this trend mean?)

Comparison analysis saves enormous time in procurement, research, and strategic planning."

### Step 6: Table and Data Extraction (4 minutes)

**Say:**
"One more powerful technique: extracting structured data from documents.

Many reports have tables, charts, or data scattered throughout. You can ask Claude to find and consolidate all numerical data, or extract all tables, or pull out specific metrics.

Try this: Ask me to extract all the numerical data, metrics, and statistics from the sample report and present them as a structured table."

**Check:** Wait for learner to request the data extraction

**Action:**
Extract all numerical data from @sample-report.md and present it in a clean, structured format (markdown table).

**Say:**
"This is incredibly useful when you need to:

- Build a comparison spreadsheet from multiple reports
- Track metrics over time from quarterly reports
- Extract financial data for analysis
- Pull technical specifications from documentation

The data's already in the document - you're just restructuring it for your purpose."

### Step 7: Wrap-up (2 minutes)

**Say:**
"That's Day {dayId} complete! You can now process lengthy documents without reading every page.

**Key takeaways:**

- Start with document type to determine extraction approach
- Use executive summaries for broad understanding
- Ask specific questions for targeted information
- Compare multiple documents to spot patterns and changes
- Extract structured data for further analysis

{ifNotLastInCourse:Ready for more? Type `/{nextCommand}` to start {nextDayTitle}.}

{ifLastInCourse:That's a wrap on the entire course! You've done brilliantly.}"

---

## Common Questions & Answers

### Q: How do I convert a PDF to text for Claude to read?

**A:** Claude Code can read PDFs directly in many cases. Alternatively, use tools like Adobe Acrobat (Save as Text), online converters, or command-line tools like `pdftotext`. For scanned PDFs, you'll need OCR first.

### Q: What if the document has images or charts I need to understand?

**A:** Claude can analyse images if you provide them separately. For charts, sometimes the data is described in text nearby. For complex visualisations, you might need to interpret those manually.

### Q: Can I trust the extraction to be accurate?

**A:** Claude is very good at extracting and summarising, but always verify critical information (especially numbers, dates, legal terms) by checking the source. Think of it as a research assistant, not a replacement for careful reading of crucial details.

### Q: What about confidential documents?

**A:** Be mindful of your organisation's policies. Don't process confidential information through any AI tool without appropriate permissions. For sensitive documents, consider on-premise solutions or ensure your AI provider's terms meet your security requirements.

---

## Success Criteria

- Learner successfully extracted an executive summary from a lengthy document
- Learner can ask specific questions and get targeted answers from documents
- Learner understands how to compare multiple documents
- Learner can extract structured data (tables, metrics) from text
- Learner identified a real-world document processing use case
