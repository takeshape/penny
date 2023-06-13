import { ApolloProvider } from '@apollo/client';
import { rest } from 'msw';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { SessionProvider } from 'next-auth/react';
import 'styles/globals.css';
import { createClient } from '../src/utils/apollo/client';
import { withJotai } from './decorators/jotai/withJotai';

// initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});

const mockSession = {
  expires: '2050-10-05T14:48:00.000Z',
  user: { email: 'deluxe@fake.com', name: 'Deluxe Person' },
  shopifyCustomerAccessToken: `${Math.random() * 1000}`
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  msw: {
    handlers: {
      auth: [
        rest.get('/api/auth/session', (req, res, ctx) => {
          return res(ctx.json(mockSession));
        })
      ]
    }
  }
};

export const decorators = [
  withJotai,
  mswDecorator,
  (Story) => (
    <SessionProvider refetchInterval={0} session={mockSession}>
      <ApolloProvider client={createClient({})}>
        <Story />
      </ApolloProvider>
    </SessionProvider>
  )
];
