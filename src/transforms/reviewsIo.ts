import { Review, ReviewHighlights, ReviewList, ReviewStats } from 'types/review';
import {
  ReviewsIo_ListProductReviewsResponse,
  ReviewsIo_ListProductReviewsResponseStatsProperty,
  ReviewsIo_ProductReview
} from 'types/takeshape';

function getReview(review: ReviewsIo_ProductReview): Review {
  const { product_review_id, rating, title, review: body, date_created, timeago, reviewer } = review;

  return {
    id: product_review_id,
    rating,
    title,
    body,
    // Reviews.io is ISO 9075, convert to ISO 8601
    createdAt: new Date(`${date_created}.000Z`).toISOString(),
    timeAgo: timeago,
    reviewer: {
      firstName: reviewer.first_name,
      lastName: reviewer.last_name,
      verifiedBuyer: reviewer.verified_buyer,
      address: reviewer.address,
      imageUrl: reviewer.profile_picture ?? reviewer.gravatar
    }
  };
}

function getStats(stats?: ReviewsIo_ListProductReviewsResponseStatsProperty): ReviewStats {
  return {
    average: stats?.average ?? null,
    count: stats?.count ?? 0
  };
}

export function reviewsIoProductReviewsToReviewList(reviews?: ReviewsIo_ListProductReviewsResponse): ReviewList {
  const { total, per_page, current_page, data } = reviews?.reviews ?? {};

  return {
    stats: getStats(reviews?.stats),
    currentPage: current_page ?? null,
    totalPages: total ?? null,
    perPage: per_page ?? null,
    data: data?.map(getReview) ?? []
  };
}

export function reviewsIoProductReviewsToReviewHighlight(
  reviews?: ReviewsIo_ListProductReviewsResponse
): ReviewHighlights {
  return {
    stats: getStats(reviews?.stats),
    featured: reviews?.reviews?.data?.slice(0, 5).map(getReview) ?? []
  };
}
