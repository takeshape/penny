require('dotenv').config();

const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;

module.exports = {
  overwrite: true,
  documents: ['src/**/queries.ts', 'src/**/queries.takeshape.ts'],
  schema: {
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
