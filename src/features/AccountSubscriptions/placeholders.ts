import { ProductVariant } from 'types/product';
import { Subscription } from './types';

const variants: ProductVariant[] = [
  {
    id: 'gid://shopify/ProductVariant/40234670162020',
    name: 'XXS / Black',
    description: 'A very very tiny version.',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670162020_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670162020',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670162020_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670162020',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670162020_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670162020',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: false,
    quantityAvailable: 0,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XXS'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670194788',
    name: 'XXS / Gray',
    description: 'XXS / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670194788_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670194788',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670194788_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670194788',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670194788_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670194788',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: false,
    quantityAvailable: 0,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XXS'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670227556',
    name: 'XXS / White',
    description: 'XXS / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670227556_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670227556',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670227556_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670227556',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670227556_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670227556',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: false,
    quantityAvailable: 0,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XXS'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670260324',
    name: 'XS / Black',
    description: 'XS / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670260324_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670260324',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670260324_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670260324',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670260324_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670260324',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 2,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XS'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670293092',
    name: 'XS / Gray',
    description: 'XS / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670293092_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670293092',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670293092_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670293092',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670293092_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670293092',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XS'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670325860',
    name: 'XS / White',
    description: 'XS / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670325860_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670325860',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670325860_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670325860',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670325860_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670325860',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XS'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670358628',
    name: 'S / Black',
    description: 'S / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670358628_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670358628',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670358628_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670358628',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670358628_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670358628',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'S'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670391396',
    name: 'S / Gray',
    description: 'S / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670391396_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670391396',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670391396_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670391396',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670391396_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670391396',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 4,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'S'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670424164',
    name: 'S / White',
    description: 'S / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670424164_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670424164',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670424164_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670424164',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670424164_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670424164',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'S'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670456932',
    name: 'M / Black',
    description: 'M / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670456932_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670456932',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670456932_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670456932',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670456932_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670456932',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'M'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670489700',
    name: 'M / Gray',
    description: 'M / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670489700_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670489700',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670489700_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670489700',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670489700_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670489700',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'M'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670555236',
    name: 'M / White',
    description: 'M / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670555236_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670555236',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670555236_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670555236',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670555236_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670555236',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'M'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670588004',
    name: 'L / Black',
    description: 'L / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670588004_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670588004',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670588004_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670588004',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670588004_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670588004',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'L'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670620772',
    name: 'L / Gray',
    description: 'L / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670620772_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670620772',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670620772_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670620772',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670620772_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670620772',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'L'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670653540',
    name: 'L / White',
    description: 'L / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670653540_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670653540',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670653540_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670653540',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670653540_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670653540',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'L'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670686308',
    name: 'XL / Black',
    description: 'XL / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670686308_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670686308',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670686308_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670686308',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670686308_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670686308',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XL'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670719076',
    name: 'XL / Gray',
    description: 'XL / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670719076_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670719076',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670719076_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670719076',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670719076_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670719076',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XL'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670751844',
    name: 'XL / White',
    description: 'XL / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670751844_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670751844',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670751844_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670751844',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670751844_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670751844',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: 'XL'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670784612',
    name: '2XL / Black',
    description: '2XL / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670784612_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670784612',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670784612_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670784612',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670784612_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670784612',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '2XL'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670817380',
    name: '2XL / Gray',
    description: '2XL / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670817380_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670817380',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670817380_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670817380',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670817380_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670817380',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '2XL'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670850148',
    name: '2XL / White',
    description: '2XL / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670850148_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670850148',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 19200,
        amount: 19200,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670850148_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670850148',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670850148_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670850148',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 19200,
        amount: 17280,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '2XL'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670882916',
    name: '3XL / Black',
    description: '3XL / Black',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670882916_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670882916',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 20000,
        amount: 20000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670882916_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670882916',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670882916_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670882916',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '3XL'
      },
      {
        name: 'Color',
        value: 'Black'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670915684',
    name: '3XL / Gray',
    description: '3XL / Gray',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670915684_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670915684',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 20000,
        amount: 20000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670915684_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670915684',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670915684_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670915684',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '3XL'
      },
      {
        name: 'Color',
        value: 'Gray'
      }
    ]
  },
  {
    id: 'gid://shopify/ProductVariant/40234670981220',
    name: '3XL / White',
    description: '3XL / White',
    prices: [
      {
        id: 'gid://shopify/ProductVariant/40234670981220_DAY_0',
        name: 'One-time purchase',
        merchandiseId: 'gid://shopify/ProductVariant/40234670981220',
        hasDiscount: false,
        discountAmount: 0,
        discountType: 'PERCENTAGE',
        interval: 'DAY',
        intervalCount: 0,
        amountBeforeDiscount: 20000,
        amount: 20000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670981220_DAY_30',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670981220',
        subscriptionId: 'gid://shopify/SellingPlan/3034021988',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 30,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      },
      {
        id: 'gid://shopify/ProductVariant/40234670981220_DAY_90',
        name: 'Subscribe & Save',
        merchandiseId: 'gid://shopify/ProductVariant/40234670981220',
        subscriptionId: 'gid://shopify/SellingPlan/3073048676',
        hasDiscount: true,
        discountType: 'PERCENTAGE',
        discountAmount: 10,
        interval: 'DAY',
        intervalCount: 90,
        amountBeforeDiscount: 20000,
        amount: 18000,
        currencyCode: 'USD'
      }
    ],
    available: true,
    quantityAvailable: 5,
    currentlyNotInStock: false,
    sku: '',
    options: [
      {
        name: 'Size',
        value: '3XL'
      },
      {
        name: 'Color',
        value: 'White'
      }
    ]
  }
];

