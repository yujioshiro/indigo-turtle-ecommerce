/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['inter', 'sans-serif'],
    },
    colors: {
      'background-color': '#080A18',
      'navbar-color': '#696969',
      'primary-main': '#2F2D6A',
      'primary-light': '#930CAA',
      'primary-dark': '#38006B',
      'secondary-main': '#302E75',
      'secondary-light': '#35327E',
      'secondary-dark': '#312D6A',
      'tertiary-main': '#DFF20F',
      'tertiary-light': '#E0FA47',
      'tertiary-dark': '#BBBF05',
      'neutral-white': '#FFFFFF',
      'neutral-black': '#000000',
      'neutral-gray': '#808080',
      'link': '#328772',
      'warning': '#E7515F',
    },
    extend: {},
  },
  plugins: [],
};
