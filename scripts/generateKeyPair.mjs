#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import { exportJWK, exportPKCS8, generateKeyPair } from 'jose';

function keyToKid(key) {
  return crypto.createHash('md5').update(key).digest('hex');
}

(async () => {
  const { publicKey, privateKey } = await generateKeyPair('RS256');

  const privateKeyString = await exportPKCS8(privateKey);

  console.log(`
Add the following line to your .env file, this is your private key
`);
  console.log(`NEXTAUTHOIDC_PRIVATE_KEY='${privateKeyString.trim().replace(/\n/g, '\\n')}'`);

  const publicJwk = await exportJWK(publicKey);

  const jwks = {
    keys: [
      {
        ...publicJwk,
        use: 'sig',
        alg: 'RS256',
        kid: keyToKid(publicJwk.n)
      }
    ]
  };

  console.log(`
Writing your public key to 'keys/nextauthoidc-public-key.json'
  `);
  fs.mkdirSync('keys', { recursive: true });
  fs.writeFileSync('keys/jwks.json', JSON.stringify(jwks, null, 2));
})();
