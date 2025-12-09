# API Contracts: Email Capture System

**Date**: 9 December 2025
**Feature**: 001-email-capture

## Overview

All API endpoints are Astro API routes deployed as Vercel serverless functions.

**Base URL**: `https://coengineers.ai`

---

## POST /api/subscribe

Subscribe a new email address to the mailing list.

### Request

**Content-Type**: `application/x-www-form-urlencoded` (HTML form) or `application/json`

**Form Data / JSON Body**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Email address to subscribe |
| `source` | string | No | Where signup occurred (default: `website`) |

**Example (JSON)**:
```json
{
  "email": "user@example.com",
  "source": "homepage"
}
```

**Example (Form)**:
```
email=user%40example.com&source=homepage
```

### Response

**Success (201 Created)**:
```json
{
  "success": true,
  "message": "You're in! Check your inbox."
}
```

**Already Subscribed (200 OK)**:
```json
{
  "success": true,
  "message": "You're already subscribed!"
}
```

**Validation Error (400 Bad Request)**:
```json
{
  "success": false,
  "error": "Please enter a valid email address."
}
```

**Server Error (500 Internal Server Error)**:
```json
{
  "success": false,
  "error": "Something went wrong. Please try again later."
}
```

### Behaviour

1. Validate email format
2. Check if email exists in database
   - If exists and unsubscribed: resubscribe and send welcome email
   - If exists and subscribed: return "already subscribed"
   - If new: insert and send welcome email
3. Record email send in `email_sends` table
4. Return appropriate response

---

## GET /api/unsubscribe

Unsubscribe a user via their unique token.

### Request

**Query Parameters**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `token` | UUID | Yes | Unsubscribe token from email |

**Example**:
```
GET /api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000
```

### Response

**Success (200 OK)** - Redirects to confirmation page:
```
HTTP/1.1 302 Found
Location: /unsubscribed
```

Or returns HTML confirmation:
```html
<!DOCTYPE html>
<html>
<head><title>Unsubscribed</title></head>
<body>
  <h1>You've been unsubscribed</h1>
  <p>Sorry to see you go. You won't receive any more emails from us.</p>
  <p><a href="/">Return to CoEngineers</a></p>
</body>
</html>
```

**Invalid Token (400 Bad Request)**:
```json
{
  "success": false,
  "error": "Invalid unsubscribe link."
}
```

**Token Not Found (404 Not Found)**:
```json
{
  "success": false,
  "error": "Subscription not found."
}
```

### Behaviour

1. Validate token format (UUID)
2. Look up subscriber by `unsubscribe_token`
3. If found: mark as unsubscribed, set `unsubscribed_at`
4. Return confirmation page/redirect

---

## Error Response Format

All error responses follow this structure:

```typescript
interface ErrorResponse {
  success: false;
  error: string;  // User-friendly message (British English)
}
```

**HTTP Status Codes**:

| Code | Meaning |
|------|---------|
| 200 | Success (action completed) |
| 201 | Created (new subscription) |
| 302 | Redirect (unsubscribe confirmation) |
| 400 | Bad Request (validation error) |
| 404 | Not Found (resource doesn't exist) |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

---

## TypeScript Types

```typescript
// Request types
interface SubscribeRequest {
  email: string;
  source?: 'website' | 'homepage' | 'community-page' | 'day-page';
}

// Response types
interface SuccessResponse {
  success: true;
  message: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
```

---

## Rate Limiting

No explicit rate limiting implemented in MVP. Vercel provides basic protection against abuse. Consider adding rate limiting if issues arise.

---

## CORS

CORS headers not required for same-origin requests (form submissions from coengineers.ai). All API routes are same-origin.
