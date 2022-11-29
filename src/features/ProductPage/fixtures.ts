import { ReviewList } from 'types/review';
import {
  ProductPageBreadcrumbs,
  ProductPageDetails,
  ProductPageOptions,
  ProductPagePolicies,
  ProductPageProduct,
  ProductPageRelatedProductsProduct,
  ProductPageReviewHighlights
} from './types';

export const productPagePolicies: ProductPagePolicies = {
  policies: [
    {
      name: 'Free delivery all year long',
      description:
        'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
      image: {
        url: 'https://images.takeshape.io/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/4ef478f9-5b12-4de0-b36e-b3f9ce45f5d2/icon-delivery-light.svg',
        altText: ''
      }
    },
    {
      name: '24/7 Customer Support',
      description:
        'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
      image: {
        url: 'https://images.takeshape.io/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/123113aa-b3b0-43d3-a763-6a4978a46300/icon-chat-light.svg',
        altText: ''
      }
    },
    {
      name: 'Fast Shopping Cart',
      description:
        "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
      image: {
        url: 'https://images.takeshape.io/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/b8e0c466-b919-493e-af5b-e9eb2c34e8c9/icon-fast-checkout-light.svg',
        altText: ''
      }
    },
    {
      name: 'Gift Cards',
      description:
        "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
      image: {
        url: 'https://images.takeshape.io/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/24995bd0-d030-4c31-bddc-7c8acf460855/icon-gift-card-light.svg',
        altText: ''
      }
    }
  ]
};

export const productPageDetails: ProductPageDetails = {
  text: {
    primary: 'The Fine <em>Details</em>',
    secondary:
      'Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during all-day adventures, long shifts at work, and tough travel schedules.'
  },
  details: [
    {
      image: {
        url: '/images/placeholders/random-tea-kettle.png',
        altText: 'Drawstring top with elastic loop closure and textured interior padding.'
      },
      description:
        'The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1,220 standard gumballs, or any combination of on-the-go treats that your heart desires. Yes, we did the math.'
    },
    {
      image: {
        url: '/images/placeholders/random-fork.png',
        altText: 'Front zipper pouch with included key ring.'
      },
      description:
        'Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.'
    }
  ]
};

export const productPageReviewsIoReviewList: ReviewList = {
  stats: { average: 4.6667, count: 3 },
  currentPage: 1,
  totalPages: 3,
  perPage: 15,
  items: [
    {
      id: '12535824',
      rating: 5,
      title: 'This is the best white t-shirt out there',
      body: "I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!",
      createdAt: '2022-06-08T18:15:10.000Z',
      reviewer: { name: 'Mark Edwards', imageUrl: null }
    },
    {
      id: '12535819',
      rating: 4,
      title: 'Adds the perfect variety to my wardrobe',
      body: 'I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.',
      createdAt: '2022-06-08T18:14:47.000Z',
      reviewer: { name: 'Blake Reid', imageUrl: null }
    },
    {
      id: '12482047',
      rating: 5,
      title: 'All good things come in 6-Packs',
      body: 'Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!',
      createdAt: '2022-06-07T18:14:06.000Z',
      reviewer: { name: 'Ben Russel', imageUrl: null }
    }
  ],
  hasNextPage: true,
  publisher: 'REVIEWS.io'
};

export const productPageReviewHighlights: ProductPageReviewHighlights = {
  stats: { average: 4.6667, count: 3 },
  featured: [
    {
      id: '12535824',
      rating: 5,
      title: 'This is the best white t-shirt out there',
      body: "I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!",
      createdAt: '2022-06-08T18:15:10.000Z',
      reviewer: { name: 'Mark Edwards', imageUrl: null }
    },
    {
      id: '12535819',
      rating: 4,
      title: 'Adds the perfect variety to my wardrobe',
      body: 'I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.',
      createdAt: '2022-06-08T18:14:47.000Z',
      reviewer: { name: 'Blake Reid', imageUrl: null }
    },
    {
      id: '12482047',
      rating: 5,
      title: 'All good things come in 6-Packs',
      body: 'Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!',
      createdAt: '2022-06-07T18:14:06.000Z',
      reviewer: { name: 'Ben Russel', imageUrl: null }
    }
  ]
};

