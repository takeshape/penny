import { siteUrl, takeshapeAuthAudience, takeshapeAuthIssuer } from '@/config';
import createNextAuthAllAccess from '@takeshape/next-auth-all-access/v5';
import jwks from '../keys/jwks.json';

export const {
  handlers: { GET },
  withAllAccess
} = createNextAuthAllAccess({
  issuer: takeshapeAuthIssuer,
  origin: siteUrl,
  jwks,
  clients: [
    {
      id: 'takeshape',
      audience: takeshapeAuthAudience,
      expiration: '6h',
      allowedClaims: ['name', 'email', 'sub', 'shopifyCustomerAccessToken'],
      renameClaims: {
        shopifyCustomerAccessToken: 'https://takeshape.io/customer_access_token',
        displayName: 'name'
      }
    }
  ]
});
