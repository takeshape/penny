import { shopifyStorefrontToken, shopifyStorefrontUrl } from '@/config';
import { AuthCustomerAccessTokenCreateWithMultipassMutation } from '@/features/Auth/queries.storefront';
import logger from '@/logger';
import {
  AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
  AuthCustomerAccessTokenCreateWithMultipassMutationVariables
} from '@/types/storefront';
import { createClient } from '@/utils/apollo/client';
import { createMultipassToken } from '@/utils/multipass';
import { Account, Profile } from 'next-auth';

const shopifyClient = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export async function getMultipassCustomerAccessToken({
  account,
  profile,
  email
}: {
  account: Account | null;
  profile?: Profile;
  email: string;
}) {
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

  return customerAccessToken.accessToken;
}
