import { MockedProvider } from '@apollo/client/testing';
import { Auth0Provider } from '@auth0/auth0-react';
import { audience, clientId, domain, isSsg, scope } from 'config';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from 'theme-ui';
import GlobalStyles from '../src/components/GlobalStyles';
import '../src/styles/globals.css';
import theme from '../src/theme';

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
  (Story) => (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      scope={scope}
      audience={audience}
      redirectUri={isSsg && window.location.origin}
      cacheLocation="localstorage"
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          <Story />
        </div>
      </ThemeProvider>
    </Auth0Provider>
  )
];
