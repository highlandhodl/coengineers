# UAT Test Plan

**CoEngineers Production Release**

---

## 1. Overview

### Purpose

This document defines the User Acceptance Testing (UAT) approach for validating the CoEngineers platform before production release. UAT ensures the system meets business requirements and provides a quality user experience.

### Scope

**In Scope:**

- Email signup functionality (subscribe/unsubscribe)
- Lesson navigation (sidebar, weeks, days)
- Slash command system (display, copy, file existence)
- Responsive design (mobile, tablet, desktop)
- Reference documentation (troubleshooting, FAQ, glossary)

**Out of Scope:**

- Performance/load testing
- Security penetration testing
- Accessibility audit (WCAG compliance)
- Browser compatibility (pre-Chromium Edge, IE)

### Test Case Summary

| Category          | Test Cases        | Priority Mix       |
| ----------------- | ----------------- | ------------------ |
| Email Signup      | TC-001 to TC-005  | 3x P1, 2x P2       |
| Unsubscribe       | TC-006 to TC-010  | 3x P1, 2x P2       |
| Navigation        | TC-011 to TC-015  | 3x P1, 2x P2       |
| Slash Commands    | TC-016 to TC-020  | 3x P1, 2x P2       |
| Responsive Design | TC-021 to TC-025  | 3x P1, 2x P2       |
| **Total**         | **25 test cases** | **15x P1, 10x P2** |

---

## 2. Test Environment

### URLs

| Environment | URL                    | Purpose               |
| ----------- | ---------------------- | --------------------- |
| Production  | https://coengineers.ai | Final release testing |
| Preview     | https://\*.vercel.app  | Branch/PR testing     |
| Local       | http://localhost:4321  | Development testing   |

### Devices

| Device  | Viewport  | Purpose               |
| ------- | --------- | --------------------- |
| Desktop | 1920×1080 | Primary experience    |
| Tablet  | 768×1024  | Responsive breakpoint |
| Mobile  | 375×667   | Mobile experience     |

### Browsers

| Browser | Version | Platform       |
| ------- | ------- | -------------- |
| Chrome  | Latest  | Windows, macOS |
| Firefox | Latest  | Windows, macOS |
| Safari  | Latest  | macOS, iOS     |
| Edge    | Latest  | Windows        |

### Test Data

| Data Type          | Value                                  | Notes                               |
| ------------------ | -------------------------------------- | ----------------------------------- |
| Valid email        | `test+uat@example.com`                 | Use + addressing for multiple tests |
| Invalid email      | `notanemail`                           | Missing @ symbol                    |
| Invalid token      | `invalid-token`                        | Non-UUID format                     |
| Non-existent token | `00000000-0000-0000-0000-000000000000` | Valid UUID, not in DB               |

---

## 3. Prerequisites

### Tester Setup

- [ ] Access to test environment (production or preview URL)
- [ ] Test email account that you control
- [ ] Chrome DevTools for responsive testing
- [ ] Access to browser developer console
- [ ] Ability to clear browser cache/cookies

### System Dependencies

- [ ] Supabase database accessible
- [ ] Resend email service operational
- [ ] Vercel deployment successful
- [ ] DNS properly configured

---

## 4. Test Categories

### 4.1 Email Signup (TC-001 to TC-005)

Tests the email subscription form and API endpoint.

| ID     | Title                               | Priority |
| ------ | ----------------------------------- | -------- |
| TC-001 | Valid email signup (new subscriber) | P1       |
| TC-002 | Invalid email format                | P1       |
| TC-003 | Duplicate subscription              | P2       |
| TC-004 | Resubscribe after unsubscribe       | P2       |
| TC-005 | Empty email submission              | P1       |

**Detailed test cases:** [test-cases-signup.md](./test-cases-signup.md)

### 4.2 Unsubscribe (TC-006 to TC-010)

Tests the one-click unsubscribe functionality.

