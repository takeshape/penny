const assert = require('assert');

require('dotenv').config();

const takeshapeApiUrl = process.env.NEXT_PUBLIC_BRANCH_TAKESHAPE_API_URL || process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;

assert(takeshapeApiUrl, 'NEXT_PUBLIC_TAKESHAPE_API_URL is required');
assert(takeshapeAnonymousApiKey, 'NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY is required');

/**
 * @type {import('@graphql-codegen/plugin-helpers').Types.Config}
 */
const config = {
  overwrite: true,
  documents: ['src/**/queries.ts', 'src/**/queries.takeshape.ts'],
  schema: {
    // @ts-ignore
    [takeshapeApiUrl]: {
      headers: {
        Authorization: `Bearer ${takeshapeAnonymousApiKey}`
      }
    }
  },
  generates: {
    './src/types/takeshape.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        omitOperationSuffix: true,
        operationResultSuffix: 'Response',
        enumsAsTypes: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: false
        }
      }
    }
  }
};

module.exports = config;
