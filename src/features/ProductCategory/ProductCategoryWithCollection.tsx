import { useApolloClient } from '@apollo/client';
import Seo from 'components/Seo';
import logger from 'logger';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ProductCategory } from './ProductCategory';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from './queries';
import { getCollection, getCurrentTitle, getNextUrl, parsePathname } from './transforms';
import { ProductCategoryCollection, ProductCategoryProductListItem } from './types';

function isSameCollection(collA: ProductCategoryCollection, collB: ProductCategoryCollection) {
  return (
    collA.pageInfo.startCursor === collB.pageInfo.startCursor && collA.pageInfo.endCursor === collB.pageInfo.endCursor
  );
}

export interface ProductCategoryWithCollectionProps {
  collection: ProductCategoryCollection;
  pageSize: number;
}

export const ProductCategoryWithCollection = ({ collection, pageSize }: ProductCategoryWithCollectionProps) => {
  const apolloClient = useApolloClient();

  const { push, asPath } = useRouter();
  const currentPath = parsePathname(collection, asPath);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(collection);
  const [currentTitle, setCurrentTitle] = useState(getCurrentTitle(collection, currentPath.page));
  const cachedPages = useRef<Map<number, ProductCategoryCollection>>(new Map([[currentPath.page, collection]]));

  const setPage = useCallback((page, pageCollection) => {
    setCurrentPage(pageCollection);
    setCurrentTitle(getCurrentTitle(pageCollection, page));
    window.scrollTo(0, 0);
  }, []);

  const loadPage = useCallback(
    async (page, cursor, direction = 'after') => {
      const variables =
        direction === 'before'
          ? {
              handle: collection.handle,
              last: pageSize,
              before: cursor
            }
          : {
              handle: collection.handle,
              first: pageSize,
              after: cursor
            };

      const { data, error } = await apolloClient.query<
        ProductCategoryShopifyCollectionResponse,
        ProductCategoryShopifyCollectionArgs
      >({
        query: ProductCategoryShopifyCollectionQuery,
        variables
      });

      if (error) {
        throw error;
      }

      const loadedCollection = getCollection(data);

      cachedPages.current.set(page, loadedCollection);

      return loadedCollection;
    },
    [apolloClient, collection.handle, pageSize]
  );

  const loadAndSetCurrentPage = useCallback(async () => {
    const { page, cursor, direction } = currentPath;
    setIsLoadingPage(true);

    // An error loading the current page is critical, don't capture
    const loadedPage = await loadPage(page, cursor, direction);

    setPage(loadedPage, page);
    setIsLoadingPage(false);
  }, [loadPage, setPage, currentPath]);

  const loadNextPage = useCallback(
    async (cursor) => {
      const page = currentPath.page + 1;
      setIsLoadingNextPage(true);

      try {
        await loadPage(page, cursor);
      } catch (e) {
        // Loading the next page is not critical
        logger.error(e);
      }

      setIsLoadingNextPage(false);
    },
    [currentPath.page, loadPage]
  );

  const setOrLoadPage = useCallback(async () => {
    const cachedPage = cachedPages.current.get(currentPath.page);

    // Set the cached page immediately
    if (cachedPage && !isSameCollection(currentPage, cachedPage)) {
      setPage(cachedPage, currentPath.page);
    }

    // Load the needed page, then set it
    if (!cachedPage) {
      loadAndSetCurrentPage();
    }

    // Just load the next page, pre-fetch
    const nextPage = currentPath.page + 1;
    if (
      cachedPage?.pageInfo?.hasNextPage &&
      !cachedPages.current.has(nextPage) &&
      isSameCollection(currentPage, cachedPage) &&
      !isLoadingNextPage
    ) {
      loadNextPage(cachedPage.pageInfo.endCursor);
    }
  }, [currentPath.page, currentPage, isLoadingNextPage, setPage, loadAndSetCurrentPage, loadNextPage]);

  // On load, we'll either be pre-fetching the next page or loading the current
  // page if this is a client update
  useEffect(() => {
    setOrLoadPage();
  }, [setOrLoadPage]);

  // Handle page change requests
  const handleSetCurrentPage = useCallback(
    (toPage) => {
      const nextPage = currentPath.page + toPage;
      const nextPageIsBefore = toPage < 0;
      const nextUrl = getNextUrl(currentPage, nextPage, nextPageIsBefore);
      push(nextUrl, undefined, { shallow: true });
    },
    [currentPage, currentPath.page, push]
  );

  let items: ProductCategoryProductListItem[];

  if (isLoadingPage) {
    items = Array(pageSize).fill(undefined) as unknown as ProductCategoryProductListItem[];
  } else {
    items = currentPage.items;
  }

  return (
    <>
      <Seo title={currentTitle} />
      <ProductCategory
        header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
        items={items}
        pagination={{
          hasNextPage: isLoadingPage ? false : currentPage.pageInfo.hasNextPage,
          hasPreviousPage: isLoadingPage ? false : currentPage.pageInfo.hasPreviousPage,
          setCurrentPage: handleSetCurrentPage
        }}
      />
    </>
  );
};
