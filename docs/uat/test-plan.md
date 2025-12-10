# UAT Test Plan

**Feature**: 004-production-release
**Version**: 1.0
**Date**: 2025-12-10
**Status**: Ready for Execution

## Overview

This test plan covers User Acceptance Testing for the 004-production-release feature, which includes:

1. UI Refinements (text-only logo, no countdown)
2. Comprehensive Test Suite (80%+ coverage)
3. Documentation for Stakeholders (UX, Engineering, Product)

## Test Environment

- **Local**: `http://localhost:4321`
- **Preview**: Vercel preview deployment
- **Production**: `https://coengineers.ai`

## Test Priority Levels

- **P1**: Must pass before launch (blocking)
- **P2**: Should pass, minor impact if fails
- **P3**: Nice to have, can be addressed post-launch

---

## P1 Test Cases

### User Story 1: UI Refinements

#### TC-001: Text-Only Logo Display (P1)

**Preconditions**: Fresh browser, no cache

**Steps**:

1. Navigate to homepage (/)
2. Observe logo in header

**Expected Result**: Logo displays as text "CoEngineers" without gear icon

**Status**: [ ] Pass / [ ] Fail

---

#### TC-002: No Countdown Timer (P1)

**Preconditions**: Fresh browser, no cache

**Steps**:

1. Navigate to homepage (/)
2. Scroll down page
3. Search page source for "countdown"

**Expected Result**: No countdown timer visible on page

**Status**: [ ] Pass / [ ] Fail

---

### User Story 2: Test Suite

#### TC-003: All Tests Pass (P1)

**Preconditions**: Development environment set up

**Steps**:

1. Run `npm run test:run`

**Expected Result**: All 26 tests pass (3 test files)

**Status**: [ ] Pass / [ ] Fail

---

#### TC-004: Coverage Meets Threshold (P1)

**Preconditions**: Development environment set up

**Steps**:

1. Run `npm run test:coverage`
2. Check coverage for `src/pages/api/`

**Expected Result**: Coverage >= 80% on API endpoints

**Status**: [ ] Pass / [ ] Fail

---

#### TC-005: Quality Gates Pass (P1)

**Preconditions**: Development environment set up

**Steps**:

1. Run `npm run type-check && npm run lint && npm run format:check && npm run build`

**Expected Result**: All commands exit with status 0

**Status**: [ ] Pass / [ ] Fail

---

### User Story 3: Documentation

#### TC-006: UX Documentation Complete (P1)

**Preconditions**: None

**Steps**:

1. Check `docs/ux/README.md` exists
2. Check `docs/ux/user-journeys.md` exists
3. Verify user journeys covers: homepage, subscription, navigation, unsubscribe

**Expected Result**: All files exist with relevant content

**Status**: [ ] Pass / [ ] Fail

---

#### TC-007: Engineering Documentation Complete (P1)

**Preconditions**: None

**Steps**:

1. Check `docs/engineering/README.md` exists
2. Check `docs/engineering/architecture.md` exists
3. Check `docs/engineering/api.md` exists
4. Check `docs/engineering/deployment.md` exists
5. Check `docs/engineering/troubleshooting.md` exists

**Expected Result**: All files exist with relevant content

**Status**: [ ] Pass / [ ] Fail

---

#### TC-008: Product Documentation Complete (P1)

**Preconditions**: None

**Steps**:

1. Check `docs/product/README.md` exists
2. Check `docs/product/feature-summary.md` exists
3. Check `docs/product/decisions.md` exists
4. Check `docs/product/roadmap.md` exists

**Expected Result**: All files exist with relevant content

**Status**: [ ] Pass / [ ] Fail

---

## P2 Test Cases

#### TC-009: Mobile Logo Display (P2)

**Preconditions**: Mobile device or responsive mode

**Steps**:

1. Navigate to homepage on mobile viewport (375px width)
2. Observe logo

**Expected Result**: Logo displays correctly, not truncated

**Status**: [ ] Pass / [ ] Fail

---

#### TC-010: Documentation Formatting (P2)

**Preconditions**: None

**Steps**:

1. Open each documentation file in GitHub/editor
2. Verify markdown renders correctly

**Expected Result**: All markdown renders without errors

**Status**: [ ] Pass / [ ] Fail

---

## Sign-off Criteria

### P1 Requirements

- [ ] TC-001: Text-only logo
- [ ] TC-002: No countdown timer
- [ ] TC-003: All tests pass
- [ ] TC-004: Coverage >= 80%
- [ ] TC-005: Quality gates pass
- [ ] TC-006: UX docs complete
- [ ] TC-007: Engineering docs complete
- [ ] TC-008: Product docs complete

**100% P1 pass rate required for launch sign-off.**

### P2 Requirements

- [ ] TC-009: Mobile logo
- [ ] TC-010: Documentation formatting

**P2 failures should be logged as issues for post-launch fix.**

---

## Execution Instructions

1. Clone repository and checkout `004-production-release` branch
2. Run `npm install`
3. Execute each test case in order
4. Record results in `docs/uat/test-results.md`
5. If all P1 tests pass, provide sign-off
6. If any P1 test fails, stop and report to development team
