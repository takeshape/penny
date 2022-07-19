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
