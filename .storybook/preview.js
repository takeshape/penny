import { ApolloProvider } from '@apollo/client';
import { rest } from 'msw';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { SessionProvider } from 'next-auth/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { withJotai } from 'storybook-addon-jotai';
import '../src/styles/globals.css';
import { createClient } from '../src/utils/apollo/client';

// initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});

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
          return res(ctx.json({ expires: '2050-10-05T14:48:00.000Z' }));
        }),
        rest.get('/api/auth/csrf', (req, res, ctx) => {
          return res(ctx.json({ csrfToken: '1e42488ff4d1a6e584d71f06f457ebf3dffc1a873d9aed62c6914a6665dfd6b4' }));
        }),
        rest.post('/api/auth/signout', (req, res, ctx) => {
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
    <SessionProvider refetchInterval={0}>
      <ApolloProvider client={createClient({})}>
        <Story />
      </ApolloProvider>
    </SessionProvider>
  )
];
