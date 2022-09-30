import { withSentry as actualWithSentry } from '@sentry/nextjs';
import { NextApiHandler } from 'next';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

export const withSentry = (handler: NextApiHandler) => {
  return SENTRY_DSN ? actualWithSentry(handler) : handler;
};
