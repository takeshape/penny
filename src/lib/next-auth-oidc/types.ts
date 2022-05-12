import type { JSONWebKeySet } from 'jose';

export interface Client {
  id: string;
  name: string;
  audience: string;
  expiration?: string | number;
}

export interface NextAuthOIDCOptions {
  clients: Client[];
  jwksPath?: string;
  privateKey?: string;
  nextAuthSecret?: string;
  issuer?: string;
}

export interface HandlerOptions {
  clients: Client[];
  jwks: JSONWebKeySet;
  privateKey: string;
  nextAuthSecret: string;
  issuer: string;
  origin: string;
}
