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
        primary: colors.indigo,
        accent: colors.pink,
        mainText: {
          100: '#700',
          200: '#800',
          300: '#900',
          400: '#a00',
          500: '#b00',
          600: '#c00',
          700: '#d00',
          800: '#e00',
          900: '#f00'
        },
        invertedText: colors.green['200'],
        background: colors.indigo['100'],
        muted: colors.pink['200']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};
