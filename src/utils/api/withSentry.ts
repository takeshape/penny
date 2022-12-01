import * as Sentry from '@sentry/node';
import { sentryDsn } from 'config';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export function withSentry(handler: NextApiHandler) {
  if (!sentryDsn) {
    return handler;
  }

  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await handler(req, res);
    } catch (e) {
      Sentry.captureException(e);
      return res.status(500).json({ errors: [{ status: '500', title: 'Server error' }] });
    }
  };
}
