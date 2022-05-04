import { useLazyQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';
import type { Dispatch } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useDebounce from 'services/hooks/useDebounce';
import type { Stripe_Product } from 'types/takeshape';

export interface UseSearchProps {
  graphqlQuery: DocumentNode;
  filterFn?: (result: any) => boolean;
}

export const useSearch = ({
  graphqlQuery,
  filterFn
}: UseSearchProps): [boolean, string, Stripe_Product[], Dispatch<string>, () => void] => {
  filterFn = filterFn ?? ((x) => x);
  const [search, { loading, data }] = useLazyQuery(graphqlQuery);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
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

    setResults(data.search.results.filter(filterFn));
  }, [data, loading]);

  const resetQuery = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  return [loading, query, results, setQuery, resetQuery];
};

export default useSearch;
