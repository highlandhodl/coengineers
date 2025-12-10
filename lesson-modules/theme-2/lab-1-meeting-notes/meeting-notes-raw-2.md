# Sprint Planning - Raw Notes

wed 6 dec 2pm

team: priya (scrum master), james, alex, me

---

priya: ok lets plan sprint 12, two weeks starting tomorrow

looking at backlog, top priorities:

1. ticket search functionality
2. email notifications for new tickets
3. customer dashboard performance improvements
4. dark mode (from yesterday's meeting)

---

TICKET SEARCH

alex volunteered
estimated 5 points
needs to search across: title, description, customer name, ticket id
should we do full-text search or simple string matching?
james: full-text is overkill, just use LIKE queries for now
priya: agrees, we can optimise later if needed
alex: cool, i'll use postgres LIKE then, should be fine for our data size

blocker: need to add indexes to the database first or it'll be slow
action: alex to create migration for indexes, then build search

---

EMAIL NOTIFICATIONS

james wants to take this
estimated 8 points (bigger than expected)
needs to:

- set up email service (sendgrid? mailgun?)
- create email templates
- add notification preferences to user settings
- handle bounces/failures

priya: thats a lot, can we break it down?
james: yeah prob should be 2 tickets:

1. basic email sending (just new tickets) - 5pts
2. user preferences + bounce handling - 3pts

priya: perfect, lets do that

alex: do we need to notify on ticket updates too?
james: sarah said just new tickets for now, we can add updates later
priya: added "notify on updates" to backlog for next sprint

---

DASHBOARD PERFORMANCE

priya taking this one
estimated 3 points
the customer list is slow when you have 500+ customers
need to:

- add pagination (20 per page)
- optimise the query (its doing a bunch of joins we dont need)
- maybe add some indexes

james: should be quick, we already have pagination on tickets
priya: yeah i'll copy that pattern

---

DARK MODE

james: i said i'd do this, only 2 points
just css variables + toggle in settings
priya: sounds good, nice quick win

alex: should we save preference to backend or just localStorage?
james: localStorage is fine, one less db call
priya: agree

---

capacity check:
alex: 8 points available (off friday for dentist)
james: 10 points available
priya: 6 points (have to do quarterly reviews this sprint)
me: 10 points available

total: 34 points

planned work: 5 + 5 + 3 + 3 + 2 = 18 points

priya: we have headroom, anything else?

---

alex: can we tackle the "export to excel" thing? sarah mentioned it yesterday
james: how big is that?
alex: prob 5 points, need to use a library, add export buttons, make it work for customers and tickets
priya: lets add it, we're at 23 points then, still comfortable

---

FINAL SPRINT PLAN:

alex (13pts committed):

- add db indexes (2pts)
- ticket search (5pts)
- export to excel (5pts)

james (12pts committed):

- email notifications setup (5pts)
- user email preferences (3pts)
- dark mode (2pts)

priya (3pts committed):

- dashboard performance (3pts)

me (0pts committed):

- support/code review

priya: wait thats 28 not 23, alex youre over
alex: oh yeah... should i drop export?
priya: nah drop the indexes to 1pt, theyre quick
alex: ok cool

FINAL: 26 points committed, 34 available

---

definition of done:

- code written
- tests passing
- pr reviewed and approved
- merged to main
- deployed to staging
- smoke tested

alex: do we need to update docs?
priya: only if youre changing an api, for these tickets prob not

---

blockers:
alex: none
james: need sendgrid account set up - can sarah do that?
priya: i'll ask her after this
me: none

---

retro actions from last sprint:

- write better commit messages (james)
- update tickets more often (alex)
- everyone to join standup on time (especially alex lol)

alex: sorryyy i'll set an alarm

---

next standup: tomorrow 10am
sprint review: 19th dec 3pm
retro: 19th dec 4pm

priya: anything else?

james: christmas party 15th, dont forget
alex: oh yeah! are partners invited?
priya: i think sarah said yes, check slack

---

meeting done 3:45pm
