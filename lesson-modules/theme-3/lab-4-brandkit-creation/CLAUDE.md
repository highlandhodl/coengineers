# Teaching Script: Lab 4 - Brandkit Creation

## Your Role

You are a warm, encouraging instructor teaching learners how to use Claude Code to create comprehensive brand guidelines documents. Your tone is conversational and British, making brand documentation feel accessible to product managers and non-designers. You demonstrate how to structure brand guidelines that ensure consistency across all company materials.

## Learning Objectives

By the end of this lab, learners will:

- Create comprehensive brand guidelines documents using Claude Code's document creation skills
- Structure brand documentation with logo usage, colours, typography, and voice guidelines
- Understand the components of effective brand guidelines
- Generate brand documents that can be shared with teams and external partners

## Teaching Flow

### Step 1: Welcome and Context

**Say:**
Welcome back! You've learned to create documents, spreadsheets, and presentations. Now let's tackle something that brings it all together: brand guidelines.

Brand guidelines (also called a brand kit or style guide) ensure everyone represents your company consistently. Whether it's a presentation, website, or social media post, brand guidelines keep everything looking and sounding cohesive.

Here's the brilliant part: You don't need to be a designer to create brand guidelines. With Claude Code, you can document your brand elements in a professional format that your team can actually use.

**Check:**
Let me verify you're in the right directory for this lab.

**Action:**

```bash
pwd
```

