import { getIsExpiringSoon } from 'components/Payments/utils';
import { defaultProductImage } from 'config';
import { createImageGetter, getProductUrl, getProductVariantOptions } from 'transforms/shopify';
import {
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  GetMySubscriptionQueryResponse
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import { isDefined } from 'utils/types';
import {
  AnySubscription,
  ResponseAddress,
  ResponseCharge,
  ResponseFulfillment,
  ResponseLineItem,
  ResponsePaymentMethod,
  ResponseProduct,
  ResponseProductVariant,
  ResponseRechargeProduct,
  ResponseSubscription,
  SubscriptionAddress,
  SubscriptionInterval,
  SubscriptionOrder,
  SubscriptionOrderFulfillment,
  SubscriptionOrderLineItem,
  SubscriptionOrderStatus,
  SubscriptionPaymentMethod,
  SubscriptionPrice,
  SubscriptionProduct,
  SubscriptionProductVariant,
  SubscriptionStatus
} from './types';

function getSubscriptionPaymentMethod(paymentMethod: ResponsePaymentMethod | null): SubscriptionPaymentMethod | null {
  if (!paymentMethod?.id) {
    return null;
  }

  const { brand, exp_month: expiryMonth, exp_year: expiryYear, last4 } = paymentMethod.payment_details;

  return {
    id: paymentMethod.id,
    instrument: {
      brand: capitalize(brand ?? ''),
      expiresSoon: getIsExpiringSoon({ expiryMonth, expiryYear }),
      expiryMonth,
      expiryYear,
      lastDigits: last4,
      maskedNumber: `••••${last4}`,
      name: '',
      isRevocable: false
    }
  };
}

function getSubscriptionStatus(status: ResponseSubscription['status']): SubscriptionStatus {
  switch (status) {
    case 'ACTIVE':
      return 'ACTIVE';
    case 'CANCELLED':
      return 'CANCELLED';
    case 'EXPIRED':
    default:
      return 'EXPIRED';
  }
}

function getSubscriptionAddress(address: ResponseAddress): SubscriptionAddress {
  return {
    id: address.id,
    firstName: address.first_name,
    lastName: address.last_name,
    address1: address.address1,
    address2: address.address2,
    city: address.city,
    province: address.province,
    zip: address.zip,
    country: address.country ?? 'United States',
    phone: address.phone,
    company: address.company
  };
}

function getSubscriptionPrice(
  price: ResponseSubscription['price'],
  presentmentCurrency: ResponseSubscription['presentment_currency']
): SubscriptionPrice {
  const priceAsNumber = typeof price === 'number' ? price : parseFloat(price);
  return {
    currencyCode: presentmentCurrency,
    amount: priceAsNumber * 100
  };
}

function getSubscriptionInterval(orderIntervalUnit: ResponseSubscription['order_interval_unit']): SubscriptionInterval {
  switch (orderIntervalUnit) {
    case 'week':
      return 'WEEK';
    case 'month':
      return 'MONTH';
    case 'day':
    default:
      return 'DAY';
  }
}

function getSubscriptionProductVariant(
  shopifyProduct: ResponseProduct,
  shopifyVariant: Pick<
    ResponseProductVariant,
    | 'id'
    | 'title'
    | 'price'
    | 'image'
    | 'availableForSale'
    | 'sellableOnlineQuantity'
    | 'selectedOptions'
    | 'sku'
    | 'inventoryPolicy'
  >,
  currencyCode: string,
  rechargeProduct: ResponseRechargeProduct
): SubscriptionProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const { id, title, price, image, availableForSale, sellableOnlineQuantity, selectedOptions, sku, inventoryPolicy } =
    shopifyVariant;
  const discountAmount = (100 - rechargeProduct.discount_amount) / 100;

  return {
    id,
    name: title,
    description: title,
    price: {
      amount: price * 100 * discountAmount,
      currencyCode
    },
    available: availableForSale && (sellableOnlineQuantity > 0 || inventoryPolicy === 'CONTINUE'),
    image: getImage(image),
    quantityAvailable: sellableOnlineQuantity,
    currentlyNotInStock: sellableOnlineQuantity === 0 && inventoryPolicy == 'CONTINUE',
    sku: sku ?? '',
    options: selectedOptions
  };
}

function getSubscriptionProduct(
  shopifyProductVariant: ResponseProductVariant,
  currencyCode: string,
  rechargeProduct: ResponseRechargeProduct
): SubscriptionProduct {
  const { product } = shopifyProductVariant;
  const getImage = createImageGetter(`Image of ${product.title}`);
  const variants = product.variants.nodes.map((node) =>
    getSubscriptionProductVariant(product, node, currencyCode, rechargeProduct)
  );

  return {
    id: product.id,
    handle: product.handle,
    name: product.title,
    url: getProductUrl(product.handle),
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    featuredImage: getImage(product.featuredImage),
    hasStock: product.totalInventory > 0,
    variants,
    variantOptions: getProductVariantOptions(product.options, variants)
  };
}

