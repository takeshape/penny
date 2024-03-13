import { Avatar } from '@/components/Avatar/Avatar';
import { DefaultReviewer } from '@/components/Icons/Icons';
import { Stars } from '@/components/Stars/Stars';
import { ProductPageReviewsReview } from '../types';

export interface ReviewsListItemProps {
  item: ProductPageReviewsReview;
}

export const ReviewsListItem = ({ item }: ReviewsListItemProps) => {
  return (
    <>
      <div className="flex items-center">
        <Avatar
          src={item.reviewer.imageUrl}
          alt={`Avatar image of ${item.reviewer.name}`}
          fallback={<DefaultReviewer />}
        />

        <div className="ml-4">
          <h4 className="text-sm font-bold text-body-900">{item.reviewer.name}</h4>
          <Stars rating={item.rating} />
          <p className="sr-only">{item.rating} out of 5 stars</p>
        </div>
      </div>

      <div
        className="mt-4 space-y-6 text-base italic text-body-600 prose"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />
    </>
  );
};
