import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import { takeshapeWebhookApiKey } from 'config';
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';
import path from 'path';
import type { CreateCustomerAccessTokenResponse, GetCustomerResponse, UpsertProfileResponse } from 'queries';
import { CreateCustomerAccessTokenMutation, GetCustomerQuery, UpsertProfile } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';
import type {
  MutationShopifyStorefront_CustomerAccessTokenCreateArgs,
  MutationUpsertProfileArgs,
  QueryShopifyStorefront_CustomerArgs
} from 'types/takeshape';
import { formatError } from 'utils/errors';

const takeshapeClient = createStaticClient({ getAccessToken: () => takeshapeWebhookApiKey });

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
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Shopify',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const { data: accessTokenData } = await takeshapeClient.mutate<
          CreateCustomerAccessTokenResponse,
          MutationShopifyStorefront_CustomerAccessTokenCreateArgs
        >({
          mutation: CreateCustomerAccessTokenMutation,
          variables: {
            input: credentials
          }
        });

        if (accessTokenData.accessTokenCreate.customerUserErrors) {
          throw new Error(formatError(accessTokenData.accessTokenCreate.customerUserErrors));
        }

        const { data: customerData } = await takeshapeClient.query<
          GetCustomerResponse,
          QueryShopifyStorefront_CustomerArgs
        >({
          query: GetCustomerQuery,
          variables: {
            customerAccessToken: accessTokenData.accessTokenCreate.customerAccessToken.accessToken
          }
        });

        // If no error and we have user data, return it
        if (customerData?.customer) {
          return customerData.customer;
        }

        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  theme: {
    colorScheme: 'light'
  },
  events: {
    async signIn({ user }) {
      // Await to ensure the profile is created or updated in TakeShape
      await takeshapeClient.mutate<UpsertProfileResponse, MutationUpsertProfileArgs>({
        mutation: UpsertProfile,
        variables: {
          id: user.id,
          email: user.email
        }
      });
    }
  }
});
