import { Shopify_CustomerCreditCard } from 'types/takeshape';

export type CreditCard = Pick<
  Shopify_CustomerCreditCard,
  'brand' | 'expiresSoon' | 'expiryMonth' | 'expiryYear' | 'lastDigits' | 'maskedNumber' | 'name'
>;

export type PaymentMethod = {
  id: string;
  instrument: CreditCard;
};
