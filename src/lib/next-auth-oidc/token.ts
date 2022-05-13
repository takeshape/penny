import { importPKCS8, SignJWT } from 'jose';
import type { Client, NextAuthToken } from './types';

interface CreateSignTokenParams {
  id: string;
  privateKey: string;
  expiration?: string | number;
  kid: string;
  issuer: string;
  audience: string;
}

export function createSigningFn({ id, privateKey, expiration, kid, issuer, audience }: CreateSignTokenParams) {
  return async (token: NextAuthToken) => {
    const key = await importPKCS8(privateKey, 'RS256');

    const signed = await new SignJWT(token)
      .setProtectedHeader({
        typ: 'JWT',
        alg: 'RS256',
        kid
      })
      .setIssuer(issuer)
      .setAudience(audience)
      .setExpirationTime(expiration)
      .setIssuedAt()
      .sign(key);

    return { id, accessToken: signed };
  };
}

export interface CreateSigningFnsParams {
  clients: Client[];
  privateKey: string;
  issuer: string;
  kid: string;
}

export function createSigningFns({ clients, privateKey, issuer, kid }: CreateSigningFnsParams) {
  const accessTokenSigningFns = clients.map((client) => {
    return createSigningFn({
      ...client,
      privateKey,
      issuer,
      kid
    });
  });

  return async (token: NextAuthToken) => {
    const signedTokens = await Promise.all(accessTokenSigningFns.map((fn) => fn(token)));
    return signedTokens.reduce((s, v) => ({ ...s, [v.id]: v }), {});
  };
}
