import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import { ProductCategory } from './ProductCategory';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from './queries';
import { getCollection } from './transforms';

export interface ProductCategoryWithDataProps {
  id: string;
  page?: number;
  pageSize?: number;
}

export const ProductCategoryWithData = ({ id, page, pageSize }: ProductCategoryWithDataProps) => {
  pageSize = pageSize ?? 5;

  const [currentPage, setCurrentPage] = useState(page ?? 1);

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >(ProductCategoryShopifyCollectionQuery);

  useEffect(() => {
    if (id && !data && !loading && !error) {
      loadCollection({ variables: { id, first: pageSize } });
    }
  }, [loadCollection, id, data, error, loading, pageSize]);

  const handleSetCurrentPage = useCallback(
    (nextPage, prevPage) => {
      const isNext = nextPage > prevPage;
      if (isNext) {
        const lastCursor = data.collection.products.edges[data.collection.products.edges.length - 1].cursor;
        loadCollection({ variables: { id, first: pageSize, after: lastCursor } });
      } else {
        const firstCursor = data.collection.products.edges[0].cursor;
        loadCollection({ variables: { id, last: pageSize, before: firstCursor } });
      }
      setCurrentPage(nextPage);
    },
    [data, id, loadCollection, pageSize]
  );

  if (error) {
    return null;
  }

  const collection = data && getCollection(data);

  if (!collection) {
    return null;
  }

  const pageCount = Math.ceil(collection.productsCount / pageSize);

  return (
    <ProductCategory
      header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
      products={collection.products}
      pagination={{
        pageCount,
        currentPage,
        setCurrentPage: handleSetCurrentPage
      }}
    />
  );
};
