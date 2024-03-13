import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
import assert from 'node:assert';

dotenv.config({ path: `.env` });
dotenv.config({ path: `.env.local` });

const shopifyStorefrontUrl = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL;
const shopifyStorefrontToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

assert(shopifyStorefrontUrl, 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL is required');
assert(shopifyStorefrontToken, 'NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN is required');

const config: CodegenConfig = {
  overwrite: true,
  documents: 'src/**/queries.storefront.ts',
  schema: {
    // @ts-ignore
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

export default config;