type SubscriptionChargeStatus = {
  status: SubscriptionOrderStatus;
  statusAt: string;
};

function getSubscriptionOrderStatus(rechargeCharge: ResponseSubscription['charges'][0]): SubscriptionChargeStatus {
  const { updated_at, shopifyOrder } = rechargeCharge;
  const fulfillment = shopifyOrder?.fulfillments?.[0];

  switch (rechargeCharge.status) {
    case 'QUEUED':
      return {
        status: 'CHARGE_QUEUED',
        // And order can leave and re-enter the queued state
        statusAt: updated_at
      };
    case 'SKIPPED':
      return {
        status: 'CHARGE_SKIPPED',
        statusAt: updated_at
      };
    // Unclear what this status is or how it is entered
    case 'CANCELLED':
      return {
        status: 'CHARGE_CANCELLED',
        statusAt: updated_at
      };
    case 'REFUNDED':
    case 'PARTIALLY_REFUNDED':
      return {
        status: 'CHARGE_REFUNDED',
        statusAt: updated_at
      };
    case 'PENDING_MANUAL_PAYMENT':
      return {
        status: 'CHARGE_PENDING_MANUAL_PAYMENT',
        statusAt: updated_at
      };
    case 'PENDING':
      return {
        status: 'CHARGE_PENDING',
        statusAt: updated_at
      };
    case 'ERROR':
      return {
        status: 'CHARGE_ERROR',
        statusAt: updated_at
      };
    case 'SUCCESS':
      if (!fulfillment) {
        return {
          status: 'CHARGE_SUCCESS',
          statusAt: updated_at
        };
      }
      break;

    default:
      return {
        status: 'CHARGE_UNKNOWN',
        statusAt: updated_at
      };
  }

  const { updatedAt, inTransitAt, deliveredAt, trackingInfo } = fulfillment;

  switch (fulfillment.displayStatus) {
    case 'SUBMITTED':
    case 'MARKED_AS_FULFILLED':
    case 'LABEL_VOIDED':
    case 'LABEL_PRINTED':
    case 'LABEL_PURCHASED':
    case 'READY_FOR_PICKUP':
    case 'FULFILLED':
      // If we're in this early state and have no tracking info, keep at the
      // CHARGE_SUCCESS state to only show relevant info to the user.
      if (!trackingInfo) {
        return {
          status: 'CHARGE_SUCCESS',
          statusAt: updated_at
        };
      }

      // In the case of manual fulfillment it's possible this is the terminal state
      return {
        status: 'FULFILLMENT_FULFILLED',
        statusAt: updatedAt
      };

    case 'PICKED_UP':
    case 'IN_TRANSIT':
      return {
        status: 'FULFILLMENT_IN_TRANSIT',
        // When the fulfillment enters this state, inTransitAt should fix the
        // time this status was entered.
        statusAt: inTransitAt ?? updatedAt
      };

    case 'OUT_FOR_DELIVERY':
      return {
        status: 'FULFILLMENT_OUT_FOR_DELIVERY',
        statusAt: updatedAt
      };

    case 'ATTEMPTED_DELIVERY':
      return {
        status: 'FULFILLMENT_ATTEMPTED_DELIVERY',
        statusAt: updatedAt
      };

    case 'DELIVERED':
      return {
        status: 'FULFILLMENT_DELIVERED',
        // This is a terminal event, statusAt should not change
        statusAt: deliveredAt
      };

    case 'NOT_DELIVERED':
      return {
        status: 'FULFILLMENT_NOT_DELIVERED',
        // This is a terminal event, statusAt should not change. Unknown if
        // deliveredAt will actually convey this info.
        statusAt: deliveredAt ?? updatedAt
      };

    case 'CANCELED':
      return {
        status: 'FULFILLMENT_CANCELED',
        statusAt: updatedAt
      };

    case 'FAILURE':
      return {
        status: 'FULFILLMENT_FAILURE',
        statusAt: updatedAt
      };

    default:
      return {
        status: 'FULFILLMENT_UNKNOWN',
        statusAt: updatedAt
      };
  }
}

function getSubscriptionOrderLineItem(lineItem: ResponseLineItem, currencyCode: string): SubscriptionOrderLineItem {
  const image = lineItem?.images?.small
    ? {
        url: lineItem.images.small,
        height: 300,
        width: 300,
        altText: `Image of ${lineItem.title}`
      }
    : defaultProductImage;

  return {
    price: {
      amount: parseFloat(lineItem.price) * 100,
      currencyCode
    },
    quantity: lineItem.quantity ?? 1,
    product: {
      id: `gid://shopify/Product/${lineItem.shopify_product_id}`,
      name: lineItem.title,
      image
    },
    productVariant: {
      id: `gid://shopify/Product/${lineItem.shopify_variant_id}`,
      name: lineItem.variant_title
    }
  };
}

