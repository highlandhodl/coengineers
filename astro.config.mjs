import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://coengineers.ai',
  integrations: [
    starlight({
      title: 'CoEngineers',
      description: '31 Days of Claude Code to Save Time',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/coengineers/coengineers-productivity-course' },
        { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@coengineers' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/coengineers' },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en-GB',
        },
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Prerequisites', slug: 'getting-started/prerequisites' },
          ],
        },
        {
          label: 'Week 1: Foundations',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'week-1/overview' },
            { label: 'Day 1: Claude Code Essentials', slug: 'week-1/day-1-claude-code-essentials' },
            { label: 'Day 2: Command Line Basics', slug: 'week-1/day-2-command-line-basics' },
            { label: 'Day 3: Markdown Mastery', slug: 'week-1/day-3-markdown-mastery' },
            { label: 'Day 4: Second Brain Setup', slug: 'week-1/day-4-second-brain-setup' },
            { label: 'Day 5: CLAUDE.md Builder', slug: 'week-1/day-5-claude-md-builder' },
            { label: 'Day 6: Note Templates', slug: 'week-1/day-6-note-templates' },
            { label: 'Day 7: Frontmatter Schema', slug: 'week-1/day-7-frontmatter-schema' },
          ],
        },
        {
          label: 'Week 2: Content Processing',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-2/overview' },
            { label: 'Day 8: Transcript Processor', slug: 'week-2/day-8-transcript-processor' },
            { label: 'Day 9: Voice Memo Structurer', slug: 'week-2/day-9-voice-memo-structurer' },
            { label: 'Day 10: YouTube Summariser', slug: 'week-2/day-10-youtube-summariser' },
            { label: 'Day 11: Meeting Notes Standardiser', slug: 'week-2/day-11-meeting-notes-standardiser' },
            { label: 'Day 12: PDF Extractor', slug: 'week-2/day-12-pdf-extractor' },
            { label: 'Day 13: Whisper Pipeline', slug: 'week-2/day-13-whisper-pipeline' },
            { label: 'Day 14: Web Archiver', slug: 'week-2/day-14-web-archiver' },
          ],
        },
        {
          label: 'Week 3: Visual & Audio',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-3/overview' },
            { label: 'Day 15: Gamma Deck Generator', slug: 'week-3/day-15-gamma-generator' },
            { label: 'Day 16: Gemini Image Prompter', slug: 'week-3/day-16-gemini-image-prompter' },
            { label: 'Day 17: ElevenLabs Preparer', slug: 'week-3/day-17-elevenlabs-preparer' },
            { label: 'Day 18: Podcast Builder', slug: 'week-3/day-18-podcast-builder' },
            { label: 'Day 19: Mermaid Diagrams', slug: 'week-3/day-19-mermaid-diagrams' },
            { label: 'Day 20: HeyGen Briefs', slug: 'week-3/day-20-heygen-briefs' },
            { label: 'Day 21: Kling Prompts', slug: 'week-3/day-21-kling-prompts' },
          ],
        },
        {
          label: 'Week 4: Business Assets',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-4/overview' },
            { label: 'Day 22: Blog Compiler', slug: 'week-4/day-22-blog-compiler' },
            { label: 'Day 23: Newsletter Assembler', slug: 'week-4/day-23-newsletter-assembler' },
            { label: 'Day 24: Social Threads', slug: 'week-4/day-24-social-threads' },
            { label: 'Day 25: Case Study Packager', slug: 'week-4/day-25-case-study-packager' },
            { label: 'Day 26: Proposal Generator', slug: 'week-4/day-26-proposal-generator' },
            { label: 'Day 27: Chatbot Exporter', slug: 'week-4/day-27-chatbot-exporter' },
            { label: 'Day 28: Competitor Report', slug: 'week-4/day-28-competitor-report' },
          ],
        },
        {
          label: 'Bonus: Frameworks',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'bonus/overview' },
            { label: 'Day 29: BMAD Method', slug: 'bonus/day-29-bmad-method' },
            { label: 'Day 30: PRP Framework', slug: 'bonus/day-30-prp-framework' },
            { label: 'Day 31: SpecKit Integration', slug: 'bonus/day-31-speckit-integration' },
          ],
        },
        {
          label: 'Community',
          slug: 'community',
        },
      ],
      components: {
        // Custom component overrides will go here
      },
    }),
  ],
});
