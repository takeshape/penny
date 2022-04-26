import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Styles from '../components/styles';
import theme from '../lib/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Styles />
      <Story />
    </ThemeProvider>
  ),
];
