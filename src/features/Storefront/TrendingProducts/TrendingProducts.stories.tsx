import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import TrendingProducts from './TrendingProducts';

const Meta: ComponentMeta<typeof TrendingProducts> = {
  title: 'Features / Storefront / Components / Trending Products',
  component: TrendingProducts
};

const trendingProducts = {
  items: [
    {
      shopifyProduct: {
        __typename: 'Shopify_Product',
        id: 'gid://shopify/Product/6860463734884',
        title: 'Basic Tee',
        description:
          'The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look. Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.',
        descriptionHtml:
          '<p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>\n<div>\n<div><span>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</span></div>\n</div>',
        requiresSellingPlan: false,
        featuredImage: {
          width: 1392,
          height: 2088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-featured-product-shot.jpg?v=1654790331'
        },
        images: {
          edges: [
            {
              node: {
                width: 1392,
                height: 2088,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-featured-product-shot.jpg?v=1654790331'
              }
            },
            {
              node: {
                width: 668,
                height: 1008,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-product-shot-01.jpg?v=1654790332'
              }
            },
            {
              node: {
                width: 668,
                height: 1008,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-01-product-shot-02.jpg?v=1654790332'
              }
            }
          ]
        },
        priceRangeV2: {
          maxVariantPrice: {
            currencyCode: 'USD',
            amount: '35.0'
          },
          minVariantPrice: {
            currencyCode: 'USD',
            amount: '35.0'
          }
        },
        seo: {
          title: null,
          description: null
        },
        publishedAt: null,
        totalVariants: 12,
        totalInventory: 50,
        variants: {
          edges: [
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058000996',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XXS / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XXS'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058033764',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XXS / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XXS'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058066532',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XS / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XS'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058099300',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XS / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XS'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058132068',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'S / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058164836',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'S / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058197604',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'M / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'M'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058230372',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'M / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'M'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058263140',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'L / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'L'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058295908',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'L / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'L'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058328676',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'XL / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XL'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40249058361444',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '35.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'XL / Heather Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XL'
                  },
                  {
                    name: 'Color',
                    value: 'Heather Gray'
                  }
                ]
              }
            }
          ]
        },
        reviews: {
          stats: {
            average: null,
            count: 0
          },
          reviews: {
            data: [],
            per_page: 15,
            current_page: 1,
            total: 0
          }
        },
        options: [
          {
            name: 'Size',
            position: 1,
            id: 'gid://shopify/ProductOption/8770971140196',
            values: ['XXS', 'XS', 'S', 'M', 'L', 'XL']
          },
          {
            name: 'Color',
            position: 2,
            id: 'gid://shopify/ProductOption/8770971172964',
            values: ['Black', 'Heather Gray']
          }
        ],
        sellingPlanGroupCount: 0,
        sellingPlanGroups: {
          edges: []
        }
      }
    },
    {
      shopifyProduct: {
        __typename: 'Shopify_Product',
        id: 'gid://shopify/Product/6857243132004',
        title: 'Basic Tee 6-Pack',
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered. Highlights Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton Details The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        descriptionHtml:
          '<p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n<h3>Highlights<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Hand cut and sewn locally</li>\n<li>Dyed with our proprietary colors</li>\n<li>Pre-washed &amp; pre-shrunk</li>\n<li>Ultra-soft 100% cotton</li>\n</ul>\n<h3>Details<br data-mce-fragment="1">\n</h3>\n<p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>',
        requiresSellingPlan: false,
        featuredImage: {
          width: 840,
          height: 1088,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734'
        },
        images: {
          edges: [
            {
              node: {
                width: 840,
                height: 1088,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot.jpg?v=1654530734'
              }
            },
            {
              node: {
                width: 768,
                height: 512,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-tertiary-product-shot-01.jpg?v=1654530699'
              }
            },
            {
              node: {
                width: 768,
                height: 512,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-tertiary-product-shot-02.jpg?v=1654530699'
              }
            },
            {
              node: {
                width: 1536,
                height: 1960,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-featured-product-shot.jpg?v=1654530699'
              }
            }
          ]
        },
        priceRangeV2: {
          maxVariantPrice: {
            currencyCode: 'USD',
            amount: '200.0'
          },
          minVariantPrice: {
            currencyCode: 'USD',
            amount: '192.0'
          }
        },
        seo: {
          title: null,
          description: null
        },
        publishedAt: '2022-06-06T15:51:48Z',
        totalVariants: 24,
        totalInventory: 103,
        variants: {
          edges: [
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670162020',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'XXS / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XXS'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670194788',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'XXS / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XXS'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670227556',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'XXS / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XXS'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670260324',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 4,
                sku: '',
                title: 'XS / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XS'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670293092',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XS / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XS'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670325860',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XS / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XS'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670358628',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'S / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670391396',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 4,
                sku: '',
                title: 'S / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670424164',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'S / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'S'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670456932',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'M / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'M'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670489700',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'M / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'M'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670555236',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'M / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'M'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670588004',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'L / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'L'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670620772',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'L / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'L'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670653540',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'L / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'L'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670686308',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XL / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XL'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670719076',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XL / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XL'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670751844',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'XL / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: 'XL'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670784612',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '2XL / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: '2XL'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670817380',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '2XL / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: '2XL'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670850148',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '192.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '2XL / White',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: '2XL'
                  },
                  {
                    name: 'Color',
                    value: 'White'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670882916',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '200.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '3XL / Black',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: '3XL'
                  },
                  {
                    name: 'Color',
                    value: 'Black'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670915684',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '200.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '3XL / Gray',
                selectedOptions: [
                  {
                    name: 'Size',
                    value: '3XL'
                  },
                  {
                    name: 'Color',
                    value: 'Gray'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40234670981220',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '200.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: '3XL / White',
                selectedOptions: [
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
            }
          ]
        },
        reviews: {
          stats: {
            average: 4.6667,
            count: 3
          },
          reviews: {
            data: [
              {
                product_review_id: 12535824,
                rating: 5,
                title: 'This is the best white t-shirt out there',
                review:
                  "I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!",
                date_created: '2022-06-08 18:15:10',
                timeago: '5 days ago',
                reviewer: {
                  first_name: 'Mark',
                  last_name: 'Edwards',
                  verified_buyer: 'yes',
                  address: '""',
                  profile_picture: '',
                  gravatar: null
                }
              },
              {
                product_review_id: 12535819,
                rating: 4,
                title: 'Adds the perfect variety to my wardrobe',
                review:
                  'I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.',
                date_created: '2022-06-08 18:14:47',
                timeago: '5 days ago',
                reviewer: {
                  first_name: 'Blake',
                  last_name: 'Reid',
                  verified_buyer: 'yes',
                  address: '""',
                  profile_picture: '',
                  gravatar: null
                }
              },
              {
                product_review_id: 12482047,
                rating: 5,
                title: 'All good things come in 6-Packs',
                review:
                  'Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!',
                date_created: '2022-06-07 18:14:06',
                timeago: '6 days ago',
                reviewer: {
                  first_name: 'Ben',
                  last_name: 'Russel',
                  verified_buyer: 'yes',
                  address: '""',
                  profile_picture: '',
                  gravatar: null
                }
              }
            ],
            per_page: 15,
            current_page: 1,
            total: 3
          }
        },
        options: [
          {
            name: 'Size',
            position: 1,
            id: 'gid://shopify/ProductOption/8766172332132',
            values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
          },
          {
            name: 'Color',
            position: 2,
            id: 'gid://shopify/ProductOption/8766172364900',
            values: ['Black', 'Gray', 'White']
          }
        ],
        sellingPlanGroupCount: 1,
        sellingPlanGroups: {
          edges: [
            {
              node: {
                sellingPlans: {
                  edges: [
                    {
                      node: {
                        id: 'gid://shopify/SellingPlan/3034021988',
                        options: ['30 Day(s)'],
                        pricingPolicies: [
                          {
                            __typename: 'Shopify_SellingPlanRecurringPricingPolicy',
                            adjustmentType: 'PERCENTAGE',
                            adjustmentValue: {
                              __typename: 'Shopify_SellingPlanPricingPolicyPercentageValue',
                              percentage: 10
                            }
                          }
                        ],
                        billingPolicy: {
                          __typename: 'Shopify_SellingPlanRecurringBillingPolicy',
                          anchors: [],
                          maxCycles: null,
                          minCycles: null,
                          intervalCount: 30,
                          interval: 'DAY'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      shopifyProduct: {
        __typename: 'Shopify_Product',
        id: 'gid://shopify/Product/6827069505636',
        title: 'Mesh Gym Shorts',
        description:
          "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        descriptionHtml:
          '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
        requiresSellingPlan: true,
        featuredImage: {
          width: 860,
          height: 791,
          url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316'
        },
        images: {
          edges: [
            {
              node: {
                width: 860,
                height: 791,
                url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316'
              }
            }
          ]
        },
        priceRangeV2: {
          maxVariantPrice: {
            currencyCode: 'USD',
            amount: '31.0'
          },
          minVariantPrice: {
            currencyCode: 'USD',
            amount: '29.0'
          }
        },
        seo: {
          title: null,
          description: null
        },
        publishedAt: '2022-04-21T19:45:16Z',
        totalVariants: 9,
        totalInventory: 35,
        variants: {
          edges: [
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079351908',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '29.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'Black / S',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Black'
                  },
                  {
                    name: 'Size',
                    value: 'S'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079384676',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'Black / M',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Black'
                  },
                  {
                    name: 'Size',
                    value: 'M'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079417444',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'Black / L',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Black'
                  },
                  {
                    name: 'Size',
                    value: 'L'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079450212',
                availableForSale: false,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 0,
                sku: '',
                title: 'White / S',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'White'
                  },
                  {
                    name: 'Size',
                    value: 'S'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079482980',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'White / M',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'White'
                  },
                  {
                    name: 'Size',
                    value: 'M'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079515748',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'White / L',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'White'
                  },
                  {
                    name: 'Size',
                    value: 'L'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079548516',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'Red / S',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Red'
                  },
                  {
                    name: 'Size',
                    value: 'S'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079581284',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'Red / M',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Red'
                  },
                  {
                    name: 'Size',
                    value: 'M'
                  }
                ]
              }
            },
            {
              node: {
                id: 'gid://shopify/ProductVariant/40184079614052',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '31.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 5,
                sku: '',
                title: 'Red / L',
                selectedOptions: [
                  {
                    name: 'Color',
                    value: 'Red'
                  },
                  {
                    name: 'Size',
                    value: 'L'
                  }
                ]
              }
            }
          ]
        },
        reviews: {
          stats: {
            average: 4,
            count: 2
          },
          reviews: {
            data: [
              {
                product_review_id: 11636253,
                rating: 5,
                title: 'Very Nice!',
                review: 'These are the best',
                date_created: '2022-05-20 20:10:37',
                timeago: '3 weeks ago',
                reviewer: {
                  first_name: 'Jimmy',
                  last_name: 'Jams',
                  verified_buyer: 'yes',
                  address: '""',
                  profile_picture: '',
                  gravatar: null
                }
              },
              {
                product_review_id: 11635616,
                rating: 3,
                title: 'For Gramps',
                review: 'Great shorts!',
                date_created: '2022-05-20 17:48:38',
                timeago: '3 weeks ago',
                reviewer: {
                  first_name: 'Alex',
                  last_name: 'Niceguy',
                  verified_buyer: 'yes',
                  address: '""',
                  profile_picture: '',
                  gravatar: null
                }
              }
            ],
            per_page: 15,
            current_page: 1,
            total: 2
          }
        },
        options: [
          {
            name: 'Color',
            position: 1,
            id: 'gid://shopify/ProductOption/8728584126564',
            values: ['Black', 'White', 'Red']
          },
          {
            name: 'Size',
            position: 2,
            id: 'gid://shopify/ProductOption/8749149356132',
            values: ['S', 'M', 'L']
          }
        ],
        sellingPlanGroupCount: 1,
        sellingPlanGroups: {
          edges: [
            {
              node: {
                sellingPlans: {
                  edges: [
                    {
                      node: {
                        id: 'gid://shopify/SellingPlan/447316068',
                        options: ['30 Day(s)'],
                        pricingPolicies: [
                          {
                            __typename: 'Shopify_SellingPlanRecurringPricingPolicy',
                            adjustmentType: 'PERCENTAGE',
                            adjustmentValue: {
                              __typename: 'Shopify_SellingPlanPricingPolicyPercentageValue',
                              percentage: 0
                            }
                          }
                        ],
                        billingPolicy: {
                          __typename: 'Shopify_SellingPlanRecurringBillingPolicy',
                          anchors: [],
                          maxCycles: 12,
                          minCycles: null,
                          intervalCount: 30,
                          interval: 'DAY'
                        }
                      }
                    },
                    {
                      node: {
                        id: 'gid://shopify/SellingPlan/3028418660',
                        options: ['60 Day(s)'],
                        pricingPolicies: [
                          {
                            __typename: 'Shopify_SellingPlanRecurringPricingPolicy',
                            adjustmentType: 'PERCENTAGE',
                            adjustmentValue: {
                              __typename: 'Shopify_SellingPlanPricingPolicyPercentageValue',
                              percentage: 0
                            }
                          }
                        ],
                        billingPolicy: {
                          __typename: 'Shopify_SellingPlanRecurringBillingPolicy',
                          anchors: [],
                          maxCycles: 12,
                          minCycles: null,
                          intervalCount: 60,
                          interval: 'DAY'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  ]
};

const Template: ComponentStory<typeof TrendingProducts> = () => <TrendingProducts />;

export const _TrendingProducts = Template.bind({});
_TrendingProducts.parameters = {
  msw: {
    handlers: [
      graphql.query('GetTrendingProductsQuery', (req, res, ctx) => {
        return res(ctx.data({ trendingProducts }));
      })
    ]
  }
};

export default Meta;
