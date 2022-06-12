import { DefaultReviewer } from 'components/Icons/Icons';

export const ReviewsListItemLoading = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center">
        <DefaultReviewer />
        <div className="ml-4">
          <div className="w-72 h-4 bg-gray-300"></div>
          <div className="mt-2 w-72 h-4 bg-gray-300"></div>
        </div>
      </div>

      <div className="mt-4 space-y-6 w-full h-36 bg-gray-300"></div>
    </div>
  );
};

export default ReviewsListItemLoading;
