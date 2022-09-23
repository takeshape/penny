// @ts-nocheck Need support for non-nullable in OpenAPI specs all the nullable props here make this unsafe.
import { Review, ReviewStats } from 'types/review';
import { ReviewsIo_ListProductReviewsResponseStatsProperty, ReviewsIo_ProductReview } from 'types/takeshape';

export function getReview(review: ReviewsIo_ProductReview): Review {
  const { product_review_id, rating, title, review: body, date_created, timeago, reviewer } = review;
  const dateCreated = `${date_created.replace(' ', 'T')}.000Z`;
  return {
    id: product_review_id,
    rating,
    title,
    body,
    // Reviews.io is ISO 9075, convert to ISO 8601
    createdAt: new Date(dateCreated).toISOString(),
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

export function getStats(stats?: ReviewsIo_ListProductReviewsResponseStatsProperty): ReviewStats {
  return {
    average: stats?.average ?? null,
    count: stats?.count ?? 0
  };
}
