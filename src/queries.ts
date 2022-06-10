import { gql } from '@apollo/client';
import {
  CreateCustomerPayload,
  Klaviyo_200Ok,
  Klaviyo_AddMembersResponse,
  ProfileNewsletterStatus,
  ShopifyStorefront_CartCreatePayload,
  ShopifyStorefront_Customer,
  ShopifyStorefront_CustomerAccessTokenCreatePayload,
  ShopifyStorefront_CustomerAddressUpdatePayload,
  ShopifyStorefront_CustomerRecoverPayload,
  ShopifyStorefront_CustomerUpdatePayload,
  Shopify_Customer,
  Voucherify_LoyaltyCard
} from 'types/takeshape';

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

export interface GetMyAdminCustomerOrdersResponse {
  customer: Shopify_Customer;
}

export const GetMyAdminCustomerOrdersQuery = gql`
  query GetMyAdminCustomerOrdersQuery {
    customer: getMyAdminCustomer {
      orders(first: 10) {
        edges {
          node {
            id
            createdAt
            displayFulfillmentStatus
            totalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            fulfillments {
              id
              displayStatus
              deliveredAt
              estimatedDeliveryAt
              inTransitAt
              updatedAt
              trackingInfo {
                company
                number
              }
              fulfillmentLineItems(first: 10) {
                edges {
                  node {
                    lineItem {
                      id
                      image {
                        url
                        height
                        width
                      }
                      name
                      quantity
                      product {
                        id
                      }
                      originalTotalSet {
                        shopMoney {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface GetMyLoyaltyCardResponse {
  loyaltyCard: Voucherify_LoyaltyCard;
}

export const GetMyLoyaltyCardQuery = gql`
  query GetMyLoyaltyCardQuery {
    loyaltyCard: getMyLoyaltyCard {
      id
      code
      campaign
      loyalty_card {
        points
        balance
      }
      assets {
        qr {
          id
          url
        }
      }
    }
  }
`;

export const CreateInvitation = gql`
  mutation CreateInvitationMutation(
    $name: String
    $email: String
    $order_id: String
    $products: [ReviewsIo_InvitationProductInput]
    $template_id: String
  ) {
    ReviewsIo_createInvitation(
      input: { name: $name, email: $email, order_id: $order_id, products: $products, template_id: $template_id }
    ) {
      status
    }
  }
`;

export interface GetMyNewsletterSubscriptionsResponse {
  newsletters: ProfileNewsletterStatus[];
}

export const GetMyNewsletterSubscriptionsQuery = gql`
  query GetMyNewsletterSubscriptionsQuery {
    newsletters: getMyNewsletterSubscriptions {
      listId
      listName
      subscribed
    }
  }
`;

export interface SubscribeMyEmailToNewsletterResponse {
  result: Klaviyo_AddMembersResponse;
}

export const SubscribeMyEmailToNewsletterMutation = gql`
  mutation SubscribeMyEmailToNewsletterMutation($list_id: String!) {
    result: subscribeMyEmailToNewsletter(list_id: $list_id) {
      items {
        id
      }
    }
  }
`;

export interface UnsubscribeMyEmailFromNewsletterResponse {
  result: Klaviyo_200Ok;
}

export const UnsubscribeMyEmailFromNewsletterMutation = gql`
  mutation UnsubscribeMyEmailFromNewsletterMutation($list_id: String!) {
    result: unsubscribeMyEmailFromNewsletter(list_id: $list_id) {
      result
    }
  }
`;

export const CreateLoyaltyCardOrder = gql`
  mutation CreateLoyaltyCardOrder(
    $email: String
    $amount: Float
    $status: String
    $items: [Voucherify_OrderItemInput]
  ) {
    order: Voucherify_createOrder(email: $email, amount: $amount, status: $status, items: $items) {
      id
    }
  }
`;

/**
 * Customer creation
 */

export type CreateCustomerAccessTokenResponse = {
  accessTokenCreate: ShopifyStorefront_CustomerAccessTokenCreatePayload;
};

export const CreateCustomerAccessTokenMutation = gql`
  mutation CrateCustomerAccesssToken($input: ShopifyStorefront_CustomerAccessTokenCreateInput!) {
    accessTokenCreate: ShopifyStorefront_customerAccessTokenCreate(input: $input) {
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

export type GetCustomerTokenDataResponse = {
  customer: ShopifyStorefront_Customer;
};

export const GetCustomerTokenDataQuery = gql`
  query GetCustomerTokenDataQuery($customerAccessToken: String!) {
    customer: ShopifyStorefront_customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      id
      phone
      email
      displayName
    }
  }
`;

export type GetCustomerResponse = {
  customer: ShopifyStorefront_Customer;
};

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

export type CreateCustomerResponse = {
  customerCreate: CreateCustomerPayload;
};

export const CreateCustomerMutation = gql`
  mutation CreateCustomerMutation($input: CreateCustomerPropertiesPropertyInput!) {
    customerCreate: createCustomer(input: $input) {
      customer {
        id
      }
    }
  }
`;

export type RecoverCustomerPasswordResponse = {
  customerRecover: ShopifyStorefront_CustomerRecoverPayload;
};

export const RecoverCustomerPasswordMutation = gql`
  mutation RecoverCustomerPasswordMutation($email: String!, $recaptchaToken: String!) {
    customerRecover: ShopifyStorefront_customerRecover(email: $email, recaptchaToken: $recaptchaToken) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export type UpdateCustomerResponse = {
  customerUpdate: ShopifyStorefront_CustomerUpdatePayload;
};

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

export type UpdateCustomerAddressResponse = {
  customerAddressUpdate: ShopifyStorefront_CustomerAddressUpdatePayload;
};

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
