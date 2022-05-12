import { importPKCS8, SignJWT } from 'jose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import secs from '../secs';
import type { Client, HandlerOptions } from '../types';

async function handler(options: HandlerOptions, client: Client, req: NextApiRequest, res: NextApiResponse) {
  const { issuer, jwks, nextAuthSecret } = options;
  const jwksKid = jwks.keys[0].kid;

  const token = await getToken({ req, secret: nextAuthSecret });

  if (!token) {
    res.send({
      error: 'Unauthenticated'
    });
  }

  const privateKey = await importPKCS8(options.privateKey.replace(/\\n/g, '\n'), 'RS256');
  const expiration: number =
    typeof client.expiration === 'number' ? client.expiration : secs(client.expiration ?? '6h');

  const signed = await new SignJWT(token)
    .setProtectedHeader({
      typ: 'JWT',
      alg: 'RS256',
      kid: jwksKid
    })
    .setIssuer(issuer)
    .setAudience(client.audience)
    .setExpirationTime(expiration)
    .setIssuedAt()
    .sign(privateKey);

  res.send({ access_token: signed, token_type: 'bearer', expires_in: expiration });
}

export default handler;
