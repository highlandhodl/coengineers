# Feature Summary

This document summarises the features built for the CoEngineers platform.

## Feature 001: Course Restructure

**Status**: Complete
**Branch**: `001-course-restructure`

### What Was Built

Restructured the course from a 31-day format to a 20-lab format organised into four themes:

1. **Theme 1: Digital Workspace** (5 labs)
   - First conversation with Claude Code
   - PARA folder structure setup
   - Document templates
   - Metadata enrichment
   - Project memory (CLAUDE.md)

2. **Theme 2: Content Processing** (5 labs)
   - Meeting notes transformation
   - Audio transcript processing
   - Email thread refinement
   - Research synthesis
   - YouTube extraction

3. **Theme 3: Document Creation** (5 labs)
   - Word document creation
   - Spreadsheet generation
   - Presentation building
   - Brand kit creation
   - Statement of work

4. **Theme 4: External APIs** (5 labs)
   - Gamma presentations
   - Gemini images
   - ElevenLabs audio
   - PRD creation
   - Product backlog

### Technical Deliverables

- 20 MDX content pages
- 20 interactive slash commands
- Course structure JSON schema
- Updated sidebar navigation
- Theme overview pages

---

## Feature 004: Production Release

**Status**: Complete
**Branch**: `004-production-release`

### What Was Built

Production readiness work with three streams:

#### Stream 1: UI Refinements

- Text-only logo (removed gear icon)
- Removed countdown timer from homepage
- Clean, professional appearance

#### Stream 2: Test Suite

- Subscribe endpoint tests (10 test cases)
- Unsubscribe endpoint tests (8 test cases)
- Email template tests (8 test cases)
- 90% coverage on API endpoints

#### Stream 3: Documentation

- UX documentation (user journeys)
- Engineering documentation (architecture, API, deployment, troubleshooting)
- Product documentation (feature summary, decisions, roadmap)
- UAT test plan and results

### Technical Deliverables

- Vitest test infrastructure
- Comprehensive test suite (26 tests)
- Stakeholder documentation (12 documents)
- Quality gate automation

---

## Platform Capabilities

### Email Subscription

- **Signup**: JSON and form-encoded requests
- **Validation**: Email format, source tracking
- **Deduplication**: "Already subscribed" handling
- **Resubscription**: Supports previous unsubscribers
- **Welcome Email**: British English, one-click unsubscribe

### Content Delivery

- **Static Site**: Pre-rendered for performance
- **Search**: Pagefind integration
- **Navigation**: Starlight sidebar
- **Mobile**: Responsive design

### Developer Experience

- **TypeScript**: Strict mode, full type safety
- **Testing**: Vitest with mocked services
- **Linting**: ESLint + Prettier
- **CI/CD**: Vercel automatic deployments
