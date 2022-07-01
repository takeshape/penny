#!/bin/bash

echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip ci]"* || "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip build]"* || "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip deploy]"* ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
	echo "✅ - Build can proceed"
  exit 1;
fi
