import { PropsWithChildren } from 'react';

export interface WrapperProps {
  className?: string;
}

export const Wrapper = ({ children, className }: PropsWithChildren<WrapperProps>) => {
  return (
    <div className="relative">
      <div className={`relative max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ${className ?? ''}`}>{children}</div>
    </div>
  );
};

export default Wrapper;
