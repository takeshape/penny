import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import { takeshapeWebhookApiKey } from 'config';
import NextAuth from 'next-auth';
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
      expiration: '6h',
      allowedClaims: ['email', 'sub']
    }
  ]
});

export default withAllAccess(NextAuth, {
  session: {
    // Must be shorter than the 60 day customer access token
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  providers: [
    CredentialsProvider({
      id: 'shopify',
      name: 'Shopify',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'name@email.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize({ email, password }, req) {
        const { data: accessTokenData } = await takeshapeClient.mutate<
          CreateCustomerAccessTokenResponse,
          MutationShopifyStorefront_CustomerAccessTokenCreateArgs
        >({
          mutation: CreateCustomerAccessTokenMutation,
          variables: {
            input: {
              email,
              password
            }
          }
        });

        if (accessTokenData.accessTokenCreate.customerUserErrors.length > 0) {
          throw new Error(formatError(accessTokenData.accessTokenCreate.customerUserErrors));
        }

        const { accessToken: shopifyCustomerAccessToken } = accessTokenData.accessTokenCreate.customerAccessToken;

        const { data: customerData } = await takeshapeClient.query<
          GetCustomerResponse,
          QueryShopifyStorefront_CustomerArgs
        >({
          query: GetCustomerQuery,
          variables: {
            customerAccessToken: shopifyCustomerAccessToken
          }
        });

        // If no error and we have user data, return it
        if (customerData?.customer) {
          return {
            ...customerData.customer,
            shopifyCustomerAccessToken
          };
        }

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
