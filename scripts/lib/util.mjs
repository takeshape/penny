import chalk from 'chalk';

export function getProjectId() {
  const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
  return takeshapeApiUrl.match(/project\/([a-z0-9-]+)/)[1];
}

export const logPrefix = `${chalk.cyan('takeshape')} -`;

export function logWithPrefix(msg) {
  console.log(`${prefix} ${msg}`);
}
