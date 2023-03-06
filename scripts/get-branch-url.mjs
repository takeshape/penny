#!/usr/bin/env node

import { getBranchUrlForLocal, getBranchUrlForVercel } from './lib/branch-url.mjs';

const vercelEnv = process.env.VERCEL_ENV;

async function main() {
  let graphqlUrl;

  if (vercelEnv) {
    graphqlUrl = await getBranchUrlForVercel();
  } else {
    graphqlUrl = await getBranchUrlForLocal();
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
