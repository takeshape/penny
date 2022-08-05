import { PropsWithChildren } from 'react';

export const ContentBody = ({ children }: PropsWithChildren<{}>) => {
  return <div className="mt-6 prose prose-accent prose-lg text-body-500 mx-auto">{children}</div>;
};
