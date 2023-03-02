import * as dotenv from 'dotenv';
import { gql, request } from 'graphql-request';
import parseArgs from 'minimist';
import { simpleGit } from 'simple-git';

dotenv.config();
dotenv.config({ path: '.env.local' });

const takeshapeAdminUrl = 'https://api.takeshape.io/admin/graphql';
const takeshapeApiKey = process.env.TAKESHAPE_API_KEY;
const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
const takeshapeProjectId = takeshapeApiUrl.match(/project\/([a-z0-9-]+)/)[1];
const PRODUCTION = 'PRODUCTION';
const DEVELOPMENT = 'DEVELOPMENT';

const git = simpleGit();

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

export async function main() {
  const argv = parseArgs(process.argv.slice(2));
  console.log(argv);
  // const isRepo = await git.checkIsRepo();
  // if (isRepo) {
  //   const headBranchName = await git.revparse(['--abbrev-ref', 'HEAD']);
  //   const remoteOrigin = await git.remote(['show', 'origin']);
  //   const defaultBranchName = remoteOrigin.match(/HEAD branch: (.*)/)[1];
  //   const environment = headBranchName === defaultBranchName ? PRODUCTION : DEVELOPMENT;
  //   const branchName = environment === PRODUCTION ? '' : headBranchName;

  //   let result = await getBranch({ environment, branchName });

  //   if (!result) {
  //     result = await getBranch({ environment: PRODUCTION });
  //   }

  //   if (result?.graphqlUrl) {
  //     const { graphqlUrl } = result;
  //     console.log(`${chalk.cyan('takeshape')} - Using branch-specific api url:`);
  //     console.log(`${chalk.cyan('takeshape')} - ${graphqlUrl}`);
  //     process.env.NEXT_PUBLIC_BRANCH_TAKESHAPE_API_URL = graphqlUrl;
  //   }
  // }
}

main();
