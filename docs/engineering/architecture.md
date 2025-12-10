# Architecture

This document describes the system architecture for the CoEngineers platform.

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Vercel (Hosting)                         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐    ┌─────────────────────────┐    │
│  │   Static Site       │    │   Serverless API        │    │
│  │   (Astro/Starlight) │    │   (/api/subscribe)      │    │
│  │   ~50 MDX pages     │    │   (/api/unsubscribe)    │    │
│  └─────────────────────┘    └───────────┬─────────────┘    │
│                                         │                   │
└─────────────────────────────────────────┼───────────────────┘
                                          │
                    ┌─────────────────────┴─────────────────────┐
                    │                                           │
          ┌─────────▼─────────┐                    ┌────────────▼────────────┐
          │     Supabase      │                    │        Resend           │
          │   (PostgreSQL)    │                    │   (Transactional Email) │
          │                   │                    │                         │
          │ - subscribers     │                    │ - Welcome emails        │
          │ - email_sends     │                    │ - British English       │
          └───────────────────┘                    └─────────────────────────┘
```

## Components

### Static Site (Astro/Starlight)

- **Technology**: Astro 5.1 with Starlight theme
- **Content**: MDX files for course content
- **Build**: Pre-rendered at build time
- **Hosting**: Vercel Edge Network

### Serverless API

- **Runtime**: Vercel Functions (Node.js)
- **Endpoints**:
  - `POST /api/subscribe` - Email signup
  - `GET /api/unsubscribe` - One-click unsubscribe

### Database (Supabase)

- **Type**: PostgreSQL with PostgREST API
- **Tables**:
  - `subscribers` - Email list management
  - `email_sends` - Transactional email log
- **Security**: Row Level Security (RLS) with deny-all policies
- **Access**: Service role key (server-side only)

### Email (Resend)

- **Provider**: Resend
- **Templates**: HTML email with British English
- **Features**:
  - Welcome email on signup
  - One-click unsubscribe link

## Data Flow

### Subscription Flow

```
User → EmailSignup.astro → POST /api/subscribe
                                    │
                                    ├─► Check existing subscriber
                                    │   (Supabase SELECT)
                                    │
                                    ├─► Insert/Update subscriber
                                    │   (Supabase INSERT/UPDATE)
                                    │
                                    ├─► Send welcome email
                                    │   (Resend API)
                                    │
                                    └─► Log email send
                                        (Supabase INSERT)
```

### Unsubscribe Flow

```
User → Email Link → GET /api/unsubscribe?token=uuid
                                    │
                                    ├─► Validate token format
                                    │
                                    ├─► Find subscriber by token
                                    │   (Supabase SELECT)
                                    │
                                    ├─► Update unsubscribed status
                                    │   (Supabase UPDATE)
                                    │
                                    └─► Return confirmation HTML
```

## Security Considerations

1. **No client-side database access** - Anon key never used
2. **Service role key server-only** - Bypasses RLS safely
3. **UUID tokens** - Unguessable unsubscribe links
4. **Input validation** - Email format and source validation
5. **Rate limiting** - Vercel's built-in protection

## Performance

- **Static pages**: Cached at edge
- **API cold start**: ~200ms (Vercel)
- **Database queries**: <50ms (Supabase)
- **Email delivery**: <1 minute (Resend)
