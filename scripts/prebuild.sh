#!/bin/bash
if [[ -n "$VERCEL_GIT_COMMIT_REF" ]] 
then
  npm install --quiet -g @takeshape/cli

  # Main branch
  if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
    echo `takeshape branch tagVersion --tag ${VERCEL_GIT_COMMIT_SHA}` > .current-branch-url

  # There is a takeshape branch that matches this git branch
  elif takeshape branch list | grep -q "📁 $VERCEL_GIT_COMMIT_REF (development)"; then
    echo `takeshape branch tagVersion --name ${VERCEL_GIT_COMMIT_REF} --tag ${VERCEL_GIT_COMMIT_SHA}` > .current-branch-url
  
  # No matching takeshape branch
  else
    echo `takeshape branch tagVersion --tag ${VERCEL_GIT_COMMIT_SHA}` > .current-branch-url
  fi
else
  echo "" > .current-branch-url
fi
