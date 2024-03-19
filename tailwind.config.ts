import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-inter)', 'sans-serif']
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
        accent: colors.sky,
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
  plugins: [forms, aspectRatio, typography]
} satisfies Config;
