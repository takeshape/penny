import { useLazyQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';
import type { Dispatch } from 'react';
import { useEffect, useState } from 'react';
import useDebounce from 'utils/hooks/useDebounce';

export interface SearchResult {
  id: string;
  title: string;
  imageUrl?: string;
  description?: string;
}

export interface UseSearchProps {
  graphqlQuery: DocumentNode;
  resultsFn: (data: any) => SearchResult[];
}

export function useSearch({
  graphqlQuery,
  resultsFn
}: UseSearchProps): [boolean, string, SearchResult[], Dispatch<string>] {
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
}

export default useSearch;
