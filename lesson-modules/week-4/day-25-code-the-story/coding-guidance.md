# Coding with Claude Code - Best Practices

Guidance for implementing user stories effectively with Claude Code as your development partner.

---

## The Spec-Driven Development Process

### 1. Start with the Spec

Before writing any code, ensure you have:

- ✅ Clear user story with acceptance criteria
- ✅ Technical requirements defined
- ✅ Edge cases identified
- ✅ Success metrics established

**Why:** One structured iteration matches the accuracy of 8 unstructured iterations.

---

## Working Effectively with Claude Code

### The Explore → Plan → Code → Commit Workflow

#### Phase 1: Explore

**Goal:** Understand what exists before changing it

**Do this:**

- Read relevant files to understand current structure
- Check dependencies and existing patterns
- Identify files that need to be created or modified
- Ask Claude to explain unfamiliar code

**Example prompts:**

```
"Show me the existing authentication flow in this codebase"
"What's the current pattern for API calls in this project?"
"Read the user model and explain how validation works"
```

#### Phase 2: Plan

**Goal:** Agree on approach before coding

**Do this:**

- Describe what you want to build at a high level
- Ask Claude to suggest an implementation approach
- Discuss tradeoffs between different approaches
- Create a step-by-step plan

**Example prompts:**

```
"Here's my user story: [paste story]. What's the best way to implement this?"
"Should we use local state or context for this? Why?"
"Walk me through the steps to add this feature"
```

#### Phase 3: Code

**Goal:** Implement the agreed plan

**Do this:**

- Work incrementally (one piece at a time)
- Test each piece before moving to the next
- Ask Claude to explain non-obvious code
- Pause to refactor if things get messy

**Example prompts:**

```
"Let's implement step 1: create the database schema"
"Add error handling for the case where the API fails"
"Refactor this to be more maintainable"
```

#### Phase 4: Commit

**Goal:** Document what you built

**Do this:**

- Review what changed
- Write clear commit messages
- Update documentation
- Mark user story as complete

**Example prompts:**

```
"Review the changes and suggest a commit message"
"What documentation should I update for this feature?"
"Create a pull request description for this work"
```

---

## Best Practices for Coding with Claude

### 1. Be Specific in Your Requests

**❌ Vague:**
"Make the form better"

**✅ Specific:**
"Add client-side validation to the email field: required, valid email format, show error message below field in red text"

### 2. Work Incrementally

**❌ All at once:**
"Build the entire authentication system with login, signup, password reset, and OAuth"

**✅ One step at a time:**
"First, let's create the signup form with email and password fields"
[Test it]
"Now add validation and error handling"
[Test it]
"Now create the API endpoint to handle signup"
[Test it]

### 3. Ask Questions When Unclear

**Good questions to ask:**

- "Why did you choose this approach over [alternative]?"
- "What happens if [edge case]?"
- "Is there a simpler way to do this?"
- "What are the tradeoffs of this solution?"

### 4. Provide Context

**❌ Without context:**
"Add a button here"

**✅ With context:**
"Add a 'Save Draft' button next to the 'Publish' button on the article editor page. It should save without validation and show a toast notification."

### 5. Test as You Go

**After each meaningful change:**

1. Run the code
2. Test the happy path
3. Test error cases
4. Verify it meets acceptance criteria

**Don't wait until everything is built to test.**

### 6. Ask for Explanations

**Use Claude as a teacher:**

- "Explain what this code does line by line"
- "Why are we using useEffect here?"
- "What's the purpose of this middleware?"

**Learn patterns, not just solutions.**

### 7. Iterate on Solutions

**First iteration:** Get it working
**Second iteration:** Make it clean
**Third iteration:** Make it performant

**It's okay to refine as you go.**

---

## Common Patterns in Claude Code Development

### Pattern 1: Start with Types/Interfaces

**Do this first:**

```typescript
// Define your data structures
interface Article {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
}
```

**Why:** Types guide implementation and catch errors early.

### Pattern 2: Separate Concerns

**Structure your code:**

- **Components:** UI and user interactions
- **Services:** Business logic and API calls
- **Utils:** Reusable helper functions
- **Types:** Data structures and interfaces

**Why:** Easier to understand, test, and maintain.

### Pattern 3: Handle Errors Gracefully

**Always account for:**

- Network failures
- Invalid input
- Permission errors
- Missing data

**Show users what went wrong and how to fix it.**

### Pattern 4: Make it Testable

**Write code that's easy to verify:**

- Pure functions (same input → same output)
- Clear separation of logic and UI
- Mockable dependencies

### Pattern 5: Document as You Build

**Add comments for:**

- Non-obvious logic
- Business rule implementations
- Complex algorithms
- API integrations

**Your future self will thank you.**

---

## Debugging with Claude

### When Something Breaks

**Step 1: Describe the problem specifically**

```
"When I click the Save button, I get a 404 error.
The console shows: [paste error message]"
```

**Step 2: Show relevant code**

```
"Here's the component where the error occurs: [paste code]"
```

**Step 3: Explain expected vs actual behaviour**

```
"Expected: Article saves and user sees success message
Actual: 404 error and nothing is saved"
```

**Step 4: Work through diagnosis together**

