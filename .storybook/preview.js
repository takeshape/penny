import { ApolloProvider } from '@apollo/client';
import { rest } from 'msw';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { withJotai } from 'storybook-addon-jotai';
import '../src/styles/globals.css';
import { createClient } from '../src/utils/apollo/client';

// initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  },
  msw: {
    handlers: {
      auth: [
        rest.get('/api/auth/session', (req, res, ctx) => {
          return res(ctx.json({}));
        })
      ]
    }
  }
};

export const decorators = [
  withJotai,
  mswDecorator,
  (Story) => (
    <SessionProvider session={{ expires: '2050-10-05T14:48:00.000Z' }} refetchInterval={0}>
      <ApolloProvider client={createClient({})}>
        <Story />
      </ApolloProvider>
    </SessionProvider>
  )
];
