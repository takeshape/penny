import { useLazyQuery } from '@apollo/client';
import {
  ProductCategoryShopifyCollectionByIdArgs,
  ProductCategoryShopifyCollectionByIdQuery
} from 'features/ProductCategory/queries';
import { ProductCategoryCollection } from 'features/ProductCategory/types';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { ProductCategory } from './ProductCategory';
import { ProductCategoryShopifyCollectionResponse } from './queries';
import { getCollection } from './transforms';

export interface ProductCategoryWithCollectionProps {
  collection: ProductCategoryCollection;
  pageSize?: number;
  pathVariable?: string;
}

export const ProductCategoryWithCollection = ({ collection, pageSize }: ProductCategoryWithCollectionProps) => {
  pageSize = pageSize ?? 5;

  const router = useRouter();
  const [currentCollection, setCurrentCollection] = useState(collection);

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionByIdArgs
  >(ProductCategoryShopifyCollectionByIdQuery);

  useEffect(() => {
    if (data && !error && !loading) {
      const newCollection = getCollection(data);
      setCurrentCollection(newCollection);
      router.push(`${newCollection.url}/${newCollection.products[0].cursor}`);
    }
  }, [data, error, loading, router]);

  const handleSetCurrentPage = useCallback(
    (nextPage) => {
      const isNext = nextPage > 0;
      const variables: ProductCategoryShopifyCollectionByIdArgs = { id: currentCollection.id };

      if (isNext) {
        variables.first = pageSize;
        variables.after = currentCollection.products[currentCollection.products.length - 1].cursor;
      } else {
        variables.last = pageSize;
        variables.before = currentCollection.products[0].cursor;
      }

      loadCollection({ variables });
    },
    [currentCollection.id, currentCollection.products, loadCollection, pageSize]
  );

  if (error) {
    throw error;
  }

  const pageCount = Math.ceil(collection.productsCount / pageSize);

  return (
    <ProductCategory
      header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
      products={currentCollection.products}
      pagination={{
        hasNextPage: currentCollection.hasNextPage,
        hasPreviousPage: currentCollection.hasPreviousPage,
        setCurrentPage: handleSetCurrentPage
      }}
    />
  );
};
