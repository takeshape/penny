import { assertEnv } from '../utils/env';

export const takeshapeAuthIssuer = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER);
export const takeshapeAuthAudience = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE);
export const sessionRefetchInterval = 0; // No refetch

// Must be shorter than the 60 day customer access token
export const sessionMaxAgeRememberMe = 30 * 24 * 60 * 60; // 30 days
export const sessionMaxAgeForgetMe = 60 * 60; // 1 hour

export const googleClientId = process.env.GOOGLE_CLIENT_ID ?? '';
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';
