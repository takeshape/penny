import { gql } from '@apollo/client';

export const CustomerQuery = gql`
  query CustomerQuery($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      id
      phone
      email
      displayName
      acceptsMarketing
      defaultAddress {
        id
        firstName
        lastName
        address1
        address2
        city
        country
        countryCodeV2
        province
        provinceCode
        zip
      }
    }
  }
`;

export const CustomerUpdateMutation = gql`
  mutation CustomerUpdateMutation($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const CustomerAddressUpdateMutation = gql`
  mutation CustomerAddressUpdateMutation($customerAccessToken: String!, $address: MailingAddressInput!, $id: ID!) {
    customerAddressUpdate(customerAccessToken: $customerAccessToken, address: $address, id: $id) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
