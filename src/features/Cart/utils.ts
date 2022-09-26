import { CartItem } from 'features/Cart/types';
import { Session } from 'next-auth';
import { ProductPriceOption } from 'types/product';
import { CartCreateMutationVariables, CartLineInput } from 'types/storefront';

export const getCartVariables = (items: CartItem[], session: Session | null) => {
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

  if (session?.user) {
    createCartVariables.input.buyerIdentity = {
      email: session.user.email,
      customerAccessToken: session.shopifyCustomerAccessToken as string
    };
  }

  return createCartVariables;
};
