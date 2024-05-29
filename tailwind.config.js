/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      backgroundImage: {
        hero: "url('/public/img/bg_light.jpg')",
      },
      width: {
        22.5: "5.625rem",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
