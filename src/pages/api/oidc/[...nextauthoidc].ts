import NextAuthOIDC from 'lib/next-auth-oidc';

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArTN/lv1KD7OL2ed5KaO+
SD8VwlnV1JnPQBhHrZtdg4reD2bsLR4zbUCUv0nqRBOROzJ60c+yZ6Ghs7pEY2Tc
uP+pM+tAt9JPWJMrF26JXRNKYJYjpwZKq+sCXsRRqShabgCyDEqcmXqeXJOkAWx7
5YfJO1+bPkh6hYjOK2hCvSxjHp1Ke12m1gmrTXB15jvw8X9ErnsePjfYCUKFnTEw
LPC+noJvIEZ4iV87CtRGuQZcO/Pdl0Uul6NWIjiVFyzwycILFIBfkPvlCv/cjKaH
g8TLiRSzadWl/6Oq+CXzqYXjQ5iF7s+BYh97tmr0hnmV6bHaN3lDSn7XoASpGrZo
kQIDAQAB
-----END PUBLIC KEY-----
`;

export default NextAuthOIDC({
  publicKey,
  clients: [
    {
      id: 'takeshape',
      name: 'TakeShape',
      audience: 'https://api.takeshape.io/project/3a295882-86b4-4914-a486-2376b14e6ff5/openid',
      expiration: '6h'
    }
  ]
});
