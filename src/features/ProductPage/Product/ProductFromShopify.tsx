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
import ProductLoading from './ProductLoading';

export type ProductFromShopifyProps = {
  productId: string;
} & Omit<ProductProps, 'product' | 'reviews'>;

export const ProductFromShopify = ({ productId, ...props }: ProductFromShopifyProps) => {
  const [loadProduct, { data: productData, loading: productLoading, error: productError }] = useLazyQuery<
    ProductPageShopifyProductReponse,
    ProductPageShopifyProductArgs
  >(ProductPageShopifyProductQuery);

  const [loadReviews, { data: reviewsData, loading: reviewsLoading, error: reviewsError }] = useLazyQuery<
    ProductPageReviewsIoReviewsResponse,
    ProductPageReviewsIoReviewsArgs
  >(ProductPageReviewsIoReviewsQuery);

  useEffect(() => {
    if (productId && !productData && !productLoading && !productError) {
      loadProduct({
        variables: {
          id: productId
        }
      });
    }
  }, [productId, loadProduct, productLoading, productData, productError]);

  useEffect(() => {
    if (productId && !reviewsData && !reviewsLoading && !reviewsError) {
      loadReviews({
        variables: {
          sku: shopifyGidToId(productId)
        }
      });
    }
  }, [productId, loadReviews, reviewsLoading, reviewsError, reviewsData]);

  if (!productData) {
    return <ProductLoading />;
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
