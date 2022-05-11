import { exportJWK, importSPKI } from 'jose';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { HandlerOptions } from '../types';

async function handler(options: HandlerOptions, _req: NextApiRequest, res: NextApiResponse) {
  const { jwksKid } = options;

  const publicKey = await importSPKI(options.publicKey.replace(/\\n/g, '\n'), 'RS256');

  const publicJwk = await exportJWK(publicKey);

  res.send({
    keys: [
      {
        ...publicJwk,
        use: 'sig',
        alg: 'RS256',
        kid: jwksKid
      }
    ]
  });
}

export default handler;
