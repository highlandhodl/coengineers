# Advanced Product Requirements Prompt (PRP) Template

## What is a PRP?

A Product Requirements Prompt (PRP) is a structured document that captures everything Claude Code needs to understand a product feature. This advanced template includes additional sections for complex features requiring deeper technical and strategic thinking.

---

## Section 1: Product Context

### Product Name

[Name of product or feature]

### Product Type

[e.g., Web application, Mobile app, API, Chrome extension, CLI tool]

### Target Audience

**Primary Users:**

- [User segment 1]: [Brief description]
- [User segment 2]: [Brief description]

**Secondary Users:**

- [User segment 3]: [Brief description]

### Product Stage

- [ ] Brand new (greenfield)
- [ ] Enhancement to existing product
- [ ] Refactor/rewrite
- [ ] Maintenance/bug fix

---

## Section 2: The Problem

### Problem Statement

[Write 2-4 sentences describing the core problem. Focus on the pain, not the solution.]

### Current Behaviour

**What happens today?**
[Describe the current state or workaround]

**Why is this painful?**

- [Pain point 1 and its impact]
- [Pain point 2 and its impact]
- [Pain point 3 and its impact]

### Who is Affected?

| User Segment | Impact Level | Frequency            | Workaround Available? |
| ------------ | ------------ | -------------------- | --------------------- |
| [Segment 1]  | High/Med/Low | Daily/Weekly/Monthly | Yes/No                |
| [Segment 2]  | High/Med/Low | Daily/Weekly/Monthly | Yes/No                |

### Evidence

**How do we know this is a real problem?**

- User research findings: [Summary]
- Support tickets: [Volume and key quotes]
- Analytics data: [Relevant metrics]
- Competitive gap: [What competitors offer]

---

## Section 3: The Solution

### Proposed Solution

[Write 3-5 sentences describing what you want to build. Be specific about the user experience.]

### Success Metrics

**Primary Metric:**

- [Metric name]: Target [X]% increase/decrease

**Secondary Metrics:**

- [Metric 1]: Target [X]% change
- [Metric 2]: Target [X]% change

**Leading Indicators:**

- [Early signal 1]: What we'll monitor during development
- [Early signal 2]: What we'll monitor during development

### User Experience Flow

**Before:**

```
[Describe current user flow step-by-step]
1. User does X
2. System responds with Y
3. User must then do Z
```

**After:**

```
[Describe proposed user flow step-by-step]
1. User does X
2. System responds with Y
3. [Highlight what's different/better]
```

---

## Section 4: Requirements

### Functional Requirements

**Must Have (P0):**

