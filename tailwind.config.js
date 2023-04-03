/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#f6f6f6',
      black: '#131313',
      jade: '#52a675',
      red: '#ff595e',
      yellow: '#ffca3a',
      green: '#8ac926',
      blue: '#1982c4',
      violet: '#6a4c93',
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
