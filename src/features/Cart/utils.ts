import { shopifyCheckoutRedirectUrl } from 'config';
import { CartItem } from 'features/Cart/types';
import { Session } from 'next-auth';
import Stach from 'stach';
import { ProductPriceOption } from 'types/product';
import { CartCreateMutationVariables, CartLineInput } from 'types/storefront';

export const getCartVariables = (items: CartItem[], session: Session | null, discountCode: string | null) => {
  const redirectOrigin = Stach(shopifyCheckoutRedirectUrl, { origin: window.location.origin });

  const createCartVariables: CartCreateMutationVariables = {
    input: {
      attributes: [
        {
          key: 'redirect_origin',
          value: redirectOrigin
        }
      ],
      lines: items?.map(
        (i): CartLineInput => ({
          merchandiseId: (i.data?.price as ProductPriceOption).merchandiseId,
          sellingPlanId: (i.data?.price as ProductPriceOption).subscriptionId,
          quantity: i.quantity,
          attributes: i.attributes
        })
      )
    }
  };

  if (discountCode) {
    createCartVariables.input.discountCodes = [discountCode];
  }

  if (session?.user?.shopifyCustomerAccessToken) {
    createCartVariables.input.buyerIdentity = {
      email: session.user.email,
      customerAccessToken: session.user.shopifyCustomerAccessToken
    };
  }

  return createCartVariables;
};
