import { gql } from '@apollo/client';

export const GetCustomerQuery = gql`
  query GetCustomerQuery {
    customer: getMyCustomer {
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

export const UpdateCustomerMutation = gql`
  mutation UpdateCustomerMutation($customer: ShopifyStorefront_CustomerUpdateInput!) {
    customerUpdate: updateMyCustomer(customer: $customer) {
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

export const UpdateCustomerAddressMutation = gql`
  mutation UpdateCustomerAddressMutation($address: ShopifyStorefront_MailingAddressInput!, $id: ID!) {
    customerAddressUpdate: updateMyCustomerAddress(address: $address, id: $id) {
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

export const GetMyNewsletterSubscriptionsQuery = gql`
  query GetMyNewsletterSubscriptionsQuery {
    newsletters: getMyNewsletterSubscriptions {
      listId
      listName
      subscribed
    }
  }
`;

export const SubscribeMyEmailToNewsletterMutation = gql`
  mutation SubscribeMyEmailToNewsletterMutation($list_id: String!) {
    result: subscribeMyEmailToNewsletter(list_id: $list_id) {
      items {
        id
      }
    }
  }
`;

export const UnsubscribeMyEmailFromNewsletterMutation = gql`
  mutation UnsubscribeMyEmailFromNewsletterMutation($list_id: String!) {
    result: unsubscribeMyEmailFromNewsletter(list_id: $list_id) {
      result
    }
  }
`;

export const CreateMyProductReviewMutation = gql`
  mutation ($input: CreateMyProductReviewPropertiesPropertyInput!) {
    result: createMyProductReview(input: $input) {
      success
    }
  }
`;
