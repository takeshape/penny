import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
import assert from 'node:assert';

dotenv.config({ path: `.env` });
dotenv.config({ path: `.env.local` });

const takeshapeApiUrl = process.env.NEXT_PUBLIC_BRANCH_TAKESHAPE_API_URL || process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;

assert(takeshapeApiUrl, 'NEXT_PUBLIC_TAKESHAPE_API_URL is required');
assert(takeshapeAnonymousApiKey, 'NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY is required');

const config: CodegenConfig = {
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

export default config;
