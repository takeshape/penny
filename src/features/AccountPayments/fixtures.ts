import { PaymentMethod } from 'types/paymentMethod';

export const paymentMethods: PaymentMethod[] = [
  {
    id: '111',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',

        countryCode: 'US',
        province: 'New York',
        provinceCode: 'NY',
        zip: '11222'
      },
      brand: 'Visa',
      expiresSoon: false,
      expiryYear: 2023,
      expiryMonth: 10,
      firstDigits: '1234',
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  },
  {
    id: '222',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',

        countryCode: 'US',
        province: 'New York',
        provinceCode: 'NY',
        zip: '11222'
      },
      brand: 'Amex',
      expiresSoon: true,
      expiryYear: 2023,
      expiryMonth: 10,
      firstDigits: '1234',
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  },
  {
    id: '333',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',

        countryCode: 'US',
        province: 'New York',
        provinceCode: 'NY',
        zip: '11222'
      },
      brand: 'Discover',
      expiresSoon: true,
      expiryYear: 2023,
      expiryMonth: 10,
      firstDigits: '1234',
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick'
    }
  }
];
