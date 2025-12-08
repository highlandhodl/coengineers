# UAT Test Cases: Email Signup

**Category:** Email Subscription Functionality
**Test Cases:** TC-001 to TC-005

---

## Overview

These test cases validate the email signup form and `/api/subscribe` endpoint functionality.

---

## TC-001: Valid Email Signup (New Subscriber)

**Priority:** P1
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Test email address has never been used to subscribe
- Email inbox is accessible
- Browser developer console is open

### Test Data

| Field  | Value                     |
| ------ | ------------------------- |
| Email  | `newuser+uat@example.com` |
| Source | Default (website)         |

### Steps

1. Navigate to the CoEngineers homepage
2. Locate the email signup form
3. Enter the test email address
4. Click the "Subscribe" or "Sign Up" button
5. Observe the on-screen feedback
6. Check the email inbox within 2 minutes
7. Open the welcome email and verify contents

### Expected Result

- Success message displays: "You're in! Check your inbox." (or similar)
- Page does not show any error messages
- Welcome email arrives within 2 minutes
- Email contains:
  - CoEngineers branding
  - Welcome message
  - Unsubscribe link
  - British English spelling

### Pass Criteria

- [ ] Success message appears within 3 seconds
- [ ] No console errors during submission
- [ ] Welcome email received
- [ ] Email renders correctly
- [ ] Unsubscribe link present in email

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-002: Invalid Email Format

**Priority:** P1
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible
- Browser developer console is open

### Test Data

| Invalid Email       | Reason         |
| ------------------- | -------------- |
| `notanemail`        | No @ symbol    |
| `invalid@`          | No domain      |
| `@example.com`      | No local part  |
| `user @example.com` | Space in email |

### Steps

1. Navigate to the email signup form
2. Enter an invalid email (e.g., "notanemail")
3. Click the "Subscribe" button
4. Observe the validation message
5. Check browser console for errors

### Expected Result

- Form submission is prevented
- Error message displays: "Please enter a valid email address" (or similar)
- No network request made to API (if client-side validation)
- If server-side validation, API returns 400 status
- No welcome email is sent

### Pass Criteria

- [ ] Validation error displayed
- [ ] Error message is user-friendly
- [ ] Form field highlighted as invalid
- [ ] No console errors (expected validation)
- [ ] No database record created

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-003: Duplicate Subscription

**Priority:** P2
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Test email is already subscribed (active)
- Previous subscription confirmed in database

### Test Data

| Field | Value                                   |
| ----- | --------------------------------------- |
| Email | `existing+uat@example.com` (must exist) |

### Steps

1. Verify test email is subscribed (check database or previous test)
2. Navigate to the email signup form
3. Enter the already-subscribed email
4. Click the "Subscribe" button
5. Observe the feedback message

### Expected Result

- Friendly message displays: "You're already subscribed!" (or similar)
- Message tone is informative, not an error
- No duplicate database record created
- No welcome email sent (already received previously)
- API returns 200 status (not 201)

### Pass Criteria

- [ ] Appropriate message displayed
- [ ] Message is friendly, not error-like
- [ ] No duplicate in database
- [ ] No email sent
- [ ] API response is 200

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-004: Resubscribe After Unsubscribe

**Priority:** P2
**Estimated Time:** 5 minutes

### Preconditions

- Test environment is accessible
- Test email exists in database with `unsubscribed = true`
- Email inbox is accessible

### Test Data

| Field | Value                                                |
| ----- | ---------------------------------------------------- |
| Email | `resubscribe+uat@example.com` (must be unsubscribed) |

### Steps

1. Verify test email has `unsubscribed = true` in database
2. Navigate to the email signup form
3. Enter the previously unsubscribed email
4. Click the "Subscribe" button
5. Observe the feedback message
6. Check the email inbox
7. Verify database record updated

### Expected Result

- Success message displays (same as new subscriber)
- New welcome email is sent
- Database record updated:
  - `unsubscribed = false`
  - `unsubscribed_at = null`
  - `subscribed_at` updated to now
- API returns 201 status

### Pass Criteria

- [ ] Success message displayed
- [ ] Welcome email received
- [ ] Database shows `unsubscribed = false`
- [ ] `subscribed_at` timestamp updated
- [ ] User can receive future emails

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-005: Empty Email Submission

**Priority:** P1
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible
- Browser developer console is open

### Test Data

| Field | Value   |
| ----- | ------- |
| Email | (empty) |

### Steps

1. Navigate to the email signup form
2. Leave the email field completely empty
3. Click the "Subscribe" button
4. Observe the validation message
5. Check browser console

### Expected Result

- Form submission is prevented
- Validation error displays (e.g., "Email address is required")
- HTML5 validation may trigger browser-native message
- No API request made
- No database record created

### Pass Criteria

- [ ] Validation error displayed
- [ ] Clear instruction to enter email
- [ ] Form field indicated as required
- [ ] No network request to API
- [ ] No console errors (expected validation)

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
| TC-001    | P1       |        |      |        |
| TC-002    | P1       |        |      |        |
| TC-003    | P2       |        |      |        |
| TC-004    | P2       |        |      |        |
| TC-005    | P1       |        |      |        |

**P1 Pass Rate:** **\_ / 3 (must be 100%)
**P2 Pass Rate:** \_** / 2 (must be 90%+)

---

## Notes

- Use email + addressing (e.g., `test+1@example.com`) for multiple test runs
- Check spam folder if welcome email not received
- Browser DevTools Network tab useful for API debugging
- All test cases assume British English in user-facing messages

---

_Last updated: December 2024_
