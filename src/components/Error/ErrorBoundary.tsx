import * as Sentry from '@sentry/react';
import { commitSha, sentryDsn, vercelEnv } from 'config';
import { PropsWithChildren } from 'react';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

export interface ErrorBoundaryProps {
  headline?: string;
  subhead?: string;
  body?: string;
}

export const ErrorBoundary = (props: PropsWithChildren<ErrorBoundaryProps>) => {
  const { children, headline, subhead, body } = props;

  if (sentryDsn) {
    Sentry.init({
      dsn: sentryDsn,
      environment: vercelEnv,
      release: commitSha
    });
  }

  return (
    <Sentry.ErrorBoundary fallback={<ErrorBoundaryFallback headline={headline} subhead={subhead} body={body} />}>
      {children}
    </Sentry.ErrorBoundary>
  );
};
