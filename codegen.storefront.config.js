require('dotenv').config();

const shopifyStorefrontUrl = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL;
const shopifyStorefrontToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

// const shopifyStorefrontUrl = 'https://deluxe-sample-project.myshopify.com/api/2022-04/graphql.json';
// const shopifyStorefrontToken = '01dbab55cc6247e7558e76b7ce17b340';

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
        operationResultSuffix: Response
      }
    }
  }
};
