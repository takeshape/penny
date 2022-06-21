import { gql } from '@apollo/client';
import { ShopifyStorefront_CartCreatePayload } from 'types/takeshape';

export type CreateCartResponse = {
  cart: ShopifyStorefront_CartCreatePayload;
};

export const CreateCartMutation = gql`
  mutation CreateCartMutation($input: ShopifyStorefront_CartInput) {
    cart: createCart(input: $input) {
      cart {
        checkoutUrl
      }
    }
  }
`;
