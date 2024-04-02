import PageLoader from '@/components/PageLoader';

export const ProductLoading = () => {
  return (
    <div className="animate-pulse ">
      <div className="h-[100vh] w-full">
        <PageLoader />
      </div>
    </div>
  );
};
