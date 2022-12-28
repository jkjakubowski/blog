/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      current: "currentColor",
      purple: "#8075FF",
      dark_blue: "#101935",
      beige: "#F8F7FF",
      cream: "#FFEEDD",
      orange: "#FFD8BE",
    },
    fontFamily: {
      sans: ["Source Sans Pro"],
      title: ["Poppins"],
    },
  },

  plugins: [],
};
