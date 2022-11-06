#!/usr/bin/env node

import fetch from 'node-fetch';
import { mkdir, writeFile } from 'node:fs/promises';

const generatedDataPath = './src/generated';

async function fetchData() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  return data;
}

async function main() {
  const data = await fetchData();
  mkdir(generatedDataPath, { recursive: true });
  await writeFile(`${generatedDataPath}/sharedData.json`, JSON.stringify(data));
}

main();