export const productPageOptions: ProductPageOptions = {
  showDetails: true,
  showPolicies: true,
  showReviewsIo: true,
  showTrustpilot: true,
  showRelatedProducts: true,
  showBreadcrumbs: true,
  component: 'withImageGrid'
};

export const productPageProduct: ProductPageProduct = {
  id: 'gid://shopify/Product/6857243132004',
  handle: 'basic-tee-6-pack',
  url: '/product/basic-tee-6-pack',
  name: 'Basic Tee 6-Pack',
  tags: ['Basic Tee', 'Men', 'T-Shirt Multipack'],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  descriptionHtml:
    '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
  featuredImage: {
    height: 1024,
    url: '/images/placeholders/t-shirt-man-front.png',
    width: 1024,
    altText: 'Image of An Exceptional Tee for Men'
  },
  images: [
    {
      height: 1024,
      url: '/images/placeholders/t-shirt-man-front.png',
      width: 1024,
      altText: 'Image of An Exceptional Tee for Men'
    },
    {
      height: 1024,
      url: '/images/placeholders/t-shirt-man-right.png',
      width: 1024,
      altText: 'Image of An Exceptional Tee for Men'
    },
    {
      height: 1024,
      url: '/images/placeholders/t-shirt-man-right-close.png',
      width: 1024,
      altText: 'Image of An Exceptional Tee for Men'
    },
    {
      height: 1024,
      url: '/images/placeholders/t-shirt-man-left.png',
      width: 1024,
      altText: 'Image of An Exceptional Tee for Men'
    }
  ],
  priceMin: { amount: 19200, currencyCode: 'USD' },
  priceMax: { amount: 20000, currencyCode: 'USD' },
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670162020_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670162020',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 0,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670194788_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670194788',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 0,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670227556_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670227556',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: false,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 0,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670260324_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670260324',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 2,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670293092_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670293092',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670325860_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670325860',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670358628_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670358628',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670391396_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670391396',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 4,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670424164_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670424164',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670456932_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670456932',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670489700_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670489700',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670555236_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670555236',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670588004_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670588004',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670620772_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670620772',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670653540_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670653540',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670686308_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670686308',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670719076_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670719076',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670751844_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670751844',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670784612_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670784612',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670817380_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670817380',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 19200,
          amount: 19200,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670850148_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670850148',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 19200,
          amount: 17280,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 20000,
          amount: 20000,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670882916_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670882916',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 20000,
          amount: 20000,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670915684_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670915684',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
          intervalId: 'DAY_0',
          amountBeforeDiscount: 20000,
          amount: 20000,
          currencyCode: 'USD'
        },
        {
          id: 'gid://shopify/ProductVariant/40234670981220_DAY_30',
          name: '30 day subscription',
          merchandiseId: 'gid://shopify/ProductVariant/40234670981220',
          subscriptionId: 'gid://shopify/SellingPlan/3034021988',
          hasDiscount: true,
          discountType: 'PERCENTAGE',
          discountAmount: 10,
          interval: 'DAY',
          intervalCount: 30,
          intervalId: 'DAY_30',
          intervalMaxCycles: null,
          intervalMinCycles: null,
          intervalAnchor: null,
          amountBeforeDiscount: 20000,
          amount: 18000,
          currencyCode: 'USD'
        }
      ],
      available: true,
      image: { height: 480, url: '/images/default-product-image.webp', width: 480, altText: 'Default product image' },
      quantityAvailable: 5,
      currentlyNotInStock: false,
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
  variantOptions: [
    {
      name: 'Size',
      id: 'gid://shopify/ProductOption/8766172332132',
      values: [
        {
          value: 'XXS',
          name: 'XXS',
          hasStockFor: [],
          hasStock: false,
          description: 'The very smallest size'
        },
        {
          value: 'XS',
          name: 'XS',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'A fairly small size'
        },
        {
          value: 'S',
          name: 'S',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'A small size'
        },
        {
          value: 'M',
          name: 'M',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'Just about right for everybody'
        },
        {
          value: 'L',
          name: 'L',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'Getting bigger'
        },
        {
          value: 'XL',
          name: 'XL',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'And bigger...'
        },
        {
          value: '2XL',
          name: '2XL',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
          hasStock: true,
          description: 'Whoa, so big'
        },
        {
          value: '3XL',
          name: '3XL',
          hasStockFor: [
            {
              name: 'Color',
              value: 'Black'
            },
            {
              name: 'Color',
              value: 'Gray'
            },
            {
              name: 'Color',
              value: 'White'
            }
          ],
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
          hasStockFor: [
            {
              name: 'Size',
              value: 'S'
            },
            {
              name: 'Size',
              value: 'M'
            },
            {
              name: 'Size',
              value: 'L'
            },
            {
              name: 'Size',
              value: 'XL'
            },
            {
              name: 'Size',
              value: '2XL'
            },
            {
              name: 'Size',
              value: '3XL'
            }
          ],
          hasStock: true,
          class: 'bg-gray-900',
          selectedClass: 'ring-gray-900',
          colorBg: '#111827'
        },
        {
          value: 'Gray',
          name: 'Gray',
          hasStockFor: [
            {
              name: 'Size',
              value: 'XS'
            },
            {
              name: 'Size',
              value: 'S'
            },
            {
              name: 'Size',
              value: 'M'
            },
            {
              name: 'Size',
              value: 'L'
            },
            {
              name: 'Size',
              value: 'XL'
            },
            {
              name: 'Size',
              value: '2XL'
            },
            {
              name: 'Size',
              value: '3XL'
            }
          ],
          hasStock: true,
          class: 'bg-gray-200',
          selectedClass: 'ring-gray-400',
          colorBg: '#333333'
        },
        {
          value: 'White',
          name: 'White',
          hasStockFor: [
            {
              name: 'Size',
              value: 'XS'
            },
            {
              name: 'Size',
              value: 'S'
            },
            {
              name: 'Size',
              value: 'M'
            },
            {
              name: 'Size',
              value: 'L'
            },
            {
              name: 'Size',
              value: 'XL'
            },
            {
              name: 'Size',
              value: '2XL'
            },
            {
              name: 'Size',
              value: '3XL'
            }
          ],
          hasStock: true,
          class: 'bg-white',
          selectedClass: 'ring-gray-400',
          colorBg: '#ffffff'
        }
      ]
    }
  ]
};

