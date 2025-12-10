# User Journeys

This document describes the core user flows through the CoEngineers platform.

## Journey 1: Homepage Discovery

**Persona**: New visitor discovering the course

**Flow**:

1. User lands on homepage (/)
2. Sees hero section with course value proposition
3. Views four theme cards explaining course structure
4. Scrolls to "Why This Course?" section
5. Enters email in signup form
6. Receives confirmation message
7. Checks inbox for welcome email

**Success Criteria**:

- Clear value proposition visible above fold
- Theme cards communicate course structure
- Email signup works without friction
- Welcome email arrives within 1 minute

**Edge Cases**:

- Invalid email: Shows inline validation error
- Duplicate email: Shows "Already subscribed" message
- Network error: Shows retry message

---

## Journey 2: Email Subscription

**Persona**: Interested visitor signing up

**Flow**:

1. User finds email signup form (homepage, day pages, community page)
2. Enters valid email address
3. Submits form
4. Sees success message: "You're in! Check your inbox."
5. Receives welcome email with:
   - Course launch date
   - Installation instructions link
   - Community links
6. Clicks unsubscribe if desired (one-click)

**Success Criteria**:

- Form accepts valid email formats
- Lowercase normalisation applied
- Source tracking recorded
- Welcome email sent immediately
- Unsubscribe works without login

**Edge Cases**:

- Resubscription: Allowed, sends new welcome email
- Already subscribed: Shows friendly message, no duplicate email

---

## Journey 3: Course Navigation

**Persona**: Learner progressing through course

**Flow**:

1. User clicks "Start Free Course" on homepage
2. Lands on Introduction page
3. Uses sidebar to navigate between:
   - Theme overviews
   - Individual labs
   - Reference materials
4. Completes labs in sequence (Theme 1 → 2 → 3 → 4)
5. Each lab includes:
   - Learning objectives
   - Video embed (YouTube)
   - Step-by-step instructions
   - Interactive slash command

**Success Criteria**:

- Clear navigation hierarchy
- Progress visible in sidebar
- Mobile-friendly navigation
- Fast page transitions

**Edge Cases**:

- Deep link to specific lab: Works correctly
- Mobile: Hamburger menu accessible
- Search: Returns relevant results

---

## Journey 4: Unsubscribe Flow

**Persona**: User who wants to stop emails

**Flow**:

1. User receives email from CoEngineers
2. Clicks "Unsubscribe" link in footer
3. Lands on confirmation page
4. Sees "You've been unsubscribed" message
5. Can click "Return to CoEngineers" to revisit site

**Success Criteria**:

- One-click unsubscribe (no login required)
- Immediate effect
- Clear confirmation
- No further emails sent
- Can resubscribe later if desired

**Edge Cases**:

- Invalid token: Shows error message
- Already unsubscribed: Shows success (idempotent)
- Token not found: Shows 404-style message
