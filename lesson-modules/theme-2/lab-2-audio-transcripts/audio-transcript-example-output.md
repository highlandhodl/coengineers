# Audio Transcript Example Output

This file demonstrates what a properly processed audio transcript looks like with frontmatter metadata.

---

## Example Output: Voice Memo Transcript

```markdown
---
created: 2025-12-08
modified: 2025-12-08
type: voice-memo
status: active
project: Client-Onboarding
source: iPhone Voice Memo
duration: 3 minutes 45 seconds
speaker: John Gordon
tags: [voice-memo, ideas, client-onboarding, process]
---

# Voice Memo: Client Onboarding Improvements

**Recorded:** Sunday, 8th December 2025, 14:32 GMT
**Duration:** 3 minutes 45 seconds
**Context:** Ideas captured while walking after reading customer feedback

## Key Ideas

1. **Simplify the welcome email sequence**
   - Current: 5 emails over 2 weeks
   - Proposed: 3 emails over 1 week with clearer CTAs
   - Focus each email on ONE action

2. **Add video walkthrough option**
   - Some customers prefer watching over reading
   - Could repurpose existing tutorial content
   - Embed in email or link to customer portal

3. **Create quick-start checklist**
   - Tangible sense of progress
   - Gamification element (checkmarks feel good)
   - Could integrate with welcome email

## Action Items

- [ ] Review current email sequence analytics (open rates, click rates)
- [ ] Draft simplified 3-email sequence
- [ ] Identify existing videos that could be reused
- [ ] Design quick-start checklist for new customers

## Raw Thoughts (Unprocessed)

> "The welcome experience is too long. People get overwhelmed. What if we just... made it three emails instead of five? Each one has ONE thing to do. Not five options, just one. That's it."

> "Video... we should have video. Everyone watches YouTube but nobody reads documentation. We already have those tutorial videos, why aren't they in the onboarding?"

> "A checklist would be brilliant. People love checking things off. Makes them feel like they're making progress."

## Related Notes

- [[Client Feedback Summary - November 2025]]
- [[Onboarding Metrics Dashboard]]
- [[Email Sequence Documentation]]

## Next Steps

1. Share these ideas with Sarah at Monday standup
2. Pull current email metrics before proposing changes
3. Draft proposal document if ideas have merit

---

**Processed from voice memo by Claude Code**
```

---

## Why This Structure Works

### Frontmatter Metadata

For voice memos, include:

- **source**: Where the recording came from (iPhone, Android, Otter.ai)
- **duration**: How long the original recording was
- **speaker**: Who was speaking (useful for team voice memos)
- **type**: `voice-memo` for filtering

### Extracting Structure from Stream-of-Consciousness

Voice memos are typically unstructured thoughts. The processing should:

1. **Identify key ideas**: Main concepts mentioned
2. **Create action items**: Turn vague thoughts into concrete tasks
3. **Preserve raw thoughts**: Sometimes the original phrasing matters
4. **Add context**: When/where/why was this recorded?

### The Raw Thoughts Section

Including selected quotes from the original transcript:

- Preserves the authentic voice
- Captures nuance that summarisation might lose
- Useful for reference when implementing ideas

---

## Using This Example

When processing audio transcripts, ask Claude Code to:

1. Identify the main ideas or themes
2. Extract any actionable items mentioned
3. Preserve notable quotes that capture intent
4. Add links to related notes if mentioned
5. Suggest next steps based on content
6. Include appropriate frontmatter metadata

The goal is to transform rambling thoughts into something actionable and findable.
