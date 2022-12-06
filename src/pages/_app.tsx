import * as Sentry from '@sentry/react';
import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import { commitSha, sentryDsn, seo, sessionRefetchInterval, vercelEnv } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';
import 'styles/globals.css';

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    environment: vercelEnv,
    release: commitSha
  });
}

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
