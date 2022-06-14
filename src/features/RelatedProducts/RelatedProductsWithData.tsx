import { useQuery } from '@apollo/client';
import {
  RelatedProductsShopifyCollectionArgs,
  RelatedProductsShopifyCollectionQuery,
  RelatedProductsShopifyCollectionResponse
} from './queries';
import { RelatedProducts } from './RelatedProducts';
import { getProductList } from './transforms';
import { RelatedProductsProduct } from './types';

export interface RelatedProductsWithDataProps {
  collection?: string;
}

const loadingProducts = Array(4).fill(undefined) as RelatedProductsProduct[];

export const RelatedProductsWithData = ({ collection }: RelatedProductsWithDataProps) => {
  const handle = collection ?? 'related-products';
  const { data } = useQuery<RelatedProductsShopifyCollectionResponse, RelatedProductsShopifyCollectionArgs>(
    RelatedProductsShopifyCollectionQuery,
    { variables: { handle } }
  );

  const products = data && getProductList(data);

  return <RelatedProducts products={products ?? loadingProducts} />;
};
