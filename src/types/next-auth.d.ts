import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultUser {
    shopifyCustomerAccessToken?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
    shopifyCustomerAccessToken?: string;
  }

  interface Profile {
    given_name?: string;
    family_name?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends Record<string, unknown>, DefaultJWT {
    firstName?: string | null;
    lastName?: string | null;
    shopifyCustomerAccessToken?: string;
  }
}
