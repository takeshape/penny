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
      },
      colors: {
        primary: colors.gray,
        accent: colors.indigo,
        body: colors.gray,
        inverted: colors.white,
        background: colors.white,
        form: colors.gray
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};
