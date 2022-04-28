import { ApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { takeshapeAnonymousApiKey } from 'config';
import { createApolloClient } from './client';

export const AuthorizedApolloProvider = ({ uri, children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const getAccessToken = isAuthenticated ? getAccessTokenSilently : () => takeshapeAnonymousApiKey;

  const client = createApolloClient(uri, getAccessToken);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
