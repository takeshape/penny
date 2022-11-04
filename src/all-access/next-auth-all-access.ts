import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import fs from 'node:fs';
import { createSessionCallback } from './callbacks';
import jwksHandler from './handlers/jwks';
import openidConfigurationHandler from './handlers/openid-configuration';
import { importPkcs8 } from './key';
import type { CreateSigningFnsParameters } from './token';
import type { HandlerOptions, NextAuthAllAccessOptions } from './types';
import { isJsonWebKeySet } from './types';
import { getIssuer, getOrigin, sanitizeKey } from './utils';

function nextAuthAllAccessHandler(options: HandlerOptions, nextAuth: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let {
      query: { nextauth: route }
    } = req;

    route = (Array.isArray(route) ? route : [route]).join('/');

    switch (route) {
      case 'all-access/jwkson': {
        jwksHandler(options, req, res);
        return;
      }

      case 'all-access/.well-known/openid-configuration': {
        openidConfigurationHandler(options, req, res);
        return;
      }

      default: {
        await nextAuth(req, res);
      }
    }
  };
}

/**
 * Wraps NextAuth with AllAccess code, which adds AllAccess endpoints and inserts
 * access tokens into the session object.
 */
function nextAuthAllAccess(options: NextAuthAllAccessOptions) {
  const jwksPath = options.jwksPath ?? process.env['ALLACCESS_JWKS_PATH'];
  const privateKey = options.privateKey ?? process.env['ALLACCESS_PRIVATE_KEY'];

  if (!jwksPath || !privateKey) {
    throw new Error('JWKS file path and private key are required');
  }

  const jwks = JSON.parse(fs.readFileSync(jwksPath, 'utf-8')) as unknown;

  if (!isJsonWebKeySet(jwks)) {
    throw new Error('JWKS file is invalid');
  }

  const kid = jwks.keys[0]?.kid;

  if (!kid) {
    throw new Error('JWKS file is invalid');
  }

  const issuer = getIssuer(options.issuer);

  const handlerOptions: HandlerOptions = {
    issuer,
    origin: getOrigin(),
    jwks
  };

  const signingOptions: CreateSigningFnsParameters = {
    clients: options.clients,
    privateKey: importPkcs8(sanitizeKey(privateKey)),
    issuer,
    kid
  };

  return (createNextAuth: (opt: NextAuthOptions) => any, nextAuthOptions: NextAuthOptions) => {
    const sessionCallback = createSessionCallback(signingOptions, nextAuthOptions);

    nextAuthOptions.callbacks = {
      ...nextAuthOptions.callbacks,
      session: sessionCallback
    };

    return nextAuthAllAccessHandler(handlerOptions, createNextAuth(nextAuthOptions));
  };
}

export default nextAuthAllAccess;
