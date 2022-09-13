import { getIsExpiringSoon } from 'components/Payments/utils';
import { createImageGetter, getProductUrl, getProductVariantOptions } from 'transforms/shopify';
import {
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  GetMySubscriptionQueryResponse
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import {
  AnySubscription,
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
  SubscriptionResponse,
  SubscriptionStatus
} from './types';

function getSubscriptionPaymentMethod(
  paymentMethod: SubscriptionResponse['address']['include']['payment_methods'][0]
): SubscriptionPaymentMethod {
  const { id, payment_details } = paymentMethod ?? {};

  if (!id) {
    return null;
  }

  const { brand, exp_month: expiryMonth, exp_year: expiryYear, last4 } = payment_details ?? {};

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

function getSubscriptionStatus(status: SubscriptionResponse['status']): SubscriptionStatus {
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

function getSubscriptionAddress(address: SubscriptionResponse['address']): SubscriptionAddress {
  return {
    id: address.id,
    firstName: address.first_name,
    lastName: address.last_name,
    address1: address.address1,
    address2: address.address2,
    city: address.city,
    province: address.province,
    zip: address.zip,
    country: address.country,
    phone: address.phone
  };
}

function getSubscriptionPrice(
  price: SubscriptionResponse['price'],
  presentmentCurrency: SubscriptionResponse['presentment_currency']
): SubscriptionPrice {
  const priceAsNumber = typeof price === 'number' ? price : parseFloat(price);
  return {
    currencyCode: presentmentCurrency,
    amount: priceAsNumber * 100
  };
}

function getSubscriptionInterval(orderIntervalUnit: SubscriptionResponse['order_interval_unit']): SubscriptionInterval {
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
  shopifyProduct: SubscriptionResponse['shopifyProductVariant']['product'],
  shopifyVariant:
    | SubscriptionResponse['shopifyProductVariant']['product']['variants']['nodes'][0]
    | SubscriptionResponse['shopifyProductVariant'],
  currencyCode: string,
  rechargeProduct: SubscriptionResponse['rechargeProduct']
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
    sku,
    options: selectedOptions
  };
}

function getSubscriptionProduct(
  shopifyProductVariant: SubscriptionResponse['shopifyProductVariant'],
  currencyCode: string,
  rechargeProduct: SubscriptionResponse['rechargeProduct']
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

function getSubscriptionOrderStatus(rechargeCharge: SubscriptionResponse['charges'][0]): SubscriptionChargeStatus {
  const { updated_at, created_at, shopifyOrder } = rechargeCharge;
  const fulfillment = shopifyOrder?.fulfillments?.[0];

  switch (rechargeCharge.status) {
    case 'QUEUED':
      return {
        status: 'CHARGE_QUEUED',
        statusAt: created_at
      };
    case 'SKIPPED':
      return {
        status: 'CHARGE_SKIPPED',
        statusAt: updated_at
      };
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

  const { updatedAt, inTransitAt, deliveredAt } = fulfillment;

  switch (fulfillment.displayStatus) {
    case 'SUBMITTED':
    case 'MARKED_AS_FULFILLED':
    case 'LABEL_VOIDED':
    case 'LABEL_PRINTED':
    case 'LABEL_PURCHASED':
    case 'FULFILLED':
    case 'READY_FOR_PICKUP':
      return {
        // User doesn't care
        status: 'CHARGE_SUCCESS',
        statusAt: updatedAt
      };

    case 'PICKED_UP':
    case 'IN_TRANSIT':
      return {
        status: 'FULFILLMENT_IN_TRANSIT',
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
        statusAt: deliveredAt
      };

    case 'NOT_DELIVERED':
      return {
        status: 'FULFILLMENT_NOT_DELIVERED',
        statusAt: deliveredAt
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

function getSubscriptionOrderLineItem(
  lineItem: SubscriptionResponse['charges'][0]['line_items'][0],
  currencyCode: string
): SubscriptionOrderLineItem {
  return {
    price: {
      amount: parseFloat(lineItem.price) * 100,
      currencyCode
    },
    quantity: lineItem.quantity ?? 1,
    product: {
      id: `gid://shopify/Product/${lineItem.shopify_product_id}`,
      name: lineItem.title,
      image: {
        url: lineItem.images.small,
        height: 300,
        width: 300,
        altText: `Image of ${lineItem.title}`
      }
    },
    productVariant: {
      id: `gid://shopify/Product/${lineItem.shopify_variant_id}`,
      name: lineItem.variant_title
    }
  };
}

function getSubscriptionOrderFulfillment(
  shopifyFulfillment: SubscriptionResponse['charges'][0]['shopifyOrder']['fulfillments'][0]
): SubscriptionOrderFulfillment {
  const { deliveredAt, estimatedDeliveryAt, inTransitAt, displayStatus } = shopifyFulfillment;
  return {
    deliveredAt,
    estimatedDeliveryAt,
    inTransitAt,
    displayStatus
  };
}

function getSubscriptionOrder(rechargeCharge: SubscriptionResponse['charges'][0]): SubscriptionOrder {
  const { id, scheduled_at, processed_at, shopifyOrder, line_items, currency } = rechargeCharge;
  const fulfillments =
    shopifyOrder?.fulfillments?.map((shopifyFulfillment) => getSubscriptionOrderFulfillment(shopifyFulfillment)) ?? [];
  const fulfillment = fulfillments[0];
  const status = getSubscriptionOrderStatus(rechargeCharge);
  const { shippingAddress } = shopifyOrder ?? {};

  return {
    id,
    chargeId: id,
    ...status,
    chargeScheduledAt: scheduled_at ?? null,
    chargeProcessedAt: processed_at ?? null,
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
      phone: shippingAddress?.phone,
      company: shippingAddress?.company
    },
    lineItems: line_items?.map((lineItem) => getSubscriptionOrderLineItem(lineItem, currency)) ?? [],
    fulfillments
  };
}

function getSubscriptionItem(rechargeSubscription: SubscriptionResponse): AnySubscription {
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
  const paymentMethod = address?.include?.payment_methods?.[0];
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

export function getPaymentMethods(response: GetMyPaymentMethodsQueryResponse) {
  if (!response?.paymentMethods) {
    return null;
  }

  return response.paymentMethods.map(getSubscriptionPaymentMethod);
}

export function getSubscription(response: GetMySubscriptionQueryResponse): AnySubscription {
  if (!response?.subscription) {
    return null;
  }

  return getSubscriptionItem(response.subscription);
}

export function getSubscriptionList(response: GetMySubscriptionListQueryResponse): AnySubscription[] {
  if (!response?.subscriptions) {
    return null;
  }

  return response.subscriptions.map(getSubscriptionItem);
}
