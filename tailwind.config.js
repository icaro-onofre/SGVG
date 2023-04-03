/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#f6f6f6',
      black: '#161616',
      jade: '#52a675',
      red: '#ff595e',
      yellow: '#ffca3a',
      green: '#8ac926',
      blue: '#1982c4',
      violet: '#6a4c93',
      // Variantes no tema escuro
      dark_white: '#ffffff',
      dark_black: '#161616',
      dark_jade: '#ff7377',
      dark_red: '#ffd154',
      dark_yellow: '#98D831',
      dark_green: '#61b182',
      dark_blue: '#1c92db',
      dark_violet: '#7655a4',
    },
    extend: {
      fontFamily: {
        body: ['"Open Sans"'],
        heading: ['Raleway'],
      },
    },
  },
  plugins: [],
};
