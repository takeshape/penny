import { ArrowPathIcon } from '@heroicons/react/24/solid';

export const NoSubscriptions = () => {
  return (
    <div className="relative block w-full p-12 text-center">
      <ArrowPathIcon className="mx-auto h-12 w-12 text-body-400" />
      <span className="mt-2 block text-sm font-medium text-body-900">No active subscriptions</span>
    </div>
  );
};
