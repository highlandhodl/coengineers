# Product Requirements Prompt (PRP): Reading List Manager

A filled-out example PRP showing how to use the template effectively.

---

## Product Overview

### Product Name

Readwise Lite

### One-Line Description

A simple web app that helps me track articles I want to read, tag them by topic, and mark them complete when I'm done.

### Problem Statement

I save dozens of articles to read "later" but never have a good system to actually go through them. Browser bookmarks are a mess, Pocket feels too complex, and I just want something dead simple that I can check during my morning coffee.

### Target Users

**Primary user:** Me (and people like me)

- Knowledge workers who read lots of online content
- Want to be intentional about reading, not just accumulate links
- Value simplicity over features
- Comfortable with web apps

**Not for:**

- People who need social sharing features
- Teams (this is personal use)
- People who want automatic recommendations

---

## Core Functionality

### Must-Have Features

1. **Add Articles**
   - What it does: Paste a URL, automatically grab title and description
   - Why it's essential: Core value - can't track articles without adding them

2. **Categorise with Tags**
   - What it does: Add multiple tags per article (e.g., "startups", "AI", "design")
   - Why it's essential: Need to organise by topic so I can read related things together

3. **Mark as Read**
   - What it does: Simple toggle to mark complete, removes from main view
   - Why it's essential: Need to track progress and clear completed items

4. **Filter by Tag**
   - What it does: Click a tag to see only articles with that tag
   - Why it's essential: Want to do themed reading sessions

5. **Reading List View**
   - What it does: Clean list of unread articles, sorted by date added (newest first)
   - Why it's essential: This is the main interface - needs to be quick to scan

### Nice-to-Have Features

1. Browser extension to add articles from any page
2. Estimated reading time for each article
3. Search functionality
4. Dark mode
5. Export to Markdown
6. Archive (separate from "read" - for articles I want to keep but not in main view)

### Explicitly Out of Scope

1. Social features (sharing, following others)
2. Article recommendations or algorithms
3. Full article text storage (just links)
4. Mobile native app (web-only for now)
5. Collaboration or team features
6. RSS feed integration
7. Highlighting or annotations

---

## User Experience

### Primary User Flow

1. User lands on clean homepage showing their reading list
2. See big "Add Article" button at top
3. Paste URL, hit enter
4. Article appears in list with auto-grabbed title
5. Click to add tags (quick tag interface, can create new tags on the fly)
6. Article now shows in list with tags visible
7. Click tag to filter view to just that topic
8. Click "Mark Read" when finished with an article
9. Article removed from main view (optionally: moved to "Archive" tab)

### Key Interactions

- **Add article:** Paste URL in text field, press Enter or click Add
- **Tag article:** Click "Add tag" on article → type or select from existing → save
- **Filter by tag:** Click any visible tag → view updates to show only those articles
- **Mark complete:** Click checkmark icon next to article
- **Clear filter:** Click "All articles" or X on active filter

### Success State

I open the app Monday morning, see 12 unread articles, click the "startups" tag to focus on that topic, read through 3 articles marking each complete, then switch to "design" tag for next reading session. List is always current, never overwhelming, and I feel in control of my reading queue.

---

## Technical Requirements

### Platform

- [x] Web app
- [ ] Mobile app
- [ ] Desktop app
- [ ] CLI tool
- [ ] Browser extension (maybe later)
- [ ] API/Service
- [ ] Other

### Tech Stack Preferences

**Preferred:**

