import { ApolloProvider } from '@apollo/client';
import { useOidc } from 'lib/next-auth-oidc/react';
import type { PropsWithChildren } from 'react';
import { useApollo } from './apolloClient';

export type AuthorizedApolloProviderProps = PropsWithChildren<{ pageProps: any }>;

export const AuthorizedApolloProvider = ({ pageProps, children }: AuthorizedApolloProviderProps) => {
  const { isAuthenticated, getAccessToken } = useOidc({ clientId: 'takeshape' });
  const apolloClient = useApollo(pageProps, isAuthenticated ? getAccessToken : undefined);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
