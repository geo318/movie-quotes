/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-yellow': '#DDCCAA',
        'app-red': '#E31221',
      },
      fontFamily: {
        helvetica: 'HelveticaNeue',
      },
    },
  },
  plugins: [],
};
