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

export type PaymentMethod = {
  id: string;
  instrument: CreditCard;
  subscriptionContracts: Pick<
    Shopify_SubscriptionContract,
    'id' | 'createdAt' | 'status' | 'nextBillingDate' | 'deliveryPrice' | 'lines'
  >[];
};
