/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./refer_hero.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6600",
          orangeLight: "#FF8A33",
          dark: "#1F2937",
          navy: "#37475C",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
