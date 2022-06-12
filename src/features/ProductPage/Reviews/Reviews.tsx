import { Stars } from 'components/Stars/Stars';
import { ProductPageReviewsReviewList } from '../types';
import ReviewsListItem from './ReviewsListItem';
import ReviewsListItemLoading from './ReviewsListItemLoading';
import ReviewsRollup from './ReviewsRollup';

export interface ProductPageReviewsProps {
  reviews: ProductPageReviewsReviewList;
  showRollup?: boolean;
}

export const ProductPageReviews = ({ reviews, showRollup }: ProductPageReviewsProps) => {
  const { stats, rollup, data } = reviews;

  return (
    <section aria-labelledby="reviews-heading" className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <Stars rating={stats.average ?? 0} />
              <p className="sr-only">{stats.average ?? 0} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {stats.count} reviews</p>
          </div>

          {showRollup && rollup && (
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <ReviewsRollup rollup={rollup} stats={stats} />
            </div>
          )}

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you&rsquo;ve used this product, share your thoughts with other customers
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {data.map((review, idx) => (
                <div key={review?.id ?? idx} className="py-12">
                  {!review && <ReviewsListItemLoading />}
                  {review && <ReviewsListItem review={review} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageReviews;
