import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import {
  sessionMaxAgeForgetMe,
  sessionMaxAgeRememberMe,
  shopifyStorefrontToken,
  shopifyStorefrontUrl,
  takeshapeAuthAudience,
  takeshapeAuthIssuer
} from 'config';
import {
  AuthCustomerAccessTokenCreateMutation,
  AuthCustomerAccessTokenCreateWithMultipassMutation,
  AuthCustomerQuery
} from 'features/Auth/queries.storefront';
import logger from 'logger';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { parseCookies, setCookie } from 'nookies';
import path from 'path';
import {
  AuthCustomerAccessTokenCreateMutationResponse,
  AuthCustomerAccessTokenCreateMutationVariables,
  AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
  AuthCustomerAccessTokenCreateWithMultipassMutationVariables,
  AuthCustomerQueryResponse,
  AuthCustomerQueryVariables
} from 'types/storefront';
import { withSentry } from 'utils/api/withSentry';
import { createStaticClient } from 'utils/apollo/client';
import { createMultipassToken } from 'utils/multipass';

const apolloClient = createStaticClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
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
        console.log('BEFORE', { email, password });
        const { data: accessTokenData } = await apolloClient.mutate<
          AuthCustomerAccessTokenCreateMutationResponse,
          AuthCustomerAccessTokenCreateMutationVariables
        >({
          mutation: AuthCustomerAccessTokenCreateMutation,
          variables: {
            input: {
              email,
              password
            }
          }
        });

        console.log('AFTER', { accessTokenData });

        if (accessTokenData.accessTokenCreate.customerUserErrors.length > 0) {
          logger.error({
            email,
            errors: accessTokenData.accessTokenCreate.customerUserErrors
          });

          throw new Error('CredentialsSignin');
        }

        const { accessToken: shopifyCustomerAccessToken } = accessTokenData.accessTokenCreate.customerAccessToken;

        if (shopifyCustomerAccessToken) {
          return {
            email,
            shopifyCustomerAccessToken
          };
        }

        logger.error({
          email,
          errors: [{ message: 'Unable to sign customer in' }]
        });

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        let { shopifyCustomerAccessToken } = user;

        if (!shopifyCustomerAccessToken) {
          // TODO See what Google gives us
          // const { first_name, last_name } = user;
          const { email } = user;
          const multipassToken = createMultipassToken({ email });
          ({ data: shopifyCustomerAccessToken } = await apolloClient.mutate<
            AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
            AuthCustomerAccessTokenCreateWithMultipassMutationVariables
          >({
            mutation: AuthCustomerAccessTokenCreateWithMultipassMutation,
            variables: {
              multipassToken
            }
          }));
        }

        // Fetch the customer data to enhance the token
        const { data: customerData } = await apolloClient.query<AuthCustomerQueryResponse, AuthCustomerQueryVariables>({
          query: AuthCustomerQuery,
          variables: {
            customerAccessToken: shopifyCustomerAccessToken
          }
        });

        return {
          ...customerData.customer,
          name: customerData.customer.displayName,
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
