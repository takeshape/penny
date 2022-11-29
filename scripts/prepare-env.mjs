#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'node:fs';
// import fsp from 'node:fs/promises';

const questions = [
  {
    type: 'confirm',
    name: 'overwriteEnvFile',
    message: 'Overwrite existing .env file?',
    default: false,
    when() {
      return fs.existsSync('./.env');
    }
  },
  {
    type: 'confirm',
    name: 'overwriteEnvTestFile',
    message: 'Overwrite existing .env.test file?',
    default: false,
    when() {
      return fs.existsSync('./.env.test');
    }
  },
  {
    type: 'confirm',
    name: 'overwriteEnvLocalFile',
    message: 'Overwrite existing .env.local file?',
    default: false,
    when() {
      return fs.existsSync('./.env.local');
    }
  }
];

inquirer.prompt(questions).then((answers) => {
  if (answers.overwriteEnvFile === true || answers.overwriteEnvFile === undefined) {
    console.log('Creating new .env file');
  }

  if (answers.overwriteEnvTestFile === true || answers.overwriteEnvTestFile === undefined) {
    console.log('Creating new .env.test file');
  }

  if (answers.overwriteEnvLocalFile === true || answers.overwriteEnvLocalFile === undefined) {
    console.log('Creating new .env.test file');
  }
});
