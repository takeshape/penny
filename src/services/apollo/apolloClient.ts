// https://developers.wpengine.com/blog/apollo-client-cache-rehydration-in-next-js

import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isSsg, takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { useMemo } from 'react';

export const APOLLO_CACHE_PROP_NAME = '__APOLLO_CACHE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

interface InitializeApolloProps {
  initialCache?: NormalizedCacheObject;
  getAccessToken?: () => string | Promise<string>;
}

function createApolloClient({ getAccessToken }: Pick<InitializeApolloProps, 'getAccessToken'>) {
  const httpLink = createHttpLink({
    uri: takeshapeApiUrl
  });

  const withToken = setContext(async () => {
    let token;

    if (getAccessToken) {
      token = await getAccessToken();
    } else {
      // Anonymous authentication is the default
      token = takeshapeAnonymousApiKey;
    }

    return { token };
  });

  const authLink = new ApolloLink((operation, forward) => {
    const { token, headers } = operation.getContext();

    if (!headers?.Authorization) {
      operation.setContext(() => ({
        headers: {
          Authorization: token ? `Bearer ${token}` : ''
        }
      }));
    }

    return forward(operation);
  });

  const cleanTypeName = new ApolloLink((operation, forward) => {
    if (operation.variables) {
      const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
      operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
    }
    return forward(operation).map((data) => {
      return data;
    });
  });

  const httpLinkWithoutTypeName = ApolloLink.from([cleanTypeName, httpLink]);

  return new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([withToken, authLink.concat(httpLinkWithoutTypeName)]),
    cache: new InMemoryCache(),
    ssrMode: isSsg
  });
}

export function initializeApollo({ initialCache, getAccessToken }: InitializeApolloProps = {}) {
  const _apolloClient = apolloClient ?? createApolloClient({ getAccessToken });

  if (initialCache) {
    _apolloClient.cache.restore(initialCache);
  }

  // For SSG and SSR always create a new Apollo Client
  if (isSsg) {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_CACHE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any, getAccessToken?: InitializeApolloProps['getAccessToken']) {
  const initialCache = pageProps[APOLLO_CACHE_PROP_NAME];
  const client = useMemo(() => initializeApollo({ initialCache, getAccessToken }), [initialCache, getAccessToken]);
  return client;
}
