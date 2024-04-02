import { withAllAccess } from '@/auth-all-access';
import {
  googleClientId,
  googleClientSecret,
  sessionMaxAge,
  shopifyMultipassSecret,
  shopifyUseMultipass
} from '@/config';
import { AuthCustomerQuery } from '@/features/Auth/queries.storefront';
import { getStorefrontClient } from '@/lib/apollo/rsc';
import { NoAccessTokenError, NoEmailError } from '@/lib/auth/errors';
import { getMultipassCustomerAccessToken } from '@/lib/auth/multipass';
import ShopifyCredentialsProvider from '@/lib/auth/shopify-credentials-provider';
import logger from '@/logger';
import { AuthCustomerQueryResponse, AuthCustomerQueryVariables } from '@/types/storefront';
import NextAuth, { NextAuthConfig } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

const shopifyClient = getStorefrontClient();

const providers: NextAuthConfig['providers'] = [ShopifyCredentialsProvider()];

if (shopifyUseMultipass) {
  providers.push(
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret
    })
  );
}

const nextAuthConfig: NextAuthConfig = withAllAccess({
  pages: {
    signIn: '/account/signin',
    signOut: '/account/signout',
    error: '/account/signin'
  },
  session: {
    maxAge: sessionMaxAge
  },
  providers,
  callbacks: {
    async jwt({ token, user, account, profile }): Promise<JWT> {
      if (user) {
        const { email } = user;

        if (!email) {
          logger.error(
            {
              errors: [{ message: 'Missing email' }]
            },
            'Signin callback failure'
          );
          throw new NoEmailError('No email address');
        }

        let shopifyCustomerAccessToken = user.shopifyCustomerAccessToken;

        if (!shopifyCustomerAccessToken && shopifyUseMultipass && shopifyMultipassSecret) {
          shopifyCustomerAccessToken = await getMultipassCustomerAccessToken({ account, profile, email });
        }

        if (!shopifyCustomerAccessToken) {
          logger.error(
            {
              email,
              errors: [{ message: 'No access token' }]
            },
            'Signin callback failure'
          );
          throw new NoAccessTokenError('No access token');
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
    session({ session, token }) {
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
});

export const {
  handlers: { GET, POST },
  auth
} = NextAuth(nextAuthConfig);
