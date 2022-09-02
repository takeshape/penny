import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionsQueryResponse,
  SendMyUpdatePaymentEmailMutationResponse,
  SubscriptionProductVariantQueryResponse,
  UpdateMyPaymentMethodMutationResponse
} from 'types/takeshape';

export const getMySubscriptionsResponse: GetMySubscriptionsQueryResponse = {
  subscriptions: [
    {
      id: '274757498',
      customer_id: '93434621',
      address_id: '102031694',
      status: 'ACTIVE',
      created_at: '2022-08-24T11:03:18',
      updated_at: '2022-08-24T11:03:18',
      price: 2.9,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '30',
      shopify_product_id: '6827069505636',
      quantity: 1,
      variant_title: 'Black / S',
      shopify_variant_id: '40184079351908',
      next_charge_scheduled_at: '2022-09-23T00:00:00',
      cancelled_at: null,
      charges: [
        {
          id: '641286666',
          scheduled_at: '2022-09-23T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '2.90',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              subscription_id: '274757498',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'QUEUED',
          address_id: '102031694',
          shopifyOrder: null,
          __typename: 'Recharge_Charge'
        },
        {
          id: '641286674',
          scheduled_at: '2022-08-24T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '2.9',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              subscription_id: '274757498',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          address_id: '102031694',
          shopifyOrder: { processedAt: '2022-08-24T15:03:08Z', fulfillments: [], __typename: 'Shopify_Order' },
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        first_name: 'Rob',
        last_name: 'Grant',
        address1: '92 Scholes Street',
        address2: 'Apt 3F',
        city: 'Brooklyn',
        province: 'New York',
        zip: '11206',
        country: 'United States',
        phone: '',
        include: {
          payment_methods: [
            {
              id: '67526723',
              payment_details: {
                brand: 'visa',
                exp_month: 1,
                exp_year: 2030,
                last4: '4242',
                __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
              },
              __typename: 'Recharge_PaymentMethod'
            }
          ],
          __typename: 'Recharge_AddressIncludeProperty'
        },
        __typename: 'Recharge_Address'
      },
      rechargeProduct: {
        id: '2426217',
        discount_amount: 90,
        subscription_defaults: {
          order_interval_frequency_options: ['30', '60'],
          __typename: 'Recharge_ProductSubscriptionDefaultsProperty'
        },
        __typename: 'Recharge_Product'
      },
      __typename: 'Recharge_Subscription'
    },
    {
      id: '271016815',
      customer_id: '91156497',
      address_id: '101027982',
      status: 'ACTIVE',
      created_at: '2022-08-12T17:38:35',
      updated_at: '2022-08-12T17:38:35',
      price: 172.8,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '30',
      shopify_product_id: '6857243132004',
      quantity: 1,
      variant_title: 'XS / Black',
      shopify_variant_id: '40234670260324',
      next_charge_scheduled_at: '2022-09-11T00:00:00',
      cancelled_at: null,
      charges: [
        {
          id: '634361936',
          scheduled_at: '2022-09-11T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot_large.jpg?v=1654530734_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '172.80',
              quantity: 1,
              shopify_product_id: '6857243132004',
              shopify_variant_id: '40234670260324',
              subscription_id: '271016815',
              title: 'Basic Tee 6-Pack',
              variant_title: 'XS / Black',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'QUEUED',
          address_id: '101027982',
          shopifyOrder: null,
          __typename: 'Recharge_Charge'
        },
        {
          id: '634361942',
          scheduled_at: '2022-08-12T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/product-page-02-secondary-product-shot_large.jpg?v=1654530734_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '172.8',
              quantity: 1,
              shopify_product_id: '6857243132004',
              shopify_variant_id: '40234670260324',
              subscription_id: '271016815',
              title: 'Basic Tee 6-Pack',
              variant_title: 'XS / Black',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          address_id: '101027982',
          shopifyOrder: { processedAt: '2022-08-12T21:38:26Z', fulfillments: [], __typename: 'Shopify_Order' },
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        first_name: 'Michael',
        last_name: 'Shick',
        address1: '112 West 34th Street',
        address2: '',
        city: 'New York',
        province: 'New York',
        zip: '10120',
        country: 'United States',
        phone: '+19193600095',
        include: {
          payment_methods: [
            {
              id: '64262523',
              payment_details: {
                brand: 'visa',
                exp_month: 3,
                exp_year: 2040,
                last4: '4242',
                __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
              },
              __typename: 'Recharge_PaymentMethod'
            }
          ],
          __typename: 'Recharge_AddressIncludeProperty'
        },
        __typename: 'Recharge_Address'
      },
      rechargeProduct: {
        id: '2493977',
        discount_amount: 10,
        subscription_defaults: {
          order_interval_frequency_options: ['30', '90'],
          __typename: 'Recharge_ProductSubscriptionDefaultsProperty'
        },
        __typename: 'Recharge_Product'
      },
      __typename: 'Recharge_Subscription'
    },
    {
      id: '264305561',
      customer_id: '91156497',
      address_id: '102406653',
      status: 'ACTIVE',
      created_at: '2022-07-20T17:04:07',
      updated_at: '2022-08-29T12:10:20',
      price: 0.29,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '30',
      shopify_product_id: '6827069505636',
      quantity: 1,
      variant_title: 'Black / S',
      shopify_variant_id: '40184079351908',
      next_charge_scheduled_at: '2022-09-28T00:00:00',
      cancelled_at: null,
      charges: [
        {
          id: '620868656',
          scheduled_at: '2022-07-20T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '0.29',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              subscription_id: '264305561',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          address_id: '99363537',
          shopifyOrder: { processedAt: '2022-07-20T21:03:40Z', fulfillments: [], __typename: 'Shopify_Order' },
          __typename: 'Recharge_Charge'
        },
        {
          id: '644260553',
          scheduled_at: '2022-09-28T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '0.29',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              subscription_id: '264305561',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          address_id: '102406653',
          shopifyOrder: { processedAt: '2022-08-29T16:10:15Z', fulfillments: [], __typename: 'Shopify_Order' },
          __typename: 'Recharge_Charge'
        },
        {
          id: '644267774',
          scheduled_at: '2022-09-28T00:00:00',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemsImagesProperty'
              },
              price: '0.29',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              subscription_id: '264305561',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItemsProperty'
            }
          ],
          currency: 'USD',
          status: 'QUEUED',
          address_id: '102406653',
          shopifyOrder: null,
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        first_name: 'Michael',
        last_name: 'Shick',
        address1: '156 Kent Street',
        address2: 'Apt 2',
        city: 'Brooklyn',
        province: 'New York',
        zip: '11222',
        country: 'United States',
        phone: '+19193600095',
        include: {
          payment_methods: [
            {
              id: '66493468',
              payment_details: {
                brand: 'Visa',
                exp_month: 4,
                exp_year: 2024,
                last4: '4242',
                __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
              },
              __typename: 'Recharge_PaymentMethod'
            }
          ],
          __typename: 'Recharge_AddressIncludeProperty'
        },
        __typename: 'Recharge_Address'
      },
      rechargeProduct: {
        id: '2426217',
        discount_amount: 90,
        subscription_defaults: {
          order_interval_frequency_options: ['30', '60'],
          __typename: 'Recharge_ProductSubscriptionDefaultsProperty'
        },
        __typename: 'Recharge_Product'
      },
      __typename: 'Recharge_Subscription'
    }
  ]
};

