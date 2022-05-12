import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import jwksHandler from './handlers/jwks';
import openidConfigurationHandler from './handlers/openid-configuration';
import tokenHandler from './handlers/token';
import type { HandlerOptions, NextAuthOIDCOptions } from './types';
import { getIssuer, getOrigin } from './utils';

async function NextAuthOIDCHandler(options: HandlerOptions, req: NextApiRequest, res: NextApiResponse) {
  let {
    query: { nextauthoidc: route }
  } = req;

  route = Array.isArray(route) ? route : [route];

  if (route[0] === 'jwks.json') {
    return jwksHandler(options, req, res);
  }

  const clientId = route.shift();
  const client = options.clients.find((c) => c.id === clientId);

  if (!client) {
    res.status(404).end();
    return;
  }

  route = route.join('/');

  switch (route) {
    case '.well-known/openid-configuration':
      return openidConfigurationHandler(options, client, req, res);
    case 'token':
      return tokenHandler(options, client, req, res);
    default:
      res.status(404).end();
  }
}

function NextAuthOIDC(options: NextAuthOIDCOptions) {
  let jwksPath = options.jwksPath ?? process.env.NEXTAUTHOIDC_JWKS_PATH;
  const privateKey = options.privateKey ?? process.env.NEXTAUTHOIDC_PRIVATE_KEY;

  if (!jwksPath || !privateKey) {
    throw new Error('Public key and private key are required');
  }

  const jwks = JSON.parse(fs.readFileSync(jwksPath, 'utf-8'));

  const handlerOptions: HandlerOptions = {
    clients: options.clients,
    issuer: getIssuer(options.issuer),
    origin: getOrigin(),
    jwks,
    privateKey: privateKey.trim(),
    nextAuthSecret: options.nextAuthSecret ?? process.env.NEXTAUTH_SECRET
  };

  return async (req: NextApiRequest, res: NextApiResponse) => {
    return await NextAuthOIDCHandler(handlerOptions, req, res);
  };
}

export default NextAuthOIDC;
