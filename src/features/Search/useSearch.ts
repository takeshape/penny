import { useLazyQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { Dispatch, useEffect, useState } from 'react';
import { Stripe_Product } from 'types/takeshape';
import useDebounce from 'utils/hooks/useDebounce';

export interface UseSearchProps {
  graphqlQuery: DocumentNode;
  resultsFn: (data: any) => any[];
}

export const useSearch = ({
  graphqlQuery,
  resultsFn
}: UseSearchProps): [boolean, string, Stripe_Product[], Dispatch<string>] => {
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

    setResults(resultsFn(data));
  }, [data, loading, resultsFn]);

  return [loading, query, results, setQuery];
};

export default useSearch;
