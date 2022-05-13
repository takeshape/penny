import { ApolloProvider } from '@apollo/client';
import { getClientToken } from 'lib/next-auth-oidc/react';
import { useSession } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';
import { useApollo } from './apolloClient';

export type AuthorizedApolloProviderProps = PropsWithChildren<{ pageProps: any }>;

export const AuthorizedApolloProvider = ({ pageProps, children }: AuthorizedApolloProviderProps) => {
  const { status, data: session } = useSession();
  const clientToken = getClientToken({ clientId: 'takeshape', session });

  const getAccessToken = useCallback(() => {
    return clientToken?.accessToken;
  }, [clientToken?.accessToken]);

  const apolloClient = useApollo(pageProps, status === 'authenticated' ? getAccessToken : undefined);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
