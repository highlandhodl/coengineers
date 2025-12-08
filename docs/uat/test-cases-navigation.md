# UAT Test Cases: Lesson Navigation

**Category:** Course Navigation
**Test Cases:** TC-011 to TC-015

---

## Overview

These test cases validate navigation through the course content, including sidebar navigation, week progression, and special sections.

---

## TC-011: Navigate Through Week 1 Lessons

**Priority:** P1
**Estimated Time:** 5 minutes

### Preconditions

- Test environment is accessible
- Week 1 content is published (7 days + overview)
- Sidebar navigation is visible

### Test Data

| Day      | Expected Page Title      | Expected Slug                           |
| -------- | ------------------------ | --------------------------------------- |
| Overview | Week 1: Foundation       | `week-1/overview`                       |
| Day 1    | First Conversation       | `week-1/day-1-first-conversation`       |
| Day 2    | Your Digital Home        | `week-1/day-2-your-digital-home`        |
| Day 3    | Project Memory           | `week-1/day-3-project-memory`           |
| Day 4    | Template Factory         | `week-1/day-4-template-factory`         |
| Day 5    | The Daily Note           | `week-1/day-5-the-daily-note`           |
| Day 6    | Your First Slash Command | `week-1/day-6-your-first-slash-command` |
| Day 7    | Week 1 Review            | `week-1/day-7-week-1-review`            |

### Steps

1. Navigate to the CoEngineers homepage
2. Click "Week 1: Foundation" in the sidebar
3. Verify Week 1 Overview page loads
4. Click "Day 1: First Conversation" in the sidebar
5. Verify Day 1 page loads with correct content
6. Repeat for Days 2-7, clicking each in sequence
7. Note any missing or broken links

### Expected Result

- All 8 pages load successfully (overview + 7 days)
- Each page displays correct day title
- Page content is readable and well-formatted
- Sidebar highlights currently active page
- No 404 errors or broken links
- Pages load within 3 seconds each

### Pass Criteria

- [ ] All 8 pages accessible
- [ ] Titles match expected values
- [ ] Content renders correctly
- [ ] Sidebar highlights active page
- [ ] No console errors
- [ ] Page load < 3 seconds

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-012: Navigate Between Weeks

**Priority:** P1
**Estimated Time:** 4 minutes

### Preconditions

- Test environment is accessible
- All 4 weeks of content published
- Sidebar shows all weeks

### Test Data

| Week   | Label              | Day Count |
| ------ | ------------------ | --------- |
| Week 1 | Foundation         | 7         |
| Week 2 | Content Processing | 7         |
| Week 3 | Creative Outputs   | 7         |
| Week 4 | Building Software  | 7         |

### Steps

1. Start from any page on the site
2. Click "Week 2: Content Processing" in sidebar
3. Verify Week 2 Overview page loads
4. Click "Day 10: YouTube Brain" (or any Week 2 day)
5. Verify Day 10 content displays
6. Click "Week 3: Creative Outputs" in sidebar
7. Verify Week 3 Overview page loads
8. Click "Week 4: Building Software" in sidebar
9. Verify Week 4 Overview page loads
10. Click back to "Week 1: Foundation" in sidebar
11. Verify Week 1 Overview page loads

### Expected Result

- All week overviews accessible from sidebar
- Navigation works bidirectionally
- Content is unique per week
- Sidebar correctly expands to show week's days
- URL updates to reflect current week
- No content from other weeks appears

### Pass Criteria

- [ ] All 4 week overviews accessible
- [ ] Can navigate forward and backward
- [ ] Content unique to each week
- [ ] Sidebar updates correctly
- [ ] Browser back button works
- [ ] No 404 errors

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-013: Use Previous/Next Navigation

**Priority:** P2
**Estimated Time:** 4 minutes

### Preconditions

- Test environment is accessible
- Previous/Next links present at bottom of lesson pages
- Test on multiple lesson pages

### Test Data

| Start Page | Previous          | Next                     |
| ---------- | ----------------- | ------------------------ |
| Day 3      | Day 2             | Day 4                    |
| Day 1      | Overview (or N/A) | Day 2                    |
| Day 7      | Day 6             | Week 2 Overview (or N/A) |

### Steps