1. [Requirement]: [Why it's critical]
2. [Requirement]: [Why it's critical]
3. [Requirement]: [Why it's critical]

**Should Have (P1):**

1. [Requirement]: [Why it's important but not critical]
2. [Requirement]: [Why it's important but not critical]

**Nice to Have (P2):**

1. [Requirement]: [Why it's desirable but optional]
2. [Requirement]: [Why it's desirable but optional]

### Non-Functional Requirements

**Performance:**

- Page load time: [Target]
- API response time: [Target]
- Concurrent users: [Target capacity]

**Security:**

- Authentication: [Requirements]
- Authorization: [Who can access what]
- Data privacy: [PII handling, GDPR compliance]

**Scalability:**

- Expected volume: [Users/requests per day]
- Growth trajectory: [Projection over 6-12 months]
- Scalability limits: [Where the system breaks]

**Accessibility:**

- WCAG level: [A, AA, or AAA]
- Screen reader support: [Yes/No and details]
- Keyboard navigation: [Requirements]

**Browser/Platform Support:**

- Desktop browsers: [Chrome, Firefox, Safari versions]
- Mobile browsers: [iOS Safari, Chrome versions]
- Devices: [Desktop, tablet, mobile requirements]

---

## Section 5: User Stories

### Primary User Stories

**As a [user type], I want to [action], so that [benefit].**

**Story 1:**

- **User type**: [Who]
- **Action**: [What they want to do]
- **Benefit**: [Why they want to do it]
- **Acceptance criteria**:
  - [ ] [Specific, testable criterion]
  - [ ] [Specific, testable criterion]
  - [ ] [Specific, testable criterion]

**Story 2:**

- **User type**: [Who]
- **Action**: [What they want to do]
- **Benefit**: [Why they want to do it]
- **Acceptance criteria**:
  - [ ] [Specific, testable criterion]
  - [ ] [Specific, testable criterion]

**Story 3:**

- **User type**: [Who]
- **Action**: [What they want to do]
- **Benefit**: [Why they want to do it]
- **Acceptance criteria**:
  - [ ] [Specific, testable criterion]
  - [ ] [Specific, testable criterion]

### Edge Cases

1. **Scenario**: [What happens when...]
   - **Expected behaviour**: [How system should respond]
2. **Scenario**: [What happens when...]
   - **Expected behaviour**: [How system should respond]
3. **Scenario**: [What happens when...]
   - **Expected behaviour**: [How system should respond]

---

## Section 6: Technical Approach

### Technology Stack

**Frontend:**

- Framework: [e.g., React, Vue, Svelte]
- State management: [e.g., Redux, Context API]
- Styling: [e.g., Tailwind, CSS Modules]

**Backend:**

- Language/Framework: [e.g., Node.js/Express, Python/FastAPI]
- Database: [e.g., PostgreSQL, MongoDB]
- Hosting: [e.g., Vercel, AWS, Railway]

**Third-Party Services:**

- [Service 1]: [What it's used for]
- [Service 2]: [What it's used for]

### Data Model

**Key Entities:**

**Entity 1: [Name]**

```
{
  field1: type,      // Description
  field2: type,      // Description
  field3: type       // Description
}
```

**Entity 2: [Name]**

```
{
  field1: type,      // Description
  field2: type       // Description
}
```

**Relationships:**

- [Entity 1] has [relationship type] with [Entity 2]
- [Entity 2] has [relationship type] with [Entity 3]

### API Endpoints

| Method | Endpoint            | Purpose       | Request Body | Response |
| ------ | ------------------- | ------------- | ------------ | -------- |
| GET    | /api/[resource]     | [Description] | N/A          | [Format] |
| POST   | /api/[resource]     | [Description] | [Format]     | [Format] |
| PUT    | /api/[resource]/:id | [Description] | [Format]     | [Format] |
| DELETE | /api/[resource]/:id | [Description] | N/A          | [Format] |

### Architecture Diagram

```
[Create a simple ASCII diagram or describe the architecture]

User → Frontend (React)
       ↓
       API Layer (Express)
       ↓
       Database (PostgreSQL)
       ↓
       Third-party Services (e.g., Stripe, SendGrid)
```

---

## Section 7: Design & UI

### Design Principles

- [Principle 1]: [How it applies to this feature]
- [Principle 2]: [How it applies to this feature]
- [Principle 3]: [How it applies to this feature]

### Key Screens/Components

**Screen 1: [Name]**

- **Purpose**: [What users do here]
- **Key elements**: [List major UI components]
- **Interactions**: [How users interact]

**Screen 2: [Name]**

- **Purpose**: [What users do here]
- **Key elements**: [List major UI components]
- **Interactions**: [How users interact]

### Copywriting Guidelines

**Tone**: [Formal, casual, technical, friendly]

**Key Messages:**

- Button text: [e.g., "Get Started" vs "Sign Up"]
- Error messages: [Approach to errors]
- Success messages: [Approach to confirmations]

### Responsive Behaviour

- **Desktop (>1024px)**: [Layout approach]
- **Tablet (768-1023px)**: [Layout approach]
- **Mobile (<767px)**: [Layout approach]

---

## Section 8: Constraints & Assumptions

### Constraints

**Technical:**

- [Constraint 1]: [Why it exists and impact]
- [Constraint 2]: [Why it exists and impact]

**Business:**

- [Constraint 1]: [Why it exists and impact]
- [Constraint 2]: [Why it exists and impact]

**Timeline:**

- Launch date: [Date and reason]
- Key milestones: [List with dates]

**Budget:**

- Development cost: [Estimate if relevant]
- Third-party costs: [Monthly/annual estimates]

### Assumptions

1. [Assumption 1]: [What we're assuming is true]
2. [Assumption 2]: [What we're assuming is true]
3. [Assumption 3]: [What we're assuming is true]

**Validation Plan:**

- [ ] How we'll validate assumption 1
- [ ] How we'll validate assumption 2
- [ ] How we'll validate assumption 3

---

## Section 9: Risks & Mitigation

| Risk     | Likelihood   | Impact       | Mitigation Strategy       | Owner    |
| -------- | ------------ | ------------ | ------------------------- | -------- |
| [Risk 1] | High/Med/Low | High/Med/Low | [How to reduce/eliminate] | [Person] |
| [Risk 2] | High/Med/Low | High/Med/Low | [How to reduce/eliminate] | [Person] |
| [Risk 3] | High/Med/Low | High/Med/Low | [How to reduce/eliminate] | [Person] |

### Technical Risks

- [Risk]: [Mitigation]

### Product Risks

- [Risk]: [Mitigation]

### Timeline Risks

- [Risk]: [Mitigation]

---

## Section 10: Dependencies

### Internal Dependencies

- [Dependency 1]: [Team/person responsible, delivery date]
- [Dependency 2]: [Team/person responsible, delivery date]

### External Dependencies

- [Dependency 1]: [Vendor, SLA, backup plan]
- [Dependency 2]: [Vendor, SLA, backup plan]

### Prerequisite Work

- [ ] [Task 1 that must be completed first]
- [ ] [Task 2 that must be completed first]
- [ ] [Task 3 that must be completed first]

---

## Section 11: Testing Strategy

### Test Coverage

**Unit Tests:**

- [Component/function 1]: [What needs testing]
- [Component/function 2]: [What needs testing]

**Integration Tests:**

- [Flow 1]: [What needs testing]
- [Flow 2]: [What needs testing]

**End-to-End Tests:**

- [User journey 1]: [Critical path to test]
- [User journey 2]: [Critical path to test]

### QA Approach

**Manual Testing:**

- [ ] Functional testing checklist
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility testing

**Automated Testing:**

- [ ] CI/CD pipeline setup
- [ ] Test coverage targets: [X]%
- [ ] Performance benchmarks

### Beta Testing Plan

- **Beta group**: [Who will test and why]
- **Duration**: [How long]
- **Success criteria**: [What we're measuring]

---

## Section 12: Launch Plan

### Pre-Launch Checklist

- [ ] Code complete and reviewed
- [ ] Tests passing (unit, integration, e2e)
- [ ] Documentation complete
- [ ] Security review complete
- [ ] Performance benchmarks met
- [ ] Accessibility audit passed
- [ ] Monitoring and alerts configured
- [ ] Rollback plan documented and tested

### Launch Strategy

- [ ] **Phase 1**: Internal launch (team only)
- [ ] **Phase 2**: Beta launch ([X]% of users)
- [ ] **Phase 3**: General availability (100% rollout)

### Rollout Timeline

| Date   | Milestone     | Success Criteria         |
| ------ | ------------- | ------------------------ |
| [Date] | [Milestone 1] | [How we measure success] |
| [Date] | [Milestone 2] | [How we measure success] |
| [Date] | [Milestone 3] | [How we measure success] |

### Communication Plan

**Internal:**

- [Stakeholder group]: [Message and timing]
- [Stakeholder group]: [Message and timing]

**External:**

- [User segment]: [Message and channel]
- [User segment]: [Message and channel]

---

## Section 13: Post-Launch

### Monitoring Plan

**Key Metrics Dashboard:**

- [Metric 1]: Target and alert threshold
- [Metric 2]: Target and alert threshold
- [Metric 3]: Target and alert threshold

**User Feedback Collection:**

- In-app survey: [When and what to ask]
- Support channel monitoring: [What to watch for]
- User interviews: [Sample size and timing]

### Iteration Plan

**Week 1 Post-Launch:**

- [ ] Review error logs and fix critical bugs
- [ ] Analyse initial usage patterns
- [ ] Gather qualitative feedback

**Week 2-4 Post-Launch:**

- [ ] Implement quick wins based on feedback
- [ ] Optimise based on performance data
- [ ] Plan next iteration

### Success Evaluation

**30 Days Post-Launch:**

- [ ] Review success metrics against targets
- [ ] Document lessons learned
- [ ] Plan roadmap adjustments

---

## Section 14: Out of Scope

**Explicitly NOT Included:**

1. [Feature/functionality]: [Why it's out of scope]
2. [Feature/functionality]: [Why it's out of scope]
3. [Feature/functionality]: [Why it's out of scope]

**Future Considerations:**

- [Feature for later]: [Why not now, when maybe]
- [Feature for later]: [Why not now, when maybe]

---

## Using This PRP with Claude Code

### Step 1: Fill Out This Template

Complete each section thoughtfully. Don't skip sections—even constraints and assumptions matter.

### Step 2: Review with Claude

Paste your completed PRP and ask:

> "Review this PRP. What am I missing? What questions should I be asking? What risks haven't I considered?"

### Step 3: Generate Technical Specs

Once your PRP is solid:

> "Based on this PRP, generate a detailed technical specification with file structure, component breakdown, and implementation steps."

### Step 4: Break Into User Stories

> "Break this PRP into prioritised user stories with clear acceptance criteria."

### Step 5: Create Development Tasks

> "Generate a development task list from these user stories, organised by sprint with time estimates."

---

## PRP Template Checklist

Before you consider your PRP complete, verify:

- [ ] Problem statement is clear and specific
- [ ] Success metrics are measurable
- [ ] All P0 requirements have clear justification
- [ ] Technical approach is feasible given constraints
- [ ] User stories have testable acceptance criteria
- [ ] Risks have mitigation strategies
- [ ] Dependencies are identified with owners
- [ ] Testing strategy covers critical paths
- [ ] Launch plan includes rollback procedure
- [ ] Post-launch monitoring is defined

---

**Remember**: A great PRP is specific enough to build from, but flexible enough to adapt. If you're not sure about something, document the uncertainty and plan how you'll resolve it.
