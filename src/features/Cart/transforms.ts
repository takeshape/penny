import { CartCreateMutationResponse } from 'types/storefront';

export function getCheckoutUrl(response?: CartCreateMutationResponse | null) {
  const checkoutUrl = response?.cartCreate?.cart?.checkoutUrl;

  if (!checkoutUrl) {
    return null;
  }

  return checkoutUrl;
}
