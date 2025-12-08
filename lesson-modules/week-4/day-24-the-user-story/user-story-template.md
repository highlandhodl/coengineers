# User Story Template

A detailed user story format for spec-driven development. Use this to fully specify a feature before building it.

---

## Story ID: [US-XXX]

**Epic:** [Epic name, if applicable]
**Priority:** [P0/P1/P2/P3]
**Size:** [Small / Medium / Large]
**Status:** [Not Started / In Progress / Done]

---

## User Story

**As a** [type of user]
**I want** [some goal or action]
**So that** [some benefit or value]

### Example

> As a **content creator**
> I want **to save articles with tags**
> So that **I can organise my reading list by topic**

---

## Context & Problem

[Describe the problem this story solves. Why is this needed?]

### Current Situation

[What's the status quo? What pain does this address?]

### Proposed Solution

[High-level description of how this story solves the problem]

---

## Acceptance Criteria

[Specific, testable conditions that must be met for this story to be considered complete]

### Must Have (Required for Done)

1. **Given** [some context]
   **When** [some action is taken]
   **Then** [some observable outcome]

2. **Given** [some context]
   **When** [some action is taken]
   **Then** [some observable outcome]

3. **Given** [some context]
   **When** [some action is taken]
   **Then** [some observable outcome]

### Should Have (Important but not blocking)

- [ ] [Additional criteria]
- [ ] [Additional criteria]

### Could Have (Nice to have)

- [ ] [Optional enhancement]
- [ ] [Optional enhancement]

---

## User Flow

[Step-by-step description of how a user completes this task]

1. **Entry Point:** [Where does the user start?]
2. **Step 1:** [What do they do first?]
3. **Step 2:** [What happens next?]
4. **Step 3:** [And then?]
5. **Success State:** [What does completion look like?]

### Alternative Flows

## **Alternative Path 1:** [What if user takes a different approach?]

## **Error Path:** [What if something goes wrong?]

---

## UI/UX Requirements

### Layout

[Description of visual layout and structure]

### Key Elements

- **Element 1:** [Description, purpose]
- **Element 2:** [Description, purpose]
- **Element 3:** [Description, purpose]

### Interactions

- **Interaction 1:** [User action → system response]
- **Interaction 2:** [User action → system response]

### Visual Design Notes

[Any specific design requirements, style, or branding]

### Responsive Behaviour

- **Desktop:** [How it appears/behaves]
- **Tablet:** [Any adaptations]
- **Mobile:** [Mobile-specific changes]

---

## Technical Requirements

### Frontend

**Components Needed:**

1. [Component name] - [Purpose]
2. [Component name] - [Purpose]

**State Management:**

- [What state needs to be tracked?]

**API Calls:**

- [What endpoints does this interact with?]

### Backend

**Endpoints Needed:**

1. `[METHOD] /path` - [Purpose]
2. `[METHOD] /path` - [Purpose]

**Database Changes:**

- **New tables:** [If any]
- **New columns:** [If any]
- **Migrations:** [What needs to change]

**Business Logic:**

- [Key logic that needs to be implemented]

### Third-Party Services

- **Service 1:** [How it's used in this story]
- **Service 2:** [How it's used in this story]

---

## Data Model

[Describe data structures involved in this story]

### Input Data

```
{
  field1: type,
  field2: type,
  ...
}
```

### Output Data

```
{
  field1: type,
  field2: type,
  ...
}
```

### Validation Rules

- **Field 1:** [Validation requirements]
- **Field 2:** [Validation requirements]

---

## Edge Cases & Error Handling

### Edge Cases to Handle

1. **Case:** [Description]
   **Expected Behaviour:** [How system should respond]

2. **Case:** [Description]
   **Expected Behaviour:** [How system should respond]

### Error States

1. **Error:** [Type of error]
   **User Message:** [What user sees]
   **System Action:** [What happens]

2. **Error:** [Type of error]
   **User Message:** [What user sees]
   **System Action:** [What happens]

### Validation

- **Input validation:** [What's validated, how]
- **Permission checks:** [Any auth/authorization needed]
- **Rate limiting:** [If applicable]

---

## Dependencies

### Blocked By

- [ ] [Story or task that must be complete first]
- [ ] [External dependency]

### Blocks

- [ ] [Stories that depend on this being complete]

### Related Stories

- [Related story ID] - [How they're related]
- [Related story ID] - [How they're related]

---

## Testing Approach

### Manual Testing Steps

1. [Step-by-step testing instructions]
2. [What to verify at each step]
3. [Expected results]

### Test Data Needed

- [What sample data is required for testing]

### Test Scenarios

**Happy Path:**

- [ ] [Scenario 1]
- [ ] [Scenario 2]

**Error Paths:**

- [ ] [Scenario 1]
- [ ] [Scenario 2]

**Edge Cases:**

- [ ] [Scenario 1]
- [ ] [Scenario 2]

### Automated Tests (If applicable)

- [ ] Unit tests for [component/function]
- [ ] Integration tests for [flow]
- [ ] E2E tests for [user journey]

---

## Performance Considerations

**Expected Load:**

- [How many requests/users/etc.]

**Performance Requirements:**

- Response time: [Target]
- Data volume: [Expected size]
- Concurrent operations: [Expected concurrency]

**Optimization Notes:**

- [Any specific performance concerns or optimizations needed]

---

## Security Considerations

- **Authentication:** [How is user verified?]
- **Authorization:** [What permissions are checked?]
- **Data Privacy:** [Any sensitive data handling?]
- **Input Sanitization:** [How is user input protected?]
- **Rate Limiting:** [Any throttling needed?]

---

## Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient colour contrast
- [ ] Focus indicators visible
- [ ] Error messages are clear
- [ ] ARIA labels where needed

---

## Documentation Needs

- [ ] User-facing documentation (help text, tooltips)
- [ ] API documentation (if backend changes)
- [ ] Code comments (for complex logic)
- [ ] README updates
- [ ] Changelog entry

---

## Metrics & Success

**How will we measure success?**

- **Primary metric:** [Key metric to track]
- **Secondary metrics:** [Additional indicators]
- **Success criteria:** [What values indicate success]

**Analytics to Implement:**

- [ ] [Event to track]
- [ ] [Metric to measure]

---

## Open Questions

1. **Question:** [Unclear aspect]
   - **Status:** [Open / Resolved]
   - **Decision:** [Resolution when answered]

2. **Question:** [Unclear aspect]
   - **Status:** [Open / Resolved]
   - **Decision:** [Resolution when answered]

---

## Design Assets

- **Mockups:** [Link to designs]
- **Prototypes:** [Link to interactive prototype]
- **Design specs:** [Link to detailed specs]
- **Assets:** [Links to images, icons, etc.]

---

## Notes & Context

[Any additional information that helps understand or implement this story]

---

## Implementation Log

[Track progress and decisions as you build]

### [Date]

- [What was built]
- [Decisions made]
- [Issues encountered]

### [Date]

- [What was built]
- [Decisions made]
- [Issues encountered]

---

## Review & Sign-Off

- [ ] **Requirements review complete** - [Date, Reviewer]
- [ ] **Technical design approved** - [Date, Reviewer]
- [ ] **Implementation complete** - [Date, Developer]
- [ ] **Testing complete** - [Date, Tester]
- [ ] **Acceptance criteria met** - [Date, Product Owner]
- [ ] **Documentation updated** - [Date, Author]
- [ ] **Deployed to production** - [Date]

---

**Story Version:** 1.0
**Last Updated:** [Date]
**Author:** [Name]
**Template by:** CoEngine
