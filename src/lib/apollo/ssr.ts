import { ApolloLink, NormalizedCacheObject } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';
import { InitializeApolloProps, createApolloClientLinks } from './client';

export function createNextSSRApolloClient(
  params: Pick<InitializeApolloProps, 'accessToken' | 'accessTokenHeader' | 'accessTokenPrefix' | 'uri'>
) {
  const { retryLink, withToken, withError, authLink, httpLink } = createApolloClientLinks({
    ...params,
    fetchOptions: { cache: 'no-store' }
  });

  const ssrHttpLink =
    typeof window === 'undefined'
      ? ApolloLink.from([
          // in a SSR environment, if you use multipart features like
          // @defer, you need to decide how to handle these.
          // This strips all interfaces with a `@defer` directive from your queries.
          new SSRMultipartLink({
            stripDefer: true
          }),
          httpLink
        ])
      : httpLink;

  return new NextSSRApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([retryLink, withToken, withError, authLink.concat(ssrHttpLink)]),
    cache: new NextSSRInMemoryCache(),
    ssrMode: true
  });
}
