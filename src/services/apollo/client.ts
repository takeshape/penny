import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export function createApolloClient(uri, getAuthToken) {
  const httpLink = createHttpLink({
    uri
  });

  const withToken = setContext(async () => {
    let token;

    if (getAuthToken) {
      token = await getAuthToken();
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

  const client = new ApolloClient({
    link: ApolloLink.from([withToken, authLink.concat(httpLinkWithoutTypeName)]),
    cache: new InMemoryCache()
  });

  return client;
}
