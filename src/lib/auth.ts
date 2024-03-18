import {
  googleClientId,
  googleClientSecret,
  sessionMaxAge,
  shopifyMultipassSecret,
  shopifyStorefrontToken,
  shopifyStorefrontUrl,
  shopifyUseMultipass
} from '@/config';
import { AuthCustomerQuery } from '@/features/Auth/queries.storefront';
import { createClient } from '@/lib/apollo/client';
import { withAllAccess } from '@/lib/auth-all-access';
import { getMultipassCustomerAccessToken } from '@/lib/auth/multipass-helper';
import ShopifyCredentialsProvider from '@/lib/auth/shopify-credentials-provider';
import logger from '@/lib/logger';
import { AuthCustomerQueryResponse, AuthCustomerQueryVariables } from '@/types/storefront';
import NextAuth, { NextAuthConfig } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

const shopifyClient = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

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
          logger.error('Signin missing email');
          throw new Error('MISSING_EMAIL');
        }

        let shopifyCustomerAccessToken = user.shopifyCustomerAccessToken;

        if (!shopifyCustomerAccessToken && shopifyUseMultipass && shopifyMultipassSecret) {
          shopifyCustomerAccessToken = await getMultipassCustomerAccessToken({ account, profile, email });
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
