import { seo, sessionRefetchInterval } from '@/config';
import ApolloProvider from '@/features/Apollo/ApolloProvider';
import { inter } from '@/styles/fonts';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  return (
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
  );
}
