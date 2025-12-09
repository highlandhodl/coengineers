# Data Model: Email Capture System

**Date**: 9 December 2025
**Feature**: 001-email-capture

## Entity Relationship Diagram

```
┌─────────────────────────────────────┐
│           subscribers               │
├─────────────────────────────────────┤
│ id: UUID (PK)                       │
│ email: TEXT (UNIQUE, NOT NULL)      │
│ subscribed_at: TIMESTAMPTZ          │
│ unsubscribed: BOOLEAN               │
│ unsubscribed_at: TIMESTAMPTZ        │
│ unsubscribe_token: UUID (UNIQUE)    │
│ source: TEXT                        │
└─────────────────────────────────────┘
              │
              │ 1:N
              ▼
┌─────────────────────────────────────┐
│          email_sends                │
├─────────────────────────────────────┤
│ id: UUID (PK)                       │
│ subscriber_id: UUID (FK)            │
│ email_type: TEXT                    │
│ sent_at: TIMESTAMPTZ                │
│ resend_id: TEXT                     │
└─────────────────────────────────────┘
```

## Entities

### Subscriber

Represents a person who has signed up for email notifications.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `email` | TEXT | UNIQUE, NOT NULL | Subscriber's email address |
| `subscribed_at` | TIMESTAMPTZ | DEFAULT NOW() | When they subscribed |
| `unsubscribed` | BOOLEAN | DEFAULT FALSE | Whether they've unsubscribed |
| `unsubscribed_at` | TIMESTAMPTZ | NULLABLE | When they unsubscribed |
| `unsubscribe_token` | UUID | UNIQUE, DEFAULT gen_random_uuid() | Token for secure unsubscribe link |
| `source` | TEXT | DEFAULT 'website' | Where they signed up from |

**Source Values**:
- `website` - Default, general website signup
- `homepage` - Homepage email capture
- `community-page` - Community page signup
- `day-page` - End of day lesson page

**State Transitions**:
```
[New Signup] → subscribed (unsubscribed=false)
                    │
                    ▼ (clicks unsubscribe)
             unsubscribed (unsubscribed=true, unsubscribed_at set)
                    │
                    ▼ (re-subscribes)
             subscribed (unsubscribed=false, unsubscribed_at cleared)
```

### Email Send

Represents a sent email for tracking purposes.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `subscriber_id` | UUID | FOREIGN KEY → subscribers(id) | Related subscriber |
| `email_type` | TEXT | NOT NULL | Type of email sent |
| `sent_at` | TIMESTAMPTZ | DEFAULT NOW() | When email was sent |
| `resend_id` | TEXT | NULLABLE | Resend API response ID |

**Email Type Values**:
- `welcome` - Welcome email sent on subscription

## SQL Schema

```sql
-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed BOOLEAN DEFAULT FALSE,
  unsubscribed_at TIMESTAMPTZ,
  unsubscribe_token UUID UNIQUE DEFAULT gen_random_uuid(),
  source TEXT DEFAULT 'website'
);

-- Email sends tracking table
CREATE TABLE IF NOT EXISTS email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id) ON DELETE CASCADE,
  email_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  resend_id TEXT
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_unsubscribe_token ON subscribers(unsubscribe_token);
CREATE INDEX IF NOT EXISTS idx_email_sends_subscriber ON email_sends(subscriber_id);

-- Row Level Security (RLS)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;

-- Policies: Service role only (API routes use service key)
-- No public access needed as all operations go through API routes
```

## Validation Rules

### Subscriber Email
- Must be valid email format (RFC 5322)
- Must be unique in database
- Maximum length: 254 characters (email standard)

### Source
- Must be one of: `website`, `homepage`, `community-page`, `day-page`
- Default: `website`

## Queries

### Insert New Subscriber (Upsert)
```typescript
const { data, error } = await supabase
  .from('subscribers')
  .upsert(
    {
      email,
      subscribed_at: new Date().toISOString(),
      unsubscribed: false,
      unsubscribed_at: null,
      source
    },
    { onConflict: 'email' }
  )
  .select();
```

### Mark as Unsubscribed
```typescript
const { data, error } = await supabase
  .from('subscribers')
  .update({
    unsubscribed: true,
    unsubscribed_at: new Date().toISOString()
  })
  .eq('unsubscribe_token', token)
  .select();
```

### Record Email Send
```typescript
const { data, error } = await supabase
  .from('email_sends')
  .insert({
    subscriber_id: subscriberId,
    email_type: 'welcome',
    resend_id: resendResponse.id
  });
```

### Check if Active Subscriber
```typescript
const { data, error } = await supabase
  .from('subscribers')
  .select('*')
  .eq('email', email)
  .eq('unsubscribed', false)
  .single();
```
