import { AuthCustomerAccessTokenCreateWithMultipassMutation } from '@/features/Auth/queries.storefront';
import { getStorefrontClient } from '@/lib/apollo/rsc';
import logger from '@/lib/logger';
import { createMultipassToken } from '@/lib/multipass';
import {
  AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
  AuthCustomerAccessTokenCreateWithMultipassMutationVariables
} from '@/types/storefront';
import { Account, Profile } from 'next-auth';

const shopifyClient = getStorefrontClient();

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
