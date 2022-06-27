import { useLazyQuery } from '@apollo/client';
import Seo from 'components/Seo';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ProductCategoryShopifyCollectionQueryResponse,
  ProductCategoryShopifyCollectionQueryVariables
} from 'types/takeshape';
import { ProductCategory } from './ProductCategory';
import { ProductCategoryShopifyCollectionQuery } from './queries';
import { getCollectionPageInfo, getCollectionWithOverfetch, getCurrentTitle, getCurrentUrl } from './transforms';
import { ProductCategoryCollection, ProductCategoryProductListItem } from './types';

export interface ProductCategoryWithCollectionProps {
  collection: ProductCategoryCollection;
  pageSize?: number;
  page?: number;
  cursor?: string;
}

export const ProductCategoryWithCollection = ({ collection, pageSize, page }: ProductCategoryWithCollectionProps) => {
  pageSize = pageSize ?? 5;

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const [requestPage, setRequestPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingPage, setFetchingPage] = useState(null);
  const [currentCollection, setCurrentCollection] = useState(collection);
  const [currentTitle, setCurrentTitle] = useState(getCurrentTitle(collection, page));

  const loadedPages = useRef<Map<number, ProductCategoryCollection>>(new Map([[page, collection]]));
  const loadedCollections = useRef<Set<string>>(new Set([collection.pageInfo.startCursor]));

  const [loadCollection, { data, error, loading, variables }] = useLazyQuery<
    ProductCategoryShopifyCollectionQueryResponse,
    ProductCategoryShopifyCollectionQueryVariables
  >(ProductCategoryShopifyCollectionQuery);

  // Pre-fetch the next page
  useEffect(() => {
    const nextPage = currentPage + 1;
    if (!loadedPages.current.has(nextPage)) {
      setRequestPage(nextPage);
    }
  }, [currentPage]);

  // Handle page requests
  useEffect(() => {
    if (requestPage && !fetchingPage) {
      // Need to fetch next page
      if (requestPage > currentPage && currentCollection.pageInfo.hasNextPage) {
        loadCollection({
          variables: {
            handle: currentCollection.handle,
            // Always overfetch to get the real startCursor (the one that anchors this list)
            first: pageSize,
            after: currentCollection.pageInfo.endCursor
          }
        });
        setFetchingPage(requestPage);
      }

      // Need to fetch prev page
      if (requestPage < currentPage && currentCollection.pageInfo.hasPreviousPage) {
        loadCollection({
          variables: {
            handle: currentCollection.handle,
            // Always overfetch to get the real startCursor (the one that anchors this list)
            last: pageSize + 1,
            before: currentCollection.pageInfo.startCursor
          }
        });
        setFetchingPage(requestPage);
      }

      // Clear the request
      setRequestPage(null);
    }
  }, [
    currentCollection.handle,
    currentCollection.pageInfo.endCursor,
    currentCollection.pageInfo.hasNextPage,
    currentCollection.pageInfo.hasPreviousPage,
    currentCollection.pageInfo.startCursor,
    currentPage,
    fetchingPage,
    loadCollection,
    pageSize,
    requestPage
  ]);

  // Handle page data
  useEffect(() => {
    if (
      fetchingPage &&
      data &&
      !loadedCollections.current.has(getCollectionPageInfo(data).startCursor) &&
      !error &&
      !loading
    ) {
      const newCollection = getCollectionWithOverfetch({ pageSize }, data, variables);
      loadedCollections.current.add(newCollection.pageInfo.startCursor);
      loadedPages.current.set(fetchingPage, newCollection);
      setFetchingPage(null);

      // If we were waiting and this wasn't a pre-fetch
      if (isLoading) {
        setCurrentPage(fetchingPage);
        setIsLoading(false);
      }
    }
  }, [fetchingPage, data, error, loading, isLoading, pageSize, variables]);

  // Handle page change
  useEffect(() => {
    const pageCollection = loadedPages.current.get(currentPage);
    if (pageCollection) {
      const routerPath = router.asPath;
      const currentUrl = getCurrentUrl(pageCollection, currentPage);
      if (routerPath !== currentUrl) {
        setCurrentCollection(pageCollection);
        setCurrentTitle(getCurrentTitle(pageCollection, currentPage));
        router.push(currentUrl);
        window.scrollTo(0, 0);
      }
    }
  }, [currentPage, router]);

  // Handle page change requests
  const handleSetCurrentPage = useCallback(
    (toPage) => {
      const nextPage = currentPage + toPage;
      if (loadedPages.current.has(nextPage)) {
        setCurrentPage(nextPage);
        return;
      }
      if (!fetchingPage) {
        setRequestPage(nextPage);
      }
      setIsLoading(true);
    },
    [currentPage, fetchingPage]
  );

  if (error) {
    throw error;
  }

  let items: ProductCategoryProductListItem[];

  if (isLoading) {
    items = Array(pageSize).fill(undefined) as unknown as ProductCategoryProductListItem[];
  } else {
    items = currentCollection.items;
  }

  return (
    <>
      <Seo title={currentTitle} />
      <ProductCategory
        header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
        items={items}
        pagination={{
          hasNextPage: isLoading ? false : currentCollection.pageInfo.hasNextPage,
          hasPreviousPage: isLoading ? false : currentCollection.pageInfo.hasPreviousPage,
          setCurrentPage: handleSetCurrentPage
        }}
      />
    </>
  );
};
