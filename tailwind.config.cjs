/** @type {import('tailwindcss').Config}*/
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#ed5939',
        secondary: '#f2994a',
        grey: '#aaaaaa'
      },
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