export const productPageBreadcrumbs: ProductPageBreadcrumbs = [
  {
    id: 'gid://shopify/Collection/270097776740',
    name: 'Men',
    href: '/collection/men'
  },
  {
    id: 'gid://shopify/Collection/270340980836',
    name: 'Basic Tees',
    href: '/collection/mens-basic-tees'
  }
];

export const productPageRelatedProducts: ProductPageRelatedProductsProduct[] = [
  {
    id: 'gid://shopify/Product/6827068850276',
    handle: 'elegant-blouse',
    url: '/product/elegant-blouse',
    name: 'Elegant Blouse',
    description: 'A blouse for people on the go.',
    descriptionHtml: 'A blouse for people on the go.',
    featuredImage: {
      height: 1024,
      url: '/images/placeholders/t-shirt-woman-front.png',
      width: 1024,
      altText: 'Image of Elegant Blouse'
    },
    priceMin: {
      amount: 3000,
      currencyCode: 'USD'
    },
    priceMax: {
      amount: 3000,
      currencyCode: 'USD'
    },
    variantsCount: 6,
    hasOneTimePurchaseOption: true,
    hasSubscriptionPurchaseOption: false,
    hasStock: true,
    variantOptions: [
      {
        name: 'Size',
        id: 'gid://shopify/ProductOption/8728583471204',
        values: [
          {
            value: 'S',
            name: 'S',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'A small size'
          },
          {
            value: 'M',
            name: 'M',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'Just about right for everybody'
          },
          {
            value: 'L',
            name: 'L',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'Getting bigger'
          }
        ]
      },
      {
        name: 'Color',
        id: 'gid://shopify/ProductOption/8766561222756',
        values: [
          {
            value: 'Black',
            name: 'Black',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              }
            ],
            class: 'bg-gray-900',
            selectedClass: 'ring-gray-900',
            colorBg: '#111827'
          },
          {
            value: 'White',
            name: 'White',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              }
            ],
            class: 'bg-white',
            selectedClass: 'ring-gray-400',
            colorBg: '#ffffff'
          }
        ]
      }
    ]
  },
  {
    id: 'gid://shopify/Product/6857243132004',
    handle: 'basic-tee-6-pack',
    url: '/product/basic-tee-6-pack',
    name: 'Basic Tee 6-Pack',
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    descriptionHtml:
      '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
    featuredImage: {
      height: 1024,
      url: '/images/placeholders/t-shirt-woman-front.png',
      width: 1024,
      altText: 'A bunch of shirts.'
    },
    priceMin: {
      amount: 19200,
      currencyCode: 'USD'
    },
    priceMax: {
      amount: 20000,
      currencyCode: 'USD'
    },
    variantsCount: 24,
    hasOneTimePurchaseOption: true,
    hasSubscriptionPurchaseOption: true,
    hasStock: true,
    variantOptions: [
      {
        name: 'Size',
        id: 'gid://shopify/ProductOption/8766172332132',
        values: [
          {
            value: 'XXS',
            name: 'XXS',
            hasStockFor: [],
            hasStock: false,
            description: 'The very smallest size'
          },
          {
            value: 'XS',
            name: 'XS',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'A fairly small size'
          },
          {
            value: 'S',
            name: 'S',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'A small size'
          },
          {
            value: 'M',
            name: 'M',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'Just about right for everybody'
          },
          {
            value: 'L',
            name: 'L',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'Getting bigger'
          },
          {
            value: 'XL',
            name: 'XL',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'And bigger...'
          },
          {
            value: '2XL',
            name: '2XL',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            hasStock: true,
            description: 'Whoa, so big'
          },
          {
            value: '3XL',
            name: '3XL',
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Gray'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
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
            hasStockFor: [
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              },
              {
                name: 'Size',
                value: 'XL'
              },
              {
                name: 'Size',
                value: '2XL'
              },
              {
                name: 'Size',
                value: '3XL'
              }
            ],
            hasStock: true,
            class: 'bg-gray-900',
            selectedClass: 'ring-gray-900',
            colorBg: '#111827'
          },
          {
            value: 'Gray',
            name: 'Gray',
            hasStockFor: [
              {
                name: 'Size',
                value: 'XS'
              },
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              },
              {
                name: 'Size',
                value: 'XL'
              },
              {
                name: 'Size',
                value: '2XL'
              },
              {
                name: 'Size',
                value: '3XL'
              }
            ],
            hasStock: true,
            class: 'bg-gray-200',
            selectedClass: 'ring-gray-400',
            colorBg: '#333333'
          },
          {
            value: 'White',
            name: 'White',
            hasStockFor: [
              {
                name: 'Size',
                value: 'XS'
              },
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              },
              {
                name: 'Size',
                value: 'XL'
              },
              {
                name: 'Size',
                value: '2XL'
              },
              {
                name: 'Size',
                value: '3XL'
              }
            ],
            hasStock: true,
            class: 'bg-white',
            selectedClass: 'ring-gray-400',
            colorBg: '#ffffff'
          }
        ]
      }
    ]
  },
  {
    id: 'gid://shopify/Product/6827069505636',
    handle: 'mesh-gym-shorts',
    url: '/product/mesh-gym-shorts',
    name: 'Mesh Gym Shorts',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    descriptionHtml:
      '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
    featuredImage: {
      height: 1024,
      url: '/images/placeholders/random-tea-kettle.png',
      width: 1024,
      altText: 'Image of Mesh Gym Shorts'
    },
    priceMin: {
      amount: 2900,
      currencyCode: 'USD'
    },
    priceMax: {
      amount: 3100,
      currencyCode: 'USD'
    },
    variantsCount: 9,
    hasOneTimePurchaseOption: false,
    hasSubscriptionPurchaseOption: true,
    hasStock: true,
    variantOptions: [
      {
        name: 'Size',
        id: 'gid://shopify/ProductOption/8728583471204',
        values: [
          {
            value: 'S',
            name: 'S',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'A small size'
          },
          {
            value: 'M',
            name: 'M',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'Just about right for everybody'
          },
          {
            value: 'L',
            name: 'L',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'White'
              }
            ],
            description: 'Getting bigger'
          }
        ]
      },
      {
        name: 'Color',
        id: 'gid://shopify/ProductOption/8766561222756',
        values: [
          {
            value: 'Black',
            name: 'Black',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              }
            ],
            class: 'bg-gray-900',
            selectedClass: 'ring-gray-900',
            colorBg: '#111827'
          },
          {
            value: 'White',
            name: 'White',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'S'
              },
              {
                name: 'Size',
                value: 'M'
              },
              {
                name: 'Size',
                value: 'L'
              }
            ],
            class: 'bg-white',
            selectedClass: 'ring-gray-400',
            colorBg: '#ffffff'
          }
        ]
      }
    ]
  },
  {
    id: 'gid://shopify/Product/6860463734884',
    handle: 'basic-tee',
    url: '/product/basic-tee',
    name: 'Basic Tee',
    description:
      'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
    descriptionHtml:
      '<p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>\n<div>\n<div><span>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</span></div>\n</div>',
    featuredImage: {
      height: 1024,
      url: '/images/placeholders/t-shirt-woman-front.png',
      width: 1024,
      altText: 'Image of Basic Tee'
    },
    priceMin: {
      amount: 3500,
      currencyCode: 'USD'
    },
    priceMax: {
      amount: 3500,
      currencyCode: 'USD'
    },
    variantsCount: 12,
    hasOneTimePurchaseOption: true,
    hasSubscriptionPurchaseOption: false,
    hasStock: true,
    variantOptions: [
      {
        name: 'Size',
        id: 'gid://shopify/ProductOption/8770971140196',
        values: [
          {
            value: 'XXS',
            name: 'XXS',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'The very smallest size'
          },
          {
            value: 'XS',
            name: 'XS',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'A fairly small size'
          },
          {
            value: 'S',
            name: 'S',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'A small size'
          },
          {
            value: 'M',
            name: 'M',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'Just about right for everybody'
          },
          {
            value: 'L',
            name: 'L',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'Getting bigger'
          },
          {
            value: 'XL',
            name: 'XL',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Color',
                value: 'Black'
              },
              {
                name: 'Color',
                value: 'Heather Gray'
              }
            ],
            description: 'And bigger...'
          }
        ]
      },
      {
        name: 'Color',
        id: 'gid://shopify/ProductOption/8770971172964',
        values: [
          {
            value: 'Black',
            name: 'Black',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'XS'
              },
              {
                name: 'Size',
                value: 'XL'
              }
            ],
            class: 'bg-gray-900',
            selectedClass: 'ring-gray-900',
            colorBg: '#111827'
          },
          {
            value: 'Heather Gray',
            name: 'Heather Grey',
            hasStock: null,
            hasStockFor: [
              {
                name: 'Size',
                value: 'XS'
              },
              {
                name: 'Size',
                value: 'XL'
              }
            ],
            bgColor: 'bg-gray-400',
            selectedColor: 'ring-gray-400',
            colorBg: '#777777'
          }
        ]
      }
    ]
  }
];

