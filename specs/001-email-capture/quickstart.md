# Quickstart: Email Capture System

**Date**: 9 December 2025
**Feature**: 001-email-capture

## Prerequisites

Before implementing, ensure you have:

1. **Supabase Account** - Create a project at [supabase.com](https://supabase.com)
2. **Resend Account** - Create an account at [resend.com](https://resend.com)
3. **Domain Verified** - Verify coengineers.ai domain in Resend for email sending
4. **Environment Variables** - Have your API keys ready

---

## Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js resend
```

---

## Step 2: Set Up Environment Variables

Create `.env` file (don't commit this):

```bash
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend
RESEND_API_KEY=re_your_api_key

# Site
PUBLIC_SITE_URL=https://coengineers.ai
```

Add to Vercel project settings:
1. Go to Project Settings → Environment Variables
2. Add each variable for Production (and optionally Preview/Development)

---

## Step 3: Create Database Tables

Run in Supabase SQL Editor:

```sql
-- Enable UUID extension
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

-- Email sends tracking
CREATE TABLE IF NOT EXISTS email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id) ON DELETE CASCADE,
  email_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  resend_id TEXT
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_unsubscribe_token ON subscribers(unsubscribe_token);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;
```

---

## Step 4: Update Astro Config

Add `output: 'hybrid'` to enable API routes:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://coengineers.ai',
  output: 'hybrid',  // ← Add this line
  integrations: [
    // ... existing integrations
  ],
});
```

---

## Step 5: Create Library Files

### Supabase Client

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient() {
  return createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
```

### Email Sending

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, unsubscribeToken: string) {
  const unsubscribeUrl = `${import.meta.env.PUBLIC_SITE_URL}/api/unsubscribe?token=${unsubscribeToken}`;

  const { data, error } = await resend.emails.send({
    from: 'CoEngineers <noreply@coengineers.ai>',
    to: email,
    subject: "You're in! Here's what happens next",
    html: `
      <h1>Welcome to CoEngineers!</h1>
      <p>You're now on the list for 31 Days of Claude Code.</p>
      <p>On January 1st, you'll receive Day 1's video.</p>
      <p>While you wait:</p>
      <ul>
        <li><a href="https://claude.ai/docs/installation">Install Claude Code</a></li>
        <li><a href="https://linkedin.com/company/coengineers">Follow on LinkedIn</a></li>
      </ul>
      <p>Cheers,<br/>John</p>
      <hr/>
      <p style="font-size: 12px; color: #666;">
        <a href="${unsubscribeUrl}">Unsubscribe</a>
      </p>
    `,
  });

  if (error) throw error;
  return data;
}
```

---

## Step 6: Create API Routes

### Subscribe Endpoint

```typescript
// src/pages/api/subscribe.ts
import type { APIContext } from 'astro';
import { getSupabaseClient } from '../../lib/supabase';
import { sendWelcomeEmail } from '../../lib/email';

export async function POST(context: APIContext): Promise<Response> {
  // Implementation in contracts/api.md
}
```

### Unsubscribe Endpoint

```typescript
// src/pages/api/unsubscribe.ts
import type { APIContext } from 'astro';
import { getSupabaseClient } from '../../lib/supabase';

export async function GET(context: APIContext): Promise<Response> {
  // Implementation in contracts/api.md
}
```

---

## Step 7: Update EmailSignup Component

Update the existing component to handle responses:

```astro
<!-- src/components/EmailSignup.astro -->
<!-- Update the <script> section for async form handling -->
```

---

## Step 8: Update Community Page

Change the community page to show "Coming Soon" message with email signup.

---

## Verification Checklist

- [ ] Environment variables set in `.env` and Vercel
- [ ] Database tables created in Supabase
- [ ] `output: 'hybrid'` added to astro.config.mjs
- [ ] Dependencies installed (`@supabase/supabase-js`, `resend`)
- [ ] API routes respond correctly (`/api/subscribe`, `/api/unsubscribe`)
- [ ] Welcome email sends successfully
- [ ] Unsubscribe link works
- [ ] Form shows loading/success/error states
- [ ] Community page shows "Coming Soon"

---

## Testing Locally

```bash
# Start dev server
npm run dev

# Test subscription (in another terminal)
curl -X POST http://localhost:4321/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","source":"website"}'

# Check Supabase dashboard for new subscriber
# Check Resend dashboard for sent email
```

---

## Deployment

1. Push changes to main branch
2. Vercel auto-deploys
3. Verify environment variables are set in Vercel
4. Test subscription on production URL
