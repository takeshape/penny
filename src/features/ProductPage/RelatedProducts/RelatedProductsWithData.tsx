import { useQuery } from '@apollo/client';
import {
  RelatedProductsShopifyCollectionArgs,
  RelatedProductsShopifyCollectionQuery,
  RelatedProductsShopifyCollectionResponse
} from '../queries';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  collection?: string;
}

const loadingProducts = Array(4).fill(undefined) as ProductPageRelatedProductsProduct[];

export const RelatedProductsWithData = ({ collection }: RelatedProductsWithDataProps) => {
  const handle = collection ?? 'related-products';
  const { data, error } = useQuery<RelatedProductsShopifyCollectionResponse, RelatedProductsShopifyCollectionArgs>(
    RelatedProductsShopifyCollectionQuery,
    { variables: { handle } }
  );

  if (error) {
    return null;
  }

  const products = data && getRelatedProductList(data);

  return <RelatedProducts products={products ?? loadingProducts} />;
};
