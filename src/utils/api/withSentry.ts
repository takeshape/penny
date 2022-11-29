import * as Sentry from '@sentry/node';
import { commitSha, sentryDsn, vercelEnv } from 'config';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function withSentry(handler: NextApiHandler) {
  if (!sentryDsn) {
    return handler;
  }

  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (sentryDsn) {
      Sentry.init({
        dsn: sentryDsn,
        environment: vercelEnv,
        release: commitSha
      });

      try {
        handler(req, res);
      } catch (e) {
        Sentry.captureException(e);
      }
    }
  };
}