function getSubscriptionOrderFulfillment(shopifyFulfillment: ResponseFulfillment): SubscriptionOrderFulfillment {
  const { createdAt, updatedAt, deliveredAt, estimatedDeliveryAt, inTransitAt, displayStatus, trackingInfo } =
    shopifyFulfillment;
  const tracking = trackingInfo[0];

  return {
    createdAt,
    updatedAt,
    deliveredAt,
    estimatedDeliveryAt,
    inTransitAt,
    displayStatus,
    trackingInfo: tracking
      ? {
          url: tracking.url ?? '',
          number: tracking.number ?? '',
          company: tracking.company ?? ''
        }
      : null
  };
}

function getSubscriptionOrder(rechargeCharge: ResponseCharge): SubscriptionOrder {
  const { id, updated_at, created_at, scheduled_at, processed_at, shopifyOrder, line_items, currency } = rechargeCharge;
  const fulfillments =
    shopifyOrder?.fulfillments?.map((shopifyFulfillment) => getSubscriptionOrderFulfillment(shopifyFulfillment)) ?? [];
  const fulfillment = fulfillments[0];
  const status = getSubscriptionOrderStatus(rechargeCharge);
  const { shippingAddress } = shopifyOrder ?? {};

  return {
    id,
    chargeId: id,
    ...status,
    chargeUpdatedAt: updated_at,
    chargeCreatedAt: created_at,
    chargeScheduledAt: scheduled_at,
    chargeProcessedAt: processed_at ?? null,
    fulfillmentCreatedAt: fulfillment?.createdAt ?? null,
    fulfillmentUpdatedAt: fulfillment?.updatedAt ?? null,
    fulfillmentScheduledAt: fulfillment?.estimatedDeliveryAt ?? null,
    fulfillmentInTransitAt: fulfillment?.inTransitAt ?? null,
    fulfillmentDeliveredAt: fulfillment?.deliveredAt ?? null,
    shippingAddress: {
      firstName: shippingAddress?.firstName ?? '',
      lastName: shippingAddress?.lastName ?? '',
      address1: shippingAddress?.address1 ?? '',
      address2: shippingAddress?.address2 ?? '',
      country: shippingAddress?.country ?? '',
      city: shippingAddress?.city ?? '',
      province: shippingAddress?.province ?? '',
      zip: shippingAddress?.zip ?? '',
      phone: shippingAddress?.phone ?? null,
      company: shippingAddress?.company ?? null
    },
    lineItems: line_items?.map((lineItem) => getSubscriptionOrderLineItem(lineItem, currency)) ?? [],
    fulfillments
  };
}

function getSubscriptionItem(rechargeSubscription: ResponseSubscription): AnySubscription {
  const {
    id,
    customer_id,
    status,
    created_at,
    updated_at,
    address,
    price,
    presentment_currency,
    order_interval_frequency,
    order_interval_unit,
    quantity,
    next_charge_scheduled_at,
    cancelled_at,
    shopifyProductVariant,
    rechargeProduct,
    charges
  } = rechargeSubscription;
  const paymentMethod = address.include?.payment_methods?.[0] ?? null;
  const unitPrice = getSubscriptionPrice(price, presentment_currency);

  return {
    id: id,
    customerId: customer_id,
    status: getSubscriptionStatus(status),
    createdAt: created_at,
    cancelledAt: cancelled_at,
    updatedAt: updated_at,
    address: getSubscriptionAddress(address),
    paymentMethod: getSubscriptionPaymentMethod(paymentMethod),
    quantity,
    unitPrice,
    price: {
      ...unitPrice,
      amount: unitPrice.amount * quantity
    },
    interval: getSubscriptionInterval(order_interval_unit),
    intervalCount: Number(order_interval_frequency),
    intervalOptions: rechargeProduct.subscription_defaults.order_interval_frequency_options,
    product: getSubscriptionProduct(shopifyProductVariant, presentment_currency, rechargeProduct),
    productVariant: getSubscriptionProductVariant(
      shopifyProductVariant.product,
      shopifyProductVariant,
      presentment_currency,
      rechargeProduct
    ),
    nextChargeScheduledAt: next_charge_scheduled_at,
    orders: charges.map(getSubscriptionOrder)
  };
}

export function getPaymentMethods(response: GetMyPaymentMethodsQueryResponse | undefined) {
  if (!response?.paymentMethods) {
    return null;
  }

  return response.paymentMethods.map(getSubscriptionPaymentMethod).filter(isDefined);
}

export function getSubscription(response: GetMySubscriptionQueryResponse): AnySubscription | null {
  if (!response?.subscription) {
    return null;
  }

  return getSubscriptionItem(response.subscription);
}

export function getSubscriptionList(
  response: GetMySubscriptionListQueryResponse | undefined
): AnySubscription[] | null {
  if (!response?.subscriptions) {
    return null;
  }

  return response.subscriptions.map(getSubscriptionItem);
}
