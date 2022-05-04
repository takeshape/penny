import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { takeshapeApiUrl } from 'config';
import { useMemo } from 'react';

interface GetOrCreateApolloClientProps {
  initialCache: NormalizedCacheObject;
  getAccessToken: () => string | Promise<string>;
}

let _cachedClient: ApolloClient<NormalizedCacheObject>;

const getOrCreateApolloClient = ({ initialCache, getAccessToken }: GetOrCreateApolloClientProps) => {
  if (_cachedClient) {
    if (initialCache) {
      _cachedClient.cache.restore(initialCache);
    }

    return _cachedClient;
  }

  const httpLink = createHttpLink({
    uri: takeshapeApiUrl
  });

  const withToken = setContext(async () => {
    let token;

    if (getAccessToken) {
      token = await getAccessToken();
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

  _cachedClient = new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([withToken, authLink.concat(httpLinkWithoutTypeName)]),
    cache: new InMemoryCache()
  });

  _cachedClient.cache.restore(initialCache);

  return _cachedClient;
};

export default function useApollo({ initialCache, getAccessToken }: GetOrCreateApolloClientProps) {
  const client = useMemo(
    () => getOrCreateApolloClient({ initialCache, getAccessToken }),
    [initialCache, getAccessToken]
  );

  return client;
}
