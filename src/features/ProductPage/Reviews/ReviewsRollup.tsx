import { Star } from 'components/Stars/Stars';
import { ProductPageReviewsRollup, ProductPageReviewsStats } from '../types';

export interface ReviewsRollupProps {
  rollup: ProductPageReviewsRollup[];
  stats: ProductPageReviewsStats;
}

export const ReviewsRollup = ({ rollup, stats }: ReviewsRollupProps) => {
  return (
    <dl className="space-y-3">
      {rollup.map((score) => (
        <div key={score.rating} className="flex items-center text-sm">
          <dt className="flex-1 flex items-center">
            <p className="w-3 font-medium text-gray-900">
              {score.rating}
              <span className="sr-only"> star reviews</span>
            </p>
            <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
              <Star lit={score.count > 0} />
              <div className="ml-3 relative flex-1">
                <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                {score.count > 0 ? (
                  <div
                    className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                    style={{ width: `calc(${score.count} / ${stats.count} * 100%)` }}
                  />
                ) : null}
              </div>
            </div>
          </dt>
          <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
            {Math.round((score.count / stats.count) * 100)}%
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default ReviewsRollup;
