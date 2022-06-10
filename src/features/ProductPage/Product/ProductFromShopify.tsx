import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { reviewsIoProductReviewsToReviewHighlight } from 'transforms/reviewsIo';
import { shopifyGidToId, shopifyProductToProduct } from 'transforms/shopify';
import type { ProductPageShopifyProductArgs, ProductPageShopifyProductReponse } from '../queries';
import { ProductPageShopifyProductQuery } from '../queries';
import type { ProductProps } from './Product';
import Product from './Product';

export type ProductFromShopifyProps = {
  productId: string;
} & Omit<ProductProps, 'product' | 'reviews'>;

export const ProductFromShopify = ({ productId, ...props }: ProductFromShopifyProps) => {
  const [loadProduct, { data, loading }] = useLazyQuery<
    ProductPageShopifyProductReponse,
    ProductPageShopifyProductArgs
  >(ProductPageShopifyProductQuery, { returnPartialData: true });

  useEffect(() => {
    if (productId && !loading) {
      loadProduct({
        variables: {
          productId,
          reviewsId: shopifyGidToId(productId)
        }
      });
    }
  }, [loading, loadProduct, productId]);

  if (!data) {
    return null;
  }

  return (
    <Product
      product={shopifyProductToProduct(data.product)}
      reviews={reviewsIoProductReviewsToReviewHighlight(data.reviews)}
      {...props}
    />
  );
};

export default ProductFromShopify;
