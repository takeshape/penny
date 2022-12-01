import * as Sentry from '@sentry/node';
import { commitSha, sentryDsn, vercelEnv } from 'config';
import logger from 'logger';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function withSentry(handler: NextApiHandler) {
  if (!sentryDsn) {
    return handler;
  }

  Sentry.init({
    dsn: sentryDsn,
    environment: vercelEnv,
    release: commitSha
  });

  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await handler(req, res);
    } catch (e) {
      Sentry.captureException(e);
      await Sentry.flush(1000);
      logger.error(e);
      return res.status(500).json({ errors: [{ status: '500', title: 'Server error' }] });
    }
  };
}
