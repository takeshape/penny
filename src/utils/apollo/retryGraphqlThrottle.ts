import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { sleep } from '../sleep';

const delayMultiplier = 20;

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
    if (e instanceof ApolloError && e.message === 'Throttled' && attempt < 10) {
      // Exponential backoff with jitter
      await sleep(Math.round(2 * attempt * delayMultiplier + Math.random() * 1000));
      return await retryGraphqlThrottle(execute, attempt + 1);
    } else {
      throw e;
    }
  }
};
