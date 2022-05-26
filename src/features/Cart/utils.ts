import type { CartItem } from 'features/Cart/types';
import type { Session } from 'next-auth';
import { ProductPriceOption } from 'types/product';
import type { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';
import { CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput } from 'types/takeshape';

export const getCheckoutPayload = (items: CartItem[], session: Session): MutationShopifyStorefront_CartCreateArgs => {
  return {
    input: {
      attributes: [
        {
          key: 'redirect_origin',
          value: window.location.origin
        }
      ],
      lines: items?.map(
        (i): CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput => ({
          merchandiseId: (i.data.price as ProductPriceOption).merchandiseId,
          sellingPlanId: (i.data.price as ProductPriceOption).subscriptionId,
          quantity: i.quantity
        })
      ),
      buyerIdentity: {
        email: session.user.email,
        customerAccessToken: session.shopifyCustomerAccessToken as string
      }
    }
  };
};
