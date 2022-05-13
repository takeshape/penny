import type { JSONWebKeySet } from 'jose';

export interface Client {
  id: string;
  audience: string;
  expiration?: string | number;
}

export interface NextAuthAllAccessOptions {
  clients: Client[];
  jwksPath?: string;
  privateKey?: string;
  issuer?: string;
}

export interface HandlerOptions {
  jwks: JSONWebKeySet;
  issuer: string;
  origin: string;
}

export type NextAuthToken = Record<string, unknown>;
