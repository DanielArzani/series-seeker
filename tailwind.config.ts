import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: 'var(--bodyBg)',
        headerBg: 'var(--headerBg)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        bookmarkBtnBg: 'var(--bg-bookmarkBtnBg)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
