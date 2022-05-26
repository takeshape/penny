import GlobalStyles from 'components/GlobalStyles';
import { seo } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import type { AppContext, AppInitialProps } from 'next/app';
import 'styles/globals.css';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={30 * 60} refetchOnWindowFocus={true}>
      <ApolloProvider pageProps={pageProps}>
        <ThemeProvider theme={theme}>
          <DefaultSeo {...seo} />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
