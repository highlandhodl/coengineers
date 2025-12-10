# Data Model: Production Release

**Branch**: `004-production-release` | **Date**: 2025-12-10

## Overview

This feature documents the existing data model. No schema changes are required. The data model supports email subscription and unsubscription workflows.

## Entities

### Subscriber

A person who has signed up to receive course updates.

| Field             | Type        | Constraints                 | Description                       |
| ----------------- | ----------- | --------------------------- | --------------------------------- |
| id                | UUID        | PK, auto-generated          | Unique identifier                 |
| email             | TEXT        | UNIQUE, NOT NULL, lowercase | Subscriber's email address        |
| subscribed_at     | TIMESTAMPTZ | NOT NULL                    | When subscription was created     |
| unsubscribed      | BOOLEAN     | NOT NULL, default false     | Current subscription status       |
| unsubscribed_at   | TIMESTAMPTZ | NULL                        | When unsubscribed (if applicable) |
| unsubscribe_token | UUID        | UNIQUE, auto-generated      | One-click unsubscribe token       |
| source            | TEXT        | NOT NULL                    | Signup location                   |

**Valid sources**: `website`, `homepage`, `community-page`, `day-page`

**State transitions**:

```
[New] --> subscribed (insert with unsubscribed=false)
[Subscribed] --> unsubscribed (set unsubscribed=true, unsubscribed_at=now)
[Unsubscribed] --> resubscribed (set unsubscribed=false, unsubscribed_at=null, subscribed_at=now)
```

### EmailSend

A record of a transactional email sent to a subscriber.

| Field         | Type        | Constraints           | Description                         |
| ------------- | ----------- | --------------------- | ----------------------------------- |
| id            | UUID        | PK, auto-generated    | Unique identifier                   |
| subscriber_id | UUID        | FK to subscribers     | Which subscriber received the email |
| email_type    | TEXT        | NOT NULL              | Type of email sent                  |
| sent_at       | TIMESTAMPTZ | NOT NULL, default now | When email was sent                 |
| resend_id     | TEXT        | NULL                  | Resend message ID for tracking      |

**Valid email_type values**: `welcome`

## Relationships

```
Subscriber 1 ──── N EmailSend
```

- One subscriber can receive multiple emails over time
- Each email send belongs to exactly one subscriber

## Security

- **Row Level Security (RLS)**: Enabled with deny-all policies
- **Access pattern**: Service role key bypasses RLS (server-side only)
- **No client-side access**: Anon key never used for database operations

## TypeScript Types

Located in `src/lib/types.ts`:

```typescript
export type SignupSource =
  | "website"
  | "homepage"
  | "community-page"
  | "day-page";

export interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  unsubscribed: boolean;
  unsubscribed_at: string | null;
  unsubscribe_token: string;
  source: SignupSource;
}

export interface EmailSend {
  id: string;
  subscriber_id: string;
  email_type: "welcome";
  sent_at: string;
  resend_id: string | null;
}
```

## No Changes Required

This data model is complete and stable. The production release feature:

- Documents the existing schema (done here)
- Tests the existing operations (via unit tests)
- Does NOT modify the schema
