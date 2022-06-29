import { useLazyQuery } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import {
  ProductPageRelatedProductsShopifyQueryResponse,
  ProductPageRelatedProductsShopifyQueryVariables
} from 'types/takeshape';
import { ProductPageRelatedProductsShopifyQuery } from '../queries';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  productId: string;
  productTags?: string[];
  count: number;
}

const loadingProducts = Array(4).fill(undefined) as ProductPageRelatedProductsProduct[];

export const RelatedProductsWithData = ({ productTags, productId, count }: RelatedProductsWithDataProps) => {
  const query = useMemo(
    // Tags from Shopify are already escaped, if using other inputs you may need
    // to escape yourself: https://shopify.dev/api/usage/search-syntax#special-characters
    () => (productTags && productTags.length ? productTags.map((tag) => `tag:"${tag}"`).join(' OR ') : undefined),
    [productTags]
  );

  const [loadProducts, { data, error }] = useLazyQuery<
    ProductPageRelatedProductsShopifyQueryResponse,
    ProductPageRelatedProductsShopifyQueryVariables
  >(ProductPageRelatedProductsShopifyQuery, {
    variables: {
      backfillCount: count + 1,
      relatedCount: count,
      query
    }
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const products = useMemo(() => !error && getRelatedProductList(data, productId), [data, error, productId]);

  if (error) {
    return null;
  }

  return <RelatedProducts products={products ?? loadingProducts} />;
};
