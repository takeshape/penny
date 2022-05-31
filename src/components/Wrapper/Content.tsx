import type { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Wrapper;
