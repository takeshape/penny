import { useEffect, useMemo } from 'react';
import {
  ProductPageRelatedProductsShopifyQueryResponse,
  ProductPageRelatedProductsShopifyQueryVariables
} from 'types/takeshape';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { ProductPageRelatedProductsShopifyQuery } from '../queries.storefront';
import { getRelatedProductList } from '../transforms';
import { ProductPageRelatedProductsProduct } from '../types';
import { RelatedProducts } from './RelatedProducts';

export interface RelatedProductsWithDataProps {
  productId: string;
  productTags?: string[];
  limit: number;
}

export const RelatedProductsWithData = ({ productTags, productId, limit }: RelatedProductsWithDataProps) => {
  const query = useMemo(
    // Tags from Shopify are already escaped, if using other inputs you may need
    // to escape yourself: https://shopify.dev/api/usage/search-syntax#special-characters
    () => (productTags && productTags.length ? productTags.map((tag) => `tag:"${tag}"`).join(' OR ') : undefined),
    [productTags]
  );

  const [loadProducts, { data, error }] = useStorefrontLazyQuery<
    ProductPageRelatedProductsShopifyQueryResponse,
    ProductPageRelatedProductsShopifyQueryVariables
  >(ProductPageRelatedProductsShopifyQuery, {
    variables: {
      backfillCount: limit + 1,
      relatedCount: limit,
      query
    }
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadingProducts = useMemo(() => Array(limit).fill(undefined) as ProductPageRelatedProductsProduct[], [limit]);
  const products = useMemo(
    () => !error && getRelatedProductList(data, productId, limit),
    [data, error, limit, productId]
  );

  if (error) {
    return null;
  }

  return <RelatedProducts products={products ?? loadingProducts} />;
};
