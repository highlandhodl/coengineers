# UAT Test Cases: Slash Commands

**Category:** Slash Command System
**Test Cases:** TC-016 to TC-020

---

## Overview

These test cases validate the interactive slash command components that learners use with Claude Code. Each lesson includes a SlashCommand component displaying the command for that day.

---

## TC-016: Slash Command Component Displays Correctly

**Priority:** P1
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- At least one lesson page with SlashCommand component
- Browser supports JavaScript

### Test Data

| Test Page     | Expected Command |
| ------------- | ---------------- |
| Week 1, Day 1 | `/w1.d1`         |

### Steps

1. Navigate to Week 1, Day 1 lesson page
2. Scroll to find the SlashCommand component
3. Observe the component's visual appearance
4. Verify all elements are present:
   - Command text
   - Copy button
   - Description/label text
5. Check styling matches site theme

### Expected Result

- Component is clearly visible on the page
- Command displayed in monospace font
- Command text is: `/w1.d1`
- Copy button present with icon and "Copy" text
- Component has distinct styling (border, background)
- Description text explains the command's purpose
- No visual glitches or overlapping elements

### Pass Criteria

- [ ] Component visible on page
- [ ] Command text readable
- [ ] Copy button present
- [ ] Styling consistent with site
- [ ] No layout issues
- [ ] No console errors

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-017: Copy Slash Command to Clipboard

**Priority:** P2
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Browser supports Clipboard API
- SlashCommand component visible on page
- Text editor or terminal available for paste testing

### Test Data

| Page          | Command to Copy |
| ------------- | --------------- |
| Week 1, Day 2 | `/w1.d2`        |

### Steps

1. Navigate to Week 1, Day 2 lesson page
2. Locate the SlashCommand component
3. Note the displayed command (`/w1.d2`)
4. Click the "Copy" button
5. Observe the button's visual feedback
6. Open a text editor or terminal
7. Paste (Cmd+V / Ctrl+V)
8. Verify pasted text matches command
9. Return to page and observe button reset

### Expected Result

- Click triggers copy action
- Button shows visual feedback:
  - Background colour changes (e.g., green)
  - Text changes from "Copy" to "Copied!"
- Feedback lasts approximately 2 seconds
- Button resets to original state
- Pasted text exactly matches: `/w1.d2`
- No extra characters or whitespace

### Pass Criteria

- [ ] Copy action triggers
- [ ] Visual feedback shown
- [ ] "Copied!" text appears
- [ ] Feedback resets after ~2s
- [ ] Clipboard contains correct command
- [ ] No extra characters in paste

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-018: Slash Command Matches Lesson Day

**Priority:** P1
**Estimated Time:** 5 minutes

### Preconditions

- Test environment is accessible
- Multiple lesson pages accessible
- Understanding of command naming convention

### Test Data

| Page           | Expected Command |
| -------------- | ---------------- |
| Week 1, Day 1  | `/w1.d1`         |
| Week 2, Day 10 | `/w2.d10`        |
| Week 3, Day 18 | `/w3.d18`        |
| Week 4, Day 25 | `/w4.d25`        |
| Bonus, Day 29  | `/bonus.d29`     |

### Steps

1. Navigate to Week 1, Day 1
2. Locate SlashCommand component
3. Verify command is `/w1.d1`
4. Navigate to Week 2, Day 10
5. Verify command is `/w2.d10`
6. Navigate to Week 3, Day 18
7. Verify command is `/w3.d18`
8. Navigate to Week 4, Day 25
9. Verify command is `/w4.d25`
10. Navigate to Bonus, Day 29
11. Verify command is `/bonus.d29`

### Expected Result

- Each page shows correct command for that day
- Naming convention:
  - Week lessons: `/w{week}.d{day}`
  - Bonus lessons: `/bonus.d{day}`
- No mismatches between page and command
- Commands are unique per page

### Pass Criteria

- [ ] Week 1, Day 1: `/w1.d1`
- [ ] Week 2, Day 10: `/w2.d10`
- [ ] Week 3, Day 18: `/w3.d18`
- [ ] Week 4, Day 25: `/w4.d25`
- [ ] Bonus, Day 29: `/bonus.d29`
- [ ] No mismatches found

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-019: All Week 1 Slash Commands Present