1. Navigate to Week 1, Day 3
2. Scroll to bottom of page
3. Locate Previous/Next navigation links
4. Click "Previous"
5. Verify navigation to Day 2
6. Click "Next"
7. Verify navigation back to Day 3
8. Click "Next" again
9. Verify navigation to Day 4
10. Test edge cases:
    - Day 1: Check Previous behaviour
    - Day 7: Check Next behaviour

### Expected Result

- Previous/Next links visible at page bottom
- Previous navigates to preceding lesson
- Next navigates to following lesson
- Navigation follows course sequence
- Edge cases handled gracefully:
  - First lesson: Previous disabled or goes to overview
  - Last lesson of week: Next goes to next week or disabled

### Pass Criteria

- [ ] Previous/Next links visible
- [ ] Previous navigation works
- [ ] Next navigation works
- [ ] Sequential order maintained
- [ ] Edge cases handled
- [ ] No broken links

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-014: Navigate to Getting Started Section

**Priority:** P1
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Getting Started section published
- Sidebar shows Getting Started

### Test Data

| Page          | Slug                            |
| ------------- | ------------------------------- |
| Introduction  | `getting-started/introduction`  |
| Prerequisites | `getting-started/prerequisites` |
| Installation  | `getting-started/installation`  |

### Steps

1. Navigate to CoEngineers homepage
2. Locate "Getting Started" in sidebar
3. Click to expand section (if collapsed)
4. Click "Prerequisites"
5. Verify Prerequisites page loads
6. Review content for technical requirements
7. Click "Installation"
8. Verify Installation page loads
9. Review content for setup instructions
10. Navigate back to Week 1 via sidebar

### Expected Result

- Getting Started section visible in sidebar
- All pages within section accessible
- Prerequisites shows:
  - Node.js version
  - npm version
  - Other requirements
- Installation shows:
  - Setup steps
  - Claude Code installation
- Navigation to/from other sections works

### Pass Criteria

- [ ] Section visible in sidebar
- [ ] All Getting Started pages load
- [ ] Prerequisites content complete
- [ ] Installation content complete
- [ ] Can navigate to course content
- [ ] No broken links

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-015: Navigate to Bonus Section

**Priority:** P2
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Bonus section published (Days 29-31)
- Sidebar shows Bonus section

### Test Data

| Day      | Title           | Slug                         |
| -------- | --------------- | ---------------------------- |
| Overview | Bonus: Capstone | `bonus/overview`             |
| Day 29   | BMAD Method     | `bonus/day-29-bmad-method`   |
| Day 30   | PRP Framework   | `bonus/day-30-prp-framework` |
| Day 31   | Ship It!        | `bonus/day-31-ship-it`       |

### Steps

1. Navigate to CoEngineers site
2. Scroll down sidebar to find "Bonus: Capstone"
3. Click to expand (if collapsed)
4. Click "Overview"
5. Verify Bonus Overview page loads
6. Click "Day 29: BMAD Method"
7. Verify content about BMAD Method
8. Click "Day 30: PRP Framework"
9. Verify content about PRP Framework
10. Click "Day 31: Ship It!"
11. Verify final day content
12. Test navigation back to Week 4

### Expected Result

- Bonus section accessible in sidebar
- All 4 pages load (overview + 3 days)
- Content is unique to each day:
  - Day 29: BMAD Method content
  - Day 30: PRP Framework content
  - Day 31: Ship It! content
- Section clearly distinguished from main course
- Navigation to/from main content works

### Pass Criteria

- [ ] Bonus section in sidebar
- [ ] All 4 pages accessible
- [ ] BMAD Method content present
- [ ] PRP Framework content present
- [ ] Ship It! content present
- [ ] Navigation to Week 4 works

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## Test Execution Summary

| Test Case | Priority | Status | Date | Tester |
| --------- | -------- | ------ | ---- | ------ |
| TC-011    | P1       |        |      |        |
| TC-012    | P1       |        |      |        |
| TC-013    | P2       |        |      |        |
| TC-014    | P1       |        |      |        |
| TC-015    | P2       |        |      |        |

**P1 Pass Rate:** **\_ / 3 (must be 100%)
**P2 Pass Rate:** \_** / 2 (must be 90%+)

---

## Notes

- Test on both expanded and collapsed sidebar states
- Verify keyboard navigation (Tab, Enter) works
- Check URL updates correctly for bookmarking
- Mobile navigation tested separately in responsive tests

---

_Last updated: December 2024_
