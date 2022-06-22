export const collectionResponse: any = {
  collectionList: {
    __typename: 'CollectionPaginatedList',
    items: [
      {
        __typename: 'Collection',
        shopifyCollection: {
          __typename: 'Shopify_Collection',
          products: {
            __typename: 'Shopify_ProductConnection',
            pageInfo: {
              __typename: 'Shopify_PageInfo',
              endCursor: 'eyJsYXN0X2lkIjo2ODYzMzk4OTI4NDg0LCJsYXN0X3ZhbHVlIjoiMCJ9',
              startCursor: 'eyJsYXN0X2lkIjo2ODU3MjQzMTMyMDA0LCJsYXN0X3ZhbHVlIjoiNCJ9',
              hasNextPage: true,
              hasPreviousPage: false
            },
            edges: [
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODU3MjQzMTMyMDA0LCJsYXN0X3ZhbHVlIjoiNCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6857243132004',
                  title: 'Basic Tee 6-Pack',
                  description:
                    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
                  descriptionHtml:
                    '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
                  takeshape: {
                    __typename: 'Product',
                    _id: 'cab8f1bc-c83e-4aae-bbf9-809427c3ad8e',
                    name: 'Basic Tee 6-Pack',
                    slug: 'basic-tee-6-pack'
                  },
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
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '200.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '192.0' }
                  },
                  publishedAt: '2022-06-06T15:51:48Z',
                  totalVariants: 24,
                  totalInventory: 101,
                  sellingPlanGroupCount: 1,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: {
                      __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty',
                      average: 4.6667,
                      count: 3
                    }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODI3MDY5NTA1NjM2LCJsYXN0X3ZhbHVlIjoiNCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6827069505636',
                  title: 'Mesh Gym Shorts',
                  description:
                    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
                  descriptionHtml:
                    '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
                  takeshape: {
                    __typename: 'Product',
                    _id: '69673402-043c-4f24-97d2-373378e469ac',
                    name: 'Mesh Gym Shorts',
                    slug: null
                  },
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
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '31.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '29.0' }
                  },
                  publishedAt: '2022-04-21T19:45:16Z',
                  totalVariants: 9,
                  totalInventory: 35,
                  sellingPlanGroupCount: 1,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: 4, count: 2 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5ODQ1OTg4LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399845988',
                  title: 'FLEX FIT | MINI OTTOMAN BLACK',
                  description: 'Flexfit Mini Ottoman Cap',
                  descriptionHtml: 'Flexfit Mini Ottoman Cap',
                  takeshape: {
                    __typename: 'Product',
                    _id: '0d7696c4-3fb8-4643-b988-42b5b361f425',
                    name: 'FLEX FIT | MINI OTTOMAN BLACK',
                    slug: null
                  },
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
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '29.99' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '29.99' }
                  },
                  publishedAt: '2022-06-14T16:44:36Z',
                  totalVariants: 4,
                  totalInventory: 39,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5NTUxMDc2LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399551076',
                  title: 'CONVERSE | CHUCK TAYLOR ALL STAR II HI',
                  description:
                    'Introducing the Converse Chuck Taylor All Star II Hi sneaker. Retaining the revolutionary silhouette we all rely on, but now made ever better. New features include Lunarlon sockliner adds cushioning and arch support. Micro-suede lining, premium textured shield canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
                  descriptionHtml:
                    'Introducing the Converse Chuck Taylor All Star II Hi sneaker. Retaining the revolutionary silhouette we all rely on, but now made ever better. New features include Lunarlon sockliner adds cushioning and arch support. Micro-suede lining, premium textured shield canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
                  takeshape: {
                    __typename: 'Product',
                    _id: 'f5f1e39a-9749-4df2-a320-f95b8839751d',
                    name: 'CONVERSE | CHUCK TAYLOR ALL STAR II HI',
                    slug: null
                  },
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
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '140.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '140.0' }
                  },
                  publishedAt: '2022-06-14T16:44:18Z',
                  totalVariants: 7,
                  totalInventory: 64,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5NDUyNzcyLCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399452772',
                  title: 'CONVERSE | CHUCK TAYLOR ALL STAR LO',
                  description:
                    'The Converse Chuck Taylor All Star II Lo sneaker. Retaining the revolutionary silhouette we all rely on, but now made even better. New features include Lunarlon sockliner, adding cushioning and arch support. Micro-suede lining, premium canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
                  descriptionHtml:
                    'The Converse Chuck Taylor All Star II Lo sneaker. Retaining the revolutionary silhouette we all rely on, but now made even better. New features include Lunarlon sockliner, adding cushioning and arch support. Micro-suede lining, premium canvas construction and a padded, non-slip tongue deliver superior comfort and durability. Moulded eyelets add a premium touch. The embossed, screen-printed license plate and embroidered, star-centered ankle patch add striking depth and dimension to recognizable, classic details.',
                  takeshape: {
                    __typename: 'Product',
                    _id: '318fd02e-9fe0-4094-be5c-32fed31fab79',
                    name: 'CONVERSE | CHUCK TAYLOR ALL STAR LO',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434311737444',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/fae150570c8ce6ddc4f787bf77b02c95.jpg?v=1655225053',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '100.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '100.0' }
                  },
                  publishedAt: '2022-06-14T16:44:13Z',
                  totalVariants: 11,
                  totalInventory: 104,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5MjIzMzk2LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399223396',
                  title: 'NIKE | CRACKLE PRINT TB TEE',
                  description:
                    'Meet your new favorite tee, the Nike Crackle Print T-Shirt. Bringing its A-game in soft, premium fabric, it features a ribbed crew neck and a woven Nike label on the hem.',
                  descriptionHtml:
                    'Meet your new favorite tee, the Nike Crackle Print T-Shirt. Bringing its A-game in soft, premium fabric, it features a ribbed crew neck and a woven Nike label on the hem.',
                  takeshape: {
                    __typename: 'Product',
                    _id: 'e5352ebc-57ba-42bc-9fa8-0d29a4ff53fc',
                    name: 'NIKE | CRACKLE PRINT TB TEE',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434309967972',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/62a3dd0421fc5ccf4df6815b3694d734.jpg?v=1655225034',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '40.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '40.0' }
                  },
                  publishedAt: '2022-06-14T16:43:54Z',
                  totalVariants: 4,
                  totalInventory: 32,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5MTkwNjI4LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399190628',
                  title: 'TIMBERLAND | MENS 6 INCH PREMIUM BOOT',
                  description:
                    "Timberland has been refining their craft of producing hard-wearing boots for decades. The 6-Inch Premium Waterproof Boot (or Wheat Boot) is the original men's Timberland boot and was first designed nearly 40 years ago. Continuous improvements to the design and construction, such as the addition of Timberland's exclusive anti-fatigue technology for all day comfort, has cemented these boots as a sturdy and dependable staple in anyone's shoe collection. The premium waterproof leather, seam-sealed construction and rugged lug outsoles provides long-lasting durability and comfort to help you get through any environmental conditions and adventure. An absolute must-have.",
                  descriptionHtml:
                    "Timberland has been refining their craft of producing hard-wearing boots for decades. The 6-Inch Premium Waterproof Boot (or Wheat Boot) is the original men's Timberland boot and was first designed nearly 40 years ago. Continuous improvements to the design and construction, such as the addition of Timberland's exclusive anti-fatigue technology for all day comfort, has cemented these boots as a sturdy and dependable staple in anyone's shoe collection. The premium waterproof leather, seam-sealed construction and rugged lug outsoles provides long-lasting durability and comfort to help you get through any environmental conditions and adventure. An absolute must-have.",
                  takeshape: {
                    __typename: 'Product',
                    _id: '6d6723e1-33db-4bd8-a7a8-e6fcabab6afd',
                    name: 'TIMBERLAND | MENS 6 INCH PREMIUM BOOT',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434309705828',
                    width: 560,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/d610851e0277cdfbe3402e03be2effd2.jpg?v=1655225030',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '299.95' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '299.95' }
                  },
                  publishedAt: '2022-06-14T16:43:50Z',
                  totalVariants: 9,
                  totalInventory: 89,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5MTU3ODYwLCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399157860',
                  title: 'VANS | CLASSIC SLIP-ON (PERFORATED SUEDE)',
                  description:
                    'The Perforated Suede Classic Slip-On features low profile slip-on perforated suede uppers,, padded collars, elastic side accents, and signature rubber waffle outsoles.',
                  descriptionHtml:
                    'The Perforated Suede Classic Slip-On features low profile slip-on perforated suede uppers,, padded collars, elastic side accents, and signature rubber waffle outsoles.',
                  takeshape: {
                    __typename: 'Product',
                    _id: '565e6ae1-2576-49e3-8903-b99397710656',
                    name: 'VANS | CLASSIC SLIP-ON (PERFORATED SUEDE)',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434309345380',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/d0fb461a3a28439eb5a45b2e2fb232bb.jpg?v=1655225026',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '119.95' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '119.95' }
                  },
                  publishedAt: '2022-06-14T16:43:46Z',
                  totalVariants: 6,
                  totalInventory: 34,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5MDkyMzI0LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399092324',
                  title: 'VANS | OLD SKOOL (BUTTERFLY) TRUE WHITE | BLACK',
                  description:
                    'Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in 1977, the Vans Old Skool sneaker is a classic in the Vans collection. Full of attitude, the Old Skool is durable and lightweight, and can give the other boys in the collection a run for its money. Constructed from canvas, The Vans Old Skool features contrasting suede panels along the toe and heel, plus the iconic stripe along the side of the shoe, and sits over a chunky midsole.',
                  descriptionHtml:
                    'Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in 1977, the Vans Old Skool sneaker is a classic in the Vans collection. Full of attitude, the Old Skool is durable and lightweight, and can give the other boys in the collection a run for its money. Constructed from canvas, The Vans Old Skool features contrasting suede panels along the toe and heel, plus the iconic stripe along the side of the shoe, and sits over a chunky midsole.',
                  takeshape: {
                    __typename: 'Product',
                    _id: '73d14870-03f5-4c1a-9f69-25803166683b',
                    name: 'VANS | OLD SKOOL (BUTTERFLY) TRUE WHITE | BLACK',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434308788324',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/cd759395d74526f72c3b0c43c91b4220.jpg?v=1655225023',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '129.95' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '129.95' }
                  },
                  publishedAt: '2022-06-14T16:43:42Z',
                  totalVariants: 6,
                  totalInventory: 50,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk5MDU5NTU2LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863399059556',
                  title: 'VANS | SH-8 HI',
                  description:
                    "Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in the early 70's, the Vans SK8 Hi was responsible for the reduced number of ankle injuries in the skating scene with the extra padded ankle support, but its popularity has grown across different cultural scenes. The Vans SK8 Hi True White is constructed from a combination of canvas and suede and features the signature side stripe detail and vulcanized waffle sole. Available in a range of colours.",
                  descriptionHtml:
                    "Vans are a staple in skate culture and street style, and this skate sneaker is no exception. Introduced in the early 70's, the Vans SK8 Hi was responsible for the reduced number of ankle injuries in the skating scene with the extra padded ankle support, but its popularity has grown across different cultural scenes. The Vans SK8 Hi True White is constructed from a combination of canvas and suede and features the signature side stripe detail and vulcanized waffle sole. Available in a range of colours.",
                  takeshape: {
                    __typename: 'Product',
                    _id: '7997dcc0-4f4c-498e-a937-e9b0c8557ba1',
                    name: 'VANS | SH-8 HI',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434308526180',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/4e151d7b538e5aba66295f3a5d67b1f4.jpg?v=1655225018',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '129.95' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '129.95' }
                  },
                  publishedAt: '2022-06-14T16:43:38Z',
                  totalVariants: 10,
                  totalInventory: 77,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk4OTYxMjUyLCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863398961252',
                  title: 'VANS | ERA 59 (DESERT COWBOY)',
                  description:
                    "Vans are a staple in skate culture and street style, and the Vans Era 59 is no exception. This classic lace-up skate shoe is focused on ultimate comfort and cool. Constructed from canvas with leather accents which sets it apart from the original Era, it features a soft footbed, double stitched vamp, a padded tongue and lining, as well as Vans' signature waffle sole.",
                  descriptionHtml:
                    "Vans are a staple in skate culture and street style, and the Vans Era 59 is no exception. This classic lace-up skate shoe is focused on ultimate comfort and cool. Constructed from canvas with leather accents which sets it apart from the original Era, it features a soft footbed, double stitched vamp, a padded tongue and lining, as well as Vans' signature waffle sole. ",
                  takeshape: {
                    __typename: 'Product',
                    _id: '55d62fe9-bd86-44d0-b671-df527b52155a',
                    name: 'VANS | ERA 59 (DESERT COWBOY)',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434308067428',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/b6257e8a4b6a5805da251cb090a82b09.jpg?v=1655225014',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '109.95' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '109.95' }
                  },
                  publishedAt: '2022-06-14T16:43:34Z',
                  totalVariants: 5,
                  totalInventory: 65,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              },
              {
                __typename: 'Shopify_ProductEdge',
                cursor: 'eyJsYXN0X2lkIjo2ODYzMzk4OTI4NDg0LCJsYXN0X3ZhbHVlIjoiMCJ9',
                node: {
                  __typename: 'Shopify_Product',
                  id: 'gid://shopify/Product/6863398928484',
                  title: 'ADIDAS | SUPERSTAR 80S',
                  description:
                    "There's a shell toe for every season, and the adidas Originals Superstar 80s shoes have a full grain leather upper with a shiny badge on the tongue that makes these shoes ready for any time of year.",
                  descriptionHtml:
                    "There's a shell toe for every season, and the adidas Originals Superstar 80s shoes have a full grain leather upper with a shiny badge on the tongue that makes these shoes ready for any time of year.",
                  takeshape: {
                    __typename: 'Product',
                    _id: '952544f4-9400-4e93-b103-9c891fb37592',
                    name: 'ADIDAS | SUPERSTAR 80S',
                    slug: null
                  },
                  requiresSellingPlan: false,
                  featuredImage: {
                    __typename: 'Shopify_Image',
                    id: 'gid://shopify/ProductImage/29434307772516',
                    width: 635,
                    height: 560,
                    url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/44694ee386818f3276566210464cf341.jpg?v=1655225010',
                    altText: null
                  },
                  priceRangeV2: {
                    __typename: 'Shopify_ProductPriceRangeV2',
                    maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '170.0' },
                    minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '170.0' }
                  },
                  publishedAt: '2022-06-14T16:43:30Z',
                  totalVariants: 7,
                  totalInventory: 61,
                  sellingPlanGroupCount: 0,
                  reviews: {
                    __typename: 'ReviewsIo_ListProductReviewsResponse',
                    stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
                  }
                }
              }
            ]
          },
          id: 'gid://shopify/Collection/270097776740',
          handle: 'men-basic-tees',
          title: 'Men',
          description: 'Stuff for dudes and stuff.',
          descriptionHtml: 'Stuff for dudes and stuff.',
          productsCount: 27,
          takeshape: { __typename: 'Collection', _id: '12102598-d96e-46f4-bab2-c0071b31e159', name: 'Men', slug: 'men' }
        }
      }
    ]
  }
};

