import { PropsWithChildren } from 'react';

export const ContentBodySimple = ({ children }: PropsWithChildren<{}>) => {
  return <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">{children}</div>;
};

export default ContentBodySimple;
