#!/usr/bin/env node

import { exportPKCS8, exportSPKI, generateKeyPair } from 'jose';

(async () => {
  const { publicKey, privateKey } = await generateKeyPair('RS256');

  const publicKeyString = await exportSPKI(publicKey);
  const privateKeyString = await exportPKCS8(privateKey);

  console.log(`Add the following two lines to your .env file`);
  console.log(`NEXTAUTHOIDC_PRIVATE_KEY='${publicKeyString.trim().replace(/\n/g, '\\n')}'`);
  console.log(`NEXTAUTHOIDC_PUBLIC_KEY='${privateKeyString.trim().replace(/\n/g, '\\n')}'`);
})();
