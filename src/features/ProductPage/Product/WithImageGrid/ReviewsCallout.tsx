import Stars from 'components/Stars/Stars';
import { ReviewStats } from 'types/review';

export interface ReviewsCalloutProps {
  stats: ReviewStats;
  showReviewsLink: boolean;
}

export const ReviewsCallout = ({ stats, showReviewsLink }: ReviewsCalloutProps) => {
  return (
    <>
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          <Stars rating={stats.average} />
        </div>
        <p className="sr-only">{stats.average} out of 5 stars</p>
        {showReviewsLink ? (
          <a href="#reviews" className="ml-3 text-sm font-medium text-accent-600 hover:text-accent-500">
            {stats.count} reviews
          </a>
        ) : (
          <span className="ml-3 text-sm font-medium text-gray-900">{stats.count} reviews</span>
        )}
      </div>
    </>
  );
};
