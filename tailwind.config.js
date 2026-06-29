/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#FF6600",
        "brand-peach": "#FCE3CC",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

