// We use Apollo Client cache rehydration to support loading data into components during static render. Read more:
// https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js

import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  HttpOptions,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ServerError } from '@apollo/client/link/utils';
import { isSsr } from '../../config';
import logger from '../../logger';
import { RetryLink } from './link/retry/RetryLink';

export const APOLLO_CACHE_PROP_NAME = '__APOLLO_CACHE__';

const maxAttempts = 10;
const backoffBase = 500;
const jitterBase = 10000;

export type InitializeApolloProps = {
  initialCache?: NormalizedCacheObject;
  accessToken: string;
  accessTokenHeader: string;
  accessTokenPrefix: string;
  rateLimit?: boolean;
  uri: string;
  fetchOptions?: HttpOptions['fetchOptions'];
};

export function createApolloClientLinks({
  accessToken,
  accessTokenHeader,
  accessTokenPrefix,
  uri,
  fetchOptions
}: Pick<InitializeApolloProps, 'accessToken' | 'accessTokenHeader' | 'accessTokenPrefix' | 'uri' | 'fetchOptions'>) {
  const httpLink = createHttpLink({
    uri,
    fetchOptions
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
        window.location.href = '/account/signin?error=AccessDenied';
      }

      logger.error({
        message: `[Network error]: ${networkError.message}`
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
    attempts: {
      retryIf: (error) => {
        if (Array.isArray(error)) {
          return error.some(({ message }) => message === 'Throttled');
        }
        return error.statusCode === 429;
      }
    }
  });

  return {
    retryLink,
    withToken,
    withError,
    authLink,
    httpLink
  };
}

export function createClient(
  params: Pick<InitializeApolloProps, 'accessToken' | 'accessTokenHeader' | 'accessTokenPrefix' | 'uri'>
) {
  const { retryLink, withToken, withError, authLink, httpLink } = createApolloClientLinks(params);

  return new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([retryLink, withToken, withError, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
    ssrMode: false
  });
}
