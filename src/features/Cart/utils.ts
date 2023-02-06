import { CartItem } from 'features/Cart/types';
import { Session } from 'next-auth';
import { ProductPriceOption } from 'types/product';
import { CartCreateMutationVariables, CartLineInput } from 'types/storefront';

export const getCartVariables = (items: CartItem[], session: Session | null, discountCode: string | null) => {
  const createCartVariables: CartCreateMutationVariables = {
    input: {
      attributes: [
        {
          key: 'redirect_origin',
          value: window.location.origin
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
