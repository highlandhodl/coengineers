# Data Model: Email Subscription System

**Feature**: 004-production-release | **Date**: 2025-12-09

This document describes the database schema for the CoEngineers email subscription system.

---

## Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      subscribers                         │
├─────────────────────────────────────────────────────────┤
│ id              UUID PK      Auto-generated             │
│ email           TEXT UNIQUE  Subscriber email address   │
│ subscribed_at   TIMESTAMPTZ  When they subscribed       │
│ unsubscribed    BOOLEAN      Current subscription state │
│ unsubscribed_at TIMESTAMPTZ  When they unsubscribed     │
│ unsubscribe_token UUID UNIQUE Token for unsubscribe link│
│ source          TEXT         Where they signed up from  │
└─────────────────────────────────────────────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────────────────────────────────────────────┐
│                      email_sends                         │
├─────────────────────────────────────────────────────────┤
│ id              UUID PK      Auto-generated             │
│ subscriber_id   UUID FK      References subscribers(id) │
│ email_type      TEXT         Type of email sent         │
│ sent_at         TIMESTAMPTZ  When email was sent        │
│ resend_id       TEXT         Resend API message ID      │
└─────────────────────────────────────────────────────────┘
```

---

## Table: `subscribers`

### Purpose

Stores email subscribers for the CoEngineers course notification list.

### Fields

| Field               | Type        | Constraints      | Default             | Description                            |
| ------------------- | ----------- | ---------------- | ------------------- | -------------------------------------- |
| `id`                | UUID        | PRIMARY KEY      | `gen_random_uuid()` | Unique identifier for subscriber       |
| `email`             | TEXT        | UNIQUE, NOT NULL | —                   | Subscriber's email address (lowercase) |
| `subscribed_at`     | TIMESTAMPTZ | —                | `NOW()`             | Timestamp of initial subscription      |
| `unsubscribed`      | BOOLEAN     | —                | `FALSE`             | Whether user has unsubscribed          |
| `unsubscribed_at`   | TIMESTAMPTZ | NULLABLE         | `NULL`              | Timestamp of unsubscription            |
| `unsubscribe_token` | UUID        | UNIQUE           | `gen_random_uuid()` | Token for one-click unsubscribe URL    |
| `source`            | TEXT        | —                | `'website'`         | Signup source for analytics            |

### Valid Source Values

```typescript
type SignupSource = 'website' | 'homepage' | 'community-page' | 'day-page';
```

### Indexes

| Index Name                          | Fields              | Purpose                          |
| ----------------------------------- | ------------------- | -------------------------------- |
| `idx_subscribers_email`             | `email`             | Fast lookup by email address     |
| `idx_subscribers_unsubscribe_token` | `unsubscribe_token` | Fast lookup for unsubscribe flow |

### State Transitions

```
                ┌──────────────┐
                │   (new)      │
                └──────┬───────┘
                       │ INSERT
                       ▼
                ┌──────────────┐
         ┌──────│  subscribed  │◀─────┐
         │      │  (default)   │      │
         │      └──────┬───────┘      │
         │             │              │
         │    unsubscribe()     resubscribe()
         │             │              │
         │             ▼              │
         │      ┌──────────────┐      │
         └──────│ unsubscribed │──────┘
                └──────────────┘
```

| Transition      | Trigger                                      | Fields Updated                                                      |
| --------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| Subscribe (new) | POST /api/subscribe                          | `subscribed_at`, `source`                                           |
| Resubscribe     | POST /api/subscribe (existing, unsubscribed) | `unsubscribed=false`, `unsubscribed_at=null`, `subscribed_at=NOW()` |
| Unsubscribe     | GET /api/unsubscribe                         | `unsubscribed=true`, `unsubscribed_at=NOW()`                        |

---

## Table: `email_sends`

### Purpose

Tracks all emails sent to subscribers for auditing and debugging.

### Fields

| Field           | Type        | Constraints | Default             | Description                        |
| --------------- | ----------- | ----------- | ------------------- | ---------------------------------- |
| `id`            | UUID        | PRIMARY KEY | `gen_random_uuid()` | Unique identifier for send record  |
| `subscriber_id` | UUID        | FOREIGN KEY | —                   | References `subscribers(id)`       |
| `email_type`    | TEXT        | NOT NULL    | —                   | Type of email sent                 |
| `sent_at`       | TIMESTAMPTZ | —           | `NOW()`             | When email was dispatched          |
| `resend_id`     | TEXT        | NULLABLE    | `NULL`              | Resend API message ID for tracking |

### Valid Email Types

```typescript
type EmailType = 'welcome'; // Extensible for future email types
```

### Indexes

| Index Name                   | Fields          | Purpose                                    |
| ---------------------------- | --------------- | ------------------------------------------ |
| `idx_email_sends_subscriber` | `subscriber_id` | Fast lookup of emails sent to a subscriber |

### Foreign Key Behaviour

- `ON DELETE CASCADE` — When subscriber deleted, all send records deleted

---

## Row Level Security (RLS)

### Current State

RLS is enabled on both tables but **no policies are defined**.

### Required Policies (TO BE IMPLEMENTED)

```sql
-- Deny all access to anonymous users
CREATE POLICY "Deny anon select" ON subscribers FOR SELECT TO anon USING (false);
CREATE POLICY "Deny anon insert" ON subscribers FOR INSERT TO anon WITH CHECK (false);
CREATE POLICY "Deny anon update" ON subscribers FOR UPDATE TO anon USING (false);
CREATE POLICY "Deny anon delete" ON subscribers FOR DELETE TO anon USING (false);

-- Deny all access to authenticated users (no user login in this app)
CREATE POLICY "Deny auth select" ON subscribers FOR SELECT TO authenticated USING (false);
CREATE POLICY "Deny auth insert" ON subscribers FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY "Deny auth update" ON subscribers FOR UPDATE TO authenticated USING (false);
CREATE POLICY "Deny auth delete" ON subscribers FOR DELETE TO authenticated USING (false);

-- Same for email_sends table
CREATE POLICY "Deny anon select" ON email_sends FOR SELECT TO anon USING (false);
CREATE POLICY "Deny anon insert" ON email_sends FOR INSERT TO anon WITH CHECK (false);
CREATE POLICY "Deny auth select" ON email_sends FOR SELECT TO authenticated USING (false);
CREATE POLICY "Deny auth insert" ON email_sends FOR INSERT TO authenticated WITH CHECK (false);
```

**Note**: The `service_role` key bypasses RLS by default, which is how the API endpoints access data.

---

## TypeScript Type Definitions

Located in `/src/lib/types.ts`:

```typescript
// Database subscriber record
export interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  unsubscribed: boolean;
  unsubscribed_at: string | null;
  unsubscribe_token: string;
  source: SignupSource;
}

// Database email send record
export interface EmailSend {
  id: string;
  subscriber_id: string;
  email_type: 'welcome';
  sent_at: string;
  resend_id: string | null;
}
```

---

## Validation Rules

### Email

- Must match pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Maximum length: 254 characters
- Normalised to lowercase before storage

### Unsubscribe Token

- UUID v4 format
- Auto-generated on subscriber creation
- Immutable (never changes)

### Source

- Must be one of: `website`, `homepage`, `community-page`, `day-page`
- Defaults to `website` if not provided
