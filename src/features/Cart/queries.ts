import { gql } from '@apollo/client';

export const CreateCartMutation = gql`
  mutation CreateCartMutation($input: ShopifyStorefront_CartInput) {
    cart: createCart(input: $input) {
      cart {
        checkoutUrl
      }
    }
  }
`;
