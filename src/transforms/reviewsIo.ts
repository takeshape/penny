import { Review, ReviewList, ReviewStats } from '@/types/review';
import {
  ReviewsIo_ListProductReviewsResponse,
  ReviewsIo_ListProductReviewsResponseReviewsProperty,
  ReviewsIo_ListProductReviewsResponseStatsProperty,
  ReviewsIo_ProductReview,
  ReviewsIo_Reviewer
} from '@/types/takeshape';
import { isNotNullish } from '@/utils/types';

export type ReviewsIoReview = Pick<
  ReviewsIo_ProductReview,
  'product_review_id' | 'rating' | 'title' | 'review' | 'date_created'
> & {
  reviewer: Pick<ReviewsIo_Reviewer, 'first_name' | 'last_name' | 'profile_picture' | 'gravatar'>;
};

export type ReviewsIoReviewList = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'> & {
  reviews:
    | (Pick<ReviewsIo_ListProductReviewsResponseReviewsProperty, 'current_page' | 'per_page' | 'total'> & {
        data: (ReviewsIoReview | null)[] | null;
      })
    | null;
};

export function getReview(review: ReviewsIoReview): Review {
  const { product_review_id, rating, title, review: body, date_created, reviewer } = review;
  const dateCreated = `${date_created.replace(' ', 'T')}.000Z`;
  return {
    id: String(product_review_id),
    rating,
    title,
    body,
    // Reviews.io is ISO 9075, convert to ISO 8601
    createdAt: new Date(dateCreated).toISOString(),
    reviewer: {
      name: `${reviewer.first_name} ${reviewer.last_name}`,
      imageUrl: reviewer.profile_picture ?? reviewer.gravatar
    }
  };
}

export function getStats(
  stats: Pick<ReviewsIo_ListProductReviewsResponseStatsProperty, 'average' | 'count'> | null
): ReviewStats {
  return {
    average: stats?.average ?? null,
    count: stats?.count ?? 0
  };
}

export function getReviewList(reviewsioReviews: ReviewsIoReviewList | null): ReviewList {
  const { stats, reviews } = reviewsioReviews ?? {};

  const currentPage = reviews?.current_page ?? 0;
  const totalPages = reviews?.total && reviews?.per_page ? Math.ceil(reviews.total / reviews.per_page) : 0;
  const perPage = reviews?.per_page ?? 0;

  return {
    stats: getStats(stats ?? null),
    currentPage,
    totalPages,
    perPage,
    items: reviews?.data?.map((review) => review && getReview(review)).filter(isNotNullish) ?? [],
    hasNextPage: currentPage < totalPages,
    publisher: 'REVIEWS.io'
  };
}
