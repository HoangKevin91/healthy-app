/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-300': '#707070',
        'gray-400': '#777777',
        'black-200': '#414141',
        'black-500': '#2E2E2E',
        'yellow-400': '#FFCC21',
        'orange-300': '#FF963C',
        'orange-400': '#EA6C00'
      },
      textShadow: {
        'default': '0px 0px 6px #FC7400'
      },
      backgroundImage: {
        'foodMenu-pattern': "url('./assets/gradientBg.png')",
        'bodyRecord-pattern': "url('./assets/bodyRecordBg.png')",
        'exerciseRecord-pattern': "url('./assets/exerciseRecordBg.png')",
        'diaryRecord-pattern': "url('./assets/diaryRecordBg.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}