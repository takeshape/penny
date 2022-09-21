import { Shopify_CustomerCreditCard } from 'types/takeshape';

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
};
