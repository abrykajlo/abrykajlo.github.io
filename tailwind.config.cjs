/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'yellow': '#fbc02d',
      'gray': '#303030',
      'dark-gray': '#1b1b1b',
      'light-gray': '#6d6d6d',
      'white': '#ffffff',
    },
    fontFamily: {
      'roboto': ['Roboto'],
    },
    extend: {},
  },
  plugins: [],
}
