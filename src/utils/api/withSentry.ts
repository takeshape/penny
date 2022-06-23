import { withSentry as actualWithSentry } from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

export const withSentry = (handler) => {
  return SENTRY_DSN ? actualWithSentry(handler) : handler;
};
