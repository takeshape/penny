import { CartItem } from 'features/Cart/types';
import { Session } from 'next-auth';
import { ProductPriceOption } from 'types/product';
import { CreateCartMutationVariables, CreateMyCheckoutSessionPropertiesLinesItemsPropertyInput } from 'types/takeshape';

export const getCartVariables = (items: CartItem[], session?: Session) => {
  const createCartVariables: CreateCartMutationVariables = {
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
      )
    }
  };

  if (session) {
    createCartVariables.input.buyerIdentity = {
      email: session.user.email,
      customerAccessToken: session.shopifyCustomerAccessToken as string
    };
  }

  return createCartVariables;
};