export const trustpilotPageData: ReviewList = {
  stats: {
    average: 5,
    count: 3
  },
  perPage: 3,
  totalPages: 2,
  items: [
    {
      id: 'id',
      rating: 5,
      title: 'Pretty good, I wish someone would feed me kibble though. I am a dog.',
      body: 'Pretty good, I wish someone would feed me kibble though. I am a dog.',
      createdAt: '2022-06-08T18:14:47.000Z',
      reviewer: {
        name: 'Rye',
        imageUrl: null
      }
    },
    {
      id: 'id',
      createdAt: '2022-06-08T18:14:47.000Z',
      rating: 1,
      title: 'It never arrived even though I ordered it 2 months ago. I am very upset.',
      body: 'It never arrived even though I ordered it 2 months ago. I am very upset.',
      reviewer: {
        name: 'Frito',
        imageUrl: null
      }
    },
    {
      id: 'id',
      createdAt: '2022-06-08T18:14:47.000Z',
      rating: 4,
      title: 'I am going to escape again. I am a cat.',
      body: 'I am going to escape again. I am a cat.',
      reviewer: {
        name: 'Tuna',
        imageUrl: null
      }
    }
  ],
  hasNextPage: true,
  publisher: 'Trustpilot'
};

export const trustpilotPageDataEmpty: ReviewList = {
  stats: {
    average: 0,
    count: 0
  },
  perPage: 0,
  totalPages: 0,
  items: [],
  hasNextPage: false,
  publisher: 'Trustpilot'
};
