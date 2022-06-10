import { Product } from 'types/product';
import { ReviewHighlights, ReviewList } from 'types/review';

export const product: Product = {
  id: 'gid://shopify/Product/6857243132004',
  url: '/product/6857243132004',
  name: 'Basic Tee 6-Pack',
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  descriptionHtml:
    '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>\n<br data-mce-fragment="1">Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
  featuredImage: {
    height: 1088,
    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734',
    width: 840,
    altText: 'Image of Basic Tee 6-Pack'
  },
  images: [
    {
      height: 1088,
      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734',
      width: 840,
      altText: 'Image of Basic Tee 6-Pack'
    },
    {
      height: 512,
      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-tertiary-product-shot-01.jpg?v=1654530699',
      width: 768,
      altText: 'Image of Basic Tee 6-Pack'
    },
    {
      height: 512,
      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-tertiary-product-shot-02.jpg?v=1654530699',
      width: 768,
      altText: 'Image of Basic Tee 6-Pack'
    },
    {
      height: 1960,
      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-featured-product-shot.jpg?v=1654530699',
      width: 1536,
      altText: 'Image of Basic Tee 6-Pack'
    }
  ],
  priceMin: { amount: 19200, currencyCode: 'usd' },
  priceMax: { amount: 20000, currencyCode: 'usd' },
  variantsCount: 24,
  variants: [
    {
      id: 'gid://shopify/ProductVariant/40234670162020',
      name: 'XXS / Black',
      description: 'XXS / Black',
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 0,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XXS' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 0,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XXS' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 0,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XXS' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XS' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XS' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XS' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'S' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'S' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'S' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'M' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'M' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'M' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'L' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'L' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'L' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XL' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XL' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: 'XL' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '2XL' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '2XL' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '2XL' },
        { name: 'Color', value: 'White' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '3XL' },
        { name: 'Color', value: 'Black' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '3XL' },
        { name: 'Color', value: 'Gray' }
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
          currencyCode: 'usd'
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
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'usd'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      inventory: 5,
      inventoryPolicy: 'DENY',
      sku: '',
      options: [
        { name: 'Size', value: '3XL' },
        { name: 'Color', value: 'White' }
      ]
    }
  ],
  seo: {
    title: 'Basic Tee 6-Pack',
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
  },
  hasOneTimePurchaseOption: true,
  hasSubscriptionPurchaseOption: true,
  hasStock: true,
  options: [
    {
      name: 'Size',
      position: 1,
      id: 'gid://shopify/ProductOption/8766172332132',
      values: [
        { value: 'XXS', hasStock: false, name: 'XXS' },
        { value: 'XS', hasStock: true, name: 'XS' },
        { value: 'S', hasStock: true, name: 'S' },
        { value: 'M', hasStock: true, name: 'M' },
        { value: 'L', hasStock: true, name: 'L' },
        { value: 'XL', hasStock: true, name: 'XL' },
        { value: '2XL', hasStock: true, name: '2XL' },
        { value: '3XL', hasStock: true, name: '3XL' }
      ]
    },
    {
      name: 'Color',
      position: 2,
      id: 'gid://shopify/ProductOption/8766172364900',
      values: [
        { value: 'Black', hasStock: true, name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        { value: 'Gray', hasStock: true, name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { value: 'White', hasStock: true, name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' }
      ]
    }
  ]
};

export const reviewHighlights: ReviewHighlights = {
  stats: { average: 5, count: 1 },
  featured: [
    {
      id: 12482047,
      rating: 5,
      title: 'All good things come in 6-Packs',
      body: 'Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!',
      createdAt: '2022-06-07T18:14:06.000Z',
      timeAgo: '23 hours ago',
      reviewer: { firstName: 'Ben', lastName: 'Russel', verifiedBuyer: 'yes', address: '""', imageUrl: '' }
    }
  ]
};

export const reviews: ReviewList = {
  stats: { average: 4.5, count: 3 },
  currentPage: 1,
  totalPages: 1,
  perPage: 15,
  data: [
    {
      id: 12482047,
      rating: 5,
      title: 'This is the best white t-shirt out there',
      body: "<p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>",
      createdAt: '2022-06-07T18:14:06.000Z',
      timeAgo: '23 hours ago',
      reviewer: {
        firstName: 'Mark',
        lastName: 'Edwards',
        verifiedBuyer: 'yes',
        address: '""',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      id: 12482048,
      rating: 4,
      title: 'Adds the perfect variety to my wardrobe',
      body: '<p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>',
      createdAt: '2022-06-07T18:14:06.000Z',
      timeAgo: '23 hours ago',
      reviewer: {
        firstName: 'Blake',
        lastName: 'Reid',
        verifiedBuyer: 'yes',
        address: '""',
        imageUrl:
          'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
      }
    },
    {
      id: 12482049,
      rating: 5,
      title: 'All good things come in 6-Packs',
      body: '<p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>',
      createdAt: '2022-06-07T18:14:06.000Z',
      timeAgo: '23 hours ago',
      reviewer: {
        firstName: 'Ben',
        lastName: 'Russel',
        verifiedBuyer: 'yes',
        address: '""',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  ]
};
