# API Contract: Email Subscription Endpoints

**Feature**: 004-production-release | **Date**: 2025-12-09

This document defines the API contract for the CoEngineers email subscription system.

---

## Base URL

| Environment | URL                          |
| ----------- | ---------------------------- |
| Production  | `https://coengineers.ai/api` |
| Local       | `http://localhost:4321/api`  |

---

## POST /subscribe

Subscribe a new email address to the mailing list.

### Request

**Content-Types Supported**:

- `application/json`
- `application/x-www-form-urlencoded`
- `multipart/form-data`

**Body Parameters**:

| Parameter | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| `email`   | string | Yes      | Email address to subscribe  |
| `source`  | string | No       | Signup source for analytics |

**Valid Source Values**: `website`, `homepage`, `community-page`, `day-page`

### Request Examples

**JSON**:

```http
POST /api/subscribe HTTP/1.1
Host: coengineers.ai
Content-Type: application/json

{
  "email": "user@example.com",
  "source": "homepage"
}
```

**Form-encoded**:

```http
POST /api/subscribe HTTP/1.1
Host: coengineers.ai
Content-Type: application/x-www-form-urlencoded

email=user%40example.com&source=homepage
```

### Responses

#### 201 Created — New Subscription

Returned when a new subscriber is successfully created or a previously unsubscribed user resubscribes.

```json
{
  "success": true,
  "message": "You're in! Check your inbox."
}
```

**Side Effects**:

- Subscriber record created/updated in database
- Welcome email sent via Resend
- Email send record created in database

---

#### 200 OK — Already Subscribed

Returned when an active subscriber attempts to subscribe again.

```json
{
  "success": true,
  "message": "You're already subscribed!"
}
```

**Side Effects**: None

---

#### 400 Bad Request — Invalid Email

Returned when email is missing, empty, or invalid format.

```json
{
  "success": false,
  "error": "Please enter a valid email address."
}
```

---

#### 500 Internal Server Error — Server Error

Returned when database operations fail.

```json
{
  "success": false,
  "error": "Something went wrong. Please try again later."
}
```

---

## GET /unsubscribe

Unsubscribe a user via their unique token. Returns HTML confirmation page.

### Request

**Query Parameters**:

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| `token`   | string | Yes      | UUID unsubscribe token |

### Request Example

```http
GET /api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000 HTTP/1.1
Host: coengineers.ai
```

### Responses

#### 200 OK — Successfully Unsubscribed

Returned when user is successfully unsubscribed (or was already unsubscribed).

**Content-Type**: `text/html`

Returns a branded HTML confirmation page with:

- Success checkmark icon
- "You've been unsubscribed" heading
- Confirmation message
- Link to return to site

**Side Effects**:

- Subscriber record updated: `unsubscribed=true`, `unsubscribed_at=NOW()`
- If already unsubscribed: No database changes

---

#### 400 Bad Request — Invalid Token

Returned when token is missing or not in UUID format.

**Content-Type**: `application/json`

```json
{
  "success": false,
  "error": "Invalid unsubscribe link."
}
```

---

#### 404 Not Found — Token Not Found

Returned when no subscriber exists with the given token.

**Content-Type**: `application/json`

```json
{
  "success": false,
  "error": "Subscription not found."
}
```

---

#### 500 Internal Server Error — Server Error

Returned when database operations fail.

**Content-Type**: `application/json`

```json
{
  "success": false,
  "error": "Something went wrong. Please try again."
}
```

---

## TypeScript Type Definitions

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

## OpenAPI Specification

```yaml
openapi: 3.0.3
info:
  title: CoEngineers Email API
  version: 1.0.0
  description: Email subscription API for CoEngineers course

servers:
  - url: https://coengineers.ai/api
    description: Production
  - url: http://localhost:4321/api
    description: Local development

paths:
  /subscribe:
    post:
      summary: Subscribe to mailing list
      operationId: subscribe
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SubscribeRequest'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/SubscribeRequest'
      responses:
        '201':
          description: New subscription created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SuccessResponse'
        '200':
          description: Already subscribed
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SuccessResponse'
        '400':
          description: Invalid email
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
        '500':
          description: Server error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

  /unsubscribe:
    get:
      summary: Unsubscribe from mailing list
      operationId: unsubscribe
      parameters:
        - name: token
          in: query
          required: true
          schema:
            type: string
            format: uuid
          description: Unique unsubscribe token
      responses:
        '200':
          description: Successfully unsubscribed
          content:
            text/html:
              schema:
                type: string
        '400':
          description: Invalid token format
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
        '404':
          description: Token not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
        '500':
          description: Server error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

components:
  schemas:
    SubscribeRequest:
      type: object
      required:
        - email
      properties:
        email:
          type: string
          format: email
          maxLength: 254
        source:
          type: string
          enum: [website, homepage, community-page, day-page]
          default: website

    SuccessResponse:
      type: object
      required:
        - success
        - message
      properties:
        success:
          type: boolean
          enum: [true]
        message:
          type: string

    ErrorResponse:
      type: object
      required:
        - success
        - error
      properties:
        success:
          type: boolean
          enum: [false]
        error:
          type: string
```

---

## Error Codes Summary

| HTTP Status | Condition                                 | Response Type |
| ----------- | ----------------------------------------- | ------------- |
| 200         | Already subscribed / Already unsubscribed | JSON/HTML     |
| 201         | New subscription                          | JSON          |
| 400         | Invalid email / Invalid token format      | JSON          |
| 404         | Token not found                           | JSON          |
| 500         | Database error                            | JSON          |
