import { gql } from '@apollo/client';

export const ResetPasswordMutation = gql`
  mutation ResetPasswordMutation($id: ID!, $input: CustomerResetInput!) {
    customer: customerReset(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const ActivateAccountMutation = gql`
  mutation ActivateAccountMutation($id: ID!, $input: CustomerActivateInput!) {
    customer: customerActivate(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
