import GlobalStyles from 'components/GlobalStyles';
import { seo } from 'config';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import type { AppContext, AppInitialProps } from 'next/app';
import Router from 'next/router';
import AuthorizedApolloProvider from 'services/apollo/AuthorizedApolloProvider';
import 'styles/globals.css';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo ?? '/');
};

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <AuthorizedApolloProvider pageProps={pageProps}>
        <ThemeProvider theme={theme}>
          <DefaultSeo {...seo} />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthorizedApolloProvider>
    </SessionProvider>
  );
}
