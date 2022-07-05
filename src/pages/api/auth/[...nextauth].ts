import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import {
  sessionMaxAgeForgetMe,
  sessionMaxAgeRememberMe,
  takeshapeApiUrl,
  takeshapeAuthAudience,
  takeshapeAuthIssuer,
  takeshapeWebhookApiKey
} from 'config';
import { CustomerAccessTokenCreateMutation, CustomerQuery } from 'features/Auth/queries';
import logger from 'logger';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { parseCookies, setCookie } from 'nookies';
import path from 'path';
import {
  CustomerAccessTokenCreateMutationResponse,
  CustomerAccessTokenCreateMutationVariables,
  CustomerQueryResponse,
  CustomerQueryVariables
} from 'types/takeshape';
import { withSentry } from 'utils/api/withSentry';
import { createStaticClient } from 'utils/apollo/client';

const apolloClient = createStaticClient({
  uri: takeshapeApiUrl,
  accessToken: takeshapeWebhookApiKey,
  accessTokenHeader: 'Authorization',
  accessTokenPrefix: 'Bearer'
});

const withAllAccess = createNextAuthAllAccess({
  issuer: takeshapeAuthIssuer,
  jwksPath: path.resolve(process.cwd(), './keys/jwks.json'),
  clients: [
    {
      id: 'takeshape',
      audience: takeshapeAuthAudience,
      expiration: '6h',
      allowedClaims: ['name', 'email', 'sub', 'shopifyCustomerAccessToken'],
      renameClaims: {
        shopifyCustomerAccessToken: 'https://takeshape.io/customer_access_token',
        displayName: 'name'
      }
    }
  ]
});

const nextAuthConfig = {
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/signin'
  },
  session: {
    maxAge: sessionMaxAgeRememberMe
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
          CustomerAccessTokenCreateMutationResponse,
          CustomerAccessTokenCreateMutationVariables
        >({
          mutation: CustomerAccessTokenCreateMutation,
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

        const { data: customerData } = await apolloClient.query<CustomerQueryResponse, CustomerQueryVariables>({
          query: CustomerQuery,
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = parseCookies({ req });
  const rememberMe = cookies['remember-me'] ?? req.body.rememberMe;
  const maxAge = rememberMe === 'false' ? sessionMaxAgeForgetMe : sessionMaxAgeRememberMe;

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
};

export default withSentry(handler);
