import type { JSONWebKeySet } from 'jose';
import type { SessionContextValue } from 'next-auth/react';

export interface Client {
  id: string;
  audience: string;
  expiration?: string | number;
  allowedClaims?: string[];
  renameClaims?: Record<string, string>;
}

export interface NextAuthAllAccessOptions {
  clients: Client[];
  jwksPath?: string;
  jwks?: unknown;
  privateKey?: string;
  issuer?: string;
}

export interface HandlerOptions {
  jwks: JSONWebKeySet;
  issuer: string;
  origin: string;
}

export type NextAuthToken = Record<string, unknown>;

export type AllAccessToken = {
  id: string;
  accessToken: string;
};

export type AllAccessSession = SessionContextValue['data'] & {
  allAccess: Record<string, AllAccessToken>;
};

export function isJsonWebKeySet(maybeJwks: unknown): maybeJwks is JSONWebKeySet {
  const obj = maybeJwks as JSONWebKeySet;
  return Boolean(Array.isArray(obj?.keys) && obj.keys.every((k) => k.kid));
}
