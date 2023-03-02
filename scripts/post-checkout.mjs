#!/usr/bin/env node

import chalk from 'chalk';
import * as dotenv from 'dotenv';
import { gql, request } from 'graphql-request';
import inquirer from 'inquirer';
import { simpleGit } from 'simple-git';

dotenv.config();
dotenv.config({ path: '.env.local' });

const git = simpleGit();

const takeshapeAdminUrl = 'https://api.takeshape.io/admin/graphql';
const takeshapeApiKey = process.env.TAKESHAPE_API_KEY;
const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeProjectId = takeshapeApiUrl.match(/project\/([a-z0-9-]+)/)[1];
const DEVELOPMENT = 'DEVELOPMENT';

const createBranchMutation = gql`
  mutation CreateBranchMutation($input: TSCreateSchemaBranchInput!) {
    result: tsCreateSchemaBranch(input: $input) {
      branch {
        graphqlUrl
      }
    }
  }
`;

async function createBranch({ environment, branchName }) {
  const { result } = await request({
    url: takeshapeAdminUrl,
    document: createBranchMutation,
    variables: {
      projectId: takeshapeProjectId,
      environment,
      branchName
    },
    requestHeaders: {
      Authorization: `Bearer ${takeshapeApiKey}`
    }
  });

  return result;
}

const prefix = chalk.cyan('takeshape');

function log(msg) {
  console.log(`${prefix} - ${msg}`);
}

const questions = [
  {
    type: 'confirm',
    prefix,
    name: 'shouldCreateBranch',
    message: 'Would you like to create a new, matching API branch?',
    default: true
  }
];

inquirer.prompt(questions).then(async ({ shouldCreateBranch }) => {
  if (shouldCreateBranch) {
    const headBranchName = await git.revparse(['--abbrev-ref', 'HEAD']);
    const remoteOrigin = await git.remote(['show', 'origin']);
    const defaultBranchName = remoteOrigin.match(/HEAD branch: (.*)/)[1];

    if (headBranchName === defaultBranchName) {
      log('Cannot create a branch for the default branch');
      return;
    }

    const result = await createBranch({ environment: DEVELOPMENT, branchName: headBranchName });

    if (result?.graphqlUrl) {
      log('Created a new API branch:');
      log(result?.graphqlUrl);
      return;
    }

    log('Unable to create a new API branch');
  }
});
