import { assertEnv } from '../lib/env';

export const takeshapeAuthIssuer = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER);
export const takeshapeAuthAudience = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE);
export const sessionRefetchInterval = 0; // No refetch

// Must be shorter than the 60 day customer access token
export const sessionMaxAge = 14 * 24 * 60 * 60; // 14 days

export const googleClientId = process.env.GOOGLE_CLIENT_ID ?? '';
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';
