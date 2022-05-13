import { MockedProvider } from '@apollo/client/testing';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { withJotai } from 'storybook-addon-jotai';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  apolloClient: {
    MockedProvider
  },
}

export const decorators = [
  withJotai,
  (Story) => (
    <SessionProvider session={{}} refetchInterval={0}>
        <div className="container">
          <Story />
        </div>
    </SessionProvider>
  )
];
