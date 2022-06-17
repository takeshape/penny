export const quickAddResponse: any = {
  productList: {
    __typename: 'ProductPaginatedList',
    items: [
      {
        __typename: 'Product',
        shopifyProduct: {
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
          variants: {
            __typename: 'Shopify_ProductVariantConnection',
            edges: [
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670162020',
                  availableForSale: false,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 0,
                  sku: '',
                  title: 'XXS / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XXS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670194788',
                  availableForSale: false,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 0,
                  sku: '',
                  title: 'XXS / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XXS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670227556',
                  availableForSale: false,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 0,
                  sku: '',
                  title: 'XXS / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XXS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670260324',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 2,
                  sku: '',
                  title: 'XS / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670293092',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'XS / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670325860',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'XS / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XS' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670358628',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'S / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'S' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670391396',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 4,
                  sku: '',
                  title: 'S / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'S' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670424164',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'S / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'S' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670456932',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'M / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'M' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670489700',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'M / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'M' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670555236',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'M / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'M' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670588004',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'L / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'L' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670620772',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'L / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'L' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670653540',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'L / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'L' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670686308',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'XL / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670719076',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'XL / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670751844',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: 'XL / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: 'XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670784612',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '2XL / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '2XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670817380',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '2XL / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '2XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670850148',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '192.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '2XL / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '2XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670882916',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '200.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '3XL / Black',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '3XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Black' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670915684',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '200.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '3XL / Gray',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '3XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'Gray' }
                  ]
                }
              },
              {
                __typename: 'Shopify_ProductVariantEdge',
                node: {
                  __typename: 'Shopify_ProductVariant',
                  id: 'gid://shopify/ProductVariant/40234670981220',
                  availableForSale: true,
                  compareAtPrice: null,
                  price: '200.00',
                  inventoryPolicy: 'DENY',
                  sellableOnlineQuantity: 5,
                  sku: '',
                  title: '3XL / White',
                  selectedOptions: [
                    { __typename: 'Shopify_SelectedOption', name: 'Size', value: '3XL' },
                    { __typename: 'Shopify_SelectedOption', name: 'Color', value: 'White' }
                  ]
                }
              }
            ]
          },
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
          ],
          sellingPlanGroupCount: 1,
          sellingPlanGroups: {
            __typename: 'Shopify_SellingPlanGroupConnection',
            edges: [
              {
                __typename: 'Shopify_SellingPlanGroupEdge',
                node: {
                  __typename: 'Shopify_SellingPlanGroup',
                  sellingPlans: {
                    __typename: 'Shopify_SellingPlanConnection',
                    edges: [
                      {
                        __typename: 'Shopify_SellingPlanEdge',
                        node: {
                          __typename: 'Shopify_SellingPlan',
                          id: 'gid://shopify/SellingPlan/3034021988',
                          options: ['30 Day(s)'],
                          pricingPolicies: [
                            {
                              __typename: 'Shopify_SellingPlanFixedPricingPolicy',
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
      }
    ]
  }
};
