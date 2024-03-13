import { assertEnv } from '@/utils/env';

export const takeshapeApiUrl = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_API_URL);
export const takeshapeAnonymousApiKey = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY);
export const takeshapeApiKey = process.env.TAKESHAPE_API_KEY ?? '';
