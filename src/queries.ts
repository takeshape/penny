import { gql } from '@apollo/client';
import type {
  Mutation,
  Profile,
  QueryShopify_ProductArgs,
  ShopifyStorefront_CartCreatePayload,
  ShopifyStorefront_Customer,
  ShopifyStorefront_CustomerAccessTokenCreatePayload,
  ShopifyStorefront_CustomerCreatePayload,
  ShopifyStorefront_CustomerRecoverPayload,
  Shopify_Product,
  Shopify_ProductConnection,
  Stripe_PaymentIntentPaginatedList,
  Stripe_Product,
  Stripe_Subscription,
  Voucherify_LoyaltyCard
} from 'types/takeshape';

export interface StripeProducts {
  products: {
    items: Stripe_Product[];
  };
}

export const GetStripeProducts = gql`
  query GetStripeProductsQuery {
    products: getIndexedProductList(where: { active: { eq: true } }) {
      items {
        id
        name
        description
        images
        prices {
          id
          unit_amount
          currency
          recurring {
            interval
            interval_count
          }
        }
      }
    }
  }
`;

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
            discount_type
            discount_amount
            subscription_defaults {
              order_interval_unit
              order_interval_frequency_options
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
                }
              }
            }
          }
        }
      }
      recharge {
        discount_type
        discount_amount
        subscription_defaults {
          order_interval_unit
          order_interval_frequency_options
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
      customer: stripeCustomer {
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
      customer: stripeCustomer {
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

export interface GetMyPurchasesDataResponse {
  profile: Profile;
  payments?: Stripe_PaymentIntentPaginatedList;
  subscriptions?: Stripe_Subscription[];
  loyaltyCard?: Voucherify_LoyaltyCard;
}

export const GetMyPurchasesData = gql`
  query GetMyPurchasesDataQuery {
    profile: getMyProfile {
      shopifyCustomer {
        orders(first: 10) {
          edges {
            node {
              fulfillments {
                createdAt
                displayStatus
                fulfillmentLineItems(first: 10) {
                  edges {
                    node {
                      id
                      lineItem {
                        id
                        image {
                          url
                        }
                        name
                        quantity
                      }
                    }
                  }
                }
                trackingInfo {
                  company
                  number
                }
              }
            }
          }
        }
      }
    }
    payments: getMyPaymentsIndexed(size: 5, sort: { field: "created", order: "desc" }) {
      items {
        id
        amount
        currency
        created
        invoiceItems {
          object
          id
          amount
          currency
          quantity
          price {
            product {
              id
              name
              images
            }
          }
        }
        sessionItems {
          object
          id
          amount_total
          currency
          quantity
          price {
            product {
              id
              name
              images
            }
          }
        }
      }
    }
    subscriptions: getMySubscriptions(
      expand: ["data.items", "data.plan.product", "data.latest_invoice.payment_intent"]
    ) {
      id
      current_period_end
      items {
        data {
          id
          price {
            currency
            unit_amount
            product {
              id
              name
              description
              images
            }
            recurring {
              interval
            }
          }
        }
      }
    }
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

export const GetMyNewsletterSubscriptons = gql`
  query GetMyNewsletterSubscriptionsQuery {
    newsletters: getMyNewsletterSubscriptions {
      listId
      listName
      subscribed
    }
  }
`;

export const SubscribeToNewsletter = gql`
  mutation SubscribeToNewsletterMutation($listId: String!, $email: String!) {
    Klaviyo_addMembers(list_id: $listId, input: { profiles: [{ email: $email }] }) {
      items {
        id
      }
    }
  }
`;

export const UnsubscribeFromNewsletter = gql`
  mutation UnsubscribeFromNewsletterMutation($listId: String!, $email: String!) {
    Klaviyo_removeMembers(list_id: $listId, input: { emails: [$email] }) {
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

export type GetCustomerResponse = {
  customer: ShopifyStorefront_Customer;
};

export const GetCustomerQuery = gql`
  query GetCustomer($customerAccessToken: String!) {
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

export type CreateCustomerResponse = {
  customerCreate: ShopifyStorefront_CustomerCreatePayload;
};

export const CreateCustomerMutation = gql`
  mutation CreateCustomer($input: ShopifyStorefront_CustomerCreateInput!) {
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
  mutation RecoverCustomerPassword($email: String!) {
    customerRecover: ShopifyStorefront_customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
