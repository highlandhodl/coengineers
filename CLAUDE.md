## Active Technologies

- Node.js 18+, TypeScript 5.x (via Astro) + Astro 5.1, @astrojs/starlight, @supabase/supabase-js, Resend (004-production-release)
- Supabase PostgreSQL (external service, service role access only) (004-production-release)

## Recent Changes

- 004-production-release: Added Node.js 18+, TypeScript 5.x (via Astro) + Astro 5.1, @astrojs/starlight, @supabase/supabase-js, Resend

---

## Project Overview

**CoEngineers** is a 31-day immersive course teaching product managers, content creators, and knowledge workers how to use Claude Code for productivity. The course requires no coding experience and focuses on practical, real-world workflows.

**Target Audience:**

- Product managers automating workflows
- Content creators processing media
- Knowledge workers managing information
- Non-technical professionals learning AI tools

**Course Structure:**

- Week 1 (Days 1-7): Foundation — Digital workspace, templates, slash commands
- Week 2 (Days 8-14): Content Processing — Meetings, voice, PDFs, web
- Week 3 (Days 15-21): Creative Outputs — Presentations, images, social
- Week 4 (Days 22-28): Building Software — Spec-driven development
- Bonus (Days 29-31): Capstone — BMAD Method, PRP Framework

## Architecture

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

## Key Directories

```
src/
├── content/docs/           # MDX course content (31 days + blog + reference)
├── pages/api/              # Serverless endpoints
│   ├── subscribe.ts        # POST /api/subscribe
│   └── unsubscribe.ts      # GET /api/unsubscribe
├── lib/                    # Shared utilities
│   ├── supabase.ts         # Database client (service role)
│   ├── email.ts            # Resend email service
│   └── types.ts            # TypeScript interfaces
├── components/             # Custom Astro components
│   ├── YouTube.astro       # Video embeds
│   ├── EmailSignup.astro   # Subscription form
│   ├── Countdown.astro     # Launch countdown
│   └── SlashCommand.astro  # Interactive command display
└── styles/
    └── custom.css          # Starlight customisations

tests/
├── setup.ts                # Global mocks (Supabase, Resend)
└── unit/
    ├── subscribe.test.ts   # Subscribe endpoint tests
    ├── unsubscribe.test.ts # Unsubscribe endpoint tests
    └── email.test.ts       # Email template tests

.claude/commands/           # Interactive slash commands for learners
specs/                      # Feature specifications (speckit workflow)
docs/                       # Technical documentation
```

## Development Commands

```bash
# Development
npm run dev           # Start dev server (localhost:4321)
npm run build         # Production build
npm run preview       # Preview production build

# Code Quality
npm run lint          # ESLint check
npm run lint:fix      # ESLint auto-fix
npm run format        # Prettier format
npm run format:check  # Prettier check
npm run type-check    # TypeScript check

# Testing
npm run test          # Watch mode
npm run test:run      # Single run (CI)
npm run test:coverage # With coverage report
```

## Code Style Guidelines

### British English

All content, comments, and user-facing text must use British English:

- colour (not color)
- organisation (not organization)
- behaviour (not behavior)
- optimised (not optimized)
- licence (not license, for noun)

### TypeScript

- Strict mode enabled
- Explicit return types on functions
- Interface over type where possible
- No `any` without justification

### Prettier (2 space indent, single quotes, trailing commas)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### ESLint

- Astro plugin enabled
- jsx-a11y for accessibility
- No unused variables
- No console in production code

## Environment Variables

```env
# Required for API endpoints
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...      # Service role, NOT anon key

# Required for email
RESEND_API_KEY=re_xxx

# Site URL for email links
PUBLIC_SITE_URL=https://coengineers.ai
```

**Note:** `PUBLIC_` prefix exposes variables to client-side code. Database keys must NOT have this prefix.

## API Endpoints

### POST /api/subscribe

```typescript
// Request
{ email: string, source?: 'website' | 'homepage' | 'community-page' | 'day-page' }

// Responses
201: { success: true, message: "You're in! Check your inbox." }
200: { success: true, message: "You're already subscribed!" }
400: { success: false, error: "Please enter a valid email address." }
500: { success: false, error: "Something went wrong. Please try again later." }
```

### GET /api/unsubscribe

```typescript
// Request
?token=<uuid>

// Responses
200: HTML confirmation page
400: { success: false, error: "Invalid unsubscribe link." }
404: { success: false, error: "Subscription not found." }
500: { success: false, error: "Something went wrong. Please try again." }
```

## Database Schema

### subscribers

| Column            | Type        | Description           |
| ----------------- | ----------- | --------------------- |
| id                | UUID        | Primary key           |
| email             | TEXT        | Unique, lowercase     |
| subscribed_at     | TIMESTAMPTZ | Initial subscription  |
| unsubscribed      | BOOLEAN     | Current status        |
| unsubscribed_at   | TIMESTAMPTZ | When unsubscribed     |
| unsubscribe_token | UUID        | One-click unsubscribe |
| source            | TEXT        | Signup location       |

### email_sends

| Column        | Type        | Description       |
| ------------- | ----------- | ----------------- |
| id            | UUID        | Primary key       |
| subscriber_id | UUID        | FK to subscribers |
| email_type    | TEXT        | 'welcome'         |
| sent_at       | TIMESTAMPTZ | When sent         |
| resend_id     | TEXT        | Resend message ID |

**Security:** RLS enabled with deny-all policies. Service role key bypasses RLS.

## Testing

Tests use Vitest with mocked external services:

```typescript
// Example test structure
describe('POST /api/subscribe', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates new subscriber with valid email', async () => {
    // Arrange
    mockSupabaseSelect.mockResolvedValueOnce({ data: null });
    mockSupabaseInsert.mockResolvedValueOnce({ data: mockSubscriber });

    // Act
    const response = await POST(mockContext);

    // Assert
    expect(response.status).toBe(201);
  });
});
```

## Common Tasks

### Adding a New Lesson

1. Create MDX file in `src/content/docs/week-N/day-N-slug.mdx`
2. Add to sidebar in `astro.config.mjs`
3. Create slash command in `.claude/commands/wN.dN.md`

### Creating a Component

1. Create in `src/components/ComponentName.astro`
2. Import in MDX: `import ComponentName from '../../../components/ComponentName.astro'`

### Adding an API Endpoint

1. Create in `src/pages/api/endpoint.ts`
2. Export async function for HTTP method (GET, POST, etc.)
3. Set `export const prerender = false`
4. Add tests in `tests/unit/endpoint.test.ts`

## Troubleshooting

**Build fails with TypeScript errors:**

```bash
npm run type-check -- --build --clean
npm run type-check
```

**Tests fail with import errors:**
Ensure `vitest.config.ts` uses `getViteConfig()` from `astro/config`.

**API returns 500:**
Check environment variables are set and Supabase connection is working.

## Resources

- [Astro Docs](https://docs.astro.build/)
- [Starlight Docs](https://starlight.astro.build/)
- [Supabase Docs](https://supabase.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Vitest Docs](https://vitest.dev/)
