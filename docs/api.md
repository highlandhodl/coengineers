# API Reference

**CoEngineers Email Subscription API**

This document provides a developer-friendly reference for the CoEngineers API endpoints.

---

## Base URLs

| Environment | URL                          |
| ----------- | ---------------------------- |
| Production  | `https://coengineers.ai/api` |
| Local       | `http://localhost:4321/api`  |

---

## Authentication

No authentication is required. All endpoints are public.

---

## Endpoints

### POST /subscribe

Subscribe an email address to the mailing list.

#### Request

**Content Types:**

- `application/json`
- `application/x-www-form-urlencoded`
- `multipart/form-data`

**Body Parameters:**

| Parameter | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| `email`   | string | Yes      | Email address to subscribe  |
| `source`  | string | No       | Where the signup originated |

**Valid Source Values:**

- `website` (default)
- `homepage`
- `community-page`
- `day-page`

#### Examples

**cURL (JSON):**

```bash
curl -X POST https://coengineers.ai/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "source": "homepage"}'
```

**cURL (Form):**

```bash
curl -X POST https://coengineers.ai/api/subscribe \
  -d "email=user@example.com" \
  -d "source=homepage"
```

**TypeScript:**

```typescript
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    source: 'homepage',
  }),
});

const data = await response.json();

if (data.success) {
  console.log(data.message);
} else {
  console.error(data.error);
}
```

**HTML Form:**

```html
<form action="/api/subscribe" method="POST">
  <input type="email" name="email" required />
  <input type="hidden" name="source" value="homepage" />
  <button type="submit">Subscribe</button>
</form>
```

#### Responses

##### 201 Created — New Subscription

Returned when a new subscriber is created or a previously unsubscribed user resubscribes.

```json
{
  "success": true,
  "message": "You're in! Check your inbox."
}
```

**Side Effects:**

- Subscriber record created/updated in database
- Welcome email sent via Resend
- Email send record created for auditing

---

##### 200 OK — Already Subscribed

Returned when an active subscriber attempts to subscribe again.

```json
{
  "success": true,
  "message": "You're already subscribed!"
}
```

**Side Effects:** None

---

##### 400 Bad Request — Invalid Email

Returned when email is missing, empty, or invalid format.

```json
{
  "success": false,
  "error": "Please enter a valid email address."
}
```

**Validation Rules:**

- Must contain `@` symbol
- Must have domain part
- Maximum 254 characters
- Normalised to lowercase

---

##### 500 Internal Server Error

Returned when database or email operations fail.

```json
{
  "success": false,
  "error": "Something went wrong. Please try again later."
}
```

---

### GET /unsubscribe

Unsubscribe a user via their unique token. Returns an HTML confirmation page.

#### Request

**Query Parameters:**

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| `token`   | string | Yes      | UUID unsubscribe token |

#### Examples

**Browser Link:**

```
https://coengineers.ai/api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000
```

**cURL:**

```bash
curl "https://coengineers.ai/api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000"
```

**JavaScript Redirect:**

```javascript
const token = '550e8400-e29b-41d4-a716-446655440000';
window.location.href = `/api/unsubscribe?token=${token}`;
```

#### Responses

##### 200 OK — Successfully Unsubscribed

Returned when user is successfully unsubscribed (or was already unsubscribed).

**Content-Type:** `text/html`

Returns a branded HTML confirmation page with:

- Success checkmark icon
- "You've been unsubscribed" heading
- Confirmation message
- Link to return to site

**Side Effects:**

- Subscriber record updated: `unsubscribed=true`, `unsubscribed_at=NOW()`
- If already unsubscribed: No database changes (idempotent)

---

##### 400 Bad Request — Invalid Token

Returned when token is missing or not in UUID format.

**Content-Type:** `application/json`

```json
{
  "success": false,
  "error": "Invalid unsubscribe link."
}
```

**UUID Format:** `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

---

##### 404 Not Found — Token Not Found

Returned when no subscriber exists with the given token.

**Content-Type:** `application/json`

```json
{
  "success": false,
  "error": "Subscription not found."
}
```

---

##### 500 Internal Server Error

Returned when database operations fail.

**Content-Type:** `application/json`

```json
{
  "success": false,
  "error": "Something went wrong. Please try again."
}
```

---

## TypeScript Types

```typescript
// Valid signup sources
type SignupSource = 'website' | 'homepage' | 'community-page' | 'day-page';

// Subscribe request body
interface SubscribeRequest {
  email: string;
  source?: SignupSource;
}

// Success response
interface SuccessResponse {
  success: true;
  message: string;
}

// Error response
interface ErrorResponse {
  success: false;
  error: string;
}

// Union type for all API responses
type ApiResponse = SuccessResponse | ErrorResponse;
```

---

## Error Handling

### TypeScript Example

```typescript
async function subscribe(email: string, source?: SignupSource): Promise<void> {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source }),
  });

  const data: ApiResponse = await response.json();

  if (!data.success) {
    // Handle error
    throw new Error(data.error);
  }

  // Handle success
  console.log(data.message);
}
```

### Status Code Summary

| Code | Meaning              | Action                          |
| ---- | -------------------- | ------------------------------- |
| 200  | Success (idempotent) | Show success message            |
| 201  | Created              | Show success message            |
| 400  | Bad request          | Show validation error           |
| 404  | Not found            | Show not found error            |
| 500  | Server error         | Show generic error, retry later |

---

## Rate Limiting

Currently, no explicit rate limiting is enforced. Vercel applies default limits of approximately 100 requests per 10 seconds per IP address.

---

## Testing Locally

### Setup

```bash
# Start development server
npm run dev

# Server runs at http://localhost:4321
```

### Test Subscribe

```bash
# Valid email
curl -X POST http://localhost:4321/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Invalid email
curl -X POST http://localhost:4321/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid"}'
```

### Test Unsubscribe

```bash
# Valid token (use a real token from your database)
curl "http://localhost:4321/api/unsubscribe?token=YOUR-TOKEN-HERE"

# Invalid token
curl "http://localhost:4321/api/unsubscribe?token=invalid"
```

---

## Related Documentation

- [Full API Contract](../specs/004-production-release/contracts/api.md) — OpenAPI specification
- [Database Schema](../specs/004-production-release/data-model.md) — Table definitions
- [Architecture](./architecture.md) — System design

---

_Last updated: December 2024_
