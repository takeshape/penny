import { useQuery } from '@apollo/client';
import {
  RelatedProductsShopifyCollectionQueryResponse,
  RelatedProductsShopifyCollectionQueryVariables
} from 'types/takeshape';
import { RelatedProductsShopifyCollectionQuery } from '../queries';
import { getRelatedProductList } from '../transforms';
import { RelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  collection?: string;
}

const loadingProducts = Array(4).fill(undefined) as RelatedProductsProduct[];

export const RelatedProductsWithData = ({ collection }: RelatedProductsWithDataProps) => {
  const handle = collection ?? 'related-products';
  const { data, error } = useQuery<
    RelatedProductsShopifyCollectionQueryResponse,
    RelatedProductsShopifyCollectionQueryVariables
  >(RelatedProductsShopifyCollectionQuery, { variables: { handle } });

  if (error) {
    return null;
  }

  const products = data && getRelatedProductList(data);

  return <RelatedProducts products={products ?? loadingProducts} />;
};
