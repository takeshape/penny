import { getSingle } from '@/lib/util/types';
import { ServerProps } from '@/types/next';
import { CredentialsSignin } from '@auth/core/errors';

export function encodeErrorCode(data: Record<string, string>) {
  return encodeURIComponent(
    Object.entries(data)
      .map(([k, v]) => `${k}=${v}`)
      .join(',')
  );
}

export function decodeErrorCode(code: string | undefined) {
  code = code ? decodeURIComponent(code) : undefined;

  if (!code?.match(/.+=.+,/)) {
    return {
      code
    };
  }

  return code.split(',').reduce((e, i) => {
    const [key, value] = i.split('=');
    return {
      ...e,
      [key]: value
    };
  }, {});
}

export type ErrorType =
  // Default next-auth signin page errors
  | 'Signin'
  | 'OAuthSignin'
  | 'OAuthCallbackError'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'EmailSignin'
  | 'SessionRequired'
  // AuthError types
  | 'AccessDenied'
  | 'CredentialsSignin'
  | 'OAuthAccountNotLinked'
  | 'SessionTokenError'
  | 'OAuthSignInError'
  | 'EmailSignInError'
  | 'SignOutError'
  | 'AccountNotLinked'
  // App error types
  | 'CheckoutSessionRequired'
  | 'CannotCreate';

export class MissingCredentialsError extends CredentialsSignin {
  code = 'missing-credentials';
}

export class EmailInUseError extends CredentialsSignin {
  code = 'email-in-use';
}

export class AccountDisabledError extends CredentialsSignin {
  code = 'disabled';
  data: Record<string, string>;

  constructor(message: string, { cause, data }: ErrorOptions & { data: Record<string, string> }) {
    super(message, { cause });
    this.data = data;
    this.code = encodeErrorCode({ code: this.code, ...data });
  }
}

export class NoAccountError extends CredentialsSignin {
  code = 'no-account';
}

export class NoEmailError extends CredentialsSignin {
  code = 'no-email';
}

export class NoAccessTokenError extends CredentialsSignin {
  code = 'no-access-token';
}

export class MultipassError extends CredentialsSignin {
  code = 'multipass';
}

export type SigninError = {
  type: string;
  code: string;
} & Record<string, string>;

export function parseSigninError(searchParams: ServerProps['searchParams']): SigninError | undefined {
  const type = searchParams?.error ? getSingle(searchParams.error) : undefined;

  if (!type) {
    return;
  }

  if (type !== CredentialsSignin.type) {
    return {
      type,
      code: 'unknown'
    };
  }

  const code = searchParams?.code ? getSingle(searchParams.code) : undefined;

  return {
    type,
    code: 'credentials',
    ...decodeErrorCode(code)
  };
}

const defaultSigninErrorMessage = 'Try signing in with a different account.';
const defaultCredentialsErrorMessage = 'Email address or password are incorrect.';

export const errors: Record<ErrorType, string> = {
  /**
   * From the default Signin page
   * https://github.com/nextauthjs/next-auth/blob/5ea8b7b0f4d285e48f141dd91e518c905c9fb34e/packages/core/src/lib/pages/signin.tsx#L8C7-L22
   */
  Signin: defaultSigninErrorMessage,
  OAuthSignin: defaultSigninErrorMessage,
  OAuthCallbackError: defaultSigninErrorMessage,
  OAuthCreateAccount: defaultSigninErrorMessage,
  EmailCreateAccount: defaultSigninErrorMessage,
  Callback: defaultSigninErrorMessage,
  EmailSignin: 'The e-mail could not be sent.',
  SessionRequired: 'Please sign in to access this page.',

  /**
   * Other errors from @auth/core it makes sense to handle (maybe they are in transition?)
   */
  AccessDenied: 'Please sign in to access this page.',
  OAuthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  AccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  OAuthSignInError: defaultSigninErrorMessage,
  EmailSignInError: defaultSigninErrorMessage,
  SignOutError: 'Could not sign out. If this problem persists contact support.',
  SessionTokenError: 'Session error. Please sign in again to access this page.',

  /**
   * Custom errors
   */
  CheckoutSessionRequired: 'Please sign in to checkout.',
  CredentialsSignin: defaultCredentialsErrorMessage,
  CannotCreate: 'Email address already in use. Sign in instead.'
};

const credentialSignInErrorCodes: Record<string, string> = {
  credentials: defaultCredentialsErrorMessage,
  'missing-credentials': 'Email address or password not provided.',
  'no-account': defaultCredentialsErrorMessage,
  'email-in-use': 'Email address in use, try another sign in method.',
  disabled: 'This account needs to be activated.',
  // Not actually CredentialsSignin errors, but that's the only way to throw custom data
  'no-email': 'No email address found on the linked account.',
  'no-access-token': 'Unable to get an access token from Shopify.',
  multipass: 'Multipass error connecting your account to Shopify.'
};

export function getSigninErrorMessage(error: SigninError) {
  let message = '';

  if (error.type === CredentialsSignin.type) {
    message = credentialSignInErrorCodes[error.code];
  } else {
    message = errors[error.type as ErrorType];
  }

  return message ?? defaultSigninErrorMessage;
}
