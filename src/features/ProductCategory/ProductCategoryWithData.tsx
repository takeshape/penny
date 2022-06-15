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
  page?: number;
  pageSize?: number;
}

export const ProductCategoryWithData = ({ id, page, pageSize }: ProductCategoryWithDataProps) => {
  page = page ?? 1;
  pageSize = pageSize ?? 5;

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >(ProductCategoryShopifyCollectionQuery, { variables: { id } });

  const handleSetCurrentPage = useCallback((page) => {
    //  loadCollection({ variables: { id } });
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

  const pageCount = Math.ceil(collection.productsCount / pageSize);

  return (
    <ProductCategory
      header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
      products={collection.products}
      pagination={{
        pageCount,
        currentPage: page,
        setCurrentPage: handleSetCurrentPage
      }}
    />
  );
};
