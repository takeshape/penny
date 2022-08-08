import { Shopify_CustomerCreditCard, Shopify_SubscriptionContract } from 'types/takeshape';

export type CreditCard = Pick<
  Shopify_CustomerCreditCard,
  | 'billingAddress'
  | 'brand'
  | 'expiresSoon'
  | 'expiryMonth'
  | 'expiryYear'
  | 'firstDigits'
  | 'lastDigits'
  | 'maskedNumber'
  | 'name'
>;

export type SubscriptionContract = Pick<
  Shopify_SubscriptionContract,
  'id' | 'createdAt' | 'status' | 'nextBillingDate' | 'deliveryPrice' | 'lines'
>;

export type PaymentMethod = {
  id: string;
  instrument: CreditCard;
  subscriptionContracts: SubscriptionContract[];
};
