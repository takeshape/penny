import * as Sentry from '@sentry/react';
import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import { commitSha, sentryDsn, seo, sessionRefetchInterval, vercelEnv } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { SessionProvider } from 'next-auth/react';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';
import localFont from 'next/font/local';
import 'styles/globals.css';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter-roman.var.woff2',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/inter-italic.var.woff2',
      weight: '100 900',
      style: 'italic'
    }
  ],
  variable: '--font-inter'
});

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
      <ReCaptchaProvider>
        <SessionProvider
          session={pageProps.session}
          refetchInterval={sessionRefetchInterval}
          refetchOnWindowFocus={false}
        >
          <ApolloProvider pageProps={pageProps}>
            <DefaultSeo {...seo} />
            <main className={`${inter.variable} antialiased font-sans`}>
              <Component {...pageProps} />
            </main>
          </ApolloProvider>
        </SessionProvider>
      </ReCaptchaProvider>
    </ErrorBoundary>
  );
}
