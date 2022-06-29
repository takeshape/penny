import { ProductPageRelatedProductsShopifyQueryResponse } from 'types/takeshape';

export const relatedProductsResponse: ProductPageRelatedProductsShopifyQueryResponse = {
  products: {
    nodes: [
      {
        id: 'gid://shopify/Product/6827068850276',
        handle: 'elegant-blouse',
        title: 'Elegant Blouse',
        description: 'A blouse for people on the go.',
        descriptionHtml: 'A blouse for people on the go.',
        featuredImage: {
          id: 'gid://shopify/ProductImage/29201776083044',
          width: 820,
          height: 1058,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/blouse.jpg?v=1650570192',
          altText: null
        },
        priceRange: {
          // @ts-expect-error
          maxVariantPrice: { currencyCode: 'USD', amount: '30.0' },
          // @ts-expect-error
          minVariantPrice: { currencyCode: 'USD', amount: '30.0' }
        },
        publishedAt: null,
        totalVariants: 6,
        totalInventory: 3,
        sellingPlanGroupCount: 0,
        options: [
          {
            name: 'Size',

            id: 'gid://shopify/ProductOption/8728583471204',
            values: ['S', 'M', 'L']
          },
          {
            name: 'Color',

            id: 'gid://shopify/ProductOption/8766561222756',
            values: ['Black', 'White']
          }
        ]
      },
      {
        id: 'gid://shopify/Product/6857243132004',
        handle: 'basic-tee-6-pack',
        title: 'Basic Tee 6-Pack',
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        descriptionHtml:
          '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
        featuredImage: {
          id: 'gid://shopify/ProductImage/29399940923492',
          width: 840,
          height: 1088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734',
          altText: 'A bunch of shirts.'
        },
        priceRange: {
          // @ts-expect-error
          maxVariantPrice: { currencyCode: 'USD', amount: '200.0' },
          // @ts-expect-error
          minVariantPrice: { currencyCode: 'USD', amount: '192.0' }
        },
        publishedAt: '2022-06-06T15:51:48Z',
        totalVariants: 24,
        totalInventory: 101,
        sellingPlanGroupCount: 1,
        options: [
          {
            name: 'Size',

            id: 'gid://shopify/ProductOption/8766172332132',
            values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
          },
          {
            name: 'Color',

            id: 'gid://shopify/ProductOption/8766172364900',
            values: ['Black', 'Gray', 'White']
          }
        ]
      },
      {
        id: 'gid://shopify/Product/6827069505636',
        handle: 'mesh-gym-shorts',
        title: 'Mesh Gym Shorts',
        description:
          "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        descriptionHtml:
          '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
        featuredImage: {
          id: 'gid://shopify/ProductImage/29201784373348',
          width: 860,
          height: 791,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316',
          altText: null
        },
        priceRange: {
          // @ts-expect-error
          maxVariantPrice: { currencyCode: 'USD', amount: '31.0' },
          // @ts-expect-error
          minVariantPrice: { currencyCode: 'USD', amount: '29.0' }
        },
        publishedAt: '2022-04-21T19:45:16Z',
        totalVariants: 9,
        totalInventory: 35,
        sellingPlanGroupCount: 1,
        options: [
          {
            name: 'Color',

            id: 'gid://shopify/ProductOption/8728584126564',
            values: ['Black', 'White', 'Red']
          },
          {
            name: 'Size',

            id: 'gid://shopify/ProductOption/8749149356132',
            values: ['S', 'M', 'L']
          }
        ]
      },
      {
        id: 'gid://shopify/Product/6860463734884',
        handle: 'basic-tee',
        title: 'Basic Tee',
        description:
          'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
        descriptionHtml:
          '<p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>\n<div>\n<div><span>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</span></div>\n</div>',
        featuredImage: {
          id: 'gid://shopify/ProductImage/29415893631076',
          width: 1392,
          height: 2088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-featured-product-shot.jpg?v=1654790331',
          altText: null
        },
        priceRange: {
          // @ts-expect-error
          maxVariantPrice: { currencyCode: 'USD', amount: '35.0' },
          // @ts-expect-error
          minVariantPrice: { currencyCode: 'USD', amount: '35.0' }
        },
        publishedAt: null,
        totalVariants: 12,
        totalInventory: 50,
        sellingPlanGroupCount: 0,
        options: [
          {
            name: 'Size',

            id: 'gid://shopify/ProductOption/8770971140196',
            values: ['XXS', 'XS', 'S', 'M', 'L', 'XL']
          },
          {
            name: 'Color',

            id: 'gid://shopify/ProductOption/8770971172964',
            values: ['Black', 'Heather Gray']
          }
        ]
      }
    ]
  }
};
