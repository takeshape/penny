import { commitSha, isDevelopment, logLevel, vercelEnv } from 'config';
import pino, { LoggerOptions } from 'pino';

const config: LoggerOptions = {
  level: logLevel,
  base: {
    env: vercelEnv,
    revision: commitSha
  }
};

if (isDevelopment) {
  config.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  };
}

export default pino(config);
