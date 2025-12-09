# UAT Test Cases: Responsive Design

**Category:** Responsive Design
**Test Cases:** TC-021 to TC-025

---

## Overview

These test cases validate the responsive behaviour of the CoEngineers platform across mobile, tablet, and desktop viewports.

---

## TC-021: Mobile Navigation Menu

**Priority:** P1
**Estimated Time:** 4 minutes

### Preconditions

- Test environment is accessible
- Chrome DevTools available (or mobile device)
- Site loaded fresh (clear cache if needed)

### Test Data

| Viewport | Dimensions          |
| -------- | ------------------- |
| Mobile   | 375×667 (iPhone SE) |

### Steps

1. Open Chrome DevTools (F12)
2. Enable Device Mode (Cmd+Shift+M)
3. Set viewport to 375×667 (iPhone SE)
4. Navigate to CoEngineers homepage
5. Observe navigation:
   - Sidebar should be hidden
   - Hamburger menu icon should be visible
6. Tap/click the hamburger menu icon
7. Observe sidebar sliding in
8. Navigate to a lesson via sidebar
9. Tap/click outside sidebar (or close button)
10. Verify sidebar closes

### Expected Result

- Sidebar hidden by default on mobile
- Hamburger menu (☰) visible in header
- Tapping hamburger opens sidebar
- Sidebar slides in smoothly (animation)
- Sidebar contains full navigation
- Tapping outside closes sidebar
- Sidebar close animation smooth
- Content beneath is scrollable when sidebar closed

### Pass Criteria

- [ ] Sidebar hidden by default
- [ ] Hamburger menu visible
- [ ] Sidebar opens on tap
- [ ] Animation smooth (<300ms)
- [ ] Navigation functional
- [ ] Sidebar closes correctly
- [ ] No visual glitches

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-022: Content Readability on Mobile

**Priority:** P1
**Estimated Time:** 4 minutes

### Preconditions

- Mobile viewport set (375×667)
- Lesson page with various content types
- DevTools console open

### Test Data

| Viewport | Page          |
| -------- | ------------- |
| 375×667  | Week 1, Day 1 |

### Steps

1. Set viewport to 375×667
2. Navigate to Week 1, Day 1
3. Read page content:
   - Check text doesn't overflow
   - Check no horizontal scrolling required
   - Verify line length is readable
4. Locate any code blocks
5. Verify code blocks:
   - Have horizontal scroll if needed
   - Don't break page layout
6. Check images:
   - Scale to fit viewport
   - Maintain aspect ratio
7. Scroll through entire page
8. Check for any cut-off content

### Expected Result

- Text flows within viewport (no overflow)
- No horizontal page scroll required
- Font size readable (≥16px)
- Line height comfortable (≥1.5)
- Code blocks contained, scrollable horizontally
- Images responsive (max-width: 100%)
- All content accessible by vertical scrolling
- No content hidden or cut off

### Pass Criteria

- [ ] No horizontal page scroll
- [ ] Text readable without zoom
- [ ] Code blocks contained
- [ ] Images scale correctly
- [ ] All content visible
- [ ] No overlap issues
- [ ] Touch targets adequate (≥44px)

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-023: Email Signup Form on Mobile

**Priority:** P1
**Estimated Time:** 3 minutes

### Preconditions

- Mobile viewport set (375×667)
- Homepage accessible
- Touch simulation enabled (DevTools)

### Test Data

| Viewport | Form Location |
| -------- | ------------- |
| 375×667  | Homepage      |

### Steps

1. Set viewport to 375×667
2. Navigate to homepage
3. Locate email signup form
4. Observe form layout:
   - Input and button arrangement
   - Width relative to viewport
5. Tap email input field
6. Observe on-screen keyboard behaviour
7. Enter test email
8. Tap Subscribe button
9. Observe submit behaviour
10. Check form remains usable with keyboard open

### Expected Result

- Form fills available width
- Input and button may stack vertically
- Input field:
  - Minimum height 44px (touch-friendly)
  - Font size ≥16px (prevents iOS zoom)
  - Proper input type (email)
- Button:
  - Minimum height 44px
  - Clearly visible
  - Easy to tap
- Form usable when keyboard open
- Submit works correctly

### Pass Criteria

