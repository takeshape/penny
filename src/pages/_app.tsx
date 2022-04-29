import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from 'components/GlobalStyles';
import { audience, clientId, domain, scope, seo, takeshapeApiUrl } from 'config';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import AuthorizedApolloProvider from 'services/apollo/AuthorizedApolloProvider';
import TakeshapeProvider from 'services/takeshape/TakeshapeProvider';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';
import '../styles/globals.css';

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
