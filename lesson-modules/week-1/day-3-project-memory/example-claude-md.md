# Example CLAUDE.md

This is an example of a well-structured CLAUDE.md file. Use it as inspiration for creating your own project context files.

---

# Customer Dashboard Project

## Project Overview

A web dashboard for small business owners to track customer interactions, sales pipeline, and support tickets. Built for non-technical users who need simple, reliable tools.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Hosting**: Vercel (frontend) + Railway (backend)
- **Auth**: Supabase Auth

## Project Structure

```
customer-dashboard/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
│   └── package.json
├── backend/            # Express API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── models/
│   └── package.json
├── docs/               # Project documentation
└── shared/             # Shared TypeScript types
```

## Coding Preferences

### General Style

- **TypeScript strict mode** - No implicit any
- **Functional components** - Use hooks, not class components
- **Named exports** - Prefer named exports over default exports
- **Error handling** - Always handle errors explicitly, never silent failures

### File Naming

- Components: `PascalCase.tsx` (e.g., `CustomerList.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `use*.ts` (e.g., `useCustomers.ts`)
- Tests: `*.test.ts` or `*.test.tsx`

### Comments

- Write comments that explain **why**, not what
- JSDoc comments for public APIs
- Inline comments for non-obvious logic only

### British English

- Use British spellings: colour, organisation, behaviour
- Code should use British spelling in user-facing strings
- Comments and docs in British English

## Key Files

### Configuration

- `frontend/package.json` - Frontend dependencies and scripts
- `backend/package.json` - Backend dependencies and scripts
- `tsconfig.json` - TypeScript configuration (in both frontend/backend)

### Important Components

- `frontend/src/components/CustomerList.tsx` - Main customer list view
- `frontend/src/pages/Dashboard.tsx` - Dashboard homepage
- `backend/src/routes/customers.ts` - Customer API endpoints
- `backend/src/models/Customer.ts` - Customer data model

### Documentation

- `docs/api.md` - API endpoint documentation
- `docs/database-schema.md` - Database structure
- `docs/decisions/` - Architecture decision records

## Common Tasks

### Running the Project

```bash
# Frontend (from /frontend)
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run test             # Run tests

# Backend (from /backend)
npm run dev              # Start dev server (http://localhost:8000)
npm run db:migrate       # Run database migrations
npm run test             # Run tests
```

### Database

We use PostgreSQL. Connection string is in `.env` (not committed).

Key tables:

- `customers` - Customer records
- `interactions` - Customer interaction history
- `tickets` - Support tickets
- `users` - Dashboard users (separate from customers)

### Testing

- Use Jest for unit tests
- Use React Testing Library for component tests
- Test files live alongside source files
- Aim for >80% coverage on critical paths

## Design Principles

1. **Simplicity first** - This is for non-technical users
2. **Fast feedback** - Show loading states, confirm actions
3. **Forgiving UX** - Undo options, confirmation dialogs for destructive actions
4. **Mobile-friendly** - Responsive design, but desktop is primary

## Current Focus

We're currently building out the support ticket system (sprint 3). The customer list and interaction tracking are complete and deployed.

**Current branch**: `feature/support-tickets`

**Active tasks**:

- Ticket list view with filtering
- Ticket detail page with comment thread
- Email notifications for new tickets

## Things to Watch Out For

- **API rate limits** - We have 1000 req/hour limit on the email service
- **Date formatting** - Always use `date-fns` library, format as DD/MM/YYYY for UK users
- **Customer IDs** - Use UUIDs, not sequential integers (privacy requirement)
- **Permissions** - Check user role before showing admin features

## External Dependencies

- **Email**: SendGrid (credentials in Railway env vars)
- **Analytics**: Plausible (privacy-focused, no cookies)
- **Error tracking**: Sentry (DSN in env vars)

## Team Context

Solo project for learning purposes. Pretend client is "Sarah's Consulting" - a 5-person consultancy that needs better client management.

## Resources

- Design mockups: `docs/designs/` (Figma exports)
- API documentation: `docs/api.md`
- Database schema: `docs/database-schema.md`

---

## How to Use This File

When working on this project, Claude Code will read this file to understand:

- What technologies you're using
- Your coding style preferences
- Where important files live
- Common commands and workflows

Keep this file updated as your project evolves. If you make a big architectural change or add a new tool, update this file so Claude stays in sync with your decisions.
