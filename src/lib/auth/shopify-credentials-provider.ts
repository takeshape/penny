import { GetCustomerStateQuery } from '@/features/Auth/queries';
import { AuthCustomerAccessTokenCreateMutation } from '@/features/Auth/queries.storefront';
import { getAnonymousTakeshapeClient, getStorefrontClient } from '@/lib/apollo/rsc';
import { EmailInUseError, MissingCredentialsError, NoAccountError } from '@/lib/auth/errors';
import logger from '@/logger';
import {
  AuthCustomerAccessTokenCreateMutationResponse,
  AuthCustomerAccessTokenCreateMutationVariables
} from '@/types/storefront';
import { CredentialsSignin } from '@auth/core/errors';
import CredentialsProvider from 'next-auth/providers/credentials';

export default function ShopifyCredentialsProvider() {
  const shopifyClient = getStorefrontClient();
  const takeshapeClient = getAnonymousTakeshapeClient();

  return CredentialsProvider({
    id: 'shopify',
    name: 'Shopify',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials) {
      if (!credentials.email || !credentials.password) {
        logger.error(
          {
            email: credentials.email,
            errors: [{ message: 'Missing credentials' }]
          },
          'Credentials signin failure'
        );
        throw new MissingCredentialsError('Missing credentials');
      }

      const { email, password } = credentials as Record<string, string>;

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
        logger.error(
          {
            email,
            errors: customerUserErrors
          },
          'Credentials signin failure'
        );

        const error = customerUserErrors?.[0];

        if (error?.code === 'UNIDENTIFIED_CUSTOMER') {
          const {
            data: { customer }
          } = await takeshapeClient.query({ query: GetCustomerStateQuery, variables: { email } });

          if (customer?.state === 'no-account') {
            throw new NoAccountError('No account found matching email');
          }

          throw new EmailInUseError('This account is already in use', { data: { email, customerId: customer.id } });
        }

        throw new CredentialsSignin('Email address or password are incorrect.');
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
          errors: [{ message: 'Could not get shopifyCustomerAccessToken' }]
        },
        'Credentials signin failure'
      );

      return null;
    }
  });
}
