# BMAD Method Template

## What is BMAD?

BMAD (Brief, Map, Analyse, Deliver) is a structured approach to breaking down complex work into manageable phases. It's particularly powerful when working with Claude Code because it forces you to think before you build.

---

## Phase 1: Brief (10-15 minutes)

### Purpose

Capture the essence of what you're trying to achieve. No solutions yet—just the problem and the desired outcome.

### Questions to Answer

**What is the problem?**
[Write 2-3 sentences describing the problem you're solving]

**Who is affected by this problem?**
[List the users/stakeholders and how they're impacted]

**What does success look like?**
[Describe the end state—what will be different?]

**What constraints exist?**
[Time, technical, budget, or other limitations]

**What's in scope? What's out of scope?**
In scope:

- [Item 1]
- [Item 2]

Out of scope:

- [Item 1]
- [Item 2]

---

## Phase 2: Map (15-20 minutes)

### Purpose

Visualise the landscape. Understand the current state, identify key components, and see how they relate.

### Current State Mapping

**What exists today?**
[Describe current systems, processes, or workflows]

**What are the key components involved?**

- Component 1: [Description]
- Component 2: [Description]
- Component 3: [Description]

**What are the integration points?**
[How do these components connect or depend on each other?]

**What are the pain points in the current flow?**

1. [Pain point and impact]
2. [Pain point and impact]

### Future State Mapping

**What will the new system/process look like?**
[Describe the target state]

**What are the key differences from today?**
[List the major changes]

**Create a simple diagram:**

```
[Use ASCII art or describe the flow]
Current: A → B → C (manual)
Future:  A → B → C (automated with X)
```

---

## Phase 3: Analyse (20-25 minutes)

### Purpose

Think through implementation details, risks, and trade-offs. This is where you make key decisions.

### Technical Analysis

**What technologies/tools are needed?**

- [Tool/technology 1]: [Why and how]
- [Tool/technology 2]: [Why and how]

**What are the technical risks?**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [How to reduce risk] |
| [Risk 2] | High/Med/Low | High/Med/Low | [How to reduce risk] |

**What are the dependencies?**

- [Dependency 1]: [Why it's needed and when]
- [Dependency 2]: [Why it's needed and when]

### Implementation Approach

**What's the build order?**
Phase 1: [Foundation work]

- Task 1
- Task 2

Phase 2: [Core functionality]

- Task 1
- Task 2

Phase 3: [Polish and integration]

- Task 1
- Task 2

**What can be built in parallel?**
[List tasks that don't depend on each other]

**What must be sequential?**
[List tasks that have dependencies]

### Trade-off Analysis

**Where are you making trade-offs?**

- Trading [X] for [Y] because [reason]
- Prioritising [A] over [B] because [reason]

**What are you NOT doing (and why)?**

- [Feature/approach]: [Reason to exclude]
- [Feature/approach]: [Reason to exclude]

---

## Phase 4: Deliver (Variable time)

### Purpose

Execute the plan, track progress, and ship with confidence.

### Delivery Plan

**Sprint 1 (Days 1-3): [Focus Area]**

- [ ] Task 1: [Description]
- [ ] Task 2: [Description]
- [ ] Task 3: [Description]

**Sprint 2 (Days 4-6): [Focus Area]**

- [ ] Task 1: [Description]
- [ ] Task 2: [Description]
- [ ] Task 3: [Description]

**Sprint 3 (Days 7+): [Focus Area]**

- [ ] Task 1: [Description]
- [ ] Task 2: [Description]
- [ ] Task 3: [Description]

### Testing Strategy

**What needs to be tested?**

1. [Test scenario]: [Expected outcome]
2. [Test scenario]: [Expected outcome]
3. [Test scenario]: [Expected outcome]

**Who needs to review/approve?**

- [Stakeholder 1]: [What they're reviewing]
- [Stakeholder 2]: [What they're reviewing]

### Documentation Checklist

- [ ] README with setup instructions
- [ ] API documentation (if applicable)
- [ ] User guide or walkthrough
- [ ] Deployment instructions
- [ ] Rollback plan

### Launch Checklist

- [ ] Code reviewed and approved
- [ ] Tests passing
- [ ] Documentation complete
- [ ] Stakeholders notified
- [ ] Monitoring in place
- [ ] Rollback plan tested

---

## BMAD Tips for Claude Code

### Brief Phase

When writing your Brief, paste it into Claude and ask:

> "Review this brief. What questions am I not answering? What assumptions am I making?"

### Map Phase

Use Claude to generate diagrams:

> "Based on this brief, create a Mermaid diagram showing the current state and proposed future state"

### Analyse Phase

Test your thinking:

> "Here's my implementation approach. What risks or issues do you see? What am I missing?"

### Deliver Phase

Break down tasks:

> "Take this delivery plan and break each task into specific, actionable steps with Claude Code commands"

---

## When to Use BMAD

**Good for:**

- Building new features from scratch
- Complex refactoring projects
- Cross-team initiatives
- Ambiguous or undefined problems
- Projects with multiple stakeholders

**Not necessary for:**

- Quick bug fixes
- Tiny UI tweaks
- Well-defined, small tasks
- Routine maintenance work

---

## Example: BMAD in Action

### Brief

**Problem**: Users can't filter the product catalogue by multiple attributes simultaneously.

**Who's affected**: Power users (20% of base) who need advanced filtering. They're working around this by exporting to Excel.

**Success**: Users can apply 3+ filters, save filter combinations, and share filter links with teammates.

**Constraints**: Must use existing database schema. Launch in 2 weeks.

### Map

**Current**: Single filter dropdown → API call → Results displayed

**Future**: Multi-select filters → Client-side preview → Optimised API call → Results with filter summary

**Pain points**:

1. API can't handle multiple filters (returns errors)
2. No way to see filter state before submitting
3. Users lose filters when sharing links

### Analyse

**Tech approach**:

- Update API to accept array of filters
- Build client-side filter state manager
- Add URL parameter encoding
- Cache filter combinations in localStorage

**Build order**:

1. Backend: Update API endpoints
2. Frontend: Filter state manager
3. Frontend: UI components
4. Integration: URL encoding + sharing

**Trading**: Real-time preview (complex) for instant apply (simple), because users care more about speed than preview.

### Deliver

**Sprint 1**: Backend API changes + tests
**Sprint 2**: Frontend state + URL encoding
**Sprint 3**: UI polish + documentation

---

## Your Turn

Use this template for your next project. Fill in each section, then review with Claude before you start coding.

Remember: **Time spent in Brief, Map, and Analyse saves hours in Deliver.**
