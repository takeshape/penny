import { Review, ReviewList, ReviewStats } from 'types/review';
import {
  TrustpilotLink,
  TrustpilotProductReviewsProductReviewsConsumerProperty,
  TrustpilotProductReviewsProductReviewsProperty,
  TrustpilotProductReviewsSummary
} from 'types/takeshape';

export type TrustpilotReview = Pick<
  TrustpilotProductReviewsProductReviewsProperty,
  'id' | 'stars' | 'content' | 'createdAt'
> & {
  consumer: Pick<TrustpilotProductReviewsProductReviewsConsumerProperty, 'displayName'>;
};

export type TrustpilotReviewList = {
  productReviews: TrustpilotReview[];
  links: Pick<TrustpilotLink, 'rel'>[];
};

export type TrustpilotSummary = Pick<TrustpilotProductReviewsSummary, 'starsAverage' | 'numberOfReviews'>;

export function getReview(review: TrustpilotReview): Review {
  const { id, stars, content, consumer, createdAt } = review;
  return {
    id,
    rating: stars,
    title: null,
    body: content,
    createdAt: new Date(createdAt).toISOString(),
    reviewer: {
      name: consumer.displayName ?? '',
      imageUrl: null
    }
  };
}

export function getReviewListStats(trustpilotSummary: TrustpilotSummary | null): ReviewStats {
  return {
    average: trustpilotSummary?.starsAverage ?? null,
    count: trustpilotSummary?.numberOfReviews?.total ?? 0
  };
}

export function getReviewList(
  trustpilotReviews: TrustpilotReviewList | null,
  trustpilotSummary: TrustpilotSummary | null
): ReviewList {
  const { productReviews: reviews, links } = trustpilotReviews ?? {};
  const items = reviews?.map(getReview) ?? [];
  const stats = getReviewListStats(trustpilotSummary);
  return {
    stats,
    totalPages: items.length ? Math.ceil(stats.count / items.length) : 0,
    perPage: items.length,
    items,
    hasNextPage: links?.some((link) => link?.rel === 'next-page') ?? false,
    publisher: 'Trustpilot'
  };
}