- Check the API endpoint
- Verify request format
- Examine error logs
- Test with simpler data

### Common Debugging Questions

- "What does this error message mean?"
- "Where should I add logging to debug this?"
- "Help me trace where this value comes from"
- "Why isn't this useEffect running?"

---

## Code Quality Checklist

Before marking a story complete:

### Functionality

- [ ] Meets all acceptance criteria
- [ ] Happy path works
- [ ] Error cases handled
- [ ] Edge cases addressed

### Code Quality

- [ ] Code is readable and well-structured
- [ ] No obvious performance issues
- [ ] Follows project conventions
- [ ] Complex logic is commented

### Testing

- [ ] Manually tested all flows
- [ ] Tested on different screen sizes (if UI)
- [ ] Tested error scenarios
- [ ] Verified data persistence

### Documentation

- [ ] README updated (if needed)
- [ ] API docs updated (if applicable)
- [ ] Comments added for complex logic
- [ ] Changelog entry (if applicable)

### Security & Privacy

- [ ] User input is validated
- [ ] Sensitive data is protected
- [ ] Authorization checks in place
- [ ] No secrets in code

### Performance

- [ ] Page loads quickly
- [ ] No unnecessary re-renders (React)
- [ ] Database queries are efficient
- [ ] Assets are optimized

---

## Advanced Collaboration Techniques

### Use Claude to Review Your Code

**Ask for:**

- "Review this code for potential bugs"
- "Suggest improvements to this function"
- "Is there a more efficient way to do this?"
- "Check for security issues in this code"

### Learn Patterns from Claude

**Ask questions like:**

- "Show me best practices for error handling in Next.js"
- "What's the standard pattern for form validation in React?"
- "How do I structure database queries efficiently?"

### Explore Trade-offs Together

**Discuss decisions:**

- "Should I use server-side rendering or client-side for this page?"
- "REST API vs GraphQL for this use case?"
- "Local state vs global state - what's appropriate here?"

---

## Common Pitfalls to Avoid

### 1. Building Without Testing

❌ Writing lots of code without running it
✅ Test each small piece as you build

### 2. Copying Without Understanding

❌ Pasting code without knowing what it does
✅ Ask Claude to explain, then implement

### 3. Skipping Error Handling

❌ Only coding the happy path
✅ Handle errors from the start

### 4. Over-Engineering

❌ Adding complexity "just in case"
✅ Build what you need now, refactor later

### 5. Ignoring Existing Patterns

❌ Introducing new patterns inconsistent with codebase
✅ Follow existing conventions

### 6. Not Reading the Docs

❌ Guessing how a library works
✅ Ask Claude to reference official documentation

### 7. Rushing to "Done"

❌ Marking complete when it "mostly works"
✅ Ensure all acceptance criteria are met

---

## Effective Prompts for Different Scenarios

### Starting a New Feature

```
"I'm implementing [user story]. Here's the spec: [paste spec].
Review the spec and suggest the best implementation approach."
```

### Adding to Existing Code

```
"I need to add [functionality] to [existing file].
Read [file] and suggest how to integrate this new feature."
```

### Fixing a Bug

```
"There's a bug: [description]. Expected: [x]. Actual: [y].
Here's the relevant code: [paste code]. Help me diagnose the issue."
```

### Refactoring

```
"This code works but it's messy: [paste code].
Help me refactor it to be more maintainable while keeping the same functionality."
```

### Performance Optimization

```
"This page is loading slowly. Here's the component: [paste code].
Identify performance bottlenecks and suggest optimizations."
```

### Learning

```
"I don't understand this code: [paste code].
Explain what it does and why it's written this way."
```

---

## When You're Stuck

### 1. Take a Break

Step away for 5 minutes. Fresh eyes see solutions.

### 2. Break It Down Smaller

If the problem feels too big, split it into smaller pieces.

### 3. Ask for Alternative Approaches

"This isn't working. What's a completely different way to solve this?"

### 4. Simplify First

Strip away complexity until you have something that works, then add features back.

### 5. Check Assumptions

"Here's what I think is happening: [assumption]. Is that correct?"

### 6. Look at Similar Code

"Show me examples of how this pattern is used elsewhere in the codebase"

---

## Measuring Success

**You're coding effectively with Claude when:**

✅ You understand the code being written
✅ You can explain why design decisions were made
✅ Features work reliably, not just "sometimes"
✅ Your code is maintainable (you could modify it later)
✅ You're learning patterns you can apply to future work
✅ You're shipping features that meet acceptance criteria

---

## Resources

### Official Documentation

- [Anthropic Claude Code Best Practices](https://docs.anthropic.com/claude-code)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

### Community Resources

- CoEngine Discord: Share what you're building
- GitHub Examples: See how others structure projects
- Stack Overflow: Common issues and solutions

---

## Remember

**Good code is:**

- ✅ Functional (meets requirements)
- ✅ Understandable (others can read it)
- ✅ Maintainable (can be changed easily)
- ✅ Reliable (works consistently)

**Good code is NOT:**

- ❌ Perfect
- ❌ Over-engineered
- ❌ Clever for cleverness's sake

**Ship working code, then improve it.**

---

**Guide Version:** 1.0
**Last Updated:** 2025-12-09
**Created by:** CoEngine
