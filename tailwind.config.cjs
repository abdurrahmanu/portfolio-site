/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        baseBlack: '#121212;',
      },
      // fontSize: {
      //   'custom-sm': '30px',
      //   'custom-md': '38px',
      //   'custom-lg': '46px',
      //   'custom-xl': '56px',
      //   'custom-2xl': '66px',
      //   'custom-3xl': '76px',
      // },
      screens: {
        'screen-xs': { 'max': '180px' },
        'screen-mid-small': { 'max': '380px' },
        'screen-small': { 'max': '230px' },
        'screen-md': { 'max': '415px' },
        'screen-3xl': { 'min': '1225px' },
        'screen-big': {'min': '600px'}
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}



