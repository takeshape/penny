import pino, { LoggerOptions } from 'pino';
import { commitSha, logLevel, vercelEnv } from './config';

const config: LoggerOptions = {
  level: logLevel,
  base: {
    env: vercelEnv,
    revision: commitSha
  }
};

export default pino(config);
