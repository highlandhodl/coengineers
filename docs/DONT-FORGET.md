# Don't Forget List

Last updated: 8 December 2025

## Before Dec 15 (Pre-launch Page Live)

### Critical Path
- [ ] **Replace placeholder logo** — Current SVG is basic; get proper brand asset
- [ ] **Wire up email signup** — Connect to Supabase + Resend
  - Create Supabase project
  - Create `subscribers` table
  - Get Resend API key
  - Create `/api/subscribe` endpoint
- [ ] **Countdown component** — Already built, just needs the homepage to use it properly
- [ ] **Teaser video** — Record a 60-second intro video for the hero section

### Nice to Have
- [ ] OG image template for social sharing
- [ ] Favicon in multiple sizes (currently just SVG)

---

## Before Dec 31 (Launch Ready)

### Slash Commands
- [ ] **Create all 28 slash commands** in `.claude/commands/`
  - Week 1: `/w1.d1` through `/w1.d7` (7 commands)
  - Week 2: `/w2.d8` through `/w2.d14` (7 commands)
  - Week 3: `/w3.d15` through `/w3.d21` (7 commands)
  - Week 4: `/w4.d22` through `/w4.d28` (7 commands)
- [ ] **Test each command** works with Claude Code

### Video Production
- [ ] Recording setup documented
- [ ] Thumbnail template created
- [ ] Caption/transcript workflow established
- [ ] All 31 videos recorded and edited
- [ ] YouTube playlist created

### Content Pages
- [ ] Replace "Coming Soon" with actual content for Days 1-7
- [ ] Add YouTube video IDs once uploaded
- [ ] Review all copy for British English

### GitHub Repo
- [ ] Create proper README.md for the public repo
- [ ] Add CONTRIBUTING.md
- [ ] Add LICENSE (MIT)
- [ ] Create release tag `v1.0.0`

---

## External Accounts Needed

| Service | Purpose | Status |
|---------|---------|--------|
| Anthropic | Claude Code API | [ ] |
| Supabase | Email subscribers | [ ] |
| Resend | Email sending | [ ] |
| Vercel | Hosting | [ ] |
| YouTube | Video hosting | [ ] |
| Circle | Community | [ ] |
| Whisper | Transcription (Days 9, 13) | [ ] |
| Gamma | Presentations (Day 15) | [ ] |
| Google AI Studio | Gemini (Day 16) | [ ] |
| ElevenLabs | Voice (Day 17) | [ ] |
| HeyGen | Video avatars (Day 20) | [ ] |
| Kling | Video generation (Day 21) | [ ] |

---

## Marketing (Can Do Later)

### Pre-launch Campaign (Dec 8-31)
- [ ] LinkedIn profile optimised
- [ ] Daily LinkedIn posts (templates in PRD)
- [ ] YouTube channel set up with branding

### Launch Day (Jan 1)
- [ ] Launch post ready
- [ ] Email to subscribers ready
- [ ] Community announcement ready

### Ongoing (January)
- [ ] Daily email workflow automated
- [ ] Weekly recap emails set up
- [ ] Community moderation plan

---

## Technical Debt

### Should Fix Soon
- [ ] Add proper error handling to EmailSignup component
- [ ] Add loading states to forms
- [ ] Test on mobile devices
- [ ] Test dark/light mode toggle

### Can Wait
- [ ] Add Tailwind back for utility classes (optional)
- [ ] Set up content sync from `content/` to `src/content/docs/` for Obsidian workflow
- [ ] Add analytics beyond Vercel's built-in

---

## Questions to Answer

1. **Daily vs batched videos?** — PRD says daily, but could batch weekly to reduce pressure
2. **Paid tier in Feb?** — What would it include?
3. **Guest contributors?** — Anyone else creating slash commands?

---

## Quick Wins (15 mins or less each)

- [ ] Add `robots.txt`
- [ ] Add `humans.txt` (fun touch)
- [ ] Set up GitHub branch protection
- [ ] Create LinkedIn company page
- [ ] Reserve YouTube handle

---

## File Locations Reference

| What | Where |
|------|-------|
| Brand colours | `src/styles/custom.css` |
| Sidebar config | `astro.config.mjs` |
| Custom components | `src/components/` |
| Course content | `src/content/docs/` |
| Slash commands | `.claude/commands/` |
| Constitution | `.specify/memory/constitution.md` |
| Dev guidelines | `CLAUDE.md` |
| This list | `DONT-FORGET.md` |
