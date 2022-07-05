import { CartCreateMutationResponse } from 'types/storefront';

export function getCheckoutUrl(response: CartCreateMutationResponse) {
  const checkoutUrl = response?.cartCreate?.cart?.checkoutUrl;

  if (!checkoutUrl) {
    return null;
  }

  return checkoutUrl;
}
