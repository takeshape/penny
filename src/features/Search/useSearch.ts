import useDebounce from '@/utils/hooks/useDebounce';
import { useLazyQuery } from '@apollo/client';
import type { DocumentNode } from 'graphql';
import type { Dispatch } from 'react';
import { useEffect, useState } from 'react';
import { SearchItem } from './types';

export interface UseSearchProps {
  graphqlQuery: DocumentNode;
  resultsFn: (data: any) => SearchItem[];
}

export interface UseSearch {
  loading: boolean;
  query: string;
  results: SearchItem[] | null;
  setQuery: Dispatch<string>;
}

export function useSearch({ graphqlQuery, resultsFn }: UseSearchProps): UseSearch {
  const [search, { loading, data }] = useLazyQuery(graphqlQuery);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[] | null>(null);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      search({ variables: { query: debouncedQuery } });
    } else {
      setResults(null);
    }
  }, [search, debouncedQuery, setResults]);

  useEffect(() => {
    if (loading || !data) {
      return;
    }

    setResults(resultsFn(data));
  }, [data, loading, resultsFn]);

  return { loading, query, results, setQuery };
}
