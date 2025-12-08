# Architecture Documentation

**CoEngineers Platform — System Design**

This document describes the technical architecture of the CoEngineers course platform, including system components, data flows, and design decisions.

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Component Architecture](#component-architecture)
3. [Data Flow Diagrams](#data-flow-diagrams)
4. [Database Design](#database-design)
5. [API Design](#api-design)
6. [Security Architecture](#security-architecture)
7. [Deployment Architecture](#deployment-architecture)
8. [Performance Considerations](#performance-considerations)

---

## System Overview

CoEngineers is a static documentation site with serverless API capabilities, designed to deliver a 31-day course on Claude Code productivity.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USERS                                          │
│                    (Learners, Product Managers, Developers)                 │
└─────────────────────────────────┬───────────────────────────────────────────┘
                                  │
                                  │ HTTPS
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           VERCEL EDGE NETWORK                               │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         CDN (Global)                                 │   │
│  │              Static assets, HTML, CSS, JS cached globally           │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                  │                                          │
│          ┌───────────────────────┼───────────────────────┐                 │
│          ▼                       ▼                       ▼                 │
│  ┌───────────────┐    ┌───────────────────┐    ┌────────────────┐         │
│  │ Static Site   │    │ /api/subscribe    │    │ /api/unsubscribe│         │
│  │ (Pre-rendered)│    │ (Serverless Fn)   │    │ (Serverless Fn) │         │
│  │               │    │                   │    │                 │         │
│  │ ~50 MDX pages │    │ POST handler      │    │ GET handler     │         │
│  │ Components    │    │ Validates email   │    │ Token lookup    │         │
│  │ Styles        │    │ Creates subscriber│    │ Updates status  │         │
│  └───────────────┘    └─────────┬─────────┘    └────────┬────────┘         │
│                                 │                       │                   │
└─────────────────────────────────┼───────────────────────┼───────────────────┘
                                  │                       │
                    ┌─────────────┴───────────────────────┴─────────────┐
                    │                                                   │
          ┌─────────▼─────────┐                          ┌──────────────▼──────────────┐
          │                   │                          │                             │
          │     SUPABASE      │                          │          RESEND             │
          │   (PostgreSQL)    │                          │    (Email Delivery)         │
          │                   │                          │                             │
          │  ┌─────────────┐  │                          │  ┌───────────────────────┐  │
          │  │ subscribers │  │                          │  │ Welcome Email         │  │
          │  │ email_sends │  │                          │  │ British English       │  │
          │  └─────────────┘  │                          │  │ Unsubscribe link      │  │
          │                   │                          │  └───────────────────────┘  │
          │  RLS: Deny All    │                          │                             │
          │  Service Role     │                          │  Rate Limited               │
          │                   │                          │  Delivery Tracking          │
          └───────────────────┘                          └─────────────────────────────┘
```

### Technology Stack

| Layer        | Technology          | Purpose                  |
| ------------ | ------------------- | ------------------------ |
| **Frontend** | Astro 5.1           | Static site generation   |
| **Theme**    | Starlight           | Documentation UI         |
| **Styling**  | Tailwind CSS        | Utility-first CSS        |
| **Language** | TypeScript 5.x      | Type-safe JavaScript     |
| **Database** | Supabase PostgreSQL | Subscriber storage       |
| **Email**    | Resend              | Transactional email      |
| **Hosting**  | Vercel              | Static + serverless      |
| **Testing**  | Vitest              | Unit testing             |
| **CI/CD**    | GitHub Actions      | Automated quality checks |

---

## Component Architecture

### Frontend Components

```
src/
├── content/
│   └── docs/                      # MDX Content Layer
│       ├── index.mdx              # Homepage
│       ├── week-1/                # Week 1 lessons (7 days)
│       ├── week-2/                # Week 2 lessons (7 days)
│       ├── week-3/                # Week 3 lessons (7 days)
│       ├── week-4/                # Week 4 lessons (7 days)
│       ├── bonus/                 # Bonus content (3 days)
│       ├── blog/                  # Blog posts
│       ├── getting-started/       # Setup guides
│       └── reference/             # Troubleshooting, FAQ, Glossary
│
├── components/                    # Reusable Astro Components
│   ├── YouTube.astro              # Responsive video embeds
│   ├── EmailSignup.astro          # Subscription form
│   ├── Countdown.astro            # Course launch countdown
│   ├── SlashCommand.astro         # Interactive command display
│   └── ReferenceHubCallout.astro  # Reference section links
│
├── pages/
│   └── api/                       # Serverless API Routes
│       ├── subscribe.ts           # Email subscription
│       └── unsubscribe.ts         # One-click unsubscribe
│
├── lib/                           # Shared Utilities
│   ├── supabase.ts                # Database client
│   ├── email.ts                   # Email service
│   └── types.ts                   # TypeScript definitions
│
└── styles/
    └── custom.css                 # Starlight overrides
```

### Component Responsibilities

#### YouTube.astro

- Renders responsive video embeds
- Lazy loads iframes for performance
- Maintains 16:9 aspect ratio

#### EmailSignup.astro

- Renders subscription form
- Handles client-side validation
- Submits to /api/subscribe
- Shows success/error states

#### SlashCommand.astro

- Displays interactive slash commands
- Copy-to-clipboard functionality
- Visual feedback on copy
- Links to .claude/commands/ files

#### Countdown.astro

- Displays course launch countdown
- Calculates time remaining
- Shows "Course Live!" when complete

---

## Data Flow Diagrams

### Email Subscription Flow

```
┌─────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────┐     ┌────────┐
│  User   │────▶│ EmailSignup  │────▶│ /api/subscribe│────▶│ Supabase │────▶│ Resend │
│         │     │  Component   │     │   Endpoint    │     │          │     │        │
└─────────┘     └──────────────┘     └──────────────┘     └──────────┘     └────────┘
     │                 │                    │                   │               │
     │  1. Enter email │                    │                   │               │
     │─────────────────▶                    │                   │               │
     │                 │                    │                   │               │
     │                 │  2. POST request   │                   │               │
     │                 │────────────────────▶                   │               │
     │                 │                    │                   │               │
     │                 │                    │  3. Check exists  │               │
     │                 │                    │──────────────────▶│               │
     │                 │                    │                   │               │
     │                 │                    │  4. SELECT result │               │
     │                 │                    │◀──────────────────│               │
     │                 │                    │                   │               │
     │                 │                    │  5. INSERT new    │               │
     │                 │                    │──────────────────▶│               │
     │                 │                    │                   │               │
     │                 │                    │  6. Subscriber ID │               │
     │                 │                    │◀──────────────────│               │
     │                 │                    │                   │               │
     │                 │                    │  7. Send welcome  │               │
     │                 │                    │──────────────────────────────────▶│
     │                 │                    │                   │               │
     │                 │                    │  8. Message ID    │               │
     │                 │                    │◀──────────────────────────────────│
     │                 │                    │                   │               │
     │                 │                    │  9. Record send   │               │
     │                 │                    │──────────────────▶│               │
     │                 │                    │                   │               │
     │                 │  10. 201 Created   │                   │               │
     │                 │◀───────────────────│                   │               │
     │                 │                    │                   │               │
     │  11. Success UI │                    │                   │               │
     │◀────────────────│                    │                   │               │
```

### Unsubscribe Flow

```
┌─────────┐     ┌─────────────────┐     ┌──────────┐
│  User   │────▶│ /api/unsubscribe│────▶│ Supabase │
│         │     │    Endpoint      │     │          │
└─────────┘     └─────────────────┘     └──────────┘
     │                   │                    │
     │  1. Click link    │                    │
     │   ?token=UUID     │                    │
     │──────────────────▶│                    │
     │                   │                    │
     │                   │  2. Validate UUID  │
     │                   │─────────┐          │
     │                   │         │          │
     │                   │◀────────┘          │
     │                   │                    │
     │                   │  3. Lookup token   │
     │                   │───────────────────▶│
     │                   │                    │
     │                   │  4. Subscriber     │
     │                   │◀───────────────────│
     │                   │                    │
     │                   │  5. UPDATE status  │
     │                   │───────────────────▶│
     │                   │                    │
     │                   │  6. Confirm        │
     │                   │◀───────────────────│
     │                   │                    │
     │  7. HTML confirm  │                    │
     │◀──────────────────│                    │
```

### Subscription State Machine

```
                    ┌──────────────────┐
                    │                  │
                    │   (not exists)   │
                    │                  │
                    └────────┬─────────┘
                             │
                             │ POST /api/subscribe
                             │ (new email)
                             ▼
                    ┌──────────────────┐
            ┌───────│                  │◀──────┐
            │       │   SUBSCRIBED     │       │
            │       │                  │       │
            │       └────────┬─────────┘       │
            │                │                 │
            │ POST           │ GET             │ POST
            │ /subscribe     │ /unsubscribe    │ /subscribe
            │ (same email)   │ ?token=UUID     │ (resubscribe)
            │                │                 │
            │                ▼                 │
            │       ┌──────────────────┐       │
            │       │                  │       │
            └──────▶│  UNSUBSCRIBED    │───────┘
                    │                  │
                    └──────────────────┘
```

---

## Database Design

### Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        subscribers                           │
├─────────────────────────────────────────────────────────────┤
│ PK │ id               UUID         gen_random_uuid()        │
│    │ email            TEXT         UNIQUE NOT NULL          │
│    │ subscribed_at    TIMESTAMPTZ  DEFAULT NOW()            │
│    │ unsubscribed     BOOLEAN      DEFAULT FALSE            │
│    │ unsubscribed_at  TIMESTAMPTZ  NULL                     │
│ UK │ unsubscribe_token UUID        gen_random_uuid() UNIQUE │
│    │ source           TEXT         DEFAULT 'website'        │
├─────────────────────────────────────────────────────────────┤
│ IDX: idx_subscribers_email (email)                          │
│ IDX: idx_subscribers_unsubscribe_token (unsubscribe_token)  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ 1:N
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        email_sends                           │
├─────────────────────────────────────────────────────────────┤
│ PK │ id               UUID         gen_random_uuid()        │
│ FK │ subscriber_id    UUID         REFERENCES subscribers   │
│    │ email_type       TEXT         NOT NULL                 │
│    │ sent_at          TIMESTAMPTZ  DEFAULT NOW()            │
│    │ resend_id        TEXT         NULL                     │
├─────────────────────────────────────────────────────────────┤
│ IDX: idx_email_sends_subscriber (subscriber_id)             │
│ FK: ON DELETE CASCADE                                        │
└─────────────────────────────────────────────────────────────┘
```

### Data Types

```typescript
// Signup source tracking
type SignupSource = 'website' | 'homepage' | 'community-page' | 'day-page';

// Email types (extensible)
type EmailType = 'welcome';

// Subscriber record
interface Subscriber {
  id: string; // UUID
  email: string; // Lowercase, validated
  subscribed_at: string; // ISO 8601 timestamp
  unsubscribed: boolean; // Current state
  unsubscribed_at: string | null; // When unsubscribed
  unsubscribe_token: string; // UUID for one-click
  source: SignupSource; // Where they signed up
}

// Email send audit record
interface EmailSend {
  id: string; // UUID
  subscriber_id: string; // FK to subscribers
  email_type: EmailType; // 'welcome'
  sent_at: string; // ISO 8601 timestamp
  resend_id: string | null; // Resend tracking ID
}
```

---

## API Design

### Endpoint Summary

| Method | Endpoint         | Purpose             | Auth  |
| ------ | ---------------- | ------------------- | ----- |
| POST   | /api/subscribe   | Create subscription | None  |
| GET    | /api/unsubscribe | Remove subscription | Token |

### POST /api/subscribe

**Request:**

```http
POST /api/subscribe HTTP/1.1
Host: coengineers.ai
Content-Type: application/json

{
  "email": "user@example.com",
  "source": "homepage"
}
```

**Response Codes:**

| Code | Condition          | Body                                                                         |
| ---- | ------------------ | ---------------------------------------------------------------------------- |
| 201  | New subscriber     | `{ success: true, message: "You're in! Check your inbox." }`                 |
| 200  | Already subscribed | `{ success: true, message: "You're already subscribed!" }`                   |
| 400  | Invalid email      | `{ success: false, error: "Please enter a valid email address." }`           |
| 500  | Server error       | `{ success: false, error: "Something went wrong. Please try again later." }` |

### GET /api/unsubscribe

**Request:**

```http
GET /api/unsubscribe?token=550e8400-e29b-41d4-a716-446655440000 HTTP/1.1
Host: coengineers.ai
```

**Response Codes:**

| Code | Condition     | Body                                                                   |
| ---- | ------------- | ---------------------------------------------------------------------- |
| 200  | Unsubscribed  | HTML confirmation page                                                 |
| 400  | Invalid token | `{ success: false, error: "Invalid unsubscribe link." }`               |
| 404  | Not found     | `{ success: false, error: "Subscription not found." }`                 |
| 500  | Server error  | `{ success: false, error: "Something went wrong. Please try again." }` |

---

## Security Architecture

### Authentication & Authorisation

```
┌──────────────────────────────────────────────────────────────────┐
│                        SECURITY LAYERS                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. TRANSPORT SECURITY                                           │
│     └── HTTPS only (enforced by Vercel)                         │
│     └── TLS 1.3                                                  │
│                                                                  │
│  2. API SECURITY                                                 │
│     └── No authentication required (public endpoints)            │
│     └── Rate limiting via Vercel (100 req/10s per IP)           │
│     └── Input validation (email format, UUID format)             │
│                                                                  │
│  3. DATABASE SECURITY                                            │
│     └── Row Level Security (RLS) enabled                         │
│     └── Deny-all policies for anon/authenticated roles          │
│     └── Service role key bypasses RLS                           │
│     └── Service key stored in environment variables             │
│                                                                  │
│  4. UNSUBSCRIBE SECURITY                                         │
│     └── UUID tokens (unguessable, 122 bits of entropy)          │
│     └── No PII in URL                                           │
│     └── Idempotent (safe to click multiple times)               │
│                                                                  │
│  5. SECRETS MANAGEMENT                                           │
│     └── Environment variables (Vercel)                          │
│     └── No hardcoded credentials                                │
│     └── PUBLIC_ prefix only for client-safe values              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### RLS Policies

```sql
-- Deny all access to anonymous users
CREATE POLICY "Deny anon all" ON subscribers
  FOR ALL TO anon USING (false);

-- Deny all access to authenticated users
CREATE POLICY "Deny auth all" ON subscribers
  FOR ALL TO authenticated USING (false);

-- Same for email_sends
CREATE POLICY "Deny anon all" ON email_sends
  FOR ALL TO anon USING (false);

CREATE POLICY "Deny auth all" ON email_sends
  FOR ALL TO authenticated USING (false);
```

**Note:** Service role key bypasses RLS entirely, which is how the API endpoints access data.

---

## Deployment Architecture

### Vercel Configuration

```
┌─────────────────────────────────────────────────────────────────┐
│                     VERCEL PROJECT                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Framework:     Astro                                            │
│  Build Command: npm run build                                    │
│  Output Dir:    dist/                                            │
│  Node Version:  18.x                                             │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                 STATIC ASSETS                            │    │
│  │  - Pre-rendered HTML pages                               │    │
│  │  - CSS bundles                                           │    │
│  │  - JavaScript bundles                                    │    │
│  │  - Images, fonts                                         │    │
│  │  - Cached at edge (global CDN)                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                 SERVERLESS FUNCTIONS                     │    │
│  │  - /api/subscribe (POST)                                │    │
│  │  - /api/unsubscribe (GET)                               │    │
│  │  - Cold start: ~100ms                                   │    │
│  │  - Execution limit: 10s                                 │    │
│  │  - Memory: 1024 MB                                      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Environment Variables:                                          │
│  - SUPABASE_URL                                                  │
│  - SUPABASE_SERVICE_ROLE_KEY                                     │
│  - RESEND_API_KEY                                                │
│  - PUBLIC_SITE_URL                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### CI/CD Pipeline

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Push   │───▶│ Type    │───▶│  Lint   │───▶│  Test   │───▶│  Build  │
│         │    │ Check   │    │         │    │         │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └────┬────┘
                                                                  │
                                                                  │ Success
                                                                  ▼
                                                            ┌─────────┐
                                                            │ Deploy  │
                                                            │ Vercel  │
                                                            └─────────┘
```

---

## Performance Considerations

### Build Time Optimisation

- **Static Generation**: All content pages pre-rendered at build time
- **Component Islands**: Interactive components hydrated selectively
- **Image Optimisation**: Sharp for responsive images
- **Asset Hashing**: Long-term caching with content hashes

### Runtime Performance

| Metric          | Target  | Actual |
| --------------- | ------- | ------ |
| Build Time      | < 2 min | ~90s   |
| Test Suite      | < 30s   | ~5s    |
| Page Load (FCP) | < 1s    | ~0.5s  |
| API Response    | < 500ms | ~200ms |

### Caching Strategy

```
Static Assets:
  Cache-Control: public, max-age=31536000, immutable

HTML Pages:
  Cache-Control: public, max-age=0, must-revalidate

API Responses:
  Cache-Control: no-store
```

---

## Future Considerations

### Potential Enhancements

1. **Authentication** — User accounts for progress tracking
2. **Comments** — Lesson discussions
3. **Search** — Full-text search across lessons
4. **Analytics** — Course completion tracking
5. **Internationalisation** — Multi-language support

### Scalability Notes

The current architecture can handle:

- **Static content**: Unlimited (CDN)
- **API requests**: ~100/s per function instance
- **Database**: Up to 500 concurrent connections
- **Email**: 100/day (free tier), 3,000/month (paid)

---

_Last updated: December 2024_
