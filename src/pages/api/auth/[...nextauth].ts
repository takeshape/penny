import createNextAuthAllAccess from 'all-access';
import {
  googleClientId,
  googleClientSecret,
  sessionMaxAgeForgetMe,
  sessionMaxAgeRememberMe,
  shopifyMultipassSecret,
  shopifyStorefrontToken,
  shopifyStorefrontUrl,
  shopifyUseMultipass,
  takeshapeAuthAudience,
  takeshapeAuthIssuer
} from 'config';
import {
  AuthCustomerAccessTokenCreateMutation,
  AuthCustomerAccessTokenCreateWithMultipassMutation,
  AuthCustomerQuery
} from 'features/Auth/queries.storefront';
import logger from 'logger';
import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { Provider } from 'next-auth/providers';
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

// eslint-disable-next-line no-console
console.log('before withAllAccess');

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

// eslint-disable-next-line no-console
console.log('after withAllAccess');

const providers: Provider[] = [
  CredentialsProvider({
    id: 'shopify',
    name: 'Shopify',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials) {
      if (!credentials) {
        logger.error('Credentials signin failure');
        throw new Error('MISSING_CREDENTIALS');
      }

      const { email, password } = credentials;

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

      const { customerUserErrors, customerAccessToken } = accessTokenData?.accessTokenCreate ?? {};

      if (customerUserErrors?.length || !customerAccessToken?.accessToken) {
        const error = customerUserErrors?.[0];

        logger.error(
          {
            email,
            errors: customerUserErrors
          },
          'Credentials signin failure'
        );

        throw new Error(error?.code ?? 'UNKNOWN');
      }

      const { accessToken: shopifyCustomerAccessToken } = customerAccessToken;

      if (shopifyCustomerAccessToken) {
        return {
          // Temporary ID
          id: email,
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
];

if (shopifyUseMultipass) {
  providers.push(
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret
    })
  );
}

const nextAuthConfig: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/signin'
  },
  session: {
    maxAge: sessionMaxAgeRememberMe
  },
  providers,
  callbacks: {
    async jwt({ token, user, account, profile }): Promise<JWT> {
      // eslint-disable-next-line no-console
      console.log('jwt', token);

      if (user) {
        const { email } = user;

        if (!email) {
          logger.error('Signin missing email');
          throw new Error('MISSING_EMAIL');
        }

        let shopifyCustomerAccessToken = user.shopifyCustomerAccessToken;

        if (!shopifyCustomerAccessToken && shopifyUseMultipass && shopifyMultipassSecret) {
          let firstName;
          let lastName;

          if (account?.provider === 'google') {
            firstName = profile?.given_name;
            lastName = profile?.family_name;
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

          const { customerUserErrors, customerAccessToken } = accessTokenData?.accessTokenCreate ?? {};

          if (customerUserErrors?.length || !customerAccessToken?.accessToken) {
            const error = customerUserErrors?.[0];

            logger.error(
              {
                email,
                errors: customerUserErrors
              },
              'Multipass signin failure'
            );

            throw new Error(error?.code ?? 'UNKNOWN');
          }

          shopifyCustomerAccessToken = customerAccessToken.accessToken;
        }

        if (!shopifyCustomerAccessToken) {
          logger.error(
            {
              email
            },
            'Signin failure'
          );
          throw new Error('NO_ACCESS_TOKEN');
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

        const { firstName, lastName, displayName, id } = customerData.customer ?? {};

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
    async session({ session, user, token }) {
      // eslint-disable-next-line no-console
      console.log('session', session);
      const { sub, firstName, lastName, shopifyCustomerAccessToken } = token;

      return {
        ...session,
        user: {
          ...session.user,
          id: sub ?? session.user?.email ?? 'unknown',
          firstName,
          lastName,
          shopifyCustomerAccessToken
        },
        shopifyCustomerAccessToken
      };
    }
  }
};

const handler: NextApiHandler = async (req, res) => {
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
