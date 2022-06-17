import { gql } from '@apollo/client';
import { ShopifyStorefront_CartCreatePayload } from 'types/takeshape';

export type CreateMyCartResponse = {
  myCart: ShopifyStorefront_CartCreatePayload;
};

export const CreateMyCartMutation = gql`
  mutation CreateMyCart($input: ShopifyStorefront_CartInput) {
    myCart: createMyCart(input: $input) {
      cart {
        checkoutUrl
      }
    }
  }
`;
