#!/bin/bash
if [ ! -z "$VERCEL_GIT_COMMIT_REF" ]
then
  npm install --quiet -g @takeshape/cli
  takeshape branch delete --name ${VERCEL_GIT_COMMIT_REF}
  takeshape branch create --name ${VERCEL_GIT_COMMIT_REF}
  takeshape import --schema --preserveAuth --branch ${VERCEL_GIT_COMMIT_REF} --from .takeshape/pattern/schema.json
  echo `takeshape branch versionUrl --name ${VERCEL_GIT_COMMIT_REF}` > .current-branch-url
else
  echo "" > .current-branch-url
fi
