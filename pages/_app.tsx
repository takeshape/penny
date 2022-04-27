import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from 'components/GlobalStyles';
import { AuthorizedApolloProvider } from 'lib/apollo';
import { CartProvider } from 'lib/cart';
import { audience, clientId, domain, scope, takeshapeApiUrl } from 'lib/config';
import { TakeshapeProvider } from 'lib/takeshape';
import theme from 'lib/theme';
import Router from 'next/router';
import { ThemeProvider } from 'theme-ui';

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo ?? '/');
};

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      scope={scope}
      audience={audience}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      <AuthorizedApolloProvider uri={takeshapeApiUrl}>
        <TakeshapeProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Component {...pageProps} />
            </ThemeProvider>
          </CartProvider>
        </TakeshapeProvider>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  );
}
