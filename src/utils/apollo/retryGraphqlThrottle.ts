import { ApolloError, ApolloQueryResult } from '@apollo/client';
import logger from 'logger';
import { sleep } from '../sleep';

const maxAttempts = 15;
const backoffBase = 500;
const jitterBase = 10000;

// Shopify may throttle in a GraphQL error rather than 429. As a result
// it bypasses RetryLink. Apollo onError can catch it but isn't suited for
// throttle handling as it is synchronous and cannot retry more than once.
export const retryGraphqlThrottle = async <T>(
  execute: () => Promise<ApolloQueryResult<T>>,
  attempt = 1
): Promise<ApolloQueryResult<T>> => {
  try {
    return await execute();
  } catch (e) {
    if (e instanceof ApolloError && e.message === 'Throttled' && attempt < maxAttempts) {
      // Exponential backoff with jitter
      const backoff = backoffBase * 2 ** attempt;
      const jitter = Math.random() * jitterBase;
      const delay = Math.round(backoff + jitter);
      await sleep(delay);
      logger.info(`Retrying throttled request (${delay}ms): ${attempt} / ${maxAttempts}`);
      return await retryGraphqlThrottle(execute, attempt + 1);
    } else {
      throw e;
    }
  }
};
