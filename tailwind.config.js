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
      spacing: {
        "8%": "8%",
        22.5: "5.625rem",
        175: "43.75rem",
        "30%": "30%",
        "50%": "50%",
        "65%": "65%",
        "75%": "75%",
        "85%": "85%",
        "95%": "95%",
      },
      zIndex: {
        1000: "1000",
        1100: "1100",
        1200: "1200",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
