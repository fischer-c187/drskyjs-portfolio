/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hover: '#FFEF8D',
      },
      fontFamily: {
        sans: ['CooperLight', 'Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['League Spartan', 'Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
