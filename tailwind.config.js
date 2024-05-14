/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      backgroundImage: {
        hero: "url('/public/img/bg_light.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
