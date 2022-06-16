import { commitSha, logLevel, nodeEnv } from 'config';
import pino, { LoggerOptions } from 'pino';

const config: LoggerOptions = {
  level: logLevel,
  base: {
    env: nodeEnv,
    revision: commitSha
  }
};

export default pino(config);
