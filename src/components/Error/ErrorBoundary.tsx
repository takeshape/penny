import * as Sentry from '@sentry/nextjs';
import { ErrorMessage } from 'components/Error/ErrorMessage';
import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';
import { PropsWithChildren } from 'react';

export interface ErrorBoundaryProps extends PropsWithChildren {
  headline?: string;
  subhead?: string;
  body?: string;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  const { children, headline, subhead, body } = props;

  return (
    <Sentry.ErrorBoundary
      fallback={
        <Wrapper>
          <ErrorMessage
            headline={headline ?? '500 error'}
            subhead={subhead ?? 'Server error'}
            body={body ?? 'Sorry, we had an unexpected error.'}
          >
            <NextLink
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go back home<span aria-hidden="true"> &rarr;</span>
            </NextLink>
          </ErrorMessage>
        </Wrapper>
      }
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};