export const subscriptions: Subscription[] = [
  {
    status: 'active',
    number: '111',
    href: '#',
    createdAt: '2022-07-06T10:00:00Z',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$210.00',
    deliverySchedule: {
      interval: 'DAY',
      intervalCount: 30
    },
    deliveryScheduleOptions: [
      {
        interval: 'DAY',
        intervalCount: 30
      },
      {
        interval: 'DAY',
        intervalCount: 60
      }
    ],
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
    nextOrder: {
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
      product: {
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',

        id: '1',
        handle: 'basic-tee-6-pack',
        name: 'Basic T-Shirt 6 Pack',
        quantity: 3,
        featuredImage: {
          url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
          altText:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
          height: 996,
          width: 996
        },
        variantName: 'Black / S'
      }
    },
    product: {
      description:
        'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
      href: '#',
      price: '$70.00',
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

      id: '1',
      handle: 'basic-tee-6-pack',
      name: 'Basic T-Shirt 6 Pack',
      quantity: 3,
      featuredImage: {
        url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        altText:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
        height: 996,
        width: 996
      },
      variants,
      variantName: 'Black / S',
      variantSelections: [
        {
          name: 'Color',
          value: 'Black'
        },
        {
          name: 'Size',
          value: 'XS'
        }
      ],
      variantOptions: [
        {
          name: 'Size',
          id: 'gid://shopify/ProductOption/8766172332132',
          values: [
            {
              value: 'XXS',
              name: 'XXS',
              hasStock: false,
              description: 'The very smallest size'
            },
            {
              value: 'XS',
              name: 'XS',
              hasStock: true,
              description: 'A fairly small size'
            },
            {
              value: 'S',
              name: 'S',
              hasStock: true,
              description: 'A small size'
            },
            {
              value: 'M',
              name: 'M',
              hasStock: true,
              description: 'Just about right for everybody'
            },
            {
              value: 'L',
              name: 'L',
              hasStock: true,
              description: 'Getting bigger'
            },
            {
              value: 'XL',
              name: 'XL',
              hasStock: true,
              description: 'And bigger...'
            },
            {
              value: '2XL',
              name: '2XL',
              hasStock: true,
              description: 'Whoa, so big'
            },
            {
              value: '3XL',
              name: '3XL',
              hasStock: true,
              description: 'No way!'
            }
          ]
        },
        {
          name: 'Color',
          id: 'gid://shopify/ProductOption/8766172364900',
          values: [
            {
              value: 'Black',
              name: 'Black',
              hasStock: true,
              class: 'bg-gray-900',
              selectedClass: 'ring-gray-900',
              colorBg: '#111827'
            },
            {
              value: 'Gray',
              name: 'Gray',
              hasStock: true,
              class: 'bg-gray-200',
              selectedClass: 'ring-gray-400',
              colorBg: '#333333'
            },
            {
              value: 'White',
              name: 'White',
              hasStock: true,
              class: 'bg-white',
              selectedClass: 'ring-gray-400',
              colorBg: '#ffffff'
            }
          ]
        }
      ]
    },
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '1',
          handle: 'basic-tee-6-pack',
          name: 'Basic T-Shirt 6 Pack',
          quantity: 3,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'Black / S'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '1',
          handle: 'basic-tee-6-pack',
          name: 'Basic T-Shirt 6 Pack',
          quantity: 3,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'Black / S'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '1',
          handle: 'basic-tee-6-pack',
          name: 'Basic T-Shirt 6 Pack',
          quantity: 3,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'Black / S'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '1',
          handle: 'basic-tee-6-pack',
          name: 'Basic T-Shirt 6 Pack',
          quantity: 3,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'Black / S'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '1',
          handle: 'basic-tee-6-pack',
          name: 'Basic T-Shirt 6 Pack',
          quantity: 3,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'Black / S'
        }
      }
    ]
  },
  {
    status: 'active',
    number: '222',
    href: '#',
    createdAt: '2022-06-06T10:00:00Z',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$160.00',
    deliverySchedule: {
      interval: 'DAY',
      intervalCount: 30
    },
    deliveryScheduleOptions: [
      {
        interval: 'MONTH',
        intervalCount: 1
      },
      {
        interval: 'MONTH',
        intervalCount: 3
      },
      {
        interval: 'MONTH',
        intervalCount: 6
      }
    ],
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
    nextOrder: {
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
      product: {
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',

        id: '2',
        handle: 'basic-tee',
        name: 'Basic T-Shirt',
        quantity: 1,
        featuredImage: {
          url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
          altText:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
          height: 996,
          width: 996
        },
        variantName: 'White / L'
      }
    },
    product: {
      description:
        'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
      href: '#',
      price: '$80.00',
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

      id: '2',
      handle: 'basic-tee',
      name: 'Basic T-Shirt',
      quantity: 1,
      featuredImage: {
        url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        altText:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
        height: 996,
        width: 996
      },
      variants,
      variantName: 'White / L',
      variantSelections: [
        {
          name: 'Color',
          value: 'White'
        },
        {
          name: 'Size',
          value: 'L'
        }
      ],
      variantOptions: [
        {
          name: 'Size',
          id: 'gid://shopify/ProductOption/8766172332132',
          values: [
            {
              value: 'XXS',
              name: 'XXS',
              hasStock: false,
              description: 'The very smallest size'
            },
            {
              value: 'XS',
              name: 'XS',
              hasStock: true,
              description: 'A fairly small size'
            },
            {
              value: 'S',
              name: 'S',
              hasStock: true,
              description: 'A small size'
            },
            {
              value: 'M',
              name: 'M',
              hasStock: true,
              description: 'Just about right for everybody'
            },
            {
              value: 'L',
              name: 'L',
              hasStock: true,
              description: 'Getting bigger'
            },
            {
              value: 'XL',
              name: 'XL',
              hasStock: true,
              description: 'And bigger...'
            },
            {
              value: '2XL',
              name: '2XL',
              hasStock: true,
              description: 'Whoa, so big'
            },
            {
              value: '3XL',
              name: '3XL',
              hasStock: true,
              description: 'No way!'
            }
          ]
        },
        {
          name: 'Color',
          id: 'gid://shopify/ProductOption/8766172364900',
          values: [
            {
              value: 'Black',
              name: 'Black',
              hasStock: true,
              class: 'bg-gray-900',
              selectedClass: 'ring-gray-900',
              colorBg: '#111827'
            },
            {
              value: 'Gray',
              name: 'Gray',
              hasStock: true,
              class: 'bg-gray-200',
              selectedClass: 'ring-gray-400',
              colorBg: '#333333'
            },
            {
              value: 'White',
              name: 'White',
              hasStock: true,
              class: 'bg-white',
              selectedClass: 'ring-gray-400',
              colorBg: '#ffffff'
            }
          ]
        }
      ]
    },
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '2',
          handle: 'basic-tee',
          name: 'Basic T-Shirt',
          quantity: 1,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'White / LG'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '2',
          handle: 'basic-tee',
          name: 'Basic T-Shirt',
          quantity: 1,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'White / L'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '2',
          handle: 'basic-tee',
          name: 'Basic T-Shirt',
          quantity: 1,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'White / LG'
        }
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
        product: {
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          href: '#',
          price: '$70.00',

          id: '2',
          handle: 'basic-tee',
          name: 'Basic T-Shirt',
          quantity: 1,
          featuredImage: {
            url: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            altText:
              'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
            height: 996,
            width: 996
          },
          variantName: 'White / LG'
        }
      }
    ]
  }
];