- Next.js (I've used it before, comfortable with it)
- Tailwind CSS (love the utility-first approach)
- Something simple for database (Supabase or similar)

**Must Avoid:**

- Complex backend frameworks (want to keep this lightweight)
- WordPress or PHP (prefer modern JS stack)

**No Preference (Claude can decide):**

- Authentication provider (Supabase Auth? NextAuth? Clerk?)
- Hosting platform (Vercel preferred but flexible)
- Database choice (as long as it's simple and free/cheap)

### Data Storage

**Data to store:**

- Articles: URL, title, description, date added, read status
- Tags: name, colour (optional)
- Article-Tag relationships (many-to-many)
- User accounts (one user to start - me - but should support multiple eventually)

**Storage preference:**

- Database (Supabase or similar)
- Need persistence and ability to access from multiple devices

**Data sensitivity:**

- Private (my reading list only)
- Need user authentication
- Each user only sees their own articles

### External Services/APIs

1. **Service:** Metadata extraction (Open Graph data)
   - **Purpose:** Auto-grab article title and description from URL
   - **Authentication:** None (just HTTP requests)

2. **Service:** Authentication provider (TBD)
   - **Purpose:** User login and session management
   - **Authentication:** OAuth or email/password

### Performance Requirements

- **Response time:** Instant feel (<200ms for most actions)
- **Data volume:** Start with 100-500 articles, should handle 10,000+
- **Concurrent users:** Just me initially, but design for 100+ users
- **Availability:** No SLA needed (personal project), but prefer reliable hosting

---

## Design & Branding

### Visual Style

- **Aesthetic:** Clean, minimal, modern - think Linear or Notion
- **Colour scheme:**
  - Primary: Teal/turquoise (#14B8A6 range)
  - Background: Clean white or light grey
  - Text: Dark grey (not pure black)
  - Tags: Soft pastels (auto-assigned colours)
- **Inspiration:**
  - Linear (clean, fast, minimal)
  - Notion (organised but not overwhelming)
  - Raindrop.io (bookmarking done well)

### Brand Voice

- **Tone:** Friendly, efficient, no-nonsense
- **Language:** British English
- **Copy style:** Short, clear, helpful (no cutesy jokes or excessive personality)

---

## Constraints & Context

### Development Constraints

- **Time available:** Want v1 working in 2-3 hours of focused work
- **Skill level:** Intermediate - comfortable with React/Next.js, can read code, but don't know database design deeply
- **Budget:** Free tier everything (Vercel, Supabase free plans)

### Existing Context

No existing code. Clean slate.

### Must-Know Information

- I'm building this for personal use first, but want it to be shareable
- I've tried building similar tools before and got stuck on authentication and database setup
- I want to understand what's being built (not just copy-paste) so I can maintain it

---

## Success Criteria

### How will you know this is successful?

**Quantitative:**

1. I use it daily for 2+ weeks straight
2. Reading list never exceeds 20 unread articles (stays manageable)
3. Can add/tag/complete an article in under 30 seconds

**Qualitative:**

1. Opening the app feels calm, not stressful
2. I actually read more articles instead of just hoarding them
3. Finding articles by tag is genuinely useful

### Definition of Done

- [x] Can create an account and log in
- [x] Can add articles by URL (title/description auto-populated)
- [x] Can add and remove tags from articles
- [x] Can filter view by tag
- [x] Can mark articles as read
- [x] Read articles are hidden from main view
- [x] Responsive design (works on mobile browser)
- [x] Deployed and accessible via URL

---

## Questions to Explore with Claude

1. What's the simplest database schema for articles + tags relationship?
2. Best way to extract metadata from URLs (Open Graph)? Should I use a service or build it?
3. Recommended auth approach for a project this size?
4. How should I handle tag colours (auto-assign, user-pick, or fixed palette)?
5. Any obvious edge cases I'm missing?

---

## Additional Resources

### Reference Materials

- Open Graph Protocol: https://ogp.me/
- Supabase docs: https://supabase.com/docs
- Similar products for inspiration (not to copy):
  - Raindrop.io
  - Instapaper
  - Pocket

### Inspiration

- **Linear:** Love the speed and minimal UI
- **Notion:** Great at making complex data feel simple
- **Things 3:** Beautiful task management aesthetics

---

## Development Approach

### Preferred Development Style

- [x] Build incrementally, test each piece
- [ ] Build everything at once, then test
- [ ] Explore multiple approaches, then pick best
- [ ] No preference - Claude can guide

### Collaboration Style

- [x] Balanced - explain key concepts, but don't over-explain
- [ ] Explain everything as we go (I want to learn)
- [ ] Just build it efficiently (I trust the process)
- [ ] Ask me before major decisions

---

## Notes & Context

**Why I'm building this:**
I'm tired of losing track of good articles. I want something I actually enjoy using, not another productivity tool that creates more work.

**Previous attempts:**

- Tried Notion database (too slow to add articles)
- Tried Airtable (overkill for this use case)
- Tried building with vanilla JS (got stuck on auth)

**Philosophy:**
I'd rather ship something simple that works than plan a complex solution that never gets built. v1 should be embarrassingly minimal.

**After v1:**
If this works well, I'd love to add:

- Browser extension for quick saving
- Weekly email with unread article summary
- Public sharing (optional link to share your reading list)

---

## Next Steps

1. ✅ Complete this PRP
2. Review with Claude Code to refine technical approach
3. Create product backlog with prioritised user stories
4. Build first story (likely: user can add an article)
5. Iterate until definition of done is met
6. Ship it!

---

**Template Version:** 1.0
**Last Updated:** 2025-12-09
**Project:** Readwise Lite
**Author:** Sarah Chen, CoEngine
