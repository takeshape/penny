import { createPrivateKey } from 'crypto';
import type { KeyLike } from 'jose';

/**
 * Adapted from jose to avoid the unnecessary async wrapper
 */
export function importPKCS8(pkcs8: string): KeyLike {
  if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
    throw new TypeError('"pkcs8" must be PCKS8 formatted string');
  }

  return createPrivateKey({
    key: Buffer.from(pkcs8.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ''), 'base64'),
    type: 'pkcs8',
    format: 'der'
  });
}
