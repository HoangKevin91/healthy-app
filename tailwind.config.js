/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0px 0px 6px #FC7400'
      },
      backgroundImage: {
        'foodMenu-pattern': "url('./assets/gradientBg.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}