// We use Apollo Client cache rehydration to support loading data into components during static render. Read more:
// https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js

import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
// import { RetryLink } from '@apollo/client/link/retry';
import { ServerError } from '@apollo/client/link/utils';
import { isSsr } from 'config';
import logger from 'logger';
import { RetryLink } from './link/retry/RetryLink';

export const APOLLO_CACHE_PROP_NAME = '__APOLLO_CACHE__';

const maxAttempts = 10;
const backoffBase = 500;
const jitterBase = 10000;

export interface InitializeApolloProps {
  initialCache?: NormalizedCacheObject;
  accessToken: string;
  accessTokenHeader: string;
  accessTokenPrefix: string;
  ssrMode?: boolean;
  rateLimit?: boolean;
  uri: string;
}

function createApolloClient({
  accessToken,
  accessTokenHeader,
  accessTokenPrefix,
  uri,
  ssrMode
}: Pick<InitializeApolloProps, 'accessToken' | 'accessTokenHeader' | 'accessTokenPrefix' | 'ssrMode' | 'uri'>) {
  const httpLink = createHttpLink({
    uri
  });

  const withToken = setContext(() => {
    return { token: accessToken };
  });

  const withError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) =>
        logger.error({
          message: `[GraphQL error]: ${message}`,
          path,
          locations,
          extensions
        })
      );
    }

    if (networkError) {
      // When unauthenticated, redirect to sign in
      if ((networkError as ServerError).statusCode === 401 && !isSsr) {
        window.location.href = '/api/auth/signin?error=SessionRequired';
      }

      logger.error({
        message: `[Network error]: ${networkError}`
      });
    }
  });

  const authLink = new ApolloLink((operation, forward) => {
    const { token, headers } = operation.getContext();

    if (!headers?.[accessTokenHeader] && token) {
      operation.setContext(() => ({
        headers: {
          [accessTokenHeader]: `${accessTokenPrefix} ${token}`.trim()
        }
      }));
    }

    return forward(operation);
  });

  const retryLink = new RetryLink({
    delay: (attempt) => {
      const backoff = backoffBase * 2 ** attempt;
      const jitter = Math.random() * jitterBase;
      const delay = Math.round(backoff + jitter);
      logger.info(`Retrying throttled request (${delay}ms): ${attempt} / ${maxAttempts}`);
      return delay;
    },
    // delay: {
    //   initial: 1000,
    //   max: 10,
    //   jitter: true
    // },
    attempts: {
      retryIf: (error, _operation) => {
        if (Array.isArray(error)) {
          return error.some(({ message }) => message === 'Throttled');
        }
        return error.statusCode === 429;
      }
    }
  });

  const httpLinkWithoutTypeName = ApolloLink.from([httpLink]);

  return new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([retryLink, withToken, withError, authLink.concat(httpLinkWithoutTypeName)]),
    cache: new InMemoryCache(),
    ssrMode
  });
}

const staticClientCache: Record<string, ApolloClient<NormalizedCacheObject>> = {};

/**
 * The static client is used during static generation. Existing clients will be
 * reused to ensure the cache is complete.
 */
export function createStaticClient({
  accessToken,
  accessTokenHeader,
  accessTokenPrefix,
  uri
}: InitializeApolloProps): ApolloClient<NormalizedCacheObject> {
  const cacheKey = `${uri}:${accessToken}`;

  if (staticClientCache[cacheKey]) {
    return staticClientCache[cacheKey];
  }

  staticClientCache[cacheKey] = createApolloClient({
    accessToken,
    uri,
    accessTokenHeader,
    accessTokenPrefix,
    ssrMode: true
  });

  return staticClientCache[cacheKey];
}

/**
 * Creates a client and  restores the cache. Always returns a new client. Suitable
 * for use inside useMemo.
 */
export function createClient({
  initialCache,
  accessToken,
  accessTokenHeader,
  accessTokenPrefix,
  uri
}: InitializeApolloProps) {
  const client = createApolloClient({ accessToken, accessTokenHeader, accessTokenPrefix, uri });

  if (initialCache) {
    client.cache.restore(initialCache);
  }

  return client;
}
