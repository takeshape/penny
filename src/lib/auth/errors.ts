import { getSingle } from '@/lib/types';
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

const defaultSigninErrorMessage = 'Unable to sign in.';

export const errors: Record<ErrorType, string> = {
  AccessDenied: 'Please sign in to access this page.',
  OAuthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  AccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  OAuthSignInError: 'Try signing in with a different account.',
  EmailSignInError: 'Try signing in with a different account.',
  SignOutError: 'Could not sign out. If this problem persists contact support.',
  SessionTokenError: 'Session error. Please sign in again.',
  /**
   * Custom errors
   */
  CheckoutSessionRequired: 'Please sign in to checkout.',
  CredentialsSignin: 'Email address or password are incorrect.',
  CannotCreate: 'Email address already in use. Sign in instead.'
};

const credentialSignInErrorCodes: Record<string, string> = {
  credentials: 'Email address or password are incorrect.',
  'missing-credentials': 'Email address or password not provided.',
  'no-account': 'Email address or password are incorrect.',
  'email-in-use': 'Email address already in use. Sign in instead.',
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
