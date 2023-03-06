#!/usr/bin/env node

import { getBranchForLocal, tagBranchForVercel } from './lib/branch-url.mjs';

const vercelEnv = process.env.VERCEL_ENV;

async function main() {
  let graphqlUrl;

  if (vercelEnv) {
    graphqlUrl = await tagBranchForVercel();
  } else {
    graphqlUrl = await getBranchForLocal();
  }

  if (graphqlUrl) {
    console.log(graphqlUrl);
  }

  process.exit();
}

main();
