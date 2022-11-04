import type { NextApiRequest, NextApiResponse } from 'next';
import type { HandlerOptions } from '../types';

function handler(options: HandlerOptions, _req: NextApiRequest, res: NextApiResponse) {
  res.send(options.jwks);
}

export default handler;
