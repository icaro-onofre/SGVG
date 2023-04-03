/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#1A1A1A',
      grey: '#5B5B5B',
      grey_light: '#666666',
      green_light: '#B1E7C4',
      card_red: '#B13E53',
      card_green: '#38B764',
      card_blue: '#3B5DC9',
      card_orange: '#EF7D57',
      // Variantes no tema escuro
      dark_white: '#FFFFFF',
      dark_black: '#1A1A1A',
      dark_grey: '#5B5B5B',
      dark_grey_light: '#666666',
      dark_green_light: '#B1E7C4',
      dark_card_red: '#B13E53',
      dark_card_green: '#38B764',
      dark_card_blue: '#3B5DC9',
      dark_card_orange: '#EF7D57',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
};
