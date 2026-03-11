/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1c1c1c',
            '--tw-prose-headings': '#111827',
            '--tw-prose-links': '#ee6d8a',
            '--tw-prose-bold': '#111827',
            '--tw-prose-quotes': '#374151',
            '--tw-prose-quote-borders': '#d1d5db',
            '--tw-prose-captions': '#6b7280',
            '--tw-prose-code': '#111827',
            '--tw-prose-hr': '#e5e7eb',
            maxWidth: 'none',
          },
        },
        lg: {
          css: {
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            p: { marginTop: '1.25em', marginBottom: '1.25em' },
            h2: {
              fontSize: '1.35rem',
              fontWeight: '700',
              marginTop: '2.5em',
              marginBottom: '0.75em',
              letterSpacing: '-0.01em',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '600',
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '3px',
              borderLeftColor: '#d1d5db',
              paddingLeft: '1.25em',
              color: '#374151',
            },
            table: { fontSize: '0.9rem' },
            'th, td': { padding: '0.5rem 0.75rem' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
