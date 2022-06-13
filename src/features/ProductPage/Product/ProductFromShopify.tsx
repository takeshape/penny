import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { reviewsIoProductReviewsToReviewHighlight } from 'transforms/reviewsIo';
import { shopifyGidToId, shopifyProductToProduct } from 'transforms/shopify';
import {
    ProductPageReviewsIoReviewsArgs,
    ProductPageReviewsIoReviewsQuery,
    ProductPageReviewsIoReviewsResponse,
    ProductPageShopifyProductArgs,
    ProductPageShopifyProductQuery,
    ProductPageShopifyProductReponse
} from '../queries';
import Product, { ProductProps } from './Product';

export type ProductFromShopifyProps = {
  productId: string;
} & Omit<ProductProps, 'product' | 'reviews'>;

export const ProductFromShopify = ({ productId, ...props }: ProductFromShopifyProps) => {
  const [loadProduct, { data: productData, loading: productLoading }] = useLazyQuery<
    ProductPageShopifyProductReponse,
    ProductPageShopifyProductArgs
  >(ProductPageShopifyProductQuery);

  const [loadReviews, { data: reviewsData, loading: reviewsLoading }] = useLazyQuery<
    ProductPageReviewsIoReviewsResponse,
    ProductPageReviewsIoReviewsArgs
  >(ProductPageReviewsIoReviewsQuery);

  useEffect(() => {
    if (productId && !productLoading) {
      loadProduct({
        variables: {
          id: productId
        }
      });
    }

    if (productId && !reviewsLoading) {
      loadReviews({
        variables: {
          sku: shopifyGidToId(productId)
        }
      });
    }
  }, [productLoading, loadProduct, productId, reviewsLoading, loadReviews]);

  if (!productData) {
    return null;
  }

  return (
    <Product
      product={shopifyProductToProduct(productData.productList.items[0].shopifyProduct)}
      reviews={reviewsData && reviewsIoProductReviewsToReviewHighlight(reviewsData.reviews)}
      {...props}
    />
  );
};

export default ProductFromShopify;
