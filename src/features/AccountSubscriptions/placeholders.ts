import { Subscription } from './types';

export const subscriptions: Subscription[] = [
  {
    status: 'active',
    number: '111',
    href: '#',
    createdDate: 'Jul 6, 2022',
    createdDatetime: '2022-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$210.00',
    frequency: '30 day(s)',
    frequencyOptions: ['30 day(s)', '60 day(s)'],
    nextChargeDate: 'August 12, 2022',
    shippingAddress: {
      name: 'Michael Shick',
      line1: '156 Kent St',
      line2: 'Apt 2',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11222'
    },
    // This will come from Shopify https://shopify.dev/api/admin-graphql/2022-07/objects/CustomerPaymentMethod
    paymentMethod: {
      instrument: {
        brand: 'Visa',
        expiresSoon: false,
        expiryMonth: 10,
        expiryYear: 2023,
        lastDigits: '4242',
        maskedNumber: '••••4242',
        name: 'Michael Shick'
      }
    },
    products: [
      {
        quantity: 3,
        id: '1',
        handle: 'basic-tee-6-pack',
        variant: 'Black / S',
        name: 'Basic T-Shirt',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
        fulfillment: {
          status: 'out-for-delivery',
          date: 'July 6, 2022',
          datetime: '2022-07-06'
        },
        nextFulfillment: {
          status: 'skipped',
          date: 'August 6, 2022',
          datetime: '2022-08-6'
        },
        variantOptions: {
          Color: 'Black',
          Size: 'XS'
        }
      }
    ],
    orders: [
      {
        id: 'yyy',
        subscriptionId: '111',
        fulfillmentDate: '2022-06-19T10:00:00Z',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        status: 'delivered',
        statusAt: '2022-06-19',
        deliveredAt: '2022-06-21T10:00:00Z',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 3
          }
        ]
      },
      {
        id: 'zzz',
        subscriptionId: '111',
        fulfillmentDate: '2022-07-19T10:00:00Z',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        status: 'delivered',
        statusAt: '2022-07-19',
        deliveredAt: '2022-07-21T10:00:00Z',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 3
          }
        ]
      },
      {
        id: 'aaa',
        subscriptionId: '111',
        fulfillmentDate: '2022-08-19T10:00:00Z',
        status: 'upcoming',
        statusAt: '2022-07-19',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 3
          }
        ]
      },
      {
        id: 'bbb',
        subscriptionId: '111',
        fulfillmentDate: '2022-09-19T10:00:00Z',
        status: 'skipped',
        statusAt: '2022-07-19',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 3
          }
        ]
      },
      {
        id: 'ccc',
        subscriptionId: '111',
        fulfillmentDate: '2022-10-19T10:00:00Z',
        status: 'upcoming',
        statusAt: '2022-07-19',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 3
          }
        ]
      }
    ]
  },
  {
    status: 'active',
    number: '222',
    href: '#',
    createdDate: 'Jun 12, 2022',
    createdDatetime: '2022-06-12',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$160.00',
    frequency: '30 day(s)',
    frequencyOptions: ['30 day(s)', '60 day(s)'],
    nextChargeDate: 'August 12, 2022',
    shippingAddress: {
      name: 'Michael Shick',
      line1: '156 Kent St',
      line2: 'Apt 2',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11222'
    },
    paymentMethod: {
      instrument: {
        brand: 'Visa',
        expiresSoon: false,
        expiryMonth: 10,
        expiryYear: 2023,
        lastDigits: '4242',
        maskedNumber: '••••4242',
        name: 'Michael Shick'
      }
    },
    products: [
      {
        id: '1',
        handle: 'basic-tee-6-pack',
        quantity: 1,
        variant: 'Black / S',
        name: 'Basic T-Shirt',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
        fulfillment: {
          status: 'delivered',
          date: 'July 12, 2022',
          datetime: '2022-07-12'
        },
        nextFulfillment: {
          status: 'scheduled',
          date: 'August 12, 2021',
          datetime: '2022-08-12'
        },
        variantOptions: {
          Color: 'White',
          Size: 'LG'
        }
      }
    ],
    orders: [
      {
        id: 'zzz',
        subscriptionId: '111',
        fulfillmentDate: '2022-07-12T10:00:00Z',
        status: 'delivered',
        statusAt: '2022-07-19',
        deliveredAt: '2022-07-14T10:00:00Z',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            quantity: 1,
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.'
          }
        ]
      },
      {
        id: 'aaa',
        subscriptionId: '222',
        fulfillmentDate: '2022-08-12T10:00:00Z',
        statusAt: '2022-07-19',
        status: 'upcoming',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            quantity: 1,
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.'
          }
        ]
      },
      {
        id: 'bbb',
        subscriptionId: '222',
        fulfillmentDate: '2022-09-12T10:00:00Z',
        statusAt: '2022-07-19',
        status: 'upcoming',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 1
          }
        ]
      },
      {
        id: 'ccc',
        subscriptionId: '222',
        fulfillmentDate: '2022-10-12T10:00:00Z',
        statusAt: '2022-07-19',
        status: 'upcoming',
        email: 'michael@takeshape.io',
        phone: '919-360-0095',
        shippingAddress: {
          name: 'Michael Shick',
          line1: '156 Kent St',
          line2: 'Apt 2',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11222'
        },
        products: [
          {
            id: '1',
            handle: 'basic-tee-6-pack',
            variant: 'Black / S',
            name: 'Basic T-Shirt',
            description:
              'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
            href: '#',
            price: '$70.00',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            imageAlt:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            quantity: 1
          }
        ]
      }
    ]
  }
];
