import logger from '@/logger';
import { DocumentNode, useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type PaginationDataHookParsedPath = { page: number; cursor: string | null; direction: 'before' | 'after' };

export type PaginationDataHookPageData = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};

export type PaginationDataHookResultTuple<T> = [
  () => void,
  {
    currentPath: PaginationDataHookParsedPath;
    isLoadingPage: boolean;
    isLoadingNextPage: boolean;
    currentPage: number;
    cachedPageData: RefObject<Map<number, T | null>>;
    currentPageData: T;
  }
];

export interface PaginationDataHooksOptions<T extends PaginationDataHookPageData> {
  parsePath: (path: string) => PaginationDataHookParsedPath;
  query: DocumentNode;
  getVariables: (parsedPath: PaginationDataHookParsedPath) => Record<string, unknown>;
  initialPageData: T;
  getPageData: (data: T) => T | null;
  isSamePageData: (a: T, b: T) => boolean;
  noPrefetch?: boolean;
}

/**
 * Load pagination data, with optional prefetch.
 * Requires a data object with Relay cursor-style pagination info
 */
export function usePaginationData<T extends PaginationDataHookPageData>({
  parsePath,
  initialPageData,
  query,
  getVariables,
  getPageData,
  isSamePageData,
  noPrefetch
}: PaginationDataHooksOptions<T>): PaginationDataHookResultTuple<T> {
  const apolloClient = useApolloClient();

  const { asPath } = useRouter();
  const currentPath = useMemo(() => parsePath(asPath), [asPath, parsePath]);

  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

  const [currentPage, setCurrentPage] = useState(currentPath.page);
  const cachedPageData = useRef<Map<number, T | null>>(new Map([[currentPath.page, initialPageData]]));
  const currentPageData = useMemo(() => cachedPageData.current.get(currentPage), [currentPage]);

  if (!currentPageData) {
    throw new Error('Could not load currentPageData');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const loadPage = useCallback(
    async ({ page, cursor, direction }: PaginationDataHookParsedPath) => {
      const variables = getVariables({ page, cursor, direction });

      const { data, error } = await apolloClient.query({
        query,
        variables
      });

      if (error) {
        throw error;
      }

      const pageData = getPageData(data);

      cachedPageData.current.set(page, pageData);

      return pageData;
    },
    [apolloClient, getPageData, getVariables, query]
  );

  const loadAndSetCurrentPage = useCallback(async () => {
    const { page, cursor, direction } = currentPath;
    setIsLoadingPage(true);

    // An error loading the current page is critical, don't capture
    await loadPage({ page, cursor, direction });

    setCurrentPage(page);
    setIsLoadingPage(false);
  }, [loadPage, setCurrentPage, currentPath]);

  const loadNextPage = useCallback(
    async (cursor: string) => {
      const page = currentPath.page + 1;
      setIsLoadingNextPage(true);

      try {
        await loadPage({ page, cursor, direction: 'after' });
      } catch (e) {
        // Loading the next page is not critical
        logger.error(e);
      }

      setIsLoadingNextPage(false);
    },
    [currentPath.page, loadPage]
  );

  const setOrLoadPage = useCallback(async () => {
    const cachedPage = cachedPageData.current.get(currentPath.page);

    // Set the cached page immediately
    if (cachedPage && !isSamePageData(currentPageData, cachedPage)) {
      setCurrentPage(currentPath.page);
    }

    // Load the needed page, then set it
    if (!cachedPage) {
      loadAndSetCurrentPage();
    }

    // Just load the next page, pre-fetch
    const nextPage = currentPath.page + 1;
    if (
      !noPrefetch &&
      cachedPage?.pageInfo?.hasNextPage &&
      !cachedPageData.current.has(nextPage) &&
      isSamePageData(currentPageData, cachedPage) &&
      !isLoadingNextPage
    ) {
      loadNextPage(cachedPage.pageInfo.endCursor ?? '');
    }
  }, [
    currentPath.page,
    isSamePageData,
    currentPageData,
    noPrefetch,
    isLoadingNextPage,
    loadAndSetCurrentPage,
    loadNextPage
  ]);

  return [
    setOrLoadPage,
    { isLoadingPage, isLoadingNextPage, currentPath, currentPage, cachedPageData, currentPageData }
  ];
}
