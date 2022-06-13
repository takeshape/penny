import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { reviewsIoProductReviewsToReviewList } from 'transforms/reviewsIo';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse
} from '../queries';
import { ProductPageReviewsReview } from '../types';
import ProductPageReviews, { ProductPageReviewsProps } from './Reviews';

export type ReviewsFromReviewsIoProps = {
  sku: string;
} & Omit<ProductPageReviewsProps, 'reviews'>;

export const ReviewsFromReviewsIo = ({ sku, ...props }: ReviewsFromReviewsIoProps) => {
  const [loadReviews, { data, loading }] = useLazyQuery<
    ProductPageReviewsIoReviewsResponse,
    ProductPageReviewsIoReviewsArgs
  >(ProductPageReviewsIoReviewsQuery);

  useEffect(() => {
    if (sku && !loading) {
      loadReviews({
        variables: {
          sku
        }
      });
    }
  }, [loading, loadReviews, sku]);

  const reviews = reviewsIoProductReviewsToReviewList(data?.reviews);
  reviews.data = reviews.data.length ? reviews.data : (Array(1).fill(undefined) as ProductPageReviewsReview[]);

  // Reviews.io does not support the rollup data.
  // TODO We can use an indexed query and ElasticSearch facets once we expose
  return <ProductPageReviews reviews={reviews} showRollup={false} {...props} />;
};

export default ReviewsFromReviewsIo;
