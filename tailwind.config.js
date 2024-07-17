/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
      backgroundImage: {
        'hero-light':
          "url('https://wahidhasyim02.github.io/public/img/bg_light.jpg')",
        'hero-dark':
          "url('https://wahidhasyim02.github.io/public/img/bg_dark.jpg')",
      },

      spacing: {
        1.5: '7px',
        15: '60px',
        17: '68px',
        17.5: '72px',
        18: '74px',
        '2%': '2%',
        '8%': '8%',
        22.5: '5.625rem',
        175: '43.75rem',
        '30%': '30%',
        '50%': '50%',
        '65%': '65%',
        '75%': '75%',
        '85%': '85%',
        '95%': '95%',
        '96%': '96%',
        '98%': '98%',
      },
      zIndex: {
        1000: '1000',
        1100: '1100',
        1200: '1200',
      },
      colors: {
        purdark: {
          50: '#F9F9FB',
          100: '#F4F3F6',
          200: '#E7E5EB',
          300: '#D3D1DB',
          400: '#A19CAF',
          500: '#6E6B80',
          600: '#514B63',
          700: '#3B3751',
          800: '#221F37',
          900: '#141127',
          950: '#060312',
        },
        woodsmoke: {
          50: '#f7f6f9',
          100: '#efedf1',
          200: '#d9d6e1',
          300: '#b8b3c6',
          400: '#908aa6',
          500: '#736b8c',
          600: '#5e5673',
          700: '#4d465e',
          800: '#423d4f',
          900: '#3a3644',
          950: '#0c0b0e',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector', // Ini untuk mengatur agar pergantian mode secara manual, bukan mengikuti sistem OS atau Browser
};
