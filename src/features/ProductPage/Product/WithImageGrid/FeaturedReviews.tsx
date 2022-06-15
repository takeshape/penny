import { StarIcon } from '@heroicons/react/solid';
import { DefaultReviewer } from 'components/Icons/Icons';
import NextImage from 'components/NextImage';
import { Review } from 'types/review';
import classNames from 'utils/classNames';

export interface FeaturedReviewsProps {
  reviews: Review[];
}

export const FeaturedReviews = ({ reviews }: FeaturedReviewsProps) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col sm:flex-row">
          <div className="mt-6 order-2 sm:mt-0 sm:ml-16">
            <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
            <p className="sr-only">{review.rating} out of 5 stars</p>

            <div
              className="mt-3 space-y-6 text-sm text-gray-600 prose"
              dangerouslySetInnerHTML={{ __html: review.body }}
            />
          </div>

          <div className="order-1 flex items-center sm:flex-col sm:items-start">
            <div className="h-12 w-12">
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
            </div>

            <div className="ml-4 sm:ml-0 sm:mt-4">
              <p className="text-sm font-medium text-gray-900">
                {review.reviewer.firstName} {review.reviewer.lastName}
              </p>
              <div className="mt-2 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
