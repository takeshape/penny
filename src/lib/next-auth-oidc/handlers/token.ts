import { importPKCS8, SignJWT } from 'jose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import type { HandlerOptions } from '../types';

async function handler(options: HandlerOptions, req: NextApiRequest, res: NextApiResponse) {
  const { issuer, client, jwksKid, nextAuthSecret } = options;

  const token = await getToken({ req, secret: nextAuthSecret });

  if (!token) {
    res.send({
      error: 'Unauthenticated'
    });
  }

  const privateKey = await importPKCS8(options.privateKey.replace(/\\n/g, '\n'), 'RS256');

  const signed = await new SignJWT(token)
    .setProtectedHeader({
      typ: 'JWT',
      alg: 'RS256',
      kid: jwksKid
    })
    .setIssuer(issuer)
    .setAudience(client.audience)
    .setExpirationTime(client.expiration ?? '6h')
    .setIssuedAt()
    .sign(privateKey);

  res.send({ access_token: signed });
}

export default handler;
