import { getIsExpiringSoon } from 'components/Payments/utils';
import { createImageGetter, getProductUrl, getProductVariantOptions } from 'transforms/shopify';
import {
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  GetMySubscriptionQueryResponse
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import {
  Subscription,
  SubscriptionAddress,
  SubscriptionInterval,
  SubscriptionPaymentMethod,
  SubscriptionPrice,
  SubscriptionProduct,
  SubscriptionProductVariant,
  SubscriptionResponse,
  SubscriptionStatus
} from './types';

function _getSubscriptionPaymentMethod(
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

function _getSubscriptionStatus(status: SubscriptionResponse['status']): SubscriptionStatus {
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

function _getSubscriptionAddress(address: SubscriptionResponse['address']): SubscriptionAddress {
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

function _getSubscriptionPrice(
  price: SubscriptionResponse['price'],
  presentmentCurrency: SubscriptionResponse['presentment_currency'],
  quantity: number
): SubscriptionPrice {
  const priceAsNumber = typeof price === 'number' ? price : parseFloat(price);

  return {
    currencyCode: presentmentCurrency,
    amountPerItem: priceAsNumber * 100,
    amount: priceAsNumber * 100 * quantity
  };
}

function _getSubscriptionInterval(
  orderIntervalUnit: SubscriptionResponse['order_interval_unit']
): SubscriptionInterval {
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

function _getVariant(
  shopifyProduct: SubscriptionResponse['shopifyProductVariant']['product'],
  shopifyVariant: SubscriptionResponse['shopifyProductVariant']['product']['variants']['nodes'][0],
  currencyCode: string,
  rechargeProduct: SubscriptionResponse['rechargeProduct']
): SubscriptionProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const { id, title, image, availableForSale, sellableOnlineQuantity, selectedOptions, sku, inventoryPolicy } =
    shopifyVariant;

  return {
    id,
    name: title,
    description: title,
    price: {
      amountBeforeDiscount: shopifyVariant.price * 100,
      amount: shopifyVariant.price * 100 * ((100 - rechargeProduct.discount_amount) / 100),
      currencyCode
    },
    // prices: getProductVariantPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale && (sellableOnlineQuantity > 0 || inventoryPolicy === 'CONTINUE'),
    image: getImage(image),
    quantityAvailable: sellableOnlineQuantity,
    currentlyNotInStock: sellableOnlineQuantity === 0 && inventoryPolicy == 'CONTINUE',
    sku,
    options: selectedOptions
  };
}

function _getProductVariants(
  shopifyProduct: SubscriptionResponse['shopifyProductVariant']['product'],
  currencyCode: string,
  rechargeProduct: SubscriptionResponse['rechargeProduct']
): SubscriptionProductVariant[] {
  return shopifyProduct.variants.nodes.map((node) => _getVariant(shopifyProduct, node, currencyCode, rechargeProduct));
}

function _getSubscriptionProduct(
  shopifyProductVariant: SubscriptionResponse['shopifyProductVariant'],
  currencyCode: string,
  rechargeProduct: SubscriptionResponse['rechargeProduct']
): SubscriptionProduct {
  const { product } = shopifyProductVariant;
  const getImage = createImageGetter(`Image of ${product.title}`);
  const variants = _getProductVariants(product, currencyCode, rechargeProduct);

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
    variantId: shopifyProductVariant.id,
    variantName: shopifyProductVariant.title,
    variantSelections: shopifyProductVariant.selectedOptions,
    variantOptions: getProductVariantOptions(product.options, variants)
  };
}

function _getSubscription(rechargeSubscription: SubscriptionResponse): Subscription {
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

  return {
    id: id,
    customerId: customer_id,
    status: _getSubscriptionStatus(status),
    createdAt: created_at,
    cancelledAt: cancelled_at,
    updatedAt: updated_at,
    address: _getSubscriptionAddress(address),
    paymentMethod: _getSubscriptionPaymentMethod(paymentMethod),
    price: _getSubscriptionPrice(price, presentment_currency, quantity),
    quantity,
    interval: _getSubscriptionInterval(order_interval_unit),
    intervalCount: Number(order_interval_frequency),
    product: _getSubscriptionProduct(shopifyProductVariant, presentment_currency, rechargeProduct),
    next_charge_scheduled_at,
    charges,
    intervalOptions: rechargeProduct.subscription_defaults.order_interval_frequency_options
  };
}

export function getPaymentMethods(response: GetMyPaymentMethodsQueryResponse) {
  if (!response?.paymentMethods) {
    return null;
  }

  return response.paymentMethods.map(_getSubscriptionPaymentMethod);
}

export function getSubscription(response: GetMySubscriptionQueryResponse): Subscription {
  if (!response?.subscription) {
    return null;
  }

  return _getSubscription(response.subscription);
}

export function getSubscriptionList(response: GetMySubscriptionListQueryResponse): Subscription[] {
  if (!response?.subscriptions) {
    return null;
  }

  return response.subscriptions.map(_getSubscription);
}
