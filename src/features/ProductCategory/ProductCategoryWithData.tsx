import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { ProductCategory } from './ProductCategory';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from './queries';
import { getCollection } from './transforms';

export interface ProductCategoryWithDataProps {
  id: string;
}

export const ProductCategoryWithData = ({ id }: ProductCategoryWithDataProps) => {
  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >(ProductCategoryShopifyCollectionQuery, { variables: { id } });

  const handleSetCurrentPage = useCallback((page) => {
    // eslint-disable-next-line no-console
    console.log('setting page', page);
  }, []);

  useEffect(() => {
    if (id && !data && !loading && !error) {
      loadCollection({ variables: { id } });
    }
  }, [loadCollection, id, data, error, loading]);

  if (error) {
    return null;
  }

  const collection = data && getCollection(data);

  if (!collection) {
    return null;
  }

  return (
    <ProductCategory
      header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
      products={collection.products}
      pagination={{
        pageCount: 2,
        currentPage: 1,
        setCurrentPage: handleSetCurrentPage
      }}
    />
  );
};
