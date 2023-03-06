import * as dotenv from 'dotenv';
import { simpleGit } from 'simple-git';
import { getClient } from './takeshape-client.mjs';
import { getProjectId, logWithPrefix as log } from './util.mjs';

dotenv.config();

const PRODUCTION = 'PRODUCTION';
const DEVELOPMENT = 'DEVELOPMENT';
const vercelEnv = process.env.VERCEL_ENV;

const git = simpleGit();

async function getBranchUrlForLocal() {
  dotenv.config({ path: '.env.local' });

  const isRepo = await git.checkIsRepo();

  if (isRepo) {
    const apiKey = process.env.TAKESHAPE_API_KEY;

    const takeshape = getClient({ apiKey });
    const projectId = getProjectId();

    const headBranchName = await git.revparse(['--abbrev-ref', 'HEAD']);
    const remoteOrigin = await git.remote(['show', 'origin']);
    const defaultBranchName = remoteOrigin.match(/HEAD branch: (.*)/)[1];
    const environment = headBranchName === defaultBranchName ? PRODUCTION : DEVELOPMENT;
    const branchName = environment === PRODUCTION ? '' : headBranchName;

    let result = await takeshape.getBranch({ projectId, environment, branchName });

    if (!result) {
      result = await takeshape.getBranch({ projectId, environment: PRODUCTION });
    }

    return result?.graphqlUrl;
  }
}

async function getBranchUrlForVercel() {
  const tagName = process.env.VERCEL_GIT_COMMIT_SHA;
  const apiKey = process.env.TAKESHAPE_API_KEY;

  const takeshape = getClient({ apiKey });
  const projectId = getProjectId();

  if (vercelEnv === 'production') {
    const result = await takeshape.tagBranch({ projectId, environment: PRODUCTION, tagName });
    return result?.branchVersion?.graphqlUrl;
  }

  const branchName = process.env.VERCEL_GIT_COMMIT_REF;
  const result = await takeshape.tagBranch({ projectId, environment: DEVELOPMENT, branchName, tagName });
  return result?.branchVersion?.graphqlUrl;
}

export async function getTakeshapeBranchUrl() {
  log('Getting branch url...');

  let graphqlUrl;

  if (vercelEnv) {
    graphqlUrl = await getBranchUrlForVercel();
  } else {
    graphqlUrl = await getBranchUrlForLocal();
  }

  if (graphqlUrl) {
    log('Found branch url:');
    log(graphqlUrl);
  } else {
    log('No branch url found');
  }

  return graphqlUrl;
}
