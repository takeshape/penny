const assert = require('assert');

require('dotenv').config();

const shopifyStorefrontUrl = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL;
const shopifyStorefrontToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

assert(shopifyStorefrontUrl, 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL is required');
assert(shopifyStorefrontToken, 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN is required');

/**
 * @type {import('@graphql-codegen/plugin-helpers').Types.Config}
 */
const config = {
  overwrite: true,
  documents: 'src/**/queries.storefront.ts',
  schema: {
    [shopifyStorefrontUrl]: {
      headers: {
        ['X-Shopify-Storefront-Access-Token']: shopifyStorefrontToken
      }
    }
  },
  generates: {
    './src/types/storefront.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        omitOperationSuffix: true,
        operationResultSuffix: 'Response',
        enumsAsTypes: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: true
        }
      }
    }
  }
};

module.exports = config;
