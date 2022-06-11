import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { reviewsIoProductReviewsToReviewList } from 'transforms/reviewsIo';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsReponse
} from '../queries';
import Reviews, { ReviewsProps } from './Reviews';

export type ReviewsFromReviewsIoProps = {
  sku: string;
} & Omit<ReviewsProps, 'reviews'>;

export const ReviewsFromReviewsIo = ({ sku, ...props }: ReviewsFromReviewsIoProps) => {
  const [loadReviews, { data, loading }] = useLazyQuery<
    ProductPageReviewsIoReviewsReponse,
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

  if (!data) {
    return null;
  }

  // Reviews.io does not support the rollup data.
  // TODO We can use an indexed query and ElasticSearch facets once we expose
  return <Reviews reviews={reviewsIoProductReviewsToReviewList(data.reviews)} showRollup={false} {...props} />;
};

export default ReviewsFromReviewsIo;
