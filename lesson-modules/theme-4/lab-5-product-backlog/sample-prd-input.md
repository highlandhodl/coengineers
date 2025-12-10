# Sample PRD: CoEngineers Progress Tracker

## Product Overview

**Product Name:** CoEngineers Progress Tracker
**Version:** 1.0
**Author:** John Gordon
**Date:** December 2025

## Problem Statement

Learners taking the CoEngineers course currently have no way to track their progress through the 20 labs. They rely on memory or manual note-taking to remember where they left off. This creates friction and reduces completion rates.

## Solution

A lightweight progress tracking system that integrates with the existing CoEngineers website. Learners can mark labs as complete, see their overall progress, and pick up where they left off.

## Target Users

1. **Active Learners** - Currently working through the course, need to track daily progress
2. **Returning Learners** - Took a break, need to find where they stopped
3. **Completers** - Finished the course, want to revisit specific labs

## Features

### F1: Lab Completion Tracking

Users can mark individual labs as complete. The system remembers their progress across sessions using local storage (no login required for MVP).

### F2: Progress Dashboard

A visual dashboard showing:

- Overall completion percentage
- Progress by theme (4 themes, 5 labs each)
- Current streak (consecutive days with lab completions)
- Estimated time remaining

### F3: Resume Feature

A "Continue where you left off" button that takes users directly to their next uncompleted lab.

### F4: Theme Certificates

When a user completes all 5 labs in a theme, they receive a downloadable certificate (PDF) celebrating their achievement.

### F5: Progress Export

Users can export their progress as JSON for backup or to share with employers/mentors.

## Technical Constraints

- Must work without user accounts (localStorage-based)
- Must integrate with existing Astro/Starlight site
- Should not significantly increase page load time
- Must work offline (PWA-like behaviour)

## Success Metrics

- 50% of active users engage with progress tracking
- 20% increase in course completion rate
- Positive feedback in user surveys

## Out of Scope (v1.0)

- User accounts and cloud sync
- Social features (sharing progress)
- Gamification beyond certificates
- Mobile app

## Open Questions

1. Should progress persist across devices? (Requires accounts)
2. Should we show time spent per lab?
3. Should certificates include learner name?

---

_This PRD is provided as a sample input for the Product Backlog Creation lab. Use it to practise extracting user stories, prioritising features, and creating a development-ready backlog._
