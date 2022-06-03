import { gql } from '@apollo/client';
import type {
  Klaviyo_200Ok,
  Klaviyo_AddMembersResponse,
  Mutation,
  ProfileNewsletterStatus,
  QueryShopify_ProductArgs,
  ShopifyStorefront_CartCreatePayload,
  ShopifyStorefront_Customer,
  ShopifyStorefront_CustomerAccessTokenCreatePayload,
  ShopifyStorefront_CustomerAddressUpdatePayload,
  ShopifyStorefront_CustomerCreatePayload,
  ShopifyStorefront_CustomerRecoverPayload,
  ShopifyStorefront_CustomerUpdatePayload,
  Shopify_Customer,
  Shopify_Product,
  Shopify_ProductConnection,
  Voucherify_LoyaltyCard
} from 'types/takeshape';

export type GetProductIdsResponse = {
  products: {
    edges: Array<{
      node: {
        id: string;
      };
    }>;
  };
};

export const GetProductIdsQuery = gql`
  query GetProductIds {
    products: Shopify_products(first: 100) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export type GetProductsResponse = {
  products: Shopify_ProductConnection;
};

export const GetProductsQuery = gql`
  query GetProducts {
    products: Shopify_products(first: 10) {
      edges {
        node {
          id
          title
          description
          descriptionHtml
          featuredImage {
            width
            height
            url
          }
          images(first: 10) {
            edges {
              node {
                width
                height
                url
              }
            }
          }
          priceRangeV2 {
            maxVariantPrice {
              currencyCode
              amount
            }
            minVariantPrice {
              currencyCode
              amount
            }
          }
          reviews {
            stats {
              average
              count
            }
          }
          totalVariants
          sellingPlanGroupCount
          recharge {
            subscription_defaults {
              storefront_purchase_options
            }
          }
        }
      }
    }
  }
`;

export type GetProductArgs = QueryShopify_ProductArgs;

export type GetProductResponse = {
  product: Shopify_Product;
};

export const GetProductQuery = gql`
  query GetProduct($id: ID!) {
    product: Shopify_product(id: $id) {
      id
      title
      description
      descriptionHtml
      featuredImage {
        width
        height
        url
      }
      images(first: 10) {
        edges {
          node {
            width
            height
            url
          }
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          currencyCode
          amount
        }
        minVariantPrice {
          currencyCode
          amount
        }
      }
      seo {
        title
        description
      }
      publishedAt
      totalVariants
      variants(first: 10) {
        edges {
          node {
            id
            availableForSale
            compareAtPrice
            image {
              width
              height
              url
            }
            price
            sellableOnlineQuantity
            sku
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
      reviews {
        stats {
          average
          count
        }
        reviews {
          data {
            rating
            title
            review
            date_created
            timeago
            reviewer {
              first_name
              last_name
              verified_buyer
              address
              profile_picture
              gravatar
            }
          }
          per_page
          current_page
          total
        }
      }
      sellingPlanGroupCount
      sellingPlanGroups(first: 1) {
        edges {
          node {
            sellingPlans(first: 10) {
              edges {
                node {
                  id
                  options
                  pricingPolicies {
                    ... on Shopify_SellingPlanFixedPricingPolicy {
                      adjustmentType
                      adjustmentValue {
                        ... on Shopify_MoneyV2 {
                          currencyCode
                          amount
                        }
                        ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                          percentage
                        }
                      }
                    }
                    ... on Shopify_SellingPlanRecurringPricingPolicy {
                      adjustmentType
                      adjustmentValue {
                        ... on Shopify_MoneyV2 {
                          currencyCode
                          amount
                        }
                        ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                          percentage
                        }
                      }
                    }
                  }
                  billingPolicy {
                    ... on Shopify_SellingPlanRecurringBillingPolicy {
                      anchors {
                        day
                        month
                        type
                      }
                      maxCycles
                      minCycles
                      intervalCount
                      interval
                    }
                  }
                }
              }
            }
          }
        }
      }
      recharge {
        subscription_defaults {
          storefront_purchase_options
        }
      }
    }
  }
`;

export const GetMyProfile = gql`
  query GetMyProfile {
    profile: getMyProfile {
      id
      email
      name
      bio
      avatar {
        path
      }
    }
  }
`;

export type UpsertMyProfileResponse = {
  profile: Mutation['upsertMyProfile'];
};

export const UpsertMyProfile = gql`
  mutation UpsertMyProfile($name: String, $bio: String, $avatarId: String) {
    profile: upsertMyProfile(name: $name, bio: $bio, avatarId: $avatarId) {
      id
      email
      name
      bio
      avatar {
        path
      }
    }
  }
`;

export interface UpsertProfileResponse {
  profile: Mutation['upsertProfile'];
}

export const UpsertProfile = gql`
  mutation UpsertProfile($id: String!, $email: String!) {
    profile: upsertProfile(id: $id, email: $email) {
      _id
    }
  }
`;

export const UploadAssets = gql`
  mutation UploadAssets($files: [TSFile]!) {
    uploadAssets(files: $files) {
      uploadUrl
      asset {
        _id
        _version
        filename
      }
    }
  }
`;

export const UpsertMyCustomer = gql`
  mutation UpsertMyCustomer(
    $name: String
    $description: String
    $address: UpsertMyCustomerPropertiesAddressPropertyInput
  ) {
    customer: upsertMyCustomer(name: $name, description: $description, address: $address) {
      id
      name
      description
      address {
        line1
        line2
        city
        state
        postal_code
        country
      }
    }
  }
`;

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

export const DeleteMySubscription = gql`
  mutation DeleteMySubscription($subscriptionId: String!) {
    subscription: deleteMySubscription(subscriptionId: $subscriptionId) {
      id
      status
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
  customerCreate: ShopifyStorefront_CustomerCreatePayload;
};

export const CreateCustomerMutation = gql`
  mutation CreateCustomerMutation($input: ShopifyStorefront_CustomerCreateInput!) {
    customerCreate: ShopifyStorefront_customerCreate(input: $input) {
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

export type RecoverCustomerPasswordResponse = {
  customerRecover: ShopifyStorefront_CustomerRecoverPayload;
};

export const RecoverCustomerPasswordMutation = gql`
  mutation RecoverCustomerPasswordMutation($email: String!) {
    customerRecover: ShopifyStorefront_customerRecover(email: $email) {
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
