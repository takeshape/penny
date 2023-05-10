import { gql } from '@apollo/client';

export const AuthCustomerAccessTokenCreateMutation = gql`
  mutation AuthCustomerAccessTokenCreateMutation($input: CustomerAccessTokenCreateInput!) {
    accessTokenCreate: customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        expiresAt
        accessToken
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const AuthCustomerAccessTokenCreateWithMultipassMutation = gql`
  mutation AuthCustomerAccessTokenCreateWithMultipassMutation($multipassToken: String!) {
    accessTokenCreate: customerAccessTokenCreateWithMultipass(multipassToken: $multipassToken) {
      customerAccessToken {
        expiresAt
        accessToken
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const AuthCustomerQuery = gql`
  query AuthCustomerQuery($customerAccessToken: String!) {
    customer: customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      id
      phone
      email
      displayName
    }
  }
`;

export const AuthResetPasswordMutation = gql`
  mutation AuthResetPasswordMutation($id: ID!, $input: CustomerResetInput!) {
    customer: customerReset(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const AuthActivateAccountMutation = gql`
  mutation AuthActivateAccountMutation($id: ID!, $input: CustomerActivateInput!) {
    customer: customerActivate(id: $id, input: $input) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
