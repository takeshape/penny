export interface Client {
  id: string;
  name: string;
  audience: string;
  expiration?: string;
}

export interface NextAuthOIDCOptions {
  clients: Client[];
  publicKey?: string;
  privateKey?: string;
  nextAuthSecret?: string;
  issuer?: string;
}

export interface HandlerOptions {
  client?: Client;
  publicKey: string;
  privateKey: string;
  nextAuthSecret: string;
  issuer: string;
  jwksKid: string;
  origin: string;
}
