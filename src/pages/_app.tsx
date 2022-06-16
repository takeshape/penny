import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import { seo } from 'config';
import ApolloProvider from 'features/Apollo/ApolloProvider';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'styles/globals.css';
import PageLoader from '../components/PageLoader';

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const router = useRouter();
  const [loadingRouteChange, setLoadingRouteChange] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoadingRouteChange(true);
    };

    const handleRouteChangeEnd = () => {
      setLoadingRouteChange(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeError', handleRouteChangeEnd);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeError', handleRouteChangeEnd);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
    };
  }, [router, setLoadingRouteChange]);

  return (
    <ErrorBoundary>
      <SessionProvider session={pageProps.session} refetchInterval={30 * 60} refetchOnWindowFocus={true}>
        <ApolloProvider pageProps={pageProps}>
          <DefaultSeo {...seo} />
          {loadingRouteChange ? <PageLoader /> : <Component {...pageProps} />}
        </ApolloProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}
