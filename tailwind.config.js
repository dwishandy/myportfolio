/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit'],
        vietnam: ['Be Vietnam Pro']
      },
      colors: {
        primary: '#f1601d',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}