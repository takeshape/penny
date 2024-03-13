import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  type User = {
    shopifyCustomerAccessToken?: string;
  } & DefaultUser;

  type Session = {
    user?: User;
    shopifyCustomerAccessToken?: string;
  } & DefaultSession;

  type Profile = {
    given_name?: string;
    family_name?: string;
  };
}

declare module 'next-auth/jwt' {
  type JWT = {
    firstName?: string | null;
    lastName?: string | null;
    shopifyCustomerAccessToken?: string;
  } & Record<string, unknown> &
    DefaultJWT;
}
