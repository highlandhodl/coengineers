# Client Feedback Call - Marcus from TechConsult - Raw Notes

thurs 7 dec 11am

marcus thompson, head of ops at techconsult
using our platform for 6 months, ~15 users

---

marcus started with praise:
"team loves it, way better than the spreadsheets we were using"
"onboarding was smooth"
"support team is great, quick responses"

then got into issues lol

---

ISSUE 1: Mobile experience

marcus: "our consultants are out with clients all day, they need to update stuff from their phones"
current site works but its clunky
keyboard covers input fields
buttons too small
have to zoom in constantly

"we tried using tablets but thats not practical"

wants: proper mobile app, ios and android
or at least: mobile-responsive web design

i told him mobile is on roadmap for Q1
he seemed happy about that

---

ISSUE 2: Bulk actions

marcus: "we have to update 20-30 customer records at once sometimes"
like when they change account manager or status
right now its one by one, takes forever

wants: ability to select multiple customers and do bulk updates

- change status
- assign to different user
- add tags
- maybe even bulk delete?

i said i'd pass this to the team, sounds reasonable

---

ISSUE 3: Custom fields

this ones big

marcus: "every business is different, we need fields you dont have"
for them its:

- project value (they want to track revenue per customer)
- renewal date (for annual contracts)
- industry (they segment by industry)
- referral source (how did customer find them)

right now theyre putting this stuff in notes field which is messy

wants: ability to add custom fields per organisation
like salesforce does

i explained thats a big feature, would take time
he gets it but said "its a dealbreaker for scaling up to our whole company (50 users)"

important: theyre on basic plan ($19/mo) but would upgrade to enterprise ($199/mo) if we had custom fields

---

ISSUE 4: Reporting & exports

already knew about this from internal convos

marcus: "csv is fine but our finance team needs excel"
also wants:

- pdf reports for executives
- scheduled reports (email me a summary every monday)
- custom dashboards (pick the widgets you want)

i said we're working on better exports, coming soon

---

FEATURE REQUESTS:

1. integration with their email (gmail)
   "would be great if customer emails showed up in the timeline automatically"

2. slack notifications
   "when a high-priority ticket comes in, post to our #support channel"

3. calendar integration
   "we book meetings with customers, would be nice to see those in the customer view"

4. file attachments
   "sometimes we need to upload contracts or documents"
   right now they use google drive and put links in notes

5. team permissions
   "not everyone should see everything"
   eg: junior consultants shouldnt see contract values
   want role-based access control

---

BUGS:

1. search sometimes returns old results (caching issue?)
   marcus: "i updated a customer name yesterday, still showing old name in search"

2. notifications dont always work
   "sometimes i dont get notified about new tickets"

3. date format is american (MM/DD/YYYY)
   marcus: "were a uk company, we use DD/MM/YYYY"
   i said i'd fix this, easy

---

OVERALL:

marcus is happy but wants to see progress on:

1. mobile (critical for their team)
2. custom fields (blocker for expanding usage)
3. bulk actions (quality of life)

contract renewal: march 2026
considering upgrading to enterprise tier if we ship custom fields

willing to pay more for features they need

---

action items for me:

- add all feature requests to backlog
- prioritise mobile (already planned)
- investigate custom fields (big project)
- fix date format bug (quick win)
- look into search caching issue
- check notification delivery

---

personal notes:
marcus seems like a good champion for us at techconsult
if we keep him happy, could be a good case study
theyre growing fast (15 users now, 50 by mid 2026)
revenue opportunity if we build what they need

he mentioned he knows other consultancies who might be interested
potential referrals if we deliver

---

followup: send marcus timeline for mobile + custom fields by end of week
