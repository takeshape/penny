import type { NextApiRequest, NextApiResponse } from 'next';
import jwksHandler from './handlers/jwks';
import openidConfigurationHandler from './handlers/openid-configuration';
import tokenHandler from './handlers/token';
import type { HandlerOptions, NextAuthOIDCOptions } from './types';
import { getIssuer, getJwksKid, getOrigin } from './utils';

async function NextAuthOIDCHandler(options: NextAuthOIDCOptions, req: NextApiRequest, res: NextApiResponse) {
  let {
    query: { nextauthoidc: route }
  } = req;

  route = Array.isArray(route) ? route : [route];

  const publicKey = options.publicKey ?? process.env.NEXTAUTHOIDC_PUBLIC_KEY;
  const privateKey = options.privateKey ?? process.env.NEXTAUTHOIDC_PRIVATE_KEY;

  if (!publicKey || !privateKey) {
    throw new Error('Public key and private key are required');
  }

  const handlerOptions: HandlerOptions = {
    issuer: getIssuer(options.issuer),
    origin: getOrigin(),
    jwksKid: getJwksKid(publicKey),
    publicKey: publicKey.trim(),
    privateKey: privateKey.trim(),
    nextAuthSecret: options.nextAuthSecret ?? process.env.NEXTAUTH_SECRET
  };

  if (route[0] === 'jwks.json') {
    return jwksHandler(handlerOptions, req, res);
  }

  const { clients } = options;
  const clientId = route.shift();
  const client = clients.find((c) => c.id === clientId);

  if (!client) {
    res.status(404).end();
    return;
  }

  handlerOptions.client = client;

  route = route.join('/');

  switch (route) {
    case '.well-known/openid-configuration':
      return openidConfigurationHandler(handlerOptions, req, res);
    case 'token':
      return tokenHandler(handlerOptions, req, res);
    default:
      res.status(404).end();
  }
}

function NextAuthOIDC(options: NextAuthOIDCOptions) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return await NextAuthOIDCHandler(options, req, res);
  };
}

export default NextAuthOIDC;
