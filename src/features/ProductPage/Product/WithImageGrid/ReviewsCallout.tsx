import Stars from 'components/Stars/Stars';
import { ReviewStats } from 'types/review';

export interface ReviewsCalloutProps {
  stats: ReviewStats;
}

export const ReviewsCallout = ({ stats }: ReviewsCalloutProps) => {
  return (
    <>
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          <Stars rating={stats.average} />
        </div>
        <p className="sr-only">{stats.average} out of 5 stars</p>
        <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {stats.count} reviews
        </a>
      </div>
    </>
  );
};
