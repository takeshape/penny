import { useQuery } from '@apollo/client';
import {
  ProductPageRelatedProductsShopifyQueryResponse,
  ProductPageRelatedProductsShopifyQueryVariables
} from 'types/takeshape';
import { ProductPageRelatedProductsShopifyQuery } from '../queries';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  tags?: string[];
}

const loadingProducts = Array(4).fill(undefined) as ProductPageRelatedProductsProduct[];

export const RelatedProductsWithData = ({ tags }: RelatedProductsWithDataProps) => {
  const query = tags && tags.length ? tags.map((tag) => `tag:${tag}`).join(' OR ') : undefined;

  const { data, error } = useQuery<
    ProductPageRelatedProductsShopifyQueryResponse,
    ProductPageRelatedProductsShopifyQueryVariables
  >(ProductPageRelatedProductsShopifyQuery, { variables: { first: 4, query } });

  if (error) {
    return null;
  }

  const products = data && getRelatedProductList(data);

  return <RelatedProducts products={products ?? loadingProducts} />;
};