// @ts-expect-error
export const subscriptionProductVariantResponse: SubscriptionProductVariantQueryResponse = {
  variant: {
    id: 'gid://shopify/ProductVariant/40234670260324',
    title: 'XS / Black',
    price: '10.00',
    selectedOptions: [
      { name: 'Size', value: 'XS', __typename: 'Shopify_SelectedOption' },
      { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
    ],
    product: {
      id: 'gid://shopify/Product/6857243132004',
      handle: 'basic-tee-6-pack',
      title: 'An Exceptional Tee for Men',
      description:
        "This tee is the bee's knees. It is made of a proprietary blend of 12 herbs and spices. It will keep you warm when it's cold outside (down to -10º, guaranteed) and it will keep you cold when it's hot outside. It will pick you up when you're down and spin you all around. The Good Organic Synthetic Magical Colorful! Everything Else This shirt should not be washed, worn indoors, or slept-in. Significantly increases your change of developing hang nails. Tends to attract raccoons.",
      descriptionHtml:
        '<p>This tee is the bee\'s knees. It is made of a proprietary blend of 12 herbs and spices. It will keep you warm when it\'s cold outside (down to -10º, guaranteed) and it will keep you cold when it\'s hot outside. It will pick you up when you\'re down and spin you all around.<br></p>\n<h3>The Good<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Organic<br>\n</li>\n<li>Synthetic<br>\n</li>\n<li>Magical<br>\n</li>\n<li>Colorful!<br>\n</li>\n</ul>\n<h3>Everything Else<br data-mce-fragment="1">\n</h3>\n<p>This shirt should not be washed, worn indoors, or slept-in. Significantly increases your change of developing hang nails. Tends to attract raccoons.</p>',
      featuredImage: {
        id: 'gid://shopify/ProductImage/29703186710628',
        url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._800x800.png.webp?v=1660406577',
        width: 1024,
        height: 1024,
        altText: null,
        __typename: 'Shopify_Image'
      },
      priceRangeV2: {
        maxVariantPrice: { currencyCode: 'USD', amount: '12.0', __typename: 'Shopify_MoneyV2' },
        minVariantPrice: { currencyCode: 'USD', amount: '10.0', __typename: 'Shopify_MoneyV2' },
        __typename: 'Shopify_ProductPriceRangeV2'
      },
      variants: {
        edges: [
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670162020',
              availableForSale: false,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 0,
              sku: '',
              title: 'XXS / Black',
              selectedOptions: [
                { name: 'Size', value: 'XXS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670194788',
              availableForSale: false,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 0,
              sku: '',
              title: 'XXS / Gray',
              selectedOptions: [
                { name: 'Size', value: 'XXS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670227556',
              availableForSale: false,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 0,
              sku: '',
              title: 'XXS / White',
              selectedOptions: [
                { name: 'Size', value: 'XXS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670260324',
              availableForSale: false,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 0,
              sku: '',
              title: 'XS / Black',
              selectedOptions: [
                { name: 'Size', value: 'XS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670293092',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'XS / Gray',
              selectedOptions: [
                { name: 'Size', value: 'XS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670325860',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'XS / White',
              selectedOptions: [
                { name: 'Size', value: 'XS', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670358628',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'S / Black',
              selectedOptions: [
                { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670391396',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 4,
              sku: '',
              title: 'S / Gray',
              selectedOptions: [
                { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670424164',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'S / White',
              selectedOptions: [
                { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670456932',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'M / Black',
              selectedOptions: [
                { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670489700',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'M / Gray',
              selectedOptions: [
                { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670555236',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'M / White',
              selectedOptions: [
                { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670588004',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'L / Black',
              selectedOptions: [
                { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670620772',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'L / Gray',
              selectedOptions: [
                { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670653540',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'L / White',
              selectedOptions: [
                { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670686308',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'XL / Black',
              selectedOptions: [
                { name: 'Size', value: 'XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670719076',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'XL / Gray',
              selectedOptions: [
                { name: 'Size', value: 'XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670751844',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: 'XL / White',
              selectedOptions: [
                { name: 'Size', value: 'XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670784612',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '2XL / Black',
              selectedOptions: [
                { name: 'Size', value: '2XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670817380',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '2XL / Gray',
              selectedOptions: [
                { name: 'Size', value: '2XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670850148',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '10.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '2XL / White',
              selectedOptions: [
                { name: 'Size', value: '2XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670882916',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '12.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '3XL / Black',
              selectedOptions: [
                { name: 'Size', value: '3XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670915684',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '12.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '3XL / Gray',
              selectedOptions: [
                { name: 'Size', value: '3XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          },
          {
            node: {
              id: 'gid://shopify/ProductVariant/40234670981220',
              availableForSale: true,
              compareAtPrice: null,
              image: null,
              price: '12.00',
              inventoryPolicy: 'DENY',
              sellableOnlineQuantity: 5,
              sku: '',
              title: '3XL / White',
              selectedOptions: [
                { name: 'Size', value: '3XL', __typename: 'Shopify_SelectedOption' },
                { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' }
              ],
              __typename: 'Shopify_ProductVariant'
            },
            __typename: 'Shopify_ProductVariantEdge'
          }
        ],
        __typename: 'Shopify_ProductVariantConnection'
      },
      options: [
        {
          name: 'Size',
          position: 1,
          id: 'gid://shopify/ProductOption/8766172332132',
          values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
          __typename: 'Shopify_ProductOption'
        },
        {
          name: 'Color',
          position: 2,
          id: 'gid://shopify/ProductOption/8766172364900',
          values: ['Black', 'Gray', 'White'],
          __typename: 'Shopify_ProductOption'
        }
      ],
      __typename: 'Shopify_Product'
    },
    __typename: 'Shopify_ProductVariant'
  }
} as const;

export const getMyPaymentMethodsResponse: GetMyPaymentMethodsQueryResponse = {
  paymentMethods: [
    {
      id: '64262523',
      payment_details: {
        brand: 'visa',
        exp_month: 3,
        exp_year: 2040,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    },
    {
      id: '66493468',
      payment_details: {
        brand: 'Visa',
        exp_month: 4,
        exp_year: 2024,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    }
  ]
};

export const getMyAddressPaymentMethodsResponse: GetMyAddressPaymentMethodsQueryResponse = {
  paymentMethods: [
    {
      id: '66493468',
      payment_details: {
        brand: 'Visa',
        exp_month: 4,
        exp_year: 2024,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    }
  ]
};

export const updateMyPaymentMethodResponse: UpdateMyPaymentMethodMutationResponse = {
  updatePaymentMethod: { id: '101027982', __typename: 'Recharge_Address' }
};

export const sendMyUpdatePaymentEmailMutation: SendMyUpdatePaymentEmailMutationResponse = {
  sendUpdatePaymentEmail: { customer_id: '91156497', __typename: 'Recharge_CreateNotificationResponse' }
};
