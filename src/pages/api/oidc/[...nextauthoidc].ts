import NextAuthOIDC from 'lib/next-auth-oidc';

export default NextAuthOIDC({
  clients: [
    {
      id: 'takeshape',
      name: 'TakeShape',
      audience: 'https://api.takeshape.io/project/06ccc3dc-a9da-4f5b-9142-5a104db52ee3/open-id',
      expiration: '6h'
    }
  ]
});
