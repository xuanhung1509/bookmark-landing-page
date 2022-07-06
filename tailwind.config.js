/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#5267DF',
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-blue-dark': '#2F354F',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
      },
      backgroundImage: {
        dots: "url('./img/bg-dots.svg')",
      },
    },
    fontFamily: {
      Rubik: ['Rubik, sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
};
