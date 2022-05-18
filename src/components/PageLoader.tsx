import Loader from './Loader/Loader';

export const PageLoader = () => {
  return (
    <div className="flex grow flex-col items-center justify-center h-full w-full">
      <Loader />
    </div>
  );
};

export default PageLoader;