- [ ] Form layout appropriate
- [ ] Input height ≥44px
- [ ] Input font ≥16px
- [ ] Button easily tappable
- [ ] Keyboard doesn't break layout
- [ ] Form submits correctly
- [ ] Feedback visible

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-024: Tablet Layout

**Priority:** P2
**Estimated Time:** 4 minutes

### Preconditions

- Chrome DevTools available
- Site loaded fresh

### Test Data

| Viewport | Device |
| -------- | ------ |
| 768×1024 | iPad   |

### Steps

1. Open Chrome DevTools
2. Set viewport to 768×1024 (iPad portrait)
3. Navigate to CoEngineers homepage
4. Check navigation:
   - Sidebar should be visible (not hamburger)
5. Navigate to a lesson page
6. Observe layout:
   - Sidebar width
   - Content area width
   - Reading experience
7. Switch to landscape (1024×768)
8. Verify layout adapts
9. Test navigation in both orientations

### Expected Result

- Sidebar visible (not hamburger menu) at 768px
- Content area appropriately sized
- Good reading experience:
  - Comfortable line length
  - Adequate font size
  - Proper spacing
- Layout works in both portrait and landscape
- No wasted space
- No content overlap

### Pass Criteria

- [ ] Sidebar visible at 768px
- [ ] No hamburger menu
- [ ] Content well-proportioned
- [ ] Portrait layout works
- [ ] Landscape layout works
- [ ] Navigation functional
- [ ] Good reading experience

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-025: Desktop Layout

**Priority:** P2
**Estimated Time:** 4 minutes

### Preconditions

- Large monitor or DevTools
- Full-size browser window

### Test Data

| Viewport  | Description     |
| --------- | --------------- |
| 1920×1080 | Full HD Desktop |
| 1280×720  | Smaller Desktop |

### Steps

1. Set viewport to 1920×1080
2. Navigate to CoEngineers homepage
3. Observe layout:
   - Sidebar position (fixed left)
   - Content area centering
   - Maximum width constraints
4. Navigate to a lesson page
5. Verify:
   - Content is centred
   - Not stretched too wide
   - Comfortable reading width
6. Check whitespace distribution
7. Reduce viewport to 1280×720
8. Verify layout still works
9. Test hover states on interactive elements

### Expected Result

- Sidebar fixed on left side
- Content area centred
- Content has max-width (800-1200px)
- Whitespace distributed appropriately:
  - Not cramped
  - Not excessive empty space
- Reading width comfortable (60-80 characters)
- Layout consistent 1280-1920px
- Hover states visible on interactive elements
- No horizontal scroll

### Pass Criteria

- [ ] Sidebar fixed position
- [ ] Content centred
- [ ] Max-width applied
- [ ] Appropriate whitespace
- [ ] Comfortable reading width
- [ ] Works at 1280px
- [ ] Works at 1920px
- [ ] No horizontal scroll

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
| TC-021    | P1       |        |      |        |
| TC-022    | P1       |        |      |        |
| TC-023    | P1       |        |      |        |
| TC-024    | P2       |        |      |        |
| TC-025    | P2       |        |      |        |

**P1 Pass Rate:** **\_ / 3 (must be 100%)
**P2 Pass Rate:** \_** / 2 (must be 90%+)

---

## Viewport Quick Reference

| Device         | Width | Height | DevTools Preset  |
| -------------- | ----- | ------ | ---------------- |
| iPhone SE      | 375   | 667    | iPhone SE        |
| iPhone 12      | 390   | 844    | iPhone 12 Pro    |
| iPad           | 768   | 1024   | iPad             |
| iPad Landscape | 1024  | 768    | iPad (landscape) |
| Laptop         | 1366  | 768    | —                |
| Desktop        | 1920  | 1080   | —                |

---

## Testing Tools

### Chrome DevTools Device Mode

1. Open DevTools (F12)
2. Click device icon (Cmd+Shift+M)
3. Select device or enter custom dimensions
4. Refresh page for accurate rendering

### Common Issues to Check

- [ ] Text overflow
- [ ] Horizontal scroll
- [ ] Touch target size (<44px)
- [ ] Font too small (<16px on mobile)
- [ ] Overlapping elements
- [ ] Hidden content
- [ ] Broken images
- [ ] Navigation accessibility

---

_Last updated: December 2024_
