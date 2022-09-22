require('dotenv').config();

const shopifyStorefrontUrl = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL;
const shopifyStorefrontToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

module.exports = {
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
        avoidOptionals: true
        // maybeValue: 'T | undefined'
      }
    }
  }
};
