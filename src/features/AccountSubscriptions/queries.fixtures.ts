import {
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  SendMyUpdatePaymentEmailMutationResponse,
  UpdateMyPaymentMethodMutationResponse
} from 'types/takeshape';

export const getMySubscriptionListResponse: GetMySubscriptionListQueryResponse = {
  subscriptions: [
    {
      id: '281367264',
      customer_id: '91156497',
      address_id: '103589931',
      status: 'ACTIVE',
      created_at: '2022-09-13T15:12:01',
      updated_at: '2022-09-13T15:12:01',
      price: 9,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '60',
      shopify_product_id: '6857243132004',
      quantity: 3,
      variant_title: 'L / Gray',
      shopify_variant_id: '40234670620772',
      next_charge_scheduled_at: '2022-11-12T00:00:00',
      cancelled_at: null,
      charges: [
        {
          id: '654077606',
          created_at: '2022-09-13T15:12:01',
          scheduled_at: '2022-11-12T00:00:00',
          processed_at: null,
          updated_at: '2022-09-13T15:12:02',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._large.png?v=1660406577_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '9.00',
              quantity: 3,
              shopify_product_id: '6857243132004',
              shopify_variant_id: '40234670620772',
              title: 'An Exceptional Tee for Men',
              variant_title: 'L / Gray',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'QUEUED',
          shopifyOrder: null,
          __typename: 'Recharge_Charge'
        },
        {
          id: '654077620',
          created_at: '2022-09-13T15:12:02',
          scheduled_at: '2022-09-13T00:00:00',
          processed_at: '2022-09-13T15:11:52',
          updated_at: '2022-09-13T15:12:02',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._large.png?v=1660406577_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '9.0',
              quantity: 3,
              shopify_product_id: '6857243132004',
              shopify_variant_id: '40234670620772',
              title: 'An Exceptional Tee for Men',
              variant_title: 'L / Gray',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          shopifyOrder: {
            processedAt: '2022-09-07T15:33:20Z',
            shippingAddress: {
              firstName: 'Michael',
              lastName: 'Shick',
              address1: '112 West 34th Street',
              address2: '',
              company: null,
              city: 'New York',
              province: 'New York',
              provinceCode: 'NY',
              country: 'United States',

              zip: '10120',
              phone: null,
              __typename: 'Shopify_MailingAddress'
            },
            fulfillments: [
              {
                createdAt: '2022-09-13T17:08:22Z',
                updatedAt: '2022-09-13T17:08:22Z',
                deliveredAt: null,
                estimatedDeliveryAt: null,
                inTransitAt: null,
                displayStatus: 'FULFILLED',
                trackingInfo: [
                  {
                    url: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1234567891',
                    number: '1234567891',
                    company: 'USPS'
                  }
                ],
                fulfillmentLineItems: {
                  edges: [
                    {
                      node: {
                        lineItem: {
                          variant: {
                            id: 'gid://shopify/ProductVariant/40184079581284',
                            __typename: 'Shopify_ProductVariant'
                          },
                          __typename: 'Shopify_LineItem'
                        },
                        __typename: 'Shopify_FulfillmentLineItem'
                      },
                      __typename: 'Shopify_FulfillmentLineItemEdge'
                    }
                  ],
                  __typename: 'Shopify_FulfillmentLineItemConnection'
                },
                __typename: 'Shopify_Fulfillment'
              }
            ],
            __typename: 'Shopify_Order'
          },
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        id: '103589931',
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
              id: '69203186',
              payment_details: {
                brand: 'Visa',
                exp_month: 4,
                exp_year: 2025,
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
        id: '2689351',
        discount_amount: 10,
        subscription_defaults: {
          order_interval_frequency_options: ['30', '60', '90'],
          __typename: 'Recharge_ProductSubscriptionDefaultsProperty'
        },
        __typename: 'Recharge_Product'
      },
      __typename: 'Recharge_Subscription',
      shopifyProductVariant: {
        id: 'gid://shopify/ProductVariant/40234670620772',
        availableForSale: true,
        compareAtPrice: null,
        image: null,
        price: '10.00',
        inventoryPolicy: 'DENY',
        sellableOnlineQuantity: 2,
        sku: '',
        title: 'L / Gray',
        selectedOptions: [
          { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
          { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
        ],
        product: {
          id: 'gid://shopify/Product/6857243132004',
          handle: 'basic-tee-6-pack',
          title: 'An Exceptional Tee for Men',
          description:
            "This tee is the bee's knees. It is made of a proprietary blend of 12 herbs and spices. It will keep you warm when it's cold outside (down to -10º, guaranteed) and it will keep you cold when it's hot outside. It will pick you up when you're down and spin you all around. The Good Organic Synthetic Magical Colorful! Everything Else This shirt should not be washed, worn indoors, or slept-in. Significantly increases your change of developing hang nails. Tends to attract raccoons.",
          descriptionHtml:
            '<p>This tee is the bee\'s knees. It is made of a proprietary blend of 12 herbs and spices. It will keep you warm when it\'s cold outside (down to -10º, guaranteed) and it will keep you cold when it\'s hot outside. It will pick you up when you\'re down and spin you all around.<br></p>\n<h3>The Good<br data-mce-fragment="1">\n</h3>\n<ul>\n<li>Organic<br>\n</li>\n<li>Synthetic<br>\n</li>\n<li>Magical<br>\n</li>\n<li>Colorful!<br>\n</li>\n</ul>\n<h3>Everything Else<br data-mce-fragment="1">\n</h3>\n<p>This shirt should not be washed, worn indoors, or slept-in. Significantly increases your change of developing hang nails. Tends to attract raccoons.</p>',
          totalInventory: 91,
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
            nodes: [
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
                id: 'gid://shopify/ProductVariant/40234670456932',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '10.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 4,
                sku: '',
                title: 'M / Black',
                selectedOptions: [
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' },
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
                id: 'gid://shopify/ProductVariant/40234670489700',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '10.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 3,
                sku: '',
                title: 'M / Gray',
                selectedOptions: [
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' },
                  { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
              {
                id: 'gid://shopify/ProductVariant/40234670588004',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '10.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 3,
                sku: '',
                title: 'L / Black',
                selectedOptions: [
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
                id: 'gid://shopify/ProductVariant/40234670620772',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '10.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 2,
                sku: '',
                title: 'L / Gray',
                selectedOptions: [
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' },
                  { name: 'Color', value: 'Gray', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
              {
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
    },
    {
      id: '279137983',
      customer_id: '91156497',
      address_id: '103080232',
      status: 'ACTIVE',
      created_at: '2022-09-07T11:33:29',
      updated_at: '2022-09-13T14:54:10',
      price: 3,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '60',
      shopify_product_id: '6827069505636',
      quantity: 4,
      variant_title: 'Red / M',
      shopify_variant_id: '40184079581284',
      next_charge_scheduled_at: '2022-10-15T00:00:00',
      cancelled_at: null,
      charges: [
        {
          id: '650156655',
          created_at: '2022-09-07T11:33:30',
          scheduled_at: '2022-09-07T00:00:00',
          processed_at: '2022-09-07T11:33:22',
          updated_at: '2022-09-07T11:33:30',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '3.0',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079581284',
              title: 'Mesh Gym Shorts',
              variant_title: 'Red / M',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          shopifyOrder: {
            processedAt: '2022-09-07T15:33:20Z',
            shippingAddress: {
              firstName: 'Michael',
              lastName: 'Shick',
              address1: '112 West 34th Street',
              address2: '',
              company: null,
              city: 'New York',
              province: 'New York',
              provinceCode: 'NY',
              country: 'United States',

              zip: '10120',
              phone: null,
              __typename: 'Shopify_MailingAddress'
            },
            fulfillments: [
              {
                createdAt: '2022-09-13T17:08:22Z',
                updatedAt: '2022-09-13T17:08:22Z',
                deliveredAt: null,
                estimatedDeliveryAt: null,
                inTransitAt: null,
                displayStatus: 'FULFILLED',
                trackingInfo: [
                  {
                    url: 'https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=1234567891',
                    number: '1234567891',
                    company: 'USPS'
                  }
                ],
                fulfillmentLineItems: {
                  edges: [
                    {
                      node: {
                        lineItem: {
                          variant: {
                            id: 'gid://shopify/ProductVariant/40184079581284',
                            __typename: 'Shopify_ProductVariant'
                          },
                          __typename: 'Shopify_LineItem'
                        },
                        __typename: 'Shopify_FulfillmentLineItem'
                      },
                      __typename: 'Shopify_FulfillmentLineItemEdge'
                    }
                  ],
                  __typename: 'Shopify_FulfillmentLineItemConnection'
                },
                __typename: 'Shopify_Fulfillment'
              }
            ],
            __typename: 'Shopify_Order'
          },
          __typename: 'Recharge_Charge'
        },
        {
          id: '654070355',
          created_at: '2022-09-13T14:54:10',
          scheduled_at: '2022-10-15T00:00:00',
          processed_at: null,
          updated_at: '2022-09-13T14:54:52',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '3.00',
              quantity: 4,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079581284',
              title: 'Mesh Gym Shorts',
              variant_title: 'Red / M',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'QUEUED',
          shopifyOrder: null,
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        id: '103080232',
        first_name: 'Michael',
        last_name: 'Shick',
        address1: 'Foo Steet',
        address2: '',
        city: 'New York',
        province: 'New York',
        zip: '10120',
        country: 'United States',
        phone: '+19193600095',
        include: {
          payment_methods: [
            {
              id: '68715258',
              payment_details: {
                brand: 'Visa',
                exp_month: 2,
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
      __typename: 'Recharge_Subscription',
      shopifyProductVariant: {
        id: 'gid://shopify/ProductVariant/40184079581284',
        availableForSale: true,
        compareAtPrice: null,
        image: null,
        price: '30.00',
        inventoryPolicy: 'DENY',
        sellableOnlineQuantity: 4,
        sku: '',
        title: 'Red / M',
        selectedOptions: [
          { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
          { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
        ],
        product: {
          id: 'gid://shopify/Product/6827069505636',
          handle: 'mesh-gym-shorts',
          title: 'Mesh Gym Shorts',
          description:
            "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
          descriptionHtml:
            '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
          totalInventory: 31,
          featuredImage: {
            id: 'gid://shopify/ProductImage/29201784373348',
            url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_800x800.png.webp?v=1650570316',
            width: 860,
            height: 791,
            altText: null,
            __typename: 'Shopify_Image'
          },
          priceRangeV2: {
            maxVariantPrice: { currencyCode: 'USD', amount: '31.0', __typename: 'Shopify_MoneyV2' },
            minVariantPrice: { currencyCode: 'USD', amount: '29.0', __typename: 'Shopify_MoneyV2' },
            __typename: 'Shopify_ProductPriceRangeV2'
          },
          variants: {
            nodes: [
              {
                id: 'gid://shopify/ProductVariant/40184079351908',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '29.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 2,
                sku: '',
                title: 'Black / S',
                selectedOptions: [
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
                id: 'gid://shopify/ProductVariant/40184079581284',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 4,
                sku: '',
                title: 'Red / M',
                selectedOptions: [
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              }
            ],
            __typename: 'Shopify_ProductVariantConnection'
          },
          options: [
            {
              name: 'Color',
              position: 1,
              id: 'gid://shopify/ProductOption/8728584126564',
              values: ['Black', 'White', 'Red'],
              __typename: 'Shopify_ProductOption'
            },
            {
              name: 'Size',
              position: 2,
              id: 'gid://shopify/ProductOption/8749149356132',
              values: ['S', 'M', 'L'],
              __typename: 'Shopify_ProductOption'
            }
          ],
          __typename: 'Shopify_Product'
        },
        __typename: 'Shopify_ProductVariant'
      }
    },
    {
      id: '264305561',
      customer_id: '91156497',
      address_id: '102726497',
      status: 'CANCELLED',
      created_at: '2022-07-20T17:04:07',
      updated_at: '2022-09-06T10:56:45',
      price: 0.29,
      presentment_currency: 'USD',
      order_interval_unit: 'day',
      order_interval_frequency: '60',
      shopify_product_id: '6827069505636',
      quantity: 1,
      variant_title: 'Black / S',
      shopify_variant_id: '40184079351908',
      next_charge_scheduled_at: null,
      cancelled_at: '2022-09-06T10:56:45',
      charges: [
        {
          id: '620868656',
          created_at: '2022-07-20T17:04:09',
          scheduled_at: '2022-07-20T00:00:00',
          processed_at: '2022-07-20T17:03:42',
          updated_at: '2022-07-20T17:04:09',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '0.29',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          shopifyOrder: {
            processedAt: '2022-07-20T21:03:40Z',
            shippingAddress: {
              firstName: 'Michael',
              lastName: 'Shick',
              address1: '156 Kent Street',
              address2: 'Apt 2',
              company: null,
              city: 'Brooklyn',
              province: 'New York',
              provinceCode: 'NY',
              country: 'United States',

              zip: '11222',
              phone: null,
              __typename: 'Shopify_MailingAddress'
            },
            fulfillments: [],
            __typename: 'Shopify_Order'
          },
          __typename: 'Recharge_Charge'
        },
        {
          id: '644260553',
          created_at: '2022-08-29T11:51:36',
          scheduled_at: '2022-09-28T00:00:00',
          processed_at: '2022-08-29T12:10:23',
          updated_at: '2022-08-29T12:10:23',
          line_items: [
            {
              images: {
                small:
                  'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_large.png?v=1650570316_small',
                __typename: 'Recharge_ChargeLineItemImagesProperty'
              },
              price: '0.29',
              quantity: 1,
              shopify_product_id: '6827069505636',
              shopify_variant_id: '40184079351908',
              title: 'Mesh Gym Shorts',
              variant_title: 'Black / S',
              __typename: 'Recharge_ChargeLineItem'
            }
          ],
          currency: 'USD',
          status: 'SUCCESS',
          shopifyOrder: {
            processedAt: '2022-08-29T16:10:15Z',
            shippingAddress: {
              firstName: 'Michael',
              lastName: 'Shick',
              address1: '156 Kent Street',
              address2: 'Apt 2',
              company: null,
              city: 'Brooklyn',
              province: 'New York',
              provinceCode: 'NY',
              country: 'United States',

              zip: '11222',
              phone: '+19193600095',
              __typename: 'Shopify_MailingAddress'
            },
            fulfillments: [],
            __typename: 'Shopify_Order'
          },
          __typename: 'Recharge_Charge'
        }
      ],
      address: {
        id: '102726497',
        first_name: 'Michael',
        last_name: 'Shick',
        address1: '156 Kent Street',
        address2: 'Apt 3',
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
      __typename: 'Recharge_Subscription',
      shopifyProductVariant: {
        id: 'gid://shopify/ProductVariant/40184079351908',
        availableForSale: true,
        compareAtPrice: null,
        image: null,
        price: '29.00',
        inventoryPolicy: 'DENY',
        sellableOnlineQuantity: 2,
        sku: '',
        title: 'Black / S',
        selectedOptions: [
          { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
          { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
        ],
        product: {
          id: 'gid://shopify/Product/6827069505636',
          handle: 'mesh-gym-shorts',
          title: 'Mesh Gym Shorts',
          description:
            "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
          descriptionHtml:
            '<meta charset="utf-8"><span>Don\'t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.</span>',
          totalInventory: 31,
          featuredImage: {
            id: 'gid://shopify/ProductImage/29201784373348',
            url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts_800x800.png.webp?v=1650570316',
            width: 860,
            height: 791,
            altText: null,
            __typename: 'Shopify_Image'
          },
          priceRangeV2: {
            maxVariantPrice: { currencyCode: 'USD', amount: '31.0', __typename: 'Shopify_MoneyV2' },
            minVariantPrice: { currencyCode: 'USD', amount: '29.0', __typename: 'Shopify_MoneyV2' },
            __typename: 'Shopify_ProductPriceRangeV2'
          },
          variants: {
            nodes: [
              {
                id: 'gid://shopify/ProductVariant/40184079351908',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '29.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 2,
                sku: '',
                title: 'Black / S',
                selectedOptions: [
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Black', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'White', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'S', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
                id: 'gid://shopify/ProductVariant/40184079581284',
                availableForSale: true,
                compareAtPrice: null,
                image: null,
                price: '30.00',
                inventoryPolicy: 'DENY',
                sellableOnlineQuantity: 4,
                sku: '',
                title: 'Red / M',
                selectedOptions: [
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'M', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              },
              {
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
                  { name: 'Color', value: 'Red', __typename: 'Shopify_SelectedOption' },
                  { name: 'Size', value: 'L', __typename: 'Shopify_SelectedOption' }
                ],
                __typename: 'Shopify_ProductVariant'
              }
            ],
            __typename: 'Shopify_ProductVariantConnection'
          },
          options: [
            {
              name: 'Color',
              position: 1,
              id: 'gid://shopify/ProductOption/8728584126564',
              values: ['Black', 'White', 'Red'],
              __typename: 'Shopify_ProductOption'
            },
            {
              name: 'Size',
              position: 2,
              id: 'gid://shopify/ProductOption/8749149356132',
              values: ['S', 'M', 'L'],
              __typename: 'Shopify_ProductOption'
            }
          ],
          __typename: 'Shopify_Product'
        },
        __typename: 'Shopify_ProductVariant'
      }
    }
  ]
};

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

export const updateMyPaymentMethodResponse: UpdateMyPaymentMethodMutationResponse = {
  updatePaymentMethod: { id: '101027982', __typename: 'Recharge_Address' }
};

export const sendMyUpdatePaymentEmailMutation: SendMyUpdatePaymentEmailMutationResponse = {
  sendUpdatePaymentEmail: { customer_id: '91156497', __typename: 'Recharge_CreateNotificationResponse' }
};
