import { siteUrl } from '@/config';

export function sanitizeCallbackUrl(callbackUrl: string) {
  return new URL(callbackUrl, siteUrl).pathname;
}
