# UAT Test Cases: Unsubscribe

**Category:** Unsubscribe Functionality
**Test Cases:** TC-006 to TC-010

---

## Overview

These test cases validate the one-click unsubscribe functionality via the `/api/unsubscribe` endpoint.

---

## TC-006: Valid Unsubscribe Link

**Priority:** P1
**Estimated Time:** 3 minutes

### Preconditions

- Test environment is accessible
- Active subscriber exists with known unsubscribe token
- Subscriber's `unsubscribed` status is `false`

### Test Data

| Field | Value                                     |
| ----- | ----------------------------------------- |
| Token | Valid UUID from welcome email or database |
| URL   | `/api/unsubscribe?token={token}`          |

### Steps

1. Obtain the unsubscribe token from:
   - Welcome email unsubscribe link, OR
   - Database query: `SELECT unsubscribe_token FROM subscribers WHERE email = 'test@example.com'`
2. Navigate to `/api/unsubscribe?token={token}`
3. Observe the page content
4. Verify database record updated

### Expected Result

- HTML confirmation page displays
- Page shows:
  - Success checkmark icon
  - "You've been unsubscribed" heading
  - Confirmation message
  - "Return to CoEngineers" link
- No JSON error message
- Database updated:
  - `unsubscribed = true`
  - `unsubscribed_at` set to current time

### Pass Criteria

- [ ] HTML confirmation page rendered
- [ ] Heading says "You've been unsubscribed"
- [ ] Return link works
- [ ] HTTP status is 200
- [ ] Database shows `unsubscribed = true`
- [ ] `unsubscribed_at` timestamp set

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-007: Already Unsubscribed

**Priority:** P2
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible
- Subscriber exists with `unsubscribed = true`
- Known unsubscribe token

### Test Data

| Field | Value                                |
| ----- | ------------------------------------ |
| Token | Token from already-unsubscribed user |
| URL   | `/api/unsubscribe?token={token}`     |

### Steps

1. Ensure test user is already unsubscribed (run TC-006 first or set in DB)
2. Navigate to `/api/unsubscribe?token={token}` again
3. Observe the page content
4. Check database has not changed

### Expected Result

- Same HTML confirmation page as TC-006 (idempotent)
- No error message shown
- HTTP status is 200
- Database unchanged:
  - `unsubscribed` still `true`
  - `unsubscribed_at` not updated

### Pass Criteria

- [ ] Same confirmation page displayed
- [ ] No error message
- [ ] HTTP status 200
- [ ] Idempotent (safe to click multiple times)
- [ ] No database changes

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-008: Invalid Token Format

**Priority:** P1
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible

### Test Data

| Invalid Token               | Reason       |
| --------------------------- | ------------ |
| `invalid`                   | Not a UUID   |
| `12345`                     | Numeric only |
| `abc-def-ghi`               | Wrong format |
| `<script>alert(1)</script>` | XSS attempt  |

### Steps

1. Navigate to `/api/unsubscribe?token=invalid`
2. Observe the response
3. Check Content-Type header
4. Repeat with other invalid tokens

### Expected Result

- JSON error response (not HTML)
- Error message: "Invalid unsubscribe link."
- HTTP status 400 Bad Request
- Content-Type: application/json
- No database queries made (validation fails first)

### Pass Criteria

- [ ] JSON response returned
- [ ] Error message matches expected
- [ ] HTTP status is 400
- [ ] No HTML confirmation page
- [ ] XSS attempt handled safely

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-009: Non-Existent Token

**Priority:** P2
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible

### Test Data

| Field | Value                                                          |
| ----- | -------------------------------------------------------------- |
| Token | `00000000-0000-0000-0000-000000000000` (valid UUID, not in DB) |
| URL   | `/api/unsubscribe?token=00000000-0000-0000-0000-000000000000`  |

### Steps

1. Navigate to `/api/unsubscribe?token=00000000-0000-0000-0000-000000000000`
2. Observe the response
3. Check HTTP status code

### Expected Result

- JSON error response
- Error message: "Subscription not found."
- HTTP status 404 Not Found
- Content-Type: application/json
- No database modifications

### Pass Criteria

- [ ] JSON response returned
- [ ] Error message matches expected
- [ ] HTTP status is 404
- [ ] Clear indication subscription doesn't exist
- [ ] No security information leaked

### Actual Result

| Field  | Value       |
| ------ | ----------- |
| Status | Pass / Fail |
| Date   |             |
| Tester |             |
| Notes  |             |

---

## TC-010: Missing Token Parameter

**Priority:** P1
**Estimated Time:** 2 minutes

### Preconditions

- Test environment is accessible

### Test Data

| URL Variations                          |
| --------------------------------------- |
| `/api/unsubscribe` (no query string)    |
| `/api/unsubscribe?` (empty query)       |
| `/api/unsubscribe?token=` (empty token) |

### Steps

1. Navigate to `/api/unsubscribe` (no token parameter)
2. Observe the response
3. Check HTTP status code
4. Repeat with empty token variations

### Expected Result

- JSON error response
- Error message: "Invalid unsubscribe link."
- HTTP status 400 Bad Request
- Content-Type: application/json
- Consistent behaviour for all empty variations

### Pass Criteria

- [ ] JSON response returned
- [ ] Error message matches expected
- [ ] HTTP status is 400
- [ ] All empty variations handled consistently
- [ ] No server error (500)

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
| TC-006    | P1       |        |      |        |
| TC-007    | P2       |        |      |        |
| TC-008    | P1       |        |      |        |
| TC-009    | P2       |        |      |        |
| TC-010    | P1       |        |      |        |

**P1 Pass Rate:** **\_ / 3 (must be 100%)
**P2 Pass Rate:** \_** / 2 (must be 90%+)

---

## Database Queries

### Find Subscriber Token

```sql
SELECT id, email, unsubscribe_token, unsubscribed
FROM subscribers
WHERE email = 'test@example.com';
```

### Check Unsubscribe Status

```sql
SELECT email, unsubscribed, unsubscribed_at
FROM subscribers
WHERE unsubscribe_token = '{token}';
```

### Reset for Retesting

```sql
UPDATE subscribers
SET unsubscribed = false, unsubscribed_at = null
WHERE email = 'test@example.com';
```

---

## Notes

- Unsubscribe is idempotent (safe to click multiple times)
- Token is UUID v4 format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- All error responses are JSON, success is HTML
- GDPR compliance: unsubscribe must work without authentication

---

_Last updated: December 2024_
