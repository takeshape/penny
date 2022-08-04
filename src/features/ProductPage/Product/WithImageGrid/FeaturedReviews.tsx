import { Avatar } from 'components/Avatar/Avatar';
import { DefaultReviewer } from 'components/Icons/Icons';
import Stars from 'components/Stars/Stars';
import { Review } from 'types/review';

export interface FeaturedReviewsProps {
  reviews: Review[];
}

export const FeaturedReviews = ({ reviews }: FeaturedReviewsProps) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col sm:flex-row">
          <div className="mt-6 order-2 sm:mt-0 sm:ml-16">
            <h3 className="text-sm font-medium text-mainText-900">{review.title}</h3>
            <p className="sr-only">{review.rating} out of 5 stars</p>

            <div
              className="mt-3 space-y-6 text-sm text-mainText-600 prose"
              dangerouslySetInnerHTML={{ __html: review.body }}
            />
          </div>

          <div className="order-1 flex items-center sm:flex-col sm:items-start">
            <div className="h-12 w-12">
              <Avatar
                src={review.reviewer.imageUrl}
                alt={`${review.reviewer.firstName} ${review.reviewer.lastName}.`}
                fallback={<DefaultReviewer />}
              />
            </div>

            <div className="ml-4 sm:ml-0 sm:mt-4">
              <p className="text-sm font-medium text-mainText-900">
                {review.reviewer.firstName} {review.reviewer.lastName}
              </p>
              <Stars rating={review.rating} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
