/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        ten: '10px',
        four: '4px',
      },
      colors: {
        'app-yellow': '#DDCCAA',
        'app-red': '#E31221',
        'app-gray': '#CED4DA',
        'app-black-dark': '#11101A',
        'app-black': '#212529',
        'app-bg': '#222030',
        'app-link': '#0D6EFD',
        'app-dark-gray': '#6C757D',
        'app-gray-text': '#9C9A9A',
        'app-green': '#198754',
      },
      backgroundImage: {
        'app-gradient':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 200%)',
        'app-gradient-dark':
          'linear-gradient(180deg, #11101A 0%, #08080D 50.52%, rgba(0, 0, 0, 90%) 100%)',
        'app-gradient-dialog':
          'linear-gradient(252.94deg, rgba(239, 239, 239, 0.08) -1.81%, rgba(239, 239, 239, 0.00514528) 102.5%, rgba(1, 1, 1, 0.00260417) 102.51%, rgba(239, 239, 239, 0.05) 102.52%)',
        'app-slides-overlay':
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%)',
        'app-slide-one': "url('/assets/images/img-1.png')",
        'app-slide-two': "url('/assets/images/img-2.png')",
        'app-slide-three': "url('/assets/images/img-3.png')",
      },
      fontFamily: {
        helvetica: 'HelveticaNeue',
      },
      aspectRatio: {
        '9/5': '9 / 5',
        '6/5': '6 / 5',
        '3/2': '3 / 2',
        '5/2': '5 / 2',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
