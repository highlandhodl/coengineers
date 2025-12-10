# API Reference

This document describes the API endpoints for the CoEngineers platform.

## Base URL

- **Production**: `https://coengineers.ai`
- **Development**: `http://localhost:4321`

---

## POST /api/subscribe

Subscribe a new email address to the mailing list.

### Request

**Headers**:

```
Content-Type: application/json
```

or

```
Content-Type: application/x-www-form-urlencoded
```

**Body (JSON)**:

```json
{
  "email": "user@example.com",
  "source": "homepage"
}
```

**Parameters**:

| Field    | Type   | Required | Description                                                          |
| -------- | ------ | -------- | -------------------------------------------------------------------- |
| `email`  | string | Yes      | Valid email address                                                  |
| `source` | string | No       | Signup location: `website`, `homepage`, `community-page`, `day-page` |

### Responses

**201 Created** - New subscriber:

```json
{
  "success": true,
  "message": "You're in! Check your inbox."
}
```

**200 OK** - Already subscribed:

```json
{
  "success": true,
  "message": "You're already subscribed!"
}
```

**201 Created** - Resubscribed:

```json
{
  "success": true,
  "message": "You're in! Check your inbox."
}
```

**400 Bad Request** - Invalid email:

```json
{
  "success": false,
  "error": "Please enter a valid email address."
}
```

**500 Internal Server Error** - Server error:

```json
{
  "success": false,
  "error": "Something went wrong. Please try again later."
}
```

### Examples

**cURL**:

```bash
curl -X POST https://coengineers.ai/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "source": "homepage"}'
```

**JavaScript (Fetch)**:

```javascript
const response = await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "user@example.com",
    source: "homepage",
  }),
});
const data = await response.json();
```

---

## GET /api/unsubscribe

Unsubscribe a user via their unique token.

### Request

**Query Parameters**:

| Field   | Type | Required | Description              |
| ------- | ---- | -------- | ------------------------ |
| `token` | UUID | Yes      | Unique unsubscribe token |

### Responses

**200 OK** - Successfully unsubscribed:

```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <title>Unsubscribed - CoEngineers</title>
  </head>
  <body>
    <h1>You've been unsubscribed</h1>
    <p>Sorry to see you go. You won't receive any more emails from us.</p>
    <a href="/">Return to CoEngineers</a>
  </body>
</html>
```

**400 Bad Request** - Invalid token format:

```json
{
  "success": false,
  "error": "Invalid unsubscribe link."
}
```

**404 Not Found** - Token not found:

```json
{
  "success": false,
  "error": "Subscription not found."
}
```

**500 Internal Server Error** - Server error:

```json
{
  "success": false,
  "error": "Something went wrong. Please try again."
}
```

### Examples

**URL**:

```
https://coengineers.ai/api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000
```

**cURL**:

```bash
curl "https://coengineers.ai/api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000"
```

---

## Error Handling

All error responses follow this format:

```json
{
  "success": false,
  "error": "Human-readable error message"
}
```

**Error Codes**:

| HTTP Status | Meaning                             |
| ----------- | ----------------------------------- |
| 200         | Success                             |
| 201         | Created (new resource)              |
| 400         | Bad Request (invalid input)         |
| 404         | Not Found (resource doesn't exist)  |
| 500         | Server Error (something went wrong) |

---

## Rate Limiting

API endpoints are protected by Vercel's built-in rate limiting. Excessive requests may result in temporary blocks.
