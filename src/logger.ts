import { commitSha, logLevel, nodeEnv } from 'config';
import type { LoggerOptions } from 'pino';
import pino from 'pino';

const config: LoggerOptions = {
  level: logLevel,
  base: {
    env: nodeEnv,
    revision: commitSha
  }
};

export default pino(config);
