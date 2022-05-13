import type { NextApiRequest, NextApiResponse } from 'next';
import type { HandlerOptions } from '../types';

const handler = (options: HandlerOptions, _req: NextApiRequest, res: NextApiResponse) => {
  const { issuer, origin } = options;
  res.send({
    issuer,
    jwks_uri: `${origin}/api/auth/all-access/jwks.json`
  });
};

export default handler;
