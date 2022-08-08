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
        // Primary brand color for links, buttons, etc.
        primary: colors.gray,
        // A contrast color for emphasizing UI
        accent: colors.indigo,
        // Body foreground color
        body: colors.gray,
        // Inverted body foreground color, for e.g., a dark theme
        inverted: colors.white,
        // Body background color
        background: colors.white,
        // Form text
        form: colors.gray
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};
