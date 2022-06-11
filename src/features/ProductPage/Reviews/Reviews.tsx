import { DefaultReviewer } from 'components/Icons/Icons';
import NextImage from 'components/NextImage';
import { Star, Stars } from 'components/Stars/Stars';
import { ReviewList } from 'types/review';

export interface ReviewsProps {
  reviews: ReviewList;
  showRollup?: boolean;
}

const Reviews = ({ reviews, showRollup }: React.PropsWithChildren<ReviewsProps>) => {
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
              <Stars rating={stats.average} />
              <p className="sr-only">{stats.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {stats.count} reviews</p>
          </div>

          {showRollup && rollup && (
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

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
              {data.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    {review.reviewer.imageUrl && (
                      <NextImage
                        height={48}
                        width={48}
                        src={review.reviewer.imageUrl}
                        alt={`${review.reviewer.firstName} ${review.reviewer.lastName}.`}
                        className="rounded-full"
                      />
                    )}

                    {review.reviewer.imageUrl ? (
                      <NextImage
                        src={review.reviewer.imageUrl}
                        alt={`${review.reviewer.firstName} ${review.reviewer.lastName}.`}
                        height={48}
                        width={48}
                        className="rounded-full"
                      />
                    ) : (
                      <DefaultReviewer />
                    )}

                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.reviewer.firstName} {review.reviewer.lastName}
                      </h4>
                      <Stars rating={review.rating} />
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
