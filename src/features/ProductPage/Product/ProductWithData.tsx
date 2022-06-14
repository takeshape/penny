import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { shopifyGidToId } from 'transforms/shopify';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductArgs,
  ProductPageShopifyProductQuery,
  ProductPageShopifyProductReponse
} from '../queries';
import { getProduct, getReviewHighlights } from '../transforms';
import Product, { ProductProps } from './Product';
import ProductLoading from './ProductLoading';

export type ProductWithDataProps = {
  productId: string;
} & Omit<ProductProps, 'product' | 'reviews'>;

export const ProductWithData = ({ productId, ...props }: ProductWithDataProps) => {
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

  const product = productData && getProduct(productData);
  const reviews = reviewsData && getReviewHighlights(reviewsData);

  // Reviews are optional in the product
  if (!product) {
    return <ProductLoading />;
  }

  return <Product product={product} reviews={reviews} {...props} />;
};

export default ProductWithData;
