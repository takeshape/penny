import { takeshapeAnonymousApiKey, takeshapeApiUrl } from '@/config';
import { useApollo } from '@/utils/apollo/useApollo';
import { ApolloProvider as Provider } from '@apollo/client';
import { PropsWithChildren } from 'react';

type ApolloProviderProps = PropsWithChildren<{ pageProps?: Record<string, unknown> }>;

const ApolloProvider = ({ pageProps, children }: ApolloProviderProps) => {
  const apolloClient = useApollo(pageProps, {
    uri: takeshapeApiUrl,
    accessToken: takeshapeAnonymousApiKey,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });

  return <Provider client={apolloClient}>{children}</Provider>;
};

export default ApolloProvider;
