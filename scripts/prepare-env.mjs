#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'node:fs';
import fsp from 'node:fs/promises';

const files = {
  env: {
    src: './.env-example',
    dest: './.env'
  },
  envTest: {
    src: './.env-example',
    dest: './.env.test'
  },
  envLocal: {
    src: './.env.local-example',
    dest: './.env.local'
  }
};

const questions = [
  {
    type: 'confirm',
    name: 'overwriteEnvFile',
    message: 'Overwrite existing .env file?',
    default: false,
    when() {
      return fs.existsSync(files.env.dest);
    }
  },
  {
    type: 'confirm',
    name: 'overwriteEnvTestFile',
    message: 'Overwrite existing .env.test file?',
    default: false,
    when() {
      return fs.existsSync(files.envTest.dest);
    }
  },
  {
    type: 'confirm',
    name: 'overwriteEnvLocalFile',
    message: 'Overwrite existing .env.local file?',
    default: false,
    when() {
      return fs.existsSync(files.envLocal.dest);
    }
  }
];

inquirer.prompt(questions).then(async (answers) => {
  if (answers.overwriteEnvFile === true || answers.overwriteEnvFile === undefined) {
    console.log('Creating new .env file');
    await fsp.copyFile(files.env.src, files.env.dest);
  }

  if (answers.overwriteEnvTestFile === true || answers.overwriteEnvTestFile === undefined) {
    console.log('Creating new .env.test file');
    await fsp.copyFile(files.envTest.src, files.envTest.dest);
  }

  if (answers.overwriteEnvLocalFile === true || answers.overwriteEnvLocalFile === undefined) {
    console.log('Creating new .env.local file');
    await fsp.copyFile(files.envLocal.src, files.envLocal.dest);
  }
});
