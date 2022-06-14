import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse
} from '../queries';
import { getReviewList } from '../transforms';
import { ProductPageReviewsReview } from '../types';
import { Reviews, ReviewsProps } from './Reviews';

export type ReviewsWithDataProps = {
  sku: string;
} & Omit<ReviewsProps, 'reviews'>;

export const ReviewsWithData = ({ sku, ...props }: ReviewsWithDataProps) => {
  const [loadReviews, { data, loading, error }] = useLazyQuery<
    ProductPageReviewsIoReviewsResponse,
    ProductPageReviewsIoReviewsArgs
  >(ProductPageReviewsIoReviewsQuery);

  useEffect(() => {
    if (sku && !data && !loading && !error) {
      loadReviews({
        variables: {
          sku
        }
      });
    }
  }, [sku, loadReviews, loading, data, error]);

  let reviews = getReviewList(data);
  reviews.data = data ? reviews.data : (Array(1).fill(undefined) as ProductPageReviewsReview[]);

  // Reviews.io does not support the rollup data.
  // TODO We can use an indexed query and ElasticSearch facets once we expose
  return <Reviews reviews={reviews} showRollup={false} {...props} />;
};
