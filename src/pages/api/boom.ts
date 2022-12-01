import { NextApiHandler } from 'next';
import { withSentry } from 'utils/api/withSentry';

const handler: NextApiHandler = () => {
  throw new Error('BOOM');
};

export default withSentry(handler);
