import createNextAuthAllAccess from '@takeshape/next-auth-all-access';
import {
  sessionMaxAgeForgetMe,
  sessionMaxAgeRememberMe,
  shopifyMultipassSecret,
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
import GoogleProvider from 'next-auth/providers/google';
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
import { createClient } from 'utils/apollo/client';
import { createMultipassToken } from 'utils/multipass';

const shopifyClient = createClient({
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: 'shopify',
      name: 'Shopify',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize({ email, password }) {
        const { data: accessTokenData } = await shopifyClient.mutate<
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

        const {
          accessTokenCreate: { customerUserErrors, customerAccessToken }
        } = accessTokenData;

        if (customerUserErrors && customerUserErrors.length) {
          const error = customerUserErrors[0];

          logger.error(
            {
              email,
              errors: customerUserErrors
            },
            'Credentials signin failure'
          );

          throw new Error(error.code);
        }

        const { accessToken: shopifyCustomerAccessToken } = customerAccessToken;

        if (shopifyCustomerAccessToken) {
          return {
            email,
            shopifyCustomerAccessToken
          };
        }

        logger.error(
          {
            email,
            errors: [{ message: 'Unable to sign customer in' }]
          },
          'Credentials signin failure'
        );

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        const { email } = user;
        let { shopifyCustomerAccessToken } = user;

        if (!shopifyCustomerAccessToken && shopifyMultipassSecret) {
          let firstName;
          let lastName;

          if (account.provider === 'google') {
            firstName = profile.given_name;
            lastName = profile.family_name;
          }

          const multipassToken = createMultipassToken({
            email,
            first_name: firstName,
            last_name: lastName
          });

          const { data: accessTokenData } = await shopifyClient.mutate<
            AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
            AuthCustomerAccessTokenCreateWithMultipassMutationVariables
          >({
            mutation: AuthCustomerAccessTokenCreateWithMultipassMutation,
            variables: {
              multipassToken
            }
          });

          const {
            accessTokenCreate: { customerUserErrors, customerAccessToken }
          } = accessTokenData;

          if (customerUserErrors && customerUserErrors.length) {
            logger.error(
              {
                email,
                errors: customerUserErrors
              },
              'Multipass signin failure'
            );

            throw new Error(customerUserErrors[0].code);
          }

          shopifyCustomerAccessToken = customerAccessToken.accessToken;
        }

        // Fetch the customer data to enhance the token
        const { data: customerData } = await shopifyClient.query<AuthCustomerQueryResponse, AuthCustomerQueryVariables>(
          {
            query: AuthCustomerQuery,
            variables: {
              customerAccessToken: shopifyCustomerAccessToken
            }
          }
        );

        const { firstName, lastName, displayName, id } = customerData.customer;

        return {
          sub: id,
          email,
          firstName,
          lastName,
          name: displayName,
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
