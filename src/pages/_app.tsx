import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import { seo, sessionRefetchInterval } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
    <ErrorBoundary>
      <SessionProvider
        session={pageProps.session}
        refetchInterval={sessionRefetchInterval}
        refetchOnWindowFocus={false}
      >
        <ApolloProvider pageProps={pageProps}>
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </ApolloProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}
