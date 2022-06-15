import { ApolloProvider as Provider } from '@apollo/client';
import { getClientToken } from '@takeshape/next-auth-all-access/react';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { useSession } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { useApollo } from 'utils/apollo/useApollo';

type ApolloProviderProps = PropsWithChildren<{ pageProps: any }>;

const ApolloProvider = ({ pageProps, children }: ApolloProviderProps) => {
  const { data: session } = useSession();
  const clientToken = getClientToken({ clientId: 'takeshape', session });

  const apolloClient = useApollo(pageProps, {
    uri: takeshapeApiUrl,
    accessToken: clientToken?.accessToken ?? takeshapeAnonymousApiKey
  });

  return <Provider client={apolloClient}>{children}</Provider>;
};

export default ApolloProvider;
