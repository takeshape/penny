import { shopifyMultipassSecret } from '@/config';
import { AuthCustomerAccessTokenCreateWithMultipassMutation } from '@/features/Auth/queries.storefront';
import { getStorefrontClient } from '@/lib/apollo/rsc';
import { MultipassError } from '@/lib/auth/errors';
import logger from '@/lib/logger';
import {
  AuthCustomerAccessTokenCreateWithMultipassMutationResponse,
  AuthCustomerAccessTokenCreateWithMultipassMutationVariables
} from '@/types/storefront';
import { Account, Profile } from 'next-auth';
import crypto from 'node:crypto';

const shopifyClient = getStorefrontClient();

const blockSize = 16;

function toUrlSafe(token: string) {
  return token.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function signData(signingKey: Buffer, data: Buffer) {
  return crypto.createHmac('sha256', signingKey).update(data).digest();
}

function encryptData(encryptionKey: Buffer, data: string) {
  const iv = crypto.randomBytes(blockSize);
  const cipher = crypto.createCipheriv('aes-128-cbc', encryptionKey, iv);
  return Buffer.concat([iv, cipher.update(data, 'utf8'), cipher.final()]);
}

export type MultipassCustomerData = {
  email: string;
} & Record<string, unknown>;

export function createMultipassToken(customerData: MultipassCustomerData) {
  const keyMaterial = crypto.createHash('sha256').update(shopifyMultipassSecret).digest();
  const encryptionKey = keyMaterial.slice(0, blockSize);
  const signingKey = keyMaterial.slice(blockSize, 32);

  customerData.created_at = new Date().toISOString();

  const encrypted = encryptData(encryptionKey, JSON.stringify(customerData));
  const token = Buffer.concat([encrypted, signData(signingKey, encrypted)]).toString('base64');

  return toUrlSafe(token);
}

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
      'Signin multipass failure'
    );

    throw new MultipassError(error?.code ?? 'UNKNOWN');
  }

  return customerAccessToken.accessToken;
}
