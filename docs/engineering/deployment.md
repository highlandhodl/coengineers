# Deployment Guide

This document describes how to deploy the CoEngineers platform to Vercel.

## Prerequisites

- Node.js 18+
- npm 9+
- Vercel account
- Supabase project
- Resend account

## Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable                    | Description               | Example                              |
| --------------------------- | ------------------------- | ------------------------------------ |
| `SUPABASE_URL`              | Supabase project URL      | `https://xxx.supabase.co`            |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | `eyJ...` (long JWT)                  |
| `RESEND_API_KEY`            | Resend API key            | `re_xxx`                             |
| `RESEND_FROM_EMAIL`         | Sender email address      | `CoEngineers <hello@coengineers.ai>` |
| `PUBLIC_SITE_URL`           | Production site URL       | `https://coengineers.ai`             |

**Important**: `SUPABASE_SERVICE_ROLE_KEY` should **never** have the `PUBLIC_` prefix.

## Initial Setup

### 1. Connect Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure project:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `.vercel/output`

### 2. Configure Environment Variables

1. Navigate to Project Settings → Environment Variables
2. Add all variables from the table above
3. Set scope to "Production" and "Preview" as needed

### 3. Database Setup

1. Create Supabase project at [supabase.com](https://supabase.com)
2. Run SQL migrations:

```sql
-- Create subscribers table
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  unsubscribed BOOLEAN NOT NULL DEFAULT false,
  unsubscribed_at TIMESTAMPTZ,
  unsubscribe_token UUID UNIQUE DEFAULT gen_random_uuid(),
  source TEXT NOT NULL
);

-- Create email_sends table
CREATE TABLE email_sends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES subscribers(id),
  email_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resend_id TEXT
);

-- Enable RLS with deny-all
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sends ENABLE ROW LEVEL SECURITY;
```

### 4. Email Setup

1. Create Resend account at [resend.com](https://resend.com)
2. Generate API key
3. Verify domain (optional but recommended for production)

## Deployment Commands

### Manual Deployment

```bash
# Build locally
npm run build

# Deploy to Vercel
vercel deploy --prod
```

### Automatic Deployment

Push to `main` branch triggers automatic deployment via Vercel Git integration.

## Post-Deployment Verification

### 1. Check Build Logs

- Verify build completed without errors
- Check for any deprecation warnings

### 2. Test Critical Paths

```bash
# Test homepage
curl -I https://coengineers.ai

# Test subscription (use test email)
curl -X POST https://coengineers.ai/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "source": "manual-test"}'
```

### 3. Monitor

- Check Vercel Analytics for traffic
- Monitor Supabase for database activity
- Check Resend dashboard for email delivery

## Rollback

If issues occur:

1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"

## Domain Configuration

1. Add custom domain in Vercel Dashboard
2. Update DNS records as instructed
3. Wait for SSL certificate provisioning
4. Update `PUBLIC_SITE_URL` environment variable
