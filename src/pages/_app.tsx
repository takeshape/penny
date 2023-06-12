import * as Sentry from '@sentry/react';
import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import { commitSha, sentryDsn, seo, sessionRefetchInterval, vercelEnv } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { isCartCheckingOutAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';
import { useEffect } from 'react';
import 'styles/globals.css';

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    environment: vercelEnv,
    release: commitSha
  });
}

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);

  useEffect(() => {
    const checkBfcache = (e: any) => {
      // eslint-disable-next-line no-console
      console.log('This page is restored from bfcache?', e.persisted);
      if (e.persisted) {
        setIsCartCheckingOut(false);
      }
    };
    window.addEventListener('pageshow', checkBfcache);
  }, [setIsCartCheckingOut]);

  return (
    <ErrorBoundary>
      <ReCaptchaProvider>
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
      </ReCaptchaProvider>
    </ErrorBoundary>
  );
}
