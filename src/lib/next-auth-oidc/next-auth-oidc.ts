import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { createSessionCallback } from './callbacks';
import jwksHandler from './handlers/jwks';
import openidConfigurationHandler from './handlers/openid-configuration';
import type { CreateSigningFnsParams } from './token';
import type { HandlerOptions, NextAuthOIDCOptions } from './types';
import { getIssuer, getOrigin } from './utils';

function NextAuthOIDCHandler(options: HandlerOptions, nextAuth: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let {
      query: { nextauth: route }
    } = req;

    route = Array.isArray(route) ? route : [route];

    route = route.join('/');

    switch (route) {
      case 'oidc/jwks.json':
        return jwksHandler(options, req, res);
      case 'oidc/.well-known/openid-configuration':
        return openidConfigurationHandler(options, req, res);
      default:
        return nextAuth(req, res);
    }
  };
}

/**
 * Wraps NextAuth with OIDC code, which adds OIDC endpoints and inserts
 * access tokens into the session object.
 */
function NextAuthOIDC(options: NextAuthOIDCOptions) {
  const jwksPath = options.jwksPath ?? process.env.NEXTAUTHOIDC_JWKS_PATH;
  const privateKey = options.privateKey ?? process.env.NEXTAUTHOIDC_PRIVATE_KEY;

  if (!jwksPath || !privateKey) {
    throw new Error('JWKS file path and private key are required');
  }

  const jwks = JSON.parse(fs.readFileSync(jwksPath, 'utf-8'));
  const issuer = getIssuer(options.issuer);

  const handlerOptions: HandlerOptions = {
    issuer,
    origin: getOrigin(),
    jwks
  };

  const signingOptions: CreateSigningFnsParams = {
    clients: options.clients,
    privateKey: privateKey.trim().replace(/\\n/g, '\n'),
    issuer,
    kid: jwks.keys[0].kid
  };

  return (NextAuth: (opt: NextAuthOptions) => any, nextAuthOptions: NextAuthOptions) => {
    const sessionCallback = createSessionCallback(signingOptions, nextAuthOptions);

    nextAuthOptions.callbacks = {
      ...nextAuthOptions.callbacks,
      session: sessionCallback
    };

    return NextAuthOIDCHandler(handlerOptions, NextAuth(nextAuthOptions));
  };
}

export default NextAuthOIDC;
