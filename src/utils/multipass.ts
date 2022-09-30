import { shopifyMultipassSecret } from 'config';
import crypto from 'node:crypto';

const blockSize = 16;

function toUrlSafe(token: string) {
  return token.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function signData(signingKey: Buffer, data: Buffer) {
  return crypto.createHmac('sha256', signingKey).update(data).digest();
}

function encryptData(encryptionKey: Buffer, data: string) {
  const iv = crypto.randomBytes(blockSize);
  const cipher = crypto.createCipheriv('aes-128-cbc', encryptionKey, iv);
  return Buffer.concat([iv, cipher.update(data, 'utf8'), cipher.final()]);
}

export type MultipassCustomerData = {
  email: string;
} & Record<string, unknown>;

export function createMultipassToken(customerData: MultipassCustomerData) {
  const keyMaterial = crypto.createHash('sha256').update(shopifyMultipassSecret).digest();
  const encryptionKey = keyMaterial.slice(0, blockSize);
  const signingKey = keyMaterial.slice(blockSize, 32);

  customerData.created_at = new Date().toISOString();

  const encrypted = encryptData(encryptionKey, JSON.stringify(customerData));
  const token = Buffer.concat([encrypted, signData(signingKey, encrypted)]).toString('base64');

  return toUrlSafe(token);
}
