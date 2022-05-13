import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import { takeshapeWebhookApiKey } from 'config';
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import path from 'path';
import type { UpsertProfileResponse } from 'queries';
import { UpsertProfile } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';
import type { MutationUpsertProfileArgs } from 'types/takeshape';

const client = createStaticClient({ getAccessToken: () => takeshapeWebhookApiKey });

const withAllAccess = createNextAuthAllAccess({
  issuer: 'https://deluxe-sample-project.vercel.app/',
  jwksPath: path.resolve(process.cwd(), './keys/jwks.json'),
  clients: [
    {
      id: 'takeshape',
      audience: 'https://api.takeshape.io/project/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/open-id',
      expiration: '6h'
    }
  ]
});

export default withAllAccess(NextAuth, {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
  theme: {
    colorScheme: 'light'
  },
  events: {
    async signIn({ user }) {
      // Await to ensure the profile is created or updated in TakeShape
      await client.mutate<UpsertProfileResponse, MutationUpsertProfileArgs>({
        mutation: UpsertProfile,
        variables: {
          id: user.id,
          email: user.email
        }
      });
    }
  }
});
