import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { sleep } from '../sleep';

// Shopify may throttle in a GraphQL error rather than 429. As a result
// it bypasses RetryLink. Apollo onError can catch it but isn't suited for
// throttle handling as it is synchronous and cannot retry more than once.
export const retryShopifyThrottle = async <T>(
  execute: () => Promise<ApolloQueryResult<T>>,
  attempt = 0
): Promise<ApolloQueryResult<T>> => {
  try {
    return await execute();
  } catch (e) {
    if (e instanceof ApolloError && e.message === 'Throttled' && attempt < 10) {
      await sleep(Math.round(500 + Math.random() * 1000));
      return await retryShopifyThrottle(execute, attempt + 1);
    } else {
      throw e;
    }
  }
};
