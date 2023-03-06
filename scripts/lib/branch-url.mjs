import * as dotenv from 'dotenv';
import { simpleGit } from 'simple-git';
import { getClient } from './takeshape-client.mjs';
import { getProjectId, logWithPrefix as log } from './util.mjs';

dotenv.config();

const PRODUCTION = 'PRODUCTION';
const DEVELOPMENT = 'DEVELOPMENT';

const vercelEnv = process.env.VERCEL_ENV;

const git = simpleGit();

export async function getBranchForLocal() {
  dotenv.config({ path: '.env.local' });

  const isRepo = await git.checkIsRepo();

  if (isRepo) {
    const apiKey = process.env.TAKESHAPE_API_KEY;

    const takeshape = getClient({ apiKey });
    const projectId = getProjectId();

    const headBranchName = await git.revparse(['--abbrev-ref', 'HEAD']);
    const remoteOrigin = await git.remote(['show', 'origin']);
    const defaultBranchName = remoteOrigin.match(/HEAD branch: (.*)/)[1];

    if (headBranchName === defaultBranchName) {
      // Default branch, do not need a branch URL
      return;
    }

    return takeshape.getBranch({ projectId, environment: DEVELOPMENT, branchName: headBranchName });
  }
}

export async function tagBranchForVercel() {
  const tagName = process.env.VERCEL_GIT_COMMIT_SHA;
  const apiKey = process.env.TAKESHAPE_API_KEY;

  const takeshape = getClient({ apiKey });
  const projectId = getProjectId();

  if (vercelEnv === 'production') {
    const result = await takeshape.tagBranch({ projectId, environment: PRODUCTION, tagName });
    return result?.branchVersion;
  }

  const branchName = process.env.VERCEL_GIT_COMMIT_REF;
  const result = await takeshape.tagBranch({ projectId, environment: DEVELOPMENT, branchName, tagName });
  return result?.branchVersion;
}

export async function setProcessBranchUrl() {
  log('Getting branch url...');

  let branch;

  if (vercelEnv) {
    branch = await tagBranchForVercel();
  } else {
    branch = await getBranchForLocal();
  }

  if (branch) {
    log(`Found API branch '${branch.branchName}'`);
    process.env.NEXT_PUBLIC_BRANCH_TAKESHAPE_API_URL = branch.graphqlUrl;
  } else {
    log('Using default production API branch');
  }

  return graphqlUrl;
}
