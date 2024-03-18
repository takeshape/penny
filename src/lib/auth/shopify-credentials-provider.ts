import { GetCustomerStateQuery } from '@/features/Auth/queries';
import { AuthCustomerAccessTokenCreateMutation } from '@/features/Auth/queries.storefront';
import { getAnonymousTakeshapeClient, getStorefrontClient } from '@/lib/apollo/rsc';
import logger from '@/lib/logger';
import {
  AuthCustomerAccessTokenCreateMutationResponse,
  AuthCustomerAccessTokenCreateMutationVariables
} from '@/types/storefront';
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
      if (!credentials) {
        logger.error('Credentials signin failure');
        throw new Error('MISSING_CREDENTIALS');
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
        const error = customerUserErrors?.[0];

        if (error?.code === 'UNIDENTIFIED_CUSTOMER') {
          const {
            data: { customer }
          } = await takeshapeClient.query({ query: GetCustomerStateQuery, variables: { email } });
          if (customer?.state !== 'no-account') {
            throw new Error(
              encodeURIComponent(`code=EmailInUse,email=${email},state=${customer.state},customerId=${customer.id}`)
            );
          }
        }

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
  });
}
