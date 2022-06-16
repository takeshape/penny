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
  collectionId: string;
  page?: number;
  pageSize?: number;
}

export const ProductCategoryWithData = ({ collectionId, page, pageSize }: ProductCategoryWithDataProps) => {
  pageSize = pageSize ?? 5;

  const [currentPage, setCurrentPage] = useState(page ?? 1);

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >(ProductCategoryShopifyCollectionQuery);

  useEffect(() => {
    if (collectionId && !data && !loading && !error) {
      loadCollection({ variables: { id: collectionId, first: pageSize } });
    }
  }, [loadCollection, collectionId, data, error, loading, pageSize]);

  const handleSetCurrentPage = useCallback(
    (nextPage, prevPage) => {
      const isNext = nextPage > prevPage;
      const variables: ProductCategoryShopifyCollectionArgs = { id: collectionId };

      if (isNext) {
        variables.first = pageSize;
        variables.after = data.collection.products.edges[data.collection.products.edges.length - 1].cursor;
      } else {
        variables.last = pageSize;
        variables.before = data.collection.products.edges[0].cursor;
      }

      loadCollection({ variables });
      setCurrentPage(nextPage);
    },
    [data, collectionId, loadCollection, pageSize]
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
