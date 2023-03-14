/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1A1A1A",
      grey: "#5B5B5B",
      grey_light: "#666666",
      green_light: "#B1E7C4",
      card_red: "#B13E53",
      card_green: "#38B764",
      card_blue: "#3B5DC9",
      card_orange: "#EF7D57",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
	      raleway:["Raleway"],
      },
    },
  },
  plugins: [],
};
