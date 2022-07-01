import { useEffect, useMemo } from 'react';
import { ProductPageRelatedProductsQueryResponse, ProductPageRelatedProductsQueryVariables } from 'types/storefront';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { ProductPageRelatedProductsQuery } from '../queries.storefront';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  productId: string;
  limit: number;
}

export const RelatedProductsWithData = ({ productId, limit }: RelatedProductsWithDataProps) => {
  const [loadProducts, { data, error }] = useStorefrontLazyQuery<
    ProductPageRelatedProductsQueryResponse,
    ProductPageRelatedProductsQueryVariables
  >(ProductPageRelatedProductsQuery, {
    variables: {
      productId
    }
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadingProducts = useMemo(() => Array(limit).fill(undefined) as ProductPageRelatedProductsProduct[], [limit]);
  const products = useMemo(() => !error && getRelatedProductList(data, limit), [data, error, limit]);

  if (error) {
    return null;
  }

  return <RelatedProducts products={products ?? loadingProducts} />;
};
