import { PaymentMethod } from 'types/paymentMethod';

export const paymentMethods: PaymentMethod[] = [
  {
    id: '111',
    instrument: {
      brand: 'Visa',
      expiresSoon: false,
      expiryYear: 2023,
      expiryMonth: 10,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  },
  {
    id: '222',
    instrument: {
      brand: 'Amex',
      expiresSoon: true,
      expiryYear: 2023,
      expiryMonth: 10,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  },
  {
    id: '333',
    instrument: {
      brand: 'Discover',
      expiresSoon: true,
      expiryYear: 2023,
      expiryMonth: 10,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  }
];
