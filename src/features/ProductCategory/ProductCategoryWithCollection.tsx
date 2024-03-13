import Seo from '@/components/Seo';
import { PaginationDataHookParsedPath, usePaginationData } from '@/utils/hooks/usePaginationData';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';
import { ProductCategory } from './ProductCategory';
import { ProductCategoryShopifyCollectionQuery } from './queries';
import { getCollection, getCurrentTitle, getNextUrl, parseRouterPath } from './transforms';
import { ProductCategoryCollection, ProductCategoryProductListItem } from './types';

function isSameCollection(collA: ProductCategoryCollection, collB: ProductCategoryCollection) {
  return (
    collA.pageInfo.startCursor === collB.pageInfo.startCursor && collA.pageInfo.endCursor === collB.pageInfo.endCursor
  );
}

export type ProductCategoryWithCollectionProps = {
  collection: ProductCategoryCollection;
  pageSize: number;
};

export const ProductCategoryWithCollection = ({ collection, pageSize }: ProductCategoryWithCollectionProps) => {
  const { push } = useRouter();

  const parsePath = useCallback((asPath: string) => parseRouterPath(collection, asPath), [collection]);
  const getVariables = useCallback(
    (parsedPath: PaginationDataHookParsedPath) => {
      const variables =
        parsedPath.direction === 'before'
          ? {
              handle: collection.handle,
              last: pageSize,
              before: parsedPath.cursor
            }
          : {
              handle: collection.handle,
              first: pageSize,
              after: parsedPath.cursor
            };

      return variables;
    },
    [collection, pageSize]
  );
  const getPageData = useCallback((data: any) => getCollection(data), []);

  const [
    setOrLoadPage,
    { currentPath, isLoadingPage, isLoadingNextPage, currentPage, currentPageData, cachedPageData }
  ] = usePaginationData<ProductCategoryCollection>({
    parsePath,
    query: ProductCategoryShopifyCollectionQuery,
    getVariables,
    initialPageData: collection,
    getPageData,
    isSamePageData: isSameCollection
  });

  const currentTitle = useMemo(() => getCurrentTitle(currentPageData, currentPage), [currentPageData, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // On load, we'll either be pre-fetching the next page or loading the current
  // page if this is a client update
  useEffect(() => {
    setOrLoadPage();
  }, [setOrLoadPage]);

  // Handle page change requests
  const handleSetCurrentPage = useCallback(
    (toPage: number) => {
      const nextPage = currentPath.page + toPage;
      const isPreviousPage = toPage < 0;
      const cachedNextPage = cachedPageData.current?.get(nextPage);

      let nextUrl;

      // This allows us to preserve anchor-based (after) URLs for previous pages
      if (cachedNextPage && isPreviousPage) {
        nextUrl = getNextUrl(cachedNextPage, nextPage);
      } else {
        nextUrl = getNextUrl(currentPageData, nextPage, isPreviousPage);
      }

      push(nextUrl, undefined, { shallow: true });
    },
    [cachedPageData, currentPageData, currentPath.page, push]
  );

  let items: ProductCategoryProductListItem[] = [];

  if (isLoadingPage) {
    items = Array(pageSize).fill(undefined) as unknown as ProductCategoryProductListItem[];
  } else if (currentPageData.items) {
    items = currentPageData.items;
  }

  const nextPageUrl = currentPageData.pageInfo.hasNextPage ? getNextUrl(currentPageData, currentPage + 1) : null;
  const previousPageUrl = currentPageData.pageInfo.hasPreviousPage
    ? getNextUrl(currentPageData, currentPage - 1)
    : null;

  return (
    <>
      <Seo title={currentTitle} />
      <ProductCategory
        header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
        items={items}
        pagination={{
          nextPageUrl: isLoadingPage || isLoadingNextPage || !nextPageUrl ? undefined : nextPageUrl,
          previousPageUrl: isLoadingPage || !previousPageUrl ? undefined : previousPageUrl,
          setCurrentPage: handleSetCurrentPage
        }}
      />
    </>
  );
};
