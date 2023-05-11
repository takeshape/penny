import { commitSha, logLevel, vercelEnv } from 'config';
import pino, { LoggerOptions } from 'pino';

const config: LoggerOptions = {
  level: logLevel,
  base: {
    env: vercelEnv,
    revision: commitSha
  }
};

export default pino(config);
