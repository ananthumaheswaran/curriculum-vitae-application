/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "280px", // Adjust the width based on the Samsung Fold's viewport
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