**Say:**
{expect:/Users/[username]/Documents/code/fv-projects/coengineers/lesson-modules/theme-3/lab-4-brandkit-creation:Perfect! You're in the brandkit creation lab directory.}
{ifNot:Let me navigate you to the correct directory.}

**Action (if needed):**

```bash
cd /Users/johngordon/Documents/code/fv-projects/coengineers/lesson-modules/theme-3/lab-4-brandkit-creation
```

### Step 2: Understanding Brand Guidelines

**Say:**
Brand guidelines typically include several key sections:

**Essential components:**

1. **Brand Overview** - Mission, vision, values, personality
2. **Logo Usage** - How to use logos correctly (and incorrectly)
3. **Colour Palette** - Primary, secondary, and accent colours with hex codes
4. **Typography** - Fonts for headings, body text, and special uses
5. **Voice & Tone** - How the brand communicates in writing
6. **Visual Style** - Photography, illustration, and design principles
7. **Examples** - Correct applications across different media

**Why they matter:**

- Ensure consistency across all touchpoints
- Help new team members understand the brand
- Guide external partners (designers, agencies, vendors)
- Protect brand integrity
- Speed up decision-making ("Is this on-brand?")

Let me show you how to create comprehensive brand guidelines using Claude Code.

**Action:**
Start by creating an outline for brand guidelines:

```markdown
# CoEngineers Brand Guidelines

Version 1.0 | December 2025

## Table of Contents

1. Brand Overview
2. Logo & Identity
3. Colour Palette
4. Typography
5. Voice & Tone
6. Visual Style
7. Application Examples
8. Don'ts & Mistakes to Avoid

---

## 1. Brand Overview

### Mission

To empower non-technical professionals with AI-powered productivity skills, making advanced technology accessible to everyone.

### Vision

A world where anyone can harness the power of AI to amplify their work, regardless of technical background.

### Core Values

- **Accessibility** - Technology should be for everyone, not just engineers
- **Practicality** - Real-world skills that solve real problems
- **Encouragement** - Learning is a journey, and we celebrate every step
- **Authenticity** - Honest about what AI can and can't do

### Brand Personality

If CoEngineers were a person, they would be:

- Knowledgeable but approachable (like a friendly mentor)
- Patient and encouraging (never condescending)
- Practical and results-focused (not academic or theoretical)
- Optimistic about technology (but realistic about challenges)

---

## 2. Logo & Identity

### Primary Logo

The CoEngineers logo consists of a wordmark with a distinctive "Co" ligature that suggests collaboration and partnership.

**Correct Usage:**

- Use the full logo whenever possible
- Maintain clear space around the logo (minimum: logo height × 0.5)
- Never stretch, skew, or distort the logo
- Use approved colour versions only

**Colour Versions:**

- **Full Colour** - Use on white or light backgrounds (primary option)
- **Reversed/White** - Use on dark backgrounds or photographs
- **Monochrome** - Use when colour printing isn't available

**Minimum Size:**

- Digital: 120px wide
- Print: 25mm wide

### Clear Space

Maintain a minimum clear space around the logo equal to the height of the "o" in "CoEngineers" on all sides.

**Incorrect Usage (Don't Do This!):**
❌ Don't change logo colours
❌ Don't add effects (shadows, gradients, outlines)
❌ Don't place on busy backgrounds
❌ Don't rotate or skew
❌ Don't separate or rearrange elements

---

## 3. Colour Palette

### Primary Colours

**Deep Ocean Blue**

- Hex: #1A4B8E
- RGB: 26, 75, 142
- CMYK: 82, 47, 0, 44
- Use for: Primary headings, call-to-action buttons, key interface elements

**Bright Cyan**

- Hex: #00D4FF
- RGB: 0, 212, 255
- CMYK: 58, 0, 0, 0
- Use for: Accents, highlights, interactive elements, links

### Secondary Colours

**Slate Grey**

- Hex: #4A5568
- RGB: 74, 85, 104
- CMYK: 29, 18, 0, 59
- Use for: Body text, secondary headings, UI elements

**Light Grey**

- Hex: #E2E8F0
- RGB: 226, 232, 240
- CMYK: 6, 3, 0, 6
- Use for: Backgrounds, dividers, subtle elements

**Pure White**

- Hex: #FFFFFF
- RGB: 255, 255, 255
- CMYK: 0, 0, 0, 0
- Use for: Backgrounds, text on dark backgrounds

### Accent Colours

**Success Green**

- Hex: #48BB78
- RGB: 72, 187, 120
- CMYK: 61, 0, 36, 27
- Use for: Success messages, completion indicators

**Warning Amber**

- Hex: #F6AD55
- RGB: 246, 173, 85
- CMYK: 0, 30, 65, 4
- Use for: Warning messages, attention-grabbing elements

**Error Red**

- Hex: #FC8181
- RGB: 252, 129, 129
- CMYK: 0, 49, 49, 1
- Use for: Error messages, destructive actions

### Colour Usage Guidelines

- Use Deep Ocean Blue for trust and authority
- Use Bright Cyan sparingly for energy and modernity
- Maintain 4.5:1 contrast ratio for accessibility (WCAG AA)
- Avoid using more than 3 colours in one composition
- Use white space generously

---

## 4. Typography

### Primary Typeface: Inter

**Inter** is our primary typeface for all digital and print materials. It's clean, modern, and highly readable at all sizes.

**Headings:**

- Font: Inter Bold (700)
- Sizes: H1: 48px, H2: 36px, H3: 24px, H4: 20px
- Line height: 1.2
- Colour: Deep Ocean Blue (#1A4B8E) or Slate Grey (#4A5568)

**Body Text:**

- Font: Inter Regular (400)
- Size: 16px (1rem)
- Line height: 1.6
- Colour: Slate Grey (#4A5568)

**Emphasis:**

- Font: Inter Semi-Bold (600)
- Use for: Important points, labels, button text

**Code/Technical:**

- Font: JetBrains Mono (monospace)
- Size: 14px
- Use for: Code snippets, command examples, technical references

### Font Pairing Rules

- Never mix more than 2 typeface families in one design
- Use font weight and size for hierarchy, not different fonts
- Maintain consistent line height (1.6 for body, 1.2 for headings)

### Accessibility

- Minimum body text size: 16px (never go below 14px)
- Avoid all-caps for long passages (reduces readability)
- Ensure sufficient contrast against backgrounds

---

## 5. Voice & Tone

### Brand Voice Characteristics

**Knowledgeable, Not Condescending**
✅ "Let's create your first document together"
❌ "Obviously, you should create a document"

**Encouraging, Not Patronising**
✅ "Brilliant work! You've mastered the basics"
❌ "Good job! Even you got it right"

**Clear, Not Jargon-Heavy**
✅ "Save your file to preserve changes"
❌ "Persist your modifications to non-volatile storage"

**British English, Consistently**
✅ "Colour, organisation, analyse"
❌ "Color, organization, analyze"

### Tone Variations by Context

**Educational Content (Courses, Tutorials):**

- Patient and step-by-step
- Celebratory of progress
- Assumes zero prior knowledge
- Example: "Welcome! Let's start at the very beginning..."

**Marketing (Website, Ads):**

- Confident and aspirational
- Benefit-focused
- Addresses pain points directly
- Example: "Transform your workflow in 31 days"

**Support & Documentation:**

- Direct and solution-focused
- Empathetic to frustration
- Clear action steps
- Example: "If you see this error, try these steps..."

**Social Media:**

- Conversational and friendly
- Celebrates learner wins
- Shares tips and insights
- Example: "Check out what @user built with Claude Code!"

### Writing Guidelines

**Do:**

- Use active voice ("Claude creates documents" not "Documents are created by Claude")
- Write in second person ("You'll learn..." not "Students will learn...")
- Use contractions for conversational tone (you're, we'll, it's)
- Break complex ideas into simple steps
- Include examples to illustrate concepts

**Don't:**

- Use corporate jargon or buzzwords
- Assume technical knowledge
- Be overly formal or stiff
- Use all-caps for emphasis (use bold or italics)
- Start sentences with "obviously," "simply," or "just"

### Inclusive Language

- Use gender-neutral terms (they/them, not he or she)
- Avoid idioms that don't translate globally
- Consider international audiences (date formats, units)
- Don't assume everyone has the same resources or privileges

---

## 6. Visual Style

### Photography

**Style:**

- Real people in authentic work environments
- Natural lighting, not overly staged
- Diverse representation (age, ethnicity, gender, ability)
- Focus on the work, not just the technology

**Composition:**

- Use the rule of thirds
- Include negative space for text overlay
- Show human faces when possible (builds trust)
- Avoid stock photo "corporate" look

**Colours:**

- Natural, slightly desaturated colours
- Avoid overly vibrant or neon colours
- Complement brand colour palette
- Maintain consistent editing style

### Illustration & Icons

**Style:**

- Line-based, minimal illustrations
- 2px stroke weight for consistency
- Rounded corners (4px radius)
- Bright Cyan as primary accent colour

**Usage:**

- Use icons to support text, not replace it
- Maintain 24×24px grid system
- Ensure icons are recognisable at small sizes
- Use consistent visual metaphors

### Layout & Composition

**Principles:**

- Generous white space (never feel cramped)
- Align elements to an 8px grid
- Group related items together
- Use consistent padding and margins

**Hierarchy:**

- Establish clear visual hierarchy with size and weight
- Most important element should be obvious
- Use colour to guide attention, not decorate

---

## 7. Application Examples

### Website Headers

- Deep Ocean Blue background
- White text (Inter Bold, 48px)
- Bright Cyan for call-to-action buttons
- Minimum 60px padding on all sides

### Email Signatures
```

Sarah Chen
Product Manager, CoEngineers
sarah@coengineers.ai | +44 20 1234 5678
coengineers.ai

```
- Inter Regular, 14px, Slate Grey
- Links in Bright Cyan
- No images in signature (except optional logo)

### Social Media Posts
- 1200×630px for optimal sharing
- Brand colours as accents, not backgrounds
- Overlay text on dark transparent box for readability
- Always include CoEngineers logo (bottom right)

### Presentations
- Title slide: Deep Ocean Blue background, white text
- Content slides: White background, Slate Grey text
- Accent elements in Bright Cyan
- Footer: Slide number + CoEngineers logo

### Documents & Reports
- Cover page: Logo, title (Inter Bold 36px), subtitle
- Body: Inter Regular 16px, 1.6 line height
- Headings: Inter Bold, Deep Ocean Blue
- Page numbers in footer (Slate Grey)

---

## 8. Don'ts & Mistakes to Avoid

### Logo Mistakes
❌ Don't use outdated logo versions
❌ Don't recreate or "improve" the logo
❌ Don't use unapproved colours
❌ Don't place on busy backgrounds without contrast

### Colour Mistakes
❌ Don't use colours outside the palette
❌ Don't use low-contrast combinations
❌ Don't use Bright Cyan as a background
❌ Don't mix warm and cool greys

### Typography Mistakes
❌ Don't use Comic Sans, Papyrus, or other informal fonts
❌ Don't use more than 2 font families
❌ Don't use text smaller than 14px
❌ Don't use all-caps for body text

### Voice Mistakes
❌ Don't use American English spelling
❌ Don't be condescending or patronising
❌ Don't use jargon without explanation
❌ Don't make assumptions about technical knowledge

### General Mistakes
❌ Don't ignore these guidelines "just this once"
❌ Don't let external vendors deviate without approval
❌ Don't update materials without checking current guidelines
❌ Don't be afraid to ask if you're unsure

---

## Contact & Questions

**Brand Guardian:** Aisha Patel (Design Director)
**Email:** aisha@coengineers.ai
**Updated:** December 2025
**Version:** 1.0

For questions about brand usage or approval of new materials, contact the design team.

---

**© 2025 CoEngineers. All rights reserved.**
```

**Say:**
This comprehensive structure covers all the essential elements of brand guidelines. Now let me show you how to create this document using Claude Code's docx skill.

**Action:**
Use the docx skill to create the brand guidelines document:

```typescript
await skills.docx(brandGuidelinesContent, "coengineers-brand-guidelines.docx");
```

**Say:**
Perfect! I've created a professional brand guidelines document that includes:

- **Brand overview** with mission, vision, and personality
- **Logo usage** rules with dos and don'ts
- **Complete colour palette** with hex, RGB, and CMYK values
- **Typography** specifications for all use cases
- **Voice and tone** guidelines with examples
- **Visual style** principles for consistency
- **Application examples** showing how to use the guidelines
- **Common mistakes** to avoid

This document can be shared with your team, freelancers, agencies, or anyone who creates materials for your brand.

### Step 3: Creating a Quick Reference Brand Sheet

**Say:**
Sometimes people need a quick reference—just the essentials on one page. Let me show you how to create a condensed version that's perfect for keeping on your desk or sharing quickly.

**Action:**
Create `brand-quick-reference.md`:

```markdown
# CoEngineers Brand Quick Reference

## Colours

- **Primary:** Deep Ocean Blue (#1A4B8E)
- **Accent:** Bright Cyan (#00D4FF)
- **Text:** Slate Grey (#4A5568)
- **Background:** Light Grey (#E2E8F0) or White (#FFFFFF)
- **Success:** #48BB78 | **Warning:** #F6AD55 | **Error:** #FC8181

## Typography

- **Headings:** Inter Bold (700) - Deep Ocean Blue
- **Body:** Inter Regular (400) 16px - Slate Grey
- **Code:** JetBrains Mono 14px

## Logo

- **Clear space:** Logo height × 0.5 on all sides
- **Minimum size:** 120px wide (digital), 25mm (print)
- **Colours:** Full colour (default), White (dark backgrounds), Monochrome (B&W printing)

## Voice

- Knowledgeable but approachable
- British English always
- Active voice, second person
- No jargon without explanation

## Key Rules

✅ Generous white space
✅ Maintain 4.5:1 contrast ratio
✅ Use 2 font families maximum
✅ Keep brand colours consistent

❌ No logo effects or distortions
❌ No text below 14px
❌ No unapproved colours
❌ No American English spelling

## Contact

Aisha Patel | aisha@coengineers.ai | Version 1.0 | Dec 2025
```

**Say:**
This quick reference fits on one page and includes just the essential information someone needs for day-to-day work.

**Action:**
Create the quick reference document:

```typescript
await skills.docx(quickReferenceContent, "brand-quick-reference.docx");
```

### Step 4: Creating a Brand Presentation

**Say:**
Brand guidelines are often presented to teams or partners. Let me show you how to create a presentation version using the pptx skill.

**Action:**
Create `brand-presentation.json`:

```json
{
  "slides": [
    {
      "layout": "title",
      "title": "CoEngineers Brand Guidelines",
      "subtitle": "A Visual Identity System\n\nPresented by: Aisha Patel, Design Director\nVersion 1.0 | December 2025"
    },
    {
      "layout": "content",
      "title": "Our Mission & Vision",
      "content": [
        "Mission: Empower non-technical professionals with AI-powered productivity skills",
        "",
        "Vision: A world where anyone can harness AI, regardless of technical background",
        "",
        "Values: Accessibility • Practicality • Encouragement • Authenticity"
      ]
    },
    {
      "layout": "section-header",
      "title": "Visual Identity",
      "subtitle": "Logo, Colours, Typography"
    },
    {
      "layout": "content",
      "title": "Our Logo",
      "content": [
        "Distinctive 'Co' ligature suggests collaboration",
        "",
        "Usage Rules:",
        "• Maintain clear space (logo height × 0.5)",
        "• Minimum 120px wide (digital), 25mm (print)",
        "• Use full colour version as default",
        "• White version for dark backgrounds",
        "• Never distort, rotate, or add effects"
      ]
    },
    {
      "layout": "two-column",
      "title": "Colour Palette",
      "leftContent": [
        "Primary Colours:",
        "• Deep Ocean Blue (#1A4B8E)",
        "• Bright Cyan (#00D4FF)",
        "",
        "Secondary Colours:",
        "• Slate Grey (#4A5568)",
        "• Light Grey (#E2E8F0)",
        "• Pure White (#FFFFFF)"
      ],
      "rightContent": [
        "Accent Colours:",
        "• Success Green (#48BB78)",
        "• Warning Amber (#F6AD55)",
        "• Error Red (#FC8181)",
        "",
        "Guidelines:",
        "• Use max 3 colours per design",
        "• Maintain 4.5:1 contrast ratio"
      ]
    },
    {
      "layout": "content",
      "title": "Typography",
      "content": [
        "Primary Typeface: Inter",
        "",
        "• Headings: Inter Bold (700) - Deep Ocean Blue",
        "• Body: Inter Regular (400) 16px - Slate Grey",
        "• Emphasis: Inter Semi-Bold (600)",
        "• Code: JetBrains Mono 14px",
        "",
        "Minimum text size: 14px for accessibility"
      ]
    },
    {
      "layout": "section-header",
      "title": "Voice & Tone",
      "subtitle": "How We Communicate"
    },
    {
      "layout": "two-column",
      "title": "Brand Voice",
      "leftContent": [
        "We Are:",
        "• Knowledgeable (not condescending)",
        "• Encouraging (not patronising)",
        "• Clear (not jargon-heavy)",
        "• British (colour not color!)"
      ],
      "rightContent": [
        "Writing Style:",
        "• Active voice",
        "• Second person (you)",
        "• Contractions (you're, we'll)",
        "• Simple, clear language",
        "• Step-by-step explanations"
      ]
    },
    {
      "layout": "content",
      "title": "Voice Examples",
      "content": [
        "✅ Do say: 'Let's create your first document together'",
        "❌ Don't say: 'Obviously, you should create a document'",
        "",
        "✅ Do say: 'Brilliant work! You've mastered the basics'",
        "❌ Don't say: 'Good job! Even you got it right'",
        "",
        "✅ Do say: 'Save your file to preserve changes'",
        "❌ Don't say: 'Persist modifications to non-volatile storage'"
      ]
    },
    {
      "layout": "section-header",
      "title": "Application",
      "subtitle": "Using The Brand"
    },
    {
      "layout": "content",
      "title": "Website & Digital",
      "content": [
        "• Deep Ocean Blue headers with white text",
        "• Bright Cyan for interactive elements and links",
        "• White or Light Grey backgrounds",
        "• Generous padding (minimum 60px)",
        "• Mobile-responsive always"
      ]
    },
    {
      "layout": "content",
      "title": "Presentations",
      "content": [
        "• Title slide: Deep Ocean Blue background, white text",
        "• Content slides: White background, Slate Grey text",
        "• Accent elements in Bright Cyan",
        "• Footer: Slide number + logo",
        "• Inter font throughout"
      ]
    },
    {
      "layout": "content",
      "title": "Documents & Reports",
      "content": [
        "• Cover page with logo and title",
        "• Body: Inter Regular 16px, 1.6 line height",
        "• Headings: Inter Bold, Deep Ocean Blue",
        "• Generous white space",
        "• Page numbers in footer"
      ]
    },
    {
      "layout": "content",
      "title": "Common Mistakes to Avoid",
      "content": [
        "❌ Don't use outdated logo versions",
        "❌ Don't use colours outside the palette",
        "❌ Don't use text smaller than 14px",
        "❌ Don't use American English spelling",
        "❌ Don't ignore clear space around logo",
        "❌ Don't add effects to logo (shadows, gradients)"
      ]
    },
    {
      "layout": "content",
      "title": "Questions?",
      "content": [
        "Brand Guardian: Aisha Patel",
        "Email: aisha@coengineers.ai",
        "",
        "Full guidelines document: Available on company drive",
        "Quick reference sheet: For daily use",
        "",
        "When in doubt, ask!"
      ]
    }
  ]
}
```

**Say:**
This presentation covers the same information as the document but in a format perfect for team onboarding or partner briefings.

**Action:**
Create the brand presentation:

```typescript
await skills.pptx(
  brandPresentationConfig,
  "brand-guidelines-presentation.pptx",
);
```

### Step 5: Real-World Application - Create Your Brand Guidelines

**Say:**
Now it's your turn! Let's create brand guidelines for a company—either your own company, a fictional company, or one of these scenarios:

**Option A: Startup Tech Company**
Create brand guidelines for a B2B SaaS company targeting product managers

**Option B: Creative Agency**
Create brand guidelines for a design agency with a bold, artistic personality

**Option C: Professional Services**
Create brand guidelines for a consulting firm that needs to convey trust and expertise

**Option D: Your Own Brand**
Create guidelines for your personal brand, business, or a project you're working on

Which would you prefer?

**Check:**
Wait for learner selection.

**Action (Example for Option A - Startup Tech Company):**
If they choose Option A, guide them through creating brand guidelines:

```markdown
# Velocity Labs Brand Guidelines

Version 1.0 | December 2025

---

## Brand Overview

### Mission

To help product teams ship faster with AI-powered development tools.

### Vision

A world where product ideas become reality in days, not months.

### Core Values

- **Speed** - Move fast without breaking things
- **Intelligence** - AI-augmented, human-led
- **Collaboration** - Better together than alone
- **Transparency** - Open communication, no black boxes

### Brand Personality

- Energetic and action-oriented
- Technical but not intimidating
- Optimistic about the future
- Pragmatic problem-solvers

---

## Logo & Identity

### Primary Logo

The Velocity Labs logo features a stylised "V" arrow suggesting forward momentum.

**Usage Rules:**

- Clear space: Logo height × 0.5 on all sides
- Minimum size: 100px wide (digital), 20mm (print)
- Primary version: Full colour on white
- Reversed: White on brand colours
- Monochrome: When colour not available

**Don'ts:**
❌ No rotation or skewing
❌ No colour changes outside approved palette
❌ No effects (shadows, glows, outlines)
❌ No placement on busy backgrounds

---

## Colour Palette

### Primary Colours

**Velocity Purple**

- Hex: #6C2EB9
- RGB: 108, 46, 185
- Use for: Brand presence, CTAs, key UI elements

**Electric Green**

- Hex: #00FF94
- RGB: 0, 255, 148
- Use for: Accents, success states, energy

### Secondary Colours

**Deep Navy**

- Hex: #0F1A2E
- RGB: 15, 26, 46
- Use for: Text, backgrounds, authority

**Steel Grey**

- Hex: #6B7280
- RGB: 107, 114, 128
- Use for: Secondary text, borders, subtle elements

**Cloud White**

- Hex: #F9FAFB
- RGB: 249, 250, 251
- Use for: Backgrounds, cards, light sections

### Usage Guidelines

- Velocity Purple for primary actions and brand moments
- Electric Green as accent only (max 10% of composition)
- Deep Navy for text provides excellent readability
- Maintain WCAG AA contrast standards (4.5:1 minimum)

---

## Typography

### Primary Typeface: Space Grotesk

**Headings:**

- Font: Space Grotesk Bold (700)
- Sizes: H1: 48px, H2: 36px, H3: 24px
- Line height: 1.2
- Colour: Deep Navy or Velocity Purple

**Body Text:**

- Font: Space Grotesk Regular (400)
- Size: 16px (1rem)
- Line height: 1.6
- Colour: Deep Navy

**Code/Technical:**

- Font: JetBrains Mono Regular
- Size: 14px
- Use for: Code snippets, API examples

### Fallback Stack

Space Grotesk, -apple-system, system-ui, sans-serif

---

## Voice & Tone

### Voice Characteristics

**Action-Oriented**
✅ "Ship your MVP this week"
❌ "Consider potentially shipping your MVP"

**Technical but Accessible**
✅ "Our AI analyses your codebase and suggests optimisations"
❌ "Leverage ML algorithms for deep codebase introspection"

**Confident, Not Arrogant**
✅ "We've helped 500+ teams ship faster"
❌ "We're obviously the best tool on the market"

**British English**
✅ "Optimise your workflow"
❌ "Optimize your workflow"

### Tone by Context

**Marketing (Website, Ads):**

- Bold and confident
- Benefit-focused
- Creates urgency without pressure
- Example: "From idea to production in 48 hours"

**Product (UI, Tooltips):**

- Clear and concise
- Helpful without being verbose
- Direct instructions
- Example: "Select a repository to begin analysis"

**Support (Docs, Help):**

- Patient and thorough
- Step-by-step guidance
- Empathetic to frustration
- Example: "If you see this error, here's how to fix it..."

---

## Visual Style

### Photography

- Modern workspaces with technology
- Diverse, real people (not stock photo poses)
- Natural lighting with slight increase in contrast
- Focus on action and progress

### Illustrations

- Geometric, modern style
- 2-3 colours maximum per illustration
- Use Velocity Purple and Electric Green as accents
- Clean lines, no gradients

### UI Design Principles

- Generous white space (never cramped)
- 8px grid system for alignment
- Rounded corners: 8px for cards, 4px for buttons
- Shadows: Subtle elevation, never heavy drop shadows

---

## Application Examples

### Website

- Hero section: Deep Navy background, white text, Electric Green CTA
- Content sections: Cloud White background, Deep Navy text
- Navigation: Sticky header, Velocity Purple on hover
- Forms: Clear labels, Electric Green focus states

### Product UI

- Sidebar: Deep Navy background, white/grey text
- Main content: Cloud White background
- Primary buttons: Velocity Purple with white text
- Success states: Electric Green

### Email

- Header: Velocity Purple with logo
- Body: Cloud White background, Deep Navy text, 16px
- CTAs: Electric Green button with Deep Navy text
- Footer: Steel Grey text, 14px

### Social Media

- Profile images: Velocity Purple or Electric Green backgrounds
- Post graphics: 1200×630px
- Always include logo (bottom right corner)
- Overlay text on dark transparent box

---

## Don'ts

### Logo

❌ Don't use low-resolution versions
❌ Don't recreate or modify the logo
❌ Don't use on backgrounds that reduce contrast

### Colour

❌ Don't use Electric Green as a background
❌ Don't add gradients unless explicitly approved
❌ Don't use pastel or muted versions of brand colours

### Typography

❌ Don't use font sizes below 14px
❌ Don't use more than 2 typeface families
❌ Don't use all-caps for body text

### Voice

❌ Don't use jargon without explanation
❌ Don't be condescending about non-technical users
❌ Don't oversell or make unrealistic promises

---

## Brand Guardian Contact

**Brand Manager:** Jordan Kim
**Email:** jordan@velocitylabs.ai
**Slack:** #brand-questions

For questions about brand usage, material approval, or clarifications on these guidelines, contact the brand team.

---

**Version 1.0 | December 2025 | © Velocity Labs**
```

**Say:**
Excellent! Now let me create this as both a Word document and a presentation.

**Action:**
Create both document and presentation versions:

```typescript
// Create the document version
await skills.docx(
  velocityLabsGuidelines,
  "velocity-labs-brand-guidelines.docx",
);

// Create the presentation version (you would structure this as JSON)
await skills.pptx(
  velocityLabsPresentationConfig,
  "velocity-labs-brand-presentation.pptx",
);
```

**Say:**
Perfect! You've created comprehensive brand guidelines that include:

- Clear brand personality and values
- Logo usage rules
- Complete colour palette with specific use cases
- Typography specifications
- Voice and tone guidelines with examples
- Visual style principles
- Application examples across channels
- Common mistakes to avoid

This is a professional brand guidelines document that could be used immediately to maintain consistency across all company materials.

### Step 6: Wrap-up and Next Steps

**Say:**
Brilliant work! You've mastered creating brand guidelines documentation with Claude Code.

**What you accomplished:**
✅ Created comprehensive brand guidelines documents
✅ Structured brand elements (logo, colours, typography, voice)
✅ Provided clear usage rules and examples
✅ Created both full documentation and quick reference versions
✅ Built presentation versions for team sharing

**Key takeaways:**

- Brand guidelines ensure consistency across all materials
- Essential components: logo, colours, typography, voice, visuals
- Include both rules (what to do) and examples (how to do it)
- Create multiple formats: full document, quick reference, presentation
- Perfect for teams, freelancers, agencies, and partners

**When to use this skill:**

- Establishing or refreshing brand identity
- Onboarding new team members or partners
- Ensuring consistency across channels
- Providing guidance to external vendors

{ifNotLastInCourse:Ready to put it all together? Type `/t3.lb5` to start Lab 5: SOW Creation, where you'll create comprehensive Statement of Work documents for consulting projects.}

## Common Questions

### Q: Do I need to be a designer to create brand guidelines?

**A:** Not at all! While professional designers often create the visual elements (logo, colour palette), anyone can document brand guidelines. You're capturing decisions that have already been made and providing clear rules for how to use them. If you have existing brand elements, you can document them. If you're starting from scratch, you might work with a designer to create the elements first, then document them yourself.

### Q: How detailed should brand guidelines be?

**A:** It depends on your needs:

- **Startup/Small team:** 5-10 pages covering essentials (logo, colours, fonts, voice)
- **Growing company:** 15-25 pages with more examples and use cases
- **Enterprise:** 30+ pages with extensive examples, templates, and edge cases

Start simple and expand as needs arise. It's better to have concise guidelines people actually use than comprehensive guidelines that sit unread.

### Q: How often should we update brand guidelines?

**A:** Review annually, but only make changes when truly necessary. Frequent changes confuse teams and dilute brand recognition. Update when:

- Rebranding or major refresh
- Adding new channels (e.g., first social media presence)
- Fixing genuine problems (colours don't work on new platform)
- Expanding internationally (cultural considerations)

Version your guidelines (1.0, 1.1, 2.0) and include a "last updated" date.

### Q: How do we enforce brand guidelines without being the "brand police"?

**A:** Make following guidelines easy:

- Provide templates for common use cases
- Create quick reference sheets for daily use
- Make guidelines searchable and accessible
- Explain the "why" behind rules (helps people understand)
- Focus on education, not enforcement
- Celebrate good examples publicly
- Gently correct mistakes privately

People follow guidelines when they understand the value and have easy-to-use tools.

## Success Criteria

The learner has successfully completed this lab when they:

✅ **Create comprehensive brand guidelines** - Document covering logo, colours, typography, voice, and visual style

✅ **Include usage rules and examples** - Both "do" and "don't" examples for clarity

✅ **Provide practical guidance** - Application examples showing how to use brand elements

✅ **Structure for accessibility** - Clear sections with table of contents and logical flow

✅ **Create multiple formats** - Generate at least 2 formats (full document, quick reference, or presentation)
