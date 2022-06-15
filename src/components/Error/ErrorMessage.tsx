import { PropsWithChildren } from 'react';

export interface ErrorMessageProps {
  headline: string;
  subhead: string;
  body: string;
}

export const ErrorMessage = ({ headline, subhead, body, children }: PropsWithChildren<ErrorMessageProps>) => {
  return (
    <>
      <div className="flex-shrink-0 my-auto py-16 sm:py-32">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{headline}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{subhead}</h1>
        <p className="mt-2 text-base text-gray-500">{body}</p>
        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent">{children}</div>
      </div>
    </>
  );
};
