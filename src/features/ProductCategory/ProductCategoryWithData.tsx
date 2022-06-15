import { useQuery } from '@apollo/client';
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
  const { data, error } = useQuery<ProductCategoryShopifyCollectionResponse, ProductCategoryShopifyCollectionArgs>(
    ProductCategoryShopifyCollectionQuery,
    { variables: { id } }
  );

  if (error) {
    return null;
  }

  const collection = data && getCollection(data);

  if (!collection) {
    return null;
  }

  return (
    <ProductCategory
      header={{ text: { primary: collection.name, secondary: collection.description } }}
      products={collection.products}
    />
  );
};
