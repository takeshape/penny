import { StorefrontCollection } from './types';

export const storefrontCollection: StorefrontCollection = {
  id: 'gid://shopify/Collection/268220006500',
  url: '/collection/268220006500/home-page',
  handle: 'frontpage',
  name: 'Home page',
  description: '',
  descriptionHtml: '',
  items: [
    {
      product: {
        id: 'gid://shopify/Product/6827068850276',
        handle: 'elegant-blouse',
        url: '/product/elegant-blouse',
        name: 'Elegant Blouse',
        description: 'A blouse for people on the go.',
        descriptionHtml: 'A blouse for people on the go.',
        featuredImage: {
          height: 1058,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/blouse.jpg?v=1650570192',
          width: 820,
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
        options: [
          {
            name: 'Size',
            position: 1,
            id: 'gid://shopify/ProductOption/8728583471204',
            values: [
              {
                value: 'S',
                name: 'S',
                hasStock: null,
                description: 'A small size'
              },
              {
                value: 'M',
                name: 'M',
                hasStock: null,
                description: 'Just about right for everybody'
              },
              {
                value: 'L',
                name: 'L',
                hasStock: null,
                description: 'Getting bigger'
              }
            ]
          },
          {
            name: 'Color',
            position: 2,
            id: 'gid://shopify/ProductOption/8766561222756',
            values: [
              {
                value: 'Black',
                name: 'Black',
                hasStock: null,
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900',
                colorBg: '#111827'
              },
              {
                value: 'White',
                name: 'White',
                hasStock: null,
                class: 'bg-white',
                selectedClass: 'ring-gray-400',
                colorBg: '#ffffff'
              }
            ]
          }
        ]
      }
    },
    {
      product: {
        id: 'gid://shopify/Product/6857243132004',
        handle: 'basic-tee-6-pack',
        url: '/product/basic-tee-6-pack',
        name: 'Basic Tee 6-Pack',
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        descriptionHtml:
          '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
        featuredImage: {
          height: 1088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734',
          width: 840,
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
        options: [
          {
            name: 'Size',
            position: 1,
            id: 'gid://shopify/ProductOption/8766172332132',
            values: [
              {
                value: 'XXS',
                name: 'XXS',
                hasStock: null,
                description: 'The very smallest size'
              },
              {
                value: 'XS',
                name: 'XS',
                hasStock: null,
                description: 'A fairly small size'
              },
              {
                value: 'S',
                name: 'S',
                hasStock: null,
                description: 'A small size'
              },
              {
                value: 'M',
                name: 'M',
                hasStock: null,
                description: 'Just about right for everybody'
              },
              {
                value: 'L',
                name: 'L',
                hasStock: null,
                description: 'Getting bigger'
              },
              {
                value: 'XL',
                name: 'XL',
                hasStock: null,
                description: 'And bigger...'
              },
              {
                value: '2XL',
                name: '2XL',
                hasStock: null,
                description: 'Whoa, so big'
              },
              {
                value: '3XL',
                name: '3XL',
                hasStock: null,
                description: 'No way!'
              }
            ]
          },
          {
            name: 'Color',
            position: 2,
            id: 'gid://shopify/ProductOption/8766172364900',
            values: [
              {
                value: 'Black',
                name: 'Black',
                hasStock: null,
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900',
                colorBg: '#111827'
              },
              {
                value: 'Gray',
                name: 'Gray',
                hasStock: null,
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400',
                colorBg: '#333333'
              },
              {
                value: 'White',
                name: 'White',
                hasStock: null,
                class: 'bg-white',
                selectedClass: 'ring-gray-400',
                colorBg: '#ffffff'
              }
            ]
          }
        ]
      }
    },
    {
      product: {
        id: 'gid://shopify/Product/6827069505636',
        handle: 'mesh-gym-shorts',
        url: '/product/mesh-gym-shorts',
        name: 'Mesh Gym Shorts',
        description:
          "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        descriptionHtml:
          '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
        featuredImage: {
          height: 791,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316',
          width: 860,
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
        options: [
          {
            name: 'Color',
            position: 1,
            id: 'gid://shopify/ProductOption/8728584126564',
            values: [
              {
                value: 'Black',
                name: 'Black',
                hasStock: null,
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900',
                colorBg: '#111827'
              },
              {
                value: 'White',
                name: 'White',
                hasStock: null,
                class: 'bg-white',
                selectedClass: 'ring-gray-400',
                colorBg: '#ffffff'
              },
              {
                value: 'Red',
                name: 'Red',
                hasStock: null,
                class: 'bg-red-500',
                selectedClass: 'ring-red-300',
                colorBg: 'red'
              }
            ]
          },
          {
            name: 'Size',
            position: 2,
            id: 'gid://shopify/ProductOption/8749149356132',
            values: [
              {
                value: 'S',
                name: 'S',
                hasStock: null,
                description: 'A small size'
              },
              {
                value: 'M',
                name: 'M',
                hasStock: null,
                description: 'Just about right for everybody'
              },
              {
                value: 'L',
                name: 'L',
                hasStock: null,
                description: 'Getting bigger'
              }
            ]
          }
        ]
      }
    },
    {
      product: {
        id: 'gid://shopify/Product/6860463734884',
        handle: 'basic-tee',
        url: '/product/basic-tee',
        name: 'Basic Tee',
        description:
          'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
        descriptionHtml:
          '<p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>\n<div>\n<div><span>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</span></div>\n</div>',
        featuredImage: {
          height: 2088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-featured-product-shot.jpg?v=1654790331',
          width: 1392,
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
        options: [
          {
            name: 'Size',
            position: 1,
            id: 'gid://shopify/ProductOption/8770971140196',
            values: [
              {
                value: 'XXS',
                name: 'XXS',
                hasStock: null,
                description: 'The very smallest size'
              },
              {
                value: 'XS',
                name: 'XS',
                hasStock: null,
                description: 'A fairly small size'
              },
              {
                value: 'S',
                name: 'S',
                hasStock: null,
                description: 'A small size'
              },
              {
                value: 'M',
                name: 'M',
                hasStock: null,
                description: 'Just about right for everybody'
              },
              {
                value: 'L',
                name: 'L',
                hasStock: null,
                description: 'Getting bigger'
              },
              {
                value: 'XL',
                name: 'XL',
                hasStock: null,
                description: 'And bigger...'
              }
            ]
          },
          {
            name: 'Color',
            position: 2,
            id: 'gid://shopify/ProductOption/8770971172964',
            values: [
              {
                value: 'Black',
                name: 'Black',
                hasStock: null,
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900',
                colorBg: '#111827'
              },
              {
                value: 'Heather Gray',
                name: 'Heather Grey',
                hasStock: null,
                bgColor: 'bg-gray-400',
                selectedColor: 'ring-gray-400',
                colorBg: '#777777'
              }
            ]
          }
        ]
      }
    }
  ],
  pageInfo: {
    endCursor: 'eyJsYXN0X2lkIjo2ODYwNDYzNzM0ODg0LCJsYXN0X3ZhbHVlIjoiMCJ9',
    startCursor: 'eyJsYXN0X2lkIjo2ODI3MDY4ODUwMjc2LCJsYXN0X3ZhbHVlIjoiNSJ9',
    hasNextPage: false,
    hasPreviousPage: false
  },
  anchor: null
};
