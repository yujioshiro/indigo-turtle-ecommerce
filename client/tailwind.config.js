/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
    },
    colors: {
      'primary-main': '#4C0082',
      'primary-light': '#930CA',
      'primary-dark': '#38006B',
      'secondary-main': '#DFF20F',
      'secondary-light': '#E0FA47',
      'secondary-dark': '#BBBF05',
      'neutral-white': '#FFFFFF',
      'neutral-black': '#000000',
      'neutral-gray': '#D9D9D9',
      'link': '#3366CC',
      'warning': '#E7515F',
    },
    extend: {},
  },
  plugins: [],
};
