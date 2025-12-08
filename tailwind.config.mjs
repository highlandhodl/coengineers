import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bitcoin Orange accent
        accent: {
          DEFAULT: '#F7931A',
          50: '#FEF3E2',
          100: '#FDE7C6',
          200: '#FBCF8D',
          300: '#F9B754',
          400: '#F7931A',
          500: '#E8850F',
          600: '#C77A15',
          700: '#9A5F10',
          800: '#6D440B',
          900: '#402806',
        },
        // Claude-inspired grays
        gray: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [starlightPlugin()],
};
