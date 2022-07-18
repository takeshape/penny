#!/usr/bin/env node
import crypto from 'node:crypto';

const multipassSecret = '187a13497d3493a1a112aff9eddfca6f';
const blockSize = 16;

const keyMaterial = crypto.createHash('sha256').update(multipassSecret).digest();
const encryptionKey = keyMaterial.slice(0, blockSize);
const signatureKey = keyMaterial.slice(blockSize, 32);

function toUrlSafe(token) {
  return token.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function sign(data) {
  return crypto.createHmac('sha256', signatureKey).update(data).digest();
}

function encryptToken(tokenData) {
  const iv = crypto.randomBytes(blockSize);
  const cipher = crypto.createCipheriv('aes-128-cbc', encryptionKey, iv);
  const encrypted = Buffer.concat([iv, cipher.update(tokenData, 'utf8'), cipher.final()]);
  return encrypted;
}

function generateToken(customerData) {
  customerData.created_at = new Date().toISOString();
  const cipherText = encryptToken(JSON.stringify(customerData));
  const token = Buffer.concat([cipherText, sign(cipherText)]).toString('base64');
  return toUrlSafe(token);
}

const token = generateToken({
  email: 'michae+test567@takeshape.io'
});

console.log(token);