export const collectionByHandleResponse: any = {
  collection: {
    __typename: 'Shopify_Collection',
    products: {
      __typename: 'Shopify_ProductConnection',
      pageInfo: {
        __typename: 'Shopify_PageInfo',
        endCursor: 'eyJsYXN0X2lkIjo2ODYwNDYzNzM0ODg0LCJsYXN0X3ZhbHVlIjoiMCJ9',
        startCursor: 'eyJsYXN0X2lkIjo2ODI3MDY4ODUwMjc2LCJsYXN0X3ZhbHVlIjoiNSJ9',
        hasNextPage: false,
        hasPreviousPage: false
      },
      edges: [
        {
          __typename: 'Shopify_ProductEdge',
          cursor: 'eyJsYXN0X2lkIjo2ODI3MDY4ODUwMjc2LCJsYXN0X3ZhbHVlIjoiNSJ9',
          node: {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6827068850276',
            title: 'Elegant Blouse',
            description: 'A blouse for people on the go.',
            descriptionHtml: 'A blouse for people on the go.',
            takeshape: {
              __typename: 'Product',
              _id: '169fda81-1fd5-4957-911a-8b185bef722f',
              name: 'Elegant Blouse',
              slug: null
            },
            requiresSellingPlan: false,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29201776083044',
              width: 820,
              height: 1058,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/blouse.jpg?v=1650570192',
              altText: null
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '30.0' },
              minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '30.0' }
            },
            publishedAt: null,
            totalVariants: 6,
            totalInventory: 3,
            sellingPlanGroupCount: 0,
            reviews: {
              __typename: 'ReviewsIo_ListProductReviewsResponse',
              stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
            }
          }
        },
        {
          __typename: 'Shopify_ProductEdge',
          cursor: 'eyJsYXN0X2lkIjo2ODU3MjQzMTMyMDA0LCJsYXN0X3ZhbHVlIjoiNCJ9',
          node: {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6857243132004',
            title: 'Basic Tee 6-Pack',
            description:
              'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
            descriptionHtml:
              '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
            takeshape: {
              __typename: 'Product',
              _id: 'cab8f1bc-c83e-4aae-bbf9-809427c3ad8e',
              name: 'Basic Tee 6-Pack',
              slug: 'basic-tee-6-pack'
            },
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
              maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '200.0' },
              minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '192.0' }
            },
            publishedAt: '2022-06-06T15:51:48Z',
            totalVariants: 24,
            totalInventory: 101,
            sellingPlanGroupCount: 1,
            reviews: {
              __typename: 'ReviewsIo_ListProductReviewsResponse',
              stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: 4.6667, count: 3 }
            }
          }
        },
        {
          __typename: 'Shopify_ProductEdge',
          cursor: 'eyJsYXN0X2lkIjo2ODI3MDY5NTA1NjM2LCJsYXN0X3ZhbHVlIjoiNCJ9',
          node: {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6827069505636',
            title: 'Mesh Gym Shorts',
            description:
              "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
            descriptionHtml:
              '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
            takeshape: {
              __typename: 'Product',
              _id: '69673402-043c-4f24-97d2-373378e469ac',
              name: 'Mesh Gym Shorts',
              slug: null
            },
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
              maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '31.0' },
              minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '29.0' }
            },
            publishedAt: '2022-04-21T19:45:16Z',
            totalVariants: 9,
            totalInventory: 35,
            sellingPlanGroupCount: 1,
            reviews: {
              __typename: 'ReviewsIo_ListProductReviewsResponse',
              stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: 4, count: 2 }
            }
          }
        },
        {
          __typename: 'Shopify_ProductEdge',
          cursor: 'eyJsYXN0X2lkIjo2ODYwNDYzNzM0ODg0LCJsYXN0X3ZhbHVlIjoiMCJ9',
          node: {
            __typename: 'Shopify_Product',
            id: 'gid://shopify/Product/6860463734884',
            title: 'Basic Tee',
            description:
              'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
            descriptionHtml:
              '<p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>\n<div>\n<div><span>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</span></div>\n</div>',
            takeshape: {
              __typename: 'Product',
              _id: '56a1aa9d-a378-4e38-9bc3-192195529807',
              name: 'Basic Tee',
              slug: null
            },
            requiresSellingPlan: false,
            featuredImage: {
              __typename: 'Shopify_Image',
              id: 'gid://shopify/ProductImage/29415893631076',
              width: 1392,
              height: 2088,
              url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-featured-product-shot.jpg?v=1654790331',
              altText: null
            },
            priceRangeV2: {
              __typename: 'Shopify_ProductPriceRangeV2',
              maxVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '35.0' },
              minVariantPrice: { __typename: 'Shopify_MoneyV2', currencyCode: 'USD', amount: '35.0' }
            },
            publishedAt: null,
            totalVariants: 12,
            totalInventory: 50,
            sellingPlanGroupCount: 0,
            reviews: {
              __typename: 'ReviewsIo_ListProductReviewsResponse',
              stats: { __typename: 'ReviewsIo_ListProductReviewsResponseStatsProperty', average: null, count: 0 }
            }
          }
        }
      ]
    },
    id: 'gid://shopify/Collection/268220006500',
    handle: 'frontpage',
    title: 'Home page',
    description: '',
    descriptionHtml: '',
    productsCount: 4,
    takeshape: { __typename: 'Collection', _id: '17d869c2-80ce-4b13-83d1-752b0652f060', name: 'Home page', slug: null }
  }
};
