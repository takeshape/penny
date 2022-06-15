import { Avatar } from 'components/Avatar/Avatar';
import { DefaultReviewer } from 'components/Icons/Icons';
import { Stars } from 'components/Stars/Stars';
import { ProductPageReviewsReview } from '../types';

export interface ReviewsListItemProps {
  review: ProductPageReviewsReview;
}

export const ReviewsListItem = ({ review }: ReviewsListItemProps) => {
  return (
    <>
      <div className="flex items-center">
        <Avatar
          src={review.reviewer.imageUrl}
          alt={`${review.reviewer.firstName} ${review.reviewer.lastName}.`}
          fallback={<DefaultReviewer />}
        />

        <div className="ml-4">
          <h4 className="text-sm font-bold text-gray-900">
            {review.reviewer.firstName} {review.reviewer.lastName}
          </h4>
          <Stars rating={review.rating} />
          <p className="sr-only">{review.rating} out of 5 stars</p>
        </div>
      </div>

      <div
        className="mt-4 space-y-6 text-base italic text-gray-600 prose"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
};