**Priority:** P2
**Estimated Time:** 5 minutes

### Preconditions

- Test environment is accessible
- All Week 1 lessons published
- Access to all 7 day pages

### Test Data

| Day | Page Title               | Expected Command |
| --- | ------------------------ | ---------------- |
| 1   | First Conversation       | `/w1.d1`         |
| 2   | Your Digital Home        | `/w1.d2`         |
| 3   | Project Memory           | `/w1.d3`         |
| 4   | Template Factory         | `/w1.d4`         |
| 5   | The Daily Note           | `/w1.d5`         |
| 6   | Your First Slash Command | `/w1.d6`         |
| 7   | Week 1 Review            | `/w1.d7`         |

### Steps

1. Navigate to Week 1, Day 1
2. Verify SlashCommand component present with `/w1.d1`
3. Navigate to Week 1, Day 2
4. Verify SlashCommand component present with `/w1.d2`
5. Continue for Days 3, 4, 5, 6, 7
6. Record any missing components or incorrect commands

### Expected Result

- All 7 day pages have SlashCommand component
- Commands are sequential: `/w1.d1` through `/w1.d7`
- No duplicate commands
- No missing commands
- All components functional (copy works)

### Pass Criteria

- [ ] Day 1: Component present, `/w1.d1`
- [ ] Day 2: Component present, `/w1.d2`
- [ ] Day 3: Component present, `/w1.d3`
- [ ] Day 4: Component present, `/w1.d4`
- [ ] Day 5: Component present, `/w1.d5`
- [ ] Day 6: Component present, `/w1.d6`
- [ ] Day 7: Component present, `/w1.d7`

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-020: Slash Command File Exists

**Priority:** P1
**Estimated Time:** 5 minutes

### Preconditions

- Access to project repository
- Ability to browse file system
- Understanding of `.claude/commands/` directory

### Test Data

| Command   | Expected File                |
| --------- | ---------------------------- |
| `/w1.d1`  | `.claude/commands/w1.d1.md`  |
| `/w1.d2`  | `.claude/commands/w1.d2.md`  |
| `/w2.d8`  | `.claude/commands/w2.d8.md`  |
| `/w3.d15` | `.claude/commands/w3.d15.md` |
| `/w4.d22` | `.claude/commands/w4.d22.md` |

### Steps

1. Open project repository
2. Navigate to `.claude/commands/` directory
3. List all `.md` files in directory
4. For each displayed slash command:
   - Extract command name (e.g., `/w1.d1` → `w1.d1.md`)
   - Verify file exists
   - Open file and verify contains valid markdown
5. Check for orphaned files (files without corresponding lessons)

### Expected Result

- `.claude/commands/` directory exists
- Each slash command has corresponding `.md` file
- File naming matches command (without leading slash)
- Files contain valid markdown content:
  - Headings
  - Instructions
  - Context for Claude Code
- No orphaned files without corresponding pages

### Pass Criteria

- [ ] Directory `.claude/commands/` exists
- [ ] `w1.d1.md` exists and valid
- [ ] `w1.d2.md` exists and valid
- [ ] `w2.d8.md` exists and valid
- [ ] `w3.d15.md` exists and valid
- [ ] `w4.d22.md` exists and valid
- [ ] Files contain meaningful content

### Verification Command

```bash
# List all command files
ls -la .claude/commands/*.md

# Count files (should be 31+)
ls .claude/commands/*.md | wc -l
```

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
| TC-016    | P1       |        |      |        |
| TC-017    | P2       |        |      |        |
| TC-018    | P1       |        |      |        |
| TC-019    | P2       |        |      |        |
| TC-020    | P1       |        |      |        |

**P1 Pass Rate:** **\_ / 3 (must be 100%)
**P2 Pass Rate:** \_** / 2 (must be 90%+)

---

## Notes

- Slash commands require Claude Code CLI to execute
- Copy functionality requires HTTPS or localhost (Clipboard API)
- Command files are markdown, not executable scripts
- Test copy on both macOS and Windows if available

---

_Last updated: December 2024_
