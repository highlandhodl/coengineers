# Folder Structure Examples

This document contains reference examples of well-organised folder structures for different project types. Use these as inspiration when designing your own project organisation.

---

## Customer/Client Projects

Customer projects typically move through distinct phases. This structure reflects the natural workflow from initial discovery through to final delivery.

```
client-acme-website-redesign/
├── 01-discovery/
│   ├── client-brief.md
│   ├── research-notes.md
│   ├── competitor-analysis.md
│   ├── user-interviews/
│   │   ├── interview-001-sarah.md
│   │   ├── interview-002-james.md
│   │   └── synthesis.md
│   └── discovery-summary.pdf
├── 02-strategy/
│   ├── strategic-recommendations.md
│   ├── user-personas.md
│   ├── content-strategy.md
│   ├── sitemap.md
│   └── project-proposal.pdf
├── 03-delivery/
│   ├── wireframes/
│   │   ├── homepage-v1.png
│   │   ├── homepage-v2.png
│   │   └── about-page.png
│   ├── designs/
│   │   ├── design-system.md
│   │   ├── homepage-final.fig
│   │   └── component-library/
│   ├── content-drafts/
│   │   ├── homepage-copy.md
│   │   ├── about-copy.md
│   │   └── services-copy.md
│   └── development-notes.md
├── 04-outputs/
│   ├── final-designs/
│   ├── brand-guidelines.pdf
│   ├── content-final/
│   └── handover-documentation.md
└── README.md
```

**Key Principles:**

- **Numbered prefixes** (01-, 02-, 03-, 04-) enforce sequential order
- **Phase-based organisation** mirrors the actual project workflow
- **Subfolders** separate different artefact types within each phase
- **Descriptive names** make it immediately clear what each file contains
- **README** at the root explains the project structure and key contacts

---

## Learning Projects

Learning materials accumulate over time and need organisation by both status and topic. This structure helps you focus on active work while keeping completed and reference materials accessible.

```
coengineers-learning/
├── active-courses/
│   ├── coengineers-31-day-course/
│   │   ├── week-1-foundation/
│   │   │   ├── day-01-notes.md
│   │   │   ├── day-02-notes.md
│   │   │   └── workspace-setup/
│   │   ├── week-2-content-processing/
│   │   │   ├── day-08-notes.md
│   │   │   └── meeting-transcripts/
│   │   ├── projects/
│   │   │   ├── my-blog-automation/
│   │   │   └── client-proposal-template/
│   │   └── course-notes.md
│   └── advanced-prompt-engineering/
│       ├── module-1-basics/
│       ├── module-2-context/
│       └── exercises/
├── reference/
│   ├── claude-code-documentation/
│   │   ├── slash-commands.md
│   │   ├── best-practices.md
│   │   └── troubleshooting.md
│   ├── useful-prompts/
│   │   ├── content-creation.md
│   │   ├── code-review.md
│   │   └── research-synthesis.md
│   └── quick-reference-guides/
│       ├── markdown-syntax.md
│       ├── git-basics.md
│       └── astro-components.md
├── completed/
│   ├── 2025-01-15-python-fundamentals/
│   │   ├── final-project/
│   │   ├── notes/
│   │   └── certificate.pdf
│   ├── 2024-11-20-figma-masterclass/
│   │   ├── design-files/
│   │   └── notes.md
│   └── 2024-09-10-typescript-deep-dive/
│       ├── projects/
│       └── notes/
└── README.md
```

**Key Principles:**

- **Status-based organisation** (active, reference, completed) helps you focus on current work
- **Date stamps** on completed courses (YYYY-MM-DD) make it easy to find recent materials
- **Course subfolders** mirror the course structure (weeks, modules, etc.)
- **Projects folder** within active courses keeps practical work separate from notes
- **Reference section** stores materials you'll consult across multiple courses

---

## Reference Materials

Reference content is your personal library—templates, brand assets, processes, and archived materials. This structure prioritises quick access to frequently used items.

```
coengineers-reference/
├── templates/
│   ├── client-proposals/
│   │   ├── discovery-proposal-template.md
│   │   ├── strategy-proposal-template.md
│   │   └── retainer-proposal-template.md
│   ├── project-documents/
│   │   ├── project-brief-template.md
│   │   ├── creative-brief-template.md
│   │   └── handover-document-template.md
│   ├── content-templates/
│   │   ├── blog-post-structure.md
│   │   ├── case-study-template.md
│   │   └── newsletter-template.md
│   └── email-templates/
│       ├── client-onboarding.md
│       ├── project-kickoff.md
│       └── feedback-request.md
├── brand-assets/
│   ├── logos/
│   │   ├── coengineers-logo-primary.svg
│   │   ├── coengineers-logo-secondary.svg
│   │   └── coengineers-icon.svg
│   ├── colours/
│   │   ├── brand-palette.md
│   │   └── colour-swatches.png
│   ├── typography/
│   │   ├── font-guide.md
│   │   └── type-scale.md
│   ├── imagery/
│   │   ├── brand-photography/
│   │   └── illustration-style-guide.md
│   └── brand-guidelines.pdf
├── processes/
│   ├── client-onboarding-process.md
│   ├── content-review-workflow.md
│   ├── project-kickoff-checklist.md
│   ├── quality-assurance-checklist.md
│   └── handover-process.md
├── archive/
│   ├── 2024-brand-refresh/
│   │   ├── old-logos/
│   │   ├── previous-guidelines.pdf
│   │   └── rationale.md
│   ├── deprecated-templates/
│   │   ├── old-proposal-v1.md
│   │   └── old-proposal-v2.md
│   └── legacy-processes/
│       ├── old-workflow-2023.md
│       └── migration-notes.md
└── README.md
```

**Key Principles:**

- **Functional grouping** (templates, brand-assets, processes, archive) makes it easy to find what you need
- **Template categories** organise by use case (client-proposals, project-documents, etc.)
- **Brand assets** kept separate from project work ensures single source of truth
- **Processes folder** documents workflows and checklists for consistent delivery
- **Archive** preserves old versions without cluttering active folders

---

## Naming Conventions Summary

| Convention          | Use Case                     | Example                              |
| ------------------- | ---------------------------- | ------------------------------------ |
| `01-`, `02-`, `03-` | Sequential phases or steps   | `01-discovery`, `02-strategy`        |
| `YYYY-MM-DD-`       | Date-based materials         | `2025-01-15-python-fundamentals`     |
| `kebab-case`        | Multi-word folder/file names | `client-onboarding-process.md`       |
| `descriptive-names` | Self-documenting folders     | `user-interviews`, `final-designs`   |
| `version-suffixes`  | Iteration tracking           | `homepage-v1.png`, `homepage-v2.png` |

---

## Tips for Maintaining Your Structure

1. **Add READMEs:** Place a README.md in your root folder explaining the structure and any project-specific conventions.

2. **Review Regularly:** Set a monthly reminder to review your folder structure. Archive completed work and refine organisation as needed.

3. **Use Templates:** Once you've designed a structure that works, save it as a template for similar projects.

4. **Keep It Shallow:** Aim for 2-3 levels of hierarchy. Deeper structures create friction.

5. **Be Consistent:** Use the same naming conventions across similar projects to build muscle memory.

6. **Automate with Claude Code:** Use Claude Code to scaffold folder structures quickly and consistently.

---

**Remember:** The best folder structure is one you'll actually use. Start simple, iterate as needed, and don't let perfect be the enemy of good.
