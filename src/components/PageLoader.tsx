import type { LoaderProps } from './Loader/Loader';
import Loader from './Loader/Loader';

export const PageLoader = (props: LoaderProps) => {
  return (
    <div className="flex grow flex-col items-center justify-center h-full w-full">
      <Loader {...props} />
    </div>
  );
};

export default PageLoader;
