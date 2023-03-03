import getConfig from 'next/config';
import { assertEnv } from 'utils/env';

const { publicRuntimeConfig } = getConfig();

export const takeshapeApiUrl = assertEnv(
  publicRuntimeConfig.takeshapeApiBranchUrl || process.env.NEXT_PUBLIC_TAKESHAPE_API_URL
);
export const takeshapeAnonymousApiKey = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY);
