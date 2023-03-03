#!/usr/bin/env node

import * as dotenv from 'dotenv';
import inquirer from 'inquirer';
import { simpleGit } from 'simple-git';
import { getClient } from './lib/takeshape-client.mjs';
import { getProjectId, logPrefix, logWithPrefix as log } from './lib/util.mjs';

dotenv.config();
dotenv.config({ path: '.env.local' });

const git = simpleGit();

const takeshapeApiKey = process.env.TAKESHAPE_API_KEY;
const DEVELOPMENT = 'DEVELOPMENT';

const questions = [
  {
    type: 'confirm',
    prefix: logPrefix,
    name: 'shouldCreateBranch',
    message: 'Would you like to create a new API branch?',
    default: false
  }
];

inquirer.prompt(questions).then(async ({ shouldCreateBranch }) => {
  if (shouldCreateBranch) {
    const takeshape = getClient({ apiKey: takeshapeApiKey });
    const projectId = getProjectId();
    const headBranchName = await git.revparse(['--abbrev-ref', 'HEAD']);
    const remoteOrigin = await git.remote(['show', 'origin']);
    const defaultBranchName = remoteOrigin.match(/HEAD branch: (.*)/)[1];

    if (headBranchName === defaultBranchName) {
      log('Cannot create a branch for the default branch');
      return;
    }

    const result = await takeshape.createBranch({
      input: { projectId, environment: DEVELOPMENT, branchName: headBranchName }
    });

    if (result?.branch?.graphqlUrl) {
      log(`Created a new API branch '${headBranchName}':`);
      log(result.branch.graphqlUrl);
      return;
    }

    log('Unable to create a new API branch');
  }
});
