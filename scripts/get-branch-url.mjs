#!/usr/bin/env node

const vercelEnv = process.env.VERCEL_ENV;

async function main() {
  let graphqlUrl;

  if (vercelEnv) {
    graphqlUrl = await getTakeshapeBranchUrlForVercel();
  } else {
    graphqlUrl = await getTakeshapeBranchUrlForLocal();
  }

  if (graphqlUrl) {
    console.log(graphqlUrl);
    process.exit();
  } else {
    console.error('Could not load a branch URL.');
    process.exit(1);
  }
}

main();
