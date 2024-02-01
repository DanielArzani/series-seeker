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
        darkBlue: 'var(--dark-blue)',
        semiDarkBlue: 'var(--semi-dark-blue)',
        pureWhite: 'var(--pure-white)',
        greyishBlue: 'var(--greyish-blue)',
        logoRed: 'var(--logo-red)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
