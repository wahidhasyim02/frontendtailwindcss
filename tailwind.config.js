/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./login.html"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      backgroundImage: {
        "hero-light":
          "url('https://wahidhasyim02.github.io/tailwindcss-uji-coba-website/public/img/bg_light.jpg')",
        "hero-dark":
          "url('https://wahidhasyim02.github.io/tailwindcss-uji-coba-website/public/img/bg_dark.jpg')",
      },

      spacing: {
        15: "60px",
        17: "68px",
        17.5: "72px",
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
