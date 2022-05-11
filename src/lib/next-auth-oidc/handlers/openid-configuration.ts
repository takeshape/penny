import type { NextApiRequest, NextApiResponse } from 'next';
import type { HandlerOptions } from '../types';

const handler = (options: HandlerOptions, _req: NextApiRequest, res: NextApiResponse) => {
  const { issuer, origin, client } = options;
  res.send({
    issuer: `${issuer}`,
    token_endpoint: `${origin}/api/oidc/${client.id}/token`,
    jwks_uri: `${origin}/api/oidc/jwks.json`
  });
};

export default handler;
