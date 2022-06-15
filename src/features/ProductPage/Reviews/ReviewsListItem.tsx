import { DefaultReviewer } from 'components/Icons/Icons';
import NextImage from 'components/NextImage';
import { Stars } from 'components/Stars/Stars';
import { ProductPageReviewsReview } from '../types';

export interface ReviewsListItemProps {
  review: ProductPageReviewsReview;
}

export const ReviewsListItem = ({ review }: ReviewsListItemProps) => {
  return (
    <>
      <div className="flex items-center">
        {!review.reviewer.imageUrl && <DefaultReviewer />}

        {review.reviewer.imageUrl && (
          <NextImage
            src={review.reviewer.imageUrl}
            alt={`${review.reviewer.firstName} ${review.reviewer.lastName}.`}
            height={48}
            width={48}
            className="rounded-full"
          />
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
        className="mt-4 space-y-6 text-base italic text-gray-600 prose"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
};
