import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import { takeshapeApiUrl, takeshapeWebhookApiKey } from 'config';
import logger from 'logger';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { parseCookies, setCookie } from 'nookies';
import path from 'path';
import type { CreateCustomerAccessTokenResponse, GetCustomerTokenDataResponse } from 'queries';
import { CreateCustomerAccessTokenMutation, GetCustomerTokenDataQuery } from 'queries';
import type {
  MutationShopifyStorefront_CustomerAccessTokenCreateArgs, QueryShopifyStorefront_CustomerArgs
} from 'types/takeshape';
import { createStaticClient } from 'utils/apollo/client';

const apolloClient = createStaticClient({ uri: takeshapeApiUrl, accessToken: takeshapeWebhookApiKey });

const withAllAccess = createNextAuthAllAccess({
  issuer: 'https://deluxe-sample-project.vercel.app/',
  jwksPath: path.resolve(process.cwd(), './keys/jwks.json'),
  clients: [
    {
      id: 'takeshape',
      audience: 'https://api.takeshape.io/project/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/open-id',
      expiration: '6h',
      allowedClaims: ['email', 'sub', 'shopifyCustomerAccessToken'],
      renameClaims: {
        shopifyCustomerAccessToken: 'https://takeshape.io/customer_access_token'
      }
    }
  ]
});

// Must be shorter than the 60 day customer access token
const maxAgeRememberMe = 30 * 24 * 60 * 60; // 30 days
const maxAgeForgetMe = 60 * 60; // 1 hour

const nextAuthConfig = {
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/signin'
  },
  session: {
    maxAge: maxAgeRememberMe
  },
  providers: [
    CredentialsProvider({
      id: 'shopify',
      name: 'Shopify',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize({ email, password }) {
        const { data: accessTokenData } = await apolloClient.mutate<
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
          logger.error({
            email,
            errors: accessTokenData.accessTokenCreate.customerUserErrors
          });

          throw new Error('CredentialsSignin');
        }

        const { accessToken: shopifyCustomerAccessToken } = accessTokenData.accessTokenCreate.customerAccessToken;

        const { data: customerData } = await apolloClient.query<
          GetCustomerTokenDataResponse,
          QueryShopifyStorefront_CustomerArgs
        >({
          query: GetCustomerTokenDataQuery,
          variables: {
            customerAccessToken: shopifyCustomerAccessToken
          }
        });

        // If no error and we have user data, return it
        if (customerData?.customer) {
          return {
            ...customerData.customer,
            name: customerData.customer.displayName,
            shopifyCustomerAccessToken
          };
        }

        logger.error({
          email,
          errors: [{ message: 'No customer data found' }]
        });

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { firstName, lastName, shopifyCustomerAccessToken } = user;

        return {
          ...token,
          firstName,
          lastName,
          shopifyCustomerAccessToken
        };
      }

      return token;
    },
    async session({ session, token }) {
      const { firstName, lastName, shopifyCustomerAccessToken } = token;

      return {
        ...session,
        user: {
          ...session.user,
          firstName,
          lastName
        },
        shopifyCustomerAccessToken
      };
    }
  }
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const cookies = parseCookies({ req });
  const rememberMe = cookies['remember-me'] ?? req.body.rememberMe;
  const maxAge = rememberMe === 'false' ? maxAgeForgetMe : maxAgeRememberMe;

  if (req.body.rememberMe) {
    setCookie({ res }, 'remember-me', req.body.rememberMe, {
      maxAge,
      path: '/'
    });
  }

  nextAuthConfig.session = {
    ...nextAuthConfig.session,
    maxAge
  };

  const nextAuth = withAllAccess(NextAuth, nextAuthConfig);

  return await nextAuth(req, res);
}
