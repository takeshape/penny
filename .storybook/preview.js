import { MockedProvider } from '@apollo/client/testing';
import { Auth0Provider } from '@auth0/auth0-react';
import { audience, clientId, domain, isSsg, scope } from 'config';
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
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      scope={scope}
      audience={audience}
      redirectUri={isSsg && window.location.origin}
      cacheLocation="localstorage"
    >
        <div className="container">
          <Story />
        </div>
    </Auth0Provider>
  )
];
