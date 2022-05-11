import crypto from 'crypto';

/**
 * Derive a JWKS Key ID an md5 of the key being identified.
 */
export function getJwksKid(key: string) {
  return (
    crypto
      .createHash('md5')
      // The key can be a multiline string when coming from options, so normalize
      .update(key.trim().replace(/\n/g, '\\n'))
      .digest('hex')
  );
}

export function getOrigin() {
  const url = new URL(process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL ?? 'http://localhost:3000/');

  return url.origin;
}

export function getIssuer(issuer?: string) {
  // Explicit values are used literally, otherwise use a URL.
  // When using the URL add a trailing slash.
  return issuer ?? process.env.NEXTAUTHOIDC_ISSUER ?? `${getOrigin()}/`;
}
