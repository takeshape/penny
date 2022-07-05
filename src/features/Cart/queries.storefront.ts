import { gql } from '@apollo/client';

export const CartCreateMutation = gql`
  mutation CartCreateMutation($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        checkoutUrl
      }
    }
  }
`;
