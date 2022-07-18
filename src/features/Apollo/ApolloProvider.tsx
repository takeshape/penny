import { ApolloProvider as Provider } from '@apollo/client';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { PropsWithChildren } from 'react';
import { useApollo } from 'utils/apollo/useApollo';

type ApolloProviderProps = PropsWithChildren<{ pageProps: any }>;

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
