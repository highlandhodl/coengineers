# Research: Email Capture System

**Date**: 9 December 2025
**Feature**: 001-email-capture

## Decision 1: Astro API Routes Configuration

**Decision**: Use Astro's `hybrid` output mode with API routes in `src/pages/api/`

**Rationale**:
- Astro 5.x supports API routes via file-based routing (`src/pages/api/*.ts`)
- `hybrid` mode allows static generation for content pages while enabling serverless functions for API routes
- Vercel automatically detects and deploys Astro API routes as serverless functions
- No additional adapter configuration required (Vercel auto-detection works)

**Alternatives Considered**:
- `server` mode: Would make all pages server-rendered (unnecessary overhead for static content)
- Separate API backend: Adds complexity without benefit for this use case

**Configuration Required**:
```javascript
// astro.config.mjs - add output: 'hybrid'
export default defineConfig({
  output: 'hybrid',
  // ... existing config
});
```

**Key Pattern**:
```typescript
// src/pages/api/subscribe.ts
import type { APIContext } from 'astro';

export async function POST(context: APIContext): Promise<Response> {
  // Handle form data (HTML form) or JSON
  const contentType = context.request.headers.get('content-type');
  if (contentType?.includes('application/x-www-form-urlencoded')) {
    const formData = await context.request.formData();
    email = formData.get('email') as string;
  } else {
    const body = await context.request.json();
    email = body.email;
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

---

## Decision 2: Supabase Client Setup

**Decision**: Use `@supabase/supabase-js` with service role key for API routes

**Rationale**:
- Service role key bypasses Row Level Security (needed for serverless API routes)
- Disable session persistence for serverless (stateless functions)
- Anon key not suitable as it requires RLS policies that would expose subscriber data

**Alternatives Considered**:
- Anon key with permissive RLS: Security risk, would expose subscriber list
- Direct PostgreSQL connection: Unnecessary complexity, Supabase client is simpler

**Environment Variables**:
```bash
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx  # Server-side only, bypasses RLS
```

**Key Pattern**:
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

**Upsert Pattern** (handle duplicate emails gracefully):
```typescript
const { data, error } = await supabase
  .from('subscribers')
  .upsert(
    { email, subscribed_at: new Date().toISOString(), source },
    { onConflict: 'email' }
  )
  .select();
```

---

## Decision 3: Resend Email Sending

**Decision**: Use Resend SDK with inline HTML templates

**Rationale**:
- Resend is specified in PRD as the email provider
- Simple SDK with straightforward error handling
- Inline HTML sufficient for single welcome email (no need for React Email complexity)
- Free tier (100 emails/day) sufficient for launch period

**Alternatives Considered**:
- React Email templates: Overkill for single email template
- SendGrid/Mailgun: Not specified in PRD, would require additional setup

**Environment Variables**:
```bash
RESEND_API_KEY=xxx
```

**Key Pattern**:
```typescript
// src/lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  const { data, error } = await resend.emails.send({
    from: 'CoEngineers <noreply@coengineers.ai>',
    to: email,
    subject: "You're in! Here's what happens next",
    html: welcomeEmailHtml,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error(`Email failed: ${error.message}`);
  }

  return data;
}
```

**Rate Limits**:
- Free tier: 100 emails/day
- Burst: 50 emails/second
- Pro tier available if needed during launch

---

## Decision 4: Form Handling Strategy

**Decision**: Progressive enhancement with client-side JavaScript

**Rationale**:
- HTML form with `action="/api/subscribe"` works without JavaScript (accessibility)
- Client-side JavaScript enhances UX with loading states and inline feedback
- Form submission should be prevented from default to show success/error states

**Alternatives Considered**:
- JavaScript-only submission: Breaks without JS, poor accessibility
- Full page reload on submit: Poor UX, no inline feedback

**Key Pattern**:
```astro
<!-- Form works without JS -->
<form id="email-signup-form" method="POST" action="/api/subscribe">
  <input type="email" name="email" required />
  <button type="submit">Subscribe</button>
</form>

<script>
  // Progressive enhancement
  const form = document.getElementById('email-signup-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Show loading, submit via fetch, show result
  });
</script>
```

---

## Decision 5: Unsubscribe Flow

**Decision**: Token-based unsubscribe link with dedicated endpoint

**Rationale**:
- Generate unique token per subscriber for secure unsubscribe
- Single-click unsubscribe (GET request to `/api/unsubscribe?token=xxx`)
- No authentication required (legal requirement for easy unsubscribe)

**Alternatives Considered**:
- Email-based unsubscribe: Requires user to type email, poor UX
- POST-only unsubscribe: Two clicks required, worse compliance

**Key Pattern**:
```typescript
// Generate token on subscribe
const unsubscribeToken = crypto.randomUUID();

// Unsubscribe link in email
`https://coengineers.ai/api/unsubscribe?token=${unsubscribeToken}`

// API route handles GET request
export async function GET(context: APIContext) {
  const token = context.url.searchParams.get('token');
  // Look up subscriber, mark as unsubscribed
}
```

---

## Decision 6: Database Schema

**Decision**: Two tables - `subscribers` and `email_sends`

**Rationale**:
- Separating subscribers from email tracking allows future analytics
- Unsubscribe token stored in subscribers table for security
- Source tracking helps understand signup channels

**Schema**:
```sql
-- subscribers table
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed BOOLEAN DEFAULT FALSE,
  unsubscribed_at TIMESTAMPTZ,
  unsubscribe_token UUID DEFAULT gen_random_uuid(),
  source TEXT DEFAULT 'website'
);

-- email_sends table (for tracking)
CREATE TABLE email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id),
  email_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  resend_id TEXT
);
```

---

## Required Dependencies

```bash
npm install @supabase/supabase-js resend
```

## Environment Variables Summary

| Variable | Purpose | Required |
|----------|---------|----------|
| `SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side database access | Yes |
| `RESEND_API_KEY` | Email sending | Yes |
| `PUBLIC_SITE_URL` | For unsubscribe links | Yes |

---

## Open Questions Resolved

1. **How to handle duplicate subscriptions?** → Upsert with `onConflict: 'email'`
2. **Which Supabase key to use?** → Service role key (server-side only)
3. **How to make unsubscribe secure?** → UUID token per subscriber
4. **Form submission pattern?** → Progressive enhancement (works with/without JS)
5. **Email template approach?** → Inline HTML (simple for single template)
