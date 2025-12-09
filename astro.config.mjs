import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://coengineers.ai',
  output: 'static',
  adapter: vercel(),
  integrations: [
    starlight({
      title: 'CoEngineers',
      description: '31 Days of Claude Code to Save Time',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
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
          label: 'Blog',
          collapsed: true,
          items: [
            { label: 'My AI Story', slug: 'blog/01-my-ai-story' },
            { label: 'Thoughts on GenAI', slug: 'blog/02-thoughts-on-genai' },
            { label: 'Why Claude Code', slug: 'blog/03-my-claude-code-story' },
            { label: 'What You\'ll Learn', slug: 'blog/04-what-you-will-learn' },
            { label: 'Who It\'s For', slug: 'blog/05-who-this-course-is-for' },
            { label: 'Why It\'s Different', slug: 'blog/06-why-this-course-is-different' },
            { label: 'What You\'ll Build', slug: 'blog/07-what-you-will-build' },
            { label: 'Launch Day', slug: 'blog/08-website-launch', badge: { text: '🚀', variant: 'note' } },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Prerequisites', slug: 'getting-started/prerequisites' },
          ],
        },
        {
          label: 'Week 1: Foundation',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'week-1/overview' },
            { label: 'Day 1: First Conversation', slug: 'week-1/day-1-first-conversation' },
            { label: 'Day 2: Your Digital Home', slug: 'week-1/day-2-your-digital-home' },
            { label: 'Day 3: Project Memory', slug: 'week-1/day-3-project-memory' },
            { label: 'Day 4: Template Factory', slug: 'week-1/day-4-template-factory' },
            { label: 'Day 5: The Daily Note', slug: 'week-1/day-5-the-daily-note' },
            { label: 'Day 6: Your First Slash Command', slug: 'week-1/day-6-your-first-slash-command' },
            { label: 'Day 7: Week 1 Review', slug: 'week-1/day-7-week-1-review' },
          ],
        },
        {
          label: 'Week 2: Content Processing',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-2/overview' },
            { label: 'Day 8: Meeting Tamer', slug: 'week-2/day-8-meeting-tamer' },
            { label: 'Day 9: Voice to Text', slug: 'week-2/day-9-voice-to-text' },
            { label: 'Day 10: YouTube Brain', slug: 'week-2/day-10-youtube-brain' },
            { label: 'Day 11: PDF Crusher', slug: 'week-2/day-11-pdf-crusher' },
            { label: 'Day 12: Web Archiver', slug: 'week-2/day-12-web-archiver' },
            { label: 'Day 13: Email Processor', slug: 'week-2/day-13-email-processor' },
            { label: 'Day 14: Week 2 Review', slug: 'week-2/day-14-week-2-review' },
          ],
        },
        {
          label: 'Week 3: Creative Outputs',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-3/overview' },
            { label: 'Day 15: Presentation Builder', slug: 'week-3/day-15-presentation-builder' },
            { label: 'Day 16: Image Prompter', slug: 'week-3/day-16-image-prompter' },
            { label: 'Day 17: Audio Script Writer', slug: 'week-3/day-17-audio-script-writer' },
            { label: 'Day 18: Diagram Generator', slug: 'week-3/day-18-diagram-generator' },
            { label: 'Day 19: Social Thread Maker', slug: 'week-3/day-19-social-thread-maker' },
            { label: 'Day 20: Video Brief Creator', slug: 'week-3/day-20-video-brief-creator' },
            { label: 'Day 21: Week 3 Review', slug: 'week-3/day-21-week-3-review' },
          ],
        },
        {
          label: 'Week 4: Business Assets',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'week-4/overview' },
            { label: 'Day 22: Blog Compiler', slug: 'week-4/day-22-blog-compiler' },
            { label: 'Day 23: Newsletter Assembler', slug: 'week-4/day-23-newsletter-assembler' },
            { label: 'Day 24: Case Study Packager', slug: 'week-4/day-24-case-study-packager' },
            { label: 'Day 25: Proposal Generator', slug: 'week-4/day-25-proposal-generator' },
            { label: 'Day 26: Competitive Intel', slug: 'week-4/day-26-competitive-intel' },
            { label: 'Day 27: Chatbot Trainer', slug: 'week-4/day-27-chatbot-trainer' },
            { label: 'Day 28: Week 4 Review', slug: 'week-4/day-28-week-4-review' },
          ],
        },
        {
          label: 'Bonus: Capstone',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'bonus/overview' },
            { label: 'Day 29: BMAD Method', slug: 'bonus/day-29-bmad-method' },
            { label: 'Day 30: PRP Framework', slug: 'bonus/day-30-prp-framework' },
            { label: 'Day 31: Ship It!', slug: 'bonus/day-31-ship-it' },
          ],
        },
        {
          label: 'Community',
          slug: 'community',
        },
        {
          label: 'Privacy Policy',
          slug: 'privacy',
        },
      ],
      components: {
        // Custom component overrides will go here
      },
    }),
  ],
});
