import { PaymentMethod } from 'types/paymentMethod';

export const paymentMethods: PaymentMethod[] = [
  {
    id: '111',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',
        // @ts-expect-error
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
      isRevocable: false,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
    },
    subscriptionContracts: [
      {
        id: 'gid://shopify/SubscriptionContract/2222222222222222',
        // @ts-expect-error
        status: 'ACTIVE',
        createdAt: '2022-07-06T10:00:00Z',
        lines: {
          nodes: [
            {
              variantTitle: 'An Exceptional T-Shirt',
              // @ts-expect-error
              variantImage: {
                url: '/images/placeholders/t-shirt-man-right.png',
                altText: '',
                height: 500,
                width: 500
              }
            }
          ]
        }
      }
    ]
  },
  {
    id: '222',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',
        // @ts-expect-error
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
      isRevocable: false,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
    },
    subscriptionContracts: [
      {
        id: 'gid://shopify/SubscriptionContract/1111111111111',
        // @ts-expect-error
        status: 'ACTIVE',
        createdAt: '2022-07-06T10:00:00Z',
        lines: {
          nodes: [
            {
              variantTitle: 'Basic T-Shirt',
              // @ts-expect-error
              variantImage: {
                url: '/images/placeholders/t-shirt-man-right.png',
                height: 500,
                width: 500,
                altText: ''
              }
            }
          ]
        }
      },
      {
        id: 'gid://shopify/SubscriptionContract/000000000000',
        // @ts-expect-error
        status: 'EXPIRED',
        createdAt: '2021-07-06T10:00:00Z',
        lines: {
          nodes: [
            {
              variantTitle: 'Basic T-Shirt',
              // @ts-expect-error
              variantImage: {
                url: '/images/placeholders/t-shirt-man-right.png',
                height: 500,
                width: 500,
                altText: ''
              }
            }
          ]
        }
      }
    ]
  },
  {
    id: '333',
    instrument: {
      billingAddress: {
        address1: '156 Kent St',
        city: 'Brooklyn',
        country: 'United States',
        // @ts-expect-error
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
      isRevocable: false,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
    }
  }
];
