/* eslint-disable no-console */
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
  console.log('createSessionCallback');
  const signAccessTokens = createSigningFns(signingOptions);

  const originalSessionCallback = nextAuthOptions.callbacks?.session;

  return async (params) => {
    console.log('handling session', params);
    const { session, token } = params;

    console.log('session before', session);

    session.oidcAccessTokens = await signAccessTokens(token);

    console.log('accesstokens', session.oidcAccessTokens);

    if (originalSessionCallback) {
      return originalSessionCallback(params);
    }

    return session;
  };
}
