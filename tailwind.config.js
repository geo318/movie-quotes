/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-yellow': '#DDCCAA',
        'app-red': '#E31221',
        'app-gray': '#CED4DA',
        'app-black': '#212529',
        'app-bg': '#222030',
        'app-link': '#0D6EFD',
        'app-dark-gray': '#6C757D',
      },
      backgroundImage: {
        'app-gradient':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        'app-gradient-dark':
          'linear-gradient(180deg, #11101A 0%, #08080D 50.52%, rgba(0, 0, 0, 90%) 100%);',
      },
      fontFamily: {
        helvetica: 'HelveticaNeue',
      },
    },
  },
  plugins: [],
};
