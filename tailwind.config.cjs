/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      cursor: {
        pointer:
          'url(https://cdn.jsdelivr.net/gh/xiabo2/vieu@master/S2.cur),pointer',
      },
      width:{
        '38':'10rem'
      }
    },
  },
  plugins: [],
}
