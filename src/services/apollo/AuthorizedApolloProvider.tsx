import { ApolloProvider } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import type { PropsWithChildren } from 'react';
import { useApollo } from './apolloClient';

export type AuthorizedApolloProviderProps = PropsWithChildren<{ pageProps: any }>;

export const AuthorizedApolloProvider = ({ pageProps, children }: AuthorizedApolloProviderProps) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const apolloClient = useApollo(pageProps, isAuthenticated ? getAccessTokenSilently : undefined);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
