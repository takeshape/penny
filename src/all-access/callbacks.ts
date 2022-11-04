import type { CallbacksOptions, NextAuthOptions } from 'next-auth';
import type { CreateSigningFnsParameters } from './token';
import { createSigningFns } from './token';

/**
 * Creates a session callback wrapper that adds signed tokens for
 * all the configured clients.
 */
export function createSessionCallback(
  signingOptions: CreateSigningFnsParameters,
  nextAuthOptions: NextAuthOptions
): CallbacksOptions['session'] {
  const signAccessTokens = createSigningFns(signingOptions);

  const originalSessionCallback = nextAuthOptions.callbacks?.session;

  return async (params) => {
    const { session, token } = params;

    // @ts-expect-error
    session['allAccess'] = await signAccessTokens(token);

    if (originalSessionCallback) {
      return originalSessionCallback(params);
    }

    return session;
  };
}
