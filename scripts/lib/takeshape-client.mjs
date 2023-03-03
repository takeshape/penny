import { gql, GraphQLClient } from 'graphql-request';

const takeshapeAdminUrl = 'https://api.takeshape.io/admin/graphql';

export const getBranchQuery = gql`
  query GetSchemaBranchQuery($environment: TSSchemaBranchEnvironment!, $branchName: String, $projectId: String!) {
    result: tsGetSchemaBranch(projectId: $projectId, environment: $environment, branchName: $branchName) {
      graphqlUrl
    }
  }
`;

export const tagBranchMutation = gql`
  mutation ($input: TSCreateSchemaBranchTagInput!) {
    result: tsCreateSchemaBranchTag(input: $input) {
      branchVersion {
        graphqlUrl
      }
    }
  }
`;

export const createBranchMutation = gql`
  mutation CreateBranchMutation($input: TSCreateSchemaBranchInput!) {
    result: tsCreateSchemaBranch(input: $input) {
      branch {
        graphqlUrl
      }
    }
  }
`;

export function getClient({ apiKey }) {
  const client = new GraphQLClient(takeshapeAdminUrl, { headers: { Authorization: `Bearer ${apiKey}` } });

  return {
    getBranch(variables) {
      return client.request(getBranchQuery, variables);
    },
    tagBranch(variables) {
      return client.request(tagBranchMutation, variables);
    },
    createBranch(variables) {
      return client.request(createBranchMutation, variables);
    }
  };
}
