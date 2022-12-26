/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mjs}', './src/components/**/*.{js,ts,jsx,tsx,mjs}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
