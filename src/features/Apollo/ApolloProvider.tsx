'use client';

import { takeshapeAnonymousApiKey, takeshapeApiUrl } from '@/config';
import { createNextSSRApolloClient } from '@/lib/apollo/ssr';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';

function makeClient() {
  return createNextSSRApolloClient({
    uri: takeshapeApiUrl,
    accessToken: takeshapeAnonymousApiKey,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
}

export function ApolloProvider({ children }: PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
