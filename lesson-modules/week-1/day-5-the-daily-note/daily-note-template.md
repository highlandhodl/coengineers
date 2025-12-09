# Daily Note Template

Use this template each day to track your work, learnings, and progress. Date your files consistently (e.g., `2025-12-09.md`) so they sort naturally.

---

# [DATE]

## Today's Focus

**Main goal:**

## **Secondary tasks:**

-
- ***

## Morning Brain Dump

[What's on your mind as you start the day? Concerns, ideas, questions?]

---

## Work Log

### [TIME] - [Task/Activity]

[What did you do? What decisions did you make?]

### [TIME] - [Task/Activity]

[Continue logging throughout the day]

---

## Things I Learned Today

1.
2.
3.

---

## Challenges & How I Solved Them

**Challenge:**

**Solution:**

**Challenge:**

**Solution:**

---

## Tomorrow's Priorities

1.
2.
3.

---

## Notes & Ideas

[Random thoughts, links to save, things to investigate later]

---

## Wins & Gratitude

[What went well? What are you proud of? What are you grateful for?]

---

## Questions for Tomorrow

-
-
- ***

# Example Daily Note

Below is an example of how you might fill this out:

---

# 9 December 2025

## Today's Focus

**Main goal:** Finish the customer dashboard ticket list view

**Secondary tasks:**

- Review and merge Jane's PR
- Update API documentation
- Schedule team retro for Friday

---

## Morning Brain Dump

Feeling a bit stuck on the ticket filtering logic. Not sure if I should filter on the frontend or backend. Also wondering if we need pagination yet - we only have ~100 tickets in the system.

Want to get this PR up today so we can deploy tomorrow.

---

## Work Log

### 09:15 - Started ticket list component

Created `TicketList.tsx` component with basic structure. Using the same table layout as CustomerList for consistency. Need to decide on filter options.

### 10:30 - Talked through filtering with Claude

Asked Claude about frontend vs backend filtering trade-offs. Decided to do frontend filtering for now since dataset is small. Will move to backend when we hit 500+ tickets.

Added filter dropdowns for status, priority, and assigned user.

### 11:45 - Hit a TypeScript error

Got error about ticket status types. Realized I hadn't updated the shared types when we added "archived" status last week.

Fixed: Updated `shared/types/Ticket.ts` to include new status.

### 13:00 - Lunch break

### 14:00 - Implemented sorting

Added sortable columns (click header to sort). Used same pattern from CustomerList. Works nicely.

### 15:15 - Added tests

Wrote tests for TicketList component:

- Renders correct number of tickets
- Filtering works for each filter type
- Sorting works for each column
- Empty state shows when no tickets

All passing!

### 16:30 - Created PR

PR #23: Add ticket list view with filtering and sorting
Ready for review.

---

## Things I Learned Today

1. Frontend filtering is fine for small datasets (<1000 items). Don't prematurely optimise.
2. Reusing component patterns (like the table layout) makes development much faster.
3. TypeScript errors often point to incomplete refactoring - good to catch these early.

---

## Challenges & How I Solved Them

**Challenge:** Wasn't sure whether to filter tickets on frontend or backend

**Solution:** Asked Claude to explain trade-offs. Realised our dataset is currently small enough for frontend filtering. Made a note in CLAUDE.md to revisit when we hit 500 tickets.

**Challenge:** Tests were failing because test data didn't include the new "archived" status

**Solution:** Updated test fixtures to include all valid ticket statuses. Also updated the factory function to randomly generate valid statuses.

---

## Tomorrow's Priorities

1. Respond to code review feedback on PR #23
2. Start ticket detail page (with comment thread)
3. Write up decision about filtering approach in docs/decisions/

---

## Notes & Ideas

- Should we add keyboard shortcuts for common actions? (n for new ticket, etc.)
- Consider adding a "recently viewed" section to dashboard
- User mentioned wanting email notifications - add to backlog
- Link to article about table design patterns: [URL]

---

## Wins & Gratitude

- Got the ticket list view done! Feels solid.
- Tests all passing on first try (after fixing fixtures)
- Sarah (pretend client) said she loved the dashboard design
- Grateful for Claude Code making API docs so much easier

The filtering UI turned out nicer than I expected. The dropdowns are clean and the reset button is in a good spot.

---

## Questions for Tomorrow

- Should archived tickets show in the list by default?
- Do we need pagination controls or is infinite scroll better?
- What's the right loading state for the ticket list?

---

## Tips for Daily Notes

1. **Be consistent** - Write every day, even if it's brief
2. **Don't overthink it** - These are for you, not for presentation
3. **Time stamps help** - Knowing when you did something adds useful context
4. **Capture decisions** - Future you will thank present you
5. **Note blockers immediately** - Don't let them get forgotten
6. **Review weekly** - Look back on Friday to see patterns

Your daily notes become a valuable archive of your thought process, decisions, and learning journey.
