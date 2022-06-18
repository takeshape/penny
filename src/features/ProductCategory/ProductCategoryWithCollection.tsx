import { useLazyQuery } from '@apollo/client';
import Seo from 'components/Seo';
import {
  ProductCategoryShopifyCollectionByIdArgs,
  ProductCategoryShopifyCollectionByIdQuery
} from 'features/ProductCategory/queries';
import { ProductCategoryCollection } from 'features/ProductCategory/types';
import { useCallback, useEffect, useState } from 'react';
import { silentlyUpdateUrl } from 'utils/history';
import { ProductCategory } from './ProductCategory';
import { ProductCategoryShopifyCollectionResponse } from './queries';
import { getCollection, getCurrentTitle, getCurrentUrl } from './transforms';

export interface ProductCategoryWithCollectionProps {
  collection: ProductCategoryCollection;
  pageSize?: number;
  page?: number;
  cursor?: string;
}

export const ProductCategoryWithCollection = ({ collection, pageSize, page }: ProductCategoryWithCollectionProps) => {
  pageSize = pageSize ?? 5;

  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const [currentCursor, setCurrentCursor] = useState(collection.cursor);
  const [currentDirection, setCurrentDirection] = useState<'forward' | 'back'>('forward');
  const [currentCollection, setCurrentCollection] = useState(collection);
  const [currentTitle, setCurrentTitle] = useState(getCurrentTitle(collection, page));

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionByIdArgs
  >(ProductCategoryShopifyCollectionByIdQuery);

  useEffect(() => {
    if (data && !error && !loading) {
      const newCollection = getCollection(data, pageSize, currentCursor, currentDirection);
      setCurrentCollection(newCollection);
      setCurrentTitle(getCurrentTitle(newCollection, currentPage));
      window.scrollTo(0, 0);
      silentlyUpdateUrl(getCurrentUrl(newCollection, currentCursor, currentPage));
      setCurrentCursor(newCollection.cursor);
    }
  }, [currentCursor, currentDirection, currentPage, data, error, loading, pageSize]);

  const handleSetCurrentPage = useCallback(
    (nextPage) => {
      const isForward = nextPage > 0;
      const variables: ProductCategoryShopifyCollectionByIdArgs = { id: currentCollection.id };

      if (isForward) {
        variables.first = pageSize;
        variables.after = currentCollection.items[currentCollection.items.length - 1].cursor;
        setCurrentDirection('forward');
        setCurrentCursor(variables.after);
        setCurrentPage(currentPage + 1);
      } else {
        // When going back, need to fetch pageSize + 1 to get the correct cursor
        variables.last = pageSize + 1;
        variables.before = currentCollection.items[0].cursor;
        setCurrentDirection('back');
        setCurrentPage(currentPage - 1);
      }

      loadCollection({ variables });
    },
    [currentCollection.id, currentCollection.items, currentPage, loadCollection, pageSize]
  );

  if (error) {
    throw error;
  }

  let items = currentCollection.items;

  if (loading) {
    items = Array(pageSize).fill(undefined);
  }

  return (
    <>
      <Seo title={currentTitle} />
      <ProductCategory
        header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
        items={items}
        pagination={{
          hasNextPage: currentCollection.hasNextPage,
          hasPreviousPage: currentCollection.hasPreviousPage,
          setCurrentPage: handleSetCurrentPage
        }}
      />
    </>
  );
};
