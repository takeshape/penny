export const paymentMethods = [
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
      firstDigits: 1234,
      isRevocable: false,
      lastDigits: 4242,
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
    },
    subscriptionContracts: [
      {
        id: 'gid://shopify/SubscriptionContract/1111111111111'
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
        countryCode: 'US',
        province: 'New York',
        provinceCode: 'NY',
        zip: '11222'
      },
      brand: 'Amex',
      expiresSoon: true,
      expiryYear: 2023,
      expiryMonth: 10,
      firstDigits: 1234,
      isRevocable: false,
      lastDigits: 4242,
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
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
      firstDigits: 1234,
      isRevocable: false,
      lastDigits: 4242,
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      source: 'Visa',
      virtualLastDigits: '5252'
    }
  }
];
