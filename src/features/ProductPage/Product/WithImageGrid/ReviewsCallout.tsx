import { StarIcon } from '@heroicons/react/solid';
import { ReviewStats } from 'types/review';
import classNames from 'utils/classNames';

export interface ReviewsCalloutProps {
  stats: ReviewStats;
}

export const ReviewsCallout = ({ stats }: ReviewsCalloutProps) => {
  return (
    <>
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                stats.average > rating ? 'text-gray-900' : 'text-gray-200',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{stats.average} out of 5 stars</p>
        <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          {stats.count} reviews
        </a>
      </div>
    </>
  );
};

export default ReviewsCallout;
