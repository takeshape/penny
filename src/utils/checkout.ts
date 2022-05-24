import { CartItem } from 'services/cart/store';
import { ProductPriceOption } from 'types/product';
import type { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';
import { CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput } from 'types/takeshape';

const getRedirectUrl = (redirectUrl) => {
  redirectUrl = redirectUrl ?? window.location.pathname;

  if (redirectUrl.startsWith('http')) {
    return redirectUrl;
  }

  return new URL(redirectUrl, window.location.origin).href;
};

export const getCheckoutPayload = (items: CartItem[]): MutationShopifyStorefront_CartCreateArgs => {
  return {
    input: {
      lines: items?.map(
        (i): CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput => ({
          merchandiseId: (i.data.price as ProductPriceOption).merchandiseId,
          sellingPlanId: (i.data.price as ProductPriceOption).subscriptionId,
          quantity: i.quantity
        })
      )
    }
  };
};
