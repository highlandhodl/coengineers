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
      description: 'Master Claude Code in 20 hands-on labs across 4 themes',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/highlandhodl/coengineers',
        },
        { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@coengineers' },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/john-gordon-39135287',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en-GB',
        },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Reasons',
          collapsed: true,
          items: [
            { label: 'The Lie I Believed', slug: 'reasons/reason-1' },
            { label: 'The Day I Wasted', slug: 'reasons/reason-2' },
            { label: 'Built With What It Teaches', slug: 'reasons/reason-3' },
            { label: "What You'll Learn", slug: 'reasons/reason-4' },
            { label: "Who It's For", slug: 'reasons/reason-5' },
            {
              label: "Why It's Different",
              slug: 'reasons/reason-6',
              badge: { text: '🚀', variant: 'note' },
            },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Prerequisites', slug: 'getting-started/prerequisites' },
            { label: 'Cheat Sheet', slug: 'getting-started/cheat-sheet' },
          ],
        },
        {
          label: 'Theme 1: Digital Workspace',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'theme-1/overview' },
            { label: 'Lab 1: First Conversation', slug: 'theme-1/lab-1-first-conversation' },
            { label: 'Lab 2: PARA Structure', slug: 'theme-1/lab-2-para-structure' },
            { label: 'Lab 3: Document Templates', slug: 'theme-1/lab-3-document-templates' },
            { label: 'Lab 4: Metadata Enrichment', slug: 'theme-1/lab-4-metadata-enrichment' },
            { label: 'Lab 5: Project Memory', slug: 'theme-1/lab-5-project-memory' },
          ],
        },
        {
          label: 'Theme 2: Content Processing',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'theme-2/overview' },
            { label: 'Lab 1: Meeting Notes', slug: 'theme-2/lab-1-meeting-notes' },
            { label: 'Lab 2: Audio Transcripts', slug: 'theme-2/lab-2-audio-transcripts' },
            { label: 'Lab 3: Email Refinement', slug: 'theme-2/lab-3-email-refinement' },
            { label: 'Lab 4: Research Synthesis', slug: 'theme-2/lab-4-research-synthesis' },
            { label: 'Lab 5: YouTube Extraction', slug: 'theme-2/lab-5-youtube-extraction' },
          ],
        },
        {
          label: 'Theme 3: Document Creation',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'theme-3/overview' },
            { label: 'Lab 1: DOCX Creation', slug: 'theme-3/lab-1-docx-creation' },
            { label: 'Lab 2: XLSX Creation', slug: 'theme-3/lab-2-xlsx-creation' },
            { label: 'Lab 3: PPTX Creation', slug: 'theme-3/lab-3-pptx-creation' },
            { label: 'Lab 4: Brandkit Creation', slug: 'theme-3/lab-4-brandkit-creation' },
            { label: 'Lab 5: SOW Creation', slug: 'theme-3/lab-5-sow-creation' },
          ],
        },
        {
          label: 'Theme 4: External APIs',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'theme-4/overview' },
            { label: 'Lab 1: Gamma Presentations', slug: 'theme-4/lab-1-gamma-presentations' },
            { label: 'Lab 2: Gemini Images', slug: 'theme-4/lab-2-gemini-images' },
            { label: 'Lab 3: ElevenLabs Audio', slug: 'theme-4/lab-3-elevenlabs-audio' },
            { label: 'Lab 4: PRD Creation', slug: 'theme-4/lab-4-prd-creation' },
            { label: 'Lab 5: Product Backlog', slug: 'theme-4/lab-5-product-backlog' },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            { label: 'Troubleshooting', slug: 'reference/troubleshooting' },
            { label: 'Glossary', slug: 'reference/glossary' },
            { label: 'FAQ', slug: 'reference/faq' },
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
