import type { Review, ReviewList, ReviewStats } from 'types/review';
import type { ReviewsIo_ListProductReviewsResponse, ReviewsIo_ProductReview } from 'types/takeshape';

function getReview(review: ReviewsIo_ProductReview): Review {
  const { rating, title, review: body, date_created, timeago, reviewer } = review;

  return {
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

export function reviewsIoProductReviewsToReviewList(reviews?: ReviewsIo_ListProductReviewsResponse): ReviewList {
  const { total, per_page, current_page, data } = reviews?.reviews ?? {};

  return {
    currentPage: current_page ?? null,
    totalPages: total ?? null,
    perPage: per_page ?? null,
    data: data?.map(getReview) ?? null
  };
}

export function reviewsIoProductReviewsToReviewStats(reviews?: ReviewsIo_ListProductReviewsResponse): ReviewStats {
  return {
    average: reviews?.stats?.average ?? null,
    count: reviews?.stats?.count ?? 0
  };
}
