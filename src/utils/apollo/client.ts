// We use Apollo Client cache rehydration to support loading data into components during static render. Read more:
// https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js

import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { ServerError } from '@apollo/client/link/utils';
import { isSsr } from 'config';
import logger from 'logger';

export const APOLLO_CACHE_PROP_NAME = '__APOLLO_CACHE__';

export interface InitializeApolloProps {
  initialCache?: NormalizedCacheObject;
  getAccessToken?: () => string | Promise<string>;
  accessToken?: string;
  ssrMode?: boolean;
  rateLimit?: boolean;
  uri: string;
}

function createApolloClient({
  getAccessToken,
  accessToken,
  uri,
  ssrMode
}: Pick<InitializeApolloProps, 'getAccessToken' | 'accessToken' | 'ssrMode' | 'uri'>) {
  const httpLink = createHttpLink({
    uri
  });

  const withToken = setContext(async () => {
    let token;

    if (getAccessToken) {
      token = await getAccessToken();
    } else {
      // Anonymous authentication is the default
      token = accessToken;
    }

    return { token };
  });

  const withError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        logger.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
    }

    if (networkError) {
      // When unauthenticated, redirect to sign in
      if ((networkError as ServerError).statusCode === 401 && !isSsr) {
        window.location.href = '/api/auth/signin?error=SessionRequired';
      }

      logger.error(`[Network error]: ${networkError}`);
    }
  });

  const authLink = new ApolloLink((operation, forward) => {
    const { token, headers } = operation.getContext();

    if (!headers?.Authorization && token) {
      operation.setContext(() => ({
        headers: {
          Authorization: token ? `Bearer ${token}` : ''
        }
      }));
    }

    return forward(operation);
  });

  // TODO This doesn't seem to be needed now, review...
  //
  // const cleanTypeName = new ApolloLink((operation, forward) => {
  //   if (operation.variables) {
  //     const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
  //     operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  //   }
  //   return forward(operation).map((data) => {
  //     return data;
  //   });
  // });

  const retryLink = new RetryLink({
    attempts: {
      retryIf: (error, _operation) => {
        return error.statusCode === 429;
      }
    }
  });

  const httpLinkWithoutTypeName = ApolloLink.from([httpLink]);

  return new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([retryLink, withToken, withError, authLink.concat(httpLinkWithoutTypeName)]),
    cache: new InMemoryCache({
      // typePolicies: {
      //   Shopify_Collection: {
      //     fields: {
      //       products: relayStylePagination()
      //     }
      //   }
      // }
    }),
    ssrMode
  });
}

const staticClientCache = {};

/**
 * The static client is used during static generation. Existing clients will be
 * reused to ensure the cache is complete.
 */
export function createStaticClient({ accessToken, uri }: InitializeApolloProps): ApolloClient<NormalizedCacheObject> {
  const cacheKey = `${uri}:${accessToken}`;

  if (staticClientCache[cacheKey]) {
    return staticClientCache[cacheKey];
  }

  staticClientCache[cacheKey] = createApolloClient({ accessToken, uri, ssrMode: true });

  return staticClientCache[cacheKey];
}

/**
 * Creates a client and  restores the cache. Always returns a new client. Suitable
 * for use inside useMemo.
 */
export function createClient({ initialCache, accessToken, uri }: InitializeApolloProps) {
  const client = createApolloClient({ accessToken, uri });

  if (initialCache) {
    client.cache.restore(initialCache);
  }

  return client;
}
