import { useLazyQuery } from '@apollo/client';
import { SearchStripeProducts } from 'queries';
import type { Dispatch } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useDebounce from 'services/hooks/useDebounce';
import type { Stripe_Product } from 'types/takeshape';

export const useSearch = (): [boolean, string, Stripe_Product[], Dispatch<string>, () => void] => {
  const [search, { loading, data }] = useLazyQuery(SearchStripeProducts);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  console.log({ loading, data });
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      search({ variables: { query: debouncedQuery } });
    } else {
      setResults([]);
    }
  }, [search, debouncedQuery, setResults]);

  useEffect(() => {
    if (loading || !data) {
      return;
    }

    setResults(data.products.results.filter((result) => result.__typename === 'Stripe_Product'));
  }, [data, loading]);

  const resetQuery = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return [loading, query, results, setQuery, resetQuery];
};

export default useSearch;
