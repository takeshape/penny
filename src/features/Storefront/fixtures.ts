import { CollectionProps } from './Collection/Collection';

export const storefrontCollectionComponent: CollectionProps = {
  __typename: 'CollectionComponent',
  collection: {
    __typename: 'Collection',
    shopifyCollection: {
      __typename: 'Shopify_Collection',
      products: {
        __typename: 'Shopify_ProductConnection',
        pageInfo: {
          __typename: 'Shopify_PageInfo',
          endCursor: 'eyJsYXN0X2lkIjo2ODYzMzk5NTUxMDc2LCJsYXN0X3ZhbHVlIjoiMCJ9',
          startCursor: 'eyJsYXN0X2lkIjo2ODI3MDY5NTA1NjM2LCJsYXN0X3ZhbHVlIjoiNCJ9',
          hasNextPage: true,
          hasPreviousPage: false
        },
        nodes: [
          {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6827069505636',
            handle: 'mesh-gym-shorts',
            title: 'Mesh Gym Shorts',
            description:
              "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
            descriptionHtml:
              '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
            requiresSellingPlan: true,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29201784373348',
              width: 860,
              height: 791,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316',
              altText: null
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '31.0'
              },
              minVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '29.0'
              }
            },
            publishedAt: '2022-04-21T19:45:16Z',
            totalVariants: 9,
            totalInventory: 35,
            sellingPlanGroupCount: 1,
            options: [
              {
                __typename: 'Shopify_ProductOption',
                name: 'Color',
                position: 1,
                id: 'gid://shopify/ProductOption/8728584126564',
                values: ['Black', 'White', 'Red']
              },
              {
                __typename: 'Shopify_ProductOption',
                name: 'Size',
                position: 2,
                id: 'gid://shopify/ProductOption/8749149356132',
                values: ['S', 'M', 'L']
              }
            ]
          },
          {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6857243132004',
            handle: 'basic-tee-6-pack',
            title: 'Basic Tee 6-Pack',
            description:
              'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
            descriptionHtml:
              '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
            requiresSellingPlan: false,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29399940923492',
              width: 840,
              height: 1088,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734',
              altText: 'A bunch of shirts.'
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '200.0'
              },
              minVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '192.0'
              }
            },
            publishedAt: '2022-06-06T15:51:48Z',
            totalVariants: 24,
            totalInventory: 101,
            sellingPlanGroupCount: 1,
            options: [
              {
                __typename: 'Shopify_ProductOption',
                name: 'Size',
                position: 1,
                id: 'gid://shopify/ProductOption/8766172332132',
                values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
              },
              {
                __typename: 'Shopify_ProductOption',
                name: 'Color',
                position: 2,
                id: 'gid://shopify/ProductOption/8766172364900',
                values: ['Black', 'Gray', 'White']
              }
            ]
          },
          {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6863399845988',
            handle: 'flex-fit-mini-ottoman-black',
            title: 'FLEX FIT | MINI OTTOMAN BLACK',
            description: 'Flexfit Mini Ottoman Cap',
            descriptionHtml: 'Flexfit Mini Ottoman Cap',
            requiresSellingPlan: false,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29434314424420',
              width: 635,
              height: 560,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/6170fd62b8ebee856d0cbdeac874abfd.jpg?v=1655225076',
              altText: null
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '29.99'
              },
              minVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '29.99'
              }
            },
            publishedAt: '2022-06-14T16:44:36Z',
            totalVariants: 4,
            totalInventory: 39,
            sellingPlanGroupCount: 0,
            options: [
              {
                __typename: 'Shopify_ProductOption',
                name: 'Size',
                position: 1,
                id: 'gid://shopify/ProductOption/8775411368036',
                values: ['s', 'm', 'l', 'xl']
              },
              {
                __typename: 'Shopify_ProductOption',
                name: 'Color',
                position: 2,
                id: 'gid://shopify/ProductOption/8775411400804',
                values: ['black']
              }
            ]
          },
          {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6863399551076',
            handle: 'converse-chuck-taylor-all-star-ii-hi',
            title: 'CONVERSE | CHUCK TAYLOR ALL STAR II HI',
            description:
              'Introducing the Converse Chuck Taylor All Star II Hi sneaker. Retaining the revolutionary silhouette we all rely on, but now made ever better. New features include Lunarlon sockliner adds cushioning and arch support. Micro-suede lining, premium textured shield canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
            descriptionHtml:
              'Introducing the Converse Chuck Taylor All Star II Hi sneaker. Retaining the revolutionary silhouette we all rely on, but now made ever better. New features include Lunarlon sockliner adds cushioning and arch support. Micro-suede lining, premium textured shield canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
            requiresSellingPlan: false,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29434312360036',
              width: 635,
              height: 560,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/23550440c4ccab05e4fc1ebd85e742cc.jpg?v=1655225058',
              altText: null
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '140.0'
              },
              minVariantPrice: {
                __typename: 'Shopify_MoneyV2',
                // @ts-expect-error
                currencyCode: 'USD',
                amount: '140.0'
              }
            },
            publishedAt: '2022-06-14T16:44:18Z',
            totalVariants: 7,
            totalInventory: 64,
            sellingPlanGroupCount: 0,
            options: [
              {
                __typename: 'Shopify_ProductOption',
                name: 'Size',
                position: 1,
                id: 'gid://shopify/ProductOption/8775410843748',
                values: ['4', '5', '6', '7', '9', '11', '13']
              },
              {
                __typename: 'Shopify_ProductOption',
                name: 'Color',
                position: 2,
                id: 'gid://shopify/ProductOption/8775410876516',
                values: ['black']
              }
            ]
          }
        ]
      },
      id: 'gid://shopify/Collection/270097776740',
      handle: 'men',
      title: 'Men',
      description: 'Stuff for dudes and stuff.',
      descriptionHtml: 'Stuff for dudes and stuff.'
    }
  }
};
