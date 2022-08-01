const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms'
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      }
    },
    colors: {
      primary: colors.gray,
      accent: colors.indigo,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};
