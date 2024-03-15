import { Skeleton } from '@/components/Skeleton/Skeleton';

export default function Loading() {
  return (
    <Skeleton className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">Loading...</div>
    </Skeleton>
  );
}
