import { useQuery } from '@apollo/client';
import { shopifyProductToRelatedProduct } from 'transforms/shopify';
import {
  RelatedProductsShopifyCollectionArgs,
  RelatedProductsShopifyCollectionQuery,
  RelatedProductsShopifyCollectionResponse
} from './queries';
import { RelatedProducts } from './RelatedProducts';
import { RelatedProductsProduct } from './types';

export interface RelatedProductsWithDataProps {
  collection?: string;
}

export const RelatedProductsWithData = ({ collection }: RelatedProductsWithDataProps) => {
  const handle = collection ?? 'related-products';
  const { data } = useQuery<RelatedProductsShopifyCollectionResponse, RelatedProductsShopifyCollectionArgs>(
    RelatedProductsShopifyCollectionQuery,
    { variables: { handle } }
  );

  const products =
    data?.collection.products.edges.map(({ node }) => shopifyProductToRelatedProduct(node)) ??
    (Array(4).fill(undefined) as RelatedProductsProduct[]);

  return <RelatedProducts products={products} />;
};