| ID     | Title                   | Priority |
| ------ | ----------------------- | -------- |
| TC-006 | Valid unsubscribe link  | P1       |
| TC-007 | Already unsubscribed    | P2       |
| TC-008 | Invalid token format    | P1       |
| TC-009 | Non-existent token      | P2       |
| TC-010 | Missing token parameter | P1       |

**Detailed test cases:** [test-cases-unsubscribe.md](./test-cases-unsubscribe.md)

### 4.3 Lesson Navigation (TC-011 to TC-015)

Tests navigation through course content.

| ID     | Title                               | Priority |
| ------ | ----------------------------------- | -------- |
| TC-011 | Navigate through Week 1 lessons     | P1       |
| TC-012 | Navigate between weeks              | P1       |
| TC-013 | Use previous/next navigation        | P2       |
| TC-014 | Navigate to Getting Started section | P1       |
| TC-015 | Navigate to Bonus section           | P2       |

**Detailed test cases:** [test-cases-navigation.md](./test-cases-navigation.md)

### 4.4 Slash Commands (TC-016 to TC-020)

Tests the interactive slash command components.

| ID     | Title                                      | Priority |
| ------ | ------------------------------------------ | -------- |
| TC-016 | Slash command component displays correctly | P1       |
| TC-017 | Copy slash command to clipboard            | P2       |
| TC-018 | Slash command matches lesson day           | P1       |
| TC-019 | All Week 1 slash commands present          | P2       |
| TC-020 | Slash command file exists                  | P1       |

**Detailed test cases:** [test-cases-commands.md](./test-cases-commands.md)

### 4.5 Responsive Design (TC-021 to TC-025)

Tests responsive behaviour across devices.

| ID     | Title                         | Priority |
| ------ | ----------------------------- | -------- |
| TC-021 | Mobile navigation menu        | P1       |
| TC-022 | Content readability on mobile | P1       |
| TC-023 | Email signup form on mobile   | P1       |
| TC-024 | Tablet layout                 | P2       |
| TC-025 | Desktop layout                | P2       |

**Detailed test cases:** [test-cases-responsive.md](./test-cases-responsive.md)

---

## 5. Pass/Fail Criteria

### Priority Definitions

| Priority | Definition              | Pass Requirement |
| -------- | ----------------------- | ---------------- |
| **P1**   | Critical functionality  | 100% must pass   |
| **P2**   | Important functionality | 90% must pass    |
| **P3**   | Nice to have            | 80% must pass    |

### Overall Pass Criteria

- [ ] All P1 test cases pass (15/15)
- [ ] At least 9 of 10 P2 test cases pass (90%)
- [ ] No critical bugs remain open
- [ ] No major bugs blocking core functionality

### Defect Severity

| Severity     | Definition          | Example                                 |
| ------------ | ------------------- | --------------------------------------- |
| **Critical** | System unusable     | Site won't load, API completely down    |
| **Major**    | Core feature broken | Can't subscribe, can't navigate lessons |
| **Minor**    | Feature degraded    | Copy button doesn't show feedback       |
| **Cosmetic** | Visual issues       | Slight alignment issues                 |

---

## 6. Test Execution Process

### 6.1 Preparation

1. Clear browser cache and cookies
2. Open browser developer console
3. Navigate to test environment
4. Verify environment is correct (check URL)
5. Open test case document

### 6.2 Execution

For each test case:

1. **Read** the test case completely
2. **Verify** preconditions are met
3. **Execute** steps exactly as written
4. **Observe** actual results
5. **Compare** to expected results
6. **Record** pass/fail status
7. **Screenshot** any failures

### 6.3 Recording Results

For each test case, record:

