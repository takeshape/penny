import NextAuthOIDC from 'lib/next-auth-oidc';

export default NextAuthOIDC({
  clients: [
    {
      id: 'takeshape',
      name: 'TakeShape',
      audience: 'https://api.takeshape.io/project/3a295882-86b4-4914-a486-2376b14e6ff5/openid',
      expiration: '6h'
    }
  ]
});
