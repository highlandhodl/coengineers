# Feature Specification: Email Capture System

**Feature Branch**: `001-email-capture`
**Created**: 9 December 2025
**Status**: Draft
**Input**: User description: "Epic 5 - Email System: Supabase database, Resend integration, welcome email only. Main goal is capturing emails for community. Community page should show 'coming soon' as course launches 1 Jan and community launches after."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitor Subscribes to Course Notifications (Priority: P1)

A visitor discovers CoEngineers.ai and wants to be notified when the course launches or new content is available. They enter their email address in the signup form displayed on the website and receive confirmation that they're subscribed.

**Why this priority**: This is the core value proposition—capturing subscriber emails is the primary business goal. Without this, the entire email system has no purpose. This enables building an audience before and during launch.

**Independent Test**: Can be fully tested by entering an email on the website and verifying it appears in the subscriber database. Delivers the ability to build a mailing list.

**Acceptance Scenarios**:

1. **Given** a visitor is on the homepage or any page with the email signup form, **When** they enter a valid email address and submit, **Then** the email is saved and they see a success message "You're in! Check your inbox."
2. **Given** a visitor enters an email that already exists in the database, **When** they submit the form, **Then** they see a friendly message indicating they're already subscribed (no error, graceful handling)
3. **Given** a visitor enters an invalid email format (e.g., "notanemail"), **When** they attempt to submit, **Then** the form validates client-side and prevents submission with a helpful message
4. **Given** a visitor submits their email, **When** the submission is successful, **Then** the form resets and shows a success state

---

### User Story 2 - Subscriber Receives Welcome Email (Priority: P2)

After subscribing, the visitor immediately receives a welcome email that sets expectations, provides useful links (install Claude Code, join community, follow on LinkedIn), and confirms their subscription.

**Why this priority**: The welcome email is the first touchpoint with the subscriber after signup. It builds trust, sets expectations for the course, and provides immediate value. However, the system can technically function without it (emails are still captured).

**Independent Test**: Can be fully tested by subscribing with a real email address and verifying the welcome email arrives within a reasonable time. Delivers immediate engagement with new subscribers.

**Acceptance Scenarios**:

1. **Given** a visitor successfully subscribes, **When** their email is saved, **Then** a welcome email is sent to their address within 1 minute
2. **Given** the welcome email is sent, **When** the subscriber opens it, **Then** they see the subject "You're in! Here's what happens next" and content matching the brand voice
3. **Given** the welcome email contains links, **When** the subscriber clicks any link, **Then** the links resolve correctly to the intended destinations
4. **Given** the welcome email is rendered, **When** viewed on mobile devices, **Then** the email displays correctly and is readable

---

### User Story 3 - Subscriber Unsubscribes (Priority: P3)

A subscriber who no longer wishes to receive emails can unsubscribe easily via a link in any email. Their preference is recorded and they stop receiving further communications.

**Why this priority**: Unsubscribe functionality is a legal requirement (CAN-SPAM, GDPR) and builds trust. It's lower priority than capture and welcome email because most users won't need it immediately.

**Independent Test**: Can be fully tested by clicking the unsubscribe link in the welcome email and verifying no further emails are sent. Delivers compliance and user trust.

**Acceptance Scenarios**:

1. **Given** a subscriber clicks the unsubscribe link in any email, **When** the page loads, **Then** they see confirmation that they've been unsubscribed
2. **Given** a subscriber has unsubscribed, **When** any email would be sent to them, **Then** the system skips sending to that address
3. **Given** a subscriber has unsubscribed, **When** they re-enter their email on the website, **Then** they can resubscribe and their status is updated accordingly

---

### User Story 4 - Community Page Shows Coming Soon (Priority: P3)

Visitors who navigate to the Community page see a "Coming Soon" message with information about the community launching after the course begins. This sets expectations and encourages them to subscribe for updates.

**Why this priority**: The community page is informational and doesn't block core functionality. It simply provides transparency about the community timeline.

**Independent Test**: Can be fully tested by navigating to the community page and verifying the coming soon content displays correctly. Delivers clear user expectations about community availability.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the /community page, **When** the page loads, **Then** they see a "Coming Soon" message explaining the community launches after the course
2. **Given** the community page is displayed, **When** the visitor looks for a way to be notified, **Then** they see an email signup form or link to subscribe
3. **Given** the community page content, **When** read by a visitor, **Then** the messaging is positive and builds anticipation (not just "not available")

---

### Edge Cases

- What happens when the subscriber database is temporarily unavailable? The form should show a friendly error message and suggest trying again later.
- How does the system handle rapid duplicate submissions (e.g., user clicking submit multiple times)? Form should disable during submission and handle gracefully.
- What happens if email sending fails after subscription? The subscriber should still be saved, and email send retry should be attempted. The subscriber shouldn't see an error.
- How does the system handle emails with special characters or unusual TLDs? Modern email validation should accept valid RFC 5322 addresses including new TLDs.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide an email signup form component that can be embedded on any page
- **FR-002**: System MUST validate email format client-side before submission
- **FR-003**: System MUST persist subscriber emails to a database with timestamp
- **FR-004**: System MUST prevent duplicate email subscriptions (handle gracefully without error)
- **FR-005**: System MUST send a welcome email immediately upon successful subscription
- **FR-006**: System MUST include an unsubscribe link in all emails
- **FR-007**: System MUST track unsubscribe status and prevent sending to unsubscribed users
- **FR-008**: System MUST display a "Coming Soon" message on the community page
- **FR-009**: System MUST use British English for all user-facing copy
- **FR-010**: System MUST show loading state during form submission
- **FR-011**: System MUST show success/error states after form submission
- **FR-012**: System MUST support both light and dark mode for the email signup form
- **FR-013**: System MUST display a privacy note near the signup form: "No spam. Unsubscribe anytime."
- **FR-014**: Welcome email MUST include links to: Install Claude Code, Follow on LinkedIn, and Community (with coming soon note)
- **FR-015**: System MUST record the source of each subscription (e.g., 'website', 'homepage', 'community-page')

### Key Entities

- **Subscriber**: Represents a person who has signed up for email notifications. Key attributes: email address, subscription timestamp, subscription status (active/unsubscribed), unsubscribe timestamp, source (where they signed up from).
- **Email Send Record**: Represents a sent email for tracking purposes. Key attributes: recipient (subscriber), email type (welcome), sent timestamp.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can complete email signup in under 30 seconds
- **SC-002**: Welcome emails are delivered within 2 minutes of subscription
- **SC-003**: 95% of signup attempts result in successful subscription (excluding duplicate attempts)
- **SC-004**: Email signup form functions correctly on mobile devices (touch-friendly, readable)
- **SC-005**: Unsubscribe process completes in one click (single page confirmation)
- **SC-006**: Zero spam complaints from welcome email (content is expected and valuable)
- **SC-007**: Community page clearly communicates launch timeline without user confusion

## Assumptions

- Supabase will be used for database storage (as specified in PRD)
- Resend will be used for email delivery (as specified in PRD)
- The email domain (coengineers.ai) will be verified with proper DNS records (SPF, DKIM, DMARC) before emails are sent
- The course launches 1st January 2026, and the community will launch shortly after
- Only a single welcome email is needed (no drip campaign or daily emails for MVP)
- Existing EmailSignup component exists but needs to be connected to the backend

## Out of Scope

- Daily email notifications during January (simplified from original Epic 5)
- Email analytics/tracking (opens, clicks) for MVP
- Email templates for course content updates
- Double opt-in confirmation flow
- Weekly recap emails
- Admin dashboard for managing subscribers