| Field         | Description              |
| ------------- | ------------------------ |
| Test Case ID  | e.g., TC-001             |
| Date          | DD/MM/YYYY               |
| Tester        | Name                     |
| Environment   | Production/Preview/Local |
| Browser       | Chrome/Firefox/Safari    |
| Status        | Pass/Fail/Blocked        |
| Actual Result | What happened            |
| Screenshot    | If failure               |
| Notes         | Additional observations  |

### 6.4 Defect Reporting

For failures, create a GitHub Issue with:

```markdown
## Bug Report: [Brief Title]

**Test Case:** TC-XXX
**Environment:** [URL]
**Browser:** [Name + Version]
**Device:** [Desktop/Tablet/Mobile]

### Steps to Reproduce

1. [Step]
2. [Step]
3. [Step]

### Expected Result

[What should happen]

### Actual Result

[What happened]

### Screenshot

[Attach image]

### Severity

[Critical/Major/Minor/Cosmetic]
```

---

## 7. Sign-Off Requirements

### Pre-Release Checklist

- [ ] All P1 test cases executed and passed
- [ ] P2 pass rate meets threshold (90%)
- [ ] No Critical or Major bugs open
- [ ] Test execution log complete
- [ ] Screenshots attached for failures
- [ ] Defects logged in GitHub Issues

### Approvals Required

| Role          | Name        | Signature | Date |
| ------------- | ----------- | --------- | ---- |
| QA Tester     |             |           |      |
| Developer     |             |           |      |
| Product Owner | John Gordon |           |      |

### Go/No-Go Decision

- [ ] **GO** — Release approved
- [ ] **NO-GO** — Release blocked (document reason)

---

## 8. Test Schedule

### Timeline

| Day   | Activity                            |
| ----- | ----------------------------------- |
| Day 1 | Environment setup, P1 email tests   |
| Day 2 | P1 unsubscribe & navigation tests   |
| Day 3 | P1 slash command & responsive tests |
| Day 4 | All P2 tests                        |
| Day 5 | Defect retesting                    |
| Day 6 | Regression testing                  |
| Day 7 | Sign-off                            |

### Effort Estimate

| Activity          | Hours        |
| ----------------- | ------------ |
| P1 Test Execution | 4            |
| P2 Test Execution | 3            |
| Defect Retesting  | 2            |
| Documentation     | 1            |
| **Total**         | **10 hours** |

---

## 9. Risks & Mitigation

| Risk                         | Impact                     | Mitigation                          |
| ---------------------------- | -------------------------- | ----------------------------------- |
| Email delivery delays        | Can't verify welcome email | Use Resend dashboard to check sends |
| Test environment unavailable | Testing blocked            | Use local environment               |
| Database connection issues   | API tests fail             | Check Supabase status page          |
| Browser inconsistencies      | False failures             | Document browser-specific issues    |

---

## 10. Appendix

### A. Test Data Setup

```sql
-- Create test subscriber (for unsubscribe tests)
INSERT INTO subscribers (email, unsubscribe_token)
VALUES ('test@example.com', '550e8400-e29b-41d4-a716-446655440000');

-- Create unsubscribed user (for resubscribe test)
INSERT INTO subscribers (email, unsubscribed, unsubscribed_at, unsubscribe_token)
VALUES ('resubscribe@example.com', true, NOW(), '660e8400-e29b-41d4-a716-446655440001');
```

### B. Browser DevTools Shortcuts

| Action        | Chrome        | Firefox       | Safari    |
| ------------- | ------------- | ------------- | --------- |
| Open DevTools | F12           | F12           | Cmd+Opt+I |
| Device Mode   | Cmd+Shift+M   | Cmd+Shift+M   | N/A       |
| Clear Cache   | Cmd+Shift+Del | Cmd+Shift+Del | N/A       |

### C. Contact Information

| Role          | Name        | Contact             |
| ------------- | ----------- | ------------------- |
| Product Owner | John Gordon | john@coengineers.ai |
| QA Lead       | TBD         |                     |
| Developer     | TBD         |                     |

---

_Last updated: December 2024_
