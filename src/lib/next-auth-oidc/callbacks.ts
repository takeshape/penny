import type { CallbacksOptions, NextAuthOptions } from 'next-auth';
import type { CreateSigningFnsParams } from './token';
import { createSigningFns } from './token';

/**
 * Creates a session callback wrapper that adds signed tokens for
 * all the configured clients.
 */
export function createSessionCallback(
  signingOptions: CreateSigningFnsParams,
  nextAuthOptions: NextAuthOptions
): CallbacksOptions['session'] {
  const signAccessTokens = createSigningFns(signingOptions);

  const originalSessionCallback = nextAuthOptions.callbacks?.session;

  return async (params) => {
    const { session, token } = params;

    session.oidcAccessTokens = await signAccessTokens(token);

    if (originalSessionCallback) {
      return originalSessionCallback(params);
    }

    return session;
  };
}
