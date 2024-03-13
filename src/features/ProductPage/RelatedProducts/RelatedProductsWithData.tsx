import { ProductPageRelatedProductsQueryResponse, ProductPageRelatedProductsQueryVariables } from '@/types/storefront';
import { useStorefrontLazyQuery } from '@/utils/storefront';
import { useEffect, useMemo } from 'react';
import { ProductPageRelatedProductsQuery } from '../queries.storefront';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export type RelatedProductsWithDataProps = {
  productId: string;
  limit: number;
};

export const RelatedProductsWithData = ({ productId, limit }: RelatedProductsWithDataProps) => {
  const [loadProducts, { transformedData, error }] = useStorefrontLazyQuery<
    ProductPageRelatedProductsQueryResponse,
    ProductPageRelatedProductsQueryVariables,
    ProductPageRelatedProductsProduct[]
  >(ProductPageRelatedProductsQuery, {
    variables: {
      productId
    },
    transform: {
      data: getRelatedProductList(limit)
    }
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadingProducts = useMemo(() => Array(limit).fill(undefined) as ProductPageRelatedProductsProduct[], [limit]);

  if (error) {
    return null;
  }

  return <RelatedProducts products={transformedData ?? loadingProducts} />;
};
