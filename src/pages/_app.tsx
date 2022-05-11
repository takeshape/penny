import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from 'components/GlobalStyles';
import { audience, clientId, domain, isSsg, scope, seo } from 'config';
import { DefaultSeo } from 'next-seo';
import type { AppContext, AppInitialProps } from 'next/app';
import Router from 'next/router';
import AuthorizedApolloProvider from 'services/apollo/AuthorizedApolloProvider';
import TakeshapeProvider from 'services/takeshape/TakeshapeProvider';
import 'styles/globals.css';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo ?? '/');
};

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      scope={scope}
      audience={audience}
      redirectUri={!isSsg && window.location.origin}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      <AuthorizedApolloProvider pageProps={pageProps}>
        <TakeshapeProvider>
          <ThemeProvider theme={theme}>
            <DefaultSeo {...seo} />
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </TakeshapeProvider>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  );
}
